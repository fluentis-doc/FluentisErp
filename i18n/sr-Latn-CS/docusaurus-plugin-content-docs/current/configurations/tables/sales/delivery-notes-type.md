---
title: Tipovi otpremnica
sidebar_position: 18
---

:::tip[FAst Start]
Tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

Ako se želi konfigurirati ručno, potrebno je konzultirati check listu na poveznici.
:::

Tablica se otvara putem **Tablice > Prodaja > Tipovi otpremnica prodaje** i koristi se za definiranje svojstava otpremnice.  

Omogućuje unos novih zapisa ili pretraživanje već postojećih kako bi ih se moglo prikazati, izmijeniti ili izbrisati.

Obrazac se sastoji od područja za filtriranje i područja za rezultate. Kada su svi željeni filtri postavljeni, dovoljno je kliknuti na tipku **Pretraživanje** kako bi se rezultati prikazali unutar mreže rezultata.

Za unos novih zapisa potrebno je kliknuti u mreži na prvi prazan redak ili pritisnuti tipku **Novi**.

**Vrsta otpremnice / Opis vrste otpremnice**: vrsta i opis vrste otpremnice. Kod otpremnice mora biti jedinstven;  

**Numeracija:** u ovo polje unosi se kod odgovarajuće numeracije. Za više detalja pogledati članak o [Fluentis numeracijama](/docs/configurations/tables/fluentis-numerations);

**Vrsta otpremnice**: u ovo polje unosi se vrsta otpremnice: isporuka, povrat, na viđenje i povrat s viđenja. Vrijednost se odabire s popisa;

**Nalog**: ako je aktivan ovaj flag, označava da se otpremnica može izraditi na temelju naloga kupca;  

**Vrijednosti**: ako je flag aktivan, u ispisu otpremnice prikazuju se vrijednosti stavki artikala iz dokumenta;  

**Vrsta računa / Opis vrste računa**: u ova polja definira se vrsta računa koji će se koristiti pri izradi računa iz otpremnice putem odgovarajuće [procedura](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes). Račun se može izraditi iz otpremnice samo ako je ovo polje popunjeno;

**Predložak prijevoza**: u ovo se polje unosi opis predloška prijevoza; riječ je o slobodnom tekstu koji će biti predložen u otpremnici.;

**Provjera kupca**: ako je aktivan, ovaj flag omogućuje sustavu da provjeri je li u dokument unesen konto/podkonto tipa kupac. Ako nije, sustav će upozoriti korisnika porukom o grešci. Preporučuje se obavezno aktivirati ga na svim vrstama otpremnica prodaje;  

**Blokiraj ispisani dokument**: ako je aktivan, flag onemogućuje izmjene otpremnice koja već ima postavljen flag Ispisano u zaglavlju;  

**Kredit**: ako je aktivan, otpremnice ove vrste ulaze u provjeru kreditnog limita;  

**Isključi blokadu**: ako je aktivan, sustav neće primjenjivati blokadu dokumenta zbog eventualnog prekoračenja kreditnog limita te će korisniku omogućiti unos i ispis dokumenta;  

**Cash flow**: ako je aktivan, ovaj tip otpremnice ulazi u izračun [cash flowa](/docs/treasury/cash-flow/cash-flow/search-cash-flow).

**Skladište / Opis skladišta**: u ova polja unosi se skladište u koje stiže roba navedena u otpremnicama ove vrste. Vrijednost se koristi kao zadana.  

**Predložak skladišta / Opis predloška skladišta**: u ova polja unosi se predložak skladišnog prometa za robu u dolaznim otpremnicama ove vrste;  

**Evidencija nesumiranih količina**: ako je ovaj flag uključen, prilikom obrade otpremnica sustav će prenijeti isporučene količine iz dokumenta razdvojene po pojedinoj stavci, bez zbrajanja količina;  

**Poljoprivredni PDV**: ako je aktiviran, sustav pri kreiranju otpremnice provjerava ima li artikal postavljen poljoprivredni PDV; ako ga nema, koristi PDV iz šifrarnika artikla;  

**Kontrola preuzetog pickinga**: ako je aktivan, pri izradi otpremnice iz preuzetog pickinga automatski se postavlja flag preuzeto. Preporučuje se aktivirati ga ako se koristi upravljanje pickingom;  

**Blokiraj količine iz pickinga**: ako je aktivan, blokira količine i alternativne količine u otpremnici kreiranoj iz UDC liste. Preporučuje se aktivirati ako se koristi upravljanje pickingom i UDC-om;  

**Dozvoli izdavanje nedostupnih lotova** ako je aktivan, omogućuje izdavanje i onih lotova koji nisu dostupni;  

**EDI obrada**: ako je aktivan, za ovu vrstu otpremnice moguće je kreirati EDI datoteku;  

**Cijena s PDV-om**: ako je aktivan, sustav dohvaća prodajnu cijenu iz cjenika ili šifrarnika artikla i prikazuje ju s dodanim PDV-om. Ako ne pronađe odgovarajući cjenik (npr. istekao ili valuta ne odgovara), sustav koristi troškove ili cijene iz šifrarnika artikla, također s PDV-om.  

Troškovi i cijene u šifrarniku izraženi su u EUR, pa ih sustav preračunava u valutu kupca.

**Provjera lotova:** ako je aktivan, sustav provjerava valjanost lotova za artikle;  

**Upravljanje matricama – dodatni podaci**: ako je aktivan, kod artikala s matricom prikazuje se dodatna kartica za unos količina po pojedinoj ćeliji matrice. Ako nije aktivan, kartica i matrica se ne prikazuju.

**Upravljanje osnovnim sredstvima**: ovaj flag omogućuje upravljanje osnovnim sredstvima u vrsti računa, a u sljedećem polju definira se vrsta operacije nad osnovnim sredstvima;  

**Vrsta operacije**: u padajućem izborniku moguće je odabrati vrstu operacije nad osnovnim sredstvima (revalorizacija, uništenje, plusvalija itd.).     

**Vrsta popusta / Opis**: u ovom stupcu može se pridružiti vrsta popusta koja će se predlagati kada se popusti unose izravno u stupac *Popusti artikla* u mreži artikala u dokumentima (više detalja u članku [Pojednostavljeni widget za popuste](/docs/sales/sales-flow/discount-widget)).