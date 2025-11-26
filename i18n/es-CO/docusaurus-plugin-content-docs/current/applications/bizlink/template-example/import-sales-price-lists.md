---
title: Importación de Listas de Precios de Venta
sidebar_position: 2
ai_generated: true
---

En este documento se explicará cómo **Importar listas de precios de proveedores<!-- listini fornitori -->** dentro de **Fluentis** utilizando una **hoja de cálculo**.

Esta importación es posible gracias al uso de los **BizLink Parameters**, ya que cada vez que se procese una fila, estos serán llamados.

### Cómo abrir la importación mediante hoja de cálculo

Haga clic en **Herramientas** (por defecto se encuentra en la parte derecha de Fluentis).

Haga clic en la sección **BizLink**.

Haga clic en **Importación On Demand > Maestros > Importación Artículos y Listas de Precios de Venta** como se muestra en la figura de abajo.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image03.png)  

### Sección Datos<!-- Data -->

En esta sección se deben ingresar los datos que luego se guardarán de forma permanente en la base de datos de **Fluentis**.

Ahora en pantalla se visualiza la hoja de cálculo para la importación.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image04.png)

Desde este punto se pueden tomar varios caminos:

 1. Importar la hoja de cálculo ya completada, **Archivo > Abrir<!-- File > Open -->**.
 2. Agregar las diferentes columnas copiando y pegando desde la lista de precios<!-- listino --> guardada en nuestro PC.
 3. Guardar este archivo (**Archivo > Guardar<!-- File > Salva -->**) en nuestro PC, para luego agregarle los diferentes datos y volver a importarlo posteriormente en Fluentis (ver punto 1). Esto puede ser muy útil para compartir la plantilla de la hoja de cálculo de importación, para que los proveedores puedan completarla con las futuras listas de precios que nos envíen.
 4. Agregar manualmente los campos.

**ATENCIÓN**: si tenemos una hoja de cálculo guardada en nuestro PC, esta debe seguir el esquema de la hoja que aparece en la figura anterior. Es decir, el mismo orden de las columnas, tipo de dato, etc. Estos últimos serán explicados en detalle en el siguiente párrafo.

### Ingreso de campos

Al ingresar un campo hay que considerar varios aspectos como el tipo, longitud máxima, requerido, etc.

Indicaciones generales:

- Si el campo está escrito en rojo, es un campo obligatorio
- Si el nombre de la celda está resaltado en verde, es una **sección**
- Si el nombre de la celda está resaltado en amarillo, es un **campo**
- Campo: indica si es obligatorio o no su ingreso
- Tipo: indica el tipo de campo
- Formato Excel: indica la formateación de Excel recomendada para evitar errores de ingreso; ver los Consejos y advertencias útiles al final del documento.
- Longitud: indica si el campo tiene un límite de caracteres que respetar
- Descripción: breve descripción del campo
*Ejemplo*: ejemplo real de qué escribir en ese campo
- Mapping table/columna: si está presente, indica el mapeo de ese campo en la base de datos; para más información, ver Consejos y advertencias útiles al final del documento.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image05.png)  

**Datos de artículo<!-- Dati articolo -->**:

Clase:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: /
- Descripción: código referenciado a la clase del artículo
*Ejemplo*: “1” corresponde a semielaborados<!-- semilavorati -->, “IMB” corresponde a embalajes<!-- imballi -->
- Mapping table/columna: select MBDC_Classe from MB_Classi

Código:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: /
- Descripción: código de referencia del artículo
*Ejemplo*: 02030508

Descripción:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: /
- Descripción: descripción del artículo, puede coincidir también con el código
*Ejemplo*: pelota de tenis sensible al giro, puede coincidir con el código de artículo

Unidad de medida:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: 3 caracteres
- Descripción: código referente a la unidad de medida usada para el artículo en cuestión
*Ejemplo*: “cm” corresponde a centímetros, “UDC” corresponde a pallet<!-- bancale -->
- Mapping table/columna: select MBUM_Codice from MB_UnitaMisura

