---
title: Creación de factura de compra desde xml
sidebar_position: 4
ai_generated: true
---

El botón **Creación de factura de compra<!-- Creazione fattura di acquisto -->** está disponible en la ribbon bar del Registro de documentos Sdi, accesible desde Applications > BizLink > Documentos SDI > Documentos de compra entrantes.

:::note Nota
Para activar el botón se debe establecer desde SQL en la tabla fluentis.SDI_CompanyConfiguration el flag SDICFC_PurchaseInvoiceCreation.
:::

Una vez seleccionada una fila, permite crear una factura en los documentos del ciclo de compras<!-- ciclo passivo --> después de haber importado o recibido desde FBH el documento sdi en formato xml.
Es posible proceder para vincularla a la liquidación de DDT<!-- DDT --> y pedidos<!-- ordini --> a los que hace referencia.

Después de hacer clic en el botón de Creación de factura de compra<!-- Creazione fattura di acquisto -->, se abrirá una ventana en la cual se indicará la cuenta<!-- conto --> del proveedor<!-- fornitore --> a utilizar. Si la cuenta<!-- conto --> no existe, será posible crearla.
Una vez confirmada la cuenta<!-- conto -->, se abrirá una ventana adicional "Valores a utilizar", en la que se solicitan los siguientes datos:

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img1.png)

**Tipo de factura de compra:** indicar el tipo de documento a crear;

**Artículos:** indicar los artículos<!-- articoli --> que formarán parte de la factura de compra<!-- fattura di acquisto -->;

**IVA:** indicar la tasa de IVA<!-- aliquota --> a aplicar;

**Tipo de pago:** contiene el tipo de pago a insertar en el documento para el proveedor<!-- fornitore -->.

Todos estos datos pueden configurarse como predeterminados para sugerir en ocasiones posteriores con el flag **Guardar configuración<!-- Salva impostazioni -->**, presente junto a cada dato a utilizar.

Una vez configurados todos los campos y presionado OK, se abrirá la factura de compra<!-- fattura di acquisto --> creada; esta tendrá el tipo, el artículo<!-- articolo --> y el IVA elegidos. Si el artículo<!-- articolo --> no se reconoce como codificado, se insertará un artículo no codificado.
Los demás datos se toman por defecto de la ficha del proveedor<!-- anagrafica del fornitore -->. Es posible modificar manualmente la factura y guardarla.

---

Para la creación de factura con **ARTÍCULOS CODIFICADOS** (reconocimiento automático de los registros maestros de artículos presentes en Fluentis) es necesario proceder de la siguiente manera para permitir el reconocimiento; de lo contrario, se creará una factura con líneas de tipo 2 (no codificado).

Los registros maestros de artículos<!-- anagrafiche articolo --> pueden tener una codificación interna diferente de la utilizada por el proveedor<!-- fornitore --> que está enviando la factura.

Ejemplo: Código - MATCH1  Descripción - PT 2,5 BU
Dentro de este registro maestro se deberá completar la sección de *proveedor preferente* indicando el proveedor<!-- fornitore --> en cuestión y la codificación utilizada por el proveedor<!-- fornitore --> para este artículo<!-- articolo -->.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img5.png)

El proveedor<!-- fornitore --> podría utilizar un tipo de codificación o incluso más de una, como se puede ver en la imagen.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img3.png)

Por ejemplo, una codificación EAN u otro tipo.

:::danger Atención<!-- Attenzione -->
Se leerá la primera codificación presente en el documento xml, en el ejemplo la codificación de tipo SA mientras que la codificación EAN será ignorada, por lo tanto debe gestionarse esta primera referencia.
:::

Dentro del registro maestro del proveedor<!-- anagrafica del fornitore --> se deberá entonces ingresar el código del tipo de codificación válido para el propio proveedor<!-- fornitore --> (pestaña *Información fiscal<!-- Informazioni fiscali -->*).

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img6.png)

Si las configuraciones se realizan correctamente, el resultado de la creación de la factura es el siguiente, donde se puede observar que existe una línea no codificada para los gastos de transporte no previstos de antemano.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img4.png)

---

En la ribbon bar de la cabecera está presente el botón **Sdi – Cierre de documentos<!-- Sdi – Chiusura documenti -->** que permite vincular un DDT<!-- ddt --> de compra a la factura de compra<!-- fattura di acquisto --> recién creada.

Al hacer clic en el botón se abrirá una ventana donde están presentes filtros para configurar y obtener una búsqueda más enfocada de los DDT<!-- ddt --> de compra<!-- acquisto --> a asociar: es posible ingresar el Tipo DDT<!-- Tipo DDT --> de compra, el número, el Proveedor<!-- Fornitore -->, etc.

Al pulsar el botón Buscar<!-- Ricerca -->, en las cuadrículas de abajo se mostrarán a la izquierda los DDT<!-- ddt --> de compra y a la derecha las facturas de compra<!-- fatture di acquisto --> disponibles para asociar.

Al seleccionar los documentos o las filas individuales en las cuadrículas y hacer clic en el botón **Vínculos<!-- Collegamenti -->** en la ribbon bar, se efectuará el enlace entre los documentos.

Aparecerá una ventana para avisar que la Operación ha sido completada y otra ventana "Resumen Sdi – Documentos de cierre<!-- Riepilogo Sdi – Documenti di chiusura -->" con los detalles del enlace.


![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img2.png)

Desde este momento el DDT<!-- ddt --> de compra y la factura<!-- fattura --> quedan vinculados. Es posible verificar el enlace dentro de la factura de compra<!-- Fattura di acquisto -->, que contiene la referencia al DDT<!-- ddt --> en la pestaña Artículos.