---
title: Parámetros de CRM
sidebar_position: 1
---

Los parámetros del CRM se encuentran en la ruta **Parámetros > CRM > Parámetros de CRM**, y a través de la configuración de estos parámetros se definen algunas funcionalidades del módulo, especialmente en relación con el cambio automático de estado de la actividad tras algunas operaciones específicas.

- **Progreso de probabilidad de WON**: el campo hace referencia a la tabla [Progreso de probabilidad](/docs/configurations/tables/crm/opportunities/probability-progress) y permite definir el % de progreso de probabilidad que Fluentis deberá establecer en la oportunidad en caso de que se mueva la oportunidad a la sección de oportunidades ganadas en el formulario de Tablero Kan Ban de Progreso de Oportunidades;

- **Progreso de probabilidad PERDIDO**: el campo hace referencia a la tabla [Progreso de probabilidad](/docs/configurations/tables/crm/opportunities/probability-progress) y permite definir el % de progreso de probabilidad que Fluentis deberá establecer en la oportunidad en caso de que se mueva la oportunidad a la sección de oportunidades perdidas en el formulario de Tablero Kan Ban de Progreso de Oportunidades;

- **Número máximo de correos electrónicos**: en este campo se debe definir el número máximo de correos electrónicos que Fluentis puede enviar en caso de envío de un boletín informativo;

- **Intervalo de envío de correos electrónicos (segundos)**: en este campo deben establecerse los segundos que Fluentis deberá permitir pasar entre el envío de un correo y otro en caso de envío de un boletín informativo.

- **Unidad de medida de días**: es necesario indicar la unidad de medida que Fluentis debe utilizar para los días. 

- **Unidad de medida para horas**: es necesario indicar la unidad de medida predeterminada que Fluentis debe utilizar para las horas.

- **Referencias de ticket**: en este campo se puede indicar la codificación a utilizar para la referencia de ticket que se mostrará en la oferta vinculada al ticket y creada a través del procedimiento de *Creación de oferta de ventas a partir de boletos* (presente en el módulo de Boletos).

- **Buscar contacto CRM también como contacto padre**: si está habilitado, habilita por defecto el mismo indicador en todas las pantallas de búsqueda donde se prevé: Búsqueda de ofertas, Búsqueda de contactos, Búsqueda de informes de visita, pestañas de ofertas e informes de visita en el registro de contacto CRM.

- **Crear contacto CRM a partir de nuevo contacto de cliente**: si está habilitado, al ingresar un nuevo Cliente dentro de un contacto, generará automáticamente un nuevo contacto CRM si no ya está presente.