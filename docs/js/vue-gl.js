(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('three')):'function'==typeof define&&define.amd?define(['exports','three'],b):b(a.VueGL={},a.THREE)})(this,function(a,b){'use strict';/**
 * Returns a parsed vector3 object when the argument is a string. Otherwise pass the argument through.
 */function c(a,c){return'string'==typeof a?(c||new b.Vector3).fromArray(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})):c?c.copy(a):a}/**
 * Returns a parsed euler object when the argument is a string. Othewise pass the argument through.
 */function d(a,c){return'string'==typeof a?(c||new b.Euler).fromArray(a.trim().split(/\s+/).map(function(a,b){return 3===b?a:parseFloat(a)})):c?c.copy(a):a}/**
 * Returns a parsed spherical object when the argument is a string. Otherwise pass the argument through.
 */function e(a,c){var d;return'string'==typeof a?(d=c||new b.Spherical).set.apply(d,B(a.trim().split(/\s+/).map(function(a){return parseFloat(a)}))).makeSafe():c?c.copy(a):a}/**
 * Returns a parsed integer number when the argument is a string. Otherwise pass the argument through.
 */function f(a){return'string'==typeof a?parseInt(a,10):a}/**
 * Returns a parsed float number when the argument is a string. Otherwise pass the argument through.
 */function g(a){return'string'==typeof a?parseFloat(a):a}/**
 * Create an object that has array's items as keys. Values are set by setter function.
 */function h(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return a.reduce(function(a,c,d){return a[c]=b(c,d),a},c)}/**
 * Find the nearest ancestor component that has the [key] option.
 */function i(a,b){var c=a.$parent;if(c)return c.$options[b]?c:i(c,b)}/**
 * Constant arrays useful for props validation.
 *//**
 * Call the ancestor renderer's vglUpdate function from object3d components.
 */function j(a){a.vglUpdate&&a.vglUpdate()}/**
 * Dispatch an update event on the instance of a component.
 */function k(a){a.inst.dispatchEvent({type:'update'})}function l(){return Object.create(null)}function m(a,b){return h(a,function(){return l()},b)}function n(a,b){var c={props:{name:D},inject:[b],created:function(){this.$set(this[b].forSet,this.name,this.inst)},watch:{inst:function(a){this[b].forSet[this.name]=a}},beforeDestroy:function(){this[b].forSet[this.name]===this.inst&&this.$delete(this[b].forSet,this.name)},render:function(a){if(this.$slots.default)return a('div',this.$slots.default)}};return a&&(c.computed={inst:function(){return new a}}),c}function o(a,b){var c=a+'_';return{props:A({},a,D),inject:[b],computed:A({},c,function(){return this[b].forGet[this[a]]}),mounted:function(){var b=this[c];b&&(this.inst[a]=b,b.addEventListener('update',this.ud))},methods:{ud:function(){j(this)}},watch:A({},c,function(b,c){b!==c&&(this.inst[a]=b,c&&c.removeEventListener('update',this.ud),b&&b.addEventListener('update',this.ud),j(this))})}}function p(a){var b=[o('material','vglMaterials')];return a&&b.push(o('geometry','vglGeometries')),{mixins:b}}function q(a){return{props:{radius:C,detail:C},computed:{inst:function(){return new a(g(this.radius),f(this.detail))}}}}function r(a){return{props:{color:{type:D,default:a}},watch:{color:{handler:function(a){this.inst.color.setStyle(a),k(this)},immediate:!0}}}}function s(a,d,f){if(d||f){var g=c(f);if(d){var h=a.inst.position.setFromSpherical(e(d));g&&h.add(g)}a.inst.lookAt(g||new b.Vector3),j(a)}}function t(a,b){var c=b.clientWidth,d=b.clientHeight;a.isPerspectiveCamera?a.aspect=c/d:(a.left=c/-2,a.right=c/2,a.top=d/2,a.bottom=d/-2),a.updateProjectionMatrix()}function u(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}function v(a,b){a.inst.setDirection(c(b).normalize())}function w(a){return i(a,'isVglLensFlare')}function x(a){return a.map(function(a){return a.children?x(a.children):a.text}).join('')}var y=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')},z=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),A=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},B=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},C=[String,Number],D=String,E=['vglCameras','vglScenes'],F=['vglGeometries','vglMaterials','vglTextures','vglFonts'],G=[].concat(E,F),H=F.map(function(a){return a+'_'}),I=H.map(function(a){return a+'_'}),J={provide:function(){var a=this,b=function(){function b(a){y(this,b),this.i=a}return z(b,[{key:'forGet',get:function(){return a[I[this.i]]}},{key:'forSet',get:function(){return a[H[this.i]]}}]),b}(),c=function(){function b(a){y(this,b),this.i=a}return z(b,[{key:'forGet',get:function(){return a[E[this.i]]}},{key:'forSet',get:function(){return a[E[this.i]]}}]),b}();return h(F,function(a,c){return new b(c)},a.$data[E[0]]?h(E,function(a,b){return new c(b)}):{})},inject:h(G,function(){return{default:void 0}}),data:function(){return m(H,this[E[0]]?{}:m(E))},computed:h(I,function(a,b){return function(){var a=F[b],c=H[b];return this[a]?Object.assign(Object.create(this[a].forGet),this[c]):this[c]}}),render:function(a){if(this.$slots.default)return a('div',this.$slots.default)}},K=new b.Vector3,L=new b.Euler,M=new b.Vector3(1,1,1),N={isVglObject3d:!0,props:{position:{type:[String,b.Vector3],default:function(){return K}},rotation:{type:[String,b.Euler],default:function(){return L}},scale:{type:[String,b.Vector3],default:function(){return M}},castShadow:Boolean,receiveShadow:Boolean},computed:{inst:function(){return new b.Object3D}},inject:{vglUpdate:{default:void 0}},created:function(){var a=i(this,'isVglObject3d');a&&a.inst.add(this.inst)},beforeDestroy:function(){this.inst.parent&&this.inst.parent.remove(this.inst)},watch:{position:{handler:function(a){c(a||K,this.inst.position),j(this)},immediate:!0},rotation:{handler:function(a){d(a||L,this.inst.rotation),j(this)},immediate:!0},scale:{handler:function(a){c(a||M,this.inst.scale),j(this)},immediate:!0},castShadow:{handler:function(a){this.inst.castShadow=a,j(this)},immediate:!0},receiveShadow:{handler:function(a){this.inst.receiveShadow=a,j(this)},immediate:!0},inst:function(a,b){b.children.length&&a.add.apply(a,B(b.children)),a.position.copy(b.position),a.rotation.copy(b.rotation),a.scale.copy(b.scale),b.parent&&b.parent.remove(b).add(a),j(this)}},render:function(a){if(this.$slots.default)return a('div',this.$slots.default)}},O={props:{map:D},inject:['vglTextures'],computed:{tex:function(){return this.vglTextures.forGet[this.map]||null}},watch:{tex:{handler:function(a,b){this.inst.map=a,b||(this.inst.needsUpdate=!0),k(this)},immediate:!0}}},P={mixins:[N,n(b.Scene,'vglScenes')],provide:function(){if(!this.vglUpdate)return{vglUpdate:function(){this.inst.dispatchEvent({type:'update'})}}}},Q={mixins:[N,n(b.Camera,'vglCameras')],props:{orbitTarget:[String,b.Vector3],orbitPosition:[String,b.Spherical]},watch:{orbitTarget:{handler:function(a){s(this,this.orbitPosition,a)},immediate:!0},orbitPosition:function(a){s(this,a,this.orbitTarget)}}},R={mixins:[J],props:{precision:String,alpha:Boolean,disablePremultipliedAlpha:Boolean,antialias:Boolean,disableStencil:Boolean,preserveDrawingBuffer:Boolean,disableDepth:Boolean,logarithmicDepthBuffer:Boolean,camera:String,scene:String,shadowMapEnabled:Boolean},provide:function(){return{vglUpdate:this.render}},data:function(){return{key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new b.WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return(this.$data.vglCameras||this.vglCameras.forGet)[this.camera]},scn:function(){return(this.$data.vglScenes||this.vglScenes.forGet)[this.scene]}},methods:{resize:function(){u(this.inst,this.$el),this.cmr&&(t(this.cmr,this.$el),this.scn&&this.render())},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)},init:function(){this.resize(),this.inst.shadowMap.enabled=this.shadowMapEnabled}},watch:{opt:function(){++this.key,this.$nextTick(this.init)},scn:function(a,b){b&&b.removeEventListener('update',this.render),a&&(a.addEventListener('update',this.render),this.render())},cmr:function(a,b){b&&b.removeEventListener('update',this.render),a&&(a.addEventListener('update',this.render),t(a,this.$el),this.render())},shadowMapEnabled:function(a){this.inst.shadowMap.enabled=a}},created:function(){this.scn&&this.scn.addEventListener('update',this.render),this.cmr&&this.cmr.addEventListener('update',this.render)},mounted:function(){this.init()},render:function(a){var b=this;return a('div',[a('canvas',{ref:'rdr',key:this.key},this.$slots.default),a('iframe',{ref:'frm',style:{visibility:'hidden',width:'100%',height:'100%'},on:{load:function(a){a.target.contentWindow.addEventListener('resize',b.resize,!1)}}})])}},S={mixins:[N],props:{color:{type:String,default:'white'},intensity:{type:[String,Number],default:1}},computed:{inst:function(){return new b.Light}},watch:{color:{handler:function(a){this.inst.color.setStyle(a),j(this)},immediate:!0},intensity:{handler:function(a){this.inst.intensity=g(a),j(this)},immediate:!0}}},T={mixins:[S],computed:{inst:function(){return new b.DirectionalLight}},props:{castShadow:Boolean},watch:{castShadow:{handler:function(a){this.inst.castShadow=a,j(this)},immediate:!0}}},U={mixins:[n(b.Material,'vglMaterials')]},V={mixins:[U],props:{color:{type:String,default:'#fff'},size:{type:[String,Number],default:1},disableSizeAttenuation:Boolean},computed:{inst:function(){return new b.PointsMaterial}},created:function(){var a=this.inst;a.color.setStyle(this.color),a.size=g(this.size),a.sizeAttenuation=!this.disableSizeAttenuation},watch:{color:function(a){this.inst.color.setStyle(a)},size:function(a){this.inst.size=g(a)},disableSizeAttenuation:function(a){this.inst.sizeAttenuation=!a}}},W={mixins:[n(b.Geometry,'vglGeometries')]},X=[String,Number],Y=['radius','widthSegments','heightSegments','phiStart','phiLength','thetaStart','thetaLength'],Z={mixins:[W],props:h(Y,function(){return X}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.SphereGeometry,[null].concat(B(Y.map(function(b,c){return(1>c||2<c?g:f)(a[b])})))))}}},$={mixins:[U,r('#fff'),O],computed:{inst:function(){return new b.MeshStandardMaterial}}},_={mixins:[N,p(!0)],computed:{inst:function(){return new b.Mesh}}},aa={mixins:[N,p(!0)],computed:{inst:function(){return new b.Points}}},ba={mixins:[U],props:{color:{type:String,default:'#fff'},lights:Boolean,linewidth:{type:[String,Number],default:1},linecap:{type:String,default:'round'},linejoin:{type:String,default:'round'}},computed:{inst:function(){return new b.LineBasicMaterial}},created:function(){var a=this.inst;a.lights=this.lights,a.linecap=this.linecap,a.linejoin=this.linejoin,a.linewidth=g(this.linewidth),a.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=g(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},ca={mixins:[N,p(!0)],computed:{inst:function(){return new b.Line}}},da={mixins:[N,p()],computed:{inst:function(){return new b.Sprite}}},ea=[String,Number],fa=['width','height','depth'],ga=['widthSegments','heightSegments','depthSegments'],ha={mixins:[W],props:h(fa,function(){return ea},h(ga,function(){return ea})),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.BoxGeometry,[null].concat(B(fa.map(function(b){return g(a[b])})),B(ga.map(function(b){return f(a[b])})))))}}},ia=[String,Number],ja=['radius','segments','thetaStart','thetaLength'],ka={mixins:[W],props:h(ja,function(){return ia}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.CircleGeometry,[null].concat(B(ja.map(function(b,c){return(1===c?f:g)(a[b])})))))}}},la={mixins:[ca],computed:{inst:function(){return new b.LineSegments}}},ma=[String,Number],na=['radiusTop','radiusBottom','height','radialSegments','heightSegments','openEnded','thetaStart','thetaLength'],oa={mixins:[W],props:h(na,function(a,b){return 5===b?Boolean:ma}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.CylinderGeometry,[null].concat(B(na.map(function(b,c){return(3>c||5<c?g:f)(a[b])})))))}}},pa={mixins:[oa],props:{radius:[String,Number]},computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.ConeGeometry,[null].concat(B(['radius','height','radialSegments','heightSegments','openEnded','thetaStart','thetaLength'].map(function(b,c){return(2>c||4<c?g:f)(a[b])})))))}}},qa={mixins:[la],props:{size:[String,Number]},computed:{inst:function(){return new b.AxesHelper(g(this.size))}}},ra=[String,Number],sa=['width','height','widthSegments','heightSegments'],ta={mixins:[W],props:h(sa,function(){return ra}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.PlaneGeometry,[null].concat(B(sa.map(function(b,c){return(1<c?f:g)(a[b])})))))}}},ua={mixins:[W,q(b.DodecahedronGeometry)]},va={mixins:[W,q(b.IcosahedronGeometry)]},wa={mixins:[W,q(b.OctahedronGeometry)]},xa=[String,Number],ya=['innerRadius','outerRadius','thetaSegments','phiSegments','thetaStart','thetaLength'],za={mixins:[W],props:h(ya,function(){return xa}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.RingGeometry,[null].concat(B(ya.map(function(b,c){return(2>c||3<c?g:f)(a[b])})))))}}},Aa={mixins:[W,q(b.TetrahedronGeometry)]},Ba=[String,Number],Ca=['radius','tube','radialSegments','tubularSegments','arc'],Da={mixins:[W],props:h(Ca,function(){return Ba}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.TorusGeometry,[null].concat(B(Ca.map(function(b,c){return(2>c||3<c?g:f)(a[b])})))))}}},Ea=[String,Number],Fa=['radius','tube','tubularSegments','radialSegments','p','q'],Ga={mixins:[W],props:h(Fa,function(){return Ea}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.TorusKnotGeometry,[null].concat(B(Fa.map(function(b,c){return(2>c||3<c?g:f)(a[b])})))))}}},Ha=[String,Number],Ia=new b.Vector3(0,1),Ja=new b.Vector3,Ka=new b.Color,La={mixins:[N],props:{dir:{type:[String,b.Vector3],default:function(){return Ia}},length:{type:Ha,default:1},color:{type:String,default:'#ff0'},headLength:Ha,headWidth:Ha},computed:{inst:function(){return new b.ArrowHelper(Ia,Ja)},len:function(){return[g(this.length),g(this.headLength),g(this.headWidth)]}},created:function(){var a;this.dir!==Ia&&this.inst.setDirection(c(this.dir).normalize()),(a=this.inst).setLength.apply(a,B(this.len)),this.inst.setColor(Ka.setStyle(this.color))},watch:{dir:function(a){v(this,a)},len:function(a){var b;(b=this.inst).setLength.apply(b,B(a))},color:function(a){this.inst.setColor(Ka.setStyle(a))}}},Ma={mixins:[S],props:{distance:{type:C,default:0},decay:{type:C,default:1},angle:{type:C,default:Math.PI/3},penumbra:{type:C,default:0},target:{type:[String,b.Vector3]}},computed:{inst:function(){return new b.SpotLight}},created:function(){var a=this;if(this.target){c(this.target,this.inst.target.position);var b=i(this,'isVglObject3d');b&&this.$watch(function(){return b.inst},function(b,c){c&&c.remove(a.inst.target),b.add(a.inst.target),j(a)},{immediate:!0})}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{distance:{handler:function(a){this.inst.distance=g(a),j(this)},immediate:!0},decay:{handler:function(a){this.inst.decay=g(a),j(this)},immediate:!0},angle:{handler:function(a){this.inst.angle=g(a),j(this)},immediate:!0},penumbra:{handler:function(a){this.inst.penumbra=g(a),j(this)},immediate:!0},target:function(a){c(a,this.inst.target.position),j(this)}}},Na={mixins:[n(null,'vglTextures')],props:{src:D},data:function(){return{inst:null}},watch:{src:{handler:function(a){var c=this;new b.TextureLoader().load(a,function(a){c.inst=a})},immediate:!0}}},Oa={inject:['vglTextures'],props:{texture:{type:D},size:{type:C,default:-1},distance:{type:C,default:0},blending:{type:C,default:b.NormalBlending},color:{type:D,default:'#fff'}},data:function(){return{inst:null}},computed:{opts:function(){return[this.vglTextures.forGet[this.texture],f(this.size),g(this.distance),f(this.blending),new b.Color(this.color)]}},beforeDestroy:function(){var a=w(this);this.remove(a),j(a)},watch:{opts:{handler:function(a){var b=w(this);b&&(this.inst?(a[0]?this.replace(b):(this.remove(b),this.inst=null),j(b)):a[0]&&(this.add(b),j(b)))},immediate:!0}},methods:{add:function(a){var b;(b=a.inst).add.apply(b,B(this.opts)),this.inst=a.inst.lensFlares.slice(-1)[0]},remove:function(a){a.inst.lensFlares.splice(a.inst.lensFlares.indexOf(this.inst),1)},replace:function(a){this.remove(a),this.add(a)}},render:function(a){if(this.$slots.default)return a('div',this.$slots.default)}},Pa={mixins:[n(null,'vglFonts')],props:{src:D},data:function(){return{inst:null}},watch:{src:{handler:function(a){var c=this;if(!/^data:.*?(?:;base64)?,.*$/.test(a)){// GET src data manually and pass as a data URI.
