---
title: Búsqueda de Fichas Técnicas (Ricerca Schede tecniche)
sidebar_position: 1
---

El filtro se encuentra en la ruta **Calidad > Controles de artículo > Fichas técnicas (Qualità > Controlli articolo > Schede tecniche)**.

Las **schede tecniche** catalogan toda la información que describe las características de los productos asociados como adecuados para un contrato, una especificación funcional o un determinado uso. Pueden ser personalizables por *cliente*.  
Se gestionan las *revisioni* y la trazabilidad entre diferentes *schede tecniche*.  
A estándar, están disponibles los reportes de: *scheda tecnica* (para uso interno) y *scheda prodotto* (para uso comercial).

El filtro de datos permite ingresar nuevas *schede tecniche* o buscar las ya existentes para visualizarlas, modificarlas o eliminarlas.

### ![](/img/neutral/common/search.png) Búsqueda de Fichas Técnicas

El formulario consta de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

### ![](/img/neutral/common/new.png) Ingreso de Fichas Técnicas

Para poder ingresar nuevas *schede tecniche* es necesario presionar el botón **nuovo**.

### ![](/img/neutral/common/edit.png) Modificación o ![](/img/neutral/common/view.png) Visualización de Fichas Técnicas

Para abrir la gestión de la cuadrícula de resultados, es necesario hacer doble clic en la fila de nuestro interés o, seleccionando una o más filas, presionar los botones **modifica** o **visualizza**.

*Botones específicos*:

### ![](/img/neutral/common/duplicate.png) Duplicar Ficha

Para poder duplicar una *scheda tecnica* existente en una nueva *scheda tecnica* es necesario hacer clic en la cuadrícula sobre la *scheda tecnica* de la que se desea duplicar y presionar el botón **duplica scheda**. Se puede duplicar una sola *scheda tecnica* a la vez. Se mostrará una solicitud de:  
> **tipo scheda**: es el *tipo scheda* de la nueva *scheda tecnica* (dato obligatorio).  
> **del cliente**: es el *cliente* de la nueva *scheda tecnica*, se propone el número de *cliente* de la *scheda tecnica* de origen.  
> **nuovo codice**: es el *codice* de la nueva *scheda tecnica* (dato obligatorio), se propone según lo previsto por el *metodo di codifica* asociado al *tipo scheda tecnica*.  
> **duplica con rintracciabilità**: indica si se desea mantener relación/trazabilidad, en la *scheda tecnica* de origen (tabulador *schede correlate* de la *scheda tecnica* de origen) y en la *scheda tecnica* de destino (en el expander *origine dati scheda* presente en los *dati di testata*).  

Después, presione el botón **OK** o el botón **cancel** si desea continuar con la actividad de duplicación o no.  
La nueva *scheda tecnica* creada tendrá la *revisione* igual a *zero*.  
Al final del procesamiento, se visualizará la nueva *scheda tecnica*.

### ![](/img/neutral/common/execute.png) Crear nueva revisión

Para poder crear una nueva *revisione* de una *scheda tecnica* existente, es necesario hacer clic en la cuadrícula sobre la *scheda tecnica* de la que se desea crear una nueva *revisione* y presionar el botón **crea nuova revisione**. Se puede crear una nueva *revisione* para una sola *scheda tecnica* a la vez.  
Se crea una nueva *scheda tecnica*, con toda la información de la *scheda tecnica* de origen, pero con el índice de *revisione* incrementado y la *Fecha de inicio de validez (Data di inizio validità)* igual a la fecha actual.  
La *scheda tecnica* de origen pierde su validez, la *data fine validità* se establece como igual a la fecha actual.  
Al final del procesamiento, se visualizará la nueva *revisione* de la *scheda tecnica*.

### ![](/img/neutral/common/item-web.png) Crear Plan de Control

Desde la *scheda tecnica* es posible crear un *piano di controllo*; para hacerlo, es necesario hacer clic en la cuadrícula sobre la *scheda tecnica* de la que se desea duplicar y presionar el botón **Crear nuevo Plan de Control (Crea nuovo Piano di controllo)**. Se puede crear un nuevo *piano di controllo* para una sola *scheda tecnica* a la vez.  
Se crea un nuevo *piano di controllo*; se copian solamente las *proprietà* de origen con el indicador *Pruebas a realizar (Prove da rilevare)*; toda la otra información de la *scheda tecnica* se copia pero con el índice de *revisione* igual a *zero* y con la *Fecha de inicio de validez (Data di inizio validità)* igual a la fecha actual. Se mostrará una solicitud de:  
> **tipo piano di controllo**: es el *tipo piano di controllo* del nuevo *piano di controllo* (dato obligatorio).  
> **numero**: es el *numero* progresivo del nuevo *piano di controllo* (dato obligatorio), se propone según lo previsto por la *numerazione* asociada al *tipo piano di controllo* y a la fecha actual.  
> **crea mantenendo la rintracciabilità**: indica si se desea mantener relación/trazabilidad de la *scheda tecnica* de origen en el *piano di controllo* de destino (en el expander *origine piano di controllo* presente en los *dati di testata*).  

Después, presione el botón **OK** o el botón **cancel** si desea continuar con la actividad de creación o no.  
Al final del procesamiento, se visualizará el nuevo *piano di controllo*.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).