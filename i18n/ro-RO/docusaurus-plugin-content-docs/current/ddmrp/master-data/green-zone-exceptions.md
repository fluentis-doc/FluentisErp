---
title: Rectificare zonă verde
sidebar_position: 8
---

Valoarea zonei verzi este calculată automat de procedura *Actualizare zone* în baza valorilor parametrilor DDMRP ai articolului.

În acest tabel se poate insera o valoare diferită în date specificate.

Sistemul de planificare ține cont de eventualele valori de rectificare a zonelor în calculul NFP, chiar dacă procedura *Actualizare zone* nu a fost efectuată.

De obicei se poate impune o valoare diferită de calculul normal pentru o perioadă limitată, pentru a modifica dimensiunea ordinelor emise.

Dacă valoarea zonei verzi este majorată, vor fi emise ordine mai mari și se va comanda mai rar. Dacă este redusă, se întâmplă contrariul.

Un exemplu tipic se referă la resursele de producție cu timp de setare semnificativ.

Dacă ciclul de producție al unui articol pe stoc implică prelucrarea pe o resursă cu timpi de setare semnificativi și dacă resursa însăși este un blocaj, adică este o resursă cu o sarcină de lucru foarte apropiată de capacitatea sa de producție, se încearcă reducerea timpului de nefuncționare al resursei datorat setării, crescând dimensiunea loturilor de producție; acest lucru se obține prin inserarea cantității minime de comandă în parametrii DDMRP ai articolului care determină astfel dimensiunea zonei verzi a acestuia.

Dacă această necesitate apare doar într-o anumită perioadă de timp, atunci în loc să se seteze o cantitate minimă de comandă, se introduce o excepție a zonei verzi pentru acea perioadă de timp.

Acest lucru se întâmplă, de exemplu, pentru produsele puternic de sezon, pentru care, în perioada anterioară vârfului cererii, se creează un stoc adecvat printr-o creștere temporară a zonei verzi, crescând astfel productivitatea resursei saturate. Ulterior resursa va fi mai puțin încărcată, deci nesaturată, adică cu capacitatea de producție în exces, așa că vor fi produse mai multe comenzi mici, privilegiind flexibilitatea sistemului de producție.

Timpii totali mai mari de setare în această perioadă nu reprezintă o problemă deoarece resursa nu este complet încărcată și, prin urmare, există timp resursă neutilizat disponibil.