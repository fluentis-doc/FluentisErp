---
title: Información Fiscal (Informazioni Fiscali)
sidebar_position: 2
---

En esta pestaña se ingresan datos y parámetros de tipo predominantemente fiscal.

### Campos (Campi)

**No en Spesometro (Non in Spesometro)**: campo obsoleto presente para retrocompatibilidad (referido al spesometro anterior a 2017 que fue derogato). Sin embargo, el indicador sigue funcionando ya que todavía existe la funcionalidad para el spesometro anual (art. 21 DL 78/2010).

**Excluir de declaración black list (Escludi da dich. black list)**: campo obsoleto presente para retrocompatibilidad. El cumplimiento fiscal ha sido actualmente derogato.

**CIG**: el indicador activa el campo correspondiente dentro de los documentos de venta para indicar el código identificativo de la licitación (ejemplo para los contratos públicos). El código debe ser luego ingresado [**en la tabla correspondiente**](/docs/configurations/tables/finance/cig-and-cup) para poderlo llamar.

Para la correcta gestión de los códigos CIG y CUP en los trazados de la factura electrónica, siendo el tag correspondiente un hijo de los datos del pedido, ver [**aquí**](/docs/finance-area/e-invoice/configuration_einvoice).

**CUP**: el indicador activa el campo correspondiente dentro de los documentos de venta para indicar el código único del proyecto (para la facturación a entidades públicas). El código debe ser luego ingresado [**en la tabla correspondiente**](/docs/configurations/tables/finance/cig-and-cup) para poderlo llamar.

Para la correcta gestión de los códigos CIG y CUP en los trazados de la factura electrónica, siendo el tag correspondiente un hijo de los datos del pedido, ver [**aquí**](/docs/finance-area/e-invoice/configuration_einvoice).

