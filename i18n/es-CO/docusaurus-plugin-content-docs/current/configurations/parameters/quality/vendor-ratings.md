---
title: parametri qualificazione fornitore
sidebar_position: 5
---

Los parámetros se encuentran en la ruta **parametri qualificazione fornitore**.

Los datos presentes en esta gestión se utilizan para proponer información en las gestiones:  
- **Evaluaciones de proveedores iniciales y periódicas (Valutazioni fornitori iniziali e periodiche)** - en la lista de *dati di testata*;  
- **Evaluaciones de proveedores periódicas sobre No conformidades (Valutazioni fornitori periodiche su Non conformità)** - en la lista de *dati di testata*;  
- **anagrafiche contatti** - en la pestaña *Datos contables > Datos de calidad (Dati contabili > Dati qualità)*.  

#### Botón específico

**salva**: permite almacenar la información modificada.  

**proponi valutazioni**

Para proponer las *valutazioni fornitore* en la lista de *Intervalos de puntuación para la evaluación (Intervalli punteggio per la valutazione)*, presione el botón **proponi valutazioni**.  
Se mostrarán todas las *Evaluaciones* que aún no están insertadas en la lista; los valores en *punteggio da* de las *Evaluaciones* preexistentes no se modifican.  

## Evaluaciones iniciales (Valutazioni iniziali)

En este expander es posible insertar datos para proponer en la *Evaluación inicial y periódica (Valutazione iniziale e periodica)*.  
En el expander, se pueden ingresar:  
- **tipo valutazione proposta**: *Tipo de evaluación* a proponer al insertar una *Evaluación inicial y periódica*.  
- **ispettore proposto**: *Inspector* a proponer al insertar una *Evaluación inicial y periódica*.  
- **sospensione automatica**: indica si, al reconocimiento de una *Evaluación de proveedor de suspensión (Valutazione fornitore di sospensione)*, el proveedor será automáticamente *sospeso*.  

## Evaluaciones periódicas no conformidad (Valutazioni periodiche non conformità)

En este expander es posible insertar datos para proponer en la *Evaluación periódica sobre No conformidades (Valutazione periodica su Non conformità)*.  
En el expander, se pueden ingresar:  
- **tipo valutazione proposta**: *Tipo de evaluación* a proponer al insertar una *Evaluación periódica sobre No conformidades (Valutazione periodica su Non conformità)*.  
- **sospensione automatica**: indica si, al reconocimiento de una *Evaluación de proveedor de suspensión (Valutazione fornitore di sospensione)*, el proveedor será automáticamente *sospeso*.  
>
- **Intervalos de puntuación para la evaluación (Intervalli punteggio per la valutazione)**  
> En esta lista, se pueden definir los rangos de porcentaje para la atribución automática de la *Evaluación periódica sobre No conformidades (Valutazione periodica su Non conformità)*.  
> La tabla permite insertar nuevos registros, modificarlos o eliminarlos. La lista se compone de la siguiente información:  
>- **valutazione**: es el código de la *valutazione fornitore*.  
>- **descrizione valutazione**: es la descripción de la *valutazione fornitore*.  
>- **punteggio da**: valor expresado en porcentaje, es el valor inicial del intervalo al cual se atribuye la *Evaluación*;  
>> la *Evaluación* que se atribuirá a un *fornitore* se calculará considerando el porcentaje obtenido de la evaluación;  
>> el porcentaje debe ser igual o mayor al valor inicial y menor que el valor del porcentaje del rango superior.  

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).