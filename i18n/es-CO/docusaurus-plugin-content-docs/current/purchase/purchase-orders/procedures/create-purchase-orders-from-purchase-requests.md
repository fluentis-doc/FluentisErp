---
title: creazione automatica ordini
sidebar_position: 2
showLastUpdateTime: true
---

El procedimiento se encuentra en la ruta *Compras (Acquisti) > Pedidos de Proveedores (Ordini Fornitori) > Procedimientos (Procedure)* y permite crear pedidos de proveedores a partir de **richieste di acquisto** o de **ordini clienti**.

## 1. Filtro De (Filtro Da)

En esta pestaña se seleccionan los documentos de origen a partir de los cuales se creará el pedido de proveedor. Es necesario seguir los siguientes pasos:

- **Filtrar la Solicitud de compra o el Pedido cliente (Filtrare la Richiesta di acquisto o l'Ordine cliente)**: seleccionar el documento del cual se generará el Pedido de proveedor. La cuadrícula superior contiene la solicitud/el pedido, mientras que la inferior los artículos correspondientes.

- **genera prototipi ordine** para pasar a la siguiente pestaña.

## 2. Elección de Proveedor (Scelta Fornitore)

Después de haber generado el *Prototipo de pedido*, es posible confirmarlo en función de los *Proveedores preferenciales* de los artículos o de los *Listados de proveedores*. En esta sección, es necesario elegir el proveedor desde el cual ordenar.

- **Seleccionar el proveedor para cada artículo (Selezionare il fornitore per ciascun articolo)**: el proveedor se propone automáticamente según el parámetro seleccionado en la sección superior (para los detalles de los indicadores, consulte la pestaña [Parámetros (Parametri)](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests#parametri)).

Las filas de artículos sin proveedor pueden ser seleccionadas con el botón derecho del mouse y trasladadas bajo el proveedor deseado que ya tenga al menos una fila de artículo vinculada. Alternativamente, se puede utilizar el botón *scegli fornitore* en la barra de herramientas (ribbon bar).

- **Confirmar los prototipos de pedido seleccionados (Confermare i prototipi d'ordine selezionati)**: en la cuadrícula superior, seleccionar los prototipos o solo una parte de sus artículos, luego hacer clic en el botón **conferma i prototipi d'ordine selezionati** para generar los pre-pedidos de proveedores. Las cuadrículas secundarias, *articoli* y *analitica*, mostrarán los detalles de la fila seleccionada en la primera cuadrícula.

#### Botones específicos

> **esplodi**: expande todas las filas de la cuadrícula con los documentos.  
> **Eliminar el prototipo de pedido seleccionado (Cancella il prototipo di ordine selezionato)**: elimina el prototipo de pedido para los artículos seleccionados en la cuadrícula superior.  
> **Elegir el proveedor (Scegli il fornitore)**: abre la ayuda de contactos para elegir el proveedor; activo si se ha seleccionado al menos un prototipo/artículo.  
> **conferma i prototipi d'ordine selezionati**: genera los pedidos de proveedores basados en los prototipos seleccionados.

## 3. Prototipos de Pedido (Prototipi Ordine)

En esta sección se visualizan los pre-pedidos para la creación de los pedidos de proveedores.

La cuadrícula superior muestra los detalles de los pedidos de proveedores que se están creando. Estos incluyen el *tipo ordine fornitore* (propuesto por los *Parámetros*, pero modificable), el número del pedido, la fecha de creación y el proveedor.

La cuadrícula inferior muestra los detalles de los artículos contenidos en cada pedido. Los datos modificables en esta cuadrícula son: *quantità confermata*, *IVA*, y *tipo fatturato acquisti*.

> **quantità originale**: cantidad ingresada en el documento de origen (RDA o pedido cliente).  
> **quantità disponibile**: disponibilidad del artículo en todos los almacenes considerados en el *calcolo disponibilità* a la fecha actual.  
> **quantità confermata**: si la *Cantidad disponible* es menor que la *Cantidad original*, se propone automáticamente esta última. Alternativamente, se propondrá una cantidad nula y, para continuar, será necesario completar este campo.

5. **Generación de pedidos de proveedores (Generazione ordini fornitore)**: el último paso es la generación de los pedidos mediante el botón **Generar pedidos de proveedores (Genera ordini fornitore)**. Alternativamente, se pueden añadir las filas a pedidos ya existentes con el botón **ordini**.

## 4. Parámetros (Parametri)

### 4.1 Elegir el proveedor a quien ordenar en función de:

- **fornitore e listino prezzi da richiesta di acquisto**: propone el proveedor y la lista de compra presentes en la RDA.  
- **fornitore e listino prezzi da fornitore preferenziale di default**: propone el proveedor preferencial por defecto del artículo.  
- **fornitore e prezzi da ultimo acquisto fatturato/ricevuto/ordinato**: busca el proveedor y los precios del artículo en la última factura de compra recibida; si no se gestionan las facturas, busca en los documentos de transporte o en los pedidos.  
- **Proveedor con el mejor precio de compra (Fornitore con migliore prezzo di acquisto)**: selecciona el proveedor con el precio de compra más bajo.  
- **Proveedor con menor tiempo de aprovisionamiento (Fornitore con minore tempo di approvvigionamento)**: selecciona el proveedor con el menor tiempo de aprovisionamiento entre los incluidos en los *Proveedores preferenciales* del registro de artículos.  
- **fornitore con migliore condizione di pagamento**: selecciona el proveedor con la solución de pago con el mayor plazo.

### 4.2 Parámetros de creación (Parametri di creazione)

- **Tipo de pedido de proveedor desde solicitudes de compra (Tipo ordine fornitore da richieste di acquisto)**: indica el tipo de pedido de proveedor a crear a partir de las RDA. Puede ser modificado en los *Prototipos de pedido*.  
- **tipo ordine fornitore da ordini clienti**: indica el tipo de pedido de proveedor a crear a partir de los pedidos de clientes. Puede ser modificado en los *Prototipos de pedido*.  
- **raggruppa per articolo**: agrupa los pedidos por artículo.

### 4.3 Datos a utilizar si no están codificados para cada artículo (Dati da utilizzare se non codificati per ogni articolo)

- **tipo fatturato acquisti**: si falta el tipo de facturación de compras en la fila del artículo.  
- **aliquota iva**: si falta el código de IVA en la fila del artículo.  
- **UM (Unidad de medida) (UM (Unità di misura))**: si se desean crear los pedidos también con la unidad de medida alternativa.  
- **tempo di approvvigionamento**: para determinar las fechas de entrega.

### 4.4 Considerar la disponibilidad (Considera la disponibilità)

Activando este indicador en la pestaña *Prototipos de pedido*, será visible la columna *quantità disponibile*.

Dependiendo de los indicadores seleccionados en la sección inferior, se considerarán las disponibilidades provenientes de las siguientes áreas: trabajo por encargo (conto lavoro), compras, ventas, planificación, producción, almacén.

## 5. Operaciones (Operazioni)

Esta sección muestra el historial de todas las creaciones realizadas, con el detalle del operador, los pedidos de proveedores creados y sus detalles.

Los pedidos de proveedor pueden ser visualizados con doble clic en las filas de las pestañas **operazioni**/**dettagli**.

##### Botón específico

> **ripristino operazioni selezionate**: anula el pedido de proveedor creado y restaura la solicitud de compra.