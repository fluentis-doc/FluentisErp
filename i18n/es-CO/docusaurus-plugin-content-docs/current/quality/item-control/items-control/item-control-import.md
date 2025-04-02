---
title: importa articoli da controllare
sidebar_position: 2
---

El procedimiento de importación se encuentra en la ruta **Calidad > Controles de artículo > Controles de artículo > Importar artículos para controlar**.

:::important ¿Para qué sirve? (A cosa serve)
Esta gestión permite crear nuevos *Controles de artículo* importando los *Artículos* a controlar de los *Tipos de documento* previstos:   
> **ricevimento merci***   
> **ddt di acquisto***   
> **fatture di acquisto***   
> **dichiarazioni di produzione***   
> ***Fases de la orden de producción (Fasi ordine di produzione)***   
> ***Devoluciones de trabajo (Rientri di conto lavoro)***   
> ***Movimientos de carga (Movimentazioni di carico)***   

asociarlos al *Plan de control* establecido para luego, a través de observaciones visuales o con la ayuda de *Herramientas de medición*, verificar su conformidad.   
:::

El formulario se divide en:
- un área de filtro, contextual al *Tipo de documento* del cual se desean importar los *Artículos* para controlar;   
- un área compuesta por diferentes pestañas, una para cada *Tipo de documento*, cada una de las cuales contiene las cuadrículas dedicadas al resultado del filtro.   

## Botones específicos (Pulsanti specifici)

### ![](/img/neutral/common/search.png) Buscar líneas de documento a importar (Ricerca righe documento da importare)

El área de filtro y la pestaña que contiene la cuadrícula de resultados varían una vez que se indica el *Tipo de documento*.   
Configurados los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.   
Del *Tipo de documento* seleccionado, solo se mostrarán las líneas del documento de artículos:   
- codificados para *ricevimento merci*, *ddt di acquisto*, *fatture di acquisto* y *Devoluciones de trabajo (Rientri di conto lavoro)*;   
- con cantidades producidas y/o descartadas para *dichiarazioni di produzione*;   

para los demás *tipos de documento* de *Fases de orden de producción (Fasi ordine di produzione)* y *Movimientos de carga (Movimentazioni di carico)* se visualizarán todas las líneas del documento.   

### Confirmar líneas de documento a importar (Conferma righe documento da importare)

Habilitado si se selecciona al menos una línea de la cuadrícula de resultados y el *Tipo de control* a crear.   
Una vez seleccionadas las líneas deseadas, es necesario hacer clic en el botón **conferma** para asociar los *Planes de control* y crear los *Controles de artículo*.   
Al finalizar la operación, se pregunta si se quiere continuar con la actividad de importación o abrir los *Controles de artículo* recién creados.   

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />

## Gestión Importar artículos para controlar (Gestione Importa articoli da controllare)

### Área de filtro (Area di filtro)

El área se compone de una parte fija donde se presentan los filtros de búsqueda relacionados con la información general y de una parte variable y contextual al *Tipo de documento* seleccionado; la parte variable se visualiza debajo del expandible *articolo*.   
Los filtros de búsqueda relacionados con la información general son:   
> **tipo documento**: es el *Tipo de documento* en el que se busca la información.   
> Al ejecutar la gestión, se proponen el *Tipo de documento* indicado como *default* en la lista *Tipos de documento para la importación (Tipi documento per l'importazione)* presente en la pestaña *controlli articolo* de los *Parámetros de controles de artículo (Parametri controlli articolo)*; si no se indica, se propone *ddt di acquisto*.   
> La propuesta automática, o la posterior variación por parte del operador, harán variar la parte variable del filtro de datos y la pestaña visualizada.  
>   
> **dettaglio articolo**: es el tipo de detalle a controlar del *Artículo* para la tipología de documento específica.   
> Es una lista de valores predeterminados por el sistema:   
> - *nessuno* - la línea de *Artículo* considerada no tomará ningún dato de detalle;   
> - *lotto* - la línea de *Artículo* considerada tomará como máximo detalle el *Lote*;   
> - *s.n.* - la línea de *Artículo* considerada tomará como máximo detalle el *serial number*;   
> - *udc* - la línea de *Artículo* considerada tomará como máximo detalle la *unità di carico*.   
>   
> Al ejecutar la gestión, se propone el *Detalle de artículo* indicado en *Detalle de artículo* en la lista *Tipos de documento para la importación (Tipi documento per l'importazione)* presente en la pestaña *controlli articolo* de los *Parámetros de controles de artículo (Parametri controlli articolo)*.   
>
> **tipo controllo**: el código del *Tipo de control* que se asociará al *Control de artículos* a crear.   
> Al ejecutar la gestión, se propone el *Tipo de control* indicado en *Tipo de control* en la lista *Tipos de documento para la importación (Tipi documento per l'importazione)* presente en la pestaña *controlli articolo* de los *Parámetros de controles de artículo (Parametri controlli articolo)*.   
>   
> expandible **dettaglio**   
>> **non ancora considerate**: indica si buscar solo las líneas del documento que no se han considerado en importaciones anteriores.   
>> **già considerate**: indica si buscar, además de las no consideradas, también las líneas ya consideradas en importaciones anteriores (generalmente utilizada en caso de deseo de realizar más controles).   
>   
> **bar code**: es el código habilitado para el reconocimiento de: *articolo*, *unità di carico*, *lotto* y *serial number*.   
>   
> expandible **articolo**  
>> **unità di carico**: es el código formateado de la *unità di carico*.   
>> **lotto**: es el código del *lotto*.   
>> **serial number**: es el código del *serial number*.   

### Área de resultados (Area di risultato)  

Contenida en cada pestaña, es la "cuadrícula" que contiene el resultado de la *ricerca* aplicada al área de filtro.   
La información contenida en la lista es contextual al *Tipo de documento* seleccionado.   

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consultar el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).