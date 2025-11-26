---
title: Introducción
sidebar_position: 1
ai_generated: true
---

:::note[Info]<!-- Info -->
La práctica de anticipar facturas en el banco es una operación financiera comúnmente utilizada por las empresas para obtener liquidez inmediata, adelantando el cobro de las facturas emitidas a los clientes. Esta operación, también llamada descuento de facturas<!-- sconto fatture -->, permite convertir créditos comerciales en dinero líquido, mejorando así la gestión de la caja empresarial y la capacidad de hacer frente a pagos o inversiones sin tener que esperar los plazos de pago de los clientes.

La empresa presenta al banco una o varias facturas que aún no han sido pagadas por los clientes. El banco anticipa una parte del valor de la factura, normalmente entre el 70% y el 90%, reteniendo una cuota como garantía hasta el pago completo. Una vez que el cliente paga la factura, el banco retiene una comisión y acredita el saldo restante a la empresa.

Contablemente, la empresa registra una deuda con el banco por el importe anticipado; cuando el cliente paga, la empresa cierra la deuda con el banco y registra los costes por comisiones, etc.
:::

Con este módulo de Fluentis ERP, es posible gestionar las listas de anticipo de facturas<!-- distinte di anticipo fatture --> para presentar al banco, netas de comisiones e intereses, y contabilizar tanto la presentación como el cobro final.

Antes de ingresar nuevas listas de anticipo<!-- distinte di anticipo -->, es necesario gestionar previamente la Tabla TIPOS DE ANTICIPO<!-- Tabella TIPI ANTICIPO -->.

En esta tabla se definen los posibles tipos de listas<!-- tipologie di distinta --> y los parámetros relacionados.

![](/img/it-it/treasury/advance/advances-collections/image01.png)

**Código / Descripción**: Asignables libremente por el usuario para calificar el tipo.

**Tipo de cálculo<!-- Tipo calcolo -->** (código / descripción): las opciones posibles son Imponible / Total: Documento. Indica si el porcentaje anticipado por el banco debe calcularse con referencia al total de la factura<!-- totale fattura --> o solo al imponible.

**Porcentaje de la factura anticipado<!-- Percentuale fatture anticipata -->**: aquí se ingresa el valor del porcentaje de la factura que será anticipado por el banco.

![](/img/it-it/treasury/advance/advances-collections/image02.png)

**Tipo de adquisición<!-- Tipo Acquisizione -->**: las opciones posibles son Vencimientos / Facturas<!-- Scadenze / Fatture -->. Esta opción solo controla la forma en que se visualizan los datos en la pantalla de búsqueda para la creación de la nueva lista, es decir, si será posible seleccionar la factura entera o los vencimientos individuales de la factura. En cualquier caso, en la base de datos siempre se gestionan los vencimientos (todos), incluso en el modo Facturas<!-- Fatture -->.

**Numeración**: es necesario establecer una numeración desde la tabla correspondiente de numeradores para este tipo de documento.

**Banco C/C**: (cuenta / subcuenta<!-- sottoconto --> descripción): aquí se debe ingresar la subcuenta<!-- sottoconto --> que será utilizada en los asientos contables relacionados con la cuenta corriente bancaria<!-- conto corrente bancario -->.

**Cuenta bancaria anticipos<!-- Conto bancario anticipi -->**: aquí se debe ingresar la cuenta puente utilizada para contabilizar el anticipo bancario<!-- antipo bancario -->.

![](/img/it-it/treasury/advance/advances-collections/image03.png)

**Cuenta de intereses pasivos<!-- Conto interessi passivi -->**: ingrese la cuenta a utilizar para la contabilización de los intereses.

**Cuenta de comisiones<!-- Conto commissioni -->**: ingrese la cuenta a utilizar para la contabilización de las comisiones bancarias.