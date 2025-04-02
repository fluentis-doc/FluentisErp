---
title: nuova registrazione
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
La introducción a las registraciones de almacén de Fluentis representa un elemento crucial para la gestión eficiente de las operaciones logísticas, permitiendo un registro preciso de los movimientos de bienes dentro del sistema. Las registraciones pueden ser creadas automáticamente a través de diversos procedimientos, como la carga de documentos (por ejemplo, DDT y facturas de compra) o descarga (mediante DDT y factura de venta). Este proceso no solo simplifica la inserción de movimientos, sino que también garantiza la sincronización de la información entre los diversos documentos operativos.

Cada registro de almacén permite al operador especificar detalles fundamentales como almacén, causa y fecha. La registración del artículo se lleva a cabo a través de una cuadrícula que permite indicar cantidades y unidades de medida, con la opción de gestionar lotes y números de serie cuando sea necesario. Además, se implementan diversos indicadores que rigen la necesidad de documentos obligatorios y el tratamiento de las causas de contrapartida, garantizando la trazabilidad y la conformidad de las operaciones de almacén.

Otro aspecto distintivo es la posibilidad de personalizar las registraciones de acuerdo con las necesidades específicas del almacén, eligiendo entre gestiones por ubicación, proyecto o cliente/proveedor. Esta flexibilidad permite adaptar el sistema a las diversas configuraciones logísticas empresariales, convirtiendo a Fluentis en una herramienta poderosa para la gestión del almacén.
:::

El formulario se abre:
- a través de la ruta **Logística > Almacén > Registraciones > Nueva registración**  
o bien  
- haciendo clic en el botón **Nuevo** desde el formulario de búsqueda **Registraciones**.

## Creación automática del registro

Las registraciones de almacén pueden ser creadas automáticamente mediante las *procedimientos de carga* de DDT de compra, facturas de compra, recepciones de mercancías, mediante los *procedimientos de descarga* DDT de venta, factura de venta, lista de picking, lista de preselección de materiales, DDT de entrega de trabajo por cuenta, o mediante los *procedimientos de registro de informes de producción y de devoluciones de trabajo por cuenta*. 

## Creación manual del registro

El usuario también puede ingresar manualmente los registros de almacén, configurando todos los campos requeridos según el tipo de artículo y el tipo de causa que decide utilizar.

La ventana del nuevo registro de almacén consta de 2 pestañas: **registrazione** y **contropartita**.

