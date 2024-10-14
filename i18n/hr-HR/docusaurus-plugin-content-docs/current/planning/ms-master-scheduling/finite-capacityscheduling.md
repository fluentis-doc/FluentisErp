---
title: Planiranje s ograničenjem kapaciteta
sidebar_position: 3
---

Vremensko planiranje proizvodnje s ograničenjem kapaciteta omogućuje razumijevanje koliko rada može biti izraženo u određenom vremenskom razdoblju, uzimajući u obzir ograničenja određenih resursa. Konačni cilj je osigurati najveću učinkovitost proizvodnih tokova kroz interni pogon, optimizirajući vrijeme i smanjujući troškove radnih centara.   
Ovom vrstom planiranja moguće je stvoriti optimalne radne sekvence za svaki pojedinačni radni centar postižući njihovu maksimalnu iskorištenost.


## Radni nalozi  

Tablica radnih naloga prikazuje samo radne naloge koji se nalaze u stanju neplanirano.

*Specifični gumbi*:

> **Zakazivanje F.C.S.**: omogućuje sustavu da planira faze obrade dokumenata s ograničenjem kapaciteta;    
> **Izmjeni datum radnog naloga**: omogućuje promjenu datuma komitenta;    
> **Promjena prioriteta**: omogućuje promjenu prioriteta odabranih komitenta;      
> **Parametri MRP**: omogućuje otvaranje parametara MRP za odabrane komitente;    
> **Sastavnica materijala**: omogućuje otvaranje struktura materijala za odabrane komitente;    
> **Proizvodni ciklus**: omogućuje otvaranje radnih ciklusa za odabrane komitente.         

*Specifični filteri*:

**Tip radnog naloga**: pomoću ovog izbornika moguće je odabrati vrstu radnog naloga koju želite prikazati, bilo da se radi o radnim nalozima za jedan proizvod, radnim nalozima za više proizvoda ili oba;  

**Mjesto proizvodnje**: možete pregledati narudžbe prema proizvodnom mjestu na kojem se proizvode, odabirom putem odgovarajućeg izbornika;  

*Specifična polja u mreži Rezultata*

**Predloženi datum**: je pojasnjen u članku o općim parametrima rasporeda, gdje aktiviranje posebnog flaga nazvanog [Provjeri zakašnjele dokumente s ATP](/docs/planning/ms-master-scheduling/general-schedule) upravljač rasporeda će provesti razmatranje. Ako je bilo koji od generiranih i raspoređenih naloga u kašnjenju u odnosu na planirani datum, sustav će obrisati sve stvorene naloge i ponovno početi s generiranjem od datuma MS, što se definira u parametrima i aktivira samo postavljanjem zastave *Provjeri dokumente u kašnjenju s ATP*. Nova datum će biti predložen za narudžbe u polju *Predloženi datum* koje se nalazi u mreži rezultata.  

### Postupak Vremenskog planiranja F.C.S.  

Iz kartice **Radni nalog** mogu se odabrati neplanirane komisije koje se žele uzeti u obzir.   
Pritiskom na gumb **Vremensko planiranje F.C.S.** postupak će izvršiti prvo raspoređivanje bez ograničenja kapaciteta na odabrane, neplanirane komisije, koristeći parametre koji su navedeni u kartici **Opći parametri**. Nakon toga, provest će se raspoređivanje s ograničenjem kapaciteta na sve dokumente navedene u **Parametri planiranja konačnih kapaciteta**.

