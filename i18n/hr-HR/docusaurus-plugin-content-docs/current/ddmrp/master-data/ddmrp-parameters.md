---
title: Parametri za DDMRP artikle 
sidebar_position: 5
---

Putem ovog obrasca definiraju se parametri potrebni za upravljanje buffer artiklom, odnosno artiklom kojim se upravlja prema DDMRP logici.   

Za svaki buffer artikla mora postojati barem jedan zapis u ovoj tablici – jedan za svako distribucijsko središte (vidi **logističku strukturu**) u kojem se artikl drži na zalihi prema DDMRP načelima, te eventualno jedan za tvornicu (s praznim poljem za skladište) ako se artikl drži na zalihi u tvornici.

DDMRP parametri koje je potrebno definirati su sljedeći:  

- **Skladište**

  kod skladišta povezan s logističkom jedinicom zapisa, odnosno distribucijskim centrom (ili međupostajom). Ovo polje ostaje prazno ako se zapis odnosi na tvornicu. 

- **Dobavljač**

  označava dobavljača od kojeg se opskrbljuje ovaj artikl u dotičnoj logističkoj jedinici.

  Prema zadanim postavkama, opskrbljujuća logistička jedinica definirana je u tablici logističke strukture. Međutim, ovim poljem moguće je upravljati iznimkama za pojedine artikle. 

  Na primjer, artikli se u ovoj logističkoj jedinici obično opskrbljuju iz jednog središnjeg huba, no neki artikli mogu dolaziti iz drugog huba ili izravno iz tvornice. 

  Ako dobavljač nije naveden u tablici logističkih jedinica, radi se o vanjskom dobavljaču, te će se prema njemu izdati standardna narudžbenica.   

- **Dani za transport**

  Ako je polje dobavljač popunjeno, potrebno je popuniti i ovo polje. Ono predstavlja vrijeme potrebno za nabavu robe iz logističke jedinice ili od vanjskog dobavljača navedenog u polju dobavljač.  


- **Kod profila (buffer profil)**, 

  Kod profila buffera povezanog s ovim artiklom u logističkoj jedinici navedenoj u polju skladište. 

- **Faktor vremena isporuke (lead time factor)**,

  Omogućuje određivanje drugačije vrijednosti od one definirane u profilu buffera povezanom s ovim zapisom. 

- **Faktor varijabilnosti (variability factor)**,

  Omogućuje postavljanje drugačije vrijednosti od one definirane u profilu buffera povezanom s ovim zapisom. 

- **Prosječna dnevna potrošnja (ADU)**, 

  Količina koja se prosječno troši svaki dan u logističkoj jedinici ovog zapisa (razlikuje se za svaku jedinicu). Treba uzeti u obzir dovoljno dug vremenski period (višestruko duži od vremena nabave artikla) za izračun prosjeka. 
  
  Ova vrijednost značajno utječe na razinu zaliha artikla i potrebno ju je periodično ažurirati [(vidi proceduru)](/docs/ddmrp/procedures/ADU-update).

- **Razdvojeni lead time (DLT)**,

  Polje nije moguće uređivati – rezultat je automatskog izračuna. 

  Predstavlja vrijeme potrebno za nabavu artikla uzimajući u obzir postojanje drugih buffera u njegovoj strukturi ili logističkoj mreži. 

  U slučaju distribucijskog centra, dobiva se zbrajanjem vremena transporta iz opskrbljujuće logističke jedinice i eventualnog vremena proizvodnje, ako je opskrbljujuća jedinica tvornica, a artikl nije buffer u tvornici (tj. nema zaliha).  

- **Kumulativni lead time (CLT)**,

  Polje nije moguće uređivati – rezultat je izračuna DLT procedure.  

  Predstavlja vrijeme potrebno za nabavu artikla u tvornici ako nijedan od artikala u njegovoj strukturi nije buffer. Drugim riječima, to je vrijeme proizvodnje u slučaju potpune odsutnosti zaliha za sve njegove komponente.  

- **Željeni ciklus ponovnog naručivanja (DOC)**,

  Izražava se u danima i predstavlja broj dana koji bi trebao proći između jedne i sljedeće narudžbe.  

  Ova vrijednost uzima se u obzir prilikom izračuna zelene zone za ovaj artikal.

- **Minimalna naručiva količina (MOQ)**,

  Ako postoji minimalna količina narudžbe koju postavlja dobavljač ili interna politika (posebno za optimizaciju proizvodnje), ona se navodi u ovom polju. 

  Ova vrijednost također se uzima u obzir prilikom izračuna zelene zone za ovaj artikl.  

- **Zelena zona**,

  Polje nije moguće uređivati – rezultat je automatske procedure ažuriranja zona.  

  Zelena zona određuje veličinu narudžbi (nijedna narudžba koju predloži DDMRP ne može biti manja od zelene zone) te tako utječe na učestalost ponovnog naručivanja. Učestalost naručivanja izračunava se kao omjer između zelene zone i prosječne dnevne potrošnje (ADU), a također definira i očekivane prosječne i maksimalne razine zaliha.  

