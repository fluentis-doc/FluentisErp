---
title: Búsqueda de Planes de control
sidebar_position: 1
ai_generated: true
---

El filtro se encuentra en la ruta **Calidad > Controles de artículo > Planes de control<!-- Piani di controllo -->**.  

En los **Planes de control<!-- Piani di controllo -->** se definen secuencias de *Pruebas planificadas<!-- Prove pianificate -->* que deben realizarse en: recepción de materiales, durante el flujo productivo o durante el ensayo final para verificar la idoneidad de los materiales recibidos o de los artículos producidos.  
Se pueden definir *Planes de control<!-- Piani di controllo -->* para cada artículo de forma individual, por grupos o para asociar a *Fases* de los *Ciclos de trabajo<!-- Cicli di lavorazione -->* y diferenciarlos por *Cliente* y *Proveedor*.  
Está prevista la gestión de *Revisiones* del *Plan de control<!-- Piano di controllo -->*.

El filtro de datos permite insertar nuevos *Planes de control<!-- Piani di controllo -->* o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.  

### ![](/img/neutral/common/search.png) Búsqueda de Planes de control<!-- Ricerca Piani di controllo -->

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, simplemente haga clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados dentro de la cuadrícula de resultados.  

### ![](/img/neutral/common/new.png) Inserción de Planes de control<!-- Inserimento Piani di controllo -->

Para poder insertar nuevos *Planes de control<!-- Piani di controllo -->* es necesario pulsar el botón **Nuevo<!-- Nuovo -->**.  

### ![](/img/neutral/common/edit.png) Modificación o ![](/img/neutral/common/view.png) Visualización de Planes de control<!-- Modifica o Visualizzazione Piani di controllo -->

Para abrir la gestión, desde la cuadrícula de resultados, es necesario hacer doble clic en la fila deseada o, seleccionando una o más filas, pulsar los botones **Modificar<!-- Modifica -->** o **Visualizar<!-- Visualizza -->**.  

*Botones específicos*: 

### ![](/img/neutral/common/duplicate.png) Duplicar Plan de control<!-- Duplica Piano di controllo -->

Para duplicar un *Plan de control<!-- Piano di controllo -->* existente en un nuevo *Plan de control<!-- Piano di controllo -->* es necesario hacer clic en la cuadrícula sobre el *Plan de control<!-- Piano di controllo -->* que se desea duplicar y pulsar el botón **Duplicar Plan de control<!-- Duplica Piano di controllo -->**. Solo se puede duplicar un *Plan de control<!-- Piano di controllo -->* a la vez. Se mostrará una solicitud de:  
> **Tipo de plan de control<!-- Tipo piano di controllo -->**: es el *Tipo de plan de control<!-- Tipo piano di controllo -->* del nuevo *Plan de control<!-- Piano di controllo -->* (dato obligatorio), se propone el *Tipo de plan de control<!-- Tipo piano di controllo -->* del *Plan de control<!-- Piano di controllo -->* de origen.  
> **Número<!-- Numero -->**: es el *Número<!-- Numero -->* progresivo del nuevo *Plan de control<!-- Piano di controllo -->* (dato obligatorio), se propone de acuerdo a lo previsto en la *Numeración<!-- Numerazione -->* asociada al *Tipo de plan de control<!-- Tipo piano di controllo -->* y a la fecha actual.  
> **Duplicar con trazabilidad<!-- Duplica con rintracciabilità -->**: indica si desea mantener la relación/trazabilidad, del *Plan de control<!-- Piano di controllo -->* de destino, en el *Plan de control<!-- Piano di controllo -->* de origen y en particular en la pestaña *Planes de control relacionados<!-- Piani di controllo correlati -->*.  

Luego, presione el botón **OK** o el botón **Cancelar<!-- Cancel -->** si desea continuar o no con la duplicación.  
Al finalizar el proceso, se visualiza el nuevo *Plan de control<!-- Piano di controllo -->*.

### ![](/img/neutral/common/execute.png) Crear nueva revisión<!-- Crea nuova revisione -->

