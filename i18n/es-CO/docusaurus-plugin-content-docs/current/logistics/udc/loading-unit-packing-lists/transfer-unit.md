---
title: Listas de Transferencia UDC (versión WPF y WMS)
sidebar_position: 2
ai_generated: true
---

### Listas de Transferencia UDC (versión WPF)<!-- Liste di Trasferimento UDC (versione WPF) -->

:::important Para qué sirve<!-- A cosa serve -->
La Lista de Transferencia UDC de Fluentis es una herramienta diseñada para gestionar los movimientos de las Unidades De Carga<!-- UDC --> dentro de los propios almacenes<!-- magazzini -->, ofreciendo un método sistemático e intuitivo para la transferencia de mercancía<!-- merce -->. A diferencia de la Lista de Extracción UDC<!-- Lista di Prelievo UDC -->, que se utiliza para el envío a los clientes, la lista de transferencia se centra en la optimización de los flujos internos de las UDC entre las distintas ubicaciones del almacén<!-- magazzino -->.

Para crear una nueva lista de transferencia, los usuarios simplemente deben ingresar los datos necesarios, como el tipo de picking, el almacén de origen y el usuario involucrado. La selección de las unidades de carga a transferir puede realizarse fácilmente a través de la interfaz, también en este caso gracias al botón Ayuda UDC<!-- Help UDC -->, que asiste en la búsqueda de las UDC a incluir en la transferencia.

Este procedimiento también permite visualizar los artículos vinculados a pedidos de cliente específicos, proporcionando una visión clara de los detalles de las UDC seleccionadas. Una vez completada la lista de transferencia, es posible generar un DDT (Documento de Transporte) directamente desde la misma lista, garantizando que toda la información relativa a los artículos y a las unidades de carga se reporte de manera precisa y completa. Este enfoque no solo simplifica la gestión de los movimientos internos, sino que también contribuye a mantener una trazabilidad precisa de los inventarios<!-- scorte -->.
:::

Las **Listas de Transferencia UDC** son muy similares a las [Listas de Extracción UDC / Packing list](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), con la diferencia de que se utilizan en el caso de movimientos de UDC dentro de los propios almacenes<!-- magazzini -->, mientras que las **Listas de Extracción UDC / Packing list** se emplean cuando se desea enviar la mercancía<!-- merce --> a un cliente.

Desde la pantalla de **Búsqueda<!-- Ricerca -->** es posible buscar listas previamente insertadas.

Para crear una nueva lista, haga clic en **Nuevo<!-- Nuovo -->**.  
Los datos obligatorios a ingresar son:  
**Tipo de picking<!-- Tipo picking -->**: ingresar el tipo de [picking](/docs/logistics/picking/picking-management) a utilizar;  
**Usuario<!-- Utente -->**: ingresar el empleado codificado que crea el documento;  
**Usuario para conf.<!-- Utente per conf. -->**: ingresar el empleado que tiene el derecho de confirmar la lista.

Después de ingresar estos datos y otros si es necesario, es posible guardar la Lista de transferencia. Dado que se trata de una transferencia, también es obligatorio ingresar el **Almacén de partida<!-- Magazzino di partenza -->** y el **Almacén de destino<!-- Magazzino di destinazione -->**.

*Botones específicos presentes en la pantalla de detalle:*

> **Eliminar UDC<!-- Cancella UDC -->**: permite eliminar una unidad de carga de la lista;  
> **Retroceso de transferencia<!-- Rollback trasferimento -->**: permite deshacer el movimiento de confirmación de transferencia; es decir, se elimina el movimiento de carga creado con la confirmación de la transferencia y se sustituye por un movimiento de carga en el almacén de partida;  
> **Ayuda UDC<!-- Help UDC -->**: permite añadir nuevas unidades de carga mediante la ayuda.

*Botones específicos presentes en el filtro:*

> **Gestión UDC<!-- Gestione UDC -->**: seleccionando una Lista de transferencia y haciendo clic en este botón, se abre la pantalla **Gestión UDC<!-- Gestione UDC -->** en la que se muestran las UDC disponibles para la transferencia. Es posible transferir la UDC con el botón **Mover UDC<!-- Sposta UDC -->**.  
> **DDT**: crea el DDT desde la **Lista de Transferencia UDC** seleccionada.

