---
title: banca d'appoggio
sidebar_position: 1
---

En esta tabla se insertan los bancos de apoyo que pueden ser llamados en los registros de Clientes y Proveedores (y Registro de Bancos) para gestionar diversas automatizaciones, como principalmente la inclusión en las impresiones (por ejemplo, coordenadas bancarias de pago en una factura activa) y la canalización de flujos financieros referidos a cuentas por cobrar, etc.

Dentro de esta tabla es posible ingresar tanto los bancos de la empresa como los bancos de la contraparte (cliente o proveedor).

:::tip
Se recomienda utilizar, por ejemplo, una codificación alfabética para los bancos de la empresa y una codificación numérica para los bancos de clientes y proveedores, de manera que se diferencien adecuadamente.

Además, es posible introducir tanto filas completas con código IBAN y/o SWIFT (recomendado para los bancos de la empresa) como filas completas solo con el código ABI y CAB (recomendado para los bancos de contraparte para los cuales el IBAN y SWIFT pueden ser indicados en los campos de la cuadrícula presente en el registro).
:::

Si la fila presente en la tabla banca d'appoggio está completa con IBAN y/o SWIFT, además de ABI y CAB, al llamar a dicha fila mediante la combobox, los datos se mostrarán en la cuadrícula del registro; de lo contrario, solo se mostrarán ABI y CAB, pero siempre será posible agregar los datos faltantes directamente en la cuadrícula.

Esto es recomendable para los bancos de contraparte a fin de evitar codificar en la tabla banca d'appoggio demasiadas filas utilizadas solo para un único cliente o proveedor. Es preferible indicar solo los datos de la sucursal bancaria (ABI y CAB) donde podrían tener la cuenta corriente diferentes clientes o proveedores.

La inserción de un banco también se puede realizar a través de un doble clic en los campos abi/cab **de un registro de Cliente o Proveedor** para abrir la ayuda de búsqueda entre las agencias bancarias nacionales (Ayuda que se basa en una tabla denominada *ABI CAB*), de la cual seleccionar la pertinente. La selección guardará los datos en la tabla presente y en el registro, donde es posible completar de inmediato con los datos de la cuenta corriente, CIN, IBAN, SWIFT.