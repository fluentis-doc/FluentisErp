---
title: Fichas de Activos (Anagrafiche Cespiti)
sidebar_position: 7
---

Primero debemos definir si es suficiente aplicar las lógicas contables, o si nuestro control de gestión debe desvincularse de estas para aplicar criterios más o menos diferentes.

En el primer caso, abriremos los ***Parámetros del módulo de activos (Parametri del modulo cespiti)*** para activar el indicador *abilitazione centro contabilità*. Con esta opción, dentro de las categorías de activos tendremos visibilidad de la cuadrícula de los valores predeterminados de los *centri di costo* a utilizar, así como en la cabecera del activo tendremos la cuadrícula que valora sobre cada activo los *centri di costo*: en ambas cuadrículas, esencialmente, puedo indicar la lista de centros a valorar con el porcentaje correspondiente. Cuando vayamos a crear nuestros informes contables a través del **chiusura infrannuale***, entraremos en la *ripresa ammortamento cespiti*, seleccionaremos nuestro cierre y ***FluentisERP*** propondrá el cálculo de las amortizaciones sobre el número de días de competencia de dicho cierre, aplicando los porcentajes de categoría para valorarlos en los centros con esta prioridad: primero los centros introducidos en la cabecera del activo, luego a nivel de categoría y finalmente los del cuenta de costo en el plan de cuentas.

Si, por el contrario, estamos en una empresa con el *Controlling* activo y deseamos desvincularnos de las lógicas contables, no configuraremos el indicador *abilitazione centro contabilità*, y en este punto desaparecerán los centros en las categorías y en la cabecera del activo, y se volverá obligatoria la ficha de ***Configuraciones para el controlling (Impostazioni per il controlling)*** para poder guardar un activo.

Si entramos en un registro de activos y vamos a la ficha de Amortización para controlling, tenemos disponibles los siguientes campos:

- la ***CATEGORÍAS DE ACTIVOS PARA EL CONTROLLING (CATEGORIE CESPITI PER IL CONTROLLING)***, campo obligatorio, que valorará con sus valores predeterminados los siguientes campos comunes 

- el eventual **valore di riacquisto*** a valorar si la base de cálculo lo prevé

- la ***CANTIDAD TOTAL (QUANTITA' TOTALE)*** que el activo puede gestionar en su vida útil 

- la correspondiente ***UNIDAD DE MEDIDA (UNITA' DI MISURA)***

:::tip Nota
El cálculo por cantidad, en esencia, tomará la base de cálculo de la amortización, la dividirá por la cantidad total de modo que se obtenga una amortización unitaria y luego, al leer las cantidades producidas en cada período del activo (valores que típicamente nos llegarán de la **ripresa dati da produzione***), se obtendrá el valor de la amortización del período.
:::

- la **base di calcolo***, recuperada de la categoría de pertenencia a la que se remite para las explicaciones del caso, puede ser modificada en el activo individual

- el ***TIPO DE CÁLCULO (TIPO DI CALCOLO)***, recuperado de la categoría de pertenencia a la que se remite para las explicaciones del caso, puede ser modificado en el activo individual

- el campo de ***PORCENTAJE PARA EL CONTROLLING (PERCENTUALE PER IL CONTROLLING)*** que se valorará cuando el tipo de cálculo esté relacionado con lógicas porcentuales, es propuesto por la categoría de pertenencia pero puede ser modificado

- el indicador **usa attualizzazione percentuale***

- el indicador **ricreare i valori di controllo***

Los últimos dos indicadores retoman los que están en la categoría de pertenencia (a la cual se remite para las explicaciones del caso), pero al igual que los campos anteriores, la configuración de la categoría solo sirve para proponer el valor predeterminado del activo individual, ya que luego cada activo puede diferenciarse potencialmente de la configuración de la categoría.

En la cuadrícula inferior, finalmente, definiremos cuáles son los **centri di costo*** a los cuales atribuir la amortización del activo, o potencialmente también el **progetto*** sobre el cual descargarlo como amortización directa.

Los campos **periodo*** y **anno*** se habilitarán, en cambio, solo en caso de que se haya configurado la amortización total en el año y sirve, efectivamente, para definir en qué año distribuirlo por completo o en qué período específico del año.

:::tip Nota
En el módulo de activos tenemos disponible la forma de *Verificación de datos para el controlling (Verifica dati per il controlling)*: esta máscara, muy similar a la búsqueda normal de activos, permite buscar los activos que no tienen conexiones válidas a los centros de costo en la ficha de amortizaciones para el *Controlling*. Si abrimos el primero de la lista, por ejemplo, podemos ver que tiene un porcentaje de 0 y por lo tanto no tendrá ninguna amortización resultante; el error podría ser que no hay ningún centro de costo ingresado, o que el multiplicador es 0.
:::