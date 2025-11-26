---
title: Introducción
sidebar_position: 1
ai_generated: true
---

Las funcionalidades para la facturación electrónica, aunque están relacionadas con aspectos y necesidades de carácter fiscal y administrativo, son transversales e involucran diferentes áreas de Fluentis ERP<!-- ERP -->, como la parte de compras, ventas, administración, etc.

El punto fuerte del módulo radica en su integración. Sin salir del ERP<!-- ERP --> es posible recibir automáticamente las nuevas facturas de compra y contabilizarlas, o bien emitir y enviar al SDI las nuevas facturas de venta.

En cualquier caso, es posible exportar los archivos xml de las facturas de venta si se desea realizar el envío a través de canales externos distintos a nuestro Fluentis Business Hub.
Del mismo modo, es posible importar manualmente los archivos xml para las facturas de compra.

Los formularios para la gestión de archivos xml disponen de un visor integrado para poder leer claramente los archivos xml utilizando diferentes hojas de estilo (la capa gráfica de interpretación; actualmente las más utilizadas son la de la Agenzia delle Entrate y la de Assosoftware).

**Tablas involucradas en las codificaciones y parámetros para la facturación electrónica<!-- Tabelle coinvolte nelle codifiche e parametri per la fatturazione elettronica -->:**<!-- **Tabelle coinvolte nelle codifiche e parametri per la fatturazione elettronica:** -->

- Tipos y modos de IVA<!-- Aliquote e modalità IVA -->: donde está configurado el código N para la exención de IVA
- Tipos de pago<!-- Tipi pagamento -->: donde se informa el código MP para las formas de pago
- Tipos de factura<!-- Tipi fatture -->: donde se asocian los conceptos correspondientes de la siguiente tabla Tipos de Documento<!-- Tipi Documento -->
- Tipos de documento<!-- Tipi documento -->: donde se indica el código TD para el tipo de factura

Para configuraciones más específicas, consulte [**aquí**](/docs/finance-area/e-invoice/configuration_einvoice) <!-- [**qui**](/docs/finance-area/e-invoice/configuration_einvoice) -->