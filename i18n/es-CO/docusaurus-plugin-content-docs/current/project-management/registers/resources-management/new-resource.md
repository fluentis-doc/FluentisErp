---
title: Nueva Recurso (Nuova Risorsa)
sidebar_position: 2
---

En este formulario se ingresarán toda la información relacionada con un nuevo **risorsa**.

**codice/descrizione**: indica el código del recurso con la correspondiente descripción;  

**tipo risorsa**: indica de qué tipo es el recurso, generalmente Humano o Material;  

**dipendente**: es posible asociar la cuenta del empleado;  

**Costo unitario/Horas mensuales disponibles (Costo unitario/Ore mensili disponibili)**: indica el costo por unidad de trabajo del empleado y la disponibilidad mensual correspondiente;  

**operatore**: es posible vincular un operador;  

**conto**: es posible vincular el recurso a un profesional externo;  

**articolo**: es posible vincular el recurso a un elemento material;  

**precodice cespite**: es posible vincular el recurso a un activo;  

**società**: es posible vincular la empresa;  

**data chiusura**: es posible especificar una posible fecha de cierre de relación;  

**note**: contiene cualquier nota ingresada libremente.  

Hay pestañas específicas disponibles:

**Pestaña Calendario (Tab Calendario)**

Aquí es posible vincular un [Calendario (Calendario)](/docs/project-management/registers/calendars-management/calendars/) específico al recurso.  

Al hacer clic en la barra de ribbon ![](/img/neutral/common/detail-propose.png) Proponer detalle, será posible gestionar los **giorni lavorativi**. En particular, en la ventana emergente se pueden excluir ciertos días de trabajo e indicar un día libre; los resultados se mostrarán en la cuadrícula **giorni lavorativi** y tendrán en cuenta los turnos de trabajo previamente ingresados para el recurso.  

En Fluentis es posible gestionar el costo de los recursos a utilizar en el cálculo de costos en la línea del proyecto y en la elaboración del **S.A.L. de proyecto (elaborazione SAL di progetto)**.  
El costo puede establecerse directamente en el registro de recursos, con un valor único válido para todas las circunstancias, o diferenciado por:  
- **Festivos**: utilizado para los días configurados en el calendario de días festivos.  
- **straordinari**: utilizado para los días de trabajo en los que se ha superado el total de horas diarias.  
- **notturno**: utilizado para los días de trabajo cuyo turno está marcado como "nocturno".  
- **straordinario notturno**: utilizado para los días de trabajo cuyo turno está marcado como "nocturno" y se ha superado el horario laboral o el total de horas diarias.  
- **turno alternativo**: utilizado si el recurso trabaja en 2 turnos diferentes y se quiere tarificar un turno de manera diferente al otro.  

A una de estas opciones es posible habilitar el indicador "costo por defecto día no laboral (costo default giorno non lavorativo)". Este indicador se utiliza para todos los casos en los que el día de la actividad no coincide con ningún día ni en el calendario de días festivos ni en el calendario de días laborales del recurso.  

Ejemplo:  
un sábado que no está incluido ni en los festivos ni en el calendario del recurso puede ser tarifado tanto como festivo como extraordinario. Aplicaremos en el cálculo de costo el costo marcado como “por defecto (default)”.