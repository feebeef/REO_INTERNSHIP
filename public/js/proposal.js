$("#del_1").hide();
$('#proposal_modal').modal();
let proponent_row_counter = 1;


Handlebars.registerHelper('get_status',
function (key) {
 switch (key) {
   case 1:
     return "on-going"
  case 2:
     return "pending"
  case 3:
     return "completed"
  case 4:
     return "overdue"
  case 0:
    return "withdrawn"
   default:
     return "";
 }
});

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

function autofill_proponent_details(e){
     const valName = $(this).val();
     console.log(e)
     if(valName == "") return;
     const reqURL = "/api/options/proponent?name=" + valName;
      $.get(reqURL, function(payload, status){
        if(payload == null) return;
        console.log(payload)
        const proponentData = payload[0];
        const hasCollege = proponentData.hasOwnProperty('college');
        const hasCenter = proponentData.hasOwnProperty('center');
        const elCollege =  $(e.target.parentElement.nextElementSibling).children("#form-control-college-" + e.target.id[e.target.id.length-1]);
        const elCenter =  $(e.target.parentElement.nextElementSibling.nextElementSibling).children("#form-control-center-" + e.target.id[e.target.id.length-1]);
        if(hasCollege) elCollege.val(proponentData.college)
        if(hasCenter) elCenter.val(proponentData.center);
     })
}

function addProponentProposal(el) {
  let elProponents = $(el.parentElement); 
  let rowCountProponent = elProponents.children(".proponent-row").length +1;

  let elProponent =  $("div#proponent-row-1").clone(false);
  let elDelBtn =  elProponent.children(".col-btn").children("#del-proponent-row-1");
  let elInputFields =  elProponent.children(".input-field");
  
  let newRowID = "proponent-row-" +  (rowCountProponent);   
  let newDelID = "del-" + newRowID;

  elProponent.attr("id", newRowID);
  elDelBtn.attr("id", newDelID)

  elInputFields.each( (i , el) =>{
      const elInput =  $(el).children("input");
      const elName =  $(el).children("input").attr("name")
      let elID  = elInput.attr("id").replace("1", rowCountProponent);
     // console.log(elName)
      elInput.val("");
      elInput.attr("id", elID);
      elInput.removeClass("valid");
      elInput.attr("for", elID);
      if(elName == "name"){
        getOptions("/api/options/proponent", elInput); 
        elInput.change(autofill_proponent_details);
      }else getOptions("/api/options/" + elName, elInput);
  });

  elProponents.append(elProponent);
  elDelBtn.show();
}

function removeProponentProposal(el) {
  $(el.parentElement.parentElement).remove();
}




  $('#proposal_modal').modal();
  getOptions("/api/options/category", $('#form-control-category' ) );
  getOptions("/api/options/phreb_category",  $('#form-control-phreb') );
  getOptions("/api/options/proponent",  $('#form-control-name-1') )
  getOptions("/api/options/college",  $('#form-control-college-1'));
  getOptions("/api/options/center",  $('#form-control-center-1') );
  getOptions("/api/options/ra", $( '#form-control-ra') );
  getOptions("/api/options/ay", $( '#form-control-ay') );
  $( '#del-proponent-row-1').hide()
  $( '#form-control-name-1').change(autofill_proponent_details);
