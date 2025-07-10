---
title: Izračun vrijednosti kapitala uloženog u buffer-e 
sidebar_position: 4
---

Ova procedura izračunava prosječnu vrijednost kapitala uloženog u artikl koji se upravlja zalihama prema DDMRP logici (buffer).   

Izračun se provodi množenjem vrijednosti prosječne zalihe buffer-a, koja se dobiva kao zbroj crvene zone i polovice zelene zone, s jediničnim troškom artikla u buffer-u.   

Važno je naglasiti da se pri izračunu jediničnog troška uzimaju u obzir samo troškovi nabavnih materijala i vanjskih prerada, odnosno izravni i varijabilni troškovi, dok se ne uključuju neizravni troškovi poput troškova rada, amortizacije strojeva i slično.   

Glavna svrha ove procedure je provjeriti smanjuje li odluka o uvođenju ili uklanjanju buffer-a ukupnu vrijednost uloženog kapitala.    

Ako odluka dovodi do smanjenja ukupne vrijednosti kapitala, smatra se opravdanom, dok bi se suprotna situacija trebala izbjegavati.   

Ako artikl s buffer-om ima definiranu listu materijala, unutar koje postoji ogranak koji vodi do nabavnih proizvoda i koji predstavlja lanac kritičnih komponenti, odnosno onaj lanac koji određuje vrijednost dekupliranog vremena isporuke (DLT) matičnog buffer-a.   

Uobičajeno je da uvođenje buffer-a za jedan od takvih artikala smanjuje vrijednost dlt-a matičnog buffer-a, što dovodi do smanjenja njegove prosječne zalihe, dok se istovremeno uvodi nova zaliha za novi buffer.   

Budući da jedinični trošak raste što se više napreduje u hijerarhiji liste materijala, takva radnja obično dovodi do smanjenja ukupne vrijednosti kapitala uloženog u matični i podređeni buffer.   

Kako bi se potvrdila ili opovrgnula ova pretpostavka, potrebno je izvršiti ovu proceduru.   

Za ovaj izračun koriste se isključivo izravni troškovi, budući da se tradicionalni izračun pune jedinične cijene s raspodjelom neizravnih troškova putem troškovnih pokretača smatra neadekvatnim i obmanjujućim za donošenje odluka.   

Takav izračun pune jedinične cijene vrijedan je samo za potrebe vrednovanja zaliha u prethodnoj poslovnoj godini kako bi se ispunile računovodstvene obveze u skladu s GAAP (Opće prihvaćenim računovodstvenim načelima) koji su valjani na globalnoj razini. To je zato što se tek naknadno s točnošću mogu odrediti proizvedene količine, omogućujući pouzdan izračun jedinične cijene.   

Za nabavne artikle uzima se u obzir vrijednost navedena u poljima troškova unutar šifarnika artikala, pri čemu se koristi zadnja, prosječna ili standardna cijena, ovisno o odabiru korisnika u trenutku pokretanja procedure.   

Kod artikala proizvedenih u vanjskoj proizvodnji, trošak prerade (posljednja, prosječna ili standardna cijena, ovisno o odabiru korisnika) određuje se oduzimanjem ukupnog troška sastavnih dijelova u listi materijala od ukupnog troška gotovog artikla.   

Važno je napomenuti da se izračunate vrijednosti temelje na veličini crvene i zelene zone svakog buffer-a, kako su definirane u tablici DDMRP parametara. 

Ako u trenutku pokretanja procedure postoje iznimke u čimbeniku prilagodbe potražnje (Demand Adjustment Factor) ili u zonama gdje je prethodno izvršena procedura ažuriranja zona, tada će i procjene vrijednosti uloženog kapitala uzeti u obzir te prilagodbe. Iz tog razloga, ista procedura može dati različite vrijednosti za isti artikl u različitim vremenskim trenucima. 

