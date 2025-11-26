---
title: Creación automática de pedidos
sidebar_position: 2
showLastUpdateTime: true
ai_generated: true
---

La procedimiento se encuentra en la ruta *Compras > Pedidos a proveedores<!-- Acquisti > Ordini Fornitori --> > Procedimientos<!-- Procedure -->* y permite crear pedidos a proveedores<!-- ordini fornitori --> partiendo de **Solicitudes de compra<!-- Richieste di acquisto -->** o de **Pedidos de cliente<!-- Ordini clienti -->**.

## 1. Filtro Desde<!-- Filtro Da -->

En esta pestaña se eligen los documentos de origen desde los cuales se crea el pedido a proveedor<!-- ordine fornitore -->. Es necesario seguir los siguientes pasos:

- **Filtrar la Solicitud de compra<!-- Richiesta di acquisto --> o el Pedido de cliente<!-- Ordine cliente -->**: seleccione el documento a partir del cual se generará el Pedido a proveedor<!-- Ordine fornitore -->. La cuadrícula superior contiene la solicitud o el pedido<!-- richiesta/l'ordine -->, mientras que la inferior muestra los artículos correspondientes.
   
- **Presione el botón "Generar prototipos de pedido"<!-- Genera prototipi ordine -->** para pasar a la siguiente pestaña.

## 2. Elección del proveedor<!-- Scelta Fornitore -->

Después de generar el *Prototipo de pedido<!-- Prototipo ordine -->*, es posible confirmarlo según los *Proveedores preferentes<!-- Fornitori preferenziali -->* de los artículos o las *Listas de precios de proveedores<!-- Listini fornitori -->*. En esta sección deberá elegir el proveedor<!-- fornitore --> al que ordenar.

- **Seleccione el proveedor para cada artículo**: el proveedor<!-- fornitore --> se propone automáticamente según el parámetro seleccionado en la sección superior (para detalles de los flags, consulte la pestaña [Parámetros](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests)).

Las líneas de artículo sin proveedor<!-- fornitore --> pueden seleccionarse con el botón derecho del mouse y moverse debajo del proveedor deseado que ya tenga al menos una línea de artículo asignada. Alternativamente, puede utilizar el botón *Elegir proveedor<!-- Scegli fornitore -->* en la cinta de opciones.

- **Confirmar los prototipos de pedido seleccionados**: en la cuadrícula superior, seleccione los prototipos o solo parte de sus artículos, luego haga clic en el botón **Confirmar los prototipos de pedido seleccionados<!-- Conferma i prototipi d'ordine selezionati -->** para generar los pre-pedidos a proveedores<!-- pre-ordini fornitori -->. Las cuadrículas secundarias, *Artículos* y *Analítica*, mostrarán los detalles de la línea seleccionada en la primera cuadrícula.

#### Botones específicos<!-- Pulsanti specifici -->

> **Expandir<!-- Esplodi -->**: expande todas las líneas de la cuadrícula con los documentos.  
> **Eliminar el prototipo de pedido seleccionado<!-- Cancella il prototipo di ordine selezionato -->**: elimina el prototipo de pedido para los artículos seleccionados en la cuadrícula superior.  
> **Elegir proveedor<!-- Scegli il fornitore -->**: abre la ayuda de contactos para elegir el proveedor<!-- fornitore -->; activo si se ha seleccionado al menos un prototipo/artículo.  
> **Confirmar los prototipos de pedido seleccionados<!-- Conferma i prototipi d'ordine selezionati -->**: genera los pedidos a proveedores<!-- ordini fornitori --> según los prototipos seleccionados.

## 3. Prototipos de pedido<!-- Prototipi Ordine -->

En esta sección se visualizan los pre-pedidos para la creación de los pedidos a proveedor<!-- ordini fornitore -->.

La cuadrícula superior muestra los detalles de los pedidos a proveedor<!-- ordini fornitore --> que se están creando. Estos incluyen el *Tipo de pedido a proveedor<!-- Tipo ordine fornitore -->* (propuesto por los *Parámetros<!-- Parametri -->* pero modificable), el número de pedido, la fecha de creación y el proveedor<!-- fornitore -->.

La cuadrícula inferior muestra los detalles de los artículos contenidos en cada pedido. Los datos modificables en esta cuadrícula son: *Cantidad confirmada*, *IVA*, y *Tipo facturado de compras<!-- Tipo fatturato acquisti -->*.

> **Cantidad original<!-- Quantità originale -->**: cantidad ingresada en el documento de origen (solicitud de compra<!-- RDA --> u orden de cliente<!-- ordine cliente -->).  
> **Cantidad disponible<!-- Quantità disponibile -->**: disponibilidad del artículo en todos los almacenes<!-- magazzini --> considerados en el *Cálculo de disponibilidad<!-- Calcolo disponibilità -->* a la fecha de hoy.  
> **Cantidad confirmada<!-- Quantità confermata -->**: si la *Cantidad disponible<!-- Quantità disponibile -->* es menor que la *Cantidad original<!-- Quantità originale -->*, se propone automáticamente esta última. Alternativamente, se propondrá una cantidad nula y para continuar será necesario completar este campo.

