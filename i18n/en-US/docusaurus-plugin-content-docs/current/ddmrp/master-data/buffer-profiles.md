---
title: Buffer Profiles 
sidebar_position: 4
---

A buffer profile defines common characteristics for many buffer items.

This way, each buffer item can be associated with its profile, making it easier and quicker to modify the related parameters; indeed, by making a change to a profile, the same will be automatically applied to all items associated with it.

A profile is identified by the combination of three parameters:

1. **part type**

   - M = manufacturing, i.e., part produced in the factory (finished product or semi-finished product)
   - I = intermediate, i.e., semi-finished part produced in the factory (this distinction from M is optional)
   - P = purchase, purchased part
   - D = distributed, part stored in a distribution center (in this case, the record cannot have an empty warehouse field)

2. **lead time category**

   Comparing items with the same part type, a lower and an upper value of lead time can be defined, allowing items to be grouped into three groups with an associated coefficient between 0 and 1.

   - S = short lead time items, items with short procurement time (coefficient between 0.61 and 1)
   - M = mid lead time items, items with medium procurement time (coefficient between 0.41 and 0.6)
   - L = long lead time items, items with long procurement time (coefficient between 0 and 0.4)

   The coefficient value is inversely proportional to the procurement time, since for items with a long lead time, it is preferable to have more smaller orders than fewer large orders, thus reducing the risk arising from delivery issues.

3. **variability category**

   Comparing items with the same part type, analyzing the variability on the demand and supply sides, it is determined whether a buffer is characterized by low, medium, or high variability.
   
   This is a more complex analysis than that of lead time as it must consider the variability of demand (for example, by checking the statistical dispersion of demand values over a significant period) and the variability on the supply side (for example, considering the statistical dispersion of supply delays), while keeping in mind if as children of the bill of materials or as parents, other buffers are present, which by their nature reduce variability.

   Three levels of variability are considered, associated with a coefficient between 0 and 1, as follows:

   - L = low variability (coefficient between 0 and 0.4)
   - M = mid variability (coefficient between 0.41 and 0.6)
   - H = high variability (coefficient between 0.61 and 1)

   The higher the variability, the higher the level of safety stock for the buffer (red zone), which is indeed proportional to the variability coefficient.