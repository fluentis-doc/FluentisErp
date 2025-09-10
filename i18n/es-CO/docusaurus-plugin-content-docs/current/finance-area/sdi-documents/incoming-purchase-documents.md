---
title: documenti acquisto in entrata
sidebar_position: 3
---

En Fluentis es posible, una vez configurado el servicio Fluentis Business Hub, recibir las facturas pasivas provenientes de los proveedores y que transitan por el Sistema de Intercambio. Una de las modalidades de visualización de dichos documentos es mediante la gestión de facturas en la función **Documentos de compra en entrada**. El formulario de gestión se presenta dividido en una sección de encabezado, con los campos de filtro para la búsqueda de documentos, y una cuadrícula de resultados.

- **stato sdi**: indica el estado del documento una vez adquirido en Fluentis. Puede ser *non assegnato*, cuando la factura aún no ha sido emparejada con un registro contable o con una factura emitida del ciclo pasivo o documento emitido hacia un perceptor; o *ricevuta*, cuando la factura ha sido emparejada.  
- **tipo**: el código de referencia del tipo de documento (factura de compra).  
- **Fecha doc.def. (Data doc.def.)** y **Número doc.def (Numero doc.def)**: fecha y número del documento adquirido.  
- **fornitore**: el emisor del documento.  
- **nome file sdi**: el nombre del archivo XML presente en el sistema de intercambio y enviado por este al Fluentis Business Hub.  
- **data ultimo evento**: se refiere a la última acción realizada por el operador o a la última notificación recibida del SdI durante el proceso de gestión del documento.

*Botones específicos:*

> **visualizza**: permite visualizar el archivo XML seleccionado abriendo el *Registro de documentos SdI*, donde se pueden ver las acciones realizadas sobre el documento, descargar los adjuntos y emparejar el archivo SdI con las compras, los registros o los perceptores. Para más detalles sobre estos procedimientos, consulte el [párrafo 1](/docs/finance-area/sdi-documents/incoming-purchase-documents).  
> **apri fattura**: se habilita solo si el documento seleccionado está en estado *ricevuta* y abre el registro contable/documento de compra/compensación al que el archivo XML está emparejado.  
> **scarica allegato**: realiza la descarga del archivo XML seleccionado.  
> **importa il file xml**: abre automáticamente una ventana en la que seleccionar el/los archivos a importar en el registro de documentos SDI.  
> **parametri creazione registrazioni**: permite establecer los parámetros para la creación del registro. Para más detalles, vea el [párrafo 2](/docs/finance-area/sdi-documents/incoming-purchase-documents).  
> **creazione registrazione**: permite crear automáticamente el registro contable a partir del archivo XML recibido. Para más detalles, vea el [párrafo 3](/docs/finance-area/sdi-documents/incoming-purchase-documents).  
> **Creación factura de compra (Creazione fattura di acquisto)**: permite crear la factura de compra a partir del archivo XML. Tras la creación de la factura, Fluentis realiza la asociación automática del DDT de compra o del pedido de proveedor correspondiente, si está presente. Para más detalles, vea el [párrafo 4](/docs/finance-area/sdi-documents/incoming-purchase-documents).  
> **creazione compenso**: permite crear la compensación a partir del documento XML. Para proceder, es necesario que el Proveedor (o el Agente) seleccionado tenga activado el flag *ritenuta d'acconto*.  

### 1. Emparejamiento de las facturas electrónicas de compra (Abbinamento delle fatture elettroniche di acquisto)

Después de haber realizado la búsqueda de los documentos en entrada, utilizando la función **visualizza** o mediante la acción de doble clic en el archivo a gestionar, es posible emparejar el archivo XML con un registro contable o con un documento de compra o también con un registro de compensaciones, utilizando respectivamente las funciones:  
- **collega agli acquisti**  
- **collega alle registrazioni**  
- **collega ai percipienti**  

Al hacer clic en correspondencia de una de las tres funciones mencionadas, se visualiza un formulario de búsqueda de los documentos de compra registrados en el ciclo pasivo de Fluentis, de los registros contables relacionados con las compras y de los documentos relacionados con las compensaciones de perceptores.  
Al seleccionar un elemento de la cuadrícula de resultados, el documento XML será marcado con el estado **ricevuta** y junto a la Transición Documento recibido se indicará fecha y hora del emparejamiento. El documento también puede volver a estar en estado **non assegnato**, en caso de que sea necesario regresar al estado anterior.

