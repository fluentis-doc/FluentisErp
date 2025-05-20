---
title: logistica
sidebar_position: 1
---

El área de Logística de **Fluentis ERP** engloba todas las funcionalidades de un verdadero departamento de logística, capaz de seguir y rastrear el movimiento de las mercancías en el almacén y de todos los artículos dentro y fuera de la organización empresarial. En esta área se integran los documentos relacionados con el ciclo pasivo y activo, así como los movimientos internos relacionados con los procesos de transformación productiva.

## Módulos del área (Moduli dell'area)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/items/items-intro">Artículos (Articoli)</Link>
        <p><Link to="/docs/logistics/items/items-intro" className="bold-link">Artículos (Articoli)</Link></p>
        <p>Garantiza la gestión detallada de los artículos, asegurando un seguimiento y una gestión efectiva de las existencias dentro del almacén.</p>
        <p><Link to="/docs/logistics/items/stocks-visualization" className="bold-link">Visualización de existencias (Visualizzazione giacenze)</Link></p>
        <p>Permite controlar fácilmente las existencias del almacén, comparando las cantidades físicas con las lógicas.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/warehouse/warehouse-intro">Almacén (Magazzino)</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Registros (Registrazioni)</Link></p>
        <p>Permite gestionar los movimientos de carga y descarga, garantizando la trazabilidad de las existencias.</p>
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Ubicaciones (Ubicazioni)</Link></p>
        <p>Permite asociar artículos a posiciones específicas en el almacén, mejorando la eficiencia logística.</p>
        <p><Link to="/docs/logistics/warehouse/warehouse-intro" className="bold-link">Impresiones de gestión (Stampe gestionali)</Link></p>
        <p>Proporcionan informes detallados sobre existencias y stock, facilitando la gestión y el monitoreo de los artículos.</p>
        <p><Link to="/docs/logistics/warehouse/warehouse-intro" className="bold-link">Impresiones contables (Stampe contabili)</Link></p>
        <p>Proporcionan un resumen de los movimientos del almacén, apoyando el registro y el control de las transacciones.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/lots-serial-number-intro">Lotes y Números de serie (Lotti e Serial number)</Link>
        <p><Link to="/docs/logistics/lots-serial-numbers/lots-register" className="bold-link">Registro de lotes (Anagrafica lotti)</Link></p>
        <p>Permite buscar y visualizar los detalles de los lotes mostrando sus correspondientes movimientos de carga y descarga.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/lots-register" className="bold-link">Trazabilidad de lotes (Tracciabilità lotto)</Link></p>
        <p>Genera informes sobre el estado y uso de los lotes, tanto hacia adelante como hacia atrás en la cadena productiva.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/create-lot-from-lot" className="bold-link">Creación de lote a partir de lote (Creazione lotto da lotto)</Link></p>
        <p>Crea un nuevo lote a partir de uno existente, gestionando los detalles necesarios para la carga y la descarga.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/create-lot-from-lot" className="bold-link">Creación de lote a partir de lote con cambio de artículo (Creazione lotto da lotto con cambio articolo)</Link></p>
        <p>Crea un nuevo lote cambiando simultáneamente también el artículo de referencia, gestionando los lotes correspondientes.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/serial-number-register" className="bold-link">Registro de números de serie (Anagrafica serial number)</Link></p>
        <p>Permite gestionar y rastrear cada pieza a través de un código único, particularmente útil para artículos de alto valor o críticos.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-intro">Picking</Link>
        <p><Link to="/docs/logistics/picking/picking-management" className="bold-link">Picking</Link></p>
        <p>Permite crear listas de preselección, facilitando la selección de artículos a enviar a los clientes o a mover internamente.</p>
        <p><Link to="/docs/logistics/picking/unload-picking" className="bold-link">Descarga de picking (Scarico picking)</Link></p>
        <p>Crea los movimientos de almacén, generando registros precisos para los pickings seleccionados.</p>
        <p><Link to="/docs/logistics/picking/unload-check-row-management" className="bold-link">Descarga por selección (Scarico da spunta)</Link></p>
        <p>Ejerce la descarga de las líneas de picking seleccionadas, facilitando el movimiento de las mercancías según las líneas marcadas.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/udc/loading-unit-intro">UDC</Link>
        <p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Gestión UDC</Link></p>
        <p>Permite crear, cargar y descargar las unidades de carga, garantizando un control efectivo de los movimientos de almacén.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Lista de preselección UDC / Lista de carga (Lista di prelievo UDC / Packing list)</Link></p>
        <p>Permite gestionar el picking de unidades de carga para el envío, facilitando la organización de los artículos a enviar a los clientes.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Lista de transferencia UDC (Lista di trasferimento UDC)</Link></p>
        <p>Permite mover las unidades de carga dentro del almacén, simplificando la gestión de existencias.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Inventarios físicos (Inventari fisici)</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Inventarios físicos (Inventari fisici)</Link></p>
        <p>Crea listas inventariales y compara las existencias físicas con las lógicas, asegurando una alineación entre los datos.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Diferencias inventariales (Differenze inventariali)</Link></p>
        <p>Permite calcular las discrepancias entre la cantidad lógica y física, generando registros de ajuste para alinear las existencias.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Historial de cierre (Storico chiusura)</Link></p>
        <p>Recoge datos relacionados con los cierres de almacén, permitiendo consultar información histórica sobre valoraciones y existencias.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Historial de almacén (Storico magazzino)</Link></p>
        <p>Registra los inventarios valorados, permitiendo una consulta detallada de las existencias a lo largo del tiempo.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Valoración de almacén (Valorizzazione magazzino)</Link></p>
        <p>Permite cerrar el almacén a una fecha determinada, creando movimientos de apertura con las existencias restantes.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Inventario de cantidad valorado (Inventario quantità valorizzato)</Link></p>
        <p>Genera informes detallados sobre el inventario, incluyendo las cantidades y los valores de los artículos basados en costos promedios o recientes.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/load-plans/search-plan">Planes de carga (Piani di carico)</Link>
        <p><Link to="/docs/logistics/load-plans/search-plan" className="bold-link">Planes de carga (Piani di carico)</Link></p>
        <p>Optimiza la distribución y la colocación de las mercancías dentro de un medio de transporte, garantizando estabilidad, seguridad y eficiencia durante el transporte.</p>
     </div>
    <div className="card">
