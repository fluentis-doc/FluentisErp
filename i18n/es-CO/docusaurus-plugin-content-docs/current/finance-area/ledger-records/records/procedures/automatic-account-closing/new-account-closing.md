---
title: Nueva cierre automática (Nuova chiusura automatica)
sidebar_position: 2
---

El procedimiento de Cierre automático de cuentas gestiona el cierre de balance y la posterior reapertura: se trata del único movimiento contable, sin ninguna influencia desde el punto de vista de las cuentas por cobrar.

El formulario se compone de una serie de pestañas y de un área de encabezado común en la que insertar los datos principales, como la fecha del cierre y la descripción.

## Datos obligatorios (Dati obbligatori)

Una vez lanzado el nuevo cierre, al abrir el formulario se proponen automáticamente la fecha de cierre (fecha de hoy) y el número de versión (progresivo), campos que son editables.

Es necesario insertar una descripción y **completar los campos obligatorios presentes en la pestaña Parámetros antes de proceder a Guardar** el cierre.

El guardado es necesario para habilitar los comandos presentes en la barra de herramientas para el cálculo, **Recuperar valores de subcuentas**, y la contabilización, **Crear registro para el cierre de cuentas.**

### Parámetros (Parametri)

En la pestaña ‘parámetros’ es necesario insertar: 

- datos para filtrar los movimientos contables que serán objeto de cierre de cuentas; las **fechas de registro y de competencia** determinan cuáles registros incluir en el saldo contable: en particular, las fechas de competencia serán relativas al período de balance (1/1/….-31/12/….), mientras que el campo ‘a fecha de registro’ podría desplazarse al ejercicio siguiente para incluir los asientos de ajuste: **se recomienda, más simplemente, no establecer el filtro por fechas de registro**.

- los códigos de subcuenta, la causal a utilizar y la fecha de registro y de competencia contable de los asientos de cierre del libro diario; dichos datos (salvo las fechas de registro) se incorporan automáticamente si se insertan dentro de los **[parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters)** (pestaña ‘Cuentas’);

- (opcional) la elección de gestionar simultáneamente también la reapertura de cuentas en lugar de gestionarla separadamente con **[el comando específico](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/new)**. 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/parameters-tab/image01.png)

**Año contable**: hace referencia al año correspondiente de los **[parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters)**, sirve para la gestión de la reapertura de los asientos de ajuste, que se debe activar al pie del formulario con el indicador **Reasignación de asientos de ajuste**: se trata de gestionar, al final de la reapertura de cuentas, los movimientos de reasignación de anticipos y diferidos (siempre que estos hayan sido ya elaborados con el procedimiento **[Asientos de ajuste](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)**) a los costos/ingresos relativos (los anticipos se registrarán en la misma fecha de la apertura de cuentas, los diferidos en la fecha de registro del documento de origen).

Indicador **Gestión de saldo** (de cierre y reapertura) **por moneda de movimiento**: si está activado, el programa inserta una línea por cada moneda de movimiento del subcuenta específica, manteniendo claramente el total en moneda de la empresa correcto. Esta posibilidad es necesaria para garantizar la corrección de los saldos iniciales de la impresión ‘Extracto de cuenta en moneda'.

 ATENCIÓN: Antes de iniciar el cálculo, es recomendable verificar los ajustes de la tabla **[Tipos de cuenta](/docs/configurations/tables/finance/account-types)**: 

en particular, los tipos de cuenta de los registros de cliente-proveedor-agente-bancos, además de tener un indicador en las columnas correspondientes, deben tener un segundo indicador en alguna de las dos primeras columnas, relativas al activo y al pasivo patrimonial. 

Así, es posible dar inicio a la **Recuperación de valores de subcuentas** con el botón correspondiente, para que el programa calcule el saldo de cada subcuenta y presente en las pestañas de Pérdidas y Ganancias y Patrimonial los datos relacionados. Una vez seguros de los resultados, es posible pasar a la última fase del procedimiento: ingresando nuevamente en la pestaña de parámetros, podemos hacer clic en el botón Crear registro para el cierre de cuentas, que creará los registros contables correspondientes e insertará el indicador en **Contabilizado**.

:::note
Si el indicador **Reasignación de asientos de ajuste** ha sido activado, al lanzar el comando **Recuperación de valores de subcuentas**, se hará visible una pestaña adicional **[Reapertura de asientos de ajuste](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**.
:::

#### Botones específicos  
> **salva**: permite guardar el encabezado del cierre de cuentas, activable después de haber ingresado la descripción.  
> **ripresa valori sottoconti**: permite que el programa calcule el saldo de cada subcuenta y presente en las pestañas ‘pérdidas y ganancias' y ‘patrimonial' los datos relacionados.  
> **crea registrazione per la chiusura conti**: permite crear el registro de cierre de cuentas.  
> **ripristina contabilizzazione**: permite anular restaurando la contabilización del cierre de cuentas.  

### Pérdidas y Ganancias (Profitti e Perdite)

En la pestaña de Pérdidas y Ganancias se resumirán los componentes de ingresos negativos y positivos, con evidenciación del resultado del ejercicio y la posibilidad de filtrar las cuentas presentes en las secciones de Componentes positivos de ingreso y Componentes negativos de ingreso a través de los campos de Subcuenta de costos, Subcuenta de ingresos y los botones de búsqueda ubicados en la barra de herramientas (ver tabla a continuación).

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/profit-and-loss-tab/image01.png)

