---
title: Tipos de documento
sidebar_position: 2
ai_generated: true
---

## Pedido<!-- Ordine -->

El *Pedido<!-- Ordine -->* es el documento representativo de la orden de compra de bienes y servicios emitida por el Cliente (Remitente) y dirigida al Proveedor (Destinatario)<!-- Documento rappresentativo dell’ordine di acquisto di beni e servizi emesso dal 
Cliente (Mittente) e indirizzato al Fornitore (Destinatario) -->. Un pedido<!-- Ordine --> está compuesto por una o más líneas de pedido<!-- linee d’ ordine -->, en las cuales se indican el bien o servicio que se desea adquirir, la cantidad y el precio.
**El Pedido<!-- L’Ordine --> está preparado en el formato descrito por la especificación PEPPOL Order transaction 3.0.**
Un Pedido<!-- Ordine --> puede: 
- determinar, independientemente de otros pedidos<!-- Ordini --> previamente emitidos, los bienes y/o servicios que el Cliente desea adquirir y las instrucciones correspondientes para llevar a cabo la prestación (Pedido inicial<!-- Ordine iniziale -->). Un pedido inicial<!-- Ordine iniziale --> no contiene referencias a otros pedidos<!-- Ordini -->;
- determinar, independientemente de otros pedidos<!-- Ordini --> previamente emitidos, los bienes y/o servicios que el Cliente desea adquirir y las instrucciones correspondientes para efectuar el suministro y, sin embargo, estar genéricamente relacionado con otro documento (Pedido inicial vinculado<!-- Ordine iniziale collegato -->). Un pedido inicial vinculado<!-- Ordine iniziale collegato --> contiene la referencia al documento al que está vinculado y la indicación de que se trata de un simple "enlace";
- revocar un pedido<!-- Ordine --> previamente emitido (Pedido de revocación<!-- Ordine di revoca -->). El pedido de revocación<!-- Ordine di revoca --> es un pedido<!-- Ordine --> que contiene la indicación de que se trata de una "Revocación" y la referencia al pedido<!-- Ordine --> que se desea revocar;
- sustituir un pedido<!-- Ordine --> previamente emitido (Pedido sustitutivo<!-- Ordine sostitutivo -->). La modificación de pedido<!-- Modifica di ordine --> es un nuevo pedido<!-- Ordine --> completo de todas las líneas de pedido<!-- linee di ordine -->, que contiene la indicación de que se trata de una "Modificación" y la referencia al pedido<!-- Ordine --> que se desea modificar.
Las Sustituciones<!-- Sostituzioni --> y las Revocaciones<!-- Revoche -->, respectivamente, reemplazan y anulan tanto el pedido<!-- Ordine --> indicado como todas las demás Sustituciones<!-- Sostituzioni --> y Revocaciones<!-- Revoche --> ya transmitidas, referidas al pedido inicial<!-- Ordine iniziale --> correspondiente.
El pedido inicial vinculado<!-- Ordine iniziale collegato --> puede ser usado exclusivamente para dejar constancia de que el nuevo proceso que se desea iniciar está relacionado con un proceso anterior y nunca debe utilizarse en sustitución de los otros instrumentos (Pedido de revocación<!-- Ordine di revoca -->, Pedido sustitutivo<!-- Ordine sostitutivo --> y Pedido de confirmación<!-- Ordine di riscontro -->) específicamente diseñados para revocar, sustituir (o integrar), confirmar o rechazar otro documento.

## Respuesta<!-- Risposta -->

