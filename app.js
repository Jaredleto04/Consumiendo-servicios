const btnAdd = document.getElementById("btnCargar");
btnAdd.addEventListener("click",()=>{
const resultado = document.getElementById("detalles")
let Co1 = document.getElementById("txtCoor1").value
let Co2 = document.getElementById("txtCoor2").value
fetch("http://us1.locationiq.com/v1/reverse.php?key=pk.2f3963685bdadf994a6c94b0ff9c7aab&lat="+Co1+"&lon="+Co2+"&format=json")
  .then((response) => response.json())
  .then((json) => {
  let datos = "";
  for (let i=0;i<json.length;i++){
  datos += `<div>
  <h3>${json[i].display_name}</h3>
  </div>`
  resultado.innerHTML = datos;
  
}
})
}) 