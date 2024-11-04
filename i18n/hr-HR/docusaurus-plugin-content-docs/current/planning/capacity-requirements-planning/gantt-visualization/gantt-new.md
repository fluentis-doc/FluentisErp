---
title: Ganttova  simulacija
sidebar_position: 2
---

Obrazac za stvaranje i uređivanje simulacije Ganttovog dijagrama sastoji se od sljedećih kartica:

- Zaglavlje
- Filtriranje
- Ganttov dijagram
- Dnevnik simulacije

## Zaglavlje

Omogućuje unos zaglavnih podataka simulacije Ganttovog dijagrama.

*Specifična polja*:

> **Naziv simulacije**:označava naziv povezan s Ganttovom simulacijom (prema zadanim postavkama predlaže se korisničko ime i datum i vrijeme stvaranja);       
> **Vrsta**: označava kod [Vrste Ganttove simulacije](/docs/configurations/tables/production/crp-gantt-simulation-type) (vidljivi su samo oni koji nisu vrste Snapshot);           
> **Opis vrste**: opisuje [Vrstu Ganttove simulacije](/docs/configurations/tables/production/crp-gantt-simulation-type);        
> **Blokiraj dokumenate**: označava da su svi dokumenti uključeni u kreiranje Ganttove simulacije blokirani. Stoga se ne mogu mijenjati sve dok simulacija nije potvrđena i promjene u Ganttovom dijagramu prenesene na dokumente;   
> **Broj**: označava broj Ganttovog simulacije i ovisi o numeraciji povezanoj s [Vrstom Ganttove simulacije](/docs/configurations/tables/production/crp-gantt-simulation-type);         
> **Važeća simulacija**: označava da je simulacija potvrđena i da su promjene u Ganttovom dijagramu prenesene na povezane dokumente;       
> **Datum unosa**: označava datum unosa Ganttove simulacije;      
> **Korisnik**: označava korisnika Ganttove simulacije.      

## Filtriranje

Omogućuje pretraživanje dokumenata koji će se koristiti za stvaranje **Ganttovog dijagrama**.     
Obrazac se sastoji od gornjeg područja gdje se unose filteri za pretraživanje različitih dokumenata. Ispod toga, s lijeve strane je popis svih dokumenata koji odgovaraju unesenim filterima, dok je s desne strane popis dokumenata koji će biti uključeni u **Ganttov dijagram.**.       
Među filterima možete koristiti filter *Tip dokumenta* koji omogućuje odabir samo:  *Planiranih narudžbi*, *Zahtjeva za nabavu*, *Narudžbi za proizvodnje* ili *Narudžbi za rad*; također, mogu se pregledavati po *projektu* ili *dokumentu* prema potrebi.          
Evidentirani dokumenti uzimaju se u obzir samo ako je aktiviran odgovarajući flag **Razmotrite izvršene dokumente.**.      

Donje mreže prikazuju dokumente u strukturi stabla, omogućavajući korisniku da jednostavno označi željene dokumente klikom na odgovarajući okvir. Nakon toga, korisnik može dodati označene dokumente u listu za stvaranje **Ganttovog** dijagrama putem odgovarajućeg gumba **Prijenos označenih** ili korištenjem funkcije *Drag & Drop*.     

*Posebni gumbi*:

> **Traži**: omogućuje pretraživanje dokumenata na temelju unesenih filtera;          
> **Kreiraj**: omogućuje kreiranje **Ganttovog** dijagrama na temelju dokumenata unesenih u desnoj mreži;       
> **Označi**: omogućuje označavanje odabranog dokumenta;         
> **Označi sve**: omogućuje označavanje svih dokumenata prisutnih u mreži;       
> **Odznači sve**: omogućuje uklanjanje oznaka sa svih dokumenata prisutnih u mreži;      
> **Uveličaj stavke**: omogućuje proširenje stabla odabranog projekta do detalja faze;        
> **Sažmi naloge za posao**: omogućuje zatvaranje stabla odabranog projekta;     
> **Prijenos odabranih**: omogućuje prijenos odabranih dokumenata iz mreže za pretraživanje u mrežu za kreiranje **Ganttovog** dijagrama.;      
> **Spremi**: omogućuje spremanje izvršenih promjena.

## Gantt

Na ovoj kartici prikazan je Ganttov dijagram prema postavljenim kriterijima pretraživanja s prethodne kartice. Kartica se sastoji od 2 sekcije, svaka podijeljena na 2 panela.

