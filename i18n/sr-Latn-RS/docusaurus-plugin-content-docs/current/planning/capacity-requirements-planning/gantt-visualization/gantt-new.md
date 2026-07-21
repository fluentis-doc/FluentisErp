---
title: Gantt simulacija
sidebar_position: 2
---

Obrazac za kreiranje i uređivanje Gantt simulacije sastoji se od sledećih kartica:

- Zaglavlje
- Filter
- Gantt
- Dnevnik simulacije

## Zaglavlje

Omogućava unos podataka zaglavlja Gantt simulacije.

*Specifična polja*:

> **Naziv simulacije**: označava naziv povezan sa Gantt simulacijom (prema podrazumevanim podešavanjima predlaže se ime korisnika, kao i datum i vreme kreiranja);     
> **Tip**: označava šifru [Tipa Gantt simulacije](/docs/configurations/tables/production/crp-gantt-simulation-type) (prikazuju se samo tipovi koji nisu tipa Snapshot);           
> **Opis tipa**: označava opis [Tipa Gantt simulacije](/docs/configurations/tables/production/crp-gantt-simulation-type);        
> **Blokiraj dokumenta**: označava da će sva dokumenta uključena u kreiranje Gantt simulacije biti zaključana. Takva dokumenta nije moguće menjati sve dok simulacija ne bude potvrđena i promene unete u dokumenta ne budu primenjene;  
> **Broj**: označava broj Gantt simulacije i zavisi od numeracije povezane sa [Tipom Gantt simulacije](/docs/configurations/tables/production/crp-gantt-simulation-type);         
> **Važeća simulacija**: označava da je simulacija potvrđena i da su promene izvršene u Ganttu prenete na povezana dokumenta;      
> **Datum unosa**: označava datum kreiranja Gantt simulacije;     
> **Korisnik**: označava korisnika koji je kreirao Gantt simulaciju.     

## Filter

Omogućava pretragu dokumenata koji će se koristiti za kreiranje **Gantta**.

Obrazac se sastoji od gornjeg dela u kojem se nalaze filteri za pretragu različitih dokumenata, kao i dva spiska ispod njega: sa leve strane prikazuju se sva dokumenta koja odgovaraju zadatim kriterijumima, dok se sa desne strane prikazuju dokumenta koja će biti uključena u **Gantt**.

Među filterima je moguće koristiti filter *Vrsta dokumenta* koji omogućava izbor samo sledećih dokumenata: *Planirani nalozi*, *Zahtevi za nabavku*, *Proizvodni nalozi* ili *Nalozi za kooperaciju*. Takođe ih je moguće prikazati po *projektu* ili po *dokumentu*, u zavisnosti od potreba korisnika.

Izvršena dokumenta uzimaju se u obzir samo ako je aktivirana oznaka **Uključi izvršena dokumenta**.

Donje tabele prikazuju dokumenta u hijerarhijskoj strukturi stabla, omogućavajući korisniku da jednostavno odabere samo željena dokumenta označavanjem odgovarajućeg polja za potvrdu. Nakon toga ih je moguće dodati na listu dokumenata za kreiranje **Gantta** pomoću dugmeta **Prenesi odabrano** ili metodom *Drag & Drop*.

*Specifični dugmići*:

> **Traži**: omogućava pretragu dokumenata prema zadatim filterima;          
> **Kreiraj**: omogućava kreiranje **Gantta** na osnovu dokumenata unetih u desnu tabelu;     
> **Označi**: omogućava označavanje odabranog dokumenta;        
> **Označi sve**: omogućava označavanje svih dokumenata prikazanih u tabeli;       
> **Odznači sve**: omogućava uklanjanje oznake sa svih dokumenata prikazanih u tabeli;    
> **Proširi naloge**: omogućava proširenje stabla odabranog projekta sve do detalja pojedinačne faze;      
> **Sažmi naloge**: omogućava zatvaranje stabla odabranog projekta;     
> **Prenesi odabrano**: omogućava prenos odabranih dokumenata iz tabele za pretragu u tabelu za kreiranje **Gantta**;      
> **Sačuvaj**: omogućava čuvanje izvršenih izmena.

## Gantt

Na ovoj kartici prikazuje se Gantt dijagram prema kriterijumima pretrage definisanim na prethodnoj kartici. Kartica se sastoji od dve celine, od kojih je svaka podeljena na dva panela.

