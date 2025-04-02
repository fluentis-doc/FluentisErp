---
title: valorizzazione magazzino
sidebar_position: 6
---

:::important ¿Para qué sirve? (A cosa serve)
La introducción a la valorización de inventario de Fluentis es un elemento fundamental en la gestión de existencias y en la determinación del valor de los bienes almacenados. Esta funcionalidad permite a los operadores realizar cierres de inventario en una fecha específica, registrando las existencias y permitiendo el alineamiento de la información logística con la contable, garantizando así una gestión precisa de los recursos y de los costos asociados.

El procedimiento de valorización permite configurar diversos parámetros, como la causa de movimiento para los saldos, y ofrece flexibilidad para seleccionar los criterios de valorización adecuados, como el costo más reciente o el costo promedio. De este modo, es posible tener en cuenta los movimientos realizados a lo largo del año para cada inventario, obteniendo así una visión detallada y actualizada del valor de las existencias.

Además, el procedimiento no solo ejecuta el cierre de inventario, sino que también crea automáticamente un registro de apertura para el día siguiente, asegurando la continuidad de las operaciones logísticas. Los usuarios también pueden monitorear los cierres realizados a través de un historial, que reporta los datos relativos a los costos y las cantidades valorizadas, facilitando así análisis y decisiones estratégicas para la mejora del rendimiento empresarial.
:::

El procedimiento permite realizar el cierre de inventario en una cierta fecha que debe ser ingresada por el usuario en el campo **data chiusura**.  
Por defecto, como **data chiusura** se propone la fecha actual.  
Además, el procedimiento también creará un movimiento de apertura con todas las existencias con fecha igual a **data chiusura** más un día, utilizando la causa presente en las [Causas de inventario (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates) con el indicador **rimanenze** activo.

*Botones específicos (Pulsanti specifici)*  
> **chiusura**: permite lanzar el procedimiento de cierre que efectúa una serie de controles sobre la congruencia de los datos de inventario, señalando eventuales errores que deberán ser corregidos manualmente por el operador antes de proceder nuevamente; en caso de que no haya ningún error, el procedimiento realizará el cierre de inventario en la **data chiusura** y la apertura al día siguiente con las existencias;             
> **crea valorizzazione**: se utiliza en localizaciones extranjeras como Rumania/Croacia donde los movimientos de inventario deben registrarse también en contabilidad (ver la documentación adicional);      
> **ripristina chiusura**: permite restaurar el último cierre realizado;     
> **allineamento con la contabilità**: se utiliza en localizaciones extranjeras como Rumania/Croacia donde los movimientos de inventario deben registrarse también en contabilidad (ver la documentación adicional).

:::note RECOMENDADO (CONSIGLIATO)
Se recomienda realizar la actividad de cierre del inventario en particular en caso de que haya un elevado número de movimientos, ya que esto permite mantener en el archivo los movimientos para una consulta, pero al mismo tiempo las elaboraciones de cálculo de existencias, disponibilidad y costos se simplifican, ya que los cálculos comenzarán desde el día siguiente al último cierre realizado.
:::

<u>Los siguientes procedimientos son específicos para localizaciones extranjeras como Rumania y Croacia.</u> 

## Crear valorización (Crea valorizzazione)

El procedimiento **crea valorizzazione** calcula los precios y modifica los valores en los movimientos de inventario.        
Se utiliza en casos de documentos de inventario incompletos, no finalizados o no conciliados.     
Esto ocurre principalmente debido a datos insuficientes (precio y cantidad) durante la entrada de los documentos de inventario, errores del proveedor o entradas incorrectas del usuario, retrasos en la entrega de documentos de inventario o entradas posteriores de modificaciones en documentos existentes.     
Al iniciar este procedimiento, la aplicación recalcula los nuevos valores de los artículos (FIFO) y los inserta directamente en el documento existente.      
Por lo tanto, para resumir, el procedimiento modifica los valores en los documentos existentes, no crea nuevos documentos que eliminen/aumenten el valor. Como resultado, el procedimiento es irreversible y no es posible restaurar los datos existentes antes de la ejecución del procedimiento.      
Esta funcionalidad se aplica principalmente al período durante el cual se ejecuta la valorización.      
El recálculo (FIFO) y la modificación de los valores en los documentos comienzan desde la fecha de cierre del inventario.     

:::danger ATENCIÓN
Es importante prestar mucha atención a las configuraciones en los [Parámetros iniciales de inventario (Parametri iniziali magazzino)](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters), especialmente si la fecha de cierre del inventario es en el año anterior.       
:::

Por ejemplo, la Fecha de inicio es el 01.10.2023, mientras que la fecha actual podría ser, por ejemplo, el 28.3.2024.       
Al iniciar el procedimiento **crea valorizzazione**, los valores en los documentos de inventario se modificarían desde el 01.10.2023 hasta la fecha actual. Entonces, dado que el 2023 ya ha pasado y probablemente ya ha sido cerrado financieramente, los valores en los documentos de inventario desde el 01.10.2023 hasta el 31.12.2023 se modificarían, alterando notablemente los informes ya concluidos para el 2023.      

## Alineación con la contabilidad (Allineamento con la contabilità)

El procedimiento de **allineamento con la contabilità** se ejecuta después del procedimiento de **crea valorizzazione**.        
Después de que el procedimiento de **crea valorizzazione** se haya completado y los valores en los documentos de inventario hayan sido modificados, también es necesario realizar cambios en los documentos contables relacionados.        
En esta etapa, el procedimiento de **allineamento con la contabilità** alinea los cambios realizados por la valorización del inventario y modifica los valores en los registros contables para garantizar la alineación financiera con los valores en los documentos de inventario.       

:::danger ATENCIÓN
Este procedimiento también es irreversible y modifica los montos en los documentos existentes.        
:::

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).