(function(){var t,k,n,d,c,g,$,f,B=[].slice;function e(){this.commonWhiteList="kbd|b|i|strong|em|sup|sub|br|code|del|a|hr|small",this.blockHtmlTags="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|address|form|fieldset|iframe|hr|legend|article|section|nav|aside|hgroup|header|footer|figcaption|svg|script|noscript",this.specialWhiteList={table:"table|tbody|thead|tfoot|tr|td|th"},this.hooks={},this.html=!1,this.line=!1,this.blockParsers=[["code",10],["shtml",20],["pre",30],["ahtml",40],["shr",50],["list",60],["math",70],["html",80],["footnote",90],["definition",100],["quote",110],["table",120],["sh",130],["mh",140],["dhr",150],["default",9999]],this.parsers={}}f=function(t){return t.charAt(0).toUpperCase()+t.substring(1)},c=function(t){return t.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},g=function(t,e,r){var n,s,l,i,o,a;if(t instanceof Array)if(e instanceof Array)for(n=s=0,i=t.length;s<i;n=++s)a=t[n],r=g(a,e[n],r);else for(l=0,o=t.length;l<o;l++)a=t[l],r=g(a,e,r);else t=c(t),r=r.replace(new RegExp(t,"g"),e.replace(/\$/g,"$$$$"));return r},d=function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},$=function(t,e){var r,n,s,l,i;if(null==e&&(e=null),null==e)return t.replace(/^\s*/,"").replace(/\s*$/,"");for(i="",n=s=0,l=e.length-1;0<=l?s<=l:l<=s;n=0<=l?++s:--s)r=e[n],i+=c(r);return i="["+i+"]*",t.replace(new RegExp("^"+i),"").replace(new RegExp(i+"$"),"")},k=function(t){var e,r,n,s=[];if(t instanceof Array)for(r=e=0,n=t.length;e<n;r=++e)t[r],s.push(r);else for(r in t)s.push(r);return s},n=function(t){var e,r,n,s,l=[];if(t instanceof Array)for(r=0,n=t.length;r<n;r++)s=t[r],l.push(s);else for(e in t)s=t[e],l.push(s);return l},e.prototype.makeHtml=function(t){var e,r,n,s,l;for(this.footnotes=[],this.definitions={},this.holders={},this.uniqid=Math.ceil(1e7*Math.random())+Math.ceil(1e7*Math.random()),this.id=0,this.blockParsers.sort(function(t,e){return t[1]<e[1]?-1:1}),e=0,r=(l=this.blockParsers).length;e<r;e++)n=(s=l[e])[0],void 0!==s[2]?this.parsers[n]=s[2]:this.parsers[n]=this["parseBlock"+f(n)].bind(this);return t=this.initText(t),t=this.parse(t),t=this.makeFootnotes(t),t=this.optimizeLines(t),this.call("makeHtml",t)},e.prototype.enableHtml=function(t){this.html=null==t||t},e.prototype.enableLine=function(t){this.line=null==t||t},e.prototype.hook=function(t,e){return null==this.hooks[t]&&(this.hooks[t]=[]),this.hooks[t].push(e)},e.prototype.makeHolder=function(t){var e="|\r"+this.uniqid+this.id+"\r|";return this.id+=1,this.holders[e]=t,e},e.prototype.initText=function(t){return t.replace(/\t/g,"    ").replace(/\r/g,"").replace(/(\u000A|\u000D|\u2028|\u2029)/g,"\n")},e.prototype.makeFootnotes=function(t){var e,r;if(0<this.footnotes.length){for(t+='<div class="footnotes"><hr><ol>',e=1;r=this.footnotes.shift();)"string"==typeof r?r+=' <a href="#fnref-'+e+'" class="footnote-backref">&#8617;</a>':(r[r.length-1]+=' <a href="#fnref-'+e+'" class="footnote-backref">&#8617;</a>',r=1<r.length?this.parse(r.join("\n")):this.parseInline(r[0])),t+='<li id="fn-'+e+'">'+r+"</li>",e+=1;t+="</ol></div>"}return t},e.prototype.parse=function(t,e,r){var n,s,l,i,o,a,c,h,p,u;for(null==e&&(e=!1),null==r&&(r=0),a=[],n=this.parseBlock(t,a),l="",e&&1===n.length&&"normal"===n[0][0]&&(n[0][3]=!0),i=0,o=n.length;i<o;i++)p=(s=n[i])[0],h=s[1],c=s[2],u=s[3],s=a.slice(h,c+1),p="parse"+f(p),s=this.call("before"+f(p),s,u),c=this[p](s,u,h+r,c+r),l+=this.call("after"+f(p),c,u);return l},e.prototype.call=function(){var t,e,r,n=arguments[0],s=2<=arguments.length?B.call(arguments,1):[],l=s[0];if(null==this.hooks[n])return l;for(t=0,e=(r=this.hooks[n]).length;t<e;t++)l=r[t].apply(this,s),s[0]=l;return l},e.prototype.releaseHolder=function(t,e){var r;for(null==e&&(e=!0),r=0;0<=t.indexOf("\r")&&r<10;)t=g(k(this.holders),n(this.holders),t),r+=1;return e&&(this.holders={}),t},e.prototype.markLine=function(t,e){return null==e&&(e=-1),this.line?'<span class="line" data-start="'+t+'" data-end="'+(e=e<0?t:e)+'" data-id="'+this.uniqid+'"></span>':""},e.prototype.markLines=function(t,e){var r,n=-1;return this.line?t.map((r=this,function(t){return n+=1,r.markLine(e+n)+t})):t},e.prototype.optimizeLines=function(t){var r=0,e=new RegExp('class="line" data\\-start="([0-9]+)" data\\-end="([0-9]+)" (data\\-id="'+this.uniqid+'")',"g");return this.line?t.replace(e,function(){var t=1<=arguments.length?B.call(arguments,0):[],e=r!==parseInt(t[1])?'class="line" data-start="'+r+'" data-start-original="'+t[1]+'" data-end="'+t[2]+'" '+t[3]:t[0];return r=1+parseInt(t[2]),e}):t},e.prototype.parseInline=function(t,e,r,n){var s,l,i,o,a,c,h,p,u,f,k,m;return null==e&&(e=""),null==r&&(r=!0),null==n&&(n=!0),t=(t=(t=(t=(t=(t=this.call("beforeParseInline",t)).replace(/(^|[^\\])(`+)(.+?)\2/gm,(s=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return t[1]+s.makeHolder("<code>"+d(t[3])+"</code>")}))).replace(/(^|[^\\])(\$+)(.+?)\2/gm,(l=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return t[1]+l.makeHolder(t[2]+d(t[3])+t[2])}))).replace(/\\(.)/g,(i=this,function(){var t=1<=arguments.length?B.call(arguments,0):[],e=t[1].match(/^[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]$/)?"":"\\",t=d(t[1]);return t=t.replace(/\$/g,"&dollar;"),i.makeHolder(e+t)}))).replace(/<(https?:\/\/.+)>/gi,(o=this,function(){var t=1<=arguments.length?B.call(arguments,0):[],e=o.cleanUrl(t[1]),t=o.call("parseLink",t[1]);return o.makeHolder('<a href="'+e+'">'+t+"</a>")}))).replace(/<(\/?)([a-z0-9-]+)(\s+[^>]*)?>/gi,(a=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return a.html||0<=("|"+a.commonWhiteList+"|"+e+"|").indexOf("|"+t[2].toLowerCase()+"|")?a.makeHolder(t[0]):a.makeHolder(d(t[0]))})),this.html&&(t=t.replace(/<!\-\-(.*?)\-\->/g,(c=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return c.makeHolder(t[0])}))),t=(t=(t=(t=(t=(t=g(["<",">"],["&lt;","&gt;"],t)).replace(/\[\^((?:[^\]]|\\\]|\\\[)+?)\]/g,(h=this,function(){var t=1<=arguments.length?B.call(arguments,0):[],e=h.footnotes.indexOf(t[1]);return e<0&&(e=h.footnotes.length+1,h.footnotes.push(h.parseInline(t[1],"",!1))),h.makeHolder('<sup id="fnref-'+e+'"><a href="#fn-'+e+'" class="footnote-ref">'+e+"</a></sup>")}))).replace(/!\[((?:[^\]]|\\\]|\\\[)*?)\]\(((?:[^\)]|\\\)|\\\()+?)\)/g,(p=this,function(){var t=1<=arguments.length?B.call(arguments,0):[],e=d(p.escapeBracket(t[1])),t=p.escapeBracket(t[2]);return t=p.cleanUrl(t),p.makeHolder('<img src="'+t+'" alt="'+e+'" title="'+e+'">')}))).replace(/!\[((?:[^\]]|\\\]|\\\[)*?)\]\[((?:[^\]]|\\\]|\\\[)+?)\]/g,(u=this,function(){var t=1<=arguments.length?B.call(arguments,0):[],e=d(u.escapeBracket(t[1])),e=null!=u.definitions[t[2]]?'<img src="'+u.definitions[t[2]]+'" alt="'+e+'" title="'+e+'">':e;return u.makeHolder(e)}))).replace(/\[((?:[^\]]|\\\]|\\\[)+?)\]\(((?:[^\)]|\\\)|\\\()+?)\)/g,(f=this,function(){var t=1<=arguments.length?B.call(arguments,0):[],e=f.parseInline(f.escapeBracket(t[1]),"",!1,!1),t=f.escapeBracket(t[2]);return t=f.cleanUrl(t),f.makeHolder('<a href="'+t+'">'+e+"</a>")}))).replace(/\[((?:[^\]]|\\\]|\\\[)+?)\]\[((?:[^\]]|\\\]|\\\[)+?)\]/g,(k=this,function(){var t=1<=arguments.length?B.call(arguments,0):[],e=k.parseInline(k.escapeBracket(t[1]),"",!1,!1),e=null!=k.definitions[t[2]]?'<a href="'+k.definitions[t[2]]+'">'+e+"</a>":e;return k.makeHolder(e)})),t=(t=this.parseInlineCallback(t)).replace(/<([_a-z0-9-\.\+]+@[^@]+\.[a-z]{2,})>/gi,'<a href="mailto:$1">$1</a>'),n&&(t=t.replace(/(^|[^\"])((https?):\S+)($|[^\"])/gi,(m=this,function(){var t=1<=arguments.length?B.call(arguments,0):[],e=m.call("parseLink",t[2]);return t[1]+'<a href="'+t[2]+'">'+e+"</a>"+t[4]}))),t=this.call("afterParseInlineBeforeRelease",t),t=this.releaseHolder(t,r),t=this.call("afterParseInline",t)},e.prototype.parseInlineCallback=function(t){var e,r,n,s,l,i,o;return t=(t=(t=(t=(t=(t=(t=t.replace(/(\*{3})((?:.|\r)+?)\1/gm,(e=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return"<strong><em>"+e.parseInlineCallback(t[2])+"</em></strong>"}))).replace(/(\*{2})((?:.|\r)+?)\1/gm,(r=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return"<strong>"+r.parseInlineCallback(t[2])+"</strong>"}))).replace(/(\*)((?:.|\r)+?)\1/gm,(n=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return"<em>"+n.parseInlineCallback(t[2])+"</em>"}))).replace(/(\s+|^)(_{3})((?:.|\r)+?)\2(\s+|$)/gm,(s=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return t[1]+"<strong><em>"+s.parseInlineCallback(t[3])+"</em></strong>"+t[4]}))).replace(/(\s+|^)(_{2})((?:.|\r)+?)\2(\s+|$)/gm,(l=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return t[1]+"<strong>"+l.parseInlineCallback(t[3])+"</strong>"+t[4]}))).replace(/(\s+|^)(_)((?:.|\r)+?)\2(\s+|$)/gm,(i=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return t[1]+"<em>"+i.parseInlineCallback(t[3])+"</em>"+t[4]}))).replace(/(~{2})((?:.|\r)+?)\1/gm,(o=this,function(){var t=1<=arguments.length?B.call(arguments,0):[];return"<del>"+o.parseInlineCallback(t[2])+"</del>"}))},e.prototype.parseBlock=function(t,e){for(var r,n,s,l,i,o,a,c,h,p=t.split("\n"),u=0,f=p.length;u<f;u++)i=p[u],e.push(i);for(this.blocks=[],this.current="normal",this.pos=-1,h={special:k(this.specialWhiteList).join("|"),empty:0,html:!1},n=s=0,l=e.length;s<l;n=++s)if(i=e[n],r=this.getBlock(),null!=r&&(r=r.slice(0)),"normal"===this.current||this.parsers[this.current](r,n,i,h,e))for(o in c=this.parsers)if(a=c[o],o!==this.current&&!a(r,n,i,h,e))break;return this.optimizeBlocks(this.blocks,e)},e.prototype.parseBlockList=function(t,e,r,n){var s;if(this.isBlock("list")&&!r.match(/^\s*\[((?:[^\]]|\\\]|\\\[)+?)\]:\s*(.+)$/)){if(r.match(/^(\s*)(~{3,}|`{3,})([^`~]*)$/i))return!0;if(n.empty<=1&&(s=r.match(/^(\s*)\S+/))&&s[1].length>=t[3][0]+n.empty)return n.empty=0,this.setBlock(e),!1;if(r.match(/^\s*$/)&&0===n.empty)return n.empty+=1,this.setBlock(e),!1}return!(s=r.match(/^(\s*)((?:[0-9]+\.)|\-|\+|\*)\s+/i))||(r=s[1].length,s=(n.empty=0)<="+-*".indexOf(s[2])?"ul":"ol",!this.isBlock("list")||r<t[3][0]||r===t[3][0]&&s!==t[3][1]?this.startBlock("list",e,[r,s]):this.setBlock(e),!1)},e.prototype.parseBlockCode=function(t,e,r,n){var s;return(r=r.match(/^(\s*)(~{3,}|`{3,})([^`~]*)$/i))?(this.isBlock("code")?(s=t[3][2])?this.combineBlock().setBlock(e):this.setBlock(e).endBlock():(s=!1,this.isBlock("list")&&(t=t[3][0],s=r[1].length>=t+n.empty),this.startBlock("code",e,[r[1],r[3],s])),!1):!this.isBlock("code")||(this.setBlock(e),!1)},e.prototype.parseBlockShtml=function(t,e,r,n){if(this.html){if(r.match(/^(\s*)!!!(\s*)$/))return this.isBlock("shtml")?this.setBlock(e).endBlock():this.startBlock("shtml",e),!1;if(this.isBlock("shtml"))return this.setBlock(e),!1}return!0},e.prototype.parseBlockAhtml=function(t,e,r,n){var s,l,i,o;if(this.html)if(o=new RegExp("^\\s*<("+this.blockHtmlTags+")(\\s+[^>]*)?>","i"),o=r.match(o)){if(this.isBlock("ahtml"))return this.setBlock(e),!1;if(void 0===o[2]||"/"!==o[2]){for(this.startBlock("ahtml",e),s=new RegExp("\\s*<("+this.blockHtmlTags+")(\\s+[^>]*)?>","ig");i=s.exec(r);)l=i[1];return 0<=r.indexOf("</"+l+">")?this.endBlock():n.html=l,!1}}else{if(n.html&&0<=r.indexOf("</"+n.html+">"))return this.setBlock(e).endBlock(),n.html=!1;if(this.isBlock("ahtml"))return this.setBlock(e),!1;if(o=r.match(/^\s*<!\-\-(.*?)\-\->\s*$/))return this.startBlock("ahtml",e).endBlock(),!1}return!0},e.prototype.parseBlockMath=function(t,e,r){return r.match(/^(\s*)\$\$(\s*)$/)?(this.isBlock("math")?this.setBlock(e).endBlock():this.startBlock("math",e),!1):!this.isBlock("math")||(this.setBlock(e),!1)},e.prototype.parseBlockPre=function(t,e,r,n){return r.match(/^ {4}/)?(this.isBlock("pre")?this.setBlock(e):this.startBlock("pre",e),!1):!this.isBlock("pre")||!r.match(/^\s*$/)||(this.setBlock(e),!1)},e.prototype.parseBlockHtml=function(t,e,r,n){var s,l;return(s=r.match(new RegExp("^\\s*<("+n.special+")(\\s+[^>]*)?>","i")))?(l=s[1].toLowerCase(),this.isBlock("html",l)||this.isBlock("pre")||this.startBlock("html",e,l),!1):(s=r.match(new RegExp("</("+n.special+")>\\s*$","i")))?(l=s[1].toLowerCase(),this.isBlock("html",l)&&this.setBlock(e).endBlock(),!1):!this.isBlock("html")||(this.setBlock(e),!1)},e.prototype.parseBlockFootnote=function(t,e,r){var n;return!(n=r.match(/^\[\^((?:[^\]]|\\\]|\\\[)+?)\]:/))||(r=n[0].length-1,this.startBlock("footnote",e,[r,n[1]]),!1)},e.prototype.parseBlockDefinition=function(t,e,r){return!(r=r.match(/^\s*\[((?:[^\]]|\\\]|\\\[)+?)\]:\s*(.+)$/))||(this.definitions[r[1]]=this.cleanUrl(r[2]),this.startBlock("definition",e).endBlock(),!1)},e.prototype.parseBlockQuote=function(t,e,r){return!(r=r.match(/^(\s*)>/))||(this.isBlock("list")&&0<r[1].length||this.isBlock("quote")?this.setBlock(e):this.startBlock("quote",e),!1)},e.prototype.parseBlockTable=function(t,e,r,n,s){var l,i,o,a,c,h;if(c=r.match(/^((?:(?:(?:\||\+)(?:[ :]*\-+[ :]*)(?:\||\+))|(?:(?:[ :]*\-+[ :]*)(?:\||\+)(?:[ :]*\-+[ :]*))|(?:(?:[ :]*\-+[ :]*)(?:\||\+))|(?:(?:\||\+)(?:[ :]*\-+[ :]*)))+)$/)){if(this.isBlock("table"))t[3][0].push(t[3][2]),t[3][2]+=1,this.setBlock(e,t[3]);else{for(r=0,null==t||"normal"!==t[0]||s[t[2]].match(/^\s*$/)?this.startBlock("table",e):(r=1,this.backBlock(1,"table")),"|"===c[1][0]&&(c[1]=c[1].substring(1),"|"===c[1][c[1].length-1]&&(c[1]=c[1].substring(0,c[1].length-1))),i=[],o=0,a=(h=c[1].split(/\+|\|/)).length;o<a;o++)l="none",(c=h[o].match(/^\s*(:?)\-+(:?)\s*$/))&&(c[1]&&c[2]?l="center":c[1]?l="left":c[2]&&(l="right")),i.push(l);this.setBlock(e,[[r],i,r+1])}return!1}return!0},e.prototype.parseBlockSh=function(t,e,r){return!(r=r.match(/^(#+)(.*)$/))||(r=Math.min(r[1].length,6),this.startBlock("sh",e,r).endBlock(),!1)},e.prototype.parseBlockMh=function(t,e,r,n,s){return!((r=r.match(/^\s*((=|-){2,})\s*$/))&&null!=t&&"normal"===t[0]&&!s[t[2]].match(/^\s*$/))||(this.isBlock("normal")?this.backBlock(1,"mh","="===r[1][0]?1:2).setBlock(e).endBlock():this.startBlock("normal",e),!1)},e.prototype.parseBlockShr=function(t,e,r){return!r.match(/^(\* *){3,}\s*$/)||(this.startBlock("hr",e).endBlock(),!1)},e.prototype.parseBlockDhr=function(t,e,r){return!r.match(/^(- *){3,}\s*$/)||(this.startBlock("hr",e).endBlock(),!1)},e.prototype.parseBlockDefault=function(t,e,r,n){return this.isBlock("footnote")?r.match(/^(\s*)/)[1].length>=t[3][0]?this.setBlock(e):this.startBlock("normal",e):this.isBlock("table")?0<=r.indexOf("|")?(t[3][2]+=1,this.setBlock(e,t[3])):this.startBlock("normal",e):this.isBlock("quote")?r.match(/^(\s*)$/)?this.startBlock("normal",e):this.setBlock(e):null==t||"normal"!==t[0]?this.startBlock("normal",e):this.setBlock(e),!0},e.prototype.optimizeBlocks=function(t,e){var r,n,s,l,i,o,a,c,h=t.slice(0),p=e.slice(0);for(h=this.call("beforeOptimizeBlocks",h,p),s=0;null!=h[s];)l=!1,r=h[s],o=null!=h[s-1]?h[s-1]:null,i=null!=h[s+1]?h[s+1]:null,c=r[0],n=r[1],a=r[2],"pre"===c&&p.slice(r[1],r[2]+1).reduce(function(t,e){return e.match(/^\s*$/)&&t},!0)&&(r[0]=c="normal"),"normal"===c&&(c=["list","quote"],n===a&&p[n].match(/^\s*$/)&&null!=o&&null!=i&&o[0]===i[0]&&0<=c.indexOf(o[0])&&("list"!==o[0]||o[3][0]===i[3][0]&&o[3][1]===i[3][1])&&(h[s-1]=[o[0],o[1],i[2],null!=o[3]?o[3]:null],h.splice(s,2),l=!0)),l||(s+=1);return this.call("afterOptimizeBlocks",h,p)},e.prototype.parseCode=function(t,e,r){var n,s,l,i=e[0],o=e[1];return o=$(o),n=i.length,o.match(/^[_a-z0-9-\+\#\:\.]+$/i)?1<(e=o.split(":")).length&&(o=e[0],l=e[1],o=$(o),l=$(l)):o=null,s=!0,t=t.slice(1,-1).map(function(t){return t=t.replace(new RegExp("/^[ ]{"+n+"}/"),""),s&&!t.match(/^\s*$/)&&(s=!1),d(t)}),r=this.markLines(t,r+1).join("\n"),s?"":"<pre><code"+(o?' class="'+o+'"':"")+(l?' rel="'+l+'"':"")+">"+r+"</code></pre>"},e.prototype.parsePre=function(t,e,r){return t=t.map(function(t){return d(t.substring(4))}),(r=this.markLines(t,r).join("\n")).match(/^\s*$/)?"":"<pre><code>"+r+"</code></pre>"},e.prototype.parseAhtml=function(t,e,r){return $(this.markLines(t,r).join("\n"))},e.prototype.parseShtml=function(t,e,r){return $(this.markLines(t.slice(1,-1),r+1).join("\n"))},e.prototype.parseMath=function(t,e,r,n){return"<p>"+this.markLine(r,n)+d(t.join("\n"))+"</p>"},e.prototype.parseSh=function(t,e,r,n){t=this.markLine(r,n)+this.parseInline($(t[0],"# "));return t.match(/^\s*$/)?"":"<h"+e+">"+t+"</h"+e+">"},e.prototype.parseMh=function(t,e,r,n){return this.parseSh(t,e,r,n)},e.prototype.parseQuote=function(t,e,r){return(t=(t=t.map(function(t){return t.replace(/^\s*> ?/,"")})).join("\n")).match(/^\s*$/)?"":"<blockquote>"+this.parse(t,!0,r)+"</blockquote>"},e.prototype.parseList=function(t,e,r){for(var n,s,l,i,o,a="",c=e[0],e=e[1],h=[],p=0,u=0,f=t.length;u<f;u++)(i=(l=t[u]).match(new RegExp("^(\\s{"+c+"})((?:[0-9]+\\.?)|\\-|\\+|\\*)(\\s+)(.*)$")))?(h.push([i[4]]),p=h.length-1):h[p].push(l.replace(new RegExp("^\\s{"+c+"}"),""));for(n=0,s=h.length;n<s;n++)o=h[n],a+="<li>"+this.parse(o.join("\n"),!0,r)+"</li>",r+=o.length;return"<"+e+">"+a+"</"+e+">"},e.prototype.parseTable=function(t,e,r){for(var n,s,l,i,o,a,c,h,p,u,f,k=e[0],m=e[1],d=0<k.length&&0<k.reduce(function(t,e){return e+t}),g="<table>",B=!d||null,b=!1,y=s=0,v=t.length;s<v;y=++s)if(a=t[y],0<=k.indexOf(y))d&&b&&(B=!(d=!1));else{for(b=!0,"|"===(a=$(a))[0]&&"|"===(a=a.substring(1))[a.length-1]&&(a=a.substring(0,a.length-1)),n={},i=-1,l=0,o=(p=a.split("|").map(function(t){return t.match(/^\s*$/)?" ":$(t)})).length;l<o;l++)0<(h=p[l]).length?n[i+=1]=[null!=n[i]?n[i][0]+1:1,h]:null!=n[i]?n[i][0]+=1:n[0]=[1,h];for(y in d?g+="<thead>":B&&(g+="<tbody>"),g+="<tr",this.line&&(g+=' class="line" data-start="'+(r+y)+'" data-end="'+(r+y)+'" data-id="'+this.uniqid+'"'),g+=">",n)c=(u=n[y])[0],f=u[1],g+="<"+(u=d?"th":"td"),1<c&&(g+=' colspan="'+c+'"'),null!=m[y]&&"none"!==m[y]&&(g+=' align="'+m[y]+'"'),g+=">"+this.parseInline(f)+"</"+u+">";g+="</tr>",d?g+="</thead>":B=B&&!1}return null!==B&&(g+="</tbody>"),g+"</table>"},e.prototype.parseHr=function(t,e,r){return this.line?'<hr class="line" data-start="'+r+'" data-end="'+r+'">':"<hr>"},e.prototype.parseNormal=function(t,e,r){var n,s=0;return t=t.map((n=this,function(t){return(t=n.parseInline(t)).match(/^\s*$/)||(t=n.markLine(r+s)+t),s+=1,t})),(t=(t=(t=$(t.join("\n"))).replace(/(\n\s*){2,}/g,function(){return e=!1,"</p><p>"})).replace(/\n/g,"<br>")).match(/^\s*$/)?"":e?t:"<p>"+t+"</p>"},e.prototype.parseFootnote=function(t,e){e[0];var e=e[1],e=this.footnotes.indexOf(e);return 0<=e&&((t=t.slice(0))[0]=t[0].replace(/^\[\^((?:[^\]]|\]|\[)+?)\]:/,""),this.footnotes[e]=t),""},e.prototype.parseDefinition=function(){return""},e.prototype.parseHtml=function(t,e,r){var n;return t=t.map((n=this,function(t){return n.parseInline(t,null!=n.specialWhiteList[e]?n.specialWhiteList[e]:"")})),this.markLines(t,r).join("\n")},e.prototype.cleanUrl=function(t){var e;return(e=t.match(/^\s*((http|https|ftp|mailto):\S+)/i))||(e=t.match(/^\s*(\S+)/))?e[1]:"#"},e.prototype.escapeBracket=function(t){return g(["\\[","\\]","\\(","\\)"],["[","]","(",")"],t)},e.prototype.startBlock=function(t,e,r){return null==r&&(r=null),this.pos+=1,this.current=t,this.blocks.push([t,e,e,r]),this},e.prototype.endBlock=function(){return this.current="normal",this},e.prototype.isBlock=function(t,e){return null==e&&(e=null),this.current===t&&(null===e||this.blocks[this.pos][3]===e)},e.prototype.getBlock=function(){return null!=this.blocks[this.pos]?this.blocks[this.pos]:null},e.prototype.setBlock=function(t,e){return null==t&&(t=null),null==e&&(e=null),null!==t&&(this.blocks[this.pos][2]=t),null!==e&&(this.blocks[this.pos][3]=e),this},e.prototype.backBlock=function(t,e,r){var n;return null==r&&(r=null),this.pos<0?this.startBlock(e,0,r):(n=this.blocks[this.pos][2],this.blocks[this.pos][2]=n-t,r=[e,n-t+1,n,r],this.blocks[this.pos][1]<=this.blocks[this.pos][2]?(this.pos+=1,this.blocks.push(r)):this.blocks[this.pos]=r,this.current=e,this)},e.prototype.combineBlock=function(){var t,e;return this.pos<1||(e=this.blocks[this.pos-1].slice(0),t=this.blocks[this.pos].slice(0),e[2]=t[2],this.blocks[this.pos-1]=e,this.current=e[0],this.blocks=this.blocks.slice(0,-1),--this.pos),this},t=e,"undefined"!=typeof module&&null!==module?module.exports=t:"undefined"!=typeof window&&null!==window&&(window.HyperDown=t)}).call(this);