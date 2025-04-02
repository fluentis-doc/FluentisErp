---
title: tipi limite
sidebar_position: 4
---

La tabla se encuentra en la ruta **Tablas > Calidad > General > tipi limite (Tabelle > Qualità > Generale > Tipi limite)**.

En esta tabla se pueden codificar los *tipi limite*.  
El *tipo limite* siempre está asociado al *tipo valore* (solamente para *Tipos de valor* numéricos).  
Algunos ejemplos de uso de los *tipi limite* se encuentran en las gestiones:  
> **schede tecniche** - en la pestaña *proprietà*;  
> **piani di controllo** - en la pestaña *prove pianificate*;  
> **Control de artículos (Controllo articoli)** - en la pestaña *prove*;  
> **certificati di analisi** - en la pestaña *Controles y valores registrados > Valores registrados (Controlli e valori rilevati > Valori rilevati)*;  
> **M.E.S.** - en la pestaña *Controles de calidad > Pruebas (Controlli qualità > Prove)*.

La tabla contiene valores predefinidos por el sistema y no es posible insertar nuevos, eliminarlos o modificarlos; los valores predefinidos son:  
| Código | Descripción |
|:-:|:--|
| N.L. | Ningún límite requerido (Nessun limite richiesto) |  
| = | Igual (Uguale) |  
| x\> | Mayor (Maggiore) |  
| x\< | Menor (Minore) |  
| x \<\> | Diferente (Diverso) |  
| x\<= | Menor o igual (Minore o uguale) |  
| x\>= | Mayor o igual (Maggiore o uguale) |  
| \<;x;\> | Fuera de (Al di fuori di) |  
| \<;x;\>= | Menor o Mayor/Igual (Minore o Maggiore/Uguale) |  
| \<=;x;\> | Menor/igual o Mayor (Minore/uguale o Maggiore) |  
| \<=;x;\>= | Menor/Igual o Mayor/Igual (Minore/Uguale o Maggiore/Uguale) |  
| \>;x;\< | Estrictamente comprendido (Strettamente compreso) |  
| \>;x;\<= | Mayor y Menor o igual (Maggiore e Minore o uguale) |  
| \>=;x;\< | Mayor o igual y Menor (Maggiore o uguale e Minore) |  
| \>=;x;\<= | Comprendido (Compreso) |  

**Búsqueda de tipi limite (Ricerca Tipi limite)**

El formulario se compone de un área de filtro y de una de resultados. Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

*Campos específicos*:  

> **tipo limite**: información de solo lectura, es el código del *tipo limite*.  
> **descrizione tipo**: información de solo lectura, es la descripción del *tipo limite*.  
> **richiede limite minimo**: información de solo lectura, indica si se requiere un límite mínimo o inferior y habilita la columna *carattere limite minimo*.  
> **richiede limite massimo**: información de solo lectura, indica si se requiere un límite máximo o superior y habilita la columna *carattere limite massimo*.  
> **carattere limite minimo**: es posible indicar un texto para identificar un intervalo entre el límite mínimo y el valor nominal; ejemplo: *< ≤ > ≥ ≠ =*.  
> **carattere limite massimo**: es posible indicar un texto para identificar un intervalo entre el valor nominal y el límite máximo; ejemplo: *< ≤ > ≥ ≠ =*.  
> **note**: anotaciones libres.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).