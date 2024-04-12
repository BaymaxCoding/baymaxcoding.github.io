import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,e as s}from"./app-D_HUMAmc.js";const t={},i=s(`<h1 id="vgdisplay" tabindex="-1"><a class="header-anchor" href="#vgdisplay"><span>vgdisplay</span></a></h1><p>显示LVM卷组的信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>vgdisplay命令</strong> 用于显示LVM卷组的信息。如果不指定&quot;卷组&quot;参数，则分别显示所有卷组的属性。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vgdisplay<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-A：仅显示活动卷组的属性；
-s：使用短格式输出的信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>卷组：要显示属性的卷组名称。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用vgdisplay命令显示存在的卷组&quot;vg1000&quot;的属性。在命令行中输入下面的命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgdisplay vg1000     #显示卷组&quot;vg1000&quot;的属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出信息如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>  --- Volume group ---  
  VG Name               vg1000  
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>省略部分输出内容<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>  
  <span class="token function">free</span>  PE / Size       <span class="token number">50</span> / <span class="token number">200.00</span> MB  
  VG UUID  ICprwg-ZmhA-JKYF-WYuy-jNHa-AyCN-ZS5F7B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[i];function d(o,p){return e(),n("div",null,l)}const u=a(t,[["render",d],["__file","vgdisplay.html.vue"]]),h=JSON.parse('{"path":"/command/linux/vgdisplay.html","title":"vgdisplay","lang":"zh-CN","frontmatter":{"description":"vgdisplay 显示LVM卷组的信息 补充说明 vgdisplay命令 用于显示LVM卷组的信息。如果不指定\\"卷组\\"参数，则分别显示所有卷组的属性。 语法 选项 参数 卷组：要显示属性的卷组名称。 实例 使用vgdisplay命令显示存在的卷组\\"vg1000\\"的属性。在命令行中输入下面的命令： 输出信息如下：","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/vgdisplay.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"vgdisplay"}],["meta",{"property":"og:description","content":"vgdisplay 显示LVM卷组的信息 补充说明 vgdisplay命令 用于显示LVM卷组的信息。如果不指定\\"卷组\\"参数，则分别显示所有卷组的属性。 语法 选项 参数 卷组：要显示属性的卷组名称。 实例 使用vgdisplay命令显示存在的卷组\\"vg1000\\"的属性。在命令行中输入下面的命令： 输出信息如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vgdisplay\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.58,"words":175},"filePathRelative":"command/linux/vgdisplay.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,h as data};