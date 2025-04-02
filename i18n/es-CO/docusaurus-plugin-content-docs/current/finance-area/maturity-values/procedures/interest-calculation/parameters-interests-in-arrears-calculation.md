---
title: parametri di calcolo interessi moratori
sidebar_position: 3
---

En el formulario hay una lista de indicadores de selección de los tipos de partidas para las cuales proceder al cálculo de las tasas de interés, mientras que en la parte superior hay un campo de filtro para códigos de cuenta/subcuenta. Debajo de esto, se debe establecer el tipo de tasa de interés predeterminada a aplicar y los indicadores que guían la lógica de cálculo:

**calcola per le partite chiuse nel periodo**: el procedimiento verificará las partidas que se han cerrado dentro del rango de fechas establecido y solo para estas calculará el valor de los intereses, por lo tanto, para los pagos parciales no se contabilizará ningún interés;  

**Calcular por los pagos del período (Calcola per i pagamenti del periodo)**: el procedimiento identificará los pagos registrados dentro del rango de fechas y sobre estos importes calculará el valor de los intereses correspondientes: esta configuración es la recomendada.  

En caso de que no se haya marcado ningún indicador, el cálculo valorizará los intereses relacionados con los días de retraso dentro del rango de fechas establecidos.  

**tipo documento** y **tipo pagamento**: son filtros adicionales para identificar las partidas sobre las cuales realizar el cálculo de intereses.  

El siguiente botón de opción permite definir el tipo de tasa a utilizar en el cálculo de intereses:  

- calcular los intereses solo en los clientes para los cuales se ha registrado en la base de datos una fecha de acuerdo;  

- calcular los intereses en los clientes con un acuerdo según las configuraciones de la base de datos, la tasa de interés predeterminada ingresada en la parte superior para todos los demás;  

- calcular los intereses para todos los clientes según la tasa de interés predeterminada ingresada en la parte superior.  

Un último indicador, **escludi effetti emessi**, ya configurado por defecto, prevé la exclusión de los intereses de las partidas pagadas con efectos del módulo de cartera de efectos: esta configuración es útil, en particular, para los tipos de tasa en los cuales se ha establecido el cálculo también a descuento, ya que el cierre de la partida del cliente suele detectarse directamente en la emisión del recibo bancario/efecto cambiario.  

El procedimiento de cálculo se inicia con el botón **calcolo interessi**, en la barra de ribbon.