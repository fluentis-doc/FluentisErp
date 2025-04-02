---
title: importazione listini vendita
sidebar_position: 2
---

En este documento se explicará cómo **Importar listas de proveedores** dentro de **Fluentis** utilizando una **hoja electrónica**.

Esta importación es posible gracias al uso de los **BizLink Parameters**, ya que cada vez que se procese una línea, serán invocados.

### Cómo abrir la importación a través de hoja electrónica

Haga clic en **Herramientas** (por defecto se encuentra en el lado derecho de Fluentis).

Haga clic en la sección **BizLink**.

Haga clic en **Importación On Demand > Registros > Importación de Artículos y Listas de Ventas** como se muestra en la figura a continuación.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image03.png)

### Sección de Datos

En esta sección introduciremos los datos que luego se harán permanentes al guardar en la base de datos de **Fluentis**.

Ahora se visualiza en pantalla la hoja electrónica para la importación.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image04.png)

Desde este punto se pueden tomar varios caminos:

1. Importar la hoja electrónica ya completada, **Archivo > Abrir**.  
2. Añadir las diversas columnas copiando y pegando desde la lista guardada en nuestro PC.  
3. Guardar este archivo (**Archivo > Guardar**) en nuestro PC, para luego añadir los diversos datos y reimportarlo posteriormente en Fluentis (ver punto 1). Esto puede ser muy útil para pasar la plantilla de la hoja electrónica de importación para llenar las futuras listas que nos enviarán los proveedores.  
4. Añadir manualmente los campos.

**ATENCIÓN**: si tenemos una hoja electrónica guardada en nuestro PC, debe seguir el esquema de la hoja en la figura anterior. Es decir, el mismo orden de columnas, tipo de dato, etc. Los detalles se explican en el siguiente párrafo.

### Inserción de campos

Al ingresar un campo, hay que tener en cuenta muchos aspectos, incluidos tipo, longitud máxima, si es requerido, etc.

Indicaciones generales:

- Si el campo está escrito en rojo, es un campo obligatorio.
- Si el nombre de la celda está resaltado en verde, es una **sección**.
- Si el nombre de la celda está resaltado en amarillo, es un **campo**.
- Campo: indica si es obligatorio o no el ingreso.
- Tipo: indica el tipo del campo.
- Formateo de Excel: indica el formateo recomendado de Excel para evitar entradas erróneas, consulte al final del documento Consejos y advertencias útiles.
- Longitud: indica si el campo tiene un límite de caracteres que se debe respetar.
- Descripción: breve descripción del campo.
*Ejemplo*: ejemplo real de lo que se puede escribir en ese campo.
- Mapeo tabla/columna: si está presente, indica el mapeo respectivo del campo en la base de datos; para más detalles, consulte al final del documento Consejos y advertencias útiles.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image05.png)

**Datos del artículo**:

Clase:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: /
- Descripción: código relacionado con la clase del artículo.
*Ejemplo*: “1” corresponde a semielaborados, “IMB” corresponde a envases.
- Mapeo tabla/columna: select MBDC_Clase from MB_Classi.

Código:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: /
- Descripción: código de referencia al artículo.
*Ejemplo*: 02030508.

Descripción:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: /
- Descripción: descripción del artículo, podría corresponder también al código.
*Ejemplo*: pelota de tenis sensible a la rotación, puede corresponder al código del artículo.

Unidad de medida:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: 3 caracteres
- Descripción: código relacionado con la medida utilizada para el artículo en cuestión.
*Ejemplo*: “cm” corresponde a centímetros, “UDC” corresponde a palé.
- Mapeo tabla/columna: select MBUM_Codice from MB_UnitaMisura.

IVA:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: 3 caracteres
- Descripción: código relacionado con el porcentaje de IVA aplicado a este artículo.
*Ejemplo*: “22” corresponde al 22% de IVA, “944” Exento art. 40 c. 4 bis DL 331.
- Mapeo tabla/columna: select MBIV_Code from MB_iva.

