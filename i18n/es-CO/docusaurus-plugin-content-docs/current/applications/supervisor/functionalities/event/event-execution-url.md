---
title: URL de Ejecución de Evento (Url Esecuzione Evento)
sidebar_label: URL de Ejecución de Evento (Url Esecuzione Evento)
sidebar_position: 4
---

Esta funcionalidad ofrece la posibilidad de ejecutar un *evento* desde un origen/app externa.

Dentro del formulario principal del [Evento (Evento)](event-intro), ubicado en la cinta de opciones, se encuentra el botón **genera url di esecuzione**. Una vez seleccionado el *evento* de la cuadrícula inferior y luego clicado, la aplicación mostrará una ventana que contiene:

- **parametro task url di reindirizzamento** se encarga de redirigir al usuario a otra página después de haber ejecutado la URL. Este parámetro puede configurarse en la *task*, dentro del método *TaskCompleted*, añadiendo el valor de la URL al *Diccionario (Dictionary)* y configurando un parámetro *task* sin el indicador *IsInputParameter*.

- **data di scadenza** de la URL generada.

- **genera url** contendrá la URL generada al hacer clic en el botón.