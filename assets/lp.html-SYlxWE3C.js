import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as s}from"./app-DOGW-9XX.js";const l={},t=s(`<h1 id="lp" tabindex="-1"><a class="header-anchor" href="#lp"><span>lp</span></a></h1><p>打印文件或修改排队的打印任务</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>lp命令</strong> 用于打印文件，或者修改排队的打印任务。与lpr命令类似，lp命令既支持文件输入也支持标准输入。它与lpr的不同之处在于它有一个不同（稍微复杂点）的参数选项设置。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lp<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-E：与打印服务器连接时强制使用加密；
-U：指定连接打印服务器时使用的用户名；
-d：指定接收打印任务的目标打印机；
-i：指定一个存在的打印任务号；
-m：打印完成时发送E-mail；
-n：指定打印的份数；
-t：指定打印任务的名称；
-H：指定打印任务开始的时间；
-P：指定需要打印的页码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件：需打印的文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>要在连接在设备dlp0上的打印机lp0上打印文件<code>/etc/motd</code>，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lp /etc/motd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要使用文件的一个副本打印<code>/etc/motd</code>文件的30个副本，并且要用邮件通知用户作业完成，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lp <span class="token parameter variable">-c</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-n30</span> <span class="token parameter variable">-dlp0:lpd0</span> /etc/motd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要使用后端标志-f和-a并带上作业标题blah打印<code>/etc/motd</code>文件，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lp <span class="token parameter variable">-t</span> <span class="token string">&quot;blah&quot;</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-o</span> <span class="token parameter variable">-a</span> /etc/motd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要排队MyFile文件并返回作业编号，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lp myfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要排队MyFile文件并禁止作业编号，请输入：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lp <span class="token parameter variable">-s</span> myfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>退出状态</strong></p><p>该命令返回以下退出值：</p><ul><li>0：所有输入文件成功处理。</li><li><blockquote><p>0：没有输出设备可用，或者出现一个错误。</p></blockquote></li></ul>`,24),i=[t];function d(r,p){return a(),n("div",null,i)}const m=e(l,[["render",d],["__file","lp.html.vue"]]),h=JSON.parse('{"path":"/command/linux/lp.html","title":"lp","lang":"zh-CN","frontmatter":{"description":"lp 打印文件或修改排队的打印任务 补充说明 lp命令 用于打印文件，或者修改排队的打印任务。与lpr命令类似，lp命令既支持文件输入也支持标准输入。它与lpr的不同之处在于它有一个不同（稍微复杂点）的参数选项设置。 语法 选项 参数 文件：需打印的文件。 实例 要在连接在设备dlp0上的打印机lp0上打印文件/etc/motd，请输入： 要使用文件的...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/lp.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"lp"}],["meta",{"property":"og:description","content":"lp 打印文件或修改排队的打印任务 补充说明 lp命令 用于打印文件，或者修改排队的打印任务。与lpr命令类似，lp命令既支持文件输入也支持标准输入。它与lpr的不同之处在于它有一个不同（稍微复杂点）的参数选项设置。 语法 选项 参数 文件：需打印的文件。 实例 要在连接在设备dlp0上的打印机lp0上打印文件/etc/motd，请输入： 要使用文件的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lp\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"command/linux/lp.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,h as data};