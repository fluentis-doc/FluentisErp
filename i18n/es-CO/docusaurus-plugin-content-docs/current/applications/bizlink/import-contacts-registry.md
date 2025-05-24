---
title: Importar Datos Maestros de Contacto
sidebar_position: 1
---

En este artículo se explicará cómo **Importar las anagrafías de contactos** (clientes o proveedores) dentro de **Fluentis** utilizando una **hoja electrónica**.

Esta importación es posible gracias al uso de los **BizLink Parameters**, ya que cada vez que se procese una línea, serán llamados.

### Cómo abrir la importación a través de una hoja electrónica

Haga clic en **Herramientas** (que generalmente se ubica en el lado derecho de Fluentis).

Haga clic en la sección **BizLink**.

Haga clic en **Importación On Demand > Anagrafica > Importación Clientes/Fornitori** como en la figura a continuación.

![](/img/it-it/applications/bizlink/import-contacts-registry/image03.png)

### Sección de Datos

En esta sección ingresaremos los datos que luego se harán permanentes al guardarlos en la base de datos de **Fluentis**.

Ahora en pantalla se visualiza la hoja electrónica para la importación.

![](/img/it-it/applications/bizlink/import-contacts-registry/image04.png)

A partir de este punto se pueden tomar varias rutas:

1. Importar la hoja electrónica ya completada, **Archivo > Abrir**.
2. Agregar las diversas columnas copiando y pegando desde la lista guardada en nuestra PC.
3. Guardar este archivo (**Archivo > Guardar**) en nuestra PC, para luego agregar los diversos datos y reimportarlo posteriormente en **Fluentis** (ver punto 1). Esto podría ser muy útil para pasar la plantilla de la hoja electrónica para la importación, que se debe completar para las futuras listas que nos enviarán los proveedores.
4. Agregar manualmente los campos.

**ATENCIÓN**: si tenemos una hoja electrónica guardada en nuestra PC, esta debe seguir el esquema de la hoja en la figura anterior. Es decir, el mismo orden de columnas, tipo de dato, etc. Estos últimos se explican en detalle en el siguiente párrafo.

### Inserción de campos

Al ingresar un campo, deben tenerse en cuenta muchas cosas, entre ellas tipo, longitud máxima, requerido, etc.

Indicaciones generales:

- Si el campo está escrito en rojo, es un campo obligatorio.
- Si el nombre de la celda está resaltado en verde, es una **sección**.
- Si el nombre de la celda está resaltado en amarillo, es un **campo**.
- Campo: indica si es obligatorio o no el ingreso.
- Tipo: indica el tipo del campo.
- Formateo de Excel: indica el formateo de Excel recomendado para evitar entradas incorrectas, vea al final Consejos y advertencias útiles.
- Longitud: indica si el campo tiene un límite de caracteres que se debe respetar.
- Descripción: breve descripción del campo.
*Ejemplo*: ejemplo real de lo que se puede escribir en ese campo.

- Mapa de tabla/columna: si está presente, indica la respectiva mapeo del campo en la base de datos, para profundizar vea al final Consejos y advertencias útiles.

![](/img/it-it/applications/bizlink/import-contacts-registry/image05.png)

**Datos generales**:

Código:

- Campo: obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 6 caracteres.
- Descripción: código de referencia del cliente/proveedor.
*Ejemplo*: TEGOL.
- Mapa de tabla/columna: select MBAN_Nomignolo from MB_Anagr.

Razón Social:

- Campo: obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: /.
- Descripción: razón social del cliente/proveedor.
*Ejemplo*: TEGOLA CANADESE spa.
- Mapa de tabla/columna: select MBAN_RagSoc from MB_Anagr.

Cliente/Proveedor:

- Campo: obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 1 carácter.
- Descripción: Indica si estamos ingresando un cliente o un proveedor. Las dos letras que representan cliente y proveedor están especificadas en los parámetros.
*Ejemplo*: "C" corresponde a proveedor, "F" corresponde a cliente.

**Atención**: la única forma de ingresar un contacto que es tanto cliente como proveedor es primero ingresarlo como cliente y luego como proveedor.

Cuenta:

- Campo: no obligatorio.
- Tipo: cadena.
- Descripción: cuenta del proveedor, cuenta maestra del proveedor.
*Ejemplo*: "15200" corresponde a Clientes Italia.
- Mapa de tabla/columna: select MBPC_Conto from MB_PiaCon.

Subcuenta:

- Campo: no obligatorio.
- Tipo: cadena.
- Descripción: subcuenta del proveedor, cuenta menor del proveedor.
*Ejemplo*: si se pasan las cuentas con un sistema vacío, se puede usar una codificación tipo 01; 02; 03 o 001; 002; 003.
- Mapa de tabla/columna: select BPC_SottoConto from MB_PiaCon.

Partidas (true/false):

- Campo: obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 200 caracteres.
- Descripción: bandera de partidas abiertas.
*Ejemplo*: basta con escribir "true" y al cambiar de celda automáticamente se escribirá "TRUE" en el centro de la celda o "FALSE" según sea el caso.

Dirección:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: /.
- Descripción: dirección de la sede del cliente/proveedor.
*Ejemplo*: via le dita dalla tastiera 7.
- Mapa de tabla/columna: select MBAN_Indirizzo from MB_Anagr.

Municipio:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: /.
- Descripción: municipio de la sede del cliente/proveedor.
*Ejemplo*: Cordignano.
- Mapa de tabla/columna: select MBAN_Comune from MB_Anagr.

Código Postal (CAP):

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 5 caracteres.
- Descripción: código postal de la sede del cliente/proveedor.
*Ejemplo*: 31016.
- Mapa de tabla/columna: select MBAN_CAP from MB_Anagr.

Provincia:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 200 caracteres.
- Descripción: provincia de la sede del cliente/proveedor.
*Ejemplo*: "TV" corresponde a Treviso.
- Mapa de tabla/columna: select MBAN_Provincia from MB_Anagr.

Nación:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 200 caracteres.
- Descripción: nación de la sede del cliente/proveedor.
*Ejemplo*: "IT" corresponde a Italia.
- Mapa de tabla/columna: select MBNZ_CodIso from MB_Nazioni.

Idioma:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 200 caracteres.
- Descripción: idioma utilizado por el cliente/proveedor.
*Ejemplo*: "IT" corresponde a italiano.
- Mapa de tabla/columna: select MBAN_RagSoc from MB_Anagr.

Teléfono:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 200 caracteres.
- Descripción: teléfono del cliente/proveedor.
*Ejemplo*: 0438-123456.
- Mapa de tabla/columna: select MBAN_Telefono from MB_Anagr.

Correo Electrónico:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 200 caracteres.
- Descripción: correo electrónico principal del cliente/proveedor.
*Ejemplo*: info@mycompany.com.
- Mapa de tabla/columna: select MBAN_Email from MB_Anagr.

Nota:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 200 caracteres.
- Descripción: notas adicionales.
*Ejemplo*: .
- Mapa de tabla/columna: select MBAN_Note from MB_Anagr.

![](/img/it-it/applications/bizlink/import-contacts-registry/image06.png)

**Datos fiscales**:

Código fiscal:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: /.
- Descripción: Código Fiscal del cliente/proveedor.
*Ejemplo*: IT01720550936.
- Mapa de tabla/columna: select MBAN_CodFiscale from MB_Anagr.

Código ISO:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 50 caracteres.
- Descripción: .
*Ejemplo*: "IT" corresponde a Italia.

- Mapa de tabla/columna: select MBAN_CodIso from MB_Anagr.

IVA (P. Iva):

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 200 caracteres.
- Descripción: número de identificación fiscal del cliente/proveedor.
*Ejemplo*: 28207227700.
- Mapa de tabla/columna: select MBAN_PartitaIva from MB_Anagr.

![](/img/it-it/applications/bizlink/import-contacts-registry/image07.png)

**Pagos**:

Tipo de pago:

- Campo: obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: /.
- Descripción: tipo de pago que utiliza el cliente/proveedor.
*Ejemplo*: "04" corresponde a transferencia bancaria.
- Mapa de tabla/columna: select MBTP_Pagamento from MB_TipoPag.

Soluciones de pago:

- Campo: obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: /.
- Descripción: tiempos de pago del cliente/proveedor.
*Ejemplo*: "60 GG DF" corresponde a hasta 60 días desde la fecha de la factura, "En entrega" pago al momento de la entrega de la mercancía.
- Mapa de tabla/columna: select * from MB_SolPag.

ABI:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 5.
- Descripción: identifica el banco al que pertenece la cuenta corriente del cliente/proveedor. Es una parte del IBAN.
*Ejemplo*: 01234.

CAB:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de texto: texto.
- Longitud máxima: 5.
- Descripción: indica la sucursal del respectivo banco (ABI) del cliente/proveedor. Es una parte del IBAN.
*Ejemplo*: 12345.

IBAN:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 27 caracteres.
- Descripción: es un código utilizado en las transacciones entre diferentes cuentas bancarias que contiene la identificación del país, el banco y el número de la cuenta.
*Ejemplo*: IT66C0100503382000000218020.

