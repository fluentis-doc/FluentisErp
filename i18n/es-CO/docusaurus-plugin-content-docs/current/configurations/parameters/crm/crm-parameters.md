---
title: parametri crm
sidebar_position: 1
---

Los parámetros del CRM se encuentran en la ruta **Parámetros > CRM > parametri crm**, y a través de la configuración de estos parámetros se definen algunas funcionalidades del módulo, especialmente en relación con el cambio automático de estado de la actividad tras algunas operaciones específicas.

- **probabilità successo vinto**: el campo hace referencia a la tabla [Probabilidad de éxito (Probabilità di successo)](/docs/configurations/tables/crm/opportunities/probability-progress) y permite definir el % de probabilidad de éxito que Fluentis deberá establecer en la oportunidad en caso de que se mueva la oportunidad a la sección de oportunidades ganadas en el formulario de Tablero Kan Ban de Progreso de Oportunidades (Opportunity Progress Kan Ban board);

- **probabilità successo perso**: el campo hace referencia a la tabla [Probabilidad de éxito (Probabilità di successo)](/docs/configurations/tables/crm/opportunities/probability-progress) y permite definir el % de probabilidad de éxito que Fluentis deberá establecer en la oportunidad en caso de que se mueva la oportunidad a la sección de oportunidades perdidas en el formulario de Tablero Kan Ban de Progreso de Oportunidades (Opportunity Progress Kan Ban board);

- **numero massimo di email**: en este campo se debe definir el número máximo de correos electrónicos que Fluentis puede enviar en caso de envío de un boletín informativo (Newsletter);

- **Intervalo de envío de correo electrónico (segundos) (Intervallo invio posta elettronica (secondi))**: en este campo deben establecerse los segundos que Fluentis deberá permitir pasar entre el envío de un correo y otro en caso de envío de un boletín informativo (Newsletter).

- **unità di misura giorni**: es necesario indicar la unidad de medida que Fluentis debe utilizar para los días. 

- **unità di misura ore**: es necesario indicar la unidad de medida predeterminada que Fluentis debe utilizar para las horas.

- **riferimenti ticket**: en este campo se puede indicar la codificación a utilizar para la referencia de ticket que se mostrará en la oferta vinculada al ticket y creada a través del procedimiento de *Creación de ofertas desde ticket* (presente en el módulo de Tickets).

- **Buscar contacto CRM también como contacto padre (Ricerca contatto CRM anche come contatto padre)**: si está habilitado, habilita por defecto el mismo indicador en todas las pantallas de búsqueda donde se prevé: Búsqueda de ofertas, Búsqueda de contactos, Búsqueda de informes de visita, pestañas de ofertas e informes de visita en el registro de contacto CRM.

- **Crear contacto CRM desde nuevo registro de cliente (Crea contatto CRM da nuova anagrafica cliente)**: si está habilitado, al ingresar un nuevo Cliente dentro de un contacto, generará automáticamente un nuevo contacto CRM si no ya está presente.