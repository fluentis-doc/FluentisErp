---
title: Recepción de mercancía
sidebar_position: 1
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
El módulo de recepción de mercancía es una herramienta esencial para la gestión eficaz de los flujos de almacén<!-- magazzino -->. Esta función permite la identificación oportuna de los materiales entrantes, garantizando una carga precisa y organizada de la mercancía. El proceso comienza con la selección de los pedidos a proveedores no atendidos o parcialmente atendidos, facilitada por filtros detallados que permiten visualizar los artículos pendientes de recepción.

Una vez seleccionados los pedidos, el operador puede generar el Documento de Transporte (DDT) de compra, ingresando los detalles relativos a los artículos a cargar. El sistema también soporta la creación de unidades de carga (UDC) en caso de que estas sean gestionadas, mejorando aún más la organización y la trazabilidad de la mercancía recibida. A través del registro de datos relativos a lotes, cantidades y otra información pertinente, el módulo garantiza un control completo sobre los movimientos de almacén<!-- movimentazioni di magazzino -->.
:::

Este procedimiento se utiliza en la fase de recepción de la mercancía, para la identificación de artículos, la creación y el registro del DDT de compra.

El formulario se abre en el filtro de pedidos a proveedores, donde es posible visualizar todos los pedidos en estado *No atendido* y *Parcialmente atendido*. 
Los resultados se pueden filtrar por *Número*, *Tipo de pedido*, *Año*, *Artículo* y *Proveedor*.
Tras seleccionar uno o más pedidos a proveedor, es posible visualizar los artículos no atendidos y parcialmente atendidos utilizando el botón *Visualizar*, mientras que con el botón *Creación DDT compra* se puede comenzar a ingresar los artículos que estarán presentes en el DDT.

El formulario principal se compone de las siguientes pestañas:

- **Creación DDT compra**
Tras seleccionar el pedido a proveedor, mediante el botón *Creación DDT compra* es posible abrir el formulario en la pestaña *Creación DDT compra*, donde el foco se posicionará directamente en el campo **DDT** para poder ingresar en primer lugar el número del documento.      
Como [Tipo de DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type) a utilizar, se propone el indicado en el [Tipo de pedido a proveedor](/docs/configurations/tables/purchase/purchase-orders-type/) utilizado. Si no está indicado se sugiere el primer [Tipo de DDT](/docs/configurations/tables/purchase/purchase-delivery-notes-type) presente en la tabla y el usuario podrá modificarlo manualmente.        
Además, se mostrarán las informaciones relativas al primer artículo presente en el pedido, junto con las informaciones de cabecera del propio pedido.

> **Almacén<!-- Magazzino -->**: indica el almacén<!-- magazzino --> en el que se realizarán los movimientos;          
> **Causal de almacén<!-- Causale magazzino -->**: indica la causa de almacén<!-- causale di magazzino --> con la que se realizarán los movimientos;     
> **Tipo DDT**: indica el tipo de DDT con el que se creará el documento de transporte;                
> **Fecha**: indica la fecha del DDT que se está creando; por defecto se sugiere la fecha actual;     
> **Pedido**: indica el número del pedido a proveedor;           
> **Artículo**: indica la clase, código y descripción del artículo que se va a confirmar;           
> **Nº Línea<!-- N. Riga -->**: indica el número de línea del artículo en el pedido del proveedor;          
> **Código de barras<!-- Barcode -->**: permite leer los códigos de barras mediante lector para realizar varias operaciones;      
> **Lote del proveedor<!-- Lotto Fornitore -->**: permite registrar el número de lote del proveedor;     
> **LT**: permite generar el número de lote interno;           
> **Fecha de vencimiento<!-- Data scadenza -->**: indica la fecha de vencimiento del lote;          
> **Cantidad pedida<!-- Quantità ordinata -->**: indica la cantidad pedida;    
> **Cantidad restante<!-- Quantità residua -->**: indica la cantidad restante;       
> **Cantidad<!-- Quantità -->**: indica la cantidad que se desea cargar en almacén<!-- magazzino -->;    
> **Ubicación sugerida<!-- Ubicazione proposta -->**: indica la ubicación sugerida;              
> **Ubicación<!-- Ubicazione -->**: permite ingresar una ubicación distinta a la sugerida.

