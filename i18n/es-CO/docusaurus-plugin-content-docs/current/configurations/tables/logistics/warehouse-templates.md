---
title: Plantilla de Almacén
sidebar_position: 9
---

:::important ¿Para qué sirve? 
La tabla Plantilla de Almacén de Fluentis es un elemento esencial para la gestión de las movidas de almacén, permitiendo definir y personalizar las plantillas utilizadas en los movimientos de carga y descarga. Los usuarios pueden fácilmente agregar nuevas plantillas en la cuadrícula, especificando información obligatoria como el almacén de referencia, el código de la plantilla y la descripción.

Una de las características principales de esta tabla es la posibilidad de asociar plantillas específicas a cada almacén, lo que ofrece una flexibilidad considerable en la personalización de los procedimientos operativos. Cada plantilla puede ser caracterizada como carga o descarga, permitiendo gestionar con precisión cómo influyen en el inventario del almacén.

Además, los usuarios pueden configurar varios parámetros opcionales, incluyendo indicadores para la visibilidad en áreas específicas y definir el costo propuesto para los movimientos. También es posible activar funciones para actualizar automáticamente el costo medio, el último costo y el precio de venta en función de los movimientos realizados. Estas características convierten a la tabla en un componente clave para una gestión eficiente de las operaciones de almacén y para el monitoreo de costos.
:::

A través de esta ventana se configuran todas las plantillas de almacén que sirven para el movimiento de artículos hacia y desde los varios almacenes ingresados en la tabla *Almacenes*.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Plantilla de Almacén**

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, simplemente se debe hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Plantilla de Almacén**

Para poder insertar nuevos códigos, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.

**Almacén**: en esta columna, el usuario debe establecer, utilizando el combo box que llama a los datos de la tabla *Almacenes*, el código del almacén para el cual debe insertar la plantilla de movimiento;

**Plantilla**: en esta columna, el usuario debe ingresar el código de la plantilla de almacén. Este puede tener una longitud máxima de 3 caracteres alfanuméricos. Es posible crear múltiples plantillas de almacén con el mismo código, siempre que las plantillas sean generadas para diferentes almacenes; dos plantillas con el mismo código en el mismo almacén no son, por lo tanto, admitidas;

**Descripción**: en esta columna, el usuario debe ingresar la descripción de la plantilla de almacén, que puede alcanzar una longitud máxima de 80 caracteres alfanuméricos;

**Tipo**: en esta columna, el usuario debe ingresar el *Tipo de movimiento* que caracteriza la plantilla. Puede ser de *Carga*, en cuyo caso la cantidad del movimiento de almacén creado con esa plantilla se guarda en la base de datos como positiva, o de *Descarga*, en cuyo caso la cantidad del movimiento de almacén creado con esa plantilla se guarda como negativa;

**Visible en Compra**: si está activo, hace visible la plantilla en el área de compras;

**Visible en Venta**: si está activo, hace visible la plantilla en el área de ventas;

**Visible en Producción**: si está activo, hace visible la plantilla en el área de producción;

**Visible en Subcontrato**: si está activo, hace visible la plantilla en el área de subcontrato;

**Visible en Logística**: si está activo, hace visible la plantilla en el área de logística;

**Costo propuesto**: en esta columna, el usuario debe elegir qué costo debe ser propuesto automáticamente cuando se inserta un movimiento manualmente. El costo propuesto puede ser el último costo, el costo medio, el precio de venta o el costo estándar del artículo en movimiento. Cabe destacar que los valores propuestos se toman directamente del registro del artículo. Además, es muy importante tener en cuenta que el costo propuesto tiene prioridad sobre los documentos; por lo tanto, las plantillas de almacén que se utilizarán en los documentos deben tener como “Costo propuesto” el valor “Ninguno”, de esta manera se tomará el costo indicado dentro del documento.

**Actualizar costo promedio**: todos los movimientos realizados utilizando una plantilla que tenga este indicador activado contribuyen al cálculo del costo medio ponderado del artículo. Cabe señalar que el indicador no puede ser activado o desactivado después de que la plantilla haya sido utilizada incluso para un solo movimiento de almacén. Normalmente, este indicador se activa solo para los movimientos de carga, pero también puede ser activado para los movimientos de descarga, cuando se desea que la media ponderada del costo del artículo se calcule también considerando los precios de venta relacionados con las descargas de almacén del mismo artículo. 
El costo medio en el registro del artículo se actualiza con el monto del movimiento solo si también están activados los indicadores *Actualizar costo del artículo* e *Interés fiscal*;    

**Actualizar el último costo**: todos los movimientos realizados utilizando una plantilla que tenga este indicador activado contribuyen al cálculo del último costo del artículo. Cabe señalar que el indicador no puede ser activado o desactivado después de que la plantilla haya sido utilizada incluso para un solo movimiento de almacén. Este indicador se activa solo para los movimientos de carga. 
El último costo en el registro del artículo se actualiza con el monto del movimiento solo si también están activados los indicadores *Actualizar costo del artículo* e *Interés fiscal*;    

