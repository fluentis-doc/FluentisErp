---
title: strumento di misura
sidebar_position: 2
---

La gestión se encuentra en la ruta **Calidad > Calibración de instrumentos > Herramientas de medición > Nueva herramienta de medición** o se puede ejecutar desde la **Búsqueda de herramientas de medición**.   

:::important ¿Para qué sirve? (A cosa serve)
En este registro se almacenan las herramientas de medición utilizadas para garantizar la idoneidad de los productos y la prestación de los servicios ofrecidos.  
A la herramienta de medición se le pueden asociar información de compra, responsabilidad, propiedades técnicas/mecánicas, ubicación y calibración.  
Si la herramienta está sujeta a calibración y la calibración es interna, es posible definir cuáles son las actividades que deben realizarse y los valores a registrar para que la calibración sea exitosa.  
Si la herramienta está sujeta a calibración y la calibración es externa, se puede definir cuál es el tercero que realizará la calibración.  
Si se ha ingresado una periodicidad temporal de calibración, el botón "Programar nuevas calibraciones" permite la creación automática, por un período deseado, de las calibraciones programadas.  
Como estándar se disponen de informes de: Registro de herramientas agrupadas por: Herramienta, Categoría, Proveedor, Ubicación, Usuario, Fecha de vencimiento de la garantía y Fecha de vencimiento de la calibración, Registro de herramientas no sujetas a calibración y Ficha de herramienta de medición.  

Como estándar se disponen de informes de:  
> **registro strumenti di misura**: lista de *Herramientas de medición* agrupables por: *Herramienta*, *Categoría*, *Proveedor* (de compra), *Ubicación*, *Usuario*, *Fecha de vencimiento de la garantía* y *Fecha de vencimiento de la calibración*.  
> **registro strumenti non soggetti a taratura**: lista de *Herramientas de medición* donde no se prevé la *Calibración*; para la impresión de este informe no tiene efecto el filtro *Estado - No sujetas a calibración: Todos, Sujetos a calibración, No sujetas a calibración*.  
> **scheda strumento di misura**: ficha de las *Herramientas de medición*.   
:::


## Botones de comando


### ![](/img/neutral/common/save.png) Guardar (Salva)

Al presionar este botón se almacenan toda la información modificada de la *strumento di misura* visualizada.   


### ![](/img/neutral/common/duplicate.png) Duplicar herramienta (Duplica strumento)

Para duplicar la *strumento di misura* visualizada en una nueva *strumento di misura* basta con presionar el botón **duplica**.  
Las informaciones de la herramienta original que no se duplican son: *Código*,  *matricola*, *Fecha de compra*, *Fecha de vencimiento de la garantía*, *Ubicación del proveedor*, *Cliente propietario*, *Imagen* y los datos de la última calibración realizada: *Fecha de última calibración* y *Resultado*.   
Al finalizar el proceso, se visualizará la nueva *strumento di misura*.


### Planificar nuevas calibraciones (Pianifica nuove tarature)

El botón está habilitado solo si la *strumento di misura* está *Activa*, es *Sujeta a calibración* y existe un *Período de calibración* temporal (*Unidad de medida* *Días* o *Meses*). Se visualizará una solicitud de:   
> **pianificare fino al**: es la fecha de fin de la planificación de las nuevas calibraciones programadas.   

*Método utilizado para la planificación*:  
Primero se eliminan todas las *Calibraciones* programadas anteriores que aún no se han realizado para la *Herramienta*.  
Posteriormente, a partir de la fecha de la última *Calibración*, se crean tantas *Calibraciones* como sea posible en el intervalo solicitado a partir de la fecha actual y programadas para el *Período de calibración*. Si la primera fecha propuesta cae en un día no laborable especificado en el *Calendario de fábrica*, la fecha propuesta se pospondrá a la primera fecha laborable útil.  
Si para la herramienta no se ha programado o realizado nunca una *Calibración* o la última fecha de *Calibración* corresponde a un período anterior a la fecha actual menos el *Período de calibración*, la primera *Calibración* se propondrá en la fecha actual y posteriormente las demás.


### Nueva calibración (Nuova taratura)

