---
title: Korekcija žute zone
sidebar_position: 9
---

Vrednost **žute zone** automatski se izračunava procedurom za ažuriranje zona na osnovu vrednosti DDMRP parametara artikla.

Pomoću ove tabele moguće je prinudno postaviti drugačiju vrednost za određene datume.

Sistem za planiranje uzima u obzir eventualne korekcije zona prilikom izračunavanja NFP-a, čak i ako procedura za ažuriranje zona nije izvršena.

Žuta zona se izračunava kao proizvod prosečne dnevne potrošnje (**ADU**) i vremena nabavke artikla (**DLT**).

Ukoliko u kratkom vremenskom periodu dođe do značajne promene jednog od ova dva faktora, može se koristiti izuzetak za žutu zonu.

Na primer, to se dešava u slučajevima naglih promena potražnje u kratkom vremenskom periodu, kao što su promotivne kampanje, ili kada je unapred poznato da će doći do prekida u snabdevanju na određeni period (privremeno zatvaranje pogona, kolektivni godišnji odmor dobavljača i slično).

Naravno, izuzetak za zonu mora biti postavljen dovoljno unapred u odnosu na događaj kojim se želi upravljati.