IVA:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: 3 caracteres
- Descripción: código referido al tipo de IVA usado para el artículo en cuestión
*Ejemplo*: “22” corresponde al 22% de IVA, “944” Exento art. 40 c. 4 bis DL 331
- Mapping table/columna: select MBIV_Code from MB_iva

Cat Merc:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: 3 caracteres
- Descripción: código referente a la categoría mercantil del artículo en cuestión
*Ejemplo*: “206” corresponde a adhesivos, “211” corresponde a materias primas
- Mapping table/columna: select MBCM_Codice from MB_CatMerceologica

Fatt acq:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: 10 caracteres
- Descripción: código referente al tipo de factura emitida para el artículo en cuestión
*Ejemplo*: “4” corresponde a compra de semielaborados, “1” corresponde a materias primas
- Mapping table/columna: select MBFA_TipoFatt from mb_TipoFattAcq

Fatt vend:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: 10 caracteres
- Descripción: código referente al tipo de factura de venta emitida para el artículo en cuestión
*Ejemplo*: “4” corresponde a compra de semielaborados, “1” corresponde a materias primas
- Mapping table/columna: select MBFA_TipoFatt from mb_TipoFattVend

Nomenc. Intra:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: 50 caracteres
- Descripción:
*Ejemplo*: “32049000” corresponde a colorantes
- Mapping table/columna: select INCN_CodNomencl from IN_CodNomenc

Barcode:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: /
- Descripción: código de barras del artículo en cuestión
*Ejemplo*: ABC-1234

Tipo de lote:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: 2 caracteres
- Descripción: tipo de lote al que pertenece el artículo
*Ejemplo*: “4” corresponde a compra de semielaborados, “1” corresponde a materias primas

![](/img/it-it/applications/bizlink/import-sales-price-lists/image06.png)  

**Datos de lista de precios<!-- Dati listino -->**:

Precio:

- Campo: obligatorio
- Tipo: decimal
- Formato Excel: moneda, sin símbolo
- Longitud máxima: /
- Descripción: precio de lista del artículo
*Ejemplo*: “10.99”, “123.45”

Unidad de medida:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: /
- Descripción: sirve para definir el precio en función de la cantidad (ej: precio por kilo, precio por metro cuadrado)
*Ejemplo*: “kg” corresponde a kilogramos
- Mapping table/columna: select MBUM_Codice from MB_UnitaMisura

Cantidad:

- Campo: no obligatorio
- Tipo: decimal
- Formato Excel: número, decimales=2
- Longitud máxima: /
- Descripción: cantidad del artículo a la que corresponde el precio anterior
*Ejemplo*: 500

Tipo escalón Qty-Val-PxQ:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: /
- Descripción: Indica si los pasos aplicados son por cantidad, valor o precio por cantidad. Por lo general se utiliza el de cantidad, es decir: dada una cantidad, se aplica el descuento del x%  
*Ejemplo*: Qty, Val, PxQ

![](/img/it-it/applications/bizlink/import-sales-price-lists/image07.png)

**Descuentos<!-- Sconti -->**:

Descuento1:

- Campo: no obligatorio
- Tipo: decimal
- Formato Excel: número, decimales=2
- Longitud máxima: /
- Descripción: descuentos posibles aplicables
*Ejemplo*: “50+10” sobre el total de la fila se realiza un primer descuento del 50% y sobre el nuevo total un descuento adicional del 10%

Lo mismo para los otros dos descuentos, solo cambia el valor del descuento.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image08.png)  

**Descuentos por cantidad (Tipo Escalón ‘Qty')<!-- Sconti a qta (Tipo Scaglione ‘Qty')-->**:

Descuento1:

- Campo: no obligatorio
- Tipo: decimal
- Formato Excel: número, decimales=2
- Longitud máxima: /
- Descripción: descuento aplicable si se compra una determinada cantidad del artículo en cuestión
*Ejemplo*: 10

Cantidad1:

- Campo: no obligatorio
- Tipo: decimal
- Formato Excel: número, decimales=2
- Longitud máxima: /
- Descripción: cantidad mínima necesaria para obtener el descuento respectivo
*Ejemplo*: 550

