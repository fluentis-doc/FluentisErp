---
title: Business Areas - Administracija
sidebar_position: 1
---

**Stvaranje Intraweb ili Entratel datoteke**: Ovaj parametar, koji je prethodno bio vidljiv samo u bazi podataka, omogućuje postavljanje vrste izvoznog zapisa za Intrastat modele izravno putem sučelja, kako bi bio kompatibilan s aplikacijom Intraweb carinske uprave ili Entratel aplikacijom porezne uprave (dva moguća alternativna kanala za slanje modela). Tehnička razlika se prvenstveno odnosi na zaglavlje datoteke zahtijevano za slanje putem Entratela. Parametar je obično već postavljen i može se jednostavno upravljati u stupcu VRIJEDNOST, gdje, kao što je navedeno u bilješci, zastavica u stanju FALSE (0 - deaktivirano) = Intraweb, dok TRUE (1 - aktivno) = Entratel. U slučaju ručnog kreiranja (tehnički problemi ili unazadna kompatibilnost), postavite stupac Tip na Booleov, datum početka valjanosti i polje vrijednost. Polje Kod u glavnoj mreži je FS-FI-Intrastat-ItalianFileType.  

**Korištenje težine dokumenta u Intrastat nabavama/Prodajama**: Omogućavanjem (u polju Vrijednost) zastavice (parametar tipa boolean) za svaki od dva parametra, automatski postupak kreiranja Intrastat izvještaja iz faktura preuzima težine artikala iz polja 'NetWeight' redaka dokumenta nabave/prodaje, umjesto teorijskih težina iz šifranika artikla, što je zadano. Knjiženje prodajne fakture, ako računovodstvena stavka predviđa Intrastat upravljanje, unosi u računovodstvo težine dokumenta: na taj način i postupak preuzimanja iz računovodstvenih zapisa uključuje težinu dokumenta.  

Ovi parametri mogu se kombinirati s dodatnim parametrom (**vidljivim samo u bazi podataka**) kojim Fluentis prenosi u odjeljak Bis/Ter vrijednosti težina onako kako su unesene prilikom automatskog kreiranja, bez zaokruživanja redaka. Zaokruživanja će se obraditi u sljedećoj fazi pomoću gumba za grupiranje koji se nalazi u odjeljku Bis/Ter.

Query koji se mora izvršiti:

        update fluentis.SH_CompanyParameters set shcp_value = cast(0 as smallint)
        
        --update fluentis.SH_CompanyParameters set shcp_value = cast(1 as smallint)
        	
        from fluentis.SH_CompanyParameters
        		
        join fluentis.SH_LocalizationParameters on SHLP_Id = SHCP_Parameter_SHLP_Id
        	
        where SHLP_Code like 'IN-IntrastatRoundByOperation'
