---
title: Definición de las relaciones entre el plan de cuentas y el plan de centros empresariales (Definizione delle relazioni fra piano dei conti e piano dei centri aziendali)
sidebar_position: 2.2
---

Después de haber redactado el plan de [***Centros empresariales***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), el siguiente paso es tomar nuestro [***PLAN DE CUENTAS***](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) y relacionarlo con el plan de centros: en esta fase, debemos definir cuenta por cuenta las lógicas de asignación de la misma a los diferentes centros. Por ejemplo, la calefacción, muchas veces, se divide según los metros cuadrados ocupados por los centros mismos en lugar de la fuerza motriz, basándose en un parámetro de uso teórico de cada centro de la misma fuerza motriz. Otro ejemplo es el de un mantenimiento, según las facturas que recibe directamente la contabilidad. Si buscamos una asignación objetiva de los mantenimientos, en el momento en que recibamos la factura también podremos asignarla al centro de manera correcta. Es necesario definir de manera detallada las relaciones existentes entre las cuentas de contabilidad y los centros correspondientes, con el fin de activar una contabilidad analítica que complemente la general sin que implique una carga excesiva de trabajo para la oficina administrativa.

:::tip Nota
Para quienes utilizan la gestión del Controlling de la Contabilidad de gestión, en lugar de predefinir una asignación según porcentajes fijados a nivel de Plan de cuentas, se sugiere asociar el centro virtual al 100% y luego definir *Cost drivers* específicos de asignación, quizás incluso utilizando solo la misma lógica porcentual. A nivel de Contabilidad de gestión, de hecho, el dato de la analítica de la contabilidad general siempre se elimina y se recrea para el período que se está procesando, así que es mucho más cómodo aplicar posteriormente una regla del cost driver, que se puede aplicar en un rango de fechas de validez (abriendo la posibilidad de cambiar en el transcurso los criterios aplicados) sin necesidad de intervenir manualmente en las registraciones analíticas ya almacenadas.
:::

:::tip Nota
En caso de que el usuario decida una valorización puntual caso por caso en contabilidad, en el Plan de cuentas podemos optar por
- insertar varios centros con porcentaje 0: el usuario encontrará estas filas en la registración y podrá valorizar manualmente cada fila con el valor correspondiente y ***FluentisERP*** al guardar eliminará las restantes con importe cero. Si la dimensión de los centros y la causal no permiten registraciones desequilibradas, no podrán existir discrepancias.
- insertar varios centros con porcentaje 100: el usuario encontrará estas filas valoradas en la registración y podrá eliminar aquellas que no deben ser valoradas, o modificar los valores antes de guardar. Si la dimensión de los centros y la causal no permiten registraciones desequilibradas, no podrán existir discrepancias.
- Para quienes utilizan la gestión del Controlling de la Contabilidad de gestión, es posible insertar una fila de configuración sin un centro específico, pero con solo la dimensión de los centros y, opcionalmente, también la categoría de los centros que se desea valorizar para esa cuenta: el usuario encontrará en la registración la fila valorada con el centro vacío y al abrir el menú desplegable tendrá visibilidad solo de los centros de la dimensión (y de la categoría, si está configurada) del caso.
:::

La vinculación al Plan de cuentas es solo uno de los puntos disponibles para conectar los centros: según los casos, las dimensiones a valorizar y las lógicas a aplicar, podría ser útil proceder a la conexión de los *Centros empresariales* a otros registros de ***FluentisERP***. De hecho, podemos asociar los centros a
- Registros de artículos
- Registros de clientes/proveedores/agentes
- Empleados y categorías de actividades del personal, en uso en el área de Proyectos
- Registro de almacenes
- Registros de activos

:::tip Nota
Cada módulo del ciclo activo/passivo, en su respectiva máscara de configuración de parámetros, prevé la definición del orden lógico de búsqueda de los centros para valorizar la fila de artículo individual en el documento correspondiente, así como la definición de cómo comportarse en los varios procesos de creación de un módulo a otro (por ej., cómo comportarse en el cumplimiento de un pedido, así como en la creación de facturas a partir de DDT).
También estas configuraciones deben evaluarse cuidadosamente para definir el punto correcto de valorización de los datos en el ciclo documental.
:::

Una característica adicional importante a definir a nivel del plan de cuentas es la de utilizar o no el dato contable en los procesos del Controlling: algunos ejemplos pueden aclarar la necesidad de establecer la opción *No utilizar en contabilidad control (Non utilizzare nel controlling)* con los eventuales criterios de ajuste.  
En el plan de cuentas primero tendremos una serie de costos a registro diferido: el caso típico es el costo del consejo de vigilancia, que debo estimar a principios de año para el controlling, pero que se ajustará a fin de año cuando tenga el dato real registrado contablemente.  
O bien, la empresa podría decidir utilizar la depreciación contable/fiscal también en las valoraciones para la contabilidad de gestión, en lugar de introducir una lógica de depreciación técnica extracontable.  
O los costos por personal, cuando contablemente no se registran periódicamente las partes de las provisiones que se manifiestan en ciertos períodos del año (como en los meses de registro de aguinaldos o meses adicionales).