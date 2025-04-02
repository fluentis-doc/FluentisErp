---
title: Escenario de gestión de agentes - ejemplos (Scenario gestione agente - esempi)
sidebar_position: 5
---

En esta página, ilustramos algunos ejemplos para componer un posible escenario de gestión de agentes.

Este tipo de recorrido es útil para entender los vínculos entre las diversas funcionalidades y hacer algunos ejemplos de criterios de cálculo.

Seguiremos esta secuencia:

- Definición de las franjas de comisiones
- Creación del registro del agente y su configuración relacionada
- Vinculación con los clientes
- Creación de documentos de venta
- Cobro de las facturas
- Control de la maduración de las comisiones
- Liquidación de agentes
- Gestión de las compensaciones de los agentes
- Pagos a Enasarco y retenciones a cuenta (breves)
- Elaboración de la certificación de las retenciones a cuenta (breves)

## Definición de las franjas de comisiones (Definizione delle fasce provvigionali)

Uno de los criterios de cálculo de comisiones más utilizados, y desde el punto de vista didáctico, más interesante que los clásicos como un porcentaje fijo o un porcentaje según el cliente, está representado por las *fasce di sconto*.

Prácticamente se quiere definir comisiones decrecientes a medida que aumenta el descuento que el agente concede al cliente.

La particularidad en la configuración de este criterio, en comparación con los más simples, radica en la necesidad de definir previamente franjas de descuento conectadas con sus respectivas porcentajes de comisiones.

Primero, entonces, gestionamos la tabla **definizione fasce provvigionali** (poner enlace).

:::important[Importante]
**Prestar atención al encabezado del formulario**: se recomienda configurarlo siempre visible con el botón de anclaje en la parte superior derecha. El encabezado, de hecho, contiene un filtro fundamental para la gestión de la tabla: [***rango de descuento***](/docs/configurations/tables/sales/discount-range).

La tabla conectada simplemente permite la definición de los tipos habilitados, definiendo el código y la descripción y relacionándolo con un criterio predefinido entre los presentes, pero **en el encabezado del formulario en cuestión es necesario seleccionar un rango de descuento** para poder ver o gestionar el detalle relacionado con el rango elegido.
:::

Respecto al rango de descuento elegido, que puede ser de tipo *Único* (simple), o en función de las *clases* de artículo, de la *tipología* del artículo o de una *característica* suya (todos los campos presentes en la base de datos y relacionados con el artículo y, por tanto, valorables), o bien a una categoría comercial a la que el artículo pertenezca, o a un listado de precios en el que esté incluido el artículo, podemos definir los detalles.

Si no seleccionamos ningún rango de descuento, la búsqueda producirá datos en solo lectura (no modificables, en gris).

En función del rango de descuento, aparecerá un filtro adicional (desplegable) específico, siempre en el encabezado.

A este punto, si por ejemplo hubiéramos establecido un rango de descuento sobre la categoría comercial y, por supuesto, tuviéramos en el sistema nuestras categorías (por ejemplo, tornillería, utensilios, etc.), para cada una de estas categorías visualizadas en la cuadrícula de la izquierda de nuestro formulario, podríamos definir, en el panel de la derecha, las franjas de comisiones.

Se procede ingresando un código y una descripción, por ejemplo, de la franja de ningún descuento al 10%, podemos codificarla como 010 y en la descripción definirla libremente como "de 0 a 10%"; en este punto, en los dos campos siguientes, definimos los dos porcentajes del rango, en el primero 0 y en el segundo 10.

:::important[Importante]
Prestar especial atención a cómo se definen los tramos, sin dejar vacíos, teniendo en cuenta, como se ve en las etiquetas, que el rango va de un valor **mayor o igual a**... a un valor **menor que**...
:::

En el siguiente campo **Valor**, definimos la **comisión** del agente relacionada con la franja/rango establecido y en la última columna seleccionaremos la opción **Porcentaje** (Percentuale), ya que nos referimos a porcentajes de comisiones, pero también podríamos cambiar a la opción *Valor* y utilizar el campo del Valor de la comisión en sentido absoluto.

Si hubiéramos elegido un criterio de descuento Único, no tendríamos en la izquierda ningún detalle y iríamos directamente a definir las franjas con los rangos porcentuales válidos siempre.

![](/img/it-it/sales/agents/definizione-fasce-provvigionali.png)

En la imagen, el 35% de descuento corresponde a una comisión del 3%.

## Creación del registro del agente y su configuración relacionada (Creazione anagrafica agente e relativa configurazione)

