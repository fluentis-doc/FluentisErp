---
title: Impresiones
sidebar_position: 5
ai_generated: true
---

Existen diferentes **Impresiones<!-- Stampe -->** estándar. Para visualizar una vista previa de cada impresión, es necesario configurar los filtros deseados y presionar el botón *Vista previa<!-- Anteprima -->* en la barra de herramientas. Esta operación mostrará la impresión en pantalla sin modificar el estado del documento. Si se necesita proceder con la impresión en papel o guardarla en un archivo, se debe hacer clic en el botón *Imprimir<!-- Stampa -->*.

## Emisión de Confirmación de pedido<!-- Emissione Conferma d'ordine -->

Esta impresión permite imprimir los pedidos como Confirmaciones de Pedido para enviarlos directamente al cliente.       
Con los filtros disponibles, es posible filtrar los documentos para realizar una búsqueda más precisa; por ejemplo, puedo imprimir los pedidos confirmados solo desde una cierta fecha, los no entregados, no despachados, etc.            
Con esta impresión, cada pedido se maqueta por separado, cada uno con las siguientes secciones:
- Encabezado con logotipo e información empresarial
- Información del pedido (tipo, número, fecha, etc.)
- Información del cliente (NIT, agente, etc.)
- Detalles del pedido (código de artículo, cantidad, precio, etc.)
- Resumen del pedido (total de mercancía, gastos, total impuesto, etc.)

## Etiquetas desde pedido<!-- Etichette da ordine -->

La función de esta impresión es generar etiquetas físicas para la identificación y gestión de los productos o artículos que forman parte de un pedido.      
Con los filtros disponibles, es posible filtrar los documentos para realizar una búsqueda más precisa; por ejemplo, puedo imprimir los pedidos confirmados solo desde una cierta fecha, los no entregados, no despachados, etc.        
La impresión crea etiquetas con la siguiente información: 
- Encabezado con logotipo e información empresarial
- Etiqueta del artículo con código de barras, unidad de medida, cantidad y descripción del artículo
- Información sobre el cliente y el pedido que contiene el artículo

## Lista de picking<!-- Lista di prelievo -->

Esta impresión es un documento utilizado en el contexto de la gestión de inventario<!-- magazzino --> y logística para ayudar a los operarios a recolectar correctamente los artículos necesarios para despachar un pedido del cliente.     
Con los filtros disponibles, es posible filtrar los documentos para realizar una búsqueda más precisa; por ejemplo, puedo imprimir los pedidos de un determinado tipo, los no entregados, no despachados, etc.      
Con esta impresión, cada pedido se maqueta por separado, cada uno con las siguientes secciones:
- Encabezado con logotipo e información empresarial
- Información del pedido (número y fecha) y del cliente
- Información sobre el transporte
- Detalles del pedido (código de artículo, unidad de medida, etc.)
- Existencias del artículo en inventario<!-- giacenza dell'articolo a magazzino -->, cantidad pedida, cantidad recolectada (campo a completar manualmente por el operario que recoge la cantidad en inventario<!-- magazzino -->)

## Lista DDT Despacho de pedidos<!-- Lista DDT Evasione ordini -->

Esta impresión proporciona una lista de pedidos con los posibles DDT asociados.       
Con los filtros disponibles, es posible filtrar los documentos para realizar una búsqueda más precisa; por ejemplo, puedo imprimir los pedidos de un determinado tipo, los no entregados, no despachados, etc.     
Por defecto, los pedidos se agrupan por año y tipo de pedido, por lo tanto para los mismos año y tipo se listan los pedidos de venta con su respectivo número, fecha y cliente.       
Si el pedido ha sido despachado en un DDT, este último se muestra debajo del pedido, con los respectivos número, fecha, tipo, artículos, unidad de medida, cantidad pedida y cantidad entregada. 

## Lista de pedidos<!-- Lista ordini -->

Esta impresión proporciona un resumen detallado de los pedidos ingresados, en forma de lista.
Con los filtros disponibles, es posible filtrar los documentos para realizar una búsqueda más precisa; además, en esta impresión es posible configurar un orden por Cliente (por defecto), Número o Tipo de pedido.       
En la impresión, bajo el mismo cliente/número/tipo de pedido (según el orden seleccionado) se listan los pedidos con los siguientes datos: moneda, importe, artículo, IVA, etc.         
Cada línea de la lista corresponde a un artículo del pedido.         

## Cartera de pedidos por cantidad<!-- Portafoglio ordini a quantità -->

Esta impresión sirve para proporcionar una visión detallada y actualizada de los pedidos; es especialmente útil para la coordinación logística, ya que permite ver de forma clara cuáles y cuántas unidades de productos deben ser entregadas aún.       
Con los filtros disponibles, es posible filtrar los documentos para realizar una búsqueda más precisa; también es posible configurar un orden por Artículo, Número, Fecha, Cliente, Fecha de mercancía lista, Fecha de entrega, Cliente.      
El resultado es una lista de pedidos, indicando los posibles documentos de despacho si existen, y para cada artículo las cantidades pedidas, entregadas y pendientes.       

## Cartera de pedidos por valor<!-- Portafoglio ordini a valore -->

Esta impresión proporciona un resumen de los pedidos recibidos pero no totalmente despachados, según el valor monetario de cada pedido. Este documento es especialmente útil para los departamentos de ventas, finanzas y gestión estratégica, ya que ofrece una visión clara de la facturación potencial vinculada a los pedidos en curso.      
Con los filtros disponibles, es posible filtrar los documentos para realizar una búsqueda más precisa; también es posible configurar un orden por Artículo, Número, Fecha, Cliente, Fecha de mercancía lista, Fecha de entrega, Cliente.      
El resultado es una lista de pedidos donde para cada artículo se indican los valores pedidos, entregados y pendientes.        

## Calendario de vencimientos de pedidos<!-- Scadenziario ordini -->

Esta impresión proporciona una visión detallada de las fechas de vencimiento y de los plazos de entrega relacionados con los pedidos no totalmente despachados.      
Con los filtros disponibles, es posible filtrar los documentos para realizar una búsqueda más precisa; también es posible configurar un orden por Fecha de entrega o Cliente.      
En la impresión, bajo el mismo cliente/fecha de entrega (según el orden seleccionado), se listan para cada artículo los pedidos con los siguientes datos: número, fecha de ingreso, estado de despacho, cantidad pendiente, etc.       

Más detalles sobre este tema en los artículos: [Vista previa e impresión](/docs/guide/common/operations-with-data/reports) <!-- Anteprima e stampa -->