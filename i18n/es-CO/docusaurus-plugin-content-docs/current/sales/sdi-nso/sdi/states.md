---
title: Estados de los documentos en Fluentis
sidebar_position: 5
ai_generated: true
---

El envío y la recepción de documentos electrónicos del ciclo activo y pasivo prevé la gestión, por parte 
del usuario, de una serie de ESTADOS operativos que definen el flujo de gestión del documento de factura<!-- documento di fattura-->, desde 
su generación hasta el envío a Fluentis Business Hub para la efectiva transmisión al SdI<!-- SdI -->.
Los estados pueden gestionarse individualmente, es decir, dentro de la gestión de un único documento, o 
de manera masiva; cada estado puede permitir el paso a un estado ANTERIOR de gestión o a uno POSTERIOR. Las acciones y la gestión de documentos electrónicos pueden estar sujetas 
a restricciones operativas que pueden reservar la gestión de los estados de los documentos solo a roles y/o usuarios predefinidos, 
configurando adecuadamente la cinta de menú de las acciones relacionadas.
La normativa actual relativa a las comunicaciones a enviar a la Agencia Tributaria prevé que los sujetos 
pasivos a efectos de IVA comuniquen los datos relativos a las operaciones de cesión de bienes y/o prestación de servicios realizadas 
(Gestión del ciclo activo) y RECIBIDAS incluso de sujetos NO identificados/no residentes en el territorio del Estado utilizando el mismo formato previsto para las facturas electrónicas italianas. Si para los documentos EMITIDOS 
es posible utilizar el mismo formato previsto para las facturas electrónicas italianas, para el envío al SdI<!-- SdI --> de 
documentos de compra de proveedores extranjeros se prevé un formato especial y la firma para estos archivos es 
obligatoria.
En Fluentis la generación del archivo XML de este tipo es posible en relación con el registro contable<!-- registrazione contabile --> 
del documento recibido y la posterior gestión, dentro del registro contable<!-- registrazione contabile -->, de la generación 
del archivo XML y su envío al SdI<!-- SdI --> con las mismas operaciones de cambio de estado previstas para el ciclo activo, o 
a través de la gestión de archivos desde la función de Facturación electrónica con sujetos no residentes.
       
El significado de los varios estados en detalle:

| Estado del documento | Descripción | Acciones posibles |
| :-- | :-- | :-- | 
| No examinada | El documento ha sido generado y aún no se han realizado acciones relativas a la gestión del documento electrónico | *Siguientes*: Controlado, Anulada, Excluida. *Anteriores*: Eliminación manual del documento de la gestión | 
| Controlado | El documento ha sido sometido a controles preliminares por parte del operador | *Siguientes*: Generada, Anulada, Excluida. *Anteriores*: No examinada (retorno al estado inicial del documento) | 
| Generada | Se ha creado el archivo XML relativo al documento electrónico. Desde este momento es posible proceder con los estados siguientes para enviar el archivo al Fluentis Business Hub o descargar el archivo XML para gestiones externas. El documento en este estado puede ser contabilizado | *Siguientes*: Firmada, Por enviar, Anulada, Excluida. *Anteriores*: Controlado | 
| Firmada | El documento ha sido firmado externamente con certificado de firma Cades o Xades y reimportado en Fluentis en el nuevo formato | *Siguientes*: Por enviar, Anulada, Excluida. *Anteriores*: Generada | 
| Por enviar | Este estado, a utilizar en caso de estar correctamente configurado el canal Fluentis Business Hub, pone el documento en la lista de documentos que BizLink deberá procesar para el envío al SdI<!-- Sdi -->. PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS, ESTE CAMBIO DE ESTADO BLOQUEA LA FACTURA ANTE CUALQUIER OTRA ACCIÓN | *Siguientes*: NINGUNA ACCIÓN MANUAL. El estado se actualiza por Fluentis Business Hub. NO GESTIONADO PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS | 
| Anulada | El documento no debe ser enviado al cliente final pero sigue siendo válido a efectos fiscales | *Siguientes*: NINGUNA ACCIÓN MANUAL. *Anteriores*: No examinada | 
| Excluida | El documento ha sido creado pero no entra entre los que enviar al SdI<!-- SdI --> (ej. nota de ajuste interna o cliente no residente en Italia y no sujeto a facturación electrónica con envío al SdI) | *Siguientes*: NINGUNA ACCIÓN MANUAL. *Anteriores*: No examinada | 
| No asociada (ciclo pasivo) | El documento ha sido recibido por el servicio Fluentis Business Hub y no se ha asociado a ningún elemento contable<!-- elemento contabile --> (NO GESTIONADO PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS) | *Siguientes*: Recibida | 
| Recibida (ciclo pasivo) | El documento ha sido asociado al registro contable<!-- registrazione contabile -->/documento de compra/documento de compensación (NO GESTIONADO PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS) | *Anteriores*: No asociada | 

