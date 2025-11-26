---
title: Análisis maestro de artículo
sidebar_position: 5
ai_generated: true
---

Dentro del artículo, en la pestaña **ADMINISTRACIÓN<!-- AMMINISTRAZIONE -->**, tenemos la posibilidad de asociar al artículo los [***CENTROS DE COSTO***<!-- CENTRI DI COSTO -->](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers).

En particular, las empresas que **no** tienen activo el *Controlling*<!-- Controlling --> dispondrán de un único campo de asociación de un solo centro, mientras que para aquellas con la gestión **activa** se habilitará una cuadrícula en la que es posible asignar una multiplicidad de centros, también de diferentes dimensiones, replicando sustancialmente la lógica ya detallada en el *Plan de cuentas*<!-- Piano dei conti --> (por lo tanto, también permitiendo dejar el centro vacío y solo asignar la dimensión activa).

:::tip Nota<!-- Nota -->
El centro de beneficio<!-- centro di profitto --> es visible por retrocompatibilidad; en las empresas con el *Controlling*<!-- Controlling --> activo, se recomienda sustituir los centros de beneficio<!-- centri di profitto --> por una dimensión específica a detallar en los centros empresariales.
:::

Para el procedimiento de ***Contabilización de inventarios***<!-- Contabilizzazione rimanenze --> presente dentro de las simulaciones de balance del módulo ***Cierres intermedios***<!-- Chiusure infrannuali -->, además, es de fundamental importancia la asignación a cada artículo (relevante para la valoración de inventario<!-- magazzino -->) de su respectiva ***Categoría fiscal***: de esta tabla, de hecho, ***FluentisERP*** recuperará los subcuentas<!-- sottoconti --> a utilizar para valorizar los inventarios inicial y final.