var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all", true);

request.send () ;

request.onload = function () {
  var data = JSON.parse(request.response);
  console.log(data);

let arr= data;

console.log(arr.filter(function(item){
  return item.region =="Asia"
}));
 let filtered = arr.filter(name=>name.region =="Asia");


 let arr2 = data;

console.log(arr2.filter(function(item){
  return item.population < 200000 
}));
 let pepole = arr2.filter(name=>name.population <200000);

 const yourObject = data;
const keys = Object.keys(yourObject);
for (let name= 0; name< keys.length; name++) {
  const key = keys[name];
  console.log(key, yourObject[key]);
}

let input = data;
  
let output = input.reduce((accumulator, currentValue) => {
  accumulator.push({"population" : currentValue.population});
  return accumulator;
},[]);

console.log(output);
};
