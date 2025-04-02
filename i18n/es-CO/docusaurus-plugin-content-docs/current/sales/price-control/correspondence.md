---
title: Correspondencia categorías descuento compra/venta (Corrispondenza categorie sconto acq/ven)
sidebar_position: 5
---

En esta máscara es posible consultar e ingresar nuevas correspondencias para categorías de descuento. La categoría de descuento genérica (por ejemplo, la de la casa matriz) se asocia a una categoría de descuento para la venta y a una categoría de descuento para la compra.  
Los minoristas pueden recibir el catálogo (importado con el procedimiento [Precios proveedor (Prezzi fornitore)](/docs/purchase/purchase-price-lists/procedures/supplier-price) de la casa matriz a la que se le aplica un precio con una categoría de descuento; los minoristas, a su vez, venderán el producto aplicando una categoría de descuento diferente. Varios proveedores pueden tener la misma categoría de descuento, pero diferentes categorías de descuento para venta y compra, ya que tienen la misma casa matriz, pero aplican condiciones de descuento diferentes.  

La primera parte de la máscara permite filtrar los resultados; las columnas de resultado son las siguientes:  
**classe articolo**: contiene la clase de artículo a la que corresponde una determinada categoría de descuento;  
**Cuenta/Subcuenta/Descripción (Conto/Sottoconto/Descrizione)**: contiene el registro asociado a la categoría de descuento;  
**cat. sconto vend.**: contiene la categoría de descuento con la que el registro vende el artículo;  
**Cat. descuento compra (Cat. sconto acq.)**: contiene la categoría de descuento con la que el registro compra el artículo;  
**Fórmulas de actualización (Formule di aggiornamento)**: contiene las posibles fórmulas a utilizar en los procedimientos de actualización de precios;  
**da data validità**: contiene la fecha a partir de la cual considerar para la clase de artículo, la categoría de descuento; de esta manera, es posible asociar diferentes categorías en períodos distintos del año;  
**categoria sconti**: contiene la categoría de descuentos aplicada por la casa matriz; este es el campo que vincula el módulo de compras con el módulo de ventas.