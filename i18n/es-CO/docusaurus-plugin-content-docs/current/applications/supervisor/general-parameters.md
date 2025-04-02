---
title: Parámetros Globales (Parametri Globali)
sidebar_label: Parámetros Globales (Parametri Globali)
sidebar_position: 1
---

Supervisor permite definir parámetros que suelen utilizarse en la ejecución de actividades, tareas o eventos específicos.  
Una primera distinción entre los diferentes parámetros concierne al ámbito de aplicación de los mismos, y se distingue entre:  
* *parámetros locales (parametri locali)*  
* *parámetros globales (parametri globali)*  

Los parámetros locales son operativos y visibles dentro de actividades, tareas o eventos específicos, según donde se definan.  
Los parámetros globales, en cambio, son operativos y visibles dentro de todas las actividades, tareas o eventos, y pueden ser reutilizados cada vez que sea necesario.  

Los parámetros globales son visibles y configurables abriendo el menú lateral **configurazione** > **parametri** > **Supervisor** > **Parámetros Globales (Parametri Globali)**  

Al hacer clic en parámetros generales, se abrirá el formulario de gestión de los parámetros generales con los que es posible definirlos.  
En específico, hay parámetros relacionados con:  
* *email*  
* *database esterno*  
* *HTML*  
* *generali*  

![texto alternativo](/img/it-it/applications/supervisor/supervisor4.jpg)  

> <mark> Parámetros de Email (Parametri Email) </mark>  
Se refieren a los parámetros de autenticación al servidor de correo electrónico SMTP deseado.  
* SMTPServer -> se trata de la dirección IP pública del servidor de correo o de su nombre de host en caso de que se haya configurado el servidor DNS.  
* FromEmail -> se trata de la dirección completa de correo desde la cual queremos enviar los correos, que deberá definirse como alias dentro del servidor de correo.  
* UseTLS -> se trata de la opción de encriptación utilizada para el intercambio de mensajes, que se utiliza en la gran mayoría de los casos de comunicación por correo.  
* AuthenticationUser y Authentication Password -> se trata del usuario definido en el servidor de correo con la contraseña correspondiente.  
* SMTPServerPort -> se trata del puerto utilizado por el servidor SMTP para enviar correos (normalmente 587, 465 o 25).  

> <mark> Parámetros de Base de Datos Externa (Parametri Db esterno) </mark>:  
Se refieren a la posibilidad de especificar una base de datos externa a la actual en uso por Fluentis.  
* Server -> se trata del endpoint de la instancia del motor de base de datos de SQL Server.  
* Database -> se trata del nombre de la base de datos.  
* User y password -> se trata del usuario con el que se accede a la instancia del motor de base de datos (normalmente el usuario sa) y de la contraseña correspondiente.  

> <mark> Parámetros HTML (Parametri HTML) </mark>:  
Se refieren a la posibilidad de especificar elementos de estilo HTML utilizando hojas de estilo CSS.  

> <mark> Parámetros Generales (Parametri Generali) </mark>:  
Se refieren a usuario y contraseña con los que se ejecuta Supervisor.  


<!-- 
:::tip Video Tutorial
A este link pueden encontrar el **[video](https://youtu.be/FCcnCDgtLV8)** que ilustra el procedimiento mencionado anteriormente.
::: -->