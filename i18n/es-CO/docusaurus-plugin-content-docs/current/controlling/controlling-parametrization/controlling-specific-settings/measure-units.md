---
title: unità di misura
sidebar_position: 13
---

Dentro de la tabla de **unità di misura***, primero debemos codificar todas aquellas unidades de medida que sean necesarias para la gestión del *Controlling*: típicamente, codificaremos las horas hombre y las horas máquina para retomar los datos de producción, así como las unidades que se utilizan para los registros manuales de la ***Primera nota de movimientos físicos (Prima nota movimenti fisici)*** (kww, mq, nr cabezas, nr posiciones telefónicas, etc.). Para cada una de estas UM, debemos definir especialmente la propiedad ***Tipo de evaluación del tiempo (Tipo valutazione del tempo)***, que prevé dos opciones:

- **stato***: cuando las cantidades registradas son fundamentalmente fijas, es decir, se replican en cada período. 
- **flusso***: cuando son específicas del período individual.

:::tip nota
La configuración es determinante para la gestión que ***FluentisERP*** requerirá en la inserción de cantidades en la máscara de la ***Primera nota de movimientos físicos (Prima nota movimenti fisici)***: la inserción de una UM de *stato* ***no requerirá*** la indicación obligatoria de un ***Período de distribución (Periodo di distribuzione)***, ya que la cantidad indicada se replicará para cada período del rango ingresado; mientras que, por el contrario, una UM de *flusso* ***requerirá*** obligatoriamente un ***Período de distribución (Periodo di distribuzione)*** para distribuir la cantidad en cada período del rango ingresado.
:::

Para la recuperación de tiempos de producción, además, es necesario tener en cuenta que las *declaraciones de producción* siempre registran los tiempos en *minutos*, y por lo tanto necesitamos configurar cómo ***FluentisERP*** debe gestionar la conversión a las unità di misura utilizadas para registrar los tiempos de los centros.  
Primero, debemos definir la conversión entre los minutos de producción y la UM de los tiempos que utilizaremos en *Controlling*: por ejemplo, si tenemos una UM 'horas hombre', entonces en la tabla de **unità di misura*** indicaremos en la pestaña ***Conversiones entre otras UM (Conversioni tra altre UM)***:  
- *um alternativa*: 'Min' (es decir, la UM que tiene los indicadores **um tempo*** y **minuti*** configurados)  
- *fatt. conv.*: 60  
- *da moltiplicare*: indicador configurado  

En segundo lugar, debemos vincular estas UM de Controlling a nuestros *Centros empresariales productivos*, lo que se realiza en la tabla **unità di misura dei centri aziendali per il controlling***. En esta máscara configuraremos:

- el [**area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia de la configuración  
- el [**centro aziendale***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) productivo que tendrá una valoración de los tiempos de producción  
- la unidad de medida a utilizar si para este Centro se quiere registrar el **tempo attrezzaggio***  
- la unidad de medida a utilizar si para este Centro se quiere registrar el **tempo uomo***  
- la unidad de medida a utilizar si para este Centro se quiere registrar el **tempo macchina***  
- el rango **da data*** y **a data*** de validez de la configuración  
- los indicadores que indican si considerar o no los diversos tiempos en el cálculo de la productividad del centro