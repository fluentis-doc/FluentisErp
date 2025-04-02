---
title: Parámetros de agrupamiento de pedidos (Parametri raggruppamento ordini)
sidebar_position: 7
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consultar la lista de verificación de la página enlazada.
:::

Los parámetros de agrupamiento permiten definir cómo dividir los documentos durante los procedimientos de cumplimiento. Para ello, se pueden utilizar indicadores específicos para agrupar los documentos en función de diversas propiedades, como la categoría, el tipo de documento u otras características relevantes.  
Estos parámetros generales de agrupamiento deben configurarse una sola vez y se aplicarán automáticamente a todos los procedimientos, siendo válidos para todos los clientes y proveedores. Sin embargo, si un cliente o proveedor requiere un comportamiento diferente al establecido en los parámetros generales, será necesario personalizar los parámetros de agrupamiento dentro de su registro específico.  
De esta manera, se garantiza una gestión flexible y adaptable de los cumplimientos, permitiendo satisfacer las necesidades específicas de cada cliente o proveedor, manteniendo a la vez una configuración centralizada y coherente para la mayoría de las operaciones.

En esta interfaz se deciden las reglas de agrupamiento para el procedimiento:  
**Creación de órdenes de venta a partir de ofertas (Creazione ordine di vendita da offerte)**: en caso de cumplimiento de múltiples ofertas en un pedido, es posible agrupar las ofertas según las siguientes propiedades:  
- **tipo documento**: las ofertas con el mismo [Tipo (Tipo)](/docs/configurations/tables/sales/sales-offer-type) crearán un solo pedido.  
- **anno**: las ofertas del mismo año crearán un solo pedido.  
- **mese**: las ofertas del mismo mes crearán un solo pedido.  
- **cambio**: las ofertas con el mismo cambio crearán un solo pedido.  
- **progetto**: las ofertas con el mismo proyecto en [Encabezado (Testata)](/docs/sales/offers/insert-offer) crearán un solo pedido.  
- **tipo y solución de pago (tipo e soluzione di pagamento)**: las ofertas con las mismas condiciones de pago crearán un solo pedido.  
- **destinazione**: las ofertas con el mismo destino y transportista crearán un solo pedido.  

Es necesario activar las columnas que prevean los agrupamientos que se desean considerar para este cumplimiento.  
El indicador **riepilogativa** es fundamental para crear un único documento a partir de varios documentos de origen. Los otros indicadores, en cambio, se refieren a agrupamientos especiales.  
La columna **priorità** no se utiliza en este momento.