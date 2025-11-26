---
title: Creación de ajustes
sidebar_position: 2
ai_generated: true
---

Con este procedimiento es posible calcular y contabilizar los datos de **acumulaciones y diferimientos<!-- ratei e risconti -->** relativos a las registraciones contables<!-- registrazioni contabili --> presentes en la base de datos:

Se trata, por ejemplo, de las rectificaciones/integraciones (respectivamente diferimientos y acumulaciones<!-- risconti e ratei -->) relativas a seguros, alquileres, cánones de leasing o asistencia, que se caracterizan por corresponder a un periodo que abarca dos ejercicios. Por lo tanto, según la regla contable de competencia económica, están sujetos a rectificaciones.

## Requisitos para el uso del procedimiento<!-- Requisiti per l'utilizzo della procedura -->

1) Se hayan definido, en la tabla **[Tipos de cuenta](/docs/configurations/tables/finance/account-types)<!-- Tipi conto -->**, tipos de cuentas de resultados (llamados, por ejemplo, ‘a rectificar') que tengan activado el flag ‘**Servicio<!-- Servizio -->**'.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image01.png) 

El cálculo se realiza (así como en los balances intermedios) SOLO para los subcuentas<!-- sottoconti --> para los cuales, en el plan de cuentas<!-- piano dei conti -->, se haya asignado estos tipos de cuenta particulares.

2) Se hayan definido en los **[parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters)<!-- parametri di contabilità -->** los subcuentas<!-- sottoconti --> estándar para la contabilización de los movimientos<!-- movimenti --> de acumulación/diferimiento<!-- rateo/risconto -->, activos o pasivos.

:::note Nota
Se recuerda que a nivel del plan de cuentas<!-- piano dei conti -->, sobre cada subcuenta<!-- sottoconto --> de coste/ingreso, se pueden indicar subcuentas<!-- sottoconti --> de acumulación/diferimiento<!-- rateo/risconto --> que serán utilizados con prioridad para la contabilización<!-- rilevazione --> de la integración o rectificación.
:::

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image02.png)

3) Se hayan utilizado correctamente los rangos de fechas para la competencia económica en los movimientos<!-- movimenti --> de contabilidad<!-- contabilità -->.

:::note Nota
Se recomienda configurar los **[parámetros de registro](/docs/finance-area/ledger-records/records/ledger-record)<!-- parametri di inserimento -->** del usuario con la opción ‘Sin fecha para tipo de cuenta de servicio' para obligar al usuario a introducir, cada vez, el rango de fechas económicas<!-- range di date economiche --> válidas para cada movimiento<!-- movimento -->.
:::

## Gestión<!-- Gestione -->

### Procedimiento<!-- Procedura -->

- Indicar para qué ejercicio contable<!-- esercizio contabile --> se desea proceder con el cálculo y la fecha de cálculo (por defecto se propone la fecha actual);

- Indicar la fecha de registro/competencia<!-- data registrazione/competenza --> a asignar a las registraciones contables<!-- registrazioni contabili --> que se van a crear;

- Indicar las causales contables<!-- causali contabili --> a utilizar para la rectificación y la integración.

La opción de registro único acumulará o no en un solo asiento todas las rectificaciones y en otro todas las integraciones.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image01.png) 

Una vez guardados estos parámetros, se activará el botón **Calcular<!-- Calcola -->**

que rellenará la sección inferior con la lista de los ajustes propuestos: dentro de estos estará indicada la tipología de operación, las referencias a la registración de origen, el número de días de la rectificación y luego, editables, el importe y la subcuenta<!-- sottoconto --> de contabilización<!-- rilevazione -->.

En caso de que las causales configuradas contemplen la gestión de cdc/cdp y el movimiento<!-- movimento --> de origen tenga los datos relativos a rectificar/integrar, en la sección inferior también estarán presentes los detalles de los cálculos relacionados.

La siguiente fase será confirmar, línea por línea, que el importe calculado es correcto y completo, activando el flag **Controlado<!-- Controllato -->**, lo que permitirá modificar y revisar los flags de control relacionados con la sección inferior de los cdc/cdp.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image04.png)

Todas las líneas con estado *controlado<!-- controllato -->* serán objeto de contabilización<!-- rilevazione in contabilità --> que se realizará pulsando el botón **Contabilizar<!-- Contabilizza -->**.

El usuario puede proceder a crear varias contabilizaciones a medida que se definen los detalles, así como recalcular la lista para verificar que no se hayan agregado otras operaciones (típicamente integraciones de registros del nuevo ejercicio con competencia anterior), o crear nuevos ajustes<!-- assestamenti --> para estas. En todo caso, existe la **[ficha de restauración](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)<!-- scheda di ripristino -->** de la situación anterior.

:::note Nota
Serán contabilizadas todas las filas con el flag **Controlado<!-- Controllato -->** activo.
:::

En caso de que se hayan realizado modificaciones a las registraciones<!-- registrazioni --> en contabilidad<!-- contabilità --> después de ejecutar el cálculo, puede ser útil utilizar el botón **Verificar cálculo de ajustes<!-- Verifica calcolo assestamento -->**:  
este botón volverá a calcular línea por línea, mostrando las posibles diferencias respecto a lo ya propuesto en la cuadrícula (en particular los campos **Ajuste Debe/Haber<!-- Assestamento Dare / Avere -->** y **Nuevo ajuste Debe/Haber<!-- Nuovo assestamento Dare / avere -->**), con un botón para alinear o no las diferencias, que también eliminará filas de rectificación/integración vinculadas a movimientos<!-- movimenti --> contables ya inexistentes (no será posible contabilizar si existen registros con referencias a movimientos<!-- movimenti --> inexistentes y en ese caso será necesario pasar por esta máscara y eliminarlos).

