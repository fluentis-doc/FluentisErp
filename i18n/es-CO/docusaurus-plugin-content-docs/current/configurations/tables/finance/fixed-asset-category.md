---
title: categoria cespite
sidebar_position: 5
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está afectada por el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se quiera configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

Dentro de esta tabla se codifican las categorías de los activos gestionados en la empresa. 

### Tabla superior

**Categoría**: código alfanumérico.

**descrizione categoria**: descripción de la categoría.

**Cuenta**: la cuenta patrimonial de la inmovilización.

**sottoconto**: la subcuenta patrimonial de la inmovilización.

**descrizione**: descripción de la subcuenta patrimonial de la inmovilización.

**Mat/Immaterial (Mat/Imm.)**: indicación del tipo Material o Inmaterial del bien.

**Máximo de amortización (Massimale amm.)**: importe máximo de la amortización alcanzable por cada activo de la categoría.

**perc. amm.**: la porcentaje máxima del valor del activo que podrá ser amortizado.

**oper. incrementali**: si el indicador no está configurado, tal como por defecto, cada línea de incremento del valor del activo se gestionará con un detalle de amortización separado y autónomo. Si el indicador está configurado, por el contrario, cada incremento se atribuirá a la línea de compra inicial, incrementando siempre el valor inicial en su fecha de origen.

**Límite de amortización total (Limite amm. totale)**: cuota límite para la aplicación de la amortización total del 100% en el año de compra.

**Revaluaciones (Rivalutazioni)**: indicador de gestión de los detalles de las revaluaciones.

**Código contable (Cod. bilancio)**: código de balance para la impresión del informe de revaluaciones.

**gestione extra-contabile**: activa la gestión de los datos extracontables del activo; esto implica una duplicación de los valores patrimoniales contables para aplicar una lógica de amortización extracontable separada.

**giorni**: Al activar este indicador, el cálculo de la cuota de amortización tendrá en cuenta los días exactos de posesión del bien en el año en curso, en lugar de referirse a la lógica estándar que calcula la cuota completa independientemente de la fecha de compra, reduciéndola a la mitad en el primer año si se ha activado el indicador *Amortización primer año (Amm. Primo anno)* presente en la segunda cuadrícula (ver abajo).

**numerazione**: (Opcional) Permite definir una numeración de las fichas de activo específica para cada categoría. El campo se conecta a la [**tabla correspondiente**](/docs/configurations/tables/fluentis-numerations) donde se define el numerador. Si no se define, por defecto, se utiliza la numeración general de los activos, eventualmente vinculada al precódigo (o única).

### Segunda Tabla

La segunda sección está dedicada a la configuración de los detalles de la amortización aplicables a la categoría superior seleccionada.

**tipo amm.**: seleccione el tipo de amortización entre amortización ordinaria, amortización anticipada y amortización acelerada, esta última normalmente no utilizada.

**Cuenta**: cuenta de costo en la que se registrará la amortización periódica.

**sottoconto**: subcuenta de costo en la que se registrará la amortización periódica.

**descrizione conto**: descripción de la subcuenta de costo.

**fondo conto**: cuenta de fondo en la que se acumulará la amortización periódica.

**fondo sottoconto**: subcuenta de fondo donde se acumulará la amortización periódica. Esta podría ser también el mismo valor patrimonial activo para deducir directamente de él.

**descrizione conto**: descripción de la subcuenta de fondo.

**escludi**: el indicador permite excluir del cálculo automático de las amortizaciones el tipo de amortización seleccionado.

**percentuale**: la porcentaje de amortización a aplicar para el tipo de amortización configurado.

**n. anno**: se activa solo en correspondencia de los amortizaciones anticipados, donde deben ingresarse los 3 años de aplicación. En relación con este valor, debe recordarse que para los activos usados, el número de años de aplicación se establece automáticamente para solo el año de compra.

**Amortización primer año (Amm. primo anno)**: se propone automáticamente para todas las categorías materiales y se reducirá a la mitad el porcentaje de amortización en el año de inicio de la actividad del activo.

**fiscale**: podrá establecerse para las líneas de amortización anticipada para gestionarlo como amortización fiscal no contabilizable.

**Tipo de deducibilidad (Tipo deducibilità)**: permite asignar al tipo de amortización un código de deducibilidad a efectos fiscales.

**Descripción de la deducibilidad (Descr. deducibilità)**: descripción del tipo de deducibilidad.

#### Botones específicos

**cerca nella tabella superiore**: permite realizar la búsqueda en la tabla superior a través de los campos de filtro de categoría y descripción.  
**Agregar en la tabla superior (Inserisce nella tabella superiore)**: permite agregar una nueva categoría de activo.  
**Agregar en la tabla de detalles (Inserisce nella tabella dettaglio)**: permite agregar el detalle de la tabla superior seleccionada.  
**Agregar en la tabla Cdc (Inserisce nella tabella Cdc)**: permite agregar los Cdc de la tabla superior seleccionada. OBSOLETO  
**cancella righe selezionate**: permite eliminar las líneas seleccionadas (categoría de activo).  
**cancella righe selezionate dalla tabella inferiore**: permite eliminar las líneas seleccionadas de la tabla inferior (detalle del tipo de amortización).  
**Eliminar líneas seleccionadas de la tabla Cdc (Cancella righe selezionate dalla tabella Cdc)**: permite eliminar las líneas seleccionadas de la tabla centros de costo. OBSOLETO  
**salva**: permite guardar los cambios.

### CUADRÍCULA DE CENTROS DE COSTO (ELIMINADA SI ESTÁ ACTIVO EL MÓDULO DE CONTROL COMPLETO EN LA TABLA DE EMPRESAS, SIN EL PARÁMETRO DE USO DE CENTROS CONTABLES)

:::note NOTA
A pesar de que la gestión de centros de costo para los activos puede elaborarse con lógicas más sofisticadas de gestión de amortización objetiva, útiles para las necesidades de un control de gestión profundo, todavía es posible vincular un centro de costo específico para el activo individual, **dettaglio**, (o directamente en la categoría de activo, pero en ese caso es necesario desactivar el Indicador de Gestión de control en el registro de la empresa en uso) para valorizar con la cuota anual calculada a efectos fiscales y contables.
:::

Dentro de la ficha del activo en la cuadrícula de centros de costo de la pestaña **operazioni patrimoniali** es posible asignar, en referencia a **cada línea de amortización**, la valorización porcentual por defecto a centro de costo para los activos vinculados a la categoría. Esta configuración es secundaria respecto a la asignación de los centros de costo dentro del registro individual del activo (el de la pestaña Detalle).

**CDC**: centro de costo al que asignar la valorización de los activos pertenecientes a la categoría.

**Descripción**: descripción del centro de costo.

**Porcentaje**: configuración del porcentaje de valorización al centro de costo.

### **VIDEOS TUTORIALES (VIDEO TUTORIALS)**
:::important Ver También
[**VIDEOS TUTORIALES SOBRE LAS TABLAS DE ACTIVOS**](/docs/video/finance/intro)
:::