
function Copiar() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Texto Copiado");
}