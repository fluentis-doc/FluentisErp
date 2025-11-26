---
title: Escenario de gestión de agentes - ejemplos
sidebar_position: 5
ai_generated: true
---

En esta página ilustramos algunos ejemplos para componer un posible escenario de gestión de agentes<!-- gestione agente -->.

Este tipo de recorrido es útil para comprender las conexiones entre las diversas funcionalidades y realizar algunos ejemplos de criterios de cálculo.

Seguiremos la siguiente secuencia:

- Definición de rangos para comisiones<!-- fasce provvigionali -->
- Creación de la ficha de agente y su configuración
- Asociación con los clientes<!-- clienti -->
- Creación de los documentos de venta
- Cobro de las facturas<!-- fatture -->
- Control de maduración de las comisiones<!-- provvigioni -->
- Liquidación de agentes
- Gestión de los pagos de agentes<!-- compensi agenti -->
- Pagos Enasarco y retenciones en la fuente (mención)
- Elaboración de la certificación de las retenciones en la fuente (mención)

## Definición de rangos para comisiones<!-- Definizione delle fasce provvigionali -->

Uno de los criterios de cálculo de comisiones<!-- provvigioni --> más utilizados y, desde el punto de vista didáctico, más interesante que los clásicos como un porcentaje fijo o un porcentaje según el cliente, está representado por las *Bandas de Descuento<!-- Fasce di sconto -->*.

Se quiere, en la práctica, definir comisiones<!-- provvigioni --> decrecientes a medida que aumenta el descuento que el agente concede al cliente.

La particularidad en la configuración de este criterio, respecto a los más sencillos, radica en la necesidad de definir previamente rangos de descuento vinculados a los correspondientes porcentajes de comisión<!-- percentuali provvigionali -->.

Por lo tanto, en primer lugar gestionamos la tabla **Definición rangos de comisiones<!-- Definizione fasce provvigionali -->** (agregar enlace).

:::important[Importante]
**Preste atención al encabezado de la ventana**: se recomienda dejarlo siempre visible con el botón pin en la parte superior derecha. De hecho, el encabezado contiene un filtro fundamental para la gestión de la tabla: [***rango de descuento***](/docs/configurations/tables/sales/discount-range).<!-- range sconto -->

La tabla relacionada permite simplemente la definición de los tipos habilitados, especificando el código y la descripción y vinculándolos a un criterio predefinido entre los presentes, pero **en el encabezado de la ventana mencionada se debe seleccionar un rango de descuento** para poder ver o manejar el detalle relativo al rango elegido.
:::

Con respecto al rango de descuento seleccionado, que puede ser de tipo *Único* (simple), o bien en base a las *clases* del artículo, *tipo* de artículo, o a alguna de sus *características* (todos campos presentes en la base de datos y relacionados al artículo y por lo tanto valores posibles), o bien a una categoría comercial<!-- categoria merceologica --> a la que pertenezca el artículo, o también a una lista de precios de venta en la que el artículo esté registrado, podemos definir los detalles.

Si no seleccionamos ningún rango de descuento, la búsqueda arrojará datos solo de lectura (no modificables, en gris).

Según el rango de descuento, aparecerá un filtro adicional (desplegable), siempre en el encabezado.

En este punto, si por ejemplo hubiésemos configurado un rango de descuento sobre la categoría comercial<!-- categoria merceologica --> y, por supuesto, tuviéramos nuestras categorías en el sistema (ej. tornillería, herramientas, etc.), para cada una de estas categorías que se muestran en la cuadrícula de la izquierda de nuestra ventana, podríamos definir en el panel derecho los rangos de comisiones<!-- fasce provvigionali -->.

Se procede ingresando un código y descripción, por ejemplo, el rango de ningún descuento hasta el 10% podemos codificarlo como 010 y en la descripción, definir libremente "de 0 a 10%", a continuación en los dos campos siguientes se definen los dos porcentajes del rango, en el primero 0 y en el segundo 10.

:::important[Importante]
Preste especial atención a cómo se definen los tramos, sin dejar huecos, teniendo en cuenta, como se ve en las etiquetas, que el rango va desde un valor **mayor o igual** a... hasta un valor **menor** que...
:::

En el siguiente campo **Valor** se define la **comisión<!-- provvigione -->** del agente relativa al rango/intervalo definido, y en la última columna se seleccionará el elemento **Porcentaje**, ya que nos referimos a porcentajes de comisión<!-- percentuali provvigionali -->, pero también podríamos conmutar a la opción *Valor* y utilizar el campo Valor de la comisión en valor absoluto.

