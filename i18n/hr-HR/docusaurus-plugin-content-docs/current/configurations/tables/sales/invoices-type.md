---
title: Tipovi izlaznih računa
sidebar_position: 20
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako je namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Tablica se otvara putem putanje **Tablice > Prodaja > Tipovi izlaznih računa** i upotrebljava se za određivanje svojstava računa.

Omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmjene ili brisanja.

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici.

Za unos novih zapisa potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.

**Tip/Opis**: vrsta računa i opis vrste računa. Unesena šifra mora biti jedinstvena.

**Numeracija:** u ovo polje potrebno je unijeti odgovarajuću šifru numeracije. Za više informacija pogledajte članak o [Fluentis numeracijama](/docs/configurations/tables/fluentis-numerations).

**Vrsta računa**: u ovo polje potrebno je unijeti prirodu povezanu s vrstom računa. Vrijednost se odabire s popisa, primjerice račun, odobrenje itd.

**Narudžba**: ako je ova oznaka aktivirana, račun je moguće izraditi razduživanjem narudžbe putem odgovarajućeg postupka. U suprotnom će gumb „Razduživanje narudžbi” biti onemogućen.

**Direktan**: ako je ova oznaka aktivirana, račun je neposrednog tipa te je u njemu potrebno ispuniti i podatke o prijevozu. Ako nije aktivirana, račun je odgođenog tipa, a podaci o prijevozu preuzimaju se iz otpremnice.

**Vrsta transakcije Intrastat**: u ovo polje potrebno je unijeti šifru transakcije koja se upotrebljava za Intrastat izvještavanje. Za više informacija pogledajte [Vrsta Intrastat transakcija](/docs/configurations/tables/finance/nature-of-intrastat-transaction).

**U statistici**: ako je ova oznaka aktivirana, računi ove vrste uključuju se u statistiku i bit će vidljivi u ispisima *Fakturirani promet*.

**Ponuda**: ako je ova oznaka aktivirana, račun je predračun i ne može se knjižiti.

**Predložak**: u ovo polje potrebno je unijeti računovodstveni predložak koji se upotrebljava za knjiženje računa. Za više informacija pogledajte [Računovodstvene predloške glavne knjige](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates).

**Tip dokumenta**: u ovo polje potrebno je unijeti analitički predložak koji se upotrebljava za knjiženje računa u analitičkom računovodstvu.

**Napomene**: slobodno tekstualno polje u koje je moguće unijeti napomene o vrsti računa.

**Kontrola kupca**: ako je ova oznaka aktivirana, sustav provjerava vrstu šifarnika konta/analitičkog konta unesenog u dokument kako bi utvrdio radi li se obvezno o kupcu. Ako to nije slučaj, sustav će korisniku prikazati poruku o pogrešci. Obvezno je aktivirati ovu opciju za sve vrste prodajnih računa.

**Blokiraj ispisani dokument**: ako je ova oznaka aktivirana, nije moguće mijenjati račun čije je zaglavlje već označeno kao *Ispisano*.

**Unutar Zajednice**: ako je ova oznaka aktivirana, sustav provjerava pripada li država kupca državama članicama EU-a. Ova se oznaka aktivira **samo za vrste računa unutar Zajednice**. Ako kupac nije povezan s vrstom računa unutar Zajednice, sustav će prikazati poruku upozorenja.

**Razduživanje (izvršenje) predračuna**: ako je ova oznaka aktivirana i račun je predračun, razduživanjem će se razdužiti i narudžba. U suprotnom će narudžba ostati nerazdužena.

**Razlog (predložak) prijevoza**: slobodno tekstualno polje u koje je moguće unijeti razlog prijevoza koji će se ispisivati na računu.

**Kredit (limit)**: ako je ova oznaka aktivirana, računi ove vrste bit će uključeni u kontrolu kreditnog limita.

**Isključi zaključavanje:** odnosi se na blokadu zbog prekoračenja kreditnog limita i postavlja se u modulu Lock Manager, koji se nalazi u području Riznica, među postupcima za upravljanje kreditnim limitima. Ako je ova oznaka aktivirana, sustav neće blokirati dokument ove vrste zbog prekoračenja kreditnog limita, već će korisniku omogućiti unos i ispis dokumenta. Ako nije aktivirana, vrsta računa bit će blokirana u slučaju prekoračenja kreditnog limita, a korisniku će biti onemogućen ispis dokumenta.

**Skladište/Opis skladišta**: u ova polja potrebno je unijeti [skladište](/docs/configurations/tables/logistics/warehouses) u kojem se rezerviraju artikli sadržani u računima određene vrste. Ovdje navedeno skladište prenosi se u sve retke artikala unesene u račun ove vrste.

**Predložak/Opis skladišnog predloška**: u ova polja potrebno je unijeti [predložak za evidentiranje skladišnih kretanja](/docs/configurations/tables/logistics/warehouse-templates) artikala koji se rezerviraju u računima određene vrste. Ovdje navedeni predložak prenosi se u sve retke artikala unesene u narudžbu ove vrste.

**Grupiranje (otvorenih) stavaka**: ako je ova oznaka aktivirana, prilikom knjiženja računa otvorene stavke grupiraju se. Za više informacija pogledajte [Grupiranje otvorenih stavki](/docs/finance-area/maturity-values/maturity-values/maturity-value-grouping).

