---
title: Tipos de Hojas de Datos
sidebar_position: 4
---

La tabla se encuentra en el camino **Tablas > Calidad > Controles de artículo > Tipos de Hojas de Datos**.

En esta tabla es posible codificar los *Tipos de Hojas de Datos*.  
El *Tipo de hoja de datos* es parte integral, junto con el *Año*, *Número* y *Revisión*, del código único de la *hoja de datos*.  
Algunos ejemplos de uso de *Tipos de Hojas de Datos* se encuentran en las gestiones:  
> **Hojas de Datos** - en *Información del encabezado*;  
> **Parámetros de controles de artículo** - en la pestaña *General*;  
y en todas las gestiones donde se utiliza la *hoja de datos*.

La tabla permite insertar nuevos registros o buscar aquellos ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Tipos de Hojas de Datos**

El formulario se compone de un área de filtro y otra de resultado. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Tipos de Hojas de Datos**

Para poder insertar nuevos *Tipos de Hojas de Datos* es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.  
Para el nuevo registro se deben ingresar al menos los campos obligatorios requeridos por el programa: el **Código** y la **Descripción**.

## Tipos de Hojas de Datos

Es la lista donde se inserta la información principal de los *Tipos de Hojas de Datos*.  
La lista se compone de la siguiente información:  
> **Código**: es el código del *Tipo de hoja de datos*.  
> **Descripción**: es la descripción del *Tipo de hoja de datos*.  
> **Notas**: anotaciones libres.

### Atributos Tipo de hoja de datos

Es posible insertar datos adicionales generales para el *Tipo de hoja de datos*.  
Estos *Datos adicionales* se heredan en las *Fichas técnicas* de esa determinada tipología.  

### Método de codificación

Es la lista donde se inserta la información para la codificación del *Código* y de la *Descripción* de la *hoja de datos*.  
La lista se compone de la siguiente información:  
> **Ordenamiento**: es la secuencia de implementación en la creación del *Código* y de la *Descripción* de la *hoja de datos*.  
> **Tipo**: es una lista de valores predefinidos por el sistema que identifican el objeto con el cual crear la codificación de la *hoja de datos*; los valores predefinidos son:  
>> *ExtraData* - utilizado solo para la creación del código y de la descripción, es un dato adicional identificable por la columna *Extradata*;  
>> *Año* - utilizado solo para la creación del código, es el *Año* de creación de la *hoja de datos*, ajustable a 2, 3 o 4 dígitos configurables en el campo *Longitud*;  
>> *Mes* - utilizado solo para la creación del código, es el *Mes* de creación de la *hoja de datos*, valor fijo de 2 dígitos;  
>> *Día* - utilizado solo para la creación del código, es el *Día* de creación de la *hoja de datos*, valor fijo de 2 dígitos;  
>> *Progresivo* - utilizado solo para la creación del código, es el *Progresivo* de creación de la *hoja de datos*, valor inicial, carácter de relleno y dimensiones ajustables en el campo *Longitud*;  
>> *Código Tipo* - utilizado solo para la creación del código, es el *Código* del *Tipo de hoja de datos*;  
>> *Descripción Tipo* - utilizado solo para la creación de la descripción, es la *Descripción* del *Tipo de hoja de datos*;  
>> *Valor fijo Código* - utilizado solo para la creación del código, son caracteres fijos configurables en la columna *Valor fijo*;  
>> *Valor fijo Descripción* - utilizado solo para la creación de la descripción, son caracteres fijos configurables en la columna *Valor fijo*.  
>
> **Extradata**: habilitado si en *Tipo* se ha seleccionado el valor *ExtraData*, es el *ExtraData* a utilizar para componer el *Código* y/o *Descripción* de la *hoja de datos*.  
> **Propiedad Código**: habilitado si en *Tipo* se ha seleccionado el valor *ExtraData*, es la propiedad *Código* del *ExtraData* a utilizar para componer el *Código* de la *hoja de datos*.  
> **Propiedad Descripción**: habilitado si en *Tipo* se ha seleccionado el valor *ExtraData*, es la propiedad *Descripción* del *ExtraData* a utilizar para componer la *Descripción* de la *hoja de datos*.  
> **Longitud**: habilitado si en *Tipo* es: *Año* o *Progresivo*, es la longitud que se dará al *Tipo*.  
> **Espacio**: indica si se insertará un espacio en el *Código* entre este componente del *Código* y el siguiente.  
> **Separador**: es el carácter utilizado como separador entre este componente del *Código* y el siguiente.  
> **Carácter de relleno**: es el carácter utilizado para completar la longitud del *Progresivo*.  
> **Valor inicial progresivo**: es el valor inicial del *Progresivo* al insertar la primera *hoja de datos*.  
> **Valor fijo**: habilitado si en *Tipo* es: *Valor fijo Código* o *Valor fijo Descripción*.  

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).