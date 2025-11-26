---
title: Controles de artículo
sidebar_position: 3
ai_generated: true
---

La gestión se puede realizar desde la **Búsqueda de controles de artículo<!-- Ricerca Controlli articolo -->**.   

:::important Para qué sirve<!-- A cosa serve -->
Los controles de artículo<!-- Controlli articolo --> permiten el registro de las mediciones realizadas, los valores detectados y la consiguiente indicación de la conformidad o no del material, semielaborado o producto controlado.  
A continuación, enumeramos los documentos desde los cuales es posible efectuar controles sobre los artículos<!-- articoli -->: Recepciones de mercancía, D.D.T. y Facturas de compra, Declaraciones de producción, Fases de órdenes de producción, Reingresos de Conto lavoro<!-- Conto lavoro --> y Movimientos de entrada<!-- Movimentazioni di carico -->.  
Los controles pueden ser específicos para: Lote de artículo, Número de serie o por Unidad de carga.  
A través de la solución M.E.S., integrada en Fluentis, es posible ingresar la información solicitada de forma directa y simplificada.  

De forma estándar están disponibles los siguientes reportes:
> **Listado de controles de artículo por artículo<!-- Elenco Controlli articolo per Articolo -->**: listado de los *Controles de artículo<!-- Controlli articolo -->* agrupados por: *Artículo<!-- Articolo -->*.  
> **Listado de controles de artículo por Cliente/Proveedor<!-- Elenco Controlli articolo per Cliente/Fornitore -->**: listado de los *Controles de artículo<!-- Controlli articolo -->* agrupados por: *Cliente/Proveedor<!-- Cliente/Fornitore -->*.  
> **Listado de controles de artículo por Tipo de documento<!-- Elenco Controlli articolo per Tipo documento -->**: listado de los *Controles de artículo<!-- Controlli articolo -->* agrupados por: *Tipo de documento<!-- Tipo documento -->*.  
> **Etiqueta Artículo C y NC<!-- Etichetta Articolo C e NC -->**: etiqueta que muestra las referencias de *Artículo<!-- Articolo -->* y el detalle de *Lote* o *Número de serie<!-- Serial number -->* controlado.  
:::

## Botones de comando<!-- Pulsanti di comando -->

### ![](/img/neutral/common/save.png) Guardar<!-- Salva -->

Al pulsar este botón se guardan todas las informaciones modificadas de los *Controles de artículo<!-- Controlli articolo -->* visualizados.  

### ![](/img/neutral/common/tick.png) Buscar Plan de control<!-- Ricerca Piano di controllo -->

Al pulsar este botón se busca el *Plan de control<!-- Piano di controllo -->* a asociar a los *Controles de artículo<!-- Controlli articolo -->* seleccionados. Si, para el *Control de artículo<!-- Controllo articolo -->* examinado:
- existen *Pruebas<!-- Prove -->* con valores ya detectados para esos *Controles<!-- Controlli -->*, no se realizará ninguna búsqueda;  
- todas las *Pruebas<!-- Prove -->* aún no han sido detectadas, las *Pruebas<!-- Prove -->* serán reemplazadas por aquellas asociadas al *Plan de control<!-- Piano di controllo -->* encontrado en la búsqueda.

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />   

### ![](/img/neutral/common/update.png) Actualizar<!-- Aggiorna -->

Al pulsar este botón se actualizan todas las informaciones presentes en los *Controles de artículo<!-- Controlli articolo -->* visualizados.  

### ![](/img/neutral/common/delete.png) Eliminar<!-- Cancella -->

Al pulsar este botón se eliminan todas las filas seleccionadas del listado principal de los *Controles de artículo<!-- Controlli articolo -->*.  

### Registrar magazzino<!-- Registra magazzino -->

