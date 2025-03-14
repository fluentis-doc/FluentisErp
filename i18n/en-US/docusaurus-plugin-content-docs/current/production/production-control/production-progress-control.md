---
title: Production Progress Control
sidebar_position: 1
---

This form allows you to print the report **Production Progress Control** which shows the progress status of individual phases for each production job order via a *progress bar*, based on time or quantity produced.

The report includes a field *State* that indicates the status of the phase with a colored square having the following meanings:

- **Green**: indicates that the phase is not delayed;       
- **Red**: indicates that the phase is delayed;        
- **Gray**: indicates that the phase is completed.

The **Progress Percentage** of the phase in the chart is calculated based on the sum of produced and rejected quantities in the production declarations, or based on the greater value between the sum of machine times and the sum of labor times. The user can choose the valuation criterion for the **Progress Percentage** via the appropriate flags present in the *Estim. end work* box in the report filter.       
If the **Progress Percentage** exceeds 100%, a *Red triangle* will be shown next to the chart, indicating the exceeding of the planned value.