# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json
  ?avoid=highways
  &metric
  &destination=place_id%3AChIJ_UoMkUXKcFMRY5Ss2r6ur8o
  &mode=bicycling
  &origin=place_id%3AChIJpTvG15DL1IkRd8S0KlBVNTI
  &waypoints=optimize%3Atrue%7Cplace_id%3AChIJESsa-ftz6lIRZMq5xvoaKis%7Cplace_id%3AChIJMWNFlZXFcFMRLmkenl8xtkY%7Cplace_id%3AChIJ1T-EnwNwcVMROrZStrE7bSY
  &key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON

JSON response is in mydirections.js

____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
