---
title: effetti
sidebar_position: 3
---

El formulario de búsqueda de efectos  
- se encuentra en Tesorería > Cartera de effetti > effetti > effetti 

- permite al usuario buscar los efectos emitidos anteriormente con el fin de visualizarlos, modificarlos y, eventualmente, eliminarlos. 

Desde este formulario también es posible ingresar manualmente un nuevo efecto, pero este modo se utiliza poco en la práctica. Por lo general, se procede a través de los procedimientos de creación automática de efectos (a partir de partidas o facturas).

## Botones de la Ribbon Bar

> - **ricerca effetti**: Botón para buscar los efectos según los filtros de búsqueda establecidos en la cabecera del formulario.  
> - **nuovo effetto**: Llama al formulario para ingresar un nuevo efecto.  
> - **modifica effetto**: Permite modificar un efecto ingresado previamente.  
> - **visualizzazione effetto**: Permite visualizar un efecto ingresado previamente.  
> - **cancella effetto**: Elimina un efecto ingresado previamente.  

> La ejecución de **stampe** (*anteprima* o *stampa*) lanza, para los efectos seleccionados con el mouse (manteniendo presionada la tecla Ctrl se pueden seleccionar varios efectos al mismo tiempo), la impresión homónima presente en el [**menú de impresiones (menu stampe)**](/docs/treasury/bills-holding/reports/bill-holding-situation) del módulo.

> - *avviso scadenza effetti*: Carta dirigida al cliente (una página por cada efecto seleccionado) que destaca los efectos que están próximos a vencer con sus respectivos detalles.  
> - *lettera di cumulo*: Carta dirigida al cliente que destaca las partidas o facturas incluidas en cada efecto.  
> - *portafoglio effetti*: Imprime una lista de efectos con evidencia de los datos principales relacionados.  
> - *situazione castelletti*: Imprime, para cada banco (relativo a los efectos seleccionados), la situación del castelletto concedido, utilizado y restante.  

## Filtros de búsqueda

- **conto**: filtro relacionado con el campo **debitore*** presente en el efecto.  
- **Año / Tipo de efecto (Anno / Tipo effetto)**: filtros relacionados con los campos homónimos presentes en el efecto.  
- **DE / A / fecha de vencimiento / Fecha de emisión / Número (DA / A / data scadenza / Dat emissione / Numero)**: relativos a los campos homónimos presentes en el efecto.  
- **stati effetti**: filtro relacionado con el *stato effetto* presente dentro del efecto; este estado se modifica automáticamente según los procedimientos que se hayan ejecutado, por ejemplo, comienza como Emitido (Emesso), luego se convierte en presentado (presentato), Acreditado (Accreditato), insolvente (insoluto), etc.  
- **divisa**: para filtrar solo efectos denominados, por ejemplo, en dólares, etc.  
- **Plaza / ABI / CAB / Descripción del Banco (Piazza / ABI / CAB / Descrizione Banca)**: relacionados con el banco de apoyo del deudor.  
- **Indicador de la sección Estado del Efecto (Flag della sezione Stato Effetto)**: De forma predeterminada está activo *tutti*, pero puede cambiarse seleccionando las diversas condiciones de búsqueda que, si se activan simultáneamente, ampliarán la base de búsqueda; por ejemplo, aquellos impresos + aquellos contabilizados + aquellos NO impresos... 

## Cuadro de resultados

En este formulario, se presentan los mismos campos que se detallaron anteriormente en los filtros.

También presenta los **Importes** (en divisa, por ejemplo, dólares, y en euros) del efecto (coincidentes si el efecto está denotado en euros).