# SODA2 Interface for [Koop](https://github.com/koopjs/koop)
This plugin makes it possible to interact with Koop's [many providers](https://github.com/koopjs/koopjs.github.io/blob/master/docs/providers.md)
using a [SODA2 API](http://dev.socrata.com/docs/queries.html).

**Note:** This plugin only works when used with these versions of [koop](https://github.com/timwis/koop) and [koop-ckan](https://github.com/timwis/koop-ckan). They've been submitted as pull requests, so this plugin is more of a proof of concept until they're merged.

# Installation
```bash
npm install koop-soda
```

# Registering the plugin
To use this plugin in your koop instance, register it the same way you'd register providers as demonstrated in
[koop's documentation](https://github.com/koopjs/koop#registering-providers)

```javascript
koop.register(soda);
```

# Usage
Append `/soda` to your normal query to interact with the resource with an OData API, for instance:

`http://localhost:1337/ckan/phl/heart-healthy-screening-sites/soda?$where=ZIP_CODE%20=%2019146`

will produce an SODA2 JSON object like:

```javascript
[
    {
        _id: 4,
        ﻿X: -75.17548258333102,
        Y: 39.94122652163324,
        OBJECTID: 4,
        DATE_: "2015-04-06T00:00:00",
        TIME: "10:30 AM - 12 PM",
        ADDRESS: "1941 Christian Street  ",
        LOCATION: null,
        CITY: "Philadelphia",
        STATE: "PA",
        ZIP_CODE: 19146,
        SCREENING_TYPE: "Blood Pressure Only",
        CONTACT_INFORMATION: "Contact Jefferson University Hospital - Blood Pressure Plus",
        PHONE_NUMBER: "215-955-3817",
        GlobalID: "58db6903-fda9-4d71-a255-7ab111c5ca0a",
        geometry: {
            type: "Point",
            coordinates: [
                -75.17548258333102,
                39.94122652163324
            ]
        }
    }
]
```

# Supported
* `$where=` with all operators, and, or

# Unsupported
* `$select=` (requires more significant changes to koop codebase)
* `$top=` (requires more significant changes to koop codebase)
* `$skip=` (requires more significant changes to koop codebase)
* Functions still need to be translated to Esri versions
* Other unsupported items listed on [node-soda2-parser](https://github.com/timwis/node-soda2-parser#unsupported)