### 2. Parámetros de creación automática de registros (Parametri creazione automatica registrazioni)

Dentro del formulario de "Documentos de compra en entrada", al seleccionar el botón *parametri creazione registrazioni* se abrirá un pop-up dentro del cual cada usuario puede configurar las siguientes opciones de gestión:  
1. Fecha de registro propuesta (Data registrazione proposta)  
2. Visualizar datos de detalle (Visualizza dati di dettaglio)  

Con la primera, el usuario puede elegir si asignarse la última fecha de registro introducida (para el registro IVA de la causal predefinida/seleccionada), la fecha actual o la fecha del último evento del archivo mismo (es decir, la fecha de recepción del SdI).  

Con la segunda, el usuario establece la visualización de la máscara de gestión del archivo mismo, donde estarán ya valoradas las configuraciones guardadas en el registro del proveedor que emitió el archivo. En este formulario será posible modificar opciones ya almacenadas o sobrescribir lo propuesto para adaptarlo a la necesidad del momento, antes de crear el registro. Sin esta opción marcada, el formulario solo se abriría en caso de que Fluentis no tuviese todos los parámetros para establecer el registro resultante, típicamente para un nuevo tipo de IVA o pago utilizado por el proveedor respecto a los anteriores ya gestionados por el usuario.

### 3. Contabilización automática (Contabilizzazione automatica)

Partiendo de la factura de compra recibida, es posible crear automáticamente el registro contable correspondiente. Solo se necesita seleccionar el archivo XML y luego hacer clic en el botón **creazione registrazione**.  

Una vez presionado este botón, Fluentis analizará el archivo para identificar, mediante el NIF del cedente/prestador, el subcuenta del proveedor. Las situaciones posibles son tres:  
1. No se identifica ningún proveedor; en consecuencia, se preguntará si se desea crear un nuevo sujeto.  
Al presionar 'Sí (Si)', se abrirá automáticamente la máscara de creación de un nuevo registro, en la cual se habrá configurado el NIF del sujeto tomando sus datos de la base de datos comunitaria del Vies: será necesario entrar en la pestaña 'Datos contables' para asignar un código contable de tipo proveedor al nuevo registro. Es necesario guardar para poder continuar en el procedimiento; si se cierra sin guardar, el proceso de contabilización se cancelará.  
2. Hay más subcuentas de tipo proveedor vinculadas a un registro con el NIF del cedente/prestador. En este caso, será necesario elegir qué subcuenta utilizar.  
3. El proveedor ha sido identificado de manera única.  

Si el proveedor ya está presente, o si en este documento se ha introducido por primera vez un artículo codificado por parte del proveedor, Fluentis identificará el primer ‘Tipo código artículo’ presente en el archivo (podrían haber varios: código proveedor, código cliente, EAN13, nomenclatura, etc.) para pedir confirmación sobre cuál será la codificación del artículo a almacenar para este sujeto.  

La fase siguiente depende del parámetro del usuario *visualizza dati di dettaglio* o del hecho de que el archivo en gestión sea el primero para este sujeto o si este contiene una codificación que Fluentis no sabe cómo gestionar para este sujeto. Si es la primera factura que se recibe de este proveedor y no hay configuraciones predeterminadas en su registro, entonces siempre se abrirá una máscara donde Fluentis pedirá definir:  
- La **causale** a utilizar: serán visibles las causales que tienen como tipo documento uno de aquellos codificados con el ‘TD' utilizado por el proveedor en el archivo. Si no hay causales con estas características, el menú desplegable mostrará todas las causales contables (por ejemplo, no se ha codificado una causal específica para los documentos TD24 y se desea utilizar la causal de compra con el TD01).  
- El **costo de contrapartida predefinido (costo di contropartita predefinito)**: en este campo se puede definir el subcuenta de costo estándar a asignar a todas las líneas de artículo para las cuales no se ha memorizado un subcuenta específica.  
- Los **articoli** presentes en la factura: en esta cuadrícula se tiene visibilidad de los códigos y descripciones de línea presentes en el archivo, para poder asignar subcuentas específicas a determinados artículos presentes en la factura. En caso de que el artículo sea un artículo codificado, Fluentis almacenará este código para identificarlo en los documentos siguientes; si el artículo no está codificado, se almacenarán las descripciones de línea del artículo (los primeros 200 caracteres).  
- **Alícuotas o exenciones (Aliquote o esenzioni)**: dentro de esta cuadrícula tendremos el desglose IVA, con el porcentaje aplicado por el proveedor o la naturaleza de la exención utilizada. Fluentis almacenará el porcentaje (por ejemplo, 22.00) o el código de exención utilizado por el proveedor con la respectiva alícuota seleccionada por el usuario.  

