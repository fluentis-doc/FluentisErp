---
title: Documentos de compras y ventas
sidebar_position: 20
ai_generated: true
---

Dentro de los diversos documentos del ciclo activo<!-- ciclo attivo --> y pasivo<!-- passivo --> tenemos, básicamente, dos elementos de interés para las valorizaciones del *Controlling*: los enlaces a los *Proyectos*<!-- Progetti --> y el detalle de valorización de la pestaña *Analítica<!-- Analitica -->* de cada artículo movido<!-- movimentato -->.

En lo que respecta a los *Proyectos*<!-- Progetti -->, en el encabezado de los documentos tendremos la posibilidad de asociar un proyecto<!-- progetto --> de referencia, que será utilizado para valorizar con ese mismo valor todos los artículos que serán insertados en su interior: en caso de que se modifique la referencia de encabezado con artículos ya presentes, ***FluentisERP*** solicitará confirmación sobre si desea o no sustituirla en todos los detalles. Se permite la modificación manual de la referencia del proyecto<!-- progetto --> sobre la línea individual de artículo, contando con un solo campo de enlace disponible.

En cuanto a la pestaña *Analítica<!-- Analitica -->* de detalle, ubicada debajo de la sección de artículos, esta nos permitirá asignar libremente el valor de la línea a N centros empresariales<!-- centri aziendali -->: ***FluentisERP*** asignará automáticamente los datos a los centros siguiendo las lógicas de prioridad y configuraciones disponibles, pero siempre se otorga libertad al usuario para realizar una modificación manual. En caso de que la empresa tenga activo el *Controlling*, esta pestaña analítica presentará las mismas características de gestión multidimensional y de proyecto que la pestaña analítica de los asientos contables<!-- registrazioni contabili -->: dado que el documento y la línea de artículo, como se mencionó en el párrafo anterior, ya están potencialmente asociadas a un *Proyecto*<!-- Progetto -->, la sección analítica valorizará automáticamente la eventual dimensión *Proyectos*<!-- Progetti --> de los centros empresariales<!-- centri aziendali -->.

:::tip Nota<!-- Nota -->
Dado que la pestaña analítica<!-- scheda analitica --> es el origen de datos para valorizar la dimensión *Proyectos*<!-- Progetti --> y dado que la pestaña es libremente modificable, aunque la línea de artículo prevea la vinculación a un único *Proyecto*<!-- Progetto -->, el usuario puede intervenir a nivel analítico para dividir la atribución en varios *Proyectos*<!-- Progetti -->, sin tener que multiplicar las líneas de artículo del documento<!-- righe articolo del documento -->
:::