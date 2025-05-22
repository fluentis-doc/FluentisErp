---
title: Bankovni računi 
sidebar_position: 1
---


Modul bankovnih računa omogućuje provjeru i usklađivanje bankovnih kretanja u računovodstvu s izvodom računa (ili popisom kretanja) koji se može preuzeti kao elektronička datoteka s online bankarstva. 

Modul je prisutan u području riznice i preuzima podatke iz računovodstva. 


### Uvoz izvoda 
Ovaj obrazac omogućuje uvoz izvoda po bankovnom računu iz elektroničke datoteke koja se može preuzeti iz online bankarstva. 

Prvo se mora u podnožju obrasca (na dnu) postaviti bankovni podračun za koji se želi uvesti datoteka, a zatim pritiskom na tipku  ***Novo*** otvara se forma za uvoz datoteke koja omogućuje definiranje mjesta na kojem je pohranjena datoteka za uvoz. Nakon uspješnog završetka operacije, pojavit će se novi red uvoza u prikazu: dvostrukim klikom na red ili korištenjem tipke ***Izmjeni*** mogu se vidjeti pojedinosti uvezenih podataka. 

Tako uvezena kretanja moći će se koristiti u postupku usklađivanja i za nastavak automatskog stvaranja računovodstvenog unosa počevši od podataka u datoteci. 


### Obrazac za pretraživanje/popis uvezenih izvoda/kretanja 
U glavnom obrascu gdje se pretražuju sve uvezene transakcije, moguće je pomoću odgovarajućih oznaka filtrirati samo transakcije koje treba uskladiti, samo one koje su usklađene ili oboje. U prikazu rezultata postoje dvije zastavice koje identificiraju je li kretanje već ***usklađeno*** s prethodno unesenim računovodstvenim unosima (***Izravnavanje***) ili je uvezeno kretanje automatski generiralo računovodstveni unos ***(Usklađeni račun)***.

Nakon toga slijede daljnji podaci prijavljeni u pojedinostima uvezene datoteke, a najvažniji su datum, ukupna i djelomična stanja transakcija, predznak (dugovanje/potraživanje) i broj kretanja.

### Pojedinosti o postupku kretanja i usklađivanja​
Unosom pojedinosti kretanja dvostrukim klikom ili gumbom ***Izmijeni***, različita kretanja sadržana u datoteci prikazuju se u tablici rezultata s relativnim iznosom, predznakom i datumom valute banke. Također se bilježe podaci odgovarajućeg knjiženja prisutni ili generirani u Fluentisu. Na prvom mjestu je zastavica koja identificira je li kretanje već usklađeno ili nije. 

Za pregled detaljnog opisa kretanja sadržanog u datoteci, koristi se gumb + lijevo od polja Izravnan (na prvoj poziciji).  

**MOGUĆI POSTUPCI:**

- ***Automatsko izravnavanje***: pojavljuje se skočni prozor koji omogućuje da se odaberu kriteriji automatskog podudaranja podataka putem zastavica (na primjer, isti datum, isti iznos itd.) Pretraživanje i usklađivanje počinje gumbom ***Pokreni*** i može se poništiti gumbom ***Poništi***. Transakcije će se automatski ažurirati postavljanjem oznake za usklađivanje, dok se one koje nisu pronađene, mogu uskladiti ručno ili ako stvarno nedostaju, nastaviti s njihovim automatskim stvaranjem.

- ***Ručno(manualno) usklađivanje***: pritiskom na tu tipku automatski se otvara obrazac [***Prikaži konta*** ](/docs/finance-area/ledger-records/records/view-accounts) i filtri podračuna (koji odgovaraju odabranoj banci), a datumi se automatski popunjavaju kako bi odgovarali kretanju koje treba uskladiti. Prvo je potrebno **pritisnuti tipku Prikaži konta** i tražiti. Nakon što je identificiran odgovarajući pokret, odabere se redak i pritisne gumb ***Uskladiti*** (gore na traci izbornika). U ovom se koraku unos ručno usklađuje, a poveznice i oznake ažuriraju.

