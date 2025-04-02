---
title: Estados de los documentos en Fluentis (Stati dei documenti in Fluentis)
sidebar_position: 5
---

El envío y la recepción de documentos electrónicos del ciclo activo y pasivo requiere que el usuario gestione una serie de ESTADOS operativos que definen el flujo de gestión del documento de factura, desde su generación hasta el envío a Fluentis Business Hub para la transferencia efectiva al SdI.  
Los estados se pueden gestionar de forma individual, es decir, dentro de la gestión de un único documento, o de manera masiva; cada estado puede prever el paso a un estado ANTERIOR de gestión o a uno SUCESIVO. Las acciones y la gestión de los documentos electrónicos pueden estar sujetas a restricciones operativas que pueden reservar la gestión de los estados de los documentos solo a roles y/o usuarios predefinidos, configurando adecuadamente el menú de acciones relativo.  
La normativa actual relativa a las comunicaciones que deben enviarse a la Agencia de Impuestos establece que los sujetos pasivos a efectos de IVA deben comunicar los datos relacionados con las operaciones de entrega de bienes/prestación de servicios realizadas (Gestión del ciclo activo) y RECIBIDAS también de sujetos NO identificados/no residentes en el territorio del Estado utilizando el mismo formato previsto para las facturas electrónicas italianas.  
Si para los documentos EMITIDOS es posible utilizar el mismo formato previsto para las facturas electrónicas italianas, para el envío al SdI de los documentos de compra de proveedores extranjeros se requiere un formato específico y la firma para estos archivos es obligatoria.  
En Fluentis, la generación del archivo XML de este tipo es posible tras el registro contable del documento recibido y la posterior gestión, dentro del registro contable, de la generación del archivo XML y su envío al SdI con las mismas operaciones de cambio de estado previstas para el ciclo activo, o a través de la gestión de los archivos desde la función de Facturación electrónica con sujetos no residentes.

El significado de los diferentes estados en detalle:

| Estado documento | Descripción | Acciones posibles |
| :-- | :-- | :-- | 
| No examinada (Non esaminata) | El documento ha sido generado y aún no se han realizado acciones relacionadas con la gestión del documento electrónico | *Sucesivas*: Controlado, Anulada, Excluida. *Precedentes*: Eliminación manual del documento de la gestión | 
| Controlado (Controllato) | El documento ha sido sometido a controles preliminares por parte del operador | *Sucesivas*: Generada, Anulada, Excluida. *Precedentes*: No examinada (vuelvo al estado inicial del documento) | 
| Generada (Generata) | Se ha creado el archivo XML relativo al documento electrónico. A partir de este momento es posible proceder con los estados sucesivos para enviar el archivo al Fluentis Business Hub o descargar el archivo XML para gestiones externas. El documento en este estado puede ser contabilizado | *Sucesivas*: Firmada, A enviar, Anulada, Excluida. *Precedentes*: Controlada | 
| Firmada (Firmata) | El documento ha sido firmado externamente con un certificado de firma Cadeso Xades y reimportado en Fluentis en el nuevo formato | *Sucesivas*: A enviar, Anulada, Excluida. *Precedentes*: Generada | 
| A enviar (Da spedire) | Este estado, que debe utilizarse en caso de que el canal Fluentis Business Hub esté correctamente configurado, coloca el documento en la lista de documentos que BizLink debe procesar para el envío al SdI. PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS, ESTE CAMBIO DE ESTADO BLOQUEA LA FACTURA A CUALQUIER OTRA ACCIÓN | *Sucesivas*: NINGUNA ACCIÓN MANUAL. El estado se actualiza por Fluentis Business Hub NO GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS | 
| Anulada (Annullata) | El documento no debe ser enviado al cliente final, pero sigue siendo válido a efectos de IVA | *Sucesivas*: NINGUNA ACCIÓN MANUAL. *Precedentes*: No examinada | 
| Excluida (Esclusa) | El documento ha sido creado pero no se incluye entre los que se deben enviar al SdI (por ejemplo, nota de abono interna o cliente no residente en Italia y no sujeto a facturación electrónica con envío a SdI) | *Sucesivas*: NINGUNA ACCIÓN MANUAL. *Precedentes*: No examinada | 
| No vinculada (Non abbinata) (ciclo pasivo) | El documento ha sido recibido por el servicio Fluentis Business Hub y no ha sido vinculado a ningún elemento contable (NO GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS) | *Sucesivas*: Recibida | 
| Recibida (Ricevuta) (ciclo pasivo) | El documento ha sido vinculado a la inscripción contable/documento de compra/documento de compensación (NO GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS) | *Precedentes*: No vinculada | 

