---

title: Importación de Registros de Contactos
sidebar_position: 1
ai_generated: true
---



En este artículo se explicará cómo **importar los registros de contactos** (clientes o proveedores<!-- fornitori -->) dentro de **Fluentis** utilizando una **hoja de cálculo electrónica**.

Esta importación es posible gracias al uso de los **BizLink Parameters**, ya que cada vez que se procese una fila, estos serán llamados.


### Cómo abrir la importación mediante hoja de cálculo<!-- Come aprire l'importazione tramite foglio elettronico -->

Haga clic en **Herramientas** (normalmente se encuentra en el lado derecho de Fluentis).

Haga clic en la sección **BizLink**

Haga clic en **Importación On Demand > Registros > Importación de Clientes/Proveedores<!-- Importazione Clienti/Fornitori -->** como en la figura de abajo.

![](/img/it-it/applications/bizlink/import-contacts-registry/image03.png) 


### Sección Datos<!-- Sezione Data -->

En esta sección introduciremos los datos que luego serán almacenados de forma permanente mediante el guardado en la base de datos de **Fluentis**.

Ahora, en pantalla se visualiza la hoja de cálculo para la importación.

![](/img/it-it/applications/bizlink/import-contacts-registry/image04.png) 

Desde este punto se pueden tomar varias rutas:

 1. Importar la hoja de cálculo ya completada, **File > Open**.
 2. Agregar las columnas copiando y pegando desde la lista de precios guardada en nuestro pc.
 3. Guardar este archivo (**File > Save**) en nuestro pc, para luego añadirle los diversos datos y reimportarlo posteriormente en **Fluentis** (ver punto 1). Esto puede ser muy útil para compartir la plantilla de la hoja de cálculo para la importación, para futuros listados que envíen los proveedores. 
 4. Añadir manualmente los campos.

**ATENCIÓN**: si tenemos una hoja de cálculo guardada en nuestro pc, debe seguir el mismo esquema de la hoja mostrada arriba. Es decir, el mismo orden de columnas, tipo de dato, etc. Estos últimos están explicados en detalle en el siguiente párrafo.


### Inserción de campos<!-- Inserimento campi -->

Al ingresar un campo, se deben tener en cuenta varios aspectos, como tipo, longitud máxima, si es requerido, etc.

Indicaciones generales:

-        Si el campo está escrito en rojo es un campo obligatorio
-        Si el nombre de la celda está resaltado en verde es una **sección**
-        Si el nombre de la celda está resaltado en amarillo es un **campo**
-        Campo: indica si es obligatorio o no su ingreso
-        Tipo: indica el tipo de campo
-        Formato Excel: indica el formato recomendado en Excel para evitar errores al ingresar datos; consulte al final Consejos y advertencias útiles
-        Longitud: indica si el campo tiene un límite de caracteres a respetar
-        Descripción: breve descripción del campo
*Ejemplo*: ejemplo real de qué se puede escribir en ese campo
-        Mapping table/columna: si aparece, indica el mapeo correspondiente del campo en la base de datos; para más información consulte al final Consejos y advertencias útiles

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image05.png)

 

**Datos generales**:

Código:

-        Campo: obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 6 caracteres
-        Descripción: código de referencia del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: TEGOL
-        Mapping table/columna: select MBAN_Nomignolo from MB_Anagr

Razón Social:

-        Campo: obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: /
-        Descripción: razón social del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: TEGOLA CANADESE spa
-        Mapping table/columna: select MBAN_RagSoc from MB_Anagr

Cliente/Proveedor:

-        Campo: obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 1 carácter
-        Descripción: Indica si estamos ingresando un cliente<!-- cliente --> o un proveedor<!-- fornitore -->. Las dos letras que representan cliente y proveedor se especifican en los parámetros.
*Ejemplo*: “C” corresponde a cliente<!-- cliente -->, “F” corresponde a proveedor<!-- fornitore -->

**Atención**: la única manera de insertar un contacto que es a la vez cliente y proveedor es ingresarlo primero como cliente y luego como proveedor.

Cuenta<!-- Conto -->:

-        Campo: no obligatorio
-        Tipo: cadena
-        Descripción: cuenta del proveedor<!-- fornitore -->, cuenta principal de proveedor<!-- mastro del fornitore -->
*Ejemplo*: “15200” corresponde a Clientes Italia
-        Mapping table/columna: select MBPC_Conto from MB_PiaCon