Durante la creación del DDT, el almacén<!-- magazzino --> y la causal<!-- causale --> se propondrán de la siguiente manera:
- Si el almacén reportado en el pedido de compra es uno de los almacenes presentes en los [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) para ese usuario, el procedimiento lo propone.          
- Si el almacén reportado en el pedido de compra no es uno de los almacenes presentes en los [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) para ese usuario, el procedimiento deja vacíos tanto el campo del almacén como el de la causal de almacén. En este caso, el usuario debe ingresarlos manualmente para poder continuar, y cuando intenta ingresarlos, el procedimiento muestra un mensaje de confirmación antes de continuar: si hace clic en SÍ, puede ingresar uno de los almacenes presentes en los [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) para ese usuario; de lo contrario, si selecciona NO, los campos almacén y tipo de almacén permanecen vacíos.      
- Si en el pedido de compra no se especifica el almacén y en los [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) para ese usuario hay un solo almacén, el procedimiento propondrá automáticamente ese almacén y la causal correspondiente; mientras que, si en los [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) hay más de un almacén para ese usuario, el procedimiento deja vacíos tanto el campo almacén como el campo de causal, permitiendo al usuario elegir entre los presentes en los parámetros sin mostrar ningún mensaje.

Mediante el campo **Input code** (utilizando un lector de código de barras) es posible ingresar los datos relativos al lote, ubicación, cantidad detectada y artículo en caso de que se desee cargar uno distinto al sugerido, pero de todas formas presente en los pedidos previamente seleccionados.       
Después de ingresar los datos relativos al artículo actual, es posible confirmarlos utilizando el botón **Confirmar<!-- Conferma -->**.     
Una vez confirmadas todas las líneas del pedido se pasa automáticamente a la pestaña **Detalle DDT**, donde, utilizando el botón **Cerrar<!-- Chiudi -->**, es posible guardar el DDT y realizar el correspondiente movimiento de almacén<!-- movimento di magazzino -->.

**Botones específicos**
> **Confirmar<!-- Conferma -->**: permite confirmar los datos ingresados para el artículo seleccionado;           
> **Conf+Imp<!-- Conf+Stp -->**: permite confirmar los datos ingresados para el artículo y, además, abre una ventana emergente que permite imprimir las etiquetas;       
> **Imprimir<!-- Stampa -->**: permite imprimir las etiquetas;       
> **Cerrar<!-- Chiudi -->**: permite guardar el DDT creado y crear los movimientos de almacén<!-- movimenti di magazzino --> correspondientes;        
> **Siguiente objeto<!-- Prossimo oggetto -->**: permite pasar al siguiente artículo presente en el pedido del proveedor;       
> **Objeto anterior<!-- Precedente oggetto -->**: permite pasar al artículo anterior presente en el pedido del proveedor.

- **Detalles DDT**       
En este formulario se muestran todas las informaciones relativas a las líneas creadas.

**Botones específicos**
> **Borrar artículos<!-- Cancella articoli -->**: permite borrar la línea seleccionada del DDT.   

- **Detalles del pedido**: 
En este formulario se muestran todas las informaciones relativas al pedido a proveedor considerado.

## **Recepción de mercancía con unidad de carga<!-- Ricevimento merci con unità di carico -->**

En caso de que el artículo se gestione con unidad de carga<!-- unità di carico -->, en la pestaña [empaquetado<!-- confezionamento -->](/docs/erp-home/registers/items/create-new-item) de la ficha del artículo debe haber al menos una línea con la casilla **Unidad de carga obligatoria<!-- Unità di carico obbligatoria -->** activa, la prioridad y la cantidad.     
El procedimiento de recepción deberá considerar la línea eligiendo aquella con mayor prioridad del cliente proveedor correspondiente (si está indicado, de lo contrario elegir entre las que no la tienen), pero en todo caso con la casilla Unidad de carga obligatoria activa.     

Así, tras ingresar todos los datos relativos al artículo como se describió anteriormente para el caso sin UDC<!-- UDC -->, cuando se pulsa el botón **Confirmar<!-- Conferma -->**, el sistema abrirá un nuevo formulario dedicado a la creación de unidades de carga<!-- unità di carico -->, donde se precargarán los datos del artículo, como: *clase*, *código* y *descripción del artículo*, con la posible *variante* y *lote*.     

La **cantidad restante<!-- quantità residua -->**, inicialmente, será igual al valor indicado en el formulario principal en el campo cantidad; este luego se actualizará dinámicamente en cada registro de una nueva línea en la tabla.    
La tabla inicialmente está vacía, mientras que ya están insertados los siguientes valores: 
> **Número**: indica el número de unidades de carga de ese tipo;         
> **Tipo UDC**: indica el tipo de unidad de carga;       
> **Número de la unidad de carga**: indica el número único de la unidad de carga;         
> **Cantidad**: indica la cantidad contenida en esa unidad de carga<!-- unità di carico -->.

