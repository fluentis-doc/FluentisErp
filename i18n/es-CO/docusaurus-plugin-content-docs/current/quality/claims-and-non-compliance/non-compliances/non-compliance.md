---
title: No conformidad
sidebar_position: 2
ai_generated: true
---

La gestión se encuentra en la ruta **Calidad > No conformidad<!-- Non conformità --> > Nueva no conformidad<!-- Nuova non conformità -->**, o también se puede realizar desde **Búsqueda de no conformidad<!-- Ricerca non conformità -->**.

:::important Para qué sirve<!-- A cosa serve -->
Las no conformidades<!-- Non conformità --> sirven para identificar y documentar desviaciones de los estándares o requisitos preestablecidos, ya sean productivos o de servicio.  
Este proceso ayuda a garantizar que los productos, servicios o procesos se corrijan y mejoren para mantener la calidad y la seguridad. Además, facilita la adopción de acciones correctivas para prevenir futuros problemas.  
Las *No conformidades<!-- Non conformità -->* deben:  
- determinar las causas de la no conformidad<!-- non conformità -->;  
- determinar si existen o pueden producirse no conformidades similares<!-- non conformità simili -->;  
- evaluar la necesidad de acciones para eliminar las causas de la no conformidad<!-- non conformità -->.  

Por defecto, están disponibles los siguientes reportes:  
> **No conformidad<!-- Non conformità -->**: ficha de la *No conformidad<!-- Non conformità -->*;  
> **No conformidad 8D<!-- Non conformità 8D -->**: ficha editable para la gestión 8D de la *No conformidad<!-- Non conformità -->*.  
:::

## Botones de comando<!-- Pulsanti di comando -->

### ![](/img/neutral/common/save.png) Guardar no conformidad<!-- Salva non conformità -->

Al pulsar este botón se almacenan todas las informaciones modificadas de la *No conformidad<!-- Non conformità -->* visualizada.

### ![](/img/neutral/common/new.png) Nueva no conformidad<!-- Nuova non conformità -->

Al pulsar este botón se almacenan todas las informaciones modificadas de la *No conformidad<!-- Non conformità -->* visualizada y se abre un nuevo formulario para crear una nueva.

### ![](/img/neutral/common/execute.png) Valoración de no conformidad<!-- Valorizzazione non conformità -->

Botón contextual a la visualización de la pestaña *Cabecera<!-- Testata -->*.  
Es posible crear una *Nota de cargo* contra el *Proveedor* o *Cliente* al que se le asignó la *No conformidad<!-- Non conformità -->*.  
El botón solo está habilitado si la *No conformidad<!-- Non conformità -->* ha sido guardada, aprobada, es de *Tipo no conformidad a cliente* o *a proveedor* y existe un *Valor a cargar*.  
Se muestra una solicitud/confirmación de datos para:
> **Cliente** o **Proveedor**: es el destinatario de la nueva *Nota de cargo* (dato obligatorio), se propone el *Cliente* o *Proveedor* de la *No conformidad<!-- Non conformità -->* de origen.  
> **Tipo factura**: es el *Tipo de documento* de la nueva *Nota de cargo* (dato obligatorio); se propone el *Tipo factura* indicado en el *Tipo no conformidad<!-- Tipo non conformità -->* de la *No conformidad<!-- Non conformità -->* de origen.  
> **Descripción**: es la descripción que se utilizará para la línea de *Artículo gasto* de la nueva *Nota de cargo* (dato obligatorio); se propone la descripción que se parametriza en los [Parámetros de valoración de no conformidad](/docs/quality/claims-and-non-compliance/non-compliances/procedures/non-compliance-valorisation), sección *Referencias de no conformidad<!-- Riferimenti non conformità -->*.  
> **I.V.A.**: es el *Tipo de I.V.A.* que se utilizará para la línea de *Artículo gasto* de la nueva *Nota de cargo*.  
> Se propone el *Tipo de I.V.A.* con las siguientes prioridades:
> 1. si existe una *Declaración de intención*, se considera el *Tipo de I.V.A.* presente en el documento;  
> 2. si no existe una *Declaración de intención*, se considera el *Tipo de I.V.A.* asociado al *Proveedor* de la *No conformidad<!-- Non conformità -->*;  
> 3. si no existe una *Declaración de intención* y no se ha indicado un *Tipo de I.V.A.* asociado al *Proveedor* de la *No conformidad<!-- Non conformità -->*, se considera el *Tipo de I.V.A.* asociado al *Tipo no conformidad<!-- Tipo non conformità -->*.  
>
> Pulsar a continuación el botón **OK** o el botón **Cancelar** si se desea continuar con la creación o no.  
> Al terminar el procesamiento, la *Nota de cargo* recién creada se muestra en pantalla.

