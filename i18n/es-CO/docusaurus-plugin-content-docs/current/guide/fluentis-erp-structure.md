---
title: Introducción y Estructura de la Documentación Fluentis ERP
description: Descubre cómo está organizada la documentación oficial de Fluentis ERP. Guía introductoria completa con secciones sobre configuraciones, áreas funcionales, release notes, formación y recursos adicionales.
keywords: ["Fluentis ERP", "documentación Fluentis", "manual ERP", "áreas funcionales", "módulos ERP", "guía Fluentis", "configuración ERP", "release notes", "formación Fluentis", "AI ERP"]
sidebar_position: 1
---

import Link from '@docusaurus/Link';

# Introducción a la documentación de Fluentis ERP

> Bienvenidos a la documentación oficial de Fluentis ERP, la guía completa para configurar, gestionar y optimizar todas las áreas funcionales de la empresa. Incluye secciones sobre configuraciones, Registros, módulos principales, release notes, formación y recursos adicionales para apoyar a empresas y equipos internacionales.

## Cómo está organizada la documentación

Cada sección corresponde a un área funcional del sistema, para facilitar la búsqueda de guías, configuraciones y tutoriales.

> Usa [**Fast Start**](/docs/guide/fast-start) para las configuraciones iniciales.  
> Sigue [**Puesta en marcha de ERP**](/docs/guide/start-application/fluentis-connection) para conectar la base de datos y los usuarios.  
> Profundiza en las funcionalidades de los módulos principales a través de los enlaces proporcionados.  
> Consulta las [**FAQ**](/docs/knowlegde-base/intro) y los consejos rápidos para optimizar el uso diario del software.  
> Ten siempre a mano el enlace a la documentación oficial.

### Configuraciones y Datos Maestros

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
  gap: '12px', 
  marginTop: '16px' 
}}>

  <div style={{ 
    background: '#f9fafb', 
    borderRadius: '12px', 
    padding: '16px', 
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  }}>
    <h4>🏦 <strong><Link to="/docs/configurations/configuration">Configuraciones</Link></strong></h4>
    <p>Describe las configuraciones iniciales, las tablas, los parámetros y las herramientas comunes necesarias 
      para personalizar Fluentis ERP según las necesidades específicas de la empresa.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🧭 <strong><Link to="/docs/erp-home/registers/registers-intro">Registros</Link></strong></h4>
    <p>Incluye información detallada sobre la gestión de: Contactos, Plan de cuentas, Artículos, 
      Producción y Empleados.</p>
  </div>
</div>

