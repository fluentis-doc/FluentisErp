---
title: vendite
sidebar_position: 1
---

El área de **vendite** de **Fluentis ERP** está diseñada para garantizar una gestión completa y optimizada de las actividades comerciales, ofreciendo una estructura modular e interconectada que apoya todo el proceso de venta, desde la creación de ofertas hasta el análisis de márgenes.

## Configuración preliminar del área (Configurazione preliminare dell'area)

Antes de utilizar las funcionalidades disponibles, es necesario gestionar una serie de datos básicos: estos se dividen en dos grupos macro, [**tabelle**](/docs/configurations/tables/sales/agent-category) y [**parametri**](/docs/configurations/parameters/sales/general-overview).

Alternativamente, está disponible el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start) para el cual solo será necesario gestionar un conjunto mínimo de datos como los [**anagrafiche**](/docs/erp-home/registers/registers-intro).

## Módulos de Ventas (Moduli Vendite)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/offers/settings">Ofertas (Offerte)</Link>
        <p>Creación, monitoreo y actualización de las propuestas comerciales, integrándolas directamente con los procesos empresariales.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/sales-orders/settings">Pedidos (Ordini)</Link>
        <p>Gestión y organización del proceso de compra de bienes y servicios por parte de los clientes.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-delivery-notes/general-overview">DDT</Link>
        <p>Seguimiento y documentación de la movilización de mercancías en salida.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/sales-invoices/general-overview">Facturas (Fatture)</Link>
        <p>Certificación de la transacción de venta, especificando los bienes o servicios proporcionados, los costos, el IVA y las condiciones de pago.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/pos/general-overview">POS</Link>
        <p>Gestión de las ventas directamente en el punto de caja, con herramientas para la creación y gestión de facturas, emisión de recibos y actualización automática de los inventarios.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/agents/general-overview">Liquidación de agentes (Liquidazione agenti)</Link>
        <p>Gestión de las ventas directamente en el punto de caja, con herramientas avanzadas para la creación y gestión de facturas, emisión de recibos y actualización automática de los inventarios.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-price-list/general-overview">Listas de precios de venta (Listini di vendita)</Link>
        <p>Lista de precios de productos o servicios ofrecidos para facilitar el proceso de venta e incluir posibles descuentos aplicables.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/price-control/definition">Gestión de precios (Gestione prezzi)</Link>
        <p>Gestión de descuentos adicionales basados en la categoría comercial de pertenencia del cliente u otras políticas de definición de descuentos.</p>
    </div>
</div>

## Integraciones con otras áreas (Integrazioni con altre aree)

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/pos/general-overview">Logística</Link>
        <p>Actualización automática de las **giacenze** en tiempo real durante el registro de documentos de venta.</p>
        <p>Posibilidad de generar **Picking** y **Planes de Carga** directamente desde los pedidos de clientes, con una transformación adicional en **DDT** y **fatture** para una gestión optimizada de los envíos.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/agents/general-overview">Planificación y Producción (Pianificazione e Produzione)</Link>
        <p>Soporte al **Planificación de la Demanda (Demand Planning)** mediante la integración con los procesos de venta, particularmente útil para modelos productivos como: **Hacer por Pedido (Make to Order - MTO)**, **Ingeniería por Pedido (Engineering to Order - ETO)**, **Ensamblar por Pedido (Assembly to Order - ATO)**.</p> 
        <p>Esta conexión garantiza un alineamiento entre los pedidos de venta y las actividades productivas, mejorando la planificación de recursos y la eficiencia operativa.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-price-list/general-overview">Contabilidad</Link>
        <p>La integración garantiza una gestión fluida y precisa de las transacciones administrativas derivadas de los documentos de venta, reduciendo errores y automatizando el registro contable.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/price-control/definition">Control de Gestión (Controllo di Gestione)</Link>
        <p>Proporciona herramientas de análisis avanzado para monitorear los **márgenes de beneficio (margini di profitto)** relacionados con cada proceso de venta.</p>
        <p>Permite un análisis detallado del rendimiento comercial, favoreciendo la optimización de las estrategias de venta y la mejora de la rentabilidad empresarial.</p>
    </div>
</div>

## Flujo operativo típico del área (Flusso operativo tipico dell'area)

1. **Adquisición de oportunidades (Acquisizione opportunità)**: las ofertas se gestionan a través del módulo CRM, recopilando información sobre clientes existentes y potenciales.  
2. **Conversión de ofertas en pedidos (Conversione offerte in ordini)**: las ofertas aceptadas se transforman en pedidos, centralizando la información para continuar con el proceso.  
3. **Creación automática de documentos (Creazione automatica dei documenti)**: a partir de los pedidos, se generan automáticamente los DDT y las Facturas de venta.  
4. **pos**: las operaciones en el punto de caja se gestionan a través del módulo POS, que registra las ventas y actualiza la contabilidad en tiempo real.  
5. **gestione prezzi**: actualización e historización de precios y descuentos asociados a los artículos codificados.  
6. **Liquidación de comisiones (Liquidazione provvigioni)**: las comisiones para los agentes se calculan y liquidan automáticamente, simplificando la gestión de las comisiones.