### ![](/img/neutral/common/corrective.png) Crear acción correctiva<!-- Crea azione correttiva -->

Botón contextual a la visualización de la pestaña *Gestión de defectos<!-- Gestione difetti -->*.
El botón está habilitado solamente si la *No conformidad<!-- Non conformità -->* ha sido guardada, aprobada y se ha seleccionado una línea *Defecto* válida.

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />

## Gestión de datos<!-- Gestione dati -->

## Datos de cabecera del documento<!-- Dati di testata del documento -->

La información gestionada es:  
> **Tipo no conformidad<!-- Tipo non conformità -->**: es el *Tipo* del documento (dato obligatorio).  
> Al insertar una nueva *No conformidad<!-- Non conformità -->* se propone el *Tipo no conformidad<!-- Tipo non conformità -->* indicado en los *Parámetros Reclamos y No conformidad*, sección *No conformidad<!-- Non conformità -->*.  
>
> **Año/Número/Fecha**: son el *Año*, *Número* y *Fecha* de la *No conformidad<!-- Non conformità -->* (datos obligatorios).  
> Al insertar una nueva *No conformidad<!-- Non conformità -->*:
> - la *Fecha* se propone como la fecha actual;
> - el *Año* y el *Número* se proponen según la *Fecha* y la *Numeración* asociada al *Tipo no conformidad<!-- Tipo non conformità -->*.
>
> **Cliente** o **Proveedor**: es la referencia del *Cliente* o del *Proveedor* destinatario de la *No conformidad<!-- Non conformità -->* (dato obligatorio si el *Tipo no conformidad<!-- Tipo non conformità -->* es *A proveedor* o *A cliente*).  
> *Cliente* o *Proveedor* se habilitan según el *Tipo no conformidad<!-- Tipo non conformità -->* indicado.  
>
> **Función/Área/Departamento**: es la referencia de la *Función/Área/Departamento* (dato obligatorio si el *Tipo no conformidad<!-- Tipo non conformità -->* es *Interna*).
> Se habilita según el *Tipo no conformidad<!-- Tipo non conformità -->* indicado.

## Cabecera<!-- Testata -->

