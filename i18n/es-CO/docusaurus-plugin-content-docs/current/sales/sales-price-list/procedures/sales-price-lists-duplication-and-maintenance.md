---
title: duplica e manutenzione listini di vendita
sidebar_position: 6
---

Este procedimiento permite actualizar los artículos de las listas de precios.       

### Filtros disponibles

En la sección de filtros se puede elegir visualizar:           
- **Todos** los tipos de lista,       
- solo las listas de tipo **Genérico** o        
- solo las listas **Personalizadas para cliente**.        

Según la elección, en la parte derecha se activa la búsqueda por **tipo listino** o por **Cliente**.         
Si se completa el filtro por *data inizio validità*, la aplicación mostrará los artículos de las listas válidas a la fecha ingresada. En caso contrario, se mostrarán todos los artículos, incluidos los de listas que ya no son válidas.         
También se puede filtrar por: fecha de fin de validez, divisa, artículo, código de barras del artículo o solo por los artículos que han sido movidos, es decir, vinculados a documentos desde una cierta fecha.

### Cuadrícula de artículos (Griglia articoli)

Una vez seleccionados los filtros deseados, al hacer clic en Buscar (Ricerca), la cuadrícula se poblara con todos los artículos que cumplen con las características solicitadas. Las columnas de la cuadrícula son:      
- **tipo listino**: muestra el tipo de lista, ya sea genérico, con la respectiva **Descripción**.      
- **Cuenta/Subcuenta/Descripción (Conto/Sottoconto/Descrizione)**: contiene el titular de la lista, si es personalizada.       
- **Clase/Código/Descripción del artículo (Classe/Codice/Descrizione articolo)**: datos identificativos del artículo de la lista.      
- **codice divisa**: muestra la divisa de la lista.    
- **codice unità di misura**: este dato también se toma de la lista.      
- **prezzo**: en este campo se indica el precio del artículo presente en la lista.        
- **sconto**: en este campo se indica el posible descuento presente en la lista (solo descuento fijo).
- **prezzo netto**: en esta columna se indica el precio neto de descuentos.    
- **data validità da**: en este campo se indica la fecha de inicio de validez de la lista.      
- **data validità a**: en este campo se indica la posible fecha de finalización de validez.      
- **data ultimo documento**: en este campo se inserta la fecha del DDT más reciente que presenta artículo y lista.    

### Barra de herramientas (Barra degli strumenti)

Los botones disponibles en la barra de herramientas son los siguientes:     
- **aggiorna**: abre un pop-up para continuar con la actualización del precio del artículo en la lista; se deben especificar:
1. **data inizio validità** de las líneas de la lista a actualizar (posiblemente también una **data fine validità** que no es obligatoria).
2. **arrotondamento** que contiene las políticas de variación de precios y descuentos de la lista, o bien
3. **Porcentaje de incremento (Percentuale di incremento)**, eliminando el código de redondeo e ingresando manualmente el porcentaje.
4. **OK** para ejecutar la actualización.

:::note Nota
Si no se especifica la Fecha de inicio de validez, la actualización no dará ningún resultado y no se ejecutará.
:::  

- **chiudi listini**: abre un nuevo formulario para forzar la *data fine validità* para las líneas de la lista seleccionadas; la *Fecha de fin de validez* debe ser mayor a la fecha más reciente del último documento relacionado con las líneas de lista a cerrar (hacer expirar).      
- **duplica listini**: abre un pop-up y, para las líneas de lista seleccionadas, crea o añade nuevas líneas a una nueva lista o a una lista ya existente; es posible, para las líneas seleccionadas, crear una nueva lista especificando: si se desea crear una lista *generale* o *Personalizada (Personalizzato)*, el *tipo listino*, la *data validità da* y la *Divisa*. Con el indicador *mantieni le stesse date del listino di origine* se crea una lista con tipología diferente pero con las mismas fechas de validez.
- **sconti**: abre un pop-up para asignar a las líneas seleccionadas *Descuentos* de línea, añadiéndolos a los existentes o reemplazándolos utilizando la casilla de verificación *cancella sconti precedenti*.
- **riapertura listini**: si se usa, en el caso de líneas de lista con *data fine validità*, esas líneas se devolverán a la lista *sin* fecha de fin de validez.