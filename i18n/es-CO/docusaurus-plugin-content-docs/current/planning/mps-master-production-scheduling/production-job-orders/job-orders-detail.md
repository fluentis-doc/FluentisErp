---
title: Órdenes de producción (detalles) (Commesse di produzione (dettagli))
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

Según el estado de la orden (programada, ejecutiva, etc.), la fila de la orden tendrá un color diferente. Los colores que se pueden asignar al estado de la orden se establecen dentro de los [Parámetros MS](/docs/configurations/parameters/production/mps-parameters), en la sección *Colores de las órdenes*.  

Desde este formulario también se puede *crear nuevas órdenes*, tanto **monoproducto** como **multiproducto** haciendo clic en los respectivos botones presentes en la *Ribbon Bar*: [Insertar orden]( /docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order) y [Insertar orden multiproducto](/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order).

Al hacer doble clic en una de las órdenes presentes en la cuadrícula de resultados, se accederá a los detalles de la orden, cuyos datos se abordarán en los artículos Inserción de nueva orden monoproducción e Inserción de nueva orden multiproducción.

La columna *Costificada (Costificata)*, si el indicador está activo, indica que la orden ya tiene al menos una costificación en su interior.

:::note **Nota bien (Nota bene)** 
La diferencia entre el formulario **commesse di produzione** y el formulario **Órdenes de producción (detalles) (Commesse di produzione (dettagli))** es que en este último es posible visualizar en la cuadrícula también los artículos presentes dentro de la orden, mientras que en el que no tiene detalles solo se visualizan los datos de encabezado de las órdenes de producción.     
:::

*Botones específicos*:

> **modifica data commessa**: permite variar la *fecha de mercancía lista (data di merce pronta)* y *fecha prevista de finalización (di prevista fine)* de las órdenes seleccionadas simplemente indicando la fecha en el pop-up y confirmando;  
> **duplica commessa**: permite duplicar la orden seleccionada;  
> **cambia priorità**: permite cambiar la prioridad asignada a la orden;  
> [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): a través de este botón se puede abrir la pantalla relacionada con los parámetros MRP del artículo;    
> [Lista de materiales (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite abrir la pantalla relacionada con la lista de materiales del artículo;  
> [Ciclos de trabajo (Cicli di lavoro)](/docs/erp-home/registers/production/routes/new-route): permite visualizar el ciclo de trabajo y las fases de producción relacionadas del artículo.