---
title: Parámetros en los módulos del área Compras y Ventas
sidebar_position: 35
ai_generated: true
---

Los documentos del ciclo pasivo y activo prevén sus configuraciones específicas de valorización de los *Centros empresariales*<!-- Centri aziendali -->

## Área de compras<!-- Area acquisti -->
En el área de compras las configuraciones están disponibles para las Solicitudes de compra, los Pedidos a proveedores, los Albaranes de compra y las Facturas de compra.

### Solicitudes de compra<!-- Richieste di acquisto -->
En los parámetros del módulo, pestaña *Analítica*, tenemos la posibilidad de definir la prioridad de valorización de los centros entre:
   - *Tipo de facturación*<!-- Tipo fatturato -->: es decir, según el plan de cuentas asociado a la facturación de compras del artículo
   - *Ficha de artículos*<!-- Anagrafica articoli -->: es decir, según el artículo seleccionado
   - *Ficha*<!-- Anagrafica -->: es decir, proveedor asociado a la línea de la Solicitud
   - *Almacén*<!-- Magazzino -->: es decir, el almacén<!-- magazzino --> vinculado a la línea de artículo

### Pedidos a proveedores<!-- Ordini fornitori -->
En los parámetros del módulo, pestaña *Analítica*, tenemos la posibilidad de definir la prioridad de valorización de los centros entre:
   - *Tipo de facturación*<!-- Tipo fatturato -->: es decir, según el plan de cuentas asociado a la facturación de compras del artículo
   - *Ficha de artículos*<!-- Anagrafica articoli -->: es decir, según el artículo seleccionado
   - *Ficha*<!-- Anagrafica -->: proveedor titular del pedido
   - *Almacén*<!-- Magazzino -->: es decir, el almacén<!-- magazzino --> vinculado a la línea de artículo
Además, se encuentran disponibles los siguientes flags:
- *Recalculo*<!-- Ricalcolo -->: cuando se crea el pedido a partir de un documento anterior (ej. solicitud de compra), este flag establece el recálculo de la analítica según los parámetros propios del módulo de destino
- *Centros de costo/ingreso obligatorios*<!-- Centri di costo/ricavo obbligatori -->: obliga al usuario a valorizar al 100% la analítica de cada línea de artículo
- *Evalúa la prioridad en cada dimensión*<!-- Valuta la priorità su ogni dimensione -->: este flag está disponible solo para empresas con *Controlling* activo. Si **NO** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valorización de los centros empresariales<!-- centri aziendali -->. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorizar todas las posibles dimensiones que se hayan configurado en las distintas entidades de origen (es decir, desde la cuenta contable, desde el artículo, desde el almacén<!-- magazzino -->, desde el proveedor)

### Albaranes de compra<!-- Bolle di acquisto -->
En los parámetros del módulo, pestaña *Analítica*, tenemos la posibilidad de definir la prioridad de valorización de los centros entre:
   - *Tipo de facturación*<!-- Tipo fatturato -->: es decir, según el plan de cuentas asociado a la facturación de compras del artículo
   - *Ficha de artículos*<!-- Anagrafica articoli -->: es decir, según el artículo seleccionado
   - *Ficha*<!-- Anagrafica -->: proveedor titular del pedido
   - *Almacén*<!-- Magazzino -->: es decir, el almacén<!-- magazzino --> vinculado a la línea de artículo
Además, se encuentran disponibles los siguientes flags:
- *Recalculo*<!-- Ricalcolo -->: cuando se crea el albarán a partir de un documento anterior (ej. pedido de proveedor), este flag establece el recálculo de la analítica según los parámetros propios del módulo de destino
- *Evalúa la prioridad en cada dimensión*<!-- Valuta la priorità su ogni dimensione -->: este flag está disponible solo para empresas con *Controlling* activo. Si **NO** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valorización de los centros empresariales<!-- centri aziendali -->. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorizar todas las posibles dimensiones que se hayan configurado en las distintas entidades de origen (es decir, desde la cuenta contable, desde el artículo, desde el almacén<!-- magazzino -->, desde el proveedor)

En el procedimiento de ***Creación de albarán de entrega desde Recepción de Mercancía*** está disponible el parámetro de ***Recálculo de centros de costo/ingreso***<!-- Ricalcolo centri di costo/ricavo -->, que establece el recálculo de la analítica según los parámetros propios del módulo de destino

### Facturas de compra<!-- Fatture di acquisto -->
En los parámetros del módulo, pestaña *Analítica*, tenemos la posibilidad de definir la prioridad de valorización de los centros entre:
   - *Tipo de facturación*<!-- Tipo fatturato -->: es decir, según el plan de cuentas asociado a la facturación de compras del artículo
   - *Ficha de artículos*<!-- Anagrafica articoli -->: es decir, según el artículo seleccionado
   - *Ficha*<!-- Anagrafica -->: proveedor titular del pedido
   - *Almacén*<!-- Magazzino -->: es decir, el almacén<!-- magazzino --> vinculado a la línea de artículo