La *Respuesta<!-- Risposta -->* es el documento con el que el Proveedor (Remitente) acepta, declina o propone cambios a un pedido<!-- Ordine --> recibido del Cliente (Destinatario).
**La Respuesta<!-- Risposta --> está preparada en el formato descrito por la especificación PEPPOL Order Response transaction 3.0.**
Con la Respuesta<!-- Risposta -->, el Proveedor puede comunicar al Cliente que:
- ha recibido el pedido<!-- Ordine --> (Respuesta de recepción<!-- Risposta di ricezione -->), pero todavía no lo ha procesado. Evidentemente, se trata de una comunicación interlocutoria que no contiene indicación alguna sobre "si y cómo" el Proveedor pretende dar curso al pedido<!-- Ordine -->. La Respuesta de recepción<!-- Risposta di ricezione --> es una respuesta<!-- Risposta --> sin líneas de pedido<!-- linee d’ordine -->, que contiene la indicación de que se trata de una "recepción" ("AB") y la referencia al pedido<!-- Ordine --> que se notifica como recibido;
- pretende proceder con el pedido<!-- Ordine --> recibido (Respuesta de aceptación<!-- Risposta di accettazione -->). La Respuesta de aceptación<!-- Risposta di accettazione --> es una respuesta<!-- Risposta --> sin líneas de pedido<!-- linee d’ordine -->, que contiene la indicación de que se trata de una "Aceptación" y la referencia al pedido<!-- Ordine --> que se desea aceptar;
- rechaza el pedido<!-- Ordine --> recibido (Respuesta de rechazo<!-- Risposta di diniego -->). La Respuesta de rechazo<!-- Risposta di diniego --> es una respuesta<!-- Risposta --> sin líneas de pedido<!-- linee d’ordine -->, que contiene la indicación de que se trata de un "Rechazo" y la referencia al pedido<!-- Ordine --> que se desea rechazar;
- pretende proceder con el pedido<!-- Ordine --> recibido introduciendo algunas modificaciones (Respuesta con cambios<!-- Risposta con modifiche -->). La Respuesta con cambios<!-- Risposta con modifiche -->, que contiene la indicación de que se trata de una "Modificación" y la referencia al pedido<!-- Ordine --> que se desea modificar, debe contener todas las líneas de pedido<!-- linee d’ordine -->, tanto las que se desean mantener como las que se desean modificar, ya que integra el pedido<!-- Ordine --> previamente transmitido al que hace referencia.
Las Respuestas con cambios<!-- Risposte con modifiche --> y las Respuestas de rechazo<!-- Risposte di diniego -->, respectivamente, integran y anulan tanto el pedido<!-- Ordine --> indicado como todas las demás modificaciones<!-- Modifiche --> y revocaciones<!-- Revoche --> ya transmitidas, referidas al mismo pedido inicial<!-- Ordine iniziale -->.

La Respuesta<!-- Risposta --> a un pedido<!-- Ordine --> revocado no tiene efectos.

## Pedido de confirmación<!-- Ordine di Riscontro -->

El *Pedido de confirmación<!-- Ordine di riscontro -->* es el documento con el que el Cliente (Remitente) confirma, rechaza o sustituye (Pedido de confirmación sustitutivo<!-- Ordine di riscontro sostitutivo -->) un pedido preacordado<!-- Ordine pre-concordato --> o una respuesta<!-- Risposta --> enviadas por el Proveedor (Destinatario).
**El Pedido de confirmación<!-- Ordine di riscontro -->, por tanto, no es más que un pedido<!-- Ordine --> que hace referencia a un documento enviado por el Proveedor. En consecuencia, está preparado en el mismo formato, que se describe en la especificación PEPPOL Order transaction 3.0.**
Con el Pedido de confirmación<!-- Ordine di riscontro -->, el Cliente puede comunicar al Proveedor:
- que confirma un pedido preacordado<!-- Ordine pre-concordato --> o una respuesta<!-- Risposta --> enviada por el Proveedor (Pedido de confirmación por confirmación<!-- Ordine di riscontro per conferma -->). El Pedido de confirmación por confirmación<!-- Ordine di riscontro per conferma --> es un pedido<!-- Ordine --> que contiene la indicación de que se trata de una "Confirmación" y la referencia al pedido preacordado<!-- Ordine pre-concordato --> o a la respuesta<!-- Risposta --> que se desea confirmar;
- que rechaza un pedido preacordado<!-- Ordine pre-concordato --> o una respuesta<!-- Risposta --> enviada por el Proveedor (Pedido de confirmación por rechazo<!-- Ordine di riscontro per diniego -->). El Pedido de confirmación por rechazo<!-- Ordine di riscontro per diniego --> es un pedido<!-- Ordine --> que contiene la indicación de que se trata de un "Rechazo" y la referencia al pedido<!-- Ordine --> o a la respuesta<!-- Risposta --> que se desea rechazar;
- que desea sustituir un pedido preacordado<!-- Ordine pre-concordato --> o una respuesta<!-- Risposta --> enviada por el Proveedor (Pedido de confirmación sustitutivo<!-- Ordine di riscontro sostitutivo -->). El Pedido de confirmación sustitutivo<!-- Ordine di riscontro sostitutivo --> es un nuevo pedido<!-- Ordine -->, completo con todas las líneas de pedido<!-- linee d’ordine -->, que contiene la indicación de que se trata de una "Sustitución" y la referencia al pedido<!-- Ordine --> o a la respuesta<!-- Risposta --> que se desea sustituir.

Los Pedidos de confirmación sustitutivos<!-- Ordini di riscontro sostitutivi --> y los Pedidos de confirmación por rechazo<!-- Ordini di riscontro per diniego -->, respectivamente, reemplazan y anulan tanto el pedido preacordado<!-- Ordine pre-concordato --> o la respuesta<!-- Risposta --> indicada como todas las demás sustituciones<!-- Sostituzioni --> y revocaciones<!-- Revoche --> ya transmitidas, referidas al pedido inicial<!-- Ordine iniziale --> correspondiente.
El Pedido de confirmación<!-- Ordine di riscontro --> referido a un pedido preacordado<!-- Ordine pre-concordato --> revocado no tiene efectos.

