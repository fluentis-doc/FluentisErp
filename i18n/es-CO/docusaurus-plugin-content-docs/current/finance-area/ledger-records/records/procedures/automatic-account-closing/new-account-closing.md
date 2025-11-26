---
title: Nueva cierre automática
sidebar_position: 2
ai_generated: true
---

El procedimiento de Cierre automático de cuentas<!-- Chiusura automatica conti --> gestiona el cierre de balance<!-- bilancio --> y la posterior reapertura: se trata únicamente del movimiento contable, sin ninguna influencia desde el punto de vista de los submayores<!-- partitari -->.

El formulario está compuesto por una serie de pestañas<!-- tab --> y un área de cabecera común donde se ingresan los datos principales, como la fecha del cierre y la descripción.

## Datos obligatorios

Una vez iniciado el nuevo cierre, al abrir el formulario se proponen automáticamente la fecha de cierre (fecha actual) y el número de versión (progresivo), aunque estos campos son editables.

Es necesario ingresar una descripción y **completar los campos obligatorios presentes en la pestaña Parámetros<!-- Tab Parametri --> antes de proceder a Guardar** el cierre.

El guardado es necesario para habilitar los comandos presentes en la barra de opciones<!-- ribbon bar --> para el procesamiento del cálculo, **Recuperar valores de subcuentas<!-- Ripresa valori sottoconti -->**, y la contabilización, **Crear registro para el cierre de cuentas<!-- Crea registrazione per la chiusura dei conti. -->**.

### Parámetros<!-- Parametri -->

En la pestaña ‘parámetros'<!-- tab ‘parametri' --> es necesario ingresar: 

- datos para filtrar los movimientos contables que serán objeto del cierre de cuentas; las **fechas de registro y competencia<!-- date registrazione e competenza -->** determinan qué registros serán incluidos en el saldo contable<!-- saldo contabile -->: en particular, las fechas de competencia estarán relacionadas con el periodo de balance<!-- periodo di bilancio --> (1/1/….-31/12/….), mientras que el campo ‘hasta fecha de registro<!-- a data registrazione -->’ podría trasladarse al ejercicio siguiente para incluir los asientos de ajuste:** se recomienda simplemente no establecer el filtro por fechas de registro**.

- los códigos de subcuenta<!-- sottoconto -->, causales<!-- causale --> a utilizar y fechas de registro y de competencia contable de los asientos de cierre del libro mayor<!-- libro giornale -->; estos datos (salvo las fechas de registro) se trasladan automáticamente si se han ingresado en los **[parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters)** (pestaña ‘Cuentas<!-- tab ‘Conti' -->’);

- (opcional) la elección de gestionar conjuntamente la reapertura de cuentas en lugar de gestionarla por separado con **[el comando correspondiente](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/new)**.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/parameters-tab/image01.png)

**Año contable<!-- Anno contabile -->**: hace referencia al correspondiente año de los **[parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters)**. Sirve para la gestión de la reapertura de los asientos de ajuste<!-- scritture di assestamento -->, activándolo desde la base de la pantalla con el flag **Traspaso de asientos de ajuste<!-- Giroconto scritture di assestamento -->**: se trata de gestionar, al final de la reapertura de cuentas, los movimientos de reasignación de los ingresos diferidos<!-- risconti --> y anticipos acumulados<!-- ratei --> (siempre y cuando estos ya hayan sido procesados con el procedimiento **[Asientos de ajuste<!-- Scritture di assestamento -->](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)**) a los costes/ingresos relacionados (los ingresos diferidos se registrarán en la misma fecha de la apertura de cuentas, y los anticipos acumulados en la fecha del registro del documento de origen).

Flag **Gestión de saldo** (de cierre y reapertura) **por moneda de movimiento**: si está activado, el programa inserta una línea por cada moneda de movimiento de la subcuenta<!-- sottoconto --> específica, manteniendo por supuesto el total correcto en la moneda de la empresa<!-- società -->. Esta opción es necesaria para garantizar la exactitud de los saldos iniciales en el informe 'Extracto de cuenta en moneda extranjera<!-- Estratto conto in valuta -->'.
 
