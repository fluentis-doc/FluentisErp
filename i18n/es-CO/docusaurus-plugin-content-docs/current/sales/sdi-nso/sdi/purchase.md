---
title: Gestión del ciclo pasivo
sidebar_position: 7
ai_generated: true
---

NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS          

En Fluentis es posible, una vez configurado el servicio Fluentis Business Hub, importar las facturas de compra<!-- fatture passive --> provenientes de los proveedores y que transitan por el Sistema de Intercambio<!-- Sistema di Interscambio -->. Actualmente, el método de adquisición descrito a continuación se refiere a facturas de proveedores sujetos identificados/residentes en el territorio del Estado para los cuales las facturas transitan por el Sistema de Intercambio. Para la comunicación al SdI de las facturas de compra<!-- fatture di acquisto --> de proveedores extranjeros, consulte el apartado *Envío al SdI de facturas de compra/venta a proveedores/clientes extranjeros (sujetos NO identificados/residentes en el territorio del Estado)*.          

Para recibir las facturas, es necesario comunicar su propio código destinatario a los proveedores, código proporcionado por Fluentis tras la activación del servicio Fluentis Business Hub, con el fin de permitir al cedente completar correctamente los archivos XML de los documentos.          

La configuración de Fluentis prevé la configuración de la misma información requerida para la gestión del ciclo activo, como se detalla en el capítulo *Configuración de la conexión a Fluentis Business Hub*. Una vez establecida la comunicación con el servicio Fluentis Business Hub, las facturas del ciclo pasivo<!-- ciclo passivo --> serán enviadas al servicio suscrito y, a través de BizLink, los archivos XML de la factura y sus anexos serán importados en Fluentis. El registro contable<!-- registrazione contabile --> o el registro del documento de compra<!-- documento di acquisto --> en el flujo pasivo es responsabilidad del usuario, quien, una vez identificado el archivo electrónico XML correspondiente, podrá asociarlo al registro<!-- registrazione --> o al documento generado.          

El usuario, una vez consultados los documentos importados por el proceso de BizLink, puede seleccionar un documento a la vez y asociarlo al registro contable<!-- registrazione contabile -->/documento de compra<!-- documento di acquisto -->/documento de honorario presente en Fluentis.              

## Flujo operativo de los documentos de compra<!-- Flusso operativo dei documenti di acquisto -->

El documento de compra<!-- documento di acquisto --> en formato electrónico, una vez importado en Fluentis, adquiere el estado de NO ASIGNADO<!-- NON ASSEGNATO --> y sólo puede cambiar al estado RECIBIDO<!-- RICEVUTO -->, tras la asociación con el elemento contable correspondiente, o bien regresar al estado NO ASIGNADO:
Para mayor información sobre el significado de cada estado, consulte los apartados correspondientes a la gestión de los varios ESTADOS DE LOS DOCUMENTOS.

## Modificar y gestionar los estados de los documentos<!-- Modificare e gestire gli stati dei documenti -->

Para modificar y gestionar el documento de compra<!-- documento di acquisto --> es necesario utilizar la función Documentos de compra entrantes de la aplicación BizLink – Documentos SdI.       

Al acceder a la función se abre la pantalla *Documentos de compra entrantes* dividida en una sección de cabecera con los campos de filtro para la búsqueda de documentos y una cuadrícula de resultados. En el menú de cinta:
- el botón *Abrir documento* está habilitado solo si el documento seleccionado está en estado RECIBIDO<!-- RICEVUTA --> y abre el registro contable<!-- registrazione contabile -->/documento de compra<!-- documento di acquisto -->/factura honorario al que está asociado el archivo XML
- el botón *Visualizar* permite ver el archivo XML seleccionado abriendo el Registro de documentos SdI
- el botón *Descargar anexo* ejecuta la descarga del archivo seleccionado en el panel Anexos hacia una carpeta del sistema de archivos elegida.         

