---
title: Form Navigator - Configuración de datos de cuadrículas (Form Navigator - Impostazioni dati griglie)
sidebar_position: 3
---

Para definir que la cuadrícula se configure con la opción de **carga completa de datos (caricamento completo dei dati)**, proceder de la siguiente manera:

**1.** abra a la izquierda el *Form Navigator*, luego abra el *Results Widgets*, después la definición de la cuadrícula y seleccione el objeto *Grid*: aparecerá en la parte inferior el *Grid Control* donde puede seleccionar la opción *carica tutti i dati* con el número máximo de filas a considerar (*Limit rows number*).

**2.** vuelva a ejecutar la búsqueda en la cuadrícula, para cargar todos los datos.

**3.** esta opción debe guardarse en un perfil, que eventualmente podrá memorizar y recuperar según sea necesario: de hecho, hay que considerar que la carga de todos los datos ralentizará los tiempos de carga de los datos:

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image01.png)  

Una vez definida esta modalidad de gestión de datos, se presentan algunas opciones de **totalización/gestión de datos (totalizzazione/gestione dei dati)**: 

Con clic derecho en el encabezado de la cuadrícula se abre el menú desde donde selecciona la opción *pannello riepilogo totali*, luego haga clic derecho fuera de la cuadrícula, pero en correspondencia con la columna a totalizar para elegir si visualizar: Suma, Mínimo, Máximo, Contar, Promedio:

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image02.png)

También puede configurar esta totalización a nivel de grupo, eligiendo siempre del menú la opción *raggruppa per questa colonna*  
![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image03.png)  

Si agrupa por un campo de fecha en una cuadrícula de carga total, al presionar el botón derecho sobre la etiqueta de agrupación estará disponible la opción *raggruppa intervallo* con las siguientes opciones: Ninguno (por lo tanto, cada fecha será un grupo diferente), ‘Día (Giorno)', ‘Mes (Mese)', ‘Año (Anno)', ‘Inteligente (Intelligente)' donde este último mostrará los días anteriores, la semana pasada y luego hacia atrás los meses:

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image04.png)  

Otra opción disponible con estos grupos en una cuadrícula de carga total es el ordenamiento por la suma establecida, en sentido creciente o decreciente:  

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image05.png)  

Obteniendo así un resultado como este:  
![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image06.png)