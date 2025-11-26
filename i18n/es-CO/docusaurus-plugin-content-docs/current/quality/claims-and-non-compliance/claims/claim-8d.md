---
title: Reclamos - 8D problem solving
sidebar_position: 3
ai_generated: true
---

## Objetos reclamados<!-- Oggetti reclamati -->

Es la lista de los *Objetos reclamados*<!-- Oggetti reclamati --> y está compuesta por la siguiente información:   
> **Objeto<!-- Oggetto -->**   
>> **Código de barras<!-- Bar code -->**: puede ser utilizado para agregar o sustituir el Artículo<!-- Articolo -->, Lote<!-- Lotto -->, Número de serie<!-- Numero seriale --> y Unidad de carga<!-- Unità di carico -->.   
>> Para toda la información sobre cómo codificar los códigos de barras, consulte la página correspondiente al [Tokenizador de código de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Clase<!-- Classe -->**: es la *Clase de artículo<!-- Classe articolo -->* reclamada.   
>> **Código de artículo<!-- Codice articolo -->**: es el código del *Artículo<!-- Articolo -->* reclamado.   
>> **Descripción de artículo<!-- Descrizione articolo -->**: es la descripción del *Artículo<!-- Articolo -->* reclamado.   
>> **Variante**: es el código variante del *Artículo<!-- Articolo -->* reclamado.   
>> **Lote<!-- Lotto -->**: es el código del *Lote<!-- Lotto -->* interno del *Artículo<!-- Articolo -->* reclamado.   
>> **Número de serie<!-- Numero seriale -->**: es el *Número de serie<!-- Numero seriale -->* del *Artículo<!-- Articolo -->* reclamado.   
>> **Unidad de carga<!-- Unità di carico -->**: es la *Unidad de carga<!-- Unità di carico -->* de origen que contenía el *Artículo<!-- Articolo -->* reclamado.   
>> Al ingresar una *Unidad de carga<!-- Unità di carico -->*, se insertan automáticamente todas las líneas de detalle de *Artículo<!-- Articolo -->* presentes en ella.   
>> Si, en los *Parámetros de Reclamos y No conformidades<!-- Parametri Reclami e Non conformità -->*, para el año de la fecha del documento, en la sesión *Reclamos<!-- Reclami -->* se ha solicitado el *Agrupamiento de datos U.D.C.<!-- Raggruppamento dati U.D.C. -->*, las líneas con *Artículos<!-- Articoli -->* iguales se mostrarán en una sola línea con las cantidades sumadas.   
>  
> **Cantidad<!-- Quantità -->**   
>> **Unidad de medida<!-- Unità di misura -->**: información de solo lectura; es la *Unidad de medida<!-- Unità di misura -->* principal del *Artículo<!-- Articolo -->* reclamado.   
>> **Vendida<!-- Venduta -->**: es la cantidad de *Artículo<!-- Articolo -->* vendida al remitente del *Reclamo<!-- Reclamo -->*; el valor se debe ingresar manualmente.   
>> **Impugnada<!-- Contestata -->**: es la cantidad de *Artículo<!-- Articolo -->* reclamada por el remitente del *Reclamo<!-- Reclamo -->*; el valor se debe ingresar manualmente.   
>> **Devuelta<!-- Resa -->**: es la cantidad de *Artículo<!-- Articolo -->* devuelta por el remitente del *Reclamo<!-- Reclamo -->*; el valor se debe ingresar manualmente.   
>> **Retrabajada<!-- Rilavorata -->**: es la cantidad de *Artículo<!-- Articolo -->* retrabajada por el remitente del *Reclamo<!-- Reclamo -->*; el valor se debe ingresar manualmente.   
>> **Aceptada<!-- Accettata -->**: es la cantidad de *Artículo<!-- Articolo -->* aceptada; el valor se debe ingresar manualmente.   
>
> **Valor<!-- Valore -->**   
>> **Reclamado<!-- Reclamato -->**: es el valor reclamado por el remitente del *Reclamo<!-- Reclamo -->*; el valor se debe ingresar manualmente.   
>> **Aceptado<!-- Accettato -->**: es el valor aceptado; el valor se debe ingresar manualmente.   
>
> **Datos de devolución<!-- Dati reso -->**   
>> **Autorización de reingreso<!-- Autorizzazione al rientro -->**: indica que se autoriza el reingreso del *Artículo<!-- Articolo -->* devuelto por la *Cantidad aceptada<!-- Quantità accettata -->*.   
>> **Fecha de reingreso prevista<!-- Data rientro prevista -->**: es la fecha prevista de reingreso del *Artículo<!-- Articolo -->* devuelto.   
>> **Lote<!-- Lotto -->**: es el *Lote<!-- lotto -->* de reingreso del *Artículo<!-- Articolo -->* devuelto.   
>> **Número de serie<!-- Numero seriale -->**: es el *Número de serie<!-- Numero seriale -->* de reingreso del *Artículo<!-- Articolo -->* devuelto.   
>> **Unidad de carga<!-- Unità di carico -->**: es la *Unidad de carga<!-- Unità di carico -->* de reingreso del *Artículo<!-- Articolo -->* devuelto.   

### Datos del objeto<!-- Dati oggetto -->

Son las informaciones adicionales de la línea del *Objeto reclamado<!-- Oggetto reclamato -->* seleccionado. La información gestionada es la siguiente:   
> **Proyecto**: es la referencia al *Proyecto<!-- Progetto -->* del *Defecto<!-- Difetto -->* específico.   
> **Notas de artículo<!-- Note articolo -->**: notas libres sobre el *Artículo<!-- Articolo -->* del *Defecto<!-- Difetto -->* específico.   
> **Notas de lote<!-- Note lotto -->**: notas libres sobre el *Lote<!-- Lotto -->* del *Defecto<!-- Difetto -->* específico.   
> **Notas de unidad de carga<!-- Note unità di carico -->**: notas libres sobre la *Unidad de carga<!-- Unità di carico -->* de la línea del *Defecto<!-- Difetto -->* específico.   
> **Notas<!-- Note -->**: notas libres sobre la línea del *Defecto<!-- Difetto -->* específico.   
> **DDT cliente**: es la referencia al *Albarán de venta<!-- Bolla di vendita -->* (*Tipo*, *Año*, y *Número*), con el que se presume que se vendió el *Artículo<!-- Articolo -->*.   
> **Factura de venta<!-- Fattura di vendita -->**: es la referencia a la *Factura de venta<!-- Fattura di vendita -->* (*Tipo*, *Año*, y *Número*), con la cual se presume que se ha facturado el *Artículo<!-- Articolo -->*.   
> **Recepción de mercancía<!-- Ricevimento merce -->**: es la referencia a la *Recepción de mercancía<!-- Ricevimento merce -->* (*Tipo*, *Año*, y *Número*), con la cual el remitente devuelve el *Artículo<!-- Articolo -->*.   
> **DDT de compra<!-- DDT di acquisto -->**: es la referencia al *Albarán de compra<!-- Bolla di acquisto -->* (*Tipo*, *Año*, y *Número*), con el cual el remitente devuelve el *Artículo<!-- Articolo -->*.   

### Extra data

Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) para el *Objeto reclamado<!-- Oggetto reclamato -->* seleccionado.   

