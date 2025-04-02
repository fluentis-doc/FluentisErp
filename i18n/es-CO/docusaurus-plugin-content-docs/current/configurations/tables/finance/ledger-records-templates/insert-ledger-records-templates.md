---
title: Ingreso de causales de contabilidad general (Inserimento causali di contabilità generale)
sidebar_position: 3
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start).

En caso de que se desee configurar manualmente, consulte la lista de verificación en la página enlazada.

Las causales creadas por el procedimiento de Inicio Rápido permiten realizar:

- Asientos de compra y venta **Italia**
- Compra y venta en **reverse charge** en Italia, transferencia de compras y autofacturación relacionada
- Asientos de compra y venta **UE**, transferencia de compras y autofacturación relacionada
- Asientos de compra y venta **Fuera de la UE** y autofacturación relacionada con transferencia
- Notas de crédito que anulan las anteriores
- Compra y venta de **cespiti**
- Ingresos
- **Cobros y pagos**
- Cartera activa (emisión y presentación de Ri.Ba y cobro, morosidad)
- Asientos de diario libres
- Otros asientos en diario como sueldos, etc.
- Transferencias de IVA
- Pagos de impuestos y contribuciones
- Asientos de ajuste como devengos y anticipos activos y pasivos
- Amortizaciones
- Asientos de cierre y reapertura de cuentas
:::

## **testata**

#### Campos específicos

**Causal**: representa el código alfanumérico de 5 caracteres que debe ser único.

**Descripción de la causal**: representa la descripción de la causal.

**Tipo de movimiento**: representa el tipo de movimiento del registro. Se trata de una tabla fija interna, no modificable por el usuario, que divide las causales sin IVA de las diversas tipologías de movimiento de IVA.

**Tipo de documento**: la tabla está precargada pero puede ser modificada/integrada por el usuario. En esta tabla, en particular, son de interés las filas que prevén los indicadores **‘Nota de Crédito'** y **‘Nota de variación'**: para el Crédito, de hecho, el procedimiento verifica que la sección de IVA esté valorada con montos negativos (también se realiza un control de consistencia de los signos en la contabilización de notas de crédito desde el área de venta/compra: esto significa que no pueden estar presentes filas con montos positivos y simultáneamente otras para un subcuenta diferente con montos negativos); para la ‘Nota de variación', el procedimiento activará, siempre en la sección de IVA del registro, un indicador de identificación de las filas relacionadas con las notas de variación y una fecha de referencia del documento a rectificar a efectos del IVA. No confundir esta fecha con el campo **Comp. IVA**: la nota de crédito (o de variación) rectificará el IVA del período indicado en este último campo.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image02.png)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image03.png)

**numerazione**: las cajas combinadas permiten asignar a cada causal contable, respectivamente para los registros definitivos y provisionales, una numeración particular. Este tipo de gestión es requerido en algunas localizaciones extranjeras. Consulte [*Tabla de Numeración de Registros contables* ](/docs/configurations/tables/fluentis-numerations). Si no se define una numeración particular válida para la causal, por defecto se buscará una numeración que pueda estar configurada en los ** [*Parámetros generales de contabilidad* ](/docs/configurations/parameters/finance/accounting-parameters/) y en ausencia de una configuración, se leerá la tabla general *Numeración de registros contables*.

**libri contabili**: caja combinada que se refiere a una tabla específica donde se define un código y descripción que luego se recuperará en la causal para agrupar y categorizar las causales mismas. Estas categorías también podrían estar vinculadas a las diferentes numeraciones mencionadas en el campo anterior (útil para localizaciones extranjeras donde se llevan libros diarios separados según el tipo de escritura contable). Ejemplo: las compras podrían tener el numerador a) vinculado al libro contable "Compras", mientras que las ventas el numerador b) vinculado al libro "Ventas", las escrituras bancarias (cobros/pagos) el numerador c) vinculado al libro "Escrituras bancarias", etc.

**data fine validità**: es posible bloquear el uso de una causal contable a partir de esta fecha. No será visible en la lista de causales a partir de la fecha posterior.

**Registro de cobros y pagos (Registro incassi e pagamenti)**: NO ACTIVO (identifica las causales a incluir en el registro de cobros/settlement de la contabilidad simplificada de profesionales).

**Profesionales (Professionisti)**: NO ACTIVO (identifica una causal para la contabilidad de los profesionales).

### 1.1 Detalle de atributos (Dettaglio attributi)

#### Campos específicos

**Causal automática**: al momento de guardar un registro basado en la causal que se está modificando, el programa creará automáticamente un segundo registro basado en la causal indicada en este campo. Para que el segundo registro se complete correctamente, se deben respetar las siguientes lógicas de relación entre los dos registros:

a) El primer caso es el que la primera registración es de tipo movimiento IVA de compras IntraCEE y el segundo con Giroconto IVA de compras IntraCEE, donde la conexión se da por la registración del IVA de Compras también en el registro de Ventas; (de la misma manera se presenta el caso del reverse charge, utilizando los tipos de movimiento IVA de compras en reverse charge y Giroconto IVA de compras en reverse charge);

b) El segundo caso es el que la primera registración abre una cuenta mientras que la segunda opera su cierre inmediato; 

c) El tercer caso es relativo al registro de cierre de una cuenta nacida con tipo de movimiento ‘IVA venta a Entidades públicas' para la cual el IVA está en suspensión, en este caso se conecta un registro de Giroconto IVA en suspensión;

d) El cuarto caso es la compra con IVA en suspensión, opuesto al anterior; 

e) El quinto caso es aquel en que la primera registración es IVA, mientras que la segunda está valorada con la lógica de los subcuentas automáticos establecidos en el plan de cuentas; 

f) Cuando no están presentes los casos anteriores, el programa tratará de establecer los datos del segundo registro en función de los datos IVA del primero; de forma alternativa, el segundo registro será generado con los subcuentas previstas sin valor establecido.

**Tipo de autofactura automática**: vea la sección específica sobre [**configuraciones de autofacturas automáticas**](/docs/finance-area/e-invoice/auto-invoice/ledger-templates).

**Inversión de columnas si el monto es menor a cero**: es posible hacer que el programa invierta las columnas de Debe/Haber basándose en el signo del movimiento IVA, típicamente en el caso de registrar notas de crédito (se recomienda la selección de este campo para todos los registros IVA).

**avviso**: el campo está activo solo si el anterior ha sido activado, consiste en devolver al usuario un mensaje de advertencia sobre la inversión del signo. La bandera es irrelevante para las causales utilizadas en los procedimientos automáticos de contabilización.

**Permitir subcuentas con valores a cero (Consenti sottoconti con valori a zero)**: con esta bandera, el procedimiento:

a) permitirá ingresar manualmente líneas con monto tanto de debe como de haber igual a cero; 

b) al momento de guardar el registro NO eliminará las líneas reportadas por la causal que no fueron valorizadas por el usuario en el registro; 

c) las líneas que valorizan en el libro diario la deuda/crédito IVA, esta bandera comportará la eliminación del monto a cero solo si no se ha activado también la bandera ‘Permitir IVA 0 en LG' en la tabla de [Tipos de IVA](/docs/configurations/tables/finance/vat-rates).

#### EJEMPLOS:

<details>

<summary>Clic aquí para ejemplos</summary>

- Al elegir establecer la bandera desactivada, se puede aprovechar la funcionalidad para incluir en el modelo de registro propuesto por la causal todas las cuentas potencialmente útiles las cuales, si no son movidas, no serán mantenidas al momento de guardar el registro. Pensemos, por ejemplo, en los escritos de los empleados, nóminas, etc. para los cuales no siempre se utilizan las mismas cuentas cada mes aunque las cuentas posibles sean diversas.

- Al elegir mantener la bandera activa, se podrán insertar subcuentas con movimiento a cero, situación que ocurre frecuentemente al registrar servicios públicos de telefonía o electricidad, por ejemplo. 

**Prototipo del registro (Prototipo della registrazione)**: esta es la sección fundamental (pero no obligatoria) de la causal de contabilidad, en la cual se debe cargar el esquema típico del tipo de registro contable a gestionar. También es posible ingresar códigos genéricos de cuenta (por ejemplo, la cuenta de proveedores), que serán actualizados automáticamente por el programa según la lista de cuentas de clientes/proveedores ingresada en los Parámetros de contabilidad general. Estos subcuentas, así como las secciones debe/haber, guiarán las valorizaciones contables, que serán, sin embargo, modificables durante la carga manual del registro.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image02.png)

</details>

#### [Tipo de importe (Tipo importo)]{#amount-type}

Se merece explicaciones específicas los códigos de Tipo de importe, fundamentales para valorar automáticamente el libro diario según los datos de IVA y de subcuenta movidos en el registro. En particular:

**manuale**: indica que la línea será valorada manualmente por el usuario en el momento de la registración;

**imponibile sottoconto**: indica que la línea será actualizada por cada código de subcuenta ingresado en la sección IVA con el monto obtenido de la base imponible de la/s línea/s misma/s; el uso de este tipo de importe es **recomendado típicamente para todos los ingresos ingresados en las causales de venta**;

