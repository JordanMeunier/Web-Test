import{j as y,e as Fe,s as Ee,f as He,F as G,g as Ue,c as Y,i as S,u as oe,h as se,k as ze,b as E,d as w,l as Ge,m as Ye,S as We,n as Je,o as ke,p as B,q as Ve,r as X,t as _,w as Ze,x as Ke,y as $,z as Xe,A as Ce,B as Me,C as ve,D as et,E as T}from"./q-oYVxI-l0.js";const be={manifestHash:"4nngse",injections:[],bundleGraph:["q-BBOhXBHC.js",31,"q-BDb8A3xp.js","q-BRBr7aun.js","q-By452_MC.js",6,"q-C08_jnv8.js",31,-10,33,-9,21,3,"q-C1hyRFim.js",31,"q-CD6l-_v4.js",31,"q-CfxgwUcO.js",31,-9,25,"q-CSzhh13Y.js",6,"q-CzSjhTSt.js",6,"q-DbTnCXdB.js",31,"q-DC58tHcp.js",6,-9,4,"q-DdrxWFE3.js",2,"q-DjpYR9A8.js",6,"q-jYF3cEE1.js",6,"q-QWhC614I.js",6,"q-U5eMUYia.js",31,-9,27,"Ysfvd0zsHZc",-8,33,"26Zk9LevwR4",-8,0,"35YlVmV10xA",-8,37,"0vphQYqOdZI",-7,4,"1raneLGffO8",-8,37,"B0lqk5IDDy4",-7,25,"MiPVFWJLcMo",-7,35,"ScE8eseirUA",-7,21,"bmV0oH7tsks",-7,31,"p1yCGpFL1xE",-8,33,"pWsmcogutG8",-7,6,"tntnak2DhJ8",-7,27,"K4gvalEGCME",-8,33,"9KRx0IOCHt8",-6,3,"A5SCimyrjAE",-6,13,"N26RLdG0oBg",-6,15,"WfTOxT4IrdA",-6,23,"FdQ8zERN4uM",-8,37,"PmWjL2RrvZM",-7,35,"US0pTyQnOdc",-7,31,"aww2BzpANGM",-8,33,"qGVD1Sz413o",-8,33,"xe8duyQ5aaU",-7,6,"zPJUEsxZLIA",-8,37,"zpHcJzYZ88E",-7,6,"/",-5,17],mapping:{s_Ysfvd0zsHZc:"q-DjpYR9A8.js",s_26Zk9LevwR4:"q-BBOhXBHC.js",s_35YlVmV10xA:"q-QWhC614I.js",s_0vphQYqOdZI:"q-By452_MC.js",s_1raneLGffO8:"q-QWhC614I.js",s_B0lqk5IDDy4:"q-DbTnCXdB.js",s_MiPVFWJLcMo:"q-jYF3cEE1.js",s_ScE8eseirUA:"q-CSzhh13Y.js",s_bmV0oH7tsks:"q-DdrxWFE3.js",s_p1yCGpFL1xE:"q-DjpYR9A8.js",s_pWsmcogutG8:"q-C08_jnv8.js",s_tntnak2DhJ8:"q-DC58tHcp.js",s_K4gvalEGCME:"q-DjpYR9A8.js",s_9KRx0IOCHt8:"q-BRBr7aun.js",s_A5SCimyrjAE:"q-C1hyRFim.js",s_N26RLdG0oBg:"q-CD6l-_v4.js",s_WfTOxT4IrdA:"q-CzSjhTSt.js",s_FdQ8zERN4uM:"q-QWhC614I.js",s_PmWjL2RrvZM:"q-jYF3cEE1.js",s_US0pTyQnOdc:"q-DdrxWFE3.js",s_aww2BzpANGM:"q-DjpYR9A8.js",s_qGVD1Sz413o:"q-DjpYR9A8.js",s_xe8duyQ5aaU:"q-C08_jnv8.js",s_zPJUEsxZLIA:"q-QWhC614I.js",s_zpHcJzYZ88E:"q-C08_jnv8.js"},preloader:"q-BDb8A3xp.js",core:"q-DdrxWFE3.js"};/**
 * @license
 * @builder.io/qwik/server 1.14.1
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var tt=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),nt="<sync>";function Pe(t,e){const n=e==null?void 0:e.mapper,r=t.symbolMapper?t.symbolMapper:(s,i,a)=>{var c;if(n){const d=F(s),l=n[d];if(!l){if(d===nt)return[d,""];if((c=globalThis.__qwik_reg_symbols)==null?void 0:c.has(d))return[s,"_"];if(a)return[s,`${a}?qrl=${s}`];console.error("Cannot resolve symbol",s,"in",n,a)}return l}};return{isServer:!0,async importSymbol(s,i,a){var m;const c=F(a),d=(m=globalThis.__qwik_reg_symbols)==null?void 0:m.get(c);if(d)return d;let l=String(i);l.endsWith(".js")||(l+=".js");const u=tt(l);if(!(a in u))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${l}'.`);return u[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(i=>{setTimeout(()=>{i(s())})}),chunkForSymbol(s,i,a){return r(s,n,a)}}}async function rt(t,e){const n=Pe(t,e);Ee(n)}var F=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t},ot="q:instance",H={$DEBUG$:!1,$invPreloadProbability$:.65},st=Date.now(),at=/\.[mc]?js$/,je=0,it=1,ct=2,lt=3,ee,te,ut=(t,e)=>({$name$:t,$state$:at.test(t)?je:lt,$deps$:De?e==null?void 0:e.map(n=>({...n,$factor$:1})):e,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),dt=t=>{const e=new Map;let n=0;for(;n<t.length;){const r=t[n++],o=[];let s,i=1;for(;s=t[n],typeof s=="number";)s<0?i=-s/10:o.push({$name$:t[s],$importProbability$:i,$factor$:1}),n++;e.set(r,o)}return e},xe=t=>{let e=ne.get(t);if(!e){let n;if(te){if(n=te.get(t),!n)return;n.length||(n=void 0)}e=ut(t,n),ne.set(t,e)}return e},ft=(t,e)=>{e&&("debug"in e&&(H.$DEBUG$=!!e.debug),typeof e.preloadProbability=="number"&&(H.$invPreloadProbability$=1-e.preloadProbability)),!(ee!=null||!t)&&(ee="",te=dt(t))},ne=new Map,De,U,Le=0,A=[],mt=(...t)=>{console.log(`Preloader ${Date.now()-st}ms ${Le}/${A.length} queued>`,...t)},pt=()=>{ne.clear(),U=!1,De=!0,Le=0,A.length=0},ht=()=>{U&&(A.sort((t,e)=>t.$inverseProbability$-e.$inverseProbability$),U=!1)},yt=()=>{ht();let t=.4;const e=[];for(const n of A){const r=Math.round((1-n.$inverseProbability$)*10);r!==t&&(t=r,e.push(t)),e.push(n.$name$)}return e},Ie=(t,e,n)=>{if(n!=null&&n.has(t))return;const r=t.$inverseProbability$;if(t.$inverseProbability$=e,!(r-t.$inverseProbability$<.01)&&(ee!=null&&t.$state$<ct&&t.$inverseProbability$<H.$invPreloadProbability$&&(t.$state$===je&&(t.$state$=it,A.push(t),H.$DEBUG$&&mt(`queued ${Math.round((1-t.$inverseProbability$)*100)}%`,t.$name$)),U=!0),t.$deps$)){n||(n=new Set),n.add(t);const o=1-t.$inverseProbability$;for(const s of t.$deps$){const i=xe(s.$name$);if(i.$inverseProbability$===0)continue;let a;if(s.$importProbability$>.5&&(o===1||o>=.99&&re<100))re++,a=Math.min(.01,1-s.$importProbability$);else{const c=1-s.$importProbability$*o,d=s.$factor$,l=c/d;a=Math.max(.02,i.$inverseProbability$*l),s.$factor$=l}Ie(i,a,n)}}},ge=(t,e)=>{const n=xe(t);n&&n.$inverseProbability$>e&&Ie(n,e)},re,vt=(t,e)=>{if(!(t!=null&&t.length))return;re=0;let n=e?1-e:.4;if(Array.isArray(t))for(let r=t.length-1;r>=0;r--){const o=t[r];typeof o=="number"?n=1-o/10:ge(o,n)}else ge(t,n)};function bt(t){const e=[],n=r=>{if(r)for(const o of r)e.includes(o.url)||(e.push(o.url),o.imports&&n(o.imports))};return n(t),e}var gt=t=>{var n;const e=Ue();return(n=t==null?void 0:t.qrls)==null?void 0:n.map(r=>{var a;const o=r.$refSymbol$||r.$symbol$,s=r.$chunk$,i=e.chunkForSymbol(o,s,(a=r.dev)==null?void 0:a.file);return i?i[1]:s}).filter(Boolean)};function qt(t,e,n){const r=e.prefetchStrategy;if(r===null)return[];if(!(n!=null&&n.manifest.bundleGraph))return gt(t);if(typeof(r==null?void 0:r.symbolsToPrefetch)=="function")try{const s=r.symbolsToPrefetch({manifest:n.manifest});return bt(s)}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}const o=new Set;for(const s of(t==null?void 0:t.qrls)||[]){const i=F(s.$refSymbol$||s.$symbol$);i&&i.length>=10&&o.add(i)}return[...o]}var _t=(t,e)=>{if(!(e!=null&&e.manifest.bundleGraph))return[...new Set(t)];pt();let n=.99;for(const r of t.slice(0,15))vt(r,n),n*=.85;return yt().filter(r=>r!==(e==null?void 0:e.manifest.preloader)&&r!==(e==null?void 0:e.manifest.core))},wt=(t,e,n,r,o)=>{var i;const s=(i=e==null?void 0:e.manifest)==null?void 0:i.preloader;if(s&&n!==!1){const a=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;ft(e==null?void 0:e.manifest.bundleGraph,a);const c=[];n!=null&&n.debug&&c.push("d:1"),n!=null&&n.maxIdlePreloads&&c.push(`P:${n.maxIdlePreloads}`),n!=null&&n.preloadProbability&&c.push(`Q:${n.preloadProbability}`);const d=c.length?`,{${c.join(",")}}`:"",l=e==null?void 0:e.manifest.manifestHash,u=`let b=fetch("${t}q-bundle-graph-${l}.json");import("${t}${s}").then(({l})=>l(${JSON.stringify(t)},b${d}));`;r.push(y("link",{rel:"modulepreload",href:`${t}${s}`}),y("link",{rel:"preload",href:`${t}q-bundle-graph-${e==null?void 0:e.manifest.manifestHash}.json`,as:"fetch",crossorigin:"anonymous"}),y("script",{type:"module",async:!0,dangerouslySetInnerHTML:u,nonce:o}));const m=e==null?void 0:e.manifest.core;m&&r.push(y("link",{rel:"modulepreload",href:`${t}${m}`}))}},$t=(t,e,n,r,o)=>{if(r.length===0||n===!1)return null;const{ssrPreloads:s,ssrPreloadProbability:i}=Et(typeof n=="boolean"?void 0:n);let a=s;const c=[],d=[],l=e==null?void 0:e.manifest.manifestHash;if(a){const m=_t(r,e);let v=4;const h=i*10;for(const f of m)if(typeof f=="string"){if(v<h||(d.push(f),--a===0))break}else v=f}const u=l&&(e==null?void 0:e.manifest.preloader);if(u){const v=(d.length?`${JSON.stringify(d)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(t)}+l;document.head.appendChild(e)});`:"")+`window.addEventListener('load',f=>{f=_=>import("${t}${u}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`;c.push(y("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:v,nonce:o}))}return c.length>0?y(G,{children:c}):null},St=(t,e,n,r,o)=>{var s;if(n.preloader!==!1){const i=qt(e,n,r);if(i.length>0){const a=$t(t,r,n.preloader,i,(s=n.serverData)==null?void 0:s.nonce);a&&o.push(a)}}};function Et(t){return{...kt,...t}}var kt={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},Ct='(()=>{const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach((n=>e.push(...s(n,t)))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach((t=>{const e=t.shadowRoot;e&&i(e)}))},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach((o=>b(o,t,e,n)))},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter((t=>t[0]===s));if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],(()=>e.isConnected))(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),b=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:b,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{u("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){u("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){u("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},u=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,(t=>"-"+t.toLowerCase())),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{var s;const c=t.readyState;if(!r&&("interactive"==c||"complete"==c)&&(o.forEach(i),r=1,u("qinit"),(null!=(s=e.requestIdleCallback)?s:e.setTimeout).bind(e)((()=>u("qidle"))),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver((t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",p("qvisible",n)))}));t.forEach((t=>e.observe(t)))}},y=(t,e,n,o=!1)=>t.addEventListener(e,n,{capture:o,passive:!1}),w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach((t=>y(t,r,q,!0))),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach((t=>y(r,t,q,!0))),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;Array.isArray(r)&&w(...r),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}})()',Pt=`(() => {
  const doc = document;
  const win = window;
  const events = /* @__PURE__ */ new Set();
  const roots = /* @__PURE__ */ new Set([doc]);
  let hasInitialized;
  const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
  const querySelectorAll = (query) => {
    const elements = [];
    roots.forEach((root) => elements.push(...nativeQuerySelectorAll(root, query)));
    return elements;
  };
  const findShadowRoots = (fragment) => {
    processEventOrNode(fragment);
    nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent) => {
      const shadowRoot = parent.shadowRoot;
      shadowRoot && findShadowRoots(shadowRoot);
    });
  };
  const isPromise = (promise) => promise && typeof promise.then === "function";
  const broadcast = (infix, ev, type = ev.type) => {
    querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach(
      (el) => dispatch(el, infix, ev, type)
    );
  };
  const resolveContainer = (containerEl) => {
    if (containerEl._qwikjson_ === void 0) {
      const parentJSON = containerEl === doc.documentElement ? doc.body : containerEl;
      let script = parentJSON.lastElementChild;
      while (script) {
        if (script.tagName === "SCRIPT" && script.getAttribute("type") === "qwik/json") {
          containerEl._qwikjson_ = JSON.parse(
            script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1")
          );
          break;
        }
        script = script.previousElementSibling;
      }
    }
  };
  const createEvent = (eventName, detail) => new CustomEvent(eventName, {
    detail
  });
  const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
    const attrName = "on" + onPrefix + ":" + eventName;
    if (element.hasAttribute("preventdefault:" + eventName)) {
      ev.preventDefault();
    }
    if (element.hasAttribute("stoppropagation:" + eventName)) {
      ev.stopPropagation();
    }
    const ctx = element._qc_;
    const relevantListeners = ctx && ctx.li.filter((li) => li[0] === attrName);
    if (relevantListeners && relevantListeners.length > 0) {
      for (const listener of relevantListeners) {
        const results = listener[1].getFn([element, ev], () => element.isConnected)(ev, element);
        const cancelBubble = ev.cancelBubble;
        if (isPromise(results)) {
          await results;
        }
        if (cancelBubble) {
          ev.stopPropagation();
        }
      }
      return;
    }
    const attrValue = element.getAttribute(attrName);
    if (attrValue) {
      const container = element.closest("[q\\\\:container]");
      const qBase = container.getAttribute("q:base");
      const qVersion = container.getAttribute("q:version") || "unknown";
      const qManifest = container.getAttribute("q:manifest-hash") || "dev";
      const base = new URL(qBase, doc.baseURI);
      for (const qrl of attrValue.split("\\n")) {
        const url = new URL(qrl, base);
        const href = url.href;
        const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
        const reqTime = performance.now();
        let handler;
        let importError;
        let error;
        const isSync = qrl.startsWith("#");
        const eventData = {
          qBase,
          qManifest,
          qVersion,
          href,
          symbol,
          element,
          reqTime
        };
        if (isSync) {
          const hash = container.getAttribute("q:instance");
          handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
          if (!handler) {
            importError = "sync";
            error = new Error("sym:" + symbol);
          }
        } else {
          emitEvent("qsymbol", eventData);
          const uri = url.href.split("#")[0];
          try {
            const module = import(
                            uri
            );
            resolveContainer(container);
            handler = (await module)[symbol];
            if (!handler) {
              importError = "no-symbol";
              error = new Error(\`\${symbol} not in \${uri}\`);
            }
          } catch (err) {
            importError || (importError = "async");
            error = err;
          }
        }
        if (!handler) {
          emitEvent("qerror", {
            importError,
            error,
            ...eventData
          });
          console.error(error);
          break;
        }
        const previousCtx = doc.__q_context__;
        if (element.isConnected) {
          try {
            doc.__q_context__ = [element, ev, url];
            const results = handler(ev, element);
            if (isPromise(results)) {
              await results;
            }
          } catch (error2) {
            emitEvent("qerror", { error: error2, ...eventData });
          } finally {
            doc.__q_context__ = previousCtx;
          }
        }
      }
    }
  };
  const emitEvent = (eventName, detail) => {
    doc.dispatchEvent(createEvent(eventName, detail));
  };
  const camelToKebab = (str) => str.replace(/([A-Z])/g, (a) => "-" + a.toLowerCase());
  const processDocumentEvent = async (ev) => {
    let type = camelToKebab(ev.type);
    let element = ev.target;
    broadcast("-document", ev, type);
    while (element && element.getAttribute) {
      const results = dispatch(element, "", ev, type);
      let cancelBubble = ev.cancelBubble;
      if (isPromise(results)) {
        await results;
      }
      cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type);
      element = ev.bubbles && cancelBubble !== true ? element.parentElement : null;
    }
  };
  const processWindowEvent = (ev) => {
    broadcast("-window", ev, camelToKebab(ev.type));
  };
  const processReadyStateChange = () => {
    var _a;
    const readyState = doc.readyState;
    if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
      roots.forEach(findShadowRoots);
      hasInitialized = 1;
      emitEvent("qinit");
      const riC = (_a = win.requestIdleCallback) != null ? _a : win.setTimeout;
      riC.bind(win)(() => emitEvent("qidle"));
      if (events.has("qvisible")) {
        const results = querySelectorAll("[on\\\\:qvisible]");
        const observer = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              observer.unobserve(entry.target);
              dispatch(entry.target, "", createEvent("qvisible", entry));
            }
          }
        });
        results.forEach((el) => observer.observe(el));
      }
    }
  };
  const addEventListener = (el, eventName, handler, capture = false) => {
    return el.addEventListener(eventName, handler, { capture, passive: false });
  };
  const processEventOrNode = (...eventNames) => {
    for (const eventNameOrNode of eventNames) {
      if (typeof eventNameOrNode === "string") {
        if (!events.has(eventNameOrNode)) {
          roots.forEach(
            (root) => addEventListener(root, eventNameOrNode, processDocumentEvent, true)
          );
          addEventListener(win, eventNameOrNode, processWindowEvent, true);
          events.add(eventNameOrNode);
        }
      } else {
        if (!roots.has(eventNameOrNode)) {
          events.forEach(
            (eventName) => addEventListener(eventNameOrNode, eventName, processDocumentEvent, true)
          );
          roots.add(eventNameOrNode);
        }
      }
    }
  };
  if (!("__q_context__" in doc)) {
    doc.__q_context__ = 0;
    const qwikevents = win.qwikevents;
    if (Array.isArray(qwikevents)) {
      processEventOrNode(...qwikevents);
    }
    win.qwikevents = {
      events,
      roots,
      push: processEventOrNode
    };
    addEventListener(doc, "readystatechange", processReadyStateChange);
    processReadyStateChange();
  }
})()`;function qe(t={}){return t.debug?Pt:Ct}function M(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function jt(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var xt="<!DOCTYPE html>";async function Dt(t,e){var q,ie,ce,le;let n=e.stream,r=0,o=0,s=0,i=0,a="",c;const d=((q=e.streaming)==null?void 0:q.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},l=e.containerTagName??"html",u=e.containerAttributes??{},m=n,v=M(),h=jt(e),f=Ae(e.manifest);function R(){a&&(m.write(a),a="",r=0,s++,s===1&&(i=v()))}function j(p){const g=p.length;r+=g,o+=g,a+=p}switch(d.strategy){case"disabled":n={write:j};break;case"direct":n=m;break;case"auto":let p=0,g=!1;const ue=d.maximunChunk??0,K=d.maximunInitialChunk??0;n={write(D){D==="<!--qkssr-f-->"?g||(g=!0):D==="<!--qkssr-pu-->"?p++:D==="<!--qkssr-po-->"?p--:j(D),p===0&&(g||r>=(s===0?K:ue))&&(g=!1,R())}};break}l==="html"?n.write(xt):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"}),f||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await rt(e,f);const L=f==null?void 0:f.manifest.injections,b=L?L.map(p=>y(p.tag,p.attributes??{})):[],x=((ie=e.qwikLoader)==null?void 0:ie.include)??"auto",I=((ce=e.qwikLoader)==null?void 0:ce.position)??"bottom";let W=!1;if(I==="top"&&x!=="never"){W=!0;const p=qe({debug:e.debug});b.push(y("script",{id:"qwikloader",dangerouslySetInnerHTML:p})),b.push(y("script",{dangerouslySetInnerHTML:"window.qwikevents.push('click','input')"}))}wt(h,f,e.preloader,b,(le=e.serverData)==null?void 0:le.nonce);const J=M(),V=[];let N=0,k=0;await Fe(t,{stream:n,containerTagName:l,containerAttributes:u,serverData:e.serverData,base:h,beforeContent:b,beforeClose:async(p,g,ue,K)=>{var me,pe,he,ye;N=J();const D=M();c=await He(p,g,void 0,K);const C=[];St(h,c,e,f,C);const Oe=JSON.stringify(c.state,void 0,void 0);if(C.push(y("script",{type:"qwik/json",dangerouslySetInnerHTML:It(Oe),nonce:(me=e.serverData)==null?void 0:me.nonce})),c.funcs.length>0){const P=u[ot];C.push(y("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Nt(P,c.funcs),nonce:(pe=e.serverData)==null?void 0:pe.nonce}))}const Qe=!W&&(!c||c.mode!=="static"),de=x==="always"||x==="auto"&&Qe;if(de){const P=qe({debug:e.debug});C.push(y("script",{id:"qwikloader",dangerouslySetInnerHTML:P,nonce:(he=e.serverData)==null?void 0:he.nonce}))}const fe=Array.from(g.$events$,P=>JSON.stringify(P));if(fe.length>0){const P=(de?"window.qwikevents":"(window.qwikevents||=[])")+`.push(${fe.join(", ")})`;C.push(y("script",{dangerouslySetInnerHTML:P,nonce:(ye=e.serverData)==null?void 0:ye.nonce}))}return At(V,p),k=D(),y(G,{children:C})},manifestHash:(f==null?void 0:f.manifest.manifestHash)||"dev"+Lt()}),l!=="html"&&n.write("<!--/cq-->"),R();const Z=c.resources.some(p=>p._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:s,manifest:f==null?void 0:f.manifest,size:o,isStatic:!Z,timing:{render:N,snapshot:k,firstFlush:i}}}function Lt(){return Math.random().toString(36).slice(2)}function Ae(t){const e=t?{...be,...t}:be;if(!e||"mapper"in e)return e;if(e.mapping){const n={};return Object.entries(e.mapping).forEach(([r,o])=>{n[F(r)]=[r,o]}),{mapper:n,manifest:e,injections:e.injections||[]}}}var It=t=>t.replace(/<(\/?script)/gi,"\\x3C$1");function At(t,e){var n;for(const r of e){const o=(n=r.$componentQrl$)==null?void 0:n.getSymbol();o&&!t.includes(o)&&t.push(o)}}var Rt='document["qFuncs_HASH"]=';function Nt(t,e){return Rt.replace("HASH",t)+`[${e.join(`,
`)}]`}async function fn(t){const e=Pe({},Ae(t));Ee(e)}const Bt=$("qc-s"),Tt=$("qc-c"),Re=$("qc-ic"),Ne=$("qc-h"),Be=$("qc-l"),Ot=$("qc-n"),Qt=$("qc-a"),Ft=$("qc-ir"),Ht=$("qc-p"),Ut=Ye(Xe("s_9KRx0IOCHt8")),zt=()=>{if(!se("containerAttributes"))throw new Error("PrefetchServiceWorker component must be rendered on the server.");ze();const e=oe(Re);if(e.value&&e.value.length>0){const n=e.value.length;let r=null;for(let o=n-1;o>=0;o--)e.value[o].default&&(r=E(e.value[o].default,{children:r},1,"ni_0"));return E(G,{children:[r,w("script",{"document:onQCInit$":Ut,"document:onQInit$":Ge(()=>{((o,s)=>{var i;if(!o._qcs&&s.scrollRestoration==="manual"){o._qcs=!0;const a=(i=s.state)==null?void 0:i._qCityScroll;a&&o.scrollTo(a.x,a.y),document.dispatchEvent(new Event("qcinit"))}})(window,history)},'()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}')},null,null,2,"ni_1")]},1,"ni_2")}return We},Gt=Y(S(zt,"s_ScE8eseirUA")),Yt=(t,e)=>new URL(t,e.href),_e=(t,e)=>t.origin===e.origin,we=t=>t.endsWith("/")?t:t+"/",Wt=({pathname:t},{pathname:e})=>{const n=Math.abs(t.length-e.length);return n===0?t===e:n===1&&we(t)===we(e)},Jt=(t,e)=>t.search===e.search,z=(t,e)=>Jt(t,e)&&Wt(t,e),Vt=t=>t&&typeof t.then=="function",Zt=(t,e,n,r)=>{const o=Te(),i={head:o,withLocale:a=>ve(r,a),resolveValue:a=>{const c=a.__id;if(a.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const d=t.loaders[c];if(Vt(d))throw new Error("Loaders returning a promise can not be resolved for the head function.");return d},...e};for(let a=n.length-1;a>=0;a--){const c=n[a]&&n[a].head;c&&(typeof c=="function"?$e(o,ve(r,()=>c(i))):typeof c=="object"&&$e(o,c))}return i.head},$e=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),O(t.meta,e.meta),O(t.links,e.links),O(t.styles,e.styles),O(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},O=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const r=t.findIndex(o=>o.key===n.key);if(r>-1){t[r]=n;continue}}t.push(n)}},Te=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}}),Kt=()=>oe(Ne),Xt=()=>oe(Be),Mt=()=>ke(se("qwikcity")),Se={},Q={navCount:0},en=":root{view-transition-name:none}",tn=t=>{},nn=async(t,e)=>{const[n,r,o,s]=Ce(),{type:i="link",forceReload:a=t===void 0,replaceState:c=!1,scroll:d=!0}=typeof e=="object"?e:{forceReload:e};Q.navCount++;const l=o.value.dest,u=t===void 0?l:typeof t=="number"?t:Yt(t,s.url);if(Se.$cbs$&&(a||typeof u=="number"||!z(u,l)||!_e(u,l))){const m=Q.navCount,v=await Promise.all([...Se.$cbs$.values()].map(h=>h(u)));if(m!==Q.navCount||v.some(Boolean)){m===Q.navCount&&i==="popstate"&&history.pushState(null,"",l);return}}if(typeof u!="number"&&_e(u,l)&&!(!a&&z(u,l)))return o.value={type:i,dest:u,forceReload:a,replaceState:c,scroll:d},n.value=void 0,s.isNavigating=!0,new Promise(m=>{r.r=m})},rn=({track:t})=>{const[e,n,r,o,s,i,a,c,d,l,u]=Ce();async function m(){const[h,f]=t(()=>[l.value,e.value]),R=Me(""),j=u.url,L=f?"form":h.type;h.replaceState;let b,x,I=null;if(b=new URL(h.dest,u.url),I=s.loadedRoute,x=s.response,I){const[W,J,V,N]=I,k=V,Z=k[k.length-1],ae=L==="form"&&!z(b,j);h.dest.search&&!ae&&(b.search=h.dest.search),z(b,j)||(u.prevUrl=j),u.url=b,u.params={...J},l.untrackedValue={type:L,dest:b};const q=Zt(x,u,k,R);n.headings=Z.headings,n.menu=N,r.value=ke(k),o.links=q.links,o.meta=q.meta,o.styles=q.styles,o.scripts=q.scripts,o.title=q.title,o.frontmatter=q.frontmatter}}return m()},on=t=>{Je(S(en,"s_K4gvalEGCME"));const e=Mt();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const n=se("url");if(!n)throw new Error("Missing Qwik URL Env Data");const r=new URL(n),o=B({url:r,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),s={},i=Ve(B(e.response.loaders,{deep:!1})),a=X({type:"initial",dest:r,forceReload:!1,replaceState:!1,scroll:!0}),c=B(Te),d=B({headings:void 0,menu:void 0}),l=X(),u=e.response.action,m=u?e.response.loaders[u]:void 0,v=X(m?{id:u,data:e.response.formData,output:{result:m,status:e.response.status}}:void 0),h=S(tn,"s_qGVD1Sz413o"),f=S(nn,"s_aww2BzpANGM",[v,s,a,o]);return _(Tt,d),_(Re,l),_(Ne,c),_(Be,o),_(Ot,f),_(Bt,i),_(Qt,v),_(Ft,a),_(Ht,h),Ze(S(rn,"s_Ysfvd0zsHZc",[v,d,l,c,e,f,i,s,t,a,o])),E(Ke,null,3,"ni_3")},sn=Y(S(on,"s_p1yCGpFL1xE")),an=()=>{const t=Kt(),e=Xt();return E(G,{children:[w("title",null,null,t.title,1,null),w("link",null,{rel:"canonical",href:et(n=>n.url.href,[e],"p0.url.href")},null,3,null),w("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),w("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),t.meta.map(n=>T("meta",{...n},null,0,n.key)),t.links.map(n=>T("link",{...n},null,0,n.key)),t.styles.map(n=>{var r;return T("style",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.style}},null,0,n.key)}),t.scripts.map(n=>{var r;return T("script",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.script}},null,0,n.key)})]},1,"0D_0")},cn=Y(S(an,"s_0vphQYqOdZI")),ln=()=>E(sn,{children:[w("head",null,null,[w("meta",null,{charset:"utf-8"},null,3,null),w("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"vp_0"),E(cn,null,3,"vp_1")],1,null),w("body",null,{lang:"en"},E(Gt,null,3,"vp_2"),1,null)]},1,"vp_3"),un=Y(S(ln,"s_tntnak2DhJ8"));function mn(t){return Dt(E(un,null,3,"Qb_0"),{...t,containerAttributes:{lang:"en-us",...t.containerAttributes},serverData:{...t.serverData}})}export{mn as r,fn as s};
