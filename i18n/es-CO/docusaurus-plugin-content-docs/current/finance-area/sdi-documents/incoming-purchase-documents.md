---
title: Documentos de Compra entrantes
sidebar_position: 3
ai_generated: true
---

En Fluentis es posible, una vez configurado el servicio Fluentis Business Hub, recibir las facturas de compra provenientes de los proveedores y que transitan por el Sistema de Intercambio. Una de las formas de visualizar dichos documentos es a través de la gestión de facturas en la función **Documentos de compra entrantes<!-- Documenti acquisto in entrata -->**. El formulario de gestión se presenta dividido en una sección de cabecera, con los campos de filtro para la búsqueda de documentos, y una cuadrícula de resultados.

- **Estado Sdi**: indica el estado del documento una vez adquirido en Fluentis. Puede ser *No asignado<!-- Non assegnato -->*, cuando la factura aún no ha sido vinculada a un registro contable<!-- registrazione contabile --> o a una factura emitida por el ciclo de compras<!-- ciclo passivo --> o documento emitido para un perceptor, o *Recibida<!-- Ricevuta -->*, cuando la factura ya ha sido vinculada.   
- **Tipo**: el código de referencia del tipo de documento (factura de compra).
- **Fecha doc.def.** y **Número doc.def**: fecha y número del documento recibido.
- **Proveedor**: el emisor del documento.
- **Nombre de archivo SdI**: el nombre del archivo XML presente en el sistema de intercambio y enviado por este último al Fluentis Business Hub.
- **Fecha último evento**: se refiere a la última acción realizada por el usuario o a la última notificación recibida desde el SdI durante el proceso de gestión del documento.

*Botones específicos:*

> **Visualizar<!-- Visualizza -->**: permite revisar el archivo XML seleccionado abriendo el *Registro de documentos SdI*, donde es posible visualizar las acciones realizadas sobre el documento, descargar los archivos adjuntos y vincular el archivo SdI a las compras<!-- acquisti -->, a los registros<!-- registrazioni --> o a los perceptores<!-- percipienti -->. Para más detalles sobre estos procedimientos, consulte el [párrafo 1](/docs/finance-area/sdi-documents/incoming-purchase-documents).  
> **Abrir factura<!-- Apri fattura -->**: está habilitado solo si el documento seleccionado está en estado *Recibida<!-- Riceuta -->* y abre el registro contable<!-- registrazione contabile -->/documento de compra/compensación al que está vinculado el archivo XML.   
> **Descargar adjunto<!-- Scarica allegato -->**: descarga el archivo XML seleccionado.   
> **Importar archivo XML<!-- Importa il file XML -->**: abre automáticamente una ventana donde seleccionar el/los archivos a importar en el registro de documentos SDI.  
> **Parámetros creación registros<!-- Parametri creazione registrazioni -->**: permite configurar los parámetros para la creación del registro<!-- registrazione -->. Para más detalles, ver el [párrafo 2](/docs/finance-area/sdi-documents/incoming-purchase-documents).  
> **Crear registro<!-- Creazione registrazione -->**: permite crear automáticamente el registro contable<!-- registrazione contabile --> a partir del archivo XML recibido. Para más detalles, ver el [párrafo 3](/docs/finance-area/sdi-documents/incoming-purchase-documents).  
> **Crear factura de compra<!-- Creazione fattura di acquisto -->**: permite crear la Factura de Compra a partir del archivo XML. Tras la creación de la factura, Fluentis realiza la asociación automática de la Nota de Entrega de Compra<!-- DDT di Acquisto --> o de la Orden de compra correspondiente, si está presente. Para más detalles, ver el [párrafo 4](/docs/finance-area/sdi-documents/incoming-purchase-documents).  
> **Crear compensación<!-- Creazione compenso -->**: permite crear la compensación a partir del documento XML. Para proceder, es necesario que el Proveedor (o el Agente) seleccionado tenga activado el indicador *Retención de fuente<!-- Ritenuta d'acconto -->*.   

