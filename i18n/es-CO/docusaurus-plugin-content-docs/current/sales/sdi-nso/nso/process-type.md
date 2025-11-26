---
title: Tipos de procesos
sidebar_position: 3
ai_generated: true
---

## Pedido simple<!-- Ordinazione semplice -->

El proceso de Pedido simple<!-- Ordinazione semplice --> establece que cualquier comunicación de aceptación, rechazo o modificación del Pedido por parte del Proveedor solo podrá llegar al Cliente exclusivamente por medios tradicionales (teléfono, fax, correo electrónico, etc.), lo que implícitamente informa al Proveedor que no está disponible para recibir la posible Respuesta por vía telemática.  
El Cliente, sin embargo, puede revocar o modificar un Pedido emitido previamente mediante la emisión de un nuevo Pedido, el cual debe contener la indicación del Pedido que se desea revocar o modificar.
De ello se deduce que un Pedido puede asumir las siguientes formas:
- Pedido inicial
- Pedido inicial vinculado
- Pedido de revocación 
- Pedido sustitutivo       

Al respecto, si en el Pedido se indica la fecha de ejecución de la entrega<!-- fornitura -->, el límite temporal dentro del cual es posible sustituir o revocar el Pedido está determinado por dicha fecha menos el tiempo necesario para preparar y realizar la entrega<!-- fornitura --> en el lugar preestablecido.
El Proveedor debe considerar solamente como válidas las Revocaciones y Sustituciones de pedido recibidas antes de que se haya iniciado la ejecución del Pedido revocado o sustituido (es decir, antes de que el pedido sea gestionado<!-- venga evaso -->).
En el Pedido se puede indicar la fecha límite dentro de la cual el Proveedor debe responder.

## Pedido Completo<!-- Ordinazione Completa -->

Este proceso prevé el uso de tres Documentos: 
- el Pedido, emitido por el Cliente;
- la Respuesta, eventualmente emitida por el Proveedor;
- el Pedido de confirmación, eventualmente emitido por el Cliente.      

El proceso comienza con el envío del Pedido por parte del Cliente y puede finalizar, alternativamente: 
- con la recepción por parte del Proveedor del Pedido enviado por el Cliente;
- con la recepción por parte del Cliente de la Respuesta enviada por el Proveedor;
- con la recepción por parte del proveedor del Pedido de confirmación enviado por el Cliente.

## Emisión del pedido<!-- Emissione dell’ordine -->

El Pedido puede asumir las siguientes cuatro formas:
- Pedido inicial,
- Pedido inicial vinculado, 
- Pedido de revocación, 
- Pedido sustitutivo.      

El Pedido de revocación debe contener solo una línea de pedido sin contenido, ya que representa únicamente la anulación del Pedido previamente transmitido al que hace referencia;  
El Proveedor solo debe considerar válidas las Revocaciones y Sustituciones de pedido recibidas antes de que se haya iniciado la ejecución del Pedido revocado o sustituido. Si en el Pedido se indica la fecha de ejecución de la entrega<!-- fornitura --> (Delivery/RequestedDeliveryPeriod/StartDate = EndDate), representa el límite temporal dentro del cual es posible sustituir o revocar el Pedido descontando el tiempo necesario para preparar y realizar la entrega<!-- fornitura --> en el lugar preestablecido.
Las Sustituciones y Revocaciones, respectivamente, reemplazan y anulan tanto el Pedido indicado como todas las demás Sustituciones y Revocaciones ya transmitidas, referidas al mismo Pedido inicial.
El Pedido sustitutivo inicia formalmente un nuevo proceso de Pedido, que puede ser simple o completo según lo indicado en el propio Pedido sustitutivo.
En el Pedido puede indicarse la fecha límite antes de la cual el Proveedor debe responder
(ValidityPeriod/enddate).

## Respuesta al pedido<!-- Risposta all’ordine -->

Tras la recepción del Pedido, el Proveedor puede: 
- terminar el proceso sin transmitir ninguna Respuesta;
- transmitir una Respuesta (flujo rojo en la figura), que debe contener la referencia al Pedido enviado previamente al que responde, con la que comunica al Cliente, alternativamente, que desea: 
> - comunicar que ha recibido el Pedido (Respuesta de recepción);
> - aceptar el Pedido recibido (Respuesta de aceptación);
> - rechazar el Pedido recibido (Respuesta de rechazo);
> - modificar el Pedido recibido (Respuesta con modificaciones).        

La Respuesta con modificaciones debe contener todas las líneas de pedido, tanto las que se quieren mantener como las que se quieren modificar, ya que complementa el Pedido previamente transmitido al que hace referencia.
La Respuesta a un Pedido revocado no tiene efectos para el Cliente.

## Confirmación a la respuesta<!-- Riscontro alla risposta -->