## Pedido PRE-Acordado<!-- Ordine PRE-Concordato -->

El *Pedido preacordado<!-- Ordine pre-concordato -->* es el documento representativo de la orden de compra de bienes y servicios, emitido por el Proveedor (Remitente) en lugar del Cliente (Destinatario), de común acuerdo con este último.
Un pedido preacordado<!-- Ordine pre-concordato --> consta de una o más líneas de pedido<!-- linee d’ordine -->, en las cuales se indica el bien o servicio objeto de la compra, la cantidad y el precio.
**El Pedido preacordado<!-- Ordine pre-concordato --> está preparado en el formato descrito por la especificación PEPPOL Order Agreement transaction 3.0.**
Un pedido preacordado<!-- Ordine pre-concordato --> puede:
- determinar, independientemente de otros pedidos preacordados<!-- Ordini pre-concordati --> previamente emitidos, los bienes y/o servicios que el Cliente desea adquirir y las instrucciones correspondientes para llevar a cabo la prestación (Pedido preacordado inicial<!-- Ordine pre-concordato iniziale -->). Un pedido preacordado inicial<!-- Ordine pre-concordato iniziale --> no contiene referencias a otros pedidos preacordados<!-- Ordini pre-concordati -->;
- determinar, independientemente de otros pedidos preacordados<!-- Ordini pre-concordati --> previamente emitidos, los bienes y/o servicios que el Cliente desea adquirir y las instrucciones correspondientes para efectuar el suministro y, sin embargo, estar genéricamente relacionado con otro documento (Pedido preacordado inicial vinculado<!-- Ordine pre-concordato iniziale collegato -->). Un pedido preacordado inicial vinculado<!-- Ordine pre-concordato iniziale collegato --> contiene la referencia al documento al que está vinculado y la indicación de que se trata de un simple "enlace".
- revocar un pedido preacordado<!-- Ordine pre-concordato --> previamente emitido (Pedido preacordado de revocación<!-- Ordine pre-concordato di revoca -->). El pedido preacordado de revocación<!-- Ordine pre-concordato di revoca --> es un pedido preacordado<!-- Ordine pre-concordato --> que contiene la indicación de que se trata de una "revocación" ("Cancelled") y la referencia al pedido preacordado<!-- Ordine pre-concordato --> que se desea revocar, además tiene una sola línea de pedido<!-- linea d’ordine --> sin contenido.
- sustituir un pedido preacordado<!-- Ordine pre-concordato --> previamente emitido (Pedido preacordado sustitutivo<!-- Ordine pre-concordato sostitutivo -->). La modificación del pedido preacordado<!-- Modifica di ordine pre-concordato --> es un nuevo pedido preacordado<!-- Ordine pre-concordato -->, completo de todas las líneas de pedido<!-- linee d’ordine -->, que contiene la indicación de que se trata de una "sustitución" ("Revised") y la referencia al pedido preacordado<!-- Ordine pre-concordato --> que se desea modificar.

Las Sustituciones<!-- Sostituzioni --> y las Revocaciones<!-- Revoche -->, respectivamente, reemplazan y anulan tanto el pedido preacordado<!-- Ordine pre-concordato --> indicado como todas las demás sustituciones<!-- Sostituzioni --> y revocaciones<!-- Revoche --> ya transmitidas, referidas al pedido preacordado inicial<!-- Ordine pre-concordato iniziale --> correspondiente.
El pedido preacordado inicial vinculado<!-- Ordine pre-concordato iniziale collegato --> puede ser utilizado exclusivamente para dejar constancia de que el nuevo proceso que se desea iniciar está relacionado con un proceso anterior y nunca debe utilizarse en sustitución de los otros instrumentos (Pedido preacordado de revocación<!-- Ordine pre-concordato di revoca -->, Pedido preacordado sustitutivo<!-- Ordine pre-concordato sostitutivo --> y Respuesta<!-- Risposta -->) específicamente diseñados para revocar, sustituir (o integrar), aceptar o rechazar otro documento.

## RELACIÓN CON EL ESTÁNDAR PEPPOL<!-- RELAZIONE CON LO STANDARD PEPPOL -->

Con relación a la orden de compra de bienes y servicios, el estándar PEPPOL BIS versión 3.0 define tres tipos de documento:
− Order transaction 3.0;       
− Order Response transaction 3.0;     
− Order Agreement transaction 3.0;       
y tres procesos (denominados perfiles):
− BIS Order only 3.0;     
− BIS Ordering 3.0;      
− BIS Order Agreement 3.0.