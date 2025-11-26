---
title: Gestión de cash flow
description: Carga, modificación y gestión de los flujos de caja en Fluentis ERP con herramientas de simulación y adquisición de datos.
keywords:
  - cash flow
  - gestión de flujos financieros
  - simulación de cash flow
  - contabilidad
sidebar_position: 2
schema: TechArticle
tags:
  - finanzas
  - contabilidad
  - cash flow
last_update:
  author: Fluentis Documentation Team
ai_generated: true
---

# Gestión de cash flow<!-- Gestione cash flow -->

## Introducción<!-- Introduzione -->

Desde esta pantalla es posible cargar y modificar los datos del cash flow.  
Las opciones de menú permiten crear o actualizar los cálculos de simulación de cash flow. Con la gestión manual, el usuario puede ingresar filas directamente o recuperar los datos mediante el botón **Adquisición<!-- Acquisizione -->**, seleccionando el tipo de flujo de interés que abrirá la correspondiente pantalla de búsqueda y selección.

También es posible visualizar el documento de origen para evaluar sus datos.

#### Botones específicos<!-- Pulsanti specifici -->

- **Guardar<!-- Salva -->**: Guarda el cash flow en gestión.  
- **Buscar todos<!-- Ricerca tutti -->**: Realiza la búsqueda de los flujos para las cuentas financieras<!-- conti finanziari -->.  
- **Buscar movimientos de cash flow<!-- Ricerca movimenti cash flow -->**: Realiza la búsqueda de los movimientos para los tipos de flujo previsional.  
- **Adquisición<!-- Acquisizione -->**: Desde este botón el usuario puede seleccionar el tipo de flujo desde el que recuperar los datos previsionales a insertar en el cash flow en uso. Cada detalle de este botón abrirá una ayuda contextual específica para el tipo de flujo, véase aplicación a.  
- **Nuevo mov. cont.<!-- Nuovo mov. cont. -->**: Activa el cursor para ingresar una nueva línea de detalle en los movimientos de las cuentas financieras<!-- conti finanziari -->.  
- **Nuevo mov. flow<!-- Nuovo mov. flow -->**: Activa el cursor para ingresar una nueva línea de detalle en los movimientos previsionales.  
- **Restablecer todos<!-- Ripristino tutti -->**: Borra todos los movimientos ingresados.  
- **Restablecer contabilidad<!-- Ripristino contabilità -->**: Borra los movimientos de las cuentas financieras<!-- conti finanziari -->.  
- **Restablecer cash flow<!-- Ripristino cash flow -->**: Borra los movimientos previsionales.  
- **Visualizar doc. orig.<!-- Visualizza doc. orig. -->**: Muestra el documento de origen del flujo previsional seleccionado.

#### Botón (lista) *Adquisición*<!-- Pulsante (lista) Acquisizione -->

Los tipos de adquisición disponibles:

1. **Partidas<!-- Partite -->**: recupera las partidas contables<!-- partite contabili --> desde la contabilidad<!-- contabilità -->.  
2. **Contabilidad<!-- Contabilità -->**: recupera los saldos de los tipos de cuenta financiera<!-- conto finanziari -->.  
3. **Extra contable<!-- Extra contabile -->**: importa los vencimientos extracontables del cash flow.  
4. **Facturas (compra/venta)<!-- Fatture (acquisto/vendita) -->**: selecciona los datos de los vencimientos de facturas de compra/venta.  
5. **Pedidos (clientes/proveedores)<!-- Ordini (clienti/fornitori) -->**: selecciona las simulaciones de los datos residuales de los pedidos confirmados.  
Desde estas pantallas se seleccionan las simulaciones de los datos residuales de los pedidos de clientes/proveedores<!-- clienti/fornitori --> (impresos y confirmados). En el caso de que se desee comparar la búsqueda, por ejemplo, con la pantalla general de búsqueda de pedidos (de clientes o proveedores<!-- clienti o fornitori -->), tenga en cuenta que: 
     - en el cash flow sólo se seleccionan (por defecto) los pedidos no entregados (con posibilidad de activar la casilla adecuada para la búsqueda de aquellos parcialmente entregados, solamente, o además de los no entregados, cuyo flag identificativo es igualmente visible en la cuadrícula) 
     - se excluyen pedidos sin detalle de líneas con valor diferente de cero (de lo contrario no generarán vencimientos) 
     - se excluyen aquellos entregados forzosamente
     - la divisa debe estar informada
     - la cuenta de cabecera<!-- conto di testata --> debe estar informada
     - el número de pedido debe ser mayor que cero
     - el tipo de pedido debe tener la casilla cash flow (como para la creación automática del cash flow)
     - la fecha de confirmación del pedido debe estar informada
     - el pedido no debe haber sido ya incluido en otro cash flow calculado.  

La ayuda permite dos modalidades:

- **Visualizar pedidos<!-- Visualizza ordini -->**: muestra los datos de cabecera de los pedidos<!-- ordini -->.  
- **Visualizar artículos<!-- Visualizza articoli -->**: muestra los datos de las líneas de pedido (por lo que en caso de varias líneas, se mostrará varias veces el número de pedido y los datos de cabecera<!-- testata -->).

La casilla **Excluir artículos en factura<!-- Escludi articoli in fattura -->** verifica si las líneas del pedido<!-- ordine --> ya han sido entregadas en factura o DDT<!-- DDT -->.  

*Ejemplo*: pedido con 3 artículos (el primero no entregado, el segundo parcialmente entregado y el tercero totalmente entregado).  
- Con la casilla activa:
  - en la modalidad *Visualizar pedidos<!-- Visualizza ordini -->*, se extraerá ese pedido porque las líneas 1 y 2 no están totalmente entregadas y el valor para el cash flow será la suma de la línea 1 y el residual de la línea 2.  
  - en la modalidad *Visualizar artículos<!-- Visualizza articoli -->*, se extraerá solo la línea 1 porque no ha sido entregada.

6. **Perceptores no contabilizados<!-- Percipienti non contabilizzati -->**: permite ingresar en el cash flow los datos de las compensaciones a perceptores no contabilizados.  
7. **DDT (venta/compra)<!-- DDT (vendita/acquisto) -->**: permite recuperar los datos de los DDT<!-- DDT --> no incluidos en factura.  
8. **Cuenta trabajo (órdenes/retornos)<!-- Conto lavoro (ordini/rientri) -->**: permite recuperar datos de los pedidos de cuenta trabajo<!-- conto lavoro --> y sus retornos no facturados (dejar las configuraciones por defecto de ambas pantallas).