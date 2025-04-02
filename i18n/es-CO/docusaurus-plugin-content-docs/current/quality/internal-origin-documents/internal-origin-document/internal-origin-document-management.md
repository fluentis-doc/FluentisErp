---
title: documento di origine interna
sidebar_position: 2
---

La gestión se encuentra en el recorrido **Calidad > Documentos de origen interno > Nuevo documento di origine interna** o también se puede realizar desde la **Búsqueda de Documentos de origen interno**.

:::important ¿Para qué sirve? (A cosa serve)
La gestión de los documentos de origen interno permite: la catalogación, la gestión de ediciones/revisiones y su distribución (tanto en formato papel como electrónico) a las áreas de la empresa que están interesadas en consultar dichos documentos.

Enumeramos algunos ejemplos de documentos de origen externo que pueden ser catalogados:  
> *Manual de calidad (Manuale della qualità)*  
> *Política de gestión (Politica di gestione)*  
> *organigramma*  
> *Esquema de proceso (Schema di processo)*  
> *Instrucciones operativas (Istruzione operative)*  
> *Ficha de servicio (Scheda di servizio)*  

La información sobre dónde están depositados los originales y la posibilidad de adjuntarles copias electrónicas permite una inmediata localización y consulta con un simple clic del ratón.

Como estándar, están disponibles los informes de:  
> **pagina di guardia**: es una hoja que, para *Documento*, reporta la lista de *Revisiones* realizadas y la *Lista de distribución*.  
> **documento interno**: vista previa del documento adjunto en la pestaña *Adjunto* y creado en la pestaña *Creación documento*.  
> **documenti allegati al documentale**: vista previa de los documentos adjuntos a la *Gestión Documental*.  
:::


## Botones de comando (Pulsanti di comando)


### ![](/img/neutral/common/save.png) Guardar (Salva)

Al presionar este botón, se almacenan todas las informaciones modificadas del *documento di origine interna* visualizado.


### ![](/img/neutral/common/duplicate.png) Duplicar (Duplica)

El botón está habilitado solo para los componentes de las *Funciones empresariales* de *verificación/aprobación* y *redacción/emisión*.  
Es posible duplicar el *Documento* visualizado en un nuevo *Documento*. Solo debe presionar el botón **duplica**.  
Se mostrará una solicitud de:  
> **categoria**: es el *Código de categoría documento de origen interno* del nuevo *Documento* (dato obligatorio).  
> **codice**: es el *Código* del nuevo *Documento* (dato obligatorio).  
> **titolo**: es el *Título* del nuevo *Documento* (dato obligatorio).  

*Categoría* y *Título* son propuestos por el documento de origen; el *Código* se propone si a la *Categoría* se le asocia una *Codificación automática*.  
Después, presione el botón **OK** o el botón **Cancel** si desea continuar con la actividad de duplicado o no.  
El nuevo *documento di origine interna* creado tendrá *Edición* y *Revisión* iguales a *Cero* y el estado de *in creazione*.  
Al finalizar la elaboración, se visualizará el nuevo *documento di origine interna*.


### Crear nueva revisión (Crea nuova revisione)

El botón está habilitado solo para los componentes de las *Funciones empresariales* de *verificación/aprobación* y *redacción/emisión* y si el estado del documento de origen es *emesso*. Se mostrará una solicitud de:  
> **motivo della revisione**: una breve descripción del motivo que condujo a la revisión (dato obligatorio).  
> **modifica su paragrafi**: un recordatorio descriptivo sobre la referencia al número de párrafos variaciones.  
> **modifica su pagine**: un recordatorio descriptivo sobre la referencia al número de páginas variaciones.  

Presione después el botón **OK** o el botón **Cancel** si desea continuar o no con la actividad de creación.  
Se creará un nuevo *documento di origine interna*, con toda la información del *Documento* original pero con un índice de *Revisión* incrementado y el estado de *in revisione*. El *Documento* original permanece en vigor con el estado de *emesso*.  
Al finalizar el proceso, se visualizará el nuevo *documento di origine interna*.


### Crear nueva edición (Crea nuova edizione)

