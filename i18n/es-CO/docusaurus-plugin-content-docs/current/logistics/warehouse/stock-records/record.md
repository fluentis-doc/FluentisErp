---
title: Nueva registración
sidebar_position: 3
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La introducción a las registraciones de inventario<!-- registrazioni di magazzino --> en Fluentis representa un elemento crucial para la gestión eficiente de las operaciones logísticas, permitiendo un registro preciso de los movimientos<!-- movimenti --> de bienes dentro del sistema. Las registraciones pueden crearse automáticamente a través de diversos procedimientos, como carga de documentos (por ejemplo, DDT y facturas de compra) o descarga (por medio de DDT y factura de venta). Este proceso no solo simplifica el ingreso de los movimientos<!-- movimenti -->, sino que también garantiza la sincronización de la información entre los distintos documentos operativos.

Cada registración de inventario<!-- registrazione di magazzino --> permite al usuario especificar detalles fundamentales como almacén<!-- magazzino -->, causa<!-- causale --> y fecha. El registro de artículos se realiza a través de una cuadrícula que permite indicar cantidades y unidades de medida, con la opción adicional de gestionar lotes y números de serie cuando sea necesario. Además, se implementan diversas banderas que gobiernan la necesidad de documentos obligatorios y el tratamiento de las causas<!-- causali --> de contrapartida, garantizando así la trazabilidad y conformidad de las operaciones de inventario<!-- magazzino -->.

Otro aspecto distintivo es la posibilidad de personalizar las registraciones en función de las necesidades específicas del almacén<!-- magazzino -->, eligiendo entre gestiones por ubicación, proyecto o cliente/proveedor. Esta flexibilidad permite adaptar el sistema a varias configuraciones logísticas empresariales, haciendo de Fluentis una herramienta poderosa para la gestión de inventario<!-- magazzino -->.
:::

El formulario se abre:
- desde la ruta **Logística > Almacén<!-- Magazzino -->  > Registraciones<!-- Registrazioni --> > Nueva registración<!-- Nuova registrazione -->**  
o bien  
- haciendo clic en el botón **Nuevo<!-- Nuovo -->** desde el formulario de búsqueda **Registraciones<!-- Registrazioni -->**.

## Creación automática de la registración<!-- Creazione automatica della registrazione -->

Las registraciones de inventario<!-- registrazioni di magazzino --> pueden ser creadas automáticamente mediante las *procedimientos de carga<!-- procedure di carico -->* de DDT de compra, facturas de compra, recepciones de mercancía, mediante las *procedimientos de descarga<!-- procedure di scarico -->* DDT de venta, factura de venta, picking list, lista de retiro de materiales, DDT de entrega de trabajo externo<!-- conto lavoro -->, o bien mediante las *procedimientos de registración de reportes de producción y devoluciones de trabajo externo<!-- conto lavoro -->*.

## Creación manual de la registración<!-- Creazione manuale della registrazione -->

El usuario también puede ingresar manualmente las registraciones de inventario<!-- registrazioni di magazzino -->, configurando todos los campos requeridos según el tipo de artículo y tipo de causa<!-- causale --> que se decida utilizar.

La ventana de la nueva registración de inventario<!-- registrazione di magazzino --> consta de 2 pestañas: **Registración<!-- Registrazione -->** y **Contrapartida<!-- Contropartita -->**.

:::note Nota
La pestaña **Contrapartida<!-- Contropartita -->** se encuentra activa solo si la causa<!-- causale --> que se ingresa en la primera pestaña tiene asociada una causa de contrapartida en la correspondiente tabla de [Causas de inventario<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates).     
:::

Dentro de una registración de inventario<!-- registrazione di magazzino --> se pueden ingresar varios movimientos<!-- movimenti --> de inventario<!-- magazzino --> para diferentes artículos y con gestiones distintas entre sí.

## Registración

