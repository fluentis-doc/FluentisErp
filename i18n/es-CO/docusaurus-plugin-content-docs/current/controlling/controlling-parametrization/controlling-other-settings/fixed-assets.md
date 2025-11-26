---
title: Anagráficos de Activos Fijos
sidebar_position: 7
ai_generated: true
---

Lo primero que debemos definir es si nos basta aplicar las lógicas contables<!-- logiche contabili -->, o si nuestro control de gestión<!-- controllo di gestione --> debe desvincularse de estas para aplicar criterios más o menos diferentes.

En el primer caso procederemos a abrir los ***Parámetros del módulo de activos fijos<!-- Parametri del modulo cespiti -->*** para activar la casilla *Habilitación centro de contabilidad<!-- Abilitazione centro contabilità -->*. Con esta opción, dentro de las categorías de activos fijos<!-- categorie cespiti --> tendremos visibilidad de la cuadrícula de configuración por defecto de los *Centros de costo<!-- Centri di costo -->* a utilizar, así como en la cabecera del activo fijo<!-- cespite --> tendremos la cuadrícula que valoriza en el activo fijo individual los *Centros de costo<!-- Centri di costo -->*: en ambas cuadrículas, básicamente, puedo indicar la lista de los centros a valorizar con su porcentaje correspondiente. Cuando realicemos nuestros reportes contables mediante el proceso de ***Cierre interanual<!-- Chiusura infrannuale -->***, entraremos en la *Reanudación de la depreciación de activos fijos<!-- Ripresa ammortamento cespiti -->*, seleccionaremos nuestro cierre y ***FluentisERP*** propondrá el cálculo de las depreciaciones sobre el número de días correspondientes al mismo, aplicando los porcentajes de categoría para asignarlos a los centros con esta prioridad: primero los centros ingresados en la cabecera del activo fijo<!-- cespite -->, luego a nivel de categoría de activos fijos<!-- categoria cespite --> y finalmente los del centro de costos en el plan de cuentas<!-- piano dei conti -->.

Si, en cambio, estamos en una empresa con el *Controlling* activo y queremos desvincularnos de las lógicas contables<!-- logiche contabili -->, no activaremos la casilla *Habilitación centro de contabilidad<!-- Abilitazione centro contabilità -->* y en este caso desaparecerán los centros en las categorías y en la cabecera del activo fijo<!-- testata cespite -->, y será obligatoria la pestaña de ***Configuración para el controlling<!-- Impostazioni per il controlling -->*** para poder guardar un activo fijo<!-- cespite -->.

Si ingresamos a un anagráfico de activos fijos<!-- anagrafica cespiti --> y vamos a la pestaña Amortización para controlling<!-- Ammortamento per controlling -->, tenemos a disposición los siguientes campos:

- la ***CATEGORÍAS DE ACTIVOS FIJOS PARA EL CONTROLLING<!-- CATEGORIE CESPITI PER IL CONTROLLING -->***, campo obligatorio, que valorizara con sus configuraciones por defecto los campos comunes siguientes

- el ***VALOR DE RECOMPRA<!-- VALORE DI RIACQUISTO -->*** a valorizar si la base de cálculo lo requiere

- la ***CANTIDAD TOTAL<!-- QUANTITA' TOTALE -->*** que el activo fijo<!-- cespite --> puede gestionar en su vida útil 

- la correspondiente ***UNIDAD DE MEDIDA<!-- UNITA' DI MISURA -->***

:::tip Nota<!-- Nota -->
El cálculo por cantidad, en esencia, tomará la base de cálculo de la depreciación<!-- ammortamento -->, la dividirá por la cantidad total para obtener una amortización unitaria y luego, leyendo las cantidades producidas en el periodo específico por el activo fijo<!-- cespite --> (valores que llegan habitualmente desde la ***Reanudación de datos desde producción<!-- Ripresa dati da produzione -->***), se obtendrá el valor de la depreciación del periodo.
:::

- la ***BASE DE CÁLCULO<!-- BASE DI CALCOLO -->***, tomada de la categoría de pertenencia (para más información ver el caso correspondiente), puede modificarse en el activo fijo<!-- cespite --> individual

- el ***TIPO DE CÁLCULO<!-- TIPO DI CALCOLO -->***, tomado de la categoría de pertenencia (para más información ver el caso correspondiente), puede modificarse en el activo fijo<!-- cespite --> individual

- el campo de la ***PORCENTAJE PARA EL CONTROLLING<!-- PERCENTUALE PER IL CONTROLLING -->*** a completar cuando el tipo de cálculo está relacionado con lógicas porcentuales, se propone desde la categoría de pertenencia pero se puede modificar

- la casilla ***USAR ACTUALIZACIÓN DE PORCENTAJE<!-- USA ATTUALIZZAZIONE PERCENTUALE -->***

- la casilla ***RECREAR LOS VALORES DE CONTROLLO<!-- RICREARE I VALORI DI CONTROLLO -->***

Las dos últimas casillas retoman las presentes en la categoría de pertenencia (para más información ver el caso correspondiente), pero como los campos anteriores, la configuración de categoría sirve solo para proponer el valor por defecto del activo fijo<!-- cespite --> individual, ya que después cada activo fijo<!-- cespite --> puede diferenciarse potencialmente de la configuración de la categoría.

En la cuadrícula inferior, finalmente, procederemos a definir cuáles son los ***CENTROS DE COSTO<!-- CENTRI DI COSTO -->*** a los cuales atribuir la depreciación<!-- ammortamento --> del activo fijo<!-- cespite -->, o potencialmente también el ***PROYECTO<!-- PROGETTO -->*** sobre el cual cargarlo como depreciación directa.

Los campos ***PERIODO<!-- PERIODO -->*** y ***AÑO<!-- ANNO -->*** se habilitarán, solo en el caso en que se haya establecido la amortización total en el año, y sirven precisamente para definir en qué año cargarlo completamente o en qué periodo específico del año.

:::tip Nota<!-- Nota -->
En el módulo de activos fijos<!-- cespiti --> disponemos del formulario de *Verificación de datos para el controlling<!-- Verifica dati per il controlling -->*: esta pantalla, muy similar a la búsqueda normal de activos fijos<!-- ricerca cespiti normale -->, permite buscar los activos fijos<!-- cespiti --> que no tienen conexiones válidas con los centros de costo<!-- centri di costo --> en la pestaña de amortización para el *Controlling*. Si abrimos el primero de la lista, por ejemplo, podemos ver que tiene un porcentaje 0 y por tanto no tendrá ninguna depreciación<!-- ammortamento --> resultante; el error podría ser también que no hay ningún centro de costo<!-- centro di costo --> ingresado, o que el multiplicador es 0.
:::