**totale imponibile**: indica que la línea será actualizada con el total imponible del registro: no se considerará el código de cuenta/subcuenta ingresado. EJEMPLOS: Venta bajo el régimen de pago dividido o venta intra comunitaria; 

**totale imposta**: indica que la línea será actualizada con el total impuesto del registro: no se considerará el código de cuenta/subcuenta ingresado;

**imposta detraibile**: indica que la línea será actualizada con el total del impuesto deducible del registro: no se considerará el código de cuenta/subcuenta ingresado;

**tot. doc/registrazione**: indica que la línea será actualizada con el código de la subcuenta responsable del registro (si es conforme a las combinaciones ingresadas en los Parámetros de contabilidad) por el valor total del documento/registro;

**imponibile+imposta indetraibile**: indica que la línea será actualizada con la suma del total imponible y el total impuesto indeducible del registro: no se considerará el código de cuenta/subcuenta ingresado; tipo de movimiento de escasa aplicación - se recomienda utilizar **Imp. Sott.+Imposta indetr. Sott**.

**50% imponibile**: indica que la línea será actualizada con el 50% del total imponible del registro: no se considerará el código de cuenta/subcuenta ingresado;

**50% imponibile+iva indetraibile**: indica que la línea será actualizada con el 50% del total imponible del registro sumado al total del IVA indeducible del mismo: no se considerará el código de cuenta/subcuenta ingresado;

**50% Imponible + 50% IVA Indeducible (50% Impon.+ 50% Iva Indetraibile)**: indica que la línea será actualizada con el 50% del total imponible del registro sumado al 50% del IVA indeducible del mismo: no se considerará el código de cuenta/subcuenta ingresado;

CREADOS POR RAZONES FISCALES Y A CONSIDERAR OBSOLETOS

**Imp. Sott. + Impuesto indeducible (Imp. Sott.+Imposta indetr. Sott)**: indica que la línea será actualizada por cada código de subcuenta ingresado en la sección IVA con el monto obtenido de la suma de la base imponible de la/s línea/s misma/s y del impuesto deducible correspondiente; **el uso de este tipo de importe es recomendable típicamente para todos los costos ingresados en las causales de compra;**

**arrotondamenti attivi**: indica que la línea será actualizada con el importe de los redondeos activos; su uso debe relacionarse con causales de cierre de cuentas;

**arrotondamenti passivi**: indica que la línea será actualizada con el importe de los redondeos pasivos; su uso debe relacionarse con causales de cierre de cuentas;

**importo sottoconto**: indica que la línea será actualizada con el importe de los pagos de las cuentas incluidas en el registro, según el signo del pago mismo;

**utile diff. cambi**: indica que la línea será actualizada con la subcuenta de utilidad de la divisa de referencia de la diferencia cambiaria, por el importe obtenido según el diferencial de valoración entre el tipo de cambio histórico y el tipo de cierre de la cuenta; en caso de que se haya establecido la bandera de cierre al tipo de cambio histórico, la línea no tendrá ninguna valoración;

**Pérdida Diferencia de Cambio (Perd. Diff. Cambi)**: indica que la línea será actualizada con la subcuenta de pérdida de la divisa de referencia de la diferencia cambiaria, por el importe obtenido según el diferencial de valoración entre el tipo de cambio histórico y el tipo de cierre de la cuenta; en caso de que se haya establecido la bandera de cierre al tipo de cambio histórico, la línea no tendrá ninguna valoración;

**automatico**: tipo de importe utilizado en algunos procedimientos de contabilización automática.

*EJEMPLO*: Se establece en las causales de venta de activos para gestionar la plusvalía/minusvalía; para el resto, lo configura el sistema en procedimientos de contabilización automática.

La cuadrícula se completa con:

- un campo de codificación de las contrapartidas (se desaconseja su uso: en contabilidad ya está presente una impresión - "Extracto de cuenta con contrapartidas" - que visualiza las contrapartidas independientemente de esta configuración). Además, al activar la bandera que permite visualizar las subcuentas de contrapartida (pestaña Detalle de Registro)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image03.png)

estos campos serán gestionados automáticamente; por esta razón no se recomienda gestionarlos manualmente imponiéndolos en la causal.

En correspondencia de las cuentas de IVA a crédito (o a débito) y costo (o ingreso), por ejemplo, se reportan las indicaciones del proveedor (o cliente), mientras que en el proveedor (o cliente) se reporta la cuenta de contrapartida del costo o ingreso; en caso de que haya más cuentas de contrapartida, se reporta la de mayor importe (las demás se ignoran).

- un campo de notas de detalle: en este campo es posible utilizar todos los códigos que se encuentran al pie del formulario. 

