---
title: Crear Cierres Intermedios (Crea Chiusure infrannuali)
sidebar_position: 3
---

El procedimiento permite crear nuevas simulaciones de balance intermedio.

La fuente de datos de partida es siempre la Contabilidad general en el momento de la creación del cierre: el programa toma los saldos de las diversas cuentas secundarias, según los parámetros de creación del cierre establecidos en este formulario, para permitir luego la adición extracontable de todas las operaciones de ajustes, diferimientos, amortizaciones y registros manuales para llegar a una simulación de balance que incluya los ajustes y correcciones necesarias. La operación no tiene ningún efecto sobre los datos de contabilidad general para efectos del cierre contable de fin de año: el módulo de cierres intermedios se gestiona en tablas de base de datos completamente separadas de la contabilidad general.

## Pestaña *General*

Indicador **seleziona dati per divisione**: si está configurado, el campo anterior de la división se convierte en un filtro que permite obtener de la contabilidad solo los datos de la división establecida.

**anno contabile**: el año de referencia de los datos, sirve para identificar las cuentas predeterminadas de los asientos de ajuste y los períodos contables relacionados.

**escludi causale**: en caso de que se estén obteniendo los datos de un año contable completo ya cerrado, permite excluir los registros de cierre de cuentas y así obtener los datos de balance del ejercicio.

**area**: el campo es visible solo en empresas que gestionan Control, se seleccionará el área de los Resultados a asociar con el conjunto de datos en procesamiento.

### Sección **Recuperación de valores patrimoniales (Ripresa valori patrimoniali)**

El indicador de **ripresa dei movimenti di natura patrimoniale**, presente por defecto, habilita la sección inferior de filtro. Con esta opción, ERP incluirá en el cierre intermedio también los saldos de las cuentas secundarias relacionadas con los tipos de cuenta que presentan el indicador **patrimoniale attivo** o **patrimoniale passivo**.

La sección de filtros por fecha de registro y fecha de competencia a continuación permite definir los rangos de fechas que se utilizarán para recuperar los datos patrimoniales de los registros del período establecido.

:::tip NOTA
En particular, si la cierre y reapertura de cuentas aún no se ha registrado en contabilidad, la fecha de inicio debe ser retrocedida a la fecha de la última apertura de cuentas registrada en contabilidad, para tener un dato patrimonial correcto.

Es importante considerar que, en este caso, habrá una diferencia entre el saldo patrimonial y el saldo económico del ejercicio en curso, correspondiente a la ganancia/pérdida del ejercicio anterior que aún no se ha registrado en la cierre/reapertura de las cuentas de contabilidad general: al iniciar la creación, Fluentis preguntará si se desea valorar tal diferencia en las cuentas de ganancias o pérdidas predeterminadas en los parámetros contables, obteniendo un registro equilibrado; mientras que si esta opción no se utiliza habrá un desequilibrio en el registro y, por lo tanto, para el buen término de la operación de cierre misma, la causal deberá permitir el guardado de registros desequilibrados.
:::

En caso de que el cierre no prevea la recuperación patrimonial, nuevamente el registro de cierre intermedio (de solo la sección económica) desequilibrará por la ganancia/pérdida del período.

### Sección **Recuperación de valores económicos (Ripresa valori economici)**

El indicador de **ripresa dei movimenti di natura economica**, presente por defecto, habilita la sección inferior de filtro. Con esta opción, se insertan en el cierre intermedio los saldos de las cuentas secundarias conectadas a los tipos de cuenta que presentan el indicador **economico costi** o **economico ricavi**.

La sección de filtros por fecha de registro, competencia y documento a continuación permite definir los rangos de fechas que se utilizarán para recuperar los datos de los registros del período establecido.

:::tip NOTA
El rango de fechas del documento, no propuesto por defecto, normalmente no se establece: no todos los registros contables, de hecho, presentan las fechas del documento en el encabezado (normalmente solo los registros de facturas de compra/venta).
:::

