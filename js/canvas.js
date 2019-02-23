var cnvs = document.getElementById("myCanvas");
var cntxt = cnvs.getContext("2d")
var w = cnvs.width;
var h = cnvs.height;

cntxt.fillStyle = "#ffffff";
cntxt.fillRect(0, 0, w, h);

cntxt.fillStyle = "#ff0000";
cntxt.fillRect(w*0.1,h*0.1,w*0.8,h*0.8)