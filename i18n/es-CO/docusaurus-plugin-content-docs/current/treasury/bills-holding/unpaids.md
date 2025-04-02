---
title: insoluti
sidebar_position: 4
---

El formulario de búsqueda de insolutos

- se encuentra en Tesorería > Cartera de Efectos > Efectos > insoluti

- permite al usuario buscar los insolutos emitidos previamente con el propósito de visualizarlos, modificarlos y, eventualmente, eliminarlos.

Desde este formulario también es posible ingresar manualmente un nuevo insoluto a través del botón **nuovo**.


## Botones de la Barra de Ribbon

> - **Buscar (Ricerca):** Botón para buscar insolutos según los filtros de búsqueda establecidos en la cabecera del formulario.  
> - **Nuevo (Nuovo):** Llama al formulario para ingresar un nuevo insoluto.  
> - **Modificar (Modifica):** Permite modificar un insoluto ingresado previamente.  
> - **Visualización (Visualizzazione):** Permite visualizar un insoluto ingresado previamente.  
> - **Eliminar (Elimina):** Elimina un insoluto ingresado previamente.  
> - **Creación múltiple de insolutos (Creazione multipla insoluti):** ejecuta el comando para crear más de un insoluto al mismo tiempo.  

> La ejecución de **stampe** (*anteprima* o *stampa*) lanza, respecto a los insolutos seleccionados con el mouse, (manteniendo presionado Ctrl se pueden seleccionar varios insolutos al mismo tiempo) las impresiones homónimas presentes en el [**menú de impresiones (menu stampe)**](/docs/treasury/bills-holding/reports/print-unpaid-list) del módulo.  

> - *insoluti*: evidencia de los efectos insolutos con sus respectivos referencias y montos, incrementados con cualquier interés y gastos.  
> - *Carta de recordatorio (Lettera di sollecito)*: Carta dirigida al deudor que destaca los efectos insolutos y solicita el pago.


## Filtros de búsqueda

- **Tipos de Efectos (Tipi Effetti):** Filtra según el tipo de efecto que se ha ingresado en el insoluto en el momento de la creación, por ejemplo, Recibo bancario, Pagaré, etc.  
- **Deudor (Debitore):** filtro relacionado con el campo ***Deudor*** presente dentro del efecto.  
- **DE / A / fecha de insoluto / Fecha de vencimiento / Fecha de emisión / Número (DA / A / data insoluto / Data scadenza / Data emissione / Numero):** referidos a los campos homónimos presentes dentro del insoluto y en particular relacionados con la fecha de creación del insoluto, la fecha de vencimiento de la partida que se reabre con el insoluto, la fecha de emisión del efecto que ha ido a insoluto y el número del efecto insoluto.  
- **Estado del insoluto (Stato insoluto):** filtro relacionado con el *Estado insoluto* presente dentro del insoluto; el estado se modifica automáticamente dependiendo de los procedimientos que se han ejecutado, por ejemplo, comienza como Insoluto, luego se convierte en cobrado, o se emite una nota de débito, etc.  
- **Indicador de filtro (Flag di filtro):** Por defecto está activo *tutti*, pero puede cambiarse seleccionando las diversas condiciones de búsqueda que, si se activan simultáneamente, ampliarán la base de búsqueda, por ejemplo, los impresos + los contabilizados + los NO impresos... También hay una sección adicional expandable para filtrar insolutos que provienen de efectos generados por partidas o facturas con sus respectivos referencias de fecha / número. Esto ayuda en la búsqueda, ya que los dos procedimientos de creación del efecto son alternativos entre sí.

## Cuadro de resultados

En este formulario presenta los mismos campos que los filtros detallados anteriormente.

Además, presenta:
- el monto del efecto insoluto y **spese bancarie** presentes en la cabecera del insoluto que se vuelve a cargar al cliente y se contabiliza.  
- la **fecha** y **número** de importación relacionados con el procedimiento de **importazione insoluti**.  
- el **numero di fattura** que ha generado el efecto que ha ido a insoluto.  
- el **Banco de presentación (Banca di presentazione)** del efecto insoluto.