En la parte superior de la pantalla están presentes los campos de filtro que permiten filtrar la cuadrícula de los resultados visualizados en la cuadrícula inferior con cierta información de detalle:
- *Estado SdI*: el estado del documento una vez adquirido en Fluentis:
> - *No asignado<!-- Non assegnato -->*: la factura aún no se ha asociado a un registro contable<!-- registrazione contabile --> o a una factura emitida del ciclo pasivo<!-- ciclo passivo --> o documento emitido para un perceptor
> - *Recibida<!-- Ricevuta -->*: la factura ha sido asociada
- *Tipo*: el código de referencia del tipo de documento de venta
- *Fecha doc. def.*, Número doc. def: fecha y número del documento adquirido
- *Proveedor*: el emisor del documento
- *Nombre archivo SdI*: el nombre del archivo XML que se crea en el momento en que el documento avanza al estado GENERADA; ya sea en el formato original o tras la firma digital, representa el archivo de factura a enviar al SdI (para detalles sobre el nombre del archivo ver el apartado Nombre del archivo).
- *Fecha último evento*: se refiere a la última acción realizada por el operador o a la última notificación recibida del SdI durante el proceso de gestión del documento.         

Los documentos importados pueden asociarse a elementos contables presentes en Fluentis mediante las funciones:
1) Documentos de compra entrantes de la aplicación Bizlink – Documentos SdI
2) desde el registro contable<!-- registrazione contabile --> del documento de compra<!-- documento di acquisto -->
3) desde el formulario de gestión del documento de compra<!-- documento di acquisto -->
4) desde el formulario de gestión de honorarios         

A continuación analizamos estas cuatro modalidades.           

1) **Asociar el documento XML desde la función de importación**        

Con la función *Documentos de compra entrantes* de la aplicación Bizlink – Documentos SdI es posible asociar el documento XML a un registro contable<!-- registrazione contabile -->/documento de compra<!-- documento di acquisto -->/honorario 
partiendo del documento importado en Fluentis.              
Tras realizar la búsqueda y haber identificado el archivo a asociar, es posible seleccionar el archivo desde la cuadrícula del Registro de documentos SdI haciendo doble clic en la fila del documento o bien con el botón VISUALIZAR en el menú de cinta. Se abre el Registro de documentos SdI con el detalle del archivo 
adquirido y desde esta pantalla es posible:
- *Asociar el archivo a un documento de compra* registrado en la sección Compras de Fluentis, 
con la función *Vincular a compras*.            
- *Asociar el documento a un registro contable<!-- registrazione contabile --> existente*; mediante la función *Vincular a *registros* es posible seleccionar el registro contable<!-- registrazione contabile --> correspondiente al documento, seleccionándolo de la lista de 
registros contables<!-- registrazioni contabili -->.
- *Asociar el documento a un honorario profesional*; seleccionando la acción *Vincular a perceptores* del menú de cinta es posible seleccionar el documento relativo al honorario correspondiente al archivo XML importado, seleccionándolo de la lista de honorarios presentes en Fluentis.           

Al finalizar la asociación realizada por una de las funciones anteriores, el documento se marca con el estado Recibida<!-- Ricevuta -->, y en la Transición Documento recibido se indica la fecha y hora de la asociación. El documento podrá ser también modificado nuevamente al estado No asignado<!-- Non assegnato --> en caso de necesitar regresar al estado anterior.

2) **Asociar el documento XML desde el registro contable de la compra<!-- registrazione contabile di acquisto -->**

Para asociar un registro contable<!-- registrazione contabile --> a un archivo XML importado en Fluentis, es necesario acceder al registro contable<!-- registrazione contabile --> desde el menú Administración – Registros – Registro y buscar el registro a gestionar. En el formulario de Búsqueda de registros contables<!-- Ricerca registrazioni contabili --> se han añadido algunas 
columnas para la gestión de la información relativa al archivo:
- *Estado SdI*: muestra la descripción del estado del documento, incluyendo tanto el estado de gestión interna de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente por el SdI (ver apartado ESTADOS DE LOS DOCUMENTOS).
- *Nombre archivo SdI*: el nombre del archivo que se crea en el momento en que el documento avanza al 
estado GENERADA; ya sea en su formato original o tras la firma digital, representa el archivo de factura a enviar al SdI (Nombre del archivo). 
- *Sdi Id*: el identificador único que el SdI asigna al documento en el momento de la recepción
- *Fecha de recepción Sdi*: la fecha en la que el sistema de intercambio adquiere el documento enviado. Esta información se obtiene de la notificación de recepción emitida por el SdI tras la recepción del envío y antes de proceder con los controles formales del archivo 
- *Fecha de cierre*: la fecha de cierre del flujo de gestión (por ejemplo, documento Entregado)
- *Fecha del último evento*: la fecha del último cambio de estado realizado en el archivo ya sea manualmente o como consecuencia del avance del procesamiento en el SdI       

