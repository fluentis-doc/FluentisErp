---
title: Área
sidebar_position: 2
---

:::tip Nota   
La tabla es de interés solo en las empresas con el indicador *Control* activo.  
:::

Los Datos del Control se gestionan siempre con un área de análisis conectada que identifica qué tipos de datos hay dentro: podemos imaginarla como una caja física, donde cada caja se alimenta con valores contables y valores cuantitativos y cada caja puede tener su propio modelo de cálculo diferente y autónomo. Un área incluye los datos de todas las *dimensiones* de los centros.

#### Campos específicos   
- **Código**  
- **Descripción**  
- [**Tipo de área**](/docs/configurations/tables/controlling/managerial-accounting/area-type)  
- **Orden de trabajo de cuadratura**, no gestionado  

#### TIPOS DE ÁREAS  
Tendremos típicamente 3 áreas:  
- *Presupuesto*: tendremos el presupuesto para el año siguiente;  

- *Final*: cuando procesamos los cierres interanuales;  

- *CONJUNTO DE REGLAS*: área que no tiene valores, excepto alguna medida física. Es el área depositaria de las reglas *estándar* de los impulsores de costos: si estoy procesando, por ejemplo, el área de los resultados y estoy tratando de repartir mi costo por los alquileres a través de un impulsor de costos, si encuentro un impulsor específico para los resultados, Fluentis utilizará ese impulsor; de lo contrario, buscará en las reglas generales válidas por defecto, vinculándolas al área *conjunto de reglas*.  

:::tip Nota  
Podemos definir libremente cuántas áreas de análisis deseamos. El objetivo típico es simular *qué pasaría si* cambio las reglas de los impulsores de costos empresariales, o quizás con la finalidad de aplicar configuraciones de costos diferenciadas.  

Otro uso es 'cristalizar' los procesamientos del control: como tendremos ocasión de explicar hablando de los impulsores de costos, los procesamientos del control eliminan y recrean los datos del año que se está procesando. Si se quiere historicizar, por ejemplo, el primer *trimestre* para compararlo luego con los primeros 3 meses de cuánto se calculó en el procesamiento del primer *semestre*, podemos lograr este resultado creando áreas de resultados diferentes.  
:::