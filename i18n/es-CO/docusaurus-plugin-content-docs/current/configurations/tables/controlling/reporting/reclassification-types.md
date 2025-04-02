---
title: tipi riclassificazione
sidebar_position: 1
---

La tabla de **tipi riclassificazione** ya está precompletada por el [**Inicio Rápido (Fast start)**](/docs/guide/fast-start) con las siguientes tipologías:  
- *IV - Reclasificación IV directiva UE (Riclassificazione IV direttiva UE)*  
- *EC - Reclasificación económica (Riclassificazione economico)*  
- *BEP - Punto de equilibrio (Break even point)*  

Estas tipologías se utilizan para los modelos contables que el **Inicio Rápido (Fast start)** precarga, en particular para el modelo del *Balance IV directiva (Bilancio IV direttiva)*.

En caso de que la empresa tenga activa la gestión de *Controlling*, sugerimos configurar un tipo:  
- *COGE - Control de gestión (Controllo di gestione)* con el indicador *Controlling* activo, que se utilizará para los modelos que valorizan el **storico registrazioni gestionali** a través de una **Comparación (Comparazione)** del controlling.  
- *PRO - Reclasificación de proyecto/orden (Riclassificazione di progetto/commessa)* con el indicador *Consolidado de orden*, que se utilizará si la empresa ha configurado una *dimensión* de gestión de proyectos y desea elaborar un *consolidato di progetto*.  

:::tip Nota
El tipo de reclasificación con el indicador **costo prodotto** presenta características específicas dentro de los Modelos de reclasificación, pero actualmente debe valorarse con procedimientos personalizados (custom).
:::

:::tip Nota
Es posible, a través del *object navigator*, hacer visible en la cuadrícula la propiedad *nazione*, que no es obligatoria para los tipi riclassificazione: si se establece un país en un tipo de reclasificación, los **modelli di riclassificazione** vinculados a esta tipología solo serán visibles en las empresas de la localización geográfica establecida.
:::