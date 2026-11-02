---
title: Vrste projekata
sidebar_position: 12
---

Tablici se može pristupiti putem **Tablice > Upravljanje projektima > Vrste projekata** (ex. tipovi prodajnih naloga).

Tablica sadrži moguće vrste **projekata**. Sastoji se od područja za filtriranje, u kojem je moguće pretraživati prema opisu vrste, te dviju tablica: u prvoj su navedene sve unesene vrste projekata (dovoljno je kliknuti gumb ![](/img/neutral/common/search.png) Traži na alatnoj traci kako bi se prikazale), dok je u drugoj moguće definirati zadane troškove/prihode za svaku vrstu projekta koji će se koristiti pri izračunu postotka dovršenosti projekta (SAL).

![](/img/it-it/configurations/tables/projects/proj-type.png)

U istom obrascu moguće je dodati nove vrste projekata u tablicu klikom na gumb ![](/img/neutral/common/new.png) Novo. Na taj će se način dodati novi redak u tablicu u kojem je moguće definirati sljedeće podatke:

**Vrsta/tip**: šifra vrste projekta;

**Opis vrste projekta**: opis vrste projekta;

**Numeracija**: numeriranje povezano s projektom, posebno konfigurirano za tu namjenu;

**Struktura hijerarhije**: ako je ova oznaka aktivirana, projekti mogu imati hijerarhijsku strukturu, odnosno više razina;

**Tip narudžbe**: moguće je navesti povezanu vrstu narudžbe;

**Opis tipa narudžbe**: opis povezane vrste narudžbe; koristi se pri izradi projekata iz narudžbe.

**Vrsta računa**: moguće je navesti vrstu računa koja se koristi pri fakturiranju rata definiranih u retku projekta, na kartici "Fakturiranje", ili pri fakturiranju putem kartice "Računi za predujam" ako je vrsta retka "konačni obračun". U slučaju vrste "predujam", ova se vrsta računa koristi ako nije definirana posebna vrsta računa za predujam.

**Opis vrste računa**: opis vrste računa povezane u prethodnom stupcu;

**Vrsta računa za predujam**: moguće je navesti vrstu računa koja se koristi pri fakturiranju putem kartice "Računi za predujam" ako je vrsta retka "predujam". Ako "Vrsta računa za predujam" nije postavljena, koristi se vrsta definirana u polju "Vrsta računa", koja tada vrijedi za obje mogućnosti – predujam i konačni obračun.

**Opis vrste računa za predujam**: opis vrste računa za predujam povezane u prethodnom stupcu;

**Predložak**: ova oznaka određuje je li vrsta projekta predložak. Takva se vrsta ne može koristiti u drugim dokumentima, već služi isključivo kao predložak za izradu novih projekata.

**Sigurnost projekta omogućena**: ako je oznaka aktivirana, na kartici Dozvole korisnika u zaglavlju projekta omogućuje odabir korisnika koji imaju pravo pristupa projektu samo za čitanje ili pravo čitanja i pisanja (ostali korisnici neće mu moći pristupiti). Ako oznaka nije aktivirana, svi korisnici mogu mijenjati projekt.

**Vrsta zahtjeva za nabavom**: moguće je povezati vrstu zahtjeva za nabavu. Na taj će način biti moguće generirati zahtjeve za nabavu izravno iz projekta.

U tablici se nalaze i određene oznake koje određuju koje će se kartice prikazivati za pojedinu vrstu projekta.

**Aktivnosti**: kartica koja sadrži sve glavne i obvezne podatke za redak projekta, kao što su artikl, količina i cijena, te pregled troškova;

**Planiranje usluga**: kartica koja se odnosi na predviđene datume početka i završetka, postotak napretka, vrste intervencija koje će se koristiti i eventualne veze s drugim WBS strukturama;

**Resursi**: kartica za planiranje resursa;

**Materijali**: kartica koja sadrži popis materijala i pripadajuće troškove;

**Faze**:

**Podaci**: kartica koja sadrži opće informacije povezane sa šiframa za izračun postotka dovršenosti projekta (SAL), referencama na tikete, naloge za proizvodnju i CRM kontakte;

**Napredak**:

**Agenti**: kartica za unos agenata povezanih s projektom;

**Fakturiranje**: kartica za definiranje rasporeda rata fakturiranja za redak projekta;

**Dodatni podaci**: kartica za upravljanje dodatnim podacima;

**Dokumenti u privitku**: kartica za upravljanje privicima;

**Gantt**: opća kartica koja prikazuje Ganttov dijagram projekta;

**Račun za predujam**: kartica za upravljanje računima za predujam povezanima s projektima;

**Obvezno fakturiranje**: ako je redak projekta fakturabilan i aktivirana je oznaka Obvezno fakturiranje, spremanje će biti blokirano.

**Ponovni izračun datuma početka-završetka**: ako je ova opcija omogućena, dopušta automatsku izmjenu datuma početka i završetka planiranja u WBS redcima projekta. Datumi će se ažurirati na temelju količine u retku ako mjerna jedinica odgovara mjernoj jedinici za dane definiranoj u parametrima projekta ili prilikom unosa novih resursa na kartici Resursi retka projekta.

U donjoj tablici moguće je definirati vrednovanje postotka dovršenosti projekta (SAL) u okviru praćenja napretka radova. Za svaki projekt moguće je navesti niz šifri koje predstavljaju dokumente uključene u izračun postotka dovršenosti projekta. Te će se šifre zatim predlagati u pojedinačnim redcima projekta.

Nakon odabira retka u prvoj tablici, u drugoj je potrebno ispuniti sljedeća polja:

**Tip porijekla troška/prihoda**: sadrži popis šifri predviđenih troškova/prihoda koje će se koristiti za izračun postotka dovršenosti projekata te određene vrste;

**Opis**: opis troškova/prihoda;

**Tip**: označava radi li se o trošku ili prihodu;

**Izraz filtra**: ako polje nije popunjeno, uzimaju se u obzir svi dokumenti predviđeni za određenu šifru. Ako se određeni dokumenti žele isključiti (npr. prema vrsti, numeriranju itd.), moguće je konfigurirati izraz filtra.

![](/img/it-it/configurations/tables/projects/revenue.png)