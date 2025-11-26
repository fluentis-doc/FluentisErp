---
title: FAQ Producción
sidebar_position: 1
ai_generated: true
---

<details>

  <summary>1. ¿Cómo mostrar en pantalla la <b>versión</b> del componente en la lista de materiales<!-- distinta base -->?</summary><!-- Come esporre a video la versione del componente nella distinta base? -->
  
  Para mostrar en pantalla la versión del componente en la lista de materiales<!-- distinta base --> es necesario ingresar el valor 1 en el campo OPPR_componentversion de la tabla OP_Param.

  > select OPPR_componentversion,* from OP_Param   
    update OP_Param   
    set OPPR_componentversion = 1    

:::danger Atención<!-- Attenzione -->
Tenga cuidado de actualizar la fila correspondiente a la empresa y división de referencia.
:::

</details>