:::note Nota
La pestaña **Contrapartida** resulta activa solo si la causa que se inserta en la primera pestaña tiene una causa de contrapartida asociada en la tabla correspondiente de [Causas de almacén (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates).     
:::

Dentro del registro de almacén se pueden insertar diversos movimientos de almacén para diferentes artículos y con gestiones distintas entre sí. 

## Registro (Registrazione)

Esta pestaña se compone de un encabezado y 4 cuadrículas diferentes, la primera de las cuales es aquella en la que se insertan los artículos que se mueven mediante el registro de almacén; las otras 3 cuadrículas se utilizan según cómo están configurados el registro del artículo y la causa de almacén insertada en el encabezado.

### Registro - sección fija

**magazzino**: representa el código del almacén sobre el cual realizar el registro;  
**Causa de almacén (Causale di magazzino)**: dato obligatorio para la inserción de los movimientos de almacén. Se selecciona utilizando la combo box correspondiente, en la que solo se proponen las causas relacionadas con el almacén seleccionado.  
**data registrazione**: se propone automáticamente igual a la fecha actual y especifica el día en el que se realizan los movimientos de almacén que luego se insertarán en la cuadrícula correspondiente, por lo que también puede ser modificada configurando, por ejemplo, una fecha anterior a la fecha actual. Sin embargo, esta fecha debe estar siempre comprendida entre las fechas de Inicio y Fin del Período ingresadas en la primera pestaña de los *Parámetros iniciales de almacén*;  
**numero della registrazione**: se propone automáticamente; es un progresivo por almacén que se reinicia cada día, comenzando automáticamente desde el número 1. Ambos datos son editables por el usuario;

:::note Nota
Después de insertar el primer artículo en la cuadrícula, la fecha y el número del registro se vuelven de solo lectura (read-only).
:::

Después de haber ingresado estos datos, el usuario puede proceder a la inserción de los movimientos en la cuadrícula de artículos. Sin embargo, existen otros datos de encabezado que se pueden completar, específicamente:

**Documento interno**: en este campo el usuario puede dar una especificación adicional sobre el motivo por el cual se crea el registro. Si la registración ha sido creada automáticamente a partir del registro de una *Informe de producción*, en este campo aparece la indicación de respecto al número de la señalización y la fase para la que se realizó; en el campo de fecha del **Documento interno** el usuario puede especificar la fecha correspondiente al documento en base al cual está ingresando la registración. Si la registración ha sido creada automáticamente a través de la *carga* o *descarga* de un documento, en este campo se configura automáticamente la fecha de inserción del documento.  
Si la registración ha sido creada automáticamente a partir del registro de una *Informe de producción*, en este campo aparece la fecha de inicio efectivo del pedido de producción para el cual se hizo la señalización de producción.  

**Versión**: mediante esta combo box, el usuario puede establecer una versión diferente a la de defecto, que se propone automáticamente por el procedimiento;

**Cuenta**: en estos 3 campos se especifican los datos correspondientes del Cliente/Proveedor: *cuenta*, *subcuenta*, *razón social*.  
Si la registración ha sido creada automáticamente a través de la *carga* o *descarga* de un documento, en este campo se configuran automáticamente los datos del cliente o del proveedor que figura en el documento correspondiente.

**Documento de referencia**: en este campo el usuario puede especificar el documento que ha generado la registración.  
Si la registración ha sido creada automáticamente a través de la *carga* o *descarga* de un documento, en este campo se configura automáticamente una descripción paramétrica del documento, en la que aparecen también la descripción del tipo de documento y su número.  
Si la registración ha sido creada automáticamente a partir del registro de una *Informe de producción*, en este campo aparece el número del pedido de producción para el cual se hizo la señalización de producción.  

**Proyecto**: con un doble clic se abre un *Help proyectos* que permite vincular un proyecto a toda la registración que se está ingresando. Esta se replicará en cada una de las líneas de artículos insertadas en la cuadrícula;

**Nota**: en este campo es posible insertar una nota libre relacionada con la registración de almacén.

Como ya se indicó anteriormente, el usuario puede proceder a este punto a la inserción de los movimientos en la primera cuadrícula, que contendrá los artículos a mover.

### Artículos

En esta primera cuadrícula, el usuario puede insertar, utilizando el *Help artículos*, la lista de artículos a mover.

**Número de movimiento**: en esta columna aparece el número progresivo del movimiento. Siempre comienza en 1 y es un simple progresivo que se reinicia tan pronto como se abre otro registro de almacén. El campo es de solo lectura (read-only) y no permite la recuperación manual de los números de movimiento, en caso de eliminación manual de líneas de movimiento.

**Clase**: en este campo, utilizando la combo box correspondiente, es posible seleccionar la clase del artículo;

**Código artículo**: en esta columna se puede introducir manualmente el código o utilizar el *Help Artículos*;

**Variante**: mediante esta combo box, el usuario puede seleccionar e insertar una de las variantes del artículo. Si el artículo no presenta variantes, la combo box aparece desactivada;

**u.m.**: en esta columna aparece, en solo lectura (read-only), el código de la unidad de medida de gestión del artículo;

**Unidad de medida alternativa**: en esta columna el usuario puede seleccionar, mediante la combo box correspondiente, el código de una de las unidades de medida alternativas del artículo, si existen, con el objetivo de ejecutar el movimiento imputando la cantidad en la unidad de medida alternativa elegida. La cantidad de gestión se calcularía automáticamente en base al factor de conversión establecido en el *Registro del artículo* > pestaña *U.M. Alternativas*;

**Cantidad de movimiento**: en esta columna el usuario debe obligatoriamente insertar la cantidad del movimiento, expresada en la unidad de medida de gestión en caso de que la columna *U.M. alt.* esté vacía; de lo contrario, la cantidad se expresaría en la unidad de medida alternativa insertada en la columna *U.M. alt.*. Después de que el usuario ha insertado el código del artículo y lo ha validado como válido para el procedimiento, la cantidad de movimiento se inserta automáticamente como igual a 1; en este punto el usuario puede modificarla. La cantidad del movimiento siempre debe ingresarse en valor absoluto, ya que el hecho de que se trate de un movimiento de carga o descarga se determina por el tipo de causa utilizada;

**Cantidad de gestión**: en esta columna aparece, en solo lectura (read-only), la cantidad expresada en la unidad de medida de gestión del artículo. Es idéntica a la cantidad de movimiento en caso de que la columna *U.M. alt.* esté vacía; de lo contrario, la columna se vuelve editable y el usuario debe introducir manualmente la cantidad de gestión, viendo luego calculada automáticamente la cantidad de movimiento, que tendría por lo tanto un valor igual a la cantidad de gestión dividida o multiplicada (dependiendo de lo que se haya establecido en los *Parámetros Iniciales de Almacén*) por el factor de conversión establecido en el *Registro del artículo* > pestaña *U.M. Alternativas*;

**Importe de movimiento**: en esta columna se muestra automáticamente el valor de *costo último, costo medio, costo estándar o precio de venta*, dependiendo de la configuración de la causa de almacén utilizada en el registro.  
Si en la causa se indica como costo propuesto *nessuno*, el procedimiento propone como costo de la registración un valor igual a cero.  
Si la columna *U.M. alt.* está vacía, el importe de movimiento siempre es igual al importe de gestión; de lo contrario, en esta columna se debe ingresar el importe unitario del artículo en base a la unidad de medida alternativa insertada en la línea del movimiento.  
Si en los *Parámetros Iniciales de Almacén* está activado, para el año en curso, el indicador *Mostrar tooltip de existencias en registraciones*, el procedimiento muestra, en un tooltip, la existencias de ese artículo en el almacén sobre el cual se está creando el movimiento, exactamente en el momento en que el usuario está ingresando o modificando la cantidad.  
Si las existencias no son suficientes y en los *Parámetros Iniciales de Almacén* está desactivado, para el año en curso, el indicador *Permitir existencia negativa* para ese almacén, la línea de movimiento no se guardará.

**Importe de gestión**: en esta columna aparece automáticamente el valor de *costo último, costo medio, costo estándar, o precio de venta*, dependiendo de la configuración de la causa de almacén utilizada en el registro.  
En caso de que en la causa se indique como costo propuesto *nessuno*, el procedimiento propone como costo de la registración un valor igual a cero.  
En caso de que la columna *U.M. alt.* esté vacía, el importe de gestión siempre es idéntico al importe de movimiento; de lo contrario, en esta columna, siempre de solo lectura (read-only), se calcularía el valor unitario del movimiento en base a la unidad de medida de gestión, mediante la siguiente fórmula: *Importe movimiento * Cantidad movimiento / Cantidad gestión*;

**Proyecto**: en esta columna el usuario puede insertar, mediante el *Help proyectos* que se abre con un doble clic en el campo amarillo, el proyecto de venta que debe asociarse a la línea del movimiento;

**Importe total**: en esta columna aparece, sin posibilidad de edición, el importe total de la línea del movimiento. Este resulta de la multiplicación de la cantidad de gestión por el importe de gestión;

**Descripción del artículo**: en esta columna aparece la descripción del artículo. Se establece automáticamente tan pronto como se reconoce el artículo ingresado por el usuario en la cuadrícula;

**Descripción de la variante**: en esta columna aparece la descripción de la variante del artículo. Se establece automáticamente tan pronto como se reconoce el código de la variante del artículo ingresado por el usuario en la cuadrícula;

**Notas**: en este campo es posible insertar una nota libre relativamente a la línea individual de la registración de almacén;

**Ubicación**: en este campo se especifica la ubicación desde la cual se descargará o sobre la cual se cargará el artículo, dependiendo obviamente del tipo de causa de almacén (carga / descarga);   

**Peso neto**: se reporta el peso neto total de las líneas de artículo. Se reporta el peso neto del registro del artículo multiplicado por la cantidad de línea;

**Peso bruto**: se reporta el peso bruto total de las líneas de artículo. Se reporta el peso bruto del registro del artículo multiplicado por la cantidad de línea;

En el momento en que el usuario procede a guardar la línea del movimiento, el procedimiento puede realizar correctamente el guardado y hacer disponible la línea siguiente para la inserción de un nuevo movimiento, o puede obligar al usuario a completar la inserción mediante la carga de los lotes y/o de los números de serie en las cuadrículas correspondientes a continuación.

### Lotes y Números de serie

**Lotes**

En esta cuadrícula, activa solo si la causa de almacén utilizada tiene el indicador *gestione lotti* activado y si además el artículo está designado como artículo gestionado por lotes, el usuario debe obligatoriamente insertar las informaciones relacionadas con el lote o los lotes a mover.

Como sabemos, la registración de almacén puede ser de carga o descarga; dependiendo de los 2 casos diferentes, la cuadrícula de lotes tiene diferentes usos y configuraciones.

> *1° caso: Registración de carga*

En el momento en que el usuario procede a guardar la línea del movimiento, el procedimiento deja en actualización la línea misma, invitando al usuario a trasladarse a la cuadrícula *Lotes* e indicar los detalles de los lotes a cargar.

Las columnas presentes en la cuadrícula son las siguientes:

**Tipo de código de lote**: en esta columna se inserta el tipo de código de lote ingresado en el registro del artículo;

**Tipo de lote**: en esta columna puede opcionalmente ser ingresado por el usuario el Tipo de Lote, mediante la combo box correspondiente, que obtiene de la tabla homónima. Se trata de un dato no obligatorio;

**Número de lotes**: en esta columna se inserta el código del lote a cargar, construido en base a las reglas establecidas en los *Parámetros Iniciales de Almacén* asociadas al *Tipo de código de lote* ingresado. El campo es de color amarillo ya que el usuario podría decidir realizar un nuevo carga de un lote ya existente en la base de datos; en este caso, con un doble clic en el campo amarillo tendría la posibilidad, mediante un *Help lotes* correspondiente, de elegir el lote a cargar filtrándolo entre los lotes gestionados hasta ese momento en la base de datos y en la empresa en la que está trabajando;

**Código de lote del proveedor**: en esta columna se inserta manualmente el código del lote del proveedor, que suele ser el nombre que el proveedor le atribuye al lote. Es un campo no generable automáticamente durante las operaciones de carga y no obligatorio. En caso de que se inserte el Código de Lote accediendo al *Help Lotes*, esta columna se completaría automáticamente con el Lote Proveedor vinculado al lote elegido;

**Fecha de inicio**: en este campo aparece la misma fecha de la registración de almacén, editable por el usuario. En caso de que el Código de Lote se inserte accediendo al *Help Lotes*, esta columna se completaría automáticamente con la fecha de inicio del lote elegido;

**Fecha de caducidad**: en este campo aparece la fecha de caducidad del lote, editable por el usuario, que es calculada, partiendo de la fecha de inicio y sumando los días de validez del lote ingresados en la pestaña *Lotes/SN* del registro del artículo. En caso de que el Código de Lote se inserte accediendo al *Help Lotes*, esta columna se completaría automáticamente con la fecha de caducidad del lote elegido;

**Cantidad**: en este campo aparece la cantidad que se quiere atribuir al lote insertado. En caso de creación del lote mediante la presión del botón 'Auto', la cantidad se llena automáticamente con la cantidad contenida en la línea del movimiento; sin embargo, es editable por el usuario, quien podría decidir modificar la cantidad, disminuyéndola, y luego presionar nuevamente el botón 'Auto' pero en la línea siguiente: de este modo se crearía un nuevo lote, con características similares al lote ya insertado pero con un Código de Lote diferente;

**Cerrado**: si está activo, indica que el lote ha sido completamente descargado del almacén. Lógicamente, en caso de carga del lote, el indicador siempre resulta desactivado;

**lotto vendibile**: si está activo, indica que el lote está disponible para ser recogido dentro de los documentos de venta, de producción o en las registraciones de almacén. Se trata prácticamente de una opción que tiene el usuario para definir la posibilidad de retirar o no un lote, en lugar de gestionar, de manera más compleja y articulada, los estados del lote. Por lo tanto, en el caso de la carga automática del lote, el indicador se activa por defecto, aunque el usuario puede decidir ya en esta fase desactivarlo, haciendo que el lote mismo no esté disponible;

**Nota**: en este campo, el usuario puede insertar una nota relacionada con el lote que se está cargando. En caso de que el Código de Lote se inserte accediendo al *Help Lotes*, esta columna se completaría automáticamente con la nota vinculada al lote elegido.

Después de haber completado la inserción de los lotes en la cuadrícula *Lotes*, asegurándose de que la cantidad de la línea del movimiento sea igual a la suma de las cantidades de los lotes cargados, el usuario puede proceder a guardar la línea del movimiento sin recibir más mensajes de error del procedimiento.

> *2° caso: Registración de descarga*

En el momento en que el usuario procede a guardar la línea del movimiento, el procedimiento deja en 'actualización' la línea misma, invitando al usuario a trasladarse a la cuadrícula Lotes e indicar los detalles de los lotes a descargar.

Las columnas presentes en la cuadrícula son las siguientes:

**Número de lotes**: en esta columna, con un doble clic en el campo amarillo, el usuario tiene la posibilidad, mediante el *Help lotes* correspondiente, de elegir el lote a descargar filtrándolo entre los lotes disponibles en el almacén de la registración;

**Código de lote del proveedor**: esta columna se completa automáticamente con el *Lote proveedor* vinculado al lote elegido;

**Fecha de inicio**: en este campo aparece la fecha de inicio del lote elegido;

**Fecha de caducidad**: en este campo aparece la fecha de caducidad del lote elegido;

**Cantidad**: en este campo aparece la cantidad que se desea descargar del lote elegido. Es editable por el usuario, quien podría decidir modificar la cantidad, disminuyéndola, y luego realizar otra búsqueda mediante el Help lotes pero en la línea siguiente;

**Ubicación**: en este campo se visualiza la ubicación donde se ha cargado el lote elegido.

Después de haber completado la inserción de los lotes a descargar en la cuadrícula *Lotes*, asegurándose de que la cantidad de la línea del movimiento sea igual a la suma de las cantidades de los lotes descargados, el usuario puede proceder a guardar la línea del movimiento sin recibir más mensajes de error del procedimiento.

### Números de serie

En esta cuadrícula, activa solo si la causa de almacén utilizada tiene el indicador *Gest. lotes* activado y si además el artículo está designado como artículo gestionado por números de serie, el usuario debe obligatoriamente insertar la información relacionada con los números de serie a mover.

Como sabemos, la registración de almacén puede ser de carga o descarga; dependiendo de los 2 casos diferentes, la cuadrícula Números de Serie tiene diferentes usos y configuraciones.

> *1° caso: Registración de carga*

En el momento en que el usuario procede a guardar la línea del movimiento, el procedimiento deja en 'actualización' la línea misma, invitando al usuario a trasladarse a la cuadrícula Números de Serie e indicar los detalles de los Números de serie a cargar.

Las columnas presentes en la cuadrícula son las siguientes:

**Tipo de Número de serie**: en esta columna se inserta automáticamente, el tipo de código SN ingresado en el registro del artículo. Es, no obstante, modificable por el usuario.

**Número de serie**: en esta columna se inserta el código del Número de serie a cargar, construido en base a las reglas establecidas en los *Parámetros Iniciales de Almacén* asociadas al tipo de código SN ingresado. Es, no obstante, editable por el usuario.

**Número de serie del cliente**: indica el Número de serie utilizado por el cliente;

**Número de serie del proveedor**: indica el Número de serie utilizado por el proveedor;

**Fecha de inicio**: indica la fecha de inicio de validez del Número de serie;

**Fecha de caducidad**: indica la fecha de caducidad del Número de serie;

**Fecha de última modificación**: indica la fecha de la última modificación;

**Anulado**: indica que el Número de serie se encuentra en estado anulado;

**Cerrado forzosamente**: indica que el Número de serie fue cerrado forzosamente;

**Lote**: indica el número de lote correspondiente a ese Número de serie.

Después de haber completado la inserción de los números de serie en la cuadrícula *Números de Serie*, asegurándose de que la cantidad de la línea del movimiento sea igual al número de Números de serie insertados en la cuadrícula, el usuario puede proceder a guardar la línea del movimiento sin recibir más mensajes de error del procedimiento.

> *2° caso: Registración de descarga*

En el momento en que el usuario procede a guardar la línea del movimiento, el procedimiento deja en actualización la línea misma, invitando al usuario a trasladarse a la cuadrícula Números de Serie e indicar los detalles de los Números de serie a descargar.

Las columnas presentes en la cuadrícula son las siguientes:

**Número de serie**: en esta columna el usuario debe insertar, mediante un doble clic en el campo amarillo, los Números de serie a descargar, accediendo al *Help Números de serie* correspondiente.

**Fecha de inserción**: indica la fecha de inserción del Número de serie;

**Número de serie del cliente**: indica el Número de serie utilizado por el cliente;

**Número de serie del proveedor**: indica el Número de serie utilizado por el proveedor;

**Fecha de última modificación**: indica la fecha de la última modificación;

**Fecha de inicio**: indica la fecha de inicio de validez del Número de serie;

**Anulado**: indica que el Número de serie se encuentra en estado anulado;

**Lote**: indica el número de lote correspondiente a ese Número de serie.

Después de haber completado la inserción de los lotes a descargar en la cuadrícula *Números de Serie*, asegurándose de que la cantidad de la línea del movimiento sea igual al número de Números de serie insertados en la cuadrícula, el usuario puede proceder a guardar la línea del movimiento sin recibir más mensajes de error del procedimiento.

### Centros de Costo

En esta cuadrícula, el usuario puede vincular a la línea de movimiento uno o más centros de costo, asignando, por lo tanto, diferentes cantidades del movimiento a diferentes centros de costo.

La cuadrícula se compone de una columna en la que aparece un campo de color amarillo, en el cual el usuario puede, haciendo un doble clic, abrir el *Help Centros de Costo*, mediante el cual puede insertar el centro de costo en la fila de la cuadrícula, completando luego la línea con la cantidad a la que este centro de costo debe ser referida. Si la suma de las cantidades ingresadas en las filas de la cuadrícula de centros de costo es diferente de la cantidad de gestión de la línea de movimiento, el procedimiento da un aviso e impide guardar el movimiento.

### Datos Extras

Se remite a la documentación relativa a los [Datos Extras (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata).

## Contrapartida (Contropartita)

Esta pestaña es exactamente igual a la pestaña *Registro (Registrazione)*, pero resulta activa solo si la causa de almacén configurada en la pestaña *Registro* presenta un almacén y una causa de contrapartida.  
Las causas de contrapartida se configuran en caso de que se quiera gestionar un doble movimiento de almacén, con una sola registración. Por lo tanto, es posible, en la tabla de causas de almacén, establecer una causa de carga como contrapartida de una causa de descarga y viceversa.

En la pestaña *Contrapartida* se repiten exactamente todos los datos establecidos dentro de la pestaña *Registro*, con la posibilidad para el usuario de modificar solo algunos de los datos de encabezado: Documento interno, Documento de referencia, Proyecto de venta.

Los datos de la línea de movimiento deben ser idénticos entre las 2 pestañas; el mismo argumento se aplica a las cuadrículas de Lotes, Números de Serie, Variantes y Centros de Costo del movimiento individual. Solo el campo de la ubicación es editable dentro de la pestaña de contrapartida.

Hay un **caso particular** en el que en la pestaña *Registro* se inserta un artículo y en la pestaña *Contrapartida* se insertan otros: esto ocurre únicamente cuando la causa de contrapartida vinculada a la causa principal ha activado el indicador *distinta base*, indicador que permite al usuario cargar el artículo en la pestaña *Registro* (por lo tanto utilizando una causa de carga) y ver su lista de materiales inserta en la pestaña *Contrapartida*, en la cual, por lo tanto, estará presente una causa de descarga. Obviamente, también puede gestionarse a la inversa.

Una situación **particular** que requiere la gestión de causas con la contrapartida vinculada se relaciona con la *descarga automática del DDT de entrega de trabajo por cuenta*, que realiza la descarga de los materiales a entregar al subcontratista desde el almacén de materias primas (o semielaborados, dependiendo de los casos) con la consecuente e inmediata carga en el almacén del subcontratista de los mismos materiales, que luego deberá utilizar para producir lo que se le ha solicitado mediante el pedido de trabajo por cuenta.

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, se remite al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).