---
title: Stare buffere
sidebar_position: 1
---

Acest raport afișează starea nivelului stocului unui buffer.

Pentru un buffer (stoc într-un anumit depozit), se analizează stocul actual și cel viitor într-o perioadă de timp comparabilă cu dlt-ul articolului.

Sunt afișate diverse linii în diferite date începând cu data curentă, iar pentru fiecare se indică valoarea stocului (valoare reală) și valoarea procentuală a stocului raportată la zona roșie a articolului.

Se utilizează un sistem de culori pentru a evidenția nivelul de criticitate al stocului:
- dacă stocul este mai mic decât 0, se folosește roșu închis (situație extrem de critică cu lipsă de stoc și cerere care nu poate fi satisfăcută).  
- dacă este între 0 și 50% din zona roșie, se folosește culoarea roșie (situație critică cu riscul de lipsă de stoc).  
- dacă este între 50% și 100% din zona roșie, se folosește culoarea galbenă (situație necritică, dar care trebuie monitorizată).  
- dacă este peste 100%, se folosește culoarea verde (situație necritică).

*Notă*:  
Un stoc negativ indică lipsa de stoc în cazul unei cereri care nu va putea fi satisfăcută (deci vor fi întârzieri și întreruperi în fluxul de materiale), iar un stoc zero indică lipsa de stoc dar fără a exista o cerere de satisfăcut, deci o condiție care momentan nu generează întârzieri și întreruperi în fluxul de materiale, dar care poate deveni dacă apare o cerere înainte de a reuși să se reaprovizioneze bufferul.

Acest raport evidențiază eventualele probleme imediate și efectuează o analiză a  perioadei viitoare necesare pentru a reaproviziona bufferul. Liniile cu date în viitor se referă la prognozele valorii stocului, având în vedere cererea deja cunoscută la momentul respectiv, pentru a evidenția dinainte posibilele situații critice (cele cu culoare roșie sau roșu închis), pentru a acționa antecedent momentului în care situația va deveni critică.