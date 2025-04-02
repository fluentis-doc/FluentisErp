---
title: anagrafica articolo
sidebar_position: 5
--- 

Dentro del artículo, en la pestaña **amministrazione**, tenemos la posibilidad de asociar al artículo los [**centri di costo***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers).

En particular, las empresas que **no** tienen el *Controlling* activo tendrán disponible un único campo para la asociación de un solo centro, mientras que para aquellas con la gestión **activa**, se habilitará una cuadrícula donde se podrá valorar una multiplicidad de centros, incluso de diferentes dimensiones, replicando sustancialmente la lógica ya detallada en el *piano dei conti* (por lo tanto, también dejando el centro vacío y la única dimensión activa por valorar).

:::tip Nota
El centro de beneficios es visible por retrocompatibilidad; en las empresas con *Controlling* activo se recomienda sustituir los centros de beneficios por una dimensión específica que se debe valorar en los centros empresariales.
:::

Para el procedimiento de **contabilizzazione rimanenze*** presente dentro de las simulaciones de balance del módulo **chiusure infrannuali***, además, es fundamental la asignación a cada artículo (relevante para la valoración de inventario) de su respectiva **categoria fiscale***: de esta tabla, de hecho, ***FluentisERP*** irá a recuperar las subcuentas que se utilizarán para valorar los inventarios iniciales y finales.