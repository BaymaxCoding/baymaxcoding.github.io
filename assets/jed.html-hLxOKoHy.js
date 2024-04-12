import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-D_HUMAmc.js";const t={},i=e(`<h1 id="jed" tabindex="-1"><a class="header-anchor" href="#jed"><span>jed</span></a></h1><p>主要用于编辑代码的编辑器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>jed命令</strong> 是由Slang所开发，其主要用用途是编辑程序的源代码。它支持彩色语法加亮显示，可以模拟emacs，EDT，wordstar和Brief编辑器。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>jed<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-2：显示上下两个编辑区；
-batch：以批处理模式来执行；
-f<span class="token operator">&lt;</span>函数<span class="token operator">&gt;</span>：执行Slang函数；
-g<span class="token operator">&lt;</span>行数<span class="token operator">&gt;</span>：移到缓冲区中指定的行数；
-i<span class="token operator">&lt;</span>文件<span class="token operator">&gt;</span>：将指定的文件载入缓冲区；
-n：不要载入jed.rc配置文件；
-s<span class="token operator">&lt;</span>字符串<span class="token operator">&gt;</span>：查找并移到指定的字符串。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件：指定待编辑的文件列表。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>以上下两个编辑区的方式，开启 mysource.c 原始代码文件。若要切换编辑区，可利用稍后介绍的命令，开启操作命令，开启功能表后，按 3 ，再按 2 ，即可切换编辑区：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>jed <span class="token parameter variable">-2</span> mysource.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>操作</strong></p><p>有些Emacs的组合键和jed菜单组合键冲突例如Alt+f在Emacs中应该是“前进一个单词”，而在jed中则是“文件菜单” 想使用Emacs风格的组合键的话，编辑<code>/usr/share/jed/lib/menus.slc</code>找到如下段落：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>unsetsetkey <span class="token punctuation">(</span><span class="token string">&quot;selectmenubar&quot;</span>, <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>m&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
unsetsetkey <span class="token punctuation">(</span><span class="token string">&quot;@<span class="token entity" title="\\e">\\e</span>mF&quot;</span>, <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>f&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
unsetsetkey <span class="token punctuation">(</span><span class="token string">&quot;@<span class="token entity" title="\\e">\\e</span>mE&quot;</span>, <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>e&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
unsetsetkey <span class="token punctuation">(</span><span class="token string">&quot;@<span class="token entity" title="\\e">\\e</span>mo&quot;</span>, <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>o&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
% Mode menu unsetsetkey <span class="token punctuation">(</span><span class="token string">&quot;@<span class="token entity" title="\\e">\\e</span>mS&quot;</span>, <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>s&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
unsetsetkey <span class="token punctuation">(</span><span class="token string">&quot;@<span class="token entity" title="\\e">\\e</span>mB&quot;</span>, <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
unsetsetkey <span class="token punctuation">(</span><span class="token string">&quot;@<span class="token entity" title="\\e">\\e</span>mi&quot;</span>, <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>i&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
unsetsetkey <span class="token punctuation">(</span><span class="token string">&quot;@<span class="token entity" title="\\e">\\e</span>mH&quot;</span>, <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>h&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
unset_setkey <span class="token punctuation">(</span><span class="token string">&quot;@<span class="token entity" title="\\e">\\e</span>my&quot;</span>, <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>y&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以根据自己的需要修改，也可以简单的注释掉；使用菜单可以用F10键。</p><p>由于Jed可模拟多种编辑器，其各自按键指令也有所不同。这里以模拟 Emacs 为例，说明在编辑器中的操作方法。</p><p><strong>文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/usr/share/jed/lib/*.sl 这是默认的运行jed slang的文件。
/usr/share/jed/lib/site.sl 这是默认的启动文件。
/etc/jed.rc 这是全局系统配置文件。
~/.jedrc 这是用户配置文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[i];function p(l,c){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","jed.html.vue"]]),m=JSON.parse('{"path":"/command/linux/jed.html","title":"jed","lang":"zh-CN","frontmatter":{"description":"jed 主要用于编辑代码的编辑器 补充说明 jed命令 是由Slang所开发，其主要用用途是编辑程序的源代码。它支持彩色语法加亮显示，可以模拟emacs，EDT，wordstar和Brief编辑器。 语法 选项 参数 文件：指定待编辑的文件列表。 实例 以上下两个编辑区的方式，开启 mysource.c 原始代码文件。若要切换编辑区，可利用稍后介绍的命...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/jed.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"jed"}],["meta",{"property":"og:description","content":"jed 主要用于编辑代码的编辑器 补充说明 jed命令 是由Slang所开发，其主要用用途是编辑程序的源代码。它支持彩色语法加亮显示，可以模拟emacs，EDT，wordstar和Brief编辑器。 语法 选项 参数 文件：指定待编辑的文件列表。 实例 以上下两个编辑区的方式，开启 mysource.c 原始代码文件。若要切换编辑区，可利用稍后介绍的命..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jed\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.53,"words":459},"filePathRelative":"command/linux/jed.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};