(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9708],{37127:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return o},default:function(){return u}});var a,d=t(22122),i=t(19756),r=(t(15007),t(64983)),l=t(99536),m=["components"],o={},p=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),s={_frontmatter:o},x=l.Z;function u(e){var n=e.components,t=(0,i.Z)(e,m);return(0,r.mdx)(x,(0,d.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"title: Job definition reference\ndescription: Supported variables, actions, and filters when using the Data Repair API."),(0,r.mdx)("h1",{id:"job-definition-reference"},"Job definition reference"),(0,r.mdx)("p",null,"A JSON request body is required when creating a Data Repair API job. This page provides a full list of variables, actions, and filters that you can include to create a valid JSON request body."),(0,r.mdx)("h2",{id:"structure"},"Structure"),(0,r.mdx)("p",null,"A JSON request body consists of one or more variables with the desired action for each variable. You can also optionally include a filter for a given variable."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "{VARIABLE_1}": {\n      "action": "{ACTION_1}",\n      "filter": {"condition":  "{CONDITION_1}"}\n    },\n    "{VARIABLE_2}": {\n      "action": "{ACTION_2}"\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"variables"},"Variables"),(0,r.mdx)("p",null,"The Data Repair API supports the following variables, with their supported actions."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"If a variable supports the ",(0,r.mdx)("inlineCode",{parentName:"li"},"set")," action, you can use any filter with it unless otherwise noted."),(0,r.mdx)("li",{parentName:"ul"},"If a variable supports the ",(0,r.mdx)("inlineCode",{parentName:"li"},"delete")," action, you can use any filter except ",(0,r.mdx)("inlineCode",{parentName:"li"},"isEmpty")," with it unless otherwise noted."),(0,r.mdx)("li",{parentName:"ul"},"If a variable supports ",(0,r.mdx)("inlineCode",{parentName:"li"},"deleteQueryString")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},"deleteQueryStringParameters"),", you cannot use any filters with either action.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Variable"),(0,r.mdx)("th",{parentName:"tr",align:null},"Supported actions"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"activitymap")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"Deletes all ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/analyze/activity-map/activitymap-reporting-analytics.html"},"Activity map")," data for the hit. This variable does not support any filters.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"campaign")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/tracking-code.html"},"Tracking code")," dimension. Only tracking codes with an ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/conversion-variables/conversion-var-admin.html"},"expiration")," of page view, visit, or time period of 1 day or shorter are supported by the Data Repair API. A data repair job fails if it includes this variable with an expiration of a time period greater than 1 day or on an event. As a best practice, Adobe recommends ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/conversion-variables/conversion-var-admin.html"},"resetting")," the tracking code before a data repair job runs so that values persisted by visitors do not reappear after a data repair job is complete.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"entrypage"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"entrypageoriginal")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/entry-dimensions.html"},"Entry page")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"evar1")," - ",(0,r.mdx)("inlineCode",{parentName:"td"},"evar250")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/evar.html"},"eVar")," dimensions. Only eVars with an ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/conversion-variables/conversion-var-admin.html"},"expiration")," of page view, visit, or time period of 1 day or shorter are supported by the Data Repair API. Merchandising variables, enabled currently or historically, are not supported. As a best practice, Adobe recommends ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/conversion-variables/conversion-var-admin.html"},"resetting")," the eVar in question before a data repair job runs so that values persisted by visitors do not reappear after a data repair job is complete.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geodma")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/us-dma.html"},"US DMA")," dimension. The only supported filter is ",(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geocity")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/cities.html"},"Cities")," dimension. The only supported filter is ",(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geocountry")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/countries.html"},"Countries")," dimension. The only supported filter is ",(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geolatitude"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"geolongitude")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The only supported filter is ",(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"georegion")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/regions.html"},"Regions")," dimension. The only supported filter is ",(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geozip")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/zip-code.html"},"Zip code")," dimension collected through geolocation. See also ",(0,r.mdx)("inlineCode",{parentName:"td"},"zip"),". The only supported filter is ",(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"ipaddress")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The IP address of the visitor. The only supported filter is ",(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"latitude"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"longitude")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The only supported filter is ",(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"latlon1"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"latlon23"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"latlon45"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"pointofinterest"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"pointofinterestdistance")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html"},"Mobile")," dimensions. These variables do not support any filters.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"mobileaction")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html"},"Mobile action")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"mobileappid"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilemessagebuttonname"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilemessageid"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilerelaunchcampaigncontent"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilerelaunchcampaignmedium"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilerelaunchcampaignsource"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilerelaunchcampaignterm"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilerelaunchcampaigntrackingcode")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html"},"Mobile")," dimensions. If using the ",(0,r.mdx)("inlineCode",{parentName:"td"},"delete")," action with this variable, no filters are supported. Standard filters are supported when using the ",(0,r.mdx)("inlineCode",{parentName:"td"},"set")," action with this variable.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"page")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/page.html"},"Page")," dimension. The ",(0,r.mdx)("inlineCode",{parentName:"td"},"isEmpty")," filter is not supported.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pageeventvar1")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/linkurl.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"linkURL"))," implementation variable. The ",(0,r.mdx)("inlineCode",{parentName:"td"},"isEmpty")," filter is not supported.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pageeventvar2")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/download-link.html"},"Download link"),", ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/exit-link.html"},"Exit link"),", or ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/custom-link.html"},"Custom link")," dimension, depending on the type of link. The ",(0,r.mdx)("inlineCode",{parentName:"td"},"isEmpty")," filter is not supported.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pageurl")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/page-url.html"},"Page URL")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pageurlfirsthit"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"pageurlvisitstart")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"N/A")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"prop1")," - ",(0,r.mdx)("inlineCode",{parentName:"td"},"prop75")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/prop.html"},"Prop")," dimensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"referrer")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/referrer.html"},"Referrer")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"referrerfirsthit"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"referrervisit")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"N/A")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"sitesections")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/site-section.html"},"Site section")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"video"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoad")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/media-analytics/using/metrics-and-metadata/audio-video-parameters.html"},"Media Analytics")," dimensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"videoadname"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoadplayername"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoadadvertiser"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudioalbum"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudioartist"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudioauthor"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudiolabel"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudiopublisher"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudiostation"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoadcampaign"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videochannel"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videochapter"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videocontenttype"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoepisode"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videofeedtype"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videomvpd"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoname"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videonetwork"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videopath"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoplayername"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoseason"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoshow"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoshowtype"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videostreamtype")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/media-analytics/using/metrics-and-metadata/audio-video-parameters.html"},"Media Analytics")," dimensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"zip")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/zip-code.html"},"Zip code")," dimension collected through the ",(0,r.mdx)("inlineCode",{parentName:"td"},"zip")," variable (not geosegmentation). See also ",(0,r.mdx)("inlineCode",{parentName:"td"},"geozip"),". The only supported filter is ",(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),".")))),(0,r.mdx)("h2",{id:"actions"},"Actions"),(0,r.mdx)("p",null,"Each variable requires an action. The Data Repair API supports the following four actions:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"set")),": Overwrites the variable to the value in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"setValue")," property. Include the ",(0,r.mdx)("inlineCode",{parentName:"li"},"setValue")," property alongside the ",(0,r.mdx)("inlineCode",{parentName:"li"},"action")," property inside the variable. It supports all filters by default; however, some variables do not support all filters for this action. See the above table to confirm that a variable supports a filter with this action."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"delete")),": Clears the variable value. It supports all filters except ",(0,r.mdx)("inlineCode",{parentName:"li"},"isEmpty")," by default. Some variables do not support all filters for this action. See the above table to confirm that a variable supports a filter with this action."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"deleteQueryString")),": Remove the entire query string from a variable value. If the value does not appear to be a URL, no action is taken. Filters are not supported with this action."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"deleteQueryStringParameters")),": Remove one or more query string parameters and their values from a variable. The query parameters removed are based on the string array ",(0,r.mdx)("inlineCode",{parentName:"li"},"parameters"),". Include the ",(0,r.mdx)("inlineCode",{parentName:"li"},"parameters")," array alongside the ",(0,r.mdx)("inlineCode",{parentName:"li"},"action")," property inside the variable.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Up to 10 parameters are supported."),(0,r.mdx)("li",{parentName:"ul"},"Parameters are case sensitive."),(0,r.mdx)("li",{parentName:"ul"},"Filters are not supported with this action."),(0,r.mdx)("li",{parentName:"ul"},"If the value is not a correctly formatted URL, no action is taken.")))),(0,r.mdx)(p,{slots:"heading, code",repeat:"4",languages:"JSON,JSON,JSON,JSON",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"set"},"set"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "set",\n      "setValue": "New value"\n    }\n  }\n}\n')),(0,r.mdx)("h4",{id:"delete"},"delete"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "delete"\n    }\n  }\n}\n')),(0,r.mdx)("h4",{id:"deletequerystring"},"deleteQueryString"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "deleteQueryString"\n    }\n  }\n}\n')),(0,r.mdx)("h4",{id:"deletequerystringparameters"},"deleteQueryStringParameters"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "deleteQueryStringParameters",\n      "parameters": ["param1", "param2"]\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"filters"},"Filters"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"set")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"delete")," actions support filters, which allow you to selectively repair certain rows based on the filter criteria. Check the above variable table to make sure that an action supports the desired filter. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"deleteQueryString")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"deleteQueryStringParameters")," actions do not support any filters."),(0,r.mdx)("p",null,"All filters are currently case sensitive. Support for filters that are not case sensitive is planned."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"inList")),": Include all rows where the variable is an exact match to at least one value from the ",(0,r.mdx)("inlineCode",{parentName:"li"},"matchValues")," array. The ",(0,r.mdx)("inlineCode",{parentName:"li"},"matchValues")," array can hold up to 1000 values."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"isEmpty")),": Only include rows where the variable does not contain a value. Cannot be used with the ",(0,r.mdx)("inlineCode",{parentName:"li"},"delete")," action."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"contains")),": Include rows where the variable contains the value in ",(0,r.mdx)("inlineCode",{parentName:"li"},"matchValue"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"doesNotContain")),": Include rows where the value in ",(0,r.mdx)("inlineCode",{parentName:"li"},"matchValue")," is not present."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"startsWith")),": Limit the action to rows where the value starts with the value in ",(0,r.mdx)("inlineCode",{parentName:"li"},"matchValue"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"doesNotStartWith")),": Limit the action to rows where the value does not start with the value in ",(0,r.mdx)("inlineCode",{parentName:"li"},"matchValue"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"endsWith")),": Limit the action to rows where the value ends with the value in ",(0,r.mdx)("inlineCode",{parentName:"li"},"matchValue"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"doesNotEndWith")),": Limit the action to rows where the value does not end with the value in ",(0,r.mdx)("inlineCode",{parentName:"li"},"matchValue"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"isURL")),": Only include the row if the Data Repair API recognizes the value as a URL."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"strong"},"isNotURL")),": Only include the row if the Data Repair API recognizes that the value is not a URL.")),(0,r.mdx)(p,{slots:"heading, code",repeat:"6",languages:"JSON,JSON,JSON,JSON,JSON,JSON",mdxType:"CodeBlock"}),(0,r.mdx)("h4",{id:"inlist"},"inList"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "delete",\n      "filter": {\n        "condition": "inList",\n        "matchValues": ["match1", "match2"]\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h4",{id:"isempty"},"isEmpty"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "set", \n      "setValue": "new value", \n      "filter": {\n        "condition": "isEmpty"\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h4",{id:"contains"},"contains"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "delete",\n      "filter": {\n        "condition": "contains",\n        "matchValue": "@"\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h4",{id:"startswith"},"startsWith"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "delete",\n      "filter": {\n        "condition": "startsWith",\n        "matchValue": "ABC"\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h4",{id:"endswith"},"endsWith"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "delete",\n      "filter": {\n        "condition": "endsWith",\n        "matchValue": "XYZ"\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h4",{id:"isurl"},"isURL"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "delete",\n      "filter": {\n        "condition": "isURL"\n      }\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"example-data-repair-api-definition-file"},"Example Data Repair API definition file"),(0,r.mdx)("p",null,"The following Data Repair API definition simultaneously performs the following four actions:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Deletes all activity map data"),(0,r.mdx)("li",{parentName:"ul"},"Deletes the value in ",(0,r.mdx)("inlineCode",{parentName:"li"},"prop12")," across all rows"),(0,r.mdx)("li",{parentName:"ul"},"Sets ",(0,r.mdx)("inlineCode",{parentName:"li"},"eVar74"),' to the value of "Turtles" across all rows'),(0,r.mdx)("li",{parentName:"ul"},"Deletes the value in ",(0,r.mdx)("inlineCode",{parentName:"li"},"eVar107"),' if the existing eVar value contains "Fox" or "Dog"')),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "activitymap": {\n      "action": "delete"\n    },\n    "prop12": {\n      "action": "delete"\n    },\n    "evar74": {\n      "action": "set",\n      "setValue": "Turtles"\n    },\n    "evar107": {\n      "action": "delete",\n      "filter": {\n        "condition": "inList",\n        "matchValues": ["Fox", "Dog"]\n      }\n    }\n  }\n}\n')),(0,r.mdx)("p",null,"Once you have a completed JSON request body and a ",(0,r.mdx)("inlineCode",{parentName:"p"},"validationToken")," from the ",(0,r.mdx)("a",{parentName:"p",href:"server-call-estimate.md"},"Server Call estimate endpoint"),", you can make a call to the ",(0,r.mdx)("a",{parentName:"p",href:"job.md"},"Job endpoint")," to make the Data Repair API call."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-data-repair-json-body-md-358c9b17eb59dedd44da.js.map