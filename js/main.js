

  import prompt from "prompt-sync"
  import contrasenaVAlida from "./modules/contrasena.js"
  let input = prompt();
  let opc = undefined;


  do{
    let data = input("ingrese la contrasena: ");
    console.log(contrasenaVAlida(data));
    console.log('1. Repetir la validacion\n0. Terminar');
    opc = Number(input()); 
  }while(opc)