El botón está habilitado solo si, desde el listado *Pruebas<!-- Prove -->*, se ha seleccionado al menos una *Prueba<!-- Prova -->*, aún no *Registrada<!-- Registrata -->*, con valores detectados y con al menos *Cantidad confirmada<!-- Quantità confermata -->* o *Cantidad no conforme<!-- Quantità non conforme -->* declaradas.  
Al pulsar este botón se realizan las registraciones de magazzino<!-- registrazioni di magazzino -->, en la fecha actual, para el *Artículo<!-- Articolo -->* asociado al *Control<!-- Controllo -->* por la *Cantidad confirmada<!-- Quantità confermata -->* y/o *Cantidad no conforme<!-- Quantità non conforme -->* declarada, para el *magazzino<!-- Magazzino -->* y *causales<!-- Causali -->* especificados.  

### Restaurar registro<!-- Ripristina registrazione -->

El botón está habilitado solo si, desde el listado *Pruebas<!-- Prove -->*, se ha seleccionado al menos una *Prueba<!-- Prova -->* ya *Registrada<!-- Registrata -->*.  
Al pulsar este botón se restauran las registraciones de magazzino<!-- registrazioni di magazzino --> asociadas a la fila *Prueba<!-- Prova -->*.  

### ![](/img/neutral/common/duplicate.png) Duplicar prueba<!-- Duplica prova -->

El botón está habilitado solo si, desde el listado *Pruebas<!-- Prove -->*, se ha seleccionado solo una fila *Prueba<!-- Prova -->*.  
Toda la información de la *Prueba<!-- Prova -->* original se duplica en una nueva *Prueba<!-- Prova -->* colocada en *Secuencia<!-- Sequenza -->* con las *Pruebas<!-- Prove -->* ya existentes.  

## Gestión de datos<!-- Gestione dati -->

### Datos de cabecera<!-- Dati di testata -->
Los datos de cabecera se dividen en dos áreas diferentes:  
- a la izquierda el listado de *Controles de artículo<!-- Controlli articolo -->* solicitados por la *Búsqueda de controles de artículo<!-- Ricerca Controlli articolo -->*;  
- a la derecha las referencias del documento de origen de los controles.  

El listado de *Controles de artículo<!-- Controlli articolo -->*, solo lectura salvo que se especifique lo contrario, se compone de la siguiente información:
> **Clase**: es la clase del *Artículo<!-- Articolo -->* de la fila de documento controlada.  
> **Código de artículo<!-- Codice articolo -->**: es el código del *Artículo<!-- Articolo -->* de la fila de documento controlada.  
> **Detalle de artículo<!-- Dettaglio articolo -->**: es el tipo de detalle a controlar del *Artículo<!-- Articolo -->* y puede asumir los siguientes valores: *Ninguno*, *Lote*, *N.S.* o *UDC*.  
> **Referencia del detalle de artículo<!-- Riferimento dettaglio articolo -->**: es el detalle de artículo requerido: *Ninguno*, *Código de lote*, *Código de Número de serie<!-- Codice Serial Number -->* o *Código de Unidad de carga*.  
> **Tipo de control<!-- Tipo controllo -->**: es el código del *Tipo de control de artículo<!-- Tipo controllo articolo -->*.  
> **Número**: es el número del *Control de artículo<!-- Controllo articolo -->*.  
> **Fecha de inserción<!-- Data inserita -->**: es la fecha en la que se ingresó el *Control de artículo<!-- Controllo articolo -->*.  
> **Plan de control utilizado<!-- Piano di controllo utilizzato -->**: es la referencia del *Plan de control<!-- Piano di controllo -->* asociado.  
> El dato puede ser cambiado si la búsqueda encontró más *Planes de control<!-- Piani di controllo -->* asociables.  
> **Descripción del plan de control<!-- Descrizione piano di controllo -->**: es la descripción del *Plan de control<!-- Piano di controllo -->*.  
> **Fecha de análisis<!-- Data analisi -->**: es la fecha en la que se realiza el análisis. El dato puede ser cambiado.  
> **Resultado<!-- Esito -->**: es el resultado global de las pruebas. Se atribuye manualmente por el operador. El dato puede ser cambiado.  
> **Fecha de resultado<!-- Data esito -->**: es la fecha en la que se atribuyó el *Resultado<!-- Esito -->* global de las *Pruebas<!-- Prove -->*. El dato puede ser cambiado.  
> **Aprobado<!-- Approvato -->**: indica la *Aprobación<!-- Approvazione -->* sobre los controles realizados.  
> Al aprobar, la *Fecha de aprobación<!-- Data approvazione -->* se propone automáticamente como la fecha actual y puede ser cambiada; toda la información de las *Pruebas<!-- Prove -->* ya no puede ser modificada.  
> **Fecha de aprobación<!-- Data approvazione -->**: es la fecha en la que se realizó la *Aprobación<!-- Approvazione -->* global de las *Pruebas<!-- Prove -->*.  
> Al ingresar la fecha se marca automáticamente el flag *Aprobada<!-- Approvata -->*.  
> **Unidad de medida<!-- Unità di misura -->**: es la *Unidad de medida<!-- Unità di misura -->* de la *Cantidad de documento<!-- Quantità documento -->* de la fila de documento controlada.  
> **Cantidad de documento<!-- Quantità documento -->**: es la *Cantidad de documento<!-- Quantità documento -->* de la fila documento controlada.  
> **Descripción de artículo<!-- Descrizione articolo -->**: es la descripción del *Artículo<!-- Articolo -->* de la fila documento controlada.  
> **Descripción del tipo de control<!-- Descrizione tipo controllo -->**: es la descripción del *Tipo de control de artículo<!-- Tipo controllo articolo -->*.  
> **Notas<!-- Note -->**: anotaciones libres. El dato puede ser cambiado.  