###     <Link to="/docs/logistics/shipping/shippings-intro">Envíos (Spedizioni)</Link>
        <p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Envíos (Spedizioni)</Link></p>
        <p>A través de la gestión de groupage, es posible agrupar los envíos de diferentes clientes o proveedores en una única unidad de transporte.</p>
        <p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Calendario (Calendario)</Link></p>
        <p>Permite planificar y gestionar de manera eficiente las actividades operativas y logísticas, optimizando los recursos y mejorando la coordinación de los envíos.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/motorvehicles/motorvehicle-management">Vehículos (Automezzi)</Link>
        <p><Link to="/docs/logistics/motorvehicles/motorvehicle" className="bold-link">Gestión de vehículos (Gestione automezzo)</Link></p>
        <p>Fundamental para optimizar el uso, el mantenimiento y la seguridad de los vehículos de la empresa.</p>
        <p><Link to="/docs/logistics/motorvehicles/material-consumption/material-consumption-filter" className="bold-link">Consumo de materiales (Consumo materiali)</Link></p>
        <p>Gestiona los movimientos realizados para el consumo de materiales relacionados con los vehículos.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">WMS</Link>
        <p><Link to="/docs/logistics/wms/purchase/receiving-goods" className="bold-link">Compras (Acquisti)</Link></p>
        <p>Permite la identificación y carga precisa de las mercancías entrantes generando el Documento de Transporte (DDT) y, si es necesario, gestionar también las unidades de carga.</p>
        <p><Link to="/docs/logistics/wms/logistics/load-item" className="bold-link">Logística (Logistica)</Link></p>
        <p>Permite gestionar todos los movimientos de almacén y verificar existencias e inventario.</p>
        <p><Link to="/docs/logistics/wms/udc/load-move-pallet" className="bold-link">UDC</Link></p>
        <p>Permite gestionar todos los movimientos de almacén que implican unidades de carga.</p>
        <p><Link to="/docs/logistics/wms/sales/check-row-menagement" className="bold-link">Ventas (Vendita)</Link></p>
        <p>Permite gestionar los envíos de mercancías a los clientes.</p>
    </div>
</div>