---
title: generale
sidebar_position: 2
---

## generale (generalee)

En esta pestaña se introducirán todas las informaciones generales relacionadas con el registro que se desea insertar.

La ventana se compone de una primera sección en la que se ingresarán las informaciones relativas a los **Datos** puramente registrales de la empresa y de una segunda sección que se compone de dos pestañas **Referencias (Rifermenti)** y **indirizzi alternativi** donde se ingresarán las personas de contacto y posibles direcciones alternativas en caso de una empresa con sedes diferentes.

### Datos del registro (Dati anagrafica)

**ragione sociale**: es el campo en el que se define el nombre del sujeto: será asignado a todas las subcuentas contables definidas para el registro en uso y se mencionará a través de esto en cada impresión contable/documental.

Sobre la base del texto aquí ingresado, al salir del campo, el sistema generará automáticamente un 'Apodo', es decir, un código único corto identificativo del registro mismo: esto es modificable por el usuario, pero debe ser único en la lista de todos los registros. Dado que la búsqueda del sujeto (si es contable) se realizará típicamente sobre la base de la razón social, este campo no es particularmente relevante.

**partita iva**: campo compuesto por el código ISO internacional del país (definido en la tabla de Países) y el número de identificación fiscal correspondiente. El campo está sujeto a una prueba de validez del carácter de control para los números de identificación fiscal italianos (prueba que se realiza al salir del campo). Una vez establecido el número de identificación fiscal, en el caso de sujeto Europeo, mediante el botón 'Proponer datos (Proponi dati)' es posible solicitar a la base de datos comunitaria del Vies la verificación y recepción de los datos disponibles: para algunos países, de hecho, también se devuelven los datos de la dirección correspondiente al número de identificación fiscal solicitado, que se utilizarán para completar los campos en ***Fluentis***.

**codice fiscale**: campo para la inserción del código fiscal del sujeto;

**Persona física/jurídica (Persona fisica/giuridica)**: indica si el sujeto es un privado o no;

**contabile**: indicador presente por defecto en nuevas inserciones, permitirá definir los detalles de gestión administrativa/comercial para las subcuentas asociadas al registro en uso.

**indirizzo**: es la dirección de la sede legal;

**numero civico**: el número cívico de la dirección;

**edificio**: el eventual edificio de la dirección;

**cap**: es el código de acceso postal; puede escribirse manualmente o derivar de la selección del municipio (campo siguiente) a través de la ayuda de municipios;

**comune**: campo editable en el que se debe ingresar el municipio de la sede legal. Hay una ayuda de Municipios para buscar en la lista de municipios tal como están definidos en la tabla (Inicio > Tablas > Configuraciones generales);

**natura giuridica**: naturaleza jurídica, la lista está vinculada al país del contacto;

**provincia**: campo editable en el que se debe ingresar el código de la provincia. Hay una ayuda de Provincias para buscar en la lista de provincias tal como están definidas en la tabla (Inicio > Tablas > Configuraciones generales);

**note**: campo libre en el que se pueden definir, por ejemplo, el texto completo de la dirección que se incluirá en la impresión de documentos, sin necesidad de combinar dirección + código postal + municipio + provincia;

**nazione**: código del país para el registro en uso, tal como se define en la tabla (Inicio > Tablas > Configuraciones generales). Cabe recordar que este campo es la base para identificar a los sujetos presentes en Países con fiscalidad privilegiada (Inicio > Tablas > Configuraciones generales > Países en lista negra), para la respectiva declaración fiscal del área administrativa;

**regione**: código de la región a la que pertenece (Inicio > Tablas > Configuraciones generales);

**lingua**: código del idioma (Inicio > Tablas > Configuraciones generales) de referencia para las comunicaciones dirigidas al registro en uso. Es posible generar reportes automáticamente en el idioma según el diccionario definido en ARM (Application Resource Manager);

**nome** y **cognome**: para personas físicas;

**città nascita**, **codice provincia nascita**, **data nascita**, **sesso**: para personas físicas;

**Teléfono/Teléfono celular (Telefono/Telefono cellulare)**: campo para la inserción del teléfono principal o del celular del contacto;

**fax**: campo para la inserción del fax principal del contacto;

**sito web**: campo para la inserción del sitio web del contacto;

**e.mail**: campo para la inserción de la dirección de correo electrónico por defecto del contacto;

**Fecha/Usuario última modificación (Data/Utente ult. variazione)**: campo que muestra el usuario y la fecha de la última guardado realizado para el registro en uso;

**data fine validità**: campo para bloquear el uso del registro en uso. Una vez establecida esta fecha, el sistema preguntará si se debe aplicar esta fin de validez a todas las subcuentas contables asociadas al registro mismo: a ninguna, solo a la empresa en uso, a todas las empresas o si se debe cancelar la modificación;

**note**: campo en el que se pueden insertar notas relativas al sujeto;

