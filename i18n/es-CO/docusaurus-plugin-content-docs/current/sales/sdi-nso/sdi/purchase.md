---
title: Gestión del ciclo pasivo (Gestione del ciclo passivo)
sidebar_position: 7
---

NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS

En Fluentis es posible, una vez configurado el servicio Fluentis Business Hub, importar las facturas pasivas provenientes de los proveedores y que transitan por el Sistema de Intercambio. En este momento, el modo de adquisición descrito a continuación se refiere a facturas de proveedores sujetos identificados/residentes en el territorio del estado para los cuales las facturas transitan por el Sistema de Intercambio. Para la comunicación al SdI de las facturas de compra de proveedores extranjeros, se remite al párrafo Envío al SdI de facturas de compra/venta de proveedores/clientes extranjeros (sujetos NO identificados/residentes en el territorio del estado).

Para recibir las facturas, es necesario comunicar su código destinatario a los proveedores, código proporcionado por Fluentis posteriormente a la activación del servicio Fluentis Business Hub, con el fin de permitir al cedente completar correctamente los archivos XML de los documentos.

La configuración de Fluentis prevé la configuración de la misma información requerida para la gestión del ciclo activo, como se detalla en el capítulo Configuración de conexión a Fluentis Business Hub. Una vez establecida la comunicación con el servicio Fluentis Business Hub, las facturas del ciclo pasivo serán enviadas al servicio suscrito y, a través de BizLink, los archivos XML de factura y los correspondientes anexos serán adquiridos en Fluentis. La contabilización o el registro del documento de compra en el flujo pasivo es responsabilidad del usuario, quien, una vez identificado el archivo electrónico XML correspondiente, podrá emparejarlo con el registro o el documento generado.

El usuario, una vez buscados y revisados los documentos importados del proceso de BizLink, puede seleccionar un documento a la vez y emparejarlo con el registro contable/documento de compra/documento de compensación presentes en Fluentis.

## Flujo operativo de los documentos de compra

El documento de compra en formato electrónico, una vez importado en Fluentis, asume el estado de NO ASIGNADO y solo puede pasar al estado RECIBIDO, como consecuencia de la vinculación al elemento contable correspondiente, o volver al estado NO ASIGNADO:  
Para profundizar sobre el significado de cada estado, se remite a los párrafos relacionados con la gestión de los diversos ESTADOS DE LOS DOCUMENTOS.

## Modificar y gestionar los estados de los documentos

Para modificar y gestionar el documento de compra, es necesario utilizar la función Documentos de compra entrantes de la aplicación Bizlink – Documentos SdI. 

En el momento del acceso a la función, se abre la pantalla *Documentos de Compra entrantes* dividida en una sección de encabezado con los campos de filtro para la búsqueda de documentos y una cuadrícula de resultados. En el menú ribbon:  
- el botón *Abrir documento* está habilitado solo si el documento seleccionado está en estado RECIBIDA y abre el registro contable/documento de compra/factura de compensación al cual el archivo XML está vinculado.  
- el botón *Visualizar* permite ver el archivo XML seleccionado al abrir el Registro de documentos SdI.  
- el botón *Descargar archivo adjunto* ejecuta la descarga del archivo seleccionado en el panel Adjuntos en una carpeta del sistema de archivos elegida.  

En la sección superior de la pantalla están los campos de filtro que permiten filtrar la cuadrícula de resultados mostrados en la cuadrícula inferior con algunas informaciones detalladas:  
- *stato sdi*: el estado del documento una vez adquirido en Fluentis:  
> - *non assegnato*: la factura no ha sido emparejada todavía a un registro contable o a una factura emitida del ciclo pasivo o documento emitido hacia un percipiente.  
> - *ricevuta*: la factura ha sido emparejada.  
- *tipo*: el código de referencia del tipo de documento de venta.  
- *data doc. def.*, *Número doc. def (Numero doc. def)*: fecha y número del documento adquirido.  
- *fornitore*: el emisor del documento.  
- *nome file sdi*: el nombre del archivo XML que se crea en el momento en que el documento avanza al estado GENERADA; en el formato original o posteriormente a la imposición de la firma digital, representa el archivo de factura que se enviará al SdI (para detalles sobre la compilación del nombre del archivo, ver el párrafo Nombre del archivo).  
- *data ultimo evento*: se refiere a la última acción realizada por el operador o a la última notificación recibida por el SdI durante el proceso de gestión del documento.  