Si el envío se realiza a través de Fluentis Business Hub, después de marcar el documento creado con el 
estado "Por enviar", los estados posteriores adquiridos directamente por el Fluentis Business Hub pueden ser:          

ESTOS ESTADOS NO SE GESTIONAN PARA QUIEN NO HA CONTRATADO EL SERVICIO FBH CON FLUENTIS           


| Estado del documento | Descripción | Acciones posibles | Notificación XML desde SDI |
| :-- | :-- | :-- | :-- |
| En Fluentis Business Hub | El documento ha sido recibido en Fluentis Business Hub y está a la espera de ser recogido por el SdI<!-- SdI --> | Es necesario esperar una respuesta del SdI, que verificará y eventualmente recogerá el archivo | NO |
| En SDI | El documento ha sido recibido por el SdI<!-- SdI --> | *Siguientes*: No conforme, Emitida | NO |
| No conforme | El documento NO ha superado los controles formales previstos por el SdI<!-- SdI --> y deberá ser reemitido. Los cambios de estado siguientes son MANUALES y a cargo del usuario | *Anteriores*: No examinada, Anulada, Excluida | SÍ |
| Entregada | El documento ha sido entregado al destinatario | El ciclo de envío ha terminado | SÍ |
| Entrega fallida | El SdI<!-- SdI --> no ha conseguido entregar el documento al destinatario y lo pondrá a disposición en su área reservada (ej. por indisponibilidad de la dirección telemática de recepción o porque dicha dirección no fue indicada en la factura) | *Siguientes*: Notificación cliente | SÍ |
| Notificación cliente | Ante la entrega fallida por parte del SdI<!-- SdI -->, se realiza una notificación manual al cliente de la factura. Este estado es MANUAL y a cargo del usuario | El ciclo de envío ha terminado | NO | 
| Documento emitido (Solo PA) | El documento ha sido considerado válido por el SdI<!-- SdI -->, que procede con los intentos de entrega hacia la Administración Pública | *Siguientes*: Entregada, Entrega fallida | NO | 
| Rechazada (solo PA) |  El documento dirigido a la Administración Pública ha sido rechazado por la administración destinataria | *Anteriores*: Por examinar | SÍ |
| Aprobada | El documento dirigido a la Administración Pública ha sido aceptado por la administración destinataria | El ciclo de envío ha terminado | SÍ |
| Aceptada por vencimiento | Si en el plazo de 15 días desde la recepción de la factura el SdI<!-- SdI --> no recibe ninguna comunicación, el SdI<!-- SdI --> envía una notificación de VENCIMIENTO DE PLAZO tanto al emisor como al receptor | | SÍ |

El estado de los documentos enviados a Fluentis Business Hub se actualiza de manera silenciosa mediante algunos procedimientos automáticos previstos en BizLink. 
En los párrafos siguientes se describe el detalle de cada estado gestionado.

## Estado del documento NO EXAMINADA<!-- Stato documento NON ESAMINATA -->

Simultáneamente con la creación del nuevo documento de venta o de un registro contable<!-- registrazione contabile --> de compra para sujetos no residentes, en la cinta de menú, en la sección Facturación electrónica, el 
estado propuesto es “No examinada”, es decir, aún no evaluada por el operador para el envío al SdI<!-- SdI -->.
Una vez introducido y guardado el documento con la información correspondiente, es posible proceder modificando el estado del documento entre los previstos para el estado NO EXAMINADA, es decir:
- *Controlada*: verificada y lista para ser gestionada en formato electrónico
- *Anulada*: la factura no debe enviarse al SdI<!-- SdI --> pero debe mantenerse como válida para los registros a efectos contables y de IVA
- *Excluida*: el documento ingresado no debe enviarse al SdI<!-- SdI --> 

## Estado del documento CONTROLADA<!-- Stato doumento CONTROLLATA -->