Cat Merc:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: 3 caracteres
- Descripción: código relacionado con la categoría mercantil del artículo en cuestión.
*Ejemplo*: “206” corresponde a adhesivos, “211” corresponde a materias primas.
- Mapeo tabla/columna: select MBCM_Codice from MB_CatMerceologica.

Fatt acq:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: 10 caracteres
- Descripción: código relacionado con el tipo de factura emitida para el artículo en cuestión.
*Ejemplo*: “4” corresponde a la adquisición de semielaborados, “1” corresponde a materias primas.
- Mapeo tabla/columna: select MBFA_TipoFatt from mb_TipoFattAcq.

Fatt vend:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: 10 caracteres
- Descripción: código relacionado con el tipo de factura emitida para el artículo en cuestión.
*Ejemplo*: “4” corresponde a la adquisición de semielaborados, “1” corresponde a materias primas.
- Mapeo tabla/columna: select MBFA_TipoFatt from mb_TipoFattVend.

Nomenc. Intra:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: 50 caracteres
- Descripción:
*Ejemplo*: “32049000” corresponde a colorantes.
- Mapeo tabla/columna: select INCN_CodNomencl from IN_CodNomenc.

Código de barras:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: /
- Descripción: código de barras del artículo en cuestión.
*Ejemplo*: ABC-1234.

Tipo de lote:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: 2 caracteres
- Descripción: tipo de lote al que pertenece el artículo.
*Ejemplo*: “4” corresponde a la adquisición de semielaborados, “1” corresponde a materias primas.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image06.png)

**Datos de la lista**:

Precio:

- Campo: obligatorio
- Tipo: decimal
- Formateo Excel: moneda, símbolo ninguno
- Longitud máxima: /
- Descripción: precio de lista del artículo.
*Ejemplo*: “10.99”, “123.45”.

Unidad de medida:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: /
- Descripción: se utiliza para definir el precio en relación con la cantidad (p. ej., precio por kilo, precio por metro cuadrado).
*Ejemplo*: “kg” corresponde a kilogramos.
- Mapeo tabla/columna: select MBUM_Codice from MB_UnitaMisura.

Cantidad:

- Campo: no obligatorio
- Tipo: decimal
- Formateo Excel: número, posición decimales = 2
- Longitud máxima: /
- Descripción: cantidad del artículo a la que se refiere el precio anterior.
*Ejemplo*: 500.

Tipo de escalón Qty-Val-PxQ:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: /
- Descripción: Indica si los valores de escalón aplicados son a cantidad, valor o precio por cantidad. Generalmente se utiliza el de cantidad, es decir: dada una cierta cantidad, aplica el descuento del x%. 
*Ejemplo*: Qty, Val, PxQ.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image07.png)

**Descuentos**:

Descuento1:

- Campo: no obligatorio
- Tipo: decimal
- Formateo Excel: número, posición decimales = 2
- Longitud máxima: /
- Descripción: posibles descuentos aplicables.
*Ejemplo*: “50+10” en el total de la fila se realiza un primer descuento del 50% y sobre el nuevo total un segundo descuento del 10%.

Lo mismo aplica para los otros dos descuentos, solo cambia el valor del descuento.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image08.png)

**Descuentos a cantidad (Tipo Escalón ‘Qty')**:

Descuento1:

- Campo: no obligatorio
- Tipo: decimal
- Formateo Excel: número, posición decimales = 2
- Longitud máxima: /
- Descripción: descuento aplicado si se adquiere una determinada cantidad del artículo en cuestión.
*Ejemplo*: 10.

Cantidad1:

- Campo: no obligatorio
- Tipo: decimal
- Formateo Excel: número, posición decimales = 2
- Longitud máxima: /
- Descripción: cantidad mínima necesaria para obtener el respectivo descuento.
*Ejemplo*: 550.

Lo mismo aplica para los otros dos descuentos y cantidades, solo cambia el valor correspondiente.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image09.png)

