const radio = document.querySelector(".btn-1");
let cont = 1

document.getElementById("radio1").Checked = true;

setInterval(() => {
  proximaimg();
}, 5000);

function proximaimg() {
 
  cont = cont > 3 ? 1 : cont + 1;

  document.getElementById('radio' + cont).checked = true;
};
