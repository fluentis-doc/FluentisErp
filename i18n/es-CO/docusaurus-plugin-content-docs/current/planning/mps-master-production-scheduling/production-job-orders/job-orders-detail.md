---
title: Órdenes de producción
sidebar_position: 3
ai_generated: true
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

Según el estado de la orden<!-- commessa --> (es decir, programada, ejecutiva, etc.), la fila de la orden<!-- commessa --> tendrá un color diferente. Los colores que se pueden asociar al estado de la orden<!-- stato della commessa --> se establecen dentro de los [Parámetros MS](/docs/configurations/parameters/production/mps-parameters), en la sección *Colores de las órdenes<!-- Colori delle commesse -->*.

Desde este formulario también es posible *crear nuevas órdenes<!-- commesse -->*, tanto **monoproducto** como **multiproducto** haciendo clic en los respectivos botones presentes en la *Ribbon Bar*: [Insertar orden<!-- Inserisci commessa -->](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order) y [Insertar orden multiproducto<!-- Inserisci commessa multiprodotto -->](/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order).

Haciendo doble clic en una de las órdenes<!-- commesse --> presentes en la cuadrícula de resultados, se accederá al detalle de la orden<!-- commessa -->, cuyos datos se abordan en los artículos sobre Inserción de nueva orden monoproducto<!-- Inserimenti nuova commessa monoprodotto --> e Inserción de nueva orden multiproducto<!-- Inserimento nuova commessa multiprodotto -->.

La columna *Costeada<!-- Costificata -->*, si el indicador está activo, indica que la orden<!-- commessa --> ya tiene al menos una costificación en su interior.

:::note **Nota bene**
La diferencia entre el formulario **Órdenes de producción<!-- Commesse di produzione -->** y el formulario **Órdenes de producción (detalles)<!-- Commesse di produzione (dettagli) -->** es que en este último es posible visualizar en la cuadrícula también los artículos presentes dentro de la orden<!-- commessa -->, mientras que en el que no tiene detalles solo se visualizan los datos de cabecera de las órdenes de producción<!-- commesse di produzione -->.
:::

*Botones específicos<!-- Pulsanti specifici -->*:

> **Modificar fecha de orden<!-- Modifica data commessa -->**: permite cambiar la *fecha de mercancía lista<!-- data di merce pronta -->* y *de finalización prevista<!-- di prevista fine -->* de las órdenes<!-- commesse --> seleccionadas simplemente indicando la fecha en el pop up y confirmando;
> **Duplicar orden<!-- Duplica commessa -->**: permite duplicar la orden<!-- commessa --> seleccionada;
> **Cambiar prioridad<!-- Cambia priorità -->**: permite cambiar la prioridad asignada a la orden<!-- commessa -->;
> [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): mediante este botón es posible abrir la pantalla relativa a los parámetros MRP del artículo;
> [Lista de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite abrir la pantalla referente a la lista de materiales<!-- distinta base --> del artículo;
> [Rutas de trabajo<!-- Cicli di lavoro -->](/docs/erp-home/registers/production/routes/new-route): permite visualizar la ruta de trabajo<!-- ciclo di lavoro --> y sus respectivas fases de producción del artículo.