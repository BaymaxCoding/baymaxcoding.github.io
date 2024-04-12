import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as e}from"./app-DOGW-9XX.js";const l={},t=e(`<h1 id="sh" tabindex="-1"><a class="header-anchor" href="#sh"><span>sh</span></a></h1><p>shell命令解释器</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>sh命令</strong> 是shell命令语言解释器，执行命令从标准输入读取或从一个文件中读取。通过用户输入命令，和内核进行沟通！Bourne Again Shell （即bash）是自由软件基金会（GNU）开发的一个Shell，它是Linux系统中一个默认的Shell。Bash不但与Bourne Shell兼容，还继承了C Shell、Korn Shell等优点。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">bash</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span> string：命令从-c后的字符串读取。
-i：实现脚本交互。
-n：进行shell脚本的语法检查。
-x：实现shell脚本逐条语句的跟踪。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用-x选项跟踪脚本调试shell脚本，能打印出所执行的每一行命令以及当前状态：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@AY1307311912260196fcZ satools<span class="token punctuation">]</span><span class="token comment"># sh -x check_ssh_login.sh</span>
+ <span class="token assign-left variable">DEFINE</span><span class="token operator">=</span><span class="token number">30</span>
+ <span class="token function">cat</span> /var/log/secure
+ <span class="token function">awk</span> <span class="token string">&#39;/Failed/ {++ip[$(NF-3)]} END {for (i in ip) print i&quot;=&quot;ip[i]}&#39;</span>
++ <span class="token function">cat</span> /root/satools/black.txt
+ <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&#39;\`cat /root/satools/black.txt\`&#39;</span>
++ <span class="token builtin class-name">echo</span> <span class="token assign-left variable">121.42.0.16</span><span class="token operator">=</span><span class="token number">1427</span>
++ <span class="token function">awk</span> <span class="token parameter variable">-F</span><span class="token operator">=</span> <span class="token string">&#39;{print $1}&#39;</span>
+ <span class="token assign-left variable">IP</span><span class="token operator">=</span><span class="token number">121.42</span>.0.16
++ <span class="token builtin class-name">echo</span> <span class="token assign-left variable">121.42.0.16</span><span class="token operator">=</span><span class="token number">1427</span>
++ <span class="token function">awk</span> <span class="token parameter variable">-F</span><span class="token operator">=</span> <span class="token string">&#39;{print $2}&#39;</span>
+ <span class="token assign-left variable">NUM</span><span class="token operator">=</span><span class="token number">1427</span>
+ <span class="token string">&#39;[&#39;</span> <span class="token number">1427</span> <span class="token parameter variable">-gt</span> <span class="token number">30</span> <span class="token string">&#39;]&#39;</span>
+ <span class="token function">grep</span> <span class="token number">121.42</span>.0.16 /etc/hosts.deny
+ <span class="token string">&#39;[&#39;</span> <span class="token number">1</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token string">&#39;]&#39;</span>
+ <span class="token builtin class-name">echo</span> sshd:121.42.0.16
+ <span class="token builtin class-name">echo</span> vsftpd:121.42.0.16
+ <span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">&#39;\`cat /root/satools/black.txt\`&#39;</span>
++ <span class="token builtin class-name">echo</span> <span class="token assign-left variable">121.42.0.72</span><span class="token operator">=</span><span class="token number">276</span>
++ <span class="token function">awk</span> <span class="token parameter variable">-F</span><span class="token operator">=</span> <span class="token string">&#39;{print $1}&#39;</span>
+ <span class="token assign-left variable">IP</span><span class="token operator">=</span><span class="token number">121.42</span>.0.72
++ <span class="token function">awk</span> <span class="token parameter variable">-F</span><span class="token operator">=</span> <span class="token string">&#39;{print $2}&#39;</span>
++ <span class="token builtin class-name">echo</span> <span class="token assign-left variable">121.42.0.72</span><span class="token operator">=</span><span class="token number">276</span>
+ <span class="token assign-left variable">NUM</span><span class="token operator">=</span><span class="token number">276</span>
+ <span class="token string">&#39;[&#39;</span> <span class="token number">276</span> <span class="token parameter variable">-gt</span> <span class="token number">30</span> <span class="token string">&#39;]&#39;</span>
+ <span class="token function">grep</span> <span class="token number">121.42</span>.0.72 /etc/hosts.deny
+ <span class="token string">&#39;[&#39;</span> <span class="token number">1</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token string">&#39;]&#39;</span>
+ <span class="token builtin class-name">echo</span> sshd:121.42.0.72
+ <span class="token builtin class-name">echo</span> vsftpd:121.42.0.72
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),i=[t];function p(o,c){return n(),a("div",null,i)}const u=s(l,[["render",p],["__file","sh.html.vue"]]),m=JSON.parse('{"path":"/command/linux/sh.html","title":"sh","lang":"zh-CN","frontmatter":{"description":"sh shell命令解释器 补充说明 sh命令 是shell命令语言解释器，执行命令从标准输入读取或从一个文件中读取。通过用户输入命令，和内核进行沟通！Bourne Again Shell （即bash）是自由软件基金会（GNU）开发的一个Shell，它是Linux系统中一个默认的Shell。Bash不但与Bourne Shell兼容，还继承了C Sh...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/sh.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"sh"}],["meta",{"property":"og:description","content":"sh shell命令解释器 补充说明 sh命令 是shell命令语言解释器，执行命令从标准输入读取或从一个文件中读取。通过用户输入命令，和内核进行沟通！Bourne Again Shell （即bash）是自由软件基金会（GNU）开发的一个Shell，它是Linux系统中一个默认的Shell。Bash不但与Bourne Shell兼容，还继承了C Sh..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sh\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1,"words":299},"filePathRelative":"command/linux/sh.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};