**Retención de impuesto (Ritenuta d'acconto)**: el indicador, que debe asociarse al siguiente campo *Tipo de retención (Tipo ritenuta)*, activa, para la base de datos de tipo proveedor en uso, la gestión de la retención de impuesto sobre el pago del perceptor. Con este tipo de gestión activa del lado del proveedor, la inserción de los documentos y la contabilización de la factura recibida y del pago realizado se llevará a cabo desde el módulo [**Perceptores (Percipienti)**](/docs/finance-area/professional-men/general-overview) para poder gestionar correctamente y de manera automática la retención de impuesto y valorar los CU.

**Tipo de retención (Tipo ritenuta)**: el campo (menú desplegable) está vinculado a la tabla [**Tipos de retención (Tipi ritenuta)**](/docs/configurations/tables/finance/withholding-tax-types) donde se definen los tipos de retención a título de cuenta (o a título de impuesto) a utilizar. Para cada línea, correspondiente a un tipo de retención, deben completarse los campos que permiten la gestión automática del cálculo y la contabilización por parte del [**módulo Perceptores (Percipienti)**](/docs/finance-area/professional-men/general-overview).

***USO DE LOS CAMPOS Retención y Tipo de Retención EN LAS FACTURAS ACTIVAS***
Es posible activar el indicador para las retenciones de impuestos y el tipo correspondiente también a efectos de la emisión de factura activa en el caso en que sea la empresa emisora la que esté sujeta a la retención de impuesto (retenciones sufridas). **Ver también** [**aquí**](/docs/finance-area/e-invoice/configuration_einvoice).


:::tip Ver también...
Para la gestión en la factura electrónica de la retención de impuesto y en particular también de la contribución **ENASARCO** ver [**aquí**](/docs/finance-area/e-invoice/configuration_einvoice).
:::

**División de los pagos (Scissione dei pagamenti)**: indicador para marcar los sujetos en el régimen de *Split Payment*, ya sean privados (sociedades cotizadas en bolsa, etc., sujetos a este régimen especial), o Administraciones Públicas (en este caso también se activará el indicador homónimo descrito a continuación). La activación de este indicador gestiona los plazos en la factura e impone el cálculo de las partidas a solo imponible.

### Administración Pública / Facturación Electrónica

El indicador **Administración Pública (Pubblica amministrazione)** determina la adaptación de los campos de detalle de la cuadrícula inferior para referirse al caso de la factura electrónica A.P. o de facturación electrónica con los privados.

**Código de Oficina / Código destinatario (Codice Ufficio / Codice destinatario)**: código *IPA* de la oficina pública destinataria de la factura o (si el indicador *Facturación electrónica* está activo) código *SDI* del destinatario de la factura.

**Nombre de la oficina / Descripción del destinatario (Nome ufficio / Descrizione destinatario)**: descripción del campo código de oficina / código destinatario que debe completarse con el nombre de la oficina pública o del sujeto privado.

**Razón social (Ragione sociale)**: en este campo es posible vincular una base de datos ya codificada en Fluentis que se refiere, por ejemplo, a la oficina pública que depende de la base de datos principal que estamos utilizando (ejemplo: oficina de obras públicas del municipio de ..., o Empresa sanitaria .... que depende de la base de datos principal "Municipio de ...."). Esta base de datos vinculada **debe** establecerse como **destino** para la base de datos principal en la pestaña [**entrega**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), de este modo el destino (ejemplo oficina de obras públicas ....) se reflejará en el trazado del archivo .xml completo con el código de oficina y otros datos como dirección, etc.

:::danger[ATENCIÓN: campo Razón social, base de datos simple con código único]
Para la correcta gestión de **más códigos** de oficina / códigos SDI (y por lo tanto más sujetos) referidos a la misma base de datos principal es **necesario** completar también este campo. 

**ATENCIÓN:** en el caso de **código único** de oficina / código SDI directamente vinculado a la base de datos en cuestión (sin la presencia de destinos vinculados y referidos a códigos específicos de oficina / códigos SDI) **el campo NO DEBE ser completado**. 
De lo contrario, se devolverá un mensaje de error en la fase de generación del archivo xml. (Mensaje: la factura... no puede ser generada porque... el código destinatario no ha sido valorado, o la fecha de inicio del servicio....) debe interpretarse como "no ha sido valorado *correctamente*".
:::

**Fecha de inicio del servicio (Data inizio servizio)**: define la fecha de inserción de la línea o en cualquier caso la fecha desde la cual es activo el vínculo de suministro con la administración pública en cuestión.


<a id="codice_articolo_fornitore_cliente" style={{ textDecoration: 'none' , color: 'inherit' }}></a>


**Fecha de finalización del servicio (Data fine servizio)**: define la fecha de finalización del contrato de suministro con la administración pública y hace que esta posición ya no sea utilizable para la generación del archivo telemático para la factura electrónica.

**Email (Email)**: espacio reservado para la dirección PEC en caso de que esté activa la modalidad de destinatario PEC en el campo *Tipo de código (Tipo codice)*.

**Régimen fiscal (Regime fiscale)**: campo necesario para la gestión de las facturas electrónicas (en particular de las autofacturas por compras de la UE o reverse charge): el dato se inserta en los archivos telemáticos .xml generados por Fluentis. La caja combinada está vinculada a una tabla fija que contiene los posibles regímenes fiscales a seleccionar.

**Tipo de código de artículo proveedor/cliente (Tipo codice articolo fornitore /cliente)**: en estos dos campos, se puede ingresar un código acompañante al código de artículo que se utilizará en la facturación pasiva o activa a efectos del archivo xml. Esta funcionalidad es útil en varios casos, como por ejemplo, la creación automática de la factura de compra a partir del archivo xml recibido, permitiendo el reconocimiento del código de artículo utilizado por el proveedor en relación con las configuraciones del registro del artículo en la sección de proveedores preferenciales.

**Precio neto sin descuentos (Prezzo netto senza sconti)**: con esta configuración, la factura electrónica se creará para el valor neto de línea, sin resaltar el detalle del bruto - descuentos.

**Factura electrónica firmada (Fatturazione elettronica firmata)**: gestión de la firma digital para la creación de archivos Sdi hacia el sujeto. El indicador puede estar establecido, no establecido o 'no definitivo'; en este último caso se aplicará la lógica predeterminada definida en la *Configuración de documentos electrónicos (Configurazione documenti elettronici)*.

**Factura electrónica con pdf adjunto (Fatturazione elettronica con pdf allegato)**: gestión del adjunto de cortesía en el archivo Sdi. El indicador puede estar establecido, no establecido o 'no definitivo'; en este último caso se aplicará la lógica predeterminada definida en la *Configuración de documentos electrónicos (Configurazione documenti elettronici)*. En el campo de **Transformación Arm para creación de archivo Pdf factura (Trasformazione Arm per creazione file Pdf fattura)** se indicará el proceso de creación del pdf a utilizar.

**Grupo IVA / Registro (Gruppo IVA / Anagrafica)**: campo necesario para la gestión del grupo IVA al que pertenece el cliente o el proveedor que estamos codificando. En este campo se llamará al registro (por crear previamente) del sujeto grupo a fin de insertar el número de IVA de este último en el archivo xml en lugar del de la persona adherente al grupo, como lo estipula la normativa.

:::tip Info: el grupo IVA
Con la introducción de esta norma, se previó la posibilidad, para las empresas conectadas por intereses financieros, económicos y organizativos, de crear un grupo único, considerado como un solo contribuyente (solo a efectos del IVA) frente a la administración fiscal. Por lo tanto, contará con un único número de IVA. Las empresas que forman parte del grupo facturarán las operaciones a terceros con el número de IVA común, el número de IVA grupal. Por otro lado, las cesiones de bienes y las prestaciones de servicios intercambiadas entre las empresas del grupo no se considerarán a efectos de la base imponible del IVA. Como resultado, todas las operaciones realizadas por uno de los sujetos del grupo se consideran como realizadas por todo el grupo. La factura y otros documentos son emitidos por el representante del Grupo o por los participantes, indicando en ellos, además del número de IVA del Grupo, también el número de identificación fiscal del sujeto participante que ha realizado la operación.
:::

### Límite de vencimientos para productos perecederos (Limite scadenze merci deperibili)

**Art. 62**: indicador que gestiona la activación de la gestión de vencimientos máximos de pago en el sector alimentario para bienes perecederos y no perecederos conforme al art. 62 D.Lgs. n. 192/2012; en particular, al insertar los artículos en la factura, controla el vencimiento de pago con respecto a los obligatorios para esta tipología de productos. Se gestiona con los siguientes dos indicadores:

> **Sol. inf. 30 días (Sol. inf. 30 gg)**: impone una solución de pago a 30 días, omitiendo otras configuraciones (incluso las relacionadas con el art. 62, por ejemplo, la solución a 60 días).  
> **Sol. inf. 60 días (Sol. inf. 60 gg)**: NO GESTIONADO / DESACTIVADO.

Existen otras configuraciones relacionadas con la **gestión de productos perecederos (gestione merci deperibili)**:  
> **Días Pag. producto perecedero (GG Pag. merce deperibile)** dentro del [Registro de artículos > pestaña Generales (Anagrafica articolo > tab Generali)](/docs/erp-home/registers/items/create-new-item), donde se define el vencimiento a aplicar;  
> **Días recepción factura (GG ricev. fattura)** en *Registro cliente/proveedor > pestaña General > pestaña Direcciones alternativas (Indirizzi alternativi)*, útil para cumplir con la fecha cierta de recepción de la factura (para habilitar el campo, el tipo de dirección relacionado con la dirección alterna utilizada y definida en la tabla [Tipos de direcciones (Tipi indirizzi)](/docs/configurations/tables/general-settings/address-types) debe tener el indicador *Email Fact. (Email Fatt.C.)* configurado).  
> **Días de transporte (Giorni trasporto)** en la tabla *Zonas (Zone)*, campo que se puede incluir en el *Registro cliente/proveedor > pestaña [Entrega (Consegna)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)*.

### Lógica de cálculo del vencimiento de pago (Logica di calcolo della scadenza di pagamento)

El vencimiento de pago se propone a partir de la fecha de inicio de la factura.

La fecha de inicio se calcula automáticamente de la siguiente manera:

- inicialmente es igual a la mayor entre la fecha de inserción y la fecha de factura,  

- luego, si en el tipo de dirección del email de facturación se han establecido días de recepción de la factura, a la fecha de factura se suman los días de recepción de factura; la fecha de inicio se vuelve la mayor entre la fecha de inicio y la fecha de factura + días de recepción de factura.

- si en el tipo de dirección del email de facturación no se han establecido días de recepción de factura, se busca ver si hay días de transporte en el código de zona asociado al cliente y a la fecha de factura se le suman los días de transporte; la fecha de inicio se convierte en la mayor entre la fecha de inicio y la fecha de factura + días de transporte.
- si la zona del cliente no tiene días de transporte configurados, la fecha de vigencia corresponde a la mayor entre la fecha de ingreso de la factura y la fecha de la factura

El usuario puede en cualquier caso cambiar la fecha de vigencia y poner la fecha deseada, quedará un registro en la factura de que la fecha de vigencia ha sido cambiada manualmente

**Para proponer correctamente la fecha de vencimiento, deben estar codificadas 2 nuevas soluciones de pago con el indicador “DL Art.62” activado, ambas con el indicador de fin de mes activado y el indicador comercial activado, una con días 30 y la otra con días 60**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image04.png)

