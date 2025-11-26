---
title: Reclamos
sidebar_position: 2
ai_generated: true
---

La gestión se encuentra en la ruta **Calidad > Reclamos > Nuevo reclamo<!-- Reclami > Nuovo reclamo -->** o también puede realizarse desde la **Búsqueda de reclamos<!-- Ricerca reclami -->**.   

:::important ¿Para qué sirve?<!-- A cosa serve -->
Los reclamos<!-- Reclami --> sirven para registrar la insatisfacción respecto a un servicio o producto, permitiendo a la empresa reconocer y corregir eventuales problemas. Son una herramienta para mejorar la calidad y mantener una buena relación con los clientes y deben:      
- determinar las causas de la no conformidad;   
- determinar si existen o pueden presentarse anomalías similares;   
- evaluar la necesidad de acciones para eliminar las causas que generaron las anomalías detectadas.

De forma estándar están disponibles los siguientes reportes:
> **Reclamo<!-- Reclamo -->**: ficha del *Reclamo*;   
> **Reclamo 8D<!-- Reclamo 8D -->**: ficha, en formato 8D, del *Reclamo*;   
> **Autorización de devolución<!-- Autorizzazione al rientro -->**: ficha del *Reclamo* utilizada para la autorización de devolución de productos retornados por el *Cliente*;   
> **Notificación de desistimiento<!-- Notifica di recesso -->**: ficha del *Reclamo* utilizada para la notificación del desistimiento del *Reclamo* al *Cliente*;   
> **Lista de reclamos por cliente<!-- Elenco reclami per cliente -->**: lista de los reclamos<!-- reclami --> seleccionados en la *Búsqueda de reclamos<!-- Ricerca reclami -->* agrupados por *Cliente*;   
> **Lista de reclamos por tipo<!-- Elenco reclami per tipo -->**: lista de los reclamos<!-- reclami --> seleccionados en la *Búsqueda de reclamos<!-- Ricerca reclami -->* agrupados por *Tipo de reclamo<!-- Tipo reclamo -->*.
:::

## Botones de comando<!-- Pulsanti di comando -->

### ![](/img/neutral/common/save.png) Guardar<!-- Salva -->

Al pulsar este botón se guardan todas las informaciones modificadas del *Reclamo* visualizado.   

### ![](/img/neutral/common/execute.png) Valorización de reclamo<!-- Valorizzazione reclamo -->

Botón contextual para la visualización de la pestaña *Cabecera<!-- Testata -->*.   
Es posible crear una *Nota de crédito* a favor del remitente del *Reclamo*.   
El botón sólo está habilitado si el *Reclamo* fue guardado, aprobado y existe un *Valor a acreditar*.   
Se muestra una solicitud/confirmación de datos para:   
> **Tipo de factura<!-- Tipo fattura -->**: es el *Tipo de documento* de la nueva *Nota de crédito* (dato obligatorio); se propone el *Tipo de factura<!-- Tipo fattura -->* ingresado en el *Tipo de reclamo<!-- Tipo reclamo -->* del *Reclamo* de origen.   
> **Descripción**: es la descripción que se utilizará para la línea de *Artículo gasto* de la nueva *Nota de crédito* (dato obligatorio); se propone la descripción que se parametriza en los [Parámetros de valorización de reclamos](/docs/quality/claims-and-non-compliance/claims/procedures/claim-valorisation), sesión *Referencias de reclamos<!-- Riferimenti reclami -->*.   
> **I.V.A.**: es el *Tipo I.V.A.* que se utilizará para la línea de *Artículo gasto* de la nueva *Nota de crédito*.   
> Se propone el *Tipo I.V.A.* con las siguientes prioridades:   
> 1. si existe una *Declaración de intención*, se considera el *Tipo I.V.A.* presente en el documento;   
> 2. si no existe una *Declaración de intención*, se considera el *Tipo I.V.A.* asociado al remitente del *Reclamo*;   
> 3. si no existe una *Declaración de intención* y no se ha indicado un *Tipo I.V.A.* asociado al remitente del *Reclamo*, se considera el *Tipo I.V.A.* asociado al *Tipo de reclamo<!-- Tipo reclamo -->*.   
>
> Posteriormente, presione el botón **OK** o el botón **Cancelar<!-- Cancel -->** si desea continuar o no con la creación.   
> Al finalizar el proceso, la *Nota de crédito* recién creada será mostrada.   