El foco del cursor, por otro lado, se posiciona en el campo referencia del proveedor, para que el operador pueda ingresarlo fácil y rápidamente.       
Una vez ingresado este valor (no obligatorio), bastará con pulsar el botón **Siguiente<!-- Avanti -->** para insertar la línea en la tabla y actualizar el valor de la cantidad restante.      
Tras cada pulsación del botón **Siguiente<!-- Avanti -->**, el foco se posiciona siempre en el campo referencia del proveedor.     
Seleccionando una de las filas de la tabla y pulsando el botón borrar, esta se elimina actualizando la cantidad restante.      
El operador también puede modificar una fila ya ingresada. Seleccionando la fila en la tabla, se muestran todos los datos en los campos inferiores donde el usuario puede modificarlos y, usando el botón Siguiente, aplicarlos a la línea de la tabla.        
Cuando finaliza el ingreso y la confirmación de todas las líneas, con el botón **cerrar<!-- chiudi -->** se regresa al formulario principal, desde donde al pulsar el botón **cerrar<!-- chiudi -->** se crearán los movimientos de almacén<!-- movimenti di magazzino --> relativos al DDT recién cargado y a la creación de las unidades de carga<!-- unità di carico --> vinculadas.

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** a insertar en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | ReceivingGoodsCreateDocument |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | LoadingUnitCreationFromPurchaseDeliveryNoteItem |

En específico se utilizan de la siguiente manera:

> ReceivingGoodsCreateDocument: después de seleccionar **Recepción de mercancía<!-- Ricevimento merci -->** y pulsar el botón **Creación DDT compra**, el almacén<!-- magazzino --> y la causal<!-- causale --> indicados en este parámetro se usan en las líneas de los artículos del DDT recién creado.
> LoadingUnitCreationFromPurchaseDeliveryNoteItem: después de seleccionar **Recepción de mercancía** y pulsar el botón **Creación DDT compra**, el almacén y la causal indicados en este parámetro se usan en la creación y carga de las unidades de carga<!-- unità di carico --> recién creadas. Este parámetro es necesario sólo si se emplean las unidades de carga<!-- unità di carico -->.

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barras<!-- Codice barcode -->**, consulte la página relativa al [tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).

## **Recepción de mercancía con creación de etiquetas<!-- Ricevimento merci con creazione etichette -->**

En caso de que sea necesario crear las etiquetas para los artículos que se van a cargar, después de ingresar todos los datos relativos al artículo como se indicó anteriormente, el operador debe pulsar el botón **Confirmar + Imprimir<!-- Conferma + Stampa -->** y el sistema abrirá un nuevo formulario dedicado a la creación de etiquetas.       
En este formulario, el foco ya está puesto en la cantidad que se ingresará en cada etiqueta de modo que el usuario pueda modificarla inmediatamente.      
Además, también puede decidir el número de etiquetas con una cierta cantidad.     
Una vez ingresados correctamente los datos, el operador deberá pulsar el botón siguiente<!-- avanti --> para insertar la fila con las etiquetas en la cuadrícula central y, al mismo tiempo, se actualizará la **cantidad restante<!-- Quantità residua -->** (inicialmente igual al valor indicado en el formulario principal en el campo cantidad). En caso de errores, se puede seleccionar una línea y eliminarla con el botón **Borrar<!-- Cancella -->**.        
Una vez finalizadas todas las etiquetas, será posible imprimirlas con el botón correspondiente y, luego, mediante el botón cerrar<!-- chiudi --> se regresa al formulario principal de creación del DDT, desde donde el operador podrá continuar con nuevas líneas.      
También en este caso, el operador puede recuperar la línea confirmada anteriormente y reabrirla con el botón confirmar más imprimir para modificar sus etiquetas.      
Terminado el proceso, con el botón cerrar<!-- chiudi --> se creará el DDT de compra con los movimientos de almacén<!-- movimenti di magazzino --> correspondientes.     

En este caso, los **parámetros de carga/descarga<!-- Parametri carico/scarico -->** son los mismos que en los casos anteriores.

## **Recepción de mercancía con unidades de medida alternativas<!-- Ricevimento merci con unità di misura alternative -->**

La gestión de la unidad de medida alternativa se habilita si la casilla **Default WMS** presente en la [pestaña UM alternativas de la ficha de artículo<!-- tab UM alternative dell’anagrafica dell’articolo -->](/docs/erp-home/registers/items/create-new-item) está activa.        
En tal caso, en el formulario de recepción también se muestran los campos de unidad de medida y cantidad alternativas, donde el factor de conversión (CF) utilizado se calcula dividiendo la cantidad de gestión (UM Gest) presente en el pedido a proveedor entre la cantidad alternativa (UM Alt) (si coincide con la que tiene la casilla default WMS) siempre presente en el pedido a proveedor: **CF = UM Gest / UM Alt**          
Por lo tanto, en el formulario, cuando se modifica la cantidad alternativa, la cantidad de gestión se calcula multiplicando la cantidad alternativa por el factor de conversión calculado antes; mientras que, si se modifica la cantidad de gestión, la cantidad alternativa se calcula dividiendo la cantidad de gestión entre el factor de conversión.

En este caso, los **parámetros de carga/descarga<!-- Parametri carico/scarico -->** son los mismos que en los casos anteriores.