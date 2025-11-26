---
title: Crear cierres interanuales
sidebar_position: 3
ai_generated: true
---

El procedimiento permite crear nuevas simulaciones de balance interanual<!-- bilancio infrannuale -->.

El origen de los datos de partida es siempre la Contabilidad general<!-- Contabilità generale --> en el momento de la creación del cierre<!-- chiusura --> en sí: el programa toma los saldos de las distintas subcuentas<!-- sottoconti -->, según los parámetros de creación del cierre<!-- chiusura --> configurados en este formulario, para luego permitir la adición extra contable de todas las operaciones de anticipos, diferidos, amortizaciones y registros manuales con el fin de llegar a una simulación de balance incluyendo los ajustes y rectificaciones necesarios. La operación no tiene ningún efecto sobre los datos de contabilidad general de cara al cierre contable de fin de año: el módulo de cierres interanuales<!-- chiusure infrannuali --> se gestiona de hecho en tablas de base de datos totalmente separadas de la contabilidad general<!-- contabilità generale -->.

## Pestaña *General*<!-- Tab *Generale* -->

Indicador **Seleccionar datos por división**: si está activado, el campo previo de la división se convierte en un filtro para extraer de la contabilidad solo los datos de la división especificada.

**Año contable**: el año de referencia de los datos, sirve para identificar las cuentas predeterminadas de los asientos de ajuste y los periodos contables relativos.

**Excluir causal<!-- causale -->**: en caso de que se estén extrayendo los datos de un año contable completo ya cerrado, permite excluir los registros de cierre de cuentas y así obtener los datos de balance del ejercicio.

**Área**: el campo solo es visible en empresas que gestionan Controlling<!-- Controlling -->, se seleccionará el área de Informes de resultados a asociar al conjunto de datos en proceso.

### Sección **Reanudación de valores patrimoniales**<!-- Sezione **Ripresa valori patrimoniali** -->

El indicador de **Reanudación de movimientos de naturaleza patrimonial**, presente por defecto, habilita la sección de filtro inferior. Con esta opción, el ERP insertará en el cierre interanual<!-- chiusura infrannuale --> también los saldos de las subcuentas<!-- sottoconti --> vinculadas a los tipos de cuenta que tengan el indicador **Patrimonial activo** o **Patrimonial pasivo**.

La sección de filtros por fecha de registro<!-- data registrazione --> y fecha de competencia<!-- data competenza --> permite definir los rangos de fechas que se utilizarán para recuperar los datos patrimoniales de los registros del periodo definido.

:::tip NOTA
En particular, en caso de que aún no se haya registrado en contabilidad el cierre y reapertura de cuentas, la fecha de inicio debe retrotraerse a la fecha de la última apertura de cuentas detectada en contabilidad, para asegurar un dato patrimonial correcto.

Cabe considerar que, en este caso, habrá una diferencia entre el saldo patrimonial y el saldo económico del ejercicio en curso, correspondiente a la utilidad/pérdida del ejercicio anterior aún no reconocida en el cierre/reapertura de cuentas de la contabilidad general<!-- contabilità generale -->: al momento de la creación, Fluentis preguntará si se desea valorizar dicha diferencia en las cuentas de utilidad o pérdida predeterminadas en los parámetros de contabilidad, logrando así un registro equilibrado. Si esta opción no es utilizada, habrá un desajuste en el registro y, por tanto, para el correcto cierre, la causal deberá permitir la grabación de registros desequilibrados.
:::

En caso de que el cierre<!-- chiusura --> no prevea la reanudación patrimonial, nuevamente el registro de cierre interanual<!-- registrazione di chiusura infrannuale --> (solo de la sección económica) provocará un desajuste por la utilidad/pérdida del periodo.

### Sección **Reanudación de valores económicos**<!-- Sezione **Ripresa valori economici** -->

El indicador de **Reanudación de movimientos de naturaleza económica**, presente por defecto, habilita la sección de filtro inferior. Con esta opción, se insertan en el cierre interanual<!-- chiusura infrannuale --> los saldos de las subcuentas<!-- sottoconti --> vinculadas a los tipos de cuenta que tengan el indicador **Económico costos** o **Económico ingresos**.

La sección de filtros por fecha de registro<!-- data registrazione -->, competencia y documento permite definir los rangos de fechas que serán utilizados para recuperar los datos de los registros del periodo determinado.

:::tip NOTA
El rango de fechas documento, que no se propone por defecto, normalmente no se define: no todos los asientos contables, de hecho, presentan las fechas de documento en el encabezado (normalmente solo los registros de facturas de compra/venta).
:::

