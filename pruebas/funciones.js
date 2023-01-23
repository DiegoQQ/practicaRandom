const paises = new XMLHttpRequest();
paises.open('GET', 'countries.json', true);
paises.send();

paises.onreadystatechange = function(){
  if(this.status == 200 && this.readyState == 4){
      let pais = JSON.parse(this.responseText);
      

      var countri = pais.map(function(obj){
        //console.log(obj.name.common);
      var rObj = {};
      rObj['name'] = obj.name.common;
      return rObj;
      });
      let prueba = JSON.stringify(countri);
      //console.log(prueba);

      //console.log(countri);
      let countries = document.querySelector('#parrafo');
      countries.innerHTML = prueba;
  }
}

var kvArray = [{clave:1, valor:10},
  {clave:2, valor:20},
  {clave:3, valor: 30}];

var reformattedArray = kvArray.map(function(obj){
  //console.log(obj);
var rObj = {};
rObj[obj.clave] = obj.valor;
return rObj;
});
console.log('termina');
//console.log(reformattedArray);