Cada uno de estos tipos de datos prevé la opción de guardar la selección realizada, de modo que pueda reutilizarse en las facturas que se recibirán posteriormente del mismo sujeto.  

En caso de que este no sea el primer archivo y el usuario haya marcado el flag *visualizza dati di dettaglio*, esta misma máscara aparecerá con previamente asignados los posibles valores ya memorizados en el registro del proveedor que emitió el archivo, para permitir una modificación antes de la creación del registro contable.  

En caso de que este no sea el primer archivo y el usuario no haya marcado el flag *visualizza dati di dettaglio*, entonces podría abrirse una máscara de configuración solo para los valores que Fluentis no sabe cómo gestionar en relación con las configuraciones ya almacenadas en el registro del proveedor que emitió el archivo: por ejemplo, si es la primera vez que emite una factura con tipo de pago MP12 en lugar del anterior MP05, o un nuevo código de exención IVA.  

La fase final será la creación del registro contable: una vez confirmadas las configuraciones ingresadas, o directamente después de la lectura del archivo si estas ya han sido memorizadas y el usuario no ha marcado el flag *visualizza dati di dettaglio*, se abrirá el registro contable valorizado con los datos del archivo mismo.  
El registro puede ser modificado aún más en esta fase, pero estas modificaciones no afectarán las configuraciones ya almacenadas en la fase anterior.  

En caso de que no se complete el guardado del registro, Fluentis cancelará las operaciones realizadas sobre el archivo que quedará en estado *non assegnato*: las posibles configuraciones ya guardadas en el proceso, en cambio, se mantendrán dentro del registro del proveedor.  

#### 3.1 Registro de proveedores: Configuración para la importación de facturas electrónicas (Anagrafica fornitori: Configurazione importazione fatture elettroniche)

Las configuraciones almacenadas durante la gestión de los varios archivos están memorizadas dentro de los registros de proveedores en la pestaña *configurazione importazione fatture elettroniche*. En esta cuadrícula encontramos las secciones que hemos memorizado anteriormente.  

En el primer campo indicamos qué vamos a almacenar en la línea: el tipo de documento, el tipo de cesión/prestación, el porcentaje de IVA y su naturaleza, el tipo de pago. Dependiendo de este tipo de línea, se activarán los campos siguientes: en el ‘Código P.A. (Codice P.A.)' se visualizará la lista de códigos oficiales que se pueden utilizar en los archivos (desde tipos de documentos, hasta naturalezas de IVA, tipos de pago, …), en las columnas siguientes se indicarán la causal, la alícuota de IVA, el tipo de pago o el subcuenta contable de Fluentis. En el campo ‘Valor proveedor (Valore fornitore)', sin embargo, tendremos típicamente los datos ‘libres' que el proveedor puede ingresar en el archivo: en particular, el porcentaje de IVA (22.00, 10.00, etc.) pero sobre todo el código o la descripción de la línea del artículo.  

El ‘costo de contrapartida predefinido (costo di contropartita predefinito)' (punto 2 del listado anterior) se almacena en el campo estándar del subcuenta de contrapartida del registro. El “Tipo código artículo proveedor (Tipo codice articolo fornitore)”, finalmente, está presente en la pestaña ‘Información fiscal (Informazioni fiscali)'.  

Es posible intervenir también en estos puntos para revisar las configuraciones ya almacenadas y modificarlas de cara a las contabilizaciones futuras.  

#### 3.2 Cancelación de un registro creado automáticamente (Cancellazione di una registrazione creata automaticamente)

Proceder de la siguiente manera:

- Anular el vínculo automático entre el documento SDI y el registro, devolviendo el documento SDI al estado **non assegnato** (usando el menú desplegable accesible tanto desde la máscara con la lista de documentos SDI en entrada, como desde la máscara con la lista de los registros contables).  

- Proceder a eliminar el registro contable normalmente como si hubiera sido insertado por el procedimiento de anotación manual.

### 4. Creación de factura de compra y Evasión DDT/Pedido (Creazione fattura di acquisto ed Evasione DDT/Ordine)

