---
title: Pregled stanja računa
sidebar_position: 8
---

S ove forme moguće je dobiti prikaz podataka na ekranu koji otprilike odgovara izvještaju o bilanci, ali s mogućnošću korištenja različitih filtara, grupiranja podataka i dodatnih opcija.

PODRUČJE FILTRA:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image01.png)

Omogućuje filtriranje računovodstvenih podataka za obradu unoseći raspon **datuma obračuna** raspon (podskup) konta ili podkonti, tip konta, računovodstvenu stavku (**Predložak**) specifičnu podjelu (korisno ako postoji više aktivnih) te stranu valutu (**Valuta**).

**Konvertiraj također druge zbrojeve u valuti**: aktiviranjem ovog flaga, uz postavljanje prethodnog filtra Valuta (koji izvlači transakcije izrađene u određenoj valuti), i ostale računovodstvene transakcije izrađene u eurima ili drugim valutama, bit će pretvorene u odabranu valutu prema tečaju na datum knjiženja.

PARAMETRI: (otvoriti proširenja)

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image02.png)

Budući da prikaz s rezultatima također prikazuje polje **Razina**, koje predstavlja hijerarhijski redoslijed odgovarajućeg konta/podkontna u kontonom planu (gdje je 99 posljednja razina s najvećim detaljima, a 0 je korijenski čvor, obično koji sadrži ukupno), prisutan je i filtar za razine koje treba prikazati:

**Svi**: Prikazuje sve razine;

**Prikaži ukupni iznos za razinu X...**: unoseći željenu razinu (npr. 98) u odgovarajuće polje **Razina** rezultati će biti grupirani prema glavnim kontima (koja u planu konta predstavljaju razinu neposredno iznad 99, definiranu kao maksimalni detalj podkonti u kontnom planu za ovu obradu);

**Prikaži ukupni iznos za razinu X... s podzbrojevima:** U usporedbi s prethodnim načinom grupiranja, prikazat će i djelomične ukupne iznose za moguće hijerarhijski niže grupacije. 

**Prikaži ukupni iznos samo za podračune**: Vrijednosti će biti prikazane samo za razine koje sadrže podkonte (više hijerarhijske razine neće biti prikazane). 

**Isključi retke s nultim iznosom**: Konta/podkonti bez transakcija neće biti prikazani.

**Dodaj (uključeno/isključeno)**: ova opcija aktivira ili deaktivira poseban način prikazivanja koji, u slučaju promjene raspona datuma knjiženja i ažuriranja prikaza pritiskom na gumb Traži u traci izbornika, dodaje novi rezultat (dodajući ga u prikaz rezultata) prethodno prikazanom rezultatu. To omogućuje, na primjer, usporedbu vrijednosti između različitih razdoblja. Radi upravljivosti i jasnoće rezultata, preporučuje se korištenje ove opcije samo uz filtar za konta/podkonte postavljen tako da vraća ograničen set podataka.

GRID S REZULTATIMA:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image03.png)

U ovom prikazu vide se konta/podkonta prema parametrima filtriranja i grupiranja definiranim u gornjem dijelu obrasca.

Prikazuju se šifra i opis **grupe** (vidi strukturu **[kontnog plana](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**) i računa/podračuna te šifra **razine** definirana posebno za ovu obradu i opisana gore.  

**Konačni**: ovo polje označava (zastavicom) je li konto i/ili grupa hijerarhijski viša razina od svih ostalih u svojoj grani (strukture kontnog plana). Ovo je korisno jer, u slučaju složenije organizacije strukture kontnog plana, šifra prikazana u polju Razina možda zapravo nije hijerarhijski nadređena i stoga možda neće biti moguće ispravno filtrirati (i dobiti točne ukupne iznose).

Stoga je u retku filtera mreže moguće odabrati sve račune s aktivnom zastavom Konačni, čime se osigurava izdvajanje svih viših razina.  

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image04.png)

NAPOMENE:

U stupcima koji sadrže numeričke podatke koriste se sljedeće kratice:

VdS = Valuta tvrtke (zamišljena kao valuta tvrtke u upotrebi, zove se ona u kojoj vodimo računovodstvo, u slučaju talijanske tvrtke to je euro).  

VS = odabrana valuta (podijeljena) u početnom filtru.  

Euroam = Euroamount: ekvivalentna vrijednost transakcije u valuti u eurima. 

PAŽNJA: moguće je prikazati (ili sakriti) dodatne stupce u usporedbi sa standardnim profilom obrasca desnim klikom na zaglavlja stupaca pregleda i odabirom  **Pokaži izbornik stupaca**.

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image05.png)

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image06.png)

ZNAČENJE STUPCA:

Godina otvaranja Dugovno / potražno = vrijednost posljednjeg izračunatog otvaranja konta **(A)**

Prethodni iznos (dugovno / potražno) = iznos koji se odnosi na razdoblje između posljednjeg otvaranja konta (A) i datuma početka razdoblja postavljenog u filtru datuma knjiženja **(B)**

Prethodna bilanca (dugovno/potražno) = **(A) + (B)**

Dugovno/potražno u razdoblju= iznos koji se odnosi na razdoblje umetnuto u filtar datuma **(C)**

Ukupno dugovno/potražno = **(A) + (B) + (C)**

Konačno dugovno/potražno = je neto stanje ukupnih dugovnih/potražnih vrijednosti izraženih u prethodnoj točki.

Stupac **Filter**: to je "tehnički" podatak koji se koristi, u slučaju izvoza prikazanih podataka u Excel (ili prijenosa s kopiranjem), za ispravno upravljanje naknadnim stvaranjem tablica u Excelu.

UKUPNO:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image07.png)

**Ukupno za označene redove**: može se odabrati jedan ili više (držeći pritisnutu tipku Ctrl) konta/podkonta. 

PAŽNJA: Ako su npr. odabrana podkonta i povezana glavna konta ili grupe na višoj hijerarhijskoj razini (koje stoga već uključuju vrijednost detaljnih podkonta), **iznos prikazan** u ovom retku bit će prikazan **u crvenom** kako bi se istaknulo da će ukupni rezultat biti iskrivljen nehomogenim i koherentnim odabirom.  

**Ukupno za detaljna konta**: ukupni iznosi prikazani u ovom retku odnose se samo na detaljna podkonta na najnižoj hijerarhijskoj razini. 

**Ukupno tabela**: ukupni iznosi prikazani u ovom retku odnose se na sve retke prikazane u mreži rezultata, stoga ako se vrate i detaljna podkonta i više razine ili računi (na temelju postavljenih filtara), ukupni će biti zbroj podkonta i viših razina (množenje vrijednosti s obzirom na razinu detalja i predstavlja u ovom slučaju beznačajnu brojku).






