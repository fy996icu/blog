import{e as p,o as t,c as o,f as s,g as c,w as r,F as l,a,i as n}from"./app.bc82b7e2.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=a(`<h1 id="\u57FA\u672C\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u5E94\u7528" aria-hidden="true">#</a> \u57FA\u672C\u5E94\u7528</h1><h2 id="action" tabindex="-1"><a class="header-anchor" href="#action" aria-hidden="true">#</a> Action</h2><h3 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h3><p><code>Action</code> \u662F\u628A\u6570\u636E\u4ECE\u5E94\u7528\u4F20\u5230 <code>Store</code> \u7684\u6709\u6548\u8F7D\u8377\u3002\u5B83\u662F <code>Store</code> \u6570\u636E\u7684\u552F\u4E00\u6765\u6E90\u3002\u4E00\u822C\u6765\u8BF4\u4F60\u4F1A\u901A\u8FC7 <code>store.dispatch(action)</code> \u5C06 <code>Action</code> \u4F20\u5230 <code>Store</code>\u3002</p><h3 id="\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a> \u76EE\u5F55</h3><p>\u5728 <code>src</code> \u76EE\u5F55\u4E0B\u521B\u5EFA <code>redux</code> \u76EE\u5F55\uFF0C\u518D\u5176\u4E0B\u5206\u522B\u521B\u5EFA <code>actions</code>\u3001<code>reducers</code>\u3001<code>constants</code> \u76EE\u5F55\uFF0C\u5177\u4F53\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500 node_modules
\u251C\u2500 public
\u251C\u2500 src
\u2502  \u251C\u2500 redux
\u2502  \u2502  \u251C\u2500 actions
\u2502  \u2502  \u251C\u2500 reducers
|  |  \u251C\u2500 constants
\u2502  \u2502  \u2514\u2500 store.js
\u2502  \u251C\u2500 pages
\u2502  \u251C\u2500 App.jsx
\u2502  \u251C\u2500 index.js
\u2502  \u2514\u2500 ...
\u251C\u2500 package.json
\u251C\u2500 README.md
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u521B\u5EFA-action" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-action" aria-hidden="true">#</a> \u521B\u5EFA <code>Action</code></h3><p>\u6211\u4EEC\u5C1D\u8BD5\u65B0\u5EFA\u4E00\u4E2A <code>action</code>\uFF0C\u5B83\u662F\u4E00\u4E2A JavaScript \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5305\u542B\u4E24\u4E2A\u5C5E\u6027\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li><p><code>type</code>: \u4F1A\u88AB\u5B9A\u4E49\u6210\u5B57\u7B26\u4E32\u5E38\u91CF\uFF0C\u8868\u793A\u5C06\u8981\u6267\u884C\u7684\u52A8\u4F5C\u3002</p></li><li><p><code>data</code>: \u4F20\u9012\u7ED9 <code>Reducer</code> \u7684\u6570\u636E\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5C06type\u5B9A\u4E49\u4E3A\u5E38\u91CF\uFF0C\u7F16\u8F91\u5668\u6709\u4EE3\u7801\u63D0\u793A\uFF0C\u53EF\u4EE5\u907F\u514Dtype\u4E66\u5199\u9519\u8BEF\uFF0C</span>
<span class="token keyword">const</span> <span class="token constant">USER_INFO</span> <span class="token operator">=</span> <span class="token string">&quot;USER_INFO&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3Auser_info_action\u7684Action</span>
<span class="token keyword">const</span> user_info_action <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">USER_INFO</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u9762\u7684\u521B\u5EFA\u65B9\u6CD5\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u5F88\u5C11\u4F7F\u7528\uFF0C\u4F7F\u7528\u66F4\u591A\u7684\u662F\u51FD\u6570\u751F\u6210 <code>Action</code>\u3002</p><h3 id="\u51FD\u6570\u751F\u6210-action" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u751F\u6210-action" aria-hidden="true">#</a> \u51FD\u6570\u751F\u6210 <code>Action</code></h3><p>\u51FD\u6570\u751F\u6210 <code>Action</code> \u66F4\u5BB9\u6613\u88AB\u79FB\u690D\u548C\u6D4B\u8BD5\u3002</p><p>\u968F\u7740\u9879\u76EE\u7684\u589E\u5927\uFF0C\u4E3A\u4E86\u66F4\u65B9\u4FBF\u7684\u7BA1\u7406\u6211\u4EEC\u7684 <code>Action</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06 <code>Action</code> \u5206\u6210\u5BF9\u5E94\u529F\u80FD\u7684\u6A21\u5757\u3002\u5728 <code>actions</code> \u76EE\u5F55\u4E0B\u521B\u5EFA <code>user.js</code> \u6587\u4EF6\uFF0C\u4E13\u95E8\u7528\u4E8E\u7BA1\u7406\u6211\u4EEC\u7528\u6237\u76F8\u5173\u7684 <code>Action</code>\u3002</p><p>\u5728 <code>constants</code> \u76EE\u5F55\u4E0B\u521B\u5EFA <code>index.js</code> \u6587\u4EF6\u7528\u4E8E\u7BA1\u7406\u6211\u4EEC <code>Action</code> \u4E2D\u7684 <code>type</code> \u5E38\u91CF\u3002</p><p><strong><code>constants/index.js</code> \u4EE3\u7801\u5982\u4E0B\uFF1A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// constants/index.js</span>