Lo mismo con los otros dos descuentos y cantidades, solo cambia el valor correspondiente.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image09.png)

**Descuentos por valor (Tipo Escalón ‘Val'<!-- Sconti a valore (Tipo Scaglione ‘Val'-->**):

Descuento1:

- Campo: no obligatorio
- Tipo: decimal
- Formato Excel: número, decimales=2
- Longitud máxima: /
- Descripción: descuento aplicable si se supera un cierto importe imponible de línea
*Ejemplo*: 20

Valor1:

- Campo: no obligatorio
- Tipo: decimal
- Formato Excel: número, decimales=2
- Longitud máxima: /
- Descripción: importe mínimo necesario para obtener el descuento respectivo
*Ejemplo*: 950

Lo mismo para los otros dos descuentos y valores.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image10.png)  

**Precio por cantidad (Tipo Escalón ‘PxQ'<!-- Prezzo per quantita (Tipo Scaglione ‘PxQ')-->**:

Precio1:

- Campo: no obligatorio
- Tipo: decimal
- Formato Excel: número, decimales=2
- Longitud máxima: /
- Descripción: precio unitario que se aplica si se supera una determinada cantidad
*Ejemplo*: 3.99

Cantidad1:

- Campo: no obligatorio
- Tipo: decimal
- Formato Excel: número, decimales=2
- Longitud máxima: /
- Descripción: cantidad mínima necesaria para tener el precio unitario respectivo
*Ejemplo*: 250

Lo mismo para los otros dos precios y sus respectivas cantidades, sólo cambia el valor respectivo.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image11.png)  

**Otros datos**:

Notas:

- Campo: no obligatorio
- Tipo: cadena
- Formato Excel: texto
- Longitud máxima: /
- Descripción: notas adicionales
*Ejemplo*: no exponer a la luz solar

- Mapping table/columna: select MBNC_Codice from MB_NoteCodificat

### BizLink Parameters

Estos parámetros serán utilizados para procesar las filas insertadas en la sección de Datos. Como se puede observar en la imagen, algunos campos ya están prellenados, pero nada impide modificarlos.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image12.png)

1   BizLink Spreadsheet:

- Campo: no insertar/no modificar

2   Idioma:

- Campo: obligatorio
- Tipo: cadena
- Descripción: código ISO relativo al idioma
*Ejemplo*: “it-IT” representa el idioma italiano, “en-US” representa el inglés de Estados Unidos.

3   Empresa:

- Campo: obligatorio
- Tipo: cadena
- Descripción: es un campo prellenado ya que toma los valores dentro de Fluentis, se pueden ver en la esquina superior izquierda.
*Ejemplo*: “1” corresponde a la empresa demo
- Mapping table/columna: Select MBSC_Code from MB_Soc

4   División:

- Campo: obligatorio
- Tipo: cadena
- Descripción: como para la empresa, viene prellenado
*Ejemplo*: “1” corresponde a la sede legal, “2” a la sede operativa de Milán
- Mapping table/columna: select MBDP_Code from MB_Dep

5   País:

- Campo: obligatorio
- Tipo: cadena
- Descripción: país donde se encuentra la división para la cual se importó la lista de precios<!-- listino -->
*Ejemplo*: “GB” corresponde a Gran Bretaña, “USA” a Estados Unidos
- Mapping table/columna: select MBNZ_Codice from MB_Nazioni

6   Tipo de Código de Barras:

- Campo: obligatorio solo si en la sección de datos se ha ingresado el código de barras de al menos un artículo
- Tipo: cadena
- Descripción: sirve para indicar el tipo de código de barras utilizado
*Ejemplo*: “39” corresponde al COD39
- Mapping table/columna: select MBBC_Codice from MB_BarCode

7   Naturaleza de la lista de precios (GEN-CUST):

