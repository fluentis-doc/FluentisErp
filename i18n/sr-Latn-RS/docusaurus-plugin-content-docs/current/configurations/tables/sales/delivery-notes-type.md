---
title: Tipovi otpremnica
sidebar_position: 18
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako nameravate da je konfigurišete ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Tabela se otvara putem putanje **Tablice > Prodaja > Tipovi otpremnica** i koristi se za određivanje svojstava otpremnice.

Omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli.

Za unos novih zapisa potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

**Tip otpremnice/Opis tipa otpremnice**: tip i opis tipa otpremnice. Šifra otpremnice mora biti jedinstvena.

**Numeracija:** u ovo polje potrebno je uneti odgovarajuću šifru numeracije. Za više informacija pogledajte članak o [Fluentis numeracijama](/docs/configurations/tables/fluentis-numerations).

**Tip otpremnice**: u ovo polje potrebno je uneti prirodu otpremnice: isporuka, povrat, davanje na uvid i povrat robe date na uvid. Vrednost je potrebno odabrati sa liste.

**Narudžbina**: ako je ova oznaka aktivirana, otpremnicu je moguće razdužiti na osnovu narudžbine kupca.

**Vrednosti**: ako je ova oznaka aktivirana, u ispisu otpremnice prikazivaće se vrednosti redova artikala iz dokumenta.

**Tip fakture/Opis tipa fakture**: u ovim poljima definiše se tip fakture koji će se koristiti za izradu fakture iz otpremnice putem odgovarajućeg [postupka](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes). Fakturu iz otpremnice moguće je izraditi samo ako je u ovom polju naveden tip fakture.

**Razlog prevoza**: u ovo polje potrebno je uneti opis razloga prevoza. Reč je o slobodnom tekstualnom polju u koje se unosi razlog koji će biti predložen u otpremnici.

**Kontrola kupaca**: ako je ova oznaka aktivirana, sistem proverava tip šifarnika konta/analitičkog konta unetog u dokument kako bi utvrdio da li je obavezno reč o kupcu. Ako to nije slučaj, sistem će korisniku prikazati poruku o grešci. Preporučuje se aktiviranje ove opcije za sve tipove prodajnih otpremnica.

**Blokiraj odštampani dokument**: ako je ova oznaka aktivirana, nije moguće menjati otpremnicu čije je zaglavlje označeno kao odštampano.

**Kredit (limit)**: ako je ova oznaka aktivirana, otpremnica ovog tipa biće uključena u kontrolu kreditnog limita.

**Isključi zaključavanje**: ako je ova oznaka aktivirana, sistem neće blokirati dokument ovog tipa zbog eventualnog prekoračenja kreditnog limita, već će korisniku ipak omogućiti njegov unos i štampanje.

**Novčani tok**: ako je ova oznaka aktivirana, ovaj tip otpremnice učestvuje u obračunu [novčanog toka](/docs/treasury/cash-flow/cash-flow/search-cash-flow).

**Skladište/Opis skladišta**: u ova polja potrebno je uneti skladište u koje će se primiti roba sadržana u otpremnicama ovog tipa. Ova vrednost će se koristiti kao podrazumevana vrednost.

**Skladišni šablon/Opis skladišnog šablona**: u ova polja potrebno je uneti šablon za evidentiranje kretanja robe koja se prima u otpremnicama ovog tipa.

**Nezbirna količina artikla narudžbine**: ako je ova oznaka aktivirana, prilikom razduživanja otpremnica ovog tipa količine razdužene u dokumentu razduživanja prikazivaće se zasebno po redu artikla, bez sabiranja količina.

**Poljoprivredni PDV (prodajnog ugovora)**: ako je ova oznaka aktivirana, prilikom izrade otpremnice sistem će proveriti da li za korišćeni artikal postoji šifra poljoprivrednog PDV-a. Ako ne postoji, upotrebiće se šifra PDV-a iz šifarnika artikala.

**Proveri istovareni Picking**: ako je ova oznaka aktivirana, prilikom izrade otpremnice iz razduženog Picking dokumenta automatski će se aktivirati oznaka razduživanja na otpremnici. Preporučuje se da ova opcija uvek bude aktivirana ako se koristi upravljanje Pickingom.

**Blokiraj količinu Pickinga**: ako je ova oznaka aktivirana, blokiraju se količina i alternativna količina u otpremnici izrađenoj iz UDC liste. Preporučuje se da ova opcija uvek bude aktivirana ako se koristi upravljanje Pickingom i UDC jedinicama.

**Dozvoli istovar nedostupnih lotova**: ako je ova oznaka aktivirana, dozvoljava se i izlaz nedostupnih lotova.

**EDI upravljanje**: ako je ova oznaka aktivirana, za otpremnice ovog tipa moguće je izraditi EDI datoteku.

**Cena sa PDV-om**: ako je ova oznaka aktivirana, sistem preuzima prodajnu cenu iz cenovnika ili šifarnika artikala i dodaje joj PDV. Ako ne pronađe odgovarajući cenovnik (na primer, zbog isteka njegovog važenja ili neodgovarajuće valute), preuzima troškove ili cene iz šifarnika artikala i prikazuje ih sa uključenim PDV-om.

Troškovi i cene u šifarniku artikala izraženi su u EUR-ima, pa će ih sistem takođe preračunati u valutu kupca.

**Provera lotova:** ako je ova oznaka aktivirana, proverava se da li lotovi odgovaraju artiklima.

**Upravljanje matricama dodatnih podataka**: ako je ova oznaka aktivirana, pri upravljanju artiklima sa matricom prikazuje se dodatna kartica za unos vrednosti količine za svaku pojedinačnu ćeliju matrice. Ako nije aktivirana, ova kartica i pripadajuća matrica neće se prikazivati.

**Osnovna sredstva**: ova oznaka omogućava upravljanje osnovnim sredstvima u tipu fakture, a u sledećem polju potrebno je navesti tip operacije nad osnovnim sredstvima.

**Tip operacije**: u ovom padajućem meniju moguće je odabrati tip operacije nad osnovnim sredstvima između više ponuđenih opcija (revalorizacija, uništenje, kapitalni dobitak itd.).

**Tip popusta/Opis**: u ovom stupcu moguće je povezati tip popusta koji će biti predložen kada se popusti unose direktno u kolonu *Popusti artikla* u tabeli artikala dokumenta (za više informacija pogledajte članak [Pojednostavljeno upravljanje vidžetom za popuste](/docs/sales/sales-flow/discount-widget)).

**Upravljanje WEEE-om (RAEE)**: ova oznaka omogućava upravljanje [WEEE-om (RAEE)](/docs/sales/sales-flow/raee).