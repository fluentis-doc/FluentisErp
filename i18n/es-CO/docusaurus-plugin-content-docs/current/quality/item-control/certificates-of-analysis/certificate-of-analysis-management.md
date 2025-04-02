---
title: certificato di analisi
sidebar_position: 2
---

La gestión se encuentra en la ruta **Calidad > Controles de artículo > Certificados de análisis > Nuevo Certificado de análisis** o es posible realizarla desde la **Búsqueda de Certificados de análisis**.

:::important ¿Para qué sirve? (A cosa serve)
El **Certificado de análisis** certifica que un determinado artículo cumple con las características especificadas en la Ficha técnica o en las especificaciones del Cliente; también confirma las verificaciones realizadas sobre el producto, el cumplimiento de los límites indicados en los Planes de control y acompaña la venta del producto.  
Los Certificados pueden ser genéricos o personalizados. Si son personalizados, será necesario ingresar el **Cliente**.  

A estándar están disponibles los informes de:  
> **Certificado de análisis**: ficha que presenta la lista de *Productos* con el detalle de las *Pruebas realizadas*, los *Valores registrados* y el *Resultado* obtenido.  
> **Declaración de conformidad**: ficha que atesta y garantiza la conformidad del *Producto*.  
:::

## Botones de comando (Pulsanti di comando)

### ![](/img/neutral/common/save.png) Guardar (Salva)

Al presionar este botón, se almacenan toda la información modificada del *Certificado de análisis* mostrado.  

### ![](/img/neutral/common/import.png) Importación de controles (Importazione controlli)

Al presionar este botón se buscan los *Controles de artículo Aprobados* para asociarlos al *Certificado de análisis* mostrado.   
Se mostrará una gestión para la búsqueda y selección de los *Controles de artículo* para importar en el *Certificado de análisis*.  
Se enumeran solamente los *Controles de artículo Aprobados* que cumplen con el filtro de datos requerido.  
Al presionar el botón *Seleccionar*, los *Controles de artículo* seleccionados se duplican y se muestran en el *Certificado de análisis* visualizado.  

### ![](/img/neutral/common/update.png) Actualizar (Aggiorna)

Al presionar este botón se actualizan todas las informaciones presentes en el *Certificado de análisis* mostrado.  

## Gestión de datos (Gestione dati)

### Datos de encabezado del documento (Dati di testata del documento)
Las informaciones gestionadas son:  
> **tipo certificato**: es el tipo del documento (dato obligatorio).  
> Al ingresar un nuevo *Certificado de análisis*, se sugiere el *Tipo de certificado* indicado en el expander *Certificados de análisis* de la pestaña *General* presente en los *Parámetros de Control de artículos*.  

> **anno/numero/data**: son el *Año*, *Número* y *Fecha* del *Certificado de análisis* (datos obligatorios).  
> Al ingresar un nuevo *Certificado de análisis*:  
> - la *Fecha* se propone igual a la fecha actual;  
> - el *Año* y el *Número* se proponen según la *Fecha* y la *Numeración* asociada al *Tipo de certificado*.  

> **Cliente**: es la razón social del *Cliente* a quien se enviará el documento.  

### Encabezado (Testata) 
Las informaciones gestionadas son:  
> **Responsable**: es el *Empleado* responsable del *Certificado de análisis*.  
> Al ingresar manualmente un nuevo *Certificado de análisis*, se sugiere el *Responsable* indicado en el expander *Certificados de análisis* de la pestaña *General* presente en los *Parámetros de Control de artículos*.  

> **Referente externo**: es la *Función empresarial* responsable de la *Acción correctiva*.  
> **Nota cliente**: anotaciones libres.  
> **Nuestro referente**: anotaciones libres sobre referencias a documentos internos.  
> **Su referente**: anotaciones libres sobre referencias a documentos externos del cliente.  
> **Descripción**: anotaciones libres.  

> **completato/in data**: expander donde es posible ingresar:  
> 
>> **Completado**: indica que el *Certificado de análisis* ha sido *Completado*.  
>> Al completarlo, se proponen automáticamente: *En fecha* (fecha de completado) igual a la fecha actual y puede ser modificada, *Completado por* vinculado al *Empleado* asociado al *Usuario A.R.M.* que ha ingresado.  
>> **Notificado/En fecha (Notificato/In data)**: indica que el *Certificado de análisis* ha sido *Notificado* al cliente en la fecha especificada.  
>> Al notificar, se propone automáticamente: *En fecha* (fecha de notificación) igual a la fecha actual y puede ser modificada.  
> 
> **Audit Trail**: expander de solo lectura donde son visibles las siguientes informaciones:  