- ***Otkaži usklađivanje (pomirenje)***: omogućuje da se otkaže već provedeni postupak usklađivanja brisanjem poveznica prema računovodstvenoj evidenciji.

- ***Knjiži***: pritiskom na gumb, za automatsko kreiranje računovodstvenog unosa, pojavljuje se skočni prozor u kojem se može odabrati željeni računovodstveni unos. Nastavkom se automatski otvara obrazac za računovodstveni unos u kojem se nalaze svi podaci koji se mogu otkriti iz uvezene datoteke i sve što preostaje je popuniti eventualne dodatne podatke (kao što su stavke koje se zatvaraju u slučaju naplate ili plaćanja itd.) i zatim spremiti knjigovodstveni unos.

:::important[DETALJ KNJIGOVODSTVENE PROCEDURE: AUTOMATSKO ZATVARANJE OTVORENIH STAVKI]
Ovisno o banci koja izdaje elektroničke datoteke na raspolaganje, postoje više ili manje detaljne datoteke.

Logika prema kojoj Fluentis može automatski upravljati zatvaranjem otvorene stavke koja može biti prisutna u sustavu je sljedeća:

- Ako je polje *Referenca vjerovnika depozita* prisutna u uvezenoj elektroničkoj datoteci (vidljivo na Fluentisu otvaranjem pojedinosti redaka datoteke pomoću gumba + s lijeve strane) i referentni kod prisutan u polju pored, te stavke će se koristiti za traženje otvorenih stavki. Podaci moraju odgovarati polju *Referentni broj* prisutnom u podudaranju (onom uz polje *Referentni model plaćanja*).
- Ako prvi uvjet nije zadovoljen, postupak će pročitati polje IBAN računa u elektroničkoj datoteci (uvijek vidljivo otvaranjem pojedinosti redaka kako je objašnjeno u prethodnoj točki) i pretražit će postoji li računovodstveni račun kod Kupca / Podaci o dobavljaču koji pokazuju isti IBAN. Ovaj IBAN **mora** se nalaziti u polju IBAN u šifarmiku u kartici Plaćanja, namijenjenom isključivo za bankovne podatke kupaca i dobavljača, Stoga se ne smije miješati s istim poljem koje se nalazi u gornjem prikazu pod nazivom  *Vrste plaćanja*.
Ako se IBAN podudara, tražit će se otvorena stavka za taj račun s istim iznosom, ako ih ima više s istim iznosom, uzet će se onaj s najstarijim rokom valjanosti.
- Ako nije pronađeno podudaranje koje odgovara prethodnim kriterijima, ali je još uvijek vidljiv račun kupca ili dobavljača s odgovarajućim IBAN-om, Fluentis će samo umetnuti redak u računovodstvo bez automatskog generiranja plaćanja.
- Ako se preko IBAN koda ne pronađe račun kupca/dobavljača, Fluentis će umetnuti samo redak koji se odnosi na banku u računovodstveni unos, a unos će ostati za popunjavanje retkom kupca/dobavljača.
:::

:::danger[PAŽNJA]
**Predložak** knjiženja koji se koristi za automatsko generiranje zapisa o prikupljanju i plaćanju, kao što je gore opisano,  **mora se promijeniti** u usporedbi s uobičajenim postavkama. 
Odnosno, mora se modificirati redak. Primjerice, onaj koji se odnosi na banku koji je obično povezan s vrstom Ukupni dokument / iznos registracije. Ova vrsta iznosa mora se mijenjati, na primjer, postavljanjem  **Iznosa podračuna**, kao za liniju kupca/dobavljača.

**Ako se to ne učini, postupak će dvaput umetnuti bankovnu liniju i zapis se neće automatski zbrajati**.
:::