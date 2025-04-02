---
title: tipi controllo articolo
sidebar_position: 9
---

La tabla se encuentra en la ruta **Tablas > Calidad > Controles de artículo > tipi controllo articolo (Tabelle > Qualità > Controlli articolo > Tipi Controllo articolo)**.

En esta tabla es posible codificar los *tipi controllo articolo*.  
El *Tipo de control de artículo* es parte integral, junto con el *Año* y el *Número*, del código único del *Control de artículo*.  
Algunos ejemplos de uso de *tipi controllo articolo* los encontramos en las gestiones:  
> **importa articoli da controllare** - en los *dati di testata*;  
> **controlli articolo** - en la lista de *dati di testata*;  
> **certificati di analisi** - en la pestaña *controlli e valori rilevati*;  
> **Parámetros de controles de artículo (Parametri Controlli articolo)** - en la pestaña *generale*;  
y en todas las gestiones donde se utiliza el *Control de artículo*.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de tipos de control de artículo (Ricerca Tipi controllo articolo)**

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de tipos de control de artículo (Inserimento Tipi controllo articolo)**

Para poder insertar nuevos *tipi controllo articolo*, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.  
Para el nuevo registro se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice** y la **descrizione**.

## tipi controllo articolo (Tipi controllo articolo)

Es la lista donde se ingresan las principales informaciones de los *tipi controllo articolo*.  
La lista se compone de la siguiente información:  
> **tipo controllo**: es el código del *Tipo de control de artículo*.  
> **descrizione tipo controllo**: es la descripción del *Tipo de control de artículo*.  
> **magazzino**: es el código del *Almacén* que se propone en *Controles de artículos > Pruebas > Almacén (Controllo articoli > Prove > Magazzino)*;  
es el *Almacén* de control de calidad utilizado para mover los artículos, una vez controlados, al respectivo *Almacén* conforme y no conforme (si se establece como contrapartida en el respectivo *Motivo*).  
> **Motivo de descarga de artículos no conformes (Causale scarico articoli non conformi)**: es el código de la *Causale di magazzino* que se propone en *Controles de artículos > Pruebas > Motivo de descarga de artículos no conformes (Controllo articoli > Prove > Causale scarico articoli non conformi)*;  
es el *Motivo* de extracción utilizado para mover los artículos no conformes, una vez controlados, a su respectivo *Almacén* no conforme;  
el *Motivo* de contrapartida no es obligatorio si no se desea gestionar un *Almacén* de desechos o de reabastecimiento después del posterior reacondicionamiento o reprocesamiento del artículo controlado.  
> **Motivo de descarga de artículos conformes (Causale scarico articoli conformi)**: es el código de la *Causale di magazzino* que se propone en *Controles de artículos > Pruebas > Motivo de descarga de artículos conformes (Controllo articoli > Prove > Causale scarico articoli conformi)*;  
es el *Motivo* de extracción utilizado para mover los artículos conformes, una vez controlados, a su respectivo *Almacén* conforme;  
es recomendable establecer el respectivo *Motivo* de contrapartida para hacer que el artículo conforme esté nuevamente disponible una vez controlado.  
> **Motivo de descarga de pruebas destructivas (Causale scarico prove distruttive)**: es el código de la *Causale di magazzino* que se propone en *Controles de artículos > Pruebas > Motivo de descarga de artículos no conformes (Controllo articoli > Prove > Causale scarico articoli non conformi)* si la *Prueba* es de tipo *Destructiva*;  
es el *Motivo* de extracción utilizado para mover los artículos no conformes, una vez controlados;  
no se prevé el *Motivo* de contrapartida ya que la *Prueba* es de tipo *Destructiva* y es imposible realizar un posterior reacondicionamiento o reprocesamiento del artículo controlado.  
> **tipo certificato proposto**: es el código del *Tipo de certificado de análisis* que se propone al crear un nuevo *Certificado de análisis* a partir de este *Tipo de control de artículo*.  
> **descrizione magazzino**: es la descripción del *Almacén*;  
> **Descripción del motivo de descarga de artículos no conformes (Descrizione causale scarico articoli non conformi)**: es la descripción de la *Causale scarico articoli non conformi*;  
> **Descripción del motivo de descarga de artículos conformes (Descrizione causale scarico articoli conformi)**: es la descripción de la *Causale scarico articoli conformi*;  
> **Descripción del motivo de descarga de pruebas destructivas (Descrizione causale scarico prove distruttive)**: es la descripción de la *Causale scarico prove distruttive*;  
> **descrizione tipo certificato proposto**: es la descripción del *Tipo de certificado propuesto*;  
> **note**: anotaciones libres.

### Datos adicionales (Extra data)

Es posible ingresar [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para los *tipi controllo articolo*.  
Estos *Datos adicionales* son heredados en los *Controles de artículo* de esa determinada tipología.  

Para toda la información no detallada en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).