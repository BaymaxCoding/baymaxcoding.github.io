import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,b as n}from"./app-DOGW-9XX.js";const r={},t=n(`<h1 id="groupmems" tabindex="-1"><a class="header-anchor" href="#groupmems"><span>groupmems</span></a></h1><p>管理用户主要组的成员</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><code>groupmems</code> 命令允许用户管理他/她自己的组成员列表，而不需要超级用户权限。<code>groupmems</code> 实用程序适用于将其用户配置为以他们自己的名义主组（即来宾/来宾）的系统。</p><p>只有作为管理员的超级用户可以使用 <code>groupmems</code> 来更改其他组的成员资格。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>groupmems <span class="token parameter variable">-a</span> user_name <span class="token operator">|</span> <span class="token parameter variable">-d</span> 用户名 <span class="token operator">|</span> <span class="token punctuation">[</span>-g 用户组名<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a, <span class="token parameter variable">--add</span> user_name <span class="token comment"># 将用户添加到组成员列表。如果 /etc/gshadow 文件存在，并且该组在 /etc/gshadow 文件中没有条目，则将创建一个新条目。</span>

-d, <span class="token parameter variable">--delete</span> user_name
<span class="token comment"># 从组成员列表中删除用户。</span>
<span class="token comment"># 如果 /etc/gshadow 文件存在，用户将从组的成员和管理员列表中删除。</span>
<span class="token comment"># 如果 /etc/gshadow 文件存在，并且该组在 /etc/gshadow 文件中没有条目，则将创建一个新条目。</span>

-g, <span class="token parameter variable">--group</span> group_name <span class="token comment"># 超级用户可以指定要修改的组成员列表。</span>
-l, <span class="token parameter variable">--list</span>             <span class="token comment"># 列出组成员列表。</span>
-p, <span class="token parameter variable">--purge</span>            <span class="token comment"># 从组成员列表中清除所有用户。</span>
<span class="token comment"># 如果 /etc/gshadow 文件存在，并且该组在 /etc/gshadow 文件中没有条目，则将创建一个新条目。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p><code>/etc/login.defs</code> 中的以下配置变量会更改此工具的行为：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>MAX_MEMBERS_PER_GROUP <span class="token punctuation">(</span>number<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每个组条目的最大成员数。 当达到最大值时，在 <code>/etc/group</code> 中启动一个新的组条目（行）（具有相同的名称、相同的密码和相同的 GID）。</p><p>默认值为 0，表示组中的成员数量没有限制。</p><p>此功能（拆分组）允许限制组文件中的行长度。 这有助于确保 NIS 组的行不超过 1024 个字符。</p><p>如果你需要强制执行这样的限制，你可以使用 25。</p><p>注意：并非所有工具都支持拆分组（即使在 Shadow 工具包中）。 除非你真的需要它，否则你不应该使用这个变量。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><p>groupmems 可执行文件应该在模式 2770 中作为用户 root 和组组。 系统管理员可以将用户添加到组中，以允许或禁止他们使用 groupmems 实用程序来管理他们自己的组成员列表。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">groupadd</span> <span class="token parameter variable">-r</span> <span class="token function">groups</span>
<span class="token function">chmod</span> <span class="token number">2770</span> groupmems

<span class="token function">chown</span> root.groups groupmems
groupmems <span class="token parameter variable">-g</span> <span class="token function">groups</span> <span class="token parameter variable">-a</span> gk4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们创建一个新用户和一个新组并验证结果：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">useradd</span> student
<span class="token function">passwd</span> student
<span class="token function">groupadd</span> staff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用户 student 成为组人员的成员：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>groupmems <span class="token parameter variable">-g</span> staff <span class="token parameter variable">-a</span> student
groupmems <span class="token parameter variable">-g</span> staff <span class="token parameter variable">-l</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将用户添加到组：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>groupmems <span class="token parameter variable">-a</span> mike <span class="token parameter variable">-g</span> SUPPORT
groupmems <span class="token parameter variable">--add</span> mike <span class="token parameter variable">-g</span> SUPPORT 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>从组中删除/移除用户：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>groupmems <span class="token parameter variable">-d</span> mike SUPPORT <span class="token parameter variable">-g</span> SUPPORT
groupmems <span class="token parameter variable">--delete</span> mike SUPPORT <span class="token parameter variable">-g</span> SUPPORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更改组名称：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>groupmems <span class="token parameter variable">-g</span> SUPPORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从组中删除用户：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>groupmems <span class="token parameter variable">-p</span> <span class="token parameter variable">-g</span> SUPPORT
groupmems <span class="token parameter variable">--purge</span> <span class="token parameter variable">-g</span> SUPPORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>要列出组的成员：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>groupmems <span class="token parameter variable">-l</span> <span class="token parameter variable">-g</span> SUPPORT
groupmems <span class="token parameter variable">--list</span> <span class="token parameter variable">-g</span> SUPPORT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,34),i=[t];function l(p,d){return e(),s("div",null,i)}const m=a(r,[["render",l],["__file","groupmems.html.vue"]]),u=JSON.parse('{"path":"/command/linux/groupmems.html","title":"groupmems","lang":"zh-CN","frontmatter":{"description":"groupmems 管理用户主要组的成员 补充说明 groupmems 命令允许用户管理他/她自己的组成员列表，而不需要超级用户权限。groupmems 实用程序适用于将其用户配置为以他们自己的名义主组（即来宾/来宾）的系统。 只有作为管理员的超级用户可以使用 groupmems 来更改其他组的成员资格。 语法 选项 配置 /etc/login.def...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/groupmems.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"groupmems"}],["meta",{"property":"og:description","content":"groupmems 管理用户主要组的成员 补充说明 groupmems 命令允许用户管理他/她自己的组成员列表，而不需要超级用户权限。groupmems 实用程序适用于将其用户配置为以他们自己的名义主组（即来宾/来宾）的系统。 只有作为管理员的超级用户可以使用 groupmems 来更改其他组的成员资格。 语法 选项 配置 /etc/login.def..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"groupmems\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.36,"words":708},"filePathRelative":"command/linux/groupmems.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};