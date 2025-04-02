---
title: importazione partite aperte
sidebar_position: 2
---

El archivo de Excel (template) para la importación de las partidas abiertas en el módulo de Administración debe ser completado en ambas secciones:

## **Parámetros de Bizlink:**

**Sección visible al hacer doble clic en uno de los campos combinados, o solicitada por el software antes de confirmar y ejecutar la importación**

Campos a completar (no se valoran automáticamente)

- En pago (In pagamento): indicador que indica si la partida ya está incluida en una lista de transferencia a proveedores. Generalmente se debe configurar en 0 (FALSE) para partidas abiertas normales.
- Estado de la partida (Stato partita): corresponde a los estados presentes en la interfaz, generalmente se utiliza Abierta (Aperta), o parcialmente abierta (residuo diferente de cero) o vencida (un subconjunto de abierta con fecha de vencimiento ya pasada).

## **Datos:**

CLIENTE / PROVEEDOR (CLIENTE / FORNITORE)
    
- Cuenta / Subcuenta (Conto / Sottoconto): introducir un código de cuenta y subcuenta de clientes o proveedores ya presente en Fluentis (OBLIGATORIO).

REFERENCIAS DEL DOCUMENTO (RIFERIMENTI DOCUMENTO)
- Tipo de código (Tipo codice): ej. FA para factura de compra, FV para factura de venta. Usar la codificación ya presente en Fluentis y ya poblada por el FastStart. En caso de problemas o si no se encuentran los tipos deseados, verifique la tabla SQL Fluentis.SH_DocumentTypes con respecto al campo (no visible en interfaz) SHDT_Country_SHCNTR_Id, asignando el id correspondiente al código IT de la tabla Fluentis.SH_Countries.
- Número / fecha de la factura (Numero / data Fattura): opcionales, en caso de partida genérica se pueden omitir indicando como tipo de documento GEN.

DATOS DEL PAGO (DATI PAGAMENTO)
- Tipo de pago (Tipo pagamento): debe estar ya presente en Fluentis (consultar el código de los tipos de pago existentes) - OBLIGATORIO. ATENCIÓN: en la tabla Tipos de pago (también desde interfaz) verificar que esté completado el campo País con código IT para habilitar los tipos deseados y permitir una correcta importación (los tipos no válidos porque no están habilitados también son evidentes porque no son visibles si se utiliza el cuadro combinado con doble clic en el archivo de Excel).
- Fecha de vencimiento (Scadenza): es la fecha de vencimiento de la partida - OBLIGATORIO.
- Cuenta / subcuenta del banco (Conto / sottoconto banca): se trata del banco de respaldo asociado a la partida (opcional).

DATOS DE LAS PARTIDAS (DATI PARTITE)
- Residuo (Dare / Avere): dato del residuo abierto, si la partida no está parcialmente pagada corresponde al valor total. 
DATO EXPRESADO EN LA MONEDA INGRESADA EN LA COLUMNA CORRESPONDIENTE. ATENCIÓN, completar la sección Debito (Dare) o Crédito (Avere) (según el signo de la partida) e insertar siempre el valor 0,00 en la columna adyacente. (si se valora Debito ej. 100,00, se pone en Crédito 0,00) OBLIGATORIO.
- Contravalor (Dare / Avere): es el valor de la partida en la moneda de cuenta de la empresa (ej. Euro). ATENCIÓN, completar la sección Debito (Dare) o Crédito (Avere) (según el signo de la partida) e insertar siempre el valor 0,00 en la columna adyacente. (si se valora Debito ej. 100,00, se pone en Crédito 0,00). OBLIGATORIO.
- Divisa (Divisa): completar con un código ya presente en Fluentis (ej. Eur para Euro, Usd para dólar). OBLIGATORIO.
- No pagable (Non pagabile): indicador que indica si la partida está bloqueada y no es pagable (1) o libre (0). OBLIGATORIO.
- Notas de bloqueo (Note blocco): campo opcional para notas de la partida.

DATOS DE REGISTRO (DATI REGISTRAZIONE)
Fecha y número de referencia del registro contable asociado a la partida. Sección opcional.

ATENCIÓN: si se completa el registro, este debe ya estar presente en Fluentis y será buscado por la importación; si no se encuentra, la importación devolverá un error.

---

Verifique que en las divisas (tabla de divisas) esté completado en todas partes el isocode (a veces falta precisamente para el euro).

**ATENCIÓN**: verificar que el numerador de las partidas incluya también los años anteriores si en el archivo de Excel hay partidas con vencimientos de años anteriores, de lo contrario generará un error. Esto se debe a que, típicamente, una nueva base de datos tiene un numerador que comienza en el año actual.