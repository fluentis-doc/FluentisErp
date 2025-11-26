---
title: Contabilización de facturas de venta
sidebar_position: 1
ai_generated: true
---

El procedimiento se abre a través de la ruta **Ventas > Facturas de venta<!-- Fatture di vendita --> > Contabilización > Contabilización de facturas de venta<!-- Contabilizzazione fatture di vendita -->**.

Para que una factura pueda ser contabilizada, debe cumplir una serie de condiciones: en su cabecera debe tener activada la marca *Impresa<!-- Stampata -->*, no debe ser de tipo *pro-forma* y el tipo de factura debe contener la causale<!-- causale --> general para la contabilización.

### Contabilización<!-- Contabilizzazione -->

El formulario presenta en la parte superior los filtros de búsqueda para identificar y visualizar, en la cuadrícula, la lista de las facturas que se deben contabilizar presentes en el sistema.

En la parte inferior del formulario están presentes algunos parámetros de gestión de la contabilización:

**Fecha de registro igual a la fecha del documento<!-- Data registrazione uguale alla data documento -->**: esta marca exige la contabilización de cada factura en su fecha de emisión.

Si se desactiva esta marca, se activa el campo siguiente, **Fecha de registro<!-- Data registrazione -->**, donde es posible establecer una fecha fija para la contabilización;

**Usar el tipo de cambio de la tabla de cambios<!-- Usa il cambio della tabella cambi -->**: con esta marca se le indica al sistema que verifique la tabla de cambios para utilizar el que esté presente en la fecha de registro/factura (o el último ingresado previamente).

Si la marca no está activa, se utilizará el *tipo de cambio presente en la cabecera de la factura*;

**Actualizar cambio en documento<!-- Aggiorna cambio in documento -->**: el campo está activo *solo* si la marca anterior está activa. Su significado es actualizar también el tipo de cambio presente en la cabecera de la factura, sobrescribiendo el existente;

**Comp. IVA = fecha documento<!-- Comp. IVA = data documento -->**: esta marca impone que la competencia de IVA de los movimientos sea igual a la fecha de la factura. En caso de que se desee aprovechar la posibilidad de facturar hasta el 15 del mes siguiente a la fecha de envío (facturación diferida), la marca debe desactivarse para que la competencia de IVA se tome de la fecha de inicio trasladada desde el documento original, como lo prevé la normativa del IVA;

**Utilizar la sucursal de la empresa para asignar la división<!-- Utilizzare la filiale aziendale per assegnare la divisione -->**: marca vinculada al campo *Sucursal de referencia de la empresa* presente en los registros de clientes y proveedores, donde es posible asociar el cliente/proveedor a una sucursal y, a través de esta, a una *división* empresarial diferente de la en uso. Esta marca activa una verificación para verificar si el cliente tiene una sucursal de referencia y, con ese vínculo, si la sucursal en cuestión tiene una división asociada. Si es así, se registra la factura atribuyéndola a esa división (aunque la factura esté atribuida a la división X, el registro contable será en la Y). Esta opción facilita la elaboración de balances por división en situaciones donde la facturación se realiza por separado pero los resultados, desde el punto de vista contable, se desean agrupar en una división principal.

#### Botones específicos
> **Buscar factura<!-- Ricerca fattura -->**: para buscar las facturas; se mostrarán todas las facturas impresas y no contabilizadas.  
> **Contabilización de facturas<!-- Contabilizzazione fatture -->**: realiza la contabilización de las facturas seleccionadas, de acuerdo con los parámetros definidos.

### Parámetros

En este formulario se configuran algunos elementos generales de la contabilización de facturas.

**Contabilización de obsequios<!-- Contabilizzazione omaggi -->**: con esta marca se activa la gestión de la contabilización de obsequios<!-- omaggi -->, habilitando los campos siguientes relacionados.

1. Si la factura que se está contabilizando presenta un obsequio<!-- omaggio --> y el parámetro de gestión no ha sido configurado, el sistema solicitará confirmación al usuario con una advertencia indicando la falta de configuración. En este caso, la factura será registrada normalmente sin ninguna gestión de la línea de obsequio, debiendo dicha línea gestionarse manualmente en contabilidad<!-- contabilità -->.

2. En caso de que se haya activado la gestión de obsequios<!-- omaggi --> pero sin ingresar una subcuenta<!-- sottoconto --> en los campos siguientes, el sistema añadirá al final de los movimientos de contabilización las líneas necesarias de reverso del ingreso, utilizando la misma subcuenta<!-- sottoconto --> configurada para el artículo de ventas.

