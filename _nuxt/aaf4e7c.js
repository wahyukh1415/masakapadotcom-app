(window.webpackJsonp=window.webpackJsonp||[]).push([[14,13],{333:function(t,e,n){"use strict";var r=n(75),l=n.n(r).a.create({baseURL:"https://masak-apa-tomorisakura.vercel.app/api"});e.a=l},336:function(t,e,n){"use strict";n.r(e);n(338);var r={name:"TeaserColumn",props:{rows:{type:Number,required:!0,validator:function(t){return t>=1&&t<=6}},action:{type:String,default:""},title:{type:String,required:""},thumb:{type:String,required:""},difficulty:{type:String,required:""},time:{type:String,required:""},serving:{type:String,required:""}},computed:{classList:function(){return"md:w-1/".concat(this.rows)},renderAction:function(){return""!==this.action}},methods:{onClick:function(){this.$emit("clicked")}}},l=n(16),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full w-5/6 lg:w-1/3 p-6 flex flex-col flex-grow flex-shrink drop-shadow-md",class:t.classList},[e("div",{staticClass:"flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"},[e("a",{staticClass:"flex flex-wrap no-underline hover:no-underline",attrs:{href:"#"}},[e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[e("img",{staticClass:"text-center",attrs:{src:t.thumb,alt:""}})]),t._v(" "),e("div",{staticClass:"w-full font-bold text-xl text-gray-800 px-6"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6 mt-2"},[t._v("\n        Tingkat kesulitan: "+t._s(t.difficulty)+"\n      ")]),t._v(" "),e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[t._v("\n        Waktu untuk memasak: "+t._s(t.time)+"\n      ")]),t._v(" "),e("p",{staticClass:"w-full text-gray-600 text-xs md:text-sm px-6"},[t._v("\n        Saran Penyajian: "+t._s(t.serving)+"\n      ")])])]),t._v(" "),t.renderAction?e("div",{staticClass:"flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow py-1 px-6"},[e("div",{staticClass:"flex items-center justify-end"},[e("button",{staticClass:"mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-md my-6 py-4 px-8 shadow-lg",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v("\n        "+t._s(t.action)+"\n      ")])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,n){"use strict";var r=n(10),l=n(5),o=n(4),c=n(117),f=n(18),d=n(12),m=n(223),h=n(48),x=n(89),v=n(222),w=n(3),y=n(90).f,_=n(38).f,C=n(17).f,k=n(339),N=n(224).trim,R="Number",I=l.Number,S=I.prototype,E=l.TypeError,T=o("".slice),A=o("".charCodeAt),L=function(t){var e=v(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,r,l,o,c,f,code,d=v(t,"number");if(x(d))throw E("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=N(d),43===(e=A(d,0))||45===e){if(88===(n=A(d,2))||120===n)return NaN}else if(48===e){switch(A(d,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+d}for(c=(o=T(d,2)).length,f=0;f<c;f++)if((code=A(o,f))<48||code>l)return NaN;return parseInt(o,r)}return+d};if(c(R,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var j,F=function(t){var e=arguments.length<1?0:I(L(t)),n=this;return h(S,n)&&w((function(){k(n)}))?m(Object(e),n,F):e},M=r?y(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;M.length>D;D++)d(I,j=M[D])&&!d(F,j)&&C(F,j,_(I,j));F.prototype=S,S.constructor=F,f(l,R,F,{constructor:!0})}},339:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},341:function(t,e,n){"use strict";n.r(e);n(30);var r=n(9),l=(n(36),n(37),n(336)),o=n(333),c={name:"Teasers",components:{"teaser-column":l.default},data:function(){return{showRecipe:[]}},mounted:function(){this.fetchLatestRecipe()},methods:{fetchLatestRecipe:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,Object(o.a)({url:"/recipes",method:"get"}).then((function(e){var data=e.data;"allRecipe"===n.$route.name?data.results.length%2==0?t.showRecipe=data.results.slice(0,data.results.length-1):t.showRecipe=data.results:t.showRecipe=data.results.slice(0,3)})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},toDetail:function(t){this.$router.push({name:"detailRecipe",query:{key:t}})}}},f=n(16),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-gray-100 border-b py-8"},[e("div",{staticClass:"container mx-auto flex flex-wrap pt-4 pb-12"},[e("h1",{staticClass:"w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"},[t._v("\n      "+t._s("allRecipe"===t.$route.name?"Semua Resep":"Rekomendasi Resep")+"\n    ")]),t._v(" "),t._m(0),t._v(" "),t.showRecipe.length?e("div",{staticClass:"w-full flex flex-wrap"},t._l(t.showRecipe,(function(n,r){return e("teaser-column",{key:r,attrs:{rows:3,title:n.title,thumb:n.thumb,difficulty:n.difficulty,time:n.times,serving:n.serving,action:"Detail"},on:{clicked:function(e){return t.toDetail(n.key)}}})})),1):e("div",{staticClass:"mx-auto"},[e("svg",{staticClass:"animate-spin h-5 w-5 mr-3 ...",attrs:{viewBox:"0 0 24 24"}}),t._v(" "),e("p",{staticClass:"text-gray-600 text-center font-bold mb-3"},[t._v("\n        Menu Masih Kosong\n      ")])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"w-full mb-4"},[t("div",{staticClass:"h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TeaserColumn:n(336).default})}}]);