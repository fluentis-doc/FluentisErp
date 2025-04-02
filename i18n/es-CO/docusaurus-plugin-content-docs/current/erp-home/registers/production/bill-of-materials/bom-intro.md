---
title: distinta base
sidebar_position: 0
---

:::important **Introducción (Introduzione)**

La lista de materiales es una estructura de datos de tipo físico-lógico que describe cómo está hecho un producto.             
Normalmente se utiliza solo para productos de producción y no de compra, indicando los componentes que forman parte del producto ensamblado y la cantidad necesaria de cada uno de ellos para realizar una cantidad predefinida del producto ensamblado (coeficiente de uso del componente).            
Además del código del componente y la cantidad que representan la información básica, existen muchas otras que se ilustrarán en la ayuda en línea de Fluentis.

La lista de materiales sirve para los siguientes propósitos: 

- Planificar la necesidad de materiales (semiacabados y materias primas) y recursos productivos. 

- Gestionar los movimientos de almacén de los componentes en función de la realización de un ensamblado (conociendo la cantidad de ensamblados producidos, se puede calcular la cantidad teóricamente consumida de cada componente, y por lo tanto realizar los descargos correspondientes de almacén). 

- Calcular el costo estimado de un conjunto; de hecho, la estructura del producto junto con los costos de los materiales adquiridos o trabajados externamente y la descripción del proceso de trabajo a través de los ciclos de trabajo permiten calcular el costo teórico de un producto. El costo real varía para cada orden de transformación en función del valor real de compra de los materiales, los tiempos de trabajo consumidos y los recursos efectivamente utilizados.

- Describir y documentar la estructura de un producto.

A veces se crea la lista de materiales de un producto que no se realiza internamente (por ejemplo, un producto comprado), solo para representar su estructura con fines de mantenimiento o reparación.

En lo que respecta a la planificación, además de las listas físicas en las cuales tanto el código ensamblado como los componentes son productos reales que se gestionan en el almacén mediante procesos de compra y producción, se utilizan listas no físicas sino lógicas llamadas listas de planificación, cuyo objetivo es simplificar el proceso de planificación a medio-largo plazo como actividad posterior a la previsión de ventas, que se realiza no por códigos individuales de productos acabados sino por familias de productos y típicamente a valor y no a cantidad.

Los principales tipos de listas de planificación son los siguientes:

<details>
<summary> Listas modulares (Distinte modulari) </summary>

Este tipo de lista describe los módulos y las opciones de un producto acabado. Los módulos son partes comunes que no dependen de las elecciones de los clientes; las opciones, en cambio, son elegidas por los clientes. Se utiliza mucho en entornos donde un producto es ordenable según más opciones por parte del cliente, como por ejemplo en la industria automotriz (elección de accesorios, motorización, etc.).

</details>

<details>
<summary> Listas contenedor (kit bill) (Distinte contenitore) </summary>

En este caso, el código del ensamblado no corresponde a un producto real gestionado en almacén, sino que representa un agrupamiento lógico de sus componentes. El beneficio es que con un solo código de artículo se gestionan muchos, tanto en la fase de planificación como en el movimiento de almacén y en la valoración del producto. El código contenedor se utiliza, por lo tanto, como componente de otras listas tanto físicas como lógicas.

</details>

<details>
<summary> Listas super (super bill) (Distinte super) </summary>

Son listas utilizadas para representar familias de productos acabados que utilizan como componentes listas modulares y listas de partes comunes. El coeficiente de uso asignado a cada opción representa la probabilidad de pedido de tal opción sobre el total de las unidades vendidas de la familia de productos acabados (si, por ejemplo, la motorización de 2000 cc gasolina se elige en un 23% de los casos, el coeficiente de uso de tal opción será 0,23). El coeficiente de uso asignado a cada lista de partes comunes representa, a su vez, la cantidad necesaria para realizar una unidad de producto acabado de dicho grupo.

</details>

<details>
<summary> Listas de familia (family bill) (Distinte famiglia) </summary>

El código ensamblado de una lista así es un elemento lógico y no físico que sirve para identificar una familia de productos, indicando sus miembros cuando el número de miembros de una familia no es numeroso. A menudo, los miembros de la familia son los “modelos” que la componen. Pensemos, por ejemplo, en una gran empresa que produce diversas familias de productos como motocicletas, automóviles, vehículos de carga, autobuses, máquinas de movimiento de tierra, tractores, etc. En este ejemplo, la familia de automóviles está compuesta por los diferentes modelos de coches vendidos por la empresa y así sucesivamente para las demás familias. Cada “modelo” estará presente en la lista con un coeficiente de uso que representa el porcentaje de ventas de tal modelo sobre el total de la familia.

</details>

<details>
<summary> Lista media (average bill) (Distinta media) </summary>

En este caso, el código del ensamblado es de tipo lógico y no físico. Representa la estructura media de un producto de manera similar a lo que hace una lista super, pero a diferencia de esta última, sus componentes no son módulos o kits (es decir, componentes de tipo lógico) sino códigos físicos realmente gestionados en el almacén y en la mayoría de los casos se trata solo de componentes de compra. Se utiliza principalmente cuando los productos acabados se diferencian por características físicas como forma, tamaño, volumen, peso, etc.

</details>

<details>
<summary> Lista imaginaria (imaginary bill) (Distinta immaginaria) </summary>

Es un tipo de lista que se utiliza en empresas que trabajan bajo pedido de tipo Engineer to Order, donde se elaboran productos muy complejos con largos tiempos de realización que aún no han sido diseñados al momento del pedido del cliente (instalaciones industriales, grandes máquinas, barcos, aviones, etc.). En este caso, la lista del producto acabado estaría disponible solo al final de toda la actividad de diseño y, por lo tanto, demasiado tarde para permitir que el sistema de planificación desarrolle su acción. Por esta razón, inicialmente se crea una lista base “imaginaria” copiada de un producto similar elaborado en el pasado que contiene partes ya conocidas y partes temporales que serán reemplazadas por las definitivas a medida que se avanza en el diseño. Esta lista permite, no obstante, la elaboración del sistema de planificación y la programación de actividades y aprovisionamientos programados adecuadamente en el tiempo, así como la re-planificación de actividades a medida que la orden evoluciona.

</details>
:::