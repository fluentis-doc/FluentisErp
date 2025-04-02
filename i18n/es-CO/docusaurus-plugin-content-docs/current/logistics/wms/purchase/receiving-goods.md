---
title: ricevimento merci
sidebar_position: 1
---

:::important ¿Para qué sirve? (A cosa serve)
El módulo de recepción de mercancías es una herramienta esencial para la gestión efectiva de los flujos de almacén. Esta función permite la identificación oportuna de los materiales que llegan, garantizando una carga precisa y organizada de las mercancías. El proceso comienza con la selección de los pedidos de proveedores no cumplidos o parcialmente cumplidos, facilitada por filtros detallados que permiten visualizar los artículos en espera de recepción.

Una vez seleccionados los pedidos, el operador puede generar el Documento de Transporte (DDT) de compra, ingresando los detalles relativos a los artículos a cargar. El sistema también soporta la creación de unidades de carga (UDC) en caso de que estas sean gestionadas, mejorando aún más la organización y la trazabilidad de las mercancías recibidas. A través de la entrada de datos relacionados con los lotes, las cantidades y otras informaciones pertinentes, el módulo garantiza un control completo sobre los movimientos del almacén.
:::

Este procedimiento se utiliza en la fase de recepción de mercancías, para la identificación de artículos, la creación y la carga del DDT de compra.

El formulario se abre con el filtro de los pedidos de proveedores, donde se pueden visualizar todos los pedidos en estado *No cumplido* y *Parcialmente cumplido*.  
Los resultados pueden ser filtrados por *Número*, *Tipo de pedido*, *Año*, *Artículo* y *Proveedor*.  
Después de seleccionar uno o más pedidos de proveedor, es posible visualizar los artículos no cumplidos y parcialmente cumplidos utilizando el botón *Visualizar*, mientras que a través del botón *Creación DDT de compra* se puede comenzar a ingresar los artículos que estarán presentes en el DDT.

El formulario principal consta de las siguientes pestañas:

- **creazione ddt acquisto**  
Después de seleccionar el pedido de proveedor, a través del botón *Creación DDT de compra* se puede abrir el formulario en la pestaña *Creación DDT de compra*, donde el foco se situará directamente en el campo "DDT" para que se ingrese primero el número del documento.  
Además, se visualizarán las informaciones relacionadas con el primer artículo presente en el pedido, además de la información de encabezado del propio pedido.

> **magazzino**: indica el almacén en el que se realizarán los movimientos;  
> **causale magazzino**: indica la causa de almacén con la que se realizarán los movimientos;  
> **tipo ddt**: indica el tipo de DDT con el que se creará el documento de transporte;  
> **data**: indica la fecha del DDT que se está creando; por defecto se propone la del día;  
> **ordine**: indica el número de pedido de proveedor;  
> **articolo**: indica clase, código y descripción del artículo que se está a punto de confirmar;  
> **n. riga**: indica el número de línea del artículo en el pedido de proveedor;  
> **barcode**: permite leer los códigos de barras a través de un lector especial para realizar diversas operaciones;  
> **lotto fornitore**: permite ingresar el número de lote del proveedor;  
> **LT**: permite generar el número de lote interno;  
> **data scadenza**: indica la fecha de caducidad del lote;  
> **quantità ordinata**: indica la cantidad ordenada;  
> **quantità residua**: indica la cantidad residual;  
> **quantità**: indica la cantidad que se desea cargar en el almacén;  
> **ubicazione proposta**: indica la ubicación propuesta;  
> **ubicazione**: permite ingresar una ubicación variando la propuesta.

A través del campo **input code** (usando un lector de códigos de barras) es posible ingresar los datos relacionados con el lote, la ubicación, la cantidad detectada y el artículo en caso de que se desee cargar uno diferente al propuesto, pero que aún esté presente en los pedidos seleccionados anteriormente.  
Después de ingresar los datos relacionados con el artículo actual, es posible confirmarlos a través del botón **conferma**.  
Una vez confirmadas todas las líneas del pedido, se será posicionado automáticamente en la pestaña **Detalles DDT**, donde utilizando el botón **chiudi** se puede guardar el DDT y realizar el respectivo movimiento de almacén.

