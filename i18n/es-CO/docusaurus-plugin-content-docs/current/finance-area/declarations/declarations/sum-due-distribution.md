---
title: ventilazione corrispettivi
sidebar_position: 9
---

El procedimiento permite al operador gestionar los cálculos de la Ventilación del IVA. Recibe los datos de los registros contables.

La configuración básica de la ventilación proviene únicamente de la tabla [Registros de IVA (Registri IVA)](/docs/configurations/tables/finance/vat-books), donde se establecen los registros dentro de los cuales se leerán los movimientos relacionados con el cálculo de la ventilación, que se llevará a cabo en función de las operaciones registradas con el tipo de movimiento 'Destinado a la reventa (Destinato alla rivendita)' y 'Reventa (Rivendita)'. Para los registros de ventas a ventilar, se prevé como opción la asignación de un solo registro de compras de referencia: si no se indica, se utilizarán todos los movimientos de compra a ventilar.

Desde esta máscara, es posible visualizar los cálculos ya realizados mediante el botón **ricerca**, así como agregar nuevas ventilaciones a través del botón **inserisci nuova ventilazione**.

El procedimiento de ventilación se compone de la siguiente manera:

El cálculo se realiza desde la máscara al ingresar un nuevo cálculo: en el formulario que se abre, se debe establecer la fecha de referencia del último día del período a calcular ingresado en el campo siguiente, el registro de ventas a ventilar y luego presionar el botón de cálculo. De este modo, en la máscara anterior se insertará el detalle de los datos ventilados que se deberán incluir en un informe personalizable de la liquidación del IVA periódica.