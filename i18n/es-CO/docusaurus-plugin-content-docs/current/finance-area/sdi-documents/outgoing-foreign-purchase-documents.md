---
title: documenti esteri in uscita
sidebar_position: 5
---
:::tip[Nota (Nota)]
**Cumplimiento superado (Adempimento superato)** en cuanto a las compras del envío actual al SDI de [**autofattura**](/docs/finance-area/e-invoice/auto-invoice/auto-invoice-generation).  
En cuanto a las ventas, actualmente se procede al envío directo de las facturas (ver abajo)  
:::

La normativa preveía enviar a la Agencia de Hacienda también los datos relacionados con las operaciones de venta de bienes/prestaciones de servicios REALIZADAS y RECIBIDAS por sujetos NO identificados/no residentes en el territorio del Estado.

- Para los documentos **emessi** es posible utilizar el mismo formato previsto para las facturas electrónicas italianas; alternativamente, pueden enviarse con el formato previsto para documentos extranjeros de compra según el siguiente punto.

- Para el envío al SDI de los documentos de compra de proveedores extranjeros está previsto un **[formato específico (tracciato apposito)](/docs/finance-area/declarations/declarations/electronic-invoice-for-foreign)**.

La firma digital es obligatoria para ambos tipos de archivos.

El envío al SDI de estos archivos se gestiona en Fluentis a través de las operaciones de cambio de estado de los documentos.

El documento XML se transmite al SDI, que lo controla y lo adquiere, y devuelve las notificaciones relativas a cualquier rechazo debido a la falta de conformidad del archivo o de la adquisición realizada.

**Desde este formulario es posible gestionar individualmente cada documento, o masivamente para múltiples documentos al mismo tiempo, el cambio de estados para el envío al SDI siguiendo el mismo formato de las facturas italianas.**

En el Formulario de Documentos de compras exteriores de salida se visualizan todos los archivos producidos por las Registraciones contables y relacionados con este tipo de ocurrencia. El formulario se divide en una sección superior en la cual se exponen los filtros de selección de los archivos gestionados, entre los cuales:

 - Desde fecha/Hasta fecha de recepción (Da data/ A data di ricevimento):  
 - Desde fecha/Hasta fecha de recepción del cliente (Da data/A data di ricezione cliente):  

En la cuadrícula de resultados se muestran los datos relacionados con los archivos gestionados o por gestionar:

 - **stato sdi**: contiene la descripción del estado del documento, reportando tanto el estado de gestión interno de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente del SDI.  
 - **nome file sdi**: el nombre del archivo que se crea en el momento en que el documento avanza al estado GENERADO; en el formato original o luego de la aplicación de la firma digital, representa el archivo de factura a enviar al SDI.  
 - **sdi id**: el identificador único que el SDI asigna al documento en el momento de su recepción.  
 - **data ultimo evento**: la fecha del último cambio de estado ocurrido en el archivo, ya sea manualmente o como resultado del avance del procesamiento en el SDI.  

En el menú de cinta se presentan las funciones de gestión del documento o de los documentos seleccionados:

El botón ![](/img/neutral/common/view.png)  **visualizza** permite visualizar el  donde es posible revisar los eventos relacionados con el archivo XML generado, descargarlo o modificar su estado:

![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image02.png)  

- El botón ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image03.png) **scarica allegato** realiza la descarga del archivo seleccionado en una carpeta del sistema de archivos elegida.

- El botón ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image04.png) **apri documento** abre la registración contable relativa al archivo seleccionado.