El área donde están presentes las referencias del documento de origen de los controles varía según el *Tipo de documento<!-- Tipo documento -->*.  
Las referencias para cada *Tipo de documento<!-- Tipo documento -->* son:
> **Recepción de mercancía<!-- Ricevimento merci -->**: *Proveedor*, *Tipo de recepción*, *Número de recibo*, *Fecha de recepción* y *Línea*.  
> **DDT de compra<!-- DDT di acquisto -->**: *Proveedor*, *Tipo de nota de entrega*, *Número de documento*, *Número interno*, *Fecha* y *Línea*.  
> **Facturas de compra<!-- Fatture di acquisto -->**: *Proveedor*, *Tipo de factura de compra*, *Número de documento*, *Número interno*, *Fecha* y *Línea*.  
> **Declaraciones de producción<!-- Dichiarazioni di produzione -->**: *Cliente*, *Tipo de orden*, *Año/Orden/Lote*, *Fase/Subfase*, *Número* y *Fecha de reporte*.  
> **Fases de orden de producción<!-- Fasi ordine di produzione -->**: *Cliente*, *Tipo de orden*, *Año/Orden/Lote*, *Fase/Subfase* y *Centro de trabajo*.  
> **Reingresos de Conto lavoro<!-- Rientri di conto lavoro -->**: *Proveedor*, *Tipo de reingreso*, *Número de documento*, *Fecha* y *Línea*.  
> **Movimientos de entrada<!-- Movimentazioni di carico -->**: *Cliente/Proveedor*, *magazzino<!-- Magazzino -->*, *causal<!-- Causale -->*, *Número*, *Fecha* y *Número de movimiento*.  

