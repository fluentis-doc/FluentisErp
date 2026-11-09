---
title: Upravljanje WEEE/RAEE doprinosom
sidebar_position: 10
---

**Funkcionalni kontekst**

RAEE doprinos (Waste Electrical and Electronic Equipment – otpadna električna i elektronička oprema) predstavlja obveznu naknadu koju plaćaju proizvođači i uvoznici električne i elektroničke opreme. Tim se doprinosom financiraju aktivnosti prikupljanja, obrade i oporabe otpada nastalog od tih proizvoda.

S upravljačkog gledišta, doprinos se može primjenjivati na dva načina. U prvom načinu, koji se naziva „vidljivim”, doprinos se iskazuje po komadu i može biti zasebno prikazan u prodajnim dokumentima, tako da je vidljiv i krajnjem kupcu. U drugom načinu, koji se naziva „internaliziranim”, doprinos se iskazuje po kilogramu i izravno je uključen u cijenu proizvoda, bez zasebnog prikazivanja u komercijalnim dokumentima.

U oba slučaja doprinos podliježe PDV-u i na njega se ne mogu primjenjivati popusti. Njegovu vrijednost svake godine određuju nadležni konzorciji i dostavljaju je nadležnim tijelima.

**Cilj**

Cilj proširenja jest uvesti strukturirano upravljanje RAEE doprinosom unutar poslovnog sustava Fluentis, omogućujući identifikaciju poduzeća na koja se odnosi ova regulativa, klasifikaciju pripadajućih artikala te određivanje kada i na koji se način doprinos mora primijeniti u dokumentima.

Sustav također mora osigurati sljedivost izračuna na razini retka dokumenta i ispravan prikaz vrijednosti u ukupnim iznosima, u skladu s propisanim poreznim i komercijalnim pravilima.

**Aktivacija upravljanja RAEE doprinosom u Fluentisu**

Za podršku upravljanju doprinosom potrebno je dodati određene informacije u postojeće šifarnike.

Na razini [poduzeća](/docs/configurations/tables/general-settings/company) dodaje se oznaka koja određuje je li poduzeće proizvođač ili uvoznik električne i elektroničke opreme. Ovo polje općenito omogućuje upravljanje RAEE doprinosom unutar sustava i aktivaciju namjenskih funkcionalnosti u dokumentima. Oznaka se nalazi na putanji **Poduzeće > Ostale postavke > Upravljanje RAEE doprinosom > Proizvođač ili uvoznik električne i elektroničke opreme**.

Za artikle se dodaje referenca na kategoriju RAEE proizvoda. Ova klasifikacija određuje podliježe li artikl doprinosu i omogućuje dohvat pripadajuće vrijednosti za izračun. [Kategoriju RAEE](/docs/configurations/tables/general-settings/raee-category) moguće je unijeti u **[Šifarniku artikala](/docs/erp-home/registers/items/create-new-item) > Težine/Dimenzije > Upravljanje RAEE doprinosom**.

Naposljetku, za određivanje treba li se doprinos primjenjivati u dokumentima kupca/dobavljača dostupna je odgovarajuća oznaka na putanji **[Šifarnik](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) > Porezne informacije > Upravljanje RAEE doprinosom**.

Odjeljak za upravljanje RAEE doprinosom prikazuje se isključivo u **vrstama dokumenata** za koje je aktivirana oznaka **Upravljanje RAEE doprinosom**.

**Logika upravljanja u dokumentima**

Kada su zadovoljeni potrebni uvjeti, sustav omogućuje poseban odjeljak u stavkama dokumenata, namijenjen izračunu RAEE doprinosa za svaki artikl. U tom se odjeljku prikazuju kategorija RAEE povezana s artiklom, eventualni referentni artikl za prikaz doprinosa te pripadajuća jedinična vrijednost pomnožena s količinom artikla.

Izračun se provodi na razini retka dokumenta, koristeći kategoriju artikla i vrijednost važeću za odgovarajuće obračunsko razdoblje. Rezultat se pohranjuje u zasebnu strukturu kako bi se osigurala povijesna evidencija podatka, čak i u slučaju naknadnih promjena klasifikacije artikla.

Za svaki redak dokumenta spremaju se detalji izračunatog RAEE doprinosa zajedno s primijenjenom stopom PDV-a, koja odgovara stopi PDV-a retka artikla. Time se omogućuje ispravno upravljanje dokumentima s različitim stopama PDV-a uz očuvanje porezne usklađenosti između retka artikla i pripadajućeg doprinosa.

Ukupni iznos doprinosa zatim se zbraja na razini dokumenta i zasebno prikazuje u ukupnim iznosima, u posebnom odjeljku. Osim toga, doprinos će se prikazivati kao redak troška u odjeljku **Završni troškovi/Popusti/Dodaci** u sažecima.