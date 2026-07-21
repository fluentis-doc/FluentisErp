---
title: Gantt simulacija 
sidebar_position: 2
---

Obrazac za kreiranje i uređivanje Gantt simulacije sastoji se od sljedećih kartica:

- Zaglavlje
- Filter
- Gantt
- Dnevnik simulacije

## Zaglavlje

Omogućuje unos podataka zaglavlja Gantt simulacije.

*Specifična polja*:

> **Naziv simulacije**: označava naziv povezan s Gantt simulacijom (prema zadanim postavkama predlaže se ime korisnika te datum i vrijeme kreiranja);     
> **Tip**: označava šifru [Tipa Gantt simulacije](/docs/configurations/tables/production/crp-gantt-simulation-type) (prikazuju se samo tipovi koji nisu tipa Snapshot);           
> **Opis tipa**: označava opis [Tipa Gantt simulacije](/docs/configurations/tables/production/crp-gantt-simulation-type);        
> **Blokiraj dokumente**: označava da će svi dokumenti uključeni u kreiranje Gantt simulacije biti zaključani. Takve dokumente nije moguće mijenjati sve dok simulacija ne bude potvrđena i promjene unesene u dokumente ne budu primijenjene;  
> **Broj**: označava broj Gantt simulacije i ovisi o numeraciji povezanoj s [Tipom Gantt simulacije](/docs/configurations/tables/production/crp-gantt-simulation-type);         
> **Važeća simulacija**: označava da je simulacija potvrđena te da su promjene izvršene u Ganttu prenesene na povezane dokumente;      
> **Datum unosa**: označava datum kreiranja Gantt simulacije;     
> **Korisnik**: označava korisnika koji je kreirao Gantt simulaciju.     

## Filter

Omogućuje pretraživanje dokumenata koji će se koristiti za kreiranje **Gantta**.

Obrazac se sastoji od gornjeg dijela u kojem se nalaze filtri za pretraživanje različitih dokumenata te dva popisa ispod njega: s lijeve strane prikazuju se svi dokumenti koji odgovaraju zadanim kriterijima, dok se s desne strane prikazuju dokumenti koji će biti uključeni u **Gantt**.

Među filtrima je moguće koristiti filter *Vrsta dokumenta* koji omogućuje odabir samo sljedećih dokumenata: *Planirani nalozi*, *Zahtjevi za nabavu*, *Proizvodni nalozi* ili *Nalozi za kooperaciju*. Također ih je moguće prikazati po *projektu* ili po *dokumentu*, ovisno o potrebama korisnika.

Izvršeni dokumenti uzimaju se u obzir samo ako je aktivirana oznaka **Uključi izvršene dokumente**.

Donje tablice prikazuju dokumente u hijerarhijskoj strukturi stabla, omogućujući korisniku da jednostavno odabere samo željene dokumente označavanjem odgovarajućeg potvrdnog okvira. Nakon toga ih je moguće dodati na popis dokumenata za kreiranje **Gantta** pomoću gumba **Prenesi odabrano** ili metodom *Drag & Drop*.

*Specifični gumbi*:

> **Traži**: omogućuje pretraživanje dokumenata prema zadanim filterima;          
> **Kreiraj**: omogućuje kreiranje **Gantta** na temelju dokumenata unesenih u desnu tablicu;     
> **Označi**: omogućuje označavanje odabranog dokumenta;        
> **Označi sve**: omogućuje označavanje svih dokumenata prikazanih u tablici;       
> **Odznači sve**: omogućuje uklanjanje oznake sa svih dokumenata prikazanih u tablici;    
> **Proširi naloge**: omogućuje proširenje stabla odabranog projekta sve do detalja pojedine faze;      
> **Sažmi naloge**: omogućuje zatvaranje stabla odabranog projekta;     
> **Prenesi odabrano**: omogućuje prijenos odabranih dokumenata iz tablice za pretraživanje u tablicu za kreiranje **Gantta**;      
> **Spremi**: omogućuje spremanje izvršenih izmjena.

## Gantt

Na ovoj kartici prikazuje se Gantt dijagram prema kriterijima pretraživanja definiranima na prethodnoj kartici. Kartica se sastoji od dvije cjeline, od kojih je svaka podijeljena na dva panela.

- **Gornja sekcija**: u lijevom dijelu gornje sekcije korisnik može pregledavati popis dokumenata koji su odabrani putem potvrdnog okvira na prethodnoj kartici. Dokumenti su prikazani jedan ispod drugoga u hijerarhijskoj strukturi stabla, s uvlačenjem koje odražava njihove međusobne veze.      
Ako proizvodni projekt sadrži više od jednog artikla, ispod projekta prikazuje se šifra artikla (*Artikl*, a zatim klasa, šifra i opis artikla).        
U svakom retku također su prikazani datum početka i datum završetka dokumenta.      
Ako je redak označen crvenom bojom, to znači da je dokument izvršen ili da u stvarnosti više ne postoji.        
Svakom retku odgovara vodoravna traka u grafičkom dijelu gornje sekcije koja vizualno prikazuje dokumente navedene u lijevom dijelu ove sekcije.       
Vodoravne trake pokrivaju određeno vremensko razdoblje koje se može povećavati ili smanjivati pomoću gumba na alatnoj traci **Zoom Out** i **Zoom In**, sve do prikaza pojedinačnog dana i opterećenja na razini sati i minuta.      
Dvostrukim klikom na vodoravnu traku koja predstavlja dokument automatski se otvara pripadajući dokument, u skladu s korisničkim ovlaštenjima korisnika koji izvodi ovu radnju.      
Vodoravne trake moguće je pomicati unutar grafikona metodom *drag & drop*, čime se datumi dokumenata mijenjaju potpuno dinamički.   
Korisnik zatim može odlučiti želi li potvrditi izvršene promjene pritiskom na gumb **Primijeni**.

