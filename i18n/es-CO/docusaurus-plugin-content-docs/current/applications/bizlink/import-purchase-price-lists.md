---
title: Importación de Listados de Proveedores (Importazione Listini Fornitore)
sidebar_position: 3
---

En este documento se explicará cómo **importar los listados de proveedores** dentro de **Fluentis** mediante el uso de una **hoja de cálculo**.

Esta importación es posible gracias al uso de los **BizLink Parameters**, ya que cada vez que se procesa una fila, se invocarán.

### Cómo abrir la importación a través de una hoja de cálculo

Haga clic en **strumenti** (normalmente se encuentra en el lado derecho de Fluentis).

Haga clic en la sección **BizLink**.

Haga clic en **Importación On Demand  >  Documentos de compra  >  Importación de Listados de Proveedores** como se muestra en la figura a continuación.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image03.png)  

### Sección de Datos

En esta sección ingresaremos los datos que luego se guardarán permanentemente en la base de datos de Fluentis.

Ahora en pantalla se mostrará la hoja de cálculo para la importación.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image04.png)  

A partir de este punto se pueden tomar diversas rutas:

1. Importar la hoja de cálculo ya completada, **Archivo > Abrir** (File > Open).
2. Agregar las diversas columnas copiando y pegando desde el listado guardado en nuestra PC.
3. Guardar este archivo (**Archivo > Guardar** (File > Salva)) en nuestra PC, para luego agregar los diversos datos y reimportarlo posteriormente en Fluentis (ver punto 1). Esto podría ser muy útil para pasar la plantilla de la hoja de cálculo para la importación, a completar para los futuros listados que nos enviarán los proveedores. 
4. Agregar manualmente los campos.

**ATENCIÓN**: si tenemos una hoja de cálculo guardada en nuestra PC, debe seguir el esquema de la hoja en la figura anterior. Es decir, el mismo orden de columnas, tipo de dato, etc. Estos últimos están explicados en detalle en el siguiente párrafo.

### Ingreso de campos

Al ingresar un campo, se deben tener en cuenta muchos aspectos como tipo, longitud máxima, requerido, etc…

Indicaciones generales:

- Si el campo está escrito en rojo, es un campo obligatorio.
- Si el nombre de la celda está resaltado en verde, es una **sección**.
- Si el nombre de la celda está resaltado en amarillo, es un **campo**.
- Campo: indica si es obligatorio o no el ingreso.
- Tipo: indica el tipo del campo.
- Formato Excel: indica el formato de Excel recomendado para evitar ingresos incorrectos, ver última sección Consejos y advertencias útiles.
- Longitud: indica si el campo tiene un límite de caracteres que debe respetarse.
- Descripción: breve descripción del campo.
*Ejemplo*: ejemplo real de qué se puede escribir en ese campo.
- Mapeo tabla/columna: si está presente, indica la mapeo del respectivo campo en la base de datos; para más detalles, ver la última sección Consejos y advertencias útiles.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image05.png)  

**Datos del artículo del proveedor**:

Código:

- Campo: obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 50 caracteres.
- Descripción: código de referencia al artículo usado por el proveedor.
*Ejemplo*: 02030508.

Descripción:

- Campo: obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 200 caracteres.
- Descripción: descripción proporcionada por el proveedor al artículo.
*Ejemplo*: pelota de tenis sensible a la rotación, puede corresponder al código del artículo.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image06.png)  

**Datos del artículo**:

Clase:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: /.
- Descripción: código referido a la clase del artículo.
*Ejemplo*: “1” corresponde a semilaborados, “IMB” corresponde a envases.
- Mapeo tabla/columna: select MBDC_Clase from MB_Classi.

Código interno:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 50 caracteres.
- Descripción: si no se asigna, se toma el del proveedor. Este identificará el artículo, por lo que si se da un artículo y se modifica su código interno, se añadirá el nuevo artículo. Por otro lado, si se modifica la descripción de un artículo sin cambiar su código, se actualizará el artículo con ese código. (No actualizar la unidad de medida). 
*Ejemplo*: 7710ct7tb.

