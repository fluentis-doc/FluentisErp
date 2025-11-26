---
title: Importación desde Precios proveedores
sidebar_position: 2
ai_generated: true
---

El formulario se abre a través de la ruta **Compras > Listas de precios proveedores > Procedimientos > Importación de precios proveedores** y permite seleccionar para la importación los artículos previamente ingresados mediante la [Importación de precios y artículos de proveedor](/docs/applications/bizlink/template-example/price-item-supplier), disponible entre las *importaciones bajo demanda* de Bizlink.

Mediante este procedimiento es posible crear o actualizar los datos maestros<!-- anagrafiche --> de los artículos seleccionados y crear una nueva lista de precios de proveedor<!-- listino fornitore --> con los precios actualizados.

:::important Recuerda
Antes de proceder con la importación de los artículos es necesario indicar una correspondencia entre la *Categoría de descuento* utilizada por el proveedor y las codificadas en la tabla [Categoría de descuento de compras](/docs/configurations/tables/purchase/category-discounts-price-management/); esta asociación debe realizarse en el procedimiento de [Correspondencia de categorías de descuento de compras/ventas](/docs/purchase/price-control/correspondence).
:::

### Filtro<!-- Filtro -->

En la cuadrícula principal se muestran los mismos resultados del formulario [Precios de proveedor](/docs/purchase/purchase-price-lists/procedures/supplier-price), filtrados según los datos ingresados en la sección superior. Los artículos pueden ser seleccionados para la importación definitiva marcando la casilla junto a la *Clase de artículo*. Los artículos que ya han sido codificados tendrán un color de fila diferente.  
En la segunda cuadrícula, en cambio, se listan todos los artículos seleccionados con la casilla activada en la primera cuadrícula.

*Botones específicos*:      
> **Importar**: para ejecutar la importación de los artículos seleccionados, según los *Parámetros* ingresados en la pestaña siguiente.  
> **Verificar la selección**: permite activar las casillas de las filas seleccionadas en la cuadrícula.  
> **Desmarcar**: permite desactivar las casillas de las filas seleccionadas en la cuadrícula.  

### Parámetros<!-- Parametri -->

En esta pestaña es posible elegir qué información incluir en los datos maestros<!-- anagrafica --> del artículo y los parámetros según los cuales crear la lista de precios de proveedor<!-- listino fornitore -->.

- **Crear artículo**: si está activada permite la creación de los datos maestros<!-- anagrafica --> de los artículos seleccionados, si no existen.

- **Actualizar campos del artículo**: permite seleccionar los datos a sobrescribir en el dato maestro<!-- anagrafica --> a actualizar. En el caso de la creación de un nuevo artículo, los datos relativos a las casillas activas serán incorporados en los nuevos datos maestros<!-- anagrafica -->. Los datos que pueden ser actualizados son: *Descripción*, *Código comercial*, *Código de barras*, *Empaque*, *Peso*, *Nomenclatura*, *Categoría de descuento Compras<!-- Categoria sconto Acquisti -->*, *Categoría de descuento Ventas*, *Subcategoría*, *Fórmula*, *Envase retornable*.  

- **Crear lista de precios de proveedor**: si está activada permite la creación de la lista de precios de proveedor<!-- listino fornitore --> para los artículos seleccionados. Los datos obligatorios para la creación de la lista son **Fecha de inicio de validez** y **Divisa**. Opcionalmente también es posible ingresar la **Fecha de fin de validez**.

- **Cuenta/Subcuenta<!-- Conto/Sottoconto -->**: indica el proveedor para el que crear la lista de precios; se mostrará también en el dato maestro<!-- anagrafica --> del artículo como proveedor preferencial.

En la tercera columna de parámetros se encuentran algunos datos utilizados solo para la creación de nuevos datos maestros<!-- anagrafiche -->:
   - **Clase**: si la clase<!-- classe --> indicada para el artículo en la cuadrícula de resultados no está codificada en el sistema, se utilizará la clase<!-- classe --> indicada en este campo.
   - **IVA**: indica la tasa de IVA a atribuir al artículo.
   - **Unidad de medida del artículo**: indica la unidad de medida principal a usar para el artículo.
   - **Facturación compras/ventas**   
   - **Unidad de medida del precio**: indica la unidad de medida a la cual se refiere el precio de la lista de proveedor<!-- listino fornitore -->.
   - **Unidad de medida de peso**: indica la unidad de medida a emplear para los pesos.
   - **Fórmula**: indica la [fórmula de actualización de precios](/docs/purchase/price-control/formulas) asociada al artículo.
   - **Tipo de descuento**
   - **Código de barras**

### Errores<!-- Errori -->

En la pestaña **Errores** es posible consultar los posibles errores ocurridos.

En la cuadrícula superior se mostrarán los artículos para los cuales la importación no se realizó con éxito, mientras que en la cuadrícula inferior se indicará también el *Código de error*.

### Resultados<!-- Risultati -->

En la pestaña **Resultados** se listan los artículos importados exitosamente.