**Actualizar precio de venta (Aggiorna prezzo di vendita)**: Cabe señalar que el indicador no puede ser activado o desactivado después de que la plantilla haya sido utilizada incluso para un solo movimiento de almacén. Este indicador se activa solo para los movimientos de descarga. 
El precio de venta en el registro del artículo se actualiza con el monto del movimiento solo si también está activado el indicador *Agg. C.Art.*;     

**Actualizar costo del artículo**: cuando se inserta un movimiento de almacén utilizando la plantilla que tiene el indicador **Actualizar Costo Artículo** activado, se actualizan respectivamente el costo medio, el último costo y/o el precio de venta en el registro del artículo con el monto del movimiento, según cuáles de los siguientes indicadores están activos: *Actualizar costo medio*, *Actualizar costo último* y *Actualizar precio de venta*.      

**Interés fiscal**: cuando se inserta un movimiento de almacén utilizando la plantilla que tiene el indicador **Interés Fiscal** activado, el movimiento mismo se considera en el libro de inventario y en el cálculo del último costo, medio y del inventario cantidad valorada, siempre que el artículo movido también tenga activado el indicador *Interés Fiscal* en la pestaña *Generalidad*;

**Nivel de Reabastecimiento**: cuando se inserta un movimiento de almacén utilizando la plantilla que tiene el indicador **Nivel de Reabastecimiento** activado, el movimiento se considera por el procedimiento que realiza el cálculo del punto de reorden;     

**Gestión de lotes**: cuando se inserta un movimiento de almacén utilizando la plantilla que tiene el indicador **Gestión de lotes** activado, el movimiento permite la inserción del lote en la cuadrícula correspondiente al registro de almacén para un artículo que se gestiona por lotes.  
El mismo procedimiento es válido para la gestión de **Números de serie**;

**Integrar cantidad inicial**: se utiliza solo con la gestión de lotes; permite incrementar la cantidad de un lote cargado con un movimiento anterior manteniendo el mismo número de lote; 

**Crear lote a partir de lote**: si está activado, permite visualizar esa plantilla como plantilla del procedimiento “Creación de lote de lote” para cambiar un lote por otro; por lo que el programa automáticamente descargará un lote y cargará otro del mismo artículo; además, también está disponible el procedimiento “Creación de lote de lote con cambio de artículo” que permite descargar un artículo con un cierto lote y cargar otro artículo con otro lote; para poder activar este indicador, la plantilla creada debe ser de **Descarga** y también deben estar activados los siguientes indicadores: **Gestión de Lotes**, **Integrar cantidad inicial** y, además, no debe estar activado el indicador **Lista de materiales** y debe haber una plantilla en **Plantilla de compensación de carga**;

**Lotes no disponibles**: cuando se inserta un movimiento de almacén utilizando la plantilla que tiene el indicador *Lotes no disponibles* activado, con el movimiento se pueden descargar lotes que se encuentran en un estado que no está disponible;

**Crear S/N**: si está activado, permite habilitar la gestión y creación automática de números de serie;

**Documento de obligación**: cuando se inserta un movimiento de almacén utilizando la plantilla que tiene el indicador **Documento de obligación** activado, es obligatorio especificar algo en el campo *Documento de referencia* del registro de almacén, de lo contrario no es posible continuar;

**Fuerzas de ingresos**: cuando se inserta un movimiento de almacén utilizando la plantilla que tiene el indicador **Cuenta Obligatoria** activado, es obligatorio especificar algo en el campo *Cliente/Proveedor* del registro de almacén. Se usa normalmente para las registraciones relacionadas con el consumo y la entrega de materiales de trabajo por cuenta, de lo contrario no es posible continuar;

**Lista de materiales**: cuando se inserta un movimiento de almacén utilizando la plantilla que tiene el indicador ‘Lista de materiales’ activado, entonces en el momento en que se guarda la línea del movimiento, en lugar de insertar el artículo seleccionado (que debe tener obligatoriamente una Lista de materiales) se insertan los artículos de primer nivel de la Lista de materiales. Se usa a menudo en plantillas de descarga de compensación para descargar los componentes de un artículo cargado desde la plantilla principal;

**Inventario físico**: el indicador **Inventario físico** permite decidir cuáles son las plantillas de almacén que deben poder ser seleccionables en los [Parámetros de diferencia de inventario](/docs/configurations/parameters/logistics/stock-difference) como plantillas para utilizar en el cálculo de las diferencias inventariales. Las registraciones de almacén que se generarán automáticamente por el procedimiento *diferencia de inventario* presentarán en el encabezado plantillas de este tipo;

**Almacén de compensación**: en esta columna, el usuario puede especificar el código del **Almacén de compensación**, accediendo a través del combo box correspondiente a la tabla de *Almacenes*. Este no es más que el almacén que debe aparecer en la pestaña *compensación* del registro de almacén;

