---
title: centri aziendali
sidebar_position: 4
---

El formulario se encuentra en la ruta: **Tablas > Control (Tabelle) > Controlling > Contabilidad analítica (Contabilità analitica) > centri aziendali (Centri aziendali)**

:::tip Nota
La tabla es de interés solo en las empresas con el indicador *controlling* activo.
:::

La tabla permite la definición de la estructura, incluso en diferentes niveles, y las características de los centros empresariales.

#### Botones específicos

**Nuevo CDC (Nuovo CDC)**: permite insertar un nuevo centro de costo. |  
**nuovo legame cdc**: permite insertar un subnivel respecto al nivel en el que se encuentra. |  
**cancella legame cdc**: permite eliminar el subnivel del CDC. |


:::tip **Modo de inserción de nuevos centros**
La estructura en árbol creada para organizar los centros y los centros en detalle son visibles en la cuadrícula central del formulario, pero los nuevos centros se insertan completando los campos en la zona inferior de la máscara.
ATENCIÓN: algunos campos son, sin embargo, modificables actuando directamente sobre la fila de la cuadrícula superior después de haber insertado el nuevo centro (por ejemplo, el campo *Cost driver*).
:::

## Configuraciones generales

### Campos obligatorios de la columna izquierda  
- [**dimensione**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) de pertenencia  
- **codice** alfanumérico, máximo 15 caracteres  
- **descrizione** del centro  
- **categoria** del centro  

### Campos no obligatorios de la columna izquierda  
- **seconda descrizione**  
- **TIPOLOGÍA DEL CENTRO (TIPOLOGIA DEL CENTRO)** (directo/indirecto) selección que no influye en las elaboraciones a nivel general  