### ![](/img/neutral/common/corrective.png) Crear acción correctiva<!-- Crea azione correttiva -->

Botón contextual para la visualización de la pestaña:   
> *Gestión de defectos<!-- Gestione difetti -->* - Si el *Modelo* del *Tipo de reclamo<!-- Tipo reclamo -->* es *Classic*;   
> *Acciones de contención*, *Acciones permanentes* y *Fases* - Si el *Modelo* del *Tipo de reclamo<!-- Tipo reclamo -->* es *8D Problem Solving*.   
>
El botón solo está habilitado si el *Reclamo* ha sido guardado, aprobado y se ha seleccionado una línea válida en la lista contextual.   

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />

### Crear no conformidad<!-- Crea non conformità -->

Botón contextual para la visualización de la pestaña:   
> *Gestión de defectos<!-- Gestione difetti -->* - Si el *Modelo* del *Tipo de reclamo<!-- Tipo reclamo -->* es *Classic*;   
> *Causas* - Si el *Modelo* del *Tipo de reclamo<!-- Tipo reclamo -->* es *8D Problem Solving*.   
El botón sólo está habilitado si el *Reclamo* ha sido guardado, aprobado y se ha seleccionado una línea válida en la lista contextual.   
Se muestra una solicitud/confirmación de datos para:   
>
> ** sesión por implementar **<!-- sessione da implementare -->
>
> Posteriormente, presione el botón **OK** o el botón **Cancelar<!-- Cancel -->** si desea continuar o no con la creación.   
> Al finalizar el proceso, la *No conformidad* recién creada será mostrada para permitir completar los datos faltantes.   

## Gestión de datos<!-- Gestione dati -->

## Datos de cabecera del documento<!-- Dati di testata del documento -->

La información gestionada es:
> **Tipo de no conformidad<!-- Tipo non conformità -->**: es el *Tipo* del documento (dato obligatorio).   
> Al insertar una nueva *No conformidad*, se sugiere el *Tipo de reclamo<!-- Tipo reclamo -->* indicado en los *Parámetros Reclamos y No conformidades*, sesión *Reclamos*.   
> Según el *Modelo de reclamo<!-- Modello reclamo -->* especificado en el *Tipo de reclamo<!-- Tipo reclamo -->*, se habilitará la gestión del *Reclamo* en modo *Gestión de defectos<!-- Gestione difetti -->* o *8D - problem solving*.   
> Según el campo *Uso en<!-- Utilizzo in -->* especificado en el *Tipo de reclamo<!-- Tipo reclamo -->*, se habilitará la posibilidad de ingresar un *Reclamo de cliente* o un *Reclamo de proveedor*.   
>
> **Año/Número/Fecha**: son el *Año*, *Número* y *Fecha* del *Reclamo* (datos obligatorios).   
> Al ingresar un nuevo *Reclamo*:   
> - la *Fecha* se propone igual a la fecha actual;   
> - el *Año* y el *Número* se proponen en base a la *Fecha* y la *Numeración* asociada al *Tipo de reclamo<!-- Tipo reclamo -->*.   
>
> **Cliente**, **Contacto de cliente** o **Distribuidor**: son las referencias de los remitentes (al menos uno de los tres es dato obligatorio).
> El *Cliente* se renombra a *Proveedor* si el documento es un *Reclamo de proveedor*.    
> El *Contacto de cliente* es un cliente no directo, codificado en el maestro de *Contactos*, cuyo bien o servicio fue vendido por un tercero; inhabilitado si el documento es un *Reclamo de proveedor*.   
> El *Distribuidor* se ubica entre la información de la pestaña *Cabecera<!-- Testata -->*; inhabilitado si el documento es un *Reclamo de proveedor*.   

## Cabecera<!-- Testata -->

