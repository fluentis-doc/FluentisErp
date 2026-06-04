---
title: Identifikacija izvora podataka za fizičke veličine korištene u modelu izračuna
sidebar_position: 2.4
---

:::tip NAPOMENA
Ovaj odjeljak usko je povezan s primjenom proširenih opcija kontrolinga.
:::

Nakon što se identificirala potreba za upravljanjem nositelja prijenosa na temelju fizičkih količina, kao peti korak javlja se potreba za određivanjem izvora iz kojih se može preuzeti vrijednosti tih fizičkih veličina. Ako se govori o radnim satima strojeva, radnim satima zaposlenika, tonama ili drugim jedinicama, mora se također identificirati gdje će se to izvući, kao i [*jedinice mjere*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) koje će se koristiti. Općenito, podaci se nalaze u proizvodnom okruženju i, ako se govori o radnim satima strojeva i zaposlenika, izvor su proizvodni izvještaji, pomoću kojih možemo mjesečno evidentirati stvarno utrošene sate rada i strojeva za centre. No, ti
podaci mogu također biti dostupni u vanjskom sustavu, iz kojeg se može preuzeti Excel datoteka i jednostavno uvesti u ***FluentisERP*** putem odgovarajuće procedure. Također, podaci se mogu dobiti praćenjem radnih sati administrativnog osoblja putem unosa sati na projektu, ili kroz ručni unos na početku godine, koji se potom može *proporcionalno rasporediti* prema periodizaciji povezanoj s fizičkim kretanjima.

:::tip NAPOMENA
Obrada [*nositelja troškova*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) temeljenih na količinama, kao i svih drugih takvih nositelja, prema zadanim postavkama uključuje blokadu obrade kada potrebna
količina za raspodjelu izvornog podatka nije dostupna u jednom od razdoblja koja se obrađuju. Ova postavka korisna je kako bi se spriječilo zaboravljanje valorizacije izvornog podatka, posebno kada je riječ o ručnom unosu podataka, a ne o podacima preuzetim iz proizvodnje.
Ipak, moguće je onemogućiti blokadu kako bi se primijenila prosječna vrijednost postojećih podataka (pogledati *upravljanje greškama* u nositeljima troškova), u slučajevima kada doista može nedostajati količina u određenom razdoblju (npr. tijekom
kolektivnih godišnjih odmora, poput kolovoza).
:::