---
title: Tipos de límites
sidebar_position: 4
---

La tabla se encuentra en la ruta **Tablas > Calidad > General > Tipos de límites**.

En esta tabla se pueden codificar los *Tipos de límites*.  
El *Tipo de límite* siempre está asociado al *Tipo de valor* (solamente para *Tipos de valor* numéricos).  
Algunos ejemplos de uso de los *Tipos de límites* se encuentran en las gestiones:  
> **Hojas de datos** - en la pestaña *Propiedad*;  
> **Planes de control** - en la pestaña *Prueba planificada*;  
> **Control de artículos** - en la pestaña *Pruebas*;  
> **Certificados de Análisis** - en la pestaña *Controles y valores detectados > Valores detectados*;  
> **M.E.S.** - en la pestaña *Controles de calidad > Pruebas*.

La tabla contiene valores predefinidos por el sistema y no es posible insertar nuevos, eliminarlos o modificarlos; los valores predefinidos son:  
| Código | Descripción |
|:-:|:--|
| N.L. | No se requiere límite |  
| = | Igual |  
| x\> | Mayor |  
| x\< | Menor |  
| x \<\> | Diferente |  
| x\<= | Menor o igual |  
| x\>= | Mayor o igual |  
| \<;x;\> | Fuera de |  
| \<;x;\>= | Menor o Mayor/Igual |  
| \<=;x;\> | Menor/igual o Mayor |  
| \<=;x;\>= | Menor/Igual o Mayor/Igual |  
| \>;x;\< | Estrictamente entre |  
| \>;x;\<= | Mayor y Menor o igual |  
| \>=;x;\< | Mayor o igual y Menor |  
| \>=;x;\<= | Entre |  

**Búsqueda de Tipos de límites**

El formulario se compone de un área de filtro y de una de resultados. Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

*Campos específicos*:  

> **Tipo de límite**: información de solo lectura, es el código del *Tipo de límite*.  
> **Descripción del tipo**: información de solo lectura, es la descripción del *Tipo de límite*.  
> **Necesita un valor mínimo**: información de solo lectura, indica si se requiere un límite mínimo o inferior y habilita la columna *Límite mínimo de caracteres*.  
> **Necesita el valor máximo**: información de solo lectura, indica si se requiere un límite máximo o superior y habilita la columna *Límite máximo de caracteres*.  
> **Límite mínimo de caracteres**: es posible indicar un texto para identificar un intervalo entre el límite mínimo y el valor nominal; ejemplo: *< ≤ > ≥ ≠ =*.  
> **Límite máximo de caracteres**: es posible indicar un texto para identificar un intervalo entre el valor nominal y el límite máximo; ejemplo: *< ≤ > ≥ ≠ =*.  
> **Notas**: anotaciones libres.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).