El botón está habilitado solo para los componentes de las *Funciones empresariales* de *verificación/aprobación* y *redacción/emisión* y si el estado del documento de origen es *emesso*. Se mostrará una solicitud de:  
> **motivo della revisione**: una breve descripción del motivo que condujo a la revisión (dato obligatorio).  
> **modifica su paragrafi**: un recordatorio descriptivo sobre la referencia al número de párrafos variaciones.  
> **modifica su pagine**: un recordatorio descriptivo sobre la referencia al número de páginas variaciones.  

Presione después el botón **OK** o el botón **Cancel** si desea continuar o no con la actividad de creación.  
Se creará un nuevo *documento di origine interna*, con toda la información del *Documento* original pero con un índice de *Edición* incrementado y el estado de *in revisione*. El *Documento* original permanece en vigor con el estado de *emesso*.  
Al finalizar el proceso, se visualizará el nuevo *documento di origine interna*.


### Aprobar (Approva)

El botón está habilitado solo para los componentes de las *Funciones empresariales* de *verificación/aprobación* y si el estado del documento de origen es *in creazione* o *in revisione*.  
Después de la solicitud de confirmación de procesamiento y al finalizar el procesamiento, el *documento di origine interna* pasará a un estado de *approvato*.


### Emitir (Emetti)

El botón está habilitado solo para los componentes de las *Funciones empresariales* de *redacción/emisión* y si el estado del documento de origen es *approvato*.  
Después de la solicitud de confirmación de procesamiento y al finalizar el procesamiento, el *documento di origine interna* pasará a un estado de *emesso* y se visualizará automáticamente la vista previa de impresión de la *pagina di guardia*.


### ![](/img/neutral/common/bill.png) Distribución (Distribuzione)

El botón inicia el procedimiento de *Distribución* del *Documento*.  
Se mostrará una solicitud de filtro de quién, entre los destinatarios presentes en la *Lista de distribución*, recibirá copia del *Documento*:  
> **Tipo:**  
>> **cartacei**: distribución a quienes requieren copia en papel;  
>> **elettronici**: distribución a quienes requieren email;  
>
> **Estado:**  
>> **già consegnati**: distribución a quienes ya han recibido el documento;  
>> **ancora da consegnare**: distribución a quienes no han recibido aún el documento;  
>
> **Destinatario:**  
>> **interni**: distribución solo al personal interno (*Funciones empresariales* y/o *Empleados*);  
>> **clienti/fornitori**: distribución a *Clientes/Fornitori*.  

Presione después el botón **OK** o el botón **Cancel** si desea continuar con la actividad de distribución o no.


### Anular documento (Annulla documento)

El botón está habilitado solo para los componentes de las *Funciones empresariales* de *redacción/emisión* y si el estado del documento de origen es *emesso*.  
Después de la solicitud de confirmación de procesamiento y al finalizar el procesamiento, el *documento di origine interna* pasará a un estado de *annullato*.


### Restaurar anulación (Ripristina annullamento)

El botón está habilitado solo para los componentes de las *Funciones empresariales* de *redacción/emisión* y si el estado del documento de origen es *annullato*.  
Después de la solicitud de confirmación de procesamiento y al finalizar el procesamiento, el *documento di origine interna* pasará a un estado de *emesso*.


## Gestión de datos (Gestione dati)


### Datos de encabezado (Dati di testata)

