---
title: Upravljanje WEEE/RAEE doprinosom
sidebar_position: 10
---

**Funkcionalni kontekst**

RAEE doprinos (Waste Electrical and Electronic Equipment – otpadna električna i elektronska oprema) predstavlja obaveznu naknadu koju plaćaju proizvođači i uvoznici električne i elektronske opreme. Tim doprinosom finansiraju se aktivnosti prikupljanja, obrade i oporavka otpada nastalog od tih proizvoda.

Sa upravljačkog stanovišta, doprinos se može primenjivati na dva načina. U prvom načinu, koji se naziva „vidljivim”, doprinos se iskazuje po komadu i može biti zasebno prikazan u prodajnim dokumentima, tako da je vidljiv i krajnjem kupcu. U drugom načinu, koji se naziva „internalizovanim”, doprinos se iskazuje po kilogramu i direktno je uključen u cenu proizvoda, bez zasebnog prikazivanja u komercijalnim dokumentima.

U oba slučaja doprinos podleže PDV-u i na njega se ne mogu primenjivati popusti. Njegovu vrednost svake godine određuju nadležni konzorcijumi i dostavljaju je nadležnim organima.

**Cilj**

Cilj proširenja je uvođenje strukturiranog upravljanja RAEE doprinosom unutar poslovnog sistema Fluentis, čime se omogućava identifikacija preduzeća na koja se odnosi ova regulativa, klasifikacija pripadajućih artikala i određivanje kada i na koji način doprinos mora da se primeni u dokumentima.

Sistem takođe mora da obezbedi sledljivost izračunavanja na nivou reda dokumenta i ispravan prikaz vrednosti u ukupnim iznosima, u skladu sa propisanim poreskim i komercijalnim pravilima.

**Aktivacija upravljanja RAEE doprinosom u sistemu Fluentis**

Za podršku upravljanju doprinosom potrebno je dodati određene informacije u postojeće šifarnike.

Na nivou [preduzeća](/docs/configurations/tables/general-settings/company) dodaje se oznaka koja određuje da li je preduzeće proizvođač ili uvoznik električne i elektronske opreme. Ovo polje generalno omogućava upravljanje RAEE doprinosom unutar sistema i aktivaciju namenski razvijenih funkcionalnosti u dokumentima. Oznaka se nalazi na putanji **Preduzeće > Ostala podešavanja > Upravljanje RAEE doprinosom > Proizvođač ili uvoznik električne i elektronske opreme**.

Za artikle se dodaje referenca na kategoriju RAEE proizvoda. Ova klasifikacija određuje da li artikal podleže doprinosu i omogućava preuzimanje pripadajuće vrednosti za izračunavanje. [Kategoriju RAEE](/docs/configurations/tables/general-settings/raee-category) moguće je uneti u **[Šifarniku artikala](/docs/erp-home/registers/items/create-new-item) > Težine/Dimenzije > Upravljanje RAEE doprinosom**.

Na kraju, za određivanje da li se doprinos primenjuje u dokumentima kupca/dobavljača, dostupna je odgovarajuća oznaka na putanji **[Šifarnik](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) > Poreske informacije > Upravljanje RAEE doprinosom**.

Odeljak za upravljanje RAEE doprinosom prikazuje se isključivo u **tipovima dokumenata** za koje je aktivirana oznaka **Upravljanje RAEE doprinosom**.

**Logika upravljanja u dokumentima**

Kada su ispunjeni potrebni uslovi, sistem omogućava poseban odeljak u stavkama dokumenata, namenjen izračunavanju RAEE doprinosa za svaki artikal. U tom odeljku prikazuju se kategorija RAEE povezana sa artiklom, eventualni referentni artikal za prikaz doprinosa i pripadajuća jedinična vrednost pomnožena količinom artikla.

Izračunavanje se obavlja na nivou reda dokumenta, koristeći kategoriju artikla i vrednost koja važi za odgovarajući obračunski period. Rezultat se pohranjuje u zasebnu strukturu kako bi se obezbedila istorijska evidencija podatka, čak i u slučaju naknadnih promena klasifikacije artikla.

Za svaki red dokumenta čuvaju se detalji izračunatog RAEE doprinosa zajedno sa primenjenom stopom PDV-a, koja odgovara stopi PDV-a reda artikla. Time se omogućava ispravno upravljanje dokumentima sa različitim stopama PDV-a uz očuvanje poreske usklađenosti između reda artikla i pripadajućeg doprinosa.

Ukupan iznos doprinosa zatim se sabira na nivou dokumenta i zasebno prikazuje u ukupnim iznosima, u posebnom odeljku. Osim toga, doprinos će se prikazivati kao red troška u odeljku **Završni troškovi/Popusti/Dodaci** u sažecima.