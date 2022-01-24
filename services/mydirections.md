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
{% raw %}
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJpTvG15DL1IkRd8S0KlBVNTI",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJESsa-ftz6lIRZMq5xvoaKis",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ1T-EnwNwcVMROrZStrE7bSY",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJMWNFlZXFcFMRLmkenl8xtkY",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ_UoMkUXKcFMRY5Ss2r6ur8o",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 51.178406,
               "lng" : -79.38303979999999
            },
            "southwest" : {
               "lat" : 42.5901143,
               "lng" : -115.5708028
            }
         },
         "copyrights" : "Map data ©2022 Google, INEGI",
         "legs" : [
            {
               "distance" : {
                  "text" : "2,211 km",
                  "value" : 2211278
               },
               "duration" : {
                  "text" : "4 days 15 hours",
                  "value" : 398655
               },
               "end_address" : "Winnipeg, MB, Canada",
               "end_location" : {
                  "lat" : 49.8951374,
                  "lng" : -97.13836839999999
               },
               "start_address" : "Toronto, ON, Canada",
               "start_location" : {
                  "lat" : 43.6532565,
                  "lng" : -79.38303979999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 99
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 43.6524799,
                        "lng" : -79.38296489999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eTake the stairs\u003c/div\u003e",
                     "polyline" : {
                        "points" : "{_miG~nocNl@QHCVIHCXI?A?ADABADA@?BBFJ@FFN"
                     },
                     "start_location" : {
                        "lat" : 43.6532565,
                        "lng" : -79.38303979999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "47 m",
                        "value" : 47
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 43.652871,
                        "lng" : -79.38317289999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBay St.\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_{liGnnocNOH}@^"
                     },
                     "start_location" : {
                        "lat" : 43.6524799,
                        "lng" : -79.38296489999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "45 m",
                        "value" : 45
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 43.652962,
                        "lng" : -79.382633
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBay St.\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "m}liGxoocNGo@I{@"
                     },
                     "start_location" : {
                        "lat" : 43.652871,
                        "lng" : -79.38317289999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "91 m",
                        "value" : 91
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 39
                     },
                     "end_location" : {
                        "lat" : 43.6521792,
                        "lng" : -79.38231689999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBay St.\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_~liGllocNfBg@r@U"
                     },
                     "start_location" : {
                        "lat" : 43.652962,
                        "lng" : -79.382633
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 150
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 63
                     },
                     "end_location" : {
                        "lat" : 43.6511725,
                        "lng" : -79.3813012
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay St.\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "cyliGnjocNHEBCDEBC@C@C@CBC@IBIBKBMHc@@G@C@E@C@C@ABC@CBAxBo@"
                     },
                     "start_location" : {
                        "lat" : 43.6521792,
                        "lng" : -79.38231689999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1667
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 422
                     },
                     "end_location" : {
                        "lat" : 43.6469688,
                        "lng" : -79.4011048
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRichmond St W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eTurn is not allowed Mon–Fri 7:30 AM – 6:30 PM\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yrliGbdocNx@jG\\fCXpBDZBPHn@Hl@XnBR~ABT@LDZF^BPHn@PjAJ|@BNR~Ab@~CZdC\\jCL`AXrBv@zFR`B@H@F@D@DBDBHBHLZ\\bA@DBD@D@F@LFb@Jr@D^Hn@PhA^lCDb@BL?D@F?F@F?N?P?L?NC|@AR@N?F?B?D@B@FBRBPNnANlABTPvAHn@DTDZ@TR|ANjABVHn@P~A@BR~A?B"
                     },
                     "start_location" : {
                        "lat" : 43.6511725,
                        "lng" : -79.3813012
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 293
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 96
                     },
                     "end_location" : {
                        "lat" : 43.6444455,
                        "lng" : -79.40005699999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePortland St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qxkiGz_scNh@OnBm@~Ag@TIRE^Mx@WxBs@"
                     },
                     "start_location" : {
                        "lat" : 43.6469688,
                        "lng" : -79.4011048
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 993
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 227
                     },
                     "end_location" : {
                        "lat" : 43.6420487,
                        "lng" : -79.4119498
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKing St W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yhkiGjyrcNPtAL|@`@fDJz@Hj@TdBRnBVvBx@|GP~AHj@Jx@x@`Hf@bEDXRfBZhC@H@HHr@LbATvBX|B"
                     },
                     "start_location" : {
                        "lat" : 43.6444455,
                        "lng" : -79.40005699999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 906
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 213
                     },
                     "end_location" : {
                        "lat" : 43.63437,
                        "lng" : -79.40846449999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eStrachan Ave\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eTurn may not be allowed at certain times or days\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yyjiGtcucNz@S`@MVGx@UnA_@z@WbA]JCb@OFAh@SfA_@\\Mh@QNE?A`@KRELEh@Ob@Mb@M~@YfA[vAa@RGj@Od@QVGPEPG\\KLCVIbBg@LEVKJETONKHILOR[Xi@"
                     },
                     "start_location" : {
                        "lat" : 43.6420487,
                        "lng" : -79.4119498
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 261
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 39
                     },
                     "end_location" : {
                        "lat" : 43.632303,
                        "lng" : -79.4099823
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yiiiGzmtcNRTPLLFPHRN^Tb@\\fAn@d@X^Vt@d@h@`@PJ"
                     },
                     "start_location" : {
                        "lat" : 43.63437,
                        "lng" : -79.40846449999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1096
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 184
                     },
                     "end_location" : {
                        "lat" : 43.6300088,
                        "lng" : -79.4230288
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMartin Goodman Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{|hiGjwtcN?R@RATALALALAL@H?D@J@RFX@FBD@B@DBBBBDBBF?@@DBHBPLl@Nr@v@pD`@pBJf@BHDRBNHd@BRDVFd@?BBNBJBF@F@BBDBFBF?D@B@F?D@PB\\@J?F?H@J@NBTBVB^@D@FBJ@JHt@Fn@D\\b@|EBd@@DBZBRLtAXrC?@@@Db@?F?B?B?@?BA@?@AB?@?BA@?B?B@J?F?H@D@B@B@B@B?D@F?J?\\FdBBl@F~A?@FbBDlAD~A@H?F@B?D"
                     },
                     "start_location" : {
                        "lat" : 43.632303,
                        "lng" : -79.4099823
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 187
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : 43.6298592,
                        "lng" : -79.42533589999999
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eMartin Goodman Trail\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "qnhiG|hwcN@L@H?N@L?P@\\?Z@T@V@X@D@T?R@T@Z@\\?R@R@\\?L@J?L?T"
                     },
                     "start_location" : {
                        "lat" : 43.6300088,
                        "lng" : -79.4230288
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 1982
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 341
                     },
                     "end_location" : {
                        "lat" : 43.6368803,
                        "lng" : -79.44716529999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eMartin Goodman Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "smhiGjwwcNAHARAP?NCd@AB?FAJADCJm@pCCHOl@GVCHENYp@Mh@EJAH?FAD?D?LAFAF?DCFABEDCDEFCHEHCJWbAe@jBId@CNAFAJ?F?H?BAVADCREp@CVAV?X@V@R@R@R?J?DALCNEXEVAL?@?H?P?L?FBPBLDPBJ?H?HAJAHENCJALCPI`@CJELCDEJGPEH?@ELEXABETOt@CPI`@CJAHELGREPIXAFI^ETGX?DANCTAf@ALCJGZIZGREJEHEHGHKNEDUXY^[^IJOTYb@ILSPIFEHCBCHUf@Uf@GLGJUf@Wf@MVOZQd@GNCJM\\Sn@Od@Sl@KZQf@Sh@eAxCELOj@Oj@CLGXADANAB]`BKf@Qx@CHIXOl@ITI\\i@|AKXIVQj@GREPM`@M`@@D?B?FCJCPCNAFAJ?H?L?N?^@TA`@CZAZC\\E\\@L?F?D?J?H?N?R"
                     },
                     "start_location" : {
                        "lat" : 43.6298592,
                        "lng" : -79.42533589999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2338
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 424
                     },
                     "end_location" : {
                        "lat" : 43.6309778,
                        "lng" : -79.4720705
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eMartin Goodman Trail\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "oyiiGx_|cN?L?J?NAPCb@?DAZGj@YxBKlAIx@a@`EIn@O~AGn@Kx@Ef@Gn@KnAEd@?D?B?B?F@D@BDRBJBJ?HAPAHGNEJA@EJCFCF?JEx@KxCEjBAxB?B@`B@VHbBDx@Dj@?FLzATxBLbABRBJ@JJ`ADR@J@DBBDFHLVf@P`@Ph@Ld@DNBPBT@T?J@J@JBPBPDPL^LXPr@ZtA\\nB@H@JBN@J@J?J?JAH?HALARAP?NAP?R?L?L?L@H@LBNFZHd@VfANn@@LJ`@Nl@Nh@Lb@@FBF@D@@@B@@@BB@D@@@J@D@H@HDFBFDFDBDBBDDBHDJDNJ\\Lj@J^HXBLFTVp@FJXt@N\\Rb@`@z@BBBFBHFFDFDBLDPJTNHHLJVHZFXNPNRTFLBBFTDP?BHb@D\\FT@FFXDPHNLJBBTJDFLHRN^Zd@^B@TP^ZTTLLFFHFn@l@HH"
                     },
                     "start_location" : {
                        "lat" : 43.6368803,
                        "lng" : -79.44716529999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4 m",
                        "value" : 4
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 43.6309543,
                        "lng" : -79.47203469999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sthiGl{`dNDG"
                     },
                     "start_location" : {
                        "lat" : 43.6309778,
                        "lng" : -79.4720705
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 170
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 43.6299534,
                        "lng" : -79.4731127
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mthiGd{`dNHLFJHNFHFJDFDDDBFDHBb@LBBFBFDDDDBB@B@FAF?FAB?B?D?D@@@B@BD@B?B@??F?F?FAFEX?BA@C@"
                     },
                     "start_location" : {
                        "lat" : 43.6309543,
                        "lng" : -79.47203469999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "18 m",
                        "value" : 18
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 43.62980160000001,
                        "lng" : -79.4731767
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at \u003cb\u003eHumber Bay Park E Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "enhiG|aadN\\L"
                     },
                     "start_location" : {
                        "lat" : 43.6299534,
                        "lng" : -79.4731127
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 252
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 44
                     },
                     "end_location" : {
                        "lat" : 43.6284573,
                        "lng" : -79.47539669999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gmhiGjbadN@@@@@@@@?B?@@B?DALCZAJAHDLFNFPHVDHFFLRFH@D@B@B@H@@BNDPBFBDBBBBDBDDBBDBDBD@BBFBNJLHJFFFDBDBHDFDDDBDBB@B@B?@BD@FBD@F@BB@@B"
                     },
                     "start_location" : {
                        "lat" : 43.62980160000001,
                        "lng" : -79.4731767
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "55 m",
                        "value" : 55
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 43.6279851,
                        "lng" : -79.47556299999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{dhiGfpadNDAD?B?DAB?@@D?@@@?B?BBD@DBFBBBHDLF"
                     },
                     "start_location" : {
                        "lat" : 43.6284573,
                        "lng" : -79.47539669999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "81 m",
                        "value" : 81
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 43.6273488,
                        "lng" : -79.4759657
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "}ahiGfqadND?@@D@F@HBFBH@B@HBD@DBDBD@D@B@B@BBBBB@@D@B?@BB@FBF"
                     },
                     "start_location" : {
                        "lat" : 43.6279851,
                        "lng" : -79.47556299999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 410
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 68
                     },
                     "end_location" : {
                        "lat" : 43.6238534,
                        "lng" : -79.4772272
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}}giGxsadNF?F@D?F@H?H@F@H@H@JBJ@VHJDF@JFHBFFFDDDFBFBF@F@F?F@D?FBLDFB@?LFHDFDHDFFD@DBF@F@F?F?H?N@L?J@L@H@F@FBPFLDD@D?H@H?D?H?FAF?DAH?D?D?D@B@D@B@F@D@DBDBFDFDLJLJDFBBDDFH"
                     },
                     "start_location" : {
                        "lat" : 43.6273488,
                        "lng" : -79.4759657
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "19 m",
                        "value" : 19
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 43.6238709,
                        "lng" : -79.47745949999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eHumber Bay Park E Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ahgiGt{adNAJAH?J?J"
                     },
                     "start_location" : {
                        "lat" : 43.6238534,
                        "lng" : -79.4772272
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 276
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 51
                     },
                     "end_location" : {
                        "lat" : 43.6223704,
                        "lng" : -79.47979389999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHumber Bay Park E Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ehgiGb}adNB?B@@@B@BBDDDFDFFJDHDDBDDFDDDDDB@@FDLHLHHFFDFB@?HFJDFDHDHDFDD@@@FFJJLJHHFJDFBFBH@FBH@H@H@LFlB?PAZ"
                     },
                     "start_location" : {
                        "lat" : 43.6238709,
                        "lng" : -79.47745949999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 169
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 43.620959,
                        "lng" : -79.480413
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eHumber Bay Park E Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "y~fiGtkbdNFHDFDHHJHHHDLHFBHDTHLBPD\\BF@@?NBj@HVDD?H@D?"
                     },
                     "start_location" : {
                        "lat" : 43.6223704,
                        "lng" : -79.47979389999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 219
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 38
                     },
                     "end_location" : {
                        "lat" : 43.6193584,
                        "lng" : -79.4810885
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHumber Bay Park W Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "_vfiGpobdNFHFLHJBDJNHJ?@HJDJDJHRJT@BDHBDDBB@B@@?DBb@NJ@FBB@D@FBLKROLKJEJGHE@?FCFCHCDC"
                     },
                     "start_location" : {
                        "lat" : 43.620959,
                        "lng" : -79.480413
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 155
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 43.6185024,
                        "lng" : -79.48247069999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eHumber Bay Park W Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "_lfiGxsbdNPDB@^HDBDDDHDF@BBFFHDLBF@DNd@HXDPNj@Rt@"
                     },
                     "start_location" : {
                        "lat" : 43.6193584,
                        "lng" : -79.4810885
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 164
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 43.6180285,
                        "lng" : -79.4843094
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "sffiGl|bdNBN@F?J@\\Br@?J@D@B@BBDd@`A\\p@@p@@r@"
                     },
                     "start_location" : {
                        "lat" : 43.6185024,
                        "lng" : -79.48247069999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 600
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 105
                     },
                     "end_location" : {
                        "lat" : 43.61357530000001,
                        "lng" : -79.48717309999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ucfiG|gcdNp@z@LLJJNRJPDDHHHHDDB?JDLDL@HBHBFBDBF?HAH@J?HBF@LFJHJHFDJFHBD@J@HARETERCNA@?F@F?FBHB@?LFNJx@b@JDFBH@F?B@B?HBHBJDHDJHD@@@HDJBJ@H?J?\\@LAN?NBNDLFJJDJBLBN?R?\\@T?J@J@JBL@JBFBD@B"
                     },
                     "start_location" : {
                        "lat" : 43.6180285,
                        "lng" : -79.4843094
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 377
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 78
                     },
                     "end_location" : {
                        "lat" : 43.6107674,
                        "lng" : -79.48738179999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "{geiGxycdNFFFHHFLHJFF@@@LBHBH@H@F?D?FADADCFEDEDIDIBIDKDGBGDG@EBC@A@ADC@ADABAD?B?B?@?@@B@B@HDFDVNZPHBD?FABADCDGFKDIBEFCDAFAD?F?H@F?D@F?DAD?D?DADAFAHEBABAB?BAB?B@D?B@B@BBBBBBFJBF@H@F?L@LBJ?F"
                     },
                     "start_location" : {
                        "lat" : 43.61357530000001,
                        "lng" : -79.48717309999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 218
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 43.6109568,
                        "lng" : -79.4900698
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eNorris Crescent\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ivdiGb{cdN?\\?DA\\Cb@?BCd@Ch@Ch@AV?JCh@C\\?DAT?V?D?`@C|@Cn@"
                     },
                     "start_location" : {
                        "lat" : 43.6107674,
                        "lng" : -79.48738179999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.7 km",
                        "value" : 2707
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 545
                     },
                     "end_location" : {
                        "lat" : 43.5982788,
                        "lng" : -79.5142618
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLake Shore Blvd W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "owdiG|kddN|ALrAJD@\\BjBHvADfADj@BlGXN@F@D@D@PDRDb@NHB`@Lr@Vb@P\\N^LVLVLXNJHLH^ZNNPNXXRVNPFJJLHJJPDJHL@B@BHPLTN\\Zt@Tp@Ph@HVFRHX\\fARn@Vx@V|@Nd@HXHXJ\\BPDT@J@N@R@P@D?JB|@H|BBl@@`@@V@XD\\BR@HHj@RvAXpBDZn@~Ep@~En@fFj@dEFTn@|Er@hFr@nFl@nEl@nE`@zCDVNhA^tCDXl@nEPnARNJHBF@@@BBDFHDFFLFJBHBFJPJPHLLNJLBD"
                     },
                     "start_location" : {
                        "lat" : 43.6109568,
                        "lng" : -79.4900698
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 125
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 43.597204,
                        "lng" : -79.51380899999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ghbiGbcidNB?`A]ZKn@Sh@OZK"
                     },
                     "start_location" : {
                        "lat" : 43.5982788,
                        "lng" : -79.5142618
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 428
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 83
                     },
                     "end_location" : {
                        "lat" : 43.5961949,
                        "lng" : -79.51888599999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oabiGh`idNADAD?B?@?B@D?FHf@DVBJh@|DT~ALz@Fb@D\\?B@BAB?B?@AB?@AB?@AD?B?D@F@H?DHh@R|AJp@DVBTR~AT|A"
                     },
                     "start_location" : {
                        "lat" : 43.597204,
                        "lng" : -79.51380899999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 304
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 43.5947131,
                        "lng" : -79.5207343
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "e{aiG``jdNl@UdA[\\MPGPEHC@?@??@?B@FBL@NHh@Ff@Hl@Jn@Hl@Hl@Jv@Fd@DTDT"
                     },
                     "start_location" : {
                        "lat" : 43.5961949,
                        "lng" : -79.51888599999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 408
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 57
                     },
                     "end_location" : {
                        "lat" : 43.5912026,
                        "lng" : -79.5192452
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTwenty Third St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}qaiGpkjdNTIPErC_AdDeAv@WjBm@vDkA"
                     },
                     "start_location" : {
                        "lat" : 43.5947131,
                        "lng" : -79.5207343
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1094
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 191
                     },
                     "end_location" : {
                        "lat" : 43.5889301,
                        "lng" : -79.53159269999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLake Promenade\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_|`iGhbjdNF^D`@BPBP@B@LBLBV@J?D@H@H@D@V@T@B@X?D@L?NB^@V?R@b@DfAJtCHjCB\\?TBb@@R@T?H?JDn@?J@P@R@H@T?DBXB`@B`@BV@PBLBR@XBd@Bf@?B@B@V@`@Dj@@^Dh@?HBT@NBd@?DFp@B^?H?@@N@`@@FB^BV@L?@@FDP@JBFBF@D@B@BHNFFBBBBDBBBB@FBPDbATND@@B@B@@@@@@@B@@B@@@BBD@D@B@D@FL~@PhAF`@F`@Jv@Hl@@J@J?H?F?B?D?FADAFABADCBCDEDE@KD"
                     },
                     "start_location" : {
                        "lat" : 43.5912026,
                        "lng" : -79.5192452
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 272
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 43.5885269,
                        "lng" : -79.5347331
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eLake Promenade\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ym`iGloldNBPPnAT`BTdBDTTdBDVF\\?B?D@D?FAN?T?j@?F?F?@?@?B?BA@A@?@?@A?A@A@QD"
                     },
                     "start_location" : {
                        "lat" : 43.5889301,
                        "lng" : -79.53159269999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "69 m",
                        "value" : 69
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 43.5891134,
                        "lng" : -79.5349973
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eThirty Sixth St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ik`iG`cmdNMFODuAf@"
                     },
                     "start_location" : {
                        "lat" : 43.5885269,
                        "lng" : -79.5347331
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 542
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 85
                     },
                     "end_location" : {
                        "lat" : 43.5865227,
                        "lng" : -79.5404796
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLake Promenade\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}n`iGvdmdNLfALx@BTBN@NJr@Hj@?@Hh@D\\Jn@Fb@DP@JBFFR@DPd@BDHVVr@@BJVHPJTPZh@~@PXPV`@l@x@bAr@|@j@v@NPBB@D@B"
                     },
                     "start_location" : {
                        "lat" : 43.5891134,
                        "lng" : -79.5349973
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1659
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 284
                     },
                     "end_location" : {
                        "lat" : 43.5833334,
                        "lng" : -79.5516027
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "w~_iG~fndNH?B?F@BB@?@@DFBF?D@H@B@N@F@X?R?NANCHCJABCFEJCJEHEPEPOp@Kd@EVELCHEJGFGHIHGDEHCDAJAL@R@T?J?FAFAF?F@FBHBRBN@FV`@HJV\\B@FHRTh@p@X^PRHJ@BJFJ@B@@AJ?LGFGBCJQFMd@}@FKVe@d@y@DKHKHGHED?LAN?D?^?d@?l@?F?F@JDVJF@LDD@D@D?TGF?F@H?RHD@RLZNRHNDNDJ@L@F@F?X@@?D@FBBB@DBH@DBLBT?N@L?P?L?J?V@J@LBZ@D?@Dp@@h@@D?HBPDJ@BJPFJBFDP@R@H@JBPDN@DBJDT@PAT?FAD?DENEHEHONMJa@ROJKFABGJGHEHA?A@CBIDKDGDOJGFEHCLAJ?H@F?DBNH^DTBPD^Fb@Bh@DTHVLR@BJNLTDNBF?D?L?NCPCFAFMXS\\IJ]h@QRIJOH[Va@^Ub@EPIR"
                     },
                     "start_location" : {
                        "lat" : 43.5865227,
                        "lng" : -79.5404796
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 667
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 120
                     },
                     "end_location" : {
                        "lat" : 43.5786615,
                        "lng" : -79.5566207
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yj_iGnlpdNAF?D?@?@?@@BBBNPDDDDB@D@D@B@DBDDDDDHDFHJp@v@RVn@p@hBhB|BfC@@z@`Af@b@BBHFJJNPZ\\?@|@bATXJLLPDD\\ZX^HNBF@B@BBDDDDFDBF@R@DBBB@?FHHT@BHLNRB@BBFBD@"
                     },
                     "start_location" : {
                        "lat" : 43.5833334,
                        "lng" : -79.5516027
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 888
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 142
                     },
                     "end_location" : {
                        "lat" : 43.57257449999999,
                        "lng" : -79.5576789
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "sm~hGzkqdNRGFAXKBCDCBCBCBGBE@GBKBKDM@AVa@Vc@NUHIFGHGDEFE?AHIjAoBHMT]HMBI@MBY@EFOJMJGNIFAF?FBJLfBlBXZPRPNRPPFJFFJDJDJFHFJp@r@b@f@RPNLLH\\\\PTJNBFNV`@b@FHfClCh@l@HFBB@?D@B?FAFGBGDGFOBEDE@A@?@?HDNL"
                     },
                     "start_location" : {
                        "lat" : 43.5786615,
                        "lng" : -79.5566207
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 305
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 43.570182,
                        "lng" : -79.5562226
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "qg}hGnrqdNB?FB@??@@?@?@ABEh@w@NOFCH?J@H?LCJAHCHGHGRO\\Y\\YxAoA\\YLEFCD?DA@?F@H?NBLF@?@AJO"
                     },
                     "start_location" : {
                        "lat" : 43.57257449999999,
                        "lng" : -79.5576789
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "19 m",
                        "value" : 19
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 43.5700839,
                        "lng" : -79.5560244
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "sx|hGjiqdNRg@"
                     },
                     "start_location" : {
                        "lat" : 43.570182,
                        "lng" : -79.5562226
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 385
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 43.5680598,
                        "lng" : -79.5597106
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_x|hGbhqdNz@bABFTXPVFJR\\BDRh@LZDJPj@@BNd@FTBFBH?@@F@HD~@DVBLBHJ\\LXHPV^@@b@l@@?PTb@\\@@?BCJ"
                     },
                     "start_location" : {
                        "lat" : 43.5700839,
                        "lng" : -79.5560244
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "48 m",
                        "value" : 48
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 43.5678181,
                        "lng" : -79.560085
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "kk|hGd_rdNCR?H@FBBl@^"
                     },
                     "start_location" : {
                        "lat" : 43.5680598,
                        "lng" : -79.5597106
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 500
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : 43.5650749,
                        "lng" : -79.56396769999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "{i|hGnardNNTHPJX?BBRBZA`@?d@@ZBRDLHLLRLLHHHHHDLHRHJD@@JFLH`@VXPHFFF@@BBHNJNJNVj@@BBL@HAJ?DBp@BHBR@J@JDZBNFR@BDFHFPF`@B?@^Ed@IFAD?D@B@@DBH"
                     },
                     "start_location" : {
                        "lat" : 43.5678181,
                        "lng" : -79.560085
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "56 m",
                        "value" : 56
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 43.5650695,
                        "lng" : -79.5646527
                     },
                     "html_instructions" : "\u003cb\u003eWaterfront Trail\u003c/b\u003e turns \u003cb\u003eright\u003c/b\u003e and becomes \u003cb\u003eHampton Crescent\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ux{hGxyrdNBnA?^ALAH"
                     },
                     "start_location" : {
                        "lat" : 43.5650749,
                        "lng" : -79.56396769999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 128
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 43.5644806,
                        "lng" : -79.56592839999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ux{hG`~rdNLRXb@Vb@V`@@@PZBB?B?@@B?D@d@@h@"
                     },
                     "start_location" : {
                        "lat" : 43.5650695,
                        "lng" : -79.5646527
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 100
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 43.5638185,
                        "lng" : -79.5667701
                     },
                     "html_instructions" : "\u003cb\u003eWaterfront Trail\u003c/b\u003e turns \u003cb\u003eleft\u003c/b\u003e and becomes \u003cb\u003eRichey Crescent\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_u{hG`fsdNzAlBf@x@"
                     },
                     "start_location" : {
                        "lat" : 43.5644806,
                        "lng" : -79.56592839999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 174
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 36
                     },
                     "end_location" : {
                        "lat" : 43.5629391,
                        "lng" : -79.56850779999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{p{hGhksdNLXDJDDTZBFLRHNBDNPJNHJZz@\\vB"
                     },
                     "start_location" : {
                        "lat" : 43.5638185,
                        "lng" : -79.5667701
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 203
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 43.5612515,
                        "lng" : -79.5684761
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kk{hGdvsdNd@RXLF@LDx@JNBPDTDH@BAXEFCFCVU\\g@DEH?JD"
                     },
                     "start_location" : {
                        "lat" : 43.5629391,
                        "lng" : -79.56850779999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 849
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 150
                     },
                     "end_location" : {
                        "lat" : 43.5577304,
                        "lng" : -79.57571229999999
                     },
                     "html_instructions" : "\u003cb\u003eWaterfront Trail\u003c/b\u003e turns slightly \u003cb\u003eright\u003c/b\u003e and becomes \u003cb\u003eCumberland Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "y`{hG~usdNjH~H?@@?dEnEJJFLDLDN@J?F?R?X@N@J@JDJBHDHBBFJFDFDHBH?J?\\CL@NBLDHHHJHLFL@@^|@\\z@Pf@FTFVH^H^DP@P@NANANCLSd@{B|E"
                     },
                     "start_location" : {
                        "lat" : 43.5612515,
                        "lng" : -79.5684761
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 245
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 43.5559777,
                        "lng" : -79.57754989999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWanita Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yjzhGdcudNvC~CdEnE"
                     },
                     "start_location" : {
                        "lat" : 43.5577304,
                        "lng" : -79.57571229999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 95
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 43.55545679999999,
                        "lng" : -79.57661179999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eElmwood Ave S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{_zhGtnudNl@mA@Ep@{ADK"
                     },
                     "start_location" : {
                        "lat" : 43.5559777,
                        "lng" : -79.57754989999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 512
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 91
                     },
                     "end_location" : {
                        "lat" : 43.5528524,
                        "lng" : -79.5812928
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "s|yhGxhudNZh@@DLXDF@@B@@?@?JCHAD?D@B@BDBD@DDTD`@DVDR?BBPHVFNFJFFHJT\\LXFJ?BBFBLBL?H?FAX?XCt@?TBJ@FBLFNLPf@l@`@b@^`@VXRTd@d@FJb@d@DDBD@D?D@B?P?@@@?@FH@@@@"
                     },
                     "start_location" : {
                        "lat" : 43.55545679999999,
                        "lng" : -79.57661179999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "73 m",
                        "value" : 73
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 43.5532256,
                        "lng" : -79.58202729999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eWaterfront Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ilyhG`fvdN?B?@?@?@KVk@lASb@"
                     },
                     "start_location" : {
                        "lat" : 43.5528524,
                        "lng" : -79.5812928
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 121
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 43.5523927,
                        "lng" : -79.58298789999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePort St E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "unyhGtjvdNVXf@l@n@v@v@~@"
                     },
                     "start_location" : {
                        "lat" : 43.5532256,
                        "lng" : -79.58202729999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 116
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 43.5530416,
                        "lng" : -79.58411409999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eElizabeth St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "miyhGtpvdNg@dAYh@c@~@[n@"
                     },
                     "start_location" : {
                        "lat" : 43.5523927,
                        "lng" : -79.58298789999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.0 km",
                        "value" : 5952
                     },
                     "duration" : {
                        "text" : "19 mins",
                        "value" : 1153
                     },
                     "end_location" : {
                        "lat" : 43.5111036,
                        "lng" : -79.62996029999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLakeshore Rd E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "omyhGtwvdNx@~@PPz@~@f@j@VZx@`AJLn@v@`@d@d@j@JLn@r@\\`@X\\`AbAp@t@`@b@|@`Av@z@PRHJv@z@\\^t@z@v@bAz@`Af@j@`@`@zAfBFHZ^l@t@dAjAdAlAjCvCdAlAFFVZZ^l@p@j@l@j@n@j@p@nB|Bn@p@fAhAbAfAr@t@LNj@l@j@n@lArAZ^x@z@PRbAhAh@n@~BlCv@z@Z\\p@t@v@|@Z\\x@|@~@dAVZr@v@x@z@Z\\Z^x@|@nCtCDFlApAt@v@VVZ\\d@h@v@|@XXpC~CzAbBJJfAlAv@x@r@t@v@dA|@bAp@r@\\\\hCvCnBzBpB~Br@v@f@h@NRx@~@rAvAfBlBvBfC^b@|AdBjBtBj@n@|AdBXXxAbBpA|AJJzAfBJJX\\JLf@j@TVpBzB`AbAlAdAbAlAFHh@n@rA~A`AhAB@d@j@l@p@TV`@d@n@p@`AhA~@dAPPpC~Cl@p@Z\\z@`Ap@x@`@d@JJd@f@PR|AdBl@p@p@t@r@v@p@t@j@n@dAjAf@h@LLxA`BfBrBb@d@n@r@z@dAb@f@p@r@JVBFDDr@t@@@bAnA"
                     },
                     "start_location" : {
                        "lat" : 43.5530416,
                        "lng" : -79.58411409999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.0 km",
                        "value" : 3031
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 592
                     },
                     "end_location" : {
                        "lat" : 43.4894809,
                        "lng" : -79.652687
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRoyal Windsor Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "kgqhGfv_eNLNp@z@l@t@`@`@LP@?VDRRdAjANN`BhBhAjALNPPp@p@LJ`AbAjApA^f@|@bAt@x@rB|BnAvAf@l@\\\\h@l@d@h@dAjAb@d@NPn@r@vAbBBBFDjBtBtA|AlApAZ^bBhBn@r@dAjATVnF`G`G~GpAvAt@x@hApAHHJ\\BFLLxA|Ax@`AT\\lAnAf@f@f@j@p@t@\\^hAfATJTVd@f@x@|@dClCBDv@z@pBxBnAlAb@b@r@r@t@t@b@b@DB^\\LJPLh@`@DBn@d@JHf@^@J@@?@@@@@jCnBPL"
                     },
                     "start_location" : {
                        "lat" : 43.5111036,
                        "lng" : -79.62996029999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 234
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 66
                     },
                     "end_location" : {
                        "lat" : 43.48813759999999,
                        "lng" : -79.6504525
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eFord Dr\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHalton Regional Rd 13\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "g`mhGhddeNHUdAoB^s@Xm@`CwE"
                     },
                     "start_location" : {
                        "lat" : 43.4894809,
                        "lng" : -79.652687
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.2 km",
                        "value" : 3250
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 577
                     },
                     "end_location" : {
                        "lat" : 43.4642978,
                        "lng" : -79.6728959
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCornwall Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{wlhGhvceN\\`@p@p@HHXVJL`@d@\\`@hApA`@h@xA`Cv@|@VTFHBDNPZZRTVTXT^VFFVNn@XTLZJp@Pn@L|@Pb@F\\FZJp@X\\R^VZXHFHLr@v@JJ`@f@`AfA`AhAdAjAPRRTz@~@LLh@l@^^t@v@bB`B~AzA`@`@lAhATVHHfAdAJJvCpC?@p@n@FFpAnAf@d@RR~@|@t@p@n@l@rBrB\\\\tBnB`A~@j@n@d@h@d@n@`@r@PXn@nAP\\JTL`@lAxCHPN\\NXR\\Z`@Z`@RXTXZZXVb@\\j@b@|@n@vG~E^VhHjFLHNLNFLHZL`@NXHPDNB\\F`@JTJ\\NRLPLp@j@xApA"
                     },
                     "start_location" : {
                        "lat" : 43.48813759999999,
                        "lng" : -79.6504525
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 323
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 56
                     },
                     "end_location" : {
                        "lat" : 43.4622314,
                        "lng" : -79.6700853
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eChartwell Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{bhhGrbheNl@aA\\g@lC}D~@wAbCqD"
                     },
                     "start_location" : {
                        "lat" : 43.4642978,
                        "lng" : -79.6728959
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 774
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 140
                     },
                     "end_location" : {
                        "lat" : 43.4566866,
                        "lng" : -79.6756965
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMaple Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}ughG`qgeN~C|EdBfCDDHLLJLJLFNHNDPDF@XFJ@LDJBLDXNTPNJNNPRvAvAZ\\Z\\~AbB~@hAhApAHHdDdD"
                     },
                     "start_location" : {
                        "lat" : 43.4622314,
                        "lng" : -79.6700853
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1065
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 157
                     },
                     "end_location" : {
                        "lat" : 43.450025,
                        "lng" : -79.66622819999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAllan St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "isfhGbtheNzBuDz@{AlAiBt@sAR[tCoEd@q@Va@p@gAXc@dCaEDEn@cALS~AiCt@iA|@wAtCoEpCmE"
                     },
                     "start_location" : {
                        "lat" : 43.4566866,
                        "lng" : -79.6756965
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1000
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 229
                     },
                     "end_location" : {
                        "lat" : 43.442944,
                        "lng" : -79.67385929999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRandall St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "siehG|xfeNf@f@pA|Az@`Ad@f@~@~@XZb@f@^b@hAtAHHJJb@`@LN|A`Bx@z@pAxAFHjAjAj@p@nBbCZZHJRLhCnCNNNRtAvATVt@~@Z`@"
                     },
                     "start_location" : {
                        "lat" : 43.450025,
                        "lng" : -79.66622819999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.7 km",
                        "value" : 2725
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 567
                     },
                     "end_location" : {
                        "lat" : 43.4234015,
                        "lng" : -79.6922775
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRebecca St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "k}chGrhheNrBxBzBdCTTLXtAtApA|AvA`BFD|@dAfBlB`AbAfBtBVZTTRVJJJLn@`AX^\\l@JRNX`@`A^v@^`AFNRf@HNZr@d@x@@BNZT\\T`@BD\\d@^n@b@j@rAbBNP@@X`@hAxAHJ^b@b@j@h@t@l@v@r@v@NPLLf@r@`@j@fAvA@@j@t@r@~@fEpFd@j@fAtALPLNBBTT^^LL\\T\\Rd@TNFJDRHB@RHRFRF^JXF^F`@DVB\\@B?R@\\?`CE`AG\\?|AGh@?R@N?N?RBXDTF@?VHTJRJLJJDLJPLNJLLHHdEtEPD`@^"
                     },
                     "start_location" : {
                        "lat" : 43.442944,
                        "lng" : -79.67385929999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1825
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 321
                     },
                     "end_location" : {
                        "lat" : 43.4105832,
                        "lng" : -79.7063414
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eRebecca St\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "gc`hGv{keNN@d@f@bBlBX\\tA~AJZr@t@dAlAz@~@xA`B~@fANLv@~@dAhA~@dAx@~@tChD`AhAPRnBpBfErErAxAnDhEx@|@b@f@Td@\\^TVDFBDDDbAhArA|AxBbCdAjANP|AdBb@f@pAzAvB|BB@"
                     },
                     "start_location" : {
                        "lat" : 43.4234015,
                        "lng" : -79.6922775
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 902
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 174
                     },
                     "end_location" : {
                        "lat" : 43.4048261,
                        "lng" : -79.6984727
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eThird Line\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cs}gGrsneNHSv@oAz@mA|BqDJSdCyDt@kA|@mAbAyA~AaC|AaCr@cAlGkJFGn@cA"
                     },
                     "start_location" : {
                        "lat" : 43.4105832,
                        "lng" : -79.7063414
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13.1 km",
                        "value" : 13112
                     },
                     "duration" : {
                        "text" : "39 mins",
                        "value" : 2339
                     },
                     "end_location" : {
                        "lat" : 43.3192651,
                        "lng" : -79.801839
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLakeshore Rd W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eo|gGlbmeNXh@R\\Zh@?@zBpDBBt@nAxBrDvEzHpCtEz@tAz@vAz@tA^l@n@bAFJRTHLX\\RT@BXXbAjAfAlAf@h@b@f@ZZLN|@`A`AfAp@v@~DlEbAjAbAhAfAlAZ^b@b@DFh@l@PPTVn@t@l@p@XXjArAf@f@h@d@`B~ApAz@~@n@n@b@LHNFVNdCnAl@ZhBz@jAj@hAl@PJrAt@JDpAp@VJt@\\NFb@Nd@LRFZFNBPBH?F@LBP@f@Bb@BpABrCDjDHvA@|@@X?lAB`CBR?dBB~ADfA@hA@n@@b@@V?x@Bn@@n@@t@@f@@d@Bb@Dd@H\\Hb@Jh@RHDXLXPVPLHXRTPVTf@f@NPTXh@p@Xd@d@p@tB~Cj@z@\\h@RZXb@t@nAn@bAp@fAf@x@bA|AFLxBhD|@tA`AvAPVjA|Ap@z@JLpCvDpA`Bd@p@|@hAnAbB^f@r@~@f@r@FLDFb@n@T`@FNTh@NVVl@HPBHDHRl@BHb@~A@@h@pBlA~EZfANj@DNJ\\DLJ\\`@nArAvDdAxCz@~BXx@d@nA@DRh@l@dBJV`@dADJRj@Tb@Td@FJd@z@\\n@h@z@DHXb@h@|@jAhB\\n@Vb@JR@?^n@NR`@p@Xb@j@~@\\j@NVJNZf@f@x@NXNVFHPXh@bAj@x@^p@Zh@Tb@R\\FJbA~AbAbBVb@T\\Vb@Zf@Xd@\\j@x@vAFHDHFJ@BLTHNHNR\\P\\BBNVFNFHDHR\\T`@FLn@hAp@dAHPNVPZLRRZDJHJZh@Xf@DDT^NRh@~@NVLRd@v@j@|@x@rABDhAjBBB|@zAbAdBPZHJ@BR\\HLR\\LVBBT^FPLN\\h@DHHJHJHJBDJJHJHJ^`@RT?@RNTRHD@@~A~@RH~@Xb@LLD^JPDFBv@Vh@Pl@PRHRJHDv@b@@?\\RDDFDHHZX^^PTn@r@`@b@HJLPJL?@JNN\\h@hANVBDLTn@bAFLf@x@r@bA^h@RXFJn@z@pD|E`@j@PTTRj@h@pAjA@@zArAdCvBbAz@NL|BpBJJPPhAbAd@d@hAhAn@r@xB~BfAlAzBbCl@p@dDrDt@v@fBjBzBhCr@x@^f@V^p@bAJPPd@Vt@Vj@`@fA|@bCrBxFbBxEL`@n@dBh@pAf@zAx@|Bn@dBn@fBbApCNb@FN`AlCr@lBXp@DNJV^dATn@^`APd@Tp@r@fBN`@Z|@l@`BFNf@xADJVp@FLDLTp@HTDLZx@L^Tj@Zx@Pd@Pd@BFL\\Rf@FL@BLTPXJNv@nAt@|AHRHPNb@FVDRJl@?BBVDRHp@@FFh@BRDZ@BDRFTFLHPHLHJ\\f@d@p@RVR\\Zd@^j@b@n@T\\V^LPHPHPLZLf@@FBHPr@FVTt@@HJZDNFPFLDJFH@@HP\\f@\\d@Zd@JPf@n@NTb@l@JLDFX\\X\\TVJNl@t@HLZ^`@b@h@l@f@j@HH\\^JHRR`@b@XXb@d@NX`BxA~@t@xAvAbAdAJL"
                     },
                     "start_location" : {
                        "lat" : 43.4048261,
                        "lng" : -79.6984727
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1675
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 352
                     },
                     "end_location" : {
                        "lat" : 43.31229889999999,
                        "lng" : -79.8190207
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eNorth Shore Blvd E\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mxkgGnhafNnBbCBB@?HBJNb@n@LRZb@HLV^nBhCx@hAtAjB@Br@~@LPZ^\\h@h@p@`AtAT`@V\\J^?@BFDLDL@DHVBFLb@FN?@Nb@@B@@FRFTPj@l@dCJp@Db@Dr@@^@T?VCl@ABGvAGdBAHATAl@?p@?b@@^@T@TF|@BTBb@LnB?JTbBDXF\\H^@H\\vAJ^HXHVHTDL@@JVDF@BJPJRPV`ArBv@hBPv@t@zCH\\Jj@?B@\\AZAJ"
                     },
                     "start_location" : {
                        "lat" : 43.3192651,
                        "lng" : -79.801839
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.1 km",
                        "value" : 4059
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 923
                     },
                     "end_location" : {
                        "lat" : 43.2952346,
                        "lng" : -79.8596632
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eNorth Shore Blvd E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{ljgGzsdfNHDFFFFJJDH@FDNFVHt@JfAN~A`@hD^zCR~AD`@Hn@BN@TBX?Z?B@X?b@Ad@An@?j@?N?J@Z@TBN@RDRBNBPDPHVHV@BDJHPLVJRHNR^PZTd@l@bAT^\\j@p@rADHHPJRJNJLNNJH?@FBDDf@Vz@b@NJB@RLJLJNJPFJ@BDJBJDH@FDPBJBJJn@DR@JF`@Ff@D^Db@Dt@BVB\\Dd@F`@F^DL@DBL?@DT?@BP@BDRHVHXRd@?@FNZ`AZ|@HTHR@BFPBFBJBHBL@FBL@HDVBX@Z@`@@p@Bd@@^HzA@VBj@@BBn@PpCDp@FdAHjAHx@D\\@FDPFXHVJVHRHLFHR^JLNP^d@p@x@@@r@~@NRFJFJJR?BJTXx@Lz@Bf@BNBd@Dh@Fl@FdC@hABvADr@BVHpAHjA@lAEpAC|AA^@B?VD^?BDZFVFXHXh@zARb@JVDFN\\DFVh@\\f@\\h@Vd@LRb@p@JLHHJHHFNHHBXLVHPDTBB?L@T?ZAj@AD?L@NBB@F@NDDBHBLHNJNPRTR\\LXN`@DPDR?RBR@RBZ@d@?L@p@Bp@@n@?H@`@@T@V@NBN@HDLBHDLHRJTPZ~@vAp@dA`@f@Z^tCrD~@pAVZj@v@f@r@t@jAx@jA~DhGJNtBdD"
                     },
                     "start_location" : {
                        "lat" : 43.31229889999999,
                        "lng" : -79.8190207
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 473
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 105
                     },
                     "end_location" : {
                        "lat" : 43.2982389,
                        "lng" : -79.8637913
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUnsworth Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ebggGzqlfNSX_BfCaA|Ac@l@q@dAeBjCsAtBMPq@dAU\\Y`@c@j@"
                     },
                     "start_location" : {
                        "lat" : 43.2952346,
                        "lng" : -79.8596632
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.5 km",
                        "value" : 2466
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 412
                     },
                     "end_location" : {
                        "lat" : 43.2935467,
                        "lng" : -79.88928129999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePlains Rd W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_uggGtkmfNJLv@|@NPVXVZpAtAbAjAX\\z@`AfApAbAnAp@v@TVRVZ\\NNLJNNnBhB`AbAHJlAzA\\d@^j@j@~@j@fA^x@f@fAJTVn@x@rBjA|CNb@AL@F?BDJL`@Nl@ZpAFVF\\BRF\\Jz@@BXnELtA@xACpAEfBIzAABKfAUfBYzAId@Kj@ABKj@ADGZCJ?BOr@Kn@UfAa@|B{@jEQ^gBzIs@vE]|B[`Cc@pDS|AIfAAPAR@N?@?T@RBRBRFZ"
                     },
                     "start_location" : {
                        "lat" : 43.2982389,
                        "lng" : -79.8637913
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.0 km",
                        "value" : 3003
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 559
                     },
                     "end_location" : {
                        "lat" : 43.2680539,
                        "lng" : -79.88551939999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eYork Blvd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uwfgG~jrfNNp@HTHRLTLP?@FFHHPNXRPFJDRDRDTBVBx@Bb@@x@BpCHpBFrANZFb@JxAh@bCrAJFj@Z@@n@Z~BbA|@j@fAf@NF^PXHB?l@Ht@D`@AT?b@EnDi@PCbGiAbASPCr@OzEeAzCo@x@YVIP?PChBa@`@Il@QlA]t@SDChBo@XM~@c@zAw@|JkG~@i@TMVMxCwAjDaB|As@VKHAHAREv@Ij@I~@QdAYh@OdAY@AtBi@TINB@?XE`@Kt@QjBg@b@G"
                     },
                     "start_location" : {
                        "lat" : 43.2935467,
                        "lng" : -79.88928129999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 219
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 43.2676904,
                        "lng" : -79.8876119
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWoodbine Crescent\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ixagGnsqfNEn@?f@?JAL?HCLAJEXCNAFEVO|@ET?FAB?D?D@D@BDBBBD@`Af@RJTL"
                     },
                     "start_location" : {
                        "lat" : 43.2680539,
                        "lng" : -79.88551939999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "20 m",
                        "value" : 20
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 6
                     },
                     "end_location" : {
                        "lat" : 43.26763210000001,
                        "lng" : -79.88737399999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eJones St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "avagGp`rfNFSB["
                     },
                     "start_location" : {
                        "lat" : 43.2676904,
                        "lng" : -79.8876119
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 579
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 79
                     },
                     "end_location" : {
                        "lat" : 43.2626646,
                        "lng" : -79.8894981
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBreadalbane St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "uuagG`_rfNdBl@dBl@hCx@bA\\nA`@~Bv@nEvAdBf@`@L^L"
                     },
                     "start_location" : {
                        "lat" : 43.26763210000001,
                        "lng" : -79.88737399999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 690
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 148
                     },
                     "end_location" : {
                        "lat" : 43.2623501,
                        "lng" : -79.8977005
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHwy 8\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sv`gGjlrfNCTCVANAL?L?R?HAD?L@L?J?RBZBRDZBZDXDXLbATrBh@fDF\\D\\DVDXJx@FZ?DFb@Hf@@FBR@FBT@\\@T?T?L?L?LAL?FAJALCPEXE\\]zBKl@q@hE"
                     },
                     "start_location" : {
                        "lat" : 43.2626646,
                        "lng" : -79.8894981
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 848
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 171
                     },
                     "end_location" : {
                        "lat" : 43.2613195,
                        "lng" : -79.907242
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKing St W\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "ut`gGr_tfNEHEJCRUvAO~@Q~BCPa@zCCRQzAQlAYpBQpAAJ?J?D@H@JBJFTZlApAxDfBxF|@~ClBhG"
                     },
                     "start_location" : {
                        "lat" : 43.2623501,
                        "lng" : -79.8977005
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 852
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 147
                     },
                     "end_location" : {
                        "lat" : 43.2623484,
                        "lng" : -79.91740729999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSterling St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gn`gGf{ufNa@VMJGFGDCFCFCJCLG\\S`BCTAJGnBMjEKlEKlEKlEGrBIbDIbEKt@AjE@X@hABJ"
                     },
                     "start_location" : {
                        "lat" : 43.2613195,
                        "lng" : -79.907242
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "94 m",
                        "value" : 94
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 43.2615082,
                        "lng" : -79.91737879999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ut`gGxzwfNVGb@@h@@B?b@AX?"
                     },
                     "start_location" : {
                        "lat" : 43.2623484,
                        "lng" : -79.91740729999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 217
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 39
                     },
                     "end_location" : {
                        "lat" : 43.2609627,
                        "lng" : -79.9198043
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mo`gGrzwfN?ZBrC?p@@p@?b@PXVd@P^Vh@R`@"
                     },
                     "start_location" : {
                        "lat" : 43.2615082,
                        "lng" : -79.91737879999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 105
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : 43.2600849,
                        "lng" : -79.919978
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_l`gGvixfNN?F?J?|@APAX?D?DBDDN\\"
                     },
                     "start_location" : {
                        "lat" : 43.2609627,
                        "lng" : -79.9198043
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 210
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 43.2582049,
                        "lng" : -79.9198598
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at \u003cb\u003eCollege Ct\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKing St W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "of`gGzjxfNlCE`@AHGr@AhCE"
                     },
                     "start_location" : {
                        "lat" : 43.2600849,
                        "lng" : -79.919978
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "43 m",
                        "value" : 43
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 43.2580925,
                        "lng" : -79.9193703
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eEmerson St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wz_gGbjxfN?MBIHOBS@S@Q"
                     },
                     "start_location" : {
                        "lat" : 43.2582049,
                        "lng" : -79.9198598
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 400
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 135
                     },
                     "end_location" : {
                        "lat" : 43.2546938,
                        "lng" : -79.92092169999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eEmerson St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "az_gG`gxfNf@P`@NRExFxBTHdCbArDpA"
                     },
                     "start_location" : {
                        "lat" : 43.2580925,
                        "lng" : -79.9193703
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 982
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 176
                     },
                     "end_location" : {
                        "lat" : 43.2563133,
                        "lng" : -79.93179339999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHamilton - Brantford Rail Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yd_gGvpxfNiB~MWtBeBdMi@bFC@aB\\EDEDAFKh@CHC@I?EBADBvBLvABLDD`@PBB`@hEFH?H?j@CfC?|B"
                     },
                     "start_location" : {
                        "lat" : 43.2546938,
                        "lng" : -79.92092169999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "20 m",
                        "value" : 20
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 43.2561381,
                        "lng" : -79.9317334
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eEwen Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}n_gGttzfNPENE"
                     },
                     "start_location" : {
                        "lat" : 43.2563133,
                        "lng" : -79.93179339999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "8.2 km",
                        "value" : 8207
                     },
                     "duration" : {
                        "text" : "31 mins",
                        "value" : 1840
                     },
                     "end_location" : {
                        "lat" : 43.2382649,
                        "lng" : -80.02176009999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHamilton - Brantford Rail Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{m_gGhtzfNDl@AZAHEFIJCJCL?LArBAxB?`@C`HADAn@A`A?J?J?T?BAV?R?p@A`@?NA`B?p@CrC?n@Ap@?z@Af@ArCAd@?H?p@Ap@ArCCdC?l@Ar@ClDCrDGpA[jGMzA{AbQy@fIIn@KdA_@zEGn@OjB?fCAbBA`@I`BAHJtAFr@nAnGJl@xAdJBLx@xEfAvGXzAJp@j@vDJn@d@bDDVVzAz@fFLr@p@rDVzATnAb@dBP^bArBd@|@r@zAN\\^dAb@dBBJXpBDZP~A@DVhCFn@@LF`@P|ADZp@xC?@n@`Cz@xBBD`BnERf@z@~BPd@b@lA`@vAPp@bAbEvBhJd@pB|@`EXjAjA~EXjA~BdKhC|KhBfI`@~AhB~H`BlHZbB?@RdB@h@B@@FB\\B`@@~A?H?h@Ap@E|@Gx@Iz@KdAKz@OhA?DK`AE\\APEj@Ch@Aj@?R?Z?N?`@?D@p@@h@?FBt@?NB\\Jj@D\\BTBTBXD\\TpBRbBVjCFh@?DVdC@HP|AD\\h@zCH^FVJ\\Vv@^`A@Bp@zAf@`An@hArAzAZ\\DDVTpAbAj@XdD|APHvClA`A`@dChAPHjBtAJHPPdBfBtAvBlAlCTf@N\\BHLj@~@zDDf@Fn@Fn@Fn@@H@|ACj@Eh@?DKxACDId@AFIf@ELQl@Sd@Sf@Uf@GJy@hAi@j@MNML]\\[Zy@x@QP"
                     },
                     "start_location" : {
                        "lat" : 43.2561381,
                        "lng" : -79.9317334
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1782
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 546
                     },
                     "end_location" : {
                        "lat" : 43.2350457,
                        "lng" : -80.042596
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMineral Springs Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "c~{fG~flgNAZ@TDfABXDn@BV@VHpAHt@Dr@Cr@Q`AANUvAKr@ANIv@?X?@@\\Dd@BXFd@@H^lCHn@DXDRNhADRLx@Fb@@BLf@HXDPNj@XhAXv@Ph@Pf@?Bb@nA@BNj@JZTz@Nj@Nj@Nj@H^DJd@rAPh@Tn@Nd@BJHZF`@H`ADZLrAB^LxBJx@Jn@@Jb@~B@HHf@?FFf@?FDx@@f@?H?d@?LI`@CNI^Mj@AJERALAJ?b@?@R|BLfBPdF@Z@HDvA?N@\\Ed@E`@"
                     },
                     "start_location" : {
                        "lat" : 43.2382649,
                        "lng" : -80.02176009999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "21 m",
                        "value" : 21
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 43.2351263,
                        "lng" : -80.0428235
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eSlote Rd\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "aj{fGfipgNETGRA@"
                     },
                     "start_location" : {
                        "lat" : 43.2350457,
                        "lng" : -80.042596
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "12.3 km",
                        "value" : 12287
                     },
                     "duration" : {
                        "text" : "37 mins",
                        "value" : 2196
                     },
                     "end_location" : {
                        "lat" : 43.1801596,
                        "lng" : -80.16877359999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHamilton - Brantford Rail Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qj{fGrjpgNt@`@JH\\Xz@p@Z^d@h@f@t@f@|@HNZx@\\`Ad@tAhAfDBFN`@Ph@nBzFtAjEBHPj@Ph@\\dAXv@d@lABBvAnCnApBLRbAhARTf@`@rAhAfAl@dB`A~@\\`@PLDnAVl@HlC^n@JhBTb@Fb@FdBVB?b@H`@Hb@JZFD@rAf@PJ`@Tv@f@h@f@TVPTFHZ^BDl@`AT\\j@tAFLJZPh@L`@^vAJ^BJPz@j@lEVlB|@zGp@lFHl@^lC|@zGr@jF@JnAnJTbBFh@Hl@r@lFj@lED\\z@zGf@|DL`ANjA|@zGp@lFRvATbBHn@Hl@VrBNhAR~AL`ADZV|AT|AHp@Lh@v@pD@Bn@bC|@`Cl@xALTn@jAJRHPfAnB|ArCxApCBBtBxDzAnCXh@vBvDn@hAl@hABDbDbGpBvDNVFLpBnDZl@lC|ER^Zh@tBpDzDjH@BzApCXf@~AtCh@bAjB`EBFt@bBHTbBjEf@pABDv@rBnAbDRh@j@xAf@pAjC~G`CjGdAlCpAbDRf@Rh@LZXt@d@jARl@Vd@dAlCd@pAf@pAnAdDd@pARh@jC~GlAbDBFfCvG`DdIvBtFz@zBvBrFhAtCZv@jC|Gn@~AF\\\\vAzAlG^`Bb@`C|@dFX|AbBpJ@BbBjJ`AnFx@tEr@vD~@dFlArGJl@fDvQdBnJBLH^~@dFXzAd@hCf@hC~@dFLl@Jl@f@hCJn@Jl@Ll@xA`If@hCd@hCJl@\\bBHd@Jl@Ll@XzAJl@XzABLb@zBJl@Ll@Jl@f@lCd@dCLl@vBpLl@dDJl@r@vDJl@FZ\\lBr@vDX|AJl@\\hBRlAfAfG"
                     },
                     "start_location" : {
                        "lat" : 43.2351263,
                        "lng" : -80.0428235
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.1 km",
                        "value" : 3126
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 611
                     },
                     "end_location" : {
                        "lat" : 43.1526302,
                        "lng" : -80.1715823
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eJerseyville Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 17\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Rd 17\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Jerseyville Rd/\u003cwbr/\u003eCounty Rd 17\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_spfGx}hhNj@Hz@HXB|@Jn@D|@H^Dz@H\\@\\BB?xGf@B@bAFrDTb@BzDVXBb@BfAFfAFdBLpDZ`@BB@N@R@F@ZB`ETtCL\\Ab@AH?VCZEj@KdAUb@IdASdAU`@IhB_@b@I`@IlCi@`@Ib@IdASb@KVEHCb@GdAQ^Gf@C\\CD?V@l@P`@L\\J@?@@THJDTJ`@N`@P`A`@bA`@hDrAdCbAbA`@l@V~@TXB|@BP?P@j@?Z@`DFbAFn@Jv@PTFPFXHrB`ApBbAj@Pf@HZ?TAH?h@EhGeA"
                     },
                     "start_location" : {
                        "lat" : 43.1801596,
                        "lng" : -80.16877359999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.0 km",
                        "value" : 5978
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1096
                     },
                     "end_location" : {
                        "lat" : 43.1400595,
                        "lng" : -80.24274819999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eColborne St E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBrant County Hwy 2\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBrant County Hwy 53\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Colborne St E\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}fkfGjoihNJNHj@xAjJ^dCh@lEHl@\\nC\\lCZzBHn@Jx@^vCJx@b@bD\\hCL`ANdAXfBJv@Hn@r@hFVhBt@hFtAjJBR|BfQDb@`@rCLr@BTFh@L~@NfAT`B^jBl@rC~A|Hf@fCv@vDn@fDj@`D\\jBHl@Jr@Jt@L`ADf@Fn@Dd@BZFv@Fx@B`@FnA@d@Bb@@n@@T@h@?`@@bB?l@Aj@@vA@|@@Z@X?DBb@VrE@b@JjB@Z?J?@@J?N@h@@zA@FBhBDdCFpCX|JJrDJhDZnJJtCF`CD`BJxCDx@BrAHrBRtHFzAJdDDrAFxBDvAJ`EBp@DdABt@Bd@Dp@Fr@BZBTFb@Fh@~@rGh@|DZpBh@zDNhAXhBTxAZ|BN~@VjBBRFZZzBDVHh@RrAFb@Jl@ZrBXbBXfBf@vCHd@BPVxA^|BH`@`@bCHl@Jn@Jt@Db@NvANzB"
                     },
                     "start_location" : {
                        "lat" : 43.1526302,
                        "lng" : -80.1715823
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1330
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 224
                     },
                     "end_location" : {
                        "lat" : 43.1397236,
                        "lng" : -80.2589244
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDalhousie St\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "kxhfGdlwhNGl@Eh@G^G\\GVK\\Qb@IZGTGPG\\Gb@?@Eh@?l@?j@@T@z@FrBH`CD`BF|AT`HPlHLzEDfARjHRdHHrCHtCJ`ED`BFtB@R"
                     },
                     "start_location" : {
                        "lat" : 43.1400595,
                        "lng" : -80.24274819999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 740
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 210
                     },
                     "end_location" : {
                        "lat" : 43.1336587,
                        "lng" : -80.260571
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eClarence St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gvhfGfqzhNrDWD?F@N@H@H@HDJBr@h@PRHLRZ@V?D@@JRf@|@@@RVVLZHl@Nf@DV?n@GdA]LEt@]XK^IRA`@EVBd@FXFF@j@NZLFBPLfAf@v@f@"
                     },
                     "start_location" : {
                        "lat" : 43.1397236,
                        "lng" : -80.2589244
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1556
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 315
                     },
                     "end_location" : {
                        "lat" : 43.1247918,
                        "lng" : -80.275139
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eVeterans Memorial Pkwy\u003c/b\u003e",
                     "polyline" : {
                        "points" : "kpgfGp{zhNn@d@LJJLZ^r@fA?@Zv@Zb@Rh@BFNb@FL@DRj@z@hC\\fABHVp@L`@?@HVFRNl@v@|Bd@rABJL\\?@FP?@Pj@Tr@@BfBnF`AvBx@xB@DT\\`@n@NVtAlCFFX`@X`@X`@n@~@nA~A`@h@hAvAt@~@BBnAxAf@l@t@fAT^b@j@b@l@Xp@LRhAhBNX"
                     },
                     "start_location" : {
                        "lat" : 43.1336587,
                        "lng" : -80.260571
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "29 m",
                        "value" : 29
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 41
                     },
                     "end_location" : {
                        "lat" : 43.1245336,
                        "lng" : -80.2751205
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMt Pleasant St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}xefGrv}hNTA\\A"
                     },
                     "start_location" : {
                        "lat" : 43.1247918,
                        "lng" : -80.275139
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 516
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 190
                     },
                     "end_location" : {
                        "lat" : 43.1228862,
                        "lng" : -80.28074719999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eVMP Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "iwefGnv}hNFL?@@@@?@?DARAFA@?@@@?@@?@@@@B@B@D@FBFFZDPFNFRL\\HXNl@Ld@@FNl@FZFXFVLj@ThAR`AJh@FZBTDTD^?BBV@T?@@R@^@f@@D?P@X?V?Z?T@P@N@RBNBNBNDT"
                     },
                     "start_location" : {
                        "lat" : 43.1245336,
                        "lng" : -80.2751205
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "9.6 km",
                        "value" : 9650
                     },
                     "duration" : {
                        "text" : "31 mins",
                        "value" : 1867
                     },
                     "end_location" : {
                        "lat" : 43.055036,
                        "lng" : -80.34834669999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eL.E. &amp; N Trail\u003c/b\u003e",
                     "polyline" : {
                        "points" : "amefGty~hNZdATj@f@fAR`@XbAz@nBBFPXd@d@BBf@\\p@b@h@\\`@Vn@TFBnAZ|Ab@zBl@fBd@vGhBjL|CrElA~@XjBh@bBl@x@d@bA|@j@h@rA`BTd@f@bAj@vARp@hAfDDNzAtE|AzELb@|AxElBfGbAfD^hARd@vAzElAdDDH\\z@LPd@t@d@n@\\^TTb@`@|@r@?@zAjAr@h@HFbCfBtAbAf@^pCtB\\XjBtAn@d@xBdB|AhA|AlA|AbA~@l@@@vCxB|@r@xC~BzAjAl@d@lA~@xBbBzC|BxBdBxDvCn@d@fDjCvBdBnA|@LJ|AfA|B~A^V\\Vd@Zt@f@b@R`@Rp@XtAf@`@N`@N~DvAl@Rb@N`@L`@NbA\\\\J`@NbA`@`@NdBn@`@PjC`AZL`@P`@NbA^fC`AhDpAfC`A`@NbA`@dBl@`@L`@NbA^LBFD`Ah@^R`@TNHnBlA~@j@tBzAzEfDhC|CdDzD~@hAtAhCrBzDpAbCl@fBPh@hAhDPh@j@bBbAxCjAdDhAhDPh@Ph@v@|BPh@Rj@Ph@v@|BPh@Ph@d@rAzArEj@`Bv@hBj@lAtA~Cr@`BnCzDr@bAX`@r@bApAlBTXr@bA`CfD|ChENTf@d@\\\\vArA|AxARR\\XxApAz@v@z@t@tChC\\X\\ZZZtCfCz@t@p@l@bDfC|AjA\\VvEpD|AhAz@r@"
                     },
                     "start_location" : {
                        "lat" : 43.1228862,
                        "lng" : -80.28074719999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.0 km",
                        "value" : 2994
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 651
                     },
                     "end_location" : {
                        "lat" : 43.049675,
                        "lng" : -80.384462
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMaple Grove Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_exeGd`liN@@x@~JnApORnCj@`HFn@b@nF`ApLNdB`@jF@D^jFZ`EDr@RjC?D@F`@bF?DThC?DDh@VtCDj@Dn@b@pFVtCxArRz@hLHx@lApO`ApLTnCTnCTpCj@~GDp@L~AFn@PzB"
                     },
                     "start_location" : {
                        "lat" : 43.055036,
                        "lng" : -80.34834669999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 320
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 127
                     },
                     "end_location" : {
                        "lat" : 43.046905,
                        "lng" : -80.38339700000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBishopsgate Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 16\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ocweGzasiNrBg@vAa@tAa@fBg@`D_A"
                     },
                     "start_location" : {
                        "lat" : 43.049675,
                        "lng" : -80.384462
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.3 km",
                        "value" : 7292
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1251
                     },
                     "end_location" : {
                        "lat" : 43.032894,
                        "lng" : -80.470793
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTwelfth Concession Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "crveGf{riNn@nIBZt@pIf@nFN~AL|AN`BFn@Dd@VxCDn@TpCTnCFn@BZ?TAl@YbEMhBHb@Ll@Lr@Rb@Rf@P`@@DTf@L\\Th@XfCNdB\\~DN~Al@~GFn@@PhBnS\\~DFp@\\~Dd@nF`Dp^Fn@z@~JFn@l@`HfD``@hC`Zd@pF@@jA~M^~D\\`EbCnX|@~JFn@rBpUn@~Gl@~Gl@~G^~Dt@pI\\~DvA`QL~Ar@pIt@fJxB`WVnC\\~DLxAd@pEJjABRFn@~@jJh@nFdApK|@`J"
                     },
                     "start_location" : {
                        "lat" : 43.046905,
                        "lng" : -80.38339700000002
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.5 km",
                        "value" : 7544
                     },
                     "duration" : {
                        "text" : "23 mins",
                        "value" : 1398
                     },
                     "end_location" : {
                        "lat" : 43.0188966,
                        "lng" : -80.5615955
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eHatchley Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qzseGl}cjNFhATfCv@`JDd@Hx@t@pIFn@Fn@TnCFn@JdARxBFn@L~AFn@Fn@Fn@l@~GBb@@LFn@\\~DFn@Fn@N~A\\~DFn@Fn@RdCFn@Fn@PdBLxAFn@VzC\\rDFn@Fn@d@nFFn@l@tG^hEj@`Hn@rHxAlPFn@XbDp@zHDn@^~Dz@`KFn@@Hj@tGN~AdAnLFn@NbBLzAFn@Dp@Fn@Fn@Z~DTnCFn@b@pFr@nIj@`Hd@nFFl@b@rFZ~D\\`ETnCv@tJZ`Er@nIv@`Kb@pFb@nFj@`HFn@Dn@L~A\\`EDn@rB`WNlBt@tJp@pIZ~DFn@`@pF@L`@`Fh@`H~@pLL`Bh@~GL`BdA`Np@pIr@xIn@~Gl@rG"
                     },
                     "start_location" : {
                        "lat" : 43.032894,
                        "lng" : -80.470793
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 431
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 61
                     },
                     "end_location" : {
                        "lat" : 43.02269159999999,
                        "lng" : -80.5626738
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBase Line\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ccqeG~tujNeF~@yGnAkCf@iB\\"
                     },
                     "start_location" : {
                        "lat" : 43.0188966,
                        "lng" : -80.5615955
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1583
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 285
                     },
                     "end_location" : {
                        "lat" : 43.01971959999999,
                        "lng" : -80.581711
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eEvergreen St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yzqeGt{ujNj@`HDn@j@`HN~ADn@N~ADn@x@`KFj@Fr@^~DFn@Fn@N~ABXPtBFn@l@~Gd@pFbAnLz@`Kd@nFL~AVtC"
                     },
                     "start_location" : {
                        "lat" : 43.02269159999999,
                        "lng" : -80.5626738
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2143
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 395
                     },
                     "end_location" : {
                        "lat" : 43.0033315,
                        "lng" : -80.5951896
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSlant Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ghqeGtryjNlAx@p@\\`@RNHtB~@PHLD`@P`@ND@ZLdBl@b@N`@NHBVJ`@NJD~Ap@jBpAf@`@^Xz@t@z@r@|@r@\\X\\X^X\\XxBfB\\X\\ZvC~B@@jJxH|ChCtAhApFpE^Xf@b@nAbAtEvDxAlAdA~@r@j@p@l@pAxAHLTd@v@zA^hA"
                     },
                     "start_location" : {
                        "lat" : 43.01971959999999,
                        "lng" : -80.581711
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "11.6 km",
                        "value" : 11638
                     },
                     "duration" : {
                        "text" : "36 mins",
                        "value" : 2177
                     },
                     "end_location" : {
                        "lat" : 42.9817681,
                        "lng" : -80.7351618
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eQuaker St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "yaneG|f|jNX~@`@fB^xBHjAFn@`@nFL`Bj@~G`@hFDp@TnCHpAp@nIb@pFZ~D?BFj@Fn@\\~D\\`EH`A^jDFn@?Bv@jIdAnLJdAl@hGVnCFn@N|A@Lz@jJf@nF~@|JN~ATnCFn@b@rEXlDbAnLDn@N~AL`BVrC\\~Dd@pFPvBfAfMl@~GjA`NbBnRr@nIt@nIr@~ITnCfA`NDn@j@`HL~Ap@pIDn@nApODn@p@pIFn@pBbWL~AFn@L~Aj@`HRnCFn@Fn@Dn@L~A\\dE~@lLFn@b@nFdB`TFn@x@|JFr@Fn@Dn@N~AFn@TnCFn@L~AN~AFp@Dn@Fn@\\~DFn@\\~DDh@VtCL~AFn@~@pLFn@Fn@RpCFn@ZxDZ~Dp@pIb@pFZ~DDn@\\`Ev@dKpAjODn@xA`QFn@TrCDj@Fn@n@pIDn@Fp@Dn@L~AL~AFn@J`B@BZzDL~ADn@L`BL~ATnCL~ADp@Fn@Z~DDn@Z`Eh@~GFn@b@rFDl@Fn@p@pIh@~GTpCDn@b@nFFn@xBrXDn@NlB`@bFFn@Dn@TnCFn@TpCDn@TnC\\jE"
                     },
                     "start_location" : {
                        "lat" : 43.0033315,
                        "lng" : -80.5951896
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.3 km",
                        "value" : 7306
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1251
                     },
                     "end_location" : {
                        "lat" : 42.9686774,
                        "lng" : -80.8231464
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eEbenezer Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "a{ieGvqwkNCl@?B?ND^L~A`@pFDn@L~AFn@Dn@NhB\\fFL`Bf@`HP~BF~@Z`EThC?DN~Al@~GTjCd@tFj@~GTnCDn@l@`HL~ATnCLvALfBv@`KZ`EFn@Dn@b@pFv@`KDn@Z~DFn@HdABXFn@Z`Ej@~GFn@Fv@l@vGFn@Fn@Fn@NzA?BFn@L~ADn@r@pIh@`HFn@b@nFHhAVfDL~AJ~AFn@`@pFRnCJnAN~ADp@Fn@L~AFn@Z~DFn@Fn@Dn@\\`E\\~DZ~DTnCTpCBPB\\f@nFFn@@Tz@xK`@fFhAdNfA`NZ`EFn@\\~Dh@~GFn@L`BL~AN~ATnCDn@D`@L~AFn@Dn@Fn@Fn@L`BTnCL~Ap@nIFn@j@`Hb@nFt@vJb@nFDn@TpCDn@Z~DL`BVdD?DpAjOTnCTfC?F\\~DFn@LvA"
                     },
                     "start_location" : {
                        "lat" : 42.9817681,
                        "lng" : -80.7351618
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.2 km",
                        "value" : 3208
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 589
                     },
                     "end_location" : {
                        "lat" : 42.9969964,
                        "lng" : -80.8306381
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDereham Line\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gigeGtwhlNwNbCcKfBc@FoDn@wAT}Cl@c@HiB\\eARa@HiB\\c@Hk@LYDaALE@aALc@FgANeANC@aAPc@HeAReAT}HxAaC`@qDn@eAPeAPsEv@sEv@iBZ_Fx@oDl@a@FyB^w@La@FgANc@FeAPc@Fa@FgAPc@FK@_Cb@gAPa@Hc@Ha@F}HtAgARa@HgAPeARa@FoAT"
                     },
                     "start_location" : {
                        "lat" : 42.9686774,
                        "lng" : -80.8231464
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.2 km",
                        "value" : 7234
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1283
                     },
                     "end_location" : {
                        "lat" : 42.9826418,
                        "lng" : -80.91663559999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSalford Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gzleGnfjlNTrCZ`EFn@Dn@L~AFn@L`BZ~DXtD@HPzBFp@L~A\\~DDn@@F`@hFTrC`@pFFn@f@`HL~AFn@?HRfCL~AFn@@LP`CFn@RpCD\\@PFn@XhDHdAJ`BTnCHfANxBFn@Dn@Fn@Bb@@JL~AFx@TfC@PL~AFn@j@`HDn@t@|I\\jE@JDn@N`BNrBDh@^lEHjADb@H|@Dn@TnCFl@Z`EDl@@@L~ADn@Fl@Fp@`@pFTnCDl@?@Fl@?@H~@JpAJrA@HNvBRdCDn@Dd@L~AFn@RlCTrCDn@Dn@Fn@L`BLbBTnCZ~DL`BDn@v@`KHz@`@tFL`B`@nFFn@L`B`@nFFt@H|@BZFp@NbBRjCDn@Fn@Dn@N~AL`BHx@RnCFn@Db@F|@H~@B^FfAZzE@Fd@`H^bF@LDn@Dh@@DFp@HfAH|@^zEDd@@Hd@|FBVDn@TpCTnCRnCN~AL`BZ~DTnCL`BFn@RnCN`BDl@L~ALbBDl@Fn@Dn@RpCTtCJxAL`BFn@RnCX`EFn@@ND^R|BPhAPt@HVJZL\\LVJTPVLRDDLNLLBBVZBBVXPTp@t@tA`BJJZ^FFb@p@"
                     },
                     "start_location" : {
                        "lat" : 42.9969964,
                        "lng" : -80.8306381
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 496
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 105
                     },
                     "end_location" : {
                        "lat" : 42.9865757,
                        "lng" : -80.9191136
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePigram Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "o`jeG~_{lN_@t@i@r@A@WZA@MPKL]\\}@dAu@j@[TA@a@P_@PgB\\UDsATc@HiBXGBy@T"
                     },
                     "start_location" : {
                        "lat" : 42.9826418,
                        "lng" : -80.91663559999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.7 km",
                        "value" : 4675
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 803
                     },
                     "end_location" : {
                        "lat" : 42.9787401,
                        "lng" : -80.9753472
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBreen Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cyjeGlo{lNC\\AR?NPtBDn@Fn@Dn@j@`HTnCL~ARnCN`BBZ@RFn@\\~DDn@TnCFn@N~ATpCTnCTnCX`E?@Dl@?@X|DFp@?@RlC?@d@`HL~ADp@L|AX`E?@L~AR~CD^?@L~ADl@Fp@TlC?BRlC?@Fn@Dl@@@RlCL~A?BZ|DTnCJtABXL~AZ`ERnCp@pIL~AL~An@pIVzC?BFj@ZbEDn@X`EBNB^Df@LfBp@pIZ~Df@`HL~AL`BL~AFn@`@pFL~AL~ADn@BZBR\\`EFn@Dn@\\~DVnCL~Az@~Jd@pFvBrVL~ABp@APCRU\\Wb@"
                     },
                     "start_location" : {
                        "lat" : 42.9865757,
                        "lng" : -80.9191136
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.1 km",
                        "value" : 7149
                     },
                     "duration" : {
                        "text" : "22 mins",
                        "value" : 1326
                     },
                     "end_location" : {
                        "lat" : 42.9885554,
                        "lng" : -81.0585389
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHamilton Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 29\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "chieG|nfmNdEnQv@hD`A`Eb@`CBLJp@ZfCDd@Fv@FhAJnB@RDpCAjDIxCIbCALSbHSpFEnAMlEIhCKzCIpCu@zUUdHGhAKjAG|@KfAKbAKn@O`A[bB?Bu@xD_A`FOv@g@fCO|@MbAIn@MvAEh@Ah@GdA?FCzD?bB@n@B`VB|O?n@D`Z?h@?rIDrK?~BBdN?`Q?rE@zO?LGbEKrBI|@Gp@]~BUhAi@|Ba@|Aw@bDmA`F]vAMj@]zA_AxDQz@_BjHg@hBOd@Mb@KZGPGNO^Q`@OZOZc@|@c@z@uAhCy@zAm@jAq@pAa@z@g@nAuBlEqBpEyB~EcBhDiCvF]t@Uj@Sf@WbAG\\EVE^I|@Y`JCv@WpGKzC"
                     },
                     "start_location" : {
                        "lat" : 42.9787401,
                        "lng" : -80.9753472
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 245
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 42.9907537,
                        "lng" : -81.0585904
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDorchester Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 32\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oekeGzvvmNQBs@BaBHW?KAc@?eAAc@A]A}@?"
                     },
                     "start_location" : {
                        "lat" : 42.9885554,
                        "lng" : -81.0585389
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.2 km",
                        "value" : 6167
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1059
                     },
                     "end_location" : {
                        "lat" : 42.9791238,
                        "lng" : -81.1307073
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCatherine St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 32\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 49\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Catherine St/\u003cwbr/\u003eCounty Rd 49\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eskeGdwvmNAb@CrDB`A@TBdC@f@@D?L@NBPBRr@vEv@lF\\xBVhBrAfJ|@bGbA~G^~Dj@jGFv@RfDf@zHFz@Dh@?J@^?D?ZAl@A^AZATARCVCTCVE\\CLEZKn@M~@SrAAHa@tC]bCU~AIv@_@`D[pCQdBOvACNGx@E\\C`@Cf@Cf@Ch@Ap@AdC?JCzAApACtBA|BA|@A|@Aj@?BCb@GzACj@ElACxABnA?JDv@LvAr@zI\\zFB`@PlBfAdLh@~FJhALrBD~A@LDnEJfBt@`JN|AXdDZhDLpAZfDX~BNp@v@rDz@vDJh@h@fCNn@ZtA`@bBz@tCBJh@bBJ\\r@~B?Bj@`B|ApF|@jEdAvFX`BXzAr@tDXzA~@dFr@vDLl@~@bFXzADVxBrLF\\Nv@Lp@Nh@Lj@Pn@@BRl@Lb@Z|@l@bBRl@v@|BJX|C|IRj@"
                     },
                     "start_location" : {
                        "lat" : 42.9907537,
                        "lng" : -81.0585904
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2392
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 511
                     },
                     "end_location" : {
                        "lat" : 42.9820814,
                        "lng" : -81.15901339999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRiver Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ojieG|ydnNDLJZJ`@Lf@?BH^FZDXNz@Bj@B^Bn@Bj@@^?Z?lA?v@?b@@jB?lCAdEAlIGtAERKd@Op@?@Mz@K~B?BBp@@v@Bh@n@fNR`E?BAxC]hBCJy@bEwBxKGZsClOy@bFgA~GKh@Ip@MpAi@zHc@tFM~AM|@Ml@WlACFABABMH"
                     },
                     "start_location" : {
                        "lat" : 42.9791238,
                        "lng" : -81.1307073
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1333
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 269
                     },
                     "end_location" : {
                        "lat" : 42.9777756,
                        "lng" : -81.1743025
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eGore Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_}ieGxjjnN@HdBbJ|AdIZbBj@vCVtANt@`CnMdBnJDZrBzKjArG\\jBf@hCl@bDBN"
                     },
                     "start_location" : {
                        "lat" : 42.9820814,
                        "lng" : -81.15901339999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 861
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 240
                     },
                     "end_location" : {
                        "lat" : 42.9742875,
                        "lng" : -81.18067409999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cbieGjjmnNJDXN`@XHJDJBH@T?NCJCJ?BCLAH?D?B?H@JDNBLBHBHDFDFDBFBFBF@BAFAnAm@DAD?^HVLTHD@X?N?V@D@HDJHFFHFHDTRDFBBB@BBFAPCHB@BBH@DBBFFDBF@DATKH?H?B@HFLJLd@@FJZAZ?F@VDN@FDL@@FNHTR\\BHDLHVHd@@NDZ?b@CXGXa@rAYp@ENCDCJETEl@?R@NBLDJBHLPBD@B?H@P?x@"
                     },
                     "start_location" : {
                        "lat" : 42.9777756,
                        "lng" : -81.1743025
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6 m",
                        "value" : 6
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 42.9743425,
                        "lng" : -81.1806926
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ilheGdrnnNIB"
                     },
                     "start_location" : {
                        "lat" : 42.9742875,
                        "lng" : -81.18067409999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 663
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 104
                     },
                     "end_location" : {
                        "lat" : 42.9733065,
                        "lng" : -81.1877106
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "slheGhrnnNBTBHDDDBD?l@EF?H?H@BBBHBL?@DTB^@T?LCTEPCPE`@En@?FCZ?V@ZBRBPFPFJJJJHd@\\DFBDDRNr@BRBN?H?NCXCPIVMb@K^ABCRC\\Cl@?B?`@@d@@T?PDd@Ft@Fn@@VBd@?T@j@@|@Bd@@\\"
                     },
                     "start_location" : {
                        "lat" : 42.9743425,
                        "lng" : -81.1806926
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "25 m",
                        "value" : 25
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 42.9735157,
                        "lng" : -81.18782659999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMeadowlily Rd N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "efheGd~onNi@V"
                     },
                     "start_location" : {
                        "lat" : 42.9733065,
                        "lng" : -81.1877106
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.6 km",
                        "value" : 3554
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 624
                     },
                     "end_location" : {
                        "lat" : 42.9758367,
                        "lng" : -81.22604369999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ogheG|~onNL|@PfANz@PjADVJNJRBL?@BTBR@T@JDTBL@J@F?HAR?P@H@T@JDR@PBV?BAnAEv@G\\AVCV?JG`@IZKPEP?NFt@@j@ARMf@Ol@E\\Ej@Gb@ABIb@K^]|@O^?BERC\\?R?j@@Z?RFx@Fp@?DDj@B~@Bd@BT?V?LBN@LBRBN@PBTDPR|@VjALb@DJLTP^BFN`@FJX^x@jANVLJNJHJRj@BHNh@Tx@Rj@HRNR^f@T\\FNDP?\\ATKdAMpAKdA?@OhAMz@GZEPELGNGNUh@[v@_@bAQb@KRCFGFEDUTWXMRGREJMp@Ov@A@Ql@Qh@GRI\\EJWn@Sh@Ux@A@Ut@Sd@O`@GRCXEZELCDGVY\\KXMb@CF[fAWt@EPEJIVILMRQVGNGPCTAH?H?vA?@?~A?RCzA?b@?f@?x@?N@z@@T?HDh@HdAFx@@Z@d@@^@L@v@?fA?B?bA?d@@X@PB\\@X?RCLAHKb@I^C\\C^A\\?d@@h@@`@Cb@?NEl@Ax@A`@Ah@Ah@ATCPEJGHSRKHOLEHGHCJGVA@ELKPQTIFEDIBG@QAWAQAg@CI?IBI@OJ_@ZMJUTGHCLAJ@NBL`@fB^|AJf@@L@H?P?V@L@LFb@DVH^TrABJ@DFLVd@JNHLf@l@DH@H?H?DEFCDAFAD?N"
                     },
                     "start_location" : {
                        "lat" : 42.9735157,
                        "lng" : -81.18782659999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 168
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 102
                     },
                     "end_location" : {
                        "lat" : 42.9744056,
                        "lng" : -81.22538449999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAdelaide St N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_vheGvmwnNJCLC@AvAc@t@WNEBARGDCLEPITMNK"
                     },
                     "start_location" : {
                        "lat" : 42.9758367,
                        "lng" : -81.22604369999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "26 m",
                        "value" : 26
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 42.9743266,
                        "lng" : -81.22568509999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eAda St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "amheGriwnNN|@"
                     },
                     "start_location" : {
                        "lat" : 42.9744056,
                        "lng" : -81.22538449999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "15 m",
                        "value" : 15
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 42.9744309,
                        "lng" : -81.22579460000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qlheGpkwnNQPA@"
                     },
                     "start_location" : {
                        "lat" : 42.9743266,
                        "lng" : -81.22568509999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 583
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 42.9730369,
                        "lng" : -81.2320151
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "emheGdlwnN?BAPAR?@B@FHBH?@@B?B?B?N?B?XAF?JCNEXGXETI\\CRCNAJ?JAN?h@Dv@DfABRF\\Rz@@J@L?NALAJEREPGPAJ?H@RDHJZL\\JZ@BFTJT\\j@l@|@nAdBt@lAFLBL"
                     },
                     "start_location" : {
                        "lat" : 42.9744309,
                        "lng" : -81.22579460000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 652
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 125
                     },
                     "end_location" : {
                        "lat" : 42.9738327,
                        "lng" : -81.2393896
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "odheGbsxnNFV@N@PAbAC`AARCXGNENA@OZ{@|AY\\Y`@KREJM^AFCHCNCb@An@Ab@?TBd@D^D\\D^NrABTDRBL@JZ`DBT?PCNG\\ETAHAL?Z@b@?B?\\C\\CNGHADKd@"
                     },
                     "start_location" : {
                        "lat" : 42.9730369,
                        "lng" : -81.2320151
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "66 m",
                        "value" : 66
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 38
                     },
                     "end_location" : {
                        "lat" : 42.9743478,
                        "lng" : -81.2398039
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eClark's Bridge\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWellington Rd\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "miheGdaznNo@d@[TUPEB"
                     },
                     "start_location" : {
                        "lat" : 42.9738327,
                        "lng" : -81.2393896
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 108
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 58
                     },
                     "end_location" : {
                        "lat" : 42.9739688,
                        "lng" : -81.2409577
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eThames Valley Pkwy\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ulheGvcznN@TCTD@@DBJJb@DJBBFBBRFb@Vv@"
                     },
                     "start_location" : {
                        "lat" : 42.9743478,
                        "lng" : -81.2398039
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2002
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 403
                     },
                     "end_location" : {
                        "lat" : 42.9806023,
                        "lng" : -81.2563674
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eThames Valley Pkwy\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ijheG~jznNJTFLHVHh@\\lCDR?J?LGb@OZKPO^Sj@O\\[b@[N]Hq@FwANyANe@FMFSLa@VKHKZ?JAR@h@C^C`@Cd@?fA@b@B`@Nr@FRBNDR?DFVBPDLFHLJPJh@Z@?VNFHV`@FLPZHXJZFd@BT@NANANI^Kf@EL[b@_@d@o@l@eBfBYXKVMRo@z@CJGRGPIRCHCJGRIVAFENQ^OTINGHEFAFCLAPATAZ?D?J@PDb@XnBLlBBNF\\Nv@Lf@Jf@@BJb@@HDNAT?HAJGRMLMLQDO@KAC?O?OAA?U?WC_@Cc@GYICAKAG?SCY@A@a@LA?aBn@A@QHOFKDA@QJg@LE@A@a@BCBKF]R_@P_@Nc@P"
                     },
                     "start_location" : {
                        "lat" : 42.9739688,
                        "lng" : -81.2409577
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "68 m",
                        "value" : 68
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 42.9802393,
                        "lng" : -81.25704329999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eKing St Bridge\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wsieGhk}nNFL@DRb@Td@JTFP"
                     },
                     "start_location" : {
                        "lat" : 42.9806023,
                        "lng" : -81.2563674
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 558
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 128
                     },
                     "end_location" : {
                        "lat" : 42.9798819,
                        "lng" : -81.2629256
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eBecher St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oqieGno}nN[NEBWLGBKDSFA@C@CFAJCLAFAPC\\AVCVKvBAP?L?PBRDNBNLv@DZ@v@@hAAh@Aj@?r@@j@Fd@Nt@`@vA@@Pd@Rf@HPFR@B\\b@LPFFF@"
                     },
                     "start_location" : {
                        "lat" : 42.9802393,
                        "lng" : -81.25704329999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 170
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : 42.9787922,
                        "lng" : -81.2637539
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eRiverview Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "goieGht~nN?@D^BRFTFLHJB@FBL@j@W@?VMFAF?BFBHFP?@FPLPHJFBLB"
                     },
                     "start_location" : {
                        "lat" : 42.9798819,
                        "lng" : -81.2629256
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 354
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 50
                     },
                     "end_location" : {
                        "lat" : 42.977627,
                        "lng" : -81.26758
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRiverview Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mhieGly~nNCLCTAb@@L?J@LFT@HDL^pA`AvDJ`@DHBB@@B@B@@?@?PVFRLt@JbCD^LPNF"
                     },
                     "start_location" : {
                        "lat" : 42.9787922,
                        "lng" : -81.2637539
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "22 m",
                        "value" : 22
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 42.97759509999999,
                        "lng" : -81.2678378
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eEvergreen Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eaieGjq_oN@f@@D@D"
                     },
                     "start_location" : {
                        "lat" : 42.977627,
                        "lng" : -81.26758
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 108
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 42.9766736,
                        "lng" : -81.26812939999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eTerry Fox Pkwy\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_aieG~r_oNjARF@vALBB@@FN"
                     },
                     "start_location" : {
                        "lat" : 42.97759509999999,
                        "lng" : -81.2678378
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.8 km",
                        "value" : 2809
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 489
                     },
                     "end_location" : {
                        "lat" : 42.96770739999999,
                        "lng" : -81.2942647
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTerry Fox Pkwy\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "e{heGxt_oNAp@CxEAZB`@DbAJlDFxDLtE@JJvD?DNlBN|ABPLzA?LFzA@Z?b@An@ExAEp@An@Cn@Ch@A\\Ij@AZAXGbC?zABhAD~BJvA@XD`@D^Df@Fx@B\\DT@HH`@Z`BDd@Fb@BXBX@RBLFXTnABTDN@J?NFzC@TB`ADz@DzB@t@@XDz@BXHr@Jx@TfAL^T`@FFHFLDL@X@RA^IH?FAJ?N@fABF?DBJFJFNNHBFBD@F?B?BAFCTS^_@LGVIFA~@Dd@GBATIh@]\\GLBPFJLLNd@bCb@lC@LPnAf@pBb@`BBFJv@F^BTFRHTFPPP\\Z\\ZTRd@`@vBhBHHp@j@LJl@X`@Bj@Ex@O"
                     },
                     "start_location" : {
                        "lat" : 42.9766736,
                        "lng" : -81.26812939999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.9 km",
                        "value" : 1875
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 315
                     },
                     "end_location" : {
                        "lat" : 42.9579094,
                        "lng" : -81.3104491
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eMaurice Chapman Walkway\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ecgeGbxdoNRIDAZWRSLERDxBf@rAZT@\\?h@Hb@Hp@b@LPVZx@dALNdBxBn@p@x@z@tAvAVXnAnAfBdBJJd@`@PZBP@L@D?J@P?T@LBRJVLVLZRx@Lb@Rr@J^Rt@Vz@TfATx@X~@BHh@nAXt@Vr@j@`BJZRh@JVb@hAlApDr@vB`@tAHV^vAT|@DZBHNhAHj@DNBRBP@BD`@@LH`ALvADd@Bn@@D@j@?@El@?DEf@?@?f@@H@PJJ"
                     },
                     "start_location" : {
                        "lat" : 42.96770739999999,
                        "lng" : -81.2942647
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 132
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 42.9578912,
                        "lng" : -81.3120651
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE Springbank Gate\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "}eeeGh}goN@LBhAAT?b@?\\?f@?F?bB"
                     },
                     "start_location" : {
                        "lat" : 42.9579094,
                        "lng" : -81.3104491
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 475
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 92
                     },
                     "end_location" : {
                        "lat" : 42.958119,
                        "lng" : -81.31788759999999
                     },
                     "html_instructions" : "Continue straight",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "yeeeGlghoN?hC?x@?bE?DAtAAjB?BC|AA`@EfBCx@Ep@Cr@GlACv@Ch@"
                     },
                     "start_location" : {
                        "lat" : 42.9578912,
                        "lng" : -81.3120651
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 293
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 84
                     },
                     "end_location" : {
                        "lat" : 42.9584809,
                        "lng" : -81.32143649999999
                     },
                     "html_instructions" : "Continue straight",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "ggeeGxkioNCp@GdBKvCKdACVKfAWnCB~A"
                     },
                     "start_location" : {
                        "lat" : 42.958119,
                        "lng" : -81.31788759999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 210
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 85
                     },
                     "end_location" : {
                        "lat" : 42.9566257,
                        "lng" : -81.32171679999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSpringbank Gate\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "oieeG~ajoNPDLDD@ZD@?`@B@?b@C\\CV@XAX?N?L@J@ZDNDFBFBTN"
                     },
                     "start_location" : {
                        "lat" : 42.9584809,
                        "lng" : -81.32143649999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 298
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 164
                     },
                     "end_location" : {
                        "lat" : 42.9539863,
                        "lng" : -81.32124329999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eNorth St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}}deGvcjoNHDB@F@D?D?n@IlFs@dAKbAOl@IVE"
                     },
                     "start_location" : {
                        "lat" : 42.9566257,
                        "lng" : -81.32171679999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.1 km",
                        "value" : 3076
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 626
                     },
                     "end_location" : {
                        "lat" : 42.9505899,
                        "lng" : -81.3587452
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eByron Baseline Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mmdeGv`joNN|CBl@LpCJrCTrFL`DPhERrFRpEDhALpC?F@X@ZJhCNxDJjCFzAHjBVhHZdHDrAL|CHpBXhIFrBJbEFbAH~BLvC@RBZ@PF`BBr@Bj@JxCDnABl@D`BF`B@H@T?NF`BBh@@`@?DBl@JrC@^B`AF~AFjBBh@Bh@@RFz@HtAPzCR`ERnDT`EPpCZpFPpCH|A"
                     },
                     "start_location" : {
                        "lat" : 42.9539863,
                        "lng" : -81.32124329999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 205
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 42.94883400000001,
                        "lng" : -81.35795999999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWestdel Bourne\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "exceGdkqoN`Bi@n@UlE}A"
                     },
                     "start_location" : {
                        "lat" : 42.9505899,
                        "lng" : -81.3587452
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.9 km",
                        "value" : 2859
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 485
                     },
                     "end_location" : {
                        "lat" : 42.9407449,
                        "lng" : -81.3913022
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eElviage Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "emceGffqoNv@~EPpAT|Av@hFh@zDj@xDHn@`@jCzAzJ\\dCvAtJXhBF`@n@xDTpALv@Hn@Hn@@H^~BJn@Jl@`@jCJl@Hj@fB`LnAdIl@zDdB`LJn@j@pDdA~Gj@xDJl@`@lCHl@Jl@Hn@ZnBRtA@FJl@x@fF`@jCJn@`@hC|AtJ"
                     },
                     "start_location" : {
                        "lat" : 42.94883400000001,
                        "lng" : -81.35795999999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 437
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 83
                     },
                     "end_location" : {
                        "lat" : 42.9444773,
                        "lng" : -81.3929737
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBrigham Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "szaeGrvwoNaBh@cA\\mExAEBiFhBgC|@"
                     },
                     "start_location" : {
                        "lat" : 42.9407449,
                        "lng" : -81.3913022
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.6 km",
                        "value" : 2605
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 467
                     },
                     "end_location" : {
                        "lat" : 42.9328424,
                        "lng" : -81.42071969999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eGideon Dr\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 3\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_rbeG`axoNZv@LXHTL\\L`@Pn@dA|DzBpI|@fDFRn@|BJZ@BNb@?@Vn@Zv@\\v@~AvDFNTf@\\x@Xt@Vp@p@tBjAtDl@jBV|@zA|E?@`BdFbEtMfAhDlCtIPl@bAhDbAlDdAhDr@~Br@xBv@|BBJL\\h@|AZbARr@Ph@t@fCZfAzAzEvBbH"
                     },
                     "start_location" : {
                        "lat" : 42.9444773,
                        "lng" : -81.3929737
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.0 km",
                        "value" : 3019
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 644
                     },
                     "end_location" : {
                        "lat" : 42.9538014,
                        "lng" : -81.4431245
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKomoka Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 16\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gi`eGnn}oNq@XkBf@_Bf@sFbBG@gBf@ODqAd@iCx@_@LA?q@RQFa@LC@aA\\u@X_@NSJWNYLq@j@yAxA[ZIHqCbE}BlDQVcBdCcFxHs@bAWb@eBhCkAfBcCrDm@|@{@pASXqAnBiD~EqB|CW`@Yb@mAdByAvBcAvA}ChEgAbB_B~BuApBqAlBeBhC[d@SVEFY`@EJQTkAhBs@bAcElG"
                     },
                     "start_location" : {
                        "lat" : 42.9328424,
                        "lng" : -81.42071969999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2445
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 464
                     },
                     "end_location" : {
                        "lat" : 42.9381957,
                        "lng" : -81.46427779999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eOxbow Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gldeGnzapNjAhBdBhCX`@|BlDdBjCX^?@HLfBjCX`@rDpF^j@xCnEjAfBpH|KX`@pK|OZd@~BjDdBhCxCnEzJfOnAlBBDjCzDV`@rDpFjAfBX`@Vb@"
                     },
                     "start_location" : {
                        "lat" : 42.9538014,
                        "lng" : -81.4431245
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.6 km",
                        "value" : 3645
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 729
                     },
                     "end_location" : {
                        "lat" : 42.96144959999999,
                        "lng" : -81.4958462
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAmiens Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wjaeGv~epNkAfBY`@eFtH_CjDmAfBW`@yCnEeBhC[b@cBhCY`@iDjFuCfE_CjDkAfB_CjDeBhCCBaClDaChDGLa@n@yAxBs@bA_AvAc@r@eBlCq@dAiAhBcBjCYb@q@dAGJ}A~B_CjDcCjDYb@yBdD}CtEeBjCY`@uApByCtESXyClEeA`BqAlB_ClDq@dAqDrFs@dAY`@]f@sChE"
                     },
                     "start_location" : {
                        "lat" : 42.9381957,
                        "lng" : -81.46427779999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "14.6 km",
                        "value" : 14577
                     },
                     "duration" : {
                        "text" : "43 mins",
                        "value" : 2596
                     },
                     "end_location" : {
                        "lat" : 42.8690729,
                        "lng" : -81.62284369999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eOlde Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "a|eeG`dlpNpCjDr@|@@BdBjCV`@r@dAp@dAVb@jAfBX`@Xb@hAfBr@dAVb@X`@Xb@V`@Xb@X`@hAhB~BlDp@dAjAhBV`@r@dAjAhBp@dAX`@T^@BbBjCXb@dEzGXb@V`@Xb@bBlCjAlBhAbBr@bA~BlDdBhCr@bAdBhCDFBBpB~CvCnE|BnDX`@p@dAXb@p@dA`ChDx@jARXNTT\\TZNT`AtAr@dAlCxDJPr@dApDrF|IjNv@nARXjAhBbBjCX`@Vb@jAfB^l@dA|AX`@|BlDdBjCf@t@lC~Dv@nAnFpIT\\h@x@jAhBpDrFhLlQ`HtK|BjDpDrFdBhCbJfNdBhCdF|H~FzIpEdHX`@jAhB|BnD~AdCp@dAfAbBDFp@bAJTFLHJLP\\f@|BlDlAfBjAfB|CvEZb@|@tAX`@bBjC~OtVfD~E~BjDfBlCzBhDxCpEjAfBbA|Ax@nAp@dAbBjCpDtF@@n@bAjAfBfAdBxCnE|BjDXb@jC|DpB|C|BlDX`@jAhBjAfBjAfBjAfBXb@zA|BjGnJXb@dBhCjEtGV`@r@dA|BlDjAfBdBhCp@dAXb@pDrFhEvGV`@vCpEp@bApDtFp@dAjAfB~BnDhEtGX`@|BlDXb@|BlDjAfBXb@X`@|BlD|BlDdBjCfAbBdBhC~@vAJPnB~CjC|DV`@lAfBdBjCvBbDDFdBjCbBjCX`@p@dA~BnDhEtGvCpEbFxHhEtGbFxHVb@vG~JhEtGXb@nDrFdBhC"
                     },
                     "start_location" : {
                        "lat" : 42.96144959999999,
                        "lng" : -81.4958462
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "62 m",
                        "value" : 62
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 85
                     },
                     "end_location" : {
                        "lat" : 42.8686748,
                        "lng" : -81.6223193
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMelbourne Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMiddlesex County Rd 9\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uzsdGv}dqNnAgB"
                     },
                     "start_location" : {
                        "lat" : 42.8690729,
                        "lng" : -81.62284369999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.3 km",
                        "value" : 7268
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1259
                     },
                     "end_location" : {
                        "lat" : 42.82254320000001,
                        "lng" : -81.6854805
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eOlde Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "exsdGnzdqNfCxDXb@jMlR|ElH~CvElAfB|@tAf@r@pDrFvCnEl@~@tDvFlAfB|BjD~FxIV^@B|BlDrDzFlDlFRXpEzGdBfCbCrDVb@pDpFXb@hEtGdBjCjAfBvCnEdBjCV`@vCpEX`@~BlDrHfLRZdBjCVb@vCnEr@dA|BnDtCpEX`@b@p@rB~CvCnEhAdBrDrFXb@~BjDX`@X`@p@dAr@dA|BjDX`@pDrFX`@dBhC~BlDtB`D~CzEX`@tG~JVb@~BlDtCpEdBjCX`@bBjCrKlPjEvGp@bAtG~JhEvGvCpEn@~@"
                     },
                     "start_location" : {
                        "lat" : 42.8686748,
                        "lng" : -81.6223193
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.4 km",
                        "value" : 6422
                     },
                     "duration" : {
                        "text" : "19 mins",
                        "value" : 1160
                     },
                     "end_location" : {
                        "lat" : 42.8577998,
                        "lng" : -81.7445216
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eThames Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 8\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow County Rd 8\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{wjdGfeqqNeBfCkAlBW`@sFfJaA`Bw@rAaBnC_CxDkEhH_@p@iCjEsIzNyEdIsDvFu@hASZ_FjHy@nAY`@uHzKMRkBlCgEnGsCfE{JfOkFnHuDlFMNuAlBmBlCi@t@}AvBUZqM`R}GtJuEtGaY|b@[d@wNvTuCpEmEzGq@dAU^GLEHEHCJCFAFCD?DAHAFAHAJ?HAL?NAvCAhNA`B?`B?rCAn@?bB?pCA`BClS"
                     },
                     "start_location" : {
                        "lat" : 42.82254320000001,
                        "lng" : -81.6854805
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.8 km",
                        "value" : 3792
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 698
                     },
                     "end_location" : {
                        "lat" : 42.8557198,
                        "lng" : -81.7897218
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eWinter Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gtqdGfv|qN?hU?hK?~@?FAlLAfKC~UAvIAbE?p@AtI?`B?bBAn@?p@A~O?|FAfE?fFAn@AtG?N?p@AbEAxLArCAdH?n@AbEAtFCzOAxEAbEA|B?NBbABh@D\\BRDLDNBJJZNZNXPXJNRVZZpApAlBpBj@t@NTNZHNFVJf@FZ"
                     },
                     "start_location" : {
                        "lat" : 42.8577998,
                        "lng" : -81.7445216
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "45.6 km",
                        "value" : 45616
                     },
                     "duration" : {
                        "text" : "2 hours 16 mins",
                        "value" : 8164
                     },
                     "end_location" : {
                        "lat" : 42.8619507,
                        "lng" : -82.348309
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRokeby Line\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ggqdGvperNDTDb@@R?V?dF?lE?zE?jI?rF?hK?n@?`B?bE?p@?p@ArF?tD?jC?vI?`B?p@?pC?p@?tF?n@?`B?`B?r@?~A?n@@dE?n@?p@?rF@`B?p@?`B@tF?n@?p@?n@?p@?rF@fH?zB?T@bE?tF@dH?p@?RA|D@rA?jJ?p@@`Y?dH?fK?vI@rC?fK?t@@rL?`B@bE@vI?rC@`B?`B@bE?rC@dHBjY?f@@tFBdH?`B@`C?bDA`B?bE?bB?n@?dABbL?p@?n@@dE@bE?pC?p@@dH@p@?n@?bE@dH?tJ@jACl@CPCPK`@Mb@IVENGRCR?JAJ@H?H@H@F@FDLRp@DVHZFXD\\B^?b@?`B?rC?p@?bJ@rA?t@?`D?\\@`B@dD?~B?dF@nC?hB?J?dC?J?zB?pB@`B?tIBzOAjRBhJ@fK?`B@tF@tF?n@BlQ?n@?d@BdMBtI?p@DzOBpL?PHnT@zC@hCBxL?n@@dEJvc@@tFB|G?x@Fb\\@fC@hIH|i@BxL@vINz}@Fnn@?p@@lTBjN?n@@vI@jQ?p@BzUBfO@vIBb\\Hzr@@nGBtDBvFBrADtCFdBBn@Br@BfDAjDGhNAp@C`I?TM|RQ~XY|b@?ZG|NCrDAp@Wjb@_@~n@EtIIxLq@lbAk@fu@?tAs@hsAMfPk@py@g@p`AOtSGdHWb\\s@f|@OnTGdHIvIGtIkA`~AGdHCfDa@jh@C`B[~a@IxL?lACnDAn@QrZE|GYhe@G|GG~II~KMbOIfKKhNGhKAn@GhJAnBA~@EbEAtBGpGClC?DCpCCxDCz@?@IfAMdAMj@Id@Qx@i@tBENm@`Ci@`CI^YbB?FIz@GnA?j@?x@@pAB`A@TPxA\\vAn@pB\\bAt@rCFPHdABdACdFKzOEtFCbECpCA`BEbEA`B?ZAdAAdBA`@EnEA`BEtFA`BCbEAn@ArCCrCGtICbEAp@EdHCrCMjQEdHGdHCfECn@C^EZ?JA\\AbAIhNCbEEtFCbECbEEtFKzOIhOGxKEvLEhKGhNKjQ?p@IxLCrFWhe@EdHK~ROpZC`CA`BGvLGxLOpWM|RGfKEtIEfHUx_@CpFEdHGfKM~UMpWO`YCbESx]c@lp@KhNKvOAdBK|RMlTEdHArC"
                     },
                     "start_location" : {
                        "lat" : 42.8557198,
                        "lng" : -81.7897218
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "27.3 km",
                        "value" : 27316
                     },
                     "duration" : {
                        "text" : "1 hour 23 mins",
                        "value" : 4965
                     },
                     "end_location" : {
                        "lat" : 42.616871,
                        "lng" : -82.35785899999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eKimball Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLambton County Rd 31\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Kimball Rd\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "enrdG|sruNhp@r@jWX`OPb@?f\\^fB@`MNrMNhKLzFHjKLxOTlY^dI`@dFH`[f@rMRzOVnLLph@d@xa@`@~GF|HF|EFbIJvEFrTVjKLtr@r@`^^vTX~GJjX^tiAbChMLfACbD]tIoAdKyA|LgBHCXErAQLChHeAVElCYx@@b@?fA?v@@lANpB`@D@hBp@|KdFjFzBj@RbATn@Pb@Jv@HbAFx@BvEJD?dBDF?\\?fGLpDHbBBF?Z@b@@hBFL?D?tB@xFHb@?~GHb@@zEFnXb@|NL|g@NvE@vWHb@?jB@lNVlUd@bINd\\n@~NTfRRh]ZfJJln@n@b@@bDDzKNb@?~GJhTZb@@vA@jOZ~GL|GNpPZ|S\\dw@lAnHRvN`@|b@jAtN^xkA`B"
                     },
                     "start_location" : {
                        "lat" : 42.8619507,
                        "lng" : -82.348309
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.7 km",
                        "value" : 2675
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 472
                     },
                     "end_location" : {
                        "lat" : 42.6175033,
                        "lng" : -82.3905355
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLangstaff Line\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mrbcGrotuNMxSO~XO~[MzR_@lt@IhQClFClFA|@AbCCpD?^CbC?LCrA?bA"
                     },
                     "start_location" : {
                        "lat" : 42.616871,
                        "lng" : -82.35785899999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1649
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 290
                     },
                     "end_location" : {
                        "lat" : 42.60301760000001,
                        "lng" : -82.3892306
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNelson St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kvbcGz{zuNL?HCHKDO@KBc@BQBKFMHGBCNCd@@d@?J?p@@|@?fAAfA?z@Ch@ARAlAClAEz@Cb@Cd@A|@AxA@~@?zA?|A@~@@|@?~BBrB?dA?n@?rA?lAAD?nAClAEp@Cn@AbAEbAChAEjBG`H[lBWNI"
                     },
                     "start_location" : {
                        "lat" : 42.6175033,
                        "lng" : -82.3905355
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 745
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 129
                     },
                     "end_location" : {
                        "lat" : 42.5991089,
                        "lng" : -82.3957312
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCrothers Trl\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{{_cGtszuNZ`@LNDDFBNFPHXLRHZFPDJFBL@L@LJn@DVDXLNJJPPLPLTFPN^FNHRBDDHXd@b@n@XXJLf@`@l@`@FFFNNXBHBBHHJFBDtA|D@@hAxCTp@HRDNBF?B?DADEDKHCBKJAFAH?HBHBNFV"
                     },
                     "start_location" : {
                        "lat" : 42.60301760000001,
                        "lng" : -82.3892306
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 681
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 114
                     },
                     "end_location" : {
                        "lat" : 42.5929885,
                        "lng" : -82.39593979999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eForhan St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mc_cGh|{uNpAEz@?@?L?|A@nB@xDHrDHrFJxFJ"
                     },
                     "start_location" : {
                        "lat" : 42.5991089,
                        "lng" : -82.3957312
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.9 km",
                        "value" : 6926
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1256
                     },
                     "end_location" : {
                        "lat" : 42.5904149,
                        "lng" : -82.4788248
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDufferin Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-40 N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Dufferin Ave\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "e}}bGr}{uNC|ECv@A~@?ZAlAAt@BtF?^I|ACjEAtACjJKrRIpKEhFCpEM|UEpEIjOC~DErFAtBCpC?z@AvBQr`@GjQCpD?p@E`C?fAAhACrFAn@OnZEhJAnBCnA?rBCtFIrNUpa@ElKOhZEvFCtDa@ns@CdDD|ADt@Bl@Df@Hn@Fj@Lv@F\\HXFVFVLd@N`@L^BHHR^z@@@Rb@LZDJVd@P^BDNZDHVh@Rb@DHN\\BFN\\BD`@bAFBDLp@rAZp@N\\t@~AJRlBbEVj@Vl@BDVp@N`@Nf@"
                     },
                     "start_location" : {
                        "lat" : 42.5929885,
                        "lng" : -82.39593979999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.9 km",
                        "value" : 3944
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 700
                     },
                     "end_location" : {
                        "lat" : 42.606963,
                        "lng" : -82.5195116
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTecumseh Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 32\u003c/b\u003e",
                     "polyline" : {
                        "points" : "am}bGrclvNVdARdANt@Hr@Hr@Dj@Bh@Bf@Bj@@v@?b@?ZAf@Ah@Af@C`@C\\Gl@Gl@Eb@If@[pB}ApJa@hCmChPwEpYeAnGg@~C{@fFi@hDo@rDOp@EPENGPGNMVa@x@_CfEsBxDWb@Wd@kC|EqElIWb@iFrJw@rAkAzB_@r@w@vA{BdEGHe@z@g@~@a@v@{@|A_AbBU`@cEtHe@z@kC~EINmC~E{@zAUd@Yf@m@fAUb@s@pAsBxDu@tA_AdB"
                     },
                     "start_location" : {
                        "lat" : 42.5904149,
                        "lng" : -82.4788248
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 989
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 177
                     },
                     "end_location" : {
                        "lat" : 42.615041,
                        "lng" : -82.514579
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRiver Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ot`cG|atvNwIcEeEoBqG{CeDiAkDiAICoDeCAAiEwDgAq@"
                     },
                     "start_location" : {
                        "lat" : 42.606963,
                        "lng" : -82.5195116
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "30 m",
                        "value" : 30
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 42.615127,
                        "lng" : -82.514922
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAustin Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_gbcGbcsvNQbA"
                     },
                     "start_location" : {
                        "lat" : 42.615041,
                        "lng" : -82.514579
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1305
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 669
                     },
                     "end_location" : {
                        "lat" : 42.6187402,
                        "lng" : -82.53000829999999
                     },
                     "html_instructions" : "Take the \u003cb\u003eAlgonac - Walpole Island\u003c/b\u003e ferry to Algonac\u003cdiv style=\"font-size:0.9em\"\u003eEntering the United States of America (Michigan)\u003c/div\u003e",
                     "maneuver" : "ferry",
                     "polyline" : {
                        "points" : "qgbcGfesvNwHhZ{BnPsCt]mApK{@fE"
                     },
                     "start_location" : {
                        "lat" : 42.615127,
                        "lng" : -82.514922
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "65 m",
                        "value" : 65
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 42.61864,
                        "lng" : -82.5306961
                     },
                     "html_instructions" : "Continue straight",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "c~bcGpcvvNI^AH?D?D@B@BBFRVBB@B?@?FAX"
                     },
                     "start_location" : {
                        "lat" : 42.6187402,
                        "lng" : -82.53000829999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1754
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 345
                     },
                     "end_location" : {
                        "lat" : 42.6304368,
                        "lng" : -82.5172838
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSt Clair River Dr\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dairy Queen (Treat) (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "o}bcGzgvvN]YOKqCwBiCsBmCqB}@s@kA{@sCwBuCyBcCgBmCoB}AoAsAaAe@_@KIGIKKGIKQMW[}@e@wAYaAg@_Bs@uB}B}GiBoF_AoBISIQMQOUQWMQOSIIGK_@a@i@i@a@_@WQg@_@[QUMmAk@"
                     },
                     "start_location" : {
                        "lat" : 42.61864,
                        "lng" : -82.5306961
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "10.3 km",
                        "value" : 10304
                     },
                     "duration" : {
                        "text" : "31 mins",
                        "value" : 1836
                     },
                     "end_location" : {
                        "lat" : 42.7205391,
                        "lng" : -82.50053319999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eM-29 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eN River Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow M-29 N\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Chemical Bank (on the left in 10.1&nbsp;km)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "ggecG~ssvNWMuAo@q@[sAm@WKYOOGKEUIA?UIg@M[I]I}EaAiASsAU{E{@_ASm@Ow@QWGUCWEe@Cg@Ce@Aa@?eA?{@@a@@eBDq@BqAB{ABS@_DHuEVyFXkB@M?Q?[CSC[GWEIAeEs@yHsA{B_@}AWWEq@Ks@K_@EUA]A_@?]?_A@iA?[@kBFwAFO@_AD}AJmCNy@FyCJkADw@DA?aAH}@LmEp@_@DS@W@o@@aC?}AA}AEM?a@B]BOBUBSFQFQHOHOLQLe@d@URc@b@i@b@MHMH[LOFODOBQBY@S@M?UA[AYCeAMw@KgD[yLoAqLoAc@EuLqAaDc@a@Ei@Gk@Ic@G[EuAYiEcAqEkAa@KeCm@_Cg@cCm@uBi@gJyBe@KmA]o@Mu@QSGu@QqA[aAWuCu@kBa@gBc@cDw@aAUOEgAUsCs@}Cu@aBa@e@OaB_@cHeBeDw@wCq@UGcCk@c@M_B_@UGuEiAkBc@kBg@}A_@mA[mAYaAUYIUEeAQA?iBUe@CQCg@GiAKUAo@Eg@CYE]EcAUUGOIMIWOi@c@cAaAmDmDeAaAWYyBwBq@o@QOKIOKSOWMoB_AgHiDKEwAq@gD_Bc@SMEc@K_AUm@CUAiABc@@o@BaHPU@aB@cBDY@{@@_DBoBDgDBiBBaD@cDByDF_DBkCD{C?kCByB@sGH"
                     },
                     "start_location" : {
                        "lat" : 42.6304368,
                        "lng" : -82.5172838
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 95
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 42.720516,
                        "lng" : -82.50169059999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWest Blvd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kzvcGhkpvN@|@@tA?r@?^"
                     },
                     "start_location" : {
                        "lat" : 42.7205391,
                        "lng" : -82.50053319999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 191
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 42.7222269,
                        "lng" : -82.501893
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eButler St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gzvcGprpvNQ@}BNeET"
                     },
                     "start_location" : {
                        "lat" : 42.720516,
                        "lng" : -82.50169059999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "22 m",
                        "value" : 22
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 42.72222319999999,
                        "lng" : -82.5016181
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMetropolis St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}dwcGxspvN@u@"
                     },
                     "start_location" : {
                        "lat" : 42.7222269,
                        "lng" : -82.501893
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.5 km",
                        "value" : 4512
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 801
                     },
                     "end_location" : {
                        "lat" : 42.7619853,
                        "lng" : -82.4932536
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{dwcGbrpvNQA}COcBCcDEsDGkAAk@?MD}DIqFKqDGkKOsDGsEIg@AsDEsDGK?kEGiKOi@A{CE{@AM?yCEK?eBEsCIc@G_BSkB_@mA]yC{@u@SaCq@oBk@{@W{GoBSGyGsBiCs@}Aa@qBi@mDaA}@WyEyA]IiBg@w@QSGq@SaCq@kA]{Bm@s@Ug@AMAu@QiD_AKEqA]c@M]SU[WM_EcA_Bg@g@OwB]sBSmACE?s@IUEQOKKII"
                     },
                     "start_location" : {
                        "lat" : 42.72222319999999,
                        "lng" : -82.5016181
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "15 m",
                        "value" : 15
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 42.76211319999999,
                        "lng" : -82.4933073
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eRecor Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "m}~cGx}nvNWJ"
                     },
                     "start_location" : {
                        "lat" : 42.7619853,
                        "lng" : -82.4932536
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 664
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 115
                     },
                     "end_location" : {
                        "lat" : 42.7644654,
                        "lng" : -82.50078649999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRecor Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "e~~cGd~nvNEPYrAeAbFcBfH]fBQ~@_CrKcAtEYrA"
                     },
                     "start_location" : {
                        "lat" : 42.76211319999999,
                        "lng" : -82.4933073
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 km",
                        "value" : 1437
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 253
                     },
                     "end_location" : {
                        "lat" : 42.77240889999999,
                        "lng" : -82.5120422
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}l_dG|lpvNCCEAA?A@?@CJU|@a@jBELS|@]~AQt@]dBS|@Sz@K`@KVMVMPMNKJIDQF]HE@e@Jc@HC@E@CBC@CBC@MBO@GBUDq@Pa@JQDe@Pm@`@e@Za@ZSPIFEHABc@b@[\\AB{@v@c@f@_@\\QVU`@Q`@Ob@I\\Id@Gb@Gv@Ex@AZAV?JCp@KvAMbBIbAGh@Mv@M|@CLQ|@Kb@AFCHEDABA@C?C?E?O?I?a@@w@@y@@g@@c@?e@@K?QB"
                     },
                     "start_location" : {
                        "lat" : 42.7644654,
                        "lng" : -82.50078649999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "18 m",
                        "value" : 18
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 42.7723993,
                        "lng" : -82.5122631
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRemer Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q~`dGfsrvN@j@"
                     },
                     "start_location" : {
                        "lat" : 42.77240889999999,
                        "lng" : -82.5120422
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.0 km",
                        "value" : 4982
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 951
                     },
                     "end_location" : {
                        "lat" : 42.8171716,
                        "lng" : -82.5144945
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eKing Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "o~`dGrtrvNu@BqDFyHJqABwFH}m@rAuRb@sQVsMPyFHcR^eINaABwABgBDsDJ[CmBDqB@I?[@i@Bs@@iBDaAH]@c@@kBByBFwXf@gJPyOZ}CHwAB{EH}@Bc@@mA@g@?"
                     },
                     "start_location" : {
                        "lat" : 42.7723993,
                        "lng" : -82.5122631
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 752
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 138
                     },
                     "end_location" : {
                        "lat" : 42.8171134,
                        "lng" : -82.50528640000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ividGpbsvNCmCAc@CsCC{FCcEAs@CwA?gA?A?i@?i@@eA@eA@KDaBDqADsA@CBu@@]@K?K@Y?A?gB?aA?i@"
                     },
                     "start_location" : {
                        "lat" : 42.8171716,
                        "lng" : -82.5144945
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 km",
                        "value" : 2213
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 435
                     },
                     "end_location" : {
                        "lat" : 42.8333385,
                        "lng" : -82.4965162
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCarney Dr\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}uidG`iqvNs@Mk@Ga@E_@Cc@CoBGcBGwDIe@Ao@Aa@A{AEyAG}BIwFKeBIqAIu@Kk@I[GWGi@OA?i@Oi@QCAk@U_Bm@iAa@gAY]Kg@Im@KwAWyAUcDk@WCiAQkAQm@K}@O}@Q_@KWIUI_@QCAc@[YSQOKKSSSU_@e@A?KQQUOUKSA?Q]Q]MYIWACK[I[EOESEWGYE]Ea@C[C[Cw@?KA]?e@@W@YB[Dw@B[b@mF"
                     },
                     "start_location" : {
                        "lat" : 42.8171134,
                        "lng" : -82.50528640000002
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "12.9 km",
                        "value" : 12919
                     },
                     "duration" : {
                        "text" : "41 mins",
                        "value" : 2448
                     },
                     "end_location" : {
                        "lat" : 42.9494214,
                        "lng" : -82.5017381
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eS Range Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "k{ldGfrovNaCB{MPwFHcBBmBBiHJy@@eBD[@w@@q@BsWj@WCC?oBBaCFM?}ABc@?yBHC?OBcFHcKNwFHoIJQ@wJNyHJ_KNoLPcJNmDDeA@kAB}EFaBB_EFsKNA?kAB{HLmCDqCD_HH[CQ?iA?}@@cBBO?aIPUDoGHqBDo@@qFH_DDyFHgDFuTZy[d@mFHGEcC@{A@_GP?@GBkXb@iABsBDyVb@}CFO?eCDkDD_@?kBDkBB}@@wABc@BsAFY@}BDoABu@@eBDuABiBDwDFgABa@@iIPeCDo@Ba@@uBDuCHcCBe@@[@y@@OG{AB_BB_EJkBJGB_EJw@@_CFiCF}CFkQ^yKTqABgLTwDJYCcDDeB@O@iBBiDLSB_DHeCBgQZ_HL_CB_FHcCFaA@kEHoCFwCDaB@eAFy@?KEOCKAWC"
                     },
                     "start_location" : {
                        "lat" : 42.8333385,
                        "lng" : -82.4965162
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1761
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 373
                     },
                     "end_location" : {
                        "lat" : 42.9651828,
                        "lng" : -82.50237629999999
                     },
                     "html_instructions" : "At the traffic circle, continue straight onto \u003cb\u003eRange Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "{pceGzrpvN?AAAAAACAAAAAAAAA?AAAAA?C?A?A?A?C?A?A@A?A@A@A@A@A@A@A@GDODODOHg@@cA@SE{@@gABgA@gABc@?c@@c@?i@@u@@{@@K?W?u@@eCBs@BSDkBB_@@cFDcA@m@@o@?wDD_EFeGFyBDgEJ{B@_BBwBBcA@q@?yA?e@B"
                     },
                     "start_location" : {
                        "lat" : 42.9494214,
                        "lng" : -82.5017381
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 497
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 96
                     },
                     "end_location" : {
                        "lat" : 42.96939589999999,
                        "lng" : -82.5026182
                     },
                     "html_instructions" : "At the traffic circle, continue straight to stay on \u003cb\u003eRange Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "ksfeGzvpvN?C?A?A?A?C?A?A?AAC?A?AAA?AAA?AAAAA?AA?AAAAAAA?AAA?A?A?A?A?A?A@A?A@A?A@A@A@?@A@A@?@A@?@A@?@?@?BA@?@?@?B?@@@?@?@_BDc@@M@kKTuFN"
                     },
                     "start_location" : {
                        "lat" : 42.9651828,
                        "lng" : -82.50237629999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "9.0 km",
                        "value" : 9006
                     },
                     "duration" : {
                        "text" : "28 mins",
                        "value" : 1680
                     },
                     "end_location" : {
                        "lat" : 43.0062867,
                        "lng" : -82.6011029
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWadhams to Avoca Trail\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Wadhams to Avoca Trail\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wmgeGjxpvNyGpVmBbHs@jC{@xCa@~Aa@zA}@|Ce@jB}@dDcBhGaAnDW~@u@nCeAzD_@nAqA`Fa@vAoCtKk@rBcCzIc@|Aa@nAg@~Bg@jBcBdGaBdGiAbEm@hBY~@sBxHaApDUx@cBdGi@nBgIrZA@?D@`@?@ABEPIVA@A@GBCBED?@A@a@zAqAtE}CbLi@nB_@vAs@`Cu@vCyCxKsBpHy@zC_@rAkBfHi@tBGPq@`CcC|IcBdGGTgAbEaBfGs@nC_@pA{@bDQn@W|@cCtIYfAgA|DQh@c@bB]jA_@tAQp@M^Qp@a@tAsAxEi@jBkDhMQl@Oj@_@tAk@vBUv@Ux@c@zAi@nBENIZ]nAYdASv@W~@IXEPENGR?BK\\M`@Oj@Oj@Uv@Qr@W`AY~@qAzEoApEQr@q@`CcAlDcBdGcCzIOj@cBfGqBpHqAzEaAlD_AnDSt@_BzFmAnEw@tD]`BI\\[hAo@fCm@zBi@jBqAtEaAtD_@nAYbA{@`Ds@vCQt@EHCDGF"
                     },
                     "start_location" : {
                        "lat" : 42.96939589999999,
                        "lng" : -82.5026182
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5 m",
                        "value" : 5
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 43.0062854,
                        "lng" : -82.60117049999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRynn Rd\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "itneGz_dwN?L"
                     },
                     "start_location" : {
                        "lat" : 43.0062867,
                        "lng" : -82.6011029
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "10.0 km",
                        "value" : 10036
                     },
                     "duration" : {
                        "text" : "31 mins",
                        "value" : 1875
                     },
                     "end_location" : {
                        "lat" : 43.0619278,
                        "lng" : -82.69002929999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWadhams to Avoca Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "itneGh`dwNe@~ASv@]hAk@|BcArDe@hB}@dDuPln@Uz@a@xA}@`DMd@g@nBi@lBa@zAMd@YbAq@fCs@hCAFk@vBSp@Qp@Ux@Qn@Qp@Of@Uv@I\\GVABGTQj@Oh@Oj@EPIV[fA[pAOd@EPK\\Oh@CJMf@K\\IVGVM`@k@rBi@hBaAvDgAzDI\\a@xAw@hCkAnEk@tBwAfFuAfFqAzEEN{BnIoAzEEPyAvFMXgBrGOd@o@hC_BfG_@xAMh@e@bB}@bDMf@sA~EcAxDgAdE{@|CYfAMb@gA`E[lAm@xBeAvDoAnE}AxFm@|BaAxDUt@gAzDgA`EOn@g@vAaAvBq@pA_AxA}@vAc@f@]x@g@v@m@|@iAdB]h@[f@a@j@m@~@eA|AS\\GHw@hAgAbBIJq@fA[b@k@~@_@h@aAvAm@|@cCrDqAfBiAhBY`@y@pAi@x@yAxBi@l@[^YZiAfAOL}AjAsAz@}Al@u@Ts@ReARaBP[BgAJy@FwBN}AJ}ANaBLK@{@Hc@BaAHkADc@Bc@Bc@@A?a@DkBJc@D]BE?c@BmCPoCPm@DuDR}ALu@FQBk@Fs@RGBeAXQDWJk@ZQHcAf@_@Zk@^EBUPc@`@YVWTg@p@k@v@iA`Bw@hAWb@mAlBgAlB_A`B_C`E_EdH_A`BeCnEW`@QZKRk@`As@nAc@v@]h@Ub@Wb@MTMVYb@S^Yd@MXeBnDIPWb@g@|@sA|Bs@v@[ZwAlC]l@}AjCyB|DWd@CDyAhCg@t@YX"
                     },
                     "start_location" : {
                        "lat" : 43.0062854,
                        "lng" : -82.60117049999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.8 km",
                        "value" : 6764
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1248
                     },
                     "end_location" : {
                        "lat" : 43.0741924,
                        "lng" : -82.7655017
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eM-136 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "apyeGtkuwNBtCHfIHvJBfFBz@FdCLpFt@~XJdEHlC`@pQd@|Rz@h`@ZxRB`BFrCN~IBjCNhKPxL?NRjOD|C?^B^@TDn@F^Jr@BJPdAHh@F`@Dh@@Z?PAPANANCLCLCJGVGNCDIRMTQVA?Y^oAdBY`@Y`@Y`@uCbE[`@a@j@W`@gBfCY`@Y`@mAdBY`@e@p@oMfRyCjEmAdB{CjEkAfBs@dAWb@CBoBjDCDe@x@[p@[z@w@~B_@dASh@EL]dAwBrGuBlGkDhKQh@u@xBy@`CM`AIz@APAf@Aj@DpADxFJlNJfK@p@BzC@r@@|A?b@A\\ATAPATCPKj@Qd@Yl@qAdBe@h@OVEJABETIhA"
                     },
                     "start_location" : {
                        "lat" : 43.0619278,
                        "lng" : -82.69002929999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "17.8 km",
                        "value" : 17752
                     },
                     "duration" : {
                        "text" : "52 mins",
                        "value" : 3092
                     },
                     "end_location" : {
                        "lat" : 43.21698079999999,
                        "lng" : -82.8043962
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eM-19 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "u|{eGjcdxNqAAaC@mDB}GJgJLeFHwTZsDFy@@iGHyDFgADsDHgJTwELyHRcIRc@@c@BgJTeAB{ENsDHc@@_FLS?g@BY?WDMBE@GBEBGDC@EBIFQPSVQ`@CJCHELALCJATALAN?Z@tCDjCBhD@^BhCFpF?LBnCBpA@jBBbBHxH?@@bA@n@@lA?\\?f@D~F@bA@p@@lA@nA?~@@t@BdC@tB@|@?n@@XAJ?F?^Al@A`@Cl@Gp@EZEPCLAHETI^GNQn@EJCLA@ENEJCFIRINYd@CDA@ABEFCDA@CFCDOTON_@\\YVQLSLWN]Ne@PKBIBUDA?G@SDW@[BI@e@@Q?k@BK?MAa@@mADc@F]HSDCB]L]P[TQNONKJi@l@}ArBoA~AKJw@dAaAjA_@d@WZGHSVc@h@EBMNON]VYPUL[N_@P[Jc@L[HUDc@DC@C?S@]@yFEM?S@gDEKAM?}DC}AC[?sEAgKIaIEs@?q@?o@?i@DC?a@DYDYF[H[HmA^WHc@Ng@RWL_@V]\\[`@gA~A]j@e@z@CDUd@e@lA{B`G}@vBUf@yAjDo@fBSh@Ub@SXUTOJ[N_@FSBM@[@c@?w@@kAD{AFgGNwCF[@e@@aAFcBHM@kABU@_BD_EJkAB]@kDJy@B{BDiADgADc@?wAFkADo@Ba@@cDJmBFeAFuIRcBFiBFA?c@Bc@@qM`@wHTkTv@W@oDNkGRwAFcIZmCLoAFmKd@uH`@wCP{BL{AFyBHsa@~@aCDcZr@cDH{GNeSd@aRb@eBDuLXeAB__@x@sDLuCH]@sDLo@@kEN}@BkCFwEL_ITcL^cHRuBHkL^mBDaN`@w@BiN`@}@D_Sj@uL^oEL_JVmABeAD"
                     },
                     "start_location" : {
                        "lat" : 43.0741924,
                        "lng" : -82.7655017
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "22.1 km",
                        "value" : 22128
                     },
                     "duration" : {
                        "text" : "1 hour 7 mins",
                        "value" : 4008
                     },
                     "end_location" : {
                        "lat" : 43.2106272,
                        "lng" : -83.0772857
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eM-90 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cywfGnvkxNj@be@NhLJlINlMDpCLdLJnJRdPJfKBzA@x@DjGNrRB~DFrIJlNHnLNvUF`IHjNRfYL~RJhQPl_@DvIFlPBrCJ`UHzMHfLJnMPbVVdVf@be@?L~@~{@VhZ^~`@BtCVxXZh^@fAXrZXx]J|IHnIRpTN~PPrT@n@HxLFhHN`WD~GBbDZva@@vCHpJHvJV|ZZ`h@LzXDfDD|DBlEFfH@dED|JD~D@pBA@@h@@nB@|A@n@@bBBnC@`B@pBFhJBtF?`ABbC@~A@t@@hA?j@BfCBrG?hF?zHAfF?xCArHA|HAzKAfF?hM?dG@vF?tD@|I@tEBjD@zB@|BBhD@zBBzBHlJPlUXz]PpTHzIFtGBbE?P@vABfFBnDHzJFnJ@tB@lA?F@V?v@HdKDlG@bB@vEH~HDhGBbB?^?V@P@v@@xBBjFB~EJdT@fFFpMLzTDxHDtGBhGD`K@l@BxB"
                     },
                     "start_location" : {
                        "lat" : 43.21698079999999,
                        "lng" : -82.8043962
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2395
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 398
                     },
                     "end_location" : {
                        "lat" : 43.2321591,
                        "lng" : -83.07810309999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eM-53 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eM-90 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mqvfG``azN_FFi@@{@BE@KBsDFI?uGJsDDe@@aIJwKNU?gJLkBBcEFcDDcDDyBDwCBqDBuQPM?wEFcCBwBB"
                     },
                     "start_location" : {
                        "lat" : 43.2106272,
                        "lng" : -83.0772857
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "31.0 km",
                        "value" : 31020
                     },
                     "duration" : {
                        "text" : "1 hour 32 mins",
                        "value" : 5525
                     },
                     "end_location" : {
                        "lat" : 43.213833,
                        "lng" : -83.4545243
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eM-90 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow U.S. Bicycle Rte 20\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_xzfGbeazNBnDPb^X|i@DnKBnGBtEBhC@~CPnZBjE@tBXt[@bBX|]HvINzPTx]Tx]HzLJnQDvFDfHFhKD`HFxIF~IRr]JnOHhKHzLJnQJvLRlQFfENzKDrDFtFb@~^D`GNxNFtIB~ELrT@dAFbJ@p@@hC@rC@bB@`B@fC@`BHnGBhFDfG?xC@rADrFHpFBnB?h@B|ABlBDzB@lBDbC@d@BhB?B?LDjDH|EDpD@f@@x@?X?DFhEBrA@jA?@BlB?PBdA@fAh@~]NfK@zD@jBDvFD`FBhDBbFBdC@`A@pA@xA@xAHzLDnGHxP?x@BjDBlE@pGBbHBbH?hGAdPA~H?`@AxA?zB?xBAhHAtJCnQ?t@AtHE~T@|BHxIRlSLjIVdS\\tZ@p@d@j_@Z`XZ|WLhJNhLPbO?l@HnFDdEBp@?^@X@\\Bt@B^Bh@?@F`AHdADh@Ht@BXFh@J|@NhAL|@P`AHf@BJBLTfAR~@Tz@ZpAVz@Rp@Xx@Vr@d@jAj@rAr@zAp@nAn@fAl@bAZf@V`@xC|EdEzGVf@h@|@h@fAZr@d@fAd@jAb@lAb@tA^pAPn@Rv@T`AVnAVxADVNz@RxAZnCH~@Fl@BTFhAJnBFnC?`@Bz@B`BDtA?XBjEBdEBpAF`JLzL@xBJzJBjCJbMBbEDdE@|BBhDBnCNfUBvE@vD@jA@P@`AFtG?HDzD@~@BpF@d@@rC@T?Z@p@?n@BlBDjFDxI@z@BrCDhE@pA?J@r@B~@@N@VB^Fx@R|BJt@Jv@h@|DNvAFr@B`@FhA@VB`BCtKQ`o@CdHCrJ?VA|ACnF?fAAjDE`MDtNDnG?P@rD@t@?nB@n@@rC@zFBpF@dA?`@@|ABtE@vB?H@rD@z@?bA@fC@f@BnHDxI?`BBvBB`FDdLDxI?n@BbD@bCBvFJbVLdYPx]@dBFjFHtIP|R@t@?LDxDJtLDrD@r@FvG?d@D`E@n@D`DJlLFbHJzI@bBB~CBtA@`C?P@pB@`@?l@BfE@vA@z@?ZBlC?b@@d@?B?n@BrE@rA@vBDhE?tABpD?D@bB?L@L?z@BrC?n@?d@@T@fDBxB@|A@bB?n@?N@j@?p@@pA?N?J@b@?F@~D@tB@nA?d@@pA?P@nA?x@BfH?n@?D?f@@B?^@Z?XBV@RBNDPDLDJJLFDDDBBHB@@H@F@F?F@`@?z@ANAfAAfBAfAC"
                     },
                     "start_location" : {
                        "lat" : 43.2321591,
                        "lng" : -83.07810309999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 473
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 84
                     },
                     "end_location" : {
                        "lat" : 43.2138313,
                        "lng" : -83.46033949999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eGenesee Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Genesee Ave\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mewfGvuj|N?lB?`B?|C?rE?fD@fFKrCD`@BB"
                     },
                     "start_location" : {
                        "lat" : 43.213833,
                        "lng" : -83.4545243
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "92 m",
                        "value" : 92
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 43.2130173,
                        "lng" : -83.4604677
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCounty Line Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mewfGbzk|NHHD@LBZDN@N?fA@"
                     },
                     "start_location" : {
                        "lat" : 43.2138313,
                        "lng" : -83.46033949999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "61 m",
                        "value" : 61
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 43.212997,
                        "lng" : -83.4612142
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eGenesee Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k`wfG|zk|N?XBxB"
                     },
                     "start_location" : {
                        "lat" : 43.2130173,
                        "lng" : -83.4604677
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "8.8 km",
                        "value" : 8760
                     },
                     "duration" : {
                        "text" : "25 mins",
                        "value" : 1503
                     },
                     "end_location" : {
                        "lat" : 43.276726,
                        "lng" : -83.5231598
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSouthern Links Trailway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "g`wfGp_l|NIJKJ]Z_PpN}AtAuCbCWTy@r@qCdC]V[XwCjCiB|AeBxAcBbBeDtCmBbBeBvAu@l@{@t@[Za@^YVy@x@]X?@uAtAA@e@h@[^ORMNg@d@c@l@SZMRa@j@[`@SZGHKNuBzCW^[b@W`@q@~@UZSZKPaChDs@dAs@bAaAvA}@rAa@j@QV}CjEKN}AjBCBu@r@s@p@i@`@OLYPQJc@Xe@XOH_CvAaDlB{@f@_CtAiBpAa@^u@p@WVo@j@KJqClCGFcBdBGFk@l@eB`BQNu@p@m@l@[ZwBpBABSPc@b@y@x@A@y@t@A?mDjD?@uAtAc@b@kCdCA@qBlB_@^y@v@]ZuBpBe@d@iAhAC@qCpCONaC|BuBpBa@`@kDfDy@v@qCnCmEfEwAvAGFkBhBUR{@p@QFO@QAMFsDlDk@h@CNBPDHFN?HADEHsCnCiCdC}EzE}@~@WNODKAE@uJfJMLOJYZiAjAsFlFsDrDoLbLcQvPs@p@{AtAuBtBeAbAaE~DoBlBiAhAeAdA{@v@eC`CoApAo@l@q@n@y@v@y@t@aAbAqAjAg@f@eAdAcA`A}@z@m@l@_A~@uDtD}@|@oAjAA?A?CA?AMm@EEIAC?E@"
                     },
                     "start_location" : {
                        "lat" : 43.212997,
                        "lng" : -83.4612142
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 360
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 58
                     },
                     "end_location" : {
                        "lat" : 43.2799165,
                        "lng" : -83.52366069999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eSouthern Links Trailway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow U.S. Bicycle Rte 20\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "qncgGvbx|NcANE?WDqBj@IHQHIBeBC}DH_BB"
                     },
                     "start_location" : {
                        "lat" : 43.276726,
                        "lng" : -83.5231598
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 496
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 83
                     },
                     "end_location" : {
                        "lat" : 43.2798912,
                        "lng" : -83.529781
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCenter St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "obdgGzex|N@`L?fEBdA?tF?dE?zA"
                     },
                     "start_location" : {
                        "lat" : 43.2799165,
                        "lng" : -83.52366069999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "11.1 km",
                        "value" : 11145
                     },
                     "duration" : {
                        "text" : "32 mins",
                        "value" : 1908
                     },
                     "end_location" : {
                        "lat" : 43.3704845,
                        "lng" : -83.5799636
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eM-15 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eState St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow M-15 N/\u003cwbr/\u003eU.S. Bicycle Rte 20\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dollar General (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ibdgGbly|NiEBuA@wA@cB@_FBmB?Y@]@q@BiCn@q@ZeDvAsErBqAj@o@Xm@VeAb@SHeDvAqB|@wHfDWJa@PgBx@gGlCyIvDyAn@gBx@g@TqIrDa@Pe@TiInDi@VYJ{BbAaCdAm@Xa@Pa@PeMpFy@^y@\\yFfC_Bp@cCfA{Ar@KDc@TYPMFSLUNSN]VSLKHYVcDtC_DnC]XSPwF`Fy@r@CB]X]Z_DnCgB|A_BvAYVa@^]ZqAhA_Az@CBm@j@i@f@]Z]ZgCzBiFtESP]XoHhGeH`GoAdAuBfBkA`AcElD]Z}KpJgHhGm@f@sGrFsInHaGdF_GdFwF|EmIfH_TxQURyAnASPuFxE_@\\mJhIiL~JmC|BaBnAA@qA|@kBjA_Ah@_Ab@c@R}@`@{B~@GBu@XuBx@iA`@_A\\i@Py@TWDs@Ng@Hi@Hm@DgAFmABeBAmA?uFEkCCwBAsBAoCAqFA_BCaBAwGEU?[?oCAiFCoCAoCAU?YAmBAuCCwECiAAG?I?S?Q?C?O?aBAM?yB?YM"
                     },
                     "start_location" : {
                        "lat" : 43.2798912,
                        "lng" : -83.529781
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "10.2 km",
                        "value" : 10151
                     },
                     "duration" : {
                        "text" : "32 mins",
                        "value" : 1927
                     },
                     "end_location" : {
                        "lat" : 43.4144883,
                        "lng" : -83.6892926
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eM-15 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE Huron Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow M-15 N\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "oxugGvec}Ne@`Ag@dAYr@ELOd@[x@MTeAhDM`@q@bCQh@C^CZAh@?T@HAn@GdEE`CGzBMxFCbBEhCEx@Op@[pAcAdEIVk@~Ba@|AEL_@|AK`@g@tBmA~EKb@q@lCgBhHSx@qCdLYfAuBrIc@hB{@|Cq@xBUp@mB~FsJ|YoChIyXpz@aGjQcDbKsEdNeElMmFfPmDrKeD|JkDjK{@jCUx@iNhb@_GjQi@bB}JvZsIrWwEnNoGxRsDxKi@bBuHjU_AtC{BxGu@`CkAnDiKp[sEdNcD|JSj@_AtCoDpKqCrIoB~F{@jCuA`EIP"
                     },
                     "start_location" : {
                        "lat" : 43.3704845,
                        "lng" : -83.5799636
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.7 km",
                        "value" : 5720
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1079
                     },
                     "end_location" : {
                        "lat" : 43.4216179,
                        "lng" : -83.75785239999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHarger Line Rail-Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "qk~gG`qx}N@vF?rC?|L?|L@nP@lK?jK@fHB`a@BhY@pQ@xHAdEArQ?fHAdEAlBBrA?jASdHi@vEABc@hC]zAg@tBu@rC_B~FyF|SOj@aDnLyBnHuGzTiBnGI\\Oj@Sv@g@~BW|AYpBKfAEd@IzAMpBEnACbA?fV?t^"
                     },
                     "start_location" : {
                        "lat" : 43.4144883,
                        "lng" : -83.6892926
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.4 km",
                        "value" : 6381
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1095
                     },
                     "end_location" : {
                        "lat" : 43.42154300000001,
                        "lng" : -83.83686
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "cx_hGp}e~N?nN?xI?p@?xI?jK?p@?te@?p@@vF?p@?|T?jH?p@?vW?p@?n@@`P?fH?p@?p@?p@?`B?bB?`B?p@?`B?`P@jK?|L?xI?p@?dE?dE?p@?dE?vF@n@?hY?vF?jK@|L?dE?jK?`P@dV?nN@|L?p@?`B?vF?vF?vF?n@?zI@rC?lF"
                     },
                     "start_location" : {
                        "lat" : 43.4216179,
                        "lng" : -83.75785239999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "12.8 km",
                        "value" : 12811
                     },
                     "duration" : {
                        "text" : "41 mins",
                        "value" : 2434
                     },
                     "end_location" : {
                        "lat" : 43.5366797,
                        "lng" : -83.83652649999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN Portsmouth Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow U.S. Bicycle Rte 20\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sw_hGjku~NsDGkBCc@AgAA_HKc@A{FIuEImBCcCG_GMaGI_BAqDEgSQuFGkCA}D?kBAqFCeG?GAW@oD?w@BiKNuDFcIPaIPmEHwU`@yLT{FHuLFaIBiTJgCD}MZsMZ}DJ}@@k@BgA@sBDeBB_IJyBBw@@U?k@@i@@mB@iA@c@@uCBS?I?MAKAKAMCQCICg@IMCMAKAQAi@?{@?g@@kB@kB@aHDuWN}@?wCMcGUs]uAg@C}a@mAmHSe@Aed@qA_FMS?qBB{@BiA@}R\\uNTg@?kDBqFB{TDwHBO@_HBoC@{XFsA?_KBc@?aK@yT@Y@"
                     },
                     "start_location" : {
                        "lat" : 43.42154300000001,
                        "lng" : -83.83686
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2428
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 422
                     },
                     "end_location" : {
                        "lat" : 43.5371596,
                        "lng" : -83.8666298
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRussell Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ggvhGhiu~N@pD?n@@rQ?p@@p@@jK?p@?dE@tC?vF@|@CvEChHYnm@C|@OrMGvFQlNWdSChA"
                     },
                     "start_location" : {
                        "lat" : 43.5366797,
                        "lng" : -83.83652649999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.3 km",
                        "value" : 4330
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 846
                     },
                     "end_location" : {
                        "lat" : 43.5760911,
                        "lng" : -83.866635
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eS Trumbull Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gjvhGle{~NyDGsDGc@AwEG{OWqVa@cIMc@?kBEsDGyFIsDFc@?kBBgABS?c@@oC@cIDoCBc@?iJFS@gD@gA@kB@c@?gA@sDBoCBc@?kB@gA@c@?gA@gA@kB@c@@iA?Q@{FFc@?gKHqB?yMN}KJiJDe@@"
                     },
                     "start_location" : {
                        "lat" : 43.5371596,
                        "lng" : -83.8666298
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1555
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 298
                     },
                     "end_location" : {
                        "lat" : 43.575707,
                        "lng" : -83.88585089999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q}}hGne{~Nd@`C@FFj@@BBrA?fH?dD?vFFrD@PDn@HlADv@BxA@p@@D@F?NCN@hK@\\ErNAxF?vECxEAnEAnB?p@?p@?p@Ap@AfD"
                     },
                     "start_location" : {
                        "lat" : 43.5760911,
                        "lng" : -83.866635
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "79 m",
                        "value" : 79
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 43.575708,
                        "lng" : -83.8868004
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "e{}hGp}~~NDF@F?FAFEF?T@R?`@AhA"
                     },
                     "start_location" : {
                        "lat" : 43.575707,
                        "lng" : -83.88585089999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 103
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : 43.5757313,
                        "lng" : -83.8880396
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "e{}hGnc__ODH@H?HCDCBCnE"
                     },
                     "start_location" : {
                        "lat" : 43.575708,
                        "lng" : -83.8868004
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 418
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 73
                     },
                     "end_location" : {
                        "lat" : 43.57581880000001,
                        "lng" : -83.8931656
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "i{}hGfk__OBDBF?DAHAFEB?FDd@CXAvFAfEAxBCvE?bBGX"
                     },
                     "start_location" : {
                        "lat" : 43.5757313,
                        "lng" : -83.8880396
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 291
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 104
                     },
                     "end_location" : {
                        "lat" : 43.5758129,
                        "lng" : -83.89673499999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "{{}hGhk`_OER?D@FBDFF?h@AxEAhEA`B?hB"
                     },
                     "start_location" : {
                        "lat" : 43.57581880000001,
                        "lng" : -83.8931656
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "15 m",
                        "value" : 15
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 43.5757201,
                        "lng" : -83.8968019
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "y{}hGraa_O?F?B@?N?"
                     },
                     "start_location" : {
                        "lat" : 43.5758129,
                        "lng" : -83.89673499999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 108
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 43.574752,
                        "lng" : -83.89685469999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "g{}hG~aa_O`EH"
                     },
                     "start_location" : {
                        "lat" : 43.5757201,
                        "lng" : -83.8968019
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 242
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 43.57474029999999,
                        "lng" : -83.89977979999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "eu}hGhba_OH@@B?rDCR?`@CrC?`BAbB"
                     },
                     "start_location" : {
                        "lat" : 43.574752,
                        "lng" : -83.89685469999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1032
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 226
                     },
                     "end_location" : {
                        "lat" : 43.580228,
                        "lng" : -83.9024398
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cu}hGrta_OAF?@A@A?AAcCu@}Ag@aCs@aAYiBi@_Bg@sA_@qEuACA_@^IvAKzBATIbBE`AA^IxAA~@Aj@Ad@EjAA^@p@@l@@b@?V?LAFGLA?A@C@E@WACACAACCS?S?S@S?CAC?CACCAGA"
                     },
                     "start_location" : {
                        "lat" : 43.57474029999999,
                        "lng" : -83.89977979999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 436
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 78
                     },
                     "end_location" : {
                        "lat" : 43.5836994,
                        "lng" : -83.9001933
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "mw~hGfeb_OiAMc@Ee@GSGc@[WSIKg@k@[[MMoAw@kAw@g@YIIEEEKCMAECEIEe@Q}@YUMMK"
                     },
                     "start_location" : {
                        "lat" : 43.580228,
                        "lng" : -83.9024398
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "8 m",
                        "value" : 8
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 43.5837558,
                        "lng" : -83.90017279999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "cm_iGdwa_OA@A@AAA?AAAC"
                     },
                     "start_location" : {
                        "lat" : 43.5836994,
                        "lng" : -83.9001933
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 514
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : 43.5875909,
                        "lng" : -83.90025559999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "om_iG`wa_Oe@@w@g@MEA?A?A??@CFSv@Uz@ABA@A@A?AAA?OMUMMGECEAG@I?K?GEUMIECEEOCIECKKc@YOIEAAAE?E?I?I?GACCCCEGKUEGCCMGECA?o@BE@E@i@d@GNGZCJSRQLmBJ"
                     },
                     "start_location" : {
                        "lat" : 43.5837558,
                        "lng" : -83.90017279999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "70 m",
                        "value" : 70
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 43.5880747,
                        "lng" : -83.8998113
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "me`iGrwa_O?S?CACMOQKSGKIIIGCGAC?"
                     },
                     "start_location" : {
                        "lat" : 43.5875909,
                        "lng" : -83.90025559999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 329
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 57
                     },
                     "end_location" : {
                        "lat" : 43.590758,
                        "lng" : -83.8983673
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "mh`iGxta_OS?C?EACCIMCCSQKE[QQOMSMSMKUMQGKAOCUCKCSMSUOOSMQISE]Ca@Eg@CWIYK"
                     },
                     "start_location" : {
                        "lat" : 43.5880747,
                        "lng" : -83.8998113
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 565
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 101
                     },
                     "end_location" : {
                        "lat" : 43.5949558,
                        "lng" : -83.89550029999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gy`iGxka_OD_@@C?GAAAEACAAGCEAGAUGYMa@QCCoAo@OOOKa@Om@UG?C?C@MLc@Ce@EAeACKEIA?GI{BgAu@_@SEWEUEQKwCwB"
                     },
                     "start_location" : {
                        "lat" : 43.590758,
                        "lng" : -83.8983673
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 355
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 63
                     },
                     "end_location" : {
                        "lat" : 43.5977655,
                        "lng" : -83.8947802
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "osaiGzy`_OE]]SqCo@i@MgA]GAOCME}Ck@CAWGA@A??@G`A?@A??@A?YI"
                     },
                     "start_location" : {
                        "lat" : 43.5949558,
                        "lng" : -83.89550029999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 283
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 43.599991,
                        "lng" : -83.8937773
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "aebiGju`_Om@SCC?E@IDa@?GACCAQEwAWaHqA"
                     },
                     "start_location" : {
                        "lat" : 43.5977655,
                        "lng" : -83.8947802
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 399
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 72
                     },
                     "end_location" : {
                        "lat" : 43.6017936,
                        "lng" : -83.8959878
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBay City Loop\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}rbiGbo`_OAn@Af@?n@Ad@?`@AJADABABCHAL?L?N@D@@BDFFBD?J@JAp@?b@?VABA?gGEGAGC}@[C?C@CB?FAL"
                     },
                     "start_location" : {
                        "lat" : 43.599991,
                        "lng" : -83.8937773
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "37 m",
                        "value" : 37
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 43.601888,
                        "lng" : -83.89637279999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "e~biG||`_OEbAAB?@A@I?"
                     },
                     "start_location" : {
                        "lat" : 43.6017936,
                        "lng" : -83.8959878
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 308
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 65
                     },
                     "end_location" : {
                        "lat" : 43.6019625,
                        "lng" : -83.9001998
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE Midland St\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "y~biGh_a_OAxAChA?f@?|C?JE|D?@AfE"
                     },
                     "start_location" : {
                        "lat" : 43.601888,
                        "lng" : -83.89637279999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 801
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 154
                     },
                     "end_location" : {
                        "lat" : 43.6091541,
                        "lng" : -83.89986189999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN Henry St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "g_ciGfwa_OuCAcB@cB?eECyAAa@Em@MmEOiEKwHM"
                     },
                     "start_location" : {
                        "lat" : 43.6019625,
                        "lng" : -83.9001998
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 972
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 171
                     },
                     "end_location" : {
                        "lat" : 43.6092831,
                        "lng" : -83.91192289999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE North Union St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eldiGbua_OAxA?lBA`EA^?vC?zECfE?lFAlEAjC?hA?ZEjB@~@AnHCZA~E"
                     },
                     "start_location" : {
                        "lat" : 43.6091541,
                        "lng" : -83.89986189999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 561
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 95
                     },
                     "end_location" : {
                        "lat" : 43.6143221,
                        "lng" : -83.91174549999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHandy Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_mdiGn`d_O[@aGIsDGiKMsCC"
                     },
                     "start_location" : {
                        "lat" : 43.6092831,
                        "lng" : -83.91192289999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 231
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 42
                     },
                     "end_location" : {
                        "lat" : 43.6143564,
                        "lng" : -83.91461319999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMosher St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "oleiGl_d_OAxFAfB?r@AfBA|@"
                     },
                     "start_location" : {
                        "lat" : 43.6143221,
                        "lng" : -83.91174549999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.1 km",
                        "value" : 3054
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 577
                     },
                     "end_location" : {
                        "lat" : 43.6383832,
                        "lng" : -83.9260178
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eM-13 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wleiGhqd_OmBCI?i@AO?oACW?wCGO?mACwAAMAkAAiCEiACa@?gBEy@Au@AgBCQ?i@AsACO?qACoBCI?}ACUA_@AO?wACyCEaACS?UAeAAo@AA?cA?mCCq@?i@?c@@a@@w@DaBN_BZ}@R{Ab@WFi@Ra@P{@`@s@`@{AbAcBrAy@r@_AjAi@p@CFqAlBqA`CgClE_BrCsFxJwChFo@hAINWd@cCjEc@v@aAbBmAzB"
                     },
                     "start_location" : {
                        "lat" : 43.6143564,
                        "lng" : -83.91461319999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "19.4 km",
                        "value" : 19411
                     },
                     "duration" : {
                        "text" : "1 hour 1 min",
                        "value" : 3632
                     },
                     "end_location" : {
                        "lat" : 43.6410686,
                        "lng" : -84.16718310000002
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWheeler Rd\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "{bjiGrxf_O?pC?d@CvX?dECfLEnNCbK?tC?HAhHAx@?v@A^?V?|@?jBAvFAtCAvBApECnNEtNE~K?z@CvJAjCGpOA~BC|J?hK?hE@|G@rI?vF?fW?j@?@?vB?D?l@?bA?|J?j@?n@AhDApD?vFAr@CzP?zB?n@AxFAhI?tD@vCAnB?p@?VA|BCdHArGAnG?`CAlL?rL?bEAbI?dS?fTM~NKfSAbB?p@EvFOjYAtC?`@C|EAzMAJ?p@?p@?p@AbBA`IGzS@bFEvv@Ete@@tG@l@@f@Bp@D`@@Z@`@?h@?j@AbDAp@AfDEhGC~EAlDAbAA`CCxCAnCEtIE|FEfFGhGAjCGdGEzECfEGfIA|CC`MAtFAlLEdR?`CAjH@`A?zB?hHAzB?dBCzDAx@Av@ClICpH?r@C`FAdAC`EEdECpDE~FGlHE~FAl@EdGCrCCzDCzDAnBYte@Oxf@CbJCxGCvECzIElKOba@OlY?R?ZAhCCnJGtRKvT?p@Ap@AdEA^Mb[Qb_@GlMAbBGlKAdCM~ZG|NCzD?tC"
                     },
                     "start_location" : {
                        "lat" : 43.6383832,
                        "lng" : -83.9260178
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1599
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 305
                     },
                     "end_location" : {
                        "lat" : 43.6266875,
                        "lng" : -84.16728359999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN Bay-Midland County Line Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRockwell Dr\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "usjiGz{u`OjKDhIB~C?zF@fCBdA?l@AV?~@?bJBx@@rUBbGC"
                     },
                     "start_location" : {
                        "lat" : 43.6410686,
                        "lng" : -84.16718310000002
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2364
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 466
                     },
                     "end_location" : {
                        "lat" : 43.62656399999999,
                        "lng" : -84.1966508
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE Ashman St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yygiGn|u`O@fC?D?bB@`B?bB@tCBnQBtD?tF@p@?tC?`C@F?f@?p@?p@?fB?p@@bB?|A?B?p@?`@@f@@hE@bK?bG?`F?n@?bB@jF@xH?`L?vF?XArFAv@?jK?rC"
                     },
                     "start_location" : {
                        "lat" : 43.6266875,
                        "lng" : -84.16728359999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 459
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 80
                     },
                     "end_location" : {
                        "lat" : 43.6306938,
                        "lng" : -84.19659159999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eGreenway Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_ygiG`t{`OyDCwLGgE?"
                     },
                     "start_location" : {
                        "lat" : 43.62656399999999,
                        "lng" : -84.1966508
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 620
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 91
                     },
                     "end_location" : {
                        "lat" : 43.63070769999999,
                        "lng" : -84.204291
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE Sugnet Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yrhiGts{`OA~B?nGArD?p@Ap@?B@tC?vF?p@?Z?dE?tD"
                     },
                     "start_location" : {
                        "lat" : 43.6306938,
                        "lng" : -84.19659159999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "48 m",
                        "value" : 48
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 43.63027820000001,
                        "lng" : -84.2043008
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSharon Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}rhiGxc}`OtA@"
                     },
                     "start_location" : {
                        "lat" : 43.63070769999999,
                        "lng" : -84.204291
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.3 km",
                        "value" : 6301
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1241
                     },
                     "end_location" : {
                        "lat" : 43.6347657,
                        "lng" : -84.2796252
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE Sugnet Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gphiGzc}`O?p@?p@?p@?|BBtG@xFEbGUt@Yt@]b@[`@s@dAwArB_@d@w@jAmAfBwAzBcBnCyAxBUdAOdA?L?bB?nD@dA?jGA`F?v@AtDArB?hCAjC@jB?fC?lD@`B?bBAjA?jD?pA?b@?h@?j@AdEAfEChKAxB?lBAdE?bB@bB?n@?rF?nACjGAtH?`B?p@Ap@?p@?rB?`C?p@?tCAbB?n@?tC?`F?fB?@AbB?|B?jI?tB?LAzE?p@?hH?jL?tC?bG?nE@xA@`B?~@@jH@n@?zD?r@Cd@Eb@Ip@I^K\\Ob@o@|A[~@Kj@Gf@Gz@Af@@nC?tA?L@p@?lA@F@\\H^Xv@b@bBNrA?fA?vD?tEApGAbCKdCSdBCLYjAQn@y@vB]fAUtAAFQzA?DExBDjADx@VrAFXJb@pAtE"
                     },
                     "start_location" : {
                        "lat" : 43.63027820000001,
                        "lng" : -84.2043008
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "36.1 km",
                        "value" : 36106
                     },
                     "duration" : {
                        "text" : "1 hour 53 mins",
                        "value" : 6750
                     },
                     "end_location" : {
                        "lat" : 43.7925832,
                        "lng" : -84.66812779999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePere-Marquette Rail-Trail of Mid-Michigan\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eU.S. Bicycle Rte 20\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iliiGtzkaO_A`Cq@lByAzDa@fAoAdDoAdDmAdDCFkA|C{@zBe@rAo@`BgAtC}@dC_BdEi@vAe@lAi@rAiBhFGHcBjEIReApCgBzEu@pBy@zBkA|CCFcAlCSf@}AfEEHeCvGWr@qBtFCBwAtDIXqAlDe@hAmAdDMXmCjH}@bC{@zB]|@[|@Sh@Sh@Sh@y@|Bk@zAADgCtGKXqCnH}@`CmA~CaBnEo@bBgArCoAdDaAjCMXg@pAg@pA{@zBUh@Y`Ak@zAiAvCaAhCy@xBg@vAO`@Wn@w@tBCDSh@{@zBMZWt@Sh@{@|BKZEJSh@}@zBYv@MXQh@g@rAo@dBe@lAkA~CCDSh@y@zBSh@{@zBGPaAfCYt@Sf@]~@cAnCIT]|@g@pAa@hAWr@g@pASj@Sf@y@zBSh@iAvCqAfD?@m@`BK\\Or@K`@Ml@g@nCSbBOxACXAJCf@G~AEpBGvCKdF?DE~BGtE?BI`EAr@IvECnAGdCCpBAp@A`@EpBAp@AXAVAp@C`BAp@GjC?HG`DCtACbBI~D?BGvDG|CE|AAtAEnBGzCCzAExBCxAAn@EbCC|@?BCzACtBGfEI|BOrBQvACNQlAABSdAEPOj@ABIXELc@tAIV[z@Sh@g@pAkAhDOb@i@vAg@rAGRq@hBe@rAGLKZQh@w@vBADg@rAk@|AgAzC?BkAdDy@zB{@|BQf@Sh@cAnCo@jBs@jBm@dBg@vAQb@mAfDGPq@jBs@lBmBjFs@nBUl@w@zBSj@_BpE[z@EL}AjEYt@i@tA[z@CHm@`By@|Be@rAABe@nAy@zBe@rASh@EJa@fAmAdDa@jAWr@Qf@aBpEIVo@dBmAfDgB~E]`Ai@zAe@rAs@pB}@jCKXg@~A_@nACLOj@K`@s@~CYlAk@fCg@zB_@fBw@vDs@`Da@lBm@fC}BjKIZiD`PU~@[zAy@rDy@pDEP[xAy@tDy@tDy@vD[xA]zAk@lCi@bCMj@i@hCiAbFy@tDERc@rBgAbFiAbFMl@k@fCKb@g@~BCH[xA]zAMj@G\\a@jBOl@Mj@i@hC]xAMl@Ml@k@fCi@hC]xAy@vDGXo@zC]xAy@tDeA|E{@zDsBlJ_AlEkBrIy@tDqCfMcB|H]zA?@k@dCMl@k@fCiA`F[zAe@pBo@~CEXgAjF{@tDg@rB}@hEkArFI\\eB|H_@dBKb@Mj@cB~H[zAk@fCMl@Ol@[xAABi@bCy@tDm@hCw@vDy@tDOv@i@|Bi@fCg@zBSx@{@rD]zAm@dCK`@u@nCa@tAa@vA[fAeBzFu@`CM\\y@nCeAjDc@vAK^aCvHk@jBSh@}ArE_AhC_@fAaBpE{@|Be@pAy@|BoAdD?@eBxEgAxCi@zAeEfLO^}@fCeCdHMZaAhCaBpEeK`YgC~Gg@vAaBnEgB|E}AbE{@zBe@rAyDpK[x@uEjMsArD}DxKsBxFgCfHSf@sBtFkBfFIVcBnEADw@vB_AhC{AbEe@tAg@pAkBdF]|@iAxC}AnEUl@iAbDiA~CWp@cBtEcCvGkCjHSf@_BrEIR{BhGqBrFYt@eBxEeCxGELgAxCeAtCgB`F_@dAcDzIuBxF}AjEUn@cBxEO`@oBnFYr@kAfDGN_@bAy@|BSh@GPmBfFKZsAtDSl@aCrGeBzEA@kA`DyBbGc@nA_BlE{@~B_AjCs@nBmAdDaBpECDu@vBO`@aAfCM`@ADOb@oAdDy@|BSh@o@bBKVQh@mAfDkAbDABsBxF}AdEk@~AiCbHkE|LsCzHc@jAqBpFCF{@zBSj@cArCs@nBuArD]bAEPELSlAOn@KZWd@_@pAUl@gArC_@jAyA~DGPyA|DaBpE{@xBy@~BWt@Ub@k@|@Ub@MZ[x@ITuAxDm@~AmBnFu@rBg@rAaBpEQh@kA`DCFeEfLADsBrFmAfDg@vAe@nAyClISh@kAhDeD`JsCzHqAnDO`@uBxF_BpESh@y@|B_BpEs@jBsAxD{AdEkDrJmDvJcEjL_EvKIRaBpE{AjEeBvEy@|Be@pAmCrH_DnI]bAiA|CaDvICFiA~CkBdF[|@uBxFUp@}DxKaBrEg@rAO`@qAlDe@rA{@|B[z@IVgB|EmAfDkDrJoAlDs@nBuArDg@pA[|@]~@Qh@s@nBENg@pASh@y@|BSh@KXm@bBe@rAcApCIRaBpEYz@o@lBg@xAMf@e@dBi@xBKb@m@pCe@xBkArF[|Au@tDGVo@~CMj@?@Ml@Mn@Ml@I\\CNKh@]xA_@hB"
                     },
                     "start_location" : {
                        "lat" : 43.6347657,
                        "lng" : -84.2796252
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 225
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 78
                     },
                     "end_location" : {
                        "lat" : 43.7945855,
                        "lng" : -84.6680071
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLoomis St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sfhjGxvwcOqAAgAAI?iAB{@?{@@ICIAWS"
                     },
                     "start_location" : {
                        "lat" : 43.7925832,
                        "lng" : -84.66812779999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "94 m",
                        "value" : 94
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 23
                     },
                     "end_location" : {
                        "lat" : 43.7946075,
                        "lng" : -84.6668475
                     },
                     "html_instructions" : "\u003cb\u003eLoomis St\u003c/b\u003e turns slightly \u003cb\u003eright\u003c/b\u003e and becomes \u003cb\u003eJefferson St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "eshjG`vwcOCKCa@@eB@sA"
                     },
                     "start_location" : {
                        "lat" : 43.7945855,
                        "lng" : -84.6680071
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2287
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 490
                     },
                     "end_location" : {
                        "lat" : 43.8151743,
                        "lng" : -84.66671790000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN Loomis Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ishjGxnwcOsDAC?cFEw@?uE?yA@_B?kAAS?kB?I?aB?U?aBAoCAyME{J?_JCwH?sVAc@?kB?c@?eB?oBA"
                     },
                     "start_location" : {
                        "lat" : 43.7946075,
                        "lng" : -84.6668475
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.8 km",
                        "value" : 6753
                     },
                     "duration" : {
                        "text" : "19 mins",
                        "value" : 1135
                     },
                     "end_location" : {
                        "lat" : 43.8730704,
                        "lng" : -84.6463773
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTobacco Dr\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ysljG~mwcOuBAkBCc@?qCA}GAgA?{F?c@?c@?wE?c@?kB?wE?c@?kB?c@?_H?uA?wAYAAsAg@uBcA_@Sm@YuBmAcE{BeEwBcCoAcBw@gEmBeD}AmIwDgD}A_@Qa@Qo@YmTaK_DwA}@o@wDeDYWwBmBmF_F]e@qDqDKKSMUIc@Os@OcEWc@CeJi@{F[yF]u@OsA_@wAc@gBi@mBm@iA]}Bs@cA[eA[a@McA[OE}CaAUIKCkDcAqDcAeGoBwIqCgCy@UIsBo@kDgAgBk@OGcGkBAAgDiAMEkCy@iAYs@KaBIk@CoCKkBEQ?}BGkBE{JK"
                     },
                     "start_location" : {
                        "lat" : 43.8151743,
                        "lng" : -84.66671790000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13.0 km",
                        "value" : 13041
                     },
                     "duration" : {
                        "text" : "42 mins",
                        "value" : 2546
                     },
                     "end_location" : {
                        "lat" : 43.9887311,
                        "lng" : -84.64665859999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eS Bailey Lake Ave\u003c/b\u003e",
                     "polyline" : {
                        "points" : "u}wjGznscO{FCkEA}BAsDAc@?c@AoCAgA?c@AoCAcCAK?wEAc@Ac@?oCAkBAoCAc@AoCAc@?oCAc@?}GEc@?oCAgA?c@?oC?iF@w@AOAOCYMYQCAi@i@a@u@Yk@o@qAQYYg@c@q@UWSUA?KIUKUIk@Om@K_AQaAUc@IGAQCWAQ@OBSFSJIFC@EDWVUZ[n@[n@q@pBELWl@KXWt@KXOVW\\MLSR[JQDOBoGAqECyD@s@?{A?uFAiBAsF@kB?kB@{F@sD?gA?wE?{F@}G?c@?oU@c@?eI@oC?{FAsB?kG@{F?sD?gA?wE?{C?q@?gA?gA?wE?c@?sD?eA?eCA_HCkB?sD?sD?gA?sD@kB?yF@_H?c@?gA?sA@oA?gJ@sD?oC@kB?kB?gA?oC@yF?{F?kBAsA?gA?y@?oC?oC?gA?gA?sD?qD@wAAqC?sD@oC@_H@wE@uAAgAA{ED{AAs@?c@Ac@?mCAc@?c@?c@?c@?sDAc@?_HCoCAc@?c@?c@AkB?gAAc@?kBAkBAgA?gAAgAAwEAiCA{@?c@?_H?oCAsD?oIHc@?_HFgA@c@@c@?c@@qDBc@?oCBiA@c@@oCBgA@oCBc@?c@@{FD_HDc@?uEDoCBc@?kB@c@@c@?m@@"
                     },
                     "start_location" : {
                        "lat" : 43.8730704,
                        "lng" : -84.6463773
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1627
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 259
                     },
                     "end_location" : {
                        "lat" : 43.9888045,
                        "lng" : -84.626324
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eM-61 E\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qpnkGrpscOAkT?}IAeECyL?uG?uC?_ACaSAiT?aQ"
                     },
                     "start_location" : {
                        "lat" : 43.9887311,
                        "lng" : -84.64665859999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "8.0 km",
                        "value" : 8002
                     },
                     "duration" : {
                        "text" : "25 mins",
                        "value" : 1503
                     },
                     "end_location" : {
                        "lat" : 44.0604889,
                        "lng" : -84.6257019
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN Hoover Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_qnkGnqocOgA?kB?c@AqA?kB@gA@wEBqFB}C@aIBw@@_D?kK?sD?[@oC?sFB{F@yD?_@?eI@sD?gA?qB@oC@{F?kB?wE?gA?sD?gAAo@B}C?_H@cD?c@?gA?kBAc@?c@?yD?kDAqB@sD?oG@O?kB?{F@oC?kB?{F@{F@_C@oAC_D?{F?kB@kB?m@?gA@oC@oC@eDBgJDoB@eD@_D@mA@kB@sBBkB@gA?cC@}DBiA?m@A_A?yABa@?oC@O?w@@gA?kB@uD@{EBwFBkB@sD@gJBgA@gA?mA@oC?wEBgA?oC@_HBW?o@CYAmAMu@]e@Y_@WMMSS]c@?AUg@U_@"
                     },
                     "start_location" : {
                        "lat" : 43.9888045,
                        "lng" : -84.626324
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 698
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 136
                     },
                     "end_location" : {
                        "lat" : 44.0613624,
                        "lng" : -84.6172187
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eStockwell Rd\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "aq|kGrmocOa@gAK[Uu@Km@CMGy@AYEq@CcAGkIEkHEgKA{AAOEq@Mo@Yq@"
                     },
                     "start_location" : {
                        "lat" : 44.0604889,
                        "lng" : -84.6257019
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1618
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 273
                     },
                     "end_location" : {
                        "lat" : 44.0758555,
                        "lng" : -84.61694079999999
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eTrout Ave\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "ov|kGrxmcOi@a@_@U{@MmC?sD?kB@gA?oC?wE?kB@cI@yE?gAAcEDuB?gA?uE?{FAM?mA@kBBC?w@?K@y@A"
                     },
                     "start_location" : {
                        "lat" : 44.0613624,
                        "lng" : -84.6172187
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 801
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 191
                     },
                     "end_location" : {
                        "lat" : 44.0758906,
                        "lng" : -84.6069136
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eArnold Lake Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cq_lGzvmcO?q@?qA?QAgEA}I?mH?cBAcB?cB?m@?u@?oK?cB?gB"
                     },
                     "start_location" : {
                        "lat" : 44.0758555,
                        "lng" : -84.61694079999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "9.4 km",
                        "value" : 9428
                     },
                     "duration" : {
                        "text" : "34 mins",
                        "value" : 2067
                     },
                     "end_location" : {
                        "lat" : 44.160556,
                        "lng" : -84.6088032
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eClarwin Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iq_lGdxkcOc@@gA?oC@{F@oC@qD?c@?{A@sD?kB?gA@qA?}@AoCEgAAkBC_AAiFIsCCy@AsDEoCCwEEoCCaD@eABW?{AAc@?sC?_@?c@AkB?sDCuBAe@?cA?k@?w@?c@?kB?sAAW?c@?sD?c@?c@?c@?_A?gA?gA?c@?wDAcA@C?_@@]?C?yE?i@?a@AU?y@BkBCaBAwE@c@?{FBcIBgA@c@?c@?W@o@Ac@?y@?gD?_B?S?q@@mD?G?c@?gJBcNDkIJcA?qMFuABsJHwA@S?_EBkGDiFJ_A@c@?q@@u@?sD@eEDkB@c@?oCBwEBcA@e@BqC@c@@oC@gA@wED{FDsEHc@@kBDgJRc@@kBDgABoCFc@?{CHuHHc@@kBBc@?c@@gA@eDDyBBc@@gA@c@@gA@c@?oCBsDD{FFkBBE?iC@c@?gA@eJDwBKW@c@@s@BSB}AHMDa@NcA^KB{@`@o@`@]T"
                     },
                     "start_location" : {
                        "lat" : 44.0758906,
                        "lng" : -84.6069136
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "16.5 km",
                        "value" : 16518
                     },
                     "duration" : {
                        "text" : "49 mins",
                        "value" : 2962
                     },
                     "end_location" : {
                        "lat" : 44.2984755,
                        "lng" : -84.65209059999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eM-18 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eS Gladwin Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "obplG~clcO{@t@A@Y^EFSXOVGJYf@[p@Of@Wl@Wp@{@|By@|BaBpESh@uBzFg@rAa@hASh@g@rAg@rASh@mAfDwAxDs@`B]d@Yb@EFq@r@IFwAz@YHa@Hu@Hq@By@BkBAc@?kB?c@?gA?{FAkB?uB?kA?qB?c@?gA@c@?c@?gA?sD?oC?gAAc@?mC?sDAc@?c@?c@?]?kB?oC?oC?gA?c@?aF?kB?c@?c@?kB@c@?kB?c@?_G?sD?c@AaLA{A?yD?wE?c@?_H@wC?c@?gA?c@?kB?c@?sD?gA?oC@kB?gA?c@?gA?oC?sD?iB@kB?c@?gM?_C@}G@c@?kB@kB?_B@gA?oC?kB@{F?cC@oG@_D@sD@c@?gA@}E?wE@c@?c@@c@?O?gAB{A@sB@c@?c@?c@?oC@c@?c@?kB@c@?c@?c@?gA@kB?gA?c@?wE@c@?c@@gA?oC@cI@oK@gJBc@?U?aCBaABw@N{@RQDu@f@u@h@c@d@{@x@mBbBYTCDkBfBeA`AqDjDeB|Ay@x@{@v@wBnBuBpBsCnCqBlBkG~FaKlJcAx@sClCeIxH]ZoGbGeG|H[`@Y^}DdFcDdEe@l@ORY`@qAbBeCbDcBxBqCjD[^A@aAnAMN[^kDvD}AfByDnEmC~C_DdDq@f@o@\\e@TcAZ[HcARcEp@u@Nc@HoDp@k@HiBZ_G`AiDj@{B`@aEr@c@F}HtAwF`Aw@L{LrBwF~@eCb@m@JcHhA_AF[BkBCoC@{FDc@?sDBqB@mJDeJFuC@wEBoCBc@?_DBU?kBB_CBmDD_B@W?gCD_A?{C@_C@aADs@?gCBg@@c@?e@?_ABw@@}AAe@?gB@Y@q@@y@B]?eB@iADuADS?"
                     },
                     "start_location" : {
                        "lat" : 44.160556,
                        "lng" : -84.6088032
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1266
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 242
                     },
                     "end_location" : {
                        "lat" : 44.3053548,
                        "lng" : -84.6395739
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eW Houghton Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "o`kmGprtcOMg@wBgCe@i@W[QUQYQYO_@[_AMi@e@{A_@qAACa@}AQq@CC[gAUw@Yy@s@kBgAcCyA{Bg@q@k@w@KMOSg@u@KSg@}@y@gBGSyAsDi@qAkAwC}@{Bo@_B{@gC"
                     },
                     "start_location" : {
                        "lat" : 44.2984755,
                        "lng" : -84.65209059999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1166
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 233
                     },
                     "end_location" : {
                        "lat" : 44.31297,
                        "lng" : -84.6309412
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eM-18 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE Houghton Lake Dr\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eN Roscommon Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mklmGhdrcOa@PIDMFMFM?I?MEq@Y_CqAsAo@e@S[O{Aw@oCsAKG{Ay@WQ_Aq@UQa@_@]a@WYq@}@QU_BeC_@w@c@_AOa@Oa@Oa@Sk@IQSq@}@uDUaAcAmE?AaAoD"
                     },
                     "start_location" : {
                        "lat" : 44.3053548,
                        "lng" : -84.6395739
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.2 km",
                        "value" : 5223
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 942
                     },
                     "end_location" : {
                        "lat" : 44.3412889,
                        "lng" : -84.67272699999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE Houghton Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "a{mmGjnpcOkAz@iAn@_@TcDhBg@XkAT}BBwD?eQPyBGwLqAkAKi@AgAHm@NkAf@qA|@yAtBg@lA]hAq@bEMrAGZOtAQ`Bo@|Eg@pD_AtHSxA{@lH]bCOh@Qh@Yr@aAlBaBpBgJdLu@~@qA`Be@h@[^QTGHiAtAsA`BGHSTGHiAtAIJu@~@m@t@e@h@k@r@aAjAQRIJu@~@]f@GFY`@mB`CaEdFwAbBw@|@i@p@Y^[^[^Y`@[^[^[^u@`Au@`Au@`A_@b@GLMPGPO\\GNGPW|@Ih@Gb@AJEp@ALItACp@Ep@Cp@I`BAXIdBAZItCCp@EbAANKdCMtC?PU`C]vCW~BYpBSbB_@vCSjBIz@Gx@C`B?vAHzE?`A?n@Gt@ALEVIr@[z@OZ"
                     },
                     "start_location" : {
                        "lat" : 44.31297,
                        "lng" : -84.6309412
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "9.2 km",
                        "value" : 9199
                     },
                     "duration" : {
                        "text" : "27 mins",
                        "value" : 1631
                     },
                     "end_location" : {
                        "lat" : 44.4213354,
                        "lng" : -84.6841012
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCo Rd 100\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE Houghton Lake Dr\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Co Rd 100\u003c/div\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "alsmGpsxcOo@hA}@bB{@bByAzCWd@Wd@i@dAa@b@A@[VA@_@NCBg@Fc@BS@uABc@?iA@mB?oC?kB@sD@c@?c@@Q?gABc@BI?Y?A?a@Dc@DKBUFa@La@NMDu@XcA^wAn@uDpAu@VOFs@X_@LuBPsBD}@@iBDmCHe@@w@@wCFgEHkC@S?c@?c@@]?_@?aEBoC@M?w@Hi@F]Je@Lm@Zm@b@{@r@YZCDc@l@}@fBQ`@OZS^sCnGo@pAe@r@_BdB}@h@WPe@N_AJk@?S@u@Am@AkB?_F@oC@gA@c@?W?c@@c@?c@?c@?c@@c@?c@?c@?c@@kB?c@@c@?c@?gA@kB?_JDuCBoCBkBBkBBkB@{FFwEDgJJsDBgABcA@_A@kB@_HHc@?oCDc@?c@@oCBgA@A?yFDkBBc@?wEDsB@oC@cE@gFB}YH]?aGAwE?aL?kE?sI@sDAiHAwK@wE?gB@sD@uDD{F?aD?mA@[@wI?kB?c@?c@@gA?gA?gA?c@?gA?"
                     },
                     "start_location" : {
                        "lat" : 44.3412889,
                        "lng" : -84.67272699999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.6 km",
                        "value" : 5605
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 969
                     },
                     "end_location" : {
                        "lat" : 44.4645535,
                        "lng" : -84.66391659999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE Higgins Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k`cnGrzzcO?iEAq@?q@?s@AcB?q@?CAsC?e@?KCi@Cc@ESKk@IUGSGMIOMSAAKOg@i@yAuAy@s@_@[OMKMOOKIu@o@GGa@]MMSQ][[[][_@Y}@q@EEWS}B_BQMkCkB_Ao@}AgA_@W_@WwBwA{Ak@eBq@a@Qa@OiDqAcAa@iAc@_@Me@Wc@_@Yc@mAkBq@mAWe@o@iAo@kAq@iAa@y@_@y@uBqG]iAqEkNYm@a@e@_@W_@[_@Qi@My@IuAAm@?w@@eDCS?g@?[?uAAO?Q@WAwA?U?]Ae@?kA?M?cAAg@?A?m@?c@@_B?C?y@A]AO?{@?m@A[?{D?cC?eCAuCBkBEsAEoA?c@?kBAgA?c@?gA?gA?gAAuBAgAAgAAkBA{FAsDAc@?_HCc@?oCA[?G?e@?aAAwBAc@?sMGyGCuECcIC"
                     },
                     "start_location" : {
                        "lat" : 44.4213354,
                        "lng" : -84.6841012
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 803
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 134
                     },
                     "end_location" : {
                        "lat" : 44.4646986,
                        "lng" : -84.67403469999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHiggins Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mnknGn|vcOAdD?tD?p@?r@?p@?tCApE?|CCfEAzBGtGAp@EzFCbB"
                     },
                     "start_location" : {
                        "lat" : 44.4645535,
                        "lng" : -84.66391659999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1600
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 294
                     },
                     "end_location" : {
                        "lat" : 44.47909,
                        "lng" : -84.673784
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE Higgins Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "koknGt{xcOmDBwAAkBA}CG_A?y@AaAAwCCkBAgAA{FG{FCwDAqCAeF?gAAsIIiCA{@A{C@"
                     },
                     "start_location" : {
                        "lat" : 44.4646986,
                        "lng" : -84.67403469999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 797
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 155
                     },
                     "end_location" : {
                        "lat" : 44.4791643,
                        "lng" : -84.6838216
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eE Higgins Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iinnGbzxcOE^?bA@dB?~B?vBAhEAbB?p@Ap@?r@?p@AhE?p@AbB?fC?pA?r@?tC?fA?b@?L?dB?x@"
                     },
                     "start_location" : {
                        "lat" : 44.47909,
                        "lng" : -84.673784
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1611
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 283
                     },
                     "end_location" : {
                        "lat" : 44.4936525,
                        "lng" : -84.68373969999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eE Higgins Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "winnGzxzcOg@?eA?gAAeCAm@?yF?qBAyCAkBAcA?sD?kB@kB?sDAc@?wE?c@?c@?a@?c@?cCAkKAc@?cDAkB?c@?"
                     },
                     "start_location" : {
                        "lat" : 44.4791643,
                        "lng" : -84.6838216
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 800
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 122
                     },
                     "end_location" : {
                        "lat" : 44.4937127,
                        "lng" : -84.69382039999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eE Higgins Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "idqnGjxzcOAtCCjPAxB?hEAvCArKAtC?lB?r@@tB"
                     },
                     "start_location" : {
                        "lat" : 44.4936525,
                        "lng" : -84.68373969999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 1973
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 378
                     },
                     "end_location" : {
                        "lat" : 44.5113748,
                        "lng" : -84.69147500000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eE Higgins Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "udqnGjw|cOq@Ec@Cc@E_AGc@EiAGqAKc@Es@E_BMeDSmBOqAIgAIg@CgAI}AI{FYyCUkBOc@Cc@EeAIgAIc@Ec@Cc@Ec@Ec@Cc@EiBOkBMyC[s@Ec@CkBKy@GsDWgAIWAm@Ec@CkBMoCQ}CS"
                     },
                     "start_location" : {
                        "lat" : 44.4937127,
                        "lng" : -84.69382039999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1842
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 319
                     },
                     "end_location" : {
                        "lat" : 44.5279359,
                        "lng" : -84.6911669
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eS Grayling Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "astnGvh|cOwBCwEEsDEkA?c@Ac@?c@?_HCsACoGCkBAiGE_HEgAAkBAoFAmDAsDCaFGmD@eC?"
                     },
                     "start_location" : {
                        "lat" : 44.5113748,
                        "lng" : -84.69147500000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.5 km",
                        "value" : 5529
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 984
                     },
                     "end_location" : {
                        "lat" : 44.5696399,
                        "lng" : -84.7110234
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eS Grayling Rd\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "szwnGxf|cOmA^gCx@]L?@c@T]Tq@b@a@\\_@Ze@f@i@p@_@f@o@dAGJk@lACBWp@MVQ`@IVO`@AFQf@_@zA]|AMl@Kb@Ov@Mn@Ml@Mn@g@jCI`@}@`E{B`LqAbGiEpSm@`Dg@|BUz@]fAELSh@ADc@fAa@r@[j@e@t@y@bAk@j@ML[VA@_Ar@u@d@y@`@QFa@NYJk@LODQDm@L}@FeAD}AA{AA{BA}SM_NI{ACuIE{IIK?a@?yAAkKIiECoEEoCEaKIgAC}GGuEEqCCwEEc@A{FEkBAwEE}HGeDEo@?A?_@@YHULSLo@l@]d@"
                     },
                     "start_location" : {
                        "lat" : 44.5279359,
                        "lng" : -84.6911669
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 288
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 78
                     },
                     "end_location" : {
                        "lat" : 44.5718015,
                        "lng" : -84.70906239999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN Harrison Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "g_`oGzb`dO}A}@aAo@g@]e@[c@a@a@_@_@c@a@g@[e@]k@"
                     },
                     "start_location" : {
                        "lat" : 44.5696399,
                        "lng" : -84.7110234
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.3 km",
                        "value" : 3298
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 578
                     },
                     "end_location" : {
                        "lat" : 44.5984629,
                        "lng" : -84.70608799999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eOld US 27 Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "wl`oGrv_dOk@aAg@cA_@{@KUIQsAcDuB{EKUQa@a@_AYk@e@{@W]ACW[CCa@e@m@s@e@g@_@[_@[YQYQi@Yc@U_@M[MYKCASE_@Ia@IYG[EWCKAi@E_@Ac@Aa@?M?uBL{@Lw@TkA`@uAn@k@\\wB`B]X]X_Ar@MJo@f@OJo@f@kAt@{Al@qBh@oB\\uG`AeGx@eC^kDf@c@F}IpAE?iBXmC^{IpAE@c@F}Er@g@@mAAWAm@IQE[IEAs@SOISKk@_@m@k@MOm@o@IMm@s@i@y@Y_@QWOOQI?AWKSG]Ck@A"
                     },
                     "start_location" : {
                        "lat" : 44.5718015,
                        "lng" : -84.70906239999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1245
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 214
                     },
                     "end_location" : {
                        "lat" : 44.598541,
                        "lng" : -84.6903667
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eW 4 Mile Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kseoG`d_dOAcKCeYCkZ?yGAeD@sI?cB?cA?UE_A"
                     },
                     "start_location" : {
                        "lat" : 44.5984629,
                        "lng" : -84.70608799999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1166
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 207
                     },
                     "end_location" : {
                        "lat" : 44.6068477,
                        "lng" : -84.69753109999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE Railroad Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{seoGxa|cOeAt@s@l@k@d@kJdIaGfFMJWPuAd@iDPM@eET}@RWp@Cv@Cn@IpBIvACRKp@s@v@WN_@TiB|@WV"
                     },
                     "start_location" : {
                        "lat" : 44.598541,
                        "lng" : -84.6903667
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 759
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 139
                     },
                     "end_location" : {
                        "lat" : 44.6129509,
                        "lng" : -84.7016699
                     },
                     "html_instructions" : "Continue onto \u003cb\u003e3 Mile Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "yggoGpn}cOsE|D_Ax@u@b@aAj@wFhEGBqClBm@\\sAt@sA`@cBf@kBX"
                     },
                     "start_location" : {
                        "lat" : 44.6068477,
                        "lng" : -84.69753109999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.2 km",
                        "value" : 5196
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 824
                     },
                     "end_location" : {
                        "lat" : 44.6492116,
                        "lng" : -84.6986211
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eE Railroad Trail\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}mhoGlh~cOs@F}AAy@AuBa@KCy@Wu@Wq@KgASs@My@U[Q_@QaAo@k@g@OKm@c@q@YAAUQc@i@w@}@ACm@gAo@iAs@oAaCaEwB}Cs@aAAAkBeCoAeBk@u@[c@q@eAwCuE_CqDkAkBKOe@w@_AyAKO[a@Ya@IKU_@]WWSOKa@Wk@MEE]U}@mASYgCsDKSsAsBU[uAsBU][c@u@kAaA}AcCiDeBmCEIk@{@GIu@w@c@w@OUe@o@k@s@eA}@ECeAo@oAm@}Ao@KCsBi@{@Ky@I{ACyABIBuARuAZcAZi@T]Ns@b@gAz@q@h@e@f@CBc@f@]b@m@|@u@fAs@nAyAdCaCzD{E`Ia@n@iCnEq@hAsBfDIL{FfJcBnCeC|DiE|G}@vASHeAh@QHUJUPOXGHMViC|D{A`C}@jAq@lAOpA"
                     },
                     "start_location" : {
                        "lat" : 44.6129509,
                        "lng" : -84.7016699
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 205
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 36
                     },
                     "end_location" : {
                        "lat" : 44.6510519,
                        "lng" : -84.6985497
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eIndustrial St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qpooGju}cOm@AM?sHK"
                     },
                     "start_location" : {
                        "lat" : 44.6492116,
                        "lng" : -84.6986211
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 263
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 44.65341919999999,
                        "lng" : -84.69843419999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eE Railroad Trail\u003c/b\u003e",
                     "polyline" : {
                        "points" : "a|ooG|t}cOmAC_HOkBC"
                     },
                     "start_location" : {
                        "lat" : 44.6510519,
                        "lng" : -84.6985497
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 343
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 52
                     },
                     "end_location" : {
                        "lat" : 44.656503,
                        "lng" : -84.69831719999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eIndustrial St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{jpoGdt}cOoLOc@?c@AoBC"
                     },
                     "start_location" : {
                        "lat" : 44.65341919999999,
                        "lng" : -84.69843419999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 426
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 151
                     },
                     "end_location" : {
                        "lat" : 44.6564929,
                        "lng" : -84.7037089
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHuron St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eM-72 E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "c~poGns}cO?vD?p@?p@?vC?p@?dB@hB?fA?v@?tB?hC"
                     },
                     "start_location" : {
                        "lat" : 44.656503,
                        "lng" : -84.69831719999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 410
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 76
                     },
                     "end_location" : {
                        "lat" : 44.6601831,
                        "lng" : -84.703588
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBrink St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "a~poGdu~cO}BCc@?gAAeFGqGI"
                     },
                     "start_location" : {
                        "lat" : 44.6564929,
                        "lng" : -84.7037089
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 368
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 44.66020959999999,
                        "lng" : -84.7082386
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMadsen St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cuqoGlt~cO?x@?jDAfBAfCAf@?`C?nF?p@"
                     },
                     "start_location" : {
                        "lat" : 44.6601831,
                        "lng" : -84.703588
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "83 m",
                        "value" : 83
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 44.6609586,
                        "lng" : -84.7082223
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eState St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iuqoGnq_dOkA?iAC"
                     },
                     "start_location" : {
                        "lat" : 44.66020959999999,
                        "lng" : -84.7082386
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1186
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 222
                     },
                     "end_location" : {
                        "lat" : 44.66865019999999,
                        "lng" : -84.7180822
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eMaple St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_zqoGjq_dOu@AeAC[?OFIBIHORaA|AcBnC_A|AiDxFeDnFeDdFcDnFcDhF_AzAcBnCeBpCGZ"
                     },
                     "start_location" : {
                        "lat" : 44.6609586,
                        "lng" : -84.7082223
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 211
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 44.6705507,
                        "lng" : -84.7180346
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMc Clellan St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ajsoG~nadOcEEsDCC?"
                     },
                     "start_location" : {
                        "lat" : 44.66865019999999,
                        "lng" : -84.7180822
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13 m",
                        "value" : 13
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 43
                     },
                     "end_location" : {
                        "lat" : 44.6705396,
                        "lng" : -84.71820319999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eW North Down River Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}usoGtnadO@`@"
                     },
                     "start_location" : {
                        "lat" : 44.6705507,
                        "lng" : -84.7180346
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.7 km",
                        "value" : 3737
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 654
                     },
                     "end_location" : {
                        "lat" : 44.7007592,
                        "lng" : -84.72907959999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{usoGvoadOyAJKFKFUBO?EAGCGCQCKAIAUBQ@G?A?S@w@A}@?MCKCQEC?C?C?A@MFE@[AEAA?CAE?G@GACAAAGEGCE?E@K@K@IAOGOCK?MBODOFUHK@I?KASGQIGCG?G@Q@EBG@C@EAA?o@IQCWBQBC?I@QEwAAc@CcAAUBg@D[?G?S?_@A]Ca@KO@MBKBS?SCYE[AMASBSDOBQBY?OAy@?UG[OEAC?C?C?G@g@J[HK@OCMIUGOCK@IBQFI?K?MAK?_ACQFO@QCKAICIEQAM?S@Q?QAIAMGMGMASA}@@s@Be@Fa@@_@?i@A]AOCWI]?_@@mAAw@AsC?qA?i@?c@C[C_@EYES?e@?S?M?SEWCQ?S@{BBiACYBI@u@C_@BK?c@DK?e@Hy@HYDk@LkAVYJE?]?[?S@[HYJQH_@Do@FYFMFe@Zi@n@a@Vo@`@OJKJGFGHEDIHc@VUTo@n@u@r@URKLWXq@l@OH]\\GHGHEJCJGNILGFEDIDIDC@CBEDEFKTKXIRS^_@l@yEtGQZO\\OTe@v@GJMLIJMHKHIJWZYh@GP[h@ORUTSTMLKP[d@MRGPEPET?NETCNELIPQTKHa@\\[\\ON[`@ILA@GHIDMFGBOLEDEFEPGTKVEFGFKJKJGHMNGLCFALAZCh@"
                     },
                     "start_location" : {
                        "lat" : 44.6705396,
                        "lng" : -84.71820319999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5 m",
                        "value" : 5
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 44.7007225,
                        "lng" : -84.72912509999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wryoGvscdOFH"
                     },
                     "start_location" : {
                        "lat" : 44.7007592,
                        "lng" : -84.72907959999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 249
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 44.7023395,
                        "lng" : -84.7312944
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oryoG`tcdOsEdHoBhC"
                     },
                     "start_location" : {
                        "lat" : 44.7007225,
                        "lng" : -84.72912509999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "43 m",
                        "value" : 43
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 44.7026186,
                        "lng" : -84.73091789999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eN Old 27 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "s|yoGpaddOOWg@q@"
                     },
                     "start_location" : {
                        "lat" : 44.7023395,
                        "lng" : -84.7312944
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "19.1 km",
                        "value" : 19116
                     },
                     "duration" : {
                        "text" : "57 mins",
                        "value" : 3436
                     },
                     "end_location" : {
                        "lat" : 44.8579831,
                        "lng" : -84.70602
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN Old 27 N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "k~yoGf_ddOmC`EiGfJ{CpEYb@{G`KY`@uDtF{G`KcCtDWZSVWZo@l@WTEDc@\\y@^IBi@RwAZmA\\g@LmR~EgBd@c@JqBh@eNjDQD_Bd@_Af@w@h@YP_CnB{AnAi@XYPi@Tg@Pg@NUFQD}@LsGl@}Gp@}TvBaIt@cSjBc@DoMlA}LhAi@FwFj@yBXoIr@qD\\G@uEd@qFh@iBPiKbAeHr@s`@xDgCVwEf@oJv@gWfCgHr@YBkELsKIkBAgJGiGEeQGgJEeGG{FCcD?cGE}FI}FC}FEgDCkBAyOIg\\QiTKaLEwWK]A}EAkDCmJGsg@WmGEkKImBAcBImAMCAsASy@Q]Ko@SaAc@aBs@uA{@A?y@k@u@q@}B{BACiAuAySuX_AoAaFuGgCgDa@i@wFoH{BuCKOoGsIu@cAaDgE[a@u@cAqFkHgCgDqFmH[a@aDgE{DkF[a@_DgEqDwEqFoHeCgDaFuGa@m@uJiM}HkKkE}Fg@o@yAqBkN_RkIyKuEgGaBwBmI_LeCgD}DiF[_@oAcB_C{Ck@y@o@}@"
                     },
                     "start_location" : {
                        "lat" : 44.7026186,
                        "lng" : -84.73091789999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "14.4 km",
                        "value" : 14419
                     },
                     "duration" : {
                        "text" : "42 mins",
                        "value" : 2517
                     },
                     "end_location" : {
                        "lat" : 44.9844162,
                        "lng" : -84.68110329999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eOld Hwy 27 S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "kixpGrc_dOo@}@}DiFyAmBaCuCQQyCkCg@_@QKaB_A_@UA?kBu@kBe@mB]aAMeAImBIc@CsBIwEWmBKgAGsF[c@CiBKsDSy@C}CQC?oAKu@Ge@GGCKCa@I[IUGSGgA_@_@MsAg@gBq@oAc@OGEAICQGEAGCKCIAGAICUCSCSASAMAY?UAy@CgACe@C}BCcCEgBCeLSwAAS?_@As@?_AAu@?sA?gD@}@B_DBgI@qBA{ACgACaACwDQoCMu@EyAGgDQyAEw@CcIc@_H_@eGe@_DO_CMc@CoCOcP}@oCOiKk@eG[cDQyH_@{Ka@sDUuEYOA{AKWCKAUCq@K{@Q}@UqAa@eGyBaBs@sCeAkDsA}Ak@uB{@MEgCaAgBo@EAcDkAc@M}FoBgNqFoFmBoFoBoFmBmAc@gC}@kBq@kDmAeBo@cA_@k@QaDkAs@WsDuAc@Oa@OkDmAa@OkDmAgC}@gC_AuI{CWIaDgAgBm@mE{Ay@YICuIyCqDoASE}B{@yAm@aBi@gAYeASu@M{@EaAC}@?cADsAFa@BA?iCPiIjAsAJmCTyAJsBPqBLsBNiBJsBPS@gBHsBPqD^G?uE\\wE\\gAHuE\\kBLc@BeAHwE\\mBNyCR}@HqBJgBBs@@uBDmEIeBEmBGGAkBGc@AKAWAuEOc@C{FSkLa@gEOsJ]}CKaBEsBGkBIoBIuACqBI_ACeAEsAGa@C[Ca@EUEGAUEWEUIYISGQGKGMIo@]"
                     },
                     "start_location" : {
                        "lat" : 44.8579831,
                        "lng" : -84.70602
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 478
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 105
                     },
                     "end_location" : {
                        "lat" : 44.9885711,
                        "lng" : -84.6812032
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN Otsego Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "s_qqGzgzcOQb@EJCFEDCDGFC@A@E@KBG@K?QA[AmDOgDMgAEYAuBE_@Ig@MYESBQD"
                     },
                     "start_location" : {
                        "lat" : 44.9844162,
                        "lng" : -84.68110329999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "18 m",
                        "value" : 18
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 44.9886274,
                        "lng" : -84.6814133
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eN Otsego Lake Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qyqqGnhzcOGZCL"
                     },
                     "start_location" : {
                        "lat" : 44.9885711,
                        "lng" : -84.6812032
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.1 km",
                        "value" : 4134
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 746
                     },
                     "end_location" : {
                        "lat" : 45.0255409,
                        "lng" : -84.678583
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}yqqGxizcOy@Me@CaBEg@?s@Bc@@U?MAq@CgAEUAg@A]GKGOEG?E@EDELGREFIDQ?sEMC?}FU_@AyAA}BKeAG{CMqCG_BIc@CiBEaAEgCKuAEcEMgEOqDOyBGkBGo@CiDKgBIwAEsBGgDKgDOMAiEMi@C{DMgAC}BIiACoAI_ACk@C{BI}BIgCIaBGkAGuCG{@CyAGuDSyBI{CI}CKwAE_ACi@CoBG}AGmAGcBEgAGMCAACIEIKBECEICECGCCAAUCoAGkAEc@Ce@Aa@?I@C@C@E@G@A?K?A?"
                     },
                     "start_location" : {
                        "lat" : 44.9886274,
                        "lng" : -84.6814133
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6 m",
                        "value" : 6
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 45.0255421,
                        "lng" : -84.6786537
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eW 2nd St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "s`yqGbxycO?H?B"
                     },
                     "start_location" : {
                        "lat" : 45.0255409,
                        "lng" : -84.678583
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1014
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 236
                     },
                     "end_location" : {
                        "lat" : 45.0346368,
                        "lng" : -84.67888429999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "s`yqGpxycO}BIaBM[?yBDuAEkAEu@Em@AmBGa@Au@B]?w@GcAAe@AkA?w@HqAHs@FWBg@BoBJuBPsAJg@DmAL_@B"
                     },
                     "start_location" : {
                        "lat" : 45.0255421,
                        "lng" : -84.6786537
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 272
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 44
                     },
                     "end_location" : {
                        "lat" : 45.0346612,
                        "lng" : -84.6823474
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eW North St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "oyzqG~yycO?dGCxG?tC"
                     },
                     "start_location" : {
                        "lat" : 45.0346368,
                        "lng" : -84.67888429999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 325
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 58
                     },
                     "end_location" : {
                        "lat" : 45.0375839,
                        "lng" : -84.6823423
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eClover Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "syzqGtozcOkB?kB?oCA_F?"
                     },
                     "start_location" : {
                        "lat" : 45.0346612,
                        "lng" : -84.6823474
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "75 m",
                        "value" : 75
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 45.0375825,
                        "lng" : -84.6813834
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRandom Ln\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{k{qGrozcO?_E"
                     },
                     "start_location" : {
                        "lat" : 45.0375839,
                        "lng" : -84.6823423
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "26.7 km",
                        "value" : 26729
                     },
                     "duration" : {
                        "text" : "1 hour 11 mins",
                        "value" : 4250
                     },
                     "end_location" : {
                        "lat" : 45.248266,
                        "lng" : -84.595243
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN Central State Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{k{qGrizcOkA@k@EAAOOI_@EyAAs@?y@Fy@A_@IOMGG@gARQBs@BcDJq@HA?a@@k@@_AH[De@BE?]?_@KUEUFQFO@iA@E?A?aAFcBL_@@oAP{@DYBC?}@Gc@AcABeAHyCTS@oDVu@F{@FsCTsCVe@Hk@JeAVyBp@GBiBn@aBl@[LmBn@QFOFa@NaBl@eAXiAR{AL{@?aAEu@Mq@OWGk@Uk@UWMa@QCA}A{@_@Sa@Sa@Q}@e@eB}@o@[}@a@y@Y}@SgAOu@CY?q@?cC\\aC`@qB^{AXyDr@eBVcBXOBcDl@o@JaCb@I@{@FiA?y@AWAa@Cw@Kw@QkB]_AUoAW_B_@a@KGA[IeAUa@Ic@Ka@IEA]Ka@Kg@M_Bu@AAcBcAqCgC]]cCyCEEmCwC{BwB{BqAaC{@{B]kBUkBHYB}Eh@cBPkCXA?c@HeANgALC?e@B]@c@Bc@?Y?_AIg@IKCi@G[G[E{@YOIe@UcBy@}@o@eBmAIGCCMGUQIG}AiA_@WUQGG_@YeA}@SS[_@y@{@[[mAmBcA_BGKsBmDGImB{Bc@Ye@]}BoAaA]UKuCaAiAa@eDkAcFeBcAa@oFiBcA_@kDmAcC}@e@Qy@]IE_BaA_@UQKMKCA[U}@q@SOk@a@_D}B{@o@}@q@{EmDaAs@{@o@yBgBKIs@i@WQaAo@wAs@q@[IEsAg@GCiBe@iAYaAKoAM[?iAAkB@eA?kGFu@@oA@w@Bk@DA?a@Hu@Ai@UIAEAa@?UCS?]Fc@H_@?y@?uABkKFkB@wEBgJH{FDsDBkB@gEDO?gA@uEDoCD[?k@?kB@cEBS?gABqCBsDBwEDgA@sDBoCBgA@kBBgA@oC@sDDgA@oCB{FDsDBoBBoIFuEFuCBaAC_HF_HFgFBgEDoEDoA@wEBsDBkB@_EBaCB{FHwA@{AAkBA}BAi@EcAKo@Ke@Ke@KQEKC}@YKEOGw@WqB_Aw@c@GGq@e@e@_@ECOOs@i@[]WWk@m@GGkA}As@cAkAoBm@iAa@y@IQqBiEyA_DIQIQyAcDqE}JcBsDKS{EqKKScBuDISIOcA{B_@{@oDcIKSu@cByA_DmCgGa@{@a@{@ISISKSUg@a@}@_@{@GOGOEGKWq@qAGIYa@Wa@[c@EIq@s@A?UYy@q@IGyAeACAiAg@{@_@AASIsBq@kDkAa@MICcGgCs@YiAcAA?IIsA}AyAgCA??CoBsGWmAeAiF[}A?Ak@_DgA}Da@s@?A{@}Ai@m@?A}@eAw@i@AA{AcAgA]}Ae@wCc@s@KwA]A?uG{AA?iAY_Bo@A?aAa@A?cBs@cA_@?AcA_@sB{@QM}BaB}AkAGCUUyAsA?AuBkBAAAA{@s@}@u@cBwAWMaCsAgAS{AYq@C{BIQBA?uDTgBJ}AHuAEa@CA?iBGc@McA[A?m@QgBy@m@i@A?wCeC][uCmCcEyDKK_@[mFcFwAuAuBmBACy@{@A?eGiGy@{@A?sAuAw@eAqAeBcB{BGKyByDcAeBYs@Ug@_A{BsAeDSi@a@eA}@qCM]CMiAyECKMm@{AuGMm@iBeIkAeF?A{@wDMm@}@{Dk@iCMm@Oo@k@iC?AsBsJ{@yDeBeICEeAuEUw@]gAk@yA[m@Sa@gA_BKIkAkAkBmAeBu@k@W_B]]I{Dk@}@MqDk@eAOqDi@wAUwASyFy@_C_@o@IuEs@aAOoBSWEy@?_BFA?qC\\{Ad@]LKBq@R[HgEjAgBf@kCt@e@LiD`Aw@TwCz@kDbA_@HkBh@iBh@cAVa@L]JiAZa@Lg@NqA\\yC|@e@LkDbAqBj@iCv@uEnA]JqD`A_AZqC|@}@VcIzBkFzA}A`@MFKF[^QJC?E@EAIC"
                     },
                     "start_location" : {
                        "lat" : 45.0375825,
                        "lng" : -84.6813834
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.8 km",
                        "value" : 2786
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 462
                     },
                     "end_location" : {
                        "lat" : 45.2722911,
                        "lng" : -84.6019522
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eN Central State Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "updsGfoicOMEC?E?G?w@RgCt@u@RyHnBeCZaB@eA@M?_BGiBAaDCeEKMAi@A{BAgAAQA_DEqDIgBCoCE_ACG?wECoCCm@?}BF_ANgATyAf@WLwAt@{AhAoBrA{DlC_@VmDbCOJ}AfA_C`B}AfAo@b@_Aj@sBz@e@Pa@NiDnAy@Zo@TULG@"
                     },
                     "start_location" : {
                        "lat" : 45.248266,
                        "lng" : -84.595243
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "26.6 km",
                        "value" : 26619
                     },
                     "duration" : {
                        "text" : "1 hour 17 mins",
                        "value" : 4605
                     },
                     "end_location" : {
                        "lat" : 45.492022,
                        "lng" : -84.5781504
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eN Central State Trail\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "yfisGdyjcOK@[J{@Ve@Pc@NmAb@iA^q@Va@Na@Ng@R]LQF]Ja@Nq@VUHsAd@wAd@}@\\s@Vi@RYJWHa@L]LgCx@e@Rc@NmA`@mAb@g@Pe@Na@L[Je@LQDYF_@Hg@HUDYD]F]D]D}@LsAN[Do@J]Bc@D_@FC?w@Li@He@Fi@HiALUBg@Hm@F{AR_BRO@WDW@[FI?]DO@c@H]Di@F_@Fi@H]BO@G@G@eARMBQDe@JK@UHk@PcA\\k@Tk@V]Pa@RaAn@g@\\}AbAsChBu@d@iAt@_BdA_HnEaDrBuA~@i@\\_F~CgBjAcAr@oAv@c@XsChBe@ZaAp@gAr@[Py@j@m@^}CrB{BtA}@n@}AbAwA|@}@l@i@^MFMHc@Xg@Zu@f@_BbA}@l@iAt@c@Xy@h@o@`@m@`@c@XYPc@V]TYRe@XWPYPu@d@g@\\c@XYRg@Z}@h@q@b@m@Zc@TSHg@RUH_@LYFYFODWD{BTkA?wE?{FCoA?aAC_@Ae@@k@?Y@q@?m@@q@Ce@CUAwBAiA?gAAkBAgA?c@?kBAgAAa@?k@?a@@Y?mAA]?a@?g@Ac@CU@KBC?C?A?GAIEC@A?A?A@ODMB]Ae@Ey@Cs@?k@@a@?mA?oDCoB?U?y@HcAJ{@Di@Dc@Dc@FeALgALmCZg@FaANm@HaALu@J{C\\kAN{ARqABK?{@AY?oAIQAu@Ie@EgAQ}Bk@yBg@[Ic@KgAOa@ESCmAEeAFK@y@J_AXuAj@YLa@Ra@Pc@NI@eDpAqAj@QHuClAiDtAa@PgDvAGB{@\\eBr@aCbAgBz@qEzBWHkEdBeBp@oGdCgBp@a@Jk@PuAb@k@JQB{BVmBHu@BQ@cI\\sDNeAFoCJsDPoCLc@@mCLsDPsDNgADc@BoCLeADkCLC?oCHa@@}@CgAIKCa@KiB]eBu@YO_DkCUSa@i@}A_CuAyBq@iA_CqDyBiDqEkHqHqL_BkCe@s@wCwEkAmBqCmEkB{C_CuDsA_BGKqAmA_BgAoAo@{@]}Ae@C?gAQ_@EiBSyFm@gKiAgAMmC[mCYoC[uEg@qDa@cJcAgAKyFo@eAMaI{@qDa@wAOyAQmC]qDc@c@EmC]c@Gc@EmC]iBScBSqBWoC[oAOYEuAO]AkBD}@DsBL_AFkBNc@BeAHuCTa@D{BP{AJuEXc@BU@eIv@I?qDZoCLc@@g@BW?S?aC]YEwCe@gAMoAQQEm@Gw@OAAOCSAiBUa@EcC]uAUmBYiC[gBUg@IiDg@E?uEq@IAgDe@oDg@{Di@GCOCu@Kc@Gc@Gc@GmC]}Di@y@M{Ce@gEk@aBUmAQ}G{@mAQkAUUIo@Qg@Q_@Qw@a@i@_@_Ao@_Aw@OOKIMKEEa@]EEmDwCyBmB]Y][{AoACCw@s@kAeAkAeAuCiCyBoB{DkDw@k@_@]MQIIWUMMEEIIMKIGIGMIIEOK]Qa@Wc@Sg@Wq@]iBcAaAi@aB}@g@W{A{@cCqAcDiBcDgBcCsAeGeDmH_E}CaBaAi@eDeBaB{@eE{ByAu@iBkA_@UaBcASOa@QwCyA{@i@aAg@a@WYMSOWMKIGGc@Q[Se@UAAKGKIQIYMMEKEKESIWMKEOI]IEAKCKCc@Gk@Io@Kc@Co@Ci@Aa@B_@?g@Fg@Js@L]Ha@HUHc@Pa@Pg@Zs@f@o@Zk@n@aAfAyE~Fm@t@iC`DOPuClEKJk@p@QPy@lAgA|Ay@`A}BxCm@p@{@z@i@`@EBKFOJo@\\y@`@]LEBKFOBYD]Lk@Jg@Fe@Hw@D]?a@@m@?g@Co@Gi@Ce@C]Ew@G[Ee@Ec@Ce@Gk@Ck@Ge@Aa@Ei@Gg@CyB]gAGk@E_AGqDWkBOmCQoCSQAcE[iDYqAIgAIo@EaCYMAs@Kg@MyA_@MG]Mc@USMgCiB]c@[_@s@y@CE_@k@{@mA}EaLk@oAs@{AQ_@SSi@{@MWWk@Yu@UeAu@sBuCoG_CqFaAyBWm@}@uBmBiE?C}AiDO[c@cA}AgDCE}A{CYi@}AeC_@i@gBiCwAsB"
                     },
                     "start_location" : {
                        "lat" : 45.2722911,
                        "lng" : -84.6019522
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "9.1 km",
                        "value" : 9119
                     },
                     "duration" : {
                        "text" : "26 mins",
                        "value" : 1539
                     },
                     "end_location" : {
                        "lat" : 45.5626955,
                        "lng" : -84.5248926
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eN Central State Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "cdttGldfcOQKuAwAkAcAg@a@sCwBCA}CiBcB}@eFqC]Qu@o@i@a@GGyAcBgAcBQ[m@iAe@iAiB}D}AeD}@yAiA_BqA}AkAoA{AmA}AmAuAaA_Ao@}EiDuByAeEwC}EiDaEuCmBuAkCuBIGmAyAo@cA[g@qAaDIQsBgFi@iAu@gA]c@MQ}AuAKGi@]u@_@e@Oc@QqAW{@KgB?g@?sEN_ELmACQAm@CeAM}A]cA]c@SSIs@c@q@a@o@g@UUq@q@cAkAW_@c@o@yB{Ec@sAsAsF_AwDm@yBCMk@sBk@_B_@k@Ye@u@cAs@s@q@q@g@c@]SGCSIuBu@gC}@{Bw@}Bq@o@SsGoBgBi@iCy@QEwBq@kCw@aEmAcA_@s@UuAe@qFcBy@WoB}@iEmBSIoGyDcGmDaAk@_Ak@cDmBaCuAeGkDcFwCeIyEMGsCeBeI_FsHgE{G}DcEaCaEeCuCgBOEgF{CcCuAcAm@o@c@m@YiKiG{@i@cAo@yC}AiAq@k@]u@c@aCuAcDiBmDsBq@k@iC{BIU"
                     },
                     "start_location" : {
                        "lat" : 45.492022,
                        "lng" : -84.5781504
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "8.5 km",
                        "value" : 8542
                     },
                     "duration" : {
                        "text" : "26 mins",
                        "value" : 1535
                     },
                     "end_location" : {
                        "lat" : 45.6331281,
                        "lng" : -84.4874786
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eN Central State Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "{}auGpw{bOSKsIeLUQUYa@g@e@q@c@k@c@g@c@o@g@o@c@m@w@eAe@k@e@s@_@e@eAuAc@k@i@u@]e@}@kA}@kAe@o@QSKQmA_Bs@}@mAaBgEyFgCiDe@m@QSyAqBi@s@u@aAw@cAg@s@q@}@uBmCQQ]a@_@a@w@y@eCeCWU_@_@GIECMIOKq@g@a@Yk@a@_@W{@i@IEECYQYQq@a@OISKOGc@Us@[{Ai@q@W}Ag@cBi@}@WaAYcBc@a@Ko@QmAY]Ik@MICMEQEIEECMKEAQKCAEAG?IAE?OBK@K@A?A?CAEAKGMIGCy@Sa@MA?YGOEOEE@C?EEWIk@M]KkCo@cAYeAWgEeAm@OoA[g@MaEaAEAs@Sa@Ko@QME{@QYKQEmA[o@QGAy@QYIGCI@ACAAGA{@WUGg@Ky@UcFmAkFqAyA_@cCo@u@QcBa@sA[{Ac@cAUq@ScBa@kBe@kA[{A_@mAYcBc@mPcEsEiAcAWkCq@YGk@OsCu@YG}@Ui@Oy@QmAYo@QYIYIm@OgBc@CAeCo@kCs@a@KA?WGa@I_AWs@QA?kA[uBk@KCy@Q_@IMEwA]kAYi@Mu@S{A_@qBi@_AUu@QmA[i@MUGy@Uo@Mq@O}Cy@qBk@gCm@aAUcCo@qCq@{Bm@iAWaBa@_Dw@UGy@UkD{@gBe@kCo@uGaBgG{AwA_@_Ck@}Cw@mCq@wA]uA]mBg@e@KEAACEGAEACAM?I?G?[?_@?KAG?A"
                     },
                     "start_location" : {
                        "lat" : 45.5626955,
                        "lng" : -84.5248926
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "25.4 km",
                        "value" : 25411
                     },
                     "duration" : {
                        "text" : "1 hour 14 mins",
                        "value" : 4466
                     },
                     "end_location" : {
                        "lat" : 45.7709605,
                        "lng" : -84.7279669
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eN Central State Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "avouGvmtbOAIEMACACGGIGEAEACAE?EAgCIOCyAIS?M?A?mAF[@K?OAKCA?}Bg@AAMAMBUFGAYGkCo@mD{@iBa@eAWeAWkBc@kD{@sFsAmD}@_Ck@qA[kBa@}@Os@Kq@IqAKyHEgAAoCAg@?s@@u@FS@cANSD_@J}Af@}@b@wA|@WRcAz@cAfAaB`Ci@~@o@jAABs@nASZWd@]l@Yd@o@hAYd@Wd@aDtF{@xA{BxDuC~EeEfHq@hAuA~BMTqCbF_BvCMPKPkAzBaBvCq@hAeHbMyB|DaBtCyBzDgKzQcElHeHbM{EpI{B|DqC`FsC`FaBtCaBvCgAnBaBvCsC`FeHbM}HhNaBtCaBvCsBpD{DtGS^cBtCcBtCyAnCiAnBaBvCaBtCiApBaBtCaBvCsFxJeD~FiApBWd@o@jAWd@aBvCgApBe@v@{@|AsC`Fq@hA{ErI{BzDaBtCWd@Yb@qC`F{BzDoE~HkAlBi@~@iCnEaAfBk@dA_CbEo@hAaBvCWd@iAnBWd@aBtCYd@o@jAiApBuH|Mq@lAiAnBo@jAiApByB|DcElHo@jA}@~AeCjEcBtCiAnBq@hAiApBsC~E{DvHkChFo@lAMTc@pA}AzFsBvHaA|DaG`VoB`I_BrGs@tC}@jDq@hCcBpG?@Oj@Ol@o@hCo@hC_@xA_AzDoB`I_EhP_CnJ_BtG_BrGmBzHcA~DqAbFkBlHg@nB]zA_AxD_AvDkAzE}DbPg@jB_@zAIVg@nBqAdF]nAuBpGkAlD}@rC_@fAaBxEqBbGy@`C_BxEGP}B~Gy@`Cy@bCe@tAiAfDoAtDwCzImBxFEJw@bCkAlDkAnD}AzEYx@kBtFg@vAe@tAe@vAe@tAg@vAy@`CaCdHsEdNsBdG_BvEgBhFKZwAzEo@lCkDtNOv@yAxGy@zDiAhFiAhFiAjFOl@iAjFk@jCiAjFaAtEiBtIOp@y@xDkDzOmA`GuB|JwAtGgBfII^u@fDuBvJeBdIOp@sCtMaDdOUhAcBjH]zAa@hBuArEQj@Y`AIVkAlD}AzEiAnD_BzEw@bCsAbEqBfGkAlDiAnDy@bC}AzEkAlDqBfGoBdGSj@Qj@CDOd@e@vAQj@Sj@Sh@kAnDqBdGy@bC}AxEoB|F{@jCiAnDSj@Qj@kAnDQj@Qj@Qh@w@`CA?Qj@yAlEWv@?@Qh@kAnD?@qFtP_B~E?@iDjKc@tAsBnGQb@Sf@eApCsAlCgAlBA@QZyArBaAlAiAfA?@KJkAz@EBmAv@uC`BKHu@^_CpACBC@O@CAA?GA"
                     },
                     "start_location" : {
                        "lat" : 45.6331281,
                        "lng" : -84.4874786
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "56 m",
                        "value" : 56
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 66
                     },
                     "end_location" : {
                        "lat" : 45.77130589999999,
                        "lng" : -84.72823009999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eN Central State Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "osjvGxlcdOUKMCKBEFMh@AL"
                     },
                     "start_location" : {
                        "lat" : 45.7709605,
                        "lng" : -84.7279669
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 693
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 124
                     },
                     "end_location" : {
                        "lat" : 45.7768798,
                        "lng" : -84.7319839
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eN Central State Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "uujvGlncdOGDGDWRi@Z]RIB_Bz@{@d@wBhAmC|AQJo@Ze@TSHGDIJILGRERCDCDA@CDGHIBUNIFCDWNI@GBGBG@G@E?SFGDA@CBADMPQH_@Tc@X]NcAf@QBO?"
                     },
                     "start_location" : {
                        "lat" : 45.77130589999999,
                        "lng" : -84.72823009999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 327
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 45.7795207,
                        "lng" : -84.73048089999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eN Central State Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "oxkvGzeddOGACACCAC?AAIEQGGKEg@KoC]g@I]Qk@Y]UAAYW[a@CC]c@SQQGKAM@"
                     },
                     "start_location" : {
                        "lat" : 45.7768798,
                        "lng" : -84.7319839
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 377
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 58
                     },
                     "end_location" : {
                        "lat" : 45.7799321,
                        "lng" : -84.7257525
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMackinaw Crossings Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_ilvGn|cdOCkAQm@Oc@Mi@CKGYKi@Gk@Ac@Au@@wC@oB?K@aA@c@CwB@a@"
                     },
                     "start_location" : {
                        "lat" : 45.7795207,
                        "lng" : -84.73048089999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 167
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 61
                     },
                     "end_location" : {
                        "lat" : 45.7814165,
                        "lng" : -84.7254444
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eS Huron Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qklvG|~bdOUEi@Ic@Iq@KGAIAC?UEUAc@EMA_@C"
                     },
                     "start_location" : {
                        "lat" : 45.7799321,
                        "lng" : -84.7257525
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 161
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 45.78145139999999,
                        "lng" : -84.72338409999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN Huron Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{tlvG~|bdOBYAOCUCMDoA?sAAg@Cq@?[?S?_@"
                     },
                     "start_location" : {
                        "lat" : 45.7814165,
                        "lng" : -84.7254444
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "12.1 km",
                        "value" : 12132
                     },
                     "duration" : {
                        "text" : "31 mins",
                        "value" : 1879
                     },
                     "end_location" : {
                        "lat" : 45.8485681,
                        "lng" : -84.61518480000001
                     },
                     "html_instructions" : "Take the \u003cb\u003eMackinaw - Mackinac Island Ferry\u003c/b\u003e to Mackinac Island",
                     "maneuver" : "ferry",
                     "polyline" : {
                        "points" : "aulvGbpbdOR?FAFCBC?A@A?A@ODWDc@@]?]?u@?U?M@IBKBQHQ@A`AgBDI@IBI?K?KAKCGEEACCAGCI?}AOc@YuA{@sC_AiFsFq@s@_J{RmAmEkD}LeEmPgGuWiGuWyDmP_@{Am@kCo@kC{f@quBg`@umAgVwh@oVoc@wQsUkQiJad@iVsj@ci@y@y@cAaAm@y@u@eAaQiVsQ{c@iR}k@cHcRwFoMwA}BsAwA_Bg@sCKkDTiIvJSTcBhCu@dA"
                     },
                     "start_location" : {
                        "lat" : 45.78145139999999,
                        "lng" : -84.72338409999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13 m",
                        "value" : 13
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 45.8484683,
                        "lng" : -84.6152728
                     },
                     "html_instructions" : "Continue straight",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "qxyvGzkmcORP"
                     },
                     "start_location" : {
                        "lat" : 45.8485681,
                        "lng" : -84.61518480000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "10.0 km",
                        "value" : 10011
                     },
                     "duration" : {
                        "text" : "27 mins",
                        "value" : 1616
                     },
                     "end_location" : {
                        "lat" : 45.8683582,
                        "lng" : -84.7230502
                     },
                     "html_instructions" : "Take the \u003cb\u003eSt Ignace - Mackinac Ferry\u003c/b\u003e",
                     "maneuver" : "ferry",
                     "polyline" : {
                        "points" : "}wyvGllmcOhDgEHM`FsFdCiArBExBT`BxAdAtAbB|ErDvPtB~_@_@jYQp]StWkB`c@qJhp@kJz`@uTrp@_X~|@i@fBI^k@lC[|AqH~]k@lCk@lCWpAEHkNxZm@nAyA`Dk@nAEHuD`J}BlHcCxLeXn|As@`E_AnFg@pCiPj_AAD?D?B?D@P@ZBVBVHh@Hj@Jn@Ld@FNHTP^RZNRNLVLJBP@N?JCHG\\eA"
                     },
                     "start_location" : {
                        "lat" : 45.8484683,
                        "lng" : -84.6152728
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "76 m",
                        "value" : 76
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 45.86780100000001,
                        "lng" : -84.7236078
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eN State St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gt}vG`nbdOrA`BZL"
                     },
                     "start_location" : {
                        "lat" : 45.8683582,
                        "lng" : -84.7230502
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 947
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 196
                     },
                     "end_location" : {
                        "lat" : 45.8730124,
                        "lng" : -84.7305027
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN State St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by NAPA Auto Parts - Lynn Auto Parts Inc (on the left in 700&nbsp;m)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wp}vGpqbdOSfAo@fDSlAQdAMt@QrAK~@Ed@IfAEj@Ir@S~AOfAMx@GVI`@Qd@Wl@GJMZELQ`@KLOPWZm@n@i@j@SNQJYL[J]JKBKBQBK@c@@S?W?K?[A[ASA_@Ga@MUIKEMESISKaAc@"
                     },
                     "start_location" : {
                        "lat" : 45.86780100000001,
                        "lng" : -84.7236078
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 215
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 65
                     },
                     "end_location" : {
                        "lat" : 45.8742436,
                        "lng" : -84.7316455
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iq~vGr|cdOg@zFu@K_@EA?YE{A@"
                     },
                     "start_location" : {
                        "lat" : 45.8730124,
                        "lng" : -84.7305027
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 165
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 41
                     },
                     "end_location" : {
                        "lat" : 45.874057,
                        "lng" : -84.7337639
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eReagon St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_y~vGxcddOPjEPxE"
                     },
                     "start_location" : {
                        "lat" : 45.8742436,
                        "lng" : -84.7316455
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "29 m",
                        "value" : 29
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 45.8738475,
                        "lng" : -84.7339885
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eReagon St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{w~vG~pddO\\^JL"
                     },
                     "start_location" : {
                        "lat" : 45.874057,
                        "lng" : -84.7337639
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.6 km",
                        "value" : 3613
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 608
                     },
                     "end_location" : {
                        "lat" : 45.8928919,
                        "lng" : -84.7707327
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSt Ignace to Trout Lake\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qv~vGlrddOm@v@U`@Yd@_@t@QN{@x@[V{BbBoArAc@p@Yb@S\\uApD]|AIb@AJMn@EXCLAFKj@AHG^Y~AG\\yAnHs@pDWnAcApF_AzEQ~@Qv@w@|DId@q@bCg@fB_@jAeExM{@pCmBjGGPwFzQoA`EkEbNq@pB{@vB[n@cAtBu@fAgA~A{@lA_DpEc@n@{B~CiA~A_@h@_CfDy@jAeClDcB`CEFiEpGGFsA`BoB`C"
                     },
                     "start_location" : {
                        "lat" : 45.8738475,
                        "lng" : -84.7339885
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.9 km",
                        "value" : 4942
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 974
                     },
                     "end_location" : {
                        "lat" : 45.892205,
                        "lng" : -84.8325797
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCheeseman Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qmbwG`xkdOErUG`\\AtHE~SA|D?Z@T@XBN@VDPHXHVHV@BLVpA|Bz@|ArAtCL^Lb@Jf@H\\D`@@BBVDn@Dt@@Z?R@n@?x@Al@Ab@G`AKxAIj@Ip@In@Ip@UbBIn@i@dEIp@ADUzAaAdHWfBCZG`A]~G[bGUjEW~GKES|OCXWrFG|@KdBADOrCEp@UxDEdAQlDKpG?LAtH?zC?R@h`@?vG@`G?lABdAFdALb@Ll@Rj@b@xAJZ\\~@pD|KHpAJlA?TAzCChE@rP"
                     },
                     "start_location" : {
                        "lat" : 45.8928919,
                        "lng" : -84.7707327
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "215 km",
                        "value" : 214687
                     },
                     "duration" : {
                        "text" : "10 hours 23 mins",
                        "value" : 37371
                     },
                     "end_location" : {
                        "lat" : 45.7457605,
                        "lng" : -87.07972040000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-2 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by KFC (on the left in 212&nbsp;km)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gibwGrzwdOa@?]Aa@@_@@W@A?{@DU@OBU@_@FWB]Fs@Nc@HWFo@PQFYHi@PWJk@T]Pg@V]Rg@Xc@XYRYR]VYTQN_@\\YV_@^[^ONQRWXa@h@QTc@n@W^OVKPQX_@p@Yj@_@v@]t@[v@]x@Up@Up@ADSn@Uv@Mh@Qr@Ol@Mn@Ml@Kh@CPGXE\\Mv@E\\gBjNu@bGYrBQhAWbBYdBE\\Kf@Kp@Ov@]nB]fBc@rBk@jCcAnE_ArD}@rDmAbFgBdHy@hDo@bCk@xBm@tBg@dBk@nBa@lA[bAc@pAe@rAs@rBw@rBs@dBUj@o@|A}@xBa@|@gA|BcAtBy@dBgAxBs@xAcApBiA`COXc@x@c@x@a@p@]j@gAhBORW^{@lAy@dAq@x@{@bAa@d@w@v@YZiAfA_BrA_@Zk@b@[Tg@\\q@b@g@\\k@\\OH]RSLULgAh@oAl@_A^eA`@}Al@iAb@aBn@_Bn@cA`@]Nk@Xm@X]PYRm@\\YR_@V[Rm@b@i@`@_@Zq@l@q@n@u@v@k@n@a@d@e@l@k@t@_@f@e@t@i@x@Yd@QX_@p@S`@S^QZUh@Yl@Uf@MZQ`@O^O`@Qf@Yt@Up@Yx@Ux@Qj@K^Kb@Qt@K^I^Mj@On@Ib@Kf@GZIf@Mv@Ij@Kn@MbAOnAIr@It@Gx@Gr@Eb@Cj@IpAC`@Cj@ATCl@G~ACbAAhAAnB@nDDfFB|AHnI@lABrBHhFBnD@h@B|B?rA?dB?n@?dAAn@AbAChBC|@ElAEbA[rFAL[|DOpBMbAKz@OnAObAMx@CHKp@Mr@Kt@UjACHKj@Qz@_@jBa@pB]~ACNg@|B]bB[tAU|@I^M`@K^Oj@Qj@Ob@Qf@MZSd@]x@]r@_@x@a@v@S^w@tAg@x@e@r@U\\a@d@e@h@e@h@u@t@m@j@c@\\URYRQN[RQJ}D`CsChB}EzCsDfCe@XcM`JmAz@wGzEmKvHmBtAaAp@g@^y@j@kA|@s@f@wB|AiAt@cBlAq@b@sBrAwBlAaH|DcAj@mBdA}C`Bs@^i@\\cAl@aAn@g@Zm@b@o@d@c@ZuAfAgA~@cBxAuCnCgDbDaC|BKJ_Ax@aB`By@z@}@bA_AbA}@hAg@l@i@l@]f@m@v@GHq@`AuErGuBtCwEzGORqHlKkEhGaGpIwC`EMR_B|Bw@fAy@hAiDzEaDpEs@bAe@r@e@n@w@fAg@p@aChD{BdDSXSVq@`Aq@~@Y^UZ[b@e@n@GH_AjAUVY\\IJe@f@e@f@A@QRk@j@c@d@[Zq@l@]\\CB]X_@\\YTKJs@l@y@n@e@\\eAv@gAt@eAt@i@^QLGDc@\\q@f@WRw@l@}@v@q@j@c@b@WTm@j@o@n@YXWX]^c@d@a@d@iAvAa@f@w@bAm@x@c@l@MR]f@u@fAm@bAW`@c@r@g@z@[j@GJs@tAo@lAIRa@x@e@`A[r@Yr@aGrNgBdEeD~H_AxBa@bAMXUj@Wl@Yr@MX[v@m@vAu@dBi@jAe@`A[n@c@z@[l@EHQZOZ_@n@[l@wA~BcAfBsBlDmAtBgB|CyAdCeAjBm@fAoAxB[h@m@`A}ApCq@fAs@fAsAtBGHW`@a@l@a@j@c@n@m@v@m@x@s@|@gAtAOPSVcBrB{@bAeAnAcBnBm@t@{AnBq@`AY`@ADY`@o@`Am@|@yBfD}@tAU^KPc@l@i@v@[b@UZ_@`@o@n@k@j@{@x@q@n@]\\Y\\i@r@o@x@c@p@a@r@GJSd@]n@o@tAu@~Aq@xAe@hAiAfCaAzBc@hAO\\c@dAw@hBoAxC{@lBUj@_CxFqCtG{BjF]t@MZq@~Ay@hBEHcA~Bc@bAUh@CFUh@?@mArCm@xACHQ^c@dA{@~Bk@~AUl@Wr@c@rA_@dA[dA]hAW`AI\\CHe@fB[nAq@xCEVCHUfAYrAEVQx@G\\Kf@Mn@Kn@AFWrAYdB?D{@pFIl@S~AE^MtAK`AKx@QhBMzAKvAK`BMvBGbAG|@GfAU|FEj@QvDO`CCZQfCO`BMzAQ`BQxAMfAM|@}AfKq@zDu@|DMn@oB`Ku@~Di@nCk@~CI^sAfHu@~DMn@Kn@Kf@Ov@u@~DUpAKn@iAbH?@Ij@Kn@WxBWrB]|CK`AE`@u@zGANIp@kA|KWvBUrB?BGl@Q`BKx@Gt@Gv@KfAGv@InAIxAI~AEfAEnAG`CItDEtCA\\Ap@?@Cz@C~@A\\EhAEhAIfAGx@?LIdAKjAMrAIz@MjAOlAUhB[zBSnAUpA[bBc@nBc@pBaEbPsB`IyAzFYjAOh@IXg@jBYhAWjAMn@I\\Mr@Mn@ShAm@rDSrAOfAWjBQbBO`BQnBKzAGpAEdA]dJCfACt@GjAIdBG~@IpAI`AGn@S~Ci@rDCJYxBa@jCYlBUjASbAWlAU|@s@tC_@xA_@pAY`AY|@k@zASj@iAnCuBjF}@vBcAfCcDdIO`@CF]x@[|@Wr@Sj@CJu@zBaFjOkCrIi@`BGRiBtFkDzKcBhF[bASj@]~@Un@a@dAM\\]x@Yn@[r@Wh@k@lAy@`BKT_@t@GLiAdCyAhCABi@`A[l@eArBy@`BwB~D_@r@e@~@Q^S`@k@tAeBbDmAvBuBdEkBzDcAlBaBlD}BfGsA`EuA~E[lAuAvG}@fEoBvOg@zHi@nL]xFQnD]`FiArOeA`JoBdMc@tBWjA]dBmBlISr@s@hCEJ]hAe@xAe@zA_@fA_@fAELGLSh@M\\a@dA_@|@Uj@m@tAcAzBgC`GsArCw@`Bk@lAy@hBUf@wA|CwBxEQ\\Uf@a@~@_@x@MXKXUr@Yx@k@fBOh@IVSp@Of@Op@WdAYrAUhAKl@G\\Kh@EV_@zCa@hCqA~Jc@~CUbBIn@Ip@Kn@mBnN{@jGo@`FU`Bk@jE{@bHCLUdBa@lC_@rBc@dCERUnA_@dBg@|B]rAe@lBSz@K^]vA[lAWx@g@hBEJ[hAW`A[nAAHS~@SdACH?DWxAGXWxAOdAAFKp@SvASvAMfACRKdAI`AOnBShCMzBG`AEz@ABG~A?DAj@C|@Al@Af@?NAh@A|A?R?^?p@@~@@vC?J@j@@p@?D?BBfABp@Bz@D|@DlAHpA@b@Fz@ZvFFp@FbAb@bHJ`BJfBHpAHtAbAnPJ|A^zFJlBLzBTpDJhBPjCJ`BL|B^pFJlBTzCl@xJdA|PP~C`@lGp@bL`@lGJdBp@fLp@rKv@dMJ`BTbEb@|Gd@|HD~@Dz@DxADdBJhE@xA?xA?jA?p@ApAAjAAjAAhACnAA\\Ct@EjAC~@Cv@Ex@IhAEr@QlCEx@Gl@El@Gp@Eb@CXKt@Ed@AFIp@It@ObAGj@Ij@O`AO`Ag@|Cc@dCUfAg@~BmA~Ec@~AGRoAbE]dAIXITK^MZmAdDaC|GoBzFkBrFmAlD{AhESd@[`AOb@Yx@Sl@q@jB]bAYv@Y~@Ux@CJm@vBSr@Qv@Qr@Kf@WfASbAUlAQ~@Kr@Mp@OhAgAdIg@nD}@zGgArIkBdNQhASfAMt@Ml@QbASz@ETe@rBQr@W`AUv@c@xA[dAWt@Y|@Up@Qf@a@fAQ`@Ul@a@dACH}BlFgCjGwHnRc@bAoB|EqBfFu@dBSj@y@rBgAhCg@rA[z@Od@M\\[z@Wv@M`@Qf@Wx@g@~AOd@Od@o@|BeAtDGPIZoPhl@eFnQg@nBsAxEu@lC}Jx]}@jD_@vAYnAS|@Qz@a@xBERMv@Ox@Mx@Kp@OlAOrAOhAIz@O|AMpAInAObCMbCEz@Ez@E`BCzAClDAlC@nDArF?vADfg@@rJ?jJ?r@@hM?bC?r@?xA?`D@vL?`EBbL?bBBlU?@@zX?vE@vS?dC?bAA`BAl@?rBGhFIpDCl@Av@EbACr@ElAEnA?LQ~CE`AE`AIjAEl@WvDShCANWzCGt@MfAUdCg@dEIp@CRCPKv@Kt@Eb@G\\QlAU~AKl@Kl@Ij@Mn@]nBe@jCW`BWhASdAaDtPETo@hDg@dCUnAgAxFWvAQv@iBxJsA~GsAjHa@rB_@nBq@hDaBzI{EbWoDdRi@jCkBnKo@nDShAQjAG`@Gf@QzBM|AIrAGtAItBA|AAv@?v@@~@@dA@`A@\\@^B`@@d@BX@`@BXB\\BV@RBZHt@PfBDVBRBPD`@DVDXHd@Hf@Jn@FVFZJf@FTDTJ`@Nf@Tx@d@~ATl@Xx@f@lAd@hAf@fA\\n@\\l@b@t@BDd@r@\\f@TZVZNPPTZ^`@f@Z\\^`@TZb@d@rAbBn@x@b@l@b@j@f@t@l@~@`@l@\\j@R`@Vd@\\n@f@`Ar@xAVh@Tj@Pb@N\\Rf@Tl@Vl@`@fATp@JXbAdDX`ATz@T|@TbADNRz@`@pBNx@VpAJn@Hf@Hf@F^XlBL|@J~@Jv@l@nGD^Dh@N`CDbADl@@XHvBFfCDnABtALtDFtBBn@HlD^fNFtCb@|PRfILlFBxADdC@z@?n@?j@Aj@AvAEz@Ad@Ad@Cb@C^ARC^Ep@G|@KbAGn@Gb@CXEZKp@In@I`@ADG^Ib@Kd@Mj@Qz@Ol@Md@I\\K\\ITM`@M^MZkAhDs@jByA~DcCxGcApCk@`BOb@KZIVMb@M^Mf@Md@On@Op@WlAUdAEVId@Kt@Kn@OjAe@xDs@xFg@fEu@`GUrBi@`FSbBQdB_@dEGx@Ej@Gl@Ez@KxAS`DG`AGfAE`AEdAEpAM~DEhBC~@Az@EhBCtBAxAA`B?fBAbCIfj@Kxl@C|NCrUCnREd\\EjTAtMCrQAr@?xCClM?D?~KC|XE`L?d@ClNGhd@E`_@EdQC~GAjP?xJ?xE?lCAhGAtH?b@ArGMb|@AnP?dBCvQCzPCzMEnb@?fK?`G?zC?r@?r@AnE?`\\Afn@@jZ?~D?rBC|L?tK?hO?dN?dB?pI?bO?pJ?|B?p@@hK?rY?l_@?|E?f\\?nE?fM?`I?fB?lC?L?p@?r@?zC?fB?zC?r@?r@?nEAdB?zC?r@?fB?`G?r@?bB?|B?zC@vI?`F@bT?r@?vO?tA@lL?nM@zA?nE?lE?bG?l@?xG?dC@tM?p@?zE@vC?xAAzM?pC@fL@`T?jJ@`T@pZ@pM?xT@tJ@vJ?rN@~a@?hC@|a@@bO?fO?fA?bC@rM?xG?^?R@bF?zD?zK@|C?TChJ?r@@vH@bG?tH@`D?jC@bI@~K?fB?pJ?tC?bG?r@?r@?nE?`G?dJ?dO?D?l@?nE?tD?bG?~SCdMAtHEpR?rAMnf@Irb@EpOClRGtRGr[?r@Or|@In_@Ef^?XBpMNbv@PjbA@xHH|^Hx]VjmAFdVBnRH`c@Ht[@zEBbTFlk@?hW@d\\?rE@zC?nA@tJ?xP@|J@rA?H@fA@fABz@DbABx@Dp@Dt@Dn@BV@PDb@TxBHt@NdALbA@DJn@TpARbAJh@FVVdAFZd@dBb@zAn@lBh@rA\\|@f@hA\\t@?@r@rAf@z@DHVb@HJt@jAh@v@X^RTt@~@JJZ\\NPv@z@XVZX^\\h@^HF`@Zb@X`@Xf@ZdGrDnChBjElCjGxD^TdKlG`F~CpAv@nBnA^T`CzA^TvFlDj@\\`@R^Tl@Xp@Zn@XlAf@p@X\\LJDb@LVJh@N`Cj@`B\\VDZFlAP|@J`AJdAHF?Z@fAFlA@pE@b@@zB@~B?xC@tGBpGB`SDtDB|VH|EHd@@\\@l@DfCXlAP^FlATz@P^HrA\\b@Lb@LpBp@rAf@f@Th@VdB`An@\\|Az@~AjA|B~A|AhArA`A`CfBxAdA^V?@|AhAhAx@vEhDxAbALJfBpArDjC~C~BNH\\XzDrC|@l@b@Z\\X~@p@xK`I~AhAtBxAjBnApFrDh@\\~\\dU^V~B|A`PpK~FzD~JzG|IbGnAx@~@l@^VpNnJtNrJpb@fYjRfM^VhLxHtA~@~EbDbBhAjCfB|B~AxFtDv@f@~EbDBBjD~Bx@h@zAbAx@h@hAt@HF~IbG`EjCnDbC~@n@|EhDlA~@x@p@~@|@|AdBz@fAFFl@z@@@f@t@HNd@v@v@vAd@|@fA~B\\z@Pb@Zx@Xz@\\dA\\lAPr@VbAb@hBd@zBBNPhATdBTpBJbAFr@J~AJ|ALdBXnEd@pHvApUNjCVdEhAbRt@vLDdANxCBf@LfDJhCBfA@^HpCDhB@vABlB?Z?xC?hB?~CAdJ?p@ExVE|Q?zEIrg@CxPGfd@C|K?r@Kjt@ArEAzCEnZEv`@?dCAbD?xA@`A@j@?j@JdEFdBFlABx@N`CHzALvALzANzAR~AT~Ab@vCbA|GxArJr@vEJn@Lx@v@jFJp@j@nDBPt@~ENpAPrAJ`AN`BNlBJ|ARtCFhAFpAHfCDdD?D@lC@nC?xI?bK?`G?dH?zC?pM@tKBrD@lABrABdADpANvDZpDNdB\\~C@LXrBNbALz@h@pCLl@Pz@XlATbAd@dBn@xBd@vAz@bCVj@HRXr@Th@Th@LVn@pAnA`Cd@z@~@zAd@r@HJ^f@Zb@f@n@b@f@x@`Aj@n@`CfCfAlAnH`IpOzP\\\\^b@zHhI`DnDhClCz@fANPb@l@RVFHb@n@zAdCjCtFd@hAh@zAj@fBV|@V`Az@rDNl@FZH`@H`@RnAHn@RzATvBHr@LlAFfAHrADdAH|BBlA?b@@n@@xC?n@AhD?T?fBAlD?`A?jG?zB?z@AvD?`XAr@Aj`@?x@?vA?z@@lFArSAfI?xG@`KBdK?`@?n@AvBEl]?lE?vD?n@@dC@xA?n@D|@Bx@HzADt@BZ@TFj@Ff@R|A^~BJj@RbADNLj@FZ@DFXNj@Nl@X|@d@|Av@dCdAbDjAnDp@rBnAjDz@~BfE`MtDhL@B`AzCNf@XdAPr@Nl@XrARdAFZF\\F\\Fh@Jp@Hr@J|@Fp@Fz@JhA\\pEXdDFn@Fh@Hr@H`@F\\DPDVLn@Jb@Nf@L`@?BXx@`BxELZRh@@BHTP^NXLTHPNVZb@PTVXh@j@NNJJHFLHNJnGhEvFfE`CnB|AlAbAr@`At@VNPL^R~@j@lFtCtBtApDtCzCfChBzA|@r@h@d@dCtBdAz@VT`@`@f@h@JLNPPXNVZh@HPFJN`@Tn@Tr@Lj@VbALbABNBPBR@RFx@?B@\\@P@`@@`@?L?HAp@At@Ev@Eh@CNARMx@M~@I`@Ib@Ob@M\\CHGRQ^_@x@c@|@eArBU`@i@bAeBtCe@p@gApA}@dAcBfByB~BoArAu@v@sB|BY`@y@xAQ\\Wl@a@hASj@Oh@U~@Mh@Ml@O~@CTE\\CZC^?BC\\Cb@C^AR?NCf@?r@AB?z@?Z@f@@Z?J@J?VBd@B`@JhAFj@Fd@@JLp@Hh@FVFXHZH\\L^Lb@?@^fAbBvE\\`Av@rB\\bAjAfDfBfF`AnC|AnEbAlCz@bC`BxE?@Pf@f@vAZz@L`@Pl@Vz@@BTx@VfAPp@FVThAb@fCF\\Jp@f@jDrDjXHp@`AfH|@tGRpAP`A@DJh@F`@R|@f@vBXdALf@J\\n@vBt@rBVr@DHTh@@Bb@dAn@nAlAvBv@nAl@|@n@z@\\b@DDb@f@xA~AjAfA@@^X^Z`Ar@`BhA`Bx@PJTHx@^|Af@rDjA^Ld@LdAZ~M`EpBx@^NpAn@v@b@hAt@r@h@zDdDdFvExArA`@\\xAxAzA|Al@p@bB|Bf@t@l@dAXf@r@pAh@hA\\t@d@jAd@pAv@~Bv@nCRt@Jf@BHVjAVlAjAfGFZnA|FLn@n@vC~@rDn@fCl@rBx@nCxBtHf@bBvA~ExA`FlAzDp@tBjAjDrAnDTh@Nb@d@lAn@|Ah@jA|@pBzBvE|AzCfArBr@pAh@~@`BlCjC`Ep@~@hBjC~BbDtI|JrNnPHJv@`AjEpFzBbDrDtFT^bA`Bz@rANRlApBhAhBfBnCp@hAV`@r@~A\\z@`@fAr@zBNh@T|@Lf@\\bBLp@RlAJt@XrBHfAFr@HtAF`A@\\Bp@@t@@r@@`@?bA?J?xA?LC|G?HCnE?r@AxCC|I?`E?dR?|K@~Q@pM?hJ?lE?r@?jR?fB?tOBf_@?hE?tFAhE?fAAt@AdBMdFI|BGjBEfAQ~DWhFwAdZkCpj@Ad@u@pO}Ava@Cp@Cr@MxCWnHk@rPe@xM{Afc@IdCS|Fe@vMSxFCr@[fJg@`OATA\\g@~Nk@tPWrHCr@g@`OSvFOjECr@g@`OCr@Cp@[bJSbGKvC_@|KE|@IpBIzAQdCGbAShCALWtC_ArKEd@m@zHEh@a@bFQ~DEhACbAGpCChD?xA?rA@lBB`B?@BbB`@x^TxRHtHL|K@fBRrQFhD@`@DvA?PBr@Bl@DnAF~@FbADn@?NDb@@RD\\BXLpATbCR|ALx@VdBPdAZzANx@d@zB^~A@DJ\\Pl@FVr@~Bb@tATr@Xx@Vp@Vn@f@hAb@dAd@`AHPd@~@NTZl@x@xAlAnBbA|Ah@v@FFXb@xDpFxB`DvDvFhA|AdBdChBjChEfGd@p@hBhCRXhCxDDFfAdBp@dAv@tAb@v@\\r@`@x@Zt@f@dAXp@dBjEr@rBHTRn@`@rAHVz@`Dh@dCp@|CDRFXv@xDPr@XvA|@bEhBrIn@zCx@rDr@jDzCrN`DfOX|AP`AJn@DTF`@Fb@Fb@Hl@f@dEPtAJ`AFh@NvBLfBFpAHpBF|ABp@BxA@^?Z@~AB~BAvCA|ISnn@CxDGnDAz@Ev@IbAIx@Ef@WhBObAMr@Kl@Ol@G\\GRCNQl@GVIXSl@Y|@M\\[x@_@z@i@jAk@lAg@dAsEnJmJxRaBlD_ArBo@|Ao@zAgBvE_CdHUr@s@`CyAlFoAdFsAbGg@dC]hBi@dD_@`CQlAYtB_@zCSlBSlBa@~Dw@|ImGxt@iArMUtCAJEf@Gx@IrAIbBEnAChAC|A?zA@~A?h@@fADtABfABn@FnAX|DHx@Fv@Jx@LbAJt@BJLx@p@dEb@bCdBlK`@`C|BbNj@jDV~A^~Bb@fC@FvArIJl@|BdNj@jDhAbHJn@bAfGj@jDb@hCvAnIdAnGr@fEfAtGvAtItAjIBJhBnK|@fFhDjRzDnTvAlHhFbYrG~]v@dEZbBV|ANdAT|AJbALjAJjADj@Bb@Dp@@D@f@Br@Bd@@f@@pA@|A@tAAxBG~BElAAZGlAUhD}@~Na@hHyBx^iI~tAsJv`BwDnn@a@dHc@vHSnDOfCGjASpDIjBAn@GxAM~DIlCCvAInE?TOdKI~ECzCGdGChBE`GA~DA`DCbG?|H?r@?zI@rR@xU?dB?r@?bG@hW?r@?lM?@@|K?r@@tI?fA?r@?zL@nD?r@?nE?jECjCEnCIrEGzBM|EC~@a@zHQnC?BEl@Gp@Ev@YnD_@rEaAzICJi@dE}@dHoDrWIp@oA~Ie@~DOzAO|AI~@CTU|COfCCd@GhAG|AK~B?JCr@?LCxAC|BCvG?z@@tGJzEJnEHxBNxCR`DTzCBd@XxCf@nE`@dDx@vGThBZ`Cn@|FPpBFdAH~AF~ABz@B|@@rA?rA@~KA|A?bK?~AAbO?`G?r@ApM?r@?xCAfB?hJCp^Cdd@Exg@AfK?vKAdVClR?vC?nP?jLCfcA?lM?pK?lE?pWAxm@?nPAdL?bG?vD@zK?`MA|G?n_@ArUBhl@@nZ?|K@jO@jR@vG@|K@zP?lD?~I@~B?`E?bCApA?r@C|@A`@Aj@E`AEdAG~@ANANG`AIbAGv@Ir@MfASrASlAMx@WtAG\\GXENGXi@tBEPQl@EPSt@Ut@[~@q@fBa@dA_ArBy@`B_@n@Wd@U`@ABkAbBuAhB}BbCa@`@s@p@cAv@cAt@gAp@gAl@IDIBIDa@RsBp@]NsA`@eAXoD~@ODaCp@u@TaDv@gCp@mBj@QDSFeCn@sA`@_ARqA^gCr@iEfAqL`D_MfDIBIBIBMDGBIBKDKB_A^mBt@kAh@}@d@KFeAh@eClAw@j@QLCBGBOJMJQLQN]VQPC@QPOPWVSTONQVONOTW`@Y`@Wd@Wb@Ud@Q\\MZQ^Yr@GRK^EJGRM^M`@Oj@I^IXETG\\I`@Mp@SrA[xBiBtMu@vFk@nEa@rCe@hDIl@WzBUnBSlBKpAIfAI~@IfAARM`CGtBEzAEpA?FCpACtA?^A|CAn@?rE?dIAxJ?tB?RAzCArC?dD?jDA`EAjFAvG@jHCxBApE?tD@~A?d@KdBEzG?f@C|CLf@@nA?`@DpBH|CLxCJfCPdDPbEGr@HzAZrHf@tILvAJdARnAnAdGt@dCl@hB|@vBhAdCpApBx@jA|BjChAjA~BbBvAv@f@XpCfAfBf@vB`@pCRdG@xHKvE?nLCh`@IfJCb@AjBA|EC\\BfAFH?vBVn@Nl@N`Cx@jB|@bAj@f@\\bAx@ZVHFXXzIfJvKfLhDjDjGtG\\^hClCbJnJ~BdCtAvAhBnBbCfCrHxHZX@B\\ZbBbBlAhAJHp@j@nAbAbG|E\\XtFpE`GzEhLfJzC`C|AnApI`H^XxAlA|ApAtGtFbIhGNLpJ~HpB~A\\XBBZTBBdMzJh@b@ZVzBhBl@h@h@b@n@d@TNh@Zx@f@|@`@n@RbATt@NbAJF@\\BD?j@@~@CL?TAn@Ev@Kv@O|@SVKb@OnAg@|Ay@`Ag@`Ag@bCoAxBiAvC_BdCiA`@Q^Q~@a@t@UlA[^I\\Ej@CdAAlA@lCJtBAn@?z@Df@Jf@L`@NTLx@f@t@j@p@n@`@j@`@n@^x@\\`Al@dBd@xAZx@\\v@Rb@NVz@rAv@`AxBjB\\Z\\X^Zz@t@zApApC`C|@r@b@\\v@p@|@t@^X\\Xv@n@|ArApBhBhAdAfAfAxAbBdEpEn@n@x@x@|@v@tBjBlFnErGpF|DdDnFtEjCvBtEzDNLzApAv@l@~@p@pAv@|@^bA`@pAf@tCdAtCbAv@\\HD`@Rd@Xd@Zf@`@\\XVTRT\\`@JNf@n@r@jArB`DHLdH~KZh@jAjBzAfCpBzC`@l@p@|@l@t@h@l@l@l@b@`@FFp@h@b@\\f@Zp@^t@^NFD@DBF?F@`@@fTzIdAh@p@ZJDfLjFdLfFbGvBfC|@nBv@vCvA`@RPHtFzCbDzBzBzA|AhA^VRPnCxBp@n@\\ZtGdGhBbBnEnE|AtBd@v@HLv@zAv@dBr@tB`@nAh@`Bv@hCdB`GfBvFnBhGPj@DN^hAXn@Zr@fAtB`@l@?R@H^j@HJ\\b@n@t@`A`Az@v@`Az@t@r@z@v@@@~@v@XTb@ZZTr@b@n@\\\\PPF^Pd@Pt@V`A\\HB`@N^LdA`@FB`@Lz@Z`DfAbFlBrCz@`IjBlDp@xB`@`E\\b@Dt@DbCNvBBtDBzB@vB?zC?vH@vFAdBAt@AxBUh@Gt@K|@StBg@d@_@VIVMfA[vAy@tAq@x@a@`Ai@jCuA`B{@hAm@`Ag@bFkC~Aw@xBkAnAm@bAe@`DgBz@a@r@_@n@]t@[FCBAj@QVGTG@ARCXIl@Ib@EZA^?FAZ?V@pBB|F?P?~@?lD?tB@rJC`M@dC?V?x@?l@Br@HVFJBNDZL@@JDPH^PFDLHj@^hAfARZPT^f@RTVTX\\HHZZB@bAt@FBHDNFDDF@LFLBNFB?HBTBNBF@H@L@@?H@L@H@H?N@P?R@h@A\\?P?V?P?|AAT?tBC`@@T?fA@f@AN?V?V?fB@"
                     },
                     "start_location" : {
                        "lat" : 45.892205,
                        "lng" : -84.8325797
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "35.3 km",
                        "value" : 35309
                     },
                     "duration" : {
                        "text" : "1 hour 45 mins",
                        "value" : 6280
                     },
                     "end_location" : {
                        "lat" : 45.6919404,
                        "lng" : -87.5205514
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-2 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-41 S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLudington St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow US-2 W/\u003cwbr/\u003eUS-41 S\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_vevGfwnrO@vC@xC?rEBhO@`A?lKEhM?rC?pF?jH@bFAjH?tB@lI?pK?`@?jA?pB?jDCrV?zX?|D?xG?dS?|C?r@?tH?r@?`C?hV@p@?tHAtC@hM@h@FtF?JBp@BlALfEFrAJfCFjAHrAHbAT`DVjDLvA^jDXtC?DFj@j@xF|@|I`@dE?@fAnKN|AD`@PbBlAdKn@tF|AnOlA~L`@`Ef@|EFp@h@tFh@vHfEn_@~AbPh@xFHp@|@|I\\lDXjCb@pENxAl@lGLdAFh@RrBf@hFXlCTtBFp@DXjAzL^rD`A`KRrBv@lINbBFp@XtCFp@JdAlAbN\\jDR~BFp@nAnNxAvNFp@nA`M`AlKLjAd@`FHp@Db@XrCJ`ARhBRlBThCT|BXvCz@fI`@fEFd@PfBvAxNHr@Fp@Hp@Fp@t@jH|@dJjArLz@rId@pEDf@Hp@XtC^|DZhCb@rE`@fEFp@|AlP\\|CfA|K~CzZzA`NbBbNdBdPf@zElClXd@xE|CpZ`Gzl@Hp@r@jHNpANzAfArLFp@PxAdAnKD^nAfLz@hGl@vDr@`DdExPhCdKpC|K|AlGrDxNbIv[pCzKbKna@`@zAxCvLpAdFvAtFZnArAjFt@vCjAzCTh@pDpEHNp@dAdAbCRl@h@zBfAdERv@\\nAjAxExAhG`BlGr@jDFXh@jDV`CNrBBTPxEF|E@p@@r@ZbW@p@JbHNxMJjHLfJG^NvK@r@BfADZLnJDfCRnMJpIDlCJdJ@lBJxIE\\AH?`@HbDNtHHxEFd@ZlT@p@TtPRvOZnU@p@FlENrK@jCHtB?h@?F@tC?Z?p@?RCpA?@Ep@?HIzAATG~@OhB_@rEiAvNq@xI_CvYGp@[zDUlCKrAM~AKhBEzAAr@KrHE|ECvCUh^KvPE~H[bl@CzEAr@ElJEbGGrHGrHApDAp@?r@AxC?@@xE?xABxC@nEH~FHtGBzCLbLJhJJxKF`GRhRJtKFzEDjEThRR|RJfJDlEDjENnMDhEF`GBjBDfE@r@HnHD|C?n@@PBpC?l@@x@AbBAj@?h@AhACnAAh@APAh@GxAk@nMKfCC`@KtBCt@Ad@Cv@Av@?B@r@?J?t@@^Bj@Dr@Bh@Dl@LfANfARjAh@zCVpAj@`D|@rEVzAbApFhAjG`AnF~AnIpA|G|AlIdC|Mr@~Dr@rDfAzFbA|FdAvFdAzFhBtJd@`CpBvKDVx@vEXzAp@nEb@|C^pCZrCXbCf@lF^zDLtBPrCRvCNlBPjDVrDHrAXzDFr@Dv@Dl@Dj@\\tGJhAPbCFdALxBBXPfCNhCH~AVhDVbEXvE\\`FLjAZlCJn@Hh@Hl@Jh@f@dC^~AvA|F"
                     },
                     "start_location" : {
                        "lat" : 45.7457605,
                        "lng" : -87.07972040000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "20.6 km",
                        "value" : 20636
                     },
                     "duration" : {
                        "text" : "1 hour 0 mins",
                        "value" : 3605
                     },
                     "end_location" : {
                        "lat" : 45.7659429,
                        "lng" : -87.743262
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-2 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "se{uGlzduOiCxAiAp@m@`@i@\\c@TeCrA_DpBuCfBqC`BaFzCuDzBaDjBeFzC_HhEmC|Be@f@YZk@n@q@|@mAlBc@v@EFWd@KNSb@KTMXSh@Wl@i@tA}DpMc@vA}BvH_BpFe@`B_A`Dc@zAi@vB}@bEc@fCI\\]zBq@`Fc@~D]dEWvFIfCE~BAp@CdAAhH?`I@dV?L?`H@fZ@dSEbIBbo@?~GC~CChCIbDGdBGpAWtC}@nIYlCeBtNmAjK{Fxf@Ip@mAjKOjAiAnJ]tCK`AGZU`BQhAWrAc@xB[fBw@bDOn@[jAeA~C_AxCy@vBUl@Uj@o@zAc@|@iA|BeBxCkAnBeAxAeA`Bw@bAoA~A}EjGuDtE}EfGw@`AiIjKiBfCs@~@{@lAm@bAILw@xA_AdBq@|Au@jBi@xAa@pA]hAo@|Ba@lBOl@?@Y~AKl@CTGZIl@Q`AMjAK`AKpAKlAUtD}@lOi@rI_@pGM`CQvCu@vMQhC}@jOCb@m@bKO`Cw@jNWpEYjEQbCEp@ADYlD[dCe@jDg@`Dm@hDq@|C{@jDw@lCaAxCgBbFoE~KeAlCkAvCk@vAyAhDqA|Cc@|@GNWd@Wh@e@`A]p@IP{@|AiAfBu@`A}@pAw@fAGH_AhA}A`BwBvBCB]ZgCbCcBdBw@p@yBxB]^g@h@{@|@OP[^}BhCo@v@k@v@eDrEkBlCwCfEaAvA{E|Gu@dA_ApAOTmAhBi@v@ILo@~@m@bAk@hAc@`Ac@bAk@|Ao@hBa@tAI\\Ol@Ol@[tASfAUrAQrAOhAWfCKnAIfAIpACbAARA`@A~@AnA?z@@z@FrJJtQD~E@nE@bG?n@?r@?lHAhOChOAhGAlECfLA`E?nB?j@@|C@lC?F@hJ@dB@lE?~A?FBtH?xCFhRA`G?xC?`G?dCCx@Al@GjAKlAMv@Mt@ABK`@Od@M^[t@GLKRWb@OT_@f@QRYVSPURi@^y@h@wBrAqD|BiBhAEDs@h@o@d@i@f@KJo@l@aCbCcFdFEFoDpDkFlFqCrCuDtDUT}A|A_AdA[^SXm@`AAB[d@Yp@Wj@[x@Wv@WdAy@nDGTo@xCk@nCQv@UdAQv@On@ALQdAYzBKlBCx@Aj@Al@AbA"
                     },
                     "start_location" : {
                        "lat" : 45.6919404,
                        "lng" : -87.5205514
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 414
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 103
                     },
                     "end_location" : {
                        "lat" : 45.7628091,
                        "lng" : -87.74536859999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWaucedah Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ctivGjjpvOz@Fb@AJA`@D\\LXPTPFH\\`@`@p@LV@@j@rAPd@DF\\n@z@r@t@XV?L@^CTCLG"
                     },
                     "start_location" : {
                        "lat" : 45.7659429,
                        "lng" : -87.743262
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.2 km",
                        "value" : 6241
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1100
                     },
                     "end_location" : {
                        "lat" : 45.7469289,
                        "lng" : -87.81555159999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eWaucedah Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "q`ivGpwpvO?fJ?`FA\\AnB@XDVBDJNHFRFj@@L@L@b@FZFTHDB^Jt@j@^b@Vf@dAdC~@lC^v@DHXh@X\\LPrB~ApCjB`At@|BhCbAvAn@|@tBnCfBdCf@~@\\`APv@F\\TrANlB?hBBnE?t@AhEAzCAzG?VAPIvCEvASrHO~FO~FIxCKbDSdMAZNzB@JXpAt@dDb@rB\\|A\\zAXlAx@hDNn@H\\@DJlAHtAZzIDz@R~ENvB@@?@Hx@N`Ap@`Cp@nBnAnDjAvDv@~BpB|Fd@tA|@`ClAxCrAdDb@t@\\p@bB`Dj@dAdBdDvB~DBNd@~@p@fBDLRx@Z`BFbAHvBI`KAdBApAAx@GhCANErC?lB?N?ZC`DAvA@t@Bp@FfAHd@R|@DFnBzCx@|@Vd@`@t@XhADLJrAFh@BnB@X?~BAp@SxFARKpASxBUxCGn@EZCZERIb@Mt@Mt@GR[bA[lA_@fC"
                     },
                     "start_location" : {
                        "lat" : 45.7628091,
                        "lng" : -87.74536859999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1743
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 418
                     },
                     "end_location" : {
                        "lat" : 45.73244709999999,
                        "lng" : -87.8193036
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHamilton Lake Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "i}evGdn~vO~@~@FHr@dAFH`@t@r@zATd@Vh@j@pAvBvEPR^d@x@l@HHz@@xABt@AjBCjBCfAAfEGzFGfACnCEfAAfAArACrA?J?xCDhC?dAAfA?rDAfAAfA?jBA"
                     },
                     "start_location" : {
                        "lat" : 45.7469289,
                        "lng" : -87.81555159999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.6 km",
                        "value" : 6583
                     },
                     "duration" : {
                        "text" : "20 mins",
                        "value" : 1223
                     },
                     "end_location" : {
                        "lat" : 45.7730951,
                        "lng" : -87.8623138
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRiver Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ybcvGre_wO?j@?d@AxACp@An@M|BM|BUxCOnBInCGdBEtAClACdAG|DE`CInC?^E|BChBGpCExBEhACn@Ef@It@Ij@SfAwAzH]|AOx@e@`Ce@~BaBlIKn@Ml@Mn@Mn@Mn@[~ASfA}C`PGZU`ASz@_@xAc@pAWl@Q^c@|@OVWd@GLcBvCMVyAnCc@z@m@vAKVeArC{A`EEHyB|FgB|DiA~BkBxD]r@m@nAg@x@e@n@KLiAvAcD|DgArAw@`Aw@`Aw@~@cEbFmAvAQRUTEDe@b@gA|@MHy@h@gAn@aCtAcE~BMFwAx@e@RIDC@QF[DO@C?UBMAE?UEc@ImAWk@IUCUAQ?S@M?UBSB]Hw@PiCj@UFYD_@BG@U@yADkEDc^d@{A@c@?gJHcLJkBBgB@gABc@?gA@yEDa@?c@@c@?kB@oC@gB@uB@iE@kD?"
                     },
                     "start_location" : {
                        "lat" : 45.73244709999999,
                        "lng" : -87.8193036
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1608
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 299
                     },
                     "end_location" : {
                        "lat" : 45.77301569999999,
                        "lng" : -87.88304719999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBrickyard Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{`kvGlrgwO?tE?r@?r@?r@?p@?fB?`G?dB?hJ?xC?pU?tB@rH?zC@tE@pC@zC@xC@n@@pE?dB?fB@lE?fB"
                     },
                     "start_location" : {
                        "lat" : 45.7730951,
                        "lng" : -87.8623138
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1170
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 293
                     },
                     "end_location" : {
                        "lat" : 45.7778408,
                        "lng" : -87.89469059999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWPA Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k`kvG`tkwOu@?{BByA@_@LYTY^O`@Qf@e@jBWpAeChMi@bDAJk@dBe@~@]bAIf@ATC`@CjBEpA?^Ad@A`A?X?V?v@@lAGjBCNOhAIRS`@CDSXWd@EFm@x@Wj@AJIXATAV"
                     },
                     "start_location" : {
                        "lat" : 45.77301569999999,
                        "lng" : -87.88304719999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 482
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 45.7769809,
                        "lng" : -87.9007536
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003ePine Dr\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "o~kvGx|mwOPvCH`BL|BNnCNxCHdBPhDX|BHh@`@`B"
                     },
                     "start_location" : {
                        "lat" : 45.7778408,
                        "lng" : -87.89469059999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 399
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 79
                     },
                     "end_location" : {
                        "lat" : 45.7799884,
                        "lng" : -87.9035611
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eForest Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cykvGtbowOmCdC]ZyArAaBzA]ZyArAwApAa@\\"
                     },
                     "start_location" : {
                        "lat" : 45.7769809,
                        "lng" : -87.9007536
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 415
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 61
                     },
                     "end_location" : {
                        "lat" : 45.7836791,
                        "lng" : -87.9037281
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eSection St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}klvGftowOW\\C?c@LC@eBC{@AmCAkBAmA?c@?oCA"
                     },
                     "start_location" : {
                        "lat" : 45.7799884,
                        "lng" : -87.9035611
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 664
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 163
                     },
                     "end_location" : {
                        "lat" : 45.7836206,
                        "lng" : -87.91229159999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE 4th Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_cmvGhuowO?xFBvF@|E@lF?r@@fB?r@?n@@zF?xB?zB"
                     },
                     "start_location" : {
                        "lat" : 45.7836791,
                        "lng" : -87.9037281
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.5 km",
                        "value" : 6490
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1266
                     },
                     "end_location" : {
                        "lat" : 45.7955438,
                        "lng" : -87.9857244
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eKimberly Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "sbmvGxjqwO?tB?bA?fABpU?rHBbO?nA?pD@zC?dB?zC@`G?dB?fB?dB@tH?lE@bO@`G?lE?lE@lN?nC?|@@`G@`G?jB@xA?~@?fB@rH@zC@tH@bD@`GFnM@rE@lCBfCHzK?h@Brj@BlBXtCPbBNtA@Lr@vFBRV~Bp@~FNnCElCALUtCq@fCm@xAi@jAUb@aChEkC~ECD_BxCc@v@aA~AW^UZy@v@u@n@oC|Ac@TeAj@sAjAwBzBEFyAvByGzIgCfDgAvAs@~@kAbAURwBjAiBn@yCjA{Bz@qA^MDs@N"
                     },
                     "start_location" : {
                        "lat" : 45.7836206,
                        "lng" : -87.91229159999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1144
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 308
                     },
                     "end_location" : {
                        "lat" : 45.8057467,
                        "lng" : -87.98721639999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eLake Ave\u003c/b\u003e",
                     "polyline" : {
                        "points" : "cmovGvu_xOm@Nm@LkAVkDj@a@Fc@FiB\\c@H]Hg@HsEt@c@F[FiAHoBFo@AkBFmABgADyADkBA{A?cEF{ABi@BC?[@"
                     },
                     "start_location" : {
                        "lat" : 45.7955438,
                        "lng" : -87.9857244
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "90 m",
                        "value" : 90
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 45.8057139,
                        "lng" : -87.9883765
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePine St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}lqvGb_`xOBdBB`C"
                     },
                     "start_location" : {
                        "lat" : 45.8057467,
                        "lng" : -87.98721639999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "94 m",
                        "value" : 94
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 45.80655669999999,
                        "lng" : -87.9884263
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eQuinnesec Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ulqvGjf`xOsABc@@q@B"
                     },
                     "start_location" : {
                        "lat" : 45.8057139,
                        "lng" : -87.9883765
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.2 km",
                        "value" : 7189
                     },
                     "duration" : {
                        "text" : "24 mins",
                        "value" : 1445
                     },
                     "end_location" : {
                        "lat" : 45.842215,
                        "lng" : -88.0423347
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eLake Antoine Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_rqvGtf`xOwD@oA?[?C?]Ca@Go@Km@Mm@UCAUK]Sc@Yc@a@IIq@s@g@g@a@i@m@q@w@m@MI_@WEEc@U]Km@KqAOk@G_@CC?c@Ec@Cu@E_DYuAMUAc@Cc@AOAQBc@BA@mAPYJcA`@ODwCtAa@RIDULUNu@j@q@h@]X_@Z]Xm@f@OL]X}@r@UPs@^k@POD]HE?gBTA?e@N]PWLi@ZsAv@MHYRm@d@g@j@GHU^s@nAa@r@W^A@u@~@QTa@\\e@\\mAf@WFy@RK@{@JK@c@@G@{AAG?g@?_@?U@i@FG@_@Lo@Xq@ZeAn@y@f@g@\\[V[^g@n@e@l@e@z@A@]x@[x@CHM`@CHSn@Mj@k@rBIXiAhEq@hCaA`De@jBMf@a@fBOr@SpA]xBShA_@fBK`@YfAq@|Bk@~A[z@Sh@Wp@Wl@q@|AIPaAvBkApBaDrFkAjBe@r@MLOPKJa@`@QNYPm@XUJm@ZcAd@g@\\]V[X]\\o@x@sAhBUXy@lAoEtGaKzNcHbK[^]^Y^MNGLEJQh@ItBI|AOjAOpAWdAOdAMx@?@Gn@AFCd@ClA?~F@lH@fDCpBAbACl@?BK`BOfBGf@AHg@dEg@zD}@vHGr@Gt@KhBAd@EjAA`C@zBDbBH|@Z|Dn@fE^bBXrAtAzDpA`DPd@@BrAhDh@rAf@rAHRh@bB"
                     },
                     "start_location" : {
                        "lat" : 45.80655669999999,
                        "lng" : -87.9884263
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 592
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 105
                     },
                     "end_location" : {
                        "lat" : 45.84559489999999,
                        "lng" : -88.04542979999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE Industrial Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{pxvGpwjxOa@X_@BgA?c@?eD@{FBO@C@E@?LAT@pG@|EALGDYJUL"
                     },
                     "start_location" : {
                        "lat" : 45.842215,
                        "lng" : -88.0423347
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 298
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 69
                     },
                     "end_location" : {
                        "lat" : 45.845216,
                        "lng" : -88.0492259
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE Frank Pipp Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}eyvG|jkxOVzCBd@@F?BFr@?@Bn@@l@Dz@BbB@r@Bf@D~A@DDr@"
                     },
                     "start_location" : {
                        "lat" : 45.84559489999999,
                        "lng" : -88.04542979999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "9.4 km",
                        "value" : 9383
                     },
                     "duration" : {
                        "text" : "28 mins",
                        "value" : 1700
                     },
                     "end_location" : {
                        "lat" : 45.8828258,
                        "lng" : -88.14244529999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-141 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-2 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eN Stephenson Ave\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow US-141 N/\u003cwbr/\u003eUS-2 W\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Wisconsin\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "scyvGtblxOiCbA_Af@aAf@kIfFo@`@{BxAoHxEwAdA}AtAeDtCaI`H{ApAyBjBeCzBiC|B{ArAsAlAe@^mA`Ao@^[To@Xy@Vm@RWFIBUBYFK@e@HgAF[@aAFmAJy@Hi@JQDa@JSF]J_AZWN]TUP[Ri@\\WR]\\OPORCDaApAeA|Am@pAGNELo@~BUv@Uz@{@fFOz@I^EXk@lDy@nFSjA]rCCPC^EXG~@G|@Ar@AZAnA?lABlG@l@@vE?r@@hE?D@tC?dA?d@?HAh@?DEx@I`AIv@Kn@_@lBWrA_@pAQd@M\\S^EHQ^Ub@c@r@[b@SZW\\]^UTMLIF[TWNg@XYNwAx@c@RkGtCuBbAiBz@eAf@OHIDmAp@[NcDdBc@Ti@^o@f@A@g@d@g@j@GFUX_@l@a@r@e@x@[fAU~@YfAKl@Mz@It@Gr@GzA?JAr@?p@@jJ@dB@zCAxC@hB@zJ@`G?r@DfL?jDBlK?rB?hD?`F?lEAtD?vB@n@AP?zD@vA?`B?hD?vA@zAEpHEfAEl@E`AOlBMpAMpAKt@Ij@Kh@If@Ml@Mn@Sz@St@Qr@K\\GRKXGPo@pBe@jA_A`CaDtIUj@yBbGoAhDe@nAa@rA[`Aa@rAa@~Am@vC]bB[dBY`BU|Am@nE_@hEW|CSfDKnCAxBA`@@jD?X?JDzE@^JhF?j@BhEChAAnAC|@KvAIx@Gl@QrAUfAU~@cAtC"
                     },
                     "start_location" : {
                        "lat" : 45.845216,
                        "lng" : -88.0492259
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "28 m",
                        "value" : 28
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 45.8826095,
                        "lng" : -88.1426211
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eOld Hwy 69\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "un`wGhi~xOHDXTFD"
                     },
                     "start_location" : {
                        "lat" : 45.8828258,
                        "lng" : -88.14244529999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "16.9 km",
                        "value" : 16890
                     },
                     "duration" : {
                        "text" : "51 mins",
                        "value" : 3036
                     },
                     "end_location" : {
                        "lat" : 45.956274,
                        "lng" : -88.325515
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAbandoned Railroad\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Michigan\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "im`wGjj~xOy@|Bw@fCo@rBg@hBA@Md@IT_AxCcAnDCJeAtDeArDq@~BUr@o@pB[~@kCtFUXmBbCSVe@`@wExD}ApAuBnB{@v@sAnAe@\\]Z}AlAc@\\YTyCbCiBzAOLwDbD{ApAyBjBgDtCMNoB|Bs@hA_A|AIPm@~A_@jAg@vA?@a@vAi@nBMr@YhA}@dD}@fD?DkBrHeA`EK\\w@rCcA`Eo@fCq@bCQr@wAtFIVqAdFCF}@nDIZeAfEOn@_@zA[jAu@zC]rAQt@aAxDeAfEo@tBe@`BcApD{@bDk@xBk@xBo@bCu@~CgBhGa@xAm@lCADw@hF?B_@zDALOxBEpAU~FsAz\\CfBIlEAv@G`B]lKIrBSxEAd@OnFSzEMzCW`GCp@U~FEpAMnDIbCEhAU~F?JUvGCbA]zIUjGKfCWnFOtEOdEStGGpBGnBQpECd@KbCEfAEr@Cr@EdBIlCGrBEhAAZMjCIrBCh@WrC_@zCo@tCOf@Sj@g@vAoAhDUn@mAfDcAdCeApCGLk@~Aq@fBu@`CK\\wAvDkA|CEJcAhCO\\y@zBWl@qAhDSh@O\\aAlCe@nA}@dCMr@]lBE^]vCEn@[fFUpBCDs@nCo@pBITu@lBoA~B_BdDOXaAdBgClEe@x@oCdFkBfDqBlD[h@qFvJyB|DqCbFmFpJuMxUuIpO{D`Ha@r@cElHyBzDwIpOuBpDmG|KsCbFuFxJuFvJeElHcAhBiA|B{A|C}A~C}@|BMZm@nAWz@gApDq@zBeA`EqAdFa@zAOl@q@hCOl@Ql@Ol@aAvDq@fCsB`IOh@qAhFaBtGsB`IoAdFcAvDaBrGEJ}@hDuDxNsAbFoBtHSx@Ol@aAvD_@zAo@jC[lAwArFqAbFsB`I_BfG}@nC[`As@hBYb@eA`Be@v@"
                     },
                     "start_location" : {
                        "lat" : 45.8826095,
                        "lng" : -88.1426211
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.4 km",
                        "value" : 4362
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 850
                     },
                     "end_location" : {
                        "lat" : 45.9904531,
                        "lng" : -88.3485936
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eChicago and North Western Railroad\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uynwGnabzOo@jAGJ_@^c@b@ML}@v@EDw@h@A@{A^}AVW?aADeB]kAk@gD_By@a@i@SuAi@OCoAW}@@{@@K@c@Dc@BC@]Nq@Xq@`@aAh@WNuBlBeAbA{@v@a@^oAzAMNkAdAURgAv@_Ap@o@b@q@^aBz@WLsDvA[Ji@PIB{@RcAVc@Lc@JgB^eATm@LaDp@_AZkBz@q@Zm@h@{BjBMLaE~DsCpCiEfECByAvAqDnDkGdGuBtBsCpCmFhFwBrBuBtBuBrBwBrBuBtB{@x@oEjE{LvLwBrBiCfCCBCF"
                     },
                     "start_location" : {
                        "lat" : 45.956274,
                        "lng" : -88.325515
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "30.2 km",
                        "value" : 30162
                     },
                     "duration" : {
                        "text" : "1 hour 31 mins",
                        "value" : 5431
                     },
                     "end_location" : {
                        "lat" : 46.09236689999999,
                        "lng" : -88.63734529999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to continue on \u003cb\u003eChicago and North Western Railroad\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eState Line Trail\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow State Line Trail\u003c/div\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "iouwGtqfzOa@v@a@z@i@rAk@jBWtAIj@WhBk@|Eg@xEe@fEOrA_@hCShAKh@Yv@g@pAy@nBCFgA|BS`@cC`F[r@cAvBiAbCQ\\sBpEm@~Bg@|BYpB?@E`@Iv@ElAGtB@`CBl@Bv@JlALjAFh@D\\Px@@Fh@nD@RDr@HdBJxB@rABzC@r@BdB@r@BfB@r@DxC?`@@dA@r@DlEFxGAfBAr@AxC?r@CzC?|@BjH?d@TxEBp@RdBRbBNpAh@zCp@nCJb@lBvGb@vAz@bC~AxEPb@zAfFjBjGpCdJf@dBbAdDzA~E`BnFpBxFpDdK`BvEzAhEnAvEPnARdB^bEFdB?dBElBAVIpBW`C_A`JoC~V{@xHIp@m@vFw@jHm@xFw@jHGb@e@dG?DEr@QvCEr@MdBKdBKdBKdB]|FYjEMvBC`@SvC[jEG|@OlCYjEU`EU`Dk@xIg@zHo@zJa@nEER]lBK^s@fCENm@~A_@x@IPmAbC{ApBWVyCpCYV}@v@IFo@p@y@v@y@bAYZ]d@s@dA]b@eApBc@v@_@~@w@lB{A`Fe@hBqAdFoDlNUz@uCzKwEpQ[tAcAxEs@dFGn@OdBIvCI`CCjAIzCG|KElECnEAfBClEEtHC`EA`AClECbGGpMIdOCtHE`GKtUKrTUvE[dCMx@g@`Ck@xBCH]dAu@dBUd@MXmAbBwAhBeBxA]TKHaB|@{D~AkCbAiDrAqAf@u@XgC~@oFpBgC`AMDSHeBr@cA`@wAj@qAf@w@ZoAd@gDlAc@Ta@PyBlAIDyCdB{AhBmBzB}@fCQh@{@bCe@tACDeA|G[pBm@|Go@nHw@~Ia@lEy@zNAJKpKIlEQtHIjE?t@AnECtH?nAETq@xFe@~DWbCM~B?@ErCFbCJlA^~DPv@v@bDtAbEdCpH~AzEdCpHvC~IpBfGrE`NDL`GzSRrCPnC@bD?d@GnCOhAc@vDCN}@pFc@pCCJStAy@hFqB~L}@pFY`Bc@pCY~AqAbIO`AkBvLkBtLsAxHIj@_BdKo@bEkBtLeAvGUzAmArHmEzX_BdKuAtIqAdICNmAtG_BpHkBnJQ~@yA~GWhA_CbLmApF_BdHM^]fAk@dBYf@_EtHk@fAkDpGqCdFgGdLqF~Ju@tA{D`HcEtHo@jA_EbHgBbDwB~DwB`EaCnE_AvAuAfB}@hAqC~CSPiAbAeBjAKFoCvAw@\\uDxAaD`AmEtA]JmBf@mD`A]HwBt@wLdDwBr@gA\\gCt@oEpAi@N}FfByC|@cBl@mClAoAn@cBz@cBv@iAh@aBz@a@RKF}CvAeHdDGBkGtCsDbBeCjA}BbAa@RcAb@a@Pa@Pa@P[LgAf@a@RmB|@WLgClAeBt@cBr@kEvBoAt@gBfAMF}AfA_@V_@VWPGD}BpAEB_Al@_@Vw@h@]VCB{@h@_@T_@VKFuBlA{BdBu@l@A@}AjA}@l@OJc@RMH_@Rc@PYJi@Nc@FE@w@HiAC}ASkCGWCiJ_A]G]GeD_BECmF_D{@WmA]aBKkBMsIi@{BW_AMoLoBiDk@g@Ga@D_ADwB`@"
                     },
                     "start_location" : {
                        "lat" : 45.9904531,
                        "lng" : -88.3485936
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "123 km",
                        "value" : 123018
                     },
                     "duration" : {
                        "text" : "6 hours 4 mins",
                        "value" : 21825
                     },
                     "end_location" : {
                        "lat" : 46.48116330000001,
                        "lng" : -90.05238229999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUS-2 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eW Adams St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow US-2 W\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dairy Queen Grill &amp; Chill (on the left in 123&nbsp;km)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ilixGl~~{O?rAEtF?nF?fF?vB?zB?~A?hCAlFAfF?nFAfFE|EKlRAbBCdC?tD?z@?xA?dB@l@@l@Bj@Dz@Dz@Dl@@TBZNvAh@fEr@vF@FP|AR~AT`DDbADdA@fA@fBCfCCdACr@AJWhDW~Ba@jCYpB]bCIf@AHS`AS~@Uv@K\\ENO`@Wp@O\\]t@e@x@y@|AgBjB{@z@y@z@iBjB[Xc@j@UVEDu@dA[`@yAxBuAvBoDtFYb@aCrD_A~Ag@`Au@pBa@hASn@CHQl@aAvD_CbJ_AlDqAdFcAvDm@~Bo@jCqAdFo@jCq@lCsAdFcBnGmA`E{@rCwBvGwAzDmA|Ck@xAQb@cAbCa@|@w@~A{A~CUf@aArBaBvC]n@uA|Bi@|@kBzCQZiBvCkAlBiBxCkC`E_BhCmAjBkAlBYb@kAlBeA~AWd@oE~GWb@{A`CyAzBWb@aCtD_CtDeEpGcAbBmAxB_A|AoAxB]j@m@lAILe@~@Uf@qCtFq@tAQ`@yBhFe@lAmA~C_AhCwDdLg@xAsA~DaFdOkAhD}B|G_HpSkAnDSj@eBhFo@jBIT{@`Cw@dC}@nCkAnDSj@sAbE{ApEEFuAxDWr@o@|Aa@z@_DhGCH]n@eAnBgAfBGJkAfBuApBaBxBY\\[^]`@wAbBiClCe@`@oBhBy@r@_CjBaEpCaB`AkAp@{@b@w@^w@^_A`@k@TMFeBp@a@NeBp@u@XiAd@w@^_Bv@aB|@w@d@MHQJe@ZYPa@V}@n@cAt@c@\\o@h@OLMLyBlBQNeCxByBnBmIlHaRjP]X{ArAmBbBeAbAe@d@s@x@SVEDSXEFc@n@]f@_@n@eAnBw@hBWr@Yp@Oh@O`@a@vA]tAGZQr@G\\Ot@Mx@Mz@YpBAJIfAIz@Ev@GbAAf@ElAA^A^?h@Aj@?bA?dA?rA?`F?bR?nE?nE@l\\?|CAz]?hS?tH?vH?dJ?NHdNBhU?b@?nE?r@?r@A|K@hd@?r@?~Q?bI?@BjW?pE?hVA~J?|YAjC?zC?~DC`NAhD?|I?r@AjJAbG?r@AnE?p@?^AbSAnR?r@AtH?r@?fB?r@?fB?zC?r@AnP?bG?r@?~D?|AAnEA`d@E|EG|DK|ECn@Cr@EbBEt@?NCb@[~FMrCm@rHY`DGp@AJUvBcCpU[tC[tCGp@cAnJ{A~MaAfJOvAg@dE}@pIE`@WrB]tCUnBsA~Lw@lHGp@w@jHIp@kApKuAhNa@pDk@fFcB|OCXMhAeBvO{BjSm@xFw@jHaFrd@[tC}AtNa@dDUfB]|BUbBMbAu@vEAHUlAk@vCsAxG_AjEGVw@dDoBhHOl@ABkBfGaF~Ny@bCy@bCk@~AQj@g@tAQj@gAbDiBbF{@bCQj@mAnDkAnDmAnD}AtEaB`G}AxFMb@Ol@o@dCqAlFOl@o@jCGTg@tB_@zAoD~NaAdEyE`S_DpM}@zD_AxDOl@YhAmAvEsA|EmBjH[hAkCjJeCtI_AhDaDhLmBtGW~@GPQl@aAhDUv@Ql@gBnGuBnHmChJUz@]jAM`@CJ_@xAaAdDgAtDQj@a@xAkBnGeArDkAdEeAtDs@fCQl@?@gApD_AxCw@fCa@lAq@rBqC~H_DtIUh@wB`GSh@sKzYSj@eBtESj@g@tAqAjDSh@kClHsApDaBjEk@~A_BlEiElL{GdRO`@Sh@eBtE?@yB~FiB`FkA|Ci@zA}AfE}@bCsAxDQf@iC~GgDdJyBbGWn@{@bC{AhEoDtJcAnCkA|C}AfEwArDWp@Up@Sf@Wv@Qj@Up@o@jBo@fBc@nAWp@wExLgAzCSh@Yx@}AhE_AjCgC`Hw@tB{DdKiBlFeBvEg@tAoAjDUh@s@nBGPmCjH]~@eAvCKXwA|DyB`GqApDQd@Sh@mClHqBtFSh@g@tAi@tA{@`CSl@aAhCcBvEqBrF_AdCc@lAoAfD}@`Co@`Bc@dAe@hA}@nBIRS^k@fA{@~AWd@o@bAmBvCaC~CmBbCw@|@iBxBkDnEu@~@eJdLa@f@eDdEIJaCvC_@b@aFnGm@x@c@l@_ArAqDlGq@tAy@jBGJq@bBoBrF[z@uCjIgBfFsBdGmAnDSj@Qj@uE`N_BxEgIrUuA~DsBdGSj@Qd@oArDeCnHqDjKmAlDEJa@jAQh@gDtJqCbIABQf@IToA~Dc@~A{@fD_A~DQ`AMn@G\\s@vEAHId@SrAMjASdBq@zG_A~Is@~Gy@zHs@fHm@lFeA|Jm@zFe@vECZWpCMlAUtCGr@I~@OjCC`@APe@nIMhCGzAIlBE~AAr@KxCEzCExCCbCC`CA`C?BAzKGlKIpf@?DCrF?r@GzO?fB?hB@xFIfGAbACpAGdBGrAKdBItACb@MxB[pCMnAQ|ASxAUzAG\\GZQbAENWxAa@jB]vAk@xBi@jBWz@Sj@EN{AlEmAhDuB~Fi@xASh@eBvEg@tACF_BnEg@vAc@nACDg@tAg@tAcBvEqDjKy@jCq@dC{@hD]|AYzAa@xBUrAQbA[vBYfCQ`BGn@Gz@Gn@EdAMzCCxA?BAn@Ar@?|@AlBBlBFdCp@bOBr@RlENxCHbBHhBFhAB\\TdFBXBr@LdCDfA@F@j@@XBh@@f@BnABzB?P@hA?|A?|@AbAAlAAbAA|@Cn@AVCbAE|@Cp@Et@Cr@MnCObDc@lIC^UjFUpF]|H_@hIEz@YhG_@fJOvCY|HQdEATIdCGtBGpBGbB?RA^IhDQrICvAKxG?@MbJIvEMvHKpG[lUAr@IbGMvHMvHMtHIbGMvHKbGa@jWK`GCfBAr@InEAr@c@~XCr@YlQQ|LSpMa@jWMjJAr@InEIbGYxQOpIG`EAh@CpBG|CAb@Aj@?FA`@Cd@Af@Cd@Cd@Ch@GnAEr@CXIjACf@Ed@Eh@Gl@OvAALGf@Eb@Gd@OfAGn@YpByCzUs@pF_AhHQvAIp@Kn@SbBQjAc@jDMx@Gh@o@zEq@dFWrBaAjHm@|EcAlHWpBc@vCG\\Kp@YhB[pBe@vCCRMn@]tBo@lDAHId@Mn@Qz@s@vDs@tDAFs@nDCNo@dDi@lCk@tCSbAUhA_@nB_@jB_@lBu@xDu@rDu@vD]bBWrA_@jB?@SfAI`@Kd@I`@If@Ib@Id@Id@Id@Gb@G\\?DIj@G^Gd@Gf@Gb@Eb@Gh@Gb@Ed@?@Eb@K`A?FEf@Ef@Eb@Cd@Eh@Cd@Ed@Cf@Cb@Ch@Aj@APCr@?BCj@ChAEpACpAAXCr@EdBqAxj@YdM[vMWzJs@h[]lN?@O|FGfCOnGS~HC`Bo@pWAb@UxJAj@SrIMbFW|KQvHSdJ?Dk@tUUhJ?\\MdFA`@G~BWrK?BKrEAn@I~CGvCE~AGjCGvC[dMOrGGzCIxCGzCGbBAh@?HCv@E|@El@Ep@AVCZEh@O~AGn@Ip@MbAE`@Ij@Ih@Mr@QdAOv@I\\UhAYfAMj@Ux@]fA_@lA_@fAo@bBSd@c@bAo@pAo@nA_@n@c@p@Yd@OTQV[`@c@n@UVW\\i@l@o@r@g@f@}@|@aC`C]\\eCfC_B`BEB]\\WXa@`@q@p@IHw@x@A@]\\k@n@m@l@uCvCiChCa@`@IHSRoDpDkBjBiAjAi@h@{AzAwBxBiFjFIHqDrD_@^o@p@c@b@eBdBk@l@e@d@oBnBqBpB}@~@CBgCfCe@d@KJ{A~Aa@`@}@z@u@v@q@p@oAnAIHq@r@WVs@r@s@r@cAdAGFsErEk@l@]^[\\wAvAyAxAoApAc@b@{@|@cAbAmAnAqApA_B~A]\\o@p@eBbBYZ]\\wExESRqDrD[\\cShS_A`AyBvBuAtAWXEB{B~BwAvAkElEqBrB}A~Ac@b@m@n@SPIH]^uBvBs@r@q@r@y@z@{A~A}CjD[^mC~Cw@|@}AnBy@bAW\\e@j@QTo@x@i@r@{@hAwAlBy@jACBoAfBq@bA}@pAYb@k@x@qAnBy@lACD{AzBc@n@{AzByAzBcAxA}@rAQTsArBw@jAi@v@{EjHoDjFa@n@{CpE_AtAgCvDu@jAe@p@kF~Ho@`Ak@z@[`@uAtBwAtBMPaBdCy@pAe@t@CDMTU`@QZe@|@w@~AMX[n@_@z@a@~@g@nAy@zBk@`Be@|AWz@Od@St@Ql@Sz@Oj@Or@K`@I^WnAUhAQz@k@zCcAnFk@|CIf@CFg@nCY~A{CfPUjACJg@jCk@|Cq@rDUpA]hBUlAeA|FMv@M|@Kj@Kt@U|AQrAUnBOrAGf@Gn@WnCKlAG~@Gt@SzCATI~AInBIfBObFWpI_@|Li@zPAn@IbC_@hMQrFKjDQpFEfBGpAEfAEp@?BGjAG~@KvAIbAI`AIp@E^Iv@Iv@?@Gf@U`Bi@dEE`@Ip@It@Gh@Gp@It@Gz@Ej@?DCd@AFAVCd@Cj@Cd@Cr@E`BGvCEdDQdLC`CALChCCdAAr@EbCA`@Cj@Ch@A^E|@G`AGr@?@C^KlAMpAOnAM|@OhACJO~@Ox@YvAI\\GZWjA_@rAg@fB]fAWr@i@vAGP[v@Wj@g@dAOXQ\\e@z@e@x@i@|@Wd@y@pAiB~CU`@oAvBYf@}@~AqAzBkCnEKPWb@uC`Fu@zA_@r@MXO\\]x@g@nAKZ]~@KXCLEJOb@Qj@YfA]vASz@[tAKd@CPEROx@QhAGb@E^OdAIl@AHIt@Iv@C^Ed@IjACf@GlAEr@AVAd@?LCt@AfAGxDIdGEtDGbGErECfBE|CAj@EdEMdLAJAfBAPAtAClAAlACfBCnCKdI?PChCCfBAx@EtCC|BAf@Ar@C|@EjAEvAEvAMbCMpBS~CYjDObBAPc@xDCNKz@QxAEVQhACRk@dEQrAk@`EKr@U`B_@rC]fCM|@o@tEs@fFKp@k@dEUbBa@rCGf@Mz@k@dE_@hCcArHa@rCAD}@bHe@dDSvAi@vDWfBa@xCM`Au@rFu@hFg@vDCNa@xCw@jFc@lCQbAa@bC[dBMt@QbAUfAWpAWpA_@jBg@dCGVkAjFSbAkAfFuBpJ[pAwAtGq@vCk@fCKf@_CpKwBtJOr@mAlFe@vBq@tCeC`LQz@[zAOr@ABYvAQbAShAWrAEXKr@Kn@[tBUnBQxAOrAQfBGh@C\\MvAQ|BMhBItAKpBGhAG~AEhAE|AAd@MvFGfDARWdNQtJO|HAHM|FIzEA^C~AI|DALI`EClACzAAVGnCAf@Aj@CzAEnBG|CIvDA^Av@GvCE|AEbCA`@Ar@EfBE|AK|FK~EAr@EhCE~AClAGzCEjBAn@EhBGxCCjAGnDQbII~EW`MWbNCtAIpDUjMYdNMzFAf@OvHIbFYxMCpBIvEGzCAr@GbGCjAGdHAl@CfB?t@CfB?VAZEjEApBEdBA~AExC?@IpIKfJCfCCfBAhA?\\KdJGvEGbGAfBYpXG~EAfBEzCCzCAr@K|IAbAAr@CzCCfBCzCMbMG`F?r@EzCAr@SfRGtJ?VM~IGnC?RKfCCr@ElAMtBGhAGz@K`BQrBGt@WjCKbAGj@MdAOlAu@lFCTGZAJI^YdBCJo@lD_@fBUfAU~@a@`B?B_@vAa@zAMb@g@bBi@hBYx@EL[`Aa@hAe@rAg@nAWp@gAfCwAdDYp@}@tBcCrFADsA~Cw@fBu@fBsA~CqBpEMXw@jBy@jBCDwC`H[r@qAzCq@~AqBtEyBbFKVw@fBSb@_AzBGNoAtC]x@{CdHa@|@_AzBwAdDGN]v@_DjHSd@o@|AwAbDWl@_BrDy@nBq@zAO^mBnEsBzEMZqDlIuA`DwAdD]z@yCbHKTaCvFo@xAQ`@_@z@a@~@MXeAbC_AtBmAvCc@dAqAxC[r@}BnFkAlCqAxCsA~C_AzB_BtDkAnCOZmBlEaBxDa@~@k@tA]x@sB|EaBvDEH{@pBwAdDIRyBbFUh@Uf@MZGLk@pAUh@]x@MVIVIPQ`@Yp@Wj@eAdCuA`D{@rB}@rBCFk@pAy@nBGJUh@sA~CcA|BA@Uh@Uh@e@hA}AlDwB`F_CpF{BjFaAzBGPw@hB_BtDiAjCy@jBc@bAa@~@k@rAa@~@_@|@a@|@_@|@_AvBq@|AeAbCMZqBvEa@~@_@z@oBrEaA~ByC`HMZkE~JeA`CQb@cCvFaA|BqCrGEJgIlR_AxBgFtLQ^cB~DyExKsCvGuC~GOXcDvHcB|DsBzEcB~Ds@|AqBtEIRMVcFbL{BzEs@`BgA`CuCvG{BbF}C|G{B`F{DxIo@tAoDbI_BlDc@`A}@pBqApCmDbIgBxD{@hB{@jBiBxD_AjBUd@kBtDyAtCiAzBa@x@uBdEGNeCzEo@nAk@hAk@fAYn@]v@Yp@i@lAQh@c@nAKZu@fCYjAa@`Bk@xCSlAG^YnBEb@G`@Gl@KjAGn@WnCa@fFWvC]`Ec@tFGr@YbD[~DQxBi@pG[xDUbCO`BgAfL]|CEZOpAUlBUlB_@zCWrBc@|C_@pCk@|DYpBQfA[nBSdAALGZi@pCq@`DOt@U~@a@bBENWdAu@lCw@fCk@hBIV}@fCWr@Ul@o@~AM\\i@nAkAdCaBjDmB~Dk@lAMVkDlHc@|@GN[r@[v@[v@e@vASp@[fAU|@YhAGVKf@Kh@UnAGb@Ib@QnAOpASfBKbBGz@KzBCh@EtB?b@Av@?l@?\\?N@j@BbC?PD|BBzA@nB?dDAx@?pDAhB?jB@lDA|ACtFGxJG|BAp@ATK~EKxDSzKCbBCp@Aj@QrIElDIzDAl@CjACjB?jAAz@AxA?xA?l@Af@?X?rB?t@?r@?hB@`D?\\@rE?R?fB?lD?bCAz@?JC~BCjBC~@ALAd@C`@C|@GfAGrAIlAG`AMvAC^CZIt@UvBOlAOnAGh@CL]`CMt@S`Aw@`Es@`DqAjFQr@{@lDu@zCi@|Ba@hBAFKf@?BOt@Q~@Mt@ObAGXMz@M|@CRMbAKz@Ir@CNEb@O~AI~@G~@C\\Gr@C^KtBItAGpBa@`NUjIS|GQnGYzJI`Ca@lNQbGOvFUvHQbG[jLMjEG`DE`BA~A?H?`CBrB@lBH|DFlA@l@HtAFrALhBLdBTfCp@jGZtCTtBfA`Kz@~H\\`DHl@zArNRfBLrAPdBRtCFnAJfBDfA@FB|@F|ADjB@bB@fA?B@nAApA?tA?BAbBCzAGdCEbAEnAKlBEbAMlBa@~GQtCK^KdBOjCIpBEnAErAE`BEzBEhCDZC~EAtD?lD?f@?lFAfI?dIAbI?~D?nE"
                     },
                     "start_location" : {
                        "lat" : 46.09236689999999,
                        "lng" : -88.63734529999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 446
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 197
                     },
                     "end_location" : {
                        "lat" : 46.4771489,
                        "lng" : -90.05239250000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eS Moore St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gjuzGjjsdPfA@j@?`@?J?F?b@?fCAzD@lA@jB?n@Ad@?"
                     },
                     "start_location" : {
                        "lat" : 46.48116330000001,
                        "lng" : -90.05238229999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.8 km",
                        "value" : 5803
                     },
                     "duration" : {
                        "text" : "17 mins",
                        "value" : 1035
                     },
                     "end_location" : {
                        "lat" : 46.4723768,
                        "lng" : -90.12469689999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eqtzGljsdP@|C?P?hBBtAAnA@XDZd@`BNd@DLL\\\\~@bAlBX^z@fAp@|@V^f@`Aj@hAh@zAd@lA^dAN`@r@pBh@`Cl@~CDXf@pCf@rCZ|AVtAZjCNzBBfCI`EErB[jC_@tCCRk@nDY`BW`BOx@Kd@k@nCk@lCa@jBe@bCwAtHi@pDWlBSrBMvCAnA?bADvCFfC@HHfDLjFD|ABhAH|D@DH`DDlA?hACfBApAIfAG`AEn@Ir@S`CABe@jE_@pCM`ASrAKv@YnCGd@OjBKrAE|B@N?rBLhCh@lEp@zF@Px@nIDf@fAhPpBr\\@Nb@dHPxCd@rHVdELlBr@zKV`EZvEb@vGHnAZnEDn@JfBTpDP`C@Hf@~HTvD"
                     },
                     "start_location" : {
                        "lat" : 46.4771489,
                        "lng" : -90.05239250000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1 m",
                        "value" : 1
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 46.47237,
                        "lng" : -90.1246972
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCountry Club Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ksszGjnaeP@?"
                     },
                     "start_location" : {
                        "lat" : 46.4723768,
                        "lng" : -90.12469689999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1628
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 290
                     },
                     "end_location" : {
                        "lat" : 46.4630362,
                        "lng" : -90.1399739
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "isszGjnaePXpE\\nDN|Aj@xDT~@f@rBZbA^pAz@~BDFdBlD`C~DdAlAB@`A`AvAjAXTh@`@vBbBx@j@f@^~@v@p@j@^Zz@x@`A`AtAdBbAbBp@hA@B`AlBNXx@`BlAlDh@dBRZVR`@J"
                     },
                     "start_location" : {
                        "lat" : 46.47237,
                        "lng" : -90.1246972
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1706
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 287
                     },
                     "end_location" : {
                        "lat" : 46.4607171,
                        "lng" : -90.161756
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eE Commerce St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_yqzGxmdePf@zCRnAb@dET`DDbAFjARlEJbCf@lKD`AD~AJnB?DCRIT[d@EZ?ZJ|A`@tHPvCf@jM@FX`GJ~BJvDLlBBf@H~AFnABh@Bt@LtBFjA@HTpBNx@ThA"
                     },
                     "start_location" : {
                        "lat" : 46.4630362,
                        "lng" : -90.1399739
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 286
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 46.4632921,
                        "lng" : -90.16178379999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN Curry St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ojqzG~uhePaA?oA@iA?c@?c@@c@?gA?c@?c@?i@?"
                     },
                     "start_location" : {
                        "lat" : 46.4607171,
                        "lng" : -90.161756
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.5 km",
                        "value" : 2472
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 454
                     },
                     "end_location" : {
                        "lat" : 46.4659656,
                        "lng" : -90.19298379999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUS-2 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eE Cloverland Dr\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow US-2 W\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eParts of this road may be closed at certain times or days\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Wisconsin\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qzqzGbvhePF~HBhDBpC@lA?L?bA@f@?^?J?x@A\\?p@GbOE|JEbGEpK?jACjFA~DCvH?fBA`C@`G@|C?fBAxA?hB?xC?d@?bAEh@?^Ap@?f@A`@C`AEbAGx@Cf@Gj@Ep@E`@ERCVM~@Oz@O|@SdAU~@Qn@YbA[`AIRIPIVQb@Yt@sB`EmA`C[v@"
                     },
                     "start_location" : {
                        "lat" : 46.4632921,
                        "lng" : -90.16178379999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 288
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 46.4676766,
                        "lng" : -90.19579209999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "ikrzGbynePo@~@Yn@q@rAeAjBWh@cAlBw@hB"
                     },
                     "start_location" : {
                        "lat" : 46.4659656,
                        "lng" : -90.19298379999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "55.9 km",
                        "value" : 55949
                     },
                     "duration" : {
                        "text" : "2 hours 33 mins",
                        "value" : 9201
                     },
                     "end_location" : {
                        "lat" : 46.605073,
                        "lng" : -90.85492719999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eUS-2 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_vrzGtjoePqAjCmK`T}DdIu@xAw@~AuA`DYr@_@`A_@~@c@rA_AzC_@tAc@~AGV]rAa@bB}A`HWnAQz@IZCPEXe@zBuAnGOn@]~A]|Ao@vCi@dCe@tB[xAETyEpTq@~CyJjd@oA|FoFvV{Gd[cB~HsDxPgBjIoA`G}@dE]zA_@hBc@hBcAtEi@jCm@tCMj@Mj@s@bDeAzE{@|D{@|DuBxJyA~Gg@xBiAlFsDxPyEtTaApEQv@Mn@ABa@lBo@rCi@hCYrA]dBShASjAQfAMfAMvAKjACl@G~@EjAEdAChB?V?v@?pA@zB@hU?lA?|C?hE@tG?lD@jJ?t@?tD?zG?b@@jD?vA?xB?~@@nC?N@`C?tB@~C@vB?^?|B@~C@vD?BBtI@jI@lA?nB@zC?fA@r@?|C?r@?lC@dB?vG@dE?zA?T?~C@`C?r@?fF?L@bE?bG@vT@lD?zA@hE@vK?zE?zCApKA~I?pE?lCCnL?xH?jBAtHAjE?|H?NCpJ?rGAnBA|@At@CtA?NCt@ExAElAK|BKrAIjA?DMvAK~@KjAEd@Gl@ObBEZKnASnBM~AIz@IjAIjAGpAC^Cr@Ch@IpBEtAChAErDArDCpEE|KEnECdDA|AA|@ExHIpREdG?r@Ar@CnEAvCAdDC|CAzCAr@A|COdZIhOA|CCnEAzCAr@A|CAr@GxNCjEAtC?JC|BGtC?LIvAGrAKrAEl@Iz@QxAUxAIj@SfASdAWdASp@Qn@ENQf@[dA]dAQj@w@dCi@`BYfASv@CHMb@s@hCQl@s@hCOl@KXkB~G[nAa@tAeAvDWfAYjAQbAO~@ADEZEZK|@In@Gp@Cd@Gv@Cj@AJEbAEvGAjC?TA^?RAzD?TAzCA^?RElKCxG?\\EtLA|DErHAnCAfBAvE?f@CfD?h@?|@CdGA|A?|@At@AfB?hA?PAvA?r@?r@CpEAzEAtM?zC?r@Cni@?r@?r@A~P?r@?bG?|HAr@?hB?zC?zCAbK?nF?pEAlJ?nE?`FAjO?zG?`@?xB?zCAbL?nE?r@?dGA`L?nF?v@?fCApE?vP?nM?lBAlJ?@?~K?nAAxAArAGnBCn@Ez@MjBA@IdAOpAEVEXKt@Kr@Q~@_@dBS`A{@|C{@bDs@fC_EvN}DvNOl@oEdPQl@uAdFgBpGeDvL}BjIs@hCeA|DsA~EaBbGy@vCQl@AD[lAm@vBIV]pAcAdEI^U~@_@~AMf@c@hB}@zDyG~X}BvJmBfIoBhIEPi@xBmCdLADkAdFiAxEeAjEMh@ABmDbOeArE}EnSU~@w@dDaA~D[pA}@|D]vAe@lBqDrOyCfMoBjI_BvGuA|Fy@jDwBfJ[nAy@xDyAbGc@zAm@dBCFSj@]|@KTSh@c@dAu@bBsA|CsDtIkDdImArCqGbOcErJaCrFk@pAu@bBKVkAnCa@~@_@z@uB|EgFxLoAtC{@tBIRoClGkAlCw@jBWl@uA~CUh@uA`DyAhDwCbHQ^yE|KgC`GUh@eAdC_GbNCBi@pAuFrM{@pBaA|BWl@mArCqAtCwAdDUh@cCvFw@fBa@r@i@~@k@dAg@~@]h@w@lAY`@e@r@i@r@q@z@ORe@j@iArAmAvAIH[^aAfAgBtBqB~BoAvAiBtBwKjMgBrBML}@dAe@j@q@v@kArA}CpDSTkC|CmBzB[^yH~IgM|NqJ~KmFhGuQ~ScF|FqJ~KiD~DgE|EmC~C}ExFyAdB{ClDmFhGmS~UcF~FwGxHEDaAhAQT_BjBaAhA_AfAA@eAlA_AhAmAtAeAnAA@_@d@e@l@[`@[b@_@j@a@p@i@x@i@|@i@bAe@|@a@t@_@x@_@z@_@z@c@jAi@vAe@nAk@jBUt@Ux@]lAOp@[rAu@fD{@bEw@tDkAtF{@~D_@dBi@hCQr@Oj@Oh@Oh@ABM^K\\ADQd@Ob@Ul@Yp@e@bAc@`ACFi@hAUf@IPqAnCaCfF{A`DyF|LqCdG_@v@wA|Cs@|AsExJUf@kJfSeIbQgA`C}B`FcAvBe@`AuDdIk@lA_@v@GP}@lBaArBADi@pAc@fAe@pAWr@ADSj@_@hA[dAYbAELa@vASz@Sz@Oh@Ov@YrAc@zB[dBaCrNiAbHe@rCeCdOY|AU~ASxAMbACNOtAQ`BQhBEn@Iz@K`BM|BIpBGtBG~BAfAClC?jC@f@?rABxBD`BD~AHjBHdBHxAHnA@LTxCTbCd@tFb@dFf@vFlDja@r@jIN`BNtBh@bG@Dd@lFHdAFv@T`DLzBLdCNxCPbEJhDHlDBxABpAD~B@rA?~A@vA?pB?fB?RAdDAbECvHEtNM~_@G|OM~b@EpNAnCCrE?p@?fA?xC@rC?j@?rA?fI@jG?pH?~@@~PD~fA@hO?bLDlj@?dH@rM?dF?@?jFE~NE~QExNA~GCbIAxHEvMEfTKrd@EzRCxHA|C?r@GvWEtP?fCEpAErFDvI@~A@pE@bE@dN?fC@bG@`E?jF@dA@lAH~@Dl@D\\Jl@Ln@Lj@Pp@Ph@Vv@h@zAHT`@dAL`@`@lAh@bBRZxBvGf@vA~@jCh@|Ah@`BrA~DvBpGn@nB"
                     },
                     "start_location" : {
                        "lat" : 46.4676766,
                        "lng" : -90.19579209999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1001
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 173
                     },
                     "end_location" : {
                        "lat" : 46.6020083,
                        "lng" : -90.8650191
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTri-County Corridor\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "upm{GhbpiPWTGJKPID]H]N[VEHAFBLLZ@NFd@D`@L|@Jz@Fx@AJGXIZU~@EN?H?H@DBFFH|@x@HFTLTNVXX^^h@RZb@b@h@j@LL@BJNHPFRH^J\\`@hBNr@r@xCXpAXrAJh@Jh@Hj@Jf@Ld@VhAd@pBFRDHHDJDDFDFHHJFPD"
                     },
                     "start_location" : {
                        "lat" : 46.605073,
                        "lng" : -90.85492719999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 208
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 46.6014044,
                        "lng" : -90.86756419999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eTri-County Corridor\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "q}l{GjariPPxAHl@Dl@DZHZZfAH^\\fBBP?L?L?N"
                     },
                     "start_location" : {
                        "lat" : 46.6020083,
                        "lng" : -90.8650191
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "17 m",
                        "value" : 17
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 46.6015379,
                        "lng" : -90.867684
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eTri-County Corridor\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wyl{GfqriPWTC@"
                     },
                     "start_location" : {
                        "lat" : 46.6014044,
                        "lng" : -90.86756419999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 218
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 33
                     },
                     "end_location" : {
                        "lat" : 46.60134310000001,
                        "lng" : -90.8705123
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eTri-County Corridor\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "szl{G~qriP?@Dn@Dp@@b@Dp@BT@LD`@@X?`@?t@Ap@?V?X@f@Dv@"
                     },
                     "start_location" : {
                        "lat" : 46.6015379,
                        "lng" : -90.867684
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7 m",
                        "value" : 7
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 46.6012865,
                        "lng" : -90.87046389999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eTri-County Corridor\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kyl{GtcsiPHI"
                     },
                     "start_location" : {
                        "lat" : 46.60134310000001,
                        "lng" : -90.8705123
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 505
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : 46.5991924,
                        "lng" : -90.8761234
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eTri-County Corridor\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ayl{GjcsiPPzAFf@HZ?@Lb@jC|HnBzFBJ@H@JCFAJCJ@RFVDXDPFNFLDH@F@B?L?LBPFPHLRJNPDP@PDL"
                     },
                     "start_location" : {
                        "lat" : 46.6012865,
                        "lng" : -90.87046389999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13 m",
                        "value" : 13
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 46.5990833,
                        "lng" : -90.8760549
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e9th Ave E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}kl{GvftiPTM"
                     },
                     "start_location" : {
                        "lat" : 46.5991924,
                        "lng" : -90.8761234
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 753
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 127
                     },
                     "end_location" : {
                        "lat" : 46.5966532,
                        "lng" : -90.88269989999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTri-County Corridor\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gkl{GhftiPnBtEXt@DP@RCf@GZEXALBN@DHPDFFBBBXD^JHDBH@JCJCFEFq@v@YZa@^ORg@h@KH?D@HDDd@NZFLFTVRPVRf@X\\ZXZJP\\p@R\\PZDHPVPTJNHXT|@HZPtA"
                     },
                     "start_location" : {
                        "lat" : 46.5990833,
                        "lng" : -90.8760549
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "68 m",
                        "value" : 68
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 46.5961177,
                        "lng" : -90.88225679999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePrentice Ave N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "a|k{GzouiPj@c@^Y\\Y"
                     },
                     "start_location" : {
                        "lat" : 46.5966532,
                        "lng" : -90.88269989999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 355
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 46.5939887,
                        "lng" : -90.88566499999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePulp Hoist Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWater St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Water St\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wxk{GbmuiP\\xA@Bn@dBn@rAzA~BlCbE~@jA"
                     },
                     "start_location" : {
                        "lat" : 46.5961177,
                        "lng" : -90.88225679999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "88 m",
                        "value" : 88
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 46.5933714,
                        "lng" : -90.8849501
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eEllis Ave N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mkk{GjbviPzBmC"
                     },
                     "start_location" : {
                        "lat" : 46.5939887,
                        "lng" : -90.88566499999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1606
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 266
                     },
                     "end_location" : {
                        "lat" : 46.58554119999999,
                        "lng" : -90.9019093
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qgk{G|}uiPN`@^j@RZj@z@@@PXVb@P\\P^h@dAZn@zAzCfA|B\\v@\\z@Vr@Th@@BXv@Rj@HZFTDT@BBJBNFJDJLPDFDLHRFVPf@Rv@d@fBd@|APl@Xx@Rj@Rj@FNFLTf@\\v@r@~Ab@bAr@|Ab@bA^x@Rd@f@hAj@pAf@hAd@hAN\\N`@FPDJFLDJFVDVBTDRJVJXZx@DLFLDHDNv@zCfAlEq@|@AHAL@N"
                     },
                     "start_location" : {
                        "lat" : 46.5933714,
                        "lng" : -90.8849501
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1152
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 193
                     },
                     "end_location" : {
                        "lat" : 46.58262910000001,
                        "lng" : -90.9152397
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "svi{G|gyiP?LBDFDRFH@FAF?XKDAD?BBDDHZNd@X~@FNFFFHHBF@@?^|@z@zB^|@^|@JRVz@ZhANp@d@rB\\vB?DFh@@\\DZJn@@\\@l@@ZF~@JxALlBNhBHvABxA@rAD~A?H@~@ApCI~CCdACrBE~AEbA"
                     },
                     "start_location" : {
                        "lat" : 46.58554119999999,
                        "lng" : -90.9019093
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 661
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 116
                     },
                     "end_location" : {
                        "lat" : 46.5838777,
                        "lng" : -90.9234142
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eBeach\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mdi{Gf{{iPEvCCdC?JKlBGr@Eh@Ad@GpAOnBUv@Y`Ao@bFe@vDy@|D[xAAJAH@J@JBJDFTR"
                     },
                     "start_location" : {
                        "lat" : 46.58262910000001,
                        "lng" : -90.9152397
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2447
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 456
                     },
                     "end_location" : {
                        "lat" : 46.5875437,
                        "lng" : -90.95426209999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-2 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gli{Ghn}iPoCfKcArDcAvD[hAOl@UbA[~AO|@Ip@CLIj@MrAMrAC`@?B?B@B?BBLC^Ch@CXCr@?DSdFQ|E?HS`FShEGlAGlAQ`DUzDIlAMtBYvD{@lLG~@GfAQtCuApVGVCPC^El@IvAGvBAfA?pA@xADbBBfAD`AFdAJz@d@lCl@fCD\\B`@AZ?L"
                     },
                     "start_location" : {
                        "lat" : 46.5838777,
                        "lng" : -90.9234142
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "75.6 km",
                        "value" : 75638
                     },
                     "duration" : {
                        "text" : "3 hours 43 mins",
                        "value" : 13380
                     },
                     "end_location" : {
                        "lat" : 46.6042139,
                        "lng" : -91.8717032
                     },
                     "html_instructions" : "At the traffic circle, continue straight to stay on \u003cb\u003eUS-2 W\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "ccj{GbocjPA@A@A@?@ABA@?@A@AD?BAD?B?@?B?D?B?D@B?D@B@B@D@BBB@@?@@@@@@?@@B@@?BHRd@LPJRh@`AxAxCfA|A|@lA`@d@\\d@JJnB~BNRx@`A~@hAf@n@RLbAtA~AvBjBfC~@rAzAnBDDX`@fAvA`@j@dB`Cj@v@fBdCbCdD`ApAfBxB`CrCZZfBpBJHlBnBr@p@b@`@\\\\x@z@z@x@PRJJLLd@f@b@f@FHRTX^b@l@V^^j@?@p@bAT^j@x@f@`ATb@Rb@?@`@x@`@|@d@fAVl@Vt@FPPd@p@pBPh@b@zAFXJ^\\vATbALt@DNTjAVxALx@v@pEDVb@lC\\pBb@fCVvAf@vC`@`C^bC\\nBh@~C\\rBf@tCzAbJ~@pFf@rCZlBZlB^zBLn@XfB`AbGDX^zB^|B`@~BXxAFZHb@VnAJ`@\\|AXhA@DTz@\\hAXdAV|@FPNb@Tl@Vp@tAvDpAnDpAjD~BnGlClHvAvDdCzGp@fBPf@n@dBb@hAf@tAf@tAzBdG~AjEpAjDnBlFzCdIBFtAtDjAbDLXpHjSzDjKr@nBlAfDx@tBj@~AjA~CbAnCp@lBl@dBBF|AhEbCvGPd@nAbDjAbDLZ`DzIJVp@hBbAnCt@rBd@pAv@tBx@zB|@`CFRv@tBXt@|@`CvAvDd@pAdArC`AhCHRPd@^bATn@Vr@Tn@j@zAr@nBj@|A@@h@xAj@|AZ~@DNh@bB^jAb@zAZjA`@|A~AlGz@lDf@xBf@lBPp@J^BHPv@v@vCb@dBx@hDLh@`BzG`AxDPp@Ld@Np@ZlAf@pBBFJd@b@bBn@lCVbAf@nBf@lBFX\\rAPv@Lf@ZlA\\rAXnA`@zALh@p@nCX~@`@bBf@pBlB~HV~@d@nBDNRt@XjABHLh@`@|A^fBBJj@zBV|@J^J`@DNFTVdALt@b@bCJh@@HRvAF\\LbAJdAFl@Hx@Dl@Dh@Df@FdAD`AB~@DvAFdCFrDBbCFjDP~JJbGH|DBhAFzCFtDLdGVnNRzJJhG\\bRDfCLlF?RDlCF~BBvANfHHdDFzDD~CBjAJ~EF~C?HH|DFxDJlFH|DHpEJvF@h@FhDFtC@^BnBDjB@h@BvADrB?BD|BHzDBfBBvA@PBtABbAB~AFvC@p@BzABhA@h@BhAF|CF|CF~CBjA@`AF`DJpF@ZDrCHtDBlB?fA@nBAvA?dACvACzACtACd@C|@IfBEp@Cl@?BOzDWvFKdCCr@SnEOnDKdCCt@MxC?FO`DQfECj@MpCAXCb@G|ACl@KjBCh@GhBO|CInBK`CInBGxAAZEdAA\\GtAGfBE`BGpBCjAC`AA`ACxBCjC?`@AtBA`B?~@?fA?fDA`G?lB?bCAxA?dEAjE?bB?~BCxN?`AAhB?hAAvICdY?bJA`HC~TAxTAfD?rFA|NAnDApD?V?rGCjQCvHAfG?pDAbH?r@AdGAhOApEAhH?lD?P@xI?~JAbF?jG?rCAxH?j@?bDAlC?V?vB?vBAhB?pAAdAAn@Cz@EnAEt@Ef@Cf@Iz@I|@Ir@Gf@CTEVKr@Mt@UpAg@bCi@jCI`@Qt@Ov@Kd@GVETGVETe@|Bw@pDm@rCAFm@pCI\\c@nB{@bEAFi@fC]~ACL}@dE{@`EETI`@EL]dB[xACHa@lBSdAa@jBWrAk@nCy@~Di@nCk@lCk@nCuA~Gm@rCuAtGMn@]bB]~A[zAOt@WlAg@~BMj@o@~Cs@dDu@tDYpA_@hBaAtEUlAg@~Bg@bCo@zCCLI`@u@nDq@bDy@vDEVwDtQUfAa@pBETe@xBMj@k@lCc@xBUhAOn@CLc@vBQx@_@fBYtAGTc@zBg@~BYvAUbAOx@[tAk@pCS~@IZWhAm@`CK\\a@|AOj@YdAYbA{@|Ck@tBq@hCk@pBYdACFo@bCIZ_@tAQr@c@bBe@~AYhAa@xAYdAW|@w@xCELYdAYjAQx@Mn@I`@M|@Kp@If@Gj@CHGn@Ed@Eh@Gt@G|@Eh@Cp@Ad@ARA\\AX?@?^Ab@?`@?B?r@?N?p@?z@@n@@Z@X@T@PBl@@^Bf@B\\?BDj@@@Fr@@NJz@BXJz@Df@LbAD^Hz@NnARhBHx@BTRhBRfBb@bE\\`D\\`DTxBD\\P~AHv@Hn@RlBVxBJbALdAHn@Fp@Hz@Df@D`@Bd@@VBd@@XBf@?l@@t@AtAAX?BChAEz@ANCf@Eb@Eb@Gh@CPE\\Gd@GVG`@Ml@Id@Qr@CHOh@cAjDaAhD[dAe@~Aw@fCOf@o@|BgArDIX}@`Da@rAGN[jAQj@c@zAKZi@jBGRw@jCY`Au@fCo@tBuAxE[fAe@xAkBlGoAbEIZ}BzHc@zAw@hC_@rAUr@_@pAUt@u@fCyFxRgAtDgAtD{EfPw@pC_@pAg@`BMb@Y~@Mb@ADWz@[dA}@xCcAjDK\\{@xCKZw@lCaAfD{@xCg@`BOl@[hAWhAQ|@AFQ|@ObAM~@OdAEf@ALGf@CZCXAVEl@Ep@Cx@C^Ad@?PAPAr@AbA?vC?jD?`D?|C@xB?~@?|B?x@@p@?n@?lB?lC?t@?`C?jB?|B?H?xA@~C?B?tC?v@?dE@fD?xD@xC?pD?~C?^?`A?lA?bB?d@?`@?P@hA?xA?xA?pA?bA?~@?v@?b@?N?rA@xC?fC?`B?B?n@?\\?bC@xC?fB?pA?vA?xA?V?lA?nB@~A?tB?vB?f@?nC?t@?~@?t@@lD?tC?|@?nC?~A?h@@zE?fG@~B?rA?vC?hE@nC?lB?zA?tB?~D?dA?r@@rB?hB?lA@~D?zC?X?nA?L?|@?|B?jA@zE?jDBpH@dE?pABjH?v@?tC@hBEtA?\\C`AAJEpAAb@Cx@e@lOQbGCbACbAI|BIpCCl@A\\C`AElBAXCjAC~@CxBAhAA^E`CCrBCvBIhEEzDCnAA`AC|@?NClAAz@An@A^C^EbAG|@InAIhAMlAE^Gh@UbBYnBWzAQjAMp@If@Y`B]lBAJWzASpAQnAQ|AY`COdBGv@Gj@Ep@CVC\\ATCZEfAIpAGjBGvBE`BCjAAfA?z@?vB?`C@`I?nE?d@?zA@pH@lI?v@?vC@b@@rE?v@DzG?^HrHFrEBdE@b@@tFAxDAxCA\\?ZClBChBE`BGvECzAGhEItEAZ?j@CtAA~AC~BCpCAjCAfC?dA?r@?bCAvB?hBAnB?F?l@?v@?bBAT?\\?pA?V?fB?`BAx@?t@?r@AbG?|@A|C?TAtC?nB?`@?dAAtA?xC?zB?`B?bC@`E?vB?pA@|C@x@@xD@jC@hC@rA?R@|A@tB@fC@dB@|B@fB?D?~@@rA@x@?N?P@T@V?X@P@L?N@NBb@Dl@@XBR@PFp@Hl@Db@Hf@N`AHf@DTH\\F\\H^HZFTJb@JZJ\\HXJXFP\\~@P^N\\P^JRP\\d@z@PZT`@R^\\l@l@dAXf@f@~@pA~BPZd@x@t@tA~AtCPXhArBR^l@fA|@`BXh@Vh@Rd@Vh@\\z@Rf@Rh@L^N\\DLDJFTHRL^HVNd@Nf@Nf@Ld@Nh@J`@Np@Rv@BJLj@?BPt@Jh@BJHb@DVLt@Jl@PrAPfAJz@NpA@NJ|@HdAJfAJrAJnAH`AJjAJlAPpBLxADZJjAHjAFl@JlAJfAB^Fl@Ft@BXHjAJlABf@Df@Bb@@LBXDf@HlAPzCHjAP|CPxCFnAHhB\\tHJjCLlCNnDHdBD|@@TFlADx@HtBDt@@h@Bb@Bh@D~@@RB`@@d@Dp@RbFVzF\\jID`AFvAD~@LhCb@dJLbDDdAFlAPzERbGNnDBr@B|@LpDBf@HbCNxDHhC@VFxAFrBNdDD`ABb@D|@Dj@LrBFhARpCDd@LlBVnC?@TdCLtAPjBDXRfB\\xCNtAZnCR`BJz@BLRfBHj@Jv@D^?BHf@?DHf@Hx@Hv@Hl@Hp@BL^`DZhCNnAJx@Hp@RfBf@dE@JFd@Hp@PxAR`BL~@nAlKXxBVbCHp@\\tCHr@rA|KH|@JbA\\~Cb@xEn@bHZrDPjBNzA?BLrALjADl@JfAJ`ADh@Dj@Dn@B^B`@Bl@@d@Bt@?n@@f@?H?d@A|@At@Al@APElAGx@OdBK`AOhAUtAUhAI\\AHYjA_@vAGPKb@K\\Sp@GRg@vAYx@m@`Bm@tAaArBCFk@fAaAdBw@pA}@rAk@t@oA~AoB~BcCrCyAbBk@r@g@j@uA~AaBpBqA|Ac@h@Y^]`@m@v@kA`Be@n@oAhBeA`BuAvBkB|CS\\cAfB_AfB}@hB_AhBoAnCYl@q@|AYn@y@lB}@|Bw@rBoBrFm@fBc@xA[`AWx@W|@[hASx@[fASv@a@fB]|AYvASlAu@fEq@`EKp@ADo@|Da@nCuAlIg@`D{@~Ec@pCOz@]tBYjBk@lDWbBa@jCeA|GeBpKc@fCqB~L}A`JiA~GKn@k@dDg@vCCJWfBc@xDeCzOaBhKyBjN_BhKKp@mBzLw@~E_AdGa@bCg@hDmG`a@mFb\\iCzOeDdSeAlGQdAOv@Mn@EVMd@IXI\\Wx@AB[`Aw@dCuAjE_HrT}@vC_AzCaA~CiAnDmA~Dk@jBu@`Cy@fCo@|BQp@I\\GX?@Kb@Kd@ETKp@Kn@?@YdBIh@Kp@e@|C}@vFw@nFk@pDo@zDYhBYlB[lBe@xCq@pEi@lDEVw@`FCR[nBM|@CVANEb@AFCb@Ed@Cd@C`@Ar@Cz@C`A?^?bC?`C@pE?jA@~I@fL@zE@r@?v@?bB?t@?fBAxH?pE?pCA|PClH?dCCvL?bGAbFAjHCvMAtG?v@?z@?lAB`A@b@BjADv@Dt@FhAH|@LnADb@Fh@F\\DZHl@F\\Nv@P~@TbALd@Ld@@FZlADLb@dB\\pAb@|A`BdGbAvDlAlEnAvE|AzFz@`D|@dDd@dBt@nCfBxGd@bB^rAd@fBlAvENf@Rz@Lj@FZPx@VxAZ~BLjAJ~@Bf@Fp@D`ABj@Bb@B|@@x@@|@?N@l@?r@AbDCzFC~BCxFAvAAr@AlAAzBA`CC|DE~FC~AIfQCxFElJAhBC`FCrDE|GCpFMzUAjAC|DCrG?lFE~BC~E@|AA`C@`@?rB?`@AvE?~@CbD?HAfI?xCAfC?pD?~@@V@l@?VBn@Bd@Dl@LzAL`BPxBAH?B@X@Z@d@?z@?t@A^A\\Cb@Ez@ANCNCXADGh@ETGZUdAKb@IVa@rAUn@o@|A_AxBcA`CaCxFk@rA{AlDm@xAk@nAA@sA|CIRCFYn@Yn@ADSb@GJ{@lB?@A@CPaEhJqBtE{@lB}CbHa@`Ai@nA{AjD}BhFyAhDgBrE{@`C[z@_@hA[|@c@nAc@vAa@tAc@vAWbAk@rBQp@w@lCe@|AABq@~BELMd@Sr@Oh@St@[fAsAbFe@jBQp@k@nBYdAu@fCOf@g@fBu@hCw@pCMh@Oj@On@Sz@_@dB[|Am@nCQx@a@lBYlAc@bBa@~AK^s@lCY~@Ux@[jAk@zBiAnEOn@iA|E}@zEeApFs@vE[rBK~@In@WzBIv@Gj@MfAKlASvBY`EQ|CIdBAVMhCGdBGlBC`BEpCAdACrAAdB?tAChAA`CAvAA`BClGAnA?x@SrZ?NEfCGvCCx@EbBIjBGzCIdBIxBAREr@IvAq@|M?@M|CMbDE|A"
                     },
                     "start_location" : {
                        "lat" : 46.5875437,
                        "lng" : -90.95426209999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "39 m",
                        "value" : 39
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 46.6045667,
                        "lng" : -91.87167509999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eTri-County Corridor\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ikm{GbuvoPgAC"
                     },
                     "start_location" : {
                        "lat" : 46.6042139,
                        "lng" : -91.8717032
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13.1 km",
                        "value" : 13101
                     },
                     "duration" : {
                        "text" : "36 mins",
                        "value" : 2144
                     },
                     "end_location" : {
                        "lat" : 46.6717502,
                        "lng" : -92.00036539999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTri-County Corridor\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qmm{G~tvoPIbCElAAPEtAA~@?vA@xABdB@`CCjDMpFE`BQtEKjFA\\[~KQbGCr@SxHAHKxFO|FGfBEfBEfBGr@ARQbGI|CQbGW`Kg@pRIzCSvHM|Ei@nRIhBUdEKpAIp@QpAc@rCq@nD_AjEYvAgBvIOn@[|Ay@~DMj@gArF_CpL{@hEaFvVm@~CaAdDOb@uCpHqChHgCtGgCrGyAxDMZyH~R}B|FcElKw@pBeHpQeHrQgDrIsCfHoDbJmCjEA@[`@uBlCs@r@sDnD]ZwAvAuCrC{@x@oDpDoEnEqDrDsCrC]\\uBtBaBbBwBtBmEnEeJ`J]\\yCxCy@t@sBbCo@|@Yb@w@hAyEfHcA|AwDzFyAzB{A~B}GdKABkFbIeGdJwDzFwAvB}CtEcCpD}A~BuFrI{CvE]h@}D~EA@{G~Gi@f@oHvGyBnBc@^kHnGyBlB[XqItHoHvG{BpBwAnAmC`Ck@`@}BbBmCnBqA~@iBtAQLeBpAeBnAOL{CzBiCjBEDmBvAs@h@qB`B_A|@gAbAiAlAw@z@"
                     },
                     "start_location" : {
                        "lat" : 46.6045667,
                        "lng" : -91.87167509999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.5 km",
                        "value" : 5505
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 965
                     },
                     "end_location" : {
                        "lat" : 46.7081791,
                        "lng" : -92.04753509999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eOsaugie Trail\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mqz{GhyopPsFxGgAtAUVw@~@CBs@z@EDSVC@Y^A@Y`@OP_BnB]`@[^gAnA}@hAqB`CsChDoCbDW\\[^_CrCQToB~Bk@p@GJ}BnCwBfC}ApBOTc@l@OT}@vAw@pA_@p@y@tACDo@lAWd@w@vAQXYd@SXCJGLMTQ^Q\\MRS^[j@CDWb@i@v@{AxBcBzBU\\IJkDvE[b@EFCDILwDfFINIH{C~DY`@EFIJIJyDnFIJSVc@n@{IzLGJsEnGeDrEsFvHmGxI_AnAgAzA{@lAo@z@oAfBEDUZaApAORk@r@[^SLSHOH]h@GLi@~@i@p@_@\\IHCVCHEJIHGHCF@LFLj@dAFNBHAJ?HCHEF[b@kCvDo@z@Y`@KNw@dAg@r@_@f@q@~@SXGH_ApAOTKNMR?@EHCFGT?H?BA@A@C?A?CCGECAE@IBIDg@n@IPEPIXIHWRMTGRENEHCDCBGDODIDGDKJSXA?i@x@c@l@YZURKNGJOVA@mAhBm@x@gAbBSZCBi@x@[`@KPMPi@v@k@x@sAdBGFq@z@_@`@QRA@?@A@?@?@@BBF"
                     },
                     "start_location" : {
                        "lat" : 46.6717502,
                        "lng" : -92.00036539999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "40 m",
                        "value" : 40
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 46.708059,
                        "lng" : -92.0479404
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eOsaugie Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "cua|Gb`ypPN\\FJHN?@?@?@?@?@IJ"
                     },
                     "start_location" : {
                        "lat" : 46.7081791,
                        "lng" : -92.04753509999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.9 km",
                        "value" : 1931
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 354
                     },
                     "end_location" : {
                        "lat" : 46.7203492,
                        "lng" : -92.0642496
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eOsaugie Trail\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "kta|GrbypPGHA@?B?B@@@DFJJPBD@D@H?F?FCFCFINSVEHYf@Ud@CDYh@SXINIFIBEAK?QCKCM?KFKFIHEDQPSTQRA@GLMRQ\\GLA@GLEJCJALANAb@EXGXELINCFSX[`@?@YZOP_@b@QTG@C?C?E@WPIJOPYZc@d@Y\\CBYb@MPMXOd@Md@?@Up@W\\ILo@|@qAbBYb@mA`Bk@t@cB`CqB~COPKNGFc@b@[ZUVi@n@]d@KXITa@p@A@i@x@_@h@wBxCqAhBy@rAk@z@k@~@CD_@j@_@p@]p@KTEPCFGPELEDWJQNQNIJW^U`@U\\o@bAS\\IFGBK@MASMGEKI"
                     },
                     "start_location" : {
                        "lat" : 46.708059,
                        "lng" : -92.0479404
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 450
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 90
                     },
                     "end_location" : {
                        "lat" : 46.7223163,
                        "lng" : -92.06839309999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMarina Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ead|Gph|pPIVqDxDg@h@iAjAy@fAINc@t@g@lAMf@E^?JAR@^Hh@N`@JP`@p@"
                     },
                     "start_location" : {
                        "lat" : 46.7203492,
                        "lng" : -92.0642496
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 539
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 110
                     },
                     "end_location" : {
                        "lat" : 46.7256683,
                        "lng" : -92.0735064
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE 2nd St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "omd|Glb}pPaAdBm@hAoC~EqBrDuA~BiApBqBdDYb@"
                     },
                     "start_location" : {
                        "lat" : 46.7223163,
                        "lng" : -92.06839309999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "44 m",
                        "value" : 44
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 46.7259576,
                        "lng" : -92.07311009999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eE St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mbe|Glb~pPy@oA"
                     },
                     "start_location" : {
                        "lat" : 46.7256683,
                        "lng" : -92.0735064
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 388
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 98
                     },
                     "end_location" : {
                        "lat" : 46.727805,
                        "lng" : -92.0771249
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eE 1st St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gde|G|_~pP_E`HuBnDc@t@Q`@Cb@?v@A`A?J?V@t@"
                     },
                     "start_location" : {
                        "lat" : 46.7259576,
                        "lng" : -92.07311009999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.2 km",
                        "value" : 4203
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 857
                     },
                     "end_location" : {
                        "lat" : 46.7229004,
                        "lng" : -92.125806
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eUS-2 Truck\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eWinter St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow US-2 Truck\u003c/div\u003e",
                     "polyline" : {
                        "points" : "woe|G~x~pP?v@?RCfF?hC?zB?BAlI?Z?l@?rA?r@AdE?J?dH?R?tB?p@AdGA|G?J?~GAfH?nG?VAfH?bH?vC?DAx@?xA?r@?hB?rC?jHAdHAhH?XAbH?jH?xB?nE?z@AvD?fB?rCAh@?D?dA?n@?F?j@AzK?zE?j@?^?^?dB?nHA~@?r@A`L?jA?hJAnC?d@@d@@R?RBVD^BRFTFZL\\DLBDHRFL?@HLLNNRRRLJNJPHNFLDTFNBL@X?b@?tB@jCBjB?b@@hC@d@?b@?b@?b@@@?"
                     },
                     "start_location" : {
                        "lat" : 46.727805,
                        "lng" : -92.0771249
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.0 km",
                        "value" : 4017
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 832
                     },
                     "end_location" : {
                        "lat" : 46.74727439999999,
                        "lng" : -92.1531634
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRichard I. Bong Bridge\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Minnesota\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cqd|GhihqP?J?f@Ar@?n@?B?hB?f@AJAx@Al@?@Ep@?HEh@Ef@AJGr@In@ADMp@Id@Or@Op@Qr@IXOb@c@nAMXQ^Ub@GJKRYf@a@l@CBYb@GHi@p@ED]Z[Va@ZGBYPQJa@Pa@N_@Lo@PC@c@JGB{@VUFo@TODcAXc@Pa@Ps@b@i@^]V_@^YXw@dA?@s@jAWf@IPc@dASh@Of@Qn@UbASx@Oz@G^EXOtAAHWxBS|AUnBSjBOlAS`BOrASlBQhBY`COrAIh@}@tGQr@Mf@o@jBSb@GLeApB[d@[l@a@d@_@`@_@\\g@b@a@Va@XUJw@^e@R_@L[H_AP_BZaARmCf@mB\\]H}@V{@V{@Zc@Ng@RiAj@]ROJSNKHQLMJUR_@`@EB[^EFUXc@l@SV]b@i@p@ILWXEDSPSRSNGDYNA@]PGBC?IDKDIDWFA?QDUDS@Q@Q@A?G?E@SAU?MAIASCICIA_@KCAUIMGIE[QIGQMMIGGUUEEg@m@GMIOGGIK_@g@q@}@AAs@aAo@{@IKQOOIMEOAa@?UNIFMNKR_@l@a@p@ABgBvCEHAF?FDP"
                     },
                     "start_location" : {
                        "lat" : 46.7229004,
                        "lng" : -92.125806
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13 m",
                        "value" : 13
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 46.7473515,
                        "lng" : -92.15329140000001
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN 43rd Ave W\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "mii|GftmqPOX"
                     },
                     "start_location" : {
                        "lat" : 46.74727439999999,
                        "lng" : -92.1531634
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 418
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 98
                     },
                     "end_location" : {
                        "lat" : 46.7446456,
                        "lng" : -92.15710039999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eW 1st St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}ii|G`umqPXd@n@`Ab@r@l@~@Xd@b@n@hBtCr@hAz@rAT\\PX~@zA"
                     },
                     "start_location" : {
                        "lat" : 46.7473515,
                        "lng" : -92.15329140000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 768
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 240
                     },
                     "end_location" : {
                        "lat" : 46.7493869,
                        "lng" : -92.16440190000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN 46th Ave W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ayh|GzlnqPIj@c@x@U`@cAhBKN}AnCQXOVc@t@QZcAdBcAdBeAfBcAdBcAfBcAfBcAfBeAdBk@~@Yd@"
                     },
                     "start_location" : {
                        "lat" : 46.7446456,
                        "lng" : -92.15710039999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 295
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 101
                     },
                     "end_location" : {
                        "lat" : 46.74747550000001,
                        "lng" : -92.1670793
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eW 8th St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uvi|GnzoqP~DjGhBrCrAvB"
                     },
                     "start_location" : {
                        "lat" : 46.7493869,
                        "lng" : -92.16440190000002
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 370
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 187
                     },
                     "end_location" : {
                        "lat" : 46.7474921,
                        "lng" : -92.1719375
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHuntington St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wji|GfkpqP?^?D?n@?fBA|A@tB?J?h@AfB@dGAtC"
                     },
                     "start_location" : {
                        "lat" : 46.74747550000001,
                        "lng" : -92.1670793
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 101
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 73
                     },
                     "end_location" : {
                        "lat" : 46.748399,
                        "lng" : -92.17193619999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eN 59th Ave W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yji|GriqqPoC?e@?"
                     },
                     "start_location" : {
                        "lat" : 46.7474921,
                        "lng" : -92.1719375
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1291
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 656
                     },
                     "end_location" : {
                        "lat" : 46.7503403,
                        "lng" : -92.1878387
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHighland St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "opi|GriqqP?\\?vBAjE@tA?r@?r@?zH?xD@nI?p@?P?~A@rBDjB@l@Bv@FvC?@DjBBz@@~@Cf@C`@CZE\\GXI`@Od@Sh@q@tAe@t@_@n@INOXSZQ^[r@]`ACDc@rAIPWp@M^Ur@"
                     },
                     "start_location" : {
                        "lat" : 46.748399,
                        "lng" : -92.17193619999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2406
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 644
                     },
                     "end_location" : {
                        "lat" : 46.7470279,
                        "lng" : -92.21706949999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSkyline Pkwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVinland St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Vinland St\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "s|i|G~ltqPVd@JPFRFVDJHZFPBF@DBFJRJPLNHHhAt@LF~@j@dAj@\\RB@TPDBRP\\^FHPPDHPVNVNVJXLXJXRj@Nn@?@H\\F^Hj@Ff@Bb@Dn@@Z?Z@V?F@bL?hBAdDApE?bE?r@CfG?zCC`NA|CAxEApE?fG?hG?RAzA?hA?~@?~G@fG?r@?fB@t@?x@@fO"
                     },
                     "start_location" : {
                        "lat" : 46.7503403,
                        "lng" : -92.1878387
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 678
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 149
                     },
                     "end_location" : {
                        "lat" : 46.7468878,
                        "lng" : -92.22595299999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003e5th St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}gi|GtczqP?r@BdG?t@?TBhC?bE?pE@xB?vF?`CBpE?~@LbA"
                     },
                     "start_location" : {
                        "lat" : 46.7470279,
                        "lng" : -92.21706949999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "19.2 km",
                        "value" : 19156
                     },
                     "duration" : {
                        "text" : "57 mins",
                        "value" : 3394
                     },
                     "end_location" : {
                        "lat" : 46.8465796,
                        "lng" : -92.41737169999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-2 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "agi|Gd{{qPOXa@p@OTGJgBvC]f@sAvBg@t@m@z@QT_@b@MNu@t@a@`@o@l@_@X[TWPUNe@ZQJ[PA?k@X]P{Av@qDfBeD`BiB~@uBbAYNoB`AiB|@{@`@[R{@b@i@\\i@^c@ZYVUTYT_@`@Y\\YZ]d@SXKF[d@QVg@z@q@tAINCDELSb@Sh@a@jACHi@zAmBfGoAxDIZGXiAjDYt@Ut@e@pAc@rAO`@Sj@Sj@u@~Bi@|AIXoArDm@fBeA|CuBlGm@hBi@zAWv@ITa@nA[bAYx@?BgBfFq@tBSj@uBjGaB|Ea@pAg@vAg@xA}@nCq@hBa@fA_@|@[v@Wj@y@fBaAnBcBvCy@tAaBnCYd@iAlBgCbEcJbOeDpF_DhFg@v@}CdFaCzDgCdEsAxBU\\gCdEyCxEeAdBg@|@oAzBoA`CeAnBAD[n@MVc@t@CBsAzCeBtDYp@w@dBIRs@~Ag@hAc@`Ay@hBWj@]v@kBdE{@nBKb@Uf@Uf@MTw@hBuAhDUh@gAtC_AbCi@tAABwA|DGN]~@a@fAgAxC}FxOwDdKoClHkEnL]|@_@`AyA~DwB|FeBvE}AbEs@lBo@hBoAbDaAhCIT{@bCs@hBSj@_@bAw@rBa@jAEF_@dAa@fA_@dA[~@M`@Od@W|@Kb@Oh@I`@K^Kb@Kb@Kf@Ib@I`@Mr@Mv@Ih@Ij@Gb@CXKr@E`@Gd@Eh@E`@Gf@Eh@C`@Ch@Ed@GlAGhAKtBKtBCf@IfBK`CGrACd@Eh@Af@Cb@Cj@Cd@Cl@GfAKtBMrCKvBMzBKvBIrBGnAG`AEx@IfBCv@AF?DALGdAO`DMxCO~CEx@ARQbDMtCI`BGvAQ|DQlDQtDEfACh@AHm@rMSbECh@GhAEn@Cl@MhCKtBKhCATSpDStEg@xKqBpb@yBhe@]rHQ|D_@tHCt@Et@GlACb@KpAI`AOdBE`@ETIt@YhBIh@]rBSbAWfAYlAe@bB[hAc@tA[|@Yt@c@fA[r@[r@{@dBQXS^w@rA}@rAQVUXUZSTEFy@bA_AhAQR{AhBKJ_BhB?@k@n@aAjAkBxBsA~AeAnA}@bA_AhAuA`BuA~AcCtCgBtBcCrCqBbCi@l@o@t@uA`BaAjAkAtAkC|Cs@z@wA`BeAnACBWZmAvA{AhBWVkAtAONeBrBKJ[^mBzBiDbEaBnBQTm@p@mDdEuAbB_@b@GHWXk@p@sA~Aw@|@KJsChD_Xh[kC|Cw@~@gD|DiCxCGHiArAaCtCiBvBUX}@dAeCvCsA~AiBvBcCtCoBzB{@bAuAbBk@n@WZsA|Am@t@i@p@i@l@aAhAsA~Aq@v@[`@EFwAbBSVcAnA_AhAoA~AcAnA}@fA_AjA_AjAwAfBORKJWZc@h@qA~AcBvBe@l@_@d@w@v@YPUNg@^"
                     },
                     "start_location" : {
                        "lat" : 46.7468878,
                        "lng" : -92.22595299999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "57.0 km",
                        "value" : 57046
                     },
                     "duration" : {
                        "text" : "2 hours 45 mins",
                        "value" : 9907
                     },
                     "end_location" : {
                        "lat" : 47.00904389999999,
                        "lng" : -93.06868369999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eUS-2 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cv||GpgasPFrABh@HxADf@H`ABXBV@DFb@BRDVHj@BNBLLr@TfAFTDTb@hBp@jCp@tCJb@J^H`@DLHb@DRFVBL@JH^Jl@DXLv@Fh@BLFl@Fd@Db@Fr@Fv@Dd@Bf@Bb@Bt@Bx@@X@j@@f@?\\?R?X?f@?jAChC?j@At@ApB?j@Ar@C|C?r@A`BE`IAt@ApBAh@A|CAd@ClEAfDA^AjBCzHAzAA`CCvDAlAEjJ?BAr@EpEEdFEdGApE?lA?lACVAN?~@AhBAv@AlAEhHCpFEvFEdGCbD?h@?\\CjEE|FAtCM|RErIEpDAn@CjAMlF?JOhGOfHKnGIjDK`ECbAAN?h@q@hOWlFg@tLOzCShEM~BMpCa@|IOzCSpEG`AS`ESdEIvBCz@Cj@Cz@Ct@CzAAlAAv@?`BAdB@dB?lB@rE@zE@zB@|@@dF@jE?zB@~C@hG@lB?zA@`G@fA@bFBzG?~D@t@?dA?`@BnJ@nC@|C?r@?b@@`FDtRF`T?|@Jxd@Lhh@@rAD~UD~N?pCAX?|@Az@CbBChAItBGvAKvBQzCg@bJUhEQpCEr@Cd@SfDEr@Ev@En@KfBs@pMi@`J?FEj@OtC]hGADKvBI|ACf@Cl@?DCh@EzAE|ACnAAjA?`@?ZAvA@h@?`@?tAB|CBjGB|D?r@@bB@|A@xB?P?`@?VAr@EpBA^A\\AJCj@Ch@I`AEf@I`Ae@lGEj@]~DUnC_@jESbC[lDC\\UbCI~@Ed@q@rHGr@Gn@OfBOfBGp@CXCX_@lEGp@Gr@]xDGx@WxCGp@CZMtAMzAKdAOxAQzA?@Ip@Ir@Ip@AN[fCIp@Gp@a@lDEZIr@Kp@y@dH?@OjASdBEd@CJShB]zCS`BSdBOtASfBgAxJa@lDSfB[lCIz@Eh@OdBIzAGbBCbAChAAlAA~@ATA~C?bBAjB?xC?pEAnJ?fGAjL?`BCrQ?b@A~E?hOAt@?rH?D?zGA`A?fAApNEhIIxP?FEpJEbGGzMAxCIvKCfGCdGE`IGfJ?NGhHKdKE|DCdDIvJCvAGzHAr@KtK?n@KbLC|AEdGIzIA^CnCAtBAfC?jACpH?|@AhEAzMEvREjT?nD?vCF|HFzHJbLB|BLtNTrWJbLLlOJnJJbLHdIJnJFpEB|CJnJHhH\\p\\HzHHtHP`PJ`IHbHX`WPxMX|UFfGHdGNvMR`QHfGJnJb@d^v@fp@X|UJlJFjDBvB@hEBfGBnJ@|E@dGFvRHrWHtWDvM?`FB~E@vHBjNDlOBnKBvMBdLBnJ@dG@hB@nJ@|CCvRA`K?jE?rE?z@AvK?zD?T@lO@pE?rE@dG?dG?tD?\\?r@EbBEv@EfAIfAKlAQdBUjBETUnAO|@Op@]|AA@i@lB[bA[z@_@bAUl@a@|@[p@Yh@i@z@o@hAOTeBrCkCfEyC|E_CvDyC|EkEfHgBrCqLpRyKnQuF`J_CzDaE~GoAfCaEfIqEhJgBrD{IxQy@xA{AdCA@mBxCuBrCmA~A{@bAeA~@u@t@yArA{AtAaCzBSR]ZyArA{AtA]ZwBnBwDjDwApAiIvH}BvByCrCcGtF_IjHuDhDi[zYsUlTuClC}DrDw@r@aA|@aA~@q@n@k@l@wA~AuAdB{DzEyFdHsInKeD`EyDxEgKjMiZz^oNdQsCpD{MrPsIrKmF|G}D`Fc@j@q@t@eArAoBdCkElF_BnBq@x@y@`Aw@dAUVeBvBaDzDcBtB}AlBmDjEwDvEiBzBsA~A}BvCgArAy@bAeBvBk\\la@_Yn]_AjAiB|Bw@dAeBbC}BbEaB|CyA`Dw@rBqClIKZsCzIuBtGkDpK]hAwEzNeAbDqD`LiBxF}D~LiCbI[~@}EjOqNpc@_CnH_Kf[oHjUcBlFkE|MaAxC]hAkAfDu@nBg@rAw@fBWj@[p@Q^]p@c@x@_@r@w@xAo@dAi@z@UZ]h@aAnAs@|@[^m@r@c@d@wAzAEDk@l@{BzBwBxBkFjFe@d@gEfE{JzJ}A~A}P~PgNfNqArA}DzDo@n@y@|@}@fA{AdBc@j@ORuAnBk@r@OTi@x@c@v@c@r@w@|Ai@hA_@v@Sb@Uf@cD`I_@`AsFpNsElLcEpKqAfDi@tAUh@wAtDaBbEuBpFITkBxEkC~GaAbCg@tAoFhNuDrJoAdDyAtDcEnKaChG}C~HaBdEgCxGc@fAs@lB{BdG_ClG}BfGk@|AkDxJaAlCSj@KXoBrFe@nAm@`BWv@_C|GKXm@jBQd@Sp@A@Ur@W~@ERYnA]vAOp@Qz@gAtFkA|Fi@fCCLIb@Mn@Mn@k@pCQ~@cAbFUdAiArFuA|GMp@I\\eAdF}AzHs@nDo@~COt@cAbFe@~BI`@CLENGXi@tBW|@M^M`@g@zAc@hA"
                     },
                     "start_location" : {
                        "lat" : 46.8465796,
                        "lng" : -92.41737169999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "15.0 km",
                        "value" : 15045
                     },
                     "duration" : {
                        "text" : "44 mins",
                        "value" : 2644
                     },
                     "end_location" : {
                        "lat" : 47.0042887,
                        "lng" : -93.2609995
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMN-200 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "om|}Gfn`wPF\\BNBN@NB`@JpDD~@Bf@JpAHv@Fb@Db@Ln@Hf@VnAZnAVfAdGxUh@vBf@pBV|@vAtFr@pCn@hC~@nDFXhB`HhArE~@pDvAtFp@jCrB~Hb@jBPn@Pt@^~AVrA^nBPhARjAPhAPnAf@zDZxCp@xFjBdPl@fFj@bFt@jGpA~KXdCh@pEvBfRxAjM|@rHhBvOpAbL`BjNd@|D\\xCLjA?@Hp@Jv@HdAHt@Bf@HhABh@FnABf@Bz@@N@b@@l@?D@n@@`A?lA?nAAv@ChCEpAEx@Ez@MnCk@jKoI~~AGnAKtBEjAGxAEnBCrBC~C?vB@|BDdFD|EBnDJjK@pBJnKFpI?P@`@B|C?JDbDBtCFfEFbEBbADjDHnFRvMF|EHpEZjT\\~UBhBBfBP~KDzC@bB?`BAhA?R?^AzACvAEfBErAIpBGrAMtBSxCIhA?DaA|NoAtRGbAY~DEp@yBp\\iDbi@MfBmBnYaAhOU`DG~@Gv@QlBWxBObAQpAEPKp@]jB[tAMl@Ol@g@hBi@jBy@rCSr@yAbFwC|Ju@nCe@lB_@lB]nBOpAEZOpAIhAKnAGnAGvAA`@AjAArB?rCAr@?F@zD?dI?bI?xH?zH@bV@~Y?dL?`A?tD?tD?rC?~A?|B@vB?`H?`I?dC?fC?hAAdA"
                     },
                     "start_location" : {
                        "lat" : 47.00904389999999,
                        "lng" : -93.06868369999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 619
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 124
                     },
                     "end_location" : {
                        "lat" : 46.9999557,
                        "lng" : -93.26611439999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMN-200 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMN-65 S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yo{}Gf`fxP`@f@h@p@nA|AFFvAfBdC~C~AnBpClDt@~@vDvE"
                     },
                     "start_location" : {
                        "lat" : 47.0042887,
                        "lng" : -93.2609995
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2318
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 398
                     },
                     "end_location" : {
                        "lat" : 47.005013,
                        "lng" : -93.2944554
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMN-200 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wtz}Gd`gxPuA~CcAzBwA~CcAzBWl@m@rAUf@EHO^oApCa@z@k@pAUf@s@~Ao@zA]~@]dA[bAU`AUbAWtAU|AEZIl@Iz@Gr@InACd@Cr@EtA?FEdCCzBa@xZC|B?h@ElCQtNKrIE|CG`FGhE?n@?dA@lA?ZDhAFpAFdAJfA"
                     },
                     "start_location" : {
                        "lat" : 46.9999557,
                        "lng" : -93.26611439999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.6 km",
                        "value" : 3577
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 626
                     },
                     "end_location" : {
                        "lat" : 47.0281931,
                        "lng" : -93.3199338
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCo Hwy 10\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGreat River Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Co Hwy 10\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "it{}GjqlxP]?]?}E?a@?kB?c@?gA?uF?mA?yG?sDAyA@yABi@Bc@BiADkADaADmCJq@Du@Ha@Fi@L_@J[Jk@Tc@PUJ[Pe@Zo@b@c@\\IHYV]\\_@b@KL[b@c@n@c@r@[l@i@jA]z@ENk@`B{DnLgAfDSn@Sl@}DtLiF|OiKl[cFnOyApE{@jCM^cClHc@rAiCbIa@jA"
                     },
                     "start_location" : {
                        "lat" : 47.005013,
                        "lng" : -93.2944554
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "29.5 km",
                        "value" : 29461
                     },
                     "duration" : {
                        "text" : "1 hour 25 mins",
                        "value" : 5097
                     },
                     "end_location" : {
                        "lat" : 47.2305119,
                        "lng" : -93.521063
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRiver Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ee`~GppqxPSl@mApDyB|G}ClJm@hBg@zAM`@m@jBy@dCu@xB?@}@nCKXkAnD_@fA]`Ao@xAc@`AS^Yf@KPsC`FeEtHqCfFeEpHc@t@{AtCu@dBELm@dB_AxCeDfLc@zA{@xCQj@O`@MZCHITm@~ASb@e@~@_@t@]l@_@j@oAhBs@fA]f@gBhCaDtEwDtFyB~CaAvAs@fAk@z@iBxCYj@a@z@c@hAc@tA_@tAWpAERMp@AFs@`FsCbRoAhICP_AdGeBvHWbAOn@oAjF_AvDo@lCEL{AjGOn@}@vD_@bBOn@ADMh@Ml@[bBCPUnA}AdJo@vDy@dFGXwAnIsErXq@zDkAxGS~@W|@K^GPc@hA]x@y@zAu@nAk@bAYd@q@jA{@xA[f@{CjFSh@aBbE{CrIgC~Ga@dAe@fAe@t@W`@QVo@t@_@^sCdCmJlIcCtBy]zZeBvAsAfA}@l@m@\\y@^_Ab@q@VcB`@wEbAmNtCcCf@uFjAsO`DeMjCqB^[Fu@JaCL{C@Q?mCA{ADsEXc@Di@Ha@FoAR{@LkBZeK`B{F~@_@FeAP_InAeObCmLlB_IpAmCb@yPlC_Ep@eDRqBAY?sCY}B_@aFiBwJoDmE_B{K_EsHoCKEw@YkBq@eBi@aAUcBYa@EiAIgAAiGA{JB_HBgGL}BLwERoCJwETqAFY@gAF_HXeEPsNp@iDJK@aBNoANaBXk@NuG|AuEfAgCn@eBh@eBr@_@R{@f@i@\\i@`@uAdAiDnC_Ap@c@b@yA~AgAlAw@dAY`@iBxCW\\kA`C{@nB}@xB_@dAe@tA]jAg@pB[pAo@nCwAlGc@jBkA`Fk@lBe@vAQd@KX[v@qAtC{B|E?@aHnOsBrE]t@yEnKcAxB_@v@aCrFsAzCu@bB_CdFoBlEi@lAeF~KeCtFWh@kAlC{@dBaBhCeB|Bk@n@q@v@{AjBUV_AfAmAvAGF{AdBcEvEmC`D]^[^mC~C[^Y\\aG`H[^yH`JkD`E_ExEuA~A]^mC~CuA`ByH`JqB~B_DpD[^qB~BuA~A[^aDtDIHyAtA_@V_BfACB_EzAIBa@NaAXC@_Bf@sAl@_A`@qAt@iA|@iCtBmIhHs@p@]Z_CzByE`EmApAcGzG[^yDhEe@h@gE|EgFzFaBlBwA~AuA|AkD|DsCfCo@d@MH_@TkAt@}B~@qEhAm@PeCl@aARsBf@ID_Bp@eCfAoB|@cDxAa@PkEjBsAl@}@^w@^C@gAd@_A`@s@XKDu@Z}@\\o@Tq@To@Tm@TIBWH]L{@Xs@V}@X}Af@}DlA]L_Bf@k@Pg@NiA^qBn@aCv@UFa@NSFeA\\aBf@_@LUHA?QHWNQJQLMJUPKLA?OPIJ?@QRaApAY`@_@f@mA`BYb@SVGH[`@Y`@eB|BuBrCaBvBcArAORgAtAmA`B[`@u@`A[`@KL{@hAKLk@t@eAvAoBdCaAtAQZQZUh@IV{AbFwDhMwBrHaAdDq@|BaApDqFvQER_CjI]hAUt@q@|BkBfGY`Ao@tBg@tAoBrGg@fBmA|DuBbH_@zAc@vAaBpFa@pAiBdGY`A"
                     },
                     "start_location" : {
                        "lat" : 47.0281931,
                        "lng" : -93.3199338
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 416
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 61
                     },
                     "end_location" : {
                        "lat" : 47.2336292,
                        "lng" : -93.5234615
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "uug_HryxyPKKCCEAEAE?IBEBKBK?S?S?I@E?YDQFYFIDIDCFGNM\\?Bg@pAEFKPWf@GJY`@KPUVWTCBs@^KD_@Pa@RMFYRGFUR"
                     },
                     "start_location" : {
                        "lat" : 47.2305119,
                        "lng" : -93.521063
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 744
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 214
                     },
                     "end_location" : {
                        "lat" : 47.2351336,
                        "lng" : -93.53145599999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e2nd St N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCanal St\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow 2nd St N\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by American Legion (on the right in 400&nbsp;m)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eih_HrhyyP?Z?VAL@N?V?\\AZ?BAHCPGXKh@CJEVCXCf@?`@?^@f@AL?B?J@bDA|@?R?V?pA?vBA`C?XAdD@tCBtB?BABAFCHEB[@y@BsB?g@?"
                     },
                     "start_location" : {
                        "lat" : 47.2336292,
                        "lng" : -93.5234615
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.9 km",
                        "value" : 2865
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 495
                     },
                     "end_location" : {
                        "lat" : 47.2405404,
                        "lng" : -93.5670542
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNW 3rd St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qrh_HrzzyP?jN@pE?RDf@Pb@FnABvD?PAjKA|H@tD?~@AnKApG?tCA|CApCB~C?hB@dA?fCKjH[pHKzAQ`C]jDg@nEW|A?@EXSlAc@hCQ~@G`@ShAc@rBYnA{@`D{AvEUr@kAdDeAhCgAnCe@`AINcCzEUf@CFk@pAkC|F"
                     },
                     "start_location" : {
                        "lat" : 47.2351336,
                        "lng" : -93.53145599999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "66 m",
                        "value" : 66
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 47.2409435,
                        "lng" : -93.566413
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCo Rd 63\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kti_H`yazPa@u@]s@OU"
                     },
                     "start_location" : {
                        "lat" : 47.2405404,
                        "lng" : -93.5670542
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "31.7 km",
                        "value" : 31683
                     },
                     "duration" : {
                        "text" : "1 hour 34 mins",
                        "value" : 5618
                     },
                     "end_location" : {
                        "lat" : 47.3233511,
                        "lng" : -93.9363082
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUS-2 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eW United States Hwy 2\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow US-2 W\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{vi_H`uazPi@fAoAjCu@xAc@`ASb@_BdDWf@Wf@Uf@{D`Ik@lAABAHERQ^sAnCc@`AA?sBlEUd@mAhC_BjDyA|CaBlDoDvHy@hBs@~A{BzE[n@STCBS^]v@c@bAo@pAg@rAy@xBMZK\\Qd@wAzEa@pAMb@e@lBm@nC_@`BKf@CH?H?NMh@St@yAvGgA`FyC~MyClMcBzHoArFiDnOoB|Iq@vCeA|EK`@mAtFuBhJu@jDgAvEeAvEgAxE_@zAU~@W~@W~@ELM^?@Sn@GR]hAs@|BO^mB~Fo@lBcAdDqAfEs@rBM^Wt@e@xAUx@K^?@Ol@IXc@jBk@|C]dB{@nFo@tDs@vDk@rCS~@e@tB_AhDiAxDgBzFUr@_BdFmBpGc@bAoD`LGNuBrGqA|DsBhG}HxUiAhDkAhDgFpOkHnToA~CoFlNoBlFwAlEqDvK_ApCq@vBaAnD}BfIsBhHoKv_@}@bDaAlD_AjD}ApFwD`NuD|MgFjQk@jBsCpJoAfEyFpRaCpIqH|VgEpNiAzD}BzHcEpNe@zAa@lAM`@KV_@|@[n@O\\e@z@i@bAk@x@k@v@i@p@]\\s@n@UPWTe@ZiAv@oCdByBxAq@b@yBtAaJ~FoErCm@d@s@f@aAz@]X_@^YXUTu@`AED_@f@]f@a@n@i@~@SZUb@Wh@GJUh@MTKZ[x@[x@m@`BqB`GiCzHy@bCOb@iCpH{ExNs@vBiAfDgA|CaAxCgGxQiGzQo@nBoExMI\\sAtDu@zBg@zAcBdF_ArC]`AWt@k@dBaAvC}AtEyBrGSl@aApCsAdEg@zAgCxH}@hCmCbIwAdEw@~Bq@rB{@lCkCtH_@lA]~@]hAY~@Ux@YjAU~@UbAMp@Ov@Ov@Kl@Mx@OfAQlAK|@Ix@It@Gp@CVCTA\\En@OrCWbFMhCw@zNC^m@zJIzAKhAIhAKbAOnAo@hE]~A[~Ao@~B[dA]jAe@rAUn@Uj@_@|@[t@c@|@Wj@a@r@U`@U^Ud@e@p@]j@KPSZg@bA[n@Sh@Ut@M`@Sp@K`@Kb@Kh@Mn@Gb@G`@Gd@CZCXEZARARC\\Cl@Cj@Gz@Cv@Cf@Ch@Cb@C^AZCh@QjCAl@El@Y`EM`BIhAOrBMpAKpAUtDU`DEd@Gn@Ex@GhAQxC?ZCr@CdA?vA?X?V?T?pA?r@?x@?r@?Z?`BAzC?`CA`AATATARATCZIh@GTERGTGRGPUh@Sb@u@bBgAdCu@hB[r@g@rAUh@MZIXWt@Od@Of@Sl@Mb@uBzGOf@cAdDUv@Y~@k@nBcAhDe@~AK\\_AzCMd@gApDu@bCYdAU~@Op@Ol@Mr@WnAIPCNIj@Kj@G^Kr@Il@Ij@Gb@Eb@Kv@Ep@E^C^C^Ed@Et@Et@Ab@Cf@Cn@AZA`@ChAAlA?Z?Z?pA?x@@Z?n@@X?L?L@b@Bf@@h@Bj@?B?B@B?DBNH~BFtA`@jL\\|IJhCBr@P~E~@~VhAfZRpFj@fPDfAVhHRxERnF\\lJPnEf@zM`@~KTjGRhF|@hVlA`\\FrBRpF`@jLDr@ZnIJhDh@xNxAb`@NdEZfIJzBL~DT|F?HLlDVdHD~@FtAJpCRzFB`Ah@rNJ`CFzAFjAD\\Dn@Fx@Ht@Dd@Hl@Hf@Fd@Lv@Ln@Hh@Jd@Nl@Rz@Jb@Nf@X~@d@zAlAlDX|@r@tBv@~BZ`Az@dCrA~Df@vAX|@v@`C@BlAnDtAbE|B`HxBtGNb@Pj@x@dCNf@xAtEr@|BtDrLbCxHbBnFHZbDfKfAlDZbARp@Pl@XhALh@Jb@Hd@R`AHf@Hf@D^Hf@D`@Fd@Hv@Dd@Df@Dd@Bh@Dn@Dt@Bp@@d@BrA?x@@`A?r@Av@Ar@Al@Cv@Cv@KzCUlGKrCItBSnFQhFCr@Ct@GzA[jII|BQxEKtCOfEKhCCr@EfAEvAEjAElAK~BEjA"
                     },
                     "start_location" : {
                        "lat" : 47.2409435,
                        "lng" : -93.566413
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 112
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 47.3243484,
                        "lng" : -93.9361251
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eArctic Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}yy_H||i|PgEc@"
                     },
                     "start_location" : {
                        "lat" : 47.3233511,
                        "lng" : -93.9363082
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "11.7 km",
                        "value" : 11718
                     },
                     "duration" : {
                        "text" : "34 mins",
                        "value" : 2015
                     },
                     "end_location" : {
                        "lat" : 47.4167826,
                        "lng" : -93.99807199999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCo Hwy 39\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCo Rd 39\u003c/b\u003e",
                     "polyline" : {
                        "points" : "e`z_Hx{i|PICy@IKAG?kA@a@B}AZkAh@eAn@g@d@kBtBgCtC{AdB_ChCIJiDvDcDpDi@j@_DnDoAvAaAfAsArAgAbAu@p@e@d@sFdFyBrBuBlB{BpBuApAaA|@sBjBi@h@a@^_Ax@mAdAy@n@{@j@k@Zo@\\[N]No@VWH{Af@aAZUFsJ`DqC~@o@Tg@ROH[RUNWPYRYVEDQNYZMPIHQTUZ[d@CBMR]l@Wj@_BlDINgIxQ{AfDq@zA}C~Gm@tAs@zAy@hBS^m@rAa@r@Wb@c@n@_@l@]d@[`@Y^MLk@l@s@r@e@`@i@`@k@b@y@j@w@b@aAb@kItDuD`BaAd@cCdAaCdAEBgAf@qAj@kAh@q@Zs@XgAf@EBmAh@oAh@q@ZoAh@mAj@a@PQHmF~BmD~As@\\q@\\YNWNYNWNWP_@Tm@`@A@g@\\WPa@ZWRWRc@\\c@^q@f@o@h@y@p@yAjAy@p@uAhAwBfBgAz@WTGDkA~@m@f@i@b@WRo@f@_BpAoAbAuAhA_@Zy@l@a@Xg@Z_@T[NWNYLa@R_@Lw@Xa@LcBd@wF`BmHtBoDbAw@Tm@Pc@PC?]NGBw@b@A@WPoA~@kAlAo@p@cC|CKNoA|AiAtAoAzAmA~AwAhBaKlM}@fA[^]^a@`@g@d@]Xa@Z]T[RGBYP]Nk@Xk@TUHSHOD[H]Ha@H{@Lm@Fi@Bm@BS?SAg@A}@BoAQcEu@wIgBwK{B]Io@GgBIk@@eABuAPaB^g@PaA^{Ax@eCpBeAx@_DlCWR{CjC}BlBOLuBfBs@l@gA~@SPi@b@kCxBCB{ApAaAv@{ApAy@p@m@f@}@p@gAt@IDc@Vc@VeAh@WJ}@`@E@cA\\IBWJE@WH_@HGB_@He@HUFa@F_ANi@Dg@DM@K@g@BmABo@BkBA]@yDCsA?kAAwA?o@?cCAS?O?S?E?YGKCIEMKIKGMO]"
                     },
                     "start_location" : {
                        "lat" : 47.3243484,
                        "lng" : -93.9361251
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "58.7 km",
                        "value" : 58680
                     },
                     "duration" : {
                        "text" : "2 hours 52 mins",
                        "value" : 10340
                     },
                     "end_location" : {
                        "lat" : 47.8756578,
                        "lng" : -94.2843637
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eState Hwy 46 N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{al`H|~u|PeA~@cAz@KJ]V}H~GuBhB]ZaAz@oC~BeA~@_@ZmIlHwAjAgDvCiDvCeCxBsD`D{@t@eDtCeA|@o@h@kAdAiDnC}BhBs@j@uB`BwBdBcAv@s@j@k@d@QPkEhDq@h@w@l@wAfA[Ta@Z]Tg@\\c@Xs@`@]ReAj@_CdAq@VkAd@mA`@u@XmC~@yAf@uAd@eExAq@VmA`@{Ah@uDrAgA^iBn@wAf@m@R{CfA}CdAmBn@{@VmA\\uA\\aHzAeHnAwATsCd@a@He@HkDj@oKfBg@HyDn@yAVgARg@HmDn@iB^e@JeB`@oAZqA\\kA\\qA^kA`@_AXWHm@TmAb@iAb@mAf@y@ZgAf@mAh@}BfAm@Xu@`@C@u@^oAr@uAx@KDwA|@EBo@^mAx@m@`@iAx@m@d@c@ZqB|Ai@`@[VIFQNaAx@wBdB}BnBcFfEsC`CsBfBcAz@wCdCqBbB_@ZwCbCMJkA`AeAv@{@n@_An@s@b@cAl@IFk@Zw@`@cAj@}@^eAb@c@Pi@Rs@Vi@RIBqA`@yA`@}Bh@mAT]FsARcCXe@Dq@FmCPiEZoCRyBN{AJuLz@_AH}Gd@eBLwE\\oBL_BL{@H}@FgBJa@DA?mBL_EZU@eAHeBLO@oCR}CR{E^eAHkAJ]DgALgBVeAPo@Lq@N]Hq@R{C|@gEnASDqBn@gGfBgCt@yBn@{DjAqEtAk@Rm@Pu@RSDUDk@Hg@Fa@B]@o@BE?]AE?a@?[A[Cc@Ek@Gk@Ke@K]IWG_@Me@QIEc@Sg@Ui@Y[SMIs@e@gBiAoFiD}A_ACAoAw@s@i@AAe@Yo@c@c@Ye@U_Aa@}@]_@MUIQEc@M]Im@MC?e@I}@Kg@Ea@Cc@CK?c@A[?[?_@@cADq@FI@WDc@FM@SDA??@g@Hq@Pm@Pm@T_@N[La@P_@Ra@Rg@Z]T_@Tc@\\URm@h@YVWVk@l@KJe@j@o@t@c@f@SVsA~A_CrCwClDyAhB]^u@|@mB|Ba@f@]^UXoDhEcAlAm@t@g@j@aAhAUVkB|Bs@z@W\\ONMNyAfBkBzBaAjAi@r@k@p@mDfE_AjAa@h@a@b@w[~_@]^qBbCqJdLmFnGsJhLY\\e@l@{@bAy@`A[^w@`A_GdH]^oBbCqB`C[^uA`B[`@y@~@iLhN[`@o@t@kFnG_GdHkDbE{AjBmAvA?@[\\A@wAdBaE~EA?{FbHyHfJ]`@[^{AhBkJ`LEFq@v@[`@uHbJqCfDY\\cNjP]`@]`@qA~AsIfK]^?@qJhL[\\mB~BmDfE[^EFmDhEcCtC[^KLeAhAu@t@KJm@l@o@l@[T]ZMJm@f@eAv@cBhAgCbBaAp@}@l@iBxAk@d@iA~@kAlAc@d@]^oAtAWZg@n@uAhBEFOTQTSZg@t@qFtIoFpIABqEfHi@x@eEvGaAzA]d@y@rAy@tA_@f@y@vAw@jAINgAdBaEpGo@~@aAxAQV[j@u@hAsAnBq@x@IJOPUVQPED_@`@SPi@d@w@l@CBi@^_@T[N_@Ti@Vm@XsAf@q@RUFSFWFK@_@J[Dk@Fi@Da@Ba@Bw@BcA?w@?YA_FC{ACa@@U?sAAqDAaAAkAAw@AeDEeA?c@?s@?yAAw@?]AaA@i@Dy@Fe@D}@LaAPs@Pe@Ns@TUHYL_@RQFSJQJKJg@ZuA|@g@b@OLk@d@_BxAs@n@YV}@v@o@l@i@f@_BtAoDdDaDxCA?[Z{ClCeA`AsDfDGFm@j@QNMJ{AvA{DnDc@^{@p@]Re@XQJQJYLy@ZwA`@e@Fo@Hg@FW@cA@kA?_ACa@AMA}BCmAAo@CuAAq@AqAAcBEcEEoACoBCsAE}BAuBGe@?c@?c@?a@AsBBe@@kADuAVi@N}@`@aAd@i@`@_@X_@^a@`@[^W\\CBSZW`@GJGHWh@S^Sf@Yh@e@hAg@hAo@|Aa@~@c@`Aa@|@]v@Wn@e@hAo@vAg@jAoAvCw@dBwBlEeCdF}AbDgBrDiA|BcArBmCrFmBbEwDnISd@i@lA{@lBs@zAw@fB]t@c@dAq@xAa@~@c@`Aq@xAa@|@AF_@x@e@bAs@~Aa@|@_@z@c@~@_@|@c@|@eHzOsDjIcAzByI|RqGtNaAxBmD|HyCzGcA|BS`@S`@[p@Yj@_@n@a@l@]d@e@j@YXWV_@\\{@r@e@ZSLYPm@X{@\\y@XcA^s@Vq@VcA\\SH_AZ{@ZeA`@gA^GDu@Zk@ZC@a@Vm@b@[Vg@b@GHWV]^k@r@OTIL[d@c@p@_@j@k@|@_@j@[f@KPi@x@o@dAg@t@g@v@U\\e@t@gAbB{LjRkFhIYb@oApBW`@Yb@Y`@_AvA}@tAq@fAa@n@MPKRc@p@eA~A_@l@k@|@Yd@Yb@CBq@bAc@p@e@t@CDo@bAqArBYd@GHgA`Bs@hAORkCfEU^]h@iBrCu@jAq@dAYb@OVGNCDGLEHq@jAkAhBc@n@IJc@t@}@rAoAnByBjDsArBU\\wCrEyBhDeBlC}CzEo@`AoB~Ck@z@Yb@uCpEa@l@aFzH{@tA[d@a@p@QVoAnBcBjCsB~Ck@~@m@|@a@n@Yb@U^cDdFo@bAu@hAGJk@|@CBwBfDEHYb@GHy@pA{@rA{@rAq@dAgAbBkAlBg@x@Q^g@z@a@v@s@xAe@`Ac@dA]x@c@dAS^QZ_AxBmFhMq@|Aq@`BQd@_@x@e@bAq@tAe@~@S`@w@rAy@tACD_@j@[b@y@rAiFfIg@v@[f@}CzEaBfCkCfEkDpFsArBkBtCcBjCoApBoAlB{@tAmAlB}C|EOT_AtA_BhC{A~BwA|BiAhBuAvB_BfCsArBYb@a@p@yBdDkA`B{ArByBpCGHyErFy@`A{AdBmD`EaFxFiArA_JfKmEdFwHzI{AdB_AfAeAlAy@~@q@p@gAbAs@l@iAz@yAbAiAp@q@`@iAh@_Ab@kAb@sBp@cAVu@Pa@JMBYDe@HC@kALwBPcAFqABc@?[?S?gACqEGiKOkFEqBAw@?cA@gA?gGD}DBoA@_GDcCBqB@uGDiC@_ABm@@W@[@U@E@[BYDoARaARm@NgAXwA`@{A`@cBh@_Bb@E@oA^eBf@{@Pw@Tc@H]Hk@H]Fg@F}@Hg@@o@Do@?w@A{@EgAIk@K{@MmASs@QGAmBe@sA]mA[YGsA]aCm@oBe@gBc@mA[_Ba@uCs@oCq@eCm@}@Uc@I[Iu@My@Ms@Gu@EC?k@A]Aa@@Q?[?S@g@B_DNwAHC?wDPwCPyI`@gET}@DuAF}@FuBHI@oCRiAH}BHuAHkGXaAD{@Dm@DoAHq@FaALaANOD_@DUDuBd@uBh@_EtAuG~BmAb@eCx@YJYJSDa@LOD_APs@Hi@D{ABS?[As@Eq@KKAc@K{@Sg@M_GiBoEuAuDiAsGwBqT}GkDgAmDgA{Ac@}Ae@kCu@wBo@_CY}BMc@AAAqDEiNWg@AO?{BGoGMs@Cw@A_DGiBCcFMoDIsGI{@AcB@sABy@BwBDc@BkBDkBFc@@[BG?gADcIVaAB{CJK?oCHaEJ{ADG?[@sDLgJVgABc@BoBFuFPkBF]@eAF{@Fe@DcBTo@Le@Jw@Py@Pg@L_@HC@{@Rs@P[FqEbAoDv@a@JiB`@yD|@GBoDv@OD}Bf@gB`@w@PiARo@HUBu@FcAFeA?cC?wDEwJEkBCoCC}DCeECoEC{DEeBCkDCsA?m@@_BBe@Be@D[DQBSDUDSF[HA?UFIDMD]L[LUHUJWJ]Pa@PeCjAg@T}Ar@a@RgAf@gGpC[NEBcAd@a@P_@Pa@RiEnB_DxA{CtAeCjAyBbAw@\\_CdAcAd@a@RcBv@a@Pa@RcDxAmEpBEB[NiEnBeHbDyJpEgEnBcF|B_@Ps@Zs@\\YLkAj@[LC@SJ_@NUH]LYJYHOBKBYF]F]Fi@DU@Q@[@i@?q@A_BEoBCkBCcBCQAS@I?I@G@G@IBG@KDSHIDMHKFKHQLKNMPOPILIPGNEJEHELEPGPCJCJCJ?DG^Ih@Ef@K|@AJAD?@AHCPGREZi@fB"
                     },
                     "start_location" : {
                        "lat" : 47.4167826,
                        "lng" : -93.99807199999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.8 km",
                        "value" : 4848
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 872
                     },
                     "end_location" : {
                        "lat" : 47.8558523,
                        "lng" : -94.34143829999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eUS-71 S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{uecHf|m~Ph@r@`@h@b@l@X`@f@v@z@|AXj@Vh@Zp@Zt@\\z@N`@Pd@Vt@JZb@zAVbANj@H\\Jb@FXDTBJDNF\\Lv@DVLr@Jr@NfA?DHv@Hp@b@rET|BPlBLtAHx@NzAh@bFb@xDXlCRzAh@bEHp@?@NfAl@rEh@xDPtA~@dHZtBj@fE?@ZvBtAdK`B|Ld@`Dj@tCNv@VfAPt@Pn@Rx@Pn@^lA`@nAb@lAb@fA~@xBRf@j@tAfAhCN\\j@tAhBjEXr@h@tA@?f@tA\\z@fDdJHRlCxHrBbGp@pB`AtCJ\\Xz@x@nCp@~Bp@bCNl@`@|A`@|AHTb@jBbA|DRx@Rv@Nn@z@hDdCzJx@`Dx@dDzA`GrApFLd@Tz@X|@^hAVx@BFDJ@D\\|@JTj@tA"
                     },
                     "start_location" : {
                        "lat" : 47.8756578,
                        "lng" : -94.2843637
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.8 km",
                        "value" : 7837
                     },
                     "duration" : {
                        "text" : "22 mins",
                        "value" : 1320
                     },
                     "end_location" : {
                        "lat" : 47.8742124,
                        "lng" : -94.4389382
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eState Hwy 1 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "azacH~`y~Py@xAOXOZKZKTGPIZK`@Qr@gAhF{@~DoEtSiBrIMh@yCjNyBbKeCfLuGzZ{A~GuBxJo@zCwDlQMh@eF~UeDnOs@nDs@|DWpBGt@Gf@CXCXEt@IxAC\\Cd@ErAAh@?`@AH?x@?~@@~S?jBDvTBlQBvO?t@@vJ?zA@nI?~C@lL@bY@nK?R?xK?f@?vB?jEAnAAd@Cd@Ah@KtBOvBYlBYpBc@jBa@bB_@lA]`Ag@pAg@jAq@nAy@vAyBrDg@z@mEvHYb@SZoAxBoAtBsA|Ba@v@EHk@lA[r@a@fAc@tASr@_@zA]~Aa@dCOtAWvCKvBCrAC~A@vCBzA@x@NjKLzIXvTFvCBbB"
                     },
                     "start_location" : {
                        "lat" : 47.8558523,
                        "lng" : -94.34143829999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "72.2 km",
                        "value" : 72249
                     },
                     "duration" : {
                        "text" : "3 hours 31 mins",
                        "value" : 12634
                     },
                     "end_location" : {
                        "lat" : 48.4976969,
                        "lng" : -94.56046579999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMN-72 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ylecHjbl_Q}ABwELc@@c@@W@qSf@gADuGNwCHoDJgCHc@@y@B}CN_@@g@BgAF_Ot@eH\\Q@sDPk^hBaMl@oH^qVlAiKf@k@BgCLyLl@sG\\mUhA_Mn@wDNcGZiKj@c@BgADe@DoNp@wBLyANqEv@wCp@{Af@k@PmAb@}B~@sAr@aB|@iAp@iAr@yBpAiB`AoB|@wBz@a@N}@Z{Ct@gATo@LkARsBV_CR_DHwIBaKBgA?_@?]?i@@uBCiB@qA?W?mEDoE@mBAgBDmEBmDJcCNaAJ}Gt@E@c@DiCXqC^k@F{BVuBTq@FgAJaA?oAD}ABoHDc@?uQB{C@mF?kF@mL@kI@ePB}B?cG@oI@wQBqF@kT@G?iU@uG@wLBi@?cTBgS@sA@cE?G?o[DiN@gB@kOBwR@wNByE@gj@D_A@g@AgKBiW@_EFo@BwAHaBNI@oANy@LmB^sAX{C|@oAb@QHy@\\qAh@o@ZqAr@kAp@}AdAgAv@YT}ApAuBjBe@f@oArA{@bAUXkB`CiAvA]d@m@v@i\\xb@__@|e@sCtD_CxCmNvQsI~KuS~WaFrGoO|Rc@h@eAjAk@j@WVk@h@gAbAeA|@iA|@yBxA_BbAgE|BmCxAcDhBuElCwElCwCdB_DdBkLvGqPjJqRxKqFzCiIvEiJjFiH~D_@TmLtGKFaQvJsRvK{IbFuGtDqC~AgB|@iAd@cC~@qA`@gCp@iB`@qARaALMBsANw@DmBJs@BgD@_I@mODiK?kTB_P?iL@uD?io@FoB?m_@Dc@?{XBwE@}t@HgM@a[@K?S?wF@iI@aB?_@?a@@g@@a@B]Bu@He@D_@F{@Rg@L]HWHYJc@Na@Pi@Tg@Tm@Xg@TaBv@qAh@gBn@g@NQFSF_@HODUDWFc@D[DS@SBi@BQ@S@{@@s@?qC@mF?mH@gJ?aVAwB@oFDoF?aA?aCAaBAiC?sKFeA?[@Y?[B_@@_@Dq@Fs@Jo@L{@Rq@RSHs@Xe@PSH[Py@`@aAj@qAx@mF|CsRdLqg@xYi@\\c@Z]VUPk@h@_@`@c@h@[b@EDYb@]l@[j@Yj@Sb@[x@Ul@Wt@U|@WbAoAfFu@dDwB`JkDzN{H|[kGjWcD~MgArEkC|Kw@bDs@zCgBrHg@tBSx@Mf@Qj@Ob@Qj@O^O^Sf@[l@MVGLU`@[f@Y`@W\\]b@_@^c@d@c@\\a@\\a@V]TIDUL]Pg@R[L]Ji@La@Jq@Jm@Dc@Ba@@mA?oBAsCAeHAgHAaICsFA_DAsFAs@?aDA{DA_DAcDAcCAcREyUGcSE_JCuc@IsUCI?mLAiZCgJCe@?wOAsE?_YAmd@CgM?eF?yR?}B?uI?wIAwI?eJ?qQJgSLQ?uB?yRLyOFuLHyC@qGDcYNwQFu[DmYCcBAsJ@iV@uRFeC@W?qAAeIBcm@RyXHqHBma@Ha\\Acd@AyR?kDEU@s@BkAPi@JgDbAwBfAaPlNiErDq@b@m@`@iDzAaCd@}BRm@BoAFaj@P{D@ee@GwXCaH?c@?G?kDAwDAmDAaHEuXOwD?}wALcO?cRBsL?e]OqIEofAJkO@{DAab@YqAAyDAwRB{PB{E?qV?wNAgA?aD?_k@Tob@HwD@{ABu@Be@@{AFqY`B{G\\}AF}AD{ABa_AX{FBc@?_HB_D?"
                     },
                     "start_location" : {
                        "lat" : 47.8742124,
                        "lng" : -94.4389382
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.4 km",
                        "value" : 6369
                     },
                     "duration" : {
                        "text" : "19 mins",
                        "value" : 1141
                     },
                     "end_location" : {
                        "lat" : 48.497879,
                        "lng" : -94.646896
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCsah 1\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "se_gH|yc`Q?`D@xE?dD?p@@tD?b@?rA?jF?D?nB?x@@bB?nGDhdA?F@jC?nQAbOClX?vB?bG?Z@zPBlGD`I?rBBvG@~H@zA@lF?fL?hd@@`U?zJ?fN@`_@?pBKrd@EpSCfG@|A?p@CdCCfCAfCArB]~e@?XAdAEdF"
                     },
                     "start_location" : {
                        "lat" : 48.4976969,
                        "lng" : -94.56046579999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "19.3 km",
                        "value" : 19303
                     },
                     "duration" : {
                        "text" : "56 mins",
                        "value" : 3355
                     },
                     "end_location" : {
                        "lat" : 48.6714269,
                        "lng" : -94.64845939999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCounty Street Aid Hwy 1\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wf_gHbvt`QcPDkKD{FBwB?G@G?O?K?G?a@?Y?I?gA@oC@{F@eJDkB@oC@wE@G?kD@cFBwEB}GBcRHcIDwNFgJBqDBiD?oL?wM?_@?kC?mG?w@?U?kCD_@?}Yt@kKV[?yA@g@@_DBI?aB@_HFkPLqHFsMJsDBsDBoCBaJHmIF{FDgJHyA@iKFw@?i@?qEC}YM_EC_B@S?mABcb@`Ao@BcEF_F@_ZBcI@}GC_HCyYKuKKsCAuPOgJIwEE{FE}GGmKCiTGwICuUOwNKoCCwECaIGsDCu@AwEDcA?U@kB@kBBwEDkCB{FB]?eABgALqB^eB`@C@iANw@DU?eC?_HAsDA_HAyVCcIA{OAqDAgSCqKAmNAsVAqQ?oQAkG?oL@oL?}A?yB?{F?qK?qHB"
                     },
                     "start_location" : {
                        "lat" : 48.497879,
                        "lng" : -94.646896
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.6 km",
                        "value" : 4643
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 824
                     },
                     "end_location" : {
                        "lat" : 48.713182,
                        "lng" : -94.648916
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eCsah 3\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "mcahHz_u`QaC@y@@oUFcI@}b@L{F@yE@qM?e@?{B?kK?yJ?iFD}GDO?kFFeSNmB@eA@qC@qODgB@qNBmC@uN@_Q@"
                     },
                     "start_location" : {
                        "lat" : 48.6714269,
                        "lng" : -94.64845939999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 243
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 117
                     },
                     "end_location" : {
                        "lat" : 48.71303100000001,
                        "lng" : -94.65222
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMN-11 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "khihHvbu`QJpEFtEHjF"
                     },
                     "start_location" : {
                        "lat" : 48.713182,
                        "lng" : -94.648916
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 149
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 48.714367,
                        "lng" : -94.652208
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e18th Ave SW\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mgihHjwu`Qu@@{@AyCA"
                     },
                     "start_location" : {
                        "lat" : 48.71303100000001,
                        "lng" : -94.65222
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.8 km",
                        "value" : 4812
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 853
                     },
                     "end_location" : {
                        "lat" : 48.714172,
                        "lng" : -94.717794
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMain St W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yoihHhwu`Q@~B@bIJx`@Jba@DbUB|J@zC@|@Al@?v@?f@ChAFzE?|X@|l@@hIBlS?xJ@|J?bH@lEApB?nGA|JApA?pACrt@?hCEhk@"
                     },
                     "start_location" : {
                        "lat" : 48.714367,
                        "lng" : -94.652208
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.4 km",
                        "value" : 4450
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 782
                     },
                     "end_location" : {
                        "lat" : 48.728668,
                        "lng" : -94.772458
                     },
                     "html_instructions" : "Continue onto \u003cb\u003ePitt Rd NW\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qnihHdqbaQ?|J?xD?dE?n@?|CAp@Cr@Gp@MdAG`@s@`Fc@xCo@lEsAfJa@pCWfBcC|PKh@Mb@S\\U\\EFWh@ITITUrAIj@Il@Ip@U~AStASxAAJKr@It@Kt@Kt@Mt@It@YfBKn@Kj@g@lBW~@y@hDa@~Am@bCUz@qApF}@vDcAjEoAhF_A`EiB|HYlAOp@Mh@Ob@Q^KLGFUPYJu@L[H[LCBSPQXMb@Kf@[hB[hBMv@o@~CcA|EABgEvPSx@]lAaAxCY~@o@hBUr@aBjEYdAe@tA}AnF_EtNOr@Kt@Cx@?tB?~@@~A?x@?`P?nI"
                     },
                     "start_location" : {
                        "lat" : 48.714172,
                        "lng" : -94.717794
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 793
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 141
                     },
                     "end_location" : {
                        "lat" : 48.728642,
                        "lng" : -94.783276
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCounty Rd 69\u003c/b\u003e",
                     "polyline" : {
                        "points" : "eilhHzfmaQ?|A@xB?v@@xb@@zR?d@?fA"
                     },
                     "start_location" : {
                        "lat" : 48.728668,
                        "lng" : -94.772458
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 112
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 48.727635,
                        "lng" : -94.783281
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e8th St NW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_ilhHnjoaQlBCb@@t@@"
                     },
                     "start_location" : {
                        "lat" : 48.728642,
                        "lng" : -94.783276
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "10.3 km",
                        "value" : 10251
                     },
                     "duration" : {
                        "text" : "31 mins",
                        "value" : 1849
                     },
                     "end_location" : {
                        "lat" : 48.758207,
                        "lng" : -94.91511799999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMN-11 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wblhHnjoaQo@tE{C|SqD~VqPtjAeGjb@kDbVuCfSKr@yDbX]dCa@lC{BnOeAnHSbBYxBIdAg@~EaAzKWjCWhCU|BAHYdC[dC{@hGi@nDSzAYpBq@pEoI~k@sBxN_@dCO`AMx@a@lC[bBcApFc@xBe@vBa@pBi@~Bc@vBc@~BUjAm@nDAF]vBm@xDObAwA|J]~B{@bG_@`CSxAg@lD_@`C]bC_DvT_@fC]|B[`Cs@~EoBbNaH~e@_@hC{CbT_@dC_AxGyA~J]dC}AfKQpAm@hEWdBYxB_CbP_CdP_AtGM~@o@nE}AlK_CrPO`A_AnG{@`G{@`Gg@lDoAzIk@vD"
                     },
                     "start_location" : {
                        "lat" : 48.727635,
                        "lng" : -94.783281
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "58 m",
                        "value" : 58
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 48.758725,
                        "lng" : -94.91510099999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e66th Ave NW\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yarhHnbibQSCc@Am@@"
                     },
                     "start_location" : {
                        "lat" : 48.758207,
                        "lng" : -94.91511799999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2133
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 375
                     },
                     "end_location" : {
                        "lat" : 48.765066,
                        "lng" : -94.94255899999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRailroad St NW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_erhHjbibQWfBc@xCgArHsAfJqAhJqMv}@{@fGIj@iBnMkAbIk@xD[~BQhAg@pD{BtO"
                     },
                     "start_location" : {
                        "lat" : 48.758725,
                        "lng" : -94.91510099999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1678
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 322
                     },
                     "end_location" : {
                        "lat" : 48.770024,
                        "lng" : -94.96401899999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eMain St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ulshH~mnbQAHMv@Qz@St@Yp@u@zAWp@Ut@?@Qx@a@hCe@~CIh@gAzHwBbOeA`Hw@zFIv@SvEEz@A^EjBEt@?DE|@ANCVCROrAE^]xBWbBk@lEG^OfAO~@M`AmAlIgAzHAH"
                     },
                     "start_location" : {
                        "lat" : 48.765066,
                        "lng" : -94.94255899999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1282
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 223
                     },
                     "end_location" : {
                        "lat" : 48.77385,
                        "lng" : -94.98052250000001
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRailroad St NW\u003c/b\u003e",
                     "polyline" : {
                        "points" : "skthHbtrbQq@rEaCtPWhB{@|Fa@hCu@dFa@pC?BWjBeAjH{@`Gm@lEKr@oBbN_@dCADE^O~@"
                     },
                     "start_location" : {
                        "lat" : 48.770024,
                        "lng" : -94.96401899999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "58 m",
                        "value" : 58
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 13
                     },
                     "end_location" : {
                        "lat" : 48.7733296,
                        "lng" : -94.98058569999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e78th Ave NW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qcuhHf{ubQn@Dv@F"
                     },
                     "start_location" : {
                        "lat" : 48.77385,
                        "lng" : -94.98052250000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "8.5 km",
                        "value" : 8538
                     },
                     "duration" : {
                        "text" : "25 mins",
                        "value" : 1523
                     },
                     "end_location" : {
                        "lat" : 48.79909199999999,
                        "lng" : -95.090334
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMN-11 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003e94th Ave NW\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMOM's Way\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "i`uhHt{ubQo@rE_CfPO`AQfAk@~DqCxRmApIoA`Jy@zF_@bCaAbHIh@AHMx@}Er\\E`@o@jEo@lEcEzY_ApG]`C{ArK_@fCeAtHcAdHmApI}AtKi@rDSvAe@`DaAdHmAlIeDpU}Irn@oOrfAmCjRsAfJgKdt@uBbO}CpTgArHi@zDyMn_AcDhU]~B]rBGZW|Aa@|B}@~EcAzEc@lBkAzEc@dBYfA"
                     },
                     "start_location" : {
                        "lat" : 48.7733296,
                        "lng" : -94.98058569999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 107
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 48.8000581,
                        "lng" : -95.09032409999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRocky Point Rd NW\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iazhHpikcQ}@?sA?]AQ?"
                     },
                     "start_location" : {
                        "lat" : 48.79909199999999,
                        "lng" : -95.090334
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.0 km",
                        "value" : 6960
                     },
                     "duration" : {
                        "text" : "20 mins",
                        "value" : 1191
                     },
                     "end_location" : {
                        "lat" : 48.8331331,
                        "lng" : -95.1710264
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eKirkwood Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kgzhHnikcQgBzFcAdDsAnEaCnHg@fBmCzImChIcCdI}@xCkAxDuArEGRqBtGkAxDmA~DsEjO{D`My@hC}AfFqBtGqBtGoE~N}DnMoBtG_BfFwBjHKXaBnFu@`CuEjOeCbIcCbI_BfFw@jCkAxDwCpJcFjPwFzQqBtGkAxDaItWcFjP{HfWgFhPeCbIaBhF_FjPqB|G_BfFwCrJ_DdK"
                     },
                     "start_location" : {
                        "lat" : 48.8000581,
                        "lng" : -95.09032409999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "67 m",
                        "value" : 67
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 48.8326481,
                        "lng" : -95.1715756
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eMN-11 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMOM's Way\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "av`iH|a{cQ^j@B@@Bx@z@"
                     },
                     "start_location" : {
                        "lat" : 48.8331331,
                        "lng" : -95.1710264
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "14.5 km",
                        "value" : 14501
                     },
                     "duration" : {
                        "text" : "43 mins",
                        "value" : 2557
                     },
                     "end_location" : {
                        "lat" : 48.9108324,
                        "lng" : -95.3212022
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMN-11 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMOM's Way\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "as`iHje{cQsAlE}GvTQl@_DbK}AfF}DnMoHdVQn@sEbOiD`LmLv_@oJd[u@bCaBtFkCjJyBjI_BfGaBpGsCdKkA`Ea@nAiEjNwPpj@mAzDiC|HgDrJiAbDc@lASj@Yt@uBdGUp@cBbF[`AqC`JiB|FIXaHlUENwGlTcE|MUv@uKb^Sl@ai@bfBOh@_Nvc@iD`LaEzMcBpFyAfEwA~D_DzH{DlJ_CpFwAjDcHjPQ`@}S~f@iBjEqFnMeDzHy@jBO`@{JvUm@tAUh@yAjDoBtEaA~BcA~BUj@yAhDyAjDaA~Bk@tAuGpOoDlI{DjJu@hBu@`BsC~Gm@vAOXOVWb@OVSTYZABYXSRg@h@oCfAmEFmE@sA?{B?{B@gA?eD@Q?w@?I?a@?}@?mA?{@@c@?qE@cBAmB@{AFi@B{@Lw@Lo@LYFSDC@eAXs@Va@Ts@^y@h@"
                     },
                     "start_location" : {
                        "lat" : 48.8326481,
                        "lng" : -95.1715756
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 101
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 48.9111274,
                        "lng" : -95.3198938
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eGladys St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "u{oiHnlxdQ_@mC[wB"
                     },
                     "start_location" : {
                        "lat" : 48.9108324,
                        "lng" : -95.3212022
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 920
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 190
                     },
                     "end_location" : {
                        "lat" : 48.9193843,
                        "lng" : -95.32018049999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN Main Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q}oiHhdxdQeB^wALoGFuC?_@?wC@kB@qL?wH?"
                     },
                     "start_location" : {
                        "lat" : 48.9111274,
                        "lng" : -95.3198938
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1688
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 338
                     },
                     "end_location" : {
                        "lat" : 48.9306298,
                        "lng" : -95.33126249999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cqqiHbfxdQGv@AdCDtB@nAL|BRfDRhADb@ENIJi@TiIvE?@iGhDkCxA{BnAeDhBsBjAq@\\gE~BC@}A|@cB~@y@d@mAn@}@f@KFwC~AA@gB`A]RkAp@OBg@Q[CAA"
                     },
                     "start_location" : {
                        "lat" : 48.9193843,
                        "lng" : -95.32018049999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 439
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 83
                     },
                     "end_location" : {
                        "lat" : 48.934079,
                        "lng" : -95.32967230000001
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eBirch Dr S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "mwsiHjkzdQGKGEKCM@sAZuB`AQ@M@q@A_@Ig@e@{@gAa@e@cBuBg@q@y@cA"
                     },
                     "start_location" : {
                        "lat" : 48.9306298,
                        "lng" : -95.33126249999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 617
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 102
                     },
                     "end_location" : {
                        "lat" : 48.9385059,
                        "lng" : -95.3340006
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eElm Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_mtiHlazdQILINMTMTM^}@jCGL_AhC_@dAS^QZY`@]`@[VWPWPc@VqA|@}@j@c@Ti@TUH[Fc@FO@_ABm@BQ?"
                     },
                     "start_location" : {
                        "lat" : 48.934079,
                        "lng" : -95.32967230000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 598
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 103
                     },
                     "end_location" : {
                        "lat" : 48.9428154,
                        "lng" : -95.33830349999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eDogwood Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uhuiHn|zdQ?V?PCPCPIXKZk@tAQRQLYNIB{@ZuAf@gBp@mAb@k@XWLKHOLOPSXgBlCw@lAOVu@bAMHKB"
                     },
                     "start_location" : {
                        "lat" : 48.9385059,
                        "lng" : -95.3340006
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 132
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 48.9422607,
                        "lng" : -95.33989339999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBirch Dr N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "scviHjw{dQrAbFRv@F`@"
                     },
                     "start_location" : {
                        "lat" : 48.9428154,
                        "lng" : -95.33830349999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.9 km",
                        "value" : 6860
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1241
                     },
                     "end_location" : {
                        "lat" : 48.9991284,
                        "lng" : -95.37630329999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMN-313 N\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Canada (Manitoba)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "c`viHha|dQ}A|@uEhCaAf@mCvAmGlDoAp@iRjKgGfDeCtAg@X_FnC}EjCmJhFaTjLuF|CqMhHa@RkIrEsWvNc_@pS_PxImGjDmFvC{BnA{F`DSJuMhHgDjBcBbAeIjEk@ZeAj@qGnDmBjAkKvF}XpOeDjBe@To@^a@T_@Ra@Ty@b@mEdCcB~@wB|A"
                     },
                     "start_location" : {
                        "lat" : 48.9422607,
                        "lng" : -95.33989339999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 166
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 49.0004182,
                        "lng" : -95.3771067
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eMOM's Way\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eProvincial Trunk Hwy 12 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-12 N\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "qcajHzdceQ]BK@KD]LWHQD]BUDUDQHIFGHENCLKl@"
                     },
                     "start_location" : {
                        "lat" : 48.9991284,
                        "lng" : -95.37630329999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.7 km",
                        "value" : 3677
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 670
                     },
                     "end_location" : {
                        "lat" : 49.0162659,
                        "lng" : -95.41817089999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMB-12 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "skajH|iceQsClAwBjAa@TaAh@gBbAqBhAIDsAv@cAj@KHOJOJQL]V_@Va@\\_@^i@h@iArAg@p@MPi@x@c@p@MTu@tAYj@g@dAe@nAYv@Ul@Y`AW~@c@bBcAhEOn@]xA_D~MU`A{@xDcBpHOn@o@rCsExRa@`BuBbJ}@tDgHlZ_@`BaBbHcChKYnAMj@Kf@Q`AOfAKr@OdAMzAGj@KlAM|BExAC|@At@A`A@`BA`C@tG?zQ"
                     },
                     "start_location" : {
                        "lat" : 49.0004182,
                        "lng" : -95.3771067
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "54 m",
                        "value" : 54
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 49.0167552,
                        "lng" : -95.41818099999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRd 91 E\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "undjHpjkeQaB@"
                     },
                     "start_location" : {
                        "lat" : 49.0162659,
                        "lng" : -95.41817089999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "24.6 km",
                        "value" : 24562
                     },
                     "duration" : {
                        "text" : "1 hour 13 mins",
                        "value" : 4362
                     },
                     "end_location" : {
                        "lat" : 49.0303929,
                        "lng" : -95.75375749999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRd 2 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMorden Sprague Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wqdjHrjkeQ]|Jg@hNUnG}@xV{Brn@}Atb@{Avb@g@hNaAnXUnGoAr]GjBw@hTgBxg@QxEw@bUe@hNk@~O_B|d@a@tKkAz[cA`Yw@rTCt@[pJWzGK`D}@xVgCvr@Ct@i@lO]xIK`DCv@cD|}@GjBsAj_@Ct@}Avb@cC~q@Cv@M`DOpEOhEw@zU]|JCt@k@`PM`ESnFKbDMpDG|AYfIc@jMKhCARi@lO}@bWK`Dw@rTOjDQjGAJCt@WfHC~@CfAAz@?B?n@?@?x@AnBAjX?vG?|BArCCrG@~@?bB?t@?v@?~V?zQ?pG?jE@lK?tE?`D?bF?v@?R?zE?zC?lE?pE@`A?t@?t@?hD?B?lB?`A?j@@zF?TApG?bE?lA@pG?zA?tD?pG?BAr@?bD?rD?|A?xE?zE?lFAxH?hI?t@A`C@xA?t@?lB?rD?tCCbD@lB?t@@v@?\\@hA@vA?@@vC?b@?R?bD?fA@zA?v@AhC?dE?bDAlG?~E?lC?lA?J?zH?v@?~V?zE?~J?fIAbD?vL?rG?|J@lN@~J@bP?dD?bD@pG@vL?pG@pG?t@?nB?fI?tL?pG?rG@xE?pG?dD?bD?hI?xQ@vX?zE?pG?lB?pG?tB?nN?tXAhUApFAxE?lBAvB?bB?t@?lB?lB?t@?rG?jB@hI?lB?lB?zEEbF?fG?z]?X?\\?fIBpS@`I?FE~S@bG@`KLt@"
                     },
                     "start_location" : {
                        "lat" : 49.0167552,
                        "lng" : -95.41818099999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.0 km",
                        "value" : 5991
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1092
                     },
                     "end_location" : {
                        "lat" : 49.0600281,
                        "lng" : -95.82239659999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMB-12 N\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}fgjH~{lgQ}@pCw@bC{AlE}GzSSl@Ur@sBjGuAdE_DrJSl@mAvDGNwAvEeHbTwJdZeEhMa@pAo@lBeBfF_GrQg@zAg@xAy@hCkC`Ie@zASl@}ClJSl@Sl@kAnDQh@mE~M_DnJoDzKg@zAsElNCJ{@hC_Ofd@g@zAg@~AuJ`ZqD~Ky@hCSl@aBdFsA`EsBdG}ErNiH|S"
                     },
                     "start_location" : {
                        "lat" : 49.0303929,
                        "lng" : -95.75375749999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.2 km",
                        "value" : 3163
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 548
                     },
                     "end_location" : {
                        "lat" : 49.0884729,
                        "lng" : -95.82238479999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eVassar E Access Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "e`mjH~hzgQkCBc@?kBBsDBc@@A?eA?uNCc@?sDAwEAC?gB?wN@c@?c@?c@?c@?kT?mGA}@?wEAoLAc@?kB?_H?gJA{F?c@?qMAkB?kBA"
                     },
                     "start_location" : {
                        "lat" : 49.0600281,
                        "lng" : -95.82239659999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 136
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 49.0894356,
                        "lng" : -95.82178189999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eBoutin St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}qrjHzhzgQG]Ws@Ue@e@]_@AI?{@^"
                     },
                     "start_location" : {
                        "lat" : 49.0884729,
                        "lng" : -95.82238479999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.1 km",
                        "value" : 5082
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 891
                     },
                     "end_location" : {
                        "lat" : 49.1327615,
                        "lng" : -95.83234829999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eMain St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_xrjHbezgQ}DxD{DlD]Z{BpBsHzG{BpB]ZwEdE{@x@wEdEsArA{BpByBnBuBhByClCwDjDyBpBa@\\cAr@yB|@_AJwD@c@?wE@oC?sD@kK@kB?c@?gA@sD?qD@sD?wE@kB@c@?kB?kB?c@?sD@gA?gA?kB?c@?gA?iA?kBAgAAoCCc@?c@AoCAgAAkBCc@?K?_B?oC@k@@_A?sD?c@?oC?uE@oC?sD?sD?kB?_@?kA@c@?u@Mm@K_@Kc@SECg@]WUWSw@q@i@o@g@k@"
                     },
                     "start_location" : {
                        "lat" : 49.0894356,
                        "lng" : -95.82178189999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "12.6 km",
                        "value" : 12610
                     },
                     "duration" : {
                        "text" : "38 mins",
                        "value" : 2262
                     },
                     "end_location" : {
                        "lat" : 49.1964681,
                        "lng" : -95.9680893
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at \u003cb\u003eWhitemouth Lake Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wf{jHdg|gQcDtGGPOn@C`@Cj@At@?rT@nf@?dD?fB?|X@vL?xKF|c@?nB?NE`AGz@EXKhAMv@QfAQn@CLo@fB}@jBkAhCMTaKhSgCbFoJvRgLxU]p@wGzM_F`K}ClGy@zAiA|BoI~P}AbDgOrZwIlQ}BvEmGfMwGvMuBbE}DnIsBlEsCxFiClFqCrFcBjDgBpDeCbF_BfDsLdVmCpFkJfRwBrES`@gD|GuDxHoJtRo@pAkItPcEnIgD~GiG`MsDvHiExIiBpDeHpNoAfCmEbJsDrHeC~Em@jAqJfSgCjE}BpEqDdHuBxD}IjPeFbJgAbCiA`CyC~FuEhJsC|FaBfDqAbCe@d@kB~@g@R[XIL_@r@Qp@IdA"
                     },
                     "start_location" : {
                        "lat" : 49.1327615,
                        "lng" : -95.83234829999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "16.3 km",
                        "value" : 16294
                     },
                     "duration" : {
                        "text" : "48 mins",
                        "value" : 2854
                     },
                     "end_location" : {
                        "lat" : 49.281747,
                        "lng" : -96.125923
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMB-203 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}tgkHpwvhQaDAeC?cG@uBAk@AgCAkABe@Gq@HcAGm@B}@TcAz@aEtG{AbCk@`AsA|BgAvAe@`@g@L]@YIs@KwAUmAc@_B_@sAc@cB_@q@UcGgBkAB_AZWHKBy@ToClB_@Xe@b@kBxAu@j@{CzBaChB_@ZaE~C_@XaCjBoDtCuErD_ExCaD`Ca@XmLbJ}DtC_CfB_D`C}HdGw@l@c@\\wBbBc@ZcEzCyAlAuBzAaDdCa@ZgAx@oIpG_CfBg@^YRSPiBxAeAt@uBfBmBfDkA`CgAxBeBdDyAzC[|@{BpG_JlXmArDwAlDwCjJSl@{@dCeAxC]dAkI`WSj@y@fCYx@sD|Ji@vAiBzEgAzCkArCuClHUj@_B~DiCxG{E|Le@hASj@aA~BSj@wAjDSh@g@nAsAxDSj@ABIn@Il@KlB@nB@zJ?t@?t@@bD?lB?t@@t@?t@@dI@jI@hP?bD?v@@`K?rG?t@@hI?nN?rG?lBAv@?zE?dDAhIAfP?t@?@CbDAt@?v@CbBaBnBOTYd@Yd@Yb@Yd@Yd@Yd@u@jAYd@Yd@Yd@s@jAMRKNgBvCu@jAYd@Yd@s@jAYd@uDfG[d@y@tA{BpDoAnBg@x@gDvFs@jAYd@s@lAyD`GkBpCEFsC|EU\\CF_AtBgApCOj@Sl@Qn@Ql@e@|AQn@Sl@qKn^cDnKWt@qCpJ{AhFoBzGgAtDADqBxGSl@e@|AqBvGkAzDe@|AoE`O}DrMqBxGkDbLSr@mBvGmB`HqAhFOp@]nAc@rBOn@Op@_EpQOn@Op@Op@oAtFoAvF_AdE_BfH}BjK_BfH_AdEOn@k@dCo@dDMj@i@xEIxBA`BCdD"
                     },
                     "start_location" : {
                        "lat" : 49.1964681,
                        "lng" : -95.9680893
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "76 m",
                        "value" : 76
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 49.282432,
                        "lng" : -96.125951
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRd 59 E\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}ixkH~quiQgCD"
                     },
                     "start_location" : {
                        "lat" : 49.281747,
                        "lng" : -96.125923
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1827
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 325
                     },
                     "end_location" : {
                        "lat" : 49.289765,
                        "lng" : -96.148481
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMain Market Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "enxkHdruiQUf@Qx@sFnVcId^]vAwNpo@WjAOn@a@fB{AbHOp@_AdEmAvF"
                     },
                     "start_location" : {
                        "lat" : 49.282432,
                        "lng" : -96.125951
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "40.6 km",
                        "value" : 40645
                     },
                     "duration" : {
                        "text" : "1 hour 55 mins",
                        "value" : 6920
                     },
                     "end_location" : {
                        "lat" : 49.5174873,
                        "lng" : -96.5105193
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMB-210\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_|ykH~~yiQ_H@cR@gA?wJ?sC@iKB_H@c@?oC?iB@_H@c@?oUDgA@c@?U?uA?gA?sD?cI?{C@mC@aB?_@?}C?}@?mA?mB?sC@gA@m@DaAJ[F_AVk@PeAb@kAr@a@VeA|@w@v@AB[`@c@f@o@~@w@zAwAzCABw@dBITm@pA{@jBmE`Ka@z@Uh@y@fBwFhMqLvWm@rAsBrE{B`FgFdLsBpEm@tAeA|Be@bAGNoEzJWh@wJlTIPgAbCgBvDc@|@}@zAu@|@gAhAaBrAgBfAe@RuBn@IBuJdCeAXuFtAa@Le@JiZ|HsFvAc@JODeFrAeBf@kGlBm@Pa@L}J|CgBh@gAZaMvDcK~CgEpAk@NmDdAoBl@yCdAyDrBaCnBgV|U]f@sAxA_BvBiA`Bs@`AqGpJ_JvMsGpJU\\oGhJgCrDu@hAmBnCoAjBkHlKu@hAcDvEoAlBmBnCkBnC[b@u@hAkBnCKN}FhGqDzDoDvD_@b@]^eGbHmDbE[^y@~@]`@gFbG]^{IdK}IdKsB`Cy@`AwA`B[^}@bAmC~CwA~A[`@cHbIsB`Cy@`AkE`Fy@`A]^kFhGyZx]iIvJuEjFsEjE{AvAyAvA_@\\{@x@]\\yBrB_@\\gAdA{@r@s@p@}@x@]Z]\\{AtA_@\\wCnCgB`Bm@h@CB]\\{AvAeA`Aw@z@qAzA]^_@b@aDpE_@h@gAjBYd@mApBYd@yC`Fy@jAYb@qAlB[b@u@fA{@pA}GxHy@`AmE~Ey@~@[\\A@wGtHg@j@]`@sFjGiBtBiCxCy@hA{ApCq@`BqCpJmArEQn@GPs@tB?@_BfDUh@MT_AzAYd@[b@cBlC_@j@Yd@oAnBED{A|Bo@~@mA~BOZ_BbFQr@WnAKr@ERE^CLQ~AIjAa@bJSzISrGCt@s@jUMbECjA_@`KMbDMdD]~Io@zRe@lNGlBi@tOs@pWWhIg@|QGlBUxIIzA[tFqAdKk@|CyBvLiDpTMr@e@xCKr@e@zCe@zCMp@WfBMr@WfBe@xCeAxGsBvMKj@mAdHO`AG`@ENKr@_A`GCLId@}@tF]pBMr@a@jCi@jEE^e@tGKhDAnE@dB?t@?v@?z@?`D?hAAb@?j\\?dDAbK?j\\AtG?lB?zK?~D@lIBjVBp\\C`b@?`K?~GAdB@|LArA?j@@vDDzVAvH?jI?vM@jI?v@?rG?v@?`K?lB?zd@?bK?rO@nS?F?t@?fBAdBAh@Aj@IpCUhCIj@a@bCQ|@[zAAFMb@c@xA_@|@Sd@c@`Aq@pAaAzAkAhBsBnCgCfDaDdEo@~@[b@uAnB]d@yC`EEFeAzAGFcDvEMPmFlHwDpFoBzCYd@yA|BgGvJcA`B[d@yKdQCFaCvDmBrCw@tAkBpCmBtBQPkIdG_OtK_FnD_@XwLzIwEhDo@d@_@X_BjAy@l@eEzC_CdBmBtAUT_Av@_@^a@f@QTs@bAeAbBk@dAi@`AQXGJYf@CDm@dAg@|@kAnB[l@gAhBm@fAc@t@Yl@s@jAGJo@fA[l@U`@o@|@q@bA_@`@w@v@y@p@_An@sAp@kBj@oCz@c@LoR`G}T~GgA^kC|@[J]L}@VuAb@gA\\]LcAZ_AXcA\\G@YJ[Jy@Xo@Zg@\\WP[T]XYVUT]\\[^]b@g@t@iAjByAlCs@lAgM`UYd@iM`UYf@oDpGkI|Ng@|@{Qx\\INEH{B`EYd@{JnQoHvMWd@uKvRWd@_CdEWd@iEzHiI~Nk@dAGJGLcBvDm@hB[jAK^[tAGVEXSrA[pCQnCEdACjAApA?`E"
                     },
                     "start_location" : {
                        "lat" : 49.289765,
                        "lng" : -96.148481
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1650
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 292
                     },
                     "end_location" : {
                        "lat" : 49.5323219,
                        "lng" : -96.51055529999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePrincipale St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-210\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-302 N\u003c/b\u003e (signs for \u003cb\u003eSteinbach\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ikfmHvu`lQ}PFoCA_ABoC?kE?uE?sA?cA?qB?uIAiK@iB?oC?gAAc@?c@?e@?oA?c@?gA?"
                     },
                     "start_location" : {
                        "lat" : 49.5174873,
                        "lng" : -96.5105193
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "18.0 km",
                        "value" : 18049
                     },
                     "duration" : {
                        "text" : "53 mins",
                        "value" : 3164
                     },
                     "end_location" : {
                        "lat" : 49.6640923,
                        "lng" : -96.6304286
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMB-210\u003c/b\u003e (signs for \u003cb\u003eSainte Anne\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eManitoba 210\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_himH~u`lQ?jI?zE?v@@`R?v@?lB?tG?xL?v@@|E?v@?dD?TCvAClBAn@GdAK|AUpBs@|DELc@lBs@nBo@zACDe@bAc@t@cBzCs@lAeAjBsBlDiAbBEHgBbC]`@w@`A{@~@[^_@\\yAxAKHqAhA]\\yEfEwEbE]Z_@ZoGvFcA|@qKnJ_IbH}ArA]Z{BpBuHxGyEbEwEdE}@v@{BpB]Z_@ZuG|F_@ZmNbMwF`FcZtWsItHqKlJ_@\\qLhK{ArAiB~Aq@j@_At@{BhB{FvEgCrBeDrCOLcElD}@v@{EhEwG~FiEzDy`@`^sHzGgFrEkC~B}@x@{@v@A?yClC}@v@{CjCyBpB}ArA{AtA{CjCmNbMqLjKyApAa@^_@ZuG~F]Z}@v@wFbFm@f@}AxAmA~@c@^iAr@cAd@g@Ro@XC@_AZUFyCn@oCVe@@a@?kB@iIBeB?c@?uE?_H?]?i@ByCHqC`@mAVmA`@iEfBGBsM~GaMpGaQzIsGfDYLg@VaCz@c@LsG|BuHlC}J`DgLrDyYpJ_O|EsCbA{Ah@_A\\mB|@aAl@oA~@a@\\{@t@cAbAkBzBy@jAo@fA_R~Ys@jAmG~J}FlJgA`BqAzBeApBu@|AoBjEo@~A{A~DqBbH}@vCyAxEgAnCqBbDc@p@a@h@}@dAqAhAe@\\c@ZaAn@YNiBt@mAr@{Ab@c@La@LWHaDn@G@_Bb@cBZoALmBJqA?G?}AEmAKs@IQEoBa@[Mc@Oa@OCAeAi@_DcBaAg@"
                     },
                     "start_location" : {
                        "lat" : 49.5323219,
                        "lng" : -96.51055529999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.6 km",
                        "value" : 2571
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 486
                     },
                     "end_location" : {
                        "lat" : 49.6759052,
                        "lng" : -96.66000079999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCentral Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-207 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-210 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow MB-207 N\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q_cnHdcxlQGVgA|FsC~NQv@}BnIIZiA~D}BnIcBlGeDvL[`@w@tCuBbLk@|Ck@~C_ClMgA|FIb@[xBgAfGw@hE[rAcArGEVEPIZCJCHEJKTEHILGJY\\IFMJWPWH_Bh@OJQL[Po@j@{ApAcBxASPa@d@i@x@GNWh@cA`C"
                     },
                     "start_location" : {
                        "lat" : 49.6640923,
                        "lng" : -96.6304286
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 817
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 144
                     },
                     "end_location" : {
                        "lat" : 49.6827075,
                        "lng" : -96.6587983
                     },
                     "html_instructions" : "Take the \u003cb\u003eMB-12 N\u003c/b\u003e ramp to \u003cb\u003eWinnipeg\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "mienH~{}lQGDA?UZGFIFKDUDW?WEMCO@yHaF_@WcG}DOKIEGAGCOAW?]DWF[PQL]Ti@d@oA~@WL]JQFG?YBc@?IC]EEC_@OA?c@E"
                     },
                     "start_location" : {
                        "lat" : 49.6759052,
                        "lng" : -96.66000079999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2320
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 420
                     },
                     "end_location" : {
                        "lat" : 49.70137219999999,
                        "lng" : -96.64461609999999
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eMB-12 N\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "}sfnHnt}lQk@]eDeBu@a@KEeNoHqWeN_EuBoF{CsFuDaAw@uAkAuAqAkAeAgBcBaA_AsDeD}@w@]]qIaIwCqCm@m@m@k@KI{@{@ECw@s@c@a@"
                     },
                     "start_location" : {
                        "lat" : 49.6827075,
                        "lng" : -96.6587983
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 441
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 59
                     },
                     "end_location" : {
                        "lat" : 49.7006673,
                        "lng" : -96.64452559999999
                     },
                     "html_instructions" : "Take the \u003cb\u003eMB-1 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans Canada Highway\u003c/b\u003e ramp to \u003cb\u003eWinnipeg\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "qhjnHz{zlQGUA?YYQWOa@KYI]C[CSA[?K@S@YBOF]FSN_@HMJMLMTMJENCH?NAL@JBHBHDLFHHJJJRJTJV@FBPFZ?\\?p@Cb@AJCXEZY~A"
                     },
                     "start_location" : {
                        "lat" : 49.70137219999999,
                        "lng" : -96.64461609999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "33.6 km",
                        "value" : 33614
                     },
                     "duration" : {
                        "text" : "1 hour 40 mins",
                        "value" : 6002
                     },
                     "end_location" : {
                        "lat" : 49.8560399,
                        "lng" : -97.03843759999999
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-1 W\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "edjnHh{zlQe@zACJ}CrKENu@nCyJb\\aBxFuFdR_Lp_@gDbLqJ|[y@lCkA|DiDhLqL~`@w@lCkA|De@~AiDhLcChIw@lCgDbLQl@uFfRsVdz@cR|n@ic@dzAyMbd@yFtRyIbZoOlh@gBdGuAnEq@bCqP`k@uX`|@mb@hsAa_@lkAiCdIuXh|@eZt_AiEdNa@lA{@nCqAdEgAfDqAdEkBbGeAfDy@hCeBnFi@fB[bA}I|X}Rrn@cXzz@oCxIo@rBQh@}CxJoAzDgH`UcCzHsE|N}DbMqVjw@aSbo@cBlFmb@vsAcJtYgR`m@{EnOSl@_CrHaWrx@u[zcAu@|BsBvGoB`HwAlFs@tC_ArD]jACN[hA{@lCK\\qCdJ_@lAgAfDk@dB}BnHo@vBiE~Mi@xAe@jAk@rAy@dBe@z@c@r@c@x@g@t@s@~@INi@l@mAzA{AxAeD|CqCjC_Az@a@`@_@b@iArAw@bAy@lAy@tAw@xA_AjBeAfCc@hAe@tAe@~AAB[rAe@dBk@xBoA`F[nAaCbJg@lBg@lBs@jCgAdESt@Sn@?BcDjLaDbKq@vBq@~BYtAUnAQjAQhAKpAI|@KdBGdBEtB?dC@jC?lBAhCAtAAJGdBKbBO`BSbBETKr@ERG^S~@eArDw@fCm@pBo@pB{@lCAB_@pAo@pBo@rB_AxCeE~MsC~IiBzFkD|K?@Y|@g@pAc@dAa@~@mAxBmGjKgCjEqTd_@aA`BoBbDaA~A_A~A}BzD{JrPwBpDm@dAs@lACFi@dA_@v@Wj@ADYt@]|@Ur@Wx@Wx@Sx@Sz@S|@Kf@Q~@Ot@AHMr@S`BOlAKhAIbAItAG~AE`BE`D?jA?dA@bA?\\BfAD~@TxERfEVzERzDH|AH|AJlBDv@FvAJlB@NJbC?PBt@D`B?L@jC?@CxBGtCAPGrAAXGt@APc@bFiAxMO~BKdCE~B?xBAtM?H?RAnI"
                     },
                     "start_location" : {
                        "lat" : 49.7006673,
                        "lng" : -96.64452559999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "51 m",
                        "value" : 51
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 49.85649799999999,
                        "lng" : -97.0384289
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNiakwa Rd E\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gohoHfygoQ{AA"
                     },
                     "start_location" : {
                        "lat" : 49.8560399,
                        "lng" : -97.03843759999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 503
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 86
                     },
                     "end_location" : {
                        "lat" : 49.85628699999999,
                        "lng" : -97.0454029
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eNiakwa Rd E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "crhoHdygoQ?p@?P@P@V@h@D`@B^L`ABNBN@L@P?R@R?R?\\?zC?J?|LAtI"
                     },
                     "start_location" : {
                        "lat" : 49.85649799999999,
                        "lng" : -97.0384289
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1473
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 382
                     },
                     "end_location" : {
                        "lat" : 49.8561845,
                        "lng" : -97.06553939999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eNiakwa Trail\u003c/b\u003e",
                     "polyline" : {
                        "points" : "yphoHvdioQ@nB?l@?jG?zD?d@?FAHA\\@N?DBNBHHLFHDJDNAT?\\?LEHEBCLGNCJAP?z@AlB?pB?x@DdE?TAfH?f@A|E?nBAdG@nF?|D@~F?nB?hBAtB?nB?TAnC?nBCd@?F?F?@@FDFHBF@DH@D@J@N?ZAHADCDCBCD"
                     },
                     "start_location" : {
                        "lat" : 49.85628699999999,
                        "lng" : -97.0454029
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 959
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 220
                     },
                     "end_location" : {
                        "lat" : 49.8561161,
                        "lng" : -97.0785532
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNiakwa Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "cphoHrbmoQKFEFAD?N?@@t@?@AvCBhF?BA~E?b@AzDAtE?jECb@?bC?P?d@DvE?lD?v@?pDCj@Av@GvBGr@CTCVDRHNPL@FBB@@H@DBBL"
                     },
                     "start_location" : {
                        "lat" : 49.8561845,
                        "lng" : -97.06553939999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "12 m",
                        "value" : 12
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 49.85612279999999,
                        "lng" : -97.0787143
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eLakewood Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wohoH|sooQ?^"
                     },
                     "start_location" : {
                        "lat" : 49.8561161,
                        "lng" : -97.0785532
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 702
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 234
                     },
                     "end_location" : {
                        "lat" : 49.8565894,
                        "lng" : -97.08799999999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eLakewood Blvd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wohoH|tooQCJGBG?I?C@EBGHGJAL@t@@fB?d@B`@?FBZ@\\?b@@N@fBBrB@fA?dA?jCAb@?R?tA?P@F?FDNBL?L?H?FCHCFCFAF?LAh@?NA\\AXIdDCl@APANSnA?BYnBAJ?H@J?HBH@DBDDB@F@NEL"
                     },
                     "start_location" : {
                        "lat" : 49.85612279999999,
                        "lng" : -97.0787143
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 116
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 130
                     },
                     "end_location" : {
                        "lat" : 49.8573037,
                        "lng" : -97.0889413
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eArchibald St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRte 30 S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "urhoH~nqoQEFE?A@EDIFG?M?E@A?A@EHc@tBGREDEDQ?"
                     },
                     "start_location" : {
                        "lat" : 49.8565894,
                        "lng" : -97.08799999999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 353
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 49.8583193,
                        "lng" : -97.0935169
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cwhoHztqoQA?IZ?DC`@?R?@K\\ITIXCP?FGXORIh@C\\On@QlAMn@EVQpAIt@AJGf@E^CTC^Cf@C\\A`@@Z"
                     },
                     "start_location" : {
                        "lat" : 49.8573037,
                        "lng" : -97.0889413
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 421
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 73
                     },
                     "end_location" : {
                        "lat" : 49.8580731,
                        "lng" : -97.0991691
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "o}hoHnqroQFHV^FNF\\@Z?Z?bAApA?zA?|@?DAd@EfAEjAC`@?N?RAZ?b@?ZAFAHCHCF@DBVDXDh@?R?PAT?B?P?\\@NBVJh@"
                     },
                     "start_location" : {
                        "lat" : 49.8583193,
                        "lng" : -97.0935169
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 160
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 49.859383,
                        "lng" : -97.099941
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eDes Meurons St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}{hoHxtsoQEFEBG@G?GCGCEAG?I@GBYT{BdBc@R"
                     },
                     "start_location" : {
                        "lat" : 49.8580731,
                        "lng" : -97.0991691
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.5 km",
                        "value" : 2457
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 430
                     },
                     "end_location" : {
                        "lat" : 49.8799026,
                        "lng" : -97.110647
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eDes Meurons St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "cdioHrysoQeA~@qA~@cAt@m@b@UP}@n@cAt@cAt@cAv@}@n@eAv@}@n@eAv@}@n@cAv@_Ap@cAt@_Ap@cAt@gAv@iAz@}@r@eAv@aAp@cAt@cAr@cAt@aAp@cAt@_Ap@i@ZIDIDI@?@G@I?I?G?IAg@Kg@KMAK?K@GBC@IDKFe@^aAr@cAv@cAt@mAx@mA~@uA`AKDEBG@G@qBDkET_CRoCLgERwAHyAHuAJyCRwCN"
                     },
                     "start_location" : {
                        "lat" : 49.859383,
                        "lng" : -97.099941
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 906
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 157
                     },
                     "end_location" : {
                        "lat" : 49.8796001,
                        "lng" : -97.1232313
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eEugenie St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kdmoHp|uoQBlC@dC@j@A\\?NANALKTADAFAF?TDpEJlIFtGVfRXfR"
                     },
                     "start_location" : {
                        "lat" : 49.8799026,
                        "lng" : -97.110647
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1333
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 336
                     },
                     "end_location" : {
                        "lat" : 49.8914876,
                        "lng" : -97.12503959999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTache Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "obmoHdkxoQ}AJsAHw@@a@@q@Bi@ByAFO@W@w@BM@U@sAFe@B[?k@BS@cBHkDPsBHsAFoCJqA?U@[@eCJc@BoCL{@D_@BOBK@MBIBUFSFsE|Aa@Ni@TQJ[L"
                     },
                     "start_location" : {
                        "lat" : 49.8796001,
                        "lng" : -97.1232313
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 783
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 164
                     },
                     "end_location" : {
                        "lat" : 49.8935695,
                        "lng" : -97.13460789999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eProvencher Blvd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRte 57 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Rte 57 W\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ylooHnvxoQPhAVxABLF`@Jv@L~ADtABd@@`BAn@CfA?@GlA_@tC[pAW`AKXGP{B|GIX[z@Qb@Sf@Sd@IPCDGJEHYh@OTOVYf@Sb@KVITOj@"
                     },
                     "start_location" : {
                        "lat" : 49.8914876,
                        "lng" : -97.12503959999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "77 m",
                        "value" : 77
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 49.89388599999999,
                        "lng" : -97.13555770000001
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePioneer Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRte 57 W\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "yyooHhrzoQ_A|D"
                     },
                     "start_location" : {
                        "lat" : 49.8935695,
                        "lng" : -97.13460789999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "86 m",
                        "value" : 86
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 27
                     },
                     "end_location" : {
                        "lat" : 49.89462959999999,
                        "lng" : -97.1352558
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWestbrook St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRte 57\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "y{ooHfxzoQu@[OEmAY"
                     },
                     "start_location" : {
                        "lat" : 49.89388599999999,
                        "lng" : -97.13555770000001
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 267
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 88
                     },
                     "end_location" : {
                        "lat" : 49.8955494,
                        "lng" : -97.13859939999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePortage Ave E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRte 57\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "m`poHjvzoQ_@`BOn@ADCLc@zBKH[x@I\\GZG\\EZGXAFCPCRAJABARAR?VB`@?F"
                     },
                     "start_location" : {
                        "lat" : 49.89462959999999,
                        "lng" : -97.1352558
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "49 m",
                        "value" : 49
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 49.8951374,
                        "lng" : -97.13836839999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMain St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRte 52 S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "efpoHfk{oQRKDAh@WLG"
                     },
                     "start_location" : {
                        "lat" : 49.8955494,
                        "lng" : -97.13859939999999
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "1,335 km",
                  "value" : 1334937
               },
               "duration" : {
                  "text" : "2 days 18 hours",
                  "value" : 237360
               },
               "end_address" : "Calgary, AB, Canada",
               "end_location" : {
                  "lat" : 51.0448403,
                  "lng" : -114.0718702
               },
               "start_address" : "Winnipeg, MB, Canada",
               "start_location" : {
                  "lat" : 49.8951374,
                  "lng" : -97.13836839999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 208
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 49.8933699,
                        "lng" : -97.13740949999999
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eMain St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRte 52 S\u003c/b\u003e toward \u003cb\u003eWilliam Stephenson Way\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRte 57 E\u003c/b\u003e",
                     "polyline" : {
                        "points" : "scpoHxi{oQrB_Ad@UnBy@vAo@"
                     },
                     "start_location" : {
                        "lat" : 49.8951374,
                        "lng" : -97.13836839999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 203
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 36
                     },
                     "end_location" : {
                        "lat" : 49.8927531,
                        "lng" : -97.14008149999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eGraham Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qxooHxc{oQ^hC`@zBx@nG"
                     },
                     "start_location" : {
                        "lat" : 49.8933699,
                        "lng" : -97.13740949999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 522
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 49.8883154,
                        "lng" : -97.1376856
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eGarry St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "utooHnt{oQFCpAk@pEqBhH_DhEmBtAm@"
                     },
                     "start_location" : {
                        "lat" : 49.8927531,
                        "lng" : -97.14008149999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1705
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 358
                     },
                     "end_location" : {
                        "lat" : 49.88588430000001,
                        "lng" : -97.16069399999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-1 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_ynoHpe{oQz@|Fz@bGx@hGz@bGz@dGz@hGd@fDv@tFHd@`A|GVhBDZDn@@VDPAx@EfDElCCnBC`BGnEGnFGrEEpCEnBE~CCdCGvFA@AB?@?BCR"
                     },
                     "start_location" : {
                        "lat" : 49.8883154,
                        "lng" : -97.1376856
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1014
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 215
                     },
                     "end_location" : {
                        "lat" : 49.87715009999999,
                        "lng" : -97.1631558
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMaryland St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRte 70 S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "winoHhu_pQJ@t@FH?J@fA@zCFzADfAD|CHj@BZ@zADrCH~CLzCLb@BRBXDPNNPPR@@PT~C|DlAdAfAd@NH"
                     },
                     "start_location" : {
                        "lat" : 49.88588430000001,
                        "lng" : -97.16069399999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.8 km",
                        "value" : 2832
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 491
                     },
                     "end_location" : {
                        "lat" : 49.8766553,
                        "lng" : -97.19975009999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWellington Crescent\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "esloHvd`pQUdB?X?H?HDx@BRDRFVx@vCDPj@rB|@lDt@rCz@dDpBvHb@dBTzA@P@HBXBZBZ@d@?N?L?J?ZM`KGtFAL?NAL?JAJAJAJAJCHO`A]pBERcAlGMh@IXGVGLGLELEHINYd@cA~As@fAsA|BGHIJCDCFILSb@Uh@GNGNIZQx@I`@ETEVCXCVGt@CZA\\AZAZ?l@?P?Z?^B\\?@@X@ZBXDXDVBTDP@H@H`@fBBHF\\DZDTBXBVB^B^@^?^?dBAj@@^?ZB\\@XBXBVDVDTNv@FXDZDZBZ@X@Z@l@AnB?v@?H@~@?\\@`@@x@@^Br@HjABb@JnAHn@@BDVNl@NlBBT@R@P@d@?f@C`@C^I~@@\\ADCRCPC`@Ef@A`@A`@?p@@|@@v@@XBT@D?JBT@R?@@V?Z?@?v@?B?`@APA^GpB?H"
                     },
                     "start_location" : {
                        "lat" : 49.87715009999999,
                        "lng" : -97.1631558
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1637
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 293
                     },
                     "end_location" : {
                        "lat" : 49.8728967,
                        "lng" : -97.2180022
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "cploHligpQGDCFABABAFAL?N@JFt@Ft@Fv@Dh@?JHt@Ft@Ft@Fp@Dl@F~@?BDv@JlB?v@?DAp@Ap@ABAv@?v@Av@Av@ALBvB@^Bv@j@xA@DV^?@`@Hb@Jb@AfAAb@AL?TAl@CH@N?B?D?D?D?RAB?L@XFPBJDD@JJJJNTJN@BJ`@FRDd@Bj@L|C@Z?V@^?\\Az@?j@C^AJGh@?@Gr@AHM~@G\\Kj@[nBGd@CNARA^?B?^@T@n@@FHl@@DJr@?@Nn@Nh@@FJp@?@BP@NAP?@APCPGNGTGLENAN?P@L?N@d@BXD\\?BBT?N@J?VF\\F\\Dd@BTLZJLDJDHJd@@DFLDBJ?"
                     },
                     "start_location" : {
                        "lat" : 49.8766553,
                        "lng" : -97.19975009999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 439
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 79
                     },
                     "end_location" : {
                        "lat" : 49.8720321,
                        "lng" : -97.22380199999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eWellington Crescent\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sxkoHn{jpQTBBDBP~@fIDX@LHV@H@H?F?L@V@N@L@JBLHV?@BH@J@L@~@?F@v@@v@?v@@t@@v@?L@h@@b@Bl@Dt@BL"
                     },
                     "start_location" : {
                        "lat" : 49.8728967,
                        "lng" : -97.2180022
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1713
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 301
                     },
                     "end_location" : {
                        "lat" : 49.8731431,
                        "lng" : -97.24528319999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eskoHv_lpQUJ[PCBCDCFK^Kb@CFCBEBE@SJA?CBGFOTYb@CDOVEJABAFCFAF?HALGt@ADALAFGTa@bBa@`BOp@Op@a@`BOp@Qp@On@Op@Oh@AFMp@Kd@ALIr@It@CRG`@?@Gl@G`@Ad@@j@BX?DDd@DZ@P?JCRCT?X@R@T?P?^?n@E~@Ct@Cb@ARANGTEJGTAb@Cj@E^C`@ADGl@Gb@APAP?d@?J@j@@`@@dA?FBd@Eb@Af@@p@?@@`@?RFZB`@T|ALnBDb@BLBRD`@@JN~ADf@@LDt@D|@F|@B\\Dh@Fv@@DHt@JlB@H@Z?Z?P@Z?RD`ADTDZLj@Vp@NZR`@BDx@fAVNPJLL"
                     },
                     "start_location" : {
                        "lat" : 49.8720321,
                        "lng" : -97.22380199999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 449
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 77
                     },
                     "end_location" : {
                        "lat" : 49.8727856,
                        "lng" : -97.249882
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "czkoH~eppQDR@J@RCb@GHCH?NAp@?VAZ?N@LJNHLNDPAB?PELCH?J@N@@?JHHFBHBHDXBTJl@BNBNBTBL@@@T@P@HA@ANCLGHC@IBMBI?A@E@E@EBEFCJCFEZCNERA`@AJEj@AZEn@E^?@A\\"
                     },
                     "start_location" : {
                        "lat" : 49.8731431,
                        "lng" : -97.24528319999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1141
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 207
                     },
                     "end_location" : {
                        "lat" : 49.8702163,
                        "lng" : -97.26458629999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eVialoux Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}wkoHvbqpQF?B@?@BD@FBd@DX?FFd@Ft@Ht@B`@BRH|@Fl@VfCBX@?DXDVHVHVRl@\\bA`@jAd@|A@@FRDRDVTtARrATxAv@zEHf@r@nEJr@Jn@L~@Jr@Fn@B`@B\\?L?H@p@AxBAb@At@CnBAh@AXAZAv@B\\?B@FFJNPHNFX?B@P?NERCLQZAR?DC\\@RIRKP"
                     },
                     "start_location" : {
                        "lat" : 49.8727856,
                        "lng" : -97.249882
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 459
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 78
                     },
                     "end_location" : {
                        "lat" : 49.8741733,
                        "lng" : -97.2628435
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{gkoHt~spQGA{@[m@UUKc@Qg@Ui@UOGa@Qa@Qa@Sa@Qq@[s@[i@Ui@Qe@Oq@Mc@CaAIGA"
                     },
                     "start_location" : {
                        "lat" : 49.8702163,
                        "lng" : -97.26458629999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "11 m",
                        "value" : 11
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 1
                     },
                     "end_location" : {
                        "lat" : 49.8742014,
                        "lng" : -97.26298919999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003ePinewood Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q`loHvsspQAFCT"
                     },
                     "start_location" : {
                        "lat" : 49.8741733,
                        "lng" : -97.2628435
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 142
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 51
                     },
                     "end_location" : {
                        "lat" : 49.8754769,
                        "lng" : -97.262846
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCharleswood Pkwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMoray St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRte 96\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "w`loHttspQu@Ca@Ao@CsAOc@A"
                     },
                     "start_location" : {
                        "lat" : 49.8742014,
                        "lng" : -97.26298919999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "11.1 km",
                        "value" : 11071
                     },
                     "duration" : {
                        "text" : "33 mins",
                        "value" : 1981
                     },
                     "end_location" : {
                        "lat" : 49.8773981,
                        "lng" : -97.4142088
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-1 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "whloHxsspQGb@UxAGZKh@_@hBQdAg@pCm@rDY~AOt@Y~A[jB{ApIW|A{@rFMx@e@bDQnAk@`Ea@nCKr@CNIj@EVU|Ai@jDU~AkAjHOz@E\\M`AAHIl@Gj@Ir@I|@KbBMxAKxACPQrBGp@[zCKnACX]rDMvAUvCS~Ba@pEQdBYxDCXa@lEWzCUdCc@zEE^InAMhAUnCIv@cAfMGj@UlCUpCUxCC^MnCStEEtAAz@?xAAjC?pA@P@vA@l@Bz@@b@@\\@NDn@D`APvC?BJbBDj@LdC?BFhAFnALlBBn@^|G@NJrBHbA?@F~@?Rd@dH\\fFRdDLvB@^`@zFZ|FP|CRjD^hEHnANdCBTVpEf@lJ|@|Nd@fJJnBVzD@Rt@|LBn@R|CLrB^bGJfBDh@FjA@Ld@dGBb@LbBhCvb@bArPd@xHLtBTrDJ~AJbBFfAPnC^fGLzBNxDJvDJtBFnAXlE^`GJpBP~DFjBF~BTjW@v@BnBHlI?v@R~SBfBFfEFhIp@lf@JdJ?pICdGQb^CxHGvLKrG_@rOWtJS|KDn@IbC?b@Ez@Cr@Af@WvDGr@k@nGsAxOMxAQr@q@tH"
                     },
                     "start_location" : {
                        "lat" : 49.8754769,
                        "lng" : -97.262846
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.0 km",
                        "value" : 5968
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1055
                     },
                     "end_location" : {
                        "lat" : 49.8870488,
                        "lng" : -97.49555149999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePortage Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wtloHxeqqQMCM@IDEHGJCLC^YrDYfFQbDEv@QjDAx@Cb@Aj@ATAfIClD?TC^CbAo@pLo@|Mi@hLw@rNa@pI?BUrGy@rUc@pNStGCv@u@nUCv@]nKKxCc@`LEnAOpDQpEQ|EOjE}@xUi@pN_AfWiAtZ_A~WC^Et@K|BYtDs@`HUpBIt@_C~RIt@Ir@_C~RkCrUg@nEEXE`@k@fEa@nByA~GCLQbAGb@Kr@Kr@Kt@a@|C"
                     },
                     "start_location" : {
                        "lat" : 49.8773981,
                        "lng" : -97.4142088
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "32 m",
                        "value" : 32
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 49.8867616,
                        "lng" : -97.49557489999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBoivin Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "aqnoHdbarQb@BT?"
                     },
                     "start_location" : {
                        "lat" : 49.8870488,
                        "lng" : -97.49555149999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "53.7 km",
                        "value" : 53747
                     },
                     "duration" : {
                        "text" : "2 hours 42 mins",
                        "value" : 9723
                     },
                     "end_location" : {
                        "lat" : 49.9751378,
                        "lng" : -98.22652309999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-1 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gonoHhbarQyAdMGb@eAbJK`AGn@CXANEn@Ej@ItAANCn@Aj@EnAAlAAhA@hA@bBBpAHpEXzMDrBP`JT|JB|ALlGLrGB`AHnDb@`RDhBP~ILtF?LFvC@bABdB?z@@p@Az@?rC?zF?~`@?hGA~D?jPAhI?rO?`OAzO?xM?rH?lO?lCAhDGxJMnKIhFGrM@|`@Chz@?`d@?nK?v@Aje@?l^Cp_A?lIA|v@?xU?v@BtgB?zL?`U?nF?tF?zD?|BEhCExAA\\KnCMnBWzCGp@MnA}@`Ia@zD}AxNcAbJu@~Go@~FuBvRgIzu@kO|vAs@tGsBnRyDz]gDf[yEdc@mBpQi@|EeAnJeB|OK~@In@aBnOcBnOWdC}@lISjBs@pGsBnRCLIt@qAvLw@tHmBlQMdAmBlQSfBo@~FMjAgDh[{Ezc@Gp@gA`Ko@rF[zC[vC_@tCm@xF{@nIoB~QEb@Gb@{@fIeB~OgD~ZmDp\\uAjMoH`r@wAxMw@rHEVsAhMsAxLI~@mBbQg@vECVE\\CTq@lGoAvLaBhOIx@ShBwArMgBtPuAnMcAfJoAnLgAbKIz@c@dEeB|OqFvg@_A~I_@hDABmAfLIt@e@jEyBnSg@|E]xCcAvJOtAYdCqAzL{Ity@}K|dAmAdLq@hGm@zFkB~P_@pD]fDEVCRoDb]wAtMYpCsAzLc@fE}CzYSjBgCxUe@pEkD~[[tC}Dj_@e@fEoAlLuCnX_Iju@K~@oCdWsJ~}@_BdOiD`\\sFjh@gBnPIt@kBnQmBrQaSdlBIt@It@{Dv^gE`a@qC|WoD|\\eBbP]fD_BfOUtBiArKWjCmAbLu@bH[|CiApKOpAyB~SCL_BhOEb@E`@iIfw@{AnNQjBi@zFmAfLkAbLaAbJi@fFe@dEmB`RsBlRoArLIt@cAnJoD~\\wBjS_BdOgAjKO|Ak@bFeA`KiCnViBbQ}@lIa@|D]rC_@hCYhB]lBkAxGo@vDi@~Cy@zE{AtI{AtIi@~CuAbI[dBuCxPa@zBa@|Bm@hD]jBKn@QbA_@dCIh@Ip@OtACVE\\E^E`@Cf@MbBO~BC\\AZA^Cj@CfAC`BC|BC|BCdDCxDEfGGzHKpOGlGI~MGpJQt[ExFAl@Av@QlW?v@GbIIpJO~TGbJO`UOrTK|NGxKGpJAjA?r@GbIE`IUj[QrVCfDUd\\ExII~KGpIGvJEdGAvAIjNGnH?@GhLOdSA`AIlOIjKM|RCxEAv@ItMIjMGlI?PGbIChCOfYCbDCfDCxBE`BEzAIxBIjAOnBSxBOnAOzA[lC]lCGj@KjAEp@Cf@GpAC~AA~@?n@?l@@l@@f@Bj@FhABf@Ft@T|BHp@BTNfAFh@b@`Df@xDL|@"
                     },
                     "start_location" : {
                        "lat" : 49.8867616,
                        "lng" : -97.49557489999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 778
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 139
                     },
                     "end_location" : {
                        "lat" : 49.9739315,
                        "lng" : -98.23718339999999
                     },
                     "html_instructions" : "Take the \u003cb\u003eMB-1A\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans Canada Highway\u003c/b\u003e exit toward \u003cb\u003ePortage la Prairie\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCity Rte\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "sw_pHvzovQ@\\?L@H@LBNBXPrAPjAT`BPjALfALhAJfALrA?LFp@Dv@@P@\\JfCF`CNtF@L@f@@ND|ALnF@f@NdG"
                     },
                     "start_location" : {
                        "lat" : 49.9751378,
                        "lng" : -98.22652309999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "8.7 km",
                        "value" : 8662
                     },
                     "duration" : {
                        "text" : "27 mins",
                        "value" : 1643
                     },
                     "end_location" : {
                        "lat" : 49.9751355,
                        "lng" : -98.35651779999999
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eMB-1A\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans-Canada Hwy 1A\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Trans-Canada Hwy 1A\u003c/div\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "ap_pHj}qvQf@fNZ|JFjHHzCBj@\\tLHlBDv@JlCTbHZjJ@P@Rf@jRR`J`@|P|A|f@DbC@`A?tBAtACn@ChBOtGCv@?NKtHKvFA\\MpFCz@?NGhCIb@CVIjEEtDC`AKzFM|FOfGChBEjCKlEEjAKxFCxAKfFAlCSfIEhBElCGrBKvFEdCErBOrFErCCvBOnGM|GCbAAv@EtB?jAAfABhB@n@?@XlDDb@N`@^zEVvCXlDHt@Ft@d@pGD`@^fFHt@j@pGh@lGf@jGj@zGFp@`@jEXvCAt@LjAB|BApB?b@A`ACl@MvCgBdMc@tCC\\OhBm@pCU|@Ql@Qv@IXSr@Wz@k@vBCJ_@~AG^g@hEQrACXQbAY~BQrA[hD]bGg@bIqAtSWxGEhO?v@?v@GdRA~EAfK?v@AvG?x@CfOA~FArM?n@"
                     },
                     "start_location" : {
                        "lat" : 49.9739315,
                        "lng" : -98.23718339999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1202
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 205
                     },
                     "end_location" : {
                        "lat" : 49.9751481,
                        "lng" : -98.37330519999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e at the fork, follow signs for \u003cb\u003eMB-1 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans Canada Highway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBrandon\u003c/b\u003e",
                     "maneuver" : "fork-right",
                     "polyline" : {
                        "points" : "sw_pHfgiwQ?tNAh@?L?fD?hB?nE@`DAjE@dFAh@?v@?nB?tB?lE?dEAdC?|A?dCApA?t@AfCChC@r@?`@AxA@N@HDN"
                     },
                     "start_location" : {
                        "lat" : 49.9751355,
                        "lng" : -98.35651779999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "113 km",
                        "value" : 113116
                     },
                     "duration" : {
                        "text" : "5 hours 39 mins",
                        "value" : 20337
                     },
                     "end_location" : {
                        "lat" : 49.886864,
                        "lng" : -99.91171659999999
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-1 W\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "uw_pHdplwQApF?H?jD@`H?nB?HAl@?H?v@?t@?~A?~@AvI?@?l@?vB?d@?lB?`A?N@`R?nB?lI?vC?vD?lN?`O?d@?vB?~@?nI?xK?pC?`D?dB?lC?|A?lB?pA?b@?jA?r@AzC@bC?fC?dCA|@?v@?h@?dA?rA?dD?lC?R?jD?jD?jD?lA?v@?pEAbp@@`\\?zc@?lFAdQ?`Q@fK?|S?fYAtN@~S?h]?hH?l@?bF?jE?|O@`I?~CAvK?~F?nH?pC?X?hD?`B?dAA~@AdACbAIzBYzJYpIGfBE`BC^Ab@CbAC~@AfA?d@?\\?X?v@?P@d@B`BFnFBjBJjILhKLhIJ~H?HDxB@v@D|C?p@JbIBfC@fB@dC?xO?d@?rA@dcA?rQ?l@?v@?vG?v@?v@?nB?hA?p@?t@@v@?nB?v@?nC?V?fD@rFAzA?v@?tA?jD?lI?hC?r@?v@@bF?~P?rQ@pV?lG?rI?zD?hP?dF?f@?N@|G@rI?|O?nIAtB?vB@nN?rHA|n@?vA?rLAlH?jGAfQ?v@?d@AtL?jG?dG?hA?pI?vL?zCAfR@bDArH@tO?f@?dAAlF?p_@?F?nB?tL?xF?tO?nB?dE?vF?nI?~E?rJ?bCAdg@?~BAnE?T@~FAxA?tA?~A?`B?bG@xJ?fIAv@?vB@xL?bD?v@?fG?~O?zIA~H?xGAx[@jQ?lF?zFCnDEhFIfGG|CEvCChB?BEtBAz@Ax@CpBEhC?LAv@?f@AhAAt@?tBCnI?jA?nKAjV@dd@@~U?fIAfJ?tAAl{@@nO?nC?t@?nW?v@?rTAhR?vA?pK?rO?~S@x|@AtP?vU?v@?le@?dn@?nB@|o@?rP?hG@dC?l@@rBBzDDzAHpCDfAFxAJbCD`ABd@PpCNtBDp@JjALxAFr@LpAZrCJ`ARxARbBN`ANjAZjBPbAN~@H\\P`APbAZvAxDdRNp@bId`@`BbId@~BNr@R`A`AzEp@~CvA|GpAtGbB~HjAxFfBvIpAlGnBpJ~AtHVlAb@tB^fBb@vBbAvEtBdKR|@\\dBNp@Lp@Lp@TfAb@xBVtAN~@PdAVfB^fCPlANfAPvAPbBPdBTrBTnCX~DNfCNtCt@lRx@pSd@~KxAj_@l@dOB`AD|AHnDHhE@fE@tH?vG?jN?pD?v@?|o@?fK?v@?lPAvG?nWA|h@?v@?ZDx\\Anb@?`@@jP?lX?xT?r@?zMAfL@j_@?xMAxV?jO?tG?bC?zA?zG?pL?`A?v@?v@?v@?D?n@?zC@hB@bCBjBD~BH`CFhBXhFNpBTtC@Db@fE\\rCN`AVjB^|Br@|D~BpMx@tEX`BlAxGjAxGhAfGBP`@zBz@xEp@|D^vBd@bCp@zDr@zDt@fE~@hF`ApFPpAJd@vBhL^zBpB`Lt@`E@HP|@Lp@ZdBr@bEpAlH~AzIbArFh@~Cd@|Cb@~C\\~CPfBHbAN`BN`C@RHpATdFLfDLbCPfEFhBNfDPdENhDHfCDdAlAfYd@zLf@nLNdDRfFHtAHnANbCRxBJ|@^nDf@dDf@vCNv@RdA@DPp@\\zAj@zBHZNh@d@|AbAzChAzCzAfDv@|AdAlBfBrCx@hAvAhBxBjCpA~AnDhE@@v@bAnAzAjB|BhI|J`FfGnDjE@BxBlC|JzLvHlJjAvArGbI`NnPjZx^nAxA~EdGvAfBtAjB`@j@j@~@v@pAZd@jAvBh@dAr@zAb@~@x@lBP`@BHt@jB|@dCbB`F~AvEN`@vLr^fBdFn@jBxMh`@bChHxPhg@Rl@dPze@fDzJN`@jAtD@Bz@vCvAtFJf@\\bBNr@d@`Cd@zCVfBd@vDVvB\\dE^~ELhCFtAFtBHjCD`D?jD@BAhI?`FAlP?nB?zO?t`@?~HA`f@?~T?v@?v@@bn@?dU@`LA`BAtQ?t_@C|FEdEIzEAj@ElBAXOlFY`HoAl[c@pHEh@KzBCt@Cf@S`GU~IABWjMCzAUjS?hAAv@AhCBdPNrX@v@?x@LrG@v@FbDFpBBt@PpGl@fQn@pQb@pLBv@jAl[@^Bt@|@lXJtDBjBB|@@t@DxDDlG?|N?|E?v@?fD?dKAnB?nI?h@?|B?dD?nB@fD?bB?JAlI?v@Ab|@?fQ?v@?nJ?|D?fKA~E?lI?nBA~E?tG?\\?pA?v@@nICpg@?nI?v@@tG?nB?~BA~A?v@ClP?hB?tB?|E@fR?dR@pg@EzZ@|v@?xEAhG@hO?lBBlW?le@?v@?|L?v@?|L?FC~E@dW?~E?nB@lI?dS?lP?`jA?fD?tU?v@?dTAv`B?v@?|]AzCAtFKtGQfNGlHAnAAv@?b@At@?h@?t@Av@AbH?hA?bG?n@?lI?lG?tD?zA@lI?vK?zA@lI?rK?bL?pI?P?dQ?vF?nF?lF?rC?R?`F?rH?rC?fB?fAAtAAbCAzBAfFCvIAhE?p@?v@?`D?|@?v@?`@?vI?tH?rB?vK@dNApI?jB@`A?nF?lG@nG?nI?bK?bB?fAAhBCvBGdNBh}@?T?hD?fB?~E?v@?f}@BpmA?fD@fh@P~P?vP?v@@tG@zo@Dp_A?bNBhaA?dR?v@?nB@|c@?pA@bqA?v@@hXAlE?jCC|BE|EQhKOdFc@rKQtDS|EMdDEv@]jIGxAYfHEv@]jIIlBwA|]_@hJMxDEvBAbDCrD@~C@x@Bv@BbBFxBBv@Bt@X~FhBt[b@vHnA|SJ`BxAjXHdCBr@Bp@@`@@TXhS@x@AvK?lI?tR?~E?vG?vNAtU?fK?t\\?fD@~S?F?bA?tQ?zH?T?bD?v@?bB?fACpJI|R?jLClT@p[?H?xO?pD?jW?F@|_@?B?bR?dK?fD?fD?t@?fD?lT?lP?tE@p}ADz\\DhEFpGBjAHhFB|A@d@@fAFhFDjE@tB@v@@v@@jA?xA@`A?nC@nIAnQ?`S?|L?dIAnR?nB?nB?v@Ad@?d]?lW?nMC`N?dD@bB@`BDbBJdCJdBBRFt@@RJ`AH~@L`AZvBVvALr@DR~BtMb@|BzBhM\\jB`AhFDTr@~DBJLr@j@xCF^pCfOfHz`@|EdXtBhLRfAx@tE~@bFBRdAxFp@xDz@tEp@vDbArFvMxt@|Fz[p@pD`AtFX`BRbBDXDXXhCL~APdCH~AFbAFfBBbBBbB?l@@vAAdB@dE?DAzHBzj@Cba@?fD?tN?rj@?nB?tG?v@?~E?tU?tG?vG?xO?tG?nI?faA?v@?nB?vb@?~NArZ?fD?dD?~L?r\\?bEA`LCpU@rI?tG?vX?v@?p_@AfO?|EEpHQxPArBClFAdUPfUFtHBjG@~L?pO?za@?v@?v@@v_@?jP?tU?`F?v@?p\\?pB?v@@dY"
                     },
                     "start_location" : {
                        "lat" : 49.9751481,
                        "lng" : -98.37330519999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "40 m",
                        "value" : 40
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 49.887227,
                        "lng" : -99.9117072
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eHighland Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{onoHf_y`RiAA"
                     },
                     "start_location" : {
                        "lat" : 49.886864,
                        "lng" : -99.91171659999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2089
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 419
                     },
                     "end_location" : {
                        "lat" : 49.8882988,
                        "lng" : -99.93947089999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMiddleton Ave E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ernoHd_y`R?zD?fD@nB?dD?vG?lI?vG?lI?fK?v@@fD?t@?v@?vG?v@?|G?n@?~E@b@FxDDjC@bE?v@?lB?nB?nB?v@?nBAbICvG?B?VCVA@EPGPILKHWF]BmAAM@KBIDGFCHALIv@Ab@?p@@P@N@D"
                     },
                     "start_location" : {
                        "lat" : 49.887227,
                        "lng" : -99.9117072
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1734
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 311
                     },
                     "end_location" : {
                        "lat" : 49.8873165,
                        "lng" : -99.96208399999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMiddleton Ave\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "{xnoHtl~`R@DDLHFD@DBL?B?ZE^Cn@EJ@F@JDJFFHFJDNBXDfF?xB?r@@zf@?bF@zBE`DElBU`CCpD@n@@v@Bt@HtABZDv@@n@@X?`@?~A?hL?bK?j@ADA`@AT?PCd@CXGx@CVCb@?RAnBAV"
                     },
                     "start_location" : {
                        "lat" : 49.8882988,
                        "lng" : -99.93947089999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "43 m",
                        "value" : 43
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 49.8869275,
                        "lng" : -99.96207819999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e18th St N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wrnoH~ybaRlA?"
                     },
                     "start_location" : {
                        "lat" : 49.8873165,
                        "lng" : -99.96208399999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "74.6 km",
                        "value" : 74607
                     },
                     "duration" : {
                        "text" : "3 hours 44 mins",
                        "value" : 13463
                     },
                     "end_location" : {
                        "lat" : 49.8444762,
                        "lng" : -100.9011454
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-1 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ipnoH~ybaR?~I?|J?|F?x@?xFApH?t@@xG@rEDlKBtHAvH?fP?dJ?`@?tG?h]?|L?rT?zD?|@?vB?bC?pCAbJ?pC?vR?jS?bO?dK?|K?~E@na@?n@?~@?~H?rY?tG?|Z?v@?F?nY?xK?dO?|Y?zB?rP?dK?v@?`D?B?v@?nD?lN?r@?B?fD?X?tA?v@?`E?dE?lB?X@\\?v@?n@?FBzA?PBv@@^F~ABd@Dv@@DF`AJ`AH~@BLHt@DZDVFh@N~@P|@XxARz@R|@HXH^b@vAb@nAN`@Tp@Td@Tj@Xn@vAfDb@bAHPTj@l@pArHhQzBhFhCdGl@tAnG~N|ArDnBvEvB`F`BzD`@~@nAtCVj@l@tAdA|BLZfBtDtDxIbB|D|CnH`BxDLXLXJTLZ|BlFvB|E|@zBxD|IjFzL~@xB~@xBdA~BTj@l@rAVj@l@rAVj@l@rAVj@BH~@vBTj@Th@Vj@~AxDN\\rB`F\\x@nBxEj@vAVh@Tj@\\x@L\\rBtEVh@zAjDTh@l@tAVh@HRb@`ArBtEVh@vAdDXn@Vj@nBvEVj@Th@pBvETj@Vh@xFzMTj@d@fAjAnC`BvDzFvMN^xB`FxAjDVh@`IxQpBtEzAjDdD~HTj@Tj@h@lA`DxHtCzGv@dBTj@~CjHVh@l@tAdCtFl@xA~FnMnArCx@xBd@vAd@~Ab@lB`@rBX|AT`BZnC@PTpCLhCHbCB`C?`I?tH?nA?v@@tG?v@@dR?nI?D@vE?v@?tN?pL?v@?zS?~E?v@@zLAnI?lK@xD?`\\?fDAlP@dDBfK@|E?jB?B@~EBzS@~E@pGB`T@nFBjI?hD?v@?t@?v@?v@?fD@fL?lA?v@?dK?`J?b@?|L?v@@|L?v@?v@?v@AnZ?zI?v@?tG?v@?v@?tA?fC?|@AfD@hB?v@@tG?dE?rU?dT?n@@dD?x@BbK?N?f@AlI?@?v@?t@?~E?vGAlB?vG?tGA|L?pD?~E?fB?bC@fD?h@@~@BbBD~AFrBN|CR`CRtBVfCZ~BV`BfAtF\\|ATz@H\\v@rCZz@Nf@fFnMx@rBFPd@pAn@nBFPPj@`@pA\\tAh@xBXtA`@xB^|Bd@fD\\zCR|BPjCHdBJ`CBjA?V@rBDpH?v@@x@FrG@d@BjGAfK@r@?t@BfADbADdAF~@D|@FdAF~@H`AJbAJ|@Fj@D^DTD\\VzA^|BXzALh@Np@Jd@f@pBlBfHrBzHxAtFtCxKnD`NtAlFRx@VdARv@`@xBH\\Hb@Hj@Hf@PhAZ~BJbAL|@L`BLdBHnAHpADjADxAB`ABhA?bA@nD?fH@zK?`G?v@?bY?xG?pM@hD?`A@lA@~@@l@@p@BfABr@Bl@D|@Dl@D|@H|@H~@NfBR|ALbANbAVzAN`APv@Lr@Pp@XpAj@rBx@lCp@xBj@jBx@nCfAnDbBrF~AjFRn@~@|C^lAtDxLlC~IvMhc@xCxJdI`XPn@xOfh@Pn@pHpVhCpI|AbFz@lCd@rAXx@Rl@DHXx@JRJZj@rAHRN^z@lBtAzCLZ`CjFbF`LxDrIdA~BbG|MzNz[rBtEVh@|I|R|HfQxB|EjKrUpR|b@jGhNnCdGzN`\\Vh@zAfDfFhLxDrIvA`DbBrDnAtC`@|@HPXt@Rf@Rh@JVHVL\\Nb@Ph@@DFPPp@V~@HXHXH^Pv@Jb@Px@P~@Lp@Hd@Jj@RvAF^Hl@Ff@Hh@Hx@Fj@NxANjBF~@JlBFlBDzA@n@BhA?dA?pA?xP?jK?teBAdP?tG?tB?lHAfG@hD?f@@h@FfCLlCFnAF`AR~BNvAPzATjB\\tBb@~BVnAb@fBj@tBd@~ANb@Rh@p@fBd@hAPd@Zr@^p@JRPZNVLTp@jA|@rAp@`ANPp@z@pDtEjB~BhJlLNPz@fAvAjB~@nAl@z@V`@Zd@Xh@jAvBd@`AVl@Td@`@dAj@xAx@bCVv@Rv@j@rBNr@R|@\\zAZfB^|BT`BV`CPhBBTNhBNfCLdCHfEX|MPnKNvK@t@?NDlBH~DFtD@LJfGBv@B`B^fTZzL@t@LvEVxJj@`V^`P?FP~HXxLLlFHtDRlHDfDN|HDbEDlFB~G@nC?tF?v@?v@?dD?zS?v@?vG?tS?D?bR?zE@lUAnD@rN?b@AzD?bM@rGB`HBnFDxDBpBNtLNbM@v@FhFBbB@v@@z@@|CBxG@v@@tCAnECxW?~C?bAAbB?tG?xG@zE?|E@fD?v@?dB?fF?lB@|L?v@?he@?pEAjH?tCAjACfAE~AI~BGpACj@Gt@K|AKjAIv@Gp@OhAMhASnAOfAqAxIKr@Kt@cBfLmFr^sAhJm@|Dk@tD{A|Jy@`Go@~Dq@|EW|BU`CO`BKbBK|BEfAEfBEhBAbB?N?lA@~ABlBBbBFfBHfBJ|AN~BPdBN|Ab@|C\\xBd@jCb@rBn@hC`@|Ah@pB~A`GdAvDdB|GjAfEvB`INj@b@zA\\`B\\hBj@`D^pCd@xDTbCJfBLnCJrC@lA@|@?tC?`A?rK?h@Bj{@?ziA?v@?rU?v@?rU?v@?tN?fZ?dK?~WApC?lI?VA|F?f@EvD?b@KhCIdBAZ]hFSrBaA|Hu@pEwBnM?BkB|KMr@oIjg@iJpj@CP{AfKmDbYAB_Kdy@yBdQIt@mBpO_@~CKr@{Fbe@s@pF{AzM{@`Hw@`F}@|Ew@pDo@hCaClIQp@cEhMqLl^mDrKyCbJkDhKeBfFoAxDSl@kBzFyAzEo@|Be@hBABOp@EP}@rE_@xBsAhJyAtN_AhKgGno@?@kHxv@Gt@qC|Yy@~Iw@bIgBjRgBjRs@rHYfCQzAK|@StA]tBUhAYxAm@nCi@rB_@rA]bAa@jA]~@[x@c@dAs@zAu@zAeAlBo]lm@{PdZ?@eF|ImQb[{OrXqHtM{GlLeF~IYd@mUfa@CDoArBsFnJ]l@Yd@eB|CeKnQm@fA_GdKmQb[Yf@sJxPqBlDsC|EmBfDqC|EmQ`[gPfYkDbG"
                     },
                     "start_location" : {
                        "lat" : 49.8869275,
                        "lng" : -99.96207819999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "53 m",
                        "value" : 53
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 49.8448364,
                        "lng" : -100.9006526
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eMB-257 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_gfoHdgzfRgAcB"
                     },
                     "start_location" : {
                        "lat" : 49.8444762,
                        "lng" : -100.9011454
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.1 km",
                        "value" : 3126
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 570
                     },
                     "end_location" : {
                        "lat" : 49.86217019999999,
                        "lng" : -100.9341424
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gifoH`dzfRyFlK_IrPgDnHsDbIWj@aB~CuB~D_DrFmAtB_CbEqDpGcCbEqEjHeAbBmArBADYf@sB|Dw@|Ac@~@MPKNURMJMHa@Xc@d@]l@KREZC`@A`@@ZBh@Ab@C`@?@I^GXyBrHW`AI^EPyEdTQx@]rAS`AMj@Qv@i@~Ba@hBI^]xAI^IZGNEJm@~AQ`@y@nBO^GNMb@W|@E\\"
                     },
                     "start_location" : {
                        "lat" : 49.8448364,
                        "lng" : -100.9006526
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "53 m",
                        "value" : 53
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 49.8617413,
                        "lng" : -100.9344553
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-1 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "quioHju`gRtA~@"
                     },
                     "start_location" : {
                        "lat" : 49.86217019999999,
                        "lng" : -100.9341424
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "58.8 km",
                        "value" : 58841
                     },
                     "duration" : {
                        "text" : "2 hours 59 mins",
                        "value" : 10734
                     },
                     "end_location" : {
                        "lat" : 50.1260397,
                        "lng" : -101.630199
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMB-1 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Trans-Canada Hwy\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Saskatchewan\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{rioHjw`gR_BhHOp@q@tCyD`Qa@lBMf@Op@_@bBOp@Op@_AfEoAvFOp@o@tCo@tCMh@AFENw@nDqAvFcBrHOp@Mh@On@AHMf@_AfEo@tC{BzJg@vBy@pDsBhJk@jCyCxM_BfHiAdFo@rCc@bBk@zB_@tAc@~Ae@xAi@|AcApCwAzDwFfOgBvEmDjJgB|EaCrGEL{B~Fm@~AmEzLA@aLnZmBdFcBrEiC`HeKtX_KrXyAvDeCtG_GtOmCnHm@`BsOhb@cQhe@gBxEaFzMuA`E}@lCSn@Sl@Sl@y@hCiBvGeB|GeAxEOp@sFvVoEfSaAlE[xAcA|Ei@|B}BfKi@bCOp@u@bD_BvGiAdEmBzGmAxDgAhD}G~Rg@xAcDpJ]`As@tBQd@}BxG_AjCeE|Lc@nAq@pBsAvDwAfE_B|EiBtFaAfDOn@_B|G{D~QqA`GqAbGyDpQyAvGU`A_@bBQn@Qz@Mh@]bBMl@y@lDq@dCyAbFY`Ac@`BuBzG_BjF_BjF_BfFA@Sn@_BjFqEfOe@xAABwLx`@sBzGyCxJaJfZiAxDyJ`\\m@pBsDxLGPQl@{CbKeCjIOd@Qn@_BjFy@lCeCjIABqBtGcAhD[`A{C|JQj@_BjFc@rAuApFoA~Fm@vCg@`Dc@vCc@nDYvCoCnYO~AoGtq@qAdNIt@[`DuCd\\o@rGi@zFCVm@|Fk@`HOpA_@lDu@|Ho@`Ho@dH[dDMxAUlCc@rE[rDO~BIjDEpBE`E?nC?|d@@|I?z@CbDGvDM|BOvC]rEa@rDWhBgAlGw@fDy@zCeA`D{AtDiHdPsDnIuFhMgGbNyOp]wG|NsBtEaHlOaB~CyBzDeA~Au@fA}@lA_@b@MNe@h@_BhByB|BgNlNmHpHOP}OfP]\\]\\}TjUiHnHqDxDsCvCuArA_D`DyAxAmClC_CdCwBvBwAvAyCzDw@tA_B`DeAvBe@bAkAvCo@rBs@~B[pA[zAW|Ay@xDu@fFe@pEMzAUhDYpG[tHYbHWrFGtAWlFC~@UpFa@tJEn@Et@[zF]hDg@lEa@jCk@tCg@zBeC~I{A|E{BnEyClGuJrT{Xvn@iG|M}CpHc@dAmAfDqKj[}Kt]Sl@wJxZgHzTSn@oIxWe@xAa@vAs@dCa@vA[jA_@|Aq@dD[zAk@~CSrAc@lCu@`GkAxMgCdZk@nGu@vIGb@]jCs@dFsAbHS`AqBhJ[xAOp@}E~TsAnGe@|Bu@fDmB`JYnAsFjWiEvRs@fCu@bC}AfEeAlC{@~AuAbCqArBU\\EDsBjC{A~AYVsAnAaH~F]Zy@p@aCpBeCtB_CrBeAbAy@|@_BtBORILsAnBWb@w@rAaB~CiArCcAlCkAtDaAzDu@vD_@hBu@pFUrBGp@Gt@E^MvBOzBG~@[hFSdEWzEc@jIWzE]rGo@xL]lGk@pKg@nHU|BSrBU`BWjB[fBS~@wBjIMb@q@`CwD`MoDhLsLf`@GR_ExMgCjIQn@aBjFADgMpa@oGrSUt@g@~A}Slr@uK`^_GvR}BfJ]|Ac@lBqAxH}@jGMt@Kr@e@`DsA`JyA~IMj@i@~BOn@aTzv@qBfHkDlMeBpGsBbIq@dCa@`Bi@nBIb@Op@I^ERgApF]pBk@zCWxACJi@zCwD|SeA~FSjA}ApI[dB[fBiDfRMr@Mr@[dBWvAk@bDyBbMiAtGcD|QkCdOa@vBmAfH{BfM{Ilf@wD~S{C~PMr@WrAqB~KMl@qAvHeA`Gi@~Cw@lEMr@kDrRuAhHuAnHo@|BsBxHMb@c@|AeA~Cc@nAg@|AEJcAhDmB~FY~@Yz@oDxKWx@Sl@iBxFuElNmCvIy@bCcCtHYv@_AfCKVkBxEeFvMu@hBiEvKiAtCuDfJwErLUj@Ul@k@vACFQb@oD`JUj@mB|EwD~Im@vAoBfE{EbKWh@{@jBqAnCWh@wBpEgFvKyIfRe@fA{BrEqGpNiCrFiCxFaAtBWh@ABsBnEaD~G[n@m@tAk@jAgEvJaAfCADaAhCqAhEgA`E_ArD{@bEiArFgApF{CjN_AhEOp@ERqFtWgFtVeKfg@_GlYuHh]sBdJwFdViC`LOn@YlAyG|XkBnH_AhDQp@Qn@GVuIzZSr@yA~E_@lAc@jA}@~B"
                     },
                     "start_location" : {
                        "lat" : 49.8617413,
                        "lng" : -100.9344553
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 149
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 126
                     },
                     "end_location" : {
                        "lat" : 50.1248082,
                        "lng" : -101.6308802
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wf}pHvshkRdAz@RVPPVPTFN@jAD"
                     },
                     "start_location" : {
                        "lat" : 50.1260397,
                        "lng" : -101.630199
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 km",
                        "value" : 2189
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 400
                     },
                     "end_location" : {
                        "lat" : 50.1373791,
                        "lng" : -101.653658
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "a_}pH~whkRQl@[v@uB`Fo@vAiCzFeBjEy@fBq@pA]r@m@bAWf@s@lAYf@gBzCu@pA}B~DYd@eB|CiJ`PwEhIkTr_@Yf@a@r@KTAFEJGTCLAHCTCR?@?nB?v@?pB?v@?nB"
                     },
                     "start_location" : {
                        "lat" : 50.1248082,
                        "lng" : -101.6308802
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "65 m",
                        "value" : 65
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 50.13796540000001,
                        "lng" : -101.653632
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBroadway Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sm_qHjfmkRuBE"
                     },
                     "start_location" : {
                        "lat" : 50.1373791,
                        "lng" : -101.653658
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "25.6 km",
                        "value" : 25640
                     },
                     "duration" : {
                        "text" : "1 hour 18 mins",
                        "value" : 4679
                     },
                     "end_location" : {
                        "lat" : 50.148622,
                        "lng" : -102.0061769
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBroadway Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iq_qHdfmkRYv@Ul@kB~EiAtCQd@}CxHuHdRsBdFuB~EkB~Ew@nBM@w@jBiBtEsBdFuBfF{@~BAXk@rAkB~EwBzEmB~E{ChHqDvJoAxC]x@ITIVENg@zAm@`Ca@dBYrAcAvFe@xCMr@Ih@i@jEW~BANUvCKzCAFCv@C|@?hB?v@AbB?zI?fD?pP?xN?nB?`T?fD?nB?v@?v@?`F?nB@vN?`F?vN?pI?v@@v@?hY?hA?lEAtG?BDdVA`T?nB?nI?fDCbb@ApW?~LArJF|PC`\\?bh@@hY?vG@|d@AxU?`[?xG?nP?JAnc@?rE?bA@`M?xE?pP?fDAvG?pB?vNApS@xR?~E?v@@zj@?bN?v@?`F@vG?nIBrDCdIArC?lH@~E?v@?~E?v@@nB?|A?R?v@A~EAtK?bB?v@?fD?v@@fD?v@?jA?l@?t@?fF?fD?nF@vC@`J?~A?v@A`[?v@?`F?v@?~EA`C@|A?v@@dD@z@?nB?nB?hR?nB?lA@|@?zF@nB?hD@fD?nB?dD@x@?v@@nB?nB@x@@~E@v@@~E?v@@tB@hB@x@@v@@nBTx\\HfKFfK@v@PnQLhRFnILnP^bi@\\hg@D~EVx\\b@dn@`@pl@NrSF~EPl\\@JLdM@bDFfKb@bw@FnIb@bw@BfD@jBTlY@v@FvG?XPnX@nBFlLBnLHfKFnIHnI@nBBvAB`EBfDFvGDnGDnDBnBBpBBnBBnB@v@@v@BnBBpC@lABfD@`C@d@F~EBhA@tCBpBBfDDjHJnI@v@BdAFbIBnB@v@BfD@v@BnB@v@?v@@v@DfD@dA"
                     },
                     "start_location" : {
                        "lat" : 50.13796540000001,
                        "lng" : -101.653632
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1711
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 299
                     },
                     "end_location" : {
                        "lat" : 50.164007,
                        "lng" : -102.006238
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{saqHrarmRkF?sM@oC?kB@iB?cI?gA@oC?gA?kB?oC@gA?gA?oC?gA?{F@sD?c@?gA?kB@oC?"
                     },
                     "start_location" : {
                        "lat" : 50.148622,
                        "lng" : -102.0061769
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "9.8 km",
                        "value" : 9790
                     },
                     "duration" : {
                        "text" : "29 mins",
                        "value" : 1745
                     },
                     "end_location" : {
                        "lat" : 50.164058,
                        "lng" : -102.14282
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "atdqH~armRn@nB@xA@v@BfD@~B?~A@pB?nB@vG@vG?x@@~E?nB@nB?~E@pB?v@@~E?nB@fD@pI@~E?nB@`MDxU@fD?fD@hD?v@@vG?nB@~E?x@@~E@vG?nB@pB?fD?v@BnI@pI?~E@~E@nB?hD?v@@v@?v@?nB@~E?v@@pEm@feAU`b@CfDSp^ChRItz@CxUA~LErZ?pICvN?xGAbC@rC@nB?v@@nB@`F@fD@fDDhK@nB?nB@v@?nB@nB@`F@fD@v@?v@BnI@v@?pBBv@BnBDdBZnB`A|F@~@BlBO`FAP?lE@~E?hD?nDEn@ABcAd@An@CpBG~EG~ECxB@l@DvG?v@DxGBfD@v@@v@@~B?xJAvG?~E?nB?nBs@nAABAp@"
                     },
                     "start_location" : {
                        "lat" : 50.164007,
                        "lng" : -102.006238
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.3 km",
                        "value" : 3280
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 788
                     },
                     "end_location" : {
                        "lat" : 50.13456,
                        "lng" : -102.142814
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ktdqHrwlnRfAAb@?b@?b@?b@AzFCb@?jBAb@?fAAZ?F?J@V@b@@b@@b@@fADb@@b@@F@~@Ab@Ab@AfAAb@?dACrDEb@?nLOb@?n@Az@?fA?b@?b@@fA?b@?fA?fA?b@@rD?b@?jKBjB?b@?jB?fA@b@?tN@b@?jKBb@?rD@fA?jB?b@?nC@~PBzF?"
                     },
                     "start_location" : {
                        "lat" : 50.164058,
                        "lng" : -102.14282
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "24.3 km",
                        "value" : 24321
                     },
                     "duration" : {
                        "text" : "1 hour 11 mins",
                        "value" : 4231
                     },
                     "end_location" : {
                        "lat" : 50.1345249,
                        "lng" : -102.484048
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_|~pHpwlnR?p^A`T?xN?hg@?fD?hD?~EAlN@`J?fK?v@Bxc@?pP@fK?pB@fK?v@?fD@pP?nI?hH?nBApW?fD?fD?vGApP?fK?pWAp^@tc@?~E?vG?pP?v@?hK?~L?pW@hR?fY?hD?vG?~L?pI@`b@?nB?vG?xG?nI?nI?`O?fK?nI?xG?vG?nB?xN?nI?nI?xU?xU?|U?pP@pe@?h`@?xG?fK?nB?fD?`F?v@?`T?pP?v@?v@@rz@?~E?pW?r^?`T?~L?xNA??h@?lFA`M?nIChY@ni@?v@@pe@?`T@`TAfE?r@?X?nBAfD?hRApP?fD?`[?fKAxU?|c@?j`@@x\\?vG?x\\?hK?nP?pI@xY?v@?`T?nI@j`@?nW@pI?~LApWAbw@?vGArs@?x\\?~L?xG@x\\?`b@@jW"
                     },
                     "start_location" : {
                        "lat" : 50.13456,
                        "lng" : -102.142814
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.2 km",
                        "value" : 3239
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 567
                     },
                     "end_location" : {
                        "lat" : 50.105396,
                        "lng" : -102.483981
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "w{~pHhlopRhTAjTArM?rDAnL?pMArD?~P?vEAnC?nC?j]A`I?dJA"
                     },
                     "start_location" : {
                        "lat" : 50.1345249,
                        "lng" : -102.484048
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "9.5 km",
                        "value" : 9524
                     },
                     "duration" : {
                        "text" : "28 mins",
                        "value" : 1683
                     },
                     "end_location" : {
                        "lat" : 50.1051705,
                        "lng" : -102.6174741
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSK-709 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "weypHzkopR@nI?nB@pP?nI@fK@hY?fK@hFIf^@bJ?pR?vU?~L@x\\?`[@`[?pe@?nI?xj@?fK@dd@?n^?vN?vN?v@?ju@?nI?fD?~E?v@?xNA~L?v@?pW?fK?v@?~E?nB?v@AnB?pI?v@?~E?fD?nB?fD?v@?xG?pI?tHAvN?v@?~EAxc@?v@?nB?fD?`M?|BAnH?xB@f@Bp@@b@Dl@Dd@Ff@Fd@Jl@"
                     },
                     "start_location" : {
                        "lat" : 50.105396,
                        "lng" : -102.483981
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1848
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 316
                     },
                     "end_location" : {
                        "lat" : 50.1058903,
                        "lng" : -102.6431757
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "idypHdniqR_@h@GPEVAFCd@?H?v@DnLAlS?fD?~EAhK?nB?v@AvG?nBApW?nB?nIArCGjHCzCAJq@xLW|E"
                     },
                     "start_location" : {
                        "lat" : 50.1051705,
                        "lng" : -102.6174741
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 97
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 19
                     },
                     "end_location" : {
                        "lat" : 50.1050197,
                        "lng" : -102.643187
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eSK-48 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yhypHznnqRl@?zA?b@@"
                     },
                     "start_location" : {
                        "lat" : 50.1058903,
                        "lng" : -102.6431757
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13.0 km",
                        "value" : 12992
                     },
                     "duration" : {
                        "text" : "38 mins",
                        "value" : 2304
                     },
                     "end_location" : {
                        "lat" : 50.1062552,
                        "lng" : -102.8252609
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSK-48 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kcypH|nnqRGv@KxAM~BCd@EhAC`@E`AEpBEvBAv@AN?f@Av@Ar@?jDAd@AjH?z@?jB?`C?tC?v@@NAx_@?v@?fD?~E?v@?`M?v@?zBAlK@hR?zI?zC?nK?pN?v@?v@?v@?nB?v@?v@?v@A`F?|A?hH?nB?vG?v@?v@?fD?v@?pD@~C?j@?rI?~L?v@?nI?hD?v@?v@?v@?v@?fD?v@?vN?v@?xG?vG?nB?fD?v@?dD?x@?nI?hD?v@?nB?jV@xG?lB@ja@?lA?v@?vNAhR?hJ?dE?hR?~I?pF?hR?nP?pB?v@?~L?v@?fD?v@?fDAfD?hK?fD?v@?nB?~L?v@?fD?hD?nB?tM?|N?v@AvN?pP?v@?v@?nB?fR?v@?xG?vG?fR?vL?pK?h\\?jC?v@?lC@xF?vBBfM@`B?tC@hA?v@@pB?lB@xG?v@@v@?v@?lABxH@vFBpK?nH?v@AhJEdECfDAv@CpCEdCAp@GlDCv@GdDGhDCnBCv@KvGElBMvGGdEAXAv@EnBAv@Cv@QfKCv@I~Ek@nZ"
                     },
                     "start_location" : {
                        "lat" : 50.1050197,
                        "lng" : -102.643187
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "94 m",
                        "value" : 94
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 38
                     },
                     "end_location" : {
                        "lat" : 50.1054127,
                        "lng" : -102.8253142
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ckypHz`rrRhDH"
                     },
                     "start_location" : {
                        "lat" : 50.1062552,
                        "lng" : -102.8252609
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "75.3 km",
                        "value" : 75311
                     },
                     "duration" : {
                        "text" : "3 hours 38 mins",
                        "value" : 13102
                     },
                     "end_location" : {
                        "lat" : 50.1053675,
                        "lng" : -103.8809179
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yeypHdarrRCn^Ex\\?v@AfKC`b@?nB?v@Cx\\Ora@?nBMh`@?^mBtg@eA`YnCjvAPnIfAdj@?nBCvGApIA~EAnBCfKAvGAfDCxNE~SAfDChKAvGC~LAzG@xG?fDBfK@vG@vG@pIBnI@fKBfK@xGBfR@fDBtR?nPA`T?nI?v@Ax\\?xCRxBVjCm@tBAjB?vGA`F?vF?DBfM?~HA~EAfYApIAnP?vGAv@?v@?`MAnIAnI?fD?xGAvGAnIA`TCvN?nBChY?dC?`G@nP@hD?fD?~E@fK@zLAnEExPCnGAnBOpa@AnFEvNCnICfG?NGpP?nBC~E@zE?nI@~E?nB@pW@pW@vG?nI?v@@fD@hR?nI?v@@fD?fD?nB@`F?v@?~E?~E@~E?fD?~E@nB?hD?nB?nB@nB?vG@~L@xN?nB?v@?pC?lA?v@@~E?nB?hD@nB?nB@fK?~E?fD@`F?vG@~E?vG?jABrCDnIFhKD~ENnWHnP?hD?xCAPQ~B?J?bCAfD?`MA~LAnI?pIAvGAvNA`M?`HAfK?~E?`J?fD@`[?fD?vG?fD?hK?~E?v@?v@@fK?fK?`F?nB?`IAnPAv@?nB?v@?fD?`FAfK?fDAnBAnP?`MAfKAhRAfK?nIAnI?jQ?~E?xG?nB?nI?nI?~E?fD?xG?vN?pP?fR?fI?|GAhKA~EAvG?v@C`TAvGAfKA`TAnIAfKCxN?pL?~E?vG?~E?vG?xG?n^?pI?fD?vG?nP?xN?vD?~L?fD?hD?vG@fK?fD?nI?hK?fK?~E@hY?vG?vG?fD?hD?vG@`b@?v@?fY?hD?~E@fK?~L?fD?xM?hK?fD?nI@~L?xG?vG?nP?nI@`M?vN?vG?jN@hK?v@?~L?vG@`T?~L?~E?nB@hR?nI?v@?vG@lR?lK?nP?pI?nP?~L@p^?nB?vG@h`@?x\\?vG?nI@hK?fK?hR?v@?~E@vU?hK?xEAnP?vG?nI?xNAfR?xG?~LA`b@?fDAvGAhRCvNAvNAhKCfRAnIA`MAnIA~NDfX@~EBhKDfRDvN@`FF~ZBpP@fD@fD?jD?pBAfK?nPApe@A`b@?nP?xG?nB?~E?fD?fK?hK?nI?v@@vG?pP?~E?vG?vN@hD?fD?nI?v@?~E?tD@lD?fD?v@B~L?~E@`F?nB@~EB~S?v@BxN?nCAfJ?v@AvGChKA~L?|D?nP?pI?fD?nB?nI?fK?pI?vN?nI?v@?hK?~E?~E?fKNl@?lD?vN?~E?~EAfD?xG?~E?fD?fD?vNAhK?vG?nI?pPA|F@xD?vG@fK@hK?vG@nI?nB@nI@hK?nI@~L@pI@vU?|FCpW?fKCp^A~E?~EAfK?xGAfK?fDAvG?fD?pI?v@?~E?nP?nB?pE?~E?`T?fD?nB?fK?v@?pI@~Z?~D?hD?vG?nI?xG?vG?v@?fR?hK?nI?~E?vG@xG?nB?~E?~SAp^?~E?xc@ApP?vN?x\\?pL?jg@?nP?v@?nI@nI?xG?zK?~E?nB?fD?nB?v@?nB?H?dB?x@?h@?dH?~B?vG@~E?v@?v@?hK?vG@vG?fK@xN?fD?fD@xU@pP?t[?pe@?vU?xN?vN?`T?~L?fD?fD@pW?fD?`b@?vG?~L?xG@zTAv\\AhRAxj@?~L?`F?fDAlU?pK?~E?~L?fD?~E?pI?~S?fD?pI?fR?nB?fK?xG?fD?vG?vN?rl@?fR?fR?|`@An^?pe@A`[?nB?jg@F`p@?fD?hD@nB@nI?v@?fD?vC?v@AvN?xGA~E?v@?vGA~K@zFBpPBlW?x@@~C"
                     },
                     "start_location" : {
                        "lat" : 50.1054127,
                        "lng" : -102.8253142
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "37.3 km",
                        "value" : 37338
                     },
                     "duration" : {
                        "text" : "1 hour 50 mins",
                        "value" : 6601
                     },
                     "end_location" : {
                        "lat" : 50.3091639,
                        "lng" : -104.2976427
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSK-33 W\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "qeypHvf`yRiI|QsLnZUj@uLvZ{CzHqIfTUj@Uj@mB|E_AdCy@rByDdJmAjDu@jBi@xAkOl`@yCvHgK`XeEpKc@fAi@xAUj@gIzSiXpr@mB|ESj@}IhUaNr][v@uIrTk@xAuApDUj@{E|L}IfUuApDcCjGUj@k@xAUj@k@xAgIzSUj@Uj@iMf\\q@bBuLxZuApD}GbQiK`XqJtV}GbQcItSsJtVUj@cCjG}IhUUj@k@xAmDbJqElLo@`B_@`A{ApDkLbZKXcEtK_@|@mA~CsAhDuIzTgCrGsAnD}@zBkF~MuFrNMZoIlTUj@sSbi@oFhNiE|KiBvEw@nBu@nByHfS_CdGoDhJi@tAUj@mDdJoFjNuApDgEtKkD`JmFdNe@lAe@nA{D`KoDdJaAdCgIzSeGvOcEpKsHnRgK`XqHrRk@vAi@xAyCxHUj@M\\sBlFmB|EeEvKuAlDUj@wApDoFhNeEpKUj@i@xAs@dBoCjHaClGUj@mDdJ}IjUoHpRaAdC{GbQyG`QwPlc@_@~@}HfS]|@wAtD}AzDELkBzEiCvGOb@Uj@{GdQmA|CmGlPw@nBuBtFy@vBgHxQe@rAYr@_BbEiCvGyAzDw@tBuBlGy@jCg@bByAnFq@jCoA|Eu@vCg@hBwC~K}@bD}@xC_@jAa@jAg@pAYr@y@pBu@~Ai@jAc@|@g@|@e@x@qBfD{A`CiBnCcBhCc@p@[j@o@jA[j@}@dBy@fBk@tAq@bBGNeGvOoDdJk@xAyE|LiE~KqCjHkC|GmFfNk@vAcIzSO\\eEnKiAtC{KrYUl@mFlNUj@yE`MeMl\\gHbR_@~@_@~@wEzLUl@Uj@_P~a@{GdQ_Nx]i@xAUj@mB~Ei@xAUj@Ul@Uj@Ul@cEpKk@xAwJfWm]t}@gPdb@e@lAe@jAeQbe@oPxb@qClHUl@Qb@iIhTUj@{IlUUl@Sj@wCxHwCxHcClGoHrRmEjLu@lBk@xAUl@Ul@_AdCUj@aAdCa@fAaDhIeAlCcBlEyJ`WsItToDhJaAfCg@rA_@bAoA~C}EnMm@|Aq@hB"
                     },
                     "start_location" : {
                        "lat" : 50.1053675,
                        "lng" : -103.8809179
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "33 m",
                        "value" : 33
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 50.3089231,
                        "lng" : -104.2979253
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eSK-622\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "g_arHfsq{Rn@x@"
                     },
                     "start_location" : {
                        "lat" : 50.3091639,
                        "lng" : -104.2976427
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "62.7 km",
                        "value" : 62741
                     },
                     "duration" : {
                        "text" : "3 hours 2 mins",
                        "value" : 10945
                     },
                     "end_location" : {
                        "lat" : 50.3094817,
                        "lng" : -105.1810972
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eRailway Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "w}`rH`uq{RcBnEQl@CHIZC^CZ?R?V?vA?`F@vG?x@?fD?`F?v@?v@?v@@xG?pI@bF?nB?fD@bM?fD?v@@hD?v@?`F?~E?|H?nC@lY?pP?`F?`F?fD?rP?~E?hD@`F?~E?xG?`F?`N?hK?xG?pI?~E?`F?`F?pI?zF?dE?pI?hK?`F?xG@xN?hJ?xG?pI?v@?hD?fD?x@?~E?v@?`F?v@AhD?fD?xG?j@?tD?vG?`F?`F?nB?nBAhD?fD?`F?xE@vB?@?lB?`F@`F?fD@jD?t@AhK?nB?pBA~E?hD?~E?pBA~E?pB?~E?pBAnB?hD?fD?jC?lC?~E@xG?xG?nB@vD?dF?xG?v@?xG@~E?`F?fD?v@?jK?~E@hD?~E?hD?nB?hK?hD@v@?`F?~E?hD?v@?`F?nB?nB?hD?nB?xG?nB?hD?pI?bT?pI?xG?`T?`F?`F?xG?~E?`F?xG?pI?hKAxN?zN?hK?`F?pI?fD?`F?fD?pB?~E?hK?pI?`E?hD?hK?pI?~E?jK?~EApB?nI?`F?nB?`F?`F?pP?jL?vF?xJ?nG?vG?hD?d[?hK?`M?bT?xG?~E?hD?xG@xNAxG?t^?xG?v@A`F?vG?`F?`F?fD?`F?fDA`F?fD?hD?fD?x@?vG?xI?zD?nB?bM?xGAxN?xG?`F?hK?pI?xG?vG?hD?~E?x@?fD?v@?hD?~E?xG?`F?v@?hD?~E?xG?rE?`F@pI?xN?hD?xG?v@?`FA~E?bC?T?hD?hC?~E?pI@xG?tA?hD?`F?nB?v@?v@?pB?v@?v@?fD?pB?fD?hD?fD?hD?~E?hD?v@?`F@fD?xG?xG?~E?xG?xHD`FDfG?tE?v@AxG?~E?v@E`r@A|\\?rJ?v@?nB?jR@dM?`t@?zY?|\\?fRCfY@`E?hF?xN?v@?pI?bT?pB?nB?jY?bT@bT?zU@pQ?zIAfAA`AAdA?b@Bh@@v@@h]?rW?`M?rP?~E?bF?pP?pP?pI?x@?pP?hc@?bT@hR?zN?`F?nI?x@?v@?v@?rW?pB?`M?fD?x@?nB?dJ?hC?jY?rW?v@?bM?v@?xG?fD?`F?b[?x@?pP?v@?rB?x@?v@?~E?x@@~E?~@AxE?fD?jK?hR?x@?`M?`F?v@?`M?fD?x@AxN?`F?nE?`J?jK?v@?jR?hK?v@?bT?xN?v@?`F?`F?jR?fD?`F?`M?pI?jR?pI?v@?jY?`F?xG?v@?zU@rP?~E?x@?xN?v@?v@?xG?v@?xG?v@?`F?v@?rP?bT?v@?xG?v@@bT?fD?vG?jR?v@?x@?nB?`M?zU@tW?pP?pI?v@?hX?b@?vX?fD?v@?jKA|c@?fD?lY?pI?fD?`F?v@?tB?zD?`F?`M?nBApI?pB?pI?v@?xN?jR?`F?v@?v@?ng@?rW?nBAbTAjw@?v@Ab[?x@?v@?|B?^?pHAleA?pIAhK?`M?nY@rW@hp@?v@Dx`A?f@@poB@|\\?h@?bG?hD?v@?pP?jKA~E?pn@?fi@?f@?~Q?v@?jR?pI?nB?zNAxN?xG?v@?vl@?dA?tL?bT?pI?pP?zN?d[?rW?fI?vD?pB?hK?v@A`F?nBA|c@?pIAve@AzUBd[F`o@Clg@A~Y?rP?fi@?rcA?pI?hK?tW?jR?v@@hX?ZBp@"
                     },
                     "start_location" : {
                        "lat" : 50.3089231,
                        "lng" : -104.2979253
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "19.3 km",
                        "value" : 19338
                     },
                     "duration" : {
                        "text" : "56 mins",
                        "value" : 3385
                     },
                     "end_location" : {
                        "lat" : 50.39853979999999,
                        "lng" : -105.4092369
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSK-39 N\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "gaarHzd~`S[zAQx@_@`BWhAOp@]`Be@zB_@`BWhAm@rCm@rCw@lD_AdEeA~EAD}AlH[vA_@bBMp@WhAWhA]bB_@`BWhA]`B_@`B_@bB]`B_@bB_@bBg@zBKd@Q|@_@`B_@bBe@|B_@`B]bB_@`B]bBWfAmAxFeCbLkBvIQt@kBvIuAnGuBtJg@|Be@|B_@`BWhAOp@On@I^Mh@e@zBm@tC_@bBm@rCWjAEPOp@Ov@WhA_@bBu@jD_AdEu@lDUhACHi@dCe@zBmAvFw@jDg@zBu@lDy@xDCJo@rCuAnGe@zB?BmAtFeB~HyA`HADuApGg@zBw@nD{AhHeB`I}AhHu@fDOp@Or@_AhEOp@ETgAfFe@tByEpTOp@A@aB`Ii@bCsAdGsAhGg@`CYnAg@|B_@dB[pAGXCNIp@{@zDQt@q@~C_AdEeA~Eg@dC_@dBqAbG]|AaBzHKd@wApG}BpKq@bDg@bCWjAyFvWwAvG{DxQWlAgGhYeB`IOp@uD`QgBjIkAlFeDpOsCtMs@dDi@fCw@pDqDtPy@rDgR`|@_@bBCLyG`[Op@kN`p@yQ`{@}Hr^gO~r@mH`]Or@}AnHOp@_CrKI^ERmAzFuCzMI\\sBpI[rAy@lCaApCkA~C{@vBo@xAiAvBkBjDSZWf@}B`EcChEiApBqA~Bs@lAgB|CcCdEyCjF_CbEYf@mExHgB|CyGpLs@lAs@lAYf@mBfDaDtFWf@uDpGsDrGoI~NWd@oEzH_CbEaBrC]n@kAvBkAvBiClEmFfJ_BzCOV_CzEABWj@Wh@cAvBoCdGWh@qBjEcAxBWj@KTKRm@jA_@l@k@x@IHY^k@j@y@v@a@R_@TuBfAa@La@LYF]Fw@Pw@Ag@?e@?S?e@@gA?iDDw@B"
                     },
                     "start_location" : {
                        "lat" : 50.3094817,
                        "lng" : -105.1810972
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 431
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 141
                     },
                     "end_location" : {
                        "lat" : 50.39719530000001,
                        "lng" : -105.4147902
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{mrrHvvjbSCp@?f@?^BnA?HBl@HtBRvABJRdA^rAPh@\\lAh@fBBFl@tBd@`C"
                     },
                     "start_location" : {
                        "lat" : 50.39853979999999,
                        "lng" : -105.4092369
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.7 km",
                        "value" : 3708
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 619
                     },
                     "end_location" : {
                        "lat" : 50.39357469999999,
                        "lng" : -105.4662462
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "oerrHlykbS@xG?v@?x@@pI?v@?pI?x@@nB?v@?v@?rB?nB?v@?x@?fD?x@?v@?v@?nB?x@?v@AfD?x@?nB?v@?x@?v@?nB?v@?rI?nB?v@?pB?v@?hD?t@?@?v@@xG?tH?~A@vB@zB@fD?V@^FjCFrABz@NbD?DNnCNjCf@vFRhBr@~F@Jt@bHHv@\\pDNzAPtBd@jGBXRrCFpAv@zF@d@D^Jv@XfBLt@XfBJt@Lr@Jr@Lt@VfBLt@Jr@PdALv@PtATxAHr@JlADp@JnBJ~D?nA?^An@ExBAv@A~@Ev@Ev@ARAb@Cv@C~@?X"
                     },
                     "start_location" : {
                        "lat" : 50.39719530000001,
                        "lng" : -105.4147902
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 276
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 39
                     },
                     "end_location" : {
                        "lat" : 50.3940214,
                        "lng" : -105.4700514
                     },
                     "html_instructions" : "Take the ramp to \u003cb\u003eSaskatchewan's Hwy of Heroes\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ynqrH`{ubSAxAGlA?HEl@Gt@ALEh@It@ANO|AGt@Gt@Iv@Gt@?@?F?F?HBN"
                     },
                     "start_location" : {
                        "lat" : 50.39357469999999,
                        "lng" : -105.4662462
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "6.3 km",
                        "value" : 6317
                     },
                     "duration" : {
                        "text" : "20 mins",
                        "value" : 1202
                     },
                     "end_location" : {
                        "lat" : 50.424571,
                        "lng" : -105.5396585
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eSaskatchewan's Hwy of Heroes\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Trans-Canada Hwy/\u003cwbr/\u003eSK-1 W\u003c/div\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "sqqrHxrvbSGf@}@`JEXg@vE?@u@fHMrAWfCi@jEAFQ`Bw@pHIx@{@bICXc@~DiBtQo@nGcAhJa@vCs@zDGXOp@I^GPm@rB_AfCi@jAe@`A[f@mAfB}@dAg@j@k@l@_DzCKJgAjA{AvA]\\wCtC_@\\]\\{AxAsFnF]\\uDrD_@ZyBvB]\\uEpE]\\]\\yPnPcIzHyGvGwAvA}FzFyAxAiApAkBfCoAxBy@zAq@|A{@|BIRe@zAkA|Ew@dE]vBIh@iBbN_BrLu@pFkC`ScKlv@OjAQjAUxAa@zCKt@Id@g@lDeBdL"
                     },
                     "start_location" : {
                        "lat" : 50.3940214,
                        "lng" : -105.4700514
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 310
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 56
                     },
                     "end_location" : {
                        "lat" : 50.426329,
                        "lng" : -105.5428558
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eN Service Rd\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "qpwrHzedcSILEHCJWtAWnAQz@K`@Ol@IZIXKVMXILEJORCDWXc@`@IH[VYT_@X"
                     },
                     "start_location" : {
                        "lat" : 50.424571,
                        "lng" : -105.5396585
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1805
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 308
                     },
                     "end_location" : {
                        "lat" : 50.42638909999999,
                        "lng" : -105.5683324
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN Service Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q{wrHzydcS?fMAbTAdMArPAvWAtL?J?zG?v@?zA?V?zE?x@AtP?pK"
                     },
                     "start_location" : {
                        "lat" : 50.426329,
                        "lng" : -105.5428558
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 457
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 80
                     },
                     "end_location" : {
                        "lat" : 50.4260459,
                        "lng" : -105.5747407
                     },
                     "html_instructions" : "Take the ramp to \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}{wrH`yicS?\\?bA?fA?r@@Z@tABb@DdABv@?BDz@D`ADnADdA?L@h@@XBd@?j@@fB@vB?d@?@LjA"
                     },
                     "start_location" : {
                        "lat" : 50.42638909999999,
                        "lng" : -105.5683324
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "24.9 km",
                        "value" : 24921
                     },
                     "duration" : {
                        "text" : "1 hour 12 mins",
                        "value" : 4348
                     },
                     "end_location" : {
                        "lat" : 50.482445,
                        "lng" : -105.9012025
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "yywrHbakcS@vL?vUAd[?v@?hb@AzN?jK?jR?x@An[@nY?v@?v@?v@?lR?v@?v@?x@?fD?hb@?n^?vM?zG?pG?jR?v@@dr@?v@@jR?x@@~\\Atu@?v@?pI?fkA?lp@?x@@bk@?~E?rg@@|K@n`@?`F?nB@bM?`o@@jK?v@?pIBnE@rG?fA?pB?~A?~BAvD?nDCdBEbCCfAMtDIhBMpBEp@?DWhDYdDe@hEM|@_@hCe@xCe@dCk@tCmB~IIZeCjLkDxOuHp]qB~I_@dB]`BaFdUOp@qId`@o@vCo@tCOr@_AhEeEjRo@vCo@|CY~A[xAOp@Mj@{@zDsAxFgErRqH|\\Op@sKlf@kFdVeA|EOp@q@vCoA|FoGxY_BnHOp@oA|FaAhEoGxYoGzY_BnHaIr^yAvGa@lBqCjMw@hCe@~AiCzI}AnEqAtDkB|Ei@xAc@bAm@vAM\\_@v@cAxBcAxB[r@yAbDs@~A_FpKcVth@_ApBoLjW_ApB{ElKoN|ZmTne@}AjDmAlCqBpE}AzDsApDaAfDSl@CJq@fCENc@hBWlAOr@EPo@|Ca@`Cq@fEs@pEm@hDkDpTcLrs@eBfKoAbIwCrQMt@w@zEQ`Ba@nDEf@UpCKpCC`CApB@zBD~CVzFFn@Fv@NzAl@bHFn@?D~A~PbAfM"
                     },
                     "start_location" : {
                        "lat" : 50.4260459,
                        "lng" : -105.5747407
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 200
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 50.484246,
                        "lng" : -105.901301
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gzbsHnyjeSiJR"
                     },
                     "start_location" : {
                        "lat" : 50.482445,
                        "lng" : -105.9012025
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "28.4 km",
                        "value" : 28392
                     },
                     "duration" : {
                        "text" : "1 hour 24 mins",
                        "value" : 5024
                     },
                     "end_location" : {
                        "lat" : 50.4846343,
                        "lng" : -106.3025569
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qecsHbzjeS?jK?dTAjK?bk@AlR?p`@?nd@?bM@jK?hD?`F?jK?pI?`F?x@@rP?rI?pE?xDAbM?bM?xGApw@?v@Ali@DnYDp`@?nBD`]Fxo@gAxk@?h@QnYC|UCze@IrqAAnY?zNAx^?hDAp`@AjK?xPBlp@@fT@lR@hb@@lOAtPAlRAdTEdk@A~\\AbK?p`@?p`@?jK?zNAzn@?jK?x^?jK?`F?|U?|NArP?bV?`F@pB?nB?x@?v@?nB?x@?nB?pB?v@?v@?hD?v@?pB?v@@pB?`F?nB?`F?zG?`F@fD?x@?v@?`F?hD?xG?`F@zG?nB?rI?nB?pB@pI?bF?xG?hD?v@?v@@rI?hD?nB?|N?nB@xG?bF?fD?x@?nB@`F?v@?x@?bM?hD?vD?hD?v@?v@?pB?nB?pB?v@?hD?nB?x@?v@?v@?v@?x@?nB?x@?v@?v@?pB?nB?v@?pB?v@?hD?pB?fD?x@?fD?x@?v@?v@?hD?v@?x@?`F?v@?nB?`F?pB?pB?fD?hD?pB@hCApH?zG?nB?`F?x@?nB?`F?hDAbM?pB?nB?v@?jK?hD?`FAhD?v@?x@?nB?hD?v@?zG?nB?`F?rI?`H?rI@xG?hD?nB?`F@zG?xG?xG?pB?hD@xG?pB?nB?hD?nB@rI?pB?v@?`F?v@?`F@v@?bF?fD?pB?`F@hM?hD?fD?x@?v@?pI@rI?`F?pB?nB?hD?`F@rI?v@?rI?`F?v@?hD?v@?v@@pB?nB?x@?fD?pB?nBAzG?xG?xG?x@?v@?hD?v@?v@?pB?v@?hD?v@?x@?`F?xG?nB?rI?tP?nBArI?rG?|@@jD"
                     },
                     "start_location" : {
                        "lat" : 50.484246,
                        "lng" : -105.901301
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1541
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 261
                     },
                     "end_location" : {
                        "lat" : 50.4707736,
                        "lng" : -106.3027146
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}gcsH~eygStDBnCBjBBb@?b@?|G@nC@zF@rD?b@?b@@b@?jB?jB?nC@b@?hD@tB?b@@b@?fA?b@?nC@fA?nC@fA?"
                     },
                     "start_location" : {
                        "lat" : 50.4846343,
                        "lng" : -106.3025569
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.1 km",
                        "value" : 5074
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 921
                     },
                     "end_location" : {
                        "lat" : 50.4635267,
                        "lng" : -106.3712123
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iq`sH|fygSQxGK`FIfDOxGEnBQxGQpIQvGE`CKlEGjDEfC[zOEdBGlD?|@Ax@AnBAdDAdF?pI?hDA|F?ZCzH?VA|B@|@?nE?nB?nA?pC?pB?pE?pF?xG?pB?p@?j@BrCBhB@l@@hAFhC?LHhBH~AFjABd@NfCX|CNvALhAd@zD^dCNbA^hCZfBPv@\\fBPdAdClMx@lE\\fBz@lEfBfJvAtHj@xC@DvAhHNt@x@tD|@vD^rA^zAXfA~ApG@Fx@|CfAhEJ^d@hBp@jCDLJb@Np@F\\Db@Dl@FfABb@@V@pC@rE?L@bA@Z@N?@BHFHJHF@J@^B"
                     },
                     "start_location" : {
                        "lat" : 50.4707736,
                        "lng" : -106.3027146
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "43.0 km",
                        "value" : 43049
                     },
                     "duration" : {
                        "text" : "2 hours 8 mins",
                        "value" : 7673
                     },
                     "end_location" : {
                        "lat" : 50.4263408,
                        "lng" : -106.9308988
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ad_sH`sfhSHze@?v@DnY@xG@`F?v@BlTFxEH`FDhDbAlt@HpLB`FDfHAxG?vF?ll@?|N?bM?hD?xG?`F?xe@?`VApP?x@?tC?PCnCIxCG|BYvFi@vHCRIt@It@aA|Jo@jGKx@It@o@dGc@dEa@bEGz@IdB?BCt@Cn@ErBCrB?@?nB?~@Br@DhBHdBH~ABZHt@?FZrCXnCNhALhA\\|CJbANzALjBJvBHzBLzGJ`FZpODvAb@xSHrDH~EVpNDpANrIJrI@lF?L?x@?rP?`F@zG?r@?|G@rIBzT?xA@bCClCIvAE~@MfBk@~DcB~JuBzLCXOnAYdDg@rG_@|Ee@pG_@|EMhBQpBs@jJIlAGt@Ex@MlBCd@ANKxDA~AC|AIzHKvFKxGMpIIhFGvEI`FGhDQhKEhDGfDMxH?pAA`FAfDAx@A`F?nBOnm@?|AAx@?fD?x@AhKCnYC~UAxG?v@?xGCzGC|G?fF@|N?rBFnX?ZDfOFbY?v@?bBBnF?v@BbI@fB?nAHvGB`ABv@DnB@j@ZtI@F~@nR|@xQDv@n@lMJvCL|CJtCDrANjEH|Dr@t^pBrcALxGXzNr@t^LxGPhILnHD|ADxAL|CL`CNnBZvD`@fE@FHr@X`CbA~GjAjGlDjRZfBfA`GNr@tAtHvE~VlB`KbDlQz@lFLv@@DTdB@HN`B|@~Jb@tERbCfAvLh@tGlA`OPlBr@fI~Dne@L~AXpGDzADxA@tAChBCjCGrBOlCIhAKtAs@lGwIvv@UjBIt@s@nGuAxLs@fGeC|TwJx{@iAzJIt@sFrf@i@vEIn@m@nFwBvR{@zHo@rFSjBs@lGKt@s@lGIt@}@dIwCvWCP_@`DsAnL_AbIq@lGwB|R_DvXYfC[vB_@hCQnAyA`Je@jCIb@g@zCsKfn@Mr@Mr@Mr@sJlj@{BtMMr@sHxb@[fBcAbGkBnKw@dFKr@G`@OfAKt@[`C_@~C_@~CYtCKfAi@~FK~@WxCGv@k@|GcChXIt@yAbPGt@a@hEaCjWWfDGt@?@UtDOzCIxC?HEdBEhBAhAG~E]dXMrIAv@Av@i@jc@c@r]]tWEhDSrPAv@[|UAx@QzNAv@EtCM|KClBAvA?`BDvBFtADbANzAJfABJHn@Jr@Lp@ZzA^xAd@vAL\\Tj@`@z@LXNZp@fAt@hAf@r@rBnCpAdBv@fArCxD`EpF`FvGZb@Z`@DFp@~@\\`@nBlCnBjCZ`@Zb@tAhBZ`@Zb@Zb@Z`@Zb@pEdGNP`MrPZ`@xIlLn@|@~@nAn@|@V\\BFXd@b@n@p@lAt@zAJTVj@JX|AbE|CxIHXTl@nAnD`ApCRl@`@fAzEnNz@|BbAtCrB~F^fAnAnDh@xAp@~An@xAh@hAt@|AdApB|@|ADDnAtBhAbBhBbCnCdD~CtD\\`@d@j@bExEh@l@NPnG`HpCxCl@n@LNdEpEvEjF\\^PP~BtCn@t@z@dAb@j@fCbDpCrDfC`D|DbFPTdAzAp@bAd@z@Xd@fAlBt@zANVv@dB\\r@^z@FNVl@z@zBZ|@d@vAd@tAj@hBv@~B|@pCTn@\\bAZz@f@lA~@~BbBpDrBhEtBrEVh@zBzE~DnIfGnM~AfDvExJ|F|LtBnEbDbHl@nA`BjD~DpIh@fAt@~AnCzFHNLXhA`CdDbHVh@"
                     },
                     "start_location" : {
                        "lat" : 50.4635267,
                        "lng" : -106.3712123
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13.9 km",
                        "value" : 13943
                     },
                     "duration" : {
                        "text" : "40 mins",
                        "value" : 2423
                     },
                     "end_location" : {
                        "lat" : 50.42674299999999,
                        "lng" : -107.1275239
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "s{wrHb}skSc@v@ITGVANAL?d@?zJ@zN@nY?nB?xG?rI?d@@nB?v@@Z?Z?zG@fD?hD@jK?nB@pB?fD?`F@v@?~H?jA@xG?v@?`F@hD?hD?fD@`F?pB?nB?hD@v@?v@?hD?pB?fD?rI?fD?rI?v@?`F?v@?pB?v@?`F?hD?v@?hD?pI?hD?v@?xG?nBApB?`F?nB?x@?~E?rI?`F?nB?vE?hD?nB?xG?xG?zG?nB?`FAjK?xB?l@?`F?jK?bM?nB?v@?`F?pB?fD?`F?zG?tG?jK?v@AjK?nB?v@?rI?xG?v@?nB?pB?v@?v@?`F?pB?nB?hD?jK?v@?nB?pB?v@?`F?v@?hD?v@?pB?xG?v@?v@?hD?n@?hD?v@?v@@hD?pB?v@?v@?nB@x@?xG?nB@tP@v@?v@?hD?nB?x@?v@@fD?pB?hD?v@@nB?rI@`F?nB?v@?hD@`F?`F@v@?v@?vD?tK@|U?jK?`F?~E?|N?xG?nB?rI@xG?pI?rI?~E?hD?bR?jK@xG?hD?|U?xG?hD?nB?rP?rI@f[?fHAlY?xcA?nLe@rMMfDKfD"
                     },
                     "start_location" : {
                        "lat" : 50.4263408,
                        "lng" : -106.9308988
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "94 m",
                        "value" : 94
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 50.4258953,
                        "lng" : -107.1275276
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "c~wrH~izlSz@?J?V?fA@"
                     },
                     "start_location" : {
                        "lat" : 50.42674299999999,
                        "lng" : -107.1275239
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "50.0 km",
                        "value" : 50008
                     },
                     "duration" : {
                        "text" : "2 hours 26 mins",
                        "value" : 8772
                     },
                     "end_location" : {
                        "lat" : 50.30237049999999,
                        "lng" : -107.7845769
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{xwrH`jzlSeBdd@Ev@GjBObDOnFEjBClAArA?pBA|G?bB?`L?l@?v@?|B?tE?`F?dAAxZ?bM?v@?pI?v@?x@?tW?rP?pB?rP?xG?`A?bR?zCAtM@bZ?nK?x@?v@?tN?D?rP?x@?nF?tS?tA?Z?r@?B@bABfB@t@@NHbDJzCHfCXvHZhKBv@JpCDlA`@vLXrIHrBDr@H~AV~CBVPpBFp@NtAPhAl@bE^vB`AbFhBbI|D~O@FLj@`AtE`AjFnBvLh@|En@dGn@rI|AhUDv@b@rGFv@rBrZFv@b@rGFv@LlB\\|ELlBDv@v@zKHfAJt@L`AJr@t@xFv@bEr@zCJ`@n@bCDLbA`D`BpEzCrH`AdCnBzE~G`QVj@Tj@pD`JzCtHdChGTl@j@vAnB|Ej@vApD`JvApDVj@fEnKxJpVTj@lMx[BHbAbCl@vA`C|FDFVh@|DpIfA|BVj@~AfDVh@Vh@lC|FlInQrEtJxN`[~DpIVh@@BrAvCfApCTn@L\\z@vCh@xBj@xC`@fCTlBRtBDr@Fr@?@Dl@?HB`@D|@?N@d@Bx@@`A?xA?dA?pB?L?x@A`C?nE?v@?j@@vK?~B?f@?|H@fJ?xG?nB?lR?v@?rP?`F?jR?rP?x@?fD?v@?xG?tW?x@?pI?v@?v@?xG?x@?xG?nB?hD?v@?pI?hD?nB?hD?bM?jR?jR?rP?x@?xD?jK?|U?lY?v@?dT?nB?v@?pB?~E?dT?dw@AtW?v@?hK?xG?xG?zN?`F?v@?`F?xD?|M?fI?v@?fD?x@?~E?x@?rP?v@?pI?|U?v@?zN?pB?fE?hC@`Y@lF?v@@dN?T@hD?fD?t@?@BbH@dG?rD?`F?fD?hA@rDBtAB~AHjBH~B^xHN~DDt@Bv@Dv@R~EBv@f@tLNnDDhAVrGH~Ah@hMR~EDv@NfDBv@n@tNBv@r@lPDv@HnBBv@JlBXvGBv@Dv@^`JB\\HtBBv@VbGJfCJ`CT|F@XRxELrBFbALpBFd@PzANlAJj@Jr@?BP`ARdADNNp@l@bCf@rBPn@Np@@B`@|ANp@b@bBNn@T|@Ld@bAdENp@bB`HlBxHp@hC`BnGfCtJLh@jBbHl@zBj@vBlCvJf@lBzArFtB`IlBdHbAvDrAjFXjAVfAR|@R~@X|Aj@fDXhBb@zCHr@l@vE`A~Ht@bG@Fr@fGvAjLTrBt@bGJ|@Ht@f@xDBZJt@n@dFd@fEjAlJ`@jDnBbPh@jE~AtML`Aj@vEb@pDZnC~@pH|ArM`A|H~E~a@bCdSlAvJdFdb@Ht@bCdSvAjLJt@jAvJj@vEThBnB`PtBbQvBnQzEn`@lCtTv@|GbAfIl@bEj@jDl@~Cz@rEdBdHhA`EPn@pFzRbAnDBHn@xCl@tCNr@@Fn@pD|@bHVhCLvAP~CLbCDpAFrCDhDJdIv@tl@HpEH`DTtFDt@Dv@PvCR~Cx@nKnA|OPxBNlBXlDLbBFv@f@pGf@rGFf@h@~GFv@~@pL~AtSbFzn@RnBvBzSr@dFjCbQThALr@zJzh@hFzXNr@nI~c@|D|SLp@tBzKLr@lJfg@pBpLTpAdA`FjA|FNr@l@tChBhHb@dBv@hCf@|An@rB^fARn@bBhFRh@`ClGtArDj@xATl@lChHjAtCj@vATl@|ExL~I~TbHlQTj@vLzZp@bBjBrGLb@DJPn@xArFjAlG@FrA~Hh@rEFp@bAzJLtARvBx@tJRvB^|CbA`H|@bFLr@Ln@xBzIrAlFxCrLBPJ^DP`@`BfBfHHXxCtLH\\`@`BDPJ^v@`DpAfFfAjEb@fBPr@x@bDLf@hBpHPp@@Bb@dBdErPf@vB~@rDPp@`@`BtJj`@fAnEbAbENh@@F`@`BPn@Lh@Pp@Rv@Np@Pn@Lj@t@vC`@|A?BPp@Nn@r@pChChK|@lDt@rCd@vBf@pBPn@`@bBr@rCNp@Pp@t@lCVhALb@`BxGb@dBt@vCb@`BZnAr@rCJb@Nn@DNlA|EFVJ`@@@^zAr@rC`@`BPp@p@hCl@dCRx@@L@Lt@rCPn@b@`BPn@XfAd@~Ad@~Av@nCZbAbCpIf@jB"
                     },
                     "start_location" : {
                        "lat" : 50.4258953,
                        "lng" : -107.1275276
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 247
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 60
                     },
                     "end_location" : {
                        "lat" : 50.3015257,
                        "lng" : -107.7877688
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eSK-4 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCentral Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCity Centre\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "yt_rHrtzpSAX@Jl@`DDXx@lEVxA`@rB"
                     },
                     "start_location" : {
                        "lat" : 50.30237049999999,
                        "lng" : -107.7845769
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 835
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 181
                     },
                     "end_location" : {
                        "lat" : 50.2980297,
                        "lng" : -107.7981432
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eNorth Service Rd E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eN Service Rd\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "qo_rHph{pS@Bl@bCV~@dAbEbDlMv@nC`@vArBrH`@`BPp@Lf@Rz@R|@VpA@FHl@Hf@F^NnAB^Fl@"
                     },
                     "start_location" : {
                        "lat" : 50.3015257,
                        "lng" : -107.7877688
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 101
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 46
                     },
                     "end_location" : {
                        "lat" : 50.2979895,
                        "lng" : -107.7995656
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRobert St W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uy~qHji}pS?n@Dn@?F@vA?|A"
                     },
                     "start_location" : {
                        "lat" : 50.2980297,
                        "lng" : -107.7981432
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.4 km",
                        "value" : 5382
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 951
                     },
                     "end_location" : {
                        "lat" : 50.28827159999999,
                        "lng" : -107.8650436
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNorth Service Rd W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eN Service Rd\u003c/b\u003e (signs for \u003cb\u003eTrans Canada Highway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e)\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow North Service Rd W\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "my~qHhr}pSj@Jf@VVX^h@JPP\\DJR`@\\bAd@dBZnAPn@J\\VbAPn@Pp@Jf@Pv@T~ARdBRrA\\`BJf@Lh@Rn@Pl@Zt@Vp@Tb@DHBDZf@f@|@Xd@f@p@BDT\\DFf@v@Zb@f@p@h@t@Zf@`CbDPTPTjAbBJNVZDFtAjBPXfCnDr@hAHNDFHLv@rARb@JR@DFPRb@Lf@Nn@Jf@Jj@Jt@Dp@Dl@@N@NDt@@VBb@Db@Hb@H^Vh@N^RTVV\\Zj@d@Z\\V`@FLJRHVHVDXD\\B^B`@@p@?`@?j@?F?n@BtGBxFD~RDnO?`@?v@@vG?pB?v@@v@?v@?hD?X?\\AZCr@Eb@Gn@Mp@On@Yv@Sb@]h@UXs@v@[d@MVM\\Od@G\\CVCXAd@Af@?p@?j@?b@?nB?v@?|BB~@Dn@Fp@F^Hh@J`@Jb@Lb@DJVv@~BdHj@dBVlANdAH~@BbALp]DlM@xC@tA@zF?v@@nB@xG@v@?nB@v@?x@@nB?v@?v@@nB?x@@fDBpIBpI?nA?T?NERCFCFCBA@GDG@I@I?I?W?c@AwAAO?IAO@IDGF"
                     },
                     "start_location" : {
                        "lat" : 50.2979895,
                        "lng" : -107.7995656
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1323
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 205
                     },
                     "end_location" : {
                        "lat" : 50.2891096,
                        "lng" : -107.8835079
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "u||qHnkjqSELAJAR?nAAvAAtHA`BA`FAv@EdNExN?v@CpI?HA|CAv@?v@ApCAV?`@AhA?x@A|@Ct@Cx@Cv@Ch@Ev@AHEb@En@Gn@Kv@In@Ih@Gf@c@bC"
                     },
                     "start_location" : {
                        "lat" : 50.28827159999999,
                        "lng" : -107.8650436
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "44 m",
                        "value" : 44
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 50.2887182,
                        "lng" : -107.883586
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}a}qH|~mqSlAN"
                     },
                     "start_location" : {
                        "lat" : 50.2891096,
                        "lng" : -107.8835079
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "110 km",
                        "value" : 110242
                     },
                     "duration" : {
                        "text" : "5 hours 17 mins",
                        "value" : 18997
                     },
                     "end_location" : {
                        "lat" : 49.988959,
                        "lng" : -109.3040096
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "o_}qHl_nqSiEtXu@zEObAu@|E{ArJETYdBSvAOfAKt@?@QzAQ`BW~BKpAKjAIdAMpBI|AI`CIxBG`CEnBAtAAzB?nB?nD@rA?D?p@FlI@rBFpIHjR@v@FxN@v@FhKB`F@nB@nBJbTDpIFzM@zBD~HDzIFfDHxDJjCHrBJ|BLvBLrBV~CTvCT|B@HVfCThBBPPnANnAL|@XfB`AdGJr@hDhTXfBnAzHJr@Lr@hFj\\xCbRNr@P`Ah@hCn@tC`@bBLf@x@zCFRvA~EbAtC`AfC`BnEvB|FxDxI|@pBdDpHtInR|DxItHpPpBpE|AjDlKtUjC`GdA`Cj@tAVj@bA`CVl@nBvEHPrC~Gp@bBP^xAnDj@vA\\x@jDpITj@xAnDTj@nBzEdKzVfDfItE`LRd@bBfEz@tBf@nA\\|@`@fAl@`B`@jABH|@rCr@zB^vAz@zCj@zB|@|DZrAPz@rA`H`AnElCxMf@hCNr@Np@fCfMlA`GLp@Lh@~@rE|@jELp@bIj`@xFzXh@jCZ`B@BhChMLr@tEfUNp@FXdAbFLr@|@hENr@zBtKnAbG~AbIzApHJh@@FNp@xBvKlA|FLp@^dBjA|FlA~FhCfMDRH^bG~YNr@nI|a@lBbJlBhJj@pCNp@zArHrAvGNr@vEfULp@|@jENp@zApHNp@jA|FzBtKrHx^FZNp@jA|F\\dBlA|F|@jE\\dBhDlPzApHLp@|@jENp@fEtShCfMjBbJvEfUjA|FlA|FvD`RXtAtA|Gr@lDjB`Jh@hCnBpJVpApApGZzABHpAnGz@`ExAfHH^|DrRzDnRdCzLNp@\\dBDPtA|GPz@dAdFh@hCnBtJNp@hDnPp@bDh@jCzBtK~@vErBzJtE~Tr@lD|@hEXvAdA|ELl@Np@TfApApFj@zBPl@bAvDf@hBhA~DZfAnDjMl@tBNn@Xz@l@|B|CtKbApDp@`CdCtIbApDvBxHv@nC\\pAnAlE^rArAtEvAfF@@Pl@v@nCPn@Pl@v@pCPn@\\lAjAbEfA~Dz@xCrAxEDJPn@vBtHZjARn@fA|DRp@vGpUPp@d@|AzAnFPn@|ApFr@hCTt@lCnJDNPn@|ApFv@nC~@dD`AhD@DNh@Pp@x@tC|@~CPn@Tx@~@~CfA~Dp@zBn@zBdA~Cj@dBd@nAl@|ARf@Td@`@`An@vATh@tBjE@DnDpH`DtGVh@`BhDTd@`ElIVf@JVrDtHVh@p@pAP`@DFVh@|@hBbAvBr@vAvHzOHPVf@Vh@Vh@rEnJBFXf@vBpEtBhEVh@x@`Bd@bAp@rAVh@`ArBlAdCv@|A~DfIj@jAfAzBVf@`BfDBDR`@~AfDn@rA~AdDnLnVbBfDfAxBVh@fBtDxFfLFNVh@JT|@jBz@jBl@pA`@bAVn@n@`BhA`Df@xAjE`NtDdLhAlDRn@lDxKrHnUb@rAPj@@BtBvGdA`D~HnVlGrRTn@d@vAd@bBjA~DrCpJtAhG|BjMj@tEzBjQRzApCdUjArJj@tEHt@v@jGlCvTxBhQHt@j@tEJt@^~C~Gjj@Jt@Ht@bB~M`@~C^~CJt@v@hGHt@v@jGHr@xAjLfAxI|QzzAHt@v@hGVxBPzA^fDVzCB^V~DXfG`ApV\\lIBv@D|@zBvm@b@|LP~ELdDZlIt@zSVtGLxCV~Fr@bRBv@P|EDv@ZlIBv@d@zLdAbYP|Er@bR^rJXlIFnBDt@d@tNb@|LXtIDn@Bv@d@bKlAnWjAdNd@bEf@fDZlBLp@RjAdB|J`Mnq@rA|GbAbFtAfG|BjIjArDhCfHh@xAvArDzGbQ~@dCvApDjA~C`ClG`CjGTl@jB~ETj@`@fAlCzGDNnAbDbLbZnHpRdI|STl@jHdRxDdJb@`AJRxDzH|ArCh@|@dBtCxElHt@jAZb@l@~@dFvGdZr_@zGtIjInKHJzGzI`BpC~@dB\\z@Zr@zAlE\\hAb@xAnB~INp@tCrMtE~SH^Np@j@hC`CvKt@rDh@~BfAbFjAtF`BvHhBhIpBpJ^hBx@bE\\lBLr@^vB~BxNhJtj@|AjJLr@Jr@t@nELr@Lr@`AbGLr@Jr@zDxULr@lBnLrBbMpEpXzExYfAzGnAzHXfBl@~Cd@dCR~@Nn@ZvAd@lBvAdF`@lA^fApAlDzDbK~BbGxAzDpBdFZ|@xBxFjD`J`AjCRj@?@Rn@Rl@Rj@fAvDRx@Pp@Tz@pAlFpAhFdAjEr@vCb@jBn@jCv@bDJ`@nAfFnAdFz@rDJb@zAjG^zANn@Pp@hDlN@@~A|GvAhGn@xCf@lCn@nD^jC`@tCJbAJt@BXXrCRvCFr@VpDLhDBh@Bv@FrBLdMAd^?v@A~L?xL?vUAnI?fKAxfA?|W?pR?v@?n^?v@?fK?v@Axc@?fK?nW?pP?nPAnI?nW?vNApI?v@?nW?fD?vG?v@?rC?vP?vN?v@?nI?fD?xU?v@A~E?~E?fK?vG?fR?x@?hI?|@@nI?~a@?nI?~E?xN?v@?~L?fD?vU?v@?fD?v@?vG?jO?vG?v@?pI?v@?~E?nB?fK?v@?xq@?~Z?zN?v@?hY?v@?v@?paA?~Z@ni@?~E?`p@?v@?vG?~E?fK?~L@hK@nP?nI?jCBxCBh@BpAPvEhAxTt@tNt@pNDt@p@rMl@bLhCvf@Dv@~@rQFxBBv@LhE?lA@v@?lA?nCAx@?v@AnAOtHQnISdKa@hSOlGOlICv@sAzo@K~ECnBOtGGfDQnI]lPCv@_@dR_Anf@IrDAzCBdDHnDBl@PdDPjBJpAZbCDb@l@rDJl@^fBNn@XpAl@tBjAhDlBtEfH`OtBnE~DnIfGjMVf@vExJVh@tEvJVh@lAfCfE~IvBfF?@n@dBv@|BTn@FTv@bCdAnD@BZlAz@rDhA`FPz@jArGpAhHHb@|@fFvApIxAlIfElV\\tBf@vC^xBp@`Et@jEJh@b@hC^pBR`ALv@V|A\\pBrEzWvCvPBPnAbHBNb@lCLv@b@bDb@tDJ`A@HFt@JbALfBHpAHlADx@H|AD`B?VFbBBtA@vA@tB@v@@zABjH?R?b@?`D?dT?xH?~b@?VAdGAnI?fK?nI?v@?vo@@tE?fD?nBBv\\@~S@~HHxCJbCR~DRdD\\lD\\xCPpAJt@@HV`B`@~Bz@nE`@zB`@|Bx@lEvAxHzBvLdLbn@|CrPnC`OnC~NzDzStBfLVtATvAfJbg@tArHNp@tArHLr@vE`WdBdJLr@vJth@bBdJLr@p@pDRnALr@RhAn@pEj@lE`@dDNtAHt@Fh@b@dF`@vEXbDLpAx@~J~Ch`@x@tJDh@@LXlC\\`Dx@fGl@lDJr@pAvH|BnJfHfVnEdOv@nCtIvYPn@fLd`@tEtObEfNf@hBfAvD`BnG`A|D|@dEj@vCP`ALr@@FdAlG`BlK~BjOdB`LfFl\\Jr@dBbL~DnWLr@Jr@Jr@rBvMJr@xAlJLr@jEdYfB`LJr@bK~o@~AfKl@`EXtBb@~D@HTdCP|BH`APlCLxCJfCD|BHnH@lW@nC?lAFhiA?pN?vG?tGAvq@?v@?~L?v@?fK?v@?dg@?v@?fR?v@?nPCtG@fQ?V?^?~L?~I?~O@fRAbN?rW?vG@pU@lLBhH?v@B~GF~CL|EFhD`@nJd@bHnBjTFt@tGns@Ft@pAfN`@xE~Ehi@j@~FnChZHt@~LtsAFt@l@lGt@dIr@xHnAfNFt@j@nGHt@|@xJdClXfApLFt@PjBjBhSXbDHt@dApLl@lGdClXPjBPjBFt@bEbd@n@xGj@nGnAfNnEbf@"
                     },
                     "start_location" : {
                        "lat" : 50.2887182,
                        "lng" : -107.883586
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "65 m",
                        "value" : 65
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 49.98954089999999,
                        "lng" : -109.3040449
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_nbpH`mczSsBD"
                     },
                     "start_location" : {
                        "lat" : 49.988959,
                        "lng" : -109.3040096
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "8.1 km",
                        "value" : 8138
                     },
                     "duration" : {
                        "text" : "23 mins",
                        "value" : 1375
                     },
                     "end_location" : {
                        "lat" : 49.9896136,
                        "lng" : -109.4178769
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sqbpHfmczS?vEAnB?nB?v@?|EAfD?nB?nB?nB?~EEjh@?xD?nB?v@?rk@?|K@~a@?tc@Btx@Cj\\C|YBzF?B?~FAfK?nBAtNAfD?~E?nBAfD?vGAv@?v@?fD?fD?fD?~E?nB?dR?~E?nB?fK?~L?fK?nB?nB?lB?nB?~L?zE?dQ@rI?nB?l^?fD?fY?nP?dD?nB?vG?~L@nB?vG?fC"
                     },
                     "start_location" : {
                        "lat" : 49.98954089999999,
                        "lng" : -109.3040449
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 811
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 135
                     },
                     "end_location" : {
                        "lat" : 49.9823208,
                        "lng" : -109.4179149
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRange Rd 3255\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "arbpHvtyzSdA?~G?vE?jB?fA@rD?nC@b@?nC@`@?b@?`C?"
                     },
                     "start_location" : {
                        "lat" : 49.9896136,
                        "lng" : -109.4178769
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "85.0 km",
                        "value" : 85048
                     },
                     "duration" : {
                        "text" : "4 hours 5 mins",
                        "value" : 14709
                     },
                     "end_location" : {
                        "lat" : 49.9717938,
                        "lng" : -110.5735929
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSK-1 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Trans-Canada Hwy\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Alberta\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "odapH|tyzS?lvA?v@?bt@?~E?vG?nBAfK?dYAne@AtG?rQAzC@`M?nC@jP@fE?~F?bCA|BEjDAx@KnIItGK~IItHExDAjDChG?@?t@?`JAtQ?~E?hH?nBAfD?dB?hF?v@?dD?v@?f@BnIDhGJhFF`CDlAJtBLtBf@~HTfCFt@?@PhBN~An@xGtAdNv@bIhEfc@Ht@dElb@v@bIPjBd@vEHt@PjBtC~YHt@rA|MrEhf@Fl@LnBTxDLzBDlAB`@JzD?BBr@DbBDbCBdB@bB@|BAzC@pJAdL?zEAxQ?`CAt`@?v@?v@?dY?fB?v@?fRAtN?vG?fD?nWC|S?v@AjXAp]?~S?v@?|S?v@?|P?`F?v@?~S?vN?v@@tq@?jBChg@Ctw@?fD?fD?nB?nB?t@?v@?~L?v@A|o@Gzo@EdYCjI?z@@`LCfD@dE?BDnFD|BFjAD|@HhA@ZNnBHbALlAPxAJ`AT|ATxABJn@tDbAzEpB|INp@n@tCNp@Np@Np@Np@~BnKLh@@F`AfENp@Np@Jb@BLNp@Np@jB`Jx@xDd@tBd@rBLp@Np@Nr@h@|BDV~@fENp@Np@^bB^bBNp@pB|IrBfJp@~C~@fEnEfSn@xCn@tC~CtNNp@nDdPhAbF|AhHFXh@bCTbAVnA^tB\\rBT|A?DJr@DVPxAVtBRjBNbBNvBNzBBh@NpCD~@DbBF~ABpABjB@pB@tA?~D@jA?`S?nG?zo@?nB@fK?fRA~S?vN?dC?hL?v@@tc@?v@?dK?~Z?dJ?nB?|a@?nB?nI?fD?vG?nB@lW?v@?vG?~E?nB?lP?v@?fK?~E?nD?vN?~L?v@?dK?nW?lI?nI?v@@l^AfR?v@?t@?xI?l@?nB?dO?fU?v@?fK?nB?v@?bA?hDAzA?DAt@C`DAtAA^ChBC|@Az@MxEGlBCl@?HMdDUvEQjDKzBQ~C[rGI|AEv@UzEEv@ALOtCStDMtCSrDq@`Nm@xLc@pIOdDQdDCt@KnBQbDCv@KlB[rGQdDIlBEv@QdDKlBIlBEv@Ev@g@vJMvDS|FExCE~F?~C?~C@rBF|CDlBH~APlDRhD@N\\hE?Hp@zHbAxJBLFt@\\`D@Fj@dGl@lGHt@VnCT|BPjBHt@v@bIHt@Ft@v@bIZ`DRjBv@bIhAnL~BdV@NFt@l@lG?Dd@~FH`ALfBNlCLhCDt@?@FhBLxDFxB@\\@x@BdC@bDAjE?dD?rAWvSI`GAv@YdVGhCIpFKxIGrEO~MGhEEtCIpHIbGEhFSjPAv@UdRw@lq@AtI?v@AfDCpK?lN?hJAv@?zE?B?tGAdD@`T?nB?v@ArMAhK?pJ?t@?~E?v@@RAxOG`}B?`O?dDB~EJ`EFjBF`BRvCPxBVjC`@zCVhBNdAh@zCd@tBVjARx@Rt@L`@Pn@@DZbAdA|CPh@zAbElG~Pl@zA~BdG`@bAbEvKp@hBZv@@B\\|@d@pAn@fBhAxCb@jAj@`B^`ATp@DHJXTn@Tn@Pf@Tp@V~@Pl@J^Nl@Np@J^Nn@Np@Jh@d@zBNr@Z|AZbBd@~BNp@`A~EvAfHb@zBnMto@l@vCvAfHdBvI~@tELp@|DzRr@nDXzA^fB`@tBb@tB\\fB`BfILl@ZxAd@dC`@nB|CtOnBrJnAjGlBpJXtALr@BHVpARdARhAPhALz@Fb@D^DZ?@Dd@@LD^Dh@Dd@Bd@@LB^Bl@Dn@B~@Bf@@d@@n@?x@@n@?T?LAlA?RAfCAvAAv@C|CA`A?v@AjBCpBG~GA`AA`CAjA?ZAfAAlBCbB?VAr@?BAfCAhBCtBArA?B?t@Az@AvBCvBC`CAfBA~@A|AArBCfDAtBEzD?jACrC?ZAfBCjCCtCCdDAt@?r@?BCjC?ZC`CA|AAbAC~CCvEE~EA`CElE?h@IxKAfBCbDCbEGfHExF?l@CzDCnCCfCAtBAlBClCAvAAnA?ZArAAhBG`HE|ECrDA~A?`@?TAr@AbCC|A?XCdEEfECbCCvD?h@CbDE~FCbEEjGEpFCvDCrDE`E?b@Ax@AxBEnFAtBAdB?`B@~ABfBBt@Dz@RzEXlH?BJlCJdCPtEPtEVlGP`ERbFHdCNtD^zIv@lSFdBDt@Bv@PnEFpATxFBz@Bp@TnFHbCJlCFzAFrBDv@JtCNjDNlDLhDJ~B@b@NjDJ~CLdDBv@HlBP|EF~AZlJRvF@`B?vA?vACxAEfBG|AAVCj@IdAY~CM`AMnAUvBQ~AsF~e@oClVKr@qBlQ]~CoFle@iDvZk@`FmGlj@UjBgAtJsCzVeCnToCdVKt@kHlo@mDf[_@~Cw@bHOrAAJKdAEn@KvAABOdCQbD_@bH{Dvt@Et@gBh\\Et@QdD]rGEt@Ev@Et@Ev@}@dP]rG]rGE|@y@xOEt@c@jIKlBEt@gAtS]rGg@rJUjEeAbSmAlUStDUpEYbFcAzRARkAnTEt@gAtSUvEcD`p@EjAE`BExBCnC?p@AdA?|@BnC@z@@z@@jALvFNbGPpHNzFDvBHzCNxGNbGFjDDvCBp@`@tPLjFD`BJhE@VRlJBv@FzBB~A?@NvFFrCTxJJ~EBbADjA@b@DpBHlDBl@DdBFrC@Z@l@L~EBhAXbLFtCFnC@jCAdBA|AGbCMnCEd@Ep@MxAWlCUhBUvAMr@WrA[rA_@vAm@rBc@vAa@lA_@jAgAbD_ClHgAfD{AtE{@jCsD`LeIvVc@rASl@qAxDwRnl@iI`W_Nza@Sl@}@lCqHnU{BzGqG|RgBvF{@~Cs@pCc@|BSdAUnAStAaDjTCRm@|DKt@sEzZiVjaBw@nF[lBSpAg@xDc@xDo@vHYvEOrCO|DMjGClBAfBAbDBjL@|H?v@BfK@jHDx]BtE?dHD|XBjBBvADlBL~CFdBh@zJRtDdAbSlA~Tl@~Kd@tI\\`G\\dHBZZ~Ft@zNf@nJV~Ef@nJFdARpD\\tGNnC^dH`@`If@lJRnDDt@XpF`@`I\\vGV`ELfC^jHVfFZpFf@pJZlGDt@H|A~@vPt@nNJnBDt@ZvFRrDv@jO^`H@^f@fJf@bJ@N`@xHTxD`@`IBj@TfEPpDNpCDdA@^?X@`@?d@@n@?b@?p@?hQ?jE?rL?xL?rD?dPAjO?bB@nH?vA?v@?b@A`G?`B@n^?`B?bG@lCAtN?bE?jJ?~L?pC?b@?jG?nB?bB@d@?bA?d@@b@@hABbABt@FxBHdBHdBHhAFfAJdAHbAHv@RdBNvAPvALx@bAvGHb@hAdHrAvIh@dD|@xF`@hCj@pDJr@p@dE"
                     },
                     "start_location" : {
                        "lat" : 49.9823208,
                        "lng" : -109.4179149
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 129
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 49.97295339999999,
                        "lng" : -110.5735861
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCharles St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRange Rd 51\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ub_pH|k{aTO?c@?sD?"
                     },
                     "start_location" : {
                        "lat" : 49.9717938,
                        "lng" : -110.5735929
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.7 km",
                        "value" : 3662
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 564
                     },
                     "end_location" : {
                        "lat" : 49.98076,
                        "lng" : -110.6140628
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e2 Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}i_pH|k{aTH~@BVb@jCpDxU`AxF~@lGdAnG`ArGv@jE@Fb@|Cb@|Cj@fDXfBbAdGlAvHLr@Jr@f@|CJr@Jr@Lr@Jr@BLBNBTBJD^?H@D@N?N@L@l@@t@@|B?jAAdA?l@C~@Cj@El@El@Gn@Gl@Gf@AFY`BYvAS|@Qv@Wv@M^Sj@Ul@]p@Q^OZc@p@Yb@[b@g@l@QT]^OPk@l@]\\u@z@{B`C]\\EFoBxBy@~@]^wA~Ay@~@{@`AgBnBqFhGs@v@cCnCON[`@IJgAvA}@tAmAlBsCnEi@v@wCnEc@p@oEvG"
                     },
                     "start_location" : {
                        "lat" : 49.97295339999999,
                        "lng" : -110.5735861
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "40 m",
                        "value" : 40
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 49.9805297,
                        "lng" : -110.6144995
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-1 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wz`pHzhcbTl@vA"
                     },
                     "start_location" : {
                        "lat" : 49.98076,
                        "lng" : -110.6140628
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "5.6 km",
                        "value" : 5636
                     },
                     "duration" : {
                        "text" : "17 mins",
                        "value" : 990
                     },
                     "end_location" : {
                        "lat" : 50.0102053,
                        "lng" : -110.6761728
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-1 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iy`pHrkcbTqArBo@bAiAbB]h@gDbFo@bA[b@kAdB{@rAy@pAuArBOVSVsB~CkAfBkAdBaBdC]h@[d@mBzCU^{@vA{@pAqAtBsBdDk@|@INgAfBiBvCYd@gAfBsArBa@n@uAvBwAvBuBdDy@pAq@bAy@pAoAnB_D~Ee@t@mEtGORuBbDaBdCINi@|@k@fA}@nBUh@Q`@uAfDaAdD]tAi@nB_@jBABQz@]bBkA|FOp@Or@UbAUdAAJCJSbAU`A}@hEaDhOeDrOMn@y@jEI`@g@dCSrAMn@SrAIh@Gb@MhA]fDSlBG|@{@jNOjCGz@Ed@KfAU`COrAKr@Kt@AFUzA]hBS~@Q~@Md@UbAc@zAOh@ITEL_@pA]dAUp@Sf@MZGNi@lACFKRwIzPs@|AsA~Cy@xBw@zB{@vCq@~BI\\Mb@Md@"
                     },
                     "start_location" : {
                        "lat" : 49.9805297,
                        "lng" : -110.6144995
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 516
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 90
                     },
                     "end_location" : {
                        "lat" : 50.0127809,
                        "lng" : -110.6821454
                     },
                     "html_instructions" : "Take the \u003cb\u003eSouth Ridge Drive S\u003c/b\u003e exit",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "yrfpH`mobTk@bBc@jBk@pBQp@iAhEe@nBSl@M`@OTWp@MZWj@EJi@fA_@|@[t@GJ_@hA"
                     },
                     "start_location" : {
                        "lat" : 50.0102053,
                        "lng" : -110.6761728
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 711
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 121
                     },
                     "end_location" : {
                        "lat" : 50.0165397,
                        "lng" : -110.6899605
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto the \u003cb\u003eTrans Canada Highway\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-1 W\u003c/b\u003e ramp to \u003cb\u003eCalgary\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "{bgpHlrpbTMd@M~@YzBa@rCGZ[dBAHe@bBmAbDiAnCe@~@o@nA{ChFCDqAjBEFc@h@aA`B"
                     },
                     "start_location" : {
                        "lat" : 50.0127809,
                        "lng" : -110.6821454
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1531
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 329
                     },
                     "end_location" : {
                        "lat" : 50.0279378,
                        "lng" : -110.7019675
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-1 W\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "kzgpHfcrbTSTc@j@oArAwB|Bq@t@g@f@{@|@wA|AyA|A{@|@]\\s@t@GHwA|A]^wB|ByA|Aa@b@sAxAg@h@GFyDfEcElEsDrD}@~@QN[\\}BbCs@v@c@f@o@r@i@j@s@t@A@A@UX"
                     },
                     "start_location" : {
                        "lat" : 50.0165397,
                        "lng" : -110.6899605
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 370
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 80
                     },
                     "end_location" : {
                        "lat" : 50.0307845,
                        "lng" : -110.7046352
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eAlberta 1 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans-Canada Hwy W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCalgary\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "sajpHhntbT_@VOLQPONWVc@d@eAdAWTSNGF_@XyAvAgAbAs@p@MJ[\\OH"
                     },
                     "start_location" : {
                        "lat" : 50.0279378,
                        "lng" : -110.7019675
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 314
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 50.0331442,
                        "lng" : -110.7070586
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eRed Deer Dr SW\u003c/b\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "ksjpH~~tbTaAz@{@x@QPKLw@|@[ZaA~@[\\iCtC"
                     },
                     "start_location" : {
                        "lat" : 50.0307845,
                        "lng" : -110.7046352
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "24 m",
                        "value" : 24
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 50.0330202,
                        "lng" : -110.7073255
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e6 St SW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cbkpHbnubTRl@BF"
                     },
                     "start_location" : {
                        "lat" : 50.0331442,
                        "lng" : -110.7070586
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "196 km",
                        "value" : 196206
                     },
                     "duration" : {
                        "text" : "9 hours 38 mins",
                        "value" : 34703
                     },
                     "end_location" : {
                        "lat" : 50.863844,
                        "lng" : -113.0054361
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-1 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kakpHxoubToEtEwA|AWXcBnBqAxAy@`Ak@p@gApA[`@kAtAg@j@iDxDGFoApAABcAdAw@z@]\\sBxBYZYXe@f@YZ{@z@EF[XuB|B[ZA@c@f@UT[\\A@]^sCzC]^]^qE~Ec@b@WXIHMPq@t@m@r@GJQR]f@o@hAc@x@Q`@y@fBKTEJYn@e@dAm@pA]x@}AlD[t@[t@yC~GuA`DCHeA`CiBhEGLmDhIu@fBgAdCSd@oBrE}AvDqBtEUh@sDpIWj@qBvE_AvBm@tASd@g@jAc@bA]z@i@hAe@z@_@p@e@n@e@n@e@d@e@f@i@b@YREDYPIFWNWJc@TC@a@Lq@Tq@N[DI@}@NmAJA?}AHgAFO@_BFo@Bq@Do@DgBJk@BeAFE@O@S@C@WBUBWBUDWDWDg@L_@LWHc@P]PSJQHGDUNi@\\]Xa@ZSRA@QPSTQRSTQVSXa@j@QVe@z@]t@Uh@O\\Wn@IVQb@m@dB}@lCKVuA`EUn@}@jC{@dCELoApDIP{AlEWt@g@pAO`@}AjEYv@[|@mB`GqAxDiAdDmAjDy@`CuA`Ee@pAw@~BYv@a@lAA@qBpF{ApEa@nAuA`Ee@tA_@bAWv@qC~HSl@iBhF[`AUl@Wx@q@jBYz@CH]~@mErMy@|BYx@y@`CkBpFg@xAyB|GCHkAlDyAtE_AvCCFiAjDo@pB}BvHwBvGcBfFQh@gAfD]dAUv@{ArEyApEu@`CITu@|B[~@[z@[x@]|@a@dAy@nB]|@eAdC_@|@o@|A_@|@]z@]z@o@bBYr@M`@c@nAm@lBOd@e@xAA@i@dB_@hAq@pBi@dBiAjDiDnKgGjRqD|K}CrJSn@{@nCQh@mFlPwBzGSl@oAzDoAzDyDnLY|@kApDq@tBSn@CFgC|HCJkAnDQl@y@fCgDhKoDzKyDtLcCtHu@|BqA`ESl@]dAsBlGqBjGs@xB_BdFe@rAmAvDa@nAc@vASj@aAzCaAzC_FjOsAfEwFbQqCtISl@kB~F_Mz_@sC|IoB`Ge@|AkCdIwBxGIVcA`DqA|Do@pBcBjFcI|Va@hAg@zAqAvDmJ`YeBfFsRtk@gCrHgAbDwDbLSn@i@zA{@hCmJ`Y_KpZeIbVyNfc@iCvHeBjF}GfScBfFSl@qAxDsFjPeBfFwBtGUl@aSxl@a@lAoB`G_AnCSn@Sl@yBtGsBdG}DnL{@jCeBdFi@~AoGjR{ArEyBtGaAvCM`@mDnKM`@_CzHu@jCSt@Qp@i@tB}@rDu@lDc@jBMl@o@xCo@~CaBvH{AdHc@pBeFhV]bBq@~CyEbUyCpN{BtKcCjLgBhIOv@c@tBYtAKf@m@|C{BpLMp@UjAq@tDMr@Oz@g@rCi@~CcA`Gg@vCO|@s@dEmHtb@wAjIMr@iFpZW~Am@fDm@jDkEjWu@nE{BrMeFrZgKrm@O`Am@nDo@tD{@bFiDbSeCxNGd@cDdRiAxG[fBuCvP_FxYuBzLc@fCm@tDo@nDgFrZMr@AFsCzPyChQc@hCaDdR]pBcAbGi@|Cu@jEMr@e@lC[dBk@zCe@~Bq@fDQ|@}@rEm@zCOp@e@`CsB~Jy@fEgDrPoBtJaCxLENqCjN{AvH}@jEe@~B_D~OwBlKSfA{@hEeAfFwLdm@Mp@kA~FQz@uBnK{@jEOp@CP_EbS{@jEGXGXiBbJy@|DkL`l@mEtTiAzF{@jEiAxFyBvKmAbGMr@{ChOuAdHkA`Ga@pBm@hDoBnKg@tCoB~JeDvP]~Aa@nBg@fCq@hDyChOiCpMsEhUS`AmBnJo@bD}@fE[zAOj@aCtJ{AnFaD~JwCdJaArCcCzHSl@w@~Bs@vBGRy@bCw@dCYz@Ur@ENSl@[bAq@nBc@tAuAhEy@fCs@xBSl@Of@cCpHkAlDw@dC}E`OSl@cCvHg@xAGPkAfDqAfDqAdDmBhE_BpDsCzF{D`IMTwJ`SWh@aEjIS^CFqCxF{HzOkGfMgAzBaBdDgAzBsIbQkGhMqAhCy@bBkRf`@{[hp@aEjIWf@iGhMgInPgAzBwEpJg@bAGLWh@gThc@{EtJoCxFsF|KgA|ByBlEgA|BqCvFWh@S`@uC~FWh@sIdQ{HzOqAhCk@nAkJlRiDbHaXxi@yHzOWh@cC`FaPb\\eAxBk@jAeQb^sF~KsOr[sIdQ{HzOWh@aGxLiJnR}@fBS`@Ub@c@~@gTjc@oYnl@Wh@iGhMqCxFWh@aBdDgA|BgAzBaBdDWh@iDdHwBhEsApCyEtJiDbHiD`HqF~KWh@se@haAaBfDaMdWcApBw@`BaBfDgAzBWh@}NhZWh@gA|Bo@pAWh@iAzBWh@gA|ByBnEWh@qCxFgAzBWh@Wh@iGhMaElIaBdDiGhMWh@gChFkCpFe@|@_AnB}BvEwHtO{KfUaHnNgA|BkMvWq@pAg@dAeA~BsGvM_BdDWh@cHtNaAnBg@fAeD~GwFdLwEtJUb@yKdUc@|@e@|@aElI}GhN]p@oDnHaDvGaPb\\eEvIiDbHo@pAaKzS_CzEyBtEsIfQ{KbUyEvJWh@cN`YyBnECFmBzD{BtEeBnDiDbHiDbHWh@oCzFcC~Ee@bAiGhM}Qp_@Wh@cHtN_F`KgAxBiBtDuLvVaHrNo@rAyNhZuR`a@sIhQWh@aKzSWh@IPcVzf@o@rA{KdUqIhQgA|BWf@MV}L`WWh@mShb@S^k@nA{Ulf@w^xu@sAtC_CzEaHtNyH~Oo@rAWh@qF`LgA|ByBnEwBpEsOv[aAnBkE`J_OvZsBfEWh@gKfT}MzX{Vjh@aAnBk]ts@aCbFyAxCwAvCqAhCme@taAki@phA_C|E}AbDeQn^Wh@{BxEeDdHi@pAQ`@y@xBkAdDk@lB{@~CaAlDw@fDuA~FsCrLeBlHkDhOYlA]tAc@jBK`@{@rDqEhR{FjVI\\kB~Hq@tCuB|Ig@tBaE`QgCrK_AzDwBfJq@pCsAxFyAfGa@bB}@xDeBhHwA`GQp@_A|DiBrHa@bBuBzIaA~D[pAqJha@mHb[]xAiAvEoArFkK|c@sAxFaCbKe@nBiF|TeNjl@yAhGkFbUuB|IOr@m@hCm@tCoJbc@oCfMaGhXOp@wBxJwB|Je@rBa@lB_AfEuHr]aE~QeAzE{FvW_BtHoC`M_DxNqB`JaSh~@oBbJs@`DoAzFOr@S|@g@~Bo@vCk@hCqCfMYvAeAvEoB`Jm@pCaBtHk@jCOp@S~@kCxLyDfQKd@Kb@s@dDoDpPs@|Cm@fC_@vAEJK`@_@rAm@lBWz@K\\c@nA[z@y@xB_@`Ai@lAi@lAsAzC{AjDiC`GQ^Uj@]t@Uj@_EbJy@jB]t@uA`D]t@Uj@Q^eO`]_AxBoArC_ArB}@tBi@lA_BpD}FtM{JdUqHzPo@xAWh@{AlDWj@oEbKWj@yDxIaDlHsBxE{IfSkK|UqRnc@Wj@Uh@k@nAiC`GmDbI_@z@mIhRuEpKuOd^cA`CiMvYuFbMmBfEm@zAeFnLkCbGoEdKQ^KTcKrUUj@qJpTuBvEUh@Yl@m@tAm@tA{AlDWj@eA`CwC|GqDjI_AtBEJO\\eA`CEJQ^EJyDxIO^EJQ^Uh@kAlCQ^Uj@cBvDaIvQa@`Aa@`AuBvEoGvN{AlDuA`DgAbCUh@mHrPaCrFaCrFKToBrEsBvEWj@sBvEmHpPgHfPkKbVWj@eFpLkCbG_CnFaDnH_BtDS`@qG~NiDzH}E`L}L~XcI|Qw@jB{AnDeBtD_@t@Wh@ABy@zAoA~BqCbFeAjB_AbB_BxCiAbC{@lBOZGNq@|Ac@bA[r@a@`AkAbCy@rBcBzD}AlDu@dB[n@]p@a@jAe@dAc@fA]~@GNM\\[z@k@dBKT_AtCaBvEUr@mAlDy@rB[z@i@xA[r@[t@k@rAcDnH_DnHWj@Uh@A?Uj@}D~I{FvMoCnGuCvGaBxD}AjDiHnPc@bAsCrGYn@aEjJsCrGuDvIw@dBs@`B_DjHaAxB{@rBsB~EEJ_@dA]bAOh@ADk@lB]tAOl@Qt@Mh@[xASjAQfAW|AS~AUjBGl@m@tFc@dEg@vEi@dF}@~H?DIt@OlAWhCSfBc@dEc@xDU|Bo@zF]fDUrBg@pEGh@c@`Ea@|Dm@xFiBnPy@|HWfC{@dIQ|Ak@fFIt@[zC}AzNiA`KuAlMKbAs@vG}@lIQbB_@dD_ArIo@bGmAjLgAxJ_@nDsBfRE^_@fDALmBfQyGtn@gAzJwCnXq@pGkAtKoB~Q}@hI}@rICRg@vEcCdUoAlLUzBmA~KGl@gBjP{@xHIv@AHeC|Ua@tD[nCMpAq@tGs@|GSdBOtAQpAMr@QdASbAe@xBg@zBsAbGWlASx@{AhHwArGaAhEu@`Dw@nDeCdL[tAeB`IS~@o@xCyEdTS|@Qr@kAnF}BlKwApGq@vCaDvNo@xCg@|Bw@nDoA`Gm@jCkBnI{@tDoAxFQx@_AlE_AfEm@nCeB|H_ClKg@xBuAnGs@bD_@dBeEpRoBxImArFGTG\\}AbHcBzH_BnHm@lCc@nBI^k@lCg@zBcDvNiAnFw@lD[rAYvAq@`DCJc@lBs@bDeArE}BpK]|A_@bBaAlEOp@ABu@nDGVOp@S`AcBrHYpA}BfKABu@lDq@bD]|A}@zDyB`Ke@xBiAfFkAjFgDjOqErSOr@_BnHyArGu@fD?@oA|FgBdIoA|F_AjEa@hBaAlE_@zAS|@y@vC]pAQn@qBlHeAxDaGhTe@fBELkAdEIX{@|CmBbHe@`BoFxRgBtG}@~CyFpSwBzHoC|JaCvIe@dBc@~A}AtFu@lCqCxJOj@aAtDM`@iAbE}BjIaB|FeElOgA~DoBfHSn@oAvEiDxLmGjUyE~P{F|S}@~CQn@iA`Ew@pCwB~Hm@vB{I~[Qp@Oj@}AvFsCdKaCtIiEvOQp@e@`B_CrIQp@eDtLY`ACJgAxD?@{@|CuAfFkBxGoBhH[hA_AdDIZe@fBy@vC{@zCo@~B{AnFOn@sAzEyAlFq@`Cq@bCy@xCe@dBSp@_@rAiAdEyAnFi@nBOj@Ut@c@~Ai@lBq@bC?BSn@Md@o@zBK^e@fBOj@y@vCa@zAa@tA_B~FYdAy@vCYdAe@dB}C|KaAnDaAnDCHw@pCMd@CHw@pCQp@Qp@K^y@vCg@lBMh@Sv@K^e@pBWhAa@pBW|AUzAKn@OhAW|BQbBKpAGv@?@MxBIdBCt@Cl@AHA`@Ar@CjACpAAzAA~C?vD?dA?fJ?X?bJAdI?nA?lP?|C?hD?|K?f@?lY?~@?lI?pL?|F?V?v@?nB?jD?`O?`BAlDAxB?DCr@Ar@Cv@EdACdAGhAIjAIfAGt@El@MrAS`BSbBOhASjAQbAUlACJKf@AH[vAOl@U~@Ux@Ut@Wz@Yz@Wt@Ob@a@fAUj@Sf@MXCFk@lAeBjD_B|CmA`CuDhH}AzCwCzFa@t@ILcApBoAdCyBfEyC~FqDbHqDdHa@v@Wh@aDjGsFnKaAnBiF~JS`@[l@Ud@m@fAu@zAgLxTq@pAiHjNqInPqExIMViAzBgBhD_HxMqAfCqGbM]p@cApByFxKWh@cBbDWf@{AtCa@v@Wh@q@nAwApCwApCcAnBaAjBk@`AU`@CBW`@m@~@c@l@Yb@[d@IHe@l@e@l@s@x@i@j@e@f@[XmBdBsAhAs@f@a@V_@V[RgAn@iAj@{Ar@{@ZkA`@e@NqAb@GByIrCYJE@mA`@kGrB{C`As@TwDpAwAb@cCz@iAd@e@TWLc@RkBfAuBbB]X?@wAvA{C`EcAfBq@nAEFe@dAe@lAaApCm@lBs@rCw@jE_@pC]rC]`EG~@GrAGlBE`CCrBEfN?zAAj^?fB?hA?xAAzDExIi@jMk@jGW`B]bCm@xDOt@Or@a@vB_BnFu@vBWn@kArCyBfEeCdE[b@]`@m@v@eBjBqBnBaEvC}BrAq@`@gB`As@^sAr@oCbBoAv@sD~BuCxAqDrBgBv@A@_CdAkA^_Bh@mA^eAZc@LGB}B^G@cEb@kEVsOFyBB]?s@AwBAaC?cm@@gA?kB?kE?uADw@DmAJmAL{Cl@wDrAuCrAkCbByDrCcFrFy@nA{A~B{DrG_NtUyDvGo@dA_BpCW`@_E`HgJzOaDrF}@pBwA~Cq@nB{@`CeAtDy@dDgAjGYnBKt@[bC[tCStBSjDIrCCv@Av@Aj@CdF?bAAbVArPDnm@CdFAbB?pA?dB?tA?nC@fM?~^@`O@hT?tI?jD?v@@|V?rD?n@AfB?HG|E?tI?bVAxP?pR?lKAhk@?~A@rA?nB?R@xDApR?xP?pA?~J?lO?V?`@?fM?r@?B?fO?`C?`@?nC?lQ?xE?`E?~N?b@?TA|N?jD?x@?pE?zL@pUAfB?xP?h@?nL?rJ?P@lE@zCA`A?dE?v@?zF?pE?r@?hIAjD?tI?H?x@?dB?rA@rUA|R?jU?vD?T?nE?xC?|W?bI?tV?v@@~CAfH?D@pM?xC?ne@?fE?bB?lAAlQ?~B?x@A|Q?pT?LA|K?xC?~EAtB?~N?lC?nBApCCfO?v@?bF?lB?jD?hD?bF?lJApR?jT?nL?bF?V?b`@ApF?lEA~^?x@?hT?pBA|G?fMA~o@?dF?DArDAjd@?x@?hS?tFAlE?|G?bF?`FAbQ?zN?fGArF?rF?pB?x@?bV?hD?x@?jd@?bF?hD?x@A~N?x@?dM?`I?jF?pR?hD?jD?bF?bFA`F?|G?pB?bF?tI?bF?v@?pB?pBAjT?rI?bF?dF?bE?x@?hD?pBAldA?bf@?lJ?bF?x@?v@?^?x@?v@?x@?pB?`B?fA?h@?jD?L?h@?L?tE?hD?jD?`D?F?x@ChD?B?HAj@CbA?@Ch@E`ASjCC^Eh@E`@UpBANKr@?BO~@QdASfAa@dBMf@CH]tAYbAWz@g@tAADMZEJe@hAi@fAy@xAo@hAmDrFS\\qAnB{@tASZu@jAwCvEwBhDQVeC~D_F|HyDhGu@jA[d@kGzJYd@SZqB~CwEnHYd@qAnBYd@u@jA{DfGu@jAOT{PnX[d@_DdFYd@eC|Du@jAYd@[d@oApBoFvIcDfFoClEoClEkBvCkBvCYd@aDbFy@tAQVGLYd@Yd@[f@s@lAYh@_AbBmAnCCDUl@i@vAg@tAYfAe@jBq@bDk@pDQnAUtBSpCKhBKlC?TCx@Av@AhHAlP?hD@|G?hD?xH?vE?dA?dL?v@?bFAv@?x@?hD?pB?x@?v@?tI?x@?bF?v@?bF?x@?v@?pBAjT?x@?hD?x@?bF?nM?xOArb@?hD?bF?|GArb@?|RAx@?f@?xK?nL?fK?fM?x@?x`@?tIA~g@?rAA~L@dL@vY?v@?dV?v@?xP?x@@zG?fM?~O?nD?vA@zH?nE?pD?lK?ld@?df@?b[?tF?zG?x@?x@?tD@~Y?x@?f]?v@Bhm@?xG?nP"
                     },
                     "start_location" : {
                        "lat" : 50.0330202,
                        "lng" : -110.7073255
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "83 m",
                        "value" : 83
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 69
                     },
                     "end_location" : {
                        "lat" : 50.863097,
                        "lng" : -113.0054085
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAB-901 W\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_jmuH~jvpTfAAjAC"
                     },
                     "start_location" : {
                        "lat" : 50.863844,
                        "lng" : -113.0054361
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1626
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 299
                     },
                     "end_location" : {
                        "lat" : 50.8633537,
                        "lng" : -113.0285353
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kemuHxjvpT@hA?x@?v@@x@?hD?F?p@?v@?|G?pB?pB?v@?~B?j@?v@?x@?v@?pB?x@?pB?pB?v@?pB@pB?x@?v@?x@?v@?x@?N?~@?pAAv@?HCj@?JCf@Gt@I`AKtAC^Et@Ex@Cd@?RCj@?J?T@~H?B?t@?v@@x@?zG?zB?n@?v@@pB?x@@bF"
                     },
                     "start_location" : {
                        "lat" : 50.863097,
                        "lng" : -113.0054085
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1301
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 248
                     },
                     "end_location" : {
                        "lat" : 50.863395,
                        "lng" : -113.047074
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTownship Rd 222\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}fmuHj{zpT?zG?x@?v@?hD?x@?v@?bF?x@?|D?fK?x@?zG?x@?rI?`DApB?pB?x@AzGAjD?pBApB?v@?pBApB"
                     },
                     "start_location" : {
                        "lat" : 50.8633537,
                        "lng" : -113.0285353
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 321
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 50.8636575,
                        "lng" : -113.0515895
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCrowfoot St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eS Town Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ggmuHdo~pTAfEApB@pB?x@?pBGtA?@C^CTALGf@WjB"
                     },
                     "start_location" : {
                        "lat" : 50.863395,
                        "lng" : -113.047074
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 137
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 54
                     },
                     "end_location" : {
                        "lat" : 50.8624272,
                        "lng" : -113.0515816
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHaskayne Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-547\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{hmuHlk_qTb@?`@Ab@?b@?b@?bA?"
                     },
                     "start_location" : {
                        "lat" : 50.8636575,
                        "lng" : -113.0515895
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.9 km",
                        "value" : 4886
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 841
                     },
                     "end_location" : {
                        "lat" : 50.8631934,
                        "lng" : -113.1209164
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eamuHjk_qTGhDGlCZjEDjAH~Bg@zIqCbTK|C?zCI~Q?lB?`AF`XBtI?hHCjGC`H@lB?v@?|G?pB@|W@tY?hD@|W?pB@`O?tJKx@BnA?rC@fM?pB@pB?v@?pB?x@@hD?x@?v@@jTBxP@rR@tIBjT@~L"
                     },
                     "start_location" : {
                        "lat" : 50.8624272,
                        "lng" : -113.0515816
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1054
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 135
                     },
                     "end_location" : {
                        "lat" : 50.8544992,
                        "lng" : -113.1259497
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}emuHv|lqTjBAl@?X@b@?f@@XN@@^\\\\\\^\\TTbAdAz@~@rC|CnAtAdAfAzA|AZ\\@?`Al@^Tn@`@t@Nb@JnDt@pDt@`@JdDp@"
                     },
                     "start_location" : {
                        "lat" : 50.8631934,
                        "lng" : -113.1209164
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "19.1 km",
                        "value" : 19092
                     },
                     "duration" : {
                        "text" : "58 mins",
                        "value" : 3460
                     },
                     "end_location" : {
                        "lat" : 50.8930959,
                        "lng" : -113.3750803
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAB-901 W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sokuHd|mqTUfBKr@c@`Di@`EmAvHqApGkAtEe@~Aq@tBkAzCgAjCsBfEmCvEwLbS[f@kK`QsEtHyFjJwBnDkAjB}CtFyAlCcCfFg@hAuDxI_@z@Wj@sBxEsAtDa@hAsAdEU|@oCfL_CbJgAxCSl@_@~@}AbDQX{@vAeA~AiC`DoBfByCxByA|@}DrCqCvBuAjAaA`AoAvAcArAw@nAq@fAc@z@Yh@ABs@xA_@|@_@dAy@~Bq@~Bc@lB]`Bg@rCg@bDe@lCMbAa@`CKn@SbAi@nCWjAIXu@rCSl@e@`Bo@tBgCxGwB|F_BdE}A`E}@`CEFUl@i@rAq@hBMXq@lBm@~AQh@kA~C_@dAIPoAfD}@`CyAxDCHM^O`@CLs@zBIVqAnE{AdHu@xEGf@ABKt@MfAg@fEKnAGx@AJSfDI`BIdBCt@Cr@A|@GjBAzC?|DArO?n[?nK?pB?|G?x`@?x@?pB?zG?bF?|G?x@ApB?hD?|G?td@?pk@?pB?|G?v@?jT?dV?x@?fM?v@?dV?vG?tI?rR?n[?x@?tI?nk@?rRGlU?dD@tBGxO?pC?x@@jT?bF?pB?bF@|G?hD?xP@|G?bF?hD?jD@rb@?nt@@n[?tR?rb@?jD?|W?fM?pB?x@?v@?`O?xP?x@?zTElMEnKAv@AdFAv@E`OCzGApBCbFC|GElKApBC|G?pBElKAx@?~@UlIO`F"
                     },
                     "start_location" : {
                        "lat" : 50.8544992,
                        "lng" : -113.1259497
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "48 m",
                        "value" : 48
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 50.8926612,
                        "lng" : -113.3751208
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRange Rd 252\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{`suHfq~rTN@fAD"
                     },
                     "start_location" : {
                        "lat" : 50.8930959,
                        "lng" : -113.3750803
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "34.0 km",
                        "value" : 33994
                     },
                     "duration" : {
                        "text" : "1 hour 42 mins",
                        "value" : 6126
                     },
                     "end_location" : {
                        "lat" : 50.89237000000001,
                        "lng" : -113.8597724
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTownship Rd 224\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "c~ruHnq~rT@xP@tIBp[?v@@nKBjTD`_@@fM?vCCfN?l^?jD?h]?pR?z`@?|G@pk@@f]?pB@dV?tI@rR?lK?jD@bF?tr@?xP?lK?jD?lK?jD?v@?vI?bF?rE?|G?zGAnK?fM?tb@A`_@?tI?jT?bF?jD?~N?jT?|G?rb@?`O?bF?tI?fO?~N?tI?|G?xP?fM?`O?pR?rR?tTH|m@@fMB`O@fM@nK@zG?pBBxP@|GA`OApB?hDAxPAnKAhD?dFCn[AfMAvO@bM?nB@|G?jD?lK?vI?jT?zG?rR?`O?tI?n]CvYAtYAtIAvYAvYAfMAjK@hD?rR@pR@jTB~g@@fd@AfSAtI?nKGrkAAdV?zD?jT?xP?|G@~N?nK?tI?|G?lK?jT?|G@rG?nK?hD?nK?xP?bF@jD@`FBxPBnKFtYBtI?L?fIAzG?vIAtIAjT?hMApRAnK?nK@tIAxK?~N?jT@jm@@f]?lT?`H@nW?`O?~N@hM?bV?dV?hD@nK?|G?~L?bV?v`@?|Q@rR@`O?bF?tI?pR@rR?bF?tI?fM?lT?zG@fM?~HAnR?v\\?x@?dV?fM?v@?rR?v@?tI?pB?jD?`F@lD?T?`@?~C@|B?v@?bF"
                     },
                     "start_location" : {
                        "lat" : 50.8926612,
                        "lng" : -113.3751208
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.2 km",
                        "value" : 3238
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 593
                     },
                     "end_location" : {
                        "lat" : 50.9214866,
                        "lng" : -113.8598962
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e120 St SE\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "i|ruHpf}uTaC@{@?oC?I?aB?sD?cI?aB?mI@W?_E?c@?oC?iK?oC?c@?uB@wA?uB?aA?mADoCL_DEwEEeCEuB@cI@C?mD?mB?mC@gF?uB?qC@sEFeC?wE?mCAA?gCC}@AO?O@K?e@F"
                     },
                     "start_location" : {
                        "lat" : 50.89237000000001,
                        "lng" : -113.8597724
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.2 km",
                        "value" : 3239
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 585
                     },
                     "end_location" : {
                        "lat" : 50.921458,
                        "lng" : -113.906104
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e146 Ave SE\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "irxuHjg}uT?nD?~A@jD?pB?zC?`C?bC?~B?jDAbD?nF?z@?lY?jE?fD?B?fM?bJ?rA@`I?bB?jB?x@?hD?nJ?rE?jD?`H?jB?~I?|G?x@?bC?d@?pB@bF?x@?tI?pB?jD?hD@dC?bF?~C?pB?pB?p@?xB?pF?j@?hE"
                     },
                     "start_location" : {
                        "lat" : 50.9214866,
                        "lng" : -113.8598962
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.1 km",
                        "value" : 3053
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 529
                     },
                     "end_location" : {
                        "lat" : 50.9476316,
                        "lng" : -113.9119688
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e84 St SE\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "crxuHbhfvT]@Q@Q@WB]DWFA?[H[J[LYL]PQJUNUNIHWRWTOPQRWXCDSX_@f@[l@[l@Uh@ADSf@M^oAdDMZO\\S^Ub@SZ[b@W^WZWXYVWTYTYP[PULWLOFC@SH[HUFWF_@DUBS@a@Bm@@_@@sAAc@?eAAA@cD?O?yA?yA?c@?eA?e@?oC?mDAi@?yB?y@?q@?sD?G@aC?c@?oC?i@?]?oC?oCAeM?c@?m@?eC?{F?gB?g@?gA?{A?{B?c@?o@?_B?iB?g@@[?"
                     },
                     "start_location" : {
                        "lat" : 50.921458,
                        "lng" : -113.906104
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 165
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 50.9476354,
                        "lng" : -113.9143206
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e114 Ave SE\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uu}uHxlgvT?`G?pB?x@Af@"
                     },
                     "start_location" : {
                        "lat" : 50.9476316,
                        "lng" : -113.9119688
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 461
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 84
                     },
                     "end_location" : {
                        "lat" : 50.9476358,
                        "lng" : -113.9209077
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003e114 Ave SE\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "wu}uHn{gvT?`Q?xD?`J?fE"
                     },
                     "start_location" : {
                        "lat" : 50.9476354,
                        "lng" : -113.9143206
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.7 km",
                        "value" : 2698
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 491
                     },
                     "end_location" : {
                        "lat" : 50.950603,
                        "lng" : -113.9583021
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003e114 Ave SE\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "wu}uHtdivT?zC@hAClCCfAAx@Gz@Cl@El@ANI`AIv@OtAIt@Il@Q`AMn@Ox@CHKd@Op@A@Op@CHcAfDoCnJK^_@lA}@bDQn@WzAQvAKdAGhA?pBAbG?|H?v@AbF?jCBbGApA?rA?fA?tE?LAp@?rJ?T@H?`B?`C?l@?vBAfFApA@rB@hDBvDClC@|AAbF?x@AdECrB@hB@vE?xCA|@A`B?f@"
                     },
                     "start_location" : {
                        "lat" : 50.9476358,
                        "lng" : -113.9209077
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1770
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 368
                     },
                     "end_location" : {
                        "lat" : 50.9665103,
                        "lng" : -113.9586067
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e52 St SE S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gh~uHjnpvTK?e@@c@?gDZiCRuAB_@@oB@a@?O@w@AsD?A?mMAeAAGAaB@uC@mB@}KFwEB[?M?oB?A?I?sCAoCAqDCkB?"
                     },
                     "start_location" : {
                        "lat" : 50.950603,
                        "lng" : -113.9583021
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 324
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 90
                     },
                     "end_location" : {
                        "lat" : 50.9636287,
                        "lng" : -113.9588428
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "ukavHhppvTxAp@JAD?xCKR@lA@R@N?rDB"
                     },
                     "start_location" : {
                        "lat" : 50.9665103,
                        "lng" : -113.9586067
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "11.1 km",
                        "value" : 11134
                     },
                     "duration" : {
                        "text" : "33 mins",
                        "value" : 1969
                     },
                     "end_location" : {
                        "lat" : 51.0346313,
                        "lng" : -113.998257
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "uy`vHvqpvTI\\Ot@Kh@EVMx@W`BAHMhAK~@IdAI`AMdCKdDYdHKxCIfCUxGSjGAVGrAi@nPYnIGbBMpDInA?^Ab@MdEc@bMKzBEz@APE^Ed@AHCNKh@ANEf@CNEZKl@Kl@Ol@WdAW|@o@hBy@dBq@pAk@z@Y\\q@v@i@f@m@h@sDzCaAv@oC|BuBdBkEnDkA|@oAfA{BhB{ApA[Vc@\\cBrAgA~@eBvA{@j@{A|@cBt@i@RkA\\mB^y@L[BOAIASCMAg@?cAHc@B[Ba@BMDODYD[LE@SFi@Bq@DYAK?W@YBg@Bq@DUEUKSWIQI[CEEACBMTYf@A?EDE@CGGGeA_CoAkCUe@Wi@]u@gAkB_@k@_@g@QQc@c@[YGGc@[g@]g@WeAc@yCqAkDsAeE}AoBs@kBs@wAe@MGaC_A_Bk@}@Uk@K[E[Ei@AI?_@?i@Bm@FUDg@Hg@Pw@VCBc@Ro@^cAt@KJs@p@c@f@g@r@i@`AQXm@rAc@hA[dAQp@S`AMd@Ux@Sh@CDS\\SVOJWR_@Nc@N_AXuAb@E@]JKDm@^y@h@s@j@WTA@?@A??@ONEJe@hA_@~@Wj@CHi@lAUj@g@jAyAhDkBhEaA|B_@tA[vAQnAIdAItCIlDGpC?RGdCAb@ElCI`DGvC?d@MfFGdDCjACzA?TEpBCx@CtAErA?@Al@Cf@E`@G`@CHG^Qj@OZENCRADATCNIJA@EBO@IBE@]Tk@V_@Je@DWAI?y@QgA[_@K}DeAgCu@cA[eCu@a@Mi@QeAUg@Ki@Ba@DODQDI?UEGEKKEEMQAAUEcA@u@@}@@G?q@?c@AOBg@FWDUJqAVuA\\UFo@LUFe@F]@U@WFE@UFUBO?c@AE?mAM_BSIAiAWmAUiC_@mAOgAQq@Oe@OeBm@i@Wk@c@q@i@mB}AsDeDWSoCcCaDqCIG}DaEwD{De@i@oCiDa@m@sCeEq@gAS[c@y@CGq@cAe@s@M[MYQg@]g@MOYc@[e@IKAAOU[e@_@Ue@Y]OcAc@EA[MmBw@gCgAaBo@y@YyAk@y@[ICkAc@w@Qy@E{@?y@Hc@Hc@HkAd@aAh@}@t@}@z@iAlAc@p@"
                     },
                     "start_location" : {
                        "lat" : 50.9636287,
                        "lng" : -113.9588428
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 252
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 42
                     },
                     "end_location" : {
                        "lat" : 51.0361134,
                        "lng" : -114.0007336
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "munvHbhxvTDDBF@F@FETMToAlBYd@CBoAfBGH{AxC"
                     },
                     "start_location" : {
                        "lat" : 51.0346313,
                        "lng" : -113.998257
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1010
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 163
                     },
                     "end_location" : {
                        "lat" : 51.0372745,
                        "lng" : -114.0145223
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "u~nvHpwxvTb@tBLv@Jr@Jt@^bCB\\Dv@Fv@@J?F?d@?v@?x@@`B]tDCZ]dCKt@CLWjAS~@Qp@u@jDWzAW`DA@a@tGAB_@~Gm@`I?@?H"
                     },
                     "start_location" : {
                        "lat" : 51.0361134,
                        "lng" : -114.0007336
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 122
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 51.0369521,
                        "lng" : -114.0142543
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}eovHvm{vTD?@@@@?@@F?B?NANANAPAH?D?@?D@F@@@@D@BADCBC@CDI@IBU@QBKFw@Da@"
                     },
                     "start_location" : {
                        "lat" : 51.0372745,
                        "lng" : -114.0145223
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 99
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 51.037762,
                        "lng" : -114.0139823
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}covH`l{vTOOCMA?C?CA_@KCASECCCAA?AAECECICGAE?E@C@A@C?A@CBEF"
                     },
                     "start_location" : {
                        "lat" : 51.0369521,
                        "lng" : -114.0142543
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 340
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 65
                     },
                     "end_location" : {
                        "lat" : 51.0404016,
                        "lng" : -114.0126878
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_iovHjj{vTSOkA{@A?_@W_@W?Am@q@s@cAo@o@c@Y_@IcAS_@?ONQ\\IXGP"
                     },
                     "start_location" : {
                        "lat" : 51.037762,
                        "lng" : -114.0139823
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 264
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 51.0424291,
                        "lng" : -114.0137011
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oyovHhb{vTKA][Y[YMQB[\\S\\GZEJKD[D[Vg@n@k@v@UJK@QBYHA@"
                     },
                     "start_location" : {
                        "lat" : 51.0404016,
                        "lng" : -114.0126878
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 559
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 51.0430755,
                        "lng" : -114.0206277
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "efpvHrh{vTKLMz@[jAe@~AOn@WRUt@CL_@lBKhACdAA|@AXCTA@IRSd@Kb@IT?N@NCN@LB`@?REVA@BTJXBHd@tBHTFRHfA@PDVFPf@\\"
                     },
                     "start_location" : {
                        "lat" : 51.0424291,
                        "lng" : -114.0137011
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 332
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 60
                     },
                     "end_location" : {
                        "lat" : 51.0420812,
                        "lng" : -114.0250136
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gjpvH|s|vTTdBp@`FDXTjBDZTlAPdAHb@Jt@An@?b@H`@@HDHDBHD"
                     },
                     "start_location" : {
                        "lat" : 51.0430755,
                        "lng" : -114.0206277
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 124
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 51.0409975,
                        "lng" : -114.0251651
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "_dpvHho}vTHBD?tAAvA?D@FDJT"
                     },
                     "start_location" : {
                        "lat" : 51.0420812,
                        "lng" : -114.0250136
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1291
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 240
                     },
                     "end_location" : {
                        "lat" : 51.0444057,
                        "lng" : -114.0413505
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eInglewood Cove SE\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "g}ovHhp}vTLPBJDT@P@LAZAh@An@CvCAL@^EXKd@Ib@Ch@KnAObBObAKz@GLIPg@t@]d@s@f@EDONIN?@A?WT_@PGHAPCb@Aj@?J?@Cp@Kp@AHOp@AFQd@GLIb@GHCPCREN?@AT?RCZCNIb@K`@ENIVYfBOn@GVM\\ANAR?V@LAPQbACLMt@Ef@ItAGl@I\\K^e@|Bi@vCAFq@nEMr@M|@AR?V@NDNHTNb@@DJRX`@DHFT"
                     },
                     "start_location" : {
                        "lat" : 51.0409975,
                        "lng" : -114.0251651
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 100
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 51.0448319,
                        "lng" : -114.0426022
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eElbow River Traverse\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qrpvHlu`wT?BQj@Sp@Qx@Ox@Kb@"
                     },
                     "start_location" : {
                        "lat" : 51.0444057,
                        "lng" : -114.0413505
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "69 m",
                        "value" : 69
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 51.0454521,
                        "lng" : -114.0426823
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRiverWalk\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eupvHf}`wTMBW?c@@q@H"
                     },
                     "start_location" : {
                        "lat" : 51.0448319,
                        "lng" : -114.0426022
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 212
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 51.0464092,
                        "lng" : -114.0450141
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eRiverWalk\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "aypvHv}`wT[BOFGBSVGL?BEHENEJKPGNGLENAHAFGh@ERCRKb@ENCRCNANAN?LANAHCPDNEJ"
                     },
                     "start_location" : {
                        "lat" : 51.0454521,
                        "lng" : -114.0426823
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 334
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 51.0451253,
                        "lng" : -114.0483589
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eRiverWalk\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "a_qvHhlawTLTFJDLDNBPBN@P@P?T?RCPAJOx@CRAPC^?t@Bb@?@BZFXBN@JBFHJDDPRLNJHRPHBHDJDHBJDL@J@N@H?J?F@@@BB@F@H?L"
                     },
                     "start_location" : {
                        "lat" : 51.0464092,
                        "lng" : -114.0450141
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 112
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 51.0441168,
                        "lng" : -114.0483581
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e6 St SE\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "awpvHfabwThE?"
                     },
                     "start_location" : {
                        "lat" : 51.0451253,
                        "lng" : -114.0483589
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 690
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 156
                     },
                     "end_location" : {
                        "lat" : 51.0444719,
                        "lng" : -114.0581896
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e9 Ave SE\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wppvHfabwTMfBC\\Ev@Ab@A\\AZ?TC~DF^A^CnB?p@?r@AX?TArCAx@Ax@C~CIbFCdDAz@EnDCvA"
                     },
                     "start_location" : {
                        "lat" : 51.0441168,
                        "lng" : -114.0483581
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 100
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 51.045371,
                        "lng" : -114.058144
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMacleod Trail SE\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}rpvHt~cwTsDI"
                     },
                     "start_location" : {
                        "lat" : 51.0444719,
                        "lng" : -114.0581896
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 857
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 237
                     },
                     "end_location" : {
                        "lat" : 51.0457377,
                        "lng" : -114.0703887
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e8 Ave SE\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qxpvHj~cwT?PAhAAF?r@A|@Ax@Av@?@Ar@?DAl@?JAl@EdFAv@CpBAx@?TE|CItIMnN?VAx@Av@Ax@?x@Av@Ax@CpB"
                     },
                     "start_location" : {
                        "lat" : 51.045371,
                        "lng" : -114.058144
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 106
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 51.0447875,
                        "lng" : -114.0704204
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e3 St SW S\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eBarclay St SW S\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{zpvH|jfwTnA@N?R?f@@`@@"
                     },
                     "start_location" : {
                        "lat" : 51.0457377,
                        "lng" : -114.0703887
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 102
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 132
                     },
                     "end_location" : {
                        "lat" : 51.0448403,
                        "lng" : -114.0718702
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e9 Ave SW\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eWalk your bicycle\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}tpvHbkfwTCzBA^?^AN?@?N?H?XA^"
                     },
                     "start_location" : {
                        "lat" : 51.0447875,
                        "lng" : -114.0704204
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "106 km",
                  "value" : 106493
               },
               "duration" : {
                  "text" : "5 hours 36 mins",
                  "value" : 20136
               },
               "end_address" : "Canmore, AB, Canada",
               "end_location" : {
                  "lat" : 51.09002049999999,
                  "lng" : -115.3442285
               },
               "start_address" : "Calgary, AB, Canada",
               "start_location" : {
                  "lat" : 51.0448403,
                  "lng" : -114.0718702
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 140
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 127
                     },
                     "end_location" : {
                        "lat" : 51.04493590000001,
                        "lng" : -114.0738724
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e on \u003cb\u003e9 Ave SW\u003c/b\u003e toward \u003cb\u003e5 St SW\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eWalk your bicycle\u003c/div\u003e",
                     "polyline" : {
                        "points" : "gupvHdtfwTCpAO|H"
                     },
                     "start_location" : {
                        "lat" : 51.0448403,
                        "lng" : -114.0718702
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 105
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 42
                     },
                     "end_location" : {
                        "lat" : 51.0458693,
                        "lng" : -114.0738927
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e5 St SW\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{upvHt`gwT_ACQJgBC"
                     },
                     "start_location" : {
                        "lat" : 51.04493590000001,
                        "lng" : -114.0738724
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1035
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 232
                     },
                     "end_location" : {
                        "lat" : 51.0463013,
                        "lng" : -114.0886829
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e8 Ave SW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "u{pvHx`gwT?JAnBIhJExFGrFK`N?TQ~MMpNEpECrBEhD"
                     },
                     "start_location" : {
                        "lat" : 51.0458693,
                        "lng" : -114.0738927
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "63 m",
                        "value" : 63
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 35
                     },
                     "end_location" : {
                        "lat" : 51.04686419999999,
                        "lng" : -114.0886203
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e11 St SW\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k~pvHf}iwTi@CeAG"
                     },
                     "start_location" : {
                        "lat" : 51.0463013,
                        "lng" : -114.0886829
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 109
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 41
                     },
                     "end_location" : {
                        "lat" : 51.04687449999999,
                        "lng" : -114.0900258
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{aqvHz|iwTGdEAFAFADCDABCBCDXh@"
                     },
                     "start_location" : {
                        "lat" : 51.04686419999999,
                        "lng" : -114.0886203
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "90 m",
                        "value" : 90
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 51.0466008,
                        "lng" : -114.0911353
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}aqvHtejwTCnADr@BFFVL\\XZ"
                     },
                     "start_location" : {
                        "lat" : 51.04687449999999,
                        "lng" : -114.0900258
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "58 m",
                        "value" : 58
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 51.0466299,
                        "lng" : -114.091929
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "g`qvHrljwTKn@ALCV?NJv@"
                     },
                     "start_location" : {
                        "lat" : 51.0466008,
                        "lng" : -114.0911353
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "36 m",
                        "value" : 36
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 51.0468504,
                        "lng" : -114.0923011
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "m`qvHpqjwTM^GJEDCBKR"
                     },
                     "start_location" : {
                        "lat" : 51.0466299,
                        "lng" : -114.091929
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 181
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 33
                     },
                     "end_location" : {
                        "lat" : 51.0464182,
                        "lng" : -114.094498
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto the ramp",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "yaqvHzsjwTf@pAh@tA@@FRFPDPDRBP@P@R?P?RAPATA@ANELGLGHCB"
                     },
                     "start_location" : {
                        "lat" : 51.0468504,
                        "lng" : -114.0923011
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3 m",
                        "value" : 3
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 51.0464292,
                        "lng" : -114.0944514
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "c_qvHrakwTAI"
                     },
                     "start_location" : {
                        "lat" : 51.0464182,
                        "lng" : -114.094498
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "87 m",
                        "value" : 87
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 51.0471967,
                        "lng" : -114.0945907
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "e_qvHhakwTKH]Nc@BM?G?A?I?A?O?GAO?"
                     },
                     "start_location" : {
                        "lat" : 51.0464292,
                        "lng" : -114.0944514
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "39 m",
                        "value" : 39
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 6
                     },
                     "end_location" : {
                        "lat" : 51.0473004,
                        "lng" : -114.094061
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_dqvHdbkwT?G?OESCSCS?GAECG"
                     },
                     "start_location" : {
                        "lat" : 51.0471967,
                        "lng" : -114.0945907
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 639
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 126
                     },
                     "end_location" : {
                        "lat" : 51.0476178,
                        "lng" : -114.1031282
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sdqvHz~jwTCLETEZC`@?F?@AN?Z?L?@?tABpB@b@EdCA`@AVC|@Cr@ErACtAQ~HAREZEXAV?b@?`A@n@BrA@j@@TD^@RCtC?L"
                     },
                     "start_location" : {
                        "lat" : 51.0473004,
                        "lng" : -114.094061
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 868
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 153
                     },
                     "end_location" : {
                        "lat" : 51.04640690000001,
                        "lng" : -114.1147065
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "sfqvHpwlwTC\\G`@Ed@Ch@?l@?x@?r@Cb@Ej@Er@Iz@A`@?b@An@@f@AZ?LEn@Cr@Af@Ax@@lABp@?H@v@Fl@Hf@Lj@Pj@DXLl@Jp@PZTRTNPLJFJLDFFRHf@N`AHd@NdAFd@?HD\\?R?X?R?X@PBVDr@JzADf@BbA@h@?RA^?b@"
                     },
                     "start_location" : {
                        "lat" : 51.0476178,
                        "lng" : -114.1031282
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 154
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 51.0477141,
                        "lng" : -114.115434
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "a_qvH|_owTw@^eBv@a@Ra@PQHC@KD"
                     },
                     "start_location" : {
                        "lat" : 51.04640690000001,
                        "lng" : -114.1147065
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.2 km",
                        "value" : 4201
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 747
                     },
                     "end_location" : {
                        "lat" : 51.0678831,
                        "lng" : -114.1618659
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "egqvHldowTAH?L?TCh@G^AF?DBD[zA]pA?@W`@s@pAU`@w@~@c@b@QNmAb@{Af@{@ZcAd@YVc@\\kA|AmAfCKTu@nBKNk@pAu@bB[~@a@jAm@fB_AhCa@jAYjAA@k@dCCHq@lDo@jBUj@Qp@s@hEOjBALIn@_@bCy@bFa@zAYz@GTqBbLC^A`@Et@Ot@UfBCZC\\C~DChFCrFYvGKbAElA?l@GpAOzA]jEa@tESbBWfAo@`By@vAcAnAcDvDMNeHrG_@\\_G|FEF{IvI?@aC`CEHCFCL]j@uB`E_@r@_@f@_@j@Yh@i@|@A@GJO\\GP_@nA_@tAU~@St@Wz@EJEJ]`BIb@QdASv@AHKl@Ih@AT@bBAjA?r@ArAC~AIl@Gf@"
                     },
                     "start_location" : {
                        "lat" : 51.0477141,
                        "lng" : -114.115434
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 189
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 51.0683459,
                        "lng" : -114.164424
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMontgomery Blvd NW\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "geuvHtfxwTBH@LEl@YjCs@~FAHALENEB"
                     },
                     "start_location" : {
                        "lat" : 51.0678831,
                        "lng" : -114.1618659
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 774
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 199
                     },
                     "end_location" : {
                        "lat" : 51.0752965,
                        "lng" : -114.1644135
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHome Rd NW\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "ehuvHrvxwTCBEBC@_D@}CGW?cBCaDBO?{B?W?mAAc@?cA?W@mDAU?eA?gCC"
                     },
                     "start_location" : {
                        "lat" : 51.0683459,
                        "lng" : -114.164424
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1266
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 293
                     },
                     "end_location" : {
                        "lat" : 51.0833879,
                        "lng" : -114.173289
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBowness Rd NW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ssvvHpvxwTGb@Gd@Eb@Ab@A`@?R?F@Z@ZF`AFpABX@R@`@?^?\\AZATADCXEXKb@IXIVKTMTOT_B|B{AzBYd@qBdD}@hBW`@UZIJUXQPOLEDIHURi@`@u@j@A@_@Vq@b@OJ{@f@OHIDOFSFa@JMBK?q@?S?g@AaCCoD@cBCk@?s@@"
                     },
                     "start_location" : {
                        "lat" : 51.0752965,
                        "lng" : -114.1644135
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 km",
                        "value" : 1368
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 291
                     },
                     "end_location" : {
                        "lat" : 51.08901359999999,
                        "lng" : -114.1902318
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBowness Rd NW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "efxvH`nzwTOlCOtCEh@CRCREVETI^Ut@o@fBcDpJsAfEiAfDeDjJs@tBy@bCcAtCqDrKeAzCUjACHCRK~@CX?JCd@At@ArA?D?x@?HA`@A`@Ab@KxC"
                     },
                     "start_location" : {
                        "lat" : 51.0833879,
                        "lng" : -114.173289
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 986
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 169
                     },
                     "end_location" : {
                        "lat" : 51.0958811,
                        "lng" : -114.1989974
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003e70 St NW\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iiyvH|w}wTQFEBGDCDCBo@z@yAbBg@l@]^uBbCy@`AuBbCOLqB`CED]`@oDdE{AdBOTKNU`@Wf@c@`A]t@qAlC_BrDi@pAGJIHSN"
                     },
                     "start_location" : {
                        "lat" : 51.08901359999999,
                        "lng" : -114.1902318
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "74 m",
                        "value" : 74
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 51.09588859999999,
                        "lng" : -114.2000572
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003e48 Ave NW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gtzvHvn_xTAdA?lC"
                     },
                     "start_location" : {
                        "lat" : 51.0958811,
                        "lng" : -114.1989974
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 115
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 51.0969058,
                        "lng" : -114.2001166
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBow Green Crescent NW\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "itzvHju_xTsAAwAAI?E@GBCBCD"
                     },
                     "start_location" : {
                        "lat" : 51.09588859999999,
                        "lng" : -114.2000572
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "62 m",
                        "value" : 62
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 51.0971954,
                        "lng" : -114.1993733
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "uzzvHvu_xTQ]g@wB"
                     },
                     "start_location" : {
                        "lat" : 51.0969058,
                        "lng" : -114.2001166
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 157
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 51.0974765,
                        "lng" : -114.2013162
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "o|zvH`q_xTqAlC?DARAB?D?D?B?B@D@DFV@JBH@JDZ?D?D?@?B?D?X?F@D?F@Z"
                     },
                     "start_location" : {
                        "lat" : 51.0971954,
                        "lng" : -114.1993733
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 335
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 51.0995986,
                        "lng" : -114.2034919
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "g~zvHf}_xTmAXQDGBC?A@A@CBMH?@o@l@A@AB?@A@AB?@?B?@?B@@BF@D@D@B?D?B@D?Z@D?D?D?DAD?@?@?DCNMx@AFABADABCBABA@ORGFA@A@A?C@A?A@A?A@m@FC@A?C@A@A??@A??@A@ABCBGNELCBA@A@C@A@A@A@IBA?A?UAAAA?A??A_@S"
                     },
                     "start_location" : {
                        "lat" : 51.0974765,
                        "lng" : -114.2013162
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 589
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 129
                     },
                     "end_location" : {
                        "lat" : 51.0997661,
                        "lng" : -114.2104699
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ok{vHxj`xTc@nAm@bBADER@PDXHXBLBPF^?Bh@`FN`C@bA@nBAVAf@APAh@?L?p@?F@p@BXDZDJNNJDJNHP@DHX@R?FC^AP?DCXEHKDOCQAs@C"
                     },
                     "start_location" : {
                        "lat" : 51.0995986,
                        "lng" : -114.2034919
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 374
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 63
                     },
                     "end_location" : {
                        "lat" : 51.0999092,
                        "lng" : -114.2156655
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ql{vHlvaxTBR?F@D@D@FBDFFDDBDBF@D?D@H?lAAD?R?NARANEh@W|DA`@KxDIdBGbC?|A"
                     },
                     "start_location" : {
                        "lat" : 51.0997661,
                        "lng" : -114.2104699
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "91 m",
                        "value" : 91
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 51.1007252,
                        "lng" : -114.2157902
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mm{vH|vbxTcDV"
                     },
                     "start_location" : {
                        "lat" : 51.0999092,
                        "lng" : -114.2156655
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 403
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 65
                     },
                     "end_location" : {
                        "lat" : 51.0997877,
                        "lng" : -114.2205598
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qr{vHtwbxTNnFNlF@h@HfCHlC?\\A^EVAXDJLJzBR"
                     },
                     "start_location" : {
                        "lat" : 51.1007252,
                        "lng" : -114.2157902
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 km",
                        "value" : 2209
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 553
                     },
                     "end_location" : {
                        "lat" : 51.0962143,
                        "lng" : -114.2435224
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ul{vHnucxTEpIF|DBnCHpEDtBAh@M~AI^Sd@GNG`@CHIx@Gf@ALK^GVIf@Aj@A`@?pA?DDLFNDF\\`@RTFTLd@@p@?LCpB?FEn@?@Ej@AHC`@ABa@vAWp@AJAL@^@HBLHZ|@|@H@NALIBCj@g@HU\\_BHq@@CDGD?FBnAdAXN`Ah@JDrBz@X@@CJQBBL@RAD?JAH@HF@BBJJ\\@FJ^DPNp@Pp@H\\Z`@TDX[LGR@NDHN?@Dj@?J@x@?H?n@?RFt@Nb@JNBf@JXFZ?b@EZGd@UbAMPC@MPCJCRAT@`@JxA?\\?ZAHEp@An@Ad@@V?r@?~@Bb@Ft@HZX`ADb@?PGVOp@OpAOhAa@nACLM`@K\\I|@@t@JhA"
                     },
                     "start_location" : {
                        "lat" : 51.0997877,
                        "lng" : -114.2205598
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 299
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 51.0936876,
                        "lng" : -114.2435687
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eBow River Pathway\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ivzvH~dhxTr@ORAPBRNRLHFd@Hd@JPHDBB?DADAF?F@FDZXFDHFF@HBF?H?F?@?F?DAFCHENINMp@o@PO"
                     },
                     "start_location" : {
                        "lat" : 51.0962143,
                        "lng" : -114.2435224
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 228
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 41
                     },
                     "end_location" : {
                        "lat" : 51.092032,
                        "lng" : -114.2451248
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eValley Meadow Gardens NW\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qfzvHhehxTDHFHdAtAx@fAJLFLDJJXDTBHBLDFDDB@B@F@lB?"
                     },
                     "start_location" : {
                        "lat" : 51.0936876,
                        "lng" : -114.2435687
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 252
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 51.0921008,
                        "lng" : -114.2487072
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eValley Ridge Dr NW\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "e|yvH~nhxTCxDERCZAj@C~BAlAAx@@x@@^DtA"
                     },
                     "start_location" : {
                        "lat" : 51.092032,
                        "lng" : -114.2451248
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "62 m",
                        "value" : 62
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 9
                     },
                     "end_location" : {
                        "lat" : 51.0920038,
                        "lng" : -114.249578
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eValley Ridge Dr NW\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "s|yvHleixTHrAD~@BX"
                     },
                     "start_location" : {
                        "lat" : 51.0921008,
                        "lng" : -114.2487072
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 239
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 59
                     },
                     "end_location" : {
                        "lat" : 51.09001199999999,
                        "lng" : -114.2485508
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eValley Ridge Blvd NW\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_|yvHzjixTTINGDCf@OXE|@?tAw@\\_@TYFGLMJGBEBCFGFCL?NB"
                     },
                     "start_location" : {
                        "lat" : 51.0920038,
                        "lng" : -114.249578
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 485
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 132
                     },
                     "end_location" : {
                        "lat" : 51.0889129,
                        "lng" : -114.2549397
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto the \u003cb\u003eAlberta 1\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003e16 Ave NW\u003c/b\u003e ramp to \u003cb\u003eBanff\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "qoyvHldixT?h@@tABd@?@?@BLBLHPBFBDPZFJRXFLHLb@z@DFTl@HP@NBP?@Dx@@^DxAHdI@`B@x@@h@JdA@J"
                     },
                     "start_location" : {
                        "lat" : 51.09001199999999,
                        "lng" : -114.2485508
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "86.4 km",
                        "value" : 86440
                     },
                     "duration" : {
                        "text" : "4 hours 25 mins",
                        "value" : 15885
                     },
                     "end_location" : {
                        "lat" : 51.08974389999999,
                        "lng" : -115.3436692
                     },
                     "html_instructions" : "Merge onto \u003cb\u003e16 Ave NW\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-1 W\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Trans-Canada Hwy/\u003cwbr/\u003eAB-1 W\u003c/div\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "uhyvHjljxT?vDFzI@r@?DB`FL`G?VD~C@dBA~G?rG?rPAfV?pB@vI?pB?rB?v@?pB?rB?fD?tBAx@?v@A|QBhL@v@?`C@zCBxFB`N?lAAtC?jDAfA?zCAjD?x@AjD?f@?zDAbEAlEC~F?v@?x@AlAB|G?pB@|BH~K?n@AtM?dBAbE?X?xA?lG?~A@bCC~@?dA@~B?lF?p@?F?^?V?x@ArI@dGAlF?r@?D@hCAdP?VAjJ?|L?|H@t@?pD?lBAvK@`G?zB?J?bCAhH?Z?@?`K?xD?@?dF?rF?`F?`ABzW?Z?\\AnK?P?H?x@?x@?P?D?zA?N@\\?D?T?fA?vD?jD?|CAdF?`D@lJ@hM?D?`VAnGAfN?~F?N?jF?nD?xE?fA?bI?~E?zK?vI?lAApD?nD?@?zC@zH?rN?@?v@?dG?tD?L?x@?pB?xBAzF?lC?v@@b@AfC?x@?|@?`K@`D?dC?nF?pL?nO?J?d@?vC?fF?tC?pE?zB?fN?nD?fF?nC?dI?P?zH?zH?j@?|K?|@?V?vA?hA?bB?vB?bC?^?bA?tE?B?dF@b@?~D?tB?nB?N?hA?t@?n@?b@?zC?rB?|B?|B?`C?fA?vF?H?`P?zA?f@@|@@lB?J?`@@hA@X@n@BnABhADjABp@@ZBn@Dp@FjABr@BXDp@HhAHlAJfALvAPlBJjAJhAFn@Hr@Fn@Fp@JfAJjANbBTxBb@zEX~CPtB@JFf@PhCB`@@P@ZB\\D`AFnA?BDdADjA?VB^@l@@X@bA@b@B~B?r@?J?`A@p@AnA?|AAlA?F?R?x@AjAGlI?n@ClFC`FApBAr@CnKApBAx@?bBALAlD@V?Z?bBCvGAlBAr@?bBGdNArA?DAjC?hBAxAArDE|JA~CAlD?`@CvGCbHE~JAxEAbACbGEnOGdOA~B?@?x@ApBA`DCjEApBAxEA`CAvCAdB?lAAxCAjA?h@Av@?v@A~B?l@EnKA~@ClJEhMAfAAjDApEAdCC`FAlE?XAn@A`C?p@?@AvCCvFCpF?t@?@CbF?x@?v@EvHAhEA`CAbB?ZAvA?fBCxE?pAAjCAv@AzB?Z?^?TATC~F?nAAr@Ah@C|@Ar@Cp@Ez@IjAEv@Ip@KlAEf@AFMhAKr@WdBi@lCQ|@S|@a@vA[~@ENKZW|@CDSl@Sn@M`@O^M^EN]bA_@fAa@lAm@jBMb@[z@M^EJc@rAK\\}@lCUr@U~@[`As@dB?@Un@Sp@e@zAOh@[fAMj@On@WrAET_@~BGd@Ip@?@ShBGp@?DI~AItBEvBAtB@xA?J?F?FDpADjAJ`BHz@@J?JBRRfBVhCLfAPzADb@@PBLP`BNtANrATbC^zD^`DTnBTtBFl@JfAhAtKVlC^~ELtBN~CB`AD|@@t@FxCBxB@fC?`B?fBAjBGhCC|ACpAK`CKhCQdDEp@a@dFQlBSlB]rCu@`F]nBSfAMl@]|Aa@tBa@tBk@nCe@zB{@dE_B|HiBrIUfAaBfI}AnHYxAaAtEk@nCw@vDc@tBaArEc@tB]|AMl@Ml@WhA[zASbA]~Au@xDUhAYxAmAbGo@bDI^CJUdA_@dB[rAs@lDCNqAhGeA`Fi@nC[zAUlAYzAq@`Dq@dDs@bDm@vCQx@a@vB_ApEk@jC}@rEg@~BCHmAdGc@rBK`@YtA[zAw@zDc@rBc@rBs@fDc@tB[|AGXMl@UhAa@nBSdAgAjFc@rB[~A]~AQx@Qx@[|ASdAUdAUdAKl@WfAi@nC[|A[zAe@vBa@rB[zAc@rB[|A[~AA?a@rB]|AMn@Or@EN[~AOn@Ml@k@nCa@nBGZi@hCKh@WjA[zAUdAUdAcAxEUlAUhAGXIf@G^e@vBc@tBS`AUjA[xA_@zAUbAYdAW`Ac@vAa@vAc@vAc@vASp@gEvN_EbNgApDk@lBk@lB{@nCQn@aDtKK\\_@lA_A~CABy@nCQl@g@`BCHm@rBq@xBs@bCi@dBELY~@a@xAc@vAMb@Sr@i@hB}@vCIZSn@g@dBe@zAEP}@xC[dAQj@AByA|Em@rBOh@ADgCnISp@Ql@q@~BeErNoAdESn@Qn@ABg@dBg@~Ao@tBq@zBk@lBq@zBQl@A??@Ql@mDpLWx@gArD]hAADSr@K\\q@~B{AdF]fAcAhDsCvJ_@lAADCHSn@qBbHSn@Qp@u@~BKXwAzEMd@OX{@zCqClJy@jCABw@jCAD_@rAs@zBw@nCQj@[fAENw@`Ci@lBGVSj@Ql@Ql@Qj@KZENOh@c@vASr@uBfHQh@Ux@kA|D{@zCs@~BEN_@pAQn@Sp@i@jBy@pCMb@Wz@K^Ut@]lAWx@Ux@Od@CH[dAENWx@KXGT_AdDSn@Sp@_@nASn@Qn@g@`BM`@CLg@~Am@tBa@vAu@`CeCnIEN_@lAGRe@~Ae@`By@nC?@{C|JgBfGIVaBnFIVu@hCi@fBSn@a@pAY|@Sn@Qn@Yz@Qb@CHGPKXGNM\\O^ELSd@ADYp@KTQf@Uf@[r@g@fAa@t@EH_@t@KPk@bAGJcAhBILe@z@KRs@lAcAbBc@x@QZGLmAtBs@nAS^aBxC_AzAYd@QXa@t@Yf@QXYf@Yf@GJk@bAGJyBzDYf@Yf@mAvBEJeAjBYf@GHk@dAA@EFk@dAGHWf@S\\EHS\\A@w@vAS\\EHgAlBYf@A@CDS^A@CDUb@_CdEkArBuDvGABWb@A@s@nAw@xAk@hAUd@KR_@~@g@vAUv@CDOh@Sl@{@fDWnA{@xEOhAWzBUfCEj@?BEn@IfBG|ACzA?BClD@jB?PFvD^bN@FTrIHfC@x@Bv@DvABx@@v@Bx@Bv@FpBDjBFpBFpB@t@HnCDrADbB@LBz@HzBBh@?BDv@J`BNdCPvBFn@@HXlCRdBJt@Hv@Jx@F`@?B@JFd@J~@DZBPVjBZxBd@~CPrAN~@@JThBT`BJv@xApKp@vEj@zDp@rDb@nBf@zBDRf@nBz@lDf@pBH\\FT@@FXv@|CbA~DNr@H\\h@vBPp@Np@r@vCz@jDVfAb@jBz@jDr@tCj@bCDPnExQJ^DPH`@jErQ@F|AnGf@xBz@rDl@fDv@~EBJj@lEh@jFHr@Ft@N~ALpBFdABp@P`DDfAr@|QHlBN~DJ`CF`BFpAPtD@Rl@nPPzELfDd@xLHjBBb@TdHRhFNvDLnDj@rML~CL~CRbGR`FLpCNfELbDf@xMHnBRtEHnBDv@Bx@x@zTF~A@TV|GXhHNbELzCNxCNjCR`CFl@PtAR|AXvB\\`CR|A^jC\\vB?@R|Ap@tEBLj@~Dh@vDb@|C`AnGp@vEJt@Jv@ZrBNdAb@xCn@nEz@jGj@~D`@pCt@fFT~Ad@zCx@|FXrB\\dC^|CR`BJbALpA^jDT`CXlCVrCnB`S~@vJjApLn@pGtArNHv@p@dHhAjL`AxJP`Bv@fIXlCxAlOXlC|AdPpAxMf@fFp@tGhA`L^`EPdBh@hFhAjLXtCTxBLxAHv@Fv@P`BP|A@Nd@zEd@zEHz@~AbP\\dDFv@n@rGNtAd@zEr@lHzAnObB|PpCzX@Nd@xEj@tFv@fI?@JbAXxBRxAVzAVvALp@XlAT|@Pp@^nARn@z@xCdApD|@|CvBnHpAlEd@`Bx@nCv@pCdCrId@|ANr@p@bCn@xBvCbKRp@Tv@Pj@Rn@DJLb@Rn@Pl@Rp@f@|A\\hAFPJ\\|D~M~CpKxBtHt@dCV|@`AdDbAnDpDbMbBvFhA~DjCzI`@pAbCjIvFrRBHPn@pB`H~AtFxDrM~O|i@lAbE|B`IlBrGJZn@zBd@`BrAnEjA~D?@`Urv@jDnLV|@|@~ChBdGdDdLxA`FPl@?@Nh@jBlGn@zBfAtDBF~@bDL`@Rp@pAlEzBvHHXLb@~GtUDLL`@dDfLDL~ApF`@rAv@jCPh@Tn@FRN`@h@rA`@x@@Df@dA^r@^j@Zf@\\h@l@v@`@h@X^`@b@`@b@r@n@@@j@f@n@d@DBZR^TRLPJLHRJVLd@R`@PD@?@\\JRHn@P`@J@@D?r@NvBVD@\\DhBVVDzAPTDD?\\FB?^FjANPB`@FPBNBlEl@NBJ@f@FdBTt@Nf@HJ@\\DpATn@LRDt@PbAVlBx@ZNf@Xv@f@hA|@dAz@PP`@\\Z^Z^\\`@VXX^^j@LRRZr@nAR^h@hADJ^x@Pb@Pd@Tl@Tl@d@xA`@zALb@jArEdAdEPp@Pp@Pl@Pp@Np@Pp@Pp@Pp@Pp@Np@b@bBRt@Nl@Pn@Pp@dAfEHVFXPn@ZnA|@hDBNbAtDxAvF`AxDT|@pA|EXjAv@vCr@pCHZXfAnB|H\\nAnA`FhBfHl@zBz@bDl@dCJb@XhAX|ARnAZnBP|AN~AL~ALhBDjABt@FxB@nB?pAAlBEpBIlBOzCKhBMpBC^i@hJIzA_@hH?B]jGALKpBW~EMpBEv@MnBShDEv@[~EEv@GbAe@~GKnAMxAE^E`@OjAUdBYpBKr@Iv@SxAMhAIt@UlBUjBCXE\\a@nCS|AKv@In@Gh@Eb@AL?FI|@EhAC~@AZ?l@Aj@@fA?\\DpADx@?FFn@Fr@NvAJn@F\\BNX|A\\~A?Bx@bDJ^Lb@HXL`@N`@DLNZJXT`@NZNXp@nA`@t@LVR\\BFLTDHLRT^HNFHBFLRJP\\n@NZFLt@jBZv@Z|@L\\tCbIvBdGZz@N^DLL`@dC`HTl@|AnEHVr@tBr@rBf@vAhBbFb@`A^|@DHTf@@@P^DHTd@Xh@V`@Zj@Xb@Xb@DDNTV\\\\b@`@h@\\`@FHd@h@b@`@d@f@d@d@^Zd@^`@\\n@d@^VhAt@DDpBpAtA`ATPRNJHTR^^^^TXJLX\\BBDHV\\Xb@R\\BD\\n@Zn@\\v@Rf@Pd@L^BJNb@BJPn@Ll@Ld@Jh@BNFXTnALr@DVd@pCHh@v@pEvAjIhBvK^zBVvAh@|Cv@pEh@|CVvAh@dDBHLr@Nx@Lt@Nr@Jn@Nr@Lr@Nt@Lr@DTVpA`@tBF`@DPLt@PdAFb@Jt@@DVvBL|A@BJnAHpAB\\BXDv@LpBDh@TtDBf@ZdFt@bLBb@XtEF`AP`CH~ADv@Fv@?JDj@NnBDh@L|BFv@@XPnCf@nIDv@`@xGB^LfCDx@Dv@BR@b@@HBr@@r@?H?fAA^?LCn@Cd@?LAXI~@Gx@Ir@Kr@Ox@Mp@On@Qp@GRQn@cBpEGRk@zAk@zASl@MXGP]z@M\\EHQd@MTOXS\\CFSXABOPMPCB_@d@UTMJWTwDzCYVEB}@v@_Av@OL]\\MNWVEDUVGHQT[`@INGHSZYd@GJ_@v@_@x@CDSf@GNK\\Un@Sp@Sr@Ol@S|@SfAKl@CXIj@AH?@Ef@MfAEn@El@AL?@Ch@?LCf@Ab@An@An@Ar@?B@p@?F?^@j@@^@XB~@Dp@Dp@Fp@Dh@Fd@Fj@Jt@Ff@Lv@Jh@Jj@@FXdB@BLr@XdB?BLr@?@ZfBLt@Lr@BJ`BjJlB~KjBnKx@bF@Db@~BHb@Lt@Jl@DVFX?@Lr@Jh@BJJl@?BFVDX@@DZFZPt@Ln@Jb@TbAHZFVPt@J^Ld@Rr@Nh@J`@L`@Rt@HVJXPh@?@HVHT@DL^JVn@fB\\`A@BJXFN@DRj@Nb@L\\JZN`@L\\N`@Rf@Pf@DJPd@Rj@@BRl@Tl@DNHRL\\JZJTHTBHBHN`@Pf@Zx@Pf@FPFN@DL^JRPf@Pf@BDNb@@BL\\Pd@p@fBDHBHRh@HTHN@DLZHRNd@Xt@Tj@Tj@Nb@LZb@fAN^BDVr@Vn@Rh@Rf@^`APb@JTBHBFPd@HRN^JZPf@Pj@Rh@\\hAj@dBPd@l@fBVz@Rj@Pd@JXHTN`@n@bBNb@DJ|@bCBFDHHTBHVp@L^N`@Nd@DLDNFPDLRt@Nn@Pt@RbABFTlABP@@Jn@BTDTDTD^BJ?DJp@Hn@?BFd@LlAFn@?@@JFf@Dr@BVB^?D@TBt@Bt@Bb@@x@@T@jABrADpEFvF@v@@p@?FBv@Bz@DnBDpBFpBDpBBx@@v@Bx@JxEJbEHjC@p@?NDvABl@DdAD~@@NBx@Dv@Dz@FjAJnBJrBFpAF|AFxALrC?@@PRzE?FDfA@\\@^J~CBbADpAFnBDpBJtEBhBBlA@d@@b@Bn@@r@@b@@X?ZBf@@d@@`@@X@n@@bA?l@?p@?n@At@Af@?j@ATA\\AVA\\Cp@Ex@C`@?FKrAKvAIr@E^MbAIn@QhAQbAUpAEXG`@GZADKf@Id@Kl@aAfGu@rDUnAe@pCCJk@dDa@dCSdAADYvA_@lB_@|AYhAIXOf@W`Ae@bBe@tAaAtCQl@EHq@vBEHSn@O`@w@bCc@pAk@dBw@|Bm@fBu@|BM^ELOd@Qf@Up@Wv@ABM`@ABc@rACDSj@Sp@ELOb@GR_@fA_@hAQl@ITEJOb@K\\GNm@hBe@rACHM^Qj@[|@Qj@Wt@ADSl@_AlCmAtDa@lAi@`BEJ}@nCu@|B?@EJSl@CFOf@q@nBaAzCgD|Ju@|BCHQh@Qf@Ob@ELK\\M^yAjEe@vAqBdGeA`DWv@Od@MZg@|A}@jCe@vAUr@i@|Ag@|A}@jCaAxCO`@g@|AcAzCM`@u@vBYx@_@`AO^Wj@MZo@rAm@jAc@v@GL_@n@[h@e@r@]b@ILm@x@ORu@z@g@h@Y\\k@h@YVa@`@_@Xk@`@c@\\QLcC`Bk@^yA`AkCfBSLaC`BwClBqH`FSNk`@vWSLaAn@q@d@o@b@cG~Da@VcEnCcAp@GDa@XoBpAOHQL{@j@aBhAmAv@UPe@Ze@ZmAv@i@`@[RWP]TWP[Ry@h@sClB_@Vk@^sA~@{BzAqCjBsA|@w@h@w@f@cEnC_An@_@Va@V?@_@VWNGDcC~A_@V]VsA~@g@^k@`@[Va@^kAbAk@h@YZUTo@n@kApAs@z@qA`B{@hAqCtD"
                     },
                     "start_location" : {
                        "lat" : 51.0889129,
                        "lng" : -114.2549397
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 872
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 143
                     },
                     "end_location" : {
                        "lat" : 51.0961016,
                        "lng" : -115.3478163
                     },
                     "html_instructions" : "Take exit \u003cb\u003e89\u003c/b\u003e toward \u003cb\u003eCanmore Town Centre\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "{myvH|`__UK?EBCBIHQTo@v@k@r@w@dAOP_@`@k@p@y@~@CDu@z@]`@KLYZa@d@OPA@[^c@d@SV]^a@b@y@z@[Zw@z@GF]`@[\\Y\\WXa@b@WTEFSLIFODKBM?OAOEOIMKOQOYKSM[Q_@MYO]?AOc@Si@"
                     },
                     "start_location" : {
                        "lat" : 51.08974389999999,
                        "lng" : -115.3436692
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 721
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 169
                     },
                     "end_location" : {
                        "lat" : 51.0905201,
                        "lng" : -115.3431356
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePalliser Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "suzvHzz__U`@k@\\e@Zc@\\c@Xa@BC`@e@RQLMRK^Q^QZOnCa@PGh@I\\EHAVGhBe@ZOh@a@b@a@JIBCj@s@Xe@T_@t@uA@AHMr@mANWT]f@q@"
                     },
                     "start_location" : {
                        "lat" : 51.0961016,
                        "lng" : -115.3478163
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 95
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 35
                     },
                     "end_location" : {
                        "lat" : 51.09002049999999,
                        "lng" : -115.3442285
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBenchlands Trail\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wryvHr}~~TTz@Tn@Xz@Xh@?@BD"
                     },
                     "start_location" : {
                        "lat" : 51.0905201,
                        "lng" : -115.3431356
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "25.0 km",
                  "value" : 24950
               },
               "duration" : {
                  "text" : "1 hour 24 mins",
                  "value" : 5018
               },
               "end_address" : "Banff, AB, Canada",
               "end_location" : {
                  "lat" : 51.178406,
                  "lng" : -115.5708028
               },
               "start_address" : "Canmore, AB, Canada",
               "start_location" : {
                  "lat" : 51.09002049999999,
                  "lng" : -115.3442285
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 319
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 79
                     },
                     "end_location" : {
                        "lat" : 51.08833,
                        "lng" : -115.347899
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e on \u003cb\u003eBenchlands Trail\u003c/b\u003e toward \u003cb\u003eBow Valley Trail\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-1A W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "soyvHld__UVd@DHP\\JVVx@J\\b@|Al@jBPl@`@`ATl@j@zAh@zA"
                     },
                     "start_location" : {
                        "lat" : 51.09002049999999,
                        "lng" : -115.3442285
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2308
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 417
                     },
                     "end_location" : {
                        "lat" : 51.105163,
                        "lng" : -115.3669669
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBow Valley Trail\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAB-1A W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "aeyvHj{__U_@b@A@[`@GFwA~Aa@b@gBvB]b@kBnBQR[\\sB`Ck@p@cCpCmBvB{HrIaG|GsC`DWZ]^STg@j@i@h@S\\CBg@l@a@^iA~@OJu@n@e@d@oBdBuBpBeE`EaC~BkCbCyA~Au@bAo@jAWd@ABsBxEa@vA_@bAYh@_@l@}@dAkBzB"
                     },
                     "start_location" : {
                        "lat" : 51.08833,
                        "lng" : -115.347899
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.5 km",
                        "value" : 4470
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 877
                     },
                     "end_location" : {
                        "lat" : 51.13388,
                        "lng" : -115.4073681
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRocky Mountain Legacy Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "gn|vHprc_UGRQj@ABMTk@n@[^]`@uBbCy@`A]`@]^sBbC{@bAyBrBYXE@WPa@NI?c@Ba@@iAEQAu@Gu@EQ@m@@u@LEB_@V{@~@OP{C|D[b@uAfB]`@sAfBy@dA[b@[`@oClDABY^]`@w@bASXe@j@[`@}@fAgDlE[`@[b@]`@c@l@UPSNM@y@Dg@LGF]^]^kCtCsC|DmCpD[b@?@qAjBiCvD}EdHYb@[d@eDzEw@jAu@jAWd@[d@Yf@GHi@bBq@|BSn@}@zCKh@Kl@IbACRGXi@jAEJKXETCJEj@G`AQ`B?@Kt@OdA_@fBWvAAFOxAWrDEl@UvBCVG\\CVETUv@Sl@Sp@q@dCEPCj@EPS`@EJ]j@EHAD?D@`@B`@?LCLCLCF[t@SZs@dAa@b@CDCD]rAu@tCIZAB[d@ABQ~@Op@CLOb@Oh@CD{@x@?@e@x@e@l@EDwAbBu@x@o@v@c@l@o@fA]p@EDo@n@q@X]NC@a@HA?iA@"
                     },
                     "start_location" : {
                        "lat" : 51.105163,
                        "lng" : -115.3669669
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "13.0 km",
                        "value" : 13002
                     },
                     "duration" : {
                        "text" : "43 mins",
                        "value" : 2605
                     },
                     "end_location" : {
                        "lat" : 51.2064064,
                        "lng" : -115.5372841
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eBanff Legacy Trail\u003c/b\u003e",
                     "polyline" : {
                        "points" : "wabwH`ok_UEBSDE@WHWVON_@\\]Z{AvA{BtB}@x@A@y@|@{@~@SRyBxCcArAQVu@hAc@r@aBhC[d@_@j@}AhC[h@Sf@A@Ur@IZSv@AH?H?H@F?F?F@D?FAFAFCDEFS`@EBIBWP?@URw@lAw@xAmAxB_AfBKNcBjCGJs@nAeAhBc@r@Yd@cC`E_DhFs@lAiDxFOVWf@_CjEs@nAq@pAeB`D_CjEq@pAeB`DYh@Yb@kBxCYd@[d@oApBkBxC[f@[\\wBbC[^]^{@`A{@~@y@`AwB`C]^[`@SRiAdA{BrB]\\_@Z]\\}AvAyDnD]Z{BtB_@\\]Z_@\\}@x@]\\YV{@lA[b@y@fAoBnC[b@sAjB[b@sAhBk@v@KRWh@Wh@iAzBYh@iA|BsCzFWh@q@rAc@~@KTsAxD_AjCSl@k@zASn@Ul@Sl@Ul@Sl@Ul@c@nACLsBdJ_@dBo@xCQp@_@dB_@dBI`@CRQlBOnBk@tGOnBQlBShDEv@Ev@OhCMtAa@|EUdCG^cArFGLsAlDEDYd@iBxCq@fA{AfBy@~@EFoC|Bg@\\cDxB_BhAa@Vi@^kCtC[`@{@~@u@x@_AbBi@fAWh@_BfDiA~BgDfH}BxEk@lAwBtEuBtEo@tAo@tAwBtEuDdIINkAvBs@nAMVyDtDKH]X}BlB_@Z}ChC}ApA}ChC}ApA}DdD}ApA}BlB}BlB{GvF}ChC}BlB}BlBOLmDtC}BjB{HnG_At@[VoChD{AdBSVoBzDg@bA{AjEUl@M^{AjGCL_AzFmA~Hu@tEGZ{@dJO~AWvDc@xGEl@KzBEv@OhD]pH[jEOrBGr@Gv@OlB]fB_@fBG\\oA`DeAxBYn@_DzEuAfBoChDWZ]r@o@rAGLK^w@rCQp@Qp@e@`Bc@`BUx@w@fCg@|ASn@aD~Jc@~ASn@Mb@[xBW|AI~BATAb@CzCDfAFzAb@fCLh@Hb@Zz@^|@nBfB\\\\^Z|@x@?@`@Nh@Td@`@"
                     },
                     "start_location" : {
                        "lat" : 51.13388,
                        "lng" : -115.4073681
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.6 km",
                        "value" : 2622
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 545
                     },
                     "end_location" : {
                        "lat" : 51.18664930000001,
                        "lng" : -115.5534928
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eBanff Ave\u003c/b\u003e",
                     "polyline" : {
                        "points" : "agpwH~zd`UrDDb@?b@?vCBfA?^@F?^?ZAB?B?^?`@?rA?lAAv@AL?P?P?b@?`@AT?L?xEH`AHB@|Cf@v@XxA`@pAn@FBXNbAh@x@b@PJtBjB@@@@ZXPP\\\\VZn@t@@@NRv@bAHNJNv@nA@@HNXf@d@x@p@rAJVTh@bAhC?@L\\\\z@?@~@fCjBdFjA|CTj@LZHPLZFN`@z@^p@Xf@HPJPBBHLPTv@fAZb@ZV\\X~@v@zCfCt@v@FDFHjBxB\\`@Z`@TZ^f@pAvB~@|Ab@x@tAxC"
                     },
                     "start_location" : {
                        "lat" : 51.2064064,
                        "lng" : -115.5372841
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7 m",
                        "value" : 7
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 2
                     },
                     "end_location" : {
                        "lat" : 51.1867005,
                        "lng" : -115.5535515
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBanff Ave\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qklwHh`h`UIJ"
                     },
                     "start_location" : {
                        "lat" : 51.18664930000001,
                        "lng" : -115.5534928
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 234
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 106
                     },
                     "end_location" : {
                        "lat" : 51.185454,
                        "lng" : -115.556246
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBanff Ave\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{klwHt`h`UVn@rA|CRd@`AzC\\jAX~@"
                     },
                     "start_location" : {
                        "lat" : 51.1867005,
                        "lng" : -115.5535515
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "83 m",
                        "value" : 83
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 51.186108,
                        "lng" : -115.556812
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMarmot Crescent\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "adlwHpqh`UcCnB"
                     },
                     "start_location" : {
                        "lat" : 51.185454,
                        "lng" : -115.556246
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1017
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 163
                     },
                     "end_location" : {
                        "lat" : 51.1834171,
                        "lng" : -115.5698678
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCougar St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ehlwH`uh`UPt@t@`DXjAV~@l@`CnAhFt@|CxB~In@lCXxAHv@Br@?dAE`AGpAQpCCv@@`A@xBDv@EzAOfAWbA?N?LDNJRnAnA"
                     },
                     "start_location" : {
                        "lat" : 51.186108,
                        "lng" : -115.556812
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 607
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 99
                     },
                     "end_location" : {
                        "lat" : 51.1787814,
                        "lng" : -115.5744579
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eSquirrel St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "kwkwHtfk`UxCtCxCtC|A|A\\\\\\\\|@|@\\\\\\\\\\\\xHvH"
                     },
                     "start_location" : {
                        "lat" : 51.1834171,
                        "lng" : -115.5698678
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "39 m",
                        "value" : 39
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 39
                     },
                     "end_location" : {
                        "lat" : 51.1784525,
                        "lng" : -115.5742586
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLynx St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kzjwHjcl`U`Ag@"
                     },
                     "start_location" : {
                        "lat" : 51.1787814,
                        "lng" : -115.5744579
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 242
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 71
                     },
                     "end_location" : {
                        "lat" : 51.178406,
                        "lng" : -115.5708028
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eWolf St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ixjwHbbl`UEgAGiDBa@@y@Bw@JmH"
                     },
                     "start_location" : {
                        "lat" : 51.1784525,
                        "lng" : -115.5742586
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "{_miG~nocNr|Mhl`@nra@ht\\p}Wjhb@b|Efj[~hQv}e@`gR|a`@fnMrvoAwxBzvn@nmBdq[r|E~li@__CldLjcGdsLjxLzuQkrAtyUjMpkx@a^~_i@|_CbgLboQrNdcN|VbiLpoFbz@`xOunFntFaqEsQmrSicAu`Taj@}dShvD}eJluZqwKpaR}tP`}E}gFj{kAdmArjk@qaGz_OcpUj`PckHpgf@glFrlGepKiBwcIvbIkv@hlAgoEtuA{u@tup@qxKnhs@cbO|ad@qdIhxFy~KanCeu\\uhByvUudB_lYtbGwkJlaDuaSmvAmrTz`HymLmmDi~Hl{Ecs[`eBk{[}fIyra@agCyjM{uLu~NdoEcyb@ceIazPcfL{nGqbB_nJp~JcaOpsb@qiAwtBq}Jg_RecA~}LibAjrGycC~mJoy@`aIccId~PwgThjm@ujEbmv@qj@ro`AtkCj~_@zwO~}Ir_Efwf@xaFzkNrbDz{{AghDprg@hmWbyOjlHtbA|qApcPp{En}x@iuH~h}@sjBd|N}{FjdWolO~_a@ycT~v`A_wDn~TaoJ~iEscLp}XozTbuvA{`Cv`e@}`LzwTmkLtax@udG|n{@uiFrlfAc|Rv`c@xy@nod@xzI~_`@wiAbw`BmuGhjx@qpUrej@kaXvsfA{x@l~`@jG`mf@kzMxdVg`Lbug@weFbbf@c~HvfN_lNnpFy_MbrO_kS|}y@mfDjdZqsPd{H{gb@vuUwvMhxTssVdnB}tCnbMopDtlRqj[ngAith@~}Rc_Z|d@{sUzeDuqEr|JyuPxBgxPxKyXxrOgmDrcWo`Tz|eAcmYfx[{fGr}w@yyFvp^sjKrwFkrWrjg@cx\\xza@s|Kr{h@}x^|w[csWp`f@gnQdfx@o_BrzJzYpjHsn@r|TqkQr`mDa@jikBdoKpmt@tz@hfxArwFxuvBrbQhjyAcc@de]ueOnmd@weRxiv@exV`x{@smMxg{@qeA`xy@hsD`dUhuDxf~@Y`|u@o@jcsA~@vtzA_uKhos@_zNxl_@yiJdz~@HpjmAcwIlvvAqvEfsYs|LpodAqxAp_nAlS`mnB|uIvtc@~~E`zv@nrQpgbBjwQjvkAvwRjay@fzFjsjAdaPje{CjfExazAyrKxzaBgl]zdz@{ngAbb`Decf@jadBooLpi\\wvEr|[g@`xf@}sDlkk@yuDzth@h@~uuBujJ|~Ok{Od}MubAzxPgbIznShcAxpk@_gHlbs@cwBdrQdgKxoo@lhFjj\\swEhb[{gPddY]jeQ"
         },
         "summary" : "US-2 W",
         "warnings" : [
            "Cycling directions are in beta. Use caution – This route may contain streets that aren't suitable for cycling."
         ],
         "waypoint_order" : [ 0, 2, 1 ]
      }
   ],
   "status" : "OK"
}
{% endraw %}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
