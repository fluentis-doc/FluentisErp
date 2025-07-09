---
title: Tipos de documentos 
sidebar_position: 13
---

:::important ¿Para qué sirve? 
La tabla de Tipos de Documentos permite crear y conectar entre sí todos los documentos que se gestionan dentro de las áreas de [Planificación](/docs/planning/planning-intro/) y [Producción](/docs/production/production-intro/).
:::

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Tipos de documento**

El formulario se compone de un área de filtro y una de resultados. Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados en la cuadrícula de resultados.

**Inserción de Tipos de documento**

Para poder insertar nuevos códigos, es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **Nuevo**.

Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **Código** alfanumérico del tipo y su **Descripción**, el **Código estándar** correspondiente y el **Tipo de numeración**. El código estándar define el tipo de documento que se acaba de crear, que puede ser: una órden de producción, una órden de venta, una órden de subcontratista o de producción, o una órden planificada de compra, subcontratista o producción.

Es posible tener múltiples documentos con el mismo código estándar, por lo que, mediante el indicador predeterminado, se puede informar al sistema cuál es el que se considera predeterminado.  

Una vez completada la inserción, para cada uno de los documentos creados, es necesario ingresar los respectivos Tipos de documento generados.        
Por ejemplo, en el caso de un documento de tipo orden de producción, el usuario deberá ingresar los documentos generados por ella, que serán: *Órdenes de compra planificadas, Órdenes planificadas de producción y Órdenes planificadas de subcontratistas*.  
A su vez, las *Órdenes de compra planificadas* generarán un tipo específico de *solicitud de compra*, mientras que las *Órdenes planificadas de subcontratistas* crearán un tipo de *órden de subcontratista, y finalmente, las *Órdenes planificadas de producción* tendrán un tipo de *órden de producción* y también de *subcontratista* relacionado con las fases externas contenidas en el ciclo de trabajo.

Mediante la activación del indicador **mantenimiento**, es posible indicar que el documento se utilizará para intervenciones de Mantenimiento, mientras que si se desactiva, se empleará para la producción.

Para los **Tipos de documentos** con código estándar *CP* (Órdenes de trabajo de producción), es posible ingresar el **Tipo de costo por orden de trabajo de producción**, que luego se propondrá por defecto en cada procesamiento de costificación de la orden.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).