---
title: Configuración de registros de contactos (Impostazione anagrafiche contatti)
sidebar_position: 3
---

En los registros de contactos de clientes, será necesario establecer la gestión de la facturación electrónica con el fin de censar correctamente en Fluentis el Código destinatario o la dirección PEC de los clientes destinatarios del archivo de factura B2B, o, en caso de censar una Administración Pública, el código de la oficina correspondiente.

## Facturación B2B (Fatturazione B2B)

Para configurar los contactos, es necesario acceder a *Inicio > Registros de contactos (Home > Anagrafiche contatti)*, buscar y llamar al registro de contacto para el cual se desea establecer la gestión de la facturación electrónica y, en el panel *Datos contables > Información fiscal (Dati contabili > Informazioni fiscali)*, establecer el check **fatturazione elettronica** y los campos relacionados:  
- **ragione sociale**: este campo debe permanecer vacío.  
- **descrizione**: este campo debe permanecer vacío.  
- **fatturazione elettronica firmata**: este check se refiere a la posibilidad de gestionar facturas electrónicas firmadas PARA EL CONTACTO SELECCIONADO. Se reporta el valor de la configuración hecha a nivel de Empresa emisora en la sección de Configuración de Facturación Electrónica para la Empresa, y puede ser modificado respecto a la configuración general establecida, creando una excepción para el sujeto en gestión. Si se activa el check, al momento de la emisión de la factura electrónica será posible exportar el archivo XML, firmarlo con soportes externos adecuados e importarlo en el formato en Fluentis, continuando luego con las fases de emisión. Esta capacidad es discrecional para los documentos de factura emitidos a clientes residentes en el territorio italiano, mientras que es OBLIGATORIA para los documentos emitidos a sujetos no residentes, no establecidos, no identificados en Italia y para los cuales se pretende enviar los documentos a través del SdI.  
- **fatturazione elettronica con pdf allegato**: este check se refiere a la posibilidad de enviar los archivos de facturas electrónicas con el PSF de la factura adjunto. Se reporta el valor de la configuración hecha a nivel de Empresa emisora en la sección de Configuración de Facturación Electrónica para la Empresa, y puede ser modificado respecto a la configuración general establecida, creando una excepción para el sujeto en gestión. Si se activa el check, al momento de la emisión de la factura electrónica se generará el archivo XML al que se adjuntará el archivo PDF correspondiente.  
- **Transformación ARM para creación de PDF de factura (Trasformazione ARM per creazione PDF fattura)**: en este campo se puede indicar la referencia de la transformación ARM relacionada con la creación del archivo PDF de factura, por ejemplo, el mismo proceso que podría invocarse para el envío por correo de la factura al cliente. Si no se indica y si se activa el check “Facturación electrónica con PDF adjunto”, para la creación del PDF se utiliza la transformación indicada en la sección de Configuración de Facturación Electrónica para la Empresa.  
- **tipo codice**: el campo identifica el canal a utilizar para el envío de documentos electrónicos; la cumplimentación de este campo también requiere la correcta definición de los campos CÓDIGO DESTINATARIO y EMAIL, con el fin de crear el archivo de factura con la dirección correcta. Según la elección de este campo, la cuadrícula de la sección de FACTURACIÓN ELECTRÓNICA debe ser completada de acuerdo con algunas reglas específicas. Los valores que puede asumir son:  
> - **Canal SDI**: la elección de este valor indica que se pretende utilizar como modo de envío el código destinatario conocido o una dirección de correo electrónico o delegar al SdI la determinación del canal registrado por el cliente. Específicamente, la asignación de este valor en el registro requiere la cumplimentación de los campos CÓDIGO DESTINATARIO y EMAIL según las reglas indicadas a continuación:

| Modalidad de envío | Código destinatario | Email | Descripción destinatario | Fecha inicio | Fecha fin |
| :-- | :-- | :-- | :-- | :-- | :--|
| Código destinatario del cliente emitido por la AdE tras su acreditación | Código destinatario del cliente | Vacío | Razón social del cliente | Fecha de inicio de la relación | Fecha de finalización de la validez del canal utilizado |
| Mail PEC | 0000000 (7 ceros) | Email PEC del cliente | Razón social del cliente | Fecha de inicio de la relación | Fecha de finalización de la validez del canal utilizado |
| No se conoce ni el código destinatario ni el mail PEC O BIEN Cliente privado O BIEN Cliente en régimen de desventaja o Forfettario | 0000000 (7 ceros) | Vacío | Razón social del cliente | Fecha de inicio de la relación | Fecha de finalización de la validez del canal utilizado |
| Cliente no residente, no establecido, no identificado en Italia | XXXXXXX (7 "X") | Vacío | Razón social del cliente | Fecha de inicio de la relación | Fecha de finalización de la validez del canal utilizado |

> - **Pec Destinatario**: la elección de este valor indica que se pretende utilizar el mail PEC como canal de envío y esta configuración requiere la cumplimentación de CÓDIGO DESTINATARIO y EMAIL según las reglas indicadas a continuación:

| Modalidad de envío | Código destinatario | Email | Descripción destinatario | Fecha inicio | Fecha fin |
| :-- | :-- | :-- | :-- | :-- | :--|
| Mail PEC | 0000000 (7 ceros) | Email PEC del cliente | Razón social del cliente | Fecha de inicio de la relación | Fecha de finalización de la validez del canal utilizado |

> - **Sujeto no residente/establecido/identificado en Italia**: la elección de este valor identifica como canal posible el SdI al cual deben ser enviados los documentos de factura reportando como código destinatario la codificación específica “XXXXXXX” y, por ende, los campos CÓDIGO DESTINATARIO y EMAIL deben ser cumplimentados como sigue:

| Modalidad de envío | Código destinatario | Email | Descripción destinatario | Fecha inicio | Fecha fin |
| :-- | :-- | :-- | :-- | :-- | :--|
| Cliente no residente, no establecido, no identificado en Italia | XXXXXXX (7 "X") | Vacío | Razón social del cliente | Fecha de inicio de la relación | Fecha de finalización de la validez del canal utilizado |

## Facturación administración pública (Fatturazione pubblica amministrazione)

En caso de censar en el registro de una Administración Pública, es necesario acceder a *Inicio > Registros de contactos (Home > Anagrafiche contatti)*, buscar y llamar al registro de contacto para el cual se desea establecer la gestión de la facturación electrónica y, en el panel *Datos contables > Información fiscal (Dati contabili > Informazioni fiscali)*, establecer el flag **pubblica amministrazione**. Concurrentemente a la selección del check, se solicita la cumplimentación de la Grilla **pubblica amministrazione**.  
Los campos de la grilla deben ser cumplimentados de la siguiente manera:    
- **codice ufficio**: Código de la oficina pública destinataria de la factura.  
- **nome ufficio**: Descripción del campo código oficina que debe ser completada con el nombre de la oficina pública.  
- **ragione sociale**: en este campo es posible vincular un registro ya codificado en Fluentis y referido, por ejemplo, a la oficina pública que depende del registro principal que estamos utilizando (ejemplo: oficina de obras públicas del municipio de ..., o Empresa sanitaria ...... que depende del registro principal "Municipio de ...."). Este registro vinculado deberá ser establecido como destino para el registro principal en la pestaña “entrega”, de modo que la destino (ejemplo oficina de obras públicas ....) se reporte en el trazado del archivo .xml completo con el código de oficina y los demás datos como la dirección, etc.  
Para la correcta gestión de múltiples códigos de oficina (y por ende múltiples sujetos) referidos al mismo registro principal, se recomienda también gestionar y completar este campo (de todos modos no es obligatorio ni necesario en caso de un solo código de oficina directamente ligado al registro en cuestión).  
- **data inizio servizio**: define la fecha de inserción de la línea o la fecha a partir de la cual está activo el contrato de suministro con la administración pública en cuestión.  
- **data fine servizio**: define la fecha de finalización del contrato de suministro con la administración pública y hace que esta posición no sea más utilizable para la generación del archivo telemático para la factura electrónica.