 
const API_URL = "https://restcountries.com/v3.1/all";
async function get_Data() {
  try {
    let data = await fetch(API_URL);
    let json = await data.json();
    // console.log(json);
    api_fetch(json);
  } catch (error) {
    console.log("Error required");
  }
}
get_Data();

//create container 
let container = document.createElement("div");
container.className = "container";
//row
let row = document.createElement("row");
row.className = "row";
function api_fetch(json) {
  let res = json;
  console.log(res);
  for (let i = 0; i < res.length; i++) {
    let name = res[i].name.common;
    // console.log(name);
    let capital = res[i].capital;
    // console.log(capital);
    let flags = res[i].flags.png;
    // console.log(flags);
    let map = res[i].maps.googleMaps;
    // console.log(map);
    let col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
    <div class="card-columns">
      <div class="card" style="padding:30px;">
        <img class="card-img-top" src="${flags}" alt="Card image cap" style="width:350px; height:250px;">
          <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, beatae cum aliquid tempore doloribus, sapiente necessitatibus accusantium deserunt vel iste ut quam laboriosam illo sunt, quas voluptatibus cumque sint praesentium.</p>
          <h5 class="card-title">${capital}</h5>
          <a href="${map}" class="btn btn-primary" target="_blank">Go to Location</a>
         </div>
      </div>
    </div>`
    row.append(col);
    container.append(row)
    document.body.append(container)
  }
}

