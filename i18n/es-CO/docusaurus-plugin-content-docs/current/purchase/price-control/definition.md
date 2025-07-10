---
title: Definición de descuento de políticas
sidebar_position: 1
---

En esta pantalla se definen las políticas de descuento según las configuraciones ingresadas en otras pantallas del grupo **Gestión de precios**.

En la primera cuadrícula están presentes las siguientes columnas:

>- **Descripción de la cuenta**: contiene el registro del destinatario de la política de descuento.  
>- **Clase**: se refiere a la clase de artículo destinataria de la política de descuento; es un campo opcional.  
>- **categoria sconto acquisti**: permite elegir la categoría de descuento de compras para asociar al registro entre las codificadas en la tabla [Categoría de descuento de compras](/docs/configurations/tables/purchase/category-discounts-price-management/).  
>- **dettaglio categoria sconti**: si el usuario desea gestionar también la *Subcategoría de descuento (Sottocategoria di sconto)*, debe ingresar en este campo el mismo código utilizado por el proveedor.  
>- **data validità**: contiene la validez de la política de descuento; esto permite aplicar diversas políticas en diferentes períodos del año.

En la segunda cuadrícula se definen los **Descuentos** que se propondrán para las combinaciones de la primera cuadrícula. Los descuentos se propondrán en los documentos dirigidos al registro de esa clase de artículo determinada.

### Gestión de categorías de descuento en los documentos (Gestione categorie sconto nei documenti)

Es posible asignar descuentos por categoría de artículo que luego se tomarán en cuenta dentro de los documentos de compra. Para hacer esto, se requieren algunos pasos.

1. En *anagrafica articolo* > pestaña *categoria sconti acquisti*, se debe ingresar la categoría de descuento con la *data inizio validità*;  
2. En *Registro de proveedor (Anagrafica fornitore)* > pestaña *listini*, se debe ingresar la *listino*, con el indicador de **gestione prezzi** activo;  
3. En *definizione politiche sconti*, se debe ingresar el *Proveedor*, la misma **categoria sconto acquisti** ingresada en el registro de artículo, la *Fecha de validez (Data di validità)*, el *sconto* y, eventualmente, la *Clase de artículos (Classe articoli)* a la que asociar el descuento;  
4. Además, debe haber un **listino fornitore** válida en la fecha de validez de la política de descuento que contenga los artículos que tienen en su registro la categoría de descuento, para la recuperación del precio base.

En este punto, al ingresar un documento de compra, también se propondrán los descuentos por categoría de descuento.