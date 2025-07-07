---
title: Tokenizador de código de barras
sidebar_position: 48
---

Gran parte de las operaciones que se pueden realizar en Fluentis WMS pueden ser facilitadas y aceleradas gracias al uso del campo *Código de entrada*, que si se configura adecuadamente, reinterpreta de manera inteligente los datos adquiridos a través de la lectura del código de barras e inserta automáticamente los valores en los campos correspondientes.  
Esto proporciona una gran ventaja al operador tanto en términos de velocidad de entrada como de eficiencia, ya que solo tendrá que leer los datos siempre en el mismo campo *Código de entrada* sin tener el problema de tener que cambiar el enfoque.

En la tabla de encabezado, los campos a ingresar son:

> **Código**: indica el prefijo del tokenizador de código de barras;        
> **Descripción**: indica la descripción del tokenizador de código de barras;        
> **Separador**: indica el carácter separador del tokenizador de código de barras.

En la tabla de detalle se deben definir los objetos y las propiedades que vamos a leer del código de barras.

El código de barras debe ser creado utilizando **Código de entrada** + **Separador** + **ObjetoBusiness.Propiedad** [ + **Separador** + **ObjetoBusiness.Propiedad** ]  

La última parte **ObjetoBusiness.Propiedad** puede repetirse varias veces; será la Longitud o el **Separador** definido en la tabla que permitirá identificar los valores correctos.      

Normalmente, en un tokenizador de código de barras, hay un solo **Objeto principal**, el cual puede estar compuesto por varios **Objetos de negocio**.      
Estos **Objetos de negocio** pueden ser propiedades directas del **Objeto principal** (en este caso, el **Objeto de negocio** será igual al **Objeto principal**) o pueden ser propiedades pertenecientes a otros **Objetos de negocio**, pero referenciados en el **Objeto principal**.          
Podemos decir que el **Objeto principal** que se devuelve de la lectura del código de barras está constituido por la composición de todas las propiedades de los **Objetos de negocio** ingresados.     

:::note Nota
Obviamente, dependiendo del conjunto de datos en el que se utilice, se debe asegurar que la configuración identifique un único resultado.
:::

A continuación, algunos ejemplos de construcción del Tokenizador de Código de Barras:

Ejemplo: Item-MOB-ART

| Código | Descripción | Separador | Objeto de negocio | Propiedad | Longitud | Separador | Secuencia | Objeto principal |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Item | Código de artículo | - | FSItemClass | Código | 3 | - | 10 | FSItem |
| Item | Código de artículo | - | FSItem | Código | 50 | - | 20 | FSItem |

Ejemplo: Loc-01-L1

| Código | Descripción | Separador | Objeto de negocio | Propiedad | Longitud | Separador | Secuencia | Objeto principal |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Loc | Código de ubicación | - | FSWarehouse | Código | 10 | - | 10 | FSLocation |
| Loc | Código de ubicación | - | FSLocation | CódigoUbicación | 100 | - | 20 | FSLocation |

Ejemplo: UDC-2023-5-21

| Código | Descripción | Separador | Objeto de negocio | Propiedad | Longitud | Separador | Secuencia | Objeto principal |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| UDC | Código de UDC | - | FSLoadingUnit | Año | 4 | - | 10 | FSLoadingUnit |
| UDC | Código de UDC | - | FSLoadingUnit | Grupo | 4 | - | 20 | FSLoadingUnit |
| UDC | Código de UDC | - | FSLoadingUnit | Número | 4 | - | 30 | FSLoadingUnit |

Ejemplo: Lot-MOB-ART-123

| Código | Descripción | Separador | Objeto de negocio | Propiedad | Longitud | Separador | Secuencia | Objeto principal |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Lot | Lote | - | FSItemClass | Código | 3 | - | 10 | FSBatchRegister |
| Lot | Lote | - | FSItem | Código | 50 | - | 20 | FSBatchRegister |
| Lot | Lote | - | FSLotRegister | Código | 05 | - | 30 | FSBatchRegister |

Ejemplo: MesPop-10824

| Código | Descripción | Separador | Objeto de negocio | Propiedad | Longitud | Separador | Secuencia | Objeto principal |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| MesPop | Fase de orden de producción | - | FSProductionOrderPhase | Id |  | - | 10 | FSProductionOrderPhase |

Ejemplo: Qta-50

| Código | Descripción | Separador | Objeto de negocio | Propiedad | Longitud | Separador | Secuencia | Objeto principal |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| Qta | Cantidad | - |  |  | 100 | - | 10 |  |

Ejemplo: ItemQta-MOB-ART-35

| Código | Descripción | Separador | Objeto de negocio | Propiedad | Longitud | Separador | Secuencia | Objeto principal |
| :-- | :-- | :-: | :-- | :-- | :-- | :-: | --: | :-- |
| ItemQta | Cantidad del artículo | - | FSItemClass | Código | 3 | - | 10 | FSItem |
| ItemQta | Cantidad del artículo | - | FSItem | Código | 50 | - | 20 | FSItem |
| ItemQta | Cantidad del artículo | - |  |  | 100 | - | 30 |  |

Los últimos ejemplos no entran en la lógica descrita para el tokenizador de código de barras, esto porque se quería tener una manera de mapear en el código de barras también la cantidad que, sin embargo, no se atribuye a ningún Objeto/Propiedad en el momento de la lectura.  
Obviamente, esta lógica debe implementarse en los formularios individuales.