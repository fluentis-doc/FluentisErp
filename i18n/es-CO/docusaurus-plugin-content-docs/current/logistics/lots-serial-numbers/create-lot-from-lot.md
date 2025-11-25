---
title: "Creación de lote desde lote y Creación de lote desde lote con cambio de artículo"
sidebar_position: 5
sidebar_label: "Creación de lote"
description: "Guía para la creación de lotes en Fluentis tanto desde un lote existente como con cambio de artículo."
schema: "TechArticle"
tags: ["ERP", "Fluentis", "almacén", "lotes"]
keywords: ["creación de lote", "gestión de inventario", "Fluentis", "cambio de artículo"]
ai_generated: true
---

# Creación de lote desde lote y Creación de lote desde lote con cambio de artículo<!-- Creazione lotto da lotto e Creazione lotto da lotto con cambio articolo -->

## Creación de lote desde lote<!-- Creazione lotto da lotto -->

:::important Para qué sirve<!-- A cosa serve -->
El procedimiento de Creación de Lote desde Lote<!-- Creazione Lotto da Lotto --> de Fluentis es una función importante que permite generar un nuevo lote a partir de un lote existente del mismo artículo. Esta operación es fundamental para gestionar eficazmente el almacén<!-- magazzino --> y dar respuesta rápidamente a las necesidades de producción y logística.

La implementación de este procedimiento no solo simplifica el movimiento de lotes<!-- lotti -->, sino que también ayuda a mantener una trazabilidad precisa dentro del sistema, garantizando los requisitos de calidad y conformidad normativa.
:::

Este formulario permite crear un nuevo lote de un mismo artículo, partiendo del lote antiguo. 
El formulario se compone de 3 secciones distintas:

- **Filtro**: donde es posible filtrar los datos deseados y a través del botón **Buscar<!-- Ricerca -->** presente en la *Ribbon bar* se pueden visualizar los datos en la cuadrícula inferior.
- **Cuadrícula de resultados**: que contiene toda la información relativa al lote<!-- lotto --> buscado.
- **Datos del nuevo lote**: en esta sección, debajo de la cuadrícula de resultados, se encuentran los datos relativos al nuevo lote<!-- lotto -->.

### Datos relativos al nuevo lote a crear<!-- Dati relativi al nuovo lotto da creare -->

- **Cantidad inicial del lote de destino**: indica la cantidad inicial que tendrá el lote<!-- lotto --> de destino.
- **Número de bultos del lote de destino**: indica el número de bultos que tendrá el lote<!-- lotto --> de destino.
- **Causal de descarga del lote de origen**: indica la causa para descargar el lote<!-- lotto --> de origen.
- **Causal de carga del lote de destino**: indica la causa para cargar el lote<!-- lotto --> de destino.
- **Ubicación del lote de destino**: indica la ubicación en la que se cargará el lote<!-- lotto --> de destino.

:::note Atención<!-- noteAttenzione -->
Las causales de almacén<!-- magazzino --> que pueden utilizarse en este procedimiento son solo aquellas que tienen el flag **Crear lote desde lote<!-- Crea lotto da lotto -->** activo en la tabla de [Causales de almacén<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates/). Para poder configurarlo es necesario crear una causal de **Descarga<!-- Scarico -->**, con los flags **Gestión de lotes<!-- Gestione lotti -->** e **Integra cantidad inicial<!-- Integra quantità iniziale -->** activos, el flag **Lista de materiales desactivado<!-- Distinta base -->** y debe tener una **contrapartida** de **Carga<!-- Carico -->**.
:::

### Pasos para la Creación del nuevo lote<!-- Passi per la Creazione del nuovo lotto -->

1. Configure todos los filtros deseados.
2. Haga clic en el botón **Buscar<!-- Ricerca -->** presente en la *Ribbon bar* para ver los resultados en la cuadrícula.
3. Seleccione el lote<!-- lotto --> deseado.
4. Ingrese los datos relativos al nuevo lote<!-- lotto --> en la parte inferior del formulario.
5. Pulse el botón **Creación de lote<!-- Creazione lotto -->** para crear el nuevo lote<!-- lotto --> para el mismo artículo.