### Documentos adjuntos<!-- Documenti allegati -->

En esta lista es posible insertar y consultar eventuales documentos adjuntos al *Objeto reclamado<!-- Oggetto reclamato -->* seleccionado.   

## Gestión 8D<!-- Gestione 8D -->

### Equipo<!-- Team -->

Es el grupo de recursos que participarán en la gestión del *Reclamo<!-- Reclamo -->* y está compuesto por la siguiente información:   
> **Función empresarial<!-- Funzione aziendale -->**   
>> **Código**: es el código de la *Función empresarial<!-- Funziona aziendale -->* a involucrar/involucrada.   
>> **Descripción**: es la descripción de la *Función empresarial<!-- Funziona aziendale -->* a involucrar/involucrada.   
>   
> **Empleado<!-- Dipendente -->**   
>> **Código**: es el código del *Empleado<!-- Dipendente -->* a involucrar/involucrado.   
>> **Apellido<!-- Cognome -->**: es el apellido del *Empleado<!-- Dipendente -->* a involucrar/involucrado.   
>> **Nombre<!-- Nome -->**: es el nombre del *Empleado<!-- Dipendente -->* a involucrar/involucrado.   
>   
> **Líder<!-- Leader -->**: indica que el sujeto a involucrar/involucrado es el *Líder del equipo<!-- Team leader -->*.   
> **Descripción del sujeto<!-- Descrizione soggetto -->**: anotación libre en caso de que el sujeto a involucrar/involucrado no sea *Función empresarial<!-- Funziona aziendale -->* o *Empleado<!-- Dipendente -->*.   
> **Notas<!-- Note -->**: anotaciones libres.   

