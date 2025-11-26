---
title: Importación de partidas abiertas
sidebar_position: 2
ai_generated: true
---

El archivo Excel (plantilla) para la importación de partidas abiertas<!-- partite aperte --> en el módulo Administración<!-- Amministrazione --> debe ser completado en ambas secciones:

## **Parámetros Bizlink<!-- Bizlink parameters -->:**<!-- Bizlink parameters: -->

**Sección visible haciendo doble clic en uno de los campos combo, o requerida por el software antes de confirmar y ejecutar la importación**

Campos que deben completarse (no se valoran automáticamente):

- En pago: bandera que indica si la partida ya está incluida en una transferencia bancaria de proveedores. Generalmente se debe establecer en 0 (FALSE) para partidas abiertas normales<!-- partite aperte -->.
- Estado de la partida: corresponde a los estados presentes en las interfaces, generalmente se utiliza Abierta, o parcialmente abierta (saldo diferente de cero) o vencida (un subconjunto de abiertas con fecha de vencimiento pasada)

## **Datos<!-- Dati -->:**

CLIENTE / PROVEEDOR
    
- Cuenta / Subcuenta<!-- Conto / Sottoconto -->: ingrese un código de cuenta y subcuenta de cliente o proveedor ya existente en Fluentis (OBLIGATORIO)

REFERENCIAS DEL DOCUMENTO
- Tipo de código: por ejemplo FA para factura de compra, FV para factura de venta. Utilizar la codificación ya presente en Fluentis y ya poblada por FastStart. En caso de problemas o ausencia de los tipos deseados, verifique la tabla sql Fluentis.SH_DocumentTypes en relación al campo (no visible en la interfaz) SHDT_Country_SHCNTR_Id, otorgando el id correspondiente al código IT de la tabla Fluentis.SH_Countries.
- Número / fecha de factura: opcional, en el caso de partida genérica puede omitirse indicando como tipo de documento GEN.

DATOS DE PAGO
- Tipo de pago: debe estar ya presente en Fluentis (refiérase al código de los tipos de pago existentes) - OBLIGATORIO. ATENCIÓN: en la tabla Tipos de pago (también desde la interfaz), verifique que el campo Nación esté completado con el código IT para habilitar los tipos deseados y permitir una correcta importación (los tipos inválidos porque no están habilitados también pueden intuirse porque no aparecen si se usa la combo box con doble clic en el trazo Excel)
- Vencimiento: es la fecha de vencimiento de la partida - OBLIGATORIO.
- Cuenta / subcuenta bancaria: es el banco asociado a la partida (opcional)

DATOS DE LAS PARTIDAS<!-- DATI PARTITE -->
- Saldo (Debe / Haber): dato del saldo abierto, si la partida no está parcialmente pagada corresponde al contravalor.
DATO EXPRESADO EN LA MONEDA INTRODUCIDA EN LA COLUMNA ESPECÍFICA. ATENCIÓN, complete la sección Debe o Haber (dependiendo del signo de la partida) e ingrese siempre el valor 0,00 en la columna adyacente. (si ingresa en Debe por ej. 100,00, coloque en Haber 0,00) OBLIGATORIO.
- Contravalor (Debe / Haber): es el valor de la partida en la moneda contable de la empresa (por ej. Euro). ATENCIÓN, complete la sección Debe o Haber (dependiendo del signo de la partida) e ingrese siempre el valor 0,00 en la columna adyacente. (si ingresa en Debe por ej. 100,00, coloque en Haber 0,00). OBLIGATORIO.
- Moneda<!-- Divisa -->: completar con un código ya presente en Fluentis (por ej. Eur para Euro, Usd para dólar). OBLIGATORIO.
- No pagable: bandera que indica si la partida está bloqueada y no es pagable (1) o libre (0). OBLIGATORIO.
- Notas de bloqueo: campo de notas de la partida, opcional.

DATOS DE REGISTRO<!-- DATI REGISTRAZIONE -->
Fecha y número de referencia del registro contable asociado a la partida.
Sección opcional.

ATENCIÓN: si se completa, el registro debe estar ya presente en Fluentis y será buscado durante la importación. Si no se encuentra, la importación devolverá error.

---

Verifique que en las monedas (tabla de monedas) el isocode esté completado en todas partes (a veces falta, especialmente para el euro).

**ATENCIÓN**: verifique que el numerador de las partidas incluya también los años anteriores si en el archivo Excel hay partidas con vencimientos de años anteriores, de lo contrario aparecerá un error. Esto es porque, típicamente, una base de datos nueva tiene un numerador que comienza desde el año en curso.