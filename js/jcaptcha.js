!function(t, e) {
    void 0 === t && void 0 !== window && (t = window),
    "function" == typeof define && define.amd ? define([], function() {
        return t.jCaptcha = e()
    }) : "object" == typeof module && module.exports ? module.exports = e() : t.jCaptcha = e()
}(this, function() {
    "use strict";
    function t() {
        i = Math.round(8 * Math.random()) + 1,
        n = Math.round(8 * Math.random()) + 1,
        c = i + n
    }
    function e(t, e, a) {
        a || (t.insertAdjacentHTML("beforebegin", '<canvas class="'.concat(e.canvasClass, '"\n                    width="').concat(e.canvasStyle.width, '" height="').concat(e.canvasStyle.height, '">\n                </canvas>\n            ')),
        this.$captchaEl = document.querySelector(".".concat(e.canvasClass)),
        this.$captchaTextContext = this.$captchaEl.getContext("2d"),
        this.$captchaTextContext = Object.assign(this.$captchaTextContext, e.canvasStyle)),
        this.$captchaTextContext.clearRect(0, 0, e.canvasStyle.width, e.canvasStyle.height),
        this.$captchaTextContext.fillText("".concat(i, " + ").concat(n, " ").concat(e.requiredValue), 0, 0)
    }
    function a(t) {
        var e = 0 < arguments.length && void 0 !== t ? t : {};
        this.options = Object.assign({}, {
            el: ".jCaptcha",
            canvasClass: "jCaptchaCanvas",
            requiredValue: "*",
            resetOnError: !0,
            focusOnError: !0,
            clearOnSubmit: !0,
            callback: null,
            canvasStyle: {}
        }, e),
        this._init()
    }
    var c, i, n, s = 0;
    return a.prototype = {
        _init: function() {
            this.$el = document.querySelector(this.options.el),
            t(),
            e.call(this, this.$el, this.options)
        },
        validate: function() {
            s++,
            this.callbackReceived = this.callbackReceived || "function" == typeof this.options.callback,
            this.$el.value != c ? (this.callbackReceived && this.options.callback("error", this.$el, s),
            !0 === this.options.resetOnError && this.reset(),
            !0 === this.options.focusOnError && this.$el.focus()) : this.callbackReceived && this.options.callback("success", this.$el, s),
            !0 === this.options.clearOnSubmit && (this.$el.value = "")
        },
        reset: function() {
            t(),
            e.call(this, this.$el, this.options, !0)
        }
    },
    a
});
