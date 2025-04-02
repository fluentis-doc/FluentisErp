---
title: Tipos de orden y cambio de estados (Tipi ordinazione e cambio stati)
sidebar_position: 6
---

El estado **ricevuto** es aquel en el que se encuentra una orden que ha sido recibida por Fluentis sin errores, pero que aún no ha sido ingresada como pedido del cliente.  
La orden puede ser recibida con el estado “En error (In errore)”, lo que significa que la orden ha sido recibida e ingresada, pero tiene datos incorrectos, como un precio de línea a 0, o datos faltantes, como el código NSO del cliente. Por lo tanto, deberá ser corregida por el usuario antes de poder realizar más cambios de estado.  
Desde el estado Recibido se pueden ejecutar 2 comandos diferentes:       
- **importa ordine** lleva la orden al estado *inserito*, es decir, la orden se genera en los documentos de Fluentis;  
- **annulla documento**, que asegura que la orden no se cree en Fluentis y pasa al estado *annullata*, ya que fue rechazado por el proveedor.

## Orden simple (Ordinazione semplice)

En el proceso de orden simple, donde solo el cliente envía los pedidos y el proveedor no puede responder en el flujo, sino que debe hacerlo a través de otros canales alternativos (correo electrónico, fax, etc.), desde el estado “Insertado (Inserito)” se puede pasar a los siguientes estados:  
- *attendere annullamento dal cliente*, lo que significa que la orden se coloca en un estado de suspensión a la espera de una anulación por parte del cliente que probablemente ya comunicó la anulación a través de otros canales (correo, teléfono, etc.);  
- *attendere sostituzione dal cliente*, lo que significa que la orden se coloca en un estado de suspensión a la espera de recibir un pedido sustituto por parte del cliente que probablemente ya comunicó la sustitución a través de otros canales (correo, teléfono, etc.).        

El cliente puede solicitar la sustitución de la orden. En este caso, la orden original pasará al estado “En solicitud de sustitución (In richiesta di sostituzione)”. Desde aquí se podrán seleccionar 2 cambios de estado:  
- *riporta in inserito* en caso de que no se acepte la sustitución y se quiera devolver la orden al estado “Insertado” para poder despacharla con los valores originales;  
- *sostituzione da cliente* en caso de que se quiera aceptar la sustitución de la orden.

Al recibir el pedido sustituto, se generará una fila adicional con el estado *in attesa di accettazione*, la cual se refiere al nuevo pedido. En caso de aceptar la sustitución del nuevo pedido al pedido inicial, la fila *En espera de aceptación* pasará al estado *inserito*, mientras que la fila de la orden original *in richiesta di sostituzione* pasará al estado *sostituito da cliente*.

## Orden completa (Ordinazione completa)

En el proceso de orden completa, donde el cliente y el proveedor pueden enviar pedidos a través de NSO, desde el estado “Insertado (Inserito)” se puede pasar a los siguientes estados:  
- *spedizione risposta di conferma* envía una notificación al cliente que confirma la aceptación del pedido por parte del proveedor (IBSA). La orden pasa al estado “Confirmado por el proveedor (Confermato da fornitore)” y se creará una fila adicional para el archivo de respuesta de la confirmación.  
- *spedizione risposta di diniego* envía una notificación de no aceptación del pedido al cliente, con la orden pasando al estado *annullato da fornitore*.  
- *creazione risposta di modifica* permite modificar el documento respecto al código del artículo, cantidad y precio de las líneas individuales y enviarlo al cliente, quien podrá aceptar o no este pedido modificado. Se mostrará un mensaje de advertencia de cierre de la orden original y de creación de un nuevo pedido, sobre el cual se realizarán las modificaciones. Una vez realizadas las modificaciones en el pedido, este podrá ser enviado mediante el cambio de estado *in risposta di modifica*. El nuevo pedido de modificación pasará al estado “En espera de respuesta (In attesa di riscontro)”. También se creará una nueva fila de notificación.  
- *spedizione risposta di ricevimento*, en cambio, envía una simple notificación de recibo del pedido al cliente, pasando la orden al estado *ricevuto da fornitore*.

## Orden preacordada (Ordinazione pre-concordata)

En la orden preacordada, el flujo comienza por parte del proveedor que, como se acordó previamente con el cliente a través de otros canales (correo electrónico, fax, etc.), emite el pedido NSO.

El estado inicial que asume un pedido preacordado es el estado *creato pre-concordato*, desde donde se puede realizar el cambio de estado *controllo pre-concordato*, que lleva la orden al estado *controllato*. Desde el estado *controllato* se pueden realizar 2 cambios de estado:  
- *Regresar a estado Pre-Acordado (Riporta in stato Pre-Concordato)*, regresa la orden al estado *creato pre-concordato*;  
- *generazione pre-concordato* realiza la generación del archivo del pedido preacordado, cambiando su estado a *generata*, que a su vez puede sufrir 2 cambios de estado:  
> - *spedizione pre-concordato*, que lleva el pedido al estado *da spedire*, es decir, el pedido es enviado al cliente y está listo para ser despachado físicamente;  
> - *riporta in controllato*, que regresa la orden al estado *controllato*.