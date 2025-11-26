---
title: Previsiones de ventas
sidebar_position: 11
ai_generated: true
---

Esta tabla contiene las previsiones de ventas<!-- previsioni di vendita --> de productos terminados fabricados en planta y tiene un detalle máximo semanal (previsión de ventas semanal<!-- previsione di vendita settimanale -->).

Para los productos distribuidos no se utiliza esta tabla sino la de previsiones de consumo diario<!-- previsioni di consumo giornaliero -->.

La necesidad de una previsión de ventas<!-- previsione delle vendite --> en DDMRP es mucho más rara respecto a un MRP porque el Master Production Schedule no se utiliza, ya que no es necesario anticipar la demanda como en un MRP convencional.

El uso de la previsión de ventas<!-- previsione delle vendite --> es necesario solo cuando se sabe que en el futuro la demanda de un producto terminado<!-- prodotto finito --> variará considerablemente y en un corto período de tiempo (un periodo de tiempo comparable al tiempo de producción acumulado del producto terminado<!-- tempo di produzione cumulativo del prodotto finito -->).

En una situación de este tipo, el stock disponible para los artículos en buffer<!-- articoli a buffer --> dentro de la lista de materiales del producto terminado<!-- distinta del prodotto finito --> no sería suficiente, y resultaría imposible producir los productos terminados<!-- prodotti finiti --> en los tiempos y cantidades establecidos en las previsiones de ventas<!-- previsioni di vendita -->.

Si hubiera una fuerte variación de la demanda pero progresiva y durante un período de tiempo superior al tiempo de producción acumulado<!-- tempo di produzione cumulativo -->, las previsiones de ventas<!-- previsioni di vendita --> no serían necesarias ya que el [**procedimiento de actualización del consumo medio diario (ADU)**](/docs/ddmrp/procedures/adu-update), trabajando sobre los valores pasados de consumo, adapta automáticamente el consumo medio diario (ADU) a la variación de la demanda, con el consiguiente incremento de las zonas y del nivel promedio de inventario<!-- livello di scorta medio -->.

Situaciones típicas que requieren el uso de la previsión de ventas<!-- previsione delle vendite --> son:

-   Promociones de venta<!-- Promozioni di vendita -->
-   Estacionalidad<!-- Stagionalità -->
-   Entrada a un nuevo mercado<!-- Entrata in un nuovo mercato -->
-   Salida de un mercado<!-- Uscita da un mercato -->
-   Introducción de nuevos productos<!-- Introduzione di nuovi prodotti -->
-   Eliminación de productos antiguos<!-- Eliminazione di vecchi prodotti -->