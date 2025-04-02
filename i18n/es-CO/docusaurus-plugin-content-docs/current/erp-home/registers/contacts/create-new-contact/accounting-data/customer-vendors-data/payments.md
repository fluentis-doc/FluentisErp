---
title: pagamenti
sidebar_position: 3
---

En este formulario se pueden especificar las condiciones comerciales predeterminadas en relación con los pagos/recibos.  

*Botones específicos*:  
> Cancelar bancos: para eliminar el banco de apoyo seleccionado.  
> Cancelar tipo de pago: para eliminar de la cuadrícula las tipologías de pago.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

### Tipos de pago (Tipi pagamento)
:::tip[ ]
La sección fundamental de la pestaña **pagamenti** sirve para establecer la lógica de cálculo de los vencimientos. Se seleccionan el **Tipo de pago (Tipo di pagamento)** y la **soluzione di pagamento** (ambos se encuentran en *Configuración > Tablas > Ajustes generales*).
:::

**importo**: permite calcular un vencimiento imponiendo el importe indicado; el residuo deberá ser gestionado con líneas que tengan el campo Porcentaje completado. En caso de que el total del documento sea inferior al valor del campo Importe (incluso con líneas que tengan el campo Porcentaje completado), se enviará un mensaje de error en el momento de crear los vencimientos en el documento, pidiendo la rectificación de la configuración, ya que no es coherente.

<u>Atención</u>: este campo tiene rara aplicación en la práctica; además, dentro de los documentos, en el cálculo de los vencimientos, es utilizado y completado por los procedimientos automáticos de la siguiente manera: cuando se valoran, por ejemplo, varios DDT en una factura, se verifica la situación en la que podrían existir condiciones de pago diferentes en las facturas. Entonces, en la factura se crean tantas líneas de pago como tipos de condiciones, agrupando los importes (suma de los DDT con esa condición) y colocando dicho valor en el campo *Importe*, se crea una línea adicional “residual” donde, utilizando el campo *Porcentaje*, se gestiona el 100% del valor “residual” (eventual) con la condición de pago determinada por el registro. Este valor "residual" típicamente acoge montos adicionales imputados directamente en la factura (y por lo tanto no presentes en las facturas) como *gastos de cobro, gastos de transporte, gastos de timbre*, etc. Esta recopilación de más de una línea (al menos dos, una para el vencimiento del DDT y una "residual") también ocurrirá si solo se valora un DDT. Esta gestión es impuesta por el parámetro de valoración de DDT, en la sección *Tratamiento de pagos en la factura* con la opción *Mantener los de las facturas (Mantieni quelli delle bolle)*. En cambio, al elegir *ripristina quelli di anagrafica*, los vencimientos se agruparán todos con la única condición presente en el registro. Se señala que en la impresión de factura se mostrarán todos los vencimientos calculados tal como aparecen en pantalla. Si se desea, es posible intervenir personalizando la impresión para que muestre solo la línea efectivamente utilizada (es decir, que no muestre la línea “extra” si no está vinculada a ningún vencimiento).

**percentuale**: permite definir la cuota parte (en porcentaje) del valor total del pago (o recibo) que debe ser gestionada con la condición de pago (como combinación de tipo de pago y solución de pago) establecida en la línea.

En caso de porcentaje inferior a 100, por lo tanto, se deben crear tantas líneas con porcentajes que sumen 100.

*Ejemplo*:<br />  
- 50% Efectivo a la vista factura y 50% Transferencia bancaria a 30 días.<br />  
- 50% Efectivo a la vista factura; 25% Transferencia bancaria a 30 días; 25% transferencia bancaria a 60 días.<br />  
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)  

