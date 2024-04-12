import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,b as a}from"./app-DOGW-9XX.js";const l={},s=a(`<h1 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux"><span>tmux</span></a></h1><p>Tmux是一个优秀的终端复用软件，类似GNU Screen，但来自于OpenBSD，采用BSD授权</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p>使用它最直观的好处就是，通过一个终端登录远程主机并运行tmux后，在其中可以开启多个控制台而无需再“浪费”多余的终端来连接这台远程主机；</p><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h2><ul><li>提供了强劲的、易于使用的命令行界面。</li><li>可横向和纵向分割窗口。</li><li>窗格可以自由移动和调整大小，或直接利用四个预设布局之一。</li><li>支持 UTF-8 编码及 256 色终端。</li><li>可在多个缓冲区进行复制和粘贴。</li><li>可通过交互式菜单来选择窗口、会话及客户端。</li><li>支持跨窗口搜索。</li><li>支持自动及手动锁定窗口。</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 在 Mac OS 中，通过 brew 安装</span>
brew <span class="token function">install</span> tmux
<span class="token comment"># ubuntu版本下直接apt-get安装</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> tmux
<span class="token comment"># centos7版本下直接yum安装</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> tmux

<span class="token comment"># centos6版本需要编译安装</span>
yum <span class="token function">install</span> libevent libevent-devel ncurses-devel
<span class="token function">tar</span> <span class="token parameter variable">-zvxf</span> tmux-2.3.tar.gz <span class="token comment"># (提前下载：wget https://github.com/tmux/tmux/releases/download/2.3/tmux-2.3.tar.gz)</span>
<span class="token builtin class-name">cd</span> tmux-2.3
./configure
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快捷键使用说明" tabindex="-1"><a class="header-anchor" href="#快捷键使用说明"><span>快捷键使用说明</span></a></h2><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;"></th></tr></thead><tbody><tr><td style="text-align:left;">Ctrl+b</td><td style="text-align:left;">激活控制台；此时以下按键生效</td></tr></tbody></table><h3 id="系统操作" tabindex="-1"><a class="header-anchor" href="#系统操作"><span>系统操作</span></a></h3><table><thead><tr><th style="text-align:left;"></th><th></th></tr></thead><tbody><tr><td style="text-align:left;">?</td><td>列出所有快捷键；按q返回</td></tr><tr><td style="text-align:left;">d</td><td>脱离当前会话；这样可以暂时返回Shell界面，输入tmux attach能够重新进入之前的会话</td></tr><tr><td style="text-align:left;">D</td><td>选择要脱离的会话；在同时开启了多个会话时使用</td></tr><tr><td style="text-align:left;">Ctrl+z</td><td>挂起当前会话</td></tr><tr><td style="text-align:left;">r</td><td>强制重绘未脱离的会话</td></tr><tr><td style="text-align:left;">s</td><td>选择并切换会话；在同时开启了多个会话时使用</td></tr><tr><td style="text-align:left;">:</td><td>进入命令行模式；此时可以输入支持的命令，例如kill-server可以关闭服务器</td></tr><tr><td style="text-align:left;">[</td><td>进入复制模式；此时的操作与vi/emacs相同，按q/Esc退出</td></tr><tr><td style="text-align:left;">~</td><td>列出提示信息缓存；其中包含了之前tmux返回的各种提示信息</td></tr></tbody></table><h3 id="窗口操作" tabindex="-1"><a class="header-anchor" href="#窗口操作"><span>窗口操作</span></a></h3><table><thead><tr><th style="text-align:left;"></th><th></th></tr></thead><tbody><tr><td style="text-align:left;">c</td><td>创建新窗口</td></tr><tr><td style="text-align:left;">&amp;</td><td>关闭当前窗口</td></tr><tr><td style="text-align:left;">数字键</td><td>切换至指定窗口</td></tr><tr><td style="text-align:left;">p</td><td>切换至上一窗口</td></tr><tr><td style="text-align:left;">n</td><td>切换至下一窗口</td></tr><tr><td style="text-align:left;">l</td><td>在前后两个窗口间互相切换</td></tr><tr><td style="text-align:left;">w</td><td>通过窗口列表切换窗口</td></tr><tr><td style="text-align:left;">,</td><td>重命名当前窗口；这样便于识别</td></tr><tr><td style="text-align:left;">.</td><td>修改当前窗口编号；相当于窗口重新排序</td></tr><tr><td style="text-align:left;">f</td><td>在所有窗口中查找指定文本</td></tr></tbody></table><h3 id="面板操作" tabindex="-1"><a class="header-anchor" href="#面板操作"><span>面板操作</span></a></h3><table><thead><tr><th style="text-align:left;"></th><th></th></tr></thead><tbody><tr><td style="text-align:left;">”</td><td>将当前面板平分为上下两块</td></tr><tr><td style="text-align:left;">%</td><td>将当前面板平分为左右两块</td></tr><tr><td style="text-align:left;">x</td><td>关闭当前面板</td></tr><tr><td style="text-align:left;">!</td><td>将当前面板置于新窗口；即新建一个窗口，其中仅包含当前面板</td></tr><tr><td style="text-align:left;">Ctrl+方向键</td><td>以1个单元格为单位移动边缘以调整当前面板大小</td></tr><tr><td style="text-align:left;">Alt+方向键</td><td>以5个单元格为单位移动边缘以调整当前面板大小</td></tr><tr><td style="text-align:left;">Space</td><td>在预置的面板布局中循环切换；依次包括even-horizontal、even-vertical、main-horizontal、main-vertical、tiled</td></tr><tr><td style="text-align:left;">q</td><td>显示面板编号</td></tr><tr><td style="text-align:left;">o</td><td>在当前窗口中选择下一面板</td></tr><tr><td style="text-align:left;">方向键</td><td>移动光标以选择面板</td></tr><tr><td style="text-align:left;">{</td><td>向前置换当前面板</td></tr><tr><td style="text-align:left;">}</td><td>向后置换当前面板</td></tr><tr><td style="text-align:left;">Alt+o</td><td>逆时针旋转当前窗口的面板</td></tr><tr><td style="text-align:left;">Ctrl+o</td><td>顺时针旋转当前窗口的面板</td></tr></tbody></table><p>1）进入tmux面板后，一定要先按ctrl+b，然后松开，再按其他的组合键才生效。 2）常用到的几个组合键：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ctrl+b ?        <span class="token comment">#     显示快捷键帮助</span>
ctrl+b 空格键   <span class="token comment">#     采用下一个内置布局，这个很有意思，在多屏时，用这个就会将多有屏幕竖着展示</span>
ctrl+b <span class="token operator">!</span>        <span class="token comment">#     把当前窗口变为新窗口</span>
ctrl+b  &quot;       <span class="token comment">#     模向分隔窗口</span>
ctrl+b %        <span class="token comment">#     纵向分隔窗口</span>
ctrl+b q        <span class="token comment">#     显示分隔窗口的编号</span>
ctrl+b o        <span class="token comment">#     跳到下一个分隔窗口。多屏之间的切换</span>
ctrl+b 上下键   <span class="token comment">#    上一个及下一个分隔窗口</span>
ctrl+b C-方向键 <span class="token comment">#    调整分隔窗口大小</span>
ctrl+b <span class="token operator">&amp;</span>        <span class="token comment">#    确认后退出当前tmux</span>
ctrl+b <span class="token punctuation">[</span>        <span class="token comment">#    复制模式，即将当前屏幕移到上一个的位置上，其他所有窗口都向前移动一个。</span>
ctrl+b c        <span class="token comment">#    创建新窗口</span>
ctrl+b n        <span class="token comment">#    选择下一个窗口</span>
ctrl+b l        <span class="token comment">#    最后使用的窗口</span>
ctrl+b p        <span class="token comment">#    选择前一个窗口</span>
ctrl+b w        <span class="token comment">#    以菜单方式显示及选择窗口</span>
ctrl+b s        <span class="token comment">#    以菜单方式显示和选择会话。这个常用到，可以选择进入哪个tmux</span>
ctrl+b t        <span class="token comment">#    显示时钟。然后按enter键后就会恢复到shell终端状态</span>
ctrl+b d        <span class="token comment">#    脱离当前会话；这样可以暂时返回Shell界面，输入tmux attach能够重新进入之前的会话</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><ul><li>tmux 官网下载地址：http://tmux.github.io/</li></ul>`,20),d=[s];function i(r,c){return e(),n("div",null,d)}const p=t(l,[["render",i],["__file","tmux.html.vue"]]),u=JSON.parse('{"path":"/command/linux/tmux.html","title":"tmux","lang":"zh-CN","frontmatter":{"description":"tmux Tmux是一个优秀的终端复用软件，类似GNU Screen，但来自于OpenBSD，采用BSD授权 补充说明 使用它最直观的好处就是，通过一个终端登录远程主机并运行tmux后，在其中可以开启多个控制台而无需再“浪费”多余的终端来连接这台远程主机； 功能 提供了强劲的、易于使用的命令行界面。 可横向和纵向分割窗口。 窗格可以自由移动和调整大小，...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/tmux.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"tmux"}],["meta",{"property":"og:description","content":"tmux Tmux是一个优秀的终端复用软件，类似GNU Screen，但来自于OpenBSD，采用BSD授权 补充说明 使用它最直观的好处就是，通过一个终端登录远程主机并运行tmux后，在其中可以开启多个控制台而无需再“浪费”多余的终端来连接这台远程主机； 功能 提供了强劲的、易于使用的命令行界面。 可横向和纵向分割窗口。 窗格可以自由移动和调整大小，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"tmux\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[]},{"level":2,"title":"功能","slug":"功能","link":"#功能","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"快捷键使用说明","slug":"快捷键使用说明","link":"#快捷键使用说明","children":[{"level":3,"title":"系统操作","slug":"系统操作","link":"#系统操作","children":[]},{"level":3,"title":"窗口操作","slug":"窗口操作","link":"#窗口操作","children":[]},{"level":3,"title":"面板操作","slug":"面板操作","link":"#面板操作","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":3.97,"words":1190},"filePathRelative":"command/linux/tmux.md","localizedDate":"2024年4月12日","autoDesc":true}');export{p as comp,u as data};