Tras la recepción de la Respuesta, el Cliente puede: 
- terminar el proceso sin transmitir un Pedido de confirmación (flujo azul en la figura);
- transmitir un Pedido de confirmación (flujo rojo en la figura), que debe contener la referencia a la Respuesta a la que hace referencia, con la que comunica al Proveedor, alternativamente, que desea:
> - aceptar la Respuesta recibida (Pedido de confirmación por aceptación);
> - rechazar la Respuesta recibida (Pedido de confirmación por rechazo);
> - sustituir las modificaciones al Pedido contenidas en la Respuesta recibida (Pedido de confirmación sustitutivo).      

Si el Cliente comunica que desea sustituir las modificaciones al Pedido contenidas en la Respuesta del proveedor, el Pedido de confirmación anula todos los Documentos anteriores del proceso actual e inicia un nuevo proceso de Pedido.
El Proveedor solo debe considerar válidos los Pedidos de confirmación recibidos antes de que se haya iniciado la ejecución del Pedido.

Si el Cliente envía, en respuesta al proveedor, un pedido de confirmación sustitutivo, el Pedido de confirmación anula todos los Documentos anteriores (Pedido y Respuesta) del proceso actual e inicia un nuevo proceso de Pedido completo.
La ausencia de Pedido de confirmación equivale a la confirmación de la Respuesta.
Solo son válidos los Pedidos de confirmación recibidos antes de la gestión<!-- evasione --> del pedido.

## Pedido PRE-Acordado<!-- Ordinazione PRE-Concordata -->

La preautorización para emitir el Pedido por parte del Proveedor, en lugar del Cliente, puede derivar de un contrato o de otro documento (por ejemplo, un pedido enviado por fax o correo electrónico debido a la indisponibilidad del sistema informático que emite los Pedidos electrónicos, o un pedido perfeccionado a través de una plataforma de comunicación telemática) con el que el Cliente otorga dicha facultad al Proveedor, predeterminando el ámbito y las limitaciones dentro de las cuales puede ejercerse.
Este proceso prevé el uso de dos Documentos: 
- el Pedido preacordado, emitido por el Proveedor;
- el Pedido de confirmación, eventualmente emitido por el Cliente.        

El proceso comienza con el envío del Pedido preacordado por parte del Proveedor, quien lo emite al estar preautorizado por el Cliente, y puede finalizar, alternativamente:
- con la recepción por parte del Cliente del Pedido preacordado enviado por el Proveedor;
- con la recepción por parte del proveedor del Pedido de confirmación enviado por el Cliente.      

Cualquier comunicación de confirmación, rechazo o sustitución del Pedido preacordado por parte del Cliente deberá llegar al Proveedor, normalmente, a través de NSO.
El Proveedor, sin embargo, puede revocar o modificar un Pedido preacordado emitido previamente mediante la emisión de un nuevo Pedido preacordado, el cual debe contener la referencia al Pedido preacordado que se desea revocar o modificar.

De ello se deduce que un Pedido preacordado puede asumir las siguientes formas:
- Pedido inicial
- Pedido inicial vinculado
- Pedido de revocación, que debe contener la referencia al Pedido enviado previamente que se desea revocar, y debe contener una sola línea de pedido, ya que representa la mera anulación del Pedido previamente transmitido al que hace referencia
- Pedido sustitutivo, que debe contener la referencia al Pedido enviado previamente que se desea modificar, constituye un nuevo Pedido que anula todos los Documentos anteriores (Pedidos y Pedidos de confirmación) del proceso actual e inicia un nuevo proceso de Pedido preacordado, por lo tanto debe contener todas las líneas de pedido (como un Pedido inicial).
Tras la recepción del Pedido preacordado, el Cliente puede:
- finalizar el proceso sin transmitir un Pedido de confirmación
- transmitir un Pedido de confirmación, que debe contener la referencia al Pedido preacordado al que hace referencia, con la que comunica al Proveedor, alternativamente, que desea: 
> - confirmar el Pedido preacordado recibido (Pedido de confirmación por aceptación);
> - rechazar el Pedido preacordado recibido (Pedido de confirmación por rechazo);
> - sustituir el Pedido preacordado recibido (Pedido de confirmación sustitutivo).     

Si el Cliente comunica que desea sustituir el Pedido preacordado del Proveedor, el Pedido de confirmación anula todos los Documentos anteriores del proceso actual e inicia un nuevo proceso que, según lo indicado en el Pedido de confirmación, puede ser de Pedido simple<!-- Ordinazione semplice --> o de Pedido completo<!-- Ordinazione completa -->.
Solo son válidos los Pedidos de confirmación recibidos antes de que el Pedido preacordado haya sido gestionado<!-- evaso --> con documentos de entrega.