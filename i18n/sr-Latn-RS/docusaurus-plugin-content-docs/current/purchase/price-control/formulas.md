---
title: Formule za ažuriranje politika cena/popusta
sidebar_position: 2
---

U ovom obrascu moguće je definisati pravila povezivanja između dokumenata nabavke i prodaje kako bi se cene artikala u cenovnicima automatski ažurirale kada dobavljač dostavi novi katalog.

U prvoj tabeli prikazane su **Šifra** i **Opis** formula.

U drugoj tabeli potrebno je definisati izvorne dokumente, odredišne dokumente i formule. Za svaki red moguće je primeniti do pet operacija. U obzir se uzimaju samo kolone koje sadrže vrednosti, dok će prazne kolone biti zanemarene i neće se koristiti kao izvor podataka za ažuriranje. Korisnik zato treba da popuni samo kolone koje su mu potrebne za definisanje izvora, odredišta, operanda i vrednosti operanda.

Objašnjenje kolona druge tabele:

- **Vrsta odredišta prodajnog cenovnika**: sadrži vrstu prodajnog cenovnika na koju će biti primenjena formula definisana u ovom redu.
- **Opis odredišta prodajnog cenovnika**: sadrži šifarnik kupca kojem će biti dodeljen prilagođeni cenovnik koji će biti ažuriran.
- **Vrsta odredišta cenovnika dobavljača**: sadrži vrstu dobavljačkog cenovnika koji će biti ažuriran.
- **Opis odredišta cenovnika dobavljača**: sadrži šifarnik dobavljača kojem će biti dodeljen cenovnik koji će biti ažuriran.
- **Vrsta prodajnog cenovnika**: sadrži vrstu izvornog prodajnog cenovnika na koji će biti primenjen izabrani **Operand**.
- **Opis izvora kupca**: sadrži prilagođeni cenovnik koji će se koristiti kao izvor.
- **Vrsta cenovnika dobavljača**: sadrži vrstu izvornog dobavljačkog cenovnika.
- **Opis dobavljača**: sadrži prilagođeni dobavljački cenovnik koji će se koristiti kao izvor.
- **Izvorni trošak skladišta**: ovo polje popunjava se ako se kao izvor želi koristiti **prosečni**, **poslednji** ili **standardni trošak** artikla.
- **Operand N**: na dokument izabran kao **Izvor** biće primenjena operacija izabrana u ovom padajućem meniju (**+**, **-**, **\***, **/** ili **%**).
- **Vrednost N**: omogućava unos ručne vrednosti koja će biti primenjena prema izabranom operandu.
- **Vrednost svojstva N**: omogućava izbor polja na koje će biti primenjen izabrani operand. Ovo polje isključuje prethodno jer se operacija (sabiranje, oduzimanje, deljenje itd.) može izvršiti ili sa ručno unetom vrednošću ili sa vrednošću drugog polja. Dvostrukim klikom otvara se **Navigator objekata**, u kojem je moguće izabrati svojstvo koje će se koristiti kao vrednost operacije. Prve dve stavke u Navigatoru objekata su oznake **AddedValue** i **AddedPercentage**, koje služe za preuzimanje tih vrednosti iz dobavljačkog cenovnika.
- **Prenošenje popusta**: ako je ova oznaka uključena, u odredišni dokument prenose se popusti iz izabranog cenovnika. Prilikom kreiranja novog prodajnog cenovnika postupkom **Napredno kreiranje cenovnika** primeniće se i popusti definisani u **Definiciji politika popusta** izvornog dokumenta.
- **Prenošenje popusta od preferiranog dobavljača**: ako je ova oznaka uključena, preuzima se popust iz cenovnika podrazumevanog preferiranog dobavljača.