:::note Napomena
Moguće je pomaknuti samo planirane dokumente ili faze koje još nisu započele; svi ostali dokumenti i faze su zaključani.
:::

- **Donja sekcija**: u donjoj sekciji prikazan je histogram raspoloživosti i opterećenja proizvodnih resursa, podijeljen u dva panela.     
U lijevom panelu prikazani su nazivi *Radnih centara* angažiranih na operacijama koje su odabrane za prikaz na grafikonu, dok se u desnom panelu, koji je neodvojivo povezan s lijevim panelom gornje sekcije, nalaze okomite trake koje za svaki radni dan prikazuju količinu posla koju svaki *Radni centar* mora izvršiti prema planiranim vremenima faza proizvodnih naloga prisutnih u tim danima.      
Važno je napomenuti da histogram prikazuje ukupno opterećenje pojedinog radnog centra, a ne samo opterećenje koje proizlazi iz proizvodnog naloga prikazanog u **Ganttu**.     
Korisnik dvostrukim klikom na histogram bilo kojeg radnog centra može otvoriti prozor u kojem se prikazuje popis proizvodnih naloga uključenih u **Gantt** te popis proizvodnih naloga koji nisu uključeni u trenutačnu simulaciju, uz mogućnost izravnog otvaranja dokumenata za koje je prikazan sažeti pregled. Prozor koji se otvara dvostrukim klikom na histogram naziva se **Prikaz radnih faza**.         
Putem obrasca **Prikaz radnih faza** moguće je odabrati željene faze te pomoću gumba **Promijeni radni centar** i **Promijeni datume** promijeniti radni centar pojedine faze ili je pomaknuti za određeno vrijeme (dani/sati/minute) odnosno na određeni datum.

*Specifični gumbi*:

> **Spremi**: omogućuje spremanje izvršenih izmjena;       
> **Spremi snapshot**: omogućuje spremanje izvršenih izmjena stvaranjem *snapshota* (podređene verzije) na temelju glavne simulacije;      
> **Povrat simulacije**: vraća simulaciju u izvorno stanje poništavajući sve izmjene;         
> **Odaberi način prikaza napretka**: omogućuje odabir načina prikaza statusa napretka pojedinih dokumenata unutar **Gantta**; dostupne opcije su: *prema proteklom vremenu*, *prema proteklom vremenu i količini*, *prema proizvedenoj količini* ili *bez prikaza*;      
> **Primijeni**: omogućuje primjenu izmjena izvršenih u **Gantt** simulaciji (gumb postaje aktivan nakon spremanja);      
> **Proširi grananje**: omogućuje proširenje stabla simulacije sve do detalja pojedine faze;      
> **Sažmi grananje**: omogućuje zatvaranje stabla simulacije;     
> **Povećaj prikaz**: omogućuje povećanje razine zumiranja grafikona;     
> **Povećaj do prozora**: omogućuje prilagodbu zumiranja grafikona vremenskom razdoblju koje se trenutno prikazuje;     
> **Umanji**: omogućuje smanjenje razine zumiranja grafikona;      
> **Povećaj-tjedan**: omogućuje prikaz grafikona na razini jednog tjedna;      
> **Povećaj-2 tjedna**: omogućuje prikaz grafikona na razini dva tjedna;    
> **Povećaj-mjesec**: omogućuje prikaz grafikona na razini jednog mjeseca;    
> **Povećaj-datum**: omogućuje prilagodbu grafikona određenom rasponu datuma koji definira korisnik;            
> **Mapiranje šifre stila**: omogućuje pregled trenutno korištenih stilova u **Ganttu**, koji se mogu mijenjati pomoću gumba *Uredi stil Gantta* i *Uredi stil histograma*;          
> **Uređivanje Gantt stila**: omogućuje pristup postavkama trenutnog stila Gantta;     
> **Uređivanje stila histograma**: omogućuje pristup postavkama trenutnog stila histograma;          
> **Osvježi stil**: omogućuje primjenu i osvježavanje izmjena izvršenih na stilovima.      

## Dnevnik simulacije

Na ovoj kartici prikazuju se zapisi prethodno spremljenih simulacija, uz mogućnost provjere stare početne i završne datum-vrijednosti te nove početne i završne datum-vrijednosti za svaki dokument kojemu su vremenski podaci promijenjeni.