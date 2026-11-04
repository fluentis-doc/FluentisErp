---
title: Tipovi izlaznih faktura
sidebar_position: 20
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako nameravate da je konfigurišete ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Tabela se otvara putem putanje **Tablice > Prodaja > Tipovi izlaznih faktura** i koristi se za određivanje svojstava fakture.

Omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli.

Za unos novih zapisa potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

**Tip/Opis**: tip fakture i opis tipa fakture. Uneta šifra mora biti jedinstvena.

**Numeracija:** u ovo polje potrebno je uneti odgovarajuću šifru numeracije. Za više informacija pogledajte članak o [Fluentis numeracijama](/docs/configurations/tables/fluentis-numerations).

**Tip fakture**: u ovo polje potrebno je uneti prirodu povezanu sa tipom fakture. Vrednost se bira sa liste, na primer faktura, knjižno odobrenje itd.

**Narudžbina**: ako je ova oznaka aktivirana, fakturu je moguće izraditi razduživanjem narudžbine putem odgovarajućeg postupka. U suprotnom će dugme „Razduživanje narudžbina” biti onemogućeno.

**Direktna**: ako je ova oznaka aktivirana, faktura je direktnog tipa i u njoj je potrebno popuniti i podatke o prevozu. Ako nije aktivirana, faktura je odloženog tipa, a podaci o prevozu preuzimaju se iz otpremnice.

**Tip Intrastat transakcije**: u ovo polje potrebno je uneti šifru transakcije koja se koristi za Intrastat izveštavanje. Za više informacija pogledajte [Tipovi Intrastat transakcija](/docs/configurations/tables/finance/nature-of-intrastat-transaction).

**U statistici**: ako je ova oznaka aktivirana, fakture ovog tipa uključuju se u statistiku i biće vidljive u izveštajima *Fakturisani promet*.

**Ponuda**: ako je ova oznaka aktivirana, faktura je predračun i ne može se knjižiti.

**Šablon**: u ovo polje potrebno je uneti računovodstveni šablon koji se koristi za knjiženje fakture. Za više informacija pogledajte [Računovodstvene šablone glavne knjige](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates).

**Tip dokumenta**: u ovo polje potrebno je uneti analitički šablon koji se koristi za knjiženje fakture u analitičkom računovodstvu.

**Napomene**: slobodno tekstualno polje u koje je moguće uneti napomene o tipu fakture.

**Kontrola kupca**: ako je ova oznaka aktivirana, sistem proverava tip šifarnika konta/analitičkog konta unetog u dokument kako bi utvrdio da li je obavezno reč o kupcu. Ako to nije slučaj, sistem će korisniku prikazati poruku o grešci. Obavezno je aktivirati ovu opciju za sve tipove prodajnih faktura.

**Blokiraj odštampani dokument**: ako je ova oznaka aktivirana, nije moguće menjati fakturu čije je zaglavlje već označeno kao *Odštampano*.

**Unutar Zajednice**: ako je ova oznaka aktivirana, sistem proverava da li država kupca pripada državama članicama EU. Ova oznaka aktivira se **samo za tipove faktura unutar Zajednice**. Ako kupac nije povezan sa tipom fakture unutar Zajednice, sistem će prikazati poruku upozorenja.

**Razduživanje (izvršenje) predračuna**: ako je ova oznaka aktivirana i faktura je predračun, razduživanjem će se razdužiti i narudžbina. U suprotnom će narudžbina ostati nerazdužena.

**Razlog (šablon) prevoza**: slobodno tekstualno polje u koje je moguće uneti razlog prevoza koji će se štampati na fakturi.

**Kredit (limit)**: ako je ova oznaka aktivirana, fakture ovog tipa biće uključene u kontrolu kreditnog limita.

**Isključi zaključavanje:** odnosi se na blokadu zbog prekoračenja kreditnog limita i podešava se u modulu Lock Manager, koji se nalazi u oblasti Trezor, među postupcima za upravljanje kreditnim limitima. Ako je ova oznaka aktivirana, sistem neće blokirati dokument ovog tipa zbog prekoračenja kreditnog limita, već će korisniku omogućiti unos i štampanje dokumenta. Ako nije aktivirana, tip fakture biće blokiran u slučaju prekoračenja kreditnog limita, a korisniku će biti onemogućeno štampanje dokumenta.

**Skladište/Opis skladišta**: u ova polja potrebno je uneti [skladište](/docs/configurations/tables/logistics/warehouses) u kojem se rezervišu artikli sadržani u fakturama određenog tipa. Ovde navedeno skladište prenosi se u sve redove artikala unete u fakturu ovog tipa.

**Šablon/Opis skladišnog šablona**: u ova polja potrebno je uneti [šablon za evidentiranje skladišnih kretanja](/docs/configurations/tables/logistics/warehouse-templates) artikala koji se rezervišu u fakturama određenog tipa. Ovde navedeni šablon prenosi se u sve redove artikala unete u narudžbinu ovog tipa.

**Grupisanje (otvorenih) stavki**: ako je ova oznaka aktivirana, prilikom knjiženja fakture otvorene stavke se grupišu. Za više informacija pogledajte [Grupisanje otvorenih stavki](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping).

