---
title: Gestión de Liquidez (Gestione Liquidità)
sidebar_position: 6
---

La utilidad de este formulario es proporcionar un panorama simple y rápido de la situación bancaria para verificar la disponibilidad en cada cuenta bancaria y, si es necesario, trasladar/retrasar el compromiso o cambiar de banco.

### Modalidades Operativas:

Existen dos posibles modalidades: con o sin el anclaje a un flujo de caja (cash flow).

A través del flujo de caja es posible considerar también los datos extraídos del ciclo activo/pasivo, con el fin de extender el periodo de análisis más allá de las evidencias contables de los deudores.

Si no se utiliza el flujo de caja, solo se leerán los saldos contables (para las disponibilidades) y los deudores (por esta razón, la misma entrada de menú se ha colocado tanto en el menú de partidas como en el módulo de flujo de caja…).

:::danger Atención
Lo que el usuario ve al abrir la máscara es la última situación guardada, tal y como fue gestionada la última vez. Los cambios que se realicen en los valores o datos, si se confirman con un nuevo guardado, irán a historicizar la situación inicial y a almacenar los nuevos datos, que serán presentados nuevamente al reabrir la máscara más tarde. 
Las elaboraciones anteriores realizadas se almacenan en la base de datos, pero actualmente no se prevé la posibilidad de consultar versiones anteriores.
:::

### Lógicas específicas del flujo de caja
Si ya existe un flujo de caja calculado y abrimos por primera vez la máscara de Gestión de liquidez, el usuario puede seleccionar el flujo de caja del cual obtener los datos procesados.

Una vez seleccionado un flujo de caja, Fluentis tomará los saldos de las cuentas financieras para insertarlos en la cuadrícula superior de las disponibilidades.

**ATENCIÓN: es necesario abrir el expander *Liquidez disponible* para ver la lista de cuentas bancarias, con los valores de los créditos y de los usos en la cartera.**

![](/img/it-it/finance-area/maturity-values/cash-management-1.png)

Todos los demás valores se tomarán del panel lateral *Flujo de caja*, buscando con el botón de ***Buscar flujo de caja***, seleccionando las filas y agregándolas con el botón ***Crear desde el flujo de caja***.

![](/img/it-it/finance-area/maturity-values/cash-management-2.png)

![](/img/it-it/finance-area/maturity-values/cash-management-3.png)

El usuario puede crear un nuevo flujo de caja mediante el botón ***Calcular flujo de caja***, que generará una nueva simulación con los parámetros predeterminados guardados (de manera similar a como se hace para crear datos que se exportarán a otros software de tesorería como DocFinance: la elaboración es equivalente a abrir la máscara de *creación automática de flujo de caja*, añadir una descripción y comenzar la elaboración sin añadir otros parámetros): 

en este caso, completada la elaboración, Fluentis preguntará si se desea actualizar los datos o no en la *Gestión de liquidez* activa. 

Alternativamente, el usuario también puede crear desde el flujo de caja una nueva simulación y luego volver a abrir la máscara de gestión de liquidez: en este caso, al abrir la *Gestión de liquidez*, tendrá un mensaje que pregunta si se desean actualizar los datos con los del nuevo flujo de caja o no.

En ambos casos, si no se actualizan los datos no pasará nada, mientras que si se actualizan, Fluentis verificará los cambios en las filas anteriores para actualizar los valores: los datos de la liquidez se actualizarán con los nuevos disponibles del nuevo pronóstico, mientras que en lo que respecta a las partidas y otros flujos, Fluentis verifica si la fila aún existe, para eliminar el registro si ya no existe la partida, o actualizará los valores (si el remanente ha cambiado o la fecha de vencimiento ha cambiado). 

No se sobrescribirán con los nuevos datos aquellas configuraciones hechas manualmente anteriormente por el usuario (por ejemplo, en el campo ‘importe a pagar’, o en la fecha prevista) para no perder dichos datos.

Hecho esto, el usuario podrá leer desde el panel de flujo de caja los nuevos registros pronosticados y agregarlos a la gestión actual.

### Lógicas específicas cuando no hay flujo de caja
En este caso, no ocurre nada al abrir la máscara.
El usuario dispone del botón ***Actualizar partidas*** que permite hacer un alineamiento de los registros de simulación (la cuadrícula inferior) respecto a la situación actual de las partidas. Si la partida está cerrada, será eliminada de la gestión, de lo contrario, será actualizada con el nuevo remanente o las nuevas fechas.

### Lógicas generales
#### Cuadrícula superior
El usuario puede tomar desde el panel *Registros* los saldos de las cuentas que prefiera, para insertarlos entre las disponibilidades. Este panel muestra la *visualización de cuentas*, con las filas de detalle de los varios movimientos: seleccionando una fila y presionando el botón ***Creación desde registros***, Fluentis tomará la cuenta e insertará una fila con el <u>saldos hasta hoy</u>, <u>**no con el importe del movimiento específico seleccionado**</u>.
Es posible también ingresar manualmente los registros de disponibilidad, o sobrescribir el importe en moneda y/o euros.

:::note Otros campos de la cuadrícula

**Línea de crédito global**: es el total global del registro bancario.  

**Línea de crédito anticipos**: es el monto anticipado del registro bancario.  

**Línea de crédito efectos SBF**: es el monto del SBF del registro bancario.  

**Saldo Anticipos**: representa un ‘Saldo anticipos sobre factura’, es el total presentado en el módulo *anticipos y recaudaciones* (con fecha de vencimiento mayor a ‘hoy’).  

**Saldo SBF**: representa el ‘Saldo de efectos presentados’, el total de los efectos presentados en la cartera (con fecha de vencimiento mayor a ‘hoy’).  

**Remanente para Anticipos**: representa el ‘Saldo remanente para anticipos’, la diferencia de los dos valores anteriores relativos a los anticipos sobre factura.  

**Remanente para SBF**: representa el ‘Saldo remanente para la presentación del SBF’, la diferencia de los dos valores anteriores relativos a los efectos.  

**Liquidez disponible**: suma del importe del saldo contable + efectos presentados.  

**Liquidez disponible progresiva**: es un progresivo de fila del valor anterior. El valor de la última fila es el que se ve en la cabecera del expander.
:::

#### Cuadrícula inferior
En esta cuadrícula, el usuario también puede insertar nuevas filas manualmente, incluso sin conectar ninguna cuenta (por ejemplo, para registrar salidas/entradas extracontables como sueldos o IVA por pagar). 

Los campos modificables son los de *Fecha prevista*, *Número secuencial*, *importe monetario a pagar*, los indicadores *Excluir* y *Ocultar*.  

Las filas se vuelven rojas cuando el remanente progresivo de la fila se vuelve negativo.

![](/img/it-it/finance-area/maturity-values/cash-management-4.png)

La **fecha prevista** es la *fecha prevista* presente dentro de la partida (o se establece igual a hoy si esta es anterior): modificar el valor en esta cuadrícula del presente formulario actualizará la fecha prevista dentro de la partida conectada (al guardar).

Si la fila proviene del flujo de caja, será tomada de la fecha prevista que hay en la fila de flujo de caja (o hoy si es anterior).

La **fecha de vencimiento** es la fecha oficial de la partida (o del flujo de caja).

El **Número secuencial** es el que ordena de pago las filas: se puede cambiar escribiendo manualmente el nuevo valor o indirectamente a través del botón **Modificar la fecha prevista**. Este botón reposiciona las partidas seleccionadas después de las que ya existen a la fecha establecida, modificando su número con un valor superior.

**Cuenta/subcuenta** es editable en las filas manuales, no en las que provienen de partidas/flujos.

**Nota** se completa con la razón social del cliente/proveedor, de lo contrario se escribirá manualmente la descripción del flujo extracontable que se está insertando manualmente. 
Los importes no son modificables si están ligados a filas que provienen de partidas/flujos financieros.

El campo ***cuenta*** más a la derecha es la cuenta del banco de apoyo (tomada de la partida o del flujo de caja),

el indicador **Excluir** excluye la fila del cálculo, pero la deja visible.

El indicador **Ocultar** establece automáticamente también el indicador *excluir* y sirve para no contabilizar la fila y no hacerla visible (a través del filtro en la cabecera **Excluir** **ocultos**, al quitar este indicador regresan a ser visibles).

Los campos más a la derecha están relacionados con el [**Nivel de autorización**](/docs/configurations/tables/finance/authorization-levels/) (**fecha de autorización, nombre, descripción, código, descripción y nota de autorización**).

### Otras opciones:
- el filtro por **cuenta bancaria** (en la cabecera), para que en la cuadrícula superior se tengan las disponibilidades de ese banco y en la inferior las filas canalizadas a esta institución;

- el botón **Cambiar banco** para cambiar masivamente el banco de referencia de las filas seleccionadas.

- el botón **Autorizar partidas**, para proceder a las autorizaciones (disponible si el usuario puede otorgar la autorización a la fila seleccionada, (según su [**Nivel de autorización**](/docs/configurations/tables/finance/authorization-levels/) ya alcanzado).

- el botón **Crear pagos** que permite crear la lista del módulo *Pagos proveedores*, si las filas seleccionadas son pagables.