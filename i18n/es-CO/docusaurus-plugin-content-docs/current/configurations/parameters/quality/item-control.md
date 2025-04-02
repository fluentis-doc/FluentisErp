---
title: parametri controllo articoli
sidebar_position: 1
---

Los parámetros se encuentran en la ruta **Parámetros > Calidad > parametri controllo articoli**.

Los datos presentes en esta gestión son utilizados para proponer información en las gestiones:  
- **schede tecniche**;  
- **piani di controllo**;  
- **Control de artículos (Controllo articoli)**;  
- **certificati di analisi**.  

#### Botón específico

**salva**: permite almacenar la información modificada.

## General (Generale)

En esta pestaña es posible ingresar datos que se propondrán por defecto en los documentos del módulo *Control de artículos*.  

### Tipos de prueba (Tipi prova)  

En este expandible es posible ingresar datos para proponer en los *Tipos de prueba*.  
En el expandible se puede ingresar:  
- **tipo valore**: *Tipo de valor* a proponer al ingresar un *Tipo de prueba*.  
- **tipo limite**: *Tipo de límite* a proponer al ingresar un *Tipo de prueba*.  

### Hojas técnicas (Schede tecniche)  

En este expandible es posible ingresar datos que se propondrán en las *Hojas técnicas*.  
En el expandible se puede ingresar:  
- **tipo scheda tecnica**: *Tipo de hoja técnica* a proponer al ingresar una *Hoja técnica*.  
- **responsabile**: *dipendente* a proponer como responsable al ingresar una *Hoja técnica*.  
- **tipo dichiarazione in articoli**: *Tipo de declaración* a proponer al ingresar un *Artículo asociado* de una *Hoja técnica*.  
- **tipo dichiarazione in stampa**: *Tipo de declaración* a proponer en *Tipo de declaración para imprimir en caso de que el artículo no lo tenga* en *Impresión de hoja técnica*.  

### Planes de control (Piani di controllo)  

En este expandible es posible ingresar datos que se propondrán en los *Planes de control*.  
En el expandible se puede ingresar:  
- **tipo piano di controllo**: *Tipo de plan de control* a proponer al ingresar un *Plan de control*.  
- **responsabile**: *dipendente* a proponer como responsable al ingresar un *Plan de control*.  

### Certificados de análisis (Certificati di analisi)  

En este expandible es posible ingresar datos que se propondrán en los *Certificados de análisis*.  
En el expandible se puede ingresar:  
- **tipo certificato**: *Tipo de certificado de análisis* a proponer al ingresar un *Certificado de análisis*.  
- **responsabile**: *dipendente* a proponer como responsable al ingresar un *Certificado de análisis*.  

## Control de artículos (Controllo articoli)  

En esta pestaña es posible ingresar datos:  
> - para proponer por defecto en el *Control de artículos*;  
> - para definir varias coloraciones para reconocer los diferentes estados de un *Control*;  
> - para establecer parámetros de gestión;  
> - búsqueda y asociación automática de los *Planes de control* que se deben asociar al *Control de artículo*.  

- **abilita il rilevamento multiplo valori**: indica la habilitación de la posibilidad de detectar múltiples valores para cada prueba, en todos los tipos de documento.  
- **Aprobación automática de los valores detectados (Approvazione automatica dei valori rilevati)**: indica la *Aprobación* automática de la *Prueba* al detectar los *Valores* y la atribución automática del *Resultado*.  
- **proposta esito negativo**: es una lista de valores predeterminados por el sistema que indican la metodología de atribución de no conformidad de la *Prueba*.  
> La metodología se considera solo para la detección de *Pruebas* de tipo *Numérico* en la *Detección de múltiples valores*. Los valores predeterminados son:  
> - *al primer valor detectado no conforme*;  
> - *según la media aritmética de los valores detectados (solo valores numéricos)*.  
> 
- **tipo di esito negativo**: es la propuesta del *Tipo de resultado* en caso de *Pruebas* no conformes.  
- **tipo di esito positivo**: es la propuesta del *Tipo de resultado* en caso de *Pruebas* conformes.  

### Tipos de documento para la importación (Tipi documento per l'importazione)  

En este expandible/lista es posible ingresar datos a considerar durante la *Importación de artículos a controlar* y para proponer en el *Control de artículo*.  
La tabla contiene los tipos de documentos gestionados por el *Control de artículos*.  
Son tipos predefinidos por el sistema y no es posible ingresar nuevos o eliminarlos. Los valores predefinidos son:  
> - *ricevimento merce*;  
> - *ddt di acquisto*;  
> - *fattura di acquisto*;  
> - *dichiarazione di produzione*;  
> - *fase ordine di produzione*;  
> - *rientro da conto lavoro*;  
> - *movimentazione di carico*.  

