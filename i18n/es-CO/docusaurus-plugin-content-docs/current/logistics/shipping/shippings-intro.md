---
title: Introducción (Introduzione)
sidebar_position: 1
---

Esta nueva herramienta ha sido desarrollada para optimizar y simplificar el proceso de envío, permitiendo un control más eficaz e integrado de todas las actividades logísticas.  
La **gestión de envíos (gestione spedizioni)** de Fluentis incluye la función de **agrupamiento (groupage)**, que permite consolidar diferentes envíos de mercancías provenientes de varios remitentes pero dirigidos hacia la misma área geográfica en una única carga o contenedor.  
Esto permite utilizar de manera más eficiente el espacio disponible en los medios de transporte, como camiones, contenedores marítimos o aviones, y ofrecer un servicio más económico en comparación con el envío de mercancías individuales.  
Además, se ha implementado una **avanzada herramienta de planificación (avanzato strumento di pianificazione)** que permite visualizar los envíos por medio, conductor, transportista y cliente. Gracias a una sencilla funcionalidad de arrastrar y soltar, los operadores pueden organizar fácilmente los envíos, anticipándolos o posponiéndolos, y modificar el medio o el conductor encargado, garantizando una gestión más flexible y reactiva.

## Módulos del área (Moduli dell'area)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/shipping/shippings-intro">Envíos (Spedizioni)</Link>
        <p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Envíos (Spedizioni)</Link></p>
        <p>Mediante la gestión de agrupamiento, es posible agrupar los envíos de diferentes clientes o proveedores en una única unidad de transporte.</p>
        <p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Calendario (Calendario)</Link></p>
        <p>Permite planificar y gestionar de manera eficiente las actividades operativas y logísticas, optimizando los recursos y mejorando la coordinación de los envíos.</p>
    </div>
</div>

## Para comenzar a utilizar (Per iniziare ad utilizzare)

las **spedizioni**:  
- crear artículos en la [*anagrafica articoli*](/docs/erp-home/registers/items/create-new-item)  
- definir un [*Tipos de envío (Tipi di spedizione)*](/docs/configurations/tables/logistics/shipping-type)  
- definir un [*Estados de envío (Stati di spedizione)*](/docs/configurations/tables/logistics/shipping-states)  
- definir los [*automezzi*](/docs/logistics/motorvehicles/motorvehicle)  
- definir los [*Conductores de vehículos (Autisti automezzo)*](/docs/logistics/motorvehicles/motorvehicle-drivers)  
- definir los [*Motivos de parada de vehículos (Motivi di fermo autoveicolo)*](/docs/configurations/tables/logistics/motorvehicle-off-time-reasons)  
- definir los [*Motivos de ausencia del conductor (Motivi di assenza del conducente)*](/docs/configurations/tables/logistics/driver-off-time-reasons)  
- definir las [*Licencias de conducir de vehículos (Licenze di guida automezzo)*](/docs/configurations/tables/logistics/motorvehicle-driving-licences)  
- definir el tipo [*Propiedad de vehículos (Proprietà automezzi)*](/docs/configurations/tables/logistics/motorvehicle-ownership)  
- definir las [*Marcas de vehículos (Marchi automezzi)*](/docs/configurations/tables/logistics/motorvehicle-brands)  
- definir el [*Tipo de combustible de vehículos (Tipo carburante automezzo)*](/docs/configurations/tables/logistics/motorvehicle-gas-type)  
- definir los *Tipos de vehículos*

## Conexiones con otros módulos (Collegamenti con altri moduli)  
Estos están estrechamente relacionados con el [*anagrafica articoli*](/docs/erp-home/registers/items/create-new-item) y con los [*ordini clienti*](/docs/sales/sales-orders/settings) dado que es posible agregar artículos directamente desde un pedido.  
Además, desde un envío se puede crear directamente un [*DDT (Documento de Transporte)*](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn), [*fatture*](/docs/sales/sales-invoices/general-overview) de venta e incluso [*Picking*](/docs/logistics/picking/picking-intro).