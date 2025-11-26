---
title: Importación de Listas de Precios de Proveedor
sidebar_position: 3
ai_generated: true
---

En este documento se explicará cómo **importar las listas de precios de proveedores<!-- listini fornitori -->** dentro de **Fluentis** utilizando una **hoja de cálculo electrónica<!-- foglio elettronico -->**.

Esta importación es posible gracias al uso de los **Parámetros BizLink<!-- BizLink Parameters -->**, ya que cada vez que se procese una fila, estos serán llamados.

### Cómo abrir la importación a través de hoja de cálculo electrónica<!-- importazione tramite foglio elettronico -->

Haga clic en **Herramientas** (normalmente se sitúa en el lado derecho de Fluentis).

Haga clic en la sección **BizLink**

Haga clic en **Importación Bajo Demanda  >  Documentos de compra  >  Importación listas de precios de proveedores<!-- Importazione On Demand  >  Documenti di acquisto  >  Importazione Listini Fornitori -->** como en la imagen de abajo.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image03.png) 

### Sección Datos<!-- Sezione Data -->

En esta sección insertaremos los datos que luego se harán permanentes mediante el guardado en la base de datos de Fluentis.

Ahora en pantalla se visualiza la hoja de cálculo para la importación.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image04.png) 

Desde aquí se pueden tomar varios caminos:

 1. Importar la hoja de cálculo ya completada, **Archivo > Abrir<!-- File > Open -->**.
 2. Agregar las diferentes columnas haciendo copiar y pegar desde la lista de precios guardada en nuestro PC.
 3. Guardar este archivo (**Archivo > Guardar<!-- File  > Salva -->**) en nuestro PC, para luego añadir los datos y reimportarlo posteriormente en Fluentis (ver punto 1). Esto puede ser muy útil para compartir la plantilla de hoja de cálculo para la importación, para ser llenada con las futuras listas de precios que nos enviarán los proveedores. 
 4. Añadir manualmente los campos.

**ATENCIÓN**: si tienes una hoja de cálculo guardada en tu PC, debe seguir el esquema de la hoja de la figura anterior. Es decir, el mismo orden de columnas, tipo de dato, etc. Estos últimos se explican en detalle en el siguiente apartado.

### Inserción de campos<!-- Inserimento campi -->

Al insertar un campo hay que considerar muchas cosas, entre ellas tipo, longitud máxima, si es requerido, etc...

Indicaciones generales:

-        Si el campo está escrito en rojo es un campo obligatorio

-        Si el nombre de la celda está resaltado en verde es una **sección**

-        Si el nombre de la celda está resaltado en amarillo es un **campo**

-        Campo: indica si es obligatorio o no el ingreso

-        Tipo: indica el tipo del campo

-        Formato de Excel: indica el formato Excel recomendado para evitar errores de entrada. Ver la última sección Consejos y advertencias útiles.

-        Longitud: indica si el campo tiene un límite de caracteres a respetar

-        Descripción: breve descripción del campo

*Ejemplo*: ejemplo real de qué se puede escribir en ese campo

-        Tabla de mapeo/columna: si está presente, indica la correspondencia en la base de datos del respectivo campo. Para mayor información ver la última sección Consejos y advertencias útiles.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image05.png) 

**Datos del artículo del proveedor<!-- Dati articolo fornitore -->**:

Código:

-        Campo: obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 50 caracteres
-        Descripción: código de referencia al artículo utilizado por el proveedor

*Ejemplo*: 02030508

Descripción:

-        Campo: obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 200 caracteres
-        Descripción: descripción dada por el proveedor al artículo

*Ejemplo*: pelota de tenis sensible a la rotación, puede corresponder al código de artículo

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image06.png) 

**Datos del artículo<!-- Dati articolo -->**:

Clase:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: /
-        Descripción: código referente a la clase del artículo

*Ejemplo*: “1” corresponde a semielaborados, “IMB” corresponde a embalajes

-        Tabla de mapeo/columna: select MBDC_Classe from MB_Classi

Código interno:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 50 caracteres
-        Descripción: si no se asigna, se toma el del proveedor. Este identificará el artículo, así que si para un artículo modificas el código interno, se añadirá el nuevo artículo. De lo contrario, si para un artículo dejas igual el código de artículo y solo modificas por ejemplo la descripción, se hará un update del artículo con ese código. (No modificar la unidad de medida)

*Ejemplo*: 7710ct7tb

Descripción interna:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 200 caracteres
-        Descripción: si no se asigna, se toma la del proveedor

*Ejemplo*: pelota de tenis sensible a la rotación