Esta pestaña consta de un encabezado y de 4 diferentes cuadrículas, la primera de las cuales es aquella donde se ingresan los artículos que se mueven mediante la registración de inventario<!-- magazzino -->; las otras 3 cuadrículas se utilizan según cómo se han configurado los datos maestros del artículo y la causa de inventario<!-- causale di magazzino --> ingresada en el encabezado.

### Registración - sección fija<!-- Registrazione - sezione fissa -->

**Almacén<!-- Magazzino -->**: representa el código del almacén<!-- magazzino --> sobre el cual se realizará la registración;  
**Causa de inventario<!-- Causale di magazzino -->**: dato obligatorio para el ingreso de los movimientos de inventario<!-- movimenti di magazzino -->. Se selecciona utilizando el combo box correspondiente, en el que solo se proponen las causas relacionadas con el almacén<!-- magazzino --> seleccionado.       
**Fecha de registración<!-- Data registrazione -->**: se sugiere automáticamente igual a la fecha actual e identifica el día en que se realizan los movimientos de inventario<!-- movimenti di magazzino --> que luego se ingresarán en la cuadrícula respectiva. Por lo tanto, puede ser modificada estableciendo, por ejemplo, una fecha anterior a la actual. Sin embargo, esta fecha debe estar siempre comprendida entre las fechas de Inicio y Fin de período ingresadas en la primera pestaña de los *Parámetros iniciales de inventario<!-- Parametri iniziali di magazzino -->*;   
**Número de registración<!-- Numero della registrazione -->**: se propone automáticamente; es un progresivo por almacén<!-- magazzino --> que se reinicia cada día, comenzando automáticamente desde el número 1. Ambos datos pueden ser editados por el usuario;

:::note Nota
Tras el ingreso del primer artículo en la cuadrícula, la fecha y el número de registración<!-- registrazione --> pasan a ser de solo lectura.
:::

Después de ingresar estos datos, el usuario puede proceder a ingresar los movimientos<!-- movimenti --> en la cuadrícula de artículos. Sin embargo, existen otros datos de encabezado que se pueden completar, específicamente:

**Documento interno**: en este campo el usuario puede dar una especificación adicional sobre el motivo por el cual se crea la registración<!-- registrazione -->. Si la registración fue creada automáticamente desde la registración de una *Señal de producción*, en este campo aparece la indicación respecto al número de la señal y la fase para la que se realizó; en el campo fecha del **Documento interno**, el usuario puede especificar la fecha relativa al documento según el cual está ingresando la registración. Si la registración se ha creado automáticamente mediante la *carga* o la *descarga* de un documento, en este campo se establece automáticamente la fecha de ingreso del documento.  
Si la registración<!-- registrazione --> fue creada automáticamente desde la registración de una *Señal de producción*, en este campo aparece la fecha de inicio efectiva de la orden de producción para la cual se ejecutó la señal de producción.

**Versión**: con este combo box el usuario puede configurar una versión diferente de la predeterminada, que de cualquier manera se propone automáticamente por el procedimiento;

**Cuenta**: en estos 3 campos se especifican los datos relativos del Cliente/Proveedor: *cuenta*, *subcuenta*, *razón social*.  
Si la registración<!-- registrazione --> fue creada automáticamente mediante la *carga* o la *descarga* de un documento, en este campo se establecen automáticamente los datos del cliente o proveedor titular del documento.

**Documento de referencia**: en este campo el usuario puede especificar el documento que generó la registración<!-- registrazione -->.  
Si la registración fue creada automáticamente mediante la *carga* o la *descarga* de un documento, en este campo se configura automáticamente una descripción paramétrica del documento, donde también aparecen la descripción del tipo de documento y su número.  
Si la registración<!-- registrazione --> fue creada automáticamente desde la registración de una *Señal de producción*, en este campo se muestra el número de la orden de producción para la que se efectuó la señal.

**Proyecto**: con un doble clic se abre un *Help proyectos* que permite vincular un proyecto a toda la registración<!-- registrazione --> que se está ingresando. Luego se replica en cada una de las filas de artículo ingresadas en la cuadrícula;

**Nota**: en este campo se puede introducir una nota libre relacionada con la registración de inventario<!-- registrazione di magazzino -->.