En caso de que el cierre no prevea la recuperación económica, el registro de cierre intermedio (de solo la sección patrimonial) desequilibrará por la ganancia/pérdida del período.

### Sección **Datos de cierre de cuentas (Dati chiusura conti)**

La sección presenta los elementos identificativos que se atribuirán a esta simulación de balance.

**causale chiusura conti**: es la causal que se utilizará para crear el registro de recuperación de saldos. Se recuerda que dicha causal debe tener los indicadores cdc/cdp/proyectos para que estos elementos sean considerados en la cierre intermedio misma.

**data chiusura**: es la fecha de creación de esta simulación, que se utilizará como fecha del registro extracontable del cierre mismo y para los otros registros. No tiene ninguna valencia particular.

**Número de cierre (Numero chiusura)**: es el número progresivo del cierre, propuesto automáticamente por el sistema.

**descrizione chiusura**: es la descripción que aparecerá en todas las máscaras del módulo de Cierres intermedios, en el del Balance y del Presupuesto. Se aconseja describir de manera clara los rangos de fechas establecidos para entender el período simulado cuando se seleccione el cierre en los diversos procedimientos del área de Control.

**Competencia económica del/al (Competenza economica dal/al)**: este rango de fechas es obligatorio para poder proceder a la creación del cierre intermedio. Indica el período de competencia económica que interesa: será entonces tomado como referencia para el cálculo de los asientos de ajuste/integración, para el cálculo de la recuperación de amortizaciones del período y en general las diversas procedimientos posteriores. Por ejemplo, si se han recuperado los registros del primer semestre del ejercicio X y se ha ingresado el mismo semestre como rango de fechas de competencia económica, con los procedimientos de ajuste el programa verificará si hay líneas de contabilidad con rangos de competencia fuera de este semestre para identificar el diferimiento relacionado.

### Sección **Opciones de cierre (Opzioni chiusura)**

**chiusura per commessa**: con este indicador, el programa creará un registro de cierre intermedio por cada proyecto de venta que se ha valorado en los registros contables del período de filtro establecido. Se recuerda que la causal de cierre intermedio debe prever la gestión de los proyectos para gestionar sus datos.

**considera registrazioni provvisorie**: con este indicador, la recuperación de datos de la contabilidad también considerará los registros contables con estado 'provisionales'.

### Valores calculados (Valori calcolati)

Esta sección propone los totales patrimoniales/económicos calculados a partir del primer registro de cierre realizado. 

(con indicador **chiusura per commessa** esta sección visualiza solamente los datos del primer proyecto identificado en el período).

### Ajustes e Integraciones (Rettifiche e integrazioni)

La sección permite gestionar automáticamente, al final del registro de recuperación de datos intermedios, los registros correspondientes de ajuste e integración.

:::note Nota
Este tipo de registros de ajuste se realiza automáticamente solo para los movimientos de cuentas secundarias económicas vinculadas a un tipo de cuenta que presenta el indicador *Servicio* configurado.
:::

El referente de los ajustes/integraciones es al **rango de fechas de competencia** ingresados en los movimientos de primera nota (y en los centros de costo/profit para la parte analítica).

**scritture di rettifica in automatico**: al activar el indicador se activará la sección de ajustes automáticos; es necesario establecer la causal que irá a registrar la operación. También aquí, para ajustar también los movimientos de cdc/cdp, será necesario que la causal prevea la gestión de estos.

Las configuraciones recomendadas incluyen la opción **agrupar por registro (raggruppa per registrazione)** y, sobre todo, el uso del **calendario solar**.

:::tip Nota
Las cuentas secundarias de diferimiento que se utilizarán serán aquellas ingresadas en el plan de cuentas en correspondencia con la cuenta secundaria de costos/ingresos o la cuenta secundaria genérica ingresada en los parámetros de contabilidad del año del cierre intermedio mismo.
:::

Este indicador crea automáticamente lo que el usuario puede gestionar por separado incluso después del procesamiento de los saldos de cierre en el procedimiento dedicado *Asientos de ajuste* siempre referido al menú de cierres intermedios (*procedures*).

