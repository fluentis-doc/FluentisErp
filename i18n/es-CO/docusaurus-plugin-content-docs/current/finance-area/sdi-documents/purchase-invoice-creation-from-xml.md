---
title: Creación de factura de compra desde xml (Creazione fattura di acquisto da xml)
sidebar_position: 4
---

El botón **Creación de factura de compra (Creazione fattura di acquisto)** está disponible en la barra de herramientas del Registro de documentos Sdi, accesible a través de Applications > BizLink > Documentos SDI > Documentos de compra entrante.

:::note Nota
Para activar el botón, se debe configurar desde SQL en la tabla fluentis.SDI_CompanyConfiguration el indicador SDICFC_PurchaseInvoiceCreation.
:::

Una vez seleccionada una fila, permite crear una factura en los documentos del ciclo pasivo después de haber importado o recibido de FBH el documento sdi en formato xml. 
Por lo tanto, es posible proceder para vincularla al cumplimiento de DDT y pedidos a los que hace referencia.

Una vez clicado el botón de Creación de factura de compra, se abrirá una ventana donde se debe indicar la cuenta del proveedor a utilizar. Si la cuenta no existe, será posible crearla.  
Una vez confirmada la cuenta, se abrirá una ventana adicional con Valores a utilizar, donde se solicitan los siguientes datos:

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img1.png)

**Tipo de factura de compra (Tipo fattura di acquisto)**: indicar la tipología de documento a crear;  

**articoli**: indicar los artículos que formarán parte de la factura de compra;  

**IVA**: indicar la tasa a aplicar;  

**tipo pagamento**: contiene la tipología de pago a ingresar en el documento para el proveedor.

Todos estos datos pueden configurarse como predeterminados para las siguientes ocasiones con el indicador **salva impostazioni**, presente al lado de cada dato a utilizar.

Una vez completados todos los campos y presionado OK, se abrirá la factura de compra creada; esta tendrá la tipología, el artículo y el IVA seleccionados. Si el artículo no se reconoce como codificado, se insertará un artículo no codificado.  
Los demás datos se toman por defecto del registro del proveedor. Es posible modificar manualmente la factura y guardarla.

---

Para la creación de factura con **articoli codificati** (reconocimiento automático de las bases de datos de artículos presentes en Fluentis), es necesario proceder de la siguiente manera para permitir el reconocimiento; de lo contrario, se creará una factura con líneas de tipo 2 (no codificado).

Los registros de artículos podrán tener una codificación interna diferente de la utilizada por el proveedor que está enviando la factura.

Ejemplo: Código - MATCH1 Descripción - PT 2,5 BU  
Dentro de este registro, se deberá completar la sección del *proveedor preferencial* indicando el proveedor en cuestión y la codificación adoptada por el proveedor para este artículo.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img5.png)

El proveedor podría adoptar un tipo de codificación o incluso más de uno, como se observa en la imagen.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img3.png)

Por ejemplo, una codificación EAN o de otro tipo.

:::danger Atención
Se leerá la primera codificación presente en el documento xml; en este caso, la codificación de tipo SA, mientras que la codificación EAN será ignorada, por lo que se deberá gestionar esta primera referencia.
:::

Dentro del registro del proveedor, se deberá ingresar el código del tipo de codificación válido para el mismo proveedor (pestaña *Información fiscal*).

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img6.png)

Si las configuraciones se realizan correctamente, el resultado de la creación de la factura es el siguiente, donde se puede notar que hay una línea no codificada para los gastos de transporte no previstos a priori.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img4.png)

---

En la barra de herramientas del encabezado se encuentra el botón **sdi – chiusura documenti** que permite vincular un ddt de compra a la factura de compra recién creada. 

Una vez clicado el botón, se abrirá una ventana en la que hay filtros que se deben configurar para realizar una búsqueda más precisa de los ddt de compra a asociar: es posible ingresar el Tipo de DDT de compra, el número, el Proveedor, etc.

Al presionar el botón Buscar, en las cuadrículas de abajo se presentarán los ddt de compra a la izquierda y las facturas de compra a la derecha, que se pueden vincular. 

Seleccionando los documentos o las filas individuales en las cuadrículas y clicando el botón **collegamenti** en la barra de herramientas, se realizará el enlace entre los documentos. 

Aparecerá una ventana para avisar que la Operación ha sido completada y otra ventana con Resumen Sdi – Documentos de cierre con los detalles del enlace.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img2.png)

A partir de este momento, el ddt de compra y la factura están vinculados. Es posible verificar el enlace dentro de la Factura de compra, que contiene la referencia al ddt en la pestaña Artículos.