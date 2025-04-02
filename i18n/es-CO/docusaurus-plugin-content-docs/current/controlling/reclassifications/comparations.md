---
title: comparazione riclassificazioni
sidebar_position: 5
---

Las comparaciones de las reclasificaciones permiten, a partir de un determinado [*Modelo de reclasificación*](/docs/controlling/reclassifications/create-reclassification-model), elaborar comparaciones entre las diversas reclasificaciones almacenadas en ***FluentisERP***.

## COMPARACIONES SOBRE DATOS DE RECLASIFICADOS DE CIERRES INTERMEDIOS
Configuraremos el modelo, introduciremos una Descripción identificativa de la comparación, y a la derecha no configuraremos el indicador **Datos del controlling** para que ***FluentisERP*** lea los datos de las reclasificaciones elaborados a partir de los datos del *Cierre intermedio* o del *Consolidado*.

En la cuadrícula de ***Detalles*** tendremos los siguientes campos:  
- *Progresivo* de línea, será el elemento identificativo del dato en la ficha siguiente de los **scostamenti***.  
- *Código/Cierre* (con la correspondiente Descripción y Fecha).  

Una vez guardadas estas configuraciones, en la Ficha de las ***Desviaciones*** veremos el resultado de la comparación. En particular, tendremos las siguientes opciones:

- *Visualización de las desviaciones*: permite ver la desviación porcentual entre las reclasificaciones ingresadas. En el lado derecho, activará la posibilidad de configurar sobre qué columna (la próxima o una fija) calcular la desviación.

- *Visualiza datos de detalle*: mostrará el detalle de los subcuentas, o centros, que valorizan el nodo individual del modelo.

- *Visualiza centros*: no activo en comparaciones no del controlling.

- *Cifras decimales*: decimales a utilizar para la columna de desviaciones.

## COMPARACIONES SOBRE DATOS DE CONTABILIDAD DE GESTIÓN DEL CONTROLLING
Configuraremos el modelo, introduciremos una Descripción identificativa de la comparación, y a la derecha configuraremos el indicador **Datos del controlling** para que ***FluentisERP*** lea los datos de la *Contabilidad de gestión* del controlling.

En la cuadrícula de ***Detalles*** tendremos los siguientes campos:  
- *Progresivo* de línea, será el elemento identificativo del dato en la ficha siguiente de los ***Desviaciones***.  
- *Área*, obligatorio, será el área de donde leer los datos.  
- [*Dimensión*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension), obligatorio, es decir, de qué dimensión leer los datos.  
- [*Centro empresarial*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), opcional, es decir, de qué centro se desean visualizar los datos.  
- *Proyecto*, no en uso.  
- *Periodo inicio* y *Periodo fin*, obligatorios, es el rango de períodos a considerar.  
- *Año inicio* y *Año fin*, obligatorios, es el rango de años a considerar.  
- *Visualiza detalles del periodo*: significa que para la línea se solicita la expansión de N columnas, una por cada período del rango definido.  
- *Centro/Comisión en columna*: significa que el código del *Centro* configurado en la línea será reflejado en el nombre de la columna.  
- *Calcula índices*: esta opción forzará un cálculo 'al vuelo' de los índices de costo de los centros. Esta opción es válida al realizar una comparación sobre el código del modelo utilizado para medir los centros, en la tabla de *Centros de costo*.  

Una vez guardadas estas configuraciones, en la Ficha de las ***Desviaciones*** veremos el resultado de la comparación. En particular, tendremos las siguientes opciones:

- *Visualización de las desviaciones*: permite ver la desviación porcentual entre las reclasificaciones ingresadas. En el lado derecho, activará la posibilidad de configurar sobre qué columna (la próxima o una fija) calcular la desviación.

- *Visualiza datos de detalle*: mostrará el detalle de los subcuentas, o centros, que valorizan el nodo individual del modelo.

- *Visualiza centros*: también mostrará el detalle de los centros asociados a las subcuentas del nodo.

- *Visualiza totales*: añadirá una columna final de totalización de todas las columnas visualizadas en la cuadrícula debajo.

- *Cifras decimales*: decimales a utilizar para la columna de desviaciones.

En caso de visualización de las desviaciones, tendremos las siguientes columnas de desviación:  
- *%*: se trata del *porcentaje vertical* entre el nodo que tiene el indicador 'Referencia porcentual' (que tendrá 100%) y todos los demás.  
- *Desviación*: se trata de la desviación en valor absoluto.  
- *Desv.%*: se trata de la desviación en porcentaje.  
- *Desv.% sobre %*: compara las *porcentajes verticales* de las dos columnas.  

En el caso de que estemos en la comparación del modelo de atribución de costos a los centros para el cálculo de índices, si en el detalle de configuración hemos filtrado los diversos centros productivos medidos, tendremos la posibilidad de ver, dentro del expander debajo, los totales de procesamiento del índice de costo para cada uno de estos. Los campos visualizados son:

- *UM1-F NUMERADOR*: numerador para el cálculo del índice fijo sobre la UM1 del centro.  
- *UM1-F DENOMINADOR*: denominador para el cálculo del índice fijo sobre la UM1 del centro.  
- *UM1-F VALOR ÍNDICE*: valor del índice fijo sobre la UM1 del centro.  
- *UM1-V NUMERADOR*: numerador para el cálculo del índice variable sobre la UM1 del centro.  
- *UM1-V DENOMINADOR*: denominador para el cálculo del índice variable sobre la UM1 del centro.  
- *UM1-V VALOR ÍNDICE*: valor del índice variable sobre la UM1 del centro.  
- *UM1 TOTAL*: índice total de la UM1 del centro.  

- *UM2-F NUMERADOR*: numerador para el cálculo del índice fijo sobre la UM2 del centro.  
- *UM2-F DENOMINADOR*: denominador para el cálculo del índice fijo sobre la UM2 del centro.  
- *UM2-F VALOR ÍNDICE*: valor del índice fijo sobre la UM2 del centro.  
- *UM2-V NUMERADOR*: numerador para el cálculo del índice variable sobre la UM2 del centro.  
- *UM2-V DENOMINADOR*: denominador para el cálculo del índice variable sobre la UM2 del centro.  
- *UM2-V VALOR ÍNDICE*: valor del índice variable sobre la UM2 del centro.  
- *UM2 TOTAL*: índice total de la UM2 del centro.  

- *% NUMERADOR*: numerador para el cálculo del índice porcentual.  
- *% DENOMINADOR*: denominador para el cálculo del índice porcentual.  
- *% PORCENTUAL*: valor del índice porcentual.  

:::tip NOTA
Al elaborar las comparaciones del controlling, ***FluentisERP*** creará automáticamente tantas reclasificaciones como combinaciones de centro, año, mes y detalles se requieran, antes de hacer disponible el resultado del procesamiento. Cuanto más compleja sea la lista, más largo será el procesamiento.
:::