---
title: piano di controllo
sidebar_position: 2
---

La gestión se encuentra en la ruta **Calidad > Controles de artículo > Planes de control > Nuevo plan de control** o se puede realizar desde **Búsqueda de Planes de control**. 

:::important ¿Para qué sirve? (A cosa serve)  
En los Planes de control se catalogan todas las pruebas planificadas, verificaciones, mediciones necesarias y los valores a obtener para garantizar que los materiales y productos asociados se encuentren dentro de los límites de las propiedades requeridas.  
A través de los Planes de control es posible predefinir los controles que se llevarán a cabo durante el ciclo de vida de un artículo: desde los controles en la aceptación de materiales, devoluciones de trabajo por encargo, hasta los controles durante el ciclo productivo de un artículo: antes, durante y después de la creación del producto.  
Los Planes de control, al igual que las Fichas técnicas, pueden ser personalizables para Clientes y/o Proveedores. También en este documento se gestionan las revisiones y la trazabilidad entre los Planes de control deseados.  
A cada prueba planificada es posible indicar: si la prueba se realiza internamente o por terceros, la categoría y el instrumento de medida a utilizar, los tipos de valor requeridos (Sí/No o Numéricos), el valor nominal, los límites inferior y superior que se pueden especificar en porcentaje o en valor absoluto, el número de mediciones a realizar y con qué frecuencia.  

Enumeramos algunos ejemplos de tipos de Planes de control posibles: Controles en aceptación, Controles en aceptación para proveedores críticos, Controles de producción, Pruebas finales.  

A estándar está disponible la reportística de: **piano di controllo**.  
:::


## Botones de comando


### ![](/img/neutral/common/save.png) Guardar (Salva)

Al pulsar este botón se almacenan toda la información modificada del *piano di controllo* visualizado.   


### ![](/img/neutral/common/duplicate.png) Duplicar piano di controllo (Duplica Piano di controllo)

Es posible duplicar el *piano di controllo* visualizado en un nuevo *piano di controllo*. Solo es necesario pulsar el botón **duplica**.  
Se muestra una solicitud de:  
> **tipo piano di controllo**: es el *Tipo de plan de control* del nuevo *piano di controllo* (dato obligatorio).  
> Se propone el *Tipo de plan de control* del *piano di controllo* de origen.  
> **numero**: es el *Número* progresivo del nuevo *piano di controllo* (dato obligatorio).  
> Se propone según lo indicado por la *Numeración* asociada al *Tipo de plan de control* y la fecha actual.  
> **duplica con rintracciabilità**: indica si se desea mantener la relación/ trazabilidad del *piano di controllo* de destino en el *piano di controllo* de origen y, en particular, en la pestaña *Planes de control relacionados*.  

Luego presionar el botón **OK** o el botón **cancel** si se desea continuar con la actividad de duplicación o no.  
Al finalizar el procesamiento, el nuevo *piano di controllo* se visualizará.   


### ![](/img/neutral/common/execute.png) Crear nueva revisión (Crea nuova revisione)

Para poder crear una nueva *Revisión* a un *piano di controllo* existente, es necesario pulsar el botón **crea nuova edizione**.  
Se crea un nuevo *piano di controllo*, con toda la información del *piano di controllo* de origen pero con el índice de *Revisión* incrementado y la *Fecha de inicio de validez* igual a la fecha actual.  
El *piano di controllo* de origen termina su validez al establecer automáticamente la *Fecha de fin de validez* igual a la fecha actual.  
Al finalizar el procesamiento, la nueva *Revisión* del *piano di controllo* se visualizará.


### Crear nueva Ficha técnica (Crea nuova Scheda tecnica)

