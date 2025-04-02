---
title: causali di magazzino
sidebar_position: 9
---

:::important ¿Para qué sirve? (A cosa serve)
La tabla Causas de Almacenamiento de Fluentis es un elemento esencial para la gestión de las movidas de almacén, permitiendo definir y personalizar las causas utilizadas en los movimientos de carga y descarga. Los usuarios pueden fácilmente agregar nuevas causas en la cuadrícula, especificando información obligatoria como el almacén de referencia, el código de la causa y la descripción.

Una de las características principales de esta tabla es la posibilidad de asociar causas específicas a cada almacén, lo que ofrece una flexibilidad considerable en la personalización de los procedimientos operativos. Cada causa puede ser caracterizada como carga o descarga, permitiendo gestionar con precisión cómo influyen en el inventario del almacén.

Además, los usuarios pueden configurar varios parámetros opcionales, incluyendo indicadores para la visibilidad en áreas específicas y definir el costo propuesto para los movimientos. También es posible activar funciones para actualizar automáticamente el costo medio, el último costo y el precio de venta en función de los movimientos realizados. Estas características convierten a la tabla en un componente clave para una gestión eficiente de las operaciones de almacén y para el monitoreo de costos.
:::

A través de esta ventana se configuran todas las causas de almacén que sirven para el movimiento de artículos hacia y desde los varios almacenes ingresados en la tabla *magazzini*.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Causas de Almacenamiento (Ricerca Causali di Magazzino)**

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, simplemente se debe hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Causas de Almacenamiento (Inserimento Causali di Magazzino)**

Para poder insertar nuevos códigos, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.

**magazzino**: en esta columna, el usuario debe establecer, utilizando el combo box que llama a los datos de la tabla *Almacenes*, el código del almacén para el cual debe insertar la causa de movimiento;

**causale**: en esta columna, el usuario debe ingresar el código de la causa de almacén. Este puede tener una longitud máxima de 3 caracteres alfanuméricos. Es posible crear múltiples causas de almacén con el mismo código, siempre que las causas sean generadas para diferentes almacenes; dos causas con el mismo código en el mismo almacén no son, por lo tanto, admitidas;

**descrizione**: en esta columna, el usuario debe ingresar la descripción de la causa de almacén, que puede alcanzar una longitud máxima de 80 caracteres alfanuméricos;

**tipo**: en esta columna, el usuario debe ingresar el *Tipo de movimiento* que caracteriza la causa. Puede ser de *Carga*, en cuyo caso la cantidad del movimiento de almacén creado con esa causa se guarda en la base de datos como positiva, o de *Descarga*, en cuyo caso la cantidad del movimiento de almacén creado con esa causa se guarda como negativa;

**Visible en Compra (Visibile in Acquisto)**: si está activo, hace visible la causa en el área de compras;

**Visible en Venta (Visibile in Vendita)**: si está activo, hace visible la causa en el área de ventas;

**visibile in produzione**: si está activo, hace visible la causa en el área de producción;

**Visible en Trabajo por Cuenta (Visibile in Conto Lavoro)**: si está activo, hace visible la causa en el área de trabajo por cuenta;

**Visible en Logística (Visibile in Logistica)**: si está activo, hace visible la causa en el área de logística;

**costo proposto**: en esta columna, el usuario debe elegir qué costo debe ser propuesto automáticamente cuando se inserta un movimiento manualmente. El costo propuesto puede ser el último costo, el costo medio, el precio de venta o el costo estándar del artículo en movimiento. Cabe destacar que los valores propuestos se toman directamente del registro del artículo. Además, es muy importante tener en cuenta que el costo propuesto tiene prioridad sobre los documentos; por lo tanto, las causas de almacén que se utilizarán en los documentos deben tener como “Costo propuesto” el valor “Ninguno”, de esta manera se tomará el costo indicado dentro del documento.

**Actualizar costo medio (Aggiorna costo medio)**: todos los movimientos realizados utilizando una causa que tenga este indicador activado contribuyen al cálculo del costo medio ponderado del artículo. Cabe señalar que el indicador no puede ser activado o desactivado después de que la causa haya sido utilizada incluso para un solo movimiento de almacén. Normalmente, este indicador se activa solo para los movimientos de carga, pero también puede ser activado para los movimientos de descarga, cuando se desea que la media ponderada del costo del artículo se calcule también considerando los precios de venta relacionados con las descargas de almacén del mismo artículo. 
El costo medio en el registro del artículo se actualiza con el monto del movimiento solo si también están activados los indicadores *Actualizar costo del artículo (Aggiorna costo articolo)* e *interesse fiscale*;    

**Actualizar último costo (Aggiorna costo ultimo)**: todos los movimientos realizados utilizando una causa que tenga este indicador activado contribuyen al cálculo del último costo del artículo. Cabe señalar que el indicador no puede ser activado o desactivado después de que la causa haya sido utilizada incluso para un solo movimiento de almacén. Este indicador se activa solo para los movimientos de carga. 
El último costo en el registro del artículo se actualiza con el monto del movimiento solo si también están activados los indicadores *Actualizar costo del artículo (Aggiorna costo articolo)* e *interesse fiscale*;    

