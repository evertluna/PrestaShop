window.module_card=function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=310)}({0:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},13:function(t,e){!function(){t.exports=window.jQuery}()},310:function(t,e,n){"use strict";(function(t){var e=n(64),o=function(t){return t&&t.__esModule?t:{default:t}}(e);/**
                   * 2007-2019 PrestaShop SA and Contributors
                   *
                   * NOTICE OF LICENSE
                   *
                   * This source file is subject to the Open Software License (OSL 3.0)
                   * that is bundled with this package in the file LICENSE.txt.
                   * It is also available through the world-wide-web at this URL:
                   * https://opensource.org/licenses/OSL-3.0
                   * If you did not receive a copy of the license and are unable to
                   * obtain it through the world-wide-web, please send an email
                   * to license@prestashop.com so we can send you a copy immediately.
                   *
                   * DISCLAIMER
                   *
                   * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
                   * versions in the future. If you wish to customize PrestaShop for your
                   * needs please refer to https://www.prestashop.com for more information.
                   *
                   * @author    PrestaShop SA <contact@prestashop.com>
                   * @copyright 2007-2019 PrestaShop SA and Contributors
                   * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
                   * International Registered Trademark & Property of PrestaShop SA
                   */
(0,t.$)(function(){(new o.default).init()})}).call(e,n(0))},64:function(t,e,n){"use strict";(function(t){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=window.$,l={on:function(t,e,n){document.addEventListener(t,function(t){void 0!==n?e.call(n,t):e(t)})},emitEvent:function(t,e){var n=document.createEvent(e);n.initEvent(t,!0,!0),document.dispatchEvent(n)}},a=function(){function e(){n(this,e),this.moduleActionMenuLinkSelector="button.module_action_menu_",this.moduleActionMenuInstallLinkSelector="button.module_action_menu_install",this.moduleActionMenuEnableLinkSelector="button.module_action_menu_enable",this.moduleActionMenuUninstallLinkSelector="button.module_action_menu_uninstall",this.moduleActionMenuDisableLinkSelector="button.module_action_menu_disable",this.moduleActionMenuEnableMobileLinkSelector="button.module_action_menu_enable_mobile",this.moduleActionMenuDisableMobileLinkSelector="button.module_action_menu_disable_mobile",this.moduleActionMenuResetLinkSelector="button.module_action_menu_reset",this.moduleActionMenuUpdateLinkSelector="button.module_action_menu_upgrade",this.moduleItemListSelector=".module-item-list",this.moduleItemGridSelector=".module-item-grid",this.moduleItemActionsSelector=".module-actions",this.moduleActionModalDisableLinkSelector="a.module_action_modal_disable",this.moduleActionModalResetLinkSelector="a.module_action_modal_reset",this.moduleActionModalUninstallLinkSelector="a.module_action_modal_uninstall",this.forceDeletionOption="#force_deletion",this.initActionButtons()}return i(e,[{key:"initActionButtons",value:function(){var t=this;r(document).on("click",this.forceDeletionOption,function(){var e=r(t.moduleActionModalUninstallLinkSelector,r("div.module-item-list[data-tech-name='"+r(this).attr("data-tech-name")+"']"));!0===r(this).prop("checked")?e.attr("data-deletion","true"):e.removeAttr("data-deletion")}),r(document).on("click",this.moduleActionMenuInstallLinkSelector,function(){return r("#modal-prestatrust").length&&r("#modal-prestatrust").modal("hide"),t._dispatchPreEvent("install",this)&&t._confirmAction("install",this)&&t._requestToController("install",r(this))}),r(document).on("click",this.moduleActionMenuEnableLinkSelector,function(){return t._dispatchPreEvent("enable",this)&&t._confirmAction("enable",this)&&t._requestToController("enable",r(this))}),r(document).on("click",this.moduleActionMenuUninstallLinkSelector,function(){return t._dispatchPreEvent("uninstall",this)&&t._confirmAction("uninstall",this)&&t._requestToController("uninstall",r(this))}),r(document).on("click",this.moduleActionMenuDisableLinkSelector,function(){return t._dispatchPreEvent("disable",this)&&t._confirmAction("disable",this)&&t._requestToController("disable",r(this))}),r(document).on("click",this.moduleActionMenuEnableMobileLinkSelector,function(){return t._dispatchPreEvent("enable_mobile",this)&&t._confirmAction("enable_mobile",this)&&t._requestToController("enable_mobile",r(this))}),r(document).on("click",this.moduleActionMenuDisableMobileLinkSelector,function(){return t._dispatchPreEvent("disable_mobile",this)&&t._confirmAction("disable_mobile",this)&&t._requestToController("disable_mobile",r(this))}),r(document).on("click",this.moduleActionMenuResetLinkSelector,function(){return t._dispatchPreEvent("reset",this)&&t._confirmAction("reset",this)&&t._requestToController("reset",r(this))}),r(document).on("click",this.moduleActionMenuUpdateLinkSelector,function(){return t._dispatchPreEvent("update",this)&&t._confirmAction("update",this)&&t._requestToController("update",r(this))}),r(document).on("click",this.moduleActionModalDisableLinkSelector,function(){return t._requestToController("disable",r(t.moduleActionMenuDisableLinkSelector,r("div.module-item-list[data-tech-name='"+r(this).attr("data-tech-name")+"']")))}),r(document).on("click",this.moduleActionModalResetLinkSelector,function(){return t._requestToController("reset",r(t.moduleActionMenuResetLinkSelector,r("div.module-item-list[data-tech-name='"+r(this).attr("data-tech-name")+"']")))}),r(document).on("click",this.moduleActionModalUninstallLinkSelector,function(e){r(e.target).parents(".modal").on("hidden.bs.modal",function(n){return t._requestToController("uninstall",r(t.moduleActionMenuUninstallLinkSelector,r("div.module-item-list[data-tech-name='"+r(e.target).attr("data-tech-name")+"']")),r(e.target).attr("data-deletion"))}.bind(e))})}},{key:"_getModuleItemSelector",value:function(){return r(this.moduleItemListSelector).length?this.moduleItemListSelector:this.moduleItemGridSelector}},{key:"_confirmAction",value:function(t,e){var n=r("#"+r(e).data("confirm_modal"));return 1!=n.length||(n.first().modal("show"),!1)}},{key:"_confirmPrestaTrust",value:function(t){var e=this,n=this._replacePrestaTrustPlaceholders(t);n.find(".pstrust-install").off("click").on("click",function(){var o=r(e.moduleActionMenuInstallLinkSelector,'.module-item[data-tech-name="'+t.module.attributes.name+'"]'),i=o.parent("form");r("<input>").attr({type:"hidden",value:"1",name:"actionParams[confirmPrestaTrust]"}).appendTo(i),o.click(),n.modal("hide")}),n.modal()}},{key:"_replacePrestaTrustPlaceholders",value:function(t){var e=r("#modal-prestatrust"),n=t.module.attributes;if("PrestaTrust"===t.confirmation_subject&&e.length){var o=n.prestatrust.status?"success":"warning";return n.prestatrust.check_list.property?(e.find("#pstrust-btn-property-ok").show(),e.find("#pstrust-btn-property-nok").hide()):(e.find("#pstrust-btn-property-ok").hide(),e.find("#pstrust-btn-property-nok").show(),e.find("#pstrust-buy").attr("href",n.url).toggle(null!==n.url)),e.find("#pstrust-img").attr({src:n.img,alt:n.name}),e.find("#pstrust-name").text(n.displayName),e.find("#pstrust-author").text(n.author),e.find("#pstrust-label").attr("class","text-"+o).text(n.prestatrust.status?"OK":"KO"),e.find("#pstrust-message").attr("class","alert alert-"+o),e.find("#pstrust-message > p").text(n.prestatrust.message),e}}},{key:"_dispatchPreEvent",value:function(e,n){var o=t.Event("module_card_action_event");return r(n).trigger(o,[e]),!1===o.isPropagationStopped()&&!1===o.isImmediatePropagationStopped()&&!1!==o.result}},{key:"_requestToController",value:function(t,e,n,i,a){var u=this,s=e.closest(this.moduleItemActionsSelector),c=e.closest("form"),d=r('<button class="btn-primary-reverse onclick unbind spinner "></button>'),m="//"+window.location.host+c.attr("action"),f=c.serializeArray();return"true"!==n&&!0!==n||f.push({name:"actionParams[deletion]",value:!0}),"true"!==i&&!0!==i||f.push({name:"actionParams[cacheClearEnabled]",value:0}),r.ajax({url:m,dataType:"json",method:"POST",data:f,beforeSend:function(){s.hide(),s.after(d)}}).done(function(e){if(void 0===(void 0===e?"undefined":o(e)))r.growl.error({message:"No answer received from server"});else{var n=Object.keys(e)[0];if(!1===e[n].status)void 0!==e[n].confirmation_subject&&u._confirmPrestaTrust(e[n]),r.growl.error({message:e[n].msg});else{r.growl.notice({message:e[n].msg});var i=u._getModuleItemSelector().replace(".",""),a=null;"uninstall"==t?(a=s.closest("."+i),a.remove(),l.emitEvent("Module Uninstalled","CustomEvent")):"disable"==t?(a=s.closest("."+i),a.addClass(i+"-isNotActive"),a.attr("data-active","0"),l.emitEvent("Module Disabled","CustomEvent")):"enable"==t&&(a=s.closest("."+i),a.removeClass(i+"-isNotActive"),a.attr("data-active","1"),l.emitEvent("Module Enabled","CustomEvent")),s.replaceWith(e[n].action_menu_html)}}}).fail(function(){var e=s.closest("module-item-list"),n=e.data("techName");r.growl.error({message:"Could not perform action "+t+" for module "+n})}).always(function(){s.fadeIn(),d.remove(),a&&a()}),!1}}]),e}();e.default=a}).call(e,n(13))}});