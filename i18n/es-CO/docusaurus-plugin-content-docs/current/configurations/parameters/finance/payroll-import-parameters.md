---
title: Parámetros de importación de nómina
sidebar_position: 3
---

## Datos de la tabla 

Los parámetros presentes son necesarios para gestionar la funcionalidad de importación de registros contables relacionados con las nóminas de los empleados a través de archivos .csv (formato Zucchetti) adquiridos a través del servicio Bizlink.

Aquí se configura para cada empresa el **día**, la **causal** contable y el **usuario** que se utilizará para crear las registraciones.

**Permitir búsqueda en tabla**: (siempre se debe establecer) hace que se busquen los mapeos (transcodificaciones) de las cuentas en la tabla de transcodificación correspondiente;  
 
**Agrupación por centro de costos / Agrupar por empleado**: indica a Fluentis qué tipo de archivo esperar (de Zucchetti se puede crear un archivo agrupado por cdc o por empleado, que difieren en número y posición de las columnas a leer).

Nota: Los últimos dos campos no están relacionados con esta importación de nómina, sino con la importación para el controlling, que actualmente se realiza mediante la importación de una hoja de Excel y, por lo tanto, en realidad no son utilizados.

## Generalidades de la importación de nómina Bizlink 

La funcionalidad prevé la creación de una carpeta monitoreada por el servicio Bizlink donde depositar los archivos a importar, logrando el procesamiento e importación automática.

A pesar de que es posible crear la carpeta que es monitoreada por el conector Bizlink para la importación directamente en el servidor, por razones de seguridad, se prefiere evitar que los usuarios accedan al servidor y establecer la carpeta de importación en un PC cliente.

## Configuración del servicio Bizlink local y otros parámetros necesarios 

1. Crear un usuario Bizlink en Arm (formulario Usuarios Bizlink) que se utilizará en el PC interesado para la importación.  
Ejemplo: Nombre: PC-Nómina Contraseña: xxxxx Cuadrícula de Conexiones: Marcar Está activo en la conexión de producción efectivamente utilizada.

2. Instalar Bizlink en el PC manualmente  
   A través del comando ejecutado desde cmd como administrador.  

`net_dir>\InstallUtil "<fluentis_dir>\Tools\Service\Fluentis.BizLink.Tools.Service.exe"`  

Donde net_dir es la carpeta de instalación del framework .net y se encuentra en %WINDIR%\Microsoft.NET\Framework64\versión del framework, mientras que fluentis_dir es la carpeta de instalación de Fluentis.

![](/img/it-it/configurations/parameters/finance/payroll1.png)

3. Copiar archivo de la carpeta bin de Bizlink del servidor al cliente (cada actualización de versión deberá hacerse) excepto el archivo de log (destacado en la imagen de abajo).

![](/img/it-it/configurations/parameters/finance/payroll2.png)

El recorrido estándar es este: C:\Program Files (x86)\Fluentis\Fluentis\Bin\Tools\Service

4. Modificar el conector llamado: **Zucchetti_PaymentData** de esta manera (en particular añadiendo el usuario Bizlink - PC-Nómina - que se acaba de crear en el campo Identificativo).

![](/img/it-it/configurations/parameters/finance/payroll5.png)

Los recorridos de los archivos (ejemplo C:\Temp\Bizlink\Incoming; C:\Temp\Bizlink\Processed; C:\Temp\Bizlink\Failed) deben estar presentes en el PC del usuario y el pool Fluentis debe poder leer desde esa carpeta. Si no funciona, intente otorgar permisos de control total a todos.  
Establecer también un identificador que se registre posteriormente en el archivo de configuración de Bizlink.

5. Ajustar el archivo de configuración de Bizlink con usuario, contraseña, servidor e identificador. El archivo se llama **Fluentis.BizLink.Tools.Service.exe.config**.  
Modificarlo como en la imagen de abajo.

![](/img/it-it/configurations/parameters/finance/payroll4.png)

De esta manera, el servicio de Bizlink instalado en el PC trabajará solo con ese conector.

6. Iniciar Bizlink.

## Gestión del archivo a importar 

![](/img/it-it/configurations/parameters/finance/payroll7.png)

Preste atención al hecho de que actualmente en Fluentis se requiere formatear mes/año, mientras que comúnmente el archivo es exportado por Zucchetti como fecha completa; es necesario cambiarlo en Excel hasta que se revise.

![](/img/it-it/configurations/parameters/finance/payroll8.png)

Luego se deben gestionar las transcodificaciones de la empresa y del plan de cuentas.  

![](/img/it-it/configurations/parameters/finance/payroll9.png)

Y eventualmente de los centros de costos.

Por último, es necesario gestionar LOS PARÁMETROS DE IMPORTACIÓN DE NÓMINA como se especificó anteriormente.