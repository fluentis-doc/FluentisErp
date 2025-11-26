---
title: Qué es la facturación electrónica
sidebar_position: 1
ai_generated: true
---

La facturación electrónica es un sistema digital de emisión y transmisión de facturas que reemplaza el soporte en papel por nuevos métodos digitales de comunicación.
Con la facturación electrónica, las facturas y las notas de modificación emitidas deben ser generadas en un nuevo formato digital "XML eXtensible Markup Language", un lenguaje que permite a los medios informáticos definir y controlar, mediante procedimientos estandarizados, el significado de los elementos contenidos, verificando así la información de acuerdo con los controles previstos por la ley.
El sistema jurídico italiano introdujo, con la ley financiera de 2008, la gestión de la facturación electrónica conforme a la normativa comunitaria y, desde el 6/06/2014, hizo obligatoria la factura en formato electrónico para la emisión de documentos hacia la Administración Pública.
La "factura electrónica" prevista por la normativa italiana es un archivo en formato XML (eXtensible Markup Language) conforme a las especificaciones técnicas, según el Anexo A de la disposición del Director de la Agencia Tributaria, protocolo n. 89757/2018 del 30/04/2018. El contenido de cualquier factura está regulado, en general, por los artículos 21 y 21-bis del D.P.R. n. 633/1972.
El archivo de factura generado con el nuevo estándar XML contiene una representación diferente de los datos obligatorios requeridos por la normativa sobre el IVA, integrados eventualmente con información adicional o elementos que puedan facilitar la gestión y contabilización de las mismas.
El art. 1, c. 917, letras a y b de la Ley n. 205 del 27 de diciembre de 2017 (Ley de Presupuesto 2018) introdujo, a partir del 1 de enero de 2019, la obligación de facturación electrónica para las transferencias de bienes y la prestación de servicios realizadas entre sujetos residentes, establecidos o identificados en el territorio nacional usando las mismas soluciones informáticas ya adoptadas para la emisión de la factura electrónica hacia la Administración Pública.
Las facturas electrónicas ya emitidas a favor de la Administración Pública y, posteriormente, también aquellas emitidas para B2B y B2C, son canalizadas y enviadas al "Sistema de Intercambio" (SdI), es decir, un sistema informático gestionado por la Agencia Tributaria capaz de recibir facturas electrónicas, realizar controles sobre los archivos recibidos y gestionar el intercambio correcto de información con el sujeto transmisor así como reenviar las facturas a los destinatarios.
Las empresas involucradas en el proceso de facturación electrónica lo estarán tanto en la gestión del ciclo ACTIVO, es decir, cuando se emite la factura relativa a productos vendidos o servicios prestados, como en el ciclo PASIVO, es decir, la recepción de documentos emitidos por sus propios proveedores.

## Flujo operativo en Fluentis

Con respecto a la gestión de la facturación electrónica y de los requisitos relacionados, en Fluentis es posible gestionar:
- Emisión de documentos de venta a sujetos residentes/establecidos/identificados en territorio italiano
- Emisión de documentos de venta hacia la Administración Pública
- Adquisición de documentos electrónicos de compra emitidos por proveedores italianos (NO GESTIONADO PARA QUIEN NO HA CONTRATADO EL SERVICIO DE FE CON FLUENTIS)
- Comunicación al SdI de los documentos de compra y venta emitidos por proveedores extranjeros o dirigidos a clientes extranjeros (sujetos NO residentes/establecidos/identificados en el territorio italiano) (ex spesometro)             

La gestión de los flujos prevé la configuración de una conexión en BizLink, dedicada a la comunicación con el servicio Fluentis Business Hub. El servicio tiene como objetivo enviar los documentos al SdI, adquirir del SdI los documentos de facturación relativos al ciclo pasivo (NO GESTIONADO PARA QUIEN NO HA CONTRATADO EL SERVICIO DE FE CON FLUENTIS), y adquirir las notificaciones y mensajes relativos a las diversas fases de envío de las facturas activas.         

El protocolo de comunicación entre Fluentis Business HUB y el SdI (NO GESTIONADO PARA QUIEN NO HA CONTRATADO EL SERVICIO DE FE CON FLUENTIS) es el sistema de cooperación aplicativa basado en el servicio Web Service: 
- La factura, emitida por Fluentis, transita por la conexión BizLink hacia el Fluentis Business Hub 
- El servicio Fluentis Business Hub envía los documentos al SdI 
- Fluentis Digital Hub adquiere del SdI las notificaciones relativas al estado de los documentos y las transfiere al sistema de gestión
- Fluentis Digital Hub recibe las facturas pasivas transferidas por los proveedores de los clientes de Fluentis
- Reparte las facturas entre las distintas configuraciones de los clientes        

En Fluentis, será posible entonces:
- Generar facturas de venta en formato electrónico conforme al esquema previsto para la facturación B2B/B2C/PA<!-- B2B/B2C/PA -->
- En caso de que se decida firmar digitalmente los archivos de factura o cuando este paso sea obligatorio por la naturaleza misma de los documentos, gestionar la exportación de los documentos XML a una carpeta externa del sistema de archivos para firmar digitalmente los documentos utilizando un software de firma proporcionado por terceras partes y posteriormente reimportar el archivo firmado (.xml y .p7m)
- Visualizar el contenido del archivo XML y eventualmente adjuntar al archivo XML también el archivo PDF (formato estándar) del documento de factura
- Enviar los documentos al SdI (NO GESTIONADO PARA QUIEN NO HA CONTRATADO EL SERVICIO DE FE CON FLUENTIS)
- Monitorear el estado de los documentos enviados a través de cuadrículas de búsqueda masiva, campos de visualización de estado de los documentos en los documentos individuales y paneles para la visualización de los logs transmitidos por el SdI
- Adquirir facturas pasivas enviadas por los proveedores (NO GESTIONADO PARA QUIEN NO HA CONTRATADO EL SERVICIO DE FE CON FLUENTIS)          

La gestión de la transmisión y adquisición de documentos electrónicos se realiza a través del procedimiento de CAMBIO DE ESTADO de los documentos.

Fluentis permite, a través de Fluentis Business Hub, la transferencia al SdI tanto de archivos de factura firmados como de archivos sin firma digital. Para firmar digitalmente los documentos generados, será necesario descargar los documentos a una carpeta del sistema de archivos, aplicar la firma digital con un software de firma externo (por ejemplo, DIKE) y reimportar el archivo así firmado (xml o p7m), el cual será luego enviado al SdI en el nuevo formato. 
Una vez enviado al SdI, Fluentis adquiere las notificaciones producidas por el Sistema de Intercambio y las asocia a los documentos correspondientes, gestionando la evolución de los estados del documento.
Si no se dispone de una conexión activa al Fluentis Business Hub, será igualmente posible generar los archivos XML del ciclo activo para los contactos seleccionados, descargar los archivos producidos y proceder al envío de los mismos por canales externos a Fluentis. 
Los archivos XML generados por Fluentis y adquiridos por el SdI relativos al ciclo pasivo, se almacenan en la gestión documental de Fluentis, además de estar siempre disponibles en las diferentes fases de gestión del documento de venta a través de la funcionalidad específica **Registro de documentos SDI** en la cual es posible visualizar el historial temporal de la transmisión del documento y descargar y visualizar los archivos producidos por Fluentis (XML y PDF) y recibidos por el SdI. 
El ciclo pasivo de facturación electrónica hacia privados no permite el posible rechazo por parte del destinatario del documento de facturación, el cual deberá ser gestionado como un trámite contable conforme a la normativa vigente.