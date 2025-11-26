---
title: Mensajes NSO
sidebar_position: 4
ai_generated: true
---

Por cada Mensaje<!-- Messaggio --> recibido, NSO proporciona la emisión de un Identificador de transacción (IdT), y su validación.
Se recuerda que, en virtud del artículo 3 del d.m. 7 diciembre 2018, las administraciones públicas no pueden proceder con la liquidación y el posterior pago en relación con Documentos contenidos en Mensajes<!-- Messaggi --> que no hayan sido validados por NSO.
Cada Documento está identificado únicamente por medio de la Tripleta de identificación compuesta por tres elementos, que obligatoriamente deben estar presentes: 
- el identificador de la entidad que lo ha emitido (EndpointID), que normalmente coincide con el Remitente; 
- el identificador del Documento asignado por el emisor (ID); 
- la fecha del Documento (IssueDate).        

Un mismo sujeto, por lo tanto, puede emitir uno y solo un Documento con el mismo identificador y la misma fecha (unicidad del Documento). 
La Tripleta de identificación se utiliza cada vez que es necesario hacer referencia a un determinado Documento en las Revocaciones y Sustituciones de Órdenes<!-- Ordini --> y Órdenes preacordadas<!-- Ordini preconcordati -->, en las Respuestas y en las Órdenes de comprobación<!-- Ordini di riscontro -->.
El IdT asignado a cada Mensaje<!-- Messaggio --> por NSO está asociado a la Tripleta de identificación del Documento allí contenido.

Todos los Mensajes<!-- Messaggi --> (y, por lo tanto, todos los Documentos) válidos pueden ser buscados en la Plataforma de Créditos Comerciales (PCC) tanto a través de la Tripleta de identificación como del IdT.

## Estados de validación NSO<!-- Stati validazione NSO -->

Según el resultado de la operación solicitada, NSO puede enviar al Transmisor una o más de las Notificaciones de sistema que se describen a continuación, las cuales incluyen el Identificador de la transacción (IdT) al que se refieren.
En ambas categorías de escenarios (transmisión y validación), si el Mensaje<!-- Messaggio --> no supera la validación, NSO envía al Transmisor la siguiente Notificación de sistema: 
- Notificación de rechazo: notifica al Transmisor que el Mensaje<!-- Messaggio --> no ha superado los controles de validación.
- Confirmación de entrega, que informa al Transmisor que NSO ha entregado el Mensaje<!-- Messaggio --> al Destinatario; 
- Entrega fallida, que señala al Transmisor la imposibilidad temporal de entregar el Mensaje<!-- Messaggio --> al Destinatario; 
- Certificación de transmisión realizada del mensaje con imposibilidad de entrega, que señala al Transmisor la imposibilidad de entregar el Mensaje<!-- Messaggio --> al Destinatario por causas no imputables a NSO.           

En caso de que, después de tres intentos "automáticos" de reenvío en el transcurso de dos horas, la entrega al Destinatario no haya tenido éxito, NSO envía al Transmisor una Notificación de Entrega fallida. Esta Notificación indica la imposibilidad momentánea de entregar el Mensaje<!-- Messaggio --> al Destinatario; por lo tanto, se trata de una comunicación de carácter temporal. De esto se deriva que el comportamiento correcto del Transmisor será esperar el resultado definitivo del proceso de entrega. Si dicho proceso tiene un resultado positivo, el Transmisor recibirá la Confirmación de entrega; de lo contrario, recibirá la Certificación de transmisión realizada del mensaje con imposibilidad de entrega.
Después del envío de la Notificación de Entrega fallida, NSO realiza intentos adicionales de entrega del Mensaje<!-- Messaggio -->.
Si el proceso de entrega del Mensaje<!-- Messaggio --> aún no tiene éxito, NSO enviará al Transmisor la Certificación de transmisión realizada del mensaje con imposibilidad de entrega. En este caso, el Transmisor está autorizado a entregar autónomamente el Mensaje<!-- Messaggio --> al Destinatario. En la práctica se da una especie de escenario de validación directa causada por la imposibilidad técnica de entregar el Mensaje<!-- Messaggio --> a través de NSO.        

Los Clientes y Proveedores autorizados en NSO (también a través de Intermediarios), es decir, aquellos cuyo dirección reportada en el Sobre de transmisión comienza por "NSO0:" (ver Párrafo 2.5.3) tienen la ventaja de no necesitar verificar la validación de los Mensajes<!-- Messaggi -->, ya que todos los Mensajes<!-- Messaggi --> transmitidos por NSO necesariamente han sido validados antes de ser enviados al Destinatario.