Descripción interna:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 200 caracteres.
- Descripción: si no se asigna, se toma el del proveedor.
*Ejemplo*: pelota de tenis sensible a la rotación.

Unidad de medida:

- Campo: obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 3 caracteres.
- Descripción: código relacionado a la medida utilizada para el artículo en cuestión.
*Ejemplo*: “cm” corresponde a centímetros, “UDC” corresponde a palet.
- Mapeo tabla/columna: select MBUM_Codice from MB_UnitaMisura.

IVA:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 3 caracteres.
- Descripción: código relacionado al IVA aplicado al artículo en cuestión.
*Ejemplo*: “22” corresponde al 22% de IVA, “944” Exento art. 40 c. 4 bis DL 331.
- Mapeo tabla/columna: select MBIV_Code from MB_iva.

Categoría Merc:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 3 caracteres.
- Descripción: código relacionado a la categoría mercantil del artículo en cuestión.
*Ejemplo*: “206” corresponde a adhesivos, “211” corresponde a materias primas.
- Mapeo tabla/columna: select MBCM_Codice from MB_CatMerceologica.

Factura Acq:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 10 caracteres.
- Descripción: código relacionado al tipo de factura emitida del artículo en cuestión.
*Ejemplo*: “4” corresponde a compra de semilaborados, “1” corresponde a materias primas.
- Mapeo tabla/columna: select MBFA_TipoFatt from mb_TipoFattAcq.

Código de barras:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: /.
- Descripción: código de barras del artículo en cuestión.
*Ejemplo*: ABC-1234.

Tipo de lote:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 2 caracteres.
- Descripción: tipo de lote del que forma parte el artículo.
*Ejemplo*: “4” corresponde a compra de semilaborados, “1” corresponde a materias primas.

Nomenclatura:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 50 caracteres.
- Descripción: nomenclatura, clasificación del artículo.
*Ejemplo*: “32049000” corresponde a colorantes.
- Mapeo tabla/columna: select INCN_CodNomencl from IN_CodNomenc.

Código del productor:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 100 caracteres.
- Descripción: código del productor del artículo.
*Ejemplo*: art0102032019.

Código comercial:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: 100 caracteres.
- Descripción: código de la categoría comercial.
*Ejemplo*: “P” corresponde a privado.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image07.png)  

**Datos del listado**:

Precio:

- Campo: obligatorio.
- Tipo: decimal.
- Formato Excel: moneda, símbolo ninguno.
- Longitud máxima: /.
- Descripción: precio en lista del artículo.
*Ejemplo*: 10.99, 123.45.

UM Precio:

- Campo: obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: /.
- Descripción: se utiliza para definir el precio respecto a la cantidad (ej. precio por kilo, precio por metro cuadrado).
*Ejemplo*: “kg” corresponde a kilogramos.
- Mapeo tabla/columna: select MBUM_Codice from MB_UnitaMisura.

**Cantidad**:

- Campo: no obligatorio.
- Tipo: decimal.
- Formato Excel: número, posiciones decimales = 2.
- Longitud máxima: /.
- Descripción: cantidad del artículo a la que se refiere el precio anterior.
*Ejemplo*: 500.

**Valor agregado**:

- Campo: no obligatorio.
- Tipo: decimal.
- Formato Excel: número, posiciones decimales = 2.
- Longitud máxima: /.
- Descripción: valor adicional que se puede utilizar en la creación de precios de venta a partir de los precios de compra. Por ejemplo, si hay gastos de transporte (que debemos pagar al proveedor), se incluyen aquí para ser utilizados en el cálculo del precio de venta de dicho artículo.
*Ejemplo*: 123.45.

**% Adicional**:

