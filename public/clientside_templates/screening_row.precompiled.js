(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['screening_row'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span><label>\r\n                          <input type=\"checkbox\" class=\"filled-in checkbox-blue-grey proposal-checkbox\" id="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":107},"end":{"line":5,"column":123}}}) : helper)))
    + " />\r\n                          <span></span>\r\n                          </label>\r\n                          </span>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                            <select class=\"browser-default\" style=\"min-width: 120px\">\r\n                                <option value=\"\" disabled selected>Review Type</option>\r\n                                <option value=\"review\">Review</option>\r\n                                <option value=\"full-board\">Full Board</option>\r\n                                <option value=\"exempted\">Exempted</option>\r\n                                <option value=\"expedited\">Expedited</option>\r\n                                <option value=\"withdrawn\">Withdrawn</option>\r\n                            </select>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div><b>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":51,"column":36},"end":{"line":51,"column":44}}}) : helper)))
    + "</b> ("
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"college") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":50},"end":{"line":51,"column":85}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"center") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":86},"end":{"line":51,"column":120}}})) != null ? stack1 : "")
    + " )</div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"college") || (depth0 != null ? lookupProperty(depth0,"college") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"college","hash":{},"data":data,"loc":{"start":{"line":51,"column":66},"end":{"line":51,"column":77}}}) : helper)))
    + " ";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"center") || (depth0 != null ? lookupProperty(depth0,"center") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"center","hash":{},"data":data,"loc":{"start":{"line":51,"column":102},"end":{"line":51,"column":112}}}) : helper)))
    + " ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <div><b>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":63,"column":30},"end":{"line":63,"column":38}}}) : helper)))
    + "</b> ("
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"college") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":44},"end":{"line":63,"column":79}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"center") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":80},"end":{"line":63,"column":114}}})) != null ? stack1 : "")
    + " )</div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr id= \"data-row-"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":50}}}) : helper)))
    + "\" class=\"data-row\">\r\n                      <td style=\" padding-top: 10px;\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifEquals")||(depth0 && lookupProperty(depth0,"ifEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":9,"column":40}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifEquals")||(depth0 && lookupProperty(depth0,"ifEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":27},"end":{"line":16,"column":40}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifEquals")||(depth0 && lookupProperty(depth0,"ifEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"3",{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":27},"end":{"line":27,"column":39}}})) != null ? stack1 : "")
    + "                      \r\n                       \r\n                      </td>\r\n                  <td> <a style=\"color: #8B83BA;\" href=\"#!\"><i class=\"material-icons\">chevron_right</i></a></td>\r\n                  \r\n                  <td class=\"proposal\">   \r\n                      <div class=\"test\" style=\"overflow-wrap: break-word; word-wrap: break-word;\">\r\n                          <a href=\"!#\" id = \"protocol-code-"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":35,"column":59},"end":{"line":35,"column":75}}}) : helper)))
    + "\"\r\n                          style=\"padding-top: 0px !important; margin-top: -10px; text-align: start; color: #4A4AFF; font-weight: bold; font-size: 12px;\">\r\n                          "
    + alias4(((helper = (helper = lookupProperty(helpers,"protocol_code") || (depth0 != null ? lookupProperty(depth0,"protocol_code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protocol_code","hash":{},"data":data,"loc":{"start":{"line":37,"column":26},"end":{"line":37,"column":45}}}) : helper)))
    + "\r\n                          </a>\r\n                          \r\n                          \r\n                          <br>\r\n\r\n                          <div id=\"proposal-title-"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":43,"column":50},"end":{"line":43,"column":66}}}) : helper)))
    + "\">\r\n                          "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":44,"column":26},"end":{"line":44,"column":36}}}) : helper)))
    + "\r\n                          </div>\r\n                          <br>\r\n\r\n                          <div class=\"proponent-proposal hide-on-large-medium\" >\r\n                            <label style=\"font-size: 10px; color:#6E6893; font-weight: bold;\">Proponents </label>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"proponents") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":28},"end":{"line":52,"column":37}}})) != null ? stack1 : "")
    + "                        </div>\r\n                      </div>\r\n                  </td>\r\n                  <td class=\"details hide-on-medium-small\" >\r\n                    <div class=\"test\">\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"category") || (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":58,"column":22},"end":{"line":58,"column":34}}}) : helper)))
    + "<br>\r\n                       AY "
    + alias4(((helper = (helper = lookupProperty(helpers,"AY") || (depth0 != null ? lookupProperty(depth0,"AY") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"AY","hash":{},"data":data,"loc":{"start":{"line":59,"column":26},"end":{"line":59,"column":32}}}) : helper)))
    + ", T"
    + alias4(((helper = (helper = lookupProperty(helpers,"term") || (depth0 != null ? lookupProperty(depth0,"term") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":59,"column":35},"end":{"line":59,"column":43}}}) : helper)))
    + "<br>\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"phreb_category") || (depth0 != null ? lookupProperty(depth0,"phreb_category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phreb_category","hash":{},"data":data,"loc":{"start":{"line":60,"column":22},"end":{"line":60,"column":40}}}) : helper)))
    + "<br>\r\n                      <div class = \"proponents\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"proponents") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":22},"end":{"line":64,"column":31}}})) != null ? stack1 : "")
    + "                      </div>\r\n                    </div>\r\n                  </td>\r\n                  <td class = \"status\" style=\"width: auto; min-width: 125px; max-width: 120px;\">\r\n                    \r\n                 \r\n                    <div class=\"status-type "
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":44},"end":{"line":71,"column":81}}})) != null ? stack1 : "")
    + "\"> \r\n                      <span class = \"circle  "
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":45},"end":{"line":72,"column":82}}})) != null ? stack1 : "")
    + "\"></span>\r\n"
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":22},"end":{"line":74,"column":37}}})) != null ? stack1 : "")
    + "                    </div>\r\n\r\n\r\n    \r\n                    <div class=\"due_date\">due "
    + alias4(((helper = (helper = lookupProperty(helpers,"due_date") || (depth0 != null ? lookupProperty(depth0,"due_date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data,"loc":{"start":{"line":79,"column":46},"end":{"line":79,"column":58}}}) : helper)))
    + "</div>\r\n                    <div class=\"assigned_ra\"><label style=\"font-size: 10px; color:#6E6893; font-weight: bold;\">Assigned to</label> <br>\r\n                      <a href = \"!#\" style=\"font-weight: bold\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ra") || (depth0 != null ? lookupProperty(depth0,"ra") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ra","hash":{},"data":data,"loc":{"start":{"line":81,"column":63},"end":{"line":81,"column":69}}}) : helper)))
    + "</a>\r\n                    </div>\r\n                  </td>\r\n                  <td class =\"hide-on-medium-small recent_activity\" style=\" width: 150px; max-width:150px; word-wrap: break-word; \r\n                          overflow-y: auto;\r\n                          white-space:normal; font-size: 13px;\">\r\n                     <div class = \"activity\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_activity") || (depth0 != null ? lookupProperty(depth0,"screening_activity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_activity","hash":{},"data":data,"loc":{"start":{"line":87,"column":45},"end":{"line":87,"column":67}}}) : helper)))
    + "</div>\r\n                      <p>\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"comments") || (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comments","hash":{},"data":data,"loc":{"start":{"line":89,"column":22},"end":{"line":89,"column":34}}}) : helper)))
    + "</p>\r\n                  <td>\r\n\r\n                  <td class=\"hide-on-medium-small action-row\" style=\"font-size: 12px; align-items: center;\">\r\n                    <a href=\"!#\" class=\"btn-flat\" style=\"color: #6E6893; text-align: center; font-weight: bold; font-size: 12px; padding-top: 30px;\">\r\n                    View More<i class=\"material-icons\"></i></a>\r\n                  </td>\r\n                  <td style=\"width: 5px;\"> <a style=\"color: #8B83BA;\"href=\"#!\"><i class=\"material-icons\">more_vert</i></a></td>\r\n                  </form>\r\n            </tr>\r\n\r\n";
},"useData":true});
})();