**Plantilla de compensación**: en esta columna, el usuario puede especificar el código de la **Plantilla de compensación**. Esto permite garantizar que cuando se crea un movimiento de almacén utilizando la plantilla principal, también se inserte automáticamente un movimiento de signo opuesto. Por ejemplo, se establece la plantilla de compensación para realizar traslados entre diferentes almacenes o para hacer traslados entre ubicaciones distintas dentro del mismo almacén;

**Artículos diversos**: con este indicador, el usuario puede designar para una sola plantilla por cada almacén cuál debe ser la plantilla utilizada por el procedimiento *Valoración de Almacén* que ejecuta el cierre de almacén para crear las registraciones de carga para inventario inicial. Para que los movimientos creados con esta plantilla sean considerados por el [Inventario valorizado con cantidad](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity), es necesario que también estén activados los indicadores de **Interés fiscal** y, dependiendo de la necesidad, también los de **Actualizar último costo** y **Actualizar costo medio**; además, para que el movimiento de remanencia creado tenga un costo, también debe insertarse un valor en el campo **Costo propuesto**;       

**Tipo de documento operativo**: se usan en las localizaciones extranjeras como Rumania/Croacia, donde los movimientos de almacén deben ser registrados también en contabilidad;     

**Plantilla de libro mayor**: se usan en las localizaciones extranjeras como Rumania/Croacia, donde los movimientos de almacén deben ser registrados también en contabilidad. Se utiliza para seleccionar los modelos predefinidos del libro mayor principal que permiten registrar los movimientos de almacén en el libro mayor principal para cada almacén y el correspondiente modelo de movimiento de almacén dependiente del tipo y de las configuraciones previamente definidas;           

**Tipo de plantilla de libro mayor**: se usan en las localizaciones extranjeras como Rumania/Croacia, donde los movimientos de almacén deben ser registrados también en contabilidad;    

**Ubicación**: en esta columna, el usuario puede insertar, accediendo a *Ubicaciones de ayuda* que se abre con un doble clic en la casilla, la ubicación predeterminada que se propondrá en el movimiento de carga o de descarga, si no ha sido pasada por el procedimiento que crea el movimiento. La configuración de la ubicación predeterminada se utiliza generalmente en las plantillas de carga, ya que la descarga debe hacerse desde la ubicación donde se encuentra el artículo en el momento de realizar la descarga; por lo tanto, la ubicación presente en el documento tendrá prioridad sobre la que esté presente en la plantilla de almacén;

**Índice de rotación**: si este indicador está activo, entonces los registros creados con esta plantilla se consideran en el procedimiento del cálculo del **Índice de rotación** del almacén (Imprimir Informe);

**Alternativas**: la activación de este indicador ocurre simultáneamente con el indicador *Lista de materiales*; si está activo, al crear un movimiento con una plantilla de descarga que tenga ambos indicadores activados y uno de los componentes no tiene cantidad suficiente para ser descargado, el procedimiento verifica si un artículo alternativo (especificado en la Lista de materiales) tiene cantidad suficiente para ser descargado en lugar del componente principal;

**Alternativas Mixtas**: la activación de este indicador ocurre simultáneamente con el indicador *Lista de materiales*; si está activo, el procedimiento descarga simultáneamente más artículos alternativos hasta completar la cantidad necesaria. Está estrechamente relacionado con el indicador *Alternativas*;

**Considerar movimientos a cero**: al activar este indicador, el usuario puede decidir cuáles son los movimientos de almacén con cantidad igual a cero que deben contribuir al cálculo del costo medio ponderado de los artículos; esta es la única plantilla que permite insertar un movimiento con cantidad igual a cero. Obviamente, el indicador se activa generalmente en plantillas que tengan el indicador *Actualizar Costo Medio* activado;

**Trazabilidad**: si está activo, indica que los movimientos generados con esta plantilla serán utilizados para la [Trazabilidad de lotes](/docs/logistics/lots-serial-numbers/lots-register); este procedimiento garantiza la posibilidad de rastrear qué materiales se han utilizado dentro de un cierto producto terminado o, a la inversa, entender en qué productos terminados se ha utilizado un cierto material.

**Desecho**: si está activo, hace visible la plantilla para la definición de los descartes en el formulario *Adicionales de producción* y en la pestaña *scarto* de las [Declaraciones de producción](/docs/production/pp-production-in-progress/signals/sisgnals/);	

**Ajuste de Unidad de Carga**: si está activo, hace visible la plantilla para las rectificaciones de las unidades de carga;      

**D.D.M.R.P. ADU**: si está activo, indica que la plantilla se utiliza para reconocer todos los movimientos de almacén involucrados en el cálculo ADU (*Average Daily Use*) del artículo (este indicador es visible siempre y solo si se ha configurado el menú DDMRP).

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consultar el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).