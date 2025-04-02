---
title: tipi picking
sidebar_position: 34
---

:::important ¿Para qué sirve? (A cosa serve)
La tabla Tipo Picking de Fluentis permite codificar y definir las diferentes modalidades de picking que pueden ser utilizadas durante la creación de listas de prellevo. Los usuarios pueden insertar nuevos registros, modificar los existentes o eliminarlos según las necesidades operativas.

Cada tipo de picking puede asociarse a parámetros específicos, incluidos un código alfanumérico único, la numeración de los documentos y las causas de movimiento. También es posible establecer el tipo de factura o DDT a utilizar y gestionar configuraciones como el estado inicial del picking y la prioridad de las ubicaciones de almacén. Esta flexibilidad permite a las empresas adaptar el sistema a sus necesidades, mejorando así la eficiencia en las operaciones de almacén y contribuyendo a una gestión óptima de los flujos de materiales.
:::

La tabla se encuentra en la ruta **Tablas > Logística > tipi picking**.

En esta tabla es posible codificar los diferentes tipos de picking a utilizar al crear un [Nuevo Picking](/docs/logistics/picking/picking-management).

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda Tipo picking (Ricerca Tipo picking)**

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados en la cuadrícula de resultados.

**Inserción Tipo picking (Inserimento Tipo picking)**

Para poder insertar nuevas codificaciones es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.

**Tipo/Descripción (Tipo/Descrizione)**: código alfanumérico único y descripción del *Tipo picking*;  

**numerazione**: en este campo debe ingresarse el código de numeración apropiado. Para más detalles, consulte el artículo relacionado con [Numeraciones Fluentis](/docs/configurations/tables/fluentis-numerations);  

**numerazione lista di prelievo**: indica la numeración a utilizar para las listas UDC creadas con este tipo de picking;  

**evasione tipo fattura**: en este campo se debe definir el tipo de factura que debe proponerse para crear la factura a partir del picking mediante el procedimiento adecuado;  

**evasione tipo ddt**: en este campo se debe definir el tipo de DDT que debe proponerse para crear la nota de entrega a partir del picking mediante el procedimiento adecuado;  

**stato iniziale**: indica el *Estado* por defecto con el que se crea el picking;  

**Almacén/Descripción del almacén (Magazzino/Descrizione magazzino)**: en estos campos se inserta el almacén de movimiento de la mercancía que se propondrá automáticamente en las líneas de artículo ingresadas en el picking;  

**Causa/Descripción de la causa (Causale/Descrizione causale)**: en estos campos se indica la causa de movimiento de la mercancía contenida en los pickings pertenecientes a este tipo;  

**senza evasione**: al momento del cumplimiento del pedido, el estado de cumplimiento del pedido en el picking no se modifica;  

**evasione quantità articolo non sommata**: si este indicador está activo, al crear un picking a partir de otro documento, las cantidades de las líneas de artículo cumplidas no se sumarán;  

**trasferimento**: si está activo, indica que se trata de un picking de transferencia entre almacenes internos;  

**lista prelievo materiali**: los *tipi picking* que tienen este indicador activo serán visibles en la *Lista de prellevo de materiales*;  

:::note Nota
Para los *tipi picking* que se utilizarán en las *Listas de prellevo de materiales*, por lo tanto, para aquellos que tengan el indicador *Lista de prellevo de materiales* activo, es necesario insertar una causa de almacén que también tenga una contrapartida.
:::

**Cumple pedidos con orden de producción (Evade ordini con commessa di produzione)**: ya no se utiliza;  

**Unidad de carga obligatoria (Unità di carico obbligatoria)**: los tipos de picking que tienen este indicador desactivado no podrán ser usados para el prellevo de las UDC y serán visibles en el formulario de [Confirmación de picking](/docs/logistics/wms/sales/check-row-menagement#conferma-picking) del WMS. Por el contrario, los tipos de picking que tienen este indicador activo serán visibles en la [Gestión de check (Gestione spunta)](/docs/logistics/wms/sales/check-row-menagement#gestione-spunta) del WMS.

**Sujeto a sobrecumplimiento (Sovraevadibile)**: si está activo, permite sobrecumplir la cantidad indicada en el picking; se puede utilizar tanto en la [Gestión de check (Gestione spunta)](/docs/logistics/wms/sales/check-row-menagement) como en la [Confirmación de picking (Conferma picking)](/docs/logistics/wms/sales/check-row-menagement) del WMS. Si no está activo y se intenta mover una cantidad mayor que la indicada se muestra un mensaje de advertencia que impide continuar.

**stampa**: indica el nombre de la impresión asociada y el **numero di copie** que se deben ejecutar por defecto.

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).