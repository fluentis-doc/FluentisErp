---
title: Gestión de compensaciones
sidebar_position: 1
ai_generated: true
---

### **ENLACES A LAS PESTAÑAS DE LA PARTE INFERIOR DEL FORMULARIO**:<!-- LINK AI TAB DELLA PARTE INFERIORE DELLA FORM -->

** [Total retención](/docs/finance-area/professional-men/compensations-management/total-withholding-tax) **<!-- [Totale ritenuta](/docs/finance-area/professional-men/compensations-management/total-withholding-tax) -->

** [Lista de pagos](/docs/finance-area/professional-men/compensations-management/total-withholding-tax) **<!-- [Lista pagamenti](/docs/finance-area/professional-men/compensations-management/total-withholding-tax) -->

** [Pagos de retenciones](/docs/finance-area/professional-men/compensations-management/withholding-tax-paying-in) **<!-- [Versamenti ritenute](/docs/finance-area/professional-men/compensations-management/withholding-tax-paying-in) -->

** [Resúmenes de IVA](/docs/finance-area/professional-men/compensations-management/vat-summaries) **<!-- [Riepiloghi IVA](/docs/finance-area/professional-men/compensations-management/vat-summaries) -->

** [Centros de costo / beneficio](/docs/finance-area/professional-men/compensations-management/cost-profit-centres) **<!-- [Centri di costo / profitto](/docs/finance-area/professional-men/compensations-management/cost-profit-centres) -->

** [INPS](/docs/finance-area/professional-men/compensations-management/national-insurance) **

 

 

Desde esta pantalla se procede a la carga/modificación del documento recibido del profesional o del agente, **ya sea en el caso de una nota provisional o de una factura definitiva: la diferencia entre ambas se refiere únicamente a la inclusión inmediata o posterior (entrando en la modificación de una provisional ya registrada) de los campos relativos al número y fecha del documento definitivo.**<!-- sia nel caso di notula provvisoria che di fattura definitiva: la differenza tra i due, infatti, riguarderà unicamente l'inserimento immediato o successivo (entrando quindi in modifica di un provvisoria già rilevato) dei campi relativi al numero e data documento definitivo. -->

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image01.png)

 

### **CAMPOS DE CABECERA**<!-- CAMPI DI TESTATA -->

**Perceptor<!-- Percipiente -->**: corresponde al ingreso del subcuenta<!-- sottoconto --> titular de la compensación: sólo se pueden ingresar en este campo subcuentas<!-- sottoconti --> de tipo cuenta agente o proveedores que tengan el flag de retención de cuenta activado en el maestro.

Las siguientes banderas de estado (al abrir el expander) son:

**contabilizado<!-- contabilizzato -->**: gestionado automáticamente por la aplicación en el momento de la contabilización de compensaciones<!-- compensi -->. Una vez marcado este flag, la compensación<!-- compenso --> ya no se podrá modificar.  
**retención pagada<!-- ritenuta versata -->**: será aplicada a la compensación<!-- compenso --> manualmente o bien a través del procedimiento **[Pagos de retención](/docs/finance-area/professional-men/search-compensations/withholding-tax-paying-in)<!-- Versamenti ritenuta -->** ejecutable desde la pantalla de búsqueda de compensaciones<!-- compensi -->.

**certificado<!-- certificato -->**: se establece automáticamente por el programa al momento de la impresión definitiva de las certificaciones de retenciones<!-- ritenute -->.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image02.png)

 

Vinculado al subcuenta<!-- sottoconto --> agente o proveedor se puede predefinir el **tipo de retención<!-- tipo di ritenuta -->** a proponer en el momento de cargar la compensación<!-- compenso --> (la vinculación se define en el maestro del agente o proveedor).

El campo **notas<!-- note -->** permite anotar un texto de referencia de la compensación<!-- compenso -->: se trata de una nota que posteriormente se incluirá en las notas de detalle de todos los movimientos<!-- movimenti --> contables asociados a esta compensación<!-- compenso -->.

