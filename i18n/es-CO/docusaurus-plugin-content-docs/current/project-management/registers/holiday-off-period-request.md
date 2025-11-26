---
title: Solicitud de Vacaciones/Permisos
sidebar_position: 4
ai_generated: true
---

La solicitud de Vacaciones/Permisos<!-- Richiesta Ferie/Permessi --> permite al usuario solicitar directamente desde Fluentis los días u horas de vacaciones, permisos o enfermedad. 
La información requerida e ingresada por parte del usuario es la siguiente:

**Desde fecha/Hasta fecha<!-- Da data/A data -->**: se ingresa el periodo de tiempo, en días y horas, para el que se desea realizar la solicitud; dejando 00:00 como hora de inicio y fin, en la fase de generación de la declaración de actividad se utilizarán como hora de inicio y fin las que están configuradas en el turno de la recurso<!-- risorsa -->; 

**Recurso<!-- Risorsa -->**: se propone el recurso<!-- risorsa --> del usuario que accede a Fluentis; 

**Motivo**: contiene la lista de causali<!-- causali --> de ausencia configuradas para la compañía. 

**Gestionado<!-- Gestito -->**: marca que indica si la solicitud ya fue gestionada. Se puede habilitar manualmente o al finalizar el procedimiento realizado con el botón "Confirmar periodo<!-- Conferma Periodo -->"

**Fecha de creación<!-- Data creazione -->**: es la fecha de creación de la solicitud;

**Usuario de creación<!-- Utente di creazione -->**: contiene el usuario que creó la solicitud y se propone el mismo usuario que accede;

**Manager**: lista de usuarios entre los cuales seleccionar la figura de manager para el recurso<!-- risorsa -->; dato no obligatorio;

**Team Leader**: lista de usuarios entre los cuales seleccionar la figura de team leader para el recurso<!-- risorsa -->; dato no obligatorio;

**Correo electrónico<!-- Email -->**: se muestra el correo electrónico del usuario que realiza la solicitud;

**Correo electrónico CC<!-- Email CC -->**: dirección de correo que se incluirá en copia en el correo automático de aprobación de la solicitud; si se selecciona team leader y/o manager, sus correos electrónicos respectivos se incluirán en copia;

**Asunto<!-- Soggetto -->**: descripción de la solicitud;

**Nota**: es posible detallar, si se desea, la solicitud;

**Resultados<!-- Risultati -->**: eventuales resultados si la solicitud es gestionada mediante workflow (ej. confirmada, cancelada, motivo de cancelación, etc.)

En la cinta de opciones se encuentran los siguientes botones:

**Confirmar periodo<!-- Conferma periodo -->**: al pulsar el botón se abrirá la pantalla para ingresar el proyecto de referencia, la categoría de actividad y la marca para Crear un periodo de vacaciones en la declaración de actividad con los datos recién ingresados.
A la recurso<!-- risorsa --> de referencia se le puede enviar una notificación por correo electrónico.
Al finalizar el procedimiento se habilitará la marca "Gestionado<!-- Gestito -->"

**Rollback del periodo**: permite eliminar las actividades generadas por la confirmación del periodo y restaurar la marca Gestionado<!-- Gestito -->.

**Abrir el calendario de recursos<!-- Apri il calendario delle risorse -->**: Abre la visualización de calendario que permite seleccionar diferentes recursos<!-- risorse --> y evaluar los compromisos presentes.

Posibles escenarios relativos a la Confirmación de periodo con solapamientos: 

- la solicitud de vacaciones ya tiene la marca "Gestionado<!-- Gestito -->" habilitada: se generará la advertencia "Solicitud ya gestionada, ¿quieres proceder nuevamente?" 
Si responde no, se detendrá todo el proceso.
Si responde sí, se volverán a insertar las declaraciones de actividad de vacaciones y se sobrescribirán aquellas generadas anteriormente por la solicitud de vacaciones (si las hay).

- la solicitud de vacaciones tiene la marca "Gestionado<!-- Gestito -->" deshabilitada pero existen otras declaraciones de actividad en el mismo periodo: 
"Las actividades se solapan: *detalle de actividades* - *vacaciones* ¿Quieres continuar?"

Respondiendo Sí: se generarán todas las declaraciones de actividad para el periodo de vacaciones solicitado

Respondiendo No: solo se generarán las declaraciones de actividad para los días sin otras declaraciones de actividad presentes

Si en el día también existiera al menos una declaración de actividad para un horario laboral parcial, ese día igualmente será omitido y no se insertarán vacaciones.