Si el envío se realiza a través de Fluentis Business Hub, después de marcar el documento creado con el estado "A enviar", los estados sucesivos adquiridos directamente del Fluentis Business Hub pueden ser:

ESTOS ESTADOS NO SON GESTIONADOS PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FBH CON FLUENTIS

| Estado documento | Descripción | Acciones posibles | Notificación XML del SDI |
| :-- | :-- | :-- | :-- |
| En Fluentis Business Hub (In Fluentis Business Hub) | El documento ha sido recibido en Fluentis Business Hub y está a la espera de ser recogido por el SdI | Es necesario esperar una respuesta del SdI que verificará y, eventualmente, recogerá el archivo | NO |
| En SDI (In SDI) | El documento ha sido recibido por el SdI | *Sucesivas*: No conforme, Emitida | NO |
| No conforme (Non conforme) | El documento NO ha pasado los controles formales previstos por el SdI y deberá ser reemitido. Los cambios de estado sucesivos son MANUALES y a cargo del usuario | *Precedentes*: No examinada, Anulada, Excluida | SI |
| Entregada (Consegnata) | El documento ha sido entregado al destinatario | El ciclo de envío se ha completado | SI |
| Falta de entrega (Mancata consegna) | El SdI no pudo entregar el documento al destinatario y lo pondrá a disposición en su área reservada (por ejemplo, por indisponibilidad de la dirección telemática de recepción o porque dicha dirección no ha sido indicada en la factura) | *Sucesivas*: Notificación al cliente | SI |
| Notificación al cliente (Notifica cliente) | A raíz de la falta de entrega por parte del SdI, se realiza una notificación manual al cliente de la factura. Este estado es MANUAL y a cargo del usuario | El ciclo de envío se ha completado | NO | 
| Documento emitido (Documento emesso) (Solo PA) | El documento ha sido considerado válido por el SdI que procede con los intentos de entrega hacia la PA | *Sucesivas*: Entregada, Falta de entrega | NO | 
| Rechazada (Respinta) (solo PA) | El documento destinado a la PA ha sido rechazado por la Administración Pública | *Precedentes*: Por examinar | SI |
| Aprobada (Approvata) | El documento destinado a la PA ha sido aceptado por la Administración Pública | El ciclo de envío se ha completado | SI |
| Aceptada por caducidad (Accettata per decorrenza) | Si dentro del plazo de 15 días desde la recepción de la factura, el SdI no recibe ninguna comunicación, el SdI enviará una notificación de CADUCIDAD DE PLAZOS tanto al sujeto transmisor como al sujeto receptor | | SI |

El estado de los documentos enviados a Fluentis Business Hub se actualiza de manera silenciosa mediante algunos procedimientos automáticos previstos en BizLink.  
En los siguientes párrafos se describe el detalle de cada estado gestionado.

## Estado documento NO EXAMINADA

Simultáneamente al momento de creación de un nuevo documento de venta o de un registro contable de compra para sujetos no residentes, en el menú de cintas, en la sección de Facturación electrónica, el estado propuesto es “No examinada” (Non esaminata), es decir, aún no evaluado por el operador para el envío a SdI.  
Una vez ingresado y guardado el documento con la información correspondiente, es posible proceder modificando el estado del documento a uno de los previstos para el estado NO EXAMINADA, es decir:  
- *Controlada*: verificada y lista para ser gestionada en formato electrónico  
- *Anulada*: la factura no debe ser enviada a SdI pero debe mantenerse válida para los registros contables y de IVA  
- *Excluida*: el documento ingresado no debe ser enviado a SdI  