SWIFT:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: 11 caracteres.
- Descripción: códigos identificativos que permiten a los sistemas entender instantáneamente cuál es el banco receptor y cuál el emisor, su nombre y lugar desde donde operan. Es necesario para pagos internacionales. Está compuesto por 8 caracteres + 3 opcionales.
*Ejemplo*: "UNCRITMM" corresponde al SWIFT de UniCredit.

Zona:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: /.
- Descripción: Zona definida al inicio del IBAN.

![](/img/it-it/applications/bizlink/import-contacts-registry/image08.png)

**Agentes**:

Agente:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: /.
- Descripción: Si hay un agente (presente en la anagrafía de agentes), puede ser vinculado al cliente.
*Ejemplo*: .
- Mapa de tabla/columna: select * from MB_Agenti.

Comisiones:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: /.
- Descripción: Comisión del agente, si es diferente a la que se ingresó en la anagrafía de agente hay una máscara en la que se puede decidir cuál tiene más prioridad respecto a la otra.
*Ejemplo*: .
- Mapa de tabla/columna: select * from MB_AgentiZone.

![](/img/it-it/applications/bizlink/import-contacts-registry/image09.png)

**Listas**:

Lista:

- Campo: no obligatorio.
- Tipo: cadena.
- Formateo de Excel: texto.
- Longitud máxima: /.
- Descripción: .
*Ejemplo*: .

Descuento 1:

- Campo: no obligatorio.
- Tipo: decimal.
- Formateo de Excel: número, posición decimales = 2.
- Longitud máxima: /.
- Descripción: valor del descuento.
*Ejemplo*: 550.

Descuento 2:

- Campo: no obligatorio.
- Tipo: decimal.
- Formateo de Excel: número, posición decimales = 2.
- Longitud máxima: /.
- Descripción: valor del descuento.
*Ejemplo*: 5%.

### BizLink Parameters

Estos parámetros servirán para procesar las líneas ingresadas en la sección de Datos. Como se puede notar en la imagen, algunos campos ya están precompilados, pero nada nos impide modificarlos.

![](/img/it-it/applications/bizlink/import-contacts-registry/image10.png)

BizLink Spreadsheet:

- Campo: no debe ser ingresado.

Idioma:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: código Iso code relacionado al idioma.
*Ejemplo*: “it-IT” representa el idioma italiano, “en-US” representa el idioma inglés en América.

Empresa:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: es un campo precompilado ya que toma los valores que están dentro de Fluentis, se pueden ver en la esquina superior izquierda.
*Ejemplo*: “1” corresponde a la empresa demo.
- Mapa de tabla/columna: Select MBSC_Code from MB_Soc.

División:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: como para la empresa, se precompila.
*Ejemplo*: “1” corresponde a la sede legal, “2” a la sede operativa de Milán.
- Mapa de tabla/columna: select MBDP_Code from MB_Dep.

Identificador de cliente:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: Cualquier letra que ingresamos en los parámetros que luego corresponderá al campo cliente/proveedor. Por simplicidad, se recomienda “C”.
*Ejemplo*: “C” corresponde a clientes.

Identificador de proveedor:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: Cualquier letra que ingresamos en los parámetros que luego corresponderá al campo cliente/proveedor. Por simplicidad, se recomienda “F”.
*Ejemplo*: “F” corresponde a proveedores.

Código de tipo de cuenta de clientes:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: cuenta maestra respecto a los clientes. Para verlo también desde Fluentis, simplemente vaya a Inicio > Parámetros > Administración > Parámetros de contabilidad. Haga doble clic en el año actual y a la derecha debería ver el “Tipo de cuenta”. 
*Ejemplo*: “FIT” corresponde a clientes Italia.

Código de tipo de cuenta de proveedores:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: cuenta maestra respecto a los proveedores. Para verlo también desde Fluentis, simplemente vaya a Inicio > Parámetros > Administración > Parámetros de contabilidad. Haga doble clic en el año actual y a la derecha debería ver el “Tipo de cuenta”. 
*Ejemplo*: “CIT” corresponde a proveedores Italia.

Grupo de clientes:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: se pueden ver los códigos que están presentes desde Inicio > Contables > Plan de cuentas; en la primera máscara de visualización hay un código del grupo.
*Ejemplo*: “1520” corresponde a Clientes Italia.
- Mapa de tabla/columna: select MBGR_Gruppo from MB_GRUPP.

Grupo de proveedores:

- Campo: obligatorio.
- Tipo: cadena.
- Descripción: se pueden ver los códigos que están presentes desde Inicio > Contables > Plan de cuentas; en la primera máscara de visualización hay un código del grupo.
*Ejemplo*: “2506” corresponde a Proveedores Italia.
- Mapa de tabla/columna: select MBGR_Gruppo from MB_GRUPPI.

Código de Tipo de descuento 1:

- Campo: obligatorio solo si se ingresa el descuento 1.
- Tipo: cadena.
- Descripción: Representa la categoría de descuento aplicada a la lista.
*Ejemplo*: “C1” corresponde a descuento en cascada.
- Mapa de tabla/columna: select MBST_TipSco from MB_Sconti.

Código de Tipo de descuento 2:

- Campo: obligatorio solo si se ingresa el descuento 2.
- Tipo: cadena.
- Descripción: Representa la categoría de descuento aplicada a la lista.
*Ejemplo*: “3” corresponde a descuento comercial.
- Mapa de tabla/columna: select MBST_TipSco from MB_Sconti.

### Iniciar importación

Una vez ingresados los datos, para iniciar la importación, haga clic en el botón presente en el menú de importación, en la parte superior izquierda, llamado también "Importación", como en la figura a continuación.

![](/img/it-it/applications/bizlink/import-contacts-registry/image11.png)

### Conclusiones - Inserción realizada

Si todo va bien, no aparecerá ningún mensaje de error. Para una verificación adicional del éxito, consulte en la anagrafía de artículos (**Inicio > Artículos**) si están presentes los importados por el proveedor. De lo contrario, se mostrará en pantalla una pantalla de error que indicará qué parámetros y/o campos no son correctos. Para interpretar el tipo de error, consulte Consejos y advertencias útiles en el último párrafo.

### Consejos y advertencias útiles

**Formateo de Excel recomendado**:

- Para una correcta importación, se recomienda encarecidamente formatear las columnas según el tipo indicado en la sección “Formateo de Excel” de cada campo. Por ejemplo, si el tipo del campo es decimal y se va a ingresar una moneda, formatee el campo como moneda. Esto se debe a que, si no se formatea la celda, Excel elimina los dígitos no significativos. Para insertar el formateo, siga los siguientes pasos:

Primero, seleccione la columna deseada como en la figura a continuación:

![](/img/it-it/applications/bizlink/import-contacts-registry/image12.png)

Luego, después de posicionarse con el puntero del mouse dentro de la columna, haga clic con el botón derecho del mouse.

![](/img/it-it/applications/bizlink/import-contacts-registry/image13.png)

Seleccione haciendo clic con el botón izquierdo ** > ** **Formato de celdas**...

![](/img/it-it/applications/bizlink/import-contacts-registry/image14.png)

En esta pantalla se podrá formatear la columna seleccionada. Según las indicaciones proporcionadas en "Inserción de campos", seleccione la categoría adecuada, con las especificaciones respectivas (por ejemplo, moneda, símbolo ninguno). La misma operación se puede realizar desde la hoja electrónica presente dentro de Fluentis.

**Atención:** El caso clásico se refiere a códigos que contienen ceros, aparentemente no significativos, por ejemplo, “001”. Si el campo está formateado como genérico o número, los ceros se descartarían; si se formatea como cadena, se mantendrán.

**Mapa de tabla/columna**:

- Si en "Inserción de campos" está presente la entrada de mapa de tabla/columna, significa que el valor ingresado en el campo para la importación puede ya estar presente en la base de datos. También se han ingresado en los campos que serán ingresados desde cero para poder ver un ejemplo, si está presente, en la base de datos. Para visualizar los datos respectivos en la base de datos, basta con seguir los siguientes pasos, utilizando la clase de artículos y el respectivo mapeo como ejemplo:

select MBDC_Clase from MB_Classi (**\<-** este es el mapeo). Ejecutamos la consulta en "Microsoft SQL Server Management Studio" y obtenemos el siguiente resultado:

![](/img/it-it/applications/bizlink/import-contacts-registry/image15.png)

Visto así, no comunica nada; para entender su significado, reemplace después de la cláusula de selección, el símbolo “*” por el campo para componer la nueva consulta. En este caso, tendríamos select * from MB_Class, que sirve para seleccionar todo el contenido de la tabla; ahora ejecutamos.

![](/img/it-it/applications/bizlink/import-contacts-registry/image16.png)

Esto es útil porque, como se muestra en la figura, a través de la descripción (MBDC_Descr) es posible comprender qué representa el campo y verificar si lo que se ingresará está presente o no en la base de datos.

Este procedimiento recién descrito es universal, es decir, aplica a cada campo.

La misma representación se puede ver en Fluentis:

Desde la página de inicio de Fluentis, seleccione **Artículos > Artículos proveedores** (vea la figura a continuación).

