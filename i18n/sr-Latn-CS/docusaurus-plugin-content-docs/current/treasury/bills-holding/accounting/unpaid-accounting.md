---
title: Knjiženje dugovanja 
sidebar_position: 4
---
Obrazac se nalazi u Riznica > Portfelj Efekata > Knjiženje > Knjiženje dugovanja.


Iz ovog obrasca prelazi se na knjiženje dugovanja: postupak ponovno otvara račune kupaca povezane s nepodmirenim potraživanjima i eventualno generira račun za naplatu troškova.

**Specifični gumbi**

**Traži**: Pretraži popis dugovanja za knjiženje.

**Knjiženje**: Izvršava knjiženje za odabrane stavke.

## Knjiženje dugovanja

1. Iskoristite gornji dio obrasca za filtriranje pretrage dugovanja za knjiženje. PAŽNJA: Prvo je potrebno izvršiti njihovo kreiranje.

2. Odaberite iz središnjeg dijela obrasca efekte koje želiš knjižiti.

3. Ispunite parametre za knjiženje kao što su **računovodstveni predložak** i **datum knjiženja**..

:::note[Napomena]
Ova sekcija može biti unaprijed definirana unutar [**parametara**](/docs/configurations/parameters/treasury/unpaids-parameters) unutar modula Dugovanja. 

Posebice:

- računovodstveni predložak se predlaže prema parametrima modula, 
- datumi registracije su postavljeni na današnji datum; 
- i podračuni za **Troškove protesta** i račun **Tranzit** preuzimaju se iz parametara modula, ali mogu se mijenjati ili unositi prema potrebi.

Flag **Sistematizacija knjiženja** bilježi u jednoj registraciji sve dugove predstavljene na istoj kreditnoj instituciji (banci): obično se ova opcija ne koristi, posebno ako je postavljena obaveza unosa datuma i broja fakture u računovodstveni predložak koji se koristi.

Flag **Naknada troškova** omogućava ponovno naplaćivanje troškova kupcu: s ovom opcijom, aktivira se sekcija za upravljanje mogućnošću fakturiranja tih troškova umjesto izravnog knjiženja u računovodstvu. U ovoj sekciji svi se podaci moraju postaviti kako bi se mogla stvoriti faktura za prodaju. 

Konačno, obavezno je unijeti: 
- **tip plaćanja** i
- **datum dospijeća plaćanja** koji će se dodijeliti za ponovno otvaranje stavke. Alternativno, flag **Datum dospijeća jednak datumu dospijeća efekta** 

Također u ovom slučaju dolazi do čitanja parametara obrasca za prijedlog ova dva podatka.
 
4. Kliknite gumb na traci izbornika **Knjiži**

### Predhodni

Sa prethodne kartice moguće je izvršiti poništavanje izvršenih knjiženja.

Poništavanje će biti moguće samo ako je razdoblje još uvijek moguće mijenjati (ako ispis knjige dnevnika i zatvaranje računa nisu izvršeni).

Dvostruki klik na sekciju registracija omogućit će pregled povezane računovodstvene registracije.

Prisutan je izvještaj za pregled uočenih pogrešaka tijekom knjiženja.




**Specifični gumbi**

**Traži**: Pretraži popis izvršenih knjiženja.

**Poništavanje knjiženja**: Izvršava obnovu odabranih knjiženja.

**Poništavanje dugovanja**: Izvršava obnovu odabrane računovodstvene registracije.

Prisutan je tab za pregled grešaka pohranjenih tijekom knjiženja.




