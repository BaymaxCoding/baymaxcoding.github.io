import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,b as i}from"./app-DOGW-9XX.js";const c={},s=i(`<h1 id="xclip" tabindex="-1"><a class="header-anchor" href="#xclip"><span>xclip</span></a></h1><p>管理 X 粘贴板</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p>在 X 系统里面，从一个窗口复制一段文字到另一个窗口，有两套机制，分别是 Selections 和 cut buffers。</p><p>常用的 copy &amp; paste 是利用的 cut buffers 机制;另外用鼠标选中一段文字，然后在另一个窗口按鼠标中键实现复制，利用的是 selections 机制。selection 又可以分为 master 和 slave selection。</p><p>当用鼠标选中一段文件，这段文字就自动被复制到 master selection。然后在另一个地方按鼠标中键，就自动把 master selection 的内容粘贴出来。</p><p>当你想复制少量文字的时候，两种方法都是很方便的。但是当复制大段文字的时候就挺麻烦。另外就是你可能会频繁的执行一些复制粘贴工作，不停的用鼠标选中文字，然后再粘贴。这是对手指的折磨。</p><p>我忍受不了这种折磨，所以发现了 xclip， 方便的管理 X selections 里面内容的工具。</p><p>比如如下命令就把文件 /etc/passwd 的内容复制到 X master selections 里面了。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>xclip <span class="token parameter variable">-i</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后到别的地方就能复制出来，利用鼠标中键。或者是更舒服的 shift+insert。 我现在最常用的方法是通过键盘绑定来管理 X master selections 的内容。比如 alt+F1 就能把我的 ~/f1 的内容复制到 X master selections，alt+F2 复制 ~/f2 的内容。这样就能把你需要经常用到的内容方便的进行复制粘贴。比如常用的密码啥的。</p>`,11),o=[s];function n(p,l){return t(),a("div",null,o)}const d=e(c,[["render",n],["__file","xclip.html.vue"]]),h=JSON.parse('{"path":"/command/linux/xclip.html","title":"xclip","lang":"zh-CN","frontmatter":{"description":"xclip 管理 X 粘贴板 补充说明 在 X 系统里面，从一个窗口复制一段文字到另一个窗口，有两套机制，分别是 Selections 和 cut buffers。 常用的 copy & paste 是利用的 cut buffers 机制;另外用鼠标选中一段文字，然后在另一个窗口按鼠标中键实现复制，利用的是 selections 机制。selectio...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/xclip.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"xclip"}],["meta",{"property":"og:description","content":"xclip 管理 X 粘贴板 补充说明 在 X 系统里面，从一个窗口复制一段文字到另一个窗口，有两套机制，分别是 Selections 和 cut buffers。 常用的 copy & paste 是利用的 cut buffers 机制;另外用鼠标选中一段文字，然后在另一个窗口按鼠标中键实现复制，利用的是 selections 机制。selectio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"xclip\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":1.35,"words":404},"filePathRelative":"command/linux/xclip.md","localizedDate":"2024年4月12日","autoDesc":true}');export{d as comp,h as data};