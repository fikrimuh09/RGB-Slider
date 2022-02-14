var body = document.body, 
    r = document.querySelector('#r'),
    g = document.querySelector('#g'),
    b = document.querySelector('#b'),
    hex_out = document.querySelector('#hex');

function setColor(){
  var r_hex = parseInt(r.value, 10).toString(16),
      g_hex = parseInt(g.value, 10).toString(16),
      b_hex = parseInt(b.value, 10).toString(16),
      hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex),
      hex_angka = "RGB (" + r.value.toString() +"," +g.value.toString() +"," + b.value.toString() +")";
  body.style.backgroundColor = hex; 
  hex_out.value = hex_angka;
}

function pad(n){
  return (n.length<2) ? "0"+n : n;
}

r.addEventListener('change', function() {
  setColor();
}, false);

g.addEventListener('change', function() {
  setColor();
}, false);

b.addEventListener('change', function() {
  setColor();
}, false);
