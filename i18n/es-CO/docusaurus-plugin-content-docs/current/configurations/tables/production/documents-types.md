---
title: Tipos de documentos (Tipi documenti)
sidebar_position: 13
---

:::important ¿Para qué sirve? (A cosa serve)
La tabla de Tipos de Documentos permite crear y conectar entre sí todos los documentos que se gestionan dentro de las áreas de [Planificación](/docs/planning/planning-intro/) y [Producción](/docs/production/production-intro/).
:::

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Tipos de documento (Ricerca Tipi documento)**

El formulario se compone de un área de filtro y una de resultados. Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados en la cuadrícula de resultados.

**Inserción de Tipos de documento (Inserimento Tipi documento)**

Para poder insertar nuevos códigos, es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **nuovo**.

Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice** alfanumérico del tipo y su **descrizione**, el **Código estándar (Codice standard)** correspondiente y el **tipo numerazione**. El código estándar define el tipo de documento que se acaba de crear, que puede ser: una Orden de producción, un pedido de cliente, un pedido de trabajo o de producción, o un pedido planificado de compra, trabajo o producción.

Es posible tener múltiples documentos con el mismo código estándar, por lo que, mediante el indicador predeterminado, se puede informar al sistema cuál es el que se considera predeterminado.  

Una vez completada la inserción, para cada uno de los documentos creados, es necesario ingresar los respectivos Tipos de documento generados.        
Por ejemplo, en el caso de un documento de tipo orden de producción, el usuario deberá ingresar los documentos generados por ella, que serán: *pedidos planificados de compra, pedidos planificados de producción y pedidos planificados de trabajo*.  
A su vez, los *pedidos planificados de compra* generarán un tipo específico de *solicitud de compra*, mientras que los *pedidos planificados de trabajo* crearán un tipo de *pedido de trabajo*, y finalmente, los *pedidos planificados de producción* tendrán un tipo de *pedido de producción* y también de *trabajo* relacionado con las fases externas contenidas en el ciclo de trabajo.

Mediante la activación del indicador **manutenzione**, es posible indicar que el documento se utilizará para intervenciones de Mantenimiento, mientras que si se desactiva, se empleará para la producción.

Para los **Tipos de documentos** con código estándar *CP* (Órdenes de producción), es posible ingresar el **tipo costificazione commessa**, que luego se propondrá por defecto en cada procesamiento de costificación de la orden.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).