La información gestionada es:
> **Medio de notificación<!-- Mezzo di notifica -->**: es la modalidad con que se ha recibido o notificado el *Reclamo*.   
>
> **Hora de notificación<!-- Orario notifica -->**: es la hora (horas y minutos) de recepción del *Reclamo*.   
>
> **Persona responsable**: es el *Empleado* responsable de la *No conformidad*.   
> Al ingresar una nueva *No conformidad*, se sugiere la *Persona responsable* indicada en los *Parámetros Reclamos y No conformidades*, sesión *No conformidades*.   
>
> **Función responsable**: es la *Función empresarial* responsable de la *No conformidad*.   
> Al ingresar una nueva *No conformidad*, se sugiere la *Función responsable* indicada en los *Parámetros Reclamos y No conformidades*, sesión *No conformidades*.   
>
> **Referencia de documentos**: expander donde pueden ingresarse las referencias a documentos de interés para la gestión del *Reclamo*:
>> **Factura**: es la referencia a la *Factura de venta* (*Tipo*, *Año* y *Número*), con la cual se supone fue facturado el bien o servicio cuestionado.   
>> **D.D.T.**: es la referencia a la *Guía de venta* (*Tipo*, *Año* y *Número*), con la cual se supone fue vendido el bien o servicio cuestionado.   
>> **Recepción de mercancía**: es la referencia a la *Recepción de mercancía* (*Tipo*, *Año* y *Número*), con la cual el remitente devuelve el bien cuestionado.   
>> **Proyecto**: es la referencia al *Proyecto* del bien o servicio cuestionado.   
>> **Nuestra referencia**: anotaciones libres sobre otros documentos internos.   
>> **Su referencia**: anotaciones libres sobre otros documentos del remitente del *Reclamo*.   
>
> **Aprobado/En fecha<!-- Approvato/In data -->**: expander donde es posible ingresar la información de aprobación del *Reclamo*:
>> Solamente la **Persona responsable** o la **Función responsable** pueden aprobar el *Reclamo*.  
>> **Aprobado**: indica que el *Reclamo* está *Aprobado*.   
>> Con la aprobación se sugieren automáticamente: *En fecha* (propuesta a la fecha actual y que puede ser modificada), *Nombre* y *Persona* propuestas como *Usuario A.R.M.* vinculado y *Empleado* vinculado al *Usuario A.R.M.*   
>> **En fecha**: es la fecha en la que el *Reclamo* ha sido *Aprobado*.   
>> Al ingresar la fecha se sugieren automáticamente: *Nombre* y *Persona* propuestas como *Usuario A.R.M.* vinculado, *Empleado* vinculado al *Usuario A.R.M.* y se marca la bandera *Aprobado*.   
>> **Nombre**: es el *Usuario A.R.M.* que ha aprobado el *Reclamo*. Información de solo lectura.   
>> **Persona**: es el *Empleado* que ha aprobado el *Reclamo*. Información de solo lectura.   
>> **Función**: es la *Función empresarial* que ha aprobado el *Reclamo*.   
>> Habilitado solo si el *Reclamo* está *Aprobado*.   
>  
> **Distribuidor**: información ya descrita previamente entre los remitentes del *Reclamo*.   
>
> **Referencia sitio del cliente**: anotaciones libres sobre el tema; se renombra como *Referencia sitio del proveedor* si el documento es un *Reclamo de proveedor*.   
>
> **Contacto externo**: anotaciones libres sobre la persona de referencia del remitente del *Reclamo*.   
>
> **Audit Trail**: expander de solo lectura donde se visualizan las siguientes informaciones:   
>> **Fecha de creación/Nombre**: es la fecha y el *Usuario A.R.M.* que ha ingresado el *Reclamo*.   
>> **Fecha de última modificación/Nombre**: es la fecha y el *Usuario A.R.M.* que modificó por última vez el *Reclamo*.   
>
> **Cerrado/En fecha<!-- Chiuso/In data -->**: expander donde es posible ingresar la información de cierre del *Reclamo*:
>> Solamente la **Persona responsable** o la **Función responsable** pueden cerrar el *Reclamo*.  
>> **Cerrado**: indica que el *Reclamo* está *Cerrado*.   
>> Al cerrar, se sugieren automáticamente: *En fecha* (propuesta a la fecha actual y que puede ser modificada), *Nombre* y *Persona* sugeridas como *Usuario A.R.M.* vinculado y *Empleado* vinculado al *Usuario A.R.M.*.   
>> **En fecha**: es la fecha en que el *Reclamo* ha sido *Cerrado*.   
>> Al ingresar la fecha se sugieren automáticamente: *Nombre* y *Persona* propuestas como *Usuario A.R.M.* vinculado, *Empleado* vinculado al *Usuario A.R.M.* y se marca la bandera *Cerrado*.   
>> **Nombre**: es el *Usuario A.R.M.* que ha cerrado el *Reclamo*. Información de solo lectura.   
>> **Persona**: es el *Empleado* que ha cerrado el *Reclamo*. Información de solo lectura.   
>> **Función**: es la *Función empresarial* que ha cerrado el *Reclamo*.   
>> Habilitada solo si el *Reclamo* está *Cerrado*.   
>> **Notificación de cierre/En fecha<!-- Notifica chiusura/In data -->**: Indica manualmente si el cierre del *Reclamo* ha sido notificado y en qué fecha al remitente del mismo.   

