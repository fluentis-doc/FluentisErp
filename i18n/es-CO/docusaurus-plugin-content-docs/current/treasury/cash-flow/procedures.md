---
title: Generación automática CashFlow
sidebar_position: 4
ai_generated: true
---

Normalmente la simulación de cash flow<!-- cash flow --> se crea a través de esta pantalla, que permite definir los parámetros de gestión para cada tipo de flujo<!-- flusso -->.

Cada nuevo procesamiento guardará el cálculo asociado al campo **Número<!-- Numero -->**, asignado automáticamente. Además, es posible asociar una **Descripción<!-- Descrizione -->** de detalle.

*Campos específicos<!-- Campi specifici -->*

**Tipo / Descripción de flujo<!-- Tipo / Descrizione flusso -->:** extraídos de la tabla Tipos de flujo<!-- Tipi flusso -->.

**Desde Fecha / Hasta Fecha<!-- Da Data / A Data -->:** Rango de fechas de filtro que se aplican según la lógica específica de cada tipo de flujo<!-- tipo flusso --> (ver más abajo).

**Habilitado<!-- Abilitato -->:** indicador que gestiona el uso efectivo del tipo de flujo<!-- tipo flusso --> correspondiente en el cálculo que se va a ejecutar.

**Registros provisionales<!-- Registrazioni provvisorie -->:** considera o no también los datos asociados a registros contables<!-- registrazioni contabili --> en estado *Provisional<!-- Provvisorio -->*.

**No pagables<!-- Non pagabili -->:** considera o no también las partidas abiertas en estado *No pagable<!-- Non pagabile -->*.

**Usar cantidad residual<!-- Usa q.ta residua -->:** permite considerar los pedidos según la cantidad pendiente<!-- residua --> de entregar.

**Usar en la disp. actual<!-- Usa nella disp. attuale -->:** lee los efectos en portafolio PRESENTADOS y no impagados con vencimientos posteriores a hoy y los expone a la fecha de hoy en la cuenta ORDINARIA presente en la remesa de presentación (aunque contablemente el abono será solo después del cobro).

**Usar en vencimiento en el castelletto<!-- Usa in scad. nel castelletto -->:** permite considerar también los efectos presentados al salvo buen fin. En particular, utiliza la cuenta bancaria de apoyo para el s.b.f. (salvo buen fin) incluida en la remesa de presentación (en lugar de la cuenta del cliente como hace cuando el efecto es solo *Emitido<!-- Emesso -->*) y realiza el movimiento al debe en base a lo presentado en las distintas fechas de vencimiento de los efectos incluidos en la remesa.

:::danger ATENCIÓN<!-- ATTENZIONE -->
Los efectos incluidos en la remesa solo serán visibles si tienen activo el indicador **Contabilizado<!-- Contabilizzato -->** en su interior (ya que se ha realizado la contabilización de la emisión). Ya que es posible incluirlos en la remesa para la presentación en el banco incluso si no han sido contabilizados, se recomienda prestar atención.

Otra condición importante es el filtro que excluye (independientemente de la fecha de filtro configurada antes de ejecutar el cálculo) los efectos con fecha de vencimiento anterior a "hoy", es decir, la fecha de procesamiento del cashflow<!-- cashflow --> en cuestión.
:::

Si está habilitado en relación al tipo de flujo **Anticipos<!-- Anticipi -->**, detecta los importes de las remesas de anticipo de facturas que no han sido contabilizadas por el importe anticipado en la cuenta bancaria, con fecha igual a la fecha de vencimiento anticipada.

**ATENCIÓN:**
Si se elige esta opción NO deben incluirse también las cuentas de apoyo utilizadas para el s.b.f. en la consistencia financiera inicial (a través de la gestión de los *tipos de cuenta financiera<!-- tipi conto finanziario -->*,) de lo contrario el dato (en términos de flujo de caja positivo) se duplicará y el resultado será inexacto y no fiable.

*Detalle de las lógicas aplicadas a los tipos de flujo<!-- Dettaglio delle logiche applicate ai tipi flusso -->*:

**Saldo contable<!-- Saldo contabile -->**: el rango de fechas se utiliza para calcular el saldo contable<!-- saldo contabile --> según la fecha de registro contable<!-- registrazione contabile -->.