La información gestionada es:  
> **Persona responsable**: es el *Empleado* responsable de la *No conformidad<!-- Non conformità -->*.  
> Al insertar una nueva *No conformidad<!-- Non conformità -->* se propone la *Persona responsable* indicada en los *Parámetros Reclamos y No conformidad*, sección *No conformidad<!-- Non conformità -->*.  
>
> **Función responsable**: es la *Función empresarial* responsable de la *No conformidad<!-- Non conformità -->*.  
> Al insertar una nueva *No conformidad<!-- Non conformità -->* se propone la *Función responsable* indicada en los *Parámetros Reclamos y No conformidad*, sección *No conformidad<!-- Non conformità -->*.  
>
> **Referente externo**: anotaciones libres sobre la persona de referencia del *Cliente*, *Proveedor* o *Función/Área/Departamento* destinatario de la *No conformidad<!-- Non conformità -->*.  
>
> **Sitio productivo**: es la referencia del *Sitio productivo* donde se detectó la *No conformidad<!-- Non conformità -->*.
>
> **Motivo**: anotaciones libres sobre el motivo de la inserción de la *No conformidad<!-- Non conformità -->* (dato obligatorio).
>
> **Propuesta de solución**: anotaciones libres sobre el asunto.  
> Normalmente se utiliza para indicar una propuesta de solución al destinatario de la *No conformidad<!-- Non conformità -->*.
>
> **Notificada/En fecha**: son las indicaciones manuales si la *No conformidad<!-- Non conformità -->* ha sido notificada y en qué fecha al destinatario.
>
> **Respuesta Proveedor/Interna**: anotaciones libres sobre el asunto.  
> Normalmente se utiliza para registrar una eventual respuesta dada por el destinatario de la *No conformidad<!-- Non conformità -->* a la notificación.
>
> **Audit Trail**: expander de solo lectura donde son visibles las siguientes informaciones:
>> **Fecha creación/Nombre**: es la fecha y el *Usuario A.R.M.* que insertó la *No conformidad<!-- Non conformità -->*.
>> **Fecha última modificación/Nombre**: es la fecha y el *Usuario A.R.M.* que realizó la última modificación de la *No conformidad<!-- Non conformità -->*.
>
> **Aprobada/En fecha**: sección donde se pueden ingresar los datos de aprobación de la *No conformidad<!-- Non conformità -->*:
>> Solo la **Persona responsable** o la **Función responsable** pueden aprobar la *No conformidad<!-- Non conformità -->*.
>> **Aprobada**: indica que la *No conformidad<!-- Non conformità -->* está *Aprobada*.
>> Al aprobar se proponen automáticamente: *En fecha*, propuesta con la fecha actual y posibilidad de cambiarla, *Nombre* y *Persona* propuestos como *Usuario A.R.M.* asociado y *Empleado* asociado al *Usuario A.R.M.*
>> **En fecha**: es la fecha en la que la *No conformidad<!-- Non conformità -->* fue *Aprobada*.
>> Al ingresar la fecha se proponen automáticamente: *Nombre* y *Persona* propuestos como *Usuario A.R.M.* asociado, *Empleado* asociado al *Usuario A.R.M.* y se activa el flag *Aprobada*.
>> **Nombre**: es el *Usuario A.R.M.* que aprobó la *No conformidad<!-- Non conformità -->*. Información de solo lectura.
>> **Persona**: es el *Empleado* que aprobó la *No conformidad<!-- Non conformità -->*. Información de solo lectura.
>> **Función**: es la *Función empresarial* que aprobó la *No conformidad<!-- Non conformità -->*.
>> Habilitada solo si la *No conformidad<!-- Non conformità -->* está *Aprobada*.
>
> **Cerrada/En fecha**: sección donde se pueden ingresar los datos de cierre de la *No conformidad<!-- Non conformità -->*:
>> Solo la **Persona responsable** o la **Función responsable** pueden cerrar la *No conformidad<!-- Non conformità -->*.
>> **Cerrada**: indica que la *No conformidad<!-- Non conformità -->* está *Cerrada*.
>> Al cerrar se proponen automáticamente: *En fecha*, propuesta con la fecha actual y posibilidad de cambiarla, *Nombre* y *Persona* propuestos como *Usuario A.R.M.* asociado y *Empleado* asociado al *Usuario A.R.M.*
>> **En fecha**: es la fecha en la que la *No conformidad<!-- Non conformità -->* fue *Cerrada*.
>> Al ingresar la fecha se proponen automáticamente: *Nombre* y *Persona* propuestos como *Usuario A.R.M.* asociado, *Empleado* asociado al *Usuario A.R.M.* y se activa el flag *Cerrada*.
>> **Nombre**: es el *Usuario A.R.M.* que cerró la *No conformidad<!-- Non conformità -->*. Información de solo lectura.
>> **Persona**: es el *Empleado* que cerró la *No conformidad<!-- Non conformità -->*. Información de solo lectura.
>> **Función**: es la *Función empresarial* que cerró la *No conformidad<!-- Non conformità -->*.
>> Habilitada solo si la *No conformidad<!-- Non conformità -->* está *Cerrada*.
>> **Notificación de cierre/En fecha**: son las indicaciones manuales si el cierre de la *No conformidad<!-- Non conformità -->* ha sido notificado y en qué fecha al destinatario.

### Referencia de documento<!-- Riferimento documento -->

En la pestaña se encuentran las indicaciones sobre los documentos que dieron origen a la *No conformidad<!-- Non conformità -->* en gestión.  
La información presente es:  
> **Factura de compra**, **Albarán de compra**, **Recepción de mercancía**, **Retorno de cuenta trabajo<!-- conto lavoro -->**, **Reclamo**, **Año/Pedido/Lote** y **Fase/Subfase/Declaración n.**:  
> son todos referencias de solo lectura al documento de origen que creó la *No conformidad<!-- Non conformità -->*.  
> Por defecto, el único documento que puede crear una *No conformidad<!-- Non conformità -->* y que configura automáticamente la referencia es el *Reclamo*.

