---
title: Tipos de Selección
sidebar_position: 34
---

:::important ¿Para qué sirve? 
La tabla Tipos de Selección de Fluentis permite codificar y definir las diferentes modalidades de picking que pueden ser utilizadas durante la creación de listas de prellevo. Los usuarios pueden insertar nuevos registros, modificar los existentes o eliminarlos según las necesidades operativas.

Cada tipo de selección puede asociarse a parámetros específicos, incluidos un código alfanumérico único, la numeración de los documentos y las plantillas de movimiento. También es posible establecer el tipo de factura o nota de entrega a utilizar y gestionar configuraciones como el estado inicial del picking y la prioridad de las ubicaciones de almacén. Esta flexibilidad permite a las empresas adaptar el sistema a sus necesidades, mejorando así la eficiencia en las operaciones de almacén y contribuyendo a una gestión óptima de los flujos de materiales.
:::

La tabla se encuentra en la ruta **Tablas > Logística > Tipos de selección**.

En esta tabla es posible codificar los diferentes tipos de selección a utilizar al crear una [Nueva Selección](/docs/logistics/picking/picking-management).

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda Tipos de Selección**

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados en la cuadrícula de resultados.

**Inserción Tipos de Selección**

Para poder insertar nuevas codificaciones es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.

**Tipo/Descripción**: código alfanumérico único y descripción del *Tipos de Selección*;  

**Numeración**: en este campo debe ingresarse el código de numeración apropiado. Para más detalles, consulte el artículo relacionado con [Numeraciones Fluentis](/docs/configurations/tables/fluentis-numerations);  

**Numeración de listas de picking**: indica la numeración a utilizar para las listas de notas de entrega creadas con este tipo de selección;  

**Ejecución del tipo de factura**: en este campo se debe definir el tipo de factura que debe proponerse para crear la factura a partir del picking mediante el procedimiento adecuado;  

**Ejecución del tipo de nota de entrega**: en este campo se debe definir el tipo de nota de entrega que debe proponerse para crear la nota de entrega a partir del picking mediante el procedimiento adecuado;  

**Estado inicial**: indica el *Estado* por defecto con el que se crea el picking;  

**Almacén/Descripción del almacén**: en estos campos se inserta el almacén de movimiento de la mercancía que se propondrá automáticamente en las líneas de artículo ingresadas en el picking;  

**Plantilla/Descripción de la plantilla**: en estos campos se indica la plantilla de movimiento de la mercancía contenida en los pickings pertenecientes a este tipo;  

**Sin ejecución**: al momento del cumplimiento del pedido, el estado de cumplimiento del pedido en el picking no se modifica;  

**Cantidad de pedido no consumida**: si este indicador está activo, al crear un picking a partir de otro documento, las cantidades de las líneas de artículo cumplidas no se sumarán;  

**Transferencia**: si está activo, indica que se trata de un picking de transferencia entre almacenes internos;  

**Lista de materiales para picking**: los *Tipos de selección* que tienen este indicador activo serán visibles en la *Lista de materiales para picking*;  

:::note Nota
Para los *Tipos de selección* que se utilizarán en las *Lista de materiales para picking*, por lo tanto, para aquellos que tengan el indicador *Lista de materiales para picking* activo, es necesario insertar una plantilla de almacén que también tenga una contrapartida.
:::

**Ejecute órdenes con la orden de trabajo de producción**: ya no se utiliza;  

**Unidad de carga obligatoria**: los tipos de selección que tienen este indicador desactivado no podrán ser usados para el prellevo de las notas de entrega y serán visibles en el formulario de [Confirmar recogida](/docs/logistics/wms/sales/check-row-management) del WMS. Por el contrario, los tipos de selección que tienen este indicador activo serán visibles en la [Gestión de filas](/docs/logistics/wms/sales/check-row-management) del WMS.

**Está excesivamente ejecutado**: si está activo, permite sobrecumplir la cantidad indicada en el picking; se puede utilizar tanto en la [Gestión de filas](/docs/logistics/wms/sales/check-row-management) como en [Confirmar recogida](/docs/logistics/wms/sales/check-row-management) del WMS. Si no está activo y se intenta mover una cantidad mayor que la indicada se muestra un mensaje de advertencia que impide continuar.

**Imprimir Informe**: indica el nombre de la impresión asociada y el **Número de copias** que se deben ejecutar por defecto.

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).