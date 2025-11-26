---
title: Url Ejecución Evento
sidebar_label: Url Ejecución Evento
sidebar_position: 4
ai_generated: true
---

Esta funcionalidad ofrece la posibilidad de ejecutar un *Evento*<!-- Evento --> desde un origen/app externa.

Dentro del formulario principal del [Evento](event-intro)<!-- Evento-->, ubicado en la cinta de opciones, está presente el botón **Generar URL de ejecución<!-- Genera URL di esecuzione -->**. Al seleccionar el *Evento*<!-- Evento --> desde la cuadrícula inferior y luego hacer clic, la aplicación mostrará una ventana que contiene:

- **Parámetro task URL de redirección<!-- Parametro task URL di reindirizzamento -->**: se encarga de redirigir al usuario a otra página después de ejecutar la URL. Este parámetro puede configurarse en el *Task*, dentro del método *TaskCompleted* (agregando el valor de la URL al *Dictionary* y configurando un parámetro *Task* sin la marca *IsInputParamter*)

- **Fecha de vencimiento<!-- Data di scadenza -->** de la URL generada

- **Generar URL<!-- Genera URL -->** contendrá la URL generada tras hacer clic en el botón