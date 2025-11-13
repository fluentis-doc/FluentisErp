---
title: Što je elektroničko fakturiranje
sidebar_position: 1
---

Elektroničko fakturiranje je digitalni sustav izdavanja i prijenosa faktura koji zamjenjuje papirnati oblik i uvodi nove digitalne načine komunikacije.
Fakture i ispravci faktura izdani putem elektroničkog fakturiranja moraju se proizvoditi u novom digitalnom formatu XML (eXtensible Markup Language), jeziku koji omogućuje računalnim sustavima definiranje i kontrolu značenja sadržanih elemenata prema standardiziranim procedurama, čime se provjeravaju informacije za zakonski predviđene kontrole.

Talijanski zakon je uveo elektroničko fakturiranje Zakonom o proračunu 2008., u skladu s europskom regulativom, a od 6. lipnja 2014. elektronička faktura postaje obvezna za izdavanje dokumenata prema javnoj upravi.

Elektronička faktura prema talijanskoj regulativi je XML datoteka u skladu s tehničkim specifikacijama iz Priloga A rješenja Direktorata Porezne uprave, protokol br. 89757/2018 od 30.04.2018. Sadržaj bilo koje fakture općenito je reguliran člancima 21 i 21-bis D.P.R. br. 633/1972.

Datoteka fakture generirana u XML formatu sadrži obavezne podatke prema poreznim pravilima, integrirane eventualno s dodatnim informacijama koje olakšavaju upravljanje i knjiženje.

Članak 1, stavak 917, točke a i b Zakona br. 205 od 27. prosinca 2017. (Zakon o proračunu 2018.) uveo je od 1. siječnja 2019. obvezu elektroničkog fakturiranja za prodaju roba i usluga između subjekata koji su rezidenti, sa sjedištem ili identificirani u talijanskom teritoriju, koristeći iste IT rješenja koja su se već primjenjivala za elektroničke fakture prema javnoj upravi.

Elektroničke fakture, izdane prema javnoj upravi i kasnije prema B2B i B2C subjektima, šalju se i razmjenjuju putem Sustava za razmjenu (Sistema di Interscambio, SdI), računalnog sustava kojim upravlja Porezna uprava, koji prima elektroničke fakture, provjerava ih i osigurava ispravnu razmjenu informacija između pošiljatelja i primatelja.

Subjekti uključeni u elektroničko fakturiranje sudjeluju u:
- aktivnom ciklusu – kada izdaju fakture za prodane proizvode ili pružene usluge
- pasivnom ciklusu – kada primaju dokumente od svojih dobavljača

## Operativni tijek u Fluentisu

U vezi s upravljanjem elektroničkim fakturiranjem i povezanim obvezama, u Fluentisu je moguće:  
- izdavanje prodajnih dokumenata prema subjektima koji su rezidentni/ustanovljeni/identificirani na teritoriju Italije  
- izdavanje prodajnih dokumenata prema javnoj upravi   
- stjecanje elektroničkih dokumenata o kupnji koje izdaju talijanski dobavljači (NIJE DOSTUPNO ZA KORISNIKE BEZ UGOVORA ZA FE U FLUENTISU)   
- omunikacija s SdI za dokumente nabave i prodaje od strane stranih dobavljača ili prema stranim klijentima (ne rezidenti/stabilizirani/identificirani u Italiji)      

La gestione dei flussi prevede la configurazione di una connessione in BizLink, dedicata alla comunicazione 
con il servizio Fluentis Business Hub. Il servizio ha lo scopo e l’obiettivo di inviare i documenti al SdI, acquisire 
da SdI i documenti di fatturazione relativi al ciclo passivo (NON GESTITO PER CHI NON HA SOTTOSCRITTO IL 
CONTRATTO FE CON FLUENTIS), acquisire le notifiche e i messaggi relativi alle varie fasi di invio delle fatture 
attive.         