**Para causales de cierre de cuentas**, ingrese en correspondencia con la cuenta de clientes/proveedores genéricos los **códigos (8) o (9)** en concomitancia con la **bandera ‘Ref. doc. cuenta en pag.'** (situada en la pestaña Detalle de Registro) para anotar en contabilidad las referencias de los documentos pagados/incassados.

Prestar atención a que la cuenta genérica presente en la causal (ejemplo "Proveedores Italia") sea efectivamente gestionada en los [Parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters) en combinación con el tipo de cuenta correcto (ej. FIT en la base de datos estándar de Fluentis). También verifique que el tipo de importe en correspondencia con la línea del cliente o proveedor esté correctamente configurado en Importe de subcuenta.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image04.png)

**Impuesto deducible y subcuenta de IVA (Imposta detr. e sottoconto IVA)**: tipo de importe utilizado para valorar la línea relacionada con el IVA con el importe deducible del IVA y con la subcuenta determinada según el 'Tipo de contabilización de IVA' asociado prioritariamente a la base del registro acogido o de forma predeterminada en los 'Parámetros de contabilidad general'.

Configuración no utilizada en Italia, útil para localizaciones extranjeras, ejemplo Croacia, para vincular la cuenta del IVA a la tasa utilizada (ejemplo: si se utiliza la tasa de IVA del 10%, se asociará la cuenta "IVA compras al 10%", específica para esa tasa en lugar de una cuenta, ejemplo "IVA a crédito", genérica como en Italia para todas las tasas).

**descrizione parametrica della registrazione contabile**: dentro de esta se pueden codificar descripciones estándar que serán completadas por el programa a través de los diversos códigos indicados en la leyenda colocada inmediatamente encima del campo; estas descripciones serán reportadas en los informes contables y, en particular, en los Extractos de cuenta y en el Libro diario.

También para cada línea de movimiento de la sección *Detalle de cuentas / subcuentas - Prototipo de registro* es posible, como se ha ilustrado anteriormente, codificar notas preestablecidas así como para la Descripción general. 

**ATENCIÓN**: en particular, los códigos (8) y (9) solo se gestionan para la descripción específica de línea y no son considerados en la descripción general del registro de la cual se refiere el campo en comentario.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image05.png)

### 1.2 Detalles del registro (Dettagli registrazione)

**Registro IVA**: el campo, obligatorio solo para causales con tipo de movimiento IVA, permite asignar el registro IVA de referencia a la causal en gestión.

**data competenza iva**: el campo permite definir cuál es la fecha de competencia que se debe asignar al movimiento IVA: el programa propone la fecha de registro para los movimientos en registros de compras y la fecha del documento para movimientos en registros de ventas. Se recomienda establecer la fecha de competencia como fecha de registro incluso para las causales de giroconto IVA intra CEE y reverse charge. 

Es fundamental, de hecho, verificar que las dos causales, de compra y giroconto, que están involucradas en estos tipos de "doble registración", presenten la misma configuración para evitar que el IVA deducido y el IVA exigible en contrapartida puedan tener periodos de competencia diferentes. Queremos resaltar esto en particular porque, la causal de giroconto, al ser una causal de IVA del lado de ventas, propone por defecto el criterio de fecha documento que debe ser modificado.

#### Opciones del tipo de documento

**Tipo/N. documento (Tipo/N. documento)**: la configuración de esta bandera hará obligatorio el campo del número del documento para el guardado del registro basado en esta causal.

**data documento**: la configuración de esta bandera hará obligatorio el campo de la fecha del documento para el guardado del registro basado en esta causal.

**N. Doc. = Prot. IVA (N. Doc. = Prot. IVA)**: la configuración de esta bandera implica que el programa propondrá el número del documento basado en el número de protocolo IVA progresivo. Por tanto, el campo no debe configurarse para registros de compras donde el número del documento y el protocolo no tienen ninguna relación mutua; en cuanto a las ventas, en cambio, su uso es sugerido solo para causales de registros realizados manualmente directamente en contabilidad general: la configuración de esta bandera no se recomienda para causales configuradas en los tipos de facturas de venta y utilizadas en la contabilización de facturas.

**Prot. IVA = N. doc (Prot. IVA = N. doc)**: la configuración de esta bandera implica que el programa intentará atribuir el protocolo IVA basado en el número del documento. Por tanto, el campo no debe configurarse para registros de compras donde el número del documento y el protocolo no tienen ninguna relación mutua; en cuanto a las ventas, en cambio, **su uso es sugerido para todas las causales configuradas en los tipos de facturas de venta y utilizadas por lo tanto en la contabilización automática de facturas**: la posibilidad de utilizar esta configuración depende de la certeza de que la numeración de los tipos de facturas sea la misma para todos los documentos a registrar en el mismo Registro IVA, de lo contrario se generarían "saltos" (o "duplicados" con el consiguiente rechazo de guardado) en la protocolización.

