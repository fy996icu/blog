import{e as p,o as c,c as l,f as s,g as a,w as e,F as u,a as i,i as n}from"./app.bc82b7e2.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const k={},d=i(`<h1 id="\u9876\u5C42-await" tabindex="-1"><a class="header-anchor" href="#\u9876\u5C42-await" aria-hidden="true">#</a> \u9876\u5C42 <code>await</code></h1><p><code>await</code> \u7684\u4F7F\u7528\u5FC5\u987B\u662F\u8981\u5728 <code>async</code> \u8BED\u6CD5\u7CD6\u7684\u5305\u88F9\u4E0B\uFF0C\u5426\u8005\u5C06\u65E0\u6CD5\u6267\u884C\uFF0C\u4E3A\u4E86\u66F4\u7B80\u5316\u4EE3\u7801\uFF0C <code>&lt;script setup&gt;</code> \u4E2D\u53EF\u4EE5\u4F7F\u7528\u9876\u5C42 <code>await</code>\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/post/1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u7F16\u8BD1\u540E\u7684\u7ED3\u679C\u5982\u4E0B\uFF0C\u53EF\u4EE5\u770B\u5230\u7F16\u8BD1\u540E\u7684\u7ED3\u679C\u4E0D\u518D\u662F <code>setup</code> \u4E86\uFF0C\u800C\u662F\u5E26\u6709 <code>async</code> \u7684 <code>setup()</code>\uFF0C \u56E0\u6B64\u4FBF\u53EF\u4EE5\u76F4\u63A5\u5728 <code>&lt;script setup&gt;</code> \u4E2D\u4F7F\u7528\u9876\u5C42\u7684 <code>await</code> \u4E86\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* Analyzed bindings: {
  &quot;post&quot;: &quot;setup-maybe-ref&quot;
} */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withAsyncContext <span class="token keyword">as</span> _withAsyncContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> __sfc__ <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">__props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token keyword">let</span> __temp<span class="token punctuation">,</span> __restore

<span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">[</span>__temp<span class="token punctuation">,</span>__restore<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">_withAsyncContext</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/api/post/1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  __temp <span class="token operator">=</span> <span class="token keyword">await</span> __temp<span class="token punctuation">,</span>
  <span class="token function">__restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  __temp
<span class="token punctuation">)</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
__sfc__<span class="token punctuation">.</span>__file <span class="token operator">=</span> <span class="token string">&quot;App.vue&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> __sfc__
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u53E6\u5916\uFF0C<code>await</code> \u7684\u8868\u8FBE\u5F0F\u4F1A\u81EA\u52A8\u7F16\u8BD1\u6210\u5728 <code>await</code> \u4E4B\u540E\u4FDD\u7559\u5F53\u524D\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\u4E0B\u6587\u7684\u683C\u5F0F\u3002</p>`,6),_={class:"custom-container warning"},b=s("p",{class:"custom-container-title"},"\u6CE8\u610F",-1),m=s("code",null,"async setup()",-1),h=n(" \u5FC5\u987B\u4E0E \u7EC4\u5408\u4F7F\u7528\uFF0C"),g=n("Suspense"),f=n(" \u76EE\u524D\u8FD8\u662F\u5904\u4E8E\u5B9E\u9A8C\u9636\u6BB5\u7684\u7279\u6027\u3002vue \u5B98\u65B9\u63D0\u5230\uFF0C\u5728\u5C06\u6765\u7684\u67D0\u4E2A\u53D1\u5E03\u7248\u672C\u4E2D\u5C06\u5F00\u53D1\u5B8C\u6210\u5E76\u63D0\u4F9B\u6587\u6863 - \u5982\u679C\u4F60\u73B0\u5728\u611F\u5174\u8DA3\uFF0C\u53EF\u4EE5\u53C2\u7167 "),w={href:"https://github.com/vuejs/core/blob/main/packages/runtime-core/__tests__/components/Suspense.spec.ts",target:"_blank",rel:"noopener noreferrer"},v=n("tests"),y=n(" \u770B\u5B83\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002"),E=n("\u5982\u679C\u4F60\u4E86\u89E3 "),x=n("React"),A=n(" \u7684\u8BDD\uFF0C\u4E00\u5B9A\u77E5\u9053 React \u4E2D\u6709\u4E00\u4E2A "),B=n("React.Suspense"),j=n(" \u5185\u7F6E\u7EC4\u4EF6\uFF0C \u8FD9\u4E2A\u7EC4\u4EF6\u4E3B\u8981\u662F\u5728\u7EC4\u4EF6\u5B8C\u6210\u524D\u5B9E\u73B0 loading \u6548\u679C\uFF0C\u56E0\u4E3A\u6709\u7684\u7EC4\u4EF6\u662F\u9700\u8981\u7B49\u5F85\u5F02\u6B65\u7ED3\u679C\u624D\u6E32\u67D3\u7684\uFF0C\u6240\u4EE5\u9700\u8981\u4E00\u4E2A loading \u8FC7\u7A0B\uFF0C\u90A3\u4E48 vue \u8FD9\u91CC\u63D0\u5230\u7684 "),q=s("code",null,"async setup()",-1),S=n(" \u5FC5\u987B\u4E0E "),C=s("code",null,"Suspense",-1),R=n(' \u7EC4\u5408\u4F7F\u7528" \uFF0C\u5176\u601D\u60F3\u5E94\u8BE5\u662F\u4E00\u81F4\u7684\uFF0C\u56E0\u4E3A\u9ED8\u8BA4\u60C5\u51B5\u4E0B vue \u4F1A\u8BA4\u4E3A '),L=s("code",null,"async setup()",-1),N=n(" \u4E2D\u4E00\u5B9A\u5B58\u5728\u9876\u5C42\u7684 "),V=s("code",null,"await",-1),I=n(" \u5F02\u6B65\uFF0C\u4E3A\u4E86\u66F4\u597D\u7684\u4EA4\u4E92\u4F53\u9A8C\uFF0C\u5F3A\u5236\u6DFB\u52A0\u4E00\u4E2A "),F=s("code",null,"Suspense",-1),z=n(" \u7EC4\u4EF6\u4EE5\u663E\u793A loading\u3002");function D(P,T){const t=p("RouterLink"),o=p("ExternalLinkIcon");return c(),l(u,null,[d,s("div",_,[b,s("p",null,[m,h,a(t,{to:"/document/vue3/%E6%96%B0%E7%9A%84%E7%BB%84%E4%BB%B6.html#suspense-%E4%B8%8D%E7%A1%AE%E5%AE%9A%E7%9A%84"},{default:e(()=>[g]),_:1}),f,s("a",w,[v,a(o)]),y])]),s("p",null,[E,a(t,{to:"/document/react/"},{default:e(()=>[x]),_:1}),A,a(t,{to:"/document/react/react%E9%A1%B6%E5%B1%82API.html#react-suspense"},{default:e(()=>[B]),_:1}),j,q,S,C,R,L,N,V,I,F,z])],64)}var J=r(k,[["render",D]]);export{J as default};
