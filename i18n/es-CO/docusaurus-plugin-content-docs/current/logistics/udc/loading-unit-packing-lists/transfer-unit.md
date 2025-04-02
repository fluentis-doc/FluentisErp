---
title: Listas de Transferencia UDC (versión WPF y WMS) (Liste di Trasferimento UDC (versione WPF e WMS))
sidebar_position: 2
---

### Listas de Transferencia UDC (versión WPF) (Liste di Trasferimento UDC (versione WPF))

:::important ¿Para qué sirve? (A cosa serve)
La Lista de Transferencia UDC de Fluentis es una herramienta diseñada para gestionar los movimientos de las Unidades De Carga (UDC) dentro de sus almacenes, ofreciendo un método sistemático e intuitivo para la transferencia de mercancía. A diferencia de la Lista de Recogida UDC, que se utiliza para el envío a clientes, la lista de transferencia se centra en la optimización de los flujos internos de las UDC entre las diversas ubicaciones del almacén.

Para crear una nueva lista de transferencia, los usuarios deben simplemente ingresar los detalles necesarios, como la tipología de picking, el almacén de origen y el usuario involucrado. La selección de las unidades de carga a transferir puede hacerse fácilmente a través de la interfaz, también en este caso gracias al botón de Ayuda UDC, que asiste en la búsqueda de las UDC a incluir en la transferencia.

Este procedimiento también permite visualizar los artículos relacionados con órdenes de cliente específicas, proporcionando una visión clara de los detalles de las UDC seleccionadas. Una vez completada la lista de transferencia, es posible generar un DDT (Documento de Transporte) directamente desde la lista misma, garantizando que toda la información relacionada con los artículos y las unidades de carga se registre de manera precisa y completa. Este enfoque no solo simplifica la gestión de los movimientos internos, sino que también contribuye a mantener un seguimiento preciso de los inventarios.
:::

Las **Listas de Transferencia UDC (Liste di Trasferimento UDC)** son muy similares a las [Listas de Recogida UDC / Packing list (Liste di prelievo UDC / Packing list)](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), con la diferencia de que se utilizan en caso de movimientos de UDC dentro de sus propios almacenes, mientras que las **Listas de Recogida UDC / Packing list** son empleadas cuando se desea enviar la mercancía a un cliente.  

Desde la pantalla de **ricerca** es posible buscar listas previamente ingresadas.  

Para crear una nueva lista, haga clic en **nuovo**.          
Los datos obligatorios a ingresar son:         
**tipo picking**: ingrese la tipología de [picking](/docs/logistics/picking/picking-management) a utilizar;       
**utente**: ingrese el empleado codificado que crea el documento;      
**utente per conf.**: ingrese el empleado que tiene derecho a confirmar la lista.    

Después de haber ingresado estos datos y otros si es necesario, es posible guardar la Lista de transferencias. Dado que se trata de una transferencia, también es necesario ingresar el **Almacén de origen (Magazzino di partenza)** y el **magazzino di destinazione**.       

*Botones específicos presentes en el formulario de detalle:*

> **cancella udc**: permite eliminar una unidad de carga presente en la lista;      
> **Reversar transferencia (Rollback trasferimento)**: permite realizar la reversión del movimiento de confirmación de transferencia; por lo tanto, se elimina el movimiento de carga creado con la confirmación de la transferencia y se sustituye por un movimiento de carga en el almacén de origen;         
> **help udc**: permite agregar nuevas unidades de carga a través de la ayuda.

*Botones específicos presentes en el filtro:*

> **gestione udc**: al seleccionar una Lista de transferencia y hacer clic en este botón se abre la pantalla de **Gestión UDC** en la que se propondrán las UDC disponibles para la transferencia. Es posible transferir la UDC con el botón **sposta udc**.             
> **DDT**: crea el DDT desde la **Lista de Transferencia UDC (Liste di Trasferimento UDC)** seleccionada.    

Para toda la información sobre cómo utilizar este formulario desde WMS, consulte las [Listas de Transferencia UDC](/docs/logistics/wms/udc/loading-unit-transfer-list).

### Listas de Transferencia UDC (versión WMS) (Liste trasferimento UDC (versione WMS))

:::important ¿Para qué sirve? (A cosa serve)
La función Listas de Transferencia UDC del WMS de Fluentis permite gestionar los movimientos de las unidades de carga dentro de los almacenes, facilitando la organización y el seguimiento de las UDC durante las transferencias entre diferentes ubicaciones.        
Esta funcionalidad permite crear y modificar listas de transferencia de manera eficiente, mejorando así la gestión logística interna.
:::

Este procedimiento se utiliza para la creación de listas de transferencia con unidades de carga.         
Las **Listas de Transferencia UDC (Liste di Trasferimento UDC)** son muy similares a las [Listas de Recogida UDC / Packing list (Liste di prelievo UDC / Packing list)](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), con la diferencia de que se utilizan en caso de movimientos de unidades de carga dentro de sus propios almacenes, mientras que las **Listas de Recogida UDC / Packing list** se emplean cuando se desea enviar la mercancía a un cliente.          

En el formulario de filtro se pueden buscar las listas de interés filtrando: por *tipo*, *fecha de ingreso*, *fecha de envío* y también por el *estado* de la lista de recogida; una vez seleccionada, es posible abrir la lista con el botón **apri**, dentro de la cual el usuario tiene la posibilidad de modificar las unidades de carga contenidas en la pestaña **dettaglio udc**.       
En esta pestaña, es posible: seleccionar una unidad de carga existente y eliminarla de la lista con el botón **cancella udc**; o agregar una nueva simplemente leyendo el código de barras correspondiente.            
Una vez realizadas las modificaciones, es necesario guardar la lista a través del botón **salva**.           
Desde el filtro también se puede crear una nueva lista con el botón **nuovo**.        
Automáticamente se proponen: la *fecha actual* y el *almacén de partida* indicado en la tabla [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping); por lo tanto, el operador deberá ingresar los datos relativos al almacén y ubicación de destino.           
Además, al ingresar el *tipo de picking*, se propone también el número de la lista.        

En este punto, el usuario puede ingresar, en la pestaña *dettaglio udc*, las unidades de carga a agregar a la lista mediante la lectura de los códigos de barras correspondientes.          
Una vez completada la entrada, basta con guardar la lista con el botón correspondiente **salva**. 
Desde la pestaña de filtro, también es posible: abrir una lista seleccionada en solo visualización con el botón **Visualización** (Visualizzazione), y eliminar una con el botón **Eliminar** (Elimina).

El movimiento de almacén correspondiente se generará solo a través del procedimiento de [Confirmar transferencia (Conferma trasferimento)](/docs/logistics/wms/udc/confirm-transfer). 

**Parámetros de carga/descarga** a ingresar en la tabla [Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | TransferPickingList |

Para este parámetro, la causal de almacén puede dejarse vacía.

:::note Nota
Si en los [Parámetros de Carga/Descarga por usuario (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) se asocia para ese usuario, un solo almacén, se propone por defecto ese, de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario puede elegir solo entre los ingresados.
:::

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relativa al [Tokenizador de Códigos de Barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).