**Descuentos a valor (Tipo Escalón ‘Val')**:

Descuento1:

- Campo: no obligatorio
- Tipo: decimal
- Formateo Excel: número, posición decimales = 2
- Longitud máxima: /
- Descripción: descuento aplicado si se supera un determinado importe de la fila.
*Ejemplo*: 20.

Valor1:

- Campo: no obligatorio
- Tipo: decimal
- Formateo Excel: número, posición decimales = 2
- Longitud máxima: /
- Descripción: importe mínimo necesario para obtener el respectivo descuento.
*Ejemplo*: 950.

Lo mismo aplica para los otros dos descuentos y valores.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image10.png)

**Precio por cantidad (Tipo Escalón ‘PxQ')**:

Precio1:

- Campo: no obligatorio
- Tipo: decimal
- Formateo Excel: número, posición decimales = 2
- Longitud máxima: /
- Descripción: precio unitario aplicado si se supera una determinada cantidad.
*Ejemplo*: 3.99.

Cantidad1:

- Campo: no obligatorio
- Tipo: decimal
- Formateo Excel: número, posición decimales = 2
- Longitud máxima: /
- Descripción: cantidad mínima necesaria para obtener el respectivo precio unitario.
*Ejemplo*: 250.

Lo mismo aplica para los otros dos precios y cantidades relacionadas, solo cambia el valor correspondiente.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image11.png)

**Otros datos**:

Notas:

- Campo: no obligatorio
- Tipo: cadena
- Formateo Excel: texto
- Longitud máxima: /
- Descripción: notas adicionales.
*Ejemplo*: no exponer a la luz solar.
- Mapeo tabla/columna: select MBNC_Codice from MB_NoteCodificat.

### BizLink Parameters

Estos parámetros servirán para procesar las líneas ingresadas en la sección de Datos. Como se puede observar en la imagen, algunos campos ya están pre-llenados, pero nada impide que los modifiquemos.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image12.png)

1    BizLink Spreadsheet:

- Campo: no debe ser ingresado/no tocar.

2    Idioma:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: código ISO correspondiente al idioma.
*Ejemplo*: “it-IT” representa el idioma italiano, “en-US” representa el idioma inglés en América.

3    Empresa:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: es un campo pre-llenado, ya que toma los valores ya dentro de Fluentis, que se pueden ver en la esquina superior izquierda.
*Ejemplo*: “1” corresponde a la empresa demo.
- Mapeo tabla/columna: Select MBSC_Code from MB_Soc.

4    División:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: como para la empresa, es pre-llenado.
*Ejemplo*: “1” corresponde a la sede legal, “2” a la sede operativa en Milán.
- Mapeo tabla/columna: select MBDP_Code from MB_Dep.

5    País:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: país en el que se encuentra la división para la que se importó la lista.
*Ejemplo*: “GB” corresponde a Gran Bretaña, “USA” corresponde a los Estados Unidos.
- Mapeo tabla/columna: select MBNZ_Codice from MB_Nazioni.

6    Tipo de código de barras:

- Campo: obligatorio solo si en la sección de datos se ha ingresado el código de barras de al menos un artículo.
- Tipo: cadena.
- Descripción: se utiliza para indicar el tipo de código de barras utilizado.
*Ejemplo*: “39” corresponde al COD39.
- Mapeo tabla/columna: select MBBC_Codice from MB_BarCode.

7    Naturaleza de la lista (GEN-CUST):

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: se utiliza para indicar si la lista es estándar o personalizada. GEN generalmente se indica para listas que pueden ser pasadas de cliente a cliente ya que serán iguales. Si es CUST corresponde a una lista personalizada para el cliente, es decir, creada especialmente para el cliente cuyo cuenta y subcuenta se ingresan en los parámetros.
*Ejemplo*: “GEN” corresponde a general, “CUST” a personalizado.
- Mapeo tabla/columna:

