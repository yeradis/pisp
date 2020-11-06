(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{439:function(t,v,_){"use strict";_.r(v);var d=_(43),e=Object(d.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"mojaloop-pisp-roles"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mojaloop-pisp-roles"}},[t._v("#")]),t._v(" Mojaloop/PISP Roles")]),t._v(" "),_("p",[t._v("A summary of Mojaloop FSPIOP API Endpoints and Roles as they stand today.")]),t._v(" "),_("h2",{attrs:{id:"roles"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[t._v("#")]),t._v(" Roles")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("DFSP")]),t._v(" "),_("ul",[_("li",[t._v("fund-holding participant")]),t._v(" "),_("li",[t._v("has clearing and settlement functions")]),t._v(" "),_("li",[t._v("allows PISPs to initiate transfers on behalf of their users")])])]),t._v(" "),_("li",[_("p",[t._v("PISP")]),t._v(" "),_("ul",[_("li",[t._v("non-fund holding participant (and therefore no clearing or settlements as well)")]),t._v(" "),_("li",[t._v("initiates transfers on user's behalf")]),t._v(" "),_("li",[t._v("assumes delegated permissions "),_("em",[t._v("from")]),t._v(" user")])])])]),t._v(" "),_("h2",{attrs:{id:"api-calls"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#api-calls"}},[t._v("#")]),t._v(" API Calls:")]),t._v(" "),_("ul",[_("li",[t._v("Existing calls are taken from "),_("a",{attrs:{href:"https://github.com/mojaloop/mojaloop-specification/blob/master/documents/API%20Definition%20v1.0.md#611-supported-api-services",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mojaloop API Spec"),_("OutboundLink")],1)]),t._v(" "),_("li",[t._v("New calls are detailed either in the "),_("RouterLink",{attrs:{to:"/"}},[t._v("updated pisp flows")]),t._v(", or "),_("a",{attrs:{href:"https://github.com/mojaloop/mojaloop-specification/issues/59",target:"_blank",rel:"noopener noreferrer"}},[t._v("#59-mojaloop-specification"),_("OutboundLink")],1)],1)]),t._v(" "),_("h2",{attrs:{id:"api-calls-outbound-from-participant-switch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#api-calls-outbound-from-participant-switch"}},[t._v("#")]),t._v(" API Calls - Outbound (From Participant -> Switch)")]),t._v(" "),_("h3",{attrs:{id:"fspiop-api-dfsp-switch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fspiop-api-dfsp-switch"}},[t._v("#")]),t._v(" FSPIOP-API (DFSP -> Switch)")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[_("code",[t._v("VERB")])]),t._v(" "),_("th",[t._v("Resource")]),t._v(" "),_("th",[t._v("DFSP")]),t._v(" "),_("th",[t._v("PISP")]),t._v(" "),_("th",[t._v("Note")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Create Bulk Participant Information")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/participants/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Lookup Participant Information")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/participants/{Type}/{ID}*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Create Participant Information")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/participants/{Type}/{ID}*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Delete Participant Information")]),t._v(" "),_("td",[_("code",[t._v("DELETE")])]),t._v(" "),_("td",[_("code",[t._v("/participants/{Type}/{ID}*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Lookup Party Information")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/parties/{Type}/{ID}*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Retrieve Transaction Request Information")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/transactionRequests/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Perform Transaction Request")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/transactionRequests")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Retrieve Quote Information")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/quotes/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Calculate Quote")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/quotes")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Retrieve Bulk Quote Information")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/bulkQuotes/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Calculate Bulk Quote")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/bulkQuotes")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Perform Authorization")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/authorizations/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Update Authorization")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/authorizations/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Retrieve Transfer Information")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/transfers/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Perform Transfer")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/transfers")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Retrieve Bulk Transfer Information")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/bulkTransfers/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Perform Bulk Transfer")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/bulkTransfers")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Retrieve Transaction Information")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/transactions/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")])])]),t._v(" "),_("blockquote",[_("p",[t._v("* also:  "),_("code",[t._v("{Type}/{ID}/{SubId}")])])]),t._v(" "),_("h3",{attrs:{id:"thirdparty-pisp-api-pisp-switch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#thirdparty-pisp-api-pisp-switch"}},[t._v("#")]),t._v(" ThirdParty-PISP-API (PISP -> Switch)")]),t._v(" "),_("p",[t._v("Api for a PISP to implement to allow PISP functionality.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("isNew?")]),t._v(" "),_("th",[_("code",[t._v("VERB")])]),t._v(" "),_("th",[t._v("Resource")]),t._v(" "),_("th",[t._v("DFSP")]),t._v(" "),_("th",[t._v("PISP")]),t._v(" "),_("th",[t._v("Note")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Lookup Party Information")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/parties/{Type}/{ID}*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Update Authorization")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/authorizations/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("PISP calls this with signed challenge during a transaction")])]),t._v(" "),_("tr",[_("td",[t._v("Create Consent Request")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/consentRequests")])]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Update Consent Request")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/consentRequests/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Based on our current designs, both a DFSP and PISP use this to callback to one another about the "),_("code",[t._v("consentRequest")])])]),t._v(" "),_("tr",[_("td",[t._v("Request Challenge")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/consents/{ID}/createCredential")])]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("PISP needs to request a challenge for the given consent")])]),t._v(" "),_("tr",[_("td",[t._v("Lookup Consent")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/consents/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Update Consent")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/consents/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("To update add a credential or verify a credential, setting the status to "),_("code",[t._v("VERIFIED")])])]),t._v(" "),_("tr",[_("td",[t._v("Initiate 3rd party request")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/thirdpartyRequests/transactions")])]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Get 3rd party request information")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/thirdpartyRequests/transactions/{ID}")])]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")])])]),t._v(" "),_("blockquote",[_("p",[t._v("* also:  "),_("code",[t._v("{Type}/{ID}/{SubId}")])])]),t._v(" "),_("h3",{attrs:{id:"thirdparty-dfsp-api-dfsp-switch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#thirdparty-dfsp-api-dfsp-switch"}},[t._v("#")]),t._v(" ThirdParty-DFSP-API (DFSP -> Switch)")]),t._v(" "),_("p",[t._v("Api for a DFSP to implement to allow PISP functionality.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("isNew?")]),t._v(" "),_("th",[_("code",[t._v("VERB")])]),t._v(" "),_("th",[t._v("Resource")]),t._v(" "),_("th",[t._v("DFSP")]),t._v(" "),_("th",[t._v("PISP")]),t._v(" "),_("th",[t._v("Note")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Perform 3rd Party Authorization")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/authorizations")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("DFSP needs to call this with FIDO Result")])]),t._v(" "),_("tr",[_("td",[t._v("Update Consent Request")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/consentRequests/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Based on our current designs, both a DFSP and PISP use this to callback to one another about the "),_("code",[t._v("consentRequest")])])]),t._v(" "),_("tr",[_("td",[t._v("Create Consent")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/consents")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("Called by DFSP after a successful "),_("code",[t._v("consentRequest")]),t._v(" flow")])]),t._v(" "),_("tr",[_("td",[t._v("Lookup Consent")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/consents/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Update Consent")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/consents/{ID}")]),t._v("*")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("To update add a credential or verify a credential, setting the status to "),_("code",[t._v("VERIFIED")])])]),t._v(" "),_("tr",[_("td",[t._v("Verify a 3rd party transaction")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/thirdpartyRequests/transactions/{ID/authorizations")])]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Called by a DFSP to check the authorization it gets back from a PISP")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("* "),_("code",[t._v("PUT /consents/{ID}")]),t._v(" from the DFSP may not be required.")])]),t._v(" "),_("h2",{attrs:{id:"api-calls-inbound-from-switch-participant"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#api-calls-inbound-from-switch-participant"}},[t._v("#")]),t._v(" API Calls - Inbound (From Switch -> Participant)")]),t._v(" "),_("h3",{attrs:{id:"fspiop-api-switch-dfsp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fspiop-api-switch-dfsp"}},[t._v("#")]),t._v(" FSPIOP-API (Switch -> DFSP)")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[_("code",[t._v("VERB")])]),t._v(" "),_("th",[t._v("Resource")]),t._v(" "),_("th",[t._v("DFSP")]),t._v(" "),_("th",[t._v("PISP")]),t._v(" "),_("th",[t._v("Note")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Return Bulk Participant Information")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/participants/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Bulk Participant Information Error")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/participants/{ID}/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Participant Information")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/participants/{Type}/{ID}*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Participant Information Error")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/participants/{Type}/{ID}/error*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Party Information")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/parties/{Type}/{ID}*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("PISP needs to get result of party lookup")])]),t._v(" "),_("tr",[_("td",[t._v("Return Party Information Error")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/parties/{Type}/{ID}/error*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("PISP needs to get result of party lookup")])]),t._v(" "),_("tr",[_("td",[t._v("Lookup Party Information")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/parties/{Type}/{ID}*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Transaction Request Information")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/transactionRequests/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Transaction Request Information Error")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/transactionRequests/{ID}/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Quote Information")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/quotes/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Quote Information Error")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/quotes/{ID}/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Bulk Quote Information")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/bulkQuotes/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Bulk Quote Information Error")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/bulkQuotes/{ID}/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Authorization Result")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/authorizations/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Authorization Error")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/authorizations/{ID}/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Transfer Information")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/transfers/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Transfer Information Error")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/transfers/{ID}/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Bulk Transfer Information")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/bulkTransfers/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Bulk Transfer Information Error")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/bulkTransfers/{ID}/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Transaction Information")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/transactions/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Transaction Information Error")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/transactions/{ID}/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")])])]),t._v(" "),_("h3",{attrs:{id:"thirdparty-pisp-api-switch-pisp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#thirdparty-pisp-api-switch-pisp"}},[t._v("#")]),t._v(" ThirdParty-PISP-API (Switch -> PISP)")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("isNew?")]),t._v(" "),_("th",[_("code",[t._v("VERB")])]),t._v(" "),_("th",[t._v("Resource")]),t._v(" "),_("th",[t._v("DFSP")]),t._v(" "),_("th",[t._v("PISP")]),t._v(" "),_("th",[t._v("Note")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Return Party Information")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/parties/{Type}/{ID}*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("PISP needs to get result of party lookup")])]),t._v(" "),_("tr",[_("td",[t._v("Return Party Information Error")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/parties/{Type}/{ID}/error*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("PISP needs to get result of party lookup")])]),t._v(" "),_("tr",[_("td",[t._v("Return Authorization Result")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/authorizations/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[_("em",[t._v("May not be required")])])]),t._v(" "),_("tr",[_("td",[t._v("Return Authorization Error")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/authorizations/{ID}/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Inform PISP of authorization error")])]),t._v(" "),_("tr",[_("td",[t._v("Update Consent Request")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/consentRequests/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Update Consent Request Error")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/consentRequests/{ID}/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Create Consent")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/consents/")]),t._v("*2")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Callback a PISP gets once "),_("code",[t._v("consentRequest")]),t._v(" is successful")])]),t._v(" "),_("tr",[_("td",[t._v("Create Or Update Consent")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/consents/{ID}")]),t._v("*2")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Callback a PISP gets once consent's challenge has been added")])]),t._v(" "),_("tr",[_("td",[t._v("Perform Authorization")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/authorizations/")])]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Requests Authorization for a "),_("code",[t._v("thirdpartyRequests/transaction")]),t._v(" from DFSP")])]),t._v(" "),_("tr",[_("td",[t._v("Update 3rd Party Transaction Request")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/thirdpartyRequests/transactions/{ID}")])]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Called at the end of the transaction flow, to inform PISP of final result")])]),t._v(" "),_("tr",[_("td",[t._v("Update 3rd Party Transaction Request Error")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/thirdpartyRequests/transactions/{ID}/error")])]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Inform PISP of an error during the "),_("code",[t._v("thirdpartyRequests/transaction")])])])])]),t._v(" "),_("blockquote",[_("p",[t._v("* also: "),_("code",[t._v("{Type}/{ID}/{SubId}")]),t._v("\n*2 We may want this to be "),_("em",[t._v("only")]),t._v(" be a POST to create a consent, to keep things consistent")])]),t._v(" "),_("h3",{attrs:{id:"thirdparty-dfsp-api-switch-dfsp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#thirdparty-dfsp-api-switch-dfsp"}},[t._v("#")]),t._v(" ThirdParty-DFSP-API (Switch -> DFSP)")]),t._v(" "),_("p",[t._v("DFSP inbound API calls required for PISP functionality.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("isNew?")]),t._v(" "),_("th",[_("code",[t._v("VERB")])]),t._v(" "),_("th",[t._v("Resource")]),t._v(" "),_("th",[t._v("DFSP")]),t._v(" "),_("th",[t._v("PISP")]),t._v(" "),_("th",[t._v("Note")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Lookup Party Information")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/parties/{Type}/{ID}*")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Return Quote Information")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/quotes/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Perform Transfer")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/transfers")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Update Authorization")]),t._v(" "),_("td",[t._v("N")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/authorizations/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("PISP calls this with signed challenge during a transaction")])]),t._v(" "),_("tr",[_("td",[t._v("Create Consent Request")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/consentRequests")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Update Consent Request")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/consentRequests/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Based on our current designs, both a DFSP and PISP use this to callback to one another about the "),_("code",[t._v("consentRequest")])])]),t._v(" "),_("tr",[_("td",[t._v("Lookup Consent")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("GET")])]),t._v(" "),_("td",[_("code",[t._v("/consents/{ID}")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Update Consent")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/consents/{ID}")]),t._v("*2")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("Only in the case of 3rd party FIDO service, DFSP can opt to verify the signature themselves")])]),t._v(" "),_("tr",[_("td",[t._v("Initiate 3rd party request")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("POST")])]),t._v(" "),_("td",[_("code",[t._v("/thirdpartyRequests/transactions")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("Handle the 3rd party request, and ask Payee FSP for quote")])]),t._v(" "),_("tr",[_("td",[t._v("Update a 3rd party verification")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/thirdpartyRequests/transactions/{ID/authorizations")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("Called by the auth service on successful validation of authorization")])]),t._v(" "),_("tr",[_("td",[t._v("Update a 3rd party verification error")]),t._v(" "),_("td",[t._v("Y")]),t._v(" "),_("td",[_("code",[t._v("PUT")])]),t._v(" "),_("td",[_("code",[t._v("/thirdpartyRequests/transactions/{ID/authorizations/error")])]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("❌")]),t._v(" "),_("td",[t._v("Called by the auth service on unsuccesful validation of authorization")])])])]),t._v(" "),_("blockquote",[_("p",[t._v("* also: "),_("code",[t._v("{Type}/{ID}/{SubId}")]),t._v("\n*2 "),_("code",[t._v("PUT /consents/{ID}")]),t._v(" from the DFSP may not be required.")])]),t._v(" "),_("h2",{attrs:{id:"security-considerations"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[t._v("#")]),t._v(" Security Considerations:")]),t._v(" "),_("p",[t._v("We assume an API Gateway will be able to distinguish between the participant's role (DFSP or PISP), and whether or not they have the access to call the given API.")])])}),[],!1,null,null,null);v.default=e.exports}}]);