## Estado documento CONTROLADA

El documento/la inscripción en el estado CONTROLADA ha sido validada por el operador y puede ser procesado para las etapas siguientes para la elaboración del mismo y el envío a SdI, o puede ser devuelto al estado POR EXAMINAR para posibles modificaciones o adiciones.  
Los estados sucesivos de procesamiento del documento para el envío a SdI o para la exclusión del envío pueden ser:  
- *Generada*: se crea el archivo XML relativo al documento ingresado y se prepara para el envío  
- *Anulada*: la factura no debe ser enviada a SdI pero debe mantenerse válida para los registros contables y de IVA  
- *Excluida*: el documento ingresado no debe ser enviado a SdI  

## Estado documento GENERADA

El paso de los documentos de factura o de los registros contables al estado GENERADA implica la creación simultánea del documento XML de acuerdo con las especificaciones técnicas previstas por la Agencia de Impuestos para el tipo de documento en gestión. Durante esta fase, se realizan algunos controles relativos a la presencia de la información obligatoria para la compilación y si en la sección anagráfica dicha información no ha sido registrada correctamente, se emitirá una advertencia de error relativa al dato faltante.  
El documento de factura/nota de crédito... en el estado GENERADA también adquiere el estado interno de gestión IMPRESA y, por lo tanto, es posible a partir de este momento proceder con la contabilización del documento. La  
inscripción contable en el estado GENERADA crea el archivo XML correspondiente.  
El archivo XML generado se guarda en la gestión documental de Fluentis, por lo que siempre está disponible desde las diversas funcionalidades que permiten su acceso y desde la función **Registro de Documentos SdI** prevista en el menú de cintas de las diversas funcionalidades.  
El archivo XML en el estado Generada puede ser descargado y gestionado para el envío con herramientas externas a Fluentis o puede ser enviado a Fluentis Business Hub a través de la gestión de uno de los estados operativos previstos.  
Si para el contacto o para la empresa se ha configurado la gestión de la Firma en los documentos de facturación electrónica, en los estados en gestión también se prevé FIRMADA:  
Sin embargo, si no se prevé la gestión de la firma, los estados en gestión son:  
- *Controlada*: modifico el estado del documento para volver al estado ANTERIOR de controlado  
- *Anulada*: el documento ingresado o registrado no debe ser enviado a SdI pero debe mantenerse válida para los registros contables y de IVA  
- *Excluida*: el documento ingresado no debe ser enviado a SdI  
- *A enviar*: el documento se incluye en la lista de documentos a enviar a Fluentis Business Hub  
- *Firmada*: el flujo de atribución de este estado busca, en un recorrido previamente configurado, el archivo firmado correspondiente al archivo XML generado por el procedimiento. Este estado es visible SOLO si se selecciona la opción "Facturación electrónica firmada" en el registro de contacto (Configuración de registros de contactos) o en las Configuraciones de Facturación Electrónica de la empresa (Configuración de conexión a Fluentis Business Hub) y es, según las normativas vigentes, un estado OPCIONAL para los documentos de venta emitidos a sujetos residentes en Italia, mientras que es OBLIGATORIO para los documentos emitidos a sujetos no residentes, no establecidos, no identificados en Italia.  
Antes de proceder con el cambio de estado a FIRMADA, es necesario proceder con la firma de los documentos en el estado GENERADA:  
> - si se ha configurado correctamente el campo *Carpeta de creación de archivo para firmar* en *Configuración de facturación electrónica de la empresa* (Configuración de conexión a Fluentis Business Hub), cada vez que se genera el archivo XML, Fluentis guarda una copia en la ruta indicada. Si el campo no ha sido configurado correctamente, se podrá descargar el archivo XML desde la función *Registro de documentos SdI* a través de la acción Descargar Adjunto del menú de cintas y guardar el archivo en una carpeta conveniente en el sistema de archivos.  
> - proceder con la firma del archivo utilizando cualquier software de firma disponible, que permita la colocación de la firma digital en formato Cades o Xades (como se establece en las especificaciones técnicas normativas) y asegurarse de guardar el archivo firmado en la carpeta indicada en las configuraciones de facturación electrónica en el campo Carpeta de archivos firmados.  
> - Modificar el estado del documento a FIRMADA: automáticamente el procedimiento buscará el archivo firmado en la carpeta indicada en el punto anterior y lo adquiere en el flujo procedimental de Fluentis. En caso de envío a Fluentis Business Hub, será ESTE archivo adquirido el objeto de la transmisión a SdI.  

