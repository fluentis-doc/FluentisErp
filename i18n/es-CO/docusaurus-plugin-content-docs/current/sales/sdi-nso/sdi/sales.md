---
title: Gestión del ciclo activo (Gestione del ciclo attivo)
sidebar_position: 6
---

La gestión de un documento de facturación electrónica para el ciclo activo conforme a las normativas vigentes prevé las siguientes fases.

*FACTURACIÓN A LA ADMINISTRACIÓN PÚBLICA (FATTURAZIONE PUBBLICA AMMINISTRAZIONE)*

- generación del documento de venta
- envío a SdI (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS)
- validación de la factura por parte de SdI (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS)
> - la factura es correcta; comienza el procedimiento de entrega; la Administración Pública es identificada correctamente y el SdI inicia los procedimientos de entrega:
> > - en caso de éxito de la transmisión, el SdI envía al remitente una recibo de entrega de la factura electrónica;
> > - si, por causas técnicas no imputables al SdI, la transmisión al destinatario no fuera posible en 5 días, el SdI enviará al remitente una notificación de no entrega; es responsabilidad del SdI contactar al destinatario para que proceda a resolver oportunamente el problema que impide la transmisión y, una vez solucionado el problema, proceder con el envío; si, transcurridos 10 días desde la fecha de transmisión de la notificación de no entrega, el SdI no ha podido entregar la factura electrónica al destinatario, enviará al remitente una certificación definitiva de la transmisión de la factura con imposibilidad de entrega.
> > - el destinatario, dentro del plazo de 15 días desde la primera comunicación enviada al remitente, más precisamente desde la fecha indicada en el recibo de entrega o desde la fecha de transmisión de la notificación de no entrega, puede enviar una notificación de aceptación/rechazo (notificación de resultado del cliente) de la factura.
> > - si dentro del plazo mencionado de 15 días el SdI no recibe ninguna comunicación, enviará una notificación de caducidad de plazos tanto al remitente como al destinatario. Dicha notificación tiene la única función de informar a ambas partes que el SdI considera cerrado el proceso relativo a esa factura. La notificación de caducidad de plazos señala que el Sistema de Intercambio ha concluido la gestión (recepción y entrega) de la factura objeto de la notificación. Por lo tanto, después de dicha notificación, el SdI descartará la factura, si es re-enviada, y cualquier comunicación relacionada.
> - la factura no es correcta, por lo que se envía al emisor una notificación de rechazo y la factura deberá ser reemitida.

*FACTURACIÓN B2B/B2C (FATTURAZIONE B2B/B2C)*

- generación del documento de venta
- envío a SdI (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS)
- validación de la factura por parte de SdI (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS)
> - la factura es correcta: comienza el procedimiento de entrega y se pueden abrir dos escenarios:
> > - el canal de envío para el destinatario es reconocido y la factura es entregada.
> > - el canal de envío para el destinatario no es reconocido, y por lo tanto una copia de la factura se guarda en el área reservada del destinatario, quien será notificado por el emisor de la emisión de la factura.
> > - el destinatario es un sujeto privado, por lo que una copia de la factura se guarda en el área reservada del destinatario, quien será notificado por el emisor de la emisión de la factura.
> - la factura no es correcta, por lo que se envía al emisor una notificación de rechazo y la factura deberá ser reemitida.
> > - el canal de envío para el destinatario no es reconocido, y por lo tanto una copia de la factura se guarda en el área reservada del destinatario, quien será notificado por el emisor de la emisión de la factura.
> > - el destinatario es un sujeto privado, por lo que una copia de la factura se guarda en el área reservada del destinatario, quien será notificado por el emisor de la emisión de la factura.
> - la factura no es correcta, por lo que se envía al emisor una notificación de rechazo y la factura deberá ser reemitida.

En Fluentis es posible generar documentos del ciclo activo de venta y, para los clientes a los que se les ha configurado correctamente la facturación electrónica en los parámetros de registro, preparar el archivo XML para enviar al SdI. A cada fase prevista en la normativa CORRESPONDE un ESTADO del documento en Fluentis.  
Si en Fluentis está correctamente configurada la comunicación con Fluentis Business Hub (en la sección Configuración de Facturación Electrónica para Empresas), también será posible enviar directamente el archivo al SdI y recibir las correspondientes notificaciones; de lo contrario, una vez generado el archivo XML relativo a la factura, será posible descargar el archivo y proceder a su envío a través de otros canales externos a Fluentis.  
Los tipos de documentos para los cuales es posible en Fluentis gestionar la generación del archivo XML y el envío a SdI (previstos también por las normativas vigentes) son:
- Factura de venta
- anticipo/adelanto sobre factura
- anticipo/adelanto sobre recibo
- nota de crédito
- nota de débito
- Recibo

