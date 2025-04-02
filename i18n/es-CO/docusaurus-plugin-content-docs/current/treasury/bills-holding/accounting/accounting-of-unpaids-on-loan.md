---
title: contabilizzazione insoluti su cessione
sidebar_position: 6
---

El formulario se encuentra en Tesorería > Cartera de Efectos > Contabilización > Contabilización de insolutos en cesión (Contabilizzazione insoluti su cessione).

Desde esta máscara se procede a la contabilización de los insolutos girados en pago a proveedor: el procedimiento, de acuerdo con las configuraciones de la causa contable establecida, reabrirá las partidas de clientes asociadas a los títulos insolutos así como las partidas de proveedores cerradas con el giro del título.

## Cómo contabilizar un insoluto en cesión (Come contabilizzare un insoluto su cessione)

1. Utiliza la parte superior de la máscara para filtrar la búsqueda de los insolutos a contabilizar.
2. Selecciona desde la cuadrícula central los insolutos que deseas contabilizar.
3. Completa la pestaña de parámetros para la contabilización, ingresando datos como la **causale di contabilità**, la **data registrazione** y la **data competenza**.

:::note[Nota]
Esta sección puede ser predefinida dentro de los [**parámetros** (parametri)](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del módulo Cartera de efectos.
:::

El indicador **spese di rivalsa** gestionará el cargo de los gastos en la cuenta del cliente, registrando el ingreso correspondiente según la subcuenta ingresada en la máscara (**Cuenta / subcuenta de cargo de gastos al cliente (Conto / sottoconto addebito spese al cliente)**).

Las subcuentas para los **spese di protesto** y la cuenta **Transitoria (Transitorio)** se toman de los parámetros del módulo, pero pueden ser modificadas o ingresadas en cada caso.

4. Presiona el botón en la barra de ribbon **contabilizzazione insoluti**.

**Botones específicos**

**ricerca**: Busca la lista de los insolutos a contabilizar.

**contabilizza**: Ejecuta la contabilización para las filas seleccionadas.

### Pestaña Anteriores (Tab Precedenti)

Desde la pestaña *precedenti* es posible proceder a la anulación de las contabilizaciones ejecutadas.

La anulación será posible solo si el periodo aún es modificable (impresión del libro diario y cierre de cuentas no ejecutadas).

Un doble clic en la sección de registros permitirá visualizar la contabilización relacionada.

Hay una pestaña de detalle para visualizar los errores detectados durante la contabilización.

**Botones específicos**

**ricerca**: Busca la lista de las contabilizaciones ejecutadas.

**ripristina contabilizzazione**: Ejecuta el restablecimiento de las contabilizaciones seleccionadas.

**Restaurar insolutos (Ripristina insoluti)**: Ejecuta el restablecimiento de la contabilización seleccionada referente al único insoluto.