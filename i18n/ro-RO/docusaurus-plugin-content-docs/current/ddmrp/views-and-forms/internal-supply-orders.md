---
title: Ordine interne DDMRP
sidebar_position: 4
---

Ordinele interne DDMRP sunt ordine emise de o facility (oricare facility, cu excepția fabricii) către o altă facility (inclusiv fabrica) care trebuie să furnizeze marfa comandată.

Facilitatea solicitantă acționează ca un client față de facilitatea furnizoare, care acționează ca furnizor.

Deci aceste ordine sunt atât de aprovizionare (în facilitatea care trebuie să primească marfa), cât și ordine care generează cerere (în facilitatea care trebuie să expedieze marfa).

Antetul ordinului conține gestiunea de destinație, care corespunde facilității care trebuie să primească marfa și gestiunea de proveniență, care corespunde facilității care trebuie să furnizeze marfa.

Sistemul de planificare generează ordine interne planificate după calcularea poziției de flux netă (NFP), care sunt deja complete cu toate datele necesare și pot fi transformate în ordine efective prin procedura corespunzătoare (făcând eventual modificări).

*Notă*:  
Ordinele interne planificate Fluentis nu generează cerere în facilitățile furnizoare, ci doar cele confirmate.

Această alegere face ca necesitățile fiecărei facility să fie analizate de responsabili înaintea creării cererii în facilitatea furnizoare (și în fabrică), conform unui proces de planificare pe niveluri.

Desigur, pot fi create ordine interne DDMRP manual.

Data ordinului este considerată data cererii (echivalentă cu *Data început* a unui ordin de producție), aceeași pentru fiecare articol al ordinului, în timp ce data de livrare este specificată pentru fiecare articol al ordinului deoarece poate fi diferită.

Dacă facilitatea de destinație este alimentată de o facility care nu este fabrica, timpul de livrare al articolelor la destinație este același pentru toți și egal cu lead time-ul introdus în tabelul *Facilities* pentru facilitatea de destinație (cu excepții stabilite în tabelul *Parametri DDMRP* pentru unele articole).

Dacă facilitatea furnizoare este fabrica, în mod normal dlt-ul fiecărui articol din facilitatea de destinație variază deoarece este suma timpului de transport de la fabrică și a dlt-ului articolului în aceasta care, dacă nu este un buffer în aceasta din urmă, este egal cu timpul necesar pentru producerea sa.

Pentru fiecare articol din ordin sunt afișate: cantitatea comandată, expediată și primită.

Atunci când timpul de expediere nu este neglijabil, în timpul transportului cantitatea expediată va fi actualizată, dar nu și cea primită, care va fi actualizată doar la primirea mărfii.

Șabloanele de încărcare și de descărcare sunt inserate în tabelul *Facilities* (structură logistică).