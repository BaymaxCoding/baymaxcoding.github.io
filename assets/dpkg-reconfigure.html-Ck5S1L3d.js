import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,e as i}from"./app-D_HUMAmc.js";const t={},r=i(`<h1 id="dpkg-reconfigure" tabindex="-1"><a class="header-anchor" href="#dpkg-reconfigure"><span>dpkg-reconfigure</span></a></h1><p>Debian Linux中重新配制一个已经安装的软件包</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>dpkg-reconfigure命令</strong> 是Debian Linux中重新配置已经安装过的软件包，可以将一个或者多个已安装的软件包传递给此指令，它将询问软件初次安装后的配置问题。</p><p>当用户需要再次对软件包配置的时候，可以使用dpkg-reconfigure命令来对指定的软件包进行配置。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dpkg-reconfigure<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a：重新配置所有的软件包；
-u或--unseen-only：仅显示未提过的问题；
--default-priority：使用默认优先级，而非“低”级；
--force：强制执行操作，需谨慎使用此选项；
--no-reload：不要轻易的重装模板（使用时请慎重考虑）；
-f或--frontend：指定 debconf 前端界面；
-p或--priority：指定要显示的问题的最优先级；
--terse：开启简要模式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>软件包名：需要重新配置的已安装的软件包。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>用于配置语言：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg-reconfigure locales
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),s=[r];function d(o,c){return n(),a("div",null,s)}const u=e(t,[["render",d],["__file","dpkg-reconfigure.html.vue"]]),g=JSON.parse('{"path":"/command/linux/dpkg-reconfigure.html","title":"dpkg-reconfigure","lang":"zh-CN","frontmatter":{"description":"dpkg-reconfigure Debian Linux中重新配制一个已经安装的软件包 补充说明 dpkg-reconfigure命令 是Debian Linux中重新配置已经安装过的软件包，可以将一个或者多个已安装的软件包传递给此指令，它将询问软件初次安装后的配置问题。 当用户需要再次对软件包配置的时候，可以使用dpkg-reconfigure命令...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/dpkg-reconfigure.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"dpkg-reconfigure"}],["meta",{"property":"og:description","content":"dpkg-reconfigure Debian Linux中重新配制一个已经安装的软件包 补充说明 dpkg-reconfigure命令 是Debian Linux中重新配置已经安装过的软件包，可以将一个或者多个已安装的软件包传递给此指令，它将询问软件初次安装后的配置问题。 当用户需要再次对软件包配置的时候，可以使用dpkg-reconfigure命令..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dpkg-reconfigure\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.89,"words":267},"filePathRelative":"command/linux/dpkg-reconfigure.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,g as data};