#### Botones específicos  
> **Buscar componentes positivos de ingreso subcuentas (Ricerca componenti positivi di reddito sottoconti)**: permite buscar dentro del cierre las cuentas de ingreso deseadas.  
> **Buscar componentes negativos de ingreso subcuentas (Ricerca componenti positivi di reddito sottoconti)**: permite buscar dentro del cierre las cuentas de costo deseadas.  

### Patrimonial (Patrimoniale)

En la pestaña **Patrimonial**, se resumirán los componentes activos y pasivos con evidenciación del resultado del ejercicio y la posibilidad de filtrar (de manera análoga a lo previsto para la pestaña **[Pérdidas y ganancias](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**) las cuentas presentes en las dos secciones siguientes a través de los campos correspondientes y los botones de búsqueda ubicados en la barra de herramientas (ver tabla a continuación).

#### Botones específicos  
> **ricerca patrimoniale attivo**: permite buscar dentro del cierre las cuentas activas deseadas.  
> **ricerca patrimoniale passivo**: permite buscar dentro del cierre las cuentas pasivas deseadas.  

### Registro (Registrazione)

Los registros (visibles con un doble clic) son, en particular, los siguientes: 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image01.png)

#### En la primera cuadrícula  

- la primera registración cierra los ingresos, 

- la segunda los costos, 

- la tercera registra la utilidad o pérdida cerrando la cuenta de resultados, 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image02.png)

#### En la segunda cuadrícula  

- la cuarta cierra el pasivo 

- la quinta el activo (incluyendo las cuentas de utilidad o pérdida);  

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image03.png)

#### En la tercera cuadrícula  

se reflejan los tres registros de la apertura: 

- el primero abre el pasivo, 

- el segundo el activo, 

- el tercero transfiere la cuenta de utilidad/pérdida del ejercicio a la utilidad/pérdida del ejercicio anterior.

:::note Nota

Cualquier error que se pueda detectar posteriormente puede resolverse de las siguientes maneras: 

- es posible eliminar directamente el cierre de cuentas realizado y, tras la solicitud del programa, eliminar también los registros relacionados para reiniciar el procedimiento desde cero; 

- alternativamente, hay un botón de *rollback* **Restaurar contabilización** de la contabilización (en la pestaña Parámetros). 
:::

Existen permisos específicos de usuario para la contabilización y la anulación de la misma. 

:::danger Atención  
El cierre de cuentas bloqueará las registraciones comprendidas en el rango de fechas establecido y, además, no será posible insertar registros dentro de ese rango de fechas.

Los **cuentas de orden** nunca son objeto de cierre y reapertura de cuentas en este procedimiento.
::: 

### Reapertura de Asientos de Ajuste (Riapertura Scriture di Assestamento)

En esta máscara se puede ver el resultado de la opción de reasignación automática de las operaciones de ajuste al final de los registros de reapertura de cuentas. Con esta opción, la aplicación procederá a registrar, en la fecha de reapertura, el reverso de los ajustes **mientras operará la reasignación de las adiciones en la fecha del registro de origen** del ajuste mismo.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image01.png)

 Al hacer doble clic en las filas, es posible visualizar el detalle de los registros realizados.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image02.png)

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image03.png)

:::tip Info
Generar el registro de reapertura de los asientos de adición (diferidos activos y pasivos) en la fecha del registro de origen del ajuste es necesario, en comparación, por ejemplo, a simplemente reabrir el 1/1, para gestionar correctamente también los cálculos de los cierres intermedios posibles con Fluentis.

Piense, por ejemplo, en haber registrado el 15/04/2023 un costo que tiene competencia del 01/11/2022 al 31/03/2023, por lo que se registrará el diferido pasivo al 31/12 de 2 meses. Registrar su registro opuesto (el reverso) en fecha 01/01 dependería mucho de cómo se filtren y gestionen los diferidos/anticipos para el cierre intermedio, corriendo el riesgo, en esencia, de tener solo el reverso de costos (es decir, la reapertura del diferido) y no la factura del costo en el balance intermedio. 

Registrar en cambio el reverso el mismo día de la factura, cualquiera sea el filtrado posterior para la extracción de los saldos del cierre intermedio, aseguraría que ambos registros "viajen juntos" garantizando el efecto esperado (en este caso un impacto neutro en el balance, ya que el costo ya se había anticipado al ejercicio anterior).
:::