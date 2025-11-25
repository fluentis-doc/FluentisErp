---
title: Crear picking
sidebar_position: 3
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La gestión de picking<!-- picking --> de Fluentis está diseñada para optimizar el proceso de recogida de artículos desde el almacén<!-- magazzino -->. Esta funcionalidad permite a los usuarios generar listas de recogida de manera eficiente, partiendo de los distintos tipos de picking<!-- picking --> configurables en el sistema. A través de la creación de un picking<!-- picking -->, los operarios pueden seleccionar los artículos a despachar, definiendo detalles cruciales como la cantidad y la ubicación de recogida.

El procedimiento de gestión de picking<!-- picking --> se compone de varias interfaces, que permiten visualizar y filtrar los pedidos de cliente, facilitando la completa o parcial ejecución de los pedidos mediante una gestión automatizada de la información relativa a los artículos. Además, el sistema automatiza el número de identificación del picking<!-- picking -->, basándose en los parámetros preconfigurados, garantizando así trazabilidad y orden en las operaciones.

Gracias a funcionalidades como el seguimiento del estado de cumplimiento de las filas, el registro de lotes<!-- lotti --> y números de serie, y la integración con documentos de transporte como DDT y facturas, la gestión de picking<!-- picking --> de Fluentis ofrece una experiencia operativa completa y flexible. Esto permite a las empresas mejorar la eficiencia logística, reducir errores durante la recogida y garantizar una mayor satisfacción del cliente.
:::

El formulario se abre desde:  
 -  la ruta **Logística > Picking > Crear picking<!-- Logistica > Picking > Crea picking -->**

o bien a través del

 - botón **Nuevo<!-- Nuovo -->** que se encuentra en el formulario [Búsqueda de picking<!-- Ricerca picking -->](/docs/logistics/picking/search-picking).

## 1. Datos obligatorios<!-- Dati obbligatori -->

**Tipo picking<!-- Tipo picking -->**: predefinido en *Configuración > Tablas > Logística > Tipos de picking<!-- Configurazione > Tabelle >Logistica > Tipi picking -->*. Este campo determina el rango de numeración del documento que se está introduciendo y propone automáticamente el número de picking<!-- picking --> en base a la fecha de inserción y al último número ingresado;

**Cuenta<!-- Conto -->**: representa el cliente/proveedor de referencia (no es obligatorio);

**Número<!-- Numero -->**: se propone automáticamente en base al tipo, pero puede modificarse manualmente siempre y cuando se respete la regla de progresión entre fecha y número;

**Fecha/Hora<!-- Data/Ora -->**: se proponen automáticamente la fecha y la hora actuales, pero pueden modificarse manualmente siempre respetando la regla de progresión entre fecha y número.

**Estado<!-- Stato -->**: representa el estado del documento (que puede ser *Terminado<!-- Terminato -->*, *Por verificar<!-- Da verificare -->* o *Suspendido<!-- Sospeso -->*).

**Estado de despacho<!-- Stato evasione -->**: puede tomar los siguientes valores: *No despachado<!-- Non evaso -->*, *Despachado<!-- Evaso -->*, *Parcialmente despachado<!-- Parzialmente evaso -->* o *Forzadamente despachado<!-- Forzatamente evaso -->*; este estado se refiere al estado de cumplimiento de las filas individuales, por lo tanto, por ejemplo, si mediante la gestión de check<!-- spunta --> se despacha también una sola fila, el **Estado de despacho<!-- Stato evasione -->** pasará de *No despachado<!-- Non evaso -->* a *Parcialmente despachado<!-- Parzialmente evaso -->*.

:::note Nota
Cabe señalar que la columna *Documento* presente en [Búsqueda de picking<!-- Ricerca picking -->](/docs/logistics/picking/search-picking), se refiere al estado del picking<!-- picking --> y no al de las filas, por lo que solo pasará a estado despachado cuando se haya creado el DDT o la factura.
:::

