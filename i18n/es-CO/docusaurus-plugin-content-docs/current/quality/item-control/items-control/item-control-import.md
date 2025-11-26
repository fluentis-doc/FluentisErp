---
title: Importar artículos a controlar
sidebar_position: 2
ai_generated: true
---

El procedimiento de importación se encuentra en la ruta **Calidad > Controles de artículo<!-- Controlli articolo --> > Controles de artículo<!-- Controlli articolo --> > Importar artículos a controlar<!-- Importa articoli da controllare -->**.   

:::important ¿Para qué sirve?<!-- A cosa serve -->
Esta gestión permite crear nuevos *Controles de artículo<!-- Controlli articolo -->* importando los *Artículos* a controlar desde los diferentes *Tipos de documento<!-- Tipi documento -->* previstos:   
> ***Recepción de mercancías<!-- Ricevimento merci -->***   
> ***Albaranes de compra<!-- DDT di acquisto -->***   
> ***Facturas de compra<!-- Fatture di acquisto -->***   
> ***Declaraciones de producción<!-- Dichiarazioni di produzione -->***   
> ***Fases de orden de producción<!-- Fasi ordine di produzione -->***   
> ***Devoluciones de cuenta trabajo<!-- Rientri di conto lavoro -->***   
> ***Movimientos de carga<!-- Movimentazioni di carico -->***   

y asociarlos al *Plan de control<!-- Piano di controllo -->* previsto para, luego, mediante inspecciones visuales o utilizando *Instrumentos de medición<!-- Strumenti di misura -->*, verificar su conformidad.   
:::

El formulario está dividido en:
- un área de filtro, contextual al *Tipo de documento<!-- Tipo documento -->* desde el cual se desean importar los *Artículos* a controlar;
- un área compuesta por varias pestañas, una por *Tipo de documento<!-- Tipo documento -->*, cada una con sus respectivas cuadrículas de resultados.

## Botones específicos<!-- Pulsanti specifici -->

### ![](/img/neutral/common/search.png) Buscar filas de documento para importar<!-- Ricerca righe documento da importare -->

El área de filtro y la pestaña que contiene la cuadrícula de resultados varían una vez que se indica el *Tipo de documento<!-- Tipo documento -->*.   
Una vez configurados los filtros deseados, basta con hacer clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados dentro de la cuadrícula de resultados.  
Del *Tipo de documento<!-- Tipo documento -->* seleccionado, solo se visualizarán las filas de documento de los artículos:   
- codificados para *Recepción de mercancías<!-- Ricevimento merci -->*, *Albaranes de compra<!-- DDT di acquisto -->*, *Facturas de compra<!-- Fatture di acquisto -->* y *Devoluciones de cuenta trabajo<!-- Rientri di conto lavoro -->*;   
- con cantidades producidas y/o rechazadas para *Declaraciones de producción<!-- Dichiarazioni di produzione -->*;   

para los restantes *tipos de documento<!-- tipi documento -->* de *Fases de orden de producción<!-- Fasi ordine di produzione -->* y *Movimientos de carga<!-- Movimentazioni di carico -->*, se visualizarán todas las filas de documento.   

### Confirmar filas de documento para importar<!-- Conferma righe documento da importare -->

Habilitado si se selecciona al menos una fila de la cuadrícula de resultados y el *Tipo de control<!-- Tipo controllo -->* a crear.   
Una vez seleccionadas las filas deseadas, es necesario hacer clic en el botón **Confirmar<!-- Conferma -->** para asociar los *Planes de control<!-- Piani di controllo -->* y crear los *Controles de artículo<!-- Controlli articolo -->*.   
Al finalizar la operación, se solicita si desea continuar con la actividad de importación o abrir los *Controles de artículo<!-- Controlli articolo -->* recién creados.   

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />

## Gestión Importar artículos a controlar<!-- Gestione Importa articoli da controllare -->

### Área de filtro<!-- Area di filtro -->