### Anotaciones<!-- Annotazioni -->

En la pestaña se encuentran anotaciones generales al documento y específicas por área. La información presente es:  
> **Notas comerciales**: anotaciones libres sobre el asunto, reservadas al personal del área comercial.  
> **Notas técnicas**: anotaciones libres sobre el asunto, reservadas al personal del área técnica.  
> **Notas administrativas**: anotaciones libres sobre el asunto, reservadas al personal del área administrativa.

### Extra data

Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) generales para la *No conformidad<!-- Non conformità -->*.

### Otros costos<!-- Altri costi -->

En la pestaña es posible ingresar otros costos adicionales a los provenientes del Costo de los artículos disputados y de la gestión del documento.  
> **Costos directos**
> Una lista de costos atribuibles directamente al costo de los artículos disputados, al servicio dado y al costo de los trabajos necesarios para la gestión de la *No conformidad<!-- Non conformità -->*. En esta lista está la información de:
>> **Partida de costo** y **Descripción partida**: solo se pueden seleccionar *Partidas de costo* de *Tipo costo = Costo directo (Direct cost)*.
>> **Tipo costo**: información de solo lectura que muestra el *Tipo de costo* asociado a la *Partida de costo* seleccionada.
>> **Aplicación sobre...**: información de solo lectura que indica sobre qué componente de costo se aplica el *Valor* (si se expresa en porcentaje); las posibles aplicaciones son:
>>> *Costo de materiales*: suma solo el componente de costos de artículo de los *Objetos defectuosos* y los *Materiales utilizados*;
>>> *Costo de máquina*, *Costo mano de obra* y *Costo de operaciones*: suma solo el componente de costos de trabajo de los *Objetos defectuosos*;
>>> *Costo industrial*: suma del *Total material retrabajado* y *Total material no retrabajado*.
>> **Porcentaje / Valor**: información de solo lectura que indica el método de cálculo aplicado al *Valor* (*Porcentaje* o *Valor fijo*).
>> **Valor**: es el *Porcentaje* que se aplicará, o el *Valor* que se agregará, al componente de costo especificado en *Aplicación sobre...*.
>> **Nota**: anotaciones libres.
>
> **Costos generales**
> Una lista de costos generales, no directamente imputables a la *No conformidad<!-- Non conformità -->* y que contribuyen al proceso empresarial. En esta lista está la información de:
>> **Partida de costo** y **Descripción partida**: solo se pueden seleccionar *Partidas de costo* de *Tipo costo = Costo general (General cost)*.
>> **Tipo costo**: información de solo lectura que muestra el *Tipo de costo* asociado a la *Partida de costo* seleccionada.
>> **Porcentaje / Valor**: información de solo lectura que indica el método de cálculo aplicado al *Valor* (*Porcentaje* o *Valor fijo*).
>> **Valor**: es el *Porcentaje* que se aplicará, o el *Valor* que se agregará, a la suma del *Total material retrabajado* y *Total material no retrabajado*.
>> **Nota**: anotaciones libres.
>
> **Otros costos**
> Una lista de otros costos. En esta lista está la información de:
>> **Partida de costo** y **Descripción partida**: solo se pueden seleccionar *Partidas de costo* de *Tipo costo = Otro costo (Other cost)*.
>> **Tipo costo**: información de solo lectura que muestra el *Tipo de costo* asociado a la *Partida de costo* seleccionada.
>> **Unidad de medida**: es la *Unidad de medida* con la que se desea expresar la *Cantidad*.
>> **Cantidad**: es la *Cantidad* de la *Partida de costo*.
>> **Costo unitario**: es el *Costo unitario* de la *Partida de costo*.
>> **Costo total**: información de solo lectura que corresponde al producto entre *Cantidad* y *Costo unitario*.
>> **Nota**: anotaciones libres.

### Valores<!-- Valori -->

