---
title: Mapa de ubicaciones por artículo
sidebar_position: 3
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La funcionalidad "Mapa de ubicaciones por artículo" de Fluentis permite una gestión óptima de las existencias<!-- scorte -->, proporcionando una visualización clara y detallada de las ubicaciones<!-- ubicazioni --> de cada artículo dentro del almacén<!-- magazzino -->. Gracias a este mapa, los usuarios pueden asociar fácilmente artículos específicos a ubicaciones<!-- ubicazioni --> designadas, facilitando así las operaciones de almacenamiento y extracción<!-- stoccaggio e prelievo -->.

A través de una interfaz intuitiva, es posible ingresar nuevos artículos y definir variables clave como el almacén<!-- magazzino --> de referencia, la prioridad de almacenamiento, y las cantidades mínimas y máximas. El mapa también permite identificar cuál ubicación<!-- ubicazione --> es la predeterminada para cada artículo, optimizando el proceso de inventario<!-- inventario --> y mejorando la eficiencia operativa.

Esta funcionalidad es especialmente útil para las empresas que desean mantener el control sobre la disposición física de sus productos, asegurando tanto una organización más eficaz del almacén<!-- magazzino --> como una perfecta trazabilidad de los artículos.
:::

Este formulario permite asociar una ubicación predeterminada<!-- ubicazione di default --> a un artículo.

Se compone de un formulario de filtro donde es posible visualizar la lista de todos los artículos a los que se ha asociado una ubicación predeterminada<!-- ubicazione di default -->.
Al presionar el botón *Nuevo<!-- Nuovo -->*, el operador puede ingresar un artículo en el área de encabezado y luego, dentro de la tabla *Mapa de ubicaciones de artículos<!-- Mappa ubicazioni articoli -->*, indicar el almacén<!-- magazzino --> y la ubicación predeterminada<!-- ubicazione di default -->.

Para cada artículo es posible indicar los siguientes parámetros:
- **Almacén<!-- Magazzino -->**: indica el almacén<!-- magazzino --> de la ubicación predeterminada<!-- ubicazione di default -->;     
- **Descripción del almacén<!-- Descrizione magazzino -->**: indica la descripción del almacén<!-- magazzino --> de la ubicación predeterminada<!-- ubicazione di default -->;    
- **Prioridad<!-- Priorità -->**: indica la prioridad de la ubicación predeterminada<!-- ubicazione di default -->; 

:::note **ATENCIÓN<!-- ATTENZIONE -->**
Los procesos sólo tomarán en cuenta la ubicación<!-- ubicazione --> con la prioridad más baja.
La ubicación<!-- ubicazione --> indicada tendrá prioridad incluso sobre la ubicación<!-- ubicazione --> especificada en las [Causales de almacén<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates).
:::

- **Stock mínimo<!-- Scorta minima -->**: indica el valor de stock mínimo<!-- scorta minima --> de la ubicación predeterminada<!-- ubicazione di default -->;    
- **Stock máximo<!-- Scorta massima -->**: indica el valor de stock máximo<!-- scorta massima --> de la ubicación predeterminada<!-- ubicazione di default -->;    
- **Ubicación<!-- Ubicazione -->**: indica el código de la ubicación predeterminada<!-- ubicazione di default -->.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidad, botones y campos comunes](/docs/guide/common).