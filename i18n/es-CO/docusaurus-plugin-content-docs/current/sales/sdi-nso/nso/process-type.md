---
title: Tipos de procesos (Tipi processi)
sidebar_position: 3
---

## Ordenación simple (Ordinazione semplice)

El proceso de **Ordenación simple** prevé que cualquier comunicación de aceptación, 
negación o modificación del Pedido por parte del Proveedor pueda llegar al Cliente exclusivamente 
en las formas tradicionales (teléfono, fax, correo electrónico, etc.), e implica que el Proveedor no 
está disponible para recibir una eventual Respuesta de forma telemática. 
El Cliente puede revocar o modificar un Pedido emitido anteriormente mediante 
la emisión de un nuevo Pedido, que debe contener la indicación del Pedido que se desea 
revocar o modificar.  
Se concluye que un Pedido puede asumir las siguientes formas:  
- Pedido inicial  
- Pedido inicial relacionado  
- Pedido de revocación  
- Pedido sustituto       

En este sentido, si en el Pedido se indica la fecha de ejecución del suministro, el límite temporal dentro 
del cual es posible reemplazar o revocar el Pedido está determinado por dicha fecha menos el tiempo 
necesario para preparar el suministro y ejecutarlo en el lugar establecido.  
El Proveedor debe considerar eficaces solo las Revocaciones y Sustituciones de pedidos recibidas 
antes de que haya comenzado la ejecución del Pedido revocado o sustituido (es decir, antes de que 
el pedido sea cumplido).  
En el Pedido se puede indicar la fecha dentro de la cual el Proveedor debe responder.

## Ordenación Completa (Ordinazione Completa)

Este proceso prevé el uso de tres Documentos:  
- el Pedido, emitido por el Cliente;  
- la Respuesta, eventualmente emitida por el Proveedor;  
- el Pedido de acuse de recibo, eventualmente emitido por el Cliente.      

El proceso comienza con el envío del Pedido por parte del Cliente y puede terminar, alternativamente:  
- con la recepción por parte del Proveedor del Pedido enviado por el Cliente;  
- con la recepción por parte del Cliente de la Respuesta enviada por el Proveedor;  
- con la recepción por parte del Proveedor del Pedido de acuse de recibo enviado por el Cliente. 

## Emisión del pedido (Emissione dell’ordine)

El Pedido puede asumir las siguientes cuatro formas:  
- Pedido inicial,  
- Pedido inicial relacionado,  
- Pedido de revocación,  
- Pedido sustituto.      

El Pedido de revocación debe contener solo una línea de pedido sin contenido, ya que constituye 
la mera anulación del Pedido previamente transmitido al que hace referencia;  
El Proveedor está obligado a considerar eficaces solo las Revocaciones y las Sustituciones de pedidos recibidas 
antes de que haya comenzado la ejecución del Pedido revocado o sustituido. Si en el Pedido está 
indicada la fecha de ejecución del suministro (Delivery/RequestedDeliveryPeriod/StartDate = 
EndDate), representa el límite temporal dentro del cual es posible sustituir o revocar el Pedido 
menos el tiempo necesario para preparar el suministro y ejecutarlo en el lugar establecido.  
Las Sustituciones y Revocaciones, respectivamente, reemplazan y anulan tanto el Pedido indicado allí 
como todas las demás Sustituciones y Revocaciones ya transmitidas, referidas al mismo Pedido inicial.  
El Pedido sustituto da inicio formalmente a un nuevo proceso de Ordenación, que puede ser 
sencillo o completo, dependiendo de lo que se indique en el mismo Pedido sustituto.  
En el Pedido se puede indicar la fecha dentro de la cual el Proveedor debe responder 
(ValidityPeriod/enddate).

## Respuesta al pedido (Risposta all’ordine)

Frente a la recepción del Pedido, el Proveedor puede:  
- finalizar el proceso sin transmitir ninguna Respuesta;  
- transmitir una Respuesta (flujo rojo en la figura), que debe contener la indicación 
del Pedido previamente enviado al que se responde, comunicando al Cliente, alternativamente, que 
intenta:  
> - comunicar que ha recibido el Pedido (Respuesta de recepción);  
> - aceptar el Pedido recibido (Respuesta de aceptación);  
> - declinar el Pedido recibido (Respuesta de negación);  
> - realizar modificaciones al Pedido recibido (Respuesta con modificaciones).        

La Respuesta con modificaciones debe contener todas las líneas de pedido, tanto las que se pretenden 
mantener como las que se desean modificar, ya que integra el Pedido previamente 
transmitido al que hace referencia.  
La Respuesta a un Pedido revocado no tiene efectos para el Cliente. 

## Acuse de recibo a la respuesta (Riscontro alla risposta)

