

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


  

function closeScreeningModal(e){
  
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

async function submitScreeningModal(e){
    const txtComment =  $("#screening-report-comments").val()
    const screening_id =  parseInt($("#screening-report-id").text());

    const isAccepted = ( $(".screening-results-checkbox:checked").length == 0 )
    let reqURL = "/screening/" + screening_id;
    let data;

    if(isAccepted){
    
        const selReviewType = $("#screening-report-select").val()
        data = {screening: { status: 3}, activity:  
        { screening_id: screening_id, screening_activity: "Recommended Review", 
        comments: "Recommended Review: " +  selReviewType + "\n" + txtComment } }
    }else{
        data = {screening: { status: 2 }, activity:  
        { screening_id: screening_id, screening_activity: "Screening Result", 
        comments: txtComment } }
        console.log(data)
    }

    const result = await $.post(reqURL, data, (payload, status)=>{return payload})
    $("#data-row-"  + screening_id).remove();
    return true;
}

M.Modal.init($("#screening-report-modal"), { onCloseEnd: closeScreeningModal});
M.Modal.init($("#review_modal-1"));
$(".screening-results-checkbox").change(screeningResultCheckHandler);