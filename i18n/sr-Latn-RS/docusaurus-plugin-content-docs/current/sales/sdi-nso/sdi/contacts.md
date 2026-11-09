---
title: Podešavanje šifarnika kontakata
sidebar_position: 3
---

U šifarnicima kontakata kupaca potrebno je podesiti način upravljanja elektronskim fakturisanjem kako bi se u Fluentisu ispravno evidentirala šifra primaoca ili PEC adresa kupaca kojima se šalje B2B faktura ili, u slučaju evidentiranja organa javne uprave, odgovarajuća šifra kancelarije.

## B2B fakturisanje

Za konfigurisanje kontakata potrebno je otvoriti *Početna > Šifarnik kontakata*, pronaći i otvoriti šifarnik kontakta za koji se želi podesiti upravljanje elektronskim fakturisanjem, a zatim na panelu *Računovodstveni podaci > Poreske informacije* aktivirati opciju **Elektronsko fakturisanje** i popuniti odgovarajuća polja:

- **Naziv preduzeća**: ovo polje mora ostati prazno.
- **Opis**: ovo polje mora ostati prazno.
- **Potpisane elektronske fakture**: ova opcija odnosi se na mogućnost upravljanja potpisanim elektronskim fakturama ZA IZABRANI KONTAKT. Preuzima se vrednost podešena na nivou preduzeća izdavaoca u odeljku Konfiguracija elektronskog fakturisanja za preduzeće. Ova vrednost može se promeniti u odnosu na opšte podešavanje, čime se stvara izuzetak za subjekt koji se obrađuje. Ako je opcija aktivirana, prilikom izdavanja elektronske fakture moguće je izvesti XML datoteku, potpisati je odgovarajućim eksternim alatima i ponovo uvesti u Fluentis u potpisanom obliku, nakon čega se nastavlja postupak izdavanja. Ova mogućnost nije obavezna za fakture izdate kupcima sa sedištem na teritoriji Italije, dok je OBAVEZNA za dokumente izdate subjektima koji nemaju prebivalište, nisu poslovno nastanjeni niti su identifikovani u Italiji, a za koje se dokumenti nameravaju slati putem sistema SdI.
- **Elektronske fakture sa priloženim PDF-om**: ova opcija odnosi se na mogućnost slanja datoteka elektronskih faktura sa priloženim PDF-om fakture. Preuzima se vrednost podešena na nivou preduzeća izdavaoca u odeljku Konfiguracija elektronskog fakturisanja za preduzeće. Ova vrednost može se promeniti u odnosu na opšte podešavanje, čime se stvara izuzetak za subjekt koji se obrađuje. Ako je opcija aktivirana, prilikom izdavanja elektronske fakture generisaće se XML datoteka kojoj će biti priložena odgovarajuća PDF datoteka.
- **ARM transformacija za izradu PDF-a fakture**: u ovom polju može se navesti referenca na ARM transformaciju za izradu PDF datoteke fakture, na primer isti postupak koji se može pozvati za slanje fakture kupcu putem e-pošte. Ako vrednost nije navedena, a aktivirana je opcija „Elektronske fakture sa priloženim PDF-om”, za izradu PDF-a koristi se transformacija navedena u odeljku Konfiguracija elektronskog fakturisanja za preduzeće.
- **Tip šifre**: ovo polje određuje kanal koji će se koristiti za slanje elektronskih dokumenata. Njegovo popunjavanje zahteva i ispravno definisanje polja ŠIFRA PRIMAOCA i E-POŠTA kako bi se datoteka fakture generisala sa ispravnim adresiranjem. U zavisnosti od izabrane vrednosti ovog polja, tabela u odeljku ELEKTRONSKO FAKTURISANJE mora se popuniti prema određenim pravilima. Moguće vrednosti su:

    - **SdI kanal**: izborom ove vrednosti označava se namera korišćenja poznate šifre primaoca, adrese e-pošte ili prepuštanja sistemu SdI da odredi kanal koji je kupac registrovao. Konkretno, izbor ove vrednosti u šifarniku zahteva popunjavanje polja ŠIFRA PRIMAOCA i E-POŠTA prema sledećim pravilima:

        | Način slanja | Šifra primaoca | E-pošta | Opis primaoca | Datum početka | Datum završetka |
        | :-- | :-- | :-- | :-- | :-- | :-- |
        | Šifra primaoca koju je kupcu dodelila Agencija za prihode (AdE) nakon registracije | Šifra primaoca kupca | Prazno | Naziv preduzeća kupca | Datum početka poslovnog odnosa | Datum isteka važenja korišćenog kanala |
        | PEC e-pošta | 0000000 (7 nula) | PEC adresa e-pošte kupca | Naziv preduzeća kupca | Datum početka poslovnog odnosa | Datum isteka važenja korišćenog kanala |
        | Nije poznata ni šifra primaoca ni PEC adresa ILI privatni kupac ILI kupac u povlašćenom ili paušalnom poreskom režimu | 0000000 (7 nula) | Prazno | Naziv preduzeća kupca | Datum početka poslovnog odnosa | Datum isteka važenja korišćenog kanala |
        | Kupac nema prebivalište, nije poslovno nastanjen niti je identifikovan u Italiji | XXXXXXX (7 slova „X”) | Prazno | Naziv preduzeća kupca | Datum početka poslovnog odnosa | Datum isteka važenja korišćenog kanala |

    - **PEC primaoca**: izborom ove vrednosti označava se namera korišćenja PEC adrese e-pošte kao kanala slanja. Ovo podešavanje zahteva popunjavanje polja ŠIFRA PRIMAOCA i E-POŠTA prema sledećem pravilu:

        | Način slanja | Šifra primaoca | E-pošta | Opis primaoca | Datum početka | Datum završetka |
        | :-- | :-- | :-- | :-- | :-- | :-- |
        | PEC e-pošta | 0000000 (7 nula) | PEC adresa e-pošte kupca | Naziv preduzeća kupca | Datum početka poslovnog odnosa | Datum isteka važenja korišćenog kanala |

    - **Subjekt koji nema prebivalište, nije poslovno nastanjen niti je identifikovan u Italiji**: izborom ove vrednosti određuje se sistem SdI kao kanal putem kojeg se moraju slati fakture, pri čemu se kao šifra primaoca navodi posebna oznaka „XXXXXXX”. Zato se polja ŠIFRA PRIMAOCA i E-POŠTA moraju popuniti na sledeći način:

        | Način slanja | Šifra primaoca | E-pošta | Opis primaoca | Datum početka | Datum završetka |
        | :-- | :-- | :-- | :-- | :-- | :-- |
        | Kupac nema prebivalište, nije poslovno nastanjen niti je identifikovan u Italiji | XXXXXXX (7 slova „X”) | Prazno | Naziv preduzeća kupca | Datum početka poslovnog odnosa | Datum isteka važenja korišćenog kanala |