**scritture di integrazione in automatico**: al activar el indicador se activará la sección de integraciones automáticas; es necesario establecer la causal que irá a registrar la operación **y la fecha de inicio de competencia**.

También aquí, para integrar también los movimientos de cdc/cdp, será necesario que la causal prevea la gestión de estos.

La configuración predeterminada del calendario solar es la que se recomienda utilizar.

Con este indicador, el programa verificará, **a partir de la *Fecha de inicio de competencia para los asientos de integración***, las líneas de costo/ingreso presentes en contabilidad y no incluidas en el cierre (es decir, registros fuera de los rangos de fechas de registro/competencia establecidos), para crear los ajustes de los días dentro del rango de fechas de competencia establecidos para el cierre.

:::tip Nota
Las cuentas secundarias de ajuste que se utilizarán serán aquellas ingresadas en el plan de cuentas en correspondencia con la cuenta secundaria de costos/ingresos o la cuenta secundaria genérica ingresada en los parámetros de contabilidad del año del cierre intermedio mismo.
Si el costo/ingreso tiene una competencia económica **totalmente ingresada en el rango de interés del cierre** y está en un registro contable con la cuenta secundaria de encabezado valorada, entonces Fluentis supone que se está en un registro de una factura (o nota de crédito) a recibir/emitar y utilizará estas cuentas secundarias tomándolas del registro del cliente/proveedor o de los parámetros de contabilidad del año seleccionado, en lugar de las cuentas secundarias de ajuste.
:::

Este indicador crea automáticamente lo que el usuario puede gestionar por separado incluso después del procesamiento de los saldos de cierre en el procedimiento dedicado *Asientos de integración*.

:::danger IMPORTANTE
Merece una atención especial la **fecha de inicio de competencia** que se debe establecer.

Normalmente, esta fecha se establecerá igual a la fecha de la última apertura de cuentas registrada en contabilidad.

Ejemplo: si estamos creando el cierre del primer trimestre del ejercicio, el rango de fechas para la sección económica será típicamente 01/01/año X – 31/03/año X y si está presente la reapertura de cuentas del ejercicio anterior, entonces dentro de este rango habrá directamente la transferencia a costo/ingreso de los ajustes registrados en el balance 'año X-1', por lo que la fecha de inicio para las integraciones debe establecerse como 01/01/año X para que el software verifique si después del 31/03 hay líneas con competencia en el trimestre anterior.

