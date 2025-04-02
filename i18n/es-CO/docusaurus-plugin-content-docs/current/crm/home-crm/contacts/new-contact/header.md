---
title: Encabezado de Contacto (Testata Contatto)
sidebar_position: 1
---

La pantalla del Contacto CRM se compone de tres partes:    
- la primera parte en la parte superior presenta posibles flujos de trabajo asociados al contacto CRM; los flujos de trabajo generalmente recorren el customer journey que transforma el lead en cliente, pero cada uno puede crear su propio flujo de trabajo según las necesidades del CRM empresarial; se remite a la guía relacionada sobre Flujos de Trabajo para más detalles ([aquí](/docs/crm/home-crm/contacts/workflow-example) un ejemplo).               
- la parte central presenta el Encabezado del contacto, con la información general y de registro, algunas obligatorias y otras no.      
- debajo se encuentran varias pestañas, que reflejan las diversas operaciones realizadas sobre el cliente y que se tratarán más adelante en esta guía. Las pestañas visualizadas dependerán de las seleccionadas para cada [Tipo de contacto](/docs/configurations/tables/crm/contacts/contact-type) en la tabla correspondiente.            

## Datos obligatorios de encabezado

**Tipo de Contacto (Tipo Contatto)**: remite a la tabla del mismo nombre [Tipo de contacto](/docs/configurations/tables/crm/contacts/contact-type); se usa para distinguir entre los diferentes contactos CRM (Contacto, Prospecto, Lead, etc.); el **Tipo de contacto** también contiene las pestañas que se visualizarán en el registro.        

**Nombre de Contacto (Nome Contatto)**: sirve para indicar la razón social o, de manera más general, el nombre del contacto;    

## Datos no obligatorios de encabezado 

**partita iva**: campo compuesto por el código ISO internacional del país (definido en la tabla **Naciones**) y el número de IVA correspondiente. El campo está sujeto a pruebas de corrección del carácter de control para los números de IVA italianos; tras la inserción de este campo, utilizando el botón de la barra de herramientas *proponi dati* es posible completar automáticamente los datos del registro.   

**iva**: código de IVA a utilizar en caso de emisión de documentos a nombre del contacto. 

**divisa**: moneda a utilizar en caso de emisión de documentos a nombre del contacto. 

**codice ufficio**: código IPA de la oficina pública destinataria de la factura o (si el indicador de Facturación electrónica está activo) código SDI del destinatario de la factura. Se reflejará en el registro del cliente si el contacto se convierte. 

**posta certificata**: espacio reservado para la dirección PEC en caso de que esté activa la modalidad PEC destinatario en el campo Tipo código para la emisión de facturas electrónicas. Se reflejará en el registro del cliente si el contacto se convierte. 

**dettagli indirizzo**: en esta sección se ingresan las diferentes partes que componen la dirección.    

**agente principale** sirve como título informativo, pero también para fines de acceso a Fluentis por parte de los agentes: ellos solo podrán consultar los contactos a los que tienen permiso.      

**Latitud/Longitud (Latitudine/Longitudine)**: se da la oportunidad de gestionar la ubicación de los contactos con latitud y longitud en lugar de la dirección; estos datos se consideran para la localización dentro del Mapa presente en la [Búsqueda de Contactos CRM](/docs/crm/home-crm/contacts/search-contacts), si no está presente la dirección.     

**pipeline contatto**: Si el contacto tiene un flujo de trabajo asociado, y el estado del flujo de trabajo corresponde a uno de los estados presentes en "Pipeline de contacto" para el Tipo de contacto, el campo "Pipeline de contacto" en el registro del contacto se actualizará automáticamente. 
Entonces, con cada cambio de estado del flujo de trabajo, si hay una correspondencia, se actualizará automáticamente el campo "Pipeline de contacto". De este modo, el flujo de trabajo y el campo Pipeline de contacto en el registro del contacto estarán siempre alineados. 

**origine contatto**: es posible indicar cómo se obtuvo el contacto y, por tanto, su [Origen](/docs/configurations/tables/crm/contacts/contact-origin).    

**qualità contatto** otorga estrellas a los diferentes contactos: la [calidad](/docs/configurations/tables/crm/contacts/contact-quality) se expresa de forma creciente desde una a cinco estrellitas; esta característica se utiliza para varios análisis y para definir la calidad del contacto según una clasificación realizada por el usuario.     

