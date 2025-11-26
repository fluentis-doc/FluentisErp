---
title: Registro de movimientos físicos
sidebar_position: 1
ai_generated: true
---

La pantalla de las ***Registro de Movimientos Físicos<!-- Registrazioni Movimenti Fisici -->*** es el punto donde podemos ingresar o visualizar los datos de las magnitudes físicas<!-- grandezze fisiche --> que utilizaremos para los procesos de *Controlling*, para los drivers que se basan en magnitudes físicas<!-- grandezza fisica --> o para el cálculo de tarifas de los centros en base a cantidades<!-- quantità -->.  
Para algunas unidades de medida<!-- unità di misura -->, como por ejemplo los metros cuadrados ocupados por los diferentes centros para distribuir los costos de un inmueble de la empresa, la inserción se realizará manualmente al inicio del año, cargando los datos en la forma o, tal vez, duplicando los valores del año anterior mediante el botón correspondiente; para otros tipos de magnitudes físicas<!-- grandezze fisiche -->, como pueden ser las horas máquina u horas hombre, la tabla podría valorizarse a través del procedimiento de ***Recuperación de datos de producción<!-- Ripresa dati da produzione -->*** que totaliza, periodo a periodo, los datos de las Declaraciones de producción o las horas de actividad en Proyecto; otra posibilidad es la carga desde una hoja de Excel a través del modelo *PhysicalMovingControlling - Movimientos Físicos Controlling* disponible entre las Importaciones on demand de ***Bizlink***.

Los campos disponibles en la cuadrícula superior son los siguientes:

- el [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia del dato

- la [***Unidad de medida***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units)<!-- Unità di misura -->

- la ***Distribución de periodos*** a utilizar, que es un campo obligatorio para las Unidades de medida<!-- Unità di misura --> de *Flujo*. Se trata de indicar a ***FluentisERP*** cómo dividir en los distintos periodos el dato ingresado para un rango de estos

- la ***Fecha*** de registro del movimiento cuantitativo<!-- movimento quantitativo -->

- el ***Año*** de referencia

- el rango ***Periodo desde*** y ***Periodo hasta*** de referencia de las cantidades<!-- quantità --> ingresadas

- el campo ***Estado***, no editable, que indica si la línea ha sido cargada manualmente o qué tipo de origen tiene

En la cuadrícula inferior iremos luego a ingresar los detalles de las cantidades<!-- quantità -->, en particular completando:
- el [***Centro de origen***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) del movimiento<!-- movimento -->

- el ***Proyecto destino***, si son cantidades<!-- quantità --> directas sobre un proyecto

- el [***Centro destino***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), es decir, el centro para el que el *Centro de origen* anterior ha trabajado por estas cantidades<!-- quantità -->

:::tip Ejemplo<!-- Esempio -->
Cuando una persona del departamento técnico, por ejemplo, prepara los detalles técnicos de una cotización para uso del área comercial, tendremos el centro del Departamento Técnico como *Centro de origen* y el centro Comercial como *Centro destino*.
Los [***Cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) con ***Tipo de distribución*** 10-Inversión a producción a tarifa estándar, 11-Inversión directa a tarifa estándar, 12-Inversión a producción a tarifa calculada se refieren a las cantidades<!-- quantità --> de centros de origen y/o destino
:::

- la ***Cantidad*** válida para la línea<!-- Quantità valida per la riga -->

- una posible ***Nota*** libre de línea

- los campos ***Precódigo***, ***Número*** y ***Descripción*** del activo fijo relacionado con la línea ingresada (valorado por ejemplo para los activos utilizados en producción, si se usan amortizaciones por cantidad<!-- quantità -->)

- la ***División*** de referencia de la línea, relevante en empresas con varias Divisiones activas