3. Si, en cambio, se ha activado la marca **Sustituir la cuenta del artículo<!-- Sostituisci il conto dell'articolo -->**, se habilita el campo donde ingresar la subcuenta de reverso de anticipos<!-- sottoconto di storno acconti -->, que se utilizará en lugar de la subcuenta del artículo en estas líneas adicionales.

**Código de IVA para obsequios en el registro de IVA<!-- Codice IVA per omaggi in registro iva -->**: completar este campo (generalmente con un código de IVA correspondiente al caso de "fuera de campo IVA" o "excluido...") ejecutará automáticamente una línea de reverso del valor del obsequio en el registro de IVA, allí donde no se ejerza la repercusión de IVA hacia el cliente.

**Cuenta de reverso de IVA<!-- Conto storno IVA -->**: se usa en caso de que el artículo obsequio<!-- articolo omaggio --> en la factura no tenga la marca **Repercusión de IVA<!-- Rivalsa IVA -->**, con la que se indica si el IVA aplicado al artículo obsequio<!-- articolo omaggio --> es a cargo (con marca) o no (sin marca) del cliente. Este importe será registrado y revertido solo si se ha ingresado la *Cuenta de reverso de IVA*, de lo contrario, la operación deberá gestionarse manualmente en contabilidad<!-- contabilità --> (también en este campo hay un mensaje de confirmación/aviso de falta de configuración para el usuario).

**Agrupar cuentas de las líneas automáticas<!-- Raggruppa conti delle righe automatiche -->**: si esta marca está activa, las cuentas insertadas automáticamente en la sección del libro diario (como por ejemplo en la contabilización de obsequios<!-- contabilizzazione omaggi --> donde el cliente aparece varias veces, una por el total de la factura y luego se le revierten los obsequios<!-- omaggi -->) se agruparán por subcuenta<!-- sottoconto -->, formando un registro compacto.

**Subcuenta de descuento financiero<!-- Sottoconto sconto finanziario -->**: este campo se utiliza para registrar el descuento financiero relacionado con el vencimiento de la factura.

#### Botón específico

> **Guardar parámetros<!-- Salva parametri -->**: permite guardar los parámetros configurados para la contabilización de obsequios<!-- contabilizzazione omaggi -->.

Tras seleccionar las facturas (desde la pestaña *Contabilización<!-- Contabilizzazione -->*) y configurar los parámetros, las facturas pueden contabilizarse utilizando el botón *Contabilización de facturas<!-- Contabilizzazione fatture -->*.

### Operaciones anteriores<!-- Precedenti -->

El formulario muestra la lista de operaciones de contabilización realizadas, para visualizarlas y eventualmente anularlas a través de los botones correspondientes.

La anulación será posible solo si el período aún es modificable (impresión del libro diario<!-- stampa libro giornale -->, registro de IVA no impreso, liquidación periódica no impresa, cierre de cuentas<!-- chiusura conti --> no realizado, partidas contables cerradas en un cobro o en un efecto).

**Contabilización de facturas<!-- Contabilizzazione fatture -->**: cuadrícula con los detalles de las operaciones realizadas. Se actualiza después de la búsqueda y se pueden seleccionar operaciones sobre las que aplicar funciones de la cinta.

Los datos en las cuadrículas inferiores, **Facturas** y **Registro contable<!-- Registrazione contabile -->**, corresponden a la operación seleccionada en la cuadrícula superior. Un doble clic en la sección de facturas/registros permitirá visualizar la factura o el registro contable relacionado.

#### Botones específicos
> **Buscar contabilización<!-- Ricerca contabilizzazione -->**: busca la lista de contabilizaciones realizadas.  
> **Vista previa de contabilización<!-- Anteprima contabilizzazione -->**: para ver la previsualización de la impresión de la contabilización.  
> **Restaurar contabilización<!-- Ripristina contabilizzazione -->**: con este botón se eliminará toda la contabilización realizada, junto con todas las facturas asociadas.  
> **Restaurar factura<!-- Ripristina fattura -->**: este botón ejecuta la restauración de la factura individual seleccionada.

#### Mensajes de error<!-- Messaggi di errore -->

Estos errores pueden derivar, en algunos casos, de una gestión incorrecta de los datos por parte del usuario, es decir, falta información esencial; en otros, pueden deberse a configuraciones o parámetros incorrectos a nivel de parámetros o de datos maestros.

Los errores de configuración o la ausencia de datos maestros se refieren principalmente a entornos en los que no se ha ejecutado el procedimiento de Fast Start.

:::note[Mensaje<!-- Messaggio -->]
La factura con número ... tipo ... año ... de AAA S.p.a. no se puede contabilizar porque **no existe la cuenta de contrapartida**.
:::

