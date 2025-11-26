---
title: Configuraciones técnicas
sidebar_position: 9
ai_generated: true
---

Para configurar correctamente la conexión entre el software de gestión Fluentis<!-- gestionale Fluentis --> y el servicio Fluentis Business Hub, es necesario:
1) configurar en Arm el servicio Fluentis BizLink Tools Service<!-- servizo Fluentis BizLink Tools Service -->                
2) haber comunicado el nombre de la instancia del Servidor SQL y el nombre de la base de datos<!-- Database --> que se desea habilitar para la conexión al servicio Fluentis Business Hub (si esto no se realizó al momento de la suscripción del contrato, o si esta información ha cambiado, es posible hacerlo enviando un correo a la dirección fatturazione.elettronica@fluentis.com).

**CONFIGURAR EL SERVICIO FLUENTIS BIZLINK TOOLS SERVICE**

Para activar correctamente la comunicación entre el sistema de gestión Fluentis<!-- gestionale Fluentis --> y el servicio Fluentis Business Hub, es necesario configurar el servicio Fluentis BizLink Tool Service, un servicio instalado automáticamente con la versión de la aplicación 538 (y siguientes) y que permite gestionar la conexión a varias bases de datos<!-- database --> con un único usuario Bizlink.

:::tip[N.B.]
Para la correcta gestión de las configuraciones técnicas se recomienda actualizar siempre Fluentis<!-- Fluentis --> instalando todos los parches publicados para la versión correspondiente.
:::

Para la configuración del servicio Fluentis Bizlink Tools Service:
1) detener la ejecución del servicio Fluentis BizLink Tool Service (si está activo)
2) desde el módulo ARM acceder a la opción de menú Conexiones > Usuarios bizlink para crear el usuario al que se asociarán las conexiones individuales:
3) en la cuadrícula de Usuarios Bizlink, verificar la presencia del nuevo usuario (configurado con la versión 538) FlConServiceUser (Effe elle Con Service User), configurado con la contraseña FlConServiceUserPwd (Effe elle Con Service User Pwd).                 
Para el usuario FlConServiceUser deben seleccionarse, en la cuadrícula en la parte derecha de la pantalla, las conexiones a las bases de datos<!-- Connessioni ai database --> para las cuales el servicio Fluentis BizLink Tool Service deberá estar activo (es decir, las bases de datos en las que se desea operar la facturación electrónica).
4) Reiniciar el servicio Fluentis BizLink Tool Service

Para verificar que el servicio haya leído las configuraciones del usuario introducido, es posible monitorear el archivo de log Fluentis.Bizlink.Tools.Service.Exe.txt, presente en la carpeta de instalación del servidor Fluentis en la subcarpeta "\Bin\Logs" (en caso de duda sobre cuál sea la carpeta de instalación de Fluentis<!-- Fluentis -->, verificar en la ventana de propiedades del punto 1 la “ruta del archivo ejecutable” del servicio). El log debe presentar un registro para el inicio del servicio (“Starting service”) y registros de tipo INFO de asociaciones de conectores (entre los que se encuentra “INFO Fluentis.BizLink.Tools.Service.FluentisBusinessHubInputConnector” que corresponden a la facturación electrónica). Si solo aparece la línea de inicio del servicio, significa que no se encontraron conectores Bizlink, o que no se ha configurado correctamente el usuario de conexión en Arm.
Si aparece un registro de tipo ERROR, debe gestionarse el error específico señalado tras haber actualizado Fluentis a la última patch disponible.

Por ejemplo, si el mensaje de error es “El equipo debe estar habilitado para la delegación y la cuenta de usuario actual debe estar configurada para permitir la delegación”, se trata de un problema relacionado con la forma en que Windows gestiona los certificados de seguridad, que puede corregirse modificando una clave en el registro de configuración:
1. Presione Windows + R
2. Escriba “regedit” y presione enter
3. Navegue a HKEY_LOCAL_MACHINE\Software\Microsoft\Cryptography\Protect\Providers\df9d8cd0-1501-11d1-8c7a-00c04fc297eb
4. En la carpeta, haga clic derecho y seleccione Nuevo > Valor DWORD (32 Bits)
5. Renómbralo como ‘ProtectionPolicy’
6. Clic derecho sobre ‘Protection Policy’
7. Haga clic en Modificar y cambie la casilla “Datos de valor” a 1 y seleccione Base: Hexadecimal

**COMUNICAR EL NOMBRE DE LA INSTANCIA SQL Y EL NOMBRE DE LA BASE DE DATOS<!-- DATABASE -->**

Para identificar de forma única la base de datos<!-- database --> para la comunicación con el servicio Fluentis Business Hub, es necesario obtener, de los servidores de instalación de los sistemas de gestión Fluentis<!-- gestionali Fluentis -->, el nombre de la instancia SQL y el nombre de la base de datos<!-- database --> donde se desee activar la Facturación Electrónica. Esta información puede recopilarse directamente desde la conexión visualizada en SQL Server Management Studio.
O bien, ejecutando la instrucción SQL “select @@servername” sobre la conexión activa. En particular, este método es necesario si el servidor fue renombrado después de la instalación de Fluentis<!-- Fluentis -->: en este caso, aunque se muestre el nombre nuevo, SQL Server mantiene registrado el anterior.
Esta información debe comunicarse a Fluentis<!-- Fluentis --> enviando un correo electrónico a la dirección fatturazione.elettronica@fluentis.com, de lo contrario, cuando se realiza la Verificación de Conexión al servicio FBH en el menú Configuración de Facturación Electrónica, se devolverá el error “Las credenciales son válidas pero la ejecución en este contexto no está permitida”.