#### Anotaciones (Annotazioni)
Las informaciones gestionadas son:  
> **Notas internas**: anotaciones libres.  
> **Imprimibles**: indica si las *Notas internas* son imprimibles o no en los informes: *Certificado de análisis* y *Declaración de conformidad*.  
> **Notas del Plan de control**: anotaciones libres sobre referencias a los Planes de control utilizados.  
> **Imprimibles**: indica si las *Notas del Plan de control* son imprimibles o no en los informes: *Certificado de análisis* y *Declaración de conformidad*.  
> **Otras notas**: anotaciones libres.  

#### Datos extra (Extra data)
Es posible ingresar [Datos Extra](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *Certificado de análisis*.  

### Controles y valores registrados (Controlli e valori rilevati) 
Las informaciones gestionadas son:  
> **articolo**   
>> **Número**: es el número de línea del documento.   
>> **Tipo de línea**: es el tipo de línea del documento. En la versión actual, solo se gestiona el *Tipo de línea: 1 - Artículo codificado*.   
>> **Clase**: es la clase del *Artículo* de la línea del documento controlada.   
>> **Código de artículo**: es el código del *Artículo* de la línea del documento controlada.   
>> **Descripción del artículo**: es la descripción del *Artículo* de la línea del documento controlada.   
>> **unità di carico**: .   
>> **lotto**: .   
>> **numero seriale**: .   
>> **Unidad de medida**: es la *Unidad de medida* de la *Cantidad del documento* de la línea del documento controlada.   
>> **Cantidad**: es la *Cantidad del documento* de la línea del documento controlada.   
>> **Unidad de medida alternativa**: es la *Unidad de medida alternativa* de la *Cantidad del documento* de la línea del documento controlada.   
>> **Cantidad alternativa**: es la *Cantidad alternativa del documento* de la línea del documento controlada.   

> **controlli articolo**   
>> **Tipo**: es el código del *Tipo de control de artículo*.   
>> **Descripción tipo**: es la descripción del *Tipo de control de artículo*. La información es de solo lectura.   
>> **Número**: es el número del *Control de artículo*. La información es de solo lectura.   
>> **Fecha**: es la fecha en que se ingresó el *Control de artículo*. La información es de solo lectura.   

#### Valores registrados (Valori rilevati)
Contiene la lista de las *Pruebas* para el *Artículo*.  
Las informaciones se heredan de las *Pruebas de los *Controles de artículo* importados y son modificables con las mismas lógicas utilizadas en la gestión de los [*Controles de artículo*](/docs/quality/item-control/items-control/item-control-management).
La lista se compone de la siguiente información:  
> **Secuencia**: es la secuencia de ejecución de la *Prueba*.   
> **Tipo de prueba**: es el código de la *Prueba*.   
> **Descripción del tipo de prueba**: es la descripción de la *Prueba*. La información es de solo lectura.   
> **Unidad de medida de los valores registrados**: es la *Unidad de medida* con la que se expresan el *Valor nominal*, los *Limites mínimo y máximo* si se expresan en valor y no en porcentaje, y los *Valores registrados*.   
> **Tipo de valor**: es el *Tipo de valor* con el que se expresará el *Valor nominal*; los *Tipos de valor* posibles son: *Numérico*, *Sí/No* o *Texto*.   
> **Tipo de límite**: habilitado si el *Tipo de valor* es *Numérico*, es el *Tipo de límite* que pilotará la habilitación de los *Límites* y los valores de *Tolerancia*.   
> **Valor nominal**: es el valor teórico esperado de la *Prueba*.  
> **Límite mínimo**: límite mínimo permitido respecto al *Valor nominal*.  
> **L.min.(toll-)**: es el límite de tolerancia negativa sobre el límite mínimo.  
> **L.min.(toll+)**: es el límite de tolerancia positiva sobre el límite mínimo.  
> **Límite máximo**: límite máximo permitido respecto al *Valor nominal*.  
> **L.max.(toll-)**: es el límite de tolerancia negativa sobre el límite máximo.  
> **L.max.(toll+)**: es el límite de tolerancia positiva sobre el límite máximo.  
> **%**: indica si el *Límite mínimo* y el *Límite máximo* se expresan en porcentaje.  
> **Valor registrado**: es el valor puntual registrado de la *Prueba* que determinará el *Resultado*.   
> Al ingresar el *Valor registrado*:  
> - en *Registrado por* se propone el *Empleado* asociado al *Usuario A.R.M.* que ha ingresado;  
> - en *Registrado por usuario* se propone el *Usuario A.R.M.* que ha ingresado;  
> - en *Resultado* se propone el resultado de la *Prueba* y puede ser modificado posteriormente.  
> - en *Fecha del resultado de la prueba* se propone la fecha actual y puede ser modificada posteriormente.  

> **media valori rilevati**: es el promedio de los valores registrados en la *Detección múltiple de valores* de la *Prueba*.  
> **rilevato da**: es el *Empleado* que ingresó el *Valor registrado*.  
> Al ingresar el *Valor registrado*, esta información se propone como igual al *Empleado* asociado al *Usuario A.R.M.* que ha ingresado.  
> **rilevato da utente**: es el *Usuario A.R.M.* que ingresó el *Valor registrado*.  
> Al ingresar el *Valor registrado*, esta información se propone como igual al *Usuario A.R.M.* que ha ingresado.  
> **esito**: es el resultado positivo o negativo de la *Prueba*.  
> Al ingresar el *Resultado*, en *Fecha del resultado de la prueba* se propone la fecha actual y puede ser modificada posteriormente.  
> Al ingresar el *Valor registrado* o el *Promedio de valores registrados*, esta información se propone en función del *Tipo de valor*, *Tipo de límite*, *Valor nominal*, *Límites* y *Tolerancias* ingresadas.  
> **stampabile**: indica que la *Prueba* es imprimible.  
> **approvato**: indica que los valores y el *Resultado* atribuido a la *Prueba* han sido *Aprobados*.  
> Al aprobar, la *Fecha de aprobación del resultado* se propone automáticamente como igual a la fecha actual y puede ser modificada; toda la información de la *Prueba* no podrá ser modificada nuevamente.  

***Valores múltiples registrados***

Contiene la lista de las detecciones realizadas para una sola *Prueba*.  
También se heredan de las *Pruebas de los *Controles de artículo* importados y son modificables con las mismas lógicas utilizadas en la gestión de los [*Controles de artículo*](/docs/quality/item-control/items-control/item-control-management).
La lista se compone de la siguiente información:  
> **Secuencia**: es la secuencia de ejecución de la detección.  
> **Posición**: anotaciones libres relacionadas con la posición de la detección.  
> **Valor registrado**: es el valor registrado por el operador.  
> Si el *Valor registrado* es de tipo *Numérico*, el promedio de los *Valores registrados* ingresados en esta lista para la *Prueba* seleccionada se ingresará en la columna *Promedio de valores registrados* de la *Prueba* seleccionada que determinará el *Resultado*.  
> Al ingresar el *Valor registrado*:  
> - en *Registrado por* se propone el *Empleado* asociado al *Usuario A.R.M.* que ha ingresado;  
> - en *Registrado por usuario* se propone el *Usuario A.R.M.* que ha ingresado;  
> - en *Registrado el* se propone la fecha actual.  
> 
> **Instrumento de medida utilizado**: es la referencia al *Instrumento de medida* utilizado por el operador para adquirir el *Valor registrado*.  
> **rilevato da**: es el *Empleado* que ingresó el *Valor registrado*.  
> Al ingresar el *Valor registrado*, esta información se propone como igual al *Empleado* asociado al *Usuario A.R.M.* que ha ingresado.  
> **rilevato da utente**: es el *Usuario A.R.M.* que ingresó el *Valor registrado*.  
> Al ingresar el *Valor registrado*, esta información se propone como igual al *Usuario A.R.M.* que ha ingresado.  
> **rilevato il**: es la fecha en que el operador ingresó el *Valor registrado*.  
> Al ingresar el *Valor registrado*, esta información se propone como igual a la fecha actual.  
> **Notas**: anotaciones libres.  
> **Descripción del instrumento de medida**: es la descripción del *Instrumento de medida* utilizado.  

***Datos de detalle de valores registrados***

Contiene otras informaciones asociadas a la *Prueba* seleccionada.  
Las informaciones se heredan de las *Pruebas de los *Controles de artículo* importados y son modificables con las mismas lógicas utilizadas en la gestión de los [*Controles de artículo*](/docs/quality/item-control/items-control/item-control-management).  
Las informaciones gestionadas son:  
> **Prueba interna**: indica si la *Prueba* se realiza internamente o en un laboratorio externo.  
> **Fecha de envío**: es la fecha en que se envió el material necesario para realizar la *Prueba* al *Laboratorio externo*. La información es de solo lectura si se indica la *Prueba interna*.  
> **Laboratorio externo**: es la razón social del *Proveedor* que realizará la prueba. La información es de solo lectura si se indica la *Prueba interna*.  
> **Tipo de prueba**: es el código y la descripción de la *Prueba*.  
> **Categoría frecuencia**: anotaciones libres relacionadas con la frecuencia de muestreo.  
> **Número de detecciones**: es el número de detecciones de valores mínimos sugeridos a realizar.  
> **Instrumento de medida utilizado**: es el *Instrumento de medida* utilizado para detectar el valor puntual de la *Prueba*.  
> **Fecha de inicio/Fecha de finalización**: son las fechas de inicio y fin de la *Prueba*.  
> **Fecha de resultado de la prueba**: es la fecha de atribución del *Resultado*.  
> Al ingresar el *Resultado*, esta información se propone como igual a la fecha actual y puede ser modificada posteriormente.  
> **Descripción sobre el resultado**: anotaciones libres sobre el tema.  
> **Fecha de aprobación**: es la fecha en que se realizó la *Aprobación* de la *Prueba*.  
> Al ingresar la fecha, se activa automáticamente el indicador *Aprobado*.  
> **Descripción de la aprobación**: anotaciones libres sobre el tema.  
> **Notas de la prueba**: anotaciones libres sobre el tema.  
> **Otras notas**: anotaciones libres.  

***Otros datos de las pruebas realizadas***

Es posible visualizar [Datos Extra](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada línea de *Valores registrados* de la línea *Artículo/Controles de artículo*.  
Se heredan de los *Atributos de las pruebas realizadas* asociadas a las *Pruebas* de los *Controles de artículo*.  

***Atributos del artículo***

Es posible ingresar [Datos Extra](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada línea de *Valores registrados* de la línea *Artículo/Controles de artículo*.  

***Documentos adjuntos***

En esta lista es posible ingresar y consultar eventuales adjuntos asociados a la línea *Valores registrados* de la línea *Artículo/Controles de artículo*.  

#### Datos de detalle de controles
Las informaciones gestionadas son:  
> **Referencia del Plan de control**: es la referencia al *Plan de control* utilizado para las pruebas y los valores registrados. La información es de solo lectura.  
> **Descripción del control**: es la descripción del *Control de artículos* relacionado. La información es de solo lectura.  
> **Notas del control**: anotaciones libres sobre el tema.  
> **Notas artículo-cliente**: anotaciones libres sobre el tema.  
> **Referencia a la Ficha técnica**: es la referencia a la *Ficha técnica* relacionada con el *Plan de control* utilizado. La información es de solo lectura.  
> **Documento de origen**: es la referencia del *Tipo de documento de origen* sobre el cual se realizaron los *Controles de artículos*. La información es de solo lectura.  
> **Referencia del documento de origen**: es la referencia del *Documento de origen* sobre el cual se realizaron los *Controles de artículos*. La información es de solo lectura.  
> **Notas**: anotaciones libres.  

#### Otros datos de control
Es posible visualizar [Datos Extra](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada línea *Artículo/Controles de artículo*.  
Se heredan de los *Atributos de los controles* asociados a los *Controles de artículo*.  

#### Atributos del artículo
Es posible ingresar [Datos Extra](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada línea *Artículo/Controles de artículo*.  

#### Documentos adjuntos
En esta lista es posible ingresar y consultar eventuales adjuntos asociados a la línea *Artículo/Controles de artículo*.  

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).