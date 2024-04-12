import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,b as n}from"./app-DOGW-9XX.js";const i={},t=n(`<h1 id="mkswap" tabindex="-1"><a class="header-anchor" href="#mkswap"><span>mkswap</span></a></h1><p>建立和设置SWAP交换分区</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>mkswap命令</strong> 用于在一个文件或者设备上建立交换分区。在建立完之后要使用sawpon命令开始使用这个交换区。最后一个选择性参数指定了交换区的大小，但是这个参数是为了向后兼容设置的，没有使用的必要，一般都将整个文件或者设备作为交换区。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mkswap<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-c：建立交换区前，先检查是否有损坏的区块；
-f：在SPARC电脑上建立交换区时，要加上此参数；
-v0：建立旧式交换区，此为预设值；
-v1：建立新式交换区。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>设备：指定交换空间对应的设备文件或者交换文件。</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><p><strong>查看系统swap space大小：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">free</span> <span class="token parameter variable">-m</span>
total used <span class="token function">free</span> shared buffers cached
Mem: <span class="token number">377</span> <span class="token number">180</span> <span class="token number">197</span> <span class="token number">0</span> <span class="token number">19</span> <span class="token number">110</span>
-/+ buffers/cache: <span class="token number">50</span> <span class="token number">327</span>
Swap: <span class="token number">572</span> <span class="token number">0</span> <span class="token number">572</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看当前的swap空间(file(s)/partition(s))：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">swapon</span> <span class="token parameter variable">-s</span>

等价于

<span class="token function">cat</span> /proc/swaps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>添加交换空间</strong></p><p>添加一个 <strong>交换分区</strong> 或添加一个 <strong>交换文件</strong> 。推荐你添加一个交换分区；不过，若你没有多少空闲空间可用，则添加交换文件。</p><p>添加一个交换分区，步骤如下：</p><p>使用fdisk来创建交换分区（假设 /dev/sdb2 是创建的交换分区），使用 mkswap 命令来设置交换分区：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkswap</span> /dev/sdb2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启用交换分区：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">swapon</span> /dev/sdb2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>写入<code>/etc/fstab</code>，以便在引导时启用：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/dev/sdb2 swap swap defaults <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加一个交换文件，步骤如下：</p><p>创建大小为512M的交换文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/swapfile1 <span class="token assign-left variable">bs</span><span class="token operator">=</span><span class="token number">1024</span> <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">524288</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用mkswap命令来设置交换文件：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkswap</span> /swapfile1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启用交换分区：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">swapon</span> /swapfile1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>写入<code>/etc/fstab</code>，以便在引导时启用：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/swapfile1 swap swap defaults <span class="token number">0</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新添了交换分区并启用它之后，请查看<code>cat /proc/swaps</code>或free命令的输出来确保交换分区已被启用了。</p><p><strong>删除交换空间：</strong></p><p>禁用交换分区：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>swapoff /dev/sdb2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从<code>/etc/fstab</code>中删除项目，使用fdisk或yast工具删除分区。</p>`,38),l=[t];function d(p,r){return s(),e("div",null,l)}const m=a(i,[["render",d],["__file","mkswap.html.vue"]]),u=JSON.parse('{"path":"/command/linux/mkswap.html","title":"mkswap","lang":"zh-CN","frontmatter":{"description":"mkswap 建立和设置SWAP交换分区 补充说明 mkswap命令 用于在一个文件或者设备上建立交换分区。在建立完之后要使用sawpon命令开始使用这个交换区。最后一个选择性参数指定了交换区的大小，但是这个参数是为了向后兼容设置的，没有使用的必要，一般都将整个文件或者设备作为交换区。 语法 选项 参数 设备：指定交换空间对应的设备文件或者交换文件。 ...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/mkswap.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"mkswap"}],["meta",{"property":"og:description","content":"mkswap 建立和设置SWAP交换分区 补充说明 mkswap命令 用于在一个文件或者设备上建立交换分区。在建立完之后要使用sawpon命令开始使用这个交换区。最后一个选择性参数指定了交换区的大小，但是这个参数是为了向后兼容设置的，没有使用的必要，一般都将整个文件或者设备作为交换区。 语法 选项 参数 设备：指定交换空间对应的设备文件或者交换文件。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mkswap\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.78,"words":535},"filePathRelative":"command/linux/mkswap.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};