### Campos no obligatorios de la columna derecha  
- **data inizio**/**FECHA FIN DE VALIDEZ (DATA FINE VALIDITA’)** estableciendo estas fechas, verificaremos si el centro de costo es válido en la fecha de registro (o en la fecha del documento), es decir, el menú desplegable de los centros mostrará solo los válidos para esa fecha (o con rango de validez vacío)  
- INDICADOR **valorizzabile**: indica si el centro puede ser valorizado en contabilidad o en documentos, o si es un centro de estructura lógica  
- INDICADOR **visibile in produzione**: esto hace que el centro sea visible en la tabla [Centros de costo (Centri di costo)](/docs/configurations/tables/production/cost-center) presente en producción;  
- **CENTRO DE RESPONSABILIDAD (CENTRO DI RESPONSABILITA’)**. Es una tabla libre donde indico quién es el responsable de ese centro, no influye en las lógicas de gestión de la contabilidad analítica, pero puede ser utilizado para notificar, mediante supervisor, eventuales sobrecostos al empleado conectado.  

## Configuraciones de control

- **conti da riassegnare**: solo un centro puede tener este indicador activo (en la misma empresa). Utilizaremos este indicador dentro de los centros de conveniencia, en particular en un centro genérico “VALORES CON ATRIBUCIÓN EN CONTROL (VALORI CON ATTRIBUZIONE NEL CONTROLLING)”.  
Este indicador identifica una especie de centro predeterminado donde la contabilidad general asigna aquellos costos que no sabe atribuir de manera precisa. También podrían existir lógicas que la contabilidad no tiene elementos ciertos para valorar los datos en el momento de la registración, o que requerirían demasiado tiempo para gestionarse.  

:::tip Nota
Ejemplo: el costo de los alquileres podría manejarse ya en el plan de cuentas con porcentajes fijos, pero al pasar por este centro genérico, tenemos la posibilidad de gestionar un *cost driver* donde establecer, por ejemplo, los metros cuadrados de los varios centros y de ahí derivar mi porcentaje. Al variar el driver, valoraremos (solo en control) el nuevo porcentaje sin tener que intervenir sobre el histórico ya registrado en contabilidad.  
O el consumo en kWh de las varias máquinas, datos que la contabilidad no sabe dónde obtener, por lo cual resulta conveniente estacionar los valores en este centro genérico y luego, al final del período, una vez que sepa cuánto se ha consumido, valoraré la lógica solo en control, derivándola a un *cost driver*.
:::

- **centro default patrimoniale**: Identifica un centro genérico al que se asignan todos los movimientos patrimoniales de la contabilidad. Normalmente, toda la gestión de la analítica se relaciona solo con el ámbito económico, pero podría ser interés de la empresa tener un cuadro completo de datos de balance en la analítica. El centro va de la mano con el indicador de valorización patrimonial en Control disponible dentro de la *divisione*.

- **centro di default per i progetti** identifica el centro empresarial genérico que acoge los costos/ingresos directos de proyecto/encargo. Como hemos explicado a nivel de la tabla *dimensioni*, tenemos una dimensión específica para analizar los valores del proyecto: dado que siempre debe haber un centro en la analítica, cuando valorizo un costo y un ingreso directo de proyecto/encargo, podré utilizar el centro genérico con este INDICADOR o deberé valorar más centros de encargo configurando la [TABLA ASOCIACIÓN CENTROS/ENCARGOS (TABELLA ASSOCIAZIONE CENTRI/COMMESSE)](/docs/configurations/tables/controlling/analytical-accounting/projects-centers-association).  

- [**modello di riclassificazione**](/docs/controlling/reclassifications/create-reclassification-model): permite asociar al centro empresarial un modelo de reclasificación con el fin de determinar el total de los costos asignados al centro para obtener el índice de costo del mismo. Esto porque algunos centros (generalmente productivos) están típicamente valorizados en términos de magnitudes físicas (por ejemplo, horas de trabajo o número de piezas utilizadas) y es necesario determinar la tarifa de valorización para el costo de la hora de trabajo o de la pieza única. El modelo de reclasificación determinará los costos totales del centro que se dividirán por el valor total de las horas (por ejemplo, o de las piezas), cargados en el centro mismo.  
:::tip Nota
El modelo de reclasificación que se debe asociar al centro empresarial para la determinación de la tarifa puede depender de la configuración teórica que se desea dar a su sistema de control de gestión, en todo caso, será un modelo que tiende a determinar el costo total del centro también a través de la atribución de una parte de los costos indirectos y comunes. En el detalle del modelo de reclasificación se debe indicar mediante un indicador específico el nodo (la fila) que expone el resultado de la reclasificación y por lo tanto el total de los costos del centro que se convertirá en el numerador de la relación (ejemplo Total de costos del centro / total horas de trabajo del centro) con el fin de determinar, por ejemplo, el costo horario del centro. En las imágenes se puede ver un ejemplo de modelo específico denominado Cuadro de control de costos. Este modelo está configurado para gestionar como numerador de la relación la fila Total costos de Funcionamiento.
:::

![Imagen](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/corporate-center-model-connection.png)

![Imagen](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/QCC-model.png)

- **tipo misurazione**: podemos medir con tres metodologías  
    - *en dimensión física (in dimensione fisica)*  
    - *in percentuale*  
    - *en porcentaje y magnitud física (in percentuale e grandezza fisica)*.  

Si seleccionamos esta última para visualizar todas las opciones disponibles, tendremos  

- **filtro valori denominatore**: con este campo, para cálculos porcentuales, definimos con qué lógica calcular el denominador para el cálculo de índices porcentuales. Las opciones disponibles son  
    - *totale dare*  
    - *totale avere*  
    - *04 Márgenes (Margini)*  
    - *05 En subcuenta seleccionada (Su sottoconto selezionato)*  
    - *06 En cuenta seleccionada (Su conto selezionato)*  
    - *07 Excluyendo las subcuentas seleccionadas (Ad esclusione dei sottoconti selezionati)*  
    - *08 Excluyendo las cuentas seleccionadas (Ad esclusione dei conti selezionati)*  

Seleccionando el código 02 Total debe, por ejemplo, sumaremos solo el debe de los centros indicados en la cuadrícula en la parte inferior izquierda, con el código 03 el haber, 04 los márgenes, es decir, la diferencia debe-haber, las opciones siguientes habilitarán también la cuadrícula de la derecha para filtrar adecuadamente los datos de los centros.  

- [**UNIDAD DE MEDIDA 1 (UNITA' DI MISURA 1)**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), [**UNIDAD DE MEDIDA 2 (UNITA' DI MISURA 2)**], **PARTE FIJA (PARTE FISSA)** y **PARTE VARIABLE (PARTE VARIABILE)**. Son 4 campos relacionados con el tipo de cálculo por cantidad, donde definimos cuál es la unidad de medida a buscar para obtener el total de la cantidad que se pondrá en el denominador del índice físico: podemos así indicar dos unidades de medida (UM1 y UM2) para el cálculo de un doble índice, mientras que claramente es la misma unidad de medida que se usa para la parte fija y la parte variable del primer o segundo índice.

:::tip Nota
El cálculo sobre magnitud física, típico de los centros productivos, permitirá obtener las tarifas de costo de los centros como € por hora máquina o horas hombre, con el fin de poder calcular y verificar los costos estándar utilizados en el Costo del producto para crear las estimaciones de costo en la lista de materiales en lugar de un presupuesto.
:::

- **riferimento di misurazione del centro**: podemos indicar qué campos del histórico de movimientos físicos filtrar para identificar las cantidades de nuestro centro: puede ser, en particular, el centro de origen, el centro de destino, o prioritariamente el destino, de lo contrario el origen.

## Localizaciones

En caso de instalaciones con localizaciones geográficas diferenciadas, es posible aprovechar la sección Localizaciones para gestionar descripciones en idiomas alternativos, que se podrán utilizar, por ejemplo, en la impresión del Análisis de centros de costo.