Como se ha especificado anteriormente, el usuario podrá proceder ahora a ingresar los movimientos<!-- movimenti --> en la primera cuadrícula, donde estarán los artículos a mover.

### Artículos

En esta primera cuadrícula, el usuario puede ingresar, usando el *Help artículos*, la lista de artículos a mover.

**Número de movimiento<!-- Numero movimento -->**: en esta columna aparece el número progresivo del movimiento<!-- movimento -->. Siempre comienza desde 1 y es un progresivo que se reinicia cada vez que se abre otra registración de inventario<!-- registrazione di magazzino -->. El campo es de solo lectura y no permite la recuperación manual en caso de eliminar manualmente filas de movimiento.

**Clase**: en este campo, mediante el combo box correspondiente, se puede seleccionar la clase del artículo;

**Código de artículo**: en esta columna se puede escribir manualmente el código o usar el *Help Artículos*;

**Variante**: mediante este combo box el usuario puede seleccionar e ingresar una de las variantes del artículo. Si el artículo no dispone de variantes, el combo box estará desactivado;

**Unidad de medida**: en esta columna aparece, en solo lectura, el código de la unidad de medida de gestión del artículo;

**Unidad de medida alternativa**: en esta columna el usuario puede seleccionar, utilizando el combo box correspondiente, el código de una de las alternativas de unidad de medida del artículo, si las tiene, para realizar el movimiento introduciendo la cantidad en la unidad alternativa elegida. La cantidad de gestión se calculará automáticamente con base en el factor de conversión establecido en el *Maestro de artículo* > pestaña *UM Alternativas*;

**Cantidad movimiento**: en esta columna el usuario debe ingresar obligatoriamente la cantidad del movimiento<!-- movimento -->, expresada en la unidad de medida de gestión si la columna *U.M. alt.* está vacía; de lo contrario la cantidad se expresará en la unidad alternativa ingresada en la columna *U.M. alt.*. Una vez que el usuario ingresa el código del artículo y es reconocido como válido por el sistema, la cantidad movimiento<!-- movimento --> se genera automáticamente igual a 1; luego el usuario puede modificarla. La cantidad de movimiento<!-- movimento --> debe siempre ingresarse en valor absoluto, ya que el hecho de que se trate de carga o descarga lo determina el tipo de causa<!-- causale --> utilizada;

**Cantidad de gestión**: en esta columna aparece, en solo lectura, la cantidad expresada en la unidad de medida de gestión del artículo. Es idéntica a la cantidad de movimiento<!-- movimento --> si la columna *U.M. alt.* está vacía; en caso contrario, la columna se vuelve editable y el usuario debe ingresar la cantidad de gestión manualmente, viendo luego calculada automáticamente la cantidad de movimiento<!-- movimento -->, que tendrá un valor igual a la cantidad de gestión dividida o multiplicada (según lo establecido en los *Parámetros iniciales de inventario<!-- Parametri Iniziali di Magazzino -->*) por el factor de conversión configurado en el *Maestro de artículo* > pestaña *UM Alternativas*;

**Importe de movimiento<!-- Importo movimento -->**: en esta columna aparece automáticamente el valor de *costo último, costo medio, costo estándar o precio de venta*, según la configuración de la causa<!-- causale --> de inventario<!-- magazzino --> utilizada en la registración<!-- registrazione -->.  
Si en la causa<!-- causale --> el costo propuesto es *Ninguno*, el sistema propondrá como costo un valor de cero.  
Si la columna *U.M. alt.* está vacía, el importe de movimiento<!-- movimento --> es siempre idéntico al importe gestionado; de lo contrario, se deberá ingresar en esta columna el valor unitario del artículo según la unidad alternativa ingresada en la fila del movimiento<!-- movimento -->.  
Si en *Parámetros iniciales de inventario<!-- Parametri Iniziali di Magazzino -->* está activada, para el año en curso, la bandera *Mostrar tooltip de stock en registraciones*, el sistema muestra en una tooltip el stock de ese artículo en el almacén<!-- magazzino --> donde se está creando el movimiento<!-- movimento -->, exactamente en el momento en que el usuario introduce o modifica la cantidad misma.  
Si el stock no es suficiente y en los *Parámetros iniciales de inventario<!-- Parametri Iniziali di Magazzino -->* está desactivada, para el año, la bandera ‘*Permitir stock negativo*' para ese almacén<!-- magazzino -->, la fila de movimiento<!-- movimento --> no se guardará.

