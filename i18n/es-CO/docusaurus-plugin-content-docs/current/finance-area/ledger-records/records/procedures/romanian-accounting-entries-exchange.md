---
title: Regularización de Moneda
sidebar_position: 2
ai_generated: true
---

La pantalla<!-- maschera --> se encuentra en Administración > Asientos contables > Procedimientos > Regularización de moneda<!-- Amministrazione > Registrazioni contabili > Procedure > Regolarizzazione valuta -->.

Este procedimiento permite calcular automáticamente, en una determinada fecha, las diferencias de cambio para las cuentas<!-- conti --> en moneda extranjera.

Es posible gestionar: 

- créditos y deudas (clientes y proveedores) 
- cuentas bancarias<!-- conti bancari -->

**Se generan las partidas abiertas<!-- partite aperte --> y los asientos contables<!-- registrazioni contabili --> de ajuste por diferencia de cambio.**

### Cómo calcular y registrar las diferencias de cambio (por ejemplo, al final del año o en otra fecha)

- Seleccione una moneda (una a la vez), respecto a la cual se ejecutará el cálculo, mediante la lista desplegable **Moneda<!-- Divisa -->** en el encabezado de la pantalla<!-- maschera -->
- Con los botones de opción a la derecha seleccione el tipo de cálculo:
    - Disponibilidad: considera los saldos (ej. bancarios)
    - Partidas: lee créditos y deudas con clientes / proveedores
        - Activa: clientes
        - Pasiva: proveedores

La cuenta<!-- conto --> / subcuenta<!-- sottoconto --> y la División son en cambio filtros opcionales para restringir la búsqueda.

- Configure en la parte inferior de la pantalla la **fecha** de referencia (por ejemplo 31/12/AAAA) para la regularización (es decir, el cálculo de la diferencia de cambio)
- El valor del **tipo de cambio<!-- cambio -->** correspondiente se cargará según los resultados de la tabla [**tipos de cambio de moneda<!-- cambi valute -->**](/docs/configurations/tables/finance/currency-exchange)
- Presione Buscar<!-- Ricerca -->
---

En la cuadrícula central que expone el detalle de las posiciones buscadas se destacan: 

- **Cuenta / subcuenta<!-- Conto / sottoconto -->** obtenida de la búsqueda y a gestionar

- **Importe en moneda** (expresado en la moneda extranjera), igual a la suma en el debe menos la suma en el haber en moneda de todos los movimientos<!-- movimenti --> ocurridos en la cuenta<!-- conto --> 

- **Importe (en euros) histórico**, suma de los movimientos en el debe en euros menos la suma del haber en euros

- **Importe corriente** que corresponde al importe en moneda recalculado al tipo de cambio actual (mostrado en la parte inferior de la pantalla)

- **Diferencia** de cambio positiva o negativa.

---

En la zona de los ***Parámetros*** se definen las cuentas<!-- conti --> para la ganancia o pérdida en cambios, con las cuales se realizará la contabilización de la regularización (tomadas de los parámetros de contabilidad general)

- Ingrese la causa contable<!-- causale contabile --> deseada para crear el asiento contable<!-- contabilizzazione -->

- Presione el comando **Contabilización<!-- Contabilizzazione -->**

---

<details>

  <summary>Más detalles (Click para expandir)<!-- Uleriori dettagli (Click to expand) --></summary>
  
El indicador **Provisorias<!-- Provvisorie -->**: permite generar la diferencia de cambio como asiento contable<!-- registrazione contabile --> provisorio;

**Tipo de cambio<!-- Cambio -->**: con el que se calcula el valor actualizado. Se propone automáticamente por el programa (desde la tabla de tipos de cambio de moneda), pero puede ser modificado por el usuario;

**Fecha<!-- Data -->** y **Número<!-- Numero -->** **documento** y **Causa contable<!-- Causale contabile -->** relativa al asiento contable<!-- registrazione contabile --> a regularizar. **La fecha introducida representa también la fecha hasta la cual se seleccionan los asientos contables;**

**Cuentas de ingreso y de gasto<!-- Conti di ricavo e costo -->**: utilizadas para registrar las diferencias de cambio;


En la pestaña de *Rollback* es posible visualizar y restaurar el resultado de las operaciones de regularización realizadas según los filtros configurados (Desde fecha/Hasta fecha, la cuenta<!-- conto -->).

**Restaurar regularización:** Botón para eliminar las operaciones de regularización seleccionadas en la cuadrícula de resultados.

</details>

:::danger[Atención<!-- Attenzione -->]
Por defecto, cada **ficha maestra de cliente/proveedor<!-- anagrafica cliente fornitore -->** que se crea, activa **en el plan de cuentas<!-- piano dei conti --> la opción *Gestión de moneda<!-- Gestione divisa -->***. Esta opción **no debe ser desactivada**, para no bloquear la posibilidad de utilizar el presente procedimiento y la correcta gestión del cierre de saldos en moneda extranjera.

**En la gestión de la cuenta en moneda extranjera<!-- conto in valuta -->**, ya sea una cuenta de cliente o proveedor, o una cuenta bancaria, recomendamos **movimentar la cuenta<!-- movimentare il conto --> de manera uniforme**, definiendo la moneda de movimiento, por ejemplo el dólar, y moviendo siempre la cuenta<!-- conto --> en dólares.

El movimiento en moneda<!-- movimento in valuta --> tendrá, por lo tanto, el tipo de cambio<!-- tasso di cambio -->, referido a una determinada fecha de moneda, y el contravalor en euros que alimentará nuestro balance, expresado en la moneda de la empresa, por ejemplo el EURO.

Movimentar una cuenta<!-- conto -->, por ejemplo de un proveedor, simultáneamente en dos monedas diferentes, ejemplo dólar para algunos movimientos<!-- movimenti --> y la moneda china para otros, es posible, pero recomendamos, si es posible, mantener dos cuentas<!-- conti --> distintas, cada una con una sola moneda de referencia.

**Se debe evitar**, para no comprometer la posibilidad de uso correcto del procedimiento que estamos ilustrando, **los movimientos en euros sobre euros**, incluso de traspasos internos u otra causa, **en una cuenta<!-- conto --> en moneda extranjera**.

:::