ATENCIÓN: Antes de iniciar el cálculo es conveniente verificar las configuraciones de la tabla **[Tipos de cuenta](/docs/configurations/tables/finance/account-types)**:

en particular, los tipos de cuenta del maestro de cliente-proveedor-agente-bancos, además de tener un flag en las columnas correspondientes, deben tener uno segundo en una de las dos primeras columnas, relativas al activo y al pasivo patrimonial.

Por tanto, es posible proceder con la **Recuperación de valores de subcuenta<!-- Ripresa valori sottoconti -->** con el botón correspondiente, para que el programa calcule el saldo de cada subcuenta<!-- sottoconto --> y presente en las pestañas Profits and Loss<!-- Profitti e perdite --> y Patrimonial<!-- Patrimoniale --> los datos relacionados. Cuando se esté seguro de los resultados, es posible pasar a la última fase del procedimiento: volviendo a la ficha parámetros, se puede hacer clic en el botón Crear registro para el cierre de cuentas<!-- Crea registrazione per la chiusura conti -->, que creará los registros contables correspondientes y marcará con el flag **Contabilizada<!-- Contabilizzata -->**.

:::note
Si el flag **Traspaso de asientos de ajuste<!-- Giroconto scritture di assestamento -->** ha sido activado, cuando se lance el comando **Recuperar valores de subcuenta<!-- Ripresa valori sottoconti -->**, será visible una pestaña adicional **[Reapertura de asientos de ajuste](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**.
:::
 
#### Botones específicos  
> **Guardar<!-- Salva -->**: permite guardar la cabecera del cierre de cuentas, habilitable después de haber ingresado la descripción.  
> **Recuperar valores de subcuenta<!-- Ripresa valori sottoconti -->**: permite al programa calcular el saldo de cada subcuenta<!-- sottoconto --> y mostrar los datos relacionados en las pestañas 'ganancias y pérdidas<!-- profitti e perdite -->' y 'patrimonial'.  
> **Crear registro para el cierre de cuentas<!-- Crea registrazione per la chiusura conti -->**: permite crear el registro de cierre de cuentas.  
> **Restaurar contabilización<!-- Ripristina contabilizzazione -->**: permite anular, restaurando la contabilización del cierre de cuentas.  

### Ganancias y Pérdidas<!-- Profitti e Perdite -->

En la pestaña Ganancias y Pérdidas<!-- Profitti e Perdite --> se resumen los componentes de ingreso negativos y positivos con destaque del resultado del ejercicio y la posibilidad de filtrar las cuentas presentes en las secciones Componentes positivos de ingreso<!-- Componenti positivi di reddito --> y Componentes negativos de ingreso<!-- Componenti negativi di reddito --> mediante los campos Subcuenta de costes, Subcuenta de ingresos y los botones de búsqueda que se encuentran en la barra de opciones<!-- ribbon bar --> (ver tabla a continuación).

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/profit-and-loss-tab/image01.png)

#### Botones específicos  
> **Buscar componentes positivos de ingreso en subcuentas<!-- Ricerca componenti positivi di reddito sottoconti -->**: permite buscar dentro del cierre las cuentas de ingresos deseadas.  
> **Buscar componentes negativos de ingreso en subcuentas<!-- Ricerca componenti positivi di reddito sottoconti -->**: permite buscar dentro del cierre las cuentas de coste deseadas.  

### Patrimonial

