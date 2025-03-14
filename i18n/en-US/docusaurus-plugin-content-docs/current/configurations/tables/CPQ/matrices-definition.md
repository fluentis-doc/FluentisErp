---
title: Matrix Definition (Definizione di matrice)
sidebar_position: 3
---

By opening this table, you access the search form for previously coded matrix definitions and a starting point for creating new ones.        
When opening a definition, the header data and two underlying tabs are present.

## Header (Testata)

The header data are as follows:
- **Type**: inactive field in this context;
- **Code/Description**: unique identifiers of the definition.
- **Business Object**: contains the business object for which this definition is valid.    

## Matrix Dimension Tab (Tab Dimensione matrice)

In this section, the [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) to be used for creating the matrix is selected, such as *Cut* and *Color*. To build a matrix, you can use tabular type Extra Data that provide the necessary values to populate the matrix. In the tab, within the grid on the right, called *Result Values*, all valid Extra Data for the specified business object in the header are listed. From this list, you can select the Extra Data that will populate the matrix and drag them into the grid on the left. This way, you specify that, for example, *Cut* and *Color* will make up the matrix. What size and color values will be valid will be specified in the table [Instance Matrices (Matrici di istanza)](/docs/configurations/tables/CPQ/instance-matrices).         
In this grid, you can also associate the position on the X and Y axes of the data.

## Support Matrix Definition Tab (Tab Definizione matrice supporto)

When it is necessary to use more than two Extra Data to compose the matrix, a support matrix must be used. This is divided into two grids.         
The left grid, called *Matrices*, contains the columns **Code** and **Description**, which identify the different support matrices. It is advisable to assign an appropriate code and description to clearly distinguish the Extra Data used and facilitate the identification of the reference combination.      
In the right grid, named *Matrix Detail*, valid Extra Data for the selected support matrix in the left grid are entered. Only valid Extra Data for this definition, already entered in the previous tab, can be chosen.