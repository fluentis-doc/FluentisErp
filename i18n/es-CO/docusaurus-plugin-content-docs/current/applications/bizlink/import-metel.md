---
title: Importación METEL (Importazione METEL)
sidebar_position: 6
---

**BizLink** permite la importación de las listas de precios de Metel, se ponen a disposición dos flujos para dicha importación. La única operación que debe realizar el usuario es configurar el conector para llevar a cabo la importación.

:::danger[Longitud del archivo]
En Fluentis, solo se admiten 2 tipos de archivos, aquellos de 178 y 233 caracteres.
:::

:::danger[Formato del archivo]
En Fluentis, solo se admite el formato ANSI del archivo.
:::

:::tip[Proceso de archivo en formato incorrecto]
Si el archivo no cumple con las dos características mencionadas anteriormente, BizLink moverá el archivo a la carpeta de archivos procesados y no escribirá nada en los documentos entrantes, ya que "desecha" el archivo.
:::

### Prerrequisitos
- Servicio de BizLink instalado y funcionando
- Lista de precios de Metel (archivo en formato txt) válida

:::tip[Sitio oficial de Metel]
Para cualquier duda sobre el archivo, se remite al sitio: https://listinipubblici.metel.it/ en el cual hay una funcionalidad "Verificar Lista de precios".
:::

### Visión del Parser y Flujos

:::note[Nota importante]
En esta sección se explican los flujos ya presentes en Fluentis. En la sección siguiente se explica cómo configurar el conector y realizar la importación.
:::

#### Parser

Metel tiene un parser llamado FluentisEDIExtendedParser

![](/img/it-it/applications/bizlink/import-metel/1.png)

Dentro de él hay dos objetos parser, uno para el archivo de 178 caracteres y otro para el de 233 caracteres.

![](/img/it-it/applications/bizlink/import-metel/2.png)

Tomando como ejemplo el objeto parser para el archivo de 233 caracteres, observamos cómo se importa cada campo y en qué posición debería estar.  
Esto puede ser útil en caso de errores de importación, ya que, dada la propiedad que tiene el error, podemos entender en qué posición del archivo se encuentra.

![](/img/it-it/applications/bizlink/import-metel/3.png)

#### Flujo

Metel tiene un flujo llamado METEL

![](/img/it-it/applications/bizlink/import-metel/4.png)

Este flujo tiene una operación de flujo interna llamada FLOW_OP_MetlPriceList

![](/img/it-it/applications/bizlink/import-metel/5.png)

Dicha operación de flujo tiene 2 documentos de flujo diferenciados por el número de caracteres del archivo.

![](/img/it-it/applications/bizlink/import-metel/6.png)

El documento de flujo define qué objeto parser utilizar para procesar el archivo.

![](/img/it-it/applications/bizlink/import-metel/7.png)

### Creación del conector

Ir a Bizlink - Conectores y presionar nuevo.

![](/img/it-it/applications/bizlink/import-metel/8.png)

Luego, establecer Código, Descripción, Tipo de conector = Monitor de carpeta, Socio, Flujo, Operación de flujo, Documento de flujo (según el número de caracteres del archivo que se desea importar), Gestionado por el servicio de autenticación.  
Finalmente, establecer la ruta de las carpetas:
- Entrante: donde se colocará el archivo para ser procesado
- Procesado: donde se moverá el archivo desde el servicio si se importa correctamente
- Fallido: donde se moverá el archivo desde el servicio si dicho archivo tiene errores

![](/img/it-it/applications/bizlink/import-metel/9.png)

:::tip[Gestión de ambos archivos]
Para poder gestionar ambos tipos de archivos, crear dos conectores diferentes con los dos documentos de flujo distintos.  
Además, la carpeta de Entrante deberá ser diferente. Fallido y Procesado pueden ser las mismas carpetas.
:::

### Prueba de importación

:::danger[Atención]
En caso de errores o de re-importación del mismo archivo, es necesario reiniciar el servicio de BizLink, ya que no puede procesar un documento con el mismo nombre para evitar duplicados. Con el reinicio, se desbloquea esta situación.
:::

Para realizar una prueba de importación, asegúrese de que el servicio esté activo y copie el archivo .txt en la carpeta de entrada y espere unos segundos.  
En los documentos entrantes de BizLink aparecerá una línea con el resultado de la importación.

![](/img/it-it/applications/bizlink/import-metel/10.png)