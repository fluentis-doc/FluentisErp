---
title: Generación de cobro anticipado desde pedido de cliente
sidebar_position: 7
ai_generated: true
---

Para realizar un cobro anticipado sobre una mercancía<!-- merce --> ordenada por nuestro cliente, no es necesario crear una factura proforma, sino que se debe partir desde el módulo de ventas<!-- vendita --> en la pantalla Pedido de cliente<!-- Ordine cliente -->.

**Fase 1**                
Crear un nuevo pedido<!-- ordine --> (debe ingresarse un artículo codificado).  
En la pestaña encabezado complete los campos:
> - tipo de pedido<!-- tipo ordine -->
> - cliente
> - ingresar fecha de entrega y fecha de mercancía<!-- merce --> lista
> - confirmado y fecha de confirmación
> - Activar la casilla “impreso<!-- stampato -->”
              
En la parte inferior, en la pestaña Pagos, ingrese el tipo de pago ANT (anticipo) en lugar del tipo de pago propuesto por el maestro de datos del cliente. Múevase a la pestaña Artículos y es obligatorio ingresar un artículo codificado, de lo contrario, el procedimiento no funcionará. Además, en la línea del artículo, el campo “Facturado ventas<!-- Fatturato vendite -->” deberá ser rellenado.  
Guarde el pedido<!-- ordine -->.
               
Vaya a la sección de resúmenes, en la parte inferior abra la sección “resumen de vencimientos”.  
Seleccione la fila en la rejilla. En la ribbon bar use el botón Crear partida de anticipo<!-- creo partita d’anticipo -->.
               
Se abrirá la ventana de “creación de partidas de anticipo<!-- creazione partite d’anticipo -->”; indique el tipo de documento (GEN para mantenerlo genérico) y agregue una descripción, por ejemplo, “pedido … cobro anticipado”.
                
**Fase 2 Registrar el cobro anticipado<!-- Registro l’incasso anticipato -->**               
            
Ingrese al módulo de administración y cree un Nuevo asiento contable<!-- Nuova registrazione contabile -->. En la causal introduzca: cobro o cobro por transferencia bancaria, según lo disponible.
> - En la ribbon bar utilice el botón “Buscar partidas<!-- Ricerca partite -->”, con doble clic seleccione la partida creada por el pedido<!-- ordine -->.
> - Múevase a la pestaña Registro<!-- Tab Registrazione --> y en el libro diario, en la descripción “depósitos bancarios<!-- depositi bancari -->”, ingrese su banco.
> - Guarde.
> - Después de guardar, aparecerá una ventana solicitando la creación de la factura de anticipo. Haga clic en Sí.
                
**Fase 3 Gestión de partidas de anticipo<!-- Gestione partite di anticipo -->**              
               
Ingrese en la pestaña “Gestión de anticipos<!-- Gestione anticipi -->”, haga clic en Buscar y seleccione la línea del pedido<!-- ordine --> de interés. En la ribbon bar pulse el botón “Facturación de anticipos<!-- Fatturazione anticipi -->”
Se abrirá la ventana “creación partida de anticipo<!-- creazione partita d’anticipo -->”. Complete los distintos campos: Tipo de factura (fact. venta. Anticipo…), IVA y el tipo facturado ventas (“anticipos de clientes” o similar). Enviar.
              
**Fase 4**               
           
Después de enviar, automáticamente se abrirá la factura de anticipo creada. Recuerde que sin la casilla Impreso<!-- Stampata -->, la factura no se contabiliza.
En la pestaña pagos, elimine el pago propuesto por el maestro de datos (por ejemplo, transferencia bancaria, riba, etc.), dejando SOLO la línea con tipo de pago ANT (anticipo). Guarde.
               
**Fase 5 Contabilizar la factura<!-- Contabilizzare la fattura -->**           
                
En el módulo de Ventas<!-- Vendite -->, en la pantalla Facturas de ventas<!-- Fatture di vendita -->, diríjase al procedimiento y contabilice la factura recién creada. ¡¡¡Puede aparecer un error!!! Debe verificar si en el “tipo de factura<!-- tipo fattura -->” que está utilizando, en los parámetros de la causal<!-- causale -->, la casilla está desactivada.

**Fase 6 Crear una nueva factura de venta<!-- Creare una nuova fattura di vendita -->**  
Nueva factura de venta<!-- Nuova fattura di vendita -->. Seleccione como tipo de factura cualquier factura de anticipo.
Ingrese el cliente. En los pagos, siempre ingrese el tipo ANT (anticipado) en lugar del propuesto por el maestro de datos.
                
En la ribbon bar, use el procedimiento “Atención de pedidos de clientes<!-- Evasione da ordini clienti -->”.
Seleccione el pedido<!-- ordine --> y haga Transferencia con el botón en la ribbon bar.
Guarde.
Vaya a la pestaña Artículos y verifique que en la rejilla, el artículo tenga ingresada en el campo “Facturado compras<!-- Fatturato acquisti -->” la cuenta correspondiente. De lo contrario, al final dará error. Arriba, en la ribbon bar, aparecerá el botón gestión de anticipos<!-- gestione acconti -->. Si no aparece, cierre la ficha de la factura<!-- scheda della fattura --> y reingrese.
En la pantalla de gestión de anticipos, muévase a la pestaña anulación de anticipos<!-- storno acconti -->.
Seleccione la fila correspondiente, pulse el botón en la ribbon bar “Crear anulación<!-- Crea storno -->”.
En la ribbon bar se habilitará el botón “Crear cierre de trabajos<!-- Crea chiusura lavori -->”.
Cierre la factura y contabilice la factura con el procedimiento habitual de contabilización.