:::danger Atención<!-- Attenzione -->
En caso de que los ajustes<!-- assestamenti --> ya hayan sido contabilizados, no hay ningún bloqueo para la modificación del movimiento<!-- movimento --> de origen que llevó a la rectificación, el único bloqueo se refiere a la eliminación de la registración<!-- registrazione -->, la cual no está permitida. Por ello, se recomienda la máxima atención al modificar registros involucrados en operaciones de ajuste<!-- assestamento --> de fin de año.
:::

:::note Nota relativa al procedimiento de **[Cierre automático de cuentas](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)<!-- Chiusura automatica conti -->**: existe una opción de traspaso automático de las operaciones de ajustes<!-- assestamento --> al final de los asientos de reapertura de cuentas<!-- riapertura conti -->. Con esta opción, la aplicación procederá a registrar, en la fecha de reapertura, el extorno de las rectificaciones mientras realizará el traspaso de las integraciones en la fecha de la registración<!-- registrazione --> de origen del propio ajuste<!-- assestamento -->.
:::

**FLAG Registro único<!-- Singola registrazione -->:** con este flag activo, la contabilización<!-- contabilizzazione --> de los ajustes<!-- assestamenti --> se realiza con un único registro contable (un solo número) en lugar de tantos asientos como rectificaciones se deben ejecutar.
En la reapertura de cuentas<!-- riapertura conti -->, el traspaso de acumulaciones y diferimientos<!-- ratei e risconti --> también seguirá esta configuración.

### GESTIÓN DE FACTURAS POR RECIBIR<!-- GESTIONE FATTURE DA RICEVERE -->

En esta sección se explica cómo gestionar automáticamente la situación particular de las *Facturas por recibir<!-- Fatture da ricevere -->*, es decir, el reconocimiento a realizar al cierre del ejercicio cuando la registración<!-- registrazione --> de un gasto o ingreso de competencia solo se producirá en el ejercicio siguiente.

En resumen, podemos ver, en las siguientes imágenes, cómo el reconocimiento de esta situación es realizado automáticamente por el software y se utiliza la cuenta<!-- conto --> prevista en los parámetros generales de contabilidad.

También es posible personalizar la cuenta<!-- conto --> a utilizar en relación con cada proveedor o cliente.

De la misma manera, es posible personalizar la cuenta<!-- conto --> a utilizar para las demás acumulaciones y diferimientos<!-- ratei e risconti --> activos y pasivos, estableciendo la cuenta particular para el coste o ingreso directamente en el plan de cuentas<!-- piano dei conti -->.

#### Situación estándar SIN CONFIGURACIONES ESPECÍFICAS EN EL PROVEEDOR<!-- Situazione standard SENZA IMPOSTAZIONI SPECIFICHE NEL FORNITORE -->

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image08.png)

NI TAMPOCO EN LA CUENTA DE COSTO<!-- E NEMMENO NEL CONTO DI COSTO -->

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image09.png)

LAS CONFIGURACIONES SON SOLO A NIVEL DE PARÁMETROS DE CONTABILIDAD<!-- LE IMPOSTAZIONI SONO SOLO A LIVELLO DI PARAMETRI DI CONTABILITA’ -->

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image10.png)

**CASO 1 registro en el año x y competencia totalmente en x+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image11.png)

**CASO 2: registro en el año y y competencia completamente en el año y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image12.png)

**CASO 3: registro año x y competencia a caballo entre x y x+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**CASO 4: registros año y con competencia a caballo entre y y y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**RESULTADOS<!-- RISULTATI -->**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image15.png)


Fila 1 es la rectificación del caso 1, donde todo el gasto registrado en el año X corresponde al ejercicio siguiente X+1: Fluentis utiliza la cuenta de Diferimientos Activos<!-- Risconti attivi --> definida en los parámetros de contabilidad general.

Fila 2 es la integración del caso 2, donde todo el gasto registrado en el año Y corresponde al ejercicio anterior Y-1: Fluentis utiliza la cuenta de *Facturas por recibir<!-- Fatture da ricevere -->* definida en los parámetros de contabilidad general.

Fila 3 es la rectificación del caso 3, donde el coste registrado en el año X solo en parte corresponde al ejercicio siguiente X+1: Fluentis utiliza la cuenta de Diferimientos Activos<!-- Risconti attivi --> definida en los parámetros de contabilidad general.

Fila 4 es la integración del caso 4, donde el coste registrado en el año Y solo en parte pertenece al ejercicio anterior Y-1: Fluentis utiliza la cuenta de Acumulaciones Pasivas<!-- Ratei passivi --> definida en los parámetros de contabilidad general.

**CON CONFIGURACIONES ESPECÍFICAS POR PROVEEDOR/CUENTA CONTABLE<!-- CON IMPOSTAZIONI SPECIFICHE PER FORNITORE/CONTO CONTABILE -->**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image16.png)


![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image17.png)

**RESULTADO<!-- RISULTATO -->**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image18.png)

En lugar de los subcuentas<!-- sottoconti --> predeterminados, se utilizan los subcuentas<!-- sottoconti --> personalizados tomados de la fila de costo o del proveedor.

## Restauración<!-- Ripristino -->

Existe una ficha final '**Restauración<!-- Ripristino -->**' para previsualizar las registraciones realizadas y para anularlas a través del botón correspondiente.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/restore-tab/image01.png)

Es posible utilizar los campos de filtro por cuenta<!-- conto --> / subcuenta<!-- sottoconto --> y los flags adyacentes para seleccionar solo asientos de integración o solo asientos de rectificación antes de proceder a la restauración.