Si hubiésemos elegido un criterio de descuento Único, no tendríamos ningún detalle a la izquierda y pasaríamos directamente a definir los rangos con los intervalos porcentuales siempre válidos.

![](/img/it-it/sales/agents/definizione-fasce-provvigionali.png)

En la imagen, el 35% de descuento corresponde a una comisión<!-- provvigione --> del 3%

## Creación de la ficha de agente y su configuración<!-- Creazione anagrafica agente e relativa configurazione -->

En la creación de la ficha del agente<!-- anagrafica dell'agente -->, de la que retomamos solo los campos más importantes a efectos del ejemplo, remitiendo a las [**páginas correspondientes**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) para las fases básicas de la creación de la ficha, después de haber configurado el [**criterio de maduración de las comisiones**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/settlement), como por ejemplo a pedido confirmado, o bien a factura emitida, o también a pago realizado (claramente el más utilizado porque reconoce la comisión en proporción al cobrado) y los demás campos de interés fiscal y previsional como la **categoría de agente y la retención en la fuente** (o régimen de exención), nos ocupamos del cálculo de la comisión (el valor de la comisión) y asociamos por tanto el criterio mencionado.

En la pestaña [**Comisiones directas**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions) además de los campos para una cantidad fija retribuida y un porcentaje general de comisión para el agente en cuestión, tenemos la cuadrícula a la derecha, donde vamos a seleccionar el criterio de **Bandas de descuento<!-- Fasce di sconto -->**.

**Preste atención al campo Prioridad** también debido a que por defecto la ficha se inicializa con el criterio Ficha de agente y prioridad 1. Debemos eliminar este criterio, o mejor aún colocarle una prioridad más baja, por ejemplo 2, y con prioridad 1 nuestro *Bandas de descuento<!-- Fasce di sconto -->*. Así, si el criterio específico que nos interesa no pudiera aplicarse en el caso concreto, tendremos un criterio residual que asignará el porcentaje escrito en la ficha del agente en el campo adyacente mencionado.

:::danger[Atención]
Con un criterio "complejo" como *Bandas de descuento<!-- Fasce di sconto -->* y muchos otros, **es necesario definir el detalle presionando el botón en la ribbon bar *Detalle porcentajes seleccionados***.
:::

![](/img/it-it/sales/agents/provvigioni-dirette.png)

**En la ventana que se abre es necesario seleccionar nuevamente el rango de descuento de referencia para que aparezcan los rangos de comisiones<!-- fasce provvigionali -->.**

El sentido de haber presionado el botón y abierto esta ventana es que veremos cargados los rangos que ya hemos definido. Estos rangos deben considerarse como estándar.

Por lo tanto, podemos aceptar el estándar para este agente, y así no hacer modificaciones, o bien, usando el radio button ***Comisiones<!-- Provvigioni -->***, cambiar la lectura a **Personalizado**. Así la columna **Valor** se convierte en **editable** y podemos definir valores válidos solo para ese agente.

También está el radio button ***Precio de referencia*** con el que definir si el precio de referencia para el cálculo debe ser el registrado en la ficha del artículo, o bien el específico definido en la línea del documento de venta.

:::danger[Atención]
Recuerda definir también el rango de **Fechas de validez**, al menos el campo Desde fecha de validez
:::

![](/img/it-it/sales/agents/definizione-provvigioni.png)

## Asociación con los clientes<!-- Abbinamento con i clienti -->

:::tip[Atención]
**En cualquier caso**, sea cual sea el criterio de cálculo que elijamos, **el agente debe estar vinculado a los clientes<!-- clienti -->** sobre los que debe generar comisiones.

En cada cliente se puede asociar más de un agente.
:::

Para el enlace, como alternativa a abrir las diferentes fichas de cliente y agregar el agente en la pestaña [**Agentes**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents), nos resulta muy útil la herramienta presente en la ventana **Asignación de agentes** (Inicio>Contactos>Asignación de agentes).

Aquí es posible iniciar la búsqueda (con varios filtros en el encabezado) que muestra todos los clientes y al pasar de una fila a otra, para cada cliente, los agentes ya asociados eventualmente.

Por tanto, el procedimiento resulta útil también y sobre todo para el mantenimiento, por ejemplo en caso de cese de un agente y sustitución por otro.

El botón de **agregar**, en la ribbon bar, nos permite agregar nuestro nuevo agente a todos los clientes deseados.

Los otros botones nos permiten, de forma intuitiva, las demás operaciones como sustitución, eliminación, actualización de fechas de validez, etc., en los casos antes mencionados de sustituciones y ceses, etc.

