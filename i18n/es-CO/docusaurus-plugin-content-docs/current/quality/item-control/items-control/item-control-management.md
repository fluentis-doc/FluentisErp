---
title: controlli articolo
sidebar_position: 3
---

La gestión se puede realizar desde la **Búsqueda de controlli articolo (Ricerca Controlli articolo)**.

:::important ¿Para qué sirve? (A cosa serve)
Los controlli articolo permiten el registro de las mediciones realizadas, los valores detectados y la consiguiente indicación de conformidad o no del material, semielaborado o producto controlado.  
Enumeramos los documentos desde los cuales se pueden realizar controles sobre los artículos: Recepciones de mercancía, D.D.T. y Facturas de compra, Declaraciones de producción, Fases de órdenes de producción, Reingresos de trabajo por cuenta y Movimientos de carga.  
Los controles pueden ser específicos para: Lote de artículo, Número de serie o por Unidad de carga.  
A través de la solución M.E.S., integrada en Fluentis, es posible ingresar la información requerida de manera directa y simplificada.

Estándar están disponibles los reportes de:  
> **elenco controlli articolo per articolo**: lista de los *controlli articolo* agrupados por: *Artículo*.  
> **elenco controlli articolo per cliente/fornitore**: lista de los *controlli articolo* agrupados por: *Cliente/Fornitore*.  
> **elenco controlli articolo per tipo documento**: lista de los *controlli articolo* agrupados por: *Tipo documento*.  
> **etichetta articolo c e nc**: etiqueta que muestra los referencias de *Artículo* y detalle de *Lote* o *Número de serie* controlado.  
:::


## Botones de comando


### ![](/img/neutral/common/save.png) Guardar (Salva)

Al presionar este botón se guardan toda la información modificada de los *controlli articolo* visualizados.   

### ![](/img/neutral/common/tick.png) Buscar Plan de control (Ricerca Piano di controllo)

Al presionar este botón se busca el *Plan de control* para asociar a los *controlli articolo* seleccionados. Si, para el *Control de artículo* examinado:
- hay pruebas con valores ya detectados para esos controles, no se realizará ninguna búsqueda;  
- si todas las *Pruebas* aún no se han registrado, las *Pruebas* se reemplazarán con las asociadas al *Plan de control* encontrado en la búsqueda.

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />   


### ![](/img/neutral/common/update.png) Actualizar (Aggiorna)

Al presionar este botón se actualiza toda la información presente en los *controlli articolo* visualizados.   


### ![](/img/neutral/common/delete.png) Eliminar (Cancella)

Al presionar este botón se eliminan todas las filas seleccionadas de la lista principal de *controlli articolo*.   


### Registrar en almacén (Registra magazzino)

El botón está habilitado solamente si, de la lista de *Pruebas*, se ha seleccionado al menos una *Prueba* que no ha sido *Registrada*, con valores detectados y con al menos *Cantidad confirmada* o *Cantidad no conforme* declaradas.  
Al presionar este botón se realizan los registros de almacén, en la fecha actual, para el *Artículo* asociado al *Control* por la *Cantidad confirmada* y/o *Cantidad no conforme* declarada, para el *Almacén* y *Causales* especificadas.   


### Restablecer registro (Ripristina registrazione)

El botón está habilitado solamente si, de la lista de *Pruebas*, se ha seleccionado al menos una *Prueba* ya *Registrada*.  
Al presionar este botón se restablecen los registros de almacén asociados a la línea de la *Prueba*.   


### ![](/img/neutral/common/duplicate.png) Duplicar prueba (Duplica prova)

El botón está habilitado solamente si, de la lista de *Pruebas*, se ha seleccionado una sola fila de *Prueba*.  
Toda la información de la *Prueba* original se duplica en una nueva *Prueba* agregada en *Secuencia* a las *Pruebas* ya existentes.   


## Gestión de datos