Seleccionando el registro contable<!-- registrazione contabile --> a asociar y cambiando el estado de la facturación electrónica a RECIBIDA<!-- RICEVUTA -->, se abre la lista de los archivos adquiridos por SDI aún por asociar y basta seleccionar uno de los archivos propuestos para crear la asociación correcta. Desde la misma pantalla, accediendo al "Registro de documentos SdI" es posible ver las 
acciones realizadas en el documento, imprimir el archivo XML asociado con la función "Imprimir", y con las funciones "Descargar anexo" o "Descargar contenido del registro" descargar el archivo XML seleccionado ya sea en el panel "Anexos" o en el panel "Registro de documentos SdI".      

3) **Asociar el archivo XML desde la gestión de documentos de compra Compras – Facturas de compra – Facturas de compra**        

Para asociar el archivo XML a un documento de compra<!-- documento di acquisto --> es necesario acceder a la función Compras – Facturas de compra, buscar los archivos a asociar en la cuadrícula de gestión utilizando eventualmente también los nuevos filtros relativos a la Facturación Electrónica y consultar el estado del documento en las columnas destinadas 
a la gestión de los archivos en el SdI. Seleccionando un documento en el estado NO ASIGNADO<!-- NON ASSEGNATO --> para asociarlo al archivo XML y cambiando desde el menú de cinta el estado a RECIBIDA<!-- RICEVUTA -->, se abre el diálogo de selección de los archivos de compra importados y entre ellos se deberá seleccionar el archivo a asociar.
El estado del documento cambia así a RECIBIDA<!-- RICEVUTA -->, con la posibilidad de restaurar el estado anterior, siempre desde el menú de cinta. Desde la misma pantalla, accediendo 
al Registro de documentos SdI es posible ver las acciones realizadas en el documento, imprimir el archivo XML asociado con la función Imprimir, y con las funciones Descargar anexo o 
Descargar contenido del registro descargar el archivo XML seleccionado en el panel "Anexos" o en el panel "Registro de documentos SdI" respectivamente.          
La asociación del archivo XML recibido a la factura de compra<!-- fattura di acquisto --> también es posible accediendo directamente al documento de compra<!-- documento di acquisto --> y seleccionando el archivo XML a asociar entre los propuestos por la función de cambio de estado Recibida<!-- Ricevuta --> en el menú de cinta.          

4) **Asociar el documento XML desde la función de gestión de honorarios Administración – Honorarios – Honorarios**        

El archivo XML de compra importado puede referirse a documentos emitidos por profesionales y registrados en Fluentis en la gestión de honorarios. Para asociar el archivo al registro existente, es necesario acceder al menú Administración – Honorarios – Honorarios, buscar el documento a asociar en la cuadrícula de gestión 
utilizando eventualmente también los nuevos filtros relativos a la Facturación electrónica y consultar el estado del documento en las columnas destinadas a la gestión de los archivos en el SdI. 

## Envío al SdI de facturas de compra/venta a proveedores/clientes extranjeros (sujetos no identificados/residentes en el territorio del estado)<!-- Invio al SdI fatture di acquisto/vendita fornitori/clienti esteri (soggetti non identificati/residenti nel territorio dello stato) -->

La normativa actual relativa a las comunicaciones a enviar a la Agencia Tributaria establece que los sujetos pasivos a efectos del IVA también comuniquen los datos relativos a las operaciones de entrega de bienes/prestación de servicios REALIZADAS y RECIBIDAS por sujetos NO identificados/no residentes en el territorio del Estado. Si para los 
documentos EMITIDOS se puede utilizar el mismo formato previsto para las facturas electrónicas italianas, para el envío al SdI de los documentos de compra<!-- documenti di acquisto --> de proveedores extranjeros está previsto un formato específico. La firma en ambos tipos de archivos es obligatoria.        

