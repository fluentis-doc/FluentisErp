---
title: Configuraciones Bizlink para el intercambio con la SDI
sidebar_position: 7
ai_generated: true
---

Fluentis permite el intercambio de documentos electrónicos entrantes y salientes con la SDI (Sistema de Intercambio). Es necesario verificar las siguientes configuraciones antes de utilizar esta funcionalidad, ya que Fluentis debe poder comunicarse con el exterior a través del servicio de BizLink.  
Las configuraciones a revisar son tres:
- Tabla de configuración de documentos electrónicos<!-- Tabella configurazione documenti elettronici -->.
- Tabla de usuarios de BizLink<!-- Tabella utenti BizLink -->.
- Servicio BizLink<!-- Servizio BizLink -->.

## Tabla de Configuración de documentos electrónicos<!-- Tabella Configurazione documenti elettronici -->

Esta tabla es accesible en Fluentis desde Configuración > Tablas > Configuración general > Configuración de documentos electrónicos<!-- Configurazione > Tabelle > Impostazione generali > Configurazione documenti elettronici -->.    
El primer control a realizar es hacer clic en *Verificar conexión<!-- Verifica connessione -->* en la ribbon bar después de abrir la tabla. Si todas las configuraciones se han realizado correctamente, la conexión estará habilitada como en la imagen siguiente.

![image](/img/it-it/finance-area/e-invoice/bizlink/checkConnections.png)

:::danger ATENCIÓN<!-- ATTENZIONE -->
En caso de que reciba un error de contexto durante la verificación de la conexión, o cualquier mensaje diferente al que aparece en la imagen anterior, significa que al activar el servicio se introdujeron un nombre de servidor MSSQL o un nombre de base de datos incorrectos. Será necesario contactar al comercial de referencia para proporcionar los datos correctos según lo indicado abajo.
:::

Para poder informar el nombre correcto del servidor MSSQL y de la base de datos, ejecute la siguiente consulta en la base de datos de Fluentis<!-- database di Fluentis --> sobre la que desea activar el servicio de facturación electrónica y comunique el resultado mediante captura de pantalla y texto para poder copiarlo, al comercial con quien ha suscrito el contrato FBH.    

```sql
select @@SERVERNAME as NombreServidor, DB_NAME() as NombreBaseDatos
```


## Tabla de Usuarios BizLink<!-- Tabella Utenti BizLink -->

Esta tabla es accesible en ARM desde Inicio > Conexiones > Usuarios BizLink<!-- Home > Connessioni > Utenti BizLink -->.    
En la cuadrícula de la izquierda están los Usuarios codificados con contraseña, mientras que en la cuadrícula de la derecha están las Conexiones disponibles con los correspondientes nombres de servidor y base de datos.
En esta tabla es necesario comprobar que los Usuarios configurados en la cuadrícula de la izquierda tengan la bandera de 'activo' en la cuadrícula de la derecha para las conexiones donde deseamos que funcione el servicio FBH. Además, estas credenciales deberán corresponder a las credenciales de GlobalUser y GlobalPwd del servicio de BizLink.

![image](/img/it-it/finance-area/e-invoice/bizlink/bizlink-users.png)

![image](/img/it-it/finance-area/e-invoice/bizlink/bizlink-users2.png)

## Servicio de BizLink<!-- Servizio di BizLink -->
El servicio de BizLink puede instalarse tanto en servidores Windows como en servidores GNU/Linux con Docker.  
Para todos los detalles relativos a la instalación del servicio, consulte la documentación específica disponible en el siguiente [**ENLACE**<!-- LINK -->](https://docs.fluentis.com/Advanced/FluentisLiveUpdate/docs/integration/BizLink/).  
A continuación veremos cómo configurar el servicio en ambos escenarios y finalmente cómo verificar su correcto funcionamiento.   


### Configuración en entorno Windows Server<!-- Configurazione in ambiente Windows Server -->

Para asegurarse de que los parámetros de configuración del servicio de BizLink estén correctamente configurados, es necesario abrir el archivo de configuración `appsettings.json`.  
Normalmente, este archivo es accesible en la siguiente ruta `C:\Program Files (x86)\Fluentis S.R.L\Fluentis BizLink SelfApp Service`.   
Es necesario asegurarse de que dentro del archivo appsettings.json existan los siguientes pares clave-valor.  

```json
  "GlobalUser": "FlConServiceUser",
  "GlobalPwd": "FluentisUserPwd!",
  "GlobalUrl": "http://localhost/Arm/",
```
Estos pares clave-valor deben coincidir con los parámetros indicados en ARM según el párrafo anterior.  
En caso de que realice variaciones en el archivo `appsettings.json` es necesario proceder a reiniciar el servicio de BizLink. 

---



### Configuración en entorno GNU/Linux con Docker<!-- Configurazione in ambiente GNU/Linux con Docker. -->
Para asegurarse de que los parámetros de configuración del servicio de BizLink estén correctamente configurados, es necesario abrir el archivo de configuración `appsettings.json`.  
Normalmente, este archivo es accesible en la siguiente ruta `/opt/fluentis/fluentis/bizLink`.   
Es necesario asegurarse de que dentro del archivo appsettings.json existan los siguientes pares clave-valor.  

```json
  "GlobalUser": "FlConServiceUser",
  "GlobalPwd": "FluentisUserPwd!",
  "GlobalUrl": "http://localhost/Arm/",
```

En caso de que realice variaciones en el archivo `appsettings.json` es necesario proceder a reiniciar el contenedor de BizLink. 


 ```
sudo docker compose down && sudo docker compose up -d
 ```
### BizLink Monitor 
BizLink Monitor es una página web que permite al usuario tener visibilidad de los conectores configurados en Fluentis.  
Si en esta página ve los dos conectores FBH como en la imagen de abajo, significa que ha configurado correctamente BizLink.  
Para acceder a **BizLink Monitor** es necesario escribir en la barra de direcciones del navegador web la siguiente dirección:
```
http://localhost:5070/
```
:::danger Atención
El término localhost debe ser reemplazado por el nombre del servidor donde está instalado BizLink.    
:::

![image](/img/it-it/finance-area/e-invoice/bizlink/bizlink-monitor.png)

## Conclusiones

Para poder configurar el servicio de facturación electrónica en el cliente, hacen falta 2 puntos fundamentales:  
1. Contrato FBH y formulario "Configuración de documentos electrónicos" funcionando.  
2. Servicio de BizLink activo y correctamente configurado.  
 
Si el punto 1 no funciona, verifique con el comercial de referencia.  
Si el punto 2 no funciona, contacte con el soporte de Fluentis.