Los documentos importados pueden ser emparejados a elementos contables presentes en Fluentis operando desde las funciones:  
1) Documentos de compra entrantes de la aplicación Bizlink – Documentos SdI.  
2) Desde el registro contable del documento de compra.  
3) Desde el formulario de gestión del documento de compra.  
4) Desde el formulario de gestión de compensación.  

Analicemos a continuación estas cuatro modalidades.

1) **Emparejar el documento XML desde la función de importación**

Con la función *Documentos de compra entrantes* de la aplicación Bizlink – Documentos SdI es posible emparejar el documento XML a un registro contable/documento de compra/compensación partiendo del documento importado en Fluentis.             
Después de haber realizado la búsqueda y haber identificado el archivo a emparejar, es posible seleccionar el archivo desde la cuadrícula del Registro de documentos SdI con la acción de doble clic sobre la línea del documento o con el botón VISUALIZAR en el menú ribbon. Se abre el Registro de documentos SdI con el detalle del archivo adquirido y desde esta pantalla es posible:  
- *Emparejar el archivo a un documento de compra* registrado en la sección Compras de Fluentis, con la función *Conectar a las compras*.             
- *Emparejar el documento a un registro contable existente*; mediante la función *Conectar a las *registros*, es posible seleccionar el registro contable correspondiente al documento, seleccionándolo de la lista de registros contables.  
- *Emparejar el documento a un compenso profesional*; seleccionando la acción *Conectar a los percipientes* del menú ribbon, es posible seleccionar el documento relativo al compenso correspondiente al archivo XML importado, seleccionándolo de la lista de compensos presentes en Fluentis.           

Al finalizar el emparejamiento realizado desde una de las funciones descritas anteriormente, el documento queda marcado con el estado Recibida, en correspondencia con la Transición Documento recibido se indicará fecha y hora del emparejamiento. El documento también podrá ser modificado nuevamente a estado No asignado si es necesario volver al estado anterior.

2) **Emparejar el documento XML desde el registro contable de compra**

Para emparejar un registro contable a un archivo XML adquirido en Fluentis, es necesario acceder al registro contable desde el menú Administración – Registros – Registro y buscar el registro contable a gestionar. En el formulario de búsqueda de registros contables se han añadido algunas columnas de gestión de la información relativa al archivo:  
- *stato sdi*: recoge la descripción del estado del documento, reportando tanto el estado de gestión interna de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente por SdI (ver párrafo ESTADOS DE LOS DOCUMENTOS).  
- *nome file sdi*: el nombre del archivo que se crea en el momento en que el documento avanza al estado GENERADA; en el formato original o posteriormente a la imposición de la firma digital, representa el archivo de factura que se enviará al SdI (Nombre del archivo).  
- *Sdi Id*: el identificador único que el SdI atribuye al documento en el momento de la recepción.  
- *data ricezione sdi*: la fecha en la que el sistema de intercambio adquirió el documento enviado. Esta información se obtiene de la notificación de recepción que el SdI otorga a raíz de la recepción del envío y antes de proceder con los controles formales del archivo.  
- *data chiusura*: la fecha de cierre del flujo de gestión (ej. documento Entregado).  
- *data ultimo evento*: la fecha del último cambio de estado ocurrido en el archivo, ya sea manualmente o como efecto del avance del procesamiento en el SdI.         

