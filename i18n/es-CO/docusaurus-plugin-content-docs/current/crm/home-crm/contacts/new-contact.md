---
title: Nuevo Contacto
sidebar_position: 2
ai_generated: true
---

La pantalla del Contacto CRM<!-- Contatto CRM --> se compone de tres partes:     
- la primera parte en la parte superior presenta los posibles workflows<!-- workflow --> asociados al contacto CRM; los workflows por lo general reflejan el customer journey que transforma un lead en cliente, pero cada uno puede crear su propio workflow según las necesidades del CRM de la empresa; para más detalles consultar la guía relativa a los Workflows ([aquí<!-- qui -->](/docs/crm/home-crm/contacts/workflow-example) un ejemplo).               
- la parte central muestra el Encabezado del contacto, con la información general y de datos maestros, algunos obligatorios y otros no.      
- debajo se encuentran diferentes pestañas, que muestran las distintas operaciones efectuadas sobre el cliente<!-- cliente --> y que serán tratadas posteriormente en esta guía. Las pestañas visualizadas dependerán de las elegidas para cada [Tipo de contacto<!-- Tipo contatto -->](/docs/configurations/tables/crm/contacts/contact-type) en la respectiva tabla.            

### Datos del encabezado<!-- Dati testata -->

#### Campos obligatorios<!-- Campi obbligatori -->

**Tipo de Contacto<!-- Tipo Contatto -->**: hace referencia a la tabla homónima [Tipo de contacto<!-- Tipo contatto -->](/docs/configurations/tables/crm/contacts/contact-type); utilizada para diferenciar los distintos contactos CRM (Contacto, Prospecto, Lead, etc.); el **Tipo de contacto<!-- Tipo contatto -->** también contiene las pestañas a visualizar en los datos maestros.        

**Nombre de Contacto<!-- Nome Contatto -->**: sirve para indicar la razón social o, de forma más general, el nombre del contacto;    

#### Campos no obligatorios<!-- Campi non obbligatori -->

**Número de IVA<!-- Partita IVA -->**: campo compuesto por el código ISO internacional del país (definido en la propia tabla **Naciones<!-- Nazioni -->**) y el respectivo número de IVA. El campo está sujeto a una prueba de corrección del dígito de control para los números de IVA italianos; tras la inserción de este campo, utilizando el botón de la barra de herramientas *Proponer datos<!-- Proponi dati -->* es posible poblar automáticamente los datos maestros.   

**IVA**: código de IVA a utilizar en caso de emisión de documentos a nombre del contacto. 

**Divisa**: Divisa a utilizar en caso de emisión de documentos a nombre del contacto. 

**Código Oficina<!-- Codice Ufficio -->**: código IPA de la oficina pública destinataria de la factura o (si la bandera Facturación electrónica está activa) código SDI del destinatario de la factura. Se registrará en los datos del cliente<!-- cliente --> si el contacto es convertido. 

**Correo certificado<!-- Posta certificata -->**: campo reservado para la dirección de correo electrónico PEC en caso de que esté activa la modalidad PEC destinatario en el campo Tipo de código para la emisión de facturas electrónicas. Se registrará en los datos del cliente<!-- cliente --> si el contacto es convertido. 

**Detalles de dirección<!-- Dettagli indirizzo -->**: en esta sección se insertan las diferentes partes que componen la dirección.    

**Agente principal<!-- Agente Principale -->** sirve tanto para información como para permitir el acceso a Fluentis por parte de los agentes: estos sólo podrán consultar los contactos para los que tengan permiso.      

**Latitud/Longitud<!-- Latitudine/Longitudine -->**: se da la posibilidad de gestionar la posición de los contactos con latitud y longitud en lugar de la dirección; estos datos se consideran para la localización dentro del Mapa presente en la [Búsqueda de Contactos CRM<!-- Ricerca Contatti CRM -->](/docs/crm/home-crm/contacts/search-contacts), si la dirección no está presente.     

