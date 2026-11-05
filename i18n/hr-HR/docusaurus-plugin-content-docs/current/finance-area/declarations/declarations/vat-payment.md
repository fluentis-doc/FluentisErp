---
title: Plaćanje PDV-a
sidebar_position: 10
---

U ovom obrascu pohranjuju se rezultati periodičnih PDV-a koji su proračunati kao konačni.

:::important[Ažuriranje]
Od verzije 805 zapisi se u ovu tablicu pohranjuju **u svakom slučaju**, neovisno o tome radi li se o privremenom ili konačnom ispisu. Razlika je vidljiva putem oznake **Definitivno**, koja se nalazi u tablici.

Svako pokretanje privremenog ispisa ažurirat će vrijednosti za određeno razdoblje (pretporez, obračunani PDV i rezultat obračuna), ali neće mijenjati već pohranjene konačne vrijednosti (označene aktivnom oznakom *Definitivna*).

Privremeni ispis također **neće** ažurirati brojeve stranica niti blokirati računovodstvena knjiženja za određeno razdoblje. Te su radnje povezane isključivo s postupkom koji se izvršava u konačnom načinu rada.

Sve ručne izmjene vrijednosti u retku tablice *Uplate PDV-a* evidentirat će se u dodatnim poljima **Datum posljednje izmjene** i **Korisnik posljednje izmjene**.
:::

Za svaku konačno obrađenu likvidaciju bit će dodan odgovarajući redak iz programa.

Iz ove pozicije je moguće nastaviti sa otključavanjem konačne likvidacije jednostavnim brisanjem odgovarajućeg retka naredbom. **Izbriši obračune PDV-a**.

Također, nakon što izbrišete redak koji se odnosi na željeni obračun PDV-a za razdoblje, potrebno je **također** otključati **Ispis** u konačnom obliku sezonske PDV evidencije, na kojoj je isti bio ispisan, iz tablice [**Knjige PDV-a**](/docs/configurations/tables/finance/vat-books).

:::tip[Info]
Ako se koristi odvojen izvještaj o PDV-u koji je specifičan za likvidacije, otključavanje konačnog ispisa tog registra postaje suvišno. Stoga se preporučuje usvajanje ovog rješenja koje olakšava upravljanje likvidacijom na konačan način iz mjeseca u mjesec, oslobađajući od potrebe za ispisom i odvojenih izvještaja, posebno onog na kojem se pridružuje likvidacija, s potrebom za ponovnim ispisom svaki put kada je potrebno otključati likvidaciju.
::: 

Polje **Iznos**, konačni rezultat izračuna dugovanja / potraživanja PDV-a, može se uređivati i stoga je moguće, ako želimo, ručno zaokružiti vrijednost kako bismo, na primjer, primili zaokruživanje koje je potrebno provesti u godišnjoj PDV izjavi.

![](/img/it-it/finance-area/declarations/declarations/vat-payment/image02.png)

**Namirenje PDV-a grupe:** naznačava se da je izvršena likvidacija putem načina i funkcionalnosti grupe PDV-a.


<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>



