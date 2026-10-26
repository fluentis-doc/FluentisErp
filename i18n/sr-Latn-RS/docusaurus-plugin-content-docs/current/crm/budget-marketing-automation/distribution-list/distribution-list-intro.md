---
title: Distribucione liste
sidebar_position: 1
---

Postupak **Distribucione liste** omogućava kreiranje liste sledećih kontakata kojima će se slati bilteni (*Newsletteri*):

- CRM kontakti
- CRM kontakti uključeni u kampanju
- CRM kontakti uključeni u poslovnu priliku
- ERP kontakti (dobavljači) uključeni u zahtev za ponudu za nabavku
- ERP kontakti (dobavljači) uključeni u narudžbinu za nabavku
- ERP kontakti (kupci) uključeni u prodajnu ponudu
- ERP kontakti (kupci) uključeni u prodajnu narudžbinu
- ERP kontakti (kupci) uključeni u otpremnicu
- ERP kontakti (kupci) uključeni u izlazni račun
- ERP kontakti (kupci) uključeni u servisnu intervenciju

Za CRM kontakte adrese e-pošte pretražuju se na sledeći način:
- Opšta adresa e-pošte kontakta, pod uslovom da je u odeljku „Oblast e-pošte” označena i opcija *Newsletter*.
- Adrese e-pošte kontaktnih osoba, pod uslovom da se na kartici „Oblast e-pošte” nalazi i stavka *Newsletter*.

Za ERP kontakte (kupce i dobavljače) adrese e-pošte pretražuju se na sledeći način:
- U šifarniku kontakata i alternativnim adresama uzimaju se u obzir sve vrste adresa omogućene za odgovarajući dokument (narudžbina, otpremnica, račun itd.).

Distribucione liste dele se na dve vrste:

- **Statičke liste**: zahtevaju od korisnika ručno dodavanje novih CRM kontakata na listu;
- **Dinamičke liste**: u realnom vremenu, na osnovu filtera postavljenih u SQL upitu povezanom sa listom, izračunavaju kontakte koji treba da budu uključeni u slanje *newslettera*.