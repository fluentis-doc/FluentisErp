---
title: Gestión de compensaciones (Gestione compensi)
sidebar_position: 1
---

### **ENLACE A LAS PESTAÑAS EN LA PARTE INFERIOR DEL FORMULARIO**:

**[Total de retenciones (Totale ritenuta)](/docs/finance-area/professional-men/compensations-management/total-withholding-tax)**

**[Lista de pagos (Lista pagamenti)](/docs/finance-area/professional-men/compensations-management/total-withholding-tax)**

**[Pagos de retenciones (Versamenti ritenute)](/docs/finance-area/professional-men/compensations-management/withholding-tax-paying-in)**

**[Resúmenes de IVA (Riepiloghi IVA)](/docs/finance-area/professional-men/compensations-management/vat-summaries)**

**[Centros de costos / beneficios (Centri di costo / profitto)](/docs/finance-area/professional-men/compensations-management/cost-profit-centres)**

**[INPS](/docs/finance-area/professional-men/compensations-management/national-insurance)**

 

 

Desde esta máscara se procede a la carga/modificación del documento recibido del profesional o del agente, **tanto en el caso de nota provisional como de factura definitiva: la diferencia entre los dos, de hecho, afectará únicamente a la inserción inmediata o posterior (entrando así en modificación de una provisional ya contabilizada) de los campos relativos al número y la fecha del documento definitivo.**

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image01.png)

 

### **CAMPOS DE CABECERA**:

**percipiente**: se refiere a la inserción del subcuenta titular de la compensación: en este campo solo se pueden insertar subcuentas con tipo de cuenta agente o proveedores que tengan el indicador de retenciones establecido en el registro.

Los indicadores de estado siguientes (abrir el expander) son: 

**contabilizzato**: gestionado automáticamente por la aplicación al momento de la contabilización de las compensaciones. Una vez activado este indicador, la compensación no será más modificable. **ritenuta versata**: se aplicará a la compensación manualmente o a través del procedimiento **[Pagos de retención (Versamenti ritenuta)](/docs/finance-area/professional-men/search-compensations/withholding-tax-paying-in)** ejecutable desde la máscara de búsqueda de compensaciones. 

**certificato**: se activa automáticamente por el programa al momento de la impresión definitiva de las certificaciones de retenciones.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image02.png)

 

Conectado al subcuenta de agente o proveedor, se puede predefinir el **tipo de retención** a proponer en el momento de la carga de la compensación (la conexión se define en el registro del agente o del proveedor).

El campo **note** permite anotar un texto de referencia de la compensación: se trata de una nota que luego se reportará en las notas de detalle de todos los movimientos contables relacionados con esta compensación.

**descrizione movimento**: se utilizará en la contabilización de compensaciones para el homónimo campo de la registración contable.

 

En la parte derecha: 

**codice pagamento**: este campo, propuesto automáticamente (al recuperar la compensación el tipo de retención aplicable) si se ha completado el campo homónimo en el formulario **[Gestión de tipo de retención (Gestione tipo ritenuta)](/docs/configurations/tables/finance/withholding-tax-types)**, se refiere al código relativo a la causa de pago que se debe indicar en la Certificación única de los perceptores (ver instrucciones ministeriales).

Ejemplo: código A = prestaciones de trabajo autónomo ejercidas habitualmente; Q = comisiones pagadas a agente o representante de comercio monomandatario; R = comisiones pagadas a agente o representante de comercio plurimandatario; U = comisiones pagadas a procurador de negocios......

 

**Número y año de referencia de la compensación (Numero e anno di riferimento del compenso)**: se trata de una numeración automática interna del programa que debe ser única para la empresa. 

**data documento**: se propone como la fecha actual pero se puede establecer como la fecha de la nota provisional recibida.

**Fecha y número del documento definitivo (Data e numero documento definitivo)**: se refieren a los detalles de la factura definitiva: se trata de campos obligatorios para proceder a la contabilización de las compensaciones, aunque la causa de referencia no deba ser una causa de IVA. Estos dos campos serán los únicos modificables en caso de que el pago ya haya sido registrado en contabilidad.

**data ricevimento**: campo para registrar la fecha de recepción de la factura definitiva (no obligatorio para la contabilización).

 

