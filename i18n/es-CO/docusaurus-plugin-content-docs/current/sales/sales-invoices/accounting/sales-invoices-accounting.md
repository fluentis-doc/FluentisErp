---
title: Contabilización de facturas de venta (Contabilizzazione fatture di vendita)
sidebar_position: 1
---

El procedimiento se abre a través de la ruta **Ventas > Facturas de venta > Contabilización > Contabilización de facturas de venta**.  

Una factura, para ser contabilizada, debe cumplir una serie de condiciones: en su encabezado, debe tener activado el indicador *stampata*, no ser de tipo *proforma* y el tipo de factura debe contener la causa general para la contabilización.

### Contabilización

El formulario presenta en la parte superior los filtros de búsqueda para identificar y visualizar, en la cuadrícula, la lista de las facturas a contabilizar presentes en el sistema.

En la parte inferior del formulario hay algunos parámetros de gestión de la contabilización:

**data registrazione uguale alla data documento**: este indicador impone la contabilización de cada factura a su fecha de emisión.  

Si el indicador se desactiva, se activa el siguiente campo, **data registrazione**, donde es posible establecer una fecha fija de registro;  

**usa il cambio della tabella cambi**: con este indicador se obliga al sistema a verificar la tabla de tipos de cambio para utilizar el vigente a la fecha de registro/factura (o el último ingresado anteriormente).  

Si el indicador no está activado, se utilizará el *tipo de cambio presente en el encabezado de la factura*;  

**aggiorna cambio in documento**: el campo está activo *solo* si el indicador anterior está activado. Su significado es actualizar también el tipo de cambio presente en el encabezado de la factura, sobrescribiendo el ya existente;  

**Comp. IVA = fecha del documento (Comp. IVA = data documento)**: el indicador impone que la competencia del IVA de los movimientos sea igual a la fecha de la factura. En caso de que se desee aprovechar la posibilidad de facturar hasta el día 15 del mes siguiente a la fecha de envío (facturación diferida), se debe desactivar el indicador para que la competencia del IVA se recoja de la fecha de inicio del transporte en el documento original, tal como se establece en la normativa del IVA;  

**utilizzare la filiale aziendale per assegnare la divisione**: indicador vinculado al campo *filiale aziendale di riferimento* presente en los registros de clientes y proveedores, donde se puede asociar al cliente/proveedor a una sucursal y, a través de esta, a una *división* empresarial diferente de la que se está utilizando. Este indicador activa la verificación si en el cliente hay una sucursal de referencia y, desde este enlace, verifica si hay una división asociada a la sucursal en cuestión. En caso afirmativo, registra la factura atribuyéndola a esa división (incluso si la factura se asigna a la división X, la contabilización será en Y). Esta opción facilita la elaboración de balances por división en situaciones donde la facturación se realiza por separado, pero los resultados desde el punto de vista del balance se desean agregar a una división principal.

#### Botones específicos  
> **ricerca fattura**: para buscar las facturas; se proponen todas las facturas impresas y no contabilizadas.  
> **contabilizzazione fatture**: ejecuta la contabilización de las facturas seleccionadas, según la configuración definida.  

### Parámetros

En este formulario se configuran algunos elementos generales de la contabilización de facturas.

**contabilizzazione omaggi**: con este indicador se activa la gestión de la contabilización de obsequios, activando los campos siguientes relacionados.  

1. Si la factura que se está contabilizando presenta un obsequio y el parámetro de gestión no ha sido configurado, el sistema solicitará confirmación al usuario con un aviso de la falta de configuración. En esta situación, la factura se registrará normalmente sin ninguna gestión de la línea de obsequio, que deberá ser gestionada manualmente en contabilidad.

2. En caso de que se haya activado la gestión de obsequios, pero sin ingresar ningún subcuenta en los campos siguientes, el sistema añadirá al final de los movimientos normales de contabilización las necesarias líneas de anulación del ingreso, utilizando la misma subcuenta configurada para el artículo de ventas.