La utilidad de esta función en la contabilización automática de las facturas consiste en la posibilidad de contabilizar sin prestar atención al orden de protocolización: por ejemplo, puedo contabilizar la factura nr. 2 y luego la nr. 1 obteniendo una correcta protocolización que asocia la factura nr. 1 al protocolo 1, etc.

Al final del periodo IVA (mes o trimestre), basta asegurarse de haber contabilizado todas las facturas emitidas.

#### Opciones del tipo de registro

**apertura partite**: la presencia de esta bandera hará aparecer la pestaña de creación de cuentas por cobrar en el registro contable que utilizará esta causal; la configuración de esta bandera se recomienda para todos los registros de tipo IVA y en general para poder gestionar el calendario de clientes/proveedores. La bandera también se puede activar para causales que registran un pago anticipado: en este caso se abrirá una cuenta con signo inverso que se compensará posteriormente con las cuentas que se crearán al momento de la registración contable del documento fiscal posterior.

**Detalle de movimiento en cuentas (Dett. mov. in partite)**: con esta bandera, el programa insertará en las **notas de las cuentas** los textos ingresados en el campo 'Detalle de movimiento' de la línea de contabilidad de origen de la cuenta.![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail/image02.png)

La bandera está activa solo cuando la anterior *Apertura de cuentas* està configurada.

**Apertura por cada línea de movimiento (Apertura per ogni riga mov.)**: con esta bandera, el programa insertará una cuenta por cada línea de movimiento, en la que está presente una subcuenta con la bandera de gestión de cuentas abiertas configurada. La bandera está activa solo cuando la anterior *Apertura de cuentas* está activada.

La bandera solo se puede activar para causales no IVA (ejemplo apertura de cuentas) y por cada línea de movimiento de proveedor o cliente abre una cuenta y reporta las indicaciones de pago que toma de la base. (se requiere en caso de que se abra más de una línea para un solo cliente o proveedor).

**chiusura partite**: la presencia de esta bandera hará aparecer la pestaña de cierre de cuentas en el registro contable que utilizará esta causal. Se trata típicamente de todos los registros de pago/cobro no IVA, pero también puede configurarse en combinación con apertura de cuentas y compensación de cuentas para las causales de notas de crédito y en general para todos los registros que prevean una apertura de cuentas con una compensación simultánea de una situación previa.

**usa cambio storico**: con esta bandera, disponible solo en caso de que se haya configurado el cierre de cuentas, la aplicación procederá a cerrar las cuentas con el tipo de cambio histórico de apertura, sin ningún registro automático de las diferencias de cambio (permitiendo así gestionarlas eventualmente de manera manual).

**Agrupar pagos en libro diario (Ragg. pag. in libro giornale)**: con esta bandera, disponible solo en caso de que se haya configurado el cierre de cuentas, la aplicación procederá a agrupar en un único movimiento contable todos los importes de cierre de cuentas relacionados con un mismo subcuenta (en particular, agrupará los movimientos del mismo signo y misma divisa).

**Excluir de comisiones devengadas (Escludi da provv. maturate)**: con esta bandera, disponible solo en caso de que se haya configurado el cierre de cuentas, los cierres de cuentas realizados con esta causal contable no serán considerados válidos para el cálculo de las comisiones devengadas para agentes con cálculo de tipo 'Pago realizado'.

**Ref. documento de cuenta en pago (Rif. doc. partita in pag.)**: con esta bandera, disponible solo en caso de que se haya configurado el cierre de cuentas, la aplicación procederá a gestionar los códigos (8) y (9) de registro de las referencias de los cierres de cuentas en las descripciones de detalle de los movimientos.

**Compensación de cuentas (Compens. partite)**: con esta bandera, disponible solo en caso de que se hayan configurado ambas banderas de apertura y cierre de cuentas, el procedimiento activará la posibilidad de proceder a una compensación de cuentas dentro del registro basado en esta causal: esta combinación de banderas se recomienda para todas las causales vinculadas a documentos de tipo notas de crédito.

**Aviso de compensación (Avviso comp.)**: con esta bandera se activa, al guardar el registro contable, un control que advierte al usuario sobre la existencia de cuentas por compensar.

**ragg. partite**: la bandera activa la gestión de agrupaciones de cuentas en lugar de la gestión estándar de apertura/cierre de cuentas, a través de una pestaña específica de registro en el registro contable.