### Pruebas<!-- Prove -->
Contiene el listado de *Pruebas<!-- Prove -->* para el *Artículo<!-- Articolo -->*.  
El listado se compone de la siguiente información:
> **Secuencia<!-- Sequenza -->**: es la secuencia de realización de la *Prueba<!-- Prova -->*.  
> **Registrado<!-- Registrato -->**: indica que para la *Prueba<!-- Prova -->* se han realizado las registraciones de magazzino<!-- registrazioni di magazzino -->, en la fecha actual, para el *Artículo<!-- Articolo -->* asociado al *Control<!-- Controllo -->* por la *Cantidad confirmada<!-- Quantità confermata -->* y/o *Cantidad no conforme<!-- Quantità non conforme -->* declarada, para el *magazzino<!-- Magazzino -->* y *causales<!-- Causali -->* especificadas. Información solo lectura.  
> **Tipo de prueba<!-- Tipo prova -->**: es el código de la *Prueba<!-- Prova -->*.  
> **Descripción del tipo de prueba<!-- Descrizione tipo prova -->**: es la descripción de la *Prueba<!-- Prova -->*. Información solo lectura.  
> **Prueba destructiva<!-- Prova distruttiva -->**: indica si la prueba es de tipo destructiva. Información solo lectura.  
> **Prueba interna<!-- Prova interna -->**: indica si la *Prueba<!-- Prova -->* se realiza internamente o en un laboratorio externo.  
> **Laboratorio externo<!-- Laboratorio esterno -->**: es la razón social del *Proveedor<!-- Fornitore -->* que realizará la prueba. Información solo lectura si está indicada la *Prueba interna<!-- Prova interna -->*.  
> **Fecha de envío<!-- Data invio -->**: es la fecha en la que se envió el material necesario para efectuar la *Prueba<!-- Prova -->* en el *Laboratorio externo<!-- Laboratorio esterno -->*. Información solo lectura si está indicada la *Prueba interna<!-- Prova interna -->*.  
> **Unidad de medida de cantidad<!-- Unità di misura della quantità -->**: es la *Unidad de medida<!-- Unità di misura -->* de la *Cantidad de documento<!-- Quantità documento -->* de la fila de documento controlada. Información solo lectura.  
> **Cantidad de documento<!-- Quantità documento -->**: es la *Cantidad de documento<!-- Quantità documento -->* de la fila de documento controlada. Información solo lectura.  
> **Categoría de instrumento de medición<!-- Categoria Strumento di misura -->**: es la *Categoría del instrumento de medición<!-- Categoria dello strumento di misura -->* a utilizar para poder registrar los *Valores<!-- Valori -->* expresados en la *Prueba<!-- Prova -->*.  
> **Unidad de medida de valores detectados<!-- Unità di misura valori rilevati -->**: es la *Unidad de medida<!-- Unità di misura -->* con la que se expresan el *Valor nominal<!-- Valore nominale -->*, los *Límites mínimo y máximo* si se expresan en valor y no en porcentaje y los *Valores detectados<!-- Valori rilevati -->*.  
> **Tipo de valor<!-- Tipo valore -->**: es el *Tipo de valor<!-- Tipo valore -->* con el cual expresar el *Valor nominal<!-- Valore nominale -->*; los *Tipos de valor<!-- Tipi valore -->* posibles son: *Numérico*, *Sí/No* o *Texto*.  
> **Tipo de límite<!-- Tipo limite -->**: habilitado si el *Tipo de valor<!-- Tipo valore -->* es *Numérico*, es el *Tipo de límite<!-- Tipo limite -->* que controlará la habilitación de los *Límites* y valores de *Tolerancia*.  
> **Valor nominal<!-- Valore nominale -->**: es el valor teórico esperado de la *Prueba<!-- Prova -->*.  
> **Límite mínimo<!-- Limite minimo -->**: límite mínimo permitido respecto al *Valor nominal<!-- Valore nominale -->*.  
> **L.min.(toll-)**: es el límite de tolerancia negativa sobre el límite mínimo.  
> **L.min.(toll+)**: es el límite de tolerancia positiva sobre el límite mínimo.  
> **Límite máximo<!-- Limite massimo -->**: límite máximo permitido respecto al *Valor nominal<!-- Valore nominale -->*.  
> **L.max.(toll-)**: es el límite de tolerancia negativa sobre el límite máximo.  
> **L.max.(toll+)**: es el límite de tolerancia positiva sobre el límite máximo.  
> **%**: indica si el *Límite mínimo<!-- Limite minimo -->* y el *Límite máximo<!-- Limite massimo -->* están expresados en porcentaje.  
> **Tipo de control de prueba<!-- Tipo controllo prova -->**: es el *Tipo de control<!-- Tipo controllo -->* a realizar sobre la *Prueba<!-- Prova -->*.  
> **Frecuencia**: anotaciones libres relativas a la frecuencia de muestreo.  
> **Número de relevamientos<!-- Numero rilevazioni -->**: es el número mínimo sugerido de registros de valores a realizar.  
>
> **Fecha de inicio<!-- Data inizio -->**: fecha de inicio de la *Prueba<!-- Prova -->*.  
> **Fecha de fin<!-- Data fine -->**: fecha de fin de la *Prueba<!-- Prova -->*.  
> **Valor detectado<!-- Valore rilevato -->**: es el valor puntual detectado de la *Prueba<!-- Prova -->* que determinará su *Resultado<!-- Esito -->*.  
> Al ingresar el *Valor detectado<!-- Valore rilevato -->*:  
> - en *Detectado por<!-- Rilevato da -->* se propone el *Empleado<!-- Dipendente -->* asociado al *Usuario A.R.M.* que ha realizado el acceso;  
> - en *Detectado por usuario<!-- Rilevato da utente -->* se propone el *Usuario A.R.M.* que ha realizado el acceso;  
> - en *Resultado<!-- Esito -->* se propone el resultado de la *Prueba<!-- Prova -->* y puede ser modificado posteriormente.   
> - en *Fecha de resultado de la prueba<!-- Data esito prova -->* se propone la fecha actual y puede ser modificada posteriormente.    
>
> **Promedio de valores detectados<!-- Media valori rilevati -->**: es el promedio de los valores detectados en el *Relevamiento múltiple de valores<!-- Rilevazione multipla valori -->* de la *Prueba<!-- Prova -->*.  
> **Instrumento de medición<!-- Strumento di misura -->**: es el *Instrumento de medición<!-- Strumento di misura -->* utilizado para registrar el valor puntual de la *Prueba<!-- Prova -->*.  
> **Detectado por<!-- Rilevato da -->**: es el *Empleado<!-- Dipendente -->* que ingresó el *Valor detectado<!-- Valore rilevato -->*.  
> Al ingresar el *Valor detectado<!-- Valore rilevato -->* esta información se propone igual al *Empleado<!-- Dipendente -->* asociado al *Usuario A.R.M.* que ha realizado el acceso.  
> **Detectado por usuario<!-- Rilevato da utente -->**: es el *Usuario A.R.M.* que ingresó el *Valor detectado<!-- Valore rilevato -->*.  
> Al ingresar el *Valor detectado<!-- Valore rilevato -->* esta información se propone igual al *Usuario A.R.M.* que ha realizado el acceso.  
> **Valor detectado manualmente<!-- Valore rilevato manualmente -->**: indica si el *Valor detectado<!-- Valore rilevato -->* fue ingresado manualmente. Información solo lectura.  
> **Resultado<!-- Esito -->**: es el resultado positivo o negativo de la *Prueba<!-- Prova -->*.  
> Al ingresar el *Resultado<!-- Esito -->* en *Fecha de resultado de la prueba<!-- Data esito prova -->* se propone la fecha actual y puede ser modificada posteriormente.  
> Al ingresar el *Valor detectado<!-- Valore rilevato -->* o el *Promedio de valores detectados<!-- Media valori rilevati -->* esta información se propone según el *Tipo de valor<!-- Tipo valore -->*, *Tipo de límite<!-- Tipo limite -->*, *Valor nominal<!-- Valore nominale -->*, *Límites* y *Tolerancias* ingresados.  
> **Fecha de resultado de la prueba<!-- Data esito prova -->**: es la fecha de atribución del *Resultado<!-- Esito -->*.  
> Al ingresar el *Resultado<!-- Esito -->* esta información se propone igual a la fecha actual y puede ser modificada posteriormente.  
> **Descripción del resultado<!-- Descrizione sul risultato -->**: anotaciones libres sobre el tema.  
> **Resultado ingresado manualmente<!-- Esito rilevato manualmente -->**: indica si el *Resultado<!-- Esito -->* fue ingresado manualmente. Información solo lectura.  
>
> **Cantidad conforme<!-- Quantità conforme -->**: .  
> **Cantidad no conforme<!-- Quantità non conforme -->**: .  
> **magazzino<!-- Magazzino -->**: es el *magazzino<!-- Magazzino -->* del que se toman los *Artículos<!-- Articoli -->* controlados.  
> **Causal de salida de artículos conformes<!-- Causale scarico articoli conformi -->**: es la *Causal de salida<!-- Causale di scarico -->* utilizada para mover los *Artículos<!-- Articoli -->* controlados que resultaron *Conformes*.  
> **Causal de salida de artículos no conformes<!-- Causale scarico articoli non conformi -->**: es la *Causal de salida<!-- Causale di scarico -->* utilizada para mover los *Artículos<!-- Articoli -->* controlados que resultaron *No conformes*.  
> **Ubicación<!-- Ubicazione -->**: es la *Ubicación<!-- Ubicazione -->* de donde se toman los *Artículos<!-- Articoli -->* controlados.  
>
> **Imprimible<!-- Stampabile -->**: indica que la *Prueba<!-- Prova -->* es imprimible.  
> **Aprobado<!-- Approvato -->**: indica que los valores y el *Resultado<!-- Esito -->* atribuido a la *Prueba<!-- Prova -->* han sido *Aprobados*.  
> Al aprobar, la *Fecha de aprobación de resultado<!-- Data approvazione esito -->* se propone automáticamente como la fecha actual y puede ser cambiada; toda la información de la *Prueba<!-- Prova -->* ya no puede ser modificada.  
> **Fecha de aprobación de resultado<!-- Data approvazione esito -->**: es la fecha en la que se realizó la *Aprobación<!-- Approvazione -->* de la *Prueba<!-- Prova -->*.  
> Al ingresar la fecha se marca automáticamente el flag *Aprobado<!-- Approvato -->*.  
> **Operador<!-- Operatore -->**: es el *Usuario A.R.M.* que *Aprobó* la *Prueba<!-- Prova -->*. Información solo lectura.  
> **Descripción de la aprobación<!-- Descrizione approvazione -->**: anotaciones libres sobre el tema.  
> **Notas<!-- Note -->**: anotaciones libres.  
>
> **Descripción de la categoría del instrumento de medición<!-- Descrizione categoria Strumento di misura -->**: es la descripción de la *Categoría del instrumento de medición<!-- Categoria strumento di misura -->* a utilizar. Información solo lectura.  
> **Descripción del instrumento de medición<!-- Descrizione Strumento di misura -->**: es la descripción del *Instrumento de medición<!-- Strumento di misura -->* utilizado. Información solo lectura.  
> **Descripción de magazzino<!-- Descrizione Magazzino -->**: es la descripción del *magazzino<!-- Magazzino -->* del que se toman los *Artículos<!-- Articoli -->* controlados. Información solo lectura.  
> **Descripción de la causal de salida de artículos conformes<!-- Descrizione causale scarico articoli conformi -->**: es la descripción de la *Causal de salida<!-- Causale di scarico -->* utilizada para mover los *Artículos<!-- Articoli -->* controlados y resultaron *Conformes*. Información solo lectura.  
> **Descripción de la causal de salida de artículos no conformes<!-- Descrizione causale scarico articoli non conformi -->**: es la descripción de la *Causal de salida<!-- Causale di scarico -->* utilizada para mover los *Artículos<!-- Articoli -->* controlados resultados *No conformes*. Información solo lectura.  

