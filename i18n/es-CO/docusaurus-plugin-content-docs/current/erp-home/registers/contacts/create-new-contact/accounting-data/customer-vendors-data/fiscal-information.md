---
title: informazioni fiscali
sidebar_position: 2
---

En esta pestaña se ingresan datos y parámetros de tipo principalmente fiscal.

### Campos

**non in spesometro**: campo obsoleto presente por retro-compatibilidad (referido al spesometro anterior a 2017 que fue derogado). El indicador sigue funcionando ya que aún está disponible la funcionalidad para el spesometro anual (art. 21 DL 78/2010).

**Excluir de declaración lista negra (Escludi da dich. black list)**: campo obsoleto presente por retro-compatibilidad. El cumplimiento fiscal ha sido actualmente derogado.

**CIG**: el indicador activa el campo correspondiente dentro de los documentos de venta para indicar el código identificativo de la licitación (por ejemplo, para los contratos públicos). El código debe ser luego ingresado [**en la tabla correspondiente**](/docs/configurations/tables/finance/cig-and-cup) para poder ser llamado.

Para la correcta gestión de los códigos CIG y CUP en los trazados de la factura electrónica, dado que el tag correspondiente es un hijo de los datos del pedido, ver [**aquí**](/docs/finance-area/e-invoice/configuration_einvoice)

**CUP**: el indicador activa el campo correspondiente dentro de los documentos de venta para indicar el código único del proyecto (para la facturación a entidades públicas). El código debe ser luego ingresado [**en la tabla correspondiente**](/docs/configurations/tables/finance/cig-and-cup) para poder ser llamado.

Para la correcta gestión de los códigos CIG y CUP en los trazados de la factura electrónica, dado que el tag correspondiente es un hijo de los datos del pedido, ver [**aquí**](/docs/finance-area/e-invoice/configuration_einvoice)

**ritenuta d'acconto**: el indicador, que se debe asociar al campo siguiente **tipo ritenuta**, activa, para el registro de tipo proveedor en uso, la gestión de la retención de impuesto sobre la compensación del perceptor. Con este tipo de gestión activa del lado del proveedor, la inserción de los documentos y la contabilización de la factura recibida y del pago realizado se llevará a cabo desde el módulo [**percipienti**](/docs/finance-area/professional-men/general-overview) a fin de poder gestionar correctamente y de manera automática la retención de impuesto y valorar las CU.

**tipo ritenuta**: el campo (menú desplegable) está conectado a la tabla [**Tipos de retención**](/docs/configurations/tables/finance/withholding-tax-types) dentro de la cual se definen los tipos de retención a título de retención (o a título de impuesto) a utilizar. Para cada fila, correspondiente a un tipo de retención, deben ser completados los campos que permiten la gestión automática del cálculo y la contabilización por parte del [**percipienti**](/docs/finance-area/professional-men/general-overview).

***USO DE LOS CAMPOS Retención y Tipo de Retención EN LAS FACTURAS ACTIVAS***  
Es posible activar el indicador para las retenciones de impuesto y su respectivo tipo también a efectos de emitir una factura activa en el caso en que sea la empresa emisora la que esté sometida a la retención de impuestos (retenciones de impuestos sufridas). **Ver también** [**aquí**](/docs/finance-area/e-invoice/configuration_einvoice)

:::tip Ver también...  
Para la gestión en la factura electrónica de la retención de impuesto y en particular también de la contribución **ENASARCO**, ver [**aquí**](/docs/finance-area/e-invoice/configuration_einvoice)  
:::

### Administración Pública / Facturación Electrónica

El indicador **fatturazione elettronica** determina la adaptación de los campos de detalle de la cuadrícula inferior a fin de referirse al caso de la factura electrónica P.A. o de facturación electrónica con los privados.

**Código Oficina / Código destinatario (Codice Ufficio / Codice destinatario)**: código *IPA* de la oficina pública destinataria de la factura o (indicador *Facturación electrónica* activo) código *SDI* del destinatario de la factura.

