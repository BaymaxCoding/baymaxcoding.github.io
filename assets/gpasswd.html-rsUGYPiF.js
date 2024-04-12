import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,b as n}from"./app-DOGW-9XX.js";const t={},i=n(`<h1 id="gpasswd" tabindex="-1"><a class="header-anchor" href="#gpasswd"><span>gpasswd</span></a></h1><p>Linux下工作组文件的管理工具</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>gpasswd命令</strong> 是Linux下工作组文件<code>/etc/group</code>和<code>/etc/gshadow</code>管理工具。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gpasswd<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a：添加用户到组；
-d：从组删除用户；
-A：指定管理员；
-M：指定组成员和-A的用途差不多；
-r：删除密码；
-R：限制用户登入组，只有组中的成员才可以用newgrp加入该组。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>组：指定要管理的工作组。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>如系统有个peter账户，该账户本身不是groupname群组的成员，使用newgrp需要输入密码即可。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gpasswd groupname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>让使用者暂时加入成为该组成员，之后peter建立的文件group也会是groupname。所以该方式可以暂时让peter建立文件时使用其他的组，而不是peter本身所在的组。</p><p>所以使用<code>gpasswd groupname</code>设定密码，就是让知道该群组密码的人可以暂时切换具备groupname群组功能的。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gpasswd <span class="token parameter variable">-A</span> peter <span class="token function">users</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样peter就是users群组的管理员，就可以执行下面的操作:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gpasswd <span class="token parameter variable">-a</span> mary <span class="token function">users</span>
gpasswd <span class="token parameter variable">-a</span> allen <span class="token function">users</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：添加用户到某一个组 可以使用<code>usermod -G group_name user_name</code>这个命令可以添加一个用户到指定的组，但是以前添加的组就会清空掉。</p><p>所以想要添加一个用户到一个组，同时保留以前添加的组时，请使用gpasswd这个命令来添加操作用户：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gpasswd <span class="token parameter variable">-a</span> user_name group_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),d=[i];function r(p,l){return a(),s("div",null,d)}const u=e(t,[["render",r],["__file","gpasswd.html.vue"]]),m=JSON.parse('{"path":"/command/linux/gpasswd.html","title":"gpasswd","lang":"zh-CN","frontmatter":{"description":"gpasswd Linux下工作组文件的管理工具 补充说明 gpasswd命令 是Linux下工作组文件/etc/group和/etc/gshadow管理工具。 语法 选项 参数 组：指定要管理的工作组。 实例 如系统有个peter账户，该账户本身不是groupname群组的成员，使用newgrp需要输入密码即可。 让使用者暂时加入成为该组成员，之后p...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/gpasswd.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"gpasswd"}],["meta",{"property":"og:description","content":"gpasswd Linux下工作组文件的管理工具 补充说明 gpasswd命令 是Linux下工作组文件/etc/group和/etc/gshadow管理工具。 语法 选项 参数 组：指定要管理的工作组。 实例 如系统有个peter账户，该账户本身不是groupname群组的成员，使用newgrp需要输入密码即可。 让使用者暂时加入成为该组成员，之后p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gpasswd\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"command/linux/gpasswd.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};