**Pipeline del contacto<!-- Pipeline contatto -->**: Si el contacto tiene un workflow asociado y el estado del workflow corresponde a uno de los estados presentes en “Pipeline del contacto<!-- Pipeline contatto -->” para el Tipo de contacto<!-- Tipo contatto -->, el campo "Pipeline del contacto<!-- Pipeline contatto -->" en los datos del contacto se actualizará automáticamente. 
Por lo tanto, tras cada cambio de estado del workflow, si hay correspondencia, el campo "Pipeline del contacto<!-- Pipeline Contatto -->" se actualizará automáticamente. De esta manera, el workflow y el campo Pipeline del contacto en el contacto permanecerán siempre alineados. 

**Origen del contacto<!-- Origine contatto -->**: es posible indicar cómo se obtuvo el contacto y, en consecuencia, su [Origen<!-- Origine -->](/docs/configurations/tables/crm/contacts/contact-origin).    

**Calidad del contacto<!-- Qualità contatto -->**: asigna estrellas a los contactos: la [calidad<!-- qualità -->](/docs/configurations/tables/crm/contacts/contact-quality) se expresa en aumento, de una a cinco estrellas; esta característica sirve para diversos análisis y para definir la calidad del contacto según una clasificación realizada por el usuario.     

**Teléfono/Correo electrónico<!-- Telefono/Email -->**: contiene el teléfono y el correo principal del contacto, especificados en los siguientes campos del mismo nombre: Teléfono, Teléfono móvil, Fax, Email, Email secundaria, Sitio Web. 

**Idioma**: idioma utilizado por el contacto.

**Naturaleza jurídica de la empresa<!-- Natura giuridica società -->**: naturaleza jurídica de la empresa, seleccionable en este listado. 

**Información estadística<!-- Informazioni Statistiche -->**: los 3 campos que la componen se llenarán en función de los valores introducidos en los siguientes campos **Año estadístico<!-- Anno Statistica -->**, **Estadística de facturación<!-- Statistica Fatturato -->** y **Número estadístico de empleados<!-- Numero statistico dipendenti -->**; la modificación de uno de estos campos influirá en el respectivo dato y viceversa; normalmente este combo box contiene los datos de la facturación y del número de empleados para el último año disponible, información muy importante al redactar una oferta comercial.    

**Ámbitos de email<!-- Ambiti Email -->**: se debe indicar si para este dato maestro es posible enviar Ofertas y/o Newsletters; este flag es importante porque, de lo contrario, no será posible enviar ninguno de estos tipos de documento. 

**Otra información<!-- Altre informazioni -->**: contiene Otra información y el Código fiscal insertados en los siguientes campos del mismo nombre.     

**Persona**: sirve para determinar si el contacto es una persona física o jurídica.     

**Estado legal<!-- Stato Legale -->**: campo de texto libre donde definir el estado legal del contacto.     

**Capital social<!-- Capitale Sociale -->**: campo de texto libre donde es posible indicar el capital social de la empresa relacionada con el contacto.

**Puerto<!-- Porto -->**: campo para indicar el puerto (por ejemplo, "Franco Fábrica"), para sugerir en los documentos relacionados con el contacto.

**Nota Puerto<!-- Nota Porto -->**: campo para indicar notas relativas al puerto, para sugerir en los documentos relacionados con el contacto.

**Datos maestros<!-- Anagrafica -->**: en este campo Fluentis indica automáticamente el apodo y la razón social del cliente<!-- cliente --> vinculado al contacto, en el momento en que este último se convierte en cliente. O también es posible realizar la asociación manualmente.     

**Categoría administrativa<!-- Categoria amministrativa -->**: sirve para indicar la categoría administrativa del contacto, puede ser útil con fines estadísticos.     

**Categoría comercial<!-- Categoria Commerciale -->**: al igual que la categoría administrativa, puede ser útil para fines estadísticos.     

**Sector de uso<!-- Settore d’uso -->**: es un campo propio del CRM y sirve para indicar el [sector<!-- settore -->](/docs/configurations/tables/crm/contacts/sector-use) en el que opera el contacto.      

