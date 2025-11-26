---
title: Tipos de solicitud y cambio de estados
sidebar_position: 6
ai_generated: true
---

El estado **Recibido<!-- Ricevuto -->** es el estado en el que se encuentra una solicitud<!-- ordine --> que ha sido recibida por Fluentis sin errores, pero aún no ha sido ingresada como pedido de cliente<!-- ordine cliente -->.
La solicitud<!-- ordine --> puede ser recibida con el estado “Con error”, es decir, la solicitud<!-- ordine --> ha sido recibida e ingresada pero presenta datos incorrectos, como el precio de una línea en 0, o ausentes, como el código NSO del cliente. Por lo tanto, deberá ser corregido por el usuario antes de poder realizar otros cambios de estado.
Desde el estado Recibido<!-- Ricevuto --> se pueden ejecutar 2 comandos diferentes:        
- **Importar pedido<!-- Importa ordine -->** lleva la solicitud<!-- ordine --> al estado *Ingresado<!-- Inserito -->*, es decir, la solicitud<!-- ordine --> se genera en los documentos de Fluentis;
- **Anular documento<!-- Annulla documento -->**, que impide que la solicitud<!-- ordine --> sea creada en Fluentis y la pasa al estado *Anulada<!-- Annullata -->*, por haber sido rechazada por el proveedor.

## Solicitud simple<!-- Ordinazione semplice -->

En el proceso de solicitud<!-- ordinazione --> simple, donde solo el cliente envía las solicitudes<!-- ordini --> y el proveedor no puede responder en el flujo sino que debe hacerlo por otros canales alternativos (correo electrónico, fax, etc.), desde el estado “Ingresado<!-- Inserito -->”
se puede pasar a los siguientes estados:
- *Esperando anulación por parte del cliente<!-- Attendere annullamento dal cliente -->*, es decir, la solicitud<!-- ordine --> se pone en estado de suspensión a la espera de una anulación por parte del cliente, que probablemente ha comunicado la anulación previamente por otros canales (correo electrónico, teléfono, etc.)
- *Esperando sustitución por parte del cliente<!-- Attendere sostituzione dal cliente -->*, es decir, la solicitud<!-- ordine --> se pone en estado de suspensión a la espera de la recepción de una orden<!-- ordine --> sustitutiva por parte del cliente, quien probablemente ha comunicado la sustitución previamente por otros canales (correo electrónico, teléfono, etc.)        

El cliente puede realizar una solicitud de sustitución de la solicitud<!-- ordine -->.
En este caso la solicitud<!-- ordine --> original pasará al estado “En solicitud de sustitución<!-- In richiesta di sostituzione -->”. Desde aquí se pueden
seleccionar 2 cambios de estado:
- *Volver a ingresado<!-- Riporta in inserito -->* en caso de no aceptar la sustitución y se quiera devolver la solicitud<!-- ordine --> al estado “Ingresado<!-- Inserito -->” para poder gestionarla con los valores originales;
- *Sustitución por parte del cliente<!-- Sostituzione da cliente -->* en caso de querer aceptar la sustitución de la solicitud<!-- ordine -->.       

En el momento de la recepción de la solicitud sustitutiva<!-- ordine sostitutivo --> se generará una nueva línea con estado *En espera de aceptación<!-- In attesa di accettazione -->*, la cual hace referencia a la nueva solicitud<!-- ordine -->.
En caso de aceptación de la sustitución de la nueva solicitud<!-- ordine --> a la solicitud inicial, la línea *En espera de aceptación<!-- In attesa di accettazione -->* pasará al estado *Ingresado<!-- Inserito -->*, mientras que la línea de la solicitud original *En solicitud de sustitución<!-- In richiesta di sostituzione -->* pasará al estado *Sustituida por cliente<!-- Sostituito da cliente -->*.

## Solicitud completa<!-- Ordinazione completa -->

En el proceso de solicitud<!-- ordinazione --> completa, donde el cliente y el proveedor pueden enviarse solicitudes<!-- ordini --> mediante NSO, desde el estado “Ingresado<!-- Inserito -->” se puede pasar a los siguientes estados:
- *Envío respuesta de confirmación<!-- Spedizione risposta di conferma -->* realiza el envío de una notificación al cliente que confirma la aceptación de la solicitud<!-- ordine --> por parte del proveedor (IBSA). La solicitud<!-- ordine --> pasa al estado “Confirmado por proveedor<!-- Confermato da fornitore -->” y se creará una línea adicional para el archivo de respuesta de la confirmación.
- *Envío de respuesta de denegación<!-- Spedizione risposta di diniego -->* envía una notificación de no aceptación de la solicitud<!-- ordine --> al cliente, pasando la solicitud<!-- ordine --> al estado *Anulado por proveedor<!-- Annullato da Fornitore -->*.
- *Creación de respuesta de modificación<!-- Creazione risposta di modifica -->* permite modificar el documento respecto al código de artículo, cantidad y precio de las líneas individuales y enviarlo al cliente, quien podrá aceptar o rechazar la solicitud modificada. Se mostrará un mensaje de aviso de cierre de la solicitud original y de creación de una nueva solicitud, sobre la cual se realizarán las modificaciones.
Una vez realizadas las modificaciones sobre la solicitud<!-- ordine -->, podrá ser enviada mediante el cambio de estado *En respuesta de modificación<!-- In risposta di modifica -->*. La nueva solicitud<!-- ordine --> de modificación pasará al estado “En espera de respuesta<!-- In attesa di riscontro -->”. Además, se creará una nueva línea de notificación.
- *Envío de respuesta de recepción<!-- Spedizione risposta di ricevimento -->* simplemente envía una notificación de recepción de la solicitud<!-- ordine --> al cliente y la solicitud pasa al estado *Recibido por proveedor<!-- Ricevuto da fornitore -->*.  

## Solicitud pre-acordada<!-- Ordinazione pre-concordata -->

En la solicitud pre-acordada<!-- ordinazione pre-concordata -->, el flujo inicia desde el proveedor quien, como se acordó anteriormente con el cliente por otros canales (correo electrónico, fax, ...), emite la solicitud NSO<!-- ordine NSO -->.         

El estado inicial que asume una solicitud<!-- ordine --> pre-acordada es *Creada Pre-Acordada<!-- Creato Pre-Concordato -->*, desde donde se puede realizar el cambio de estado *Control Pre-Acordado<!-- Controllo Pre-Concordato -->*, que lleva la solicitud<!-- ordine --> al estado *Controlada<!-- Controllato -->*. Desde el estado *Controlada<!-- Controllato -->* es posible realizar 2 cambios de estado:       
- *Volver a estado Pre-Acordado<!-- Riporta in stato Pre-Concordato -->* lleva la solicitud<!-- ordine --> al estado *Creada Pre-Acordada<!-- Creato Pre-Concordato -->*       
- *Generación Pre-Acordada<!-- Generazione Pre-Concordato -->* realiza la generación del archivo de la solicitud<!-- ordine --> pre-acordada pasando su estado a *Generada<!-- Generata -->*, que a su vez puede sufrir 2 cambios de estado:       
> - *Envío Pre-Acordado<!-- Spedizione Pre-Concordato -->*, que lleva la solicitud<!-- ordine --> al estado *Para enviar<!-- Da spedire -->*, es decir, la solicitud<!-- ordine --> es enviada al cliente y está lista para ser físicamente gestionada;
> - *Volver a Controlada<!-- Riporta in controllato -->*, que lleva la solicitud<!-- ordine --> al estado *Controlada<!-- Controllato -->*.