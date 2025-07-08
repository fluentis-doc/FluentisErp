---
title: Estado del Lote
sidebar_position: 22
---

La tabla se encuentra en la ruta **Tablas > Logística > Estado del Lote**.

En esta tabla es posible codificar el *Estado del Lote* para definir su validez.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Estado del Lote**

El formulario consta de un área de filtros y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Estado del Lote**

Para poder insertar nuevas codificaciones, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.  
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **código** y la **descripción**.

Un lote se caracteriza por un estado que define su validez. Para ciertos tipos de materiales en particular, como los productos alimenticios y farmacéuticos, el estado es obligatorio (por ejemplo, en el ámbito farmacéutico, un lote que necesita análisis antes de poder ser utilizado tendrá como estado inicial *En cuarentena* hasta la finalización de los análisis).

#### Campos específicos 

> **Disp. prel. auto**: si está activo, este lote no será considerado en la disponibilidad;     
> **No disponible para MRP**: si está activo, este lote será considerado por el MRP solo si en los *Parámetros de MRP* del artículo también se ha marcado el indicador *Considere lotes con estado de "no disponible"*. Si alguno de los dos indicadores *No disp. para MRP* y *Considere lotes con estado de "no disponible"* no está activo, entonces no será considerado tampoco por el MRP.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).