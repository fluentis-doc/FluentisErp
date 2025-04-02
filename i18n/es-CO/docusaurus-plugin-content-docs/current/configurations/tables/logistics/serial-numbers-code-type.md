---
title: tipo codice serial number
sidebar_position: 27
---

La tabla se encuentra en la ruta **Tablas > Logística > tipo codice serial number** (Tabelle > Logistica > Tipo codice serial number).

En esta tabla es posible codificar los *Tipos de códigos de número de serie* para luego gestionarlos en la base de datos.

**Búsqueda de Tipos de código número de serie (Ricerca Tipi codice serial number)**

El formulario consta de un área de filtro y de una de resultados. Una vez configurados los filtros deseados, solo será necesario hacer clic en el botón **ricerca** para visualizar los resultados en el área de resultados.

**Inserción de Tipos de código número de serie (Inserimento Tipi codice serial number)**

Para poder ingresar nuevas codificaciones, es necesario hacer clic en la cuadrícula en la primera línea vacía o presionar el botón **nuovo**. Ingrese el **Código** y la **Descripción** del tipo de código de número de serie, guarde la línea y decida qué parámetros se desean utilizar para la composición del tipo de código de número de serie recién creado.

Para cada parámetro utilizado, se puede decidir de cuántos caracteres debe estar formado y, eventualmente, también el carácter de relleno a utilizar. Por ejemplo, con el parámetro “Número progresivo (Numero progressivo)” configurando el carácter de relleno como “0” y la Longitud en 5, se crearán lotes con el primer número como 00000, luego 00001, luego 00002 y así sucesivamente.

El **tipo codice serial number** debe luego ser vinculado al *anagrafica articolo* en el campo del mismo nombre situado en la pestaña [Lotes y número de serie (Lotti e serial number)](/docs/erp-home/registers/items/create-new-item), de modo que en los procedimientos que crean automáticamente el código de número de serie para el artículo en cuestión, el SN mismo se genere de acuerdo con las reglas establecidas aquí.

#### Detalles del tipo de código número de serie (Dettagli tipo codice serial number)

> *Clase*: reporta la clase del artículo;    
> *Matrícula*: reporta el código del artículo;     
> *Característica*: reporta la característica del registro del artículo;     
> *Cat. Mercantil*: reporta la categoría mercantil del registro del artículo;    
> *Tipo de Artículo*: reporta el tipo de artículo del registro del artículo;    
> *Variante*: reporta la variante del artículo;     
> *Caracteres alfabéticos*: permite ingresar caracteres alfabéticos.        

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funciones, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).