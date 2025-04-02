---
title: Parámetros en los módulos del área Compras y Ventas (Parametri nei moduli dell'area Acquisti e Vendite)
sidebar_position: 35
---

Los documentos del ciclo pasivo y activo prevén sus configuraciones específicas de valoración de los *Centros empresariales*.

## Área de compras (Area acquisti)
En el área de compras, las configuraciones están disponibles para las Solicitudes de compra, los Pedidos a proveedores, las Guias de compra y las Facturas de compra.

### Solicitudes de compra (Richieste di acquisto)
En los parámetros del módulo, pestaña *analitica*, tenemos la posibilidad de definir la prioridad de valoración de los centros entre:
- *tipo fatturato*, es decir, en relación con el plan de cuentas asociado al volumen de compras del artículo.
- *anagrafica articoli*, es decir, en relación con el artículo seleccionado.
- *anagrafica*, es decir, el proveedor asociado a la línea de Solicitud.
- *magazzino*, es decir, el almacén vinculado a la línea del artículo.

### Pedidos a proveedores (Ordini fornitori)
En los parámetros del módulo, pestaña *analitica*, tenemos la posibilidad de definir la prioridad de valoración de los centros entre:
- *tipo fatturato*, es decir, en relación con el plan de cuentas asociado al volumen de compras del artículo.
- *anagrafica articoli*, es decir, en relación con el artículo seleccionado.
- *anagrafica*, proveedor titular del pedido.
- *magazzino*, es decir, el almacén vinculado a la línea del artículo.
Además, se presentan las siguientes opciones:
- *ricalcolo*: cuando se crea el pedido desde un documento anterior (ej. solicitud de compra), esta opción activa el recalculo de la analítica de acuerdo con los parámetros propios del módulo de destino.
- *centri di costo/ricavo obbligatori*: obliga al usuario a valorar 100% la analítica de cada línea de artículo.
- *valuta la priorità su ogni dimensione*: la opción está disponible solo para empresas con el *Controlling* activo. Si **no** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valoración de los centros empresariales. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorar todas las dimensiones posibles que se hayan configurado en las diversas entidades de origen (es decir, la cuenta contable, del artículo, del almacén, del proveedor).

### Guias de compra (Bolle di acquisto)
En los parámetros del módulo, pestaña *analitica*, tenemos la posibilidad de definir la prioridad de valoración de los centros entre:
- *tipo fatturato*, es decir, en relación con el plan de cuentas asociado al volumen de compras del artículo.
- *anagrafica articoli*, es decir, en relación con el artículo seleccionado.
- *anagrafica*, proveedor titular del pedido.
- *magazzino*, es decir, el almacén vinculado a la línea del artículo.
Además, se presentan las siguientes opciones:
- *ricalcolo*: cuando se crea el pedido desde un documento anterior (ej. pedido a proveedor), esta opción activa el recalculo de la analítica de acuerdo con los parámetros propios del módulo de destino.
- *valuta la priorità su ogni dimensione*: la opción está disponible solo para empresas con el *Controlling* activo. Si **no** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valoración de los centros empresariales. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorar todas las dimensiones posibles que se hayan configurado en las diversas entidades de origen (es decir, la cuenta contable, del artículo, del almacén, del proveedor).

En el procedimiento **creazione ddt da ricevimento merci***, está disponible el parámetro de ***Recalculo de centros de costo/ingreso (Ricalcolo centri di costo/ricavo)***, que activa el recalculo de la analítica de acuerdo con los parámetros propios del módulo de destino.

### Facturas de compra (Fatture di acquisto)
En los parámetros del módulo, pestaña *analitica*, tenemos la posibilidad de definir la prioridad de valoración de los centros entre:
- *tipo fatturato*, es decir, en relación con el plan de cuentas asociado al volumen de compras del artículo.
- *anagrafica articoli*, es decir, en relación con el artículo seleccionado.
- *anagrafica*, proveedor titular del pedido.
- *magazzino*, es decir, el almacén vinculado a la línea del artículo.
Además, se presentan las siguientes opciones:
- *ricalcolo*: cuando se crea el pedido desde un documento anterior (ej. guia de compra), esta opción activa el recalculo de la analítica de acuerdo con los parámetros propios del módulo de destino.
- *valuta la priorità su ogni dimensione*: la opción está disponible solo para empresas con el *Controlling* activo. Si **no** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valoración de los centros empresariales. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorar todas las dimensiones posibles que se hayan configurado en las diversas entidades de origen (es decir, la cuenta contable, del artículo, del almacén, del proveedor).

En el procedimiento ***Creación de Facturas a partir de Recepción de Mercancías (Creazione Fatture da Ricevimento Merci)***, está disponible el parámetro de ***Recalculo de centros de costo/ingreso (Ricalcolo centri di costo/ricavo)***, que activa el recalculo de la analítica de acuerdo con los parámetros propios del módulo de destino.

En el procedimiento **valorizzazione ddt di acquisto***, está disponible el parámetro de ***Recalculo de centros de costo/ingreso (Ricalcolo centri di costo/ricavo)***, que activa el recalculo de la analítica de acuerdo con los parámetros propios del módulo de destino.

En el procedimiento **valorizzazione ddt di acquisto e di rientro***, está disponible el parámetro de ***Recalculo de centros de costo/ingreso (Ricalcolo centri di costo/ricavo)***, que activa el recalculo de la analítica de acuerdo con los parámetros propios del módulo de destino.

## Área de ventas (Area vendite)
En el área de ventas, las configuraciones están disponibles para los Pedidos de clientes, las Guias de venta y las Facturas de venta.

### Ofertas de venta (Offerte di vendita)

### Pedidos de clientes (Ordini clienti)
En los parámetros del módulo, pestaña *analitica*, tenemos la posibilidad de definir la prioridad de valoración de los centros entre:
- *tipo fatturato*, es decir, en relación con el plan de cuentas asociado al volumen de ventas del artículo.
- *anagrafica articoli*, es decir, en relación con el artículo seleccionado.
- *anagrafica*, proveedor titular del pedido.
- *magazzino*, es decir, el almacén vinculado a la línea del artículo.
Además, se presentan las siguientes opciones:
- *valuta la priorità su ogni dimensione*: la opción está disponible solo para empresas con el *Controlling* activo. Si **no** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valoración de los centros empresariales. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorar todas las dimensiones posibles que se hayan configurado en las diversas entidades de origen (es decir, la cuenta contable, del artículo, del almacén, del cliente).

### Guias de venta (Bolle di vendita)
En los parámetros del módulo, pestaña *analitica*, tenemos la posibilidad de definir la prioridad de valoración de los centros entre:
- *tipo fatturato*, es decir, en relación con el plan de cuentas asociado al volumen de ventas del artículo.
- *anagrafica articoli*, es decir, en relación con el artículo seleccionado.
- *anagrafica*, proveedor titular del pedido.
- *magazzino*, es decir, el almacén vinculado a la línea del artículo.
Además, se presentan las siguientes opciones:
- *valuta la priorità su ogni dimensione*: la opción está disponible solo para empresas con el *Controlling* activo. Si **no** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valoración de los centros empresariales. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorar todas las dimensiones posibles que se hayan configurado en las diversas entidades de origen (es decir, la cuenta contable, del artículo, del almacén, del cliente).

### Facturas de venta (Fatture di vendita)
En los parámetros del módulo, pestaña *analitica*, tenemos la posibilidad de definir la prioridad de valoración de los centros entre:
- *tipo fatturato*, es decir, en relación con el plan de cuentas asociado al volumen de ventas del artículo.
- *anagrafica articoli*, es decir, en relación con el artículo seleccionado.
- *anagrafica*, proveedor titular del pedido.
- *magazzino*, es decir, el almacén vinculado a la línea del artículo.
Además, se presentan las siguientes opciones:
- *valuta la priorità su ogni dimensione*: la opción está disponible solo para empresas con el *Controlling* activo. Si **no** está presente, ***FluentisERP*** aplicará la prioridad de búsqueda y detendrá su evaluación en la primera entidad que permita cualquier valoración de los centros empresariales. **Si está presente**, en cambio, ***FluentisERP*** aplicará la prioridad para valorar todas las posibles [*dimensiones*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) que se hayan configurado en las diversas entidades de origen (es decir, la cuenta contable, del artículo, del almacén, del cliente).

En el procedimiento ***Creación desde DDT (Creazione da DDT)*** está disponible el parámetro de ***Recalculo de centros de costo/ingreso (Ricalcolo centri di costo/ricavo)***, que activa el recalculo de la analítica de acuerdo con los parámetros propios del módulo de destino.