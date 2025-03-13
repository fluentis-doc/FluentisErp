---
title: Production FAQ (FAQ Produzione)
sidebar_position: 1
---

<details>

  <summary>1. How to display the <b>version</b> of the component in the bill of materials? (Come esporre a video la <b>versione</b> del componente nella distinta base?)</summary>
  
  To display the version of the component in the bill of materials, you need to enter the value 1 in the field OPPR_componentversion of the OP_Param table. 

  > select OPPR_componentversion,* from OP_Param   
    update OP_Param   
    set OPPR_componentversion = 1    

:::danger Attention (Attenzione)
Be careful to update the row that corresponds to the relevant company and division.
:::

</details>