- **Žuta zona**,

  Polje nije moguće uređivati – što je rezultat automatske procedure ažuriranja zona. 

 Žuta zona predstavlja prosječnu potrošnju unutar razdoblja potrebnog za opskrbu artiklom (DLT).  
  

- **Crvena zona**,

  Polje nije moguće uređivati – rezultat je automatske procedure ažuriranja zona. 

  Crvena zona definira razinu sigurnosne zalihe, minimalnu i maksimalnu razinu zaliha. 

  Njezina veličina raste s povećanjem varijabilnosti povezane s bufferom (vidi buffer profil).  

- **Prag vršnih narudžbi (OST)**,

  Koristi se u izračunu NFP (Net Flow Position).  

  Kada ukupna dnevna potražnja (unutar zadanog vremenskog okvira za vrhove potražnje) premaši ovu vrijednost, ona se uključuje u NFP izračun. 

  Preporučuje se korištenje vrijednosti između 50% i 100% crvene zone artikla. 

  Preniska vrijednost dovela bi do toga da se uobičajene oscilacije potražnje pogrešno prepoznaju kao vršni zahtjevi, što bi rezultiralo prečestim narudžbama i većom prosječnom zalihom od potrebne. 

  Previsoka vrijednost mogla bi rezultirati time da se značajni, ali ne ekstremni vrhovi potražnje ne prepoznaju na vrijeme, što bi dovelo do smanjenja zaliha ispod optimalne razine, iscrpljivanja crvene zone ili čak prekida zaliha (stockout). 

  **Vremenski horizont za vršne narudžbe (OSH)**,

  Vremenski period od danas unutar kojeg se provjerava prisutnost vršnih zahtjeva (za izračun NFP). 

  Ova vrijednost ne smije biti manja od DLT (razdvojenog lead time-a), jer je potrebno na vrijeme prepoznati potencijalne vrhove potražnje, barem onoliko unaprijed koliko traje nabava artikla.  

- **Metoda predviđanja prosječne dnevne potrošnje**,

  Odaberite jednu od sljedećih metoda koje će se primijeniti u postupku ažuriranja ADU (prosječne dnevne potrošnje):

  - 0) Bez ažuriranja 
  - 1) Aritmetička sredina na temelju prošlih podataka (analiziraju se stvarne povijesne potrošnje, svi podaci imaju jednaku težinu) 
  - 2) Ponderirana sredina na temelju prošlih podataka (nedavni podaci imaju veću težinu od starijih podataka) 
  - 3) Aritmetička sredina na temelju budućih podataka (analizira se tablica s predviđenom dnevnom potrošnjom) 
  - 4) Aritmetička sredina kombinacijom prošlih i budućih podataka (kombinira se metoda 1 i 3) 
  - 5) Ponderirana sredina prošlih i aritmetička sredina budućih podataka (kombinacija metoda 2 i 3)


- **Dani u prošlosti**,

  Period u prošlosti koji se koristi za izračun prosječne dnevne potrošnje. 

- **Dani u budućnosti**,

  Period u budućnosti koji se koristi za predviđanje prosječne dnevne potrošnje. 

- **Tip zaliha**

  Definira vrstu DDMRP zaliha:  

  - 1 = Replenished (dinamička zaliha)
  - 2 = Replenished override (statička zaliha) 
  - 3 = Min-max (minimalno-maksimalna zaliha)



**Funkcijske tipke**

Omogućuje unos DDMRP parametara za kombinaciju artikl-varijanta-skladište, pri čemu kod skladišta identificira [**logističku jedinicu**](/docs/ddmrp/master-data/facilities) (distribucijski centar, hub ili tvornicu – u tom slučaju polje ostaje prazno).

Prvo odaberite skladište iz ponuđene liste; prikazat će se artikli koji još nemaju zapis u DDMRP parametrima za to skladište. Za tvornicu odaberite bilo koje povezano skladište, jer sustav sve tvornice smatra ekvivalentnima skladištu s praznim kodom. 

Zatim odaberite buffer profil za novi zapis kako biste aktivirali tipku "Unesi".  

Nakon toga odaberite redove za uvoz, pritisnite "Unesi", a zatim otvorite nove zapise kako biste dovršili unos podataka.  

**Tipka Zamjena parametara**

Omogućuje promjenu parametara za više zapisa istog skladišta.  

Ako je potrebno izmijeniti više skladišta, postupak se mora ponoviti za svako zasebno. 

Nakon odabira više redaka, tipka postaje aktivna i otvara obrazac za izmjenu jednog ili više parametara za odabrane zapise. 

Promjena se primjenjuje samo ako je pored parametra uključen odgovarajući potvrdni okvir (flag). 

**Tipka Obriši**

Omogućuje brisanje zapisa, čime se određeni artikl više ne smatra DDMRP bufferom u navedenom skladištu. 

Povijesni podaci vezani za artikl i skladište bit će sačuvani te će ostati dostupni kroz povijest DDMRP parametara i povijest Net Flow Position-a. 



