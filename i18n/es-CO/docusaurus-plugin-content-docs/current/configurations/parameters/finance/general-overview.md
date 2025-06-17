---
title: Finanzas
sidebar_position: 1
---

Los parámetros del área **Finanzas** se refieren a los módulos de 

[**Contabilidad**](/docs/configurations/parameters/finance/accounting-parameters): **Indispensables** para el uso de cualquier funcionalidad contable, contienen la definición de datos fundamentales como la duración del ejercicio, las cuentas utilizadas para las operaciones contables automatizadas y la conexión entre los registros y el plan de cuentas; por lo tanto, también influyen en el proceso de creación de nuevos registros de clientes y proveedores.

**Hombres profesionales**: Parámetros **no necesarios** y presentes por retrocompatibilidad.

[**Activos Fijos**](/docs/configurations/parameters/finance/fixed-assets-parameters): parámetros que prevén opciones específicas de interés limitado al módulo de activos fijos/control.

[**Importación de nómina**](/docs/configurations/parameters/finance/payroll-import-parameters): Parámetros específicos para la importación de los asientos relacionados con las nóminas de empleados desde otros sistemas de gestión a través del flujo de importación Bizlink.

:::danger[Atención]
Una falta de gestión de estos datos básicos podría impedir el uso de las funcionalidades implicadas.
:::

:::tip[Nota]
Dada la estrecha interconexión con el área de Tesorería, en particular para los diversos procedimientos de contabilización automática del módulo de Cartera activa y Pagos a proveedores, se recomienda revisar y gestionar también los [**Parámetros**](/docs/configurations/parameters/treasury/general-overview) del área de tesorería.
:::

:::important[**Inicio Rápido**]
Los parámetros del área finanzas pueden ser configurados mediante la inicialización de un [**ambiente *FastStart***](/docs/guide/fast-start) diseñado para permitir una configuración rápida y un uso inmediato del sistema.
:::