![](/img/it-it/applications/bizlink/import-contacts-registry/image17.png)

Luego, en la máscara de búsqueda que aparece, haga clic con el botón izquierdo del mouse en el triángulo al lado de artículos, lo que abre un menú desplegable donde se puede visualizar la clase de los artículos con la descripción correspondiente como en la figura.

![](/img/it-it/applications/bizlink/import-contacts-registry/image18.png)

Esto es para la clase de artículos. Para otros campos, se podrá ejecutar el mismo procedimiento, pero solo en diferentes puntos.

Por lo tanto, debemos insertar uno de los valores presentes, de lo contrario, la importación no tendrá éxito y nos comunicará un error. Esto se aplica a cada campo que tiene el mapeo de tabla/columna.

Si queremos agregar un campo con un mapeo que no está presente en la base de datos, debe ser ingresado ya sea mediante consulta o desde Fluentis; en este caso, la consulta de inserción se desaconseja, ya que es más complicada de componer en comparación con la visualización vista anteriormente. Por lo tanto, el procedimiento recomendado es la inserción desde Fluentis. También en el caso de la clase de artículos, desde artículos proveedor (figura anterior), haga clic derecho dentro del filtro de búsqueda de la clase artículo y seleccione "abrir formulario".

![](/img/it-it/applications/bizlink/import-contacts-registry/image19.png)

En el formulario que se abrirá, haga clic en el botón de búsqueda para visualizar las clases de artículos presentes.

![](/img/neutral/common/search.png)

Debajo de la última línea presente, hay una línea vacía. Esa es la utilizada para la inserción de nuevos valores.

![](/img/it-it/applications/bizlink/import-contacts-registry/image21.png)

Ahí deben escribirse los nuevos valores a insertar y una vez hecho, basta con presionar enter.

Este procedimiento es análogo para los demás campos; la única diferencia es dónde se encuentran los filtros de búsqueda en los que se debe hacer clic con el botón izquierdo para abrir el formulario.

**Errores**:

- En caso de que la importación falle, como se mencionó anteriormente, aparecerá en pantalla un mensaje de error.

Si el error se cometió en la parte de Datos, es posible rastrear la línea que contiene el error, ya que habrá por ejemplo escrito “System.ArgumentException: Error importing row 4”. En este caso (ver figura a continuación), el error se encontrará en la línea 4, la cual, sin embargo, no es la línea efectiva que contiene el error. Para entender exactamente qué línea contiene el error, utilizando los números en la columna de la izquierda, debe sumarse 1. Por lo tanto:

Línea real conteniendo el error = Error importing rownum + 1.

![](/img/it-it/applications/bizlink/import-contacts-registry/image22.png)

Para interpretar el error, en el mensaje del mismo, siga los siguientes pasos: en la misma línea que contiene el número de línea visto anteriormente, hay escrito **el objeto** al que se refiere, luego **el error** propiamente dicho y finalmente la **propiedad** relacionada donde se encontró el error. Siempre en el ejemplo arriba mencionado “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.**PurchasePriceLists**not-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. En este caso, como se puede notar en la imagen anterior, la unidad de medida relacionada con el precio de compra de la lista generó el error porque es nula. De hecho, su inserción es obligatoria.

Si el error ocurrió en la parte de los parámetros, el mensaje será análogo; el método de resolución sigue siendo el mismo, por lo que se debe verificar la correcta inserción de la propiedad correspondiente.

**Atención**: Si se encuentra una línea completamente vacía, no se comunicará ningún error, pero la importación terminará ahí. Por ejemplo, si la primera línea (línea n.4) está vacía por algún motivo y debajo (a partir de la línea n.5 incluida) se encuentran las líneas pobladas, no se importará nada.

**Atención**: Si se inserta un anagrafía de 10 líneas y por ejemplo en la línea n. 7 ocurre un error, las primeras 6 líneas no habiendo causado problemas se han insertado. Si no se modifica ningún valor en las primeras 6 líneas (y si, por supuesto, el error ha sido corregido), al reiniciar la importación no habrá problemas, ni tampoco de duplicación, ya que primero se busca si el contacto ya está presente. Si se modifica incluso un solo valor, dicho contacto se insertará porque se verá como un nuevo contacto.

Finalmente, otro mensaje de error que puede aparecer es el siguiente.

![](/img/it-it/applications/bizlink/import-contacts-registry/image23.png)

Como se puede notar en la imagen anterior, este tipo de mensajes son más fáciles de interpretar, ya que se especifica la celda exacta con el error correspondiente. En este caso, en la celda F:4 no hay ningún valor.