Desde el *piano di controllo* es posible crear una *Ficha técnica*; para ello es necesario pulsar el botón **Crear nueva Ficha técnica (Crea nuova Scheda tecnica)**.  
Se crea una nueva *Ficha técnica*, con toda la información del *piano di controllo* de origen pero con el índice de *Revisión* igual a *cero* y con *Fecha de inicio de validez* igual a la fecha actual. Se mostrará una solicitud de:  
> **tipo scheda**: es el *Tipo de ficha* de la nueva *Ficha técnica* (dato obligatorio).  
> **del cliente**: es el *Cliente* de la nueva *Ficha técnica*, se propone el número de *Cliente* del *piano di controllo* de origen (solo si es de *Tipo número de cliente*).  
> **nuovo codice**: es el *Código* de la nueva *Ficha técnica* (dato obligatorio), se propone según lo indicado por el *Método de Codificación* asociado al *Tipo ficha técnica*.  
> **rev.**: es el índice de *Revisión* de la nueva *Ficha técnica* (dato obligatorio), se propone a *cero*.  
> **crea mantenendo la rintracciabilità**: indica si se desea mantener la relación/ trazabilidad, en la *Ficha técnica* de destino, en el *piano di controllo* de origen y en particular en la pestaña *Fichas relacionadas*.  

Luego presionar el botón **OK** o el botón **cancel** si se desea continuar con la actividad de creación o no.  
Al finalizar el procesamiento, la nueva *Ficha técnica* se visualizará.   


### ![](/img/neutral/common/duplicate.png) Duplicar prueba (Duplica prova)

Contextualmente en la pestaña *Pruebas planificadas*, el botón está habilitado solamente si, de la lista *Pruebas planificadas*, se ha seleccionado una sola línea de *Prueba*.  
Toda la información de la *Prueba planificada* de origen se duplica en una nueva *Prueba planificada* añadiéndose en *Secuencia* a las *Pruebas planificadas* ya existentes.


## Gestión de datos


### Datos de cabecera

Las informaciones manejables son:  
> **tipo**: es el *Tipo de plan de control* (dato obligatorio).  
> Al ingresar manualmente un nuevo *piano di controllo* se propone el *Tipo de plan de control* indicado en el expansor *Planes de control* de la pestaña *General* presente en los *Parámetros de Control de artículos*.  
>
> **Año/Número (Anno/Numero)**: son el *Año* y *Número* del *piano di controllo* (datos obligatorios).  
> Al ingresar un nuevo *piano di controllo*, el *Año* y el *Número* se proponen según la fecha actual y la *Numeración* asociada al *Tipo de plan de control*.  
>
> **rev.**: es la Revisión del *piano di controllo* (dato obligatorio).  
La información es modificable si se está creando un nuevo *piano di controllo*; de lo contrario, es de solo lectura; se puede variar de forma controlada por el sistema usando el botón *Crear nueva revisión* que incrementa el valor anterior de *Revisión* en una unidad.  
>
> **descrizione**: es la descripción del *piano di controllo*.  
> **per il cliente/fornitore**: es la razón social del *Cliente* o *Proveedor*. Las *Pruebas planificadas* son personalizadas para el *Cliente* o *Proveedor* y *Artículos asociados*.    
> **note del cliente/fornitore**: anotaciones libres para el cliente/proveedor.  
>
> **specifica del cliente**: expansor donde es posible ingresar:  
>
>> **data specifica**: es la fecha de la especificación recibida del cliente.  
>> **riferimento**: anotaciones libres sobre la referencia a la especificación recibida del cliente que requiere controles específicos a realizar para los *Artículos asociados*.  
>> **data scadenza**: es la fecha de fin de validez de la especificación recibida del cliente.  
>> **note**: anotaciones libres relacionadas con la especificación recibida del cliente.  
>
> **Fecha solicitada/Solicitado por (Data richiesta/Richiesta da)**: solo los referentes en qué fecha y quién es la persona que ha solicitado la creación del *piano di controllo*.    
>
> **Validez: Inicio/Fini (Validità: Inizio/Fine)**: son las fechas de inicio y fin de validez del *piano di controllo*.    
> Las fechas se gestionan automáticamente al crear una nueva *Revisión* del *piano di controllo*. 
>
> **responsabile**: es el *Empleado* responsable del *piano di controllo*.  
> Al ingresar manualmente un nuevo *piano di controllo*, se propone el *Responsable* indicado en el expansor *Planes de control* de la pestaña *General* presente en los *Parámetros de Control de artículos*.  
>
> **note**: anotaciones libres.  
>
> **origine piano di controllo**: expansor donde es posible ingresar:  
>
>> **scheda origine**: contiene los referentes de la *Ficha técnica de origen* (*Tipo ficha*, *Código* y *Revisión*).  
>> **piano di controllo**: contiene los referentes del *piano di controllo de origen* (*Tipo plan*, *Año*, *Número* y *Revisión*).  
>> **motivo della revisione**: una breve descripción del motivo que ha llevado a la revisión.  
>> La información puede ser modificada si el *piano di controllo* aún está en curso de validez.   


