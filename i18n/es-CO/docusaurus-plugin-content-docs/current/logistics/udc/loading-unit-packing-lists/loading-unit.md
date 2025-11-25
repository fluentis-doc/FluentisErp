---
title: Listas de picking/Packing list (versión WPF y WMS)
sidebar_position: 1
ai_generated: true
---

### Listas de picking/Packing list (versión WPF)<!-- Liste di prelievo/Packing list (versione WPF) -->

:::important Para qué sirve<!-- A cosa serve -->
La Lista de Picking UDC / Packing List de Fluentis ofrece un método innovador para gestionar el picking de unidades de carga<!-- unità di carico -->, en contraposición al procedimiento tradicional de picking basado en artículos individuales. Esta funcionalidad es especialmente útil cuando se desea enviar mercancía a un cliente, permitiendo agrupar artículos dentro de unidades de carga<!-- unità di carico --> predefinidas.

La creación de una nueva lista de picking<!-- Lista di prelievo --> solo requiere el ingreso de información como el tipo de picking, el almacén<!-- magazzino --> y el usuario. Los operarios pueden entonces seleccionar las unidades de carga<!-- unità di carico --> ya creadas y almacenadas en el almacén directamente en la pestaña "Detalle de unidad de carga<!-- Dettaglio unità di carico -->", facilitando la asociación de los artículos a enviar con la orden de cliente correspondiente. Gracias al botón "Help UDC", los usuarios pueden navegar fácilmente entre las unidades de carga<!-- unità di carico --> disponibles, haciendo que el proceso de selección sea rápido y eficiente.

Las listas de picking<!-- liste di prelievo --> UDC no solo simplifican la preparación de los envíos, sino que también permiten generar directamente documentos de transporte como Remisiones<!-- DDT --> y facturas, que contienen toda la información necesaria respecto a los artículos y unidades de carga<!-- unità di carico --> involucradas en la expedición. Esta integración garantiza una gestión más fluida y eficaz en el proceso logístico y de envíos.
:::

Con las **listas de picking<!-- liste di prelievo -->** es posible crear un picking de unidades de carga<!-- unità di carico -->, al contrario del picking normal que se compone de artículos individuales.         
Desde la pantalla de **Búsqueda<!-- Ricerca -->** es posible buscar las listas introducidas previamente.     
Para crear una nueva Lista haga clic en **Nuevo<!-- Nuovo -->**.   

Los datos obligatorios a ingresar son:         
**Tipo de picking<!-- Tipo picking -->**: ingresar la tipología de [picking](/docs/logistics/picking/picking-management) a utilizar;       
**Usuario<!-- Utente -->**: ingresar el empleado registrado que crea el documento;      
**Usuario para confirmación<!-- Utente per conf. -->**: ingresar el empleado que tiene derecho a confirmar la lista.      

Después de ingresar los datos necesarios es posible guardar la Lista de picking<!-- Lista di prelievo -->.       
Con el botón de la ribbon bar **help UDC** es posible abrir la pantalla en la que seleccionar las UDC a recoger.             
La búsqueda puede realizarse sobre las unidades de carga<!-- unità di carico --> asociadas a órdenes de cliente (activando el flag **Búsqueda en órdenes de cliente<!-- Ricerca su ordini clienti -->**), por lo que, para cada orden de cliente, podemos visualizar los artículos que la componen y si estos han sido previamente insertados dentro de una unidad de carga<!-- unità di carico -->, en la tabla inferior podemos ver todos los detalles relativos a la UDC que los contiene. Una vez seleccionadas las UDC de interés, estas son agregadas a la lista.     
En alternativa, desactivando el flag **Búsqueda en órdenes de cliente<!-- Ricerca su ordini clienti -->**, las unidades de carga<!-- unità di carico --> también pueden buscarse entre todas las creadas, aunque no estén asociadas a una orden de cliente, y del mismo modo pueden ser seleccionadas y agregadas a nuestra lista de picking<!-- lista di prelievo -->.         
En la cuadrícula de *Detalle<!-- Dettaglio -->* aparecerán únicamente las UDC en estado cargado, después de lo cual es posible guardar la *Lista* y cerrarla.       
Regresando a la pantalla de *Búsqueda de listas de picking<!-- Ricerca Liste di prelievo -->*, la Lista estará presente con estado **Suspendido<!-- Sospeso -->**. Es necesario descargar las UDC de la Lista (ver *Botones específicos<!-- Pulsanti specifici -->* abajo) para pasar al estado **Controlado<!-- Controllato -->**. Solo con este último estado se habilitarán los botones de la ribbon bar **Factura<!-- Fattura -->** y **Remisión<!-- DDT -->**.    