**Contacto Padre<!-- Contatto Padre -->**: es posible indicar un contacto relacionado con el que se está visualizando, por ejemplo, en caso de que el contacto forme parte de una holding cuyo controlador ya esté entre nuestros contactos. O, en el momento en que un contacto cambie la razón social, es posible realizar un seguimiento vinculándolo con el nuevo contacto.        

**Marca**: sirve para indicar la eventual marca comercializada por la empresa.       

**Descuento<!-- Sconto -->**: tipo de descuento a aplicar en los documentos a nombre del contacto.

**Porcentaje<!-- Percentuale -->**: porcentaje de descuento que se aplicará según el tipo de descuento seleccionado. 

**Fecha de cierre<!-- Data chiusura -->**: es posible especificar una fecha de cierre del contacto, lo que hará que no aparezca más entre los contactos activos desde la fecha especificada.          

**Motivo de cierre<!-- Motivo di chiusura -->**: es posible especificar los motivos que llevaron al cierre del contacto.

**Descripción del motivo de cierre<!-- Descrizione motivo di chiusura -->**: es posible detallar aún más el motivo del cierre, complementando lo ya presente en el campo **Motivo de cierre<!-- Motivo di chiusura -->**.

En la última parte de la pantalla también se encuentran las **pestañas específicas<!-- tab specifiche -->**.     

En la barra de herramientas están presentes los siguientes botones:         
**Proponer datos<!-- Proponi dati -->**: utilizando esta funcionalidad a partir del número de IVA, se completarán los datos maestros automáticamente.      
**Conversión a cliente<!-- Conversione a cliente -->**: con este botón es posible convertir un contacto CRM en un [Cliente<!-- Cliente -->](/docs/erp-home/registers/contacts/create-new-contact/general); los datos ingresados en el contacto serán copiados en los nuevos datos maestros; el botón está activo para los [Tipos de contacto<!-- Tipi contatto -->](/docs/configurations/tables/crm/contacts/contact-type) que no tienen activada la bandera *Cliente<!-- Cliente -->*.

Dentro del contacto también hay campos utilizados con fines estadísticos, no mostrados directamente al usuario y configurados automáticamente: 

- fecha de creación del contacto
- fecha de inicio de lead y fecha de fin de lead
- fecha de inicio de cliente y fecha de fin de cliente

En el momento en que se crea un contacto, se asigna la fecha de creación del contacto. Cuando el tipo de contacto<!-- tipo contatto --> se cambia a uno con la bandera "lead" activada, se asignará la fecha de cambio a tipo lead. Cuando se cambia a otro tipo de contacto<!-- tipo contatto --> con la bandera "lead" desactivada, se asignará la fecha de fin del lead. 
La misma lógica se utilizará en el caso del cambio del tipo de contacto<!-- tipo contatto --> por uno con la bandera "cliente" activada. 

### 1. Registro de Workflow<!-- Workflow Log -->

Esta es la primera pestaña de la pantalla de **Contactos CRM<!-- Contatti CRM -->**. Esta pestaña aparece solo si para los Contactos CRM se ha activado un workflow que prevé la visualización del registro de logs. Para detalles técnicos, consulte la documentación relativa a los workflows.     
El uso de un workflow para la gestión de Contactos permite gestionar la relación con el cliente potencial por etapas. Los diferentes estados del workflow pueden prever diversas actividades para la captación del cliente, que dependerán del tipo de relación alcanzada en esa etapa específica: por ejemplo, en la etapa de Calificación será importante realizar una llamada inicial, mientras que en la etapa de Oportunidad no, ya que el cliente ya nos conoce y está evaluando la compra.       

Hay dos pestañas: Actividad y Registro.

#### Actividad<!-- Attività --> 

Los campos disponibles en el detalle de las actividades se dividen en 2 secciones, **Actividad<!-- Attività -->** y **Actividad pendiente<!-- Attività in sospeso -->**. La primera se utiliza para detallar la actividad ya realizada, mientras que en la segunda se pueden definir previamente algunas informaciones respecto a la actividad que deberá realizarse posteriormente a la ya insertada.

