---
title: Creación de lote desde lote y Creación de lote desde lote con cambio de artículo (Creazione lotto da lotto e Creazione lotto da lotto con cambio articolo)
sidebar_position: 5
---

### Creación de lote desde lote (Creazione lotto da lotto)

:::important ¿Para qué sirve? (A cosa serve)
El procedimiento de Creación de Lote desde Lote de Fluentis es una funcionalidad importante que permite generar un nuevo lote a partir de un lote existente del mismo artículo. Esta operación es fundamental para gestionar de manera efectiva el almacén y para responder rápidamente a las necesidades de producción y logística.

El procedimiento está estructurado en tres secciones principales: un filtro para la selección de datos, una cuadrícula que muestra la información relacionada con el lote elegido y una sección dedicada a los datos del nuevo lote. Los usuarios pueden ingresar información crucial como la cantidad inicial, el número de bultos y las causas de descarga y carga para completar la registración del nuevo lote. La implementación de este procedimiento no solo simplifica el movimiento de lotes, sino que también ayuda a mantener una trazabilidad precisa dentro del sistema, garantizando los requisitos de calidad y conformidad normativa.
:::

Este formulario permite crear un nuevo lote del mismo artículo partiendo del lote antiguo.

El formulario consta de 3 secciones distintas:

- filtro: donde es posible filtrar los datos deseados y, mediante el botón **Buscar** presente en la *Ribbon bar*, se pueden visualizar los datos en la cuadrícula inferior;  
- cuadrícula de resultados: que contiene toda la información relacionada con el lote buscado;  
- datos del nuevo lote: en esta sección, debajo de la cuadrícula de resultados, se encuentran los datos relativos al nuevo lote.

A continuación se presentan los datos relativos al nuevo lote a crear:

> **Cantidad inicial del lote de destino**: indica la cantidad inicial que tendrá el lote de destino;  
> **Número de bultos del lote de destino**: indica el número de bultos que tendrá el lote de destino;  
> **Causa de descarga del lote de origen**: indica la causa de descarga con la que se descargará el lote de origen;  
> **Causa de carga del lote de destino**: indica la causa de carga con la que se cargará el lote de destino;  
> **Ubicación del lote de destino**: indica la ubicación en la que se cargará el lote de destino.

:::note **ATENCIÓN (ATTENZIONE)** 
Las causas de almacén que pueden ser utilizadas en este procedimiento son solo aquellas que tienen el indicador **Crear lote desde lote** activo en la tabla de [Causas de almacén (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates/).  
Para poder configurarlo, es necesario crear una causa de **scarico**, con los indicadores **gestione lotti** e **Integrar cantidad inicial (Integra quantità iniziale)** activos, el indicador **distinta base** desactivado y debe tener una **contraparte (contro partita)** de **carico**.
:::

Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** presente en la *Ribbon bar* para visualizar los resultados dentro de la cuadrícula de resultados.

Después de eso, es necesario seleccionar el lote deseado e ingresar los datos relacionados con el nuevo lote en la parte inferior del formulario; en este punto, basta con presionar el botón **Creación de lote** para poder crear el nuevo lote para el mismo artículo.

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

### Creación de lote desde lote con cambio de artículo (Creazione lotto da lotto con cambio articolo)

:::important ¿Para qué sirve? (A cosa serve)
La Creación de Lote desde Lote con Cambio de Artículo es un procedimiento avanzado de Fluentis que permite crear un nuevo lote para un artículo diferente, a partir de un lote de origen. Esta funcionalidad es particularmente útil en el contexto de gestión de existencias, cuando es necesario transferir cantidades de un artículo a otro, manteniendo siempre un registro detallado de los lotes.

Este procedimiento también está organizado en tres secciones: un filtro para la búsqueda de lotes existentes, una cuadrícula que muestra los resultados de la búsqueda y una sección para ingresar los datos relativos al nuevo lote. Los usuarios pueden especificar detalles como el código del artículo de destino, la cantidad inicial y las causas de descarga y carga. Gracias a este procedimiento, las empresas pueden optimizar los flujos de almacén y garantizar una mayor eficiencia operativa, asegurando que todos los movimientos sean trazables y correctamente registrados en el sistema.
:::

Este formulario permite crear un nuevo lote con un nuevo artículo partiendo de un lote diferente con un artículo diferente.

El formulario se compone de 3 secciones distintas:

- filtro: donde es posible filtrar los datos deseados y, mediante el botón **Buscar** presente en la *Ribbon bar*, se pueden visualizar los datos en la cuadrícula inferior;  
- cuadrícula de resultados: que contiene toda la información relacionada con el lote buscado;  
- datos del nuevo lote: en esta sección, debajo de la cuadrícula de resultados, se encuentran los datos relativos al nuevo lote.

A continuación se presentan los datos relativos al nuevo lote a crear:

> **Artículo del lote de destino**: permite ingresar clase, código y descripción del artículo de destino;  
> **Variante del artículo**: permite ingresar la variante del artículo de destino;  
> **Cantidad inicial del lote de destino**: indica la cantidad inicial que tendrá el lote de destino;  
> **Número de bultos del lote de destino**: indica el número de bultos que tendrá el lote de destino;  
> **Causa de descarga del lote de origen**: indica la causa de descarga con la que se descargará el lote de origen;  
> **Causa de carga del lote de destino**: indica la causa de carga con la que se cargará el lote de destino;  
> **Ubicación del lote de destino**: indica la ubicación en la que se cargará el lote de destino.

:::note **ATENCIÓN (ATTENZIONE)** 
Las causas de almacén que pueden ser utilizadas en este procedimiento son solo aquellas que tienen el indicador **Crear lote desde lote** activo en la tabla de [Causas de almacén (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates/).  
Para poder activarlo, es necesario crear una causa de **scarico**, con los indicadores **gestione lotti** e **Integrar cantidad inicial (Integra quantità iniziale)** activos, el indicador **distinta base** desactivado y debe tener una **contraparte (contro partita)** de **carico**.
:::

Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** presente en la *Ribbon bar* para visualizar los resultados dentro de la cuadrícula de resultados.

Después de eso, es necesario seleccionar el lote deseado e ingresar los datos relacionados con el nuevo lote en la parte inferior del formulario; en este punto, basta con presionar el botón **Creación de lote** para poder crear el nuevo lote para el mismo artículo.

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).