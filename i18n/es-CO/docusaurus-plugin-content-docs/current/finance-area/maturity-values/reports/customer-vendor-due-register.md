---
title: Vencimientos Clientes / Proveedores
sidebar_position: 1
ai_generated: true
---

Desde este formulario es posible definir todos los parámetros preliminares y lanzar la impresión del vencimientos clientes / proveedores<!-- scadenziario clienti / fornitori -->.

El formulario es igual al presente para el lanzamiento de otras impresiones basadas en la elaboración de partidas abiertas<!-- partite aperte -->, sin embargo algunos campos podrían no ser utilizados o pertinentes a la impresión específica en cuestión.

En la parte superior del formulario hay varios filtros sobre los datos de origen:

**![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image01.png)**

**Cuenta<!-- Conto -->:** filtro principal sobre los subcuentas<!-- sottoconti --> de clientes / proveedores. Si no se ingresa ningún dato, el vencimientos<!-- scadenziario --> será elaborado sobre todas las cuentas de clientes<!-- clienti --> y proveedores<!-- fornitori -->. Es posible ingresar solo la cuenta principal<!-- conto mastro --> (sin subcuenta<!-- sottoconto -->) para obtener únicamente los clientes<!-- clienti --> (o solo los clientes<!-- clienti --> de Italia por ejemplo) o solo los proveedores<!-- fornitori -->.

**Desde / Hasta Fecha de vencimiento<!-- Da / A Data scadenza -->**: filtro sobre la fecha de vencimiento almacenada dentro de la partida<!-- partita --> (elaborada en la fase de apertura a partir de las condiciones de pago, salvo cambios realizados manualmente).

**Estado de la partida<!-- Stato Partita -->**: el filtro se propone por defecto en el estado Abiertas<!-- Aperte --> (que también incluye las Vencidas<!-- Scadute --> y Parcialmente Abiertas<!-- Parzialmente Aperte -->), puede ser modificado (llevándolo a partidas cerradas<!-- partite chiuse --> o vencidas<!-- scadute --> o parcialmente abiertas<!-- parzialmente aperte -->, etc. para extraer únicamente un solo tipo) o bien dejarse vacío para proponer todas las partidas<!-- partite -->.

**Posición de la partida<!-- Posizione Partita -->**: la combo box del filtro está vinculada a la tabla Posición Partidas<!-- Posizione Partite --> (utilizada para atribuir a las partidas<!-- partite --> categorías libremente codificables).

**Pag.**: filtro sobre el tipo de pago almacenado dentro de la partida<!-- partita --> (elaborada en fase de apertura a partir de las condiciones de pago, salvo modificaciones manuales).

**Cod. Doc.**: filtro sobre el código del tipo de documento asociado a la partida<!-- partita --> en fase de apertura (ejemplo: Factura<!-- Fattura -->, nota de crédito<!-- nota di accredito -->, recibo fiscal<!-- ricevuta fiscale -->, etc.).

**Divisa**: filtro sobre la moneda<!-- divisa --> en la que se denominan las partidas<!-- partite --> (en la impresión también se mostrarán los importes equivalentes en Euro).

**Agente**: filtro sobre el agente vinculado a la partida<!-- partita --> (solo lado cliente<!-- cliente -->).

**Banco**: filtro sobre el banco de canalización vinculado a la partida<!-- partita --> en fase de apertura (campo Subcuenta<!-- Sottoconto --> de pago dentro de la partida<!-- partita -->).

**Proyecto**: (antes orden de trabajo<!-- commessa -->): filtro sobre el proyecto<!-- proetto (commessa) --> vinculado a la partida<!-- partita -->.

**Desde / Hasta Año de la partida<!-- Da / A Anno partita -->; Desde / Hasta Nº de partida<!-- Da / A Nr. Partita -->**: filtro sobre el año y el número de la partida<!-- partita --> (también estos, campos presentes dentro de las partidas<!-- partite -->).

**Departamento**: filtro sobre la división<!-- divisione --> (operativo si hay más divisiones en la base de datos).

Parámetros de visualización<!-- Parametri di visualizzazione -->

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image02.png)

**Partidas abiertas al<!-- Partite aperte al -->**: este campo, propuesto por defecto al abrir la pantalla igual a la fecha actual, puede ser modificado para obtener la situación de las partidas abiertas<!-- partite aperte --> (u otras partidas con uno de los otros estados seleccionables en el campo Estado de la Partida<!-- Stato Partite -->) tal y como se presentaban en una fecha determinada.

Ejemplo: si una factura<!-- fattura --> de compra fechada el 1 de junio abrió una partida<!-- partita --> con vencimiento el 1 de julio y el 28 de junio se registró el pago de esa partida<!-- partita -->, si elaboramos el vencimientos de proveedores<!-- scadenziario fornitore --> con la fecha de Partidas abiertas al<!-- partite aperte al --> después del 28 (por ejemplo, pedimos el vencimientos al 30 de junio) la partida no será visible ya que está cerrada, pero si pedimos el vencimientos con fecha 20 de julio, por ejemplo, la partida será visible ya que aún estaba abierta en esa fecha.

**Partidas y pagos en las fechas<!-- Partite e pagamenti alle date -->**: si el check está activo, el campo anterior Partidas abiertas al<!-- Partite aperte al --> tendrá efecto refiriéndose tanto a la fecha de apertura de las partidas como a la fecha de pago; con el check desactivado la fecha mencionada tendrá efecto solo con referencia a la fecha de apertura de las partidas y se considerarán todos los pagos.

**Sintética**: si el check está activo, oculta en la impresión las columnas adicionales relativas a los detalles de pago, si está desactivado permite mostrar todos los detalles.

**Con efectos a vencer<!-- Con effetti a scadere -->**: ya que tras la contabilización de la emisión de los efectos activos<!-- effetti attvi --> (pagarés, recibos bancarios, etc.) ocurre una compensación del crédito hacia el cliente y el cierre simultáneo de la partida abierta<!-- partita aperta -->, activando este check el vencimientos<!-- scadenziario --> se "rectifica" para tener en cuenta también los efectos a vencer<!-- effetti a scadere -->.

**Conversión de moneda<!-- Conversione Valuta -->**: al seleccionar una moneda desde la combo box, las partidas<!-- partite --> serán convertidas a la moneda seleccionada al tipo de cambio del día de referencia (mostrado en la columna de cambio presente en la impresión).

POSIBLES CRITERIOS DE AGRUPACIÓN ACTIVABLES

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image03.png)

Nota: Razón social = agrupación basada en la ficha del cliente o proveedor.

Banco = agrupación en función del banco de canalización (ver arriba)

Vencimiento = el agrupamiento se realizará por vencimiento representando en orden cronológico todas las partidas abiertas<!-- partite aperte --> (obviamente según los criterios de filtro establecidos anteriormente)

ÁREA **Días**: utilizado solo para la impresión del Reporte de Antigüedad (Aging) y es irrelevante para esta impresión.

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image04.png)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WhWmjPGfF0Y" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>