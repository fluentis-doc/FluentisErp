---
title: richiesta ferie/permessi
sidebar_position: 4
---

La solicitud de Vacaciones/Permisos permite al usuario solicitar directamente desde Fluentis los días u horas de vacaciones, permisos o enfermedad.  
La información requerida y que debe ingresar el usuario es:

**Desde fecha/Hasta fecha (Da data/A data)**: se ingresa el período de tiempo, en días y horas, para el cual se desea hacer la solicitud; al dejar 00:00 como hora de inicio y fin, en la fase de generación de la declaración de actividades se utilizarán como hora de inicio y fin aquellas configuradas en el turno del recurso;  

**risorsa**: se propone el recurso del usuario que accede a Fluentis;  

**motivo**: contiene la lista de las causas de ausencia configuradas para la empresa.  

**gestito**: indicador que muestra si la solicitud ya ha sido gestionada. Se puede habilitar manualmente o al finalizar el procedimiento realizado con el botón "Confirmar Período (Conferma Periodo)"  

**data creazione**: es la fecha de creación de la solicitud;  

**Usuario de creación (Utente di creazione)**: contiene el usuario que ha creado la solicitud y se propone el mismo usuario que accede;  

**manager**: lista de usuarios entre los cuales seleccionar la figura del gerente para el recurso; dato no obligatorio;  

**team leader**: lista de usuarios entre los cuales seleccionar la figura del líder del equipo para el recurso; dato no obligatorio;  

**email**: se propone el correo electrónico del usuario que realiza la solicitud;  

**email cc**: dirección de correo electrónico que se incluirá en CC en el correo automático de aprobación de la solicitud; si se selecciona un líder de equipo y/o gerente, sus respectivos correos electrónicos se incluirán en CC;  

**soggetto**: descripción de la solicitud;  

**nota**: es posible detallar eventualmente la solicitud;  

**risultati**: posibles resultados si la solicitud se gestiona a través de un flujo de trabajo (por ejemplo, confirmada, cancelada, motivo de cancelación, etc.)  

En la barra de ribbon están presentes los siguientes botones:  

**conferma periodo**: al hacer clic en el botón se abrirá la pantalla para ingresar el proyecto de referencia, la categoría de actividad y el indicador para crear un período de vacaciones en la declaración de actividades con los datos recién ingresados.  
A la recurso de referencia es posible enviar una notificación por correo electrónico.  
Al finalizar el procedimiento, se habilitará el indicador "Gestionado (Gestito)"  

**rollback del periodo**: permite eliminar las actividades generadas por la confirmación del período y restaurar el indicador Gestionado.  

**apri il calendario delle risorse**: abre la visualización del calendario que permite seleccionar diferentes recursos y evaluar las citas presentes.  

Posibles escenarios relacionados con la Confirmación del período con superposiciones:  

- si la solicitud de vacaciones ya tiene el indicador "Gestionado (Gestito)" habilitado: se hará la pregunta "Solicitud ya gestionada, ¿deseas proceder nuevamente?"  
Si se responde no, todo el proceso quedará bloqueado.  
Si se responde sí, se volverán a ingresar las declaraciones de actividad de vacaciones y se sobrescribirán aquellas generadas anteriormente por la solicitud de vacaciones (si están presentes).  

- si la solicitud de vacaciones tiene el indicador "Gestionado (Gestito)" deshabilitado pero existen otras declaraciones de actividad en el mismo período:  
"Las actividades se superponen: *detalle de actividades* - *vacaciones* ¿Deseas continuar?"  

Si se responde Sí: se generarán todas las declaraciones de actividad para el período de vacaciones solicitado.  

Si se responde No: solo se generarán las declaraciones de actividad para los días sin otras declaraciones de actividad presentes.  

Si en el día hubiera presente incluso solo una declaración de actividad para un horario laboral parcial, el día será omitido y no se registrarán vacaciones.