---
title: Parámetros de Pagos a Proveedores (Parametri Pagamenti Fornitore)
sidebar_position: 3
---

Los parámetros del módulo **Pagos a proveedor (Pagamenti fornitore)** se encuentran en **Parámetros > Tesorería (Parametri > Tesoreria)**.

En los parámetros del módulo Pagos a proveedores se pueden preconfigurar los elementos predeterminados que se propondrán en los procedimientos del módulo.

- **percorso di creazione dei tracciati**: configuración del directorio estándar para la creación del archivo telemático para las transferencias en Italia. Se recomienda crear un directorio compartido en red dentro de un servidor, para poder acceder desde todas las estaciones de trabajo del procedimiento. ATENCIÓN: este campo es obligatorio, pero ***FluentisERP*** utiliza el sistema de gestión documental integrado para almacenar el archivo .xml del archivo telemático para las disposiciones de pago. Por lo tanto, el archivo se podrá descargar directamente desde el formulario de la disposición de pago.  
- **Código ABI Centro Aplicativo (ABI Centro Applicativo)**: obsoleto.  
- **utilizzare il tasso di cambio storico**: con esta opción, en el caso de partidas en divisa, el contravalor en la divisa de la empresa se gestionará al tipo de cambio histórico de la partida, sin detectar diferencias de cambio.  
- **imponi la banca d'appoggio presente in anagrafica del fornitore**: con el indicador activo se impondrá el uso del banco de apoyo registrado en la base de datos del proveedor (Grilla Banco de apoyo) en lugar del banco de apoyo definido en la contabilización y vinculado a la partida abierta, a través de la grilla Tipos de Pago en el registro. El parámetro es visible (y nuevamente desactivable de vez en cuando) en el procedimiento de Creación Automática de Pagos a Proveedores. Sin embargo, no es visible si se crea una nueva disposición de pago (Pagos a Proveedores > Crear Pago a Proveedor) y, por lo tanto, en este caso debe gestionarse desde aquí.  
- **contabilizzazione da pagamenti fornitori**: configurado por defecto para contabilizar la operación desde el módulo de Pagos a proveedores y excluir el cierre de la partida presente en la disposición de la contabilización.  
- **Gestión de referencia IBAN (Gestione rif. Iban)**: configuración de la obligación de gestionar los códigos IBAN; en este caso, el archivo no se creará si faltan los IBAN de algunos pagos en la disposición.  
- **tipi pagamento per avvisi ricevute**: en el caso de que se importe los avisos Riba pasivos, es necesario indicar el tipo de pago predeterminado que se asignará a la disposición creada.