El envío al SdI de estos archivos se gestiona en Fluentis a través de las operaciones de cambio de estado de los documentos registrados; el archivo XML generado a partir del registro de la operación de compra o de venta adquiere el estado de NO EXAMINADA y posteriormente puede ser transformado igual que los archivos XML enviados al SdI para los documentos de venta (ver apartado ESTADOS DE LOS DOCUMENTOS). El documento XML es entonces transmitido al SdI, que lo controla y lo adquiere y devuelve las notificaciones relativas a su eventual rechazo por falta de conformidad o la confirmación de entrega.            

Para los documentos de venta destinados a clientes no residentes/no establecidos, el flujo electrónico de envío al SdI nunca podrá generar la falta de entrega por identificación incorrecta del destinatario porque el propósito de dicho envío es únicamente la comunicación a la Agencia Tributaria de la relación comercial con el cliente exterior y no es responsabilidad del SdI la entrega al destinatario: los documentos emitidos y destinados a clientes extranjeros deberán ser entregados por los canales habituales. El envío de dichos documentos al SdI debe realizarse antes del último día del mes siguiente a la fecha de emisión del documento. Por este motivo, el flujo de estados para estos archivos será el mismo, tanto para los XML de facturas de venta como para los de compra.                

Para un detalle de cada estado, consulte el apartado ESTADOS DE LOS DOCUMENTOS EN FLUENTIS. En Fluentis es posible generar el archivo relativo a las facturas de venta destinadas a clientes de la UE o extracomunitarios:        
- desde la gestión del ciclo activo como se describe en el apartado Gestión del ciclo activo (sujetos identificados/residentes en el territorio del Estado y Administración Pública), delegando la creación del archivo XML a los ajustes de fichas relativos a la facturación electrónica y gestionando la creación y el envío del archivo XML igual que una factura de venta destinada a un cliente italiano. El flujo de envío, gestionado desde la sección Facturación electrónica, reconocerá automáticamente el documento de venta destinado a un sujeto extranjero y por tanto requerirá la firma obligatoria
- desde la función Facturación electrónica con sujetos no residentes que se describe a continuación, que recoge las facturas activas desde los registros contables introducidos y no referidos a facturas electrónicas ya enviadas al SdI desde la gestión del ciclo activo.          

Para una correcta gestión de los documentos de venta, en ambos casos deberá estar configurada la ficha del cliente estableciendo el campo TIPO CÓDIGO con la opción “Canal Sdi” y en el campo CÓDIGO DESTINATARIO la secuencia de 7 veces el carácter “X” (“XXXXXXX”).             
Para los detalles de la ficha específica, consultar el apartado Configuración de fichas de contactos.              
Los archivos relativos a las facturas de compra<!-- fatture di acquisto --> de sujetos extranjeros pueden gestionarse utilizando la función Facturación electrónica con sujetos no residentes descrita a continuación.

## Facturación electrónica con sujetos no residentes<!-- Fatturazione elettronica con soggetti non residenti -->