En la pestaña es posible ingresar datos relativos a documentos de cargo y abono de la *No conformidad<!-- Non conformità -->*, los costos incurridos, los que se deben cargar y los reconocidos por el *Proveedor/Cliente*.  
La información presente es:  
> **Divisa**, **Directo** y **Fecha valor**: es la *Divisa* del *Proveedor* o *Cliente* con la que se especifican todos los valores del documento, el coeficiente de cambio respecto la *Moneda* de la *Empresa* y la *Fecha valor*.
> **Valorizada** y **Referencia documento de débito**: información de solo lectura que indica si la *No conformidad<!-- Non conformità -->* ha sido valorizada y la referencia a la *Nota de débito* generada.
> **Referencia documento de crédito**: es la referencia a la *Nota de crédito* recibida del *Proveedor* o *Cliente*.
> **Notas documento de crédito**: anotaciones libres sobre el asunto.
>
> **Total material no retrabajado**: información de solo lectura si, en los *Parámetros Reclamos y No conformidad*, para el año del documento, sección *No conformidad<!-- Non conformità -->*, se ha solicitado el *Recalculo automático de totales*; se propone la suma solo de los costos de artículo de los *Objetos defectuosos* no retrabajados y de los *Materiales utilizados*.
>
> **Total material retrabajado**: información de solo lectura si, en los *Parámetros Reclamos y No conformidad*, para el año del documento, sección *No conformidad<!-- Non conformità -->*, se ha solicitado el *Recalculo automático de totales*; se propone la suma solo de los costos de trabajo de los *Objetos defectuosos* retrabajados.
>
> **Total costos directos**: información de solo lectura, suma de la aplicación de los *Valores* de la lista de *Costos directos* en la pestaña *Otros costos*.
>
> **Total costos generales**: información de solo lectura, suma de la aplicación de los *Valores* de la lista de *Costos generales* en la pestaña *Otros costos*.
>
> **Total otros costos**: información de solo lectura, suma de la aplicación de los *Valores* de la lista de *Otros costos* en la pestaña *Otros costos*.
>
> **Costo de gestión**: es el *Costo de gestión* tomado del *Costo de gestión* presente en los *Parámetros Reclamos y No conformidad*, para el año del documento, sección *No conformidad<!-- Non conformità -->*; el valor puede modificarse.
>
> **Total no conformidad<!-- Totale non conformità -->**: información de solo lectura si, en los *Parámetros Reclamos y No conformidad*, para el año del documento, sección *No conformidad<!-- Non conformità -->*, se ha solicitado el *Recalculo automático de totales*; en este caso el total se recalcúla como suma de: *Total material no retrabajado*, *Total material retrabajado*, *Total costos directos*, *Total costos generales*, *Total otros costos* y *Costo de gestión*; si no se ha solicitado el recalculo, el valor debe ser ingresado manualmente.
>
> **Valor a cargar**: es el *Valor a cargar* al *Cliente* o *Proveedor*; si, en los *Parámetros Reclamos y No conformidad*, para el año del documento, sección *No conformidad<!-- Non conformità -->*, se ha solicitado el *Recalculo automático de totales*, el valor se propone igual al *Total no conformidad<!-- Totale non conformità -->* y se puede modificar posteriormente.  
>
> **Valor reconocido**: es el valor que nos reconoce el *Cliente* o *Proveedor*; el valor se puede introducir manualmente.

## Gestión de defectos<!-- Gestione difetti -->

