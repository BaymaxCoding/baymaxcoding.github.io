import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,e as s}from"./app-D_HUMAmc.js";const n={},i=s(`<h1 id="cksum" tabindex="-1"><a class="header-anchor" href="#cksum"><span>cksum</span></a></h1><p>检查文件的CRC是否正确</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>cksum命令</strong> 是检查文件的CRC是否正确，确保文件从一个系统传输到另一个系统的过程中不被损坏。这种方法要求校验和在源系统中被计算出来，在目的系统中又被计算一次，两个数字进行比较，如果校验和相等，则该文件被认为是正确传输了。</p><p>注意：CRC是指一种排错检查方法，即循环冗余校验法。</p><p>指定文件交由cksum命令进行校验后，会返回校验结果供用户核对文件是否正确无误。若不指定任何文件名称或是所给予的文件名为&quot;-&quot;，则cksum命令会从标准输入设备中读取数据。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>cksum<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>--help：在线帮助；
--version：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>文件：指定要计算校验的版本信息。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p>使用cksum命令计算文件&quot;testfile1&quot;的完整性，输入如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cksum</span> testfile1            <span class="token comment">#对指定文件进行CRC校验</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上命令执行后，将输出校验码等相关的信息，具体输出信息如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token number">1263453430</span> <span class="token number">78</span> testfile1     <span class="token comment">#输出信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的输出信息中，&quot;1263453430&quot;表示校验码，&quot;78&quot;表示字节数。</p><p>注意：如果文件中有任何字符被修改，都将改变计算后CRC校验码的值。</p>`,19),c=[i];function l(o,d){return a(),t("div",null,c)}const m=e(n,[["render",l],["__file","cksum.html.vue"]]),u=JSON.parse('{"path":"/command/linux/cksum.html","title":"cksum","lang":"zh-CN","frontmatter":{"description":"cksum 检查文件的CRC是否正确 补充说明 cksum命令 是检查文件的CRC是否正确，确保文件从一个系统传输到另一个系统的过程中不被损坏。这种方法要求校验和在源系统中被计算出来，在目的系统中又被计算一次，两个数字进行比较，如果校验和相等，则该文件被认为是正确传输了。 注意：CRC是指一种排错检查方法，即循环冗余校验法。 指定文件交由cksum命令...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/cksum.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"cksum"}],["meta",{"property":"og:description","content":"cksum 检查文件的CRC是否正确 补充说明 cksum命令 是检查文件的CRC是否正确，确保文件从一个系统传输到另一个系统的过程中不被损坏。这种方法要求校验和在源系统中被计算出来，在目的系统中又被计算一次，两个数字进行比较，如果校验和相等，则该文件被认为是正确传输了。 注意：CRC是指一种排错检查方法，即循环冗余校验法。 指定文件交由cksum命令..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cksum\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.21,"words":364},"filePathRelative":"command/linux/cksum.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};