En la pestaña **Patrimonial** se resumen los componentes de activos y pasivos, resaltando el resultado del ejercicio y con posibilidad de filtrar (de manera similar a lo previsto para la pestaña **[Ganancias y Pérdidas](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**) las cuentas presentes en las dos secciones inferiores mediante los campos correspondientes y los botones de búsqueda en la barra de opciones<!-- ribbon bar --> (ver tabla a continuación).

#### Botones específicos  
> **Buscar activos patrimoniales<!-- Ricerca patrimoniale attivo -->**: permite buscar en el cierre las cuentas de activos deseadas.  
> **Buscar pasivos patrimoniales<!-- Ricerca patrimoniale passivo -->**: permite buscar en el cierre las cuentas de pasivos deseadas.  

### Registro<!-- Registrazione -->

Los registros<!-- registrazioni --> (visualizables con doble clic) son en particular los siguientes: 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image01.png)

#### En la primera cuadrícula  

- el primer registro cierra los ingresos, 

- el segundo los costes, 

- el tercero refleja la utilidad o la pérdida cerrando la cuenta de resultados, 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image02.png)

#### En la segunda cuadrícula  

- el cuarto cierra el pasivo, 

- el quinto el activo (incluidos las cuentas de utilidad o pérdida);  

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image03.png)

#### En la tercera cuadrícula  

se reportan los tres registros de reapertura: 

- la primera abre el pasivo, 

- la segunda el activo, 

- la tercera mueve la cuenta de utilidad/pérdida del ejercicio al de utilidad/pérdida del ejercicio anterior.

:::note Nota

Cualquier error detectado posteriormente puede solucionarse de la siguiente manera: 

- es posible borrar directamente el cierre de cuentas realizado y, a solicitud del programa, eliminar también los registros asociados a él para empezar de cero el procedimiento; 

- alternativamente, existe un botón de *rollback* **Restaurar contabilización<!-- Ripristina contabilizzazione -->** de la contabilización (en la pestaña Parámetros<!-- tab Parametri -->). 
:::

Existen permisos de usuario específicos para la contabilización y su anulación.

:::danger Atención  
El cierre de cuentas bloqueará los registros incluidos en el rango de fechas establecido y, además, no será posible insertar registros dentro de ese rango de fechas.

Las **cuentas de orden<!-- conti d'ordine -->** nunca son objeto de cierre ni de reapertura de cuentas en este procedimiento.
:::

### Reapertura de asientos de ajuste<!-- Riapertura Scriture di Assestamento -->

En esta pantalla es visible el resultado de la opción de traspaso automático de operaciones de ajuste al final de los registros de reapertura de cuentas. Con esta opción, la aplicación procederá a reconocer, a la fecha de reapertura, el extorno de los ajustes **mientras que realizará el traspaso de las integraciones a la fecha del registro de origen** del propio ajuste.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image01.png)

 Al hacer doble clic en las filas es posible visualizar el detalle de los registros realizados.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image02.png)

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image03.png)

:::tip Info
Generar el asiento de reapertura de los asientos de integración<!-- scrittura di riapertura delle scritture di integrazione --> (anticipos y diferidos activos y pasivos<!-- ratei attivi e passivi -->) en la fecha del asiento de origen del ajuste es necesario, en comparación por ejemplo con reabrir simplemente al 1/1, a fin de gestionar correctamente también los cálculos de cierres interanuales posibles con Fluentis.

Pensemos, por ejemplo, en haber registrado el 15/04/2023 un coste cuya competencia es 01/11/2022 a 31/03/2023, y por tanto se registra el anticipo pasivo<!-- rateo passivo --> al 31/12 por 2 meses. Registrando su asiento opuesto (el extorno) en fecha 01/01 dependerá mucho de cómo se filtran y gestionan anticipos/diferidos para el cierre interanual; en sustancia, existe el riesgo de tener sólo el extorno de costes (o sea, la reapertura del anticipo) y no la factura del coste en el balance interanual.

Registrando, en cambio, el extorno el mismo día de la factura, independientemente del filtrado posterior para la extracción de los saldos del cierre interanual, ambos registros "viajarán juntos" garantizando el efecto esperado (en este caso un impacto neutro en el balance ya que el coste ya se ha anticipado al ejercicio anterior).
:::