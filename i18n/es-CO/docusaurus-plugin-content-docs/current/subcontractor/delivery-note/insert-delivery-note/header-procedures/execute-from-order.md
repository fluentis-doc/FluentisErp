---
title: Cumplimiento del pedido (Evasione da ordine)
sidebar_position: 1
---

En el encabezado del DDT de entrega, al presionar el botón **consegne previste** se abrirá el formulario donde es posible filtrar los pedidos relacionados con el cliente del documento.

A través de este procedimiento, es posible crear un DDT de entrega a partir del cumplimiento del pedido correspondiente. Así, es posible insertar los artículos dentro del DDT, cumpliendo total o parcialmente un pedido completo o una línea.

Para poder utilizar este procedimiento, hay algunas condiciones iniciales que deben cumplirse:

 - el proveedor de los pedidos debe ser el mismo que el del DDT;  
 - el pedido que se desea cumplir debe tener activada la opción *stampato*;  
 - los tipos de documento deben ser compatibles.

*Procedimiento*:

Los filtros para proveedor y moneda se llenarán automáticamente según el proveedor seleccionado en el DDT.

Una vez establecidos todos los *Filtros* deseados, al hacer clic en el botón de *ricerca*, se mostrará en la cuadrícula una fila por cada pedido impreso y no cumplido, o cumplido parcialmente.

:::note AVISO
El procedimiento toma todos los datos presentes en el pedido, y como consecuencia se aplicarán las condiciones presentes en el pedido, incluso si estas han cambiado actualmente.
:::

En la cuadrícula de resultados, el usuario tiene la posibilidad de:

 1. seleccionar el *pedido completo (ordine per intero)*. Para hacerlo, basta con marcar el indicador al comienzo de la fila del pedido.  
 2. seleccionar solo *algunos* de los *articoli* propuestos. Para hacerlo, basta con marcar el indicador al comienzo de la fila del artículo.  
 3. seleccionar solo *algunos artículos*, pero solo por una *cantidad determinada (determinata quantità)*. En este caso, deberá modificar la cantidad a cumplir.

Para completar el procedimiento, se deberá hacer clic en el botón **trasferimento**, que tomará todos los datos presentes en el pedido y los llevará al DDT.

*Botones específicos*:

> **ricerca** permite aplicar los filtros de búsqueda a toda la base de datos de pedidos ingresados y no cumplidos o solo parcialmente cumplidos.  
> **trasferimento** permite transferir a la cuadrícula de la pestaña de Entregas del DDT de trabajo los artículos seleccionados en la ventana inferior.  
> **esplodi** permite expandir todo el árbol de pedidos en la cuadrícula inferior, para visualizar los artículos contenidos en ellos.  
> **comprimi** permite comprimir la visualización de las filas de artículos y solo mostrar las filas de pedidos.  
> **seleziona tutti** permite seleccionar todos los artículos de la lista.