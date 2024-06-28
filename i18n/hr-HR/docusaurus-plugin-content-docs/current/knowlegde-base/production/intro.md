---
title: Produzione KB
sidebar_position: 1
---

<details>

  <summary>1. Come esporre a video la <b>versione</b> del componente nella distinta base?</summary>
  
  Per esporre a video la versione del componente nella distinta base bisogna inserire il valore 1 nel campo OPPR_componentversion della tabella OP_Param. 

  > select OPPR_componentversion,* from OP_Param   
    update OP_Param   
    set OPPR_componentversion = 1    

:::danger Attenzione
Fare attenzione ad aggiornare la riga che corrisponde alla società e divisione di riferimento.
:::

</details>
