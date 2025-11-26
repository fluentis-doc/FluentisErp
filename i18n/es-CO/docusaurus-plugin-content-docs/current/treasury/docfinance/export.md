---
title: Exportaciones
sidebar_position: 2
ai_generated: true
---

Desde esta pantalla se realizan las exportaciones de datos para DocFinance, con tres opciones diferentes.

**Exportar anagráfico<!-- anagrafica -->**: al activar esta opción, el sistema creará el archivo de alineación del plan de cuentas<!-- piano dei conti --> y de los anagráficos<!-- anagrafiche -->. Una vez activado, se habilitarán los siguientes campos relacionados: 
-    **Fecha de última exportación<!-- Data ultima esportazione -->** que permite definir la fecha de referencia para la exportación únicamente de los datos modificados o añadidos del plan de cuentas<!-- piano dei conti -->: se puede eliminar esta fecha para crear un archivo completo con todas las configuraciones del plan de cuentas<!-- piano dei conti -->/anagráficos<!-- anagrafiche --> (esto puede tener un impacto significativo en el tiempo necesario para la alineación entre los dos sistemas)
- Fecha de operación<!-- Data Operazione -->, es la fecha de referencia de la exportación que se ejecuta

**Creación automática del cash flow**: al activar esta opción, el programa creará un nuevo cash flow en el módulo homónimo, antes de proceder con la eventual exportación de datos del punto siguiente. La creación se realizará con los parámetros por defecto del procedimiento *Creación automática cash flow*: consulte la documentación específica para más detalles.

**Exportar cash flow**: al activar esta opción, el sistema creará el archivo de los flujos financieros, tanto como partidas contables como previsionales. Cuando se marca esta opción, se habilita la siguiente casilla *Derogabilidad por anagráficos<!-- anagrafici -->/tipos de pago* 

Según se haya activado o no la casilla *Derogabilidad por anagráficos<!-- anagrafici -->/tipos de pago*, la lógica de asignación de la derogabilidad cambia: en caso de no estar activada, la derogabilidad para los proveedores se establecerá según el tipo de pago y para los clientes según el anagráfico<!-- anagrafica -->; en caso de estar activada, la derogabilidad se determinará a partir del anagráfico<!-- anagrafica --> del cliente/proveedor, y si aquí no está configurada será calculada con códigos fijos (‘01' para las riba, o bien ‘01' – ‘02' – ‘03' – ‘04', dependiendo de si la diferencia entre la fecha de vencimiento y la fecha actual resulta en una fecha vencida, una diferencia menor a 30 días, de 30 a 90, o más de 90 días).

:::note[Nota]
Para la configuración del cash flow sólo se requieren dos tipos de flujo financiero, por ejemplo:

| Código | Descripción | Código DocFinance |
| :-- | :-: | --: |
| 1 | Partidas |CO |
| 2 | Contabilidad |CO |

Pero pueden crearse más tipos de flujos previsionales (OC/OF por ejemplo) para pasarlos como en los análisis de DocFinance.
:::

| Función | Significado |
| --- | --- |
| Guardar | Con este botón es posible guardar las configuraciones para proponerlas por defecto en la pantalla. |
| Exportar | Ejecuta la creación del(los) archivo(s) según lo configurado en la pantalla. |

:::important[Configuraciones preliminares]
El intercambio de datos se realiza mediante archivos posicionales .txt según las especificaciones técnicas de DocFinance, archivos que se depositan en carpetas externas (locales o en red). 

La creación en exportación y la lectura en importación se realiza a través de Bizlink.

Verifique la presencia, y si es necesario cree, los conectores específicos de Bizlink.

![](/img/it-it/treasury/docfinance/docconn1.png)

Verifique e indique en los detalles de los conectores la carpeta local (existente en el servidor o en el PC) o bien la ruta de red, por ejemplo \NombrePc\NombreCarpeta.

Esta carpeta debe ser accesible en lectura y escritura también desde DocFinance. Recomendamos la creación de una carpeta dedicada exclusivamente a este intercambio de datos.

Los archivos exportados por Fluentis tienen todos el mismo nombre de archivo, por lo tanto, cada exportación (lanzada manualmente por el usuario) sobrescribe el archivo anterior. 

En importación, en cambio, es BizLink quien monitoriza la carpeta configurada y, apenas detecta un nuevo archivo, lo toma para importarlo: debe ser una carpeta diferente a la de exportación.

Remítase a la documentación de Bizlink para las configuraciones específicas del servicio (“Identificador” y flag de gestión con autenticación)

![](/img/it-it/treasury/docfinance/docconn2.png)

![](/img/it-it/treasury/docfinance/docconn3.png)

![](/img/it-it/treasury/docfinance/docconn4.png)


**ATENCIÓN:**

En el conector de importación visible en la imagen anterior, el tag ***filemask***: se ha configurado como normalmente se configura por defecto en DocFinance: “ritcoge.txt”. 

Por lo tanto, sólo se buscarán e importarán desde la carpeta los archivos con este nombre.

El campo puede configurarse de manera específica según sus propias configuraciones realizadas en DocFinance para la exportación.

Si el file mask es la regla de filtro para la identificación del nombre de archivo a importar, si la carpeta se utiliza exclusivamente para archivos DocFinance, se pueden utilizar, en la definición de la regla, también comodines, creando una regla genérica "*asterisco punto asterisco*" que capturará cualquier nombre de archivo de cualquier extensión.

Otro ejemplo: si en la exportación desde DocFinance las configuraciones prevén añadir letras o números para identificar mejor el archivo exportado (mes, periodo o iniciales de la empresa), el file mask puede configurarse así: "RitCoge*.txt".

**La carpeta de importación de Fluentis, monitorizada por el servicio Bizlink, debe configurarse, en términos de derechos de lectura y escritura, de modo que sea accesible para el usuario Bizlink (configurado en ARM). De lo contrario, la importación no funcionará.**

Por ejemplo, podría configurarse con derechos "everyone".
:::

## SCRIPT DE CREACIÓN DE CONECTORES
ATENCIÓN: después de ejecutar los scripts, es necesario modificar los conectores adaptándolos específicamente al cliente en uso, por ejemplo, verificando el nombre de la carpeta de salida, el identificador, etc...

[**Descargar el script SQL 1**](/sql/it-IT/DocFinance_Setup_Connector1.sql)

[**Descargar el script SQL 2**](/sql/it-IT/DocFinance_Setup_Connector2.sql)

[**Descargar el script SQL 3**](/sql/it-IT/DocFinance_Setup_Connector3.sql)