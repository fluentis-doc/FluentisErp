---
title: Tipovi narudžbina kupaca
sidebar_position: 23
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako konfiguraciju nameravate da izvršite ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Tabela se otvara putem menija **Tablice > Prodaja > Tipovi narudžbina kupaca**.

Omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli.

Za unos novih zapisa potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

**Tip/Opis:** polja u koja se unose šifra i opis tipa narudžbine kupca. Važno: šifra mora biti jedinstvena za preduzeće i organizacionu jedinicu.

**Numeracija:** u ovo polje potrebno je uneti odgovarajuću šifru numeracije. Za više informacija o numeraciji dokumenata pogledajte članak [Fluentis numeracije](/docs/configurations/tables/fluentis-numerations).

**Automatska izrada projekta i Tip projekta:** ako je ova opcija uključena, sistem će prilikom unosa narudžbine kupca kreirati projekat tipa navedenog u koloni Tip projekta, koja se nalazi u podešavanjima tipa narudžbine. Projekat će imati isti broj kao narudžbina kupca i automatski će biti unet u zaglavlje narudžbine radi uspostavljanja veze. Kreirani projekat služi kao spremnik za prikupljanje dokumenata povezanih sa projektom i njegovim stavkama. Projekat kreiran iz narudžbine kupca ažurira se u skladu sa izmenama narudžbine, pri čemu se održava veza između svake stavke projekta i odgovarajuće stavke narudžbine.

**Automatska potvrda narudžbine:** ako je ova opcija uključena, prilikom unosa nove narudžbine datum potvrde automatski se postavlja na datum unosa narudžbine.

**Isključi zaključavanje:** odnosi se na blokadu zbog prekoračenja kreditnog limita, koja se konfiguriše u postupku Lock Manager u oblasti Trezor, u okviru postupaka za upravljanje korišćenjem kreditnih limita. Ako je ova opcija uključena, sistem za ovaj tip narudžbine neće uzeti u obzir blokadu dokumenta zbog prekoračenja kreditnog limita, već će korisniku omogućiti unos i štampanje dokumenta. Ako opcija nije uključena, tip narudžbine biće blokiran u slučaju prekoračenja kreditnog limita, a korisniku će biti onemogućeno štampanje dokumenta.

**Razduživanje (izvršenje) tipom otpremnice:** sadrži tip otpremnice koji će se generisati pokretanjem automatskog postupka razduživanja otpremnicama, dostupnog na traci sa alatkama u prozoru za pretraživanje narudžbina kupaca.

**Razduživanje (izvršenje) tipom fakture:** sadrži tip fakture koji će se generisati pokretanjem automatskog postupka razduživanja fakturama, dostupnog na traci sa alatkama u prozoru za pretraživanje narudžbina kupaca.

**Razduživanje (izvršenje) tipom Picking dokumenta:** sadrži tip Picking dokumenta koji će se generisati pokretanjem postupka kreiranja Picking dokumenta iz [isporuka](/docs/logistics/shipping/shippings).

**Blokiraj odštampani dokument:** ako je ova opcija uključena, nije dozvoljena izmena narudžbine kupca čija je opcija „Odštampano” uključena u zaglavlju.

**Kredit (limit):** ako je ova opcija uključena, narudžbine ovog tipa uzimaju se u obzir pri obračunu prekoračenja kreditnog limita.

**Novčani tok:** ako je ova opcija uključena, ovaj tip narudžbine uzima se u obzir pri obračunu [novčanog toka](/docs/treasury/cash-flow/cash-flow/search-cash-flow).

**Skladište/Opis skladišta:** u ova polja unosi se [skladište](/docs/configurations/tables/logistics/warehouses) u kojem će se rezervisati artikli sadržani u narudžbinama ovog tipa. Ovde navedeno skladište automatski se prenosi u sve redove artikala unete u narudžbinu ovog tipa.

**Šablon skladišnog kretanja/Opis šablona skladišnog kretanja:** u ova polja unosi se *šablon skladišnog kretanja* za rezervisane artikle sadržane u narudžbinama ovog tipa. Ovde navedeni šablon automatski se prenosi u sve redove artikala unete u narudžbinu ovog tipa.

**Nezbirna količina artikla narudžbine:** ako je ova opcija uključena, prilikom razduživanja istog reda narudžbine u različitim trenucima, unutar istog dokumenta razduživanja (otpremnica, faktura itd.), pojedinačni redovi artikala prenose se u dokument razduživanja bez sabiranja količina. Primer: ako narudžbina sadrži red sa 10 komada, a prvo razduživanje otpremnicom obuhvata 2 komada, nakon čega se u drugom razduživanju istog reda prenose još 2 komada, u otpremnici će biti prikazana dva reda artikala sa količinom od po 2 komada. Ako ova opcija nije uključena, drugo razduživanje povećalo bi količinu u postojećem redu otpremnice na 4 komada.

**Kontroliši raspoloživost:** ako je ova opcija uključena, narudžbine ovog tipa uzimaju se u obzir pri [obračunu raspoloživosti](/docs/erp-home/registers/items/calculate-availability).

**Poljoprivredni PDV (prodajnog ugovora):** ako je ova opcija uključena, prilikom kreiranja narudžbine sistem proverava da li za odabrani artikal postoji šifra poljoprivrednog PDV-a. Ako ne postoji, koristi se šifra PDV-a iz [šifarnika artikala](/docs/erp-home/registers/items/create-new-item).