- Campo: no obligatorio.
- Tipo: decimal.
- Formato Excel: número, posiciones decimales = 2.
- Longitud máxima: /.
- Descripción: porcentaje adicional que se puede utilizar en la creación de precios de venta a partir de los precios de compra.
*Ejemplo*: 10.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image08.png)  

**Descuentos**:

Descuento 1:

- Campo: no obligatorio.
- Tipo: decimal.
- Formato Excel: número, posiciones decimales = 2.
- Longitud máxima: /.
- Descripción: descuentos aplicables.
*Ejemplo*: “50+10” en el total de la línea se aplica un primer descuento del 50% y sobre el nuevo total un descuento adicional del 10%. 

Lo mismo se aplica a los otros dos descuentos, solo cambia el valor del descuento.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image09.png)  

**Descuentos por cantidad**:

Descuento 1:

- Campo: no obligatorio.
- Tipo: decimal.
- Formato Excel: número, posiciones decimales = 2.
- Longitud máxima: /.
- Descripción: descuento aplicado si se adquiere una determinada cantidad del artículo en cuestión.
*Ejemplo*: 10.

Cantidad 1:

- Campo: no obligatorio.
- Tipo: decimal.
- Formato Excel: número, posiciones decimales = 2.
- Longitud máxima: /.
- Descripción: cantidad mínima necesaria para recibir el respectivo descuento.
*Ejemplo*: 550.

Lo mismo se aplica a los otros dos descuentos por cantidad, solo cambia el valor correspondiente.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image10.png)  

**Descuentos por valor**:

Descuento 1:

- Campo: no obligatorio.
- Tipo: decimal.
- Formato Excel: número, posiciones decimales = 2.
- Longitud máxima: /.
- Descripción: descuento aplicado si supera un determinado imponible de línea.
*Ejemplo*: 20.

Valor 1:

- Campo: no obligatorio.
- Tipo: decimal.
- Formato Excel: número, posiciones decimales = 2.
- Longitud máxima: /.
- Descripción: imponible mínimo necesario para recibir el respectivo descuento.
*Ejemplo*: 950.

Lo mismo se aplica a los otros dos descuentos y valores.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image11.png)  

**Precio por cantidad**:

Precio 1:

- Campo: no obligatorio.
- Tipo: decimal.
- Formato Excel: número, posiciones decimales = 2.
- Longitud máxima: /.
- Descripción: precio unitario aplicado si se supera una determinada cantidad.
*Ejemplo*: 3.99.

Cantidad 1:

- Campo: no obligatorio.
- Tipo: decimal.
- Formato Excel: número, posiciones decimales = 2.
- Longitud máxima: /.
- Descripción: cantidad mínima necesaria para tener el respectivo precio unitario.
*Ejemplo*: 250.

Lo mismo se aplica a los otros dos precios y cantidades correspondientes, solo cambia el valor respectivo.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image12.png)  

**Otros datos**:

Notas:

- Campo: no obligatorio.
- Tipo: cadena.
- Formato Excel: texto.
- Longitud máxima: /.
- Descripción: notas adicionales.
*Ejemplo*: no exponer a la luz solar.
- Mapeo tabla/columna: select MBNC_Codice from MB_NoteCodificat.

### BizLink Parameters

Estos parámetros servirán para procesar las filas ingresadas en la sección de Datos. Como se puede observar en la imagen, algunos campos ya están precompletados, pero nada impide que los modifiquemos.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image13.png)  

1.  BizLink Hoja de Cálculo:

- Campo: no debe ingresarse.

2.  Idioma:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: código ISO relacionado al idioma.
*Ejemplo*: “it-IT” representa el idioma italiano, “en-US” representa el idioma inglés en América.

3.  Empresa:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: es un campo precompletado ya que toma los valores ya dentro de Fluentis, que se pueden ver en la esquina superior izquierda.
*Ejemplo*: “1” corresponde a la empresa de demostración.
- Mapeo tabla/columna: Select MBSC_Code from MB_Soc.

