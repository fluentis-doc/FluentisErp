---
title: Valorizacija skladišta
sidebar_position: 6
---

Postupak omogućuje zatvaranje skladišta na određeni datum koji korisnik mora unijeti u polje  **Datum zatvaranja**.
Prema zadanim postavkama, trenutni datum se predlaže kao **Datum zatvaranja**.
Osim toga, postupak će također stvoriti pokret otvaranja sa svim preostalim zalihama s datumom jednakim **Datumu zatvaranja** uz dodatan dan, koristeći uzrok prisutan u [Vrsta knjiga](/docs/configurations/tables/logistics/warehouse-templates) s oznakom **Ostaci**.

*Posebni gumbi*  
> **Zatvaranje**: pokreće postupak zatvaranja koji vrši niz provjera ispravnosti podataka u skladištu, signalizirajući eventualne greške koje će zatim morati biti ručno ispravljene od strane operatera prije ponovnog postupka; u slučaju da nema grešaka, postupak će izvršiti zatvaranje skladišta na **Datum zatvaranja** i otvaranje sljedećeg dana s preostalim zalihama;                 
> **Kreiraj valorizaciju**: koristi se u lokalizacijama poput Rumunjske i Hrvatske gdje se pokreti skladišta također moraju evidentirati u računovodstvu;          
> **Povrati zatvaranje**: omogućuje povratak posljednjeg provedenog zatvaranja;        
> **Uskladi s knjigovodstvenim podacima**: koristi se u lokalizacijama poput Rumunjske / Hrvatske gdje se pokreti skladišta također moraju evidentirati u računovodstvu.   


<u>Sljedeće procedure su specifične za inozemne lokacije kao što su Rumunjska i Hrvatska.</u> 

## Kreiraj valorizaciju

Postupak **Kreiraj valorizaciju** izračunava cijene i mijenja vrijednosti u skladišnim promjenama. Koristi se u slučajevima nedovršenih, nezavršenih ili neusklađenih skladišnih dokumenata. To se događa uglavnom zbog nedostatka podataka (cijena i količina) prilikom unosa skladišnih dokumenata, pogrešaka dobavljača ili pogrešnih unosa korisnika, kašnjenja u dostavi skladišnih dokumenata ili naknadnih unosa promjena u postojeće dokumente. Pokretanjem ovog postupka aplikacija ponovno izračunava nove vrijednosti artikala (FIFO) i izravno ih upisuje u postojeći dokument. Dakle, sažeto, postupak mijenja vrijednosti u postojećim dokumentima, ne stvara nove dokumente koji bi uklanjali/povećavali vrijednost. Stoga je postupak nepovratan i nije moguće povratiti postojeće podatke prije izvođenja postupka. Ova se funkcionalnost uglavnom primjenjuje tijekom razdoblja u kojem se izvodi vrednovanje. Ponovno izračunavanje (FIFO) i promjena vrijednosti u dokumentima započinju od datuma zatvaranja skladišta.    

:::danger UPOZORENJE 
Važno je obratiti posebnu pažnju na postavke u [Inicijalni parametri skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters), pogotovo ako je datum zatvaranja skladišta u prethodnoj godini.       
:::

Na primjer, datum početka je 01.10.2023., dok bi današnji datum mogao biti, recimo, 28.3.2024. Pokretanjem postupka **Kreiraj valorizaciju**, vrijednosti u skladišnim dokumentima bi bile promijenjene od 01.10.2023. do današnjeg datuma.   
Dakle, budući da je 2023. godina prošla i vjerojatno je već financijski zatvorena, vrijednosti u skladišnim dokumentima od 1.10.2023. do 31.12.2023. bi bile promijenjene, što bi značajno izmijenilo već zaključene izvještaje za 2023. godinu.     

## Uskladi s knjigovodstvenim podacima

Postupak **Uskladi s knjigovodstvenim podacima** izvršava se nakon postupka **Kreiraj valorizaciju**.   
Nakon što je postupak **Kreiraj valorizaciju** dovršen i vrijednosti u skladišnim dokumentima su promijenjene, također je potrebno napraviti promjene u povezanim računovodstvenim dokumentima.   
U ovoj fazi, postupak **Uskladi s knjigovodstvenim podacima** usklađuje promjene nastale vrednovanjem skladišta i mijenja vrijednosti u računovodstvenim knjigama kako bi osigurao financijsku usklađenost s vrijednostima u skladišnim dokumentima.    

:::danger UPOZORENJE 
I ovaj postupak je nepovratan i mijenja iznose u postojećim dokumentima.        
:::

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom radu obrazaca, obratite se sljedećoj vezi: [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).
