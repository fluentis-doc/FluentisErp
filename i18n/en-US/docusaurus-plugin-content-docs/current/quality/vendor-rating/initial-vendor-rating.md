---
title: Initial and Periodic Ratings 
sidebar_position: 2
---

Management can be found at the path **Quality > Vendor Ratings > Initial and Periodic Ratings**.


:::important Purpose
*Initial and Periodic Ratings* is one of the methods for evaluating suppliers that are made available for their assessment. 
This "subjective" method is manual and is commonly used for initial ratings and subsequent ratings.

The management allows you to enter new *Initial and Periodic Ratings* or to search for existing ones to view, modify, or delete them.
:::


## Command Buttons


### ![](/img/neutral/common/search.png) Search Initial and Periodic Ratings

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to view the results within the results grid.


### ![](/img/neutral/common/new.png) Enter Initial and Periodic Ratings

To enter new *Initial and Periodic Ratings*, you must click on the first empty row in the grid or press the **New** button.   
For the new record, at least the mandatory fields required by the program must be filled in: **Rating Date**, **Supplier**, and **Rating Type**.


### ![](/img/neutral/common/select-all.png) Associate Checklist

Button enabled only if a single *Initial and Periodic Rating* is selected and the *Supplier* has not already been evaluated.   
The *Checklist Help* is displayed from which it is possible to select only one. 
If there is already a *Checklist* associated with the row, you will be asked whether to replace the existing one (and its related *Questions*) with the newly selected *Checklist*.


## Data Management


### Initial and Periodic Ratings

This is the list where the main information for the *Initial and Periodic Rating* is entered.   
The list consists of the following information:   
> **Rating Date**: (mandatory field) is the date the rating is carried out.   
> When entering a new rating, the current date is automatically proposed.   
>
> **Supplier**: (mandatory field) is the corporate name of the *Supplier* being evaluated.   
>
> **Rating Type**: (mandatory field) is the code of the *Rating Type*.   
> When entering a new rating, the *Rating Type* indicated in the *Vendor qualification parameters* is proposed.   
>
> **Checklist**: is the code of the *Checklist*.   
> When entering a *Supplier*, the *Checklist* present in its *Accounting Data > Quality Data* and the related *Questions* are automatically proposed.   
> Modifying a *Checklist* results in the replacement of the existing *Descriptions/Questions* upon request.
>
> **Auditor**: is the code of the *Auditor* who carries out the rating.   
>
> **Rating Reason**: free notes on the subject, is a description of the reason for the rating.   
>
> **Rating**: is the *Rating* given to the *Supplier* by the *Auditor*.   
> The cell is colored with the background and text colors specified in the *Vendor Ratings* table.   
> If the *Rating* assigned is associated with a *Vendor Ratig* with *Automatic Suspension* the evaluated *Supplier* will be *Suspended* from the *Rating Date*. 
> Restoration of the suspension must be done manually by the designated *Company Function*.   
> Once a *Rating* is associated, the information of: *Rating Date*, *Supplier*, and *Rating Type* will no longer be modifiable.   
>
> **Description of Rating Type**: is the description of the *Rating Type*.   
> **Description of Checklist**: is the description of the *Checklist*.   
> **Description of Auditor**: is the description of the *Auditor*.   
> **Notes**: free annotations.  


### Descriptions/Questions

This is the list of questions/activities to use/perform for ratings of suppliers.   
The list consists of the following information:   
> **Sequence**: is the sequence of implementation of the *questions/activities*.   
> **Description/Question**: free notes on the subject.   
> **Answer**: free notes on the subject.   
> **Category**: it is the *Category* associated with the *Description/Question* if retrieved from the *Check-list*. 
> **Rating Expected**: is the minimum required *Rating Level* for the rating.   
> **Weight (%)**: indicates the *weight* (importance), expressed as a percentage, associated with the *Description/Question* if taken from the *Check-list*.
> **Rating Detected**: is the evaluated *Rating Level*.   
> The character turns *Red* if the *Rating Detected* is lower than the *Rating Expected*.   
> **Weight Score**: it is the *Score* automatically given by the system to the evaluation provided for the specific *Description/Question* based on the *Level* of the *Rating detected*;  
> this score is calculated (Weight Score = EvaluationLevelDetected.Level / 100 * CheckListQuestion.WeightPercentage).
> **Notes**: free annotations.


:::tip Method used for calculating the Weight Score 
For each individual *Description/Question*, where the information for *Weight (%)* and *Rating detected* has been entered, the following expression is applied:  
- **Weight Score** = **Level** of the **Rating detected** / **100** * **Weight (%)**;  
- **Weight Score** = **15** / **100** * **20** = **3**.  
:::


### Extra Data

It is possible to enter general [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for the *Initial and Periodic Rating*. 


For anything not detailed in this document on the common functioning of the forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).