Seleccionando el registro contable a emparejar y modificando el estado de la facturación electrónica a RECIBIDA, se abrirá la lista de archivos adquiridos por SdI aún por emparejar y será suficiente seleccionar uno de los archivos propuestos para crear el emparejamiento correcto. Desde la misma pantalla, accediendo al “Registro de documentos SdI”, es posible observar las acciones realizadas sobre el documento, con la función “Imprimir” se puede imprimir el documento XML emparejado, con las funciones “Descargar archivo adjunto” o “Descargar el contenido del registro” se puede ejecutar la descarga del archivo XML seleccionado en el panel “Adjuntos” o en el panel “Registro de documentos SdI”.      

3) **Emparejar el archivo XML desde la gestión de documentos de compra Compras – Facturas de compra – Facturas de compra**

Para emparejar el archivo XML a un documento de compra, es necesario acceder a la función Compras – Facturas de compra, buscar los archivos a emparejar en la cuadrícula de gestión utilizando, si es necesario, también los nuevos filtros relativos a la Facturación electrónica y revisar el estado del documento en las columnas destinadas a la gestión de los archivos en el SdI. Seleccionando un documento en estado NO ASIGNADO para emparejar con el archivo XML y modificando desde el menú ribbon el estado a RECIBIDA, se abre el diálogo de selección de archivos de compra importados entre los que es necesario seleccionar el archivo a emparejar.  
El estado del documento se modifica así a RECIBIDA, con la posibilidad de restaurar el estado anterior, actuando siempre desde el menú ribbon. Desde la misma pantalla, al acceder al Registro de documentos SdI es posible observar las acciones realizadas sobre el documento, con la función Imprimir se puede imprimir el documento XML emparejado, con las funciones Descargar archivo adjunto o Descargar el contenido del registro se puede ejecutar la descarga del archivo XML seleccionado respectivamente en el panel “Adjuntos” o en el panel “Registro de documentos SdI”.          
El emparejamiento del archivo XML recibido a la factura de compra también es posible accediendo directamente al documento de compra y seleccionando el archivo XML a emparejar entre los que se proponen desde la función de cambio de estado Recibida del menú ribbon.          

4) **Emparejar el documento XML desde la función de gestión de compensaciones Administración – Compensaciones – Compensaciones**

El archivo XML de compra importado podría referirse a documentos emitidos por profesionales y registrados en Fluentis en la gestión de compensaciones. Para emparejar el archivo al registro existente, es necesario acceder al menú Administración – Compensaciones – Compensaciones, buscar el documento a emparejar en la cuadrícula de gestión utilizando, si es necesario, también los nuevos filtros relativos a la Facturación electrónica y revisar el estado del documento en las columnas destinadas a la gestión de los archivos en el SdI.

## Envío al SdI de facturas de compra/venta de proveedores/clientes extranjeros (sujetos no identificados/residentes en el territorio del estado)

La normativa actual relativa a las comunicaciones que deben enviarse a la Agencia de Ingresos prevé que los sujetos pasivos a efectos del IVA comuniquen también los datos relativos a las operaciones de cesión de bienes/prestaciones de servicios REALIZADAS y RECIBIDAS por sujetos NO identificados/no residentes en el territorio del Estado. Si para los documentos EMITIDOS es posible utilizar el mismo formato previsto para las facturas electrónicas italianas, para el envío al SdI de los documentos de compra de proveedores extranjeros se prevé un formato específico. La firma para ambos tipos de archivos es obligatoria.

El envío al SdI de estos archivos se gestiona en Fluentis a través de las operaciones de cambio de estado de los documentos registrados; el archivo XML generado a raíz del registro de la operación de compra o de venta, asume el estado de NO EXAMINADA y posteriormente puede sufrir las mismas transformaciones de estado previstas para los archivos XML transmitidos al SdI para los documentos de venta (ver párrafo ESTADOS DE LOS DOCUMENTOS). El documento XML es entonces transmitido al SdI, que lo controla y lo adquiere, y devuelve las notificaciones relacionadas con el posible rechazo debido a la falta de conformidad del archivo o de la entrega realizada.

