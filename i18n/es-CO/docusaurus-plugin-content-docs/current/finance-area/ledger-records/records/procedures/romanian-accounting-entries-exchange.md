---
title: regolarizzazione valuta
sidebar_position: 2
---

La máscara se encuentra en Administración > Registros contables > Procedimientos > Regularización de moneda (Regolarizzazione valuta).

Este procedimiento permite calcular automáticamente, en una fecha determinada, las diferencias de cambio para las cuentas en moneda extranjera.

Es posible gestionar: 

- créditos y débitos (clientes y proveedores) 
- cuentas bancarias

**Se generan las partidas abiertas y los registros contables de ajuste a la diferencia de cambio.**

### Cómo calcular y registrar las diferencias de cambio (por ejemplo, a fin de año o en otra fecha)

- seleccionar una divisa (una por vez), respecto a la cual se ejecutará el cálculo, a través de la caja combinada **Divisa** en la cabecera de la máscara.  
- mediante los botones de opción a la derecha, seleccionar el tipo de cálculo:
    - Disponibilidad: considera los saldos (ej. bancarios)
    - Partidas: lee créditos y débitos hacia clientes / proveedores
        - Activa: clientes
        - Pasiva: proveedores

La cuenta / subcuenta y la División son filtros opcionales para restringir la búsqueda.

- Establecer en la parte inferior de la máscara la **fecha** de referencia (por ejemplo, 31/12/AAAA) para la regularización (es decir, el cálculo de la diferencia de cambio).  
- El valor del **cambio** correspondiente se cargará de acuerdo con los resultados de la tabla [**cambios de divisas**](/docs/configurations/tables/finance/currency-exchange).  
- Presionar Buscar.  

---

En la cuadrícula central que muestra el detalle de las posiciones buscadas, se destacan: 

- **Cuenta / subcuenta** extraída de la búsqueda y a gestionar.  
- **Importe en moneda** (expresado en la divisa extranjera), igual a la suma deudora menos la suma acreedora en moneda de todos los movimientos ocurridos en la cuenta.  
- **Importe (en euros) histórico**, suma de los movimientos deudores en euros menos la suma de los acreedores en euros.  
- **Importe corriente** que corresponde al importe en moneda recalculado al tipo de cambio actual (expuesto en la parte inferior de la máscara).  
- **Diferencia** de cambio positiva o negativa.  

---

En la zona de ***Parámetros*** se definen las cuentas para la ganancia o pérdida por cambios con las cuales se realizará la contabilización de la regularización (recogidas de los parámetros de contabilidad general).

- Introducir la causante contable deseada para crear la contabilización.  
- Presionar el comando **Contabilización**.  

---

<details>

  <summary>Más detalles (Uleriori dettagli)</summary>
  
El indicador **provvisorie**: permite generar la diferencia de cambio como registro contable provisional;  

**Cambio**: con el cual se calcula el valor actualizado. Se propone automáticamente por el programa (de la tabla de cambios de divisas), pero puede ser modificado por el usuario;  

**Fecha** y **Número** **documento** y **Causante** **contable** relacionados con el registro contable a regularizar. **La fecha introducida también representa la fecha hasta la cual se seleccionan los registros contables;**  

**Cuentas** **de ingreso** y **costo**: utilizadas para registrar las diferencias de cambio;  

En la pestaña de *Rollback*, es posible visualizar y restaurar el resultado de las operaciones de regularización realizadas según los filtros establecidos (Desde fecha/Hasta fecha, la cuenta).  

**Restaurar regularización:** Botón para borrar las operaciones de regularización seleccionadas en la cuadrícula de resultados. |  

</details>

:::danger[Atención]
Por defecto, cada **registro de cliente o proveedor** que se crea activa **en el plan de cuentas el indicador *Gestión de divisa***. Esta opción **no debe ser desactivada**, para no bloquear la posibilidad de utilizar este procedimiento y la correcta gestión del cierre de saldos en moneda extranjera.  

**En la gestión de la cuenta en moneda**, ya sea una cuenta de cliente o proveedor, o una cuenta bancaria, recomendamos **movimentar la cuenta de manera uniforme**, definiendo la divisa de movimiento, por ejemplo, el dólar, y siempre moviendo la cuenta en dólares.  

El movimiento en moneda tendrá, por lo tanto, el tipo de cambio, referido a una cierta fecha de moneda, y el contravalor en euros que alimentará nuestro balance, expresado en la divisa de la empresa, por ejemplo, el EURO.  

Movimentar una cuenta, por ejemplo, de un proveedor, simultáneamente en dos divisas diferentes, por ejemplo, dólares para algunos movimientos y la divisa china para otros, es posible, pero recomendamos, si es posible, el mantenimiento de dos cuentas distintas, cada una con una única divisa de referencia.  

**Se** deben **evitar**, para no comprometer la posibilidad de uso correcto del procedimiento que estamos ilustrando, **los movimientos en euros sobre euros**, incluso de transferencia o cualquier otra causa, **en una cuenta en divisa**.  

:::