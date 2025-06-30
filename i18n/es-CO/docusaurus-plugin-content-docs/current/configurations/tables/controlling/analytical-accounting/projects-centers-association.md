---
title: Asociación centros / órdenes de trabajo
sidebar_position: 1
---

El formulario se encuentra en la ruta: **Tablas > Control > Contabilidad analítica > Asociación centros / órdenes de trabajo**

:::tip Nota
Esta tabla es de uso exclusivo para las empresas que han configurado el *control*.
:::

Cuando la empresa produce por proyecto/orden de trabajo, el interés del análisis de seguimiento puede ser de dos tipos:  
- un interés puntual, sobre el proyecto/orden de trabajo individual, especialmente cuando estos no tienen entre sí características comunes;  
- un interés sobre un grupo de proyectos/órdenes de trabajo producidos en un cierto período de tiempo, cuando estos proyectos/órdenes de trabajo tienen características que permiten generalizar su tipo.

En este segundo caso, esta tabla se vuelve esencial, ya que permite conectar los centros empresariales de la *dimensión* Proyectos/órdenes de trabajo a una característica de estos, con el fin de poder evaluar los datos totales según estos *centros de proyecto/orden de trabajo* sin entrar en los detalles de cada trabajo individual.

:::tip Nota
Si la empresa no está interesada en un análisis de tipo macro, se puede omitir la configuración de esta tabla y utilizar un único *centro de proyecto/orden de trabajo* identificándolo con el indicador *Centro de defecto para los proyectos*, detalles en la tabla [***CENTRO DE COSTO***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
:::

Los campos de configuración disponibles son los siguientes:  
- el **código*** de la asociación

:::tip Nota
***FluentisERP*** evaluará las asociaciones en orden de Código: cuando se seleccione el proyecto X, entonces se evaluará si la primera asociación permite determinar el centro que se asignará a la línea; si no se encuentra, se verificará la segunda asociación y así sucesivamente, hasta la primera ocurrencia válida.
:::

- la ***DESCRIPCIÓN*** de la asociación  
- el ***TIPO*** de asociación, es decir, el objeto dentro del cual encontrar el elemento distintivo  
- la ***PROPIEDAD*** a considerar, que depende de la selección realizada en el campo anterior.  

Para estos últimos dos campos las opciones son:  
    - *Proyecto*
        - *Tipo de proyecto*
        - *Año del proyecto*
        - *Zona de proyecto*
        - *País del proyecto*
    - *Cliente*
        - *Tipo de cuenta*
        - *Cuenta del cliente*
        - *Zona de clientes*
        - *País invitado*
        - *Categoría de finanzas*
        - *Categoría comercial*
        - *Entrada de gastos*
    - *Artículo*
        - *Clase*
        - *Categoría de producto*
        - *Unidad de medida*
        - *Categoría fiscal*
        - *Característica*
        - *Tipo de artículo*

Dependiendo de la configuración, por lo tanto, se habilitará la asociación del Centro al elemento correspondiente configurado en la cuadrícula de abajo.

:::danger ATENCIÓN
La definición de una asociación vinculada a los *Artículos* requerirá que:  
- dentro de cada proyecto debe haber al menos una línea de artículo codificado.  
- la asignación de una línea de compra o venta, o en general de una línea del análisis en contabilidad, como costo/ingreso directo de proyecto/orden de trabajo, debe necesariamente ser asignada a una línea de artículo codificado dentro del proyecto; de lo contrario, ***FluentisERP*** no tendrá ningún medio para valorizar esta asociación y buscará una asociación posterior.

Si, por ejemplo, cada proyecto estuviera caracterizado por un producto terminado de venta de *clase* diferente, probablemente sería más sencillo gestionar diferentes *Tipos de proyectos* dependiendo de cada clase en lugar de requerir la valorización de un artículo dentro del proyecto individual y seleccionarlo en cada documento posterior.
:::