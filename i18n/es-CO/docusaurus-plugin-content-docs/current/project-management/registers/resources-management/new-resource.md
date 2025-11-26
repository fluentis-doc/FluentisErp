---
title: Nueva Recurso
sidebar_position: 2
ai_generated: true
---

En este formulario se ingresarán toda la información relativa a un nuevo **Recurso<!-- Risorsa -->**.

**Código/Descripción**: indica el código del recurso<!-- risorsa --> junto con la correspondiente descripción;

**Tipo de recurso<!-- Tipo risorsa -->**: indica de qué tipo es el recurso<!-- risorsa -->, generalmente Humano o Material;

**Empleado<!-- Dipendente -->**: es posible asociar la cuenta del empleado<!-- dipendente -->;

**Costo unitario/Horas mensuales disponibles<!-- Costo unitario/Ore mensili disponibili -->**: indica el costo por unidad de trabajo del empleado<!-- dipendente --> y la respectiva disponibilidad mensual;

**Operador<!-- Operatore -->**: es posible vincular un operador;

**Cuenta<!-- Conto -->**: es posible vincular el recurso<!-- risorsa --> a un profesional externo;

**Artículo<!-- Articolo -->**: es posible vincular el recurso<!-- risorsa --> a un elemento material;

**Pre-código de activo fijo<!-- Precodice cespite -->**: es posible vincular el recurso<!-- risorsa --> a un activo fijo<!-- cespite -->;

**Sociedad<!-- Società -->**: es posible vincular la sociedad;

**Fecha de cierre<!-- Data chiusura -->**: es posible especificar una eventual fecha de cierre de la relación;

**Notas<!-- Note -->**: contiene eventuales notas libremente ingresadas.

Hay pestañas específicas presentes:

**Pestaña Calendario<!-- Tab Calendario -->**

Aquí es posible asociar un [Calendario](/docs/project-management/registers/calendars-management/calendars/) específico al recurso<!-- risorsa -->.

Haciendo clic en la ribbon bar ![](/img/neutral/common/detail-propose.png) Proponer detalle, será posible gestionar los **Días laborables<!-- Giorni lavorativi -->**. En particular, en la ventana emergente es posible excluir determinadas jornadas laborales y señalar un día libre; los resultados serán reportados en la cuadrícula **Días laborables<!-- Giorni lavorativi -->** y tendrán en cuenta los turnos de trabajo previamente ingresados para el recurso<!-- risorsa -->.

En Fluentis es posible gestionar el costo de los recursos<!-- risorse --> a utilizar en el cálculo de costos en la línea del proyecto<!-- progetto --> y en la elaboración del Avance de Obra<!-- SAL --> del proyecto<!-- progetto -->.  
El costo puede ser configurado directamente en la ficha del recurso<!-- anagrafica risorsa -->, con un valor único válido para todas las circunstancias, o diferenciado por:
- **Festivos**: utilizado para los días configurados en el Calendario de días festivos.
- **Horas extra<!-- Straordinari -->**: utilizado para las jornadas laborables en las que se ha superado la cantidad de horas diaria.
- **Nocturno<!-- Notturno -->**: utilizado para las jornadas laborables en las que el turno está marcado como "nocturno".
- **Hora extra nocturna<!-- Straordinario notturno -->**: utilizado para las jornadas laborables cuyo turno está marcado como "nocturno" y se ha superado la franja horaria laboral o la cantidad de horas diaria.
- **Turno alternativo**: utilizado si el recurso<!-- risorsa --> trabaja en 2 turnos diferentes y se quiere tarifar un turno de manera distinta al otro.

A uno de estos elementos es posible habilitar la marca "costo por defecto día no laborable". Esta marca se utiliza para todos los casos en que el día de la actividad no corresponde con ningún día ni en el calendario de días festivos ni en el calendario de días laborables del recurso<!-- risorsa -->.

Ejemplo:  
un sábado que no cae ni en los festivos ni en el calendario del recurso<!-- risorsa -->, puede ser tarifado tanto como festivo como hora extra<!-- straordinario -->. Aplicaremos en el cálculo del costo el costo marcado como "por defecto".