Para los documentos de venta destinados a clientes no residentes/no establecidos, el flujo electrónico de envío al SdI nunca podrá generar la falta de entrega por errónea identificación del destinatario, porque el objetivo de dicho envío es únicamente la comunicación a la Agencia de Ingresos de la relación mantenida con el cliente extranjero y no es tarea del SdI la entrega al destinatario: los documentos emitidos y destinados a clientes extranjeros deben ser entregados de acuerdo con los métodos habituales de envío. El envío de tales documentos al SdI debe realizarse antes del último día del mes siguiente a la fecha de emisión del documento. Por esta razón, el flujo de estados relativo a estos archivos será el mismo, tanto si se trata de archivos XML de facturas de venta como de facturas de compra.

Para los detalles relativos a los estados individuales, se remite al párrafo ESTADOS DE LOS DOCUMENTOS EN FLUENTIS. En Fluentis es posible generar el archivo relativo a las facturas de venta destinadas a clientes de la UE o extra UE:  
- desde la gestión del ciclo activo como se describe en el párrafo Gestión del ciclo activo (sujetos identificados/residentes en el territorio del estado y Administración Pública), delegando la creación del archivo XML a los ajustes de los registros relativos a la facturación electrónica y gestionando la creación y el envío del archivo XML como una factura de venta destinada a un cliente italiano. El flujo de envío, gestionado desde la sección Facturación electrónica, reconocerá automáticamente el documento de venta destinado a un sujeto extranjero y, por lo tanto, requerirá obligatoriamente la imposición de la firma.  
- desde la función Facturación electrónica con sujetos no residentes que se describe a continuación, que recupera las facturas activas de los registros contables ingresados y no se refiere a facturas electrónicas ya enviadas al SdI desde la gestión del ciclo activo.          

Para la correcta gestión de los documentos de venta, en ambos casos debe configurarse el registro del cliente estableciendo el campo TIPO CÓDIGO con la opción “Canal SdI” y en el campo CÓDIGO DESTINATARIO la secuencia de 7 veces el carácter “X” (“XXXXXXX”).             
Para detalles del registro específico, consulte el párrafo Configuración de Registros de contactos.              
Los archivos relativos a las facturas de compra de sujetos extranjeros es posible mediante la función Facturación electrónica con sujetos no residentes que se describe a continuación.

## Facturación electrónica con sujetos no residentes

La función Administración > Declaraciones > Facturación electrónica con sujetos no residentes genera los archivos XML relativos a los documentos de compra y de venta que pueden ser enviados a la Agencia de Ingresos individualmente, en sustitución de la obligación del spesometro. El acceso a la función visualiza una máscara dividida en una sección superior de encabezado, en la cual es posible establecer una serie de filtros a utilizar para la visualización y la gestión de los archivos XML a enviar.           
La función, a través del filtro TIPO, y el filtro ESTADO DE LA FACTURA ELECTRÓNICA, busca los elementos relativos a las compras o a las ventas por los cuales es posible, desde la cuadrícula de resultados, gestionar el avance de los estados individualmente o masivamente por documentos con igual Estado SdI.  
La cuadrícula de resultados muestra una serie de columnas destinadas al monitoreo y la gestión de los archivos respecto al envío al SdI y en detalle:  
- *stato sdi*: recoge la descripción del estado del documento, reportando tanto el estado de gestión interno de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente por SdI (ver párrafo ESTADOS DE LOS DOCUMENTOS).  
- *nome file sdi*: el nombre del archivo que se crea en el momento en que el documento avanza al estado GENERADA; en el formato original o posteriormente a la imposición de la firma digital, representa el archivo de factura que se enviará al SdI (Nombre del archivo).  
- *Sdi Id*: el identificador único que el SdI atribuye al documento en el momento de la recepción.  
- *data ricezione sdi*: la fecha en la que el sistema de intercambio ha adquirido el documento enviado. Esta información se obtiene de la notificación de recepción que el SdI otorga a raíz de la recepción del envío y antes de proceder con los controles formales del archivo.  
- *data chiusura*: la fecha de cierre del flujo de gestión (ej. documento Entregado).  
- *data ultimo evento*: la fecha del último cambio de estado ocurrido en el archivo, ya sea manualmente o como efecto del avance del procesamiento en el SdI.              