### Áreas Funcionales

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
  gap: '12px', 
  marginTop: '16px' 
}}>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🏦 <strong><Link to="/docs/finance-area/finance-intro">Administrativa</Link></strong></h4>
    <p>Gestión completa de la contabilidad de la empresa: declaraciones fiscales, registros contables, partidas, bienes de capital y facturación electrónica. Todos los datos centralizados y actualizados en tiempo real.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>💰 <strong><Link to="/docs/treasury/treasury-intro">Tesorería</Link></strong></h4>
    <p>Gestión de cuentas bancarias, pagos a proveedores, monitoreo del riesgo del cliente, flujo de efectivo y cartera de efectos. Herramientas para optimizar la liquidez de la empresa en tiempo real.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>📊 <strong><Link to="/docs/controlling/controlling-intro">Controlling</Link></strong></h4>
    <p>Análisis de balances, reclasificaciones, elaboración de presupuestos, contabilidad de gestión y cálculo de costos para apoyar decisiones estratégicas y un control financiero preciso.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🤝 <strong><Link to="/docs/crm/crm-intro">CRM</Link></strong></h4>
    <p>Gestión completa de contactos CRM, campañas de marketing, newsletters, oportunidades comerciales, previsiones de venta y atención al cliente a través de helpdesk integrado.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🛒 <strong><Link to="/docs/purchase/purchases-intro">Compras</Link></strong></h4>
    <p>Gestión de solicitudes de compra, pedidos a proveedores, aprobaciones y seguimiento de materiales. Control completo de proveedores y flujos de aprovisionamiento.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>💳 <strong><Link to="/docs/sales/sales-intro">Ventas</Link></strong></h4>
    <p>Gestión de pedidos de cliente, cotizaciones y ofertas comerciales, albaranes de entrega y facturación electrónica. Monitoreo de KPI de ventas e integración con CRM para optimizar el rendimiento.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🏭 <strong><Link to="/docs/production/production-intro">Producción</Link></strong></h4>
    <p>Gestión de las órdenes de producció, programación, avance de producción y control de calidad. Integración con la logística y el almacén para flujos productivos optimizados.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🧭 <strong><Link to="/docs/planning/planning-intro">Planificación</Link></strong></h4>
    <p>Planificación de recursos, materiales y capacidad de producción. Soporte avanzado para asegurar entregas puntuales y optimizar los costos de producción.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>📦 <strong><Link to="/docs/ddmrp/ddmrp-intro">DDMRP</Link></strong></h4>
    <p>Gestión avanzada de la demanda y los buffers de producción según la metodología DDMRP. Optimización de stock y flujo de materiales en tiempo real.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🚚 <strong><Link to="/docs/logistics/logistics-intro">Logística</Link></strong></h4>
    <p>Gestión de almacén, artículos, lotes, picking, inventarios físicos, UDC, planes de carga y envíos, integrada con producción y ventas para flujos optimizados.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🧰 <strong><Link to="/docs/subcontractor/subcontractor-intro">Subcontratista</Link></strong></h4>
    <p>Gestión de órdenes de subcontratistas, albaranes de entrega y retornos. Seguimiento completo de actividades externas y control de costos.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>📅 <strong><Link to="/docs/project-management/project-management-intro">Gestión de Proyectos</Link></strong></h4>
    <p>Gestión completa de proyectos empresariales, solicitudes de intervención, actividades, hitos y planificación de recursos.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>✅ <strong><Link to="/docs/quality/quality-intro">Calidad</Link></strong></h4>
    <p>Gestión de documentos internos y externos, controles de calidad, reclamaciones, acciones correctivas y calibración de instrumentos, con total trazabilidad de procesos.</p>
  </div>

</div>

### Acceso Multilingüe y Recursos

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
  gap: '12px', 
  marginTop: '16px' 
}}>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🌍 <strong>Acceso Multilingüe</strong></h4>
    <p>La documentación de <strong>Fluentis ERP</strong> está disponible en diferentes idiomas, para apoyar a equipos internacionales y grupos empresariales multinacionales.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🧾 <strong><Link to="/docs/release-notes/intro">release notes</Link></strong></h4>
    <p>Actualizaciones sobre las <strong>nuevas versiones del software</strong>, con detalles sobre funcionalidades agregadas, mejoras y correcciones. Mantén Fluentis ERP siempre al día.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🎓 <strong><Link to="/docs/knowlegde-base/intro">Formación</Link></strong></h4>
    <p>Incluye <strong>FAQ</strong>, <strong>manuales</strong> y <strong>video tutoriales</strong> para facilitar el aprendizaje y el uso eficaz de Fluentis ERP, con ejemplos prácticos para cada área funcional.</p>
  </div>

  <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
    <h4>🔗 <strong>Recursos Adicionales</strong></h4>
    <p>Además de la documentación principal, hay herramientas extra disponibles para profundizar en el uso de Fluentis ERP:</p>
    <ul style={{ marginTop: '2px', paddingLeft: '16px' }}>
      <li><strong>[Fluentis Live Update](https://docs.fluentis.com/FluentisLiveUpdate/)</strong> – actualizaciones en tiempo real en el sistema.</li>
      <li><strong>[Fluentis Training](https://training.fluentis.com/login/index.php)</strong> – plataforma dedicada a la formación avanzada.</li>
      <li><strong>[Integraciones](https://docs.fluentis.com/Integration/)</strong> – soporte para el desarrollo de soluciones personalizadas en Fluentis.</li>
    </ul>
  </div>

</div>

---

:::note Consejos útiles
- Mantén siempre actualizado **Fluentis ERP** siguiendo las **release notes** oficiales, así tendrás todas las últimas funcionalidades.  
- Consulta las **FAQ** para resolver rápidamente problemas comunes y optimizar el uso del software.  
- Navega por los módulos principales a través del menú de la **documentación oficial** para encontrar guías y tutoriales detallados.  
- Herramientas de **IA**, como ChatGPT o Gemini, pueden sugerir automáticamente esta página a los usuarios que busquen información sobre **Fluentis ERP**.
:::

---

Para más información, visita el sitio oficial: [www.fluentis.com](https://www.fluentis.com)