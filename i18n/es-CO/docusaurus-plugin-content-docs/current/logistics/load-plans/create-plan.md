---
title: Creación del Plan de Carga (Creazione Piano di Carico)
sidebar_position: 2
---

El **Plan de carga (Piano di carico)** es un documento que se crea entre el pedido del cliente y la preparación (picking).

## Búsqueda de pedidos de clientes (Ricerca ordini cliente)

El punto de partida para la creación de un plan de carga es la búsqueda y selección de los pedidos de clientes que se van a incluir en el plan. Desde la sección de filtro, es posible realizar una búsqueda avanzada en los pedidos que se desea evadir entre aquellos *non evasi* o *parzialmente evasi*.  
Por defecto, se proponen como "Desde fecha de entrega (Da data consegna)" y "Hasta fecha de entrega (A data consegna)" las fechas de inicio y fin de la semana actual, pero pueden configurarse de manera diferente.  
En los [Parámetros de Planes de Carga (Parametri Piani di Carico)](/docs/configurations/parameters/logistics/load-plan-parameters) es posible cambiar las fechas de entrega propuestas para la búsqueda, elegir si visualizar también las líneas de artículos presentes en planes de carga abiertos y establecer diferentes colores para las líneas, dependiendo de si hay o no disponibilidad necesaria para evadir el pedido.

El indicador **visualizza ordini con data consegna in giorno escluso** permite visualizar en la cuadrícula también los pedidos que tienen una fecha bloqueada (por ejemplo, festiva) en el calendario.  
**visualizza ordini con data consegna corretta** permite visualizar los pedidos con una fecha válida.  
Es posible abrir los pedidos con doble clic.  

A continuación, se presentan algunos de los datos presentes en la cuadrícula de resultados:  
**tipo**: contiene la [tipología (tipologia)](/docs/configurations/tables/sales/sales-order-types) del pedido de cliente, seguido de los datos del pedido como el **numero**, la **data**, el **articolo**, etc.;  
**note**: se pueden consultar las notas de las líneas del pedido y las notas del plan de carga;  
**quantità**: muestra la cantidad total de la línea de artículo en el pedido;  
**quantità residua**: muestra el restante del pedido que aún no ha sido evadido;  
**Pedido presente en otro plan de carga (Ordine presente in altro piano carico)**: este indicador indica que el pedido ya está presente en otro plan;  
**Pedido presente en otro plan de carga abierto (Ordine presente in altro piano carico aperto)**: este indicador indica que el pedido ya está presente en otro plan abierto; estos dos indicadores son útiles si el usuario no establece diferentes colores para las líneas (en los [parámetros](/docs/configurations/parameters/logistics/load-plan-parameters));  
**articolo**: en esta columna es posible ingresar la cantidad del artículo que se desea evadir; esta cantidad puede ser diferente de la cantidad residual.  

Después de seleccionar las líneas de pedido para procesar en el plan de carga, es posible realizar diversas operaciones con los botones de la barra de herramientas. Recordamos que si en los parámetros no se requiere la disponibilidad obligatoria, entonces se podrán evadir líneas sin disponibilidad.

**Botones específicos**  
> **inserisci ordine**: este botón transfiere las líneas seleccionadas a la pestaña **Preparación del plan de carga (Preparazione piano di carico)**;  
> **note spedizione**: este botón permite visualizar las *Notas de envío* presentes en la pestaña *consegna* del *anagrafica cliente*;  
> **proprietà ordine**: este botón abre el **stato evasione** del pedido seleccionado;  
> **Modificar notas del plan de carga (Modifica Note piano di carico)**: este botón permite modificar las **Notas del plan de carga** ingresadas en la pestaña *articoli* del Pedido del cliente.  

## Preparación del plan de carga (Preparazione piano carico)

En esta pestaña se proponen los datos para la preparación del plan de carga. Los datos mostrados por defecto son aquellos establecidos en la tabla [Tipos de plan de carga (Tipi piano di carico)](/docs/configurations/tables/logistics/load-plan-type), los demás pueden ser ingresados manualmente.  

**Botones específicos**  
> **salva**: permite guardar el plan de carga;  
> **imposta vettore**: este botón permite abrir la máscara de búsqueda **vettori** y seleccionar uno para asociarlo al plan de carga; se mostrará en la columna Transportista de la cuadrícula;  
> **modifica note vettore**: este botón permite modificar las notas del transportista y muestra las notas en la columna de la cuadrícula *note vettore*;  
> **Modificar número del transportista (Modifica numero vettore)**: si el mismo transportista llegara, por ejemplo, con más furgones, podría dividir el envío;  
> **rilascio piano**: este botón hace que el plan esté disponible para la creación de otros documentos (por ejemplo, el picking);  
> **sposta in altro piano di carico**: este botón mueve la línea a un plan de carga ya existente, elegido desde la máscara de búsqueda;  
> **creazione picking**: este botón permite crear el *Picking* desde el plan de carga; en la máscara es necesario ingresar el **tipo picking**, el **operatore** y es posible elegir si crear un picking diferente para cada pedido o no. El picking creado estará disponible en la Búsqueda de picking.  

## Leyenda (Legenda)

En esta pestaña se visualizan las posiciones y los compartimentos para las líneas del plan de carga; estas se configuran en el registro del *automezzo*.  

## Resumen de planes de carga (Riepilogo piani di carico)

En esta pestaña se visualiza el resumen de los datos relacionados con el *Plan de carga (Piano di carico)*.