3. Si se ha activado el indicador **Reemplazar la cuenta del artículo (Sostituisci il conto dell'articolo)**, se activará el campo donde se debe configurar la subcuenta de anulación de anticipos, que se utilizará en lugar de la subcuenta del artículo en estas líneas adicionales.

**codice iva per omaggi in registro iva**: completando este campo (generalmente con un código IVA correspondiente a la casuística del "fuera de campo IVA" o "excluido..."), se ejecutará automáticamente una línea de anulación del valor del obsequio en el registro de IVA, siempre que no se ejerza el derecho a repercutir el IVA al cliente.

**conto storno iva**: utilizada en caso de que el artículo obsequio en la factura no tenga el indicador **rivalsa iva**, con el cual se indica si el IVA aplicada al artículo obsequio es a cargo (con indicador) o no (sin indicador) del cliente. Este importe será registrado y anulado solo si se ha ingresado la *Cuenta de anulación de IVA (Conto di storno iva)*, de lo contrario, la operación deberá ser gestionada manualmente en contabilidad (en este campo también hay un mensaje de confirmación/aviso al usuario sobre la falta de configuración).

**Agrupar cuentas de líneas automáticas (Raggruppa conti delle righe automatiche)**: con el indicador activo, las cuentas insertadas automáticamente en la sección del libro diario (como, por ejemplo, en la contabilización de obsequios, donde el cliente aparece varias veces, una vez por el total de la factura y luego se les anulan los obsequios) se agruparán por subcuenta formando un registro compacto.

**sottoconto sconto finanziario**: este campo se utiliza para registrar el descuento financiero relacionado con la fecha de vencimiento de la factura.

#### Botón específico

> **salva parametri**: permite guardar los parámetros configurados para la contabilización de obsequios.

Después de seleccionar las facturas (desde la pestaña *Contabilización*) y configurar los parámetros, las facturas pueden ser contabilizadas con la ayuda del botón *Contabilización de facturas*.  

### Anteriores

El formulario presenta la lista de las operaciones de contabilización realizadas, con el fin de visualizarlas y eventualmente anularlas a través de los botones correspondientes.

La anulación será posible solo si el período aún es modificable (impresión del libro diario, registro de IVA no impreso, liquidación periódica no impresa, cierre de cuentas no ejecutado, partidas contables cerradas en un ingreso o en un efecto).  

**contabilizzazione fatture**: cuadrícula con los detalles de las operaciones realizadas. Se llena después del procedimiento de búsqueda y se pueden seleccionar las operaciones sobre las cuales aplicar las funciones del ribbon.

Los datos en las cuadrículas de abajo, **fatture** y **registrazione contabile**, corresponden a la operación seleccionada en la cuadrícula superior. Un doble clic en la sección de facturas/registraciones permitirá visualizar la factura/la registración contable correspondiente.

#### Botones específicos  
> **ricerca contabilizzazione**: busca la lista de las contabilizaciones realizadas.  
> **anteprima contabilizzazione**: para visualizar la vista previa de impresión de la contabilización.  
> **ripristina contabilizzazione**: con este botón se eliminará toda la contabilización realizada, junto con todas las facturas asociadas.  
> **ripristina fattura**: el botón realiza la restauración de la factura individual seleccionada.  

#### Mensajes de error

Estos errores pueden surgir, en algunos casos, de una mala gestión de los datos por parte del usuario, es decir, faltan información esencial; en otros casos, pueden derivar de configuraciones o ajustes incorrectos a nivel de parámetros o datos básicos.

Los errores de configuración o faltas en los datos básicos se refieren principalmente a entornos donde no se ha lanzado el procedimiento de Fast Start.

:::note[Mensaje]
La factura con número ... tipo ... año ... de AAA S.p.a. no puede ser contabilizada porque **no existe la cuenta contrapartida**.
:::

La contrapartida contable, en el contexto de una factura de venta o de compra, debe entenderse como la indicación de la cuenta destinada a recibir el ingreso o el costo.  
Por lo tanto, más en general, la registración contable de una factura normalmente se basa en tres elementos esenciales que podemos verificar abriendo la [**causa contable**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) con la cual estamos intentando contabilizar esta factura.  
Para verificar primero cuál es esta causa, pasemos por la tabla de los [**tipos de factura**](/docs/configurations/tables/sales/invoices-type) donde se define el enlace.  
Así que aquí están los tres elementos: el cliente o proveedor, el IVA y el costo o ingreso. Si falta uno de estos elementos, la registración no es válida.

Dentro de la causa contable, creada o modificada manualmente respecto al estándar generado por Fast Start, podría engañarnos si aparentemente parece que la cuenta de ingreso ha sido definida como una cuenta fija al tener el código de cuenta y subcuenta y, por lo tanto, debería usarla y limitarse a reemplazar la cuenta genérica del cliente con la subcuenta de detalle que toma del encabezado de la factura.

En realidad, al estar configurado el criterio de lectura de la subcuenta imponible, el programa busca en cualquier caso el dato para la sustitución y lo busca en primer lugar en la factura y, en segundo lugar, en el registro del cliente.

**Por lo tanto, para resolver esto es necesario definir en la factura el dato del facturado de ventas, dato que podría estar asociado directamente al registro de artículo codificado. En alternativa, podemos ingresar en el registro del cliente la cuenta predeterminada. De este modo, la contabilización automática puede funcionar.**

Nota: incluso el criterio de lectura *Total imponible* en la causa contable no puede funcionar porque intentaría leer de todos modos la cuadrícula de IVA de la registración donde falta un dato obligatorio que siempre es la cuenta contrapartida. Por lo tanto, no se prevé un modo de contabilización con subcuenta fija; siempre debe gestionarse el facturado de ventas y compras o los registros de cliente proveedor.

:::note[Mensaje]
La factura con número ... tipo ... año ... de AAA S.p.a. no puede ser contabilizada porque **la registración está balanceada**.
:::

Más allá del significado más obvio del mensaje, que impide, en relación con los ajustes de los parámetros de la causa contable, guardar una registración donde el total de débito no concuerda con el total de crédito, un posible motivo de esta situación podría estar relacionado nuevamente con un ajuste incorrecto de la causa misma, por ejemplo, la falta en el esquema contable de la línea correspondiente al IVA y, por lo tanto, en presencia de una factura que contiene IVA y del desglose realizado en la primera parte del procedimiento, no podría generar de todos modos un asiento contable (en la parte correspondiente al libro diario) que pudiera equilibrar, generando el error.

Nota: el bloqueo está sujeto a un parámetro, pero se desaconseja encarecidamente desactivarlo para aceptar asientos desequilibrados, excepto en casos muy excepcionales o temporalmente para verificar deliberadamente el resultado (equivocado) de la contabilización.

:::note[Mensaje]
La factura con número ... tipo ... año ... de AAA S.p.a. no puede ser contabilizada porque **en el libro diario hay 1 fila con una cuenta sin una subcuenta**.
:::

Este mensaje (menos inmediato en su interpretación) se refiere al hecho de que el software no puede guardar registraciones donde no se haya definido la subcuenta de detalle.

Entre las varias razones por las cuales esto podría ocurrir, obviamente relacionadas con el hecho de que el esquema de la causa contable define las cuentas (sin subcuenta de detalle) también en lo que respecta a los clientes y proveedores, podría tratarse de que dentro de los [**parámetros de contabilidad**](/docs/configurations/parameters/finance/accounting-parameters) falta la asociación entre el tipo de cuenta (quizás un nuevo tipo añadido) y la cuenta mayor de referencia. Este parámetro faltante impide la ejecución de la automatización que completa la escritura contable.

:::note[Mensaje]
La factura con número ... tipo ... año ... de AAA S.p.a. no puede ser contabilizada porque **el valor de las partidas no corresponde al movimiento contable**.
:::

Este mensaje generalmente corresponde a la falta de la indicación de las condiciones de pago en la factura, por lo tanto, la partida no puede abrirse y, claramente, se crea la diferencia y se bloquea el software.

La decisión de estar bloqueado en la contabilización se puede ajustar en un parámetro de la causa contable.

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/NgroQvVOgD8" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>