El documento/el registro en estado CONTROLADA ha sido validado por el operador y puede ser procesado para las fases siguientes para su procesamiento y envío al SdI<!-- SdI -->, o puede ser devuelto al estado A EXAMINAR para eventuales modificaciones o integraciones. 
Los estados sucesivos de procesamiento del documento para el envío al SdI<!-- SdI --> o para la exclusión del envío pueden 
ser:
- *Generada*: se crea el archivo XML relativo al documento ingresado y preparado para el envío 
- *Anulada*: la factura no debe enviarse al SdI<!-- SdI --> pero debe mantenerse como válida para los registros a efectos contables y de IVA
- *Excluida*: el documento ingresado no debe enviarse al SdI<!-- SdI --> 

## Estado del documento GENERADA<!-- Stato documento GENERATA -->

El paso de los documentos de factura o de los registros contables<!-- registrazioni contabili --> al estado GENERADA prevé la 
creación simultánea del documento XML según las especificaciones técnicas de la Agencia Tributaria para la 
tipología de documento gestionado. Durante esta fase, se realizan algunos controles relativos a la 
presencia de la información obligatoria para la compilación y, en caso de que en la sección de datos básicos dicha 
información no haya sido censada correctamente, se emitirá una señalización de error relativa al dato 
faltante. 
El documento factura/nota de crédito... en el estado GENERADA también adquiere el estado interno de gestión 
IMPRESA y por tanto, a partir de este momento, se puede proceder con la contabilización<!-- contabilizzazione --> del documento. El 
registro contable<!-- registrazione contabile --> en estado GENERADA crea el archivo XML correspondiente.
El archivo XML generado se guarda en la gestión documental de Fluentis y por tanto siempre es accesible desde las 
varias funcionalidades que permiten su acceso y desde la función **Registro de Documentos SdI** prevista en la 
cinta de menú de las distintas funcionalidades.
El archivo XML en estado Generada puede ser descargado y gestionado para el envío con herramientas externas a Fluentis 
o puede ser enviado a Fluentis Business Hub a través de la gestión de uno de los estados operativos previstos. 
En caso de que para el contacto o la empresa se haya configurado la gestión de Firma sobre los documentos de 
facturación electrónica, entre los estados en gestión también se prevé FIRMADA:
En caso contrario, si no está prevista la gestión de la firma, los estados en gestión son:
- *Controlada*: modifica el estado del documento para devolver al estado ANTERIOR de controlada
- *Anulada*: el documento registrado o ingresado no debe ser enviado al SdI<!-- SdI --> pero debe mantenerse como válido para los registros a efectos contables y de IVA
- *Excluida*: el documento ingresado no debe ser enviado al SdI<!-- SdI --> 
- *Por enviar*: el documento se inserta en la lista de documentos a enviar a Fluentis Business Hub
- *Firmada*: el flujo de atribución de este estado busca, en una ruta previamente configurada, el archivo firmado correspondiente al archivo XML generado por el procedimiento. Este estado es visible SOLO si se selecciona la casilla “Facturación electrónica firmada” en la ficha del contacto (Configuración de fichas de contactos) o en las Configuraciones de Facturación Electrónica de la empresa (Configuración de conexión a Fluentis Business Hub) y es, según la normativa vigente, un estado OPCIONAL para documentos de venta emitidos frente a sujetos residentes en Italia mientras que es OBLIGATORIO para documentos emitidos frente a sujetos no residentes, no establecidos, no identificados en Italia. 
Antes de proceder con la modificación del estado a FIRMADA, es necesario proceder con la firma de los documentos en estado GENERADA:
> - si el campo *Carpeta de creación de archivos para firmar* en la *Configuración de facturación electrónica de la empresa* (Configuración de conexión a Fluentis Business Hub) está correctamente configurado, cada vez que se genera el archivo XML, Fluentis guarda una copia en la ruta indicada. Si el campo no está correctamente configurado, será posible descargar el archivo XML desde la 
función *Registro de documentos SdI* a través de la acción Descargar Anexo de la cinta de menú y guardar el archivo en una carpeta conveniente en el sistema de archivos
> - proceda a firmar el archivo utilizando cualquier software de firma provisto, que permite aplicar la firma digital en formato Cades o Xades (según lo dispuesto por 
las especificaciones técnicas normativas) y asegurándose de guardar el archivo firmado en la carpeta indicada en las Configuraciones de facturación electrónica en el campo Carpeta de archivos firmados
> - Modifique el estado del documento a FIRMADA: automáticamente el procedimiento buscará 
el archivo firmado en la carpeta indicada en el punto anterior y lo integrará en el flujo procedimental de Fluentis. En caso de envío a Fluentis Business Hub, será ESTE archivo firmado el objeto de transmisión al SdI<!-- SdI -->