**Teléfono/Email (Telefono/Email)**: contiene el teléfono y el correo electrónico principales del contacto, especificados en los siguientes campos homónimos: Teléfono, Teléfono móvil, Fax, Email, Email secundario, Sitio web. 

**lingua**: idioma utilizado por el contacto.

**natura giuridica società**: naturaleza jurídica de la sociedad, seleccionable de la lista presente. 

**informazioni statistiche**: los 3 espacios que lo componen se llenarán en función de los valores ingresados en los siguientes campos **Año de Estadística**, **Estadística de Facturación** y **Número estadístico de empleados**; la modificación de uno de estos campos afectará el espacio relacionado y viceversa; generalmente esta combinación de caja contiene los datos de facturación y el número de empleados del último año disponible, información muy importante al redactar una oferta comercial.    

**ambiti email** debe indicar si para este registro es posible enviar Ofertas y/o Boletines; este indicador es importante porque de lo contrario no será posible enviar ninguno de estos tipos de documentos. 

**altre informazioni**: contiene otras información y el Código fiscal insertados en los campos homónimos siguientes.     

**persona**: sirve para determinar si el contacto es una persona física o jurídica.     

**stato legale**: campo de ingreso libre donde se define el estado legal del contacto.     

**capitale sociale**: campo de ingreso libre donde se puede indicar el capital social de la empresa relacionada con el contacto.

**porto**: campo donde se debe indicar el puerto (por ejemplo, “Franco Fabbrica”), que se propondrá en los documentos relacionados con el contacto.

**nota porto**: campo donde se pueden indicar notas relacionadas con el puerto, que se propondrán en los documentos relacionados con el contacto.

**anagrafica** en este campo se indica automáticamente por Fluentis el apodo y la razón social del cliente asociado al contacto, en el momento en que este último es convertido a cliente. O se puede realizar la asociación manualmente.     

**categoria amministrativa**: sirve para indicar la categoría administrativa del contacto, podría ser útil para fines estadísticos.     

**categoria commerciale**: al igual que la categoría administrativa, podría ser útil para fines estadísticos.     

**Sector de uso (Settore d’uso)**: es un campo propio del CRM y sirve para indicar el [sector](/docs/configurations/tables/crm/contacts/sector-use) en el que opera el contacto.      

**contatto padre**: es posible indicar un contacto relacionado con el que se está visualizando, por ejemplo, en caso de que el contacto forme parte de un holding cuya matriz ya esté entre nuestros contactos. O en el momento en que el contacto cambia su razón social, es posible hacer un seguimiento conectándolo con el nuevo contacto.        

**marca**: se usa para indicar la marca comercializada por la empresa.       

**sconto**: tipo de descuento a aplicar a los documentos a nombre del contacto.

**percentuale**: porcentaje de descuento a aplicar en relación con el tipo de descuento seleccionado. 

**data chiusura**: es posible especificar una fecha de cierre del contacto, que no lo hará aparecer entre los contactos activos, desde la fecha especificada.          

**motivo di chiusura**: es posible especificar las razones que llevaron al cierre del contacto;

**descrizione motivo di chiusura**: es posible detallar más la razón del cierre, integrando lo que ya está presente en el campo **Motivo de cierre**.

En la última parte de la pantalla hay también **pestañas específicas**.     

En la barra de herramientas se encuentran los siguientes botones:        
**proponi dati**: utilizando esta funcionalidad, a partir del número de IVA, se precompletarán los datos registrales.      
**conversione a cliente**: con este botón es posible convertir un contacto CRM en un [Cliente](/docs/erp-home/registers/contacts/create-new-contact/general); los datos ingresados en el contacto se copiarán en el nuevo registro; el botón está activo para los [Tipos de contacto](/docs/configurations/tables/crm/contacts/contact-type) que no tienen activo el indicador *Cliente*.

Dentro del contacto también hay campos utilizados a fines estadísticos, que no se muestran directamente al usuario y se establecen automáticamente: 

- fecha de creación del contacto
- fecha de inicio del lead y fecha de fin del lead
- fecha de inicio del cliente y fecha de fin del cliente

En el momento en que se crea un contacto, se asigna la fecha de creación del contacto. Cuando el tipo de contacto cambia a un tipo con el indicador "lead" habilitado, se asignará la fecha de cambio a tipo lead. En el momento de cambiar a otro tipo de contacto que tiene el indicador "lead" deshabilitado, se asignará la fecha de fin del lead. 
La misma lógica se utilizará en el caso de cambiar el tipo de contacto a un tipo de contacto con el indicador "cliente" habilitado.