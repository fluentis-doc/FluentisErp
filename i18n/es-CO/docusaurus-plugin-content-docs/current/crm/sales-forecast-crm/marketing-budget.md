---
title: Presupuesto de marketing
sidebar_position: 5
ai_generated: true
---

Con esta funcionalidad es posible crear presupuestos<!-- Budget --> de periodo.        
Los datos de cabecera son los siguientes:       
**Período del presupuesto<!-- Periodo budget -->**: en este campo es necesario ingresar el [Período](/docs/configurations/tables/crm/sales-forecast/budget-period) que se utilizará como unidad de subdivisión del año; según el período seleccionado, los importes introducidos posteriormente se distribuirán automáticamente en los diferentes períodos, que se muestran en la tabla inferior *Períodos<!-- Periodi -->*;      
**Descripción**: contiene una descripción libre;      
**Fecha de fin de validez**: contiene una eventual fecha de cierre del presupuesto<!-- budget -->;      
**Proyecto**: es posible vincular un proyecto.     

En la cuadrícula es posible construir el árbol del presupuesto<!-- budget -->, utilizando los botones de la barra de herramientas. Cada nodo raíz del árbol contendrá la suma de las cantidades<!-- quantità --> y de los importes de los distintos nodos secundarios. Los nodos finales del árbol son aquellos en los que es posible ingresar los gastos, a través de los siguientes campos:      
**Tipo de gastos**: según la selección del [Tipo de gasto<!-- Tipo spesa -->](/docs/configurations/tables/crm/sales-forecast/expenses-type), será posible introducir una Descripción, una Cuenta<!-- Conto --> o un Artículo;       
**Unidad de medida**: contiene la unidad de medida para usar en el gasto;      
**Cantidad total<!-- Quantità totale -->**: contiene la cantidad total que se dividirá entre los diferentes Períodos<!-- Periodi --> del presupuesto<!-- budget -->;       
**Precio unitario**: este campo se completa automáticamente con el resultado de la división entre *Importe total<!-- Importo totale -->* y *Cantidad total<!-- Quantità totale -->*:        
**Importe total<!-- Importo totale -->**: contiene el importe total a dividir entre los diferentes Períodos<!-- Periodi --> del presupuesto<!-- budget -->.        
En la cuadrícula derecha, *Cantidad total<!-- Quantità totale -->* e *Importe total<!-- Importo totale -->* se dividen por el número de Períodos<!-- Periodi --> previstos por el [Período del presupuesto<!-- Periodo budget -->](/docs/configurations/tables/crm/sales-forecast/budget-period) introducido en la cabecera. De este modo será posible consultar el presupuesto<!-- Budget --> para cada período. La cuadrícula *Período<!-- Periodo -->* se puede modificar utilizando los botones de la cinta de opciones, en caso de que el calendario deba diferir del estándar codificado.