En la primera sección están los siguientes campos:

**Tipo de Actividad<!-- Tipo Attività -->**: es posible especificar el tipo de actividad realizada para el contacto; los tipos se definen en la tabla Tipos de Actividad de Arm; según la configuración insertada en el workflow, las actividades podrán cambiar dependiendo del estado del workflow;          

**Fecha<!-- Data -->**: este campo lo llena automáticamente la aplicación al introducir el campo **Tipo de Actividad<!-- Tipo Attività -->**; 

**Operador**: contiene el usuario Fluentis que realizó la inserción;    

**Descripción de actividad<!-- Descrizione attività -->**: es posible especificar los detalles de la actividad en este campo.     

En la segunda sección se encuentran los siguientes campos:

**Fecha de actividad pendiente<!-- Data attività in attesa -->**: este campo lo llena automáticamente la aplicación al introducir el campo **Tipo de Actividad<!-- Tipo Attività -->**;

**Tipo de Actividad<!-- Tipo Attività -->**: se puede especificar el tipo de actividad pendiente para el contacto; 

**Descripción de actividad<!-- Descrizione attività -->**: en este campo es posible definir en detalle la actividad que deberá realizarse;

**Fecha de cierre<!-- Data chiusura -->**: es posible establecer una fecha de vencimiento para la actividad;

**Operador**: debe definirse el usuario de Fluentis que llevará a cabo la actividad;

**Fecha inicio/fin de recordatorio<!-- Data inizio/fine promemoria -->**: en este campo se puede indicar el rango de fechas en las que deberá visualizarse un recordatorio para la actividad siguiente;        

**Crear actividad<!-- Crea attività -->**: marcando esta opción se creará un nuevo registro en la sección **Actividad<!-- Attività -->** de Fluentis para el usuario indicado en el campo **Operador**. Esta automatización se activará al guardar el contacto.    

#### Registro<!-- Log -->

En esta pestaña se visualizan los cambios de estado del workflow, indicando: el estado de partida y el de llegada, el operador que efectuó la operación, la fecha.   

### 2. Referencias de Contacto<!-- Riferimenti Contatto -->

Esta es la segunda pestaña de los **Contactos CRM<!-- Contatti CRM -->**.

Para insertar una nueva Referencia<!-- Riferimento -->, es necesario pulsar el botón de la cinta de opciones *Nueva referencia<!-- Nuovo riferimento -->*, que aparece cuando se está dentro de esta pestaña. Para insertar una Referencia<!-- Riferimento --> ya existente será necesario usar el botón *Buscar<!-- Ricerca -->*. 

En la ventana de inserción de la nueva referencia hay los siguientes campos:

**Apellido**: es el apellido de la referencia.

**Nombre**: es el nombre de la referencia.

**Operador**: se indica el posible operador asociado en los datos de la referencia.      

**Rol**: campo donde se indica el rol de la referencia dentro de la empresa del contacto.

**Teléfono**: es el teléfono fijo principal de la referencia.

**Fax**: es el número de fax de la referencia.

**Correo electrónico**: es el correo electrónico de la referencia.

### 3. Direcciones de Contacto<!-- Indirizzi Contatto -->

Esta es la tercera pestaña de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña es posible insertar y visualizar eventuales direcciones alternativas distintas a la principal indicada en el contacto. Cada dirección se compone de los siguientes campos:

**Descripción**: campo de texto libre.

**Teléfono**: es el número de teléfono relativo a la dirección indicada.

**Fax**: es el número de fax relativo a la dirección indicada.

**Correo electrónico**: es el correo electrónico asociado a la dirección indicada.

**Sitio web**: es el sitio web asociado a la dirección indicada.

**Tipo de dirección<!-- Tipo indirizzo -->**: es el tipo de dirección a la que hacer referencia, como en la [tabla<!-- tabella -->](/docs/configurations/tables/general-settings/address-types).