**Actualizar precio de venta (Aggiorna prezzo di vendita)**: Cabe señalar que el indicador no puede ser activado o desactivado después de que la causa haya sido utilizada incluso para un solo movimiento de almacén. Este indicador se activa solo para los movimientos de descarga. 
El precio de venta en el registro del artículo se actualiza con el monto del movimiento solo si también está activado el indicador *Agg. C.Art.*;     

**Actualizar costo del artículo (Aggiorna costo articolo)**: cuando se inserta un movimiento de almacén utilizando la causa que tiene el indicador **Actualizar Costo Artículo (Aggiorna Costo Articolo)** activado, se actualizan respectivamente el costo medio, el último costo y/o el precio de venta en el registro del artículo con el monto del movimiento, según cuáles de los siguientes indicadores están activos: *Actualizar costo medio*, *Actualizar costo último* y *Actualizar precio de venta*.      

**interesse fiscale**: cuando se inserta un movimiento de almacén utilizando la causa que tiene el indicador **Interés Fiscal** activado, el movimiento mismo se considera en el libro de inventario y en el cálculo del último costo, medio y del inventario cantidad valorada, siempre que el artículo movido también tenga activado el indicador *Interés Fiscal* en la pestaña *Generalidades*;

**punto di riordino**: cuando se inserta un movimiento de almacén utilizando la causa que tiene el indicador **Punto de Reorden** activado, el movimiento se considera por el procedimiento que realiza el cálculo del punto de reorden;     

**gestione lotti**: cuando se inserta un movimiento de almacén utilizando la causa que tiene el indicador **Gestión de lotes** activado, el movimiento permite la inserción del lote en la cuadrícula correspondiente al registro de almacén para un artículo que se gestiona por lotes.  
El mismo procedimiento es válido para la gestión de **serial numbers**;

**Integrar cantidad inicial (Integra quantità iniziale)**: se utiliza solo con la gestión de lotes; permite incrementar la cantidad de un lote cargado con un movimiento anterior manteniendo el mismo número de lote; 

**Crear lote de lote (Crea lotto da lotto)**: si está activado, permite visualizar esa causa como causa del procedimiento “Creación de lote de lote” para cambiar un lote por otro; por lo que el programa automáticamente descargará un lote y cargará otro del mismo artículo; además, también está disponible el procedimiento “Creación de lote de lote con cambio de artículo” que permite descargar un artículo con un cierto lote y cargar otro artículo con otro lote; para poder activar este indicador, la causa creada debe ser de **scarico** y también deben estar activados los siguientes indicadores: **Gestión de Lotes**, **Integrar cantidad inicial** y, además, no debe estar activado el indicador **Distinta Base** y debe haber una causa en **Causa de contrapartida de carga**;

**Lotes no disponibles (Lotti non disponibili)**: cuando se inserta un movimiento de almacén utilizando la causa que tiene el indicador *Lotes no disponibles* activado, con el movimiento se pueden descargar lotes que se encuentran en un estado que no está disponible;

**crea s/n**: si está activado, permite habilitar la gestión y creación automática de números de serie;

**documento obbligatorio**: cuando se inserta un movimiento de almacén utilizando la causa que tiene el indicador **Documento Obligatorio** activado, es obligatorio especificar algo en el campo *Documento de referencia* del registro de almacén, de lo contrario no es posible continuar;

**conto obbligatorio**: cuando se inserta un movimiento de almacén utilizando la causa que tiene el indicador **Cuenta Obligatoria** activado, es obligatorio especificar algo en el campo *Cliente/Proveedor* del registro de almacén. Se usa normalmente para las registraciones relacionadas con el consumo y la entrega de materiales de trabajo por cuenta, de lo contrario no es posible continuar;

**distinta base**: cuando se inserta un movimiento de almacén utilizando la causa que tiene el indicador ‘Distinta Base’ activado, entonces en el momento en que se guarda la línea del movimiento, en lugar de insertar el artículo seleccionado (que debe tener obligatoriamente una distinta base) se insertan los artículos de primer nivel de la distinta base. Se usa a menudo en causas de descarga de contrapartida para descargar los componentes de un artículo cargado desde la causa principal;

**Inventario físico (Invantario fisico)**: el indicador **Inventario físico** permite decidir cuáles son las causas de almacén que deben poder ser seleccionables en los [Parámetros de diferencias inventariales (Parametri differenze inventariali)](/docs/configurations/parameters/logistics/stock-difference) como causas para utilizar en el cálculo de las diferencias inventariales. Las registraciones de almacén que se generarán automáticamente por el procedimiento *Diferencias Inventariales* presentarán en el encabezado causas de este tipo;

**Almacén de contrapartida (Magazzino di Contropartita)**: en esta columna, el usuario puede especificar el código del **Almacén de contrapartida**, accediendo a través del combo box correspondiente a la tabla de *Almacenes*. Este no es más que el almacén que debe aparecer en la pestaña *Contrapartida* del registro de almacén;

