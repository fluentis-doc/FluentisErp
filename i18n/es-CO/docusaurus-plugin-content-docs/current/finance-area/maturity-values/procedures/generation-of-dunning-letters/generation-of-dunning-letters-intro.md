---
title: Generación de avisos de cobro
sidebar_position: 1
ai_generated: true
---

Desde esta pantalla se procederá con la generación de avisos de cobro<!-- solleciti --> con la característica de poder establecer un nivel de aviso<!-- sollecito --> que irá más allá del orden lógico de prioridad que caracteriza, en cambio, la generación automática de avisos<!-- solleciti -->.  
Además, es posible seleccionar manualmente los efectos<!-- partite --> a notificar después de filtrarlos, teniendo así un mayor control sobre la operación.

:::tip[Info]
Este procedimiento, a diferencia de la [*Generación automática de avisos*](/docs/finance-area/maturity-values/procedures/dunning-letters-automatic-issue), permite también gestionar avisos<!-- solleciti --> con **Días de Atraso negativos**<!-- Numero Giorni di Ritardo negativi -->. Típicamente, los días negativos se configuran para crear una advertencia previa al vencimiento.
:::

Para proceder es necesario, en la parte inferior de la pantalla, asignar la fecha de creación de los avisos<!-- solleciti --> y seleccionar el tipo de aviso<!-- sollecito --> (previamente codificado en la tabla *Tipos de avisos<!-- Tipi solleciti -->*) desde el combo box.  
En cambio, es opcional la asignación de un nivel específico de aviso<!-- livello di sollecito --> (a través del combo box ***N. avisos<!-- N. solleciti -->***), con el fin de forzar la creación más allá del orden lógico de prioridad. Normalmente, de hecho, los efectos<!-- partite --> nunca notificados tendrán el aviso de prioridad 1, los ya notificados pasarán a un nuevo aviso de prioridad 2 y así sucesivamente para los siguientes.

La fecha del aviso<!-- sollecito --> influye en la creación ya que debe respetar los parámetros presentes en la tipología del aviso<!-- tipologia del sollecito --> y en el número de aviso<!-- numero del sollecito --> como los días de atraso y los *días* que determinan el vencimiento de un eventual aviso<!-- sollecito --> anterior.  
Si la fecha del aviso<!-- data sollecito --> no es válida con respecto a los parámetros para el efecto<!-- partita --> seleccionado, el comando de creación no ejecutará ningún aviso<!-- sollecito -->.

CAMPOS DE FILTRO:

**Cuenta / subcuenta<!-- Conto / sottoconto -->:** referido al titular de los efectos<!-- partite -->

**Agente:** para filtrar el agente que está dentro de la ficha maestra del cliente<!-- anagrafica cliente -->

**Agente de efectos notificados:** filtra los efectos<!-- partite --> con el agente ingresado en el efecto<!-- partita -->, ya que se valora al contabilizar las facturas de venta con el agente principal presente en el documento, es decir, aquel con el importe más alto en caso de tener varios agentes asignados.

CAMPOS RELATIVOS A LOS EFECTOS A CONSULTAR:  
Nº de documento, Posición del efecto<!-- Posizione partita -->, Desde / Hasta Fecha del documento, Desde / Hasta fecha de vencimiento, año del efecto<!-- anno partita -->, número ... Tipo de documento, Categoría administrativa (en ficha cliente<!-- anagrafica cliente -->), Tipo de pago

CAMPOS RELATIVOS A LAS REFERENCIAS DE AVISOS ANTERIORES EN EFECTOS YA NOTIFICADOS  
Tipo de aviso<!-- Tipo Sollecito -->, DESDE / HASTA fecha de aviso<!-- data sollecito -->, DESDE / HASTA Fecha de vencimiento (aviso<!-- sollecito -->), Número de aviso<!-- Numero sollecito -->, Referencia...

TIPO DE EFECTOS: Flag para extraer no solo los clásicos efectos activos de clientes, sino también aquellos referidos, por ejemplo, a proveedores, etc...