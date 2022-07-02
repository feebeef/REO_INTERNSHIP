function getOptions(reqURL, el){
    $.get(reqURL, function(payload, status){
       console.log(payload)
        el.autocomplete({
          data: payload,
          minLength: 0,
          limit: 15
        });
    })
}

getOptions("/api/options/review", $('#form-control-review_type' ) );
getOptions("/api/options/primary_reviewer", $('#form-control-primary_reviewer' ) );

$("#form-control-review_type").change(function () {
     if( $(this).val() == "Full Review"){
      $("#field-meeting_date").css("visibility", "visible");
      $('#form-control-review_activity').val('Assigned For Full Review')
     }else if( $(this).val() == "Exempted"){
        $("#field-meeting_date").css("visibility", "hidden");
        $('#form-control-review_activity').val('Assigned For Exempted Review')
     }else{
        $("#field-meeting_date").css("visibility", "hidden");
        $('#form-control-review_activity').val('Assigned For Expedited Review')
     }
});