La información de: *Tipo de prueba<!-- Tipo prova -->*, *Prueba interna<!-- Prova interna -->*, *Laboratorio externo<!-- Laboratorio esterno -->*, *Categoría de instrumento de medición<!-- Categoria Strumento di misura -->*, *Unidad de medida de valores detectados<!-- Unità di misura valori rilevati -->*, *Tipo de valor<!-- Tipo valore -->*, *Tipo de límite<!-- Tipo limite -->*, *Valor nominal<!-- Valore nominale -->*, *Límites ...*, *Tolerancias ...*, *%*, *Tipo de control de prueba<!-- Tipo controllo prova -->*, *Frecuencia* y *Número de relevamientos<!-- Numero rilevazioni -->*, es de solo lectura si la *Prueba<!-- Prova -->* proviene del *Plan de control<!-- Piano di controllo -->*; de lo contrario, se pueden modificar para permitir agregar manualmente más *Pruebas<!-- Prove -->* no previstas por el *Plan de control<!-- Piano di controllo -->*.

#### Relevamiento múltiple de valores<!-- Rilevazione multipla valori -->
Contiene el listado de las mediciones realizadas para una sola *Prueba<!-- Prova -->*.  
El listado se compone de la siguiente información:  
> **Secuencia<!-- Sequenza -->**: es la secuencia de implementación de la medición.  
> **Posición<!-- Posizione -->**: anotaciones libres relativas a la posición de la relevación.  
> **Valor detectado<!-- Valore rilevato -->**: es el valor detectado por el operador.  
> Si el *Valor detectado<!-- Valore rilevato -->* es *Numérico*, el promedio de los *Valores detectados<!-- Valori rilevati -->* ingresados en este listado para la *Prueba<!-- Prova -->* seleccionada se ingresará en la columna *Promedio de valores detectados<!-- Media valori rilevati -->* de la *Prueba<!-- Prova -->* seleccionada, que determinará el *Resultado<!-- Esito -->*.  
> Al ingresar el *Valor detectado<!-- Valore rilevato -->*:  
> - en *Detectado por<!-- Rilevato da -->* se propone el *Empleado<!-- Dipendente -->* asociado al *Usuario A.R.M.* que ha realizado el acceso;  
> - en *Detectado por usuario<!-- Rilevato da utente -->* se propone el *Usuario A.R.M.* que ha realizado el acceso;  
> - en *Detectado el<!-- Rilevato il -->* se propone la fecha actual.  
>
> **Instrumento de medición utilizado<!-- Strumento di misura utilizzato -->**: es la referencia al *Instrumento de medición<!-- Strumento di misura -->* utilizado por el operador para adquirir el *Valor detectado<!-- Valore rilevato -->*.  
> **Detectado por<!-- Rilevato da -->**: es el *Empleado<!-- Dipendente -->* que ingresó el *Valor detectado<!-- Valore rilevato -->*.  
> Al ingresar el *Valor detectado<!-- Valore rilevato -->* esta información se propone igual al *Empleado<!-- Dipendente -->* asociado al *Usuario A.R.M.* que ha realizado el acceso.  
> **Detectado por usuario<!-- Rilevato da utente -->**: es el *Usuario A.R.M.* que ingresó el *Valor detectado<!-- Valore rilevato -->*.  
> Al ingresar el *Valor detectado<!-- Valore rilevato -->* esta información se propone igual al *Usuario A.R.M.* que ha realizado el acceso.  
> **Detectado el<!-- Rilevato il -->**: es la fecha en la que el operador ingresó el *Valor detectado<!-- Valore rilevato -->*.  
> Al ingresar el *Valor detectado<!-- Valore rilevato -->* esta información se propone igual a la fecha actual.  
> **Notas<!-- Note -->**: anotaciones libres.  
> **Descripción del instrumento de medición<!-- Descrizione Strumento di misura -->**: es la descripción del *Instrumento de medición<!-- Strumento di misura -->* utilizado.  

