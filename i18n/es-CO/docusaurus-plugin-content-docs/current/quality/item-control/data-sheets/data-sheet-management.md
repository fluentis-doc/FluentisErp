---
title: scheda tecnica
sidebar_position: 2
---

La gestión se encuentra en la ruta **Calidad > Controles de artículo > Fichas técnicas > Nueva ficha técnica** o se puede ejecutar desde la **Búsqueda de Fichas técnicas**.

:::important ¿Para qué sirve? (A cosa serve)
Las Fichas técnicas catalogan toda la información que describe las características de los productos asociados como aptos para un contrato, una especificación funcional o un uso determinado.  
Las fichas técnicas pueden ser personalizables por Cliente.  
Se gestionan las revisiones y la trazabilidad entre las Fichas técnicas deseadas.

A estándar están disponibles los informes de:  
> **scheda tecnica**: ficha con la lista de las *Propiedades* y de las *Normas y Leyes* asociadas (para uso interno).  
> **scheda prodotto**: ficha que reporta los datos del *Producto* y de las *Propiedades* (para uso comercial).  
:::


## Botones de comando (Pulsanti di comando)


### ![](/img/neutral/common/save.png) Guardar (Salva)

Al presionar este botón, se memorizan toda la información modificada de la *scheda tecnica* visualizada.


### ![](/img/neutral/common/duplicate.png) Duplicar Ficha (Duplica Scheda)

Es posible duplicar la *scheda tecnica* visualizada en una nueva *scheda tecnica*. Solo es necesario presionar el botón **duplica**.  
Se visualizará un requerimiento de:  
> **tipo scheda**: es el *Tipo de ficha* de la nueva *scheda tecnica* (dato obligatorio), se propone el *Tipo de ficha* de la *scheda tecnica* de origen.  
> **del cliente**: es el *Cliente* de la nueva *scheda tecnica*, se propone el número de *Cliente* de la *scheda tecnica* de origen.  
> **extra data**: listado de los datos extra previstos por el *Tipo de ficha* indicado.  
> **nuovo codice**: es el *Código* de la nueva *scheda tecnica* (dato obligatorio), se propone en base a lo previsto por el *Método de Codificación* asociado al *Tipo de ficha técnica*.  
> **duplica con rintracciabilità**: indica si se desea mantener relación/trazabilidad, en la *scheda tecnica* de origen (tabulador *Fichas relacionadas* de la *scheda tecnica* de origen) y en la *scheda tecnica* de destino (en el expander *Origen de datos de la ficha* presente en los *datos de cabecera*).  

*Tipo de ficha* y *Del cliente* son propuestos por el documento de origen; el *Código* se propone si, al *Tipo de ficha*, está asociado un *Método de codificación*.  
Luego, presione el botón **OK** o el botón **cancel** si se desea continuar con la actividad de duplicación o no.  
La nueva *scheda tecnica* creada tendrá la *Revisión* igual a *Cero*.  
Al finalizar la elaboración, se visualizará la nueva *scheda tecnica*.


### ![](/img/neutral/common/execute.png) Crear nueva revisión (Crea nuova revisione)

Para poder crear una nueva *Revisión* de la *scheda tecnica* visualizada, es necesario presionar el botón **crea nuova revisione**.  
Se crea una nueva *scheda tecnica*, con toda la información de la *scheda tecnica* de origen pero con el índice de *Revisión* incrementado y la *Fecha de inicio de validez* igual a la fecha actual.  
La *scheda tecnica* de origen pierde su validez, la *Fecha de fin de validez* se establece igual a la fecha actual.  
Al finalizar la elaboración, se visualizará la nueva *Revisión* de la *scheda tecnica*.


### ![](/img/neutral/common/item-web.png) Crear Plan de control (Crea Piano di controllo)

Desde la *scheda tecnica* es posible crear un *Plan de control*; para ello, es necesario presionar el botón **crea piano di controllo**.  
Se crea un nuevo *Plan de control*, se copian solo las *Propiedades* de origen con el indicador *Pruebas a detectar*, toda la otra información de la *scheda tecnica* pero con el índice de *Revisión* igual a *cero* y con *Fecha de inicio de validez* igual a la fecha actual. Se visualizará una solicitud de:  
> **tipo piano di controllo**: es el *Tipo de plan de control* del nuevo *Plan de control* (dato obligatorio).  
> **Número**: es el número progresivo del nuevo *Plan de control* (dato obligatorio), se propone en base a lo previsto por la *Numeración* asociada al *Tipo de plan de control* y a la fecha actual.  
> **crea mantenendo la rintracciabilità**: indica si se desea mantener relación/trazabilidad, de la *scheda tecnica* de origen, en el *Plan de control* de destino (en el expander *Origen del Plan de control* presente en los *datos de cabecera*).  

