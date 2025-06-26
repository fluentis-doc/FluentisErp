---
title: Parámetros de agrupación de nota de entrega de ventas
sidebar_position: 8
---

:::tip[Inicio Rápido]
La tabla está sujeta al procedimiento de [**Inicio Rápido**](/docs/guide/fast-start).

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.
:::

Los parámetros de agrupamiento permiten definir cómo dividir los documentos durante los procedimientos de cumplimiento. Para ello, se pueden utilizar indicadores específicos para agrupar los documentos según diferentes propiedades, como, por ejemplo, la categoría, el tipo de documento u otras características relevantes.  
Estos parámetros generales de agrupamiento deben configurarse una sola vez y se aplicarán automáticamente a todos los procedimientos, siendo válidos para todos los clientes y proveedores. Sin embargo, si un cliente o proveedor requiere un comportamiento diferente al establecido en los parámetros generales, será necesario personalizar los parámetros de agrupamiento dentro de su respectivo registro.  
De esta manera, se garantiza una gestión flexible y adaptable de los cumplimientos, permitiendo satisfacer las necesidades específicas de cada cliente o proveedor, al tiempo que se mantiene una configuración centralizada y coherente para la mayoría de las operaciones.

En esta interfaz se deciden las reglas de agrupamiento para los procedimientos:  
- **Crear Nota de Entrega de Ventas a partir de la Selección**;  
- **Crear Nota de Entrega de Ventas a partir de la Lista de Recogida**;  
- **Crear Nota de Entrega de Ventas a partir de la Lista de Transferencia de Recogida**;  
- **Crear Nota de Entrega de Ventas desde Punto de Venta**;  
- **Crear Nota de Entrega de Ventas a partir de Orden de Venta**.  

En caso de cumplimiento de varios documentos, es posible agruparlos según las siguientes propiedades, activando los indicadores correspondientes:  
- **Tipo de documento**: los documentos de origen con el mismo [Tipo](/docs/configurations/tables/sales/sales-order-types) crearán una sola nota de entrega.  
- **Año**: los documentos de origen del mismo año crearán una sola nota de entrega.  
- **Mes**: los documentos de origen del mismo mes crearán una sola nota de entrega.  
- **Intercambio**: los documentos de origen con el mismo tipo de cambio crearán una sola nota de entrega.  
- **Orden de trabajo**: los documentos de origen con el mismo proyecto en [Encabezado](/docs/sales/sales-orders/create-new-sales-orders/sales-order) crearán una sola nota de entrega.  
- **Tipo y Término de Pago**: los documentos de origen con las mismas condiciones de pago crearán una sola nota de entrega.  
- **Enviar a**: los documentos de origen con el mismo destino y transportista crearán una sola nota de entrega.  
- **Titulares conjuntos**: los documentos de origen con el mismo tipo de operación para la gestión de activos crearán una sola nota de entrega.  

Es necesario activar las columnas que prevén los agrupamientos que se desean para estas ejecuciones.  
El indicador **Summary** es fundamental para crear un único documento teniendo diferentes documentos de origen. Los otros indicadores, en cambio, se refieren a agrupamientos particulares.  
La columna **Prioridad** no se utiliza en este momento.