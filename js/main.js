
////////////////////////////////// EJERCICIO 01 CONTRASEÑA/////////////////////////////////////////

  // import prompt from "prompt-sync"
  // import contrasenaVAlida from "./modules/contrasena.js"
  // let input = prompt();
  // let opc = undefined;


  // do{
  //   let data = input("ingrese la contrasena: ");
  //   console.log(contrasenaVAlida(data));
  //   console.log('1. Repetir la validacion\n0. Terminar');
  //   opc = Number(input()); 
  // }while(opc)

  //////////////////////////////////////////////////////////////////////////////////////////////////



  ///////////////////////////////////////EJERCICIO 24 PALABRAS CON A////////////////////////////////

  import prompt from "prompt-sync"
  import {empiezanConA} from "./modules/ejercicio24.js"
  const palabras = ['beta', 'alfa', 'Arbol', 'Gamma', 'Apricot', 'orange'];
  const palabrasQueEmpiezanConA = empiezanConA(palabras);
  console.log(palabrasQueEmpiezanConA);

//////////////////////////////////////////////////////////////////////////////////////////////////////7