async function get_data(){
  var res = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
  var result = await res.json();
  console.log(result);
  for(var i =0;i<result.length;i++){
      var name = result[i].name;
      var latlng = result[i].latlng;
      var capital_data = result[i].capital
      open_data(name,...latlng,capital_data);
  }
}

async function open_data(name,lat,lon,capital_data){
  try {
  if(lat==undefined){
  throw new Error("Invalid Lat Long values") 
  }
  var open_res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa4973b1fa1ca717811b9566c55321ec`)
  var final_res = await open_res.json();
  bootstrap(name,capital_data,lat,lon,final_res.main.temp);
  } catch (error) {
      console.log("data lost"+error.message);
  }
}
get_data();

let heading=document.createElement("h3");
heading.className="heading";
heading.innerHTML="Temperature And Lat Lon in Rest Countries"
document.body.appendChild(heading);

var container  =  document.createElement("div");
container.className ="container"

var row = document.createElement("div");
row.className = "row d-flex justify-content-around"

function bootstrap(name,capital_data,lat,lon,temp){
  var col  = document.createElement("div");
  col.className = "col-md-3" 
  col.innerHTML= `
  <div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-body text-success">
    <h5 class="card-title">Name:${name}</h5>
    <h5 class="card-title">Capital :${capital_data}</h5>
    <h5 class="card-title">[lat,lon] :${lat,lon}</h5>
    <h5 class="card-title">Temperature :${temp}</h5>
  </div>
  </div>`
  row.append(col);
  container.append(row);
  document.body.append(container);
}
