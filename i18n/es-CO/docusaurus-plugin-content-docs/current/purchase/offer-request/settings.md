---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo se encuentra en el área **Compras > Solicitudes de oferta (Acquisti > Richieste di offerta)** y representa uno de los pasos intermedios del ciclo pasivo.  
Las solicitudes de oferta (RDO) sirven para gestionar el proceso de recolección y comparación de presupuestos por parte de los proveedores, permitiendo la elección de las mejores condiciones de suministro.

## **Configuración preliminar del módulo (Configurazione preliminare del modulo)**

Antes de utilizar el módulo, es necesario completar las siguientes tablas y parámetros:  
- [**Numeraciones (Numerazioni)**](/docs/configurations/tables/fluentis-numerations): inserción de las numeraciones a utilizar para las Solicitudes de Oferta.  
- [**Tipos de solicitudes de oferta (Tipi richieste di offerta)**](/docs/configurations/tables/purchase/purchase-offer-type): creación de los tipos de RDO.

## **Conexiones con otros módulos (Collegamenti con altri moduli)**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Solicitudes de Compra (Richieste di Acquisto)</Link>
        <p>Las Solicitudes de Oferta pueden ser generadas a partir de las *richiesta di acquisto*, mediante el botón **Generador RDO** situado dentro de la RDA.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Órdenes de proveedor (Ordini fornitore)</Link>
        <p>Una vez seleccionada la oferta más conveniente, es posible convertir la RDO en un pedido de compra utilizando el procedimiento de [Creación de pedido de proveedor desde oferta de proveedor (Creazione ordine fornitore da offerta fornitore)](/docs/purchase/offer-request/procedures/order-creation).</p>
    </div>
</div>