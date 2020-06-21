// TAREA INTEGRAL
 /***********************************************
 * Observaciones: 
 *  - Pensar en arrays dentro de arrays variable = [ ['dato1', 2, true], [], [] ]
 *  - Utilizar funciones de los arrays, find (o findIndex), map o for of
 *  - Utilizar nombres de variables y funciones representativas
 * 
 ************************************************/

/* 1. Hacer una función que guarde una persona
 *    en una lista de listas de datos de personas.
 *    Es decir, una lista con varias listas adentro.
 *    Deberia guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.*/

let userList = [["Meri Laclau", "34", "merilaclau@gmail.com"], ["Juan Dans", "23", "juandans@gmail.com"]];
let newUser = [];

//POR PROMPT
const getNewUser = () => {
    newUser = [];
    newUser.push(prompt("Ingresá tu nombre y apellido"));
    newUser.push(prompt("Ingresá tu edad"));
    newUser.push(prompt("Ingresá tu correo electrónico"));
    isNewUser();
}

//POR CONSOLA ASIGNANDO VALORES
const getNewUser = (name, age, email) => {
    newUser = [];
    newUser.push(name);
    newUser.push(age);
    newUser.push(email);
    isNewUser();
}

/* 1b. Al ingresar nueva persona, validar que no 
 *     exista en la lista. Si existe, tirar
 *     un error. (Usar funcion distinta para validar
 *     y llamar dentro de la funcion de guardar persona).*/

const isNewUser = () => {
    const existentUser = userList.find(user => {
        return user.every(i => newUser.includes(i));
    })
    existentUser ? alert("Los datos ingresados corresponden a une usuarie existente. No es necesario que vuelvas a registrarte.") : userList.push(newUser);
}

//INVOCANDO FUNCION POR PROMPT
getNewUser();
getNewUser();

//INVOCANDO FUNCIÓN POR CONSOLA ASIGNANDO VALORES
getNewUser("Pedro Lopez", "56", "pedrolopez@gmail.com"); 
//Uso string para el número porque las validaciones posteriores están hechas para que funcionen tanto para prompt como para valores asignados por consola


// ///////////////////////////////////////////
/* 2. Hacer una función que me devuelva la lista
 *    completa de personas.*/

const displayUserList = () => console.log(userList);

displayUserList();

// ///////////////////////////////////////////
/* 3. Hacer una función que me permita encontrar
 *    una persona por email.*/

const findUserBy = (userData) => {
    const userFound = userList.find(user => user.includes(userData));
    alert(`Le usuarie es ${userFound}`);
}

// Para encontrar une usuarie x mail
findUserBy(prompt("Ingresá el correo electrónico de le usuarie que querés encontrar"));

// Para encontrar une usuarie x nombre exacto
findUserBy(prompt("Ingresá el nombre completo de le usuarie que querés encontrar"));

// REVISAR!!! 
/* 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.*/

//Solución con filter + find
const findUserByPartialName = (userData) => {
    const userFound = userList.filter(user => user.find(elem => elem.includes(userData)));
    alert(`Le usuarie es ${userFound}`);
    //return userFound;
}

//Solución con find + push devuelve array con todxs lxs usuarixs que matchean
const findUserByPartialName = (userData) => {
    let userFound = [];
    userList.forEach(user => { 
        if (user.find(elem => elem.includes(userData))) {
            userFound.push(user);
        }
    })
    alert(`Le usuarie es ${userFound}`);
    //return userFound;
}

//Funciona a medias porque FIND me devuelve sólo el primer elemento que cumple con el nombre parcial.
const findUserByPartialName = (userPartialName) => {
    const userFound = userList.find(userFullData => {
        return userFullData.filter(elem => elem.includes(userPartialName)).length;
    } )
    alert(`Le usuarie es ${userFound}`);
}

//No funciona. Devuelve vacío porque el filter cuando no encuentra nada. 
//Devuelve un array vacío y da vacío porque el includes no funciona para buscar un pedacito de elemento dentro de un elemento mayor que es un array de arrays.
/*const findUserByPartialName = (userPartialName) => {
    const userFound = userList.filter(elem => elem.includes(userPartialName));
    alert(`Le usuarie es ${userFound}`);
}*/

findUserByPartialName(prompt("Ingresá el nombre completo o parcial de le usuarie que querés encontrar"));

// ///////////////////////////////////////////
/* 5. Hacer una función para borrar personas por mail.*/

const deleteUserBy = (userData) => {
    const userIndex = userList.findIndex(user => user.includes(userData));
    userList.splice(userIndex, 1);
    alert("Le usuarie ha sido modificade con éxito");
    console.log(userList);
    return userList;
}

deleteUserBy(prompt("Ingresá el correo electrónico de le usuarie que querés eliminar"));

// ///////////////////////////////////////////
/* 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.*/

const modifyNameByMail = (userData) => {
    const userIndex = userList.findIndex(user => user.includes(userData));
    userList[userIndex][0] = prompt("Ingresá el nuevo nombre de este usuarie")
    alert("Le usuarie ha sido modificade con éxito");
    console.log(userList);
    return userList;
}

modifyNameByMail(prompt("Ingresá el correo electrónico de le usuarie que querés renombrar"));

// ///////////////////////////////////////////
/* 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.*/
const modifyAgeByMail = (userData) => {
    const userIndex = userList.findIndex(user => user.includes(userData));
    userList[userIndex][1] = prompt("Ingresá la nueva edad de este usuarie")
    alert("Le usuarie ha sido modificade con éxito");
    console.log(userList);
    return userList;
}

modifyAgeByMail(prompt("Ingresá el correo electrónico de le usuarie que querés modificar"));