**crea gruppo**: la bandera, si está activa y en combinación con la bandera anterior, crea automáticamente un grupo de cuentas en las agrupaciones de cuentas, en el cual se agrupan las cuentas del registro (debe activarse en las causales de las facturas de compra/venta).

**Agrupaciones de cuentas - tipo de pago (Ragg. partite – tipo pagamento)**: es la tipología de pago a asignar a los movimientos de las agrupaciones de cuentas registradas con esta causal.

**progetti**: (ex Comisiones): la activación de esta bandera hará aparecer el campo *Proyecto* en el encabezado del registro, además de los campos de detalle en el cuerpo del registro para vincular los proyectos (comisiones) con los movimientos contables de detalle.

Para más detalles, consulte **[aquí](/docs/finance-area/ledger-records/records/ledger-record)**.

**centri di costo**: la presencia de esta bandera hará aparecer la pestaña de gestión de valorización de centros de costo en los registros contables.

**centri di profitto**: la presencia de esta bandera hará aparecer la pestaña de gestión de valorización de centros de beneficio en los registros contables.

**gestione macchina**: NO ACTIVADO, la bandera mostrará en contabilidad, en la ficha analítica, una cuadrícula de valorización de costos/ingresos para los vehículos de la empresa.

**cespiti**: la presencia de esta bandera hará aparecer la pestaña de gestión de las tarjetas de activos en el registro contable.

**tipo operazione**: se trata del tipo de operación a proponer por defecto para los nuevos movimientos registrados dentro de la ficha de activos en contabilidad.

**aggiornamento saldi**: bandera establecida por defecto.

**Descripción. movimiento en diario y pagos (Descr. mov. in giornale e pagamenti)**: con esta bandera, el procedimiento copiará la descripción general de la registración en todas las descripciones de detalle de los movimientos y también en las notas de los pagos.

**provvigioni**: la bandera activa una pestaña específica dentro de los registros contables para gestionar los datos de cálculo de comisiones desde el módulo de administración (este módulo, recientemente introducido, opera como alternativa al manejo de comisiones desde el módulo de ventas, pero no lo reemplaza, ya que este último sigue activo).

**intrastat**: la bandera activa una pestaña específica dentro de los registros contables para gestionar los datos, provenientes de la factura de compra o venta contabilizada automáticamente a través del procedimiento correspondiente, o bien ingresados al momento de la inserción de la escritura contable de diario, y relacionados con la creación de los modelos Intrastat. Los datos gestionados de esta manera serán adquiridos en el procedimiento de creación de los modelos Intrastat a través del procedimiento *Adquisición de registros contables*. Se recuerda que está presente alternativamente el procedimiento de *adquisición de facturas* que no interactúa con los movimientos contables y solo lee directamente los documentos de compra/venta.

#### Otras columnas que pueden visualizarse en la cuadrícula de registros contables

**divisa**: la presencia de esta bandera hará aparecer el campo de Divisa en la sección del libro diario.

**cambio/data valuta**: la presencia de esta bandera hará aparecer los campos de cambio y de fecha de divisa en la sección del libro diario.

**importo valuta**: la presencia de esta bandera hará aparecer el campo de Importe en divisa en la sección del libro diario.

**sottoconto di contropartita**: la presencia de esta bandera hará aparecer los campos de subcuentas de contrapartida en la sección del libro diario. La gestión de los campos de contrapartida no es recomendable.

**dettaglio del movimento**: la presencia de esta bandera hará aparecer el campo de detalle del movimiento en la sección del libro diario: se recomienda activar esta bandera para todas las causales contables, de modo que siempre se permita la inserción de notas de detalle del único movimiento contable.

**divisione**: la presencia de esta bandera hará aparecer el campo de División desde la sección de IVA, así como en la sección del libro diario. Con esta configuración, será posible dividir la carga del mismo documento en varias divisiones de la empresa.

**giorni banca**: la presencia de esta bandera hará aparecer el campo de la fecha de divisa del banco en la sección del libro diario: el campo, por tanto, se recomienda para todas las causales contables que registran movimientos financieros. La gestión de este campo puede ser automatizada en función de los días de divisa (positivos/negativos) establecidos en la base de datos de bancos para cada causal.

**numero progressivo**: la presencia de esta bandera hará aparecer el campo de Número de línea en la sección del libro diario: se recomienda activar esta bandera para causales particularmente largas, de modo que se permita al usuario ordenar los registros de forma fija como en la causal (ej. registro de nóminas).

**Ref. manual de cuentas (Rif. manuale partite)**: la presencia de esta bandera hará aparecer el campo de Ref. Manual de la cuenta en la sección del libro diario. El campo es indicado para vincular manualmente movimientos de contabilidad sin pasar por la gestión de cuentas. En la práctica, se trata de un campo de notas libre.

