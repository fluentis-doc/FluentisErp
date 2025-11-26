---
title: Importación de Activos Fijos
sidebar_position: 2
ai_generated: true
---

El archivo Excel (plantilla) para la importación de activos fijos<!-- cespiti --> en el módulo de Administración permite poblar las fichas de activo fijo<!-- schede cespite --> basándose en las categorías de activos fijos<!-- categorie cespiti --> que ya deben estar presentes en la base de datos<!-- db -->.

**Código de Categoría<!-- Codice Categoria -->:** debe estar ya presente en la base de datos<!-- db --> y será utilizado en la ficha de activo fijo<!-- scheda cespite --> importada

**Precódigo<!-- Precodice -->:** opcional, solo se debe gestionar si está activa la gestión del precódigo<!-- precodice --> indicando el precódigo<!-- precodice --> a utilizar en la numeración

**Número de activo fijo<!-- Numero cespite -->:** utilizar un número libre

**Centro de costo<!-- Centro di costo -->:** opcional, sirve para asignar un centro de costo en la ficha de activo fijo<!-- scheda cespite --> para el posterior movimiento durante la amortización

**Fecha de compra<!-- Data Acquisto -->:** Obligatorio, es la fecha de cargo del costo histórico

**Número de documento / Fecha de factura de compra<!-- Numero Documento / Data Fatt Acquisto -->:** opcionales, útiles para indicar la referencia a la factura de compra

**Proveedor de compra<!-- Fornitore  Acquisto -->:** Opcional, sirve para poblar el campo del proveedor del bien en la ficha de activo fijo<!-- scheda cespite -->, rellenar con el alias del registro de proveedor<!-- anagrafica fornitore -->

**Valor patrimonial total<!-- Tot Valore Patrimoniale -->:** es el costo histórico del activo fijo<!-- cespite --> cargado con la fecha de la columna Fecha de compra<!-- Data Acquisto -->

**Fondo total de amortización<!-- Tot Fondo Ammortamento -->:** es el fondo total de amortización acumulado al momento del alta / importación de la ficha de activo fijo<!-- scheda cespite -->. Atención, este valor será cargado como está previsto para el alta de un activo fijo<!-- cespite --> precedente (completando al menos una línea de amortización) y por lo tanto se utiliza el dato presente en la columna siguiente **Año<!-- Anno -->**.

**Porc. de amortización a utilizar<!-- Perc. Ammortamento da Utilizzare -->:** Opcional, se utiliza en caso de que se desee cargar en la ficha de activo fijo<!-- scheda cespite --> un porcentaje de amortización particular para el activo fijo<!-- cespite --> en cuestión; si no se completa, no se escribirá nada en el campo correspondiente y las siguientes amortizaciones se realizarán según el porcentaje de la categoría de pertenencia.