La función Administración > Declaraciones > Facturación electrónica con sujetos no residentes genera los archivos XML relativos a los documentos de compra<!-- documenti di acquisto --> y de venta que pueden ser enviados a la Agencia Tributaria individualmente, en sustitución de la obligación del spesometro. El acceso a esta función muestra una ventana dividida en una sección superior de cabecera, donde es posible establecer una serie de filtros para la visualización y gestión de los archivos XML por enviar.           
La función, mediante el filtro TIPO y el filtro ESTADO DE LA FACTURA ELECTRÓNICA, busca los elementos relativos a compras o ventas para los que, desde la cuadrícula de resultados, es posible gestionar el avance de los estados individualmente o masivamente para documentos con el mismo Estado SdI. 
La cuadrícula de resultados muestra una serie de columnas destinadas al monitoreo y gestión de los archivos respecto al envío al SdI, en detalle:
- *Estado SdI*: muestra la descripción del estado del documento, incluyendo tanto el estado de gestión interna de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente por el SdI (ver apartado ESTADOS DE LOS DOCUMENTOS).
- *Nombre archivo SdI*: el nombre del archivo creado en el momento en que el documento avanza al estado GENERADA; ya sea en su formato original o tras la firma digital, representa el archivo de factura a enviar al SdI (Nombre del archivo). 
- *Sdi Id*: el identificador único que el SdI asigna al documento en el momento de la recepción
- *Fecha de recepción Sdi*: la fecha en la que el sistema de intercambio adquiere el documento enviado. Esta información se obtiene de la notificación de recepción emitida por el SdI tras la recepción del envío y antes de proceder con los controles formales del archivo 
- *Fecha de cierre*: la fecha de cierre del flujo de gestión (por ejemplo, documento Entregado)
- *Fecha del último evento*: la fecha del último cambio de estado realizado en el archivo ya sea manualmente o como consecuencia del avance del procesamiento en el SdI              

En el menú de cinta, en la sección dedicada a la facturación electrónica, utilizando la función *Registro de documentos SdI* es posible ver las acciones realizadas en el documento seleccionado, imprimir el archivo XML asociado con la función *Imprimir*, y con las funciones *Descargar anexo* o *Descargar el contenido del registro* descargar el archivo XML.

Con doble clic sobre una fila de la cuadrícula de resultados, se accede al detalle del registro contable<!-- registrazione contabile --> seleccionado. También en el registro contable<!-- registrazione contabile --> es posible ver el estado del procesamiento del archivo respecto al envío al SdI.           

Los documentos de venta gestionados mediante la función Facturación electrónica sujetos no residentes pueden buscarse marcando el check Ventas en la sección Tipo del panel de filtros y con el botón Buscar del menú de cinta iniciar la búsqueda de todos los registros contables<!-- registrazioni contabili --> relativos a causales de venta asociadas al tipo movimiento IVA ventas intra CE o ventas extra CE, o que hayan completado el campo “Cuenta Partner” en el panel Parámetros.             

Los documentos de compra<!-- documenti di acquisto --> gestionados mediante la función Facturación electrónica sujetos no residentes pueden buscarse marcando el check Compras en la sección Tipo del panel de filtros y con el botón Buscar del menú de cinta iniciar la búsqueda de todos los registros contables<!-- registrazioni contabili --> relativos a causales de venta.            
El documento de compra<!-- documento di acquisto --> de un proveedor extranjero debe ser adquirido y registrado en contabilidad utilizando las causales contables que:
- están asociadas al Tipo Movimiento IVA COMPRAS INTRA CE o 
- están asociadas al Tipo Movimiento IVA Compras Extra CE o
- han completado el campo Cuenta Partner en el panel Parámetros               

Al finalizar la búsqueda, se completa la cuadrícula de resultados desde la cual es posible, utilizando la función de cambio de estado en la sección de facturación electrónica, avanzar MANUALMENTE los estados hasta el estado previsto “A enviar”, que prevé la inserción del archivo en la cola de envío al servicio Fluentis Business Hub.

Si el servicio Fluentis Business Hub no está configurado en el sistema, será posible acceder a la función *Registro de documentos SdI* y descargar el archivo XML generado para usarlo externamente a Fluentis.               

El archivo XML creado durante la gestión de estados por parte del operador deberá ser firmado, por lo tanto, si está activo el servicio Fluentis Business Hub, se creará una copia del archivo en la carpeta indicada en los ajustes relativos a la Configuración de conexión a Fluentis Business Hub, donde se debe indicar una carpeta temporal para depositar los archivos XML a firmar y recuperar posteriormente los archivos firmados.                

Al finalizar el envío al SdI, el archivo podrá asumir dos estados:
- *No conforme*: el archivo contiene notificaciones por lo que no puede ser aceptado por el SdI. En estos casos es necesario acceder al Registro de documentos SdI, en el panel Registro de documentos SdI, visualizar la razón de no conformidad, corregir la anomalía y reenviar el archivo regenerado.
- *Entregada*: el archivo ha sido correctamente enviado y adquirido por el SdI. En este caso será posible ver el resultado de la entrega accediendo al panel Registro  
de documentos SdI de la función Registro de documentos SdI para el archivo seleccionado.               

