---
title: Documentos de compras y ventas (Documenti degli acquisti e vendite)
sidebar_position: 20
---

Dentro de los diversos documentos del ciclo activo y pasivo, tenemos a nuestra disposición, esencialmente, dos elementos de interés para las valoraciones del *Controlling*: los vínculos a los *Proyectos* y el detalle de valoración de la ficha *Analítica* de cada artículo movimentado.

En cuanto a los *Proyectos*, en el encabezado de los documentos tendremos la posibilidad de asociar un proyecto de referencia, que se utilizará para valorar con el mismo referente todos los artículos que se inserten dentro de él: en caso de que se modifique el referente de encabezado con artículos ya presentes, ***FluentisERP*** solicitará confirmación de la sustitución o no en todos los detalles. Se permite la modificación manual del referente del proyecto en la única línea del artículo, con un único campo de vínculo disponible.

En relación con la ficha *Analítica* de detalle, ubicada debajo de la sección de artículos, esta nos permitirá asignar libremente el valor de línea a N centros empresariales: ***FluentisERP*** asignará automáticamente los datos a los centros según las lógicas de prioridad y las configuraciones disponibles, pero siempre se le permite al usuario proceder a una modificación manual. En caso de que la empresa tenga activo el *Controlling*, esta ficha analítica presentará las mismas características de gestión multidimensional y de proyecto que la ficha analítica de los registros contables: dado que el documento y la línea de artículo, como se mencionó en el párrafo anterior, ya están potencialmente asociados a un *Proyecto*, la sección analítica valorizará automáticamente la posible dimensión *Proyectos* de los centros empresariales.

:::tip Nota
Dado que la ficha analítica es la fuente de datos de valoración de la dimensión *Proyectos* y dado que la ficha es modificable libremente, aunque la línea del artículo prevea el enganche a un único *Proyecto*, el usuario tiene la manera de intervenir a nivel de analítica para dividir la atribución en más de un *Proyecto*, sin necesidad de multiplicar las líneas de artículo del documento.
:::