**Dirección<!-- Indirizzo -->**: es la dirección real.

**Código postal<!-- CAP -->**: es el código postal relativo a la dirección.

**Ciudad<!-- Città -->**: es la ciudad relativa a la dirección.

**Provincia**: es la provincia relativa a la dirección.

**País<!-- Nazione -->**: es el país de la dirección.

**Región**: es la región relacionada con la dirección.

### 4. Notas de Contacto<!-- Note Contatto -->

Esta es la cuarta pestaña de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña es posible visualizar las notas relativas al contacto.
Dentro de la pestaña están presentes campos de filtro, mediante los cuales se puede realizar una búsqueda de las notas.
Para insertar una nueva nota basta con pulsar el botón ![](/img/neutral/common/new.png) en la cinta de opciones. 

En la ventana de inserción están presentes los siguientes campos:

**Título**: es el título de la nota, que permitirá buscar la nota más fácilmente;

**Fecha**: se entiende la fecha de inserción de la nota;

**Anotaciones**: en este campo varchar es posible escribir el detalle de la nota;

**Tipo de nota del contacto<!-- Tipo nota contatto -->**: es posible indicar la [tipología de nota<!-- tipologia di nota -->](/docs/configurations/tables/crm/contacts/contact-note-type) que se está insertando.

### 5. Gestión Documental<!-- Gestione Documentale -->

En esta pestaña es posible consultar los documentos adjuntos. Para adjuntar documentos se puede proceder de dos maneras:

- utilizando el botón de la barra de herramientas Documentos se puede elegir si adjuntar un documento ya codificado en Fluentis o crear un nuevo Documento para adjuntar.
- utilizando directamente el botón derecho en la cuadrícula y seleccionando Adjuntar archivo se crea un nuevo Documento para adjuntar.

### 6. Categoría Comercial<!-- Categoria Commerciale -->

Esta es la sexta pestaña de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña es posible insertar y visualizar la categoría comercial a la que pertenece la empresa. Basta con seleccionar la [Categoría comercial<!-- Categoria commerciale -->](/docs/configurations/tables/crm/contacts/commercial-category) según la tabla.

### 7. Zona de Contacto<!-- Zona Contatto -->

Esta es la séptima pestaña de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña es posible insertar y visualizar la zona a la que pertenece la empresa. Basta con seleccionar la zona.

### 8. Agentes de Contacto<!-- Agenti Contatto -->

Esta es la octava pestaña de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña es posible definir los **Agentes** vinculados a este contacto.

Los campos a completar son los siguientes:

**Cuenta###Subcuenta###Descripción de la cuenta<!-- Conto###Sottoconto###Descrizione Conto -->**: mediante estos campos es posible seleccionar el agente, haciendo referencia a los datos maestros correspondientes<!-- anagrafica -->;

**Zona**: es posible definir la zona de competencia del agente, como está definido en la tabla;

**Porcentaje<!-- Percentuale -->**: es el porcentaje de comisión que corresponde al agente en relación con el contacto;

**Utilizar valor porcentual<!-- Utilizzare valore percentuale -->**: marcando esta opción se indica al sistema que para la inserción de las ofertas de venta se tendrá en cuenta el valor indicado en el campo **Porcentaje<!-- Percentuale -->** para calcular las comisiones correspondientes al agente.

### 9. Informes de visitas de Contactos<!-- Visit Report Contatti -->

Esta es la novena pestaña de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se visualiza la lista de los **Informes de Visitas<!-- Visit Reports -->** insertados para el contacto.

En la parte superior de la pestaña están los campos de **filtro** que permiten realizar una búsqueda más precisa de los Informes de Visitas<!-- Visit Reports --> deseados.

Haciendo doble clic sobre la fila del Informe de Visita<!-- Visit Reports --> este se abrirá en visualización/modificación.
Para insertar un nuevo Informe de Visita<!-- Visit Reports --> para el contacto en cuestión basta con pulsar el botón ![](/img/neutral/common/new-visit-report.png), presente en la cinta de opciones.

