---
title: ricerca
sidebar_position: 1
---

Este formulario permite buscar los cierres de cuentas previamente calculados y presentes en la base de datos.

**Desde esta posición es posible elaborar un nuevo cierre de cuentas a través del comando [Nuevo (Nuovo)](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing).**

En la zona de encabezado hay algunos campos para el filtro, en particular el **número de versión** representa un número progresivo que identifica el cierre en sí para cada empresa presente en la base de datos. Debe, por lo tanto, ser un número único.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/search/image01.png)

### Cómo ejecutar un cierre de cuentas (Come eseguire una chiusura dei conti)

- Desde esta máscara presione [**nuovo**](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing) para crear un *Nuevo* cierre para el año que se indicará en los parámetros del nuevo cierre (en la máscara que se abre)  
- En el nuevo cierre que estamos creando, ingrese todos los parámetros necesarios (ver el enlace mencionado anteriormente)  
- Calcule los saldos a través del comando *Recuperar valores de subcuentas (Ripresa valori sottoconti)* (presente dentro del nuevo cierre)  
- Contabilice el cierre a través del comando *Crear registro para el cierre de cuentas (Crea registrazione per la chiusura conti)* (presente dentro del nuevo cierre)  

#### Campos específicos (Campi specifici)  

**descrizione**: asignable libremente en el momento de la creación del nuevo cierre;  

**data**: fecha de elaboración del cierre;  

**versione**: número de versión del cierre (atención, debe ser un número único para cada empresa y representa en la práctica un número progresivo de los diversos cierres presentes);  

**contabilizzata**: indica si el cierre está contabilizado (indicador activo) o solo calculado (indicador no activo);  

**note**: campo libremente completable en el momento de la creación del cierre.  

#### Botones específicos (Pulsanti specifici)  
> **ricerca**: permite la búsqueda de un cierre de cuentas realizado anteriormente.  
> **nuovo**: permite crear un nuevo cierre de cuentas.  
> **modifica**: activable después de seleccionar un cierre de cuentas, permite modificar el registro de cierre.  
> **visualizza**: activable después de seleccionar un cierre de cuentas, permite visualizar el registro de cierre.  
> **elimina**: activable después de seleccionar un cierre de cuentas, permite cancelar el registro de cierre.