---
title: Parametri de calcul dobânzi moratorii
sidebar_position: 3
---

În primul tab din partea stângă este o listă cu flag-uri de selecție a tipurilor de angajamente pentru care se calculează ratele dobânzii, iar în celălalt este un câmp de filtrare pe coduri de cont sintetic/analitic. Sub acesta trebuie setat tipul de rată implicit de aplicat și flag-urile care ghidează logica de calcul:

**Calculează pentru angajamentele închise în perioadă**: daca este activ, procedura va verifica angajamentele care au devenit închise în intervalul de date setate și doar pentru acestea va calcula valorile dobânzilor, deci pentru plățile parțiale nu vor fi calculate dobânzi;

**Calculează pentru plățile perioadei**: daca este activ, procedura va identifica plățile înregistrate în intervalul de date și pe aceste sume va calcula valoarea dobânzilor relative: această setare este cea recomandată;

În cazul în care nu a fost inserat nici un flag, calculul va valoriza dobânzile relative la zilele de întârziere prezente în intervalul de date inserate.

Tipul documentului și tipul plății sunt filtre ulterioare pentru identificare angajamentelor pentru care va fi efectuat calculul dobânzilor.

- calculare dobânzi doar pentru clienții pentru care a fost inserată în registru o dată acord

- calculare dobânzi pentru clienții cu un acord pe baza setărilor din registru, rata implicită inserată sus pentru toți ceilalți

- calculare dobânzi pentru toți clienții pe baza ratei dobânzii implicite inserate sus.

Un ultim flag, deja inserat implicit, prevede excludere din dobânzi ale angajamentelor plătite cu efecte din modulul portofoliu efecte: această setare servește, în particular, pentru tipurile de rată pentru care a fost setat calculul și cu scont, pentru că închiderea angajamentului client este relevată direct la emiterea incasso-ului documentar/cambiei.

Procedura de calcul este constituită astfel:

RIBBON BAR: reprezintă meniul form-ului în discuţie. Mai precis, aria în care se pot efectua acţiuni asociate la procedura utilizată. Prezentăm în continuare lista cu funcţionalităţile posibile:



| Functie | Functionalitate |
| --- | --- |
| Calcul dobânzi | Butonul efectuează calculul pe baza parametrilor inserați. |