## Estado del documento FIRMADA<!-- Stato documento FIRMATA -->

El documento en estado FIRMADA puede ser descargado y gestionado externamente de Fluentis, o enviado a Fluentis Business Hub para su envío al SdI<!-- SdI -->. 
Para descargar el documento firmado es posible acceder a la función “Registro de documentos SdI” y ejecutar la descarga en el panel de Adjuntos mediante la acción “Descargar Anexo” de la cinta de menú o desde el panel Registro de documentos SdI mediante la acción “Descargar el contenido del registro”.
Para proceder con la gestión del documento es posible seleccionar uno de los estados propuestos:
- *Generada*: anula la operación de firma del archivo y vuelve al estado GENERADO del archivo XML
- *Por enviar*: el documento se inserta en la lista de documentos a enviar a Fluentis Business Hub
- *Anulada*: el documento o el registro contable<!-- registrazione contabile --> no se refieren a acontecimientos a enviar al SdI<!-- SdI --> pero deben mantenerse válidos para registros contables y de IVA
- *Excluida*: el documento/el registro contable<!-- registrazione contabile --> ingresado no debe ser enviado al SdI<!-- SdI --> 

## Estado del documento ANULADA<!-- Stato documento ANNULLATA -->

El documento/el registro contable<!-- registrazione contabile --> en estado ANULADA se configura manualmente por el usuario en caso de que el documento sea relevante a efectos de IVA y contabilidad pero no deba entrar en el flujo de gestión del Sistema de Intercambio: un ejemplo podría ser la factura emitida por el ciclo activo de Fluentis que 
recibe del Sistema de Intercambio una notificación de Rechazo y, por tanto, si el documento ya ha sido registrado 
en contabilidad, es necesario proceder con:
- la anulación de la factura enviada, para que el documento no sea enviado en ningún flujo de envío
- el registro de un documento de anulación válido solo a efectos contables, que no debe ser transmitido al SdI<!-- SdI --> y que, por tanto, tendrá el estado de EXCLUIDA
- la emisión de un nuevo documento con una numeración que haga referencia a la inicial, para ser enviado nuevamente al SdI<!-- SdI -->          

Si el documento se encuentra en estado Anulada y necesita ser gestionado nuevamente regresando al estado inicial, es posible modificar su estado a NO EXAMINADA<!-- NON ESAMINATA --> y proceder con las modificaciones en el documento original.

## Estado del documento EXCLUIDA<!-- Stato documento ESCLUSA -->

El estado del documento “Excluida” se configura manualmente por el usuario y se refiere a documentos que, 
por su naturaleza, no deben incluirse en el flujo de gestión de la facturación electrónica para el Sistema de 
Intercambio. Algunos ejemplos de documentos en este estado:
- Notas internas de anulación relativas a documentos de factura que han sido rechazados por el SdI<!-- SdI --> y deben ser reemitidos
- Documentos emitidos a sujetos extranjeros/no residentes para los cuales no se desea gestionar el envío a través de los estados de procesamiento previstos para la facturación electrónica al SdI<!-- SdI -->          

Si el documento está en estado Anulada y se necesita poder gestionarlo nuevamente regresando al estado inicial de la factura, es posible modificar su estado a NO EXAMINADA<!-- NON ESAMINATA --> y proceder con las modificaciones en el documento original.

## Estado del documento POR ENVIAR e IN FLUENTIS BUSINESS HUB<!-- Stato documento DA SPEDIRE e IN FLUENTIS BUSINESS HUB -->