*Botones específicos:<!-- Pulsanti specifici: -->
> **Facturas<!-- Fatture -->**: crea la factura desde la *Lista* seleccionada; en la pantalla emergente se solicita el [Tipo de Factura<!-- Tipo Fattura -->](/docs/configurations/tables/sales/invoices-type) a crear y el eventual agrupamiento a adoptar; la factura se crea ya como *Descargada<!-- Scaricata -->* (para evitar el riesgo de doble descarga).      
> **Remisión<!-- DDT -->**: crea la remisión desde la *Lista* seleccionada; en la pantalla emergente se solicita el [Tipo de Remisión<!-- Tipo DDT -->](/docs/configurations/tables/sales/delivery-notes-type) a crear y el eventual agrupamiento a adoptar; la remisión se crea ya como *Descargada<!-- Scaricato -->* (para evitar el riesgo de doble descarga).   
> **Gestión UDC<!-- Gestione UDC -->**: seleccionando una *Lista de picking<!-- Lista di prelievo -->* y haciendo clic en este botón se abre la pantalla **Gestión UDC**, en la que se prefiltran las UDC de la lista. En esta pantalla las UDC pueden gestionarse en almacén<!-- magazzino --> con los diferentes botones de la ribbon bar.       
         
Para toda la información sobre cómo utilizar este formulario desde WMS consulte las [Listas de picking/Packing list](/docs/logistics/wms/udc/loading-unit-picking-list)

### Listas de picking/Packing list (versión WMS)<!-- Liste di prelievo/Packing list (versione WMS) -->

:::important Para qué sirve<!-- A cosa serve -->
La función de Listas de Picking/Packing List de WMS de Fluentis permite crear un picking de unidades de carga<!-- unità di carico -->, facilitando la preparación de los envíos directamente asociados a los pedidos de cliente. 
Gracias a esta herramienta, los usuarios pueden seleccionar, modificar y gestionar eficazmente las UDC, optimizando el proceso de picking y asegurando una correcta documentación para los envíos.
:::

Este procedimiento se utiliza para la creación de listas de picking<!-- prelievo --> con unidades de carga<!-- unità di carico -->.     

Con las **Listas de picking UDC / Packing list** es posible crear un *picking* de unidades de carga<!-- unità di carico -->, al contrario del procedimiento normal de picking que crea una lista de picking<!-- prelievo --> formada por artículos individuales.    
Las listas de picking UDC se usan cuando se quiere enviar la mercancía a un cliente, mientras que para movimientos de UDC dentro de los propios almacenes<!-- magazzini --> es recomendable utilizar las [Listas de Transferencia UDC](/docs/logistics/wms/udc/loading-unit-transfer-list).    

En el formulario de filtro se pueden buscar las listas de interés filtrando: por fecha de inserción, fecha de envío y también por el estado de la lista de picking<!-- prelievo -->; una vez seleccionada, es posible abrir la lista con el botón **Abrir<!-- Apri -->**, en la cual, el usuario tiene la posibilidad de modificar las unidades de carga<!-- unità di carico --> contenidas en la pestaña *Detalle UDC<!-- Dettaglio UDC -->*.      
En esta pestaña es posible: seleccionar una unidad de carga<!-- unità di carico --> existente y eliminarla de la lista con el botón **Eliminar UDC<!-- Cancella UDC -->**; o agregar una nueva simplemente leyendo el correspondiente código de barras.      
Una vez finalizadas las modificaciones, es necesario guardar la lista a través del botón **Guardar<!-- Salva -->**.       

