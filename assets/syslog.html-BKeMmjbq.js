import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,b as n}from"./app-DOGW-9XX.js";const t={},l=n(`<h1 id="syslog" tabindex="-1"><a class="header-anchor" href="#syslog"><span>syslog</span></a></h1><p>系统默认的日志守护进程</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>syslog</strong> 是Linux系统默认的日志守护进程。默认的syslog配置文件是/etc/syslog.conf文件。程序，守护进程和内核提供了访问系统的日志信息。因此，任何希望生成日志信息的程序都可以向 syslog 接口呼叫生成该信息。</p><p>几乎所有的网络设备都可以通过syslog协议，将日志信息以用户数据报协议(UDP)方式传送到远端服务器，远端接收日志服务器必须通过syslogd监听UDP 端口514，并根据 syslog.conf配置文件中的配置处理本机，接收访问系统的日志信息，把指定的事件写入特定文件中，供后台数据库管理和响应之用。意味着可以让任何事件都登录到一台或多台服务器上，以备后台数据库用off-line(离线) 方法分析远端设备的事件。</p><p>通常，syslog 接受来自系统的各种功能的信息，每个信息都包括重要级。/etc/syslog.conf 文件通知 syslogd 如何根据设备和信息重要级别来报告信息。</p><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h3><p>在/var/log中创建并写入日志信息是由syslog协议处理的，是由守护进程sylogd负责执行。每个标准的进程都可以用syslog记录日志。可以使用logger命令通过syslogd记录日志。</p><p>要向syslog文件/var/log/messages中记录日志信息：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>logger this is a <span class="token builtin class-name">test</span> log line

输出：
<span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> messages
Jan  <span class="token number">5</span> <span class="token number">10</span>:07:03 localhost root: this is a <span class="token builtin class-name">test</span> log line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要记录特定的标记（tag）可以使用：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>logger <span class="token parameter variable">-t</span> TAG this is a <span class="token builtin class-name">test</span> log line

输出：
<span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> messages
Jan  <span class="token number">5</span> <span class="token number">10</span>:37:14 localhost TAG: this is a <span class="token builtin class-name">test</span> log line
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[l];function i(r,c){return e(),a("div",null,o)}const g=s(t,[["render",i],["__file","syslog.html.vue"]]),m=JSON.parse('{"path":"/command/linux/syslog.html","title":"syslog","lang":"zh-CN","frontmatter":{"description":"syslog 系统默认的日志守护进程 补充说明 syslog 是Linux系统默认的日志守护进程。默认的syslog配置文件是/etc/syslog.conf文件。程序，守护进程和内核提供了访问系统的日志信息。因此，任何希望生成日志信息的程序都可以向 syslog 接口呼叫生成该信息。 几乎所有的网络设备都可以通过syslog协议，将日志信息以用户数据...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/syslog.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"syslog"}],["meta",{"property":"og:description","content":"syslog 系统默认的日志守护进程 补充说明 syslog 是Linux系统默认的日志守护进程。默认的syslog配置文件是/etc/syslog.conf文件。程序，守护进程和内核提供了访问系统的日志信息。因此，任何希望生成日志信息的程序都可以向 syslog 接口呼叫生成该信息。 几乎所有的网络设备都可以通过syslog协议，将日志信息以用户数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"syslog\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.51,"words":452},"filePathRelative":"command/linux/syslog.md","localizedDate":"2024年4月12日","autoDesc":true}');export{g as comp,m as data};