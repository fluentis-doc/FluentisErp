---
title: nuova
sidebar_position: 2
---

El procedimiento de Apertura automática de cuentas se puede utilizar, como alternativa a una escritura de primer registro a ingresar a través del comando **[Creación de Registro contable](/docs/finance-area/ledger-records/records/ledger-record)**, **para registrar los saldos al inicio de la actividad.**

**A partir del primer cierre de balance, las aperturas de cuentas posteriores podrán manejarse directamente desde el procedimiento de cierre.**

:::note[Nota]
Con este procedimiento se registran únicamente los saldos contables de apertura, no la apertura de las partidas contables relativas.
:::

**Fecha de apertura**: es la **fecha de procesamiento**, no tiene ninguna conexión con la fecha de registro de la operación que se indicará en el campo correspondiente en la parte inferior de la ventana;  

**Número de apertura**: es un número progresivo gestionado automáticamente;  

**Descripción**: permite al usuario identificar la operación, así como las anotaciones;  

**conto** y **tipo conto**: son filtros de búsqueda dentro de la lista del plan de cuentas;  

**data registrazione** y **data competenza**: campos obligatorios que deben asignarse al registro de apertura;  

**Número**: se asignará una vez realizada la contabilización;  

**Causa de apertura de cuentas (Causale di apertura conti)** y **descrizione del movimento**: a asignar para el libro diario.  

Una vez establecidos estos datos obligatorios, será posible guardar la configuración y activar toda la lista de subcuentas contables: la fase siguiente será entonces realizar la memorización subcuenta por subcuenta del saldo deudor o acreedor de apertura de cuentas, con el eventual importe de apertura en moneda.  

![](/img/it-it/finance-area/ledger-records/records/automatic-accounts-opening/new/image01.png)
Ejemplo (no realista) (Esempio (non realistico))

**Solo una vez que el total deudor y el total acreedor corresponden, será posible proceder a la captura en contabilidad de la recuperación de saldos (de lo contrario, al presionar el comando de contabilización aparecerá un mensaje de error).**  

**CONSEJOS OPERATIVOS:**

El usuario puede reabrir varias veces el mismo proceso de apertura de cuentas para completar todos los datos (la operación podría ser larga y realizarse en varios días) antes de proceder, o podrían crearse varias aperturas de cuentas diferentes, tal vez diferenciando una para el activo, otra para el pasivo, o para los clientes/proveedores, etc.  

En la máscara no se prevé un procedimiento de **rollback**: simplemente se puede eliminar la apertura y la aplicación solicitará confirmación de la eliminación del registro contable correspondiente.  

En caso de que se realicen cambios en los detalles de la apertura de cuentas DESPUÉS de su contabilización, es posible volver a presionar el comando Crear registro de apertura (en la barra de cinta) para actualizar la escritura contable anterior. Aparecerá un mensaje de advertencia y confirmación de la actualización de la escritura.  

#### Botones específicos

**salva**: Botón para guardar el encabezado de la apertura de cuentas, activable después de haber ingresado la descripción y la causa contable.  

**cerca**: Botón para buscar en la lista de cuentas que se pretende incluir en la apertura, a través de los campos de subcuenta y tipo de cuenta.  

**crea registrazione apertura**: Botón para crear el registro de apertura de cuentas.  

**apre la registrazione per l'apertura conti**: Botón que abre el registro de apertura.  

**elimina dettaglio**: Elimina el contenido de los campos relacionados con la línea seleccionada. ATENCIÓN: las líneas respecto al contenido de los campos relacionados con la cuenta no pueden eliminarse; si se dejan en blanco, no serán incluidas en la escritura contable de apertura.