Los documentos generados por el ciclo activo de Fluentis y listos para ser enviados al SdI<!-- SdI -->, deben estar marcados por el estado POR ENVIAR: este estado, a utilizar en caso de estar correctamente configurado el canal Fluentis Business Hub, pone el documento en la lista de documentos que BizLink deberá procesar para el envío al SdI<!-- SdI -->.
No se prevén modificaciones de estado en esta condición porque el documento, insertado en una “cola de envío” de BizLink, se enviará a Fluentis Business Hub para su transmisión al SdI<!-- SdI -->, a través de procesos automáticos que se ejecutan a intervalos regulares. 
Una vez que el documento se envía al servicio Fluentis Business Hub, el estado se cambia automáticamente a EN FLUENTIS BUSINESS HUB y se rellenan automáticamente las columnas relacionadas con la información de la transferencia realizada:
- *Estado SdI*: recibe la descripción del estado del documento, indicando tanto el estado de gestión interno de Fluentis como el estado registrado por Fluentis Business Hub y adquirido directamente por el SdI<!-- SdI --> (ver párrafo ESTADOS DE LOS DOCUMENTOS).
- *Nombre archivo SdI*: el nombre del archivo que se crea en el momento en que el documento pasa al estado GENERADA; en el formato original o posteriormente con la firma digital, representa el archivo de factura a enviar al SdI<!-- SdI --> (Nombre del archivo).
- *Id SdI*: el identificador único que el SdI<!-- SdI --> asigna al documento al recibirlo
- *Fecha de recepción SdI*: la fecha en que el sistema de intercambio ha recibido el documento enviado. Esta información se obtiene de la notificación de recepción que el SdI<!-- SdI --> emite al recibir el envío y antes de proceder con los controles formales del archivo 
- *Fecha de cierre*: la fecha de cierre del flujo de gestión (ej. documento Entregado)
- *Fecha último evento*: la fecha del último cambio de estado que ocurrió en el archivo ya sea manualmente o por efecto del avance de procesamiento en el SdI<!-- SdI -->

## Estado del documento EN SDI<!-- Stato documento IN SDI -->

ESTE ESTADO NO SE GESTIONA PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS         

El documento se marca automáticamente por los procesos de BizLink con el estado "EN SDI" en el momento en que se realiza el envío al SdI<!-- SdI --> y Fluentis Business Hub recibe la notificación de recepción, como en el siguiente ejemplo:
Al mismo tiempo que se registra la notificación del SdI<!-- SdI -->, se completan las columnas del formulario Facturas de venta con los campos:
- *Id SdI*: el identificador único que el SdI<!-- SdI --> asigna al documento al recibirlo
- *Fecha de recepción SdI*: la fecha en la que el sistema de intercambio ha adquirido el documento enviado. Esta información se obtiene de la notificación de recepción que el SdI<!-- SdI --> emite al recibir el envío y antes de proceder con los controles formales del archivo          

Accediendo al Registro de documentos SdI<!-- Registro documenti SdI --> correspondiente al documento, en el panel “Registro de documentos SdI” correspondiente a la Transición Sistema de Intercambio es posible ver 
la notificación de recepción.         
En este estado no se puede intervenir manualmente con una modificación del archivo, sino que es necesario esperar la notificación del resultado del SdI<!-- SdI -->, que podrá ser No conforme si no se superan los controles 
formales o Emitida si los controles previstos han sido superados y por tanto el SdI<!-- SdI --> inicia los procedimientos de entrega.

## Estado del documento NO CONFORME<!-- Stato documento NON CONFORME -->

ESTE ESTADO NO SE GESTIONA PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS        

Los documentos marcados con el estado NO CONFORME han sido rechazados por el sistema de Intercambio tras los controles formales realizados al recibirlo. En este caso, la notificación de rechazo también indica la razón del rechazo y, si el documento aún no ha sido contabilizado<!-- contabilizzato -->, deberá ser reemitido con el mismo número y fecha, corrigiendo la información apropiada dentro de los 5 días HÁBILES desde la
fecha de rechazo. 
En la cuadrícula del formulario Factura de venta, en correspondencia con el documento no conforme, se actualiza la columna Fecha del último evento con la fecha y hora de la Notificación de rechazo recibida del SdI<!-- SdI -->.           

