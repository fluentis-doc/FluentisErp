---
title: Sitio de Producción (Sito Produzione)
sidebar_position: 3
---

La tabla permite gestionar la codificación de los diferentes tipos de *Sitio de producción* (Sito di produzione).

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

## Búsqueda de Sitios de Producción (Ricerca Sito Produzione)

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, solo hace falta hacer clic en el botón **Buscar (Ricerca)** para visualizar los resultados dentro de la cuadrícula de resultados.

## Insertar nuevos sitios de producción (Inserire nuovi siti di produzione)

Para insertar un nuevo sitio de producción, en el formulario de búsqueda, use el botón **Nuevo (Nuovo)**.

En el formulario de inserción, en la sección superior se define el sitio productivo mediante los campos **Código (Codice)** y **Descripción (Descrizione)**.

## Modificar los sitios de producción (Modificare i siti di produzione)

Para modificar los sitios de producción, en el formulario de búsqueda seleccione el sitio y haga doble clic en la fila o use el botón **Modificar (Modifica)**.

Al entrar en modo de modificación, es posible visualizar y cambiar los parámetros de los almacenes relacionados para ese *Sitio de producción (Sito di produzione)*.  
Estos son los mismos que están presentes en los [Parámetros de Órdenes de Producción (Parametri Ordini di Produzione)](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro), pero tienen prioridad sobre los generales, porque, si se ha ingresado el sitio productivo, se utilizan en las procedimientos en lugar de los generales.  
Para más detalles sobre las lógicas y prioridades de los almacenes y causas empleadas, se recomienda consultar la documentación relacionada con los [Parámetros de Órdenes de Producción (Parametri Ordini di Produzione)](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

El campo **Contacto (Contatto)** en el **Sitio de Producción (Sito di Produzione)** se utiliza en las [Envíos (Spedizioni)](/docs/logistics/shipping/shippings), para proponer la Dirección del lugar de carga, cuando se selecciona el sitio de producción correspondiente.

## Configuración y funcionamiento de un sitio productivo (Configurazione e funzionamento di un sito produttivo)

A continuación, se detallan los pasos necesarios para una correcta configuración y uso de los **Sitios productivos (Siti produttivi)**:

1. Creación del sitio productivo con la inserción de código y descripción.  
2. Asociar el sitio productivo creado a los almacenes individuales que formarán parte de él, ingresándolo en el campo *Sitio de producción (Sito produzione)* de la tabla [Almacenes (Magazzini)](/docs/configurations/parameters/production/production-orders-parameters/production-site). El sitio productivo también puede asociarse a la máquina utilizada ingresándolo en el campo *Sitio de producción (Sito produzione)* de la tabla [Máquinas (Macchine)](/docs/configurations/tables/production/machines/).  
3. Completar la creación del sitio productivo ingresando también los almacenes (eligiendo solo aquellos asociados a ese sitio específico) y las correspondientes causas de carga y descarga como se detalla en el artículo dedicado a los [Parámetros de Órdenes de Producción (Parametri Ordini di Produzione)](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).  
4. En la [Orden de producción (Commessa di produzione)](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders) es necesario especificar el sitio productivo en el campo correspondiente del encabezado.  
5. Las procedimientos de planificación, para la producción de ese artículo, tendrán en cuenta su disponibilidad y la de todos sus componentes, analizando solo los almacenes asociados a ese sitio productivo y desestimando las disponibilidades que se encuentran en todos los demás.

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).