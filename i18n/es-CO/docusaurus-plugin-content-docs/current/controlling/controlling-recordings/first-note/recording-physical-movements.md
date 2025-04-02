---
title: registrazioni movimenti fisici
sidebar_position: 1
---

La máscara de **registrazioni movimenti fisici*** es el punto donde podemos ingresar o visualizar los datos de las magnitudes físicas que utilizaremos para los análisis de *Controlling*, para los indicadores que se basan en magnitudes físicas en lugar de en el cálculo de tarifas de los centros por cantidad. 
Para algunas unidades de medida, como por ejemplo los metros cuadrados ocupados por los diversos centros para repartir los costos de un inmueble empresarial, la inserción se realizará manualmente al inicio del año, cargando los datos en el formulario o quizás duplicando los valores del año anterior a través del botón correspondiente; para otros tipos de magnitudes físicas, como podrían ser las horas de máquina o horas hombre, la tabla podría ser completada mediante el procedimiento de **ripresa dati da produzione*** que totaliza, período por período, los datos de las Declaraciones de producción o las horas de actividad en Proyecto; otra posibilidad es la carga desde una hoja de Excel a través del modelo *PhysicalMovingControlling - Movimientos Físicos Controlling* disponible entre las Importaciones a demanda de ***Bizlink***.

Los campos disponibles en la cuadrícula superior son los siguientes:

- el [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia del dato

- la [***Unidad de medida***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units)

- la ***Distribución de períodos*** a utilizar, que es un campo obligatorio para las Unidades de medida de *Flujo*. Se trata de indicar a ***FluentisERP*** cómo dividir en los distintos períodos el dato ingresado para un rango de estos

- la ***Fecha*** de registro del movimiento cuantitativo

- el ***Año*** de referencia

- el rango de ***Período desde*** y ***Período hasta*** de referencia de las cantidades ingresadas

- el campo ***Estado***, no editable, que indica si la línea ha sido cargada manualmente o de qué tipo de origen tiene

En la cuadrícula inferior se deben ingresar los detalles de las cantidades, en particular valorando:
- el [***Centro de origen***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) del movimiento

- el ***Proyecto destino***, si las cantidades están dirigidas a un proyecto

- el [***Centro destino***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), es decir, el centro para el cual el *Centro de origen* anterior ha trabajado para estas cantidades

:::tip Ejemplo
Cuando una persona del departamento técnico, por ejemplo, prepara los detalles técnicos de un presupuesto para uso comercial, tendremos el centro del Departamento técnico como *Centro de origen* y el centro Comercial como *Centro de destino*.
Los [***Cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) con ***Tipo de distribución*** 10-Reversión sobre producción a tarifa estándar, 11-Reversión directa a tarifa estándar, 12-Reversión sobre producción a tarifa calculada hacen referencia a las cantidades de los centros de origen y/o destino.
:::

- la ***Cantidad*** válida para la línea

- una posible ***Nota*** libre de línea

- los campos ***Precodigo***, ***Número*** y ***Descripción*** del activo relacionado con la línea ingresada (valorados, por ejemplo, para los activos utilizados en producción, si se utilizan amortizaciones por cantidad)

- la ***División*** de referencia de la línea, interesante en empresas con más Divisiones activas