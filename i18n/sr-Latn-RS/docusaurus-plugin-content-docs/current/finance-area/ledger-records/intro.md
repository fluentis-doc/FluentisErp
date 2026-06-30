---
title: Uvod
sidebar_position: 1
---

Modul obuhvata funkcionalnosti za pretragu, unos i izmenu računovodstvenih zapisa/knjiženja, kao i povezanih poreskih evidencija.

Pomoću ovog modula moguće je potpuno upravljanje finansijskim računovodstvom.

Računovodstveni zapisi (knjiženja/promet) nastaju automatski kroz procedure knjiženja dokumenata iz prodaje i nabavke ili se unose direktno, odnosno ručno.

Iz modula je omogućen pristup pregledu bilansa, prikazu konta, kao i pokretanju različitih **izveštaja**, grupisanih u tri kategorije:

- **Računovodstveni**: bilansi, izvodi konta, računovodstveni pregledi i ostali detaljni izveštaji.
- **Poreski**: računovodstvene knjige, PDV knjige i obračun PDV-a.
- **Analitičko računovodstvo**: pregled prometa centara troškova povezanih sa računovodstvenim zapisima.

## Procedure

Procedure modula omogućavaju:

- obračun i knjiženje dokumenata usklađivanja,
- automatsko zatvaranje i ponovno otvaranje konta,
- obračun kursnih razlika na kraju godine (valutno usklađivanje),
- upravljanje privremenim zapisima,
- ponovno numerisanje PDV protokola.

Pre nego što se započne sa unosom ili knjiženjem dokumenata, potrebno je proveriti da li su svi podaci i [**parametri**](/docs/configurations/parameters/finance/accounting-parameters) modula ispravno podešeni.

Računovodstveni podaci koriste se i u modulu za kontroling za obradu međugodišnjih odnosno privremenih zatvaranja, kao i za obradu svih knjiženja centara troškova povezanih sa njima.

Modul je тесно povezan sa blagajnom, sa kojom razmenjuje podatke i preuzima računovodstvena knjiženja generisana automatskim procedurama za evidentiranje različitih finansijskih događaja povezanih sa blagajničkim poslovanjem (bankovni transferi, aktivni portfolio i sl.).

Jedna od najvažnijih karakteristika modula računovodstvenih zapisa jeste njegova logika zasnovana na [**računovodstvenim šablonima**](/docs/configurations/tables/finance/ledger-records-templates/ledger-records-templates-intro), koji se mogu u potpunosti prilagoditi radi definisanja sopstvenih računovodstvenih modela.

:::important Pogledajte takođe
[**VIDEO TUTORIJALI ZA RAČUNOVODSTVENE ZAPISE**](/docs/video/finance/intro)
:::