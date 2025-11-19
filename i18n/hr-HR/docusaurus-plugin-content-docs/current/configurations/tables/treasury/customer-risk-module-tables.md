---
title: Tablice modula Rizik kupca  
sidebar_position: 7
---

U okviru ovog modula ne postoje posebne tablice, ali je važno naglasiti da različiti tipovi dokumenata u nabavi i prodaji sadrže postavke povezane s rizikom kupca.  

Kreditni limit kupca (fido) prikuplja podatke iz sljedećih dokumenata u prodajnom području:   

**[Tip narudžbe kupca](/docs/configurations/tables/sales/sales-order-types)**: 'flag Kredit' označava da li se dokument (isprintan i potvrđen) uzima u obzir u izračunu klijentovog limita ili ne. 'Isključi blokadu' isključuje ovu vrstu dokumenta iz blokade klijenta.;

**Tipovi otpremnica**: 'flag Kredit' označava da li se dokument (ispisan, ne valoriziran u fakturi) uzima u obzir u izračunu klijentovog limita ili ne. 'Isključi blokadu' isključuje ovu vrstu dokumenta iz blokade klijenta.;

**[Vrsta računa](/docs/configurations/tables/purchase/purchase-invoices-type)**: ‘Flag Kredit’ označava da li se dokument (isprintan, ne knjižen) uzima u obzir pri izračunu klijentovog limita ili ne. ‘Flag Isključi blokadu’ isključuje ovu vrstu dokumenta iz blokade klijenta.

Na kraju, svaki Šifarnik  kupca ima dvije postavke povezane s predmetnim modulom:

**Tip kontrole kreditnog limita:** 

**Blokada dokumenata i nadzor limita**: dokument u prodajnom području koji premašuje odobreni limit bit će blokiran, te će stoga biti potrebno odobriti ga kako bi se nastavilo s daljnjim fazama dokumentarnog toka.

**Nadzor limita**: bit će jednostavno izvršena provjera limita s eventualnom porukom korisniku o prekoračenju;

**Grupna blokad**: kao za prvo, ali izračun je kumulativan za sve tvrtke u bazi podataka koje se odnose na istu karticu kupca;

**Grupni nadzor**: come per il secondo, ali je izračun kumulativan za sve tvrtke u bazi podataka koje pripadaju istoj kartici kupca.

Druga postavka je provjera 'kontrola izloženosti', koja čini kupca vidljivim u obrascu izloženosti kupaca.