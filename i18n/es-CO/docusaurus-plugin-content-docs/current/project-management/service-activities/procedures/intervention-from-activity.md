---
title: Creación de Intervenciones desde Actividad
sidebar_position: 4
ai_generated: true
---

La primera pestaña, **Creación de intervenciones desde actividad<!-- Creazione interventi da attività -->**, es el área de filtros, donde es posible configurar una serie de filtros para buscar de manera más precisa las actividades presentes en la base de datos.

Una vez configurados los filtros, al hacer clic en **Buscar<!-- Ricerca -->** en la barra de opciones se mostrarán los resultados en la cuadrícula.

Los botones específicos de esta pestaña son:

![](/img/neutral/common/select-all.png) Establecer todas como Actividad facturable<!-- Imposta tutte come Attività fatturabile -->: activa en todas las filas de actividades seleccionadas en la cuadrícula la casilla **Actividad facturable<!-- Attività fatturabile -->**;

![](/img/neutral/common/select-all.png) Establecer todas como Forzar actividad facturada<!-- Imposta tutte come Forza attività fatturata -->: activa en todas las filas seleccionadas la casilla **Forzar la actividad facturada<!-- Forza l’attività fatturata -->**;

![](/img/neutral/common/select-all.png) Establecer todas como Verificada<!-- Imposta tutte come Verificata -->: establece en todas las filas seleccionadas el campo **Estado de la actividad<!-- Stato attività -->** como **Verificada<!-- Verificata -->**;

![](/img/neutral/common/select-all.png) Establecer todas como Insertada<!-- Imposta tutte come inserita -->: establece en todas las filas seleccionadas el campo **Estado de la actividad<!-- Stato attività -->** como **Insertada<!-- Inserita -->**.

En la segunda pestaña, **Parámetros<!-- Parametri -->**, es posible ingresar los parámetros que se utilizarán en el procedimiento:

**Tipo de intervención<!-- Tipo di intervento -->**: contiene el tipo de intervención a crear;

**Fecha de intervención<!-- Data intervento -->**: contiene la fecha de la intervención a crear;

**Tiempo a pagar<!-- Tempo da pagare -->**: 

En el desplegable **Ajuste<!-- Arrangiamento -->** es posible elegir cómo redondear el Tiempo a pagar entre las siguientes opciones:

**Ajuste superior a 0 minutos, cuando el tiempo sea superior a 0 minutos<!-- Arr. Superirore a 0 minuti, quando tempo essere più dopo 0 minuti -->**:

**Ajuste inferior a 0 minutos, cuando el tiempo sea inferior a 0 minutos<!-- Arr, inferire a 0 minuti, quando tempo è inferiore a 0 minuti -->**:

**Sin redondeo<!-- Non arrotondato -->** (si se selecciona esta opción, no será posible completar el campo Tiempo a pagar):

El desplegable **Agrupar<!-- Raggruppa -->** permite agrupar algunas propiedades a gusto del usuario: estos agrupamientos serán visibles en la intervención creada. En particular, es posible agrupar por Artículo, Artículo de Proyecto, Cuenta<!-- Conto -->, Fecha, Empleado y/o Proyecto.
Es posible añadir las propiedades para agrupar mediante arrastrar y soltar (drag and drop).
En la barra de opciones hay algunos botones que permiten modificar la cuadrícula de agrupamientos<!-- griglia Raggruppa -->:

![](/img/neutral/common/clear.png) Limpiar<!-- Clear -->: elimina todos los agrupamientos;

![](/img/neutral/common/delete.png) Eliminar<!-- Cancella -->: elimina el agrupamiento seleccionado;

![](/img/neutral/common/move-down.png) Mover abajo<!-- Sposta giù -->: baja un lugar el agrupamiento seleccionado;

![](/img/neutral/common/move-up.png) Mover arriba<!-- Sposta su -->: sube un lugar el agrupamiento seleccionado.

Otros botones específicos en la barra de opciones son:

![](/img/neutral/common/recalculated.png) Recalcular tiempo a pagar<!-- Ricalcola tempo da pagare -->: recalcula el Tiempo a pagar según los parámetros configurados;

![](/img/neutral/common/create.png) Crear intervención<!-- Creazione intervento -->: crea la intervención a partir de la actividad seleccionada en la pestaña de filtro; este botón también está presente en la primera pestaña.

En la tercera pestaña, **Rollback**, es posible restaurar las operaciones realizadas. Pulsando **Buscar<!-- Ricerca -->** se visualizan las operaciones y los usuarios que las han realizado; al seleccionar una fila, en las cuadrículas inferiores **Configuración del horario de trabajo<!-- Configurazione orario di lavoro -->** e **Intervención vinculada<!-- Intervento collegato -->** se mostrarán los detalles.
Para restaurar una operación, simplemente seleccione la fila deseada y presione **Rollback** en la barra de opciones.