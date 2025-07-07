---
title: Tipos de documentos 
sidebar_position: 5
---

:::tip[Inicio Rápido]
La tabla está sujeta al procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación en la página vinculada.
:::

La tabla se abre a través de la ruta **Tablas > Configuración General > Tipos de documentos** y contiene los posibles tipos de documentos que serán almacenados en la base de datos y gestionados por el sistema Documental Fluentis.

El formulario se compone de un área de filtrado y una de resultados. Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

:::note Nota
Generalmente, la tabla se precompone a partir de los procedimientos de instalación y creación de los parámetros predeterminados del programa, por lo tanto, su gestión se limita a la posible creación de tipos especiales con el fin de asociar documentos a archivar.

Sin embargo, en caso de anomalías o devolución de mensajes de error en la fase de exportación de documentos (principalmente gestionados por el componente Bizlink), podría ser necesario verificar la presencia del tipo de documento correcto que es llamado por los algoritmos de exportación.
:::

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

Para insertar un nuevo tipo de documento, presione el botón **Nuevo** en la barra de ribbon.

![](/img/it-it/configurations/tables/general-settings/document-types/image02.png)

#### Campos específicos

**Tamaño máximo (MB)**: Define el tamaño máximo del documento que se puede archivar (generalmente ajustado a 10).

**Compresión**: habilita la opción de guardar un archivo comprimido (por ejemplo, .zip).

**Modo**: permite establecer el almacenamiento en la base de datos, en una carpeta externa, o en ambas ubicaciones. (Actualmente no está activa la posibilidad de guardar externamente).

**Utilice definiciones de seguridad**: activa la gestión de derechos (lectura, escritura...) sobre el documento, que se gestionan en la sección que aparece a continuación.

![](/img/it-it/configurations/tables/general-settings/document-types/image03.png)

Para todo lo que no sea detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).