---
title: Recuperación de datos de producción
sidebar_position: 1 
ai_generated: true
---

La recuperación de datos de producción<!-- ripresa dati da produzione --> lee los datos para asignar los movimientos físicos<!-- movimenti fisici --> (por lo tanto, la manipulación de materiales pero también los tiempos) a la orden de trabajo<!-- commessa --> y los costos de los procesos<!-- lavorazioni -->.

El formulario se divide en 3 procedimientos diferentes.

## RECUPERACIÓN DE HORAS / COSTOS DE PROYECTO<!-- RIPRESA ORE/COSTI DI PROGETTO -->

Con este procedimiento recuperamos los datos de las horas del personal de producción (en la ***Gestión de horas declaradas<!-- Gestione ore dichiarate -->***), pero también del área de Proyectos, en particular desde la ***Declaración de actividades<!-- Dichiarazione attività -->*** y desde las ***Intervenciones<!-- Interventi -->***, para ingresarlas en las ***Registraciones de movimientos físicos<!-- Registrazioni movimenti fisici -->*** y en las tablas de ***Movimientos de proyecto/orden de trabajo<!-- Movimenti di progetto/commessa -->***. Veamos las distintas opciones disponibles:
- Indicaremos en qué [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) registrar los movimientos<!-- movimenti -->.
- en qué ***Fecha***,
- en qué ***Año*** del control de gestión
- a la derecha configuraremos coherentemente el rango ***Desde fecha<!-- Da data -->*** y ***Hasta fecha<!-- A data -->***,
- y cuál es el ***Tipo de medición<!-- Tipo misurazione -->***, es decir, si es la primera o la segunda UM configurada en los centros.
En el lado izquierdo luego tendremos la opción de elegir el
- ***Tipo de proyecto<!-- Tipo progetto -->***, que permite definir cuál es el proyecto que nos interesa reportar en los datos físicos de proyecto:
    - ***Todos los proyectos en declaración de horas<!-- Tutti i progetti in dichiarazione ore -->***: se detectará cada proyecto que haya sido referenciado en las declaraciones de horas
    - ***Horas a los proyectos vinculados<!-- Ore ai progetti collegati -->***: siempre se atribuirá el proyecto padre de los específicos declarados
    - La opción ***Valora horas de intercompany<!-- Valorizza ore da intercompany -->*** permite trasladar a la sociedad activa las horas que los empleados pueden haber ingresado en otra sociedad de la base de datos, pero que deben considerarse en esta.
En el lado derecho también podemos agregar una valoración económica a nuestras consideraciones hasta ahora cuantitativas de los tiempos: 
- podemos configurar el ***Valora gastos de viaje de la actividad/intervención<!-- Valorizza oneri viaggio dell'attività/intervento -->*** para considerar los gastos de viaje vinculados a las actividades/intervenciones 
- el indicador ***‘***Gestión del horario de trabajo por proyecto<!-- Gestione dell’orario di lavoro per progetto -->***, hace que Fluentis solo considere las horas que han sido vinculadas a un proyecto, también para la valoración de la contabilización principal de movimientos físicos, donde normalmente, en cambio, terminan todas las horas indicadas independientemente de la vinculación a proyecto.
- podemos configurar el ***Valora extracontablemente los costos de los recursos<!-- Valorizza extracontabilmente i costi delle risorse -->*** aplicando el costo del mismo al número de horas del período, aplicando eventualmente un correctivo de ***Eficiencia<!-- Efficienza -->*** en el campo inferior.
- Cierra esta sección la opción ***Valora los costos/ingresos intercompany de los recursos<!-- Valorizza di costi/ricavi intercompany delle risorse -->***: significa valorar en la sociedad activa los costos o ingresos por prestaciones intercompany detectadas por los empleados en la declaración de horas.

## RECUPERACIÓN DE MOVIMIENTOS FÍSICOS<!-- RIPRESA MOVIMENTI FISICI -->

