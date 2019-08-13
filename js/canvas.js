var cnvs = $(`<canvas width=300 height=300>`).get(0)
var cntxt = cnvs.getContext("2d")
var w = cnvs.width;
var h = cnvs.height;

cntxt.fillStyle = "#ff0000";
cntxt.fillRect(w*0.1,h*0.1,w*0.8,h*0.8)

var img = new Image();
img.src = cnvs.toDataURL();
$(img).appendTo("body");

var img2 = new Image();
img2.src = cnvs.toDataURL("image/jpeg",0.1);
$(img2).appendTo("body");