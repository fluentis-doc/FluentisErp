---
title: istanza matrice
sidebar_position: 4
---

Al abrir esta tabla se accede a la máscara de búsqueda de las matrices previamente codificadas y punto de partida para crear nuevas.  
Al crear una instancia de matriz, lo primero que se debe hacer es asignar un **codice** identificativo único y **[Definición de matriz (Definizione di matrice)](/docs/configurations/tables/CPQ/matrices-definition)**; según la definición seleccionada, en las pestañas siguientes solo será posible seleccionar los [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) válidos para esta matriz.

Moviéndose a la sección *Valores de dimensión permitidos (Valori dimensione consentiti)*, el siguiente paso es seleccionar, uno por uno, los Datos adicionales desde el combo box **attributo**. Una vez seleccionado el atributo, en la cuadrícula *risultati disponibili* se visualizarán los valores del Extra Data (por ejemplo, si seleccionamos el atributo Talla, en esta cuadrícula se mostrarán los valores del Extra Data: XS, S, M, L, XL, etc.). Una vez seleccionados los valores del atributo que queremos hacer válidos para esta matriz, es necesario arrastrarlos a la cuadrícula *valori ammessi* para indicar que esos valores serán válidos para las combinaciones de la matriz.  
Una vez elegidos los valores válidos para cada atributo, automáticamente aparecerán nuevas pestañas, una por cada matriz de soporte y una pestaña para la matriz completa, que unirá las varias matrices de soporte para tener una única con todas las combinaciones posibles.  
Al moverse en las pestañas generadas por las matrices de soporte, es necesario marcar las combinaciones de valores válidas. Para cada combinación, por lo tanto, es necesario activar el indicador solo si es válida.  
En la pestaña de la *matrice completa*, en cambio, se genera una matriz única con todas las combinaciones válidas, configuradas en la pestaña anterior.  
La matriz ahora puede ser utilizada en los objetos para los cuales fue configurada.