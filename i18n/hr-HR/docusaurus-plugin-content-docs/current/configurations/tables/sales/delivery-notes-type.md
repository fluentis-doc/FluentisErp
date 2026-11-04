---
title: Tipovi otpremnica
sidebar_position: 18
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako je namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Tablica se otvara putem putanje **Tablice > Prodaja > Tipovi otpremnica** i upotrebljava se za određivanje svojstava otpremnice.

Omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmjene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici.

Za unos novih zapisa potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.

**Tip otpremnice/Opis tipa otpremnice**: vrsta i opis vrste otpremnice. Šifra otpremnice mora biti jedinstvena.

**Numeracija:** u ovo polje potrebno je unijeti odgovarajuću šifru numeracije. Za više informacija pogledajte članak o [Fluentis numeracijama](/docs/configurations/tables/fluentis-numerations).

**Vrsta otpremnice**: u ovo polje potrebno je unijeti prirodu otpremnice: isporuka, povrat, davanje na uvid i povrat robe dane na uvid. Vrijednost je potrebno odabrati s popisa.

**Narudžba**: ako je ova oznaka aktivirana, otpremnicu je moguće razdužiti na temelju narudžbe kupca.

**Vrijednosti**: ako je ova oznaka aktivirana, u ispisu otpremnice prikazivat će se vrijednosti redaka artikala iz dokumenta.

**Vrsta računa/Opis vrste računa**: u ovim poljima definira se vrsta računa koja će se upotrebljavati za izradu računa iz otpremnice putem odgovarajućeg [postupka](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes). Račun iz otpremnice moguće je izraditi samo ako je u ovom polju navedena vrsta računa.

**Razlog prijevoza**: u ovo polje potrebno je unijeti opis razloga prijevoza. Riječ je o slobodnom tekstualnom polju u koje se unosi razlog koji će se predlagati u otpremnici.

**Kontrola kupaca**: ako je ova oznaka aktivirana, sustav provjerava vrstu šifarnika konta/analitičkog konta unesenog u dokument kako bi utvrdio radi li se obvezno o kupcu. Ako to nije slučaj, sustav će korisniku prikazati poruku o pogrešci. Preporučuje se aktivirati ovu opciju za sve vrste prodajnih otpremnica.

**Blokiraj ispisani dokument**: ako je ova oznaka aktivirana, nije moguće mijenjati otpremnicu čije je zaglavlje označeno kao ispisano.

**Kredit (limit)**: ako je ova oznaka aktivirana, otpremnica ove vrste bit će uključena u kontrolu kreditnog limita.

**Isključi zaključavanje**: ako je ova oznaka aktivirana, sustav neće blokirati dokument ove vrste zbog eventualnog prekoračenja kreditnog limita, već će korisniku ipak omogućiti njegov unos i ispis.

**Novčani tijek**: ako je ova oznaka aktivirana, ova vrsta otpremnice sudjeluje u izračunu [novčanog tijeka](/docs/treasury/cash-flow/cash-flow/search-cash-flow).

**Skladište/Opis skladišta**: u ova polja potrebno je unijeti skladište u koje će se zaprimiti roba sadržana u otpremnicama ove vrste. Ova će se vrijednost upotrebljavati kao zadana vrijednost.

**Skladišni predložak/Opis skladišnog predloška**: u ova polja potrebno je unijeti predložak za evidentiranje kretanja robe koja se zaprima u otpremnicama ove vrste.

**Nezbrojena količina artikla narudžbe**: ako je ova oznaka aktivirana, prilikom razduživanja otpremnica ove vrste količine razdužene u dokumentu razduživanja prikazivat će se zasebno po retku artikla, bez zbrajanja količina.

**Poljoprivredni PDV (prodajnog ugovora)**: ako je ova oznaka aktivirana, prilikom izrade otpremnice sustav će provjeriti postoji li za korišteni artikl šifra poljoprivrednog PDV-a. Ako ne postoji, upotrijebit će se šifra PDV-a iz šifarnika artikala.

**Provjeri istovareni Picking**: ako je ova oznaka aktivirana, prilikom izrade otpremnice iz razduženog Picking dokumenta automatski će se aktivirati oznaka razduženja na otpremnici. Preporučuje se uvijek aktivirati ovu opciju ako se upotrebljava upravljanje Pickingom.

**Blokiraj količinu Pickinga**: ako je ova oznaka aktivirana, blokiraju se količina i alternativna količina u otpremnici izrađenoj iz UDC liste. Preporučuje se uvijek aktivirati ovu opciju ako se upotrebljava upravljanje Pickingom i UDC jedinicama.

**Dopusti istovar neraspoloživih lotova**: ako je ova oznaka aktivirana, dopušta se i izlaz nedostupnih lotova.

**EDI upravljanje**: ako je ova oznaka aktivirana, za otpremnice ove vrste moguće je izraditi EDI datoteku.

**Cijena s PDV-om**: ako je ova oznaka aktivirana, sustav dohvaća prodajnu cijenu iz cjenika ili šifarnika artikala te joj dodaje PDV. Ako ne pronađe odgovarajući cjenik (primjerice, zbog isteka njegove valjanosti ili neodgovarajuće valute), dohvaća troškove ili cijene iz šifarnika artikala i prikazuje ih s uključenim PDV-om.

Troškovi i cijene u šifarniku artikala izraženi su u EUR-ima pa će ih sustav također preračunati u valutu kupca.

**Provjera lotova:** ako je ova oznaka aktivirana, provjerava se odgovaraju li lotovi artiklima.

**Upravljanje matricama dodatnih podataka**: ako je ova oznaka aktivirana, kod upravljanja artiklima s matricom prikazuje se dodatna kartica za unos vrijednosti količine za svaku pojedinu ćeliju matrice. Ako nije aktivirana, ova kartica i pripadajuća matrica neće se prikazivati.

**Osnovna sredstva**: ova oznaka omogućuje upravljanje osnovnim sredstvima u vrsti računa, a u sljedećem polju potrebno je navesti vrstu operacije nad osnovnim sredstvima.

**Vrsta operacije**: u ovom padajućem popisu moguće je odabrati vrstu operacije nad osnovnim sredstvima između više ponuđenih opcija (revalorizacija, uništenje, kapitalni dobitak itd.).

**Vrsta popusta/Opis**: u ovom stupcu moguće je povezati vrstu popusta koja će se predlagati kada se popusti unose izravno u stupac *Popusti artikla* u tablici artikala dokumenta (za više informacija pogledajte članak [Pojednostavljeno upravljanje widgetom za popuste](/docs/sales/sales-flow/discount-widget)).

**Upravljanje WEEE-om (RAEE)**: ova oznaka omogućuje upravljanje [WEEE-om (RAEE)](/docs/sales/sales-flow/raee).