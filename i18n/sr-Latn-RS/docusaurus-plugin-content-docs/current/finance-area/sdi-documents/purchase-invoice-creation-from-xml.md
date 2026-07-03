---
title: Kreiranje ulaznog računa iz XML-a
sidebar_position: 4
---

**Kreiranje ulaznog računa** dostupno je na traci sa alatkama unutar menija SDI (ES), kojem se može pristupiti putem Alati > BizLink > ES Dokumenti > Ulazni e-dokumenti.  

:::note Napomena
Za aktiviranje dugmeta potrebno je u SQL tabeli fluentis.SDI_CompanyConfiguration postaviti flag SDICFC_PurchaseInvoiceCreation.
:::

Nakon odabira reda, omogućeno je kreiranje ulaznih računa prijemom XML formata dokumenta. 
Nakon toga moguće je povezati račun sa izvršenjem skladišnog dokumenta ili narudžbina na koje se odnosi.  

Klikom na dugme Kreiranje ulaznog računa otvara se prozor u kojem je potrebno odabrati račun dobavljača.   
Ako račun ne postoji, moguće ga je kreirati. Nakon potvrde računa otvara se dodatni prozor u kojem su potrebni sledeći podaci:

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img1.png)

**Vrsta ulaznog računa:** navesti tip dokumenta koji se kreira;

**Artikli:** navesti artikle koji će biti uključeni u ulazni račun;

**PDV:** odrediti stopu PDV-a za primenu;

**Vrsta plaćanja:** navesti vrstu plaćanja za dobavljača.

Svi ovi podaci mogu se postaviti kao podrazumevane postavke za buduće korišćenje označavanjem opcije **Sačuvaj postavke**, koja je dostupna uz svaki podatak.  

Nakon unosa svih podataka i potvrde pritiskom na OK, kreirani ulazni račun će se otvoriti. Račun će sadržati odabrani tip, artikle i PDV. Ako šifra artikla nije prepoznata, biće unet bez šifre. Ostali podaci automatski se preuzimaju iz evidencije dobavljača, ali račun se može ručno uređivati i sačuvati.  

---

Kreiranje računa sa **ŠIFRIRANIM ARTIKLIMA** (automatsko prepoznavanje artikala u Fluentis sistemu) zahteva određene korake kako bi se obezbedilo prepoznavanje. U suprotnom će se kreirati račun sa nešifriranim stavkama tipa 2.  

Šifarnik artikala može imati internu kodifikaciju koja se razlikuje od one koju koristi dobavljač.

Primer: Kod - MATCH1  Opis  - PT 2,5 BU
Potrebno je postaviti sekciju *Preferirani dobavljač* sa podacima o dobavljaču i pripadajućim šifriranjem koje dobavljač koristi za taj artikal.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img5.png)

Dobavljač može koristiti jedan ili više tipova šifriranja, kao što je prikazano na slici.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img3.png)

Na primer, EAN šifru ili neki drugi tip šifriranja.

:::danger Napomena
U XML dokumentu čita se prva dostupna šifra, dok se ostale (npr. EAN) ignorišu. 
:::

Važno je upravljati ovim početnim referentnim kodom u šifarniku dobavljača (kartica *Poreske informacije*).

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img6.png)

Ako su konfiguracije pravilno postavljene, rezultat kreiranja računa prikazivaće i nešifriranu stavku za transportne troškove koji nisu bili unapred definisani.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img4.png)

---

Na traci menija zaglavlja dostupno je dugme **SDI – Zatvaranje dokumenata** koje omogućava povezivanje dokumenta nabavke sa kreiranim ulaznim računom.   

Klikom na dugme otvara se prozor sa filterima za preciznije pretraživanje dokumenta nabavke za povezivanje. Moguće je uneti tip dokumenta, broj, dobavljača i druge parametre. 

Pritiskom na **Pretraži**, u pregledima levo pojaviće se dokumenti nabavke, a desno ulazni računi, koji se mogu povezati. 

Odabirom dokumenata ili pojedinačnih redova u pregledima i pritiskom na dugme **Poveži** na traci menija, veza između dokumenata biće uspostavljena. 

Pojaviće se prozor sa obaveštenjem da je operacija završena, kao i dodatni prozor sa sažetkom zatvaranja dokumenata i detaljima veze. 

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img2.png)

Od tog trenutka dokument nabavke i ulazni račun su povezani. Vezu je moguće proveriti unutar ulaznog računa na kartici Artikli, gde je naveden dokument na koji se odnosi.