## Estado documento FIRMADA

El documento en el estado FIRMADA puede ser descargado y gestionado externamente a Fluentis, o enviado a Fluentis Business Hub para el envío a SdI.  
Para descargar el documento firmado es posible acceder a la función “Registro de documentos SdI” y ejecutar la descarga en el panel Adjunto a través de la acción “Descargar Adjunto” del menú de cintas o desde el panel Registro de documentos SdI a través de la acción “Descargar el contenido del registro”.  
Para proceder con la gestión del documento se puede seleccionar uno de los estados propuestos:  
- *Generada*: anula la operación de firma del archivo y vuelve al estado GENERADO del archivo XML  
- *A enviar*: el documento se incluye en la lista de documentos a enviar a Fluentis Business Hub  
- *Anulada*: el documento o el registro contable no se refieren a sucesos que deben ser enviados a SdI, pero deben mantenerse válidos para los registros contables y de IVA  
- *Excluida*: el documento/la inscripción contable ingresada no debe ser enviada a SdI  

## Estado documento ANULADA

El documento/la inscripción contable en el estado ANULADA se establece manualmente por el usuario cuando el documento es relevante a efectos de IVA y contables, pero no debe incluirse en el ciclo de gestión del Sistema de Intercambio: un ejemplo podría ser la factura emitida del ciclo activo de Fluentis que recibe del Sistema de Intercambio una notificación de Rechazo y, por lo tanto, si el documento ya ha sido adquirido en contabilidad, es necesario proceder con:  
- la anulación de la factura enviada, con el fin de que el documento ya no sea parte de ningún ciclo de envío  
- el registro de un documento de anulación válido solo a efectos contables, que no debe ser transmitido al SdI y que, por lo tanto, tendrá el estado de EXCLUIDA  
- la emisión de un nuevo documento con una numeración que haga referencia a la inicial, para ser enviado nuevamente al SdI.  

Si el documento está en el estado Anulada pero se hace necesario poder gestionar nuevamente el documento volviendo al estado inicial, es posible modificar su estado a NO EXAMINADA y proceder con las modificaciones en el documento original.

## Estado documento EXCLUIDA

El Estado del documento “Excluida” es establecido manualmente por el usuario y se refiere a los documentos que, por su naturaleza, no deben incluirse en el flujo de gestión de la facturación electrónica para el Sistema de Intercambio. Algunos ejemplos de los documentos en este estado:  
- Notas de abono internas relacionadas con documentos de factura que han sido rechazados por el SdI y que deben ser reemitidos  
- Documentos emitidos a sujetos extranjeros/no residentes para los cuales no se pretende gestionar el envío a través de los estados de procesamiento previstos para la facturación electrónica al SdI.  

Si el documento está en el estado Anulada pero se hace necesario poder gestionar nuevamente el documento volviendo al estado inicial de la factura, es posible modificar su estado a NO EXAMINADA y proceder con las modificaciones en el documento original.

## Estado documento A ENVIAR y EN FLUENTIS BUSINESS HUB

