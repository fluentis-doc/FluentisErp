---
title: Tipovi projekata
sidebar_position: 12
---

Tabeli se može pristupiti putem **Tablice > Upravljanje projektima > Tipovi projekata** (ranije tipovi prodajnih naloga).

Tabela sadrži moguće tipove **projekata**. Sastoji se od područja za filtriranje, u kojem je moguće pretraživati prema opisu tipa, i dve tabele: u prvoj su navedeni svi uneti tipovi projekata (dovoljno je kliknuti na dugme ![](/img/neutral/common/search.png) Traži na alatnoj traci kako bi se prikazali), dok je u drugoj moguće definisati podrazumevane troškove/prihode za svaki tip projekta koji će se koristiti pri obračunu procenta dovršenosti projekta (SAL).

![](/img/it-it/configurations/tables/projects/proj-type.png)

U istom obrascu moguće je dodati nove tipove projekata u tabelu klikom na dugme ![](/img/neutral/common/new.png) Novo. Na taj način dodaće se novi red u tabelu u kojem je moguće definisati sledeće podatke:

**Tip**: šifra tipa projekta;

**Opis tipa projekta**: opis tipa projekta;

**Numerisanje**: numerisanje povezano sa projektom, posebno konfigurisano za tu namenu;

**Hijerarhijska struktura**: ako je ova oznaka aktivirana, projekti mogu imati hijerarhijsku strukturu, odnosno više nivoa;

**Tip narudžbine**: moguće je navesti povezani tip narudžbine;

**Opis tipa narudžbine**: opis povezanog tipa narudžbine; koristi se pri izradi projekata iz narudžbine.

**Tip fakture**: moguće je navesti tip fakture koji se koristi pri fakturisanju rata definisanih u redu projekta, na kartici „Fakturisanje“, ili pri fakturisanju putem kartice „Fakture za avans“ ako je tip reda „konačni obračun“. U slučaju tipa „avans“, ovaj tip fakture koristi se ako nije definisan poseban tip fakture za avans.

**Opis tipa fakture**: opis tipa fakture povezanog u prethodnoj koloni;

**Tip fakture za avans**: moguće je navesti tip fakture koji se koristi pri fakturisanju putem kartice „Fakture za avans“ ako je tip reda „avans“. Ako „Tip fakture za avans“ nije postavljen, koristi se tip definisan u polju „Tip fakture“, koji tada važi za obe mogućnosti – avans i konačni obračun.

**Opis tipa fakture za avans**: opis tipa fakture za avans povezanog u prethodnoj koloni;

**Šablon**: ova oznaka određuje da li je tip projekta šablon. Takav tip ne može se koristiti u drugim dokumentima, već služi isključivo kao šablon za izradu novih projekata.

**Bezbednost projekta omogućena**: ako je oznaka aktivirana, na kartici Dozvole korisnika u zaglavlju projekta omogućava odabir korisnika koji imaju pravo pristupa projektu samo za čitanje ili pravo čitanja i pisanja (ostali korisnici neće moći da mu pristupe). Ako oznaka nije aktivirana, svi korisnici mogu da menjaju projekat.

**Tip zahteva za nabavku**: moguće je povezati tip zahteva za nabavku. Na taj način biće moguće generisati zahteve za nabavku direktno iz projekta.

U tabeli se nalaze i određene oznake koje određuju koje će se kartice prikazivati za pojedinačni tip projekta.

**Aktivnosti**: kartica koja sadrži sve glavne i obavezne podatke za red projekta, kao što su artikal, količina i cena, kao i pregled troškova;

**Planiranje usluga**: kartica koja se odnosi na predviđene datume početka i završetka, procenat napretka, tipove intervencija koje će se koristiti i eventualne veze sa drugim WBS strukturama;

**Resursi**: kartica za planiranje resursa;

**Materijali**: kartica koja sadrži spisak materijala i pripadajuće troškove;

**Faze**:

**Podaci**: kartica koja sadrži opšte informacije povezane sa šiframa za obračun procenta dovršenosti projekta (SAL), referencama na tikete, naloge za proizvodnju i CRM kontakte;

**Napredak**:

**Agenti**: kartica za unos agenata povezanih sa projektom;

**Fakturisanje**: kartica za definisanje rasporeda rata fakturisanja za red projekta;

**Dodatni podaci**: kartica za upravljanje dodatnim podacima;

**Priloženi dokumenti**: kartica za upravljanje prilozima;

**Gantt**: opšta kartica koja prikazuje Ganttov dijagram projekta;

**Faktura za avans**: kartica za upravljanje fakturama za avans povezanim sa projektima;

**Obavezno fakturisanje**: ako je red projekta moguće fakturisati i aktivirana je oznaka Obavezno fakturisanje, čuvanje će biti blokirano.

**Ponovni obračun datuma početka-završetka**: ako je ova opcija omogućena, dopušta automatsku izmenu datuma početka i završetka planiranja u WBS redovima projekta. Datumi će se ažurirati na osnovu količine u redu ako merna jedinica odgovara mernoj jedinici za dane definisanoj u parametrima projekta ili prilikom unosa novih resursa na kartici Resursi reda projekta.

U donjoj tabeli moguće je definisati vrednovanje procenta dovršenosti projekta (SAL) u okviru praćenja napretka radova. Za svaki projekat moguće je navesti niz šifara koje predstavljaju dokumente uključene u obračun procenta dovršenosti projekta. Te šifre će se zatim predlagati u pojedinačnim redovima projekta.

Nakon odabira reda u prvoj tabeli, u drugoj je potrebno popuniti sledeća polja:

**Tip porekla troška/prihoda**: sadrži spisak šifara predviđenih troškova/prihoda koje će se koristiti za obračun procenta dovršenosti projekata tog tipa;

**Opis**: opis troškova/prihoda;

**Tip**: označava da li je reč o trošku ili prihodu;

**Izraz filtera**: ako polje nije popunjeno, uzimaju se u obzir svi dokumenti predviđeni za određenu šifru. Ako se određeni dokumenti žele isključiti (npr. prema tipu, numerisanju itd.), moguće je konfigurisati izraz filtera.

![](/img/it-it/configurations/tables/projects/revenue.png)