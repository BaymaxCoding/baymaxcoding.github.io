import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,b as e}from"./app-DOGW-9XX.js";const o={},t=e(`<h1 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo"><span>sudo</span></a></h1><p>以其他身份来执行命令</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>sudo命令</strong> 用来以其他身份来执行命令，预设的身份为root。在<code>/etc/sudoers</code>中设置了可执行sudo指令的用户。若其未经授权的用户企图使用sudo，则会发出警告的邮件给管理员。用户使用sudo时，必须先输入密码，之后有5分钟的有效期限，超过期限则必须重新输入密码。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sudo<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-b：在后台执行指令；
-E：继承当前环境变量
-h：显示帮助；
-H：将<span class="token environment constant">HOME</span>环境变量设为新身份的<span class="token environment constant">HOME</span>环境变量；
-k：结束密码的有效期限，也就是下次再执行sudo时便需要输入密码；。
-l：列出目前用户可执行与无法执行的指令；
-p：改变询问密码的提示符号；
-s<span class="token operator">&lt;</span>shell<span class="token operator">&gt;</span>：执行指定的shell；
-u<span class="token operator">&lt;</span>用户<span class="token operator">&gt;</span>：以指定的用户作为新的身份。若不加上此参数，则预设以root作为新的身份；
-v：延长密码有效期限5分钟；
<span class="token parameter variable">-V</span> ：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>指令：需要运行的指令和对应的参数。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">su</span> -
<span class="token comment"># env | grep -E &#39;(HOME|SHELL|USER|LOGNAME|^PATH|PWD|TEST_ETC|TEST_ZSH|TEST_PRO|TEST_BASH|TEST_HOME|SUDO)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令相当于使用root超级用户重新登录一次shell，只不过密码是使用的当前用户的密码。而且重要是，该命令会 <strong>重新加载/etc/profile文件以及/etc/bashrc文件等系统配置文件，并且还会重新加载root用户的$SHELL环境变量所对应的配置文件</strong> ，比如：root超级用户的$SHELL是/bin/bash，则会加载/root/.bashrc等配置。如果是/bin/zsh，则会加载/root/.zshrc等配置，执行后是完全的root环境。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token parameter variable">-i</span>
<span class="token comment"># env | grep -E &#39;(HOME|SHELL|USER|LOGNAME|^PATH|PWD|TEST_ETC|TEST_ZSH|TEST_PRO|TEST_BASH|TEST_HOME|SUDO)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令基本与 <code>sudo su -</code> 相同，执行后也是root超级用户的环境，只不过是多了一些当前用户的信息。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token parameter variable">-s</span>
<span class="token comment"># env|grep -E &#39;(HOME|SHELL|USER|LOGNAME|^PATH|PWD|TEST_ETC|TEST_ZSH|TEST_PRO|TEST_BASH|TEST_HOME|SUDO)&#39;  --color</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令相当于 <strong>以当前用户的$SHELL开启了一个root超级用户的no-login的shell，不会加载/etc/profile等系统配置</strong> 。所以/etc/profile文件中定义的TEST_ETC环境变量就看不到了，但是会<strong>加载root用户对应的配置文件</strong>，比如root用户的$SHELL是/bin/zsh，那么会加载/root/.zshrc配置文件，执行完后，不会切换当前用户的目录。</p><p>配置sudo必须通过编辑<code>/etc/sudoers</code>文件，而且只有超级用户才可以修改它，还必须使用visudo编辑。之所以使用visudo有两个原因，一是它能够防止两个用户同时修改它；二是它也能进行有限的语法检查。所以，即使只有你一个超级用户，你也最好用visudo来检查一下语法。</p><p>visudo默认的是在vi里打开配置文件，用vi来修改文件。我们可以在编译时修改这个默认项。visudo不会擅自保存带有语法错误的配置文件，它会提示你出现的问题，并询问该如何处理，就像：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> sudoers file: syntax error, line <span class="token number">22</span> <span class="token operator">&lt;&lt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时我们有三种选择：键入“e”是重新编辑，键入“x”是不保存退出，键入“Q”是退出并保存。如果真选择Q，那么sudo将不会再运行，直到错误被纠正。</p><p>现在，我们一起来看一下神秘的配置文件，学一下如何编写它。让我们从一个简单的例子开始：让用户Foobar可以通过sudo执行所有root可执行的命令。以root身份用visudo打开配置文件，可以看到类似下面几行：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Runas alias specification</span>
<span class="token comment"># User privilege specificationroot    ALL=(ALL)ALL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们一看就明白个差不多了，root有所有权限，只要仿照现有root的例子就行，我们在下面加一行（最好用tab作为空白）：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>foobar <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL<span class="token punctuation">)</span>    ALL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保存退出后，切换到foobar用户，我们用它的身份执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>foobar@localhost ~<span class="token punctuation">]</span>$ <span class="token function">ls</span> /root
ls: /root: 权限不够

<span class="token punctuation">[</span>foobar@localhost ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">ls</span> /root
PassWord:
anaconda-ks.cfg Desktop install.log install.log.syslog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，我们限制一下foobar的权利，不让他为所欲为。比如我们只想让他像root那样使用ls和ifconfig，把那一行改为：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>foobar <span class="token assign-left variable">localhost</span><span class="token operator">=</span>    /sbin/ifconfig,   /bin/ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再来执行命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>foobar@localhost ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">head</span> <span class="token parameter variable">-5</span> /etc/shadow
Password:
Sorry, user foobar is not allowed to execute <span class="token string">&#39;/usr/bin/head -5 /etc/shadow&#39;</span> as root on localhost.localdomain.

<span class="token punctuation">[</span>foobar@localhost ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> /sbin/ifconfigeth0      Linkencap:Ethernet HWaddr 00:14:85:EC:E9:9B<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在让我们来看一下那三个ALL到底是什么意思。第一个ALL是指网络中的主机，我们后面把它改成了主机名，它指明foobar可以在此主机上执行后面的命令。第二个括号里的ALL是指目标用户，也就是以谁的身份去执行命令。最后一个ALL当然就是指命令名了。例如，我们想让foobar用户在linux主机上以jimmy或rene的身份执行kill命令，这样编写配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>foobar    <span class="token assign-left variable">linux</span><span class="token operator">=</span><span class="token punctuation">(</span>jimmy,rene<span class="token punctuation">)</span>    /bin/kill
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但这还有个问题，foobar到底以jimmy还是rene的身份执行？这时我们应该想到了<code>sudo -u</code>了，它正是用在这种时候。 foobar可以使用<code>sudo -u jimmy kill PID</code>或者<code>sudo -u rene kill PID</code>，但这样挺麻烦，其实我们可以不必每次加<code>-u</code>，把rene或jimmy设为默认的目标用户即可。再在上面加一行：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Defaults:foobar    <span class="token assign-left variable">runas_default</span><span class="token operator">=</span>rene
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Defaults后面如果有冒号，是对后面用户的默认，如果没有，则是对所有用户的默认。就像配置文件中自带的一行：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Defaults    env_reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>另一个问题是，很多时候，我们本来就登录了，每次使用sudo还要输入密码就显得烦琐了。我们可不可以不再输入密码呢？当然可以，我们这样修改配置文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>foobar <span class="token assign-left variable">localhost</span><span class="token operator">=</span>NOPASSWD:     /bin/cat, /bin/ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再来sudo一下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>foobar@localhost ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">ls</span> /rootanaconda-ks.cfg Desktop install.log
install.log.syslog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，你也可以说“某些命令用户foobar不可以运行”，通过使用!操作符，但这不是一个好主意。因为，用!操作符来从ALL中“剔出”一些命令一般是没什么效果的，一个用户完全可以把那个命令拷贝到别的地方，换一个名字后再来运行。</p><p><strong>日志与安全</strong></p><p>sudo为安全考虑得很周到，不仅可以记录日志，还能在有必要时向系统管理员报告。但是，sudo的日志功能不是自动的，必须由管理员开启。这样来做：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">touch</span> /var/log/sudo
<span class="token function">vi</span> /etc/syslog.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在syslog.conf最后面加一行（必须用tab分割开）并保存：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>local2.debug                    /var/log/sudo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启日志守候进程，</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token function">grep</span> syslogd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把得到的syslogd进程的PID（输出的第二列是PID）填入下面：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">kill</span> –HUP PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样，sudo就可以写日志了：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>foobar@localhost ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">ls</span> /rootanaconda-ks.cfg
Desktop install.log
install.log.syslog
<span class="token variable">$cat</span> /var/log/sudoJul <span class="token number">28</span> <span class="token number">22</span>:52:54 localhost sudo:   foobar <span class="token builtin class-name">:</span>
<span class="token assign-left variable">TTY</span><span class="token operator">=</span>pts/1 <span class="token punctuation">;</span> <span class="token assign-left variable">pwd</span><span class="token operator">=</span>/home/foobar <span class="token punctuation">;</span> <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>root <span class="token punctuation">;</span> <span class="token assign-left variable">command</span><span class="token operator">=</span>/bin/ls /root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，有一个小小的“缺陷”，sudo记录日志并不是很忠实：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>foobar@localhost ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">cat</span> /etc/shadow <span class="token operator">&gt;</span> /dev/null
<span class="token function">cat</span> /var/log/sudo<span class="token punctuation">..</span>.Jul <span class="token number">28</span> <span class="token number">23</span>:10:24 localhost sudo:   foobar <span class="token builtin class-name">:</span> <span class="token assign-left variable">TTY</span><span class="token operator">=</span>pts/1 <span class="token punctuation">;</span>
<span class="token assign-left variable"><span class="token environment constant">PWD</span></span><span class="token operator">=</span>/home/foobar <span class="token punctuation">;</span> <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>root <span class="token punctuation">;</span> <span class="token assign-left variable">COMMAND</span><span class="token operator">=</span>/bin/cat /etc/shadow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重定向没有被记录在案！为什么？因为在命令运行之前，shell把重定向的工作做完了，sudo根本就没看到重定向。这也有个好处，下面的手段不会得逞：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>foobar@localhost ~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">ls</span> /root <span class="token operator">&gt;</span> /etc/shadowbash: /etc/shadow: 权限不够
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sudo 有自己的方式来保护安全。以root的身份执行<code>sudo-V</code>，查看一下sudo的设置。因为考虑到安全问题，一部分环境变量并没有传递给sudo后面的命令，或者被检查后再传递的，比如：PATH，HOME，SHELL等。当然，你也可以通过sudoers来配置这些环境变量。</p>`,58),l=[t];function i(d,c){return a(),n("div",null,l)}const u=s(o,[["render",i],["__file","sudo.html.vue"]]),v=JSON.parse('{"path":"/command/linux/sudo.html","title":"sudo","lang":"zh-CN","frontmatter":{"description":"sudo 以其他身份来执行命令 补充说明 sudo命令 用来以其他身份来执行命令，预设的身份为root。在/etc/sudoers中设置了可执行sudo指令的用户。若其未经授权的用户企图使用sudo，则会发出警告的邮件给管理员。用户使用sudo时，必须先输入密码，之后有5分钟的有效期限，超过期限则必须重新输入密码。 语法 选项 参数 指令：需要运行的指...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/sudo.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"sudo"}],["meta",{"property":"og:description","content":"sudo 以其他身份来执行命令 补充说明 sudo命令 用来以其他身份来执行命令，预设的身份为root。在/etc/sudoers中设置了可执行sudo指令的用户。若其未经授权的用户企图使用sudo，则会发出警告的邮件给管理员。用户使用sudo时，必须先输入密码，之后有5分钟的有效期限，超过期限则必须重新输入密码。 语法 选项 参数 指令：需要运行的指..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sudo\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":6.59,"words":1977},"filePathRelative":"command/linux/sudo.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,v as data};