Los documentos generados por el ciclo activo de Fluentis y listos para ser enviados al SdI deben ser marcados con el estado A ENVIAR (DA SPEDIRE): este estado, que debe utilizarse en caso de que el canal Fluentis Business Hub esté correctamente configurado, coloca el documento en la lista de documentos que BizLink debe procesar para el envío al SdI.  
No se prevén cambios de estado en esta condición porque el documento, colocado en una "cola de envío" de BizLink, será enviado al Fluentis Business Hub para su transmisión al SdI, a través de procesos automáticos que se ejecutan a intervalos regulares.  
Una vez que el documento se envía al servicio Fluentis Business Hub, el estado se modifica automáticamente a EN FLUENTIS BUSINESS HUB y se completan automáticamente las columnas relativas a la información del envío realizado:  
- *Estado SdI*: contiene la descripción del estado del documento, indicando tanto el estado de gestión interno de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente del SdI (ver párrafo ESTADOS DE LOS DOCUMENTOS).  
- *Nombre archivo SdI*: el nombre del archivo que se crea en el momento en que el documento avanza al estado GENERADA; en su formato original o posteriormente a la colocación de la firma digital, representa el archivo de factura a enviar al SdI (Nombre del archivo).  
- *Sdi Id*: el identificador único que el SdI asigna al documento en el momento de la recepción.  
- *Fecha de recepción Sdi*: la fecha en que el sistema de intercambio ha adquirido el documento enviado. Esta información se obtiene de la notificación de recepción que el SdI emite tras la recepción del envío y antes de proceder con los controles formales del archivo.  
- *Fecha de cierre*: la fecha de cierre del flujo de gestión (por ejemplo, documento Entregado).  
- *Fecha del último evento*: la fecha del último cambio de estado que ha ocurrido en el archivo, ya sea manualmente o como efecto del avance del procesamiento en el SdI.  

## Estado documento EN SDI

ESTE ESTADO NO ES GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS  

El documento es marcado automáticamente por los procesos de BizLink con el estado “EN SDI” (IN SDI) en el momento en que ha ocurrido el envío al SdI, y se ha prevenido la notificación de recepción a Fluentis Business Hub, como en el siguiente ejemplo:  
Simultáneamente a la registración de la notificación del SdI, se completan las columnas del formulario de Facturas de Venta con los campos:  
- *Sdi Id*: el identificador único que el SdI asigna al documento en el momento de la recepción.  
- *Fecha de recepción Sdi*: la fecha en que el sistema de intercambio ha adquirido el documento enviado. Esta información se obtiene de la notificación de recepción que el SdI emite tras la recepción del envío y antes de proceder con los controles formales del archivo.  

Al acceder al Registro de documentos SdI correspondiente al documento, en el panel “Registro de los documentos SdI”, en relación a la Transición Sistema de Intercambio, es posible visualizar la notificación de recepción.  
En este estado no es posible intervenir con una modificación manual del archivo, pero será necesario esperar la notificación de resultado del SdI que puede ser No conforme en caso de que no se hayan superado los controles formales, o Emitida en caso de que los controles previstos hayan sido superados y, por lo tanto, el SdI comienza los procedimientos de entrega.

## Estado documento NO CONFORME

ESTE ESTADO NO ES GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS  

Los documentos marcados con el estado NO CONFORME han sido rechazados por el sistema de Intercambio a raíz de los controles formales realizados en el momento de la recepción. En este caso, la notificación de rechazo también incluye la razón del rechazo y el documento, si aún no ha sido contabilizado, deberá ser reemitido con el mismo número y la misma fecha con la corrección oportuna de la información dentro de 5 días EFECTIVOS desde la fecha de rechazo.  
En la cuadrícula del formulario de Factura de venta, en relación al documento no conforme, se actualiza la columna Fecha del último evento con la fecha y la hora de la Notificación de rechazo recibida del SdI.  

