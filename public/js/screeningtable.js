let tableEl;

let checked_results = 0

function setCookie(cname, cvalue, exdays) {
    let d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    if(Array.isArray(cvalue) ||  typeof cvalue === 'object'  && !!cvalue ) 
                cvalue = JSON.stringify(cvalue)
    document.cookie = cname + "=" + cvalue + ";" + expires + "path=/screening";
}

function removeCookie(name) {
    document.cookie = name + '=; Max-Age=0'
}

function getCookie(name){
    const cookie = document.cookie.split(';').find(
         c => c.trim().startsWith(name + '=') )
    return  ( cookie === undefined  ) 
            ? false: cookie.trim().replace(name+"=", "")
}
function selectReviewHandler(e){
    // const value = this.value;
    // const proposal_id = e.target.parentNode.id;
    console.log("Hello")
}

function closeScreeningModal(e){
  
}


function renderTableRows(el, dataArr){
    const template = Handlebars.templates.screening_row;
   // console.log(dataArr)
    dataArr.forEach(data =>{
        data.show = getCookie("show");
        el.append(template(data));
    });
}

function showScreeningForm(e){
    e.preventDefault()
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



function changeTableTabHandler(el){
    const status = {"on-going": 1, "pending": 2, "completed": 3, "withdrawn": 0}
    //console.log(el.id)
    setCookie("status", status[el.id.replace("-table-content", "")]);
 
    $("#"+el.id).html('');
    tableEl = $("#"+el.id);

    setCookie('page', 1);
    updateTableRows(tableEl, renderTableRows, true);
    
}

function showReviewForm(){
    if(this.checked){
        alert(this.id)
       $("#form-group-review").attr('action', '/review/' + this.id)
        M.Modal.getInstance(  $("#review_modal-1") ).open()
    }
}

async function updateTableRows(el, renderer, newPage=false){

    let reqURL = "/screening/api"
    console.log(reqURL);
    console.log(document.cookie);
    tableEl.html('')
   
    
    let dataArr = await $.get(reqURL, (payload, status)=>{ console.log(status); return payload})
    console.log(dataArr)
     
    if(dataArr){
        renderer(el, dataArr);
       // $('select').on('change', selectReviewHandler);
        $('.proposal-checkbox').on('change', showScreeningForm);
        $('.review-checkbox').on('change', showReviewForm);
        $('.collapsible').collapsible();

    } 

    if(newPage)updatePagination();

}

function screeningResultCheckHandler(e){
    //alert("hello")
    if(this.checked) {
      let str = $("#screening-report-comments").val() + e.target.nextElementSibling.innerHTML + ": \n" ;
      $("#screening-report-comments").val(str);
      checked_results++;
       $("#screening-report-select").prop('disabled', true);
       $("#screening-report-select").val('');
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

async function submitScreeningModal(e){
    const txtComment =  $("#screening-report-comments").val()
    const screening_id =  parseInt($("#screening-report-id").text());

    const isAccepted = ( $(".screening-results-checkbox:checked").length == 0 )
    let reqURL = "/screening/" + screening_id;
    let data;

    if(isAccepted){
        const selReviewType = $("#screening-report-select").val()
        data = {screening: { status: 3}, activity:  { screening_id: screening_id, screening_activity: "Screening Report", 
        comments: "Recommended Review: " +  selReviewType + "\n" + txtComment } }
    }else{
        data = {screening: { status: 2 }, activity:  { screening_id: screening_id, screening_activity: "Screening Result", 
        comments: txtComment } }
        console.log(data)
    }

    console.log(reqURL)
    await $.post(reqURL, data, (payload, status)=>{return payload})
    $("#data-row-"  + screening_id).remove();
     return false;
}
function popupFilter(e){
    const popup = $('#screening-filter-popup');

    if(!popup.hasClass('visible')){
        $(document).on('click',function close_popups(e) {
            $(document).off('click');
            applyFilter(e)
        })
        e.stopPropagation();
        let c = getCookie("filter");
        if(c){ 
            c = JSON.parse(c) 
            console.log(c)
            Object.entries(c).forEach( ([key, itemArr]) => {
                itemArr.forEach( item=>{
                    console.log( $("#filter-" + key + "-" +  item).val() );
                    $("#filter-" + key + "-" +  item).prop("checked", true);
                    console.log(item)
                })
            })
        }
        const position = $("#btn-filter").position();
        const h =  $("#btn_filter_").height();;
        popup.css({ top: position.top + h, left: position.left})
        popup.addClass("visible")

    }else  popup.removeClass("visible")
     
}

function clearFilter(e){
    e.preventDefault();
    const elFilter = $(".filter.form-control:checked")
    elFilter.each((i, el) =>{
        $(el).prop('checked', false)
    })
    removeCookie("filter")
}

function applyRowLimit(){
    setCookie("limit", $("#select-row-limit").val())
    setCookie('page', 1);
    updateTableRows(tableEl, renderTableRows, true);
}

function applySort(){
    setCookie("sort", $("#select-sort-by").val())
    setCookie('page', 1);
    updateTableRows(tableEl, renderTableRows, true);
}

function applyFilter(){

    const elFilter = $(".filter.form-control:checked")
    const popup = $('#screening-filter-popup');
    const filters = {}
    elFilter.each((i, el) =>{
        const val = el.value
        const name = el.name;
        if(! (name in filters) ) filters[name] = [];
        filters[name].push(val)
    })
    setCookie("filter", filters);
    console.log(document.cookie)
    if(popup.hasClass("visible")) popup.removeClass("visible");
    setCookie('page', 1);
    updateTableRows(tableEl, renderTableRows, true);
  
}


function initTableOptions(){
    setCookie("limit", $("#select-row-limit").val());
    setCookie("page", 1);

    $("#btn-filter").click( popupFilter )
    $('#btn-apply-filter').click(applyFilter)
    $("#btn-clear-filter").click( clearFilter )
    $('#select-sort-by').on('change', applySort)
    $('#select-row-limit').on('change',applyRowLimit)
    $("#screening-filter-popup").click(function(event) { event.stopPropagation();});
}

function initTableTabs(){
    M.Modal.init($("#screening-report-modal"), { onCloseEnd: closeScreeningModal});
    M.FormSelect.init($("select"), {});
    M.Tabs.init($(".screening-tabs"), { onShow: changeTableTabHandler});
    $(".screening-results-checkbox").change(screeningResultCheckHandler);

}


function initNavbar(){
    el_autohide = document.querySelector('.autohide');
    screening_table = document.getElementsByClassName("material-table");
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
              
            }
            last_scroll_top = scroll_top;
      }); 

    }
    $('.sidenav').sidenav();
}

function initHandlebarHelpers(){
    Handlebars.registerHelper('ifEquals',
    function(a, b, opts) {
        if (a == b) {
            return opts.fn(this)
        } else {
            return opts.inverse(this)
        }
});
}
function updatePagination(){
   console.log('TOTAL PAGE ' +  getCookie('totalpage'))
   $('#pagination').html('')
   $('#pagination').materializePagination({
       align: 'center',
       lastPage:  getCookie('totalpage'),
       firstPage: 1,
       useUrlParameter: false,
       onClickCallback: function(requestedPage){
           setCookie('page', requestedPage);
           updateTableRows(tableEl, renderTableRows)
       }
   }); 
}

initTableOptions();
initTableTabs();

$(document).ready(function(){
    $('.btn-flat').css("font-family", "Inter");
    $('.btn-flat').css("font-weight", "bold");
    initNavbar();
    initHandlebarHelpers();
    tabs = M.Tabs.getInstance($(".screening-tabs"));
    tabs.select('on-going-table-content');
})

//  {
//     align: 'left',
//     lastPage:  10,
//     firstPage:  1,
//     urlParameter: 'page',
//     useUrlParameter: true,
//     onClickCallback: function(requestedPage){
//         console.log('Requested page is '+ requestedPage);
// }



