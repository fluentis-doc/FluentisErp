---
title: categorie agenti
sidebar_position: 2
---

La tabla se abre a través de la ruta **Tablas > Ventas > categorie agenti (Tabelle > Vendite > Categorie agenti)**.

Permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario se compone de un área de filtro y otra de resultados. Una vez establecidos todos los filtros deseados, basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

Para poder ingresar nuevos registros, es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **nuovo**.

La tabla **categorie agenti**, única para las empresas presentes en la base de datos, es la tabla base para los cálculos enasarco/firr de los agentes.

### Categorías de agente (Categorie agente)

La cuadrícula contiene las categorías para la especificación del Enasarco, tales como:

**codice/descrizione**: código y descripción que indican el código de referencia del agente. El código debe ser único;  

**Mínimo Enasarco (Min Enasarco)**: valor en base trimestral. Es el monto mínimo del aporte enasarco (ejemplo 250,50 para monomandatario);  

**Máximo Enasarco (Max Enasarco)**: valor en base anual. Es el monto máximo del imponible de comisiones a efectos del aporte enasarco (máximo) y una vez alcanzado, no es posible hacer aportes previsionales a favor del agente (ejemplo 44.727,00 para monomandatario);  

**tipo ritenuta**: es el tipo de retención que se aplicará al agente. Para más detalles, consulte la sección de la parte administrativa [Tipos de Retención (Tipi Ritenuta)](/docs/configurations/tables/finance/withholding-tax-types). Se recomienda establecer este código en el registro del agente.

**Porcentaje Enasarco (Perc Enasarco)**: porcentaje del Enasarco a cargo del agente;  

**Porcentaje Enasarco Empresa (Perc Enasarco Ditta)**: porcentaje del Enasarco a cargo de la empresa;  

**Importe Enasarco (Imp Enasarco)**: el porcentaje (100%) de aplicación de los porcentajes Enasarco sobre el total de comisiones;  

**monomandatario**: indicador que identifica las categorías monomandatarias;  

**plurimandatario**: indicador que identifica las categorías plurimandatarias;  

**generico**: indicador que identifica las categorías genéricas;  

### Firr

La cuadrícula se utiliza para el cálculo del FIRR (Fondo de indemnización por resolución del contrato):

![](/img/it-it/configurations/tables/sales/agent-category/image03.png)

**riga**: identifica el número de fila. Debe ser único en todas las categorías de agentes;  

**percentuale**: porcentaje del tributo;  

**De comisiones/A comisiones (DA provvigioni/A provvigioni)**: límite inferior y límite superior de este tributo;  

Esta cuadrícula deberá ser completada siguiendo las indicaciones establecidas para este tratamiento.

Alícuotas para agentes monomandatarios:

![](/img/it-it/configurations/tables/sales/agent-category/image04.png)

Alícuotas para agentes plurimandatarios:

![](/img/it-it/configurations/tables/sales/agent-category/image05.png)

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).