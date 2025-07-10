---
title: Correspondencia de categorías de descuento de ventas y compras
sidebar_position: 3
---

En esta pantalla es posible consultar e ingresar nuevas correspondencias para categorías de descuento. Se utiliza para el procedimiento de [Importación de Precios de proveedor](/docs/purchase/purchase-price-lists/procedures/import-price) y permite relacionar la *Categoría de descuento* del proveedor con las *Categoría de descuento de ventas* y *Categorías de descuento de compras* codificadas y utilizadas en Fluentis según las condiciones de descuento a aplicar a sus clientes/proveedores.

La categoría de descuento genérica (por ejemplo, la de la casa matriz) se asocia a una categoría de descuento para la venta y a una categoría de descuento para la compra.  
Los revendedores pueden recibir de la casa matriz el catálogo (Importado con el procedimiento [Precios de proveedor](/docs/purchase/purchase-price-lists/procedures/supplier-price)), al cual se aplica un precio con una categoría de descuento; los revendedores a su vez venderán el producto aplicando una categoría de descuento diferente. Varios proveedores pueden tener la misma *Categoría de descuento* pero diferentes *Categoría de descuento de ventas y compras*, ya que comparten la misma casa matriz, pero aplican condiciones de descuento diferentes.

Las informaciones contenidas en la cuadrícula son:           

>- **Clase de ítem**: contiene la clase de artículo a la cual se asocia una determinada categoría de descuento.  
>- **Cuenta/Subcuenta/Descripción**: contiene el registro asociado a la categoría de descuento.        
>- **Categoría de descuento de venta**: contiene la categoría de descuento con la cual el registro vende el artículo; permite elegir un valor entre aquellos previamente codificados en la tabla [Categorías de descuentos gestión de precios](/docs/configurations/tables/sales/category-discounts-price-management/).     
>- **Categoría de descuento de compra**: contiene la categoría de descuento con la cual el registro compra el artículo; permite elegir un valor entre aquellos previamente codificados en la tabla [Categoría de descuento de compras](/docs/configurations/tables/purchase/category-discounts-price-management/).        
>- **Fórmulas de actualización**: permite asociar una eventual [fórmula de actualización de políticas de precios/descuentos](/docs/purchase/price-control/formulas) a utilizar en los procedimientos de actualización de precios.  
>- **Desde la fecha de validez**: contiene la fecha desde la cual considerar la categoría de descuento para la clase de artículo; de esta manera es posible asociar diferentes categorías en distintos periodos del año.         
>- **Categoría de descuento**: este es el campo que une el módulo de compras con el módulo de ventas y contiene la categoría de descuentos aplicada por la casa matriz. Debe reflejar la misma *Categoría de descuento* de la casa matriz que se encuentra también en el formulario de [Precios de proveedor](/docs/purchase/purchase-price-lists/procedures/supplier-price).

Para poder realizar la [Importación de Precios de Proveedor](/docs/purchase/purchase-price-lists/procedures/import-price), es necesario ingresar una nueva fila en la tabla indicando:  
- la *clase* de los artículos de los cuales se desea realizar la importación,  
- el *registro* del *contacto* al que se asocia,  
- las *categorías de descuento de ventas y compras* elegidas entre las codificadas en el sistema,  
- la *categoría de descuentos* del productor, igual a la presente en la cuadrícula de artículos,  
- eventualmente, una *fecha de validez* y una *fórmula*.