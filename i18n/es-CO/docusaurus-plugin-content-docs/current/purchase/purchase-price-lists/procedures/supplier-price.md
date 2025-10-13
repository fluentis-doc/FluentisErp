---
title: Precios de proveedor (Prezzi fornitore)
sidebar_position: 1
---

El formulario se abre a través de la ruta **Compras > Listas de proveedores > Procedimientos > Precios de proveedor**.

En este formulario es posible consultar los resultados de la [Importación de precios y artículos de proveedor](/docs/applications/bizlink/template-example/price-item-supplier). Todos los artículos importados a través de bizlink con sus respectivos precios se insertan en esta máscara desde la cual es posible consultarlos y elegir cuáles tratar.

Este procedimiento se utiliza mucho para la importación de catálogos: mediante la *importación de precios y artículos de proveedor* se insertan en esta máscara todos los artículos presentes en el catálogo del proveedor. Posteriormente, el usuario puede buscar y seleccionar los artículos que desea gestionar. La máscara permite conocer el precio de compra de un artículo sin que este haya sido codificado y registrado previamente en una lista, y posteriormente codificar solo los artículos que se gestionarán efectivamente.

Los datos principales de la cuadrícula son:  
- **classe articolo**: este dato estará presente solo en caso de que el artículo exista previamente; de lo contrario, si solo fue importado, no tendrá una clase de artículo asignada.  
- **codice articolo**: este dato sigue las mismas reglas que el anterior; es posible distinguir los artículos importados de los no importados también por el hecho de que los primeros tienen un color diferente.  
- **fornitore**: este dato indica el proveedor del cual se importó el catálogo y poblará el *Proveedor preferencial* en el registro del artículo, una vez que se cree.  
- **data importazione**: contiene la fecha en la que ocurrió la importación en Excel.  
- **data inizio validità**: contiene la fecha de inicio de validez ingresada en la hoja de Excel.  
- **Código/Descripción de artículo de proveedor (Codice/Descrizione articolo fornitore)**: indica el código del artículo de proveedor que también se reflejará en el registro del artículo, pestaña [proveedores preferenciales](/docs/erp-home/registers/items/create-new-item).  
- **unità di misura**: indica la unidad de medida utilizada en el catálogo del proveedor.  
- **Cantidad (Qantità)**: indica la cantidad a la que se refiere el **Precio** del artículo.  
- **categoria sconto**: indica la categoría de descuento a la que pertenece el artículo y que debe estar asociada con la categoría de descuento de compras codificada en Fluentis. La columna *Categoría de descuento* también está presente en la [Definición de políticas de descuentos](/docs/purchase/price-control/definition), donde se pueden consultar los descuentos aplicados por el proveedor.  
- **sottocategoria sconto**: código que especifica mejor las subcategorías de pertenencia; se utiliza sobre todo para listas muy grandes. Los usuarios que deseen gestionar también la subcategoría de descuento deben consignar en el campo *Detalle de categoría de descuentos* de la [Definición de políticas de descuentos](/docs/purchase/price-control/definition) el mismo código que aparece en esta columna.  

:::important Recuerda
Antes de proceder con el procedimiento de **Importación de Precios de proveedor**, es necesario indicar una correspondencia entre la *Categoría de descuento* utilizada por el proveedor y las que están codificadas en la tabla [Categoría de descuento de compras](/docs/configurations/tables/purchase/category-discounts-price-management/); dicha asociación debe hacerse en el procedimiento de [Correspondencia de categorías de descuento de compras/ventas](/docs/purchase/price-control/correspondence). 
:::

Una vez identificados los artículos a importar, haciendo clic en el botón **Importación** en la barra de ribbons, se abrirá el procedimiento de [Importación de Precios de proveedor](/docs/purchase/purchase-price-lists/procedures/import-price).