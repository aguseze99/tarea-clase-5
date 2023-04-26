
//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>
    const botonCalcularSalarioMensual = document.querySelector('#btn-salario-mensual')
    botonCalcularSalarioMensual.onclick = function(e){
        const salarioAnual = Number(document.querySelector('#salario-anual').value);
        const mesesEnElAño = 12;

        let salarioPorMes = function(salarioAnual){ return salarioAnual / mesesEnElAño}

        document.querySelector('#salario-mensual').value = salarioPorMes(salarioAnual)
        e.preventDefault()
    }

