---
title: dati contabili
sidebar_position: 1
---

En esta pestaña se definen las informaciones **específicas** relacionadas con el registro en uso.

A continuación se ilustra el procedimiento de emparejamiento de un registro genérico, definido como *Contacto*, con una subcuenta contable. Procedimiento que activa en ese momento todos los detalles del registro.

Los registros de detalle se dividen en tres categorías: **clienti/fornitori**, **banche**, **agenti**.

Cada categoría tiene campos de detalle diferentes según los diferentes propósitos, por lo tanto, se abordará en detalle (enlace a las secciones específicas).

### [Registro de clientes/proveedores (Anagrafica clienti/fornitori)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)

### [Registro de bancos (Anagrafica banche)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/references)

### [Registro de agentes (Anagrafica agenti)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail)

---

## Subcuentas asignadas (Sottoconti assegnati)

En la cuadrícula se visualizan las **Subcuentas** asignadas al sujeto que determinan la visualización de una serie de *pestañas específicas* donde se ingresarán las informaciones relacionadas con las diferentes áreas del sistema.

### Emparejamiento de subcuentas (Abbinamento sottoconti)
:::tip[Procedimiento (Procedura)]
**Para asignar una subcuenta contable al registro** en uso, basta con ubicarse en la primera columna **tipo conto** y seleccionar un tipo *compatible* con la gestión de registros (aunque el menú desplegable muestra todos los tipos de cuenta).
:::

:::note Nota
Los tipos compatibles son: *Clientes/Proveedores (Clienti/Fornitori)*, *agenti* y *banche*. Los *Perceptores* se clasifican como proveedores y dentro de los datos de detalle se activan configuraciones específicas para la gestión de las retenciones.
:::

Una vez seleccionado el tipo de cuenta, al presionar la tecla tab para desplazarse a los campos siguientes, notaremos que **Fluentis** asigna automáticamente una cuenta y una subcuenta. Al guardar, también se cargarán las pestañas con la información de detalle.

La asociación entre el tipo de cuenta (por ejemplo, clientes, o, en caso de una configuración diferente del plan de cuentas, clientes Italia) y la cuenta contable del plan de cuentas está definida por los [**parametri di contabilità**](/docs/configurations/parameters/finance/accounting-parameters). La asociación ocurre cuando el año de los *Parámetros contables* coincide con el año de creación del contacto.

La subcuenta se atribuye automáticamente de manera progresiva.

:::note Nota
Preste atención al hecho de que el numerador progresivo NO recupera eventuales huecos en la progresión (siempre es posible imponer manualmente una subcuenta determinada siempre que no se haya utilizado aún).

Se recomienda, por lo tanto, no interferir manualmente con la numeración dejando huecos para evitar que, al alcanzar el límite de numeración determinado también por la configuración del plan de cuentas (por ejemplo, código de subcuenta de dos dígitos, tres dígitos, etc.), ya no sea posible agregar subcuentas sin modificar la estructura del plan de cuentas o intervenir continuamente de manera manual.

Es preferible dejar a **Fluentis** la gestión de la asignación de subcuentas. Además, se debe evitar intervenir en la numeración de subcuentas relacionadas con los registros directamente desde el plan de cuentas.
:::

:::danger[Atención (Attenzione)]
Si, una vez seleccionado el *Tipo de Cuenta* de la primera columna de la cuadrícula *sottoconti assegnati*, no se completa automáticamente un código de Cuenta y subcuenta (y se está seguro de haber llamado a un Tipo de cuenta compatible con los registros), esto indica que probablemente no se han inicializado (o no se han completado correctamente) los [**parametri di contabilità**](/docs/configurations/parameters/finance/accounting-parameters) en la sección que define el correcto emparejamiento de los tipos de cuenta relacionados con los registros y el plan de cuentas.
La configuración errónea podría residir, más arriba, en la [**Tabla de Tipos de Cuenta (Tabella Tipi Conto)**](/docs/configurations/tables/finance/account-types).
:::

:::tip
Para cada registro es posible **asignar simultáneamente diferentes subcuentas**. Los casos más frecuentes en la práctica son aquellos de un proveedor que también sea cliente o un cliente que también sea agente. En estos casos, según la línea seleccionada, también cambian las pestañas de detalle.

Este posible emparejamiento múltiple optimiza y racionaliza la gestión de los datos generales del *Contacto*.
:::

---

## VIDEOS TUTORIALS SOBRE REGISTROS

:::important Ver También
[**VIDEOS TUTORIALS SOBRE REGISTROS**](/docs/video/finance/intro)
:::