**Causa de Contrapartida (Causale di Contropartita)**: en esta columna, el usuario puede especificar el código de la **Causa de contrapartida**. Esto permite garantizar que cuando se crea un movimiento de almacén utilizando la causa principal, también se inserte automáticamente un movimiento de signo opuesto. Por ejemplo, se establece la causa de contrapartida para realizar traslados entre diferentes almacenes o para hacer traslados entre ubicaciones distintas dentro del mismo almacén;

**rimanenze**: con este indicador, el usuario puede designar para una sola causa por cada almacén cuál debe ser la causa utilizada por el procedimiento *valorizzazione magazzino* que ejecuta el cierre de almacén para crear las registraciones de carga para inventario inicial. Para que los movimientos creados con esta causa sean considerados por el [Inventario a cantidad valorizada (Inventario a quantità valorizzato)](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity), es necesario que también estén activados los indicadores de **Interés fiscal** y, dependiendo de la necesidad, también los de **Actualizar último costo** y **Actualizar costo medio**; además, para que el movimiento de remanencia creado tenga un costo, también debe insertarse un valor en el campo **Costo propuesto**;       

**tipo documento gestionale**: se usan en las localizaciones extranjeras como Rumania/Croacia, donde los movimientos de almacén deben ser registrados también en contabilidad;     

**causale contabile**: se usan en las localizaciones extranjeras como Rumania/Croacia, donde los movimientos de almacén deben ser registrados también en contabilidad. Se utiliza para seleccionar los modelos predefinidos del libro mayor principal que permiten registrar los movimientos de almacén en el libro mayor principal para cada almacén y el correspondiente modelo de movimiento de almacén dependiente del tipo y de las configuraciones previamente definidas;           

**Tipo de causa contable (Tipo causale contabile)**: se usan en las localizaciones extranjeras como Rumania/Croacia, donde los movimientos de almacén deben ser registrados también en contabilidad;    

**ubicazione**: en esta columna, el usuario puede insertar, accediendo a la *help ubicazioni* que se abre con un doble clic en la casilla, la ubicación predeterminada que se propondrá en el movimiento de carga o de descarga, si no ha sido pasada por el procedimiento que crea el movimiento. La configuración de la ubicación predeterminada se utiliza generalmente en las causas de carga, ya que la descarga debe hacerse desde la ubicación donde se encuentra el artículo en el momento de realizar la descarga; por lo tanto, la ubicación presente en el documento tendrá prioridad sobre la que esté presente en la causa de almacén;

**Índice de rotación (Indice rotazione)**: si este indicador está activo, entonces los registros creados con esta causa se consideran en el procedimiento del cálculo del **Índice de rotación** del almacén (Stampa);

**alternative**: la activación de este indicador ocurre simultáneamente con el indicador *Distinta Base*; si está activo, al crear un movimiento con una causa de descarga que tenga ambos indicadores activados y uno de los componentes no tiene cantidad suficiente para ser descargado, el procedimiento verifica si un artículo alternativo (especificado en la distinta base) tiene cantidad suficiente para ser descargado en lugar del componente principal;

**Alternativas Mixtas (Alternative Miste)**: la activación de este indicador ocurre simultáneamente con el indicador *Distinta Base*; si está activo, el procedimiento descarga simultáneamente más artículos alternativos hasta completar la cantidad necesaria. Está estrechamente relacionado con el indicador *Alternativas*;

**Considerar movimientos a cero (Considera movimenti a zero)**: al activar este indicador, el usuario puede decidir cuáles son los movimientos de almacén con cantidad igual a cero que deben contribuir al cálculo del costo medio ponderado de los artículos; esta es la única causa que permite insertar un movimiento con cantidad igual a cero. Obviamente, el indicador se activa generalmente en causas que tengan el indicador *Actualizar Costo Medio* activado;

**Trazabilidad (Tracciabilità)**: si está activo, indica que los movimientos generados con esta causa serán utilizados para la [Trazabilidad de lotes (Tracciabilità dei lotti)](/docs/logistics/lots-serial-numbers/lots-register); este procedimiento garantiza la posibilidad de rastrear qué materiales se han utilizado dentro de un cierto producto terminado o, a la inversa, entender en qué productos terminados se ha utilizado un cierto material.

**scarto**: si está activo, hace visible la causa para la definición de los descartes en el formulario *prelievi aggiuntivi produzione* y en la pestaña *scarto* de las [Declaraciones de producción (Dichiarazioni di produzione)](/docs/production/pp-production-in-progress/signals/sisgnals/);	

**Rectificación de unidad de carga (Rettifica unità di carico)**: si está activo, hace visible la causa para las rectificaciones de las unidades de carga;      

**D.D.M.R.P. ADU (D.D.M.R.P. ADU)**: si está activo, indica que la causa se utiliza para reconocer todos los movimientos de almacén involucrados en el cálculo ADU (*Average Daily Use*) del artículo (este indicador es visible siempre y solo si se ha configurado el menú DDMRP).

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consultar el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).