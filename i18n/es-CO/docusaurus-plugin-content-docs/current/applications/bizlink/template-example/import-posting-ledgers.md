---
title: Importación de movimientos contables
sidebar_position: 2
ai_generated: true
---

El archivo de Excel (plantilla) para la importación de movimientos contables<!-- movimenti contabili --> en el módulo de Administración<!-- Amministrazione --> permite completar tanto la sección de IVA como la sección contable de las registraciones<!-- registrazioni -->, y por lo tanto debe ser llenado de manera adecuada según si se están importando asientos contables que involucran el IVA o simplemente asientos de diario simple<!-- scritture di prima nota -->.

SI se importan registraciones<!-- registrazioni --> de facturas: 
1ª fila = cabecera 
2ª fila = libro diario<!-- libro giornale --> + Registro IVA
3ª fila (y siguientes) = movimientos del libro diario<!-- movimenti del libro giornale -->

Diario simple<!-- Prima nota -->
1ª fila = cabecera
Otras filas = libro diario<!-- libro giornale -->

Ejemplo

![](/img/it-it/applications/bizlink/import-mov-contabili.png)

**Fecha Reg / Fecha Comp:** corresponden a la fecha de registro<!-- registrazione --> y competencia de la cabecera del asiento contable<!-- testata registrazione contabile -->. 

**Núm. Reg.<!-- Num Reg. -->** Atención, debe estar libre en la base de datos de destino, de lo contrario la función sobrescribirá el existente sin aviso (es una actualización SQL).

**Causal:** usar un código de causal<!-- causale --> ya existente y coherente con el asiento<!-- registrazione --> (por ejemplo, una causal IVA si importo registros de facturas)

**Registro IVA:** usar el código de un registro ya existente

**Protocolo IVA**: usar un protocolo libre

**Moneda; Divisa; Euro:** completar siempre todo aunque sea todo en euros y no exista tipo de cambio. Completar siempre la otra columna con 0,00 (Ejemplo: si lleno la columna Debe con 1000,00 en la columna adyacente Haber pongo 0,00)

**Cuenta / Subcuenta:** usar códigos de cuentas<!-- conti --> ya existentes

---
**Datos IVA<!-- Dati IVA -->**

Cargar el **código** de la tasa que debe estar ya presente en la base de datos<!-- db -->

Completar todos los datos, es decir, imponible IVA y también el IVA no deducible (eventualmente con valor 0,00)

---

Centro Empresarial: Opcional, si también desea cargar la asociación al centro de costo (ya existente)

Número de orden de trabajo<!-- commessa -->: Opcional, si también desea cargar la asociación

---

**En la pestaña de Parámetros<!-- tab Parametri -->** se puede colocar el valor 1 en **Recalcular<!-- Ricalcolo -->**, de este modo hará un recálculo de los datos a partir del libro diario<!-- libro giornale --> y así genera las partidas abiertas a partir de los datos de las condiciones de pago, por ejemplo, si faltaran porque no se han importado por separado. De lo contrario, no realiza ningún recálculo y las partidas, por ejemplo, no se crearán si no se importan. (Opción recomendada por razones de rendimiento y tiempos de procesamiento, especialmente si hay muchas filas)

Atención: las cuentas<!-- conti --> ya deben existir en la base de datos<!-- db -->, de lo contrario el mensaje de error no indicará cuál cuenta<!-- conto --> falta, sino que hará referencia siempre a la última fila del archivo de Excel.