**Importe gestionado**: en esta columna aparece automáticamente el valor de *costo último, costo medio, costo estándar o precio de venta*, según la configuración de la causa<!-- causale --> de inventario<!-- magazzino --> utilizada en la registración<!-- registrazione -->.  
Si en la causa<!-- causale --> figura como costo propuesto *Ninguno*, el sistema dará como costo un valor de cero.  
Si la columna *U.M. alt.* está vacía, el importe gestionado es siempre idéntico al importe de movimiento<!-- movimento -->; de lo contrario, en esta columna, siempre de solo lectura, se calculará el valor unitario del movimiento<!-- movimento --> según la unidad de medida de gestión, mediante la siguiente fórmula: *Importe movimiento<!-- Importo movimento --> * Cantidad movimiento<!-- Quantità movimento --> / Cantidad gestionada*;

**Proyecto**: en esta columna el usuario puede ingresar, mediante el *Help proyectos* que se abre con doble clic en el campo amarillo, la orden<!-- commessa --> de venta que debe asociarse a la fila de movimiento<!-- movimento -->;

**Importe total**: en esta columna aparece, no editable, el importe total de la fila del movimiento<!-- movimento -->. Resulta de multiplicar la cantidad de gestión por el importe gestionado;

**Descripción del artículo**: en esta columna aparece la descripción del artículo. Se establece automáticamente tan pronto como la cuadrícula reconoce el artículo ingresado por el usuario;

**Descripción de la variante**: en esta columna aparece la descripción de la variante del artículo. Se establece automáticamente tan pronto como la cuadrícula reconoce el código de variante del artículo ingresado por el usuario;

**Notas**: en este campo se puede ingresar una nota libre relativa a la línea individual de la registración de inventario<!-- registrazione di magazzino -->;

**Ubicación<!-- Ubicazione -->**: en este campo se especifica la ubicación desde la cual se descargará o sobre la cual se cargará el artículo, según el tipo de causa<!-- causale --> de inventario<!-- magazzino --> (carga / descarga);

**Peso neto**: se muestra el Peso neto total de las filas de artículos. Se muestra el peso neto del maestro de artículo multiplicado por la cantidad de la fila;

**Peso bruto**: se muestra el Peso bruto total de las filas de artículos. Se muestra el peso bruto del maestro de artículo multiplicado por la cantidad de la fila;

Cuando el usuario procede a guardar la fila del movimiento<!-- movimento -->, el sistema puede guardar correctamente y dejar disponible la siguiente fila para un nuevo movimiento<!-- movimento -->, o puede exigir completar mediante la carga de lotes y/o números de serie en las cuadrículas correspondientes.

### Lotes y Números de Serie<!-- Lotti e Serial number -->

**Lotes<!-- Lotti -->**

En esta cuadrícula, activa solo si la causa<!-- causale --> de inventario<!-- magazzino --> utilizada tiene la bandera *Gestión de lotes* y si el artículo también está configurado como artículo gestionado por lotes, el usuario debe obligatoriamente ingresar la información del lote o lotes por mover.

Como sabemos, la registración de inventario<!-- registrazione di magazzino --> puede ser de carga o de descarga; para cada uno hay diferentes usos y configuraciones.

> *Primer caso: Registración de carga<!-- Registrazione di carico -->*

Cuando el usuario guarda la fila del movimiento<!-- movimento -->, el sistema deja la propia fila en actualización, invitando al usuario a ir al grid de *Lotes* e indicar los detalles de los lotes por cargar.

Las columnas en la cuadrícula son las siguientes:

