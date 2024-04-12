import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,b as e}from"./app-DOGW-9XX.js";const l={},i=e(`<h1 id="builtin" tabindex="-1"><a class="header-anchor" href="#builtin"><span>builtin</span></a></h1><p>执行bash内建命令。</p><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">builtin</span> <span class="token punctuation">[</span>shell-builtin <span class="token punctuation">[</span>arg <span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="主要用途" tabindex="-1"><a class="header-anchor" href="#主要用途"><span>主要用途</span></a></h2><ul><li>用于执行指定的bash内建命令。</li><li><code>builtin</code>命令调用的bash内建命令优先于同名的外部命令及同名的shell函数。</li></ul><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><p>shell-builtin（可选）：要调用的bash内建命令。</p><p>arg（可选）：传递给bash内建命令的一到多个参数。</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h2><p>返回该内建命令执行的返回值，除非传递的不是bash内建命令或该内建命令被禁用。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><p>同名情况下的优先级顺序：</p><p>builtin 内建命令 &gt; 函数 &gt; 内建命令 &gt; 外部命令</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 关于外部命令优先级最高的情况请参考enable命令。</span>
<span class="token comment"># 此时内建命令优先使用</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;the Great Wall&quot;</span>
<span class="token comment"># 调用内建命令type，返回命令的类型（builtin）</span>
<span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token builtin class-name">echo</span>
<span class="token comment"># 定义 echo 函数</span>
<span class="token function-name function">echo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">printf</span> <span class="token string">&quot;123<span class="token entity" title="\\n">\\n</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 此时同名函数优先使用，显示（123）</span>
<span class="token builtin class-name">echo</span>
<span class="token comment"># 调用内建命令type，返回命令的类型（function）</span>
<span class="token builtin class-name">type</span> <span class="token parameter variable">-t</span> <span class="token builtin class-name">echo</span>
<span class="token comment"># 此时内建命令优先使用</span>
<span class="token builtin class-name">builtin</span> <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;backslash <span class="token entity" title="\\\\">\\\\</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 执行shell内部指令，输出当前系统下的命令别名</span>
<span class="token builtin class-name">builtin</span> <span class="token builtin class-name">alias</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">cp</span><span class="token operator">=</span><span class="token string">&#39;cp -i&#39;</span>
<span class="token builtin class-name">alias</span> l.<span class="token operator">=</span><span class="token string">&#39;ls -d .* --color=tty&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -l --color=tty&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ls</span><span class="token operator">=</span><span class="token string">&#39;ls --color=tty&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">mv</span><span class="token operator">=</span><span class="token string">&#39;mv -i&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">rm</span><span class="token operator">=</span><span class="token string">&#39;rm -i&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">which</span><span class="token operator">=</span><span class="token string">&#39;alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><ol><li><p>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</p></li><li><p>如果要调用的内建命令被禁用了（包括<code>builtin</code>），那么执行会报错；关于禁用和启用内建命令请参考<code>enable</code>命令。</p></li></ol>`,18),t=[i];function c(p,o){return s(),n("div",null,t)}const u=a(l,[["render",c],["__file","builtin.html.vue"]]),m=JSON.parse('{"path":"/command/linux/builtin.html","title":"builtin","lang":"zh-CN","frontmatter":{"description":"builtin 执行bash内建命令。 概要 主要用途 用于执行指定的bash内建命令。 builtin命令调用的bash内建命令优先于同名的外部命令及同名的shell函数。 参数 shell-builtin（可选）：要调用的bash内建命令。 arg（可选）：传递给bash内建命令的一到多个参数。 返回值 返回该内建命令执行的返回值，除非传递的不是b...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/builtin.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"builtin"}],["meta",{"property":"og:description","content":"builtin 执行bash内建命令。 概要 主要用途 用于执行指定的bash内建命令。 builtin命令调用的bash内建命令优先于同名的外部命令及同名的shell函数。 参数 shell-builtin（可选）：要调用的bash内建命令。 arg（可选）：传递给bash内建命令的一到多个参数。 返回值 返回该内建命令执行的返回值，除非传递的不是b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"builtin\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"主要用途","slug":"主要用途","link":"#主要用途","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.32,"words":397},"filePathRelative":"command/linux/builtin.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};