Accediendo al Registro de documentos SdI<!-- Registro dei documenti SdI --> del documento seleccionado, en el panel Registro de documentos SdI se indica, en la fila correspondiente a la Transición Documento no conforme, la fecha y hora del evento y se muestra la notificación de rechazo con la motivación.         
Es posible modificar manualmente el estado del documento dependiendo de las acciones que se desee realizar tras el rechazo:
- NO EXAMINADA: marcando el documento con este estado, se desea devolver el documento al estado inicial antes del procesamiento. De hecho, este estado permite realizar las modificaciones necesarias al documento con el fin de corregir las advertencias indicadas por el SdI<!-- SdI -->. En este caso, el documento debe ser reemitido con el mismo número y fecha. *N.B. si el documento ya ha sido contabilizado<!-- contabilizzato -->, el check IMPRESO en el documento NO se elimina automáticamente, sino que es necesario eliminar el registro contable<!-- registrazione contabile --> asociado antes de poder realizar cualquier modificación en el encabezado o cuerpo del documento. Si la modificación a realizar afecta a los datos de cliente (ej. código destinatario erróneo), no será necesario eliminar el registro contable<!-- registrazione contabile -->, sino simplemente intervenir sobre la información de datos básicos y regenerar el archivo XML.*
- ANULADA/EXCLUIDA: el documento se anula y, por tanto, se emitirá una nota de variación interna para ajustar la situación contable y posteriormente se marcará como EXCLUIDA.       

## Estado del documento ENTREGADA<!-- Stato documento CONSEGNATA -->

ESTE ESTADO NO SE GESTIONA PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS           

Cuando el SdI<!-- SdI --> logra completar la entrega del documento al cesionario/cliente, emite al cesionario/remitente un recibo de entrega, que indica fecha y hora de entrega al destinatario final. 
En el formulario de resumen Facturas de venta, el campo Fecha último evento indica la fecha y hora del recibo de entrega recibido del SdI<!-- SdI -->.    
Accediendo al Registro de documentos SdI<!-- Registro documenti SdI --> correspondiente al documento, en el panel “Registro de documentos SdI”, en correspondencia con la Transición Documento entregado, es posible consultar la notificación de entrega.               
Desde este estado no es posible hacer ninguna intervención sobre el documento y el flujo de gestión se considera finalizado. NO SE RELLENA LA FECHA DE CIERRE.

## Estado del documento ENTREGA FALLIDA<!-- Stato documento MANCATA CONSEGNA -->

ESTE ESTADO NO SE GESTIONA PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS             

En el caso de que el SdI<!-- SdI --> no pueda entregar el documento, por ejemplo, debido a la indisponibilidad de la dirección telemática de recepción o porque la dirección no fue indicada en la factura (código destinatario 0000000), el SdI<!-- SdI -->:
- envía al emisor/proveedor una notificación de entrega fallida que indica la motivación 
- pone a disposición del cesionario/cliente la factura en su área reservada o, en el caso de un sujeto privado, en un área especial del sitio web de la Agencia Tributaria


El emisor/proveedor en estos casos debe notificar al cliente la entrega fallida y la disponibilidad de la factura en su área reservada, a partir de la fecha de “puesta a disposición” identificada por el SdI<!-- SdI -->. En el 
formulario de resumen Facturas de venta, el campo Fecha último evento indica fecha y hora del recibo.          

Accediendo al Registro de documentos SdI<!-- Registro documenti SdI --> correspondiente al documento, en el panel “Registro de documentos SdI” en correspondencia con la Transición Entrega fallida, es posible consultar el 
recibo de entrega fallida y la fecha/hora de la notificación.           
Cuando el documento está en estado ENTREGA FALLIDA, es posible modificar su estado a NOTIFICACIÓN CLIENTE, registrando de esta forma el momento en que el operador ha notificado al cliente destinatario la emisión del documento por la imposibilidad de notificación automática por parte del SdI<!-- SdI -->. 

## Estado del documento NOTIFICACIÓN CLIENTE<!-- Stato documento NOTIFICA CLIENTE -->

ESTE ESTADO NO SE GESTIONA PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS         

El envío de algunos documentos al SdI<!-- SdI --> podría no completarse correctamente porque el propio SdI<!-- SdI --> no logra identificar al destinatario del documento, o el documento está destinado a un consumidor final. 
En estos casos el SdI<!-- SdI --> notifica la entrega fallida y el cliente/beneficiario debe transmitir el documento al destinatario final, por medios distintos al SdI<!-- SdI -->. 
Cuando los documentos de Fluentis están en estado “Entrega fallida”, el operador puede decidir enviar el documento al destinatario final por otros medios y luego marcar el documento con el estado NOTIFICACIÓN CLIENTE.            
Los documentos en este estado ya no son modificables y en la columna Fecha último evento está disponible la fecha en que fue realizada la acción de notificación.               
Accediendo al Registro de documentos SdI<!-- Registro documenti SdI --> correspondiente al documento, en el panel Registro de documentos SdI, en correspondencia con la Transición Notificación manual al cliente, es posible ver el usuario que realizó la operación y la fecha y hora de la misma.         
El ciclo de gestión del documento se da por concluido.