**Proyecto (ex obra)**: sirve para conectar la compensación a un proyecto (obra de venta): podría ser el caso de un peritaje en un sitio gestionado por obra. Si la **[causa contable (causale contabile)](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** utilizada en la contabilización de la compensación tiene el indicador de proyectos (ex obras) activo, entonces los costos insertados en esta compensación se asignarán al proyecto (obra) ingresado en este campo.

**Cambio de divisa/Fecha de divisa/Moneda**: conectados a la gestión de la divisa y los datos de cambio relacionados, recuperados de la tabla de cambios (la divisa se establece en el registro del agente/proveedor).

 

### FILAS DE DETALLE

 

**tipo riga**: dato fundamental que permite gestionar automáticamente la aplicación de la retención en la parte del costo del servicio y su exención en la parte relacionada con la caja previsional del perceptor. Puede ser de tres tipos:


- **costo del servizio**: para ingresar la parte sujeta a retención por la cual Fluentis propondrá el porcentaje imponible y la tasa de retención leída del tipo de retención, el subcuenta de costo será reportado desde el costo contrapartida del agente/proveedor, el costo en divisa y en euros, la tasa de IVA a aplicar (propuesta también esta según el registro), la porcentaje de caja previsional a calcular en la fila (propuesta por el tipo de retención) y las fechas de competencia económica de referencia. Estas son gestionadas, para el usuario conectado, de acuerdo con los parámetros de inserción (que se pueden establecer con el botón presente en la barra de herramientas): las filas siguientes a la primera propondrán automáticamente el rango establecido en la fila anterior.

- **cassa previdenza**: Fluentis propondrá Imponible retención 0% y el valor imponible de IVA calculado automáticamente según el porcentaje presente en la fila del costo del servicio previamente cargada.

- **altro**: se gestiona como importe sujeto a retención (pero el usuario puede forzar esta configuración): se trata normalmente de reembolsos de gastos por lista inseridos en la compensación, que pueden estar o no sujetos a retención y normalmente no son imponibles de IVA.

Al guardar la compensación, se ejecutarán mensajes de control en caso de que el valor de la partida no sea correspondiente con el total a pagar, así como por el desbalance de los datos en centro de costo/beneficio.

Una vez que se ha ejecutado la contabilización de compensaciones, no se permitirá más modificar los datos de la compensación: en caso de que se haya ejecutado la contabilización de pagos o Enasarco, sin embargo, serán modificables las referencias al número / fecha del documento definitivo, la descripción del movimiento y el subcuenta ingresado en la cuadrícula de detalles.

En caso de que la compensación esté guardada y tenga fecha y número del documento definitivo, será posible proceder a la contabilización a través del botón **contabilizza e chiudi** en la barra de herramientas: se abrirá una máscara en la que las fechas propuestas serán las últimas válidas para el registro de IVA asociadas a la causa conectada al tipo de retención utilizado.

Están disponibles algunas impresiones que se pueden ejecutar con los comandos ubicados en la barra de herramientas.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image03.png)


*Botones específicos*:  
> **parametri inserimento**: en los parámetros de usuario es posible definir si la nueva compensación debe proponer el mismo subcuenta del actual, el mismo tipo de retención, cómo gestionar la nueva fecha del documento y, por último, cómo gestionar el rango de fechas de competencia económica (fin de ejercicio – es decir, la fecha final será igual a la del fin de ejercicio, diaria – es decir, la fecha final igual a la fecha inicial, ninguna fecha para tipo de cuenta servicio – es decir, requerirá obligatoriamente la inserción de ambas fechas si el tipo de subcuenta ingresado está configurado como 'Servicio');  
> **contabilizza e chiudi**: activo cuando se han ingresado fecha y número del documento definitivo, permite realizar la contabilización de la compensación;  
> **nuovo dettaglio**: activa el cursor en la inserción de una nueva fila de detalle de la compensación;  
> **cancella dettaglio**: elimina las filas de detalle seleccionadas en la compensación;  
> **calcola valori**: realiza un recálculo de los valores relativos a las retenciones según los datos ingresados en las filas de detalle.  

---
### **VIDEOS TUTORIALES**

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7abmzqf6Bk" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sdFGMDVIFc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVXhUdwqBS4" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>