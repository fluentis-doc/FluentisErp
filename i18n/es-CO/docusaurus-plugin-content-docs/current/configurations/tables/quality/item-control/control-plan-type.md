---
title: tipi piano di controllo
sidebar_position: 8
---

La tabla se encuentra en la ruta **Tablas > Calidad > Controles de artículo > tipi piano di controllo**.

En esta tabla es posible codificar los *tipi piano di controllo*.  
El *Tipo de plan de control* es parte integral, junto con el *Año*, *Número* y *Revisión*, del código único del *Plan de control*.  
Algunos ejemplos de uso de los *tipi piano di controllo* los encontramos en las gestiones:  
> **piani di controllo** - en los *datos de cabecera*;  
> **Parámetros de Controles de artículo (Parametri Controlli articolo)** - en la pestaña *generale*;  
y en todas las gestiones donde se utiliza el *Plan de control*.  

La tabla contiene valores predeterminados del sistema y no es posible modificarlos ni eliminarlos. Los valores predeterminados son:  
| Código (Codice) | Descripción (Descrizione) |  
|:--|:--|  
| MInt | Interno |  
| MNNr | No normalizado |  
| MNrm | Normalizado |  
| MUff | Oficial |  

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos (si son *Eliminables*).

**Búsqueda de tipi piano di controllo**

El formulario se compone de un área de filtro y de una de resultados. Una vez establecidos todos los filtros deseados, bastará con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de tipi piano di controllo**

Para poder insertar nuevos *tipi piano di controllo*, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.  
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice** y la **descrizione**.

## tipi piano di controllo (Tipi piano di controllo)

Es la lista donde se ingresan las principales informaciones de los *tipi piano di controllo*.  
La lista se compone de la siguiente información:  
> **codice**: es el código del *Tipo de plan de control*.  
> **descrizione**: es la descripción del *Tipo de plan de control*.  
> **numerazione**: es el código de la *Numeración*.  
> **eliminabile**: indica si el *Tipo de plan de control* es eliminable.  
> **note**: anotaciones libres.

### Datos adicionales (Extra data)

Es posible insertar [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para los *tipi piano di controllo*.  
Estos *Datos adicionales* se heredan en los *Planes de control* de esa determinada tipología.  

### Pruebas planificadas (Prove pianificate)

Es posible insertar [Tipos de prueba (Tipi prova)](/docs/configurations/tables/quality/item-control/test-type) generales para los *tipi piano di controllo*.  
Estos *Tipos de prueba* se heredan en los *Planes de control* de esa determinada tipología.  

#### Atributos de Pruebas Planificadas (Attributi Prove Pianificate)

Es posible insertar [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para la *Prueba planificada (Prova pianificata)*.  
Estos *Datos adicionales* se heredan en las *Pruebas* de los documentos donde se prevé el uso de los atributos.  

#### Configuración de Pruebas Planificadas (Configurazione Prove Pianificate)

Contiene los [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) necesarios para que los operadores preparen todos los instrumentos necesarios para poder comenzar una determinada prueba. Pueden considerarse configuraciones necesarias, información operativa previa a la ejecución de la prueba.  
Estos *Datos adicionales* se heredan en las *Pruebas* de los documentos donde se prevé una configuración.  

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).