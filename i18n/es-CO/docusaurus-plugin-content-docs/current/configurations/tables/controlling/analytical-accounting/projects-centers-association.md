---
title: Asociación centros / proyectos (Associazione centri / commesse)
sidebar_position: 1
---

El formulario se encuentra en la ruta: **Tablas > Control (Tabelle) > Contabilidad analítica (Controlling) > Asociación centros / proyectos (Associazione centri / commesse)**

:::tip Nota
Esta tabla es de uso exclusivo para las empresas que han configurado el *controlling*.
:::

Cuando la empresa produce por proyecto/proyecto, el interés del análisis de seguimiento puede ser de dos tipos:  
- un interés puntual, sobre el proyecto/proyecto individual, especialmente cuando estos no tienen entre sí características comunes;  
- un interés sobre un grupo de proyectos/proyectos producidos en un cierto período de tiempo, cuando estos proyectos/proyectos tienen características que permiten generalizar su tipo.

En este segundo caso, esta tabla se vuelve esencial, ya que permite conectar los centros empresariales de la *dimensión* Proyectos/Proyectos a una característica de estos, con el fin de poder evaluar los datos totales según estos *centros de proyecto/proyecto* sin entrar en los detalles de cada trabajo individual.

:::tip Nota
Si la empresa no está interesada en un análisis de tipo macro, se puede omitir la configuración de esta tabla y utilizar un único *centro de proyecto/proyecto* identificándolo con el indicador *Centro de defecto para los proyectos*, detalles en la tabla [***CENTRO DE COSTO***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
:::

Los campos de configuración disponibles son los siguientes:  
- el **codice*** de la asociación

:::tip Nota
***FluentisERP*** evaluará las asociaciones en orden de Código: cuando se seleccione el proyecto X, entonces se evaluará si la primera asociación permite determinar el centro que se asignará a la línea; si no se encuentra, se verificará la segunda asociación y así sucesivamente, hasta la primera ocurrencia válida.
:::

- la **descrizione*** de la asociación  
- el **tipo*** de asociación, es decir, el objeto dentro del cual encontrar el elemento distintivo  
- la ***PROPIEDAD (PROPRIETA')*** a considerar, que depende de la selección realizada en el campo anterior.  

Para estos últimos dos campos las opciones son:  
    - *progetto*
        - *tipo progetto*
        - *anno progetto*
        - *zona progetto*
        - *nazione progetto*
    - *cliente*
        - *tipo conto*
        - *conto cliente*
        - *zona cliente*
        - *nazione cliente*
        - *categoria amministrativa*
        - *categoria commerciale*
        - *voce spesa*
    - *articolo*
        - *classe*
        - *categoria merceologica*
        - *unità di misura*
        - *categoria fiscale*
        - *caratteristica*
        - *tipo articolo*

Dependiendo de la configuración, por lo tanto, se habilitará la asociación del Centro al elemento correspondiente configurado en la cuadrícula de abajo.

:::danger ATENCIÓN
La definición de una asociación vinculada a los *articoli* requerirá que:  
- dentro de cada proyecto debe haber al menos una línea de artículo codificado.  
- la asignación de una línea de compra o venta, o en general de una línea del análisis en contabilidad, como costo/ingreso directo de proyecto/proyecto, debe necesariamente ser asignada a una línea de artículo codificado dentro del proyecto; de lo contrario, ***FluentisERP*** no tendrá ningún medio para valorizar esta asociación y buscará una asociación posterior.

Si, por ejemplo, cada proyecto estuviera caracterizado por un producto terminado de venta de *clase* diferente, probablemente sería más sencillo gestionar diferentes *tipi progetto* dependiendo de cada clase en lugar de requerir la valorización de un artículo dentro del proyecto individual y seleccionarlo en cada documento posterior.
:::