**Descripción movimiento<!-- Descrizione movimento -->**: se usará en la contabilización de compensaciones<!-- contabilizzazione compensi --> para el campo homónimo de la contabilización<!-- registrazione contabile -->.

 

En la parte derecha:

**Código de pago<!-- Codice pagamento -->**: este campo, propuesto automáticamente (recuperando el tipo de retención<!-- tipo ritenuta --> aplicable a la compensación<!-- compenso -->) si se completó el campo homónimo en el formulario [Gestión tipo de retención](/docs/configurations/tables/finance/withholding-tax-types), se refiere al código relativo a la causale<!-- causale --> de pago que hay que indicar en la Certificación única de los perceptores (ver instrucciones ministeriales).

Ejemplo: código A = prestaciones de trabajo autónomo ejercidas de forma habitual; Q = comisiones pagadas a agente o representante de comercio monomandatario; R = comisiones pagadas a agente o representante de comercio plurimandatario; U = comisiones pagadas a intermediario comercial...

 

**Número y año de referencia de la compensación<!-- Numero e anno di riferimento del compenso -->**: es una numeración automática interna del programa que debe ser única para la empresa.

**Fecha del documento<!-- Data documento -->**: se propone como la fecha actual pero puede configurarse como la fecha de la nota provisional recibida.

**Fecha y número del documento definitivo<!-- Data e numero documento definitivo -->**: corresponden a los datos de la factura definitiva: son campos obligatorios para proceder a la contabilización de compensaciones<!-- contabilizzazione compensi -->, aunque la causale<!-- causale --> de referencia no sea una causale<!-- causale --> de IVA. Estos dos campos serán los únicos modificables en caso de que el pago ya haya sido registrado en contabilidad<!-- contabilità -->.

**Fecha de recepción<!-- Data ricevimento -->**: campo para anotar la fecha de recepción de la factura definitiva (no obligatorio para la contabilización<!-- contabilizzazione -->).

 

**Proyecto<!-- Progetto (ex commessa) -->** (antes llamado orden de venta<!-- commessa -->): sirve para vincular la compensación<!-- compenso --> a un proyecto (orden de venta<!-- commessa di vendita -->): podría ser el caso de un peritaje en una obra gestionada por orden de venta<!-- commessa -->. Si la **[causale contable](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)<!-- causale contabile -->** utilizada en la contabilización de la compensación<!-- contabilizzazione del compenso --> tiene el flag proyectos (antes órdenes de venta<!-- commesse -->) activo, entonces los costes ingresados en esta compensación<!-- compenso --> se asignarán al proyecto<!-- progetto (commessa) --> indicado en este campo.

**Cambio de moneda/Fecha de moneda/Divisa<!-- Cambio valuta/Data valuta/Divisa -->**: vinculados a la gestión de la moneda<!-- divisa --> y los correspondientes datos del tipo de cambio extraídos de la tabla de cambios (la moneda<!-- divisa --> se configura desde el maestro agente/proveedor).

 

### LÍNEAS DE DETALLE<!-- RIGHE DI DETTAGLIO -->

 

**Tipo de línea<!-- Tipo riga -->**: dato fundamental que permite gestionar automáticamente la aplicación de la retención<!-- ritenuta d'acconto --> sobre la parte del coste del servicio y su desactivación sobre la parte relativa a la caja de previsión social del perceptor<!-- percipiente -->. Puede ser de tres tipos:



**Costo del servicio<!-- Costo del servizio -->**: para ingresar la parte sujeta a retención<!-- ritenuta --> para la cual Fluentis propondrá el porcentaje de base imponible y la tasa de retención leídos desde el tipo de retención<!-- tipo ritenuta -->, el subcuenta<!-- sottoconto --> de coste se extraerá desde el coste asignado del agente/proveedor, el coste en moneda<!-- valuta --> y en euros, la tasa de IVA a aplicar (también propuesta con base en el maestro), el porcentaje de caja de previsión a calcular en la línea (propuesto por el tipo de retención<!-- tipo ritenuta -->) y las fechas de competencia económica de referencia. Estas se gestionan, para el usuario conectado, según los parámetros de ingreso (que se pueden configurar con el botón presente en la ribbon bar): las líneas siguientes a la primera propondrán automáticamente el rango configurado en la línea anterior.