La información gestionable es:  
> **categoria documento**: es la *Categoría documento de origen interno* del *Documento* (dato obligatorio).  
> Al ingresar la categoría, la *Lista de distribución* y los datos de *Acceso permitido a las funciones* se heredan en el *Documento*.  
>
> **codice**: es el código del *Documento* (dato obligatorio).  
>
> **edizione/revisione**: son la Edición y la Revisión del *Documento*. La información es de solo lectura.  
Las informaciones son modificables si el documento está en estado de *in creazione*, de lo contrario son de solo lectura; se pueden variar de manera controlada por el sistema utilizando los botones *crea nuova revisione* y *crea nuova edizione* que incrementan el valor anterior de *Revisión* y *Edición* en una unidad.  
>
> **titolo**: es el *Título* del *Documento* (dato obligatorio).  
>
> **stato documento**: es el *Estado* del *Documento* y reporta el estado actual del *Documento*. La información es de solo lectura.  
> Los estados del documento son valores predefinidos por el sistema que identifican los diversos estados de gestión del *documento di origine interna*.  
> Los valores predefinidos son:  
> - **in creazione**: establecido al crear un nuevo documento;  
> - **approvato**: establecido al *verificar/aprobar* un documento en estado de *in creazione* o *in revisione*;  
> - **emesso**: establecido al *redactar/emisión* de un documento en estado de *approvato* o al *restaurar anulación* de un documento en estado de *annullato*;  
> - **in revisione**: establecido al *crear nueva edición/revisión* de un documento en estado de *emesso*;  
> - **obsoleto**: establecido, para un documento en estado de *emesso*, origen de una solicitud de *crear nueva edición/revisión*, al momento de su *emisión*;  
> - **annullato**: establecido al momento de *anular* un documento en estado de *emesso*.  
>
> **dalla data**: es la fecha en que el *Documento* asumió el actual *Estado*. La información es de solo lectura.  
> **dall'utente**: es el *Usuario A.R.M.* que ha modificado el *Estado* del *Documento*. La información es de solo lectura.  
>
> **informazioni su revisione**: expander donde es posible visualizar/inserir:  
>
>> **Fecha de creación/Creador (Data creazione/Creato da)**: son la *Fecha de creación* y el *Usuario A.R.M.* que creó el documento. La información es de solo lectura.  
>> **data approvazione/approvato da**: son la *Fecha de aprobación* y el *Usuario A.R.M.* que ha *Aprobado* el documento. La información es de solo lectura.  
>> **data emissione/emesso da**: son la *Fecha de emisión* y el *Usuario A.R.M.* que ha *Emitido* el documento. La información es de solo lectura.  
>>
>> **motivo della revisione**: una breve descripción del motivo que condujo a la revisión.  
>> La información puede ser variada si el *Estado* es *in creazione* o *in revisione*.  
>>
>> **modifica su paragrafi**: un recordatorio descriptivo sobre la referencia al número de párrafos variaciones con respecto a la *revisión/edición* anterior.  
>> La información puede ser variada si el *Estado* es *in creazione* o *in revisione*.  
>>
>> **modifica su pagine**: un recordatorio descriptivo sobre la referencia al número de páginas variaciones con respecto a la *revisión/edición* anterior.  
>> La información puede ser variada si el *Estado* es *in creazione* o *in revisione*.  
>>
>> **data annullamento/annullato da**: son la *Fecha de anulación* y el *Usuario A.R.M.* que ha *Anulado* el documento. La información es de solo lectura.  
>
> **informazioni su ubicazione**: expander donde es posible visualizar/inserir:  
>
>> **archivio**: es el *Almacén* físico donde habitualmente se archiva el *Documento* (ejemplo: Oficina técnica, Dirección, ...).  
>> El dato es heredado de la *Categoría documento de origen externo* y es modificable.  
>>
>> **ubicazione**: es la *Ubicación* física donde habitualmente se archiva el *Documento* (ejemplo: Armario, Estante, Cajón, ...).  
>> El dato es heredado de la *Categoría documento de origen externo* y es modificable.  
>>
>> **ubicazione descrittiva**: es la *Ubicación* física en caso de no codificación de *Archivo* y/o *Ubicación*.  
>> El dato es heredado de la *Categoría documento de origen externo* y es modificable.  
>
> **funzione di verifica/approvazione**: es la *Función empresarial* responsable de la verificación/aprobación del documento.  
>> El dato es heredado de la *Categoría documento de origen externo* y es modificable.  
>
> **funzione di redazione/emissione**: es la *Función empresarial* responsable de la redacción/emisión del documento.  
>> El dato es heredado de la *Categoría documento de origen externo* y es modificable.  
>
> **note**: anotaciones libres.


### Adjunto (Allegato)

Es posible adjuntar el *Documento* que se está catalogando mediante el uso del drag&drop; se visualizará la vista previa.  
Este adjunto no se incluye en la gestión documental de Fluentis.  
En la información de *nome allegato* y *tipo allegato*, el sistema reconoce el nombre del archivo físico y la extensión.  
Si no se reconocen, estos pueden ser ingresados manualmente.


### Creación de documento (Creazione documento)

Es un simple *editor de texto* utilizado para crear el *Documento* directamente en esta gestión.  
Se pueden establecer: el Tipo de letra, el Tamaño, Estilos, Colores de texto y de fondo, y otras simples formateaciones del texto.


### Lista de distribución (Lista di distribuzione)

En esta lista es posible asociar: *Funciones empresariales*, *Empleados*, *Clientes/Proveedores* y *Contactos* que habitualmente reciben copia del *Documento* e indicar las metodologías habituales de recepción del documento.  
Al crear el *Documento*, la *Lista de distribución* se hereda de la *Categoría documento de origen interno* y la información es modificable.  
La lista se compone de la siguiente información:  
> **gruppo**  
>> **codice**: es el código del *Rol A.R.M.* destinatario.  
>> **descrizione**: es la descripción del *Rol A.R.M.* destinatario.  
>
> **utente**  
>> **codice**: es el código del *Usuario A.R.M.* destinatario.  
>> **descrizione**: es la descripción del *Usuario A.R.M.* destinatario.  
>
> **funzione aziendale**  
>> **codice**: es el código de la *Función empresarial* destinataria.  
>> **descrizione**: es la descripción de la *Función empresarial* destinataria.  
>
> **dipendente**  
>> **codice**: es el código del *empleado* destinatario.  
>> **cognome**: es el apellido del *empleado* destinatario.  
>> **nome**: es el nombre del *empleado* destinatario.  
>
> **cliente/fornitore**  
>> **descrizione**: es la razón social del *Cliente/Proveedor* destinatario.  
>
> **contatto**  
>> **codice**: es el código del *Contacto* destinatario.  
>> **descrizione**: es la descripción del *Contacto* destinatario.  
>
> **altro destinatario**  
>> **descrizione**: es la libre descripción de un destinatario no codificado.  
>
> **dati per la consegna**  
>> **cartacea**: indica que en el momento de la distribución, el sujeto desea recibir copia *cartacea* del documento o en adjunto a través de *Email*.  
>> **Método de entrega (Metodo di consegna)**: indica la metodología habitual de entrega del *Documento*.  
>> **email**: indica un email de destino, si no está codificado en la base de datos del destinatario.  
>> **numero di copie**: indica el número de copias en papel que el destinatario desea recibir.  
>> **note**: anotaciones libres.    


### Acceso permitido a las funciones (Accesso consentito alle funzioni)

En esta lista es posible ingresar las *Funciones empresariales* a las que se les otorgarán los derechos de acceso al *Documento*.  
Si no se ingresan filas en esta tabla, entonces el acceso está permitido para todos.  
Al crear el *Documento*, la lista de *Funciones empresariales* se hereda de la *Categoría documento de origen interno* y la información es modificable.  
La lista se compone de la siguiente información:  
> **funzione**: es el código de la *Función empresarial*.  
> **descrizione funzione**: es la descripción de la *Función empresarial*.  
> **note**: anotaciones libres.   


### Datos extra (Extra data)
Es posible ingresar [Datos extra](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *documento di origine interna*.   


### Ediciones/Revisiones anteriores (Edizioni/Revisioni precedenti)
En esta lista es posible visualizar el historial de *Ediciones/Revisiones anteriores* del *Documento* en gestión.   
A través de un doble clic del ratón en la fila deseada es posible visualizar la gestión de la *Revisión* del *Documento* seleccionado.  
La lista se compone de la siguiente información:  
> **categoria**: es la *Categoría documento de origen interno*.  
> **codice**: es el Código del *Documento*.  
> **edizione**: es la Edición del *Documento*.  
> **revisione**: es la Revisión del *Documento*.  
> **titolo**: es el *Título* del *Documento*.  
> **stato**: es lo *Estado* del *Documento*.  
> **dalla data**: es la fecha en que el *Documento* asumió el actual *Estado*.  
> **riferimento paragrafi**: es la referencia al número de párrafos modificados con respecto a la *revisión/edición* anterior.  
> **Referencia en páginas (Riferimento su pagine)**: es el número de páginas modificadas con respecto a la *revisión/edición* anterior.  
> **funzione di verifica/approvazione**: es la *Función empresarial* responsable de la verificación/aprobación.  
> **funzione di redazione/emissione**: es la *Función empresarial* responsable de la redacción/emisión.   


:::tip Flujo de trabajo del estado del documento (Work flow stato documento)   
![example](/img/it-it/quality/internal-origin-document/internal-origin-document-status-work-flow.png)
:::


Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).