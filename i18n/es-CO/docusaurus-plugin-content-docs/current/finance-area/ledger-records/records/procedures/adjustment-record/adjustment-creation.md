---
title: creazione assestamento
sidebar_position: 2
---

Con este procedimiento se podrán calcular y contabilizar los datos de **provisiones y ajustes (ratei e risconti)** relacionados con los registros contables presentes en la base de datos:

se trata, por ejemplo, de las correcciones/integraciones (respectivamente ajustes y provisiones) relacionadas con seguros, alquileres, cánones de leasing o asistencia, que tienen la característica de estar relacionadas con un período que cruza el año. Por lo tanto, de acuerdo con la regla contable de la competencia económica, están sujetos a correcciones.

## Requisitos para utilizar el procedimiento

1) Se hayan definido, en la tabla **[Tipos de cuenta](/docs/configurations/tables/finance/account-types)**, tipos de cuenta económicas (llamados, por ejemplo, 'a corregir') que tengan activada la opción ‘**Servicio**'.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image01.png)

El cálculo se realiza (así como en los balances intermedios) SOLAMENTE para los subcuentas para las cuales se ha asignado estos tipos de cuenta particulares en el plan de cuentas.

2) Se hayan definido en los **[parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters)** las subcuentas estándar para el registro de los movimientos de provisión/ajuste activos/pasivos.

:::note
Se recuerda que a nivel del plan de cuentas, en cada subcuenta de costo/ingreso se pueden especificar subcuentas de provisión/ajuste que serán utilizadas prioritariamente para el registro de la integración o corrección.
:::

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image02.png)

3) Se hayan utilizado correctamente los rangos de fechas para la competencia económica en los movimientos contables.

:::note
Se recomienda configurar los **[parámetros de ingreso](/docs/finance-area/ledger-records/records/ledger-record)** del usuario con la opción ‘Sin fecha para tipo de cuenta de servicio’ con el fin de obligar al usuario a ingresar, cada vez, el rango de fechas económicas válidas para cada movimiento.
:::

## Gestión

### Procedimiento

- indicar para qué ejercicio contable se desea proceder con el cálculo y la fecha de cálculo (por defecto se propone la fecha actual);  

- indicar la fecha de registro/competencia que se asignará a los registros contables a crear;  

- indicar las causales contables que se utilizarán para la corrección y la integración.  

La opción de registro único acumulará o no en un único registro todas las correcciones y en otro todas las integraciones.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image01.png)

Una vez guardadas estas configuraciones, se activará el botón **Calcular** 

que llenará la sección inferior con la lista de ajustes propuestos: dentro de estos se indicará el tipo de operación, las referencias al registro original, el número de días de la corrección y, luego, editables, el monto y la subcuenta de registro.

En el caso de que las causales establecidas prevean la gestión de CDC/CDP y el movimiento de origen tenga los datos correspondientes a corregir/integrar, en la sección inferior también estarán presentes los detalles de los cálculos relacionados.

La fase siguiente será confirmar, fila por fila, que el monto calculado es correcto y completo mediante la imposición del indicador **Controlado**, operación que a su vez activará la modificabilidad y los indicadores de control relativos también de la sección inferior relacionada con los CDC/CDP.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image04.png)

Todas las filas con estado *controlado* serán objeto de la contabilización que se ejecutará al presionar el botón **Contabilizar**.

El usuario puede proceder a crear múltiples contabilizaciones a medida que se definen los detalles, así como volver a calcular la lista para verificar que no se hayan agregado otras operaciones (típicamente de integración de registros del nuevo ejercicio con competencia anterior) o crear nuevos ajustes para estos. Sin embargo, está presente la **[pestaña de restauración](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)** de la situación anterior.

:::note
Se contabilizarán todas las filas con el indicador **Controlado** activado.
:::

En el caso de que se hayan realizado modificaciones en los registros contables después de iniciar el cálculo, podría ser útil utilizar el botón **Verificar cálculo de ajuste**:  
este botón realizará un nuevo cálculo fila por fila, mostrando cualquier diferencia con respecto a lo que ya se propuso en la cuadrícula (en particular los campos **Ajuste Debe / Haber** y **Nuevo ajuste Debe / Haber**), con un botón para alinear las diferencias o no, que también eliminará filas de corrección/integración vinculadas a movimientos contables que ya no existen (no será posible contabilizar si hay filas con referencias a movimientos que no existen y en tal caso será necesario pasar por esta máscara y eliminarlos).