En caso de que el cierre<!-- chiusura --> no prevea la reanudación económica, el registro de cierre interanual<!-- registrazione di chiusura infrannuale --> (solo de la sección patrimonial) desbalanceará por la utilidad/pérdida del periodo.

### Sección **Datos de cierre de cuentas**<!-- Sezione **Dati chiusura conti** -->

La sección presenta los elementos identificativos que serán atribuidos a esta simulación de balance.

**Causal de cierre de cuentas<!-- Causale chiusura conti -->**: es la causal a utilizar para crear el registro de reanudación de saldos. Se recuerda que dicha causal debe tener los indicadores cdc/cdp/proyectos para que estos elementos sean considerados en el propio cierre interanual<!-- Chiusura infrannuale -->.

**Fecha de cierre<!-- Data chiusura -->**: es la fecha de creación de esta simulación, que se utilizará como fecha del registro extracontable del propio cierre<!-- chiusura --> y para los demás registros. No tiene ninguna validez particular.

**Número de cierre<!-- Numero chiusura -->**: es el número progresivo del cierre<!-- chiusura -->, propuesto automáticamente por el sistema.

**Descripción del cierre<!-- Descrizione chiusura -->**: es la descripción que aparecerá en todas las pantallas del módulo de Cierres interanuales<!-- Chiusure infrannuali -->, así como en el de Balance y Presupuesto. Se recomienda describir claramente los rangos de fechas configurados para identificar el periodo simulado al seleccionar el cierre<!-- chiusura --> en los diferentes procedimientos del área de Controlling<!-- Controlling -->.

**Competencia económica desde/hasta**: este rango de fechas es obligatorio para poder proseguir con la creación del cierre interanual<!-- chiusura infrannuale -->. Indica el periodo de competencia económica en cuestión: será tomado como referencia para el cálculo de los asientos de ajuste/integración, para el cálculo de la reanudación de amortizaciones del periodo y, en general, para los diferentes procedimientos siguientes. Por ejemplo, si se han reanudado los registros del primer semestre del ejercicio X y se ha insertado el mismo semestre como rango de fechas de competencia económica, con los procedimientos de ajuste el programa verificará si existen filas en contabilidad con rango de competencia fuera de este semestre para detectar el correspondiente diferido.

### Sección **Opciones de cierre**<!-- Sezione **Opzioni chiusura** -->

**Cierre por proyecto<!-- Chiusura per commessa -->**: marcando este indicador, el programa creará un registro de cierre interanual<!-- registrazione di chiusura infrannuale --> para cada proyecto<!-- commessa --> de venta que haya sido valorado en los registros contables del periodo de filtro establecido. Se recuerda que la causal de cierre interanual<!-- causale di chiusura infrannuale --> debe prever la gestión de proyectos<!-- commesse/progetti --> para gestionar sus datos.

**Considerar registros provisionales**: marcando este indicador, la reanudación de los datos desde la contabilidad considerará también los registros contables con estado 'provisionales'.

### Valores calculados

Esta sección muestra los totales patrimoniales/económicos calculados desde el primer registro de cierre<!-- registrazione di chiusura --> realizado.

(con el indicador **Cierre por proyecto<!-- Chiusura per commessa -->** esta sección visualizará solo los datos del primer proyecto<!-- commessa --> identificado en el periodo).

### Rectificaciones e integraciones

La sección permite gestionar automáticamente, después del registro de reanudación de datos interanuales<!-- ripresa dati infrannuale -->, los correspondientes registros de rectificación e integración.

:::note Nota
Este tipo de asientos de ajuste se realiza automáticamente solo para los movimientos de subcuentas<!-- sottoconti economici --> económicas vinculadas a un tipo de cuenta que tenga marcado el indicador *Servicio*.
:::

La referencia de las rectificaciones/integraciones es el **rango de fechas de competencia** insertadas en los registros de movimientos principales (y en los centros de costos/beneficio para la parte analítica).

**Asientos de rectificación automáticos**: al marcar el indicador, se activará la sección de rectificaciones automáticas, es necesario configurar la causal<!-- causale --> que gestionará la operación. También aquí, para rectificar los movimientos de cdc/cdp, la causal debe estar configurada para gestionar estos datos.

Los ajustes recomendados prevén la opción **agrupar por registro** y sobre todo el uso del **calendario solar**.