Subcuenta<!-- Sottoconto -->:

-        Campo: no obligatorio
-        Tipo: cadena
-        Descripción: subcuenta del proveedor<!-- fornitore -->, subcuenta principal del proveedor<!-- mastrino del fornitore -->
*Ejemplo*: si se pasan las cuentas con sistema vacío se puede utilizar una codificación tipo 01; 02; 03 o 001; 002; 003
-        Mapping table/columna: select BPC_SottoConto from MB_PiaCon

Partidas abiertas (true/false):

-        Campo: obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 200 caracteres
-        Descripción: flag partidas abiertas
*Ejemplo*: simplemente escriba “true” y al cambiar de celda, automáticamente se escribirá “TRUE” en el centro de la celda o “FALSE” según sea el caso

Dirección:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: /
-        Descripción: dirección de la sede del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: calle fuera de teclado 7
-        Mapping table/columna: select MBAN_Indirizzo from MB_Anagr

Municipio:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: /
-        Descripción: municipio de la sede del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: Cordignano
-        Mapping table/columna: select MBAN_Comune from MB_Anagr

Código Postal:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 5 caracteres
-        Descripción: código postal de la sede del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: 31016
-        Mapping table/columna: select MBAN_CAP from MB_Anagr

Provincia:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 200 caracteres
-        Descripción: provincia de la sede del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: “TV” corresponde a Treviso
-        Mapping table/columna: select MBAN_Provincia from MB_Anagr

País:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 200 caracteres
-        Descripción: país sede del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: “IT” corresponde a Italia
-        Mapping table/columna: select MBNZ_CodIso from MB_Nazioni

Idioma:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 200 caracteres
-        Descripción: idioma usado por el cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: “IT” corresponde a italiano
-        Mapping table/columna: select MBAN_RagSoc from MB_Anagr

Teléfono:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 200 caracteres
-        Descripción: teléfono del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: 0438-123456
-        Mapping table/columna: select MBAN_Telefono from MB_Anagr

Correo electrónico:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 200 caracteres
-        Descripción: correo electrónico principal del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: info@mycompany.com
-        Mapping table/columna: select MBAN_Email from MB_Anagr

Nota:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 200 caracteres
-        Descripción: notas adicionales
*Ejemplo*:
-        Mapping table/columna: select MBAN_Note from MB_Anagr

![](/img/it-it/applications/bizlink/import-contacts-registry/image06.png) 

**Datos fiscales**:

Código fiscal:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: /
-        Descripción: Código Fiscal del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: IT01720550936
-        Mapping table/columna: select MBAN_CodFiscale from MB_Anagr

Código ISO:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 50 caracteres
-        Descripción:
*Ejemplo*: “IT” corresponde a Italia
-        Mapping table/columna: select MBAN_CodIso from MB_Anagr

NIF/CUIT/RUT (P. Iva):

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 200 caracteres
-        Descripción: NIF/CUIT/RUT del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: 28207227700
-        Mapping table/columna: select MBAN_PartitaIva from MB_Anagr

![](/img/it-it/applications/bizlink/import-contacts-registry/image07.png) 

**Pagos**:

Tipo de pago:

-        Campo: obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: /
-        Descripción: tipo de pago utilizado por el cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: “04” corresponde a transferencia bancaria
-        Mapping table/columna: select MBTP_Pagamento from MB_TipoPag

Condiciones de Pago:

-        Campo: obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: /
-        Descripción: condiciones de pago del cliente/proveedor<!-- cliente/fornitore -->
*Ejemplo*: “60 GG DF” corresponde a dentro de 60 días desde la fecha de la factura, “En entrega” pago al momento de la entrega de la mercancía
-        Mapping table/columna: select * from MB_SolPag

ABI:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 5
-        Descripción: identifica el banco al que pertenece la cuenta corriente del cliente/proveedor<!-- cliente/fornitore -->. Es una parte del IBAN
*Ejemplo*: 01234

CAB:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato texto
-        Longitud máxima: 5
-        Descripción: indica la agencia bancaria (ABI) del cliente/proveedor<!-- cliente/fornitore -->. Es una parte del IBAN
*Ejemplo*: 12345

IBAN:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 27 caracteres
-        Descripción: es un código que se utiliza en transacciones entre cuentas corrientes diferentes y que contiene el país, el banco y el número de cuenta corriente.
*Ejemplo*: IT66C010050338 2000000218020     