Al acceder al Registro de documentos SdI del documento seleccionado, en el panel Registro de documentos SdI se muestra, en la fila correspondiente a la Transición Documento no conforme, la fecha y la hora del evento y se visualiza la notificación de rechazo con la razón.  
Es posible modificar manualmente el estado del documento dependiendo de las acciones que se deseen emprender posteriormente al rechazo:  
- NO EXAMINADA: marcando el documento con este estado, se entiende que se quiere devolver el documento al estado inicial previo a la elaboración. De hecho, este estado permite las modificaciones necesarias al documento para corregir las señales indicadas por el SdI. En este caso, el documento debe ser reemitido con el mismo número y fecha. *N.B. en caso de que el documento ya haya sido contabilizado, la opción IMPRESO en el documento NO se elimina automáticamente, sino que es necesario eliminar la inscripción contable vinculada antes de poder realizar cualquier modificación en el encabezado o en el cuerpo del documento. Si la modificación a realizar se refiere a los datos del cliente (por ejemplo, código destinatario incorrecto), no será necesario eliminar la inscripción contable, sino que será suficiente intervenir sobre la información anagráfica y regenerar el archivo XML.*  
- ANULADA/ESCLUIDA: el documento se anula y, por lo tanto, se emitirá una nota de variación interna para adecuar la situación contable y posteriormente se marcará como EXCLUIDO.  

## Estado documento ENTREGADA

ESTE ESTADO NO ES GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS  

Cuando el SdI logra completar la entrega del documento al cesionario/comitente, emite al cesionario/emisor un recibo de entrega, que incluye la fecha y la hora de entrega al destinatario final.  
En el formulario de resumen de las Facturas de venta, el campo Fecha del último evento muestra la fecha y la hora del recibo de entrega adquirido del SdI.  
Al acceder al Registro de documentos SdI correspondiente al documento, en el panel “Registro de documentos SdI”, en relación a la Transición Documento entregado, es posible visualizar la notificación de entrega.  
Desde este estado no es posible hacer ninguna intervención sobre el documento y el flujo de gestión se considera terminado. NO SE COMPLETA LA FECHA DE CIERRE.  

## Estado documento FALTA DE ENTREGA

ESTE ESTADO NO ES GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS  

En caso de que el SdI no pueda entregar el documento, por ejemplo, por indisponibilidad de la dirección telemática de recepción o porque la dirección no ha sido indicada en la factura (código destinatario 0000000), el SdI:  
- envía al cedente/prestatario una notificación de falta de entrega que incluye la razón  
- pone la factura a disposición del cesionario/comitente en su área reservada o, en el caso de un sujeto privado, en un área específica reservada del sitio web de la Agencia de Impuestos.  

En estos casos, el cedente/prestatario debe notificar al cliente sobre la falta de entrega y sobre la disponibilidad de la factura en su área reservada, a partir de la fecha de “puesta a disposición” identificada por el SdI. En el formulario de resumen de las Facturas de venta, el campo Fecha del último evento muestra la fecha y la hora del recibo.  

Al acceder al Registro de documentos SdI correspondiente al documento, en el panel “Registro de documentos SdI” en relación a la Transición Falta de entrega, es posible visualizar el recibo de falta de entrega y la fecha/hora de la notificación.  
Cuando el documento está en el estado FALTA DE ENTREGA, es posible modificar su estado a NOTIFICACIÓN AL CLIENTE, registrando así el momento en que el operador notificó al cliente destinatario la emisión del documento con la imposibilidad de notificación automática por parte del SdI.  

## Estado documento NOTIFICACIÓN AL CLIENTE

ESTE ESTADO NO ES GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS  

