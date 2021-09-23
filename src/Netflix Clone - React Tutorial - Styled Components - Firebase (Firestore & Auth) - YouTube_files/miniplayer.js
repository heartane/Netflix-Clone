(function(g){var window=this;'use strict';var A6=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.ke=!1;this.player=a;this.T(a,"minimized",this.pg);this.T(a,"onStateChange",this.nF)},B6=function(a){g.dN.call(this,a);
this.i=new A6(this.player);this.i.hide();g.SM(this.player,this.i.element,4);a.Ce()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(A6,g.W);g.k=A6.prototype;
g.k.tD=function(){this.tooltip=new g.BQ(this.player,this);g.J(this,this.tooltip);g.SM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.lc=new g.XN(this.player);g.J(this,this.lc);this.xg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.J(this,this.xg);this.xg.Ea(this.element);this.T(this.xg.element,"click",this.vz);var a=new g.W({G:"button",Ha:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\ub2eb\uae30"},U:[g.cL()]});g.J(this,a);a.Ea(this.xg.element);this.T(a.element,"click",
this.ji);a=new g.U1(this.player,this);g.J(this,a);a.Ea(this.xg.element);this.Zo=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.J(this,this.Zo);this.Zo.Ea(this.xg.element);this.T(this.Zo.element,"click",this.vz);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,b);b.Ea(this.Zo.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ea(this.Zo.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,c);c.Ea(this.Zo.element);this.QL=
new g.uP(this.player,this,!1);g.J(this,this.QL);this.QL.Ea(b.element);b=new g.sP(this.player,this);g.J(this,b);b.Ea(a.element);this.nextButton=new g.uP(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ea(c.element);this.Ag=new g.nQ(this.player,this);g.J(this,this.Ag);this.Ag.Ea(this.xg.element);this.Kc=new g.AP(this.player,this);g.J(this,this.Kc);g.SM(this.player,this.Kc.element,4);this.gz=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.J(this,this.gz);g.SM(this.player,this.gz.element,
4);a=new g.W({G:"button",Ha:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"\ub2eb\uae30"},U:[g.cL()]});g.J(this,a);a.Ea(this.gz.element);this.T(a.element,"click",this.ji);a=new g.W({G:"button",Ha:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"\ub2eb\uae30"},U:[g.hL()]});g.J(this,a);a.Ea(this.gz.element);this.T(a.element,"click",this.nU);this.T(this.player,"presentingplayerstatechange",this.Ic);this.T(this.player,"appresize",this.wb);this.T(this.player,"fullscreentoggled",
this.wb);this.wb()};
g.k.show=function(){this.Bd=new g.zq(this.Rp,null,this);this.Bd.start();this.ke||(this.tD(),this.ke=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Kc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Bd&&(this.Bd.dispose(),this.Bd=void 0);g.W.prototype.hide.call(this);this.player.Ce()||(this.ke&&this.Kc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Bd&&(this.Bd.dispose(),this.Bd=void 0);g.W.prototype.ya.call(this)};
g.k.ji=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.nU=function(){this.player.playVideo()};
g.k.vz=function(a){if(a.target===this.xg.element||a.target===this.Zo.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.fK(this.player.vb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.k.pg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Ce())};
g.k.jd=function(){this.Kc.Nb();this.Ag.Nb()};
g.k.Rp=function(){this.jd();this.Bd&&this.Bd.start()};
g.k.Ic=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.wb=function(){g.NP(this.Kc,0,this.player.eb().getPlayerSize().width,!1);g.BP(this.Kc)};
g.k.nF=function(a){this.player.Ce()&&(0===a?this.hide():this.show())};
g.k.dc=function(){return this.tooltip};
g.k.Ke=function(){return!1};
g.k.gf=function(){return!1};
g.k.Zh=function(){return!1};
g.k.cA=function(){};
g.k.Pm=function(){};
g.k.wr=function(){};
g.k.jn=function(){return null};
g.k.Yi=function(){return new g.Dl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Yp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Zl(a);if(b){c=g.Kq(b,"ytp-prev-button")||g.Kq(b,"ytp-next-button");var m=g.Kq(b,"ytp-play-button"),n=g.Kq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Xl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Kq(b,"ytp-miniplayer-button-top-left"),f=g.Xl(b,this.element),b=g.Zl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.$f(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Mk=function(){};
g.k.hk=function(){return!1};g.w(B6,g.dN);B6.prototype.create=function(){};
B6.prototype.Bi=function(){return!1};
B6.prototype.load=function(){this.player.hideControls();this.i.show()};
B6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.cN("miniplayer",B6);})(_yt_player);
