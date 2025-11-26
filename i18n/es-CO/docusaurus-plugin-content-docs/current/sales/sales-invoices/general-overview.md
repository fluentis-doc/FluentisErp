---
title: Introducción
sidebar_position: 2
ai_generated: true
---

El módulo **Facturas de venta<!-- Fatture di vendita -->** permite la creación manual o automática de facturas<!-- fatture -->, la recuperación de precios y descuentos desde listas de precios, la inserción de detalles personalizados, la gestión de varios tipos de facturas<!-- fatture --> y numeraciones, y la automatización de procesos como contabilización, emisión de efectos y agrupación de DDT<!-- DDT -->. La impresión es personalizable, asegurando una documentación completa y rastreable.

## Configuración preliminar del módulo<!-- Configurazione preliminare del modulo -->

- **[Numeraciones](/docs/configurations/tables/fluentis-numerations)**: definición de numeraciones para las facturas<!-- fatture -->.  
- **[Parámetros de facturas de venta](/docs/configurations/parameters/sales/sales-invoices-parameters)**: configuraciones específicas para la gestión de facturas<!-- fatture -->.  
- **[Parámetros de agrupación de facturas de venta](/docs/configurations/parameters/sales/invoice-grouping)**: configuración para unir varios DDT<!-- DDT --> en una factura<!-- fattura -->.  
- **[Facturación de ventas](/docs/configurations/tables/sales/sales-turnover)**: monitoreo y gestión de los datos de ventas.  
- **[Tipos de facturas](/docs/configurations/tables/sales/invoices-type)**: creación y clasificación de las tipologías de facturas<!-- fatture -->.

Alternativamente, está disponible el procedimiento de [**Fast Start**](/docs/guide/fast-start).

## Documentos gestionados<!-- Documenti gestiti -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
### Facturas de venta<!-- Fatture di vendita -->
Permite la creación de la factura<!-- fattura --> *manual* mediante la introducción directa de datos o *automática* generándola a partir de *Pedidos de cliente<!-- Ordini client-->* o de *Documentos de transporte (DDT<!-- DDT -->)*.  
### Procedimientos<!-- Procedure -->  
**Descarga inmediata de facturas desde almacén<!-- Scarico fatture immediate da magazzino -->**: los artículos son automáticamente descargados del almacén<!-- magazzino --> en base a los envíos registrados.   
**Creación desde DDT**: generación de facturas<!-- fatture --> para uno o varios DDT<!-- DDT --> según las necesidades operativas.  
### Contabilización<!-- Contabilizzazione -->  
Las facturas<!-- fatture --> emitidas se contabilizan automáticamente, actualizando los registros financieros y manteniendo la coherencia con el balance empresarial.  
### Impresiones<!-- Stampe -->  
Layouts personalizables para cada cliente.  
Inclusión de todos los detalles comerciales y contables requeridos.  
    </div>
</div>