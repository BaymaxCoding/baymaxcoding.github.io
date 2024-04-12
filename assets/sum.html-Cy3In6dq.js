import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as t}from"./app-D3p8wuGf.js";const s={},i=t(`<h1 id="sum" tabindex="-1"><a class="header-anchor" href="#sum"><span>sum</span></a></h1><p>计算文件的校验码和显示块数</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>sum命令</strong> 用于计算并显示指定文件的校验和与文件所占用的磁盘块数。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sum<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-r：使用BSD的校验和算法，块大小为1k；
-s：使用system V的校验和算法，块大小为512字节。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件列表：需要计算和与磁盘块数的文件列表。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>计算文件校验码：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sum insert.sql</span>
00827    <span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[i];function o(r,c){return a(),n("div",null,l)}const m=e(s,[["render",o],["__file","sum.html.vue"]]),u=JSON.parse('{"path":"/command/linux/sum.html","title":"sum","lang":"zh-CN","frontmatter":{"description":"sum 计算文件的校验码和显示块数 补充说明 sum命令 用于计算并显示指定文件的校验和与文件所占用的磁盘块数。 语法 选项 参数 文件列表：需要计算和与磁盘块数的文件列表。 实例 计算文件校验码：","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/sum.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"sum"}],["meta",{"property":"og:description","content":"sum 计算文件的校验码和显示块数 补充说明 sum命令 用于计算并显示指定文件的校验和与文件所占用的磁盘块数。 语法 选项 参数 文件列表：需要计算和与磁盘块数的文件列表。 实例 计算文件校验码："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sum\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.42,"words":127},"filePathRelative":"command/linux/sum.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};