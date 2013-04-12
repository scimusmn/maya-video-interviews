(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['videos'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"video-button\" id=\"video-"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-video-source=\""
    + escapeExpression(((stack1 = depth1.MediaFolder),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/videos"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".mp4\">\n      <img src=\"../assets/images/"
    + escapeExpression(((stack1 = depth1.MediaFolder),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/video"
    + escapeExpression(((stack1 = data.index),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".png\">\n      <div class=\"video-prompts\">\n        <h3>";
  if (stack2 = helpers.Prompt) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.Prompt; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h3>\n        <h4>";
  if (stack2 = helpers.SpanishPrompt) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.SpanishPrompt; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h4>\n      </div>\n    </div>\n  ";
  return buffer;
  }

  buffer += "<h1>";
  if (stack1 = helpers.PageTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.PageTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n<h2>";
  if (stack1 = helpers.PageTitleSpanish) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.PageTitleSpanish; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n<div id=\"video-options\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.Videos, {hash:{},inverse:self.noop,fn:self.programWithDepth(program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<!-- Video player is hidden initially and shown after a video is selected -->\n<div class=\"hidden\">\n  <video id=\"videoPlayer\" class=\"video-js vjs-default-skin\" preload=\"auto\" width=\"1200\" height=\"520\" data-screensaver=\"../assets/videos/";
  if (stack1 = helpers.MediaFolder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MediaFolder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/screensaver.mp4\">\n    <source src=\"../assets/videos/";
  if (stack1 = helpers.MediaFolder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.MediaFolder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/video0.mp4\" type='video/mp4'>\n  </video>\n</div>\n<div id=\"back\" class=\"hidden\">\n  <p>Back</p>\n  <p>Atrás</p>\n</div>\n";
  return buffer;
  });
})();