### Datos de encabezado (Dati di testata)
Los datos de encabezado se dividen en dos áreas diferentes:  
- a la izquierda se encuentra la lista de los *controlli articolo* requeridos por la *Búsqueda de controlli articolo*;  
- a la derecha se encuentran los referentes del documento de origen de los controles.

La lista de *controlli articolo*, que es solo de lectura si no se especifica lo contrario, se compone de la siguiente información:  
> **classe**: es la clase del *Artículo* de la línea del documento controlada.  
> **codice articolo**: es el código del *Artículo* de la línea del documento controlada.  
> **dettaglio articolo**: es el tipo de detalle a controlar del *Artículo* y puede asumir los siguientes valores: *nessuno*, *lotto*, *s.n.* o *udc*.  
> **riferimento dettaglio articolo**: es el detalle del artículo requerido: *nessuno*, *codice lotto*, *codice serial number* o *codice unità di carico*.  
> **tipo controllo**: es el código del *Tipo de control de artículo*.  
> **numero**: es el número del *Control de artículo*.  
> **data inserita**: es la fecha en que se ingresó el *Control de artículo*.  
> **piano di controllo utilizzato**: es la referencia del *Plan de control* asociado.  
> El dato puede ser modificado si la búsqueda ha encontrado más *Planes de control* asociables.  
> **descrizione piano di controllo**: es la descripción del *Plan de control*.  
> **data analisi**: es la fecha en la que se realiza el análisis. El dato puede ser modificado.  
> **esito**: es el resultado global de las pruebas. Se asigna manualmente por el operador. El dato puede ser modificado.  
> **data esito**: es la fecha en que se asignó el *Resultado* global de las *Pruebas*. El dato puede ser modificado.  
> **approvato**: indica la *Aprobación* en los controles realizados.  
> En el momento de la aprobación, la *data approvazione* se propone automáticamente igual a la fecha actual y puede ser cambiada; toda la información de las *Pruebas* no puede ser modificada.  
> **data approvazione**: es la fecha en que se realizó la *Aprobación* global de las *Pruebas*.  
> En el momento de ingresar la fecha, se establece automáticamente el indicador *approvata*.  
> **unità di misura**: es la *Unidad de medida* de la *Cantidad del documento* de la línea del documento controlada.  
> **quantità documento**: es la *Cantidad del documento* de la línea del documento controlada.  
> **descrizione articolo**: es la descripción del *Artículo* de la línea del documento controlada.  
> **descrizione tipo controllo**: es la descripción del *Tipo de control de artículo*.  
> **note**: anotaciones libres. El dato puede ser modificado.

El área donde están los referentes del documento de origen de los controles varía según el *Tipo de documento*.  
Los referentes para cada *Tipo de documento* son:  
> **ricevimento merci**: *fornitore*, *tipo ricevimento*, *numero ricevuta*, *data ricevimento* y *riga*.  
> **ddt di acquisto**: *fornitore*, *tipo bolla consegna*, *numero documento*, *numero interno*, *data* y *riga*.  
> **fatture di acquisto**: *fornitore*, *tipo fattura acquisto*, *numero documento*, *numero interno*, *data* y *riga*.  
> **dichiarazioni di produzione**: *cliente*, *tipo ordine*, *anno/ordine/lotto*, *fase/sottofase*, *numero* y *Fecha de señalización (Data segnalazione)*.  
> **Fases de orden de producción (Fasi ordine di produzione)**: *cliente*, *tipo ordine*, *anno/ordine/lotto*, *fase/sottofase* y *centro di lavoro*.  
> **Reingresos de trabajo (Rientri di conto lavoro)**: *fornitore*, *tipo rientro*, *numero documento*, *data* y *riga*.  
> **Movimientos de carga (Movimentazioni di carico)**: *cliente/fornitore*, *magazzino*, *causale*, *numero*, *data* y *Número de movimiento (Numero movimento)*.   


