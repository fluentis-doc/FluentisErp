---
title: gestione massiva dei dati
sidebar_position: 1
---

La gestión se encuentra en la ruta **Calidad > Controles de artículo > Planes de control > Procedimientos > gestione massiva dei dati**

:::important ¿Para qué sirve? (A cosa serve)
Esta gestión permite manejar muchas de las informaciones de las *Fichas técnicas* de manera masiva, sin necesidad de ingresar manualmente en cada *Plan de control*.   
:::

El formulario está dividido en:  
- un área de filtro, contextual a las sesiones de información que se desea modificar;  
- un área compuesta por diferentes pestañas, cada una de las cuales contiene las cuadrículas dedicadas a la modificación y el resultado del filtro;  
- la última pestaña contiene el *Histórico de errores* encontrados durante las actividades de *Modificación*.  

Las pestañas son:  
> **piani di controllo**;  
> **prove pianificate**;  
> **articoli associati**.

### Botones específicos

#### ![](/img/neutral/common/search.png) Buscar (Ricerca)

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados. El área de filtro es variable y es contextual a la pestaña seleccionada. El resultado de la aplicación del filtro mostrará los datos en la cuadrícula de resultados de la pestaña previamente seleccionada.

#### ![](/img/neutral/common/delete.png) Eliminar (Cancella)

Habilitado si se selecciona al menos una fila de la cuadrícula de resultados.  
Seleccionadas las filas deseadas, es necesario hacer clic en el botón **cancella** para borrarlas, previo confirmación.

#### ![](/img/neutral/common/execute.png) Modificación masiva de datos (Modifica massiva dei dati)

Habilitado si se selecciona al menos una fila de la cuadrícula de resultados.  
Seleccionadas las filas deseadas y indicadas las modificaciones a realizar en la cuadrícula de resultados, es necesario hacer clic en el botón **modifica** para aplicar los cambios.  
En caso de anomalías encontradas durante la *Modificación*, las indicaciones están disponibles en la pestaña *storico errori*.

### gestione massiva dei dati

#### Área de filtro

El área está compuesta por una parte fija donde se muestran los filtros de búsqueda relativos a la información del encabezado del *Plan de control* y por una parte variable y contextual a la pestaña seleccionada; la parte variable está contenida en un expander que lleva el mismo título de la pestaña seleccionada; esta parte variable no se visualiza para la pestaña *piani di controllo*.  
Al presionar el botón **ricerca**, se visualizan los resultados dentro de la cuadrícula de resultados de la pestaña seleccionada.

#### Área de modificación

Contenida en cada pestaña (excepto en la pestaña *storico errori*), es la "cuadrícula" superior compuesta por una sola fila.  
En esta cuadrícula, que tiene las mismas columnas que la cuadrícula de resultados (la inferior), es posible ingresar toda la información que se desea que aparezca en las filas de la cuadrícula de resultados al presionar el botón **modifica**.  
Una vez finalizada la sustitución de valores, los valores presentes en la cuadrícula superior se eliminarán.

#### Área de resultados

Contenida en cada pestaña, es la "cuadrícula" inferior que contiene el resultado de la *ricerca* aplicada al área de filtro.  
En esta cuadrícula, que tiene las mismas columnas que la cuadrícula de modificación (la superior), es posible modificar manualmente toda la información sin necesidad de ingresar en cada gestión del *Plan de control*. Las columnas varían según la pestaña seleccionada.  
Las columnas donde no es posible modificar la información están deshabilitadas y resaltadas con un color diferente.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).