**Tipo de código de lote**: en esta columna se inserta el tipo de código de lote indicado en el maestro de artículo;

**Tipo de lote**: en esta columna puede insertarse opcionalmente por el usuario el Tipo de Lote, a través del combo box correspondiente extraído de la tabla homónima. Es un dato no obligatorio;

**Número de lote**: en esta columna se inserta el código del lote a cargar, construido según las reglas definidas en los *Parámetros iniciales de inventario<!-- Parametri Iniziali di Magazzino -->* asociadas al *Tipo de código de lote* ingresado. El campo es amarillo ya que el usuario podría decidir realizar una nueva carga en un lote ya existente en la base de datos; en este caso, con doble clic en el campo amarillo, podría seleccionar el lote a cargar, filtrándolo entre los lotes gestionados hasta ese momento en la base y empresa donde está trabajando;

**Código de lote del proveedor**: en esta columna se ingresa manualmente el código de lote del proveedor, es decir, normalmente el nombre que el proveedor da al lote. No es obligatorio ni generado automáticamente durante las operaciones de carga. Si el Código de Lote se ingresa con el *Help Lotes*, esta columna se completará automáticamente con el Lote Proveedor vinculado al lote elegido;

**Fecha de inicio**: en este campo aparece por defecto la misma fecha de la registración de inventario<!-- magazzino -->, editable por el usuario. Si el Código de Lote se ingresa con el 'Help Lotes', esta columna se completará automáticamente con la fecha de inicio del lote elegido;

**Fecha de vencimiento**: en este campo aparece la fecha de vencimiento del lote, editable por el usuario, que se calcula sumando a la fecha de inicio los días de validez del lote indicados en la pestaña *Lotes/SN* del maestro de artículo. Si el Código de Lote se ingresa con el *Help Lotes*, esta columna se completará automáticamente con la fecha de vencimiento del lote elegido;

**Cantidad**: en este campo aparece la cantidad que se quiere asignar al lote ingresado. Si el lote se crea presionando ‘Auto', la cantidad se llena automáticamente con la cantidad de la fila de movimiento<!-- movimento -->; es editable por el usuario, quien puede decidir modificarla disminuyéndola y luego pulsar nuevamente ‘Auto’ en la fila siguiente: así crea un nuevo lote similar pero con Código de Lote distinto;

**Cerrado**: si está activo, indica que el lote se ha descargado completamente del almacén<!-- magazzino -->. Lógicamente, en caso de carga el indicador siempre está desactivado;

**Lote vendible**: si está activo, indica que el lote está disponible para ser retirado en documentos de venta, de producción o en registraciones de inventario<!-- magazzino -->. Es una posibilidad para definir si el lote es utilizable, en alternativa a la gestión más avanzada de estados de lote. Por lo tanto, en caso de carga automática del lote, la bandera está activa por defecto, aunque el usuario puede desactivarla, dejando el lote ya no disponible;

**Nota**: en este campo el usuario puede introducir una nota relacionada con el lote que está cargando. Si el Código de Lote es importado mediante el *Help Lotes*, esta columna se completará automáticamente con la nota del lote elegido.

Después de completar el ingreso de los lotes suficientes en la cuadrícula *Lotes*, garantizando que la cantidad de la fila de movimiento<!-- movimento --> sea igual a la suma de las cantidades de los lotes cargados, el usuario podrá guardar la fila del movimiento<!-- movimento --> sin recibir mensajes de error del sistema.

> *Segundo caso: Registración de descarga<!-- Registrazione di scarico -->*

Cuando el usuario guarda la fila del movimiento<!-- movimento -->, el sistema deja ‘en edición’ la propia fila, invitando al usuario a pasar al grid de Lotes e indicar los detalles de los lotes por descargar.

Las columnas de la cuadrícula son las siguientes:

**Número de lote**: en esta columna, con doble clic en el campo amarillo, el usuario puede seleccionar el lote a descargar mediante el *Help lotes*, filtrándolo entre los disponibles en el almacén<!-- magazzino --> de la registración<!-- registrazione -->;

