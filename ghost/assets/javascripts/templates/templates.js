this["MONKEY"] = this["MONKEY"] || {};
this["MONKEY"]["Templates"] = this["MONKEY"]["Templates"] || {};

this["MONKEY"]["Templates"]["components"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "    <div class=\"g-section\" id=\""
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\">\n        <h2 class=\"g-title-section\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "            <div class=\"g-box\" id=\""
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depths[1] != null ? depths[1].name : depths[1]),{"name":"toLowerCase","hash":{},"data":data}))
    + "-"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\">\n                <div class=\"g-container\">\n                    <h2 class=\"g-title\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n                    <p>"
    + alias2(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n\n                    <div class=\"g-example\" id=\""
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\">\n                        "
    + alias2((helpers.getContent || (depth0 && depth0.getContent) || alias1).call(depth0,(depth0 != null ? depth0.template : depth0),(depth0 != null ? depth0.data : depth0),(depth0 != null ? depth0.name : depth0),{"name":"getContent","hash":{},"data":data}))
    + "\n                    </div>\n                    <hr>\n                </div>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

this["MONKEY"]["Templates"]["menu"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "        <li>\n            <a href=\"#"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" title=\"\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n            <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\n        </li>\n";
},"2":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "                    <li><a href=\"#"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depths[1] != null ? depths[1].name : depths[1]),{"name":"toLowerCase","hash":{},"data":data}))
    + "-"
    + alias2((helpers.toLowerCase || (depth0 && depth0.toLowerCase) || alias1).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"toLowerCase","hash":{},"data":data}))
    + "\" title=\""
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + alias2(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true,"useDepths":true});

