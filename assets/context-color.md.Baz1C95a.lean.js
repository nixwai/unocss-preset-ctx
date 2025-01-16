import{T as o,a as r,b as p,c,d,e as k,f as u,g as m,h as g,i as b}from"./chunks/base.EuCSJCo7.js";import{Q as l}from"./chunks/index.B9nQk4HH.js";import{o as y,c as E,a0 as n,G as s,w as e,k as a,j as h,a as C,B as F}from"./chunks/framework.BFGFFC7y.js";const z=JSON.parse('{"title":"Color (ctx-c)","description":"","frontmatter":{},"headers":[],"relativePath":"context-color.md","filePath":"en/context-color.md"}'),v={name:"context-color.md"},x=Object.assign(v,{setup(X){return(B,i)=>{const t=F("ClientOnly");return y(),E("div",null,[i[0]||(i[0]=n('<h1 id="color-ctx-c" tabindex="-1">Color (ctx-c) <a class="header-anchor" href="#color-ctx-c" aria-label="Permalink to &quot;Color (ctx-c)&quot;">​</a></h1><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><p>Define a CSS variable in the element&#39;s <code>class</code> using the format <code>ctx-c-${name}_${color}</code>. This creates a CSS variable named <code>ctx-c-${name}</code> with the value <code>${color}</code>. Subsequent <code>class</code> entries within this element can then use <code>ctx-c-${name}</code> as a color value.</p>',3)),s(t,null,{default:e(()=>[s(a(l),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(o)},{vue:e(()=>[s(r)]),_:1},8,["vueCode"])]),_:1}),i[1]||(i[1]=n('<h2 id="opacity" tabindex="-1">Opacity <a class="header-anchor" href="#opacity" aria-label="Permalink to &quot;Opacity&quot;">​</a></h2><p>The method of controlling opacity in <code>unocss</code> is also applicable in <code>ctx-c</code>. You can append the opacity value to the preset name when defining or using it.</p><p>Additionally, you can modify the opacity of properties using <code>ctx-op-${name}-${num}</code> for elements that use <code>ctx-c-${name}</code>, with a lower priority compared to directly appending a suffix to the property.</p>',3)),s(t,null,{default:e(()=>[s(a(l),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(p)},{vue:e(()=>[s(c)]),_:1},8,["vueCode"])]),_:1}),i[2]||(i[2]=n('<h2 id="brightness" tabindex="-1">Brightness <a class="header-anchor" href="#brightness" aria-label="Permalink to &quot;Brightness&quot;">​</a></h2><p>You can control the brightness of colors by adding a suffix <code>-${num}</code> after properties using <code>ctx-c-${name}</code>. The brightness is based on <code>500</code>, where smaller values make the color brighter and larger values make it darker.</p><p>Additionally, you can modify the brightness of properties using <code>ctx-deg-${name}-${num}</code> for elements that use <code>ctx-c-${name}</code>, with a lower priority compared to directly appending a suffix to the property.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>The actual range of adjusted color brightness will be limited between 15% and 95%.</p></div>',4)),s(t,null,{default:e(()=>[s(a(l),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(d)},{vue:e(()=>[s(k)]),_:1},8,["vueCode"])]),_:1}),i[3]||(i[3]=n('<h2 id="reverse-brightness" tabindex="-1">Reverse Brightness <a class="header-anchor" href="#reverse-brightness" aria-label="Permalink to &quot;Reverse Brightness&quot;">​</a></h2><p>When using the <code>ctx</code> method to control color brightness, you can use <code>ctx-r-y</code> to invert the brightness, making the color brighter with larger values and darker with smaller values. Using <code>ctx-r-${name}-y</code> allows you to specify the inversion of brightness for a particular color name only.</p><p>If you use <code>ctx-r-n</code>, it indicates that the inversion should be canceled.</p>',3)),s(t,null,{default:e(()=>[s(a(l),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(u)},{vue:e(()=>[s(m)]),_:1},8,["vueCode"])]),_:1}),i[4]||(i[4]=h("h2",{id:"multiple-assignment",tabindex:"-1"},[C("Multiple Assignment "),h("a",{class:"header-anchor",href:"#multiple-assignment","aria-label":'Permalink to "Multiple Assignment"'},"​")],-1)),i[5]||(i[5]=h("p",null,"Color variables allow you to assign values using other color variables, which makes your colors more flexible, but also more complex.",-1)),s(t,null,{default:e(()=>[s(a(l),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:a(g)},{vue:e(()=>[s(b)]),_:1},8,["vueCode"])]),_:1}),i[6]||(i[6]=n(`<h2 id="obtaining-raw-css-color-variables" tabindex="-1">Obtaining Raw CSS Color Variables <a class="header-anchor" href="#obtaining-raw-css-color-variables" aria-label="Permalink to &quot;Obtaining Raw CSS Color Variables&quot;">​</a></h2><p>The preset provides the <code>resolveCtxColor</code> method, which can directly retrieve the value of variables generated by <code>ctx-c-\${name}_\${color}</code>. This might assist you in defining global color variables.</p><p>The prefix <code>ctx-c-</code> is optional. If <code>color</code> is a theme color, you must pass unocss&#39;s <code>theme</code> as the second parameter.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig, presetUno } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;unocss&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { presetCtx, resolveCtxColor } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;unocss-preset-ctx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  presets: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetUno</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">presetCtx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  preflights: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      getCSS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctxColor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> resolveCtxColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tt_primary&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, theme);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ctxColor) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            :root {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">entries</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctxColor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">k</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">};\`</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          \`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,4))])}}});export{z as __pageData,x as default};