8    Tipo de lista:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: se utiliza para indicar el tipo de lista, que debe ingresarse si la naturaleza de la lista = ”GEN”, de lo contrario no debe ser ingresado.
*Ejemplo*: “GEN” corresponde a general, “PRO” a promocional.
- Mapeo tabla/columna: select MBLV_List from MB_LisVen.

9    Cuenta:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: cuenta del cliente, maestro del cliente. Si la lista es personalizada, la cuenta y subcuenta se crearán como se indique en los respectivos parámetros. Si es general, no debe ser ingresado.
*Ejemplo*: “1701” el cual tiene 3 subcuentas (ver más abajo).
- Mapeo tabla/columna: select MBPC_Conto from MB_PiaCon.

10   Subcuenta:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: subcuenta del cliente, submaestro del cliente. Si la lista es personalizada, la cuenta y subcuenta se crearán como se indica en los respectivos parámetros. Si es general, no debe ser ingresado.
*Ejemplo*: para la cuenta 1701 vista anteriormente, hay 3 subcuentas: “001” que corresponde a cuentas, “002” que corresponde a valores DDTti y “” (sin subcuenta especificada) que corresponde a disponibilidades líquidas.
- Mapeo tabla/columna: select BPC_SottoConto from MB_PiaCon.

11   Divisa:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: divisa con la que interpretar los valores ingresados en la sección de datos.
*Ejemplo*: “EUR” corresponde a Euro, “USD” corresponde a Dólar.
- Mapeo tabla/columna: select MBDI_Divisa from MB_Divise.

12   Redondeo:

- Campo: obligatorio.
- Tipo: decimal.
- Descripción: Indica si redondear hacia arriba o hacia abajo.
*Ejemplo*: 1 corresponde a ninguno, 2 corresponde a redondeo hacia arriba, 3 corresponde a redondeo hacia abajo.
- Mapeo tabla/columna: select MBRNT_Id from MB_RoundingType.

13   Inicio de validez:

- Campo: obligatorio.
- Tipo: datetime.
- Descripción: indica el inicio de validez de la lista ingresada (dd/mm/aaaa).
*Ejemplo*: 1/10/2018.

14   Fin de validez:

- Campo: no obligatorio.
- Tipo: datetime.
- Descripción: si está presente, indica el fin de validez de la lista ingresada (dd/mm/aaaa).
*Ejemplo*: 31/12/2027.

15   Tipo de descuento lista1:

- Campo: no obligatorio.
- Tipo: cadena.
- Descripción: si está presente, indica el tipo de descuento aplicado relacionado con la sección **Descuentos**.
*Ejemplo*: “4” corresponde a descuento final sobre la venta.

- Mapeo tabla/columna: select MBST_Code from MB_Sconti.

16   Tipo de descuento lista2:

- Campo: no obligatorio.
- Tipo: cadena.
- Descripción: si está presente, indica el tipo de descuento aplicado relacionado con la sección **Descuentos**.
*Ejemplo*: “4” corresponde a descuento final sobre la venta.

- Mapeo tabla/columna: select MBST_Code from MB_Sconti.

17   Tipo de descuento lista3:

- Campo: no obligatorio.
- Tipo: cadena.
- Descripción: si está presente, indica el tipo de descuento aplicado relacionado con la sección **Descuentos**.
*Ejemplo*: “4” corresponde a descuento final sobre la venta.

- Mapeo tabla/columna: select MBST_Code from MB_Sconti.

18   Tipo de descuento a cantidad:

- Campo: no obligatorio.
- Tipo: cadena.
- Descripción: si está presente, indica el tipo de descuento aplicado.
*Ejemplo*: “4” corresponde a descuento final sobre la venta.

- Mapeo tabla/columna: select MBST_Code from MB_Sconti.

