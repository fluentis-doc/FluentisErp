---
title: Introducción (Introduzione)
sidebar_position: 2.0
---

El área de Control (Controlling) se compone de una serie de módulos que pueden cumplir objetivos diferentes:

- un primer objetivo podría ser simular, en pocos pasos automáticos, un balance contable interanual a través del módulo de *chiusure infrannuali*. Para hacer esto, no hay nada específico que configurar en ***FluentisERP***: solo hay que entrar en el módulo y crear un nuevo Cierre de cuentas interanual que calcula los saldos extraconciliadores tomándolos de la contabilidad, para luego añadir mediante diversos procedimientos automáticos ajustes, amortizaciones, existencias, facturas por recibir y, finalmente, posibles operaciones manuales adicionales para completar el balance. Solo quedará proceder a la impresión del Balance obtenido, quizás consolidando varias
 empresas en un solo informe intercompañía mediante el procedimiento de *consolidamento*.

- pero podemos extender el uso de estos datos agregándolos y reclasificándolos a través del módulo de *riclassificazioni*, dentro del cual el usuario puede aprovechar algunos modelos preinstalados a través del [***Fast start***](/docs/guide/fast-start) en lugar de crear sus propios [*modelos*](/docs/controlling/reclassifications/create-reclassification-model) libremente. Aquí tendremos tanto las impresiones de estos reclasificados, como una potente función de comparación donde se pueden comparar libremente los N reclasificados almacenados, incluso de años anteriores, para poder evaluar sus desviaciones. El usuario solo debe tener cuidado de alinear los modelos ya preconfigurados con los posibles códigos del Plan de cuentas que haya personalizado en relación al [***Fast start***](/docs/guide/fast-start) inicial. 
Pero aún estamos en un nivel *contable* de control.

- luego podemos configurar un verdadero sistema de Control de gestión, basado en la estructura multinivel y [*multidimensional*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) de los [**centri aziendali***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers). Aquí también se abren más caminos:
    - Podremos limitarnos a configurar una única dimensión de análisis con una lista de centros para vincular a las únicas referencias de uso contable y, por lo tanto, en esencia, utilizar nuevamente solo los dos módulos ya citados de los *chiusure infrannuali* y los *Reclasificados (Riclassificati)* (esta vez con un modelo personalizado basado en los centros empresariales específicos definidos en la empresa), limitando así el impacto de la configuración a solo las tablas de *Dimensión*, *Centros empresariales*, *Tipos de área* y *Área*;
    - o bien impulsarnos a integrar en nuestros análisis datos cuantitativos extraconciliadores o de producción (*horas* y *cantidades*), amortizaciones técnicas, definiendo quizás más dimensiones de análisis (por línea de negocio, o por proyecto/orden) y obtener tanto tarifas efectivas de los centros productivos como un estado de resultados por margen de contribución, o quizás una contabilidad completa de costos de los varios proyectos/órdenes de venta. 
Dependiendo de la complejidad empresarial y los resultados requeridos, entrarán en juego las tablas de [*Cost Drivers*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers), los enlaces de los centros empresariales en *máquinas* y *grupos de mano de obra* o en las diversas wbs de proyecto y actividades del personal.

- a estos resultados luego  
    - podremos vincular la gestión de un *budget* por centro de costo, con el fin de evaluar las desviaciones entre lo previsto y lo obtenido simulado del período de interés;  
    - podremos alinear las simulaciones de *Costo de producto*, normalmente basadas en los estándares de costo vinculados a las listas de materiales.

Completa el área el módulo de *previsioni di vendita*.

En esta sección de visión general proporcionaremos las indicaciones lógicas de los pasos a seguir para quienes desean implementar un sistema de control de gestión ***completo***.

:::tip Nota
Por lo tanto, no es fácil definir un camino formativo lineal y único del área, ya que en la misma empresa, dos usuarios diferentes podrían utilizar módulos y opciones diferentes entre sí. 
Por ello, intentaremos, donde sea necesario, detallar los diversos posibles objetivos de uso de los diferentes procedimientos.
:::