En el menú ribbon, en la sección dedicada a la facturación electrónica, utilizando la función *Registro de documentos SdI* es posible observar las acciones realizadas sobre el documento seleccionado, con la función *Imprimir* se puede imprimir el documento XML emparejado, con las funciones *Descargar archivo adjunto* o *Descargar el contenido del registro* se puede ejecutar la descarga del archivo XML.

Con la acción de doble clic en correspondencia con una línea de resultado de la cuadrícula, se accede al detalle de la contabilización seleccionada. También en la contabilización es posible revisar el estado de procesamiento del archivo con respecto al envío al SdI.

Los documentos de venta gestionados por la función de Facturación electrónica sujetos no residentes pueden ser buscados configurando en el panel de filtros la verificación de Ventas en la sección Tipo:  
y con el botón Buscar del menú Ribbon iniciar la búsqueda de todos los registros contables relacionados con causas de venta vinculadas a tipo movimiento IVA ventas intra CEE o IVA ventas extra CEE, o que hayan valorizado el campo “Cuenta Socio” en el panel Parámetros.

Los documentos de compra gestionados por la función de Facturación electrónica sujetos no residentes pueden ser buscados configurando en el panel de filtros la verificación de Compras en la sección Tipo:  
y con el botón Buscar del menú Ribbon iniciar la búsqueda de todos los registros contables relacionados con causas de venta.            
El documento de compra de un proveedor extranjero debe ser adquirido y registrado en contabilidad utilizando las causas contables que:  
- están vinculadas al Tipo Movimiento IVA COMPRAS INTRA CEE o  
- están vinculadas al Tipo Movimiento IVA Compras Extra CEE o  
- han valorizado en el panel Parámetros el campo Cuenta Socio.               

Al finalizar la búsqueda, se llena la cuadrícula de resultados desde la cual es posible, utilizando la función de cambio de estado en la sección de facturación electrónica, proceder con el avance MANUAL de los estados hasta el estado previsto “Por enviar” que requiere la inclusión del archivo en la cola de envío al servicio Fluentis Business Hub.

Si no está configurado en la instalación el servicio Fluentis Business Hub, será posible acceder a la función *Registro de documentos SdI* y descargar el archivo XML generado para utilizar externamente a Fluentis.

El archivo XML creado durante la gestión de los estados por parte del operador deberá ser firmado, por lo tanto, si está activo el servicio Fluentis Business Hub, se creará una copia del archivo en la carpeta indicada en las configuraciones relativas a la Configuración de conexión a Fluentis Business Hub, donde es necesario indicar una carpeta de apoyo para depositar los archivos XML a firmar y recuperar posteriormente los archivos firmados.

Al término del envío al SdI, el archivo podrá asumir dos estados:  
- *non conforme*: el archivo contiene notificaciones por las cuales no puede ser aceptado por el SdI. En estos casos, es necesario acceder al Registro de documentos SdI, en el panel Registro de documentos SdI visualizar la motivación de no conformidad, corregir la eventual anomalía y enviar nuevamente el archivo regenerado.  
- *consegnata*: el archivo ha sido correctamente enviado y adquirido por el SdI. En este caso, será posible observar el resultado de la entrega accediendo al panel Registro de documentos SdI de la función Registro de documentos SdI para el archivo seleccionado.            

