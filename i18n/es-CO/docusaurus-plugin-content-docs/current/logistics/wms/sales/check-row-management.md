---
title: Gestión de marcación y Confirmación de picking
sidebar_position: 2
ai_generated: true
---

## Gestión de marcación<!-- Gestione spunta -->

:::important Para qué sirve<!-- A cosa serve -->
La gestión de marcación<!-- spunta --> del WMS de Fluentis es una herramienta diseñada para confirmar las líneas del picking que realmente han sido tomadas por el operador en el almacén<!-- magazzino -->. Si al menos una línea es marcada, los procedimientos de creación del Documento de Transporte (DDT) y de la factura consideran solo esas líneas; de lo contrario, se consideran todas las líneas del picking. Este sistema simplifica y agiliza la creación de documentos de transporte y facturación, permitiendo también la inserción manual de nuevas líneas de artículos. Además, la gestión de marcación<!-- spunta --> permite crear las Unidades de Carga (UDC) durante la confirmación de las líneas del picking, agrupando los artículos en unidades de carga. Una vez seleccionada una línea e ingresados los datos necesarios, es posible crear y gestionar nuevas UDC con los artículos confirmados.
:::

A partir de un picking existente, es posible leer los artículos presentes y agruparlos en UDC.    
Desde wpf es posible proceder a la creación del DDT o de la factura.

:::note Nota<!-- Nota -->
En el formulario de **Gestión de marcación<!-- Gestione spunta -->** solo se mostrarán los picking creados con un *tipo picking* que tenga habilitado el flag *Unidad de carga obligatoria* en la tabla [Tipos picking](/docs/configurations/tables/logistics/picking-type/).
:::

El formulario se abre en el filtro de picking, donde es posible visualizar todos los picking en estado *No completado* o *Parcialmente completado* y con un *tipo picking* cuyo flag *Unidad de carga obligatoria* está activo.     
Se pueden filtrar los resultados por *Tipo picking*, *Número*, *Fecha* y *Cliente*.    
Mediante el botón *Abrir* es posible abrir el picking seleccionado.

El formulario principal se compone de las siguientes pestañas:

- **Artículos**
En esta pestaña se visualizan todas las líneas de artículos presentes en el picking.

**Botones específicos**
> **Detalle**: permite ubicarse en la pestaña **Artículos marcados**;        
> **Confirmar**: después de seleccionar una línea en la pestaña **Artículos**, abre la pestaña **Confirmar** proponiendo el artículo seleccionado.

- **Confirmar**
Mediante el campo **Input code** (por lo tanto, utilizando un lector de código de barras) es posible ingresar los datos relativos al lote, ubicación, cantidad de picking y el artículo si se desea variar respecto al propuesto.
El usuario también puede variar el artículo desplazándose a la pestaña **Artículos**, donde se muestran todas las líneas de artículos presentes en el picking, seleccionando la de interés y presionando el botón **Confirmar** o regresando a la pestaña **Confirmar** para ingresar los datos relativos al artículo recién seleccionado.      
En caso de que el usuario confirme la línea, de un artículo gestionado por lotes y para el cual no se ha ingresado el lote, se mostrará un mensaje recordando ingresar el lote. También está presente en la pestaña el campo *Unidad de carga* que debe ser completado para poder confirmar los datos. 

**Botones específicos**
> **Detalle marcación<!-- Dettaglio spunta -->**: permite ubicarse en la pestaña **Artículos marcados**;        
> **Confirmar**: permite confirmar los datos ingresados y luego cargar los datos relativos a la siguiente línea;          
> **Nueva UDC**: permite crear una nueva *Unidad de carga* luego de seleccionar el tipo.         

Debajo de la cantidad de picking, hay una cuadrícula de solo lectura con las siguientes columnas: *Cantidad*, *Ubicación* y *Lote*. Esta se actualiza dinámicamente, por ejemplo si solo se indica el artículo debe mostrar todas las ubicaciones con stock > 0 donde está ese artículo, si además se indica el lote, debe mostrar todas las ubicaciones con stock > 0 donde está ese artículo con ese lote.

- **UDC**
Permite visualizar la composición de las *Unidades de carga* creadas para el picking actual.          

**Botones específicos**
> **Abrir UDC**: permite visualizar el detalle de la *Unidad de carga* seleccionada. Además, la última *Unidad de carga* abierta será propuesta como *Unidad de carga* en la que insertar los próximos artículos a confirmar.            

- **Artículos marcados<!-- Articoli spuntati -->**
La pestaña **Artículos marcados<!-- Articoli Spuntati -->** solo se llena después de seleccionar un artículo en la pestaña **Artículos** del Picking.
Por lo tanto, desde la lista de artículos del Picking, se selecciona un artículo y en la pestaña **Artículos marcados<!-- Articoli Spuntati -->** aparecen todas las lecturas realizadas del artículo seleccionado.
Cuando una línea de *Picking* se completa completamente pasa al final de la pestaña **Artículos** y se resalta en rojo. Seleccionando esa línea y presionando el botón *Detalle marcación<!-- Dettaglio spunta -->* se abrirá la pestaña **Artículos marcados<!-- Articoli spuntati -->** donde se podrán ver las líneas confirmadas, las cuales también pueden ser eliminadas mediante el botón *Eliminar*. 
Desde esta pestaña es posible seleccionar un artículo marcado y eliminarlo.

**Botones específicos**
> **Eliminar<!-- Cancella -->**: permite eliminar la línea seleccionada.