### Acciones de contención<!-- Azioni di contenimento -->

Son las acciones inmediatas que serán emprendidas hasta la implementación de la acción correctiva permanente.   
Estas permitirán que el problema reportado no se repita y se componen de la siguiente información:   
> **Datos de la acción<!-- Dati azione -->**   
>> **Secuencia<!-- Sequenza -->**: es la *Secuencia<!-- Sequenza -->* de visualización de las *Acciones de contención<!-- Azione di contenimento -->*; se propone un número progresivo con posibilidad de ser modificado.   
>> **Acción de contención<!-- Azione di contenimento -->**: anotación libre sobre la *Acción de contención<!-- Azione di contenimento -->* a realizar.   
>> **Fecha de vencimiento<!-- Data scadenza -->**: es la fecha límite para completar las actividades relacionadas con la *Acción de contención<!-- Azione di contenimento -->*.   
>> **Ejecutada<!-- Attuata -->**: indica que la *Acción de contención<!-- Azione di contenimento -->* ha sido completada.   
>> **Fecha de ejecución<!-- Data attuazione -->**: es la fecha en que se completó la *Acción de contención<!-- Azione di contenimento -->*.   
>
> **Función empresarial<!-- Funzione aziendale -->**   
>> **Código**: es el código de la *Función empresarial<!-- Funziona aziendale -->* responsable de la acción.    
>> **Descripción**: es la descripción de la *Función empresarial<!-- Funziona aziendale -->* responsable de la acción.   
>   
> **Empleado<!-- Dipendente -->**   
>> **Código**: es el código del *Empleado<!-- Dipendente -->* responsable de la acción.   
>> **Apellido<!-- Cognome -->**: es el apellido del *Empleado<!-- Dipendente -->* responsable de la acción.   
>> **Nombre<!-- Nome -->**: es el nombre del *Empleado<!-- Dipendente -->* responsable de la acción.   
>   
> **Referencia acción correctiva<!-- Riferimento azione correttiva -->**   
>> **Tipo**, **Año**, y **Número**: son referencias, de solo lectura, a la *Acción correctiva<!-- Azione correttiva -->* asociada a la línea de la *Acción de contención<!-- Azione di contenimento -->* y generada mediante el botón **Crear acción correctiva<!-- Crea azione correttiva -->**.   
>   
> **Descripción del sujeto<!-- Descrizione soggetto -->**: anotación libre en caso de que el responsable de la acción no sea *Función empresarial<!-- Funziona aziendale -->* o *Empleado<!-- Dipendente -->*.   
> **Notas<!-- Note -->**: anotaciones libres.   

### Causas<!-- Cause -->

Son las *Causas<!-- Cause -->* potenciales que podrían explicar por qué ocurrió el problema, con la asignación de un porcentaje de probabilidad.   
> **Secuencia<!-- Sequenza -->**: es la *Secuencia<!-- Sequenza -->* de visualización de las *Causas<!-- Cause -->*; se propone un número progresivo con posibilidad de ser modificado.   
> **Causa<!-- Causa -->** y **Descripción de causa<!-- Descrizione causa -->**: es la causa que probablemente generó el problema; solo es posible ingresar las *Causas<!-- Cause -->* activas previstas por los *Reclamos<!-- Reclamo -->*.   
> **Descripción adicional<!-- Descrizione aggiuntiva -->**: anotaciones libres sobre la *Causa<!-- Causa -->*.   
> **Tipo de causa<!-- Tipo causa -->**: es el tipo de causa; existen dos tipos previstos: el tipo que permitió que se generara el *Evento<!-- Evento -->* y el que permitió su *Fuga<!-- Fuga -->* sin que el *Evento<!-- Evento -->* fuera detectado.   
> **Peso (%)<!-- Peso (%) -->**: es el peso (expresado en porcentaje) de cada *Causa<!-- Causa -->*. La suma de todos los pesos debe ser 100%.   
> **Datos del problema<!-- Dati del problema -->**: anotación libre sobre el tema.   
> **Notas<!-- Note -->**: anotaciones libres.   

