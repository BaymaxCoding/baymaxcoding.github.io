import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,e as s}from"./app-D_HUMAmc.js";const i={},n=s(`<h1 id="iptables-restore" tabindex="-1"><a class="header-anchor" href="#iptables-restore"><span>iptables-restore</span></a></h1><p>还原iptables表的配置</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>iptables-restore命令</strong> 用来还原iptables-save命令所备份的iptables配置。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>iptables-restore<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-c：指定在还原iptables表时候，还原当前的数据包计数器和字节计数器的值；
-t：指定要还原表的名称。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>iptables-restore <span class="token operator">&lt;</span> iptables.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>iptables.bak是iptables-save命令所备份的文件。</p>`,11),r=[n];function l(o,p){return a(),t("div",null,r)}const h=e(i,[["render",l],["__file","iptables-restore.html.vue"]]),b=JSON.parse('{"path":"/command/linux/iptables-restore.html","title":"iptables-restore","lang":"zh-CN","frontmatter":{"description":"iptables-restore 还原iptables表的配置 补充说明 iptables-restore命令 用来还原iptables-save命令所备份的iptables配置。 语法 选项 实例 iptables.bak是iptables-save命令所备份的文件。","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/iptables-restore.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"iptables-restore"}],["meta",{"property":"og:description","content":"iptables-restore 还原iptables表的配置 补充说明 iptables-restore命令 用来还原iptables-save命令所备份的iptables配置。 语法 选项 实例 iptables.bak是iptables-save命令所备份的文件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"iptables-restore\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.33,"words":99},"filePathRelative":"command/linux/iptables-restore.md","localizedDate":"2024年4月12日","autoDesc":true}');export{h as comp,b as data};