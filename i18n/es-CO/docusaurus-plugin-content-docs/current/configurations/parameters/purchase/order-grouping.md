---
title: Parámetros de agrupamiento de pedidos de compra (Parametri raggruppamento Ordini di acquisto)
sidebar_position: 8
---

Los parámetros de agrupamiento permiten definir cómo dividir los documentos durante los procedimientos de cumplimiento. Para ello, se pueden utilizar indicadores específicos para agrupar los documentos según diversas propiedades, como la categoría, el tipo de documento u otras características relevantes.  
Estos parámetros generales de agrupamiento deben configurarse una sola vez y se aplicarán automáticamente a todos los procedimientos, siendo válidos para todos los clientes y proveedores. Sin embargo, si un cliente o proveedor solicita un comportamiento diferente al establecido en los parámetros generales, será necesario personalizar los parámetros de agrupamiento dentro de su registro específico.  
De este modo, se garantiza una gestión flexible y adaptable de los cumplimientos, permitiendo satisfacer las necesidades específicas de cada cliente o proveedor, manteniendo al mismo tiempo una configuración centralizada y coherente para la mayoría de las operaciones.

En esta máscara se deciden las reglas de agrupamiento para el procedimiento:  
- [**creazione ordini fornitori**](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders/) desde el filtro de Búsqueda de Pedidos de Clientes  

Para la creación de órdenes de proveedores desde pedidos de clientes, se recomienda utilizar el procedimiento de [creación automática de órdenes](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) con los correspondientes *Parámetros*. 

:::note Nota
Si en el registro del proveedor, en la pestaña *Parámetros de agrupamento por cliente/proveedor*, se han introducido condiciones de agrupamiento diferentes, estas tendrán prioridad sobre los parámetros generales.
:::

Cuando se crea la orden de proveedor a partir de un único pedido de cliente, se trasladan todos los datos de cabecera presentes en el documento de origen. Sin embargo, para los pedidos de compra creados a partir de múltiples pedidos de venta, se trasladan los datos del registro del proveedor.  

#### Campos específicos  

- **riepilogativa**: si está activo, al momento de crear órdenes de proveedores a partir de múltiples pedidos de clientes, se creará un único documento por proveedor. Si no está activo, siempre se creará un documento para cada pedido de cliente. El agrupamiento funciona solo para los [Tipos de pedido de cliente (Tipi ordine cliente)](/docs/configurations/tables/sales/sales-order-types/) que han codificado el mismo *Tipo de pedido de proveedor* a crear. Todos los indicadores siguientes deben utilizarse en conjunto con este indicador.  

- **Agrupamiento por tipo de documento (Raggruppamento per tipo documento)**: si está activo, se agruparán en un único pedido todos los documentos que tienen el mismo *Tipo de Pedido de Cliente*.  

- **Agrupamiento por año (Raggruppamento per anno)**: al activar este indicador, se realizará un agrupamiento por año de ingreso del pedido de cliente.  

- **Agrupamiento por mes (Raggruppamento per mese)**: para poder realizar un agrupamiento por mes de creación del pedido, es necesario activar también el indicador anterior.  

- **Agrupamiento por cambio (Raggruppamento per cambio)**: si está activo, los documentos con la misma moneda y mismo cambio se agruparán en un único pedido de compra.  

- **Agrupamiento por pedido (Raggruppamento per ordine)**: este indicador se utiliza solo para la *Creación de DDT y facturas de venta a partir del Picking* (ver [Parámetros de agrupamiento DDT (Parametri raggruppamento DDT)](/docs/configurations/parameters/sales/dn-grouping) y [facturas (fatture)](/docs/configurations/parameters/sales/invoice-grouping)), por lo que en este procedimiento no tiene significado.  

- **Agrupamiento por proyecto (Raggruppamento per progetto)**: al activar este indicador, se realizará un agrupamiento por proyecto. El agrupamiento también funciona para los proyectos introducidos a nivel de línea de artículo; si algunas de las líneas de artículo no tienen un proyecto asociado, se creará un pedido diferente para todos los artículos que no lo contengan. Cuando el proyecto ha sido incluido en la cabecera de los documentos de origen, también se trasladará a la cabecera de los documentos de destino; de lo contrario, se mantendrá solo en las líneas de artículo.  

- **raggruppamento per tipo e soluzione di pagamento**: al activar este indicador, se realizará un agrupamiento basado en el tipo y la solución de pago ingresados en el pedido de cliente; este dato será trasladado a la cabecera del pedido de proveedor creado.  

- **raggruppamento per destinazione**: al activar este indicador, se realizará un agrupamiento basado en el destino ingresado en el pedido de cliente en la pestaña *Destino*; este dato será trasladado a la cabecera del pedido de proveedor creado.