### Acciones permanentes<!-- Azioni permanenti -->

Son las acciones permanentes que se emprenderán teniendo presente que, además de resolver el problema, no causarán efectos colaterales no deseados.   
La lista se compone de la siguiente información:   
> **Datos de la acción<!-- Dati azione -->**   
>> **Secuencia<!-- Sequenza -->**: es la *Secuencia<!-- Sequenza -->* de visualización de las *Acciones permanentes<!-- Azione permanente -->*; se propone un número progresivo con la posibilidad de ser modificado.   
>> **Acción permanente<!-- Azione permanente -->**: anotación libre sobre la *Acción permanente<!-- Azione permanente -->* a realizar.   
>> **Causa de origen<!-- Causa origine -->** y **Descripción de causa de origen<!-- Descrizione causa origine -->**: es la causa, entre las especificadas anteriormente en la pestaña **Causas<!-- Cause -->**, sobre la que se realizará la *Acción<!-- Azione -->*.   
>> **Fecha de vencimiento<!-- Data scadenza -->**: es la fecha límite para completar las actividades relacionadas con la *Acción permanente<!-- Azione permanente -->*.   
>> **Ejecutada<!-- Attuata -->**: indica que la *Acción permanente<!-- Azione permanente -->* ha sido completada y la *Fecha de ejecución<!-- Data attuazione -->* se propone automáticamente en la fecha actual, con la posibilidad de ser modificada.   
>> **Fecha de ejecución<!-- Data attuazione -->**: es la fecha en que se completó la *Acción permanente<!-- Azione permanente -->*. Al ingresar la fecha, se activa automáticamente la marca *Ejecutada<!-- Attuata -->*.   
>
> **Función empresarial<!-- Funzione aziendale -->**   
>> **Código**: es el código de la *Función empresarial<!-- Funziona aziendale -->* responsable de la acción.   
>> **Descripción**: es la descripción de la *Función empresarial<!-- Funziona aziendale -->* responsable de la acción.   
>   
> **Empleado<!-- Dipendente -->**   
>> **Código**: es el código del *Empleado<!-- Dipendente -->* responsable de la acción.   
>> **Apellido<!-- Cognome -->**: es el apellido del *Empleado<!-- Dipendente -->* responsable de la acción.   
>> **Nombre<!-- Nome -->**: es el nombre del *Empleado<!-- Dipendente -->* responsable de la acción.   
>   
> **Referencia acción correctiva<!-- Riferimento azione correttiva -->**   
>> **Tipo**, **Año**, y **Número**: son referencias, de solo lectura, a la *Acción correctiva<!-- Azione correttiva -->* asociada a la línea de la *Acción permanente<!-- Azione permanente -->* y generada mediante el botón **Crear acción correctiva<!-- Crea azione correttiva -->**.   
>   
> **Descripción del sujeto<!-- Descrizione soggetto -->**: anotación libre en caso de que el responsable de la acción no sea *Función empresarial<!-- Funziona aziendale -->* o *Empleado<!-- Dipendente -->*.   
> **Notas<!-- Note -->**: anotaciones libres.   

### Validación de acciones<!-- Convalida azioni -->

