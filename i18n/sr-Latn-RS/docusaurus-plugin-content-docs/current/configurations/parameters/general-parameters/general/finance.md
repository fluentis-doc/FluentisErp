---
title: Business Areas - Administracija
sidebar_position: 1
---

**Kreiranje Intraweb ili Entratel datoteke**: Ovaj parametar, koji je ranije bio vidljiv samo u bazi podataka, omogućava podešavanje tipa izvozne datoteke za Intrastat obrasce direktno putem korisničkog interfejsa, radi kompatibilnosti sa aplikacijom Intraweb carinske uprave ili aplikacijom Entratel poreske uprave (dva alternativna kanala za slanje obrazaca). Tehnička razlika prvenstveno se odnosi na zaglavlje datoteke koje je potrebno za slanje putem Entratela. Parametar je obično već podešen i njime se jednostavno upravlja u koloni VREDNOST. Kao što je navedeno u napomeni, vrednost FALSE (0 – deaktivirano) znači Intraweb, dok TRUE (1 – aktivirano) znači Entratel. Ako je potrebno ručno kreiranje parametra (zbog tehničkih problema ili kompatibilnosti sa starijim verzijama), podesite kolonu Tip na Boolean, datum početka važenja i polje Vrednost. Kod u glavnoj tabeli je `FS-FI-Intrastat-ItalianFileType`.

**Korišćenje težine dokumenta u Intrastat nabavkama/prodajama**: Aktiviranjem ove opcije u polju Vrednost (parametar tipa Boolean) za svaki od ova dva parametra, automatski postupak kreiranja Intrastat izveštaja iz faktura preuzima težine artikala iz polja `NetWeight` u redovima nabavnih/prodajnih dokumenata, umesto podrazumevanih teorijskih težina iz šifarnika artikala. Prilikom knjiženja izlazne fakture, ako računovodstveni razlog predviđa Intrastat obradu, težine iz dokumenta unose se u računovodstvo. Na taj način i postupak preuzimanja podataka iz računovodstvenih knjiženja uključuje težinu dokumenta.

Ovi parametri mogu se kombinovati sa dodatnim parametrom (**vidljivim samo u bazi podataka**) koji omogućava Fluentis-u da u odeljak Bis/Ter prenese vrednosti težina onako kako su unete tokom automatskog kreiranja, bez zaokruživanja na nivou redova. Zaokruživanje se obavlja u sledećoj fazi pomoću dugmeta za grupisanje u odeljku Bis/Ter.

Upit koji treba izvršiti:

    update fluentis.SH_CompanyParameters set shcp_value = cast(0 as smallint)

    --update fluentis.SH_CompanyParameters set shcp_value = cast(1 as smallint)

    from fluentis.SH_CompanyParameters

    join fluentis.SH_LocalizationParameters on SHLP_Id = SHCP_Parameter_SHLP_Id

    where SHLP_Code like 'IN-IntrastatRoundByOperation'

**Blokiraj knjiženje ako je datum knjiženja raniji od datuma prijema** (kod `FS-FI-Posting-BlockPostingBeforeReceiveDate`): ako je ovaj parametar aktiviran, knjiženje ulaznih faktura iz SDI datoteke neće biti dozvoljeno sa datumom koji prethodi datumu prijema SDI-ja.

**Dozvoli kreiranje opomena za zatvorene stavke** (kod `FS-FI-DunningLetters-AllowClosedMaturities`): ovaj parametar omogućava generisanje opomena i za stavke koje su već plaćene, odnosno kreiranje pisama o izvršenoj uplati.