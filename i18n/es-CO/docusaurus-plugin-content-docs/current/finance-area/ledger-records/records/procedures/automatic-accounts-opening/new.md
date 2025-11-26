---
title: Nueva
sidebar_position: 2
ai_generated: true
---

El procedimiento de Apertura automática de cuentas<!-- Apertura automatica conti --> se puede utilizar, como alternativa a un asiento de diario<!-- scrittura di prima nota --> a insertar mediante el comando **[Creación de registro contable<!-- Creazione Registrazione contabile -->](/docs/finance-area/ledger-records/records/ledger-record),** **para registrar los saldos de inicio de actividad.**<!-- per rilevare i saldi di inizio attività. -->

**A partir del primer cierre de balance, las siguientes aperturas de cuentas podrán ser gestionadas directamente desde el procedimiento de cierre.**<!-- A partire dalla prima chiusura di bilancio, le successive aperture conti potranno essere gestite direttamente dalla procedura di chiusura. -->

 
:::note[Nota]
Con este procedimiento se registran únicamente los saldos contables de apertura<!-- saldi contabili di apertura -->, no la apertura de los documentos contables<!-- partite contabili --> relacionados.
:::


**Fecha de apertura<!-- Data apertura -->**: es la **fecha de la elaboración<!-- data dell'elaborazione -->**, no tiene ningún vínculo con la fecha de registro<!-- data di registrazione --> de la operación que se indicará en el campo correspondiente al pie de la ventana;

**Número de apertura<!-- Numero apertura -->**: es un número progresivo gestionado automáticamente;

**Descripción**: permite al usuario identificar la operación, así como las anotaciones;

**Cuenta<!-- Conto -->** y **Tipo de cuenta<!-- Tipo conto -->**: son filtros de búsqueda dentro de la lista del plan de cuentas<!-- piano dei conti -->;

**Fecha de registro<!-- Data registrazione -->** y **Fecha de devengo<!-- Data competenza -->**: campos obligatorios a asignar al registro de apertura;

**Número<!-- Numero -->**: se asignará una vez contabilizado el asiento;

**Causal de apertura de cuentas<!-- Causale di apertura conti -->** y **Descripción del movimiento<!-- Descrizione del movimento -->**: para asignar en el libro diario<!-- libro giornale -->.

Una vez configurados estos datos obligatorios será posible guardar la configuración y activar toda la lista de subcuentas contables<!-- sottoconti contabili -->: la siguiente fase será proceder a la memorización subcuenta<!-- sottoconto --> por subcuenta del saldo deudor o acreedor de apertura de cuentas<!-- saldo dare o avere di apertura conti -->, con el eventual importe de apertura en moneda extranjera<!-- importo di apertura in divisa -->.

![](/img/it-it/finance-area/ledger-records/records/automatic-accounts-opening/new/image01.png)
Ejemplo (no realista)

 

**Solo cuando el total deudor y el total acreedor coincidan será posible proceder al registro en contabilidad de la recuperación de saldos (de lo contrario, al presionar el comando de contabilización se visualizará un mensaje de error).**<!-- Solo una volta che il totale dare e il totale avere corrispondono sarà possibile procedere alla rilevazione in contabilità della ripresa saldi (in caso contrario premendo il comando di contabilizzazione sarà visualizzato un messaggio di errore). -->

 

**RECOMENDACIONES OPERATIVAS:**

El usuario puede volver a abrir varias veces la misma elaboración de apertura de cuentas<!-- elaborazione di apertura conti --> para completar todos los datos (la operación podría ser larga y realizarse durante varios días) antes de proceder, o bien se podrían crear diferentes aperturas de cuentas<!-- aperture conti -->, por ejemplo, diferenciando una para el activo, otra para el pasivo, o para clientes/proveedores, etc.

En el formulario no se prevé un procedimiento de **rollback**: simplemente se podrá eliminar la apertura y la aplicación pedirá confirmación para la eliminación del registro contable<!-- registrazione di contabilità --> correspondiente.

En caso de que se realicen modificaciones al detalle de la apertura de cuentas<!-- dettaglio dell'apertura conti --> DESPUÉS de su contabilización, es posible presionar nuevamente el comando Crear registro de apertura<!-- Crea registrazione di apertura --> (en la barra ribbon) para actualizar el asiento contable<!-- scrittura contabile --> anterior. Aparecerá un mensaje de aviso y confirmación de la actualización del asiento.

#### Botones específicos

**Guardar<!-- Salva -->**: Botón para guardar el encabezado de la apertura de cuentas<!-- testata dell'apertura conti -->, habilitable después de haber ingresado la descripción y la causal contable.

**Buscar<!-- Cerca -->**: Botón para buscar en la lista de cuentas<!-- lista dei conti -->, que se quieran ingresar en la apertura, a través de los campos de la subcuenta<!-- sottoconto --> y del tipo de cuenta<!-- tipo conto -->.

**Crear registro de apertura<!-- Crea registrazione apertura -->**: Botón para crear el registro de apertura de cuentas<!-- registrazione di apertura conti -->.

**Abre el registro para la apertura de cuentas<!-- Apre la registrazione per l'apertura conti -->**: Botón para abrir el registro de apertura<!-- registrazione di apertura -->.

**Eliminar detalle<!-- Elimina dettaglio -->**: Elimina el contenido de los campos referidos a la línea seleccionada. ATENCIÓN: las filas respecto al contenido de los campos relativos a la cuenta<!-- conto --> no pueden ser eliminadas; si se dejan en blanco, no serán incluidas en el registro contable de apertura<!-- scrittura contabile di apertura -->.