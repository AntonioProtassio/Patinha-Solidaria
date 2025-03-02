var radio = document.querySelector("btn-1");
varcont = 1;
document.getElementById("radio1").Checked = true;

setInterval(() => {
  proximaimg();
}, 5000);

function proximaimg() {
  cont++

  if(cont > 3){
    cont = 1
  }
  document.getElementById('radio'+cont).Checked = true;
}
