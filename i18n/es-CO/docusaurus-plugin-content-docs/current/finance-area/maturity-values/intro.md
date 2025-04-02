---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo de partidas abiertas en Fluentis ERP gestiona las posiciones deudoras y acreedoras, facilitando el seguimiento de pagos y cobros. Accesible a través de Administración > Partidas > Partidas, permite crear, modificar y agrupar partidas manualmente o automáticamente a partir de los asientos contables.  
**Funciones Principales**

- **gestione partite**: Creación, modificación y bloqueo/desbloqueo de partidas con seguimiento automático de fecha y usuario.  
- **Conexión con el Flujo de Caja (Collegamento con il Cash Flow)**: Asociación automática a subcuentas bancarias y uso de la fecha prevista para previsiones financieras precisas.  
- **Agrupación y División (Accorpamento e Suddivisione)**: Posibilidad de agrupar o dividir partidas para una gestión simplificada.  
- **Conexión Contable (Collegamento Contabile)**: Conexión de las partidas creadas manualmente con los asientos contables, manteniendo el alineamiento entre datos.  

**Impresiones Disponibles (Stampe Disponibili)**

- **Extracto de Cuenta de Partidas Abiertas (Estratto Conto Partite Aperte)**: Visualiza el estado de las partidas abiertas para cada cliente o proveedor.  
- **Informe de Vencimiento (Report di Aging)**: Divide las partidas en vencidas y a vencer para evaluar los flujos.  
- **Calendario de Clientes/Proveedores (Scadenziario Clienti/Fornitori)**: Monitorea los vencimientos en función de diferentes parámetros (fecha, estado, tipo de documento).  
- **lettere di sollecito**: Automatiza el envío de recordatorios para las partidas vencidas.  
- **Diferencia entre Saldo Contable y Partidas (Differenza Saldo Contabile e Partite)**: Verifica posibles discrepancias entre saldo contable y partidas.  

**Procedimientos Principales (Procedure Principali)**

- **compensazione partite**: Balanceo de partidas entre clientes y proveedores, con cierre de las posiciones abiertas.  
- **Cálculo de Intereses de Mora (Calcolo Interessi di Mora)**: Gestión automática de los intereses por retrasos en los pagos.  
- **creazione automatica solleciti**: Generación masiva de recordatorios para las partidas vencidas.  
- **Conexión de Asientos Contables (Collegamento Registrazioni Contabili)**: Asociación de las partidas a asientos contables para un control completo.  
- **Gestión de Pagos Vinculados (Gestione Pagamenti Collegati)**: Creación de nuevas partidas a partir de pagos ya existentes.  

Conexiones: el módulo recibe los datos del módulo administrativo mediante la apertura automática de las partidas, según las condiciones de pago, en el momento del registro contable o de la contabilización automática de las facturas de compra o venta.  

**Tablas necesarias para utilizar el módulo (Tabelle necessarie per utilizzare il modulo):**
- Numeración de Partidas (Numerazione Partite)  
- Posición de partidas (Posizione partite)  
- Tipos de recordatorio (Tipi sollecito)  
- Tipo de compensación (Tipo compensazione)  
- Tipos de pago (Tipi pagamento)  
- Soluciones de pago (Soluzioni di pagamento)  

**Conclusiones (Conclusioni)**

El módulo proporciona herramientas completas para la gestión y automatización de las partidas abiertas, con funcionalidades avanzadas para el seguimiento de vencimientos y la recuperación de créditos, mejorando el control de la liquidez empresarial.