:::tip Nota
Las subcuentas<!-- sottoconti --> de diferidos que se utilizarán serán aquellas insertadas en el plan de cuentas junto a cada subcuenta<!-- sottoconto --> de costo/ingreso, o bien la subcuenta<!-- sottoconto --> genérica insertada en los parámetros de contabilidad del año del propio cierre interanual<!-- chiusura infrannuale -->.
:::

Este indicador crea automáticamente lo que el usuario puede gestionar por separado también tras la elaboración de los saldos de cierre en el procedimiento dedicado *Asientos de rectificación* siempre referido al menú de cierres interanuales<!-- chiusure infrannuali (--procedure--) -->.

**Asientos de integración automáticos**: al marcar el indicador, se habilitará la sección de integraciones automáticas, es necesario configurar la causal<!-- causale --> que gestionará la operación **y la fecha de inicio de competencia**.

También aquí, para integrar los movimientos de cdc/cdp, será necesario que la causal prevea su gestión.

La configuración por defecto del calendario solar es la aconsejada.

Con este indicador, el programa verificará, **a partir de la *Fecha de inicio de competencia para los asientos de integración***, las filas de costo/ingreso presentes en la contabilidad y no insertadas en el cierre (es decir, registros fuera de los rangos de fechas de registro/competencia configuradas), para crear los anticipos correspondientes a los días comprendidos en el rango de fechas de competencia configuradas para el cierre<!-- chiusura -->.

:::tip Nota
Las subcuentas<!-- sottoconti --> de anticipos a usar serán las que estén insertadas en el plan de cuentas para cada subcuenta<!-- sottoconto --> de costo/ingreso o bien la subcuenta<!-- sottoconto --> genérica insertada en los parámetros contables del año del propio cierre interanual<!-- chiusura infrannuale -->.
Si el costo/ingreso tiene una competencia económica **totalmente incluida en el rango de interés de la chiusura** y está en un registro contable con la subcuenta<!-- sottoconto --> en el encabezado valorada, entonces Fluentis presupone que se trata de un registro de factura (o nota de crédito) por recibir/emitir y usará dichas subcuentas extrayéndolas de la ficha de cliente/proveedor o de los parámetros contables del año seleccionado, en vez de las subcuentas de anticipos.
:::

Este indicador crea automáticamente lo que el usuario puede gestionar por separado también tras la elaboración de los saldos de cierre en el procedimiento dedicado *Asientos de integración*.

:::danger IMPORTANTE
Merece especial atención la **fecha de inicio de competencia** a configurar.

Normalmente esta fecha será igual a la fecha de la última apertura de cuentas detectada en contabilidad.

Ejemplo: si estamos creando el cierre del primer trimestre del ejercicio, el rango de fechas para la sección económica típicamente será 01/01/año X – 31/03/año X y si está presente la reapertura de cuentas del ejercicio anterior entonces dentro de este rango ya estará el asiento de costo/ingreso de los anticipos detectados en el balance del 'año X-1', por lo tanto la fecha de inicio para las integraciones debe ser 01/01/año X para que el software verifique si después del 31/03 hay líneas con competencia en el trimestre anterior.

