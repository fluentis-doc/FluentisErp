---
title:  Izrada i upravljanje prezentacijskom listom
sidebar_position: 6
---

Obrazac se nalazi na putanji **Riznica > Dospijeća plaćanja > Kreiraj popis** i omogućuje izradu *novog* popisa ili *izmjenu/pregled* već postojećeg popisa.

## Kako kreirati popis za prezentaciju

<details>

  <summary>Kliknite za glavne korake</summary>
 
  1. Odaberite **Tip** (popisa); ako ste povezali podračune / protustavke, ti će se podaci automatski popuniti, u suprotnom ih unesite ručno;  
  2. **Spremi** upravo kreirano zaglavlje popisa;  
  3. Koristite gumb **Preuzimanje vrijednosnog papira** (na traci izbornika) kako biste u popis dodali prethodno kreirane vrijednosne papire;  
  4. Koristite gumb **Izrada Ri.Ba. datoteke** (na traci izbornika) za kreiranje telematičke datoteke koju ćete poslati banci;  
  5. Otvorite popis pomoću gumba **Documenti** (na traci izbornika)  za pristup telematičkoj datoteci u privitku;  
  6. Nakon što otvorite telematičku datoteku, koristite **Spremi privitak** kako biste preuzeli kopiju na svoje računalo i poslali je banci;  
  7. Ispišite popis ili aktivirajte oznaku **Ispisano**;  
  8. Koristite **Knjiži i zatvori** ako želite knjižiti popis.

</details>

1. *Unos podataka*:  

> 1.1. Unesite *Vrstu popisa* pomoću padajuće liste **Tip**: sustav će automatski generirati uzastopni broj popisa prema **brojaču** povezanim s vrstom i za odgovarajuću **godinu**.
>1.2. **Datum popisa prezentacija** predlaže se kao današnji datum, ali ga možete promijeniti po potrebi.  
>1.3. **Valuta** popisa predlaže se na temelju valute aktivnog društva: ako je dodijeljena valuta različita od eura, tada će popis sadržavati samo vrijednosne papire u istoj valuti.  
1.4. Sekcija **Podkonta / Protustavke** može se automatski popuniti na temelju postavki [**Tip sastavnice materijala**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types). Ako konti nisu unaprijed definirani za odabranu vrstu popisa, ručno ih unesite u sljedeća dva polja: 
>> - **Tekući račun banke** (radi se o pomoćnom računu povezanim s matičnim podacima banke, na koji će biti izvršena konačna uplata nakon uspješnog završetka transakcije) i      
>> - **Protustavka prezentirano na naplatu / Popust / Nakon naplate** (prijelazni konto prezentacije; prilikom *knjiženja popisa* ovaj konto zatvara *konto aktivnog portfelja* i knjiži iznos na protustavku; kasnije, kod knjiženja naplate, iznos će se preknjižiti s ovog konta na *Tekući račun banke*).  
> 1.5. Ako ste u matičnim podacima banke definirali ograničenje za kreditni limit, prikazat će se iznosi odobrenog limita i preostalog raspoloživog iznosa u sekciji *Status kreditne linije*.  

Ako ste vrijednost castelletta postavili u sekciji *Razlikuj* (umjesto *Globalno*)  odaberite vrstu prezentacije pomoću radio gumba u sekciji **Tip prezentacije** kako biste posebno upravljali vrijednostima *Odobren* i *Ostatak*.

2. **Spremi** zaglavlje popisa koji ste upravo kreirali. Nakon spremanja, aktivirat će se različiti upravljački gumbi u traci izbornika. 

3. Pomoću gumba **Preuzimanje vrijednosnih papira** (na traci izbornika) unesite prethodno kreirane vrijednosne papire u popis. Ova funkcija otvara prozor za pretraživanje vrijednosnih papira koji su izdani, ali još nisu uključeni u neki popis. VAŽNO: U ovaj popis moguće je uključiti samo one vrijednosne papire koji imaju ispravno popunjene podatke o banci (abi/cab).

Dodavanje vrijednosnih papira u popis automatski ažurira *Ukupno račun / Ukupno unaprijed plaćeno* , prikazan pri dnu forme. Za uklanjanje vrijednosnog papira iz popisa, označite ga i pritisnite tipku *Delete* a tipkovnici, ili kliknite na gumb ***Izbriši vrijednosne papire*** na traci izbornika.

4. Pomoću gumba **Generiranje Ri.Ba. datoteke**  izradite telematski zapis popisa koji ćete poslati banci. Alternativno, ovisno o vrsti popisa, možete generirati i druge formate kao što su SDD (bivši RID, sada SEPA standard) ili LCR (francuski format).

5. Otvorite dokument menadžer klikom na gumb **Dokumenti** (na traci izbornika) kako biste preuzeli datoteku na svoje računalo za slanje banci.  

6. Nakon što otvorite dokument u dokument menadžeru, kliknite na gumb **Spremi privitak** kako biste preuzeli kopiju na svoje računalo i poslali je banci.

7. Po dovršetku popisa moguće je izvršiti **ispis** popisa (ili označiti polje *Ispisano*).

:::tip[Info]
**Status popisa kao ispisan je obavezan uvjet za njegovo knjiženje**, koje se može izvršiti izravno iz ovog prozora pomoću gumba **Knjiži i zatvori**: potrebno je unaprijed definirati knjižnu šifru u parametrima modula.
:::

8. Pomoću gumba **Knjiži i zatvori** izvršite knjiženje popisa, ako je potrebno.

:::note[Napomena]
Pregled stanja bankarskog kreditnog limita prikazuje podatke o odobrenom limitu SBF (salvo buon fine) upisanom u matične podatke banke *Bankovni račun* i raspoloživi ostatak temeljen na iznosima vrijednosnih papira koji su predani, ali još nisu odobreni na računu.

Niz oznaka bilježi sljedeće informacije o popisu:
- je li popis ispisan (obavezan uvjet za knjiženje), 
- ako je **Izrađena** telematička **Datoteka**, 
- ako je **Knjiženo** i 
- ako se radi o **RID** povezano s **Potrošnja** ili o popisu LCR.
:::

### Kartica **Plaćanja**

- aktivna je **samo u slučaju** popisa s oznakom ***Vrijednosni papiri prema dobavljaču***

- koristi se za odabir otvorenih stavki dobavljača koje će biti zatvorene prijenosom vrijednosnih papira unutar samog popisa.

Ukupni iznos u sekciji **Plaćanja** mora odgovarati ukupnom iznosu predanih vrijednosnih papira: kako bi se postiglo ovo usklađenje, moguće je ručno unijeti redak razlike, koji će se knjižiti kao otvorena stavka na strani dobavljača, ako knjižna šifra omogućuje otvaranje novih stavki.

**Specifični gumbi**:

*Novo plaćanje*: Aktivira kursor na novom retku plaćanja.

*Brisanje plaćanja*: Briše odabrana plaćanja u mreži.

*Plaćanja iz otvorenih stavki*: Otvara pomoćni prozor za odabir stavki dobavljača koje treba zatvoriti.