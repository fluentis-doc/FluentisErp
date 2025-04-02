---
title: documento di origine esterna
sidebar_position: 2
---

La gestión se encuentra en la ruta **Calidad > Documentos de origen externo > Nuevo documento di origine esterna** o se puede realizar desde la **Búsqueda de Documentos de origen externo**.

:::important ¿Para qué sirve? (A cosa serve)
La gestión de los documentos de origen externo permite: la catalogación, la gestión de las ediciones/revisiones y su distribución (tanto en formato papel como electrónico) a las funciones empresariales que están interesadas en visualizar dichos documentos.

Enumeramos algunos ejemplos de documentos de origen externo que pueden ser catalogados:   
> *Manuales de uso y mantenimiento de maquinaria e instalaciones*   
> *Normativas*   
> *Leyes*   
> *Revistas específicas*   

La información sobre dónde están depositados los originales y la posibilidad de adjuntar copias electrónicas permite su inmediata localización y consulta con un simple clic del mouse.

A estándar están disponibles los reportes de:   
> **Documento interno**: vista previa del documento adjunto en la pestaña *Adjunto*.   
> **Documentos adjuntos al documentario**: vista previa de los documentos adjuntos a la *Gestión Documental*.   
:::

## Botones de comando (Pulsanti di comando)

### ![](/img/neutral/common/save.png) Guardar (Salva)

Al presionar este botón se memorizan toda la información modificada del *documento di origine esterna* visualizado.   

### ![](/img/neutral/common/duplicate.png) Duplicar (Duplica)

Es posible duplicar el *Documento* visualizado en un nuevo *Documento*. Simplemente presione el botón **Duplicar**.   
Se muestra una solicitud de:   
> **categoria**: es la *Categoría documento de origen externo* del nuevo *Documento* (dato obligatorio).   
> **codice**: es el Código del nuevo *Documento* (dato obligatorio).   
> **edizione/revisione**: son la Edición y la Revisión del nuevo *Documento*.   
> **titolo**: es el *Título* del *Documento* (dato obligatorio).   

Presione posteriormente el botón **OK** o el botón **cancel** si desea continuar con la actividad de duplicación o no.   
Al finalizar el proceso, el nuevo *documento di origine esterna* se visualizará.

### ![](/img/neutral/common/bill.png) Distribución (Distribuzione)

El botón inicia el procedimiento de *Distribución* del *Documento*.   
Se muestra una solicitud de filtro de quién, entre los destinatarios presentes en la *Lista de distribución*, recibirá una copia del *Documento*:   
> **Tipo:**   
>> **cartacei**: distribución a quien solicita copia en papel;   
>> **elettronici**: distribución a quien solicita por email;   
> 
> **Estado:**   
>> **già consegnati**: distribución a quien ya ha recibido el documento;   
>> **ancora da consegnare**: distribución a quien aún no ha recibido el documento;   
> 
> **Destinatario:**   
>> **interni**: distribución solo al personal interno (*Funciones empresariales* y/o *Empleados*);   
>> **clienti/fornitori**: distribución a *Clientes/Proveedores*.  

Presione posteriormente el botón **OK** o el botón **cancel** si desea continuar con la actividad de distribución o no.   

## Gestión de datos (Gestione dati)

### Datos de encabezado (Dati di testata)

La información manejable es:   
> **categoria**: es la *Categoría documento de origen externo* del *Documento* (dato obligatorio).   
> Al ingresar la categoría, la *Lista de distribución* y los datos de *Acceso permitido a las funciones* se heredan en el *Documento*.   
> 
> **codice**: es el Código del *Documento* (dato obligatorio).   
> 
> **edizione/revisione**: son la Edición y la Revisión del *Documento*; la información es libre ya que se deben incluir cualquier información descrita en los 
documentos que no son generados por la empresa.   
> 
> **titolo**: es el *Título* del *Documento* (dato obligatorio).   
> 
> **provenienza**: anotaciones libres sobre el tema.   
> **data arrivo**: es la fecha de llegada del *Documento*, al ingresar un nuevo *Documento* se propone la fecha actual.   
> **valido dal/al**: contiene una posible fecha de inicio y final de validez del *Documento*.   
> **verifica validità**: indica que el *Documento* ha sido verificado.   
> **data verifica**: indica la fecha de cuando fue verificado el *Documento*.   
> 
> **archivio**: es el *Almacén* físico donde normalmente se archiva el *Documento* (ejemplo: Oficina técnica, Dirección, ...).   
> El dato se hereda de la *Categoría documento de origen externo* y es modificable.   
> 
> **ubicazione**: es la *Ubicación* física donde normalmente se archiva el *Documento* (ejemplo: Armario, Estante, Cajón, ...).   
> El dato se hereda de la *Categoría documento de origen externo* y es modificable.   
> 
> **ubicazione descrittiva**: es la *Ubicación* física en caso de no codificación de *Archivo* y/o *Ubicación*.   
> El dato se hereda de la *Categoría documento di origine esterna* y es modificable.   
> 
> **funzione responsabile**: es la *Función empresarial* responsable del *Documento*. 
> El dato se hereda de la *Categoría documento di origine esterna* y es modificable.   
> 
> **categorie di interesse**: anotaciones libres sobre el tema.   
> **note**: anotaciones libres.

### Lista de distribución (Lista di distribuzione)

En esta lista es posible asociar: *Funciones empresariales*, *Empleados*, *Clientes/Proveedores* y *Contactos* que normalmente reciben copia del *Documento* e indicar los métodos habituales de recepción del documento.   
Al crear el *Documento*, la *Lista de distribución* se hereda de la *Categoría documento de origen externo* y la información es modificable.   
La lista consta de la siguiente información:   
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
>> **descrizione**: es la descripción libre de un destinatario no codificado.   
> 
> **dati per la consegna**   
>> **cartacea**: indica que al momento de la distribución el sujeto desea recibir una copia *en papel* del documento o en adjunto a través de *Email*.   
>> **Método de entrega (Metodo di consegna)**: indica el método habitual de entrega del *Documento*.   
>> **Email**: indica un email de destino, si no está codificado en el registro del destinatario.   
>> **numero di copie**: indica el número de copias en papel que el destinatario desea recibir.   
>> **note**: anotaciones libres.   

### Adjuntos (Allegati)

En esta lista es posible insertar y consultar posibles adjuntos, se puede visualizar la vista previa y realizar operaciones sobre la imagen.   
Estos adjuntos están separados del Documental de Fluentis, que siempre está presente y utilizable.   

### Acceso permitido a las funciones (Accesso consentito alle funzioni)

En esta lista es posible insertar las *Funciones empresariales* a las que se les dará derechos de acceso al *Documento*.   
Si no se ingresan filas en esta tabla, entonces el acceso está permitido a todos.   
Al crear el *Documento*, la lista de *Funciones empresariales* se hereda de la *Categoría documento de origen externo* y la información es modificable.   
La lista consta de la siguiente información:   
> **funzione**: es el código de la *Función empresarial*.   
> **descrizione funzione**: es la descripción de la *Función empresarial*.   
> **note**: anotaciones libres.   

### Datos extra (Extra data)

Es posible insertar [Datos Extra](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *documento di origine esterna*.   

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).