---
title: Gestión de Confirmación y Marcar Picking (Gestione spunta e Conferma picking)
sidebar_position: 2
---

## Gestión de marcar (Gestione spunta)

:::important ¿Para qué sirve? (A cosa serve)
La gestión de marcar del WMS de Fluentis es una herramienta diseñada para confirmar las líneas de picking efectivamente recogidas por el operador en el almacén. Si al menos una línea está marcada, los procedimientos de creación del Documento de Transporte (DDT) y de la factura consideran solo estas líneas; de lo contrario, se consideran todas las líneas del picking. Este sistema simplifica y acelera la creación de los documentos de transporte y facturación, permitiendo también la entrada manual de nuevas líneas de artículos. Además, la gestión de marcar permite crear las Unidades de Carga (UDC) durante la confirmación de las líneas de picking, agrupando los artículos en unidades de carga. Una vez seleccionada una línea e ingresados los datos necesarios, es posible crear y gestionar nuevas UDC con los artículos confirmados.
:::

A partir de un picking existente, se tiene la posibilidad de leer los artículos presentes y agruparlos en UDC.    
Desde WPF es posible proceder a la creación del DDT o de la factura.

:::note Nota
En el formulario de **Gestión de marcar** solo se visualizarán los pickings creados con un *tipo de picking* que tenga habilitado el indicador *Unidad de carga obligatoria* en la tabla [Tipos de picking](/docs/configurations/tables/logistics/picking-type/).
:::

El formulario se abre con el filtro de pickings, donde se pueden visualizar todos los pickings en estado *No evadido* o *Parcialmente evadido* y con un *tipo de picking* que tenga activado el indicador *Unidad de carga obligatoria*.    
Los resultados pueden ser filtrados por *Tipo de picking*, *Número*, *Fecha* y *Cliente*.    
A través del botón *Abrir* se puede abrir el picking seleccionado.

El formulario principal se compone de las siguientes pestañas:

- **articoli**
En esta pestaña se visualizan todas las líneas de artículos presentes en el picking.

**Botones específicos**
> **dettaglio**: permite moverse a la pestaña **articoli spuntati**;        
> **conferma**: después de seleccionar una línea en la pestaña **articoli**, abre la pestaña **conferma** proponiendo el artículo seleccionado.

- **conferma**
A través del campo **input code** (utilizando un lector de código de barras) es posible ingresar los datos relativos al lote, a la ubicación, a la cantidad de recogida y al artículo si se desea variar respecto a lo propuesto.  
El usuario también puede variar el artículo moviéndose a la pestaña **articoli**, donde se visualizan todas las líneas de artículos presentes en el picking, seleccionando el de interés y presionando el botón **conferma** o regresando nuevamente a la pestaña **conferma** para poder ingresar los datos relativos al artículo recién seleccionado.  
En caso de que el usuario confirme la línea de un artículo gestionado por lotes y para el cual no se haya ingresado el lote, se mostrará un mensaje recordando ingresar el lote. También está presente en la pestaña el campo *Unidad de carga* que debe ser valorado para poder proceder a la confirmación de los datos. 

**Botones específicos**
> **dettaglio spunta**: permite moverse a la pestaña **articoli spuntati**;        
> **conferma**: permite confirmar los datos ingresados y posteriormente cargar los datos relativos a la siguiente línea;          
> **Nueva UDC**: permite crear una nueva *Unidad de carga* después de haber seleccionado el tipo.         

Por debajo de la cantidad de recogida, hay una cuadrícula de solo lectura con las siguientes columnas: *Cantidad*, *Ubicación* y *Lote*. Esta se actualiza dinámicamente; por ejemplo, si se indica solo el artículo, debe mostrar todas las ubicaciones con saldo > 0 donde está ese artículo; si se indica también el lote, debe mostrar todas las ubicaciones con saldo > 0 donde está ese artículo con ese lote.

- **UDC**
Permite visualizar la composición de las *Unidades de carga* creadas para el picking actual.          

**Botones específicos**
> **apri udc**: permite visualizar el detalle de la *Unidad de carga* seleccionada. Además, la última *Unidad de carga* abierta se propondrá como *Unidad de carga* para ingresar los próximos artículos a confirmar.            

- **articoli spuntati**
La pestaña **articoli spuntati** se llena solo después de haber seleccionado un artículo en la pestaña **articoli** del Picking.  
Entonces, de la lista de artículos del Picking, se selecciona un artículo y en la pestaña **articoli spuntati** aparecen todas las lecturas hechas del artículo seleccionado.  
Cuando una línea de *Picking* se completa, pasa al final de la pestaña **articoli** y se resalta en rojo. Al seleccionar esa línea y presionar el botón *dettaglio spunta* se abrirá la pestaña **articoli spuntati** donde se podrán ver las líneas confirmadas, las cuales también pueden ser eliminadas a través del correspondiente botón *cancella*.  
Desde esta pestaña es posible seleccionar un artículo marcado y eliminarlo.