El archivo XML generado llevará internamente la codificación relativa al tipo de documento y, independientemente de la tipología, los métodos operativos de generación del archivo XML y posible envío a SdI son las mismas para todas las tipologías de archivos. Dentro del archivo XML generado:
- para los sujetos identificados/residentes en el territorio del estado, el destinatario del documento es identificado a través del código destinatario o PEC o dirección electrónica.
- para las Administraciones Públicas, el código destinatario está representado por el código IPA identificativo de la Oficina encargada de la recepción de la factura.

Estas configuraciones están insertadas en el registro del CLIENTE de cada sujeto censado en Fluentis.

## Numeración única de los documentos (Numerazione univoca dei documenti)

A fin de lograr una correcta y única numeración de los documentos de venta necesaria para evitar el rechazo de documentos reconocidos por el SDI como ya presentados, se recomienda definir para cada Tipo de documento Factura de venta una numeración única que permita identificar correctamente el documento, como ejemplo, estableciendo un sufijo “/B” después de la numeración. Se recuerda que, para gestionar los numeradores de los documentos de venta, es necesario acceder a la función Tablas > Venta > Numeración de facturas.  
Para establecer el número de la factura (o albarán) con el barrado (ejemplo 1/A, 2/A.... 1/B, 2/B), establecer en la tabla Numeradores, la fórmula 
**number.ToString()+"/B"**.  

Luego en el informe sustituir el campo estándar (ej. Number) con un campo calculado (ej. CalcNumber) donde dentro esté esta expresión:  
**Iif(IsNullOrEmpty([FormattedNumber]), [Number], [FormattedNumber])**.  

ATENCIÓN, funciona solo en el informe, en los formularios se continuará mostrando el número normal sin el barrado, pero en el archivo XML se reportará correctamente el número único.  
En resumen, para gestionar la emisión y transmisión de las facturas electrónicas en Fluentis, los pasos a seguir son:
- Configuración de Registros de contacto
- Configuración de Tablas de gestión
- EMISIÓN Y TRANSMISIÓN DE DOCUMENTOS DE VENTA con las funciones previstas y descritas en el párrafo MODIFICAR Y GESTIONAR LOS ESTADOS DE LOS DOCUMENTOS.

## Emisión y transmisión de documentos de venta 

La gestión de los documentos de venta a transmitir en formato electrónico al Sistema de Intercambio comienza con la creación del documento del ciclo activo de Fluentis en el estado de NO EXAMINADO: menú Inicio > Ventas > Facturas > Nuevo.  
Una vez creado el documento, la generación del documento XML correspondiente y la transmisión de los documentos al SdI (a través de Fluentis Business Hub) se realizan mediante la gestión manual del estado del documento en relación con la facturación electrónica por parte del operador en la sección prevista: hasta llegar al estado “A enviar”, con el que se inserta el documento en una “cola de envío” y, a través de un proceso programado de BizLink, se envían a Fluentis Business Hub para su gestión. Desde este momento, el estado de los documentos será actualizado automáticamente por procesos silenciosos y no será posible ninguna intervención manual por parte del operador, hasta la recepción de la notificación de rechazo, entrega o no entrega. Los estados de los documentos y las notificaciones de entrega siempre serán visibles en el formulario BUSCAR FACTURAS DE VENTA y en la función REGISTRO DE DOCUMENTOS SdI.

## Cómo modificar y gestionar los estados de los documentos

Después de generar el documento de venta, la modificación de los estados de los documentos se puede gestionar individualmente por documento o masivamente a través del procedimiento de CAMBIO DE ESTADO, dentro de 4 funcionalidades:
1) individualmente desde el formulario de gestión de la factura individual (formulario Factura) con la función prevista en el menú Ribbon en la sección de Facturación electrónica.
2) masivamente desde el formulario BUSCAR FACTURAS DE VENTA con la función prevista en el menú Ribbon en la sección de Facturación electrónica después de haber seleccionado los documentos a gestionar.
3) individualmente desde la función REGISTRO DE DOCUMENTOS SdI con la función prevista en el menú Ribbon.
4) masivamente desde la función de gestión del Estado prevista en el menú Ribbon de la Aplicación BizLink – Documentos SDI – DOCUMENTOS DE VENTA SALIENTES de Bizlink, después de haber seleccionado los documentos a gestionar.  
El monitoreo de los diversos estados de los documentos y su gestión es posible en cualquier momento accediendo a la vista de BÚSQUEDA, accesible desde la opción de menú Venta> Facturas> Facturas; o bien, desde la Aplicación BizLink, accediendo a la opción Documentos SDI > DOCUMENTOS DE VENTA SALIENTES.

## Búsqueda de facturas de venta (Ricerca fatture di vendita)