this["MONKEY"]["Templates"]["templates/blockquote"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<blockquote>\n    Aorem ipsum dolor sit amet, consectetur adipisicing elit. Non accusantium aliquid, minima facilis dolore tenetur quia! Quidem laudantium distinctio magni!\n</blockquote>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/branding"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"essetial-box\">\n    <div class=\"screenshot\">\n        <strong>Screenshot</strong>\n        <img src=\"../screenshot.png\" alt=\"\" />\n    </div>\n\n    <div class=\"branding\">\n        <strong>Branding</strong>\n        <img src=\"../assets/images/branding.png\" alt=\"\" />\n    </div>\n\n    <div class=\"favicon\">\n        <strong>Favicon</strong>\n        <img src=\"../assets/images/favicon.ico\" alt=\"\" />\n    </div>\n\n    <div class=\"favicon-apple\">\n        <strong>Favicon Apple</strong>\n        <img src=\"../assets/images/favicon-apple.png\" alt=\"\" />\n    </div>\n</div>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/breadcrumb"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"breadcrumb\">\n    <li><a href=\"\" title=\"\">Home</a></li>\n    <li><a href=\"\" title=\"\">Product</a></li>\n    <li><span class=\"current\">link Product</span></li>\n</ul>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/buttons"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"btn-group g-content\">\n    <a href=\"index.html\" class=\"btn\">Home</a>\n    <a href=\"elements.html\" class=\"btn\">Elements</a>\n    <a href=\"components.html\" class=\"btn\">Components</a>\n</div>\n\n<a href=\"#\" class=\"btn\">Button</a>\n<a href=\"#\" class=\"btn-secondary\">Button Secondary</a>\n<a href=\"#\" class=\"btn disabled\">Button Disabled</a>\n<a href=\"#\" class=\"btn\">Button <i class=\"icon-checkmark\"></i></a>\n\n<br>\n\n<div class=\"btn-share\">\n    <a href=\"#\" class=\"btn btn-share-facebook\"><i class=\"icon-facebook-s\"></i><span>Facebook</span></a>\n    <span class=\"count-share\">...</span>\n</div>\n\n<div class=\"btn-share\">\n    <a href=\"#\" class=\"btn btn-share-plus\"><i class=\"icon-google-plus-s\"></i><span>Plus</span></a>\n    <span class=\"count-share\">...</span>\n</div>\n\n<div class=\"btn-share\">\n    <a href=\"#\" class=\"btn btn-share-twitter\"><i class=\"icon-twitter-s\"></i></a>\n    <span class=\"count-share\">...</span>\n</div>\n\n<br>\n\n<button class=\"btn-hamburger\">\n    <span class=\"line\"></span>\n</button>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/code"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<code>&lt;a href=\"\" title=\"\"&gt; &lt;abbr title=\"\"&gt; &lt;acronym title=\"\"&gt; &lt;b&gt; &lt;blockquote cite=\"\"&gt; &lt;cite&gt; &lt;code&gt; &lt;del datetime=\"\"&gt; &lt;em&gt; &lt;i&gt; &lt;q cite=\"\"&gt; &lt;s&gt; &lt;strike&gt; &lt;strong&gt; </code>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/colors"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <li class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\" data-tooltip=\""
    + alias3(((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"tooltip","hash":{},"data":data}) : helper)))
    + "\"></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"g-color-listing\">\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/comments"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"comments\" class=\"comments-area\"><h2 class=\"comments-title\">2 thoughts on “Hello world!”</h2><ol class=\"comment-list\"><li id=\"comment-1\" class=\"comment even thread-even depth-1 parent\"><article id=\"div-comment-1\" class=\"comment-body\"><footer class=\"comment-meta\"><div class=\"comment-author vcard\"><img alt=\"\" src=\"http://0.gravatar.com/avatar/?s=56&amp;d=mm&amp;r=g\" srcset=\"http://2.gravatar.com/avatar/?s=112&amp;d=mm&amp;r=g 2x\" class=\"avatar avatar-56 photo avatar-default\" height=\"56\" width=\"56\"><b class=\"fn\"><a href=\"https://wordpress.org/\" rel=\"external nofollow\" class=\"url\">Mr WordPress</a></b> <span class=\"says\">says:</span></div><div class=\"comment-metadata\"><a href=\"http://localhost/wordpress/2015/08/17/hello-world/#comment-1\"><time datetime=\"2015-08-17T14:16:22+00:00\">August 17, 2015 at 2:16 pm</time></a></div></footer><div class=\"comment-content\"><p>Hi, this is a comment.<br>To delete a comment, just log in and view the post's comments. There you will have the option to edit or delete them.</p></div><div class=\"reply\"><a class=\"comment-reply-link\" href=\"\" aria-label=\"Reply to Mr WordPress\">Reply</a></div></article><ol class=\"children\"><li id=\"comment-2\" class=\"comment byuser comment-author-admin bypostauthor odd alt depth-2\"><article id=\"div-comment-2\" class=\"comment-body\"><footer class=\"comment-meta\"><div class=\"comment-author vcard\"><img alt=\"\" src=\"http://0.gravatar.com/avatar/?s=56&d=mm&r=g\" srcset=\"http://2.gravatar.com/avatar/?s=112&d=mm&r=g 2x\" class=\"avatar avatar-56 photo\" height=\"56\" width=\"56\"><b class=\"fn\">admin</b> <span class=\"says\">says:</span></div><div class=\"comment-metadata\"><a href=\"http://localhost/wordpress/2015/08/17/hello-world/#comment-2\"><time datetime=\"2015-08-17T16:32:59+00:00\">August 17, 2015 at 4:32 pm</time></a></div></footer><div class=\"comment-content\"><p>To delete a comment, just log in and view the post’s comments. There you will have the option to edit or delete them.</p></div><div class=\"reply\"><a class=\"comment-reply-link\" href=\"\" onclick=\"\" aria-label=\"Reply to admin\">Reply</a></div></article></li></ol></li></ol><div id=\"respond\" class=\"comment-respond\"><h3 id=\"reply-title\" class=\"comment-reply-title\">Leave a Reply <small><a rel=\"nofollow\" id=\"cancel-comment-reply-link\" href=\"/wordpress/2015/08/17/hello-world/#respond\" style=\"display:none;\">Cancel reply</a></small></h3><form action=\"http://localhost/wordpress/wp-comments-post.php\" method=\"post\" id=\"commentform\" class=\"comment-form\" novalidate=\"\"><p class=\"comment-notes\"><span id=\"email-notes\">Your email address will not be published.</span> Required fields are marked <span class=\"required\">*</span></p><p class=\"comment-form-author\"><label for=\"author\">Name <span class=\"required\">*</span></label> <input id=\"author\" name=\"author\" value=\"\" size=\"30\" aria-required=\"true\" required=\"required\" type=\"text\"></p><p class=\"comment-form-email\"><label for=\"email\">Email <span class=\"required\">*</span></label> <input id=\"email\" name=\"email\" value=\"\" size=\"30\" aria-describedby=\"email-notes\" aria-required=\"true\" required=\"required\" type=\"email\"></p><p class=\"comment-form-url\"><label for=\"url\">Website</label> <input id=\"url\" name=\"url\" value=\"\" size=\"30\" type=\"url\"></p><p class=\"comment-form-comment\"><label for=\"comment\">Comment</label> <textarea id=\"comment\" name=\"comment\" cols=\"45\" rows=\"8\" aria-describedby=\"form-allowed-tags\" aria-required=\"true\" required=\"required\"></textarea></p><p class=\"form-allowed-tags\" id=\"form-allowed-tags\">You may use these <abbr title=\"HyperText Markup Language\">HTML</abbr> tags and attributes: <code>&lt;a href=\"\" title=\"\"&gt; &lt;abbr title=\"\"&gt; &lt;acronym title=\"\"&gt; &lt;b&gt; &lt;blockquote cite=\"\"&gt; &lt;cite&gt; &lt;code&gt; &lt;del datetime=\"\"&gt; &lt;em&gt; &lt;i&gt; &lt;q cite=\"\"&gt; &lt;s&gt; &lt;strike&gt; &lt;strong&gt; </code></p><p class=\"form-submit\"><input name=\"submit\" id=\"submit\" class=\"submit\" value=\"Post Comment\" type=\"submit\"> <input name=\"comment_post_ID\" value=\"1\" id=\"comment_post_ID\" type=\"hidden\"><input name=\"comment_parent\" id=\"comment_parent\" value=\"0\" type=\"hidden\"></p></form></div></div>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/fonts"] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "        <div class=\"g-box-font "
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"g-header-font\">\n                <div>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</div>\n                <div><code>"
    + alias3(((helper = (helper = helpers.variable || (depth0 != null ? depth0.variable : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"variable","hash":{},"data":data}) : helper)))
    + "</code></div>\n                <div class=\"g-font\"></div>\n            </div>\n\n            <div class=\"g-example-text\">\n                "
    + alias3(this.lambda((depths[1] != null ? depths[1].lorem : depths[1]), depth0))
    + "\n            </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class=\"g-font-listing\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.fonts : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});

