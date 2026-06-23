---
title: Upravljanje autorskim pravima
sidebar_position: 9
---

Upravljanje pravima na naknadu (*royalties*) slično je upravljanju provizijama agenata, sa kojima deli deo zajedničkih podešavanja.

### Konfiguracija artikla

Artikli koji podležu autorskim pravima (*royalties*) moraju imati aktiviranu odgovarajuću oznaku (*Autorska prava*) na kartici **Opšte**.

Prilikom unosa takvog artikla u prodajne dokumente, Fluentis će samo za artikle sa aktiviranom oznakom identifikovati odgovarajućeg dizajnera (agenta) koji poseduje autorska prava na tom artiklu.

### Konfiguracija šifarnika agenta

Konfiguracija subjekta koji poseduje autorska prava nad različitim artiklima vrši se kroz definisanje šifarnika agenta.

Po pravilu, ovi subjekti ne podležu porezu po odbitku niti posebnim doprinosima, pa je potrebno kreirati posebnu [**Kategoriju agenata**](/docs/configurations/tables/sales/agent-category/) i poseban [**Tip poreza po odbitku**](/docs/configurations/tables/finance/withholding-tax-types/) koji ne uključuje ni doprinose ni procente poreza po odbitku.

Na kartici **Obračun** bira se tip poreza (koji se može kreirati ili odabrati, kao što je prethodno navedeno, sa stopom od 0%), a zatim kriterijum za ostvarivanje provizije, kao i kod standardnih agenata.

:::tip VAŽNO
Specifičnost podešavanja nalazi se na kartici **Direktne provizije**, gde je potrebno definisati tip provizije **23 – Autorska prava**.
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/tipo23.png)

Ulaskom u detalje ovih podešavanja (putem opcije **Detalj označenog procenta**) moguće je primeniti dva različita pristupa:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/dettaglio.png)

- Uneti detaljan spisak artikala koji podležu autorskim pravima (Fluentis neće dozvoliti unos artikala koji nemaju aktiviranu ovu oznaku);

- Ili definisati proizvodnu liniju koja sadrži artikle podložne autorskim pravima, pod pretpostavkom da proizvodna linija identifikuje dizajn (ili element) koji podleže autorskom pravu. **Ipak, samo artikli sa aktiviranom oznakom autorskih prava biće predmet odgovarajućeg procenta**, nije dovoljno da pripadaju liniji povezanoj sa šifarnikom agenta.

:::danger VAŽNO
Nije dozvoljeno uneti kod agenta X artikal (ili liniju) ako je isti artikal već definisan kod drugog agenta (direktno ili preko povezane linije). Za isti artikal nije moguće definisati više dizajnera koji ostvaruju pravo na autorsku naknadu.
:::

### Logika korišćenja

Nakon što su podešavanja izvršena na artiklu i agentu, logika rada je sledeća:

Prilikom unosa artikla u prodajni dokument, Fluentis proverava da li artikal podleže autorskim pravima. Ako podleže, sistem pronalazi agenta koji ima odgovarajuće podešavanje provizije (direktno za artikal ili za povezanu liniju artikala) u okviru tipa **„23 - Autorska prava“** i automatski dodaje odgovarajući red provizije u dokument.

Dalja obrada nakon ovog obračuna identična je obradi bilo kog drugog agenta, uključujući preglede agenata i obračune dospelih isplata.

:::tip NAPOMENA
Razlika između standardnog agenta i nosioca autorskih prava je u tome što za nosioca autorskih prava nije potrebno njegovo povezivanje sa svakim pojedinačnim kupcem kako bi Fluentis prepoznao procenat koji treba primeniti na prodaju. Kod standardnih agenata takvo povezivanje je obavezno.
:::