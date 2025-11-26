---
title: Ventilación de ingresos brutos
sidebar_position: 9
ai_generated: true
---

El procedimiento permite al usuario gestionar los cálculos de la Ventilación IVA<!-- Ventilazione IVA -->. Recibe los datos desde los asientos contables<!-- registrazioni contabili -->.

La configuración básica de la ventilación proviene únicamente de la tabla [Registros IVA<!-- Registri IVA -->](/docs/configurations/tables/finance/vat-books), donde se configuran los registros en los cuales se leerán los movimientos<!-- movimenti --> relacionados con el cálculo de ventilación, que se realizará sobre la base de las operaciones detectadas con el tipo de movimiento<!-- tipo movimento --> 'Destinado a la reventa' y 'Reventa'. Para los registros de ventas a ventilar, como opción se prevé la asignación de un único registro de compras de referencia: si no se indica, se utilizarán todos los movimientos de compra<!-- movimenti d'acquisto --> a ventilar.

Desde esta pantalla es posible visualizar los cálculos ya efectuados mediante el botón **Buscar<!-- Ricerca -->** así como agregar nuevas ventilaciones a través del botón **Insertar nueva ventilación<!-- Inserisci nuova ventilazione -->**.

El procedimiento de ventilación se compone de la siguiente manera:

El cálculo se realiza desde la pantalla insertando un nuevo cálculo: dentro del formulario que se abre es necesario configurar la fecha de referencia del último día del período a calcular introducido en el campo siguiente, el registro de ventas<!-- registro vendite --> a ventilar y luego pulsar el botón de cálculo. De este modo, en la pantalla anterior se insertará el detalle de los datos ventilados, que deberán ser llevados a un reporte personalizado de la liquidación periódica de IVA<!-- liquidazione IVA periodica -->.