La contrapartida contable, en el contexto de una factura de venta o de compra, debe entenderse como la indicación de la cuenta destinada a registrar el ingreso o el costo.
Por tanto, en general, el registro contable<!-- registrazione contabile --> de una factura se fundamenta normalmente en tres elementos esenciales, que podemos verificar abriendo la [**causale contable**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) con la que estamos intentando contabilizar esta factura.
Para verificar en primer lugar cuál es esta causale<!-- causale -->, accedemos desde la tabla de [**tipos de factura**](/docs/configurations/tables/sales/invoices-type) donde está definida la relación.
Estos son pues los tres elementos: el cliente o proveedor, el IVA y el costo o ingreso; si uno de estos elementos falta, el registro no se completa correctamente.

Dentro de la causale contable, creada o modificada manualmente respecto al estándar generado por el Fast Start, podríamos equivocarnos si parece que la cuenta de ingreso ha sido definida como una cuenta fija habiendo el código de cuenta y subcuenta<!-- sottoconto -->, por lo que debería usarse y limitarse a sustituir la cuenta genérica del cliente por la subcuenta de detalle que toma de la cabecera de la factura.

En realidad, al estar configurado el criterio de lectura del imponible por subcuenta<!-- criterio di lettura dell’imponibile sottoconto -->, el programa en cualquier caso busca el dato para la sustitución, y lo busca primero en la factura, y luego en la ficha del cliente.

**Por lo tanto, para resolver, se debe definir en la factura el dato de la facturación de ventas, dato que podría estar asociado directamente a la ficha del artículo codificado.
Como alternativa, se puede ingresar en la ficha del cliente la cuenta por defecto. De este modo la contabilización automática puede funcionar.**

Nota: también el criterio de lectura *Total imponible<!-- Totale imponibile -->* en la causale contable no puede funcionar porque intentaría leer igualmente la cuadrícula de IVA<!-- griglia iva --> del registro donde falta un dato obligatorio que siempre es la cuenta de contrapartida. Por lo tanto, no está prevista una modalidad de contabilización con subcuenta fija<!-- sottoconto fisso -->, siempre se debe gestionar la facturación de ventas y compras o las fichas de clientes y proveedores.

:::note[Mensaje<!-- Messaggio -->]
La factura con número ... tipo ... año ... de AAA S.p.a. no se puede contabilizar porque **el registro está desbalanceado**.
:::

Más allá del significado más obvio del mensaje, es decir, el que impide, en relación con los parámetros de la causale contable, guardar un registro donde el total del debe no cuadra con el total del haber, un posible motivo de este mensaje podría estar aún vinculado a un incorrecto ajuste de la misma causale<!-- causale -->, por ejemplo la ausencia en el esquema contable de la línea relativa al IVA y por lo tanto, en presencia de una factura que contiene IVA y la división hecha en la primera parte del proceso, no podría, en todo caso, generar un registro contable (en la parte del libro diario<!-- libro giornale -->) que pueda cuadrar, desencadenando el error.

Nota: el bloqueo está sujeto a parámetro pero se desaconseja encarecidamente desactivarlo para aceptar asientos desbalanceados, salvo en casos completamente excepcionales, o temporalmente para verificar intencionadamente el resultado (incorrecto) de la contabilización.

:::note[Mensaje<!-- Messaggio -->]
La factura con número ... tipo ... año ... de AAA S.p.a. no se puede contabilizar porque **en el libro diario<!-- libro giornale --> hay 1 líneas con una cuenta sin subcuenta<!-- sottoconto -->**.
:::

Este mensaje (menos inmediato en su interpretación) hace referencia a que el software no puede guardar registros donde no se ha definido una subcuenta<!-- sottoconto --> de detalle.

Entre las diversas causas por las que esto podría suceder, obviamente relacionadas con que el esquema de la causale contable define los mayores<!-- mastri --> (sin subcuenta de detalle) también para clientes y proveedores, podría deberse a que dentro de los [**parámetros de contabilidad**](/docs/configurations/parameters/finance/accounting-parameters) falta la correspondencia entre el tipo de cuenta (quizá una tipología añadida recientemente) y el mayor<!-- mastro --> correspondiente. Este parámetro faltante impide la ejecución del automatismo que completa el registro contable<!-- scrittura contabile -->.

:::note[Mensaje<!-- Messaggio -->]
La factura con número ... tipo ... año ... de AAA S.p.a. no se puede contabilizar porque **el valor de las partidas no corresponde al movimiento contable<!-- movimento contabile -->**.
:::

Este mensaje normalmente ocurre por la ausencia de la indicación de las condiciones de pago en la factura, por lo tanto la partida no puede abrirse y evidentemente se genera la diferencia y el software bloquea la operación.

La opción de ser bloqueados en la contabilización puede ajustarse en un parámetro de la causale<!-- causale --> contable.

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/NgroQvVOgD8" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>