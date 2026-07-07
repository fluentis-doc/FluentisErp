Predstavlja sažetak dospijeća dokumenta za svaku *vrstu* i *način* plaćanja.  

- **Broj**: redni broj retka.  
- **Plaćanje**: predstavlja alfanumeričku oznaku *Vrste plaćanja* preuzetu iz *Zaglavlja dokumenta > kartica Plaćanja*.  
- **Iznos**: izračunani iznos dospijeća. Može se ručno promijeniti, pri čemu se automatski aktivira sljedeća oznaka *Ručna izmjena*. (Automatski se izvršavaju kontrole i prikazuju upozorenja o usklađenosti iznosa dospijeća s ukupnim iznosom računa.)
- **Datum dospijeća**: izračunani datum dospijeća. Može se ručno promijeniti, pri čemu se automatski aktivira sljedeća oznaka *Ručna izmjena*.
- **Troškovi naplate**: polje u kojem se prikazuju izračunani troškovi naplate.
- **PDV**: PDV koji se primjenjuje na troškove naplate (može se postaviti i ručno).
- **Predložak plaćanja**: omogućuje izravan unos predloška u račun, čime se automatski generira knjiženje naplate/plaćanja. Napomena: potrebno je obratiti pozornost na taj predložak jer će se koristiti unesena konta čak i bez podkonta, zbog čega je dostupno sljedeće polje.
- **Konto/podkonto kupca/dobavljača**: konto koji se koristi za naplatu/plaćanje dospijeća (primjerice blagajna ili banka), pri čemu se njime briše konto postavljen u predlošku plaćanja (ili naplate).
- **Br. potvrde**: eventualni broj potvrde za primljeni novac.
- **Pojedinačno**: aktivira knjiženje zatvaranja dospijeća u automatski generiranom knjiženju.
- **Vrsta popusta**: vrsta financijskog popusta.
- **Vrijednost popusta**: vrijednost financijskog popusta pri naplati.
- **Detalj izjava**: predstavlja referencu na izjavu o namjeri. Na troškove naplate uvijek se može primjenjivati PDV u okviru poreznog plafona, stoga je i ovdje potrebno omogućiti unos povezane izjave o namjeri (kao i za retke artikala i retke troškova).

**ULAZNI RAČUNI:**

- **Predznak**: samo dospijeća koja imaju aktiviranu ovu oznaku naknadno se obrađuju pri plaćanju pomoću postavljenog predloška i konta.
- **Modeli reference plaćanja**: model za generiranje oznake plaćanja. U nekim inozemnim lokalizacijama svako dospijeće na računu ima oznaku koju dodjeljuje izdavatelj računa. Ta je oznaka strukturirana prema određenim modelima (tablica `MB_PaymentReferenceModels`) kako bi se mogla generirati primjenom algoritma.
- **Oznake modela plaćanja**: oznaka strukturirana prema prethodno odabranom modelu, koja se prenosi u dospijeće, a zatim i u naloge za plaćanje koji se šalju banci. Na taj način banka primatelju plaćanja može prenijeti informaciju o tome koje je dospijeće plaćeno, čime se omogućuje automatizirani uvoz bankovnih transakcija i zatvaranje dospijeća. Ova se oznaka prenosi u dospijeće i u SEPA datoteku.
- **Krajnji datum za prijevremeno plaćanje**: polje predviđeno u formatu SdI računa koje određuje krajnji datum do kojeg se može primijeniti financijski popust.