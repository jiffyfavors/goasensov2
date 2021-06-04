(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{377:function(t,e,n){},456:function(t,e,n){"use strict";var o=n(377);n.n(o).a},483:function(t,e,n){"use strict";n.r(e);n(40),n(23),n(6),n(4);var o=n(132),r=n.n(o),c=(n(197),n(29)),l=(n(39),n(9),n(20)),d=(n(326),n(317)),v=n.n(d),m={props:{data:{type:Object,default:null},merchant:{type:Object,default:null}},data:function(){return{current_data:{},qty:1,snackbar:!1,add_on_data:{},timeout:2500,dialog:!1,notifications:!1,sound:!0,widgets:!1,radios:!0,instructions:"",isExist:!1}},computed:{cartMerchant:function(){return this.$store.getters["cart/getStoreID"]},cartSize:function(){return this.$store.getters["cart/getCartItemCount"]}},methods:{addClean:function(data){return data=v()(data),Object.entries(data).map((function(t){var e=Object(l.a)(t,2),n=e[0],o=e[1];Array.isArray(o)&&o.length<=0&&delete data[n],0===Object.keys(o).length&&o.constructor===Object&&delete data[n]})),data},isEmpty:function(t){var e=Object.assign({},t);for(var n in e)if(t.hasOwnProperty(n))return!1;return!0},saveIsExist:function(){this.isExist=!1,this.$store.commit("cart/clearCart");var data={business:this.merchant,item:{info:this.current_data,qty:this.qty,add_ons:this.addClean(this.add_on_data),instructions:this.instructions}};this.$store.commit("cart/add",data),this.snackbar=!0},addToCart:function(){if(this.dialog=!1,this.merchant.id===this.cartMerchant.id||this.cartSize<1){var data={business:this.merchant,item:{info:this.current_data,qty:this.qty,add_ons:this.addClean(this.add_on_data),instructions:this.instructions}};this.$store.commit("cart/add",data),this.snackbar=!0}else this.isExist=!0},generateFilter:function(i){var t=parseFloat(i.price),e=new Intl.NumberFormat("en-PH",{style:"currency",currency:"PHP",minimumFractionDigits:2,currencyDisplay:"symbol"}).format(Math.round(t));return i.name+"(+ "+e+")"},generateAddOns:function(){for(var t={},i=0;i<this.current_data.options.length;i++)t[this.current_data.options[i].name.replace(" ","").toLowerCase()]=[];this.add_on_data=t}}},_=n(17),f=n(45),h=n.n(f),y=n(206),k=n(386),w=n(297),x=n(473),C=n(474),V=n(402),I=n(398),L=n(294),O=n(200),S=n(410),T=n(295),E=n(391),F=n(359),P=n(389),$=n(296),j=n(453),A=n(454),B=n(373),D=n(404),M=n(471),z=n(353),H=n(362),R=n(304),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[n("v-layout",{attrs:{wrap:"","align-center":""}},t._l(t.data.values,(function(e){return n("v-flex",{key:t.data.name+"_"+e.id,staticClass:"pa-1",attrs:{xs12:"",md4:"",sm4:"",lg4:""}},[n("v-card",{attrs:{"max-width":"100%",outlined:""},on:{click:function(n){n.stopPropagation(),t.current_data=e,t.generateAddOns(),t.dialog=!0}}},[n("v-list-item",{attrs:{dense:""}},[n("v-list-item-content",[n("h3",[n("strong",[t._v(t._s(e.name))])]),t._v(" "),n("span",{staticStyle:{"font-style":"italic"}},[n("small",[t._v(t._s(e.desc))])]),t._v(" "),n("span",{staticClass:"caption grey--text"},[t._v("From")]),t._v(" "),n("div",{staticClass:"ml-2 red--text subtitle-1"},[n("strong",[t._v(t._s(t._f("toPHP")(e.base_price))+" ")])])]),t._v(" "),e.img.length>0?n("v-list-item-avatar",{attrs:{tile:"",size:"100"}},[n("v-img",{attrs:{src:e.img}})],1):t._e()],1)],1)],1)})),1),t._v(" "),t.isEmpty(t.current_data)?t._e():n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"rgba(100,115,201)"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Add to Cart")]),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[n("strong",[t._v(t._s(t.current_data.name))])]),t._v(" "),n("v-list-item-subtitle",[n("span",{staticClass:"caption grey--text"},[t._v("From")]),t._v(" "),n("span",{staticClass:"red--text"},[t._v(t._s(t._f("toPHP")(t.current_data.base_price)))])])],1)],1),t._v(" "),n("v-divider"),t._v(" "),t._l(t.current_data.options,(function(e,o){return n("v-list",{key:o,attrs:{dense:"",subheader:""}},[1==e.min&&1==e.max?n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.name))]),t._v(" "),n("v-list-item-subtitle",[t._v("One is required")]),t._v(" "),n("v-radio-group",{attrs:{mandatory:""},model:{value:t.add_on_data[e.name.replace(" ","").toLowerCase()],callback:function(n){t.$set(t.add_on_data,e.name.replace(" ","").toLowerCase(),n)},expression:"\n                  add_on_data[item.name.replace(' ', '').toLowerCase()]\n                "}},t._l(e.values,(function(i,e){return n("v-radio",{key:e,attrs:{label:t.generateFilter(i),value:i}})})),1)],1)],1):t._e(),t._v(" "),e.max>1?n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                "+t._s(e.name)+" - Optional\n              ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n                Select up to "+t._s(e.max)+"\n              ")]),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"6",xs:"12"}},t._l(e.values,(function(i,o){return n("v-checkbox",{key:o,attrs:{dense:"",multiple:"",label:t.generateFilter(i),value:i,disabled:t.add_on_data[e.name.replace(" ","").toLowerCase()].length===e.max&&-1===t.add_on_data[e.name.replace(" ","").toLowerCase()].indexOf(i)},model:{value:t.add_on_data[e.name.replace(" ","").toLowerCase()],callback:function(n){t.$set(t.add_on_data,e.name.replace(" ","").toLowerCase(),n)},expression:"\n                    add_on_data[item.name.replace(' ', '').toLowerCase()]\n                  "}})})),1)],1)],1):t._e(),t._v(" "),n("v-divider")],1)})),t._v(" "),n("v-divider"),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("Special Instruction")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n                e.g Allergy to some ingredients\n              ")]),t._v(" "),n("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"Instruction",value:"",placeholder:"Please provide instruction if any"},model:{value:t.instructions,callback:function(e){t.instructions=e},expression:"instructions"}})],1)],1)],1),t._v(" "),n("v-toolbar",{staticClass:"shopresponsive",attrs:{dense:"","max-width":"100%"}},[n("span",{staticClass:"caption grey--text"},[t._v(" Qty ")]),t._v(" "),n("v-icon",{staticClass:"ma-2 white--text",attrs:{color:"green"},on:{click:function(e){t.qty=t.qty<1?1:t.qty-1}}},[t._v("\n            mdi-minus\n          ")]),t._v("\n          "+t._s(t.qty)+"\n          "),n("v-icon",{staticClass:"ma-2 white--text",attrs:{color:"green"},on:{click:function(e){t.qty=t.qty+1}}},[t._v("\n            mdi-plus\n          ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{tile:"",disabled:t.qty<1,outlined:"",color:"red"},on:{click:function(e){return e.stopPropagation(),t.addToCart(e)}}},[t._v("\n            Add to Cart\n          ")])],1)],2)],1)],1),t._v(" "),n("v-snackbar",{attrs:{color:"blue",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    Item added to cart\n  ")]),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.isExist,callback:function(e){t.isExist=e},expression:"isExist"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n          Different Store\n        ")]),t._v(" "),n("v-card-text",[t._v("\n          There are items in your cart from different merchant. Do you want\n          replace cart item?\n        ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.isExist=!1}}},[t._v("\n            Cancel\n          ")]),t._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.saveIsExist}},[t._v("\n            Ok\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null),J=component.exports;h()(component,{VBtn:y.a,VCard:k.a,VCardActions:w.a,VCardText:w.c,VCardTitle:w.d,VCheckbox:x.a,VCol:C.a,VDialog:V.a,VDivider:I.a,VFlex:L.a,VIcon:O.a,VImg:S.a,VLayout:T.a,VList:E.a,VListItem:F.a,VListItemAvatar:P.a,VListItemContent:$.b,VListItemSubtitle:$.c,VListItemTitle:$.d,VRadio:j.a,VRadioGroup:A.a,VRow:B.a,VSnackbar:D.a,VSpacer:M.a,VTextarea:z.a,VToolbar:H.a,VToolbarTitle:R.a});var N={components:{FoodItem:J,Loading:r.a},layout:"area",asyncData:function(t){var e=t.app,n=t.params,o=t.error;try{var r=e.$fireStore;return new c.GeoCollectionReference(r.collection("merchant")).where("url","==",n.id).get().then((function(data){var t=data.docs[0].data();return r.collection("foods").where("owner","==",data.docs[0].id).get().then((function(e){var o=[];e.docs.forEach((function(t){var e=t.data();e.id=t.id,e.owner=data.docs[0].id,o.push(e)}));var menu=[],r=[];t.menu.forEach((function(t){var e=[];t.values.forEach((function(t){r.push(t),o.forEach((function(n){n.id===t&&e.push(n)}))})),menu.push({name:t.name,values:e.sort((function(a,b){return a.name<b.name?-1:a.name>b.name?1:0}))})})),menu.push({name:"Others",values:o.filter((function(a){return!r.includes(a.id)})).sort((function(a,b){return a.name<b.name?-1:a.name>b.name?1:0}))});var c=t.delivery_time;return void 0===c&&(c={open:"9:00:00",close:"19:00:00"}),{isLoading:!1,business:{id:data.docs[0].id,business_name:t.business_name,branch:t.branch,backdrop:t.backdrop,logo:t.logo,menu:menu.sort((function(a,b){return a.name<b.name?-1:a.name>b.name?1:0})),rates:t.rates,location:t.coordinates,foods:o,delivery:c},sharing:{url:"https://m.jiffyfavors.com/resto/"+n.id,title:"Order your ".concat(t.business_name," - ").concat(t.branch," Food Online at Jiffy Favors"),description:"".concat(t.business_name," - ").concat(t.branch," Food Menu & Online Ordering"),hashtags:"jiffyfavors,food,delivery,onlineorder"},networks:[{network:"facebook",name:"Facebook",icon:"mdi-facebook",color:"#1877f2"},{network:"email",name:"Email",icon:"mdi-gmail",color:"red"},{network:"skype",name:"Skype",icon:"mdi-skype-business",color:"#00aff0"},{network:"sms",name:"SMS",icon:"mdi-android-messages",color:"#333333"},{network:"telegram",name:"Telegram",icon:"mdi-telegram",color:"#0088cc"},{network:"twitter",name:"Twitter",icon:"mdi-twitter",color:"#1da1f2"},{network:"whatsapp",name:"Whatsapp",icon:"mdi-whatsapp",color:"#25d366"}]}})).catch((function(t){return o({statusCode:404,message:"Blog not found"})}))})).catch((function(t){return console.log(t),o({statusCode:404,message:"Blog not found"})}))}catch(t){return console.log(t),o({statusCode:404,message:"Blog not found"})}},data:function(){return{isLoading:!0,business:null,dialog:!1,tab:null}},head:function(){var t=this.business,e="https://m.jiffyfavors.com"+this.$route.fullPath;return{title:"".concat(t.business_name," - Menu and Food Delivery"),meta:[{hid:"description",name:"description",content:"".concat(t.business_name," ").concat(t.branch,"- Online Food Ordering")},{hid:"og:type",name:"og:type",content:"restaurant.menu"},{hid:"og:title",name:"og:title",content:"Food Menu|Order Online - ".concat(t.business_name," ").concat(t.branch)},{hid:"og:description",name:"og:description",content:"Menu for ".concat(t.business_name," ").concat(t.branch,"- Order Now. Pay COD!")},{hid:"og:image",name:"og:image",content:"".concat(t.logo)},{hid:"og:url",name:"og:url",content:e}],link:[{rel:"icon",type:"image/png",href:"".concat(t.logo)}]}},computed:{cartSize:function(){return this.$store.getters["cart/getCartItemCount"]},itemCount:function(){return this.$store.getters["cart/getCartItemCount"]},totalPrice:function(){return this.$store.getters["cart/getTotal"]}},watch:{cartSize:function(){var t=this;this.cartSize>0&&this.$nextTick((function(){t.shake()}))}},methods:{scrollTo:function(){document.getElementById("scrolling-techniques-3").scroll({top:0,left:0,behavior:"smooth"})},shake:function(){document.getElementById("cart").classList.add("shake"),setTimeout((function(){document.getElementById("cart").classList.remove("shake")}),1500)}}},G=(n(456),n(129)),Q=n(467),W=n(412),K=n(469),U=n(470),X=n(360),Y=n(399),Z=n(109),tt=n(472),et=n(491),at=n(489),nt=n(464),ot=Object(_.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"e3"}},[n("loading",{attrs:{active:t.isLoading,loader:"bars","is-full-page":!0,color:"blue"},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),n("v-app-bar",{attrs:{color:"#00aff0",dark:"","shrink-on-scroll":"",prominent:"",src:t.business.backdrop,"fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3","scroll-threshold":"300",fixed:"",app:""},scopedSlots:t._u([{key:"img",fn:function(e){var o=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},"v-img",o,!1))]}},{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"show-arrows":"","center-active":"",centered:"",dense:"","background-color":"transparent",color:"basil",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.business.menu.filter((function(i){return i.values.length>0})),(function(e){return n("v-tab",{key:e.name,attrs:{dense:""},on:{click:function(e){return e.stopPropagation(),t.scrollTo()}}},[t._v(" "+t._s(e.name)+" ")])})),1)]},proxy:!0}])},[t._v(" "),n("v-btn",{attrs:{icon:"",to:"/food"}},[n("v-icon",[t._v(" mdi-arrow-left-bold")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.business.business_name))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{dark:"",icon:""}},"v-btn",r,!1),o),[n("v-icon",[t._v(" mdi-share-variant")])],1)]}}])},[t._v(" "),n("v-list",{attrs:{nav:"",flat:"","single-line":"",dense:""}},t._l(t.networks,(function(e){return n("ShareNetwork",{key:e.network,style:{backgroundColor:e.color},attrs:{network:e.network,url:t.sharing.url,title:t.sharing.title,description:t.sharing.description,hashtags:t.sharing.hashtags}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",{attrs:{small:"",color:e.color}},[t._v(" "+t._s(e.icon)+" ")])],1),t._v(" "),n("v-list-item-title",[t._v(t._s(e.name))])],1)],1)})),1)],1),t._v(" "),n("client-only",[t.cartSize>0?n("v-btn",{attrs:{id:"cart",icon:"",to:"/cart"}},[n("v-badge",{attrs:{color:"red"},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v(" "+t._s(t.cartSize)+" ")]},proxy:!0}],null,!1,1285045876)},[t._v(" "),n("v-icon",{attrs:{color:"white",dense:""}},[t._v(" mdi-cart-outline ")])],1)],1):t._e()],1)],1),t._v(" "),n("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-3","max-height":"100vh"}},[n("v-container",{attrs:{fluid:""}},[n("v-content",[n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.business.menu.filter((function(i){return i.values.length>0})),(function(e){return n("v-tab-item",{key:e.name},[n("client-only",[n("food-item",{attrs:{data:e,merchant:t.business}})],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,"cab0f31e",null);e.default=ot.exports;h()(ot,{VApp:G.a,VAppBar:Q.a,VBadge:W.a,VBtn:y.a,VContainer:K.a,VContent:U.a,VIcon:O.a,VImg:S.a,VList:E.a,VListItem:F.a,VListItemIcon:X.a,VListItemTitle:$.d,VMenu:Y.a,VSheet:Z.a,VSpacer:M.a,VTab:tt.a,VTabItem:et.a,VTabs:at.a,VTabsItems:nt.a,VToolbarTitle:R.a})}}]);