La vista de búsqueda “Facturas de venta” accesible desde la opción de menú Inicio > Venta > Facturas > Facturas, acoge la información relativa a los estados y la gestión de los documentos enviados a través de Fluentis al Fluentis Business Hub y las respectivas notificaciones de estado.  
Las columnas desde las cuales es posible monitorear el estado del documento, tanto cuando aún está en gestión por el operador como cuando ha sido enviado y, por lo tanto, gestionado por Fluentis Business Hub son:
- *stato sdi*: acoge la descripción del estado del documento, reportando tanto el estado de gestión interno de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente del SdI (ver párrafo ESTADOS DE LOS DOCUMENTOS).
- *nome file sdi*: el nombre del archivo que se crea en el momento en que el documento avanza al estado GENERADO; en el formato original o posteriormente a la implementación de la firma digital, representa el archivo de factura a enviar al SdI (Nombre del archivo).
- *Sdi Id*: el identificador único que el SdI asigna al documento en el momento de la recepción (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).
- *Fecha de recepción Sdi (Data ricezione Sdi)*: la fecha en que el sistema de intercambio ha adquirido el documento enviado. Esta información se obtiene de la notificación de recepción que el SdI emite frente a la recepción del envío y antes de proceder con los controles formales del archivo (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).
- *Fecha de cierre (Data chiusura)*: la fecha de cierre del flujo de gestión (ej. documento Entregado) (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).
- *data ultimo evento*: la fecha del último cambio de estado ocurrido en el archivo, ya sea manualmente o como efecto del avance del procesamiento en el SdI.

Los campos relativos a la gestión del documento electrónico también son utilizables como filtros para buscar documentos desde el expander Estado de la Factura Electrónica en el panel de filtro.  
Desde la vista de búsqueda de Facturas de venta es posible, seleccionando una sola factura o facturas con el mismo Estado SdI, modificar su estado de procesamiento utilizando la función Estado de la sección de Facturación electrónica del menú ribbon.  
En caso de seleccionar un único documento de factura y haciendo clic con el botón derecho del mouse sobre la columna correspondiente al nombre del archivo XML y seleccionando la acción Abrir Formulario o seleccionando la acción Registro de documentos SdI en la sección de Facturación electrónica del menú ribbon, se accede al Registro de documentos SdI donde es posible ver el documento XML generado y la historia de la gestión del documento de venta.

## Registro de documentos SDI (Registro dei documenti SDI)

La función Registro de documentos SdI permite visualizar para los documentos de facturas de venta gestionados el estado de procesamiento del documento y ver:
- el archivo XML generado
- el archivo PDF adjunto (si fue solicitado como adjunto al documento XML)
- las notificaciones enviadas por Fluentis Business Hub y adquiridas directamente del SdI (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).

En la gestión también es posible monitorear los últimos eventos relacionados con la gestión del archivo y el historial de las acciones realizadas.  
El Registro de documentos SdI es accesible:
- desde la vista de Búsqueda de facturas de venta seleccionando un archivo de factura.
- desde la vista de gestión del documento individual Factura.
- desde la función opción Documentos SDI > Documentos de venta salientes.

La vista Registro de documentos SdI se compone de una sección de encabezado resumido y dos paneles:
- Adjuntos (Allegati)
- Registro de documentos SdI (Registro dei documenti SdI)

En la sección de Encabezado se resumen los datos del documento de factura:
- Estado de la factura electrónica (Stato della fattura elettronica): el estado del documento relativo a su envío al SdI a través de Fluentis Business Hub (para detalles sobre los tipos de estados de documentos ver párrafo ESTADOS DE LOS DOCUMENTOS).
- Tipo de factura (Tipo fattura): el tipo de documento enviado – el código Fluentis.
- Fecha, Número, Cliente: la fecha, el número del documento y el cliente titular.
- Nombre de archivo SdI: el nombre del archivo XML que se crea en el momento en que el documento avanza al estado GENERADO; en el formato original o posteriormente a la implementación de la firma digital, representa el archivo de factura a enviar al SdI (para detalles sobre la compilación del nombre del archivo ver el Párrafo Nombre del archivo).
- SdI Id: el identificador único asignado por el SdI al archivo de factura en el momento en que se recibe el archivo. Este identificador será utilizado por el SdI para todas las notificaciones posteriores enviadas al remitente (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).
- Fecha de recepción SdI: la fecha en que el SdI recibe el archivo de factura y envía la Notificación de recepción al remitente (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).
- Fecha de recepción del cliente: coincide con la fecha de entrega del documento al cliente o la fecha de “puesta a disposición” del documento en el área reservada del cliente. Esta última casuística se refiere a los envíos en los que el SdI no puede identificar correctamente al cliente/cesionario (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).
- Fecha del último evento: se refiere a la última acción realizada por el operador o a la última notificación recibida del SdI durante el proceso de gestión del documento.

## Panel ADJUNTOS (Pannello ALLEGATI)

