---
title: Documentos extranjeros de salida
sidebar_position: 5
ai_generated: true
---
:::tip[Nota]
**Obligación superada<!-- Adempimento superato -->** en lo que respecta a las compras, desde el actual envío al SDI de la [**autofactura**](/docs/finance-area/e-invoice/auto-invoice/auto-invoice-generation).  
En cuanto a las ventas, actualmente se procede con el envío directo de las facturas (ver más abajo)
:::

La normativa prevé enviar a la Agencia Tributaria también los datos relativos a las operaciones de cesión de bienes/prestación de servicios REALIZADAS y RECIBIDAS por sujetos NO identificados/no residentes en el territorio del Estado.

- Para los documentos **EMITIDOS** es posible utilizar el mismo formato previsto para las facturas electrónicas italianas; en alternativa, pueden ser enviadas con el formato previsto para los documentos extranjeros de compra indicado en el siguiente punto.

- Para el envío al SDI de los documentos de compra de proveedores extranjeros está previsto un ** [formato específico](/docs/finance-area/declarations/declarations/electronic-invoice-for-foreign) **.

La firma digital es obligatoria para ambos tipos de archivos.

El envío al SDI de estos archivos se gestiona en Fluentis mediante las operaciones de cambio de estado de los documentos<!-- documenti -->.

El archivo XML se transmite al SDI que lo controla y lo adquiere, y devuelve las notificaciones relativas al posible rechazo por no conformidad del archivo o la confirmación de recepción.

**Desde este formulario es posible gestionar individualmente para cada documento<!-- documento -->, o de forma masiva para múltiples documentos<!-- documenti --> al mismo tiempo, el cambio de estados para el envío al SDI siguiendo el mismo formato de las facturas italianas.**

En el formulario Documentos de compras extranjeras de salida<!-- Documenti acquisti esteri in uscita --> se visualizan todos los archivos generados por los registros contables<!-- Registrazioni contabili --> y relativos a este tipo de situación. El formulario se divide en una sección superior en la cual se exponen los filtros de selección de los archivos gestionados, entre ellos:

 - Desde fecha/Hasta fecha de recepción:
 - Desde fecha/Hasta fecha de recepción del cliente:

En la cuadrícula de resultados se visualizan los datos relativos a los archivos gestionados o por gestionar:

 - **Estado SDI<!-- Stato SdI -->**: muestra la descripción del estado del documento<!-- documento -->, incluyendo tanto el estado de gestión interna de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente del SDI.
 - **Nombre del archivo SDI<!-- Nome file SdI -->**: el nombre del archivo que se genera cuando el documento<!-- documento --> avanza al estado GENERADA; en el formato original o posteriormente a la aplicación de la firma digital, representa el archivo de factura a enviar al SDI.
 - **SDI Id**: el identificador único que el SDI asigna al documento<!-- documento --> en el momento de la recepción.
 - **Fecha del último evento<!-- Data ultimo evento -->**: la fecha de la última modificación de estado del archivo, ya sea manualmente o como consecuencia del avance de la tramitación en el SDI.

En el menú de la cinta se presentan las funciones de gestión del documento<!-- documento --> o documentos<!-- documenti --> seleccionados:

el botón ![](/img/neutral/common/view.png) **Visualizar<!-- Visualizza -->** permite ver los eventos relacionados con el archivo XML generado, descargarlo o modificar su estado:

![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image02.png)

- el botón ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image03.png)   **Descargar adjunto<!-- Scarica allegato -->** realiza la descarga del archivo seleccionado en una carpeta del sistema de archivos elegida.

- el botón ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image04.png) **Abrir documento<!-- Apri documento -->** abre el registro contable<!-- registrazione contabile --> relacionado con el archivo seleccionado.