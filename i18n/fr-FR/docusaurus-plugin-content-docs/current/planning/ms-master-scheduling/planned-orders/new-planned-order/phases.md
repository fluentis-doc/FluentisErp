---
title: Phases
sidebar_position: 3
---

Ce tab est formé par une grille, à l'intérieur dans lequelle l'utilisateur peut insérer manuellement les phases de travail qu'on veut qui viennent exécutés par la production de l'article objet de l'ordre planifié (seul si de production). Ceci résult déjà compilé dans le cas où l'ordre planifié provient par la planification général ou par le traitement MRP, au contraire, quand l'ordre vient inséré manuellement il faut, par établir les données par le cycle de travail de l'article, cliquer sur le bouton 'Achèvement des données ordre' présent dans la barre d'outils. Les colonnes présents dans la grille sont le suivants:

**Code phase/Phase/Sous-phase**: avec un double click on ouvre le relatif Aide phase de travail dans lequelle est possible de sélectionner la relative phase et sous-phase. Le code phase vient ramené;

**Ctrl Qty**: ce flag indique si le matériel doit être soumis au contrôle de la quantité d'abord de son utilisation;

**Phase de prod.**: si le flag est sélectionné indentifie que la phase en cause est une phase productive, et donc devra être signalée;

**Centre de travail**: à partir de ce menu déroulant est possible d'établir le Centre de travail. Ceci vient proposé en automatique, reprise par la phase qui a été précédemment sélectionnée et insérée dans la grille;

**Date début/fin prévue**: il se réfère à les dates de début et fin de la relative phase; en changeant les Dates prévues de début et de fin travail viennent automatiquement modifiées aussi les derniers. Ces viennent calculées sur la base des temps insérés dans les phases de travail, et plus précisément sur la base au majeur entre le temp d'ouvrier et le temp de machine total par la phase sélectionnée;

**Temp machine**: il est le temp utilisé par la machine par realiser la phase, rapportée à la quantité des pièces par phase;

**Numéro machine**: il indique le numéro de machine impliquées en cette phase;

**Qté pièces par phase**: il indique le numéro des pièces par phase;

**Temp ouvrier**: il est le temp impliqué par l'ouvrieur par realiser cette phase, rapportée à la quantité de pièces par phase;

**Numéro ouvriers**: il est le numéro d'ouvriers impliqués en cette phase;

**Compte sous-traitant/Sous-compte sous-traitant**: avec double click sur la case s'ouvre un aide par pouvoir sélectionner le compte et sous-compte du rélatif sous-traitant. Cette case est active seul si la phase est désignée comme phase externe. Il faut remarquer que le sous-traitant vient reprise par la phase de travail insérée dans le cycle de travail de l'article;

**Description centre de travail**: en ce champ apparaîte la description du centre de travail;

**Description sous-traitant**: en ce champ apparaîte la raison sociale du sous-traitant;

**Description phase/sous-phase**: en ce champ apparaîte la description de la phase sélectionnée.

Dessous de la grille sont présents autres données rapportés toujour à la phase sélectionnée dans la grille:

**Machine**: en ce menu déroulant est possible de sélectionner le code (et description) de la machine. Elle vient proposée en automatique, reprise par le centre de travail qui a été précédemment inséré dans la grille;

**Groupe MDO**: en ce menu déroulant est possible de sélectionner le code (et description) du groupe main-d'œuvre. Elle vient proposée en automatique, reprise par le centre de travail qui a été précédemment inséré dans la grille;

**Type**: en ce menu déroulant est possible d'établir le type de travail (interne ou externe);

**Chevauch.**: à travers ce menu déroulant est possible d'insérer la typologie d'un éventuelle chevauchement entre les phases. Est possible d'avoir un chevauchement total (en ce cas la phase en objet est chevauchée totalement  à la phase indiquée successive), À pièces (en ce cas il faut indiquer après quants pièces produits par cette phase aura début la phase successive), À temp (en ce cas il faut indiquer après quants minutes aura début la phase successive);

**UM temps**: en ce menu déroulant paraîte l'Unité de mesure temps de la phase; est possible de décider de gérer les temps de la phase en seconds, minuter, heurs et jours. Normalement est géré en minutes les temps des phases internes et à jours ces des phases externes, mais évidemment dépend de la typologie d'entreprise par lequelle le travail s'établi;

**Valeur**: il indique la valeur de l'éventuel chevauchement, en utilisant les critères spécifier sur;

**Chevauchem. rapportée à la phase/sous-phase**: il indique le code de la phase et sous-phase qui présentent une chevauchement avec la phase en objet. Normalement on indique la phase successive, mais seul s'on parle d'une habitude;

**Engagement**: s'activé le flag, signifie qu'on veut que le temp d'attent/queue augmente le temp d'engagement du centre de travail en celle phase;

**Temp d'attent ou queue**: il indique l'éventuel temp d'attent/queue prévue par cette machine.