Si la solución de pago del registro del cliente es mejor que la calculada para los artículos agrícolas o agroalimentarios, se mantendrá dicha solución.

Al ingresar las facturas manualmente (también cumpliendo las líneas del pedido del cliente), es posible ingresar, para el cliente que tiene el indicador Art62 activado, solo artículos que tengan la misma tipología de pago, por lo tanto, todos los artículos a 30 días o a 60 días o sin días de pago. Un mensaje impedirá la inclusión de artículos mixtos y advertirá que la solución de pago será modificada automáticamente por la solución calculada según los días de pago de los artículos.

Al crear la factura desde otros documentos (por ejemplo, desde DDT), los documentos se dividirán por los días de pago presentes en el artículo y se crearán varias facturas si en un mismo documento hay artículos con diferentes días de pago.

### Campi riferiti alla gestione distinte SDD (Sepa Direct Debit – Addebiti diretti SEPA)**

El Débito Directo Sepa, que sustituye al anterior RID nacional, es un instrumento de cobro preautorizado a través de un mandato de débito otorgado por el Deudor a favor de su Acreedor.

Está basado en un acuerdo preventivo (mandato) entre Deudor y Acreedor que permite a este último solicitar la activación de un procedimiento interbancario para debitar la cuenta del Deudor de manera automática.