En el panel ADJUNTOS se presentan todos los documentos relacionados con la gestión electrónica de la factura, desde el archivo XML del documento hasta la última notificación recibida del SdI. Haciendo clic en el documento correspondiente en la tabla de documentos, este se visualizará en la parte derecha de la vista con un estilo que interpreta el archivo XML de factura o de notificación y lo visualiza en un formato simplificado para el usuario, como por ejemplo para el archivo xml:  
La tabla de documentos en la sección izquierda de la vista presenta para cada archivo la siguiente información:
- *Fecha (Data)*: la fecha de adquisición del adjunto.
- *Tipo del contenido del archivo (Tipo del contenuto del file)*: un identificador técnico relativo a la hoja de estilo adoptada para visualizar el archivo xml.
- *Nombre y Descripción (Nome e Descrizione)*: la descripción del archivo xml visualizado.

Si en el archivo XML generado se han previsto adjuntos, en la parte inferior del archivo XML visualizado aparece una tabla con la lista de los adjuntos al documento. Haciendo clic en el nombre del archivo adjunto, se puede descargar el archivo y guardarlo para usos externos a la gestión. Los archivos adjuntos a los estados del documento pueden descargarse desde la función Descargar Adjunto presente en el menú ribbon. 

## Panel REGISTRO DE DOCUMENTOS SDI (Pannello REGISTRO DEI DOCUMENTI SDI)

El panel Registro de documentos SdI representa el histórico de todas las fases de gestión del documento electrónico, desde el momento de su generación en formato XML hasta el momento de la entrega o el eventual rechazo.  
En la tabla de eventos, para cada evento se representa la “Transición” relativa, es decir, el cambio de estado ocurrido en el documento y, donde se previó intervención manual, el nombre y la fecha del operador que realizó la transición. El estado del documento relacionado con la generación del archivo XML y los estados adquiridos por SdI para los cuales está prevista una notificación, también tienen el archivo XML correspondiente.  
Haciendo clic en el evento relacionado con un archivo XML, se activa la visualización del archivo, utilizando una hoja de estilo que permite visualizar el archivo XML en un formato simplificado para el usuario, como por ejemplo para un archivo de notificación de recepción. La función Descargar contenido del Registro permite la descarga del archivo seleccionado y visualizado.

## Documentos de venta salientes (Documenti di vendita in uscita)

En la aplicación BizLink es posible acceder a la opción de menú Documentos SDI – Documentos de venta salientes y visionar el estado general de todos los documentos de venta preparados por el flujo activo, gestionar el estado, ver el historial de avances de los estados. El diálogo *Documentos de venta salientes* está dividido en dos secciones, una de encabezado que contiene los campos de filtro utilizables para filtrar los documentos y una tabla de resultados de la búsqueda realizada.

Los valores presentados en la tabla son:
- *stato sdi*: el estado del documento relativo a su envío al SdI a través de Fluentis Business Hub (para detalles sobre los tipos de estados de documentos ver el párrafo ESTADOS DE LOS DOCUMENTOS).
- *tipo*: el código de referencia del tipo de documento de venta.
- *Fecha, Número, Cliente (Data, Numero, Cliente)*: la fecha, el número del documento y el cliente titular.
- *data di ricevimento del cliente*: la fecha de entrega del documento al cliente o la fecha de “puesta a disposición” del documento en el área reservada del cliente. Esta última casuística se refiere a los envíos en los que el SdI no puede identificar correctamente al cliente/cesionario (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).
- *nome file sdi*: el nombre del archivo XML que se crea en el momento en que el documento avanza al estado GENERADO; en el formato original o posteriormente a la implementación de la firma digital, representa el archivo de factura a enviar al SdI (para detalles sobre la compilación del nombre del archivo ver el Párrafo Nombre del archivo).
- *data ultimo evento*: se refiere a la última acción realizada por el operador o a la última notificación recibida del SdI durante el proceso de gestión del documento.

Haciendo clic en el expander de una factura se abre el detalle de las transiciones relativas a los estados del documento y se visualizan las transiciones individuales ocurridas en la gestión del documento con la respectiva fecha de ejecución y el nombre del eventual archivo generado por el cambio de estado.

Los documentos presentados en la tabla Registro de documentos SdI son todos aquellos creados por el flujo activo de gestión de los documentos de Factura, independientemente de su estado; la acción doble clic en correspondencia de una fila de factura abre el panel Registro de documentos SdI en el cual es posible ver los documentos creados durante la gestión del archivo de factura y el historial de transiciones.

En la tabla Registro de documentos SdI, seleccionando un documento de factura o múltiples documentos de factura en el mismo estado, es posible gestionar el estado de trabajo del documento utilizando la combo Estado en el menú ribbon y seleccionando el nuevo estado del documento.  
Seleccionando una factura de la tabla, con la función Abrir documento del menú ribbon, se abre el documento de factura.