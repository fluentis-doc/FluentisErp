---
title: Formule ažuriranja politika cijena/popusta
sidebar_position: 2
---

U ovom je obrascu moguće definirati pravila povezivanja između dokumenata nabave i prodaje kako bi se cijene artikala u cjenicima automatski ažurirale kada dobavljač dostavi novi katalog.

U prvoj tablici prikazani su **Šifra** i **Opis** formula.

U drugoj tablici potrebno je definirati izvorne dokumente, odredišne dokumente i formule. Za svaki redak moguće je primijeniti do pet operacija. U obzir se uzimaju samo stupci koji sadrže vrijednosti, dok će prazni stupci biti zanemareni i neće se koristiti kao izvor podataka za ažuriranje. Korisnik stoga treba popuniti samo stupce koji su mu potrebni za definiranje izvora, odredišta, operanda i vrijednosti operanda.

Objašnjenje stupaca druge tablice:

- **Vrsta odredišta prodajnog cjenika**: sadrži vrstu prodajnog cjenika na koju će se primijeniti formula definirana u ovom retku.
- **Opis odredišta prodajnog cjenika**: sadrži šifarnik kupca kojem će biti dodijeljen prilagođeni cjenik koji će se ažurirati.
- **Vrsta odredišta cjenika dobavljača**: sadrži vrstu dobavljačkog cjenika koji će biti ažuriran.
- **Opis odredišta cjenika dobavljača**: sadrži šifarnik dobavljača kojem će biti dodijeljen cjenik koji će se ažurirati.
- **Vrsta prodajnog cjenika**: sadrži vrstu izvornog prodajnog cjenika na koji će se primijeniti odabrani **Operand**.
- **Opis izvora kupca**: sadrži prilagođeni cjenik koji će se koristiti kao izvor.
- **Vrsta cjenika dobavljača**: sadrži vrstu izvornog dobavljačkog cjenika.
- **Opis dobavljača**: sadrži prilagođeni dobavljački cjenik koji će se koristiti kao izvor.
- **Izvorni trošak skladišta**: ovo polje popunjava se ako se kao izvor želi koristiti **prosječni**, **posljednji** ili **standardni trošak** artikla.
- **Operand N**: na dokument odabran kao **Izvor** primijenit će se operacija odabrana u ovom padajućem izborniku (**+**, **-**, **\***, **/** ili **%**).
- **Vrijednost N**: omogućuje unos ručne vrijednosti koja će se primijeniti prema odabranom operandu.
- **Vrijednost svojstva N**: omogućuje odabir polja na koje će se primijeniti odabrani operand. Ovo polje isključuje prethodno jer se operacija (zbrajanje, oduzimanje, dijeljenje itd.) može izvršiti ili s ručno unesenom vrijednošću ili s vrijednošću drugog polja. Dvostrukim klikom otvara se **Navigator objekata**, u kojem je moguće odabrati svojstvo koje će se koristiti kao vrijednost operacije. Prve dvije stavke u Navigatoru objekata su oznake **AddedValue** i **AddedPercentage**, koje služe za preuzimanje tih vrijednosti iz dobavljačkog cjenika.
- **Prenošenje popust**: ako je ova oznaka uključena, u odredišni dokument prenose se popusti iz odabranog cjenika. Prilikom kreiranja novog prodajnog cjenika postupkom **Napredno kreiranje cjenika** primijenit će se i popusti definirani u **Definiciji politika popusta** izvornog dokumenta.
- **Prenošenje popusta od preferiranog dobavljača**: ako je ova oznaka uključena, preuzima se popust iz cjenika zadanog preferiranog dobavljača.