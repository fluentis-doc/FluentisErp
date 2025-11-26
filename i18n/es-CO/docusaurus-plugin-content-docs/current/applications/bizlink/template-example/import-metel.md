---
title: Importación METEL
sidebar_position: 6
ai_generated: true
---

**BizLink** permite la importación de listas de precios Metel<!-- listini Metel -->, y se ofrecen dos flujos para dicha importación. La única operación que debe realizar el usuario es configurar el conector para efectuar la importación.

:::danger[Largo del archivo<!-- Lunghezza del file -->]
En Fluentis solo se admiten 2 tipos de archivos, ¡los de 178 y 233 caracteres!
:::

:::danger[Formato del archivo<!-- Formato del file -->]
En Fluentis solo se admite el formato ANSI del archivo.
:::

:::tip[Procesamiento de archivo en formato incorrecto<!-- Processo file in formato non corretto -->]
Si el archivo no cumple con las dos características anteriormente mencionadas, BizLink moverá el archivo a la carpeta de archivos procesados y no escribirá nada en los documentos entrantes, ya que "descarta" el archivo.
:::

### Requisitos previos<!-- Prerequisiti -->
- Servicio de BizLink instalado y en funcionamiento
- Lista de precios Metel (archivo en formato txt) válido

:::tip[Sitio oficial Metel<!-- Sito ufficiale Metel -->]
Para cualquier duda sobre el archivo, visite el sitio: https://listinipubblici.metel.it/ en el cual está disponible la funcionalidad "Verifica Listino"
:::

### Visión general del parser y de los flujos<!-- Visione Parser e Flussi -->

:::note[Nota importante<!-- Nota bene -->]
En esta sección se presentan y explican los flujos ya presentes en Fluentis. En la siguiente sección se explica cómo configurar el conector y efectuar la importación.
:::

#### Parser

Metel cuenta con un parser llamado FluentisEDIExtendedParser

![](/img/it-it/applications/bizlink/import-metel/1.png)

Dentro de él hay dos objetos parser, uno para el archivo de 178 carac. y otro para el de 233

![](/img/it-it/applications/bizlink/import-metel/2.png)

Tomando como ejemplo el objeto parser para el archivo de 233, se puede ver cómo se importa cada campo y en qué posición debería estar.
Esto puede resultar útil en caso de errores de importación<!-- errori di import -->, ya que con la propiedad que genera el error podemos saber en qué posición se encuentra en el archivo.

![](/img/it-it/applications/bizlink/import-metel/3.png)

#### Flujo<!-- Flusso -->

Metel cuenta con un flujo llamado METEL

![](/img/it-it/applications/bizlink/import-metel/4.png)

Ese flujo tiene una operación de flujo dentro llamada FLOW_OP_MetlPriceList

![](/img/it-it/applications/bizlink/import-metel/5.png)

Dicha operación de flujo tiene 2 documentos de flujo diferenciados por la cantidad de caracteres del archivo

![](/img/it-it/applications/bizlink/import-metel/6.png)

El documento de flujo luego define qué objeto parser usar para procesar el archivo

![](/img/it-it/applications/bizlink/import-metel/7.png)

### Creación del conector<!-- Creazione connettore -->

Ir a Bizlink - Conectores<!-- Connettori --> y presionar nuevo

![](/img/it-it/applications/bizlink/import-metel/8.png)

Luego configurar Código, Descripción, Tipo de conector = Folder Monitor, Socio<!-- Partner -->, Flujo<!-- Flusso -->, Operación de flujo, Documento de flujo (según el número de caracteres del archivo que se desea importar), Administrado por el servicio de autenticación.
Por último, definir la ruta de las carpetas:
- Incoming: donde se colocará el archivo para ser procesado
- Processed: donde será movido el archivo por el servicio si se importa correctamente
- Failed: donde será movido el archivo por el servicio si el archivo tiene errores

![](/img/it-it/applications/bizlink/import-metel/9.png)

:::tip[Gestión de ambos archivos<!-- Gestione di entrambi i file -->]
Para poder gestionar ambos tipos de archivos, cree dos conectores diferentes con los dos documentos de flujo diferentes.
Además, la carpeta Incoming deberá ser diferente. Failed y Processed pueden ser las mismas carpetas.
:::

### Prueba de importación<!-- Test import -->

:::danger[Atención<!-- Attenzione -->]
En caso de errores o de reimportación de un mismo archivo es necesario reiniciar el servicio de BizLink, ya que no puede procesar un documento con el mismo nombre para evitar duplicados. Con el reinicio se desbloquea esta restricción.
:::

Para realizar una prueba de importación, asegúrese de que el servicio esté activo y copie el archivo .txt a la carpeta de incoming y espere unos segundos.
En los documentos entrantes de BizLink habrá una fila con el resultado de la importación.

![](/img/it-it/applications/bizlink/import-metel/10.png)