**Nombre de la oficina / Descripción del destinatario (Nome ufficio / Descrizione destinatario)**: descripción del campo código oficina / código destinatario que debe ser completado con el nombre de la oficina pública o del sujeto privado.

**ragione sociale**: en este campo se puede vincular un registro ya codificado en Fluentis y referirse, por ejemplo, a la oficina pública que depende del registro principal que estamos utilizando (ejemplo: oficina de obras públicas del municipio de ..., o Empresa de salud ....... que depende del registro principal "Municipio de ...."). Este registro vinculado **deberá** estar configurado como **destino** para el registro principal en la pestaña [**entrega**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), de este modo la dirección (ejemplo oficina de obras públicas ....) será reportada en el trazado del archivo .xml completa con el código oficina y otros datos como dirección, etc.

:::danger[ATENCIÓN: campo Razón social, registro simple con único código]  
Para la correcta gestión de **múltiples códigos** oficina / códigos SDI (y por ende más sujetos) referidos al mismo registro principal es **necesario** completar también este campo.  

**ATENCIÓN:** en el caso de **único código** oficina / código SDI directamente vinculado al registro en cuestión (sin la presencia de destinos vinculados y referidos a códigos específicos de oficina / códigos SDI) **el campo NO DEBE ser completado**.  
De lo contrario, se devolverá un mensaje de error en la fase de generación del archivo xml. (Mensaje: la factura... no puede ser generada porque... el código destinatario no ha sido valorado, o la fecha de inicio del servicio....) que debe interpretarse como "no ha sido valorado *correctamente*".  
:::

**data inizio servizio**: define la fecha de inserción de la línea o, de todos modos, la fecha a partir de la cual está activo el vínculo de suministro con la administración pública en cuestión.

<a id="codice_articolo_fornitore_cliente" style={{ textDecoration: 'none' , color: 'inherit' }}></a>

**data fine servizio**: define la fecha de finalización del vínculo de suministro con la administración pública y hace que esta posición no sea más utilizable para la generación del archivo telemático para la factura electrónica.

**Email:** espacio reservado para la dirección pPEC en caso de que esté activa la modalidad PEC destinatario en el campo *Tipo código*.

**regime fiscale**: campo necesario para la gestión de las facturas electrónicas (en particular de las autofacturas a razón de compras de UE o inversión del cargo): el dato se inserta en los trazados telemáticos .xml generados por Fluentis. La caja combinada está conectada a una tabla fija que contiene los posibles regímenes fiscales a seleccionar.

**Tipo código artículo proveedor/cliente (Tipo codice articolo fornitore /cliente):** en estos dos campos, respectivamente, es posible insertar un código acompañante al código artículo que se utilizará en la facturación pasiva o activa a efectos del trazado xml. La funcionalidad es útil en varios casos tales como la creación automática de la factura de compra a partir del archivo xml recibido, permitiendo el reconocimiento del código artículo utilizado por el proveedor en relación con las configuraciones del registro del artículo en la sección de proveedores preferenciales.  

**prezzo netto senza sconti**: con esta configuración, la factura electrónica será creada por el valor neto de línea, sin resaltar el detalle del bruto - descuentos.

**fatturazione elettronica firmata**: gestión de la firma digital para la creación de archivos Sdi hacia el sujeto. El indicador puede ser configurado, no configurado o 'no definitivo', en este último caso aplicará la lógica predeterminada definida en la *Configuración de documentos electrónicos*.

**fatturazione elettronica con pdf allegato**: gestión del anexo de cortesía en el archivo Sdi. El indicador puede ser configurado, no configurado o 'no definitivo', en este último caso aplicará la lógica predeterminada definida en la *Configuración de documentos electrónicos*. En el campo de **Transformación Arm para creación de archivo Pdf factura** se indicará el proceso de creación del PDF a utilizar.

**Grupo IVA / Registro:** campo necesario para la gestión del grupo IVA al que pertenece el cliente o proveedor que estamos codificando. En este campo se llamará el registro (que debe ser creado previamente) del sujeto grupo para insertar el número de IVA de este último en el trazado xml en lugar del del sujeto adherente al grupo, como lo prevé la normativa.

