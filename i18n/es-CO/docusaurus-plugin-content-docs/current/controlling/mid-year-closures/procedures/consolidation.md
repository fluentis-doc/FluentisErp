---
title: consolidamento
sidebar_position: 1
---

El procedimiento permite, ante todo, vincular los cierres interanuales de las diversas empresas presentes en la base de datos, con el fin de crear un **balance consolidado de grupo (bilancio consolidato di gruppo)** que se puede imprimir o valorar en un balance reclasificado, pero también generará un registro de consolidación en el que **se eliminarán los movimientos** económicos **intercompany** y los créditos y deudas intercompañía.

En la cabecera del formulario, es posible filtrar el rango de fechas de los cierres a considerar, pero también establecer, de manera opcional, la empresa matriz de interés: de este modo, en la cuadrícula del formulario se visualizarán las empresas que no han configurado una empresa matriz o aquellas que pertenecen a la matriz seleccionada; para cada empresa, además, se mostrará el último cierre de cuentas creado dentro del rango de filtro establecido (Es posible seleccionar un cierre interanual diferente al último propuesto). La marca ‘Sel.' servirá para identificar sobre cuáles ejecutar la operación de consolidación, mientras que en la columna 'Cambio' es posible establecer un tipo de cambio específico a utilizar para la conversión de los saldos provenientes de empresas con moneda diferente a la de la matriz.

Debajo de la cuadrícula se deben insertar algunos parámetros a utilizar: la descripción a atribuir a la consolidación, un motivo de registro, el usuario de la operación (propuesto ya como el usuario activo) y, finalmente, un indicador de conversión de los códigos de subcuenta a los de la empresa matriz.

Dentro de la tabla de empresas, fila por fila, es posible asociar un registro: de este registro se identificarán las subcuentas de clientes/proveedores del grupo (por ejemplo, en la empresa X se verificará si el registro vinculado a la empresa Y está codificado como cliente y/o proveedor). De los registros a nombre de estas subcuentas que se valorizan en los cierres seleccionados, se ingresarán con signo inverso los costos/ingresos en el nuevo registro; para las mismas subcuentas se verificarán las partidas abiertas en el momento de la consolidación, y se anularán también los saldos de estas.

:::tip Nota
En el plan de cuentas de las empresas que tienen una empresa matriz en la tabla, son visibles los campos para asignar los códigos de cuenta/subcuenta de la matriz.
:::

## Procedimiento

:::important[]
Procedimiento paso a paso de activación y ejecución (supongamos dos empresas)

- En la tabla [**società**](/docs/configurations/tables/general-settings/company) de cada una de las empresas en cuestión, completar el campo ***Registro asociado (Anagrafica associata)*** para vincular un Contacto que identifique la empresa misma en la consolidación, por ejemplo, si la empresa se llama Alfa, en su tabla de empresas vinculamos un contacto (previamente creado) que se llama, por ejemplo, "Alfa Spa".  
- En el plan de cuentas de cada una de las empresas se habrá creado la subcuenta (a través de la gestión **dati contabili** del registro) de tipo cliente o proveedor de la otra empresa del grupo y se habrán registrado intercambios cruzados, por ejemplo, compra por parte de la empresa 1 y venta por parte de la empresa 2 (cada uno desde su perspectiva).  
- Cada una de las empresas lanza un cierre de cuentas interanual para el mismo período.  
- En el procedimiento *consolidamento* seleccionaré los dos cierres de las dos empresas para generar los asientos de ajuste para la consolidación que van a neutralizar costos e ingresos y créditos y deudas recíprocas, agregando en cambio los movimientos hacia el exterior.
:::

## Procedimientos anteriores (Precedenti)

Desde la pestaña de procedimientos anteriores es posible proceder a la cancelación de los procedimientos de consolidación ejecutados.