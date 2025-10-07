---
title: Tipos de control de artículos
sidebar_position: 9
---

La tabla se encuentra en la ruta **Tablas > Calidad > Controles de artículo > Tipos de control de artículos**.

En esta tabla es posible codificar los *Tipos de control de artículos*.  
El *Tipo de control de artículo* es parte integral, junto con el *Año* y el *Número*, del código único del *Control de artículo*.  
Algunos ejemplos de uso de *Tipos de control de artículos* los encontramos en las gestiones:  
> **Elementos de importación para verificar** - en *Información del encabezado*;  
> **Control de Artículos** - en la lista de *Información del encabezado*;  
> **Certificados de Análisis** - en la pestaña *Controles y valores detectados*;  
> **Parámetros de controles de artículo** - en la pestaña *General*;  
y en todas las gestiones donde se utiliza el *Control de artículo*.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de tipos de control de artículo**

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de tipos de control de artículo**

Para poder insertar nuevos *Tipos de control de artículos*, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.  
Para el nuevo registro se deben ingresar al menos los campos obligatorios requeridos por el programa: el **Código** y la **Descripción**.

## Tipos de control de artículos 

Es la lista donde se ingresan las principales informaciones de los *Tipos de control de artículos*.  
La lista se compone de la siguiente información:  
> **Tipo de Control de Artículos**: es el código del *Tipo de control de artículo*.  
> **Descripción del tipo de control**: es la descripción del *Tipo de control de artículo*.  
> **Almacén**: es el código del *Almacén* que se propone en *Control de artículos > Pruebas > Almacén*;  
es el *Almacén* de control de calidad utilizado para mover los artículos, una vez controlados, al respectivo *Almacén* conforme y no conforme (si se establece como contrapartida en el respectivo *Motivo*).  
> **Plantilla para descargar artículos no conformes**: es el código de la *Plantilla de Almacén* que se propone en *Control de artículos > Pruebas > Plantilla para descargar artículos no conformes*;  
es el *Motivo* de extracción utilizado para mover los artículos no conformes, una vez controlados, a su respectivo *Almacén* no conforme;  
el *Motivo* de contrapartida no es obligatorio si no se desea gestionar un *Almacén* de desechos o de reabastecimiento después del posterior reacondicionamiento o reprocesamiento del artículo controlado.  
> **Plantilla para descargar elementos conforme**: es el código de la *Plantilla de Almacén* que se propone en *Control de artículos > Pruebas > Plantilla para descargar elementos conforme*;  
es el *Motivo* de extracción utilizado para mover los artículos conformes, una vez controlados, a su respectivo *Almacén* conforme;  
es recomendable establecer el respectivo *Motivo* de contrapartida para hacer que el artículo conforme esté nuevamente disponible una vez controlado.  
> **Plantilla para pruebas destructivas**: es el código de la *Plantilla de Almacén* que se propone en *Control de artículos > Pruebas > Plantilla para descargar artículos no conformes* si la *Prueba* es de tipo *Destructiva*;  
es el *Motivo* de extracción utilizado para mover los artículos no conformes, una vez controlados;  
no se prevé el *Motivo* de contrapartida ya que la *Prueba* es de tipo *Destructiva* y es imposible realizar un posterior reacondicionamiento o reprocesamiento del artículo controlado.  
> **Tipo de certificado propuesto**: es el código del *Tipo de certificado de análisis* que se propone al crear un nuevo *Certificado de análisis* a partir de este *Tipo de control de artículo*.  
> **Descripción del almacén**: es la descripción del *Almacén*;  
> **Descripción de la plantilla para descargar artículos no conformes**: es la descripción de la *Plantilla para descargar artículos no conformes*;  
> **Descripción de la plantilla para descargar elementos conforme**: es la descripción de la *Plantilla para descargar elementos conforme*;  
> **Descripción de la plantilla para pruebas destructivas**: es la descripción de la *Plantilla para pruebas destructivas*;  
> **Descripción del tipo de certificado propuesto**: es la descripción del *Tipo de certificado propuesto*;  
> **Notas**: anotaciones libres.

### Datos adicionales 

Es posible ingresar [Datos adicionales](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para los *Tipos de control de artículos*.  
Estos *Datos adicionales* son heredados en los *Controles de artículo* de esa determinada tipología.  

Para toda la información no detallada en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).