Kao i u slučaju općeg raspoređivanja, planirane narudžbe moći će se pregledati u obrascu [Pretraga planirane narudžbe](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

Da biste vidjeli sve izvršene rasporedne zadatke i povezane greške/upozorenja za svaku narudžbu, jednostavno se premjestite na karticu **Arhiva**.    

## Parametri generičkog vremenskog planiranja  

Svi parametri vezani za fazu općeg raspoređivanja mogu se pregledati izravno u artiklu vezanom za [Opći vremenski raspored](/docs/planning/ms-master-scheduling/general-schedule) u odjeljku **Parametri općeg raspoređivanja**.        

## Parametri planiranja konačnih kapaciteta   

:::note NAPOMENA 
Prije nego što nastavite s planiranjem F.C.S.-a, važno je postaviti parametre unutar ovog taba kako biste izvršili planiranje s ograničenjem kapaciteta.  
::: 

**Planiranje što je prije moguće ili što je kasnije moguće**: te se zastavice ne koriste, a uvijek je aktivna samo zastavica *Najranije*, budući da se planiranje kapaciteta na temelju ograničenih resursa trudi maksimizirati iskorištenje radnih centara što je prije moguće;          

**Od datuma**: omogućava definiranje datuma od kojeg počinje planiranje s ograničenjem kapaciteta; preporučuje se kao *Današnji datum*, ali se može povećati za broj dana koji se može unijeti iz *Parametara MPS* u polju *Sljedeći dani planiranja*.  

**Operacija na planiranim nalozima Ponovno izračunavanje vremena**: zastava je uvijek aktivna i omogućuje ponovno izračunavanje vremena u planiranim nalozima;      

**Preračun proizvodnih nalog**: omogućuje odabir koje proizvodne naloge, među *Pokrenutim* i/ili *Izvršnim*, treba uzeti u obzir prilikom planiranja F.C.S.;    

**Preračun faza**: omogućuje odabir koje proizvodne faze, *Nisu započete* i/ili *Već započete*, treba uzeti u obzir prilikom planiranja F.C.S.;      

**Faze načina ponovnog izračuna već su započete**: omogućuje odabir načina na koji procedura schedulacije F.C.S. treba ponovno izračunati preostali dio već započetih faza. Može se odabrati da se prioritet da radnom vremenu označavanjem opcije *Radno vrijeme već radilo, a zatim Količina već proizvedena*, ili dati prednost proizvedenoj količini s opcijom *Količina već proizvedena, a zatim Radno vrijeme već radilo*;       

**Blokiraj obvezne naloge**: omogućuje vam odabir vrsta narudžbi između *Planiranih*, *Pokrenutih* i *Izvršnih*, koje, ako imaju omogućenu zastavicu *Obavezno*, neće biti promijenjene postupkom raspoređivanja F.C.S.;    

**Početak radova na raspoloživost materijala**: ako je omogućeno, raspoređivanje F.C.S. će također provjeravati raspoloživost materijala do datuma navedenog u polju **Provjerite dostupnost do**, nakon čega će raspoređivanje nastaviti bez uzimanja u obzir raspoloživosti materijala. Aktiviranjem zastavice **Provjerite dostupnost samo kritičnih materijala**, postupak će provjeravati raspoloživost samo za materijale koji imaju aktiviranu zastavicu *Kritično* u odvojenoj bazi;   

**Razmotri dostupnost materijala**: omogućit će odabir načina na koji se razmatra dostupnost materijala između *Opće* (nezavisno od proizvodnog naloga koji ga angažira) i *Po Proizvodnom Nalogu*; trenutno je dostupno samo *Opće* pravilo.   

U donjem dijelu obrasca moguće je naznačiti kriterije prema kojima raspoređivanje s ograničenom kapacitetom treba djelovati za dokument.  

:::note NAPOMENA  
Sukladno prethodno aktiviranim zastavicama, raspoređivanje F.C.S. će rasporediti različite dokumente prema sljedećem redoslijedu: Faze koje su već započete, Faze koje još nisu započete, Narudžbe za proizvodnju u izvršnom stanju, zatim pokrenute narudžbe, i na kraju planirane narudžbe.  
::: 

U tablici **Zakaži prioritete izbora** moguće je pomicati pojedinačne stavke metodom povlačenja i ispuštanja unutar tablice **Prioriteti izbora**, gdje se također mogu promijeniti prioriteti. Ako se odaberu opcije *Kritični klijenti* ili *Kritični centri za obradu*, aktivirat će se tablica **Detaljni raspored prioriteta**, gdje će se moći unijeti kritični klijenti ili centri za obradu, te će se također moći promijeniti njihovi prioriteti.    

*Posebni gumbi*:

> **Poništi prioritet**: omogućuje vraćanje zadanih prioriteta unutar tablice *Prioriteti rasporeda*.    

## Praćenje

Na ovoj kartici, aktiviranjem ili deaktiviranjem dostupnih oznaka, korisnik može odabrati prikaz rezultata raspoređivanja u kartici **Arhiva**.  

Možete odlučiti hoćete li prikazati uzete **Kalendare** (*Proizvodni kalendar* i *Kalendar kapaciteta*), te možete odabrati da se prikaže upozorenje ako raspoređivanje sadrži **Stavke bez** *MRP parametara*, bez *Popisa materijala* ili *Radnog ciklusa*, bez *Preferiranog dobavljača* (za narudžbe za kupnju), bez *Preferiranog podizvođača* (za narudžbe za rad na račun), i bez naznačene minimalne razine zaliha za sve artikle koji se upravljaju na osnovu zaliha. Za svaki **Radni nalog** možete odabrati prikaz u povijesti *Broja raspoređenih linija* i detalje tih linija, kašnjenja i isteka narudžbi.  

Što se tiče **Planiranih narudžbi**, možete odabrati prikaz u povijesti *Broja generiranih narudžbi* i njihovih *Detalja*, *Kasnih* *Isteklih* narudžbi, te *Alternativnih Materijala*. Također možete odabrati da budete obaviješteni ako postoje **Planirane narudžbe bez** *Materijala*, *Radnih faza*, *Dobavljača* (za kupovinu) i *Podizvođača* (za rad na račun).  

**Legenda**: aktiviranje zastavica omogućuje primanje obavijesti i detalja o odabranim stavkama.  

## Arhiva

U mreži ovog obrasca prikazuju se sve sažete informacije o raspoređivanju narudžbi.  

**Redni broj planiranja**: prikazuje jednostavan redni broj operacije raspoređivanja koju je pokrenuo korisnik;  

**Operater**: prikazuje korisnika koji je pokrenuo raspoređivanje;  

**Br. grešaka**: prikazuje broj evidentiranih grešaka tijekom postupka raspoređivanja;  

**Datum početka**: prikazuje datum i vrijeme početka postupka raspoređivanja;  

**Datum završetka**: prikazuje datum i vrijeme završetka postupka raspoređivanja;  

**Podaci raspoređeni iz**:  prikazuje točan izvor raspoređenih podataka;  

**Predviđanje**: označava jesu li podaci iz Prognoze prodaje ili Glavnog plana proizvodnje;  

**Razdoblje**: prikazuje vrstu prognoze, tjedno ili mjesečno;  

**Dan**: prikazuje dan u tjednu koji je određen kao datum završetka planirane proizvodne narudžbe prema Definiciji MPS.    

Sve ostale stupce u mreži prikazuju postavke koje su korištene u kartici **Parametri** raspoređivanja za odabranu liniju.   

**Rezultat vremenskog planiranja**

Na temelju odabrane linije u mreži, u ovoj sekciji će se prikazati eventualne greške i/ili upozorenja s detaljima koje je korisnik zatražio u kartici **Praćenje**.

Za detalje o općim funkcijama obrasca, pogledajte link [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).




