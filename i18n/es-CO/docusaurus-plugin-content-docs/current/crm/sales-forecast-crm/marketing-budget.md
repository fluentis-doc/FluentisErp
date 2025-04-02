---
title: marketing budget
sidebar_position: 5
---

Con esta funcionalidad es posible crear presupuestos por período.  
Los datos de la cabecera son los siguientes:  
**periodo budget**: en este campo es necesario ingresar el [Período (Periodo)](/docs/configurations/tables/crm/sales-forecast/budget-period) que se utilizará como unidad de división del año; según el período seleccionado, los montos ingresados posteriormente se distribuirán automáticamente en los diversos períodos, reflejados en la tabla siguiente *periodi*;  
**descrizione**: contiene una descripción libre;  
**data fine validità**: contiene una eventual fecha de cierre del presupuesto;  
**progetto**: es posible vincular un proyecto.  

En la cuadrícula se puede construir el árbol del presupuesto, utilizando los botones en la barra de herramientas. Cada nodo raíz del árbol contendrá la Suma de las cantidades y de los montos de los varios nodos subyacentes. Los nodos finales del árbol son aquellos en los que es posible ingresar los gastos, a través de los siguientes campos:  
**tipo spese**: según la selección del [Tipo de gasto (Tipo spesa)](/docs/configurations/tables/crm/sales-forecast/expenses-type), será posible ingresar una Descripción, una Cuenta o un Artículo;  
**unità di misura**: contiene la unidad de medida a utilizar para el gasto;  
**quantità totale**: contiene la cantidad total a dividir en los diversos Períodos del presupuesto;  
**prezzo unitario**: este campo se completa automáticamente con el resultado de la división entre *importo totale* y *quantità totale*:  
**importo totale**: contiene el Monto total a dividir en los diversos Períodos del presupuesto.  
En la cuadrícula de la derecha, *quantità totale* y *importo totale* se dividen por el número de Períodos previstos por el [Período del presupuesto (Periodo budget)](/docs/configurations/tables/crm/sales-forecast/budget-period) ingresado en la cabecera. De esta manera, será posible consultar el Presupuesto para cada período. La cuadrícula *periodo* es modificable utilizando los botones de la ribbon bar, en caso de que el calendario deba apartarse del estándar codificado.