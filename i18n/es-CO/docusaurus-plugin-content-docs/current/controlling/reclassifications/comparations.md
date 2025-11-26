---
title: Comparación de reclasificaciones
sidebar_position: 5
ai_generated: true
---

Las comparaciones de las reclasificaciones<!-- riclassificazioni --> permiten, a partir de un determinado [*Modelo de reclasificación*<!-- Modello di riclassificazione -->](/docs/controlling/reclassifications/create-reclassification-model), elaborar comparaciones entre las diferentes reclasificaciones almacenadas en ***FluentisERP***.

:::tip[Importante]<!-- Importante -->
Este formulario representa el punto final del proceso de elaboración de datos que ocurre en el módulo de controlling.

Desde aquí es posible generar el reporte final que permite analizar los datos.

Los análisis típicos que se pueden realizar son, por ejemplo:

- Control de desviaciones entre presupuesto y real, o entre dos o más reales (tanto sobre datos contables como sobre los datos de los centros de empresa<!-- centri aziendali -->)
- Análisis de período (típicamente los diferentes meses, según las configuraciones y lógicas de todo el módulo de controlling) para determinar la rentabilidad o tendencias de costos e ingresos
- Análisis de rentabilidad y márgenes de las líneas de negocio, mediante comparación (resumida o mes a mes) de determinados centros "de resultado" agregados según el modelo de reclasificación seleccionado.

El formulario puede utilizarse de dos maneras diferentes para fines específicos:

1) Leyendo y comparando las reclasificaciones de los **cierres interanuales<!-- chiusure infrannuali -->**. En este caso **NO se realiza ninguna lectura de los procesos de la contabilidad de gestión<!-- contabilità gestionale -->**, tales como cost drivers o escrituras de gestión directas, sino solo los datos de los cierres interanuales<!-- chiusure infrannuali --> (reclasificados).

2) Leyendo los datos de la **contabilidad de gestión<!-- contabilità gestionale -->** (como procesados por los procedimientos específicos) y, por tanto, con los resultados de la recuperación de datos de producción, cost drivers, etc.
:::

## COMPARACIONES SOBRE DATOS DE RECLASIFICADOS DE CIERRES INTERANUALES<!-- COMPARAZIONI SU DATI DEI RICLASSIFICATI DI CHIUSURE INFRANNUALI -->
1. Seleccione el modelo de reclasificación<!-- riclassificazione --> deseado e ingrese una Descripción identificativa de la comparación,
2. **NO** active la casilla **Datos del controlling** de forma que ***FluentisERP*** utilice los datos de los *Cierres interanuales<!-- Chiusure infrannuali -->* o del *Consolidado<!-- Consolidamento -->* y los presente reclasificados según el modelo seleccionado.

En la cuadrícula de ***Detalles*** tendremos los siguientes campos:
- *Progresivo* de línea, será el elemento identificativo del dato en la pestaña siguiente de ***Desviaciones<!-- Scostamenti -->***
- *Código/Cierre* (con la correspondiente Descripción y Fecha)

Una vez guardadas estas configuraciones, en la pestaña de ***Desviaciones<!-- Scostamenti -->*** veremos el resultado de la comparación. En particular, tendremos las siguientes opciones:

- *Visualización de desviaciones<!-- Visualizzazione degli scostamenti -->*: permite ver la desviación porcentual entre las reclasificaciones insertadas. En el lado derecho, se activará la posibilidad de establecer en qué columna (la cercana o una fija) calcular la desviación

- *Ver datos detallados<!-- Visualizza dati di dettaglio -->*: mostrará el detalle de los subcuentas<!-- sottoconti -->, o centros, que valorizan el nodo individual del modelo

- *Ver centros<!-- Visualizza centri -->*: no activo en comparados que no sean del controlling

- *Cifras decimales<!-- Cifre decimali -->*: decimales a utilizar para la columna de desviaciones<!-- sostamenti -->.

