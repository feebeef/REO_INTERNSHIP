(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['search_result'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<li class=\"collection-item search-result-item proposal\" id= \"search-"
    + alias4(((helper = (helper = lookupProperty(helpers,"proposal_id") || (depth0 != null ? lookupProperty(depth0,"proposal_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"proposal_id","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":83}}}) : helper)))
    + "\" >\r\n    <div class=\"row\">\r\n        <a href=\"!#\" style=\"padding-top: 0px !important; text-align: start; color: #4A4AFF; font-weight: bold;\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"protocol_code") || (depth0 != null ? lookupProperty(depth0,"protocol_code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protocol_code","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":31}}}) : helper)))
    + "\r\n        </a> \r\n        <a class=\"secondary-content\" style=\"color: #8B83BA;\"href=\"#!\">\r\n            <i class=\"material-icons\">more_vert</i></a>\r\n        <div class=\"status right\" >\r\n            <div class=\"status-type "
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":36},"end":{"line":10,"column":73}}})) != null ? stack1 : "")
    + " \">\r\n                <span class = \"circle "
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":38},"end":{"line":11,"column":75}}})) != null ? stack1 : "")
    + " \"></span>\r\n                "
    + ((stack1 = (lookupProperty(helpers,"get_status")||(depth0 && lookupProperty(depth0,"get_status"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"status") : depth0),{"name":"get_status","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":53}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"due_date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"due_date") || (depth0 != null ? lookupProperty(depth0,"due_date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data,"loc":{"start":{"line":16,"column":26},"end":{"line":16,"column":38}}}) : helper)))
    + "</div>\r\n        <div class=\"assigned_ra\">\r\n            <label style=\"font-size: 10px; color:#6E6893; font-weight: bold;\">Assigned to</label>\r\n          <a href = \"!#\" style=\"font-weight: bold\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ra") || (depth0 != null ? lookupProperty(depth0,"ra") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ra","hash":{},"data":data,"loc":{"start":{"line":19,"column":51},"end":{"line":19,"column":57}}}) : helper)))
    + "</a>\r\n        </div>\r\n        <br>\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":22,"column":18}}}) : helper)))
    + "\r\n        <div class=\"proponent-proposal\" >\r\n          <br>\r\n          <label style=\"font-size: 10px; color:#6E6893; font-weight: bold;\">Proponents </label>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"proponents") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":28,"column":19}}})) != null ? stack1 : "")
    + "      </div> \r\n</li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div><b>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":27,"column":18},"end":{"line":27,"column":26}}}) : helper)))
    + "</b> ("
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"college") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":32},"end":{"line":27,"column":67}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"center") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":68},"end":{"line":27,"column":102}}})) != null ? stack1 : "")
    + " )</div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"college") || (depth0 != null ? lookupProperty(depth0,"college") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"college","hash":{},"data":data,"loc":{"start":{"line":27,"column":48},"end":{"line":27,"column":59}}}) : helper)))
    + " ";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ", "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"center") || (depth0 != null ? lookupProperty(depth0,"center") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"center","hash":{},"data":data,"loc":{"start":{"line":27,"column":84},"end":{"line":27,"column":94}}}) : helper)))
    + " ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"screening") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":31,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();