### 10. Ofertas del contacto<!-- Offerte contatto -->

Esta es la décima pestaña de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se visualiza la lista de las ofertas ingresadas para el contacto.
En la parte superior de la pestaña están presentes los campos de filtro que permiten realizar una búsqueda más precisa de las ofertas deseadas.
Haciendo doble clic sobre la fila de la oferta, esta se abrirá en visualización/modificación.
También es posible crear nuevas ofertas.

### 11. Datos Extra del Contacto<!-- Extra Data Contatto -->

Esta es la undécima pestaña de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se puede visualizar e insertar los [Datos Extra<!-- Extra Data -->](/docs/configurations/utility/extra-data/extradata/search-extradata) para el contacto, que luego se incluirán en los documentos relacionados.

### 12. Competidores del Contacto<!-- Concorrenti Contatto -->

Esta es la duodécima pestaña de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña es posible indicar eventuales **Competidores<!-- Concorrenti -->** que nuestra empresa tiene en la negociación con el contacto.
Es posible seleccionar el contacto mediante el menú desplegable, eligiendo los valores presentes en la respectiva [tabla<!-- tabella -->](/docs/configurations/tables/crm/contacts/competitors).
En el campo **Nota** se pueden indicar informaciones útiles respecto al competidor.

### 13. Listas de precios de venta del contacto<!-- Listini di vendita del contatto -->

Esta es una de las pestañas de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se visualizan las listas de precios de venta válidas para el contacto, que serán aplicadas en los documentos a nombre del contacto. En la fase de conversión del contacto en cliente, estos datos serán traspasados. 

### 14. Órdenes de venta del contacto<!-- Ordini vendita contatto -->

Esta es una de las pestañas de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se visualiza la lista de las órdenes ingresadas para el contacto.
En la parte superior de la pestaña están presentes los campos de filtro que permiten realizar una búsqueda más precisa de las órdenes.
Haciendo doble clic sobre la fila de la orden esta se abrirá en visualización/modificación.
También es posible crear nuevas órdenes.

### 15. Newsletters del contacto<!-- Newsletter contatto -->

Esta es una de las pestañas de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se visualiza la lista de newsletters ingresadas para el contacto.
En la parte superior de la pestaña están presentes los campos de filtro que permiten realizar una búsqueda más precisa de las newsletters deseadas.
Haciendo doble clic sobre la fila de la newsletter, esta se abrirá en visualización/modificación.

### 16. Pagos del contacto<!-- Pagamenti contatto -->

Esta es una de las pestañas de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se pueden configurar los pagos que se propondrán en los documentos relativos al contacto. 

#### Tipos de pago<!-- Tipi pagamento -->

La sección fundamental de la pestaña **Pagos<!-- Pagamenti -->** y sirve para configurar la lógica de cálculo de los vencimientos. Se seleccionan el **Tipo de pago<!-- Tipo di pagamento -->** y la **Solución de pago<!-- Soluzione di pagamento -->** (ambos se encuentran en *Configuración > Tablas > Ajustes generales*).

**Porcentaje<!-- Percentuale -->**: permite definir la proporción (en porcentaje) del valor total del pago (o cobro) que se gestionará con la condición de pago (como combinación de tipo de pago y solución de pago) configurada en la línea.

En caso de porcentaje inferior al 100, deben crearse tantas filas con porcentajes que sumen 100.

