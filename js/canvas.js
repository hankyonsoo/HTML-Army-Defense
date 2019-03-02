var cnvs = $(`<canvas>`).attr("width",300).attr("height",300).appendTo("body").get(0);
var cntxt = cnvs.getContext("2d")
var w = cnvs.width;
var h = cnvs.height;

cntxt.fillStyle = "#ffffff";
cntxt.fillRect(0, 0, w, h);

cntxt.fillStyle = "#ff0000";
cntxt.fillRect(w*0.1,h*0.1,w*0.8,h*0.8)