<span class="token comment">// \u5B9A\u4E49\u8BBE\u7F6E\u7528\u6237\u4FE1\u606F\u7684action type</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SET_USER_INFO</span> <span class="token operator">=</span> <span class="token string">&quot;SET_USER_INFO&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u6DFB\u52A0\u7528\u6237\u7684action type</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">ADD_USER</span> <span class="token operator">=</span> <span class="token string">&quot;ADD_USER&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong><code>actions/user.js</code> \u4EE3\u7801\u5982\u4E0B\uFF1A</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// actions/user.js</span>

<span class="token comment">// \u5BFC\u5165\u5E38\u91CF</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">SET_USER_INFO</span><span class="token punctuation">,</span> <span class="token constant">ADD_USER</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../constants&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u8BBE\u7F6E\u7528\u6237\u4FE1\u606F\u7684 Action \u5E76\u5BFC\u51FA</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">setUserInfo</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">SET_USER_INFO</span><span class="token punctuation">,</span>
  data
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u6DFB\u52A0\u7528\u6237\u7684 Action \u5E76\u5BFC\u51FA</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addUserToList</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD_USER</span><span class="token punctuation">,</span>
  data
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6211\u4EEC\u5C06 <code>Action</code> \u751F\u6210\u5E76\u5BFC\u51FA\uFF0C\u5C06\u5728 <code>Reducer</code> \u4E2D\u4F7F\u7528\u5B83\u3002</p><h2 id="reducer" tabindex="-1"><a class="header-anchor" href="#reducer" aria-hidden="true">#</a> Reducer</h2><h3 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><p><code>Reducers</code> \u6307\u5B9A\u4E86\u5E94\u7528\u72B6\u6001\u7684\u53D8\u5316\u5982\u4F55\u54CD\u5E94 <code>Action</code> \u5E76\u53D1\u9001\u5230 <code>Store</code> \u7684\uFF0C\u8BB0\u4F4F <code>Action</code> \u53EA\u662F\u63CF\u8FF0\u4E86\u6709\u4E8B\u60C5\u53D1\u751F\u4E86\u8FD9\u4E00\u4E8B\u5B9E\uFF0C\u5E76\u6CA1\u6709\u63CF\u8FF0\u5E94\u7528\u5982\u4F55\u66F4\u65B0 <code>State</code>\u3002</p><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h3><p>\u5728 Redux \u5E94\u7528\u4E2D\uFF0C\u6240\u6709\u7684 <code>State</code> \u90FD\u88AB\u4FDD\u5B58\u5728\u4E00\u4E2A\u5355\u4E00\u5BF9\u8C61\u4E2D\u3002\u5EFA\u8BAE\u5728\u5199\u4EE3\u7801\u524D\u5148\u60F3\u4E00\u4E0B\u8FD9\u4E2A\u5BF9\u8C61\u7684\u7ED3\u6784\u3002\u5982\u4F55\u624D\u80FD\u4EE5\u6700\u7B80\u7684\u5F62\u5F0F\u628A\u5E94\u7528\u7684 <code>State</code> \u7528\u5BF9\u8C61\u63CF\u8FF0\u51FA\u6765\u3002</p><p>\u4F8B\u5982\u6211\u4EEC\u9700\u8981\u66F4\u6539\u7528\u6237\u4FE1\u606F\u548C\u6DFB\u52A0\u7528\u6237\uFF0C\u6211\u4EEC\u5219\u9700\u8981\u5B9A\u4E49\u6211\u4EEC\u7684 <code>State</code> \u7ED3\u6784\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u521D\u59CB\u5316\u6211\u4EEC\u7684 State</span>
<span class="token keyword">const</span> State <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">userList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u521B\u5EFA-reducer" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-reducer" aria-hidden="true">#</a> \u521B\u5EFA <code>Reducer</code></h3><p>\u5728 <code>reducers</code> \u6587\u4EF6\u5939\u4E0B\u521B\u5EFA <code>user.js</code> \u6587\u4EF6\u3002</p>`,30),k=n("\u63A5\u7740\u6211\u4EEC\u521D\u59CB\u5316 "),b=s("code",null,"State",-1),m=n(" \u548C\u521B\u5EFA "),h=s("code",null,"Reducer",-1),y=n(" \u51FD\u6570\uFF1A\u59CB\u7EC8\u8981\u8BB0\u4F4F Reducer \u662F\u4E00\u4E2A "),g=n("\u7EAF\u51FD\u6570"),_=n("\u3002"),v=a(`<p><code>Reducer</code> \u51FD\u6570\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A<code>state</code> \u548C <code>action</code>\uFF0C\u8FD4\u56DE\u4E00\u4E2A <strong>\u65B0\u7684 State</strong>\u3002</p><p>\u6211\u4EEC\u5C06\u4EE5\u6307\u5B9A <code>State</code> \u7684\u521D\u59CB\u72B6\u6001\u4F5C\u4E3A\u5F00\u59CB\u3002Redux \u9996\u6B21\u6267\u884C\u65F6\uFF0C<code>State</code> \u4E3A <code>undefined</code>\uFF0C\u6B64\u65F6\u6211\u4EEC\u53EF\u501F\u673A\u8BBE\u7F6E\u5E76\u8FD4\u56DE\u5E94\u7528\u7684\u521D\u59CB <code>State</code>\u3002</p><p>\u5728 <code>default</code> \u60C5\u51B5\u4E0B\u8FD4\u56DE\u65E7\u7684 <code>State</code>\u3002\u9047\u5230\u672A\u77E5\u7684 <code>Action</code> \u65F6\uFF0C\u4E00\u5B9A\u8981\u8FD4\u56DE\u65E7\u7684 <code>State</code>\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5BFC\u5165Action type \u5E38\u91CF</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">SET_USER_INFO</span><span class="token punctuation">,</span> <span class="token constant">ADD_USER</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../constants&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u521D\u59CB\u5316 State</span>
<span class="token keyword">const</span> initState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">userList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u521B\u5EFA Reducer</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function-variable function">userReducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">preState <span class="token operator">=</span> initState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u89E3\u6784\u51FA Action \u4E2D\u7684 type \u548C \u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> action<span class="token punctuation">;</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u8BBE\u7F6E\u7528\u6237\u4FE1\u606F</span>
    <span class="token keyword">case</span> <span class="token constant">SET_USER_INFO</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>preState<span class="token punctuation">,</span> <span class="token literal-property property">userInfo</span><span class="token operator">:</span> data <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5904\u7406\u6DFB\u52A0\u7528\u6237</span>
    <span class="token keyword">case</span> <span class="token constant">ADD_USER</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>preState<span class="token punctuation">,</span> <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span>preState<span class="token punctuation">.</span>userList<span class="token punctuation">,</span> data<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> preState<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u4E4B\u6240\u4EE5\u5C06\u8FD9\u6837\u7684\u51FD\u6570\u79F0\u4E4B\u4E3A <code>reducer</code>\uFF0C\u662F\u56E0\u4E3A\u8FD9\u79CD\u51FD\u6570\u4E0E\u88AB\u4F20\u5165 <code>Array.prototype.reduce(reducer, ?initialValue)</code> \u91CC\u7684\u56DE\u8C03\u51FD\u6570\u5C5E\u4E8E\u76F8\u540C\u7684\u7C7B\u578B\u3002\u4FDD\u6301 <code>reducer</code> \u7EAF\u51C0\u975E\u5E38\u91CD\u8981\u3002\u6C38\u8FDC\u4E0D\u8981\u5728 <code>reducer</code> \u91CC\u505A\u8FD9\u4E9B\u64CD\u4F5C\uFF1A</p><ul><li><p>\u4FEE\u6539\u4F20\u5165\u53C2\u6570\u3002</p></li><li><p>\u6267\u884C\u6709\u526F\u4F5C\u7528\u7684\u64CD\u4F5C\uFF0C\u5982 API \u8BF7\u6C42\u548C\u8DEF\u7531\u8DF3\u8F6C\u3002</p></li><li><p>\u8C03\u7528\u975E\u7EAF\u51FD\u6570\uFF0C\u5982 <code>Date.now()</code> \u6216 <code>Math.random()</code>\u3002</p></li></ul><h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h3><p>\u9700\u8981\u6CE8\u610F <code>reducer</code> \u4E00\u5B9A\u8981\u4FDD\u6301\u7EAF\u51C0\u3002<strong>\u53EA\u8981\u4F20\u5165\u53C2\u6570\u76F8\u540C\uFF0C\u8FD4\u56DE\u8BA1\u7B97\u5F97\u5230\u7684\u4E0B\u4E00\u4E2A state \u5C31\u4E00\u5B9A\u76F8\u540C\u3002\u6CA1\u6709\u7279\u6B8A\u60C5\u51B5\u3001\u6CA1\u6709\u526F\u4F5C\u7528\uFF0C\u6CA1\u6709 API \u8BF7\u6C42\u3001\u6CA1\u6709\u53D8\u91CF\u4FEE\u6539\uFF0C\u5355\u7EAF\u6267\u884C\u8BA1\u7B97\u3002</strong></p><h2 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> Store</h2><p><code>Redux</code> \u5E94\u7528\u53EA\u6709\u4E00\u4E2A\u5355\u4E00\u7684 <code>Store</code>\u3002\u5F53\u9700\u8981\u62C6\u5206\u6570\u636E\u5904\u7406\u903B\u8F91\u65F6\uFF0C\u4F60\u5E94\u8BE5\u4F7F\u7528 <code>Reducer</code> \u7EC4\u5408\uFF0C\u800C\u4E0D\u662F\u521B\u5EFA\u591A\u4E2A <code>Store</code>\u3002</p>`,10);function S(x,f){const e=p("RouterLink");return t(),o(l,null,[d,s("p",null,[k,b,m,h,y,c(e,{to:"/document/redux/%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5.html#%E7%BA%AF%E5%87%BD%E6%95%B0"},{default:r(()=>[g]),_:1}),_]),v],64)}var E=i(u,[["render",S]]);export{E as default};
