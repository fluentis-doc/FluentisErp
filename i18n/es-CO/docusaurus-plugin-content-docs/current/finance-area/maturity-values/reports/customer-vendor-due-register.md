---
title: Cronograma de Clientes / Proveedores (Scdenziario Clienti / Fornitori)
sidebar_position: 1
---

Desde este formulario es posible definir todos los parámetros preliminares y lanzar la impresión del cronograma de clientes / proveedores.

El formulario es igual al que se encuentra para el lanzamiento de otras impresiones basadas en el procesamiento de las partidas abiertas, sin embargo, algunos campos pueden no ser utilizados o ser pertinentes para la impresión específica en cuestión.

En la parte superior del formulario hay varios filtros sobre los datos de origen:

**![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image01.png)**

**Cuenta (Conto):** filtro principal sobre los subcuentas de clientes / proveedores. Si no se ingresa ningún dato, el cronograma se calculará sobre todas las cuentas de los clientes y proveedores. Es posible ingresar solo la cuenta maestra (sin subcuenta) para obtener solo los clientes (o solo los clientes de Italia, por ejemplo) o solo los proveedores.

**Desde / Hasta Fecha de vencimiento (Da / A Data scadenza):** filtro sobre la fecha de vencimiento almacenada en la partida (procesada en el momento de apertura según las condiciones de pago salvo modificaciones manuales).

**Estado de la partida (Stato Partita):** el filtro se propone por defecto con el estado Abiertas (que incluye también las Vencidas y Parcialmente Abiertas); puede ser modificado (cambiándolo a partidas cerradas o vencidas o parcial o totalmente abiertas, etc. para extraer solo un tipo específico) o dejarse vacío para proponer todas las partidas.

**Posición de la partida (Posizione Partita):** la caja combinada de filtro está vinculada a la tabla Posición de Partidas (utilizada para asignar a las partidas categorías codificables libremente).

**Pago (Pag.):** filtro sobre el tipo de pago almacenado en la partida (procesada en el momento de apertura según las condiciones de pago salvo modificaciones manuales).

**Código de documento (Cod. Doc.):** filtro sobre el código del tipo de documento asociado a la partida en el momento de apertura (ej. Factura, nota de crédito, recibo fiscal, etc.).

**Divisa (Divisa):** filtro sobre la divisa en la que están denominadas las partidas (en la impresión también se mostrarán los contravalores en Euro).

**Agente (Agente):** filtro sobre el agente vinculado a la partida (solo del lado del cliente).

**Banco (Banca):** filtro sobre el banco de canalización vinculado a la partida en el momento de apertura (campo Subcuenta de pago dentro de la partida).

**Proyecto (Proyecto):** (ex apartado): filtro sobre el proyecto (apartado) vinculado a la partida.

**Desde / Hasta Año de partida; Desde / Hasta Número de partida (Da / A Anno partita; Da / A Nr. Partita):** filtro sobre el año y número de la partida (también estos, campos presentes dentro de las partidas).

**Departamento (Dipartimento):** filtro sobre la división (operativo si hay más divisiones en la base de datos).

Parámetros de visualización

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image02.png)

**Partidas abiertas hasta (Partite aperte al):** este campo, propuesto por defecto al abrir la máscara igual a la fecha de hoy, puede ser modificado para obtener la situación de las partidas abiertas (o de las partidas con uno de los otros estados seleccionables en el campo Estado de Partidas) tal como se presentaban a una cierta fecha.

Ejemplo: si una factura pasiva fechada el 01 de junio abrió una partida con vencimiento el 01 de julio y el día 28 de junio se registró el pago de esa partida, si procesamos el cronograma del proveedor con fecha de Partidas abiertas hasta después del 28 (por ejemplo, solicitamos el cronograma al 30 de junio) la partida no será visible, ya que estará cerrada; si solicitamos el cronograma con fecha 20 de julio, por ejemplo, la partida aparecerá visible ya que aún estará abierta en esa fecha.

**Partidas y pagos a fechas (Partite e pagamenti alle date):** con el indicador activo, el campo anterior Partidas abiertas hasta tendrá efecto en referencia tanto a la fecha de apertura de las partidas como a la fecha de pago; con el indicador desactivado, la fecha mencionada anteriormente tendrá efecto solo en referencia a la fecha de apertura de las partidas y se considerarán todos los pagos.

**Sintética (Sintetica):** el indicador, si está activo, oculta en la impresión las columnas adicionales relacionadas con los detalles del pago; si está desactivado, permite mostrar todos los detalles.

**Con efectos a vencer (Con effetti a scadere):** dado que tras la contabilización de la emisión de los efectos activos (letras de cambio, recibos bancarios, etc.) se produce una anulación del crédito hacia el cliente y un cierre concomitante de la partida abierta, activando este indicador, el cronograma se "rectifica" para tener en cuenta también los efectos a vencer.

**Conversión de divisa (Conversione Valuta):** seleccionando una divisa de la caja combinada, las partidas serán convertidas a la divisa seleccionada al tipo de cambio de referencia del día (visualizado en la columna cambio presente en la impresión).

CRITERIOS DE AGRUPAMIENTO POSIBLES ACTIVABLES

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image03.png)

Nota: Razón social = agrupamiento basado en el registro del cliente o proveedor.

Banco = agrupamiento basado en el banco de canalización (ver arriba).

Vencimiento = el agrupamiento se realizará por vencimiento, representando en orden cronológico todas las partidas abiertas (basado, por supuesto, en los criterios del filtro establecidos arriba).

ÁREA **giorni**: utilizado solo para la impresión del Reporte de Aging e irrelevante para la presente impresión.

![](/img/it-it/finance-area/maturity-values/reports/customer-vendor-due-register/image04.png)

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/WhWmjPGfF0Y" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>