(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['search_result'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n<li class=\"collection-item search-result-item proposal\" id= \"search-"
    + alias4(((helper = (helper = lookupProperty(helpers,"proposal_id") || (depth0 != null ? lookupProperty(depth0,"proposal_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"proposal_id","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":83}}}) : helper)))
    + "\" >\r\n    <div class=\"row\">\r\n        <a href=\"!#\" style=\"padding-top: 0px !important; text-align: start; color: #4A4AFF; font-weight: bold;\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"protocol_code") || (depth0 != null ? lookupProperty(depth0,"protocol_code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protocol_code","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":31}}}) : helper)))
    + "\r\n        </a> \r\n        <a class=\"secondary-content\" style=\"color: #8B83BA;\"href=\"#!\">\r\n            <i class=\"material-icons\">more_vert</i></a>\r\n        <div class=\"status right\" >\r\n        </div>\r\n    </div>\r\n    <div class=\"due_date\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"due_date") || (depth0 != null ? lookupProperty(depth0,"due_date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data,"loc":{"start":{"line":16,"column":26},"end":{"line":16,"column":38}}}) : helper)))
    + "</div>\r\n        <div class=\"assigned_ra\">\r\n            <label style=\"font-size: 10px; color:#6E6893; font-weight: bold;\">Assigned to</label>\r\n          <a href = \"!#\" style=\"font-weight: bold\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"ra") || (depth0 != null ? lookupProperty(depth0,"ra") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ra","hash":{},"data":data,"loc":{"start":{"line":19,"column":51},"end":{"line":19,"column":57}}}) : helper)))
    + "</a>\r\n        </div>\r\n        <br>\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":22,"column":18}}}) : helper)))
    + "\r\n        <div class=\"proponent-proposal\" >\r\n          <br>\r\n      </div> \r\n</li>\r\n\r\n";
},"useData":true});
})();