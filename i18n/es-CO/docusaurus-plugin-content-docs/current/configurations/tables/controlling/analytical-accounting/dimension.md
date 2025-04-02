---
title: dimensione
sidebar_position: 5
---

El formulario se encuentra en la ruta: **Tablas > Control (Tabelle) > Contabilidad analítica (Controlling) > dimensione (Dimensione)**

:::tip Nota
La tabla es de interés solo en las empresas con el indicador *controlling* activo.
:::

El concepto de dimensione se puede explicar como un criterio de análisis y una división coherente de COSTOS y INGRESOS dentro de la empresa.

Es posible crear y mover múltiples dimensiones de análisis simultáneamente.

![Imagen](/img/it-it/configurations/tables/controlling/analytical-accounting/dimension.png)

**EJEMPLO**: Típicamente, se asocia a la contabilidad analítica la dimensión *INDUSTRIAL*, donde la empresa se divide en las distintas entidades o funciones empresariales, es decir, el CENTRO ADMINISTRATIVO DE LA EMPRESA, EL CENTRO DIRECCIONAL, EL CENTRO COMERCIAL y luego los CENTROS PRODUCTIVOS. 

Relativamente a esta dimensión, todos los costos e ingresos de la empresa se asignan para llegar a un análisis de FULL COSTING. 

Paralelamente, tenemos las *commesse*, es decir, las empresas que trabajan por COMISIÓN/PROYECTO; las comisiones son dimensiones paralelas y, por lo tanto, se conectarán todos los ingresos DIRECTOS de la comisión y se transferirán de la dimensión industrial los movimientos relacionados con los centros auxiliares y genéricos (dirección, administración, etc.). 

Luego tenemos la posibilidad de definir dimensiones **específicas** donde la empresa quiere identificar ciertos valores, separándolos de las lógicas normales, porque quiere llevar un registro de algunos tipos de costos. 

**EJEMPLO**: la empresa quiere hacer seguimiento de las diversas FERIAS a las que participa, que representan una inversión importante, y define una dimensión *FERIAS* asignando el centro FERIA MILANO (por ejemplo) y atribuyendo no solo el costo de la feria a la dimensión industrial, sino también a la dimensión FERIA, ya que desea dividir y analizar **paralelamente** un dato de esa entidad específica. No establece en este caso el indicador de cuadratura obligatoria porque solo quiere un elemento adicional de análisis.

La dimensión, por lo tanto, también puede verse como una ETIQUETA que se adjunta a los centros. 

A través de los *cost drivers*, podemos trasladar los datos (costos y beneficios) de una dimensión a otra. 

#### Campos específicos

- El indicador **CUADRATURA OBLIGATORIA** identifica que debe tener cuadratura con la contabilidad. Ya no es la contabilidad general la que debe cuadrar con el centro de costo/beneficio o comisión, sino que debe cuadrar con la dimensión de análisis individual que requiere cuadratura. La prueba de cuadratura se realizará solo si la causa contable de movimiento prevé a su vez el bloqueo del guardado de movimientos no cuadrados a nivel de valorización de los centros;  
- El indicador **commessa** indica que la línea analítica se asocia prioritariamente al proyecto para el cual el costo o ingreso se mueve de forma directa, y de este proyecto se derivará un centro de costo a valorar, centro que puede ser un código genérico igual para todos los proyectos o quizás un centro vinculado a una característica específica del proyecto seleccionado;  
- El indicador **VINCULO CUENTA/CENTRO** señala que se desea limitar lo que el usuario puede hacer al registrar en contabilidad un centro de esta dimensión: dado que en el plan de cuentas podemos agregar a cada subcuenta de costo y de ingreso uno o más centros empresariales, con esta opción indico que lo que está insertado en el plan de cuentas no puede ser modificado por el usuario. En esencia, un costo de producción no puede convertirse en un costo asignado al centro direccional. La restricción puede estar relacionada con el centro individual, en lugar de sobre las categorías de los centros;  
- El indicador **abilita commessa**, por otro lado, sirve para poder vincular una comisión de referencia también en las líneas de la dimensión industrial/direccional normal, para evitar gestionar dos dimensiones diferentes.
:::