4.  División:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: al igual que la empresa, se precompleta.
*Ejemplo*: “1” corresponde a la sede legal, “2” a la sede operativa de Milán.
- Mapeo tabla/columna: select MBDP_Code from MB_Dep.

5.  Nación:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: nación donde se encuentra la división para la cual se importó el listado.
*Ejemplo*: “GB” corresponde a Gran Bretaña, “USA” corresponde a Estados Unidos.
- Mapeo tabla/columna: select MBNZ_Codice from MB_Nazioni.

6.  Código de barras:

- Campo: obligatorio solo si en la sección de datos se ha ingresado el código de barras de al menos un artículo.
- Tipo: cadena.
- Descripción: se utiliza para indicar el tipo de código de barras utilizado.
*Ejemplo*: “39” corresponde a COD39.
- Mapeo tabla/columna: select MBBC_Codice from MB_BarCode.

7.  Cuenta:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: cuenta del proveedor, maestra del proveedor.
*Ejemplo*: “1701”, que tiene 3 subcuentas (ver debajo).
- Mapeo tabla/columna: select MBPC_Conto from MB_PiaCon.

8.  Subcuenta:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: subcuenta del proveedor, maestra del proveedor.
*Ejemplo*: para la cuenta 1701 vista anteriormente, hay 3 subcuentas: “001” que corresponde a cuentas, “002” que corresponde a valores, y “” (ninguna subcuenta especificada) que corresponde a disponibilidades líquidas.
- Mapeo tabla/columna: select BPC_SottoConto from MB_PiaCon.

9.  Divisa:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: divisa con la que se interpretan los valores ingresados en la sección de datos.
*Ejemplo*: “EUR” corresponde a Euro, “USD” corresponde a Dólar.
- Mapeo tabla/columna: select MBDI_Divisa from MB_Divise.

10.  Inicio de validez:

- Campo: obligatorio.
- Tipo: datetime.
- Descripción: indica el inicio de validez del listado ingresado (dd/mm/aaaa).
*Ejemplo*: 1/10/2018.

11.  Fin de validez:

- Campo: no obligatorio.
- Tipo: datetime.
- Descripción: si está presente, indica el fin de validez del listado ingresado (dd/mm/aaaa).
*Ejemplo*: 31/12/2027.

12.  Tipo de descuento del listado:

- Campo: no obligatorio.
- Tipo: cadena.
- Descripción: si está presente, indica el tipo de descuento efectuado; habrá tres tipos diferentes, cada uno relacionado con el descuento en la sección de Descuentos.
*Ejemplo*: “4” corresponde a descuento final sobre la venta.
- Mapeo tabla/columna: select MBST_Code from MB_Sconti.

15.  Tipo de descuento por cantidad:

- Campo: no obligatorio.
- Tipo: cadena.
- Descripción: si está presente, indica el tipo de descuento efectuado.
*Ejemplo*: “4” corresponde a descuento final sobre la venta.
- Mapeo tabla/columna: select MBST_Code from MB_Sconti.

16.  Tipo de descuento por valor:

- Campo: no obligatorio.
- Tipo: cadena.
- Descripción: si está presente, indica el tipo de descuento efectuado.
*Ejemplo*: “4” corresponde a descuento final sobre la venta.
- Mapeo tabla/colonna: select MBST_Code from MB_Sconti.

17.  Para subcontratista:

- Campo: obligatorio.
- Tipo: booleano.
- Descripción: indica si dicho listado (de trabajo por encargo) será o no para un subcontratista.
*Ejemplo*: “1” corresponde a verdadero, “0” corresponde a falso.

18.  Ingreso de artículo:

- Campo: obligatorio.
- Tipo: booleano.
- Descripción: si se establece en 1, inserta el artículo en la tabla de artículos MG_AnaArt.
*Ejemplo*: “1” corresponde a verdadero, “0” corresponde a falso.

