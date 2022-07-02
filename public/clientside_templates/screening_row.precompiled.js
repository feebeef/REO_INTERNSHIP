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
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":13,"column":107},"end":{"line":13,"column":123}}}) : helper)))
    + " />\r\n                          <span></span>\r\n                          </label>\r\n                          </span>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span><label>\r\n                          <input type=\"checkbox\" \r\n                          class=\"filled-in checkbox-blue-grey proposal-checkbox\" id="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":23,"column":84},"end":{"line":23,"column":100}}}) : helper)))
    + " />\r\n                          <span></span>\r\n                          </label>\r\n                          </span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                          <span><label>\r\n                          <input type=\"checkbox\" class=\"filled-in checkbox-blue-grey review-checkbox\" id="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"proposal_id") || (depth0 != null ? lookupProperty(depth0,"proposal_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"proposal_id","hash":{},"data":data,"loc":{"start":{"line":32,"column":105},"end":{"line":32,"column":120}}}) : helper)))
    + " />\r\n                          <span></span>\r\n                          </label>\r\n                          </span>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div><b>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":68,"column":36},"end":{"line":68,"column":44}}}) : helper)))
    + "</b> ("
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"college") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":50},"end":{"line":68,"column":85}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"center") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":68,"column":86},"end":{"line":68,"column":120}}})) != null ? stack1 : "")
    + " )</div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"college") || (depth0 != null ? lookupProperty(depth0,"college") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"college","hash":{},"data":data,"loc":{"start":{"line":68,"column":66},"end":{"line":68,"column":77}}}) : helper)))
    + " ";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"center") || (depth0 != null ? lookupProperty(depth0,"center") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"center","hash":{},"data":data,"loc":{"start":{"line":68,"column":102},"end":{"line":68,"column":112}}}) : helper)))
    + " ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      <div><b>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":80,"column":30},"end":{"line":80,"column":38}}}) : helper)))
    + "</b> ("
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"college") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":44},"end":{"line":80,"column":79}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"center") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":80},"end":{"line":80,"column":114}}})) != null ? stack1 : "")
    + " )</div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    return "";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"ra") || (depth0 != null ? lookupProperty(depth0,"ra") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"ra","hash":{},"data":data,"loc":{"start":{"line":100,"column":35},"end":{"line":100,"column":41}}}) : helper)))
    + " ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n    </style>\r\n                <li >\r\n                  <table class = \"data-table\"  style=\"height: 100px;\"  >\r\n                    <tbody >\r\n                    <tr id= \"data-row-"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":54}}}) : helper)))
    + "\"  class=\"row \"\r\n                    style=\"padding-left: 2px; align-content:flex-start; display:inline-flexbox;\">\r\n                      \r\n                      <td style=\"width: 0px;\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifEquals")||(depth0 && lookupProperty(depth0,"ifEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"1",{"name":"ifEquals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":26},"end":{"line":17,"column":40}}})) != null ? stack1 : "")
    + "                           \r\n                           \r\n"
    + ((stack1 = (lookupProperty(helpers,"ifEquals")||(depth0 && lookupProperty(depth0,"ifEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"2",{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":27},"end":{"line":27,"column":40}}})) != null ? stack1 : "")
    + "                  \r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"ifEquals")||(depth0 && lookupProperty(depth0,"ifEquals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),"3",{"name":"ifEquals","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":27},"end":{"line":36,"column":39}}})) != null ? stack1 : "")
    + "                \r\n                       \r\n                      </td>\r\n                  <td style=\"width: 20px; height: 60px;\" >\r\n             \r\n                    <a style=\"color: #8B83BA;\" href=\"#!\" >\r\n                   \r\n                    <i class=\"material-icons collapsible-header\"   \r\n                    style=\"padding:0px;\r\n                    margin: 0px; line-height: 0px;  height: 14px; border-bottom: none;\">chevron_right</i>\r\n              \r\n                    </a></td>\r\n                  \r\n                  <td class=\"proposal\">   \r\n                      <div class=\"test\" style=\"overflow-wrap: break-word; word-wrap: break-word;\">\r\n                          <a href=\"!#\" id = \"protocol-code-"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":52,"column":59},"end":{"line":52,"column":75}}}) : helper)))
    + "\"\r\n                          style=\"padding-top: 0px !important; margin-top: -10px; text-align: start; color: #4A4AFF; font-weight: bold; font-size: 12px;\">\r\n                          "
    + alias4(((helper = (helper = lookupProperty(helpers,"protocol_code") || (depth0 != null ? lookupProperty(depth0,"protocol_code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protocol_code","hash":{},"data":data,"loc":{"start":{"line":54,"column":26},"end":{"line":54,"column":45}}}) : helper)))
    + "\r\n                          </a>\r\n                          \r\n                          \r\n                          <br>\r\n\r\n                          <div id=\"proposal-title-"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":60,"column":50},"end":{"line":60,"column":66}}}) : helper)))
    + "\">\r\n                          "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":61,"column":26},"end":{"line":61,"column":36}}}) : helper)))
    + "\r\n                          </div>\r\n                          <br>\r\n\r\n                          <div class=\"proponent-proposal hide-on-large-medium\" >\r\n                            <label style=\"font-size: 10px; color:#6E6893; font-weight: bold;\">Proponents </label>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"proponents") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":67,"column":28},"end":{"line":69,"column":37}}})) != null ? stack1 : "")
    + "                        </div>\r\n                      </div>\r\n                  </td>\r\n                  <td class=\"details hide-on-medium-small\" >\r\n                    <div class=\"test\">\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"category") || (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":75,"column":22},"end":{"line":75,"column":34}}}) : helper)))
    + "<br>\r\n                       AY "
    + alias4(((helper = (helper = lookupProperty(helpers,"AY") || (depth0 != null ? lookupProperty(depth0,"AY") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"AY","hash":{},"data":data,"loc":{"start":{"line":76,"column":26},"end":{"line":76,"column":32}}}) : helper)))
    + ", T"
    + alias4(((helper = (helper = lookupProperty(helpers,"term") || (depth0 != null ? lookupProperty(depth0,"term") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":76,"column":35},"end":{"line":76,"column":43}}}) : helper)))
    + "<br>\r\n                      "
    + alias4(((helper = (helper = lookupProperty(helpers,"phreb_category") || (depth0 != null ? lookupProperty(depth0,"phreb_category") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phreb_category","hash":{},"data":data,"loc":{"start":{"line":77,"column":22},"end":{"line":77,"column":40}}}) : helper)))
    + "<br>\r\n                      <div class = \"proponents\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"proponents") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":22},"end":{"line":81,"column":31}}})) != null ? stack1 : "")
    + "                      </div>\r\n                    </div>\r\n                  </td>\r\n                \r\n                  <td class = \"status\"\r\n                   style=\"width: 100px !important; min-width: 100px !important; max-width: 100px !important;  \r\n                 \r\n                   \">\r\n                    <div  style=\"width: 100px !important; min-width: 100px !important; max-width: 100px !important;  \" class=\"status-type "
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":138},"end":{"line":90,"column":175}}})) != null ? stack1 : "")
    + "\"> \r\n                      <span class = \"circle  "
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":45},"end":{"line":91,"column":82}}})) != null ? stack1 : "")
    + "\" ></span>\r\n"
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":92,"column":22},"end":{"line":93,"column":37}}})) != null ? stack1 : "")
    + "                    </div>\r\n                    <div class=\"due_date\" style=\"width: 100px !important; min-width: 100px !important; max-width: 100px !important;  \">due "
    + alias4(((helper = (helper = lookupProperty(helpers,"due_date") || (depth0 != null ? lookupProperty(depth0,"due_date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data,"loc":{"start":{"line":95,"column":139},"end":{"line":95,"column":151}}}) : helper)))
    + "</div>\r\n                    <div class=\"assigned_ra\" style=\"width: 100px !important; min-width: 100px !important; max-width: 100px !important;  \"><label \r\n                    style=\"font-size: 10px; color:#6E6893; font-weight: bold;\">Assigned to</label> <br>\r\n                      <a href = \"!#\" style=\"font-weight: bold\">\r\n                        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ra") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":100,"column":24},"end":{"line":100,"column":50}}})) != null ? stack1 : "")
    + "</a>\r\n                    </div>\r\n                     \r\n                  </td>\r\n                  <td class =\"hide-on-medium-small recent_activity\" style=\"width:  380px;\r\n                                                                           max-width: 380px;\r\n                                                                           min-width: 380px;\r\n                                                                          height: 20px; padding-left: 25px;\r\n                                                                          \">\r\n                     <div class = \"activity recent_activity\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_activity") || (depth0 != null ? lookupProperty(depth0,"screening_activity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_activity","hash":{},"data":data,"loc":{"start":{"line":110,"column":61},"end":{"line":110,"column":83}}}) : helper)))
    + "</div>\r\n                      <div class =\"comments recent_activity\" style=\"word-wrap: break-word;\r\n                        font-size: 12px;\r\n                        overflow-x: hidden;\r\n                        overflow-wrap: break-word; \r\n                        white-space: normal;\r\n                        width: 260px;\r\n                        \"> <b>"
    + alias4(((helper = (helper = lookupProperty(helpers,"comments") || (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comments","hash":{},"data":data,"loc":{"start":{"line":117,"column":30},"end":{"line":117,"column":42}}}) : helper)))
    + " </b></div>\r\n\r\n                          <td class =\"utilbtn\" style=\"position:absolute; right: 25px;\"> <a style=\"color: #8B83BA;\"href=\"#!\">\r\n                    <i class=\"material-icons\">more_vert</i></a>\r\n                    </td>\r\n\r\n                    <td style=\"width: 90px\">\r\n\r\n                    </td>\r\n    \r\n                  </td>\r\n\r\n                \r\n               </tr>\r\n               </tbody>\r\n               </table>\r\n              <div class=\"collapsible-body\"></div>\r\n            </li>\r\n           \r\n           \r\n  \r\n";
},"useData":true});
})();