El botón está habilitado solo si la *strumento di misura* está *Activa* y es *Sujeta a calibración*.  
Para poder crear una nueva *Calibración* no programada para la *strumento di misura* visualizada, es necesario presionar el botón **nuova taratura**.  
Al confirmar la solicitud, se crea una nueva *Calibración*; se propone el *Tipo de calibración* (interna o externa), indicado en los *Parámetros de calibración de instrumentos*, las referencias de la *strumento di misura* y sus propiedades.  
Al finalizar el proceso, se visualizará la nueva *Calibración*.   


## Gestión de datos


### Datos de cabecera (Dati di testata)

Las informaciones gestionadas son:   
> **categoria**: es la *Categoría de la herramienta* de la *strumento di misura* (dato obligatorio).   
> **codice**: es el código de la *strumento di misura* (dato obligatorio).   
> **matricola**: es el número de serie de la *strumento di misura*; información descriptiva libre.   
> **modello**: es el modelo de la *strumento di misura*; información descriptiva libre.   
>
> **dati di acquisto**: expander donde es posible ingresar:   
>
>> **fornitore**: es la razón social del *Proveedor* de compra.   
>> **produttore**: es el contacto del *Productor* de la herramienta.   
>> **data di acquisto**: es la fecha de compra.   
>> **scadenza garanzia**: es la fecha de vencimiento de la garantía de compra.   
>> **fornitore manutenzione/assistenza**: es la razón social del *Proveedor* habitual de mantenimiento/asistencia.   
>
> **funzione responsabile**: expander donde es posible ingresar:   
>
>> **funzione**: es la *Función empresarial* responsable.   
>> **dipendente**: es el *Empleado* responsable.   
>
> **proprietà di taratura**: expander donde es posible ingresar:   
>
>> **non soggetto a taratura**: indica que la *strumento di misura* no está sujeta a calibración.   
>> En este caso, toda la otra información presente en el expander está deshabilitada.   
>> **taratura interna**: indica que la *strumento di misura* es calibrada por un sujeto interno a la empresa.   
>> **Período de calibración (Periodo di taratura)**: es el período (expresado en la siguiente *Unidad de medida*) de calibración de la *strumento di misura*.   
>> **unità di misura**: es la *Unidad de medida* del *Período* de calibración.   
>> **ultima taratura**: es la fecha de la última calibración realizada; el valor se establece automáticamente al asignar el *Resultado* de la última *Calibración* realizada, pero puede ser indicado también manualmente.   
>> **esito**: es el *Resultado* de la última calibración realizada; el valor se establece automáticamente al asignar el *Resultado* de la última *Calibración* realizada, pero puede ser indicado también manualmente.   
>> **data prossima taratura**: es la fecha de la próxima calibración; el valor se establece automáticamente al asignar el *Resultado* de la última *Calibración* realizada, pero puede ser indicado también manualmente.   
>> **fornitore taratura**: es la razón social del *Proveedor* que realiza la calibración externa.   
>
> **classificazione**: es la *Clasificación*; ejemplos: Mecánico, Eléctrico, Electrónico, etc.   
> **articolo**: es el *Artículo* asociado a la *strumento di misura*; el artículo, para poder ser seleccionado, debe ser de *Naturaleza artículo* *Equipo* o *Herramienta*.   
>
> **proprietà dello strumento**: expander donde es posible ingresar:   
>
>> **unità di misura**: es la *Unidad de medida* de los valores registrados por la *strumento di misura*.   
>> **Rango de medida (Intervallo di misura)**: es el rango que puede medir la *strumento di misura*.   
>> **precisione**: es la *Precisión de medición* mínima.   
>> **limiti**: son los *Límites de aceptabilidad* de la *strumento di misura* para poder utilizarla; ejemplos: posibles límites de precisión, ambientes donde no usarla, etc.   
>> **ubicazione fornitore**: es la razón social del *Proveedor* donde se encuentra la *strumento di misura*.   
>> **Es una herramienta primaria (E' uno Strumento primario)**: indica que la *strumento di misura* visualizada se utiliza para calibrar otras herramientas.   
>> **strumento primario**: es la *strumento di misura* que se utiliza para realizar la calibración de la herramienta visualizada.   
>
> **Función de uso (Funzione di utilizzo)**: expander donde es posible ingresar:   
>
>> **funzione**: es la *Función empresarial* que utiliza habitualmente la *strumento di misura*.   
>> **dipendente**: es el *Empleado* que utiliza habitualmente la *strumento di misura*.   
>
> **classe strumento**: es la *Clase de herramienta*; se utiliza habitualmente para definir diferentes niveles de degradación de la *strumento di misura*.   
> **magazzino/ubicazione**: es el *Almacén/Ubicación* donde se encuentra la *strumento di misura*.   
> **cliente proprietario**: es la razón social del *Cliente* propietario.   
> **attivo**: indica que la *strumento di misura* sigue siendo *activa*.   
> **non attivo dal**: indica la fecha desde la cual la *strumento di misura* ya no está *activa*.   
> **annotazioni**: anotaciones libres.   


### Valores a registrar (Valori da rilevare)
En esta lista se puede definir los tipos de registro y los valores a registrar durante las actividades de *Calibración interna*.   
Si la *strumento di misura* está *Activa*, es *Sujeta a calibración* y es de *Calibración interna*, estos valores se registran en las *Calibraciones internas*.   
La lista se compone de la siguiente información:   
> **sequenza**: es la secuencia de registro.   
> **posizione**: anotaciones libres sobre el tema.   
> **intervallo lettura**: anotaciones libres sobre el tema.   
> **dato richiesto**: es el valor nominal requerido.   
> **Incertidumbre (-) (Incertezza (-))**: es el valor de la incertidumbre negativa (expresada en porcentaje) que se aplicará al *Dato requerido*.   
> **Incertidumbre (+) (Incertezza (+))**: es el valor de la incertidumbre positiva (expresada en porcentaje) que se aplicará al *Dato requerido*.   
> **nota**: anotaciones libres.   


### Artículos asociados (Articoli associati)
En esta lista es posible asociar los *Artículos* medibles con la *strumento di misura*.   
Con la versión actual de Fluentis no hay controles estándar que verifiquen el uso de la herramienta para registrar valores de los *Artículos* presentes en esta lista.   
La lista se compone de la siguiente información:   
> **classe**: es la *Clase de artículo*.   
> **codice**: es el código del *Artículo*.   
> **classe**: es la descripción del *Artículo*.   
> **note**: anotaciones libres.   


### Historial de Informes y Certificados de calibración (Storico Rapporti e Certificati di taratura)
En esta lista es posible visualizar el historial de *Calibraciones* y *Certificados de calibración* planificados y efectuados para la *strumento di misura*.   
A través de un clic doble del mouse en la fila deseada es posible gestionar la *Calibración* seleccionada.   
La lista se compone de la siguiente información:   
> **tipo taratura**: es el código del *Tipo de calibración*.   
> **descrizione tipo taratura**: es la descripción del *Tipo de calibración*.   
> **anno**: es el *Año* del documento.   
> **numero**: es el *Número* del documento.   
> **taratura interna**: indica si se ha emitido una *Calibración interna*.   
> **schedulata**: indica si el documento ha sido programado (planificado).   
> **data prevista**: es la fecha de la calibración prevista.   
> **data taratura**: es la fecha de calibración efectiva.   
> **esito**: es el código del *Resultado* de la calibración.   
> **descrizione esito**: es la descripción del *Resultado* de la calibración.   
> **categoria**: es el código de la *Categoría de herramienta*.   
> **descrizione categoria**: es la descripción de la *Categoría de herramienta*.   
> **codice**: es el código de la *strumento di misura*.   
> **matricola**: es el número de serie de la *strumento di misura*.   
> **modello**: es el modelo de la *strumento di misura*.   
> **laboratorio esterno**: es la razón social del *Proveedor* que realiza la calibración externa.   
> **funzione**: es el código de la *Función empresarial* que realiza la calibración interna.   
> **descrizione funzione**: es la descripción de la *Función empresarial* que realiza la calibración interna.   
> **codice**: es el código del *Empleado* que realiza la calibración interna.   
> **cognome**: es el apellido del *Empleado* que realiza la calibración interna.   
> **nome**: es el nombre del *Empleado* que realiza la calibración interna.   


### Datos adicionales (Extra data)
Es posible ingresar [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *strumento di misura*.   


### Documentos vinculados (Documenti collegati)
En esta lista es posible ingresar y consultar posibles anexos; es posible visualizar la previsualización.   


### Imagen (Immagine)
Es posible adjuntar una imagen de la *strumento di misura* mediante el uso de arrastrar y soltar; se visualizará la previsualización.   
Este anexo no se incluye en el Documental de Fluentis.   


Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funciones, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).