- Campo: obligatorio
- Tipo: cadena
- Descripción: sirve para indicar si la lista de precios<!-- listino --> es estándar o personalizada. GEN normalmente se indica para listas de precios que pueden ser utilizadas por diferentes clientes porque serán iguales. Si es CUST corresponde a una lista de precios personalizada, creada específicamente para el cliente cuya cuenta y subcuenta se ingresan en los parámetros.
*Ejemplo*: “GEN” corresponde a general, “CUST”
- Mapping table/columna:

8   Tipo de lista de precios<!-- Tipo listino -->:

- Campo: obligatorio
- Tipo: cadena
- Descripción: sirve para indicar el tipo de lista de precios<!-- listino -->; se debe ingresar si la naturaleza de la lista de precios es ”GEN”, de lo contrario no debe ser ingresado
*Ejemplo*: “GEN” corresponde a general, “PRO” corresponde a promocional
- Mapping table/columna: select MBLV_List from MB_LisVen

9   Cuenta<!-- Conto -->:

- Campo: obligatorio
- Tipo: cadena
- Descripción: cuenta del cliente; maestro del cliente. Si la lista de precios<!-- listino --> es personalizada, cuenta y subcuenta se crearán según los parámetros indicados. Si es general no debe ser ingresado.
*Ejemplo*: “1701” que tiene 3 subcuentas (ver más abajo)
- Mapping table/columna: select MBPC_Conto from MB_PiaCon

10  Subcuenta<!-- Sottoconto -->:

- Campo: obligatorio
- Tipo: cadena
- Descripción: subcuenta del cliente; submaestro del cliente. Si la lista de precios<!-- listino --> es personalizada, cuenta y subcuenta se crearán según los parámetros especificados. Si es general no debe ser ingresado.
*Ejemplo*: para la cuenta<!-- conto --> 1701 mencionada antes, hay 3 subcuentas: “001” que corresponde a cuentas, “002” a valores DDTti y “” (ninguna subcuenta especificada) a disponibilidades líquidas.
- Mapping table/columna: select BPC_SottoConto from MB_PiaCon

11  Divisa:

- Campo: obligatorio
- Tipo: cadena
- Descripción: moneda en la que se interpretan los valores ingresados en la sección de datos
*Ejemplo*: “EUR” corresponde a Euro, “USD” a Dólar
- Mapping table/columna: select MBDI_Divisa from MB_Divise

12  Redondeo:

- Campo: obligatorio
- Tipo: decimal
- Descripción: Indica si redondear hacia arriba o hacia abajo
*Ejemplo*: 1 corresponde a ninguno, 2 a exceso, 3 a defecto
- Mapping table/columna: select MBRNT_Id from MB_RoundingType

13  Inicio de validez:

- Campo: obligatorio
- Tipo: datetime
- Descripción: indica el inicio de la validez de la lista de precios<!-- listino --> ingresada (dd/mm/aaaa)
*Ejemplo*: 1/10/2018

14  Fin de validez:

- Campo: no obligatorio
- Tipo: datetime
- Descripción: si está presente, indica el final de la validez de la lista de precios<!-- listino --> ingresada (dd/mm/aaaa)
*Ejemplo*: 31/12/2027

15  Tipo de descuento lista de precios1:

- Campo: no obligatorio
- Tipo: cadena
- Descripción: si está presente, indica el tipo de descuento aplicado relativo a la sección **Descuentos**
*Ejemplo*: “4” corresponde a descuento final sobre la venta
- Mapping table/columna: select MBST_Code from MB_Sconti

16  Tipo de descuento lista de precios2:

- Campo: no obligatorio
- Tipo: cadena
- Descripción: si está presente, indica el tipo de descuento aplicado relativo a la sección **Descuentos**
*Ejemplo*: “4” corresponde a descuento final sobre la venta
- Mapping table/columna: select MBST_Code from MB_Sconti

17  Tipo de descuento lista de precios3:

- Campo: no obligatorio
- Tipo: cadena
- Descripción: si está presente, indica el tipo de descuento aplicado relativo a la sección **Descuentos**
*Ejemplo*: “4” corresponde a descuento final sobre la venta
- Mapping table/columna: select MBST_Code from MB_Sconti

18  Tipo de descuento por cantidad:

- Campo: no obligatorio
- Tipo: cadena
- Descripción: si está presente, indica el tipo de descuento aplicado
*Ejemplo*: “4” corresponde a descuento final sobre la venta
- Mapping table/columna: select MBST_Code from MB_Sconti

19  Tipo de descuento por valor:

- Campo: no obligatorio
- Tipo: cadena
- Descripción: si está presente, indica el tipo de descuento aplicado
*Ejemplo*: “4” corresponde a descuento final sobre la venta
- Mapping table/columna: select MBST_Code from MB_Sconti

### Iniciar la importación

Una vez ingresados los datos, para iniciar la importación, haga clic en el botón presente en el menú de importación, en la parte superior izquierda, también llamado “Importación”, como en la figura siguiente.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image13.png)  

### Conclusión – Inserción realizada con éxito

Si todo salió bien no aparecerá ningún mensaje de error. Para una verificación adicional, revise en el maestro de artículos<!-- anagrafica articoli --> (Inicio → Artículos<!-- Home à Articoli -->) si están presentes los que se han importado vía la lista de precios de venta<!-- listino di vendita -->. En caso contrario, aparecerá en pantalla un mensaje de error que indicará qué parámetros y/o campos no son correctos. Para interpretar el error consulte Consejos y advertencias útiles en el último párrafo.

### Consejos y advertencias útiles

**Formateo Excel recomendado**:

- Para una correcta importación, se recomienda encarecidamente formatear las columnas según el tipo indicado en “Formato Excel” de cada campo. Por ejemplo, si el tipo de campo es decimal y en ese campo debe ingresarse una moneda, se debe formatear el campo como moneda. Esto porque, si la celda no está formateada, Excel borra los ceros no significativos. Para aplicar la formateación siga estos pasos:

Primero, seleccione la columna deseada como en la figura de abajo:

![](/img/it-it/applications/bizlink/import-sales-price-lists/image14.png)  

Luego, al posicionar el puntero del mouse dentro de la columna, haga clic derecho.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image15.png)  

Seleccione haciendo clic izquierdo** > Formato de celdas...<!-- Formato celle... -->**

![](/img/it-it/applications/bizlink/import-sales-price-lists/image16.png)

En esta pantalla podrá formatear la columna seleccionada. Según las indicaciones dadas en **Ingreso de campos**, seleccione la categoría adecuada, con las especificaciones relativas (ej. moneda, sin símbolo). Lo mismo es posible hacerlo desde la hoja de cálculo interna de Fluentis.

**Atención**: El caso clásico se refiere a códigos que contienen ceros, aparentemente no significativos, por ejemplo “001”. Si el campo está formateado como genérico o número, los ceros serían descartados; si se formatea como cadena se mantienen.

**Mapping table/columna**:

- Si al ingresar los campos está presente el campo mapping table/columna, significa que el valor ingresado en el campo para la importación ya debe estar presente en la base de datos. Para visualizar los datos correspondientes en la base de datos simplemente siga estos pasos, utilizando como ejemplo la clase de artículos<!-- classe articoli --> y su mapping:

select MBDC_Classe from MB_Classi (este es el mapping). Ejecute la consulta en “Microsoft SQL Server Management Studio” y obtendrá el siguiente resultado:

![](/img/it-it/applications/bizlink/import-sales-price-lists/image17.png)  

Así presentado, no comunica nada; para entender el significado, reemplace después de la cláusula select, el símbolo “*” por el campo para formar la nueva consulta. En este caso, sería select * from MB_Class, que sirve para seleccionar el contenido completo de la tabla, ejecute ahora.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image18.png)  

Esto es útil porque, como muestra la figura, mediante la descripción (MBDC_Descr) es posible saber qué representa el campo y verificar si lo que se va a ingresar está presente o no en la base de datos.

Este procedimiento es universal, es decir, aplica para cualquier campo.

La misma visualización puede hacerse en Fluentis:

Desde la home de Fluentis seleccione **Artículos > Artículos** (ver figura abajo).

![](/img/it-it/applications/bizlink/import-sales-price-lists/image19.png)  