En la creación del registro del agente, de la cual retomamos solo los campos más importantes para el ejemplo, remitiendo a las [**páginas relacionadas**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) para las fases básicas de creación del registro, después de haber ajustado el [**criterio de maduración de las comisiones**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/settlement), como por ejemplo a pedido confirmado, o a factura emitida, o aún a pago realizado (definitivamente el más utilizado que reconoce la comisión en proporción a lo cobrado) y otros campos de interés fiscal y previsional como la **categoría del agente y la retención a cuenta** (o régimen de exención), nos ocupamos del cálculo de la comisión (el valor de la comisión) y lo vinculamos, por ende, al criterio mencionado.

En la pestaña [**Comisiones directas**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions), además de los campos para un fijo remunerado y un porcentaje general de comisión para el agente en cuestión, tenemos la cuadrícula de la derecha, donde seleccionaremos el criterio de las **Franjas de descuento**.

**Prestar atención al campo de Prioridad** también por el hecho de que por defecto el registro se inicializa con el criterio Registro del agente y prioridad 1. Debemos eliminar este criterio, o mejor aún, ponerlo con una prioridad más baja, por ejemplo 2, y con prioridad 1 nuestra *fasce di sconto*. De esta forma, si el criterio específico que nos interesa no se aplica en el caso concreto, tendremos un criterio residual que atribuira el porcentaje escrito en el registro del agente en el campo adyacente del que hemos hablado.

:::danger[Atención]
Con un criterio "articulado" como *Franjas de descuento* y varios otros, **es necesario definir el detalle presionando el botón en la barra de herramientas *Detalle de porcentajes seleccionados***.
:::

![](/img/it-it/sales/agents/provvigioni-dirette.png)

**En la máscara que se abre, es necesario seleccionar nuevamente el rango de descuento de referencia para obtener la aparición de las franjas de comisiones.**

El sentido de haber presionado el botón y abierto esta máscara es que veremos cargadas las franjas que ya hemos definido. Estas franjas son, por tanto, entendidas como estándar.

Por lo tanto, podemos aceptar el estándar para este agente y no hacer ninguna modificación, o, a través del botón de opción **provvigioni***, cambiar la lectura a **personalizzate**. Entonces, la columna **Valor** se vuelve **modificable** y podemos definir valores válidos solo para ese agente.

También tenemos el botón de opción ***Precio de referencia*** con el cual definimos si el precio de referencia para el cálculo debe ser el del registro de artículo o el específico definido en la línea del documento de venta.

:::danger[Atención]
Recordemos definir también el rango de **Fechas de validez**, al menos el campo Desde la fecha de validez.
:::

![](/img/it-it/sales/agents/definizione-provvigioni.png)

## Vinculación con los clientes (Abbinamento con i clienti)

:::tip[Atención]
**En cualquier caso**, cualquiera que sea el criterio de cálculo que elijamos, **el agente debe estar vinculado con los clientes** sobre los cuales deberá madurar comisión.

Se puede vincular más de un agente a cada cliente.
:::

Para la vinculación, como alternativa a abrir los distintos registros de clientes e insertar el agente en la pestaña [**Agentes**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents), se nos ayuda la herramienta presente en la máscara **Asignación de Agentes** (Inicio > Contactos > Asignación de agentes).

Aquí se puede iniciar la búsqueda (dotada de varios filtros en el encabezado) que muestra todos los clientes y, al pasar de una línea a otra, visualizar, para cada cliente, los agentes que pudieran estar ya asociados.

Por lo tanto, el procedimiento resulta útil también y sobre todo para el mantenimiento, por ejemplo, en los casos de cese de un agente y reemplazo por otro.

El botón de **adición**, en la barra de herramientas, permite insertar nuestro nuevo agente en todos los clientes deseados.

Los otros botones nos permiten, intuitivamente, realizar otras maniobras como reemplazo, cancelación, actualización de fechas de validez, etc., en los casos mencionados de reemplazos y ceses, etc.

También es posible, de esta manera masiva, insertar el porcentaje de comisión referida a cada cliente, pero no es el caso de nuestro ejemplo donde razonamos en base a la política de descuentos.

## Creación de documentos de venta (Creazione dei documenti di vendita)

El cálculo de la comisión en documentos como el pedido, la guía y la factura (se informa en los pasos de creación del documento siguiente a la anterior) se lleva a cabo automáticamente en base a las configuraciones definidas arriba; el valor del descuento que determina el valor de la comisión puede ocurrir de varias maneras sin representar un problema para el cálculo de la comisión.

