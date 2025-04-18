---
title: Upravljanje plafonom
sidebar_position: 5
---

Obrazac se nalazi putem izbornika **Administracija > Izjave > Plafon > Novi** i omogućuje kreiranje *novog* izračuna plafona.  

## Kako kreirati Izračun plafona  

1.  Nakon otvaranja novog obrasca (nakon što kliknete naredbu *Novi plafon*), unesite sljedeće zaglavne podatke: 

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image01.png)

 **Opis**: Slobodan opis izračuna koji se unosi. Preporučuje se upisati opis koji sadrži početnu godinu i vrstu izračuna.  

**Godina**: Unosi se početna godina izračuna plafona koji se kreira.

:::tip[Napomena]
Tijekom upravljanja različitim izračunima moguće je "zatvoriti" razdoblje, primjerice na kraju godine, te unijeti novi izračun za sljedeću godinu. Ipak, to nije obavezno. Preporučuje se (radi praktičnosti) nastaviti s istim izračunom iz godine u godinu koristeći naredbu *Predloži vrijednosti*. 

Potreba za unosom novog izračuna javlja se u slučaju promjene metode izračuna, primjerice s fiksnog plafona na pomični.

:::

**Vrsta početka plafona**: određuje je li riječ o novom plafonu ili proširenju postojećeg pomičnog plafona; 

**Vrsta plafona**: Odabire se je li plafon Solarni (fiksni) ili Pomični (dva porezno predviđena načina upravljanja plafonom).

Datum početka plafona: potrebno je unijeti mjesec i godinu početka plafona. Ako je riječ o proširenju, tada je potrebno unijeti i **mjesec**, **godinu** i **iznos** posljednjeg izračunatog razdoblja (u odjeljku Svojstva plafona).

**Kontrolna vrijednost**: može se postaviti granična vrijednost kako bi se korisnika upozorilo da se približava potpunom iskorištenju plafona. Na primjer, ako je plafon 100.000 eura, a postavimo prag na 10.000, sustav će nas upozoriti kada se pređe 90.000 eura jer ostaje samo zadnjih 10.000 eura za korištenje.

**Zadano**: ovaj flag označava koji je izračun "trenutni", posebno u slučaju postojanja više spremljenih izračuna..

:::tip[Pažnja]
Ako postoji izračun plafona s ovim flagom aktivnim, pri kreiranju elektroničkog zapisa za slanje Poreznoj upravi u vezi [**izjava o namjeri**](/docs/finance-area/declarations/declarations/intent-declaration) automatski će se popuniti odgovarajuće polje.
:::

2. Učitavanje povijesnih podataka za korištenje: u detaljnoj mreži potrebno je unijeti podatke za prethodnih dvanaest mjeseci u odnosu na početni datum izračuna.

:::tip[Pažnja]
U slučaju **pomičnog** plafona, podaci se moraju unositi **mjesec po mjesec**, jer se svakog mjeseca odbacuje 12. mjesec koji izlazi iz razdoblja i dodaju se novi podaci za aktualni mjesec; 

U slučaju **solarnog plafona**, može se unijeti 11 mjeseci s **vrijednostima nula** a iznos ukupne prodaje koja ulazi u plafon unosi se samo za mjesec **prosinac** završne godine. 

Program će provjeriti potpunost podataka i spremiti plafon kako bi bio spreman za korištenje.
:::

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image02.png)

3. Svakog mjeseca bit će potrebno ući u obrazac za upravljanje plafonom kako bi se ažurirali podaci pritiskom na tipku **Predloži vrijednosti** (nalazi se u traci izbornika). 

**Za poništavanje izračuna određenog mjeseca, potrebno je obrisati razdoblja unatrag – počevši od zadnjeg (najnovijeg) mjeseca pa do željenog**. 

Dostupna vrijednost na početku mjeseca prikazuje se u pripadajućem stupcu.

### Traka Izbornika

|  |  |
| --- | --- |
| **Novi plafon** | Postavlja kursor na novi redak za unos podataka. |
| **Izbriši plafon** | Briše označeni redak izračuna. Nije moguće obrisati međupodatke, samo zadnji uneseni. |
| **Predloži vrijednosti** | Izvršava izračun za novi mjesec i predlaže vrijednosti u mreži. |






