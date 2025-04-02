---
title: registrazione ddt di acquisto in magazzino
sidebar_position: 1
keywords:
- DDT
- Almacén (Magazzino)
---

El procedimiento se abre a través del camino **Compras > DDT de compra > Procedimientos > registrazione ddt di acquisto in magazzino** y permite ejecutar/restaurar las operaciones de carga en el almacén de los artículos presentes en el DDT.

:::note NOTA
El DDT de Compra también se puede registrar en el almacén mediante el botón de [*Carga automática en el almacén*](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) presente dentro del documento.
:::

### Filtro

Ofrece la posibilidad de insertar filtros para buscar los DDT de compra, seleccionarlos y luego registrarlos en el almacén.

- **data registrazione magazzino**: permite especificar la fecha relacionada con el registro en el almacén.

:::important Recuerda
Si en los [Parámetros de DDT de compra](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters#carico) > pestaña Carga el indicador **crea registrazione con la data del documento** está activo, el registro en el almacén se realizará siempre con la fecha del documento, ignorando la *Fecha de registro en almacén* ingresada en este formulario.  
Si el indicador en los parámetros no está activo, se utilizará la *Fecha de carga* ingresada manualmente en el encabezado del DDT.  
Si la *Fecha de carga* no está valorada, el registro en el almacén se creará con la *Fecha de registro en almacén* ingresada en este formulario.
:::

*Botones específicos*:

> **ricerca**: permite buscar los DDT para registrar en el almacén.  
> **registrazione**: permite realizar la carga en el almacén de los DDT seleccionados en la cuadrícula superior.


### Parámetros

Si algunas líneas del artículo del DDT no tienen almacén y causa para la carga, a través de esta máscara el usuario tiene la posibilidad de elegir cómo tratar las excepciones.

Las opciones disponibles son:

- **No realizar el registro del DDT completo (Non effettuare la registrazione del DDT per intero)**: no permite la carga parcial del documento;  
- **tralasciare l'articolo senza magazzino e causale**: permite la carga parcial del documento;  
- **Aceptar como almacén y causa los siguientes datos (Accettare come magazzino e causale i seguenti dati)**: asegura la carga completa del documento. Para todos los artículos encontrados sin almacén y causa en los DDT seleccionados, establece los datos ingresados inmediatamente después, en los campos: *magazzino* y *causale*.

:::important Recuerda
Si en los [Parámetros de DDT de compra](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters#carico) > pestaña Carga el indicador **priorità magazzino e causale di carico** está activo, siempre se utilizarán el *Almacén* y la *Causa* ingresados en los parámetros, ignorando los presentes en el DDT para cada línea de artículo.
:::

*Botón específico*

> **salva parametri**: permite guardar los parámetros establecidos para el registro.

### Resumen (Riepilogativo)

En esta pestaña, el usuario tiene la posibilidad de buscar, visualizar y anular las operaciones de registro realizadas, tanto las efectuadas mediante esta procedimiento, como las realizadas desde el interior del documento mediante el botón de *Carga automática*.

Los datos en las cuadrículas inferiores, **DDT** y **Registro**, corresponden al registro de carga seleccionado en la cuadrícula superior (después de filtrar los datos). En estas dos cuadrículas se tiene la posibilidad de visualizar el DDT y su registro en el almacén mediante un doble clic en la fila.

*Botones específicos*:
> **ricerca**: para buscar los DDT cargados. El resultado de este procedimiento se visualiza en las cuadrículas de resultados.  
> **cancella registrazioni**: para restaurar todo el registro de carga seleccionado.  
> **annulla ddt**: para cancelar la carga de un documento seleccionado en el registro de carga. Esta operación también implicará la anulación del registro en el almacén si corresponde a un solo DDT o la actualización de sus datos si corresponde a más DDT.