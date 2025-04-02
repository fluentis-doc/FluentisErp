---
title: ricerca piani di controllo
sidebar_position: 1
---

El filtro se encuentra en la ruta **Calidad > Controles de artículo > Planes de control**.  

En los **piani di controllo** se definen secuencias de *prove pianificate* a realizar en: aceptación de materiales, durante el flujo de producción o durante la prueba final para verificar la idoneidad de los materiales recibidos o de los artículos producidos.  
Se pueden definir *Planes de control* para cada artículo o para grupos o asociarlos a *Fases* de los *Ciclos de trabajo* y diferenciarlos por *Cliente* y *Proveedor*.  
Está prevista la gestión de las *Revisiones* del *Plan de control*.  

El filtro de datos permite ingresar nuevos *Planes de control* o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.  

### ![](/img/neutral/common/search.png) ricerca piani di controllo

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.  

### ![](/img/neutral/common/new.png) Ingreso de Planes de Control

Para poder ingresar nuevos *Planes de control*, es necesario presionar el botón **nuovo**.  

### ![](/img/neutral/common/edit.png) Modificar o ![](/img/neutral/common/view.png) Visualizar Planes de Control

Para abrir la gestión de la cuadrícula de resultados, es necesario hacer doble clic en la fila de nuestro interés o, seleccionando una o más filas, presionar los botones **modifica** o **visualizza**.  

*Botones específicos*:  

### ![](/img/neutral/common/duplicate.png) Duplicar Plan de Control

Para poder duplicar un *Plan de control* existente en un nuevo *Plan de control*, es necesario hacer clic en la cuadrícula sobre el *Plan de control* que se desea duplicar y presionar el botón **duplica piano di controllo**. Se puede duplicar un solo *Plan de control* a la vez. Aparecerá un aviso de:  
> **Tipo de plan de control**: es el *Tipo de plan de control* del nuevo *Plan de control* (dato obligatorio), se propone el *Tipo de plan de control* del *Plan de control* de origen.  
> **Número**: es el *Número* progresivo del nuevo *Plan de control* (dato obligatorio), se propone en función de lo establecido por la *Numeración* asociada al *Tipo de plan de control* y a la fecha actual.  
> **duplica con rintracciabilità**: indica si se desea mantener la relación/rastreabilidad del *Plan de control* de destino en el *Plan de control* de origen y, en particular, en la pestaña *piani di controllo correlati*.  

Presione posteriormente el botón **OK** o el botón **Cancel** si desea continuar con la actividad de duplicado o no.   
Al finalizar el procesamiento, se visualizará el nuevo *Plan de control*.  

### ![](/img/neutral/common/execute.png) Crear nueva revisión

Para poder crear una nueva *Revisión* a un *Plan de control* existente, es necesario hacer clic en la cuadrícula sobre el *Plan de control* del cual se desea crear una nueva *Revisión* y presionar el botón **crea nuova edizione**. Se puede crear una nueva *Revisión* para un solo *Plan de control* a la vez.  
Se creará un nuevo *Plan de control*, con toda la información del *Plan de control* de origen pero con el índice de *Revisión* incrementado y la *Fecha de inicio de validez* igual a la fecha actual.  
El *Plan de control* de origen finalizará su validez configurando automáticamente la *Fecha de fin de validez* a la fecha actual.   
Al finalizar el procesamiento, se visualizará la nueva *Revisión* del *Plan de control*.  

### Crear nueva Ficha Técnica

Desde el *Plan de control* es posible crear una *Ficha técnica*; para ello es necesario hacer clic en la cuadrícula sobre el *Plan de control* del cual se desea duplicar y presionar el botón **Crear nueva Ficha técnica (Crea nuova Scheda tecnica)**. Se puede crear una nueva *Ficha técnica* para un solo *Plan de control* a la vez.  
Se creará una nueva *Ficha técnica*, con toda la información del *Plan de control* de origen pero con el índice de *Revisión* igual a *cero* y con *Fecha de inicio de validez* igual a la fecha actual. Aparecerá un aviso de:  
> **Tipo de ficha**: es el *Tipo de ficha* de la nueva *Ficha técnica* (dato obligatorio).  
> **Del cliente**: es el *Cliente* de la nueva *Ficha técnica*, se propone la cuenta *Cliente* del *Plan de control* de origen (solo si es de *Tipo cuenta cliente*).  
> **Nuevo código**: es el *Código* de la nueva *Ficha técnica* (dato obligatorio), se propone según lo previsto por el *Método de Codificación* asociado al *Tipo de ficha técnica*.  
> **Rev.**: es el índice de *Revisión* de la nueva *Ficha técnica* (dato obligatorio), se propone en *cero*.  
> **crea mantenendo la rintracciabilità**: indica si se desea mantener la relación/rastreabilidad en la *Ficha técnica* de destino, en el *Plan de control* de origen y, en particular, en la pestaña *schede correlate*.  

Presione posteriormente el botón **OK** o el botón **Cancel** si desea continuar con la actividad de creación o no.   
Al finalizar el procesamiento, se visualizará la nueva *Ficha técnica*.  

### Solicitudes de Planes de Control

Desde este botón es posible realizar la gestión de *Solicitudes de Planes de Control*.  

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).