#### Botones específicos - Inserción automática de datos registrales

:::tip
[**proponi dati**](/docs/guide/common/glossary/glossary-intro#v): al ingresar el **partita iva** en el campo correspondiente del registro, y hacer clic en **Proponer Datos**, el sistema a través de un servicio web consultará el sistema informático del V.I.E.S. que verificará la validez y corrección del número de identificación fiscal del sujeto. Si el dato es correcto, el sistema propondrá automáticamente el resto de los datos registrales básicos del sujeto, sin necesidad de ingresarlos manualmente. Para más información sobre el sistema V.I.E.S. haga clic en el enlace.
:::

### Referencias (Riferimenti)

En la sección **Acceso Web** es posible habilitar el acceso a través de Internet Explorer a la aplicación, habilitando el registro y asignando el nombre de usuario y la contraseña de acceso;

En la sección **Código EDI** es posible ingresar el código para la transferencia de archivos a través del proceso EDI con el número interno asignado al sujeto y la posibilidad de indicar que el código se refiere a un vendedor.

En la sección **Otros datos (Altri dati)** es posible ingresar el número de cliente, el número de registro de transporte, es decir, para registros relacionados con transportistas, es el código del sujeto en el registro de transportistas; y la fecha de nacimiento en el caso de persona física.

En la cuadrícula **persone di riferimento** se podrán especificar, para el contacto en uso, la lista de personas de referencia presentes en su interior con la descripción del rol ocupada, y los respectivos contactos telefónicos y/o direcciones de correo electrónico.

:::tip[]
En la cuadrícula **sottoconti in tutte le società** se podrá ver si para el registro en uso se ha definido el uso contable en otra empresa; en la cuadrícula se encontrará, por lo tanto, la lista de las diversas subcuentas asignadas con la respectiva empresa de referencia.
:::

### Direcciones Alternativas (Indirizzi Alternativi)

Aquí es posible ingresar algunas direcciones alternativas que dependen del [**Tipo de dirección asociada (Tipo indirizzo associato)**](/docs/configurations/tables/general-settings/address-types).

**Atención:** no se trata de las direcciones de entrega de mercancías para las que se ha desarrollado la pestaña [Entrega (Consegna)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) en la sección *Datos contables* donde ingresar los *Destinatarios/Destinaciones* de la mercancía para permitir la gestión completa en los documentos.

**La función más frecuente de esta sección es sobre todo la gestión de las direcciones de correo electrónico para automatizar el envío de documentos, generalmente informes de impresión, a través de flujos de trabajo (workflow) (flujos operativos con pasos de estado a gestionar dentro de las máscaras), principalmente a través de envíos masivos de correos electrónicos.**

*Ejemplo*: si seleccionamos en la cuadrícula el tipo de dirección 'Sede Comercial (Sede Commerciale)', se dará de alta un referente o más para la oficina comercial a la que enviar, por ejemplo, las confirmaciones de pedido por correo. El correo debe indicarse en la sección al lado de la cuadrícula, donde también se pueden ingresar el contacto telefónico del contacto y otros datos de tipo registral. En este caso, cuando se introduzca el pedido, en la pestaña *Resumen (Riepiloghi)*, al elegir enviar la confirmación del pedido al cliente, se abrirá una pantalla con la vista previa del correo con la dirección del destinatario ya poblada con la información que se ha ingresado en esta sección, y no será necesario agregarla manualmente cada vez. Según el tipo de dirección, se podrá elegir a quién enviar las facturas, de los pedidos de proveedores, etc.

Por lo tanto, el formulario **Direcciones Alternativas** no permite una gestión de los datos en los documentos posteriores del ciclo activo/pasivo.

Su función, además de una posible inserción sencilla de direcciones (sobre todo correos electrónicos) alternativos, está limitada a dos **posibles automatizaciones** muy útiles:

- **La gestión de las direcciones de correo electrónico en el envío masivo de documentos** (Facturas de venta, pero también otros tipos previa configuración) mediante una cola de envío gestionada por el componente Bizlink.

- Gestión de los [Copartícipes (Cointestatari)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) de la factura de venta.

#### Procedimiento de inserción de direcciones

Antes de ingresar la información detallada en la parte derecha del formulario (dentro de los diversos campos específicos), es necesario ingresar al menos una fila en la cuadrícula a la izquierda correspondiente a un tipo de dirección.

**tipo indirizzo**: código del tipo de dirección. La caja combinada está conectada a la tabla [Tipos de direcciones (Tipi indirizzi)](/docs/configurations/tables/general-settings/address-types) (que se encuentra en Inicio > Tablas > Configuraciones generales).

**indirizzo**: descripción correspondiente al código contenido en el campo anterior.

**descrizione**: campo obligatorio para el guardado, se trata simplemente de una descripción adicional para la fila que se está ingresando.

Una vez insertada la fila con el tipo de dirección elegido, es posible completar los datos de detalle correspondientes.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/general/image02.png)

