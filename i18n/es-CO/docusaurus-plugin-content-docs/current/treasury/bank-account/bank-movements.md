---
title: Movimientos Bancarios
sidebar_position: 1
ai_generated: true
---

El módulo de cuentas corrientes permite al operador controlar y conciliar los movimientos bancarios<!-- movimenti bancari --> en contabilidad con el extracto bancario (o lista de movimientos<!-- movimenti -->) que es posible descargar como archivo telemático desde muchos sitios de Corporate banking.

El módulo está presente en el área de tesorería y toma los datos de la contabilidad.

### Importación de movimientos<!-- Importazione movimenti -->
Esta pantalla permite realizar la importación de movimientos de cuenta corriente<!-- movimenti di conto corrente --> desde el archivo telemático (estándar abi) que se puede extraer desde el home banking.

Para proceder con la importación es necesario primero establecer en la parte inferior de la pantalla (abajo) el subcuenta bancaria<!-- sottoconto bancario --> para el cual se desea importar el archivo. Luego, pulsando el botón ***Nuevo<!-- Nuovo -->*** se abrirá la pantalla de importación del archivo telemático que permite definir la ubicación donde está guardado el archivo a importar. Si la operación termina correctamente aparecerá en la cuadrícula una nueva fila de importación: haciendo doble clic sobre ella o a través del botón ***Modificar<!-- Modifica -->*** es posible visualizar el detalle de los datos importados.

Los movimientos<!-- movimenti --> así importados se podrán utilizar en el procedimiento de conciliación de la cuenta corriente<!-- riconciliazione C/C -->, o alternativamente (si el movimiento o movimientos contenidos en el archivo aún no han sido contabilizados) proceder a la creación automática del asiento contable<!-- scrittura contabile --> a partir de los datos del archivo.

### Pantalla de búsqueda / lista de movimientos importados<!-- Maschera di ricerca / lista movimenti importati -->
En la pantalla principal donde se buscan todos los movimientos<!-- movimenti --> importados, es posible filtrar mediante las banderas adecuadas solo los movimientos<!-- movimenti --> a conciliar, solo los conciliados o ambos.
En la cuadrícula de resultados se muestran dos banderas que identifican si el movimiento ya ha sido ***Conciliado<!-- Riconciliato -->*** con los asientos contables introducidos anteriormente, o si el movimiento importado ha generado automáticamente el asiento contable (***Cuenta Conciliada<!-- Conto Riconciliato -->***).

A continuación se presentan otros datos tomados del detalle del archivo importado, entre los cuales destacamos los más importantes como la fecha, los saldos, totales y parciales de la lista de movimientos<!-- lista movimenti -->, el signo (débito / crédito) y el número de movimientos<!-- movimenti --> contenidos.

### Detalle del movimiento y procedimientos de conciliación<!-- Dettaglio del movimento e procedure di riconciliazione -->
Entrando en el detalle del movimiento mediante doble clic o el botón ***Modificar<!-- Modifica -->***, se muestran en la cuadrícula de resultados los diferentes movimientos<!-- movimenti --> contenidos en el archivo con su importe, signo y fecha valor del banco. También se muestran los datos del asiento contable<!-- registrazione contabile --> presente o generado en Fluentis correspondiente. En primer lugar, la bandera que identifica si el movimiento de detalle ya fue conciliado o no.

Para visualizar el detalle de la descripción del movimiento<!-- movimento --> contenido en el archivo, use el botón + ubicado a la izquierda del campo Conciliados<!-- Riconciliati --> (en la primera posición).

*PROCEDIMIENTOS POSIBLES:*

- ***Conciliación automática<!-- Riconciliazione automatica -->***: aparece una ventana emergente que permite elegir mediante banderas los criterios automáticos para el cruce de datos (por ejemplo, misma fecha, mismo importe, etc.). La búsqueda y conciliación se inicia con el botón ***Ejecutar<!-- Esegui -->*** y se puede cancelar con el botón ***Cancelar<!-- Annulla -->***. Automáticamente los movimientos<!-- movimenti --> serán actualizados poniendo la bandera de conciliado, mientras que los no encontrados podrán ser conciliados manualmente o, si realmente faltan, proceder a su creación automática.

- ***Conciliación manual<!-- Riconciliazione manuale -->***: Al pulsar el botón se abre automáticamente la pantalla de [***Visualización de cuentas<!-- Visualizzazione conti -->*** ](/docs/finance-area/ledger-records/records/view-accounts) y automáticamente se completan los filtros del subcuenta<!-- sottoconto --> (correspondiente al de nuestro banco) y de las fechas para corresponder al movimiento<!-- movimento --> a conciliar. En este punto, **debe pulsar el botón Visualizar cuentas** y buscar. Una vez identificado el movimiento<!-- movimento --> correspondiente, seleccione la fila y pulse el botón ***Conciliar<!-- Riconcilia -->*** (siempre en la barra superior). En este punto el movimiento<!-- movimento --> está conciliado manualmente y se actualizan los enlaces al asiento<!-- registrazione --> y las banderas.