**Código propósito del mandato**: en este campo debe mencionarse el ‘Purpose code' (normalmente se establece el código “GDSV” [Compra Venta de Bienes y Servicios])

**Código cliente/mandato**: en este campo debe insertarse el código identificativo asignado al mandato suscrito por el deudor. Corresponde en el Rulebook (documento técnico oficial) a AT-01 Unique Mandate Reference.

El campo no es sensible a mayúsculas y minúsculas. Por ejemplo, los identificativos 123AAa45678, 123aaA45678, 123aaa45678 y 123AAA45678 deben considerarse idénticos.

No puede ser valorizado solo con espacios y debe contener solo caracteres pertenecientes al conjunto latino básico.

*Ejemplo*: IT05394480900

**Mandato modificado (Mandato modificato)**: Indicador actualmente no gestionado y debe dejarse deseleccionado.

**Fecha de firma del mandato**: en este campo se debe insertar la fecha de firma del mandato.

**Fecha primera ejecución / Fecha última ejecución**: siendo el débito SDD (así como el sistema "viejo" RID) en sí una ejecución periódica, este rango de fechas controla el inicio y la finalización de la validez de la ejecución.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image05.png)

Para la gestión del SDD también se deben completar los campos

- **Código único cliente (Codice unico cliente)**

- **Identificador acreedor (Identificatore creditore)**: ejemplo IT95ZZZ0000007333890900

En la tabla **Empresa (Società)**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image06.png)

:::tip[Cómo crear una lista SDD (Come creare una distinta SDD)]
Después de haber completado los campos necesarios en el registro del cliente titular del SDD y en la tabla con los datos de nuestra empresa, es necesario.

- Definir un tipo de Efecto específico "*SDD*" [**aquí**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) y asociarlo al respectivo [**Tipo de pago**](/docs/configurations/tables/general-settings/payment-types)
- Definir un tipo específico de lista en el portafolio de efectos, ver el campo Servicios [**aquí**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types)
- Utilizar los procedimientos [**Creación de efectos desde partidas**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) o [**Creación de efectos desde vencimientos**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) para generar un efecto tipo "*SDD*"
- Crear una [**nueva lista de presentación**](/docs/treasury/bills-holding/lists-ceation-and-management) de tipo "*SDD*" e insertar en su interior el efecto "*SDD*"
- Utilizar el botón **Exportación SDD** en la barra de ribbon (habilitado por el tipo de lista específico establecido con el indicador de Servicios) para generar el archivo bancario específico válido para SDD.
:::

### OTRO (ALTRO)

**Gestión de copropietarios (Gestione cointestatari)**: el indicador activa la gestión de la factura de venta coparticipada.

Este caso es frecuente, por ejemplo, en la venta a particulares de bienes que pueden ser objeto de deducción fiscal de los impuestos sobre la renta; si el gasto es soportado por más de una persona, la factura debe estar a nombre de ambos para poder realizar la deducción.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image07.png)

Con el indicador activo, dentro de las facturas a nombre del registro en cuestión se visualizará una pestaña adicional donde insertar los copropietarios.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image08.png)

Para llamar a los copropietarios, dentro del registro en cuestión, es necesario codificarlos previamente en la sección **Direcciones alternativas (Indirizzi alternativi)** de la sección Datos generales (Dati generali).

A tal fin, es necesario, previamente, definir un tipo de dirección con el indicador **Copropietarios (Cointestatari)** activado dentro de la tabla **Tipos de direcciones (Tipi indirizzi)** a la que está vinculada la combinación de la caja del campo **Tipo de dirección (Tipo indirizzo)**.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image09.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image10.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image11.png)

Luego, se procederá a insertarlos en la factura indicando también el porcentaje de distribución del gasto.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image12.png)