Frente a la recepción de la Respuesta, el Cliente puede:  
- terminar el proceso sin transmitir un Pedido de acuse de recibo (flujo azul en la figura);  
- transmitir un Pedido de acuse de recibo (flujo rojo en la figura), que debe contener 
la indicación de la Respuesta a la que hace referencia, comunicando al Proveedor, alternativamente, que 
pretende:  
> - aceptar la Respuesta recibida (Pedido de acuse de recibo para confirmación);  
> - declinar la Respuesta recibida (Pedido de acuse de recibo para negación);  
> - sustituir las modificaciones al Pedido contenidas en la Respuesta recibida (Pedido de 
acuse de recibo sustituto).      

Si el Cliente comunica que desea sustituir las modificaciones al Pedido contenidas en la Respuesta del 
proveedor, el Pedido de acuse de recibo anula todos los Documentos anteriores del proceso actual y da 
inicio a un nuevo proceso de Ordenación.  
El Proveedor debe considerar eficaces solo los Pedidos de acuse de recibo recibidos antes de que haya 
comenzado la ejecución del Pedido.      

Si el Cliente envía, en la Respuesta del proveedor, un pedido de acuse de recibo sustituto, el Pedido de 
acuse de recibo anula todos los Documentos anteriores (Pedido y Respuesta) del proceso actual y da 
inicio a un nuevo proceso de Ordenación completa.        
La ausencia de un Pedido de acuse de recibo equivale a la confirmación de la Respuesta.  
Solo son válidos los Pedidos de acuse de recibo recibidos antes de que se haya despachado el pedido.

## Ordenación PRE-Concordada (Ordinazione PRE-Concordata)

La pre-autorización para emitir el pedido por parte del Proveedor, en lugar del Cliente, puede 
derivar del contrato o de otro documento (por ejemplo, un pedido enviado por fax o por correo 
electrónico debido a la indisponibilidad del sistema informático que emite los Pedidos electrónicos, o un 
pedido perfeccionado a través de una plataforma de comunicación telemática) con el que el Cliente 
concede dicha facultad al Proveedor, predeterminando el ámbito y las limitaciones dentro de las cuales puede 
ser ejercida.  
Este proceso prevé el uso de dos Documentos:  
- el Pedido pre-concordado, emitido por el Proveedor;  
- el Pedido de acuse de recibo, eventualmente emitido por el Cliente.        

El proceso comienza con el envío del Pedido pre-concordado por parte del Proveedor, que lo emite en 
cuanto pre-autorizado por el Cliente, y puede terminar, alternativamente:  
- con la recepción por parte del Cliente del Pedido pre-concordado enviado por el Proveedor;  
- con la recepción por parte del Proveedor del Pedido de acuse de recibo enviado por el Cliente.      

Cualquier comunicación de confirmación, negación o sustitución del Pedido pre-concordado por parte del 
Cliente deberá llegar al Proveedor, por norma, a través de NSO.  
El Proveedor puede revocar o modificar un Pedido pre-concordado emitido anteriormente mediante la emisión 
de un nuevo Pedido pre-concordado, que debe contener la indicación del Pedido pre-concordado que se desea 
revocar o modificar.

Se concluye que un Pedido pre-concordado puede asumir las siguientes formas:  
- Pedido inicial  
- Pedido inicial relacionado  
- Pedido de revocación, que debe contener la indicación del Pedido previamente enviado 
que se desea revocar, debe contener una sola línea de pedido, ya que constituye el 
mero anulación del Pedido previamente transmitido al que hace referencia  
- Pedido sustituto, que debe contener la indicación del Pedido previamente enviado 
que se desea modificar, constituye un nuevo Pedido que anula todos los Documentos 
anteriores (Pedidos y Pedidos de acuse de recibo) del proceso actual y da inicio a un nuevo 
proceso de Ordenación pre-concordada, por lo tanto debe contener todas las líneas de pedido 
(como un Pedido inicial).  
Frente a la recepción del Pedido pre-concordado, el Cliente puede:  
- terminar el proceso sin transmitir un Pedido de acuse de recibo  
- transmitir un Pedido de acuse de recibo, que debe contener la indicación del Pedido pre-concordado al que hace referencia, comunicando al Proveedor, alternativamente, que 
pretende:  
> - confirmar el Pedido pre-concordado recibido (Pedido de acuse de recibo para confirmación);  
> - declinar el Pedido pre-concordado recibido (Pedido de acuse de recibo para negación);  
> - sustituir el Pedido pre-concordado recibido (Pedido de acuse de recibo sustituto).     

Si el Cliente comunica que desea sustituir el Pedido pre-concordado del Proveedor, el Pedido de 
acuse de recibo anula todos los Documentos anteriores del proceso actual y da inicio a un nuevo proceso 
que, según lo indicado en el Pedido de acuse de recibo, puede ser de Ordenación simple o de 
Ordenación completa.  
Solo son válidos los Pedidos de acuse de recibo recibidos antes de que el Pedido pre-concordado haya sido 
cumplido con documentos de entrega.