#### Atributos de las pruebas realizadas<!-- Attributi prove effettuate -->
Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) para la sola *Prueba<!-- Prova -->*.  

#### Configuración de la prueba<!-- Configurazione della prova -->
Contiene los [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) necesarios para que los operadores preparen todos los instrumentos necesarios para poder iniciar una determinada prueba. Pueden considerarse configuraciones necesarias, informaciones operativas previas a la ejecución de la prueba.  
Se heredan de las *Configuraciones de pruebas planificadas<!-- Configurazioni prove pianificate -->* presentes en las *Pruebas planificadas<!-- Prove pianificate -->* del *Plan de control<!-- Piano di controllo -->* o de los *Parámetros de configuración de la prueba y el instrumento de medición<!-- Parametri di configurazione prova e strumento di misura -->* presentes en los *Tipos de prueba<!-- Tipi prova -->*.  

#### Documentos adjuntos<!-- Documenti allegati -->
En este listado es posible ingresar y consultar posibles adjuntos; es posible visualizar la vista previa.  

### Atributos de controles<!-- Attributi controlli -->
Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *Control<!-- Controllo -->*.  
Se heredan de los *Extra data* asociados al *Tipo de control de artículos<!-- Tipo controllo articoli -->*.  

### Atributos de artículo<!-- Attributi articolo -->
Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) para el *Artículo<!-- Articolo -->* controlado.  
Se heredan de los *Extra data* asociados al *Artículo<!-- Articolo -->*.  

### Documentos relacionados<!-- Documenti collegati -->
En este listado es posible ingresar y consultar posibles adjuntos; es posible visualizar la vista previa.