En la lista, para cada tipo de documento, es posible ingresar:  
- **Def.**: indica el tipo de documento propuesto en los filtros de búsqueda; se puede seleccionar un solo tipo o ninguno.  
- **dettaglio articolo**: es una lista de valores predeterminados por el sistema que identifican el tipo de detalle que se debe controlar del *Artículo* para el tipo de documento específico. Los valores predeterminados son:  
> - *nessuno* - la línea *Artículo* considerada no tomará ningún dato de detalle;  
> - *lotto* - la línea *Artículo* considerada tomará como máximo detalle el *Lote*;  
> - *s.n.* - la línea *Artículo* considerada tomará como máximo detalle el *serial number*;  
> - *udc* - la línea *Artículo* considerada tomará como máximo detalle la *Unidad de Carga*.  
> 
- **Mult.**: indica si habilitar la *Detección de múltiples valores* en el *Control de artículos* para el tipo de documento específico.  
> Para ser considerado, debe indicarse el parámetro general *Habilitar la detección de múltiples valores (Abilita il rilevamento multipli valori)*.  
- **tipo controllo**: *Tipo de control* a proponer al ingresar un *Control de artículos* para el tipo de documento específico.  
- **tipo piano di controllo**: durante la *Importación de artículos a controlar*, excluyendo los tipos de documento de producción (*dichiarazione di produzione* y *fase ordine di produzione*), es el *Tipo de plan de control* que tiene mayor prioridad para la búsqueda del *Plan de control* que se debe asociar al *Control de artículos*.  
- **descrizione tipo controllo**: es la descripción del *Tipo de control*.  
- **descrizione tipo piano di controllo**: es la descripción del *Tipo de plan de control*.  

### Colores de las filas del Control de artículo (Colori righe Controlli articolo)  

En esta lista es posible definir varias coloraciones para reconocer los diferentes estados de un *Control de artículo*.  
Esos colores se aplican en el *Filtro de los Controles de artículo*. La lista se compone de la siguiente información:  
- **tipo**: es el estado del *Control de artículo* al que asociar las coloraciones.  
> La tabla contiene valores predeterminados por el sistema y no es posible ingresar nuevos, eliminarlos o modificarlos. Los valores predeterminados son:  
> - *articoli non soggetti a controllo*;  
> - *controlli privi di un piano di controllo*;  
> - *controlli con più piani di controllo*;  
> - *controlli ancora da rilevare*;  
> - *controlli con esiti non conformi*;  
> - *controlli già validati*.  
> 
- **sfondo**: es el color aplicado al fondo de la línea del *Control de artículo* del estado específico.  
- **testo**: es el color aplicado al texto de la línea del *Control de artículo* del estado específico.  

### Personalización de datos por tipo de documento (Personalizzazione dati per tipo documento)  

En esta lista es posible agregar *Propiedades* de la tipo de documento de origen en la lista de datos del *Control de artículo*.  
La tabla contiene los mismos tipos de documentos mencionados en **Tipos de documento para la importación**.  
Son tipos predefinidos por el sistema y no es posible ingresar nuevos o eliminarlos.  
Se prevén 5 informaciones por cada tipo de dato: *Texto*, *Sí/No*, *Entero*, *Decimal*, *Fecha*.  
A través de un doble clic en la celda se puede seleccionar la *Propiedad* deseada del documento.  

:::tip *Ejemplo:*  
Para la tipo de documento *fattura di acquisto* es posible agregar el valor de la *Propiedad* de encabezado *vostro riferimento*.  
A través del doble clic del mouse en la columna *Texto 01* se ejecuta la Ayuda sobre las propiedades de línea del documento *Factura de Compra*.  
Expanda la referencia *fattura*, seleccione la propiedad *vostro riferimento* y presione el botón *seleziona*.  
En la celda donde se realizó la selección aparecerá la propiedad *YourReference*.  
:::

### Personalización de encabezados de columnas por tipo de documento (Personalizzazione intestazioni colonne per tipo documento)  

En esta lista es posible indicar el *Título de la propiedad*, correspondiente a las *Propiedades* seleccionadas de la lista **Personalización de datos por tipo de documento** y que aparecerán en la lista de datos del *Control de artículo*.  
La tabla contiene los mismos tipos de documentos mencionados en **Tipos de documento para la importación**.  
Son tipos predefinidos por el sistema y no es posible ingresar nuevos o eliminarlos.  
Se prevén 5 informaciones por cada tipo de dato: *Texto*, *Sí/No*, *Entero*, *Decimal*, *Fecha*.  
A través de un doble clic en la celda se puede seleccionar la *Entrada del diccionario* deseada para mostrar como encabezado.  

:::tip *Ejemplo:*  
Para la tipo de documento *fattura di acquisto* es posible indicar el encabezado correspondiente al ejemplo mencionado anteriormente para el valor de la *Propiedad* de encabezado *vostro riferimento*.  
A través del doble clic del mouse en la columna *Texto 01* o escribiendo manualmente la *Entrada del diccionario*, ingrese *vostro riferimento*.  
:::

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).