**Si la reapertura NO está presente**, en cambio, será necesario establecer la fecha de inicio como 01/01/**año X-1** **incluir también, por competencia, los movimientos que habrían sido objeto de reapertura (ajustes y diferimientos) del año anterior.**
:::

:::danger ATENCIÓN
El módulo de control opera de forma más flexible, en algunas situaciones, en comparación con el módulo administrativo.
De hecho, es capaz de rectificar automáticamente cualquier costo ingreso (con tipo de cuenta compatible) tanto para cuotas de competencia económica en el pasado como en el futuro, ya que procede a mensualizar los costos/ingresos de competencia y, por lo tanto, retira automáticamente los valores anteriores y posteriores al rango del cierre. Por ejemplo, si el costo registrado en el año X tiene competencia parcialmente (o totalmente) en el año X-1, al procesar los períodos con los datos devueltos del cierre del año X, igualmente considerará solo el período de competencia requerido.

Se debe prestar especial atención a la **gestión de los ajustes realizados en el módulo administrativo**.
**Se recomienda realizar el cálculo y contabilización de ajustes y la cierre y reapertura de cuentas con reapertura de ajustes a través de los procedimientos automáticos evitando realizar registros manualmente**.

La procedimiento automática impone, de hecho, a los registros de reapertura de ajustes la fecha igual a la escritura original objeto de rectificación y la competencia económica de dicha escritura igual al año X-1. De esta manera, se evita que al procesar los cierres de período del año X, el software calcule ajustes adicionales, ya que ya se tiene en el saldo del año X (o período intermedio del año X) el resultado correcto de competencia por efecto de la correcta reapertura del ajuste anterior.
:::

### Recuperación de amortización de activos

La sección permite gestionar automáticamente, al final del registro de recuperación de datos intermedios, la detección de las amortizaciones civiles/fiscales del período de competencia: se utiliza por lo tanto la misma lógica del procedimiento *Amortización de activos* del módulo de Activos, pero solo para los días de competencia económica de interés en el cierre.
Una vez habilitado el cálculo, se deberá establecer la causal contable a utilizar y elegir si crear un *único registro* acumulativo o detallado activo por activo.
El indicador 'Operaciones incrementales', para el que se remite al módulo de activos, permite filtrar el tipo de categorías de activos a gestionar.
Este indicador crea automáticamente lo que el usuario puede gestionar por separado incluso después del procesamiento de los saldos de cierre en el procedimiento dedicado *Recuperación de amortización de activos*.

:::tip Nota
Si en la empresa existen tanto categorías de activos incrementales como no, se sugiere utilizar el procedimiento dedicado *Recuperación de amortización de activos*, para poder ejecutar ambas combinaciones en secuencia.
:::

### Contabilización de existencias

La sección permite gestionar automáticamente, al final del registro de recuperación de datos intermedios, la detección de los inventarios iniciales/finales del período de competencia.
Una vez habilitada la gestión, se gestionará el rango de fechas a utilizar, el tipo de saldo a considerar (*Positivo/Negativo*), el tipo de cálculo de costo (*Costo medio, Costo último, FIFO a pasos anuales, LIFO a pasos anuales, Área de Gestión, Por costo efectivo de lotes*) y la causal contable a utilizar para los registros que se crearán.
La presencia o no del indicador de Control gestionará las operaciones de dos maneras diferentes: 
- Si el indicador *no está presente*, **FluentisERP** creará los asientos de los inventarios iniciales y finales a las fechas de inicio y fin del período del Cierre intermedio, e insertará estos al final de los otros asientos de ajuste del cierre mismo.
- Si el indicador *está presente*, **FluentisERP** creará los registros de los inventarios iniciales y finales de cada mes dentro del rango de fechas de competencia del Cierre intermedio, e insertará estos como Asientos extracontables del Área asociada al cierre mismo (por lo tanto, no serán asientos del cierre, sino asientos válidos solo para el Control).

:::tip Nota
La elaboración realiza una prueba sobre la existencia o no de este tipo de asientos y, por lo tanto, si los encuentra ya presentes, preguntará si se desea eliminarlos y recrear o si se desea añadir (como en el caso de que se deban seleccionar solo algunos almacenes y no todos, a través del menú desplegable disponible). En caso de que se quieran crear tanto los registros de Área para el control como los de ajuste en el Cierre, es necesario ejecutar la procedimiento *primero* con el indicador de Control activado y *luego* con el indicador desactivado.
:::

## Pestaña *Parámetros*

La pestaña ‘Parámetros' permite establecer, para ciertos tipos de cuentas o para una cuenta/cuenta secundaria específica, el tipo de saldo a calcular. En detalle:

**General**: es la situación normal por defecto. Con esta opción, ERP calculará un saldo deudor o acreedor y un saldo general.

**dare/avere**: con esta opción, el programa calculará tanto un total de los movimientos deudores, un total acreedor y el saldo final relativo.

El referente es a las varias opciones de los modelos de reclasificaciones presentes en el módulo *Reporting > Reclasificaciones*: en estos es posible establecer solo el valor ‘Deudor' o ‘Acreedor' o general.

Por ejemplo, registrar en un reclasificado un costo (es decir, el total de los movimientos deudores de la cuenta secundaria X) y sus correcciones (es decir, el total de los movimientos acreedores de la cuenta secundaria X) en dos puntos separados del reclasificado puede proporcionar información adicional más allá del simple saldo algebraico ‘deudor' - 'acreedor' general.