**Poljoprivredni PDV za prodaju (prodajnog ugovora)**: ako je ova oznaka aktivirana, prilikom izrade otpremnice sustav će provjeriti postoji li za korišteni artikl šifra poljoprivrednog PDV-a. Ako ne postoji, upotrijebit će se šifra PDV-a iz šifarnika artikala.

**Provjeri istovareni Picking**: ako je ova oznaka aktivirana, prilikom izrade računa iz razduženog Picking dokumenta automatski će se aktivirati oznaka razduženja na otpremnici. Ako nije aktivirana, oznaka se neće automatski postaviti.

**Blokiraj količinu Pickinga**: ako je ova oznaka aktivirana, blokiraju se količina i alternativna količina u računu izrađenom iz UDC liste. Ako nije aktivirana, količine ostaju slobodne za unos. Preporučuje se uvijek aktivirati ovu opciju ako se upotrebljava upravljanje Pickingom i UDC jedinicama.

**Izračunaj provizije**: ako je ova oznaka aktivirana, računi ove vrste uključuju se u izračun provizija agenata.

**Odvoji otpremnicu**: ako je ova oznaka aktivirana i riječ je o neposrednom računu, omogućuje se izlaz robe i iz otpremnice i iz računa kojim se ona vrednuje. Ova se opcija obično upotrebljava kada je robu potrebno premjestiti prije konačnog izlaza iz dokumenta. U takvim se slučajevima u otpremnici navodi predložak izlaza s protustavkom ulaza (za premještanje robe u drugo skladište), a zatim se račun upotrebljava za konačni izlaz robe iz drugog skladišta.

**Ne razdužuje (ne izvršava) Picking**: ako je ova oznaka aktivirana, prilikom izrade računa neće se razdužiti Picking.

**Cijena s PDV-om**: upravljanje cijenama s uključenim PDV-om aktivira se ovim parametrom, koji je dostupan u svim dokumentima prodajnog područja, počevši od prodajnih cjenika. Prilikom preuzimanja cijena u dokument s aktiviranom opcijom *Cijena s PDV-om*, sustav pretražuje cjenike u kojima je također aktivirana ista opcija te popuste izračunava polazeći od cijene s PDV-om. Na temelju cijene s PDV-om i stope PDV-a iz šifarnika kupaca ili artikala izračunava se cijena bez PDV-a.

U dokumentima su vidljivi stupci *Cijena* i *Cijena s PDV-om*.

**Pažnja!** Ako ne postoji važeći cjenik s aktiviranom opcijom *Cijena s PDV-om*, a u šifarniku artikala postoji prodajna cijena, ona će se predložiti kao cijena s PDV-om.

Za razumijevanje načina preuzimanja cijena te upravljanja cijenama s PDV-om i bez PDV-a pogledajte članak *Preuzimanje cijena i popusta u prodajnim dokumentima*.

**Ekonomnski obračun (razdoblje)**: ako je ova oznaka aktivirana, za vrstu računa primjenjuje se obračunsko razdoblje pa je potrebno postaviti datume početka i završetka razdoblja.

**Predložak (ekonomskog) obračunskog razdoblja**: u ovo polje potrebno je unijeti predložak obračunskog razdoblja koji se upotrebljava prilikom knjiženja računa. Vrijednost je moguće odabrati s popisa. Za više informacija pogledajte [Računovodstvene predloške glavne knjige](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates).

**Upravljanje matricama dodatnih podataka**: ako je ova oznaka aktivirana, kod upravljanja artiklima s matricom prikazuje se dodatna kartica za unos vrijednosti količine za svaku pojedinu ćeliju matrice. Ako nije aktivirana, ova kartica i pripadajuća matrica neće se prikazivati.

**Izvještaji**: u ovo polje moguće je postaviti zadani ispis koji će se upotrebljavati za ovu vrstu dokumenta. Napominjemo da je prilikom ispisa dokumenta potrebno odabrati izvještaj *Višestruki ispisi* kako bi se automatski upotrijebio zadani ispis.

**Broj kopija**: u ovo polje postavlja se broj kopija dokumenta koje je potrebno ispisati.

**Upravljanje CONAI-jem (recikliranjem)**: ovaj gumb omogućuje upravljanje CONAI-jem (Consorzio Nazionale Imballaggi – Nacionalni konzorcij za ambalažu) za ovu vrstu računa.

**Osnovna sredstva**: ova oznaka omogućuje upravljanje osnovnim sredstvima u vrsti računa, a u sljedećem polju potrebno je navesti vrstu operacije nad osnovnim sredstvima.

**Vrsta operacije**: u ovom padajućem popisu moguće je odabrati vrstu operacije nad osnovnim sredstvima između više ponuđenih opcija (revalorizacija, uništenje, kapitalni dobitak itd.).

**Vrsta popusta/Opis**: u ovom stupcu moguće je povezati vrstu popusta koja će se predlagati kada se popusti unose izravno u stupac *Popusti artikla* u tablici artikala dokumenta (za više informacija pogledajte članak [Pojednostavljeno upravljanje widgetom za popuste](/docs/sales/sales-flow/discount-widget)).

**Upravljanje WEEE-om (RAEE)**: ova oznaka omogućuje [upravljanje WEEE-om (RAEE)](/docs/sales/sales-flow/raee).