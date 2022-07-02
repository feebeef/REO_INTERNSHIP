


function searchSuggestion(el){
    const user_selection = el.target.innerText;
    
    $('#search-input').val(user_selection);
    $('#search-input').focus();
    //$("#search-popup-options").show();
 
    
    // //get search suggestions
    // let search_suggestions = { "in:": ["screening", "review"],  
    // "status:":  ["complete"],
    // "title:": [],
    // }

    // //render popup results
    // $("#search-suggestion-list").html("");
    // const template = Handlebars.templates.search_popuplist;
    // search_suggestions[user_selection].forEach( el => {
    //     $("#search-suggestion-list").append( template({tag: user_selection, value:el}) )
    // })

    // $("#search-popup-suggestions").show();
    // $('#search-input').focus();

  //  return false;
}

function showSearchOptions(e){
    // $("#search-popup-options").show();
    // }else if($('#search-input').val() == "" && !$("#search-popup-suggestions").is(":hidden")){
    //     $("#search-popup-suggestions").hide();
    //     $("#search-popup-options").show();
    // }
    //e.preventDefault();
   return false;
}

function keydownhandler(e){
    const chips =  M.Chips.getInstance($(".chips"));
   // console.log(chips.chipsData)
    if(e.keyCode == 13 && chips.chipsData.length > 0 && $('#search-input').val() == ""){
            show_search_results();
    }
    
    // else if( $('#search-input').val() == "" && $("#search-popup-options").is(":hidden") ){
    //     $("#search-popup-suggestions").hide();
    //     $("#search-popup-options").show();
    //     $('#search-input').focus();
    // }else if( e.keyCode != 13 && $('#search-input').val() != "" && $("#search-popup-options").is(":hidden") ){
    //    // $("#search-popup-suggestions").show();
    //     $("#search-popup-options").show();
    //     $('#search-input').focus();
    // }
    return false;
}


function search_query(e){
    $('#search-input').val("");
    
    M.Chips.getInstance($(".chips")).addChip({
        tag:  e.target.innerText
    });
    $("#search-popup-suggestions").hide()
  
    $("#search-popup-options").show();
  //  $('#search-input').focus();

}

function renderSearchResults(dataArr, el){
    let temp = Handlebars.templates.search_result;
    console.log(dataArr)
    console.log( Handlebars.templates.search_result)
    dataArr.forEach(data =>{
        console.log(data)
        el.append( temp( data  ));
    });
}

function search(opt){
    let reqURL = "/search?";

    opt.forEach(op=>{
        reqURL += ( op + "&");
    })
    reqURL[reqURL.length -1 ] = "";
    $(".search-result-item.proposal").html("")
    $.get(reqURL).then( (payload,status)=>{ 
        renderSearchResults(payload, $(".search-result-item.proposal") )
    } )
}
function show_search_results(){
    // $(".search-popup").hide();
    // var instance = M.Chips.getInstance($(".chips"));
    console.log(instance.chipsData)

    // let options = []
    // instance.chipsData.forEach(  chips =>{
    //     let tag = chips.tag.split(':');
    //     let q = tag[0] + "=" + tag[1];
    //     options.push( q);
    // })

    search({protocol_code: instance.chipsData})

    $(".search-result-wrapper").show();
}





var elems = document.querySelectorAll('.chips');
const options = {};
var instances = M.Chips.init(elems, options);

$('.sidenav').sidenav();
$("#search-popup-options").hide();

$("#search-popup-suggestions").hide();
$(".search-result-wrapper").hide();
$('#search-input').on('focus', showSearchOptions);


$('#search-input').keyup( keydownhandler);
$('.search-option').on('click', searchSuggestion);

$(document).on('click',function click(e) {
    //alert("yo")
    if(!$("#search-input").is(":focus")){
       // $("#search-popup-suggestions").hide();
        $("#search-popup-options").hide();

    }
})