Luego, en el formulario de búsqueda que aparece, haga clic izquierdo en el triángulo al lado de artículos<!-- articoli -->, el cual abre un menú desplegable donde se puede visualizar la clase de artículos con su descripción, como en la figura.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image20.png)

Esto para la clase de artículos. Para otros campos se puede realizar el mismo procedimiento, solo cambiará donde se encuentran los filtros de búsqueda donde hacer clic izquierdo para abrir el formulario.

Deberá entonces ingresar uno de los valores presentes, de lo contrario la importación no será exitosa y aparecerá un error. Esto aplica para cada campo donde esté presente mapping table/columna.

Si por el contrario quiere agregar un campo de mapping que no está presente en la base de datos, este deberá ser ingresado o mediante consulta o desde Fluentis; en este caso, la consulta de inserción no se recomienda ya que es más complicada de redactar respecto a la visualización anterior. El procedimiento recomendado es entonces la inserción desde Fluentis. Siempre en el caso de clase de artículos, desde artículos (figura arriba), haga clic derecho dentro del filtro de búsqueda de clase de artículo y seleccione **Abrir formulario<!-- Apri form -->**.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image21.png)

En el formulario que se abrirá, pulse el botón **Buscar<!-- Ricerca -->** para visualizar las clases de artículos presentes.

![](/img/neutral/common/search.png)

Debajo de la última fila estará una fila vacía. Esa es usada para ingresar nuevos valores.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image23.png)  

Ahí se escriben los nuevos valores a ingresar y, una vez hecho, simplemente pulse Enter.

Este procedimiento es análogo para otros campos; la única diferencia es dónde se encuentran los filtros de búsqueda en los que hacer clic izquierdo para abrir el formulario.

**Errores**:

- En caso de importación fallida, como se mencionó anteriormente, aparecerá en pantalla un mensaje de error.

 Si el error fue cometido en la parte de Datos, es posible identificar la fila que contiene el error, ya que, por ejemplo, aparecerá el texto “System.ArgumentException: Error importing row 4”. En ese caso (ver figura abajo), el error se encontrará en la fila 4, que sin embargo no es la fila real que contiene el error. Para saber exactamente cuál fila contiene el error, usando los números de la columna izquierda, hay que sumar 1. Así:

 Fila real con error = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-sales-price-lists/image24.png)

Para interpretar el error, en el mensaje, siga estos pasos: en la misma fila que contiene el número de fila visto antes, aparece el objeto al que se refiere, luego el error propiamente dicho y finalmente la propiedad correspondiente en la que se detectó el error. Siempre en el ejemplo anterior: “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceListsnot-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. En este caso, como se puede notar de la imagen, la unidad de medida relativa al precio de compra de la lista de precios<!-- prezzo di acquisto listino --> generó el error, ya que es nula. De hecho, su ingreso es obligatorio.

 Si el error fue cometido en la parte de los parámetros, el mensaje será similar, y el método de resolución sigue siendo el mismo: según la propiedad, verifique el ingreso correcto de la misma.

**Atención**: Si se encuentra una fila completamente vacía, no se comunicará ningún error, pero la importación terminará ahí. Por ejemplo, si la primera fila (fila n.4) está vacía por algún motivo y abajo (de la fila n.5 en adelante) se encuentran filas con datos, no se importará nada.

**Atención**: Si se ingresa una lista de precios de 10 filas por ejemplo, y en la fila n. 7 se produce un error, las primeras 6 filas, no habiendo causado problemas, se han insertado. Si no se cambia ningún valor en las primeras 6 filas (y si obviamente el error fue corregido), al reiniciar la importación no habrá problemas, ni siquiera de duplicación, ya que primero se verifica si el artículo ya está presente. Si se cambia aunque sea un valor, ese artículo será insertado como un nuevo artículo.

Por último, otro mensaje de error que puede ocurrir es el siguiente.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image25.png)  

Como se puede notar en la imagen anterior, este tipo de mensajes son más fáciles de interpretar ya que se indica la referencia exacta de la celda y el error respectivo. En este caso, en la celda F:4 no hay ningún valor presente.