19.  Ingreso de artículo para proveedor:

- Campo: obligatorio.
- Tipo: booleano.
- Descripción: si se establece en 1, inserta el artículo en la tabla de artículos para proveedores MB_ArticoliFornitore, MG_FornPreferenziali.
*Ejemplo*: “1” corresponde a verdadero, “0” corresponde a falso.

### Iniciar importación

Una vez ingresados los datos, para iniciar la importación, haga clic en el botón que se encuentra en el menú de importación, en la parte superior izquierda, también llamado “Importación” como se muestra en la figura a continuación.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image14.png)  

### Conclusiones – Ingreso realizado

Si todo sale bien, no aparecerá ningún mensaje de error. Para una verificación adicional de éxito, verifique en el registro de artículos (**Inicio > Artículos**) si están presentes los importados desde el proveedor. De lo contrario, aparecerá en pantalla un mensaje de error que nos indicará qué parámetros y/o campos no son correctos. Para interpretar el tipo de error, consulte Consejos y advertencias útiles en el último párrafo.

### Consejos y advertencias útiles

**Formato Excel recomendado**:

- Para una correcta importación, se recomienda encarecidamente formatear las columnas según el tipo indicado en “Formato Excel” de cada campo. Por ejemplo, si el tipo del campo es decimal y en ese campo se ingresará una moneda, formatee el campo como moneda. Esto se debe a que, si no se formatea la celda, Excel elimina los dígitos no significativos. Para establecer el formato, siga los siguientes pasos:

Primero seleccione la columna deseada como en la figura a continuación:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image15.png)  

Luego, después de posicionar el puntero del mouse dentro de la columna, haga clic con el botón derecho del mouse.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image16.png)  

Seleccione haciendo clic con el botón izquierdo ** > Formato de celdas…**.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image17.png)  

En esta pantalla, podrá formatear la columna seleccionada. Según las indicaciones proporcionadas en el Ingreso de campos, seleccione la categoría apropiada, con las especificaciones correspondientes (ej. moneda, símbolo ninguno). Lo mismo se puede hacer en la hoja de cálculo dentro de Fluentis.

**Atención**: el caso clásico se refiere a códigos que contienen ceros que aparentemente no son significativos, por ej. “001”. Si el campo está formateado como genérico o número, se eliminarían los ceros; si se formatea como cadena, se mantienen.

**Mapa tabla/columna**:

- Si en el Ingreso de campos hay un mapeo de tabla/columna, significa que el valor ingresado en el campo para la importación debe estar ya presente en la base de datos. Para visualizar los datos relativos presentes en la base de datos, siga los siguientes pasos, usando como ejemplo la clase de artículos y el respectivo mapeo:

select MBDC_Clase from MB_Classi (**\<-** este es el mapeo). Ejecutamos la consulta en “Microsoft SQL Server Management Studio” y obtenemos el siguiente resultado:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image18.png)  

Visto así no comunica nada, para entender su significado, sustituya después de la cláusula de select, el símbolo “*” por el campo para componer la nueva consulta. En este caso tendríamos select * from MB_Class, que sirve para seleccionar el contenido completo de la tabla, ejecutemos ahora.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image19.png)  

Esto es útil ya que, como se muestra en la figura, mediante la descripción (MBDC_Descr) es posible entender qué representa el campo y verificar si lo que se ingresará ya está presente o no en la base de datos.

Este procedimiento anteriormente descrito es universal, es decir, aplica para cada campo.

La misma representación se puede ver en Fluentis:

Desde la página de inicio de Fluentis, seleccione **Artículos > Artículos de proveedores** (ver figura a continuación).

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image20.png)  

Luego, en la máscara de búsqueda que aparece, haga clic con el botón izquierdo del mouse en el triángulo junto a artículos, lo que abre un menú desplegable donde se pueden visualizar la clase de artículos con la descripción correspondiente como en la figura.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image21.png)  

