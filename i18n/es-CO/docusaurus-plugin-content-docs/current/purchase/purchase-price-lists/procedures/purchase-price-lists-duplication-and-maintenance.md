---
title: Duplicación y mantenimiento de listas de precios de proveedores
sidebar_position: 3
ai_generated: true
---

Este procedimiento permite actualizar las listas de precios de proveedores<!-- listini fornitori -->.       

### Filtros disponibles

Es posible filtrar los resultados por: *Fecha inicio/fin de validez*, *Moneda*, *Artículo<!-- Articolo -->*, *Código de barras<!-- Barcode -->* del artículo o solo por los artículos que han sido *movimentados<!-- movimentati -->*, es decir, vinculados a documentos desde una fecha determinada.     

Si el filtro por *Fecha inicio de validez* está completado, la aplicación muestra solo los artículos<!-- articoli --> de las listas válidas para la fecha ingresada. En caso contrario, se mostrarán todos los artículos<!-- articoli -->, incluidos los de las listas que ya no están vigentes.         

### Cuadrícula de artículos<!-- Griglia articoli -->

Una vez seleccionados los filtros deseados, al hacer clic en *Buscar<!-- Ricerca -->* la cuadrícula se llenará con todos los artículos<!-- articoli --> que cumplen con las características solicitadas. Las columnas de la cuadrícula son:      
- **Cuenta<!-- Conto -->/Subcuenta<!-- Sottoconto -->/Descripción**: contiene el titular de la lista de precios<!-- listino -->, si es personalizada.       
- **Clase/Código/Descripción del artículo<!-- articolo -->**: datos identificativos del artículo<!-- articolo --> de la lista de precios<!-- listino -->.      
- **Moneda<!-- Divisa -->**: muestra la moneda de la lista de precios<!-- listino -->.    
- **Unidad de medida**: este dato también se toma de la lista de precios<!-- listino -->.      
- **Precio**: en este campo se muestra el precio del artículo<!-- articolo --> presente en la lista de precios<!-- listino -->.        
- **Descuento<!-- Sconto -->**: en este campo se muestra el posible descuento presente en la lista de precios<!-- listino --> (solo descuento fijo).
- **Precio neto**: en esta columna se muestra el *Precio* neto de los *Descuentos<!-- Sconti -->*.    
- **Fecha validez desde<!-- Data validità da -->**: en este campo se muestra la fecha de inicio de validez de la lista de precios<!-- listino -->.      
- **Fecha validez hasta<!-- Data validità a -->**: en este campo se muestra la posible fecha de fin de validez.      
- **Fecha del último documento<!-- Data ultimo documento -->**: en este campo se introduce la fecha del DDT más reciente que tiene artículo<!-- articolo --> y lista de precios<!-- listino -->.    
- **Cantidad<!-- Quantità -->**: indica la cantidad a la que se refiere el precio.   
- **Variante/Descripción de la variante**: muestra el código y la descripción de la variante, si existe.   
- **Movimiento<!-- Movimento -->**: el indicador activo señala que se han registrado movimientos de almacén<!-- magazzino --> con este artículo<!-- articolo --> y lista de precios<!-- listino -->.   

### Barra de herramientas<!-- Barra degli strumenti -->

Los botones disponibles en la barra de opciones son los siguientes:     
- **Actualizar<!-- Aggiorna -->**: abre un pop up para proceder con la actualización del precio del artículo<!-- articolo --> en la lista de precios<!-- listino -->; se deben especificar:
1. **Fecha inicio de validez<!-- Data inizio validità -->** de las líneas de la lista de precios<!-- listino --> a actualizar (opcionalmente también una **Fecha de fin de validez<!-- Data fine validità -->** que no es obligatoria)
2. **Redondeo<!-- Arrotondamento -->** que contiene las políticas de variación de precios y descuentos<!-- sconti --> de la lista de precios<!-- listino -->, o bien
3. **Porcentaje de incremento<!-- Percentuale di incremento -->**, eliminando el código de redondeo e ingresando manualmente el porcentaje (o el valor).
4. **OK** para ejecutar la actualización.

:::important Recuerda
Si no se especifica la *Fecha inicio de validez<!-- Data inizio validità -->*, la actualización no tiene ningún efecto y no se ejecuta.
:::

- **Cerrar<!-- Chiudi -->**: abre un pop up en el que se debe ingresar la *Fecha de fin de validez<!-- Data fine validità -->* para las líneas de la lista de precios<!-- listino --> seleccionadas; la *Fecha de fin de validez<!-- Data di fine validità -->* debe ser superior a la fecha más reciente del último documento relacionado con las líneas que se desean cerrar (hacer caducar).      
- **Duplicar listas de precios<!-- Duplica listini -->**: abre un pop up y, para las líneas seleccionadas, crea o añade nuevas filas a una nueva lista o a una ya existente; es posible, para las filas seleccionadas, crear una nueva lista especificando el *Proveedor<!-- Fornitore -->*, que puede ser distinto del de referencia, la *Fecha validez desde<!-- Data validità da -->* y la *Moneda<!-- Divisa -->*; con la opción *Mantener las mismas fechas de la lista de origen<!-- Mantieni le stesse date del listino di origine -->* se crea una lista asignada a un proveedor diferente pero con las mismas fechas de validez.
- **Descuentos<!-- Sconti -->**: abre un pop up para asignar a las líneas seleccionadas descuentos<!-- Sconti --> de línea, agregándolos a los presentes o sustituyéndolos usando la casilla *Eliminar descuentos anteriores<!-- Cancella Sconti precedenti -->*.
- **Reabrir listas de precios<!-- Riapertura listini -->**: si se usa, en caso de líneas con *Fecha de fin de validez<!-- Data fine validità -->*, dichas líneas vuelven a la lista sin fecha de fin de validez.