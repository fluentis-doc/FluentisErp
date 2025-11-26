---
title: Búsqueda de Órdenes Planificadas
sidebar_position: 3
ai_generated: true
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Botones específicos<!-- Pulsanti specifici -->*:

> [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): a través de este botón es posible abrir la pantalla relativa a los parámetros MRP del artículo;
> [Lista de materiales](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite abrir la pantalla relativa a la lista de materiales<!-- distinta base --> del artículo;
> [Ciclos de trabajo](/docs/erp-home/registers/production/routes/new-route): permite visualizar el ciclo de trabajo y las fases de producción relativas del artículo.
> **Activar obligatorio<!-- Attiva tassativo -->**: permite activar el flag **Obligatorio<!-- Tassativo -->** dentro de todas las órdenes planificadas<!-- ordini pianificati --> seleccionadas;
> **Desactivar obligatorio<!-- Disattiva tassativo -->**: permite desactivar el flag **Obligatorio<!-- Tassativo -->** dentro de todas las órdenes planificadas<!-- ordini pianificati --> seleccionadas.

*Campos específicos<!-- Campi specifici -->*:

**Fecha de inicio<!-- Data inizio -->**: para las órdenes planificadas<!-- ordini pianificati --> de compra<!-- acquisto --> o de subcontrato<!-- conto lavoro --> representa la fecha en la que se debe enviar al proveedor la orden de compra<!-- ordine di acquisto --> que posteriormente se generará con la liberación de la misma. Para las órdenes planificadas de producción esta fecha representa la fecha prevista de inicio de la primera fase de procesamiento<!-- lavorazione --> del ciclo del artículo;
**Fecha FOB** (Free on Board): representa la fecha que se calcula sumando a la *Fecha de inicio prevista* el *Tiempo de aprovisionamiento<!-- Tempo di Approvvigionamento -->* ingresado en la pestaña [Proveedores Preferentes](/docs/erp-home/registers/items/create-new-item) del artículo objeto de la orden planificada, y se gestiona solo para los artículos con tipo de aprovisionamiento *Compra<!-- Acquisto -->*;
**Fecha ETA** (Estimated Time of Arrival): representa la fecha que se calcula sumando a la *Fecha FOB* el *Lead Time de Envío* ingresado también en la pestaña *Proveedores Preferentes* del artículo objeto de la orden planificada, y se gestiona solo para los artículos con tipo de aprovisionamiento *Compra<!-- Acquisto -->*;
**Fecha de finalización<!-- Data fine -->**: para las órdenes planificadas<!-- ordini pianificati --> de compra o de subcontrato representa la fecha en la que debe recibirse el suministro y, por tanto, coincidirá con la fecha prevista de recepción de la línea de la orden de compra<!-- ordine fornitore --> que se generará posteriormente con la liberación de la orden. Para las órdenes planificadas de producción esta fecha representa la fecha prevista de finalización de la última fase de procesamiento del ciclo del artículo;
**Por disponibilidad mínima<!-- Da disponibilità minima -->**: el flag está activo solo si la orden planificada<!-- ordine pianificato --> ha sido generada utilizando el procedimiento de *Programación general* y si, en los [Parámetros de Programación](/docs/planning/ms-master-scheduling/general-schedule), el flag que permite *Considerar la disponibilidad mínima en el periodo* está activo. Este flag se activa cuando la *Fecha de la disponibilidad mínima* en el periodo de programación<!-- schedulazione --> es posterior a la fecha de necesidad; de lo contrario, estará deshabilitado;
**Cantidad confirmada<!-- Quantità confermata -->**: es distinta de cero solo si la orden ha sido generada por el procesamiento del MRP;
**Cantidad comprometida<!-- Quantità impegnata -->**: es la cantidad que resulta estar comprometida a la fecha actual del artículo;
**Obligatorio<!-- Tassativo -->**: si está activo, el flag indicará que la orden planificada<!-- ordine pianificato --> de producción no es movible respecto a la fecha de inicio establecida en su interior; esto solo es considerado por el procedimiento de [Programación a capacidad finita](/docs/planning/ms-master-scheduling/finite-capacityscheduling).

Dentro de la cuadrícula, las órdenes se visualizarán con diferentes colores según el *Tipo de orden planificada<!-- Tipo di ordine pianificato -->* (ya sea de compra, producción o subcontrato<!-- conto lavoro -->). Esta configuración se da dentro de los [Parámetros de necesidad de materiales](/docs/configurations/parameters/production/resource-requirements-parameters), en la cuadrícula correspondiente donde se puede elegir el color de fondo de la fila o del texto de las distintas órdenes.

Desde este mismo formulario es posible ingresar una nueva orden, haciendo clic en el botón [Insertar orden](/docs/planning/ms-master-scheduling/planned-orders/new-planned-order).