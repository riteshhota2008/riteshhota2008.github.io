jQuery(document).ready(function(e){function i(i){var d=e('<ul class="cd-slider-pagination"></ul>').insertAfter(i.find(".cd-slider-navigation"));return i.find(".cd-slider li").each(function(i){var s=e(0==i?'<li class="selected"></li>':"<li></li>"),l=e('<a href="#0"></a>').appendTo(s);s.appendTo(d),l.text(i+1)}),d.children("li")}function d(e,i,d){var s=e.find(".cd-slider .selected"),c=e.find(".cd-slider-pagination .selected");"undefined"==typeof d&&(d=s.index()+1),s.removeClass("selected"),e.find(".cd-slider li").eq(d).addClass("selected").prevAll().addClass("move-left"),c.removeClass("selected"),i.eq(d).addClass("selected"),l(e,e.find(".cd-slider li").eq(d))}function s(e,i,d){var s=e.find(".cd-slider .selected"),c=e.find(".cd-slider-pagination .selected");"undefined"==typeof d&&(d=s.index()-1),s.removeClass("selected"),e.find(".cd-slider li").eq(d).addClass("selected").removeClass("move-left").nextAll().removeClass("move-left"),c.removeClass("selected"),i.eq(d).addClass("selected"),l(e,e.find(".cd-slider li").eq(d))}function l(e,i){e.find(".cd-prev").toggleClass("inactive",i.is(":first-child")),e.find(".cd-next").toggleClass("inactive",i.is(":last-child"))}function c(e){var i=window.getComputedStyle(document.querySelector(".cd-slider"),"::before").getPropertyValue("content").replace(/"/g,"").replace(/'/g,"");return"mobile"==i||e.hasClass("cd-slider-active")}var n=e(".cd-single-item");n.each(function(){var t=e(this),a=i(t);l(t,t.find(".cd-slider li").eq(0)),t.find(".cd-slider").on("click",function(i){!t.hasClass("cd-slider-active")&&e(i.target).is(".cd-slider")&&(n.removeClass("cd-slider-active"),t.addClass("cd-slider-active").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){e("body,html").animate({scrollTop:t.offset().top},200)}))}),t.find(".cd-close").on("click",function(){t.removeClass("cd-slider-active")}),t.find(".cd-next").on("click",function(){d(t,a)}),t.find(".cd-prev").on("click",function(){s(t,a)}),t.find(".cd-slider").on("swipeleft",function(){var i=e(this),s=c(t);!i.find(".selected").is(":last-child")&&s&&d(t,a)}),t.find(".cd-slider").on("swiperight",function(){var i=e(this),d=c(t);!i.find(".selected").is(":first-child")&&d&&s(t,a)}),a.on("click",function(){var i=e(this);if(!i.hasClass("selected")){var l=i.index(),c=t.find(".cd-slider .selected").index();l>c?d(t,a,l):s(t,a,l)}})}),e(document).keyup(function(i){"37"==i.which&&e(".cd-slider-active").length>0&&!e(".cd-slider-active .cd-slider .selected").is(":first-child")?s(e(".cd-slider-active"),e(".cd-slider-active").find(".cd-slider-pagination li")):"39"==i.which&&e(".cd-slider-active").length&&!e(".cd-slider-active .cd-slider .selected").is(":last-child")?d(e(".cd-slider-active"),e(".cd-slider-active").find(".cd-slider-pagination li")):"27"==i.which&&n.removeClass("cd-slider-active")})});