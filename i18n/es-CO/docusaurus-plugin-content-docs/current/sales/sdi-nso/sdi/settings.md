---
title: Configuraciones técnicas (Impostazioni tecniche)
sidebar_position: 9
---

Para configurar correctamente la conexión entre el sistema Fluentis y el servicio Fluentis Business Hub, es necesario:  
1) configurar en Arm el servicio Fluentis BizLink Tools Service  
2) haber comunicado el nombre de la instancia del Servidor SQL y el nombre de la Base de Datos a habilitar para la conexión al servicio Fluentis Business Hub (si no se hizo al momento de la suscripción del contrato, o si esta información ha cambiado, se puede hacer enviando un correo a la dirección fatturazione.elettronica@fluentis.com).

**CONFIGURAR EL SERVICIO FLUENTIS BIZLINK TOOLS SERVICE**           

Para activar correctamente la comunicación entre el sistema Fluentis y el servicio Fluentis Business Hub, es necesario configurar el servicio Fluentis BizLink Tool Service, un servicio instalado automáticamente con la versión de aplicación 538 (y posteriores) que permite gestionar la conexión a múltiples bases de datos con un único usuario Bizlink.                  

:::tip[N.B.]
Para la correcta gestión de las configuraciones técnicas, se recomienda actualizar siempre Fluentis instalando todos los parches liberados para la versión en cuestión.
:::

Para la configuración del servicio Fluentis Bizlink Tools Service:  
1) detener la ejecución del servicio Fluentis BizLink Tool Service (si está activo)  
2) desde el módulo ARM acceder al menú Conexiones > Usuarios bizlink para crear el usuario al que se asociarán las conexiones individuales:  
3) en la cuadrícula de Usuarios Bizlink verificar la presencia del nuevo usuario (configurado con la versión 538) FlConServiceUser (Effe elle Con Service User), establecido con la contraseña FlConServiceUserPwd (Effe elle Con Service User Pwd).                 
Junto al usuario FlConServiceUser, deberán seleccionarse, en la cuadrícula en la parte derecha de la pantalla, las Conexiones a las bases de datos para las cuales el servicio Fluentis BizLink Tool Service deberá estar activo (es decir, las bases de datos en las que se tiene la intención de activar la facturación electrónica).  
4) Reiniciar el servicio Fluentis BizLink Tool Service                

Para verificar que el servicio ha registrado las configuraciones del usuario ingresado, se puede monitorear el archivo de log Fluentis.Bizlink.Tools.Service.Exe.txt, presente en la carpeta de instalación del servidor Fluentis, en la subcarpeta “\Bin\Logs” (en caso de duda sobre cuál es la carpeta de instalación de Fluentis, ver en la ventana de propiedades del punto 1 el “ruta del archivo ejecutable” del servicio). El log debe mostrar un registro para el inicio del servicio (“Starting service”) y registros de tipo INFO de conexiones de los conectores (entre ellos “INFO Fluentis.BizLink.Tools.Service.FluentisBusinessHubInputConnector”, que son los de la facturación electrónica). En caso de que solo esté presente la línea de inicio del servicio, significa que no se encontraron los conectores Bizlink, o que no se configuró correctamente el usuario de conexión en Arm.  
Si aparece un registro de tipo ERROR, se deberá gestionar el error específico señalado después de actualizar Fluentis a la última versión disponible.               

Por ejemplo, si el mensaje de error es “El equipo debe ser de confianza para la delegación y la cuenta de usuario actual debe ser configurada para permitir la delegación”, se trata de un problema relacionado con la forma en que Windows gestiona los certificados de seguridad, que se puede corregir modificando una clave en el registro de configuración:  
1. Presionar Windows + R  
2. Escribir “regedit” y presionar enter  
3. Navegar a HKEY_LOCAL_MACHINE\Software\Microsoft\Cryptography\Protect\Providers\df9d8cd0-1501-11d1-8c7a-00c04fc297eb  
4. En la carpeta, hacer clic con el botón derecho y seleccionar Nuevo > Valor DWORD (32 Bit)  
5. Renombrarlo ‘ProtectionPolicy’  
6. Hacer clic derecho en ‘Protection Policy’  
7. Hacer clic en Modificar y cambiar la casilla “Datos de valor” a 1 y seleccionar Base: Hexadecimal  

**COMUNICAR EL NOMBRE DE LA INSTANCIA SQL Y EL NOMBRE DE LA BASE DE DATOS**           

Para identificar de manera única la base de datos para la comunicación con el servicio Fluentis Business Hub, es necesario obtener, desde los servidores de instalación de los sistemas Fluentis, el nombre de la instancia SQL y el nombre de la base de datos en la que se tiene la intención de activar la Facturación Electrónica. Esta información puede ser obtenida directamente desde la conexión visualizada en SQL Server Management Studio.         
O bien, ejecutando la instrucción SQL “select @@servername” sobre la conexión activa. En particular, este método es necesario si el servidor fue renombrado después de la instalación de Fluentis: en este caso, aunque se muestre el nuevo nombre, SQL Server mantiene registrado el antiguo.  
Esta información debe ser comunicada a Fluentis mediante un correo a la dirección electrónica fatturazione.elettronica@fluentis.com; de lo contrario, al ejecutar la Verificación de Conexión con el servicio FBH en el menú de Configuración de Facturación Electrónica, se devolverá el error “Las credenciales son válidas, pero la ejecución en este contexto no está permitida”.