### Notificaciones<!-- Notifiche -->

La pestaña contiene las siguientes indicaciones:
> **Motivo de la contestación<!-- Motivo contestazione -->**: anotaciones libres sobre el motivo de ingreso del *Reclamo* (dato obligatorio).   
>
> **Sitio productivo<!-- Sito produttivo -->**: es la referencia del *Sitio productivo* donde se ha detectado o se supone es el origen del *Reclamo*.   
>
> **El motivo de la contestación y defecto detectado ha sido aceptado<!-- Il motivo della contestazione e difetto riscontrato è stato accettato -->**: indica que el *Reclamo* ha sido aceptado.   
>
> **Motivo del desistimiento<!-- Motivo del recesso -->**: anotaciones libres sobre la razón de no aceptabilidad del *Reclamo*; información habilitada solo si el *Reclamo* no ha sido aceptado.   
>
>> **Notificado/En fecha<!-- Notifico/In data -->**: Indica la notificación al remitente del *Reclamo* y la fecha en que ha sido aceptado o rechazado.   

### Anotaciones<!-- Annotazioni -->

En la pestaña se encuentran anotaciones generales al documento y específicas por área. La información presente es:
> **Notas comerciales<!-- Note commerciali -->**: anotaciones libres sobre el tema reservadas al personal del área comercial.   
> **Notas técnicas<!-- Note tecniche -->**: anotaciones libres sobre el tema reservadas al personal del área técnica.   
> **Notas administrativas<!-- Note amministrative -->**: anotaciones libres sobre el tema reservadas al personal del área administrativa.   

### Datos extra<!-- Extra data -->

Es posible ingresar [Datos Extra](/docs/configurations/utility/extra-data/extradata/new-extradata) generales para el *Reclamo*.   

### Otros costos<!-- Altri costi -->

En la pestaña es posible ingresar otros costos adicionales a los derivados del costo de los artículos cuestionados y al de la gestión del documento.
> **Costos directos<!-- Costi diretti -->**   
> Una lista de costos atribuibles directamente al costo de los artículos cuestionados, al servicio prestado y al costo de las operaciones realizadas para la gestión del *Reclamo*. En esta lista se encuentran los siguientes datos:
>> **Concepto de costo<!-- Voce di costo -->** y **Descripción del concepto de costo<!-- Descrizione voce di costo -->**: sólo pueden seleccionarse *Conceptos de costo* con *Tipo de costo = Costo directo (Direct cost)*.   
>> **Tipo de costo<!-- Tipo costo -->**: información de solo lectura que indica el *Tipo de costo* asociado al *Concepto de costo* seleccionado.   
>> **Aplicación sobre ...<!-- Applicazione su ... -->**: información de solo lectura que indica sobre qué componente de costo se aplica el *Valor* (si es un porcentaje); en la gestión de *Reclamos* no hay distinción entre: *Costo de materiales*, *Costo de máquina*, *Costo de mano de obra*, *Costo de operaciones* y *Costo industrial*, todos los valores se aplican al *Total del reclamo*.      
>> **Porcentaje / Valor<!-- Percentuale / Valore -->**: información de solo lectura que muestra los métodos de cálculo a aplicar sobre el *Valor* (*Porcentaje* o *Valor fijo*).   
>> **Valor<!-- Valore -->**: es el *Porcentaje* que se aplicará, o el *Valor* que se agregará, a la componente de costo especificada en *Aplicación sobre ...*.   
>> **Nota<!-- Nota -->**: anotaciones libres.   
>>   
> **Costos generales<!-- Costi generali -->**   
> Una lista de costos generales, no directamente imputables al *Reclamo* y que respaldan todo el proceso empresarial. En esta lista se encuentran los siguientes datos:
>> **Concepto de costo<!-- Voce di costo -->** y **Descripción del concepto de costo<!-- Descrizione voce di costo -->**: sólo pueden seleccionarse *Conceptos de costo* con *Tipo de costo = Costo general (General cost)*.   
>> **Tipo de costo<!-- Tipo costo -->**: información de solo lectura que indica el *Tipo de costo* asociado al *Concepto de costo* seleccionado.   
>> **Porcentaje / Valor<!-- Percentuale / Valore -->**: información de solo lectura que muestra los métodos de cálculo a aplicar sobre el *Valor* (*Porcentaje* o *Valor fijo*).   
>> **Valor<!-- Valore -->**: es el *Porcentaje* que se aplicará, o el *Valor* que se agregará, al *Total del reclamo*.   
>> **Nota<!-- Nota -->**: anotaciones libres.   
>>   
> **Otros costos<!-- Altri costi -->**   
> Una lista de otros costos. En esta lista se encuentran los siguientes datos:
>> **Concepto de costo<!-- Voce di costo -->** y **Descripción del concepto de costo<!-- Descrizione voce di costo -->**: sólo pueden seleccionarse *Conceptos de costo* con *Tipo de costo = Otro costo (Other cost)*.   
>> **Tipo de costo<!-- Tipo costo -->**: información de solo lectura que indica el *Tipo de costo* asociado al *Concepto de costo* seleccionado.   
>> **Unidad de medida<!-- Unità di misura -->**: es la *Unidad de medida* con la cual se desea expresar la información de la *Cantidad*.   
>> **Cantidad<!-- Quantità -->**: es la *Cantidad* del *Concepto de costo*.   
>> **Costo unitario<!-- Costo unitario -->**: es el *Costo unitario* del *Concepto de costo*.   
>> **Costo total<!-- Costo totale -->**: información de solo lectura que muestra el producto entre *Cantidad* y *Costo unitario*.   
>> **Nota<!-- Nota -->**: anotaciones libres.   