Partiendo del documento XML recibido, es posible crear automáticamente la correspondiente factura de compra mediante el botón **Creación factura de compra (Creazione fattura d'acquisto)**.  

Una vez presionado este botón, Fluentis analizará el archivo para identificar, mediante el NIF del cedente/prestador, el subcuenta del proveedor. Las situaciones posibles son análogas a las del punto anterior.  

Si es la primera factura que se recibe de este proveedor y no hay configuraciones predeterminadas en su registro, entonces se abrirá una máscara donde se definirá:  
- El **tipo fattura acquisto** a elegir entre los ya codificados en la tabla correspondiente.  
- El **tipo fatturato acquisti**: dato opcional y modificable también a nivel de cada línea de artículo.  
- La **unità di misura** a utilizar en caso de que no esté indicada en la línea de artículo.  
- Los **articoli** presentes en la factura: en caso de que el artículo sea un artículo codificado, Fluentis almacenará este código para identificarlop en documentos posteriores; si el artículo no está codificado, se almacenarán las descripciones de línea del artículo (los primeros 200 caracteres).  
- **Alícuotas o exenciones (Aliquote o esenzioni)**: dentro de esta cuadrícula tendremos el desglose IVA, con el porcentaje aplicado por el proveedor o la naturaleza de la exención utilizada.  

Cada uno de estos tipos de datos prevé la opción de guardar la selección realizada, de modo que pueda reutilizarse en las facturas posteriores que se recibirán del mismo sujeto.  

Una vez confirmados los datos, se abrirá la factura de compra recién creada.  
Al guardar la factura, Fluentis realiza una búsqueda de los DDT de compra o de los pedidos de proveedor no cumplidos para proceder con la evasión automática.  

#### 4.1 Asociación de factura con DDT/Pedido de compra (Associazione fattura con DDT/Ordine di Acquisto)

Cuando la nueva factura se guarda, Fluentis inicia automáticamente la búsqueda de DDT o de pedidos para asociar con la factura. Si encuentra un DDT o un pedido para asociar con toda la factura o con algunas líneas de artículo, establece el documento (o la línea del documento) como evadido y devuelve a la factura la referencia al DDT o al pedido, en los campos correspondientes. Las prioridades de búsqueda son las siguientes:  
1. Búsqueda de DDT de compra que tenga la misma fecha y número de documento indicado en el archivo XML (o con los mismos valores en los campos *nostro riferimento* y/o *vostro riferimento*). Si encuentra un DDT con estos datos, procede con la verificación de los artículos (primero por código de artículo, luego por descripción). Si también los artículos coinciden con los que se insertaron en la factura, se realiza la evasión, posiblemente parcial, del DDT.  
2. La búsqueda se realiza en todos los DDT no evadidos a nombre del mismo proveedor de la factura, ordenándolos por fecha y buscando por línea de artículo. Los artículos de la factura pueden estar vinculados a diferentes DDT.  
3. Si hay DDT no evadidos para el proveedor, pero algunas (o todas) las líneas no pueden vincularse a la factura, se mostrará el formulario de *asociación manual*.  
4. Si no hay DDT de compra para el proveedor, la búsqueda se realizará en los pedidos de proveedor comenzando por los Datos del pedido de compra: se busca un pedido con la misma fecha y número de documento igual al ID de documento indicado en el archivo XML (o con los mismos valores en los campos *nostro riferimento* y/o *vostro riferimento*). Si se identifica el pedido, se procede con la verificación de los artículos según el *Número de referencia de línea*. En caso de resultado negativo, se realizará una búsqueda por código y luego por descripción del artículo.  
5. Si no se identifica el pedido correspondiente, se realizará una búsqueda en todos los pedidos no evadidos a nombre del proveedor de la factura, comparando luego la línea de artículo individual. La factura puede evadir diferentes pedidos.  
6. Si no es posible realizar la asociación de algunas (o todas) las líneas, se abrirá el formulario de *Asociación manual*. Alternativamente, el pedido se establecerá como *evaso* (o *parz. evaso* y las líneas de artículo de la factura llevarán la referencia al pedido identificado.  

El formulario de **Asociación manual (Associazione manuale)** se abre en los casos en los que la evasión no puede realizarse automáticamente tras la creación de la factura o cuando se hace clic en el botón *sdi – chiusura documenti* en la barra de la factura de compra.  
En este formulario se visualizarán todos los pedidos y DDT de compra a nombre del proveedor y que no han sido evadidos, para que el usuario pueda indicar manualmente, para cada línea de artículo de la factura, el DDT o el pedido correspondiente.