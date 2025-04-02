---
title: imballi a rendere
sidebar_position: 15
---

La tabla se encuentra en la ruta **imballi a rendere**.

En esta tabla es posible codificar los diferentes *imballi a rendere* que se utilizarán en la *Gestión de envases* en los documentos de compra, venta y trabajo por encargo.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de envases retornables (Ricerca Imballi a rendere)**

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, simplemente haga clic en el botón **ricerca** para visualizar los resultados en la cuadrícula de resultados.

**Inserción de envases retornables (Inserimento Imballi a rendere)**

Para poder insertar nuevas codificaciones, es necesario hacer clic en la cuadrícula en la primera línea vacía o presionar el botón **inserimento**.  

Esta tabla contiene los artículos que se consideran *imballi a rendere* para la trazabilidad del inventario. El artículo ingresado en esta tabla debe tener como Naturaleza de artículo: *imballo* (la Naturaleza de artículo se inserta en el Registro de artículo, pestaña [Generalidades (Generalità)](/docs/erp-home/registers/items/create-new-item)).  
A través de los indicadores en la cuadrícula, es posible elegir en qué áreas el artículo será gestionable para ser movilizado.    

#### Datos obligatorios (Dati obbligatori)

> **codice**: es el código del *imballo a rendere*;  
> **descrizione**: es la descripción del *imballo a rendere*;  
> **classe articolo**: indica la [Clase (Classe)](/docs/configurations/tables/logistics/item-class) a la que pertenece el artículo;  
> **codice articolo**: indica el código del artículo.  

#### Campos específicos (Campi specifici)  

> **utilizzo negli acquisti**: al activar este indicador, el envase será visible en los documentos del área de compras;  
> **utilizzo nel conto lavoro**: al activar este indicador, el envase será visible en los documentos del área de trabajo por encargo;  
> **utilizzo nelle vendite**: al activar este indicador, el envase será visible en los documentos del área de ventas.  

Finalmente, es posible insertar **magazzino** y **causale** que se utilizarán para el artículo en cada área.

Una vez parametrizada esta tabla, en los documentos que lo contemplen, será posible abrir el formulario de envases retornables con el botón de ribbon **gestione imballi**. Este botón abrirá el procedimiento de *Gestión de envases*, ya completado con los envases definidos en la tabla *imballi a rendere*, de modo que el usuario solo deba ingresar las cantidades.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).