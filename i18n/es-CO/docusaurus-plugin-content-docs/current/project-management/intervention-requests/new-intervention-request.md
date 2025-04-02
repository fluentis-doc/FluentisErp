---
title: Nueva Solicitud de Intervención (Nuova Richiesta di Intervento)
sidebar_position: 2
---

En este formulario es posible ingresar los datos de la **Solicitud de intervención**:

**tipo richiesta intervento**: contiene la [tipología de la solicitud (tipologia della richiesta)](/docs/configurations/tables/project-management/request-intervention-type/);  

**numero/data**: contiene el número y la fecha de la solicitud;  

**cliente**: contiene el cliente al que está destinada;  

**contatto**: contiene el eventual *Contacto* al que está destinada la solicitud, el cual podría no ser aún cliente;  

**categoria di attività**: indica la eventual categoría de actividad relacionada con la solicitud;  

**anagrafica impianti**: es posible vincular una instalación a la solicitud;  

**articolo**: es posible vincular un artículo; si no se indica, durante la selección del proyecto se propondrá el artículo insertado en la línea del proyecto.  

**progetto**: contiene el [Proyecto (Progetto)](/docs/project-management/projects/search-projects-intro/) vinculado;  

**ticket**: contiene el ticket de la solicitud de intervención, con la respectiva severidad;  

**SLA**: contiene el nivel de Service Level Agreement necesario para el estudio de prioridades;  

**Estado de la solicitud de intervención (Stato richiesta di intervento)**: indica el estado actual de la solicitud, entre Abierto (Aperto), Planificado (Pianificato), Liberado (Rilasciato) o Cerrado (Chiuso);  

**data conferma**: contiene la fecha en que se confirma la solicitud;  

**data chiusura**: contiene la eventual fecha de cierre de la solicitud.


En este formulario también hay pestañas específicas.

**Pestaña Recursos (Tab Risorse)**

Esta pestaña contiene el recurso por el cual se está realizando la solicitud de intervención. También hay algunas pestañas que indican la obligatoriedad o no del Técnico y de la Fecha, y un indicador que indica si la Actividad es facturable. Los demás datos son:

**risorsa**: contiene el recurso codificado en Gestión de Proyectos (Gestione Progetti) > Gestión de Recursos (Gestione Risorse);  

**dipendente**: contiene la cuenta del Empleado, que generalmente coincide con el recurso;  

**da data richiesta**: contiene la fecha y hora de inicio de la actividad;  

**ora inizio pausa**: contiene la fecha y hora de inicio de la pausa;  

**ora fine pausa**: contiene la fecha y hora de fin de la pausa;  

**a data richiesta**: contiene la fecha y hora de fin de la actividad;  

**tempo effettivo**: contiene el tiempo de ejecución, calculado a partir de los datos anteriores;  

**descrizione**: contiene una descripción libre de la solicitud.  

Es posible vincular recursos adicionales en la cuadrícula **risorse collegate**.


**Pestaña Solución (Tab Soluzione)**

En esta pestaña es posible describir libremente la solicitud de intervención en los espacios **soluzione** y **nota**.  

**Pestaña Estimación (Tab Stima)**

En esta pestaña se encuentra la estimación del Proyecto vinculado a la Solicitud de intervención. Si no hay un vínculo, estos campos son modificables:

**unità di misura**: indica la unidad de medida a considerar para la cuantificación;  

**listino di vendita**: contiene un eventual [Lista (Listino)](/docs/sales/sales-price-list/sales-price-list/insert-sales-price-list/) a considerar;  

**quantità**: se indica la cantidad de unidades necesarias;  

**prezzo netto unitario**: se indica el precio neto unitario;  

**importo totale**: se indica el importe total.  

Durante la selección del proyecto, se proponen los siguientes valores:

- Lista de precios
- Ticket
- Descripción
- Categoría de actividad 
- Facturable
- Actividad de valor añadido
- Artículo (si no se ha insertado ya)
- Unidad de medida si no se ha insertado ya
- Precio neto unitario

El precio neto unitario se actualizará con el valor presente en el proyecto si el artículo ya está presente en la solicitud de intervención y coincide con el artículo en el proyecto.  
O si el artículo no está presente en la solicitud de intervención y se asigna desde el proyecto, por lo tanto, el precio también se actualizará con el valor presente en el proyecto.