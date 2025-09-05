---
title: Introducción 
sidebar_position: 1
---

El módulo se encuentra en el área **Compras > Órdenes de compra**. A través del uso de las órdenes de compra, las empresas pueden establecer contratos con sus proveedores para la adquisición de ciertos volúmenes de producto dentro de un período de tiempo acordado. Estos acuerdos no solo permiten obtener condiciones económicas favorables, sino que también garantizan la disponibilidad de la mercancía necesaria, a cambio del compromiso del comprador de respetar la cantidad contractual prometida dentro de los plazos establecidos.

## **Configuración preliminar del módulo**

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:  
- [**Numeraciones**](/docs/configurations/tables/fluentis-numerations): inserción de las numeraciones a usar para la inserción de órdenes de compra.  
- [**Tipo de orden de compra**](/docs/configurations/tables/purchase/purchase-job-order-types)  
- [**Parámetros de Órdenes de Trabajo de Compra**](/docs/configurations/parameters/purchase/purchase-job-orders-parameters)

## **Conexiones con otros módulos**

Una vez que se han acordado los contratos con los proveedores y se ha creado la orden de compra, esta puede ser cumplida dentro de las **Orden de Compra** mediante el botón de *ejecución del Proyecto*.  

Utilizando los [parámetros apropiados](/docs/configurations/parameters/purchase/purchase-job-orders-parameters/), es posible hacer obligatoria la ejecución desde la orden cuando se crea un nuevo pedido y bloquear la cantidad de la orden, de manera que no se permita el cumplimiento de cantidades superiores a las predefinidas en el contrato.