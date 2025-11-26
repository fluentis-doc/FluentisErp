---
title: Nueva Solicitud de Intervención
sidebar_position: 2
ai_generated: true
---

En este formulario es posible ingresar los datos de la **Solicitud de intervención<!-- Richiesta di intervento -->**:

**Tipo de solicitud de intervención<!-- Tipo richiesta Intervento -->**: contiene la [tipología de la solicitud](/docs/configurations/tables/project-management/request-intervention-type/);

**Número/Fecha<!-- Numero/Data -->**: contiene el número y la fecha de la solicitud;

**Cliente**: contiene el cliente al que está destinada;

**Contacto**: contiene el *Contacto* al que está destinada la solicitud, que podría no ser aún cliente;

**Categoría de actividad<!-- Categoria di attività -->**: indica la categoría de actividad que se pueda relacionar con la solicitud;

**Maestro de instalaciones<!-- Anagrafica impianti -->**: es posible asociar una instalación a la solicitud;

**Artículo**: es posible asociar un artículo; si no se indica, en la fase de selección del proyecto se propone el artículo registrado en la línea de proyecto.

**Proyecto**: contiene el [Proyecto](/docs/project-management/projects/search-projects-intro/) relacionado;

**Ticket**: contiene el ticket de la solicitud de intervención, junto con su severidad;

**SLA**: contiene el nivel de Acuerdo de Nivel de Servicio (Service Level Agreement), necesario para el estudio de prioridades;

**Estado de la solicitud de intervención<!-- Stato richiesta di intervento -->**: indica el estado actual de la solicitud, entre Abierto, Planificado, Liberado o Cerrado;

**Fecha de confirmación<!-- Data conferma -->**: contiene la fecha en la que se confirma la solicitud;

**Fecha de cierre<!-- Data chiusura -->**: contiene la fecha de cierre de la solicitud, si aplica.


Este formulario también contiene pestañas específicas.

**Pestaña Recursos<!-- Tab Risorse -->**

Esta pestaña contiene el recurso para el cual se realiza la solicitud de intervención<!-- richiesta di intervento -->. Además, se encuentran varias pestañas que indican la obligatoriedad o no del Técnico y la Fecha, y un indicador para saber si la Actividad es facturable. Los demás datos son:

**Recurso<!-- Risorsa -->**: contiene el recurso registrado en Gestión de Proyectos > Gestión de Recursos;

**Empleado<!-- Dipendente -->**: contiene la cuenta Empleado, normalmente coincidente con el recurso;

**Desde fecha solicitada<!-- Da data richiesta -->**: contiene fecha y hora de inicio de la actividad;

**Hora inicio de pausa<!-- Ora inizio pausa -->**: contiene fecha y hora de inicio de la pausa;

**Hora fin de pausa<!-- Ora fine pausa -->**: contiene fecha y hora de fin de la pausa;

**Hasta fecha solicitada<!-- A data richiesta -->**: contiene fecha y hora de fin de la actividad;

**Tiempo efectivo<!-- Tempo effettivo -->**: contiene el tiempo de ejecución, calculado en base a los datos anteriores;

**Descripción**: contiene una descripción libre de la solicitud.

Es posible asociar recursos adicionales en la cuadrícula **Recursos asociados<!-- Risorse collegate -->**.

 
**Pestaña Solución<!-- Tab Soluzione -->**

En esta pestaña es posible describir libremente la solicitud de intervención<!-- richiesta di intervento --> en los espacios **Solución** y **Nota**. 

**Pestaña Estimación<!-- Tab Stima -->**

En esta pestaña se encuentra la estimación del Proyecto relacionado con la Solicitud de intervención<!-- Richiesta di intervento -->. Si no existiera alguna relación, estos campos igualmente pueden ser modificados libremente:

**Unidad de medida<!-- Unità di misura -->**: indica la unidad de medida a considerar para la cuantificación;

**Lista de precios de venta<!-- Listino di vendita -->**: contiene una posible [Lista de precios](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list/) a considerar;

**Cantidad<!-- Quantità -->**: se indica la cantidad de unidades necesarias;

**Precio neto unitario<!-- Prezzo netto unitario -->**: se indica el precio neto unitario;

**Importe total<!-- Importo totale -->**: se indica el importe total.

En la fase de selección del proyecto, se proponen los siguientes valores: 

- Lista de precios de venta
- Ticket
- Descripción
- Categoría de actividad 
- Facturable
- Actividad de valor agregado
- Artículo (si no fue ya ingresado)
- Unidad de medida si no fue ya ingresada
- Precio neto unitario

El precio neto unitario se actualiza con el valor presente en el proyecto si el artículo ya está presente en la solicitud de intervención<!-- richiesta intervento --> y coincide con el artículo en el proyecto.
O bien, si el artículo no está presente en la solicitud de intervención<!-- richiesta intervento --> y se asigna desde el proyecto, en consecuencia también el precio será actualizado con el valor presente en el proyecto.