5. **Generación de pedidos a proveedores<!-- Generazione ordini fornitore -->**: el último paso es la generación de los pedidos mediante el botón **Generar pedidos a proveedores<!-- Genera ordini fornitore -->**. Alternativamente, puede agregar las líneas a pedidos ya existentes con el botón **Pedidos<!-- Ordini -->**.

## 4. Parámetros<!-- Parametri -->

### 4.1 Elegir el proveedor al que pedir en base a:<!-- Scegli il fornitore a cui ordinare in base a: -->

- **Proveedor y lista de precios desde solicitud de compra**: propone el proveedor y la lista de compra presentes en la solicitud de compra<!-- RDA -->.  
- **Proveedor y lista de precios desde proveedor preferente por defecto**: propone el proveedor preferente por defecto del artículo.  
- **Proveedor y precios del último pedido/factura/recepción**: busca el proveedor y los precios del artículo en la última factura de compra recibida; si no se gestionan facturas, busca en los documentos de transporte o en los pedidos.  
- **Proveedor con mejor precio de compra**: selecciona el proveedor con el menor precio de compra.  
- **Proveedor con el menor tiempo de aprovisionamiento**: selecciona el proveedor con el menor tiempo de aprovisionamiento entre los incluidos en los *Proveedores preferentes<!-- Fornitori preferenziali -->* de la ficha del artículo.  
- **Proveedor con mejores condiciones de pago**: selecciona el proveedor con la solución de pago con el plazo máximo.

### 4.2 Parámetros de creación<!-- Parametri di creazione -->

- **Tipo de pedido a proveedor desde solicitudes de compra<!-- Tipo ordine fornitore da richieste di acquisto -->**: indica el tipo de pedido a proveedor<!-- ordine fornitore --> a crear a partir de las solicitudes de compra<!-- RDA -->. Puede modificarse en los *Prototipos de pedido<!-- Prototipi ordine -->*.  
- **Tipo de pedido a proveedor desde pedidos de cliente<!-- Tipo ordine fornitore da ordini clienti -->**: indica el tipo de pedido a proveedor<!-- ordine fornitore --> a crear a partir de los pedidos de cliente<!-- ordini clienti -->. Puede modificarse en los *Prototipos de pedido<!-- Prototipi ordine -->*.  
- **Agrupar por artículo**: si la solicitud de compra o el pedido de cliente contienen varias líneas con el mismo artículo, el procedimiento crea una sola línea con la suma de las cantidades del artículo. El agrupamiento se efectúa solo para los artículos contenidos en el mismo documento de origen.     

### 4.3 Datos a utilizar si no se codifican por cada artículo<!-- Dati da utilizzare se non codificati per ogni articolo -->

- **Tipo facturado de compras<!-- Tipo fatturato acquisti -->**: si falta el tipo facturado de compras<!-- tipo fatturato acquisti --> en la línea de artículo.  
- **Tasa de IVA<!-- Aliquota IVA -->**: si falta el código de IVA<!-- codice IVA --> en la línea de artículo.  
- **UM (Unidad de medida<!-- Unità di misura -->)**: si se quieren crear los pedidos también con la unidad de medida alternativa.  
- **Tiempo de aprovisionamiento<!-- Tempo di approvvigionamento -->**: para determinar las fechas de entrega.

### 4.4 Considerar la disponibilidad<!-- Considera la disponibilità -->

Activando esta marca en la pestaña *Prototipos de pedido<!-- Prototipi ordine -->*, será visible la columna *Cantidad disponible<!-- Quantità disponibile -->*.

Según los flags seleccionados en la sección inferior, se considerarán las disponibilidades<!-- disponibilità --> provenientes de las siguientes áreas: subcontratación<!-- conto lavoro -->, compras<!-- acquisti -->, ventas<!-- vendite -->, planificación<!-- pianificazione -->, producción<!-- produzione -->, almacén<!-- magazzino -->.

## 5. Operaciones<!-- Operazioni -->

Esta sección muestra el historial de todas las creaciones realizadas, con el detalle del operador<!-- operatore -->, los pedidos a proveedores<!-- ordini fornitori --> creados y sus detalles.

Los pedidos a proveedores<!-- ordini fornitore --> pueden visualizarse haciendo doble clic en las líneas de las pestañas **Operaciones<!-- Operazioni -->**/**Detalles<!-- Dettagli -->**.

##### Botón específico<!-- Pulsante specifico -->

> **Restaurar operaciones seleccionadas<!-- Ripristino operazioni selezionate -->**: anula el pedido a proveedor<!-- ordine fornitore --> creado y restaura la solicitud de compra<!-- richiesta di acquisto -->.