---
title: Novi projekat
sidebar_position: 1
---

Na ovom obrascu moguće je uneti sve podatke novog **projekta**.

**Vrsta projekta**: određuje vrstu projekta izabranu iz tabele [Vrste projekata](/docs/configurations/tables/project-management/project-type), čime se definišu struktura projekta (jednoslojna ili hijerarhijska), da li se koristi predložak i primena svih ostalih podešavanja definisanih za izabranu vrstu projekta.  
U zavisnosti od podešavanja vrste projekta, biće prikazane odgovarajuće **kartice**.

**Kupac**: sadrži kupca na kojeg se projekat odnosi.

**Godina / Broj / Datum**: određuju godinu, broj i datum projekta. Polje **Broj** prihvata brojčane i tekstualne znakove, dok polje **Interni broj** prihvata isključivo brojčane vrednosti.  
Ako vrsta projekta koristi numerisanje po godišnjem, mesečnom ili dnevnom periodu, novi broj će se automatski predložiti u oba polja – **Broj** i **Interni broj**.  
Jedinstvenost vrednosti u poljima **Broj** i **Interni broj** proverava se unutar perioda definisanog u numeratoru.  
Vrsta projekta može biti definisana i bez numeratora. U tom slučaju korisnik mora ručno uneti vrednost u polje **Broj**, dok će polje **Interni broj** imati vrednost **0**.

Jedinstvenost polja **Broj** i **Interni broj** proverava se na godišnjem nivou čak i kada numerator nije definisan ili kada nema određen period.  
Takva konfiguracija koristi se kada se projekat automatski generiše iz prodajnog naloga. U tom slučaju broj projekta dodeljuje se automatski i jednak je broju prodajnog naloga.

**Naziv projekta**: prema podrazumevanim podešavanjima preuzima naziv kupca, ali ga je moguće slobodno izmeniti. Ako je projekat generisan iz ponude, moguće je koristiti strukturirani naziv prema podešavanjima **Parametri > Prodaja > Parametri prodajnih ponuda**.

Na alatnoj traci nalazi se dugme **Ažuriraj**, koje ponovo obračunava vrednosti **Dodeljeni dani**, **Procenjeni dani**, **Planirani dani** i **Izvršeni dani** na redovima projekta.

Ista funkcionalnost dostupna je i na ekranu za pretragu projekata putem dugmeta **Osveži**.