SWIFT:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: 11 caracteres
-        Descripción: cifras identificativas que permiten a los sistemas reconocer instantáneamente el banco receptor y emisor, su nombre y lugar desde donde operan. Es obligatorio para pagos internacionales. Consta de 8 caracteres + 3 opcionales.
*Ejemplo*: “UNCRITMM” corresponde al SWIFT de UniCredit

Zona:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: /
-        Descripción: zona definida al inicio del IBAN
*Ejemplo*: “IT” corresponde a Italia

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image08.png)

**Agentes**:

Agente:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: /
-        Descripción: Si existe un agente (presente en el registro de agentes), se puede vincular al cliente
*Ejemplo*:
-        Mapping table/columna: select * from MB_Agenti

Comisiones:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: /
-        Descripción: Comisión del agente, si es diferente a la ingresada en el registro, hay una máscara donde se puede decidir cuál tiene prioridad
*Ejemplo*:
-        Mapping table/columna: select * from MB_AgentiZone

![](/img/it-it/applications/bizlink/import-contacts-registry/image09.png) 

**Listados de precios**:

Lista de precios:

-        Campo: no obligatorio
-        Tipo: cadena
-        Formato Excel: texto
-        Longitud máxima: /
-        Descripción:
*Ejemplo*:

Descuento 1:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato Excel: número, decimales = 2
-        Longitud máxima: /
-        Descripción: valor del descuento
*Ejemplo*: 550

Descuento 2:

-        Campo: no obligatorio
-        Tipo: decimal
-        Formato Excel: número, decimales = 2
-        Longitud máxima: /
-        Descripción: valor del descuento
*Ejemplo*: 5%

 
### BizLink Parameters

Estos parámetros servirán para procesar las filas insertadas en la sección de Datos. Como puede verse en la imagen, algunos campos ya vienen pre-rellenados pero pueden ser modificados.

![](/img/it-it/applications/bizlink/import-contacts-registry/image10.png) 

 BizLink Spreadsheet:

-        Campo: no ingresar

Idioma:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: código ISO de idioma
*Ejemplo*: “it-IT” representa el idioma italiano, “en-US” representa el inglés hablado en Estados Unidos.

 Empresa:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: es un campo pre-rellenado ya que toma los valores ya presentes en Fluentis, visibles en la esquina superior izquierda.
*Ejemplo*: “1” corresponde a la empresa demo
-        Mapping table/columna: Select MBSC_Code from MB_Soc

División:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: igual que la empresa, se pre-rellena
*Ejemplo*: “1” corresponde a la sede legal, “2” a la sede operativa de Milán
-        Mapping table/columna: select MBDP_Code from MB_Dep

Identificador de cliente:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: Cualquier letra que ingresemos en los parámetros que luego corresponderá al campo cliente/proveedor<!-- cliente/fornitore -->. Para mayor facilidad se aconseja “C”
*Ejemplo*: “C” corresponde a clientes<!-- clienti -->

Identificador de proveedor:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: Cualquier letra que ingresemos en los parámetros que luego corresponderá al campo cliente/proveedor<!-- cliente/fornitore -->. Para mayor facilidad se aconseja “F”
*Ejemplo*: “F” corresponde a proveedores<!-- fornitori -->

Código tipo de cuenta clientes:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: cuenta principal comparada a clientes<!-- clienti -->. Para verlo en Fluentis, vaya a Inicio** > **Parámetros** > **Administración** > **Parámetros contables**. Haga doble clic en el año en curso y a la derecha debería verse el “Tipo de cuenta”
*Ejemplo*: “FIT” corresponde a clientes Italia
-        Mapping table/columna: select MBSC_Code from MB_Soc

Código tipo de cuenta proveedores:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: cuenta principal comparada a proveedores<!-- fornitori -->. Para verlo en Fluentis, vaya a Inicio ** > ** Parámetros ** > ** Administración ** > ** Parámetros contables. Haga doble clic en el año en curso y a la derecha debería verse el “Tipo de cuenta”
*Ejemplo*: “CIT” corresponde a proveedores Italia

Grupo clientes:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: puede verse desde Inicio ** > ** Contabilidad ** > ** Plan contable, en la primera ventana hay un código de grupo.
*Ejemplo*: “1520” corresponde a Clientes Italia
-        Mapping table/columna: select MBGR_Gruppo from MB_GRUPP

