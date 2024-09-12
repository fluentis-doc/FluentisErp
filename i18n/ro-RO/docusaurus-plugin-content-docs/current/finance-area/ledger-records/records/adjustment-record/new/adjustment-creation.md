---
title: Creare ajustare – Generale
sidebar_position: 1
---

Cu această procedură aplicația va putea calcula cheltuielile/veniturile anticipate/de realizat relative la înregistrările contabile prezente în baza de date: este vorba despre rectificări/integrări relative la asigurări, chirii, rate de leasing sau asistența, care au caracteristica de a fi relative la o perioadă.

Condițiile pentru a utiliza această procedură sunt:

1) Au fost inserate, în tabelul tipuri de cont, tipurile de conturi ‘de rectificat' care se identifică pentru flagul *Serviciu* activat. Calculul este efectuat de aplicație, ca în bilanțurile infraanuale, nu pentru toate conturile analitice ci doar pentru cele pentru care, în planul de conturi, a fost atribuit acest tip de cont de cost sau de venit.

2) Au fost inserate, în parametrii contabili, conturile analitice standard pentru relevarea cheltuielilor/veniturilor anticipate/de realizat. Amintim că la nivelul planului de conturi, în fiecare analitic de cost/venit pot fi inserate conturi analitice de cheltuieli/venituri anticipate/de realizat care vor fi utilizate cu prioritate pentru relevarea integrării sau rectificării.

Au fost utilizate corect intervalele de date economice de competență în mișcările contabile. Amintim celor care doresc să utilizeze opțiunea să seteze parametrii de inserare utilizator cu opțiunea *Nici o dată pentru tip cont serviciu* pentru a obliga utilizatorul să insereze pe rând intervalul de date economice valabile pentru fiecare mișcare.
