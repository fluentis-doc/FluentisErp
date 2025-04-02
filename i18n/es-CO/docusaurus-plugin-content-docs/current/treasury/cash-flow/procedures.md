---
title: generazione automatica cashflow
sidebar_position: 4
---

Normalmente, la simulación de cash flow se crea a través de esta máscara, que permite definir los parámetros de gestión para cada tipo de flujo.

Cada nueva elaboración guardará el cálculo asociado al campo **Número**, asignado automáticamente. También es posible asociar una **Descripción** de detalle.

*Campos específicos*

**Tipo / Descripción de flujo (Tipo / Descrizione flusso):** tomados de la tabla Tipos de flujo.

**Desde Fecha / Hasta Fecha (Da Data / A Data):** Rango de fechas de filtro que actúan según la lógica específica de cada tipo de flujo (ver más abajo).

**Habilitado (Abilitato):** indicador que gestiona el uso efectivo del tipo de flujo correspondiente en el cálculo que se va a ejecutar.

**Registros provisionales (Registrazioni provvisorie):** considera o no los datos relacionados con registros contables en estado *provvisorio*.

**No pagables (Non pagabili):** considera también las partidas abiertas en estado *non pagabile*.

**Usar cantidad residual (Usa q.ta residua):** permite considerar los pedidos según la cantidad residual por cumplir.

**Usar en la disposición actual (Usa nella disp. attuale):** lee los efectos en cartera PRESENTADOS y no insolutos con vencimientos superiores a hoy y los muestra en la fecha de hoy en la cuenta ORDINARIA presente en la lista de presentación (aunque contablemente el abono será solo después del cobro).

**Usar en vencimiento en el castelletto (Usa in scad. nel castelletto):** permite considerar también los efectos presentados al salvo buen fin. En particular, usa la cuenta bancaria de respaldo para el s.b.f. (salvo buen fin) ingresado en la lista de presentación (en lugar de la cuenta del cliente como lo hace cuando el efecto es solo *emesso*) y lo mueve en debe, según lo presentado en las diversas fechas de vencimiento de los efectos incluidos en la lista.

:::danger ATENCIÓN (ATTENZIONE)
Los efectos ingresados en la lista solo serán visibles si tienen el indicador **contabilizzato** activo (ya que se ha realizado la contabilización de la emisión). Aunque es posible incluirlos en la lista para su presentación en el banco, incluso si no han sido contabilizados, se recomienda tener cuidado.

Otra condición importante es el filtro que excluye (independientemente de la fecha de filtro establecida antes de lanzar el cálculo) los efectos con fecha de vencimiento anterior a "hoy", es decir, la fecha de elaboración del cash flow en cuestión.
:::

Si está habilitado en relación con el tipo de flujo **anticipi**, va a detectar los importes de las listas de anticipos de facturas no contabilizadas por el importe anticipado en la cuenta bancaria, con fecha igual a la fecha de vencimiento anticipada.

**ATENCIÓN (ATTENZIONE):**
Si se elige esta opción, NO se deben ingresar también las cuentas de apoyo utilizadas para el s.b.f. en la consistencia financiera inicial (a través de la gestión de *tipos de cuenta financiera*), de lo contrario, los datos (en términos de flujo de caja positivo) se duplicarán y, por lo tanto, el resultado será distorsionado y no confiable.

*Detalle de las lógicas aplicadas a los tipos de flujo*:

**Saldo contable (Saldo contabile):** el rango de fechas se utiliza para calcular el saldo contable según la fecha de registro contable.

**Partidas (Partite):** el rango de fechas se utiliza para filtrar sobre las fechas de vencimiento de las partidas. También hay indicadores para considerar las partidas relacionadas con registros provisionales, así como las partidas no pagables.

**Pedidos de clientes/proveedores (Ordini clienti/fornitori):** el rango de fechas filtra por la fecha del pedido. Solo se consideran los tipos con el indicador *cash flow* configurado, impresos y confirmados. Se recomienda establecer el indicador *usar cantidades residuales (usa Qta residue)* para simular un pedido según la cantidad residual a entregar/recibir. Se calculan las fechas de vencimiento hipotéticas basadas en las configuraciones de tipo/solución de pago establecidas en la cabecera, tomando como fecha de inicio la fecha de entrega de la línea (si falta, la fecha de entrega de la cabecera del pedido) o la fecha de hoy si esta es anterior a hoy.

**DDT de compra/venta (DDT di acquisto/vendita):** el rango de fechas filtra por la fecha del DDT. Solo se consideran los tipos establecidos de ‘cash flow’, impresos o controlados, no ya valorados en factura. Se calculan las fechas de vencimiento hipotéticas basadas en las configuraciones de tipo/solución de pago establecidas en la cabecera, a partir de la fecha del DDT.

**Facturas de compra/venta (Fatture di acquisto/vendita):** el rango de fechas filtra por la fecha de vencimiento en factura. Se consideran los documentos no proforma, impresos o controlados, no ya contabilizados.

**Pedidos de trabajo (Ordini di conto lavoro):** el rango de fechas filtra por la fecha del pedido, solo pedidos impresos no cumplidos. Se crean fechas de vencimiento hipotéticas según el residual no retornado y el costo del trabajo.

**Devoluciones de trabajo (Rientri di conto lavoro):** el rango de fechas filtra por la fecha de regreso, solo devoluciones impresas no facturadas. 

Las devoluciones deben generarse cumpliendo el pedido de trabajo y no deben ingresarse manualmente, de lo contrario no serán visibles.

**Extracontable (Extracontabile):** el rango de fechas filtra por la fecha de vencimiento extracontable.

Los parámetros de ejecución se almacenan: solo la fecha final del tipo de flujo saldo contable se vuelve a proponer como fecha de hoy al abrirse. Una vez que se ha establecido la descripción del cash flow, será posible presionar el botón de cálculo. Teniendo en cuenta los movimientos de los pedidos, para los cuales el sistema debe hacer una simulación línea por línea, la elaboración puede ser particularmente larga dependiendo de la cantidad de datos presentes en el filtro establecido. Una vez completada la elaboración, se podrá abrir el cash flow a través del botón de gestión correspondiente.

**Cartera activa (Portafoglio attivo):** ATENCIÓN: en relación con el flujo de las listas SBF, se debe tener cuidado con los efectos presentados pero no contabilizados (contabilización de la emisión), la situación puede surgir, por ejemplo, emitiéndolos a partir de las fechas de las facturas y luego ingresándolos en la lista sin contabilizar la emisión. En tal situación, los efectos no se incluirán en el cash flow. Otra condición a tener en cuenta es que, independientemente del filtro, la fecha de vencimiento del efecto debe ser mayor o igual a "hoy" (fecha de elaboración del cash flow).

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Creación (Creazione) | Ejecuta el procedimiento de generación del cash flow según las configuraciones ingresadas en la máscara. |
| Modificación (Modifica) | Abre en modificación el cash flow creado. |