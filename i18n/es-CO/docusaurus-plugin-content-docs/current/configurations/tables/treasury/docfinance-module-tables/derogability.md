---
title: Derogabilidad
sidebar_position: 2
ai_generated: true
---

Permite definir los códigos de derogabilidad de los flujos financieros<!-- flussi finanziari -->, es decir, básicamente el grado de prioridad/importancia de las deudas<!-- debiti -->, tal como se gestionan en DocFinance (el código del ERP<!-- gestionale --> debe ser el mismo que el de DocFinance).

Por tanto, debe entenderse como un dato necesario y específico del software DocFinance.

:::note[Detalles<!-- Dettagli -->]
**si el parámetro de exportación es 0**; se considera por defecto la derogabilidad del plan de cuentas<!-- piano dei conti -->:

	si es nulo en el plan de cuentas<!-- piano dei conti -->, entonces:

se asigna 01 si es diferente de BO y RD (transferencia bancaria<!-- bonifico --> y pago directo<!-- rimessa diretta -->, cadenas fijas)

de lo contrario se toma la diferencia en días entre el vencimiento y la fecha actual: si es mayor a 90 entonces se asigna 04, si está entre 30 y 90 días entonces se asigna 03, y si está entre 0 y 30 entonces se asigna 02, de lo contrario se asigna 01.

**si el parámetro es 1 entonces se lee**:

	para los proveedores desde la derogabilidad del tipo de pago
	si la derogabilidad está vacía (es decir, cuando no está definida en el proveedor<!-- fornitore --> o no es un proveedor<!-- fornitore -->) entonces desde la derogabilidad del plan de cuentas<!-- piano dei conti -->

:::

Es posible gestionar en el plan de cuentas<!-- piano dei conti --> y pasar a DocFinance como dato estadístico también el campo **Rubros de gasto<!-- Voci di spesa -->**.

caracteres disponibles: 6, compilados de la siguiente manera

Los primeros 4 caracteres del código del rubro de gasto<!-- voce spesa --> de la cuenta del flujo de caja<!-- conto del flusso di cash flow -->, si este es nulo entonces de los primeros 4 caracteres de la cuenta<!-- conto --> (FSLedgerAccount.Code)

Los siguientes 2 caracteres se toman del rubro de gasto<!-- voce spesa --> de la cuenta con el mayor imponible IVA en el asiento contable<!-- registrazione contabile --> que creó la partida<!-- partita --> (por lo tanto, solo se gestiona para flujo de partidas<!-- flusso di partite -->, de la cuenta de la cuadrícula de IVA<!-- griglia iva --> que tenga el mayor imponible)

ejemplo de configuración típica:

0101      Clientes Italia

0102      Clientes Exterior

0201      Proveedores Italia

0202      Proveedores Exterior