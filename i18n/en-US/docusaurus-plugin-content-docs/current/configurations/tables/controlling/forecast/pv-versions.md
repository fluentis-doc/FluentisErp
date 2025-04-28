---
title: Sales Forecast Versions
sidebar_position: 4
---

:::important What it is for
They are prerequisites for managing Sales Forecasts and allow for managing one or more forecast simulations for the same calendar year.
:::

We can perform the management from the menu Configuration > Tables > Controlling > Forecast > Sales Forecast Versions. 

By pressing the button:

- **New base version**: the system will insert a version 0 for the year following the last year already entered with the indicated Default information;
- **Duplicate version**: enabled if only one version is selected from the list, the system will duplicate the data of the selected version and create a new version for the same year as the selected source version, with the version number being the maximum version number entered for the year incremented by one unit and with the Default information not indicated;
- **Delete version**: enabled if at least one version is selected from the list, the system will delete all selected versions from the list, after a confirmation message; at the end of the processing, all versions that could not be deleted due to their use in forecasts will be displayed; it will not be possible to delete a forecast if it is already used in other management;

The other buttons are not used for managing [monthly sales forecasts (Previsioni di vendita mensili)](/docs/controlling/sales-forecast/monthly-sales-forecust).

The information managed in the main list is:

- **Version, Year, and Default**: these are information that cannot be edited by the user as they are proposed by the buttons [New base version] and [Duplicate version];
- **Active**: indicates whether or not it is possible to enter new forecasts;
- **Description**: proposed as Year/Version but with the possibility of being changed by the operator.

All other information is not used for managing [monthly sales forecasts](/docs/controlling/sales-forecast/monthly-sales-forecust).