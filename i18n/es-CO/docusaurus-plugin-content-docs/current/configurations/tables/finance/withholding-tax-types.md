---
title: tipi ritenuta
sidebar_position: 34
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación en la página vinculada.
:::

En esta tabla se buscan e ingresan los tipos de retención que se deben asociar a los ingresos percibidos (los agentes de comercio son también percipientes) para la correcta gestión de las contabilizaciones y otros requisitos fiscales relacionados.

#### Campos específicos

**Código de retención (Codice ritenuta)**: código alfanumérico de 5 caracteres que identifica la retención; normalmente se invoca el código del tributo ministerial.

**Descripción de la retención (Descrizione ritenuta)**: descripción del código de retención.

**[Código de tributo (Codice tributo)](/docs/configurations/tables/finance/tax-code)**: invoca la tabla de códigos de tributo: esta se precompila al momento de la instalación y contiene la lista completa de códigos de tributo previstos para el modelo F24.

**Causa de contabilidad general (Causale di contabilità generale)**: este campo requiere la configuración obligatoria para registrar el pago en contabilidad: normalmente se trata de una causa IVA, como una compra normal en Italia. También se permite la valorización de causas no IVA para gestionar los casos de retenciones a colaboradores ocasionales que no tienen número de IVA.

**tipi ritenuta fatturazione elettronica**: en este campo es posible ingresar el código específico del tipo de retención válido para la facturación electrónica activa (es decir, cuando la empresa está sujeta a la retención de impuesto aplicada por su cliente/cesionario/contratante). Para la codificación vigente, consulte las especificaciones técnicas actualizadas sobre la facturación electrónica que se pueden descargar del sitio de la Agencia de Ingresos.

**Cuadro en Mod. 770:** es un campo obligatorio: el modelo 770, sin embargo, no se gestiona en el procedimiento.

**Código de pago en mod. 770 (Codice di pag. in mod. 770)**: el código de pago en 770 es un campo no obligatorio y no utilizado.

**tipi partite**: la elección es entre partidas netas y partidas brutas. La distinción se refiere a la creación de plazos netos o brutos de todos los tributos a cargo del percipiente: la configuración estándar prevé partidas netas, con el fin de tener un calendario con el importe efectivo a pagar al profesional, en cuyo caso la causa contable de referencia no debe tener bloqueada la registración de movimientos desbalanceados con las partidas.

**tipo ritenuta**: prevé la opción a título de anticipo o a título de impuesto: la distinción no tiene actualmente ninguna relevancia en la operativa del módulo, pero es relevante a nivel de CU (Certificación única) para valorar los dos campos *Retención anticipo* o *Retención impuesto*.

**codice pagamento**: es el código del pago de la retención. Este dato se utiliza en el procedimiento de elaboración de la CU (certificación única) y para su gestión se aconseja consultar las instrucciones ministeriales correspondientes que se pueden descargar del sitio de la Agencia de Ingresos.

**codice altre somme non soggette a ritenuta**: el campo permite marcar específicamente, para cada tipo de retención, el código (generalmente numérico, como indican las instrucciones ministeriales de la Agencia de Ingresos) relativo a las sumas no sujetas a la retención de anticipo. Si el campo no se completa, al elaborar la CU en el [**módulo correspondiente**](/docs/finance-area/declarations/declarations/withholding-tax-certification), se completará por defecto el *código 21* para las líneas de compensaciones percibidas incluidas en los documentos con el **tipo de línea 4** (*Otro*) que se puede utilizar, por ejemplo, para los gastos anticipados por el percipiente en nombre del cliente y que son repercutidos.

**debiti v/erario**: este subcuenta almacena la subcuenta de deuda a utilizar para registrar la deuda relacionada con la retención de anticipo. Esta subcuenta se utiliza en el procedimiento de contabilización de pagos (con la contabilización de pagos se registra la deuda correspondiente a la retención que debe ser pagada, que es un tributo que sigue la lógica de caja): cuando el pago se refiere a los ingresos percibidos, de hecho, es necesario integrar la registración con los movimientos relativos a la retención y gestionar las tablas del módulo para garantizar la posibilidad de obtener la impresión de las certificaciones de retención.

**categoria agente**: es el tipo de agente a partir del cual se identificarán los porcentajes de contribución al instituto Enasarco. Si se ha configurado la categoría, también será necesario ingresar la subcuenta de deuda hacia la Enasarco. El campo es obligatorio si se incluye la gestión de la Enasarco a cargo de la empresa.

**Contribución Enasarco a cargo de empresa (Cont. Enasarco a carico ditta)**: este indicador activa la configuración de las dos subcuentas siguientes y hace obligatoria la asignación de una categoría de agente y de la subcuenta de deuda para la cuota a cargo del agente. La activación de este indicador activará el registro contable de las contribuciones a la Enasarco con el procedimiento de contabilización homónimo. Se recomienda esta opción para hacer autónoma dicha registración, dado que la contribución a la Enasarco debe registrarse por competencia y no por caja como la retención de anticipo. Dentro de este indicador también se encuentran:

**Deuda Enasarco a cargo del agente (Debito Enasarco a carico agente)**: el campo está dedicado a la configuración de la subcuenta de deuda sobre la cual se registrará el importe a cargo del agente. Esta subcuenta se utilizará en la contabilización de pagos o en la contabilización de Enasarco, dependiendo de si se ha configurado la gestión de Enasarco a cargo de la empresa o no. El campo es obligatorio si se ha configurado el campo siguiente de la categoría de agente.

**costo a carico ditta**: subcuenta que se asignará a la registración contable del costo de Enasarco a cargo de la empresa.

**debito a carico ditta**: subcuenta que se asignará a la registración contable de la deuda de Enasarco a cargo de la empresa.


### Porcentajes

La sección contiene los siguientes campos (clic en la flecha a la derecha de esta sección):

% **ritenuta**: porcentaje de aplicación de la retención.

% **imponibile**: base porcentual de aplicación de la retención.

% **cassa previdenza**: porcentaje de caja de previsión.

% **Reducción forf. compenso (Rid. forf. compenso)**: campo no en uso.

La sección de INPS permite activar una sección de tributos adicional dentro del ingreso percibido, para gestionar las contribuciones de INPS debidas, por ejemplo, por los colaboradores por proyecto y similares.