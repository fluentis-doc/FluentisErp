---
title: Configuración de datos maestros de contactos
sidebar_position: 3
ai_generated: true
---

En los datos maestros de contactos<!-- anagrafiche dei contatti --> de clientes será necesario configurar la gestión de la facturación electrónica<!-- fatturazione elettronica --> con el fin de registrar correctamente en Fluentis el Código destinatario<!-- Codice destinatario --> o la dirección PEC de los clientes destinatarios del archivo factura B2B o, en caso de registrar una Administración Pública, el código de la oficina<!-- codice Ufficio --> correspondiente.

## Facturación B2B<!-- Fatturazione B2B -->

Para configurar los contactos<!-- contatti -->, es necesario acceder a *Home > Datos maestros de contactos<!-- Anagrafiche contatti -->*, buscar y seleccionar el dato maestro de contacto para el cual se desea configurar la gestión de facturación electrónica<!-- fatturazione elettronica --> y, en el panel *Datos contables<!-- Dati contabili --> > Información fiscal<!-- Informazioni fiscali -->*, marcar el check **Facturación electrónica<!-- Fatturazione elettronica -->** y completar los campos relacionados:     
- **Razón social<!-- Ragione sociale -->**: este campo debe quedar vacío
- **Descripción<!-- Descrizione -->**: este campo debe quedar vacío
- **Facturación electrónica firmada<!-- Fatturazione elettronica firmata -->**: este check se refiere a la posibilidad de gestionar facturas electrónicas<!-- fatture elettroniche --> firmadas PARA EL CONTACTO SELECCIONADO. Se muestra el valor de la configuración realizada a nivel de la Empresa emisora en la sección de Configuración de Facturación Electrónica para la Empresa y se puede modificar respecto a la configuración general insertada, creando la excepción para el sujeto en gestión. Si se marca el check, al momento de la emisión de la factura electrónica será posible exportar el archivo XML, firmarlo con soportes externos específicos e importarlo ya formado en Fluentis, continuando luego con las etapas de emisión. Esta opción es discrecional para los documentos de factura emitidos a clientes residentes en el territorio italiano, mientras que es OBLIGATORIA para los documentos emitidos a sujetos no residentes, no establecidos, no identificados en Italia y para quienes se desea enviar los documentos a través del SdI.
- **Facturación electrónica con PDF adjunto<!-- Fatturazione elettronica con PDF allegato -->**: este check se refiere a la posibilidad de enviar archivos de facturas electrónicas<!-- fatture elettroniche --> con el PDF de la factura adjunto. Se muestra el valor de la configuración realizada a nivel de la Empresa emisora en la sección de Configuración de Facturación Electrónica para la Empresa y se puede modificar respecto a la configuración general insertada, creando la excepción para el sujeto en gestión. Si se marca el check, al momento de la emisión de la factura electrónica se generará el archivo XML al que se adjuntará el archivo PDF correspondiente. 
- **Transformación ARM para creación del PDF de la factura<!-- Trasformazione ARM per creazione PDF fattura -->**: en este campo puede indicarse la referencia de la transformación ARM relativa a la creación del fichero PDF de la factura, por ejemplo, el mismo proceso que podría invocarse para el envío por correo electrónico de la factura al cliente. Si no se indica y si se marca el check "Facturación electrónica con PDF adjunto", para la creación del PDF se utilizará la transformación indicada en la sección Configuración de Facturación Electrónica para la Empresa. 
- **Tipo de código<!-- Tipo codice -->**: el campo identifica el canal a utilizar para el envío de los documentos electrónicos; la cumplimentación de este campo requiere también la correcta definición de los campos CÓDIGO DESTINATARIO<!-- CODICE DESTINATARIO --> y EMAIL, a fin de crear el archivo factura con la dirección correcta. Según la selección de este campo, la cuadrícula de la sección FACTURACIÓN ELECTRÓNICA<!-- FATTURAZIONE ELETTRONICA --> debe cumplimentarse siguiendo algunas reglas específicas. Los valores que puede asumir son:
> - **Canal SDI<!-- Canale SDI -->**: la elección de este valor indica que se desea utilizar como modalidad de envío el código destinatario<!-- codice destinatario --> conocido o una dirección de correo electrónico o delegar al SdI la determinación del canal registrado por el cliente. En particular, la atribución de este valor en el dato maestro requiere la cumplimentación del campo CÓDIGO DESTINATARIO y EMAIL según las siguientes reglas:

| Modalidad de envío | Código destinatario | Email | Descripción destinatario | Fecha de inicio | Fecha de fin |
| :-- | :-- | :-- | :-- | :-- | :--|
| Código destinatario del cliente emitido por la AeD tras su acreditación | Código destinatario del cliente | Vacío | Razón social del cliente | Fecha de inicio de relación | Fecha de fin de validez del canal utilizado |
| Correo PEC | 0000000 (7 ceros) | Correo PEC del cliente | Razón social del cliente | Fecha de inicio de relación | Fecha de fin de validez del canal utilizado |
| No se conoce ni el código destinatario ni el correo PEC O BIEN Cliente privado O BIEN Cliente en régimen de ventaja o Forfettario | 0000000 (7 ceros) | Vacío | Razón social del cliente | Fecha de inicio de relación | Fecha de fin de validez del canal utilizado |
| Cliente no residente, no establecido, no identificado en Italia | XXXXXXX (7 "X") | Vacío | Razón social del cliente | Fecha de inicio de relación | Fecha de fin de validez del canal utilizado |
      

> - **PEC destinatario<!-- Pec Destinatario -->**: la elección de este valor indica que se utilizará el correo electrónico PEC como canal de envío y esta configuración requiere llenar CÓDIGO DESTINATARIO y EMAIL según las siguientes reglas:

| Modalidad de envío | Código destinatario | Email | Descripción destinatario | Fecha de inicio | Fecha de fin |
| :-- | :-- | :-- | :-- | :-- | :--|
| Correo PEC | 0000000 (7 ceros) | Correo PEC del cliente | Razón social del cliente | Fecha de inicio de relación | Fecha de fin de validez del canal utilizado |
      

> - **Sujeto no residente/establecido/identificado en Italia<!-- Soggetto non residente/stabilito/identificato in Italia -->**: la elección de este valor identifica como canal posible el SdI al que los documentos de la factura deben ser enviados indicando como código destinatario la específica codificación “XXXXXXX” y por lo tanto los campos CÓDIGO DESTINATARIO y EMAIL se deben llenar como sigue:

| Modalidad de envío | Código destinatario | Email | Descripción destinatario | Fecha de inicio | Fecha de fin |
| :-- | :-- | :-- | :-- | :-- | :--|
| Cliente no residente, no establecido, no identificado en Italia | XXXXXXX (7 "X") | Vacío | Razón social del cliente | Fecha de inicio de relación | Fecha de fin de validez del canal utilizado | 
        

## Facturación a la administración pública<!-- Fatturazione pubblica amministrazione -->

En el caso de registrar en los datos maestros<!-- anagrafica --> una Administración Pública, es necesario acceder a *Home > Datos maestros de contactos<!-- Anagrafiche contatti -->*, buscar y seleccionar el dato maestro de contacto para el cual se desea configurar la gestión de la facturación electrónica<!-- fatturazione elettronica --> y, en el panel *Datos contables > Información fiscal*, marcar el check **Administración Pública<!-- Pubblica Amministrazione -->**. Al seleccionar el check, se requiere cumplimentar la Cuadrícula **Administración Pública<!-- Pubblica Amministrazione -->**.
Los campos de la cuadrícula deben llenarse así:         
- **Código de la oficina<!-- Codice Ufficio -->**: Código de la oficina pública destinataria de la factura
- **Nombre de la oficina<!-- Nome ufficio -->**: Descripción del campo código de oficina que debe llenarse con el nombre de la oficina pública
- **Razón social<!-- Ragione sociale -->**: en este campo es posible vincular un dato maestro ya codificado en Fluentis y vinculado, por ejemplo, a la oficina pública dependiente del dato maestro principal que se está utilizando (por ejemplo: oficina de obras públicas del municipio de ..., o Empresa sanitaria ....... vinculada al dato maestro principal "Municipio de ....") Este dato maestro vinculado debe configurarse como destino para el dato maestro principal en la pestaña "entrega", de este modo el destino (ejemplo, oficina de obras públicas ....) se informará en el archivo .xml incluyendo el código de oficina y otros datos como dirección, etc.
Para la correcta gestión de múltiples códigos de oficina (y por tanto varios sujetos) referidos al mismo dato maestro principal, se recomienda también gestionar y completar este campo (aunque no es obligatorio ni necesario en caso de un solo código de oficina directamente vinculado al dato maestro en cuestión).
- **Fecha de inicio del servicio<!-- Data inizio servizio -->**: define la fecha de inserción de la fila o, en todo caso, la fecha desde la cual está activo el suministro con la administración pública en cuestión.
- **Fecha de fin del servicio<!-- Data fine servizio -->**: define la fecha de fin de la relación de suministro con la administración pública y hace que esta posición ya no sea utilizable para la generación del archivo telemático para la factura electrónica.