## Estado del documento NO ASOCIADA y RECIBIDA<!-- Stato documento NON ABBINATA e RICEVUTA -->

ESTE ESTADO NO SE GESTIONA PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS          

Los estados del documento ASOCIADA y RECIBIDA solo se gestionan para el ciclo pasivo<!-- ciclo passivo --> de documentos de compra de sujetos residentes/identificados en el territorio del Estado italiano.          
El estado identifica los documentos adquiridos por el servicio Fluentis Business Hub y no asociados aún (NO ASOCIADA) a un registro contable<!-- registrazione contabile --> o a un documento de compra registrado en la sección Compras de Fluentis o bien a una compensación.            
O bien, archivos XML de compras ya asociados a un evento contable o a un documento.

## Estado del documento RECHAZADA (solo para facturación PA)<!-- Stato documento RESPINTA (solo per fatturazione PA) -->

ESTE ESTADO NO SE GESTIONA PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS         

El estado del documento RECHAZADA se refiere al documento destinado a la Administración Pública y que no ha sido aceptado por ésta. El estado se adquiere directamente por Fluentis Business Hub en caso de que la Administración destinataria haya decidido comunicar el rechazo de la factura a través del canal SdI<!-- SdI -->: las Administraciones pueden determinar canales de transmisión diferentes al SdI<!-- SdI -->. En estos casos, la factura en estado RECHAZADA podrá ser ANULADA, EXCLUIDA o A EXAMINAR.            

En estos casos, en caso de rechazo de la factura, la Administración Pública destinataria puede:
- requerir al emisor reenviar la misma factura corregida con mismo número y fecha, y la factura rechazada no se contabiliza<!-- contabilizzata -->, O BIEN
- requerir una nota de crédito y una nueva factura si la factura anterior ya ha sido contabilizada<!-- contabilizzata -->.        

Cabe aclarar que la transmisión del rechazo por parte de la Administración Pública a través del Sistema de Intercambio es opcional.

## Estado del documento APROBADA (solo para facturación PA)<!-- Stato del documento APPROVATA (solo per fatturazione PA) -->
  
ESTE ESTADO NO SE GESTIONA PARA QUIEN NO HA CONTRATADO FE CON FLUENTIS           

El estado del documento APROBADA se refiere al documento destinado a la Administración Pública aceptado por ésta. El estado se adquiere directamente por Fluentis Business Hub si la Administración ha aceptado el archivo XML enviado.
En estos casos el flujo se considera terminado y se registra la fecha de cierre en las propiedades del documento.

## Estado del documento ACEPTADA POR VENCIMIENTO (solo para facturación PA)<!-- Stato del documento ACCETTATA PER DECORRENZA (solo per fatturazione PA) -->

Los documentos de facturación electrónica enviados al SdI<!-- SdI --> y dirigidos a la Administración Pública pueden adquirir del SdI<!-- SdI --> el estado de ACEPTADA POR VENCIMIENTO: este estado se refiere a la condición por la cual el SdI<!-- SdI --> 
entregó la factura a la Administración Pública destinataria, la cual, en el plazo de 15 días desde la recepción, no envía ninguna comunicación al SdI<!-- SdI -->, ni siquiera en cuanto a la aceptación ni al rechazo.
En estos casos, el SdI<!-- SdI --> envía una notificación de VENCIMIENTO DE PLAZO tanto al emisor como al receptor. Dicha notificación sólo tiene la función de comunicar a ambas partes que el SdI<!-- SdI --> considera cerrado el proceso relativo a esa factura. La notificación de vencimiento señala que el Sistema de Intercambio 
ha completado de manera regular la gestión (recepción y entrega) de la factura objeto de la notificación. Por ello, tras dicha notificación el SdI<!-- SdI --> rechazará la factura si es reenviada, así como cualquier comunicación relativa a la misma. La notificación 
de vencimiento de plazo no tiene ninguna implicación sobre la verificación de la corrección y la posterior gestión de la factura por parte de los interesados, es decir, la Administración Pública aún puede decidir rechazar la factura entregada.              
El estado se adquiere directamente por Fluentis Business Hub y en estos casos el ciclo de gestión del documento se considera terminado.