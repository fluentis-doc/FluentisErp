---
title: Categorías de agentes
sidebar_position: 2
ai_generated: true
---

La tabla<!-- tabella --> se abre a través de la ruta **Tablas > Ventas > Categorías de agentes<!-- Tabelle > Vendite > Categorie agenti -->**.

La tabla<!-- tabella --> es única para todas las empresas presentes en la base de datos y es la base para los cálculos enasarco/firr de los agentes<!-- agenti -->.

### Categorías de agentes<!-- Categorie agente -->

Es la cuadrícula principal del formulario y contiene las categorías de agentes<!-- agenti -->. Para cada fila de esta cuadrícula se definen los datos detallados en las dos cuadrículas siguientes para la especificación de Enasarco y FIRR.

:::tip[Enlace<!-- Collegamento -->]
Las entradas de la cuadrícula principal (que se enlazan con los detalles de cálculo) pueden ser asociadas en la [**ficha de agente<!-- anagrafica agente -->**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) o (como valor predeterminado) dentro de los detalles de la tabla [**Tipos de retención<!-- Tipi ritenuta -->**](/docs/configurations/tables/finance/withholding-tax-types). El tipo de retención<!-- tipo ritenuta --> a su vez puede ser asociado a la ficha del agente<!-- anagrafica agente --> (y en este caso, si tiene la categoría de agente<!-- categoria agente --> predeterminada, permite no tener que asociarla cada vez al agente)
:::

**Código/Descripción:** código y descripción que indica el tipo de agente<!-- tipologia di agente -->. El código debe ser único;

**Monomandatario:** Indicador que identifica la categoría de monomandatarios (mandato exclusivo con una sola empresa mandante);

**Plurimandatario:** Indicador que identifica la categoría de plurimandatarios (por ejemplo, agente<!-- agente --> que colabora con varias empresas mandantes);

**Genérico:** Indicador que identifica las categorías genéricas (por ejemplo, agencias constituidas en forma de sociedad);

### Enasarco

**Fecha de inicio de validez:** la fecha de inicio de validez del detalle, el cual continuará activo hasta que se registre un nuevo detalle con una fecha de inicio de validez posterior

**Min Enasarco:** ***valor en base trimestral***. Es el importe mínimo de la contribución enasarco (por ejemplo, 250,50 para un monomandatario);

**Max Enasarco:** ***valor en base anual***. Es el importe máximo imponible para el cálculo de la contribución enasarco (tope); una vez alcanzado, no es posible realizar más aportes previsionales para el agente<!-- agente --> (por ejemplo, 44.727,00 para un monomandatario);

**Porc Enasarco:** porcentaje del Enasarco a cargo del agente<!-- agente -->;

**Porc Enasarco Empresa:** porcentaje del Enasarco a cargo de la empresa;

**Imp Enasarco:** el porcentaje (100%) de aplicación de los porcentajes Enasarco sobre el total de comisiones;

### Firr

La cuadrícula se utiliza para el cálculo del FIRR (Fondo de indemnización por terminación de relación):

![](/img/it-it/configurations/tables/sales/agent-category/image03.png)

**Fila:** identifica el número de la fila. Debe ser único para todas las categorías de agentes<!-- categorie agenti -->;

**Porcentaje:** porcentaje del tributo;

**De comisiones/A comisiones:** límite inferior y límite superior de este tributo;

Esta cuadrícula se debe llenar siguiendo las indicaciones previstas para este procedimiento

Tasas para agentes monomandatarios

![](/img/it-it/configurations/tables/sales/agent-category/image04.png) 

Tasas para agentes plurimandatarios

 ![](/img/it-it/configurations/tables/sales/agent-category/image05.png)