var d=new XMLHttpRequest;d.addEventListener('load',function(){new b.FontLoader().load('data:,'+encodeURIComponent(d.responseText),function(a){c.inst=a})},!1),d.open('GET',a),d.send()}else new b.FontLoader().load(a,function(a){c.inst=a})},immediate:!0}}},Qa={mixins:[W],computed:{inst:function(){return new b.ExtrudeGeometry([],{})}}},Ra={mixins:[Qa],inject:['vglFonts'],props:{font:D,size:{type:C,default:100},height:{type:C,default:50},curveSegments:{type:C,default:12},bevelEnabled:Boolean,bevelThickness:{type:C,default:10},bevelSize:{type:C,default:8},bevelSegments:{type:C,default:3}},computed:{inst:function(){var a=this.vglFonts.forGet[this.font],c=this.$slots.default;if(a&&c)return new b.TextGeometry(x(c),{font:a,size:g(this.size),height:g(this.height),curveSegments:f(this.curveSegments),bevelEnabled:this.bevelEnabled,bevelThickness:g(this.bevelThickness),bevelSize:g(this.bevelSize),bevelSegments:f(this.bevelSegments)})}}},Sa={mixins:[U,r('#fff'),O],inject:['vglTextures'],computed:{inst:function(){return new b.SpriteMaterial}}};a.VglNamespace=J,a.VglObject3d=N,a.VglScene=P,a.VglCamera=Q,a.VglRenderer=R,a.VglPerspectiveCamera={mixins:[Q],props:{zoom:{type:C,default:1},near:{type:C,default:0.1},far:{type:C,default:2e3},fov:{type:C,default:50}},computed:{inst:function(){return new b.PerspectiveCamera}},watch:{zoom:{handler:function(a){this.inst.zoom=g(a),j(this)},immediate:!0},near:{handler:function(a){this.inst.near=g(a),j(this)},immediate:!0},far:{handler:function(a){this.inst.far=g(a),j(this)},immediate:!0},fov:{handler:function(a){this.inst.fov=g(a),j(this)},immediate:!0}}},a.VglGroup={mixins:[N],computed:{inst:function(){return new b.Group}}},a.VglLight=S,a.VglDirectionalLight=T,a.VglAmbientLight={mixins:[S],computed:{inst:function(){return new b.AmbientLight}}},a.VglMaterial=U,a.VglPointsMaterial=V,a.VglGeometry=W,a.VglSphereGeometry=Z,a.VglMeshStandardMaterial=$,a.VglMesh=_,a.VglPoints=aa,a.VglLineBasicMaterial=ba,a.VglLine=ca,a.VglSprite=da,a.VglBoxGeometry=ha,a.VglCircleGeometry=ka,a.VglLineSegments=la,a.VglLineLoop={mixins:[ca],computed:{inst:function(){return new b.LineLoop}}},a.VglConeGeometry=pa,a.VglAxesHelper=qa,a.VglOrthographicCamera={mixins:[Q],props:{zoom:{type:C,default:1},near:{type:C,default:0.1},far:{type:C,default:2e3}},computed:{inst:function(){return new b.OrthographicCamera}},watch:{zoom:{handler:function(a){this.inst.zoom=g(a),j(this)},immediate:!0},near:{handler:function(a){this.inst.near=g(a),j(this)},immediate:!0},far:{handler:function(a){this.inst.far=g(a),j(this)},immediate:!0}}},a.VglCylinderGeometry=oa,a.VglPlaneGeometry=ta,a.VglDodecahedronGeometry=ua,a.VglIcosahedronGeometry=va,a.VglOctahedronGeometry=wa,a.VglRingGeometry=za,a.VglTetrahedronGeometry=Aa,a.VglTorusGeometry=Da,a.VglTorusKnotGeometry=Ga,a.VglArrowHelper=La,a.VglBoxHelper={mixins:[la],props:{color:{type:D,default:'#ff0'}},computed:{inst:function(){return new b.BoxHelper}},data:function(){return{uw:null,r:!0}},created:function(){var a=this,b=this.inst;b.parent&&(this.uw=this.$watch(function(){return b.parent},function(){a.r&&(a.$nextTick(function(){b.setFromObject(b.parent),a.r=!0}),a.r=!1)},{immediate:!0}))},beforeDestroy:function(){this.uw&&this.uw()},watch:{color:{handler:function(a){this.inst.material.color.setStyle(a)},immediate:!0}}},a.VglPointLight={mixins:[S],props:{distance:{type:C,default:0},decay:{type:C,default:1}},computed:{inst:function(){return new b.PointLight}},watch:{distance:{handler:function(a){this.inst.distance=g(a),j(this)},immediate:!0},decay:{handler:function(a){this.inst.decay=g(a),j(this)},immediate:!0}}},a.VglSpotLight=Ma,a.VglTexture=Na,a.VglLensFlare={isVglLensFlare:!0,mixins:[N],computed:{inst:function(){return new b.LensFlare}}},a.VglLensFlareTexture=Oa,a.VglFont=Pa,a.VglExtrudeGeometry=Qa,a.VglTextGeometry=Ra,a.VglSpriteMaterial=Sa,a.VglGridHelper={mixins:[la],props:{size:{type:C,default:10},divisions:{type:C,default:10},colorCenterLine:{type:D,default:'#444444'},colorGrid:{type:D,default:'#888888'}},computed:{inst:function(){var a=this;return new b.GridHelper(g(a.size),f(a.divisions),a.colorCenterLine,a.colorGrid)}}},a.VglShadowMaterial={mixins:[U],computed:{inst:function(){return new b.ShadowMaterial}}},a.VglCameraHelper={mixins:[la],props:{camera:D},inject:['vglCameras'],computed:{inst:function(){var a=this.vglCameras.forGet[this.camera];return a?new b.CameraHelper(a):new b.LineSegments}}},a.VglDirectionalLightHelper={mixins:[N],props:{color:{type:D},size:{type:C,default:1}},computed:{inst:function(){return this.i}},data:function(){return{i:new b.Object3D,uw:null}},beforeDestroy:function(){this.uw&&this.uw()},watch:{color:function(a){this.i.parent&&(this.i.color=a,this.i.update())},"i.parent":{handler:function(a,c){var d=this;if(a!==c){if(c&&(this.uw(),!a))return void(this.i=new b.Object3D);a&&(this.i=new b.DirectionalLightHelper(a,g(this.size),this.color),this.uw=this.$watch(function(){return d.i.parent&&d.i.parent.color.getHex()},function(){d.color||d.$nextTick(function(){d.i.update()})}))}},immediate:!0}}},Object.defineProperty(a,'__esModule',{value:!0})});
