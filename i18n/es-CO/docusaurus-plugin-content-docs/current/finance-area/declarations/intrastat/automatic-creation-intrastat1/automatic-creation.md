---
title: Creación automática
sidebar_position: 1
ai_generated: true
---

El botón de 'Creación automática' abre un asistente para la recuperación de datos desde el área de ventas<!-- area vendite -->.

El procedimiento consta de tres pestañas:

** [Filtro Facturas](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/invoices-filter) **<!-- [Filtro Fatture](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/invoices-filter) -->

** [Parámetros](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters) **<!-- [Parametri](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters) -->

** [Reversión](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/restore) **<!-- [Rollback](/docs/finance-area/declarations/intrastat/automatic-creation-intrastat1/restore) -->

Durante la fase de **creación** del modelo intra se utilizarán las pestañas **Filtro facturas<!-- Filtro fatture -->**, en la cual se buscan las facturas activas a incluir en el modelo, y **Parámetros<!-- Parametri -->**, que representa una vista previa de las líneas para poder integrar los posibles datos faltantes.

Al finalizar, tras presionar el botón de creación, el formulario de la creación automática deberá ser cerrado y los datos estarán presentes en la respectiva sección dentro de las pestañas del modelo, listos para ser agrupados y exportados o impresos.

**En el caso de que un modelo intra creado con el procedimiento automático deba ser eliminado, se deberá abrir nuevamente el asistente de creación automática y restaurar los datos con los comandos presentes en la pestaña Reversión<!-- Rollback -->; solo posteriormente será posible cerrar el modelo y eliminarlo definitivamente desde el formulario de búsqueda de los modelos intra.**

Si se utiliza el comando de eliminación del modelo intra en la situación descripta anteriormente (sin realizar antes la restauración), igualmente aparecerá un mensaje de aviso y, en caso de que el aviso se ignore, el procedimiento de eliminación procederá en cualquier caso a restaurar con el fin de poder realizar una nueva creación automática con filtrado de facturas activas. En este sentido, lo que se restaura es un parámetro interno en la base de datos que indica al sistema que las facturas en cuestión no han sido ya utilizadas en un modelo intra.

 
:::tip Reparto automático de gastos accesorios en factura<!-- Ripartizione automatica spese accessorie in fattura -->
Es posible gestionar un reparto automático en las líneas de la factura de un gasto accesorio final (pie del documento), como por ejemplo los gastos de transporte, etc.

Es necesario utilizar un tipo de gasto (tabla de tipos de gastos) que tenga la marca ***Val stat. Intra*** para insertar en la factura o en la ficha del cliente/proveedor para automatizar la propuesta en factura.

En la fase de creación automática, se notará que el valor de cada línea será incrementado por una parte proporcional del gasto final distribuido.
:::