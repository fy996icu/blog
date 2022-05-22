import{e as t,o as e,c as o,f as s,g as c,F as l,a,i as n}from"./app.bc82b7e2.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=a(`<h1 id="script-setup-\u662F\u4E2A\u5565" tabindex="-1"><a class="header-anchor" href="#script-setup-\u662F\u4E2A\u5565" aria-hidden="true">#</a> <code>script setup</code> \u662F\u4E2A\u5565</h1><h2 id="\u4F18\u52BF\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4F18\u52BF\u4ECB\u7ECD" aria-hidden="true">#</a> \u4F18\u52BF\u4ECB\u7ECD</h2><p><code>&lt;script setup&gt;</code> \u662F\u5728\u5355\u6587\u4EF6\u7EC4\u4EF6 (SFC) \u4E2D\u4F7F\u7528\u7EC4\u5408\u5F0F API \u7684\u7F16\u8BD1\u65F6\u8BED\u6CD5\u7CD6\u3002\u6240\u6709 <code>ES</code> \u6A21\u5757\u5BFC\u51FA\u90FD\u88AB\u8BA4\u4E3A\u662F\u66B4\u9732\u7ED9\u4E0A\u4E0B\u6587\u7684\u503C\uFF0C\u5E76\u5305\u542B\u5728 <code>setup()</code> \u8FD4\u56DE\u5BF9\u8C61\u4E2D\uFF0C\u76F8\u6BD4\u4E8E\u666E\u901A\u7684 <code>&lt;script&gt;</code> \u8BED\u6CD5\uFF0C\u5B83\u5177\u6709\u66F4\u591A\u4F18\u52BF\uFF1A</p><ul><li><p>\u66F4\u5C11\u7684\u6837\u677F\u5185\u5BB9\uFF0C\u66F4\u7B80\u6D01\u7684\u4EE3\u7801\u3002</p></li><li><p>\u80FD\u591F\u4F7F\u7528\u7EAF Typescript \u58F0\u660E props \u548C\u629B\u51FA\u4E8B\u4EF6\u3002</p></li><li><p>\u66F4\u597D\u7684\u8FD0\u884C\u65F6\u6027\u80FD (\u5176\u6A21\u677F\u4F1A\u88AB\u7F16\u8BD1\u6210\u4E0E\u5176\u540C\u4E00\u4F5C\u7528\u57DF\u7684\u6E32\u67D3\u51FD\u6570\uFF0C\u6CA1\u6709\u4EFB\u4F55\u7684\u4E2D\u95F4\u4EE3\u7406)\u3002</p></li><li><p>\u66F4\u597D\u7684 IDE \u7C7B\u578B\u63A8\u65AD\u6027\u80FD (\u51CF\u5C11\u8BED\u8A00\u670D\u52A1\u5668\u4ECE\u4EE3\u7801\u4E2D\u62BD\u79BB\u7C7B\u578B\u7684\u5DE5\u4F5C)\u3002</p></li></ul><p><code>&lt;script setup&gt; </code> + <code>TS</code> + <code>Volar</code> = <strong>\u771F\u9999</strong></p><h2 id="\u57FA\u672C\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u8BED\u6CD5</h2><p>\u4F7F\u7528\u65B9\u5F0F\uFF1A\u6781\u5176\u7B80\u5355\uFF0C\u4EC5\u9700\u8981\u5728 <code>script</code> \u6807\u7B7E\u52A0\u4E0A <code>setup</code> \u5173\u952E\u5B57\u5373\u53EF\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello script setup&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u91CC\u9762\u7684\u4EE3\u7801\u4F1A\u88AB\u7F16\u8BD1\u6210\u7EC4\u4EF6 <code>setup()</code> \u51FD\u6570\u7684\u5185\u5BB9\u3002\u8FD9\u610F\u5473\u7740\u4E0E\u666E\u901A\u7684 <code>&lt;script&gt;</code> \u53EA\u5728\u7EC4\u4EF6\u88AB\u9996\u6B21\u5F15\u5165\u7684\u65F6\u5019\u6267\u884C\u4E00\u6B21\u4E0D\u540C\uFF0C<code>&lt;script setup&gt;</code> \u4E2D\u7684\u4EE3\u7801\u4F1A\u5728\u6BCF\u6B21\u7EC4\u4EF6\u5B9E\u4F8B\u88AB\u521B\u5EFA\u7684\u65F6\u5019\u6267\u884C\u3002</p><h2 id="\u7F16\u8BD1\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u603B\u7ED3" aria-hidden="true">#</a> \u7F16\u8BD1\u603B\u7ED3</h2><p>\u7F16\u8BD1\u793A\u4F8B\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u7F16\u8BD1\u540E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* Analyzed bindings: {
  &quot;ref&quot;: &quot;setup-const&quot;,
  &quot;msg&quot;: &quot;setup-ref&quot;
} */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toDisplayString <span class="token keyword">as</span> _toDisplayString<span class="token punctuation">,</span> openBlock <span class="token keyword">as</span> _openBlock<span class="token punctuation">,</span> createElementBlock <span class="token keyword">as</span> _createElementBlock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> __sfc__ <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">__props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">_ctx<span class="token punctuation">,</span> _cache</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">_openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">_createElementBlock</span><span class="token punctuation">(</span><span class="token string">&quot;h1&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token function">_toDisplayString</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* TEXT */</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
__sfc__<span class="token punctuation">.</span>__file <span class="token operator">=</span> <span class="token string">&quot;App.vue&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> __sfc__
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u4ECE\u7F16\u8BD1\u7684\u7ED3\u679C\u53EF\u4EE5\u603B\u7ED3\u4E09\u70B9\uFF0C\u4E5F\u662F <code>&lt;script setup&gt;</code> \u8FD9\u4E2A\u7CD6\u8D2F\u7A7F\u59CB\u7EC8\u7684\u4E09\u70B9\uFF1A</p><ol><li><p><code>&lt;script setup&gt;</code> \u8BED\u6CD5\u7CD6\u6700\u7EC8\u7F16\u8BD1\u6210\u4E86\u666E\u901A\u7684 <code>&lt;script&gt;</code>\u3002</p></li><li><p><code>&lt;script setup&gt;</code> \u7684\u5185\u5BB9\u90FD\u7F16\u8BD1\u6210\u4E86\u7EC4\u4EF6 <code>setup()</code> \u51FD\u6570\u7684\u5185\u5BB9\u3002</p></li><li><p>\u6A21\u677F\u5185\u5BB9\u90FD\u7F16\u8BD1\u6210\u4E86 <code>VNode</code> \u7ED3\u6784\u5E76\u5728 <code>setup()</code> \u51FD\u6570\u4E2D\u5BFC\u51FA\uFF0C\u5E76\u4E14\u5BF9\u6A21\u677F\u4E2D\u7684\u503C\u8FDB\u884C\u4E86\u5F15\u7528\u3002</p></li></ol><h2 id="\u81EA\u52A8\u66B4\u9732" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u66B4\u9732" aria-hidden="true">#</a> \u81EA\u52A8\u66B4\u9732</h2><p><strong>\u9876\u5C42\u7684\u7ED1\u5B9A\u4F1A\u88AB\u66B4\u9732\u7ED9\u6A21\u677F\u3002</strong></p><p>\u5F53\u4F7F\u7528 <code>&lt;script setup&gt;</code> \u7684\u65F6\u5019\uFF0C\u4EFB\u4F55\u5728 <code>&lt;script setup&gt;</code> \u58F0\u660E\u7684\u9876\u5C42\u7684\u7ED1\u5B9A (<code>\u5305\u62EC\u53D8\u91CF</code>\uFF0C<code>\u51FD\u6570\u58F0\u660E</code>\uFF0C\u4EE5\u53CA <code>import</code> \u5F15\u5165\u7684\u5185\u5BB9) \u90FD\u80FD\u5728\u6A21\u677F\u4E2D\u76F4\u63A5\u4F7F\u7528\uFF0C\u4E0D\u518D\u9700\u8981\u4F7F\u7528 <code>return</code> \u5BFC\u51FA\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u53D8\u91CF</span>
<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">&#39;Hello!&#39;</span>

<span class="token comment">// \u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>log<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>import</code> \u5BFC\u5165\u7684\u5185\u5BB9\u4E5F\u4F1A\u4EE5\u540C\u6837\u7684\u65B9\u5F0F\u66B4\u9732\u3002\u610F\u5473\u7740\u53EF\u4EE5\u5728\u6A21\u677F\u8868\u8FBE\u5F0F\u4E2D\u76F4\u63A5\u4F7F\u7528\u5BFC\u5165\u7684 helper \u51FD\u6570\uFF0C\u5E76\u4E0D\u9700\u8981\u901A\u8FC7 methods \u9009\u9879\u6765\u66B4\u9732\u5B83\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> capitalize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./helpers&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ capitalize(&#39;hello&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u539F\u7406\u63A2\u7A76" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u63A2\u7A76" aria-hidden="true">#</a> \u539F\u7406\u63A2\u7A76</h2>`,23),k=n("\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5B98\u65B9\u63D0\u4F9B\u7684\u5DE5\u5177 "),d={href:"https://sfc.vuejs.org",target:"_blank",rel:"noopener noreferrer"},m=n("Vue SFC Playground"),b=n(" \u6765\u67E5\u770B\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u3002"),g=a(`<p>\u7F16\u8BD1\u524D\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u6D4B\u8BD5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputValue<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7F16\u8BD1\u540E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token keyword">as</span> _defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createElementVNode <span class="token keyword">as</span> _createElementVNode<span class="token punctuation">,</span> unref <span class="token keyword">as</span> _unref<span class="token punctuation">,</span> toDisplayString <span class="token keyword">as</span> _toDisplayString<span class="token punctuation">,</span> Fragment <span class="token keyword">as</span> _Fragment<span class="token punctuation">,</span> openBlock <span class="token keyword">as</span> _openBlock<span class="token punctuation">,</span> createElementBlock <span class="token keyword">as</span> _createElementBlock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token comment">// \u8FD9\u4E9B\u90FD\u662F\u5185\u90E8\u7684\u65B9\u6CD5\uFF0C\u53EF\u4E0D\u7528\u5728\u610F</span>
<span class="token keyword">const</span> _hoisted_1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;value&quot;</span><span class="token punctuation">]</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> capitalize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./capitalize&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> __sfc__ <span class="token operator">=</span> <span class="token comment">/*#__PURE__*/</span><span class="token function">_defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">__props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// \u7F16\u8BD1\u6210\u4E86\u666E\u901A\u7684 script</span>
    <span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;\u8F93\u5165\u6D4B\u8BD5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u53EF\u4EE5\u770B\u5230\uFF0C\u7F16\u8BD1\u540E \`&lt;script setup&gt;\` \u8BED\u6CD5\u7CD6\u53D8\u6210\u4E86&lt;script&gt; \u5E76\u5BFC\u51FA\u4E86\u6A21\u677F VNode \u7ED3\u6784\u7684\u51FD\u6570\uFF0C\u5E76\u4E14\u5C06\u6A21\u677F\u4E2D\u7528\u5230\u7684\u503C\u8FDB\u884C\u4E86\u81EA\u52A8\u89E3\u5305</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">_ctx<span class="token punctuation">,</span>_cache</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">_openBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">_createElementBlock</span><span class="token punctuation">(</span>_Fragment<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
        <span class="token function">_createElementVNode</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> inputValue<span class="token punctuation">.</span>value   <span class="token comment">// \u81EA\u52A8\u89E3\u5305 ref</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">8</span> <span class="token comment">/* PROPS */</span><span class="token punctuation">,</span> _hoisted_1<span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment">// \u8FD9\u91CC\u662F\u5BF9\u52A8\u6001\u5C5E\u6027\u7684\u6807\u8BB0\uFF0C\u5BF9 diff \u7B97\u6CD5\u7684\u4F18\u5316</span>
        <span class="token function">_createElementVNode</span><span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token function">_toDisplayString</span><span class="token punctuation">(</span><span class="token function">_unref</span><span class="token punctuation">(</span>capitalize<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token comment">/* TEXT */</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">64</span> <span class="token comment">/* STABLE_FRAGMENT */</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// \u7F16\u8BD1\u540E\u7684 setup \u5BFC\u51FA\u7684\u6A21\u677F\u4E2D\u81EA\u52A8\u7684\u5C31\u5F15\u7528\u4E86 \`capitalize\` \u51FD\u6570</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
__sfc__<span class="token punctuation">.</span>__file <span class="token operator">=</span> <span class="token string">&quot;App.vue&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> __sfc__
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><blockquote><p>\u770B\u5230\u8FD9\u513F\uFF0C\u8FD8\u662F\u89C9\u5F97\u6709\u70B9\u513F\u725B\u76AE\uFF01\uFF01\uFF01</p></blockquote><p>\u53EF\u4EE5\u770B\u5230\u7F16\u8BD1\u540E\u7684\u7ED3\u679C\u4E2D\u5305\u542B\u4E86\u5927\u91CF\u7684 vue <code>\u5185\u7F6E\u65B9\u6CD5</code> \u548C\u5BFC\u51FA <code>sfc</code>\uFF0C\u8FD9\u5C5E\u4E8E\u6846\u67B6\u5185\u90E8\u7684\u6267\u884C\uFF0C\u6240\u4EE5\u6240\u6709\u7684 <code>SFC</code> \u7F16\u8BD1\u65F6\u90FD\u4F1A\u6709\u8FD9\u4E9B\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token keyword">as</span> _defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>		<span class="token comment">// defineComponent \u51FD\u6570</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createElementVNode <span class="token keyword">as</span> _createElementVNode<span class="token punctuation">,</span> unref <span class="token keyword">as</span> _unref<span class="token punctuation">,</span> toDisplayString <span class="token keyword">as</span> _toDisplayString<span class="token punctuation">,</span> Fragment <span class="token keyword">as</span> _Fragment<span class="token punctuation">,</span> openBlock <span class="token keyword">as</span> _openBlock<span class="token punctuation">,</span> createElementBlock <span class="token keyword">as</span> _createElementBlock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>		<span class="token comment">// \u5185\u7F6E\u51FD\u6570</span>

__sfc__<span class="token punctuation">.</span>__file <span class="token operator">=</span> <span class="token string">&quot;App.vue&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> __sfc__
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7);function _(v,f){const p=t("ExternalLinkIcon");return e(),o(l,null,[i,s("p",null,[k,s("a",d,[m,c(p)]),b]),g],64)}var w=u(r,[["render",_]]);export{w as default};