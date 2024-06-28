---
title: Gestiune remuneraţii
sidebar_position: 1
---

În această fereastră se începe încărcarea/modificărea documentului primit de la profesionist sau de la agent atât în cazul notei de plată provizorie, cât şi a facturii definitive; diferenţa dintre aceastea două va fi doar modul de inserare, imediat sau succesiv, al câmpurilor relative la numărul şi data documentului definitiv.

Primul câmp al remuneraţiei se referă la inserarea contului remuneraţiei: în acest câmp pot fi inserate analitice doar cu tipul de cont agent sau furnizor care au setat flag-ul reţineri avans în registru.

Flag-urile succesive pentru status sunt: contabilizată, gestionat automat de aplicaţie în momentul contabilizării  remuneraţiilor. După setarea acestui flag, remuneraţia nu se mai poate modifică. Flag-ul reţinere vărsată va fi aplicată manual remuneraţiei sau cu ajutorul procedurii ‘Vărsăminte reţinere' executabilă din fereastra Caută remuneraţii. Flag-ul ‘certificată' este setat automat de program în momentul listării definitive a certificărilor reţinerilor.

Asociat analiticului agent sau furnizor, poate fi predefinit tipul de reţinere, care va fi propus în momentul încărcării remuneraţiei.

Câmpul următor, note, permite inserarea unui text de referinţă pentru remuneraţie: este vorba despre o notă care va fi preluată apoi în notele detaliate ale tuturor mişcărilor contabile asociate acestei remuneraţii. Urmează imediat câmpul ‘Descriere mişcare', care va fi utilizat la contabilizarea remuneraţiilor pentru câmpul omonim din înregistrarea contabilă.

În partea dreaptă se află numărul şi anul de referinţă al remuneraţiei: este vorba despre o numerotare automată, internă programului care trebuie să fie unică pentru societate. Câmpul data este propus egal cu data curentă, dar poate fi setat egal cu data notei de plată provizorie.

Câmpurile data şi numărul documentului definitiv vizeză referinţele la factura definitivă: sunt câmpuri obligatorii pentru contabilizarea remuneraţiilor, chiar dacă şablonul de referinţă nu trebuie să fie un şablon TVA. Aceste două câmpuri vor fi unicele modificăbile în cazul în care plata a fost deja relevată în contabilitate.

Câmp-ul comandă/an este util pentru asocierea remuneraţiei la o comandă de vânzare: poate fi cazul unei expertize pe un şantier gestionată pe comandă. Dacă şablonul contabil de referinţă are gestiunea pe comenzi, atunci costurile inserate în această remuneraţie vor fi atribuite acesteia.

Deviza data şi schimb sunt conectate la deviza şi la relativele date ale schimbului preluate din tabelul schimburi (deviza este inserată din registrul agent/furnizor).

În detaliile remuneraţiei vor fi încărcate toate datele remuneraţiei: se va porni de la tipul liniei ‘cost serviciu' pentru care aplicaţia va propune procentul din baza de impozitare şi din reţinere citite din tip reţinere, contul analitic de cost va fi preluat din costul de contrapartidă al agentului/furnizorului (ar putea fi contul analitic de gestiune de contrapartidă şi datele contabile analitice aşa cum au fost definite în şablonul analitic asociat), costul în valută şi în euro, cota TVA de aplicat (şi aceasta propusă din registru) şi datele pentru competenţa economică de referinţă. Acestea sunt gestionate, pentru utilizatorul conectat, pe baza parametrilor săi de gestiune (care pot fi setate cu relativul buton din această fereastră): liniile succesive primei vor fi propuse automat intervalul setat în linia precedentă.

Următoarele tipuri de linie sunt: cassa previdenza, pentru care aplicaţia va propune procentul de aplicaţie 0% din reţinere şi valoarea calculată automat pe baza procentului prezent în linia costului serviciului încărcat anteior.

Tip linie enasarco nu este utilizat.

În momentul salvării remuneraţiei sunt  executate mesaje de control în cazul care valoarea angajamentului nu corespunde totalului de plată, ca şi în cazul lipsei echilibrului datelor din centrul de cost/profit.

După efectuarea contabilizării remuneraţiei, datele remuneraţiei nu vor mai putea fi modificate: în cazul în care a fost efectuată contabilizarea plăţii sau enasarco, în schimb, vor putea fi modificate referinţele la numărul/data documentului definitiv, descrierea mişcării şi contul analitic inserat în gridul detaliilor.

Pentru a încheia, se poate crea o remuneraţie nouă direct din precedenta, imediat ce a fost salvată cu ajutorul butonului relativ: noua remuneraţie va avea câteva elemente preluate din precedenta, pe baza setărilor utilizatorului. În cazul în care remuneraţia a fost salvată şi are data şi numărul documentului definitiv, va fi contabilizată cu ajutorul butonului relativ: se va deschide o fereastră în care datele propuse vor fi ultimele valide pentru registrul TVA aociat la şablonul tipului de reţinere.

Este prezent şi un buton pentru listarea remuneraţie curente.

RIBBON BAR: reprezintă meniul Forum-ului în discuţie, mai precis aria în care se pot efectua acţiuni asociate la mijlocul fix analizat. Prezentăm în continuare lista cu funcţionalităţile posibile:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Salvează remuneraţia analizată. |
| Nouă remuneraţie | Crează o remuneraţie nouă pornind de la cea actuală. |
| Parametri inserare | Permite definirea parametrilor utilizatorului pentru gestionarea remuneraţiei. Vezi aplicaţia 1. |
| Contabilizează şi închide | Activ când au fost inserare data şi numărul documentului definitiv; permite efectuarea contabilizării remuneraţiei. |
| Nou detaliu | Activează cursorul la inserarea unei noi linii detaliu pentru remuneraţie. |
| Şterge detaliu | Şterge liniile detaliu selectate în remuneraţie. |



| Functie | Functionalitate |
| --- | --- |
| Document manager | Procedura da posibilitatea de a atasa documente. |

APLICAŢII: În parametri utilizator se poate defini dacă remuneraţia nouă trebuie să repropună acelaşi cont analitic actual, acelaşi tip reţinere, cum să fie gestionată noua data document şi cum să fie gestionat intervalul de date pentru competenţa economică (sfârşit exerciţiu – şi anume, data finală va fi egală cu sfârşitul exerciţiului, zilnică – şi anume, data finală va fi egală cu data iniţială, nici o dată pentru tipul de cont servicii - va fi obligatorie inserarea ambelor date dacă tipul contului analitic inserat este setat ca ‘serviciu').