this["MONKEY"]["Templates"]["templates/form"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form action=\"\">\n    <ul class=\"g-form\">\n        <li>\n            <label for=\"text\">Text</label>\n            <input id=\"text\" type=\"text\">\n        </li>\n        <li class=\"field-error\">\n            <label for=\"text-error\">Text Error</label>\n            <input id=\"text-error\" type=\"text\">\n        </li>\n        <li>\n            <label for=\"select\">Select</label>\n            <select name=\"\" id=\"select\" data-component=\"chosen\">\n                <option value=\"1\">Lorem ipsum.</option>\n                <option value=\"2\">Mollitia, veritatis.</option>\n                <option value=\"3\">Placeat, maiores.</option>\n                <option value=\"4\">Eum, ipsa.</option>\n                <option value=\"5\">Delectus, quos.</option>\n            </select>\n        </li>\n        <li>\n            <label for=\"select\">Multiple Select</label>\n            <select multiple=\"multiple\" name=\"\" id=\"select\" data-component=\"chosen\">\n                <option value=\"1\">Lorem ipsum.</option>\n                <option value=\"2\">Mollitia, veritatis.</option>\n                <option value=\"3\">Placeat, maiores.</option>\n                <option value=\"4\">Eum, ipsa.</option>\n                <option value=\"5\">Delectus, quos.</option>\n                <option value=\"6\">Lorem ipsum.</option>\n                <option value=\"7\">Mollitia, veritatis.</option>\n                <option value=\"8\">Placeat, maiores.</option>\n                <option value=\"9\">Eum, ipsa.</option>\n                <option value=\"10\">Delectus, quos.</option>\n                <option value=\"11\">Lorem ipsum.</option>\n                <option value=\"12\">Mollitia, veritatis.</option>\n                <option value=\"13\">Placeat, maiores.</option>\n                <option value=\"14\">Eum, ipsa.</option>\n                <option value=\"15\">Delectus, quos.</option>\n                <option value=\"16\">Lorem ipsum.</option>\n                <option value=\"17\">Mollitia, veritatis.</option>\n                <option value=\"18\">Placeat, maiores.</option>\n                <option value=\"19\">Eum, ipsa.</option>\n                <option value=\"20\">Delectus, quos.</option>\n            </select>\n        </li>\n        <li>\n            <label for=\"textarea\">Textarea</label>\n            <textarea name=\"\" id=\"texarea\" cols=\"30\" rows=\"10\"></textarea>\n        </li>\n        <li class=\"g-group-icheck\">\n            <label for=\"one\">\n                Example\n                <input name=\"gradio\" id=\"one\" type=\"radio\" data-component=\"icheck\">\n            </label>\n            <label for=\"two\">\n                Example\n                <input name=\"gradio\" id=\"two\" type=\"radio\" data-component=\"icheck\">\n            </label>\n            <label for=\"three\">\n                Example\n                <input name=\"gradio\" id=\"three\" type=\"radio\" data-component=\"icheck\">\n            </label>\n        </li>\n        <li class=\"g-group-icheck\">\n            <label for=\"cone\">\n                Example\n                <input name=\"gcheck\" id=\"cone\" type=\"checkbox\" data-component=\"icheck\">\n            </label>\n            <label for=\"ctwo\">\n                Example\n                <input name=\"gcheck\" id=\"ctwo\" type=\"checkbox\" data-component=\"icheck\">\n            </label>\n            <label for=\"cthree\">\n                Example\n                <input name=\"gcheck\" id=\"cthree\" type=\"checkbox\" data-component=\"icheck\">\n            </label>\n        </li>\n    </ul>\n</form>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/grid"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"g-grid\">\n    <div class=\"row\">\n        <div class=\"one column\">One</div>\n        <div class=\"eleven columns\">Eleven</div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"two columns\">Two</div>\n        <div class=\"ten columns\">Ten</div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"three columns\">Three</div>\n        <div class=\"nine columns\">Nine</div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"four columns\">Four</div>\n        <div class=\"eight columns\">Eight</div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"five columns\">Five</div>\n        <div class=\"seven columns\">Seven</div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"six columns\">Six</div>\n        <div class=\"six columns\">Six</div>\n    </div>\n</div>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/icons"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <li data-tooltip=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.preferences)) && stack1.imagePref)) && stack1.prefix), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.name : stack1), depth0))
    + "\"><i class=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1.preferences)) && stack1.imagePref)) && stack1.prefix), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.name : stack1), depth0))
    + "\"></i></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"g-icon-listing\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.icons : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});

