---
title: Introducción
sidebar_position: 2.0
ai_generated: true
---

El área de Controlling se compone de una serie de módulos que pueden cumplir diferentes objetivos<!-- obiettivi -->:

- Un primer objetivo podría ser simular, en pocos pasos automáticos, un balance contable intermedio<!-- bilancio contabile infrannuale --> mediante el módulo de *Cierres intermedios<!-- Chiusure infrannuali -->*. Para ello no es necesario configurar nada en particular en ***FluentisERP***: basta con entrar en el módulo y crear un nuevo Cierre de cuentas intermedio<!-- Chiusura conti infrannuale --> que calcula los saldos extracontables tomándolos de la contabilidad<!-- contabilità -->, para luego añadir con los diferentes procedimientos automáticos periodificaciones, amortizaciones, existencias, facturas por recibir y, finalmente, eventuales operaciones manuales de complemento del balance. Solo restará proceder a la impresión del Balance obtenido, quizá consolidando varias empresas en un único cuadro intercompany mediante el procedimiento de *Consolidación<!-- Consolidamento -->*.

- Pero podemos extender el uso de estos datos agregándolos y reclasificándolos a través del módulo de *Reclasificaciones<!-- Riclassificazioni -->*, dentro del cual el usuario puede aprovechar algunos modelos preinstalados a través del [***Fast start***](/docs/guide/fast-start) o bien construir sus propios [*modelos*](/docs/controlling/reclassifications/create-reclassification-model) libremente. Aquí tendremos a disposición tanto los reportes de estos reclasificados, como una poderosa función de comparación donde comparar libremente los N reclasificados almacenados, incluso de años anteriores, para evaluar sus desviaciones. El usuario solo deberá prestar atención a alinear los modelos ya preconfigurados con los eventuales códigos del Plan de cuentas<!-- Piano dei conti --> que haya personalizado respecto al [***Fast start***](/docs/guide/fast-start) inicial. Pero seguimos todavía en un nivel *contable* de controlling.

- Luego podemos pasar a configurar un verdadero sistema de Control de gestión<!-- Controllo di gestione -->, basado en la estructura multinivel y [*multidimensional*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) de los [***Centros empresariales***<!-- Centri aziendali -->](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers). Incluso aquí se abren varios caminos:
    - Podemos limitarnos a configurar una única dimensión de análisis con una lista de centros que vincular solo a los datos maestros de uso contable y, por lo tanto, utilizar nuevamente únicamente los dos módulos ya mencionados de *Cierres intermedios<!-- Chiusure infrannuali -->* y *Reclasificados<!-- Riclassificati -->* (esta vez con un modelo personalizado basado en los centros empresariales<!-- centri aziendali --> específicos definidos en la empresa), limitando así el impacto de la configuración solo a las tablas *Dimensión*, *Centros empresariales<!-- Centri aziendali -->*, *Tipos de área* y *Área*;
    - O bien ir más allá e integrar en nuestros análisis datos cuantitativos extracontables o de producción (*horas* y *cantidades*), amortizaciones técnicas, definiendo incluso múltiples dimensiones de análisis (por línea de negocio, o por proyecto/orden<!-- commessa -->) y obtener tanto tarifas reales de los centros productivos como una cuenta de resultados a margen de contribución, o quizá una contabilización a full costing de los distintos proyectos/órdenes<!-- progetti/commesse --> de venta.
Según la complejidad de la empresa y los resultados requeridos, entrarán así en juego las tablas de [*Cost driver*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers), de la vinculación de los centros empresariales<!-- centri aziendali --> en *máquinas* y *grupos de mano de obra* o bien en las distintas wbs del proyecto y actividades del personal.

- A estos resultados luego
    - podremos vincular la gestión de un *Presupuesto* por centro de costo<!-- centro di costo -->, con el fin de evaluar las desviaciones entre el previsional y el real simulado del periodo de interés
    - podremos alinear las simulaciones de *Coste del producto*, normalmente basadas en los estándares de coste ligados a las listas de materiales<!-- distinte base -->.

Completa el área el módulo de *Previsiones de ventas<!-- Previsioni di vendita -->*.

En esta sección de panorama general indicaremos los pasos lógicos a seguir para quienes quieran implementar un sistema de control de gestión ***completo***<!-- completo -->.

:::tip Nota<!-- Nota -->
Por lo tanto, no es fácil definir un recorrido formativo lineal y único del área, dado que incluso en la misma empresa dos usuarios diferentes podrían utilizar distintos módulos y opciones entre sí.
Por eso intentaremos, donde sea necesario, detallar los distintos objetivos de uso posibles de los diversos procedimientos.
:::