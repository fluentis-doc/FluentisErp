---
title: documenti vendita in uscita
sidebar_position: 2
---

El formulario "**documenti vendita in uscita**" se divide en dos secciones, una de encabezado que contiene los campos de filtro utilizables para filtrar los documentos y una cuadrícula de resultados de la búsqueda realizada:

## Botones de la barra de herramientas (Pulsanti della ribbon bar):

- **ricerca**: inicia la búsqueda en la cuadrícula de resultados según los datos presentes en los filtros del encabezado.
- **visualizza**: abre el visor integrado para ver el archivo xml de acuerdo con la hoja de estilo ya precargada en Fluentis para permitir la visualización "en claro".
- **apri documento**: se abre el documento de factura relacionado con el archivo xml en cuestión.
- **scarica allegato**: se descarga localmente en el pc una copia del archivo xml para gestionarlo, por ejemplo, con servicios de envío de terceros.
- **Recargar archivo (Ricarica file)**: está activo cuando la fila está en estado *Generada* y permite recargar el archivo desde una carpeta externa (local o de red); útil para permitir recargar un xml en el que se ha tenido que intervenir manualmente para ajustar algún tag particular o no gestionado (sin tener que pasar por el paso *firmada* como se hacía anteriormente). Fluentis verifica que el archivo tenga el mismo nombre y que el xml sea sintácticamente correcto, pero no realiza una prueba sobre la estructura del Sdi (por lo tanto, un tag incorrecto o con valores erróneos no recibirá ningún mensaje y no se realizará el envío al Sdi). En el log relacionado con el archivo, (presionando, por ejemplo, Ver) en el campo **Información** se registrará la indicación de que el archivo ha sido sobrescrito manualmente y la fecha.

## Valores presentados en la cuadrícula:

- **stato sdi**: el estado del documento en relación con su envío al SdI a través de Fluentis Business Hub.

- **tipo**: el código de referencia del tipo de documento de venta.

- **Fecha, Número, Cliente (Data, Numero, Cliente)**: la fecha, el número del documento y el cliente titular.

- **data di ricevimento del cliente**: la fecha de entrega del documento al cliente o la fecha de "puesta a disposición" del documento en el área reservada del cliente. Este último caso se refiere a los envíos para los cuales el SdI no puede identificar correctamente al contratante/cessionario.

- **nome file sdi**: el nombre del archivo XML que se crea cuando el documento se avanza al estado GENERADA; en el formato original o después de la colocación de la firma digital, representa el archivo de factura a enviar al SdI.

- **data ultimo evento**: se refiere a la última acción realizada por el operador o a la última notificación recibida del SdI durante el proceso de gestión del documento.

Al hacer clic en el expander de una factura (botón + en el extremo izquierdo), se abre el detalle de las transiciones relacionadas con los estados del documento y se visualizan las transiciones individuales que ocurrieron en la gestión del documento con la fecha de ejecución correspondiente y el nombre del archivo generado por el cambio de estado:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image02.png)

Los documentos presentados en la cuadrícula Registro de documentos SdI son todos aquellos creados por el flujo activo de gestión de documentos de factura, independientemente del estado; la acción de doble clic en una fila de factura abre el panel en el cual se pueden visualizar los documentos creados durante la gestión del archivo de factura y el historial de transiciones.

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image03.png)

En la cuadrícula Registro de documentos SdI, seleccionando un documento de factura o varios documentos de factura en el mismo estado, es posible gestionar el estado de procesamiento del documento utilizando la combo Estado en el menú de la barra de herramientas y seleccionando el nuevo estado del documento:

![](/img/it-it/finance-area/sdi-documents/outgoing-sales-documents/image04.png)