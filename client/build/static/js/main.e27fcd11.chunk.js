(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{413:function(e,t,a){},415:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(34),o=a.n(c),r=a(38),s=a(22),i=a(16),l=a(32),d=a.n(l),j="https://disease.sh/v3/covid-19/continents/",u="https://disease.sh/v3/covid-19/countries/",h="https://disease.sh/v3/covid-19/historical/",b="https://disease.sh/v3/covid-19/jhucsse/counties/",O="https://disease.sh/v3/covid-19/states/",p=a(12),x=function(e,t){switch(t.type){case"LOADING":return Object(p.a)(Object(p.a)({},e),{},{loading:t.payload});case"OUTPUT_ALL":return Object(p.a)(Object(p.a)({},e),{},{outputAll:t.payload,loading:!1});case"LOADING_REGION":return Object(p.a)(Object(p.a)({},e),{},{loadingRegion:!0});case"LOADING_REGION_REPORT":return Object(p.a)(Object(p.a)({},e),{},{loadRegionReport:!0});case"SET_REGION_REPORT":return Object(p.a)(Object(p.a)({},e),{},{regionReport:t.payload,loadRegionReport:!1,countries:t.payload.countries});case"SET_REGION":var a=Array.from(new Set(t.payload.map(JSON.stringify))).map(JSON.parse);return Object(p.a)(Object(p.a)({},e),{},{regions:a,loadingRegion:!1});case"SET_COUNTRIES_AND_FLAG":var n=t.payload.map((function(e){return{name:e.Name,flag:e.Alpha2Code}}));return Object(p.a)(Object(p.a)({},e),{},{countriesAndCode:n});case"GET_ALL_COUTRIES_REPORT":return Object(p.a)(Object(p.a)({},e),{},{allcountriesReports:t.payload});case"FIND_SEARCH_COUNTRIES":var c=e.allcountriesReports.filter((function(e){return e.country.toLowerCase().replace(/\s/g,"").trim().includes(t.payload.searchWord.trim().toLowerCase().replace(/\s/g,""))}));return Object(p.a)(Object(p.a)({},e),{},{target:t.payload.target,searchCountriesResult:c,show:!0});case"CLOSE_SEARCH_RESULT":return Object(p.a)(Object(p.a)({},e),{},{show:!1});case"INDIVIDUAL_COUNTRY_REPORT":return Object(p.a)(Object(p.a)({},e),{},{idvReport:t.payload,loadingIdvReport:!1});case"SET_HISTORICAL_COUNTRY":var o=[];console.log(t.payload);var r=Object.entries(t.payload.data.timeline).map((function(e){return[e[0],Object.entries(e[1])]})),s=r[0][1].length;if(3==r.length)for(var i=0;i<s;i++)o.push({name:"".concat(r[0][1][i][0]),cases:"".concat(r[0][1][i][1]),deaths:"".concat(r[1][1][i][1]),recovery:"".concat(r[2][1][i][1])});else for(var l=0;l<s;l++)o.push({name:"".concat(r[0][1][l][0]),cases:"".concat(r[0][1][l][1]),deaths:"".concat(r[1][1][l][1])});var d={data:o,name:t.payload.name};return console.log(d.data),Object(p.a)(Object(p.a)({},e),{},{historical_data:t.payload,formattedHistoricalData:d});case"RESET_HISTORICAL_DATA":return Object(p.a)(Object(p.a)({},e),{},{historical_data:{data:null,name:null},formattedHistoricalData:{data:null,name:null}});default:return e}},m=a(1),f=Object(n.createContext)(),y=function(e){var t=e.children,a=Object(n.useState)(!0),c=Object(i.a)(a,2),o=c[0],r=c[1],s=Object(n.useReducer)(x,{loading:!0,outputAll:null,countries:[],loadingCountries:!0,regions:[],loadingRegion:!0,region:null,loadRegionReport:!0,regionReport:null,countriesAndCode:[],allcountriesReports:[],target:null,searchCountriesResult:[],show:!1,idvReport:null,loadingIdvReport:!0,historical_data:{data:null,name:null},formattedHistoricalData:{data:null,name:null}}),l=Object(i.a)(s,2),b=l[0],O=l[1];Object(n.useEffect)((function(){console.log(b.historical_data)}),[b.historical_data]);var p=Object(n.useState)({message:"Email sent! Admin will response ASAP! \ud83e\udd70",show:!1}),y=Object(i.a)(p,2),g=y[0],v=y[1],C=Object(n.useState)(!1),S=Object(i.a)(C,2),R=S[0],T=S[1],_=Object(n.useState)(!1),E=Object(i.a)(_,2),A=E[0],D=E[1],w=Object(n.useState)(!1),I=Object(i.a)(w,2),N=I[0],L=I[1];Object(n.useEffect)((function(){var e=setInterval((function(){r(!o)}),6e5);return function(){return clearInterval(e)}})),Object(n.useEffect)((function(){O({type:"LOADING",payload:!0}),d.a.get("".concat("https://disease.sh/v3/covid-19/all")).then((function(e){O({type:"OUTPUT_ALL",payload:e.data})})),O({type:"LOAD_REGION_REPORT"}),d.a.get("".concat("https://disease.sh/v3/covid-19/continents/North America")).then((function(e){O({type:"SET_REGION_REPORT",payload:e.data})})),d.a.get("https://covid-tracker-jerng.herokuapp.com/api/getCountries").then((function(e){console.log(e.data),O({type:"SET_COUNTRIES_AND_FLAG",payload:e.data.data.Response})})),d.a.get("".concat("https://disease.sh/v3/covid-19/countries")).then((function(e){O({type:"GET_ALL_COUTRIES_REPORT",payload:e.data})}))}),[o]);var H={homeState:b,loadRegions:function(e){e.preventDefault(),O("LOADING_REGION"),d.a.get("".concat(j)).then((function(e){O({type:"SET_REGION",payload:e.data.map((function(e){return e.continent}))})}))},funcRegionReport:function(e){O({type:"LOADING_REGION_REPORT"}),d.a.get("".concat(j).concat("Australia/Oceania"==e?"oceania":e,"?strict=false")).then((function(e){console.log(e.data),O({type:"SET_REGION_REPORT",payload:e.data})}))},findSearchedCountry:function(e,t){e.preventDefault(),O(""==t?{type:"CLOSE_SEARCH_RESULT"}:{type:"FIND_SEARCH_COUNTRIES",payload:{searchWord:t,target:e.target}})},closeSearchResult:function(){O({type:"CLOSE_SEARCH_RESULT"})},fetchIndividualReport:function(e){d.a.get("".concat(u).concat(e)).then((function(e){O({type:"INDIVIDUAL_COUNTRY_REPORT",payload:e.data})}))},showEmailModal:A,setShowEmailModal:D,emailToast:g,setEmailToast:v,captchaVerified:R,setCaptchaVerified:T,delayShowCaptcha:N,setDelayShowCaptcha:L,fetchHistoricalCountry:function(e,t){d.a.get("".concat(h).concat(e,"?lastdays=").concat(t)).then((function(t){O({type:"SET_HISTORICAL_COUNTRY",payload:{data:t.data,name:e}})}))},resetHistoricalData:function(){O({type:"RESET_HISTORICAL_DATA"})}};return Object(m.jsx)(f.Provider,{value:H,children:t})},g=a(233),v=a(422),C=a(208),S=a(440),R=a(423),T=a(424),_=a(425),E=a(426),A=a(427),D=a(428),w=function(){var e=Object(n.useContext)(f),t=e.setShowEmailModal,a=e.setDelayShowCaptcha;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(v.a,{className:"row-cols-3 row-cols-md-3 g-4 mx-auto mt-3 bg-dark text-light",children:[Object(m.jsxs)(C.a,{children:[Object(m.jsx)("h6",{style:{color:"#efaa4f"},children:"Contact"}),Object(m.jsxs)(S.a,{inline:!0,children:[Object(m.jsx)(R.a,{})," Vancouver, British Columbia, CA ",Object(m.jsx)("br",{}),Object(m.jsx)(T.a,{})," Please send me an e-mail ",Object(m.jsx)("br",{}),Object(m.jsxs)("div",{style:{color:"red"},onClick:function(){t(!0),setTimeout((function(){a(!0)}),1e3)},children:[Object(m.jsx)(_.a,{color:"red"})," Coh.jr11@gmail.com"]}),Object(m.jsx)("br",{})]})]}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)("h6",{style:{color:"#efaa4f"},children:"Information"}),Object(m.jsxs)("ul",{style:{listStyleType:"none"},children:[Object(m.jsx)("li",{children:Object(m.jsx)(S.a,{inline:!0,children:Object(m.jsxs)("a",{style:{textDecoration:"none"},href:"/",children:[Object(m.jsx)(E.a,{})," Home"]})})}),Object(m.jsx)("li",{children:Object(m.jsx)(S.a,{inline:!0,children:Object(m.jsxs)("a",{style:{textDecoration:"none"},href:"/advancedStats",children:[Object(m.jsx)(A.a,{})," Advanced Search"]})})}),Object(m.jsx)("li",{children:Object(m.jsx)(S.a,{inline:!0,children:Object(m.jsxs)("a",{style:{textDecoration:"none"},href:"/documentation",children:[Object(m.jsx)(D.a,{})," Documentaion"]})})})]})]}),Object(m.jsxs)(C.a,{children:[Object(m.jsx)("h6",{style:{color:"#efaa4f"},children:"Copyright"}),"Copyright \xa9 2021 Covid Tracker by Jer Ng. All rights reserved",Object(m.jsx)("div",{style:{marginBottom:"30px"}})]})]})})},I=a(114),N=a(439),L=a(429),H=a(430),k=a(210),F=a.n(k),U=a(211),P=a.n(U),G=function(){var e,t=Object(n.useState)({senderName:"",senderEmail:"",subject:"",htmlMessage:""}),a=Object(i.a)(t,2),c=a[0],o=a[1],r=Object(n.useContext)(f),s=r.showEmailModal,l=r.setShowEmailModal,d=r.setEmailToast,j=r.delayShowCaptcha,u=r.setDelayShowCaptcha,h=function(e){l(!1),u(!1),b()},b=function(t){E(!t),e.reset()},O=function(e){o(Object(p.a)(Object(p.a)({},c),{},Object(I.a)({},e.target.name,e.target.value))),console.log(e.target.value)},x=c.from_email,y=c.from_name,g=c.subject,v=c.html_message,C=Object(n.useState)(!1),R=Object(i.a)(C,2),T=R[0],_=R[1],E=function(e){return _(!!e)};return Object(m.jsxs)(N.a,{show:s,onHide:h,children:[Object(m.jsx)(N.a.Header,{closeButton:!0,children:Object(m.jsx)(N.a.Title,{children:Object(m.jsx)("h5",{children:"you are sending an email to Admin (coh.jr11@gmail.com) "})})}),Object(m.jsxs)(S.a,{onSubmit:function(e){if(e.preventDefault(),!T)return alert("please remember to answwer Captcha box too!");F.a.sendForm("gmail","template_qch820q",e.target,"user_BzU9d0T1ZLCN9Iaj0D0ES"),d({message:"Email sent! Admin will response ASAP! \ud83e\udd70",show:!0}),h()},children:[Object(m.jsxs)(N.a.Body,{children:[Object(m.jsxs)(S.a.Group,{children:[Object(m.jsx)(S.a.Control,{type:"text",placeholder:"Subject",name:"subject",required:!0,"aria-describedby":"title-help",value:g,onChange:O}),Object(m.jsx)(S.a.Text,{id:"title-help",muted:!0,children:"Message's subject required"})]}),Object(m.jsxs)(S.a.Group,{children:[Object(m.jsx)(S.a.Control,{type:"text",placeholder:"Your name",name:"from_name",required:!0,"aria-describedby":"title-help",value:y,onChange:O}),Object(m.jsx)(S.a.Text,{id:"title-help",muted:!0,children:"Requester's name required"})]}),Object(m.jsxs)(S.a.Group,{children:[Object(m.jsx)(S.a.Control,{type:"email",placeholder:"Your email",name:"from_email",required:!0,"aria-describedby":"title-help",value:x,onChange:O}),Object(m.jsx)(S.a.Text,{id:"title-help",muted:!0,children:"Email required"})]}),Object(m.jsx)(S.a.Group,{children:Object(m.jsx)(S.a.Control,{as:"textarea",rows:3,placeholder:"Message",name:"html_message",value:v,onChange:O})}),0==j?Object(m.jsx)(L.a,{animation:"border"}):Object(m.jsx)("div",{style:{marginTop:"10px"},children:Object(m.jsx)(P.a,{ref:function(t){return e=t},sitekey:"6LeV5tcaAAAAAGqrUz-fJmzvi4_pKRcJtO3C-3HH",render:"explicit",onloadCallback:E,verifyCallback:E})})]}),Object(m.jsxs)(N.a.Footer,{children:[Object(m.jsx)(H.a,{variant:"danger",onClick:function(e){o({from_name:"",from_email:"",subject:"",html_message:""}),l(!1),u(!1),b()},children:"Cancel"}),Object(m.jsx)(H.a,{variant:"primary",type:"submit",children:"Send"})]})]})]})},B=a(442),K=function(){var e=Object(n.useContext)(f),t=e.emailToast,a=t.message,c=t.show,o=e.setEmailToast;return Object(m.jsx)(B.a,{show:c,style:{position:"fixed",top:"10%",right:"10px",width:"fit-content"},className:"bg-success text-white",onClose:function(){return o({message:"Email sent! Admin will response ASAP! \ud83e\udd70",show:!1})},delay:3e3,autohide:!0,children:Object(m.jsx)(B.a.Body,{children:a})})},q=function(e){var t=e.component,a=Object(g.a)(e,["component"]);return Object(m.jsx)(s.b,Object(p.a)(Object(p.a)({},a),{},{render:function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(t,Object(p.a)(Object(p.a)({},a),e)),Object(m.jsx)(G,{}),Object(m.jsx)(K,{}),Object(m.jsx)("div",{style:{position:"fixed",bottom:0,width:"100%"},children:Object(m.jsx)(w,{})})]})}}))},M=a(446),V=a(443),W=a(447),z=a(432),J=function(e){var t=e.output;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("h4",{children:Object(m.jsx)("ul",{children:Object.entries(t).map((function(e){return"cases"===e[0]||"todayCases"===e[0]||"todayDeaths"===e[0]||"active"===e[0]||"critical"===e[0]||"deaths"===e[0]||"recovered"===e[0]||"todayRecovered"===e[0]||"tests"===e[0]||"population"===e[0]||"activePerOneMillion"===e[0]||"recoveredPerOneMillion"===e[0]?Object(m.jsx)("li",{children:Object(m.jsxs)("h5",{style:{textTransform:"capitalize"},children:[e[0].match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g).join(" ")," :"," ",Object(m.jsxs)("span",{style:{color:"red"},children:[" ",parseFloat(e[1]).toLocaleString("en")]})]})},e[0]):null}))})})})},Y=a(431),Z=function(){var e=Object(n.useContext)(f).homeState,t=e.countries,a=e.countriesAndCode,c=e.allcountriesReports;return 0===a.length||0===t.length?Object(m.jsx)(L.a,{animation:"border"}):Object(m.jsx)(v.a,{className:"row-cols-1 row-cols-md-3 g-4 mx-auto mt-3",children:t.map((function(e){var t,n,o,r,s,i,l;return Object(m.jsx)(C.a,{children:Object(m.jsx)(V.a,{children:Object(m.jsxs)(M.a,{children:[Object(m.jsx)(V.a.Toggle,{as:M.a.Header,eventKey:e,children:Object(m.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(m.jsx)("h5",{style:{marginRight:"30px"},children:e}),Object(m.jsx)(Y.a,{children:Object(m.jsx)("img",{src:"https://www.countryflags.io/".concat("DRC"===e?"CD":"UK"===e?"GB":"Czechia"===e?"CZ":"UAE"===e?"AE":"Vietnam"===e?"VN":"S. Korea"===e?"KR":a.find((function(t){return e.includes(t.name)}))?null===(t=a.find((function(t){return e.includes(t.name)})))||void 0===t?void 0:t.flag:"British Virgin Islands"===e?null===(n=a.find((function(e){return"Virgin Islands (British)"===e.name})))||void 0===n?void 0:n.flag:"St. Barth"===e?null===(o=a.find((function(e){return"Saint Barth\xe9lemy"===e.name})))||void 0===o?void 0:o.flag:"Saint Pierre Miquelon"===e?null===(r=a.find((function(e){return"Saint Pierre and Miquelon"===e.name})))||void 0===r?void 0:r.flag:a.find((function(t){return t.name.includes(e)}))?null===(s=a.find((function(t){return t.name.includes(e)})))||void 0===s?void 0:s.flag:"USA"===e?"US":(null===(i=a.find((function(t){return t.name===e})))||void 0===i?void 0:i.flag)?null===(l=a.find((function(t){return t.name===e})))||void 0===l?void 0:l.flag:"no flag","/flat/64.png"),alt:"".concat(e)})})]})}),Object(m.jsx)(V.a.Collapse,{eventKey:e,children:Object(m.jsx)(M.a.Body,{children:0==c.length?Object(m.jsx)("h3",{children:"Server error! :( "}):Object(m.jsx)(J,{output:c.find((function(t){return t.country===e}))})})})]})})},e)}))})},Q=function(){var e=Object(n.useContext)(f).homeState,t=e.loadRegionReport,a=e.regionReport;return t?Object(m.jsx)(L.a,{animation:"border",className:"mt-3"}):Object(m.jsxs)("div",{style:{marginTop:"20px"},children:[Object(m.jsx)(J,{output:a}),Object(m.jsx)(Z,{})]})},X=function(){var e=Object(n.useContext)(f),t=e.homeState,a=t.outputAll,c=t.regions,o=e.loadRegions,r=e.funcRegionReport;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(V.a,{children:[Object(m.jsxs)(M.a,{bg:"dark",style:{color:"white"},children:[Object(m.jsx)(V.a.Toggle,{as:M.a.Header,eventKey:"0",children:"World reports"}),Object(m.jsx)(V.a.Collapse,{eventKey:"0",children:Object(m.jsx)(M.a.Body,{style:{backgroundColor:"white",color:"black"},children:Object(m.jsx)(J,{output:a})})})]}),Object(m.jsxs)(M.a,{bg:"dark",style:{color:"white",marginBottom:"250px"},children:[Object(m.jsx)(V.a.Toggle,{as:M.a.Header,eventKey:"1",onClick:o,children:"Individual countries reports"}),Object(m.jsx)(V.a.Collapse,{eventKey:"1",children:Object(m.jsx)(M.a.Body,{style:{backgroundColor:"white",color:"black"},children:0==c.length?Object(m.jsx)(L.a,{animation:"border"}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(W.a,{defaultActiveKey:"North America",onSelect:function(e){r(e)},children:c.map((function(e){return Object(m.jsx)(z.a,{eventKey:e,title:e,children:Object(m.jsx)(Q,{})},e)}))})})})})]})]})})})},$=function(){return Object(n.useContext)(f).homeState.loading?Object(m.jsx)(L.a,{animation:"border",variant:"dark"}):Object(m.jsx)("div",{children:Object(m.jsxs)(M.a,{children:[Object(m.jsxs)(M.a.Header,{children:[" ",Object(m.jsx)("h4",{children:"Welcome to Covid Tracker"})]}),Object(m.jsxs)(M.a.Body,{children:[Object(m.jsxs)(M.a.Subtitle,{style:{marginBottom:"10px"},children:[Object(m.jsxs)("span",{style:{border:"solid 2px red"},children:[" ","Note:"]})," ","to search States in the USA, please visit"," ",Object(m.jsx)("a",{href:"/advancedStats",style:{textDecoration:"none"},children:"Advanced Search"})]}),Object(m.jsx)(X,{})]})]})})},ee=function(){return Object(m.jsxs)("div",{style:{marginTop:"10px"},children:[Object(m.jsx)("h5",{children:"This website is purposely created to apply the practices of React in practical demands"}),Object(m.jsxs)("h6",{children:[" ",Object(m.jsx)("span",{style:{border:"solid red 2px"},children:"Note"}),": The project uses APIs, it doesnt guarantee the sustainability of fetching data in the future (if APIs' json structure dramatically modified)"]}),Object(m.jsx)("h5",{style:{color:"red"},children:"Documentation"}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsxs)("h6",{children:["Live Covid data (update every 10 minute) from"," ",Object(m.jsx)("a",{href:"https://www.worldometers.info/",style:{textDecoration:"none"},children:"Worldometers"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("h6",{children:["Countries list data from"," ",Object(m.jsx)("a",{href:"https://restcountries.eu/",style:{textDecoration:"none"},children:"Rest Countries"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("h6",{children:["Countries flag images from"," ",Object(m.jsx)("a",{href:"https://www.countryflags.io/",style:{textDecoration:"none"},children:"CountryFlagIO"})]})})]})]})},te=a(213),ae=a.n(te),ne=a(433),ce=a(437),oe=a(228),re=a(229),se=a(102),ie=a(99),le=a(232),de=function(e){var t=e.historicalDataInAdvancedStats,a=Object(n.useContext)(f).homeState.formattedHistoricalData,c=Object(n.useState)({x:window.innerWidth}),o=Object(i.a)(c,2),r=o[0],s=o[1],l=function(){return s({x:window.innerWidth})};return Object(n.useEffect)((function(){return window.onresize=l}),[]),a?Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(ne.a,{width:r.x>600?600:450,height:400,data:t||a.data,margin:{top:5,right:30,left:20,bottom:5},children:[Object(m.jsx)(ce.a,{strokeDasharray:"3 3"}),Object(m.jsx)(oe.a,{dataKey:"name"}),Object(m.jsx)(re.a,{}),Object(m.jsx)(se.a,{}),Object(m.jsx)(ie.a,{}),Object(m.jsx)(le.a,{type:"monotone",dataKey:"cases",stroke:"#8884d8",activeDot:{r:8}}),Object(m.jsx)(le.a,{type:"monotone",dataKey:"deaths",stroke:"red",activeDot:{r:8}}),Object(m.jsx)(le.a,{type:"monotone",dataKey:"recovery",stroke:"green",activeDot:{r:8}})]})}):null},je=function(e){var t=e.location,a=Object(n.useContext)(f),c=a.homeState,o=c.idvReport,r=c.loadingIdvReport,l=c.formattedHistoricalData,d=a.closeSearchResult,j=a.fetchIndividualReport,u=a.fetchHistoricalCountry,h=a.resetHistoricalData,b=ae.a.parse(t.search).name;Object(n.useEffect)((function(){b&&h()}),[b]);var O=Object(n.useState)(6),p=Object(i.a)(O,2),x=p[0],y=p[1];return Object(n.useEffect)((function(){d()}),[b]),Object(n.useEffect)((function(){b&&j(b)}),[b]),b?r?Object(m.jsx)(L.a,{animation:"border"}):Object(m.jsxs)("div",{children:[Object(m.jsxs)("h5",{children:[Object(m.jsxs)("span",{style:{color:"blue"},children:[" ",b]})," covid statistic"]}),Object(m.jsxs)(v.a,{className:"row-cols-1 row-cols-md-2 g-4 mx-auto ",children:[Object(m.jsxs)(C.a,{children:[Object(m.jsx)("h5",{children:"Today's Statistic"}),Object(m.jsx)(J,{output:o})]}),"USA"===b?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("h5",{children:"to search States in the USA, please visit Advanced Statistics!"})}):Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(C.a,{children:["You can search the last days of ",b," (default is 6-days ago period) ",Object(m.jsx)("br",{}),Object(m.jsxs)(S.a,{style:{display:"flex"},onSubmit:function(e){if(e.preventDefault(),x<3)return alert("please input days from 3");u(b,x)},children:[Object(m.jsx)(S.a.Control,{type:"number",name:"historical",value:x,onChange:function(e){if(isNaN(e.target.value))return alert("Please input only numbers");y(e.target.value)},style:{width:"300px"}}),Object(m.jsx)(H.a,{type:"submit",variant:"dark",style:{marginBottom:"20px"},children:"Search"})]}),l.name!==b?null:null==(null===l||void 0===l?void 0:l.data)?Object(m.jsx)(L.a,{animation:"border"}):Object(m.jsx)(de,{})]})})]}),Object(m.jsx)("div",{style:{marginBottom:"250px"}})]}):Object(m.jsx)(s.a,{to:"/"})},ue=a(444),he=a(231),be=(a(413),a(209)),Oe=a(438),pe=a(445),xe=function(){var e=Object(n.useContext)(f),t=e.homeState,a=t.allcountriesReports,c=t.searchCountriesResult,o=t.show,s=t.target,i=e.findSearchedCountry,l=e.closeSearchResult;return 0==a.length?Object(m.jsx)(L.a,{animation:"border"}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S.a,{onSubmit:function(e){return i(e,e.target.value)},children:Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)(be.a,{type:"text",placeholder:"Search country",onChange:function(e){return i(e,e.target.value)}}),Object(m.jsx)(H.a,{type:"submit",variant:"outline-success",children:"Search"})]})}),null!=s&&Object(m.jsx)(Oe.a,{show:o,target:s,placement:"bottom",children:0==c.length?Object(m.jsxs)(pe.a,{style:{backgroundColor:"black",color:"white"},children:[Object(m.jsx)(pe.a.Content,{style:{color:"white"},children:Object(m.jsx)("h5",{children:"No result"})}),Object(m.jsx)(H.a,{variant:"outline-primary",style:{float:"right"},onClick:l,children:"Close"})]}):Object(m.jsx)(pe.a,{style:{backgroundColor:"black"},children:Object(m.jsxs)("div",{style:{width:"300px",height:"".concat(c.length<5?"".concat(64*(c.length+1),"px"):"".concat(320,"px")),overflow:"auto"},children:[c.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(pe.a.Content,{className:"hoverLink",children:Object(m.jsx)(r.b,{style:{textDecoration:"none",fontSize:"20px"},to:"/country?name=".concat(e.country),className:"hoverLink",children:e.country})})})})),Object(m.jsx)(H.a,{variant:"outline-primary",style:{float:"right",marginRight:"30px"},onClick:l,children:"Close"})]})})})]})},me=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(ue.a,{bg:"dark",variant:"dark",expand:"lg",style:{position:"sticky"},fixed:"top",children:[Object(m.jsx)(r.b,{to:"/",style:{textDecoration:"none"},children:Object(m.jsx)(ue.a.Brand,{style:{marginLeft:"10px"},children:"Covid Tracker"})}),Object(m.jsx)(ue.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsxs)(ue.a.Collapse,{id:"basic-navbar-nav",children:[Object(m.jsxs)(he.a,{className:"mr-auto",children:[Object(m.jsx)(r.b,{to:"/",style:{marginLeft:"10px"},children:"Home"}),Object(m.jsx)(r.b,{to:"/advancedStats",style:{marginLeft:"10px",marginRight:"50px"},children:"Advanced Search"}),Object(m.jsx)(r.b,{to:"/documentation",style:{marginLeft:"10px",marginRight:"50px"},children:"Documentation"})]}),Object(m.jsx)(xe,{})]})]})})},fe=function(e,t){switch(t.type){case"SET_ALL_COUNTRIES_AND_PROVINCES":for(var a=[],n=Object.values(t.payload.res1),c=Object.values(t.payload.res2),o=n.length>c.length?n.length:c.length,r=0;r<o;r++)void 0!=n[r]?(a.indexOf(n[r].county)<0&&a.push(n[r].county),a.indexOf(n[r].country)<0&&a.push(n[r].country),a.indexOf(n[r].province)<0&&a.push(n[r].province),a.indexOf(c[r].county)<0&&a.push(c[r].county),a.indexOf(c[r].country)<0&&a.push(c[r].country),a.indexOf(c[r].province)<0&&a.push(c[r].province)):(a.indexOf(c[r].county)<0&&a.push(c[r].county),a.indexOf(c[r].country)<0&&a.push(c[r].country),a.indexOf(c[r].province)<0&&a.push(c[r].province));return Object(p.a)(Object(p.a)({},e),{},{allCountries_Provinces_Counties:a.filter((function(e){return null!==e})),loading:!1});case"SET_FETCHED_DATA":return Object(p.a)(Object(p.a)({},e),{},{output:{type:t.payload.output.type,param:t.payload.output.param,reportData:t.payload.data},loadingFetching:!1});case"RESET_OUTPUT":return Object(p.a)(Object(p.a)({},e),{},{output:{type:null,param:null,reportData:null}});case"RESET_HISTORICAL_DATA":return Object(p.a)(Object(p.a)({},e),{},{historical_data:{data:null}});case"SET_HISTORICAL_DATA":var s=[],i=Object.entries(t.payload.data.timeline).map((function(e){return[e[0],Object.entries(e[1])]})),l=i[0][1].length;if(console.log(l),3==i.length)for(var d=0;d<l;d++)s.push({name:"".concat(i[0][1][d][0]),cases:"".concat(i[0][1][d][1]),deaths:"".concat(i[1][1][d][1]),recovery:"".concat(i[2][1][d][1])});else for(var j=0;j<l;j++)s.push({name:"".concat(i[0][1][j][0]),cases:"".concat(i[0][1][j][1]),deaths:"".concat(i[1][1][j][1])});var u={data:s,name:t.payload.name};return console.log(s),Object(p.a)(Object(p.a)({},e),{},{historical_data:u});default:return e}},ye=Object(n.createContext)(),ge=function(e){var t=e.children,a=Object(n.useReducer)(fe,{loading:!0,allCountries_Provinces_Counties:[],output:{type:null,param:null,reportData:null},loadingFetching:!0,historical_data:{data:null,name:null}}),c=Object(i.a)(a,2),o=c[0],r=c[1];Object(n.useEffect)((function(){d.a.get("https://disease.sh/v3/covid-19/jhucsse").then((function(e){d.a.get(b).then((function(t){r({type:"SET_ALL_COUNTRIES_AND_PROVINCES",payload:{res1:e.data,res2:t.data}})}))}))}),[]);var s={advancedStats:o,findReportRegardless:function(e){d.a.get("".concat(b).concat(e)).then((function(t){console.log(t.data),r({type:"SET_FETCHED_DATA",payload:{data:Object.entries(t.data[0]),output:{param:e,type:"countyJhucsse"}}})})).catch((function(t){console.log("failed get states jhuc"),console.log("".concat(u).concat(e)),d.a.get("".concat(u).concat(e)).then((function(t){console.log(t.data),r({type:"SET_FETCHED_DATA",payload:{data:t.data,output:{param:e,type:"countryWorlddom"}}})})).catch((function(t){console.log("failed get country worldom"),console.log("".concat(O).concat(e)),d.a.get("".concat(O).concat(e)).then((function(t){console.log(t.data),r({type:"SET_FETCHED_DATA",payload:{data:t.data,output:{param:e,type:"countyWorlddom"}}})})).catch((function(t){console.log("server error"),r({type:"SET_FETCHED_DATA",payload:{data:null,output:{param:e,type:"fetch_failed"}}})}))}))}))},resetOuput:function(){r({type:"RESET_OUTPUT"})},fetchHistoricalData:function(e,t){console.log(e,t),d.a.get("".concat(h).concat(e,"?lastdays=").concat(t)).then((function(t){console.log(t.data),r({type:"SET_HISTORICAL_DATA",payload:{data:t.data,name:e}})})).catch((function(e){console.log(e)}))},resetHistoricalData:function(){r({type:"RESET_HISTORICAL_DATA"})}};return Object(m.jsx)(ye.Provider,{value:s,children:t})},ve=function(){var e=Object(n.useContext)(ye).advancedStats,t=e.output.reportData,a=e.loadingFetching;return 0==a&&null!=t?Object(m.jsx)("h5",{children:" Data unavailable"}):0==a&&null==t?Object(m.jsx)("h5",{children:" Loading"}):Object(m.jsx)("div",{style:{marginTop:"10px"},children:Object(m.jsx)("h5",{children:Object(m.jsx)("ul",{children:t.map((function(e){return"coordinates"===e[0]?null:"stats"===e[0]?Object.entries(e[1]).map((function(e){return Object(m.jsxs)("li",{children:[" ","".concat(e[0],": ")," ",Object(m.jsx)("span",{style:{color:"red"},children:null==e[1]?"unavailable":e[1]})]})})):Object(m.jsxs)("li",{children:["".concat(e[0],": ")," ",Object(m.jsx)("span",{style:{color:"red"},children:e[1]})]})}))})})})},Ce=function(){var e=Object(n.useContext)(ye),t=e.advancedStats,a=t.loading,c=t.allCountries_Provinces_Counties,o=t.output,r=o.type,s=o.param,l=o.reportData,d=t.loadingFetching,j=t.historical_data,u=j.data,h=(j.name,e.findReportRegardless),b=e.resetOuput,O=e.fetchHistoricalData,p=e.resetHistoricalData,x=Object(n.useState)(""),f=Object(i.a)(x,2),y=f[0],g=f[1],R=Object(n.useState)(null),T=Object(i.a)(R,2),_=T[0],E=T[1],A=Object(n.useState)(6),D=Object(i.a)(A,2),w=D[0],I=D[1];return a?Object(m.jsx)(L.a,{animation:"border"}):Object(m.jsx)("div",{style:{marginRight:12,marginBottom:"250px"},children:Object(m.jsxs)(v.a,{className:"row-cols-1 row-cols-md-2",style:{marginTop:"20px"},children:[Object(m.jsxs)(C.a,{children:[Object(m.jsx)("h5",{children:"Search states of the USA, country's name, province of any countries"}),Object(m.jsxs)(S.a.Text,{children:[" ",Object(m.jsx)("span",{style:{border:"red 2px solid"},children:" Note"}),": Chart statistic only available in some data"]}),Object(m.jsxs)(S.a,{onSubmit:function(e){b(),p(),e.preventDefault();var t=c.filter((function(e){return e.toLowerCase().replace(/\s/g,"").trim().includes(y.trim().toLowerCase().replace(/\s/g,""))}));if(0==t.length||t>1)return E("can not find ".concat(y));E(null),h(t[0]),O(t[0],w)},style:{display:"flex",marginTop:"10px"},children:[Object(m.jsx)(S.a.Control,{type:"text",placeHolder:"search",value:y,onChange:function(e){return g(e.target.value)},style:{width:"400px",marginRight:"5px"}}),Object(m.jsx)(H.a,{type:"submit",variant:"info",children:"Search"})]}),null!==_?Object(m.jsxs)(m.Fragment,{children:[" ",Object(m.jsx)("span",{style:{color:"red"},children:Object(m.jsx)("h5",{children:_})})]}):d?null:Object(m.jsx)(m.Fragment,{children:"fetch_failed"==r?Object(m.jsx)("h5",{children:"Data unavailable at moment"}):Object(m.jsx)(m.Fragment,{children:"countryWorlddom"==r||"countyWorlddom"==r?Object(m.jsx)(J,{output:l}):Object(m.jsx)(ve,{})})})]}),u&&null!==r&&("countyJhucsse"==r||"countryWorlddom"==r)&&Object(m.jsxs)(C.a,{children:["Only avalable for some data!",Object(m.jsxs)(S.a,{style:{display:"flex",marginBottom:"20px"},onSubmit:function(e){e.preventDefault(),O(s,w)},children:[Object(m.jsx)(S.a.Control,{type:"number",placeHolder:"search last days",value:w,onChange:function(e){return I(e.target.value)},style:{width:"400px"}}),Object(m.jsxs)(H.a,{type:"submit",variant:"dark",children:["Search"," "]})]}),Object(m.jsx)("h1",{children:"here"}),null!==u&&Object(m.jsx)(de,{historicalDataInAdvancedStats:u})]})]})})};var Se=function(){return Object(m.jsx)(y,{children:Object(m.jsx)(ge,{children:Object(m.jsxs)(r.a,{basename:"/covid_tracker",children:[Object(m.jsx)(me,{}),Object(m.jsxs)(s.d,{children:[Object(m.jsx)(q,{exact:!0,path:"/",component:$}),Object(m.jsx)(q,{exact:!0,path:"/documentation",component:ee}),Object(m.jsx)(q,{exact:!0,path:"/advancedStats",component:Ce}),Object(m.jsx)(q,{path:"/country",component:je})]})]})})})},Re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,448)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))};a(414);o.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(Se,{})}),document.getElementById("root")),Re()}},[[415,1,2]]]);
//# sourceMappingURL=main.e27fcd11.chunk.js.map