Es la lista de defectos encontrados que se debe notificar al destinatario del documento, y se compone de la siguiente información:  
> **Secuencia**: es la *Secuencia* de visualización de los defectos; se propone un progresivo con la posibilidad de ser cambiado.
>
> **Defecto detectado**
>> **Código**: es el código del *Defecto detectado*; solo se pueden ingresar *Defectos* activos y previstos por el tipo de *No conformidad<!-- Non conformità -->* del documento.
>> **Descripción**: información de solo lectura, descripción del *Defecto detectado*.
>> **Notas**: anotaciones libres sobre el *Defecto detectado*.
>
> **Causa presunta**
>> **Código**: es el código de la *Causa presunta* que generó el defecto; solo se pueden insertar *Causas* presuntas, activas y previstas por el tipo de *No conformidad<!-- Non conformità -->* del documento; posteriormente a un análisis de los *Objetos defectuosos*, la *Causa presunta* puede ser confirmada o no en la *Causa efectiva*.
>> **Descripción**: información de solo lectura, descripción de la *Causa presunta*.
>> **Notas**: anotaciones libres sobre la *Causa presunta*.
>
> **Fase de detección**
>> **Código**: es el código de la *Fase de detección* del proceso donde se detectó el defecto; solo se pueden insertar *Fases de detección* activas.
>> **Descripción**: información de solo lectura, descripción de la *Fase de detección*.
>> **Notas**: anotaciones libres sobre la *Fase de detección*.
>
> **Gravedad**
>> **Código**: es el código de la *Gravedad* atribuida al defecto; solo se pueden insertar *Gravedades* activas.
>> **Descripción**: información de solo lectura, descripción de la *Gravedad*.
>
> **Cierre de defecto**
> Solo la **Persona responsable** o la **Función responsable** pueden cerrar la gestión del *Defecto* específico.
> El cierre de todos los *Defectos* no implica automáticamente el cierre de la *No conformidad<!-- Non conformità -->*.
>> **Cerrado**: indica que la gestión del *Defecto* específico se ha completado; debe ser indicado manualmente por el usuario.
>> Al cerrar, se proponen automáticamente: *Fecha de cierre*, propuesta a la fecha actual y posibilidad de modificar, *Nombre* y *Persona* propuestos como *Usuario A.R.M.* relacionado y *Empleado* asociado al *Usuario A.R.M.* (*Nombre* y *Persona* están en la sección *Datos de cierre de defecto* de la pestaña *Datos de defecto*).
>> **Fecha de cierre**: es la fecha en la que la gestión del *Defecto* específico se completó.
>> Al ingresar la fecha se activa automáticamente la marca *Cerrado*.
>
> **Referencia acción correctiva**
>> **Tipo**, **Año**, y **Número**: referencias, solo lectura, a la *Acción correctiva* asociada a la línea de *Defecto* y generada a través del botón **Crear acción correctiva<!-- Crea azione correttiva -->**.
>
> **Notas**: anotaciones libres sobre la línea del *Defecto* específico*.

### Datos de defecto<!-- Dati difetto -->

Son los datos adicionales a la línea *Defecto* seleccionada. La información gestionada es:  
> **Causa efectiva**: es la causa real que generó el defecto; solo se pueden ingresar *Causas* efectivas, activas y previstas por el tipo de *No conformidad<!-- Non conformità -->* del documento.
> **Notas causa efectiva**: anotaciones libres sobre la *Causa efectiva*.
> **Solución propuesta**: sugerencia de solución técnica/comercial/administrativa a adoptar; solo se pueden insertar *Soluciones* activas.
> **Notas solución propuesta**: anotaciones libres sobre la *Solución propuesta*.
> **Decisión tomada**: decisión técnica/comercial/administrativa tomada para resolver el defecto; solo se pueden insertar *Decisiones* activas.
> **Notas decisión tomada**: anotaciones libres sobre la *Decisión tomada*.
> **Respuesta Proveedor/Interna**: anotaciones libres sobre el asunto. Normalmente se utiliza para registrar una posible respuesta por parte del destinatario de la *No conformidad<!-- Non conformità -->* relativa al *Defecto*.
> **Datos cierre de defecto**: sección donde se pueden ingresar los datos de cierre del *Defecto*:
> **Nombre**: es el *Usuario A.R.M.* que cerró el *Defecto*. Información solo lectura.
> **Persona**: es el *Empleado* que cerró el *Defecto*. Información solo lectura.
> **Función**: es la *Función empresarial* que cerró el *Defecto*.

### Objetos reclamados<!-- Oggetti reclamati -->

