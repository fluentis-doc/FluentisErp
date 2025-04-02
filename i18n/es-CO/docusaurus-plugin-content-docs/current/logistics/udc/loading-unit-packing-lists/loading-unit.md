---
title: Listas de preparación/Packing list (versione WPF e WMS) (Liste di prelievo/Packing list (versione WPF e WMS))
sidebar_position: 1
---

### Listas de preparación/Packing list (versión WPF) (Liste di prelievo/Packing list (versione WPF))

:::important Para qué sirve (A cosa serve)
La Lista de Preparación UDC / Packing List de Fluentis ofrece un método innovador para gestionar la preparación de unidades de carga, en contraposición al tradicional procedimiento de picking que se basa en artículos individuales. Esta funcionalidad es particularmente útil cuando se desea enviar mercancía a un cliente, permitiendo agrupar artículos dentro de unidades de carga predefinidas.

La creación de una nueva lista de preparación requiere simplemente la entrada de información como el tipo de picking, el almacén y el usuario. Los operadores pueden entonces seleccionar las unidades de carga ya creadas y cargadas en el almacén directamente en la pestaña "Detalle de unidad de carga", facilitando así la asociación de los artículos a enviar con la correspondiente orden de cliente. Gracias al botón "Help UDC", los usuarios pueden navegar fácilmente entre las unidades de carga disponibles, haciendo que el proceso de selección sea rápido y eficiente.

Las listas de preparación UDC no solo simplifican la preparación de envíos, sino que también permiten generar directamente documentos de transporte como DDT y facturas, conteniendo toda la información necesaria sobre los artículos y las unidades de carga involucradas en el envío. Esta integración garantiza una gestión más fluida y efectiva en el proceso de logística y envíos.
:::

Con las **listas de preparación (liste di prelievo)** es posible crear un picking de unidades de carga, a diferencia del picking normal que se compone de artículos individuales.    
Desde la máscara de **ricerca** se pueden buscar las listas previamente ingresadas.  
Para crear una nueva lista, haga clic en **nuovo**.  

Los datos obligatorios a ingresar son:  
**tipo picking**: ingresar el tipo de [picking](/docs/logistics/picking/picking-management) a utilizar;  
**utente**: ingresar el empleado codificado que crea el documento;  
**utente per conf.**: ingresar el empleado que tiene derecho a confirmar la lista.  

Después de haber ingresado los datos necesarios, es posible guardar la Lista de preparación.  
Con el botón de la barra de ribbon **help UDC** es posible abrir la máscara en la que se seleccionan las UDC a preparar.  
La búsqueda puede hacerse sobre las unidades de carga vinculadas a órdenes de cliente (activando el indicador **ricerca su ordini clienti**), así que, para cada orden de cliente se pueden visualizar los artículos que lo componen y si estos han sido previamente ingresados dentro de una unidad de carga; en la tabla inferior podemos ver todos los detalles relacionados con la UDC que los contiene. Una vez que se seleccionan las UDC de interés, estas se añaden a la lista.  
Alternativamente, desactivando el indicador **Búsqueda en órdenes de clientes**, las unidades de carga también pueden buscarse entre todas las creadas, incluso si no están vinculadas a una orden de cliente, y de la misma manera pueden ser seleccionadas y añadidas a nuestra lista de preparación.  
En la cuadrícula de *dettaglio* aparecerán solamente las UDC en estado cargado; después de eso, es posible guardar la *Lista* y cerrarla.  
Regresando a la máscara de *Búsqueda de Listas de Preparación*, la Lista estará presente con estado **sospeso**. Es necesario descargar las UDC de la Lista (ver *Botones específicos* abajo) para pasar al estado **controllato**. Solo con este último estado se habilitarán los botones de la barra de ribbon **fattura** y **DDT**.

*Botones específicos:*  
> **fatture**: crea la factura a partir de la *Lista* seleccionada; en la máscara de salida se solicita el [Tipo de Factura (Tipo Fattura)](/docs/configurations/tables/sales/invoices-type) a crear y el eventual agrupamiento a adoptar; la factura se crea ya *Descargada* (para evitar el riesgo de doble descarga).  
> **DDT**: crea el DDT a partir de la *Lista* seleccionada; en la máscara de salida se solicita el [Tipo de DDT (Tipo DDT)](/docs/configurations/tables/sales/delivery-notes-type) a crear y el eventual agrupamiento a adoptar; el DDT se crea ya *Descargado* (para evitar el riesgo de doble descarga).  
> **gestione udc**: seleccionando una *Lista de preparación* y haciendo clic en este botón se abre la máscara **Gestión UDC** en la que se prefiltran las UDC de la lista. En esta máscara, las UDC pueden ser gestionadas a nivel de almacén con los varios botones de la barra de ribbon.  

Para toda la información sobre cómo utilizar este formulario en WMS, consulte las [Listas de preparación/Packing list (Liste di prelievo/Packing list)](/docs/logistics/wms/udc/loading-unit-picking-list).

### Listas de preparación/Packing list (versión WMS) (Liste di prelievo/Packing list (versione WMS))

