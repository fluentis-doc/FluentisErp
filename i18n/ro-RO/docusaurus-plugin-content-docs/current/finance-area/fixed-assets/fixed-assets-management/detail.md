---
title: Detaliu
sidebar_position: 1
---

Tabul ‘Detaliu': starea mijlocului fix este gestionată automat de aplicație pe baza operaţiilor asociate la mijlocul fix şi nu trebuie forţată. Data pentru începutul activităţii, propusă ca fiind cea curentă, este data la care mijlocul fix a intrat efectiv în uzul societăţii: doar începând de la această data va fi posibilă amortizarea mijlocului fix. Data pentru sfârşitul activităţii, se inserează, în mod normal, în cazuri particulare, pentru a nu permite calculul amortizării şi pentru a nu mai vizualiza mijlocul fix în registrul mijloacelor fixe: în gestionarea normală, la completarea amortizării rămase, mijlocul fix nu va mai fi amortizat. Datele succesive, relative la garanţii, nu au o gestiune specifică: sunt câmpuri puse la dispoziţie pentru a memoriza aceste elemente.

În câmpul ‘Mijloc fix' este inserat automat contul analitic de referinţă pentru categoria selectată; următorul cod furnizor nu este gestionat automat de program, pentru că furnizorii şi clienţii de referinţă ale diverselor operaţii vor fi indicate în interiorul acestora. Analiticul de gestiune face referire la detaliu planului de conturi de gestiune, în mod normal neutilizat.

Locaţia şi codul sunt câmpuri libere unde se pot insera aceste informaţii despre mijlocul fix; codul angajatului permite memorarea subiectului care utilizează mijlocul fix.

Pe baza setărilor parametrilor, poate fi apoi vizibil un procent de amortizare contabilă ‘personalizată' pentru fiecare mijloc fix, care va fi utilizat cu prioritate faţă de cel al categoriei de apartenenţă, şi o unitate de măsură pentru cantitatea valorizată în fişa mijlocului fix.

În câmpul deductibilitate pentru fiecare mijloc fix se poate asocia un tip prioritar de deductibilitate fiscală care se referă la amortizările sale.

Secţiunea centre de cost/comenzi de vânzare se activează doar când a fost salvat registrul mijlocului fix: permite atribuirea unei structuri procentuale de valorizare automată a amortizărilor diferitelor centre de cost/comenzi de vânzare definite în societate.

Urmează apoi câteva check box-uri: mijlocul fix implicit în uz (dacă flag-ul nu este prezent, mijlocul fix nu va putea fi amortizat), statusul mijlocului fix utilizat (dacă flag-ul este setat, amortizarea accelerată va fi aplicată doar în primul an de achiziţie şi flag-ul ‘Amortizare primul an' nu va avea efect, drept pentru care, în primul an, procentele de aplicare ale amortizărilor nu vor fi înjumătăţite); ‘în întreţinere' se referă la faptul că mijlocul fix va fi calculat în raportul întreţinerilor; ‘Vândut' este un flag activ doar pentru categoriile de mijloace fixe necorporale. Acest flag exclude raportul din registrul mijloace fixe în cazul în care valoarea partimonială a fost ştornată din bilanţ; ‘Am. totală' vă permite să atribuiţi amortizarea de 100% mijlocului fix, direct în primul an: la salvarea mijlocului fix, aplicația va controla corectitudinea acestei setări în relaţie cu limita inserată în categoria mijlocului fix; este vizibil statusul mijlocului fix listat sau nu, care indică faptul că referinţele din antetul mijlocului fix nu pot fi modificate în cazul în care acesta a fost deja inserat în raportul definitiv al registrului mijloace fixe amortizabile. Pentru a încheia, flagurile ‘Măsurare venit' şi ‘Studii de sector' sunt pentru a putea identifica mijloacele fixe care vor fi considerate pentru aceste cerinţe fiscale.

RIBBON BAR: reprezintă meniul Forum-ului în discuţie, mai precis aria în care se pot efectua acţiuni asociate la procedura utilizată. Prezentăm în continuare lista cu funcţionalităţile posibile:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Salvează mijloc fix; obligatoriu pentru a atribui numărul mijlocului fix şi pentru a activa diverse tab-uri. |
| Documente | Gestiune pentru arhivarea documentelor asociate ferestrei curente. |






