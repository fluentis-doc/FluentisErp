---
title: FAQ Producción (FAQ Produzione)
sidebar_position: 1
---

<details>

  <summary>1. ¿Cómo mostrar en pantalla la <b>versión (versione)</b> del componente en la lista de materiales?</summary>
  
  Para mostrar en pantalla la versión del componente en la lista de materiales, es necesario ingresar el valor 1 en el campo OPPR_componentversion de la tabla OP_Param. 

  > select OPPR_componentversion,* from OP_Param   
    update OP_Param   
    set OPPR_componentversion = 1    

:::danger Atención (Attenzione)
Tenga cuidado al actualizar la fila que corresponde a la empresa y división de referencia.
:::

</details>