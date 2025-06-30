---
title: Uvod u šifarnik DDMRP-a 
sidebar_position: 0
---

U ovom odjeljku nalaze se matični podaci o artiklima koji se upravljaju prema DDMRP logici, odnosno takozvani bufferi, odnosno strateške zalihe koje se dimenzioniraju i obnavljaju prema DDMRP logici.

Prvo, potrebno je obavijestiti Fluentis da je artikal DDMRP buffer putem kartice [**Parametri MRP**](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) selekcijom vrijednosti za Politiku opskrbe među dostupnim opcijama (bufferi dinamički, bufferi fiksni, bufferi min-max).

Dinamički bufferi predviđaju promjene u vremenu triju karakterističnih zona (zelena, žuta, crvena), a time i prosječnu razinu zaliha; fiksni bufferi koriste fiksne vrijednosti zona, pa je i prosječna razina zaliha nepromjenjiva (koriste se u slučajevima ograničenog skladišnog prostora, investicijskih ograničenja, sigurnosnih zahtjeva itd.); min-max bufferi koriste samo crvenu i zelenu zonu. 