El envío de algunos documentos al SdI podría no finalizar correctamente porque el propio SdI no puede identificar al destinatario del documento, o el documento está destinado a un consumidor final.  
En estos casos, el SdI notifica la falta de entrega y el cedente/comitente debe transmitir el documento al destinatario final, de manera diferente a través del SdI.  
Cuando los documentos de Fluentis están en el estado “Falta de entrega”, el operador puede actuar y decidir enviar el documento al destinatario final por otros medios y luego marcar el documento con el estado NOTIFICACIÓN AL CLIENTE.  
Los documentos en este estado no son más modificables y en la columna Fecha del último evento estará disponible la fecha en la que se realizó la acción de notificación.  
Al acceder al Registro de documentos SdI correspondiente al documento, en el panel Registro de documentos SdI en relación a la Transición Notificación manual al cliente, es posible ver el usuario que realizó la operación y la fecha y hora de la misma.  
El ciclo de gestión del documento ha terminado.

## Estado documento NO VINCULADA y RECIBIDA

ESTE ESTADO NO ES GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS  

Los estados del documento VINCULADA y RECIBIDA se gestionan solo para el ciclo pasivo de documentos de compra de sujetos residentes/identificados en el territorio del Estado italiano.  
El estado identifica los documentos adquiridos por el servicio Fluentis Business Hub y aún no vinculados (NO VINCULADA) a una inscripción contable o a un documento de compra registrado en la sección Compras de Fluentis o, aún, a una compensación.  
O bien, archivos XML de compras y vinculados a un evento contable o a un documento.

## Estado documento RECHAZADA (solo para facturación PA)

ESTE ESTADO NO ES GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS  

El estado del documento RECHAZADA se refiere al documento destinado a la Administración Pública no aceptado por esta última. El estado es adquirido directamente del Fluentis Business Hub si la Administración receptora ha decidido comunicar el rechazo de la factura a través del canal SdI: es potestad de las Administraciones determinar canales de transmisión diferentes a los del SdI.  
En estos casos de rechazo de la factura, la Administración Pública destinataria puede indiferentemente:  
- solicitar al sujeto transmisor que reemita la misma factura corregida con el mismo número y la misma fecha y la factura rechazada no se contabiliza, O BIEN  
- solicitar una nota de crédito y una nueva factura si la factura anterior ya ha sido contabilizada.  

Se aclara que la transmisión del rechazo por parte de la PA a través del Sistema de Intercambio es una facultad.

## Estado del documento APROBADA (solo para facturación PA)

ESTE ESTADO NO ES GESTIONADO PARA AQUELLOS QUE NO HAN SUSCRITO EL CONTRATO FE CON FLUENTIS  

El estado del documento APROBADA se refiere al documento destinado a la Administración Pública aceptado por esta última. El estado es adquirido directamente del Fluentis Business Hub si la Administración receptora ha aceptado el archivo XML enviado.  
En estos casos, el flujo se considera concluido y se completa la fecha de cierre en las propiedades del documento.

## Estado del documento ACEPTADA POR CADUCIDAD (solo para facturación PA)

Los documentos de facturación electrónica enviados al SdI y dirigidos a la Administración Pública pueden adquirir del SdI el estado de ACEPTADA POR CADUCIDAD: este estado se refiere a la condición por la que el SdI ha entregado la factura a la PA destinataria, la cual, dentro del plazo de 15 días desde la recepción, no envía ninguna comunicación al SdI, ni sobre la aceptación ni sobre el rechazo.  
En estos casos, el SdI envía una notificación de CADUCIDAD DE PLAZOS tanto al sujeto transmisor como al sujeto receptor. Esta notificación tiene la única función de comunicar a ambas partes que el SdI considera cerrado el proceso relativo a esa factura. La notificación de caducidad de plazos indica que el Sistema de Intercambio ha concluido regularmente la gestión (recepción y entrega) de la factura objeto de la notificación. Por lo tanto, después de dicha notificación, el SdI rechazará la factura, si se vuelve a enviar, y cualquier comunicación relacionada con ella. La notificación de caducidad de plazos no tiene ninguna implicación sobre la verificación de la corrección y sobre la posterior gestión de la factura por parte de los interesados, es decir, la Administración Pública puede aún decidir rechazar la factura entregada.  
El estado es adquirido directamente del Fluentis Business Hub y en estos casos, el ciclo de gestión del documento se considera concluido.