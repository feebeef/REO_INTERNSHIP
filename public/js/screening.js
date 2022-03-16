let totalPages;
let currStatus;
let currTab;

let checked_results = 0




function renderTableRows(el, dataArr){
    const template = Handlebars.templates.screening_row;
   // console.log(template)
    dataArr.forEach(data =>{
        el.append(template(data));
    });
}

function tablePageListener(page){
    const rowLimit = $("#select-row-limit").val();
    let properties =  {route:"/screening/api", page: page, rowLimit: rowLimit, tabStatus: currStatus }
    updateTableRows($("#"+currTab), properties, null, renderTableRows )
}



function changeTableTabHandler(el){
    const tableTab = {"on-going-table-content": 1, "pending-table-content": 2, "completed-table-content": 3, "withdrawn-table-content": 4}
    const tabStatus = tableTab[el.id];
    const rowLimit = $("#select-row-limit").val();
          currTab = el.id;
    $("#"+el.id).html("")
    let properties =  {route:"/screening/api", page: 1, rowLimit: rowLimit, tabStatus: tabStatus }
    updateTableRows($("#"+el.id), properties, null, renderTableRows);

}

function initializeTable(el){
    let properties =  {route:"/screening/api", page: 1, rowLimit: rowLimit, tabStatus: 1 }
    updateTableRows(el, properties, null, renderTableRows);
}

async function updateTableRows(el, properties, options, renderer){
    let route = properties.route;
    let currPage =  properties.page;
    let rowLimit = properties.rowLimit;
    let tabStatus = properties.tabStatus;


    // let sortBy = properties.sort_by
    // let sortType= options.sort_type;
    // let filter = options.filter;

    let reqURL = route + "?page=" + currPage + "&row_limit=" + rowLimit  + "&status=" + tabStatus;
    console.log(reqURL);
    let dataArr = await $.get(reqURL, (payload, status)=>{return payload})

    //console.log(dataArr)
     
    renderTableRows(el, dataArr);
    $('select').on('change', selectReviewHandler);
    $('.proposal-checkbox').on('change', checkScreeningHandler);
}

function screeningResultCheckHandler(e){
    console.log("Hello")
   // checked_results = 0;
    if(this.checked) {
      let str = $("#screening-report-comments").val() + e.target.nextElementSibling.innerHTML + ": \n" ;
      $("#screening-report-comments").val(str);
      checked_results++;
       $("#screening-report-select").prop('disabled', true);
       if(checked_results == 1)
        $('#screenig-report-select').prop('selectedIndex',0);
    }else if(!this.checked){
      let str = $("#screening-report-comments").val()
      str = str.replace( e.target.nextElementSibling.innerHTML + ":", "").trim();
      $("#screening-report-comments").val(str)
      checked_results--;
      if(checked_results == 0)
            $("#screening-report-select").prop('disabled', false);
    }
}





// function getFilterOptions(){
//     $("select.filter")
//     $("select.")
// }

function selectReviewHandler(e){
    const value = this.value;
    const proposal_id = e.target.parentNode.id;
    
  }


function checkScreeningHandler(e){
    if(this.checked){
        const screening_id = e.target.id;
        $("#screening-report-protocol-code").text($("#protocol-code-" + screening_id).text().trim())
        $("#screening-report-proposal-title").text($("#proposal-title-" +screening_id ).text().trim())
        $("#screening-report-id").text(screening_id)
        $("#screening-report-select").prop('disabled', false);
        checked_results= 0;
        M.Modal.getInstance(  $("#screening-report-modal") ).open()
    }
}

function initializeTable(tableEl, properties){
    let totalPages = properties.totalPages;

}

function screeningModalCloseHandler(e){
   // console.log(e)
}

async function submitScreeningModal(e){
    console.log("submit")
    const selReviewType = $("#screening-report-select").val()
    const txtComment =  $("#screening-report-comments").val()
    const screening_id =  parseInt($("#screening-report-id").text());

    //alert(screening_id)

    const isAccepted = ( $(".screening-results-checkbox:checked").length == 0 )
    let reqURL = "/screening/" + screening_id;
    let data;

    if(isAccepted){
        data = {screening: { status: 3}, activity:  { screening_id: screening_id, screening_activity: "Screening Report", 
        comments: "Recommended Review: " + selReviewType + "\n" + txtComment } }
    }else{
        data = {screening: { status: 2 }, activity:  { screening_id: screening_id, screening_activity: "Screening Result", 
        comments: txtComment } }
        console.log(data)
    }

    console.log
    await $.post(reqURL, data, (payload, status)=>{return payload})
    $("#data-row-"  + screening_id).remove();

    e.preventDefault();
     return false;
}

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.btn-flat').css("font-family", "Inter");
    $('.btn-flat').css("font-weight", "bold");
    $('select').formSelect();
    M.Modal.init($("#screening-report-modal"), { onCloseEnd: screeningModalCloseHandler});
    // M.FormSelect.init("select", {});
    // totalPages = $("#pagination").innerHTML;
    M.Tabs.init($(".screening-tabs"), { onShow: changeTableTabHandler});
    $(".screening-results-checkbox").change(screeningResultCheckHandler);

    //initializeTable($("#on-going-table-content"))
    tabs = M.Tabs.getInstance($(".screening-tabs"));
    tabs.select('on-going-table-content');

    Handlebars.registerHelper('ifEquals',
        function(a, b, opts) {
            if (a == b) {
                return opts.fn(this)
            } else {
                return opts.inverse(this)
            }
    });

})

