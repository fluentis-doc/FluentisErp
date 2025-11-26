---
title: Tablero KanBan de Progreso de Facturación
sidebar_position: 7
ai_generated: true
---

Este procedimiento tiene como objetivo visualizar (mediante el uso de la metodología Kan Ban<!-- Kan Ban -->) Oportunidades<!-- Opportunità -->, Pedidos<!-- Ordini --> y Facturas<!-- Fatture --> para determinados periodos. El procedimiento se compone de dos pestañas: **Filtro** y **Resultados**.

### Filtro    

En esta pestaña es necesario ingresar los filtros que se utilizarán para visualizar los resultados en la siguiente pestaña.     
En la primera parte están los siguientes flags: *Comprimir las facturas*, *Comprimir los pedidos*, *Comprimir las oportunidades*; al seleccionar estos flags, se visualizan los importes totales sobre los pedidos<!-- ordini -->, oportunidades<!-- opportunità --> y facturas<!-- fatture -->; sin estos flags, los diferentes documentos se mostrarán por separado, cada uno con sus propios valores.      
El filtro **Empresa<!-- Società -->** es obligatorio y contiene la empresa<!-- società --> de referencia.     
El filtro **Intervalo mensual<!-- Intervallo mensile -->** sirve para indicar, con intervalos trimestrales, el periodo a considerar.    
El filtro **Agente** permite visualizar los documentos que tengan el mismo agente asociado;     
El filtro **Moneda<!-- Divisa -->** se rellena automáticamente.        
También hay los filtros *Oportunidad*, *Factura de venta*, *Pedido de cliente*: estos flags determinan qué documentos mostrar entre los resultados.     
Por último, existen secciones en las que puede ingresar filtros respectivamente para Oportunidades, Facturas y Pedidos. En los tres casos, las fechas propuestas dependerán del intervalo mensual previamente ingresado.     

### Resultados   

En la pestaña está presente el **Tablero Kan Ban**, donde se visualizan los documentos distribuidos por los meses especificados en los filtros.
Cada columna del Tablero Kan Ban está compuesta por los siguientes elementos:      
Una **banda superior** donde se visualizan, en orden, los siguientes datos:
- mes de referencia; 
- Contador (Count): corresponde al número de oportunidades/facturas/pedidos presentes en esa columna;
- Total Net Amount: corresponde al valor total de oportunidades/facturas/pedidos incluidos en la columna, neto de los descuentos aplicados.     
  
Una **banda inferior** en la que se visualizan diferentes datos de cada documento.

Al hacer doble clic es posible abrir el documento vinculado.