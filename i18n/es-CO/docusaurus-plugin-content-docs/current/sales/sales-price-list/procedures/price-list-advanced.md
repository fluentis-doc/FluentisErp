---
title: Creación avanzada de listas de precios
sidebar_position: 4
ai_generated: true
---

El procedimiento **Creación avanzada de listas de precios<!-- Creazione listini avanzata -->** permite crear nuevas listas de precios<!-- listini -->, aplicando una *Fórmula<!-- Formula -->*, partiendo de los artículos presentes en listas de precios<!-- listini --> existentes.  
Para que los artículos aparezcan en esta cuadricula<!-- griglia -->, es necesario que exista una [**Fórmula de actualización de políticas de precios y descuentos<!-- Formula di aggiornamento politiche prezzi sconti -->**](/docs/sales/price-control/formulas) que tenga una lista de precios<!-- listino --> de destino y una de origen; además, el artículo debe formar parte de la lista de precios<!-- listino --> de origen.  
A partir de los artículos de la lista de precios<!-- listino --> de origen, Fluentis aplicará la fórmula y creará la lista de precios de destino<!-- listino di destinazione -->.

La cuadricula<!-- griglia --> de búsqueda es de solo lectura y presenta los siguientes campos:  
**Clase, Artículo, Descripción del artículo**: en estos campos se muestra el artículo de la lista de precios<!-- listino -->;  
**Fórmulas de cálculo**: en este campo está presente la Fórmula codificada en la tabla correspondiente;  
**Tipo de lista de precios<!-- listino --> de venta de origen**: contiene el tipo de lista de precios<!-- listino --> de venta de origen, que contiene el artículo, al que se le aplicará la fórmula;  
**Cuenta/subcuenta/descripción de origen cliente**: contiene la lista de precios<!-- listino --> personalizada de origen que se debe considerar, a la que pertenece el artículo;  
**Tipo de lista de precios<!-- listino --> de proveedor de origen**: contiene el tipo de lista de precios<!-- listino --> de proveedor de origen;  
**Cuenta/subcuenta/descripción de origen proveedor**: contiene la lista de precios<!-- listino --> personalizada de origen;  
**Tipo de lista de precios<!-- listino --> de venta de destino**: contiene el tipo de lista de precios<!-- listino --> de venta destinataria de la modificación, cuando se aplique la fórmula presente en esta fila;  
**Cuenta/subcuenta/descripción de lista de precios<!-- listino --> de venta de destino**: contiene la lista de precios<!-- listino --> personalizada a crear, destinataria de la modificación;  
**Tipo de lista de precios<!-- listino --> de proveedores de destino**: contiene el tipo de lista de precios<!-- listino --> de proveedores destinataria de la modificación;  
**Cuenta/Subcuenta/Descripción de lista de precios<!-- listino --> de proveedor de destino**: contiene la lista de precios<!-- listino --> personalizada de compra destinataria de la modificación;  
**Desde/Hasta fechas de validez**: muestra las fechas de validez de la lista de precios<!-- listino --> de pertenencia.  
**Precio nuevo**: en este campo se calcula el precio de la nueva lista de precios<!-- listino -->, obtenido a partir del precio anterior al que se le aplica la fórmula;  
**Precio anterior**: en este campo se presenta el precio de la lista de precios<!-- listino --> de origen;  
**Variación**: en este campo se introduce la variación en valor;  
**%Variación**: en este campo se introduce la variación en porcentaje.

En la parte inferior, es posible introducir algunos datos para la nueva lista de precios<!-- listino -->:  
**Fecha de inicio de validez**: aparece la fecha actual, modificable;  
**Fecha de finalización de validez**: no se propone ninguna fecha, pero es posible ingresar una fecha de finalización de validez para la lista de precios<!-- listino -->;  
**Moneda**: se propone la moneda de la empresa, modificable;  
[**Redondeos<!-- Arrotondamenti -->**](/docs/sales/sales-price-list/procedures/rounding): es posible ingresar una determinada **Máscara<!-- Mask -->** para aplicar a un rango de valores a efectos de la gestión de decimales.

Para iniciar el procedimiento, seleccione las filas de artículos en la cuadricula<!-- griglia --> y haga clic en **Creación de lista de precios<!-- Creazione listino -->** en la barra de herramientas.