**Botones específicos**
> **cancella**: permite eliminar la línea seleccionada.

:::note Nota
En caso de que sea necesario tener la opción de sobreevadir la cantidad indicada en el picking, es necesario habilitar el indicador **Sobreevadible (Sovraevadibile)** presente en la tabla [Tipos de picking](/docs/configurations/tables/logistics/picking-type/).
:::

**Parámetros de carga/descarga** que deben ser ingresados en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

Los parámetros se repiten ya que el formulario utiliza una causa de descarga (sin contrapartida) para descargar los artículos recogidos, y una de carga para cargarlos dentro de las unidades de carga recién creadas. Para la causa de carga, es importante indicar también una ubicación por defecto que se utilizará para cargar la unidad de carga recién creada.    
                                         
Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de códigos de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).


## Confirmación de Picking (Conferma Picking)

:::important ¿Para qué sirve? (A cosa serve)
A partir de un Picking existente, sin embargo, sin utilizar las unidades de carga, que en cambio se crean utilizando el formulario de [Gestión de marcar (Gestione spunta)](/docs/logistics/wms/sales/check-row-management), con el formulario de **conferma picking** es posible confirmar las líneas individuales del picking, para mover los artículos entre dos almacenes o ubicaciones, creando directamente los movimientos de almacén de traslado.  
Posteriormente, desde WPF, es posible proceder a la creación del DDT o de la factura.
:::

:::note Nota
En el formulario de **conferma picking** solo se visualizarán los pickings creados con un *tipo de picking* que tenga desactivado el indicador *Unidad de carga obligatoria* en la tabla [Tipos de picking](/docs/configurations/tables/logistics/picking-type/).
:::

El formulario se abre con el filtro de pickings, donde se pueden visualizar todos los pickings en estado *No evadido* o *Parcialmente evadido* y con un *tipo de picking* que tenga desactivado el indicador *Unidad de carga obligatoria*.    
Los resultados pueden ser filtrados por *Tipo de picking*, *Número*, *Fecha* y *Cliente*.    
A través del botón *Abrir* se puede abrir el picking seleccionado.

El formulario principal se compone de las siguientes pestañas:

- **articoli**
En esta pestaña se visualizan todas las líneas de artículos presentes en el picking.

**Botones específicos**
> **dettaglio**: permite moverse a la pestaña **articoli spuntati**;        
> **conferma**: después de seleccionar una línea en la pestaña **articoli**, abre la pestaña **conferma** proponiendo el artículo seleccionado.

- **conferma**
A través del campo **input code** (utilizando un lector de código de barras) es posible ingresar los datos relativos al lote, a la ubicación, a la cantidad de recogida y al artículo si se desea variar respecto a lo propuesto.  
En caso de que el usuario confirme la línea de un artículo gestionado por lotes y para el cual no se haya ingresado el lote, se mostrará un mensaje recordando ingresar el lote. 

**Botones específicos**
> **dettaglio**: permite moverse a la pestaña **articoli spuntati**;        
> **conferma**: permite confirmar los datos ingresados y posteriormente cargar los datos relativos a la siguiente línea;          

Por debajo de la cantidad de recogida, hay una cuadrícula de solo lectura con las siguientes columnas: *Cantidad*, *Ubicación* y *Lote*. Esta se actualiza dinámicamente; por ejemplo, si se indica solo el artículo, debe mostrar todas las ubicaciones con saldo > 0 donde está ese artículo; si se indica también el lote, debe mostrar todas las ubicaciones con saldo > 0 donde está ese artículo con ese lote.

- **articoli spuntati**        
La pestaña **articoli spuntati** se llena solo después de haber seleccionado un artículo en la pestaña **articoli** del Picking.  
Entonces, de la lista de artículos del Picking, se selecciona un artículo y en la pestaña **articoli spuntati** aparecen todas las lecturas hechas del artículo seleccionado.  
Cuando una línea de *Picking* se completa, pasa al final de la pestaña **articoli** y se resalta en rojo. Al seleccionar esa línea y presionar el botón *dettaglio* se abrirá la pestaña **articoli spuntati** donde se podrán ver las líneas confirmadas, las cuales también pueden ser eliminadas a través del correspondiente botón *cancella*.  
Desde esta pestaña es posible seleccionar un artículo marcado y eliminarlo.

**Botones específicos**
> **cancella**: permite eliminar la línea seleccionada.

:::note Nota
En caso de que sea necesario tener la opción de sobreevadir la cantidad indicada en el picking, es necesario habilitar el indicador **Sobreevadible (Sovraevadibile)** presente en la tabla [Tipos de picking](/docs/configurations/tables/logistics/picking-type/).
:::

**Parámetros de carga/descarga** que deben ser ingresados en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

:::note Nota
Es importante recordar que la causa utilizada debe ser una causa de descarga con una causa de carga en contrapartida.
:::

Para cada Picking se creará un único registro de descarga con, en contrapartida, un único registro de carga que contiene los movimientos de todos los artículos marcados. 

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de códigos de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).