:::note Nota<!-- Nota -->
En caso de ser necesario poder superar la cantidad indicada en el picking, es necesario habilitar la bandera **Sobre cumplible<!-- Sovraevadibile -->** presente en la tabla [Tipos picking](/docs/configurations/tables/logistics/picking-type/).
:::

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** a insertar en la tabla [Parámetros de carga/descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

Los parámetros se repiten ya que el formulario utiliza una causale<!-- causale --> de descarga (sin contrapartida), para descargar los artículos retirados, y una de carga para cargarlos dentro de las unidades de carga recién creadas. Para la causale<!-- causale --> de carga es importante indicar también una ubicación<!-- ubicazione --> por defecto que se utilizará para cargar la unidad de carga recién creada.    
                                         
Para toda la información sobre cómo codificar los códigos de barras para ser leídos en el campo **Código de barras<!-- Codice barcode -->** consulte la página relacionada con el [Tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).

## Confirmación de Picking<!-- Conferma Picking -->

:::important Para qué sirve<!-- A cosa serve -->
A partir de un picking existente, pero sin el uso de unidades de carga, que en cambio se crean utilizando el formulario de [Gestión de marcación](/docs/logistics/wms/sales/check-row-management), con el formulario de **Confirmación de Picking<!-- Conferma Picking -->** es posible confirmar las líneas individuales del picking, para mover los artículos entre dos almacenes<!-- magazzini --> o ubicaciones<!-- ubicazioni -->, creando directamente los movimientos de almacén<!-- movimenti di magazzino --> de traslado.
Posteriormente, desde wpf, es posible proceder a la creación del DDT o de la factura.
:::

:::note Nota<!-- Nota -->
En el formulario de **Confirmación de Picking<!-- Conferma Picking -->** solo se mostrarán los picking creados con un *tipo picking* con la bandera *Unidad de carga obligatoria* desactivada en la tabla [Tipos picking](/docs/configurations/tables/logistics/picking-type/).
:::

El formulario se abre en el filtro de picking, donde es posible visualizar todos los picking en estado *No completado* o *Parcialmente completado* y con un *tipo picking* que tenga la bandera *Unidad de carga obligatoria* desactivada.     
Se pueden filtrar los resultados por *Tipo picking*, *Número*, *Fecha* y *Cliente*.    
Mediante el botón *Abrir* es posible abrir el picking seleccionado.

El formulario principal se compone de las siguientes pestañas:

- **Artículos**
En esta pestaña se visualizan todas las líneas de artículos presentes en el picking.

**Botones específicos**
> **Detalle**: permite ubicarse en la pestaña **Artículos marcados**;        
> **Confirmar**: después de seleccionar una línea en la pestaña **Artículos**, abre la pestaña **Confirmar** proponiendo el artículo seleccionado.

- **Confirmar**
Mediante el campo **Input code** (por lo tanto, utilizando un lector de código de barras) es posible ingresar los datos relativos al lote, a la ubicación, a la cantidad de picking y el artículo si se desea cambiar respecto al propuesto.
En caso de que el usuario confirme la línea, de un artículo gestionado por lotes y para el cual no se ha ingresado el lote, se mostrará un mensaje que recuerda ingresar el lote. 

**Botones específicos**
> **Detalle**: permite ubicarse en la pestaña **Artículos marcados**;        
> **Confirmar**: permite confirmar los datos ingresados y posteriormente cargar los datos relativos a la siguiente línea;          

Debajo de la cantidad de picking, hay una cuadrícula de solo lectura con las siguientes columnas: *Cantidad*, *Ubicación* y *Lote*. Esta se actualiza dinámicamente y, por ejemplo, si solo se indica el artículo debe mostrar todas las ubicaciones con stock > 0 donde está ese artículo, si además se indica el lote, debe mostrar todas las ubicaciones con stock > 0 donde está ese artículo con ese lote.

- **Artículos marcados<!-- Articoli spuntati -->**       
La pestaña **Artículos marcados<!-- Articoli Spuntati -->** solo se llena después de seleccionar un artículo en la pestaña **Artículos** del Picking.
Por lo tanto, desde la lista de artículos del Picking, se selecciona un artículo y en la pestaña **Artículos marcados<!-- Articoli Spuntati -->** aparecen todas las lecturas realizadas del artículo seleccionado.
Cuando una línea de *Picking* se completa completamente pasa al final de la pestaña **Artículos** y se resalta en rojo. Seleccionando esa línea y presionando el botón *Detalle* se abrirá la pestaña **Artículos marcados<!-- Articoli spuntati -->** donde se podrán ver las líneas confirmadas, las cuales también pueden ser eliminadas mediante el botón *Eliminar*. 
Desde esta pestaña es posible seleccionar un artículo marcado y eliminarlo.

**Botones específicos**
> **Eliminar<!-- Cancella -->**: permite eliminar la línea seleccionada.

:::note Nota<!-- Nota -->
En caso de ser necesario poder superar la cantidad indicada en el picking, es necesario habilitar la bandera **Sobre cumplible<!-- Sovraevadibile -->** presente en la tabla [Tipos picking](/docs/configurations/tables/logistics/picking-type/).
:::

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** a insertar en la tabla [Parámetros de carga/descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

:::note Nota<!-- Nota -->
Es importante recordar que la causale<!-- causale --> utilizada debe ser una causale<!-- causale --> de descarga con una causale<!-- causale --> de carga asociada como contrapartida.
:::

Para cada picking se creará un único registro de descarga con la contrapartida de un único registro de carga que contiene los movimientos<!-- movimenti --> de todos los artículos marcados<!-- spuntati -->. 

Para toda la información sobre cómo codificar los códigos de barras para ser leídos en el campo **Código de barras<!-- Codice barcode -->** consulte la página relacionada con el [Tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).