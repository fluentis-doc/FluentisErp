---
title: importazione cespiti
sidebar_position: 2
---

El archivo de Excel (plantilla) para la importación de activos en el módulo de Administración permite poblar las fichas de activos en base a las categorías de activos que deben estar ya presentes en la base de datos.

**Código de Categoría (Codice Categoria):** debe estar ya presente en la base de datos y se usará en la ficha de activo importada.

**Precódigo (Precodice):** opcional, debe gestionarse solo si está activa la gestión del precódigo, indicando el precódigo que se utilizará en la numeración.

**Número de Activo (Numero cespite):** utilizar un número libre.

**Centro de Costo (Centro di costo):** opcional, sirve para asignar un centro de costo en la ficha de activo para la posterior contabilización en la fase de amortización.

**Fecha de Compra (Data Acquisto):** Obligatorio, es la fecha de carga del costo histórico.

**Número de Documento / Fecha de Factura de Compra (Numero Documento / Data Fatt Acquisto):** opcionales, útiles para indicar la referencia a la factura de compra.

**Proveedor de Compra (Fornitore Acquisto):** Opcional, sirve para poblar el campo del proveedor del bien en la ficha de activo, completar con el apodo del registro del proveedor.

**Total Valor Patrimonial (Tot Valore Patrimoniale):** es el costo histórico del activo cargado con la fecha de la columna Fecha de Compra.

**Total Fondo de Amortización (Tot Fondo Ammortamento):** es el total del fondo de amortización acumulado al momento de la carga / importación de la ficha de activo. Atención, este valor se cargará como se prevé para la carga de un activo anterior (completando al menos una línea de amortización) y, por lo tanto, se utiliza el dato presente en la siguiente columna **anno**.

**Porcentaje de Amortización a Utilizar (Perc. Ammortamento da Utilizzare):** Opcional, sirve en caso de que se desee cargar en la ficha de activo un porcentaje de amortización particular para el activo en cuestión; si no se valora, no se escribirá nada en el campo correspondiente y las amortizaciones posteriores se realizarán según el porcentaje de la categoría de pertenencia.