Desde el filtro también se puede crear una nueva lista con el botón **Nuevo<!-- Nuovo -->**.       
Automáticamente se proponen: la fecha actual y el almacén<!-- magazzino --> indicado en la tabla Parámetros de almacén de Carga/Descarga por usuario; además, al ingresar el tipo de picking también se ofrece el número de la lista.
En este punto, el usuario puede ingresar, en la pestaña *Detalle UDC<!-- Dettaglio UDC -->*, las unidades de carga<!-- unità di carico --> a agregar a la lista mediante la lectura de sus respectivos códigos de barras. Al terminar el ingreso, bastará con guardar la lista con el botón correspondiente.

**Parámetros carga/descarga<!-- Parametri carico/scarico -->** a ingresar en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | PickingList |

Para este parámetro la causale de almacén<!-- casuale di magazzino --> puede dejarse vacía.

:::note Nota
Si en los [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) se asocia un solo almacén<!-- magazzino --> para ese usuario, se propone por defecto ese; en caso de que haya más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre los ingresados.
:::

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barras<!-- Codice barcode -->**, consulte la página relativa al [tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Confirmación de transferencia UDC (versión WMS)<!-- Conferma trasferimento UDC (versione WMS) -->

:::important Para qué sirve<!-- A cosa serve -->
Este procedimiento se utiliza para buscar y confirmar una [Lista de Transferencia UDC](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) existente para realizar el movimiento de almacén<!-- magazzino -->.
:::

El formulario **Confirmación de transferencia UDC** se utiliza para confirmar una [Lista de Transferencia UDC](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) existente para efectuar el movimiento de almacén<!-- magazzino -->.

En el filtro es posible buscar la lista de interés por: fecha, número y almacén<!-- magazzino -->, además, también se puede confirmarla directamente con el botón **Confirmar<!-- Conferma -->** sin necesidad de abrirla.       
De lo contrario, es posible ingresar a la lista mediante el botón **Abrir<!-- Apri -->** y visualizar las unidades de carga<!-- unità di carico --> aún no descargadas y las ya descargadas dentro de las pestañas correspondientes: unidades de carga<!-- unità di carico --> no transferidas y transferidas, para poder luego confirmarla y crear el movimiento de almacén<!-- magazzino -->.

**Parámetros carga/descarga<!-- Parametri carico/scarico -->** a ingresar en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |

Los parámetros se ingresan dos veces ya que el formulario utiliza: tanto una causale de carga con como almacén<!-- magazzino --> aquel de destino de la lista, como una de descarga con como almacén<!-- magazzino --> aquel en el que están almacenadas las unidades de carga<!-- unità di carico --> a transferir.            
Ambas causali utilizadas deben tener desactivada la casilla *Lista de materiales<!-- Distinta base -->* y estar sin contrapartida.    

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barras<!-- Codice barcode -->**, consulte la página relativa al [tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).

### Confirmación de picking UDC (versión WMS)<!-- Conferma prelievo UDC (versione WMS) -->

:::important Para qué sirve<!-- A cosa serve -->
El formulario **Confirmación de picking UDC** se utiliza para buscar y confirmar una [Lista de picking UDC / Packing list](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) existente para efectuar el movimiento de almacén<!-- magazzino --> de descarga.
:::

En el filtro es posible buscar la lista de interés por: fecha, número y almacén<!-- magazzino -->, además, también se puede confirmarla directamente con el botón **Confirmar<!-- Conferma -->** sin abrirla.       
De lo contrario, es posible ingresar a la lista mediante el botón **Abrir<!-- Apri -->** y visualizar las unidades de carga<!-- unità di carico --> no descargadas y las ya descargadas en las pestañas correspondientes: unidades de carga<!-- unità di carico --> no descargadas y descargadas, para posteriormente confirmarla y crear el movimiento de almacén<!-- magazzino -->.
   
**Parámetros carga/descarga<!-- Parametri carico/scarico -->** a ingresar en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmUnloadPickingList |

Este parámetro debe ser creado con el almacén<!-- magazzino --> de la *lista de picking<!-- lista di prelievo -->* y con causale de almacén<!-- casuale di magazzino --> de tipo de descarga y sin contrapartida.

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barras<!-- Codice barcode -->**, consulte la página relativa al [tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).