### Valores<!-- Valori -->

En la pestaña es posible ingresar información relativa a documentos de débito y crédito al *Reclamo*, los costos incurridos y los que serán acreditados al remitente del *Reclamo*. La información incluida es:
> **Divisa**, **Directo<!-- Diretto -->** y **Fecha valor<!-- Data valuta -->**: es la *Divisa* del remitente del *Reclamo* con la cual se especifican todos los valores del documento, el correspondiente coeficiente de cambio a la *Divisa* de la *Compañía* y la *Fecha valor*.   
> **Referencia de documento de débito**: es la referencia a la *Nota de débito* recibida del *Cliente*.   
> **Notas del documento de débito**: anotaciones libres sobre el tema.   
>   
> **Total reclamo**: información de solo lectura si, en los *Parámetros Reclamos y No conformidades*, para el año de fecha del documento, sesión *Reclamos*, se ha solicitado el *Recalculo automático de totales*; se propone la suma de la única componente de los costos de reproceso de los *Objetos defectuosos* reelaborados.   
>   
> **Total costos directos**: información de solo lectura, es la suma de la aplicación de los *Valores* de la lista de *Costos directos* presentes en la pestaña *Otros costos*.   
>   
> **Total costos generales**: información de solo lectura, es la suma de la aplicación de los *Valores* de la lista de *Costos generales* presentes en la pestaña *Otros costos*.   
>   
> **Total otros costos**: información de solo lectura, es la suma de la aplicación de los *Valores* de la lista de *Otros costos* presentes en la pestaña *Otros costos*.   
>   
> **Costo de gestión**: es el *Costo de gestión* tomado del *Costo de gestión* presente en los *Parámetros Reclamos y No conformidades*, para el año de fecha del documento, sesión *Reclamos*; el valor puede ser modificado.   
>   
> **Valor a acreditar**: es el *Valor a acreditar* al remitente del *Reclamo*; si en los *Parámetros Reclamos y No conformidades*, para el año de fecha del documento, sesión *No conformidades*, se ha solicitado el *Recalculo automático de totales* el valor se propuesta igual a la suma del *Valor aceptado* de los *Objetos defectuosos* y luego puede ser modificado.    
>
> **Valorizado** y **Referencia de documento de crédito**: información de solo lectura que indica si el *Reclamo* ha sido valorizado y la referencia a la *Nota de crédito* generada.   

Las siguientes sesiones de la gestión varían de acuerdo al *Modelo* especificado en el *Tipo de reclamo<!-- Tipo reclamo -->*: *Gestión de defectos<!-- Gestione difetti -->* o *8D - problem solving*:
> ### [Gestión de defectos](/docs/quality/claims-and-non-compliance/claims/claim-dm)<!-- Gestione difetti -->   
>   
> ### [8D Problem Solving](/docs/quality/claims-and-non-compliance/claims/claim-8d)

Para cualquier aspecto no detallado en este documento relativo al funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).