## Creación de lote desde lote con cambio de artículo<!-- Creazione lotto da lotto con cambio articolo -->

:::important Para qué sirve<!-- A cosa serve -->
La Creación de Lote desde Lote con Cambio de Artículo<!-- Creazione Lotto da Lotto con Cambio Articolo --> es un procedimiento avanzado de Fluentis que permite crear un nuevo lote para un artículo diferente, partiendo de un lote de origen. Esta funcionalidad resulta especialmente útil en la gestión de inventario<!-- gestione scorte -->, cuando es necesario transferir cantidades de un artículo a otro, manteniendo siempre un registro detallado de los lotes<!-- lotti -->.  
Gracias a este procedimiento, las empresas pueden optimizar los flujos de almacén<!-- magazzino --> y garantizar una mayor eficiencia operativa, asegurando que todos los movimientos sean trazables y estén correctamente registrados en el sistema.
:::

Este formulario permite crear un nuevo lote con un nuevo artículo, partiendo de un lote diferente con un artículo diferente. 
El formulario se compone de 3 secciones distintas:

- **Filtro**: donde es posible filtrar los datos deseados y a través del botón **Buscar<!-- Ricerca -->** presente en la *Ribbon bar* se pueden visualizar los datos en la cuadrícula inferior.
- **Cuadrícula de resultados**: que contiene toda la información relativa al lote<!-- lotto --> buscado.
- **Datos del nuevo lote**: en esta sección, debajo de la cuadrícula de resultados, se encuentran los datos relativos al nuevo lote<!-- lotto -->.

### Datos relativos al nuevo lote a crear<!-- Dati relativi al nuovo lotto da creare -->

- **Artículo del lote de destino**: permite introducir clase, código y descripción del artículo de destino.
- **Variante de artículo**: permite introducir la variante del artículo de destino.
- **Cantidad inicial del lote de destino**: indica la cantidad inicial que tendrá el lote<!-- lotto --> de destino.
- **Número de bultos del lote de destino**: indica el número de bultos que tendrá el lote<!-- lotto --> de destino.
- **Causal de descarga del lote de origen**: indica la causa para descargar el lote<!-- lotto --> de origen.
- **Causal de carga del lote de destino**: indica la causa para cargar el lote<!-- lotto --> de destino.
- **Ubicación del lote de destino**: indica la ubicación en la que se cargará el lote<!-- lotto --> de destino.

:::note Atención<!-- Attenzione -->
Las causales de almacén<!-- magazzino --> que pueden utilizarse en este procedimiento son solo aquellas que tienen el flag **Crear lote desde lote<!-- Crea lotto da lotto -->** activo en la tabla de [Causales de almacén<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates/). 
Para poder activarlo es necesario crear una causal de **Descarga<!-- Scarico -->**, con los flags **Gestión de lotes<!-- Gestione lotti -->** e **Integra cantidad inicial<!-- Integra quantità iniziale -->** activos, el flag **Lista de materiales<!-- Distinta base -->** desactivado y debe tener una **contrapartida** de **Carga<!-- Carico -->**.
:::

### Pasos para la Creación del nuevo lote con cambio de artículo<!-- Passi per la Creazione del Nuovo Lotto con Cambio Articolo -->

1. Configure todos los filtros deseados.
2. Haga clic en el botón **Buscar<!-- Ricerca -->** presente en la *Ribbon bar* para ver los resultados en la cuadrícula.
3. Seleccione el lote<!-- lotto --> deseado.
4. Ingrese los datos relativos al nuevo lote<!-- lotto --> en la parte inferior del formulario.
5. Pulse el botón **Creación de lote<!-- Creazione lotto -->** para crear el nuevo lote<!-- lotto --> para el nuevo artículo.

## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

En este documento se han tratado los procedimientos de *Creación de Lote desde Lote<!-- Creazione Lotto da Lotto -->* y *Creación de Lote desde Lote con Cambio de Artículo<!-- Creazione Lotto da Lotto con Cambio Articolo -->* dentro del sistema Fluentis ERP. 

Para más información, consulte las siguientes guías:
- [Causales de almacén<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates/)
- [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common)