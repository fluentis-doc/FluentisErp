---
title: Introducción a la gestión de Lotes y Números de Serie
sidebar_position: 0
sidebar_label: Introducción
description: Panorama sobre la gestión de Lotes y Números de Serie en Fluentis ERP, con indicaciones sobre configuración, trazabilidad y vínculos a los módulos de almacén.
schema: TechArticle
tags: [Fluentis ERP, lotes, números de serie, almacén, trazabilidad]
last_update:
  author: Fluentis Documentation Team
  date: 2025-11-07
author: Fluentis Documentation Team
keywords: [Fluentis ERP, lotes, números de serie, almacén, trazabilidad, registro de lotes]
related: [/docs/logistics/lots-serial-numbers/lots-register, /docs/logistics/lots-serial-numbers/serial-number-register]
ai_generated: true
---

# Introducción a la gestión de Lotes y Números de Serie<!-- Introduzione alla gestione Lotti e Serial Number -->

En la gestión logística de **Fluentis ERP**, los artículos pueden ser rastreados y gestionados mediante dos modalidades principales: **Lotes<!-- Lotti -->** y **Números de serie<!-- Serial number -->**.

Los **lotes** representan grupos homogéneos de artículos, tanto en entrada como en salida, y permiten una gestión eficiente de las existencias, garantizando al mismo tiempo una trazabilidad completa a lo largo del proceso productivo y distributivo.  
Cada lote está identificado por un **código único**, que permite recuperar información detallada como características, fechas de producción, vencimientos y datos de conformidad normativa.

Los **números de serie**, en cambio, identifican de manera única cada artículo individual, resultando especialmente útiles para artículos **de alto valor** o **críticos**. Este enfoque permite una gestión precisa y puntual, útil para el seguimiento y registro de cada artículo en el almacén<!-- magazzino -->.  
La integración de ambos sistemas dentro de la plataforma Fluentis mejora la trazabilidad, optimiza la gestión de existencias y aumenta la eficiencia operativa global.

## Documentos gestionados<!-- I documenti gestiti -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
  <div className="card">
  
### <Link to="/docs/logistics/lots-serial-numbers/lots-register">Registro de lotes<!-- Anagrafica lotti --></Link>

El **Registro de lotes<!-- Anagrafica lotti -->** de Fluentis es una herramienta fundamental para la gestión y trazabilidad de los lotes.  
Los usuarios pueden buscar y visualizar los detalles de cada lote con un simple doble clic, facilitando el monitoreo de las existencias.  
El sistema gestiona además **varios estados de lote<!-- vari stati lotto -->**, que influyen en la disponibilidad operativa y el movimiento de artículos.

  </div>
  <div className="card">
  
### <Link to="/docs/logistics/lots-serial-numbers/serial-number-register">Registro de números de serie<!-- Anagrafica serial number --></Link>

El **Registro de números de serie<!-- Anagrafica serial number -->** está dedicado a la gestión de los números de serie, permitiendo la **trazabilidad única** de cada artículo mediante un código identificativo específico.  
Es una herramienta esencial para la **rastreabilidad** y la **seguridad**, especialmente para artículos de alto valor o sujetos a controles de calidad.  
Incluye también referencias a los **documentos de entrada y salida<!-- documenti di carico e scarico -->** asociados, ofreciendo una visión completa del uso a lo largo del tiempo y soportando la **compliance normativa**.

  </div>
</div>

## Cómo empezar a utilizar<!-- Come iniziare a utilizzare -->

### Registro de lotes<!-- Anagrafica lotti -->

Para comenzar a utilizar el registro de lotes<!-- anagrafica lotti -->:

1. Definir un [**Tipo de código de lote**](/docs/configurations/tables/logistics/lot-codes-types).  
2. Configurar los parámetros en la pestaña [**Lotes y Números de serie**](/docs/erp-home/registers/items/create-new-item) del registro de artículos<!-- anagrafica articolo -->.  
3. Configurar correctamente las [**Causales de almacén<!-- Causali di magazzino -->**](/docs/configurations/tables/logistics/warehouse-templates) a utilizar.  
4. Crear un documento o un [**Registro de almacén<!-- Registrazione di magazzino -->**](/docs/logistics/warehouse/stock-records/record) de entrada o salida con un artículo gestionado por lotes<!-- lotti -->, para visualizar el resultado en el registro de lotes<!-- anagrafica lotto -->.

### Registro de números de serie<!-- Anagrafica serial number -->

Para configurar el registro de números de serie:

1. Definir un [**Tipo de código de número de serie**](/docs/configurations/tables/logistics/serial-numbers-code-type).  
2. Configurar los parámetros en la pestaña [**Lotes y Números de serie**](/docs/erp-home/registers/items/create-new-item) del registro de artículos<!-- anagrafica articolo -->.  
3. Definir las [**Causales de almacén<!-- Causali di magazzino -->**](/docs/configurations/tables/logistics/warehouse-templates) adecuadas.  
4. Crear un documento o un [**Registro de almacén<!-- Registrazione di magazzino -->**](/docs/logistics/warehouse/stock-records/record) de entrada o salida con un artículo gestionado por número de serie<!-- serial number -->, para visualizar el resultado en el registro correspondiente.

## Conexiones con otros módulos<!-- Collegamenti con altri moduli -->

Las funcionalidades de gestión de lotes y números de serie están estrechamente vinculadas a:

- [**Registro de artículos<!-- Anagrafica articoli -->**](/docs/erp-home/registers/items/create-new-item)  
- [**Registros de almacén<!-- Registrazioni di magazzino -->**](/docs/logistics/warehouse/stock-records/record)  
- Todos los documentos que generan movimientos de **entrada** y **salida** en almacén<!-- magazzino -->  

## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

La gestión de **lotes** y **números de serie<!-- serial number -->** en Fluentis ERP permite una trazabilidad completa y un control preciso sobre el inventario, mejorando la calidad de los procesos logísticos y productivos.  
Configurando correctamente los parámetros del artículo, causales de almacén<!-- magazzino --> y tipos de código, la empresa puede garantizar una gestión eficiente, segura y conforme a las normativas vigentes.

**Para ampliar información:**
- [Registro de lotes<!-- Anagrafica lotti -->](/docs/logistics/lots-serial-numbers/lots-register)  
- [Registro de números de serie<!-- Anagrafica serial number -->](/docs/logistics/lots-serial-numbers/serial-number-register)  
- [Causales de almacén<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates)