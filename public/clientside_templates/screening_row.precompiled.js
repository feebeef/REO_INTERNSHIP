(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['screening_row'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div><b>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":26,"column":36},"end":{"line":26,"column":44}}}) : helper)))
    + "</b> ("
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"college") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":50},"end":{"line":26,"column":85}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"center") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":86},"end":{"line":26,"column":120}}})) != null ? stack1 : "")
    + " )</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"college") || (depth0 != null ? lookupProperty(depth0,"college") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"college","hash":{},"data":data,"loc":{"start":{"line":26,"column":66},"end":{"line":26,"column":77}}}) : helper)))
    + " ";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"center") || (depth0 != null ? lookupProperty(depth0,"center") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"center","hash":{},"data":data,"loc":{"start":{"line":26,"column":102},"end":{"line":26,"column":112}}}) : helper)))
    + " ";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <div><b>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":38,"column":30},"end":{"line":38,"column":38}}}) : helper)))
    + "</b> ("
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"college") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":44},"end":{"line":38,"column":79}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"center") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":80},"end":{"line":38,"column":114}}})) != null ? stack1 : "")
    + " )</div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <tr class=\"data-row\">\r\n                      <td style=\" padding-top: 10px;\">\r\n                          <form id = \"screening_\""
    + alias4(((helper = (helper = lookupProperty(helpers,"proposal_id") || (depth0 != null ? lookupProperty(depth0,"proposal_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"proposal_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":49},"end":{"line":3,"column":64}}}) : helper)))
    + " >\r\n                          <span>\r\n                           <label>\r\n                              <input type=\"checkbox\" class=\"filled-in checkbox-blue-grey\"  />\r\n                          <span></span>\r\n                          </label>\r\n                           </span>\r\n                          </form>\r\n                      </td>\r\n                  <td> <a style=\"color: #8B83BA;\" href=\"#!\"><i class=\"material-icons\">chevron_right</i></a></td>\r\n                  \r\n                  <td class=\"proposal\">   \r\n                      <div class=\"test\" style=\"overflow-wrap: break-word; word-wrap: break-word;\">\r\n                          <a href=\"!#\" style=\"padding-top: 0px !important; margin-top: -10px; text-align: start; color: #4A4AFF; font-weight: bold; font-size: 12px;\">\r\n                          "
    + alias4(((helper = (helper = lookupProperty(helpers,"protocol_code") || (depth0 != null ? lookupProperty(depth0,"protocol_code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protocol_code","hash":{},"data":data,"loc":{"start":{"line":17,"column":26},"end":{"line":17,"column":45}}}) : helper)))
    + "\r\n                          </a> \r\n                          <br>\r\n                          "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":20,"column":26},"end":{"line":20,"column":36}}}) : helper)))
    + "\r\n                          <br>\r\n\r\n                          <div class=\"proponent-proposal hide-on-large-medium\" >\r\n                            <label style=\"font-size: 10px; color:#6E6893; font-weight: bold;\">Proponents </label>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"proponents") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":28},"end":{"line":27,"column":37}}})) != null ? stack1 : "")
    + "                        </div>\r\n                      </div>\r\n                  </td>\r\n                  <td class=\"details hide-on-medium-small\" >\r\n                    <div class=\"test\">\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"category") || (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":33,"column":22},"end":{"line":33,"column":34}}}) : helper)))
    + "<br>\r\n                       AY "
    + alias4(((helper = (helper = lookupProperty(helpers,"AY") || (depth0 != null ? lookupProperty(depth0,"AY") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"AY","hash":{},"data":data,"loc":{"start":{"line":34,"column":26},"end":{"line":34,"column":32}}}) : helper)))
    + ", T"
    + alias4(((helper = (helper = lookupProperty(helpers,"term") || (depth0 != null ? lookupProperty(depth0,"term") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":34,"column":35},"end":{"line":34,"column":43}}}) : helper)))
    + "<br>\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"preb_category") || (depth0 != null ? lookupProperty(depth0,"preb_category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preb_category","hash":{},"data":data,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":39}}}) : helper)))
    + " <br>\r\n                      <div class = \"proponents\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"proponents") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":22},"end":{"line":39,"column":31}}})) != null ? stack1 : "")
    + "                      </div>\r\n                    </div>\r\n                  </td>\r\n                  <td class = \"status\" style=\"width: auto; min-width: 125px; max-width: 120px;\">\r\n                    \r\n                 \r\n                    <div class=\"status-type "
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":44},"end":{"line":46,"column":81}}})) != null ? stack1 : "")
    + "\"> \r\n                      <span class = \"circle  "
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":45},"end":{"line":47,"column":82}}})) != null ? stack1 : "")
    + "\"></span>\r\n"
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":22},"end":{"line":49,"column":37}}})) != null ? stack1 : "")
    + "                    </div>\r\n\r\n\r\n    \r\n                    <div class=\"due_date\">due "
    + alias4(((helper = (helper = lookupProperty(helpers,"due_date") || (depth0 != null ? lookupProperty(depth0,"due_date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data,"loc":{"start":{"line":54,"column":46},"end":{"line":54,"column":58}}}) : helper)))
    + "</div>\r\n                    <div class=\"assigned_ra\"><label style=\"font-size: 10px; color:#6E6893; font-weight: bold;\">Assigned to</label> <br>\r\n                      <a href = \"!#\" style=\"font-weight: bold\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ra") || (depth0 != null ? lookupProperty(depth0,"ra") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ra","hash":{},"data":data,"loc":{"start":{"line":56,"column":63},"end":{"line":56,"column":69}}}) : helper)))
    + "</a>\r\n                    </div>\r\n                  </td>\r\n                  <td class =\"hide-on-medium-small recent_activity\" style=\"width: auto; min-width: 212px; max-width: 300px;\">\r\n                    <p class =\"comments\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"comments") || (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comments","hash":{},"data":data,"loc":{"start":{"line":61,"column":41},"end":{"line":61,"column":53}}}) : helper)))
    + "</p>\r\n                  <td>\r\n                  <td class=\"hide-on-medium-small action-row\" style=\"font-size: 12px; align-items: center;\">\r\n                    <a href=\"!#\" class=\"btn-flat\" style=\"color: #6E6893; text-align: center; font-weight: bold; font-size: 12px; padding-top: 30px;\">\r\n                    View More<i class=\"material-icons\"></i></a>\r\n                  </td>\r\n                  <td style=\"width: 5px;\"> <a style=\"color: #8B83BA;\"href=\"#!\"><i class=\"material-icons\">more_vert</i></a></td>\r\n                  </form>\r\n            </tr>";
},"useData":true});
})();