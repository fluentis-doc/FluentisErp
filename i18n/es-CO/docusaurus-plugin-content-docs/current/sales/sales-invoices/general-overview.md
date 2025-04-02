---
title: Introducción (Introduzione)
sidebar_position: 2
---

El módulo **fatture di vendita** permite la creación manual o automática de facturas, la recuperación de precios y descuentos de las listas, la inserción de detalles personalizados, la gestión de varios tipos de facturas y numeraciones, y la automatización de procesos como la contabilización, emisión de efectos y agrupamiento de DDT. La impresión es personalizable, asegurando una documentación completa y trazable.

## Configuración preliminar del módulo (Configurazione preliminare del modulo)

- **[Numeraciones](/docs/configurations/tables/fluentis-numerations)**: definición de las numeraciones para las facturas.  
- **[Parámetros de facturas de venta](/docs/configurations/parameters/sales/sales-invoices-parameters)**: configuraciones específicas para la gestión de facturas.  
- **[Parámetros de agrupamiento de facturas de venta](/docs/configurations/parameters/sales/invoice-grouping)**: configuración para unir varios DDT en una factura.  
- **[Facturado de ventas](/docs/configurations/tables/sales/sales-turnover)**: monitoreo y gestión de datos de ventas.  
- **[Tipos de facturas](/docs/configurations/tables/sales/invoices-type)**: creación y clasificación de tipos de facturas.

Alternativamente, está disponible el procedimiento de [**Fast Start**](/docs/guide/fast-start).

## Documentos gestionados (Documenti gestiti)

import Link from '@docusaurus/Link';

<div className="cardContainer">  
    <div className="card">  
### Facturas de venta (Fatture di vendita)  
Permite la creación de la factura *manuale* con la inserción directa de datos o *automática (automatica)* generándola a partir de *Pedidos de clientes (Ordini client)* o de *ddt*.  
### Procedimientos (Procedure)  
**scarico fatture immediate da magazzino**: los artículos se restan automáticamente del almacén según los envíos registrados.  
**Creación desde DDT (Creazione da DDT)**: generación de facturas para uno o más DDT según las necesidades operativas.  
### Contabilización (Contabilizzazione)  
Las facturas emitidas se contabilizan automáticamente, actualizando los registros financieros y manteniendo la coherencia con el balance empresarial.  
### Impresiones (Stampe)  
Diseños personalizables para cada cliente.  
Inclusión de todos los detalles comerciales y contables requeridos.  
    </div>  
</div>