Lista, precompilada con todas las *Acciones permanentes<!-- Azioni permanenti -->* previamente ingresadas y *Ejecutadas<!-- Attuate -->*, utilizada para verificar que las *Acciones<!-- Azioni -->* se realicen dentro de las fechas previstas y para evaluar su implementación y eficacia. Desde esta lista no es posible ingresar nuevas *Acciones<!-- Azioni -->* ni eliminar las existentes. La lista se compone de la siguiente información:   
> **Datos de la acción ejecutada<!-- Dati azione attuata -->**   
>> **Secuencia<!-- Sequenza -->**: es la *Secuencia<!-- Sequenza -->* de visualización de las *Acciones permanentes<!-- Azioni permanenti -->*; se muestra el número progresivo de la *Acción permanente<!-- Azione permanente -->*. La información es de solo lectura.   
>> **Acción permanente<!-- Azione permanente -->**: *Acción permanente<!-- Azione permanente -->* realizada. La información es de solo lectura.   
>> **Causa de origen<!-- Causa origine -->** y **Descripción de causa de origen<!-- Descrizione causa origine -->**: es la *Causa de origen<!-- Causa di origine -->* de la *Acción permanente<!-- Azione permanente -->* ejecutada. La información es de solo lectura.   
>
> **Datos de validación de la acción ejecutada<!-- Dati convalida azione attuata -->**   
>> **Validada el<!-- Convalidata il -->**: es la fecha en que la *Acción permanente<!-- Azione permanente -->* fue validada.   
Al ingresar cualquier otra información, se propone automáticamente la fecha actual, con posibilidad de ser modificada.   
>> **Pruebas realizadas para validar la eficacia de la acción<!-- Test attuati per convalidare l'efficacia dell'azione -->**: anotación libre sobre el tema.   
>
> **Validada por la Función<!-- Convalidata dalla Funzione -->**   
>> **Código**: es el código de la *Función empresarial<!-- Funziona aziendale -->* responsable de la validación.   
>> **Descripción**: es la descripción de la *Función empresarial<!-- Funziona aziendale -->* responsable de la validación.   
>   
> **Validada por el Empleado<!-- Convalidata dal Dipendente -->**   
>> **Código**: es el código del *Empleado<!-- Dipendente -->* responsable de la validación.   
>> **Apellido<!-- Cognome -->**: es el apellido del *Empleado<!-- Dipendente -->* responsable de la validación.   
>> **Nombre<!-- Nome -->**: es el nombre del *Empleado<!-- Dipendente -->* responsable de la validación.   
>   
> **Descripción del sujeto<!-- Descrizione soggetto -->**: anotación libre en caso de que el responsable de la *Acción<!-- Azione -->* no sea *Función empresarial<!-- Funziona aziendale -->* o *Empleado<!-- Dipendente -->*.   

### Fases

Son otras actividades donde implementar otras acciones. La lista se compone de la siguiente información:   
> **Fases identificadas y/o implementadas<!-- Fasi identificate e/o implementate -->**   
>> **Secuencia<!-- Sequenza -->**: es la *Secuencia<!-- Sequenza -->* de visualización de la *Fase<!-- Fase -->*.   
>> **Actividad a emprender<!-- Attività da intraprendere -->**: anotación libre de la *Actividad<!-- Attività -->* a realizar para la finalización de la fase.   
>> **Fecha de implementación prevista<!-- Data implementazione prevista -->**: es la fecha prevista de finalización de la *Actividad<!-- Attività -->*.   
>> **Actividad emprendida<!-- Attività intrapresa -->**: anotación libre de la *Actividad<!-- Attività -->* realizada para la finalización de la fase.   
>> **Fecha de implementación<!-- Data implementazione -->**: es la fecha efectiva de finalización de la *Actividad<!-- Attività -->*.   
>
> **Validada por la Función<!-- Convalidata dalla Funzione -->**   
>> **Código**: es el código de la *Función empresarial<!-- Funziona aziendale -->* responsable de la validación.   
>> **Descripción**: es la descripción de la *Función empresarial<!-- Funziona aziendale -->* responsable de la validación.   
>   
> **Validada por el Empleado<!-- Convalidata dal Dipendente -->**   
>> **Código**: es el código del *Empleado<!-- Dipendente -->* responsable de la validación.   
>> **Apellido<!-- Cognome -->**: es el apellido del *Empleado<!-- Dipendente -->* responsable de la validación.   
>> **Nombre<!-- Nome -->**: es el nombre del *Empleado<!-- Dipendente -->* responsable de la validación.   
>   
> **Referencia acción correctiva<!-- Riferimento azione correttiva -->**   
>> **Tipo**, **Año**, y **Número**: son referencias, de solo lectura, a la *Acción correctiva<!-- Azione correttiva -->* asociada a la línea de la *Actividad<!-- Attività -->* y generada mediante el botón **Crear acción correctiva<!-- Crea azione correttiva -->**.   
>   
> **Descripción del sujeto<!-- Descrizione soggetto -->**: anotación libre en caso de que el responsable de la *Actividad<!-- Attività -->* no sea *Función empresarial<!-- Funziona aziendale -->* o *Empleado<!-- Dipendente -->*.   
> **Notas<!-- Note -->**: anotaciones libres.   

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consultar el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).