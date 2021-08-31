var tenth = '';

function ninth() {
  if (document.all) {
    (tenth);
    alert("Klik Kanan dilarang");
    alert("Mau Tong Lolos");
    return false;
  }
}

function twelfth(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    (tenth);
    return false;
  }
}

if (documnet.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = twelfth;
} else {
  document.onmouseup = twelfth;
  document.oncontextmenu = ninth;
}
document.oncontextmenu = new Function('return false');