this["MONKEY"]["Templates"]["templates/lightbox"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"gallery-wrapp\" data-component=\"gallery\">\n    <a class=\"gallery\" href=\"assets/images/sport1.jpg\" data-element=\"image\"><img src=\"assets/images/sport1.jpg\" width=\"150\" height=\"75\"></a>\n    <a class=\"gallery\" href=\"assets/images/natureza1.jpg\" data-element=\"image\"><img src=\"assets/images/natureza1.jpg\" width=\"150\" height=\"75\"></a>\n    <a class=\"gallery\" href=\"assets/images/natureza2.jpg\" data-element=\"image\"><img src=\"assets/images/natureza2.jpg\" width=\"150\" height=\"75\"></a>\n    <a class=\"gallery\" href=\"assets/images/natureza3.jpg\" data-element=\"image\"><img src=\"assets/images/natureza3.jpg\" width=\"150\" height=\"75\"></a>\n</div>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/loading"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"loading\"><i class=\"icon-spinner\"></i>Loading</div>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/messages"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<p class=\"ms-error\"><i class=\"icon-cross\"></i> Lorem ipsum dolor sit amet, consectetur.</p>\n<p class=\"ms-success\"><i class=\"icon-checkmark\"></i> Lorem ipsum dolor sit amet, consectetur.</p>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/navigation"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<nav class=\"navigation navigation-main\" data-component=\"navigation\">\n    <ul class=\"menu\">\n        <li><a href=\"\" title=\"\">Home</a></li>\n        <li class=\"menu-item-has-children\">\n            <a href=\"\" title=\"\">About</a>\n            <ul class=\"sub-menu\">\n                <li><a href=\"\" title=\"\">Product</a></li>\n                <li class=\"menu-item-has-children\">\n                    <a href=\"\" title=\"\">Product one</a>\n                    <ul class=\"sub-menu\">\n                        <li><a href=\"\" title=\"\">Product</a></li>\n                        <li><a href=\"\" title=\"\">Product one</a></li>\n                        <li><a href=\"\" title=\"\">Product two</a></li>\n                    </ul>\n                </li>\n                <li><a href=\"\" title=\"\">Product two</a></li>\n            </ul>\n        </li>\n        <li class=\"current-menu-item\"><a href=\"\" title=\"\">Blog</a></li>\n        <li><a href=\"\" title=\"\">Contact</a></li>\n    </ul>\n</nav>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/pagination"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"pagination\">\n    <li><a href=\"\" title=\"\">prev</a></li>\n    <li><span class=\"current\">1</span></li>\n    <li><a href=\"\" title=\"\">2</a></li>\n    <li><a href=\"\" title=\"\">3</a></li>\n    <li><a href=\"\" title=\"\">next</a></li>\n</ul>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/paragraph"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"the-content\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi reprehenderit ratione tenetur. Itaque natus iusto possimus expedita est quisquam sit, suscipit ipsam dicta aperiam fuga eaque corrupti repellat quos minus.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni tempore saepe quisquam id eaque, magnam nulla dolorum et repellat animi. Illo blanditiis cumque commodi placeat aliquid autem neque voluptatum sequi excepturi eum, inventore totam veniam dignissimos voluptate delectus omnis obcaecati vero magnam ipsam perferendis tenetur velit quasi beatae. Placeat, voluptatum.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ab odio suscipit consequatur molestiae sed ut fugit eum earum fugiat!</p>\n</div>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/slider"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"slider-wrapper\">\n    <ul class=\"slider\" data-component=\"bxslider\">\n        <li><a href=\"#\"><img src=\"http://placehold.it/760x300\" alt=\"\"></a></li>\n        <li><img src=\"http://placehold.it/760x300\" alt=\"\"></li>\n        <li><img src=\"http://placehold.it/760x300\" alt=\"\"></li>\n    </ul>\n</div>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/table"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"the-content\">\n    <table>\n        <thead>\n            <tr>\n                <th>Lorem ipsum dolor sit.</th>\n                <th>Lorem ipsum dolor sit.</th>\n                <th>Lorem ipsum dolor sit.</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>Lorem ipsum dolor sit amet.</td>\n                <td>Lorem ipsum dolor sit amet.</td>\n                <td>Lorem ipsum dolor sit amet.</td>\n            </tr>\n            <tr>\n                <td>Lorem ipsum dolor sit amet.</td>\n                <td>Lorem ipsum dolor sit amet.</td>\n                <td>Lorem ipsum dolor sit amet.</td>\n            </tr>\n            <tr>\n                <td>Lorem ipsum dolor sit amet.</td>\n                <td>Lorem ipsum dolor sit amet.</td>\n                <td>Lorem ipsum dolor sit amet.</td>\n            </tr>\n            <tr>\n                <td>Lorem ipsum dolor sit amet.</td>\n                <td>Lorem ipsum dolor sit amet.</td>\n                <td>Lorem ipsum dolor sit amet.</td>\n            </tr>\n        </tbody>\n    </table>\n</div>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/thumbnail"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"the-content\">\n    <figure class=\"thumbnail\">\n        <a href=\"\" title=\"\">\n            <img src=\"http://placehold.it/760x400\" alt=\"\">\n        </a>\n        <figcaption>Image Thumbnail</figcaption>\n    </figure>\n</div>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/titles"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"the-content\">\n    <h1>h1 Lorem ipsum dolor sit amet.</h1>\n    <h2>h2 Lorem ipsum dolor sit amet.</h2>\n    <h3>h3 Lorem ipsum dolor sit amet.</h3>\n    <h4>h4 Lorem ipsum dolor sit amet.</h4>\n    <h5>h5 Lorem ipsum dolor sit amet.</h5>\n</div>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/tooltip"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<span class=\"tooltip\" data-tooltip=\"Example Tooltip\">Example Tooltip</span>";
},"useData":true});