### Pruebas (Prove)
Contiene la lista de las *Pruebas* para el *Artículo*.  
La lista se compone de la siguiente información:  
> **sequenza**: es la secuencia de realización de la *Prueba*.  
> **registrato**: indica que, para la *Prueba*, se han realizado los registros de almacén, en la fecha actual, para el *Artículo* asociado al *Control* por la *Cantidad confirmada* y/o *Cantidad no conforme* declarada, para el *Almacén* y *Causales* especificadas. La información es de sola lectura.  
> **tipo prova**: es el código de la *Prueba*.  
> **descrizione tipo prova**: es la descripción de la *Prueba*. La información es de sola lectura.  
> **Prueba destructiva (Prova distruttiva)**: indica si la prueba es de tipo destructiva. La información es de sola lectura.  
> **prova interna**: indica si la *Prueba* se realiza internamente o en un laboratorio externo.  
> **laboratorio esterno**: es la razón social del *Proveedor* que llevará a cabo la prueba. La información es de sola lectura si se indica la *Prueba interna*.  
> **data invio**: es la fecha en que se envió el material necesario para realizar la *Prueba* en el *Laboratorio externo*. La información es de sola lectura si se indica la *Prueba interna*.  
> **Unidad de medida de la cantidad (Unità di misura della quantità)**: es la *Unidad de medida* de la *Cantidad del documento* de la línea del documento controlada. La información es de sola lectura.  
> **quantità documento**: es la *Cantidad del documento* de la línea del documento controlada. La información es de sola lectura.  
> **categoria strumento di misura**: es la *Categoría del instrumento de medida* que se utilizará para poder detectar los *Valores* expresados en la *Prueba*.  
> **Unidad de medida de valores detectados (Unità di misura valori rilevati)**: es la *Unidad de medida* con la que se expresan el *Valor nominal*, los *Límites mínimo y máximo* si se expresan en valor y no en porcentaje y los *Valores detectados*.  
> **tipo valore**: es el *Tipo de valor* con el que se expresa el *Valor nominal*; los *Tipos de valor* posibles son: *numerico*, *Sí/No (Si/No)* o *testo*.  
> **tipo limite**: habilitado si el *Tipo de valor* es *Numérico*, es el *Tipo de límite* que controlará la habilitación de los *Límites* y los valores de *Tolerancia*.  
> **valore nominale**: es el valor teórico esperado de la *Prueba*.  
> **limite minimo**: límite mínimo permitido respecto al *Valor nominal*.  
> **L.min.(toll-)**: es el límite de tolerancia negativa sobre el límite mínimo.  
> **L.min.(toll+)**: es el límite de tolerancia positiva sobre el límite mínimo.  
> **limite massimo**: límite máximo permitido respecto al *Valor nominal*.  
> **L.max.(toll-)**: es el límite de tolerancia negativa sobre el límite máximo.  
> **L.max.(toll+)**: es el límite de tolerancia positiva sobre el límite máximo.  
> **% (Percentage)**: indica si el *Límite mínimo* y el *Límite máximo* se expresan en porcentaje.  
> **tipo controllo prova**: es el *Tipo de control* que se debe realizar sobre la *Prueba*.  
> **frequenza**: anotaciones libres relacionadas con la frecuencia de muestreo.  
> **Número de mediciones (Numero rilevazioni)**: es el número de mediciones mínimas sugeridas que se deben realizar.  
>
> **data inizio**: es la fecha de inicio de la *Prueba*.  
> **data fine**: es la fecha de finalización de la *Prueba*.  
> **valore rilevato**: es el valor puntual detectado de la *Prueba* que determinará el *Resultado*.  
> Al ingresar el *Valor detectado*:  
> - en *rilevato da* se propone el *Empleado* asociado al *Usuario A.R.M.* que ha realizado el acceso;  
> - en *rilevato da utente* se propone el *Usuario A.R.M.* que ha realizado el acceso;  
> - en *esito* se propone el resultado de la *Prueba* y se puede modificar posteriormente.  
> - en *data esito prova* se propone la fecha actual y se puede modificar posteriormente.  
>
> **media valori rilevati**: es el promedio de los valores detectados en la *Detección múltiple de valores* de la *Prueba*.  
> **strumento di misura**: es el *Instrumento de medida* utilizado para detectar el valor puntual de la *Prueba*.  
> **rilevato da**: es el *Empleado* que ha ingresado el *Valor detectado*.  
> Al ingresar el *Valor detectado*, esta información se propone como igual al *Empleado* asociado al *Usuario A.R.M.* que ha realizado el acceso.  
> **rilevato da utente**: es el *Usuario A.R.M.* que ha ingresado el *Valor detectado*.  
> Al ingresar el *Valor detectado*, esta información se propone como igual al *Usuario A.R.M.* que ha realizado el acceso.  
> **Valor detectado manualmente (Valore rilevato manualmente)**: indica si el *Valor detectado* se ha ingresado manualmente. La información es de sola lectura.  
> **esito**: es el resultado positivo o negativo de la *Prueba*.  
> Al ingresar el *Resultado*, en *data esito prova* se propone la fecha actual y se puede modificar posteriormente.  
> Al ingresar el *Valor detectado* o el *Promedio de valores detectados*, esta información se propone en base al *Tipo de valor*, *Tipo de límite*, *Valor nominal*, *Límites* y *Tolerancias* ingresados.  
> **data esito prova**: es la fecha de atribución del *Resultado*.  
> Al ingresar el *Resultado*, esta información se propone como igual a la fecha actual y se puede modificar posteriormente.  
> **Descripción sobre el resultado (Descrizione sul risultato)**: anotaciones libres sobre el tema.  
> **esito rilevato manualmente**: indica si el *Resultado* se ha ingresado manualmente. La información es de sola lectura.  
>
> **quantità conforme**: .  
> **Cantidad no conforme (Quantità non conforme)**: .  
> **magazzino**: es el *Almacén* del cual se extraen los *Artículos* controlados.  
> **Causal de descarga de artículos conformes (Causale scarico articoli conformi)**: es la *Causal de descarga* utilizada para mover los *Artículos* controlados que resultaron *Conformes*.  
> **Causal de descarga de artículos no conformes (Causale scarico articoli non conformi)**: es la *Causal de descarga* utilizada para mover los *Artículos* controlados que resultaron *No conformes*.  
> **ubicazione**: es la *Ubicación* desde la que se extraen los *Artículos* controlados.  
>
> **stampabile**: indica que la *Prueba* es imprimible.  
> **approvato**: indica que los valores y el *Resultado* atribuidos a la *Prueba* han sido *Aprobados*.  
> En el momento de la aprobación, la *Fecha de aprobación del resultado (Data approvazione esito)* se propone automáticamente igual a la fecha actual y puede ser cambiada; toda la información de la *Prueba* no puede ser modificada.  
> **Fecha de aprobación del resultado (Data approvazione esito)**: es la fecha en que se realizó la *Aprobación* de la *Prueba*.  
> En el momento de ingresar la fecha, se establece automáticamente el indicador *approvato*.  
> **operatore**: es el *Usuario A.R.M.* que ha *Aprobado* la *Prueba*. La información es de sola lectura.  
> **descrizione approvazione**: anotaciones libres sobre el tema.  
> **note**: anotaciones libres.  
>
> **Descripción de categoría del instrumento de medida (Descrizione categoria Strumento di misura)**: es la descripción de la *Categoría del instrumento de medida* a utilizar. La información es de sola lectura.  
> **descrizione strumento di misura**: es la descripción del *Instrumento de medida* utilizado. La información es de sola lectura.  
> **descrizione magazzino**: es la descripción del *Almacén* del cual se extraen los *Artículos* controlados. La información es de sola lectura.  
> **Descripción de la causal de descarga de artículos conformes (Descrizione causale scarico articoli conformi)**: es la descripción de la *Causal de descarga* utilizada para mover los *Artículos* controlados que resultaron *Conformes*. La información es de sola lectura.  
> **Descripción de la causal de descarga de artículos no conformes (Descrizione causale scarico articoli non conformi)**: es la descripción de la *Causal de descarga* utilizada para mover los *Artículos* controlados que resultaron *No conformes*. La información es de sola lectura.  

