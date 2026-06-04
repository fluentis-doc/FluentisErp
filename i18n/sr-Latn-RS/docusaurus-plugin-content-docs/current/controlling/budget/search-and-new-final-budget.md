---
title: Pretraživanje i Novi Konsolidirani Budžet
sidebar_position: 5
---

## Pretraživanje

Naredba **Konsolidirani budžet** omogućuje pretraživanje, upravljanje i ispis obračuna konsolidiranih budžeta, kako bi se procijenio trend i odstupanja između planiranih i ostvarenih vrijednosti. Možemo kreirati nove zapise (pomoću tipke Novi na ribbon traci ili naredbom Novi konsolidirani budžet u izborniku) ili uređivati postojeće.  

Odabirom opcije **Novi konsolidirani budžet** otvara se forma za unos ostvarenih vrijednosti za ***pojedine podbudžete***, kako bi se mogla analizirati **dinamika i odstupanja**.

## Kako dobiti analizu odstupanja na konsolidiranom budžetu

1. U padajućem izborniku **Budžet** odabrati planski budžet koji se želi usporediti s ostvarenim vrijednostima (za analizu odstupanja na konsolidiranoj razini).  
2. U desnom dijelu zaglavlja forme odabrati podatke **na razini ostvarenja** koji mogu biti:  
    - **Međugodišnje zatvaranje** prethodno obrađeno, odabrano iz pripadajućeg izbornika;  
    - **Podaci iz Controllinga**, odnosno iz *kontroling računovodstva*, aktiviranjem pripadajućeg označnog polja te odabirom **Područja** analize, **Dimenzije** i **raspona razdoblja** (godina / mjesec).  
3. Spremiti zaglavlje s parametrima iz prethodnih koraka, a zatim redom odabrati pojedine *podbudžete* u gornjoj tablici;  
4. Pritisnuti tipku **Izračunaj konsolidirani budžet** koja popunjava detaljne podatke u donjoj tablici za svaki podbudžet označen u gornjoj tablici.  
 
U donjoj mreži, ovisno o vrsti pod-proračuna koja je valorizirana, imat ćemo stupce s ukupnim podacima proračuna i ukupnim podacima konačnog računa (one označene kao ***stvarno***), za procjenu odstupanja.

:::note[Bilješka]
Ako zatvaranje između godišnjih razdoblja (ili postavljeni kontrolni periodi) traje do 31.06., na primjer, automatski će se zbrojiti i procijeniti prvih 6 mjeseci proračuna.

Forma ne prikazuje detaljnu usporedbu po pojedinom razdoblju, ali ona postoji u pozadinskoj obradi (objekt FSBudgetActualObjectValueByPeriod) i dostupna je za izradu nadzornih ploča i prilagođenih vizualizacija.

:::

## Ispis Analize Budžeta

Izvještaj ***Analiza budžeta*** prikazuje iste podatke o konsolidiranim budžetima kao i forma. Prije pokretanja ispisa dostupni su filtri koji odgovaraju prikazanim podacima: Vrsta budžeta, Vrsta razdoblja te Datum / Broj za planske i ostvarene vrijednosti.