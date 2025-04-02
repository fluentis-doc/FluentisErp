---
title: Configuraciones de Bizlink para la interconexión con SDI (Configurazioni Bizlink per l'interscambio con lo SDI)
sidebar_position: 7
---

Fluentis permite el intercambio de documentos electrónicos entrantes y salientes con SDI. Es necesario verificar las siguientes configuraciones antes de aprovechar esta funcionalidad, ya que Fluentis debe poder comunicarse con el exterior a través de la herramienta de BizLink.

## Tabla de Configuración de documentos electrónicos (Tabella Configurazione documenti elettronici)

Esta tabla es accesible en Fluentis desde Configuración (Configurazione) > Tablas (Tabelle) > Configuración general (Impostazione generali) > Configuración de documentos electrónicos (Configurazione documenti elettronici).  
El primer control a realizar es hacer clic en *verifica connessione* en la barra de herramientas después de abrir la tabla. Si todas las configuraciones se han realizado correctamente, la conexión estará habilitada.

:::danger ATENCIÓN
En caso de que reciban un error de contexto durante la verificación de la conexión, significa que al momento de la activación del servicio se comunicaron un nombre de servidor y un nombre de base de datos incorrectos. Será necesario contactar con el soporte para proporcionar los datos correctos.
:::

## Tabla de Usuarios de BizLink (Tabella Utenti BizLink)

Esta tabla es accesible en ARM desde Inicio (Home) > Conexiones (Connessioni) > Usuarios de BizLink (Utenti BizLink).  
En la cuadrícula izquierda están los Usuarios codificados con la contraseña, mientras que en la cuadrícula derecha están las Conexiones disponibles con los nombres de servidor y base de datos respectivos.  
En esta tabla es necesario verificar que los Usuarios establecidos en la cuadrícula de la izquierda tengan el indicador 'E' activo en la cuadrícula de la derecha.

## Servicios de BizLink (Servizi di BizLink)

En este punto, es necesario abrir la aplicación Servicios en su PC y detener el servicio de BizLink.  
Una vez detenido el servicio, es necesario abrir la carpeta Servicios (la ruta la pueden encontrar en las propiedades del servicio BizLink) y verificar las claves dentro del archivo de configuración. Estas deben coincidir con las siguientes:

```xml
        <"GlobalUser" value="FlConServiceUser"/>
        <"GlobalPwd" value="FlConServiceUserPwd"/>
        <"GlobalUrl" value="http://localhost/arm/"/>
```
El usuario y la contraseña deben ser iguales a los que están presentes en la Tabla de Usuarios de BizLink analizada previamente. Si no están seguros, recomendamos hacer una copia y pegar.  

En este punto, se puede eliminar el archivo de texto presente en la carpeta Servicios y reiniciar el servicio de BizLink. De este modo, el archivo de texto se volverá a crear. Si no está presente el archivo de texto, ejecute el archivo .exe.  
Si el archivo de texto no presenta errores, el servicio estará activo.

:::danger ATENCIÓN
Si el archivo .exe se cierra de inmediato, entonces el servicio sigue estando activo o hay algún problema en el archivo de configuración.
:::