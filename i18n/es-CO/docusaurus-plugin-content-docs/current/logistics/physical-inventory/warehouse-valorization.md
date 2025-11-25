---
title: Valorización de inventario
description: Procedimiento para el cierre, valorización y alineación contable del inventario en Fluentis ERP.
keywords:
  - valorización de inventario
  - cierre de inventario
  - existencias
  - FIFO
  - alineación contable
sidebar_position: 6
schema: TechArticle
tags:
  - inventario
  - valorización
  - logística
  - contabilidad
last_update:
  author: Fluentis Documentation Team
ai_generated: true
---

# Valorización de inventario<!-- Valorizzazione magazzino -->

## Introducción<!-- Introduzione -->

:::important
La valorización de inventario<!-- valorizzazione di magazzino --> en Fluentis es un elemento fundamental para la gestión de existencias y la determinación del valor de los bienes almacenados. El procedimiento permite realizar el cierre de inventario<!-- chiusura del magazzino --> en una fecha específica, registrando las existencias finales<!-- rimanenze --> y alineando la información logística con la contable, garantizando así una gestión precisa de los recursos y de los costos asociados.

El procedimiento de valorización permite configurar diferentes parámetros, como la causa de movimiento<!-- causale di movimentazione --> para las existencias finales, y ofrece la flexibilidad de seleccionar los criterios de valorización apropiados, como el costo último o el costo medio. De este modo, es posible tener en cuenta los movimientos realizados durante el año para cada inventario<!-- magazzino -->, obteniendo así una visión detallada y actualizada del valor de las existencias<!-- scorte -->.

Además, el procedimiento no solo realiza el cierre de inventario<!-- chiusura di magazzino -->, sino que crea automáticamente un asiento de apertura para el día siguiente, garantizando la continuidad de las operaciones logísticas<!-- operative -->. Los usuarios también pueden monitorear los cierres realizados a través de un histórico, que muestra los datos relativos a costos y cantidades valorizadas, facilitando así el análisis y las decisiones estratégicas para la mejora del rendimiento empresarial.
:::

## Procedimiento de cierre<!-- Procedura di chiusura -->

El procedimiento permite efectuar el cierre del inventario<!-- chiusura del magazzino --> en la fecha indicada por el usuario en el campo **Fecha de cierre<!-- Data chiusura -->**.  
Por defecto se sugiere la fecha actual.

Automáticamente se crea un movimiento de apertura con todas las existencias finales<!-- rimanenze -->, fechado al **Fecha de cierre + 1 día**, utilizando la causa presente en las [Causas de inventario<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates) con el flag **Existencias finales<!-- Rimanenze -->** activo.

### Botones específicos<!-- Pulsanti specifici -->

- **Cierre<!-- Chiusura -->**: permite lanzar el procedimiento de cierre que realiza una serie de controles sobre la coherencia de los datos de inventario<!-- magazzino -->, señalando eventuales errores que deberán ser corregidos manualmente por el usuario antes de proceder nuevamente; en el caso de no haber ningún error, el procedimiento efectuará el cierre de inventario<!-- chiusura di magazzino --> en la **Fecha de cierre<!-- Data chiusura -->** y la apertura al día siguiente con las existencias finales<!-- rimanenze -->.

- **Crear valorización<!-- Crea valorizzazione -->**: utilizado en localizaciones extranjeras (por ejemplo, Rumanía, Croacia) para recalcular los valores de los movimientos de inventario<!-- movimenti di magazzino -->, integrándolos también con la contabilidad.

- **Restaurar cierre<!-- Ripristina chiusura -->**: permite restaurar el último cierre realizado.

- **Alineación con la contabilidad<!-- Allineamento con la contabilità -->**: utilizado en localizaciones extranjeras como Rumanía/Croacia donde los movimientos de inventario<!-- movimenti di magazzino --> deben ser registrados también en la contabilidad (véase documentación más abajo).

:::important Recomendación<!-- Raccomandazione -->
El cierre del inventario<!-- chiusura del magazzino --> es especialmente recomendable en caso de existir un alto número de movimientos, ya que permite mantener los movimientos en el archivo para su consulta, pero al mismo tiempo las elaboraciones de cálculo de stock<!-- giacenza -->, disponibilidad<!-- disponibilità --> y costos se agilizan, pues los cálculos partirán desde el día siguiente al último cierre realizado.
:::

