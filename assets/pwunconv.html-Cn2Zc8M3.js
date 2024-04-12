import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as s}from"./app-D_HUMAmc.js";const t={},o=s(`<h1 id="pwunconv" tabindex="-1"><a class="header-anchor" href="#pwunconv"><span>pwunconv</span></a></h1><p>用来关闭用户的投影密码</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>pwunconv命令</strong> 与pwconv功能相反，用来关闭用户的投影密码。它会把密码从shadow文件内，重回存到passwd文件里。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pwunconv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pwunconv     <span class="token comment"># 关闭影子密码</span>
<span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token builtin class-name">test</span>     <span class="token comment"># 发现密码已经在passwd文件中了</span>
test:<span class="token variable">$6</span><span class="token variable">$nYOEWamm</span><span class="token variable">$bz07nlv</span>/.RgJufb3FAqJJeULfwybzgxmrWqbk7O4vI0KsT6N.ujrh6dDIUcAJdfjksyuyAFDPIngZeD3cgcf.0:3001:3001::/home/test:/bin/sh

<span class="token function">ls</span> /etc/shadow     <span class="token comment"># 查看影子文件，提示没有这个文件或目录</span>
ls: cannot access /etc/shadow: No such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[o];function i(p,l){return e(),a("div",null,c)}const m=n(t,[["render",i],["__file","pwunconv.html.vue"]]),u=JSON.parse('{"path":"/command/linux/pwunconv.html","title":"pwunconv","lang":"zh-CN","frontmatter":{"description":"pwunconv 用来关闭用户的投影密码 补充说明 pwunconv命令 与pwconv功能相反，用来关闭用户的投影密码。它会把密码从shadow文件内，重回存到passwd文件里。 语法 实例","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/pwunconv.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"pwunconv"}],["meta",{"property":"og:description","content":"pwunconv 用来关闭用户的投影密码 补充说明 pwunconv命令 与pwconv功能相反，用来关闭用户的投影密码。它会把密码从shadow文件内，重回存到passwd文件里。 语法 实例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pwunconv\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":0.4,"words":120},"filePathRelative":"command/linux/pwunconv.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};