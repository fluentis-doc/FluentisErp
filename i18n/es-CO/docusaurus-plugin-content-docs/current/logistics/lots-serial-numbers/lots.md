---
title: Búsqueda de lotes (Ricerca lotti)
sidebar_position: 2
---

El formulario se abre a través de la ruta **anagrafica lotti** y permite buscar todos los lotes con el fin de visualizarlos y modificarlos.

Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **ricerca** presente en la *Ribbon bar* para visualizar los resultados dentro de la cuadrícula de resultados.

Para abrir los detalles de un documento, solo es necesario seleccionarlo y hacer doble clic con el ratón, o hacer clic en el botón **modifica**.

*Botones específicos*:

> **modifica**: el botón permite [Modificar un lote ingresado (Modificare un lotto inserito)](/docs/logistics/lots-serial-numbers/lots-register);    
> **cancella**: permite la eliminación del lote si este no está referenciado en ningún documento. 

*Filtros específicos*:

**Todos**: activando este indicador, el usuario puede filtrar todos los lotes presentes en la base de datos;

**non chiusi**: activando este indicador, el usuario puede filtrar solo los lotes abiertos, es decir, solo los lotes de los cuales aún existe un inventario en el almacén;

**chiusi**: activando este indicador, el usuario puede filtrar solo los lotes cerrados, es decir, solo los lotes cuyo inventario es igual a cero.  

*Campos específicos* en la cuadrícula de resultados (haga clic en el signo **+** para abrir el detalle de la línea)

**chiuso**: el indicador, si está activo, destaca que el inventario es igual a cero;

**quantità**: la columna muestra la cantidad inicial del lote para cada almacén;

**quantità disponibile**: la columna muestra la cantidad disponible para cada almacén del lote, es decir, la cantidad en inventario menos la cantidad comprometida en los diferentes documentos. La cantidad disponible también puede mostrarse como igual a cero si el lote se encuentra en un estado 'no disponible para retiros automáticos';

**stato lotto**: la columna muestra el estado del lote. Es un dato que podría no estar gestionado;

**magazzino**: la columna muestra el código del almacén donde se encuentra el lote.

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funciones, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).