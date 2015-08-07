this["MONKEY"] = this["MONKEY"] || {};
this["MONKEY"]["Templates"] = this["MONKEY"]["Templates"] || {};

this["MONKEY"]["Templates"]["icons"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <li data-tooltip=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.preferences)) && stack1.imagePref)) && stack1.prefix), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.name : stack1), depth0))
    + "\"><i class=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.preferences)) && stack1.imagePref)) && stack1.prefix), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.name : stack1), depth0))
    + "\"></i></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.icons : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});