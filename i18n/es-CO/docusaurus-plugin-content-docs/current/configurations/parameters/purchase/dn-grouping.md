---
title: Parámetros de Agrupación del Documento de Entrega de Compra
sidebar_position: 10
---

Los parámetros de agrupamiento permiten definir cómo dividir los documentos durante los procedimientos de cumplimiento. Para tal fin, es posible utilizar indicadores específicos para agrupar los documentos según diversas propiedades, como la categoría, el tipo de documento u otras características relevantes.  
Estos parámetros generales de agrupamiento deben configurarse una sola vez y se aplicarán automáticamente a todos los procedimientos, siendo válidos para todos los clientes y proveedores. Sin embargo, si un cliente o proveedor requiere un comportamiento diferente al establecido en los parámetros generales, será necesario personalizar los parámetros de agrupamiento dentro de su registro específico.  
De esta manera, se garantiza una gestión flexible y adaptable de los cumplimientos, permitiendo satisfacer las necesidades específicas de cada cliente o proveedor, mientras se mantiene una configuración centralizada y coherente para la mayoría de las operaciones.

En esta pantalla se deciden las reglas de agrupamiento para el procedimiento de [**Obtener de órdenes**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).  

Es necesario seleccionar las columnas que prevén los agrupamientos que se desean establecer para estos cumplimientos. 

:::note Nota
Si en el registro del proveedor, en la pestaña *Parámetros de agrupamiento por cliente/proveedor*, se han establecido condiciones de agrupamiento diferentes, estas tendrán prioridad sobre los parámetros generales.
:::

Cuando se crea una nota de entrega a partir de un único orden, se trasladan todos los datos de encabezado presentes en el documento de origen. Para las notas de entrega creados a partir de múltiples órdenes, en cambio, se trasladan los datos del registro del proveedor.    

#### Campos específicos

- **Resumen**: si está activo, al momento del cumplimiento de órdenes se creará una única nota de entrega por proveedor. Si no está activo, se creará siempre una nota de entrega por cada orden cumplido. El agrupamiento solo funciona para los *Tipos de orden* (de Compra o de Venta, dependiendo de la operación seleccionada) que hayan codificado el mismo *Tipo nota de entrega* a crear. Todos los indicadores siguientes deben utilizarse en conjunto con este indicador.  

- **Agrupamiento por tipo de documento**: si está activo, se agruparán en una única nota de entrega todos los documentos que tengan el mismo *Tipo de orden*.  

- **Agrupamiento por año**: al activar este indicador, se realizará un agrupamiento por año de creación de los órdenes.  

- **Agrupamiento por mes**: para poder realizar un agrupamiento por mes de creación de los órdenes, también es necesario activar el indicador anterior.  

- **Agrupamiento por cambio**: si está activo, se agruparán los documentos con la misma moneda y el mismo tipo de cambio en una única nota de entrega.  

- **Agrupamiento por orden**: este indicador se utiliza solo para la *Creación de notas de entrega y facturas de venta desde Picking* (ver [Parámetros de agrupación de notas de entrega](/docs/configurations/parameters/sales/dn-grouping) y [facturas](/docs/configurations/parameters/sales/invoice-grouping)).  

- **Agrupamiento por proyecto**: al activar este indicador, se realizará un agrupamiento por proyecto. El agrupamiento también funciona para los proyectos insertados a nivel de la línea del artículo; si algunas de las líneas del artículo no tienen un proyecto asociado, se creará una nota de entrega diferente para todos los artículos que no lo contengan. Cuando el proyecto se ha insertado en el encabezado de los documentos de origen, también se trasladará al encabezado de los documentos de destino; en alternativa, se mantendrá solo en las líneas de artículo.  

- **Agrupación por tipo de pago y términos**: al activar este indicador, se realizará un agrupamiento basado en el tipo y la solución de pago introducidos en el orden; dicho dato se trasladará al encabezado de la nota de entrega creado.  

- **Agrupación por destino**: al activar este indicador, se realizará un agrupamiento basado en el destino informado dentro de los órdenes; dicho dato se trasladará al encabezado de la nota de entrega creado, en la pestaña *trasporto*.