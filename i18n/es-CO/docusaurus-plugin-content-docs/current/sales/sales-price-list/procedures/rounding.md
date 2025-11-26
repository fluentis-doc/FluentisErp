---
title: Redondeos
sidebar_position: 5
ai_generated: true
---

El formulario se abre a través de la ruta **Ventas > Listas de Precios de Venta > Procedimientos > Redondeos<!-- Arrotondamenti -->**.

El procedimiento permite buscar los redondeos<!-- arrotondamenti --> y definir varios códigos de reglas de aumento/disminución de precios, actualización de descuentos y políticas de redondeo de los precios obtenidos.

Estos códigos de Redondeo<!-- Arrotondamento --> se utilizan en los procedimientos de creación de listas de precios de venta.

En el formulario de *Búsqueda<!-- Ricerca -->* es posible buscar los datos preexistentes, insertar nuevos códigos de redondeo<!-- arrotondamenti --> o modificar códigos ya existentes.

Definiendo un *Nuevo<!-- Nuovo -->* código (clic en el botón **Nuevo<!-- Nuovo -->** en el formulario de Búsqueda<!-- Ricerca -->) o *Modificando<!-- Modificando -->* un código existente es posible introducir la descripción que se asignará a la regla.

![](/img/it-it/sales/sales-price-list/procedures/rounding/image02.png)

La variación del precio puede darse en porcentaje o en valor, aumentando o disminuyendo usando el valor con signo.

El método de redondeo<!-- arrotondamento --> se define por tramos de precio unitario.

**Límite superior<!-- Limite superiore -->**: indica el precio máximo al que se aplicarán la máscara<!-- mask --> y el porcentaje.

**Máscara<!-- Mask -->**: es un campo de texto donde el usuario define la regla de redondeo<!-- arrotondamento -->.

**Porcentaje<!-- Percentuale -->**: es el porcentaje por encima del cual, si la relación entre los precios calculados, obtenidos aplicando la variación al precio de partida, y el precio de partida, excede el valor de este porcentaje, el precio obtenido y redondeado se señala en rojo ya que sobrepasa el límite de redondeo<!-- arrotondamento --> permitido. En el caso destacado arriba, el “precio redondeado” no debe superar en más del 5% el “precio no redondeado”.

**VALORES VÁLIDOS PARA LA MÁSCARA<!-- VALORI VALIDI PER IL MASK -->**

La MÁSACARA<!-- MASK --> es una regla que el usuario define componiendo un texto usando el siguiente lenguaje:

=  el valor no sufre variaciones

+  incrementar el valor en una unidad

-   disminuir el valor en una unidad

[    inicio de regla para valor individual

]    fin de regla para valor individual

(    inicio de regla que define a qué valor fijo debe llevarse el valor analizado

)    fin de regla que define a qué valor fijo debe llevarse el valor analizado

,    separador decimal

A continuación se muestran algunos ejemplos que pueden explicar cómo crear una regla:

| Precio inicial | Precio sin redondear | Máscara | Precio redondeado |
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

En la sección de descuentos es posible definir descuentos a insertar en cada línea de la lista de precios<!-- listino -->, eligiendo también eliminar los descuentos previamente introducidos en la misma línea, o modificar los descuentos presentes en las líneas de la lista de precios<!-- listino -->.