---
title: Proizvodnja KB
sidebar_position: 1
---

<details>

  <summary>1. Kako prikazati na ekranu <b>verziju</b> komponente u glavnoj listi?</summary>
  
  Da biste prikazali verziju komponente u glavnoj listi, potrebno je unijeti vrijednost 1 u polje OPPR_componentversion u tablici OP_Param. 

  > select OPPR_componentversion,* from OP_Param   
    update OP_Param   
    set OPPR_componentversion = 1    

:::danger Upozorenje
Pazite da ažurirate redak koji odgovara relevantnoj tvrtki i diviziji.
:::

</details>