**Caja de previsión social<!-- Cassa previdenza -->**: Fluentis propondrá base imponible de retención 0% y el valor imponible de IVA calculado automáticamente según el porcentaje presente en la línea de coste del servicio previamente cargada.

**Otros<!-- Altro -->**: se gestiona como importe sujeto a retención<!-- ritenuta --> (pero el usuario puede forzar esta configuración): normalmente se trata de los gastos reembolsados incluidos en la compensación<!-- compenso -->, que pueden o no estar sujetos a retención y normalmente no están sujetos a IVA.

Al guardar la compensación<!-- compenso --> se ejecutarán mensajes de control en caso de que el valor del importe no corresponda al total a pagar, así como ante la falta de balanceo de los datos a centro de costo/beneficio<!-- centro di costo/profitto -->.

Una vez que se haya realizado la contabilización de la compensación<!-- contabilizzazione compensi -->, no será permitido modificar los datos de la compensación<!-- compenso -->: en caso de que se haya hecho la contabilización de pagos<!-- contab. pagamenti --> o Enasarco, se podrán modificar los datos relativos al número/fecha del documento definitivo, la descripción del movimiento<!-- movimento --> y el subcuenta<!-- sottoconto --> incluido en la cuadrícula de detalles.

 En el caso de que la compensación<!-- compenso --> se guarde y tenga fecha y número de documento definitivo, será posible proceder a la contabilización<!-- contabilizzazione --> mediante el botón **Contabilizar y cerrar<!-- Contabilizza e chiudi -->** en la ribbon bar: se abrirá una pantalla en la que las fechas propuestas serán las últimas válidas para el registro IVA asociado a la causale<!-- causale --> vinculada al tipo de retención<!-- tipo ritenuta --> utilizado.

Hay disponibles algunos reportes que pueden ejecutarse con los comandos situados en la ribbon bar.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image03.png)

*Botones específicos*:  
> **Parámetros de ingreso<!-- Parametri inserimento -->**: en los parámetros de usuario es posible definir si la nueva compensación<!-- compenso --> debe proponer el mismo subcuenta<!-- sottoconto --> actual, el mismo tipo de retención<!-- tipo ritenuta -->, cómo gestionar la nueva fecha del documento y finalmente cómo gestionar el rango de fechas de competencia económica (fin de ejercicio – es decir, la fecha final será igual a la del fin de ejercicio, diaria – la fecha final será igual a la inicial, ninguna fecha para tipo de cuenta de servicios – o sea, se requerirá obligatoriamente el ingreso de ambas fechas si el tipo de subcuenta<!-- sottoconto --> ingresado está configurado como 'Servicio');  
> **Contabilizar y cerrar<!-- Contabilizza e chiudi -->**: activo cuando se han ingresado fecha y número de documento definitivo, permite ejecutar la contabilización<!-- contabilizzazione --> de la compensación<!-- compenso -->;  
> **Nuevo detalle<!-- Nuovo dettaglio -->**: activa el cursor para ingresar una nueva línea de detalle de la compensación<!-- compenso -->;  
> **Eliminar detalle<!-- Cancella dettaglio -->**: elimina las líneas de detalle seleccionadas dentro de la compensación<!-- compenso -->;  
> **Calcular valores<!-- Calcola valori -->**: ejecuta un recálculo de los valores relativos a las retenciones<!-- ritenute --> según los datos ingresados en las líneas de detalle.  

---
### **VIDEO TUTORIALES**<!-- VIDEO TUTORIALS -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7abmzqf6Bk" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sdFGMDVIFc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVXhUdwqBS4" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>