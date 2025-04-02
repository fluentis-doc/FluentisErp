---
title: Introducción (Introduzione)
sidebar_position: 1
---

Las funcionalidades para la facturación electrónica, aunque vinculadas a aspectos y necesidades de carácter fiscal-administrativo, son transversales y afectan a diferentes áreas de Fluentis ERP, como compras, ventas, administración, etc.

El punto fuerte del módulo radica en su integración. Sin salir del ERP, es posible recibir automáticamente las nuevas facturas de compra y contabilizarlas, o emitir y enviar al SDI las nuevas facturas de venta.

En cualquier caso, es posible exportar los archivos XML de las facturas de venta si se desea enviar a través de canales externos diferentes a nuestro Fluentis Business Hub.  
De igual manera, también se pueden importar manualmente los archivos XML para las facturas de compra.

Los formularios para la gestión de archivos XML tienen un visor integrado para poder leer claramente los archivos XML utilizando diferentes hojas de estilo (el nivel gráfico de interpretación, actualmente los más utilizados son el de la Agencia de Ingresos y el de Assosoftware).

**Tablas involucradas en las codificaciones y parámetros para la facturación electrónica:**

- **Tasas y modalidades de IVA (Aliquote e modalità IVA)**: donde se configura el código N para la exención de IVA.  
- **tipi pagamento**: donde se indica el código MP para los tipos de pago.  
- **tipi fatture**: donde se asocian las entradas adecuadas de la siguiente tabla *tipi documento*.  
- **tipi documento**: donde se indica el código TD para el tipo de factura.  

Para más configuraciones específicas, ver [**aquí (qui)**](/docs/finance-area/e-invoice/configuration_einvoice)