function calcularDias() {
      // Obtener los valores de los elementos input
      const fechaInicial = document.getElementById('fecha-inicial').value;
      const fechaFinal = document.getElementById('fecha-final').value;
    
      // Convertir las fechas en objetos Date si ambas fechas han sido ingresadas
      if (fechaInicial && fechaFinal) {
        const fechaInicialObj = new Date(fechaInicial);
        const fechaFinalObj = new Date(fechaFinal);
    
        // Calcular la diferencia entre las fechas en milisegundos
        const diferenciaMs = fechaFinalObj - fechaInicialObj;
    
        // Calcular el número de días dividiendo la diferencia en milisegundos por el número de milisegundos en un día
        const dias = Math.round(diferenciaMs / (1000 * 60 * 60 * 24));
    
        // Mostrar el resultado en un elemento <p>
        document.getElementById('resultado').textContent = `Hay ${dias} días entre las fechas.`;
      }
    }
