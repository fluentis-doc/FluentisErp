---
title: Upravljanje projektima
sidebar_position: 1
---

U **Fluentis ERP-u** projekt predstavlja složen skup aktivnosti podložnih vremenskim i resursnim ograničenjima, usmjerenih prema unaprijed definiranom cilju. Praćenje rezultata omogućeno je putem odgovarajućih alata kao što su nadzorne ploče, ispisi, Ganttov dijagram, workflow, Supervisor i sprintovi za korisnike koji primjenjuju Agile metodologiju.

Projekte je potrebno definirati detaljno, uz navođenje svih aktivnosti potrebnih za ostvarenje ciljeva, koje su unutar projekta predstavljene kao **WBS čvorovi**.

Organizacija rada u manje i lakše upravljive cjeline pojednostavljuje razumijevanje projekta te svim uključenim sudionicima (stakeholderima) omogućuje jasan pregled faza i aktivnosti koje treba izvršiti. Aktivnosti su predstavljene najnižim razinama WBS strukture i definirane su kao **Work Package/Task**.

Upravljanje projektima omogućuje i veću stratešku fleksibilnost jer se može prilagoditi stalnim promjenama u poslovnom okruženju, kako unutarnjim tako i vanjskim.

Ovo područje namijenjeno je tvrtkama koje posluju prema modelu **proizvodnog orijentiranja** i **uslužnog orijentiranja**, budući da se putem odgovarajućih funkcionalnosti povezuje sa svim područjima dostupnima u **Fluentis ERP-u**.

Glavne vrste projekata su:

**WBS projekti** – omogućuju izradu projekata prema metodologiji **Work Breakdown Structure**, čime se podržava upravljanje projektima prema Waterfall pristupu kroz pojedine WBS čvorove i Work Packagee.

**Projekti tipa Radni nalog (Commessa)** – omogućuju upravljanje jednostavnijim projektima u kojima je ključni element broj projekta odnosno radnog naloga, koji služi za objedinjavanje dokumenata različitih vrsta.

**Ponavljajući projekti** – omogućuju kreiranje projekata namijenjenih ponavljajućim ugovorima, čija je glavna značajka periodično fakturiranje. Tipični primjeri su ugovori o najmu ili održavanju.

**Projekti održavanja** – omogućuju upravljanje planiranim održavanjem postrojenja unutar ili izvan tvrtke. Postrojenja pritom ne moraju biti u vlasništvu tvrtke.

**SAL projekti** – omogućuju upravljanje ugovorima prema **Stanju napretka radova (SAL)**. Riječ je o projektima koji obuhvaćaju isporuku usluga ili proizvoda tijekom njihove realizacije te podržavaju izdavanje računa za predujmove i završni obračun.

**Manufacturing projekti** – povezuju upravljanje projektima s proizvodnim i logističkim procesima radi objedinjavanja troškova proizvodnje, prvenstveno u **MTO (Make to Order)** proizvodnom modelu.

U nastavku su prikazani primjeri poslovnih procesa za različite vrste poslovanja.

Slika u nastavku prikazuje organizaciju poslovnog procesa u uslužnom poduzeću.

Polazeći od definiranja potreba kupca, određivanja projektnog tima i analize postojećeg stanja, izrađuje se **WBS projekt** unutar Fluentis ERP-a s jasno definiranim ciljevima.

Nakon toga planiraju se resursi, upravlja se administrativnim dijelom projekta (uključujući eventualne fakture predujma) te se prate sprintovi.

Projekt se periodično evidentira i fakturira tijekom njegova trajanja.

![Usluge](/img/it-it/project-management/projects/BPM_SERVIZI.jpg)

Slika u nastavku prikazuje organizaciju poslovnog procesa proizvodnog poduzeća.

Prvi korak odvija se u području prodaje, izradom ponude i eventualnih prototipova. Već u fazi ponude moguće je definirati budžete za troškove materijala i usluga.

Kada je ponuda potvrđena, nije potrebno ponovno unositi sve podatke jer je dovoljno pretvoriti ponudu u projekt. Projekt pritom može sadržavati i predložak projekta.

Iz projekta se zatim mogu generirati planirane intervencije koje se prate putem sprintova, nakon čega slijedi realizacija intervencija i njihovo fakturiranje.

![Proizvodnja](/img/it-it/project-management/projects/BPM_PROD.jpg)

Sažetak glavnih poslovnih tokova u području projekata:

Projekt može nastati na jedan od sljedećih načina:

1. ručnim unosom
2. iz predloška projekta
3. iz prodajne ponude (dostupne su različite mogućnosti: samo iz ponude, iz ponude i predloška ili dodavanjem ponude postojećem projektu)

Projekt može biti **jednorazinski** ili **višerazinski**, uz podršku za hijerarhijsku strukturu.
Unutar projekta moguće je definirati vremenska razdoblja, prodajnu cijenu, različite troškove, troškove materijala i resursa.
Također se definiraju pravila fakturiranja i planiraju resursi.

Osnovni elementi projekta su **retci projekta**. Ako su retci vrste **1 – s klasom** ili **2 – bez klase**, moraju sadržavati artikl i/ili opis, mjernu jedinicu i cijenu. U suprotnom će ostati opisni retci koji se mogu koristiti u kasnijim dokumentima, ali sami po sebi neće stvarati vrijednost za fakturiranje, osim ako ih korisnik naknadno ručno ne dopuni.

Ako su na projektu planirani resursi, iz projekta je moguće automatski generirati **zahtjeve za intervenciju** ili **planirane intervencije**.
- Planirani resursi na projektu → Zahtjev za intervenciju → Planirana intervencija → Stvarna intervencija → Izlazni račun
- Planirani resursi na projektu → Planirana intervencija → Stvarna intervencija → Izlazni račun
- Prijava aktivnosti → Intervencija → Izlazni račun

Hoće li se koristiti **Zahtjev za intervenciju** ovisi o poslovnim potrebama:
- upravljanje vanjskim portalima na kojima kupci ili korisnici unose zahtjeve za intervenciju, koji se zatim provjeravaju i odobravaju
- uvođenje dodatnog koraka provjere planiranih aktivnosti prije stvarnog planiranja putem planiranih intervencija, koje povećavaju odgovarajuće brojače unutar projekta

Fakturiranje u području projekata može se provoditi na dva načina:
- izravno iz projekta (najčešće za periodično fakturiranje projekata koji obuhvaćaju naknade, licence i slične ugovore te za fakture predujma)
- iz intervencija

Zbog toga svi dokumenti namijenjeni fakturiranju moraju završiti u intervencijama. Primjerice, aktivnost označena kao **Naplativa** može se automatski pretvoriti u intervenciju.

S druge strane, za potrebe obračuna plaća i evidencije zaposlenika moraju postojati sve **Prijave aktivnosti**. Ako korisnik izravno unese intervenciju, nakon što status intervencije postane **Odobreno**, sustav može automatski generirati prijavu aktivnosti koja će se koristiti za obračun radnih sati zaposlenika.

Iz toga proizlazi da su **Intervencije** i **Aktivnosti** međusobno povezani dokumenti:

- iz **Intervencije** → u **Aktivnost**
- iz **Aktivnosti** (ako je označena kao **Naplativa**) → u **Intervenciju**

Za više pojedinosti pogledajte dokumentaciju za pojedine vrste dokumenata, gdje su, uz opis funkcionalnosti i potrebnih konfiguracija, objašnjeni i prioriteti prema kojima se primjenjuju konfiguracije te način povezivanja s ostalim dokumentima.