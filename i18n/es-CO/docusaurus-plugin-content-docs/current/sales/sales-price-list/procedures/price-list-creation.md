---
title: creazione listini di vendita
sidebar_position: 3
---

Este procedimiento permite crear nuevas listas de precios, comenzando desde los artículos de documentos preexistentes. En la parte superior de la máscara están los filtros para buscar los Datos de origen: elegir entre Lista de precios, Lista de compras, Registro de artículos, DDT de compra, Facturas de compra u Órdenes a proveedores; al expandir la Búsqueda de documentos, también es posible filtrar aún más para buscar una lista específica. Para visualizar los resultados, presione Buscar listas de precios.

En la primera cuadrícula se mostrarán los documentos resultantes de la búsqueda, y al seleccionar una fila, en la cuadrícula inferior se mostrarán los artículos del documento. Analicemos las columnas:  
- **Clase/Código/Descripción del artículo (Classe/Codice/Descrizione articolo)**: datos identificativos del artículo, seguidos de **variante**, **quantità**, **um**, **marca**.  
- **non considerare**: los artículos que presenten este valor marcado no serán modificados en la nueva lista de precios.  
- **costo precedente**: propone el costo del último documento del tipo seleccionado en los datos de origen.  
- **Precio inicial (Prezzo ini.)**: identifica el precio que estaba presente en el documento de origen.  
- **Precio inicial con IVA (Prezzo ivato ini.)**: se visualiza el precio inicial con IVA incluido.  
- **Precio no redondeado (Prezzo non arr.)**: propone el precio que incluye el incremento (o decremento) decidido para la nueva lista de precios.  
- **Precio no redondeado con IVA (Prezzo ivato non arr.)**: precio no redondeado que incluye IVA.  
- **mask**: visualiza la máscara a la que está sujeto el artículo individual.  
- **Precio redondeado (Prezzo arrotondato)**: se propone el *Precio no redondeado (Prezzo non arr.)* redondeado según la *mask* definida.  
- **Precio redondeado con IVA (Prezzo ivato arrotondato)**: se propone el *Precio inicial con IVA (Prezzo ivato non arr.)* redondeado según la *mask* definida.  
- **Precio de lista actual (Prezzo listino attuale)**: si en la sección *listino da creare* (en la parte inferior) se selecciona **Añadir los datos seleccionados a una lista ya creada (Accodare i dati selezionati ad un listino già creato)**, en la columna se visualizará el precio que el artículo tiene en la lista seleccionada, si está presente.

En la sección inferior se requieren los datos obligatorios de la *listino da creare*: el tipo de lista (si es genérica o personalizada), el Tipo o Cliente según el tipo, la Fecha de inicio de validez (eventualmente también una Fecha de finalización de validez), la Divisa, los Redondeos a aplicar y los indicadores:  
- **prezzo ivato**: significa que la lista a crear será una lista con precios ya incorporados de IVA.  
- **listino minimo**: indicador informativo que indica que se creará una lista de precios mínimos de intento de venta.

Estos datos pueden ser ingresados manualmente, o al hacer clic en el botón **Añadir los datos seleccionados a una lista ya creada (Accodare i dati selezionati ad un listino già creato)** se ingresarán automáticamente, ya que se abrirá un pop-up en el cual seleccionar la lista de la cual tomar los datos del registro. Esta operación hará que, al iniciar el procedimiento, los artículos se agregarán a la lista preexistente y no se creará una nueva lista; si en la lista preexistente seleccionada algunos artículos ya existen, se le preguntará al usuario si desea mantener el precio de lista viejo o actualizarlo.

La creación de las listas de precios se realiza con los botones presentes en la barra de ribbon:  
- **Creación de todos los artículos (Creazione di tutti gi articoli)**: la lista se crea con todos los artículos presentes en el documento seleccionado en la primera cuadrícula.  
- **creazione degli articoli selezionati**: la lista se crea con los artículos seleccionados en la segunda cuadrícula.

Una vez creada la nueva lista de precios, Fluentis preguntará si desea abrirla o no.

En la barra de ribbon hay más botones para la gestión de la máscara:  
- **aggiornamento mask**: actualiza en el registro del artículo la *mask* que ha sido asociada al artículo individual destacado.  
- **riprendi mask dai range**: en caso de variación del campo *arrotondamenti* en la sección *Listas a crear (Listini da creare)*, este botón recalcula la *mask* en la segunda cuadrícula, proponiendo la *mask* del redondeo seleccionado.  
- **Activación/desactivación del indicador No considera (Attivazione\disattivazione flag Non considera)**: activa o desactiva el indicador *non considerare* de los artículos destacados.