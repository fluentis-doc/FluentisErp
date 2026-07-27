---
title: Novi projekt
sidebar_position: 1
---

Na ovom obrascu moguće je unijeti sve podatke novog **projekta**.

**Vrsta projekta**: određuje vrstu projekta odabranu iz tablice [Vrste projekata](/docs/configurations/tables/project-management/project-type), čime se definiraju struktura projekta (jednorazinska ili hijerarhijska), koristi li se predložak te primjena svih ostalih postavki definiranih za odabranu vrstu projekta.
Ovisno o postavkama vrste projekta, bit će prikazane odgovarajuće **kartice**.

**Kupac**: sadrži kupca na kojeg se projekt odnosi.

**Godina / Broj / Datum**: određuju godinu, broj i datum projekta. Polje **Broj** prihvaća brojčane i tekstualne znakove, dok polje **Interni broj** prihvaća isključivo brojčane vrijednosti.
Ako vrsta projekta koristi numeriranje po godišnjem, mjesečnom ili dnevnom razdoblju, novi će se broj automatski predložiti u oba polja – **Broj** i **Interni broj**.
Jedinstvenost vrijednosti u poljima **Broj** i **Interni broj** provjerava se unutar razdoblja definiranog u numeratoru.
Vrsta projekta može biti definirana i bez numeratora. U tom slučaju korisnik mora ručno unijeti vrijednost u polje **Broj**, dok će polje **Interni broj** imati vrijednost **0**.

Jedinstvenost polja **Broj** i **Interni broj** provjerava se na godišnjoj razini čak i kada numerator nije definiran ili kada nema određeno razdoblje.
Takva se konfiguracija koristi kada se projekt automatski generira iz prodajnog naloga. U tom slučaju broj projekta dodjeljuje se automatski i jednak je broju prodajnog naloga.

**Naziv projekta**: prema zadanim postavkama preuzima naziv kupca, ali ga je moguće slobodno izmijeniti. Ako je projekt generiran iz ponude, moguće je koristiti strukturirani naziv prema postavkama **Parametri > Prodaja > Parametri prodajnih ponuda**.
Na alatnoj traci nalazi se gumb **Ažuriraj**, koji ponovno izračunava vrijednosti **Dodijeljeni dani**, **Procijenjeni dani**, **Planirani dani** i **Izvršeni dani** na redcima projekta.
Ista je funkcionalnost dostupna i na zaslonu za pretraživanje projekata putem gumba **Osvježi**.