---
title: Precios proveedor
sidebar_position: 1
ai_generated: true
---

El formulario se abre a través de la ruta **Compras > Listas de precios de proveedores > Procedimientos > Precios proveedor<!-- Prezzi fornitore -->**.

En este formulario es posible consultar los resultados de la [Importación de precios y artículos proveedor](/docs/applications/bizlink/template-example/price-item-supplier). Todos los artículos importados a través de bizlink con sus respectivos precios se insertan en esta máscara, desde donde es posible consultarlos y elegir cuáles gestionar<!-- trattare -->.

Este procedimiento se utiliza mucho para la importación de catálogos: mediante la *importación de precios y artículos proveedor<!-- importazione prezzi e articoli fornitore -->* se insertan en esta máscara todos los artículos presentes en el catálogo del proveedor. Posteriormente, el usuario puede buscar y elegir los artículos que quiere gestionar. La máscara permite conocer el precio de compra de un artículo sin que éste haya sido previamente codificado e incluido en una lista de precios, y codificar luego solo los artículos que realmente se gestionarán.

Los datos principales de la cuadrícula son:  
- **Clase de artículo<!-- Classe articolo -->**: este dato estará presente solo si el artículo ya existe; de lo contrario, si solo fue importado, no tendrá una clase de artículo asignada.            
- **Código de artículo<!-- Codice articolo -->**: este dato sigue las mismas reglas que el anterior; es posible distinguir los artículos importados de los no importados también por el hecho de que los primeros tienen un color diferente.             
- **Proveedor**: este dato indica el proveedor cuyo catálogo ha sido importado y llenará el campo *Proveedor preferencial*<!-- Fornitore preferenziale --> en la ficha del artículo una vez creado.    
- **Fecha de importación<!-- Data importazione -->**: contiene la fecha en la que se produjo la importación en excel.       
- **Fecha de inicio de validez<!-- Data inizio validità -->**: contiene la fecha de inicio de validez introducida en la hoja de excel.         
- **Código/Descripción de artículo proveedor<!-- Codice/Descrizione articolo fornitore -->**: indica el código del artículo del proveedor que también se mostrará en la ficha del artículo, pestaña [proveedores preferenciales<!-- fornitori preferenziali -->](/docs/erp-home/registers/items/create-new-item).    
- **Unidad de medida**: indica la unidad de medida utilizada en el catálogo del proveedor.   
- **Cantidad**: indica la cantidad a la que se refiere el **Precio** del artículo.  
- **Categoría de descuento<!-- Categoria sconto -->**: indica la categoría de descuento a la que pertenece el artículo y que debe asociarse a la categoría de descuento de compras<!-- categoria sconto acquisti --> codificada en Fluentis. La columna *Categoría de descuento<!-- Categoria sconto -->* también está presente en la [Definición de políticas de descuentos](/docs/purchase/price-control/definition), donde es posible consultar los descuentos aplicados por el proveedor.     
- **Subcategoría de descuento<!-- Sottocategoria sconto -->**: código que especifica mejor las subcategorías de pertenencia; se utiliza principalmente para listas de precios muy grandes. Los usuarios que desean gestionar también la subcategoría de descuento deben consignar en el campo *Detalle categoría de descuentos<!-- Dettaglio categoria sconti -->* de la [Definición de políticas de descuentos](/docs/purchase/price-control/definition) el mismo código presente en esta columna.    


:::important Recuerda<!-- Ricorda -->
Antes de proceder con el procedimiento de **Importación desde Precios proveedor<!-- Prezzi fornitore -->** es necesario indicar una correspondencia entre la *Categoría de descuento<!-- Categoria sconto -->* utilizada por el proveedor y las codificadas en la tabla [Categoría de descuento de compras<!-- Categoria sconto acquisti -->](/docs/configurations/tables/purchase/category-discounts-price-management/); tal asignación debe hacerse en el procedimiento de [Correspondencia categorías de descuento compras/ventas](/docs/purchase/price-control/correspondence).
:::

Una vez identificados los artículos a importar, haciendo clic en el botón **Importación<!-- Importazione -->** en la barra ribbon se abrirá el procedimiento [Importación desde Precios proveedor<!-- Importazione da Prezzi fornitore -->](/docs/purchase/purchase-price-lists/procedures/import-price).