---
title: Gestión del ciclo activo
sidebar_position: 6
ai_generated: true
---

La gestión de un documento de facturación electrónica para el ciclo activo<!-- ciclo attivo --> conforme a la normativa vigente 
prevé las siguientes fases.      

*FACTURACIÓN ADMINISTRACIONES PÚBLICAS*<!-- FATTURAZIONE PUBBLICA AMMINISTRAZIONE -->            

- generación del documento de venta
- envío al SdI (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
- validación de la factura por parte de SdI (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
> - la factura es correcta; inicia el procedimiento de entrega; la Administración Pública se identifica correctamente y el SdI inicia los procedimientos de entrega:
> > - en caso de resultado positivo de la transmisión, el SdI envía al sujeto transmisor 
un recibo de entrega de la factura electrónica;
> > - en caso de que, por causas técnicas no imputables al SdI, la transmisión al 
receptor no sea posible por 5 días, el SdI envía al transmisor 
una notificación de falta de entrega; queda a cargo del SdI la tarea de 
contactar al destinatario para que resuelva el inconveniente lo antes posible, y, solucionado el problema, proceder con 
el envío; si, pasados 10 días desde la fecha de transmisión de la notificación de 
falta de entrega, el SdI no logra entregar la factura electrónica al 
receptor, envía al transmisor un definitivo certificado de 
transmisión realizada de la factura con imposibilidad de entrega.
> > - el receptor, dentro del término de 15 días desde la primera comunicación 
enviada al transmisor, más precisamente desde la fecha indicada en el 
recibo de entrega o desde la fecha de transmisión de la notificación de falta de 
entrega, puede enviar una notificación de aceptación/rechazo (notificación de resultado 
del cliente) de la factura.
> > - si dentro del plazo de 15 días el SdI no recibe ninguna 
comunicación, el SdI envía notificación de expiración de plazo tanto al transmisor 
como al receptor. Dicha notificación solo tiene la función de 
comunicar a ambas partes que el SdI considera cerrado el proceso relativo a 
esa factura. La notificación de expiración de plazo señala que el Sistema de 
Intercambio ha concluido regularmente la gestión (recepción y entrega) 
de la factura objeto de la notificación. Por tanto, tras dicha notificación, el SdI rechazará la 
factura, si es reenviada, así como cualquier comunicación relacionada con ella.
> - la factura no es correcta y se envía al emisor una notificación de rechazo y la factura 
deberá ser reemitida

*FACTURACIÓN B2B/B2C*<!-- FATTURAZIONE B2B/B2C -->

- generación del documento de venta
- envío al SdI (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
- validación de la factura por parte de SdI (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
> - la factura es correcta: comienza el procedimiento de entrega y pueden darse dos escenarios:
> > - el canal de envío para el destinatario es reconocido y la factura es entregada
> > - el canal de envío para el destinatario no es reconocido y por lo tanto una copia de la factura se guarda en el área reservada del destinatario, que será avisado por el emisor de la emisión de la factura
> > - el destinatario es un sujeto privado por lo que una copia de la factura se guarda en el área 
reservada del destinatario quien será avisado por el emisor de la emisión de la factura
> - la factura no es correcta y se envía al emisor una notificación de rechazo y la factura deberá ser reemitida
> > - el canal de envío para el destinatario no es reconocido y por lo tanto una copia de la factura se guarda en el área reservada del destinatario, que será avisado por el emisor de la emisión de la factura
> > - el destinatario es un sujeto privado por lo que una copia de la factura se guarda en el área reservada del destinatario quien será avisado por el emisor de la emisión de la factura
> - la factura no es correcta y se envía al emisor una notificación de rechazo y la factura deberá ser reemitida

En Fluentis es posible generar documentos del ciclo activo<!-- ciclo attivo --> de venta y, para los clientes que tengan correctamente configurada la facturación electrónica en los parámetros del registro maestro<!-- anagrafici -->, preparar el archivo XML para enviar al SdI. A cada fase prevista a nivel normativo CORRESPONDE un ESTADO del documento en Fluentis.         
En caso de que en Fluentis esté debidamente configurada la comunicación con Fluentis Business Hub (en la sección Configuración de Facturación Electrónica para la Sociedad), será posible además enviar directamente el archivo al SdI y recibir las notificaciones correspondientes; de lo contrario, una vez generado el archivo XML relativo a la factura<!-- fattura -->, será posible descargar el archivo y proceder a su envío por otros canales externos a Fluentis.            
Los tipos de documento para los cuales es posible en Fluentis gestionar la generación del archivo XML y su envío al SdI (también previstos por la normativa vigente), son:
- Factura de venta<!-- Fattura di vendita -->
- anticipo/prepago sobre factura<!-- acconto/anticipo su fattura -->
- anticipo/prepago sobre honorarios<!-- acconto/anticipo su parcella -->
- nota de crédito<!-- nota di credito -->
- nota de débito<!-- nota di debito -->
- Honorarios<!-- Parcella -->         

El archivo XML generado contendrá en su interior la codificación relativa al tipo de documento y, independientemente de la tipología, los procedimientos operativos para la generación del archivo XML y el eventual envío al SdI son los mismos para todas las tipologías de archivo. Dentro del archivo XML generado:
- para sujetos identificados/residentes en el territorio nacional, el destinatario del documento es identificado mediante el código destinatario o PEC o dirección telemática
- para las Administraciones Públicas, el código destinatario está representado por el código IPA identificativo de la Oficina encargada de recibir la factura.            

Estos parámetros se insertan en el registro CLIENTE de cada sujeto censado en Fluentis.

## Numeración única de los documentos<!-- Numerazione univoca dei documenti -->

Con el fin de disponer de una numeración correcta y única de los documentos de venta<!-- documenti di vendita --> necesaria para evitar el rechazo de documentos reconocidos por el SDI como ya presentados, se recomienda definir para cada Tipo de Documento Factura de venta<!-- Fattura di vendita --> una numeración única que permita identificar correctamente el documento, por ejemplo, configurando un sufijo “/B” después de la numeración. Se recuerda que, para gestionar las numeraciones de los documentos de venta<!-- documenti di vendita -->, es necesario acceder a la función Tablas > Venta > Numeración de facturas.           
Para configurar el número de factura (o albarán) con barra (ejemplo 1/A, 2/A.... 1/B, 2/B), configure en la tabla Numeradores, la fórmula 
**number.ToString()+"/B"**            

Después, en el informe, sustituya el campo estándar (por ejemplo, Number) con un campo calculado (por ejemplo, CalcNumber) donde dentro esté esta expresión:         
**Iif(IsNullOrEmpty([FormattedNumber]), [Number], [FormattedNumber])**          

ATENCIÓN: funciona solo en el informe, en los formularios se seguirá visualizando el número normal sin la 
barra, pero en el archivo XML aparecerá correctamente el número único.            
En resumen, para gestionar la emisión y el envío de las facturas electrónicas en Fluentis, los pasos a seguir son:
- Configuración de registros de contactos<!-- Anagrafiche contatti -->
- Configuración de tablas de gestión
- EMISIÓN Y ENVÍO DE DOCUMENTOS DE VENTA<!-- EMISSIONE E TRASMISSIONE DOCUMENTI DI VENDITA --> con las funciones previstas y descritas en el apartado MODIFICAR Y GESTIONAR LOS ESTADOS DE LOS DOCUMENTOS<!-- MODIFICARE E GESTIRE GLI STATI DEI DOCUMENTI -->

## Emisión y transmisión de documentos de venta<!-- Emissione e trasmissione documenti di vendita -->

La gestión de los documentos de venta<!-- documenti di vendita --> a transmitir en formato electrónico al Sistema de Intercambio inicia 
con la creación del documento desde el ciclo activo<!-- ciclo attivo --> de Fluentis en estado NO REVISADO: menú Inicio > 
Ventas > Facturas > Nuevo.
Una vez creado el documento, la generación del correspondiente documento XML y la transmisión de los 
documentos al SdI (mediante Fluentis Business Hub) sucede a través de la gestión manual del estado del 
documento respecto a la Facturación electrónica por parte del usuario en la sección correspondiente: 
hasta llegar al estado “A enviar”, con el cual el documento se ingresa en una “cola de envío” 
y, mediante un proceso programado de BizLink, se envía a Fluentis Business Hub para la gestión. Desde este 
momento, el estado de los documentos se actualizará automáticamente mediante procesos automáticos y no 
será posible ninguna intervención manual por parte del usuario, hasta la recepción de notificación de rechazo, 
de entrega o de falta de entrega. Los estados de los documentos y notificaciones de entrega estarán siempre visibles en la 
pantalla de BÚSQUEDA DE FACTURAS DE VENTA<!-- RICERCA FATTURE DI VENDITA --> y en la función REGISTRO DE DOCUMENTOS SdI<!-- REGISTRO DEI DOCUMENTI SdI -->.

## Cómo modificar y gestionar los estados de los documentos<!-- Come modificare e gestire gli stati dei documenti -->

Después de haber generado el documento de venta<!-- documento di vendita -->, la modificación de los estados de los documentos puede gestionarse individualmente por documento o masivamente a través del procedimiento de CAMBIO DE ESTADO, dentro de 4 funcionalidades:
1) individualmente desde el formulario de gestión de la factura individual (formulario Factura) con la función prevista en el Ribbon menu en la sección Facturación electrónica
2) masivamente desde la pantalla de BÚSQUEDA DE FACTURAS DE VENTA<!-- RICERCA FATTURE DI VENDITA --> con la función prevista en el Ribbon menu en la sección Facturación electrónica luego de seleccionar los documentos a gestionar
3) individualmente desde la función REGISTRO DE DOCUMENTOS SdI<!-- REGISTRO DEI DOCUMENTI SdI --> con la función prevista en el Ribbon menu 
4) masivamente desde la función de gestión de Estado prevista en el Ribbon menu de la Aplicación BizLink – Documentos SDI – DOCUMENTOS DE VENTA SALIENTES<!-- DOCUMENTI DI VENDITA IN USCITA --> desde Bizlink, luego de seleccionar los documentos a gestionar        
El monitoreo de los distintos estados de los documentos y su gestión es posible en cualquier momento accediendo a la pantalla de BÚSQUEDA, accesible desde el menú Venta > Facturas > Facturas;
o desde la Aplicación BizLink, accediendo a la opción Documentos SDI > DOCUMENTOS DE VENTA SALIENTES.

