---
title: Definición de descuento de políticas
sidebar_position: 1
---

En esta pantalla se definen las políticas de descuento según las configuraciones ingresadas en otras pantallas del grupo **Gestión de precios**.

En la primera cuadrícula están presentes las siguientes columnas:

>- **Descripción de la cuenta**: contiene el registro del destinatario de la política de descuento.  
>- **Clase**: se refiere a la clase de artículo destinataria de la política de descuento; es un campo opcional.  
>- **Categoría de descuento por compra**: permite elegir la categoría de descuento de compras para asociar al registro entre las codificadas en la tabla [Categoría de descuento de compras](/docs/configurations/tables/purchase/category-discounts-price-management/).  
>- **Categoría de descuento detallada**: si el usuario desea gestionar también la *Subcategoría de descuento*, debe ingresar en este campo el mismo código utilizado por el proveedor.  
>- **Fecha de validez**: contiene la validez de la política de descuento; esto permite aplicar diversas políticas en diferentes períodos del año.

En la segunda cuadrícula se definen los **Descuentos** que se propondrán para las combinaciones de la primera cuadrícula. Los descuentos se propondrán en los documentos dirigidos al registro de esa clase de artículo determinada.

### Gestión de categorías de descuento en los documentos 

Es posible asignar descuentos por categoría de artículo que luego se tomarán en cuenta dentro de los documentos de compra. Para hacer esto, se requieren algunos pasos.

1. En *Registro de artículos* > pestaña *Categoría de descuento por compra*, se debe ingresar la categoría de descuento con la *Fecha de inicio de validez*;  
2. En *Registro de proveedor* > pestaña *Lista de precios*, se debe ingresar la *Lista de precios*, con el indicador de **Gestión de precios** activo;  
3. En *Definición de Descuento de Políticas*, se debe ingresar el *Proveedor*, la misma **Categoría de descuento por compra** ingresada en el registro de artículo, la *Fecha de validez*, el *Descuento* y, eventualmente, la *Clase de artículos* a la que asociar el descuento;  
4. Además, debe haber una **Lista de precios de compra** válida en la fecha de validez de la política de descuento que contenga los artículos que tienen en su registro la categoría de descuento, para la recuperación del precio base.

En este punto, al ingresar un documento de compra, también se propondrán los descuentos por categoría de descuento.