*Ejemplo*:<br />
- 50% Contado a la vista de factura y 50% Transferencia bancaria a 30 días.<br />
- 50% Contado a la vista de factura; 25% Transferencia bancaria a 30 días; 25% transferencia bancaria a 60 días.<br />
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Atención</u>: si la solución de pago prevé más de un vencimiento, se completará de este modo: ejemplo 50% contado a la vista y 50% transferencia bancaria a 30 - 60 días

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Banco (de referencia)<!-- Banca (d'appoggio) -->**: representa el banco de referencia para las partidas.  
- Para el registro de cliente<!-- anagrafica cliente -->:
> - si el tipo de pago es recibo bancario, se debe indicar el banco del cliente<!-- cliente -->;
> - si el tipo de pago es transferencia bancaria se debe indicar el banco de la empresa que se está usando  (de forma que en la impresión de los documentos se incluyan los datos bancarios para el cliente<!-- cliente -->); 

El campo se completa mediante un combo box (**Banco<!-- Banca -->**) relacionado con la tabla *Banco de referencia<!-- Banca d'appoggio -->*. En esta tabla es posible insertar tanto los bancos de la empresa como los bancos de la contraparte (cliente<!-- cliente --> o proveedor). Además, se pueden insertar tanto filas completas con el código IBAN y/o SWIFT (recomendado para los bancos de la empresa) como filas solo con el código ABI y CAB (recomendado para los bancos de la contraparte para los que se pueden indicar IBAN y SWIFT en los campos de la cuadrícula del registro).

Si la fila en la tabla Banco de referencia<!-- Banca d'appoggio --> está completa con IBAN y/o SWIFT, además de ABI y CAB, al llamar a dicha fila a través del combo box los datos se trasladarán a la cuadrícula en el registro. De lo contrario, solo se trasladarán ABI y CAB, pero siempre es posible agregar los datos faltantes directamente en la cuadrícula. Esto es recomendable para los bancos de la contraparte para evitar tener que codificar en la tabla Banco de referencia<!-- Banca d'appoggio --> demasiadas líneas utilizadas solo para un cliente<!-- cliente -->. Es preferible indicar solo los datos de la sucursal bancaria (ABI y CAB) en la que diferentes clientes<!-- clienti --> pueden tener la cuenta corriente.

La inserción de un banco también puede ejecutarse mediante doble clic en los campos abi/cab para abrir la ayuda de búsqueda entre las agencias bancarias nacionales, donde se selecciona la correspondiente y se crea el código en el registro a completar con los datos de cuenta corriente, cin, iban, swift.

**Descripción del Banco<!-- Descrizione Banca -->**: campo relacionado con el campo anterior.

**Código Banco<!-- Codice Banca -->**: campo NO utilizado en Italia. Para localizaciones extranjeras puede incluir un código bancario alternativo al sistema ABI CAB.

#### Banco de referencia<!-- Banca d'appoggio -->

En la cuadrícula se pueden insertar bancos de referencia de la contraparte.

De este modo es posible insertar bancos de referencia alternativos (siempre de la contraparte). Otro ejemplo puede ser el de un cliente<!-- cliente --> que paga por transferencia (y por tanto en la cuadrícula Tipo de Pago se inserta el banco de nuestra empresa) pero del cual se quiere insertar su banco de referencia en caso de pago de notas de crédito.

La inserción de un banco puede ejecutarse a través de doble clic en los campos abi/cab para abrir la ayuda de búsqueda entre las agencias bancarias nacionales, de donde seleccionar la que corresponda y crear el código en el registro a completar con los datos de cuenta corriente, cin, iban, swift.

### 17. Oportunidades del contacto<!-- Opportunità contatto -->

Esta es una de las pestañas de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se visualiza la lista de oportunidades insertadas para el contacto.
En la parte superior de la pestaña están presentes los campos de filtro que permiten realizar una búsqueda más precisa de las oportunidades presentes.
Haciendo doble clic sobre la fila de la oportunidad esta se abrirá en visualización/modificación.

### 18. Horarios de apertura del contacto<!-- Orari di apertura contatto -->

Esta es una de las pestañas de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se visualizan los días y horarios de apertura del contacto.

### 19. Llamadas del contacto<!-- Telefonate contatto -->

Esta es una de las pestañas de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se visualiza la lista de las llamadas realizadas al contacto.

### 20. Campañas de marketing del contacto<!-- Campagne marketing contatto -->

Esta es una de las pestañas de los **Contactos CRM<!-- Contatti CRM -->**.

En esta pestaña se visualiza la lista de las campañas de marketing donde está presente el contacto.