---
title: Contabilización de existencias
sidebar_position: 2
ai_generated: true
---

Dentro del módulo de cierres interanuales, tras crear un cierre interanual es posible valorizar automáticamente las existencias<!-- rimanenze --> iniciales/finales de almacén<!-- magazzino -->.

Una vez abierta la ventana, se gestiona el rango de fechas a utilizar, el tipo de existencia<!-- giacenza --> a considerar (*Positiva/Negativa*), el tipo de cálculo de costo (*Costo medio, Ultimo costo, FIFO con saltos anuales, LIFO con saltos anuales, Área de gestión, Por costo efectivo de lotes*) y la causal contable<!-- causale contabile --> a utilizar para los asientos<!-- registrazioni --> a crear.
La presencia o ausencia del flag Controlling gestiona las operaciones de dos maneras diferentes:
- Si el flag *no está presente*, **FluentisERP** creará los asientos<!-- scritture --> de existencias<!-- rimanenze --> iniciales y finales en las fechas de inicio y fin del periodo del cierre interanual, y los insertará después de los demás asientos de ajuste<!-- scritture di assestamento --> del mismo cierre.
- Si el flag *está presente*, **FluentisERP** creará los registros<!-- registrazioni --> de existencias<!-- rimanenze --> iniciales y finales de cada mes dentro del rango de fechas correspondiente al cierre interanual, y los insertará como asientos extracontables<!-- Scritture extracontabili --> del Área<!-- Area --> asociada al propio cierre (por lo tanto, no serán asientos del cierre, sino asientos válidos solo para el Controlling)

:::tip Nota<!-- Nota -->
El procesamiento realiza una comprobación sobre la presencia o ausencia de este tipo de asientos<!-- scritture --> y, si ya los encuentra presentes, pregunta si se desean eliminar y recrear o si se desean agregar (como en el caso de seleccionar solo algunos almacenes<!-- magazzini --> y no todos, a través del desplegable disponible). En el caso de querer crear tanto los registros de Área<!-- registrazioni di Area --> para el controlling como los de Ajuste<!-- Assestamento --> en el cierre, basta con lanzar el procedimiento *primero* con el flag Controlling activo y *luego* con el flag desactivado.
:::