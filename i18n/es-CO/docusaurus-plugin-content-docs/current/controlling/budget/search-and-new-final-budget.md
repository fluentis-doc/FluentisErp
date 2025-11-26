---
title: Búsqueda y Nuevo Presupuesto Consuntivo
sidebar_position: 5
ai_generated: true
---

## Búsqueda<!-- Ricerca -->

El comando **Presupuesto consuntivo<!-- Budget consuntivo -->** permite buscar, gestionar e imprimir los análisis de los consuntivos<!-- consuntivi --> de presupuesto, para evaluar la evolución y las desviaciones<!-- scostamenti --> entre el previsional y el consuntivo<!-- consuntivo -->: podemos crear nuevos (con el botón Nuevo<!-- Nuovo --> situado en la ribbon bar, o con el comando Nuevo<!-- Nuovo --> Presupuesto consuntivo<!-- Budget consuntivo --> directamente en el menú), o modificar los existentes.

Al insertar un **Nuevo consuntivo<!-- Nuovo consuntivo -->**, se abre la pantalla para valorizar los consuntivos<!-- consuntivi --> ***de los distintos sub-presupuestos<!-- sotto-budget -->***, con el fin de analizar **la evolución de las desviaciones<!-- andamento degli scostamenti -->**.

## Cómo obtener un análisis de desviaciones a consuntivo<!-- Come ottenere un'analisi scostamenti a consuntivo -->

1. Usando la combo box **Presupuesto<!-- Budget -->** seleccione el presupuesto previsional que se va a consuntivar (a analizar en términos de desviaciones a consuntivo<!-- scostamenti a consuntivo -->)
2. Seleccione los datos a **consuntivo<!-- consuntivo -->** para el análisis de desviaciones en la sección **derecha<!-- destra -->** de la cabecera del formulario; estos pueden ser:
    - Un **cierre interanual<!-- chiusura infrannuale -->** previamente procesado, que se selecciona con la combo box correspondiente;
    - **Datos del Controllo de Gestión<!-- Dati dal Controlling -->**, es decir, la *contabilidad de gestión*, activando la casilla correspondiente y seleccionando un **Área<!-- Area -->** de análisis (entre las configuradas previamente), una **Dimensión<!-- Dimensione -->** de los centros empresariales (centros de costo) y un **rango de periodos** (Año/mes).
3. Guarde la cabecera del formulario con los parámetros indicados en los puntos anteriores y proceda seleccionando uno a uno los diferentes *sub-presupuestos<!-- sotto-budget -->* en la cuadrícula superior;
4. Pulse el botón **Calcular consuntivo<!-- Calcola consuntivo -->**, que valoriza los datos de detalle de la cuadrícula inferior para cada uno de los sub-presupuestos<!-- sotto-budget --> seleccionados en la cuadrícula superior.
 
En la cuadrícula inferior, según el tipo de sub-presupuesto<!-- sotto-budget --> valorizado, tendremos las columnas con los datos totales de presupuesto y totales del consuntivo<!-- consuntivo --> (las etiquetadas como ***efectivo<!-- effettivo -->***), para evaluar las desviaciones<!-- scostamenti -->.

:::note[Nota]<!-- Nota -->
Si el cierre interanual<!-- chiusura infrannuale --> (o los periodos de controlling configurados) llega hasta el 31/06, por ejemplo, se totalizarán y evaluarán automáticamente los primeros 6 meses del presupuesto.

El formulario no muestra el detalle de la comparación para el periodo individual, pero este está presente en el procesamiento subyacente (objeto FSBudgetActualObjectValueByPeriod) y por lo tanto disponible para dashboards o visualizaciones personalizadas.

:::

## Impresión y análisis de presupuesto<!-- Stampa Analisi Budget -->

El informe de impresión ***Análisis de presupuesto<!-- Analisi Budget -->*** representa los mismos datos de los consuntivos<!-- consuntivi --> de presupuesto destacados en este formulario. Antes de la ejecución están disponibles los filtros correspondientes a dichos datos: Tipo de presupuesto, Tipo de periodo y por Fecha / Número tanto del previsional como del consuntivo<!-- consuntivo -->.