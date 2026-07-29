---
title: Upravljanje projektima
sidebar_position: 1
---

U **Fluentis ERP-u** projekat predstavlja složen skup aktivnosti podložnih vremenskim i resursnim ograničenjima, usmerenih ka unapred definisanom cilju. Praćenje rezultata omogućeno je putem odgovarajućih alata kao što su kontrolne table, izveštaji, Gantov dijagram, workflow, Supervisor i sprintovi za korisnike koji primenjuju Agile metodologiju.

Projekte je potrebno definisati detaljno, uz navođenje svih aktivnosti potrebnih za ostvarenje ciljeva, koje su unutar projekta predstavljene kao **WBS čvorovi**.

Organizacija rada u manje i lakše upravljive celine pojednostavljuje razumevanje projekta i svim uključenim učesnicima (stakeholderima) omogućava jasan pregled faza i aktivnosti koje treba izvršiti. Aktivnosti su predstavljene najnižim nivoima WBS strukture i definisane su kao **Work Package/Task**.

Upravljanje projektima omogućava i veću stratešku fleksibilnost jer se može prilagoditi stalnim promenama u poslovnom okruženju, kako unutrašnjim tako i spoljnim.

Ova oblast namenjena je kompanijama koje posluju prema modelu **proizvodne orijentacije** i **uslužne orijentacije**, budući da se putem odgovarajućih funkcionalnosti povezuje sa svim oblastima dostupnim u **Fluentis ERP-u**.

Glavne vrste projekata su:

**WBS projekti** – omogućavaju izradu projekata prema metodologiji **Work Breakdown Structure**, čime se podržava upravljanje projektima prema Waterfall pristupu kroz pojedine WBS čvorove i Work Package-e.

**Projekti tipa Radni nalog (Commessa)** – omogućavaju upravljanje jednostavnijim projektima u kojima je ključni element broj projekta, odnosno radnog naloga, koji služi za objedinjavanje dokumenata različitih vrsta.

**Ponavljajući projekti** – omogućavaju kreiranje projekata namenjenih ponavljajućim ugovorima, čija je glavna karakteristika periodično fakturisanje. Tipični primeri su ugovori o zakupu ili održavanju.

**Projekti održavanja** – omogućavaju upravljanje planiranim održavanjem postrojenja unutar ili van kompanije. Postrojenja pritom ne moraju biti u vlasništvu kompanije.

**SAL projekti** – omogućavaju upravljanje ugovorima prema **Stanju napretka radova (SAL)**. Reč je o projektima koji obuhvataju isporuku usluga ili proizvoda tokom njihove realizacije i podržavaju izdavanje računa avansa i završni obračun.

**Manufacturing projekti** – povezuju upravljanje projektima sa proizvodnim i logističkim procesima radi objedinjavanja troškova proizvodnje, prvenstveno u **MTO (Make to Order)** proizvodnom modelu.

U nastavku su prikazani primeri poslovnih procesa za različite vrste poslovanja.

Slika u nastavku prikazuje organizaciju poslovnog procesa u uslužnom preduzeću.

Polazeći od definisanja potreba kupca, određivanja projektnog tima i analize postojećeg stanja, kreira se **WBS projekat** unutar Fluentis ERP-a sa jasno definisanim ciljevima.

Nakon toga planiraju se resursi, upravlja se administrativnim delom projekta (uključujući eventualne fakture avansa) i prate se sprintovi.

Projekat se periodično evidentira i fakturiše tokom njegovog trajanja.

![Usluge](/img/it-it/project-management/projects/BPM_SERVIZI.jpg)

Slika u nastavku prikazuje organizaciju poslovnog procesa proizvodnog preduzeća.

Prvi korak odvija se u oblasti prodaje, izradom ponude i eventualnih prototipova. Već u fazi ponude moguće je definisati budžete za troškove materijala i usluga.

Kada je ponuda potvrđena, nije potrebno ponovo unositi sve podatke jer je dovoljno pretvoriti ponudu u projekat. Projekat pritom može sadržati i predložak projekta.

Iz projekta se zatim mogu generisati planirane intervencije koje se prate putem sprintova, nakon čega sledi realizacija intervencija i njihovo fakturisanje.

![Proizvodnja](/img/it-it/project-management/projects/BPM_PROD.jpg)

Sažetak glavnih poslovnih tokova u oblasti projekata:

Projekat može nastati na jedan od sledećih načina:

1. ručnim unosom
2. iz predloška projekta
3. iz prodajne ponude (dostupne su različite mogućnosti: samo iz ponude, iz ponude i predloška ili dodavanjem ponude postojećem projektu)

Projekat može biti **jednoslojan** ili **višeslojan**, uz podršku za hijerarhijsku strukturu.
Unutar projekta moguće je definisati vremenske periode, prodajnu cenu, različite troškove, troškove materijala i resursa.
Takođe se definišu pravila fakturisanja i planiraju resursi.

Osnovni elementi projekta su **redovi projekta**. Ako su redovi tipa **1 – sa klasom** ili **2 – bez klase**, moraju sadržati artikal i/ili opis, jedinicu mere i cenu. U suprotnom će ostati opisni redovi koji se mogu koristiti u kasnijim dokumentima, ali sami po sebi neće stvarati vrednost za fakturisanje, osim ako ih korisnik naknadno ručno ne dopuni.

Ako su na projektu planirani resursi, iz projekta je moguće automatski generisati **zahteve za intervenciju** ili **planirane intervencije**.
- Planirani resursi na projektu → Zahtev za intervenciju → Planirana intervencija → Stvarna intervencija → Izlazni račun
- Planirani resursi na projektu → Planirana intervencija → Stvarna intervencija → Izlazni račun
- Prijava aktivnosti → Intervencija → Izlazni račun

Da li će se koristiti **Zahtev za intervenciju** zavisi od poslovnih potreba:

- upravljanje spoljnim portalima na kojima kupci ili korisnici unose zahteve za intervenciju, koji se zatim proveravaju i odobravaju
- uvođenje dodatnog koraka provere planiranih aktivnosti pre stvarnog planiranja putem planiranih intervencija, koje povećavaju odgovarajuće brojače unutar projekta

Fakturisanje u oblasti projekata može se sprovoditi na dva načina:

- direktno iz projekta (najčešće za periodično fakturisanje projekata koji obuhvataju naknade, licence i slične ugovore, kao i za fakture avansa)
- iz intervencija

Zbog toga svi dokumenti namenjeni fakturisanju moraju završiti u intervencijama. Na primer, aktivnost označena kao **Naplativa** može se automatski pretvoriti u intervenciju.
S druge strane, za potrebe obračuna plata i evidencije zaposlenih moraju postojati sve **Prijave aktivnosti**. Ako korisnik direktno unese intervenciju, nakon što status intervencije postane **Odobreno**, sistem može automatski generisati prijavu aktivnosti koja će se koristiti za obračun radnih sati zaposlenih.
Iz toga proizlazi da su **Intervencije** i **Aktivnosti** međusobno povezani dokumenti:

- iz **Intervencije** → u **Aktivnost**
- iz **Aktivnosti** (ako je označena kao **Naplativa**) → u **Intervenciju**

Za više pojedinosti pogledajte dokumentaciju za pojedine vrste dokumenata, gde su, uz opis funkcionalnosti i potrebnih konfiguracija, objašnjeni i prioriteti prema kojima se primenjuju konfiguracije, kao i način povezivanja sa ostalim dokumentima.