- **Gornji dio**: u gornjem dijelu korisnik može vidjeti listu dokumenata koji su označeni potvrdnim poljima na prethodnoj kartici. Ti dokumenti su prikazani s lijeve strane u obliku stabla, s uvlačenjem koje prikazuje njihove međusobne veze. Ako proizvodni nalog obuhvaća više artikala, ispod proizvodnog naloga prikazan je kod artikla (artikl, zatim klasa, kod i opis istog). Svaki red također prikazuje datum početka i datum završetka dokumenta.     
Evidentiranje u crveno označava da je dokument već obrađen ili da stvarnost više ne odgovara tom dokumentu.      
Svaka od ovih linija ima odgovarajuću vodoravnu traku u grafici gornjeg dijela, koja grafički prikazuje dokumente detaljno opisane u lijevom dijelu te sekcije. Te vodoravne trake pokrivaju vremenski period koji se može povećati ili smanjiti korištenjem odgovarajućih gumba u traci s alatima, nazvanih **Zoom Out** i **Zoom In**, omogućujući prikaz čak i na razini sata/minuta.    
Osim toga, dvostrukim klikom na vodoravnu traku koja predstavlja dokument, otvara se sam dokument, uzimajući u obzir prava korisnika koji obavlja ovu radnju. Vodoravne trake mogu se povlačiti i spuštati po grafikonu pomoću jednostavnog "drag and drop" postupka; ova operacija omogućuje dinamično pomicanje datuma dokumenata.  
Korisnik može zatim, napuštajući karticu, potvrditi ili odbiti izmjene pritisnutkom gumba **Primijeni**.

:::note NAPOMENA 
Napominjemo da je moguće samo pomičati unaprijed ili unatrag dokumente koji su već planirani ili faze koje još nisu započele, dok je sve ostalo blokirano.
:::

- **Donji dio**: donji dio sastoji se od 2 panela i prikazuje histogram koji se odnosi na raspoloživost i angažman proizvodnih resursa. U lijevom panelu prikazuju se nazivi *Radnih Centara* koji su uključeni u obradu koju se odlučilo prikazati na grafikonu. U desnom panelu, koji je neraskidivo povezan s lijevim panelom gornjeg dijela, nalaze se vertikalne trake koje za svaki radni dan prikazuju količinu posla koju svaki *Radni Centar* treba obaviti prema predviđenim vremenima faza proizvodnih naloga prisutnih tih dana.       
Važno je napomenuti da histogram prikazuje ukupno angažman svakog pojedinog *Radnog Centra*, ne ograničavajući se samo na grafiku angažmana proizašlog iz prikazanih proizvodnih naloga u **Gantt** dijagramu.       
Dakle, korisnik ima mogućnost dvostrukim klikom na traku histograma bilo kojeg radnog centra otvoriti prozor koji prikazuje popis proizvodnih naloga prisutnih u **Gantt** dijagramu, kao i popis proizvodnih naloga koji nisu prisutni u trenutno izvršenoj simulaciji, s mogućnošću otvaranja dokumenata koji su djelomično detaljirani iz te iste prozora. Prozor koji se otvara dvostrukim klikom na histogram naziva se **Prikaz faza rada**.          
Kroz obrazac **Prikaz faza rada** moguće je odabrati faze od interesa i korištenjem gumba **Promijeni radni centar** i **Promijeni datume** korisnik može promijeniti radni centar faze i pomicati pojedinačne faze za 'x' vremena (dani/sati/minuti) ili ih premjestiti na određeni datum.   

*Posebni gumbi*:

> **Spremi**: omogućuje spremanje izvršenih izmjena; ;       
> **Spremi snapshot**: omogućuje spremanje izvršenih izmjena stvaranjem snapshot-a (dijete) iz glavne simulacije;       
> **Povrati simulacije**: omogućuje vraćanje simulacije u izvorno stanje poništavanjem svih izmjena;           
> **Odaberite status napretka**: omogućuje odabir načina na koji treba prikazati stanje napretka pojedinih dokumenata unutar **Gantta**; to mogu biti: *na temelju proteklog vremena*, *na temelju proteklog vremena i količine*, *na temelju proizvedene količine* ili ništa;         
> **Primijeni**: omogućuje izvršenje izmjena primijenjenih u **Gantt** simulaciji (gumb se aktivira nakon spremanja);      
> **Proširi grananje**: omogućuje proširenje stabla simulacije do detalja faze;       
> **Sažmi grananje**: omogućuje zatvaranje stabla simulacije;       
> **Povećaj**: omogućuje povećanje zuma u grafikonu;     
> **Zoom do prozora**: omogućuje podešavanje zuma u grafikonu prema promatranom vremenskom okviru;      
> **Umanji**: omogućuje smanjenje zuma u grafikonu; ;      
> **Zoom tjedan**: omogućuje podešavanje zuma u grafikonu na jedan tjedan;      
> **Zoom 2 tjedna**: omogućuje podešavanje zuma u grafikonu na dva tjedna;    
> **Zoom mjesec**: omogućuje podešavanje zuma u grafikonu na jedan mjesec;    
> **Zoom datum**: omogućuje podešavanje zuma u grafikonu za određeni raspon datuma koji je odabrao korisnik;            
> **Mapiranje stilskog koda**: omogućuje prikaz trenutnih stilova u uporabi u **Ganttu**, koje se može mijenjati pomoću gumba *Promijeni stil Gantta* i *Promijeni stil histograma*;          
> **Promijeni stil Gantta**: omogućuje pristup postavkama trenutnog stila Gantta;       
> **Uredite stil histograma**: omogućuje pristup postavkama trenutnog stila histograma;           
> **Ažuriraj stil**: omogućuje ažuriranje izvršenih promjena stilova.      

## Dnevnik simulacije

Na ovoj kartici prikazani su zapisi prethodno spremljenih simulacija, s mogućnošću provjere, za svaki dokument koji bi pretrpio vremenske promjene, starog datuma početka, starog datuma završetka, novog datuma početka i novog datuma završetka.