Los documentos salientes también pueden gestionarse desde Documentos extranjeros salientes accesible desde Aplicaciones > BizLink > Documentos SdI. En esta función es posible monitorear y modificar el estado relativo a los registros contables<!-- registrazioni contabili --> de compra/venta para los sujetos extranjeros.           

En el formulario Documentos de compras extranjeras salientes se muestran todos los archivos producidos por los registros contables<!-- registrazioni contabili --> y relativos a esta tipología de evento. El formulario se divide en una 
sección superior en la cual se muestran los filtros de selección de los archivos gestionados, entre los cuales:
- Desde fecha/Hasta fecha de recepción
- Desde fecha/Hasta fecha de recepción del cliente           

En la cuadrícula de resultados se visualizan los datos relativos a los archivos gestionados o por gestionar:           
- *Estado SdI*: muestra la descripción del estado del documento, incluyendo tanto el estado de gestión interna de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente por el SdI (ver apartado ESTADOS DE LOS DOCUMENTOS).
- *Nombre archivo SdI*: el nombre del archivo creado en el momento en que el documento avanza al estado GENERADA; ya sea en su formato original o tras la firma digital, representa el archivo de factura a enviar al SdI (Nombre del archivo). 
- *Sdi Id*: el identificador único que el SdI asigna al documento en el momento de la recepción
- *Fecha del último evento*: la fecha del último cambio de estado realizado en el archivo ya sea manualmente o como consecuencia del avance del procesamiento en el SdI             

En el menú de cinta se presentan las funciones de gestión del documento o de los documentos seleccionados:
- el botón Visualizar permite consultar el Registro de documentos SdI donde es posible ver los eventos asociados al archivo XML generado, descargarlo o modificar su estado
- el botón Descargar anexo ejecuta la descarga del archivo seleccionado en una carpeta de sistema de archivos elegida
- El botón Abrir documento abre el registro contable<!-- registrazione contabile --> relativo al archivo seleccionado                

## Registros contables<!-- Registrazioni contabili -->

Accediendo al punto de menú Administración > Registros > Registro, el formulario Búsqueda de registros contables<!-- Ricerca registrazioni contabili --> visualiza, en la sección de filtros, un expander relativo a la información posible relacionada con el Estado de la factura electrónica, referido a los documentos que tienen interacción con el Sistema 
de Intercambio.              

En el menú de cinta, en la sección dedicada a la facturación electrónica, utilizando la función *Registro de documentos SdI* es posible ver las acciones realizadas en el documento seleccionado, imprimir el archivo XML asociado con la función *Imprimir*, y con las funciones *Descargar anexo*
o *Descargar el contenido del registro* descargar el archivo XML.                
La cuadrícula de resultados muestra algunas columnas en las que aparece el estado y el resultado de los documentos con referencia a la transmisión de los mismos al SdI:
- *Estado SdI*: muestra la descripción del estado del documento, incluyendo tanto el estado de gestión interna de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente por el SdI (ver apartado ESTADOS DE LOS DOCUMENTOS).
- *Nombre archivo SdI*: el nombre del archivo creado en el momento en que el documento avanza al estado GENERADA; ya sea en su formato original o tras la firma digital, representa el archivo de factura a enviar al SdI (Nombre del archivo). 
- *Sdi Id*: el identificador único que el SdI asigna al documento en el momento de la recepción (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS)
- *Fecha de recepción Sdi*: la fecha en la que el sistema de intercambio adquiere el documento enviado. Esta información se obtiene de la notificación de recepción emitida por el SdI tras la recepción del envío y antes de proceder con los controles formales del archivo (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS)
- *Fecha de cierre*: la fecha de cierre del flujo de gestión (por ejemplo, documento Entregado) (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS)
- *Fecha del último evento*: la fecha del último cambio de estado realizado en el archivo ya sea manualmente o como consecuencia del avance del procesamiento en el SdI