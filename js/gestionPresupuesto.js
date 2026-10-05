'use strict';
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global

let presupuesto = 0
let gasto = []
let idGasto = 0

function actualizarPresupuesto(newpresupuesto) {
    
    if(typeof newpresupuesto === 'number' && newpresupuesto >= 0)
    {
        presupuesto = newpresupuesto
        return presupuesto;
    }else{
        console.log("Error al poner el nuevo presupuesto, comprueba el tipo o que sea mayor que 0")
        return -1;
    }

}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;

}

function CrearGasto(descripcion,valor) {

    if(typeof valor !== "number" || valor < 0){
        valor = 0;
    }

    this.descripcion = descripcion;
    this.valor = valor;
    
    this.mostrarGasto = function() {
        return `Gasto correspondiente a ${descripcion} con valor ${valor} €`;
    };

    this.actualizarDescripcion = function(newdescripcion) {
        this.descripcion = newdescripcion
    };

    this.actualizarValor = function(newValor) {
        if(newValor < 0 || typeof newValor !== "number"){
            newValor = this.valor;
        }
        this.valor = newValor;
    };

}

function listarGastos(){
    return gasto
}

function anyadirGasto(){}

function borrarGasto(){}

function calcularTotalGastos(){}

function calcularBalance(){}


// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto, 
    actualizarPresupuesto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    CrearGasto
}