### 1. Asociación de facturas electrónicas de compra<!-- Abbinamento delle fatture elettroniche di acquisto -->

Después de buscar los documentos entrantes, utilizando la función **Visualizar<!-- Visualizza -->** o haciendo doble clic sobre el archivo a gestionar, es posible asociar el archivo XML a un registro contable<!-- registrazione contabile -->, a un documento de compra o a un registro de compensaciones, utilizando las siguientes funciones respectivamente:
- **Vincular a compras<!-- Collega agli acquisti -->**
- **Vincular a registros<!-- Collega alle registrazioni -->**
- **Vincular a perceptores<!-- Collega ai percipienti -->**

Al hacer clic en una de las tres funciones mencionadas, se mostrará un formulario de búsqueda de los documentos de compra registrados en el ciclo de compras<!-- ciclo passivo --> de Fluentis, de los registros contables correspondientes a las compras, de los documentos relativos a las compensaciones de perceptores.    
Al seleccionar un elemento de la cuadrícula de resultados, el documento XML será marcado con el estado **Recibida<!-- Ricevuta -->** y en la columna de Transición Documento recibido se indicará la fecha y hora de la asociación. El documento también se puede devolver al estado **No asignado<!-- Non assegnato -->** si es necesario regresar al estado anterior.

### 2. Parámetros para la creación automática de registros<!-- Parametri creazione automatica registrazioni -->

Dentro del formulario de “Documentos de compra entrantes<!-- Documenti acquisto in entrata -->”, al seleccionar el botón *Parámetros creación registros<!-- Parametri creazione registrazioni -->* se abrirá una ventana emergente donde cada usuario puede configurar las siguientes opciones de gestión:  
1. Fecha de registro<!-- Data registrazione --> sugerida
2. Visualizar datos de detalle    

Con la primera opción, el usuario puede elegir si desea que se asigne la última fecha de registro<!-- registrazione --> introducida (para el libro IVA de la causa<!-- causale --> preseleccionada), la fecha actual o la fecha del último evento del propio archivo (es decir, la fecha de recepción desde el Sdi).

Con la segunda opción, el usuario configura la visualización del formulario de gestión del propio archivo, donde ya estarán valorizadas las configuraciones guardadas en la ficha maestra del proveedor que emitió el archivo. En este formulario será posible modificar cualquier opción ya almacenada o sobrescribir lo propuesto para adaptarlo a la necesidad del momento, antes de crear el registro<!-- registrazione -->. Si este indicador no está activado, el formulario solo se abrirá en caso de que Fluentis no tenga todos los parámetros para establecer el registro resultante, típicamente para un nuevo tipo de IVA o pago utilizado por el proveedor en comparación con los ya gestionados por el usuario.

### 3. Contabilización automática<!-- Contabilizzazione automatica -->

A partir de la factura de compra recibida, es posible crear automáticamente el correspondiente registro contable<!-- registrazione contabile -->. Solo es necesario seleccionar el archivo XML y posteriormente hacer clic en el botón **Crear registro<!-- Creazione registrazione -->**.
  
Una vez presionado este botón, Fluentis analizará el archivo para identificar, mediante el número de IVA del transmitente, la subcuenta<!-- sottoconto --> del proveedor. Las situaciones posibles son tres:  
1. No se identifica ningún proveedor; en consecuencia, se preguntará si se desea crear un nuevo sujeto.  
Al presionar ‘Sí’ se abrirá automáticamente el formulario de creación de una nueva ficha maestra, donde ya se habrá establecido el número de IVA del sujeto tomando los datos de la base de datos comunitaria del VIES: será necesario entrar en la pestaña ‘Datos contables’ para asignar un código contable de tipo proveedor a la nueva ficha. Es necesario guardar para poder continuar; si se cierra sin guardar, el procedimiento de contabilización será anulado.
2. Hay varias subcuentas<!-- sottoconti --> de tipo proveedor asociadas a una ficha maestra con el número de IVA del transmitente. En este caso será necesario elegir cuál subcuenta utilizar.
3. El proveedor ha sido identificado de manera única.

