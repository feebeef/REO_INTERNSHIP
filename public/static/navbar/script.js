
const recent_searches = {

}


$(document).ready(function() {

    $('.sidenav').sidenav();
    $("#search-popup-options").hide();
    
    $("#search-popup-results").hide();
    $('#search-input').on('focus', searchEngine);

    //$('#search-input').focusout((e)=>{    $(".search-popup").hide();  });
     $('.search-option').on('click', (el)=>{
        $('#search-input').val(el.target.innerText);
        $('#search-input').focus();
        $(".search-popup").hide();
        
        $("#search-popup-results").show();
    });

});


function searchEngine(e){
    if( $('#search-input').val() == "")
    $("#search-popup-options").show();
    e.preventDefault();
    return false;
}




