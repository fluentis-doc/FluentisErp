---
title: richieste piani di controllo
sidebar_position: 3
---

La gestión se encuentra en la ruta **Calidad > Controles de artículo > Planes de control > Procedimientos > richieste piani di controllo**.

:::important ¿Para qué sirve? (A cosa serve)
Este procedimiento permite asignar masivamente las *Solicitudes* a *Planes de control* ya existentes o crear nuevos.  
Para poder utilizar la función de *Asociación*/ *Inserción*, es necesario:   
- en la pestaña **Solicitudes**, seleccionar las filas de *Controles de artículo*;  
- en la pestaña **Planes de control**, seleccionar los *Planes de control*;  
- hacer clic en el botón **Nuevo Plan de Control** o **Asociar Plan de Control**.   
:::

## Solicitudes (Richieste)  

En esta pestaña es posible buscar y seleccionar las *solicitudes* de asociación generadas por *Importar artículos a controlar* donde no se pudo asociar, a la línea de artículo, un *Plan de control*.   
La sesión se compone de un área de filtro y otra de resultados. Una vez configurados todos los filtros deseados, basta hacer clic en el botón **Buscar Solicitudes** para visualizar los resultados dentro de la cuadrícula de resultados.   

*Botones específicos*:   

### ![](/img/neutral/common/search.png) Buscar Solicitudes (Ricerca richieste)   
Según el filtro establecido, se visualizan los resultados dentro de la cuadrícula de resultados.   

### Abrir Controles de artículo (Apri Controlli articolo)   
Habilitado si se selecciona al menos una fila de la cuadrícula de resultados.   
Al presionar el botón, se gestionan los *Controles de artículo* seleccionados.   

### ![](/img/neutral/common/item-web.png) Abrir Planes de control (Apri Piani di controllo)   
Habilitado si se selecciona al menos una fila de la cuadrícula de resultados.   
Al presionar el botón, se gestionan los *Planes de control* seleccionados.   

### ![](/img/neutral/common/new.png) Nuevo Plan de control (Nuovo Piano di controllo)   
Habilitado si se selecciona al menos una fila de la cuadrícula de resultados de la pestaña *Solicitudes*.   
Al presionar el botón, se crea un nuevo *Plan de control* que contiene los *Artículos* de los *Controles de artículo* seleccionados.   
A las filas de **Control de artículo** seleccionadas se les asocia el *Plan de control* recién creado y las filas quedan ocultas.   
Para poder verlas, es necesario actuar en el área de filtro indicando el filtro *Ya asociados* y presionar el botón **Buscar Solicitudes**.  

### ![](/img/neutral/common/duplicate.png) Elegir Planes de control (Scegli Piani di controllo)   
Al presionar el botón, se posiciona automáticamente en la pestaña **Planes de control**.   

## Planes de control (Piani di controllo)  

En esta pestaña es posible buscar y seleccionar el *Plan de control* en el que se desea insertar los *Artículos* de los *Controles de artículo* seleccionados en la pestaña *Solicitudes*.   
La sesión se compone de un área de filtro y otra de resultados. Una vez configurados todos los filtros deseados, basta hacer clic en el botón **Buscar Planes de control** para visualizar los resultados dentro de la cuadrícula de resultados.    

*Botones específicos*:   

### ![](/img/neutral/common/search.png) Buscar Planes de control (Ricerca Piani di controllo)   
Según el filtro establecido, se visualizan los resultados dentro de la cuadrícula de resultados.   

### ![](/img/neutral/common/item-web.png) Abrir Planes de control (Apri Piani di controllo)   
Habilitado si se selecciona al menos una fila de la cuadrícula de resultados.   
Al presionar el botón, se gestionan los *Planes de control* seleccionados.   

### ![](/img/neutral/common/new.png) Nuevo Plan de control (Nuovo Piano di controllo)   
Habilitado si se selecciona al menos una fila de la cuadrícula de resultados de la pestaña *Solicitudes*.   
Al presionar el botón, se crea un nuevo *Plan de control* que contiene los *Artículos* de los *Controles de artículo* seleccionados de la pestaña *Solicitudes*.   
A las filas de **Control de artículo** seleccionadas se les asocia el *Plan de control* recién creado y las filas quedan ocultas.   

### Asociar Plan de control (Associa Piano di controllo)   
Habilitado si se selecciona al menos una fila de la cuadrícula de resultados de la pestaña *Solicitudes* y un solo *Plan de control* de la cuadrícula de resultados de la pestaña *Planes de control*.   
Al presionar el botón, se asocian al *Plan de control* seleccionado los *Artículos* de los *Controles de artículo* seleccionados de la cuadrícula de resultados de la pestaña *Solicitudes*.   

### ![](/img/neutral/common/duplicate.png) Elegir Solicitudes (Scegli Richieste)   
Al presionar el botón, se posiciona automáticamente en la pestaña **Solicitudes**.   

## Parámetros (Parametri)  

En esta pestaña es posible indicar los criterios con los cuales crear/asociar los *Artículos* a los *Planes de control*.   
Los dos criterios posibles son - *Creación/asociación a un Plan de control*:   
> **standard**: permite la creación/asociación de filas de *Controles de artículo* sin referencias a cuentas *Cliente/Proveedor* a *Planes de control* sin referencias a cuentas *Cliente/Proveedor*.   
> **cliente/fornitore**: permite la creación/asociación de filas de *Controles de artículo* con referencias a cuentas *Cliente/Proveedor* a *Planes de control* con la misma cuenta *Cliente/Proveedor*.   

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).