<u>Atención</u>: si la solución de pago prevé más de un vencimiento, se completará de la siguiente manera: ejemplo 50% efectivo a la vista y 50% transferencia bancaria a 30 - 60 días.

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Banco (d'appoggio)**: representa el banco de referencia para las partidas.  
- Para el registro del cliente:
> - si el tipo de pago es recibo bancario, se debe indicar el banco del cliente;  
> - si el tipo de pago es transferencia bancaria, se debe indicar el banco de la empresa en uso (de manera que en la impresión de documentos se tengan las referencias de pago para el cliente);  

- Para el registro de proveedores:
> - si el tipo de pago es transferencia bancaria se indicará el banco del proveedor;  
> - si el tipo de pago es recibo bancario, se indicará el banco de la empresa.  

El campo se completa a través de un combo box (**Banco**) conectado a la tabla [*banca d'appoggio*](/docs/configurations/tables/general-settings/reference-bank). Dentro de esta tabla es posible insertar tanto los bancos de la empresa, como los bancos de la contraparte (cliente o proveedor). Además, es posible incluir filas completas con código IBAN y/o SWIFT (recomendados para los bancos de la empresa) así como filas completas solo con el código ABI y CAB (recomendados para los bancos de contraparte para los cuales IBAN y SWIFT pueden ser indicados en los campos de la cuadrícula presentes en el registro).

Si la fila en la tabla Banco de apoyo está completa con IBAN y/o SWIFT, así como con ABI y CAB, al invocar dicha fila a través del combo box, los datos se mostrarán en la cuadrícula en el registro; de lo contrario, solo se mostrarán ABI y CAB, pero siempre será posible agregar los datos faltantes directamente en la cuadrícula. Esto es recomendable para los bancos de contraparte con el fin de evitar codificar en la tabla Banco de apoyo demasiadas filas utilizadas solo para un único cliente o proveedor. Es preferible indicar solo los datos de la sucursal bancaria (ABI y CAB) donde podrían tener la cuenta corriente diferentes clientes o proveedores.

La inserción de un banco también puede realizarse mediante un doble clic en los campos abi/cab para abrir la ayuda de búsqueda entre las agencias bancarias nacionales, de las cuales se selecciona la correspondiente y se crea el código en el registro para completar con los datos de la cuenta corriente, cin, iban, swift. Al guardar un IBAN, **Fluentis** ejecutará controles sintácticos sobre su estructura, indicando posibles errores sobre el número de caracteres o el carácter de control.

**descrizione banca**: campo relacionado con el campo anterior.

**codice banca**: campo NO utilizado en Italia. Para localizaciones exteriores, puede contener un código bancario alternativo en comparación con el sistema ABI CAB.

**configurazione ricerche**: con este campo se puede vincular la fila a una lógica de atribución a nivel de Pedido del cliente, a través de un extra-data relacionado con el tipo Pedido.

:::tip nota
Con esta configuración, en esencia, podemos establecer que para los pedidos de tipo X el cliente nos pagará con Riba a 60 días, mientras que para los pedidos de tipo Y nos pagará con Transferencia a 30 días.
:::

### Banco de apoyo (Banca d'appoggio)

En la cuadrícula se pueden insertar los bancos de apoyo de la contraparte.

Entre estos, el que se establece como **Predeterminado** (con el flag homónimo) puede ser utilizado como banco beneficiario de las transferencias de proveedores del módulo *pagamenti de proveedores*.

En este caso, el banco ingresado en esta cuadrícula se establecerá en la lista de transferencia, reemplazando aquel presente en la registración contable (esta última definida en la registración contable, manualmente o a través del dato ingresado en el registro en la cuadrícula superior Tipos de Pago) y vinculada a la partida abierta.

*Atención*: para activar la sustitución del banco de apoyo mencionado anteriormente, es necesario activar el flag *Imponer el banco de apoyo* presente en *Registro de proveedor > [Parámetros de pagamenti de Proveedor](/docs/configurations/parameters/treasury/vendor-payments-parameters)*.

Si el flag está activo en el formulario *Parámetros de pagamenti de Proveedor* pero no se han ingresado bancos con el flag predeterminado activo en la cuadrícula, se mantendrá el banco indicado en la registración contable mediante el dato ingresado en el registro en la cuadrícula superior *Tipos de Pago* (o modificado manualmente en la registración).

De este modo, es posible ingresar bancos de apoyo alternativos (siempre de contraparte). Otro ejemplo puede ser el de un cliente que paga con transferencia (y por lo tanto en la cuadrícula de Tipo de Pago se inserta el banco de nuestra empresa) pero del cual se desea ingresar su banco de apoyo en caso de pago de notas de crédito.

La inserción de un banco puede realizarse a través de un doble clic en los campos abi/cab para abrir la ayuda de búsqueda entre las agencias bancarias nacionales, de las cuales se selecciona la correspondiente y se crea el código en el registro para completar con los datos de la cuenta corriente, cin, iban, swift.

**beneficiario**: el flag activa la lectura del campo Razón social beneficiario.

**ragione sociale beneficiario**: insertar el dato del registro en caso de que los pagos deban estar a nombre de un tercero (por ejemplo, una sociedad financiera del grupo).

### Mes de exclusión de vencimientos (Mese esclusione scadenze)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image07.png)

En esta cuadrícula es posible establecer un automatismo que retrasa todos los vencimientos correspondientes a uno o más meses (insertando más filas) y los pospone a un día predeterminado.

**mese escluso**: Mes por el cual se desean posponer los vencimientos.

**giorno**: Día al que se desean llevar los vencimientos pospuestos.

**mese**: Mes al que se desean llevar los vencimientos pospuestos.

*Ejemplo*: completando como en la imagen, todos los vencimientos del mes de agosto se pospondrán al 5 de septiembre.

Si también se inserta una fila de Diciembre - 7 - Enero, los vencimientos del mes de diciembre se pospondrían al día 7 de enero.

### Sección inferior

La tipología de cálculo de la partida permite definir si la base de cálculo de las partidas es solo el imponible del documento (por ejemplo, para proveedores intracomunitarios o gestionados contablemente en régimen de reverse charge, donde, por lo tanto, el IVA integrado en el documento no se gestiona a nivel de vencimiento) o imponible + IVA (que es la lógica predeterminada aunque en este campo no se indique nada).

**utilizzo a partite aperte**: el flag se propone por defecto y es obligatorio para poder gestionar automáticamente las partidas abiertas.

En los parámetros de configuración de las causales contables, es posible definir un control para garantizar que haya correspondencia entre el saldo contable y el saldo por partida;

**tipo calcolo**: combo box que permite elegir entre los dos métodos alternativos: imponible + IVA o solo imponible. El modo solo imponible es recomendado, por ejemplo, para proveedores intracomunitarios y en régimen de "reverse charge" o para clientes sujetos a la casuística de IVA de "split payment".

**raggruppa partite**: actualmente no gestionado; permite agrupar las partidas que en la misma registración tengan la misma fecha de vencimiento (por ejemplo, en casos de meses de exclusión);

**Agrup. vencimientos en efectos (Raggr. scadenze in effetti)**: permite agrupar múltiples partidas/vencimientos en un único efecto del módulo de cartera de efectos (se agruparán en caso de igual fecha de vencimiento y mismo banco de apoyo);

**Agrup. notas de crédito en efectos (Raggr. note cred. in effetti)**: permite anular, en la creación de efectos, también las notas de crédito que tienen el tipo de pago para gestionar en los efectos. Si el flag no está activo, las partidas abiertas relacionadas con las notas de crédito no se mostrarán en el formulario de búsqueda de partidas para el procedimiento [creación de efectos desde las partidas](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values).

El parámetro anterior debe emparejarse con el flag **raggruppa note credito per data scadenza** presente en los [Parámetros de cartera de efectos](/docs/configurations/parameters/treasury/bills-portfolio-parameters).

Si se activa el flag de agrupación por fecha de vencimiento, la partida (o partidas) correspondiente a la nota de crédito con tipo de pago coherente con la emisión de efectos será agrupada (anulando las partidas activas) solo si tiene una fecha de vencimiento igual a las partidas seleccionadas para la emisión del efecto. De lo contrario, si el flag está desactivado, la nota de crédito será agrupada, anulando la partida con vencimiento a la primera fecha útil (a condición, por supuesto, de que el flag *Agrup. notas de crédito en efectos (Raggr. note cred. in effetti)* en el registro esté activo).

**controllo esposizione**: con este flag se hará visible este sujeto en las máscaras generales del [estado de exposición de clientes (esposizione clienti)](/docs/treasury/customer-risk/procedures/customer-statement).

**Días de retraso (Giorni ritardo)** es un dato estadístico calculado en el módulo **riesgo de cliente** (procedimiento [**controllo rimesse**](/docs/treasury/customer-risk/procedures/remittances-check) y utilizado en proyecciones de flujo de caja; representa una **media de días de retraso en los pagos por parte de los clientes** no solo sobre las partidas vencidas actuales, sino también sobre el historial. El cálculo prevé un promedio ponderado sobre el importe de la partida. De hecho, el cálculo se basa en la elaboración de los "números acreedores" (como en un extracto de cuenta bancaria escalonado). Dentro del formulario **control de remesas** (en la barra de ribbon en la parte superior) está presente el comando **Actualizar días de retraso (Aggiorna gg ritardo)** que inserta el resultado del cálculo en el campo Días de retraso en el registro del cliente.

**Importe de crédito concedido (Imp. fido concesso)**: es el importe del crédito que se concede al cliente. Para la correcta gestión de esta funcionalidad, también debe gestionarse el flag **fido** presente en las tablas relativas a los documentos del ciclo de ventas (Tipos de factura; Tipos de Bolla; Tipos de Pedido del cliente) que incluye o no el tipo de documento en cuestión en el control del sobrecosto respecto al crédito.

**Tipo de control de crédito (Tipo contr. fido)**: se puede definir si el cliente está sujeto a un solo ‘**monitor fido**' (es decir, se devolverá un solo mensaje de alerta sobre el aumento del crédito) o un **bloqueo de documento y monitor de crédito** en el cual el documento que va a exceder el crédito será bloqueado y deberá ser autorizado dentro del módulo Riesgo de cliente (procedimiento [Lock manager](/docs/treasury/customer-risk/procedures/lock-manager), o en una base de datos multicompañía la posibilidad de establecer un **monitor de grupo** o **bloqueo de grupo**, evaluando así la situación general del sujeto en relación con todas las empresas gestionadas en la base de datos y sumando el total de documentos (se recomienda establecer el importe de crédito igual y activo en todas las empresas). **Bloqueo /monitor de grupo de cliente** verifica por grupo empresarial y por lo tanto verifica el campo subcuenta del grupo principal (lee el crédito del grupo principal). Siempre totaliza los valores de todas las empresas del grupo en el crédito del grupo principal. Ignora el valor del crédito escrito en los registros de las filiales.

En el módulo Riesgo de cliente hay un procedimiento de [gestión de créditos (gestione fidi)](/docs/treasury/customer-risk/credit-management) que permite visualizar el listado de las configuraciones de crédito establecidas en todos los códigos de cliente, sin necesidad de ingresar en el registro individual;

**Crédito asegurado (Fido assicurato)**: es un simple campo indicativo del importe cubierto por aseguradora, no influyente en los cálculos de riesgo;

**note fido**: anotaciones comerciales sobre el crédito concedido.

**data revisione credito**: campo indicativo de la fecha de revisión del acuerdo comercial con el cliente en relación con el crédito concedido.

**tipo sollecito**: tipo de recordatorio de pago hacia el cliente a generar en el procedimiento de creación automática de recordatorios.

El combo box está vinculado a la tabla Tipos de recordatorios (Inicio > Tablas > Administrativa); el registro del cliente en uso estará asociado a uno de los posibles tipos de recordatorio.

*Ejemplo*: se pueden crear un tipo de recordatorio estándar y un tipo de recordatorio particular, por ejemplo, para clientes históricos o especialmente importantes, con un texto diferente (quizás más "suave").

**data accordo**: es la fecha del acuerdo sobre el cálculo de los intereses de mora por los retrasos en los pagos;

**Tipo de tasa de interés (Tipo tasso di interesse)**: es el tipo de tasa moratoria a aplicar al sujeto en base al acuerdo acordado;

El combo box está vinculado a la tabla [Tipos de Tasa](/docs/configurations/tables/finance/rate-types) en Configuración > Tablas > Administrativa).

**Spread**: aumento de la tasa en comparación con la estándar de su tipología.

**livello autorizzativo**: se remite a la [**tabla conectada**](/docs/configurations/tables/finance/authorization-levels/) al combo box.