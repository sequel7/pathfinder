!function(e){e.fn.hoverIntent=function(t,n,o){var r,v,i,u,s={interval:100,sensitivity:6,timeout:0};s="object"==typeof t?e.extend(s,t):e.isFunction(n)?e.extend(s,{over:t,out:n,selector:o}):e.extend(s,{over:t,out:t,selector:n});var h=function(e){r=e.pageX,v=e.pageY},I=function(t,n){if(n.hoverIntent_t=clearTimeout(n.hoverIntent_t),Math.sqrt((i-r)*(i-r)+(u-v)*(u-v))<s.sensitivity)return e(n).off("mousemove.hoverIntent",h),n.hoverIntent_s=!0,s.over.apply(n,[t]);i=r,u=v,n.hoverIntent_t=setTimeout(function(){I(t,n)},s.interval)},a=function(t){var n=e.extend({},t),o=this;o.hoverIntent_t&&(o.hoverIntent_t=clearTimeout(o.hoverIntent_t)),"mouseenter"===t.type?(i=n.pageX,u=n.pageY,e(o).on("mousemove.hoverIntent",h),o.hoverIntent_s||(o.hoverIntent_t=setTimeout(function(){I(n,o)},s.interval))):(e(o).off("mousemove.hoverIntent",h),o.hoverIntent_s&&(o.hoverIntent_t=setTimeout(function(){!function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=!1,s.out.apply(t,[e])}(n,o)},s.timeout)))};return this.on({"mouseenter.hoverIntent":a,"mouseleave.hoverIntent":a},s.selector)}}(jQuery);
//# sourceMappingURL=jquery.hoverIntent.minified.js.map
