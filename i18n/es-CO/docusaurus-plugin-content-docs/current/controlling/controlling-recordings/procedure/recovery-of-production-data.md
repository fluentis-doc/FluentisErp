---
title: ripresa dati da produzione
sidebar_position: 1 
---

La recuperación de datos de producción lee los datos para atribuir los movimientos físicos (por lo tanto, la manipulación de materiales pero también los tiempos) a la orden y los costos de los trabajos.

La máscara se divide en 3 procedimientos diferentes.

## RECUPERACIÓN DE HORAS/COSTOS DE PROYECTO (RIPRESA ORE/COSTI DI PROGETTO)
Con este procedimiento recuperamos los datos de las horas del personal de producción (en la **gestione ore dichiarate***), pero también del área de Proyectos, en particular de la ***Declaración de actividades (Dichiarazione attività)*** y las **interventi***, para insertarlos en las **registrazioni movimenti fisici*** y en las tablas de ***Movimientos de proyecto/orden (Movimenti di progetto/commessa)***. Veamos las diversas opciones disponibles:
- Indicaremos en qué [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) registrar los movimientos.
- En qué **data***.
- En qué **anno*** del control.
- A la derecha configuraremos coherentemente el rango **da data*** y **a data***.
- Y cuál es el **tipo misurazione***, es decir, si es la primera o la segunda UM configurada en los centros.

En el lado izquierdo, luego tendremos la elección del 
- **tipo progetto***, que permite definir cuál es el proyecto que nos interesa reflejar en los datos físicos del proyecto:
    - **tutti i progetti in dichiarazione ore***, recuperaremos cada proyecto individual que ha sido referenciado en las declaraciones de horas.
    - **ore ai progetti collegati***, asignaremos siempre el proyecto padre a los específicos declarados.
    - La opción **valorizza ore da intercompany***, en cambio, permite llevar a la empresa activa las horas que los empleados pueden haber registrado en una diferente empresa de la base de datos, pero que deben considerarse en esta.

En el lado derecho, también podemos agregar una valorización económica a nuestras consideraciones hasta ahora cuantitativas de los tiempos: 
- Podemos configurar el **valorizza oneri viaggio dell'attività/intervento*** para considerar los costos de viaje relacionados con las actividades/intervenciones. 
- El indicador ***‘Gestión del horario de trabajo por proyecto (Gestione dell’orario di lavoro per progetto)***, en cambio, hace que Fluentis considere solo las horas que se han vinculado a un proyecto, incluso para la valorización de la primera nota de movimientos físicos, donde normalmente terminan todas las horas indicadas independientemente de su vinculación al proyecto.
- Podemos establecer el **valorizza extracontabilmente i costi delle risorse*** aplicando el costo del mismo al número de horas del período, aplicando eventualmente un correctivo de **efficienza*** en el campo más bajo.
- Cierra esta sección la opción ***Valorización de costos/ingresos intercompany de los recursos (Valorizza di costi/ricavi intercompany delle risorse)***: significa valorar en la empresa activa los costos o ingresos por prestaciones intercompany registradas por los empleados en la declaración de horas.

## RECUPERACIÓN DE MOVIMIENTOS FÍSICOS (RIPRESA MOVIMENTI FISICI)
La **ripresa movimenti fisici*** va a leer las señales de producción y valora los tiempos máquina, así como los tiempos de trabajo, y los tiempos de ensamblaje de hombre y máquina: los valorará tanto en la tabla de **registrazioni movimenti fisici***, como en la tabla de ***movimientos físicos de proyecto/orden (movimenti fisici di progetto/commessa)***. Estos datos se verifican en relación con el centro de costo asociado a la máquina y al grupo de mano de obra, si este centro se mide por los tiempos de máquina, hombre o ensamblaje, según se haya configurado en la tabla de ***Unidades de medida de los centros en el control (Unità di misura dei centri nel controlling)***.
Los datos a establecer son: 
- el [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia.
- la **data*** de la medición. 
- el **anno***. 
- el rango de fechas de filtro **da data*** y **a data*** a la derecha.

Se prevén 3 opciones sobre los tiempos utilizados: 
- Por defecto, valoraremos los **tempi consuntivi*** en la señal de producción misma.
- En el segundo caso, leeremos los **tempi ciclo*** vinculados a la señal para valorar el dato teórico del ciclo (es decir, proporcional a la cantidad producida en la señal en relación con la del ciclo).
- Mientras que en el último caso, **tempi fase standard***, leeremos la fase estándar de la señal para utilizar su valor, siempre proporcional a la cantidad reportada.
Si hay máquinas o equipos vinculados a un registro de activo fijo, este mismo procedimiento también valorará los **registrazioni movimenti fisici*** (y el de proyecto) de las cantidades que el activo fijo ha producido en el período, con el fin de poder calcular las amortizaciones sobre cantidades.

## RECUPERACIÓN DE COSTOS DE ORDEN (RIPRESA COSTI DI COMMESSA)
El procedimiento de **ripresa costi di commessa***, finalmente, está dedicado a la captura de costos de transformaciones internas y externas.
Configuraremos también aquí: 
- el [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas).
- la **data*** de la medición.
- el **anno***.
- la **causale*** a utilizar en el registro de área.
- el rango de fechas **da data*** y **a data*** a utilizar.
- Finalmente, el **conto lavorazioni esterne*** a utilizar para valorar los trabajos externos que leeremos del cuenta trabajo.

Para aquellos datos recuperados del cuenta trabajo, utilizaremos la cuenta establecida en la máscara al precio registrado en la factura de compra vinculada al regreso, o al de la vuelta misma si aún no ha sido facturada por el subcontratista, valorando el centro de costo asociado con la cuenta de costo misma.
Para los trabajos internos, en cambio, podremos valorar al **costo standard***, **costo ultimo*** o **costo medio*** las cantidades que llegan en las señales de producción del período, así como los materiales utilizados en intervenciones en terceros.

El resultado de la elaboración se inserta en los **valori da produzione***, máscara de la sección de gestión de proyectos: este procedimiento, de hecho, filtra los datos que están conectados a los proyectos y gestiona **solo estos** con el fin de la contabilización del proyecto.

La última nota es la del segundo tab **progetti***, que está vinculado precisamente a este último procedimiento: en esta sección podemos seleccionar en qué órdenes estamos interesados en capturar los costos, si no filtramos nada, valoraremos todos los movimientos de órdenes que encontraremos en el período.