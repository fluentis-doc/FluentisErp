---
title: Ispravak rednih brojeva PDV obračuna
sidebar_position: 10
---

Funkcionalnost kojom se upravlja putem ovog obrasca omogućuje se masovna izmjena protokola PDV-a koji su dodijeljeni računovodstvenim evidencijama (vrste PDV-a, na primjer za ulazne ili izlazne fakture) kako bi se ispravile sve pogreške ili promijenilo za posebne potrebe.

U prvom redu, pretraživanje podataka koje je moguće pomoću ovog obrasca također može biti korisno kao provjera, na primjer, za nedostajuće brojeve protokola ili odstupanja (na primjer u vezi s izlaznim fakturama) između broja protokola i broja dokumenta koji oni predstavljaju evidentne nepravilnosti s fiskalnog gledišta.

Prilikom otvaranja obrasca potrebno je odabrati registar obveznika PDV-a za provjeru i/ili izmjenu te raspon datuma od interesa (za generalnu provjeru preporuča se od početka godine). Ovaj odabir se vrši na vrhu obrasca.

U ovom trenutku može se započeti pretraživanje pomoću naredbe **Traži** na traci izbornika.

Podaci se prikazuju u prvom prikazu odmah ispod područja filtra.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image02.png)

Budući da bi za provođenje provjera moglo biti zanimljivo sortirati podatke ne samo na temelju broja protokola, već na primjer na temelju broja dokumenta, a budući da je sam broj dokumenta alfanumerički niz, pomoću aktivacije oznake/flaga opcije **Razmotrite brojeve dokumenta poput broja** moguće je doraditi kriterije sortiranja.

Primjer:

- s deaktiviranom flagom bit će (redoslijed po broju dokumenta) 1, 10, 100, 2, 20, 200 .....

- uz aktivnog flaga bit će (poredak po broju dokumenta) 1, 2, 3, ... 10 ... 20 ... 100 ... 200

Odabirom retka iz tablice rezultata (Zapisi glavne knjige) relevantni detalji u vezi s registrom PDV-a i dnevnikom bit će prikazani u dva **daljnja dva prikaza u nastavku** (ovi podaci jasno predstavljaju detalje računovodstvene evidencije koje je unio korisnik ili postupak automatskog obračuna/knjiženja).

**MOGUĆE METODE PRENUMERACIJE / PROMJENE REDOSLIJEDA**:

- Djelomično: kao primjer, pretpostavka je da treba "pomaknuti" sve snimke unaprijed prema broju protokola počevši od br. 3 (kako bi se napravila "rupa" u numeriranju da bi se možda umetnuo zapis koji nedostaje).


 1. Odaberu se redovi na koje utječe prenumeriranje (na primjer od knjiženja s protokolom br. 3 nadalje), može se koristiti tipka Shift na tipkovnici ili kliknuti i povući mišem;
 2. Unese se broj startnog protokola u odgovarajuće polje **Početni broj** koje se nalazi na dnu obrasca (na primjer 4);
 3. Pritisne se tipka za **Automatsko numeriranje** koji se nalazi na traci izbornika;
 4. Novi protokoli bit će predloženi kao što se vidi na slici;
 5. Pritisne se **Spremi** (na traci izbornika) za potvrdu promjene.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image03.png)  ![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image04.png)

Alternativno (preporučuje se samo za izmjene pojedinačnih redaka ili nekoliko redaka):


 1. Pozicionira se na red koji se odnosi na zapis s protokolom br. 3, na novom protokolu PDV-a i unese se novi protokol (npr. 4)  
 2. Pritisne se **Spremi** (nalazi se na traci izbornika) za potvrdu promjene.  

- Odaberu se svi redovi rezultata dobivenog zahvaljujući filtru (primjerice svi zapisi od početka godine do danas) pomoću miša ili kombinacijom Ctrl+A; 


 1. Odabrati sve retke rezultata dobivenih pomoću filtra (na primjer, sve registracije od početka godine do danas) pomoću miša ili kombinacije Ctrl A; 
 2. Unese se broj startnog protokola u odgovarajuće polje **Početni broj** koje se nalazi na dnu obrasca (u ovom slučaju 1);    
 3. Pritisne se tipka za **Automatsko numeriranje** koji se nalazi na traci izbornika;  
 4. Novi protokoli bit će predloženi kao što se vidi na slici;  
 5. Pritisne se **Spremi** (na traci izbornika) za potvrdu promjene.  

Moguće je mijenjati kriterij sortiranja koji se koristi u operaciji ponovnog numeriranja odabirom, alternativno, između onih predloženih na dnu obrasca.

![](/img/it-it/finance-area/ledger-records/records/rearrange-vat-reference-number/image05.png)

Datum/broj unosa: broj protokola bit će dodijeljen u odnosu na napredovanje datuma unosa, a broj zapisa je isti kao i datum.  

Datum/broj dokumenta: broj protokola bit će dodijeljen u odnosu na napredovanje datuma dokumenta, a broj zapisa je isti  kao i datum.  

Vrsta dokumenta / datum / broj: broj protokola bit će dodijeljen u odnosu na vrstu dokumenta (npr. fakture, odobrenja), ako je vrsta dokumenta ista  (na temelju napredovanja datuma zapisa i ako je broj dokumenta isti).  

Flag **Ponovo napiši opise**, ako je aktivna, ažurira opis kretanja tijekom faze prenumeriranja gdje, na temelju postavki definiranih u **[obračunskom predlošku](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)**, omogućuje automatsko očitavanje PDV protokola. 






