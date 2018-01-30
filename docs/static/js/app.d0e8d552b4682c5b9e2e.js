webpackJsonp([2],{0:function(e,t){},1:function(e,t){},"1/oy":function(e,t){},2:function(e,t){},3:function(e,t){},"8Y90":function(e,t){},ABl3:function(e,t){},D4uH:function(e,t,s){"use strict";var n={},o={name:"icon",props:{name:{type:String,validator:function(e){return e?e in n||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?n[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,s=e.height;return Math.max(t,s)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(e,s){var n="fa-"+(i++).toString(16);return t[s]=n,' id="'+n+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,s,n,o){var i=s||o;return i&&t[i]?"#"+t[i]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,s=0;this.$children.forEach(function(e){t=Math.max(t,e.width),s=Math.max(s,e.height)}),this.childrenWidth=t,this.childrenHeight=s,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(s-e.height)/2})}},register:function(e){for(var t in e){var s=e[t];s.paths||(s.paths=[]),s.d&&s.paths.push({d:s.d}),s.polygons||(s.polygons=[]),s.points&&s.polygons.push({points:s.points}),n[t]=s}},icons:n},i=870711;var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,n){return s("path",e._b({key:"path-"+n},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,n){return s("polygon",e._b({key:"polygon-"+n},"polygon",t,!1))}):e._e(),e._v("\b\n    "),e.icon&&e.icon.raw?[s("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},staticRenderFns:[]};var r=s("VU/8")(o,a,!1,function(e){s("KFyI")},null,null);t.a=r.exports},Id91:function(e,t){},KFyI:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},i=s("VU/8")({name:"App"},o,!1,null,null,null).exports,a=s("/ocq"),r={name:"TrainingTemplate",data:function(){return{showLessonList:"d-block",currentYear:(new Date).getFullYear(),audioPlayer:[],audioPlaying:!1,elapsedTime:0,remainingTime:0,trackLength:0,startedAudioPlayback:!1,scrubBar:0,scrubBarMax:0,percentageCompleted:0,currentLesson:"lesson-1",currentPage:1,pageCount:0,courseContentList:[{moduleTitle:"Module #1 Title",moduleID:"module1",active:!0,lessons:[{lessonID:"lesson-1",lessonTitle:"Lesson #1 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-2"},{lessonID:"lesson-2",lessonTitle:"Lesson #2 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-3"},{lessonID:"lesson-3",lessonTitle:"Lesson #3 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-4"}]},{moduleTitle:"Module #2 Title",moduleID:"module2",active:!1,lessons:[{lessonID:"lesson-4",lessonTitle:"Lesson #4 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-5"},{lessonID:"lesson-5",lessonTitle:"Lesson #5 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-6"},{lessonID:"lesson-6",lessonTitle:"Lesson #6 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-7"}]},{moduleTitle:"Module #3 Title",moduleID:"module3",active:!1,lessons:[{lessonID:"lesson-7",lessonTitle:"Lesson #7 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-8"},{lessonID:"lesson-8",lessonTitle:"Lesson #8 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-9"},{lessonID:"lesson-9",lessonTitle:"Lesson #9 Title",lessonComplete:!1,active:!1,nextLesson:"lesson-9"}]}],activeLesson:[],lessonContent:[{lessonID:"lesson-1",lessonType:"video",lessonTitle:"Lesson #1 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/countdown.mp4",posterImage:"./static/poster-image.png"},{lessonID:"lesson-2",lessonType:"pdf",lessonTitle:"Lesson #2 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/demo.pdf",posterImage:""},{lessonID:"lesson-3",lessonType:"audio",lessonTitle:"Lesson #3 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/tcm.mp3",posterImage:""},{lessonID:"lesson-4",lessonType:"video",lessonTitle:"Lesson #4 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/countdown.mp4",posterImage:"./static/poster-image.png"},{lessonID:"lesson-5",lessonType:"pdf",lessonTitle:"Lesson #5 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/demo.pdf",posterImage:""},{lessonID:"lesson-6",lessonType:"audio",lessonTitle:"Lesson #6 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/tcm.mp3",posterImage:""},{lessonID:"lesson-7",lessonType:"video",lessonTitle:"Lesson #7 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/countdown.mp4",posterImage:"./static/poster-image.png"},{lessonID:"lesson-8",lessonType:"pdf",lessonTitle:"Lesson #8 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/demo.pdf",posterImage:""},{lessonID:"lesson-9",lessonType:"audio",lessonTitle:"Lesson #9 Title",lessonDescription:"A short paragraph on what the person is going to learn in this lesson.",contentURL:"./static/tcm.mp3",posterImage:""}]}},created:function(){this.loadContent(this.currentLesson)},updated:function(){var e=document.getElementById("audioPlayer");e&&(this.audioPlayer=e)},methods:{toggleSidebarDisplay:function(){"d-none"===this.showLessonList?this.showLessonList="d-block":this.showLessonList="d-none"},loadContent:function(e){this.currentPage=1,this.pageCount=0,this.currentLesson=e;for(var t=0;t<this.lessonContent.length;t++)if(e===this.lessonContent[t].lessonID){this.activeLesson=this.lessonContent[t];break}for(var s=0;s<this.courseContentList.length;s++){this.courseContentList[s].active=!1;for(var n=0;n<this.courseContentList[s].lessons.length;n++)e===this.courseContentList[s].lessons[n].lessonID?(this.courseContentList[s].lessons[n].active=!0,this.courseContentList[s].active=!0):this.courseContentList[s].lessons[n].active=!1}this.calculateCompletedPercentage(),this.audioPlayer&&this.resetAudioPlayer()},completeLesson:function(e){for(var t=0;t<this.courseContentList.length;t++)for(var s=0;s<this.courseContentList[t].lessons.length;s++)if(e===this.courseContentList[t].lessons[s].lessonID){this.courseContentList[t].lessons[s].lessonComplete=!0,this.loadContent(this.courseContentList[t].lessons[s].nextLesson),this.calculateCompletedPercentage();break}},calculateCompletedPercentage:function(){for(var e=0,t=0,s=0;s<this.courseContentList.length;s++)for(var n=0;n<this.courseContentList[s].lessons.length;n++)!0===this.courseContentList[s].lessons[n].lessonComplete&&t++,e++;this.percentageCompleted=Math.round(t/e*100)},audioLoaded:function(){if(null!==this.audioPlayer){var e=void 0;isNaN(this.audioPlayer.duration)?e=setTimeout(this.audioLoaded,500):(clearTimeout(e),this.trackLength=this.formatTrackTime(Math.floor(this.audioPlayer.duration)),this.elapsedTime=this.formatTrackTime(this.audioPlayer.currentTime),this.scrubBarMax=this.audioPlayer.duration)}},audioPlayPause:function(){this.audioPlayer.paused?(this.audioPlayer.play(),this.audioPlaying=!0,this.startedAudioPlayback=!0):(this.audioPlayer.pause(),this.audioPlaying=!1)},onAudioTimeUpdate:function(){this.scrubBar=this.audioPlayer.currentTime,this.elapsedTime=this.formatTrackTime(this.audioPlayer.currentTime),this.remainingTime=this.formatTrackTime(this.audioPlayer.duration-this.audioPlayer.currentTime)},changeCurrentTrackTime:function(){this.audioPlayer.currentTime=this.scrubBar},resetAudioPlayer:function(){this.elapsedTime=0,this.remainingTime=0,this.audioPlayer.currentTime=0,this.startedAudioPlayback=!1,this.audioPlaying=!1},formatTrackTime:function(e){var t=Math.floor(e/60),s=Math.floor(e%60);return t+":"+(s=s>=10?s:"0"+s)},goToPreviousPage:function(){this.currentPage>1&&(this.currentPage=this.currentPage-1)},goToNextPage:function(){this.currentPage<this.pageCount&&(this.currentPage=this.currentPage+1)},goToFirstPage:function(){this.currentPage=1},goToLastPage:function(e){this.currentPage=e}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-container",{attrs:{fluid:""}},[s("b-row",{attrs:{id:"headerBar"}},[s("div",{staticClass:"d-block d-lg-none"},[s("b-dropdown",{attrs:{id:"smallScreenCourseContent",variant:"link",size:"lg","no-caret":""}},[s("template",{slot:"button-content"},[s("icon",{staticClass:"text-white",attrs:{name:"bars",scale:"1.5"}})],1),e._v(" "),s("div",{staticClass:"courseProgress"},[s("b-progress",{staticClass:"mb-3",attrs:{value:e.percentageCompleted,max:100,variant:"success"}}),e._v(" "),s("p",{staticClass:"text-center"},[s("strong",[e._v(e._s(e.percentageCompleted)+"% Completed")])])],1),e._v(" "),e._l(e.courseContentList,function(t){return s("div",{key:t.moduleTitle,attrs:{id:"smallScreenLessonList"}},[s("b-dropdown-item",{staticClass:"moduleTitle",attrs:{disabled:""}},[e._v(e._s(t.moduleTitle))]),e._v(" "),e._l(t.lessons,function(t){return s("div",{key:t.lessonTitle},[s("b-dropdown-item-button",{on:{click:function(s){e.loadContent(t.lessonID)}}},[s("div",{staticClass:"lessonIcon"},[t.active?s("icon",{staticClass:"playLessonIcon",attrs:{name:"play-circle-o",scale:"1.5"}}):t.lessonComplete?s("icon",{staticClass:"completedLessonIcon",attrs:{name:"check",scale:"1.5"}}):s("icon",{staticClass:"standardLessonIcon",attrs:{name:"circle-o",scale:"1.5"}})],1),e._v("\n              "+e._s(t.lessonTitle)+"\n            ")])],1)})],2)}),e._v(" "),s("div",{staticClass:"mb-5"})],2)],1),e._v(" "),s("div",{staticClass:"d-none d-lg-block"},[s("b-btn",{attrs:{id:"toggleCourseContent",variant:"link",size:"lg"},on:{click:function(t){e.toggleSidebarDisplay()}}},[s("icon",{attrs:{name:"bars",scale:"1.5"}})],1)],1),e._v(" "),s("h3",[e._v("Course Name")])]),e._v(" "),s("b-row",[s("div",{staticClass:"d-none d-lg-block"},[s("b-col",{class:e.showLessonList,attrs:{id:"lessonList"}},[s("div",{staticClass:"courseProgress"},[s("b-progress",{staticClass:"mb-3",attrs:{value:e.percentageCompleted,max:100,variant:"success"}}),e._v(" "),s("p",{staticClass:"text-center"},[s("strong",[e._v(e._s(e.percentageCompleted)+"% Completed")])])],1),e._v(" "),e._l(e.courseContentList,function(t){return s("b-list-group",{key:t.moduleTitle,staticClass:"list-group-flush"},[s("b-list-group-item",{staticClass:"moduleTitle",attrs:{button:""}},[e._v(e._s(t.moduleTitle))]),e._v(" "),e._l(t.lessons,function(n){return s("b-list-group",{key:n.lessonTitle,staticClass:"list-group-flush",attrs:{id:t.moduleID}},[s("b-list-group-item",{attrs:{button:""},on:{click:function(t){e.loadContent(n.lessonID)}}},[s("div",{staticClass:"lessonIcon"},[n.active?s("icon",{staticClass:"playLessonIcon",attrs:{name:"play-circle-o",scale:"1.5"}}):n.lessonComplete?s("icon",{staticClass:"completedLessonIcon",attrs:{name:"check",scale:"1.5"}}):s("icon",{staticClass:"standardLessonIcon",attrs:{name:"circle-o",scale:"1.5"}})],1),e._v(" "),s("div",{class:{lessonComplete:n.lessonComplete}},[e._v(e._s(n.lessonTitle))])])],1)})],2)})],2)],1),e._v(" "),s("b-col",{attrs:{id:"lessonContent"}},[s("b-card",{attrs:{title:e.activeLesson.lessonTitle}},[s("p",{staticClass:"card-text"},[e._v(e._s(e.activeLesson.lessonDescription))]),e._v(" "),s("b-button",{staticClass:"float-right",attrs:{variant:"danger"},on:{click:function(t){e.completeLesson(e.activeLesson.lessonID)}}},[e._v("Complete And Go To Next Lesson")]),e._v(" "),s("div",{staticClass:"clearfix"}),e._v(" "),"video"==e.activeLesson.lessonType?s("div",[s("div",{staticClass:"cardMediaFormatting embed-responsive embed-responsive-16by9"},[s("video",{staticClass:"embed-responsive-item",attrs:{width:"100%",height:"100%",controls:"",poster:e.activeLesson.posterImage}},[s("source",{attrs:{src:e.activeLesson.contentURL,type:"video/mp4"}})])])]):e._e(),e._v(" "),"audio"==e.activeLesson.lessonType?s("div",[s("div",{staticClass:"cardMediaFormatting theme--dark indigo"},[s("div",{staticClass:"indigoBackground p-5 text-center"},[s("audio",{ref:"audioPlayer",attrs:{id:"audioPlayer",oncanplay:e.audioLoaded()},on:{timeupdate:e.onAudioTimeUpdate,ended:e.resetAudioPlayer}},[s("source",{attrs:{src:e.activeLesson.contentURL,type:"audio/mpeg"}})]),e._v(" "),s("div",{attrs:{id:"playPauseButton"}},[s("b-btn",{on:{click:function(t){e.audioPlayPause()}}},[e.audioPlaying?s("icon",{staticClass:"pauseIconPosition",attrs:{name:"pause",scale:"3"}}):s("icon",{staticClass:"playIconPosition",attrs:{name:"play",scale:"3"}})],1)],1),e._v(" "),s("div",{staticClass:"d-flex flex-row justify-content-between mt-4"},[s("div",{staticClass:"text-white"},[e._v(e._s(e.elapsedTime))]),e._v(" "),s("div",{staticClass:"w-100 pt-1 pl-4 pr-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.scrubBar,expression:"scrubBar"}],attrs:{type:"range",max:e.scrubBarMax,step:"0.1"},domProps:{value:e.scrubBar},on:{input:function(t){e.changeCurrentTrackTime()},__r:function(t){e.scrubBar=t.target.value}}})]),e._v(" "),s("div",{staticClass:"text-white"},[e.startedAudioPlayback?s("div",[e._v("-"+e._s(e.remainingTime))]):s("div",[e._v("-"+e._s(e.trackLength))])])])])])]):e._e(),e._v(" "),"pdf"==e.activeLesson.lessonType?s("div",[s("div",{staticClass:"cardMediaFormatting"},[s("b-row",{staticClass:"d-block d-lg-none mb-4"},[s("b-input-group",{staticClass:"centerContent",attrs:{size:"sm"}},[s("b-input-group-prepend",[s("b-btn",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.goToFirstPage()}}},[e._v("Start")]),e._v(" "),s("b-btn",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.goToPreviousPage()}}},[e._v("Previous")])],1),e._v(" "),s("b-form-input",{staticClass:"pageNumber border border-secondary border-right-0 text-center",attrs:{type:"number",max:e.pageCount},model:{value:e.currentPage,callback:function(t){e.currentPage=e._n(t)},expression:"currentPage"}}),e._v(" "),s("b-form-input",{staticClass:"pageNumberSpacer border border-secondary border-left-0 border-right-0",attrs:{type:"text",value:"of",readonly:""}}),e._v(" "),s("b-form-input",{staticClass:"pageNumber border border-secondary border-left-0",attrs:{type:"text",value:e.pageCount,readonly:""}}),e._v(" "),s("b-input-group-append",[s("b-btn",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.goToNextPage()}}},[e._v("Next")]),e._v(" "),s("b-btn",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.goToLastPage(e.pageCount)}}},[e._v("End")])],1)],1)],1),e._v(" "),s("b-row",{staticClass:"d-none d-lg-block mb-4"},[s("b-input-group",{staticClass:"centerContent",attrs:{size:"md"}},[s("b-input-group-prepend",[s("b-btn",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.goToFirstPage()}}},[e._v("Go To Start")]),e._v(" "),s("b-btn",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.goToPreviousPage()}}},[e._v("Previous Page")])],1),e._v(" "),s("b-form-input",{staticClass:"pageNumber border border-secondary border-right-0 text-center",attrs:{type:"number",max:e.pageCount},model:{value:e.currentPage,callback:function(t){e.currentPage=e._n(t)},expression:"currentPage"}}),e._v(" "),s("b-form-input",{staticClass:"pageNumberSpacer border border-secondary border-left-0 border-right-0",attrs:{type:"text",value:"of",readonly:""}}),e._v(" "),s("b-form-input",{staticClass:"pageNumber border border-secondary border-left-0",attrs:{type:"text",value:e.pageCount,readonly:""}}),e._v(" "),s("b-input-group-append",[s("b-btn",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.goToNextPage()}}},[e._v("Next Page")]),e._v(" "),s("b-btn",{attrs:{variant:"outline-secondary"},on:{click:function(t){e.goToLastPage(e.pageCount)}}},[e._v("Go To End")])],1)],1)],1),e._v(" "),s("pdf",{attrs:{id:"pdfViewer",src:e.activeLesson.contentURL,page:e.currentPage},on:{"num-pages":function(t){e.pageCount=t},"page-loaded":function(t){e.currentPage=t}}})],1)]):e._e()],1)],1)],1),e._v(" "),s("b-row",{staticClass:"fixed-bottom",attrs:{id:"footerBar"}},[s("p",[e._v("© "+e._s(e.currentYear)+" All Rights Reserved.")])])],1)},staticRenderFns:[]};var c=s("VU/8")(r,l,!1,function(e){s("ABl3")},"data-v-3697bc04",null).exports,d=(s("D/PP"),s("D4uH")),u={props:{initial:{type:Boolean,default:!1}},data:function(){return{size:{width:-1,height:-1}}},methods:{reset:function(){var e=this.$el.firstChild,t=this.$el.lastChild;e.scrollLeft=1e5,e.scrollTop=1e5,t.scrollLeft=1e5,t.scrollTop=1e5},update:function(){this.size.width=this.$el.offsetWidth,this.size.height=this.$el.offsetHeight}},watch:{size:{deep:!0,handler:function(e){this.reset(),this.$emit("resize",{width:this.size.width,height:this.size.height})}}},render:function(e){var t="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",s="position: absolute; left: 0; top: 0;";return e("div",{style:t+"animation-name: resizeSensorVisibility;",on:{"~animationstart":this.update}},[e("div",{style:t,on:{scroll:this.update}},[e("div",{style:s+"width: 100000px; height: 100000px;"})]),e("div",{style:t,on:{scroll:this.update}},[e("div",{style:s+"width: 200%; height: 200%;"})])])},beforeDestroy:function(){this.$emit("resize",{width:0,height:0}),this.$emit("resizeSensorBeforeDestroy")},mounted:function(){if(!0===this.initial&&this.$nextTick(this.update),this.$el.offsetParent!==this.$el.parentNode&&(this.$el.parentNode.style.position="relative"),"attachEvent"in this.$el&&!("AnimationEvent"in window)){var e=function(){this.update(),t()}.bind(this),t=function(){this.$el.detachEvent("onresize",e),this.$off("resizeSensorBeforeDestroy",t)}.bind(this);this.$el.attachEvent("onresize",e),this.$on("resizeSensorBeforeDestroy",t),this.reset()}}};var h=s("VU/8")(u,null,!1,function(e){s("8Y90")},null,null).exports;if("server"===Object({NODE_ENV:"production"}).VUE_ENV)(p=s("nKpR")).PDFJS.disableWorker=!0;else var p=s("N1Pc");function g(e,t){var s=p.getDocument(e);return s.__PDFDocumentLoadingTask=!0,t&&t.onPassword&&(s.onPassword=t.onPassword),t&&t.onProgress&&(s.onProgress=t.onProgress),s}var f={createLoadingTask:g,render(e){return e("div",{attrs:{style:"position: relative"}},[e("canvas",{style:{display:"block",width:"100%"}}),e("div",{class:"annotationLayer"}),e(h,{props:{initial:!0},on:{resize:this.resize}})])},props:{src:{type:[String,Object],default:""},page:{type:Number,default:1},rotate:{type:Number,default:0}},watch:{src:function(){this.pdf.loadDocument(this.src)},page:function(){this.pdf.loadPage(this.page,this.rotate)},rotate:function(){this.pdf.renderPage(this.rotate)}},methods:{resize:function(e){var t=this.$el.childNodes[0],s=this.$el.childNodes[1];t.style.height=t.offsetWidth*(t.height/t.width)+"px";var n=this.pdf.getResolutionScale();(n<.85||n>1.15)&&this.pdf.renderPage(this.rotate),s.style.transform="scale("+n+")"},print:function(e,t){this.pdf.printPage(e,t)}},mounted:function(){var e=this.$el.childNodes[0],t=this.$el.childNodes[1];this.pdf=new function(e,t,s,n){var o=null,i=null,a=null,r=!1;function l(){t.getContext("2d").clearRect(0,0,t.width,t.height)}function c(){for(;s.firstChild;)s.removeChild(s.firstChild)}this.destroy=function(){null!==o&&(o.destroy(),o=null)},this.getResolutionScale=function(){return t.offsetWidth/t.width},this.printPage=function(e,t){if(null!==i){var s=(void 0===e?150:e)/72,a=document.createElement("iframe");new Promise(function(e,t){a.frameBorder="0",a.scrolling="no",a.width="0px;",a.height="0px;",a.style.cssText="position: absolute; top: 0; left: 0",a.onload=function(){e(this.contentWindow)},window.document.body.appendChild(a)}).then(function(e){return e.document.title="",o.getPage(1).then(function(t){var n=t.getViewport(1);return e.document.head.appendChild(e.document.createElement("style")).textContent="@supports ((size:A4) and (size:1pt 1pt)) {@page { margin: 1pt; size: "+n.width*s/(96/72)+"pt "+n.height*s/(96/72)+"pt; }}@media print {body { margin: 0 }canvas { page-break-before: avoid; page-break-after: always; page-break-inside: avoid }}@media screen {body { margin: 0 }}",e})}).then(function(e){for(var i=[],a=1;a<=o.numPages;++a)void 0!==t&&-1===t.indexOf(a)||i.push(o.getPage(a).then(function(t){var n=t.getViewport(1),o=e.document.body.appendChild(e.document.createElement("canvas"));return o.width=n.width*s,o.height=n.height*s,t.render({canvasContext:o.getContext("2d"),transform:[s,0,0,s,0,0],viewport:n,intent:"print"}).promise}));Promise.all(i).then(function(){e.focus(),e.print(),r()}).catch(function(e){r(),n("error",e)})})}function r(){a.parentNode.removeChild(a)}},this.renderPage=function(o){if(null!==a){if(r)return;return r=!0,void a.cancel()}if(null!==i){void 0===o&&(o=0);var l=t.offsetWidth/i.getViewport(1).width*(window.devicePixelRatio||1),d=i.getViewport(l,o);n("page-size",d.width,d.height),t.width=d.width,t.height=d.height,a=i.render({canvasContext:t.getContext("2d"),viewport:d}),s.style.visibility="hidden",c(),i.getAnnotations().then(function(t){e.AnnotationLayer.render({viewport:d.clone({dontFlip:!0}),div:s,annotations:t,page:i,renderInteractiveForms:!1})}),a.then(function(){s.style.visibility="",a=null}).catch(function(e){if(a=null,"cancelled"===e)return r=!1,void this.renderPage(o);n("error",e)}.bind(this))}},this.forEachPage=function(e){var t=o.pdfInfo.numPages;!function s(n){o.getPage(n).then(e).then(function(){++n<=t&&s(n)})}(1)},this.loadPage=function(e,t){i=null,null!==o&&o.getPage(e).then(function(e){i=e,this.renderPage(t),n("page-loaded",e.pageNumber)}.bind(this)).catch(function(e){l(),c(),n("error",e)})},this.loadDocument=function(s){if(o=null,i=null,n("num-pages",void 0),!s)return t.removeAttribute("width"),t.removeAttribute("height"),void c();if("object"==typeof(r=s)&&null!==r&&!0===r.__PDFDocumentLoadingTask)var a=s;else a=g(s,{onPassword:function(t,s){var o;switch(s){case e.PasswordResponses.NEED_PASSWORD:o="NEED_PASSWORD";break;case e.PasswordResponses.INCORRECT_PASSWORD:o="INCORRECT_PASSWORD"}n("password",t,o)},onProgress:function(e){var t=e.loaded/e.total;n("progress",Math.min(t,1))}});var r;a.then(function(e){o=e,n("num-pages",e.numPages),n("loaded")}).catch(function(e){l(),c(),n("error",e)})},s.style.transformOrigin="0 0"}(p,e,t,this.$emit.bind(this)),this.$on("loaded",function(){this.pdf.loadPage(this.page,this.rotate)}),this.$on("page-size",function(t,s){e.style.height=e.offsetWidth*(s/t)+"px"}),this.pdf.loadDocument(this.src)},destroyed:function(){this.pdf.destroy()}};var v=s("VU/8")(f,null,!1,function(e){s("q1HA")},null,null).exports;n.a.use(a.a),n.a.component("icon",d.a),n.a.component("pdf",v);var m=new a.a({routes:[{path:"/",name:"TrainingTemplate",component:c}]}),b=s("e6fC");s("qb6w");n.a.use(b.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:m,components:{App:i},template:"<App/>"})},q1HA:function(e,t){},qb6w:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d0e8d552b4682c5b9e2e.js.map