**Operaciones extraordinarias (Operazioni straordinarie)**: la presencia de esta bandera hará aparecer el campo homónimo (tipo bit o sea una bandera) con el propósito de resaltar algunos movimientos contables (en particular, por ejemplo, un costo) como *extraordinario* y permitir luego una fácil búsqueda o extracción dentro de un informe de los mismos. Esta posibilidad se revela útil a raíz de las modificaciones en los esquemas de balance introducidas con la directiva 2013/34 (Dlgs 139/2015). Estas modificaciones habían introducido, en síntesis, la eliminación del área "extraordinaria" del Estado de Resultados. Como consecuencia, todos los componentes "excepcionales" no pueden ser representados por cuentas tales como, por ejemplo, los ingresos extraordinarios, sino que deben inscribirse directamente en la cuenta a la que se refieren, es decir, el gasto (por naturaleza). Sin embargo, se presenta la necesidad de resaltar tales componentes de costo/ingreso para el necesario detalle en la nota complementaria y por otras posibles razones fiscales, como por ejemplo, las correcciones a la baja de costos en la declaración de impuestos, etc.

**tipo operazione fiscale**: hace visible una caja combinada con la que marcar la línea contable para el soporte de un posterior procesamiento (externo) de la declaración anual de IVA, donde se solicita indicar si la operación corresponde a:
- compra de bienes amortizables
- compra de bienes instrumentales no amortizables
- compra de bienes/servicios destinados a la reventa
- otras compras
 
**riferimento documento**: hace visible, en correspondencia de las líneas del movimiento contable, dos campos adicionales para anotar la referencia a la fecha y número del documento (por ejemplo, factura sobre la línea de la cuenta de contrapartida).

### 1.3 Parámetros (Parametri)

#### Orden de las pestañas en los registros contables

Está dedicadas a la configuración del orden en el que se presentarán los tabuladores previstos, a través de los botones específicos: **sposta su** y **sposta giù**.

#### Parámetros de registro

**controllo tipo conto**: la presencia de esta bandera obligará al procedimiento a verificar la correspondencia de la subcuenta responsable del registro respecto a las configuraciones de los parámetros de contabilidad (ej. uso de una cuenta de cliente en una causal de compra de proveedor): en caso de resultado negativo, se ejecutará un simple mensaje de advertencia.

**blocca registrazione se il tipo conto è incompatibile**: la presencia de esta bandera obligará al procedimiento a anular la inserción de una subcuenta responsable del registro no válida respecto a las configuraciones de los parámetros de contabilidad (ej. uso de una cuenta de cliente en una causal de compra de proveedor).

**permetti registrazione contabile con sbilancio**: la presencia de esta bandera permitirá al usuario guardar registros contables no equilibrados (desaconsejado). Puede ser útil, por ejemplo (con las necesarias precauciones) para forzar una contabilización automática que devuelve un mensaje de error con el fin de comprender mejor el resultado de la registración y corregir las configuraciones.

**blocca cancellazione registrazioni con partite pagate**: con esta bandera no será posible eliminar registros que contengan al menos una cuenta con un pago asociado.

**Bloquear registro si el valor de las cuentas no es igual al movimiento contable (Blocca registrazione se il valore delle partite non è uguale al movimento contabile)**: la presencia de esta bandera obligará al procedimiento a bloquear el guardado de registros para los cuales el valor de los movimientos contables no corresponde a los valores de movimiento de las cuentas (en apertura y cierre de cuentas): en caso de que no esté configurada, el procedimiento, no obstante, ejecutará un mensaje de advertencia respecto a la presencia de una diferencia. El control se ejecuta sobre todas las subcuentas que en el plan de cuentas tienen la bandera *Apertura partite* configurada.

**blocca registrazione se il totale documento è differente dal totale dei dati iva**: la presencia de esta bandera obligará al procedimiento a bloquear el guardado de registros para los cuales el valor total de los movimientos de IVA no corresponde a los totales configurados en el encabezado del registro: en caso de que el campo no esté configurado, el procedimiento ejecutará un mensaje de advertencia.

**Actualizar automáticamente el total del documento al variar los datos en la cuadrícula de IVA**: la presencia de esta bandera obligará al procedimiento a actualizar, pero solo en incremento, los totales del encabezado del registro al variar la suma total ingresada en la sección de IVA del registro.

**aggiorna anche in decremento**: esta bandera, activa solo cuando la anterior está configurada, forzará al procedimiento a actualizar los totales del registro también en decremento.

