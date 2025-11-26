---
title: Gestión de Liquidez
sidebar_position: 6
ai_generated: true
---

La utilidad de este formulario es ofrecer un panorama sencillo y rápido de la situación bancaria, para verificar la disponibilidad en cada cuenta bancaria<!-- conto bancario --> y, si es necesario, mover/posponer el compromiso o cambiar de banco<!-- banca -->.

### Modalidades Operativas:

Existen dos posibles modalidades: con o sin la vinculación a un cash flow.

Por medio del cash flow es posible considerar también los datos extraídos del ciclo activo/pasivo, para extender el período de análisis más allá de las simples evidencias contables<!-- evidenze contabili --> de los partitarios<!-- partitari -->.

Si no se utiliza el cash flow, se leerán solo los saldos contables<!-- saldi contabili --> (para las disponibilidades<!-- disponibilità -->) y los partitarios<!-- partitari --> (por este motivo, la misma entrada de menú se ha ubicado tanto en el menú de partidas<!-- partite --> como en el módulo cash flow...).

:::danger Atención<!-- Attenzione -->
Lo que el usuario ve al abrir la pantalla es la última situación guardada, tal como la gestionó la última vez. Los cambios que realice en los valores o en los datos, si se confirman con un nuevo guardado, servirán para historizar la situación de partida y almacenar los nuevos datos, que se mostrarán al reabrir la pantalla más adelante.
Las elaboraciones previas realizadas se almacenan en la base de datos, pero actualmente no existe la posibilidad de consultar las versiones anteriores.
:::

### Lógicas específicas del cash flow
Si ya existe un cash flow calculado y se abre por primera vez la pantalla de Gestión de liquidez<!-- Gestione liquidità -->, el usuario puede seleccionar el cash flow de donde obtener los datos elaborados.

Una vez seleccionado un cash flow, Fluentis tomará los saldos de las cuentas financieras y los insertará en la cuadrícula superior de disponibilidades<!-- disponibilità -->.

**ATENCIÓN: es necesario abrir el expander *Liquidez disponible* para ver la lista de cuentas bancarias<!-- conti bancari -->, con los valores de los créditos y de los usos en la cartera.**

![](/img/it-it/finance-area/maturity-values/cash-management-1.png)

todos los demás valores se deben recuperar del panel lateral *Cash flow*, buscando con el botón de ***Buscar cash flow***, seleccionando las filas y agregándolas con el botón ***Crear desde flujo de caja***.

![](/img/it-it/finance-area/maturity-values/cash-management-2.png)

![](/img/it-it/finance-area/maturity-values/cash-management-3.png)

El usuario puede crear un nuevo cash flow mediante el botón ***Calcular cash flow***, que crea una nueva simulación con los parámetros predeterminados guardados (de forma similar a cómo se crean los datos a exportar en otros software de tesorería como DocFinance:
el procesamiento es equivalente a la apertura de la pantalla de *creación automática de cash flow*, añadiendo una descripción e iniciando el procesamiento sin agregar otros parámetros):

en este caso, una vez completado el procesamiento, Fluentis preguntará si se desean actualizar o no los datos en la *Gestión de la liquidez* activa.

Alternativamente, el usuario también puede crear desde el cash flow una nueva simulación y luego volver a abrir la pantalla de gestión de la liquidez: en este caso, al abrir la *Gestión de la liquidez*, aparecerá un mensaje preguntando si se desean actualizar los datos con los del nuevo cash flow o no.

En ambos casos, si no se actualizan los datos, no sucederá nada, mientras que si se actualizan, Fluentis verificará los cambios en las filas anteriores para actualizar los valores: los datos de liquidez<!-- liquidità --> se actualizarán con los nuevos valores disponibles del nuevo previsional, mientras que para partidas<!-- partite --> y otros flujos, Fluentis verifica si la fila aún existe, de modo que si ya no existe la partida, se elimine el registro, o se actualizarán los valores (si el saldo pendiente ha cambiado o la fecha de vencimiento ha cambiado).

No se sobrescribirán los datos ingresados manualmente por el usuario en anteriores ocasiones (por ejemplo, en el campo ‘importe a pagar’, o en la fecha prevista) para no perder dichos datos.

Después de esto, el usuario podrá leer desde el panel de cash flow los nuevos registros previsionales y agregarlos a la gestión actual.

### Lógicas específicas cuando no existe cash flow
En este caso, no sucede nada al abrir la pantalla.
El usuario dispone del botón ***Actualizar partidas*** que permite alinear los registros de simulación (la cuadrícula inferior) respecto a la situación actual de las partidas<!-- partite -->. Si la partida está cerrada, será eliminada de la gestión, de lo contrario se actualizará con el nuevo saldo pendiente o nuevas fechas.

### Lógicas generales
#### Cuadrícula superior
El usuario puede recuperar desde el panel *Registro* los saldos de las cuentas<!-- conti --> que prefiera, para insertarlos entre las disponibilidades<!-- disponibilità -->. Este panel muestra la *visualización de cuentas*, con las filas de detalle de los distintos movimientos<!-- movimenti -->: seleccionando una fila y presionando el botón ***Creación desde registros***, Fluentis tomará la cuenta<!-- conto --> e insertará una fila con el <u>saldo al día de hoy</u>, <u>**no con el importe del movimiento específico seleccionado**</u>.
También es posible ingresar manualmente los registros de disponibilidades<!-- disponibilità -->, o sobrescribir el importe en moneda y/o en euros.

:::note Otros campos de la cuadrícula<!-- Altri campi della griglia -->

**Crédito global**: es el límite global del maestro de banco<!-- anagrafica banca -->

**Crédito anticipos**: es el límite de anticipos del maestro de banco<!-- anagrafica banca -->

**Crédito efectos SBF**: es el límite SBF del maestro de banco<!-- anagrafica banca -->

**Saldo anticipos**: representa un ‘Saldo anticipos sobre factura’, es el total presentado en el módulo *anticipos e ingresos* (con fecha de vencimiento posterior a ‘hoy’)

**Saldo SBF**: representa el ‘Saldo efectos presentados’, el total de los efectos presentados en la cartera (con fecha de vencimiento posterior a ‘hoy’)

**Remanente para anticipos**: representa el ‘Límite remanente para anticipos’, la diferencia de los dos valores anteriores relativos a anticipos sobre factura

**Remanente para SBF**: representa el ‘Límite remanente para presentación SBF’, la diferencia de los dos valores anteriores relativos a los efectos

**Liquidez disponible**: suma del importe del saldo contable<!-- saldo contabile --> + efectos presentados

**Liquidez disponible progresiva**: es un progresivo de fila del valor anterior. El valor de la última fila es el que se muestra en el encabezado del expander.
:::

#### Cuadrícula inferior
También en esta cuadrícula el usuario puede ingresar nuevas filas manualmente, incluso sin vincular ninguna cuenta<!-- conto --> (por ejemplo, para registrar salidas/entradas extracontables como sueldos o IVA por pagar).

Los campos editables son los de la *Fecha prevista*, el *Número secuencial*, *importe monetario a pagar*, los marcadores *Excluir* y *Ocultar*.

Las filas se vuelven rojas cuando el remanente progresivo de fila es negativo.

![](/img/it-it/finance-area/maturity-values/cash-management-4.png)

La **fecha prevista** es la *fecha prevista* presente dentro de la partida<!-- partita --> (o se iguala a hoy si es anterior): modificar el valor en esta cuadrícula del presente formulario actualizará la fecha prevista dentro de la partida<!-- partita --> vinculada (al guardarse).

Si la fila proviene del cash flow se tomará de la fecha prevista que está en la fila del cash flow (o de hoy, si es anterior).

La **fecha de vencimiento** es la fecha oficial de la partida<!-- partita --> (o del flujo de cash flow).

El **Número secuencial** es el que establece el orden de pago de las filas: se puede cambiar escribiendo manualmente el nuevo valor o indirectamente mediante el botón **Modificar la fecha prevista**. Este botón reposiciona las partidas seleccionadas después de las ya existentes a la fecha establecida, modificando el número con un valor mayor.

**Cuenta/subcuenta<!-- Conto/sottoconto -->** es editable en las filas manuales, no en las que provienen de partidas<!-- partite -->/flujos

**Nota** se completa con la razón social del cliente/proveedor, de lo contrario se escribirá manualmente la descripción del flujo extracontable que se está agregando
Los importes no son modificables si están vinculados a filas que provienen de partidas<!-- partite -->/flujos financieros

el campo ***cuenta*** más a la derecha es la cuenta del banco de referencia (tomada de la partida<!-- partita --> o del flujo de cash flow),

la marca **Excluir** excluye la fila del cálculo, aunque sigue siendo visible

la marca **Ocultar** también activa automáticamente la marca *excluir* y sirve para que la fila no se cuente ni se haga visible (a través del filtro en el encabezado **Excluir** **ocultos**, desmarcando esto vuelven a ser visibles).

Los campos más a la derecha están vinculados al [**Nivel de autorización**](/docs/configurations/tables/finance/authorization-levels/) (**fecha de autorización, nombre, descripción, código, descripción y nota de autorización**).

### Otras opciones:
- el filtro por **cuenta bancaria<!-- conto banca -->** (en el encabezado), para tener en la cuadrícula superior las disponibilidades de ese banco<!-- banca --> y en la inferior las filas relacionadas canalizadas a esa institución;

- el botón **Cambiar banco<!-- Cambia banca -->** para cambiar masivamente el banco de referencia de las filas seleccionadas

- el botón **Autorizar las partidas<!-- Autorizza le partite -->**, para proceder con las autorizaciones (disponible si el usuario puede otorgar la autorización a la fila seleccionada, según su [**Nivel de autorización**](/docs/configurations/tables/finance/authorization-levels/) ya alcanzado)

- el botón **Crear pagos<!-- Crea pagamenti -->** que permite crear la nómina del módulo *Pagos a proveedores*, si las filas seleccionadas son pagables.