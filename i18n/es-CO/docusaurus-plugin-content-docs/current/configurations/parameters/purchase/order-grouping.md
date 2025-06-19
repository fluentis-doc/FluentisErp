---
title: Parámetros de agrupación de órdenes de compra 
sidebar_position: 8
---

Los parámetros de agrupación permiten definir cómo dividir los documentos durante los procedimientos de cumplimiento. Para ello, se pueden utilizar indicadores específicos para agrupar los documentos según diversas propiedades, como la categoría, el tipo de documento u otras características relevantes.  
Estos parámetros generales de agrupación deben configurarse una sola vez y se aplicarán automáticamente a todos los procedimientos, siendo válidos para todos los clientes y proveedores. Sin embargo, si un cliente o proveedor solicita un comportamiento diferente al establecido en los parámetros generales, será necesario personalizar los parámetros de agrupación dentro de su registro específico.  
De este modo, se garantiza una gestión flexible y adaptable de los cumplimientos, permitiendo satisfacer las necesidades específicas de cada cliente o proveedor, manteniendo al mismo tiempo una configuración centralizada y coherente para la mayoría de las operaciones.

En esta máscara se deciden las reglas de agrupación para el procedimiento:  
- [**Crear Órdenes de Compra**](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders/) desde el filtro de Búsqueda de órdenes de compra.  

Para la creación de órdenes de proveedores desde órdenes de compra, se recomienda utilizar el procedimiento de [creación automática de órdenes](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) con los correspondientes *Parámetros*. 

:::note Nota
Si en el registro del proveedor, en la pestaña *Parámetros de agrupamento por cliente/proveedor*, se han introducido condiciones de agrupación diferentes, estas tendrán prioridad sobre los parámetros generales.
:::

Cuando se crea la orden de proveedor a partir de un único orden de cliente, se trasladan todos los datos de cabecera presentes en el documento de origen. Sin embargo, para los órdenes de compra creados a partir de múltiples órdenes de venta, se trasladan los datos del registro del proveedor.  

#### Campos específicos  

- **Resumen**: si está activo, al momento de crear órdenes de proveedores a partir de múltiples órdenes de compra, se creará un único documento por proveedor. Si no está activo, siempre se creará un documento para cada orden de cliente. El agrupación funciona solo para los [Tipos de Orden de Venta](/docs/configurations/tables/sales/sales-order-types/) que han codificado el mismo *Tipo de orden de proveedor* a crear. Todos los indicadores siguientes deben utilizarse en conjunto con este indicador.  

- **Agrupación por tipo de documento**: si está activo, se agruparán en un único orden todos los documentos que tienen el mismo *Tipo de Orden de Cliente*.  

- **Agrupación por año**: al activar este indicador, se realizará un agrupación por año de ingreso del orden de cliente.  

- **Agrupación por mes**: para poder realizar un agrupación por mes de creación del orden, es necesario activar también el indicador anterior.  

- **Agrupación por cambio**: si está activo, los documentos con la misma moneda y mismo cambio se agruparán en un único orden de compra.  

- **Agrupación por orden**: este indicador se utiliza solo para la *Crear notas de entraga y facturas de venta a partir del Picking* (ver [Parámetros de agrupación de notas de entrega](/docs/configurations/parameters/sales/dn-grouping) y [facturas](/docs/configurations/parameters/sales/invoice-grouping)), por lo que en este procedimiento no tiene significado.  

- **Agrupación por proyecto**: al activar este indicador, se realizará un agrupación por proyecto. El agrupación también funciona para los proyectos introducidos a nivel de línea de artículo; si algunas de las líneas de artículo no tienen un proyecto asociado, se creará un orden diferente para todos los artículos que no lo contengan. Cuando el proyecto ha sido incluido en la cabecera de los documentos de origen, también se trasladará a la cabecera de los documentos de destino; de lo contrario, se mantendrá solo en las líneas de artículo.  

- **Agrupación por tipo de pago y términos**: al activar este indicador, se realizará un agrupación basado en el tipo y la solución de pago ingresados en el orden de cliente; este dato será trasladado a la cabecera del orden de proveedor creado.  

- **Agrupación por destino**: al activar este indicador, se realizará un agrupación basado en el destino ingresado en el orden de cliente en la pestaña *Destino*; este dato será trasladado a la cabecera del orden de proveedor creado.