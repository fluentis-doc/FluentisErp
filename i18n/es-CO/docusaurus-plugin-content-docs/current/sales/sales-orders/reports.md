---
title: stampe
sidebar_position: 5
---

Están disponibles diversas **stampe** estándar. Para visualizar una vista previa de cada impresión, es necesario configurar los filtros deseados y presionar el botón *anteprima* en la barra de herramientas. Esta operación mostrará la impresión en pantalla sin modificar el estado del documento. Si se necesita proceder con la impresión en papel o guardarla en un archivo, se debe hacer clic en el botón *stampa*.

## Emisión de Confirmación de pedido (Emissione Conferma d'ordine)

Esta impresión permite imprimir los Pedidos como Confirmaciones de Pedido para enviar directamente al cliente.  
Con los filtros disponibles, es posible filtrar los documentos para hacer una búsqueda más específica; por ejemplo, puedo imprimir los pedidos confirmados solo a partir de cierta fecha, los no entregados, no cumplidos, etc.  
Con esta impresión, cada pedido se imprime por separado, cada uno con las siguientes secciones:  
- Encabezado con Logo e información de la empresa  
- Información del pedido (tipo, número, fecha, etc.)  
- Información del cliente (número de identificación fiscal, agente, etc.)  
- Detalles del pedido (código de artículo, cantidad, precio, etc.)  
- Resumen del pedido (total mercancía, gastos, total impuesto, etc.)  

## Etiquetas de pedido (Etichette da ordine)

La función de esta impresión es generar etiquetas físicas para la identificación y gestión de los productos o artículos que forman parte de un pedido.  
Con los filtros disponibles, es posible filtrar los documentos para hacer una búsqueda más específica; por ejemplo, puedo imprimir los pedidos confirmados solo a partir de cierta fecha, los no entregados, no cumplidos, etc.  
La impresión crea etiquetas con la siguiente información:  
- Encabezado con Logo e información de la empresa  
- Etiqueta del artículo con código de barras, unidad de medida, cantidad y descripción del artículo  
- Información sobre el cliente y el pedido que contiene el artículo  

## Lista de picking (Lista di prelievo)

Esta impresión es un documento utilizado en el contexto de la gestión de inventario y logística para ayudar a los operadores a recoger correctamente los artículos necesarios para cumplir un pedido de cliente.  
Con los filtros disponibles, es posible filtrar los documentos para hacer una búsqueda más específica; por ejemplo, puedo imprimir los pedidos de un tipo determinado, los no entregados, no cumplidos, etc.  
Con esta impresión, cada pedido se imprime por separado, cada uno con las siguientes secciones:  
- Encabezado con Logo e información de la empresa  
- Información del pedido (número y fecha) y del cliente  
- Información sobre el transporte  
- Detalles del pedido (código de artículo, unidad de medida, etc.)  
- Existencia del artículo en inventario, cantidad ordenada, cantidad recogida (campo para que el operador complete manualmente la cantidad recogida del inventario)  

## Lista DDT Cumplimiento de pedidos (Lista DDT Evasione ordini)

Esta impresión proporciona una lista de los pedidos con posibles DDT asociados.  
Con los filtros disponibles, es posible filtrar los documentos para hacer una búsqueda más específica; por ejemplo, puedo imprimir los pedidos de un tipo determinado, los no entregados, no cumplidos, etc.  
Por defecto, los pedidos se agrupan por año y tipo de pedido, donde para los mismos se enumeran los Pedidos de venta con su número, fecha y cliente correspondientes.  
Si el pedido ha sido cumplido en un DDT, este se indicará debajo del pedido, con su número, fecha, tipo, artículos, unidad de medida, cantidad ordenada y cantidad entregada.  

## Lista de pedidos (Lista ordini)

Esta impresión proporciona un resumen detallado de los pedidos ingresados, en forma de lista.  
Con los filtros disponibles, es posible filtrar los documentos para hacer una búsqueda más específica; en esta impresión, también se puede establecer un ordenamiento por Cliente (predeterminado), Número o Tipo de pedido.  
En la impresión, bajo el mismo cliente/número/tipo de pedido (según el orden elegido), se enumeran los pedidos con los siguientes datos: división, importe, artículo, IVA, etc.  
Cada línea de la lista está ocupada por un artículo del pedido.  

## Portafolio de pedidos por cantidad (Portafoglio ordini a quantità)

Esta impresión sirve para proporcionar una visión general detallada y actualizada de los pedidos; es particularmente útil para la coordinación logística, ya que permite ver claramente cuáles y cuántas unidades de productos aún deben ser entregadas.  
Con los filtros disponibles, es posible filtrar los documentos para hacer una búsqueda más específica; también se puede establecer un ordenamiento por Artículo, Número, Fecha, Cliente, Fecha de mercancía lista, Fecha de entrega, Cliente.  
El resultado es una lista de los pedidos, con la indicación de eventuales documentos de cumplimiento, si existen, y para cada artículo se indican las cantidades ordenadas, entregadas y pendientes.  

## Portafolio de pedidos por valor (Portafoglio ordini a valore)

Esta impresión proporciona un resumen de los pedidos recibidos pero aún no totalmente cumplidos, en base al valor monetario de cada pedido. Este documento es particularmente útil para los departamentos de ventas, finanzas y gestión estratégica, ya que ofrece una visión clara de los ingresos potenciales relacionados con los pedidos en curso.  
Con los filtros disponibles, es posible filtrar los documentos para hacer una búsqueda más específica; también se puede establecer un ordenamiento por Artículo, Número, Fecha, Cliente, Fecha de mercancía lista, Fecha de entrega, Cliente.  
El resultado es una lista de los pedidos con, para cada artículo, los valores ordenados, entregados y pendientes.  

## Calendario de pedidos (Scadenziario ordini)

Esta impresión proporciona una visión general detallada de las fechas de vencimiento y los términos de entrega relacionados con los pedidos no totalmente cumplidos.  
Con los filtros disponibles, es posible filtrar los documentos para hacer una búsqueda más específica; también se puede establecer un ordenamiento por Fecha de entrega o Cliente.  
En la impresión, bajo el mismo cliente/fecha de entrega (según el orden elegido), se enumeran para cada artículo los pedidos con los siguientes datos: número, fecha de ingreso, estado de cumplimiento, cantidad pendiente, etc.  

Más detalles sobre este tema en los artículos: [Vista previa e impresión (Anteprima e stampa)](/docs/guide/common/operations-with-data/reports)