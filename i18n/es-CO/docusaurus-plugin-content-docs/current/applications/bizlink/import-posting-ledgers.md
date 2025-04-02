---
title: importazione movimenti contabili
sidebar_position: 2
---

El archivo de Excel (plantilla) para la importación de movimientos contables en el módulo de Administración permite poblar tanto la sección de IVA como la sección contable de los registros, y por lo tanto se debe completar de manera adecuada según si se están importando asientos contables que involucran el IVA o simplemente asientos de primera nota.

Si se importan registros de facturas:  
1^ fila = encabezado (testata)  
2^ fila = libro diario (libro giornale) + Registro IVA  
3^ fila (y siguientes) = movimientos del libro diario (movimenti del libro giornale)  

Primera nota  
1^ fila = encabezado (testata)  
Otras filas = libro diario (libro giornale)  


Ejemplo

![](/img/it-it/applications/bizlink/import-mov-contabili.png)

**Fecha Reg / Fecha Comp:** son las fechas de registro y competencia del encabezado del registro contable. 

**Num Reg.:** Atención, debe estar libre en la base de datos de destino, de lo contrario la función sobrescribirá lo que encuentre sin control (es una actualización SQL).

**Causa:** utilizar un código de causa ya presente y coherente con el registro (por ejemplo, una causa de IVA si importo registros de facturas).

**Registro IVA:** utilizar el código de un registro ya existente.

**Protocolo IVA:** utilizar un protocolo libre.

**Divisa; Moneda; Euro:** completar siempre todo, incluso si es todo en euros y no hay cambio. Completar siempre también la otra columna con 0,00 (por ejemplo, si completo la columna de debe 1000,00 en la columna adyacente de haber pongo 0,00).

**Cuenta / Subcuenta:** utilizar códigos de cuentas ya existentes. 

---
**Datos IVA (Dati IVA)**

Cargar el **código** de la alícuota que debe estar ya presente en la base de datos.

Completar todos los datos, por lo tanto la base imponible de IVA y también IVA no deducible (eventualmente con valor 0,00).

---

Centro Empresarial: Opcional, si deseo cargar también el enlace al centro de costo (ya presente).

Número de orden: Opcional, si deseo cargar también el enlace.

---

**En la pestaña Parámetros (tab Parametri)** se puede poner el valor 1 en **ricalcolo**, de este modo se realiza un recalculo de los datos a partir del libro diario y se generan las partidas abiertas a partir de los datos de las condiciones de pago si, por ejemplo, faltan porque no se importaron por separado. De lo contrario, no se realizará ningún recalculo y las partidas no se crearán si no se importan. (Opción recomendada por razones de rendimiento y tiempos de procesamiento, especialmente con muchas filas).

Atención: las cuentas deben existir ya en la base de datos, de lo contrario, el mensaje de error no indicará qué cuenta falta, sino que se refiere siempre a la última fila del archivo de Excel.