**Código de lote del proveedor**: esta columna se completa automáticamente con el *Lote proveedor* vinculado al lote elegido;

**Fecha de inicio**: en este campo aparece la fecha de inicio del lote seleccionado;

**Fecha de vencimiento**: en este campo aparece la fecha de vencimiento del lote seleccionado;

**Cantidad**: en este campo aparece la cantidad a descargar del lote elegido. Es editable por el usuario, quien puede decidir modificarla disminuyéndola y luego realizar otra búsqueda con el help lotes en la fila siguiente;

**Ubicación<!-- Ubicazione -->**: en este campo se visualiza la ubicación en la que está cargado el lote elegido.

Al completar el ingreso de los lotes a descargar en la cuadrícula *Lotes*, haciendo coincidir la cantidad de la fila del movimiento<!-- movimento --> con la suma de las cantidades de los lotes descargados, el usuario podrá guardar la fila del movimiento<!-- movimento --> sin recibir mensajes de error del sistema.

**Números de Serie<!-- Numeri seriali -->**

En esta cuadrícula, activa solo si la causa<!-- causale --> de inventario<!-- magazzino --> utilizada tiene la bandera *Gest. lotes* activada y si el artículo también está designado como gestionado por números de serie, el usuario debe ingresar obligatoriamente la información relativa a los números de serie a mover.

Como sabemos, la registración de inventario<!-- registrazione di magazzino --> puede ser de carga o descarga; para ambos casos, la cuadrícula de Números de Serie tiene diferentes usos y configuraciones.

> *Primer caso: Registración de carga<!-- Registrazione di carico -->*

Al guardar la fila del movimiento<!-- movimento -->, el sistema deja la propia fila "en edición", invitando al usuario a pasar a la cuadrícula de Números de Serie y detallar los Serial Numbers a cargar.

Las columnas presentes en la cuadrícula son las siguientes:

**Tipo Serial Number**: en esta columna se inserta automáticamente el tipo código SN del maestro de artículo. Es editable por el usuario.

**Serial Number**: en esta columna se inserta el código del Serial Number a cargar, construido según las reglas definidas en los *Parámetros Iniciales de Inventario<!-- Parametri Iniziali di Magazzino -->* asociadas al tipo de código SN. Es editable por el usuario.

**Serial Number del Cliente**: indica el Serial Number usado por el cliente;

**Serial Number del Proveedor**: indica el Serial Number usado por el proveedor;

**Fecha de inicio**: indica la fecha de inicio de validez del Serial Number;

**Fecha de vencimiento**: indica la fecha de vencimiento del Serial Number;

**Fecha última modificación**: indica la fecha de última modificación;

**Anulado**: indica que el Serial Number está en estado anulado;

**Cerrado forzadamente**: indica que el Serial Number se ha cerrado forzadamente;
 
**Lote**: indica el número de lote correspondiente a ese Serial Number.

Al completar el ingreso de lotes en la cuadrícula *Números de Serie*, garantizando que la cantidad de la fila de movimiento<!-- movimento --> sea igual al número de Serial Numbers ingresados, el usuario podrá guardar la fila del movimiento<!-- movimento --> sin recibir mensajes de error del sistema.

> *Segundo caso: Registración de descarga<!-- Registrazione di scarico -->*

Al guardar la fila del movimiento<!-- movimento -->, el sistema deja "en edición" esa fila, invitando al usuario a trasladarse a la cuadrícula Números de Serie y detallar los Serial Numbers a descargar.

Las columnas de la cuadrícula son las siguientes:

**Serial Number**: en esta columna el usuario debe ingresar, mediante doble clic en el campo amarillo, los Serial Numbers a descargar, obteniéndolos por *Help Serial Numbers*.

**Fecha de ingreso**: indica la fecha de ingreso del Serial Number;

**Serial Number del Cliente**: indica el Serial Number usado por el cliente;

**Serial Number del Proveedor**: indica el Serial Number usado por el proveedor;

**Fecha última modificación**: indica la fecha de última modificación;