Protokol komunikacije između Fluentis Business HUB-a i SdI (NISU UPRAVLJENI ZA ONE KOJI NISU POTPISALI UGOVOR O FE S FLUENTIS) je sustav aplikativne suradnje temeljen na usluzi Web Service:  
- faktura, koju izdaje Fluentis, prolazi putem BizLink veze do Fluentis Business Hub-a    
- Usluga Fluentis Business Hub šalje dokumente SdI-ju    
- Fluentis Digital Hub preuzima obavijesti od SdI-a o statusu dokumenata i prenosi ih u upravljački sustav    
- Fluentis Digital Hub prima pasivne fakture koje šalju dobavljači kupaca Fluentis    
- Razvrstava fakture prema pojedinačnim konfiguracijama kupaca     

U Fluentisu će biti moguće stoga:  
- generirati prodajne račune u elektroničkom formatu prema predviđenom obrascu za fakturiranje B2B/B2C/PA;    
- ukoliko se odluči digitalno potpisati datoteke računa ili ako je taj korak obavezan zbog same prirode dokumenata, upravljati izvozom XML dokumenata u vanjski direktorij datotečnog sustava radi digitalnog potpisivanja dokumenata koristeći softver za potpisivanje koji pružaju treće strane, a zatim ponovno uvesti potpisanu datoteku (.xml i .p7m);    
- pregledati sadržaj XML datoteke i eventualno priložiti PDF datoteku (standardni format) računa uz XML datoteku;    
- slati dokumente u SdI (NE UPRAVLJA SE ZA ONE KOJI NISU POTPISALI UGOVOR FE S FLUENTISOM);  
- pratiti status poslanih dokumenata putem masovnih pretraživačkih mreža, polja za prikaz statusa dokumenata u pojedinačnim dokumentima i nadzorne ploče za prikaz logova koje je poslao SdI;  
- preuzeti pasivne račune koje su poslali dobavljači (NE UPRAVLJA SE ZA ONE KOJI NISU POTPISALI UGOVOR FE S FLUENTISOM).  

Upravljanje prijenosom i preuzimanjem elektroničkih dokumenata odvija se putem postupka **PROMJENA STANJA** dokumenata.  

Fluentis omogućuje, putem Fluentis Business Huba, prijenos prema SdI-u kako potpisanih datoteka računa, tako i datoteka bez digitalnog potpisa. Za dodavanje digitalnog potpisa na generirane dokumente, bit će potrebno preuzeti dokumente u mapu datotečnog sustava, primijeniti digitalni potpis s vanjskim softverom za potpisivanje (npr. DIKE) i ponovno uvesti tako potpisanu datoteku (xml ili p7m) koja će zatim biti poslana SdI-u u novom formatu. Nakon slanja SdI-u, Fluentis preuzima obavijesti koje proizvodi Sustav razmjene i povezuje ih s pripadajućim dokumentima, upravljajući razvojem stanja dokumenta.  
U slučaju da nemate aktivnu vezu s Fluentis Business Hubom, bit će moguće generirati XML datoteke aktivnog ciklusa za odabrane kontakte, preuzeti proizvedene datoteke i nastaviti s njihovim slanjem putem vanjskih kanala.  
XML datoteke koje generira Fluentis i koje preuzima SdI u vezi s pasivnim ciklusom, pohranjuju se u Upravljanju dokumentima Fluentis, osim što su uvijek dostupne u raznim fazama upravljanja dokumentom prodaje putem posebne funkcionalnosti **Registar dokumenata SDI** u kojoj je moguće pregledati vremensku povijest prijenosa dokumenta i preuzeti i pregledati datoteke koje je proizveo Fluentis (XML i PDF) i koje je primio SdI.  
Pasivni ciklus elektroničkog fakturiranja prema privatnim osobama ne dopušta mogući odbijanje od strane primatelja dokumenta fakturiranja, koji se stoga mora upravljati kao računovodstvena obveza prema važećim propisima.