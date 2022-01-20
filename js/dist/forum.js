(()=>{var o={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)o.o(n,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const n=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/app"];var s=o.n(r);const a=flarum.core.compat["common/Model"];var i=o.n(a);const e=flarum.core.compat["common/models/Discussion"];var c=o.n(e);const l=flarum.core.compat["forum/components/IndexPage"];var u=o.n(l);const f=flarum.core.compat["forum/components/NotificationGrid"];var p=o.n(f);const b=flarum.core.compat["common/components/Badge"];var d=o.n(b);const g=flarum.core.compat["common/components/Button"];var w=o.n(g);const _=flarum.core.compat["forum/components/DiscussionPage"];var v=o.n(_);const y=flarum.core.compat["forum/utils/DiscussionControls"];var h=o.n(y);function x(){return x=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])}return o},x.apply(this,arguments)}function S(o,t){return S=Object.setPrototypeOf||function(o,t){return o.__proto__=t,o},S(o,t)}function P(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,S(o,t)}const N=flarum.core.compat["common/components/Dropdown"];var O=o.n(N);const k=flarum.core.compat["common/components/Tooltip"];var M=o.n(k);const B=flarum.core.compat["common/helpers/icon"];var j=o.n(B);const D=flarum.core.compat["common/utils/extractText"];var I=o.n(D);const T=flarum.core.compat["common/utils/classList"];var A=o.n(T);const L=flarum.core.compat["common/Component"];var R=function(o){function t(){return o.apply(this,arguments)||this}return P(t,o),t.prototype.view=function(){return m("button",{className:"SubscriptionMenuItem hasIcon",onclick:this.attrs.onclick},this.attrs.active?j()("fas fa-check",{className:"Button-icon"}):"",m("span",{className:"SubscriptionMenuItem-label"},j()(this.attrs.icon,{className:"Button-icon"}),m("strong",null,this.attrs.label),m("span",{className:"SubscriptionMenuItem-description"},this.attrs.description)))},t}(o.n(L)()),C=function(o){function t(){return o.apply(this,arguments)||this}P(t,o);var n=t.prototype;return n.oninit=function(t){o.prototype.oninit.call(this,t),this.options=[{subscription:null,icon:"far fa-star",label:s().translator.trans("flarum-subscriptions.forum.sub_controls.not_following_button"),description:s().translator.trans("flarum-subscriptions.forum.sub_controls.not_following_text")},{subscription:"follow",icon:"fas fa-star",label:s().translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),description:s().translator.trans("flarum-subscriptions.forum.sub_controls.following_text")},{subscription:"ignore",icon:"far fa-eye-slash",label:s().translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),description:s().translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_text")}]},n.view=function(){var o=this,t=this.attrs.discussion,n=t.subscription(),r=s().translator.trans("flarum-subscriptions.forum.sub_controls.follow_button"),a="far fa-star",i="SubscriptionMenu-button--"+n;switch(n){case"follow":r=s().translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),a="fas fa-star";break;case"ignore":r=s().translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),a="far fa-eye-slash"}var e=s().session.user.preferences(),c=e.notify_newPost_email,l=e.notify_newPost_alert,u=I()(s().translator.trans(c?"flarum-subscriptions.forum.sub_controls.notify_email_tooltip":"flarum-subscriptions.forum.sub_controls.notify_alert_tooltip")),f=(c||l)&&null===n,p=m(w(),{className:A()("Button","SubscriptionMenu-button",i),icon:a,onclick:this.saveSubscription.bind(this,t,-1!==["follow","ignore"].indexOf(n)?null:"follow")},r);return m("div",{className:"Dropdown ButtonGroup SubscriptionMenu"},f?m(M(),{text:u,position:"bottom"},p):p,m("button",{className:A()("Dropdown-toggle Button Button--icon",i),"data-toggle":"dropdown"},j()("fas fa-caret-down",{className:"Button-icon"})),m("ul",{className:"Dropdown-menu dropdown-menu Dropdown-menu--right"},this.options.map((function(r){return m("li",null,R.component(x({},r,{onclick:o.saveSubscription.bind(o,t,r.subscription),active:n===r.subscription})))}))))},n.saveSubscription=function(o,t){o.save({subscription:t}),this.$(".SubscriptionMenu-button").tooltip("hide")},t}(O());const G=flarum.core.compat["common/components/LinkButton"];var F=o.n(G);const q=flarum.core.compat["forum/states/DiscussionListState"];var z=o.n(q);const U=flarum.core.compat["forum/states/GlobalSearchState"];var $=o.n(U);const E=flarum.core.compat["forum/components/SettingsPage"];var H=o.n(E);const J=flarum.core.compat["common/components/Switch"];var K=o.n(J);const Q=flarum.core.compat["forum/components/Notification"];var V=function(o){function t(){return o.apply(this,arguments)||this}P(t,o);var n=t.prototype;return n.icon=function(){return"fas fa-star"},n.href=function(){var o=this.attrs.notification,t=o.subject(),n=o.content()||{};return s().route.discussion(t,n.postNumber)},n.content=function(){return s().translator.trans("flarum-subscriptions.forum.notifications.new_post_text",{user:this.attrs.notification.fromUser()})},t}(o.n(Q)());s().initializers.add("subscriptions",(function(){s().routes.following={path:"/following",component:u()},s().notificationComponents.newPost=V,c().prototype.subscription=i().attribute("subscription"),(0,n.extend)(c().prototype,"badges",(function(o){var t;switch(this.subscription()){case"follow":t=d().component({label:s().translator.trans("flarum-subscriptions.forum.badge.following_tooltip"),icon:"fas fa-star",type:"following"});break;case"ignore":t=d().component({label:s().translator.trans("flarum-subscriptions.forum.badge.ignoring_tooltip"),icon:"far fa-eye-slash",type:"ignoring"})}t&&o.add("subscription",t)})),(0,n.extend)(h(),"userControls",(function(o,t,n){if(s().session.user&&!(n instanceof v())){var r={none:{label:s().translator.trans("flarum-subscriptions.forum.discussion_controls.follow_button"),icon:"fas fa-star",save:"follow"},follow:{label:s().translator.trans("flarum-subscriptions.forum.discussion_controls.unfollow_button"),icon:"far fa-star",save:null},ignore:{label:s().translator.trans("flarum-subscriptions.forum.discussion_controls.unignore_button"),icon:"fas fa-eye",save:null}},a=t.subscription()||"none";o.add("subscription",w().component({icon:r[a].icon,onclick:t.save.bind(t,{subscription:r[a].save})},r[a].label))}})),(0,n.extend)(v().prototype,"sidebarItems",(function(o){if(s().session.user){var t=this.discussion;o.add("subscription",C.component({discussion:t}),80)}})),(0,n.extend)(u().prototype,"navItems",(function(o){if(s().session.user){var t=s().search.stickyParams();o.add("following",F().component({href:s().route("following",t),icon:"fas fa-star"},s().translator.trans("flarum-subscriptions.forum.index.following_link")),50)}})),(0,n.extend)(u().prototype,"setTitle",(function(){"following"===s().current.get("routeName")&&s().setTitle(s().translator.trans("flarum-subscriptions.forum.following.meta_title_text"))})),(0,n.extend)($().prototype,"params",(function(o){o.onFollowing="following"===s().current.get("routeName")})),(0,n.extend)(z().prototype,"requestParams",(function(o){this.params.onFollowing&&(o.filter.subscription="following")})),(0,n.extend)(H().prototype,"notificationsItems",(function(o){var t=this;o.add("followAfterReply",K().component({state:this.user.preferences().followAfterReply,onchange:function(o){t.followAfterReplyLoading=!0,t.user.savePreferences({followAfterReply:o}).then((function(){t.followAfterReplyLoading=!1,m.redraw()}))},loading:this.followAfterReplyLoading},s().translator.trans("flarum-subscriptions.forum.settings.follow_after_reply_label")))})),(0,n.extend)(p().prototype,"notificationTypes",(function(o){o.add("newPost",{name:"newPost",icon:"fas fa-star",label:s().translator.trans("flarum-subscriptions.forum.settings.notify_new_post_label")})}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map