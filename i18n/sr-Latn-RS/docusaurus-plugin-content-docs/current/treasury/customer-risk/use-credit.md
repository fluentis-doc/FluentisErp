---
title: Korišćenje kredita
sidebar_position: 3
---

## Glavna kartica

Obrazac **Korišćenje kredita** omogućava kreiranje i čuvanje obračuna iskorišćenosti kredita za svakog kupca, kao i pregled istorije prethodnih obračuna. U listi obračuna prikazanoj na formi, redovi sa odstupanjima biće prikazani crvenom bojom.

Za kreiranje novog obračuna koristi se dugme **Novo**.

Nakon otvaranja detaljne forme, unosi se konto kupca koji se želi analizirati.

Unosi se ili menja datum početka obračuna, koji predstavlja datum od kog se preuzimaju podaci za obračun.

Zatim se pritiska dugme **Izračunaj**.

Obračun se može sačuvati korišćenjem komande **Sačuvaj**.

**Referentni datum** predstavlja datum na koji se izračunava raspoloživi kredit.

NAPOMENA: U slučaju, na primer, bankarskih menica koje su izdate i predate na naplatu, čak i ako su proknjižene odgovarajućom računovodstvenom procedurom, njihov iznos se za potrebe obračuna kredita smatra zauzetim sve do datuma dospeća obaveze koja je generisala menicu. Zbog toga se, promenom referentnog datuma na datum nakon tog roka, može primetiti oslobađanje odgovarajućeg iznosa kredita.

Kod prodajnih dokumenata, kao što su porudžbine kupaca, obračun raspoloživog kredita (prikazan u zaglavlju) uvek se odnosi na tekući datum, bez mogućnosti izmene referentnog datuma. Zbog toga nova porudžbina koja premašuje raspoloživi kredit neće moći da se obradi (osim kroz postupak autorizacije) sve do dospeća hipotetičkog instrumenta naplate koji oslobađa dovoljan iznos kredita.

Dugme **Ažuriraj kredit kupca** ažurira podatke kupca unete u zaglavlju obračuna i upisuje vrednost preuzetu iz polja **Procenjeni kredit**.

Ovo polje se popunjava komandom **Izračunaj**, primenom vrednosti iz polja **Multiplikator kreditne procene** (npr. 1) na ponderisani obračun zasnovan na prometu kupca u posmatranom periodu.

Obračun se vrši prema sledećoj formuli:

**Promet 12M / 365 × Multiplikator × Prosečan broj dana kašnjenja**

pri čemu se poslednji parametar izračunava na osnovu dospelih faktura u poslednjih 12 meseci prema formuli:

**(Σ(Iznos dospeća × Dani kašnjenja)) / (Ukupan iznos dospeća)**

**OSTALA POLJA FORME:**

**Promet 12M** = promet ostvaren u poslednjih dvanaest meseci

**Stavke duguje/potražuje** i pripadajući saldo

**Duguje / Potražuje** = naplate iz privremenih evidencija (informativni podatak)

**Saldo duguje / potražuje** = računovodstvena knjiženja ako je izabran računovodstveni metod

**Promet za knjiženje** = promet koji još nije proknjižen (potraživanje jer uključuje odobrenja)

**Otpremnice za fakturisanje** = potraživanje (ako se radi o povratnim otpremnicama)

**Vrednost i broj nenaplaćenih stavki** = statistički podatak koji nije uključen u obračun

**Dospelo** = iznos dospelih otvorenih stavki

## Detalji izračunavanja

U zaglavlju obrasca moguće je aktivirati opciju **Detaljan prikaz** (koja može biti unapred aktivirana i podešavanjem istoimenog polja u parametrima rizika kupca). Time se prikazuje dodatna kartica sa detaljima svih dokumenata uzetih u obzir pri izračunavanju (otvorene stavke, otpremnice, računi, menice i nenaplaćene menice).

U tabeli se u prva dva stupca prikazuje vrednost (duguje ili potražuje) posmatrane stavke, dok se u sledećim stupcima prikazuju odgovarajući podaci, u zavisnosti od vrste dokumenta. Na primer, za otvorenu stavku prikazuju se broj i godina u odgovarajućim stupcima, dok se za račun ili otpremnicu prikazuju vrsta, broj i datum.

:::tip[Napomena]
Ako se dokument koji je prvobitno uzet u obzir izbriše (na primer, izvrši se *rollback* vrednovanja otpremnice ili isporuke narudžbine), red ostaje prikazan, ali se vrednosti u stupcima (duguje, potražuje i reference) gube. Ostaje samo tekstualna napomena u krajnjem desnom stupcu, koja beleži šta je bilo uzeto u obzir u tom trenutku.
:::