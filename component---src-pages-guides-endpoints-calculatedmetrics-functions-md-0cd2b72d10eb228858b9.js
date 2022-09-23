(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4578],{86968:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return p}});var a,i=t(22122),c=t(19756),o=(t(15007),t(64983)),r=t(99536),l=["components"],d={},s=(a="CodeBlock",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),m={_frontmatter:d},u=r.Z;function p(e){var n=e.components,t=(0,c.Z)(e,l);return(0,o.mdx)(u,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"title: Calculated metric functions\ndescription: Call or reference calculated metric functions in API requests."),(0,o.mdx)("h1",{id:"calculated-metric-functions"},"Calculated metric functions"),(0,o.mdx)("p",null,"Calculated Metrics are comprised of several different mathematical functions that work on available metrics for a given report suite."),(0,o.mdx)("h2",{id:"get-all-functions"},"Get all functions"),(0,o.mdx)("p",null,"Returns a full list of calculated metric functions that the user can access."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{GLOBALCOMPANYID}/calculatedmetrics/functions/")),(0,o.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"request"},"Request"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/exampleco/calculatedmetrics/functions" \\\n  -H "x-api-key: {CLIENTID}" \\\n  -H "Authorization: Bearer {ACCESS_TOKEN}"\n')),(0,o.mdx)("h4",{id:"response"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'\n[\n  {\n  "id": "col-sum",\n  "category": "basic",\n  "persistable": true,\n  "name": "Column Sum",\n  "description": "Adds all of the numeric values for a metric within a column (across the elements of a dimension).",\n  "definition": {\n    "func": "calc-metric",\n    "parameters": [\n      {\n        "func": "parameter-def",\n        "name": "col",\n        "type": "column",\n        "friendlyName": "metric",\n        "description": "Requires at least one metric but can take any number of metrics as parameters."\n      }\n    ],\n    "version": [\n      1,\n      0,\n      0\n    ]\n    }\n  },\n  {\n    ...\n  }\n]\n')),(0,o.mdx)("h2",{id:"get-a-single-function"},"Get a single function"),(0,o.mdx)("p",null,"Returns details around a single calculated metric function if you specify the ",(0,o.mdx)("inlineCode",{parentName:"p"},"id"),". You can obtain the desired ",(0,o.mdx)("inlineCode",{parentName:"p"},"id")," by calling the multiple calculated metrics endpoint."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"GET https://analytics.adobe.io/api/{GLOBALCOMPANYID}/calculatedmetrics/functions/{ID}")),(0,o.mdx)("p",null,"For example, the following request returns information around the ",(0,o.mdx)("inlineCode",{parentName:"p"},"add")," calculated metric function:"),(0,o.mdx)(s,{slots:"heading, code",repeat:"2",languages:"CURL,JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"request-1"},"Request"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://analytics.adobe.io/api/exampleco/calculatedmetrics/functions/add" \\\n  -H "x-api-key: {CLIENTID}" \\\n  -H "Authorization: Bearer {ACCESS_TOKEN}"\n')),(0,o.mdx)("h4",{id:"response-1"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "add",\n  "category": "internal",\n  "persistable": true,\n  "definition": {\n    "func": "calc-metric",\n    "parameters": [\n      {\n        "func": "parameter-def",\n        "name": "col1",\n        "type": "column",\n        "friendlyNameKey": "metric_X",\n        "descKey": "FirstMetricToAdd"\n      },\n      {\n        "func": "parameter-def",\n        "name": "col2",\n        "type": "column",\n        "friendlyNameKey": "metric_Y",\n        "descKey": "SecondMetricToAdd"\n      }\n    ],\n    "version": [\n      1,\n      0,\n      0\n    ]\n  }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-calculatedmetrics-functions-md-0cd2b72d10eb228858b9.js.map