Unidad de medida:

-        Campo: obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 3 caracteres
-        Descripción: código referente a la unidad utilizada para el artículo en cuestión

*Ejemplo*: “cm” corresponde a centímetros, “UDC” corresponde a palet

-        Tabla de mapeo/columna: select MBUM_Codice from MB_UnitaMisura

IVA:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 3 caracteres
-        Descripción: código correspondiente al IVA usado para el artículo en cuestión

*Ejemplo*: “22” corresponde al 22% de IVA, “944” exento art. 40 c. 4 bis DL 331

-        Tabla de mapeo/columna: select MBIV_Code from MB_iva

Cat Merc:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 3 caracteres
-        Descripción: código referente a la categoría de mercancía del artículo en cuestión

*Ejemplo*: “206” corresponde a adhesivos, “211” corresponde a materias primas

-        Tabla de mapeo/columna: select MBCM_Codice from MB_CatMerceologica

Factura compra:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 10 caracteres
-        Descripción: código referente al tipo de factura emitida del artículo en cuestión

*Ejemplo*: “4” corresponde a compras de semielaborados, “1” a materias primas

-        Tabla de mapeo/columna: select MBFA_TipoFatt from mb_TipoFattAcq

Código de barras:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: /
-        Descripción: código de barras del artículo en cuestión

*Ejemplo*: ABC-1234

Tipo de lote:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 2 caracteres
-        Descripción: tipo de lote al que pertenece el artículo

*Ejemplo*: “4” corresponde a compras de semielaborados, “1” corresponde a materias primas

Nomenclatura:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 50 caracteres
-        Descripción: nomenclatura, clasificación del artículo

*Ejemplo*: “32049000” corresponde a colorantes

-        Tabla de mapeo/columna: select INCN_CodNomencl from IN_CodNomenc

Código del fabricante:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 100 caracteres
-        Descripción: código del fabricante del artículo

*Ejemplo*: art0102032019

Código comercial:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: 100 caracteres
-        Descripción: código de la categoría comercial

*Ejemplo*: “P” corresponde a privado

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image07.png) 

**Datos de lista de precios<!-- Dati listino -->**:

Precio:

-        Campo: obligatorio
-        Tipo: decimal
-        Formato de Excel: moneda, sin símbolo
-        Longitud máxima: /
-        Descripción: precio de lista del artículo

*Ejemplo*: 10.99, 123.45

UMPrecio:

-        Campo: obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: /
-        Descripción: sirve para definir el precio según la cantidad (ej. precio por kilo, precio por metro cuadrado)

*Ejemplo*: “kg” corresponde a kilogramos

-        Tabla de mapeo/columna: select MBUM_Codice from MB_UnitaMisura

**Cantidad**:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato de Excel: número, dos decimales
-        Longitud máxima: /
-        Descripción: cantidad del artículo a la que se refiere el precio anterior

*Ejemplo*: 500

**Valor añadido**:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato de Excel: número, dos decimales
-        Longitud máxima: /
-        Descripción: valor adicional que se puede utilizar en la creación de listas de precios de venta desde listas de compras. Por ejemplo, si hay gastos de transporte (que tenemos que pagar al proveedor), se informan aquí para luego ser utilizados en el cálculo del precio de venta de ese artículo.

*Ejemplo*: 123.45

**% Adicional**:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato de Excel: número, dos decimales
-        Longitud máxima: /
-        Descripción: porcentaje adicional que se puede utilizar para crear listas de precios de venta desde listas de compras

*Ejemplo*: 10        

  ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image08.png)

**Descuentos**:

Descuento1:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato de Excel: número, dos decimales
-        Longitud máxima: /
-        Descripción: descuentos posibles aplicables

*Ejemplo*: “50+10” sobre el total de la línea se realiza primero un descuento del 50% y sobre el nuevo total un descuento adicional del 10%

Lo mismo para los otros dos descuentos, solo cambia el valor.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image09.png) 

**Descuentos por cantidad<!-- Sconti a qtà -->**:

Descuento1:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato de Excel: número, dos decimales
-        Longitud máxima: /
-        Descripción: descuento aplicado si se compra una determinada cantidad del artículo en cuestión

*Ejemplo*: 10

Cantidad1:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato de Excel: número, dos decimales
-        Longitud máxima: /
-        Descripción: cantidad mínima necesaria para obtener el respectivo descuento

*Ejemplo*: 550

Lo mismo para los otros dos descuentos por cantidad, solo cambia el valor correspondiente.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image10.png) 

**Descuentos por valor<!-- Sconti a valore -->**:

Descuento1:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato de Excel: número, dos decimales
-        Longitud máxima: /
-        Descripción: descuento aplicado si se supera un determinado importe de línea

*Ejemplo*: 20

Valor1:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato de Excel: número, dos decimales
-        Longitud máxima: /
-        Descripción: importe mínimo necesario para obtener el respectivo descuento

*Ejemplo*: 950

Lo mismo para los otros dos descuentos y valores.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image11.png) 

**Precio por cantidad**:

Precio1:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato de Excel: número, dos decimales
-        Longitud máxima: /
-        Descripción: precio unitario aplicado si se supera una determinada cantidad

*Ejemplo*: 3.99

Cantidad1:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato de Excel: número, dos decimales
-        Longitud máxima: /
-        Descripción: cantidad mínima necesaria para obtener el respectivo precio unitario

*Ejemplo*: 250

Lo mismo para los otros dos precios y cantidades, solo cambia el valor respectivo.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image12.png) 

**Otros datos**:

Notas:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato de Excel: texto
-        Longitud máxima: /
-        Descripción: notas adicionales

*Ejemplo*: no exponer a la luz solar

-        Tabla de mapeo/columna: select MBNC_Codice from MB_NoteCodificat

### Parámetros BizLink<!-- BizLink Parameters -->

Estos parámetros servirán para procesar las filas insertadas en la sección Datos. Como se puede ver en la imagen, algunos campos ya están precargados pero pueden modificarse si es necesario.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image13.png)

1      Hoja de cálculo BizLink<!-- BizLink Spreadsheet -->:

-        Campo: no ingresar

2      Idioma:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: código ISO para el idioma

*Ejemplo*: “it-IT” representa italiano, “en-US” representa inglés (EE. UU.)

3      Sociedad:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: es un campo precargado ya que toma los valores internos de Fluentis, se pueden ver en la parte superior izquierda.

*Ejemplo*: “1” corresponde a la sociedad demo

-        Tabla de mapeo/columna: Select MBSC_Code from MB_Soc

4      División:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: como la sociedad, se precarga

*Ejemplo*: “1” corresponde a la sede legal, “2” a la sede operativa de Milán

-        Tabla de mapeo/columna: select MBDP_Code from MB_Dep

5      País:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: país en el que se encuentra la división para la que se ha importado la lista de precios

*Ejemplo*: “GB” corresponde a Gran Bretaña, “USA” corresponde a Estados Unidos

-        Tabla de mapeo/columna: select MBNZ_Codice from MB_Nazioni

6      Código de barras:

-        Campo: obligatorio solo si en la sección de datos se ha ingresado el código de barras de al menos un artículo
-        Tipo: cadena
-        Descripción: sirve para indicar el tipo de código de barras utilizado

*Ejemplo*: “39” corresponde a COD39

-        Tabla de mapeo/columna: select MBBC_Codice from MB_BarCode

7      Cuenta<!-- Conto -->:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: cuenta del proveedor, mayor del proveedor<!-- conto del fornitore, mastro del fornitore -->

*Ejemplo*: “1701” que tiene 3 subcuentas (ver abajo)

-        Tabla de mapeo/columna: select MBPC_Conto from MB_PiaCon

8      Subcuenta<!-- Sottoconto -->:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: subcuenta del proveedor, submayor del proveedor<!-- sottoconto del fornitore, mastrino del fornitore -->

*Ejemplo*: para la cuenta<!-- conto --> 1701 vista anteriormente, hay 3 subcuentas: “001” que corresponde a cuentas, “002” a valores DDTti y “” (ninguna subcuenta especificada) que corresponde a disponibilidades líquidas<!-- disponibilità liquide -->.

-        Tabla de mapeo/columna: select BPC_SottoConto from MB_PiaCon

9      Divisa:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: la divisa con la que interpretar los valores ingresados en la sección datos

*Ejemplo*: “EUR” corresponde a Euro, “USD” corresponde a Dólar

-        Tabla de mapeo/columna: select MBDI_Divisa from MB_Divise

10  Inicio de validez:

-        Campo: obligatorio
-        Tipo: fecha y hora
-        Descripción: indica el inicio de la validez de la lista de precios insertada (dd/mm/aaaa)

*Ejemplo*: 1/10/2018

11  Fin de validez:

-        Campo: no obligatorio
-        Tipo: fecha y hora
-        Descripción: si está, indica el fin de la validez de la lista de precios insertada (dd/mm/aaaa)

*Ejemplo*: 31/12/2027

12  Tipo de descuento de lista de precios:

-        Campo: no obligatorio
-        Tipo: cadena
-        Descripción: si está, indica el tipo de descuento realizado, habrá tres tipologías diferentes para cada tipo de descuento en la sección Descuentos

*Ejemplo*: “4” corresponde a descuento final en la venta

-        Tabla de mapeo/columna: select MBST_Code from MB_Sconti

15 Tipo de descuento por cantidad:

-        Campo: no obligatorio
-        Tipo: cadena
-        Descripción: si está, indica el tipo de descuento realizado

*Ejemplo*: “4” corresponde a descuento final en la venta

-        Tabla de mapeo/columna: select MBST_Code from MB_Sconti

16 Tipo de descuento por valor:

-        Campo: no obligatorio
-        Tipo: cadena
-        Descripción: si está, indica el tipo de descuento realizado

*Ejemplo*: “4” corresponde a descuento final en la venta

-        Tabla de mapeo/columna: select MBST_Code from MB_Sconti

17 Para trabajo a terceros<!-- conto lavoro -->:

-        Campo: obligatorio
-        Tipo: booleano
-        Descripción: indica si esta lista (de trabajo a terceros<!-- conto lavoro -->) será o no para un subcontratista

*Ejemplo*: “1” es true, “0” es false

18 Inserción de artículo:

-        Campo: obligatorio
-        Tipo: booleano
-        Descripción: si se pone en 1 inserta el artículo en la tabla maestra de artículos MG_AnaArt

*Ejemplo*: “1” es true, “0” es false

19  Inserción de artículo por proveedor:

-        Campo: obligatorio
-        Tipo: booleano
-        Descripción: si se pone en 1 inserta el artículo en la tabla de artículos por proveedor MB_ArticoliFornitore, MG_FornPreferenziali

*Ejemplo*: “1” es true, “0” es false

### Iniciar importación

Una vez que se han ingresado los datos, para iniciar la importación, haga clic en el botón presente en el menú de importación, arriba a la izquierda, llamado también “Importación” como en la figura de abajo.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image14.png)

### Conclusiones – Inserción realizada

Si todo ha ido bien no aparecerá ningún mensaje de error. Para una verificación adicional, vaya al maestro de artículos (**Inicio > Artículos**) para comprobar si están presentes los artículos importados por el proveedor. Si no, aparecerá en pantalla una pantalla de error que indicará qué parámetros y/o campos no son correctos. Para interpretar el tipo de error ver Consejos y advertencias útiles en el último apartado.

### Consejos y advertencias útiles

**Formato de Excel recomendado**:

-        Para una importación correcta, se recomienda encarecidamente formatear las columnas según el tipo indicado en “Formato de Excel” de cada campo. Por ejemplo, si el tipo es decimal y en ese campo se debe ingresar una moneda, formatee el campo como moneda. De lo contrario, por ejemplo, si no se formatea la celda, Excel elimina los ceros no significativos. Para aplicar el formato, siga estos pasos:

Primero seleccione la columna deseada como en la figura siguiente:

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image15.png)

Luego, al posicionar el cursor dentro de la columna, haga clic derecho.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image16.png)

Seleccione con el botón izquierdo ** > Formato de celdas…<!-- Formato celle… -->**

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image17.png) 

En esta pantalla podrá formatear la columna seleccionada. Según las indicaciones proporcionadas en Inserción de campos<!-- Inserimento campi -->, seleccione la categoría apropiada, con las especificaciones relacionadas (por ejemplo, moneda, sin símbolo). Lo mismo se puede hacer desde la hoja de cálculo presente dentro de Fluentis.

**Atención**: el caso clásico son los códigos que contienen ceros, aparentemente, no significativos, por ejemplo “001”. Si el campo se formatea como genérico o número los ceros se descartan, si se formatea como cadena se mantienen.

**Tabla/Columna de mapeo<!-- Mapping table/colonna -->**:

-        Si en la sección Inserción de campos<!-- Inserimento campi --> aparece la entrada tabla/columna de mapeo<!-- mapping table/colonna -->, significa que el valor ingresado en el campo para la importación debe estar ya presente en la base de datos. Para visualizar los datos presentes en la base de datos, siga los siguientes pasos, donde se usará como ejemplo la clase de artículos y su mapeo:

select MBDC_Classe from MB_Classi (**\<-** este es el mapeo). Ejecutamos la consulta en “Microsoft SQL server management studio” y obtenemos el siguiente resultado:

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image18.png) 

Así, no comunica nada, para entender el significado reemplace después de la cláusula select, el símbolo “*” por el campo para componer la nueva consulta. En este caso sería select * from MB_Class, que sirve para seleccionar todo el contenido de la tabla, ejecutemos ahora.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image19.png)