:::tip Info: el grupo IVA  
Con la introducción de dicha norma, se ha previsto la posibilidad, para las empresas conectadas por intereses financieros, económicos y organizativos, de crear un grupo único, considerado como un solo contribuyente (solo a efectos del IVA) ante el fisco. Por lo tanto, contará con un único número de IVA. Las empresas que forman parte del grupo facturarán las operaciones hacia terceros con un número de IVA común, el número de IVA del grupo. En cambio, las cesiones de bienes y las prestaciones de servicios intercambiadas entre las empresas internas del grupo no tendrán relevancia a efectos del impuesto sobre el IVA. Como consecuencia de esto, todas las operaciones realizadas por uno de los sujetos del grupo se consideran realizadas por todo el grupo. La factura y los demás documentos son emitidos por el representante del Grupo o por los participantes, indicando en estos además del número de IVA del Grupo también el código fiscal del sujeto participante que ha realizado la operación.  
:::

### Límite de vencimientos para mercancías perecederas

**Art. 62 (Art. 62)**: indicador que gestiona la activación de la gestión de los vencimientos de pago máximos en el sector alimentario para bienes perecederos y no perecederos según el art. 62 D.Lgs. n. 192/2012; en particular, al ingresar los artículos en la factura, controla el vencimiento de pago con respecto a los obligatorios para este tipo de productos. Se gestiona con los dos indicadores siguientes:

> **sol. inf. 30 gg**: impone una solución de pago a 30 días eludiendo las otras configuraciones (incluidas las relativas al art. 62, por ejemplo, la solución a 60 días).  
> **sol. inf. 60 gg**: NO GESTIONADO / DESACTIVADO.

Existen otras configuraciones relacionadas con la **gestión de mercancías perecederas**:  
> **Días Pag. mercancía perecedera (GG Pag. merce deperibile)** dentro de la [**Ficha de artículo > pestaña Generales**](/docs/erp-home/registers/items/create-new-item) donde se define el vencimiento a aplicar;  
> **Días recibo factura (GG ricev. fattura)** en *Registro de cliente/proveedor > pestaña General > pestaña Direcciones alternativas*, útil para cumplir con la fecha cierta de recepción de la factura (para habilitar el campo, el tipo de dirección asociado a la dirección alternativa utilizada y definida en la tabla [**Tipos de direcciones**](/docs/configurations/tables/general-settings/address-types) debe tener el indicador *Email Fatt.C.* configurado)  
> **giorni trasporto** en la tabla *Zonas*, campo que puede ser ingresado en el *Registro de cliente/proveedor > pestaña [Entrega*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)  

### Lógica de cálculo del vencimiento de pago

El vencimiento de pago se propone a partir de la fecha de vigencia de la factura.  

La fecha de vigencia se calcula automáticamente de la siguiente manera:

- inicialmente igual a la mayor entre la fecha de inserción y la fecha de factura,  

- luego, si en el tipo de dirección del email de facturación se han establecido días de recepción de factura, a la fecha de factura se le suman los días de recepción de factura, la fecha de vigencia se convierte en la mayor entre la fecha de vigencia y la fecha de factura + días de recepción de factura.

- si en el tipo de dirección del email de facturación no se han establecido días de recepción de factura, entonces se busca si hay días de transporte en el código de zona asociado al cliente y a la fecha de factura se le suman los días de transporte, la fecha de vigencia se convierte en la mayor entre la fecha de vigencia y la fecha de factura + días de transporte.

- si para la zona del cliente no se han establecido días de transporte, la fecha de vigencia corresponde a la mayor entre la fecha de inserción de la factura y la fecha de factura.

El usuario puede en cualquier caso cambiar la fecha de vigencia y poner la fecha deseada; quedará constancia en la factura de que la fecha de vigencia ha sido cambiada manualmente.

