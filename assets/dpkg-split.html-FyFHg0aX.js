import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as t}from"./app-DOGW-9XX.js";const s={},i=t(`<h1 id="dpkg-split" tabindex="-1"><a class="header-anchor" href="#dpkg-split"><span>dpkg-split</span></a></h1><p>Debian Linux中将大软件包分割成小包</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>dpkg-split命令</strong> 用来将Debian Linux中的大软件包分割成小软件包，它还能够将已分割的文件进行合并。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dpkg-split<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-S：设置分割后的每个小文件最大尺寸（以字节为单位）；
-s：分割软件包；
-j<span class="token operator">&lt;</span>分块文件<span class="token operator">&gt;</span><span class="token operator">&lt;</span>分块文件<span class="token operator">&gt;</span>：把各个分块合并到一起；
-I<span class="token operator">&lt;</span>分块文件<span class="token operator">&gt;</span>：显示分块文件的相关信息；
-l：列出不匹配的部分；
-dscard<span class="token operator">&lt;</span>文件名<span class="token operator">&gt;</span>：忽略不匹配的部分。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>软件包：指定需要分割的“.deb”软件包。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>把foo.deb分割出N个大小为460KB的文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dpkg-split <span class="token parameter variable">-s</span> foo.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>合并分割文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dpkg-split <span class="token parameter variable">-j</span> <span class="token string">&quot;foo*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),l=[i];function p(d,o){return a(),n("div",null,l)}const h=e(s,[["render",p],["__file","dpkg-split.html.vue"]]),m=JSON.parse('{"path":"/command/linux/dpkg-split.html","title":"dpkg-split","lang":"zh-CN","frontmatter":{"description":"dpkg-split Debian Linux中将大软件包分割成小包 补充说明 dpkg-split命令 用来将Debian Linux中的大软件包分割成小软件包，它还能够将已分割的文件进行合并。 语法 选项 参数 软件包：指定需要分割的“.deb”软件包。 实例 把foo.deb分割出N个大小为460KB的文件： 合并分割文件：","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/dpkg-split.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"dpkg-split"}],["meta",{"property":"og:description","content":"dpkg-split Debian Linux中将大软件包分割成小包 补充说明 dpkg-split命令 用来将Debian Linux中的大软件包分割成小软件包，它还能够将已分割的文件进行合并。 语法 选项 参数 软件包：指定需要分割的“.deb”软件包。 实例 把foo.deb分割出N个大小为460KB的文件： 合并分割文件："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dpkg-split\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"command/linux/dpkg-split.md","localizedDate":"2024年4月12日","autoDesc":true}');export{h as comp,m as data};