!
function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    }: e(t)
} ("undefined" != typeof window ? window: this,
function(t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
        n = at.type(t);
        return "function" !== n && !at.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function r(t, e, n) {
        if (at.isFunction(e)) return at.grep(t,
        function(t, r) {
            return !! e.call(t, r, t) !== n
        });
        if (e.nodeType) return at.grep(t,
        function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (mt.test(e)) return at.filter(e, t, n);
            e = at.filter(e, t)
        }
        return at.grep(t,
        function(t) {
            return at.inArray(t, e) > -1 !== n
        })
    }
    function i(t, e) {
        do {
            t = t[e]
        } while ( t && 1 !== t . nodeType );
        return t
    }
    function o() {
        Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (Q.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() { (Q.addEventListener || "load" === t.event.type || "complete" === Q.readyState) && (o(), at.ready())
    }
    function s(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var r = "data-" + e.replace(St, "-$1").toLowerCase();
            if ("string" == typeof(n = t.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: Tt.test(n) ? at.parseJSON(n) : n)
                } catch(t) {}
                at.data(t, e, n)
            } else n = void 0
        }
        return n
    }
    function u(t) {
        var e;
        for (e in t) if (("data" !== e || !at.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
        return ! 0
    }
    function l(t, e, n, r) {
        if (Et(t)) {
            var i, o, a = at.expando,
            s = t.nodeType,
            u = s ? at.cache: t,
            l = s ? t[a] : t[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof e) return l || (l = s ? t[a] = J.pop() || at.guid++:a),
            u[l] || (u[l] = s ? {}: {
                toJSON: at.noop
            }),
            "object" != typeof e && "function" != typeof e || (r ? u[l] = at.extend(u[l], e) : u[l].data = at.extend(u[l].data, e)),
            o = u[l],
            r || (o.data || (o.data = {}), o = o.data),
            void 0 !== n && (o[at.camelCase(e)] = n),
            "string" == typeof e ? null == (i = o[e]) && (i = o[at.camelCase(e)]) : i = o,
            i
        }
    }
    function c(t, e, n) {
        if (Et(t)) {
            var r, i, o = t.nodeType,
            a = o ? at.cache: t,
            s = o ? t[at.expando] : at.expando;
            if (a[s]) {
                if (e && (r = n ? a[s] : a[s].data)) {
                    at.isArray(e) ? e = e.concat(at.map(e, at.camelCase)) : e in r ? e = [e] : (e = at.camelCase(e), e = e in r ? [e] : e.split(" ")),
                    i = e.length;
                    for (; i--;) delete r[e[i]];
                    if (n ? !u(r) : !at.isEmptyObject(r)) return
                } (n || (delete a[s].data, u(a[s]))) && (o ? at.cleanData([t], !0) : ot.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    function f(t, e, n, r) {
        var i, o = 1,
        a = 20,
        s = r ?
        function() {
            return r.cur()
        }: function() {
            return at.css(t, e, "")
        },
        u = s(),
        l = n && n[3] || (at.cssNumber[e] ? "": "px"),
        c = (at.cssNumber[e] || "px" !== l && +u) && At.exec(at.css(t, e));
        if (c && c[3] !== l) {
            l = l || c[3],
            n = n || [],
            c = +u || 1;
            do {
                o = o || ".5", c /= o, at.style(t, e, c + l)
            } while ( o !== ( o = s () / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)),
        i
    }
    function d(t) {
        var e = qt.split("|"),
        n = t.createDocumentFragment();
        if (n.createElement) for (; e.length;) n.createElement(e.pop());
        return n
    }
    function h(t, e) {
        var n, r, i = 0,
        o = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!o) for (o = [], n = t.childNodes || t; null != (r = n[i]); i++) ! e || at.nodeName(r, e) ? o.push(r) : at.merge(o, h(r, e));
        return void 0 === e || e && at.nodeName(t, e) ? at.merge([t], o) : o
    }
    function p(t, e) {
        for (var n, r = 0; null != (n = t[r]); r++) at._data(n, "globalEval", !e || at._data(e[r], "globalEval"))
    }
    function g(t) {
        jt.test(t.type) && (t.defaultChecked = t.checked)
    }
    function m(t, e, n, r, i) {
        for (var o, a, s, u, l, c, f, m = t.length,
        v = d(e), y = [], x = 0; m > x; x++) if ((a = t[x]) || 0 === a) if ("object" === at.type(a)) at.merge(y, a.nodeType ? [a] : a);
        else if (Pt.test(a)) {
            for (u = u || v.appendChild(e.createElement("div")), l = (Lt.exec(a) || ["", ""])[1].toLowerCase(), f = Ht[l] || Ht._default, u.innerHTML = f[1] + at.htmlPrefilter(a) + f[2], o = f[0]; o--;) u = u.lastChild;
            if (!ot.leadingWhitespace && Mt.test(a) && y.push(e.createTextNode(Mt.exec(a)[0])), !ot.tbody) for (o = (a = "table" !== l || Ot.test(a) ? "<table>" !== f[1] || Ot.test(a) ? 0 : u: u.firstChild) && a.childNodes.length; o--;) at.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (at.merge(y, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = v.lastChild
        } else y.push(e.createTextNode(a));
        for (u && v.removeChild(u), ot.appendChecked || at.grep(h(y, "input"), g), x = 0; a = y[x++];) if (r && at.inArray(a, r) > -1) i && i.push(a);
        else if (s = at.contains(a.ownerDocument, a), u = h(v.appendChild(a), "script"), s && p(u), n) for (o = 0; a = u[o++];) _t.test(a.type || "") && n.push(a);
        return u = null,
        v
    }
    function v() {
        return ! 0
    }
    function y() {
        return ! 1
    }
    function x() {
        try {
            return Q.activeElement
        } catch(t) {}
    }
    function b(t, e, n, r, i, o) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in e) b(t, s, n, r, e[s], o);
            return t
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = y;
        else if (!i) return t;
        return 1 === o && (a = i, i = function(t) {
            return at().off(t),
            a.apply(this, arguments)
        },
        i.guid = a.guid || (a.guid = at.guid++)),
        t.each(function() {
            at.event.add(this, e, i, r, n)
        })
    }
    function w(t, e) {
        return at.nodeName(t, "table") && at.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function C(t) {
        return t.type = (null !== at.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function F(t) {
        var e = Jt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function E(t, e) {
        if (1 === e.nodeType && at.hasData(t)) {
            var n, r, i, o = at._data(t),
            a = at._data(e, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) at.event.add(e, n, s[n][r])
            }
            a.data && (a.data = at.extend({},
            a.data))
        }
    }
    function T(t, e) {
        var n, r, i;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ot.noCloneEvent && e[at.expando]) {
                i = at._data(e);
                for (r in i.events) at.removeEvent(e, r, i.handle);
                e.removeAttribute(at.expando)
            }
            "script" === n && e.text !== t.text ? (C(e).text = t.text, F(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ot.html5Clone && t.innerHTML && !at.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && jt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected: "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }
    function S(t, e, n, r) {
        e = Z.apply([], e);
        var i, o, a, s, u, l, c = 0,
        f = t.length,
        d = f - 1,
        p = e[0],
        g = at.isFunction(p);
        if (g || f > 1 && "string" == typeof p && !ot.checkClone && Yt.test(p)) return t.each(function(i) {
            var o = t.eq(i);
            g && (e[0] = p.call(this, i, o.html())),
            S(o, e, n, r)
        });
        if (f && (l = m(e, t[0].ownerDocument, !1, t, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
            for (a = (s = at.map(h(l, "script"), C)).length; f > c; c++) o = l,
            c !== d && (o = at.clone(o, !0, !0), a && at.merge(s, h(o, "script"))),
            n.call(t[c], o, c);
            if (a) for (u = s[s.length - 1].ownerDocument, at.map(s, F), c = 0; a > c; c++) o = s[c],
            _t.test(o.type || "") && !at._data(o, "globalEval") && at.contains(u, o) && (o.src ? at._evalUrl && at._evalUrl(o.src) : at.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Qt, "")));
            l = i = null
        }
        return t
    }
    function k(t, e, n) {
        for (var r, i = e ? at.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || at.cleanData(h(r)),
        r.parentNode && (n && at.contains(r.ownerDocument, r) && p(h(r, "script")), r.parentNode.removeChild(r));
        return t
    }
    function A(t, e) {
        var n = at(e.createElement(t)).appendTo(e.body),
        r = at.css(n[0], "display");
        return n.detach(),
        r
    }
    function N(t) {
        var e = Q,
        n = te[t];
        return n || ("none" !== (n = A(t, e)) && n || (Zt = (Zt || at("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), (e = (Zt[0].contentWindow || Zt[0].contentDocument).document).write(), e.close(), n = A(t, e), Zt.detach()), te[t] = n),
        n
    }
    function D(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get: (this.get = e).apply(this, arguments)
            }
        }
    }
    function B(t) {
        if (t in ge) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = pe.length; n--;) if ((t = pe[n] + e) in ge) return t
    }
    function j(t, e) {
        for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++)(r = t[a]).style && (o[a] = at._data(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Dt(r) && (o[a] = at._data(r, "olddisplay", N(r.nodeName)))) : (i = Dt(r), (n && "none" !== n || !i) && at._data(r, "olddisplay", i ? n: at.css(r, "display"))));
        for (a = 0; s > a; a++)(r = t[a]).style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "": "none"));
        return t
    }
    function L(t, e, n) {
        var r = fe.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }
    function _(t, e, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += at.css(t, n + Nt[o], !0, i)),
        r ? ("content" === n && (a -= at.css(t, "padding" + Nt[o], !0, i)), "margin" !== n && (a -= at.css(t, "border" + Nt[o] + "Width", !0, i))) : (a += at.css(t, "padding" + Nt[o], !0, i), "padding" !== n && (a += at.css(t, "border" + Nt[o] + "Width", !0, i)));
        return a
    }
    function M(e, n, r) {
        var i = !0,
        o = "width" === n ? e.offsetWidth: e.offsetHeight,
        a = oe(e),
        s = ot.boxSizing && "border-box" === at.css(e, "boxSizing", !1, a);
        if (Q.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if ((0 > (o = ae(e, n, a)) || null == o) && (o = e.style[n]), ne.test(o)) return o;
            i = s && (ot.boxSizingReliable() || o === e.style[n]),
            o = parseFloat(o) || 0
        }
        return o + _(e, n, r || (s ? "border": "content"), i, a) + "px"
    }
    function q(t, e, n, r, i) {
        return new q.prototype.init(t, e, n, r, i)
    }
    function H() {
        return t.setTimeout(function() {
            me = void 0
        }),
        me = at.now()
    }
    function P(t, e) {
        var n, r = {
            height: t
        },
        i = 0;
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Nt[i],
        r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t),
        r
    }
    function O(t, e, n) {
        for (var r, i = (R.tweeners[e] || []).concat(R.tweeners["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, e, t)) return r
    }
    function R(t, e, n) {
        var r, i, o = 0,
        a = R.prefilters.length,
        s = at.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) return ! 1;
            for (var e = me || H(), n = Math.max(0, l.startTime + l.duration - e), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; a > o; o++) l.tweens[o].run(r);
            return s.notifyWith(t, [l, r, n]),
            1 > r && a ? n: (s.resolveWith(t, [l]), !1)
        },
        l = s.promise({
            elem: t,
            props: at.extend({},
            e),
            opts: at.extend(!0, {
                specialEasing: {},
                easing: at.easing._default
            },
            n),
            originalProperties: e,
            originalOptions: n,
            startTime: me || H(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var r = at.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(e) {
                var n = 0,
                r = e ? l.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return e ? (s.notifyWith(t, [l, 1, 0]), s.resolveWith(t, [l, e])) : s.rejectWith(t, [l, e]),
                this
            }
        }),
        c = l.props;
        for (function(t, e) {
            var n, r, i, o, a;
            for (n in t) if (r = at.camelCase(n), i = e[r], o = t[n], at.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (a = at.cssHooks[r]) && "expand" in a) {
                o = a.expand(o),
                delete t[r];
                for (n in o) n in t || (t[n] = o[n], e[n] = i)
            } else e[r] = i
        } (c, l.opts.specialEasing); a > o; o++) if (r = R.prefilters[o].call(l, t, c, l.opts)) return at.isFunction(r.stop) && (at._queueHooks(l.elem, l.opts.queue).stop = at.proxy(r.stop, r)),
        r;
        return at.map(c, O, l),
        at.isFunction(l.opts.start) && l.opts.start.call(t, l),
        at.fx.timer(at.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function I(t) {
        return at.attr(t, "class") || ""
    }
    function z(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0,
            o = e.toLowerCase().match(wt) || [];
            if (at.isFunction(n)) for (; r = o[i++];)"+" === r.charAt(0) ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }
    function $(t, e, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
            at.each(t[s] || [],
            function(t, s) {
                var l = s(e, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
            }),
            u
        }
        var o = {},
        a = t === ze;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }
    function W(t, e) {
        var n, r, i = at.ajaxSettings.flatOptions || {};
        for (r in e) void 0 !== e[r] && ((i[r] ? t: n || (n = {}))[r] = e[r]);
        return n && at.extend(!0, t, n),
        t
    }
    function V(t) {
        return t.style && t.style.display || at.css(t, "display")
    }
    function X(t, e, n, r) {
        var i;
        if (at.isArray(e)) at.each(e,
        function(e, i) {
            n || Ge.test(t) ? r(t, i) : X(t + "[" + ("object" == typeof i && null != i ? e: "") + "]", i, n, r)
        });
        else if (n || "object" !== at.type(e)) r(t, e);
        else for (i in e) X(t + "[" + i + "]", e[i], n, r)
    }
    function G() {
        try {
            return new t.XMLHttpRequest
        } catch(t) {}
    }
    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function Y(t) {
        return at.isWindow(t) ? t: 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var J = [],
    Q = t.document,
    K = J.slice,
    Z = J.concat,
    tt = J.push,
    et = J.indexOf,
    nt = {},
    rt = nt.toString,
    it = nt.hasOwnProperty,
    ot = {},
    at = function(t, e) {
        return new at.fn.init(t, e)
    },
    st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ut = /^-ms-/,
    lt = /-([\da-z])/gi,
    ct = function(t, e) {
        return e.toUpperCase()
    };
    at.fn = at.prototype = {
        jquery: "1.12.3",
        constructor: at,
        selector: "",
        length: 0,
        toArray: function() {
            return K.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : K.call(this)
        },
        pushStack: function(t) {
            var e = at.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t) {
            return at.each(this, t)
        },
        map: function(t) {
            return this.pushStack(at.map(this,
            function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length,
            n = +t + (0 > t ? e: 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: tt,
        sort: J.sort,
        splice: J.splice
    },
    at.extend = at.fn.extend = function() {
        var t, e, n, r, i, o, a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {},
        s++), "object" == typeof a || at.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++) if (null != (i = arguments[s])) for (r in i) t = a[r],
        n = i[r],
        a !== n && (l && n && (at.isPlainObject(n) || (e = at.isArray(n))) ? (e ? (e = !1, o = t && at.isArray(t) ? t: []) : o = t && at.isPlainObject(t) ? t: {},
        a[r] = at.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a
    },
    at.extend({
        expando: "jQuery" + ("1.12.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === at.type(t)
        },
        isArray: Array.isArray ||
        function(t) {
            return "array" === at.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return ! at.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return ! 1;
            return ! 0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== at.type(t) || t.nodeType || at.isWindow(t)) return ! 1;
            try {
                if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(t) {
                return ! 1
            }
            if (!ot.ownFirst) for (e in t) return it.call(t, e);
            for (e in t);
            return void 0 === e || it.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "": "object" == typeof t || "function" == typeof t ? nt[rt.call(t)] || "object": typeof t
        },
        globalEval: function(e) {
            e && at.trim(e) && (t.execScript ||
            function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(ut, "ms-").replace(lt, ct)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var r, i = 0;
            if (n(t)) for (r = t.length; r > i && !1 !== e.call(t[i], i, t[i]); i++);
            else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "": (t + "").replace(st, "")
        },
        makeArray: function(t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? at.merge(r, "string" == typeof t ? [t] : t) : tt.call(r, t)),
            r
        },
        inArray: function(t, e, n) {
            var r;
            if (e) {
                if (et) return et.call(e, t, n);
                for (r = e.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in e && e[n] === t) return n
            }
            return - 1
        },
        merge: function(t, e) {
            for (var n = +e.length,
            r = 0,
            i = t.length; n > r;) t[i++] = e[r++];
            if (n != n) for (; void 0 !== e[r];) t[i++] = e[r++];
            return t.length = i,
            t
        },
        grep: function(t, e, n) {
            for (var r = [], i = 0, o = t.length, a = !n; o > i; i++) ! e(t[i], i) !== a && r.push(t[i]);
            return r
        },
        map: function(t, e, r) {
            var i, o, a = 0,
            s = [];
            if (n(t)) for (i = t.length; i > a; a++) null != (o = e(t[a], a, r)) && s.push(o);
            else for (a in t) null != (o = e(t[a], a, r)) && s.push(o);
            return Z.apply([], s)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, i;
            return "string" == typeof e && (i = t[e], e = t, t = i),
            at.isFunction(t) ? (n = K.call(arguments, 2), r = function() {
                return t.apply(e || this, n.concat(K.call(arguments)))
            },
            r.guid = t.guid = t.guid || at.guid++, r) : void 0
        },
        now: function() {
            return + new Date
        },
        support: ot
    }),
    "function" == typeof Symbol && (at.fn[Symbol.iterator] = J[Symbol.iterator]),
    at.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(t, e) {
        nt["[object " + e + "]"] = e.toLowerCase()
    });
    var ft = function(t) {
        function e(t, e, n, r) {
            var i, o, a, s, u, l, f, h, p = e && e.ownerDocument,
            g = e ? e.nodeType: 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!r && ((e ? e.ownerDocument || e: P) !== D && N(e), e = e || D, j)) {
                if (11 !== g && (l = gt.exec(t))) if (i = l[1]) {
                    if (9 === g) {
                        if (! (a = e.getElementById(i))) return n;
                        if (a.id === i) return n.push(a),
                        n
                    } else if (p && (a = p.getElementById(i)) && q(e, a) && a.id === i) return n.push(a),
                    n
                } else {
                    if (l[2]) return J.apply(n, e.getElementsByTagName(t)),
                    n;
                    if ((i = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(i)),
                    n
                }
                if (x.qsa && !$[t + " "] && (!L || !L.test(t))) {
                    if (1 !== g) p = e,
                    h = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(vt, "\\$&") : e.setAttribute("id", s = H), o = (f = F(t)).length, u = ct.test(s) ? "#" + s: "[id='" + s + "']"; o--;) f[o] = u + " " + d(f[o]);
                        h = f.join(","),
                        p = mt.test(t) && c(e.parentNode) || e
                    }
                    if (h) try {
                        return J.apply(n, p.querySelectorAll(h)),
                        n
                    } catch(t) {} finally {
                        s === H && e.removeAttribute("id")
                    }
                }
            }
            return T(t.replace(ot, "$1"), e, n, r)
        }
        function n() {
            function t(n, r) {
                return e.push(n + " ") > b.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
            var e = [];
            return t
        }
        function r(t) {
            return t[H] = !0,
            t
        }
        function i(t) {
            var e = D.createElement("div");
            try {
                return !! t(e)
            } catch(t) {
                return ! 1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = e
        }
        function a(t, e) {
            var n = e && t,
            r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === e) return - 1;
            return t ? 1 : -1
        }
        function s(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function l(t) {
            return r(function(e) {
                return e = +e,
                r(function(n, r) {
                    for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        function f() {}
        function d(t) {
            for (var e = 0,
            n = t.length,
            r = ""; n > e; e++) r += t[e].value;
            return r
        }
        function h(t, e, n) {
            var r = e.dir,
            i = n && "parentNode" === r,
            o = R++;
            return e.first ?
            function(e, n, o) {
                for (; e = e[r];) if (1 === e.nodeType || i) return t(e, n, o)
            }: function(e, n, a) {
                var s, u, l, c = [O, o];
                if (a) {
                    for (; e = e[r];) if ((1 === e.nodeType || i) && t(e, n, a)) return ! 0
                } else for (; e = e[r];) if (1 === e.nodeType || i) {
                    if (l = e[H] || (e[H] = {}), u = l[e.uniqueID] || (l[e.uniqueID] = {}), (s = u[r]) && s[0] === O && s[1] === o) return c[2] = s[2];
                    if (u[r] = c, c[2] = t(e, n, a)) return ! 0
                }
            }
        }
        function p(t) {
            return t.length > 1 ?
            function(e, n, r) {
                for (var i = t.length; i--;) if (!t[i](e, n, r)) return ! 1;
                return ! 0
            }: t[0]
        }
        function g(t, e, n, r, i) {
            for (var o, a = [], s = 0, u = t.length, l = null != e; u > s; s++)(o = t[s]) && (n && !n(o, r, i) || (a.push(o), l && e.push(s)));
            return a
        }
        function m(t, n, i, o, a, s) {
            return o && !o[H] && (o = m(o)),
            a && !a[H] && (a = m(a, s)),
            r(function(r, s, u, l) {
                var c, f, d, h = [],
                p = [],
                m = s.length,
                v = r ||
                function(t, n, r) {
                    for (var i = 0,
                    o = n.length; o > i; i++) e(t, n[i], r);
                    return r
                } (n || "*", u.nodeType ? [u] : u, []),
                y = !t || !r && n ? v: g(v, h, t, u, l),
                x = i ? a || (r ? t: m || o) ? [] : s: y;
                if (i && i(y, x, u, l), o) for (c = g(x, p), o(c, [], u, l), f = c.length; f--;)(d = c[f]) && (x[p[f]] = !(y[p[f]] = d));
                if (r) {
                    if (a || t) {
                        if (a) {
                            for (c = [], f = x.length; f--;)(d = x[f]) && c.push(y[f] = d);
                            a(null, x = [], c, l)
                        }
                        for (f = x.length; f--;)(d = x[f]) && (c = a ? K(r, d) : h[f]) > -1 && (r[c] = !(s[c] = d))
                    }
                } else x = g(x === s ? x.splice(m, x.length) : x),
                a ? a(null, s, x, l) : J.apply(s, x)
            })
        }
        function v(t) {
            for (var e, n, r, i = t.length,
            o = b.relative[t[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = h(function(t) {
                return t === e
            },
            a, !0), l = h(function(t) {
                return K(e, t) > -1
            },
            a, !0), c = [function(t, n, r) {
                var i = !o && (r || n !== S) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
                return e = null,
                i
            }]; i > s; s++) if (n = b.relative[t[s].type]) c = [h(p(c), n)];
            else {
                if ((n = b.filter[t[s].type].apply(null, t[s].matches))[H]) {
                    for (r = ++s; i > r && !b.relative[t[r].type]; r++);
                    return m(s > 1 && p(c), s > 1 && d(t.slice(0, s - 1).concat({
                        value: " " === t[s - 2].type ? "*": ""
                    })).replace(ot, "$1"), n, r > s && v(t.slice(s, r)), i > r && v(t = t.slice(r)), i > r && d(t))
                }
                c.push(n)
            }
            return p(c)
        }
        var y, x, b, w, C, F, E, T, S, k, A, N, D, B, j, L, _, M, q, H = "sizzle" + 1 * new Date,
        P = t.document,
        O = 0,
        R = 0,
        I = n(),
        z = n(),
        $ = n(),
        W = function(t, e) {
            return t === e && (A = !0),
            0
        },
        V = 1 << 31,
        X = {}.hasOwnProperty,
        G = [],
        U = G.pop,
        Y = G.push,
        J = G.push,
        Q = G.slice,
        K = function(t, e) {
            for (var n = 0,
            r = t.length; r > n; n++) if (t[n] === e) return n;
            return - 1
        },
        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        tt = "[\\x20\\t\\r\\n\\f]",
        et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
        rt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
        it = new RegExp(tt + "+", "g"),
        ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
        at = new RegExp("^" + tt + "*," + tt + "*"),
        st = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
        ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
        lt = new RegExp(rt),
        ct = new RegExp("^" + et + "$"),
        ft = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + nt),
            PSEUDO: new RegExp("^" + rt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
        },
        dt = /^(?:input|select|textarea|button)$/i,
        ht = /^h\d$/i,
        pt = /^[^{]+\{\s*\[native \w/,
        gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        mt = /[+~]/,
        vt = /'|\\/g,
        yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
        xt = function(t, e, n) {
            var r = "0x" + e - 65536;
            return r != r || n ? e: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        bt = function() {
            N()
        };
        try {
            J.apply(G = Q.call(P.childNodes), P.childNodes),
            G[P.childNodes.length].nodeType
        } catch(t) {
            J = {
                apply: G.length ?
                function(t, e) {
                    Y.apply(t, Q.call(e))
                }: function(t, e) {
                    for (var n = t.length,
                    r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        x = e.support = {},
        C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !! e && "HTML" !== e.nodeName
        },
        N = e.setDocument = function(t) {
            var e, n, r = t ? t.ownerDocument || t: P;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, B = D.documentElement, j = !C(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", bt, !1) : n.attachEvent && n.attachEvent("onunload", bt)), x.attributes = i(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }), x.getElementsByTagName = i(function(t) {
                return t.appendChild(D.createComment("")),
                !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = pt.test(D.getElementsByClassName), x.getById = i(function(t) {
                return B.appendChild(t).id = H,
                !D.getElementsByName || !D.getElementsByName(H).length
            }), x.getById ? (b.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && j) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            },
            b.filter.ID = function(t) {
                var e = t.replace(yt, xt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete b.find.ID, b.filter.ID = function(t) {
                var e = t.replace(yt, xt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), b.find.TAG = x.getElementsByTagName ?
            function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            }: function(t, e) {
                var n, r = [],
                i = 0,
                o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            b.find.CLASS = x.getElementsByClassName &&
            function(t, e) {
                return void 0 !== e.getElementsByClassName && j ? e.getElementsByClassName(t) : void 0
            },
            _ = [], L = [], (x.qsa = pt.test(D.querySelectorAll)) && (i(function(t) {
                B.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + tt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || L.push("\\[" + tt + "*(?:value|" + Z + ")"),
                t.querySelectorAll("[id~=" + H + "-]").length || L.push("~="),
                t.querySelectorAll(":checked").length || L.push(":checked"),
                t.querySelectorAll("a#" + H + "+*").length || L.push(".#.+[+~]")
            }), i(function(t) {
                var e = D.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && L.push("name" + tt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                L.push(",.*:")
            })), (x.matchesSelector = pt.test(M = B.matches || B.webkitMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector || B.msMatchesSelector)) && i(function(t) {
                x.disconnectedMatch = M.call(t, "div"),
                M.call(t, "[s!='']:x"),
                _.push("!=", rt)
            }), L = L.length && new RegExp(L.join("|")), _ = _.length && new RegExp(_.join("|")), e = pt.test(B.compareDocumentPosition), q = e || pt.test(B.contains) ?
            function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement: t,
                r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            }: function(t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                return ! 1
            },
            W = e ?
            function(t, e) {
                if (t === e) return A = !0,
                0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === P && q(P, t) ? -1 : e === D || e.ownerDocument === P && q(P, e) ? 1 : k ? K(k, t) - K(k, e) : 0 : 4 & n ? -1 : 1)
            }: function(t, e) {
                if (t === e) return A = !0,
                0;
                var n, r = 0,
                i = t.parentNode,
                o = e.parentNode,
                s = [t],
                u = [e];
                if (!i || !o) return t === D ? -1 : e === D ? 1 : i ? -1 : o ? 1 : k ? K(k, t) - K(k, e) : 0;
                if (i === o) return a(t, e);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (; s[r] === u[r];) r++;
                return r ? a(s[r], u[r]) : s[r] === P ? -1 : u[r] === P ? 1 : 0
            },
            D) : D
        },
        e.matches = function(t, n) {
            return e(t, null, null, n)
        },
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && N(t), n = n.replace(ut, "='$1']"), x.matchesSelector && j && !$[n + " "] && (!_ || !_.test(n)) && (!L || !L.test(n))) try {
                var r = M.call(t, n);
                if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
            } catch(t) {}
            return e(n, D, null, [t]).length > 0
        },
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && N(t),
            q(t, e)
        },
        e.attr = function(t, e) { (t.ownerDocument || t) !== D && N(t);
            var n = b.attrHandle[e.toLowerCase()],
            r = n && X.call(b.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
            return void 0 !== r ? r: x.attributes || !j ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value: null
        },
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        },
        e.uniqueSort = function(t) {
            var e, n = [],
            r = 0,
            i = 0;
            if (A = !x.detectDuplicates, k = !x.sortStable && t.slice(0), t.sort(W), A) {
                for (; e = t[i++];) e === t[i] && (r = n.push(i));
                for (; r--;) t.splice(n[r], 1)
            }
            return k = null,
            t
        },
        w = e.getText = function(t) {
            var e, n = "",
            r = 0,
            i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += w(t)
                } else if (3 === i || 4 === i) return t.nodeValue
            } else for (; e = t[r++];) n += w(e);
            return n
        },
        (b = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(yt, xt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(yt, xt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": n && lt.test(n) && (e = F(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(yt, xt).toLowerCase();
                    return "*" === t ?
                    function() {
                        return ! 0
                    }: function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = I[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && I(t,
                    function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n: !n || (o += "", "=" === n ? o === r: "!=" === n ? o !== r: "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice( - r.length) === r: "~=" === n ? (" " + o.replace(it, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3),
                    a = "last" !== t.slice( - 4),
                    s = "of-type" === e;
                    return 1 === r && 0 === i ?
                    function(t) {
                        return !! t.parentNode
                    }: function(e, n, u) {
                        var l, c, f, d, h, p, g = o !== a ? "nextSibling": "previousSibling",
                        m = e.parentNode,
                        v = s && e.nodeName.toLowerCase(),
                        y = !u && !s,
                        x = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = e; d = d[g];) if (s ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                    p = g = "only" === t && !p && "nextSibling"
                                }
                                return ! 0
                            }
                            if (p = [a ? m.firstChild: m.lastChild], a && y) {
                                for (x = (h = (l = (c = (f = (d = m)[H] || (d[H] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === O && l[1]) && l[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (x = h = 0) || p.pop();) if (1 === d.nodeType && ++x && d === e) {
                                    c[t] = [O, h, x];
                                    break
                                }
                            } else if (y && (d = e, f = d[H] || (d[H] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[t] || [], h = l[0] === O && l[1], x = h), !1 === x) for (; (d = ++h && d && d[g] || (x = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++x || (y && (f = d[H] || (d[H] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[t] = [O, x]), d !== e)););
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var i, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[H] ? o(n) : o.length > 1 ? (i = [t, t, "", n], b.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                        for (var r, i = o(t, n), a = i.length; a--;) r = K(t, i[a]),
                        t[r] = !(e[r] = i[a])
                    }) : function(t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(t) {
                    var e = [],
                    n = [],
                    i = E(t.replace(ot, "$1"));
                    return i[H] ? r(function(t, e, n, r) {
                        for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                    }) : function(t, r, o) {
                        return e[0] = t,
                        i(e, null, o, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function(t) {
                    return t = t.replace(yt, xt),
                    function(e) {
                        return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                    }
                }),
                lang: r(function(t) {
                    return ct.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(yt, xt).toLowerCase(),
                    function(e) {
                        var n;
                        do {
                            if (n = j ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while (( e = e . parentNode ) && 1 === e.nodeType);
                        return ! 1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === B
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return ! 1 === t.disabled
                },
                disabled: function(t) {
                    return ! 0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(t) {
                    return ! b.pseudos.empty(t)
                },
                header: function(t) {
                    return ht.test(t.nodeName)
                },
                input: function(t) {
                    return dt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [0 > n ? n + e: n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var r = 0 > n ? n + e: n; --r >= 0;) t.push(r);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var r = 0 > n ? n + e: n; ++r < e;) t.push(r);
                    return t
                })
            }
        }).pseudos.nth = b.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[y] = s(y);
        for (y in {
            submit: !0,
            reset: !0
        }) b.pseudos[y] = u(y);
        return f.prototype = b.filters = b.pseudos,
        b.setFilters = new f,
        F = e.tokenize = function(t, n) {
            var r, i, o, a, s, u, l, c = z[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = t, u = [], l = b.preFilter; s;) {
                r && !(i = at.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])),
                r = !1,
                (i = st.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ot, " ")
                }), s = s.slice(r.length));
                for (a in b.filter) ! (i = ft[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length: s ? e.error(t) : z(t, u).slice(0)
        },
        E = e.compile = function(t, n) {
            var i, o = [],
            a = [],
            s = $[t + " "];
            if (!s) {
                for (n || (n = F(t)), i = n.length; i--;)(s = v(n[i]))[H] ? o.push(s) : a.push(s); (s = $(t,
                function(t, n) {
                    var i = n.length > 0,
                    o = t.length > 0,
                    a = function(r, a, s, u, l) {
                        var c, f, d, h = 0,
                        p = "0",
                        m = r && [],
                        v = [],
                        y = S,
                        x = r || o && b.find.TAG("*", l),
                        w = O += null == y ? 1 : Math.random() || .1,
                        C = x.length;
                        for (l && (S = a === D || a || l); p !== C && null != (c = x[p]); p++) {
                            if (o && c) {
                                for (f = 0, a || c.ownerDocument === D || (N(c), s = !j); d = t[f++];) if (d(c, a || D, s)) {
                                    u.push(c);
                                    break
                                }
                                l && (O = w)
                            }
                            i && ((c = !d && c) && h--, r && m.push(c))
                        }
                        if (h += p, i && p !== h) {
                            for (f = 0; d = n[f++];) d(m, v, a, s);
                            if (r) {
                                if (h > 0) for (; p--;) m[p] || v[p] || (v[p] = U.call(u));
                                v = g(v)
                            }
                            J.apply(u, v),
                            l && !r && v.length > 0 && h + n.length > 1 && e.uniqueSort(u)
                        }
                        return l && (O = w, S = y),
                        m
                    };
                    return i ? r(a) : a
                } (a, o))).selector = t
            }
            return s
        },
        T = e.select = function(t, e, n, r) {
            var i, o, a, s, u, l = "function" == typeof t && t,
            f = !r && F(t = l.selector || t);
            if (n = n || [], 1 === f.length) {
                if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === e.nodeType && j && b.relative[o[1].type]) {
                    if (! (e = (b.find.ID(a.matches[0].replace(yt, xt), e) || [])[0])) return n;
                    l && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (i = ft.needsContext.test(t) ? 0 : o.length; i--&&(a = o[i], !b.relative[s = a.type]);) if ((u = b.find[s]) && (r = u(a.matches[0].replace(yt, xt), mt.test(o[0].type) && c(e.parentNode) || e))) {
                    if (o.splice(i, 1), !(t = r.length && d(o))) return J.apply(n, r),
                    n;
                    break
                }
            }
            return (l || E(t, f))(r, e, !j, n, !e || mt.test(t) && c(e.parentNode) || e),
            n
        },
        x.sortStable = H.split("").sort(W).join("") === H,
        x.detectDuplicates = !!A,
        N(),
        x.sortDetached = i(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }),
        i(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width",
        function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        x.attributes && i(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value",
        function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        i(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(Z,
        function(t, e, n) {
            var r;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value: null
        }),
        e
    } (t);
    at.find = ft,
    at.expr = ft.selectors,
    at.expr[":"] = at.expr.pseudos,
    at.uniqueSort = at.unique = ft.uniqueSort,
    at.text = ft.getText,
    at.isXMLDoc = ft.isXML,
    at.contains = ft.contains;
    var dt = function(t, e, n) {
        for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
            if (i && at(t).is(n)) break;
            r.push(t)
        }
        return r
    },
    ht = function(t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
    },
    pt = at.expr.match.needsContext,
    gt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    mt = /^.[^:#\[\.,]*$/;
    at.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === r.nodeType ? at.find.matchesSelector(r, t) ? [r] : [] : at.find.matches(t, at.grep(e,
        function(t) {
            return 1 === t.nodeType
        }))
    },
    at.fn.extend({
        find: function(t) {
            var e, n = [],
            r = this,
            i = r.length;
            if ("string" != typeof t) return this.pushStack(at(t).filter(function() {
                for (e = 0; i > e; e++) if (at.contains(r[e], this)) return ! 0
            }));
            for (e = 0; i > e; e++) at.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? at.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + t: t,
            n
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !! r(this, "string" == typeof t && pt.test(t) ? at(t) : t || [], !1).length
        }
    });
    var vt, yt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (at.fn.init = function(t, e, n) {
        var r, i;
        if (!t) return this;
        if (n = n || vt, "string" == typeof t) {
            if (! (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : yt.exec(t)) || !r[1] && e) return ! e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof at ? e[0] : e, at.merge(this, at.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e: Q, !0)), gt.test(r[1]) && at.isPlainObject(e)) for (r in e) at.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            if ((i = Q.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2]) return vt.find(t);
                this.length = 1,
                this[0] = i
            }
            return this.context = Q,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : at.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(at) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), at.makeArray(t, this))
    }).prototype = at.fn,
    vt = at(Q);
    var xt = /^(?:parents|prev(?:Until|All))/,
    bt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    at.fn.extend({
        has: function(t) {
            var e, n = at(t, this),
            r = n.length;
            return this.filter(function() {
                for (e = 0; r > e; e++) if (at.contains(this, n[e])) return ! 0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0,
            i = this.length,
            o = [], a = pt.test(t) || "string" != typeof t ? at(t, e || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && at.find.matchesSelector(n, t))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? at.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? at.inArray(this[0], at(t)) : at.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(t, e) {
            return this.pushStack(at.uniqueSort(at.merge(this.get(), at(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
        }
    }),
    at.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e: null
        },
        parents: function(t) {
            return dt(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return dt(t, "parentNode", n)
        },
        next: function(t) {
            return i(t, "nextSibling")
        },
        prev: function(t) {
            return i(t, "previousSibling")
        },
        nextAll: function(t) {
            return dt(t, "nextSibling")
        },
        prevAll: function(t) {
            return dt(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return dt(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return dt(t, "previousSibling", n)
        },
        siblings: function(t) {
            return ht((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ht(t.firstChild)
        },
        contents: function(t) {
            return at.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: at.merge([], t.childNodes)
        }
    },
    function(t, e) {
        at.fn[t] = function(n, r) {
            var i = at.map(this, e, n);
            return "Until" !== t.slice( - 5) && (r = n),
            r && "string" == typeof r && (i = at.filter(r, i)),
            this.length > 1 && (bt[t] || (i = at.uniqueSort(i)), xt.test(t) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var wt = /\S+/g;
    at.Callbacks = function(t) {
        t = "string" == typeof t ?
        function(t) {
            var e = {};
            return at.each(t.match(wt) || [],
            function(t, n) {
                e[n] = !0
            }),
            e
        } (t) : at.extend({},
        t);
        var e, n, r, i, o = [],
        a = [],
        s = -1,
        u = function() {
            for (i = t.once, r = e = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) ! 1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && (s = o.length, n = !1);
            t.memory || (n = !1),
            e = !1,
            i && (o = n ? [] : "")
        },
        l = {
            add: function() {
                return o && (n && !e && (s = o.length - 1, a.push(n)),
                function e(n) {
                    at.each(n,
                    function(n, r) {
                        at.isFunction(r) ? t.unique && l.has(r) || o.push(r) : r && r.length && "string" !== at.type(r) && e(r)
                    })
                } (arguments), n && !e && u()),
                this
            },
            remove: function() {
                return at.each(arguments,
                function(t, e) {
                    for (var n; (n = at.inArray(e, o, n)) > -1;) o.splice(n, 1),
                    s >= n && s--
                }),
                this
            },
            has: function(t) {
                return t ? at.inArray(t, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return ! o
            },
            lock: function() {
                return i = !0,
                n || l.disable(),
                this
            },
            locked: function() {
                return !! i
            },
            fireWith: function(t, n) {
                return i || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! r
            }
        };
        return l
    },
    at.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", at.Callbacks("once memory"), "resolved"], ["reject", "fail", at.Callbacks("once memory"), "rejected"], ["notify", "progress", at.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return at.Deferred(function(n) {
                        at.each(e,
                        function(e, o) {
                            var a = at.isFunction(t[e]) && t[e];
                            i[o[1]](function() {
                                var t = a && a.apply(this, arguments);
                                t && at.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? at.extend(t, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            at.each(e,
            function(t, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                e[1 ^ t][2].disable, e[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            t && t.call(i, i),
            i
        },
        when: function(t) {
            var e, n, r, i = 0,
            o = K.call(arguments),
            a = o.length,
            s = 1 !== a || t && at.isFunction(t.promise) ? a: 0,
            u = 1 === s ? t: at.Deferred(),
            l = function(t, n, r) {
                return function(i) {
                    n[t] = this,
                    r[t] = arguments.length > 1 ? K.call(arguments) : i,
                    r === e ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1) for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && at.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, e)).done(l(i, r, o)).fail(u.reject) : --s;
            return s || u.resolveWith(r, o),
            u.promise()
        }
    });
    var Ct;
    at.fn.ready = function(t) {
        return at.ready.promise().done(t),
        this
    },
    at.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? at.readyWait++:at.ready(!0)
        },
        ready: function(t) { (!0 === t ? --at.readyWait: at.isReady) || (at.isReady = !0, !0 !== t && --at.readyWait > 0 || (Ct.resolveWith(Q, [at]), at.fn.triggerHandler && (at(Q).triggerHandler("ready"), at(Q).off("ready"))))
        }
    }),
    at.ready.promise = function(e) {
        if (!Ct) if (Ct = at.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll) t.setTimeout(at.ready);
        else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", a),
        t.addEventListener("load", a);
        else {
            Q.attachEvent("onreadystatechange", a),
            t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && Q.documentElement
            } catch(t) {}
            n && n.doScroll &&
            function e() {
                if (!at.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(n) {
                        return t.setTimeout(e, 50)
                    }
                    o(),
                    at.ready()
                }
            } ()
        }
        return Ct.promise(e)
    },
    at.ready.promise();
    var Ft;
    for (Ft in at(ot)) break;
    ot.ownFirst = "0" === Ft,
    ot.inlineBlockNeedsLayout = !1,
    at(function() {
        var t, e, n, r; (n = Q.getElementsByTagName("body")[0]) && n.style && (e = Q.createElement("div"), r = Q.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ot.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(r))
    }),
    function() {
        var t = Q.createElement("div");
        ot.deleteExpando = !0;
        try {
            delete t.test
        } catch(t) {
            ot.deleteExpando = !1
        }
        t = null
    } ();
    var Et = function(t) {
        var e = at.noData[(t.nodeName + " ").toLowerCase()],
        n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
    },
    Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    St = /([A-Z])/g;
    at.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !! (t = t.nodeType ? at.cache[t[at.expando]] : t[at.expando]) && !u(t)
        },
        data: function(t, e, n) {
            return l(t, e, n)
        },
        removeData: function(t, e) {
            return c(t, e)
        },
        _data: function(t, e, n) {
            return l(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return c(t, e, !0)
        }
    }),
    at.fn.extend({
        data: function(t, e) {
            var n, r, i, o = this[0],
            a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = at.data(o), 1 === o.nodeType && !at._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = at.camelCase(r.slice(5)), s(o, r, i[r]));
                    at._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function() {
                at.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                at.data(this, t, e)
            }) : o ? s(o, t, at.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                at.removeData(this, t)
            })
        }
    }),
    at.extend({
        queue: function(t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue", r = at._data(t, e), n && (!r || at.isArray(n) ? r = at._data(t, e, at.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = at.queue(t, e),
            r = n.length,
            i = n.shift(),
            o = at._queueHooks(t, e);
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t,
            function() {
                at.dequeue(t, e)
            },
            o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return at._data(t, n) || at._data(t, n, {
                empty: at.Callbacks("once memory").add(function() {
                    at._removeData(t, e + "queue"),
                    at._removeData(t, n)
                })
            })
        }
    }),
    at.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--),
            arguments.length < n ? at.queue(this[0], t) : void 0 === e ? this: this.each(function() {
                var n = at.queue(this, t, e);
                at._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && at.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                at.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1,
            i = at.Deferred(),
            o = this,
            a = this.length,
            s = function() {--r || i.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = at._data(o[a], t + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(),
            i.promise(e)
        }
    }),
    function() {
        var t;
        ot.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, n, r;
            return (n = Q.getElementsByTagName("body")[0]) && n.style ? (e = Q.createElement("div"), r = Q.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(Q.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(r), t) : void 0
        }
    } ();
    var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    At = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
    Nt = ["Top", "Right", "Bottom", "Left"],
    Dt = function(t, e) {
        return t = e || t,
        "none" === at.css(t, "display") || !at.contains(t.ownerDocument, t)
    },
    Bt = function(t, e, n, r, i, o, a) {
        var s = 0,
        u = t.length,
        l = null == n;
        if ("object" === at.type(n)) {
            i = !0;
            for (s in n) Bt(t, e, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, at.isFunction(r) || (a = !0), l && (a ? (e.call(t, r), e = null) : (l = e, e = function(t, e, n) {
            return l.call(at(t), n)
        })), e)) for (; u > s; s++) e(t[s], n, a ? r: r.call(t[s], s, e(t[s], n)));
        return i ? t: l ? e.call(t) : u ? e(t[0], n) : o
    },
    jt = /^(?:checkbox|radio)$/i,
    Lt = /<([\w:-]+)/,
    _t = /^$|\/(?:java|ecma)script/i,
    Mt = /^\s+/,
    qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video"; !
    function() {
        var t = Q.createElement("div"),
        e = Q.createDocumentFragment(),
        n = Q.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        ot.leadingWhitespace = 3 === t.firstChild.nodeType,
        ot.tbody = !t.getElementsByTagName("tbody").length,
        ot.htmlSerialize = !!t.getElementsByTagName("link").length,
        ot.html5Clone = "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        e.appendChild(n),
        ot.appendChecked = n.checked,
        t.innerHTML = "<textarea>x</textarea>",
        ot.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        e.appendChild(t),
        (n = Q.createElement("input")).setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        ot.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ot.noCloneEvent = !!t.addEventListener,
        t[at.expando] = 1,
        ot.attributes = !t.getAttribute(at.expando)
    } ();
    var Ht = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ot.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ht.optgroup = Ht.option,
    Ht.tbody = Ht.tfoot = Ht.colgroup = Ht.caption = Ht.thead,
    Ht.th = Ht.td;
    var Pt = /<|&#?\w+;/,
    Ot = /<tbody/i; !
    function() {
        var e, n, r = Q.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + e,
        (ot[e] = n in t) || (r.setAttribute(n, "t"), ot[e] = !1 === r.attributes[n].expando);
        r = null
    } ();
    var Rt = /^(?:input|select|textarea)$/i,
    It = /^key/,
    zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    $t = /^(?:focusinfocus|focusoutblur)$/,
    Wt = /^([^.]*)(?:\.(.+)|)/;
    at.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, d, h, p, g, m = at._data(t);
            if (m) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = at.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(t) {
                    return void 0 === at || t && at.event.triggered === t.type ? void 0 : at.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = t), s = (e = (e || "").match(wt) || [""]).length; s--;) o = Wt.exec(e[s]) || [],
                h = g = o[1],
                p = (o[2] || "").split(".").sort(),
                h && (l = at.event.special[h] || {},
                h = (i ? l.delegateType: l.bindType) || h, l = at.event.special[h] || {},
                f = at.extend({
                    type: h,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && at.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                },
                u), (d = a[h]) || (d = a[h] = [], d.delegateCount = 0, l.setup && !1 !== l.setup.call(t, r, p, c) || (t.addEventListener ? t.addEventListener(h, c, !1) : t.attachEvent && t.attachEvent("on" + h, c))), l.add && (l.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), at.event.global[h] = !0);
                t = null
            }
        },
        remove: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, d, h, p, g, m = at.hasData(t) && at._data(t);
            if (m && (c = m.events)) {
                for (l = (e = (e || "").match(wt) || [""]).length; l--;) if (s = Wt.exec(e[l]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                    for (f = at.event.special[h] || {},
                    d = c[h = (r ? f.delegateType: f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o],
                    !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(t, a));
                    u && !d.length && (f.teardown && !1 !== f.teardown.call(t, p, m.handle) || at.removeEvent(t, h, m.handle), delete c[h])
                } else for (h in c) at.event.remove(t, h + e[l], n, r, !0);
                at.isEmptyObject(c) && (delete m.handle, at._removeData(t, "events"))
            }
        },
        trigger: function(e, n, r, i) {
            var o, a, s, u, l, c, f, d = [r || Q],
            h = it.call(e, "type") ? e.type: e,
            p = it.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = c = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !$t.test(h + at.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, e = e[at.expando] ? e: new at.Event(h, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : at.makeArray(n, [e]), l = at.event.special[h] || {},
            i || !l.trigger || !1 !== l.trigger.apply(r, n))) {
                if (!i && !l.noBubble && !at.isWindow(r)) {
                    for (u = l.delegateType || h, $t.test(u + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s),
                    c = s;
                    c === (r.ownerDocument || Q) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (f = 0; (s = d[f++]) && !e.isPropagationStopped();) e.type = f > 1 ? u: l.bindType || h,
                (o = (at._data(s, "events") || {})[e.type] && at._data(s, "handle")) && o.apply(s, n),
                (o = a && s[a]) && o.apply && Et(s) && (e.result = o.apply(s, n), !1 === e.result && e.preventDefault());
                if (e.type = h, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), n)) && Et(r) && a && r[h] && !at.isWindow(r)) { (c = r[a]) && (r[a] = null),
                    at.event.triggered = h;
                    try {
                        r[h]()
                    } catch(t) {}
                    at.event.triggered = void 0,
                    c && (r[a] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = at.event.fix(t);
            var e, n, r, i, o, a = [],
            s = K.call(arguments),
            u = (at._data(this, "events") || {})[t.type] || [],
            l = at.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                for (a = at.event.handlers.call(this, t, u), e = 0; (i = a[e++]) && !t.isPropagationStopped();) for (t.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, void 0 !== (r = ((at.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (t.result = r) && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, a = [],
            s = e.delegateCount,
            u = t.target;
            if (s && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== t.type)) {
                for (r = [], n = 0; s > n; n++) o = e[n],
                i = o.selector + " ",
                void 0 === r[i] && (r[i] = o.needsContext ? at(i, this).index(u) > -1 : at.find(i, this, null, [u]).length),
                r[i] && r.push(o);
                r.length && a.push({
                    elem: u,
                    handlers: r
                })
            }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }),
            a
        },
        fix: function(t) {
            if (t[at.expando]) return t;
            var e, n, r, i = t.type,
            o = t,
            a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = zt.test(i) ? this.mouseHooks: It.test(i) ? this.keyHooks: {}), r = a.props ? this.props.concat(a.props) : this.props, t = new at.Event(o), e = r.length; e--;) n = r[e],
            t[n] = o[n];
            return t.target || (t.target = o.srcElement || Q),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, i, o = e.button,
                a = e.fromElement;
                return null == t.pageX && null != e.clientX && (r = t.target.ownerDocument || Q, i = r.documentElement, n = r.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement: a),
                t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return at.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return at.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var r = at.extend(new at.Event, n, {
                type: t,
                isSimulated: !0
            });
            at.event.trigger(r, null, e),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    at.removeEvent = Q.removeEventListener ?
    function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }: function(t, e, n) {
        var r = "on" + e;
        t.detachEvent && (void 0 === t[r] && (t[r] = null), t.detachEvent(r, n))
    },
    at.Event = function(t, e) {
        return this instanceof at.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? v: y) : this.type = t, e && at.extend(this, e), this.timeStamp = t && t.timeStamp || at.now(), void(this[at.expando] = !0)) : new at.Event(t, e)
    },
    at.Event.prototype = {
        constructor: at.Event,
        isDefaultPrevented: y,
        isPropagationStopped: y,
        isImmediatePropagationStopped: y,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = v,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = v,
            t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = v,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    at.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(t, e) {
        at.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = t.relatedTarget,
                i = t.handleObj;
                return r && (r === this || at.contains(this, r)) || (t.type = i.origType, n = i.handler.apply(this, arguments), t.type = e),
                n
            }
        }
    }),
    ot.submit || (at.event.special.submit = {
        setup: function() {
            return ! at.nodeName(this, "form") && void at.event.add(this, "click._submit keypress._submit",
            function(t) {
                var e = t.target,
                n = at.nodeName(e, "input") || at.nodeName(e, "button") ? at.prop(e, "form") : void 0;
                n && !at._data(n, "submit") && (at.event.add(n, "submit._submit",
                function(t) {
                    t._submitBubble = !0
                }), at._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && at.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return ! at.nodeName(this, "form") && void at.event.remove(this, "._submit")
        }
    }),
    ot.change || (at.event.special.change = {
        setup: function() {
            return Rt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (at.event.add(this, "propertychange._change",
            function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), at.event.add(this, "click._change",
            function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1),
                at.event.simulate("change", this, t)
            })), !1) : void at.event.add(this, "beforeactivate._change",
            function(t) {
                var e = t.target;
                Rt.test(e.nodeName) && !at._data(e, "change") && (at.event.add(e, "change._change",
                function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || at.event.simulate("change", this.parentNode, t)
                }), at._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return at.event.remove(this, "._change"),
            !Rt.test(this.nodeName)
        }
    }),
    ot.focusin || at.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(t, e) {
        var n = function(t) {
            at.event.simulate(e, t.target, at.event.fix(t))
        };
        at.event.special[e] = {
            setup: function() {
                var r = this.ownerDocument || this,
                i = at._data(r, e);
                i || r.addEventListener(t, n, !0),
                at._data(r, e, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                i = at._data(r, e) - 1;
                i ? at._data(r, e, i) : (r.removeEventListener(t, n, !0), at._removeData(r, e))
            }
        }
    }),
    at.fn.extend({
        on: function(t, e, n, r) {
            return b(this, t, e, n, r)
        },
        one: function(t, e, n, r) {
            return b(this, t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj,
            at(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this
            }
            return ! 1 !== e && "function" != typeof e || (n = e, e = void 0),
            !1 === n && (n = y),
            this.each(function() {
                at.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                at.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? at.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Vt = / jQuery\d+="(?:null|\d+)"/g,
    Xt = new RegExp("<(?:" + qt + ")[\\s/>]", "i"),
    Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Ut = /<script|<style|<link/i,
    Yt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Jt = /^true\/(.*)/,
    Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Kt = d(Q).appendChild(Q.createElement("div"));
    at.extend({
        htmlPrefilter: function(t) {
            return t.replace(Gt, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var r, i, o, a, s, u = at.contains(t.ownerDocument, t);
            if (ot.html5Clone || at.isXMLDoc(t) || !Xt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Kt.innerHTML = t.outerHTML, Kt.removeChild(o = Kt.firstChild)), !(ot.noCloneEvent && ot.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || at.isXMLDoc(t))) for (r = h(o), s = h(t), a = 0; null != (i = s[a]); ++a) r[a] && T(i, r[a]);
            if (e) if (n) for (s = s || h(t), r = r || h(o), a = 0; null != (i = s[a]); a++) E(i, r[a]);
            else E(t, o);
            return (r = h(o, "script")).length > 0 && p(r, !u && h(t, "script")),
            r = s = i = null,
            o
        },
        cleanData: function(t, e) {
            for (var n, r, i, o, a = 0,
            s = at.expando,
            u = at.cache,
            l = ot.attributes,
            c = at.event.special; null != (n = t[a]); a++) if ((e || Et(n)) && (i = n[s], o = i && u[i])) {
                if (o.events) for (r in o.events) c[r] ? at.event.remove(n, r) : at.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), J.push(i))
            }
        }
    }),
    at.fn.extend({
        domManip: S,
        detach: function(t) {
            return k(this, t, !0)
        },
        remove: function(t) {
            return k(this, t)
        },
        text: function(t) {
            return Bt(this,
            function(t) {
                return void 0 === t ? at.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(t))
            },
            null, t, arguments.length)
        },
        append: function() {
            return S(this, arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    w(this, t).appendChild(t)
                }
            })
        },
        prepend: function() {
            return S(this, arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = w(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return S(this, arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return S(this, arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && at.cleanData(h(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && at.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t: e,
            this.map(function() {
                return at.clone(this, t, e)
            })
        },
        html: function(t) {
            return Bt(this,
            function(t) {
                var e = this[0] || {},
                n = 0,
                r = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Vt, "") : void 0;
                if ("string" == typeof t && !Ut.test(t) && (ot.htmlSerialize || !Xt.test(t)) && (ot.leadingWhitespace || !Mt.test(t)) && !Ht[(Lt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = at.htmlPrefilter(t);
                    try {
                        for (; r > n; n++) 1 === (e = this[n] || {}).nodeType && (at.cleanData(h(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch(t) {}
                }
                e && this.empty().append(t)
            },
            null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return S(this, arguments,
            function(e) {
                var n = this.parentNode;
                at.inArray(this, t) < 0 && (at.cleanData(h(this)), n && n.replaceChild(e, this))
            },
            t)
        }
    }),
    at.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(t, e) {
        at.fn[t] = function(t) {
            for (var n, r = 0,
            i = [], o = at(t), a = o.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
            at(o[r])[e](n),
            tt.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Zt, te = {
        HTML: "block",
        BODY: "block"
    },
    ee = /^margin/,
    ne = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
    re = function(t, e, n, r) {
        var i, o, a = {};
        for (o in e) a[o] = t.style[o],
        t.style[o] = e[o];
        i = n.apply(t, r || []);
        for (o in e) t.style[o] = a[o];
        return i
    },
    ie = Q.documentElement; !
    function() {
        function e() {
            var e, c, f = Q.documentElement;
            f.appendChild(u),
            l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = i = s = !1,
            r = a = !0,
            t.getComputedStyle && (c = t.getComputedStyle(l), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                width: "4px"
            }).width, l.style.marginRight = "50%", r = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, e = l.appendChild(Q.createElement("div")), e.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", l.style.width = "1px", a = !parseFloat((t.getComputedStyle(e) || {}).marginRight), l.removeChild(e)),
            l.style.display = "none",
            (o = 0 === l.getClientRects().length) && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)),
            f.removeChild(u)
        }
        var n, r, i, o, a, s, u = Q.createElement("div"),
        l = Q.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", ot.opacity = "0.5" === l.style.opacity, ot.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ot.clearCloneStyle = "content-box" === l.style.backgroundClip, (u = Q.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), ot.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, at.extend(ot, {
            reliableHiddenOffsets: function() {
                return null == n && e(),
                o
            },
            boxSizingReliable: function() {
                return null == n && e(),
                i
            },
            pixelMarginRight: function() {
                return null == n && e(),
                r
            },
            pixelPosition: function() {
                return null == n && e(),
                n
            },
            reliableMarginRight: function() {
                return null == n && e(),
                a
            },
            reliableMarginLeft: function() {
                return null == n && e(),
                s
            }
        }))
    } ();
    var oe, ae, se = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (oe = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(e)
    },
    ae = function(t, e, n) {
        var r, i, o, a, s = t.style;
        return n = n || oe(t),
        "" !== (a = n ? n.getPropertyValue(e) || n[e] : void 0) && void 0 !== a || at.contains(t.ownerDocument, t) || (a = at.style(t, e)),
        n && !ot.pixelMarginRight() && ne.test(a) && ee.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o),
        void 0 === a ? a: a + ""
    }) : ie.currentStyle && (oe = function(t) {
        return t.currentStyle
    },
    ae = function(t, e, n) {
        var r, i, o, a, s = t.style;
        return n = n || oe(t),
        null == (a = n ? n[e] : void 0) && s && s[e] && (a = s[e]),
        ne.test(a) && !se.test(e) && (r = s.left, i = t.runtimeStyle, (o = i && i.left) && (i.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em": a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)),
        void 0 === a ? a: a + "" || "auto"
    });
    var ue = /alpha\([^)]*\)/i,
    le = /opacity\s*=\s*([^)]*)/i,
    ce = /^(none|table(?!-c[ea]).+)/,
    fe = new RegExp("^(" + kt + ")(.*)$", "i"),
    de = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    he = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    pe = ["Webkit", "O", "Moz", "ms"],
    ge = Q.createElement("div").style;
    at.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ae(t, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: ot.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, a, s = at.camelCase(e),
                u = t.style;
                if (e = at.cssProps[s] || (at.cssProps[s] = B(s) || s), a = at.cssHooks[e] || at.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i: u[e];
                if ("string" === (o = typeof n) && (i = At.exec(n)) && i[1] && (n = f(t, e, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (at.cssNumber[s] ? "": "px")), ot.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, r))))) try {
                    u[e] = n
                } catch(t) {}
            }
        },
        css: function(t, e, n, r) {
            var i, o, a, s = at.camelCase(e);
            return e = at.cssProps[s] || (at.cssProps[s] = B(s) || s),
            (a = at.cssHooks[e] || at.cssHooks[s]) && "get" in a && (o = a.get(t, !0, n)),
            void 0 === o && (o = ae(t, e, r)),
            "normal" === o && e in he && (o = he[e]),
            "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }),
    at.each(["height", "width"],
    function(t, e) {
        at.cssHooks[e] = {
            get: function(t, n, r) {
                return n ? ce.test(at.css(t, "display")) && 0 === t.offsetWidth ? re(t, de,
                function() {
                    return M(t, e, r)
                }) : M(t, e, r) : void 0
            },
            set: function(t, n, r) {
                var i = r && oe(t);
                return L(0, n, r ? _(t, e, r, ot.boxSizing && "border-box" === at.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    ot.opacity || (at.cssHooks.opacity = {
        get: function(t, e) {
            return le.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
        },
        set: function(t, e) {
            var n = t.style,
            r = t.currentStyle,
            i = at.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
            o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (e >= 1 || "" === e) && "" === at.trim(o.replace(ue, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = ue.test(o) ? o.replace(ue, i) : o + " " + i)
        }
    }),
    at.cssHooks.marginRight = D(ot.reliableMarginRight,
    function(t, e) {
        return e ? re(t, {
            display: "inline-block"
        },
        ae, [t, "marginRight"]) : void 0
    }),
    at.cssHooks.marginLeft = D(ot.reliableMarginLeft,
    function(t, e) {
        return e ? (parseFloat(ae(t, "marginLeft")) || (at.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - re(t, {
            marginLeft: 0
        },
        function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px": void 0
    }),
    at.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(t, e) {
        at.cssHooks[t + e] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + Nt[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        ee.test(t) || (at.cssHooks[t + e].set = L)
    }),
    at.fn.extend({
        css: function(t, e) {
            return Bt(this,
            function(t, e, n) {
                var r, i, o = {},
                a = 0;
                if (at.isArray(e)) {
                    for (r = oe(t), i = e.length; i > a; a++) o[e[a]] = at.css(t, e[a], !1, r);
                    return o
                }
                return void 0 !== n ? at.style(t, e, n) : at.css(t, e)
            },
            t, e, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Dt(this) ? at(this).show() : at(this).hide()
            })
        }
    }),
    at.Tween = q,
    (q.prototype = {
        constructor: q,
        init: function(t, e, n, r, i, o) {
            this.elem = t,
            this.prop = n,
            this.easing = i || at.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (at.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var t = q.propHooks[this.prop];
            return t && t.get ? t.get(this) : q.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = e = at.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : q.propHooks._default.set(this),
            this
        }
    }).init.prototype = q.prototype,
    (q.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = at.css(t.elem, t.prop, "")) && "auto" !== e ? e: 0
            },
            set: function(t) {
                at.fx.step[t.prop] ? at.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[at.cssProps[t.prop]] && !at.cssHooks[t.prop] ? t.elem[t.prop] = t.now: at.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = q.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    at.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return.5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    at.fx = q.prototype.init,
    at.fx.step = {};
    var me, ve, ye = /^(?:toggle|show|hide)$/,
    xe = /queueHooks$/;
    at.Animation = at.extend(R, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return f(n.elem, t, At.exec(e), n),
                n
            }]
        },
        tweener: function(t, e) {
            at.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(wt);
            for (var n, r = 0,
            i = t.length; i > r; r++) n = t[r],
            R.tweeners[n] = R.tweeners[n] || [],
            R.tweeners[n].unshift(e)
        },
        prefilters: [function(t, e, n) {
            var r, i, o, a, s, u, l, c = this,
            f = {},
            d = t.style,
            h = t.nodeType && Dt(t),
            p = at._data(t, "fxshow");
            n.queue || (null == (s = at._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                s.unqueued || u()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--,
                    at.queue(t, "fx").length || s.empty.fire()
                })
            })),
            1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (l = at.css(t, "display")) ? at._data(t, "olddisplay") || N(t.nodeName) : l) && "none" === at.css(t, "float") && (ot.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
            n.overflow && (d.overflow = "hidden", ot.shrinkWrapBlocks() || c.always(function() {
                d.overflow = n.overflow[0],
                d.overflowX = n.overflow[1],
                d.overflowY = n.overflow[2]
            }));
            for (r in e) if (i = e[r], ye.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (h ? "hide": "show")) {
                    if ("show" !== i || !p || void 0 === p[r]) continue;
                    h = !0
                }
                f[r] = p && p[r] || at.style(t, r)
            } else l = void 0;
            if (at.isEmptyObject(f))"inline" === ("none" === l ? N(t.nodeName) : l) && (d.display = l);
            else {
                p ? "hidden" in p && (h = p.hidden) : p = at._data(t, "fxshow", {}),
                o && (p.hidden = !h),
                h ? at(t).show() : c.done(function() {
                    at(t).hide()
                }),
                c.done(function() {
                    var e;
                    at._removeData(t, "fxshow");
                    for (e in f) at.style(t, e, f[e])
                });
                for (r in f) a = O(h ? p[r] : 0, r, c),
                r in p || (p[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }],
        prefilter: function(t, e) {
            e ? R.prefilters.unshift(t) : R.prefilters.push(t)
        }
    }),
    at.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? at.extend({},
        t) : {
            complete: n || !n && e || at.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !at.isFunction(e) && e
        };
        return r.duration = at.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in at.fx.speeds ? at.fx.speeds[r.duration] : at.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            at.isFunction(r.old) && r.old.call(this),
            r.queue && at.dequeue(this, r.queue)
        },
        r
    },
    at.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(Dt).css("opacity", 0).show().end().animate({
                opacity: e
            },
            t, n, r)
        },
        animate: function(t, e, n, r) {
            var i = at.isEmptyObject(t),
            o = at.speed(e, n, r),
            a = function() {
                var e = R(this, at.extend({},
                t), o); (i || at._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(t, e, n) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0,
                i = null != t && t + "queueHooks",
                o = at.timers,
                a = at._data(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for (i in a) a[i] && a[i].stop && xe.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1)); ! e && n || at.dequeue(this, t)
            })
        },
        finish: function(t) {
            return ! 1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, n = at._data(this),
                r = n[t + "queue"],
                i = n[t + "queueHooks"],
                o = at.timers,
                a = r ? r.length: 0;
                for (n.finish = !0, at.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; a > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    at.each(["toggle", "show", "hide"],
    function(t, e) {
        var n = at.fn[e];
        at.fn[e] = function(t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(P(e, !0), t, r, i)
        }
    }),
    at.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(t, e) {
        at.fn[t] = function(t, n, r) {
            return this.animate(e, t, n, r)
        }
    }),
    at.timers = [],
    at.fx.tick = function() {
        var t, e = at.timers,
        n = 0;
        for (me = at.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || at.fx.stop(),
        me = void 0
    },
    at.fx.timer = function(t) {
        at.timers.push(t),
        t() ? at.fx.start() : at.timers.pop()
    },
    at.fx.interval = 13,
    at.fx.start = function() {
        ve || (ve = t.setInterval(at.fx.tick, at.fx.interval))
    },
    at.fx.stop = function() {
        t.clearInterval(ve),
        ve = null
    },
    at.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    at.fn.delay = function(e, n) {
        return e = at.fx ? at.fx.speeds[e] || e: e,
        n = n || "fx",
        this.queue(n,
        function(n, r) {
            var i = t.setTimeout(n, e);
            r.stop = function() {
                t.clearTimeout(i)
            }
        })
    },
    function() {
        var t, e = Q.createElement("input"),
        n = Q.createElement("div"),
        r = Q.createElement("select"),
        i = r.appendChild(Q.createElement("option")); (n = Q.createElement("div")).setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        t = n.getElementsByTagName("a")[0],
        e.setAttribute("type", "checkbox"),
        n.appendChild(e),
        (t = n.getElementsByTagName("a")[0]).style.cssText = "top:1px",
        ot.getSetAttribute = "t" !== n.className,
        ot.style = /top/.test(t.getAttribute("style")),
        ot.hrefNormalized = "/a" === t.getAttribute("href"),
        ot.checkOn = !!e.value,
        ot.optSelected = i.selected,
        ot.enctype = !!Q.createElement("form").enctype,
        r.disabled = !0,
        ot.optDisabled = !i.disabled,
        (e = Q.createElement("input")).setAttribute("value", ""),
        ot.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        ot.radioValue = "t" === e.value
    } ();
    var be = /\r/g,
    we = /[\x20\t\r\n\f]+/g;
    at.fn.extend({
        val: function(t) {
            var e, n, r, i = this[0];
            return arguments.length ? (r = at.isFunction(t), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? t.call(this, n, at(this).val()) : t) ? i = "": "number" == typeof i ? i += "": at.isArray(i) && (i = at.map(i,
                function(t) {
                    return null == t ? "": t + ""
                })), (e = at.valHooks[this.type] || at.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
            })) : i ? (e = at.valHooks[i.type] || at.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n: "string" == typeof(n = i.value) ? n.replace(be, "") : null == n ? "": n: void 0
        }
    }),
    at.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = at.find.attr(t, "value");
                    return null != e ? e: at.trim(at.text(t)).replace(we, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options,
                    i = t.selectedIndex,
                    o = "select-one" === t.type || 0 > i,
                    a = o ? null: [], s = o ? i + 1 : r.length, u = 0 > i ? s: o ? i: 0; s > u; u++) if (((n = r[u]).selected || u === i) && (ot.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !at.nodeName(n.parentNode, "optgroup"))) {
                        if (e = at(n).val(), o) return e;
                        a.push(e)
                    }
                    return a
                },
                set: function(t, e) {
                    for (var n, r, i = t.options,
                    o = at.makeArray(e), a = i.length; a--;) if (r = i[a], at.inArray(at.valHooks.option.get(r), o) > -1) try {
                        r.selected = n = !0
                    } catch(t) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (t.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    at.each(["radio", "checkbox"],
    function() {
        at.valHooks[this] = {
            set: function(t, e) {
                return at.isArray(e) ? t.checked = at.inArray(at(t).val(), e) > -1 : void 0
            }
        },
        ot.checkOn || (at.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on": t.value
        })
    });
    var Ce, Fe, Ee = at.expr.attrHandle,
    Te = /^(?:checked|selected)$/i,
    Se = ot.getSetAttribute,
    ke = ot.input;
    at.fn.extend({
        attr: function(t, e) {
            return Bt(this, at.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                at.removeAttr(this, t)
            })
        }
    }),
    at.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? at.prop(t, e, n) : (1 === o && at.isXMLDoc(t) || (e = e.toLowerCase(), i = at.attrHooks[e] || (at.expr.match.bool.test(e) ? Fe: Ce)), void 0 !== n ? null === n ? void at.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r: (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r: null == (r = at.find.attr(t, e)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ot.radioValue && "radio" === e && at.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, r, i = 0,
            o = e && e.match(wt);
            if (o && 1 === t.nodeType) for (; n = o[i++];) r = at.propFix[n] || n,
            at.expr.match.bool.test(n) ? ke && Se || !Te.test(n) ? t[r] = !1 : t[at.camelCase("default-" + n)] = t[r] = !1 : at.attr(t, n, ""),
            t.removeAttribute(Se ? n: r)
        }
    }),
    Fe = {
        set: function(t, e, n) {
            return ! 1 === e ? at.removeAttr(t, n) : ke && Se || !Te.test(n) ? t.setAttribute(!Se && at.propFix[n] || n, n) : t[at.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    at.each(at.expr.match.bool.source.match(/\w+/g),
    function(t, e) {
        var n = Ee[e] || at.find.attr;
        ke && Se || !Te.test(e) ? Ee[e] = function(t, e, r) {
            var i, o;
            return r || (o = Ee[e], Ee[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, Ee[e] = o),
            i
        }: Ee[e] = function(t, e, n) {
            return n ? void 0 : t[at.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    ke && Se || (at.attrHooks.value = {
        set: function(t, e, n) {
            return at.nodeName(t, "input") ? void(t.defaultValue = e) : Ce && Ce.set(t, e, n)
        }
    }),
    Se || (Ce = {
        set: function(t, e, n) {
            var r = t.getAttributeNode(n);
            return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)),
            r.value = e += "",
            "value" === n || e === t.getAttribute(n) ? e: void 0
        }
    },
    Ee.id = Ee.name = Ee.coords = function(t, e, n) {
        var r;
        return n ? void 0 : (r = t.getAttributeNode(e)) && "" !== r.value ? r.value: null
    },
    at.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value: void 0
        },
        set: Ce.set
    },
    at.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Ce.set(t, "" !== e && e, n)
        }
    },
    at.each(["width", "height"],
    function(t, e) {
        at.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })),
    ot.style || (at.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Ae = /^(?:input|select|textarea|button|object)$/i,
    Ne = /^(?:a|area)$/i;
    at.fn.extend({
        prop: function(t, e) {
            return Bt(this, at.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = at.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch(t) {}
            })
        }
    }),
    at.extend({
        prop: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && at.isXMLDoc(t) || (e = at.propFix[e] || e, i = at.propHooks[e]),
            void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r: t[e] = n: i && "get" in i && null !== (r = i.get(t, e)) ? r: t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = at.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ae.test(t.nodeName) || Ne.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ot.hrefNormalized || at.each(["href", "src"],
    function(t, e) {
        at.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    ot.optSelected || (at.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    at.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        at.propFix[this.toLowerCase()] = this
    }),
    ot.enctype || (at.propFix.enctype = "encoding");
    var De = /[\t\r\n\f]/g;
    at.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (at.isFunction(t)) return this.each(function(e) {
                at(this).addClass(t.call(this, e, I(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(wt) || []; n = this[u++];) if (i = I(n), r = 1 === n.nodeType && (" " + i + " ").replace(De, " ")) {
                for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = at.trim(r)) && at.attr(n, "class", s)
            }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (at.isFunction(t)) return this.each(function(e) {
                at(this).removeClass(t.call(this, e, I(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(wt) || []; n = this[u++];) if (i = I(n), r = 1 === n.nodeType && (" " + i + " ").replace(De, " ")) {
                for (a = 0; o = e[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                i !== (s = at.trim(r)) && at.attr(n, "class", s)
            }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : at.isFunction(t) ? this.each(function(n) {
                at(this).toggleClass(t.call(this, n, I(this), e), e)
            }) : this.each(function() {
                var e, r, i, o;
                if ("string" === n) for (r = 0, i = at(this), o = t.match(wt) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else void 0 !== t && "boolean" !== n || ((e = I(this)) && at._data(this, "__className__", e), at.attr(this, "class", e || !1 === t ? "": at._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++];) if (1 === n.nodeType && (" " + I(n) + " ").replace(De, " ").indexOf(e) > -1) return ! 0;
            return ! 1
        }
    }),
    at.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(t, e) {
        at.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    at.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Be = t.location,
    je = at.now(),
    Le = /\?/,
    _e = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    at.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, r = null,
        i = at.trim(e + "");
        return i && !at.trim(i.replace(_e,
        function(t, e, i, o) {
            return n && e && (r = 0),
            0 === r ? t: (n = i || e, r += !o - !i, "")
        })) ? Function("return " + i)() : at.error("Invalid JSON: " + e)
    },
    at.parseXML = function(e) {
        var n, r;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (r = new t.DOMParser, n = r.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch(t) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || at.error("Invalid XML: " + e),
        n
    };
    var Me = /#.*$/,
    qe = /([?&])_=[^&]*/,
    He = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Pe = /^(?:GET|HEAD)$/,
    Oe = /^\/\//,
    Re = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ie = {},
    ze = {},
    $e = "*/".concat("*"),
    We = Be.href,
    Ve = Re.exec(We.toLowerCase()) || [];
    at.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: We,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ve[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $e,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": at.parseJSON,
                "text xml": at.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? W(W(t, at.ajaxSettings), e) : W(at.ajaxSettings, t)
        },
        ajaxPrefilter: z(Ie),
        ajaxTransport: z(ze),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, f, y, x, w, F = n;
                2 !== b && (b = 2, u && t.clearTimeout(u), c = void 0, s = i || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (x = function(t, e, n) {
                    for (var r, i, o, a, s = t.contents,
                    u = t.dataTypes;
                    "*" === u[0];) u.shift(),
                    void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i) for (a in s) if (s[a] && s[a].test(i)) {
                        u.unshift(a);
                        break
                    }
                    if (u[0] in n) o = u[0];
                    else {
                        for (a in n) {
                            if (!u[0] || t.converters[a + " " + u[0]]) {
                                o = a;
                                break
                            }
                            r || (r = a)
                        }
                        o = o || r
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
                } (d, C, r)), x = function(t, e, n, r) {
                    var i, o, a, s, u, l = {},
                    c = t.dataTypes.slice();
                    if (c[1]) for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
                    for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                        if (! (a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) { ! 0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && t.throws) e = a(e);
                        else try {
                            e = a(e)
                        } catch(t) {
                            return {
                                state: "parsererror",
                                error: a ? t: "No conversion from " + u + " to " + o
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                } (d, x, C, o), o ? (d.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (at.lastModified[a] = w), (w = C.getResponseHeader("etag")) && (at.etag[a] = w)), 204 === e || "HEAD" === d.type ? F = "nocontent": 304 === e ? F = "notmodified": (F = x.state, f = x.data, y = x.error, o = !y)) : (y = F, !e && F || (F = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || F) + "", o ? g.resolveWith(h, [f, F, C]) : g.rejectWith(h, [C, F, y]), C.statusCode(v), v = void 0, l && p.trigger(o ? "ajaxSuccess": "ajaxError", [C, d, o ? f: y]), m.fireWith(h, [C, F]), l && (p.trigger("ajaxComplete", [C, d]), --at.active || at.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0),
            n = n || {};
            var i, o, a, s, u, l, c, f, d = at.ajaxSetup({},
            n),
            h = d.context || d,
            p = d.context && (h.nodeType || h.jquery) ? at(h) : at.event,
            g = at.Deferred(),
            m = at.Callbacks("once memory"),
            v = d.statusCode || {},
            y = {},
            x = {},
            b = 0,
            w = "canceled",
            C = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!f) for (f = {}; e = He.exec(s);) f[e[1].toLowerCase()] = e[2];
                        e = f[t.toLowerCase()]
                    }
                    return null == e ? null: e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s: null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return b || (t = x[n] = x[n] || t, y[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return b || (d.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > b) for (e in t) v[e] = [v[e], t[e]];
                    else C.always(t[C.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return c && c.abort(e),
                    r(0, e),
                    this
                }
            };
            if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, d.url = ((e || d.url || We) + "").replace(Me, "").replace(Oe, Ve[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = at.trim(d.dataType || "*").toLowerCase().match(wt) || [""], null == d.crossDomain && (i = Re.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ve[1] && i[2] === Ve[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Ve[3] || ("http:" === Ve[1] ? "80": "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = at.param(d.data, d.traditional)), $(Ie, d, n, C), 2 === b) return C; (l = at.event && d.global) && 0 == at.active++&&at.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Pe.test(d.type),
            a = d.url,
            d.hasContent || (d.data && (a = d.url += (Le.test(a) ? "&": "?") + d.data, delete d.data), !1 === d.cache && (d.url = qe.test(a) ? a.replace(qe, "$1_=" + je++) : a + (Le.test(a) ? "&": "?") + "_=" + je++)),
            d.ifModified && (at.lastModified[a] && C.setRequestHeader("If-Modified-Since", at.lastModified[a]), at.etag[a] && C.setRequestHeader("If-None-Match", at.etag[a])),
            (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && C.setRequestHeader("Content-Type", d.contentType),
            C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + $e + "; q=0.01": "") : d.accepts["*"]);
            for (o in d.headers) C.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || 2 === b)) return C.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) C[o](d[o]);
            if (c = $(ze, d, n, C)) {
                if (C.readyState = 1, l && p.trigger("ajaxSend", [C, d]), 2 === b) return C;
                d.async && d.timeout > 0 && (u = t.setTimeout(function() {
                    C.abort("timeout")
                },
                d.timeout));
                try {
                    b = 1,
                    c.send(y, r)
                } catch(t) {
                    if (! (2 > b)) throw t;
                    r( - 1, t)
                }
            } else r( - 1, "No Transport");
            return C
        },
        getJSON: function(t, e, n) {
            return at.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return at.get(t, void 0, e, "script")
        }
    }),
    at.each(["get", "post"],
    function(t, e) {
        at[e] = function(t, n, r, i) {
            return at.isFunction(n) && (i = i || r, r = n, n = void 0),
            at.ajax(at.extend({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            },
            at.isPlainObject(t) && t))
        }
    }),
    at._evalUrl = function(t) {
        return at.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    },
    at.fn.extend({
        wrapAll: function(t) {
            if (at.isFunction(t)) return this.each(function(e) {
                at(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = at(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return at.isFunction(t) ? this.each(function(e) {
                at(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = at(this),
                n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = at.isFunction(t);
            return this.each(function(n) {
                at(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                at.nodeName(this, "body") || at(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    at.expr.filters.hidden = function(t) {
        return ot.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length: function(t) {
            for (; t && 1 === t.nodeType;) {
                if ("none" === V(t) || "hidden" === t.type) return ! 0;
                t = t.parentNode
            }
            return ! 1
        } (t)
    },
    at.expr.filters.visible = function(t) {
        return ! at.expr.filters.hidden(t)
    };
    var Xe = /%20/g,
    Ge = /\[\]$/,
    Ue = /\r?\n/g,
    Ye = /^(?:submit|button|image|reset|file)$/i,
    Je = /^(?:input|select|textarea|keygen)/i;
    at.param = function(t, e) {
        var n, r = [],
        i = function(t, e) {
            e = at.isFunction(e) ? e() : null == e ? "": e,
            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = at.ajaxSettings && at.ajaxSettings.traditional), at.isArray(t) || t.jquery && !at.isPlainObject(t)) at.each(t,
        function() {
            i(this.name, this.value)
        });
        else for (n in t) X(n, t[n], e, i);
        return r.join("&").replace(Xe, "+")
    },
    at.fn.extend({
        serialize: function() {
            return at.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = at.prop(this, "elements");
                return t ? at.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !at(this).is(":disabled") && Je.test(this.nodeName) && !Ye.test(t) && (this.checked || !jt.test(t))
            }).map(function(t, e) {
                var n = at(this).val();
                return null == n ? null: at.isArray(n) ? at.map(n,
                function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ue, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ue, "\r\n")
                }
            }).get()
        }
    }),
    at.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
    function() {
        return this.isLocal ? U() : Q.documentMode > 8 ? G() : /^(get|post|head|put|delete|options)$/i.test(this.type) && G() || U()
    }: G;
    var Qe = 0,
    Ke = {},
    Ze = at.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload",
    function() {
        for (var t in Ke) Ke[t](void 0, !0)
    }),
    ot.cors = !!Ze && "withCredentials" in Ze,
    (Ze = ot.ajax = !!Ze) && at.ajaxTransport(function(e) {
        if (!e.crossDomain || ot.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, a = e.xhr(),
                    s = ++Qe;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(e.hasContent && e.data || null),
                    n = function(t, r) {
                        var o, u, l;
                        if (n && (r || 4 === a.readyState)) if (delete Ke[s], n = void 0, a.onreadystatechange = at.noop, r) 4 !== a.readyState && a.abort();
                        else {
                            l = {},
                            o = a.status,
                            "string" == typeof a.responseText && (l.text = a.responseText);
                            try {
                                u = a.statusText
                            } catch(t) {
                                u = ""
                            }
                            o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                        }
                        l && i(o, u, l, a.getAllResponseHeaders())
                    },
                    e.async ? 4 === a.readyState ? t.setTimeout(n) : a.onreadystatechange = Ke[s] = n: n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    at.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return at.globalEval(t),
                t
            }
        }
    }),
    at.ajaxPrefilter("script",
    function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET", t.global = !1)
    }),
    at.ajaxTransport("script",
    function(t) {
        if (t.crossDomain) {
            var e, n = Q.head || at("head")[0] || Q.documentElement;
            return {
                send: function(r, i) { (e = Q.createElement("script")).async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, n) { (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || i(200, "success"))
                    },
                    n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
    en = /(=)\?(?=&|$)|\?\?/;
    at.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || at.expando + "_" + je++;
            return this[t] = !0,
            t
        }
    }),
    at.ajaxPrefilter("json jsonp",
    function(e, n, r) {
        var i, o, a, s = !1 !== e.jsonp && (en.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = at.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(en, "$1" + i) : !1 !== e.jsonp && (e.url += (Le.test(e.url) ? "&": "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return a || at.error(i + " was not called"),
            a[0]
        },
        e.dataTypes[0] = "json", o = t[i], t[i] = function() {
            a = arguments
        },
        r.always(function() {
            void 0 === o ? at(t).removeProp(i) : t[i] = o,
            e[i] && (e.jsonpCallback = n.jsonpCallback, tn.push(i)),
            a && at.isFunction(o) && o(a[0]),
            a = o = void 0
        }), "script") : void 0
    }),
    at.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1),
        e = e || Q;
        var r = gt.exec(t),
        i = !n && [];
        return r ? [e.createElement(r[1])] : (r = m([t], e, i), i && i.length && at(i).remove(), at.merge([], r.childNodes))
    };
    var nn = at.fn.load;
    at.fn.load = function(t, e, n) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var r, i, o, a = this,
        s = t.indexOf(" ");
        return s > -1 && (r = at.trim(t.slice(s, t.length)), t = t.slice(0, s)),
        at.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"),
        a.length > 0 && at.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            a.html(r ? at("<div>").append(at.parseHTML(t)).find(r) : t)
        }).always(n &&
        function(t, e) {
            a.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }),
        this
    },
    at.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(t, e) {
        at.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    at.expr.filters.animated = function(t) {
        return at.grep(at.timers,
        function(e) {
            return t === e.elem
        }).length
    },
    at.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, a, s, u, l = at.css(t, "position"),
            c = at(t),
            f = {};
            "static" === l && (t.style.position = "relative"),
            s = c.offset(),
            o = at.css(t, "top"),
            u = at.css(t, "left"),
            ("absolute" === l || "fixed" === l) && at.inArray("auto", [o, u]) > -1 ? (r = c.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0),
            at.isFunction(e) && (e = e.call(t, n, at.extend({},
            s))),
            null != e.top && (f.top = e.top - s.top + a),
            null != e.left && (f.left = e.left - s.left + i),
            "using" in e ? e.using.call(t, f) : c.css(f)
        }
    },
    at.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this: this.each(function(e) {
                at.offset.setOffset(this, t, e)
            });
            var e, n, r = {
                top: 0,
                left: 0
            },
            i = this[0],
            o = i && i.ownerDocument;
            return o ? (e = o.documentElement, at.contains(e, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = Y(o), {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === at.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), at.nodeName(t[0], "html") || (n = t.offset()), n.top += at.css(t[0], "borderTopWidth", !0), n.left += at.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - n.top - at.css(r, "marginTop", !0),
                    left: e.left - n.left - at.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !at.nodeName(t, "html") && "static" === at.css(t, "position");) t = t.offsetParent;
                return t || ie
            })
        }
    }),
    at.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, e) {
        var n = /Y/.test(e);
        at.fn[t] = function(r) {
            return Bt(this,
            function(t, r, i) {
                var o = Y(t);
                return void 0 === i ? o ? e in o ? o[e] : o.document.documentElement[r] : t[r] : void(o ? o.scrollTo(n ? at(o).scrollLeft() : i, n ? i: at(o).scrollTop()) : t[r] = i)
            },
            t, r, arguments.length, null)
        }
    }),
    at.each(["top", "left"],
    function(t, e) {
        at.cssHooks[e] = D(ot.pixelPosition,
        function(t, n) {
            return n ? (n = ae(t, e), ne.test(n) ? at(t).position()[e] + "px": n) : void 0
        })
    }),
    at.each({
        Height: "height",
        Width: "width"
    },
    function(t, e) {
        at.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        },
        function(n, r) {
            at.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                a = n || (!0 === r || !0 === i ? "margin": "border");
                return Bt(this,
                function(e, n, r) {
                    var i;
                    return at.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? at.css(e, n, a) : at.style(e, n, r, a)
                },
                e, o ? r: void 0, o, null)
            }
        })
    }),
    at.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    at.fn.size = function() {
        return this.length
    },
    at.fn.andSelf = at.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return at
    });
    var rn = t.jQuery,
    on = t.$;
    return at.noConflict = function(e) {
        return t.$ === at && (t.$ = on),
        e && t.jQuery === at && (t.jQuery = rn),
        at
    },
    e || (t.jQuery = t.$ = at),
    at
}),
function(t) {
    var e, n, r = "hasOwnProperty",
    i = /[\.\/]/,
    o = /\s*,\s*/,
    a = function(t, e) {
        return t - e
    },
    s = {
        n: {}
    },
    u = function() {
        for (var t = 0,
        e = this.length; e > t; t++) if (void 0 !== this[t]) return this[t]
    },
    l = function() {
        for (var t = this.length; --t;) if (void 0 !== this[t]) return this[t]
    },
    c = Object.prototype.toString,
    f = String,
    d = Array.isArray ||
    function(t) {
        return t instanceof Array || "[object Array]" == c.call(t)
    };
    eve = function(t, r) {
        var i, o = n,
        s = Array.prototype.slice.call(arguments, 2),
        c = eve.listeners(t),
        f = 0,
        d = [],
        h = {},
        p = [],
        g = e;
        p.firstDefined = u,
        p.lastDefined = l,
        e = t,
        n = 0;
        for (var m = 0,
        v = c.length; v > m; m++)"zIndex" in c[m] && (d.push(c[m].zIndex), c[m].zIndex < 0 && (h[c[m].zIndex] = c[m]));
        for (d.sort(a); d[f] < 0;) if (i = h[d[f++]], p.push(i.apply(r, s)), n) return n = o,
        p;
        for (m = 0; v > m; m++) if ("zIndex" in (i = c[m])) if (i.zIndex == d[f]) {
            if (p.push(i.apply(r, s)), n) break;
            do {
                if (f++, (i = h[d[f]]) && p.push(i.apply(r, s)), n) break
            } while ( i )
        } else h[i.zIndex] = i;
        else if (p.push(i.apply(r, s)), n) break;
        return n = o,
        e = g,
        p
    },
    eve._events = s,
    eve.listeners = function(t) {
        var e, n, r, o, a, u, l, c, f = d(t) ? t: t.split(i),
        h = s,
        p = [h],
        g = [];
        for (o = 0, a = f.length; a > o; o++) {
            for (c = [], u = 0, l = p.length; l > u; u++) for (h = p[u].n, n = [h[f[o]], h["*"]], r = 2; r--;)(e = n[r]) && (c.push(e), g = g.concat(e.f || []));
            p = c
        }
        return g
    },
    eve.separator = function(t) {
        t ? (t = f(t).replace(/(?=[\.\^\]\[\-])/g, "\\"), t = "[" + t + "]", i = new RegExp(t)) : i = /[\.\/]/
    },
    eve.on = function(t, e) {
        if ("function" != typeof e) return function() {};
        for (var n = d(t) ? d(t[0]) ? t: [t] : f(t).split(o), r = 0, a = n.length; a > r; r++) !
        function(t) {
            for (var n, r = d(t) ? t: f(t).split(i), o = s, a = 0, u = r.length; u > a; a++) o = o.n,
            o = o.hasOwnProperty(r[a]) && o[r[a]] || (o[r[a]] = {
                n: {}
            });
            for (o.f = o.f || [], a = 0, u = o.f.length; u > a; a++) if (o.f[a] == e) {
                n = !0;
                break
            } ! n && o.f.push(e)
        } (n[r]);
        return function(t) { + t == +t && (e.zIndex = +t)
        }
    },
    eve.f = function(t) {
        var e = [].slice.call(arguments, 1);
        return function() {
            eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    },
    eve.stop = function() {
        n = 1
    },
    eve.nt = function(t) {
        var n = d(e) ? e.join(".") : e;
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(n) : n
    },
    eve.nts = function() {
        return d(e) ? e: e.split(i)
    },
    eve.off = eve.unbind = function(t, e) {
        if (t) {
            var n = d(t) ? d(t[0]) ? t: [t] : f(t).split(o);
            if (n.length > 1) for (var a = 0,
            u = n.length; u > a; a++) eve.off(n[a], e);
            else {
                n = d(t) ? t: f(t).split(i);
                var l, c, h, p, g, m = [s],
                v = [];
                for (a = 0, u = n.length; u > a; a++) for (p = 0; p < m.length; p += h.length - 2) {
                    if (h = [p, 1], l = m[p].n, "*" != n[a]) l[n[a]] && (h.push(l[n[a]]), v.unshift({
                        n: l,
                        name: n[a]
                    }));
                    else for (c in l) l[r](c) && (h.push(l[c]), v.unshift({
                        n: l,
                        name: c
                    }));
                    m.splice.apply(m, h)
                }
                for (a = 0, u = m.length; u > a; a++) for (l = m[a]; l.n;) {
                    if (e) {
                        if (l.f) {
                            for (p = 0, g = l.f.length; g > p; p++) if (l.f[p] == e) {
                                l.f.splice(p, 1);
                                break
                            } ! l.f.length && delete l.f
                        }
                        for (c in l.n) if (l.n[r](c) && l.n[c].f) {
                            var y = l.n[c].f;
                            for (p = 0, g = y.length; g > p; p++) if (y[p] == e) {
                                y.splice(p, 1);
                                break
                            } ! y.length && delete l.n[c].f
                        }
                    } else {
                        delete l.f;
                        for (c in l.n) l.n[r](c) && l.n[c].f && delete l.n[c].f
                    }
                    l = l.n
                }
                t: for (a = 0, u = v.length; u > a; a++) {
                    l = v[a];
                    for (c in l.n[l.name].f) continue t;
                    for (c in l.n[l.name].n) continue t;
                    delete l.n[l.name]
                }
            }
        } else eve._events = s = {
            n: {}
        }
    },
    eve.once = function(t, e) {
        var n = function() {
            return eve.off(t, n),
            e.apply(this, arguments)
        };
        return eve.on(t, n)
    },
    eve.version = "0.5.0",
    eve.toString = function() {
        return "You are running Eve 0.5.0"
    },
    "undefined" != typeof module && module.exports ? module.exports = eve: "function" == typeof define && define.amd ? define("eve", [],
    function() {
        return eve
    }) : t.eve = eve
} (this),
function(t, e) {
    if ("function" == typeof define && define.amd) define(["eve"],
    function(n) {
        return e(t, n)
    });
    else if ("undefined" != typeof exports) {
        var n = require("eve");
        module.exports = e(t, n)
    } else e(t, t.eve)
} (window || this,
function(t, e) {
    var n = function(e) {
        var n, r = {},
        i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame ||
        function(t) {
            return setTimeout(t, 16, (new Date).getTime()),
            !0
        },
        o = Array.isArray ||
        function(t) {
            return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
        },
        a = 0,
        s = "M" + ( + new Date).toString(36),
        u = Date.now ||
        function() {
            return + new Date
        },
        l = function(t) {
            if (null == t) return this.s;
            var e = this.s - t;
            this.b += this.dur * e,
            this.B += this.dur * e,
            this.s = t
        },
        c = function(t) {
            return null == t ? this.spd: void(this.spd = t)
        },
        f = function(t) {
            return null == t ? this.dur: (this.s = this.s * t / this.dur, void(this.dur = t))
        },
        d = function() {
            delete r[this.id],
            this.update(),
            e("mina.stop." + this.id, this)
        },
        h = function() {
            this.pdif || (delete r[this.id], this.update(), this.pdif = this.get() - this.b)
        },
        p = function() {
            this.pdif && (this.b = this.get() - this.pdif, delete this.pdif, r[this.id] = this, m())
        },
        g = function() {
            var t;
            if (o(this.start)) {
                t = [];
                for (var e = 0,
                n = this.start.length; n > e; e++) t[e] = +this.start[e] + (this.end[e] - this.start[e]) * this.easing(this.s)
            } else t = +this.start + (this.end - this.start) * this.easing(this.s);
            this.set(t)
        },
        m = function(t) {
            if (t) {
                var o = 0;
                for (var a in r) if (r.hasOwnProperty(a)) {
                    var s = r[a],
                    u = s.get();
                    o++,
                    s.s = (u - s.b) / (s.dur / s.spd),
                    s.s >= 1 && (delete r[a], s.s = 1, o--,
                    function(t) {
                        setTimeout(function() {
                            e("mina.finish." + t.id, t)
                        })
                    } (s)),
                    s.update()
                }
                n = !!o && i(m)
            } else n || (n = i(m))
        },
        v = function(t, e, n, i, o, u, y) {
            var x = {
                id: s + (a++).toString(36),
                start: t,
                end: e,
                b: n,
                s: 0,
                dur: i - n,
                spd: 1,
                get: o,
                set: u,
                easing: y || v.linear,
                status: l,
                speed: c,
                duration: f,
                stop: d,
                pause: h,
                resume: p,
                update: g
            };
            r[x.id] = x;
            var b, w = 0;
            for (b in r) if (r.hasOwnProperty(b) && 2 == ++w) break;
            return 1 == w && m(),
            x
        };
        return v.time = u,
        v.getById = function(t) {
            return r[t] || null
        },
        v.linear = function(t) {
            return t
        },
        v.easeout = function(t) {
            return Math.pow(t, 1.7)
        },
        v.easein = function(t) {
            return Math.pow(t, .48)
        },
        v.easeinout = function(t) {
            if (1 == t) return 1;
            if (0 == t) return 0;
            var e = .48 - t / 1.04,
            n = Math.sqrt(.1734 + e * e),
            r = n - e,
            i = -n - e,
            o = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1) + Math.pow(Math.abs(i), 1 / 3) * (0 > i ? -1 : 1) + .5;
            return 3 * (1 - o) * o * o + o * o * o
        },
        v.backin = function(t) {
            if (1 == t) return 1;
            return t * t * (2.70158 * t - 1.70158)
        },
        v.backout = function(t) {
            if (0 == t) return 0;
            return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
        },
        v.elastic = function(t) {
            return t == !!t ? t: Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
        },
        v.bounce = function(t) {
            var e;
            return 1 / 2.75 > t ? e = 7.5625 * t * t: 2 / 2.75 > t ? (t -= 1.5 / 2.75, e = 7.5625 * t * t + .75) : 2.5 / 2.75 > t ? (t -= 2.25 / 2.75, e = 7.5625 * t * t + .9375) : (t -= 2.625 / 2.75, e = 7.5625 * t * t + .984375),
            e
        },
        t.mina = v,
        v
    } (void 0 === e ?
    function() {}: e),
    r = function(t) {
        function n(t, e) {
            if (t) {
                if (t.nodeType) return m(t);
                if (i(t, "array") && n.set) return n.set.apply(n, t);
                if (t instanceof f) return t;
                if (null == e) try {
                    return t = y.doc.querySelector(String(t)),
                    m(t)
                } catch(t) {
                    return null
                }
            }
            return t = null == t ? "100%": t,
            e = null == e ? "100%": e,
            new p(t, e)
        }
        function r(t, e) {
            if (e) {
                if ("#text" == t && (t = y.doc.createTextNode(e.text || e["#text"] || "")), "#comment" == t && (t = y.doc.createComment(e.text || e["#text"] || "")), "string" == typeof t && (t = r(t)), "string" == typeof e) return 1 == t.nodeType ? "xlink:" == e.substring(0, 6) ? t.getAttributeNS(O, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(R, e.substring(4)) : t.getAttribute(e) : "text" == e ? t.nodeValue: null;
                if (1 == t.nodeType) {
                    for (var n in e) if (e[x](n)) {
                        var i = b(e[n]);
                        i ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(O, n.substring(6), i) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(R, n.substring(4), i) : t.setAttribute(n, i) : t.removeAttribute(n)
                    }
                } else "text" in e && (t.nodeValue = e.text)
            } else t = y.doc.createElementNS(R, t);
            return t
        }
        function i(t, e) {
            return "finite" == (e = b.prototype.toLowerCase.call(e)) ? isFinite(t) : !("array" != e || !(t instanceof Array || Array.isArray && Array.isArray(t))) || ("null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || N.call(t).slice(8, -1).toLowerCase() == e)
        }
        function o(t) {
            if ("function" == typeof t || Object(t) !== t) return t;
            var e = new t.constructor;
            for (var n in t) t[x](n) && (e[n] = o(t[n]));
            return e
        }
        function a(t, e, n) {
            function r() {
                var i = Array.prototype.slice.call(arguments, 0),
                o = i.join("â€"),
                a = r.cache = r.cache || {},
                s = r.count = r.count || [];
                return a[x](o) ? (function(t, e) {
                    for (var n = 0,
                    r = t.length; r > n; n++) if (t[n] === e) return t.push(t.splice(n, 1)[0])
                } (s, o), n ? n(a[o]) : a[o]) : (s.length >= 1e3 && delete a[s.shift()], s.push(o), a[o] = t.apply(e, i), n ? n(a[o]) : a[o])
            }
            return r
        }
        function s(t, e, n, r, i, o) {
            if (null == i) {
                var a = t - n,
                u = e - r;
                return a || u ? (180 + 180 * F.atan2( - u, -a) / k + 360) % 360 : 0
            }
            return s(t, e, i, o) - s(n, r, i, o)
        }
        function u(t) {
            return t % 360 * k / 180
        }
        function l(t) {
            return t.node.ownerSVGElement && m(t.node.ownerSVGElement) || n.select("svg")
        }
        function c(t) {
            i(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
            for (var e = 0,
            n = 0,
            r = this.node; this[e];) delete this[e++];
            for (e = 0; e < t.length; e++)"set" == t[e].type ? t[e].forEach(function(t) {
                r.appendChild(t.node)
            }) : r.appendChild(t[e].node);
            var o = r.childNodes;
            for (e = 0; e < o.length; e++) this[n++] = m(o[e]);
            return this
        }
        function f(t) {
            if (t.snap in I) return I[t.snap];
            var e;
            try {
                e = t.ownerSVGElement
            } catch(t) {}
            this.node = t,
            e && (this.paper = new p(e)),
            this.type = t.tagName || t.nodeName;
            var n = this.id = P(this);
            if (this.anims = {},
            this._ = {
                transform: []
            },
            t.snap = n, I[n] = this, "g" == this.type && (this.add = c), this.type in {
                g: 1,
                mask: 1,
                pattern: 1,
                symbol: 1
            }) for (var r in p.prototype) p.prototype[x](r) && (this[r] = p.prototype[r])
        }
        function d(t) {
            this.node = t
        }
        function h(t, e) {
            var n = r(t);
            e.appendChild(n);
            return m(n)
        }
        function p(t, e) {
            var n, i, o, a = p.prototype;
            if (t && t.tagName && "svg" == t.tagName.toLowerCase()) {
                if (t.snap in I) return I[t.snap];
                var s = t.ownerDocument;
                n = new f(t),
                i = t.getElementsByTagName("desc")[0],
                o = t.getElementsByTagName("defs")[0],
                i || ((i = r("desc")).appendChild(s.createTextNode("Created with Snap")), n.node.appendChild(i)),
                o || (o = r("defs"), n.node.appendChild(o)),
                n.defs = o;
                for (var u in a) a[x](u) && (n[u] = a[u]);
                n.paper = n.root = n
            } else n = h("svg", y.doc.body),
            r(n.node, {
                height: e,
                version: 1.1,
                width: t,
                xmlns: R
            });
            return n
        }
        function m(t) {
            return t ? t instanceof f || t instanceof d ? t: t.tagName && "svg" == t.tagName.toLowerCase() ? new p(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new p(t.contentDocument.getElementsByTagName("svg")[0]) : new f(t) : t
        }
        function v(t, e) {
            for (var n = 0,
            r = t.length; r > n; n++) {
                var i = {
                    type: t[n].type,
                    attr: t[n].attr()
                },
                o = t[n].children();
                e.push(i),
                o.length && v(o, i.childNodes = [])
            }
        }
        n.version = "0.5.1",
        n.toString = function() {
            return "Snap v" + this.version
        },
        n._ = {};
        var y = {
            win: t.window,
            doc: t.window.document
        };
        n._.glob = y;
        var x = "hasOwnProperty",
        b = String,
        w = parseFloat,
        C = parseInt,
        F = Math,
        E = F.max,
        T = F.min,
        S = F.abs,
        k = (F.pow, F.PI),
        A = (F.round, ""),
        N = Object.prototype.toString,
        D = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
        B = (n._.separator = /[,\s]+/, /[\s]*,[\s]*/),
        j = {
            hs: 1,
            rg: 1
        },
        L = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
        _ = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
        M = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,
        q = 0,
        H = "S" + ( + new Date).toString(36),
        P = function(t) {
            return (t && t.type ? t.type: A) + H + (q++).toString(36)
        },
        O = "http://www.w3.org/1999/xlink",
        R = "http://www.w3.org/2000/svg",
        I = {};
        n.url = function(t) {
            return "url('#" + t + "')"
        },
        n._.$ = r,
        n._.id = P,
        n.format = function() {
            var t = /\{([^\}]+)\}/g,
            e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
            return function(n, r) {
                return b(n).replace(t,
                function(t, n) {
                    return function(t, n, r) {
                        var i = r;
                        return n.replace(e,
                        function(t, e, n, r, o) {
                            e = e || r,
                            i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()))
                        }),
                        i = (null == i || i == r ? t: i) + ""
                    } (t, n, r)
                })
            }
        } (),
        n._.clone = o,
        n._.cacher = a,
        n.rad = u,
        n.deg = function(t) {
            return 180 * t / k % 360
        },
        n.sin = function(t) {
            return F.sin(n.rad(t))
        },
        n.tan = function(t) {
            return F.tan(n.rad(t))
        },
        n.cos = function(t) {
            return F.cos(n.rad(t))
        },
        n.asin = function(t) {
            return n.deg(F.asin(t))
        },
        n.acos = function(t) {
            return n.deg(F.acos(t))
        },
        n.atan = function(t) {
            return n.deg(F.atan(t))
        },
        n.atan2 = function(t) {
            return n.deg(F.atan2(t))
        },
        n.angle = s,
        n.len = function(t, e, r, i) {
            return Math.sqrt(n.len2(t, e, r, i))
        },
        n.len2 = function(t, e, n, r) {
            return (t - n) * (t - n) + (e - r) * (e - r)
        },
        n.closestPoint = function(t, e, n) {
            function r(t) {
                var r = t.x - e,
                i = t.y - n;
                return r * r + i * i
            }
            for (var i, o, a, s, u = t.node,
            l = u.getTotalLength(), c = l / u.pathSegList.numberOfItems * .125, f = 1 / 0, d = 0; l >= d; d += c)(s = r(a = u.getPointAtLength(d))) < f && (i = a, o = d, f = s);
            for (c *= .5; c > .5;) {
                var h, p, g, m, v, y; (g = o - c) >= 0 && (v = r(h = u.getPointAtLength(g))) < f ? (i = h, o = g, f = v) : (m = o + c) <= l && (y = r(p = u.getPointAtLength(m))) < f ? (i = p, o = m, f = y) : c *= .5
            }
            return i = {
                x: i.x,
                y: i.y,
                length: o,
                distance: Math.sqrt(f)
            }
        },
        n.is = i,
        n.snapTo = function(t, e, n) {
            if (n = i(n, "finite") ? n: 10, i(t, "array")) {
                for (var r = t.length; r--;) if (S(t[r] - e) <= n) return t[r]
            } else {
                var o = e % (t = +t);
                if (n > o) return e - o;
                if (o > t - n) return e - o + t
            }
            return e
        },
        n.getRGB = a(function(t) {
            if (!t || (t = b(t)).indexOf("-") + 1) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: $
            };
            if ("none" == t) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: $
            };
            if (! (j[x](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = z(t)), !t) return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: $
            };
            var e, r, o, a, s, u, l = t.match(D);
            return l ? (l[2] && (o = C(l[2].substring(5), 16), r = C(l[2].substring(3, 5), 16), e = C(l[2].substring(1, 3), 16)), l[3] && (o = C((s = l[3].charAt(3)) + s, 16), r = C((s = l[3].charAt(2)) + s, 16), e = C((s = l[3].charAt(1)) + s, 16)), l[4] && (u = l[4].split(B), e = w(u[0]), "%" == u[0].slice( - 1) && (e *= 2.55), r = w(u[1]), "%" == u[1].slice( - 1) && (r *= 2.55), o = w(u[2]), "%" == u[2].slice( - 1) && (o *= 2.55), "rgba" == l[1].toLowerCase().slice(0, 4) && (a = w(u[3])), u[3] && "%" == u[3].slice( - 1) && (a /= 100)), l[5] ? (u = l[5].split(B), e = w(u[0]), "%" == u[0].slice( - 1) && (e /= 100), r = w(u[1]), "%" == u[1].slice( - 1) && (r /= 100), o = w(u[2]), "%" == u[2].slice( - 1) && (o /= 100), ("deg" == u[0].slice( - 3) || "Â°" == u[0].slice( - 1)) && (e /= 360), "hsba" == l[1].toLowerCase().slice(0, 4) && (a = w(u[3])), u[3] && "%" == u[3].slice( - 1) && (a /= 100), n.hsb2rgb(e, r, o, a)) : l[6] ? (u = l[6].split(B), e = w(u[0]), "%" == u[0].slice( - 1) && (e /= 100), r = w(u[1]), "%" == u[1].slice( - 1) && (r /= 100), o = w(u[2]), "%" == u[2].slice( - 1) && (o /= 100), ("deg" == u[0].slice( - 3) || "Â°" == u[0].slice( - 1)) && (e /= 360), "hsla" == l[1].toLowerCase().slice(0, 4) && (a = w(u[3])), u[3] && "%" == u[3].slice( - 1) && (a /= 100), n.hsl2rgb(e, r, o, a)) : (e = T(F.round(e), 255), r = T(F.round(r), 255), o = T(F.round(o), 255), a = T(E(a, 0), 1), l = {
                r: e,
                g: r,
                b: o,
                toString: $
            },
            l.hex = "#" + (16777216 | o | r << 8 | e << 16).toString(16).slice(1), l.opacity = i(a, "finite") ? a: 1, l)) : {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: $
            }
        },
        n),
        n.hsb = a(function(t, e, r) {
            return n.hsb2rgb(t, e, r).hex
        }),
        n.hsl = a(function(t, e, r) {
            return n.hsl2rgb(t, e, r).hex
        }),
        n.rgb = a(function(t, e, n, r) {
            if (i(r, "finite")) {
                var o = F.round;
                return "rgba(" + [o(t), o(e), o(n), +r.toFixed(2)] + ")"
            }
            return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
        });
        var z = function(t) {
            var e = y.doc.getElementsByTagName("head")[0] || y.doc.getElementsByTagName("svg")[0],
            n = "rgb(255, 0, 0)";
            return (z = a(function(t) {
                if ("red" == t.toLowerCase()) return n;
                e.style.color = n,
                e.style.color = t;
                var r = y.doc.defaultView.getComputedStyle(e, A).getPropertyValue("color");
                return r == n ? null: r
            }))(t)
        },
        $ = function() {
            return 1 == this.opacity || null == this.opacity ? this.hex: "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        },
        W = function(t, e, r) {
            if (null == e && i(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, e = t.g, t = t.r), null == e && i(t, string)) {
                var o = n.getRGB(t);
                t = o.r,
                e = o.g,
                r = o.b
            }
            return (t > 1 || e > 1 || r > 1) && (t /= 255, e /= 255, r /= 255),
            [t, e, r]
        },
        V = function(t, e, r, o) {
            var a = {
                r: t = F.round(255 * t),
                g: e = F.round(255 * e),
                b: r = F.round(255 * r),
                opacity: i(o, "finite") ? o: 1,
                hex: n.rgb(t, e, r),
                toString: $
            };
            return i(o, "finite") && (a.opacity = o),
            a
        };
        n.color = function(t) {
            var e;
            return i(t, "object") && "h" in t && "s" in t && "b" in t ? (e = n.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : i(t, "object") && "h" in t && "s" in t && "l" in t ? (e = n.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (i(t, "string") && (t = n.getRGB(t)), i(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = n.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = n.rgb2hsb(t), t.v = e.b) : (t = {
                hex: "none"
            },
            t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)),
            t.toString = $,
            t
        },
        n.hsb2rgb = function(t, e, n, r) {
            i(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, r = t.o, t = t.h);
            var o, a, s, u, l;
            return t = (t *= 360) % 360 / 60,
            l = n * e,
            u = l * (1 - S(t % 2 - 1)),
            o = a = s = n - l,
            t = ~~t,
            o += [l, u, 0, 0, u, l][t],
            a += [u, l, l, u, 0, 0][t],
            s += [0, 0, u, l, l, u][t],
            V(o, a, s, r)
        },
        n.hsl2rgb = function(t, e, n, r) {
            i(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h),
            (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100);
            var o, a, s, u, l;
            return t = (t *= 360) % 360 / 60,
            l = 2 * e * (.5 > n ? n: 1 - n),
            u = l * (1 - S(t % 2 - 1)),
            o = a = s = n - l / 2,
            t = ~~t,
            o += [l, u, 0, 0, u, l][t],
            a += [u, l, l, u, 0, 0][t],
            s += [0, 0, u, l, l, u][t],
            V(o, a, s, r)
        },
        n.rgb2hsb = function(t, e, n) {
            t = (n = W(t, e, n))[0],
            e = n[1],
            n = n[2];
            var r, i, o, a;
            return o = E(t, e, n),
            a = o - T(t, e, n),
            r = 0 == a ? null: o == t ? (e - n) / a: o == e ? (n - t) / a + 2 : (t - e) / a + 4,
            r = (r + 360) % 6 * 60 / 360,
            i = 0 == a ? 0 : a / o,
            {
                h: r,
                s: i,
                b: o,
                toString: function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                }
            }
        },
        n.rgb2hsl = function(t, e, n) {
            t = (n = W(t, e, n))[0],
            e = n[1],
            n = n[2];
            var r, i, o, a, s, u;
            return a = E(t, e, n),
            s = T(t, e, n),
            u = a - s,
            r = 0 == u ? null: a == t ? (e - n) / u: a == e ? (n - t) / u + 2 : (t - e) / u + 4,
            r = (r + 360) % 6 * 60 / 360,
            o = (a + s) / 2,
            i = 0 == u ? 0 : .5 > o ? u / (2 * o) : u / (2 - 2 * o),
            {
                h: r,
                s: i,
                l: o,
                toString: function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                }
            }
        },
        n.parsePathString = function(t) {
            if (!t) return null;
            var e = n.path(t);
            if (e.arr) return n.path.clone(e.arr);
            var r = {
                a: 7,
                c: 6,
                o: 2,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                u: 3,
                z: 0
            },
            o = [];
            return i(t, "array") && i(t[0], "array") && (o = n.path.clone(t)),
            o.length || b(t).replace(L,
            function(t, e, n) {
                var i = [],
                a = e.toLowerCase();
                if (n.replace(M,
                function(t, e) {
                    e && i.push( + e)
                }), "m" == a && i.length > 2 && (o.push([e].concat(i.splice(0, 2))), a = "l", e = "m" == e ? "l": "L"), "o" == a && 1 == i.length && o.push([e, i[0]]), "r" == a) o.push([e].concat(i));
                else for (; i.length >= r[a] && (o.push([e].concat(i.splice(0, r[a]))), r[a]););
            }),
            o.toString = n.path.toString,
            e.arr = n.path.clone(o),
            o
        };
        var X = n.parseTransformString = function(t) {
            if (!t) return null;
            var e = [];
            return i(t, "array") && i(t[0], "array") && (e = n.path.clone(t)),
            e.length || b(t).replace(_,
            function(t, n, r) {
                var i = [];
                n.toLowerCase(),
                r.replace(M,
                function(t, e) {
                    e && i.push( + e)
                }),
                e.push([n].concat(i))
            }),
            e.toString = n.path.toString,
            e
        };
        n._.svgTransform2string = function(t) {
            var e = [];
            return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g,
            function(t, n, r) {
                return r = r.split(/\s*,\s*|\s+/),
                "rotate" == n && 1 == r.length && r.push(0, 0),
                "scale" == n && (r.length > 2 ? r = r.slice(0, 2) : 2 == r.length && r.push(0, 0), 1 == r.length && r.push(r[0], 0, 0)),
                "skewX" == n ? e.push(["m", 1, 0, F.tan(u(r[0])), 1, 0, 0]) : "skewY" == n ? e.push(["m", 1, F.tan(u(r[0])), 0, 1, 0, 0]) : e.push([n.charAt(0)].concat(r)),
                t
            }),
            e
        },
        n._.rgTransform = /^[a-z][\s]*-?\.?\d/i,
        n._.transform2matrix = function(t, e) {
            var r = X(t),
            i = new n.Matrix;
            if (r) for (var o = 0,
            a = r.length; a > o; o++) {
                var s, u, l, c, f, d = r[o],
                h = d.length,
                p = b(d[0]).toLowerCase(),
                g = d[0] != p,
                m = g ? i.invert() : 0;
                "t" == p && 2 == h ? i.translate(d[1], 0) : "t" == p && 3 == h ? g ? (s = m.x(0, 0), u = m.y(0, 0), l = m.x(d[1], d[2]), c = m.y(d[1], d[2]), i.translate(l - s, c - u)) : i.translate(d[1], d[2]) : "r" == p ? 2 == h ? (f = f || e, i.rotate(d[1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == h && (g ? (l = m.x(d[2], d[3]), c = m.y(d[2], d[3]), i.rotate(d[1], l, c)) : i.rotate(d[1], d[2], d[3])) : "s" == p ? 2 == h || 3 == h ? (f = f || e, i.scale(d[1], d[h - 1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == h ? g ? (l = m.x(d[2], d[3]), c = m.y(d[2], d[3]), i.scale(d[1], d[1], l, c)) : i.scale(d[1], d[1], d[2], d[3]) : 5 == h && (g ? (l = m.x(d[3], d[4]), c = m.y(d[3], d[4]), i.scale(d[1], d[2], l, c)) : i.scale(d[1], d[2], d[3], d[4])) : "m" == p && 7 == h && i.add(d[1], d[2], d[3], d[4], d[5], d[6])
            }
            return i
        },
        n._unit2px = function(t, e, n) {
            function i(t) {
                if (null == t) return A;
                if (t == +t) return t;
                r(c, {
                    width: t
                });
                try {
                    return c.getBBox().width
                } catch(t) {
                    return 0
                }
            }
            function o(t) {
                if (null == t) return A;
                if (t == +t) return t;
                r(c, {
                    height: t
                });
                try {
                    return c.getBBox().height
                } catch(t) {
                    return 0
                }
            }
            function a(r, i) {
                null == e ? u[r] = i(t.attr(r) || 0) : r == e && (u = i(null == n ? t.attr(r) || 0 : n))
            }
            var s = l(t).node,
            u = {},
            c = s.querySelector(".svg---mgr");
            switch (c || (c = r("rect"), r(c, {
                x: -9e9,
                y: -9e9,
                width: 10,
                height: 10,
                class: "svg---mgr",
                fill: "none"
            }), s.appendChild(c)), t.type) {
            case "rect":
                a("rx", i),
                a("ry", o);
            case "image":
                a("width", i),
                a("height", o);
            case "text":
                a("x", i),
                a("y", o);
                break;
            case "circle":
                a("cx", i),
                a("cy", o),
                a("r", i);
                break;
            case "ellipse":
                a("cx", i),
                a("cy", o),
                a("rx", i),
                a("ry", o);
                break;
            case "line":
                a("x1", i),
                a("x2", i),
                a("y1", o),
                a("y2", o);
                break;
            case "marker":
                a("refX", i),
                a("markerWidth", i),
                a("refY", o),
                a("markerHeight", o);
                break;
            case "radialGradient":
                a("fx", i),
                a("fy", o);
                break;
            case "tspan":
                a("dx", i),
                a("dy", o);
                break;
            default:
                a(e, i)
            }
            return s.removeChild(c),
            u
        },
        y.doc.contains || y.doc.compareDocumentPosition,
        n._.getSomeDefs = function(t) {
            var e = t.node.ownerSVGElement && m(t.node.ownerSVGElement) || t.node.parentNode && m(t.node.parentNode) || n.select("svg") || n(0, 0),
            r = e.select("defs"),
            i = null != r && r.node;
            return i || (i = h("defs", e.node).node),
            i
        },
        n._.getSomeSVG = l,
        n.select = function(t) {
            return t = b(t).replace(/([^\\]):/g, "$1\\:"),
            m(y.doc.querySelector(t))
        },
        n.selectAll = function(t) {
            for (var e = y.doc.querySelectorAll(t), r = (n.set || Array)(), i = 0; i < e.length; i++) r.push(m(e[i]));
            return r
        },
        setInterval(function() {
            for (var t in I) if (I[x](t)) {
                var e = I[t],
                n = e.node; ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete I[t]
            }
        },
        1e4),
        f.prototype.attr = function(t, n) {
            var r = this.node;
            if (!t) {
                if (1 != r.nodeType) return {
                    text: r.nodeValue
                };
                for (var o = r.attributes,
                a = {},
                s = 0,
                u = o.length; u > s; s++) a[o[s].nodeName] = o[s].nodeValue;
                return a
            }
            if (i(t, "string")) {
                if (! (arguments.length > 1)) return e("snap.util.getattr." + t, this).firstDefined();
                var l = {};
                l[t] = n,
                t = l
            }
            for (var c in t) t[x](c) && e("snap.util.attr." + c, this, t[c]);
            return this
        },
        n.parse = function(t) {
            var e = y.doc.createDocumentFragment(),
            n = !0,
            r = y.doc.createElement("div");
            if ((t = b(t)).match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), r.innerHTML = t, t = r.getElementsByTagName("svg")[0]) if (n) e = t;
            else for (; t.firstChild;) e.appendChild(t.firstChild);
            return new d(e)
        },
        n.fragment = function() {
            for (var t = Array.prototype.slice.call(arguments, 0), e = y.doc.createDocumentFragment(), r = 0, i = t.length; i > r; r++) {
                var o = t[r];
                o.node && o.node.nodeType && e.appendChild(o.node),
                o.nodeType && e.appendChild(o),
                "string" == typeof o && e.appendChild(n.parse(o).node)
            }
            return new d(e)
        },
        n._.make = h,
        n._.wrap = m,
        p.prototype.el = function(t, e) {
            var n = h(t, this.node);
            return e && n.attr(e),
            n
        },
        f.prototype.children = function() {
            for (var t = [], e = this.node.childNodes, r = 0, i = e.length; i > r; r++) t[r] = n(e[r]);
            return t
        },
        f.prototype.toJSON = function() {
            var t = [];
            return v([this], t),
            t[0]
        },
        e.on("snap.util.getattr",
        function() {
            var t = e.nt(),
            n = (t = t.substring(t.lastIndexOf(".") + 1)).replace(/[A-Z]/g,
            function(t) {
                return "-" + t.toLowerCase()
            });
            return G[x](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : r(this.node, t)
        });
        var G = {
            "alignment-baseline": 0,
            "baseline-shift": 0,
            clip: 0,
            "clip-path": 0,
            "clip-rule": 0,
            color: 0,
            "color-interpolation": 0,
            "color-interpolation-filters": 0,
            "color-profile": 0,
            "color-rendering": 0,
            cursor: 0,
            direction: 0,
            display: 0,
            "dominant-baseline": 0,
            "enable-background": 0,
            fill: 0,
            "fill-opacity": 0,
            "fill-rule": 0,
            filter: 0,
            "flood-color": 0,
            "flood-opacity": 0,
            font: 0,
            "font-family": 0,
            "font-size": 0,
            "font-size-adjust": 0,
            "font-stretch": 0,
            "font-style": 0,
            "font-variant": 0,
            "font-weight": 0,
            "glyph-orientation-horizontal": 0,
            "glyph-orientation-vertical": 0,
            "image-rendering": 0,
            kerning: 0,
            "letter-spacing": 0,
            "lighting-color": 0,
            marker: 0,
            "marker-end": 0,
            "marker-mid": 0,
            "marker-start": 0,
            mask: 0,
            opacity: 0,
            overflow: 0,
            "pointer-events": 0,
            "shape-rendering": 0,
            "stop-color": 0,
            "stop-opacity": 0,
            stroke: 0,
            "stroke-dasharray": 0,
            "stroke-dashoffset": 0,
            "stroke-linecap": 0,
            "stroke-linejoin": 0,
            "stroke-miterlimit": 0,
            "stroke-opacity": 0,
            "stroke-width": 0,
            "text-anchor": 0,
            "text-decoration": 0,
            "text-rendering": 0,
            "unicode-bidi": 0,
            visibility: 0,
            "word-spacing": 0,
            "writing-mode": 0
        };
        e.on("snap.util.attr",
        function(t) {
            var n = e.nt(),
            i = {};
            i[n = n.substring(n.lastIndexOf(".") + 1)] = t;
            var o = n.replace(/-(\w)/gi,
            function(t, e) {
                return e.toUpperCase()
            }),
            a = n.replace(/[A-Z]/g,
            function(t) {
                return "-" + t.toLowerCase()
            });
            G[x](a) ? this.node.style[o] = null == t ? A: t: r(this.node, i)
        }),
        n.ajax = function(t, n, r, o) {
            var a = new XMLHttpRequest,
            s = P();
            if (a) {
                if (i(n, "function")) o = r,
                r = n,
                n = null;
                else if (i(n, "object")) {
                    var u = [];
                    for (var l in n) n.hasOwnProperty(l) && u.push(encodeURIComponent(l) + "=" + encodeURIComponent(n[l]));
                    n = u.join("&")
                }
                return a.open(n ? "POST": "GET", t, !0),
                n && (a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded")),
                r && (e.once("snap.ajax." + s + ".0", r), e.once("snap.ajax." + s + ".200", r), e.once("snap.ajax." + s + ".304", r)),
                a.onreadystatechange = function() {
                    4 == a.readyState && e("snap.ajax." + s + "." + a.status, o, a)
                },
                4 == a.readyState ? a: (a.send(n), a)
            }
        },
        n.load = function(t, e, r) {
            n.ajax(t,
            function(t) {
                var i = n.parse(t.responseText);
                r ? e.call(r, i) : e(i)
            })
        };
        return n.getElementByPoint = function(t, e) {
            var n = (this.canvas, y.doc.elementFromPoint(t, e));
            if (y.win.opera && "svg" == n.tagName) {
                var r = function(t) {
                    var e = t.getBoundingClientRect(),
                    n = t.ownerDocument,
                    r = n.body,
                    i = n.documentElement,
                    o = i.clientTop || r.clientTop || 0,
                    a = i.clientLeft || r.clientLeft || 0;
                    return {
                        y: e.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - o,
                        x: e.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a
                    }
                } (n),
                i = n.createSVGRect();
                i.x = t - r.x,
                i.y = e - r.y,
                i.width = i.height = 1;
                var o = n.getIntersectionList(i, null);
                o.length && (n = o[o.length - 1])
            }
            return n ? m(n) : null
        },
        n.plugin = function(t) {
            t(n, f, p, y, d)
        },
        y.win.Snap = n,
        n
    } (t || this);
    return r.plugin(function(n, r, i, o, a) {
        function s(t, e) {
            if (null == e) {
                var r = !0;
                if (! (e = "linearGradient" == t.type || "radialGradient" == t.type ? t.node.getAttribute("gradientTransform") : "pattern" == t.type ? t.node.getAttribute("patternTransform") : t.node.getAttribute("transform"))) return new n.Matrix;
                e = n._.svgTransform2string(e)
            } else e = n._.rgTransform.test(e) ? f(e).replace(/\.{3}|\u2026/g, t._.transform || "") : n._.svgTransform2string(e),
            c(e, "array") && (e = n.path ? n.path.toString.call(e) : f(e)),
            t._.transform = e;
            var i = n._.transform2matrix(e, t.getBBox(1));
            return r ? i: void(t.matrix = i)
        }
        function u(t) {
            return function() {
                var e = t ? "<" + this.type: "",
                n = this.node.attributes,
                r = this.node.childNodes;
                if (t) for (var i = 0,
                o = n.length; o > i; i++) e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                if (r.length) {
                    for (t && (e += ">"), i = 0, o = r.length; o > i; i++) 3 == r[i].nodeType ? e += r[i].nodeValue: 1 == r[i].nodeType && (e += m(r[i]).toString());
                    t && (e += "</" + this.type + ">")
                } else t && (e += "/>");
                return e
            }
        }
        var l = r.prototype,
        c = n.is,
        f = String,
        d = n._unit2px,
        h = n._.$,
        p = n._.make,
        g = n._.getSomeDefs,
        m = n._.wrap;
        l.getBBox = function(t) {
            if ("tspan" == this.type) return n._.box(this.node.getClientRects().item(0));
            if (!n.Matrix || !n.path) return this.node.getBBox();
            var e = this,
            r = new n.Matrix;
            if (e.removed) return n._.box();
            for (;
            "use" == e.type;) if (t || (r = r.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
            else {
                var i = e.attr("xlink:href");
                e = e.original = e.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1))
            }
            var o = e._,
            a = n.path.get[e.type] || n.path.get.deflt;
            try {
                return t ? (o.bboxwt = a ? n.path.getBBox(e.realPath = a(e)) : n._.box(e.node.getBBox()), n._.box(o.bboxwt)) : (e.realPath = a(e), e.matrix = e.transform().localMatrix, o.bbox = n.path.getBBox(n.path.map(e.realPath, r.add(e.matrix))), n._.box(o.bbox))
            } catch(t) {
                return n._.box()
            }
        };
        var v = function() {
            return this.string
        };
        l.transform = function(t) {
            var e = this._;
            if (null == t) {
                for (var r, i = this,
                o = new n.Matrix(this.node.getCTM()), a = s(this), u = [a], l = new n.Matrix, c = a.toTransformString(), d = f(a) == f(this.matrix) ? f(e.transform) : c;
                "svg" != i.type && (i = i.parent());) u.push(s(i));
                for (r = u.length; r--;) l.add(u[r]);
                return {
                    string: d,
                    globalMatrix: o,
                    totalMatrix: l,
                    localMatrix: a,
                    diffMatrix: o.clone().add(a.invert()),
                    global: o.toTransformString(),
                    total: l.toTransformString(),
                    local: c,
                    toString: v
                }
            }
            return t instanceof n.Matrix ? (this.matrix = t, this._.transform = t.toTransformString()) : s(this, t),
            this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? h(this.node, {
                gradientTransform: this.matrix
            }) : "pattern" == this.type ? h(this.node, {
                patternTransform: this.matrix
            }) : h(this.node, {
                transform: this.matrix
            })),
            this
        },
        l.parent = function() {
            return m(this.node.parentNode)
        },
        l.append = l.add = function(t) {
            if (t) {
                if ("set" == t.type) {
                    var e = this;
                    return t.forEach(function(t) {
                        e.add(t)
                    }),
                    this
                }
                t = m(t),
                this.node.appendChild(t.node),
                t.paper = this.paper
            }
            return this
        },
        l.appendTo = function(t) {
            return t && (t = m(t)).append(this),
            this
        },
        l.prepend = function(t) {
            if (t) {
                if ("set" == t.type) {
                    var e, n = this;
                    return t.forEach(function(t) {
                        e ? e.after(t) : n.prepend(t),
                        e = t
                    }),
                    this
                }
                var r = (t = m(t)).parent();
                this.node.insertBefore(t.node, this.node.firstChild),
                this.add && this.add(),
                t.paper = this.paper,
                this.parent() && this.parent().add(),
                r && r.add()
            }
            return this
        },
        l.prependTo = function(t) {
            return (t = m(t)).prepend(this),
            this
        },
        l.before = function(t) {
            if ("set" == t.type) {
                var e = this;
                return t.forEach(function(t) {
                    var n = t.parent();
                    e.node.parentNode.insertBefore(t.node, e.node),
                    n && n.add()
                }),
                this.parent().add(),
                this
            }
            var n = (t = m(t)).parent();
            return this.node.parentNode.insertBefore(t.node, this.node),
            this.parent() && this.parent().add(),
            n && n.add(),
            t.paper = this.paper,
            this
        },
        l.after = function(t) {
            var e = (t = m(t)).parent();
            return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node),
            this.parent() && this.parent().add(),
            e && e.add(),
            t.paper = this.paper,
            this
        },
        l.insertBefore = function(t) {
            t = m(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node),
            this.paper = t.paper,
            e && e.add(),
            t.parent() && t.parent().add(),
            this
        },
        l.insertAfter = function(t) {
            t = m(t);
            var e = this.parent();
            return t.node.parentNode.insertBefore(this.node, t.node.nextSibling),
            this.paper = t.paper,
            e && e.add(),
            t.parent() && t.parent().add(),
            this
        },
        l.remove = function() {
            var t = this.parent();
            return this.node.parentNode && this.node.parentNode.removeChild(this.node),
            delete this.paper,
            this.removed = !0,
            t && t.add(),
            this
        },
        l.select = function(t) {
            return m(this.node.querySelector(t))
        },
        l.selectAll = function(t) {
            for (var e = this.node.querySelectorAll(t), r = (n.set || Array)(), i = 0; i < e.length; i++) r.push(m(e[i]));
            return r
        },
        l.asPX = function(t, e) {
            return null == e && (e = this.attr(t)),
            +d(this, t, e)
        },
        l.use = function() {
            var t, e = this.node.id;
            return e || (e = this.id, h(this.node, {
                id: e
            })),
            t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? p(this.type, this.node.parentNode) : p("use", this.node.parentNode),
            h(t.node, {
                "xlink:href": "#" + e
            }),
            t.original = this,
            t
        },
        l.clone = function() {
            var t = m(this.node.cloneNode(!0));
            return h(t.node, "id") && h(t.node, {
                id: t.id
            }),
            function(t) {
                function e(t, e) {
                    var r = h(t.node, e); (r = (r = r && r.match(a)) && r[2]) && "#" == r.charAt() && (r = r.substring(1)) && (u[r] = (u[r] || []).concat(function(r) {
                        var i = {};
                        i[e] = n.url(r),
                        h(t.node, i)
                    }))
                }
                function r(t) {
                    var e = h(t.node, "xlink:href");
                    e && "#" == e.charAt() && (e = e.substring(1)) && (u[e] = (u[e] || []).concat(function(e) {
                        t.attr("xlink:href", "#" + e)
                    }))
                }
                for (var i, o = t.selectAll("*"), a = /^\s*url\(("|'|)(.*)\1\)\s*$/, s = [], u = {},
                l = 0, c = o.length; c > l; l++) {
                    e(i = o[l], "fill"),
                    e(i, "stroke"),
                    e(i, "filter"),
                    e(i, "mask"),
                    e(i, "clip-path"),
                    r(i);
                    var f = h(i.node, "id");
                    f && (h(i.node, {
                        id: i.id
                    }), s.push({
                        old: f,
                        id: i.id
                    }))
                }
                for (l = 0, c = s.length; c > l; l++) {
                    var d = u[s[l].old];
                    if (d) for (var p = 0,
                    g = d.length; g > p; p++) d[p](s[l].id)
                }
            } (t),
            t.insertAfter(this),
            t
        },
        l.toDefs = function() {
            return g(this).appendChild(this.node),
            this
        },
        l.pattern = l.toPattern = function(t, e, n, r) {
            var i = p("pattern", g(this));
            return null == t && (t = this.getBBox()),
            c(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, t = t.x),
            h(i.node, {
                x: t,
                y: e,
                width: n,
                height: r,
                patternUnits: "userSpaceOnUse",
                id: i.id,
                viewBox: [t, e, n, r].join(" ")
            }),
            i.node.appendChild(this.node),
            i
        },
        l.marker = function(t, e, n, r, i, o) {
            var a = p("marker", g(this));
            return null == t && (t = this.getBBox()),
            c(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, i = t.refX || t.cx, o = t.refY || t.cy, t = t.x),
            h(a.node, {
                viewBox: [t, e, n, r].join(" "),
                markerWidth: n,
                markerHeight: r,
                orient: "auto",
                refX: i || 0,
                refY: o || 0,
                id: a.id
            }),
            a.node.appendChild(this.node),
            a
        };
        var y = {};
        l.data = function(t, r) {
            var i = y[this.id] = y[this.id] || {};
            if (0 == arguments.length) return e("snap.data.get." + this.id, this, i, null),
            i;
            if (1 == arguments.length) {
                if (n.is(t, "object")) {
                    for (var o in t) t.hasOwnProperty(o) && this.data(o, t[o]);
                    return this
                }
                return e("snap.data.get." + this.id, this, i[t], t),
                i[t]
            }
            return i[t] = r,
            e("snap.data.set." + this.id, this, r, t),
            this
        },
        l.removeData = function(t) {
            return null == t ? y[this.id] = {}: y[this.id] && delete y[this.id][t],
            this
        },
        l.outerSVG = l.toString = u(1),
        l.innerSVG = u(),
        l.toDataURL = function() {
            if (t && t.btoa) {
                var e = this.getBBox(),
                r = n.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                    x: +e.x.toFixed(3),
                    y: +e.y.toFixed(3),
                    width: +e.width.toFixed(3),
                    height: +e.height.toFixed(3),
                    contents: this.outerSVG()
                });
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(r)))
            }
        },
        a.prototype.select = l.select,
        a.prototype.selectAll = l.selectAll
    }),
    r.plugin(function(t, r, i, o, a) {
        function s(t, e, n) {
            return function(r) {
                var i = r.slice(t, e);
                return 1 == i.length && (i = i[0]),
                n ? n(i) : i
            }
        }
        var u = r.prototype,
        l = t.is,
        c = String,
        f = "hasOwnProperty",
        d = function(t, e, r, i) {
            "function" != typeof r || r.length || (i = r, r = n.linear),
            this.attr = t,
            this.dur = e,
            r && (this.easing = r),
            i && (this.callback = i)
        };
        t._.Animation = d,
        t.animation = function(t, e, n, r) {
            return new d(t, e, n, r)
        },
        u.inAnim = function() {
            var t = [];
            for (var e in this.anims) this.anims[f](e) &&
            function(e) {
                t.push({
                    anim: new d(e._attrs, e.dur, e.easing, e._callback),
                    mina: e,
                    curStatus: e.status(),
                    status: function(t) {
                        return e.status(t)
                    },
                    stop: function() {
                        e.stop()
                    }
                })
            } (this.anims[e]);
            return t
        },
        t.animate = function(t, r, i, o, a, s) {
            "function" != typeof a || a.length || (s = a, a = n.linear);
            var u = n.time(),
            l = n(t, r, u, u + o, n.time, i, a);
            return s && e.once("mina.finish." + l.id, s),
            l
        },
        u.stop = function() {
            for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++) t[e].stop();
            return this
        },
        u.animate = function(t, r, i, o) {
            "function" != typeof i || i.length || (o = i, i = n.linear),
            t instanceof d && (o = t.callback, i = t.easing, r = t.dur, t = t.attr);
            var a, u, h, p, g = [],
            m = [],
            v = {},
            y = this;
            for (var x in t) if (t[f](x)) {
                y.equal ? (p = y.equal(x, c(t[x])), a = p.from, u = p.to, h = p.f) : (a = +y.attr(x), u = +t[x]);
                var b = l(a, "array") ? a.length: 1;
                v[x] = s(g.length, g.length + b, h),
                g = g.concat(a),
                m = m.concat(u)
            }
            var w = n.time(),
            C = n(g, m, w, w + r, n.time,
            function(t) {
                var e = {};
                for (var n in v) v[f](n) && (e[n] = v[n](t));
                y.attr(e)
            },
            i);
            return y.anims[C.id] = C,
            C._attrs = t,
            C._callback = o,
            e("snap.animcreated." + y.id, C),
            e.once("mina.finish." + C.id,
            function() {
                e.off("mina.*." + C.id),
                delete y.anims[C.id],
                o && o.call(y)
            }),
            e.once("mina.stop." + C.id,
            function() {
                e.off("mina.*." + C.id),
                delete y.anims[C.id]
            }),
            y
        }
    }),
    r.plugin(function(t, e, n, r, i) {
        function o(t, e, n, r, i, o) {
            return null == e && "[object SVGMatrix]" == a.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +n, this.d = +r, this.e = +i, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var a = Object.prototype.toString,
        s = String,
        u = Math; !
        function(e) {
            function n(t) {
                return t[0] * t[0] + t[1] * t[1]
            }
            function r(t) {
                var e = u.sqrt(n(t));
                t[0] && (t[0] /= e),
                t[1] && (t[1] /= e)
            }
            e.add = function(t, e, n, r, i, a) {
                if (t && t instanceof o) return this.add(t.a, t.b, t.c, t.d, t.e, t.f);
                var s = t * this.a + e * this.c,
                u = t * this.b + e * this.d;
                return this.e += i * this.a + a * this.c,
                this.f += i * this.b + a * this.d,
                this.c = n * this.a + r * this.c,
                this.d = n * this.b + r * this.d,
                this.a = s,
                this.b = u,
                this
            },
            o.prototype.multLeft = function(t, e, n, r, i, a) {
                if (t && t instanceof o) return this.multLeft(t.a, t.b, t.c, t.d, t.e, t.f);
                var s = t * this.a + n * this.b,
                u = t * this.c + n * this.d,
                l = t * this.e + n * this.f + i;
                return this.b = e * this.a + r * this.b,
                this.d = e * this.c + r * this.d,
                this.f = e * this.e + r * this.f + a,
                this.a = s,
                this.c = u,
                this.e = l,
                this
            },
            e.invert = function() {
                var t = this.a * this.d - this.b * this.c;
                return new o(this.d / t, -this.b / t, -this.c / t, this.a / t, (this.c * this.f - this.d * this.e) / t, (this.b * this.e - this.a * this.f) / t)
            },
            e.clone = function() {
                return new o(this.a, this.b, this.c, this.d, this.e, this.f)
            },
            e.translate = function(t, e) {
                return this.e += t * this.a + e * this.c,
                this.f += t * this.b + e * this.d,
                this
            },
            e.scale = function(t, e, n, r) {
                return null == e && (e = t),
                (n || r) && this.translate(n, r),
                this.a *= t,
                this.b *= t,
                this.c *= e,
                this.d *= e,
                (n || r) && this.translate( - n, -r),
                this
            },
            e.rotate = function(e, n, r) {
                e = t.rad(e),
                n = n || 0,
                r = r || 0;
                var i = +u.cos(e).toFixed(9),
                o = +u.sin(e).toFixed(9);
                return this.add(i, o, -o, i, n, r),
                this.add(1, 0, 0, 1, -n, -r)
            },
            e.skewX = function(t) {
                return this.skew(t, 0)
            },
            e.skewY = function(t) {
                return this.skew(0, t)
            },
            e.skew = function(e, n) {
                e = e || 0,
                n = n || 0,
                e = t.rad(e),
                n = t.rad(n);
                var r = u.tan(e).toFixed(9),
                i = u.tan(n).toFixed(9);
                return this.add(1, i, r, 1, 0, 0)
            },
            e.x = function(t, e) {
                return t * this.a + e * this.c + this.e
            },
            e.y = function(t, e) {
                return t * this.b + e * this.d + this.f
            },
            e.get = function(t) {
                return + this[s.fromCharCode(97 + t)].toFixed(4)
            },
            e.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            },
            e.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            },
            e.determinant = function() {
                return this.a * this.d - this.b * this.c
            },
            e.split = function() {
                var e = {};
                e.dx = this.e,
                e.dy = this.f;
                var i = [[this.a, this.b], [this.c, this.d]];
                e.scalex = u.sqrt(n(i[0])),
                r(i[0]),
                e.shear = i[0][0] * i[1][0] + i[0][1] * i[1][1],
                i[1] = [i[1][0] - i[0][0] * e.shear, i[1][1] - i[0][1] * e.shear],
                e.scaley = u.sqrt(n(i[1])),
                r(i[1]),
                e.shear /= e.scaley,
                this.determinant() < 0 && (e.scalex = -e.scalex);
                var o = i[0][1],
                a = i[1][1];
                return 0 > a ? (e.rotate = t.deg(u.acos(a)), 0 > o && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(u.asin(o)),
                e.isSimple = !( + e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate),
                e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate,
                e.noRotation = !+e.shear.toFixed(9) && !e.rotate,
                e
            },
            e.toTransformString = function(t) {
                var e = t || this.split();
                return + e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [ + e.dx.toFixed(4), +e.dy.toFixed(4)] : "") + (e.rotate ? "r" + [ + e.rotate.toFixed(4), 0, 0] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : ""))
            }
        } (o.prototype),
        t.Matrix = o,
        t.matrix = function(t, e, n, r, i, a) {
            return new o(t, e, n, r, i, a)
        }
    }),
    r.plugin(function(t, n, r, i, o) {
        function a(r) {
            return function(i) {
                if (e.stop(), i instanceof o && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild, h(this).appendChild(i), i = f(i)), i instanceof n) if ("radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type) {
                    i.node.id || g(i.node, {
                        id: i.id
                    });
                    var a = m(i.node.id)
                } else a = i.attr(r);
                else if ((a = t.color(i)).error) {
                    var s = t(h(this).ownerSVGElement).gradient(i);
                    s ? (s.node.id || g(s.node, {
                        id: s.id
                    }), a = m(s.node.id)) : a = i
                } else a = v(a);
                var u = {};
                u[r] = a,
                g(this.node, u),
                this.node.style[r] = x
            }
        }
        function s(t) {
            e.stop(),
            t == +t && (t += "px"),
            this.node.style.fontSize = t
        }
        function u(t) {
            for (var e = [], n = t.childNodes, r = 0, i = n.length; i > r; r++) {
                var o = n[r];
                3 == o.nodeType && e.push(o.nodeValue),
                "tspan" == o.tagName && (1 == o.childNodes.length && 3 == o.firstChild.nodeType ? e.push(o.firstChild.nodeValue) : e.push(u(o)))
            }
            return e
        }
        function l() {
            return e.stop(),
            this.node.style.fontSize
        }
        var c = t._.make,
        f = t._.wrap,
        d = t.is,
        h = t._.getSomeDefs,
        p = /^url\((['"]?)([^)]+)\1\)$/,
        g = t._.$,
        m = t.url,
        v = String,
        y = t._.separator,
        x = "";
        t.deurl = function(t) {
            var e = String(t).match(p);
            return e ? e[2] : t
        },
        e.on("snap.util.attr.mask",
        function(t) {
            if (t instanceof n || t instanceof o) {
                if (e.stop(), t instanceof o && 1 == t.node.childNodes.length && (t = t.node.firstChild, h(this).appendChild(t), t = f(t)), "mask" == t.type) var r = t;
                else(r = c("mask", h(this))).node.appendChild(t.node); ! r.node.id && g(r.node, {
                    id: r.id
                }),
                g(this.node, {
                    mask: m(r.id)
                })
            }
        }),
        function(t) {
            e.on("snap.util.attr.clip", t),
            e.on("snap.util.attr.clip-path", t),
            e.on("snap.util.attr.clipPath", t)
        } (function(t) {
            if (t instanceof n || t instanceof o) {
                e.stop();
                for (var r, i = t.node; i;) {
                    if ("clipPath" === i.nodeName) {
                        r = new n(i);
                        break
                    }
                    if ("svg" === i.nodeName) {
                        r = void 0;
                        break
                    }
                    i = i.parentNode
                }
                r || ((r = c("clipPath", h(this))).node.appendChild(t.node), !r.node.id && g(r.node, {
                    id: r.id
                })),
                g(this.node, {
                    "clip-path": m(r.node.id || r.id)
                })
            }
        }),
        e.on("snap.util.attr.fill", a("fill")),
        e.on("snap.util.attr.stroke", a("stroke"));
        var b = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        e.on("snap.util.grad.parse",
        function(t) {
            function e(t, e) {
                for (var n = (e - s) / (t - u), r = u; t > r; r++) o[r].offset = +( + s + n * (r - u)).toFixed(2);
                u = t,
                s = e
            }
            var n = (t = v(t)).match(b);
            if (!n) return null;
            var r = n[1],
            i = n[2],
            o = n[3];
            1 == (i = i.split(/\s*,\s*/).map(function(t) {
                return + t == t ? +t: t
            })).length && 0 == i[0] && (i = []);
            var a = (o = (o = o.split("-")).map(function(t) {
                var e = {
                    color: (t = t.split(":"))[0]
                };
                return t[1] && (e.offset = parseFloat(t[1])),
                e
            })).length,
            s = 0,
            u = 0;
            a--;
            for (var l = 0; a > l; l++)"offset" in o[l] && e(l, o[l].offset);
            return o[a].offset = o[a].offset || 100,
            e(a, o[a].offset),
            {
                type: r,
                params: i,
                stops: o
            }
        }),
        e.on("snap.util.attr.d",
        function(n) {
            e.stop(),
            d(n, "array") && d(n[0], "array") && (n = t.path.toString.call(n)),
            (n = v(n)).match(/[ruo]/i) && (n = t.path.toAbsolute(n)),
            g(this.node, {
                d: n
            })
        })( - 1),
        e.on("snap.util.attr.#text",
        function(t) {
            e.stop(),
            t = v(t);
            for (var n = i.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
            this.node.appendChild(n)
        })( - 1),
        e.on("snap.util.attr.path",
        function(t) {
            e.stop(),
            this.attr({
                d: t
            })
        })( - 1),
        e.on("snap.util.attr.class",
        function(t) {
            e.stop(),
            this.node.className.baseVal = t
        })( - 1),
        e.on("snap.util.attr.viewBox",
        function(t) {
            var n;
            n = d(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : d(t, "array") ? t.join(" ") : t,
            g(this.node, {
                viewBox: n
            }),
            e.stop()
        })( - 1),
        e.on("snap.util.attr.transform",
        function(t) {
            this.transform(t),
            e.stop()
        })( - 1),
        e.on("snap.util.attr.r",
        function(t) {
            "rect" == this.type && (e.stop(), g(this.node, {
                rx: t,
                ry: t
            }))
        })( - 1),
        e.on("snap.util.attr.textpath",
        function(t) {
            if (e.stop(), "text" == this.type) {
                var r, i, o;
                if (!t && this.textPath) {
                    for (i = this.textPath; i.node.firstChild;) this.node.appendChild(i.node.firstChild);
                    return i.remove(),
                    void delete this.textPath
                }
                if (d(t, "string")) {
                    var a = h(this),
                    s = f(a.parentNode).path(t);
                    a.appendChild(s.node),
                    r = s.id,
                    s.attr({
                        id: r
                    })
                } else(t = f(t)) instanceof n && ((r = t.attr("id")) || (r = t.id, t.attr({
                    id: r
                })));
                if (r) if (i = this.textPath, o = this.node, i) i.attr({
                    "xlink:href": "#" + r
                });
                else {
                    for (i = g("textPath", {
                        "xlink:href": "#" + r
                    }); o.firstChild;) i.appendChild(o.firstChild);
                    o.appendChild(i),
                    this.textPath = f(i)
                }
            }
        })( - 1),
        e.on("snap.util.attr.text",
        function(t) {
            if ("text" == this.type) {
                for (var n = this.node,
                r = function(t) {
                    var e = g("tspan");
                    if (d(t, "array")) for (var n = 0; n < t.length; n++) e.appendChild(r(t[n]));
                    else e.appendChild(i.doc.createTextNode(t));
                    return e.normalize && e.normalize(),
                    e
                }; n.firstChild;) n.removeChild(n.firstChild);
                for (var o = r(t); o.firstChild;) n.appendChild(o.firstChild)
            }
            e.stop()
        })( - 1),
        e.on("snap.util.attr.fontSize", s)( - 1),
        e.on("snap.util.attr.font-size", s)( - 1),
        e.on("snap.util.getattr.transform",
        function() {
            return e.stop(),
            this.transform()
        })( - 1),
        e.on("snap.util.getattr.textpath",
        function() {
            return e.stop(),
            this.textPath
        })( - 1),
        function() {
            function n(n) {
                return function() {
                    e.stop();
                    var r = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                    return "none" == r ? r: t(i.doc.getElementById(r.match(p)[1]))
                }
            }
            function r(t) {
                return function(n) {
                    e.stop();
                    var r = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                    if ("" != n && n) {
                        if ("marker" == n.type) {
                            var i = n.node.id;
                            return i || g(n.node, {
                                id: n.id
                            }),
                            void(this.node.style[r] = m(i))
                        }
                    } else this.node.style[r] = "none"
                }
            }
            e.on("snap.util.getattr.marker-end", n("end"))( - 1),
            e.on("snap.util.getattr.markerEnd", n("end"))( - 1),
            e.on("snap.util.getattr.marker-start", n("start"))( - 1),
            e.on("snap.util.getattr.markerStart", n("start"))( - 1),
            e.on("snap.util.getattr.marker-mid", n("mid"))( - 1),
            e.on("snap.util.getattr.markerMid", n("mid"))( - 1),
            e.on("snap.util.attr.marker-end", r("end"))( - 1),
            e.on("snap.util.attr.markerEnd", r("end"))( - 1),
            e.on("snap.util.attr.marker-start", r("start"))( - 1),
            e.on("snap.util.attr.markerStart", r("start"))( - 1),
            e.on("snap.util.attr.marker-mid", r("mid"))( - 1),
            e.on("snap.util.attr.markerMid", r("mid"))( - 1)
        } (),
        e.on("snap.util.getattr.r",
        function() {
            return "rect" == this.type && g(this.node, "rx") == g(this.node, "ry") ? (e.stop(), g(this.node, "rx")) : void 0
        })( - 1),
        e.on("snap.util.getattr.text",
        function() {
            if ("text" == this.type || "tspan" == this.type) {
                e.stop();
                var t = u(this.node);
                return 1 == t.length ? t[0] : t
            }
        })( - 1),
        e.on("snap.util.getattr.#text",
        function() {
            return this.node.textContent
        })( - 1),
        e.on("snap.util.getattr.fill",
        function(n) {
            if (!n) {
                e.stop();
                var r = e("snap.util.getattr.fill", this, !0).firstDefined();
                return t(t.deurl(r)) || r
            }
        })( - 1),
        e.on("snap.util.getattr.stroke",
        function(n) {
            if (!n) {
                e.stop();
                var r = e("snap.util.getattr.stroke", this, !0).firstDefined();
                return t(t.deurl(r)) || r
            }
        })( - 1),
        e.on("snap.util.getattr.viewBox",
        function() {
            e.stop();
            var n = g(this.node, "viewBox");
            return n ? (n = n.split(y), t._.box( + n[0], +n[1], +n[2], +n[3])) : void 0
        })( - 1),
        e.on("snap.util.getattr.points",
        function() {
            var t = g(this.node, "points");
            return e.stop(),
            t ? t.split(y) : void 0
        })( - 1),
        e.on("snap.util.getattr.path",
        function() {
            var t = g(this.node, "d");
            return e.stop(),
            t
        })( - 1),
        e.on("snap.util.getattr.class",
        function() {
            return this.node.className.baseVal
        })( - 1),
        e.on("snap.util.getattr.fontSize", l)( - 1),
        e.on("snap.util.getattr.font-size", l)( - 1)
    }),
    r.plugin(function(t, e, n, r, i) {
        var o = /\S+/g,
        a = String,
        s = e.prototype;
        s.addClass = function(t) {
            var e, n, r, i = a(t || "").match(o) || [],
            s = this.node,
            u = s.className.baseVal,
            l = u.match(o) || [];
            if (i.length) {
                for (e = 0; n = i[e++];)~l.indexOf(n) || l.push(n);
                u != (r = l.join(" ")) && (s.className.baseVal = r)
            }
            return this
        },
        s.removeClass = function(t) {
            var e, n, r, i, s = a(t || "").match(o) || [],
            u = this.node,
            l = u.className.baseVal,
            c = l.match(o) || [];
            if (c.length) {
                for (e = 0; r = s[e++];)~ (n = c.indexOf(r)) && c.splice(n, 1);
                l != (i = c.join(" ")) && (u.className.baseVal = i)
            }
            return this
        },
        s.hasClass = function(t) {
            return !! ~ (this.node.className.baseVal.match(o) || []).indexOf(t)
        },
        s.toggleClass = function(t, e) {
            if (null != e) return e ? this.addClass(t) : this.removeClass(t);
            var n, r, i, a, s = (t || "").match(o) || [],
            u = this.node,
            l = u.className.baseVal,
            c = l.match(o) || [];
            for (n = 0; i = s[n++];)~ (r = c.indexOf(i)) ? c.splice(r, 1) : c.push(i);
            return a = c.join(" "),
            l != a && (u.className.baseVal = a),
            this
        }
    }),
    r.plugin(function(t, n, r, i, o) {
        var a = {
            "+": function(t, e) {
                return t + e
            },
            "-": function(t, e) {
                return t - e
            },
            "/": function(t, e) {
                return t / e
            },
            "*": function(t, e) {
                return t * e
            }
        },
        s = String,
        u = /[a-z]+$/i,
        l = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr",
        function(t) {
            var n = s(t).match(l);
            if (n) {
                var r = e.nt(),
                i = r.substring(r.lastIndexOf(".") + 1),
                o = this.attr(i),
                c = {};
                e.stop();
                var f = n[3] || "",
                d = o.match(u),
                h = a[n[1]];
                if (d && d == f ? t = h(parseFloat(o), +n[2]) : (o = this.asPX(i), t = h(this.asPX(i), this.asPX(i, n[2] + f))), isNaN(o) || isNaN(t)) return;
                c[i] = t,
                this.attr(c)
            }
        })( - 10),
        e.on("snap.util.equal",
        function(t, n) {
            var r = s(this.attr(t) || ""),
            i = s(n).match(l);
            if (i) {
                e.stop();
                var o = i[3] || "",
                c = r.match(u),
                f = a[i[1]];
                return c && c == o ? {
                    from: parseFloat(r),
                    to: f(parseFloat(r), +i[2]),
                    f: function(t) {
                        return function(e) {
                            return + e.toFixed(3) + t
                        }
                    } (c)
                }: (r = this.asPX(t), {
                    from: r,
                    to: f(r, this.asPX(t, i[2] + o)),
                    f: function(t) {
                        return t
                    }
                })
            }
        })( - 10)
    }),
    r.plugin(function(n, r, i, o, a) {
        var s = i.prototype,
        u = n.is;
        s.rect = function(t, e, n, r, i, o) {
            var a;
            return null == o && (o = i),
            u(t, "object") && "[object Object]" == t ? a = t: null != t && (a = {
                x: t,
                y: e,
                width: n,
                height: r
            },
            null != i && (a.rx = i, a.ry = o)),
            this.el("rect", a)
        },
        s.circle = function(t, e, n) {
            var r;
            return u(t, "object") && "[object Object]" == t ? r = t: null != t && (r = {
                cx: t,
                cy: e,
                r: n
            }),
            this.el("circle", r)
        };
        var l = function() {
            function t() {
                this.parentNode.removeChild(this)
            }
            return function(e, n) {
                var r = o.doc.createElement("img"),
                i = o.doc.body;
                r.style.cssText = "position:absolute;left:-9999em;top:-9999em",
                r.onload = function() {
                    n.call(r),
                    r.onload = r.onerror = null,
                    i.removeChild(r)
                },
                r.onerror = t,
                i.appendChild(r),
                r.src = e
            }
        } ();
        s.image = function(t, e, r, i, o) {
            var a = this.el("image");
            if (u(t, "object") && "src" in t) a.attr(t);
            else if (null != t) {
                var s = {
                    "xlink:href": t,
                    preserveAspectRatio: "none"
                };
                null != e && null != r && (s.x = e, s.y = r),
                null != i && null != o ? (s.width = i, s.height = o) : l(t,
                function() {
                    n._.$(a.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    })
                }),
                n._.$(a.node, s)
            }
            return a
        },
        s.ellipse = function(t, e, n, r) {
            var i;
            return u(t, "object") && "[object Object]" == t ? i = t: null != t && (i = {
                cx: t,
                cy: e,
                rx: n,
                ry: r
            }),
            this.el("ellipse", i)
        },
        s.path = function(t) {
            var e;
            return u(t, "object") && !u(t, "array") ? e = t: t && (e = {
                d: t
            }),
            this.el("path", e)
        },
        s.group = s.g = function(t) {
            var e = this.el("g");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)),
            e
        },
        s.svg = function(t, e, n, r, i, o, a, s) {
            var l = {};
            return u(t, "object") && null == e ? l = t: (null != t && (l.x = t), null != e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), null != i && null != o && null != a && null != s && (l.viewBox = [i, o, a, s])),
            this.el("svg", l)
        },
        s.mask = function(t) {
            var e = this.el("mask");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)),
            e
        },
        s.ptrn = function(t, e, n, r, i, o, a, s) {
            if (u(t, "object")) var l = t;
            else l = {
                patternUnits: "userSpaceOnUse"
            },
            t && (l.x = t),
            e && (l.y = e),
            null != n && (l.width = n),
            null != r && (l.height = r),
            l.viewBox = null != i && null != o && null != a && null != s ? [i, o, a, s] : [t || 0, e || 0, n || 0, r || 0];
            return this.el("pattern", l)
        },
        s.use = function(t) {
            return null != t ? (t instanceof r && (t.attr("id") || t.attr({
                id: n._.id(t)
            }), t = t.attr("id")), "#" == String(t).charAt() && (t = t.substring(1)), this.el("use", {
                "xlink:href": "#" + t
            })) : r.prototype.use.call(this)
        },
        s.symbol = function(t, e, n, r) {
            var i = {};
            return null != t && null != e && null != n && null != r && (i.viewBox = [t, e, n, r]),
            this.el("symbol", i)
        },
        s.text = function(t, e, n) {
            var r = {};
            return u(t, "object") ? r = t: null != t && (r = {
                x: t,
                y: e,
                text: n || ""
            }),
            this.el("text", r)
        },
        s.line = function(t, e, n, r) {
            var i = {};
            return u(t, "object") ? i = t: null != t && (i = {
                x1: t,
                x2: n,
                y1: e,
                y2: r
            }),
            this.el("line", i)
        },
        s.polyline = function(t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return u(t, "object") && !u(t, "array") ? e = t: null != t && (e = {
                points: t
            }),
            this.el("polyline", e)
        },
        s.polygon = function(t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return u(t, "object") && !u(t, "array") ? e = t: null != t && (e = {
                points: t
            }),
            this.el("polygon", e)
        },
        function() {
            function r() {
                return this.selectAll("stop")
            }
            function i(t, e) {
                var r = c("stop"),
                i = {
                    offset: +e + "%"
                };
                t = n.color(t),
                i["stop-color"] = t.hex,
                t.opacity < 1 && (i["stop-opacity"] = t.opacity),
                c(r, i);
                for (var o, a = this.stops(), s = 0; s < a.length; s++) {
                    if (parseFloat(a[s].attr("offset")) > e) {
                        this.node.insertBefore(r, a[s].node),
                        o = !0;
                        break
                    }
                }
                return o || this.node.appendChild(r),
                this
            }
            function o() {
                if ("linearGradient" == this.type) {
                    var t = c(this.node, "x1") || 0,
                    e = c(this.node, "x2") || 1,
                    r = c(this.node, "y1") || 0,
                    i = c(this.node, "y2") || 0;
                    return n._.box(t, r, math.abs(e - t), math.abs(i - r))
                }
                var o = this.node.cx || .5,
                a = this.node.cy || .5,
                s = this.node.r || 0;
                return n._.box(o - s, a - s, 2 * s, 2 * s)
            }
            function a(t) {
                var r = t,
                i = this.stops();
                if ("string" == typeof t && (r = e("snap.util.grad.parse", null, "l(0,0,0,1)" + t).firstDefined().stops), n.is(r, "array")) {
                    for (var o = 0; o < i.length; o++) if (r[o]) {
                        var a = n.color(r[o].color),
                        s = {
                            offset: r[o].offset + "%"
                        };
                        s["stop-color"] = a.hex,
                        a.opacity < 1 && (s["stop-opacity"] = a.opacity),
                        i[o].attr(s)
                    } else i[o].remove();
                    for (o = i.length; o < r.length; o++) this.addStop(r[o].color, r[o].offset);
                    return this
                }
            }
            function u(t, e, s, u, l) {
                var f = n._.make("linearGradient", t);
                return f.stops = r,
                f.addStop = i,
                f.getBBox = o,
                f.setStops = a,
                null != e && c(f.node, {
                    x1: e,
                    y1: s,
                    x2: u,
                    y2: l
                }),
                f
            }
            function l(t, e, a, s, u, l) {
                var f = n._.make("radialGradient", t);
                return f.stops = r,
                f.addStop = i,
                f.getBBox = o,
                null != e && c(f.node, {
                    cx: e,
                    cy: a,
                    r: s
                }),
                null != u && null != l && c(f.node, {
                    fx: u,
                    fy: l
                }),
                f
            }
            var c = n._.$;
            s.gradient = function(t) {
                return function(t, n) {
                    var r, i = e("snap.util.grad.parse", null, n).firstDefined();
                    if (!i) return null;
                    i.params.unshift(t),
                    r = "l" == i.type.toLowerCase() ? u.apply(0, i.params) : l.apply(0, i.params),
                    i.type != i.type.toLowerCase() && c(r.node, {
                        gradientUnits: "userSpaceOnUse"
                    });
                    for (var o = i.stops,
                    a = o.length,
                    s = 0; a > s; s++) {
                        var f = o[s];
                        r.addStop(f.color, f.offset)
                    }
                    return r
                } (this.defs, t)
            },
            s.gradientLinear = function(t, e, n, r) {
                return u(this.defs, t, e, n, r)
            },
            s.gradientRadial = function(t, e, n, r, i) {
                return l(this.defs, t, e, n, r, i)
            },
            s.toString = function() {
                var t, e = this.node.ownerDocument,
                r = e.createDocumentFragment(),
                i = e.createElement("div"),
                o = this.node.cloneNode(!0);
                return r.appendChild(i),
                i.appendChild(o),
                n._.$(o, {
                    xmlns: "http://www.w3.org/2000/svg"
                }),
                t = i.innerHTML,
                r.removeChild(r.firstChild),
                t
            },
            s.toDataURL = function() {
                return t && t.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
            },
            s.clear = function() {
                for (var t, e = this.node.firstChild; e;) t = e.nextSibling,
                "defs" != e.tagName ? e.parentNode.removeChild(e) : s.clear.call({
                    node: e
                }),
                e = t
            }
        } ()
    }),
    r.plugin(function(t, e, n, r) {
        function i(t) {
            var e = i.ps = i.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {
                sleep: 100
            },
            setTimeout(function() {
                for (var n in e) e[j](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
            }),
            e[t]
        }
        function o(t, e, n, r) {
            return null == t && (t = e = n = r = 0),
            null == e && (e = t.y, n = t.width, r = t.height, t = t.x),
            {
                x: t,
                y: e,
                width: n,
                w: n,
                height: r,
                h: r,
                x2: t + n,
                y2: e + r,
                cx: t + n / 2,
                cy: e + r / 2,
                r1: M.min(n, r) / 2,
                r2: M.max(n, r) / 2,
                r0: M.sqrt(n * n + r * r) / 2,
                path: b(t, e, n, r),
                vb: [t, e, n, r].join(" ")
            }
        }
        function a() {
            return this.join(",").replace(L, "$1")
        }
        function s(t) {
            var e = B(t);
            return e.toString = a,
            e
        }
        function u(t, e, n, r, i, o, a, s, u) {
            return null == u ? g(t, e, n, r, i, o, a, s) : c(t, e, n, r, i, o, a, s,
            function(t, e, n, r, i, o, a, s, u) {
                if (! (0 > u || g(t, e, n, r, i, o, a, s) < u)) {
                    var l, c = .5,
                    f = 1 - c;
                    for (l = g(t, e, n, r, i, o, a, s, f); R(l - u) > .01;) c /= 2,
                    f += (u > l ? 1 : -1) * c,
                    l = g(t, e, n, r, i, o, a, s, f);
                    return f
                }
            } (t, e, n, r, i, o, a, s, u))
        }
        function l(n, r) {
            function i(t) {
                return + ( + t).toFixed(3)
            }
            return t._.cacher(function(t, o, a) {
                t instanceof e && (t = t.attr("d"));
                for (var s, l, f, d, h, p = "",
                g = {},
                m = 0,
                v = 0,
                y = (t = k(t)).length; y > v; v++) {
                    if ("M" == (f = t[v])[0]) s = +f[1],
                    l = +f[2];
                    else {
                        if (d = u(s, l, f[1], f[2], f[3], f[4], f[5], f[6]), m + d > o) {
                            if (r && !g.start) {
                                if (h = u(s, l, f[1], f[2], f[3], f[4], f[5], f[6], o - m), p += ["C" + i(h.start.x), i(h.start.y), i(h.m.x), i(h.m.y), i(h.x), i(h.y)], a) return p;
                                g.start = p,
                                p = ["M" + i(h.x), i(h.y) + "C" + i(h.n.x), i(h.n.y), i(h.end.x), i(h.end.y), i(f[5]), i(f[6])].join(),
                                m += d,
                                s = +f[5],
                                l = +f[6];
                                continue
                            }
                            if (!n && !r) return h = u(s, l, f[1], f[2], f[3], f[4], f[5], f[6], o - m)
                        }
                        m += d,
                        s = +f[5],
                        l = +f[6]
                    }
                    p += f.shift() + f
                }
                return g.end = p,
                h = n ? m: r ? g: c(s, l, f[0], f[1], f[2], f[3], f[4], f[5], 1)
            },
            null, t._.clone)
        }
        function c(t, e, n, r, i, o, a, s, u) {
            var l = 1 - u,
            c = O(l, 3),
            f = O(l, 2),
            d = u * u,
            h = d * u,
            p = t + 2 * u * (n - t) + d * (i - 2 * n + t),
            g = e + 2 * u * (r - e) + d * (o - 2 * r + e),
            m = n + 2 * u * (i - n) + d * (a - 2 * i + n),
            v = r + 2 * u * (o - r) + d * (s - 2 * o + r);
            return {
                x: c * t + 3 * f * u * n + 3 * l * u * u * i + h * a,
                y: c * e + 3 * f * u * r + 3 * l * u * u * o + h * s,
                m: {
                    x: p,
                    y: g
                },
                n: {
                    x: m,
                    y: v
                },
                start: {
                    x: l * t + u * n,
                    y: l * e + u * r
                },
                end: {
                    x: l * i + u * a,
                    y: l * o + u * s
                },
                alpha: 90 - 180 * M.atan2(p - m, g - v) / q
            }
        }
        function f(e, n, r, i, a, s, u, l) {
            t.is(e, "array") || (e = [e, n, r, i, a, s, u, l]);
            var c = S.apply(null, e);
            return o(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
        }
        function d(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
        }
        function h(t, e) {
            return t = o(t),
            e = o(e),
            d(e, t.x, t.y) || d(e, t.x2, t.y) || d(e, t.x, t.y2) || d(e, t.x2, t.y2) || d(t, e.x, e.y) || d(t, e.x2, e.y) || d(t, e.x, e.y2) || d(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }
        function p(t, e, n, r, i) {
            return t * (t * ( - 3 * e + 9 * n - 9 * r + 3 * i) + 6 * e - 12 * n + 6 * r) - 3 * e + 3 * n
        }
        function g(t, e, n, r, i, o, a, s, u) {
            null == u && (u = 1);
            for (var l = (u = u > 1 ? 1 : 0 > u ? 0 : u) / 2, c = [ - .1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, h = 0; 12 > h; h++) {
                var g = l * c[h] + l,
                m = p(g, t, n, i, a),
                v = p(g, e, r, o, s),
                y = m * m + v * v;
                d += f[h] * M.sqrt(y)
            }
            return l * d
        }
        function m(t, e, n, r, i, o, a, s) {
            if (! (P(t, n) < H(i, a) || H(t, n) > P(i, a) || P(e, r) < H(o, s) || H(e, r) > P(o, s))) {
                var u = (t - n) * (o - s) - (e - r) * (i - a);
                if (u) {
                    var l = ((t * r - e * n) * (i - a) - (t - n) * (i * s - o * a)) / u,
                    c = ((t * r - e * n) * (o - s) - (e - r) * (i * s - o * a)) / u,
                    f = +l.toFixed(2),
                    d = +c.toFixed(2);
                    if (! (f < +H(t, n).toFixed(2) || f > +P(t, n).toFixed(2) || f < +H(i, a).toFixed(2) || f > +P(i, a).toFixed(2) || d < +H(e, r).toFixed(2) || d > +P(e, r).toFixed(2) || d < +H(o, s).toFixed(2) || d > +P(o, s).toFixed(2))) return {
                        x: l,
                        y: c
                    }
                }
            }
        }
        function v(t, e, n) {
            if (!h(f(t), f(e))) return n ? 0 : [];
            for (var r = ~~ (g.apply(0, t) / 8), i = ~~ (g.apply(0, e) / 8), o = [], a = [], s = {},
            u = n ? 0 : [], l = 0; r + 1 > l; l++) {
                var d = c.apply(0, t.concat(l / r));
                o.push({
                    x: d.x,
                    y: d.y,
                    t: l / r
                })
            }
            for (l = 0; i + 1 > l; l++) d = c.apply(0, e.concat(l / i)),
            a.push({
                x: d.x,
                y: d.y,
                t: l / i
            });
            for (l = 0; r > l; l++) for (var p = 0; i > p; p++) {
                var v = o[l],
                y = o[l + 1],
                x = a[p],
                b = a[p + 1],
                w = R(y.x - v.x) < .001 ? "y": "x",
                C = R(b.x - x.x) < .001 ? "y": "x",
                F = m(v.x, v.y, y.x, y.y, x.x, x.y, b.x, b.y);
                if (F) {
                    if (s[F.x.toFixed(4)] == F.y.toFixed(4)) continue;
                    s[F.x.toFixed(4)] = F.y.toFixed(4);
                    var E = v.t + R((F[w] - v[w]) / (y[w] - v[w])) * (y.t - v.t),
                    T = x.t + R((F[C] - x[C]) / (b[C] - x[C])) * (b.t - x.t);
                    E >= 0 && 1 >= E && T >= 0 && 1 >= T && (n ? u++:u.push({
                        x: F.x,
                        y: F.y,
                        t1: E,
                        t2: T
                    }))
                }
            }
            return u
        }
        function y(t, e, n) {
            t = k(t),
            e = k(e);
            for (var r, i, o, a, s, u, l, c, f, d, h = n ? 0 : [], p = 0, g = t.length; g > p; p++) {
                var m = t[p];
                if ("M" == m[0]) r = s = m[1],
                i = u = m[2];
                else {
                    "C" == m[0] ? (f = [r, i].concat(m.slice(1)), r = f[6], i = f[7]) : (f = [r, i, r, i, s, u, s, u], r = s, i = u);
                    for (var y = 0,
                    x = e.length; x > y; y++) {
                        var b = e[y];
                        if ("M" == b[0]) o = l = b[1],
                        a = c = b[2];
                        else {
                            "C" == b[0] ? (d = [o, a].concat(b.slice(1)), o = d[6], a = d[7]) : (d = [o, a, o, a, l, c, l, c], o = l, a = c);
                            var w = v(f, d, n);
                            if (n) h += w;
                            else {
                                for (var C = 0,
                                F = w.length; F > C; C++) w[C].segment1 = p,
                                w[C].segment2 = y,
                                w[C].bez1 = f,
                                w[C].bez2 = d;
                                h = h.concat(w)
                            }
                        }
                    }
                }
            }
            return h
        }
        function x(t) {
            var e = i(t);
            if (e.bbox) return B(e.bbox);
            if (!t) return o();
            for (var n, r = 0,
            a = 0,
            s = [], u = [], l = 0, c = (t = k(t)).length; c > l; l++) if ("M" == (n = t[l])[0]) r = n[1],
            a = n[2],
            s.push(r),
            u.push(a);
            else {
                var f = S(r, a, n[1], n[2], n[3], n[4], n[5], n[6]);
                s = s.concat(f.min.x, f.max.x),
                u = u.concat(f.min.y, f.max.y),
                r = n[5],
                a = n[6]
            }
            var d = H.apply(0, s),
            h = H.apply(0, u),
            p = o(d, h, P.apply(0, s) - d, P.apply(0, u) - h);
            return e.bbox = B(p),
            p
        }
        function b(t, e, n, r, i) {
            if (i) return [["M", +t + +i, e], ["l", n - 2 * i, 0], ["a", i, i, 0, 0, 1, i, i], ["l", 0, r - 2 * i], ["a", i, i, 0, 0, 1, -i, i], ["l", 2 * i - n, 0], ["a", i, i, 0, 0, 1, -i, -i], ["l", 0, 2 * i - r], ["a", i, i, 0, 0, 1, i, -i], ["z"]];
            var o = [["M", t, e], ["l", n, 0], ["l", 0, r], ["l", -n, 0], ["z"]];
            return o.toString = a,
            o
        }
        function w(t, e, n, r, i) {
            if (null == i && null == r && (r = n), t = +t, e = +e, n = +n, r = +r, null != i) var o = Math.PI / 180,
            s = t + n * Math.cos( - r * o),
            u = t + n * Math.cos( - i * o),
            l = e + n * Math.sin( - r * o),
            c = e + n * Math.sin( - i * o),
            f = [["M", s, l], ["A", n, n, 0, +(i - r > 180), 0, u, c]];
            else f = [["M", t, e], ["m", 0, -r], ["a", n, r, 0, 1, 1, 0, 2 * r], ["a", n, r, 0, 1, 1, 0, -2 * r], ["z"]];
            return f.toString = a,
            f
        }
        function C(e) {
            var n = i(e);
            if (n.abs) return s(n.abs);
            if (D(e, "array") && D(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [["M", 0, 0]];
            var r, o = [],
            u = 0,
            l = 0,
            c = 0,
            f = 0,
            d = 0;
            "M" == e[0][0] && (u = +e[0][1], l = +e[0][2], c = u, f = l, d++, o[0] = ["M", u, l]);
            for (var h, p, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), m = d, v = e.length; v > m; m++) {
                if (o.push(h = []), p = e[m], (r = p[0]) != r.toUpperCase()) switch (h[0] = r.toUpperCase(), h[0]) {
                case "A":
                    h[1] = p[1],
                    h[2] = p[2],
                    h[3] = p[3],
                    h[4] = p[4],
                    h[5] = p[5],
                    h[6] = +p[6] + u,
                    h[7] = +p[7] + l;
                    break;
                case "V":
                    h[1] = +p[1] + l;
                    break;
                case "H":
                    h[1] = +p[1] + u;
                    break;
                case "R":
                    for (var y = [u, l].concat(p.slice(1)), x = 2, b = y.length; b > x; x++) y[x] = +y[x] + u,
                    y[++x] = +y[x] + l;
                    o.pop(),
                    o = o.concat(A(y, g));
                    break;
                case "O":
                    o.pop(),
                    (y = w(u, l, p[1], p[2])).push(y[0]),
                    o = o.concat(y);
                    break;
                case "U":
                    o.pop(),
                    o = o.concat(w(u, l, p[1], p[2], p[3])),
                    h = ["U"].concat(o[o.length - 1].slice( - 2));
                    break;
                case "M":
                    c = +p[1] + u,
                    f = +p[2] + l;
                default:
                    for (x = 1, b = p.length; b > x; x++) h[x] = +p[x] + (x % 2 ? u: l)
                } else if ("R" == r) y = [u, l].concat(p.slice(1)),
                o.pop(),
                o = o.concat(A(y, g)),
                h = ["R"].concat(p.slice( - 2));
                else if ("O" == r) o.pop(),
                (y = w(u, l, p[1], p[2])).push(y[0]),
                o = o.concat(y);
                else if ("U" == r) o.pop(),
                o = o.concat(w(u, l, p[1], p[2], p[3])),
                h = ["U"].concat(o[o.length - 1].slice( - 2));
                else for (var C = 0,
                F = p.length; F > C; C++) h[C] = p[C];
                if ("O" != (r = r.toUpperCase())) switch (h[0]) {
                case "Z":
                    u = +c,
                    l = +f;
                    break;
                case "H":
                    u = h[1];
                    break;
                case "V":
                    l = h[1];
                    break;
                case "M":
                    c = h[h.length - 2],
                    f = h[h.length - 1];
                default:
                    u = h[h.length - 2],
                    l = h[h.length - 1]
                }
            }
            return o.toString = a,
            n.abs = s(o),
            o
        }
        function F(t, e, n, r) {
            return [t, e, n, r, n, r]
        }
        function E(t, e, n, r, i, o) {
            return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * r, 1 / 3 * i + 2 / 3 * n, 1 / 3 * o + 2 / 3 * r, i, o]
        }
        function T(e, n, r, i, o, a, s, u, l, c) {
            var f, d = 120 * q / 180,
            h = q / 180 * ( + o || 0),
            p = [],
            g = t._.cacher(function(t, e, n) {
                return {
                    x: t * M.cos(n) - e * M.sin(n),
                    y: t * M.sin(n) + e * M.cos(n)
                }
            });
            if (!r || !i) return [e, n, u, l, u, l];
            if (c) E = c[0],
            S = c[1],
            C = c[2],
            F = c[3];
            else {
                e = (f = g(e, n, -h)).x,
                n = f.y,
                u = (f = g(u, l, -h)).x,
                l = f.y;
                var m = (M.cos(q / 180 * o), M.sin(q / 180 * o), (e - u) / 2),
                v = (n - l) / 2,
                y = m * m / (r * r) + v * v / (i * i);
                y > 1 && (y = M.sqrt(y), r *= y, i *= y);
                var x = r * r,
                b = i * i,
                w = (a == s ? -1 : 1) * M.sqrt(R((x * b - x * v * v - b * m * m) / (x * v * v + b * m * m))),
                C = w * r * v / i + (e + u) / 2,
                F = w * -i * m / r + (n + l) / 2,
                E = M.asin(((n - F) / i).toFixed(9)),
                S = M.asin(((l - F) / i).toFixed(9));
                E = C > e ? q - E: E,
                S = C > u ? q - S: S,
                0 > E && (E = 2 * q + E),
                0 > S && (S = 2 * q + S),
                s && E > S && (E -= 2 * q),
                !s && S > E && (S -= 2 * q)
            }
            var k = S - E;
            if (R(k) > d) {
                var A = S,
                N = u,
                D = l;
                S = E + d * (s && S > E ? 1 : -1),
                p = T(u = C + r * M.cos(S), l = F + i * M.sin(S), r, i, o, 0, s, N, D, [S, A, C, F])
            }
            k = S - E;
            var B = M.cos(E),
            j = M.sin(E),
            L = M.cos(S),
            _ = M.sin(S),
            H = M.tan(k / 4),
            P = 4 / 3 * r * H,
            O = 4 / 3 * i * H,
            I = [e, n],
            z = [e + P * j, n - O * B],
            $ = [u + P * _, l - O * L],
            W = [u, l];
            if (z[0] = 2 * I[0] - z[0], z[1] = 2 * I[1] - z[1], c) return [z, $, W].concat(p);
            for (var V = [], X = 0, G = (p = [z, $, W].concat(p).join().split(",")).length; G > X; X++) V[X] = X % 2 ? g(p[X - 1], p[X], h).y: g(p[X], p[X + 1], h).x;
            return V
        }
        function S(t, e, n, r, i, o, a, s) {
            for (var u, l, c, f, d, h, p, g, m = [], v = [[], []], y = 0; 2 > y; ++y) if (0 == y ? (l = 6 * t - 12 * n + 6 * i, u = -3 * t + 9 * n - 9 * i + 3 * a, c = 3 * n - 3 * t) : (l = 6 * e - 12 * r + 6 * o, u = -3 * e + 9 * r - 9 * o + 3 * s, c = 3 * r - 3 * e), R(u) < 1e-12) {
                if (R(l) < 1e-12) continue; (f = -c / l) > 0 && 1 > f && m.push(f)
            } else p = l * l - 4 * c * u,
            g = M.sqrt(p),
            0 > p || ((d = ( - l + g) / (2 * u)) > 0 && 1 > d && m.push(d), (h = ( - l - g) / (2 * u)) > 0 && 1 > h && m.push(h));
            for (var x, b = m.length,
            w = b; b--;) f = m[b],
            x = 1 - f,
            v[0][b] = x * x * x * t + 3 * x * x * f * n + 3 * x * f * f * i + f * f * f * a,
            v[1][b] = x * x * x * e + 3 * x * x * f * r + 3 * x * f * f * o + f * f * f * s;
            return v[0][w] = t,
            v[1][w] = e,
            v[0][w + 1] = a,
            v[1][w + 1] = s,
            v[0].length = v[1].length = w + 2,
            {
                min: {
                    x: H.apply(0, v[0]),
                    y: H.apply(0, v[1])
                },
                max: {
                    x: P.apply(0, v[0]),
                    y: P.apply(0, v[1])
                }
            }
        }
        function k(t, e) {
            var n = !e && i(t);
            if (!e && n.curve) return s(n.curve);
            for (var r = C(t), o = e && C(e), a = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            },
            u = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            },
            l = function(t, e, n) {
                var r, i;
                if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (! (t[0] in {
                    T: 1,
                    Q: 1
                }) && (e.qx = e.qy = null), t[0]) {
                case "M":
                    e.X = t[1],
                    e.Y = t[2];
                    break;
                case "A":
                    t = ["C"].concat(T.apply(0, [e.x, e.y].concat(t.slice(1))));
                    break;
                case "S":
                    "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y),
                    t = ["C", r, i].concat(t.slice(1));
                    break;
                case "T":
                    "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y),
                    t = ["C"].concat(E(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                    break;
                case "Q":
                    e.qx = t[1],
                    e.qy = t[2],
                    t = ["C"].concat(E(e.x, e.y, t[1], t[2], t[3], t[4]));
                    break;
                case "L":
                    t = ["C"].concat(F(e.x, e.y, t[1], t[2]));
                    break;
                case "H":
                    t = ["C"].concat(F(e.x, e.y, t[1], e.y));
                    break;
                case "V":
                    t = ["C"].concat(F(e.x, e.y, e.x, t[1]));
                    break;
                case "Z":
                    t = ["C"].concat(F(e.x, e.y, e.X, e.Y))
                }
                return t
            },
            c = function(t, e) {
                if (t[e].length > 7) {
                    t[e].shift();
                    for (var n = t[e]; n.length;) d[e] = "A",
                    o && (h[e] = "A"),
                    t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                    t.splice(e, 1),
                    v = P(r.length, o && o.length || 0)
                }
            },
            f = function(t, e, n, i, a) {
                t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", i.x, i.y]), n.bx = 0, n.by = 0, n.x = t[a][1], n.y = t[a][2], v = P(r.length, o && o.length || 0))
            },
            d = [], h = [], p = "", g = "", m = 0, v = P(r.length, o && o.length || 0); v > m; m++) {
                r[m] && (p = r[m][0]),
                "C" != p && (d[m] = p, m && (g = d[m - 1])),
                r[m] = l(r[m], a, g),
                "A" != d[m] && "C" == p && (d[m] = "C"),
                c(r, m),
                o && (o[m] && (p = o[m][0]), "C" != p && (h[m] = p, m && (g = h[m - 1])), o[m] = l(o[m], u, g), "A" != h[m] && "C" == p && (h[m] = "C"), c(o, m)),
                f(r, o, a, u, m),
                f(o, r, u, a, m);
                var y = r[m],
                x = o && o[m],
                b = y.length,
                w = o && x.length;
                a.x = y[b - 2],
                a.y = y[b - 1],
                a.bx = _(y[b - 4]) || a.x,
                a.by = _(y[b - 3]) || a.y,
                u.bx = o && (_(x[w - 4]) || u.x),
                u.by = o && (_(x[w - 3]) || u.y),
                u.x = o && x[w - 2],
                u.y = o && x[w - 1]
            }
            return o || (n.curve = s(r)),
            o ? [r, o] : r
        }
        function A(t, e) {
            for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                var o = [{
                    x: +t[r - 2],
                    y: +t[r - 1]
                },
                {
                    x: +t[r],
                    y: +t[r + 1]
                },
                {
                    x: +t[r + 2],
                    y: +t[r + 3]
                },
                {
                    x: +t[r + 4],
                    y: +t[r + 5]
                }];
                e ? r ? i - 4 == r ? o[3] = {
                    x: +t[0],
                    y: +t[1]
                }: i - 2 == r && (o[2] = {
                    x: +t[0],
                    y: +t[1]
                },
                o[3] = {
                    x: +t[2],
                    y: +t[3]
                }) : o[0] = {
                    x: +t[i - 2],
                    y: +t[i - 1]
                }: i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                    x: +t[r],
                    y: +t[r + 1]
                }),
                n.push(["C", ( - o[0].x + 6 * o[1].x + o[2].x) / 6, ( - o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
            }
            return n
        }
        var N = e.prototype,
        D = t.is,
        B = t._.clone,
        j = "hasOwnProperty",
        L = /,?([a-z]),?/gi,
        _ = parseFloat,
        M = Math,
        q = M.PI,
        H = M.min,
        P = M.max,
        O = M.pow,
        R = M.abs,
        I = l(1),
        z = l(),
        $ = l(0, 1),
        W = t._unit2px,
        V = {
            path: function(t) {
                return t.attr("path")
            },
            circle: function(t) {
                var e = W(t);
                return w(e.cx, e.cy, e.r)
            },
            ellipse: function(t) {
                var e = W(t);
                return w(e.cx || 0, e.cy || 0, e.rx, e.ry)
            },
            rect: function(t) {
                var e = W(t);
                return b(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
            },
            image: function(t) {
                var e = W(t);
                return b(e.x || 0, e.y || 0, e.width, e.height)
            },
            line: function(t) {
                return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
            },
            polyline: function(t) {
                return "M" + t.attr("points")
            },
            polygon: function(t) {
                return "M" + t.attr("points") + "z"
            },
            deflt: function(t) {
                var e = t.node.getBBox();
                return b(e.x, e.y, e.width, e.height)
            }
        };
        t.path = i,
        t.path.getTotalLength = I,
        t.path.getPointAtLength = z,
        t.path.getSubpath = function(t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6) return $(t, e).end;
            var r = $(t, n, 1);
            return e ? $(r, e).end: r
        },
        N.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        },
        N.getPointAtLength = function(t) {
            return z(this.attr("d"), t)
        },
        N.getSubpath = function(e, n) {
            return t.path.getSubpath(this.attr("d"), e, n)
        },
        t._.box = o,
        t.path.findDotsAtSegment = c,
        t.path.bezierBBox = f,
        t.path.isPointInsideBBox = d,
        t.closest = function(e, n, r, i) {
            for (var a = 100,
            s = o(e - a / 2, n - a / 2, a, a), u = [], l = r[0].hasOwnProperty("x") ?
            function(t) {
                return {
                    x: r[t].x,
                    y: r[t].y
                }
            }: function(t) {
                return {
                    x: r[t],
                    y: i[t]
                }
            },
            c = 0; 1e6 >= a && !c;) {
                for (var f = 0,
                h = r.length; h > f; f++) {
                    var p = l(f);
                    if (d(s, p.x, p.y)) {
                        c++,
                        u.push(p);
                        break
                    }
                }
                c || (a *= 2, s = o(e - a / 2, n - a / 2, a, a))
            }
            if (1e6 != a) {
                var g, m = 1 / 0;
                for (f = 0, h = u.length; h > f; f++) {
                    var v = t.len(e, n, u[f].x, u[f].y);
                    m > v && (m = v, u[f].len = v, g = u[f])
                }
                return g
            }
        },
        t.path.isBBoxIntersect = h,
        t.path.intersection = function(t, e) {
            return y(t, e)
        },
        t.path.intersectionNumber = function(t, e) {
            return y(t, e, 1)
        },
        t.path.isPointInside = function(t, e, n) {
            var r = x(t);
            return d(r, e, n) && y(t, [["M", e, n], ["H", r.x2 + 10]], 1) % 2 == 1
        },
        t.path.getBBox = x,
        t.path.get = V,
        t.path.toRelative = function(e) {
            var n = i(e),
            r = String.prototype.toLowerCase;
            if (n.rel) return s(n.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var o = [],
            u = 0,
            l = 0,
            c = 0,
            f = 0,
            d = 0;
            "M" == e[0][0] && (u = e[0][1], l = e[0][2], c = u, f = l, d++, o.push(["M", u, l]));
            for (var h = d,
            p = e.length; p > h; h++) {
                var g = o[h] = [],
                m = e[h];
                if (m[0] != r.call(m[0])) switch (g[0] = r.call(m[0]), g[0]) {
                case "a":
                    g[1] = m[1],
                    g[2] = m[2],
                    g[3] = m[3],
                    g[4] = m[4],
                    g[5] = m[5],
                    g[6] = +(m[6] - u).toFixed(3),
                    g[7] = +(m[7] - l).toFixed(3);
                    break;
                case "v":
                    g[1] = +(m[1] - l).toFixed(3);
                    break;
                case "m":
                    c = m[1],
                    f = m[2];
                default:
                    for (var v = 1,
                    y = m.length; y > v; v++) g[v] = +(m[v] - (v % 2 ? u: l)).toFixed(3)
                } else {
                    g = o[h] = [],
                    "m" == m[0] && (c = m[1] + u, f = m[2] + l);
                    for (var x = 0,
                    b = m.length; b > x; x++) o[h][x] = m[x]
                }
                var w = o[h].length;
                switch (o[h][0]) {
                case "z":
                    u = c,
                    l = f;
                    break;
                case "h":
                    u += +o[h][w - 1];
                    break;
                case "v":
                    l += +o[h][w - 1];
                    break;
                default:
                    u += +o[h][w - 2],
                    l += +o[h][w - 1]
                }
            }
            return o.toString = a,
            n.rel = s(o),
            o
        },
        t.path.toAbsolute = C,
        t.path.toCubic = k,
        t.path.map = function(t, e) {
            if (!e) return t;
            var n, r, i, o, a, s, u;
            for (i = 0, a = (t = k(t)).length; a > i; i++) for (u = t[i], o = 1, s = u.length; s > o; o += 2) n = e.x(u[o], u[o + 1]),
            r = e.y(u[o], u[o + 1]),
            u[o] = n,
            u[o + 1] = r;
            return t
        },
        t.path.toString = a,
        t.path.clone = s
    }),
    r.plugin(function(t, r, i, o) {
        var a = Math.max,
        s = Math.min,
        u = function(t) {
            if (this.items = [], this.bindings = {},
            this.length = 0, this.type = "set", t) for (var e = 0,
            n = t.length; n > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
        },
        l = u.prototype;
        l.push = function() {
            for (var t, e, n = 0,
            r = arguments.length; r > n; n++)(t = arguments[n]) && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        },
        l.pop = function() {
            return this.length && delete this[this.length--],
            this.items.pop()
        },
        l.forEach = function(t, e) {
            for (var n = 0,
            r = this.items.length; r > n; n++) if (!1 === t.call(e, this.items[n], n)) return this;
            return this
        },
        l.animate = function(r, i, o, a) {
            "function" != typeof o || o.length || (a = o, o = n.linear),
            r instanceof t._.Animation && (a = r.callback, o = r.easing, i = o.dur, r = r.attr);
            var s = arguments;
            if (t.is(r, "array") && t.is(s[s.length - 1], "array")) var u = !0;
            var l, c = function() {
                l ? this.b = l: l = this.b
            },
            f = 0,
            d = this,
            h = a &&
            function() {++f == d.length && a.call(this)
            };
            return this.forEach(function(t, n) {
                e.once("snap.animcreated." + t.id, c),
                u ? s[n] && t.animate.apply(t, s[n]) : t.animate(r, i, o, h)
            })
        },
        l.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        },
        l.bind = function(t, e, n) {
            var r = {};
            if ("function" == typeof e) this.bindings[t] = e;
            else {
                var i = n || t;
                this.bindings[t] = function(t) {
                    r[i] = t,
                    e.attr(r)
                }
            }
            return this
        },
        l.attr = function(t) {
            var e = {};
            for (var n in t) this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
            for (var r = 0,
            i = this.items.length; i > r; r++) this.items[r].attr(e);
            return this
        },
        l.clear = function() {
            for (; this.length;) this.pop()
        },
        l.splice = function(t, e, n) {
            t = 0 > t ? a(this.length + t, 0) : t,
            e = a(0, s(this.length - t, e));
            var r, i = [],
            o = [],
            l = [];
            for (r = 2; r < arguments.length; r++) l.push(arguments[r]);
            for (r = 0; e > r; r++) o.push(this[t + r]);
            for (; r < this.length - t; r++) i.push(this[t + r]);
            var c = l.length;
            for (r = 0; r < c + i.length; r++) this.items[t + r] = this[t + r] = c > r ? l[r] : i[r - c];
            for (r = this.items.length = this.length -= e - c; this[r];) delete this[r++];
            return new u(o)
        },
        l.exclude = function(t) {
            for (var e = 0,
            n = this.length; n > e; e++) if (this[e] == t) return this.splice(e, 1),
            !0;
            return ! 1
        },
        l.insertAfter = function(t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        },
        l.getBBox = function() {
            for (var t = [], e = [], n = [], r = [], i = this.items.length; i--;) if (!this.items[i].removed) {
                var o = this.items[i].getBBox();
                t.push(o.x),
                e.push(o.y),
                n.push(o.x + o.width),
                r.push(o.y + o.height)
            }
            return t = s.apply(0, t),
            e = s.apply(0, e),
            n = a.apply(0, n),
            r = a.apply(0, r),
            {
                x: t,
                y: e,
                x2: n,
                y2: r,
                width: n - t,
                height: r - e,
                cx: t + (n - t) / 2,
                cy: e + (r - e) / 2
            }
        },
        l.clone = function(t) {
            t = new u;
            for (var e = 0,
            n = this.items.length; n > e; e++) t.push(this.items[e].clone());
            return t
        },
        l.toString = function() {
            return "Snapâ€˜s set"
        },
        l.type = "set",
        t.Set = u,
        t.set = function() {
            var t = new u;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)),
            t
        }
    }),
    r.plugin(function(t, n, r, i) {
        function o(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
            case "t":
                return [e, 0, 0];
            case "m":
                return [e, 1, 0, 0, 1, 0, 0];
            case "r":
                return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
            case "s":
                return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }
        function a(t) {
            return t
        }
        function s(t) {
            var e, n, r, i, o, a, s = 0,
            u = [];
            for (e = 0, n = t.length; n > e; e++) {
                for (o = "[", a = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; i > r; r++) a[r] = "val[" + s+++"]";
                o += a + "]",
                u[e] = o
            }
            return Function("val", "return Snap.path.toString.call([" + u + "])")
        }
        function u(t) {
            for (var e = [], n = 0, r = t.length; r > n; n++) for (var i = 1,
            o = t[n].length; o > i; i++) e.push(t[n][i]);
            return e
        }
        function l(t) {
            return isFinite(t)
        }
        var c = {},
        f = /[%a-z]+$/i,
        d = String;
        c.stroke = c.fill = "colour",
        n.prototype.equal = function(t, n) {
            return e("snap.util.equal", this, t, n).firstDefined()
        },
        e.on("snap.util.equal",
        function(e, n) {
            var r, i, h = d(this.attr(e) || ""),
            p = this;
            if ("colour" == c[e]) return r = t.color(h),
            i = t.color(n),
            {
                from: [r.r, r.g, r.b, r.opacity],
                to: [i.r, i.g, i.b, i.opacity],
                f: function(e) {
                    return t.rgb(e[0], e[1], e[2], e[3])
                }
            };
            if ("viewBox" == e) return r = this.attr(e).vb.split(" ").map(Number),
            i = n.split(" ").map(Number),
            {
                from: r,
                to: i,
                f: function(t) {
                    return t.join(" ")
                }
            };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return "string" == typeof n && (n = d(n).replace(/\.{3}|\u2026/g, h)),
            h = this.matrix,
            n = t._.rgTransform.test(n) ? t._.transform2matrix(n, this.getBBox()) : t._.transform2matrix(t._.svgTransform2string(n), this.getBBox()),
            function(e, n, r) {
                e = e || new t.Matrix,
                n = n || new t.Matrix,
                e = t.parseTransformString(e.toTransformString()) || [],
                n = t.parseTransformString(n.toTransformString()) || [];
                for (var i, a, l, c, f = Math.max(e.length, n.length), d = [], h = [], p = 0; f > p; p++) {
                    if (l = e[p] || o(n[p]), c = n[p] || o(l), l[0] != c[0] || "r" == l[0].toLowerCase() && (l[2] != c[2] || l[3] != c[3]) || "s" == l[0].toLowerCase() && (l[3] != c[3] || l[4] != c[4])) {
                        e = t._.transform2matrix(e, r()),
                        n = t._.transform2matrix(n, r()),
                        d = [["m", e.a, e.b, e.c, e.d, e.e, e.f]],
                        h = [["m", n.a, n.b, n.c, n.d, n.e, n.f]];
                        break
                    }
                    for (d[p] = [], h[p] = [], i = 0, a = Math.max(l.length, c.length); a > i; i++) i in l && (d[p][i] = l[i]),
                    i in c && (h[p][i] = c[i])
                }
                return {
                    from: u(d),
                    to: u(h),
                    f: s(d)
                }
            } (h, n,
            function() {
                return p.getBBox(1)
            });
            if ("d" == e || "path" == e) return r = t.path.toCubic(h, n),
            {
                from: u(r[0]),
                to: u(r[1]),
                f: s(r[0])
            };
            if ("points" == e) return r = d(h).split(t._.separator),
            i = d(n).split(t._.separator),
            {
                from: r,
                to: i,
                f: function(t) {
                    return t
                }
            };
            if (l(h) && l(n)) return {
                from: parseFloat(h),
                to: parseFloat(n),
                f: a
            };
            var g = h.match(f),
            m = d(n).match(f);
            return g &&
            function(e, n) {
                return ! (!t.is(e, "array") || !t.is(n, "array")) && e.toString() == n.toString()
            } (g, m) ? {
                from: parseFloat(h),
                to: parseFloat(n),
                f: function(t) {
                    return function(e) {
                        return + e.toFixed(3) + t
                    }
                } (g)
            }: {
                from: this.asPX(e),
                to: this.asPX(e, n),
                f: a
            }
        })
    }),
    r.plugin(function(t, n, r, i) {
        for (var o = n.prototype,
        a = ("createTouch" in i.doc), s = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], u = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        l = function(t, e) {
            var n = "y" == t ? "scrollTop": "scrollLeft",
            r = e && e.node ? e.node.ownerDocument: i.doc;
            return r[n in r.documentElement ? "documentElement": "body"][n]
        },
        c = function() {
            return this.originalEvent.preventDefault()
        },
        f = function() {
            return this.originalEvent.stopPropagation()
        },
        d = function(t, e, n, r) {
            var i = a && u[e] ? u[e] : e,
            o = function(i) {
                var o = l("y", r),
                s = l("x", r);
                if (a && u.hasOwnProperty(e)) for (var d = 0,
                h = i.targetTouches && i.targetTouches.length; h > d; d++) if (i.targetTouches[d].target == t || t.contains(i.targetTouches[d].target)) {
                    var p = i; (i = i.targetTouches[d]).originalEvent = p,
                    i.preventDefault = c,
                    i.stopPropagation = f;
                    break
                }
                var g = i.clientX + s,
                m = i.clientY + o;
                return n.call(r, i, g, m)
            };
            return e !== i && t.addEventListener(e, o, !1),
            t.addEventListener(i, o, !1),
            function() {
                return e !== i && t.removeEventListener(e, o, !1),
                t.removeEventListener(i, o, !1),
                !0
            }
        },
        h = [], p = function(t) {
            for (var n, r = t.clientX,
            i = t.clientY,
            o = l("y"), s = l("x"), u = h.length; u--;) {
                if (n = h[u], a) {
                    for (var c, f = t.touches && t.touches.length; f--;) if ((c = t.touches[f]).identifier == n.el._drag.id || n.el.node.contains(c.target)) {
                        r = c.clientX,
                        i = c.clientY,
                        (t.originalEvent ? t.originalEvent: t).preventDefault();
                        break
                    }
                } else t.preventDefault();
                var d = n.el.node;
                d.nextSibling,
                d.parentNode,
                d.style.display,
                r += s,
                i += o,
                e("snap.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t)
            }
        },
        g = function(n) {
            t.unmousemove(p).unmouseup(g);
            for (var r, i = h.length; i--;) r = h[i],
            r.el._drag = {},
            e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n),
            e.off("snap.drag.*." + r.el.id);
            h = []
        },
        m = s.length; m--;) !
        function(e) {
            t[e] = o[e] = function(n, r) {
                if (t.is(n, "function")) this.events = this.events || [],
                this.events.push({
                    name: e,
                    f: n,
                    unbind: d(this.node || document, e, n, r || this)
                });
                else for (var i = 0,
                o = this.events.length; o > i; i++) if (this.events[i].name == e) try {
                    this.events[i].f.call(this)
                } catch(t) {}
                return this
            },
            t["un" + e] = o["un" + e] = function(t) {
                for (var n = this.events || [], r = n.length; r--;) if (n[r].name == e && (n[r].f == t || !t)) return n[r].unbind(),
                n.splice(r, 1),
                !n.length && delete this.events,
                this;
                return this
            }
        } (s[m]);
        o.hover = function(t, e, n, r) {
            return this.mouseover(t, n).mouseout(e, r || n)
        },
        o.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var v = [];
        o.drag = function(n, r, i, o, a, s) {
            function u(u, l, f) { (u.originalEvent || u).preventDefault(),
                c._drag.x = l,
                c._drag.y = f,
                c._drag.id = u.identifier,
                !h.length && t.mousemove(p).mouseup(g),
                h.push({
                    el: c,
                    move_scope: o,
                    start_scope: a,
                    end_scope: s
                }),
                r && e.on("snap.drag.start." + c.id, r),
                n && e.on("snap.drag.move." + c.id, n),
                i && e.on("snap.drag.end." + c.id, i),
                e("snap.drag.start." + c.id, a || o || c, l, f, u)
            }
            function l(t, n, r) {
                e("snap.draginit." + c.id, c, t, n, r)
            }
            var c = this;
            if (!arguments.length) {
                var f;
                return c.drag(function(t, e) {
                    this.attr({
                        transform: f + (f ? "T": "t") + [t, e]
                    })
                },
                function() {
                    f = this.transform().local
                })
            }
            return e.on("snap.draginit." + c.id, u),
            c._drag = {},
            v.push({
                el: c,
                start: u,
                init: l
            }),
            c.mousedown(l),
            c
        },
        o.undrag = function() {
            for (var n = v.length; n--;) v[n].el == this && (this.unmousedown(v[n].init), v.splice(n, 1), e.unbind("snap.drag.*." + this.id), e.unbind("snap.draginit." + this.id));
            return ! v.length && t.unmousemove(p).unmouseup(g),
            this
        }
    }),
    r.plugin(function(t, n, r, i) {
        var o = (n.prototype, r.prototype),
        a = /^\s*url\((.+)\)/,
        s = String,
        u = t._.$;
        t.filter = {},
        o.filter = function(e) {
            var r = this;
            "svg" != r.type && (r = r.paper);
            var i = t.parse(s(e)),
            o = t._.id(),
            a = (r.node.offsetWidth, r.node.offsetHeight, u("filter"));
            return u(a, {
                id: o,
                filterUnits: "userSpaceOnUse"
            }),
            a.appendChild(i.node),
            r.defs.appendChild(a),
            new n(a)
        },
        e.on("snap.util.getattr.filter",
        function() {
            e.stop();
            var n = u(this.node, "filter");
            if (n) {
                var r = s(n).match(a);
                return r && t.select(r[1])
            }
        }),
        e.on("snap.util.attr.filter",
        function(r) {
            if (r instanceof n && "filter" == r.type) {
                e.stop();
                var i = r.node.id;
                i || (u(r.node, {
                    id: r.id
                }), i = r.id),
                u(this.node, {
                    filter: t.url(i)
                })
            }
            r && "none" != r || (e.stop(), this.node.removeAttribute("filter"))
        }),
        t.filter.blur = function(e, n) {
            null == e && (e = 2);
            var r = null == n ? e: [e, n];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: r
            })
        },
        t.filter.blur.toString = function() {
            return this()
        },
        t.filter.shadow = function(e, n, r, i, o) {
            return null == o && (null == i ? (o = r, r = 4, i = "#000") : (o = i, i = r, r = 4)),
            null == r && (r = 4),
            null == o && (o = 1),
            null == e && (e = 0, n = 2),
            null == n && (n = e),
            i = t.color(i),
            t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: i,
                dx: e,
                dy: n,
                blur: r,
                opacity: o
            })
        },
        t.filter.shadow.toString = function() {
            return this()
        },
        t.filter.grayscale = function(e) {
            return null == e && (e = 1),
            t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - e),
                b: .7152 - .7152 * (1 - e),
                c: .0722 - .0722 * (1 - e),
                d: .2126 - .2126 * (1 - e),
                e: .7152 + .2848 * (1 - e),
                f: .0722 - .0722 * (1 - e),
                g: .2126 - .2126 * (1 - e),
                h: .0722 + .9278 * (1 - e)
            })
        },
        t.filter.grayscale.toString = function() {
            return this()
        },
        t.filter.sepia = function(e) {
            return null == e && (e = 1),
            t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - e),
                b: .769 - .769 * (1 - e),
                c: .189 - .189 * (1 - e),
                d: .349 - .349 * (1 - e),
                e: .686 + .314 * (1 - e),
                f: .168 - .168 * (1 - e),
                g: .272 - .272 * (1 - e),
                h: .534 - .534 * (1 - e),
                i: .131 + .869 * (1 - e)
            })
        },
        t.filter.sepia.toString = function() {
            return this()
        },
        t.filter.saturate = function(e) {
            return null == e && (e = 1),
            t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - e
            })
        },
        t.filter.saturate.toString = function() {
            return this()
        },
        t.filter.hueRotate = function(e) {
            return e = e || 0,
            t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: e
            })
        },
        t.filter.hueRotate.toString = function() {
            return this()
        },
        t.filter.invert = function(e) {
            return null == e && (e = 1),
            t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: 1 - e
            })
        },
        t.filter.invert.toString = function() {
            return this()
        },
        t.filter.brightness = function(e) {
            return null == e && (e = 1),
            t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: e
            })
        },
        t.filter.brightness.toString = function() {
            return this()
        },
        t.filter.contrast = function(e) {
            return null == e && (e = 1),
            t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: .5 - e / 2
            })
        },
        t.filter.contrast.toString = function() {
            return this()
        }
    }),
    r.plugin(function(t, e, n, r, i) {
        var o = t._.box,
        a = t.is,
        s = /^[^a-z]*([tbmlrc])/i,
        u = function() {
            return "T" + this.dx + "," + this.dy
        };
        e.prototype.getAlign = function(t, e) {
            null == e && a(t, "string") && (e = t, t = null);
            var n = (t = t || this.paper).getBBox ? t.getBBox() : o(t),
            r = this.getBBox(),
            i = {};
            switch (e = e && e.match(s), e = e ? e[1].toLowerCase() : "c") {
            case "t":
                i.dx = 0,
                i.dy = n.y - r.y;
                break;
            case "b":
                i.dx = 0,
                i.dy = n.y2 - r.y2;
                break;
            case "m":
                i.dx = 0,
                i.dy = n.cy - r.cy;
                break;
            case "l":
                i.dx = n.x - r.x,
                i.dy = 0;
                break;
            case "r":
                i.dx = n.x2 - r.x2,
                i.dy = 0;
                break;
            default:
                i.dx = n.cx - r.cx,
                i.dy = 0
            }
            return i.toString = u,
            i
        },
        e.prototype.align = function(t, e) {
            return this.transform("..." + this.getAlign(t, e))
        }
    }),
    r.plugin(function(e, n, r, i) {
        function o(t) {
            t = t.split(/(?=#)/);
            var e = new String(t[5]);
            return e[50] = t[0],
            e[100] = t[1],
            e[200] = t[2],
            e[300] = t[3],
            e[400] = t[4],
            e[500] = t[5],
            e[600] = t[6],
            e[700] = t[7],
            e[800] = t[8],
            e[900] = t[9],
            t[10] && (e.A100 = t[10], e.A200 = t[11], e.A400 = t[12], e.A700 = t[13]),
            e
        }
        e.mui = {},
        e.flat = {},
        e.mui.red = o("#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000"),
        e.mui.pink = o("#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162"),
        e.mui.purple = o("#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF"),
        e.mui.deeppurple = o("#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA"),
        e.mui.indigo = o("#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE"),
        e.mui.blue = o("#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF"),
        e.mui.lightblue = o("#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA"),
        e.mui.cyan = o("#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4"),
        e.mui.teal = o("#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5"),
        e.mui.green = o("#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853"),
        e.mui.lightgreen = o("#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17"),
        e.mui.lime = o("#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00"),
        e.mui.yellow = o("#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600"),
        e.mui.amber = o("#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00"),
        e.mui.orange = o("#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00"),
        e.mui.deeporange = o("#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00"),
        e.mui.brown = o("#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723"),
        e.mui.grey = o("#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121"),
        e.mui.bluegrey = o("#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238"),
        e.flat.turquoise = "#1abc9c",
        e.flat.greensea = "#16a085",
        e.flat.sunflower = "#f1c40f",
        e.flat.orange = "#f39c12",
        e.flat.emerland = "#2ecc71",
        e.flat.nephritis = "#27ae60",
        e.flat.carrot = "#e67e22",
        e.flat.pumpkin = "#d35400",
        e.flat.peterriver = "#3498db",
        e.flat.belizehole = "#2980b9",
        e.flat.alizarin = "#e74c3c",
        e.flat.pomegranate = "#c0392b",
        e.flat.amethyst = "#9b59b6",
        e.flat.wisteria = "#8e44ad",
        e.flat.clouds = "#ecf0f1",
        e.flat.silver = "#bdc3c7",
        e.flat.wetasphalt = "#34495e",
        e.flat.midnightblue = "#2c3e50",
        e.flat.concrete = "#95a5a6",
        e.flat.asbestos = "#7f8c8d",
        e.importMUIColors = function() {
            for (var n in e.mui) e.mui.hasOwnProperty(n) && (t[n] = e.mui[n])
        }
    }),
    r
});