También es posible ingresar de forma masiva el porcentaje de comisión correspondiente a cada cliente, pero no es el caso de nuestro ejemplo, donde razonamos en base a los descuentos.

## Creación de los documentos de venta

El cálculo de la comisión en documentos como pedidos, albaranes y facturas (se transfiere en los pasos de creación del documento siguiente a partir del anterior) se realiza automáticamente según la configuración definida anteriormente, el valor del descuento que determina el valor de la comisión puede otorgarse de varias maneras sin representar un problema para el cálculo.

Consulte los procedimientos de la [**definición de descuentos**](/docs/sales/price-control/definition/) del área de Ventas.

Nota: en el encabezado de los documentos de venta se muestra el agente o los agentes vinculados, pero para revisar el valor de la comisión calculada (ya desde el documento en cuestión) es necesario ir a la pestaña [**Artículos**](/docs/sales/sales-invoices/invoicing/sales-invoice)

## Cobro de las facturas

En nuestro ejemplo, hemos establecido una maduración a **pago realizado**, por lo tanto, a los efectos de poder proceder a la liquidación de la comisión, previa verificación de su maduración, **es relevante el registro contable de cierre de la** (o las) **partida abierta<!-- partita aperta -->** que se genera con la [contabilización](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) de la factura de venta.

Nota: recuerde que en caso de cobro mediante recibo bancario es relevante la fecha real de **maduración<!-- maturazione -->** del efecto, fecha que podría incrementarse según un parámetro presente en el módulo [Riesgo Cliente](/docs/configurations/parameters/treasury/customer-risk-parameters).
(N° días después del vencimiento para efectos presentados 'salvo buen fin' - N° días después del vencimiento para efectos presentados 'después del cobro')

## Control de maduración de las comisiones<!-- Controllo maturazione delle provvigioni -->

Para verificar la maduración de las comisiones<!-- provvigioni --> y por tanto la posibilidad de liquidarlas y los resultados esperados, siempre considerando el criterio elegido según pago realizado (lo que hace importante esta verificación), podemos usar el informe de referencia, [**Comisiones generadas**](/docs/sales/agents/reports/accrued-commissions).