#### Botón específico<!-- Pulsante specifico -->

> **Despacho desde pedido<!-- Evasione da ordine -->**: permite ingresar los artículos dentro del picking<!-- picking --> despachando un pedido de cliente. Al pulsar el botón se abrirá una pantalla donde es posible filtrar los pedidos de cliente relacionados con dicho cliente. Es posible despachar total o parcialmente un pedido completo o una sola fila.

## 2. Cabecera<!-- Testata -->

#### Datos necesarios para el movimiento de almacén<!-- Dati necessari per la movimentazione del magazzino -->

**Fecha de recogida de almacén<!-- Data prelievo magazzino -->**: representa la fecha en la que debe realizarse la registración de almacén<!-- registrazione di magazzino -->;  
**Usuario**: representa el código de usuario de referencia para el picking<!-- picking --> actual. Para los picking<!-- picking --> de transferencia es necesario especificar el **Almacén de origen y de destino<!-- Magazzino di partenza e di destinazione -->**: información útil para los picking<!-- picking --> de transferencia;
**Ubicación<!-- Ubicazione -->**: representa la ubicación en la que cargar los artículos;  
**Cliente/proveedor<!-- Cliente/fornitore -->**: representa la cuenta<!-- conto --> para la que se debe realizar el movimiento en almacén<!-- movimento a magazzino -->.

## 3. Artículos<!-- Articoli -->

En la cuadrícula de inserción se introducen los artículos especificando **Clase**, **Código de artículo** y **Cantidad de recogida**. Además, es posible ingresar una **Unidad de medida alternativa** con la cantidad correspondiente. En el campo **Almacén<!-- Magazzino -->** se define el almacén<!-- magazzino --> de movimiento y en el campo **Causal<!-- Causale -->** la causal correspondiente. También es posible especificar la **Ubicación<!-- Ubicazione -->** desde la cual recoger el artículo ingresado.

### Lotes<!-- Lotti -->

La pestaña, activa solo si el artículo seleccionado en la cuadrícula se gestiona por lotes<!-- lotti -->, permite el ingreso del número de lote<!-- lotto --> y la cantidad correspondiente.

La sección Números de serie, activa solo si el artículo seleccionado en la cuadrícula se gestiona por número de serie, permite el ingreso del número de serie a atribuir al artículo en cuestión.

### Extra Data de Artículo<!-- Extra Data Articolo -->

Permite ingresar y visualizar los *Extra data* relacionados con la fila individual<!-- singola riga -->.            
Para una descripción detallada sobre los extra data haga referencia al artículo [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).

### Órdenes de producción vinculadas<!-- Ordini di produzione collegati -->

Si el artículo está vinculado a una orden de producción, esta pestaña permite ver toda la información relativa a dicha orden.

### Documentos adjuntos<!-- Documenti allegati -->

Permite adjuntar y visualizar los documentos relativos a los artículos individuales.

### Check<!-- Spunta -->

Esta pestaña permite visualizar las filas validadas mediante la [Gestión de check<!-- Gestione spunta -->](/docs/logistics/wms/sales/check-row-management) del WMS.  
En caso de no utilizar el **WMS**, igualmente es posible insertar nuevas filas de artículos validadas manualmente.
La **Gestión de check<!-- Gestione spunta -->** sirve para confirmar las filas del picking<!-- picking --> realmente recogidas por el operario en almacén<!-- magazzino -->; por tanto, si hay al menos una fila validada en esta tabla, los procedimientos de creación de DDT y Factura solo tendrán en cuenta estas filas.
En caso de que no exista ninguna fila en la tabla **Gestión de check<!-- Gestione spunta -->**, entonces los procedimientos de creación de DDT y Factura tomarán en cuenta todas las filas presentes en el picking<!-- picking -->.

Para detalles sobre el funcionamiento común de los formularios consulte el enlace [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).