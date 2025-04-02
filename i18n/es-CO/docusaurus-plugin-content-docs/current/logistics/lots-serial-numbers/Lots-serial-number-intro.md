---
title: Introducción (Introduzione)
sidebar_position: 0
---

En la gestión logística de Fluentis, los artículos pueden ser rastreados y gestionados tanto a través de **lotti** como de **serial number**. Los lotes representan grupos homogéneos de artículos, tanto en entrada como en salida, permitiendo una gestión efectiva de inventarios y garantizando la trazabilidad durante el proceso productivo y distributivo. Cada lote se identifica mediante un código único, que permite obtener información detallada relacionada con las especificaciones del lote, incluidos datos esenciales para la conformidad normativa.

Por otro lado, los números de serie se utilizan para identificar de manera única cada pieza, resultando particularmente útiles para artículos de alto valor o críticos. Este enfoque permite una gestión precisa, facilitando el monitoreo y registro de cada artículo individual en el inventario. La integración de estos sistemas dentro de la plataforma Fluentis optimiza la trazabilidad y mejora la eficiencia operativa en la gestión del inventario.

## Los documentos gestionados (I documenti gestiti)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/lots-register">Registro de lotes (Anagrafica lotti)</Link>
        <p>El registro de lotes de Fluentis es una herramienta fundamental para la gestión y trazabilidad de los lotes.</p> 
        <p>Los usuarios pueden buscar y visualizar fácilmente los detalles de cada lote con un simple doble clic, facilitando el monitoreo de los inventarios.</p> 
        <p>El sistema gestiona varios estados de lote, influyendo en la disponibilidad operativa.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/serial-number-register">Registro de números de serie (Anagrafica serial number)</Link>
        <p>El registro de números de serie de Fluentis es un módulo fundamental para la gestión de números de serie, que permite a las empresas rastrear artículos individuales a través de un código identificativo único.</p> 
        <p>Esta funcionalidad es crucial para necesidades de trazabilidad y seguridad, especialmente para artículos críticos o de alto valor. El registro también incluye información sobre los documentos de carga y descarga asociados, proporcionando un análisis completo del uso a lo largo del tiempo.</p> 
        <p>Este enfoque sistemático optimiza los procesos internos y asegura el cumplimiento de las normativas, haciendo del registro una herramienta indispensable para las empresas modernas orientadas a la eficiencia operativa y a la calidad del servicio.</p>
    </div>
</div>

## Para comenzar a utilizar (Per iniziare ad utilizzare)  

la **anagrafica lotti**:
- definir un [*Tipo de código de lote*](/docs/configurations/tables/logistics/lot-codes-types)      
- definir los parámetros para el artículo individual en la pestaña [*Lotes y números de serie*](/docs/erp-home/registers/items/create-new-item) del registro de artículos        
- definir correctamente las [*Causas de almacén*](/docs/configurations/tables/logistics/warehouse-templates) a utilizar
- crear un documento o un [*Registro de almacén*](/docs/logistics/warehouse/stock-records/record) de carga o descarga con un artículo gestionado por lotes para poder visualizar el resultado en la **anagrafica lotto**

la **Registro de números de serie (Anagrafica Serial number)**:
- definir un [*Tipo de código de número de serie*](/docs/configurations/tables/logistics/serial-numbers-code-type)      
- definir los parámetros para el artículo individual en la pestaña [*Lotes y números de serie*](/docs/erp-home/registers/items/create-new-item) del registro de artículos        
- definir correctamente las [*Causas de almacén*](/docs/configurations/tables/logistics/warehouse-templates) a utilizar
- crear un documento o un [*Registro de almacén*](/docs/logistics/warehouse/stock-records/record) de carga o descarga con un artículo gestionado por número de serie para poder visualizar el resultado en la **Registro de números de serie (Anagrafica Serial number)**

## Conexiones con otros módulos (Collegamenti con altri moduli)
Estos están estrechamente relacionados con el [*Registro de artículos*](/docs/erp-home/registers/items/create-new-item), los [*Registros de almacén*](/docs/logistics/warehouse/stock-records/record) y todos los documentos que generan movimientos de carga y descarga.