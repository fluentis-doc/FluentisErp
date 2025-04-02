---
title: tipi documento
sidebar_position: 2
---

## Pedido (Ordine)

El **Pedido** es el Documento representativo de la orden de compra de bienes y servicios emitido por el Cliente (Remitente) y dirigido al Proveedor (Destinatario). Un Pedido está compuesto por una o más líneas de pedido, en las cuales se indican el bien o el servicio que se desea adquirir, la cantidad y el precio.  
**El Pedido está preparado en el formato descrito por la especificación PEPPOL Order transaction 3.0.**  
Un Pedido puede:  
- determinar, independientemente de otros Pedidos previamente emitidos, los bienes y/o servicios que el Cliente desea adquirir y las instrucciones correspondientes para ejecutar la prestación (Pedido inicial). Un Pedido inicial no contiene referencias a otros Pedidos;  
- determinar, independientemente de otros Pedidos previamente emitidos, los bienes y/o servicios que el Cliente desea adquirir y las instrucciones correspondientes para ejecutar la entrega, y, sin embargo, estar genéricamente relacionado con otro Documento (Pedido inicial relacionado). Un Pedido inicial relacionado contiene la referencia al Documento al que está vinculado y la indicación de que se trata de un mero "vínculo";  
- revocar un Pedido previamente emitido (Pedido de revocación). El Pedido de revocación es un Pedido que contiene la indicación de que se trata de una "Revocación" y la referencia al Pedido que se pretende revocar;  
- sustituir un Pedido previamente emitido (Pedido sustituto). La Modificación de pedido es un nuevo Pedido completo con todas las líneas de pedido, que contiene la indicación de que se trata de una "Modificación" y la referencia al Pedido que se desea modificar.  
Las Sustituciones y las Revocaciones, respectivamente, reemplazan y anulan tanto el Pedido indicado como todas las demás Sustituciones y Revocaciones ya transmitidas, referidas al correspondiente Pedido inicial.  
El Pedido inicial relacionado puede usarse exclusivamente para mantener en memoria que el nuevo proceso que se desea iniciar está vinculado a un proceso anterior y no debe usarse nunca en lugar de los otros instrumentos (Pedido de revocación, Pedido sustituto y Pedido de recepción) especialmente diseñados para revocar, sustituir (o complementar), confirmar o rechazar otro Documento.

## Respuesta (Risposta)

La **Respuesta** es el Documento mediante el cual el Proveedor (Remitente) acepta, rechaza o propone cambios a un Pedido recibido del Cliente (Destinatario).  
**La Respuesta está preparada en el formato descrito por la especificación PEPPOL Order Response transaction 3.0.**  
Con la Respuesta, el Proveedor puede comunicar al Cliente que:  
- ha recibido el Pedido (Respuesta de recepción), pero aún no lo ha procesado. Se trata, evidentemente, de una comunicación interlocutoria que no contiene ninguna indicación sobre “si y cómo” el Proveedor pretende dar curso al Pedido. La Respuesta de recepción es una Respuesta sin líneas de pedido, que contiene la indicación de que se trata de una "recepción" (“AB”) y la referencia al Pedido que se comunica haber recibido;  
- tiene la intención de dar curso al Pedido recibido (Respuesta de aceptación). La Respuesta de aceptación es una Respuesta sin líneas de pedido, que contiene la indicación de que se trata de una "Aceptación" y la referencia al Pedido que se pretende aceptar;  
- rechaza el Pedido recibido (Respuesta de negación). La Respuesta de negación es una Respuesta sin líneas de pedido, que contiene la indicación de que se trata de un "Rechazo" y la referencia al Pedido que se pretende rechazar;  
- tiene la intención de dar curso al Pedido recibido realizando algunos cambios (Respuesta con cambios). La Respuesta con cambios, que contiene la indicación de que se trata de una "Modificación" y la referencia al Pedido que se desea modificar, debe contener todas las líneas de pedido, tanto las que se desean mantener como las que se desean variar, ya que integra el Pedido previamente transmitido al que hace referencia.  
Las Respuestas con cambios y las Respuestas de negación, respectivamente, integran y anulan tanto el Pedido indicado como todas las otras Modificaciones y Revocaciones ya transmitidas, referidas al mismo Pedido inicial.  

La Respuesta a un Pedido revocado no tiene efectos.

## Pedido de Recepción (Ordine di Riscontro)

El **Pedido de recepción** es el Documento mediante el cual el Cliente (Remitente) confirma, rechaza o sustituye (Pedido de recepción sustituto) un Pedido preacordado o una Respuesta enviada por el Proveedor (Destinatario).  
**El Pedido de recepción, por lo tanto, no es más que un Pedido que hace referencia a un Documento enviado por el Proveedor. En consecuencia, está preparado en el mismo formato, que está descrito por la especificación PEPPOL Order transaction 3.0.**  
Con el Pedido de recepción, el Cliente puede comunicar al Proveedor:  
- que confirma un Pedido preacordado o una Respuesta enviada por el Proveedor (Pedido de recepción por confirmación). El Pedido de recepción por confirmación es un Pedido que contiene la indicación de que se trata de una "Confirmación" y la referencia al Pedido preacordado o a la Respuesta que se desea confirmar;  
- que rechaza un Pedido preacordado o una Respuesta enviada por el Proveedor (Pedido de recepción por negación). El Pedido de recepción por negación es un Pedido que contiene la indicación de que se trata de un "Rechazo" y la referencia al Pedido o a la Respuesta que se desea rechazar;  
- que tiene la intención de sustituir un Pedido preacordado o una Respuesta enviada por el Proveedor (Pedido de recepción sustituto). El Pedido de recepción sustituto es un nuevo Pedido, completo con todas las líneas de pedido, que contiene la indicación de que se trata de una "Sustitución" y la referencia al Pedido o a la Respuesta que se pretende sustituir.  

Los Pedidos de recepción sustitutos y los Pedidos de recepción por negación, respectivamente, reemplazan y anulan tanto el Pedido preacordado o la Respuesta indicados como todas las demás Sustituciones y Revocaciones, ya transmitidas, referidas al correspondiente Pedido inicial.  
El Pedido de recepción referido a un Pedido preacordado revocado no tiene efectos.

## Pedido PRE-Acordado (Ordine PRE-Concordato)

El **Pedido pre-acordado** es el Documento representativo de la orden de compra de bienes y servicios, emitido por el Proveedor (Remitente) en lugar del Cliente (Destinatario), de acuerdo con este último.  
Un Pedido pre-acordado está compuesto por una o más líneas de pedido, en las que se indican el bien o el servicio objeto de la compra, la cantidad y el precio.  
**El Pedido pre-acordado está preparado en el formato descrito por la especificación PEPPOL Order Agreement transaction 3.0.**  
Un Pedido pre-acordado puede:  
- determinar, independientemente de otros Pedidos pre-acordados previamente emitidos, los bienes y/o servicios que el Cliente desea adquirir y las instrucciones correspondientes para ejecutar la entrega (Pedido pre-acordado inicial). Un Pedido pre-acordado inicial no contiene referencias a otros Pedidos pre-acordados;  
- determinar, independientemente de otros Pedidos pre-acordados previamente emitidos, los bienes y/o servicios que el Cliente desea adquirir y las instrucciones correspondientes para ejecutar la entrega y, sin embargo, estar genéricamente relacionado con otro Documento (Pedido pre-acordado inicial relacionado). Un Pedido pre-acordado inicial relacionado contiene la referencia al Documento al que está vinculado y la indicación de que se trata de un mero "vínculo".  
- revocar un Pedido pre-acordado previamente emitido (Pedido pre-acordado de revocación). El Pedido pre-acordado de revocación es un Pedido pre-acordado que contiene la indicación de que se trata de una “revocación” (“Cancelled”) y la referencia al Pedido pre-acordado que se desea revocar; además, tiene una sola línea de pedido sin contenido.  
- sustituir un Pedido pre-acordado previamente emitido (Pedido pre-acordado sustituto). La Modificación de pedido pre-acordado es un nuevo Pedido pre-acordado, completo con todas las líneas de pedido, que contiene la indicación de que se trata de una “sustitución” (“Revised”) y la referencia al Pedido pre-acordado que se desea modificar.  

Las Sustituciones y las Revocaciones, respectivamente, reemplazan y anulan tanto el Pedido pre-acordado indicado como todas las demás Sustituciones y Revocaciones ya transmitidas, referidas al correspondiente Pedido pre-acordado inicial.  
El Pedido pre-acordado inicial relacionado puede ser utilizado exclusivamente para mantener en memoria que el nuevo proceso que se desea iniciar está vinculado a un proceso anterior y no debe usarse nunca en lugar de los otros instrumentos (Pedido pre-acordado de revocación, Pedido pre-acordado sustituto y Respuesta) especialmente diseñados para revocar, sustituir (o complementar), aceptar o rechazar otro Documento.

## RELACIÓN CON EL ESTÁNDAR PEPPOL (RELAZIONE CON LO STANDARD PEPPOL)

Con referencia a la ordenación de compra de bienes y servicios, el estándar PEPPOL BIS versión 3.0 define tres tipos de documento:  
− Order transaction 3.0;  
− Order Response transaction 3.0;  
− Order Agreement transaction 3.0;  
y tres procesos (denominados perfiles):  
− BIS Order only 3.0;  
− BIS Ordering 3.0;  
− BIS Order Agreement 3.0.