19   Tipo de descuento a valor:

- Campo: no obligatorio.
- Tipo: cadena.
- Descripción: si está presente, indica el tipo de descuento aplicado.
*Ejemplo*: “4” corresponde a descuento final sobre la venta.

### Iniciar importación

Una vez que se han ingresado los datos, para iniciar la importación, haga clic en el botón presente en el menú de importación, en la parte superior izquierda, que también se llama “Importación” como se muestra en la figura a continuación.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image13.png)

### Conclusiones – Inserción realizada

Si todo va bien, no aparecerá ningún mensaje de error. Para una mayor verificación de éxito, verifique en el registro de artículos (Inicio => Artículos) si están presentes los importados a través de la lista de ventas. De lo contrario, aparecerá en pantalla un mensaje de error que indicará qué parámetros y/o campos no son correctos. Para interpretar el error, consulte Consejos y advertencias útiles en el último párrafo.

### Consejos y advertencias útiles

**Formateo de Excel recomendado**:

- Para una importación correcta, se recomienda encarecidamente formatear las columnas según el tipo indicado en la sección “Formateo Excel” de cada campo. Por ejemplo, si el tipo del campo es decimal y en ese campo se va a ingresar una moneda, formatear el campo como moneda. Esto es porque, si no se formatea la celda, Excel elimina los dígitos no significativos. Para aplicar el formateo, siga los siguientes pasos:

Primero, seleccione la columna deseada como en la figura a continuación:

![](/img/it-it/applications/bizlink/import-sales-price-lists/image14.png)

Luego, después de posicionarse con el cursor dentro de la columna, presione el botón derecho del mouse.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image15.png)

Seleccione presionando el botón izquierdo ** > Formato de celdas...**

![](/img/it-it/applications/bizlink/import-sales-price-lists/image16.png)

En esta pantalla, podrá formatear la columna seleccionada. Según las indicaciones proporcionadas en la Inserción de campos, seleccione la categoría adecuada, con las especificaciones relacionadas (p. ej., moneda, símbolo ninguno). El mismo proceso es posible hacerlo desde la hoja electrónica presente dentro de Fluentis.

**Atención**: El caso clásico se refiere a códigos que contienen ceros, aparentemente, no significativos por ejemplo “001”. Si el campo está formateado como genérico o número, los ceros serían descartados; si se formatea como cadena, se mantendrán.

**Mapa tabla/columna**:

- Si en la Inserción de campos hay una entrada de mapa tabla/columna, significa que el valor ingresado dentro del campo para la importación debe ya estar presente en la base de datos. Para visualizar los datos relativos presentes en la base de datos, basta seguir los siguientes pasos, utilizando como ejemplo la clase de artículos y el mapeo correspondiente:

select MBDC_Clase from MB_Classi (ß este es el mapeo). Ejecutamos la consulta en “Microsoft SQL Server Management Studio” y obtenemos el siguiente resultado:

![](/img/it-it/applications/bizlink/import-sales-price-lists/image17.png)

Visto así no comunica nada, para entender su significado, después de la cláusula de select, reemplazamos el símbolo “*” por el campo para componer la nueva consulta. En este caso, tendríamos select * from MB_Class, que selecciona todo el contenido de la tabla; ahora ejecutamos.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image18.png)

Esto es útil ya que, como se muestra en la figura, a través de la descripción (MBDC_Descr), es posible entender qué representa el campo y verificar si lo que se inserta está presente o no en la base de datos.

Este procedimiento recién descrito es universal, es decir, vale para cualquier campo.

La misma representación se puede ver en Fluentis:

Desde la página principal de Fluentis, seleccione **Artículos > Artículos** (ver fig. abajo).

![](/img/it-it/applications/bizlink/import-sales-price-lists/image19.png)

