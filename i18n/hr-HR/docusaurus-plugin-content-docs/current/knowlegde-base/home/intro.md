---
title: FAQ Početna
sidebar_position: 2
---


<details>

  <summary>1. Kada se u nove matične podatke kontakta unese PDV identifikacijski broj i na traci izbornika klikne Predloži podatke, popunjavaju se opća polja. Postoji li izravna veza s gospodarskim komorama ili nekom sličnom uslugom?</summary>
  
Fluentis je povezan s bazama sustava VIES, koje je omogućila Europska unija, pa su dostupni podaci o mnogim talijanskim i europskim poduzećima. Stoga će se nakon unosa PDV identifikacijskog broja predložiti dostupni podaci.

</details>

<details>

  <summary>2. Je li moguće proizvoljno obojiti ćelije u mrežama za pretraživanje ako sadrže određenu vrijednost?</summary>

Da, ova je funkcionalnost dostupna putem opcije **Conditional Formatting**. Za odabir boje koja će se dodijeliti ćeliji koja sadrži određenu vrijednost, potrebno je postaviti pokazivač na zaglavlje stupca, a zatim kliknuti desnom tipkom miša i odabrati **Conditional Formatting > Manage Rules**. U prikazanoj formi potrebno je odabrati **New Rule**, čime se otvara forma **New Formatting Rule**.

Ovdje je s popisa potrebno odabrati željenu vrstu pravila. U odjeljku **Edit the Rule Description** potrebno je odabrati **[...]** te u prikazanoj formi unijeti prvu vrijednost koju stupac može sadržavati i spremiti promjene.

Zatim je potrebno kliknuti **Format** te u prikazanoj formi, na kartici **Fill**, odabrati boju koju stupac treba poprimiti ako vrijednost odgovara prethodno unesenoj vrijednosti. Potrebno je potvrditi odabir.

Za svaku vrijednost koju stupac može sadržavati potrebno je kreirati novo pravilo. Nakon spremanja potrebno je osvježiti formu kako bi se prikazao rezultat.

</details>


<details>

  <summary>3. Je li moguće korisniku sakriti određenu vrstu računa?</summary>
  
Da, pomoću <b>Ograničenja</b>. Ona sprječavaju korisnike u kreiranju, prikazivanju ili izmjeni određenih vrsta dokumenata. U nastavku je prikazan primjer kako korisniku onemogućiti korištenje vrste računa s kodom `FVITDIF`. Podsjećamo da je Ograničenje potrebno dodati i u korisnikov profil Arm, u odgovarajućoj mreži.            


![](/img/it-it/sales/sales-invoices/search-sales-invoices/restriction.png)

</details>