Si el proveedor ya está presente, o si en este documento por primera vez se ha insertado un artículo codificado por parte del proveedor, Fluentis identificará el primer ‘Tipo de código de artículo’ presente en el archivo (pueden haber N: código proveedor, código cliente, EAN13, nomenclatura, etc.) para solicitar confirmación sobre cuál será el código de artículo a almacenar para ese sujeto.

La siguiente fase depende del parámetro de usuario *Visualizar datos de detalle* o del hecho de que el archivo en gestión sea el primero para ese sujeto o si en él está presente una codificación que Fluentis no sabe cómo gestionar para esa ficha maestra. Si es la primera factura que se recibe de este proveedor y no hay configuraciones predefinidas en su ficha, entonces siempre se abrirá un formulario en el que Fluentis solicitará definir:  
- La **causal<!-- causale -->** a utilizar: serán visibles las causales<!-- causali --> que tengan como tipo de documento uno de los codificados con el ‘TD’ utilizado por el proveedor en el archivo. Si no hay causales con estas características, el menú desplegable mostrará todas las causales contables (ej.: no se ha codificado una causal específica para los documentos TD24 y se desea utilizar la causal de compra<!-- causale dell'acquisto --> con el TD01).  
- El **coste de contrapartida predefinido**: en este campo se puede definir la subcuenta<!-- sottoconto --> de coste estándar a asignar a todas las líneas de artículo para las que no se ha almacenado una subcuenta específica.  
- Los **artículos** presentes en la factura: en esta cuadrícula se pueden ver los códigos y descripciones de línea presentes en el archivo, para asignar subcuentas específicas a determinados artículos contenidos en la factura. Si el artículo está codificado, Fluentis almacenará este código para identificarlo en documentos futuros; si no está codificado se almacenarán las descripciones de línea del artículo (los primeros 200 caracteres).
- **Tipos impositivos o exenciones**: en esta cuadrícula tendremos el desglose del IVA, con el porcentaje aplicado por el proveedor o la naturaleza de la exención utilizada. Fluentis almacenará el porcentaje (ej.: 22,00) o el código de exención utilizado por el proveedor junto con la tasa seleccionada por el usuario.   

Cada uno de estos tipos de datos prevé la opción de guardar la selección efectuada, para poder reutilizarla en las facturas que se reciban posteriormente del mismo sujeto.

Si este no es el primer archivo y el usuario ha activado el indicador *Visualizar datos de detalle*, este mismo formulario se mostrará ya con los valores asignados previamente almacenados en la ficha del proveedor que emitió el archivo, permitiendo modificarlos antes de crear el registro contable<!-- registrazione contabile -->.

Si este no es el primer archivo y el usuario no ha activado el indicador *Visualizar datos de detalle*, entonces podría abrirse un formulario de configuración solo para los valores que Fluentis no sabe cómo gestionar en función de las configuraciones ya almacenadas en la ficha maestra del proveedor que lo emitió: por ejemplo, es la primera vez que emite factura con tipo de pago MP12 en vez del anterior MP05, o un nuevo código de exención de IVA.

La fase conclusiva será la creación del registro contable<!-- registrazione contabile -->: una vez confirmadas las configuraciones ingresadas o directamente tras la lectura del archivo si estas ya han sido almacenadas y el usuario no ha activado el indicador *Visualizar datos de detalle*, se abrirá el registro contable<!-- registrazione contabile --> completado con los datos del archivo.  
El registro<!-- registrazione --> puede modificarse aún en esta fase, pero estas modificaciones no afectarán las configuraciones ya almacenadas anteriormente.

En caso de que no se complete el guardado del registro<!-- registrazione -->, Fluentis anulará las operaciones realizadas sobre el archivo, que quedará en estado *No asignado<!-- Non assegnato -->*; las configuraciones guardadas durante el proceso, por su parte, se mantendrán dentro de la ficha del proveedor.

#### 3.1 Ficha de proveedores: Configuración de importación de facturas electrónicas<!-- Anagrafica fornitori: Configurazione importazione fatture elettroniche -->

Las configuraciones guardadas durante la gestión de los diversos archivos se almacenan dentro de las correspondientes fichas de proveedores<!-- anagrafiche fornitori -->, en la pestaña *Configuración de importación de facturas electrónicas*. En esta cuadrícula aparecen las secciones que hemos memorizado previamente.

En el primer campo se indica qué se va a guardar en la fila: el tipo de documento, el tipo de cesión/prestación, el porcentaje de IVA y su naturaleza, el tipo de pago. Dependiendo de este tipo de fila, se activarán los campos siguientes: en el ‘Código P.A.’ se mostrarán la lista de los códigos oficiales que se pueden utilizar en los archivos (desde tipos de documento, naturalezas de IVA, tipos de pago, etc.), en las columnas posteriores se indicarán la causal<!-- causale -->, así como la tasa de IVA, el tipo de pago o la subcuenta contable<!-- sottoconto contabile --> de Fluentis. En el campo ‘Valor del proveedor’, por su parte, normalmente veremos los datos ‘libres’ que el proveedor puede introducir en el archivo: en particular, el porcentaje de IVA (22,00, 10,00, etc.), pero sobre todo el código o la descripción de la línea de artículo.

El ‘coste de contrapartida predefinido’ (punto 2 del listado anterior) se guarda en el campo estándar de la subcuenta<!-- sottoconto --> de contrapartida de la ficha. El “Tipo de código de artículo proveedor”, finalmente, se encuentra en la pestaña ‘Información fiscal’.

Es posible intervenir también en estos puntos para revisar las configuraciones ya guardadas y modificarlas de cara a futuras contabilizaciones.

#### 3.2 Eliminación de un registro creado automáticamente<!-- Cancellazione di una registrazione creata automaticamente -->

Proceda de la siguiente manera:

- Anule la vinculación automática entre el documento SDI y el registro<!-- registrazione -->, devolviendo el documento SDI al estado **no asignado<!-- non assegnato -->** (utilizando el menú desplegable específico accesible tanto desde la pantalla con la lista de documentos SDI entrantes como desde la pantalla con la lista de registros contables<!-- registrazioni contabili -->).

- Luego, elimine el registro contable<!-- registrazione contabile --> de la manera habitual, como si hubiera sido introducido por el procedimiento de primer apunte.

### 4. Creación de la factura de compra y ejecución de Nota de Entrega/Orden<!-- Creazione fattura di acquisto ed Evasione DDT/Ordine -->

A partir del documento XML recibido, es posible crear automáticamente la correspondiente factura de compra utilizando el botón **Crear factura de compra<!-- Creazione fattura d'acquisto -->**.
  
Una vez presionado este botón, Fluentis analizará el archivo para identificar, a través del número de IVA del transmitente, la subcuenta<!-- sottoconto --> del proveedor. Las situaciones posibles son las mismas que en el punto anterior.   

Si es la primera factura que se recibe de este proveedor y no existen configuraciones predeterminadas en su ficha, entonces se abrirá un formulario en el que definir: 
- El **Tipo de factura de compra<!-- Tipo fattura acquisto -->** a elegir entre los ya codificados en la tabla correspondiente. 
- El **Tipo de facturación de compras<!-- Tipo fatturato acquisti -->**: dato opcional y modificable también a nivel de cada línea de artículo. 
- La **Unidad de medida** a utilizar en caso de que no esté indicada en la línea del artículo.
- Los **artículos** presentes en la factura: si el artículo está codificado, Fluentis almacenará este código para identificarlo en documentos futuros; si no lo está, se guardarán las descripciones de línea del artículo (los primeros 200 caracteres).  
- **Tipos impositivos o exenciones**: en esta cuadrícula tendremos el desglose de IVA, con el porcentaje aplicado por el proveedor o la naturaleza de la exención utilizada.  

Cada uno de estos tipos de datos prevé la opción de guardar la selección realizada, para poder reutilizarla en las facturas que se reciban posteriormente del mismo sujeto.  

Una vez confirmados los datos, se abrirá la factura de compra recién creada.  
Al guardar la factura, Fluentis realiza una búsqueda en las Notas de Entrega de Compra<!-- DDT di Acquisto --> o en las Órdenes de Compra<!-- Ordini Fornitore --> no cumplidas para proceder con la ejecución automática.

#### 4.1 Asociación de la factura con la Nota de Entrega/Orden de Compra<!-- Associazione fattura con DDT/Ordine di Acquisto -->

Cuando se guarda la nueva factura, Fluentis inicia automáticamente la búsqueda de las Notas de Entrega<!-- DDT --> o de las órdenes para asociarlas a la factura. Si encuentra una Nota de Entrega o una orden para asociar a toda la factura o a algunas líneas de artículo, marca el documento (o la línea del documento) como cumplido y muestra en la factura la referencia a la Nota de Entrega o a la orden, en los campos correspondientes. Las prioridades de búsqueda son las siguientes:
1. Buscar Notas de Entrega de Compra<!-- DDT di Acquisto --> que tengan la misma fecha y número de documento indicados en el archivo XML (o los mismos valores en los campos *Nuestra Referencia* y/o *Vuestra Referencia*). Si encuentra una Nota de Entrega con estos datos, prosigue con la verificación de los artículos (primero por código de artículo, luego por descripción). Si además los artículos coinciden con los consignados en factura se realiza la ejecución, eventualmente parcial, de la Nota de Entrega<!-- DDT -->.
2. La búsqueda se realiza en todas las Notas de Entrega<!-- DDT --> no cumplidas a nombre del mismo proveedor de la factura, ordenándolas por fecha y buscando por línea de artículo. Los artículos de la factura pueden estar vinculados a diferentes Notas de Entrega<!-- DDT -->.
3. Si hay Notas de Entrega<!-- DDT --> no cumplidas para el proveedor, pero algunas (o todas) las líneas no pueden vincularse a la factura, se visualizará el formulario de *asociación manual*.
4. Si no existen Notas de Entrega de compra<!-- DDT di acquisto --> para el proveedor, la búsqueda se realizará en las Órdenes de Compra<!-- Ordini fornitore --> iniciando por los Datos de Orden de compra: se buscará una orden con la misma fecha y número de documento igual al id de documento indicado en el archivo XML (o los mismos valores en los campos *Nuestra Referencia* y/o *Vuestra Referencia*). Si se identifica la orden, se procederá con la verificación de los artículos en base al *Referencia de número de línea*; en caso negativo, realizará una búsqueda por código y luego por descripción de artículo.
5. Si no se identifica la orden correspondiente, realizará una búsqueda en todas las órdenes no cumplidas a nombre del proveedor de la factura, comparando después cada línea de artículo. La factura puede ejecutar varias órdenes.
6. Si no es posible realizar la asociación de algunas (o de todas) las líneas, se abrirá el formulario de *Asociación manual*. De lo contrario, la orden se establecerá como *Cumplida*o*Parcialmente cumplida*) y las líneas de artículo de la factura reflejarán la referencia a la orden identificada.

El formulario de **Asociación manual** se abre en los casos en los que la ejecución no puede realizarse automáticamente tras la creación de la factura o cuando se hace clic en el botón *Sdi – Cierre de documentos* en la cinta de opciones de la factura de compra.  
En este formulario se mostrarán todas las órdenes y Notas de Entrega<!-- DDT --> de compra a nombre del proveedor y que aún no han sido cumplidas, para que el usuario pueda indicar manualmente, para cada línea de artículo de la factura, la Nota de Entrega<!-- DDT --> o la orden correspondiente.