- ***Cancelar conciliación<!-- Annulla riconciliazione -->***: permite cancelar un procedimiento de conciliación ya realizado eliminando los enlaces a los asientos contables<!-- registrazioni contabili -->.

- ***Contabilizar<!-- Contabilizza -->***: al presionar el botón, para crear automáticamente el asiento contable<!-- scrittura contabile -->, aparece una ventana emergente donde seleccionar la causa contable<!-- caudale contabile --> deseada. Al continuar, se abre automáticamente la pantalla del asiento contable<!-- registrazione contabile --> donde ya están preestablecidos todos los datos extraídos del archivo importado y solo queda completar los datos adicionales necesarios (como, por ejemplo, las partidas<!-- partite --> por cerrar en caso de cobros o pagos, etc.) y luego guardar el asiento contable<!-- registrazione contabile -->.

:::important[Detalle del procedimiento de contabilización: enlace automático de las partidas abiertas<!-- Dettaglio procedura di contabilizzazione: aggancio automatico delle partite aperte -->]
Dependiendo del banco que pone a disposición los archivos telemáticos, existen archivos más o menos detallados.

La lógica mediante la cual Fluentis consigue gestionar automáticamente, en el asiento<!-- scrittura --> generado (por ejemplo, de cobro o pago), el cierre de la partida<!-- partita --> abierta eventualmente presente en el sistema, es la siguiente:

- Si en el archivo telemático importado está presente el campo *Referencia Acreedor Remesa<!-- Riferimento Creditore Rimessa -->* (visible en Fluentis abriendo el detalle de las filas del archivo con el botón + a la izquierda), el código de referencia presente en este campo será utilizado para buscar las partidas<!-- partite --> abiertas. El dato debe coincidir con el campo *Número de referencia<!-- Numero di riferimento -->* presente en la partida<!-- partita --> (el adyacente al campo *Modelo referencia de pago<!-- Modello riferimento pagamento -->*).
- Si no se satisface la primera condición, el procedimiento leerá en el archivo telemático el campo *Acreedor cuenta IBAN<!-- Creditore conto IBAN -->* (visible siempre abriendo el detalle de las filas como se explicó en el punto anterior) y buscará si existe una cuenta contable con cliente/proveedor que tenga el mismo IBAN. Dicho IBAN **debe** encontrarse en el campo IBAN de la **cuadrícula Banco de apoyo<!-- griglia Banca d'appoggio -->** o sea, la inferior en el registro maestro, en la pestaña pagos, destinada exclusivamente a las coordenadas bancarias de clientes y proveedores, es decir, las "contrapartes" y nunca de nuestra empresa. Por lo cual no debe confundirse con el mismo campo presente en la cuadrícula superior, es decir, la cuadrícula principal denominada *Tipos de pago<!-- Tipi pagamento -->*.
Si el IBAN coincide, se buscará una partida<!-- partita --> abierta para esa cuenta<!-- conto --> que tenga el mismo importe; si hay más de una con el mismo importe, se tomará la que tenga la fecha de vencimiento más antigua.
- Si no se encuentra ninguna partida<!-- partita --> que cumpla los criterios anteriores, pero sí se encuentra el cliente/proveedor con el IBAN correspondiente, Fluentis solo insertará la fila en contabilidad sin generar automáticamente el pago.
- Si no se encuentra ninguna cuenta cliente/proveedor con el código IBAN, Fluentis insertará en el asiento contable<!-- scrittura contabile --> solo la fila relacionada al banco y quedará sin completar la fila del cliente/proveedor.
:::

:::danger[Atención<!-- Attenzione -->]
La **causal contable<!-- causale contabile -->** utilizada para generar los asientos de cobro y pago automáticamente como se describió anteriormente **debe ser modificada** respecto a la configuración habitual.
En particular, deberá modificarse la fila, por ejemplo la relacionada al banco que normalmente está asociada al tipo de importe *Total documento / registro<!-- Totale documento / registrazione -->*. Este tipo de importe deberá ser modificado, por ejemplo, eligiendo **Importe subcuenta<!-- Importo sottoconto -->**, como en la fila del cliente/proveedor.

**Si esto no se hace, el procedimiento insertará dos veces la fila de banco<!-- riga banca --> y el asiento no cuadrará automáticamente.**
:::