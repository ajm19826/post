//--COPYRIGHT ©1995 - ~~ POSTBOOK INC POSTBOOK FILES //
//NONE OF THESE FILES CAN BE COPIED OR STOLEN.
//PLEASE READ THE TERMS OF CONDITIONS FOR MORE INFO
//https://postbook.net/terms-of-conditions.html
//OR EMAIL / TEXT postbook@postbook.net /// +1 732 400 8080 (888 400 8080 toll free)
//-->x
console.log("[POSTBOOK]\n Ready to make a change?\n We are hiring at PostBook!\nBrowse some of our careers at: https://careers.postbook.net/")
function showEditor(){
  document.getElementById("codeEditor").style.display = "block";

}
function openCity(evt, cityName) {
  console.log("[POSTBOOK]\n Ready to make a change?\n We are hiring at PostBook!\nBrowse some of our careers at: https://careers.postbook.net/")
document.getElementById('careertext').style.display = "none";
  console.clear();
  console.warn("This page is managed by Serverscript Saftey Plugin.")
  console.log("This page is printable. Click [Print] on the top of the page. Avalible clickable features: [Store] [Hangouts] [More] [Sign In] [Print, 'print()']")

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("mainloginarea").style.display = "none"

  function phoneshop() {
    console.clear();
    console.warn("This page is managed by Serverscript Saftey Plugin.")
    console.log("This page is printable. Click [Print] on the top of the page. Avalible clickable features: [Store] [Hangouts] [More] [Sign In] [Print, 'print()']")
    var detective = window.open("", "anotherWindow","resizable=0,width=825,height=810");
    detective.document.write("<HTML><TITLE>PostBook - MaidPhone 42 Ultra</TITLE><HEAD><STYLE>html{font-family:sans-serif;}; #infobody{float:left;} #paymentbox{float:right;}</STYLE></HEAD><BODY><DIV ID='infobody'><textarea style='font-size:0.67cm; font-family:sans-serif;width: 325px; height: 794px;' disabled>Meet the MaidPhone 42 Ultra, A Stainless Steel design that has 420 megapixels, and brain control, with Maid AI</textarea></DIV></BODY></HTML>");
  }
  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function retry(){
  console.clear();
  console.warn("This page is managed by Serverscript Saftey Plugin.")
  console.log("This page is printable. Click [Print] on the top of the page. Avalible clickable features: [Store] [Hangouts] [More] [Sign In] [Print, 'print()']")
  window.location.reload();
}
function mainweb(){
  console.clear();
  console.warn("This page is managed by Serverscript Saftey Plugin.")
  console.log("This page is printable. Click [Print] on the top of the page. Avalible clickable features: [Store] [Hangouts] [More] [Sign In] [Print, 'print()']")
  window.location.replace("Application.html")
}
function openWiki() {
  var iframe = document.getElementById("wikiFrame");
  var elmnt = iframe.contentWindow.document.getElementById("list")[0];
  elmnt.style.display = "none";
}