De hecho, el informe puede mostrar en vista previa lo que ya ha sido devengado y el valor de la liquidación que generaremos y luego liquidaremos mediante la conversión en un pago de perceptor (el agente es por sí mismo un perceptor en relación a las retenciones en la fuente<!-- ritenute d'acconto -->).

Otros informes del módulo son útiles para verificar en más detalle los importes teóricamente debidos pero no necesariamente generados, como los [**recibos de agentes**](//docs/sales/agents/reports/agents-payslip).

## Liquidación de agentes

El procedimiento de [**Creación automática de liquidación de comisiones**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement) permite elaborar el cálculo y considerar liquidadas las comisiones que se incluirán.

A partir de ese momento estas comisiones no serán ya visibles al ejecutar el informe [**Comisiones generadas**](/docs/sales/agents/reports/accrued-commissions), el cual seguirá mostrando eventuales saldos pendientes en caso, por ejemplo, de pagos parciales de las partidas abiertas o de pagos parciales de las facturas afectadas.
Estos saldos podrán liquidarse en una liquidación posterior en el momento en que las respectivas partidas queden cerradas mediante una contabilización de cobro. Recordamos que nuestro ejemplo prevé el criterio de pago realizado (proporcional al cobro) y que existen criterios distintos como la simple emisión de la factura, lo que haría que las comisiones maduren inmediatamente, o bien criterios aún más restrictivos como el **pago total** (disponible solo si las comisiones se gestionan con el [**módulo administrativo**](/docs/finance-area/maturity-values/maturity-values/commissions)).

:::note[Nota]
Con el método de *pago realizado* la selección de las comisiones a liquidar será siempre "todo" *hasta la fecha*, no es posible seleccionar lo que ha devengado en un rango específico de fechas y no está previsto un enlace con el campo de periodicidad de liquidación presente en la ficha del agente.

Los rangos de filtro disponibles en el procedimiento se refieren de hecho a las fechas de pedidos/albaranes/facturas, no a nivel de fechas de **pago**.

Esto es necesario porque mientras en los documentos no hay forma de añadir nuevos o modificar en periodos ya liquidados, la situación es diferente para los pagos: nada impide crear un pago con fecha de registro en un periodo ya cerrado en un cálculo de liquidación de agentes (quizás porque no se reconciliaron los bancos o se cometió un error en un registro antiguo), por lo que el dato se "perdería" en los cálculos posteriores.
:::

Dado que en la cuadrícula de selección de agentes a la izquierda se muestra el criterio de maduración (como recordatorio), en caso de requerir trabajar liquidando las comisiones en relación a un determinado periodo de referencia de documentos emitidos, con criterios diferentes a pago realizado (ver nota arriba), es posible usar los filtros sobre las fechas de documentos en la parte derecha del formulario.

Después de seleccionar los agentes, incluso por grupos en relación a posibles criterios de maduración diferentes y, por lo tanto, distintas necesidades de filtrado documental, en la parte inferior derecha se solicita establecer una descripción de la liquidación, la fecha se propone como la actual y no afecta al filtrado, solamente identifica la fecha de elaboración de la liquidación, finalmente es necesario cumplimentar el mes y año de la liquidación a efectos del cálculo del mínimo y máximo para la contribución Enasarco.

Es importante revisar el periodo introducido ya que, por ejemplo (en caso de error), si en un determinado trimestre no se encuentran comisiones liquidadas para el agente (por ejemplo, porque se atribuyeron erróneamente al periodo siguiente), el programa reservará igualmente una liquidación solo por los aportes a cargo de la empresa, que deberán pagarse.

Al ejecutar el cálculo, el programa devuelve un mensaje de confirmación o un aviso respecto a los agentes para los que no se encontraron comisiones a liquidar.

Al final, si se desean efectuar controles, es posible [**abrir la liquidación**](/docs/sales/agents/agent-settlement/insert-settlement) haciendo doble clic después de [**buscarla**](/docs/sales/agents/agent-settlement/search-agent-settlement).

En su interior se puede obtener la lista de las facturas consideradas para la liquidación; para esto diríjase a la pestaña **Facturas** y pulse el botón **Buscar** en la ribbon bar.

El resultado se muestra en las dos cuadrículas inferiores, de las cuales la primera muestra las facturas consideradas (a nivel de datos de encabezado) y la segunda el detalle de las líneas de factura con las comisiones correspondientes.

:::danger[Atención]
Se trata del valor de las comisiones **calculadas teóricamente** sobre las líneas individuales de la factura, no necesariamente devengadas en la liquidación, cuyo valor total podría diferir por estar parcialmente cobradas.

En caso de pagos parciales de una partida<!-- partita -->, donde el saldo se liquide posteriormente, la primera liquidación que incluya la primera cuota del pago aparecerá en el detalle con el valor total de la comisión, mientras que la liquidación que incluya el saldo residual seguirá mostrando la referencia de la factura en la cuadrícula superior, pero estará vacía la inferior.

Está previsto lanzar un campo adicional que indique cuánto efectivamente se ha liquidado.
:::

## Gestión de los pagos de agentes<!-- Gestione dei compensi agenti -->

En la liquidación ya están incluidos los datos relativos a la retención en la fuente y a las cuotas a cargo del agente (a retener y transferir en su nombre) y a cargo de la empresa mandante para el aporte Enasarco.

En este punto, utilizando el procedimiento correspondiente, desde la liquidación [**creamos el pago**](/docs/sales/agents/procedures/create-professional-man-commission).

El pago creado automáticamente podrá buscarse en el módulo de administración de [**Pagos a perceptores**](/docs/finance-area/professional-men/search-compensations/search-compensations-intro).

## Pagos Enasarco y retenciones en la fuente

La inserción automática en el módulo perceptores a través del pago permite también la [**gestión del pago**](/docs/finance-area/professional-men/accounting/payments-accounting/payments-accounting-intro), tanto si el agente ha emitido factura como si es una proforma, y gestiona automáticamente la deuda con la Hacienda Pública por el [**pago de la retención en la fuente**](/docs/finance-area/professional-men/procedures/model-f24/f24-management).

El procedimiento específico para la [**contabilización de la contribución Enasarco**](/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro) a pagar (tanto a cargo de la empresa como retenido a cargo del agente) realiza el registro contable que reconoce el costo y la deuda. El pago físico y el correspondiente asiento contable deben realizarse manualmente.

## Elaboración de la certificación de las retenciones en la fuente<!-- Elaborazione della certificazione delle ritenute d'acconto -->

El recorrido finaliza con [**la elaboración de la certificación por las retenciones en la fuente**](/docs/finance-area/declarations/declarations/withholding-tax-certification) practicadas al agente.

Ya estamos en el módulo administrativo y se trata de gestionar una obligación fiscal, así que se remiten los detalles. La mención es útil para mostrar cómo el área de ventas y la administrativa están conectadas en este caso por las características del agente, quien, además de las necesidades de cálculo de comisiones<!-- provvigioni -->, sufre retenciones en la fuente y, por lo tanto, es gestionado en la administración de profesionales perceptores.