Esto es para la clase de artículos. Para los otros campos, se puede realizar el mismo procedimiento solo que en diferentes puntos.

Por lo tanto, deberíamos ingresar uno de los valores presentes; de lo contrario, la importación no tendrá éxito y nos comunicará un error. Esto aplica para cada campo donde esté presente el mapeo de tabla/columna.

Si en cambio queremos agregar un campo con mapeo no presente en la base de datos, deberá ser ingresado ya sea mediante consulta o desde Fluentis; en este caso la consulta de inserción está desaconsejada, ya que es más complicada de componer que la visualización vista anteriormente. Por lo tanto, el procedimiento recomendado es la inserción desde Fluentis. En el caso de la clase de artículos, desde artículos de proveedores (figura anterior), presione el botón derecho en el filtro de búsqueda de clase de artículo y seleccione **Abrir formulario**.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image22.png)  

En el formulario que se abrirá, presione el botón **Buscar** para visualizar las clases de artículo presentes.

![](/img/neutral/common/search.png)  

Debajo de la última fila presente hay una fila vacía. Esa es la que se usa para ingresar nuevos valores.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image24.png)  

Aquí se deben escribir los nuevos valores a ingresar, y una vez hecho, bastará con presionar enter.

Este procedimiento es análogo para los otros campos; la única cosa que cambia es el lugar donde se encuentran los filtros de búsqueda en los que hay que hacer clic con el botón izquierdo para abrir el formulario.

**Errores**:

- En caso de que la importación falle, como se mencionó anteriormente, aparecerá en pantalla un mensaje de error.

Si el error ocurrió en la parte de Datos, se puede rastrear a la fila que contiene el error, ya que se indicará, por ejemplo, “System.ArgumentException: Error importing row 4”.

En este caso (ver figura a continuación), el error se encontrará en la fila 4, que sin embargo, no es la efectiva fila que contiene el error. Para entender exactamente qué fila contiene el error, utilizando los números en la columna de la izquierda, se suma 1. Entonces:

Fila real que contiene el error = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image25.png)  

Para interpretar el error, en el mensaje del mismo, siga los siguientes pasos: en la misma fila que contiene el número de fila visto anteriormente, hay indicado el objeto al que se refiere, luego el error en sí y finalmente la propiedad relativa en la que se ha detectado el error. Siempre en el ejemplo anterior, “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceListsnot-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. En este caso, como se puede notar en la imagen anterior, la unidad de medida relativa al precio de compra listado ha generado el error, ya que es nula. De hecho, su ingreso es obligatorio.

Si el error ocurrió en los parámetros, el mensaje será análogo; el método de resolución sigue siendo el mismo, es decir, verificar la correcta entrada de la propiedad correspondiente.

**Atención**: Si se encuentra una fila completamente vacía, no se comunicará ningún error, pero la importación terminará allí. Por ejemplo, si la primera fila (fila n.4) está vacía por alguna razón y debajo (desde la fila n.5 inclusive) se encuentran las filas pobladas, no se importará nada.

**Atención**: Si se ha ingresado un listado de 10 filas, por ejemplo, y en la fila n. 7 se produce un error, las primeras 6 filas no habiendo causado problemas se habrán ingresado. Si no se ha cambiado ningún valor en las primeras 6 filas (y si, obviamente, se ha corregido el error), reiniciando la importación no habrá problemas, ni de duplicación, ya que primero se verifica si el artículo ya está presente. Si se cambia incluso solo un valor, ese artículo se ingresará como si fuera un artículo nuevo.

Finalmente, otro mensaje de error que podría aparecer es el siguiente.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image26.png)  

Como se puede notar en la imagen anterior, este tipo de mensajes son más fáciles de interpretar, ya que se indica la celda exacta con el respectivo error. En este caso, en la celda F:4 no hay valor presente.