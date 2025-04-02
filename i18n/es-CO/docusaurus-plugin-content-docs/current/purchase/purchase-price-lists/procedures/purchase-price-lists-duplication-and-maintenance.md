---
title: duplica e manutenzione listini fornitori
sidebar_position: 3
---

Este procedimiento permite actualizar las listas de precios de los proveedores.         

### Filtros disponibles (Filtri disponibili)

Es posible filtrar los resultados por: *Fecha de inicio/fin de validez*, *Divisa*, *Artículo*, *barcode* del artículo o solo por los artículos que han sido *movimentados* (es decir, conectados a documentos desde una cierta fecha).         

Si se completa el filtro por *Fecha de inicio de validez*, la aplicación mostrará solo los artículos de las listas válidas a la fecha ingresada. De lo contrario, se mostrarán todos los artículos, incluyendo los de listas ya no válidas.         

### Cuadrícula de artículos (Griglia articoli)

Una vez seleccionados los filtros deseados, al hacer clic en *Buscar (Ricerca)*, la cuadrícula se llenará con todos los artículos que cumplen con las características solicitadas. Las columnas de la cuadrícula son:      
- **Cuenta/Subcuenta/Descripción (Conto/Sottoconto/Descrizione)**: contiene el titular de la lista, si es personalizada.        
- **Clase/Código/Descripción del artículo (Classe/Codice/Descrizione articolo)**: datos identificativos del artículo en la lista.      
- **divisa**: muestra la divisa de la lista.    
- **unità di misura**: este dato también se toma de la lista.      
- **prezzo**: en este campo se muestra el precio del artículo presente en la lista.        
- **sconto**: en este campo se muestra cualquier descuento presente en la lista (solo descuento fijo).  
- **prezzo netto**: en esta columna se muestra el *Precio* neto de los *Descuentos*.    
- **data validità da**: en este campo se muestra la fecha de inicio de validez de la lista.      
- **data validità a**: en este campo se muestra la fecha de fin de validez si existe.      
- **data ultimo documento**: en este campo se inserta la fecha del DDT más reciente que presenta el artículo y la lista.    
- **quantità**: indica la cantidad a la que se refiere el precio.   
- **Variante/Descripción de la variante (Variante/Descrizione variante)**: muestra el código y la descripción de la variante, si está presente.   
- **movimento**: el indicador activo indica que se han registrado movimientos de almacén con este artículo y lista.   

### Barra de herramientas (Barra degli strumenti)

Los botones disponibles en la barra de ribbon son los siguientes:     
- **aggiorna**: abre un pop-up para continuar con la actualización del precio del artículo en la lista; se deben especificar:
1. **data inizio validità** de las filas de la lista a actualizar (posiblemente también una **data fine validità** que no es obligatoria)
2. **arrotondamento** que contiene las políticas de variación de precios y descuentos de la lista, o
3. **Porcentaje de incremento (Percentuale di incremento)**, eliminando el código de redondeo e ingresando manualmente el porcentaje (o el valor).
4. **OK** para ejecutar la actualización.

:::important Recuerda (Ricorda)
Si no se especifica la *Fecha de inicio de validez*, la actualización no dará ningún resultado y no se ejecutará.
:::  

- **chiudi**: abre un pop-up en el que se debe ingresar la *Fecha de fin de validez* para las filas de la lista seleccionadas; la *Fecha de fin de validez* debe ser mayor que la fecha más reciente del último documento relacionado con las filas de la lista a cerrar (hacer expirar).      
- **duplica listini**: abre un pop-up y, para las filas de la lista seleccionadas, crea o agrega nuevas filas a una nueva lista o a una lista ya existente; es posible, para las filas seleccionadas, crear una nueva lista especificando el *fornitore*, que puede ser diferente al de la lista original, la *data validità da* y la *divisa*; con el indicador *mantieni le stesse date del listino di origine*, se crea una lista dirigida a un proveedor diferente pero con las mismas fechas de validez.
- **sconti**: abre un pop-up para asignar a las filas seleccionadas *sconti* de fila, añadiéndolos a los presentes o sustituyéndolos utilizando la casilla de verificación *cancella sconti precedenti*.
- **riapertura listini**: si se utiliza, en caso de filas de la lista con *data fine validità*, tales filas se devolverán a la lista *sin* fecha de fin de validez.