Luego en la máscara de búsqueda que aparece, haga clic con el botón izquierdo del mouse en el triángulo junto a artículos, que abre un desplegable donde es posible visualizar la clase de los artículos con la descripción correspondiente, como en la figura.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image20.png)

Esto es para la clase de artículos. Para otros campos, se puede ejecutar el mismo procedimiento, pero en diferentes ubicaciones.

Por lo tanto, debemos ingresar uno de los valores presentes, de lo contrario, la importación no se realizará correctamente y nos comunicará un error. Esto aplica para cada campo que tiene un mapeo de tabla/columna.

Si queremos añadir un campo con un mapeo no presente en la base de datos, debe insertarse ya sea a través de una consulta o desde Fluentis; en este caso, la consulta de inserción se desaconseja, ya que es más complicada de componer que la visualización mencionada anteriormente. El procedimiento recomendado es la inserción desde Fluentis. En el caso de la clase de artículos, desde artículos (figura anterior), haga clic derecho dentro del filtro de búsqueda de la clase de artículo y seleccione **Abrir formulario**.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image21.png)

En el formulario que se abrirá, presione el botón **Buscar** para visualizar las clases de artículo presentes.

![](/img/neutral/common/search.png)

Debajo de la última fila presente, hay una fila vacía. Esa se usa para la inserción de nuevos valores.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image23.png)

Ahí deben escribirse los nuevos valores a insertar, y una vez hecho esto, basta con presionar Enter. 

Este procedimiento es análogo para otros campos; la única diferencia es la ubicación de los filtros de búsqueda, donde debe presionar el botón izquierdo para abrir el formulario.

**Errores**:

- En caso de que la importación falle, como se mencionó anteriormente, aparecerá en pantalla un mensaje de error.

Si se cometió un error en la parte de Datos, es posible rastrear la línea que contiene el error, ya que por ejemplo se indicará “System.ArgumentException: Error importing row 4”. En este caso (ver figura abajo), el error se encontrará en la línea 4, la cual no es la fila real que contiene el error. Para entender exactamente qué línea contiene el error, usando los números en la columna de la izquierda, hay que sumar 1. Entonces:

Número real de la línea que contiene error = Número de error en la línea + 1.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image24.png)

Para interpretar el error, en el mensaje del mismo, siga los siguientes pasos: en la misma línea que contiene el número de línea visto anteriormente, se indica el objeto al que se refiere, luego el error real y, finalmente, la propiedad relacionada en la que se detectó el error. Siempre en el ejemplo mencionado anteriormente “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceListsnot-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. En este caso, como se puede ver en la imagen anterior, la unidad de medida relacionada con el precio de compra de la lista ha generado el error porque es nula. De hecho, su inserción es obligatoria.

Si el error se cometió en la parte de parámetros, el mensaje será similar; el método de solución sigue siendo el anterior, entonces, según la propiedad, verifique la correcta inserción de la misma.

**Atención**: Si se encuentra una línea completamente vacía, no se mostrará ningún error, pero la importación se detendrá ahí. Por ejemplo, si la primera línea (línea n. 4) está vacía por algún motivo y debajo (desde la línea n. 5 en adelante) se encuentran las filas pobladas, no se importará nada.

**Atención**: Si se inserta una lista de 10 líneas, por ejemplo, y en la línea n. 7 ocurre un error, las primeras 6 líneas no habiendo causado problemas han sido insertadas. Si no se cambian valores en las primeras 6 líneas (y si, por supuesto, se ha corregido el error), al reiniciar la importación no habrá problemas, ni duplicaciones, ya que se buscará si el artículo ya está presente. Si se cambia incluso un solo valor, dicho artículo se insertará como un nuevo artículo.

Finalmente, otro mensaje de error que puede ocurrir es el siguiente.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image25.png)

Como se puede ver en la imagen anterior, este tipo de mensajes son más fáciles de interpretar, ya que se indica la celda exacta con el error correspondiente. En este caso, en la celda F:4 no hay ningún valor presente.