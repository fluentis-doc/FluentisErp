---
title: Parámetros de Agrupación de Facturas de Compras
sidebar_position: 7
---

Los parámetros de agrupación permiten definir cómo dividir los documentos durante los procedimientos de cumplimiento. Para ello, se pueden utilizar indicadores específicos para agrupar los documentos según diversas propiedades, como la categoría, el tipo de documento u otras características relevantes.  
Estos parámetros generales de agrupación deben configurarse una sola vez y se aplicarán automáticamente a todos los procedimientos, siendo válidos para todos los clientes y proveedores. Sin embargo, si un cliente o proveedor requiere un comportamiento diferente al establecido en los parámetros generales, será necesario personalizar los parámetros de agrupación dentro de su registro específico.  
De esta forma, se garantiza una gestión flexible y adaptable de los cumplimientos, permitiendo satisfacer las necesidades específicas de cada cliente o proveedor, manteniendo a la vez una configuración centralizada y coherente para la mayoría de las operaciones.

En esta pantalla se deciden las reglas de agrupación para los procedimientos:  
- [**Nota de Entrega de Compra de Valoración**](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization);  
- [**Subcontratista de Valoración Retorno**](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization).  

Es necesario seleccionar las columnas que prevén los agrupacións que se desean establecer para estos cumplimientos.

:::note Nota
Si en el registro del proveedor, en la pestaña *Parámetros de agrupación para cliente/proveedor*, se han ingresado condiciones de agrupación diferentes, estas tendrán prioridad sobre los parámetros generales.
:::

Cuando la factura se crea a partir de una única nota de entrega, se reportan todos los datos del encabezado presentes en el documento de origen. Para las facturas creadas a partir de varias notas de entrega, en cambio, se reportan los datos del registro del proveedor.    

#### Campos específicos  

- **Resumen**: si está activo, al momento de la valorización de varias notas de entrega se creará una única factura por proveedor. Si no está activo, siempre se creará una factura por cada nota de entrega valorizado. El agrupación funciona solo para los *Tipos nota de entrega* (de Compra o de Venta, dependiendo de la operación seleccionada) que han codificado el mismo *Tipo de factura* a crear. Todos los indicadores siguientes deben utilizarse simultáneamente con este indicador.  

- **Agrupación por tipo de documento**: si está activo, se agruparán en una única factura todos los documentos que tengan el mismo *Tipo nota de entrega*.     

- **Agrupación por año**: al activar este indicador, se realizará un agrupación por año de creación de las notas de entrega.   

- **Agrupación por mes**: para realizar un agrupación por mes de creación de los nota de entrega, es necesario activar también el indicador anterior.    

- **Agrupación por cambio**: si está activo, los documentos con la misma divisa y mismo tipo de cambio se agruparán en una única factura.    

- **Agrupación por orden**: este indicador se utiliza solo para la *Creación de nota de entrega y facturas de venta desde Picking* (ver [Parámetros de agrupación de notas de entrega](/docs/configurations/parameters/sales/dn-grouping) y [facturas](/docs/configurations/parameters/sales/invoice-grouping)).    

- **Agrupación por proyecto**: al activar este indicador se realizará un agrupación por proyecto. El agrupación también funciona para los proyectos insertados a nivel de línea de artículo; si algunas de las líneas de artículo no tienen un proyecto asociado, se creará una factura diferente para todos los artículos que no lo contengan. Cuando el proyecto se ha insertado en el encabezado de los documentos de origen, será reportado también en el encabezado de los documentos de destino, de lo contrario se mantendrá solo en las líneas de artículo.    

- **Agrupación por tipo de pago y términos**: al activar este indicador, se realizará un agrupación basado en el tipo y la solución de pago ingresada en la nota de entrega; dicho dato se reportará en el encabezado de la factura creada.    

- **Agrupación por destino**: al activar este indicador, se realizará un agrupación basado en el destino ingresado dentro de las notas de entrega en la pestaña *Transporte*; dicho dato será reportado en el encabezado de la factura creada, en la pestaña *Envío*.