## COMPARACIONES SOBRE DATOS DE LA CONTABILIDAD DE GESTIÓN DEL CONTROLLING<!-- COMPARAZIONI SU DATI DELLA CONTABILITA' GESTIONE DEL CONTROLLING -->
1. Seleccione el modelo de reclasificación<!-- riclassificazione --> deseado e ingrese una Descripción identificativa de la comparación,
2. **Active** la casilla **Datos del controlling** para que ***FluentisERP*** lea los datos de la ***Contabilidad de gestión<!-- Contabilità gestionale -->*** del controlling (y por lo tanto sean visibles los resultados de procesos como cost drivers, índices y tarifas, recuperación de datos de producción, etc...).

En la cuadrícula de ***Detalles*** tendremos los siguientes campos:
- *Progresivo* de línea, será el elemento identificativo del dato en la pestaña siguiente de ***Desviaciones<!-- Scostamenti -->***
- ***Área***, **obligatorio**, será el área desde la cual leer los datos (por ejemplo, real, presupuesto, etc...)
- [***Dimensión***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension), **obligatorio**, es decir, de qué dimensión leer los datos (por ejemplo, la dimensión principal de la contabilidad de gestión<!-- contabilità gestionale -->, u otras dimensiones de análisis como inversiones particulares, proyectos<!-- commesse -->, etc...)
- [*Centro de empresa*<!-- Centro aziendale -->](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), **opcional**, es decir, de qué centro<!-- centro --> se desean ver los datos (funcionando como filtro ya que solo leerá los datos de ese centro, y eventualmente será necesario especificar, ingresando línea por línea, todos los centros que deban estar involucrados (por ejemplo, centros "de resultado")
- *Proyecto*<!-- Progetto -->, no en uso
- ***Período inicio*** y ***Período fin***, **obligatorios**, es el rango de períodos (meses) a considerar
- ***Año inicio*** y ***Año fin***, **obligatorios**, es el rango de años a considerar
- *Ver detalles de período*: significa que para la línea, se solicita la expansión en N columnas, una por cada período del rango definido
- *Centro/Proyecto en columna*: significa que el código del *Centro* establecido en la línea se mostrará en el nombre de la columna
- *Calcular índices*: esta opción forzará un cálculo "en tiempo real" de los índices de costo de los centros. Esta opción es válida cuando se está realizando una comparación sobre el código de modelo utilizado para la medición de los centros, en la tabla de *Centros de costo*

Una vez guardadas estas configuraciones, en la pestaña de ***Desviaciones<!-- Scostamenti -->*** veremos el resultado de la comparación. En particular, tendremos las siguientes opciones:

- *Visualización de desviaciones<!-- Visualizzazione degli scostamenti -->*: permite ver la desviación porcentual entre las reclasificaciones insertadas. En el lado derecho, se activará la posibilidad de establecer en qué columna (la cercana o una fija) calcular la desviación

- *Ver datos detallados<!-- Visualizza dati di dettaglio -->*: mostrará el detalle de los subcuentas<!-- sottoconti -->, o centros, que valorizan el nodo individual del modelo

- *Ver centros<!-- Visualizza centri -->*: mostrará también el detalle de los centros<!-- centri --> asociados a los subcuentas<!-- sottoconti --> del nodo

- *Ver totales*: añadirá una columna final de totalización de todas las columnas visualizadas en la cuadrícula inferior

- *Cifras decimales<!-- Cifre decimali -->*: decimales a utilizar para la columna de desviaciones<!-- sostamenti -->.

En caso de visualización de desviaciones<!-- scostamenti -->, tendremos las siguientes columnas de desviación:
- *%*: se trata del *porcentaje vertical* entre el nodo que tiene la casilla 'Referencia porcentual<!-- Riferimento percentuale -->' (que por lo tanto tendrá 100%) y todos los demás
- *Desviación<!-- Scostamento -->*: se trata de la desviación en valor absoluto
- *Desviación %<!-- Scost.% -->*: se trata de la desviación en porcentaje
- *Desviación % sobre %<!-- Scost.% su % -->*: compara los *porcentajes verticales* de las dos columnas

:::note[Índices]<!-- Indici -->
En el caso de que se esté en la comparación del modelo de asignación de costos a los centros para el cálculo de los índices, **si en el detalle de configuración hemos filtrado por los diferentes centros productivos medidos**, tendremos la posibilidad de ver, dentro del ***expander*** correspondiente, los totales de cálculo del índice de costo para cada uno de estos.

Los campos visualizados son:

- *UM1-F NUMERADOR*: numerador para el cálculo del índice fijo sobre la UM1 del centro
- *UM1-F DENOMINADOR*: denominador para el cálculo del índice fijo sobre la UM1 del centro
- *UM1-F VALOR ÍNDICE*: valor del índice fijo sobre la UM1 del centro
- *UM1-V NUMERADOR*: numerador para el cálculo del índice variable sobre la UM1 del centro
- *UM1-V DENOMINADOR*: denominador para el cálculo del índice variable sobre la UM1 del centro
- *UM1-V VALOR ÍNDICE*: valor del índice variable sobre la UM1 del centro
- *UM1 TOTAL*: índice total de la UM1 del centro

- *UM2-F NUMERADOR*: numerador para el cálculo del índice fijo sobre la UM2 del centro
- *UM2-F DENOMINADOR*: denominador para el cálculo del índice fijo sobre la UM2 del centro
- *UM2-F VALOR ÍNDICE*: valor del índice fijo sobre la UM2 del centro
- *UM2-V NUMERADOR*: numerador para el cálculo del índice variable sobre la UM2 del centro
- *UM2-V DENOMINADOR*: denominador para el cálculo del índice variable sobre la UM2 del centro
- *UM2-V VALOR ÍNDICE*: valor del índice variable sobre la UM2 del centro
- *UM2 TOTAL*: índice total de la UM2 del centro

- *% NUMERADOR*: numerador para el cálculo del índice porcentual
- *% DENOMINADOR*: denominador para el cálculo del índice porcentual
- *% PORCENTAJE*: valor del índice porcentual
:::

:::tip NOTA
Cuando se elaboran las comparaciones del controlling, ***FluentisERP*** creará automáticamente tantas reclasificaciones sobre el modelo como combinaciones existan entre centro<!-- centro -->, año, mes y detalles solicitados, antes de poner a disposición el resultado de la elaboración. Cuanto más larga sea la lista, más largo será el procesamiento.
:::

:::important[Profundización]<!-- Approfondimento -->
En la presentación de los resultados finales (incluyendo los procesos de contabilidad de gestión<!-- contabilità gestionale --> tales como cost drivers, etc...) a través del reporting permitido por esta pantalla, con el fin de representar una situación completa y correcta en relación con los objetivos del propio sistema de controlling, es necesario evaluar la interacción entre los siguientes elementos:

- la estructura del modelo de reclasificación<!-- riclassificazione --> que se selecciona y las vinculaciones relacionadas, que pueden ser solo a cuentas contables (leyendo así todos los centros de empresa<!-- centri aziendali --> conectados a cada cuenta) o a la cuenta filtrada por centro (obteniendo solo los movimientos relacionados con ese centro<!-- centro -->, provenientes de esa cuenta), o solo al centro de empresa<!-- centro aziendale --> (obteniendo todos los movimientos que han fluido en ese centro<!-- centro --> desde cualquier cuenta)

- el tipo de dato que se lee en la vinculación entre el modelo de reclasificación<!-- riclassificazione --> y los centros de empresa<!-- centri aziendali --> (dato fuente, de todos modos mostrando el efecto de los cost drivers por defecto, o traspasos de valores entre centros<!-- centri --> pudiendo discriminar entre valores cedidos o recibidos)

- La configuración que se realiza en la cuadrícula *detalles* de la comparación con la casilla ***Datos desde controlling*** activa: es decir, si en esta cuadrícula se solicita un área y dimensión de análisis completas, con todos los centros<!-- centri aziendali --> asociados, o se filtran solo algunos centros<!-- centri aziendali -->. En este último caso, es importante ponderar cuáles centros<!-- centri --> incluir; solo como ejemplo, centros<!-- centri --> que hayan recibido los valores de resultado de otros centros<!-- centri -->, estos últimos NO "vaciados" por los cost drivers (para evitar duplicar valores).
:::