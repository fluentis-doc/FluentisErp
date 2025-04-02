---
title: Mensajes NSO (Messaggi NSO)
sidebar_position: 4
---

A raíz de cada Mensaje recibido, NSO proporciona un Identificador de transacción (IdT) y su validación. Se recuerda que, en virtud del artículo 3 del d.m. 7 de diciembre de 2018, las administraciones públicas no pueden proceder con la liquidación y el posterior pago de Documentos contenidos en Mensajes que no hayan sido validados por NSO. Cada Documento está únicamente identificado mediante la Tripletta de identificación compuesta por tres elementos, que deben estar obligatoriamente presentes:  
- el identificador del sujeto que lo ha emitido (EndpointID), que normalmente coincide con el Remitente;  
- el identificador del Documento asignado por el emisor (ID);  
- la fecha del Documento (IssueDate).  

Un mismo sujeto, por lo tanto, puede emitir un único Documento con el mismo identificador y la misma fecha (unicidad del Documento). La Tripletta de identificación se utiliza cada vez que es necesario hacer referencia a un Documento determinado en las Revocaciones y Sustituciones de Pedidos y de Pedidos preconcordados, en las Respuestas y en los Pedidos de respuesta.  
El IdT asignado a cada Mensaje por NSO se asocia con la Tripletta de identificación del Documento contenido en el mismo.

Todos los Mensajes (y, por lo tanto, todos los Documentos) válidos son buscables en la Plataforma de créditos comerciales (PCC) tanto a través de la Tripletta de identificación como a través del IdT.

## Estados de validación de NSO (Stati validazione NSO)

En función del resultado de la operación solicitada, NSO puede enviar al Transmisor una o más de las Notificaciones del sistema a continuación descritas, que incluyen el Identificador de la transacción (IdT) al que se refieren. En ambas categorías de escenarios (transmisión y validación), si el Mensaje no supera la validación, NSO envía al Transmisor la siguiente Notificación del sistema:  
- Notificación de rechazo: informa al Transmisor que el Mensaje no ha superado los controles de validación.  
- Acuse de recibo: informa al Transmisor que NSO ha entregado el Mensaje al Receptor;  
- Falta de entrega: informa al Transmisor sobre la imposibilidad temporal de entregar el Mensaje al Receptor;  
- Certificación de transmisión del mensaje con imposibilidad de entrega, que informa al Transmisor de la imposibilidad de entregar el Mensaje al Receptor por causas ajenas a NSO.          

En el caso de que, después de tres intentos "automáticos" de reenvío en un período de dos horas, la entrega al Receptor no haya sido exitosa, NSO envía al Transmisor una Notificación de Falta de entrega. Esta Notificación informa sobre la imposibilidad temporal de entregar el Mensaje al Receptor: se trata, por lo tanto, de una comunicación de carácter temporal. Como consecuencia, el comportamiento correcto del Transmisor será esperar el resultado definitivo del proceso de entrega. Si dicho proceso tiene un resultado positivo, el Transmisor recibirá el Acuse de recibo; de lo contrario, recibirá la Certificación de transmisión del mensaje con imposibilidad de entrega.  
Después del envío de la Notificación de Falta de entrega, NSO realiza más intentos de entrega del Mensaje. Si el proceso de entrega del Mensaje no tiene éxito, NSO envía al Transmisor la Certificación de transmisión del mensaje con imposibilidad de entrega. En este caso, el Transmisor está autorizado a entregar el Mensaje de manera autónoma al Receptor. En sustancia, se realiza una especie de escenario de validación directa debido a la imposibilidad técnica de entregar el Mensaje a través de NSO.         

Los Clientes y Proveedores acreditados en NSO (también a través de Intermediarios), es decir, aquellos cuyo dirección presentada en el Sobre de transmisión comienza con “NSO0:” (v. Párrafo 2.5.3) tienen la ventaja de no necesitar verificar la validación de los Mensajes, ya que todos los Mensajes transmitidos por NSO han sido necesariamente validados antes de ser enviados al Receptor.