**Poljoprivredni PDV za prodaju (prodajnog ugovora)**: ako je ova oznaka aktivirana, prilikom izrade otpremnice sistem će proveriti da li za korišćeni artikal postoji šifra poljoprivrednog PDV-a. Ako ne postoji, upotrebiće se šifra PDV-a iz šifarnika artikala.

**Proveri istovareni Picking**: ako je ova oznaka aktivirana, prilikom izrade fakture iz razduženog Picking dokumenta automatski će se aktivirati oznaka razduživanja na otpremnici. Ako nije aktivirana, oznaka se neće automatski postaviti.

**Blokiraj količinu Pickinga**: ako je ova oznaka aktivirana, blokiraju se količina i alternativna količina u fakturi izrađenoj iz UDC liste. Ako nije aktivirana, količine ostaju slobodne za unos. Preporučuje se da ova opcija uvek bude aktivirana ako se koristi upravljanje Pickingom i UDC jedinicama.

**Obračunaj provizije**: ako je ova oznaka aktivirana, fakture ovog tipa uključuju se u obračun provizija agenata.

**Odvoji otpremnicu**: ako je ova oznaka aktivirana i reč je o direktnoj fakturi, omogućava se izlaz robe i iz otpremnice i iz fakture kojom se ona vrednuje. Ova opcija se obično koristi kada je robu potrebno premestiti pre konačnog izlaza iz dokumenta. U takvim slučajevima u otpremnici se navodi šablon izlaza sa protivstavkom ulaza (za premeštanje robe u drugo skladište), a zatim se faktura koristi za konačni izlaz robe iz drugog skladišta.

**Ne razdužuje (ne izvršava) Picking**: ako je ova oznaka aktivirana, prilikom izrade fakture neće se razdužiti Picking.

**Cena sa PDV-om**: upravljanje cenama sa uključenim PDV-om aktivira se ovim parametrom, koji je dostupan u svim dokumentima prodajne oblasti, počevši od prodajnih cenovnika. Prilikom preuzimanja cena u dokument sa aktiviranom opcijom *Cena sa PDV-om*, sistem pretražuje cenovnike u kojima je takođe aktivirana ista opcija i popuste obračunava polazeći od cene sa PDV-om. Na osnovu cene sa PDV-om i stope PDV-a iz šifarnika kupaca ili artikala obračunava se cena bez PDV-a.

U dokumentima su vidljive kolone *Cena* i *Cena sa PDV-om*.

**Pažnja!** Ako ne postoji važeći cenovnik sa aktiviranom opcijom *Cena sa PDV-om*, a u šifarniku artikala postoji prodajna cena, ona će biti predložena kao cena sa PDV-om.

Za razumevanje načina preuzimanja cena i upravljanja cenama sa PDV-om i bez PDV-a pogledajte članak *Preuzimanje cena i popusta u prodajnim dokumentima*.

**Ekonomski obračun (period)**: ako je ova oznaka aktivirana, za tip fakture primenjuje se obračunski period, pa je potrebno podesiti datume početka i završetka perioda.

**Šablon (ekonomskog) obračunskog perioda**: u ovo polje potrebno je uneti šablon obračunskog perioda koji se koristi prilikom knjiženja fakture. Vrednost je moguće odabrati sa liste. Za više informacija pogledajte [Računovodstvene šablone glavne knjige](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates).

**Upravljanje matricama dodatnih podataka**: ako je ova oznaka aktivirana, pri upravljanju artiklima sa matricom prikazuje se dodatna kartica za unos vrednosti količine za svaku pojedinačnu ćeliju matrice. Ako nije aktivirana, ova kartica i pripadajuća matrica neće se prikazivati.

**Izveštaji**: u ovo polje moguće je postaviti podrazumevani ispis koji će se koristiti za ovaj tip dokumenta. Napominjemo da je prilikom štampanja dokumenta potrebno odabrati izveštaj *Višestruki ispisi* kako bi se automatski upotrebio podrazumevani ispis.

**Broj kopija**: u ovo polje postavlja se broj kopija dokumenta koje je potrebno odštampati.

**Upravljanje CONAI-jem (recikliranjem)**: ovo dugme omogućava upravljanje CONAI-jem (Consorzio Nazionale Imballaggi – Nacionalni konzorcijum za ambalažu) za ovaj tip fakture.

**Osnovna sredstva**: ova oznaka omogućava upravljanje osnovnim sredstvima u tipu fakture, a u sledećem polju potrebno je navesti tip operacije nad osnovnim sredstvima.

**Tip operacije**: u ovom padajućem meniju moguće je odabrati tip operacije nad osnovnim sredstvima između više ponuđenih opcija (revalorizacija, uništenje, kapitalni dobitak itd.).

**Tip popusta/Opis**: u ovoj koloni moguće je povezati tip popusta koji će biti predložen kada se popusti unose direktno u kolonu *Popusti artikla* u tabeli artikala dokumenta (za više informacija pogledajte članak [Pojednostavljeno upravljanje vidžetom za popuste](/docs/sales/sales-flow/discount-widget)).

**Upravljanje WEEE-om (RAEE)**: ova oznaka omogućava [upravljanje WEEE-om (RAEE)](/docs/sales/sales-flow/raee).