---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo se encuentra en el área **Compras > Solicitudes de compra (Acquisti > Richieste di acquisto)** y permite la creación, gestión y seguimiento de las solicitudes de compra, permitiendo al operador procesar internamente en la empresa la solicitud de materiales a comprar a partir de señales de faltantes de inventario, solicitudes provenientes de los distintos departamentos de la empresa o pronósticos de demanda.

## **Configuración preliminar del módulo (Configurazione preliminare del modulo)**

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:     
- [**numerazione richieste di acquisto**](/docs/configurations/tables/fluentis-numerations): ingreso de las numeraciones a utilizar para las Solicitudes de Compra.       
- [**tipi richieste di acquisto**](/docs/configurations/tables/purchase/purchase-request-type): creación de los tipos de RDA.
- [**parametri richieste di acquisto**](/docs/configurations/parameters/purchase/purchase-requests-parameters): configuraciones específicas para la gestión de las RDA. 

## **Conexiones con otros módulos (Collegamenti con altri moduli)**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution">Logística (Logistica)</Link>
        <p>Desde la impresión *sottoscorta*, ubicada en el área *Logística > Impresiones de Gestión > Bajo inventario (Logistica > Stampe Gestionali > Sottoscorta)*, es posible generar las RDA de reintegro de stock para los artículos que tienen disponibilidad menor que su punto de reorden.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders">Planificación y Producción (Pianificazione e Produzione)</Link>
        <p>La planificación general y el MRP pueden generar *órdenes de compra planificadas (ordini pianificati di acquisto)* en base a las solicitudes de materiales necesarios para la producción. Tales órdenes pueden ser transformadas en *richieste di acquisto* automáticamente o manualmente desde el procedimiento de *rilascio ordini pianificati*.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Solicitudes de Oferta (Richieste di Offerta)</Link>
        <p>La Solicitud de Compra puede generar una *richiesta di offerta*, mediante el botón **Generador RDO** ubicado dentro de la RDA. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Órdenes de proveedor (Ordini fornitore)</Link>
        <p>Una vez autorizada, la RDA puede ser transformada en un *ordine di acquisto* mediante el procedimiento de [Creación automática de pedidos (Creazione automatica Ordini)](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests).</p>
    </div>
</div>