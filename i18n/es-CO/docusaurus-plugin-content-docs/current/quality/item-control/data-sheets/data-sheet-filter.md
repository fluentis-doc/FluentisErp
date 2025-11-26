---
title: Búsqueda de Fichas técnicas
sidebar_position: 1
ai_generated: true
---

El filtro se encuentra en la ruta **Calidad > Controles de artículo > Fichas técnicas<!-- Schede tecniche -->**.   

Las **Fichas técnicas<!-- Schede tecniche -->** catalogan toda aquella información que describe las características de los productos asociados como aptos para un contrato, para una especificación funcional o para un determinado uso, y pueden personalizarse por *Cliente*.   
Se gestionan las *revisiones*<!-- revisioni --> y la trazabilidad<!-- rintracciabilità --> entre *Fichas técnicas<!-- Schede tecniche -->* diferentes.   
Por defecto, están disponibles los reportes de: *Ficha técnica* (para uso interno) y *Ficha de producto* (para uso comercial).   

El filtro de datos permite ingresar nuevas *Fichas técnicas<!-- Schede tecniche -->* o buscar las ya existentes para visualizarlas, modificarlas o bien eliminarlas.   

### ![](/img/neutral/common/search.png) Búsqueda de Fichas técnicas<!-- Ricerca Schede tecniche -->

El formulario se compone de un área de filtro y otra de resultados. Una vez configurados todos los filtros deseados, solo basta hacer clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados dentro de la cuadrícula de resultados.   

### ![](/img/neutral/common/new.png) Inserción de Fichas técnicas<!-- Inserimento Schede tecniche -->

Para poder ingresar nuevas *Fichas técnicas<!-- Schede tecniche -->* es necesario presionar el botón **Nuevo<!-- Nuovo -->**.   

### ![](/img/neutral/common/edit.png) Modificación o ![](/img/neutral/common/view.png) Visualización de Fichas técnicas<!-- Modifica o Visualizzazione Schede tecniche -->

Para abrir la gestión desde la cuadrícula de resultados, es necesario hacer doble clic sobre la fila de interés o bien, seleccionando una o más filas, pulsar los botones **Modificar<!-- Modifica -->** o **Visualizar<!-- Visualizza -->**.   

*Botones específicos*:   

### ![](/img/neutral/common/duplicate.png) Duplicar Ficha

Para poder duplicar una *Ficha técnica<!-- Scheda tecnica -->* existente en una nueva *Ficha técnica<!-- Scheda tecnica -->*, es necesario clicar en la cuadrícula sobre la *Ficha técnica<!-- Scheda tecnica -->* que se desea duplicar y pulsar el botón **Duplicar ficha<!-- Duplica scheda -->**. Sólo se puede duplicar una *Ficha técnica<!-- Scheda tecnica -->* a la vez. Se mostrará una solicitud de:   
> **Tipo de ficha<!-- Tipo scheda -->**: es el *Tipo de ficha<!-- Tipo scheda -->* de la nueva *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio).   
> **Del cliente**: es el *Cliente* de la nueva *Ficha técnica<!-- Scheda tecnica -->*, se sugiere la cuenta *Cliente* de la *Ficha técnica<!-- Scheda tecnica -->* de origen.   
> **Nuevo código**: es el *Código* de la nueva *Ficha técnica<!-- Scheda tecnica -->* (dato obligatorio), se sugiere según lo previsto por el *Método de Codificación<!-- Metodo di Codifica -->* asociado al *Tipo de ficha técnica<!-- Tipo scheda tecnica -->*.   
> **Duplicar con trazabilidad<!-- Duplica con rintracciabilità -->**: indica si se desea mantener la relación/trazabilidad, tanto en la *Ficha técnica<!-- Scheda tecnica -->* de origen (pestaña *Fichas relacionadas<!-- Schede correlate -->* de la *Ficha técnica<!-- Scheda tecnica -->* de origen) como en la *Ficha técnica<!-- Scheda tecnica -->* de destino (en el expander *Origen de datos de ficha<!-- Origine dati scheda -->* presente en los *datos de cabecera<!-- dati di testata -->*).   

