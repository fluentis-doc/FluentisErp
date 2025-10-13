---
title: Importación de Precios de Proveedores (Importazione da Prezzi fornitori)
sidebar_position: 2
---

El formulario se abre a través de la ruta **Compras  Listas de proveedores  Procedimientos  Importación de precios de proveedores** y permite seleccionar para la importación los artículos previamente ingresados a través de la [Importación de precios y artículos de proveedores](/docs/applications/bizlink/template-example/price-item-supplier).

Mediante este procedimiento es posible crear o actualizar los registros de los artículos seleccionados y crear una nueva lista de precios de proveedor con los precios actualizados.

:::important Recuerda (Ricorda)
Antes de proceder con la importación de los artículos, es necesario indicar una correspondencia entre la *categoria sconto* utilizada por el proveedor y las categorías codificadas en la tabla [Categoría de descuento de compras (Categoria sconto acquisti)](/docs/configurations/tables/purchase/category-discounts-price-management/); dicha correspondencia debe hacerse en el procedimiento de [Correspondencia de categorías de descuento de compras/ventas (Corrispondenza categorie sconto acquisti/vendite)](/docs/purchase/price-control/correspondence).
:::

### Filtro

En la cuadrícula principal se muestran los mismos resultados que en el formulario [Precios de proveedores (Prezzi fornitore)](/docs/purchase/purchase-price-lists/procedures/supplier-price), filtrados según los datos ingresados en la sección superior. Los artículos pueden ser seleccionados para la importación definitiva marcando el indicador junto a la *classe articolo*. Los artículos que ya han sido codificados tendrán un color de fila diferente.  
En la segunda cuadrícula se muestran todos los artículos seleccionados con el indicador en la primera cuadrícula.

*Botones específicos*:  
> **import**: para llevar a cabo la importación de los artículos seleccionados, según los *Parámetros* ingresados en la pestaña siguiente.  
> **controlla la selezione**: permite activar los indicadores de las filas seleccionadas en la cuadrícula.  
> **smarcare**: permite desactivar los indicadores de las filas seleccionadas en la cuadrícula.

### Parámetros

En esta pestaña es posible elegir qué información incluir en el registro del artículo y los parámetros según los cuales crear la lista de precios del proveedor.

- **crea articolo**: si está activo, permite la creación del registro de los artículos seleccionados, si no existen.

- **Actualizar campos del artículo (Aggiorna campi articolo)**: permite seleccionar qué datos sobrescribir en el registro que se va a actualizar. En caso de creación de un nuevo artículo, los datos relacionados con los indicadores activos se incluirán en el nuevo registro. Los datos que se pueden actualizar son: *descrizione*, *codice commerciale*, *barcode*, *confezionamento*, *peso*, *nomenclatura*, *categoria sconto acquisti*, *Categoría de descuento de Ventas (Categoria sconto Vendite)*, *sottocategoria*, *formula*, *imballo a rendere*.

- **crea listino fornitore**: si está activo, permite la creación de la lista de precios del proveedor para los artículos seleccionados. Los datos obligatorios para la creación de la lista son **data inizio validità** y **divisa**. Opcionalmente, también se puede ingresar la **data fine validità**.

- **conto/sottoconto**: indica el proveedor para el cual crear la lista; también se indicará en el registro de artículo como proveedor preferido.

En la tercera columna de parámetros hay algunos datos utilizados solo para la creación de nuevos registros:
  - **classe**: si la indicada para el artículo en la cuadrícula de resultados no está codificada en el sistema, se utilizará la clase indicada en este campo.  
  - **IVA**: indica la tasa de IVA que se atribuirá al artículo.  
  - **unità di misura articolo**: indica la UM principal que se utilizará para el artículo.  
  - **Facturación de compras/ventas (Fatturato acquisti/vendite)**  
  - **unità di misura prezzo**: indica la UM a la que se refiere el precio de la lista de proveedor.  
  - **um peso**: indica la unidad de medida que se utilizará para los pesos.  
  - **formula**: indica la [fórmula de actualización de precios (formula di aggiornamento prezzi)](/docs/purchase/price-control/formulas) que se vinculará al artículo.  
  - **tipo sconto**  
  - **barcode**  

### Errores

En la pestaña **Errores** es posible consultar los errores que hayan ocurrido.

En la cuadrícula superior se mostrarán los artículos para los cuales la importación no se realizó con éxito, mientras que en la inferior se indicará también el *codice errore*.

### Resultados

En la pestaña **Resultados** se muestran los artículos importados con éxito.