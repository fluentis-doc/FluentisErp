---
title: arrotondamenti
sidebar_position: 5
---

El formulario se abre a través de la ruta **Ventas > Listas de Precios > Procedimientos > arrotondamenti (Vendite > Listini di Vendita > Procedure > Arrotondamenti)**.

El procedimiento permite buscar los redondeos y definir múltiples códigos de reglas de aumento/disminución de precios, de actualización de descuentos y de políticas de redondeo de los precios obtenidos.

Estos códigos de Redondeo se utilizan en los procedimientos de creación de listas de precios de venta.

En el formulario de *ricerca* es posible buscar datos preexistentes, insertar nuevos códigos de redondeo o modificar códigos ya existentes.

Definiendo un *nuovo* código (clic en el botón **nuovo** en el formulario de Búsqueda) o *Modificando (Modificando)* un código existente se puede ingresar la descripción a asignar a la regla.

![](/img/it-it/sales/sales-price-list/procedures/rounding/image02.png)

La variación del precio puede ocurrir en porcentaje o en valor, aumentando o disminuyendo con el uso del valor con signo.

El método de redondeo está definido por tramos de precio unitario.

**limite superiore**: indica el precio máximo al que se aplicará la máscara y el porcentaje.

**mask**: es un campo de texto donde el usuario define la regla de redondeo.

**percentuale**: es el porcentaje más allá del cual, si la relación entre los precios calculados obtenidos al aplicar la variación al precio inicial y el precio inicial excede el valor de este porcentaje, el precio redondeado obtenido se señala en rojo dado que está más allá del límite de redondeo permitido. En el caso resaltado arriba, el "precio redondeado" no debe superar el 5% del "precio no redondeado (prezzo non arr.)".

**VALORES VÁLIDOS PARA LA MÁSCARA (VALORI VALIDI PER IL MASK)**

La MÁSCARA es una regla que el usuario define componiendo un texto utilizando el siguiente lenguaje:

=  el valor no sufre variaciones

+  incrementar el valor en una unidad

-   decrementar el valor en una unidad

[    inicio de regla de valor único

]    fin de regla de valor único

(    inicio de regla que define a qué valor fijo debe llevarse el valor analizado

)    fin de regla que define a qué valor fijo debe llevarse el valor analizado

,    separador decimal

A continuación se presentan ejemplos que pueden explicar cómo realizar una regla:

| Precio ini. | Precio no arr. | Máscara | Precio redondeado |
| --- | --- | --- | --- |
| 16,16 | 16,968 | [=][=][=],[=][+] | 16,98 |
| 16,16 | 16,968 | [=][=][=],[=][=] | 16,97 |
| 16,16 | 16,968 | [=][=][=],[=][-] | 16,96 |
| 16,16 | 16,968 | [=][=][=],[=][=][+] | 16,969 |
| 16,16 | 16,968 | [=][=][=],[=][=][=] | 16,968 |
| 16,16 | 16,968 | [=][=][=],[=][=][-] | 16,967 |
| 16,16 | 16,968 | [=][=][=],[=][=][-(0)] | 16,96 |
| 16,16 | 16,968 | [=][=][=],[=][+(9)] | 16,99 |
| 16,16 | 16,968 | [=][=][=],[=][-(3)] | 16,93 |
| 16,16 | 16,968 | [=][=][=],[=] | 17 |
| 16,16 | 16,968 | [=][=][=],[+] | 17,1 |
| 16,16 | 16,968 | [=][=][=],[-] | 16,9 |
| 16,16 | 16,968 | [=][=][=] | 17 |
| 16,16 | 16,968 | [=][=][-] | 16 |
| 16,16 | 16,968 | [=][=][+] | 18 |

En la sección de descuentos es posible definir descuentos para insertar en cada línea de la lista de precios, eligiendo también cancelar los descuentos previamente insertados en la misma línea o modificar los descuentos presentes en las líneas de lista de precios.