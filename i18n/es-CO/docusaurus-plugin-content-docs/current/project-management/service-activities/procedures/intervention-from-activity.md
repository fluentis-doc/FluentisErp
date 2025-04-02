---
title: creazione interventi da attività
sidebar_position: 4
---

La primera pestaña, **creazione interventi da attività**, es el área de filtrado, donde es posible establecer una serie de filtros para buscar de manera más específica las actividades presentes en la base de datos.

Una vez ingresados los filtros, al hacer clic en **ricerca** en la barra de herramientas, se mostrarán los resultados en una cuadrícula.

Los botones específicos de esta pestaña son:

![](/img/neutral/common/select-all.png) Establecer todas como Actividades facturables: activa en todas las líneas de actividades seleccionadas en la cuadrícula el indicador **attività fatturabile**;

![](/img/neutral/common/select-all.png) Establecer todas como Forzar actividad facturada: activa en todas las líneas seleccionadas el indicador **Forzar la actividad facturada (Forza l’attività fatturata)**;

![](/img/neutral/common/select-all.png) Establecer todas como Verificada: establece en todas las líneas seleccionadas el campo **stato attività** como **Verificada**;

![](/img/neutral/common/select-all.png) Establecer todas como ingresada: establece en todas las líneas seleccionadas el campo **stato attività** como **Ingresada**.

En la segunda pestaña, **parametri**, es posible ingresar los parámetros a utilizar en el proceso:

**tipo di intervento**: contiene el tipo de intervención a crear;

**data intervento**: contiene la fecha de la intervención a crear;

**tempo da pagare**: 

En la caja combinada **arrangiamento**, es posible elegir cómo redondear el Tiempo a pagar entre:

**Arr. Superior a 0 minutos, cuando el tiempo sea más de 0 minutos**:

**Arr. Inferior a 0 minutos, cuando el tiempo es inferior a 0 minutos**:

**No redondeado (No arrotondato)** (si se selecciona esta opción, no será posible completar el campo Tiempo a pagar);

La caja combinada **raggruppa** permite agrupar algunas propiedades a su conveniencia: estos agrupamientos serán visibles en la intervención creada. En particular, es posible elegir agrupar según Artículo, Artículo del Proyecto, Cuenta, Fecha, Empleado y/o Proyecto.  
Es posible agregar las propiedades a agrupar mediante arrastrar y soltar.

En la barra de herramientas hay algunos botones que permiten modificar la cuadrícula Agrupar:

![](/img/neutral/common/clear.png) Limpiar: elimina todos los agrupamientos;

![](/img/neutral/common/delete.png) Borrar: elimina el agrupamiento seleccionado;

![](/img/neutral/common/move-down.png) Mover abajo: baja un lugar el agrupamiento seleccionado;

![](/img/neutral/common/move-up.png) Mover arriba: sube un lugar el agrupamiento seleccionado.

Otros botones específicos de la barra de herramientas son:

![](/img/neutral/common/recalculated.png) Recalcular tiempo a pagar: recalcula el Tiempo a pagar en función de los parámetros establecidos;

![](/img/neutral/common/create.png) Creación de intervención: crea la intervención a partir de la actividad seleccionada en la pestaña de filtro; este botón también está presente en la primera pestaña.

En la tercera pestaña, **Rollback**, es posible restaurar las operaciones realizadas. Al presionar **ricerca** se visualizarán las operaciones y los usuarios que las han efectuado; al seleccionar una fila, en las cuadrículas inferiores **configurazione orario di lavoro** e **intervento collegato** se mostrarán los detalles.  
Para restaurar una operación, basta con seleccionar la fila elegida y presionar **Rollback** en la barra de herramientas.