- **Gornja sekcija**: u levom delu gornje sekcije korisnik može pregledati listu dokumenata koji su odabrani putem polja za potvrdu na prethodnoj kartici. Dokumenta su prikazana jedno ispod drugog u hijerarhijskoj strukturi stabla, sa uvlačenjem koje odražava njihove međusobne veze.      
Ako proizvodni projekat sadrži više od jednog artikla, ispod projekta prikazuje se šifra artikla (*Artikl*, zatim klasa, šifra i opis artikla).        
U svakom redu takođe su prikazani datum početka i datum završetka dokumenta.      
Ako je red označen crvenom bojom, to znači da je dokument izvršen ili da u stvarnosti više ne postoji.        
Svakom redu odgovara horizontalna traka u grafičkom delu gornje sekcije koja vizuelno prikazuje dokumenta navedena u levom delu ove sekcije.       
Horizontalne trake pokrivaju određeni vremenski period koji se može povećavati ili smanjivati pomoću dugmadi na alatnoj traci **Zoom Out** i **Zoom In**, sve do prikaza pojedinačnog dana i opterećenja na nivou sati i minuta.      
Dvostrukim klikom na horizontalnu traku koja predstavlja dokument automatski se otvara pripadajući dokument, u skladu sa korisničkim ovlašćenjima korisnika koji izvršava ovu radnju.      
Horizontalne trake moguće je pomerati unutar grafikona metodom *drag & drop*, čime se datumi dokumenata menjaju potpuno dinamički.   
Korisnik zatim može odlučiti da li želi da potvrdi izvršene promene pritiskom na dugme **Primeni**.

:::note Napomena
Moguće je pomerati samo planirana dokumenta ili faze koje još nisu započete; sva ostala dokumenta i faze su zaključani.
:::

- **Donja sekcija**: u donjoj sekciji prikazan je histogram raspoloživosti i opterećenja proizvodnih resursa, podeljen u dva panela.     
U levom panelu prikazani su nazivi *Radnih centara* angažovanih na operacijama koje su odabrane za prikaz na grafikonu, dok se u desnom panelu, koji je neraskidivo povezan sa levim panelom gornje sekcije, nalaze vertikalne trake koje za svaki radni dan prikazuju količinu posla koju svaki *Radni centar* mora izvršiti prema planiranim vremenima faza proizvodnih naloga prisutnih u tim danima.      
Važno je napomenuti da histogram prikazuje ukupno opterećenje pojedinog radnog centra, a ne samo opterećenje koje proizlazi iz proizvodnog naloga prikazanog u **Ganttu**.     
Korisnik dvostrukim klikom na histogram bilo kog radnog centra može otvoriti prozor u kojem se prikazuje lista proizvodnih naloga uključenih u **Gantt** i lista proizvodnih naloga koji nisu uključeni u trenutnu simulaciju, uz mogućnost direktnog otvaranja dokumenata za koje je prikazan sažeti pregled. Prozor koji se otvara dvostrukim klikom na histogram naziva se **Prikaz radnih faza**.         
Putem obrasca **Prikaz radnih faza** moguće je odabrati željene faze te pomoću dugmadi **Promeni radni centar** i **Promeni datume** promeniti radni centar pojedine faze ili je pomeriti za određeni vremenski period (dani/sati/minuti), odnosno na određeni datum.

*Specifični dugmići*:

> **Sačuvaj**: omogućava čuvanje izvršenih izmena;       
> **Sačuvaj snapshot**: omogućava čuvanje izvršenih izmena kreiranjem *snapshota* (podređene verzije) na osnovu glavne simulacije;      
> **Povrat simulacije**: vraća simulaciju u početno stanje poništavajući sve izmene;         
> **Odaberi način prikaza napretka**: omogućava izbor načina prikaza statusa napretka pojedinačnih dokumenata unutar **Gantta**; dostupne opcije su: *prema proteklom vremenu*, *prema proteklom vremenu i količini*, *prema proizvedenoj količini* ili *bez prikaza*;      
> **Primeni**: omogućava primenu izmena izvršenih u **Gantt** simulaciji (dugme postaje aktivno nakon čuvanja);      
> **Proširi grananje**: omogućava proširenje stabla simulacije sve do detalja pojedinačne faze;      
> **Sažmi grananje**: omogućava zatvaranje stabla simulacije;     
> **Uvećaj prikaz**: omogućava povećanje nivoa zumiranja grafikona;     
> **Uvećaj do prozora**: omogućava prilagođavanje zumiranja grafikona vremenskom periodu koji je trenutno prikazan;     
> **Umanji**: omogućava smanjenje nivoa zumiranja grafikona;      
> **Uvećaj-sedmica**: omogućava prikaz grafikona na nivou jedne sedmice;      
> **Uvećaj-2 sedmice**: omogućava prikaz grafikona na nivou dve sedmice;    
> **Uvećaj-mesec**: omogućava prikaz grafikona na nivou jednog meseca;    
> **Uvećaj-datum**: omogućava prilagođavanje grafikona određenom rasponu datuma koji definiše korisnik;            
> **Mapiranje šifre stila**: omogućava pregled trenutno korišćenih stilova u **Ganttu**, koji se mogu menjati pomoću dugmadi *Uredi stil Gantta* i *Uredi stil histograma*;          
> **Uređivanje Gantt stila**: omogućava pristup podešavanjima trenutnog stila Gantta;     
> **Uređivanje stila histograma**: omogućava pristup podešavanjima trenutnog stila histograma;          
> **Osveži stil**: omogućava primenu i osvežavanje izmena izvršenih na stilovima.      

## Dnevnik simulacije

Na ovoj kartici prikazuju se zapisi prethodno sačuvanih simulacija, uz mogućnost provere stare početne i završne datum-vrednosti, kao i nove početne i završne datum-vrednosti za svaki dokument kojem su vremenski podaci promenjeni.