Esto es útil ya que, como muestra la figura, mediante la descripción (MBDC_Descr) es posible entender qué representa el campo y verificar si lo que se ingresará está o no en la base de datos.

Este procedimiento recién descrito es universal, es decir, aplica para cada campo.

La misma representación se puede ver en Fluentis:

Desde el inicio de Fluentis seleccione **Artículos > Artículos proveedores** (ver figura abajo).

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image20.png) 

Luego, en la ventana de búsqueda que aparece, haga clic con el botón izquierdo del mouse sobre el triángulo junto a artículos, que abre un desplegable donde es posible ver la clase de los artículos con la correspondiente descripción como en la figura.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image21.png) 

Esto para la clase de artículos. Para los demás campos puede realizar el mismo procedimiento, solo cambia el lugar donde se encuentran los filtros de búsqueda en los que hacer clic para abrir el formulario.

Por lo tanto, debe ingresar uno de los valores presentes, de lo contrario la importación no se completará con éxito y se le notificará un error. Esto para cada campo que tenga tabla/columna de mapeo<!-- mapping table/colonna -->.

Si quiere agregar un campo de mapeo no presente en la base de datos, debe insertarlo o mediante consulta o desde Fluentis, en este caso la consulta de inserción no se recomienda ya que es más compleja de componer que la visualización vista antes. El procedimiento recomendado es insertarlo desde Fluentis. Siempre en el caso de la clase de artículos, desde artículos de proveedor (figura arriba) haga clic derecho dentro del filtro de búsqueda de la clase de artículo y seleccione **Abrir formulario<!-- Apri form -->**.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image22.png) 

En el formulario que se abrirá haga clic en el botón **Buscar<!-- Ricerca -->** para ver las clases de artículos presentes.

![](/img/neutral/common/search.png) 

Debajo de la última fila hay una fila vacía. Es la que se usa para ingresar nuevos valores.

 ![](/img/it-it/applications/bizlink/import-purchase-price-lists/image24.png)

Ahí debe escribir los nuevos valores y una vez hecho, solo presione Enter.

 Este procedimiento es análogo para los otros campos, lo único que cambia es el lugar en que se hallan los filtros de búsqueda donde hacer clic para abrir el formulario.

**Errores**: 

-        En caso de importación fallida, como se dijo antes, aparecerá una pantalla de error.

 Si el error se cometió en la sección Datos, se puede localizar la fila que contiene el error ya que, por ejemplo, se escribirá “System.ArgumentException: Error importing row 4”.

En este caso (ver figura abajo), el error estará en la fila 4, que no es la fila real que contiene el error. Para saber exactamente qué fila tiene el error, usando los números de la columna de la izquierda, hay que sumar 1. Por lo tanto: 

 Fila real con error = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image25.png)

Para interpretar el error, en el mensaje, siga los siguientes pasos: en la misma fila donde está el número de fila antes visto, pone el objeto al que se refiere, luego el error propiamente dicho y finalmente la propiedad en la que se encontró el error. Siempre en el ejemplo anterior “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceListsnot-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. En este caso, como se ve en la imagen, la unidad de medida relativa al precio de compra de la lista generó el error porque estaba vacía. De hecho, su ingreso es obligatorio.

 Si el error se cometió en la parte de los parámetros, el mensaje será similar, y el método de resolución sigue siendo el mismo: según la propiedad, verifique el ingreso correcto de la misma.

**Atención**: Si se encuentra una fila completamente vacía, no se notificará ningún error pero la importación terminará ahí. Por ejemplo, si la primera fila (fila n.4) está vacía por alguna razón y debajo (desde la fila n.5 inclusive) hay filas con datos, no se importará nada.

**Atención**: Si se ingresa una lista de 10 filas por ejemplo y en la fila n. 7 ocurre un error, las primeras 6 filas al no presentar problemas han sido insertadas. Si no se cambia ningún valor en las primeras 6 filas (y si obviamente el error fue corregido), al reiniciar la importación no habrá problemas, tampoco de duplicados ya que primero se verifica si el artículo ya está presente. Si se cambia solo un valor, ese artículo se insertará porque se considera como un nuevo artículo.

Finalmente, otro mensaje de error que puede aparecer es el siguiente.

![](/img/it-it/applications/bizlink/import-purchase-price-lists/image26.png) 

Como puedes ver en la imagen anterior, este tipo de mensajes son más fáciles de interpretar porque indica la referencia exacta de la celda con el error. En este caso, en la celda F:4 no hay ningún valor.