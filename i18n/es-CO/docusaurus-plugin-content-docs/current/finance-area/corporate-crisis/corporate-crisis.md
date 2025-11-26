:::important[Introducción<!-- Introduzione -->]
La normativa sobre la crisis empresarial, introducida por el Decreto Legislativo 14/2019 (Código de la Crisis Empresarial y de la Insolvencia), tiene como objetivo prevenir situaciones de insolvencia mediante la adopción de herramientas para el monitoreo temprano de dificultades financieras.

Las empresas están obligadas a dotarse de estructuras organizativas, administrativas y contables adecuadas, capaces de detectar de manera oportuna señales de desequilibrio económico, patrimonial o financiero.

Entre las herramientas previstas por la normativa existen **indicadores específicos<!-- indicatori specifici -->**, como el DSCR (Debt Service Coverage Ratio<!-- DSCR -->), la verificación de la continuidad empresarial y el análisis de la sostenibilidad de la deuda. El incumplimiento de estas obligaciones puede implicar responsabilidades para el órgano administrativo.

Dentro de Fluentis ERP se encuentran disponibles funcionalidades dedicadas al control de los indicadores de crisis, que apoyan a la empresa en el cumplimiento de la normativa vigente.

En los siguientes apartados se describen en detalle las funcionalidades disponibles para cumplir con dichas obligaciones.
:::

## 1 Acceso a la funcionalidad<!-- 1 Accesso alla funzionalità -->
La gestión de la crisis empresarial<!-- crisi d’impresa --> es posible mediante el uso de la Solución Fluentis ***Corporate Performance Monitor (CPM)***.

![](/img/it-it/finance-area/corporate-crisis/1.png)

El CPM, en general, fue concebido para monitorear el desempeño empresarial y, en particular, crear índices y KPI. También se utiliza para gestionar de manera más flexible los índices de crisis.

## 2 Funcionalidad del CPM<!-- 2 Funzionalità del CPM -->
El módulo CPM incluye una sección dedicada a la verificación de la crisis empresarial<!-- crisi d’impresa -->, dividida en cuatro pestañas.

![](/img/it-it/finance-area/corporate-crisis/2.png)

Cada pestaña presenta el cálculo de los diferentes controles previstos por la normativa:

En la primera, ***Verificaciones de entidades externas<!-- Verifiche enti terzi -->***, se realizan las pruebas de entidades como **la Agencia Tributaria y el INPS**, que monitorean:

-	Retrasos en los pagos de IVA<!-- versamenti IVA -->
-	Retrasos en los pagos de las contribuciones de seguridad social e impuestos de los empleados<!-- versamenti dei contributi previdenziali e fiscali dei dipendenti -->

En particular, los umbrales que activan las señales son:

-	IVA: deuda mínima de 100.000 € → posible insolvencia
-	Otras deudas fiscales: más de 1.000.000 € y retraso > 90 días → señalización
-	Contribuciones de seguridad social: más de 50.000 € y retraso > 180 días → señalización

Estos umbrales son configurables en tablas internas del sistema.

En la segunda pestaña, ***Verificación de Patrimonio neto y DSCR<!-- Verifica Patrimonio netto e DSCR -->***, se verifica:

-	Total patrimonio neto: si es negativo, se presume situación de crisis
-	DSCR (Debt Service Coverage Ratio): si es inferior a 1, se presume situación de crisis

En la tercera, ***Índices sectoriales<!-- Indici settoriali -->***, se verifican cinco índices sectoriales, donde los valores esperados dependen del sector comercial al que pertenece la empresa: en caso de superar todos los umbrales previstos, nuevamente se presume el estado de crisis.

La última pestaña está dedicada, en cambio, al cálculo de posibles ***índices personalizados<!-- indici personalizzati -->***, sobre los cuales cada empresa hará sus propias evaluaciones específicas.

## 3 Fuentes de los datos<!-- 3 Fonti dei dati -->
Los datos utilizados para los controles provienen de:

-	**Tablas<!-- Tabelle -->** de configuración **específicas**
-	Cálculos automáticos mediante consultas **SQL**
-	Configuraciones relacionadas con las **cuentas contables<!-- conti contabili -->**
-	**Vencimientos<!-- Scadenzari -->**

En primer lugar, dentro de la **tabla Empresas<!-- tabella Società -->** es necesario indicar el **sector comercial<!-- settore merceologico -->** al que pertenece: **Pestaña Configuración administrativa > Campo Sector comercial para crisis empresarial<!-- Tab Impostazioni amministrative > Campo Settore merceologico per crisi impresa -->**
 
