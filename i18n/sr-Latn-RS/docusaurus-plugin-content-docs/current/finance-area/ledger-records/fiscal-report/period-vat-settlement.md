---
title: Obrazac PDV-a
sidebar_position: 5
---

Ovom procedurom vrši se obračun PDV-a za izabrani poreski period.

Za pokretanje ovog izveštaja nije obavezno da registri PDV-a za izabrani period budu prethodno odštampani. Međutim, kako bi se preneo saldo iz prethodnog perioda, neophodno je da postoji konačna štampa obračuna PDV-a za prethodni period ili da je stanje ručno uneto u tabelu **[Plaćanja PDV-a](/docs/finance-area/declarations/declarations/vat-payment)**, čime se postiže isti efekat zaključavanja PDV perioda u računovodstvu.

U suprotnom, izveštaj se može odštampati, ali bez prenosa iznosa iz prethodnog meseca ili tromesečja.

Potrebno je definisati referentni period i godinu, pri čemu period može biti mesečni ili tromesečni, u skladu sa periodičnošću obračuna PDV-a definisanom u **[Parametrima knjiženja](/docs/configurations/parameters/finance/accounting-parameters)**.

Zatim se bira **Knjiga PDV-a** za koju će se izvršiti obračun.

Izveštaj se može prikazati u pregledu ili odmah odštampati.

Ako je odabran poslednji period poslovne godine, biće omogućena opcija za štampu **obračuna avansnog PDV-a**, pri čemu će izveštaj obuhvatiti prijave do datuma **20.12.gggg**.

**Datum uplate / Način uplate**: ova polja određuju tekst koji će biti prikazan na izveštaju u vezi sa datumom i načinom plaćanja PDV-a. Po potrebi mogu se koristiti i za unos dodatne napomene.

**Prikaži zaglavlje**: opcija je podrazumevano uključena. Isključuje se samo ako preduzeće koristi prethodno odštampane obrasce.

**Konačno**: aktiviranjem ove opcije štampa postaje konačna. Time se zaključava odgovarajući PDV period, ažuriraju se brojači stranica registra PDV-a i omogućava automatsko knjiženje prenosa stanja. Nakon konačne štampe referentni period će automatski biti postavljen na prvi naredni neobrađeni period, dok opcija za broj kopija više neće biti dostupna.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image01.png)

Samo pregled izveštaja **ne zaključava** obračunski period niti ažurira brojače. Period će biti zaključen tek nakon izvršavanja fizičke štampe (uključujući i štampu u datoteku), bez obzira na uspešnost samog procesa štampanja.

Konačna štampa omogućava aktiviranje opcije **Knjiženje obračuna**. Kada je uključena, aplikacija automatski učitava odgovarajuća konta iz računovodstvenih parametara, nakon čega korisnik treba samo da potvrdi vrstu knjiženja i referentni datum.

Po završetku procesa štampe automatski će biti kreirana dva knjiženja prenosa PDV-a, za dugovnu i potražnu stranu, na odgovarajuće PDV podkonte.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image02.png)

| Funkcija | Značenje |
| --- | --- |
| Pregled | Prikazuje pregled izveštaja pre štampe. |
| Štampaj | Pokreće fizičku štampu izveštaja. |

:::important VIDI TAKOĐE
[**VIDEO TUTORIJALI O PORESKIM IZVEŠTAJIMA**](/docs/video/finance/intro)
:::