La información de: *Tipo de prueba*, *Prueba interna*, *Laboratorio externo*, *Categoría del instrumento de medida*, *Unidad de medida de valores detectados*, *Tipo de valor*, *Tipo de límite*, *Valor nominal*, *Límites ...*, *Tolerancias ...*, *%*, *Tipo de control de prueba*, *Frecuencia* y *Número de mediciones*, son de sola lectura si la *Prueba* proviene del *Plan de control*, de lo contrario, pueden ser modificables para dar la posibilidad de agregar manualmente más *Pruebas* no previstas en el *Plan de control*.


#### Detección múltiple de valores (Rilevazione multipla valori)
Contiene la lista de detecciones realizadas para una única *Prueba*.  
La lista se compone de la siguiente información:  
> **sequenza**: es la secuencia de realización de la detección.  
> **posizione**: anotaciones libres relacionadas con la posición de la detección.  
> **valore rilevato**: es el valor detectado por el operador.  
> Si el *Valor detectado* es de tipo *Numérico*, el promedio de los *Valores detectados* ingresados en esta lista para la *Prueba* seleccionada se ingresará en la columna *media valori rilevati* de la *Prueba* seleccionada que determinará el *Resultado*.  
> Al ingresar el *Valor detectado*:  
> - en *rilevato da* se propone el *Empleado* asociado al *Usuario A.R.M.* que ha realizado el acceso;  
> - en *rilevato da utente* se propone el *Usuario A.R.M.* que ha realizado el acceso;  
> - en *rilevato il* se propone la fecha actual.  
>
> **strumento di misura utilizzato**: es la referencia al *Instrumento de medida* utilizado por el operador para adquirir el *Valor detectado*.  
> **rilevato da**: es el *Empleado* que ha ingresado el *Valor detectado*.  
> Al ingresar el *Valor detectado*, esta información se propone como igual al *Empleado* asociado al *Usuario A.R.M.* que ha realizado el acceso.  
> **rilevato da utente**: es el *Usuario A.R.M.* que ha ingresado el *Valor detectado*.  
> Al ingresar el *Valor detectado*, esta información se propone como igual al *Usuario A.R.M.* que ha realizado el acceso.  
> **rilevato il**: es la fecha en que el operador ha ingresado el *Valor detectado*.  
> Al ingresar el *Valor detectado*, esta información se propone como igual a la fecha actual.  
> **note**: anotaciones libres.  
> **descrizione strumento di misura**: es la descripción del *Instrumento de medida* utilizado.   


