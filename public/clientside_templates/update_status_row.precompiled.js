(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['update_status_row'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n            <div class=\"row\" id=\"activity_\" + "
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":2,"column":46},"end":{"line":2,"column":62}}}) : helper)))
    + ">\r\n              <h6>"
    + alias4(((helper = (helper = lookupProperty(helpers,"protocol_code") || (depth0 != null ? lookupProperty(depth0,"protocol_code") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protocol_code","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":35}}}) : helper)))
    + "</h6>\r\n              <div class=\"input-field col s12\">\r\n                <input id=\"activity_name_"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":41},"end":{"line":5,"column":57}}}) : helper)))
    + "\" type=\"text\" class=\"validate autocomplete activity_name_"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":114},"end":{"line":5,"column":130}}}) : helper)))
    + " yep\">\r\n                <label for=\"actvity_name_"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":41},"end":{"line":6,"column":57}}}) : helper)))
    + "\">Activity</label>\r\n              </div>\r\n              <div class=\"input-field col s12\">\r\n                <input type=\"text\" id=\"comments_"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":9,"column":48},"end":{"line":9,"column":64}}}) : helper)))
    + "\" class=\"validate comments_"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":9,"column":91},"end":{"line":9,"column":107}}}) : helper)))
    + "\">\r\n                <label for=\"comments_"
    + alias4(((helper = (helper = lookupProperty(helpers,"screening_id") || (depth0 != null ? lookupProperty(depth0,"screening_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"screening_id","hash":{},"data":data,"loc":{"start":{"line":10,"column":37},"end":{"line":10,"column":53}}}) : helper)))
    + "\">Comments</label>\r\n             </div>\r\n            </div>\r\n\r\n\r\n";
},"useData":true});
})();