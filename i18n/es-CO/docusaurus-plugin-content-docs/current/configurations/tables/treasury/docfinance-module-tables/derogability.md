---
title: Desregulación
sidebar_position: 2
---

Permite definir los códigos de desregulación de los flujos financieros, es decir, básicamente el grado de prioridad/importancia de las deudas, tal como se gestionan en DocFinanzas (el código del ERP debe ser el mismo que el de DocFinanzas).

Por tanto, debe entenderse como un dato necesario y específico del software DocFinanzas.

:::note[Detalles]
**si el parámetro de exportación es 0**; se considera por defecto la desregulación del plan de cuentas:

	si es nulo en el plan de cuentas<!-- piano dei conti -->, entonces:

se asigna 01 si es diferente de BO y RD (transferencia bancaria y pago directo, cadenas fijas)

de lo contrario se toma la diferencia en días entre el vencimiento y la fecha actual: si es mayor a 90 entonces se asigna 04, si está entre 30 y 90 días entonces se asigna 03, y si está entre 0 y 30 entonces se asigna 02, de lo contrario se asigna 01.

**si el parámetro es 1 entonces se lee**:

	para los proveedores desde la desregulación del tipo de pago
	si la desregulación está vacía (es decir, cuando no está definida en el proveedor o no es un proveedor) entonces desde la desregulación del plan de cuentas

:::

Es posible gestionar en el plan de cuentas y pasar a DocFinanzas como dato estadístico también el campo **Elementos de carga**.

caracteres disponibles: 6, compilados de la siguiente manera

Los primeros 4 caracteres del código de la entrada de gasto de la cuenta del flujo de caja, si este es nulo entonces de los primeros 4 caracteres de la cuenta (FSLedgerAccount.Code)

Los siguientes 2 caracteres se toman de la entrada de gasto de la cuenta con el mayor imponible IVA en el registro contable que creó la madurez (por lo tanto, solo se gestiona para flujo de valores mat., de la cuenta de la cuadrícula de IVA que tenga el mayor imponible)

ejemplo de configuración típica:

0101      Clientes Italia

0102      Clientes Exterior

0201      Proveedores Italia

0202      Proveedores Exterior