Grupo proveedores:

-        Campo: obligatorio
-        Tipo: cadena
-        Descripción: puede verse desde Inicio ** > ** Contabilidad ** > ** Plan contable, en la primera ventana hay un código de grupo.
*Ejemplo*: “2506” corresponde a Proveedores Italia
-        Mapping table/columna: select MBGR_Gruppo from MB_GRUPPI

Código Tipo descuento 1:

-        Campo: obligatorio solo si se ingresa el descuento 1
-        Tipo: cadena
-        Descripción: representa la categoría de descuento aplicada al listado de precios
*Ejemplo*: “C1” corresponde a descuento en cascada
-        Mapping table/columna: select MBST_TipSco from MB_Sconti

Código Tipo descuento 2:

-        Campo: obligatorio solo si se ingresa el descuento 2
-        Tipo: cadena
-        Descripción: representa la categoría de descuento aplicada al listado de precios
*Ejemplo*: “3” corresponde a descuento comercial
-        Mapping table/columna: select MBST_TipSco from MB_Sconti



### Iniciar importación<!-- Avviare importazione -->

Una vez ingresados los datos, para iniciar la importación, haga clic en el botón presente en el menú de importación, en la parte superior izquierda, llamado también “Importación” como en la figura de abajo.

![](/img/it-it/applications/bizlink/import-contacts-registry/image11.png)



### Conclusión – Inserción exitosa<!-- Conclusioni – Inserimento avvenuto -->

Si todo sale bien, no aparecerá ningún mensaje de error. Para una comprobación adicional de éxito, verifique en la anagráfica de artículos (**Inicio > Artículos**) si están presentes los que importó el proveedor<!-- fornitore -->. Si no, aparecerá en pantalla una ventana de error que indicará qué parámetros y/o campos no son correctos. Para interpretar el tipo de error, vea Consejos y advertencias útiles en el último párrafo. 





### Consejos y advertencias útiles<!-- Consigli e avvertenze utili -->

**Formato de Excel recomendado**:

-        Para una correcta importación, es altamente recomendable formatear las columnas según el tipo indicado en el apartado “Formato Excel” de cada campo. Por ejemplo, si el tipo de campo es decimal y en ese campo se debe ingresar una moneda, formatee el campo como moneda. Esto se debe a que, por ejemplo, si la celda no se formatea, Excel eliminará los dígitos no significativos. Para aplicar el formato, siga estos pasos:

Primero seleccione la columna deseada como se muestra en la figura a continuación:

![](/img/it-it/applications/bizlink/import-contacts-registry/image12.png) 

Luego, después de posicionar el puntero del ratón dentro de la columna, presione el botón derecho del ratón.

![](/img/it-it/applications/bizlink/import-contacts-registry/image13.png) 

Seleccione, presionando el botón izquierdo ** > ** **Formato de celdas**…

![](/img/it-it/applications/bizlink/import-contacts-registry/image14.png) 

En esta pantalla se podrá formatear la columna seleccionada. Según lo indicado en el apartado “Inserción de campos”, seleccione la categoría adecuada, con las especificaciones correspondientes (por ejemplo, moneda, símbolo ninguno). Lo mismo puede hacerse desde la hoja de cálculo existente en Fluentis.

**Atención:** El caso típico se refiere a códigos con ceros aparentemente no significativos, ejemplo “001”. Si el campo está formateado como genérico o número, los ceros serán descartados; si se formatea como cadena, se conservarán.

**Mapping table/columna**:

-        Si al “Insertar campos” está presente la opción mapping table/columna, significa que el valor ingresado para la importación puede ya encontrarse en la base de datos. Se ha incluido también en campos que serán ingresados desde cero para poder ver, si lo hay, un ejemplo en la base de datos. Para visualizar los datos relacionados presentes en la base de datos siga estos pasos, usando como ejemplo la clase artículos y su mapeo:

select MBDC_Classe from MB_Classi (**\<-** este es el mapping). Ejecute la consulta en “Microsoft SQL server management studio” y obtendrá el siguiente resultado:

![](/img/it-it/applications/bizlink/import-contacts-registry/image15.png) 

Así no significa nada, para entender su significado reemplace tras la cláusula select, el símbolo “*” por el campo para componer la nueva consulta. En este caso, sería select * from MB_Class, lo que sirve para extraer todo el contenido de la tabla; ejecútela ahora.

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image16.png)