Además, se encuentran disponibles los siguientes flags:
- *Recalculo*<!-- Ricalcolo -->: cuando se crea la factura a partir de un documento anterior (ej. albarán de compra), este flag establece el recálculo de la analítica según los parámetros propios del módulo de destino
- *Evalúa la prioridad en cada dimensión*<!-- Valuta la priorità su ogni dimensione -->: este flag está disponible solo para empresas con *Controlling* activo. Si **NO** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valorización de los centros empresariales<!-- centri aziendali -->. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorizar todas las posibles dimensiones que se hayan configurado en las distintas entidades de origen (es decir, desde la cuenta contable, desde el artículo, desde el almacén<!-- magazzino -->, desde el proveedor)

En el procedimiento de ***Creación de Facturas desde Recepción de Mercancía*** está disponible el parámetro de ***Recálculo de centros de costo/ingreso***<!-- Ricalcolo centri di costo/ricavo -->, que establece el recálculo de la analítica según los parámetros propios del módulo de destino

En el procedimiento de ***Valorización de albaranes de compra***<!-- Valorizzazione DDT di acquisto --> está disponible el parámetro de ***Recálculo de centros de costo/ingreso***<!-- Ricalcolo centri di costo/ricavo -->, que establece el recálculo de la analítica según los parámetros propios del módulo de destino

En el procedimiento de ***Valorización de albaranes de compra y de retorno***<!-- Valorizzazione DDT di acquisto e di rientro --> está disponible el parámetro de ***Recálculo de centros de costo/ingreso***<!-- Ricalcolo centri di costo/ricavo -->, que establece el recálculo de la analítica según los parámetros propios del módulo de destino

## Área de ventas<!-- Area vendite -->
En el área de ventas las configuraciones están disponibles para los Pedidos de clientes, los Albaranes de venta y las Facturas de venta.

### Ofertas de venta<!-- Offerte di vendita -->

### Pedidos de clientes<!-- Ordini clienti -->
En los parámetros del módulo, pestaña *Analítica*, tenemos la posibilidad de definir la prioridad de valorización de los centros entre:
   - *Tipo de facturación*<!-- Tipo fatturato -->: es decir, según el plan de cuentas asociado a la facturación de compras del artículo
   - *Ficha de artículos*<!-- Anagrafica articoli -->: es decir, según el artículo seleccionado
   - *Ficha*<!-- Anagrafica -->: proveedor titular del pedido
   - *Almacén*<!-- Magazzino -->: es decir, el almacén<!-- magazzino --> vinculado a la línea de artículo
Además, se encuentran disponibles los siguientes flags:
- *Evalúa la prioridad en cada dimensión*<!-- Valuta la priorità su ogni dimensione -->: este flag está disponible solo para empresas con *Controlling* activo. Si **NO** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valorización de los centros empresariales<!-- centri aziendali -->. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorizar todas las posibles dimensiones que se hayan configurado en las distintas entidades de origen (es decir, desde la cuenta contable, desde el artículo, desde el almacén<!-- magazzino -->, desde el cliente)

### Albaranes de venta<!-- Bolle di vendita -->
En los parámetros del módulo, pestaña *Analítica*, tenemos la posibilidad de definir la prioridad de valorización de los centros entre:
   - *Tipo de facturación*<!-- Tipo fatturato -->: es decir, según el plan de cuentas asociado a la facturación de compras del artículo
   - *Ficha de artículos*<!-- Anagrafica articoli -->: es decir, según el artículo seleccionado
   - *Ficha*<!-- Anagrafica -->: proveedor titular del pedido
   - *Almacén*<!-- Magazzino -->: es decir, el almacén<!-- magazzino --> vinculado a la línea de artículo
Además, se encuentran disponibles los siguientes flags:
- *Evalúa la prioridad en cada dimensión*<!-- Valuta la priorità su ogni dimensione -->: este flag está disponible solo para empresas con *Controlling* activo. Si **NO** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valorización de los centros empresariales<!-- centri aziendali -->. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorizar todas las posibles dimensiones que se hayan configurado en las distintas entidades de origen (es decir, desde la cuenta contable, desde el artículo, desde el almacén<!-- magazzino -->, desde el cliente)

### Facturas de venta<!-- Fatture di vendita -->
En los parámetros del módulo, pestaña *Analítica*, tenemos la posibilidad de definir la prioridad de valorización de los centros entre:
   - *Tipo de facturación*<!-- Tipo fatturato -->: es decir, según el plan de cuentas asociado a la facturación de compras del artículo
   - *Ficha de artículos*<!-- Anagrafica articoli -->: es decir, según el artículo seleccionado
   - *Ficha*<!-- Anagrafica -->: proveedor titular del pedido
   - *Almacén*<!-- Magazzino -->: es decir, el almacén<!-- magazzino --> vinculado a la línea de artículo
Además, se encuentran disponibles los siguientes flags:
- *Evalúa la prioridad en cada dimensión*<!-- Valuta la priorità su ogni dimensione -->: este flag está disponible solo para empresas con *Controlling* activo. Si **NO** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valorización de los centros empresariales<!-- centri aziendali -->. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorizar todas las posibles [*dimensiones*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) que se hayan configurado en las distintas entidades de origen (es decir, desde la cuenta contable, desde el artículo, desde el almacén<!-- magazzino -->, desde el cliente)

En el procedimiento de ***Creación desde albarán de entrega***<!-- Creazione da DDT --> está disponible el parámetro de ***Recálculo de centros de costo/ingreso***<!-- Ricalcolo centri di costo/ricavo -->, que establece el recálculo de la analítica según los parámetros propios del módulo de destino