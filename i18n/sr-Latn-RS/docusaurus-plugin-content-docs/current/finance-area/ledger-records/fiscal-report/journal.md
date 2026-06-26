---
title: Dnevnik knjiženja
sidebar_position: 3
---

Prilikom otvaranja obrasca podrazumevano se prikazuje tekuća obračunska godina, a filter za knjiženja automatski je postavljen na odgovarajući obračunski period. Polje za datum obračuna nije unapred popunjeno, pod pretpostavkom da se pretraga vrši prema formalnom datumu knjiženja.

Prikazuju se početni podaci o broju stranice, dugovnom i potražnom saldu reda. Program automatski predlaže filter knjiženja uzimajući u obzir datum poslednje definitivne štampe.

![](/img/it-it/finance-area/ledger-records/fiscal-report/journal/image01.png)

## OPCIJE

**Prikaži zaglavlje**: koristi se za štampanje na unapred odštampanim obrascima.

**Definitivno**: aktivira režim konačne štampe. Nakon izvršene konačne štampe, izmene računovodstvenih knjiženja za obuhvaćeni period više nisu dozvoljene.

**Ponovna štampa**: omogućava **ponovno štampanje već definitivno odštampanog dnevnika**. Aktiviranjem ove opcije postaju dostupna za izmenu polja koja sadrže poslednji dugovni i potražni saldo, poslednji broj stranice i poslednji broj reda. Na taj način moguće je izvršiti ponovnu štampu dnevnika bez poništavanja prethodne definitivne štampe i bez izmene podataka u obrascu **Parametri glavne knjige**, čime se zadržavaju isti završni iznosi kao i pri originalnoj štampi.

Prilikom izvršavanja konačne štampe program proverava da li postoje starija knjiženja koja još nisu odštampana, kao i da li postoje datumi koji su već obuhvaćeni prethodnom konačnom štampom.

Samo fizička štampa (uključujući štampanje u datoteku) pokreće postupak zaključavanja. Sam pregled ne izvršava nikakve promene.

Nakon uspešno izvršene konačne štampe:

- odgovarajuća knjiženja biće zaključana u fiskalnom delu;
- brojači će biti ažurirani u **[Parametrima računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**.

U okviru ovog obrasca dostupan je i taster za poništavanje konačne štampe (dostupan korisnicima sa odgovarajućim ovlašćenjima). Nakon izbora perioda koji treba otključati potrebno je potvrditi operaciju i ručno ažurirati odgovarajuće brojače.

**Odeljenje**: omogućava štampanje dnevnika samo za izabrano odeljenje preduzeća.

**Od broja knjiženja / Do broja knjiženja**: omogućava filtriranje po broju knjiženja (manje značajno prilikom konačne štampe).

| Funkcija | Značenje |
| --- | --- |
| Pregled | Otvara pregled štampe dnevnika knjiženja. |
| Štampaj | Štampa dnevnik knjiženja. |

:::important VIDI TAKOĐE
[**VIDEO TUTORIJALI ZA FISKALNE IZVEŠTAJE**](/docs/video/finance/intro)
:::