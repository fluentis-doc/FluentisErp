---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo se encuentra en el área **Compras > Solicitudes de compra<!-- Acquisti > Richieste di acquisto -->** y permite la creación, gestión y monitoreo de las solicitudes de compra<!-- richieste di acquisto -->, permitiendo al usuario procesar internamente en la empresa la solicitud de material a adquirir, partiendo de reportes de carencias de inventario<!-- inventario -->, solicitudes provenientes de los distintos departamentos de la empresa o previsiones de demanda.

## **Configuración preliminar del módulo<!-- Configurazione preliminare del modulo -->**<!-- **Configurazione preliminare del modulo** -->

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:     
- [**Numeración solicitudes de compra<!-- Numerazione richieste di acquisto -->**](/docs/configurations/tables/fluentis-numerations): ingreso de las numeraciones a utilizar para las Solicitudes de compra<!-- Richieste di Acquisto -->.
- [**Tipos de solicitudes de compra<!-- Tipi richieste di acquisto -->**](/docs/configurations/tables/purchase/purchase-request-type): creación de las tipologías de RDA<!-- RDA -->.
- [**Parámetros de solicitudes de compra<!-- Parametri richieste di acquisto -->**](/docs/configurations/parameters/purchase/purchase-requests-parameters): configuraciones específicas para la gestión de las RDA<!-- RDA -->.

## **Vínculos con otros módulos<!-- Collegamenti con altri moduli -->**<!-- **Collegamenti con altri moduli** -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution">Logística<!-- Logistica --></Link>
        <p>
Desde el reporte *Stock bajo mínimo<!-- Sottoscorta -->*, ubicado en el área *Logística<!-- Logistica --> > Reportes de gestión<!-- Stampe Gestionali --> > Stock bajo mínimo<!-- Sottoscorta -->*, es posible generar las RDA<!-- RDA --> de reposición de stock para los artículos que tienen una disponibilidad<!-- disponibilità --> menor a su punto de reposición.
        </p>
    </div>
    <div className="card">
###     <Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders">Planificación y Producción<!-- Pianificazione e Produzione --></Link>
        <p>
La planificación general y el MRP pueden generar *órdenes planificadas de compra<!-- ordini pianificati di acquisto -->* en base a las solicitudes de material necesario para la producción. Estas órdenes pueden convertirse en *Solicitudes de compra<!-- Richieste di Acquisto -->* de manera automática o manualmente desde la rutina de *Liberación de órdenes planificadas<!-- Rilascio ordini pianificati -->*.
        </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Solicitudes de Oferta<!-- Richieste di Offerta --></Link>
        <p>
La Solicitud de compra<!-- Richiesta di Acquisto --> puede generar una *Solicitud de Oferta<!-- Richiesta di Offerta -->* mediante el botón **Generador RDO<!-- Generatore RDO -->** ubicado dentro de la RDA<!-- RDA -->.
        </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Órdenes de proveedor<!-- Ordini fornitore --></Link>
        <p>
Una vez autorizada, la RDA<!-- RDA --> puede transformarse en una *Orden de compra<!-- Ordine di acquisto -->* mediante la rutina de [Creación automática de Órdenes<!-- Creazione automatica Ordini -->](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests).
        </p>
    </div>
</div>