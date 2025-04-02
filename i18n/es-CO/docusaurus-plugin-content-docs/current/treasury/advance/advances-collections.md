---
title: Introducción (Introduzione)
sidebar_position: 1
---

:::note[Info]
La práctica de anticipar las facturas en el banco es una operación financiera comúnmente utilizada por las empresas para obtener liquidez inmediata, anticipando la cobranza de las facturas emitidas a los clientes. Esta operación, también llamada descuento de facturas, permite convertir créditos comerciales en dinero en efectivo, mejorando así la gestión de la tesorería empresarial y la capacidad de hacer frente a pagos o inversiones sin tener que esperar los plazos de pago de los clientes.

La empresa presenta al banco una o más facturas que aún no han sido pagadas por los clientes. El banco anticipa una parte del valor de la factura, generalmente entre el 70% y el 90%, reteniendo una cuota como garantía hasta el pago completo. Una vez que el cliente paga la factura, el banco retiene una comisión y acredita el saldo restante a la empresa.

Contablemente, la empresa registra una deuda hacia el banco por el importe anticipado; cuando el cliente paga, la empresa cierra la deuda con el banco y registra los costos por comisiones, etc.
:::

Con este módulo de Fluentis ERP, es posible gestionar los descuentos de anticipos de facturas a presentar al banco, netos de comisiones e intereses, y contabilizar tanto la presentación como la cobranza final.

Antes de introducir nuevos descuentos de anticipos, es necesario gestionar previamente la Tabla TIPOS DE ANTICIPO.

En esta tabla se definen las posibles tipologías de descuento y sus parámetros correspondientes.

![](/img/it-it/treasury/advance/advances-collections/image01.png)

**codice / descrizione**: Libremente asignables por el usuario para calificar la tipología.

**tipo calcolo** (código / descripción): las opciones posibles son Imponible / Total: Documento. Indica si el porcentaje anticipado por el banco debe calcularse con referencia al total de la factura o solo al imponible.

**percentuale fatture anticipata**: aquí se debe insertar el valor del porcentaje de la factura que será anticipada por el banco.

![](/img/it-it/treasury/advance/advances-collections/image02.png)

**tipo acquisizione**: las posibles opciones son Vencimientos / Facturas. Esta opción solo controla cómo se visualizan los datos en la máscara de búsqueda para la creación del nuevo descuento, es decir, si se podrá seleccionar la factura completa o los vencimientos individuales de la factura. En cualquier caso, desde el punto de vista de la base de datos, las fechas de vencimiento (todas) también se gestionan en modo Facturas.

**numerazione**: es necesario establecer una numeración de la tabla de numeradores correspondiente para este tipo de documento.

**banca c/c**: (cuenta / descripción del subcuenta): inserte aquí la subcuenta que se utilizará en los registros contables relacionados con la cuenta corriente bancaria.

**conto bancario anticipi**: inserte la cuenta de apoyo utilizada para contabilizar el anticipo bancario.

![](/img/it-it/treasury/advance/advances-collections/image03.png)

**conto interessi passivi**: inserte la cuenta que se utilizará para la contabilización de intereses.

**Cuenta de comisiones (Conto commissioni)**: inserte la cuenta que se utilizará para la contabilización de comisiones bancarias.