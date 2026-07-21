---
title: Sekvenca faza - višeslojna mreža
sidebar_position: 2
---

:::important Čemu služi
Postupak **Sekvenca faza** u Fluentisu, putem funkcionalnosti **"Sekvenca faza - višeslojna mreža"**, omogućuje optimizaciju upravljanja proizvodnim fazama sastavljanjem sekvenci ručno ili na temelju prilagođenih pravila.      
Nakon pažljivog odabira filtara, među kojima su radni centar, razdoblje naloga i proizvodni projekt, faze koje još nisu sekvencirane prikazuju se u gornjoj mreži. Odatle se faze premještaju u donju mrežu kako bi im se dodijelio redoslijed izvođenja.      
Obrazac uključuje alate za izmjenu podataka povezanih s fazama, izračun vremena i ažuriranje datuma, čime se osigurava precizna kontrola planiranja proizvodnje. Posebni gumbi olakšavaju izračun sekvenci, upravljanje zalihama i ažuriranje statusa naloga, osiguravajući učinkovit tijek proizvodnje.
:::

Omogućuje sekvenciranje faza ručno ili prema pravilima koja definira operater.

Obrazac se sastoji od početnog područja za filtriranje u kojem je moguće odabrati:

> **Radni centar**       
> **Stroj**        
> **Na datum početka narudžbe**         
> **Na datum završetka narudžbe**      
> **Proizvodni projekt**     

Proširenjem ovog područja moguće je filtrirati i prema, primjerice, *Artiklu*, *Sekvenci/Redoslijedu*, *Tipu proizvodnog projekta*, *Grupama radne snage*, a također je moguće odabrati koje vrste naloga prikazati: planirane naloge, proizvodne naloge u statusu lansiran ili izvršni.

Središnji dio obrasca sastoji se od dvije mreže.           
Prva prikazuje sve radne faze kojima još nije dodijeljena sekvenca. Odabirom jedne ili više faza iz prve mreže i pritiskom na gumb *Premjesti faze*, odabrane faze premještaju se u drugu mrežu (ispod), gdje im je moguće dodijeliti sekvencu ručno ili automatski.

:::note Napomena
Nije moguće mijenjati podatke faze koja je već prijavljena u proizvodnji.
:::

U donjem dijelu obrasca nalaze se sljedeća polja:

> **Količina obveze**: prikazuje ukupnu količinu angažmana/obveze za retke koje je korisnik odabrao;         
> **Jedinica mjere vremena**: označava jedinicu vremena u kojoj se želi prikazati vrijednost polja **Ukupno vrijeme**;     
> **Ukupno vrijeme**: prikazuje ukupno vrijeme (*Vrijeme stroja + Vrijeme rada + Vrijeme pripreme*) za retke koje je korisnik odabrao.

Dodatnim proširenjem ovog dijela prikazuju se sljedeći detaljni podaci samo za pregled:

> **Količina**
> **Vrijeme rada**
> **Vrijeme stroja**
> **Vrijeme pripreme**

*Posebni gumbi*:

> **Traži**: prikazuje faze na temelju unesenih filtara;           
> **Pretraži i razmotri zalihe**: izvršava istu funkciju kao gumb **Traži**, ali istovremeno crvenom bojom označava sve faze za koje trenutno nema raspoloživih zaliha;                   
> **Premjestiti faze**: premješta odabranu fazu ili faze iz prve mreže u drugu mrežu, gdje im je moguće dodijeliti sekvencu;         
> **Promijeni faze**: nakon odabira faze omogućuje njezino *Ažuriranje* promjenom faze, stroja, radnog centra, ukupnog vremena stroja, vremena rada i vremena pripreme. Osim toga, odabirom opcije *Unesi* moguće je dodati novu fazu, a opcijom *Obriši* trajno ukloniti postojeću;            
> **Promijeni ciklus/verziju**: omogućuje promjenu tehnološkog postupka i/ili verzije u tom proizvodnom nalogu;            
> **Promijenite datume**: omogućuje promjenu datuma početka odabrane faze;         
omogućuje promjenu *Datuma početka* za sve odabrane planirane ili proizvodne naloge na datum naveden u skočnom prozoru. Nakon toga, na temelju faza i *Kalendara proizvodnih kapaciteta*, ponovno se izračunavaju *Datum završetka naloga* te datumi početka i završetka svake faze. Na temelju novih datuma ponovno se izračunavaju i datumi korištenja materijala. Uz datume na nalogu ažuriraju se i datumi na povezanom proizvodnom projektu;        
> **Izračunaj vrijeme faze na osnovi prioriteta**: omogućuje ponovni izračun vremena nakon dodjele nove sekvence ili nakon promjene podataka putem funkcije **Promijeni faze**;          
> **Izračun i umetanje slijeda proizvodnje**: nakon što su retci u drugoj mreži posloženi prema potrebi, ovaj gumb dodjeljuje sekvencu odabranim fazama prema zadanom redoslijedu;       
> **Preračunaj izvedivost**: postupak izračunava izvedivost za materijale i prethodnu fazu za odabrane retke te primjenjuje boju u poljima *Izvedivost materijala* i *Izvedivost faze* u donjoj mreži, prema postavkama definiranima u [Parametrima potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters). Ovaj gumb je dostupan samo ako je aktivirana oznaka **Sekvenca faza** u odjeljku *Parametri izračuna izvedivosti* unutar [Parametara potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters);          
> **Detalj izvedivosti materijala**: otvara skočni prozor koji prikazuje koji su materijali dostupni, a koji nisu za odabranu fazu. Ovaj gumb je dostupan samo ako je aktivirana oznaka **Uzmi u obzir materijale** u odjeljku *Parametri izračuna izvedivosti* unutar [Parametara potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters);      
> **Detalj izvedivosti faza**: otvara skočni prozor koji prikazuje status napretka prethodne faze, uključujući eventualne prijave proizvodnje unesene do tog trenutka. Ovaj gumb je dostupan samo ako je aktivirana oznaka **Razmotri prethodne faze** u odjeljku *Parametri za izračun izvedivosti* unutar [Parametara potreba za materijalom](/docs/configurations/parameters/production/resource-requirements-parameters);   
otvara se skočni prozor koji prikazuje koji su materijali dostupni, a koji nisu za odabranu fazu; dok je putem gumba **Detalj izvedivosti faza** moguće provjeriti status napretka prethodne faze, uključujući eventualne prijave proizvodnje unesene do tog trenutka.
> **Ažuriranje datuma kad će roba biti spremna**: ažurira *Datum spremne robe* na povezanim narudžbama kupaca prema *Datumu završetka naloga*; 
> **Izdavanje planiranih narudžbi proizvodnji**: omogućuje pretvaranje planiranih proizvodnih naloga u proizvodne naloge za odabrane faze;                     
> **Pusti naloge**: omogućuje promjenu statusa proizvodnih naloga iz *Lansiran* u *Izvršni* za odabranu fazu ili faze;         
> **Proširi ekransku tablicu**: skriva područje filtara obrasca kako bi se lakše radilo s mrežama;         
> **Dupla tablica**: skriva prvu mrežu kako bi se lakše radilo s drugom mrežom.          

Za detalje o zajedničkom funkcioniranju obrazaca pogledajte poveznicu [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).