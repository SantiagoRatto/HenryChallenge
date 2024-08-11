var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
var nombre = "toni";

var cuenta = amigos.length;
for (var i = 0; i < cuenta; i++){
  if (amigos[i].nombre == nombre){
    console.log ("check");
    console.log (amigos[i]);
  }
}