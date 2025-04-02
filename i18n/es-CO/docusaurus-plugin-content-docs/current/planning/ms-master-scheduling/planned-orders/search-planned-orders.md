---
title: Búsqueda de Órdenes Planificadas (Ricerca Ordini Pianificati)
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Botones específicos (Pulsanti specifici)*:

> [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): a través de este botón es posible abrir la pantalla relacionada con los parámetros MRP del artículo;             
> [Lista de materiales (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite abrir la pantalla relacionada con la lista de materiales del artículo;  
> [Ciclos de trabajo (Cicli di lavoro)](/docs/erp-home/registers/production/routes/new-route): permite visualizar el ciclo de trabajo y las fases de producción relacionadas del artículo.

*Campos específicos (Campi specifici)*:

**data inizio**: para los pedidos planificados de compra o trabajo por encargo representa la fecha en que debe ser enviado al proveedor el pedido de compra que será generado posteriormente con la liberación del mismo; para los pedidos planificados de producción, esta fecha representa la fecha de inicio previsto de la primera fase de procesamiento del ciclo del artículo;  
**Fecha FOB (free on Board) (Data FOB)**: representa la fecha que se calcula sumando a la *Fecha de inicio prevista* el *Tiempo de Aprovisionamiento* ingresado en la pestaña [Fornitori Preferenziali](/docs/erp-home/registers/items/create-new-item) del artículo objeto del pedido planificado, y se gestiona solo para los artículos con tipo de aprovisionamiento *Compra*;  
**Fecha ETA (Estimated Time of Arrival) (Data ETA)**: representa la fecha que se calcula sumando a la *Fecha FOB* el *Lead Time de Envío* ingresado también en la pestaña *Fornitori Preferenziali* del artículo objeto del pedido planificado, y se gestiona solo para los artículos con tipo de aprovisionamiento *Compra*;      
**data fine**: para los pedidos planificados de compra o trabajo por encargo representa la fecha en que debe recibirse el suministro, y por lo tanto coincidirá con la fecha de recepción prevista de la línea del pedido del proveedor que será generada posteriormente con la liberación del mismo. Para los pedidos planificados de producción, esta fecha representa la fecha de fin prevista de la última fase de procesamiento del ciclo del artículo;  
**Desde disponibilidad mínima (Da disponibilità minima)**: el indicador está activo solo si el pedido planificado ha sido generado utilizando el procedimiento de *Programación general* y si, en los [Parámetros de Programación (Parametri di Schedulazione)](/docs/planning/ms-master-scheduling/general-schedule), el indicador que permite *Considerar la disponibilidad mínima en el periodo* está activo. Este indicador se activa cuando la *Fecha de disponibilidad mínima* en el periodo de programación es posterior a la fecha de necesidad; de lo contrario, estará deshabilitado;            
**quantità confermata**: es diferente de cero solo si el pedido resulta generado por el procesamiento del MRP;  
**quantità impegnata**: es la cantidad que se considera comprometida a la fecha actual del artículo;  
**tassativo**: si está activo, el indicador indicará que el pedido planificado de producción no se puede mover en relación a la fecha de inicio establecida en su interior; esto se considera solo por el procedimiento de [Programación a capacidad finita (Schedulazione a capacità finita)](/docs/planning/ms-master-scheduling/finite-capacityscheduling).

Dentro de la cuadrícula, los pedidos se visualizarán con diferentes colores según el *Tipo de pedido planificado* (si de compra, producción o trabajo por encargo). Esta configuración se asigna dentro de los [Parámetros de requerimientos de materiales (Parametri fabbisogno dei materiali)](/docs/configurations/parameters/production/resource-requirements-parameters), en la cuadrícula correspondiente donde se puede elegir el color de fondo de la línea o del texto de los diferentes pedidos.

Desde este formulario también es posible ingresar un nuevo pedido, haciendo clic en el botón [Insertar pedido (Inserisci ordine)](/docs/planning/ms-master-scheduling/planned-orders/new-planned-order).