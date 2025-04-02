---
title: Parámetros de agrupamiento de facturas (Parametri raggruppamento fatture)
sidebar_position: 9
---

:::tip[FAst Start]
La tabla está sujeta al procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.
:::

Los parámetros de agrupamiento permiten definir cómo dividir los documentos durante los procedimientos de cumplimiento. Para ello, se pueden utilizar indicadores específicos para agrupar los documentos según diferentes propiedades, como la categoría, el tipo de documento u otras características relevantes.  
Estos parámetros generales de agrupamiento deben configurarse una sola vez y se aplicarán automáticamente a todos los procedimientos, siendo válidos para todos los clientes y proveedores. Sin embargo, si un cliente o proveedor requiere un comportamiento diferente al configurado en los parámetros generales, será necesario personalizar los parámetros de agrupamiento dentro de su registro específico.  
De este modo, se garantiza una gestión flexible y adaptable de las evasiones, permitiendo satisfacer las necesidades específicas de cada cliente o proveedor, manteniendo a la vez una configuración centralizada y coherente para la mayoría de las operaciones.

En este formulario se deciden las reglas de agrupamiento para los procedimientos:  
- **valorizzazione ddt di vendita**;  
- **valorizzazione interventi**;  
- **creazione fattura di vendita da picking**;  
- **creazione fattura di vendita da liste di prelievo udc**;  
- **creazione fattura di vendita da pos**.  

En caso de cumplimiento de múltiples documentos, es posible agruparlos según las siguientes propiedades, insertando los indicadores correspondientes:  
- **tipo documento**: los documentos de origen con el mismo tipo generarán una única factura.  
- **anno**: los documentos de origen del mismo año generarán una única factura.  
- **mese**: los documentos de origen del mismo mes generarán una única factura.  
- **cambio**: los documentos de origen con el mismo cambio generarán una única factura.  
- **progetto**: los documentos de origen con el mismo proyecto en el encabezado generarán una única factura.  
- **tipo y solución de pago (tipo e soluzione di pagamento)**: los documentos de origen con las mismas condiciones de pago generarán una única factura.  
- **destinazione**: los documentos de origen con el mismo destino y transportista generarán una única factura.  
- **cointestatari**: los documentos de origen con el mismo tipo de operación para la gestión de activos generarán una única factura.  

Es necesario marcar las columnas que prevén los agrupamientos que se desean establecer para estas evasiones.  
El indicador **riepilogativa** es fundamental para crear un único documento a partir de varios documentos de origen. Los otros indicadores, en cambio, se refieren a agrupamientos particulares.  
La columna **priorità** no está utilizada en este momento.