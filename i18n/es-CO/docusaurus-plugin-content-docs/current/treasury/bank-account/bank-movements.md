---
title: movimenti bancari
sidebar_position: 1
---

El módulo de cuentas corrientes permite al operador controlar y reconciliar los movimientos bancarios en contabilidad con el extracto bancario (o lista de movimientos) que se puede descargar como archivo telemático desde muchos sitios de banca corporativa.

El módulo se encuentra en el área de tesorería y obtiene los datos de la contabilidad.

### Importación de movimientos
Esta máscara permite ejecutar la importación de los movimientos de cuenta corriente desde el archivo telemático (estándar ABI) que se puede extraer del home banking.

Para proceder con la importación, primero es necesario configurar en la parte inferior de la máscara (en la parte inferior) la subcuenta bancaria para la cual se desea importar el archivo, luego al presionar el botón ***Nuevo*** se abrirá la máscara de importación del archivo telemático que permite definir la ubicación donde está almacenado el archivo a importar. Al finalizar la operación, aparecerá en la grilla una nueva línea de importación: con un doble clic en la misma o a través del botón ***Modificar*** es posible visualizar el detalle de los datos importados.

Los movimientos así importados serán utilizables en el procedimiento de reconciliación C/C o, alternativamente, (si el movimiento o los movimientos contenidos en el archivo no han sido contabilizados aún) proceder a la creación automática de la escritura contable a partir de los datos del archivo.

### Máscara de búsqueda / lista de movimientos importados
En la máscara principal donde se buscan todos los movimientos importados, es posible filtrar a través de los indicadores apropiados solo los movimientos a reconciliar, solo aquellos reconciliados o ambos.
En la grilla de resultados se indican dos indicadores que identifican si el movimiento ha sido ya ***Reconciliado*** con las escrituras contables introducidas previamente, o si el movimiento importado ha generado automáticamente la escritura contable (***Cuenta Reconciliada***).

Se presentan además otros datos reportados del detalle del archivo importado, de los cuales se destacan los más importantes, tales como la fecha, los saldos, totales y parciales de la lista de movimientos, el signo (débito / crédito) y el número de movimientos contenidos.

### Detalle del movimiento y procedimientos de reconciliación
Al acceder al detalle del movimiento mediante el doble clic o el botón ***Modificar***, se visualizan en la grilla de resultados los varios movimientos contenidos en el archivo con su respectivo importe, signo y fecha de valor del banco. También se reportan los datos de la registración contable presente o generada en Fluentis correspondiente. En primer lugar, el indicador que identifica si el movimiento de detalle ha sido ya reconciliado o no todavía.

Para visualizar el detalle de la descripción del movimiento contenida en el archivo, use el botón + que aparece a la izquierda del campo Reconciliados (en la posición más inicial).

**PROCEDIMIENTOS POSIBLES:**

- **riconciliazione automatica***: aparece una ventana emergente que permite seleccionar mediante indicadores los criterios automáticos de cruce de datos (por ejemplo, misma fecha, mismo importe, etc.); la búsqueda y reconciliación comienza con el botón **esegui*** y puede cancelarse con el botón **annulla***. Automáticamente, los movimientos se actualizarán marcando el indicador de reconciliado, mientras que los que no se encuentran podrán reconciliarse manualmente o, si efectivamente faltan, proceder a su creación automática.

- **riconciliazione manuale***: Al presionar el botón se abrirá automáticamente la máscara de [**visualizzazione conti***](/docs/finance-area/ledger-records/records/view-accounts) y automáticamente se completarán los filtros de la subcuenta (correspondiente a la de nuestro banco) y de las fechas para corresponder al movimiento a reconciliar. En este punto **es necesario presionar el botón Visualizar cuentas** y buscar. Una vez identificado el movimiento correspondiente, seleccione la línea y presione el botón **riconcilia*** (siempre en la barra de ribbon). En este punto, el movimiento queda reconciliado manualmente, y se actualizan los enlaces a la registración y los indicadores.

- **annulla riconciliazione***: permite anular un procedimiento de reconciliación ya realizado, eliminando los enlaces a las registraciones contables.

- **contabilizza***: al presionar el botón, con el fin de crear automáticamente la escritura contable, aparece una ventana emergente donde seleccionar la causale contable deseada; a continuación, se abre automáticamente la máscara de la registración contable donde están preestablecidos todos los datos extraídos del archivo importado y solo queda completar los eventuales datos adicionales (como por ejemplo las partidas a cerrar en caso de cobros o pagos, etc.) y así guardar la registración contable.

:::important[Detalle del procedimiento de contabilización: enlace automático de las partidas abiertas]
Dependiendo del banco que hace disponibles los archivos telemáticos, existen archivos más o menos detallados.

La lógica según la cual Fluentis puede gestionar automáticamente, en la escritura generada (por ejemplo, de cobro o pago), el cierre de la partida abierta que esté presente en el sistema es la siguiente:

- Si en el archivo telemático importado está presente el campo *Referencia Acreedor Remesa* (visible en Fluentis abriendo el detalle de las líneas del archivo con el botón + a la izquierda), el código de referencia presente en este campo se usará para buscar las partidas abiertas. El dato deberá corresponder en el campo *Número de referencia* presente en la partida (el que está al lado del campo *Modelo de referencia de pago*).
- Si no se cumple la primera condición, el procedimiento leerá en el archivo telemático el campo *Acreedor cuenta IBAN* (también visible abriendo el detalle de las líneas como se explicó en el punto anterior) y buscará si existe una cuenta contable con información de Cliente / Proveedor que contenga el mismo IBAN. Este IBAN **debe** ser encontrado en el campo IBAN de la **grilla de Banco de apoyo**, es decir, la inferior en el registro en la pestaña de pagos, destinada exclusivamente a coordenadas bancarias de clientes y proveedores, es decir, las "contrapartes" y nunca de nuestra empresa. No debe confundirse con el mismo campo presente en la grilla superior, es decir, la grilla principal denominada *Tipos de pago*.
Si el IBAN coincide, se buscará una partida abierta para esa cuenta que tenga el mismo importe; si hay más de una con el mismo importe se tomará la que tenga la fecha de vencimiento más antigua.
- Si no se encuentra ninguna partida que cumpla con los criterios anteriores, pero se encuentra la cuenta del cliente o proveedor con un IBAN correspondiente, Fluentis solo insertará la línea en contabilidad sin generar automáticamente el pago.
- Si no se encuentra ninguna cuenta de cliente / proveedor a través del código IBAN, Fluentis solo insertará en la escritura contable la línea relacionada con el banco y quedará por completar la escritura con la línea de cliente / proveedor.
:::

:::danger[Atención]
La **causale contable** utilizada para generar las escrituras de cobro y pago automáticamente, como se describe anteriormente, **debe ser modificada** en relación con las configuraciones habituales.
En particular, se deberá modificar la línea, por ejemplo, la relacionada con el banco que normalmente se asocia al tipo de importe *Total documento / registración*. Este tipo de importe deberá ser alterado colocando **Importe subcuenta**, como para la línea del cliente / proveedor.

**Si esto no se hace, el procedimiento insertará dos veces la línea del banco y la escritura no cuadrará automáticamente**.
:::