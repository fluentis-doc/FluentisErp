---
title: Kreiranje ulaznog računa iz XML-a
sidebar_position: 4
---

**Kreiranje ulaznog računa** dostupno je na alatnoj traci unutar menija SDI (ES), kojem se može pristupiti putem Alati > BizLink > ES Dokumenti > Dokumenti za dolaznu kupnju.  

:::note Napomena
Za aktivaciju tipke potrebno je u SQL tablici fluentis.SDI_CompanyConfiguration postaviti flag SDICFC_PurchaseInvoiceCreation.
:::

Nakon odabira retka, omogućeno je kreiranje ulaznih računa primitkom XML formata dookumenta. 
Nakon toga moguće je povezati račun s izvršenjem skladišnog dokumenta ili narudžbi na koje se odnosi.  

Klikom na tipku Izrada računa za kupnju otvara se prozor u kojem je potrebno odabrati račun dobavljača.   
Ako račun ne postoji, moguće ga je kreirati. Nakon potvrde računa otvara se dodatni u kojem su potrebni sljedeći podaci:

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img1.png)

**Vrsta ulaznog računa:** navesti tip dokumenta koji se kreira;

**Artikli:** navesti artikle koji će biti uključeni u ulazni račun;

**PDV:** odrediti stopu PDV-a za primjenu;

**Tip plaćanja:** navesti vrstu plaćanja za dobavljača.

Svi ovi podaci mogu se postaviti kao zadane postavke za buduće korištenje označavanjem opcije **Spremi postavke**, koja je dostupna uz svaki podatak.  

Nakon unosa svih podataka i potvrde pritiskom na OK, kreirani ulazni račun će se otvoriti. Račun će sadržavati odabrani tip, artikle i PDV. Ako šifra artikla nije prepoznata, bit će unesen bez šifre. Ostali podaci automatski se preuzimaju iz evidencije dobavljača, ali račun se može ručno uređivati i spremiti.  

---

Kreiranje računa sa **ŠIFRIRANIM ARTIKLIMA** (automatsko prepoznavanje artikala u Fluentis sustavu) zahtijeva određene korake kako bi se osiguralo prepoznavanje. U protivnom će se kreirati račun s nešifriranim stavkama tipa 2.  

Šifarnik artikala može imati internu kodifikaciju koja se razlikuje od one koju koristi dobavljač.

Primjer: Kod - MATCH1  Opis  - PT 2,5 BU
Potrebno je postaviti sekciju *Preferirani dobavljač* s podacima o dobavljaču i pripadajućem šifriranju koje dobavljač koristi za taj artikl.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img5.png)

Dobavljač može koristiti jedan ili više tipova šifriranja, kao što je prikazano na slici.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img3.png)

Na primjer, EAN šifra ili neki drugi tip šifriranja.

:::danger Napomena
U XML dokumentu čita se prva dostupna šifra, dok se ostale (npr. EAN) ignoriraju. 
:::

Važno je upravljati ovim početnim referentnim kodom u šifarniku dobavljača (kartica *Porezne informacije*)

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img6.png)

Ako su konfiguracije pravilno postavljene, rezultat kreiranja računa prikazivat će i nešifriranu stavku za transportne troškove koji nisu bili unaprijed definirani.

![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img4.png)

---

Na traci izbornika zaglavlja dostupna je tipka **SDI – Zatvaranje dokumenata** koji omogućuje povezivanje dokumenta nabave s kreiranim ulaznim računom.   

Klikom na tipku, otvara se prozor s filtrima za preciznije pretraživanje dokumenta nabave za povezivanje. Moguće je unijeti tip dokumenta, broj, dobavljača i druge parametre. 

Pritiskom na Pretraži, u pregledima lijevo će se pojaviti dokumenti nabave, a desno ulazni računi, koji se mogu povezati. 

Odabirom dokumenata ili pojedinačnih redaka u pregledima i pritiskom na tipku **Poveži** u traci izbornika, veza između dokumenata će biti uspostavljena. 

Pojavit će se prozor s obavijesti da je operacija dovršena, kao i dodatni prozor sa sažetkom zatvaranja dokumenata i detaljima veze. 


![](/img/it-it/finance-area/e-invoice/purchase-invoice-creation/img2.png)

Od tog trenutka, document nabave i ulazni račun su povezani. Poveznicu je moguće provjeriti unutar ulaznog računa u kartici Artikli, gdje je naveden dokument na koji se odnosi. 