Esto es útil ya que, como se muestra en la figura, mediante la descripción (MBDC_Descr) se puede entender qué representa el campo y verificar si está presente o no en la base de datos.

Este procedimiento es universal, es decir, vale para cualquier campo.

La misma representación puede verse en Fluentis:

Desde la home de Fluentis seleccione **Artículos > Artículos proveedores** (ver imagen abajo).

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image17.png)

Luego, en la ventana de búsqueda, haga clic con el botón izquierdo sobre el triángulo junto a artículos, abrirá un desplegable donde puede visualizar la clase de artículos con su descripción como en la figura.

![](/img/it-it/applications/bizlink/import-contacts-registry/image18.png) 

Esta es la clase artículos. Para los otros campos, puede realizar el mismo procedimiento simplemente en diferentes puntos.

Por lo tanto, se debe ingresar uno de los valores presentes, de lo contrario la importación no será exitosa y se notificará un error. Esto para cualquier campo con mapping table/columna.

Si desea agregar un campo cuyo mapeo no está presente en la base de datos, debe ingresarse mediante consulta o desde Fluentis, en este caso, la consulta de inserción no se recomienda porque es más compleja que la visualización. El procedimiento recomendado es la inserción desde Fluentis. Siempre en el caso de la clase artículos, desde artículos proveedor (figura arriba), haga clic derecho dentro del filtro de búsqueda de la clase de artículo y seleccione “abrir formulario”.

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image19.png)

En el formulario que se abrirá, pulse el botón buscar para ver las clases de artículo presentes.

 ![](/img/neutral/common/search.png)

Debajo de la última fila hay una fila vacía. Esta es la utilizada para ingresar nuevos valores.

![](/img/it-it/applications/bizlink/import-contacts-registry/image21.png) 

Allí deben escribirse los nuevos valores y, una vez realizado esto, basta con pulsar Enter.

 Este procedimiento es similar para los demás campos, lo único que cambia es dónde se encuentran los filtros de búsqueda donde hacer click izquierdo para abrir el formulario.

**Errores:** 

-        En caso de que la importación falle, como se mencionó antes, aparecerá una pantalla de error.

 Si el error ocurre en la parte de Datos, es posible rastrear la fila que contiene el error ya que, por ejemplo, se mostrará “System.ArgumentException: Error importing row 4”. En ese caso (ver figura abajo), el error estará en la fila 4, que sin embargo no es la real fila donde está el error. Para saber exactamente qué fila tiene el error, sume 1 al número de la columna de la izquierda. Así:

 Fila real con error = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-contacts-registry/image22.png)

   

Para entender el mensaje de error, en la misma fila del número de fila visto antes, se muestra **el objeto** al que se refiere, luego **el error** en sí y finalmente la **propiedad** sobre la que recayó el error. Siempre en el ejemplo anterior: “Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.**PurchasePriceLists** not-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”. En este caso, como se aprecia en la imagen, la unidad de medida relacionada al precio de compra lista de precios generó el error porque es nula. De hecho, su ingreso es obligatorio.

 Si el error fue cometido en la parte de parámetros el mensaje será similar, el método de resolución sigue siendo el mismo, por lo tanto, verifique el correcto ingreso de la propiedad mencionada.

**Atención**: Si se encuentra una fila completamente vacía, no se mostrará ningún error pero la importación terminará allí. Por ejemplo, si la primera fila (fila n.4) está vacía por algún motivo y abajo (desde la fila n.5 incluida) hay filas con datos, no se importará nada.

**Atención**: Si se inserta un registro de 10 filas y en la fila n.7 se produce un error, las primeras 6 filas, al no causar problemas, fueron insertadas. Si no se cambia ningún valor en las primeras 6 filas (y obviamente se corrigió el error), al reiniciar la importación no habrá problemas ni duplicados, pues primero se busca si el contacto ya existe. Si se cambia aunque sea un valor, dicho contacto se insertará nuevamente ya que se reconoce como un nuevo contacto.

Por último, otro mensaje de error que puede aparecer es el siguiente.

 ![](/img/it-it/applications/bizlink/import-contacts-registry/image23.png)

Como se observa en la imagen arriba, este tipo de mensajes son más fáciles de interpretar porque se indica la celda exacta con el error. En este caso, en la celda F:4 no hay valor.