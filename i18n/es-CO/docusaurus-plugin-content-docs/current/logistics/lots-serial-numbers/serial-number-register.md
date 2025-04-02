---
title: Registro de Números de Serie (Anagrafica Serial Number)
sidebar_position: 8
---

:::important ¿Para qué sirve? (A cosa serve)
El registro de números de serie de Fluentis es un módulo esencial para la gestión detallada de los números de serie, permitiendo a las empresas rastrear artículos individuales a través de un código identificativo único. Esta funcionalidad responde a necesidades específicas de trazabilidad y seguridad, especialmente importante para artículos críticos o de alto valor, donde es fundamental monitorear cada pieza individual en lugar de simplemente una cantidad total.

El usuario tiene la posibilidad de buscar un número de serie específico y visualizar sus detalles con un simple doble clic. En esta sección, es posible modificar información clave como el código del cliente, el código del proveedor y el estado del número de serie, que puede ser anulado, cerrado forzosamente o reservado. Además, el registro proporciona detalles sobre los documentos de carga y descarga asociados al número de serie, permitiendo un análisis completo de su uso a lo largo del tiempo.

El enfoque sistemático en la gestión de números de serie no solo optimiza los procesos internos, sino que también garantiza el cumplimiento de las normativas vigentes, convirtiendo este registro en una herramienta indispensable para las empresas modernas que buscan maximizar la eficiencia operativa y la calidad del servicio.
:::

Esta ventana muestra el detalle del lote y se compone de 4 secciones diferentes:

### Cabecera del Número de Serie (Testata Serial Number)

En esta sección se muestran, con la posibilidad de modificar algunos, los datos principales relacionados con el lote y en particular:

**articolo**: en los 3 campos correspondientes se muestran la clase, el código y la descripción del artículo al que se refiere el Número de Serie. Se trata de un artículo con el indicador *Gestión SN* activado en el *anagrafica articolo* > pestaña *Lotes/SN*, de lo contrario no habría sido posible realizar la carga del lote para el artículo en cuestión;  

**variante**: en los 2 campos correspondientes se muestran el código y la descripción de la variante del artículo a la que se refiere el Número de Serie, si está presente;  

**codice lotto**: en este campo aparece el código del Lote del que forma parte el Número de Serie. El artículo al que se refiere el Número de Serie podría, de hecho, estar gestionado también por Lotes; por lo tanto, en este caso un lote de 100 piezas, por ejemplo, podría estar compuesto por 100 diferentes Números de Serie. El mismo Número de Serie también podría pertenecer a lotes diferentes del mismo artículo, o a lotes de artículos diferentes;  

**Tipo de Lote (Tipo lotto)**: indica el tipo de lote utilizado;  

**tipo codice lotto**: indica el tipo de código de lote con el que se generó el lote;  

**codice serial number**: en este campo aparece el Código del Número de Serie. Se trata de un campo editable por el usuario, aunque durante las operaciones de carga puede ser generado automáticamente en base a algunas reglas que se establecen en el *Tipo de Número de Serie* vinculado al artículo. Se inserta primero un código y una descripción del *tipo de código del Número de Serie*, se guarda la fila y luego se decide qué parámetros se desean utilizar para la composición del tipo de código del lote recién creado. Por cada parámetro utilizado se puede decidir de cuántos caracteres debe estar formado y eventualmente también el carácter de relleno que se utilizará. Por ejemplo, con el parámetro 'Número progresivo' al establecer como carácter de relleno el '0' y como Longitud '5' se crearán Números de Serie comenzando con 00000, luego 00001, luego 00002 y así sucesivamente. El *tipo de código del Número de Serie* debe luego estar vinculado al registro de artículos en el campo apropiado situado en la pestaña *Lotes/Números de Serie*, para que en los procedimientos que crean automáticamente el código del *Número de Serie* para el artículo en cuestión, el Número de Serie mismo se genere según las reglas establecidas en el *tipo de código del Número de Serie* vinculado al artículo. El campo es alfanumérico y puede alcanzar una longitud máxima de 50 caracteres;  

**tipo serial number**: indica el tipo de código del Número de Serie con el que fue generado el Número de Serie;  

**data inizio**: en este campo aparece generalmente la fecha en la que se cargó el Número de Serie, editable por el usuario. Si el Número de Serie fue cargado a través del registro de almacén, esta fecha se propone idéntica a la fecha en que se creó el registro; si el Número de Serie fue cargado a través de la carga de un DDT de compra o registro de devolución de trabajo, esta fecha se establece como igual a la fecha del DDT de compra o de trabajo (a menos que el usuario la haya modificado manualmente dentro del DDT); si el Número de Serie fue cargado a través del registro de una notificación de producción, esta fecha se propone como idéntica a la fecha de la notificación de producción;  

