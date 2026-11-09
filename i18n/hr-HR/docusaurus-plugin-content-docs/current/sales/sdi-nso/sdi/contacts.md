---
title: Postavljanje šifarnika kontakata
sidebar_position: 3
---

U šifarnicima kontakata kupaca potrebno je postaviti način upravljanja elektroničkim fakturiranjem kako bi se u Fluentisu ispravno evidentirala šifra primatelja ili PEC adresa kupaca kojima se šalje B2B račun ili, u slučaju evidentiranja tijela javne uprave, odgovarajuća šifra ureda.

## B2B fakturiranje

Za konfiguriranje kontakata potrebno je otvoriti *Početna > Šifarnik kontakata*, pronaći i otvoriti šifarnik kontakta za koji se želi postaviti upravljanje elektroničkim fakturiranjem te na ploči *Računovodstveni podaci > Porezne informacije* aktivirati opciju **Elektroničko fakturiranje** i popuniti pripadajuća polja:

- **Naziv tvrtke**: ovo polje mora ostati prazno.
- **Opis**: ovo polje mora ostati prazno.
- **Potpisani elektronički računi**: ova se opcija odnosi na mogućnost upravljanja potpisanim elektroničkim računima ZA ODABRANI KONTAKT. Preuzima se vrijednost postavljena na razini poduzeća izdavatelja u odjeljku Konfiguracija elektroničkog fakturiranja za poduzeće. Ta se vrijednost može promijeniti u odnosu na opću postavku, čime se stvara iznimka za subjekt koji se obrađuje. Ako je opcija aktivirana, prilikom izdavanja elektroničkog računa moguće je izvesti XML datoteku, potpisati je odgovarajućim vanjskim alatima i ponovno uvesti u Fluentis u potpisanom obliku, nakon čega se nastavlja postupak izdavanja. Ova je mogućnost neobvezna za račune izdane kupcima sa sjedištem na području Italije, dok je OBVEZNA za dokumente izdane subjektima koji nemaju prebivalište, nisu poslovno nastanjeni niti su identificirani u Italiji, a za koje se dokumenti namjeravaju slati putem sustava SdI.
- **Elektronički računi s priloženim PDF-om**: ova se opcija odnosi na mogućnost slanja datoteka elektroničkih računa s priloženim PDF-om računa. Preuzima se vrijednost postavljena na razini poduzeća izdavatelja u odjeljku Konfiguracija elektroničkog fakturiranja za poduzeće. Ta se vrijednost može promijeniti u odnosu na opću postavku, čime se stvara iznimka za subjekt koji se obrađuje. Ako je opcija aktivirana, prilikom izdavanja elektroničkog računa generirat će se XML datoteka kojoj će biti priložena odgovarajuća PDF datoteka.
- **ARM transformacija za izradu PDF-a računa**: u ovom se polju može navesti referenca na ARM transformaciju za izradu PDF datoteke računa, primjerice isti postupak koji se može pozvati za slanje računa kupcu e-poštom. Ako vrijednost nije navedena, a aktivirana je opcija „Elektronički računi s priloženim PDF-om”, za izradu PDF-a upotrebljava se transformacija navedena u odjeljku Konfiguracija elektroničkog fakturiranja za poduzeće.
- **Vrsta šifre**: ovo polje određuje kanal koji će se koristiti za slanje elektroničkih dokumenata. Njegovo popunjavanje zahtijeva i ispravno definiranje polja ŠIFRA PRIMATELJA i E-POŠTA kako bi se datoteka računa izradila s ispravnim adresiranjem. Ovisno o odabranoj vrijednosti ovog polja, tablica u odjeljku ELEKTRONIČKO FAKTURIRANJE mora se popuniti prema određenim pravilima. Moguće vrijednosti su:

    - **SdI kanal**: odabirom ove vrijednosti označava se namjera korištenja poznate šifre primatelja, adrese e-pošte ili prepuštanja sustavu SdI da odredi kanal koji je kupac registrirao. Konkretno, odabir ove vrijednosti u šifarniku zahtijeva popunjavanje polja ŠIFRA PRIMATELJA i E-POŠTA prema sljedećim pravilima:

        | Način slanja | Šifra primatelja | E-pošta | Opis primatelja | Datum početka | Datum završetka |
        | :-- | :-- | :-- | :-- | :-- | :-- |
        | Šifra primatelja koju je kupcu dodijelila Agencija za prihode (AdE) nakon registracije | Šifra primatelja kupca | Prazno | Naziv tvrtke kupca | Datum početka poslovnog odnosa | Datum isteka valjanosti korištenog kanala |
        | PEC e-pošta | 0000000 (7 nula) | PEC adresa e-pošte kupca | Naziv tvrtke kupca | Datum početka poslovnog odnosa | Datum isteka valjanosti korištenog kanala |
        | Nije poznata ni šifra primatelja ni PEC adresa ILI privatni kupac ILI kupac u povlaštenom ili paušalnom poreznom režimu | 0000000 (7 nula) | Prazno | Naziv tvrtke kupca | Datum početka poslovnog odnosa | Datum isteka valjanosti korištenog kanala |
        | Kupac nema prebivalište, nije poslovno nastanjen niti je identificiran u Italiji | XXXXXXX (7 slova „X”) | Prazno | Naziv tvrtke kupca | Datum početka poslovnog odnosa | Datum isteka valjanosti korištenog kanala |

    - **PEC primatelja**: odabirom ove vrijednosti označava se namjera korištenja PEC adrese e-pošte kao kanala slanja. Ova postavka zahtijeva popunjavanje polja ŠIFRA PRIMATELJA i E-POŠTA prema sljedećem pravilu:

        | Način slanja | Šifra primatelja | E-pošta | Opis primatelja | Datum početka | Datum završetka |
        | :-- | :-- | :-- | :-- | :-- | :-- |
        | PEC e-pošta | 0000000 (7 nula) | PEC adresa e-pošte kupca | Naziv tvrtke kupca | Datum početka poslovnog odnosa | Datum isteka valjanosti korištenog kanala |

    - **Subjekt koji nema prebivalište, nije poslovno nastanjen niti je identificiran u Italiji**: odabirom ove vrijednosti određuje se sustav SdI kao kanal putem kojeg se moraju slati računi, pri čemu se kao šifra primatelja navodi posebna oznaka „XXXXXXX”. Stoga se polja ŠIFRA PRIMATELJA i E-POŠTA moraju popuniti na sljedeći način:

        | Način slanja | Šifra primatelja | E-pošta | Opis primatelja | Datum početka | Datum završetka |
        | :-- | :-- | :-- | :-- | :-- | :-- |
        | Kupac nema prebivalište, nije poslovno nastanjen niti je identificiran u Italiji | XXXXXXX (7 slova „X”) | Prazno | Naziv tvrtke kupca | Datum početka poslovnog odnosa | Datum isteka valjanosti korištenog kanala |

