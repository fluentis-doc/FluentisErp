---
title: Asientos de integración
sidebar_position: 5
ai_generated: true
---

Nos encontramos dentro del módulo de Cierres Intraintermedios<!-- Chiusure Infrannuali --> y seleccionamos el procedimiento 'Asientos de integración<!-- Scritture di integrazione -->'.  
La pantalla permite gestionar por separado las operaciones de integración que se pueden ejecutar al mismo tiempo que la creación de un nuevo cierre intraintermedio<!-- chiusura infrannuale -->.

Para gestionar el procedimiento basta con establecer el cierre de referencia, la fecha de inicio de la competencia de referencia, el tipo de calendario a utilizar (se recomienda dejar el calendario solar) y la causale<!-- causale --> a utilizar (que debe tener la bandera cdc/cdp para gestionar la integración de centros de coste<!-- centri di costo -->/beneficio<!-- profitto -->).

Con este procedimiento el sistema verificará, a partir de la 'Fecha de inicio de competencia para los asientos de integración<!-- Data di inizio competenza per le scritture di integrazione -->', las líneas de coste/ingreso<!-- costo/ricavo --> presentes en la contabilidad<!-- contabilità --> y no insertadas en el cierre<!-- chiusura --> (es decir, registros fuera del rango de fechas de registro/competencia establecidas en el momento de la recuperación desde la contabilidad), para crear las provisiones<!-- ratei --> de los días dentro del rango de fechas de competencia económica.  
Los subcuentas<!-- sottoconti --> de provisión<!-- rateo --> a utilizar serán los insertados en el plan de cuentas en correspondencia con cada subcuenta<!-- sottoconto --> de coste/ingreso<!-- costo/ricavo --> o la subcuenta<!-- sottoconto --> genérica insertada en los parámetros de contabilidad<!-- contabilità --> del año del mismo cierre intraintermedio<!-- chiusura infrannuale -->.  
Hay un botón de restaurar/eliminar los movimientos<!-- movimenti --> ya registrados por este procedimiento.

Merece atención especial la fecha de inicio a configurar, ya que normalmente esta fecha debe establecerse igual a la fecha de la última apertura de cuentas registrada en la contabilidad<!-- contabilità -->.  
Por ejemplo: si estamos creando el cierre<!-- chiusura --> del primer trimestre del ejercicio, el rango de fechas para la sección económica será típicamente 01/01/año – 31/03/año y si está presente la reapertura de cuentas del ejercicio anterior entonces dentro de este rango estará directamente el contrasiento<!-- giroconto --> a coste/ingreso<!-- costo/ricavo --> de las provisiones<!-- ratei --> registradas en el balance del 'año-1' y por tanto la fecha de inicio para las integraciones deberá configurarse como 01/01/año para que el sistema de gestión verifique si después del 31/03 existen líneas con competencia en el trimestre anterior.  
Si la reapertura no está presente, será necesario establecer la fecha de inicio como 01/01/año-1 para que **FluentisERP** verifique si también en todo el ejercicio anterior hay costes<!-- costi -->/ingresos<!-- ricavi --> que caen en el trimestre inicial de este ejercicio.

:::tip Nota<!-- Nota -->
Atención a la gestión manual en contabilidad<!-- contabilità --> de las provisiones<!-- ratei/risconti --> en los asientos<!-- registrazioni --> de cierre<!-- chiusura --> y reapertura<!-- riapertura --> de cuentas, ya que la asignación de las fechas de competencia de la línea es fundamental para la corrección de la recuperación en el controlling de los Asientos de integración<!-- Scritture di integrazione --> o en la elaboración de periodos en el controlling.  
La gestión automatizada que se realiza a través de los **Asientos de Ajuste<!-- Scritture di Assestamento -->** permite evitar errores en este delicado tema, errores que podrían causar dobles o incorrectos registros en el área de Controlling.
:::