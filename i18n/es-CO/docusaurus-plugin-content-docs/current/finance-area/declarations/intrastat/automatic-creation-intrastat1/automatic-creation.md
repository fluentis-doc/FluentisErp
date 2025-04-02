---
title: creazione automatica
sidebar_position: 1
---

El botón de 'creazione automatica (Creazione automatica)' abre un asistente para la recuperación de datos del área de ventas.

El procedimiento consta de tres pestañas:

**[Filtro de Facturas (Filtro Fatture)](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/invoices-filter)**

**[Parámetros (Parametri)](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters)**

**[Reversa (Rollback)](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/restore)**

En la fase de **creazione** del modelo intra, se utilizarán el **Filtro de facturas** (Filtro fatture), en la que se buscan las facturas activas para incluir en el modelo, y los **Parámetros**, que representan una vista previa de las líneas con el fin de integrar los datos faltantes.

Al finalizar el proceso, después de presionar el botón de creación, el formulario de creación automática deberá cerrarse y los datos estarán presentes en la sección respectiva dentro de las pestañas del modelo, listos para ser agrupados y exportados o impresos.

**En caso de que un modelo intra creado con el procedimiento automático deba ser eliminado, será necesario abrir la herramienta de creación automática y restaurar utilizando los comandos disponibles en la pestaña Reversa. Solo después de esto se podrá cerrar el modelo y eliminarlo definitivamente del formulario de búsqueda de modelos intra.**

Si se utiliza el comando de eliminación del modelo intra en la situación descrita anteriormente (sin realizar primero la restauración), aparecerá un mensaje de advertencia y, si se ignora la advertencia, el procedimiento de eliminación procederá de todos modos a hacer la restauración para que se pueda realizar posteriormente una nueva creación automática con filtro de las facturas activas. En este sentido, lo que se restaura es un parámetro interno en la base de datos que indica al sistema que las facturas en cuestión no han sido utilizadas en un modelo intra.

:::tip Distribución automática de gastos accesorios en la factura (Ripartizione automatica spese accessorie in fattura)
Es posible gestionar una distribución automática sobre las líneas de la factura de un gasto accesorio final (pie del documento) como, por ejemplo, los gastos de transporte, etc.

Es necesario utilizar un tipo de gasto (tabla de tipos de gastos) que tenga el indicador ***Valor estat. Intra*** para incluir en la factura o en el registro del cliente/proveedor para automatizar la propuesta en la factura.

Durante la creación automática, se notará que el valor de cada línea se incrementa con una cuota del gasto final distribuido.
:::