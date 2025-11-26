---
title: Insolutos
sidebar_position: 4
ai_generated: true
---

El formulario de búsqueda de insolutos<!-- ricerca insoluti --> 

- se encuentra en Tesorería<!-- Tesoreria --> > Cartera de Efectos<!-- Portafoglio Effetti --> > Efectos<!-- Effetti --> > Insolutos<!-- Insoluti -->
- permite al usuario buscar los insolutos<!-- insoluti --> emitidos previamente con el fin de visualizarlos, modificarlos y eventualmente eliminarlos.

Desde este formulario también es posible ingresar manualmente un nuevo insoluto<!-- insoluto --> utilizando el botón **Nuevo<!-- Nuovo -->**.

## Botones de la Ribbon Bar<!-- Pulsanti della Ribbon Bar -->

> - **Buscar<!-- Ricerca -->:** Botón para buscar los insolutos<!-- insoluti --> según los filtros de búsqueda establecidos en el encabezado del formulario.
> - **Nuevo<!-- Nuovo -->:** Abre el formulario para agregar un nuevo insoluto<!-- insoluto -->.
> - **Modificar<!-- Modifica -->:** Permite modificar un insoluto<!-- insoluto --> ingresado previamente.
> - **Visualizar<!-- Visualizzazione -->:** Permite visualizar un insoluto<!-- insoluto --> previamente ingresado.
> - **Eliminar<!-- Elimina -->:** Elimina un insoluto<!-- insoluto --> previamente ingresado.
> - **Creación múltiple de insolutos<!-- Creazione multipla insoluti -->:** Ejecuta el comando para crear más de un insoluto<!-- insoluto --> simultáneamente.

> La ejecución de las **impresiones<!-- stampe -->** (*Vista previa<!-- Anteprima -->* o *Imprimir<!-- Stampa -->*) lanza, para los insolutos<!-- insoluti --> seleccionados con el mouse (manteniendo presionada la tecla Ctrl se pueden seleccionar varios insolutos<!-- insoluti --> a la vez), las impresiones homónimas presentes en el [**menú de impresiones<!-- menu stampe -->**](/docs/treasury/bills-holding/reports/print-unpaid-list) del módulo.

> - *Insolutos<!-- Insoluti -->*: da visibilidad a los efectos insolutos<!-- effetti insoluti --> con los respectivos detalles e importes, incrementados por posibles intereses y gastos.
> - *Carta de requerimiento<!-- Lettera di sollecito -->*: Carta dirigida al deudor donde se destacan los efectos insolutos<!-- effetti insoluti --> y se solicita el pago correspondiente.

## Filtros de búsqueda

- **Tipos de efectos<!-- Tipi Effetti -->:** Filtra por el tipo de efecto que fue ingresado en el insoluto<!-- insoluto --> durante la creación, por ejemplo, Recibo bancario, Letra de cambio, etc.
- **Deudor<!-- Debitore -->:** Filtro relativo al campo ***Deudor<!-- Debitore -->*** presente dentro del efecto<!-- effetto -->.
- **DE / A / fecha de insoluto / Fecha de vencimiento / Fecha de emisión / Número<!-- DA / A / data insoluto / Data scadenza / Data emissione / Numero -->**: se refieren a los mismos campos presentes dentro del insoluto<!-- insoluto --> y en particular a la fecha de creación del insoluto<!-- insoluto -->, la fecha de vencimiento de la partida que se reabre con el insoluto<!-- insoluto -->, la fecha de emisión del efecto<!-- effetto --> que resultó insoluto<!-- insoluto --> y el número del efecto insoluto<!-- effetto insoluto -->.
- **Estado de insoluto<!-- Stato insoluto -->:** filtro relativo al *Estado de insoluto<!-- Stato insoluto -->* presente dentro del insoluto<!-- insoluto -->, el estado se modifica automáticamente según los procedimientos que se hayan ejecutado, por ejemplo, inicia como Insoluto<!-- Insoluto -->, luego se vuelve cobrado/incassato, o se emite una nota de débito<!-- nota di addebito -->, etc.
- **Flag de filtro:** Por defecto está activo *Todos*, pero puede cambiarse seleccionando las diferentes condiciones de búsqueda, que si se activan simultáneamente ampliarán la base de búsqueda, por ejemplo, los impresos + los contabilizados + los NO impresos... Además, está presente la sección adicional expandible para filtrar insolutos<!-- insoluti --> que provienen de efectos<!-- effetti --> generados por partidas<!-- partite --> o por facturas<!-- fatture --> con las fechas/números respectivos. Esto ayuda en la búsqueda, ya que los dos procedimientos de creación del efecto<!-- effetto --> son alternativos entre sí.

## Cuadrícula de resultados<!-- Griglia dei risultati -->

Este formulario muestra los mismos campos presentes en los filtros ya detallados anteriormente.

Además presenta:
- el importe del efecto insoluto<!-- effetto insoluto --> y **Gastos bancarios<!-- Spese Bancarie -->** presentes en el encabezado del insoluto<!-- testata insoluto --> que se vuelve a cargar al cliente y se contabiliza<!-- contabilizzato -->
- la **fecha** y **número** de Importación relacionados con el procedimiento de **Importación de insolutos<!-- Importazione insoluti -->**
- el **Número de factura<!-- Numero di fattura -->** que generó el efecto<!-- effetto --> que resultó insoluto<!-- insoluto -->
- el **Banco de presentación<!-- Banca di presentazione -->** del efecto insoluto<!-- effetto insoluto -->