La ***Recuperación de movimientos físicos<!-- Ripresa movimenti fisici -->*** lee los reportes de producción y valora los tiempos de máquina, los tiempos hombre y los tiempos de preparación tanto de hombre como de máquina: los valorará tanto en la tabla de ***Registraciones de movimientos físicos<!-- Registrazioni movimenti fisici -->***, como en la tabla de ***movimientos físicos de proyecto/orden de trabajo<!-- movimenti fisici di progetto/commessa -->***. Estos datos se verifican en referencia al centro de coste asociado a la máquina y al grupo de mano de obra, si este centro es medido para los tiempos de máquina, hombre o preparación según esté configurado en la tabla de ***Unidades de medida de los centros en el control de gestión<!-- Unità di misura dei centri nel controlling -->***.
Los datos a configurar son:
- el [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia,
- la ***Fecha*** de la detección,
- el ***Año***,
- el rango de fechas de filtro ***Desde fecha<!-- Da data -->*** y ***Hasta fecha<!-- A data -->*** a la derecha.
Se prevén 3 opciones sobre los tiempos utilizados:
- por defecto se valorarán los ***Tiempos reales<!-- Tempi consuntivi -->*** en el reporte de producción mismo,
- en el segundo caso se leerán los ***Tiempos de ciclo<!-- Tempi ciclo -->*** vinculados al reporte para valorar el dato teórico de ciclo (es decir, proporcional la cantidad producida en el reporte respecto a la del ciclo)
- mientras que en el último caso, ***Tiempos fase estándar<!-- Tempi fase standard -->***, se leerá la fase estándar del reporte para utilizar su valor, siempre proporcional respecto a la cantidad reportada.
Si hay máquinas o equipos ligados a un activo fijo<!-- cespite -->, este mismo procedimiento también valorará las ***Registraciones de movimientos físicos<!-- Registrazioni movimenti fisici -->*** (y la de proyecto) de las cantidades que el activo fijo<!-- cespite --> ha producido en el período, al fin de poder calcular las depreciaciones por cantidad.

## RECUPERACIÓN DE COSTOS DE ORDEN DE TRABAJO<!-- RIPRESA COSTI DI COMMESSA -->

El procedimiento de ***Recuperación de costos de orden de trabajo<!-- Ripresa costi di commessa -->***, finalmente, está dedicado a la detección de los costos de las transformaciones internas y externas.
Aquí también configuraremos:
- el [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- la ***Fecha*** de la detección,
- el ***Año***,
- la ***Causal<!-- Causale -->*** a utilizar en la registración de área,
- el rango de fechas ***Desde fecha<!-- Da data -->*** y ***Hasta fecha<!-- A data -->*** a utilizar,
- por último, la ***Cuenta de trabajos externos<!-- Conto lavorazioni esterne -->*** a utilizar para valorar los procesos externos que leeremos de la cuenta de trabajos<!-- conto lavoro -->.
Para los datos obtenidos de la cuenta de trabajos<!-- conto lavoro -->, usaremos la cuenta configurada en el formulario al precio registrado en la factura de compra relacionada con el reingreso, o al del propio reingreso si aún no ha sido facturado por el proveedor externo, valorando el centro de coste asociado a la cuenta de coste correspondiente.
Para los procesos internos, sin embargo, podremos valorar al ***Costo estándar<!-- Costo standard -->***, ***Costo último<!-- Costo ultimo -->*** o ***Costo medio<!-- Costo medio -->*** las cantidades que llegan en los reportes de producción del período, así como los materiales utilizados en las intervenciones externas.

El resultado del procesamiento se inserta en ***Valores desde producción<!-- Valori da produzione -->***, formulario de la sección de gestión de proyectos: de hecho, este procedimiento filtra los datos que están vinculados a los proyectos y gestiona **solo estos** con el fin de la contabilidad de proyecto.

La última nota es la correspondiente a la segunda pestaña ***Proyectos<!-- Progetti -->***, que está vinculada precisamente a este último procedimiento: en esta sección podemos seleccionar en cuáles órdenes de trabajo<!-- commesse --> nos interesa detectar los costos de orden de trabajo<!-- costi di commessa -->, si no filtramos nada, se valorarán todos los movimientos de orden de trabajo<!-- movimenti di commessa --> que encontremos en el período.