:::important Para qué sirve (A cosa serve)
La función Listas de Preparación / Packing List del WMS de Fluentis permite crear un picking de unidades de carga, facilitando la preparación de los envíos directamente vinculados a las órdenes de cliente.  
Gracias a esta herramienta, los usuarios pueden seleccionar, modificar y gestionar eficientemente las UDC, optimizando el proceso de picking y asegurando una documentación correcta para los envíos.
:::

Este procedimiento es utilizado para la creación de listas de preparación con unidades de carga.  

Con las **Listas de preparación UDC / Packing list (Liste di prelievo UDC / Packing list)** es posible crear un *picking* de unidades de carga, a diferencia del procedimiento normal de picking que crea una lista de preparación formada por artículos individuales.  
Las listas de preparación UDC se utilizan cuando se desea enviar mercancía a un cliente, mientras que en el caso de movimientos de UDC dentro de los propios almacenes es recomendable utilizar las [Listas de Transferencia UDC (Liste di Trasferimento UDC)](/docs/logistics/wms/udc/loading-unit-transfer-list).  

En el formulario de filtro es posible buscar las listas de interés filtrando: por fecha de ingreso, fecha de envío y también por el estado de la lista de preparación; una vez seleccionada, es posible abrir la lista con el botón **apri**, dentro de la cual, el usuario tiene la posibilidad de modificar las unidades de carga contenidas en la pestaña *dettaglio udc*.  
En esta pestaña es posible: seleccionar una unidad de carga existente y eliminarla de la lista con el botón **cancella udc**; o bien, agregar una nueva simplemente leyendo el código de barras correspondiente.  
Una vez finalizadas las modificaciones es necesario guardar la lista mediante el botón **salva**.  

Desde el filtro también es posible crear una nueva lista con el botón **nuovo**.  
Se proponen automáticamente: la fecha actual y el almacén indicado en la tabla Parámetros de carga/descarga por usuario; además, al ingresar el tipo de picking, también se propone el número de la lista.  
A este punto, el usuario puede ingresar, en la pestaña *dettaglio udc*, las unidades de carga a añadir a la lista mediante la lectura de los códigos de barras correspondientes. Una vez completada la entrada, será suficiente guardar la lista con el botón apropiado.

**parametri carico/scarico** que se deben ingresar en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | PickingList |

Para este parámetro, la causal de almacén puede dejarse vacía.

:::note Nota
Si en los [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) está asociado para ese usuario un solo almacén, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre uno de los ingresados.
:::

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode** consulte la página relacionada con el [Tokenizador de código de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Confirmación de Transferencia UDC (versión WMS) (Conferma trasferimento UDC (versione WMS))

:::important Para qué sirve (A cosa serve)
Este procedimiento se utiliza para buscar y confirmar una [Lista de Transferencia UDC (Lista di Trasferimento UDC)](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) existente para realizar el movimiento de almacén.
:::

El formulario **conferma trasferimento udc** se utiliza para confirmar una [Lista de Transferencia UDC (Lista di Trasferimento UDC)](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) existente para realizar el movimiento de almacén.

En el filtro es posible buscar la lista de interés por: fecha, número y almacén, además, también es posible confirmarla directamente con el botón **conferma** sin tener que abrirla.  
De lo contrario, es posible entrar en la lista a través del botón **apri** y visualizar las unidades de carga no descargadas y las ya descargadas dentro de sus respectivas pestañas: unidades de carga no transferidas y transferidas, para luego poder confirmarla y crear el movimiento de almacén.

**parametri carico/scarico** que se deben ingresar en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |

Los parámetros se ingresan dos veces ya que el formulario utiliza: tanto una causal de carga con como almacén aquel de destino de la lista, como una de descarga con como almacén aquel en el que están almacenadas las unidades de carga a transferir.  
Ambas causales utilizadas deben tener el indicador *distinta base* desactivado y estar sin contrapartida.  

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode** consulte la página relacionada con el [Tokenizador de código de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Confirmación de Preparación UDC (versión WMS) (Conferma prelievo UDC (versione WMS))

:::important Para qué sirve (A cosa serve)
El formulario **conferma prelievo udc** se utiliza para buscar y confirmar una [Lista de preparación UDC / Packing list (Lista di prelievo UDC / Packing list)](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) existente para realizar el movimiento de almacén de descarga.
:::

En el filtro es posible buscar la lista de interés por: fecha, número y almacén, además, también es posible confirmarla directamente con el botón **conferma** sin tener que abrirla.  
De lo contrario, es posible entrar en la lista a través del botón **apri** y visualizar las unidades de carga no descargadas y las ya descargadas dentro de sus respectivas pestañas: unidades de carga no descargadas y descargadas, para luego poder confirmarla y crear el movimiento de almacén.
   
**parametri carico/scarico** que se deben ingresar en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmUnloadPickingList |

Este parámetro debe ser creado con el almacén de la *lista de preparación* y con causal de almacén de tipo de descarga y sin contrapartida.

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode** consulte la página relacionada con el [Tokenizador de código de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).