## Búsqueda de facturas de venta<!-- Ricerca fatture di vendita -->

La pantalla de búsqueda “Facturas de venta<!-- Fatture di vendita -->”, accesible desde el menú Inicio > Venta > Facturas > Facturas, 
contiene la información relativa a los estados y gestión de los documentos enviados a través de Fluentis al Fluentis Business Hub y las notificaciones de estado correspondientes.           
Las columnas desde las que es posible monitorear el estado del documento, tanto cuando aún está en gestión por parte del usuario como cuando ya ha sido enviado y gestionado por Fluentis Business Hub, son:
- *Estado SdI*: contiene la descripción del estado del documento, mostrando tanto el estado de gestión interno de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente del SdI (ver parágrafo ESTADOS DE LOS DOCUMENTOS<!-- STATI DEI DOCUMENTI -->).
- *Nombre archivo SdI*: el nombre del archivo que se crea en el momento en que el documento avanza al estado GENERADO; en formato original o posteriormente a la firma digital, representa el archivo de factura a enviar a SdI (Nombre del archivo).
- *Sdi Id*: el identificador único que el SdI asigna al documento en el momento de la recepción (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
- *Fecha de recepción SdI*: la fecha en la que el sistema de intercambio ha adquirido el documento enviado. Esa 
información se obtiene de la notificación de recepción que el SdI entrega tras recibir el envío y antes de proceder a los controles formales del archivo (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
- *Fecha de cierre*: la fecha de cierre del flujo de gestión (ej. documento entregado) (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
- *Fecha último evento*: la fecha del último cambio de estado ocurrido sobre el archivo, ya sea manualmente o como resultado del avance en SdI            

Los campos relativos a la gestión del documento electrónico también pueden usarse como filtros de búsqueda 
de documentos desde el expander Estado de la Factura Electrónica en el panel de filtro.
Desde la pantalla de búsqueda de Facturas de venta<!-- Fatture di vendita --> es posible, seleccionando una sola factura o facturas con el mismo Estado SdI, modificar su estado de procesamiento usando la función Estado en la sección Facturación electrónica del ribbon menu.
Si se selecciona un único documento factura y se hace clic con el botón derecho del ratón en la columna correspondiente al nombre del archivo XML y se selecciona la acción Abrir Formulario u 
opción Registro de documentos SdI en la sección Facturación electrónica del 
ribbon menu se accede al Registro de documentos SdI<!-- Registro dei documenti SdI --> donde es posible visualizar el documento XML generado y el historial de gestión del documento de venta<!-- documento di vendita -->.

## Registro de documentos SDI<!-- Registro dei documenti SDI -->

La función Registro de documentos SdI permite visualizar para las facturas de venta<!-- fatture di vendita --> gestionadas el estado de procesamiento del documento y ver 
- el archivo XML generado
- el archivo PDF adjunto (si se requiere como adjunto al archivo XML)
- las notificaciones enviadas por Fluentis Business Hub y adquiridas directamente del SdI (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)        

En la gestión también es posible monitorear los últimos eventos relativos a la gestión del archivo y el histórico de las acciones realizadas. 
El Registro de documentos SdI<!-- Registro dei documenti SdI --> es accesible:
- desde la pantalla de Búsqueda de facturas de venta<!-- Ricerca fatture di vendita --> seleccionando un archivo de factura<!-- file fattura -->
- desde la pantalla de gestión de un solo documento Factura<!-- documento Fattura -->
- desde la función Documentos SDI > Documentos de venta salientes<!-- Documenti vendita in uscita -->           

La pantalla Registro de documentos SdI<!-- Registro dei documenti SdI --> se compone de una sección de cabecera resumen y dos paneles:
- Adjuntos<!-- Allegati -->
- Registro de documentos SdI<!-- Registro dei documenti SdI -->             

En la sección de Cabecera se resumen los datos del documento de factura<!-- documento di fattura -->:
- Estado de la factura electrónica: el estado del documento relativo a su envío al SdI a través de Fluentis Business Hub (para detalles sobre los tipos de estados ver el apartado ESTADOS DE LOS DOCUMENTOS<!-- STATI DEI DOCUMENTI -->)
- Tipo de factura: el tipo de documento enviado – el código Fluentis 
- Fecha, Número, Cliente: la fecha, el número del documento y el cliente titular
- Nombre archivo SdI: el nombre del archivo XML que se crea cuando el documento avanza al estado GENERADO; en formato original o posteriormente a la firma digital, representa el archivo de factura para enviar al SdI (para detalles sobre el nombre del archivo ver el apartado Nombre del archivo).
- SdI Id: el identificador único asignado por el SdI al archivo de factura cuando es recibido. Este identificador será utilizado por el SdI para todas las notificaciones posteriores enviadas al transmisor (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
- Fecha de recepción SdI: la fecha en que el SdI recibe el archivo de factura y envía la Notificación de recepción al transmisor (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
- Fecha de recepción del cliente: coincide con la fecha de entrega del documento al cliente o la fecha de “puesta a disposición” del documento en el área reservada del cliente. Este último caso se refiere a envíos en los que el SdI no logra identificar correctamente al cliente/receptor (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
- Fecha último evento: se refiere a la última acción realizada por el operador o a la última notificación recibida del SdI durante el proceso de gestión del documento

## Panel ADJUNTOS<!-- Pannello ALLEGATI --> 

En el panel ADJUNTOS<!-- ALLEGATI --> se presentan todos los documentos relativos a la gestión electrónica de la factura, desde el archivo XML del documento hasta la última notificación recibida del SdI. Al hacer clic en el documento en la cuadrícula, el documento se muestra en la parte derecha de la pantalla 
con una hoja de estilo que interpreta el archivo XML de factura o notificación y lo visualiza en un formato simplificado para el usuario, por ejemplo para el archivo xml:
La cuadrícula en la parte izquierda de la pantalla presenta para cada archivo la siguiente información:
- *Fecha*: la fecha de adquisición del adjunto
- *Tipo de contenido del archivo*: un identificador técnico relativo a la hoja de estilo adoptada para visualizar el archivo XML
- *Nombre y Descripción*: la descripción del archivo XML visualizado        

Si en el archivo XML generado se han previsto adjuntos, en la parte inferior del archivo XML visualizado se presenta una cuadrícula con la lista de los adjuntos al documento. Haciendo clic en el nombre del archivo adjunto es posible descargar el archivo y guardarlo para usos externos a la gestión. Los archivos adjuntos a los estados del documento pueden descargarse usando la función Descargar adjunto presente en el ribbon menu.

## Panel REGISTRO DE DOCUMENTOS SDI<!-- Pannello REGISTRO DEI DOCUMENTI SDI --> 

El panel Registro de documentos SdI<!-- Registro dei documenti SdI --> representa el historial de todas las fases de gestión del documento electrónico, desde el momento de su generación en formato XML hasta el momento de la entrega o eventual rechazo.
En la cuadrícula de eventos, para cada evento se muestra la “Transición” correspondiente, es decir, el cambio de estado producido en el documento y, cuando corresponda una intervención manual, el nombre y la fecha del operador que realizó la transición. El estado del documento relacionado con la generación del archivo XML y los estados adquiridos por 
SdI para los cuales se prevé una notificación, tienen también vinculado el archivo XML correspondiente.         
Al hacer clic en el evento vinculado a un archivo XML, se activa la visualización del archivo, usando una hoja de estilo que permite mostrar el archivo XML en un formato simplificado, como por ejemplo para un archivo de notificación de recepción. La función Descargar contenido del Registro permite descargar el archivo seleccionado y visualizado. 

## Documentos de venta salientes<!-- Documenti di vendita in uscita -->

En la aplicación BizLink es posible acceder a la opción de menú Documentos SDI – Documentos de venta salientes<!-- Documenti vendita in uscita --> y ver el estado general de todos los documentos de venta<!-- documenti di vendita --> preparados desde el flujo activo, gestionar el estado y ver el historial de cambios de estado. El diálogo *Documentos de venta salientes* se divide en dos secciones, una de cabecera que contiene los campos de filtro 
utilizables para filtrar los documentos y una cuadrícula con el resultado de la búsqueda realizada.         

Los valores presentados en la cuadrícula son:
- *Estado SdI*: el estado del documento relativo a su envío al SdI a través de Fluentis Business Hub (para detalles sobre los tipos de estados ver el apartado ESTADOS DE LOS DOCUMENTOS<!-- STATI DEI DOCUMENTI -->)
- *Tipo*: el código de referencia del tipo de documento de venta<!-- documento di vendita -->
- *Fecha, Número, Cliente*: la fecha, el número del documento y el cliente titular
- *Fecha de recepción del cliente*: la fecha de entrega del documento al cliente o la fecha de “puesta a disposición” del documento en el área reservada del cliente. Este último caso se refiere a envíos para los que el SdI no logra identificar correctamente al cliente/receptor (NO GESTIONADO PARA QUIEN NO TIENE CONTRATO DE FE CON FLUENTIS)
- *Nombre archivo SdI*: el nombre del archivo XML que se crea cuando el documento avanza al estado GENERADO; en formato original o posteriormente firmado digitalmente, representa el archivo de factura para enviar al SdI (para detalles sobre el nombre del archivo ver el apartado Nombre del archivo).
- *Fecha último evento*: se refiere a la última acción realizada por el operador o la última notificación recibida del SdI durante el proceso de gestión del documento.           

Haciendo clic en el expander de una factura se abre el detalle de las transiciones relativas a los estados del documento y se muestran las transiciones individuales ocurridas en la gestión del documento con la fecha de ejecución y el nombre de cualquier archivo generado por el cambio de estado.

Los documentos presentados en la cuadrícula Registro de documentos SdI<!-- Registro dei documenti SdI --> son todos los creados por el flujo activo de gestión de documentos Factura<!-- documenti Fattura -->, independientemente del estado; haciendo doble clic en una fila de factura se abre el panel Registro de documentos SdI<!-- Registro documenti SdI --> donde se pueden ver los documentos creados 
durante la gestión del archivo de factura y el historial de transiciones.         

En la cuadrícula Registro de documentos SdI<!-- Registro documenti SdI -->, seleccionando una factura o más facturas en el mismo estado, es posible gestionar el estado de procesamiento del documento usando la lista de Estado en el ribbon menu y seleccionando el nuevo estado del documento.
Seleccionando una factura de la cuadrícula, con la función Abrir documento del ribbon menu, se abre el documento factura<!-- documento fattura -->.