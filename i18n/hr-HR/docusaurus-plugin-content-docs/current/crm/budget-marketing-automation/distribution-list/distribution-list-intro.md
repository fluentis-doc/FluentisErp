---
title: Distribucijske liste
sidebar_position: 1
---

Postupak **Distribucijske liste** omogućuje izradu popisa sljedećih kontakata kojima će se slati bilteni (*Newsletteri*):

- CRM kontakti
- CRM kontakti uključeni u kampanju
- CRM kontakti uključeni u poslovnu priliku
- ERP kontakti (dobavljači) uključeni u zahtjev za ponudom za nabavu
- ERP kontakti (dobavljači) uključeni u narudžbu za nabavu
- ERP kontakti (kupci) uključeni u prodajnu ponudu
- ERP kontakti (kupci) uključeni u prodajnu narudžbu
- ERP kontakti (kupci) uključeni u otpremnicu
- ERP kontakti (kupci) uključeni u izlazni račun
- ERP kontakti (kupci) uključeni u servisnu intervenciju

Za CRM kontakte adrese e-pošte pretražuju se na sljedeći način:
- Opća adresa e-pošte kontakta uz uvjet da je u odjeljku „Područje e-pošte” označena i zastavica *Newsletter*.
- Adrese e-pošte kontaktnih osoba, uz uvjet da se na kartici „Područje e-pošte” nalazi i stavka *Newsletter*.

Za ERP kontakte (kupce i dobavljače) adrese e-pošte pretražuju se na sljedeći način:
- U šifarniku kontakta i alternativnim adresama uzimaju se u obzir sve vrste adresa omogućene za odgovarajući dokument (narudžba, otpremnica, račun itd.).

Distribucijske liste dijele se na dvije vrste:  
-	**Statičke liste**: korisniku zahtijevaju ručno dodavanje novih CRM kontakata u listu;  
-	**Dinamičke liste**: u stvarnom vremenu, na temelju postavljenih filtara na SQL upitu povezanom s listom, izračunavaju kontakte koji trebaju biti uključeni u slanje *newslettera*.
