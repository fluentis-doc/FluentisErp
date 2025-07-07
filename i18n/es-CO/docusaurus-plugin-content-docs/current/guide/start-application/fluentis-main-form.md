---
title: El formulario principal de Fluentis 
sidebar_position: 2
---

El formulario principal de **Fluentis** está compuesto por varias zonas con funcionalidades diferentes:

## Sección superior 

La barra de herramientas contiene los combo-box para seleccionar la **empresa** y/o la **división** que se utilizan para la entrada de datos y el editor para facilitar la búsqueda de formularios dentro de la aplicación.

Justo debajo hay varias pestañas:

### Primera pestaña

Contiene información sobre las **versiones**, permite **Imprimir**, contiene información detallada sobre la **Licencia** y permite **Cerrar** el programa.

### Pestaña Inicio 

La pestaña contiene:

- el combo-box para seleccionar el **Idioma** deseado,

- el combo-box para elegir el **Menú** de Fluentis,

:::note Menú    
Según el menú activado, la barra de cinta de la pestaña **Inicio** se completará con la información transversal a toda la aplicación y se agregarán las pestañas que corresponden a las áreas de Fluentis.
:::

- los **Temas** que el usuario puede elegir para cambiar el fondo de la aplicación según sus necesidades visuales,

- el espacio disponible para visualizar las *formularios abiertos por el usuario*,

- la **flecha** para ocultar o mostrar toda la barra de cinta.

### Las pestañas de Áreas

Contienen una serie de cintas agrupadas por tipo/módulo. Por ejemplo, la pestaña *acquisti* contiene todos los documentos del ciclo activo: solicitudes, pedidos, DDT, facturas, etc.

### Ayuda

Para obtener información detallada sobre el formulario en uso, el usuario puede consultar la documentación usando **F1** o presionando el botón **?**.

## Panel izquierdo 

Contiene el [Navegador de formularios](/docs/form-navigator/data-grid-settings) con información sobre el formulario activo.

## Panel derecho 

Contiene:

**[Herramientas](/docs/applications/applications-intro)** contiene diversas aplicaciones complementarias: ARM, Audit Trail, BizLink, Business Intelligence, CRM, Gestión Documental, Aplicaciones no soportadas.

**[Navegador de objetos](/docs/object-navigator/object-navigator-intro)** contiene información sobre el objeto activo, útil para personalizar los formularios añadiendo datos o información adicional.

**[Panel de contexto](/docs/panels/context-panel)**, según la configuración, Fluentis permite visualizar información contextual del campo seleccionado (por ejemplo: si selecciona el artículo, la aplicación muestra su disponibilidad).

**[Configuraciones](/docs/configurations/configuration)** contiene información que permitirá definir la gestión de los módulos.

**Fluentis Chat** permite interactuar con los usuarios habilitados para este servicio de comunicación, tanto internamente en el contexto empresarial, como externamente para acceder al soporte de Fluentis. El chat es una herramienta muy útil para compartir información rápidamente con otro operador, compartir documentos digitales o incluso documentos activos de la gestión. 

## Sección inferior

En la parte inferior de la aplicación, la barra de estado contiene una serie de información que explicamos a continuación:

**Actividades**: permite un rápido acceso a la gestión de actividades pendientes (derivadas de los procedimientos de WorkFlow configurados);

**Calendario**: permite la gestión del calendario, que se puede vincular con Exchange o Outlook.
:::note Sincronizar el *calendario de Outlook* con el *calendario de Fluentis*.  

1. Configurar el usuario en **ARM** y definir en la pestaña **otras características** el correo:  

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image01.png)

2. A continuación, presionando el botón *ruta predeterminada de outlook*, se solicitará qué calendario configurar entre los que encuentra, y el campo **ruta predeterminada de outlook** se llenará automáticamente:  

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image02.png) ![](/img/it-it/guide/panels/status-bar/calendar-configuration/image03.png)

En este punto, al moverse a **calendario** (barra de estado), después de *reiniciar* Fluentis, se notará que la sincronización con Outlook se ha realizado con éxito:

![](/img/it-it/guide/panels/status-bar/calendar-configuration/image04.png)

Véase también [Programación de recursos en calendario](/docs/project-management/transverse-procedures).
:::

**Dashboards**: permite un resumen rápido de los aspectos destacados de la gestión con una interfaz estadística muy potente y fácilmente personalizable;

**Encontrar**: permite visualizar todos los comandos de la aplicación. Usado junto con el campo de búsqueda que se encuentra en la parte superior, en el menú principal, podemos encontrar un comando específico o comandos agrupados;

**...**: permite al usuario acceder, con clic derecho, a la ventana **Opciones de navegación** para seleccionar el número máximo de elementos a visualizar (flechas arriba/abajo para aumentar/disminuir) y para establecer el orden en el que deben presentarse (flechas arriba/abajo para cambiar el orden). Usar el botón 'Aceptar (OK)' para confirmar las elecciones y el botón 'Restablecer (Reset)' para volver a la situación estándar;

**Base de datos**: la información expuesta hace referencia a la conexión a la base de datos y es, en el orden visualizado: *usuario*, *Servidor\Base de datos*, *empresa*, división.