Para poder crear una nueva *Revisión<!-- Revisione -->* de un *Plan de control<!-- Piano di controllo -->* existente, es necesario hacer clic en la cuadrícula sobre el *Plan de control<!-- Piano di controllo -->* del que se desea crear la nueva *Revisión<!-- Revisione -->* y pulsar el botón **Crear nueva edición<!-- Crea nuova edizione -->**. Solo se puede crear una *Revisión<!-- Revisione -->* para un solo *Plan de control<!-- Piano di controllo -->* a la vez.  
Se crea un nuevo *Plan de control<!-- Piano di controllo -->*, con toda la información del *Plan de control<!-- Piano di controllo -->* de origen pero con el índice de *Revisión<!-- Revisione -->* incrementado y la *Fecha de inicio de validez<!-- Data di inizio validità -->* igual a la fecha actual.  
El *Plan de control<!-- Piano di controllo -->* de origen concluye su vigencia configurando automáticamente la *Fecha de fin de validez<!-- Data fine validità -->* igual a la fecha actual.  
Al finalizar el proceso se visualiza la nueva *Revisión<!-- Revisione -->* del *Plan de control<!-- Piano di controllo -->*.

### Crear nueva Ficha técnica<!-- Crea nuova Scheda tecnica -->

Desde el *Plan de control<!-- Piano di controllo -->* es posible crear una *Ficha técnica<!-- Scheda tecnica -->*; para hacerlo, es necesario hacer clic en la cuadrícula sobre el *Plan de control<!-- Piano di controllo -->* del cual se desea duplicar y pulsar el botón **Crear nueva Ficha técnica<!-- Crea nuova Scheda tecnica -->**. Solo se puede crear una nueva *Ficha técnica<!-- Scheda tecnica -->* para un solo *Plan de control<!-- Piano di controllo -->* a la vez.  
Se crea una nueva *Ficha técnica<!-- Scheda tecnica -->*, con toda la información del *Plan de control<!-- Piano di controllo -->* de origen pero con el índice de *Revisión<!-- Revisione -->* igual a *cero* y con la *Fecha de inicio de validez<!-- Data di inizio validità -->* igual a la fecha actual. Se mostrará una solicitud de:  
> **Tipo de ficha<!-- Tipo scheda -->**: es el *Tipo de ficha<!-- Tipo scheda -->* de la nueva *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio).  
> **Del cliente<!-- Del cliente -->**: es el *Cliente* de la nueva *Ficha técnica<!-- Scheda tecnica -->*, se propone la cuenta *Cliente* del *Plan de control<!-- Piano di controllo -->* de origen (solo si es de *Tipo cuenta cliente<!-- Tipo conto cliente -->*).  
> **Nuevo código<!-- Nuovo codice -->**: es el *Código<!-- Codice -->* de la nueva *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio), se sugiere de acuerdo a lo previsto por el *Método de Codificación<!-- Metodo di Codifica -->* asociado al *Tipo de ficha técnica<!-- Tipo scheda tecnica -->*.  
> **Rev.<!-- Rev. -->**: es el índice de *Revisión<!-- Revisione -->* de la nueva *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio), se sugiere en *cero*.  
> **Crear manteniendo la trazabilidad<!-- Crea mantenendo la rintracciabilità -->**: indica si desea mantener la relación/trazabilidad, en la *Ficha técnica<!-- Scheda tecnica -->* de destino, con el *Plan de control<!-- Piano di controllo -->* de origen y en particular en la pestaña *Fichas relacionadas<!-- Schede correlate -->*.  

Luego, presione el botón **OK** o el botón **Cancelar<!-- Cancel -->** si desea continuar o no con la creación.  
Al finalizar el proceso, la nueva *Ficha técnica<!-- Scheda tecnica -->* se visualiza.  

### Solicitudes de Planes de control<!-- Richieste Piani di controllo -->
Con este botón es posible gestionar *Solicitudes de Planes de control<!-- Richieste Piani di controllo -->*.  

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).