Es la lista de los *Objetos reclamados* asociables al *Defecto detectado* seleccionado y se compone de la siguiente información:  
> **Objeto**
>> **Código de barras**: se puede usar para añadir o reemplazar Artículo, Lote, Número de serie y Unidad de carga.
>> Para toda la información sobre cómo codificar los códigos de barras, consultar la página referente al [tokenizador de código de barras](/docs/configurations/tables/general-settings/barcode-tokenizer).
>> **Clase**: es la *Clase de artículo* reclamado.
>> **Código de artículo**: es el código del *Artículo* reclamado.
>> **Descripción de artículo**: es la descripción del *Artículo* reclamado.
>> **Variante**: es el código variante del *Artículo* reclamado.
>> **Lote**: es el código del *Lote* interno del *Artículo* reclamado.
>> **Unidad de carga**: es la *Unidad de carga* de origen que contenía el *Artículo* reclamado.
>> Al ingresar una *Unidad de carga* se insertan automáticamente todas las líneas de detalle de *Artículo* presentes en ella.
>> Si en los *Parámetros Reclamos y No conformidad*, para el año del documento, sección *No conformidad<!-- Non conformità -->*, se ha solicitado el *Agrupamiento de datos U.D.C.*, las líneas con *Artículos* iguales se reportan en una sola línea con cantidades sumadas.
>> **Número de serie**: es el *Número de serie* del *Artículo* reclamado.
>> **Unidad de carga a devolver**: es la *Unidad de carga* que contiene el *Artículo* reclamado a devolver.
>
> **Cantidad**
>> **Unidad de medida**: solo lectura, es la *Unidad de medida* del *Artículo* reclamado.
>> **Recibida**: es la cantidad de *Artículo* recibida; el valor se debe ingresar manualmente.
>> **Disputada**: es la cantidad de *Artículo* que se quiere disputar; el valor se debe ingresar manualmente.
>> **No retrabajada**: es la cantidad de *Artículo* disputada y no retrabajada; el valor se debe ingresar manualmente.
>> **Retrabajada**: es la cantidad de *Artículo* disputada y retrabajada; el valor se debe ingresar manualmente.
>> **Devuelta**: es la cantidad de *Artículo* devuelta; el valor se debe ingresar manualmente.
>
> **Cantidad alternativa**
>> Las columnas de este grupo son visibles solo si, en los *Parámetros Reclamos y No conformidad*, para el año del documento, sección *No conformidad<!-- Non conformità -->*, se ha solicitado la *Propuesta de U.M. alternativa*.
>> **Unidad de medida**: es la *Unidad de medida alternativa* del *Artículo* reclamado.
>> **Unidad de medida precio**: indica si el *Costo unitario del material* se refiere a la *Unidad de medida alternativa*.
>> **Recibida**: cantidad de *Artículo* recibida expresada en la *Unidad de medida alternativa*; el valor se debe ingresar manualmente.
>> **Disputada**: cantidad de *Artículo* que se quiere disputar expresada en la *Unidad de medida alternativa*; el valor se debe ingresar manualmente.
>> **No retrabajada**: cantidad de *Artículo* disputada y no retrabajada en la *Unidad de medida alternativa*; el valor se debe ingresar manualmente.
>> **Retrabajada**: cantidad de *Artículo* disputada y retrabajada en la *Unidad de medida alternativa*; el valor se debe ingresar manualmente.
>> **Devuelta**: cantidad de *Artículo* devuelta expresada en la *Unidad de medida alternativa*; el valor se debe ingresar manualmente.
>
> **Costo unitario**
>> **Material**: es el *Costo unitario* del *Artículo*; el valor debe ser ingresado manualmente.
>> **Mano de obra**: es el *Costo unitario* de la *Operación*; se propone igual a la tarifa asociada a los *Centros de costo* asociados a *Máquina* y *Grupo mano de obra* del *Centro de trabajo*; el valor puede modificarse.
>
> **Horas**
>> **Trabajadas**: son las horas y minutos trabajados en la reparación del *Objeto* no conforme; el valor debe ser ingresado manualmente.

#### Datos de objeto<!-- Dati oggetto -->

Son los datos adicionales de la línea del *Objeto reclamado* seleccionada. La información gestionada es:  
> **Proyecto**: es la referencia al *Proyecto* del *Defecto* específico*.
> **Notas de artículo**: anotaciones libres sobre el *Artículo* del *Defecto* específico*.
> **Notas de lote**: anotaciones libres sobre el *Lote* del *Defecto* específico*.
> **Notas de unidad de carga**: anotaciones libres sobre la *Unidad de carga* de la línea del *Defecto* específico*.
> **Notas**: anotaciones libres sobre la línea del *Defecto* específico*.
> **Centro de trabajo**: es el *Centro de trabajo* en el que se efectúan las operaciones de reparación del *Objeto* no conforme.
> La selección del *Centro de trabajo* propondrá, en el *Costo unitario operación*, la tarifa a aplicar al tiempo dedicado a la operación.
> La tarifa propuesta es la suma de las tarifas de los *Centros de costo* asociados a *Máquina* y *Grupo mano de obra* del *Centro de trabajo*.
> **Total material no retrabajado**: solo lectura, es el valor del producto entre la *Cantidad no retrabajada* y el *Costo unitario material* del *Objeto defectuoso* seleccionado.
> **Total material retrabajado**: solo lectura, es el valor del producto entre la *Cantidad retrabajada* y el *Costo unitario operación* sumado al producto entre las *Horas trabajadas* y la suma de tarifas asociadas a *Centros de costo* asociados a *Máquina* y *Grupo mano de obra* del *Centro de trabajo*.
> **Total defecto**: solo lectura, es la suma de *Total material no retrabajado* y *Total material retrabajado*.

