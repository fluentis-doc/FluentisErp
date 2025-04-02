---
title: Parámetros de agrupamiento de facturas de compra (Parametri raggruppamento Fatture di acquisto)
sidebar_position: 7
---

Los parámetros de agrupamiento permiten definir cómo dividir los documentos durante los procedimientos de cumplimiento. Para ello, se pueden utilizar indicadores específicos para agrupar los documentos según diversas propiedades, como la categoría, el tipo de documento u otras características relevantes.  
Estos parámetros generales de agrupamiento deben configurarse una sola vez y se aplicarán automáticamente a todos los procedimientos, siendo válidos para todos los clientes y proveedores. Sin embargo, si un cliente o proveedor requiere un comportamiento diferente al establecido en los parámetros generales, será necesario personalizar los parámetros de agrupamiento dentro de su registro específico.  
De esta forma, se garantiza una gestión flexible y adaptable de los cumplimientos, permitiendo satisfacer las necesidades específicas de cada cliente o proveedor, manteniendo a la vez una configuración centralizada y coherente para la mayoría de las operaciones.

En esta pantalla se deciden las reglas de agrupamiento para los procedimientos:  
- [**valorizzazione ddt di acquisto**](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization);  
- [**valorizzazione ddt di rientro**](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization).  

Es necesario seleccionar las columnas que prevén los agrupamientos que se desean establecer para estos cumplimientos.

:::note Nota
Si en el registro del proveedor, en la pestaña *Parámetros de agrupamiento para cliente/proveedor*, se han ingresado condiciones de agrupamiento diferentes, estas tendrán prioridad sobre los parámetros generales.
:::

Cuando la factura se crea a partir de un único DDT, se reportan todos los datos del encabezado presentes en el documento de origen. Para las facturas creadas a partir de varios DDT, en cambio, se reportan los datos del registro del proveedor.    

#### Campos específicos  

- **riepilogativa**: si está activo, al momento de la valorización de varios DDT se creará una única factura por proveedor. Si no está activo, siempre se creará una factura por cada DDT valorizado. El agrupamiento funciona solo para los *Tipos DDT* (de Compra o de Venta, dependiendo de la operación seleccionada) que han codificado el mismo *Tipo de factura* a crear. Todos los indicadores siguientes deben utilizarse simultáneamente con este indicador.  

- **Agrupamiento por tipo de documento (Raggruppamento per tipo documento)**: si está activo, se agruparán en una única factura todos los documentos que tengan el mismo *Tipo DDT*.     

- **Agrupamiento por año (Raggruppamento per anno)**: al activar este indicador, se realizará un agrupamiento por año de creación de los DDT.   

- **Agrupamiento por mes (Raggruppamento per mese)**: para realizar un agrupamiento por mes de creación de los DDT, es necesario activar también el indicador anterior.    

- **Agrupamiento por cambio (Raggruppamento per cambio)**: si está activo, los documentos con la misma divisa y mismo tipo de cambio se agruparán en una única factura.    

- **Agrupamiento por pedido (Raggruppamento per ordine)**: este indicador se utiliza solo para la *Creación de DDT y facturas de venta desde Picking* (ver [Parámetros de agrupamiento DDT](/docs/configurations/parameters/sales/dn-grouping) y [facturas](/docs/configurations/parameters/sales/invoice-grouping)).    

- **Agrupamiento por proyecto (Raggruppamento per progetto)**: al activar este indicador se realizará un agrupamiento por proyecto. El agrupamiento también funciona para los proyectos insertados a nivel de línea de artículo; si algunas de las líneas de artículo no tienen un proyecto asociado, se creará una factura diferente para todos los artículos que no lo contengan. Cuando el proyecto se ha insertado en el encabezado de los documentos de origen, será reportado también en el encabezado de los documentos de destino, de lo contrario se mantendrá solo en las líneas de artículo.    

- **raggruppamento per tipo e soluzione di pagamento**: al activar este indicador, se realizará un agrupamiento basado en el tipo y la solución de pago ingresada en el DDT; dicho dato se reportará en el encabezado de la factura creada.    

- **raggruppamento per destinazione**: al activar este indicador, se realizará un agrupamiento basado en el destino ingresado dentro de los DDT en la pestaña *Transporte*; dicho dato será reportado en el encabezado de la factura creada, en la pestaña *spedizione*.