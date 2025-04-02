---
title: Parámetros de agrupamiento DDT (Parametri raggruppamento DDT)
sidebar_position: 8
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está sujeta al procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start).

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.
:::

Los parámetros de agrupamiento permiten definir cómo dividir los documentos durante los procedimientos de cumplimiento. Para ello, se pueden utilizar indicadores específicos para agrupar los documentos según diferentes propiedades, como, por ejemplo, la categoría, el tipo de documento u otras características relevantes.  
Estos parámetros generales de agrupamiento deben configurarse una sola vez y se aplicarán automáticamente a todos los procedimientos, siendo válidos para todos los clientes y proveedores. Sin embargo, si un cliente o proveedor requiere un comportamiento diferente al establecido en los parámetros generales, será necesario personalizar los parámetros de agrupamiento dentro de su respectivo registro.  
De esta manera, se garantiza una gestión flexible y adaptable de los cumplimientos, permitiendo satisfacer las necesidades específicas de cada cliente o proveedor, al tiempo que se mantiene una configuración centralizada y coherente para la mayoría de las operaciones.

En esta interfaz se deciden las reglas de agrupamiento para los procedimientos:  
- **creazione ddt di vendita da picking**;  
- **creazione ddt di vendita da liste di prelievo udc**;  
- **creazione ddt di vendita da liste trasferimento udc**;  
- **creazione ddt di vendita da pos**;  
- **Creación de DDT de venta desde pedido de cliente (Creazione DDT di vendita da ordine cliente)**.  

En caso de cumplimiento de varios documentos, es posible agruparlos según las siguientes propiedades, activando los indicadores correspondientes:  
- **tipo documento**: los documentos de origen con el mismo [Tipo (Tipo)](/docs/configurations/tables/sales/sales-order-types) crearán un solo DDT.  
- **anno**: los documentos de origen del mismo año crearán un solo DDT.  
- **mese**: los documentos de origen del mismo mes crearán un solo DDT.  
- **cambio**: los documentos de origen con el mismo tipo de cambio crearán un solo DDT.  
- **progetto**: los documentos de origen con el mismo proyecto en [Cabecera (Testata)](/docs/sales/sales-orders/create-new-sales-orders/sales-order) crearán un solo DDT.  
- **tipo y solución de pago (tipo e soluzione di pagamento)**: los documentos de origen con las mismas condiciones de pago crearán un solo DDT.  
- **destinazione**: los documentos de origen con el mismo destino y transportista crearán un solo DDT.  
- **cointestatari**: los documentos de origen con el mismo tipo de operación para la gestión de activos crearán un solo DDT.  

Es necesario activar las columnas que prevén los agrupamientos que se desean para estas ejecuciones.  
El indicador **riepilogativa** es fundamental para crear un único documento teniendo diferentes documentos de origen. Los otros indicadores, en cambio, se refieren a agrupamientos particulares.  
La columna **priorità** no se utiliza en este momento.