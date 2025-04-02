---
title: contabilizzazione rimanenze
sidebar_position: 2
---

Dentro del módulo de cierres intermedios, después de haber creado un cierre intermedio, es posible valorar automáticamente las existencias iniciales/finales de inventario.

Una vez abierta la ventana, procederemos a gestionar el rango de fechas a utilizar, el tipo de saldo a considerar (*Positivo/Negativo*), el tipo de cálculo de costo (*Costo medio, Último costo, FIFO por tramos anuales, LIFO por tramos anuales, Área de gestión, Desde costo efectivo de lotes*) y la causa contable a utilizar para los registros a crear.  
La presencia o ausencia del indicador de Control (Controlling) gestionará las operaciones de dos maneras diferentes:  
- Si el indicador *no está presente*, **FluentisERP** creará los asientos de las existencias iniciales y finales en las fechas de inicio y fin del período del Cierre intermedio, e incluirá estos asientos al final de los otros asientos de ajuste del cierre mismo.  
- Si el indicador *está presente*, **FluentisERP** creará los registros de las existencias iniciales y finales de cada mes dentro del rango de fechas de competencia del Cierre intermedio, e insertará estos registros como Asientos extracontables del área asociada al cierre (por lo tanto, no serán asientos del cierre, sino asientos válidos solo para el Control).

:::tip Nota (Nota)
El procesamiento realiza una prueba sobre la presencia o ausencia de este tipo de asientos y, si ya están presentes, pregunta si se desea eliminarlos y recrearlos, o si se desean agregar (como en el caso en que se seleccionen solo algunos almacenes y no todos, a través del menú desplegable disponible). Si se desea crear tanto los registros de Área para el control como los de Ajuste en el Cierre, es suficiente con ejecutar el procedimiento *primero* con el indicador de Control activo y *luego* con el indicador desactivado.
:::