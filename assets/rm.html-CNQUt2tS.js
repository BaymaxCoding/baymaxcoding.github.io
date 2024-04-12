import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,b as n}from"./app-DOGW-9XX.js";const t={},i=n(`<h1 id="rm" tabindex="-1"><a class="header-anchor" href="#rm"><span>rm</span></a></h1><p>用于删除给定的文件和目录</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>rm</strong> <strong>命令</strong> 可以删除一个目录中的一个或多个文件或目录，也可以将某个目录及其下属的所有文件及其子目录均删除掉。对于链接文件，只是删除整个链接文件，而原有文件保持不变。</p><p>注意：使用rm命令要格外小心。因为一旦删除了一个文件，就无法再恢复它。所以，在删除文件之前，最好再看一下文件的内容，确定是否真要删除。rm命令可以用-i选项，这个选项在使用文件扩展名字符删除多个文件时特别有用。使用这个选项，系统会要求你逐一确定是否要删除。这时，必须输入y并按Enter键，才能删除文件。如果仅按Enter键或其他字符，文件不会被删除。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-d：直接把欲删除的目录的硬连接数据删除成0，删除该目录；
-f：强制删除文件或目录；
-i：删除已有文件或目录之前先询问用户；
-r或-R：递归处理，将指定目录下的所有文件与子目录一并处理；
--preserve-root：不对根目录进行递归操作；
-v：显示指令的详细执行过程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件：指定被删除的文件列表，如果参数中含有目录，则必须加上<code>-r</code>或者<code>-R</code>选项。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>交互式删除当前目录下的文件test和example</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-i</span> <span class="token builtin class-name">test</span> example
Remove <span class="token builtin class-name">test</span> ?n（不删除文件test<span class="token punctuation">)</span>
Remove example ?y（删除文件example<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除当前目录下除隐含文件外的所有文件和子目录</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># rm -r *</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>应注意，这样做是非常危险的!</p><p><strong>删除当前目录下的 package-lock.json 文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span>  <span class="token parameter variable">-name</span> <span class="token string">&quot;package-lock.json&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>*<em>查找 <em>.html 结尾的文件并删除</em></em></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> ./docs <span class="token parameter variable">-name</span> <span class="token string">&quot;*.html&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>*<em>删除当前项目下 <em>.html 结尾的文件</em></em></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> *.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>删除当前目录下的 node_modules 目录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> <span class="token string">&#39;node_modules&#39;</span> <span class="token parameter variable">-type</span> d <span class="token parameter variable">-prune</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token string">&#39;{}&#39;</span> +
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>删除文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># rm 文件1 文件2 ...</span>
<span class="token function">rm</span> testfile.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除目录</strong></p><blockquote><p>rm -r [目录名称] -r 表示递归地删除目录下的所有文件和目录。 -f 表示强制删除</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> testdir
<span class="token function">rm</span> <span class="token parameter variable">-r</span> testdir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除操作前有确认提示</strong></p><blockquote><p>rm -i [文件/目录]</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-i</span> testdir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>批量删除 <code>icons</code> 文件夹中的子文件夹中的 data 文件夹</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> icons/**/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>rm 忽略不存在的文件或目录</strong></p><blockquote><p>-f 选项（LCTT 译注：即 “force”）让此次操作强制执行，忽略错误提示</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token punctuation">[</span>文件<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>仅在某些场景下确认删除</strong></p><blockquote><p>选项 -I，可保证在删除超过 3 个文件时或递归删除时（LCTT 译注： 如删除目录）仅提示一次确认。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-I</span> file1 file2 file3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>删除根目录</strong></p><blockquote><p>当然，删除根目录（/）是 Linux 用户最不想要的操作，这也就是为什么默认 rm 命令不支持在根目录上执行递归删除操作。 然而，如果你非得完成这个操作，你需要使用 --no-preserve-root 选项。当提供此选项，rm 就不会特殊处理根目录（/）了。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>不给示例了，操作系统都被你删除了，你太坏了😆
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>rm 显示当前删除操作的详情</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-v</span> <span class="token punctuation">[</span>文件/目录<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,46),l=[i];function r(p,c){return e(),s("div",null,l)}const m=a(t,[["render",r],["__file","rm.html.vue"]]),u=JSON.parse('{"path":"/command/linux/rm.html","title":"rm","lang":"zh-CN","frontmatter":{"description":"rm 用于删除给定的文件和目录 补充说明 rm 命令 可以删除一个目录中的一个或多个文件或目录，也可以将某个目录及其下属的所有文件及其子目录均删除掉。对于链接文件，只是删除整个链接文件，而原有文件保持不变。 注意：使用rm命令要格外小心。因为一旦删除了一个文件，就无法再恢复它。所以，在删除文件之前，最好再看一下文件的内容，确定是否真要删除。rm命令可以...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/rm.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"rm"}],["meta",{"property":"og:description","content":"rm 用于删除给定的文件和目录 补充说明 rm 命令 可以删除一个目录中的一个或多个文件或目录，也可以将某个目录及其下属的所有文件及其子目录均删除掉。对于链接文件，只是删除整个链接文件，而原有文件保持不变。 注意：使用rm命令要格外小心。因为一旦删除了一个文件，就无法再恢复它。所以，在删除文件之前，最好再看一下文件的内容，确定是否真要删除。rm命令可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"rm\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":2.92,"words":877},"filePathRelative":"command/linux/rm.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};