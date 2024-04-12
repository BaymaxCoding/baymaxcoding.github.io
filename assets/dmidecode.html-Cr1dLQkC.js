import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,b as a}from"./app-DOGW-9XX.js";const i={},l=a(`<h1 id="dmidecode" tabindex="-1"><a class="header-anchor" href="#dmidecode"><span>dmidecode</span></a></h1><p>在Linux系统下获取有关硬件方面的信息</p><h2 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明"><span>补充说明</span></a></h2><p><strong>dmidecode命令</strong> 可以让你在Linux系统下获取有关硬件方面的信息。dmidecode的作用是将DMI数据库中的信息解码，以可读的文本方式显示。由于DMI信息可以人为修改，因此里面的信息不一定是系统准确的信息。dmidecode遵循SMBIOS/DMI标准，其输出的信息包括BIOS、系统、主板、处理器、内存、缓存等等。</p><p>DMI（Desktop Management Interface,DMI）就是帮助收集电脑系统信息的管理系统，DMI信息的收集必须在严格遵照SMBIOS规范的前提下进行。SMBIOS（System Management BIOS）是主板或系统制造者以标准格式显示产品管理信息所需遵循的统一规范。SMBIOS和DMI是由行业指导机构Desktop Management Task Force(DMTF)起草的开放性的技术标准，其中DMI设计适用于任何的平台和操作系统。</p><p>DMI充当了管理工具和系统层之间接口的角色。它建立了标准的可管理系统更加方便了电脑厂商和用户对系统的了解。DMI的主要组成部分是Management Information Format(MIF)数据库。这个数据库包括了所有有关电脑系统和配件的信息。通过DMI，用户可以获取序列号、电脑厂商、串口信息以及其它系统配件信息。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dmidecode <span class="token punctuation">[</span>选项<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>-d：<span class="token punctuation">(</span>default:/dev/mem<span class="token punctuation">)</span>从设备文件读取信息，输出内容与不加参数标准输出相同。
-h：显示帮助信息。
-s：只显示指定DMI字符串的信息。<span class="token punctuation">(</span>string<span class="token punctuation">)</span>
-t：只显示指定条目的信息。<span class="token punctuation">(</span>type<span class="token punctuation">)</span>
-u：显示未解码的原始条目内容。
--dump-bin file：将DMI数据转储到一个二进制文件中。
--from-dump FILE：从一个二进制文件读取DMI数据。
-V：显示版本信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>dmidecode参数string及type列表：</strong></p><p>（1）Valid string keywords are：</p><ul><li>bios-vendor</li><li>bios-version</li><li>bios-release-date</li><li>system-manufacturer</li><li>system-product-name</li><li>system-version</li><li>system-serial-number</li><li>system-uuid</li><li>baseboard-manufacturer</li><li>baseboard-product-name</li><li>baseboard-version</li><li>baseboard-serial-number</li><li>baseboard-asset-tag</li><li>chassis-manufacturer</li><li>chassis-type</li><li>chassis-version</li><li>chassis-serial-number</li><li>chassis-asset-tag</li><li>processor-family</li><li>processor-manufacturer</li><li>processor-version</li><li>processor-frequency</li></ul><p>（2）Valid type keywords are：</p><ul><li>bios</li><li>system</li><li>baseboard</li><li>chassis</li><li>processor</li><li>memory</li><li>Cache</li><li>connector</li><li>slot</li></ul><p>（3）type全部编码列表：</p><ul><li>BIOS</li><li>System</li><li>Base Board</li><li>Chassis</li><li>Processor</li><li>Memory Controller</li><li>Memory Module</li><li>Cache</li><li>Port Connector</li><li>System Slots</li><li>On Board Devices</li><li>OEM Strings</li><li>System Configuration Options</li><li>BIOS Language</li><li>Group Associations</li><li>System Event Log</li><li>Physical Memory Array</li><li>Memory Device</li><li>32-bit Memory Error</li><li>Memory Array Mapped Address</li><li>Memory Device Mapped Address</li><li>Built-in Pointing Device</li><li>Portable Battery</li><li>System Reset</li><li>Hardware Security</li><li>System Power Controls</li><li>Voltage Probe</li><li>Cooling Device</li><li>Temperature Probe</li><li>Electrical Current Probe</li><li>Out-of-band Remote Access</li><li>Boot Integrity Services</li><li>System Boot</li><li>64-bit Memory Error</li><li>Management Device</li><li>Management Device Component</li><li>Management Device Threshold Data</li><li>Memory Channel</li><li>IPMI Device</li><li>Power Supply</li><li>Additional Information</li><li>Onboard Device</li></ul><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dmidecode <span class="token parameter variable">-t</span> <span class="token number">1</span>  <span class="token comment"># 查看服务器信息</span>
dmidecode <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;Product Name&#39;</span> <span class="token comment"># 查看服务器型号 </span>
dmidecode <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;Serial Number&#39;</span> <span class="token comment"># 查看主板的序列号 </span>
dmidecode <span class="token parameter variable">-t</span> <span class="token number">2</span>  <span class="token comment"># 查看主板信息</span>
dmidecode <span class="token parameter variable">-s</span> system-serial-number <span class="token comment"># 查看系统序列号 </span>
dmidecode <span class="token parameter variable">-t</span> memory <span class="token comment"># 查看内存信息 </span>
dmidecode <span class="token parameter variable">-t</span> <span class="token number">11</span> <span class="token comment"># 查看OEM信息 </span>
dmidecode <span class="token parameter variable">-t</span> <span class="token number">17</span> <span class="token comment"># 查看内存条数</span>
dmidecode <span class="token parameter variable">-t</span> <span class="token number">16</span> <span class="token comment"># 查询内存信息</span>
dmidecode <span class="token parameter variable">-t</span> <span class="token number">4</span>  <span class="token comment"># 查看CPU信息</span>

<span class="token function">cat</span> /proc/scsi/scsi <span class="token comment"># 查看服务器硬盘信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不带选项执行dmidecode命令通常会输出所有的硬件信息。dmidecode命令有个很有用的选项-t，可以按指定类型输出相关信息，假如要获得处理器方面的信息，则可以执行：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dmidecode -t processor</span>
<span class="token comment"># dmidecode 2.11</span>
SMBIOS <span class="token number">2.5</span> present.

Handle 0x0001, DMI <span class="token builtin class-name">type</span> <span class="token number">4</span>, <span class="token number">40</span> bytes
Processor Information
        Socket Designation: Node <span class="token number">1</span> Socket <span class="token number">1</span>
        Type: Central Processor
        Family: Xeon MP
        Manufacturer: Intel<span class="token punctuation">(</span>R<span class="token punctuation">)</span> Corporation
        id: C2 06 02 00 FF FB EB BF
        Signature: Type <span class="token number">0</span>, Family <span class="token number">6</span>, Model <span class="token number">44</span>, Stepping <span class="token number">2</span>
        Flags:
                FPU <span class="token punctuation">(</span>Floating-point unit on-chip<span class="token punctuation">)</span>
                VME <span class="token punctuation">(</span>Virtual mode extension<span class="token punctuation">)</span>
                DE <span class="token punctuation">(</span>Debugging extension<span class="token punctuation">)</span>
                PSE <span class="token punctuation">(</span>Page size extension<span class="token punctuation">)</span>
                TSC <span class="token punctuation">(</span>time stamp counter<span class="token punctuation">)</span>
                MSR <span class="token punctuation">(</span>Model specific registers<span class="token punctuation">)</span>
                PAE <span class="token punctuation">(</span>Physical address extension<span class="token punctuation">)</span>
                MCE <span class="token punctuation">(</span>Machine check exception<span class="token punctuation">)</span>
                CX8 <span class="token punctuation">(</span>CMPXCHG8 instruction supported<span class="token punctuation">)</span>
                APIC <span class="token punctuation">(</span>On-chip APIC hardware supported<span class="token punctuation">)</span>
                SEP <span class="token punctuation">(</span>Fast system call<span class="token punctuation">)</span>
                MTRR <span class="token punctuation">(</span>Memory <span class="token builtin class-name">type</span> range registers<span class="token punctuation">)</span>
                PGE <span class="token punctuation">(</span>Page global <span class="token builtin class-name">enable</span><span class="token punctuation">)</span>
                MCA <span class="token punctuation">(</span>Machine check architecture<span class="token punctuation">)</span>
                CMOV <span class="token punctuation">(</span>Conditional move instruction supported<span class="token punctuation">)</span>
                PAT <span class="token punctuation">(</span>Page attribute table<span class="token punctuation">)</span>
                PSE-36 <span class="token punctuation">(</span><span class="token number">36</span>-bit page size extension<span class="token punctuation">)</span>
                CLFSH <span class="token punctuation">(</span>CLFLUSH instruction supported<span class="token punctuation">)</span>
                DS <span class="token punctuation">(</span>Debug store<span class="token punctuation">)</span>
                ACPI <span class="token punctuation">(</span>ACPI supported<span class="token punctuation">)</span>
                MMX <span class="token punctuation">(</span>MMX technology supported<span class="token punctuation">)</span>
                FXSR <span class="token punctuation">(</span>FXSAVE and FXSTOR instructions supported<span class="token punctuation">)</span>
                SSE <span class="token punctuation">(</span>Streaming SIMD extensions<span class="token punctuation">)</span>
                SSE2 <span class="token punctuation">(</span>Streaming SIMD extensions <span class="token number">2</span><span class="token punctuation">)</span>
                ss <span class="token punctuation">(</span>Self-snoop<span class="token punctuation">)</span>
                HTT <span class="token punctuation">(</span>Multi-threading<span class="token punctuation">)</span>
                TM <span class="token punctuation">(</span>Thermal monitor supported<span class="token punctuation">)</span>
                PBE <span class="token punctuation">(</span>Pending <span class="token builtin class-name">break</span> enabled<span class="token punctuation">)</span>
        Version: Intel<span class="token punctuation">(</span>R<span class="token punctuation">)</span> Xeon<span class="token punctuation">(</span>R<span class="token punctuation">)</span> CPU           E5620  @ <span class="token number">2</span>.40GHz
        Voltage: <span class="token number">1.2</span> V
        External Clock: <span class="token number">5866</span> MHz
        Max Speed: <span class="token number">4400</span> MHz
        Current Speed: <span class="token number">2400</span> MHz
        Status: Populated, Enabled
        Upgrade: ZIF Socket
        L1 Cache Handle: 0x0002
        L2 Cache Handle: 0x0003
        L3 Cache Handle: 0x0004
        Serial Number: Not Specified
        Asset Tag: Not Specified
        Part Number: Not Specified
        Core Count: <span class="token number">4</span>
        Core Enabled: <span class="token number">4</span>
        Thread Count: <span class="token number">8</span>
        Characteristics:
                <span class="token number">64</span>-bit capable

Handle 0x0055, DMI <span class="token builtin class-name">type</span> <span class="token number">4</span>, <span class="token number">40</span> bytes
Processor Information
        Socket Designation: Node <span class="token number">1</span> Socket <span class="token number">2</span>
        Type: Central Processor
        Family: Xeon MP
        Manufacturer: Not Specified
        ID: 00 00 00 00 00 00 00 00
        Signature: Type <span class="token number">0</span>, Family <span class="token number">0</span>, Model <span class="token number">0</span>, Stepping <span class="token number">0</span>
        Flags: None
        Version: Not Specified
        Voltage: <span class="token number">1.2</span> V
        External Clock: <span class="token number">5866</span> MHz
        Max Speed: <span class="token number">4400</span> MHz
        Current Speed: Unknown
        Status: Unpopulated
        Upgrade: ZIF Socket
        L1 Cache Handle: Not Provided
        L2 Cache Handle: Not Provided
        L3 Cache Handle: Not Provided
        Serial Number: Not Specified
        Asset Tag: Not Specified
        Part Number: Not Specified
        Characteristics: None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看内存的插槽数，已经使用多少插槽。每条内存多大，已使用内存多大</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dmidecode<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-P</span> <span class="token parameter variable">-A5</span> <span class="token string">&quot;Memory\\s+Device&quot;</span><span class="token operator">|</span><span class="token function">grep</span> Size<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> Range 

<span class="token comment">#   Size: 2048 MB</span>
<span class="token comment">#   Size: 2048 MB</span>
<span class="token comment">#   Size: 4096 MB</span>
<span class="token comment">#   Size: No Module Installed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看内存支持的最大内存容量</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dmidecode<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-P</span> <span class="token string">&#39;Maximum\\s+Capacity&#39;</span>

<span class="token comment">#  Maximum Capacity: 16 GB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看内存的频率</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>dmidecode<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-A16</span> <span class="token string">&quot;Memory Device&quot;</span>

<span class="token comment">#   Memory Device</span>
<span class="token comment">#     Array Handle: 0x1000</span>
<span class="token comment">#     Error Information Handle: Not Provided</span>
<span class="token comment">#     Total Width: 72 bits</span>
<span class="token comment">#     Data Width: 64 bits</span>
<span class="token comment">#     Size: 2048 MB</span>
<span class="token comment">#     Form Factor: DIMM</span>
<span class="token comment">#     Set: 1</span>
<span class="token comment">#     Locator: DIMM_A1</span>
<span class="token comment">#     Bank Locator: Not Specified</span>
<span class="token comment">#     Type: DDR3</span>
<span class="token comment">#     Type Detail: Synchronous Unbuffered (Unregistered)</span>
<span class="token comment">#     Speed: 1333 MHz</span>
<span class="token comment">#     Manufacturer: 00CE000080CE</span>
<span class="token comment">#     Serial Number: 4830F3E1</span>
<span class="token comment">#     Asset Tag: 01093200</span>
<span class="token comment">#     Part Number: M391B5673EH1-CH9</span>
<span class="token comment">#   --</span>
<span class="token comment">#   Memory Device</span>
<span class="token comment">#     Array Handle: 0x1000</span>
<span class="token comment">#     Error Information Handle: Not Provided</span>
<span class="token comment">#     Total Width: 72 bits</span>
<span class="token comment">#     Data Width: 64 bits</span>
<span class="token comment">#     Size: 2048 MB</span>
<span class="token comment">#     Form Factor: DIMM</span>
<span class="token comment">#     Set: 1</span>
<span class="token comment">#     Locator: DIMM_A2</span>
<span class="token comment">#     Bank Locator: Not Specified</span>
<span class="token comment">#     Type: DDR3</span>
<span class="token comment">#     Type Detail: Synchronous Unbuffered (Unregistered)</span>
<span class="token comment">#     Speed: 1333 MHz</span>
<span class="token comment">#     Manufacturer: 00AD000080AD</span>
<span class="token comment">#     Serial Number: 1BA1F0B5</span>
<span class="token comment">#     Asset Tag: 01110900</span>
<span class="token comment">#     Part Number: HMT325U7BFR8C-H9</span>
<span class="token comment">#   --</span>

dmidecode<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-A16</span> <span class="token string">&quot;Memory Device&quot;</span><span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&#39;Speed&#39;</span>

<span class="token comment">#  Speed: 1333 MHz</span>
<span class="token comment">#  Speed: 1333 MHz</span>
<span class="token comment">#  Speed: 1333 MHz</span>
<span class="token comment">#  Speed: Unknown</span>

\`\`\`shell



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),t=[l];function c(o,p){return s(),e("div",null,t)}const m=n(i,[["render",c],["__file","dmidecode.html.vue"]]),u=JSON.parse('{"path":"/command/linux/dmidecode.html","title":"dmidecode","lang":"zh-CN","frontmatter":{"description":"dmidecode 在Linux系统下获取有关硬件方面的信息 补充说明 dmidecode命令 可以让你在Linux系统下获取有关硬件方面的信息。dmidecode的作用是将DMI数据库中的信息解码，以可读的文本方式显示。由于DMI信息可以人为修改，因此里面的信息不一定是系统准确的信息。dmidecode遵循SMBIOS/DMI标准，其输出的信息包括B...","head":[["meta",{"property":"og:url","content":"https://baymaxcoding.github.io/command/linux/dmidecode.html"}],["meta",{"property":"og:site_name","content":"BaymaxCoding"}],["meta",{"property":"og:title","content":"dmidecode"}],["meta",{"property":"og:description","content":"dmidecode 在Linux系统下获取有关硬件方面的信息 补充说明 dmidecode命令 可以让你在Linux系统下获取有关硬件方面的信息。dmidecode的作用是将DMI数据库中的信息解码，以可读的文本方式显示。由于DMI信息可以人为修改，因此里面的信息不一定是系统准确的信息。dmidecode遵循SMBIOS/DMI标准，其输出的信息包括B..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T04:24:50.000Z"}],["meta",{"property":"article:author","content":"BaymaxCoding"}],["meta",{"property":"article:modified_time","content":"2024-04-12T04:24:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dmidecode\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-12T04:24:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"BaymaxCoding\\",\\"url\\":\\"https://baymaxcoding.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"补充说明","slug":"补充说明","link":"#补充说明","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":3,"title":"实例","slug":"实例","link":"#实例","children":[]}]}],"git":{"createdTime":1712895890000,"updatedTime":1712895890000,"contributors":[{"name":"BaymaxCoding","email":"BRemail2324996822@163.com","commits":1}]},"readingTime":{"minutes":4.7,"words":1409},"filePathRelative":"command/linux/dmidecode.md","localizedDate":"2024年4月12日","autoDesc":true}');export{m as comp,u as data};