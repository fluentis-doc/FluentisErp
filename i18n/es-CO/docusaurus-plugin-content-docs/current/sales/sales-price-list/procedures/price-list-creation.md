---
title: Creación de listas de precios de venta
sidebar_position: 3
ai_generated: true
---

Este procedimiento permite crear nuevas listas de precios de venta<!-- listini di vendita -->, partiendo de los artículos<!-- articoli --> de los documentos preexistentes.
En la parte superior de la pantalla se encuentran los filtros para buscar los Datos de origen<!-- Dati di origine -->: elegir entre Lista de precios de venta<!-- Listino di vendita -->, Lista de precios de compra<!-- Listino di acquisto -->, Maestro de artículos<!-- Anagrafica articoli -->, Remisiones de compra<!-- DDT di acquisto -->, Facturas de compra<!-- Fatture di acquisto --> u Órdenes de proveedores<!-- Ordini fornitori -->; desplegando la Búsqueda de documento<!-- Ricerca documento --> es posible filtrar aún más para buscar una lista específica. Para visualizar los resultados pulse Buscar listas<!-- Ricerca listini -->.

:::note Atención<!-- Attenzione -->
El campo **Redondeos<!-- Arrotondamenti -->**, ubicado en la parte inferior de la pantalla, es un campo obligatorio. Para poder visualizar los datos y proceder con la creación de las listas<!-- listini -->, es necesario seleccionar uno de los [redondeos](/docs/sales/sales-price-list/procedures/rounding) previamente codificados en la pantalla correspondiente.
:::

En la primera cuadrícula se mostrarán los documentos resultantes de la búsqueda, y al seleccionar una fila, en la cuadrícula inferior se mostrarán los artículos<!-- articoli --> del documento. Analicemos las columnas:       
- **Clase/Código/Descripción del artículo<!-- Classe/Codice/Descrizione articolo -->**: datos identificativos del artículo<!-- articolo -->, seguidos de **Variante**, **Cantidad<!-- Quantità -->**, **UM**, **Marca**.       
- **No considerar<!-- Non considerare -->**: los artículos<!-- articoli --> que tengan este valor marcado no se modificarán en la nueva lista de precios<!-- listino -->.     
- **Costo anterior<!-- Costo precedente -->**: propone el costo del último documento del tipo seleccionado en datos de origen<!-- dati di origine -->.     
- **Precio inicial<!-- Prezzo ini. -->**: identifica el precio que estaba presente en el documento de origen<!-- documento di origine -->.     
- **Precio inicial con IVA<!-- Prezzo ivato ini. -->**: se muestra el precio inicial con IVA incluido.      
- **Precio sin redondear<!-- Prezzo non arr. -->**: propone el precio incluido del incremento (o decremento) decidido para la nueva lista de precios<!-- listino -->.    
- **Precio con IVA sin redondear<!-- Prezzo ivato non arr. -->**: precio sin redondear incluido el IVA.     
- **Máscara<!-- Mask -->**: muestra la máscara a la que está sujeto el artículo<!-- articolo --> individual.       
- **Precio redondeado<!-- Prezzo arrotondato -->**: se propone el *Precio sin redondear* redondeado según la *Máscara* definida.      
- **Precio con IVA redondeado<!-- Prezzo ivato arrotondato -->**: se propone el *Precio con IVA sin redondear* redondeado según la *Máscara* definida.     
- **Precio actual de la lista<!-- Prezzo listino attuale -->**: si en la sección *Lista de precios a crear<!-- Listino da creare -->* (abajo) se selecciona **Acoplar los datos seleccionados a una lista ya creada<!-- Accodare i dati selezionati ad un listino già creato -->**, en la columna aparecerá el precio que el artículo<!-- articolo --> tiene en la lista seleccionada, si existe.       

En la sección inferior se solicitan los datos obligatorios de la *Lista de precios a crear<!-- Listino da creare -->*: la tipología de la lista<!-- listino --> (si es genérica o personalizada), el Tipo o Cliente según la tipología, la Fecha de inicio de validez (posiblemente también una Fecha de fin de validez<!-- Data fine validità -->), la Moneda<!-- Divisa -->, los Redondeos<!-- Arrotondamenti --> a aplicar y los flags:         
- **Precio con IVA<!-- Prezzo Ivato -->**: significa que la lista de precios<!-- listino --> a crear será una lista con precios ya incorporando el IVA.       
- **Lista mínima<!-- Listino minimo -->**: flag informativo que indica crear una lista de los precios mínimos de venta tentativa<!-- prezzi minimi di tentata vendita -->.  

Estos datos pueden ingresarse manualmente, o bien, al hacer clic en el botón **Acoplar los datos seleccionados a una lista ya creada<!-- Accodare i dati selezionati ad un listino già creato -->**, se cargarán automáticamente, ya que se abrirá un pop up para seleccionar la lista<!-- listino --> de la que tomar los datos maestros<!-- dati anagrafici -->. Esta operación hará que, al iniciar el procedimiento, los artículos<!-- articoli --> se añadan a la lista existente, y no se creará una nueva; si en la lista existente seleccionada ya existen algunos artículos<!-- articoli -->, se le preguntará al usuario si desea mantener el precio anterior de la lista<!-- prezzo di listino vecchio --> o actualizarlo.           

La creación de las listas de precios<!-- listini --> se realiza con los botones presentes en la cinta de opciones<!-- ribbon bar -->:       
- **Creación de todos los artículos<!-- Creazione di tutti gi articoli -->**: la lista<!-- listino --> se crea con todos los artículos<!-- articoli --> presentes en el documento seleccionado de la primera cuadrícula.         
- **Creación de los artículos seleccionados<!-- Creazione degli articoli selezionati -->**: la lista<!-- listino --> se crea con los artículos<!-- articoli --> seleccionados en la segunda cuadrícula.        

Una vez creada la nueva lista de precios<!-- listino -->, Fluentis preguntará si desea abrirla o no.      

En la cinta de opciones<!-- ribbon bar --> hay otros botones para la gestión de la máscara<!-- mask -->:     
- **Actualizar máscara<!-- Aggiornamento mask -->**: actualiza en el maestro de artículos<!-- anagrafica dell’articolo --> la *Máscara* asociada al artículo<!-- articolo --> resaltado       
- **Tomar máscara desde rangos<!-- Riprendi mask dai range -->**: en caso de variación del campo *Redondeos<!-- Arrotondamenti -->* en la sección *Listas de precios a crear<!-- Listini da creare -->*, este botón recalcula la *Máscara* en la segunda cuadrícula, proponiendo la *Máscara* del Redondeo<!-- Mask dell'Arrotondamento --> seleccionado.             
- **Activar/desactivar flag No considerar<!-- Attivazione\disattivazione flag Non considera -->**: activa o desactiva el flag *No considerar* de los artículos<!-- articoli --> resaltados.