**Partidas<!-- Partite -->**: el rango de fechas se utiliza para filtrar sobre las fechas de vencimiento de las partidas<!-- partite -->. Luego hay indicadores para considerar las partidas<!-- partite --> asociadas a registros provisionales<!-- registrazioni provvisorie --> así como las partidas<!-- partite --> no pagables<!-- non pagabili -->.

**Órdenes de clientes/proveedores<!-- Ordini clienti/fornitori -->**: el rango de fechas filtra según la fecha de pedido. Solo se consideran las tipologías con el indicador *cash flow* activado, impresas y confirmadas. Se recomienda activar el indicador *usar Cantidad residual<!-- Usa Qta residue -->* para simular un pedido según la cantidad pendiente<!-- residua --> por entregar/recibir. Se calculan los vencimientos hipotéticos en base a los ajustes de tipo/solución de pago configurados en la cabecera, tomando como punto de partida la fecha de entrega de la línea (si no está, la fecha de entrega de cabecera del pedido) o la fecha de hoy si la anterior es antes de hoy.

**Albaranes de compra/venta<!-- DDT di acquisto/vendita -->**: el rango de fechas filtra según la fecha del albarán. Solo se consideran las tipologías configuradas de ‘cash flow<!-- cash flow -->’, impresas o controladas, no ya valorizadas en factura. Se calculan los vencimientos hipotéticos en base a los ajustes de tipo/solución de pago configurados en la cabecera, a partir de la fecha del albarán.

**Facturas de compra/venta<!-- Fatture di acquisto/vendita -->**: el rango de fechas filtra según la fecha de vencimiento en la factura. Se consideran los documentos no proforma, impresos o controlados, no ya contabilizados.

**Órdenes de maquila<!-- Ordini di conto lavoro -->**: el rango de fechas filtra por fecha de pedido, solo órdenes impresas no cumplidas. Se crean vencimientos hipotéticos en base al saldo no retornado y el costo de la maquila<!-- lavorazione -->.

**Retornos de maquila<!-- Rientri di conto lavoro -->**: el rango de fechas filtra por fecha de retorno, solo retornos impresos no facturados.

Los retornos deben generarse cumpliendo con el pedido de maquila<!-- ordine di conto lavoro --> y no ingresarse manualmente; de lo contrario, no serán visibles.

**Extra-contable<!-- Extracontabile -->**: el rango de fechas filtra según la fecha de vencimiento extra-contable<!-- scadenza extracontabile -->.

Los parámetros de ejecución se almacenan: solo la fecha final del tipo de flujo saldo contable<!-- tipo flusso saldo contabile --> se vuelve a proponer siempre como fecha de hoy al abrir. Una vez configurada la descripción del cash flow<!-- cash flow --> será posible pulsar el botón de cálculo. Considerando los movimientos de los pedidos, para los cuales el sistema debe realizar una simulación línea por línea, el procesamiento puede ser especialmente largo según el volumen de los datos presentes en el filtro configurado. Una vez finalizado el procesamiento, será posible abrir el cash flow<!-- cash flow --> a través del botón de gestión correspondiente.

**Portafolio activo<!-- Portafoglio attivo -->**: ATENCIÓN: en relación al flujo de las remesas SBF, hay que prestar atención a los efectos presentados pero no contabilizados (contabilización de la emisión), la situación puede producirse, por ejemplo, al emitirlos desde los vencimientos de facturas y luego incluirlos en la remesa sin contabilizar la emisión. En tal situación, los efectos no serán incluidos en el cashflow<!-- cashflow -->. Otra condición a tener en cuenta es que, independientemente del filtro, la fecha de vencimiento del efecto debe ser mayor o igual a "hoy" (fecha de elaboración del cashflow<!-- cashflow -->).

**RDA**: filtra las RDA autorizadas, no cumplidas o forzadamente cumplidas, y agrupa las líneas por fecha de solicitud (o por fecha de entrega si está prevista). Calcula los vencimientos hipotéticos (IVA incluido) en base a la solución de pago asociada al maestro de proveedor introducido en la RDA.

| Función | Significado |
| --- | --- |
| Creación | Ejecuta el procedimiento de generación del cash flow<!-- cash flow --> según los ajustes introducidos en la pantalla. |
| Modificación | Abre en modificación el cash flow<!-- cash flow --> creado. |