Para toda la información sobre cómo utilizar este formulario desde WMS, consulte las [Listas de Transferencia UDC](/docs/logistics/wms/udc/loading-unit-transfer-list)

### Listas de transferencia UDC (versión WMS)<!-- Liste trasferimento UDC (versione WMS) -->

:::important Para qué sirve<!-- A cosa serve -->
La función Listas de Transferencia UDC del WMS de Fluentis permite gestionar los movimientos de las unidades de carga dentro de los almacenes<!-- magazzini -->, facilitando la organización y la trazabilidad de las UDC durante las transferencias entre diferentes ubicaciones.  
Esta funcionalidad permite crear y modificar listas de transferencia de forma eficiente, mejorando así la gestión logística interna.
:::

Este procedimiento se utiliza para la creación de listas de transferencia con unidades de carga.  
Las **Listas de Transferencia UDC** son muy similares a las [Listas de Extracción UDC / Packing list](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), con la diferencia de que se utilizan para movimientos de unidades de carga dentro de los propios almacenes<!-- magazzini -->, mientras que las **Listas de Extracción UDC / Packing list** se emplean cuando se desea enviar la mercancía<!-- merce --> a un cliente.  
En el formulario de filtro es posible buscar las listas de interés filtrando: por *tipo*, *fecha de ingreso*, *fecha de envío* y también por el *estado* de la lista de extracción; una vez seleccionada, es posible abrir la lista con el botón **Abrir<!-- Apri -->**, dentro de la cual el usuario puede modificar las unidades de carga contenidas en la pestaña **Detalle UDC<!-- Dettaglio UDC -->**.  
En esta pestaña es posible: seleccionar una unidad de carga existente y eliminarla de la lista con el botón **Eliminar UDC<!-- Cancella UDC -->**; o añadir una nueva simplemente leyendo el correspondiente código de barras.  
Una vez finalizadas las modificaciones, es necesario guardar la lista mediante el botón **Guardar<!-- Salva -->**.  
Desde el filtro también es posible crear una nueva lista con el botón **Nuevo<!-- Nuovo -->**.  
De forma automática se proponen: la *fecha actual* y el *almacén de partida<!-- magazzino di partenza -->* indicado en la tabla [Parámetros de Almacén de Carga/Descarga por usuario<!-- Parametri Magazzino Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping); por lo tanto, el operador deberá ingresar los datos relativos al almacén<!-- magazzino --> y ubicación de destino.  
Además, al ingresar el *tipo de picking<!-- tipo picking -->* también se sugiere el número de la lista.  
En este punto, el usuario puede añadir, en la pestaña *Detalle UDC<!-- Dettaglio UDC -->*, las unidades de carga a la lista mediante la lectura de los respectivos códigos de barras.  
Finalizada la inserción será suficiente guardar la lista con el respectivo botón **Guardar<!-- Salva -->**.
También desde la pestaña de filtro, es posible: abrir una lista seleccionada en solo visualización con el botón **Visualización<!-- Visualizzazione -->**, y eliminar una con el botón **Eliminar<!-- Elimina -->**.

El correspondiente movimiento de almacén<!-- movimento di magazzino --> se generará solo mediante el procedimiento de [Confirmación de transferencia<!-- Conferma trasferimento -->](/docs/logistics/wms/udc/confirm-transfer).

**Parámetros de carga/descarga<!-- Parametri carico/scarico -->** a ingresar en la tabla [Parámetros de Carga/Descarga por usuario<!-- Parametri Carico/Scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Área | Módulo | Formulario |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | TransferPickingList |

Para este parámetro, el causal<!-- causale --> de almacén<!-- magazzino --> puede dejarse vacío.

:::note Nota
Si en los [Parámetros de Carga/Descarga por usuario](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) se asocia para ese usuario un solo almacén<!-- magazzino -->, se propone por defecto ese; de lo contrario, si hay más de uno asociado, por defecto no se propone ninguno y el usuario solo puede elegir entre uno de los ingresados.
:::

Para toda la información sobre cómo codificar los códigos de barras para leer en el campo **Código de barras<!-- Codice barcode -->**, consulte la página correspondiente al [Tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).