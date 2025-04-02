---
title: distinte
sidebar_position: 3
---

El formulario de búsqueda de listas 
- se encuentra en Tesorería > Cartera de Efectos > Efectos > distinte

- permite al usuario buscar las listas de presentación emitidas previamente con el fin de visualizarlas, modificarlas y, eventualmente, cancelarlas.


## Botones de la Barra de Ribbon

> - **Buscar listas (Ricerca distinte):** Botón para buscar las listas según los filtros de búsqueda establecidos en la cabecera del formulario.  
> - **Nueva lista (Nuovo distinte):** Llama al formulario para ingresar una nueva lista.  
> - **Modificar lista (Modifica distinte):** Permite modificar una lista previamente ingresada.  
> - **Visualización de lista (Visualizzazione distinte):** Muestra una lista previamente ingresada.  
> - **Eliminar lista (Cancella distinte):** Elimina una lista previamente ingresada.  

> Ejecución de la **impresión** (*anteprima* o *stampa*) *Lista de presentación*: lanza, en relación con las listas seleccionadas con el mouse, (manteniendo presionada la tecla Ctrl se pueden seleccionar múltiples listas simultáneamente) la impresión homónima presente en el [**menú de impresiones**](/docs/treasury/bills-holding/reports/print-presentation-lists) del módulo.

## Filtros en la cabecera del formulario

- **Tipo (Tipo):** filtra por tipo de lista, definido en la tabla [***Tipos de presentación de listas de efectos***](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types)

- **Banco (Banca):** filtra por cuenta **banca conto corrente** configurada en la cabecera de la lista

- **DE - A Número de lista (DA - A Numero distinta):** filtra por número de lista, dato establecido por el numerador automático en la fase de creación de la lista

- **DE / A fecha de presentación (DA / A data presentazione):** filtra por fecha de presentación, campo en la cabecera de la lista que generalmente se propone como "*oggi*" pero puede ser modificado por el usuario

- **Monedas (Divise):** filtra por moneda, dato de cabecera que se refiere a la moneda de los efectos contenidos en la lista, por ejemplo, para extraer solo las monedas denominadas en dólares.

- **Impreso (Stampato):** si está activado, este indicador extrae solo listas impresas (o con el indicador *impreso* "true") 

- **Contabilizado (Contabilizzata):** si está activado, este indicador extrae solo listas contabilizadas a través de [el procedimiento correspondiente](/docs/treasury/bills-holding/accounting/lists-accounting) (o con el indicador *contabilizzata* "true")


## Cuadrícula de resultados

En este formulario presenta los mismos campos que los filtros ya detallados anteriormente.

Asimismo, presenta el **totale** de la lista (suma los importes de los efectos en la lista).