:::danger Advertencia
En el caso de que los ajustes ya se hayan contabilizado, no existe ningún bloqueo para la modificación del movimiento de origen que dio lugar a la corrección; el único bloqueo es la eliminación del registro, lo cual no está permitido. Por lo tanto, se recomienda tener la máxima precaución al modificar registros que estén involucrados en las operaciones de ajuste de fin de año.
:::

:::note Nota sobre el procedimiento de **[Cierre automático de cuentas](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**: hay una opción de traspaso automático de las operaciones de ajuste al final de los registros de reapertura de cuentas. Con esta opción, la aplicación procederá a registrar, en la fecha de reapertura, el revocación de los ajustes mientras operará el traspaso de las integraciones a la fecha del registro original del ajuste mismo.
:::

**INDICADOR Registro único (FLAG Singola registrazione)**: con este indicador activado, la contabilización de los ajustes se realiza con un único registro contable (un único número) en lugar de con tantos registros como correcciones deban realizarse.  
En la fase de reapertura de cuentas, el traspaso para la reapertura de las provisiones y ajustes seguirá la misma configuración.

### GESTIÓN DE FACTURAS POR RECIBIR (GESTIONE FATTURE DA RICEVERE)

En esta sección ilustramos cómo gestionar de manera automatizada la particular situación de las *fatture da ricevere*, es decir, la provisión que debe realizarse al final del año cuando el registro de un costo o de un ingreso de competencia se hará solo en el ejercicio siguiente.

En resumen, podemos ver, en las siguientes imágenes, cómo el reconocimiento de esta situación ocurre automáticamente por parte del software y se utiliza la cuenta correspondiente prevista en los parámetros generales de contabilidad.

Además, es posible personalizar la cuenta a utilizar en relación a cada proveedor o cliente individual.

De la misma manera, es posible personalizar la cuenta a utilizar para las demás provisiones y ajustes activos y pasivos configurando la cuenta correspondiente en el plan de cuentas junto al costo o ingreso.

#### Situación estándar SIN CONFIGURACIONES ESPECÍFICAS EN EL PROVEEDOR

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image08.png)

Y TAMPOCO EN LA CUENTA DE COSTO

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image09.png)

LAS CONFIGURACIONES SON SOLO A NIVEL DE PARÁMETROS DE CONTABILIDAD

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image10.png)

**CASO 1 registro en el año x y competencia totalmente en x+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image11.png)

**CASO 2: registro en el año y y competencia toda en el año y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image12.png)

**CASO 3: registro año x y competencia a caballo entre x y x+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**CASO 4: registros año y con competencia a caballo entre y y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**RESULTADOS**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image15.png)

La fila 1 es la corrección del caso 1, donde todo el costo registrado en el año X es de competencia del ejercicio siguiente X+1: Fluentis utiliza la cuenta de Ajustes activos definida en los parámetros de contabilidad general.  

La fila 2 es la integración del caso 2, donde todo el costo registrado en el año Y es de competencia del ejercicio anterior Y-1: Fluentis utiliza la cuenta de ‘Facturas por recibir’ definida en los parámetros de contabilidad general.  

La fila 3 es la corrección del caso 3, donde el costo registrado en el año X es solo en parte de competencia del ejercicio siguiente X+1: Fluentis utiliza la cuenta de Ajustes activos definida en los parámetros de contabilidad general.  

La fila 4 es la integración del caso 4, donde el costo registrado en el año Y es solo en parte de competencia del ejercicio anterior Y-1: Fluentis utiliza la cuenta de Provisiones pasivas definida en los parámetros de contabilidad general.  

**CON CONFIGURACIONES ESPECÍFICAS PARA PROVEEDOR/CONTA CONTABLE**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image16.png)

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image17.png)

**RESULTADO**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image18.png)

En lugar de las subcuentas predeterminadas se utilizan las subcuentas personalizadas tomadas de la fila de costo o del proveedor.

## Restauración (Ripristino)

Hay una pestaña final ‘**Restauración**' para visualizar en vista previa los registros realizados y para anularlos a través del botón correspondiente.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/restore-tab/image01.png)

Es posible utilizar los campos de filtro por cuenta / subcuenta y los indicadores adyacentes para seleccionar solo los asientos de integración o solo los asientos de corrección antes de proceder a la restauración.