**Si la reapertura NO está presente**, en cambio, será necesario configurar la fecha de inicio como 01/01/**año X-1** **para incluir también, por competencia, los movimientos que habrían sido objeto de reapertura (anticipos y diferidos) del año anterior.**
:::

:::danger ATENCIÓN
El módulo de controlling funciona de forma más flexible, en algunas situaciones, que el módulo administrativo.
De hecho, es capaz de rectificar automáticamente cualquier costo/ingreso (con tipo de cuenta compatible) tanto por cuotas de competencia económica en el pasado como en el futuro, ya que procede a mensualizar los costos/ingresos de competencia y, por tanto, elimina automáticamente los valores anteriores y posteriores al rango del cierre<!-- chiusura -->. Por ejemplo, si el costo registrado en el año X tiene competencia parcialmente (o totalmente) en el año X-1, ejecutando la elaboración de periodos en los datos reales del cierre del año X, considerará solo el periodo de competencia indicado.

Se debe prestar especial atención a la **gestión de los ajustes ejecutados en el módulo administrativo**.
**Se recomienda ejecutar el cálculo y contabilización de ajustes y el cierre y reapertura de cuentas con reapertura de ajustes mediante los procedimientos automáticos, evitando realizar asientos manualmente**.

El procedimiento automático impone, de hecho, a los asientos de reapertura de ajustes, la fecha igual al registro original objeto de rectificación y la competencia económica de dicha escritura igual al año X-1. Así se evita que al elaborar los cierres de periodo del año X, el software vuelva a calcular ajustes adicionales, pues ya se tiene en el saldo del año X (o periodo interanual del año X) el resultado correcto de competencia por efecto de la correcta reapertura del ajuste previo.
:::

### Reanudación de amortización de activos fijos<!-- Ripresa ammortamento cespiti -->

La sección permite gestionar automáticamente, después del registro de reanudación de datos interanuales<!-- registrazione di ripresa dati infrannuale -->, el cálculo de las amortizaciones civiles/fiscales del periodo de competencia: se utiliza la misma lógica del procedimiento *Amortización de activos fijos* del módulo de Activos fijos<!-- cespiti -->, pero solo para los días de competencia económica de interés en el cierre<!-- chiusura -->.
Una vez activado el cálculo, se deberá indicar la causal contable<!-- causale contabile --> a utilizar y elegir si se creará un solo registro acumulativo o detallado por activo fijo<!-- cespite -->.
El indicador 'Operaciones incrementales', para el que se remite al módulo de activos fijos, permite filtrar el tipo de categorías de activos fijos a gestionar.
Este indicador crea automáticamente lo que el usuario puede gestionar por separado después de la elaboración de los saldos de cierre en el procedimiento dedicado *Reanudación de amortización de activos fijos*.

:::tip Nota
Si en la empresa están presentes tanto categorías de activos fijos incrementales como no, se recomienda utilizar el procedimiento dedicado *Reanudación de amortización de activos fijos*, de forma que se puedan ejecutar ambas combinaciones en secuencia.
:::

### Contabilización de inventarios<!-- Contabilizzazione rimanenze -->

La sección permite gestionar automáticamente, después del registro de reanudación de datos interanuales<!-- registrazione di ripresa dati infrannuale -->, la contabilización de los inventarios iniciales/finales del periodo de competencia.
Una vez habilitada la gestión, se gestionará el rango de fechas que se utilizará, el tipo de stock a considerar (*Positivo/Negativo*), el tipo de cálculo de coste (*Coste medio, Último coste, FIFO a pasos anuales, LIFO a pasos anuales, Área de gestión, Desde coste efectivo por lotes*) y la causal contable<!-- causale contabile --> para los registros que se vayan a crear.
La presencia o ausencia del indicador Controlling determinará dos formas distintas de gestionar las operaciones:
- Si el indicador *no está presente*, **FluentisERP** creará los registros de inventario inicial y final en las fechas de inicio y fin del periodo del cierre interanual<!-- Chiusura infrannuale -->, añadiéndolos al final de los demás asientos de ajuste de la propia chiusura.
- Si el indicador *está presente*, **FluentisERP** creará los registros de inventario inicial y final de cada mes dentro del rango de fechas de competencia del cierre interanual<!-- Chiusura infrannuale -->, y los insertará como registros extracontables del Área asociada al propio cierre (por lo que no serán asientos de cierre, sino registros válidos solo para el Controlling<!-- Controlling -->)

:::tip Nota
La elaboración efectúa una comprobación de la existencia de este tipo de registros y, si ya se encuentran presentes, pregunta si se quieren eliminar y recrear o solo añadir (como en el caso en que se deseen seleccionar solo algunos almacenes<!-- magazzini --> y no todos, a través de la lista desplegable disponible). En caso de querer crear tanto los registros de Área para el Controlling como los registros de ajuste en el Cierre<!-- Chiusura -->, es necesario ejecutar el procedimiento *primero* con el indicador Controlling activo y *después* con el indicador desactivado.
:::

## Pestaña *Parámetros*<!-- Tab *Parametri* -->

La pestaña ‘Parámetros' permite configurar, para determinados tipos de cuentas o bien para cuentas/subcuentas específicas<!-- conto/sottoconto -->, el tipo de saldo a calcular. En detalle:

**General**: es la situación normal predeterminada. Con esta opción el ERP calculará un saldo deudor o acreedor y un saldo general.

**Debe/Haber:** con esta opción, el programa calculará tanto un total de movimientos en el Debe, un total en el Haber y el saldo final correspondiente.

La referencia son las distintas opciones de los modelos de reclasificación presentes en el módulo *Reporting > Reclasificación*: en estos es posible configurar solo el valor ‘Debe' o ‘Haber' o bien el general.

Por ejemplo, identificar en una reclasificación un coste (es decir, el total de movimientos Debe de la subcuenta<!-- sottoconto --> X) y sus rectificaciones (es decir, el total de movimientos Haber de la subcuenta X) en dos puntos distintos de la reclasificación puede brindar información adicional a la simple diferencia algebraica ‘Debe' - 'Haber' general.