<u>Los procedimientos siguientes son específicos para localizaciones extranjeras como Rumanía y Croacia.</u>

## Crear valorización<!-- Crea valorizzazione -->

El procedimiento **Crear valorización<!-- Crea valorizzazione -->** calcula los precios y modifica los valores en los movimientos de inventario<!-- movimenti di magazzino -->.  
Se utiliza cuando los documentos resultan incompletos, no finalizados o no conciliados por motivos como:

- datos insuficientes (precios o cantidades faltantes),
- errores del proveedor o del usuario,
- retrasos en la entrega de los documentos,
- modificaciones posteriores a los documentos existentes.

Al iniciar este procedimiento, la aplicación recalcula nuevamente los nuevos valores de los artículos (FIFO) y los inserta directamente en el documento existente.      
En resumen, el procedimiento modifica los valores en los documentos existentes, no crea nuevos documentos que eliminen o aumenten el valor. Como consecuencia, el procedimiento es **irreversible** y no es posible restaurar los datos existentes antes de ejecutar el procedimiento.      
Esta funcionalidad se aplica principalmente al período durante el cual se realiza la valorización.      
El recálculo (FIFO) y la modificación de los valores en los documentos inician a partir de la fecha de cierre del inventario<!-- magazzino -->.

El procesamiento se aplica al período valorizado, comenzando desde la fecha de cierre del inventario<!-- magazzino -->.

:::danger Atención<!-- Attenzione -->  
Revise atentamente los valores en los [Parámetros iniciales de inventario<!-- Parametri iniziali magazzino -->](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters), sobre todo si la fecha de cierre del inventario<!-- magazzino --> pertenece al año anterior.
:::

*Ejemplo*:  
Si la fecha de inicio es el 01.10.2023, mientras que la fecha actual podría ser, por ejemplo, el 28.3.2024.       
Al iniciar el procedimiento **Crear valorización<!-- Crea valorizzazione -->**, los valores en los documentos de inventario<!-- documenti di magazzino --> serían modificados desde el 01.10.2023 hasta la fecha actual. Así que, dado que el 2023 ya pasó y probablemente ya está cerrado financieramente, los valores en los documentos de inventario<!-- magazzino --> del 1.10.2023 al 31.12.2023 se modificarían, alterando considerablemente los reportes ya finalizados para 2023.

## Alineación con la contabilidad<!-- Allineamento con la contabilità -->

El procedimiento de **Alineación con la contabilidad<!-- Allineamento con la contabilità -->** se ejecuta después de **Crear valorización<!-- Crea valorizzazione -->**.

Luego de que el procedimiento de **Crear valorización<!-- Crea valorizzazione -->** ha finalizado y los valores en los documentos de inventario<!-- documenti di magazzino --> han sido modificados, también es necesario realizar modificaciones en los documentos contables relacionados.        
En esta fase, el procedimiento de **Alineación con la contabilidad<!-- Allineamento con la contabilità -->** alinea los ajustes realizados por la valorización del inventario<!-- valorizzazione del magazzino --> y modifica los valores en los registros contables para garantizar la alineación financiera con los valores en los documentos de inventario<!-- magazzino -->.

:::danger Atención<!-- Attenzione -->
Este procedimiento también es irreversible y modifica los importes en los documentos existentes.
:::


## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

La valorización de inventario<!-- valorizzazione di magazzino --> permite gestionar el cierre, el registro de existencias finales<!-- rimanenze --> y la alineación de los valores logísticos y contables. Los procedimientos dedicados a localizaciones extranjeras también permiten el recálculo de valores (FIFO) y la actualización automática de los documentos contables.

*Ampliaciones útiles*:

- [Causas de inventario<!-- Causali di magazzino -->](/docs/configurations/tables/logistics/warehouse-templates)  
- [Parámetros iniciales de inventario<!-- Parametri iniziali magazzino -->](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)  
- [Funcionalidad, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common)