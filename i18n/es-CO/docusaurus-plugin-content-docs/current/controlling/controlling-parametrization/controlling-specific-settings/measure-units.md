---
title: Unidad de medida
sidebar_position: 13
ai_generated: true
---

Dentro de la tabla de las ***Unidades de medida<!-- Unità di misura -->***, primero tendremos que codificar todas aquellas unidades de medida<!-- unità di misura --> que sean necesarias para la gestión del *Controlling<!-- Controlling -->*: normalmente se codifican las horas hombre y las horas máquina para recuperar los datos desde la producción, así como las unidades que se requieren para los asientos manuales de la ***Primera nota de movimientos físicos<!-- Prima nota movimenti fisici -->*** (kww, m2, n.º de cabezas, n.º de puestos telefónicos, etc. etc.). Para cada una de estas UM<!-- UM -->, en particular, deberemos definir la propiedad ***Tipo de valoración del tiempo<!-- Tipo valutazione del tempo -->***, que contempla dos opciones:

- ***Estado<!-- Stato -->***: cuando las cantidades relevadas son sustancialmente fijas, es decir, se replican en cada periodo
- ***Flujo<!-- Flusso -->***: cuando son específicas de cada periodo

:::tip nota
La configuración es determinante para la gestión que ***FluentisERP*** requerirá al ingresar las cantidades en la pantalla de la ***Primera nota de movimientos físicos<!-- Prima nota movimenti fisici -->***: el ingreso de una UM<!-- UM --> de *Estado<!-- Stato -->* ***no requerirá*** la indicación obligatoria de un ***Periodo de distribución<!-- Periodo di distribuzione -->***, ya que la cantidad indicada se replicará para cada periodo del rango ingresado, mientras que, por el contrario, una UM<!-- UM --> de *Flujo<!-- Flusso -->* ***requerirá*** obligatoriamente un ***Periodo de distribución<!-- Periodo di distribuzione -->*** para repartir la cantidad entre cada periodo del rango ingresado
:::

Para la recuperación de los tiempos desde producción, además, es necesario tener en cuenta que las *declaraciones de producción<!-- dichiarazioni di produzione -->* siempre registran los tiempos en *minutos*, y por tanto es necesario configurar cómo ***FluentisERP*** debe gestionar la conversión a las Unidades de medida<!-- Unità di misura --> utilizadas para registrar los tiempos de los centros.
Primero, deberemos definir la conversión entre los minutos de la producción y la UM<!-- UM --> de los tiempos que utilizaremos en el *Controlling<!-- Controlling -->*: si, por ejemplo, tenemos una UM<!-- UM --> 'horas hombre', entonces dentro de la tabla ***Unidades de medida<!-- Unità di misura -->***, indicaremos en la pestaña ***Conversiones entre otras UM<!-- Conversioni tra altre UM -->***
- *UM<!-- UM --> alternativa*: 'Min' (es decir, la UM<!-- UM --> que tiene los flags ***UM tiempo<!-- UM tempo -->***  y ***Minutos<!-- Minuti -->*** establecidos)
- *Fact. Conv.*: 60
- *Multiplicar*: flag establecido

En segundo lugar, debemos vincular estas UM<!-- UM --> de Controlling<!-- Controlling --> a nuestros *Centros de la empresa productivos<!-- Centri aziendali produttivi -->*, lo cual se realiza en la tabla ***Unidades de medida de los centros empresariales para el controlling<!-- Unità di misura dei centri aziendali per il controlling -->***. En esta pantalla configuraremos:

- el [***Área<!-- Area -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia de la configuración
- el [***Centro empresarial<!-- Centro aziendale -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) productivo que tendrá una valorización de los tiempos desde producción
- la unidad de medida<!-- unità di misura --> a utilizar si para este Centro se quiere registrar el ***Tiempo de preparación<!-- Tempo attrezzaggio -->***
- la unidad de medida<!-- unità di misura --> a utilizar si para este Centro se quiere registrar el ***Tiempo hombre<!-- Tempo uomo -->***
- la unidad de medida<!-- unità di misura --> a utilizar si para este Centro se quiere registrar el ***Tiempo máquina<!-- Tempo macchina -->***
- el rango ***Desde fecha<!-- Da data -->*** y ***Hasta fecha<!-- A data -->*** de validez de la configuración
- los flags que indican si se deben considerar o no los diferentes tiempos en el cálculo de la productividad del centro