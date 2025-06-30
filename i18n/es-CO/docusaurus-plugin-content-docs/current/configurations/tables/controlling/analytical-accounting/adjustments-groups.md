---
title: Grupos de ajuste
sidebar_position: 6
---

El formulario se encuentra en la ruta: **Tablas > Control > Contabilidad analítica > Grupos de ajuste**

:::tip Nota 
Esta tabla es de uso exclusivo para las empresas que han configurado el *control*.
:::

Dentro de esta tabla es posible codificar agrupaciones de cuentas útiles para la gestión de la reportística específica para el control.  
Algunas cuentas contables no se utilizan en primera instancia, directamente, por el control, sino solo indirectamente y a posteriori: los grupos de ajuste sirven para identificar grupos lógicos a los que asignar los costos individuales para los ajustes que realizaremos de manera infra-anual o solo al final del ejercicio, con el fin de agruparlos de manera apropiada en la máscara de **Valores de control** y verificar su conciliación con la contabilidad al final del período.

#### Campos específicos:
- **Código**  
- **Descripción**  
- **Tipo de saldo**: este último es de fundamental importancia para los subcuentos de las existencias iniciales/finales, para los cuales se deben definir obligatoriamente dos categorías específicas.

:::tip Nota
En particular, el procedimiento de **Contabilidad de inventarios** para el Control valora en los registros extracontables del área las existencias iniciales y finales de cada período (mes) que se está procesando en el año. Cuando luego se soliciten, en el módulo de Reporting, los importes de las existencias iniciales y finales del primer semestre del año YYYY, **FluentisERP** **debe** saber para qué cuentas leer solo el dato del período inicial de enero y para cuáles leer solo el período final de junio; de lo contrario, se tendrían las sumas de 6 meses de existencias iniciales y 6 de existencias finales, lo que afectaría completamente la elaboración.
:::