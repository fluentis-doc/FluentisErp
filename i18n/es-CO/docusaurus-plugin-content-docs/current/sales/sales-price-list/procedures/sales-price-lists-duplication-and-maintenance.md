---
title: Duplicar y mantenimiento de listas de precios de venta
sidebar_position: 6
ai_generated: true
---

Este procedimiento permite actualizar los artículos de las listas de precios de venta<!-- listini di vendita -->.

### Filtros disponibles<!-- Filtri disponibili -->

En la sección de filtros se puede elegir visualizar:
- **Todas** las tipologías de lista<!-- listino -->,
- solo las listas de tipo **Genérica<!-- Generico -->** o
- solo las listas **Personalizadas por cliente<!-- Personalizzati per cliente -->**.

Según la elección, en la parte derecha se activa la búsqueda por **Tipo de lista<!-- Tipo listino -->** o por **Cliente**.
Si se completa el filtro por *Fecha inicio de validez<!-- Data inizio validità -->*, la aplicación mostrará los artículos de las listas válidos en la fecha ingresada. De lo contrario, se mostrarán todos los artículos, incluso los de listas que ya no son válidas.
Es posible filtrar también por: Fecha de fin de validez<!-- Data fine validità -->, Moneda<!-- Divisa -->, Artículo<!-- Articolo -->, Código de barras del artículo o solo los artículos que hayan tenido movimientos<!-- movimentati -->, es decir, vinculados a documentos a partir de una fecha determinada.

### Cuadrícula de artículos<!-- Griglia articoli -->

Una vez seleccionados los filtros deseados, al hacer clic en Buscar<!-- Ricerca -->, la cuadrícula se llenará con todos los artículos que cumplen las características requeridas. Las columnas de la cuadrícula son:
- **Tipo de lista<!-- Tipo listino -->**: indica el tipo de lista<!-- listino -->, si es genérico, con la **Descripción** correspondiente.
- **Cuenta<!-- Conto -->/Subcuenta<!-- Sottoconto -->/Descripción**: contiene el titular de la lista<!-- listino -->, si es personalizada.
- **Clase/Código/Descripción del artículo**: datos identificativos del artículo de la lista<!-- listino -->.
- **Código de moneda<!-- Codice divisa -->**: muestra la moneda<!-- Divisa --> de la lista<!-- listino -->.
- **Código de unidad de medida<!-- Codice Unità di misura -->**: este dato también proviene de la lista<!-- listino -->.
- **Precio**: en este campo se muestra el precio del artículo presente en la lista<!-- listino -->.
- **Descuento**: en este campo se muestra el posible descuento presente en la lista<!-- listino --> (solo descuento fijo).
- **Precio neto**: en esta columna se muestra el precio neto de los descuentos.
- **Fecha validez desde<!-- Data validità da -->**: en este campo se indica la fecha de inicio de validez de la lista<!-- listino -->.
- **Fecha validez hasta<!-- Data validità a -->**: en este campo se muestra en cambio la eventual fecha de finalización de validez.
- **Fecha del último documento<!-- Data ultimo documento -->**: en este campo se inserta la fecha del documento más reciente (DDT) que contiene el artículo y la lista<!-- listino -->.

### Barra de herramientas<!-- Barra degli strumenti -->

Los botones disponibles en la ribbon bar son los siguientes:
- **Actualizar<!-- Aggiorna -->**: abre una ventana emergente para continuar con la actualización del precio del artículo en la lista<!-- listino -->; se debe especificar:
1. **Fecha de inicio de validez<!-- Data inizio validità -->** de las filas de la lista<!-- listino --> a actualizar (también puedes ingresar **Fecha de fin de validez<!-- Data fine validità -->** no obligatoria)
2. **Redondeo<!-- Arrotondamento -->** que contiene las políticas de cambio de precios y descuentos de la lista<!-- listino -->, o bien
3. **Porcentaje de incremento**, eliminando el código de redondeo y escribiendo manualmente el porcentaje.
4. **OK** para ejecutar la actualización.

:::note Nota
Si no se especifica la Fecha de inicio de validez<!-- Data inizio validità -->, la actualización no dará ningún resultado y no se ejecutará.
:::

- **Cerrar listas<!-- Chiudi Listini -->**: abre un nuevo formulario para forzar la *Fecha de fin de validez<!-- Data fine validità -->* en las filas de la lista<!-- listino --> seleccionadas; la *Fecha de fin de validez<!-- Data di fine validità -->* debe ser mayor que la última fecha del documento referida a las filas de la lista<!-- listino --> que se van a cerrar (dar de baja).
- **Duplicar listas<!-- Duplica listini -->**: abre una ventana emergente y, para las filas de lista<!-- listini --> seleccionadas, crea o agrega las nuevas filas a una nueva lista<!-- listino --> o a una lista ya existente; es posible, para las filas seleccionadas, crear una nueva lista<!-- listino --> especificando: si se desea crear una lista *General<!-- Generale -->* o *Personalizada<!-- Personalizzato -->*, el *Tipo de lista<!-- Tipo listino -->*, la *Fecha validez desde<!-- Data validità da -->* y la *Moneda<!-- Divisa -->*; con la opción *Mantener las mismas fechas de la lista de origen* se crea una lista<!-- listino --> con una tipología diferente pero con las mismas fechas de validez.
- **Descuentos<!-- Sconti -->**: abre una ventana emergente para asignar a las filas seleccionadas descuentos<!-- Sconti --> de fila, agregándolos a los existentes o sustituyéndolos usando el check *Eliminar descuentos anteriores<!-- Cancella Sconti precedenti -->*.
- **Reapertura de listas<!-- Riapertura listini -->**: si se usa, en caso de filas de la lista<!-- listino --> con *Fecha de fin de validez<!-- Data fine validità -->*, dichas filas se vuelven a mostrar en la lista<!-- listino --> *sin* fecha de fin de validez.