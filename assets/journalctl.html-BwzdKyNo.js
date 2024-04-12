import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,b as e}from"./app-DOGW-9XX.js";const l={},t=e(`<h1 id="journalctl" tabindex="-1"><a class="header-anchor" href="#journalctl"><span>journalctl</span></a></h1><p>检索 systemd 日志，是 CentOS 7 才有的工具。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>MATCHES<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Flags:
 <span class="token parameter variable">--system</span>               <span class="token comment"># 显示系统日志</span>
 <span class="token parameter variable">--user</span>                 <span class="token comment"># 显示当前用户的用户日志</span>
<span class="token parameter variable">-M</span> <span class="token parameter variable">--machine</span><span class="token operator">=</span>CONTAINER  <span class="token comment"># 在本地容器上操作</span>
<span class="token parameter variable">-S</span> <span class="token parameter variable">--since</span><span class="token operator">=</span>DATE         <span class="token comment"># 显示不早于指定日期的条目</span>
<span class="token parameter variable">-U</span> <span class="token parameter variable">--until</span><span class="token operator">=</span>DATE         <span class="token comment"># 显示不晚于指定日期的条目</span>
<span class="token parameter variable">-c</span> <span class="token parameter variable">--cursor</span><span class="token operator">=</span>CURSOR      <span class="token comment"># 显示从指定光标开始的条目</span>
  --after-cursor<span class="token operator">=</span>CURSOR <span class="token comment"># 在指定光标后显示条目</span>
  --show-cursor         <span class="token comment"># 在所有条目之后打印光标</span>
<span class="token parameter variable">-b</span> --boot<span class="token punctuation">[</span><span class="token operator">=</span>ID<span class="token punctuation">]</span>          <span class="token comment"># 显示当前启动或指定启动</span>
  --list-boots          <span class="token comment"># 显示有关已记录引导的简洁信息</span>
<span class="token parameter variable">-k</span> <span class="token parameter variable">--dmesg</span>              <span class="token comment"># 显示当前启动的内核消息日志</span>
<span class="token parameter variable">-u</span> <span class="token parameter variable">--unit</span><span class="token operator">=</span>UNIT          <span class="token comment"># 显示指定单元的日志</span>
<span class="token parameter variable">-t</span> <span class="token parameter variable">--identifier</span><span class="token operator">=</span>STRING  <span class="token comment"># 显示具有指定系统日志标识符的条目</span>
<span class="token parameter variable">-p</span> <span class="token parameter variable">--priority</span><span class="token operator">=</span>RANGE     <span class="token comment"># 显示具有指定优先级的条目</span>
<span class="token parameter variable">-e</span> --pager-end          <span class="token comment"># 在pager中立即跳转到末尾</span>
<span class="token parameter variable">-f</span> <span class="token parameter variable">--follow</span>             <span class="token comment"># 关注期刊</span>
<span class="token parameter variable">-n</span> --lines<span class="token punctuation">[</span><span class="token operator">=</span>INTEGER<span class="token punctuation">]</span>    <span class="token comment"># 要显示的日志条目数</span>
  --no-tail             <span class="token comment"># 显示所有行，即使在跟随模式下</span>
<span class="token parameter variable">-r</span> <span class="token parameter variable">--reverse</span>            <span class="token comment"># 首先显示最新的条目</span>
<span class="token parameter variable">-o</span> <span class="token parameter variable">--output</span><span class="token operator">=</span>STRING      <span class="token comment"># 更改日志输出模式 (short, short-iso,</span>
                                   short-precise, short-monotonic, verbose,
                                   export, json, json-pretty, json-sse, <span class="token function">cat</span><span class="token punctuation">)</span>
<span class="token parameter variable">--utc</span>                   <span class="token comment"># 以协调世界时 (UTC) 表示的时间</span>
<span class="token parameter variable">-x</span> <span class="token parameter variable">--catalog</span>            <span class="token comment"># 在可用的情况下添加消息说明</span>
   --no-full            <span class="token comment"># Ellipsize 字段</span>
<span class="token parameter variable">-a</span> <span class="token parameter variable">--all</span>                <span class="token comment"># 显示所有字段，包括长的和不可打印的</span>
<span class="token parameter variable">-q</span> <span class="token parameter variable">--quiet</span>              <span class="token comment"># 不显示特权警告</span>
   --no-pager           <span class="token comment"># 不要将输出通过管道传输到寻呼机</span>
<span class="token parameter variable">-m</span> <span class="token parameter variable">--merge</span>              <span class="token comment"># 显示所有可用期刊的条目</span>
<span class="token parameter variable">-D</span> <span class="token parameter variable">--directory</span><span class="token operator">=</span><span class="token environment constant">PATH</span>     <span class="token comment"># 显示目录中的日志文件</span>
   <span class="token parameter variable">--file</span><span class="token operator">=</span><span class="token environment constant">PATH</span>          <span class="token comment"># 显示日志文件</span>
   <span class="token parameter variable">--root</span><span class="token operator">=</span>ROOT          <span class="token comment"># 对根目录下的目录文件进行操作</span>
   <span class="token parameter variable">--interval</span><span class="token operator">=</span>TIME      <span class="token comment"># 更改 FSS 密封键的时间间隔</span>
   --verify-key<span class="token operator">=</span>KEY     <span class="token comment"># 指定FSS验证密钥</span>
   <span class="token parameter variable">--force</span>              <span class="token comment"># 使用 --setup-keys 覆盖 FSS 密钥对 </span>

Commands:
<span class="token parameter variable">-h</span> <span class="token parameter variable">--help</span>              <span class="token comment"># 显示此帮助文本</span>
   <span class="token parameter variable">--version</span>           <span class="token comment"># 显示包版本</span>
<span class="token parameter variable">-F</span> <span class="token parameter variable">--field</span><span class="token operator">=</span>FIELD       <span class="token comment"># 列出指定字段的所有值</span>
   --new-id128         <span class="token comment"># 生成新的 128 位 ID</span>
   --disk-usage        <span class="token comment"># 显示所有日志文件的总磁盘使用情况</span>
   --vacuum-size<span class="token operator">=</span>BYTES <span class="token comment"># 将磁盘使用量减少到指定大小以下</span>
   --vacuum-time<span class="token operator">=</span>TIME  <span class="token comment"># 删除早于指定日期的日志文件</span>
   <span class="token parameter variable">--flush</span>             <span class="token comment"># 将所有日志数据从 /run 刷新到 /var</span>
   <span class="token parameter variable">--header</span>            <span class="token comment"># 显示期刊头信息</span>
   --list-catalog      <span class="token comment"># 显示目录中的所有消息 ID</span>
   --dump-catalog      <span class="token comment"># 在消息目录中显示条目</span>
   --update-catalog    <span class="token comment"># 更新消息目录数据库</span>
   --setup-keys        <span class="token comment"># 生成新的 FSS 密钥对</span>
   <span class="token parameter variable">--verify</span>            <span class="token comment"># 验证日志文件的一致性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p><strong>过滤输出</strong></p><p><code>journalctl</code> 可以根据特定字段过滤输出。如果过滤的字段比较多，需要较长时间才能显示出来。</p><p>示例：</p><p>显示本次启动后的所有日志：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl <span class="token parameter variable">-b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过，一般大家更关心的不是本次启动后的日志，而是上次启动时的（例如，刚刚系统崩溃了）。可以使用 -b 参数：</p><ul><li><code>journalctl -b -0</code> 显示本次启动的信息</li><li><code>journalctl -b -1</code> 显示上次启动的信息</li><li><code>journalctl -b -2</code> 显示上上次启动的信息 <code>journalctl -b -2</code></li></ul><p>只显示错误、冲突和重要告警信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl <span class="token parameter variable">-p</span> err<span class="token punctuation">..</span>alert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以使用数字， <code>journalctl -p 3..1</code>。如果使用单个 number/keyword，则 <code>journalctl -p 3</code> - 还包括所有更高的优先级。</p><p>显示从某个日期 ( 或时间 ) 开始的消息:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;2012-10-30 18:17:16&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示从某个时间 ( 例如 20分钟前 ) 的消息:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl <span class="token parameter variable">--since</span> <span class="token string">&quot;20 min ago&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示最新信息</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示特定程序的所有消息:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl /usr/lib/systemd/systemd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示特定进程的所有消息:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl <span class="token assign-left variable">_PID</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示指定单元的所有消息：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl <span class="token parameter variable">-u</span> man-db.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示内核环缓存消息r:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl <span class="token parameter variable">-k</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>手动清理日志</strong></p><p><code>/var/log/journal</code> 存放着日志, <code>rm</code> 应该能工作. 或者使用 <code>journalctl</code>,</p><p>例如:</p><p>清理日志使总大小小于 100M:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl --vacuum-size<span class="token operator">=</span>100M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>清理最早两周前的日志.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>journalctl --vacuum-time<span class="token operator">=</span>2weeks
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,38),r=[t];function p(i,o){return s(),n("div",null,r)}const m=a(l,[["render",p],["__file","journalctl.html.vue"]]),v=JSON.parse('{"path":"/command/linux/journalctl.html","title":"journalctl","lang":"zh-CN","frontmatter":{"description":"journalctl 检索 systemd 日志，是 CentOS 7 才有的工具。 语法 选项 实例 过滤输出 journalctl 可以根据特定字段过滤输出。如果过滤的字段比较多，需要较长时间才能显示出来。 示例： 显示本次启动后的所有日志： 不过，一般大家更关心的不是本次启动后的日志，而是上次启动时的（例如，刚刚系统崩溃了）。可以使用 -b 参数...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/journalctl.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"journalctl"}],["meta",{"property":"og:description","content":"journalctl 检索 systemd 日志，是 CentOS 7 才有的工具。 语法 选项 实例 过滤输出 journalctl 可以根据特定字段过滤输出。如果过滤的字段比较多，需要较长时间才能显示出来。 示例： 显示本次启动后的所有日志： 不过，一般大家更关心的不是本次启动后的日志，而是上次启动时的（例如，刚刚系统崩溃了）。可以使用 -b 参数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"journalctl\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":3.31,"words":992},"filePathRelative":"command/linux/journalctl.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,v as data};