Luego, presione el botón **OK** o el botón **cancel** si se desea continuar con la actividad de creación o no.  
Al finalizar la elaboración, se visualizará el nuevo *Plan de control*.


### ![](/img/neutral/common/duplicate.png) Duplicar prueba (Duplica prova)

En contexto con el tabulador *Propiedades (Proprietà)*, el botón solo está habilitado si, de la lista *Propiedades*, se ha seleccionado una sola línea de *Propiedad*.  
Toda la información de la *Propiedad* de origen se duplicará en una nueva *Propiedad* añadida en *Secuencia* a las *Propiedades* ya existentes.


## Gestión de datos (Gestione dati)


### Datos de cabecera (Dati di testata)

Las informaciones gestionables son:  
> **tipo scheda**: es el *Tipo de ficha técnica* (dato obligatorio).  
> Al ingresar manualmente una nueva *scheda tecnica* se propone el *Tipo de ficha técnica* indicado en el expander *Fichas técnicas* del tabulador *generale* presente en los *Parámetros de Control de artículos*.  
>
> **codice**: es el *Código* de la *scheda tecnica* (dato obligatorio).  
> Se propone en base a lo previsto por el *Método de Codificación* asociado al *Tipo de ficha técnica*.  
>
> **revisione**: es la *Revisión* de la *scheda tecnica* (dato obligatorio).  
La información es modificable si se está creando una nueva *scheda tecnica*; de lo contrario, es solo de lectura; puede variar de manera controlada por el sistema utilizando el botón *crea nuova revisione* que incrementa el valor anterior de *Revisión* en una unidad.  
>
> **descrizione**: es la descripción de la *scheda tecnica*.  
> **nome commerciale**: es la descripción comercial de la *scheda tecnica*.  
> **del cliente**: es la razón social del *Cliente*. Las *Propiedades* son personalizadas para el *Cliente*/*Artículos asociados*.  
> **Fecha solicitada / Solicitud de (Data richiesta/Richiesta da)**: solo los referentes en qué fecha y quién es la persona que ha solicitado la creación de la *scheda tecnica*.  
>
> **Validez: Inicio / Fin (Validità: Inizio/Fine)**: son las fechas de inicio y fin de validez de la *scheda tecnica*.  
> Las fechas se gestionan automáticamente al crear una nueva *Revisión* de la *scheda tecnica*.  
>
> **responsabile**: es el *Empleado* responsable de la *scheda tecnica*.  
> Al ingresar manualmente una nueva *scheda tecnica* se propone el *Responsable* indicado en el expander *Fichas técnicas* del tabulador *generale* presente en los *Parámetros de Control de artículos*.  
>
> **origine dati scheda**: expander donde es posible ingresar:  
>
>> **tipo/scheda origine/rev.**: contiene los referentes de la *scheda tecnica de origen* (*Tipo de ficha*, *Código* y *Revisión*).  
>> **motivo della revisione**: una breve descripción del motivo que condujo a la revisión.  
>> La información puede variar si la *scheda tecnica* aún está vigente.  
>
> **note**: anotaciones libres.  


### Atributos de ficha (Attributi scheda)
Es posible ingresar [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *scheda tecnica*.  
Se heredan de los *Atributos de scheda tecnica* asociados al *Tipo de ficha técnica*.


### Propiedades (Proprietà)
Contiene las *Propiedades* de los *Artículos* o *Atributos del artículo* de la *scheda tecnica*.  
La lista se compone de la siguiente información:  
> **sequenza**: es la secuencia de visualización/importancia de la *Propiedad*.  
> **tipo prova**: es el código de la *Propiedad*.  
> **descrizione tipo prova**: es la descripción de la *Propiedad*. La información es de solo lectura.  
> **descrizione**: es la descripción de la *Propiedad* editable.  
> **riferimento piano di controllo standard**: es un campo descriptivo que contiene los referentes a codificaciones de pruebas reconocidas globalmente.  
> **strumento di misura**: es la *Categoría del instrumento de medida* que se utilizará para poder detectar los *Valores* expresados en la *Propiedad*.  
> **prova da rilevare**: indica si la *Propiedad* es una *Prueba a detectar*.  
Al crear un *Plan de control* desde la *scheda tecnica*, la *Propiedad* se copiará en las *Pruebas a detectar*.  
> **unità di misura**: es la *Unidad de medida* con la que se expresan el *Valor nominal* y los *Límites mínimo y máximo* si se expresan en valor y no en porcentaje.  
> **tipo valore**: es el *Tipo de valor* con el que expresar el *Valor nominal*; los *Tipos de valor* posibles son: *Numérico*, *Sí/No* o *Texto*.  
> **tipo limite**: habilitado si el *Tipo de valor* es *Numérico*, es el *Tipo de límite* que controlará la habilitación de los *Límites* y los valores de *Tolerancia*.  
> **valore nominale**: es el valor teórico esperado de la *Propiedad*.  
> **limite minimo**: límite mínimo permitido respecto al *Valor nominal*.  
> **L.min.(toll-) (L.min.(toll-))**: es el límite de tolerancia negativa sobre el límite mínimo.  
> **L.min.(toll+) (L.min.(toll+))**: es el límite de tolerancia positiva sobre el límite mínimo.  
> **limite massimo**: límite máximo permitido respecto al *Valor nominal*.  
> **L.max.(toll-) (L.max.(toll-))**: es el límite de tolerancia negativa sobre el límite máximo.  
> **L.max.(toll+) (L.max.(toll+))**: es el límite de tolerancia positiva sobre el límite máximo.  
> **%**: indica si el *Límite mínimo* y el *Límite máximo* están expresados en porcentaje.  
> **data inizio validità**: es la fecha de inicio de validez de la *Propiedad*.  
> **data fine validità**: es la fecha de fin de validez de la *Propiedad*.  
> **stampabili**: indica si la información es imprimible o no en los informes: *scheda tecnica* y *Ficha de Producto*.  
> **note**: anotaciones libres.  

Los límites de tolerancia positiva y negativa sobre los límites mínimos y máximos son informaciones que habitualmente son suministradas por el error del *Instrumento de medida* utilizado para detectar los valores. En esta versión, solo pueden ser ingresados manualmente por el operador.


### Normas y Leyes (Norme e Leggi)
Contiene los referentes a *Normativas* y/o *legislaciones* aplicables a las *Propiedades* de la *scheda tecnica*.  
La lista se compone de la siguiente información:  
> **tipo**: es el *Tipo de norma y ley* asociada a la *Norma y Ley* indicada. La información es de solo lectura.  
> **codice**: es la *Norma y Ley*.  
> **descrizione**: es la descripción de la *Norma y Ley* indicada. La información es de solo lectura.  
> **note**: anotaciones libres.


### Clientes (Clienti)
Contiene los *Clientes* interesados en los *Artículos* con *Propiedades* similares y enumerados en las dos listas respectivas.  
La lista se compone de la siguiente información:  
> **cliente**: es la razón social del *Cliente*. Las *Propiedades* son personalizadas para los *Clientes*/*Artículos asociados*.  
> **note**: anotaciones libres.