**Fecha de inicio**: indica la fecha de inicio de validez del Serial Number;

**Anulado**: indica que el Serial Number está en estado anulado;

**Lote**: indica el número de lote correspondiente a ese Serial Number.

Al completar el ingreso de lotes a descargar en la cuadrícula *Números de Serie*, garantizando que la cantidad de la fila de movimiento<!-- movimento --> sea igual al número de Serial Numbers ingresados, el usuario podrá guardar la fila del movimiento<!-- movimento --> sin recibir mensajes de error del sistema.

### Centros de Costo<!-- Centri di Costo -->

En esta cuadrícula el usuario puede vincular a la fila de movimiento<!-- movimento --> uno o más centros de costo, asignando así diferentes cantidades del movimiento<!-- movimento --> a distintos centros de costo.

La cuadrícula consta de una columna donde aparece un campo de color amarillo; con doble clic, el usuario puede abrir el **Help Centros de Costo**, con el que puede ingresar el centro de costo en la fila, completando luego con la cantidad a la que ese centro debe estar vinculado. Si la suma de las cantidades en las filas de la cuadrícula de centros de costo es diferente a la cantidad gestionada de la fila de movimiento<!-- movimento -->, el sistema da un aviso e impide guardar el movimiento<!-- movimento -->.

### Extra Data

Se remite a la documentación relativa a [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

## Contrapartida<!-- Contropartita -->

Esta pestaña es idéntica a la de *Registración<!-- Registrazione -->*, pero solo está activa si la causa<!-- causale --> de inventario<!-- magazzino --> indicada en la pestaña *Registración<!-- Registrazione -->* tiene asociadas tanto un almacén<!-- magazzino --> como una causa de contrapartida<!-- causale di contropartita -->.  
Las causas de contrapartida<!-- causali di contropartita --> se configuran cuando se desea gestionar un doble movimiento de inventario<!-- magazzino --> con una sola registración<!-- registrazione -->. Así, es posible, en la tabla de causas de inventario<!-- causali di magazzino -->, indicar una causa de carga como contrapartida de una de descarga y viceversa.

En la pestaña *Contrapartida<!-- Contropartita -->* se muestran exactamente todos los datos configurados dentro de la pestaña *Registración<!-- Registrazione -->*, con la posibilidad para el usuario de modificar solo algunos datos de encabezado: Documento interno, Documento de referencia, Orden de venta<!-- Commessa di vendita -->.

Los datos de la fila de movimiento<!-- movimento --> deben ser idénticos entre las dos pestañas; lo mismo ocurre para las cuadrículas de Lotes, Números de Serie, Variantes y Centros de Costo del movimiento<!-- movimento --> individual. Solo el campo de ubicación<!-- ubicazione --> es editable en la pestaña de contrapartida<!-- contropartita -->.

Existe un caso **particular** en el que se ingresa un artículo en la pestaña *Registración<!-- Registrazione -->* y otros en la pestaña *Contrapartida<!-- Contropartita -->*: esto solo ocurre cuando la causa de contrapartida<!-- causale di contropartita --> asociada a la causa principal tiene activada la bandera *Lista de materiales (BOM)<!-- Distinta Base -->*, lo cual permite al usuario cargar el artículo en la pestaña *Registración<!-- Registrazione -->* (usando una causa de carga) y ver su lista de materiales en la pestaña *Contrapartida<!-- Contropartita -->*, donde presentes estará una causa de descarga. Obviamente, también puede gestionarse a la inversa.

Una situación **particular** que requiere la gestión de causas con contrapartida<!-- causali con la contropartita agganciata --> está relacionada con la *descarga automática del DDT de entrega de trabajo externo<!-- conto lavoro -->*, que realiza la descarga de materiales para entregar al subcontratista desde el almacén<!-- magazzino --> de materias primas (o semielaborados, según el caso) con inmediata carga en el almacén<!-- magazzino --> del subcontratista de los mismos materiales, que luego serán por él transformados según lo solicitado por la orden de trabajo externo<!-- ordine di conto lavoro -->.

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).