Luego, dentro del **plan de cuentas<!-- piano dei conti -->** se debe **asignar los tipos de cuenta para la crisis empresarial<!-- tipologie di conto per la crisi d’impresa -->** (tabla fija), a través del campo ***Crisis empresarial<!-- Crisi d'impresa -->*** presente en la cuadrícula *Cuentas* (el detalle del plan de cuentas<!-- piano dei conti -->*).

Los tipos posibles son:
 
- ADE-VAT debe asociarse típicamente a la cuenta que recoge el saldo del IVA del mes, donde será necesario contemplar la gestión de partidas abiertas para identificar la deuda pendiente.
- ADE-OTHER debe asociarse, de manera similar, a las cuentas que informan otras deudas fiscales, que siempre deberán gestionarse con partidas abiertas;
- INPS se asociará a las deudas de seguridad social, también gestionadas con partidas abiertas;
- LIQ se asociará a los **mayores<!-- mastri -->** (es decir, cuentas generales<!-- conti generici -->) que contienen el detalle de los códigos de clientes/proveedores, de los cuales, mediante un cash flow, identificaremos los datos de la liquidez disponible
- FIN se asociará a las cuentas (o a los mayores<!-- mastri -->) que nos informarán, siempre desde un cash flow, el importe de las deudas financieras, o de las cuotas futuras de préstamos y leasing
- RIS se asociará a los subcuentas<!-- sottoconti --> de las reservas de cobertura 
- MON se asociará a los subcuentas<!-- sottoconti --> (o cuentas) de costos/ingresos NO monetarios

Por defecto, los cálculos que se ejecutan extraen los importes:
-	directamente de las partidas contables
-	de los datos procesados en el último cash flow
-	de los saldos contables<!-- saldi contabili --> de las cuentas asociadas a nodos específicos del **modelo de reclasificación estándar** ***IV directiva***.

En este caso, el modelo solo sirve para identificar qué cuentas buscar para cada variable a utilizar: los importes se leen directamente de la contabilidad general, sin necesidad de un cierre interanual ni un reporte reclasificado.

## 4 Gestión de la crisis<!-- 4 Gestione della crisi -->
Actualmente, el sistema solo realiza una **validación de los índices**, pero no gestiona el proceso operativo completo de la crisis. Es posible prever la activación de notificaciones automáticas en caso de superar los umbrales, mediante programaciones de Supervisor.

## 5 Objetivos y sectores<!-- 5 Target e settori -->
Cada sector comercial<!-- settore merceologico --> tiene sus propios **valores objetivo<!-- valori target -->** predefinidos.

Estos valores se almacenan o en tablas fijas no visibles (en los controles de entidades externas<!-- enti terzi -->) o en el formulario ***Targeting***, donde los datos de los índices estándar por sector, sin embargo, no son modificables por el usuario ya que se gestionan como de naturaleza *estándar*: solo los objetivos de los índices personalizados<!-- indici personalizzati --> podrán tener objetivos personalizables y editables.

## 6 Descriptores y fórmulas<!-- 6 Descrittori e formule -->
Aparte de los controles de entidades externas<!-- enti terzi -->, cuyo cálculo se realiza desde código fuente, cada otro índice está asociado a un *descriptor* (véase el formulario homónimo en el menú principal del CPM) que define su fórmula de cálculo, por ejemplo:

- Índice de sostenibilidad de los gastos financieros: el índice se calcula como “Gastos financieros” / “Facturación”, que se almacena en el descriptor ‘03.01’ con fórmula “[RIC-OneriFin]/[RIC-Fatturato]”
- Índice de adecuada capitalización: el cálculo es “Patrimonio neto” / “Deuda total”, que se convierte en el descriptor 03.02 con fórmula “[RIC-PatNetto]/[RIC-DebTot]”

![](/img/it-it/finance-area/corporate-crisis/5.png)

En resumen, las fórmulas se basan en *variables* indicadas en la fórmula a través de su código entre corchetes.

Cada **variable<!-- variabile -->** (véase el formulario homónimo en el menú principal del CPM) hace referencia a su consulta SQL específica
 
![](/img/it-it/finance-area/corporate-crisis/6.png)

Las consultas subyacentes de las variables estándar también son consultas estándar sobre las que el usuario no puede intervenir: a partir de las propuestas, sin embargo, será posible definir una versión personalizada que se adapte a las características del sistema contable de cada instalación.

## 7 Repositorio<!-- 7 Repository -->
El sistema guarda en el formulario Repository los resultados de los cálculos realizados, creando así un histórico útil para análisis y paneles de control. Cada procesamiento está asociado a una fecha: cada índice tendrá un único resultado por cada día.

![](/img/it-it/finance-area/corporate-crisis/7.png)