---
title: tipi prova
sidebar_position: 1
---

La tabla se encuentra en la ruta **Tablas > Calidad > Controles de artículo > tipi prova** (Tabelle > Qualità > Controlli articolo > Tipi prova).

En esta tabla es posible codificar los tipos de Pruebas que se realizarán, en la recepción de mercancías y durante el proceso productivo, sobre los artículos.  
Algunos ejemplos de uso de los *tipi prova* se encuentran en las gestiones:  
> **schede tecniche** - en la pestaña *proprietà*;  
> **piani di controllo** - en la pestaña *prove pianificate*;  
> **Control de artículos (Controllo articoli)** - en la pestaña *prove*;  
> **certificati di analisi** - en la pestaña *Controles y valores detectados > Valores detectados (Controlli e valori rilevati > Valori rilevati)*;  
> **M.E.S.** - en la pestaña *Controles de calidad > Pruebas (Controlli qualità > Prove)*.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de tipi prova (Ricerca Tipi prova)**

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de tipi prova (Inserimento Tipi prova)**

Para poder insertar nuevos *tipi prova* es necesario hacer clic en la cuadrícula en la primera línea vacía o presionar el botón **nuovo**.  
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice** y la **descrizione**.

**Duplicar tipi prova (Duplica Tipi prova)**

Para poder duplicar un *Tipo de prueba* existente en un nuevo *Tipo de prueba*, es necesario hacer clic en la cuadrícula en el *Tipo de prueba* del cual se desea duplicar y presionar el botón **duplica**.  
Se mostrará una solicitud de **codice** para el nuevo *Tipo de prueba* (dato obligatorio) y de los indicadores que permiten elegir si duplicar también la información de: *Configuración*, *Resultados posibles*, *Función* e *Imágenes*.  
Luego presione el botón **OK** o el botón **cancel** si desea continuar con la actividad de duplicación o no.

## tipi prova (Tipi prova)

Es la lista donde se insertan las informaciones principales del *Tipo de prueba*.  
La lista se compone de la siguiente información:  
> **codice**: es el código del *Tipo de prueba*.  
> **descrizione**: es la descripción del *Tipo de prueba*.  
> **riferimento piano di controllo standard**: es un campo descriptivo que contiene las referencias a codificaciones de pruebas reconocidas globalmente.  
>  
> **categoria**
>> **codice**: es el código de la *Categoría*.  
>> **descrizione**: es la descripción de la *Categoría*.  
>> **distruttiva**: indica si la prueba es de tipo destructiva.  
>
> **laboratorio interno**: indica si la prueba se lleva a cabo internamente.  
>  
> **laboratorio esterno**
>> **descrizione**: habilitado si el laboratorio es externo, es la razón social del *laboratorio de análisis* (*proveedor*) externo que realizará la prueba.
>  
> **strumento di misura**
>> **codice**: es el código de la *Categoría de instrumento de medida* a utilizar para medir los valores del *Tipo de prueba*.  
>> **descrizione**: es la descripción de la *Categoría de instrumento de medida* a utilizar para medir los valores del *Tipo de prueba*.
>  
> **valori**
>> **da rilevare**: indica si la prueba debe ser medida o es solo una *Propiedad* y no es medible, por lo que se utiliza en las *Hojas técnicas*.  
>> **unità di misura**: es la *Unidad de medida* de los valores a medir.  
>> **tipo valore**: es el *Tipo de valor* a medir: *Numérico*, *Sí/No* o *Texto*.  
>> **tipo limite**: habilitado si el *Tipo de valor* es *Numérico*, es el *Tipo límite* que se propondrá en las Pruebas.  
>  
> **tipo controllo prova**
>> **generico**: indica si la prueba se aplica comúnmente a las tipologías de documento que se podrán especificar en las columnas siguientes.  
>> **tipo documento**: habilitado si el *Tipo de valor* es *Genérico*, es el documento donde el *Tipo de prueba* se aplica comúnmente.  
>> **Propuesto en... (Proposta in...)**: habilitado si el *Tipo de valor* es *Genérico* y si el *Tipo de documento* lo permite, es el detalle (*Cabecera de documento (Testata documento)* o *riga documento*) donde el *Tipo de prueba* se aplica comúnmente.  
>> **codice**: es el código del *Tipo de control de prueba* a utilizar.  
>> **descrizione**: es la descripción del *Tipo de control de prueba* a utilizar.  
>> **frequenza**: es la frecuencia descriptiva con la cual se realizará el control.  
>  
> **note**: anotaciones libres.

### Atributos Tipo de prueba (Attributi Tipo di prova)

Es posible insertar datos [Adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para el *Tipo de prueba*.  
Estos *Datos adicionales* se heredan en las *Pruebas* de los documentos donde se prevé el uso de los atributos.  

### Parámetros de configuración de Prueba e instrumento de medida (Parametri di configurazione Prova e strumento di misura)

Contiene los [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) necesarios para que los operadores preparen todos los instrumentos necesarios para poder comenzar una determinada prueba. Pueden ser considerados configuraciones necesarias, información operativa previa a la ejecución de la prueba.  
Estos *Datos adicionales* se heredan en las *Pruebas* de los documentos donde se prevé una configuración.  

### Resultados posibles (Esiti possibili)

Es posible personalizar, para el *Tipo de prueba* seleccionado, los *Tipos de resultado* posibles.  
Cuando se detecta una sola prueba, según su conformidad, el sistema propondrá el resultado *positivo* o *negativo* por defecto.  
La lista se compone de la siguiente información:  
> **esito**: es el código del *Tipo de resultado*.  
> **descrizione esito**: es la descripción del *Tipo de resultado*.  
> **predefinito positivo**: indica que se propondrá como resultado positivo cuando se detecte una prueba.  
> **predefinito negativo**: indica que se propondrá como resultado negativo cuando se detecte una prueba.  
> **sequenza**: es la secuencia de visualización en las listas de los *Tipos de resultado* para el "Tipo de prueba" seleccionado.  
> **note**: anotaciones libres.

### Funciones de detección y aprobación (Funzioni di rilevamento ed approvazione)

Es una atribución de derechos que enumera quién puede detectar y/o aprobar los valores de la prueba.  
La lista se compone de la siguiente información:  
> **funzione**: es el código de la *Función empresarial*.  
> **descrizione funzione**: es la descripción de la *Función empresarial*.  
> **tipo attività**: es el derecho otorgado a la *Función empresarial* durante las actividades de detección y/o aprobación de una prueba. Los valores posibles son:  
> - *può rilevare* - la *Función empresarial* tiene los permisos de solo medición de los valores;  
> - *può approvare* - la *Función empresarial* tiene los permisos de solo aprobación de la prueba;  
> - *Puede medir y aprobar (Può rilevare e approvare)* - la *Función empresarial* tiene los permisos de medición de los valores y de aprobación de la prueba.  
>  
> Las otras *Funciones empresariales* no enumeradas no tienen derechos de medición de valores y aprobación de la prueba.  
> Si no se especifican *Funciones empresariales*, todos los operadores podrán medir valores y aprobar la prueba.  
> 
> **note**: anotaciones libres.

### Imágenes (Immagini)

Es posible asociar imágenes útiles a la prueba a medir. Por ejemplo, podría ser útil para indicar visualmente algunas características o actividades a realizar durante la preparación y ejecución de la prueba.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).