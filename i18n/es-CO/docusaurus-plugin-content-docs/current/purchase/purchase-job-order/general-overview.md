---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo se encuentra en el área **Compras > Órdenes de compra (Acquisti > Commesse di acquisto)**. A través del uso de las órdenes de compra, las empresas pueden establecer contratos con sus proveedores para la adquisición de ciertos volúmenes de producto dentro de un período de tiempo acordado. Estos acuerdos no solo permiten obtener condiciones económicas favorables, sino que también garantizan la disponibilidad de la mercancía necesaria, a cambio del compromiso del comprador de respetar la cantidad contractual prometida dentro de los plazos establecidos.

## **Configuración preliminar del módulo (Configurazione preliminare del modulo)**

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:  
- [**Numeraciones** (Numerazioni)](/docs/configurations/tables/fluentis-numerations): inserción de las numeraciones a usar para la inserción de órdenes de compra.  
- [**tipo commessa di acquisto**](/docs/configurations/tables/purchase/purchase-job-order-types)  
- [**parametri commesse acquisto**](/docs/configurations/parameters/purchase/purchase-job-orders-parameters)

## **Conexiones con otros módulos (Collegamenti con altri moduli)**

Una vez que se han acordado los contratos con los proveedores y se ha creado la orden de compra, esta puede ser cumplida dentro de las **ordini fornitore** mediante el botón de *evasione da progetto*.  

Utilizando los [parámetros apropiados (parametri)](/docs/configurations/parameters/purchase/purchase-job-orders-parameters/), es posible hacer obligatoria la ejecución desde la orden cuando se crea un nuevo pedido y bloquear la cantidad de la orden, de manera que no se permita el cumplimiento de cantidades superiores a las predefinidas en el contrato.