**Para proponer correctamente la fecha de vencimiento deben ser codificadas 2 nuevas soluciones de pago con el indicador “DL Art.62” activado, ambas con el indicador fin de mes activado y el indicador comercial activado, una con días 30 y la otra con días 60**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image04.png)

Si la solución de pago del registro del cliente es mejor que la calculada para los artículos agrícolas o agroalimentarios, dicha solución se mantiene.

Al ingresar las facturas manualmente (también al cumplir las líneas del pedido del cliente) es posible ingresar, para el cliente que tiene el indicador Art62 activado, solo artículos que tengan el mismo tipo de pago, por lo tanto, todos los artículos a 30 días o a 60 días o sin días de pago. Un mensaje evitará la inserción de artículos mixtos y advertirá que la solución de pago se modificará automáticamente con la solución calculada según los días de pago de los artículos.

Al crear la factura a partir de otros documentos (por ejemplo, desde DDT), los documentos se dividirán por los días de pago presentes en el artículo y se crearán más facturas si en un mismo documento hay artículos con días de pago diferentes.

### Campos referidos a la gestión de recibos SDD (Sepa Direct Debit – Addebiti diretti SEPA)**

El Débito Directo Sepa, que reemplaza el anterior RID nacional, es un instrumento de recaudación preautorizado a razón de un mandato de débito otorgado por el Deudor a favor de su Acreedor.

Se basa en un acuerdo preventivo (mandato) entre Deudor y Acreedor que permite a este último solicitar la activación de un procedimiento interbancario para debitar la cuenta del Deudor de forma automática.

**codice scopo mandato**: en este campo debe ser reportado el ‘Purpose code' (normalmente se establece el código “GDSV” [PurchaseSaleOfGoodsAndServices]).

**Código cliente/mandato (Codice cliente/mandato)**: en este campo debe insertarse el código identificativo asignado al mandato suscrito por el deudor. Corresponde en el Rulebook (documento técnico oficial) a AT-01 Unique Mandate Reference.

El campo no es sensible a mayúsculas. Por ejemplo, los identificativos 123AAa45678, 123aaA45678, 123aaa45678 y 123AAA45678 deben ser considerados idénticos.

No puede ser valorado solamente con espacios y debe contener solo caracteres pertenecientes al conjunto latino básico.

*Ejemplo*: IT05394480900

**mandato modificato**: indicador actualmente no gestionado y que debe permanecer deseleccionado.

**data firma mandato**: en este campo debe ingresarse la fecha de firma del mandato.

**Fecha primera ejecución / Fecha última ejecución (Data prima esecuzione / Data ultima esecuzione)**: siendo el débito sdd (así como el "viejo" sistema RID) por sí mismo una ejecución periódica, este rango de fechas controla el inicio y la finalización de la validez de la ejecución.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image05.png)

Para la gestión del SDD también se deben completar los campos:

- **codice unico cliente**

- **Identificador acreedor (Identificatore creditore)**: ejemplo IT95ZZZ0000007333890900

En la tabla **società**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image06.png)

### OTRO

**gestione cointestatari**: el indicador activa la gestión de la factura de venta cotitular.

Este caso es frecuente, por ejemplo, en la venta a privados de bienes que pueden ser objeto de deducción fiscal de los impuestos sobre la renta, si el gasto es asumido por más de una persona, la factura debe estar a nombre de ambos para poder realizar la deducción.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image07.png)

Con el indicador activo, dentro de las facturas a nombre del registro en cuestión se visualizará una pestaña adicional donde se pueden ingresar los cotitulares.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image08.png)

Para llamar a los cotitulares, dentro del registro en cuestión es necesario codificarlos previamente en la sección **indirizzi alternativi** de la sección de Datos generales.

A tal fin, es necesario, previamente, definir un tipo de dirección con el indicador **cointestatari** activo dentro de la tabla **tipi indirizzi** a la cual está conectada la caja combinada del campo **tipo indirizzo**.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image09.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image10.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image11.png)

Entonces se procederá a insertarlos en la factura indicando también el porcentaje de reparto del gasto.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image12.png)