**blocca registrazione se l'ordine di protocollo non è rispettato**: la presencia de esta bandera obligará al procedimiento a bloquear el guardado de registros para los cuales el orden temporal de protocolización no se respete: en particular, con esta bandera, el procedimiento recuperará números de protocolos solo si se ha configurado una fecha de registro válida para el número mismo. Si la bandera no se inserta, no obstante, el procedimiento ejecutará un mensaje de advertencia sobre la falta de orden de protocolización: se recuerda, además, que la impresión de registros IVA no permite, en la configuración por defecto, imprimir en definitivo registros IVA que tengan huecos en la numeración o que no sigan el orden de protocolización correcto.

**Gestión separada Cdc/Cdp (Gestione separata Cdc/Cdp)**: esta bandera, activa solo en caso de que la causal gestione tanto los centros de costo como de beneficio, permitirá asignar los movimientos económicos de contabilidad a ambos, centros de costo y centros de beneficio. Si no está configurada, en cambio, el movimiento podrá asignarse solo a una de las dos secciones.

**Recalculo automático de CdC, CdP y comisiones (Ricalcolo automatico CdC, CdP e commesse)**: la bandera en cuestión se reportará también en los registros contables basados en esta causal: el significado es ejecutar automáticamente o no el recalculo de las secciones analíticas de los centros de costo, beneficio y de las comisiones una vez que se ingresen en modificación de un registro contable ya guardado. En el momento de la inserción de un nuevo registro, hasta su primer guardado, la actualización de estas secciones será siempre automática, respetando las configuraciones por defecto definidas.

**Bloquear registro si el valor de Cdc/Cdp no es igual al movimiento contable (Blocca registrazione se il valore dei Cdc/Cdp non è uguale al movimento contabile)**: la presencia de esta bandera obligará al procedimiento a bloquear el guardado de registros para los cuales el valor total de los movimientos analíticos de los centros de costo y beneficio no corresponda a los importes económicos movidos en la sección de contabilidad general: en caso de que la bandera no esté configurada, se ejecutará un mensaje de advertencia sobre la no correspondencia de valores.

**Agrupar IVA en libro diario (Raggruppa Iva in libro giornale)**: la presencia de esta bandera obligará al procedimiento a agrupar en el libro diario las líneas de IVA asignadas a la misma subcuenta contable (y a la misma división).

**Bloquear guardado con número de documento duplicado (Blocca salvataggio con numero documento duplicato)**: la presencia de esta bandera, establecida por defecto, obligará al procedimiento a bloquear el guardado de registros contables con el mismo número de documento, mismo año, mismo tipo de documento y base de datos en el encabezado del registro.

**Color de fondo (Background colour)**: configure en este campo el color de fondo para visualizar en las búsquedas en pantalla los movimientos basados en esta causal. El uso de colores puede ser útil para identificar el tipo de movimiento sin tener que leer descripciones o códigos de las causales.

**Color de primer plano (Foreground colour)**: configure en este campo el color de los textos a visualizar en las búsquedas en pantalla de los movimientos basados en esta causal. El uso de colores puede ser útil para identificar el tipo de movimiento sin tener que leer descripciones o códigos de las causales.

**sample text**: el campo muestra el resultado de la combinación de colores configurada.

**Fuente en cursiva (Carattere corsivo)**: configure en este campo la visualización en cursiva de los caracteres para esta causal en las búsquedas en pantalla; puede ser útil para identificar el tipo de movimiento sin tener que leer descripciones o códigos de las causales.

**carattere grassetto**: configure en este campo la visualización en negrita de los caracteres para esta causal en las búsquedas en pantalla; puede ser útil para identificar el tipo de movimiento sin tener que leer descripciones o códigos de las causales.

:::important Vea También
[**TUTORIALES EN VIDEO SOBRE LAS CAUSALES CONTABLES**](/docs/video/finance/intro)
:::

### 1.4 Control de tasas de IVA (Controllo aliquote IVA)

En esta pestaña es posible ingresar algunas tasas de IVA (previamente codificadas en la tabla [**Tasas / Modalidades de IVA**](/docs/configurations/tables/finance/vat-rates/)) que obligarán al usuario a utilizar exclusivamente las mismas.

Representa así una forma de control y de vinculación a utilizar solo códigos de IVA considerados correctos y adecuados para las escrituras contables gestionadas por la causal en cuestión.

La posibilidad de ingresar en la cuadrícula y así activar el control está habilitada por la bandera **imposta aliquote iva abilitate**.

Está presente junto a los campos que reportan el código/descripción de la tasa ingresada, un campo para establecer una fecha de finalización de validez de la elección previamente realizada y así cambiar o concluir la política de gestión.