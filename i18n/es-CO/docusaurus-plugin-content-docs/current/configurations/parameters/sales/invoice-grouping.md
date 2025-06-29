---
title: Parámetros de agrupamiento de facturas 
sidebar_position: 9
---

:::tip[FAst Start]
La tabla está sujeta al procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.
:::

Los parámetros de agrupamiento permiten definir cómo dividir los documentos durante los procedimientos de cumplimiento. Para ello, se pueden utilizar indicadores específicos para agrupar los documentos según diferentes propiedades, como la categoría, el tipo de documento u otras características relevantes.  
Estos parámetros generales de agrupamiento deben configurarse una sola vez y se aplicarán automáticamente a todos los procedimientos, siendo válidos para todos los clientes y proveedores. Sin embargo, si un cliente o proveedor requiere un comportamiento diferente al configurado en los parámetros generales, será necesario personalizar los parámetros de agrupamiento dentro de su registro específico.  
De este modo, se garantiza una gestión flexible y adaptable de las evasiones, permitiendo satisfacer las necesidades específicas de cada cliente o proveedor, manteniendo a la vez una configuración centralizada y coherente para la mayoría de las operaciones.

En este formulario se deciden las reglas de agrupamiento para los procedimientos:  
- **Nota de entrega de ventas de valorización**;  
- **Valoración de la intervención**;  
- **Crear Factura de Venta a partir de la Recolección**;  
- **Crear Factura de Venta a partir de Lista de Recogida**;  
- **Crear factura de venta desde el punto de venta**.  

En caso de cumplimiento de múltiples documentos, es posible agruparlos según las siguientes propiedades, insertando los indicadores correspondientes:  
- **Tipo de documento**: los documentos de origen con el mismo tipo generarán una única factura.  
- **Año**: los documentos de origen del mismo año generarán una única factura.  
- **Mes**: los documentos de origen del mismo mes generarán una única factura.  
- **Intercambio**: los documentos de origen con el mismo cambio generarán una única factura.  
- **Orden de trabajo**: los documentos de origen con el mismo proyecto en el encabezado generarán una única factura.  
- **Tipo y Término de Pago**: los documentos de origen con las mismas condiciones de pago generarán una única factura.  
- **Enviar a**: los documentos de origen con el mismo destino y transportista generarán una única factura.  
- **Titulares conjuntos**: los documentos de origen con el mismo tipo de operación para la gestión de activos generarán una única factura.  

Es necesario marcar las columnas que prevén los agrupamientos que se desean establecer para estas evasiones.  
El indicador **Summary** es fundamental para crear un único documento a partir de varios documentos de origen. Los otros indicadores, en cambio, se refieren a agrupamientos particulares.  
La columna **Prioridad** no está utilizada en este momento.