**data scadenza**: en este campo aparece la fecha de vencimiento del Número de Serie, editable por el usuario, que se calcula en el momento de la creación del lote y por lo tanto de carga del movimiento de almacén correspondiente, partiendo de la fecha de inicio y sumando los días de validez del Número de Serie introducidos en la pestaña Lotes/SN del registro de artículos;  

**codice cliente**: en este campo aparece el código del *Lote del cliente*, es decir, el nombre que usualmente el cliente asigna al lote. Se trata de un campo editable por el usuario y no generable automáticamente durante las operaciones de carga. También puede alcanzar la longitud máxima de 50 caracteres y puede ser idéntico para diferentes lotes de diferentes artículos;  

**codice fornitore**: en este campo aparece el código del *Lote del proveedor*, es decir, el nombre que usualmente el proveedor asigna al lote. Se trata de un campo editable por el usuario y no generable automáticamente durante las operaciones de carga. También puede alcanzar la longitud máxima de 50 caracteres y puede ser idéntico para diferentes lotes de diferentes artículos;  

**fornitore**: en este campo se indicará la cuenta/subcuenta/descripción del proveedor;  

**annullato**: si está activo, indica que el Número de Serie ha sido anulado;  

**chiuso forzatamente**: si está activo, indica que el Número de Serie está cerrado forzosamente;  

**prenotata**: si está activo, indica que el Número de Serie ha sido reservado.

### Carga (Carico)

En esta sección se visualizan los datos fundamentales de los documentos que han contribuido a realizar la carga del Número de Serie. Generalmente siempre aparece el detalle del *Registro de almacén* que ha cargado el Número de Serie.

*Con doble clic en la fila del documento es posible, de acuerdo con los derechos del usuario, abrir el documento relacionado.*

**quantità**: en este campo se visualiza la cantidad del lote que ha sido asignada en el documento;  

**unità di misura**: indica la unidad de medida que se ha utilizado en el documento;  

**numero colli**: indica el número de paquetes;  

**data inserimento**: indica la fecha de inserción;  

**chiuso forzatamente**: si está activo, indica que el Número de Serie ha sido cerrado forzosamente;  

**documento di riferimento**: en este campo se muestra el tipo de documento que ha generado la carga del Número de Serie. Puede ser un registro de almacén, un DDT de compra o una devolución de trabajo;  

**registrazione**: en estos campos aparecen el número y la fecha del documento;  

**magazzino**: en estos campos aparecen el código y la descripción del almacén en el que se ha cargado el Número de Serie;  

**ubicazione**: en estos campos aparecen el código y la descripción de la ubicación;  

**causale**: en estos campos aparecen el código y la descripción de la causa utilizada para la creación de ese movimiento de carga;  

**cliente/fornitore**: en estos campos aparecen la cuenta, la subcuenta y la descripción relacionadas con el cliente o proveedor.

### Descarga (Scarico)

En esta sección se visualizan los datos fundamentales del primer documento, en orden cronológico, que ha asignado el Número de Serie. Estos datos se muestran en una cuadrícula donde aparecen las siguientes columnas:

**quantità**: en este campo se visualiza la cantidad del lote que ha sido asignada en el documento;  

**unità di misura**: indica la unidad de medida que se ha utilizado en el documento;  

**data inserimento**: indica la fecha de inserción;  

**documento di riferimento**: en este campo se muestra el tipo de documento que ha asignado primero el Número de Serie. Puede ser una orden de producción, un pedido de cliente, un DDT de venta, una factura de venta, una lista de recogida, un DDT de entrega de trabajo, una devolución de trabajo;  

**registrazione**: en estos campos aparecen el número y la fecha del documento;  

**magazzino**: en estos campos aparecen el código y la descripción del almacén en el que se ha cargado el Número de Serie;  

**ubicazione**: en estos campos aparecen el código y la descripción de la ubicación;  

**causale**: en estos campos aparecen el código y la descripción de la causa utilizada para la creación de ese movimiento de carga;  

**cliente/fornitore**: en estos campos aparecen la cuenta, la subcuenta y la descripción relacionadas con el cliente o proveedor.

*Con doble clic en la fila del documento es posible, de acuerdo con los derechos del usuario, abrir el documento correspondiente.*