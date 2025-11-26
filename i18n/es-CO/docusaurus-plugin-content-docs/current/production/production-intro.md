---
title: Introducción
sidebar_position: 1
ai_generated: true
---

**Fluentis ERP** permite gestionar la Producción<!-- Produzione --> y todos sus aspectos operativos en empresas del sector Manufacturero e Industrial que deben administrar situaciones, incluso complejas, de presupuestación, consuntivación de costes<!-- consuntivazione costi -->, materiales y actividades<!-- attività -->.  
Los algoritmos de **Fluentis** permiten gestionar todos los procesos empresariales internos y externos a lo largo de todo el ciclo de vida del producto, desde la presupuestación hasta el diseño, el aprovisionamiento de materiales y recursos productivos, la Planificación de la Producción<!-- Pianificazione della Produzione --> interna y/o en maquila<!-- Conto Lavoro -->, la Recopilación de Datos de Producción<!-- Raccolta Dati di Produzione --> y el control de costes<!-- Controllo costi -->, sin olvidar la conexión bajo la óptica de Industria 4.0 de los equipos de Producción<!-- Produzione --> y almacenes automáticos<!-- Magazzini Automatici -->.

En Fluentis ERP, la aplicación del modelo MES ha sido diseñada implementando una amplia serie de parámetros para la gestión integrada de los datos provenientes de los procesos productivos que influyen significativamente en la rentabilidad de la empresa.  
En el software MES de Fluentis se puede observar cómo los documentos relativos a las órdenes de producción<!-- ordini di produzione -->, efectivamente lanzadas pero no necesariamente ejecutivas, definen la secuencia mediante la cual, en cada departamento y aún más en detalle en cada centro de trabajo, se encuentra la definición de toda la información necesaria para la ejecución de la actividad productiva<!-- attività produttiva -->.  
Los materiales, las fases y subfases, los equipamientos y en general toda la documentación de apoyo están orientados a hacer la ejecución de la actividad lo más automatizada, organizada y fluida posible.  
El algoritmo principal de un ERP especializado en el ámbito de Producción<!-- Produzione --> está definido por el MRP, el sistema de planificación que se encarga de verificar la correcta asignación de materiales y recursos necesarios para la realización de la actividad productiva<!-- attività produttiva -->. El algoritmo del MRP se configura en función de una gran cantidad de parámetros, para adaptarse de la mejor manera posible al tipo de realidad productiva representada por la empresa.

## Módulos del área<!-- Moduli dell'area -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/planning/ms-master-scheduling/mrp">MRP - Material Requirement Planning</Link>
        <p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">M.R.P.</Link></p>
        <p>El procedimiento MRP (Material Requirements Planning) es un sistema integrado de planificación de recursos que ayuda a las empresas a optimizar la gestión del inventario y de la producción<!-- produzione -->, sincronizando la disponibilidad de los materiales con las necesidades de producción<!-- produzione --> para mejorar la eficiencia operativa y reducir los costos.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/production/production-intro">MES - Manufacturing Execution System</Link>
        <p><Link to="/docs/production/pp-production-in-progress/production-orders/search-production-orders" className="bold-link">Órdenes de producción<!-- Ordini di produzione --></Link></p>
        <p>El módulo está diseñado para optimizar y simplificar la planificación de los procesos productivos<!-- processi produttivi -->. Permite gestionar órdenes en estado "Lanzado" y "Ejecutivo", haciendo una clara distinción entre las órdenes listas para iniciar y las que ya están en ejecución.</p>
        <p><Link to="/docs/production/pp-production-in-progress/picking-materials-list" className="bold-link">Lista de picking de materiales<!-- Lista prelievo materiali --></Link></p>
        <p>Permite gestionar y mover eficazmente los materiales destinados a la producción<!-- produzione -->.</p>
        <p><Link to="/docs/production/pp-production-in-progress/signals/sisgnals" className="bold-link">Declaraciones de producción<!-- Dichiarazioni di produzione --></Link></p>
        <p>Este módulo permite a los usuarios generar declaraciones de producción<!-- dichiarazioni di produzione --> rastreando el estado de progreso de cada fase, garantizando así una total visibilidad y control del proceso productivo<!-- processo produttivo --></p>
        <p><Link to="/docs/production/pp-production-in-progress/procedures/signals-record" className="bold-link">Registro de declaraciones<!-- Registrazione dichiarazioni --></Link></p>
        <p>Este procedimiento permite registrar múltiples declaraciones de producción<!-- dichiarazioni di produzione --> de manera simultánea.</p>
        <p><Link to="/docs/production/pp-production-in-progress/procedures/production-orders-release" className="bold-link">Liberación de órdenes de producción<!-- Rilascio ordini di produzione --></Link></p>
        <p>El procedimiento de liberación de órdenes de producción<!-- ordini di produzione --> en Fluentis permite cambiar el estado de las órdenes de *Lanzado* a *Ejecutivo*, generando al mismo tiempo los movimientos de almacén<!-- movimenti di magazzino --> necesarios.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/production/mes/mes-intro">Fluentis MES</Link>
        <p><Link to="/docs/production/mes/workstation" className="bold-link">Workstation</Link></p>
        <p>Permiten una gestión eficiente de las operaciones productivas, posibilitando codificar, filtrar y asociar recursos. Gracias a su interfaz intuitiva, los usuarios pueden optimizar el flujo de trabajo y mejorar la eficiencia operativa.</p>
        <p><Link to="/docs/production/mes/production-resources" className="bold-link">Recursos de producción<!-- Risorse di produzione --></Link></p>
        <p>Permite personalizar de manera simple y rápida el layout y el comportamiento de cada centro de trabajo, adaptando el sistema a las necesidades específicas de la empresa.</p>
        <p><Link to="/docs/production/mes/mes-main-form" className="bold-link">MES</Link></p>
        <p>Está diseñado para optimizar y simplificar el proceso de declaración de actividades productivas<!-- attività produttive -->. Esta interfaz permite a los operarios monitorear y gestionar en tiempo real los recursos de producción<!-- risorse di produzione -->, facilitando el ingreso de datos relativos a las fases de producción<!-- fasi di lavorazione --> y las cantidades producidas.</p>
    </div>
</div>