Posteriormente, pulse el botón **OK** o el botón **Cancelar<!-- Cancel -->** según se quiera o no continuar con la duplicación.   
La nueva *Ficha técnica<!-- Scheda tecnica -->* creada tendrá la *Revisión<!-- Revisione -->* igual a *Cero*.   
Al finalizar la operación, la nueva *Ficha técnica<!-- Scheda tecnica -->* será visualizada.   

### ![](/img/neutral/common/execute.png) Crear nueva revisión

Para poder crear una nueva *Revisión<!-- Revisione -->* de una *Ficha técnica<!-- Scheda tecnica -->* existente, es necesario hacer clic en la cuadrícula sobre la *Ficha técnica<!-- Scheda tecnica -->* de la cual se quiere crear la nueva *Revisión<!-- Revisione -->* y pulsar el botón **Crear nueva revisión<!-- Crea nuova revisione -->**. Sólo se puede crear una nueva *Revisión<!-- Revisione -->* por cada *Ficha técnica<!-- Scheda tecnica -->* a la vez.   
Se crea una nueva *Ficha técnica<!-- Scheda tecnica -->*, con toda la información de la *Ficha técnica<!-- Scheda tecnica -->* de origen pero con el índice de *Revisión<!-- Revisione -->* incrementado y la *Fecha de inicio de validez<!-- Data di inizio validità -->* igual a la fecha actual.   
La *Ficha técnica<!-- Scheda tecnica -->* de origen termina su validez y la *Fecha fin de validez<!-- Data fine validità -->* se configura igual a la fecha actual.   
Al finalizar la operación, será visualizada la nueva *Revisión<!-- Revisione -->* de la *Ficha técnica<!-- Scheda tecnica -->*.   

### ![](/img/neutral/common/item-web.png) Crear Plan de control

Desde la *Ficha técnica<!-- Scheda tecnica -->* es posible crear un *Plan de control*; para ello, es necesario hacer clic en la cuadrícula sobre la *Ficha técnica<!-- Scheda tecnica -->* desde la que se desea duplicar y presionar el botón **Crear nuevo Plan de control<!-- Crea nuovo Piano di controllo -->**. Sólo se puede crear un nuevo *Plan de control* por cada *Ficha técnica<!-- Scheda tecnica -->* a la vez.   
Se crea un nuevo *Plan de control*, copiándose únicamente las *Propiedades* de origen con el indicador *Pruebas a identificar<!-- Prove da rilevare -->*, todas las demás informaciones de la *Ficha técnica<!-- Scheda tecnica -->*, pero con índice de *Revisión<!-- Revisione -->* igual a *cero* y con *Fecha de inicio de validez<!-- Data di inizio validità -->* igual a la fecha actual. Se mostrará una solicitud de:   
> **Tipo de plan de control<!-- Tipo piano di controllo -->**: es el *Tipo de plan de control<!-- Tipo piano di controllo -->* del nuevo *Plan de control* (dato obligatorio).   
> **Número<!-- Numero -->**: es el *Número* progresivo del nuevo *Plan de control* (dato obligatorio), se sugiere según lo previsto por la *Numeración<!-- Numerazione -->* asociada al *Tipo de plan de control<!-- Tipo piano di controllo -->* y a la fecha actual.   
> **Crear manteniendo la trazabilidad<!-- Crea mantenendo la rintracciabilità -->**: indica si se desea mantener la relación/trazabilidad de la *Ficha técnica<!-- Scheda tecnica -->* de origen en el *Plan de control* de destino (en el expander *Origen Plan de control<!-- Origine Piano di controllo -->* presente en los *datos de cabecera<!-- dati di testata -->*).   

Posteriormente, pulse el botón **OK** o el botón **Cancelar<!-- Cancel -->** según se quiera o no continuar con la creación.   
Al finalizar la operación, el nuevo *Plan de control* será visualizado.   

Para cualquier tema no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).