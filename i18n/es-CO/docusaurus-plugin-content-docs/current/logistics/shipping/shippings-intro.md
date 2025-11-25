---
title: Introducción
sidebar_position: 1
ai_generated: true
---

Esta nueva herramienta ha sido desarrollada para optimizar y simplificar el proceso de envío<!-- spedizione -->, permitiendo un control más eficaz e integrado de todas las actividades logísticas<!-- logistiche -->.
La **gestión de envíos<!-- gestione spedizioni -->** de Fluentis incluye la función de **groupage**, que permite consolidar distintos envíos<!-- spedizioni --> de mercancías procedentes de varios remitentes pero con destino a la misma área geográfica en una sola carga o contenedor.       
Esto permite utilizar de manera más eficiente el espacio disponible en los medios de transporte<!-- mezzi di trasporto -->, tales como camiones, contenedores marítimos o aéreos, y ofrecer un servicio más económico respecto al envío individual de mercancías.         
Además, se ha implementado una **herramienta avanzada de planificación** que permite visualizar los envíos<!-- spedizioni --> por vehículo<!-- mezzo -->, conductor<!-- autista -->, transportista<!-- vettore --> y cliente. Gracias a una sencilla funcionalidad de arrastrar y soltar (drag & drop), los operadores pueden organizar fácilmente los envíos<!-- spedizioni -->, adelantándolos o posponiéndolos, y modificar el vehículo<!-- mezzo --> o el conductor<!-- autista --> asignado, garantizando una gestión más flexible y reactiva.

## Módulos del área<!-- Moduli dell'area  -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/shipping/shippings-intro">Envíos<!-- Spedizioni --></Link>
        <p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Envíos<!-- Spedizioni --></Link></p>
        <p>A través de la gestión de groupage, es posible agrupar los envíos<!-- spedizioni --> de distintos clientes o proveedores en una sola unidad de transporte<!-- unità di trasporto -->.</p>
        <p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Calendario</Link></p>
        <p>Permite planificar y gestionar de manera eficiente las actividades operativas y logísticas<!-- operative e logistiche -->, optimizando los recursos y mejorando la coordinación de los envíos<!-- spedizioni -->.</p>
    </div>
</div>

## Para comenzar a utilizar<!-- Per iniziare ad utilizzare -->   

los **Envíos<!-- Spedizioni -->**:
- crear artículos en la [*Maestra de artículos<!-- Anagrafica articoli -->*](/docs/erp-home/registers/items/create-new-item) 
- definir un [*Tipo de envío<!-- Tipi di spedizione -->*](/docs/configurations/tables/logistics/shipping-type)        
- definir un [*Estado de envío<!-- Stati di spedizione -->*](/docs/configurations/tables/logistics/shipping-states)     
- definir los [*Vehículos<!-- Automezzi -->*](/docs/logistics/motorvehicles/motorvehicle)   
- definir los [*Conductores de vehículos<!-- Autisti automezzo -->*](/docs/logistics/motorvehicles/motorvehicle-drivers)      
- definir los [*Motivos de inmovilización del vehículo<!-- Motivi di fermo autoveicolo -->*](/docs/configurations/tables/logistics/motorvehicle-off-time-reasons)     
- definir los [*Motivos de ausencia del conductor<!-- Motivi di assenza del conducente -->*](/docs/configurations/tables/logistics/driver-off-time-reasons) 
- definir las [*Licencias de conducción de vehículos<!-- Patenti di guida automezzi -->*](/docs/configurations/tables/logistics/motorvehicle-driving-licences)     
- definir el tipo de [*Propiedad de vehículos<!-- Proprietà automezzi -->*](/docs/configurations/tables/logistics/motorvehicle-ownership)   
- definir las [*Marcas de vehículos<!-- Marchi automezzi -->*](/docs/configurations/tables/logistics/motorvehicle-brands)   
- definir los [*Tipos de combustible de vehículos<!-- Tipo carburante automezzo -->*](/docs/configurations/tables/logistics/motorvehicle-gas-type)  
- definir los *Tipos de vehículos<!-- Tipi automezzi -->*  

## Conexiones con otros módulos<!-- Collegamenti con altri moduli -->
Estos están estrechamente relacionados con la [*Maestra de artículos<!-- Anagrafica articoli -->*](/docs/erp-home/registers/items/create-new-item) y los [*Pedidos de clientes<!-- Ordini clienti -->*](/docs/sales/sales-orders/settings) ya que es posible agregar artículos directamente desde un pedido.           
Además, desde un envío<!-- spedizione --> es posible crear directamente [*DDT*](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn), [*Facturas*](/docs/sales/sales-invoices/general-overview) de venta y también [Picking](/docs/logistics/picking/picking-intro).