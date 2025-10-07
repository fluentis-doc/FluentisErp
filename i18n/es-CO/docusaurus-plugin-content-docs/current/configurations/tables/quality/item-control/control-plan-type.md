---
title: Tipos de plan de control
sidebar_position: 8
---

La tabla se encuentra en la ruta **Tablas > Calidad > Controles de artículo > Tipos de plan de control**.

En esta tabla es posible codificar los *Tipos de plan de control*.  
El *Tipo de plan de control* es parte integral, junto con el *Año*, *Número* y *Revisión*, del código único del *Plan de control*.  
Algunos ejemplos de uso de los *Tipos de plan de control* los encontramos en las gestiones:  
> **Planes de control** - en *Información del encabezado*;  
> **Parámetros de Controles de artículo** - en la pestaña *General*;  
y en todas las gestiones donde se utiliza el *Plan de control*.  

La tabla contiene valores predeterminados del sistema y no es posible modificarlos ni eliminarlos. Los valores predeterminados son:  
| Código | Descripción |  
|:--|:--|  
| MInt | Interno |  
| MNNr | No normalizado |  
| MNrm | Normalizado |  
| MUff | Oficial |  

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos (si son *Eliminables*).

**Búsqueda de Tipos de plan de control**

El formulario se compone de un área de filtro y de una de resultados. Una vez establecidos todos los filtros deseados, bastará con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Tipos de plan de control**

Para poder insertar nuevos *Tipos de plan de control*, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.  
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **Código** y la **Descripción**.

## Tipos de plan de control 

Es la lista donde se ingresan las principales informaciones de los *Tipos de plan de control*.  
La lista se compone de la siguiente información:  
> **Código**: es el código del *Tipo de plan de control*.  
> **Descripción**: es la descripción del *Tipo de plan de control*.  
> **Numeración**: es el código de la *Numeración*.  
> **Eliminable**: indica si el *Tipo de plan de control* es eliminable.  
> **Notas**: anotaciones libres.

### Datos adicionales 

Es posible insertar [Datos adicionales](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para los *Tipos de plan de control*.  
Estos *Datos adicionales* se heredan en los *Planes de control* de esa determinada tipología.  

### Pruebas planificadas 

Es posible insertar [Tipos de prueba](/docs/configurations/tables/quality/item-control/test-type) generales para los *Tipos de plan de control*.  
Estos *Tipos de prueba* se heredan en los *Planes de control* de esa determinada tipología.  

#### Atributos de Pruebas Planificadas 

Es posible insertar [Datos adicionales](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para la *Prueba planificada*.  
Estos *Datos adicionales* se heredan en las *Pruebas* de los documentos donde se prevé el uso de los atributos.  

#### Configuración de Pruebas Planificadas

Contiene los [Datos adicionales](/docs/configurations/utility/extra-data/extradata/search-extradata) necesarios para que los operadores preparen todos los instrumentos necesarios para poder comenzar una determinada prueba. Pueden considerarse configuraciones necesarias, información operativa previa a la ejecución de la prueba.  
Estos *Datos adicionales* se heredan en las *Pruebas* de los documentos donde se prevé una configuración.  

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).