Los documentos en salida también pueden ser gestionados desde Documentos extranjeros en salida accesible desde Applications > BizLink > Documentos SdI. En esta función, es posible monitorear y modificar el estado relativo a las registraciones contables de compra/venta para los sujetos extranjeros.

En la Form Documentos de compras extranjeros en salida se visualizan todos los archivos producidos por los Registros contables y relativos a esta tipología de ocurrencias. La pantalla está dividida en una sección superior en la cual se exponen los filtros de selección de los archivos gestionados, entre los cuales:  
- Desde fecha/ Hasta fecha de recepción  
- Desde fecha/ Hasta fecha de recepción del cliente             

En la cuadrícula de resultados se visualizan los datos relativos a los archivos gestionados o por gestionar:           
- *stato sdi*: recoge la descripción del estado del documento, reportando tanto el estado de gestión interna de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente por SdI (ver párrafo ESTADOS DE LOS DOCUMENTOS).  
- *nome file sdi*: el nombre del archivo que se crea en el momento en que el documento avanza al estado GENERADA; en el formato original o posteriormente a la imposición de la firma digital, representa el archivo de factura que se enviará al SdI (Nombre del archivo).  
- *Sdi Id*: el identificador único que el SdI atribuye al documento en el momento de la recepción.  
- *data ultimo evento*: la fecha del último cambio de estado ocurrido en el archivo, ya sea manualmente o como efecto del avance del procesamiento en el SdI.             

En el menú ribbon se presentan las funciones de gestión del documento o los documentos seleccionados:  
- el botón Visar permite visualizar el Registro de documentos SdI donde es posible observar los eventos vinculados al archivo XML generado, proceder a su descarga o modificar su estado.  
- el botón Descargar archivo adjunto realiza la descarga del archivo seleccionado en una carpeta del sistema de archivos elegida.  
- El botón Abrir documento abre el registro contable relacionado con el archivo seleccionado.                

## Registros contables

Accediendo al punto de menú Administración > Registros > Registro, el formulario de Búsqueda de registros contables muestra, en la sección de filtros, un expander relativo a la posible información relacionada con el Estado de la factura electrónica, referido a los documentos que tienen una interacción con el Sistema de Intercambio.

En el menú ribbon, en la sección dedicada a la facturación electrónica, utilizando la función *Registro de documentos SdI* es posible observar las acciones realizadas sobre el documento seleccionado, con la función *Imprimir* se puede imprimir el documento XML emparejado, con las funciones *Descargar archivo adjunto* o *Descargar el contenido del registro* ejecutar la descarga del archivo XML.                
La cuadrícula de resumen de resultados muestra algunas columnas en las cuales se reporta el estado y el resultado de los documentos en referencia a la transmisión de los mismos al SdI:  
- *stato sdi*: recoge la descripción del estado del documento, reportando tanto el estado de gestión interno de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente por SdI (ver párrafo ESTADOS DE LOS DOCUMENTOS).  
- *nome file sdi*: el nombre del archivo que se crea en el momento en que el documento avanza al estado GENERADA; en el formato original o posteriormente a la imposición de la firma digital, representa el archivo de factura que se enviará al SdI (Nombre del archivo).  
- *Sdi Id*: el identificador único que el SdI atribuye al documento en el momento de la recepción (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).  
- *data ricezione sdi*: la fecha en la que el sistema de intercambio adquirió el documento enviado. Esta información se obtiene de la notificación de recepción que el SdI otorga a raíz de la recepción del envío y antes de proceder con los controles formales del archivo (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).  
- *data chiusura*: la fecha de cierre del flujo de gestión (ej. documento Entregado) (NO GESTIONADO PARA QUIEN NO HA SUSCRITO EL CONTRATO FE CON FLUENTIS).  
- *data ultimo evento*: la fecha del último cambio de estado ocurrido en el archivo, ya sea manualmente o como efecto del avance del procesamiento en el SdI.