**Cena sa PDV-om:** upravljanje cenama sa uključenim PDV-om aktivira se ovim parametrom, koji je dostupan u svim dokumentima prodajne oblasti, počevši od prodajnih cenovnika. Prilikom preuzimanja cena u dokumentu za koji je uključena opcija Cena sa PDV-om, sistem pretražuje cenovnike u kojima je takođe uključena ista opcija, a popusti se obračunavaju polazeći od cene sa PDV-om. Na osnovu cene sa PDV-om obračunava se cena bez PDV-a, primenom stope PDV-a iz šifarnika kupca ili šifarnika artikala.

U dokumentima su vidljive kolone Cena i Cena sa PDV-om.

**Važno!** Ako ne postoji važeći cenovnik sa uključenom opcijom Cena sa PDV-om, a u šifarniku artikala postoji prodajna cena, ta prodajna cena biće predložena kao cena sa PDV-om.

**Važno!** Narudžbinu sa uključenom opcijom Cena sa PDV-om moguće je razdužiti otpremnicom čiji tip nema uključenu tu opciju. Ukupni iznosi redova obračunavaju se različito u dokumentima sa uključenom i isključenom opcijom Cena sa PDV-om.

**Važno!** Narudžbinu sa uključenom opcijom Cena sa PDV-om moguće je duplicirati u narudžbinu čiji tip nema uključenu tu opciju. Ukupni iznosi redova obračunavaju se različito u dokumentima sa uključenom i isključenom opcijom Cena sa PDV-om.

Za razumevanje načina preuzimanja cena i upravljanja cenama sa PDV-om i bez PDV-a pogledajte članak *Preuzimanje cena i popusta u prodajnim dokumentima*.

**Tip radnog naloga za proizvodnju:** u ovo polje moguće je uneti tip naloga za proizvodnju koji će se generisati iz ovog tipa narudžbine u okviru postupka *Definicija MPS-a*, prilikom generisanja naloga za proizvodnju iz narudžbina kupaca. Ako je uključena i sledeća opcija *Generisanje naloga za proizvodnju*, nalog za proizvodnju generisaće se automatski prilikom potvrde narudžbine.

**Tip narudžbine dobavljača/Opis tipa narudžbine dobavljača:** unosi se šifra tipa narudžbine dobavljača koja će se generisati ako se odabere kreiranje narudžbine dobavljača na osnovu narudžbine kupca putem odgovarajućeg postupka.

**Kontrola kupca:** ako je ova opcija uključena, prilikom unosa kupca u narudžbinu sistem proverava šifarnike kako bi utvrdio da li uneta šifra obavezno odgovara šifri iz šifarnika kupaca. Ako to nije slučaj, sistem će upozoriti korisnika. Ako ova opcija nije uključena, moguće je kreirati narudžbine i za tipove konta Dobavljač.

**Upravljanje matricama ExtraData:** ako je ova opcija uključena, pri upravljanju artiklima sa matricom prikazuje se dodatna kartica za unos količina u pojedinačne ćelije matrice. Ako opcija nije uključena, ova kartica i pripadajuća matrica neće se prikazivati. Za više informacija o upravljanju matricama pogledajte članak *Upravljanje matricama ExtraData*.

**Konfigurisanje:** u ovo polje unosi se šifra za automatsko podešavanje dodatnih podataka (ExtraData) u zaglavlju narudžbine kupca.

**Izveštaji:** u ovo polje moguće je postaviti podrazumevani ispis koji će se koristiti za ovaj tip dokumenta. Napominjemo da je prilikom štampanja dokumenta potrebno odabrati izveštaj „Višestruki ispisi” kako bi se automatski upotrebio podrazumevani ispis.

**Broj kopija:** u ovo polje unosi se broj kopija dokumenta za štampanje.

**Generisanje naloga za proizvodnju:** ako je ova opcija uključena, nalog za proizvodnju tipa navedenog u koloni *Tip naloga za proizvodnju* automatski će se kreirati nakon potvrde narudžbine.

:::note
Kada se doda novi red u narudžbinu kupca za koju se nalozi za proizvodnju generišu automatski, novi red u nalogu za proizvodnju dobija status *Nije pregledano*.
:::

**Osnovna sredstva:** ako je ova opcija uključena, na kartici Artikli u narudžbini aktivira se kartica Osnovna sredstva, koja omogućava povezivanje narudžbine sa prodajom osnovnog sredstva.

**Tip operacije:** uvek je povezan sa upravljanjem osnovnim sredstvima. Ako je unet, automatski se predlaže u vidžetu Tip operacije, koji se nalazi na kartici Osnovna sredstva unutar kartice Artikli narudžbine.

**Tip popusta/Opis:** u ovoj koloni moguće je povezati tip popusta koji će biti predložen prilikom direktnog unosa popusta u kolonu *Popusti artikla* u tabeli artikala dokumenta. Za više detalja pogledajte članak [Upravljanje pojednostavljenim vidžetom za popuste](/docs/sales/sales-flow/discount-widget).

**Upravljanje WEEE-om:** ova opcija omogućava upravljanje [WEEE-om](/docs/sales/sales-flow/raee) za ovaj tip dokumenta.