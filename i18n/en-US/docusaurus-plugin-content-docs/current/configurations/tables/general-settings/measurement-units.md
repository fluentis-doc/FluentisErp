---
title: Units of Measure
sidebar_position: 9
---


Form path: **Tables > General Settings > Units of Measure (Tabelle > Impostazioni generali > Unità di misura)**

The table allows for the definition of the various units of measure present in the system and their related detailed attributes.

### Units of Measure

where to code the new unit of measure and assign the main characteristics

#### Specific Fields

**U.M. / Description (U.M. / Descrizione):** Code and description of the unit of measure to be recalled

**Represents Kg (Rappresent. Kg):** identifies which code represents KG for weight (it will normally be active on the unit of measure called Kg / Kilogrammi)

**Decimal U.M. (UM decimali):** allows for entering the number of decimals after the comma to represent the corresponding unit of measure. For example, entering 2 next to the unit of measure Kilowatt will yield values within documents of the type X,00. Entering the value 3 will yield X,000.

**Supplementary U.M. Intrastat (UM suppl. intrastat):** Supplementary unit (column 8 for sales; column 9 for purchases): the supplementary unit is a unit of measure different from the kg specified in the net mass and must be indicated compulsorily for certain goods where provided by the customs tariff. If set corresponding to the KG unit of measure, it will be proposed and used in Intrastat creation procedures.

**Weight U.M. (UM pesi):** marks the unit of measure as weight (to be applied to the relevant units of measure)

**Volume U.M. (UM volume):** marks the unit of measure as volume (to be applied to the relevant units of measure)

**Dimension U.M. (UM dimensioni):** marks the unit of measure as dimension (to be applied to the relevant units of measure)

**Reference (Riferimento):** marks the default unit of measure proposed automatically

**Time U.M. (UM Tempo):** marks the unit of measure as time (to be applied to the relevant units of measure)

**Minutes (Minuti):** marks the unit of measure as time in minutes (to be applied to the relevant units of measure)

:::important IMPORTANT
**Type of time evaluation (Tipo di valutazione del tempo):** field used in the controlling module to define whether the unit of measure is of the Flow or State type. 
For example, machine hours are flow, while square meters of a building are typically state because they are valid every month.
:::

### Conversions Between Units of Measure

where to manage the conversion factors between different units of measure in order to handle the dual unit of measure in documents

**Alternative U.M. (UM alternativa):** enter the unit of measure to which the selected main unit of measure should be converted

**Conv. Factor (Fatt. Conv.):** enter the conversion factor, e.g., 0.5 (the value by which the main unit will be divided or multiplied)

**To multiply (Da moltiplicare):** if not active divides by ..., if active multiplies by the conv. factor.

### Rate Evaluation Type (Tipo valutazione tariffa)

Management not active