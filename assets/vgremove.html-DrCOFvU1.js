import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as n}from"./app-DOGW-9XX.js";const o={},s=n(`<h1 id="vgremove" tabindex="-1"><a class="header-anchor" href="#vgremove"><span>vgremove</span></a></h1><p>用于用户删除LVM卷组</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>vgremove命令</strong> 用于用户删除LVM卷组。当要删除的卷组上已经创建了逻辑卷时，vgremove命令需要进行确认删除，防止误删除数据。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vgremove<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-f：强制删除。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>卷组：指定要删除的卷组名称。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用vgremove命令删除LVM卷组&quot;vg1000&quot;。在命令行中输入下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgremove vg1000    #删除卷组&quot;vg1000&quot;</span>
Volume group <span class="token string">&quot;vg1000&quot;</span> successfully removed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[s];function r(l,c){return a(),t("div",null,i)}const p=e(o,[["render",r],["__file","vgremove.html.vue"]]),v=JSON.parse('{"path":"/command/linux/vgremove.html","title":"vgremove","lang":"zh-CN","frontmatter":{"description":"vgremove 用于用户删除LVM卷组 补充说明 vgremove命令 用于用户删除LVM卷组。当要删除的卷组上已经创建了逻辑卷时，vgremove命令需要进行确认删除，防止误删除数据。 语法 选项 参数 卷组：指定要删除的卷组名称。 实例 使用vgremove命令删除LVM卷组\\"vg1000\\"。在命令行中输入下面的命令：","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/vgremove.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"vgremove"}],["meta",{"property":"og:description","content":"vgremove 用于用户删除LVM卷组 补充说明 vgremove命令 用于用户删除LVM卷组。当要删除的卷组上已经创建了逻辑卷时，vgremove命令需要进行确认删除，防止误删除数据。 语法 选项 参数 卷组：指定要删除的卷组名称。 实例 使用vgremove命令删除LVM卷组\\"vg1000\\"。在命令行中输入下面的命令："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vgremove\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.43,"words":130},"filePathRelative":"command/linux/vgremove.md","localizedDate":"2024年4月12日","autoDesc":true}');export{p as comp,v as data};