El área está compuesta por una parte fija donde se muestran los filtros de búsqueda relativos a la información general y por una parte variable, contextual al *Tipo de documento<!-- Tipo documento -->* seleccionado; la parte variable se visualiza debajo del expander *Artículo<!-- Articolo -->*.   
Los filtros de búsqueda relativos a la información general son:   
> **Tipo de documento<!-- Tipo documento -->**: es el *Tipo de documento<!-- Tipo documento -->* en el cual buscar la información.  
> Al ejecutarse la gestión, se propone automáticamente el *Tipo de documento<!-- Tipo documento -->* indicado como *Predeterminado<!-- Default -->* en la lista *Tipos de documento para la importación<!-- Tipi documento per l'importazione -->* presente en la pestaña *Controles de artículo<!-- Controlli articolo -->* de los *Parámetros de controles de artículo<!-- Parametri controlli articolo -->*; si no se ha indicado, se propone *Albaranes de compra<!-- DDT di acquisto -->*.   
> La propuesta automática, o la posterior modificación por parte del usuario, harán variar la parte variable del filtro de datos y la pestaña visualizada.
>   
> **Detalle de artículo<!-- Dettaglio articolo -->**: es el tipo de detalle a controlar del *Artículo* para la tipología de documento específica.   
> Es una lista de valores predefinidos por el sistema:   
> - *Ninguno<!-- Nessuno -->* - la fila de *Artículo<!-- Articolo -->* considerada no tomará ningún dato de detalle;   
> - *Lote<!-- Lotto -->* - la fila de *Artículo<!-- Articolo -->* considerada tomará como máximo detalle el *Lote<!-- Lotto -->*;   
> - *N.S.<!-- S.N. -->* - la fila de *Artículo<!-- Articolo -->* considerada tomará como máximo detalle el *Número de serie<!-- Serial Number -->*;   
> - *UDC* - la fila de *Artículo<!-- Articolo -->* considerada tomará como máximo detalle la *Unidad de carga<!-- Unità di Carico -->*.   
>   
> Al ejecutarse la gestión, se propone el *Detalle de artículo<!-- Dettaglio articolo -->* indicado en *Detalle de artículo<!-- Dettaglio articolo -->* en la lista *Tipos de documento para la importación<!-- Tipi documento per l'importazione -->* presente en la pestaña *Controles de artículo<!-- Controlli articolo -->* de los *Parámetros de controles de artículo<!-- Parametri controlli articolo -->*.
>
> **Tipo de control<!-- Tipo controllo -->**: el código del *Tipo de control<!-- Tipo controllo -->* a asociar al *Control de artículos<!-- Controllo articoli -->* a crear.  
> Al ejecutarse la gestión, se propone el *Tipo de control<!-- Tipo controllo -->* indicado en *Tipo de control<!-- Tipo controllo -->* en la lista *Tipos de documento para la importación<!-- Tipi documento per l'importazione -->* presente en la pestaña *Controles de artículo<!-- Controlli articolo -->* de los *Parámetros de controles de artículo<!-- Parametri controlli articolo -->*.
>   
> expander **Detalle<!-- Dettaglio -->**   
>> **No consideradas aún<!-- Non ancora considerate -->**: indica si buscar únicamente las filas del documento no consideradas en importaciones anteriores.   
>> **Ya consideradas<!-- Già considerate -->**: indica si buscar, además de las no consideradas aún, también las filas ya consideradas en importaciones anteriores (usualmente empleada si se quieren efectuar controles adicionales).   
>   
> **Código de barras<!-- Bar Code -->**: es el código habilitado para el reconocimiento de: *Artículo*, *Unidad de carga<!-- Unità di carico -->*, *Lote<!-- Lotto -->* y *Número de serie<!-- Serial number -->*.   
>   
> expander **Artículo<!-- Articolo -->**
>> **Unidad de carga<!-- Unità di carico -->**: es el código formateado de la *Unidad de carga<!-- Unità di carico -->*.   
>> **Lote<!-- Lotto -->**: es el código del *Lote<!-- Lotto -->*.   
>> **Número de serie<!-- Serial number -->**: es el código del *Número de serie<!-- Serial number -->*.   

### Área de resultado<!-- Area di risultato -->   

Incluida en cada pestaña, es la "cuadrícula" que muestra el resultado de la *Búsqueda<!-- Ricerca -->* aplicada al área de filtro.   
La información contenida en el listado es contextual al *Tipo de documento<!-- Tipo documento -->* seleccionado.   

Para todo lo no detallado en este documento sobre el funcionamiento general de los formularios, consulte el siguiente enlace [Funcionalidad, botones y campos comunes](/docs/guide/common).