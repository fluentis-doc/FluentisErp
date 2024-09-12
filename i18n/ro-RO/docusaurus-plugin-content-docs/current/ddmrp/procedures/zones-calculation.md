---
title: Actualizare valoare zone articole buffer
sidebar_position: 3
---

Această procedură efectuează calculul zonelor verde, galbenă și roșie pentru fiecare buffer în funcție de parametrii DDMRP ai articolelor.

Zona verde este determinată luând în considerare cel mai mare dintre următoarele trei elemente:

1. cantitatea minimă de comandă;  
2. cantitatea consumată în perioada de reaprovizionare (dacă este definită) = ADU x DOC, și anume consumul mediu zilnic x ciclul de reaprovizionare în zile;  
3. ADU x DLT x LTF, și anume consumul mediu zilnic x timpul de livrare declupat x factorul de lead time.

Zona verde determină dimensiunea minimă a ordinelor (nu se poate emite un ordin pentru o cantitate mai mică decât zona verde) și frecvența medie de emitere a ordinelor (cu cât este mai mare, cu atât se comandă mai rar).

Zona galbenă este determinată ca ADU x DLT, și anume consumul mediu zilnic x timpul de livrare declupat.

Zona roșie este produsul dintre ADU x DLT x LTF (1 + VAF), și anume consumul mediu zilnic x timpul de livrare declupat x factorul de lead time, totul înmulțit cu 1 adăugat la factorul de variație.

De aceea, odată cu creșterea variabilității, zona roșie crește, și anume stocul de siguranță al articolului, adică acea parte a stocului care este folosită pentru a face față situațiilor neprevăzute.

Această procedură ia în considerare eventualele valori ale **Factorului de ajustare a cererii articolelor** și eventuale excepții ale zonelor roșie, galbenă, verde valabile în momentul executării acesteia.

Rezultatul este utilizat pentru a modifica valorile zonelor în tabelul parametrilor DDMRP.