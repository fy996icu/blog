import{a as s}from"./app.bc82b7e2.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=s(`<h1 id="useslots-\u548C-useattrs" tabindex="-1"><a class="header-anchor" href="#useslots-\u548C-useattrs" aria-hidden="true">#</a> <code>useSlots</code> \u548C <code>useAttrs</code></h1><p>\u5728 <code>&lt;script setup&gt;</code> \u4F7F\u7528 <code>slots</code> \u548C <code>attrs</code> \u7684\u60C5\u51B5\u5E94\u8BE5\u662F\u5F88\u7F55\u89C1\u7684\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u5728\u6A21\u677F\u4E2D\u901A\u8FC7 <code>$slots</code> \u548C <code>$attrs</code> \u6765\u8BBF\u95EE\u5B83\u4EEC\u3002\u5728\u4F60\u7684\u786E\u9700\u8981\u4F7F\u7528\u5B83\u4EEC\u7684\u7F55\u89C1\u573A\u666F\u4E2D\uFF0C\u53EF\u4EE5\u5206\u522B\u7528 <code>useSlots</code> \u548C <code>useAttrs</code> \u4E24\u4E2A\u8F85\u52A9\u51FD\u6570\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- Father\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u6DFB\u52A0\u5E38\u89C4\u5C5E\u6027 msg \u548C\u52A8\u6001\u5C5E\u6027 count --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Children</span> <span class="token attr-name">msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u4F60\u597D\u554A<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u9ED8\u8BA4\u63D2\u69FD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4F7F\u7528\u5177\u540D\u63D2\u69FD --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u5177\u540D\u63D2\u69FD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Children</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Children <span class="token keyword">from</span> <span class="token string">&#39;./Children.vue&#39;</span>
<span class="token comment">// \u5B9A\u4E49\u52A8\u6001\u5C5E\u6027</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- Children\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u663E\u793A\u5C5E\u6027\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>{{ $attrs.msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>{{ $attrs.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u663E\u793A\u63D2\u69FD\uFF1A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u9ED8\u8BA4\u63D2\u69FD\u5BB9\u5668 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u5177\u540D\u63D2\u69FD\u5BB9\u5668 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u5BFC\u5165 useAttrs \u3001useSlots \u51FD\u6570</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAttrs<span class="token punctuation">,</span> useSlots <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">// \u83B7\u53D6\u5C5E\u6027 attrs</span>
<span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\u63D2\u69FD slots</span>
<span class="token keyword">const</span> slots <span class="token operator">=</span> <span class="token function">useSlots</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8F93\u51FA\uFF1A[Target]] \u4E2D\u6709\u5C5E\u6027\uFF1Acount: 0\uFF0Cmag: &quot;\u4F60\u597D\u554A&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span>

<span class="token comment">// \u8F93\u51FA\uFF1A[Target]] \u4E2D\u6709\u63D2\u69FD\uFF1Adefault: (...args) =&gt; {}\uFF0Cfooter: (...args) =&gt; {}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>slots<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u793A\u4F8B\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/fy996icu/pics/img/useSlots\u548CuseAttrs.png" alt="img"></p><p><code>useSlots</code> \u548C <code>useAttrs</code> \u662F\u771F\u5B9E\u7684 <code>\u8FD0\u884C\u65F6\u51FD\u6570</code>\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u4E0E <code>setupContext.slots</code> \u548C <code>setupContext.attrs</code> \u7B49\u4EF7\u7684\u503C\uFF0C\u540C\u6837\u4E5F\u80FD\u5728\u666E\u901A\u7684 composition API \u4E2D\u4F7F\u7528\u3002</p>`,7);function p(e,c){return t}var u=n(a,[["render",p]]);export{u as default};
