---
title: ¿Qué es la facturación electrónica? (Cos'è la fatturazione elettronica)
sidebar_position: 1
---

La facturación electrónica es un sistema digital de emisión y transmisión de facturas que sustituye el 
soporte papel a favor de nuevas modalidades digitales de comunicación.  
Con la facturación electrónica, las facturas y las notas de variación emitidas deberán ser producidas en 
nuevo formato digital “XML eXtensible Markup Language”, un lenguaje que permite a los soportes 
informáticos definir y controlar con procedimientos estandarizados el significado de los elementos contenidos, 
verificando así las informaciones a efectos de los controles previstos por ley.  
El ordenamiento italiano ha introducido, con la ley financiera de 2008, la gestión de la facturación 
electrónica en cumplimiento de la normativa comunitaria y desde el 6/06/2014 ha hecho obligatoria la factura en 
formato electrónico para la emisión de documentos a la Administración Pública.  
La “factura electrónica” prevista por la normativa italiana es un archivo en formato XML (eXtensible Markup 
Language) conforme a las especificaciones técnicas, según el anexo A del decreto del Director 
de la Agencia de Ingresos, protocolo n. 89757/2018 del 30/04/2018. El contenido de cualquier factura es 
regulado, en general, por los artículos 21 y 21-bis del D.P.R. n. 633/1972.  
El archivo de la factura generado con el nuevo estándar XML contiene una representación diferente de los datos obligatorios 
exigidos por la normativa de IVA, integrados eventualmente con información adicional o elementos que puedan 
facilitar la gestión y contabilización de las mismas.  
El art. 1, c. 917, lett. a y b de la Ley n. 205 del 27 de diciembre de 2017 (Ley de Presupuesto 2018) ha introducido, a 
partir del 1° de enero de 2019, la obligación de facturación electrónica para las cesiones de bienes y las prestaciones de 
servicios realizadas entre sujetos residentes, establecidos o identificados en el territorio del Estado utilizando las 
mismas soluciones informáticas ya adoptadas para la emisión de la factura electrónica hacia la AP.  
Las facturas electrónicas emitidas hasta ahora a favor de la AP y posteriormente también las emitidas para el B2B 
y B2C son enviadas al “Sistema de Intercambio”, un sistema informático gestionado 
por la Agencia de Ingresos que puede recibir las facturas electrónicas, realizar controles sobre los archivos recibidos y 
proceder al correcto intercambio de información con el sujeto transmisor, así como enviar las facturas a 
los sujetos destinatarios.  
Las empresas involucradas en el proceso de facturación electrónica estarán interesadas tanto en lo que respecta a la 
gestión del ciclo ACTIVO, es decir, en el momento en que se emite la factura relacionada con productos vendidos o 
servicios prestados, como en lo que respecta al ciclo PASIVO, es decir, la recepción de los documentos emitidos por sus 
propios proveedores.

## Flujo operativo en Fluentis (Flusso operativo in Fluentis)

En relación con la gestión de la facturación electrónica y de los cumplimientos asociados, en Fluentis es 
posible gestionar:  
- emisión de documentos de venta hacia sujetos residentes/establecidos/identificados en el territorio del estado Italiano  
- emisión de documentos de venta hacia la Administración Pública  
- adquisición de documentos electrónicos de compra emitidos por proveedores italianos (NO GESTIONADO PARA QUIEN 
NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS)  
- Comunicación al SdI de los documentos de compra y venta emitidos por proveedores extranjeros o dirigidos a clientes 
extranjeros (sujetos NO residentes/establecidos/identificados en el territorio italiano) (ex spesometro)             

La gestión de los flujos prevé la configuración de una conexión en BizLink, dedicada a la comunicación 
con el servicio Fluentis Business Hub. El servicio tiene como objetivo enviar los documentos al SdI, adquirir 
del SdI los documentos de facturación relativos al ciclo pasivo (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL 
CONTRATO FE CON FLUENTIS), adquirir las notificaciones y los mensajes relacionados con las diversas fases de envío de las facturas 
activas.         

El protocolo de comunicación entre Fluentis Business HUB y el SdI (NO GESTIONADO PARA QUIEN NO HA 
SUSCRITO EL CONTRATO FE CON FLUENTIS) es el sistema de cooperación aplicativa basado en el servicio 
Web Service:  
- la factura, emitida por Fluentis, transita a través de la conexión de BizLink al Fluentis Business Hub  
- El servicio Fluentis Business Hub envía los documentos al SdI  
- Fluentis Digital Hub adquiere del SdI las notificaciones relativas al estado de los documentos y las transfiere al 
gestional  
- Fluentis Digital Hub recibe las facturas pasivas transferidas por los proveedores de los clientes de Fluentis  
- Distribuye las facturas en las configuraciones individuales de los clientes         

En Fluentis, será posible, por lo tanto:  
- generar facturas de venta en formato electrónico según el trazado previsto para la facturación 
B2B/B2C/PA  
- en caso de que se decida firmar digitalmente los archivos de la factura o si tal paso es obligatorio debido a la 
naturaleza misma de los documentos, gestionar la exportación de los documentos XML a una carpeta de archivo de sistema 
externa para firmar digitalmente los documentos utilizando un software de firma proporcionado por terceros 
y posteriormente reimportar el archivo firmado (.xml y .p7m)  
- visualizar el contenido del archivo XML y, eventualmente, adjuntar al archivo XML también el archivo PDF (formato 
estándar) del documento de factura  
- enviar los documentos al SdI (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON 
FLUENTIS)  
- monitorear el estado de los documentos enviados a través de cuadrículas de búsqueda masivas, campos de 
visualización del estado de los documentos en los documentos individuales y tableros para la visualización de los 
logs transmitidos por el SdI  
- adquirir facturas pasivas enviadas por los proveedores (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL 
CONTRATO FE CON FLUENTIS)          

La gestión de la transmisión y adquisición de documentos electrónicos se lleva a cabo a través del procedimiento de 
CAMBIO DE ESTADO de los documentos. 

Fluentis permite, a través del Fluentis Business Hub, la transferencia al SdI tanto de archivos de factura firmados como de 
archivos sin firma digital. Para aplicar la firma digital a los documentos generados, será necesario ejecutar la 
descarga de los documentos en una carpeta de sistema de archivos, aplicar la firma digital con un software de firma 
externo (p. ej. DIKE) y reimportar el archivo así firmado (xml o p7m) que será enviado al SdI en el nuevo formato.  
Una vez enviado al SdI, Fluentis adquiere las notificaciones producidas por el Sistema de Intercambio y las asocia a 
los documentos correspondientes, gestionando la evolución de los estados del documento.  
En caso de no tener una conexión activa al Fluentis Business Hub, será posible generar los archivos XML del ciclo activo para los contactos seleccionados, descargar los archivos producidos y proceder con el envío de los mismos a través de canales externos a Fluentis.  
Los archivos XML generados por Fluentis y adquiridos por el SdI relacionados con el ciclo pasivo se conservan en la Gestión 
documental de Fluentis, además de estar siempre disponibles en las diversas fases de gestión del documento de 
venta a través de la funcionalidad **Registro de documentos SDI** en la que es posible 
visualizar el historial temporal de la transmisión del documento y descargar y visualizar los archivos producidos 
por Fluentis (XML y PDF) y recibidos por el SdI.  
El ciclo pasivo de facturación electrónica hacia privados no admite el posible rechazo por parte del 
destinatario del documento de facturación, que deberá ser gestionado como cumplimiento contable 
según la normativa vigente.