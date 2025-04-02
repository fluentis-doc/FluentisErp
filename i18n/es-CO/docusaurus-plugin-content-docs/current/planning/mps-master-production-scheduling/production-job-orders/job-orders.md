---
title: commesse di produzione
sidebar_position: 2
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

Según el estado de la orden (ya sea programada, ejecutiva, etc.), la línea de la orden tendrá un color diferente. Los colores que se pueden asignar al estado de la orden se establecen dentro de los [Parámetros MS (Parametri MS)](/docs/configurations/parameters/production/mps-parameters), en la sección *colori delle commesse*.  

Desde este formulario también es posible *crear nuevas órdenes*, tanto **monoprodotto** como **multiprodotto** haciendo clic en los respectivos botones presentes en la *Barra de herramientas (Ribbon Bar)*: [Insertar orden (Inserisci commessa)](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order) y [Insertar orden multiproducto (Inserisci commessa multiprodotto)](/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order).

Al hacer doble clic en una de las órdenes presentes en la cuadrícula de resultados, se accederá a los detalles de la orden, cuyos datos se profundizarán en los artículos *Inserción de nueva orden monoproduto (Inserimenti nuova commessa monoprodotto)* e *Inserción de nueva orden multiprodotto (Inserimento nuova commessa multiprodotto)*.

La columna *Costificada (Costificata)*, si está activa, indica que la orden ya tiene al menos una costificación interna.

*Botones específicos*:

> **modifica data commessa**: permite cambiar la *fecha de mercancía lista (data di merce pronta)* y *fecha prevista de finalización (di prevista fine)* de las órdenes seleccionadas, simplemente indicando la fecha en el pop-up y confirmando;  
> **duplica commessa**: permite duplicar la orden seleccionada;  
> **cambia priorità**: permite cambiar la prioridad asignada a la orden;  
> **sequenza commesse**: a través de esta funcionalidad se puede acceder a la secuencia de órdenes en la que se podrán visualizar las órdenes según la secuencia que se les ha atribuido, incluso mediante un gráfico;  
> **capacità centri di lavoro**: a través de este botón se accede a la ventana relativa a la capacidad de los centros de trabajo; en esta ventana es posible visualizar, filtrando por el centro de trabajo y por el periodo de tiempo deseado, el compromiso de dicho centro mediante un gráfico y la lista de las órdenes de producción previstas;  
> **Detalles de la orden de producción (Dettagli ordine di produzione)**: permite visualizar los detalles de la orden.