## Fakturisanje organa javne uprave

Prilikom evidentiranja organa javne uprave u šifarniku potrebno je otvoriti *Početna > Šifarnik kontakata*, pronaći i otvoriti šifarnik kontakta za koji se želi podesiti upravljanje elektronskim fakturisanjem, a zatim na panelu *Računovodstveni podaci > Poreske informacije* aktivirati oznaku **Organ javne uprave**. Nakon aktiviranja ove opcije potrebno je popuniti i tabelu **Organ javne uprave**.

Polja u tabeli potrebno je popuniti na sledeći način:

- **Šifra kancelarije**: šifra javne kancelarije koja je primalac fakture.
- **Naziv kancelarije**: opis polja šifre kancelarije, koje je potrebno popuniti nazivom javne kancelarije.
- **Naziv preduzeća**: u ovom polju moguće je povezati šifarnik koji je već definisan u Fluentisu i odnosi se, na primer, na javnu kancelariju koja pripada glavnom šifarniku koji se koristi (na primer, kancelarija za javne radove određene opštine ili zdravstvena ustanova koja pripada glavnom šifarniku „Opština ...”).

Taj povezani šifarnik potrebno je podesiti kao odredište za glavni šifarnik na kartici „Isporuka”. Na taj način će se odredište (na primer, kancelarija za javne radove) preneti u strukturu XML datoteke zajedno sa šifrom kancelarije i ostalim podacima, kao što je adresa.

Radi ispravnog upravljanja većim brojem šifara kancelarija (a time i većim brojem subjekata) povezanih sa istim glavnim šifarnikom, preporučuje se upravljanje i ovim poljem, odnosno njegovo popunjavanje. Polje nije obavezno niti je potrebno ako je uz predmetni šifarnik direktno povezana samo jedna šifra kancelarije.

- **Datum početka usluge**: određuje datum unosa reda ili datum od kojeg je aktivan poslovni odnos isporuke sa predmetnim organom javne uprave.
- **Datum završetka usluge**: određuje datum završetka poslovnog odnosa isporuke sa organom javne uprave i onemogućava dalju upotrebu te stavke za generisanje elektronske datoteke fakture.