Es posible ingresar y gestionar más de una dirección de correo electrónico simultáneamente (para el envío a, por ejemplo, más destinatarios) ingresando las direcciones seguidas en el mismo campo y separándolas con un punto y coma (;).

#### Envío masivo de documentos por correo

Para la gestión automática de la dirección de correo electrónico en el envío masivo de las facturas de venta (ver también el anexo al inicio de este artículo), es necesario utilizar un tipo de dirección particular (que puede codificarse a placer, siempre que en la tabla [Tipos de direcciones (Tipi indirizzi)](/docs/configurations/tables/general-settings/address-types) esté activada la bandera **Email Fatt. C. = email factura cliente**).

También será posible, previa *configuración*, gestionar el envío masivo también en otros tipos de documentos (ejemplo, la solicitud de pago, etc.) asociando tal vez la dirección de correo electrónico ingresada a un tipo de dirección específico para configurar utilizando uno de los otros indicadores disponibles en la tabla Tipos de direcciones. En este caso, será necesario definir tanto la Transformación del documento específico como un Workflow (cambio de estado) dedicado.

La gestión de la dirección de correo electrónico ingresada y codificada asociándola al indicador *Email Fatt. C.* también está relacionada con la composición automática del correo electrónico de acompañamiento (necesaria la instalación de Outlook en su PC) que se puede ejecutar, una vez dentro de la *Factura de venta* y realizada la vista previa de impresión, con el comando **Enviar (Send)** (Pdf, Word, etc.)

#### Gestión de copartícipes

En este caso, el dato relevante es el nombre de los copartícipes. Será necesario introducir una fila para cada uno de los copartícipes para ingresar el dato registral de cada uno. El tipo de dirección correcto a asociar en la tabla [Tipos de direcciones (Tipi indirizzi)](/docs/configurations/tables/general-settings/address-types) y [Copartícipes (Cointestatari)](/docs/configurations/tables/general-settings/address-types).

Para la gestión en factura ver [aquí (qui)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information).

Una vez ingresadas las informaciones **generalees**, se procederá a la inserción de las informaciones específicas en la siguiente pestaña **dati contabili**.

### Datos Históricos (Dati Storici)
Esta sección sirve para gestionar la posibilidad de historicizar, es decir, memorizar cambios, en los datos generales, como por ejemplo un cambio de razón social o de dirección, etc., del sujeto en cuestión, como un cliente o un proveedor.

:::note
En particular, un cambio de razón social modificará automáticamente (a pesar de un mensaje de confirmación que debe aceptarse) la descripción de las subcuentas contables del plan de cuentas asignados al registro del contacto.

Por lo tanto, la necesidad de almacenar el dato anterior es particularmente relevante para poder rastrear los documentos y otros datos ingresados también a través de la referencia anterior.
:::

En el formulario hay una cuadrícula en la **Izquierda** que recibirá la fecha de la modificación y servirá como referencia para mostrar el dato antiguo o el nuevo dato.

En la parte **Derecha** se reiteran los campos relativos a los datos del contacto, que serán completados automáticamente por el procedimiento de historicización. Luego, se podrá modificar la parte *generale* con el dato actual actualizado.

#### Botones específicos

**storicizza dati anagrafici**: situado en la barra de herramientas, es el botón principal para el procedimiento de historicización (memorización) del dato. Al presionarlo, aparece un popup que pide la fecha de la modificación (*Data fine validità*) la cual será registrada en la cuadrícula de la Izquierda, mientras que en la parte Derecha se copiarán los datos actuales para luego proceder a la modificación.

**cancella storico**: Remueve la fecha de fin de validez y los datos ingresados en la parte Derecha.

:::tip[Procedimiento]
1. Presione el botón *storicizza dati anagrafici*.
2. En el popup que aparece, indique la fecha de la modificación, es decir, la fecha a partir de la cual el dato (p.ej. la razón social ha cambiado). Al confirmar, el dato "anterior", actualmente aún presente, será guardado.
3. Modifique el dato en la pestaña **dati anagrafici*** y presione **salva**.
:::

Desde este momento, el dato "anterior" (histórico) estará disponible en varios reportes de impresión estándar, como por ejemplo los registros de IVA, las facturas de venta, etc. (además de poder incluirse a placer en reportes personalizados o creados desde cero) y automáticamente se mostrará el dato antiguo si el documento se refiere a una fecha anterior a la fecha de fin de validez.

:::danger[Atención]
El dato que se muestra en las mascarillas visualizadas en el ERP es siempre el actualizado; no es posible tener una visualización del dato histórico.

La presente sección permite gestionar el dato histórico únicamente para informes de impresión.

Se recomienda copiar el campo y las respectivas fórmulas para gestionar la visibilidad en función de la fecha de referencia de un informe estándar (o al menos revisarlo) en caso de utilización en un informe de impresión personalizado.
:::