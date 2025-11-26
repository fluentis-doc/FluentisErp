---
title: Reclamos - Gestión de defectos
sidebar_position: 4
ai_generated: true
---

## Gestión de defectos<!-- Gestione difetti -->

Es la lista de defectos encontrados por el remitente del documento y se compone de la siguiente información:   
> **Secuencia<!-- Sequenza -->**: es la *Secuencia<!-- Sequenza -->* de visualización de los defectos; se propone una numeración progresiva que puede ser modificada.   
>  
> **Defecto detectado<!-- Difetto riscontrato -->**
>> **Código**: es el código del *Defecto detectado<!-- Difetto riscontrato -->*; solo es posible ingresar los *Defectos<!-- Difetti -->* activos y previstos por el tipo de *Reclamo<!-- Reclamo -->* del documento.   
>> **Descripción**: información de solo lectura, es la descripción del *Defecto detectado<!-- Difetto riscontrato -->*.   
>> **Notas**: anotaciones libres sobre el *Defecto detectado<!-- Difetto riscontrato -->*.   
>  
> **Causa presunta**
>> **Código**: es el código de la *Causa presunta* que ha generado el defecto; solo es posible ingresar las *Causas* presuntas, activas y previstas por el tipo de *Reclamo<!-- Reclamo -->* del documento; la *Causa presunta*, posteriormente a un análisis sobre los *Objetos defectuosos*, puede ser confirmada o no en la *Causa efectiva*.   
>> **Descripción**: información de solo lectura, es la descripción de la *Causa presunta*.   
>> **Notas**: anotaciones libres sobre la *Causa presunta*.   
>  
> **Fase de detección<!-- Fase di rilevamento -->**
>> **Código**: es el código de la *Fase de detección* del proceso donde se detectó el defecto; solo es posible ingresar las *Fases de detección* activas.   
>> **Descripción**: información de solo lectura, es la descripción de la *Fase de detección*.   
>> **Notas**: anotaciones libres sobre la *Fase de detección*.   
>  
> **Cantidad**
> Información resumida para utilizarse exclusivamente si no se desea detallar las *Cantidades* en la sección de *Objetos reclamados*. Estas *Cantidades* no se consideran en ningún cálculo.   
>> **Vendida**: es la cantidad de *Artículos* vendida al remitente del *Reclamo<!-- Reclamo -->*.   
>> **Cuestionada**: es la cantidad de *Artículos* cuestionada por el remitente del *Reclamo<!-- Reclamo -->*.   
>> **Devuelta**: es la cantidad de *Artículos* devuelta por el remitente del *Reclamo<!-- Reclamo -->*.   
>   
> **Referencia acción correctiva**   
>> **Tipo**, **Año** y **Número**: son los referentes, de solo lectura, a la *Acción correctiva* asociada a la línea del '*Defecto* y generada mediante el botón **Crear acción correctiva**.   
>   
> **En garantía**: indicación manual de si el *Defecto detectado<!-- Difetto riscontrato -->* está cubierto por garantía. Esta información no se considera en ningún cálculo.   
> **Cerrado**: indica que la gestión del *Defecto<!-- Difetto -->* ha sido completada; debe ser indicado manualmente por el operador.   
> Al momento del cierre se proponen automáticamente: *Fecha de cierre*, propuesta a la fecha actual y con posibilidad de ser modificada, *Nombre* y *Persona* propuestos como *Usuario A.R.M.* vinculado y *Empleado* vinculado al *Usuario A.R.M.* (*Fecha de cierre*, *Nombre* y *Persona* son informaciones presentes en la pestaña *Datos del defecto*).   
> El cierre de todos los *Defectos<!-- Difetti -->* no comporta automáticamente el cierre del *Reclamo<!-- Reclamo -->*.   
> **Notas**: anotaciones libres.   

### Datos del defecto<!-- Dati difetto -->

Son las informaciones adicionales de la línea *Defecto<!-- Difetto -->* seleccionada. Las informaciones gestionadas son:   
> **Gravedad**: es la *Gravedad* atribuida al defecto; solo es posible ingresar las *Gravedades* activas.   
> **Causa efectiva**: es la causa efectiva que ha generado el defecto; solo es posible ingresar las *Causas* efectivas, activas y previstas por el tipo de *Reclamo<!-- Reclamo -->* del documento.   
> **Nota causa efectiva**: anotaciones libres sobre la *Causa efectiva*.   
> **Solución propuesta**: es la sugerencia de solución técnica/comercial/administrativa a adoptar; solo es posible ingresar las *Soluciones* activas.   
> **Nota solución propuesta**: anotaciones libres sobre la *Solución propuesta*.   
> **Decisión tomada**: es la decisión técnica/comercial/administrativa adoptada para la resolución del defecto; solo es posible ingresar las *Decisiones* activas.   
> **Nota decisión tomada**: anotaciones libres sobre la *Decisión tomada*.   
> **Resolución comercial**: es la decisión comercial/administrativa adoptada para la resolución del defecto; solo es posible ingresar las *Decisiones* activas.   
> **Nota resolución comercial**: anotaciones libres sobre la *Resolución comercial*.   
> **Fecha de cierre**: es la fecha en que se completó la gestión del *Defecto<!-- Difetto -->* específico.   
> Al ingresar la fecha se marca automáticamente el flag *Cerrado* presente en la línea del *Defecto<!-- Difetto -->* seleccionado.   
> **Nombre**: es el *Usuario A.R.M.* que cerró el *Defecto<!-- Difetto -->*. La información es de solo lectura.   
> **Persona**: es el *Empleado* que cerró el *Defecto<!-- Difetto -->*. La información es de solo lectura.   
> **Función**: es la *Función empresarial* que cerró el *Defecto<!-- Difetto -->*.   

### Objetos reclamados<!-- Oggetti reclamati -->

Es la lista de *Objetos reclamados* asociables al *Defecto detectado<!-- Difetto riscontrato -->* seleccionado y se compone de la siguiente información:   
> **Objeto**   
>> **Código de barras**: puede utilizarse para añadir o sustituir el Artículo, Lote, Número de serie y Unidad de carga.   
>> Para toda la información sobre cómo codificar los códigos de barras consulte la página relativa al [Tokenizador de códigos de barra<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Clase**: es la *Clase de artículo* reclamado.   
>> **Código de artículo**: es el código del *Artículo* reclamado.   
>> **Descripción del artículo**: es la descripción del *Artículo* reclamado.   
>> **Variante**: es el código variante del *Artículo* reclamado.   
>> **Lote**: es el código del *Lote* interno del *Artículo* reclamado.   
>> **Unidad de carga**: es la *Unidad de carga* de origen que contenía el *Artículo* reclamado.   
>> Ingresar una *Unidad de carga* comporta la inserción automática de todas las líneas de detalle del *Artículo* presentes en la misma.   
>> Si, en los *Parámetros de Reclamos y No Conformidades*, para el año-fecha del documento, sesión *Reclamos* se ha solicitado el *Agrupamiento de datos U.D.C.*, las líneas con *Artículos* iguales se mostrarán en una sola línea con las cantidades sumadas.   
>> **Número de serie**: es el *Número de serie* del *Artículo* reclamado.   
>  
> **Cantidad**   
>> **Unidad de medida**: información de solo lectura, es la *Unidad de medida* principal del *Artículo* reclamado.   
>> **Vendida**: es la cantidad de *Artículo* vendida al remitente del *Reclamo<!-- Reclamo -->*; el valor debe ser ingresado manualmente.   
>> **Cuestionada**: es la cantidad de *Artículo* cuestionada por el remitente del *Reclamo<!-- Reclamo -->*; el valor debe ser ingresado manualmente.   
>> **Devuelta**: es la cantidad de *Artículo* devuelta por el remitente del *Reclamo<!-- Reclamo -->*; el valor debe ser ingresado manualmente.   
>> **Retrabajada**: es la cantidad de *Artículo* retrabajada por el remitente del *Reclamo<!-- Reclamo -->*; el valor debe ser ingresado manualmente.   
>> **Aceptada**: es la cantidad de *Artículo* aceptada; el valor debe ser ingresado manualmente.   
>
> **Valor**   
>> **Reclamado**: es el valor reclamado por el remitente del *Reclamo<!-- Reclamo -->*; el valor debe ser ingresado manualmente.   
>> **Aceptado**: es el valor aceptado; el valor debe ser ingresado manualmente.   
>
> **Datos de devolución**   
>> **Autorización de retorno**: indica que se autoriza el retorno del *Artículo* devuelto para la *Cantidad aceptada*.   
>> **Fecha de retorno prevista**: es la fecha prevista de retorno del *Artículo* devuelto.   
>> **Lote**: es el *lote* de retorno del *Artículo* devuelto.   
>> **Número de serie**: es el *Número de serie* de retorno del *Artículo* devuelto.   
>> **Unidad de carga**: es la *Unidad de carga* de retorno del *Artículo* devuelto.   

#### Datos del objeto<!-- Dati oggetto -->

Son las informaciones adicionales de la línea del *Objeto reclamado* seleccionado. Las informaciones gestionadas son:   
> **Proyecto**: es la referencia al *Proyecto* del *Defecto<!-- Difetto -->* específico.   
> **Nota de artículo**: anotaciones libres sobre el *Artículo* del *Defecto<!-- Difetto -->* específico.   
> **Nota de lote**: anotaciones libres sobre el *Lote* del *Defecto<!-- Difetto -->* específico.   
> **Nota de unidad de carga**: anotaciones libres sobre la *Unidad de carga* de la línea del *Defecto<!-- Difetto -->* específico.   
> **Notas**: anotaciones libres sobre la línea del *Defecto<!-- Difetto -->* específico.   

> **D.D.T. cliente**: es la referencia a la *Guía de venta* (*Tipo*, *Año* y *Número*), con la que se presume que se ha vendido el bien o el servicio cuestionado.   
> **Factura de venta**: es la referencia a la *Factura de venta* (*Tipo*, *Año* y *Número*), con la que se presume que se ha facturado el bien o el servicio cuestionado.   
> **Recepción de mercancía**: es la referencia a la *Recepción de mercancía* (*Tipo*, *Año* y *Número*), con la que el remitente devuelve el bien cuestionado.   
> **D.D.T. de compra**: es la referencia a la *Guía de venta* (*Tipo*, *Año* y *Número*), con la que se presume que se ha vendido el bien o el servicio cuestionado.   

#### Datos extra<!-- Extra data -->

Es posible ingresar [Datos Extra<!-- Extra Data -->](/docs/configurations/utility/extra-data/extradata/new-extradata) para el *Objeto reclamado* seleccionado.   

### Documentos adjuntos<!-- Documenti allegati -->

En esta lista es posible insertar y consultar posibles documentos adjuntos al *Objeto reclamado* seleccionado.   

### Materiales utilizados<!-- Materiali utilizzati -->

En esta lista es posible indicar los materiales que han sido utilizados para remediar el *Defecto<!-- Difetto -->* seleccionado.   
La lista se compone de la siguiente información:   
>   
> **Artículo**   
>> **Clase**: es la *Clase de artículo*.   
>> **Código**: es el código del *Artículo*.   
>> **Descripción**: es la descripción del *Artículo*.   
>> **Variante**: es el código variante del *Artículo*.   
>> **Lote**: es el código del lote interno utilizado.   
>> **Número de serie**: es el número de serie utilizado.   
>   
> **Cantidad**   
>> **Unidad de medida**: información de solo lectura, es la *Unidad de medida* del *Artículo*.   
>> **Cantidad consumida**: es la cantidad de *Artículo* utilizada para remediar el *Defecto<!-- Difetto -->* seleccionado.   
>   
> **Valor**   
>> **Costo unitario**: es el costo unitario del *Artículo*; el valor debe ser ingresado manualmente.   
>> **Costo total**: se propone como relación entre *Cantidad consumida* y *Costo unitario*; el costo puede ser modificado.   
>
> **Notas**: anotaciones libres.   

### Sujetos involucrados<!-- Soggetti coinvolti -->

En la pestaña se encuentran las indicaciones sobre las *Funciones empresariales* y/o *Empleados* que participarán en la gestión del *Defecto<!-- Difetto -->* seleccionado.   
La lista se compone de la siguiente información:   
> **Secuencia**: es la *Secuencia* de visualización de los *Sujetos involucrados*; se propone una numeración progresiva que puede ser modificada.   
>
> **Función empresarial**   
>> **Código**: es el código de la *Función empresarial* involucrada.   
>> **Descripción**: es la descripción de la *Función empresarial* involucrada.   
>   
> **Empleado**   
>> **Código**: es el código del *Empleado* involucrado.   
>> **Descripción**: es el apellido y nombre del *Empleado* involucrado.   
>   
> **Gestión de la implicación**   
>> **Descripción del sujeto**: anotación libre en caso de que, el sujeto involucrado, no sea *Función empresarial* o *Empleado*.   
>> **Motivo de la implicación**: anotaciones libres sobre el tema   
>> **Fecha límite**: es la fecha dentro de la cual el sujeto involucrado debe completar las actividades relacionadas con el motivo de su implicación.   
>> **Respuesta**: anotaciones libres sobre el tema.   
>> **Cerrado**: indica que la implicación del sujeto ha sido completada.   
>> Solo la *Función o Persona responsable* del *Reclamo<!-- Reclamo -->* o la *Función empresarial* o el *Empleado* involucrado pueden cerrar la implicación.   
>> Al momento del cierre se propone automáticamente la *Fecha de cierre*, propuesta a la fecha actual y puede ser modificada.   
>> **Fecha de cierre**: es la fecha en que se completó la implicación del sujeto.   
>> Solo la *Función o Persona responsable* del *Reclamo<!-- Reclamo -->* o la *Función empresarial* o el *Empleado* involucrado pueden ingresar o modificar esta fecha.   
>> Al ingresar la fecha se marca automáticamente el flag *Cerrado*.   
>
> **Nota**: anotaciones libres.   

### Datos extra<!-- Extra data -->

Es posible ingresar [Datos Extra<!-- Extra Data -->](/docs/configurations/utility/extra-data/extradata/new-extradata) para el *Defecto<!-- Difetto -->* seleccionado.   

### Documentos adjuntos<!-- Documenti allegati -->

En esta lista es posible insertar y consultar posibles documentos adjuntos al *Defecto<!-- Difetto -->* seleccionado.   

Para todo lo no detallado en este documento sobre el funcionamiento general de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).