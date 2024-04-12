import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,b as i}from"./app-DOGW-9XX.js";const s={},t=i(`<h1 id="gunzip" tabindex="-1"><a class="header-anchor" href="#gunzip"><span>gunzip</span></a></h1><p>用来解压缩文件</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>gunzip命令</strong> 用来解压缩文件。gunzip是个使用广泛的解压缩程序，它用于解开被gzip压缩过的文件，这些压缩文件预设最后的扩展名为.gz。事实上gunzip就是gzip的硬连接，因此不论是压缩或解压缩，都可通过gzip指令单独完成。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>gunzip<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-a或——ascii：使用ASCII文字模式；
-c或--stdout或--to-stdout：把解压后的文件输出到标准输出设备；
-f或-force：强行解开压缩文件，不理会文件名称或硬连接是否存在以及该文件是否为符号连接；
-h或——help：在线帮助；
-l或——list：列出压缩文件的相关信息；
-L或——license：显示版本与版权信息；
-n或--no-name：解压缩时，若压缩文件内含有原来的文件名称及时间戳记，则将其忽略不予处理；
-N或——name：解压缩时，若压缩文件内含有原来的文件名称及时间戳记，则将其回存到解开的文件上；
-q或——quiet：不显示警告信息；
-r或——recursive：递归处理，将指定目录下的所有文件及子目录一并处理；
-S或<span class="token operator">&lt;</span>压缩字尾字符串<span class="token operator">&gt;</span>或----suffix<span class="token operator">&lt;</span>压缩字尾字符串<span class="token operator">&gt;</span>：更改压缩字尾字符串；
-t或——test：测试压缩文件是否正确无误；
-v或——verbose：显示指令执行过程；
-V或——version：显示版本信息；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件列表：指定要解压缩的压缩包。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>首先将<code>/etc</code>目录下的所有文件以及子目录进行压缩，备份压缩包etc.zip到<code>/opt</code>目录，然后对etc.zip文件进行gzip压缩，设置gzip的压缩级别为9。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">zip</span> –r /opt/etc.zip /etc
<span class="token function">gzip</span> <span class="token parameter variable">-9v</span> /opt/etc.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看上述etc.zip.gz文件的压缩信息。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">gzip</span> <span class="token parameter variable">-l</span> /opt/etc.zip.gz
compressed        uncompressed ratio uncompressed_name
<span class="token number">11938745</span>            <span class="token number">12767265</span>   <span class="token number">6.5</span>% /opt/etc.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压上述etc.zip.gz文件到当前目录。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@mylinux ~<span class="token punctuation">]</span><span class="token comment">#gzip –d /opt/etc.zip.gz </span>
或者执行
<span class="token punctuation">[</span>root@mylinux ~<span class="token punctuation">]</span><span class="token comment">#gunzip /opt/etc.zip.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的示例可以知道<code>gzip –d</code>等价于<code>gunzip</code>命令。</p>`,18),p=[t];function l(c,d){return n(),a("div",null,p)}const u=e(s,[["render",l],["__file","gunzip.html.vue"]]),m=JSON.parse('{"path":"/command/linux/gunzip.html","title":"gunzip","lang":"zh-CN","frontmatter":{"description":"gunzip 用来解压缩文件 补充说明 gunzip命令 用来解压缩文件。gunzip是个使用广泛的解压缩程序，它用于解开被gzip压缩过的文件，这些压缩文件预设最后的扩展名为.gz。事实上gunzip就是gzip的硬连接，因此不论是压缩或解压缩，都可通过gzip指令单独完成。 语法 选项 参数 文件列表：指定要解压缩的压缩包。 实例 首先将/etc目...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/gunzip.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"gunzip"}],["meta",{"property":"og:description","content":"gunzip 用来解压缩文件 补充说明 gunzip命令 用来解压缩文件。gunzip是个使用广泛的解压缩程序，它用于解开被gzip压缩过的文件，这些压缩文件预设最后的扩展名为.gz。事实上gunzip就是gzip的硬连接，因此不论是压缩或解压缩，都可通过gzip指令单独完成。 语法 选项 参数 文件列表：指定要解压缩的压缩包。 实例 首先将/etc目..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gunzip\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.77,"words":530},"filePathRelative":"command/linux/gunzip.md","localizedDate":"2024年4月12日","autoDesc":true}');export{u as comp,m as data};