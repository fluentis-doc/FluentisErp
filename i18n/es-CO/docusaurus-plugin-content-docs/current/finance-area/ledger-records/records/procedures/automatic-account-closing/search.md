---
title: Búsqueda
sidebar_position: 1
ai_generated: true
---

Este formulario permite buscar los cierres de cuentas<!-- chiusure dei conti --> previamente calculados y presentes en la base de datos.

**Desde esta posición es posible generar un nuevo cierre de cuentas<!-- chiusura dei conti --> mediante el comando [Nuevo<!-- Nuovo -->](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing).**

En la zona de encabezado se encuentran algunos campos para el filtro, en particular el **número de versión** representa un número progresivo que identifica el cierre<!-- chiusura --> en sí para cada empresa presente en la base de datos. Por lo tanto, debe ser un número único.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/search/image01.png)

### Cómo ejecutar un cierre de cuentas<!-- Come eseguire una chiusura dei conti -->

- Desde esta ventana, presione [**Nuevo<!-- Nuovo -->**](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing) para crear un *Nuevo* cierre<!-- chiusura --> para el año que se indicará en los parámetros del nuevo cierre<!-- chiusura --> (en la ventana que se abre)
- En el nuevo cierre<!-- chiusura --> que estamos creando, ingrese todos los parámetros necesarios (ver el enlace del punto anterior)
- Calcule los saldos mediante el comando *Recuperar valores de subcuentas<!-- Ripresa valori sottoconti -->* (presente dentro del nuevo cierre<!-- nuova chiusura -->)
- Contabilice el cierre<!-- chiusura --> mediante el comando *Crear registro para el cierre de cuentas<!-- Crea registrazione per la chiusura conti -->* (presente dentro del nuevo cierre<!-- nuova chiusura -->)

#### Campos específicos<!-- Campi specifici -->

**Descripción**: asignable libremente al crear el nuevo cierre<!-- chiusura -->;

**Fecha**: fecha de la elaboración del cierre<!-- chiusura -->;

**Versión**: número de versión del cierre<!-- chiusura --> (atención, debe ser un número único para cada empresa y representa en la práctica un número progresivo de los distintos cierres<!-- chiusure --> presentes);

**Contabilizado**: indica si el cierre<!-- chiusura --> está contabilizado<!-- contabilizzata --> (bandera activa) o solo calculado (bandera inactiva);

**Notas**: campo de libre llenado durante la creación del cierre<!-- chiusura -->.

#### Botones específicos<!-- Pulsanti specifici -->
> **Buscar<!-- Ricerca -->**: permite buscar un cierre de cuentas<!-- chiusura conti --> realizado previamente.  
> **Nuevo<!-- Nuovo -->**: permite crear un nuevo cierre de cuentas<!-- chiusura conti -->.  
> **Modificar<!-- Modifica -->**: se activa después de seleccionar un cierre de cuentas<!-- chiusura conti -->, permite modificar el registro de cierre<!-- registrazione di chiusura -->.  
> **Visualizar<!-- Visualizza -->**: se activa después de seleccionar un cierre de cuentas<!-- chiusura conti -->, permite visualizar el registro de cierre<!-- registrazione di chiusura -->.  
> **Eliminar<!-- Elimina -->**: se activa después de seleccionar un cierre de cuentas<!-- chiusura conti -->, permite eliminar el registro de cierre<!-- registrazione di chiusura -->.