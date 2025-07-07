---
title: Cambio de divisas
sidebar_position: 4
---

La tabla de Cambio de divisas, común a todas las empresas de la misma base de datos, permite establecer día a día los tipos de cambio oficiales que se utilizarán en los diversos procedimientos del sistema de gestión: en particular, se destaca que el programa recuperará de esta tabla el último tipo de cambio válido retrocediendo desde la fecha del documento/registro que se está ingresando.

:::note Nota
La tabla puede ser completada manualmente ingresando directamente la tasa de cambio relativa a la moneda y al día, que también se establecen manualmente, o se puede realizar una actualización automática descargando las tasas de cambio mediante el botón correspondiente ubicado en la barra de herramientas ***Descargar tasas de cambio***.

Al presionar el botón, aparecerá una **ventana emergente** que solicita el ingreso de las **fechas De / A** dentro de las cuales buscar las tasas de cambio y el **indicador de Inserción automática** que va directamente a poblar la tabla (y se recomienda mantenerlo activado).

**ATENCIÓN:** solo se descargan las tasas de cambio relativas a las monedas que tienen el indicador Descargar cambios en la tabla [**Moneda**](/docs/configurations/tables/general-settings/currencies).
:::


##### Campos específicos 

**Intercambio**: normalmente se debe ingresar la moneda de la empresa (euro).

**Descripción**: descripción de la moneda.

**En el**: moneda de referencia.

**Descripción**: descripción de la moneda de referencia.

**Fecha de la moneda**: fecha de referencia del cambio.

**Valor de intercambio**: se refiere al cambio 'incierto por cierto', que es efectivamente utilizado por el programa en los cálculos de los contravalores. En el caso del euro, este es el valor inverso al tipo de cambio oficial del día.

**Valor directo**: se refiere al cambio 'cierto por incierto'. En el caso del euro, este es el valor del tipo de cambio oficial del día.