---
title: Tipos de pruebas
sidebar_position: 1
---

La tabla se encuentra en la ruta **Tablas > Calidad > Controles de artículo > Tipos de pruebas**.

En esta tabla es posible codificar los tipos de Pruebas que se realizarán, en la recepción de mercancías y durante el proceso productivo, sobre los artículos.  
Algunos ejemplos de uso de los *Tipos de pruebas* se encuentran en las gestiones:  
> **Hojas de datos** - en la pestaña *Propiedad*;  
> **Planes de control** - en la pestaña *Pruebas planificadas*;  
> **Control de artículos** - en la pestaña *Pruebas*;  
> **Certificados de Análisis** - en la pestaña *Controles y valores detectados > Valores detectados*;  
> **M.E.S.** - en la pestaña *Controles de calidad > Pruebas*.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Tipos de pruebas**

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Tipos de pruebas**

Para poder insertar nuevos *Tipos de pruebas* es necesario hacer clic en la cuadrícula en la primera línea vacía o presionar el botón **Nuevo**.  
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **Código** y la **Descripción**.

**Duplicar Tipos de pruebas**

Para poder duplicar un *Tipo de prueba* existente en un nuevo *Tipo de prueba*, es necesario hacer clic en la cuadrícula en el *Tipo de prueba* del cual se desea duplicar y presionar el botón **Duplicado**.  
Se mostrará una solicitud de **Código** para el nuevo *Tipo de prueba* (dato obligatorio) y de los indicadores que permiten elegir si duplicar también la información de: *Configuración*, *Resultados posibles*, *Función* e *Imágenes*.  
Luego presione el botón **OK** o el botón **cancel** si desea continuar con la actividad de duplicación o no.

## Tipos de pruebas

Es la lista donde se insertan las informaciones principales del *Tipo de prueba*.  
La lista se compone de la siguiente información:  
> **Código**: es el código del *Tipo de prueba*.  
> **Descripción**: es la descripción del *Tipo de prueba*.  
> **Referencia del plan de control estándar**: es un campo descriptivo que contiene las referencias a codificaciones de pruebas reconocidas globalmente.  
>  
> **Categoría**
>> **Código**: es el código de la *Categoría*.  
>> **Descripción**: es la descripción de la *Categoría*.  
>> **Destructivo**: indica si la prueba es de tipo destructiva.  
>
> **Laboratorio interno**: indica si la prueba se lleva a cabo internamente.  
>  
> **Laboratorio externo**
>> **Descripción**: habilitado si el laboratorio es externo, es la razón social del *laboratorio de análisis* (*proveedor*) externo que realizará la prueba.
>  
> **Herramienta de medición**
>> **Código**: es el código de la *Categoría de instrumento de medida* a utilizar para medir los valores del *Tipo de prueba*.  
>> **Descripción**: es la descripción de la *Categoría de instrumento de medida* a utilizar para medir los valores del *Tipo de prueba*.
>  
> **Valores**
>> **Para detectar**: indica si la prueba debe ser medida o es solo una *Propiedad* y no es medible, por lo que se utiliza en las *Hojas de datos*.  
>> **Unidades de Medida**: es la *Unidad de medida* de los valores a medir.  
>> **Tipo de valor**: es el *Tipo de valor* a medir: *Numérico*, *Sí/No* o *Texto*.  
>> **Tipo de límite**: habilitado si el *Tipo de valor* es *Numérico*, es el *Tipo límite* que se propondrá en las Pruebas.  
>  
> **Tipo de prueba de control**
>> **Genérico**: indica si la prueba se aplica comúnmente a las tipologías de documento que se podrán especificar en las columnas siguientes.  
>> **Tipo de documento**: habilitado si el *Tipo de valor* es *Genérico*, es el documento donde el *Tipo de prueba* se aplica comúnmente.  
>> **Propuesto en... (Proposta in...)**: habilitado si el *Tipo de valor* es *Genérico* y si el *Tipo de documento* lo permite, es el detalle (*Cabecera de documento (Testata documento)* o *riga documento*) donde el *Tipo de prueba* se aplica comúnmente.  
>> **Código**: es el código del *Tipo de control de prueba* a utilizar.  
>> **Descripción**: es la descripción del *Tipo de control de prueba* a utilizar.  
>> **Frecuencia**: es la frecuencia descriptiva con la cual se realizará el control.  
>  
> **Notas**: anotaciones libres.

### Atributos Tipo de prueba 

Es posible insertar [Datos Adicionales](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para el *Tipo de prueba*.  
Estos *Datos adicionales* se heredan en las *Pruebas* de los documentos donde se prevé el uso de los atributos.  

### Parámetros de configuración de prueba e instrumento de medición

Contiene los [Datos adicionales](/docs/configurations/utility/extra-data/extradata/search-extradata) necesarios para que los operadores preparen todos los instrumentos necesarios para poder comenzar una determinada prueba. Pueden ser considerados configuraciones necesarias, información operativa previa a la ejecución de la prueba.  
Estos *Datos adicionales* se heredan en las *Pruebas* de los documentos donde se prevé una configuración.  

### Resultados posibles 

Es posible personalizar, para el *Tipo de prueba* seleccionado, los *Tipos de resultado* posibles.  
Cuando se detecta una sola prueba, según su conformidad, el sistema propondrá el resultado *positivo* o *negativo* por defecto.  
La lista se compone de la siguiente información:  
> **Resultado**: es el código del *Tipo de resultado*.  
> **Descripción del resultado**: es la descripción del *Tipo de resultado*.  
> **Predeterminado positivo**: indica que se propondrá como resultado positivo cuando se detecte una prueba.  
> **Negativo por defecto**: indica que se propondrá como resultado negativo cuando se detecte una prueba.  
> **Secuencia**: es la secuencia de visualización en las listas de los *Tipos de resultado* para el "Tipo de prueba" seleccionado.  
> **Notas**: anotaciones libres.

### Funciones de detección y aprobación 

Es una atribución de derechos que enumera quién puede detectar y/o aprobar los valores de la prueba.  
La lista se compone de la siguiente información:  
> **Función**: es el código de la *Función empresarial*.  
> **Descripción de la función**: es la descripción de la *Función empresarial*.  
> **Tipo de actividad**: es el derecho otorgado a la *Función empresarial* durante las actividades de detección y/o aprobación de una prueba. Los valores posibles son:  
> - *Puede detectar* - la *Función empresarial* tiene los permisos de solo medición de los valores;  
> - *Puede aprobar* - la *Función empresarial* tiene los permisos de solo aprobación de la prueba;  
> - *Puede detectar y aprobar* - la *Función empresarial* tiene los permisos de medición de los valores y de aprobación de la prueba.  
>  
> Las otras *Funciones empresariales* no enumeradas no tienen derechos de medición de valores y aprobación de la prueba.  
> Si no se especifican *Funciones empresariales*, todos los operadores podrán medir valores y aprobar la prueba.  
> 
> **Notas**: anotaciones libres.

### Imágenes 

Es posible asociar imágenes útiles a la prueba a medir. Por ejemplo, podría ser útil para indicar visualmente algunas características o actividades a realizar durante la preparación y ejecución de la prueba.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).