---
title: Datos Contables 
sidebar_position: 1
---
En esta pestaña se definen las **informaciones específicas** relativas al registro en uso.

A continuación se ilustra el procedimiento para asociar un registro genérico, definido como *Contacto*, con una subcuenta contable. Procedimiento que activa en ese momento todos los detalles del registro.

Los registros de detalle se dividen en tres categorías: **Clientes/Proveedores**, **Bancos**, **Agentes**.

Cada categoría tiene campos de detalle diferentes según sus diferentes propósitos, por lo tanto, se aborda en detalle (enlace a las secciones específicas)


### [Registro de clientes/proveedores](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)

### [Registro de bancos](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry)

### [Registro de agentes](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail)


---



## Subcuentas asignadas

En la cuadrícula se visualizan las **Subcuentas** asignadas al sujeto que determinan luego la visualización de una serie de *pestañas específicas* donde se ingresarán las informaciones relacionadas con las diferentes áreas del sistema.

### Asociación de subcuentas

:::tip[Procedimiento]
**Para asignar una subcuenta contable al registro** en uso, basta con posicionarse en la primera columna **Tipo de cuenta** y seleccionar un tipo *compatible* con la gestión de registros (aunque el menú desplegable muestre todos los tipos de cuenta).
:::


:::note Nota
Los tipos compatibles son: *Clientes/Proveedores*, *Agentes* y *Bancos*. Los *Perceptoras* se clasifican como proveedores y dentro de los datos de detalle se activan configuraciones específicas para la gestión de las retenciones.
:::

Una vez seleccionado el tipo de cuenta, al presionar la tecla tab para moverse a los siguientes campos, notaremos que **Fluentis** asigna automáticamente una cuenta y una subcuenta. Al guardar, también se cargarán las pestañas con las informaciones de detalle.

La asociación entre el tipo de cuenta (por ejemplo, clientes, o, en caso de una configuración diferente del plan de cuentas, clientes Italia) y la cuenta contable del plan de cuentas se define en los [**Parámetros de contabilidad**](/docs/configurations/parameters/finance/accounting-parameters). La asociación ocurre cuando el año de los *Parámetros contables* coincide con el año de creación del contacto.

La subcuenta se atribuye automáticamente de manera progresiva.

:::note Nota
Prestar atención al hecho de que el numerador progresivo NO recupera eventuales huecos en la progresión (siempre es posible imponer manualmente una determinada subcuenta siempre que no haya sido utilizada).

Se recomienda, por lo tanto, no interferir manualmente con la numeración, dejando por ejemplo huecos, para evitar que, una vez alcanzado el límite de numeración determinado también por la configuración del plan de cuentas (por ejemplo, código de subcuenta de dos cifras, tres cifras, etc.) ya no sea posible agregar subcuentas sin modificar la estructura del plan de cuentas o intervenir continuamente de manera manual.

Es preferible dejar a **Fluentis** la gestión de la asignación de subcuentas. Además, se debe evitar intervenir en la numeración de las subcuentas referidas a los registros directamente desde el plan de cuentas.
:::

:::danger[Atención]
Si una vez seleccionado el *Tipo de Cuenta* de la primera columna de la cuadrícula *Subcuentas Asignadas* no se completa automáticamente un código de Cuenta y subcuenta (y se está seguro de haber llamado un Tipo de cuenta compatible con los registros), esto indica que probablemente no se han inicializado (o no se han completado correctamente) los [**Parámetros de contabilidad**](/docs/configurations/parameters/finance/accounting-parameters) en la sección que define la correcta asociación de los tipos de cuentas relacionadas con los registros con el plan de cuentas.
La configuración errónea podría residir también, más arriba, en la [**Tabla Tipos de Cuenta**](/docs/configurations/tables/finance/account-types)
:::

:::tip
Para cada registro es posible **asignar simultáneamente diferentes subcuentas**. Los casos más comunes en la práctica son aquellos de un proveedor que también es cliente o un cliente que también es agente. En estos casos, según la línea seleccionada, también cambian las pestañas de detalle.

Esta posible asociación múltiple optimiza y racionaliza la gestión de los datos generales del *Contacto*.
:::


---

## VIDEO TUTORIALES SOBRE REGISTROS

:::important Ver También
[**VIDEO TUTORIALES SOBRE REGISTROS**](/docs/video/finance/intro)
:::