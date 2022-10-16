document.οncοntextmenu = function() {
	return false; 
}

document.onkeydown = function()	{ 
 if (event.ctrlKey && window.event.keyCode == 67)
 {
  alert("不行哦！");
  return false; 
 } 
} 
document.body.oncopy = function () {
 alert("不行哦！");
 return false; 
} 

function unmouse(){    
 document.oncontextmenu = new Function("return false;");
 document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if (e && (e.keyCode == 123 || (e.keyCode == 116 && e.type!='keypress'))) 
  {
   e.returnValue = false;
   alert("不行哦！");
   return (false);
  }
 }
}
unmouse()

window.addEventListener('keydown', function (e) {
 if(e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)){
  e.preventDefault();
  alert("不行哦！");
 }
})