this["MONKEY"]["Templates"]["templates/widgets"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"widget-area\" class=\"widget-area g-widgets\" role=\"complementary\">\n    <aside id=\"archives-3\" class=\"widget widget_archive\"><h2 class=\"widget-title\">Archives</h2>\n        <ul>\n            <li><a href=\"http://localhost/wordpress/2015/08/\">August 2015</a>&nbsp;(1)</li>\n    	    <li><a href=\"http://localhost/wordpress/2015/07/\">July 2015</a>&nbsp;(1)</li>\n            <li><a href=\"http://localhost/wordpress/2015/03/\">March 2015</a>&nbsp;(1)</li>\n    	</ul>\n    </aside>\n\n    <aside id=\"categories-2\" class=\"widget widget_categories\"><h2 class=\"widget-title\">Categories</h2>\n        <ul>\n    	       <li class=\"cat-item cat-item-1\"><a href=\"http://localhost/wordpress/category/uncategorized/\">Uncategorized</a> (3)</li>\n    	</ul>\n    </aside>\n\n    <aside id=\"meta-2\" class=\"widget widget_meta\"><h2 class=\"widget-title\">Meta</h2>\n        <ul>\n			<li><a href=\"http://localhost/wordpress/wp-admin/\">Site Ghost</a></li>\n            <li><a href=\"http://localhost/wordpress/wp-login.php?action=logout&amp;_wpnonce=294d46df5d\">Log out</a></li>\n			<li><a href=\"http://localhost/wordpress/feed/\">Entries <abbr title=\"Really Simple Syndication\">RSS</abbr></a></li>\n			<li><a href=\"http://localhost/wordpress/comments/feed/\">Comments <abbr title=\"Really Simple Syndication\">RSS</abbr></a></li>\n            <li><a href=\"https://wordpress.org/\" title=\"Powered by WordPress, state-of-the-art semantic personal publishing platform.\">WordPress.org</a></li>\n        </ul>\n    </aside>\n\n    <aside id=\"recent-comments-2\" class=\"widget widget_recent_comments\">\n        <h2 class=\"widget-title\">Recent Comments</h2>\n        <ul id=\"recentcomments\">\n            <li class=\"recentcomments\"><span class=\"comment-author-link\">Ghost</span> on <a href=\"http://localhost/wordpress/2015/08/17/hello-world/#comment-5\">Hello world!</a></li>\n            <li class=\"recentcomments\"><span class=\"comment-author-link\">Ghost</span> on <a href=\"http://localhost/wordpress/2015/08/17/hello-world/#comment-4\">Hello world!</a></li>\n            <li class=\"recentcomments\"><span class=\"comment-author-link\">Ghost</span> on <a href=\"http://localhost/wordpress/2015/08/17/hello-world/#comment-3\">Hello world!</a></li>\n            <li class=\"recentcomments\"><span class=\"comment-author-link\">Ghost</span> on <a href=\"http://localhost/wordpress/2015/08/17/hello-world/#comment-2\">Hello world!</a></li>\n            <li class=\"recentcomments\"><span class=\"comment-author-link\"><a href=\"https://wordpress.org/\" rel=\"external nofollow\" class=\"url\">Mr WordPress</a></span> on <a href=\"http://localhost/wordpress/2015/08/17/hello-world/#comment-1\">Hello world!</a></li>\n        </ul>\n    </aside>\n\n    <aside id=\"tag_cloud-2\" class=\"widget widget_tag_cloud\">\n        <h2 class=\"widget-title\">Tag Cloud</h2>\n        <div class=\"tagcloud\">\n            <a href=\"http://localhost/wordpress/tag/\" class=\"tag-link-5\" title=\"1 topic\" style=\"font-size: 8pt;\">Ghost</a>\n            <a href=\"http://localhost/wordpress/tag/\" class=\"tag-link-8\" title=\"1 topic\" style=\"font-size: 8pt;\">FrontEnd</a>\n            <a href=\"http://localhost/wordpress/tag/\" class=\"tag-link-2\" title=\"2 topics\" style=\"font-size: 16.4pt;\">WordPress</a>\n            <a href=\"http://localhost/wordpress/tag/\" class=\"tag-link-10\" title=\"1 topic\" style=\"font-size: 8pt;\">Wp</a>\n            <a href=\"http://localhost/wordpress/tag/\" class=\"tag-link-7\" title=\"1 topic\" style=\"font-size: 8pt;\">GitHub</a>\n            <a href=\"http://localhost/wordpress/tag/\" class=\"tag-link-9\" title=\"1 topic\" style=\"font-size: 8pt;\">Javascript</a>\n            <a href=\"http://localhost/wordpress/tag/\" class=\"tag-link-3\" title=\"3 topics\" style=\"font-size: 22pt;\">Sass</a>\n        </div>\n    </aside>\n\n    <aside id=\"calendar-2\" class=\"widget widget_calendar\"><h2 class=\"widget-title\">Calendar</h2>\n        <div id=\"calendar_wrap\">\n            <table id=\"wp-calendar\">\n                <caption>September 2015</caption>\n        	    <thead>\n                    <tr>\n                    	<th scope=\"col\" title=\"Monday\">M</th>\n                    	<th scope=\"col\" title=\"Tuesday\">T</th>\n                    	<th scope=\"col\" title=\"Wednesday\">W</th>\n                    	<th scope=\"col\" title=\"Thursday\">T</th>\n                    	<th scope=\"col\" title=\"Friday\">F</th>\n                    	<th scope=\"col\" title=\"Saturday\">S</th>\n                    	<th scope=\"col\" title=\"Sunday\">S</th>\n                    </tr>\n                </thead>\n\n                <tfoot>\n                	<tr>\n                		<td colspan=\"3\" id=\"prev\"><a href=\"http://localhost/wordpress/2015/08/\">« Aug</a></td>\n                		<td class=\"pad\">&nbsp;</td>\n                		<td colspan=\"3\" id=\"next\" class=\"pad\">&nbsp;</td>\n                	</tr>\n                </tfoot>\n\n                <tbody>\n                    <tr>\n                    	<td colspan=\"1\" class=\"pad\">&nbsp;</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td>\n                    </tr>\n                    <tr>\n                    	<td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td>\n                    </tr>\n                    <tr>\n                    	<td>14</td><td id=\"today\">15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td>\n                    </tr>\n                    <tr>\n                    	<td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td>\n                    </tr>\n                    <tr>\n                    	<td>28</td><td>29</td><td>30</td>\n                    	<td class=\"pad\" colspan=\"4\">&nbsp;</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </aside>\n\n    <aside id=\"pages-2\" class=\"widget widget_pages\">\n        <h2 class=\"widget-title\">Pages</h2>\n        <ul>\n			<li class=\"page_item page-item-2\"><a href=\"http://localhost/wordpress/sample-page/\">Sample Page</a></li>\n		</ul>\n    </aside>\n\n    <aside id=\"recent-posts-2\" class=\"widget widget_recent_entries\">\n        <h2 class=\"widget-title\">Recent Posts</h2>\n        <ul>\n            <li>\n                <a href=\"#\">Hello world!</a>\n            </li>\n            <li>\n                <a href=\"#\">Home</a>\n            </li>\n            <li>\n                <a href=\"#\">Page</a>\n            </li>\n        </ul>\n    </aside>\n</div>";
},"useData":true});