Se remite a los procedimientos de la [**definición de descuentos**](/docs/sales/price-control/definition/) del área de Ventas.

Nota: en el encabezado de los documentos de venta se destaca el agente o los agentes vinculados, pero para controlar el valor de la comisión calculada (ya a partir del documento en cuestión), es necesario trasladarse a la pestaña [**Artículos**](/docs/sales/sales-invoices/invoicing/sales-invoice#agenti).

## Cobro de las facturas (Incasso delle fatture)

En nuestro ejemplo, hemos configurado una maduración a **pago realizado**, por lo tanto, para poder proceder a la liquidación de la comisión, previa verificación de su maduración, **releva la registro contable de cierre de la** (o las) **partida abierta** que se ha generado con la [contabilización](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) de la factura de venta.

Nota: se recuerda que en caso de cobro mediante recibo bancario se considera la fecha efectiva de **maduración** del efecto, fecha que podría verse incrementada de acuerdo con un parámetro presente en el módulo [Riesgo del Cliente](/docs/configurations/parameters/treasury/customer-risk-parameters).
(N. días después de la fecha de vencimiento para efectos presentados al salvo buen fin - N. días después de la fecha de vencimiento para efectos presentados al después de cobro)

## Control de la maduración de las comisiones (Controllo maturazione delle provvigioni)

Para la verificación de la maduración de las comisiones y, por tanto, la posibilidad de liquidarlas y los resultados esperados, siempre considerando el criterio elegido sobre el pago realizado (que hace importante esta verificación), podemos utilizar el informe de referencia, [**Comisiones acumuladas**](/docs/sales/agents/reports/accrued-commissions).

De hecho, el informe es capaz de representar en vista previa lo que ha madurado y el valor de liquidación que generaremos y luego liquidaremos a través de la conversión en un pago para el agente (el agente es, por sí mismo, un receptor a la espera de las retenciones a cuenta).

Otros informes del módulo, en cambio, son útiles para verificar con más detalle las cantidades teóricamente debidas pero no necesariamente acumuladas, tales como [**Recibos de agentes**](//docs/sales/agents/reports/agents-payslip).

## Liquidación de agentes (Liquidazione agenti)

El procedimiento de [**Creación automática de liquidación de comisiones**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement) permite procesar el cálculo y considerar las comisiones que serán incluidas como liquidables.

A partir de ese momento, estas comisiones ya no serán visibles al realizar la impresión de [**Comisiones acumuladas**](/docs/sales/agents/reports/accrued-commissions), la cual continuará mostrando eventuales saldos en caso, por ejemplo, de pagos parciales de las partidas abiertas o, de todos modos, de pagos parciales de las facturas involucradas.
Estos saldos serán, evidentemente, liquidables y se incluirán en una liquidación posterior en el momento en que las respectivas partidas se cierren mediante un registro contable de cobro. Recordemos que nuestro ejemplo prevé el criterio del pago realizado (Pro-rata en relación a los cobros) y que son posibles criterios diferentes como la simple emisión de la factura, que haría que las comisiones se consideraran inmediatamente acumuladas, o criterios aún más restrictivos como el **pago total** (disponible solo si las comisiones se gestionan con el [**módulo administrativo**](/docs/finance-area/maturity-values/maturity-values/commissions)).

:::note[Nota]
Con el método de *pago realizado*, la selección de las comisiones a liquidar siempre será "todo" *hasta la fecha*, no es posible seleccionar lo que se ha acumulado en un rango específico de fechas y no está previsto un vínculo con el campo de periodicidad de liquidación presente en el registro del agente.

Los rangos de filtro presentes en la y están referidos a las fechas de pedidos/guias/facturas, no a las fechas de **pago**.

Esto es necesario porque mientras que para los documentos no hay manera de agregar nuevos/modificar en períodos ya liquidados, el discurso es diferente para los pagos: nada impide crear un pago con una fecha de registro en un período ya cerrado en un cálculo de liquidación de agentes (quizá porque no se han reconciliado los bancos o se ha cometido un error en un registro antiguo), por lo tanto, el dato "se perdería" en los cálculos posteriores.
:::

Dado que en la cuadrícula de selección de agentes a la izquierda aparece visible el criterio de maduración (para memoria) en caso de que sea necesario trabajar liquidando las comisiones en relación a un periodo de referencia determinado de los documentos emitidos, con criterios diferentes al pago realizado (véase la nota anterior), es posible utilizar los filtros sobre las fechas de los documentos presentes en el área derecha del formulario.

Después de seleccionar los agentes, también por grupos en relación a posibles criterios diferentes de maduración y, por tanto, necesidades de filtrado de documentos, se solicita, en la parte inferior derecha, establecer una descripción de la liquidación, la fecha se propone como fecha actual y no influye en el filtraje de datos; solo distingue la fecha de elaboración de la liquidación. Finalmente, es necesario completar el mes y el año de competencia de la liquidación para el cálculo de la mínima y máxima contribución a Enasarco.

Es bueno prestar atención a la compilación del periodo, ya que, por ejemplo (en caso de imputación incorrecta), si en un trimestre determinado no se encuentren comisiones liquidadas al agente (por ejemplo, porque se imputaron erróneamente al periodo siguiente), el software asignará de todos modos una liquidación de solo contribuciones a cargo de la empresa que deben ser pagadas.

Al realizar el cálculo, el software devuelve un mensaje de confirmación o una advertencia referida a los agentes para los cuales no se encontraron comisiones a liquidar.

Al final, en caso de querer realizar controles, es posible [**abrir la liquidación**](/docs/sales/agents/agent-settlement/insert-settlement) haciendo doble clic después de haberla [**buscado**](/docs/sales/agents/agent-settlement/search-agent-settlement).

Dentro, es posible obtener la lista de las facturas consideradas para la liquidación, para ello, debe trasladarse a la pestaña **fatture** y presionar el botón en la barra de herramientas **Buscar**.

El resultado se representa en las dos cuadrículas inferiores, de las cuales la primera muestra las facturas consideradas (a nivel de datos de encabezado) y la segunda el detalle de las líneas de factura con las respectivas comisiones.

:::danger[Atención]
se trata del valor de las comisiones **teóricamente calculadas** sobre las líneas individuales de la factura, no necesariamente acumuladas en la liquidación de la cual el valor total podría diferir ya que han sido cobros parciales.

En el caso de pagos parciales de una partida, donde el saldo, por ejemplo, se salda en un periodo posterior, la primera liquidación que incluya la primera cuota del pago se visualizará en el detalle con el valor de toda la comisión, mientras que la liquidación que incluya la cuota restante siempre mostrará la referencia a la factura en la cuadrícula superior, pero estará vacía en la cuadrícula inferior.

Está previsto el lanzamiento de un campo adicional que indique lo que efectivamente se ha incluido en la liquidación.
:::

## Gestión de las compensaciones de los agentes (Gestione dei compensi agenti)

Dentro de la liquidación ya se han insertado los datos relativos a la retención a cuenta y las cuotas a cargo del agente (por retener y pagar en su nombre) y a cargo de la empresa mandante del contribución a Enasarco.

En este punto, utilizando el procedimiento adecuado, desde la liquidación [**creamos la compensación**](/docs/sales/agents/procedures/create-professional-man-commission).

La compensación creada automáticamente será buscable en el módulo administrativo de [**Compensaciones percibiendo**](/docs/finance-area/professional-men/search-compensations/search-compensations-intro).

## Pagos a Enasarco y retenciones a cuenta (Versamenti Enasarco e ritenute d'acconto)

La inserción automática en el módulo percibiendo a través de la compensación también permite la [**gestión del pago**](/docs/finance-area/professional-men/accounting/payments-accounting/payments-accounting-intro), ya sea que el agente haya emitido una factura o que esta sea proforma, y gestiona automáticamente la deuda con el fisco por el [**pago de la retención a cuenta**](/docs/finance-area/professional-men/procedures/model-f24/f24-management).

El procedimiento específico para la [**contabilización de la contribución de Enasarco**](/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro) a pagar (tanto a cargo de la empresa como a cargo de la cuota a cargo del agente) realiza la escritura contable que registra el costo y la deuda; el pago físico y la respectiva escritura contable deben realizarse manualmente.

## Elaboración de la certificación de las retenciones a cuenta (Elaborazione della certificazione delle ritenute d'acconto)

El recorrido concluye con [**la elaboración de la certificación para las retenciones a cuenta**](/docs/finance-area/declarations/declarations/withholding-tax-certification) realizadas hacia el agente.

Estamos ya en el módulo administrativo y se trata de gestionar un cumplimiento de tipo fiscal, por lo que remitimos a los detalles. La mención es útil para hacer entender cómo el área de ventas y administrativa están conectadas en este caso en función de las características del agente, quien, además de las necesidades de cálculo de las comisiones, sufre retenciones a cuenta y, por ende, se hace parte de la gestión de los profesionales percibiendo.