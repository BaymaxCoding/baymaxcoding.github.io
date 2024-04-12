import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,b as e}from"./app-D3p8wuGf.js";const t={},i=e(`<h1 id="ipcalc" tabindex="-1"><a class="header-anchor" href="#ipcalc"><span>ipcalc</span></a></h1><p>简单的IP地址计算器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>ipcalc命令</strong> 是一个简单的ip地址计算器，可以完成简单的IP地址计算任务。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ipcalc<span class="token punctuation">(</span>选项<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-b：由给定的IP地址和网络掩码计算出广播地址；
-h：显示给定UP地址所对应的主机名；
-m：由给定的IP地址计算器网络掩码；
-p：显示给定的掩码或IP地址的前缀；
-n：由给定的IP地址和网络掩码计算网络地址；
-s：安静模式；
--help：显示帮助信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ipcalc -p 192.168.2.1 255.255.255.0</span>
<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token number">24</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ipcalc -n 192.168.2.1 255.255.255.0</span>
<span class="token assign-left variable">NETWORK</span><span class="token operator">=</span><span class="token number">192.168</span>.2.0

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ipcalc -h 127.0.0.1</span>
<span class="token assign-left variable">hostname</span><span class="token operator">=</span>localhost.localdomain

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ipcalc -m 192.168.2.1</span>
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ipcalc -pnbm 192.168.2.1 255.255.255.0</span>
<span class="token assign-left variable">NETMASK</span><span class="token operator">=</span><span class="token number">255.255</span>.255.0
<span class="token assign-left variable">PREFIX</span><span class="token operator">=</span><span class="token number">24</span>
<span class="token assign-left variable">BROADCAST</span><span class="token operator">=</span><span class="token number">192.168</span>.2.255
<span class="token assign-left variable">NETWORK</span><span class="token operator">=</span><span class="token number">192.168</span>.2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[i];function c(o,p){return n(),s("div",null,l)}const m=a(t,[["render",c],["__file","ipcalc.html.vue"]]),u=JSON.parse('{"path":"/command/linux/ipcalc.html","title":"ipcalc","lang":"zh-CN","frontmatter":{"description":"ipcalc 简单的IP地址计算器 补充说明 ipcalc命令 是一个简单的ip地址计算器，可以完成简单的IP地址计算任务。 语法 选项 实例","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/ipcalc.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"ipcalc"}],["meta",{"property":"og:description","content":"ipcalc 简单的IP地址计算器 补充说明 ipcalc命令 是一个简单的ip地址计算器，可以完成简单的IP地址计算任务。 语法 选项 实例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ipcalc\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.63,"words":190},"filePathRelative":"command/linux/ipcalc.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};