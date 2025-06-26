---
title: Parámetros de Pagos a Proveedores
sidebar_position: 3
---

Los parámetros del módulo **Pagos a proveedores** se encuentran en **Parámetros > Tesorería**.

En los parámetros del módulo Pagos a proveedores se pueden preconfigurar los elementos predeterminados que se propondrán en los procedimientos del módulo.

- **Ruta para crear formatos de archivo**: configuración del directorio estándar para la creación del archivo telemático para las transferencias en Italia. Se recomienda crear un directorio compartido en red dentro de un servidor, para poder acceder desde todas las estaciones de trabajo del procedimiento. ATENCIÓN: este campo es obligatorio, pero ***FluentisERP*** utiliza el sistema de gestión documental integrado para almacenar el archivo .xml del archivo telemático para las disposiciones de pago. Por lo tanto, el archivo se podrá descargar directamente desde el formulario de la disposición de pago.  
- **Centro de aplicación BIC**: obsoleto.  
- **Utilice la tasa de cambio histórica**: con esta opción, en el caso de valores de madurez en divisa, el contravalor en la divisa de la empresa se gestionará al tipo de cambio histórico de la madurez, sin detectar diferencias de cambio.  
- **Inserte el banco presente en el registro de proveedores**: con el indicador activo se impondrá el uso del banco de apoyo registrado en la base de datos del proveedor (Grilla Banco de apoyo) en lugar del banco de apoyo definido en la contabilización y vinculado a la madurez abierta, a través de la grilla Tipos de Pago en el registro. El parámetro es visible (y nuevamente desactivable de vez en cuando) en el procedimiento de Creación Automática de Pagos a Proveedores. Sin embargo, no es visible si se crea una nueva disposición de pago (Pagos a Proveedores > Crear Pago a Proveedor) y, por lo tanto, en este caso debe gestionarse desde aquí.  
- **Contabilidad de pagos a proveedores**: configurado por defecto para contabilizar la operación desde el módulo de Pagos a proveedores y excluir el cierre de la madurez presente en la disposición de la contabilización.  
- **Gestión de referencia IBAN**: configuración de la obligación de gestionar los códigos IBAN; en este caso, el archivo no se creará si faltan los IBAN de algunos pagos en la disposición.  
- **Tipo de pago para alertas de pagaré**: en el caso de que se importe los avisos Riba pasivos, es necesario indicar el tipo de pago predeterminado que se asignará a la disposición creada.