#### Extra data

Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) para el *Objeto reclamado* seleccionado.

#### Documentos adjuntos<!-- Documenti allegati -->

En esta lista se pueden agregar y consultar documentos adjuntos al *Objeto reclamado* seleccionado.

### Materiales utilizados<!-- Materiali utilizzati -->

En esta lista es posible indicar los materiales que se han utilizado para solucionar el *Defecto* seleccionado.
La lista se compone de la siguiente información:
>
> **Artículo**
>> **Clase**: es la *Clase de artículo*.
>> **Código**: es el código del *Artículo*.
>> **Descripción**: es la descripción del *Artículo*.
>> **Variante**: es el código variante del *Artículo*.
>> **Lote**: es el código de lote interno utilizado.
>> **Número de serie**: es el número de serie utilizado.
>
> **Cantidad**
>> **Unidad de medida**: solo lectura, es la *Unidad de medida* del *Artículo*.
>> **Cantidad consumida**: es la cantidad de *Artículo* usada para subsanar el *Defecto* seleccionado.
>
> **Valor**
>> **Costo unitario**: es el costo unitario del *Artículo*; el valor se debe ingresar manualmente.
>> **Costo total**: se propone como el producto entre *Cantidad consumida* y *Costo unitario*; el costo puede modificarse.
>
> **Notas**: anotaciones libres.

### Personas involucradas<!-- Soggetti coinvolti -->

En la pestaña se indican las *Funciones empresariales* y/o *Empleados* que participarán en la gestión del *Defecto* seleccionado.
La lista se compone de la siguiente información:
> **Secuencia**: es la *Secuencia* de visualización de los *Sujetos involucrados*; se propone un progresivo con posibilidad de modificar.
>
> **Función empresarial**
>> **Código**: es el código de la *Función empresarial* involucrada.
>> **Descripción**: es la descripción de la *Función empresarial* involucrada.
>
> **Empleado**
>> **Código**: es el código del *Empleado* involucrado.
>> **Descripción**: es el apellido y nombre del *Empleado* involucrado.
>
> **Gestión de involucramiento**
>> **Descripción de sujeto**: anotación libre en caso de que el sujeto involucrado no sea *Función empresarial* o *Empleado*.
>> **Motivo del involucramiento**: anotaciones libres sobre el asunto.
>> **Fecha de vencimiento**: fecha límite para que el sujeto involucrado complete las actividades relativas al motivo de su involucramiento.
>> **Respuesta**: anotaciones libres sobre el asunto.
>> **Cerrado**: indica que el involucramiento del sujeto ha sido completado.
>> Solo la *Función o Persona responsable* de la *No conformidad<!-- Non conformità -->* o la *Función empresarial* o el *Empleado* involucrado pueden cerrar el involucramiento.
>> Al cerrar se propone automáticamente la *Fecha de cierre*, la cual puede ser modificada.
>> **Fecha de cierre**: es la fecha en la que el involucramiento del sujeto se completó.
>> Solo la *Función o Persona responsable* de la *No conformidad<!-- Non conformità -->* o la *Función empresarial* o el *Empleado* involucrado pueden ingresar o modificar esta fecha.
>> Al ingresar la fecha, se activa automáticamente la marca *Cerrado*.
>
> **Nota**: anotaciones libres.

### Extra data

Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) para el *Defecto* seleccionado.

### Documentos adjuntos

En esta lista se pueden agregar y consultar documentos adjuntos al *Defecto* seleccionado.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).