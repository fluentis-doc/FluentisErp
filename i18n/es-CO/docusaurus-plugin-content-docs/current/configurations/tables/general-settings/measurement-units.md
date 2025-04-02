---
title: unità di misura
sidebar_position: 9
---

Ruta del formulario: **Tablas > Configuraciones generales > unità di misura (Tabelle > Impostazioni generali > Unità di misura)**

La tabla permite la definición de las varias unidades de medida presentes en el sistema y de sus respectivos atributos de detalle.

### unità di misura (Unità di misura)

donde codificar la nueva unidad de medida y atribuir las características principales

#### Campos específicos (Campi specifici)

**U.M. / Descripción (U.M. / Descrizione):** Código y descripción de la unidad de medida para poderla recuperar.  

**Represent. Kg (Rappresent. Kg):** identifica cuál es el código que representa el KG para el peso (normalmente estará activo en la U.M. denominada Kg / Kilogramos).  

**U.M. decimales (UM decimali):** permite ingresar el número de decimales después de la coma para representar la unidad de medida correspondiente. Por ejemplo, al ingresar 2 junto a la U.M. Kilovatio se obtendrán valores dentro de los documentos del tipo X,00. Al ingresar el valor 3 se obtendrá X,000.  

**U.M. supl. intrastat (UM suppl. intrastat):** Unidad suplementaria (columna 8 cesiones; columna 9 compras): la unidad suplementaria es una unidad de medida diferente a los kg previstos en la masa neta y debe indicarse obligatoriamente para algunas mercancías donde lo prevea la tarifa aduanera. Si se configura en correspondencia con la U.M. KG, será propuesta y utilizada en los procedimientos de creación Intrastat.  

**U.M. pesos (UM pesi):** marca la unidad de medida como peso (que debe aplicarse a las U.M. relacionadas).  

**U.M. volumen (UM volume):** marca la unidad de medida como volumen (que debe aplicarse a las U.M. relacionadas).  

**U.M. dimensiones (UM dimensioni):** marca la unidad de medida como dimensión (que debe aplicarse a las U.M. relacionadas).  

**Referencia (Riferimento):** marca la unidad de medida por defecto propuesta automáticamente.  

**U.M. Tiempo (UM Tempo):** marca la unidad de medida como tiempo (que debe aplicarse a las U.M. relacionadas).  

**Minutos (Minuti):** marca la unidad de medida como tiempo en minutos (que debe aplicarse a las U.M. relacionadas).  

:::important IMPORTANTE
**Tipo de evaluación del tiempo (Tipo di valutazione del tempo):** campo utilizado en el módulo de control para definir si la U.M. es de tipo Flujo o Estado.  
Por ejemplo, horas de máquina es flujo, mientras que los metros cuadrados de un edificio son típicamente de estado porque son válidos cada mes.
:::

### Conversiones entre unidades de medida (Conversioni tra unità di misura)

donde gestionar los factores de conversiones entre diferentes unidades de medida a fin de manejar en los documentos la doble unidad de medida.

**U.M. alternativa (UM alternativa):** ingresar la U.M. en la que deberá ser convertida la unidad de medida principal seleccionada.  

**Fatt. Conv. (Fatt. Conv.):** ingresar el factor de conversión, por ejemplo, 0,5 (valor por el cual se dividirá o multiplicará la unidad principal).  

**Da moltiplicare (Da moltiplicare):** si no está activo, divide por ..., si está activo multiplica por el fatt. conv.  

### Tipo de evaluación tarifa (Tipo valutazione tariffa)

Gestión no activa.