### Artículos asociados (Articoli associati)
Contiene los *Artículos* con características similares y enumeradas en la lista de las *Propiedades*.  
La lista se compone de la siguiente información:  
> **classe**: es la clase del *Artículo*.  
> **codice articolo**: es el código del *Artículo*.  
> **descrizione articolo**: es la descripción del *Artículo*.  
> **variante**: es el código de la *Variante artículo*.  
> **descrizione variante**: es la descripción de la *Variante artículo*. La información es de solo lectura.  
> **tipo dichiarazione**: es el *Tipo de declaración* (de no responsabilidad) que se propondrá en el informe *Ficha de Producto*.  
> **note**: anotaciones libres.


### Atributos del artículo (Attributi articolo)
Como alternativa a la lista de *Artículos asociados*, es posible ingresar características (en formato [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata)) por las cuales las *Propiedades* de la *scheda tecnica* son válidas.


### Fichas correlacionadas (Schede correlate)
En esta lista es posible visualizar las *Fichas técnicas* duplicadas con trazabilidad desde la *Ficha* visualizada.  
A través de un doble clic del mouse sobre la línea deseada, es posible ejecutar la gestión de la *scheda tecnica* seleccionada.


### Revisiones (Revisioni)
En esta lista es posible visualizar el historial de las *Revisiones* anteriores de la *scheda tecnica* visualizada.  
A través de un doble clic del mouse sobre la línea deseada, es posible ejecutar la gestión de la *scheda tecnica* seleccionada.


### Documentos adjuntos (Documenti collegati)
En esta lista es posible ingresar y consultar cualquier archivo adjunto; es posible visualizar la vista previa.


Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).