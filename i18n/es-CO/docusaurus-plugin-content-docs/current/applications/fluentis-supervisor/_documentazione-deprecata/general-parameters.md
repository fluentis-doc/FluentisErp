---
title: Parámetros Globales
sidebar_label: Parámetros Globales
sidebar_position: 1
ai_generated: true
---

Supervisor permite definir parámetros<!-- parametri --> que normalmente se utilizan en la ejecución de actividades, tareas o eventos específicos.  
Una primera distinción entre los diferentes parámetros<!-- parametri --> concierne al ámbito de aplicación de los mismos, y se distinguen entre:
* *parámetros locales<!-- parametri locali -->*
* *parámetros globales<!-- parametri globali -->*

Los parámetros locales<!-- parametri locali --> son operativos y visibles dentro de actividades, tareas o eventos específicos, dependiendo de dónde se definan.
Los parámetros globales<!-- parametri globali -->, en cambio, son operativos y visibles en todas las actividades, tareas o eventos y pueden reutilizarse siempre que sea necesario.

Los parámetros globales<!-- parametri globali --> son visibles y configurables abriendo el menú lateral **Configuración** > **Parámetros** > **Supervisor** > **Parámetros Globales<!-- Parametri Globali -->**

Al hacer clic en parámetros generales<!-- parametri generali --> se abrirá el formulario de gestión de parámetros generales<!-- parametri generali -->, en el que es posible definirlos.  
En concreto, están presentes parámetros relacionados con:
* *Correo electrónico<!-- Email -->*
* *Base de datos externa<!-- Database esterno -->*
* *HTML*
* *Generales<!-- Generali -->*

![alt text](/img/it-it/applications/supervisor/supervisor4.jpg)  

> <mark> Parámetros de Correo electrónico<!-- Parametri Email --></mark>  
Se refieren a los parámetros de autenticación en el servidor de correo electrónico SMTP deseado.
* SMTPServer -> se trata de la dirección IP pública del servidor de correo o su hostname si se ha configurado el servidor DNS.
* FromEmail -> dirección de correo completa desde la que queremos enviar los mensajes, la cual debe estar definida como alias dentro del servidor de correo.
* UseTLS -> es la opción de cifrado utilizada para el intercambio de mensajes, empleada en la gran mayoría de los casos de comunicación por correo electrónico.
* AuthenticationUser y AuthenticationPassword -> son el usuario definido en el servidor de correo y la contraseña correspondiente.
* SMTPServerPort -> es el puerto utilizado por el servidor SMTP para el envío de correos (normalmente 587, 465 o 25).

> <mark> Parámetros de Base de datos externa<!-- Parametri Db esterno --></mark>:  
Se refieren a la posibilidad de especificar una base de datos externa a la actualmente utilizada por Fluentis.
* Servidor<!-- Server --> -> es el endpoint de la instancia del motor de base de datos SQL Server.
* Base de datos<!-- Database --> -> es el nombre de la base de datos.
* Usuario y contraseña<!-- User e password --> -> son el usuario con el que se accede a la instancia del motor de base de datos (normalmente el usuario sa) y la contraseña correspondiente.

> <mark> Parámetros HTML </mark>:  
Se refieren a la posibilidad de definir elementos de estilo HTML utilizando hojas de estilo CSS.

> <mark> Parámetros Generales<!-- Parametri Generali --> </mark>:  
Se refieren al usuario y la contraseña con los cuales se ejecuta Supervisor.


<!-- 
:::tip Tutorial en video<!-- Video Tutorial -->
En este enlace puedes encontrar el **[video](https://youtu.be/FCcnCDgtLV8)** que ilustra el procedimiento mencionado anteriormente.
::: -->