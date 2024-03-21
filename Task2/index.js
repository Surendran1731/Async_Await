//create container 
let container = document.createElement("div");
container.className = "container";
//row
let row = document.createElement("row");
row.className = "row";
function fetch_data(json){
  let data=json;
  // console.log(data);
  for(let i=0;i<data.length;i++){
    let codigo=data[i].codigo;
    // console.log(codigo);
    let nome=data[i].nome;
    // console.log(nome);
    let col = document.createElement("div");
    col.className = "col-md-3";
    col.innerHTML = `
    <div class="card border-success mb-3" style="max-width: 18rem; margin-top:10px; text-align:center;">
    <div class="card-header bg-transparent border-success">${codigo}</div>
    <div class="card-footer bg-transparent border-success">${nome}</div>
   </div>`
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}


const API_URL="https://parallelum.com.br/fipe/api/v1/carros/marcas";
async function open_data(){
  try {
    let data_fetch=await fetch(API_URL);
    let json=await data_fetch.json();
    // console.log(json);
    fetch_data(json);
  } catch (error) {
    console.log("Something went Wrong");
  }
}
open_data();