## Fakturiranje tijela javne uprave

Prilikom evidentiranja tijela javne uprave u šifarniku potrebno je otvoriti *Početna > Šifarnik kontakata*, pronaći i otvoriti šifarnik kontakta za koji se želi postaviti upravljanje elektroničkim fakturiranjem te na ploči *Računovodstveni podaci > Porezne informacije* aktivirati oznaku **Tijelo javne uprave**. Nakon aktiviranja ove opcije potrebno je popuniti i tablicu **Tijelo javne uprave**.

Polja u tablici potrebno je popuniti na sljedeći način:

- **Šifra ureda**: šifra javnog ureda koji je primatelj računa.
- **Naziv ureda**: opis polja šifre ureda, koje je potrebno popuniti nazivom javnog ureda.
- **Naziv tvrtke**: u ovom je polju moguće povezati šifarnik koji je već definiran u Fluentisu i odnosi se, primjerice, na javni ured koji pripada glavnom šifarniku koji se upotrebljava (primjerice, ured za javne radove određene općine ili zdravstvena ustanova koja pripada glavnom šifarniku „Općina ...”).

Taj povezani šifarnik potrebno je postaviti kao odredište za glavni šifarnik na kartici „Dostava”. Na taj će se način odredište (primjerice, ured za javne radove) prenijeti u strukturu XML datoteke zajedno sa šifrom ureda i ostalim podacima, kao što je adresa.

Radi ispravnog upravljanja većim brojem šifri ureda (a time i većim brojem subjekata) povezanih s istim glavnim šifarnikom, preporučuje se upravljati i ovim poljem te ga popuniti. Polje nije obvezno niti je potrebno ako je uz predmetni šifarnik izravno povezana samo jedna šifra ureda.

- **Datum početka usluge**: određuje datum unosa retka ili datum od kojeg je aktivan poslovni odnos isporuke s predmetnim tijelom javne uprave.
- **Datum završetka usluge**: određuje datum završetka poslovnog odnosa isporuke s tijelom javne uprave te onemogućuje daljnju upotrebu te stavke za generiranje elektroničke datoteke računa.