**Botones específicos**  
> **conferma**: permite confirmar los datos ingresados para el artículo seleccionado;  
> **Conf+Stp**: permite confirmar los datos ingresados para el artículo y, además, abre un pop-up que da la posibilidad de imprimir las etiquetas;  
> **stampa**: permite imprimir las etiquetas;  
> **chiudi**: permite guardar el DDT creado y crear los respectivos movimientos de almacén;  
> **prossimo oggetto**: permite pasar al siguiente artículo presente en el pedido de proveedor;  
> **precedente oggetto**: permite pasar al artículo anterior presente en el pedido de proveedor.

- **dettagli ddt**  
En este formulario se incluyen todas las informaciones relacionadas con las líneas creadas.

**Botones específicos**  
> **cancella articoli**: permite eliminar la línea seleccionada del DDT.

- **dettagli dell'ordine**:  
En este formulario se incluyen todas las informaciones relacionadas con el pedido de proveedor considerado.

## **ricevimento merci con unidades de carga (Ricevimento merci con unità di carico)**

En caso de que el artículo sea gestionado con unidades de carga, en la pestaña [confeccionamiento (confezionamento)](/docs/erp-home/registers/items/create-new-item) del registro de artículo debe haber al menos una línea con el indicador **Unidad de carga obligatoria (Unità di carico obbligatoria)** activo, así como la prioridad y la cantidad.  
El procedimiento de recepción de mercancías deberá considerar la línea eligiendo aquella con prioridad más alta entre las de ese cliente proveedor (si se indica, de lo contrario elegir entre las que no tienen), pero con el indicador de Unidad de carga obligatoria activo.

Así, después de ingresar todos los datos relacionados con el artículo como se describió anteriormente para el caso sin UDC, cuando se presiona el botón **conferma**, el procedimiento abrirá un nuevo formulario dedicado a la creación de unidades de carga; donde se precargarán los datos del artículo, tales como: *clase*, *código* y *descripción del artículo*, con su posible *variante* y *lote*.  

La **cantidad residual** será inicialmente igual al valor indicado en el formulario principal en el campo cantidad; esta se actualizará dinámicamente con cada inserción de una nueva línea en la tabla.  
La tabla inicialmente está vacía, mientras que ya se han ingresado los siguientes valores: 
> **numero**: indica el número de unidad de carga de ese tipo;  
> **Tipo UDC (Tipo UDC)**: indica el tipo de unidad de carga;  
> **Número de la unidad de carga (Numero dell’unità di carico)**: indica el número único de la unidad de carga;  
> **quantità**: indica la cantidad contenida en esa unidad de carga.

El foco del cursor está posicionado en el campo de referencia del proveedor, para permitir al operador ingresar el valor de manera simple y rápida.  
Una vez ingresado este valor (no obligatorio), será suficiente presionar el botón **avanti** para insertar la línea dentro de la tabla y actualizar el valor de la cantidad residual.  
Después de cada clic en el botón **avanti**, el foco se reposiciona siempre en el campo de referencia del proveedor.  
Al seleccionar una de las líneas de la tabla y presionar el botón eliminar, esta se elimina, actualizando la cantidad residual.  
El operador también puede modificar una línea ya ingresada. Al seleccionar la línea en la tabla, se mostrarán todos los datos en los campos inferiores donde el usuario puede modificarlos y mediante el botón Siguiente (Avanti) aplicarlos a la línea de la tabla.  
Una vez finalizada la inserción y la confirmación de todas las líneas, con el botón **chiudi** se regresará al formulario principal, desde el cual presionando el botón **chiudi** se crearán los movimientos de almacén correspondientes al DDT recién cargado y a la creación de las unidades de carga vinculadas.

**Parámetros de carga/descarga** a ingresar en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | ReceivingGoodsCreateDocument |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | LoadingUnitCreationFromPurchaseDeliveryNoteItem |

Específicamente se utilizan de la siguiente manera:

> ReceivingGoodsCreateDocument: después de seleccionar **ricevimento merci** y presionar el botón **Creación DDT de compra**, el almacén y la causa indicados en este parámetro se utilizan en las líneas de los artículos del DDT recién creado.  
> LoadingUnitCreationFromPurchaseDeliveryNoteItem: después de seleccionar **ricevimento merci** y presionar el botón **Creación DDT de compra**, el almacén y la causa indicados en este parámetro se utilizan en la creación y carga de las unidades de carga recién creadas. Este parámetro es necesario solo en caso de que se utilicen unidades de carga.

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de código de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).