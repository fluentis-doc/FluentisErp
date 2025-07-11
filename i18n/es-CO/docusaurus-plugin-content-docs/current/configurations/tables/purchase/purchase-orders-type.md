---
title: Tipos de órdenes de compra
sidebar_position: 3
---

Esta tabla es fundamental para definir las diversas tipologías de pedidos de proveedores disponibles, cada una con sus características propias. Se puede acceder desde *Configuración > Tablas > Compras > Tipos de órdenes de compra*.  

Los campos presentes son:  

**Código/Descripción**: campos obligatorios para definir el tipo y la descripción del pedido de compra.  

**Numeración/Descripción**: campo obligatorio para la [Numeración](/docs/configurations/tables/fluentis-numerations) que se asociará al tipo de pedido.  

**Confirmación Automática de Pedidos**: si está configurado, al momento de crear un pedido con este *Tipo de pedido*, también se completa el campo *Fecha de confirmación del pedido* presente en la cabecera del pedido, con la fecha actual.  

**Flujo de Caja**: si está configurado, el tipo de pedido contribuye al cálculo del flujo de caja.  

**Almacén/Descripción del almacén**: es el almacén de llegada de la mercancía que se configura automáticamente en las líneas de artículos de los pedidos creados con este tipo de pedido.  

**Plantilla/Descripción de la Plantilla**: es la [Plantilla](/docs/configurations/tables/logistics/warehouse-templates) de movimentación de la mercancía entrante que se configura automáticamente en las líneas de artículos de los pedidos creados con este tipo.  

**Control de disponibilidad**: si está configurado, los pedidos de este tipo contribuyen al cálculo de disponibilidad y son visibles en el formulario de [Análisis de disponibilidad](/docs/erp-home/registers/items/availability-analysis).  

**Agrícola compras IVA**: si está activo, en el momento de creación del pedido, el sistema verifica si el artículo utilizado tiene un código de IVA agrícola; si no existe, se toma el código de IVA normal.  

**Gestión de Matrices de Datos Adicionales**: si está activo, permite visualizar, en el caso de gestionar artículos con matriz, una pestaña adicional para la imputación de los valores de la cantidad por cada celda de matriz.  

**Lista de precios para ser actualizada**: sirve para actualizar automáticamente los precios de lista en función de los precios especificados en el pedido. Si este indicador no está seleccionado, aún será posible actualizar manualmente el valor de la lista en las líneas del pedido según el precio indicado en la línea.  

**Tipo de Nota de Entrega**: es el tipo de nota de entrega de compra que se creará cuando se utiliza el procedimiento de [Cumplimiento de pedidos](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).  

**Imprimir Informe**: en este campo se puede elegir la impresión a utilizar por defecto (se recuerda que, para imprimir el reporte por defecto, en la fase de impresión será necesario seleccionar la opción *Impresiones múltiples*); en el campo siguiente es posible indicar un **Número de copias** a imprimir.  

**Control de proveedor**: sirve para activar un control en el que, al seleccionar el sujeto titular del pedido, el procedimiento solo permitirá seleccionar cuentas de tipo proveedor y no de tipo cliente.  

**Gestión de activos fijos**: este indicador permite habilitar la [Gestión de activos fijos](/docs/finance-area/fixed-assets/general-overview) para ese tipo de pedido y seleccionar el **Tipo de operación** que se desea realizar.