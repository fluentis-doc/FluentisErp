---
title: Introducción
sidebar_position: 1

El módulo de partidas en Fluentis ERP gestiona las posiciones deudoras y acreedoras, facilitando el seguimiento de cobros y pagos. Accesible mediante Administración > Partidas > Partidas, permite crear, modificar y agrupar partidas manualmente o automáticamente desde los asientos contables.

**Funcionalidades principales**

- **Gestión de Partidas**: Creación, modificación y bloqueo/desbloqueo de partidas con trazabilidad automática de fecha y usuario.
- **Vinculación con el Cash Flow**: Asociación automática a subcuentas bancarias y uso de la fecha prevista para previsiones financieras precisas.
- **Agrupación y División**: Posibilidad de agrupar o dividir partidas para una gestión simplificada.
- **Vinculación contable**: Enlace de las partidas generadas manualmente con los asientos contables, manteniendo la alineación de datos.

**Reportes disponibles**

- **Extracto de partidas abiertas**: Muestra el estado de las partidas abiertas por cada cliente o proveedor.
- **Informe de Antigüedad (Aging Report)**: Divide las partidas en vencidas y por vencer, facilitando la evaluación de los flujos.
- **Vencimientos Clientes/Proveedores**: Monitorea los vencimientos según diferentes parámetros (fecha, estado, tipo de documento).
- **Cartas de cobro**: Automatiza el envío de avisos de vencimiento para las partidas vencidas.
- **Diferencia partidas y saldo contable**: Verifica discrepancias entre saldo contable y saldo de partidas.

**Procedimientos principales**

- **Compensación de partidas>**: Saldar partidas entre clientes y proveedores, cerrando posiciones abiertas.
- **Cálculo de intereses por mora<!-- Calcolo Interessi di Mora -->**: Gestión automática de intereses por retrasos en los pagos.
- **Creación automática de avisos<!-- Creazione Automatica Solleciti -->**: Generación masiva de avisos para las partidas<!-- partite --> vencidas.
- **Vinculación de asientos contables<!-- Collegamento Registrazioni Contabili -->**: Asociación entre partidas<!-- partite --> y asientos contables<!-- scritture contabili --> para un control completo.
- **Gestión de pagos asociados<!-- Gestione Pagamenti Collegati -->**: Creación de nuevas partidas<!-- partite --> a partir de pagos ya existentes.

Los vínculos: el módulo recibe los datos desde el módulo administrativo mediante la apertura automática de partidas<!-- partite -->, según las condiciones de pago, en el momento de registro contable<!-- registrazione contabile --> o de contabilización automática de facturas de compra o venta.

**Tablas necesarias para utilizar el módulo:**
- Numeración de partidas<!-- Numerazione Partite -->
- Estado de partidas<!-- Posizione partite -->
- Tipos de aviso<!-- Tipi sollecito -->
- Tipo de compensación<!-- Tipo compensazione -->
- Tipos de pago<!-- Tipi pagamento -->
- Soluciones de pago<!-- Soluzioni di pagamento -->

**Conclusiones**

El módulo proporciona herramientas completas para la gestión y automatización de partidas abiertas<!-- partite aperte -->, con funciones avanzadas para el seguimiento de vencimientos y la recuperación de créditos, mejorando el control de la liquidez de la empresa.
