---
title: Proizvodnja FAQ
sidebar_position: 1
---

<details>

  <summary>1. Kako prikazati na ekranu <b>verziju</b> komponente u glavnoj listi?</summary>
  
  Da biste prikazali verziju komponente u glavnoj listi, potrebno je uneti vrednost 1 u polje OPPR_componentversion u tabeli OP_Param. 

  > select OPPR_componentversion,* from OP_Param   
    update OP_Param   
    set OPPR_componentversion = 1    

:::danger Upozorenje
Pazite da ažurirate red koji odgovara relevantnom preduzeću i diviziji.
:::

</details>