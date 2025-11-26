---
title: Definición de las relaciones entre el plan de cuentas y el plan de centros empresariales
sidebar_position: 2.2
ai_generated: true
---

Después de haber elaborado el plan de [***Centros empresariales***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)<!-- Centri aziendali -->, el siguiente paso es tomar nuestro [***PLAN DE CUENTAS***](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)<!-- PIANO DEI CONTI --> y relacionarlo con el plan de centros: en esta fase, por tanto, debemos definir cuenta por cuenta las lógicas de asignación de la misma a los distintos centros<!-- centri -->. Por ejemplo, la calefacción muchas veces se reparte según los metros cuadrados ocupados por los mismos centros, o bien la energía motriz en base a un parámetro de utilización teórica de cada centro de esa misma fuerza motriz. Otro ejemplo es el de un mantenimiento basado en las facturas que la contabilidad<!-- contabilità --> recibe directamente. Si queremos una asignación objetiva de los mantenimientos, en el momento en que recibamos la factura también estaremos en condiciones de asignarla al centro correctamente. Es necesario definir de forma detallada las relaciones existentes entre las cuentas contables<!-- contabilità --> y los respectivos centros, de modo que se active una contabilidad analítica como complemento de la general, que no implique una sobrecarga excesiva de trabajo para el departamento administrativo.

:::tip Nota
Para quienes utilizan la gestión de Control de la Contabilidad de gestión<!-- Controlling della Contabilità gestionale -->, en lugar de predefinir una asignación según porcentajes fijados a nivel del plan de cuentas<!-- Piano dei conti -->, se sugiere asociar el centro virtual al 100% para luego definir *Cost drivers* específicos de redistribución, quizás incluso solo bajo la misma lógica porcentual. En la Contabilidad de gestión<!-- Contabilità gestionale -->, de hecho, el dato analítico de la contabilidad general siempre se elimina y recrea para el período que se está procesando, por lo que resulta mucho más conveniente aplicar posteriormente una regla del cost driver, que permite ser aplicada en un rango de fechas de validez (lo que posibilita cambiar criterios en curso) sin tener que intervenir manualmente sobre los asientos analíticos ya almacenados.
:::

:::tip Nota
En caso de que se decida una valorización puntual caso por caso por parte del usuario en contabilidad<!-- contabilità -->, en el plan de cuentas<!-- Piano dei conti --> podemos elegir:
- ingresar varios centros con porcentaje 0: el usuario encontrará dichas líneas en el registro y podrá valorizar manualmente la línea individual con el valor del caso y ***FluentisERP*** al guardar eliminará las restantes con importe cero. Si la dimensión de los centros y la causale<!-- causale --> no permiten asientos desbalanceados, no habrá diferencias.
- ingresar varios centros con porcentaje 100: el usuario encontrará dichas líneas valorizadas en el registro y podrá eliminar aquellas que no necesiten valorización, o modificar los valores antes de guardar. Si la dimensión de los centros y la causale<!-- causale --> no permiten asientos desbalanceados, no habrá diferencias.
- Para quienes utilizan la gestión de Control de la Contabilidad de gestión<!-- Controlling della Contabilità gestionale -->, es posible introducir una línea de configuración sin un centro específico, pero solo con la dimensión de los centros y, opcionalmente, también la categoría de centro que se quiere valorizar para esa cuenta: el usuario encontrará en el registro la línea valorizada con el centro vacío y, al desplegar la lista, sólo tendrá visibilidad de los centros de la dimensión (y de la categoría, si está definida) correspondiente.
:::

La conexión al plan de cuentas<!-- Piano dei conti --> es solo uno de los puntos disponibles para conectar los centros: según los casos, las dimensiones a valorizar y las lógicas a aplicar, podría ser útil proceder a la asociación de *Centros empresariales<!-- Centri aziendali -->* en otros maestros de ***FluentisERP***. De hecho, podemos asociar centros a:
- Maestros de artículos
- Maestros de clientes/proveedores/agentes
- Empleados y categorías de actividad del personal, de uso en el área de Proyectos
- Maestro de almacenes<!-- magazzini -->
- Maestros de activos fijos

:::tip Nota
Cada módulo del ciclo activo/pasivo, en su respectiva pantalla de configuración de parámetros, prevé la definición del orden lógico de búsqueda de los centros para valorizar la línea individual de artículo en el documento de turno, así como la definición de cómo comportarse en los diversos procesos de creación de datos de un módulo a otro (por ejemplo, cómo actuar en la liquidación de un pedido o en la generación de facturas desde remitos<!-- ddt -->).
Estas configuraciones también deben evaluarse atentamente para definir el punto correcto de valorización de los datos en el ciclo documental.
:::

Otra característica importante a definir a nivel del plan de cuentas<!-- piano dei conti --> es la del uso o no del dato contable en las elaboraciones de Control: algunos ejemplos pueden aclarar la necesidad de configurar la opción *No utilizar en el controlling* con los eventuales criterios de ajuste.
En el plan de cuentas<!-- piano dei conti --> tendremos ante todo una serie de costes reconocidos de manera diferida: el caso típico es el coste del consejo de vigilancia, que debe estimarse al inicio del año para el controlling, pero que se ajustará al final del año cuando esté el dato final registrado contablemente<!-- contabilmente -->.
O bien la empresa podría decidir utilizar la amortización legal/fiscal de la contabilidad<!-- contabilità --> también en las evaluaciones para la contabilidad de gestión, en lugar de introducir una lógica de amortización técnica extra contable.
O los costos de personal, cuando contablemente<!-- contabilmente --> no se reconocen periódicamente las partidas de provisiones que se manifiestan en determinados períodos del año (como en los meses de reconocimiento de aguinaldos o pagos adicionales).