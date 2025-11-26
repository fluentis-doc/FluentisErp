---
title: Documentos de Venta Salientes
sidebar_position: 2
ai_generated: true
---

El formulario "**Documentos de venta salientes<!-- Documenti vendita in uscita -->**" está dividido en dos secciones: una cabecera que contiene los campos de filtro utilizables para filtrar los documentos, y una cuadrícula con el resultado de la búsqueda realizada:

## Botones de la ribbon bar<!-- Pulsanti della ribbon bar -->:

- Buscar<!-- Ricerca -->: inicia la búsqueda en la cuadrícula de resultados de acuerdo con los datos presentes en los filtros de cabecera
- Visualizar<!-- Visualizza -->: abre el visor integrado para ver el archivo xml según la hoja de estilo ya precargada en Fluentis, con el fin de permitir una visualización "en claro"<!-- "in chiaro" -->
- Abrir documento<!-- Apri documento -->: se abre el documento factura<!-- fattura --> relativo al archivo xml en cuestión
- **Descargar adjunto<!-- Scarica allegato -->:** se descarga localmente en la PC una copia del archivo xml, para gestionarlo por ejemplo con servicios de envío de terceros
- **Recargar archivo<!-- Ricarica file -->:** Está activo cuando la línea está en estado *Generada* y permite recargar el archivo desde una carpeta externa (local o de red); útil para recargar un xml que se ha tenido que modificar manualmente para establecer alguna etiqueta particular o no gestionada (sin tener que pasar por el paso *firmada* como se hacía antes).
Fluentis verifica que el archivo tenga el mismo nombre y que el xml sea sintácticamente correcto<!-- sintatticamente corretto -->, pero no hace una comprobación sobre la estructura SdI (por lo tanto, una etiqueta incorrecta o con valores erróneos no recibirá ningún mensaje y no se enviará a SdI). En el registro relativo al archivo (por ejemplo, presionando Visualizar) en el campo **Información<!-- Informazioni -->** se registra que el archivo ha sido sobrescrito manualmente y la fecha.

## Valores presentados en la cuadrícula<!-- Valori presentati nella griglia -->:

-      **Estado SdI<!-- Stato SdI -->**: el estado del documento relativo a su envío al SdI a través de Fluentis Business Hub

-      **Tipo**: el código de referencia del tipo de documento de venta<!-- documento di vendita -->

-      **Fecha<!-- Data -->**, **Número<!-- Numero -->**, **Cliente**: la fecha, el número del documento y el cliente titular<!-- cliente intestatario -->

-      **Fecha de recepción del cliente<!-- Data di ricevimento del cliente -->**: la fecha de entrega del documento al cliente o la fecha de “puesta a disposición” del documento en el área reservada del cliente. Este último caso se refiere a los envíos en los que el SdI no logra identificar correctamente al contratante/cesionario<!-- committente/cessionario -->

-      **Nombre del archivo SdI<!-- Nome file SdI -->:** el nombre del archivo XML que se crea en el momento en que el documento pasa al estado GENERADA; en el formato original o después de la colocación de la firma digital, representa el archivo de factura<!-- file di fattura --> que se enviará a SdI.

-      **Fecha del último evento<!-- Data ultimo evento -->**: se refiere a la última acción realizada por el operador o la última notificación recibida por SdI durante el proceso de gestión del documento

Al hacer clic en el expander de una factura<!-- fattura --> (botón + en el extremo izquierdo) se abre el detalle de las transiciones relativas a los estados del documento y se visualizan las transiciones individuales producidas durante la gestión del documento, con la correspondiente fecha de ejecución y el nombre del eventual archivo generado por el cambio de estado:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image02.png)

Los documentos presentados en la cuadrícula Registro de documentos SdI<!-- griglia Registro dei documenti SdI --> son todos los creados por el flujo activo de gestión de documentos Factura<!-- Fattura -->, independientemente del estado; la acción de doble clic en una fila de factura abre el panel donde es posible ver los documentos generados durante la gestión del archivo de factura<!-- file fattura --> y el historial de transiciones.

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image03.png)

En la cuadrícula Registro de documentos SdI, seleccionando un documento factura o varios documentos factura en el mismo estado, es posible gestionar el estado de procesamiento del documento utilizando la combobox Estado en el menú ribbon y seleccionando el nuevo estado del documento:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image04.png)