#### Atributos de pruebas realizadas (Attributi prove effettuate)
Es posible ingresar [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata) para la única *Prueba*.   


#### Configuración de la prueba (Configurazione della prova)
Contiene [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) necesarios para que los operadores preparen todos los instrumentos necesarios para poder iniciar una determinada prueba. Pueden ser consideradas configuraciones necesarias, información operativa propedéutica a la ejecución de la prueba.  
Se heredan de las *Configuraciones de pruebas planificadas* presentes en las *Pruebas planificadas* del *Plan de control* o de los *Parámetros de configuración de prueba y instrumento de medida* presentes en los *Tipos de prueba*.   


#### Documentos adjuntos (Documenti allegati)
En esta lista es posible ingresar y consultar cualquier adjunto; se puede visualizar una vista previa.   


### Atributos de controles (Attributi controlli)
Es posible ingresar [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *Control*.  
Se heredan de los *Datos extra* asociados al *Tipo de control de artículos*.   


### Atributos de artículo (Attributi articolo)
Es posible ingresar [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata) para el *Artículo* controlado.  
Se heredan de los *Datos extra* asociados al *Artículo*.   


### Documentos relacionados (Documenti collegati)
En esta lista es posible ingresar y consultar cualquier adjunto; se puede visualizar una vista previa.