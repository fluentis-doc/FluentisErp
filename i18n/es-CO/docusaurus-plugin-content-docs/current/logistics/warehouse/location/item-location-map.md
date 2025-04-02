---
title: mappa ubicazioni per articolo
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
La funcionalidad "mappa ubicazioni per articolo" de Fluentis permite una gestión óptima de los inventarios, proporcionando una visualización clara y detallada de las ubicaciones de cada artículo dentro del almacén. Gracias a este mapa, los usuarios pueden asociar fácilmente artículos específicos a ubicaciones designadas, facilitando así las operaciones de almacenamiento y extracción.

A través de una interfaz intuitiva, es posible ingresar nuevos artículos y definir variables clave como el almacén de referencia, la prioridad de almacenamiento, y las cantidades mínimas y máximas. El mapa también permite identificar cuál es la ubicación predeterminada para cada artículo, optimizando el proceso de inventario y mejorando la eficiencia operativa.

Esta funcionalidad es particularmente útil para las empresas que desean mantener el control sobre la disposición física de sus productos, asegurando tanto una organización más efectiva del almacén como una perfecta trazabilidad de los artículos.
:::

Este formulario permite asociar una ubicación predeterminada a un artículo.

Consta de un formulario de filtro donde es posible visualizar la lista de todos los artículos a los que se les ha asociado una ubicación predeterminada.  
Al presionar el botón *nuovo*, el operador puede ingresar un artículo en el área del encabezado y luego en la tabla *mappa ubicazioni articoli* indicar el almacén y la ubicación predeterminada.

Para cada artículo, es posible indicar los siguientes parámetros:
- **magazzino**: indica el almacén de la ubicación predeterminada;  
- **descrizione magazzino**: indica la descripción del almacén de la ubicación predeterminada;  
- **priorità**: indica la prioridad de la ubicación predeterminada;  

:::note **ATENCIÓN (ATTENZIONE)** 
Los procedimientos solo tomarán en cuenta la ubicación con la prioridad más baja.  
La ubicación indicada tendrá prioridad también sobre la ubicación indicada en las [Causas de almacén (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates).
:::

- **scorta minima**: indica el valor de stock mínimo de la ubicación predeterminada;  
- **scorta massima**: indica el valor de stock máximo de la ubicación predeterminada;  
- **ubicazione**: indica el código de la ubicación predeterminada.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).