### Atributos del plan de control
Es posible ingresar [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *piano di controllo*.   
Se heredan de los *Datos adicionales* asociados al *Tipo de plan de control*.   


### Pruebas planificadas
Contiene las *Pruebas planificadas* de los *Artículos* o *Atributos de artículo* del *piano di controllo*.  
La lista se compone de la siguiente información:  
> **sequenza**: es la secuencia de ejecución de la *Prueba planificada*.   
> **tipo prova**: es el código de la *Prueba planificada*.   
> **descrizione tipo prova**: es la descripción de la *Prueba planificada*. La información es de solo lectura.   
> **descrizione**: es la descripción de la *Prueba planificada* que se puede completar.   
> **riferimento piano di controllo standard**: es un campo descriptivo que contiene los referentes a codificaciones de pruebas reconocidas globalmente.   
> **prova interna**: indica si la *Prueba* se realiza internamente o en un laboratorio externo.   
> **laboratorio esterno**: es la razón social del *Proveedor* que realizará la prueba. La información es de solo lectura si se indica la *Prueba interna*.   
> **categoria strumento di misura**: es la *Categoría del instrumento de medida* a utilizar para poder registrar los *Valores* expresados en la *Prueba*.   
> **strumento di misura**: es el *Instrumento de medida* a utilizar para poder registrar los *Valores* expresados en la *Prueba*.   
> **unità di misura**: es la *Unidad de medida* con la que se expresan el *Valor nominal* y los *Límites mínimo y máximo* si se expresan en valor y no en porcentaje.   
> **tipo valore**: es el *Tipo de valor* con el que expresar el *Valor nominal*; los *Tipos de valor* posibles son: *Numérico*, *Sí/No* o *Texto*.   
> **tipo limite**: habilitado si el *Tipo de valor* es *Numérico*, es el *Tipo de límite* que guiará la habilitación de los *Límites* y los valores de *Tolerancia*.   
> **valore nominale**: es el valor teórico esperado de la *Prueba planificada*.   
> **limite minimo**: límite mínimo permitido respecto al *Valor nominal*.   
> **toll-**: es el límite de tolerancia negativa sobre el límite mínimo.   
> **toll+**: es el límite de tolerancia positiva sobre el límite mínimo.   
> **limite massimo**: límite máximo permitido respecto al *Valor nominal*.   
> **toll-**: es el límite de tolerancia negativa sobre el límite máximo.   
> **toll+**: es el límite de tolerancia positiva sobre el límite máximo.   
> **% (porcentaje)**: indica si el *Límite mínimo* y el *Límite máximo* se expresan en porcentaje.   
> **tipo controllo prova**: es el *Tipo de control* a realizar sobre la *Prueba planificada*.   
> **frequenza**: anotaciones libres relacionadas con la frecuencia de muestreo.   
> **Número de mediciones (Numero rilevazioni)**: es el número de mediciones de valores mínimas sugeridas a realizar.   
> **data inizio validità**: es la fecha de inicio de validez de la *Prueba planificada*.   
> **data fine validità**: es la fecha de fin de validez de la *Prueba planificada*.   
> **stampato**: indica si la información es imprimible o no en el reporte: *piano di controllo*.   
> **note**: anotaciones libres.   
> **Descripción de la Categoría del Instrumento de medida (Descrizione Categoria Strumento di misura)**: es la *Descripción de la categoría del instrumento de medida* a utilizar. La información es de solo lectura.   
> **descrizione strumento di misura**: es la *Descripción del instrumento de medida* a utilizar. La información es de solo lectura.   


#### Atributos de prueba planificada
Es posible ingresar [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para la *Prueba planificada*.   
Se heredan de los *Atributos del tipo de prueba* presentes en los *Tipos de prueba*.   


#### Configuración de la prueba
Contiene los [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) necesarios para que los operadores preparen todos los instrumentos necesarios para poder iniciar una determinada prueba. Pueden considerarse configuraciones necesarias, información operativa previa a la ejecución de la prueba.  
Se heredan de los *Parámetros de configuración de prueba e instrumento de medida* presentes en los *Tipos de prueba*.   


#### Funciones de detección y aprobación
Es una atribución de derechos que enumera quién puede detectar y/o aprobar los valores de la prueba.   
Se heredan de las *Funciones de detección y aprobación* presentes en los *Tipos de prueba*.   
La lista se compone de la siguiente información:  
> **funzione**: es el código de la *Función empresarial*.   
> **descrizione funzione**: es la descripción de la *Función empresarial*.   
> **tipo attività**: es el derecho otorgado a la *Función empresarial* durante las actividades de detección y/o aprobación de una prueba. Los valores posibles son:  
> - *Puede detectar* - la *Función empresarial* tiene permisos de solo detección de los valores;  
> - *Puede aprobar* - la *Función empresarial* tiene permisos de solo aprobación de la prueba;  
> - *Puede detectar y aprobar* - la *Función empresarial* tiene permisos de detección de valores y aprobación de la prueba.   
>
> Otras *Funciones empresariales* no listadas no tienen ningún derecho de detección de valores y aprobación de la prueba.   
> Si no se especifican *Funciones empresariales*, todos los operadores podrán detectar valores y aprobar la prueba.  
>
> **note**: anotaciones libres.


#### Documentos adjuntos (Documenti allegati)
En esta lista es posible insertar y consultar posibles anexos; se puede visualizar la vista previa.   


### Clientes/Proveedores
Contiene los *Clientes*/*Proveedores* para los cuales realizar las *Pruebas planificadas* a los *Artículos asociados*.  
La lista se compone de la siguiente información:  
> **cliente/fornitore**: es la razón social del *Cliente* o "Proveedor". Las *Propiedades* están personalizadas para los *Clientes*/*Proveedores*/*Artículos asociados*.   
> **data specifica**: es la fecha de la especificación recibida del cliente.    
> **Referencias de la especificación (Riferimenti specifica)**: anotaciones libres sobre la referencia a la especificación recibida del cliente que requiere controles específicos a realizar para los *Artículos asociados*.  
> **nota specifica**: anotaciones libres relacionadas con la especificación recibida del cliente.   
> **note**: anotaciones libres.   


### Artículos asociados
Contiene los *Artículos* con características similares y listados en la lista de *Pruebas planificadas*.  
La lista se compone de la siguiente información:  
> **classe**: es la clase del *Artículo*.   
> **codice articolo**: es el código del *Artículo*.   
> **descrizione articolo**: es la descripción del *Artículo*.   
> **variante**: es el código de la *Variante de artículo*.   
> **descrizione variante**: es la descripción de la *Variante de artículo*. La información es de solo lectura.   
> **fornitore**: es la razón social del *Proveedor* que entrega el *Artículo* para el cual se activarán las *Pruebas planificadas*.   
> **note**: anotaciones libres.   


### Atributos del artículo
Alternativamente a la lista de los *Artículos asociados*, es posible ingresar características (en formato [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata)) por las cuales las *Pruebas planificadas* del *piano di controllo* son válidas.   


### Fichas relacionadas
En esta lista es posible visualizar las *Fichas técnicas* creadas con trazabilidad desde el *piano di controllo* visualizado.  
A través de un doble clic del mouse en la fila deseada, es posible gestionar la *Ficha técnica* seleccionada.   


### Planes de control relacionados
En esta lista es posible visualizar los *Planes de control* duplicados con trazabilidad desde el *piano di controllo* visualizado.  
A través de un doble clic del mouse en la fila deseada, es posible gestionar el *piano di controllo* seleccionado.   


### Revisiones
En esta lista es posible visualizar el historial de las *Revisiones* anteriores al *piano di controllo* visualizado.  
A través de un doble clic del mouse en la fila deseada, es posible gestionar el *piano di controllo* seleccionado.   


### Documentos vinculados
En esta lista es posible insertar y consultar posibles anexos; se puede visualizar la vista previa.   


Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).