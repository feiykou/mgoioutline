(function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    },
    e = {}.hasOwnProperty;
    $(function() {
        var t, e, n, o, a, i, r;
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(t) {
            setTimeout(t, 1e3 / 60)
        },
        window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame ||
        function(t) {
            clearTimeout(t)
        },
        window.getRandomString = function(t) {
            var e, n, o;
            for (o = "", n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; t--;) e = parseInt(n.length * Math.random()),
            o += n.substring(e, e + 1);
            return o
        },
        window.randomize = function(t) {
            var e, n, o, a, i, r, s;
            for (o = 0, i = 0, e = null, n = null, o = a = 0, s = r = t.length; 0 <= s ? a < s: a > s; o = 0 <= s ? ++a: --a) e = t[o],
            n = t[i = parseInt(r * Math.random())],
            t[i] = e,
            t[o] = n;
            return t
        },
        window.getCookie = function(t) {
            var e, n, o, a, i;
            for (n = 0, o = (e = document.cookie.split("; ")).length; n < o; n++) if (i = e[n], (a = i.split("="))[0] === t) return unescape(a[1]);
            return ""
        },
        window.setCookie = function(t, e, n, o) {
            var a, i;
            i = "",
            void 0 === n ? i = t + "=" + escape(e) + ";path=/;": ((a = new Date).setTime(a.getTime() + 1e3 * n * 60 * 60 * 24), i = t + "=" + escape(e) + ";expires=" + a.toGMTString() + ";path=/;"),
            o && (i += " domain=" + o),
            document.cookie = i
        },
        window.hasStorage = !!window.sessionStorage && !0;
        try {
            window.sessionStorage.setItem("storageTest", 1)
        } catch(e) {
            t = e,
            window.hasStorage = !1
        }
        return window.getSessionValue = function(e) {
            try {
                if (window.hasStorage) return window.sessionStorage.getItem(e)
            } catch(e) {
                t = e,
                console.log(t)
            }
            return ""
        },
        window.setSessionValue = function(e, n) {
            try {
                window.hasStorage && window.sessionStorage.setItem(e, n)
            } catch(e) {
                t = e
            }
        },
        window.removeSessionValue = function(e) {
            try {
                window.hasStorage && window.sessionStorage.removeItem(e)
            } catch(e) {
                t = e
            }
        },
        window.getStorageValue = function(e) {
            try {
                if (window.hasStorage) return window.localStorage.getItem(e)
            } catch(e) {
                return t = e,
                ""
            }
        },
        window.setStorageValue = function(e, n) {
            try {
                window.hasStorage && window.localStorage.setItem(e, n)
            } catch(e) {
                t = e
            }
        },
        window.removeStorageValue = function(e) {
            try {
                window.hasStorage && window.localStorage.removeItem(e)
            } catch(e) {
                t = e
            }
        },
        window.setLocal = function(t, e) {
            window.hasStorage ? setStorageValue(t, e) : setCookie(t, e, 365)
        },
        window.getLocal = function(t) {
            return window.hasStorage ? getStorageValue(t) : getCookie(t)
        },
        window.setLocalSession = function(t, e) {
            window.hasStorage ? setSessionValue(t, e) : setCookie(t, e)
        },
        window.getLocalSession = function(t) {
            return window.hasStorage ? getSessionValue(t) : getCookie(t)
        },
        window.log = function(t) {
            window.dataLayer ? window.dataLayer.push({
                event: "Pageview",
                url: t
            }) : window.ga && window.ga("send", "pageview", {
                page: t
            })
        },
        window.logEvent = function(t, e, n) {
            window.ga && window.ga("send", "event", t, e, n)
        },
        window.fixGrade = function(t, e) {
            if (t += "", (e -= t.length) > 0) for (; e--;) t = "0" + t;
            return t
        },
        $(document).on("touchstart", ".hasHover",
        function() {
            $(this).addClass("hover")
        }),
        $(document).on("touchend", ".hasHover",
        function() {
            $(this).removeClass("hover")
        }),
        $(document).on("mouseenter", ".hasHover",
        function() {
            $("html").is(".sp .tablet") || $(this).addClass("hover")
        }),
        $(document).on("mouseleave", ".hasHover",
        function() {
            $("html").is(".sp .tablet") || $(this).removeClass("hover")
        }),
        $(document).on("click", ".hasHover",
        function() {
            $(this).is(".ignoreclick") || $(this).removeClass("hover")
        }),
        o = 0,
        a = .1,
        i = .5,
        n = !1,
        r = 0,
        e = -1,
        window.slideTo = function(t, s, h) {
            var u, c;
            null == s && (s = !0),
            null == h && (h = .2),
            r = Math.floor(t),
            n || (n = !0, i = h, u = function() {
                return a = o = 0,
                $(window).trigger("scrollCanceled"),
                n = !1,
                $(window).off("mousedown", u),
                $(window).off("mousewheel", u),
                $(window).off("keypress", u),
                $(window).off("touchstart", u),
                $(window).off("resize", u)
            },
            $(window).on("mousedown", u), $(window).on("mousewheel", u), $(window).on("keypress", u), $(window).on("touchstart", u), $(window).on("resize", u), c = $(window).scrollTop(), r > c ? (e = function() {
                if (n) {
                    if (o < .2 * (r - c) ? o += a += i: (a = .1, o = .2 * (r - c)), c += o, Math.abs(r - c) < .5) return o = 0,
                    c = r,
                    n = !1,
                    $(window).off("mousedown", u),
                    $(window).off("mousewheel", u),
                    $(window).off("keypress", u),
                    $(window).off("touchstart", u),
                    $(window).off("resize", u),
                    $(window).scrollTop(c),
                    void $(window).trigger("scrolled");
                    $(window).scrollTop(c),
                    requestAnimationFrame(e)
                }
            })() : r < c ? (e = function() {
                if (n) {
                    if (o > .2 * (r - c) ? o += a -= i: (a = .1, o = .2 * (r - c)), c += o, Math.abs(r - c) < .5) return clearInterval(e),
                    o = 0,
                    c = r,
                    n = !1,
                    $(window).off("mousedown", u),
                    $(window).off("mousewheel", u),
                    $(window).off("keypress", u),
                    $(window).off("touchstart", u),
                    $(window).off("resize", u),
                    $(window).scrollTop(c),
                    void $(window).trigger("scrolled");
                    $(window).scrollTop(c),
                    requestAnimationFrame(e)
                }
            })() : (o = 0, a = .1, c = r, n = !1, $(window).off("mousedown", u), $(window).off("mousewheel", u), $(window).off("keypress", u), $(window).off("touchstart", u), $(window).off("resize", u), $(window).trigger("scrolled")))
        }
    }),
    $(document).on("ready",
    function() {
        var t, e, n, o;
        o = !1,
        window.device = "mobile",
        $(window).on("resize.mode",
        function() {
            return window.innerWidth > 840 ? window.device = "pc": window.device = "mobile"
        }),
        $(window).trigger("resize.mode"),
        window.deviceMode = "pc",
        $("html").is(".sp, .tablet") && (window.deviceMode = "sp", $(".logo-wrap").on("click",
        function(t) {
            return "/" === location.pathname || "/en/" === location.pathname ? (t.preventDefault(), slideTo(0)) : location.href = "/"
        })),
        "pc" === window.deviceMode ? ($("nav.nav ul.navi .dessin").append(), $(".hasHover").on("mouseenter",
        function() {
            return $(this).addClass("hover")
        }).on("mouseleave",
        function() {
            return $(this).removeClass("hover")
        }), $("#foot").find(".groups .group.banner .dessin.banner a iframe").attr("src", "https://widget.dessin-ah.jp/?type=C")) : $("#foot").find(".groups .group.banner .dessin.banner a iframe").attr("src", "https://widget.dessin-ah.jp/?type=D"),
        $("body>nav.nav ul.navi li.venues").on("touchstart",
        function() {
            
        }).on("mouseenter",
        function(t) {
           
        }),
        $("body>nav.nav .venueList .close").on("touchend",
        function(t) {
            o = !1,
            $("body>nav.nav").off("touchstart"),
            $("body>nav.nav").off("touchmove"),
            t.stopPropagation(),
            t.preventDefault(),
            $("body>nav.nav").removeAttr("style"),
            $("html").removeClass("modal")
        }),
        $(window).on("scroll.bg",
        function() {
            if ($(window).scrollTop() > $("#head").outerHeight()) {
                if (!$("body").is(".isBGW")) return $("body").addClass("isBGW").css("background", "#fff")
            } else if ($("body").is(".isBGW")) return $("body").removeClass("isBGW").removeAttr("style")
        }),
        $(window).trigger("scroll"),
        $(document).on("click", "a",
        function(t) {
            if ($(this).attr("href") === location.pathname && "_blank" !== $(this).attr("target")) return t.preventDefault(),
            slideTo(0)
        }),
        n = function() {
            var t, e, n, o, a;
            return a = Snap("#origin"),
            t = Snap("#base"),
            true || $(window).width() > $(window).height() ? (setLocalSession("intro", 1), t.attr({
                width: 42,
                height: 56,
                x: 18,
                y: 11
            }), void new Titlesp) : ($(document).on("touchmove",
            function(t) {
                return t.preventDefault()
            }), $("html").addClass("modal"), $(".logo-wrap").fadeOut(0), setLocalSession("intro", 1), (o = Snap().attr({
                id: "intro"
            })).appendTo($("body")[0]), n = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) / 2 + 6, e = o.circle(window.innerWidth / 2, window.innerHeight / 2, n).attr({
                fill: "#fff",
                stroke: "#000",
                strokeWidth: 4
            }), setTimeout(function() {
                var i, r, s, h, u, c, l, f, d, m, p, w, g, v, y, b, x, M, A, S;
                for (o.append(t), S = t.select(".titleWrapper"), M = t.selectAll(".staff"), s = [], i = [], d = [], u = c = 0, g = M.length; 0 <= g ? c < g: c > g; u = 0 <= g ? ++c: --c) r = M[u].getBBox(),
                s.push(r),
                i.push(Math.atan2(r.cy - 28 + 10, r.cx - 21)),
                d.push([Snap.matrix()]);
                for (l = p = 0; p < 30; l = ++p) for (h = 1 * (2.5 - 2 * Math.random()) * l / 50, u = w = 0, v = M.length; 0 <= v ? w < v: w > v; u = 0 <= v ? ++w: --w) m = d[u],
                r = s[u],
                f = m[m.length - 1].clone().rotate(10 * (1 - 2 * Math.random()), r.cx, r.cy).translate(h * Math.cos(i[u]), h * Math.sin(i[u])),
                m.push(f);
                for (u = A = 0, y = M.length; 0 <= y ? A < y: A > y; u = 0 <= y ? ++A: --A) M[u].transform(d[u].pop());
                return b = 3,
                S.transform(Snap.matrix().scale(b, b, 21, 15)),
                requestAnimationFrame(function() {
                    var t, e, n;
                    for ((b += .07 * (1 - b)) < 1.001 && (b = 1), t = 0, u = n = 0, e = M.length; 0 <= e ? n < e: n > e; u = 0 <= e ? ++n: --n) 1 !== (m = d[u]).length ? Math.random() < .4 || (f = m.pop(), 1 === m.length ? (f = m[0], t++) : Math.random() < .5 && (f = m.pop(), 1 === m.length ? (f = m[0], t++) : Math.random() < .5 && (f = m.pop(), 1 === m.length && (f = m[0], t++))), M[u].transform(f)) : t++;
                    if (S.transform(Snap.matrix().scale(b, b, 21, 15)), t !== M.length) return requestAnimationFrame(arguments.callee);
                    requestAnimationFrame(function() {
                        return (b += .06 * (1 - b)) < 1.001 && (b = 1),
                        S.transform(Snap.matrix().scale(b, b, 21, 15)),
                        1 !== b ? requestAnimationFrame(arguments.callee) : x()
                    })
                }),
                x = function() {
                    var i, r, s, h;
                    return h = window.innerWidth,
                    42,
                    r = 0,
                    2e-5,
                    s = 0,
                    i = 0,
                    requestAnimationFrame(function() {
                        return i < .8 ? r += s += 2e-5: (r = .2 * (1 - i)) < 1e-4 && (r = 0, i = 1),
                        i += r,
                        t.attr({
                            width: h * (1 - i) + 42 * i,
                            // x: (window.innerWidth - 67 - 1) * i,
                            // y: ( - window.innerHeight / 2 + 17 + 28) * i
                        }),
                        e.attr({
                            r: n * (1 - i) + 37 * i,
                            // cx: window.innerWidth / 2 * (1 - i) + (window.innerWidth - 46) * i,
                            // cy: window.innerHeight / 2 * (1 - i) + 45 * i
                        }),
                        i < 1 ? requestAnimationFrame(arguments.callee) : ($("html").removeClass("modal"), $(".logo-wrap").fadeIn(0), $(document).off("touchmove"), a.append(t.attr({
                            width: 42,
                            height: 56,
                            x: 18,
                            y: 11
                        })), o.remove(), new Titlesp)
                    })
                }
            },
            400))
        },
        window.preloadImages = function(t) {
            return $.when((new ImageLoader).load(t[0])).done(function() {
                if (t.shift(), t.length) return preloadImages(t)
            })
        },
        "sp" === window.deviceMode ? n() : (e = Snap("#origin"), (t = Snap("#base")).appendTo($(".logo-wrap")[0]), e.remove(), $(window).on("resize",
        function() {
            var e, n, o, a, i, r;
            return a = $(".logo-wrap").width()
            (o = $(".logo-wrap").height()) / a > 56 / 42 ? (r = .5 * -(48 * o / a - 56), e = 2 * -r + 56, t.attr({
                viewBox: "-3 " + r + " 48 " + e
            })) : (i = .5 * -(64 * a / o - 42), n = 2 * -i + 42, t.attr({
                viewBox: i + " -4 " + n + " 64"
            }))
        }),
        function() {
            var t;
            getLocalSession("intro") && "/" !== location.pathname && "/en/" !== location.pathname ? new((t = [Title06, Title05, Title04, Title03, Title01])[parseInt(t.length * Math.random())]) : new Title01
        } ())
    }),
    function(e) {
        var n;
        n = function() {
            function n() {
                this.cancel = t(this.cancel, this)
            }
            return n.prototype.cancelled = !1,
            n.prototype.dfd = null,
            n.enhanceAnimationCancelable = function(t) {
                var n;
                return n = e.Deferred(),
                t.cancel = function() {
                    return "pending" === n.state() && n.reject(),
                    t.stop()
                },
                t.promise().done(function() {
                    return n.resolve()
                }).fail(function() {
                    return n.reject()
                }),
                n.promise(t)
            },
            n.prototype.cancel = function() {
                var t;
                return this.cancelled = !0,
                "pending" === (null != (t = this.dfd) ? t.state() : void 0) && this.dfd.reject(),
                this.dfd = null
            },
            n
        } (),
        this.DeferredCancelable = n
    } ($),
    function(e) {
        var n;
        n = function() {
            function n() {
                this.start = t(this.start, this),
                this.prepare = t(this.prepare, this),
                this.prepare(),
                this.start()
            }
            return n.prototype.prepare = function() {
                var t, e, n, o, a;
                for (this.base = Snap("#base"), this.base.attr({
                    viewBox: "0 0 390 80",
                    width: 780,
                    height: 160,
                    x: -1,
                    y: 0
                }), this.staff = this.base.selectAll(".staff"), this.origin = Snap("#origin"), o = this.base.circle(21, 28, 35).attr({
                    fill: "#fff"
                }), this.base.attr({
                    // mask: o
                }), this.staff = this.base.selectAll(".staff"), this.centers = [], this.baseRots = [], this.matrices = [], e = n = 0, a = this.staff.length; 0 <= a ? n < a: n > a; e = 0 <= a ? ++n: --n) t = this.staff[e].getBBox(),
                this.centers.push(t),
                this.baseRots.push(Math.atan2(t.cy - 28 + 10, t.cx - 21)),
                this.matrices.push([Snap.matrix()])
            },
            n.prototype.start = function() {
                var t, n, o, a, i, r, s, h;
                h = this.staff,
                a = this.matrices,
                t = this.baseRots,
                n = this.centers,
                r = !1,
                o = 0,
                e(window).on("scroll",
                function(t) {
                    s()
                }),
                s = function() {
                    var e;
                    r = !0,
                    o > 0 ? (o += 1) > 1 && (o = 1) : (o = 1, 1, e = 0, requestAnimationFrame(function() {
                        var r, s, u, c, l, f, d, m, p;
                        if (++e % 4 > 0) requestAnimationFrame(arguments.callee);
                        else {
                            for (a[a.length - 1], d = [], a.push(d), u = c = 0, m = h.length; 0 <= m ? c < m: c > m; u = 0 <= m ? ++c: --c) f = a[u],
                            s = n[u],
                            p = .7 * Math.PI * (1 - 2 * Math.random()) + t[u],
                            r = 1 * Math.random() - .2,
                            l = f[f.length - 1].clone().rotate(10 * (1 - 2 * Math.random()), s.cx, s.cy).translate(r * Math.cos(p), r * Math.sin(p)),
                            r = 1 * Math.random() - .1,
                            l = l.clone().rotate(10 * (1 - 2 * Math.random()), s.cx, s.cy).translate(r * Math.cos(p), r * Math.sin(p)),
                            f.push(l),
                            h[u].transform(l);
                            if (0 != --o) return requestAnimationFrame(arguments.callee);
                            i()
                        }
                    }))
                },
                i = function() {
                    return r = !1,
                    requestAnimationFrame(function() {
                        var t, e, n, o, i, s;
                        if (!r) {
                            for (t = 0, e = n = 0, s = h.length; 0 <= s ? n < s: n > s; e = 0 <= s ? ++n: --n) 1 !== (i = a[e]).length ? Math.random() < .7 || (o = i.pop(), 1 === i.length ? (o = i[0], t++) : Math.random() < .5 && (o = i.pop(), 1 === i.length ? (o = i[0], t++) : Math.random() < .5 && (o = i.pop(), 1 === i.length && (o = i[0], t++))), h[e].transform(o)) : t++;
                            t < h.length && requestAnimationFrame(arguments.callee)
                        }
                    })
                }
            },
            n
        } (),
        this.Titlesp = n
    } ($),
    function(e) {
        var n;
        n = function() {
            function n() {
                this.start = t(this.start, this),
                this.intro = t(this.intro, this),
                this.prepare = t(this.prepare, this),
                this.prepare(),
                getLocalSession("intro") ? setTimeout(function(t) {
                    return function() {
                        return t.start()
                    }
                } (this), 200) : this.intro(),
                setLocalSession("intro", 1)
            }
            return n.prototype.prepare = function() {
                var t, e, n, o;
                for (this.base = Snap("#base"), this.staff = this.base.selectAll(".staff"), this.centers = [], this.baseRots = [], this.matrices = [], e = n = 0, o = this.staff.length; 0 <= o ? n < o: n > o; e = 0 <= o ? ++n: --n) t = this.staff[e].getBBox(),
                this.centers.push(t),
                this.baseRots.push(Math.atan2(t.cy - 28 + 10, t.cx - 21)),
                this.matrices.push([Snap.matrix()])
            },
            n.prototype.intro = function() {
                var t, e, n, o, a, i, r, s, h, u, c, l, f, d, m, p, w, g, v;
                for (t = this.base, g = this.staff, u = this.matrices, e = this.baseRots, o = this.centers, (v = t.select(".titleWrapper")).transform(Snap.matrix().scale(0, 0, 21, 15)), w = this, s = r = 0; r < 40; s = ++r) for (a = 1 * (2.5 - 2 * Math.random()) * s / 50, i = l = 0, d = g.length; 0 <= d ? l < d: l > d; i = 0 <= d ? ++l: --l) c = u[i],
                n = o[i],
                h = c[c.length - 1].clone().rotate(10 * (1 - 2 * Math.random()), n.cx, n.cy).translate(a * Math.cos(e[i]), a * Math.sin(e[i])),
                c.push(h);
                for (i = f = 0, m = g.length; 0 <= m ? f < m: f > m; i = 0 <= m ? ++f: --f) g[i].transform(u[i].pop());
                p = 2.5,
                v.transform(Snap.matrix().scale(p, p, 21, 15)),
                requestAnimationFrame(function() {
                    var t, e, n;
                    for ((p += .06 * (1 - p)) < 1.001 && (p = 1), t = 0, i = n = 0, e = g.length; 0 <= e ? n < e: n > e; i = 0 <= e ? ++n: --n) 1 !== (c = u[i]).length ? Math.random() < .5 || (h = c.pop(), 1 === c.length ? (h = c[0], t++) : Math.random() < .5 && (h = c.pop(), 1 === c.length ? (h = c[0], t++) : Math.random() < .5 && (h = c.pop(), 1 === c.length && (h = c[0], t++))), g[i].transform(h)) : t++;
                    if (v.transform(Snap.matrix().scale(p, p, 21, 15)), t === g.length) return w.start(),
                    void requestAnimationFrame(function() {
                        if ((p += .06 * (1 - p)) < 1.001 && (p = 1), v.transform(Snap.matrix().scale(p, p, 21, 15)), 1 !== p) return requestAnimationFrame(arguments.callee)
                    });
                    requestAnimationFrame(arguments.callee)
                })
            },
            n.prototype.start = function() {
                var t, n, o, a, i, r, s, h;
                h = this.staff,
                a = this.matrices,
                t = this.baseRots,
                n = this.centers,
                r = !1,
                o = 0,
                e(window).on("scroll",
                function(t) {
                    s()
                }),
                s = function() {
                    var e;
                    r = !0,
                    o > 0 ? (o += 1) > 3 && (o = 3) : (o = 1, 1.2, e = 0, requestAnimationFrame(function() {
                        var r, s, u, c, l, f, d, m;
                        if (++e % 3 > 0) requestAnimationFrame(arguments.callee);
                        else {
                            for (u = c = 0, d = h.length; 0 <= d ? c < d: c > d; u = 0 <= d ? ++c: --c) f = a[u],
                            s = n[u],
                            m = .7 * Math.PI * (1 - 2 * Math.random()) + t[u],
                            r = 1.2 * Math.random() - .1,
                            l = f[f.length - 1].clone().rotate(10 * (1 - 2 * Math.random()), s.cx, s.cy).translate(r * Math.cos(m), r * Math.sin(m)),
                            f.push(l),
                            r = 1.2 * Math.random() - .2,
                            l = l.clone().rotate(10 * (1 - 2 * Math.random()), s.cx, s.cy).translate(r * Math.cos(m), r * Math.sin(m)),
                            r = 1.2 * Math.random() - .1,
                            l = l.clone().rotate(10 * (1 - 2 * Math.random()), s.cx, s.cy).translate(r * Math.cos(m), r * Math.sin(m)),
                            f.push(l),
                            h[u].transform(l);
                            if (0 != --o) return requestAnimationFrame(arguments.callee);
                            i()
                        }
                    }))
                },
                (i = function() {
                    return r = !1,
                    requestAnimationFrame(function() {
                        var t, e, n, o, i, s;
                        if (!r) {
                            for (t = 0, e = n = 0, s = h.length; 0 <= s ? n < s: n > s; e = 0 <= s ? ++n: --n) 1 !== (i = a[e]).length ? Math.random() < .7 || (o = i.pop(), 1 === i.length ? (o = i[0], t++) : Math.random() < .5 && (o = i.pop(), 1 === i.length ? (o = i[0], t++) : Math.random() < .5 && (o = i.pop(), 1 === i.length && (o = i[0], t++))), h[e].transform(o)) : t++;
                            t < h.length && requestAnimationFrame(arguments.callee)
                        }
                    })
                })()
            },
            n
        } (),
        this.Title01 = n
    } ($),
    function(e) {
        var n;
        n = function() {
            function n() {
                this.start = t(this.start, this),
                this.prepare = t(this.prepare, this),
                this.prepare(),
                setTimeout(function(t) {
                    return function() {
                        return t.start()
                    }
                } (this), 200)
            }
            return n.prototype.prepare = function() {
                var t, e, n, o;
                for (this.base = Snap("#base"), this.staff = this.base.selectAll(".staff"), this.groups = [[], [], [], [], []], t = e = 0, n = this.staff.length; 0 <= n ? e < n: e > n; t = 0 <= n ? ++e: --e)(o = this.staff[t]).attr("class").indexOf("st1") > -1 ? this.groups[0].push(o) : o.attr("class").indexOf("st2") > -1 ? this.groups[1].push(o) : o.attr("class").indexOf("st3") > -1 ? this.groups[2].push(o) : o.attr("class").indexOf("st4") > -1 ? this.groups[3].push(o) : this.groups[4].unshift(o)
            },
            n.prototype.start = function() {
                var t, n, o, a, i, r, s, h;
                this.staff,
                n = this.groups,
                r = !1,
                o = 0,
                e(window).on("scroll",
                function(t) {
                    s()
                }),
                t = ["st1", "st2", "st3", "st4", ""],
                a = 0,
                h = -1,
                s = function() {
                    var e;
                    clearTimeout(h),
                    r = !0,
                    o > 0 ? (o += 1) > 2 && (o = 2) : (o = 1, e = 0, requestAnimationFrame(function() {
                        var r, s, h, u, c, l, f, d;
                        if (++e % 4 > 0) requestAnimationFrame(arguments.callee);
                        else {
                            for (c = ++a, s = h = 0, f = n.length; 0 <= f ? h < f: h > f; s = 0 <= f ? ++h: --h) {
                                for (u = l = 0, d = (r = n[s]).length; (0 <= d ? l < d: l > d) && (c--, r[u].attr({
                                    class: t[(c + s) % 5]
                                }), 0 !== c); u = 0 <= d ? ++l: --l);
                                if (0 === c) break
                            }
                            if (0 != --o) return requestAnimationFrame(arguments.callee);
                            i()
                        }
                    }))
                },
                i = function() {
                    return clearTimeout(h),
                    h = setTimeout(function() {
                        var e;
                        return r = !1,
                        e = 0,
                        a > 19 && (a = 19),
                        requestAnimationFrame(function() {
                            var o, i, s, h, u, c, l, f;
                            if (!r) if (++e % 4 > 0) requestAnimationFrame(arguments.callee);
                            else if (0 != (u = --a)) {
                                for (i = s = 0, l = n.length; 0 <= l ? s < l: s > l; i = 0 <= l ? ++s: --s) {
                                    for (h = c = 0, f = (o = n[i]).length; (0 <= f ? c < f: c > f) && (--u, o[h].attr({
                                        class: t[(u + i) % 5]
                                    }), 0 !== u); h = 0 <= f ? ++c: --c);
                                    if (0 === u) break
                                }
                                a > 0 && requestAnimationFrame(arguments.callee)
                            }
                        })
                    },
                    1e3)
                }
            },
            n
        } (),
        this.Title03 = n
    } ($),
    function(e) {
        var n;
        n = function() {
            function n() {
                this.start = t(this.start, this),
                this.prepare = t(this.prepare, this),
                this.prepare(),
                setTimeout(function(t) {
                    return function() {
                        return t.start()
                    }
                } (this), 200)
            }
            return n.prototype.prepare = function() {
                var t, e, n, o;
                for (this.base = Snap("#base"), this.staff = this.base.selectAll(".staff"), this.bases = [], e = n = 0, o = this.staff.length; 0 <= o ? n < o: n > o; e = 0 <= o ? ++n: --n) t = this.staff[e].getBBox(),
                this.bases.push({
                    bx: t.cx,
                    by: t.cy,
                    x: 0,
                    y: 0,
                    tx: 0,
                    ty: 0
                })
            },
            n.prototype.start = function() {
                var t, n, o, a, i, r, s, h, u, c;
                c = this.staff,
                h = !1,
                a = 0,
                e(window).on("scroll",
                function(t) {
                    u()
                }),
                i = 0,
                r = 0,
                o = !0,
                e(document).on("mousemove.title",
                function(t) {
                    i = t.clientX,
                    r = t.clientY,
                    o || u()
                }),
                n = !1,
                e(".logo-wrap").on("mouseenter",
                function(t) {
                    n = !0
                }).on("mouseleave",
                function(t) {
                    n = !1
                }),
                t = this.bases,
                u = function() {
                    var u;
                    o = !1,
                    clearTimeout( - 1),
                    h = !0,
                    a > 0 ? (a += 1) > 7 && (a = 7) : (a = 1, u = 0, requestAnimationFrame(function() {
                        var o, h, l, f, d, m, p, w, g, v, $, y, b, x, M, A, S, F, q, k, T;
                        if (++u % 4 > 0) requestAnimationFrame(arguments.callee);
                        else {
                            for (f = e(".logo-wrap").width(), (o = e(".logo-wrap").height()) / f > 64 / 48 ? (v = -3, $ = .5 * -(o - 56 * (b = f / 48)) / b) : (v = .5 * -(f - 42 * (b = o / 64)) / b, $ = -4), h = i / b + v, l = r / b + $, p = w = 0, x = c.length; 0 <= x ? w < x: w > x; p = 0 <= x ? ++w: --w) Math.random() < .2 || (d = t[p].bx - h, m = t[p].by - l, M = Math.atan2(m, d), y = 8, F = t[p].tx = y * Math.cos(M), q = t[p].ty = y * Math.sin(M), d = F - t[p].x, m = q - t[p].y, M = Math.atan2(m, d), (g = Math.sqrt(d * d + m * m)) < (y = 2) && (y = g), A = y * Math.cos(M), S = y * Math.sin(M), k = t[p].x += A + .1 * (1 - 2 * Math.random()), T = t[p].y += S + .1 * (1 - 2 * Math.random()), c[p].transform(Snap.matrix().translate(k, T).rotate(10 * (1 - 2 * Math.random()), t[p].bx + 2 * (1 - 2 * Math.random()), t[p].by + 2 * (1 - 2 * Math.random()))));
                            if (n) requestAnimationFrame(arguments.callee);
                            else {
                                if (0 != --a) return requestAnimationFrame(arguments.callee);
                                s()
                            }
                        }
                    }))
                },
                s = function() {
                    var e, n, a, i;
                    for (clearTimeout( - 1), h = !1, e = 0, n = a = 0, i = c.length; 0 <= i ? a < i: a > i; n = 0 <= i ? ++a: --a) t[n].tx = 0,
                    t[n].ty = 0;
                    return requestAnimationFrame(function() {
                        var a, i, r, s, u, l, f, d, m, p, w, g, v;
                        if (!h) {
                            if (! (++e % 4 > 0)) {
                                for (r = 0, n = s = 0, l = c.length; 0 <= l ? s < l: s > l; n = 0 <= l ? ++s: --s) Math.random() < .3 ? 0 === t[n].x && 0 === t[n].y && r++:(p = t[n].tx, w = t[n].ty, a = p - t[n].x, i = w - t[n].y, f = Math.atan2(i, a), Math.sqrt(a * a + i * i) < (u = 1) ? (g = t[n].x = 0, v = t[n].y = 0, c[n].transform(Snap.matrix()), r++) : (d = u * Math.cos(f), m = u * Math.sin(f), g = t[n].x += d, v = t[n].y += m, c[n].transform(Snap.matrix().translate(g + .1 * (1 - 2 * Math.random()), v + .1 * (1 - 2 * Math.random())).rotate(10 * (1 - 2 * Math.random()), t[n].bx + 2 * (1 - 2 * Math.random()), t[n].by + 2 * (1 - 2 * Math.random())))));
                                return r < c.length ? requestAnimationFrame(arguments.callee) : o = !0
                            }
                            requestAnimationFrame(arguments.callee)
                        }
                    })
                }
            },
            n
        } (),
        this.Title04 = n
    } ($),
    function(e) {
        var n;
        n = function() {
            function n() {
                this.start = t(this.start, this),
                this.prepare = t(this.prepare, this),
                this.prepare(),
                setTimeout(function(t) {
                    return function() {
                        return t.start()
                    }
                } (this), 200)
            }
            return n.prototype.prepare = function() {
                var t, e, n, o;
                for (this.base = Snap("#base"), this.staff = this.base.selectAll(".staff"), this.bases = [], e = n = 0, o = this.staff.length; 0 <= o ? n < o: n > o; e = 0 <= o ? ++n: --n) t = this.staff[e].getBBox(),
                this.bases.push({
                    bx: t.cx,
                    by: t.cy,
                    x: 0,
                    y: 0,
                    tx: 0,
                    ty: 0
                })
            },
            n.prototype.start = function() {
                var t, n, o, a, i, r, s, h, u, c;
                c = this.staff,
                h = !1,
                a = 0,
                e(window).on("scroll",
                function(t) {
                    u()
                }),
                i = 0,
                r = 0,
                o = !0,
                e(document).on("mousemove.title",
                function(t) {
                    i = t.clientX,
                    r = t.clientY,
                    o || u()
                }),
                n = !1,
                e(".logo-wrap").on("mouseenter",
                function(t) {
                    n = !0
                }).on("mouseleave",
                function(t) {
                    n = !1
                }),
                t = this.bases,
                u = function() {
                    var u;
                    o = !1,
                    clearTimeout( - 1),
                    h = !0,
                    a > 0 ? (a += 1) > 7 && (a = 7) : (a = 1, u = 0, requestAnimationFrame(function() {
                        var o, h, l, f, d, m, p, w, g, v, $, y, b, x, M, A, S, F, q, k, T;
                        if (++u % 4 > 0) requestAnimationFrame(arguments.callee);
                        else {
                            for (f = e(".logo-wrap").width(), (o = e(".logo-wrap").height()) / f > 64 / 48 ? (v = -3, $ = .5 * -(o - 56 * (b = f / 48)) / b) : (v = .5 * -(f - 42 * (b = o / 64)) / b, $ = -4), h = i / b + v, l = r / b + $, p = w = 0, x = c.length; 0 <= x ? w < x: w > x; p = 0 <= x ? ++w: --w) Math.random() < .2 || (d = t[p].bx - h, m = t[p].by - l, M = Math.atan2(m, d), y = 12, F = t[p].tx = -y * Math.cos(M), q = t[p].ty = -y * Math.sin(M), d = F - t[p].x, m = q - t[p].y, M = Math.atan2(m, d), (g = Math.sqrt(d * d + m * m)) < (y = 2) && (y = g), A = y * Math.cos(M), S = y * Math.sin(M), k = t[p].x += A + .1 * (1 - 2 * Math.random()), T = t[p].y += S + .1 * (1 - 2 * Math.random()), c[p].transform(Snap.matrix().translate(k, T).rotate(10 * (1 - 2 * Math.random()), t[p].bx + 2 * (1 - 2 * Math.random()), t[p].by + 2 * (1 - 2 * Math.random()))));
                            if (n) requestAnimationFrame(arguments.callee);
                            else {
                                if (0 != --a) return requestAnimationFrame(arguments.callee);
                                s()
                            }
                        }
                    }))
                },
                s = function() {
                    var e, n, a, i;
                    for (clearTimeout( - 1), h = !1, e = 0, n = a = 0, i = c.length; 0 <= i ? a < i: a > i; n = 0 <= i ? ++a: --a) t[n].tx = 0,
                    t[n].ty = 0;
                    return requestAnimationFrame(function() {
                        var a, i, r, s, u, l, f, d, m, p, w, g, v;
                        if (!h) {
                            if (! (++e % 4 > 0)) {
                                for (r = 0, n = s = 0, l = c.length; 0 <= l ? s < l: s > l; n = 0 <= l ? ++s: --s) Math.random() < .3 ? 0 === t[n].x && 0 === t[n].y && r++:(p = t[n].tx, w = t[n].ty, a = p - t[n].x, i = w - t[n].y, f = Math.atan2(i, a), Math.sqrt(a * a + i * i) < (u = 1) ? (g = t[n].x = 0, v = t[n].y = 0, c[n].transform(Snap.matrix()), r++) : (d = u * Math.cos(f), m = u * Math.sin(f), g = t[n].x += d, v = t[n].y += m, c[n].transform(Snap.matrix().translate(g + .1 * (1 - 2 * Math.random()), v + .1 * (1 - 2 * Math.random())).rotate(10 * (1 - 2 * Math.random()), t[n].bx + 2 * (1 - 2 * Math.random()), t[n].by + 2 * (1 - 2 * Math.random())))));
                                return r < c.length ? requestAnimationFrame(arguments.callee) : o = !0
                            }
                            requestAnimationFrame(arguments.callee)
                        }
                    })
                }
            },
            n
        } (),
        this.Title05 = n
    } ($),
    function(e) {
        var n;
        n = function() {
            function n() {
                this.start = t(this.start, this),
                this.prepare = t(this.prepare, this),
                this.prepare(),
                setTimeout(function(t) {
                    return function() {
                        return t.start()
                    }
                } (this), 200)
            }
            return n.prototype.prepare = function() {
                var t, e, n, o, a, i, r, s, h;
                for (this.base = Snap("#base"), this.staff = this.base.selectAll(".staff"), this.groups = [[], [], [], [], []], this.strokes = [], this.flags = [], this.colors = ["#E94566", "#0085CA", "#ED8B00", "#008755", "#000000"], t = e = 0, i = this.staff.length; 0 <= i ? e < i: e > i; t = 0 <= i ? ++e: --e)(h = this.staff[t]).attr("class").indexOf("st1") > -1 ? (this.groups[0].push(h), h.attr({
                    stroke: this.colors[0],
                    strokeWidth: 0
                })) : h.attr("class").indexOf("st2") > -1 ? (this.groups[1].push(h), h.attr({
                    stroke: this.colors[1],
                    strokeWidth: 0
                })) : h.attr("class").indexOf("st3") > -1 ? (this.groups[2].push(h), h.attr({
                    stroke: this.colors[2],
                    strokeWidth: 0
                })) : h.attr("class").indexOf("st4") > -1 ? (this.groups[3].push(h), h.attr({
                    stroke: this.colors[3],
                    strokeWidth: 0
                })) : (this.groups[4].unshift(h), h.attr({
                    stroke: this.colors[4],
                    strokeWidth: 0
                })),
                this.strokes.push(0),
                this.flags.push(!1);
                for (this.staff = [], t = o = 0, r = this.groups.length; 0 <= r ? o < r: o > r; t = 0 <= r ? ++o: --o) for (n = a = 0, s = this.groups[t].length; 0 <= s ? a < s: a > s; n = 0 <= s ? ++a: --a) this.staff.push(this.groups[t][n]);
                requestAnimationFrame(function(e) {
                    return function() {
                        var n, o;
                        for (t = o = 0, n = e.staff.length; 0 <= n ? o < n: o > n; t = 0 <= n ? ++o: --o) h = e.strokes[t],
                        e.flags[t] ? h += .1 * (1.55 - h) : h += .04 * (0 - h),
                        e.strokes[t] = h,
                        e.staff[t].attr({
                            strokeWidth: h
                        });
                        return requestAnimationFrame(arguments.callee)
                    }
                } (this))
            },
            n.prototype.start = function() {
                var t, n, o, a, i, r;
                i = this.staff,
                n = 0,
                e(window).on("scroll",
                function(t) {
                    a()
                }),
                r = -1,
                this.colors,
                this.strokes,
                t = this.flags,
                a = function() {
                    var e, a;
                    clearTimeout(r),
                    n > 0 ? (n += 1) > 4 && (n = 4) : (n = 1, e = 0, a = 0, requestAnimationFrame(function() {
                        if (++e % 2 > 0) requestAnimationFrame(arguments.callee);
                        else {
                            if (a < t.length && (t[a] = !0, a++), 0 !== --n) return requestAnimationFrame(arguments.callee);
                            o()
                        }
                    }))
                },
                o = function() {
                    return clearTimeout(r),
                    r = setTimeout(function() {
                        var e, n;
                        n = 0,
                        e = 0,
                        requestAnimationFrame(function() {
                            if (++e % 6 > 0) requestAnimationFrame(arguments.callee);
                            else if (n < t.length && (t[n] = !1, n++), n !== i.length) return requestAnimationFrame(arguments.callee)
                        })
                    },
                    1e3)
                }
            },
            n
        } (),
        this.Title06 = n
    } ($),
    function(n) {
        var o;
        o = function(o) {
            function a(e) {
                this.cancel = t(this.cancel, this),
                this.dfd = n.Deferred(),
                this.timer = setTimeout(function(t) {
                    return function() {
                        return t.dfd.resolve()
                    }
                } (this), e),
                this.dfd.promise(this)
            }
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                for (var a in n) e.call(n, a) && (t[a] = n[a]);
                o.prototype = n.prototype,
                t.prototype = new o,
                t.__super__ = n.prototype
            } (a, DeferredCancelable),
            a.prototype.timer = -1,
            a.prototype.cancel = function() {
                clearTimeout(this.timer),
                a.__super__.cancel.call(this)
            },
            a
        } (),
        this.Timeout = o
    } ($)
}).call(this),
function() { !
    function(t) {
        var e, n, o, a, i;
        i = t.toLowerCase(),
        a = function(t) {
            return i.indexOf(t) > -1
        },
        "gecko",
        "webkit",
        "safari",
        "opera",
        o = document.documentElement,
        e = [!/opera|webtv/i.test(i) && /msie\s(\d+)/.test(i) ? "ie ie" + RegExp.$1: /trident\/(\d+)/.test(i) ? "ie ie" + (parseInt(RegExp.$1) + 4) : /firefox\/(\d+)/.test(i) ? "gecko ff ff" + RegExp.$1: a("gecko/") ? "gecko": a("opera") ? "opera" + (/version\/(\d+)/.test(i) ? " opera" + RegExp.$1: /opera(\s|\/)(\d+)/.test(i) ? " opera" + RegExp.$2: "") : a("chrome") ? "webkit chrome": a("applewebkit/") ? "webkit safari" + (/version\/(\d+)/.test(i) ? " safari" + RegExp.$1 + (1 * RegExp.$1 >= 11 ? " safari11over": "") : "") : a("mozilla/") ? "gecko": "", a("edge") ? "edge": void 0, a("mac") ? "mac" + (/mac os x (\d+)_(\d+)/.test(i) ? " osx osx" + RegExp.$1 + " osx" + RegExp.$1 + "_" + RegExp.$2: "") : a("darwin") ? "mac": a("j2me") ? "mobile": a("webtv") ? "webtv": a("win") ? a("nt 4") ? "win winnt": a("nt 5") ? "win xp": a("nt 6.1") ? "win win7": a("nt 6.2") ? "win win8": a("nt 6.3") ? "win win8 win8.1": a("nt 6.0") ? "win vista": "win": a("freebsd") ? "freebsd": a("x11") || a("linux") ? "linux": "", a("iemobile") ? " sp iemobile": a("iphone") ? " iphone sp" + (/os (\d+)_(\d+)/.test(i) ? " ios ios" + RegExp.$1 + " ios" + RegExp.$1 + "_" + RegExp.$2: "") : a("ipod") ? " ipod sp" + (/os (\d+)_(\d+)/.test(i) ? " ios ios" + RegExp.$1 + " ios" + RegExp.$1 + "_" + RegExp.$2: "") : a("ipad") ? " ipad tablet" + (/os (\d+)_(\d+)/.test(i) ? " ios ios" + RegExp.$1 + " ios" + RegExp.$1 + "_" + RegExp.$2: "") : a("android") ? a("mobile") ? " android sp": " android tablet": a("dream") ? " android sp": a("cupcake") || a("blackberry") || a("webos") || a("incognito") || a("webmate") ? " sp": "", "js"],
        n = e.join(" "),
        o.className += " " + n
    } (navigator.userAgent)
}.call(this);