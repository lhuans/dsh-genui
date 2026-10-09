import z from "@deepseek-ai/schemastery";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
//#region node_modules/.pnpm/@opentiny+genui-sdk-materials-vue-opentiny-vue@1.3.0_typescript@5.9.3/node_modules/@opentiny/genui-sdk-materials-vue-opentiny-vue/dist/meta.js
const a = { data: /* @__PURE__ */ JSON.parse(`{"framework":"Vue","materials":{"components":[{"version":"3.20.0","name":{"zh_CN":"走马灯子项"},"component":"TinyCarouselItem","icon":"carouselitem","description":"常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"CarouselItem","destructuring":true},"group":"component","category":"容器组件","priority":2,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"name","label":{"text":{"zh_CN":"名称"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"幻灯片的名字，可用作 setActiveItem 的参数"},"labelPosition":"left"},{"property":"title","label":{"text":{"zh_CN":"标题"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"幻灯片的标题"},"labelPosition":"left"},{"property":"indicator-position","label":{"text":{"zh_CN":"指示器位置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"ButtonGroupConfigurator","props":{"options":[{"label":"outside","value":"outside"},{"label":"none","value":"none"}]}},"description":{"zh_CN":"指示器的位置"},"labelPosition":"left"}]}],"events":{}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":[],"parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["disabled","size"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","name":{"zh_CN":"走马灯"},"component":"TinyCarousel","icon":"carousel","description":"常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Carousel","destructuring":true},"group":"component","category":"容器组件","priority":2,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"arrow","label":{"text":{"zh_CN":"箭头显示时机"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{"options":[{"label":"总是显示","value":"always"},{"label":"鼠标悬停时显示","value":"hover"},{"label":"从不显示","value":"never"}]}},"description":{"zh_CN":"切换箭头的显示时机"}},{"property":"autoplay","label":{"text":{"zh_CN":"自动切换"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否自动切换"},"labelPosition":"left"},{"property":"tabs","label":{"text":{"zh_CN":"选项卡"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"bindState":false,"widget":{"component":"ContainerConfigurator","props":{}},"description":{"zh_CN":"tabs 选项卡"},"labelPosition":"none"},{"property":"height","label":{"text":{"zh_CN":"高度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"走马灯的高度"}},{"property":"indicator-position","label":{"text":{"zh_CN":"位置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{"options":[{"label":"走马灯外部","value":"outside"},{"label":"不显示","value":"none"}]}},"description":{"zh_CN":"指示器的位置"}},{"property":"initial-index","label":{"text":{"zh_CN":"初始索引"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"初始状态激活的幻灯片的索引，从 0 开始 "}},{"property":"interval","label":{"text":{"zh_CN":"自动切换间隔"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"自动切换的时间间隔，单位为毫秒"}},{"property":"loop","label":{"text":{"zh_CN":"循环显示"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否循环显示"},"labelPosition":"left"},{"property":"show-title","label":{"text":{"zh_CN":"显示标题"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示标题"},"labelPosition":"left"},{"property":"trigger","label":{"text":{"zh_CN":"触发方式"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{"options":[{"label":"点击","value":"click"},{"label":"悬停","value":"hover"}]}},"description":{"zh_CN":"指示器的触发方式，默认为 hover"}},{"property":"type","label":{"text":{"zh_CN":"类型"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{"options":[{"label":"水平","value":"horizontal"},{"label":"垂直","value":"vertical"},{"label":"卡片","value":"card"}]}},"description":{"zh_CN":"走马灯的类型"}}]}],"events":{}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"clickCapture":false,"isModal":false,"nestingRule":{"childWhitelist":["TinyCarouselItem"],"parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["disabled","size"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"1.0.0","icon":"link","name":{"zh_CN":"提示框"},"component":"a","description":"链接","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","group":"component","priority":7,"npm":{},"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"children","label":{"text":{"zh_CN":"类型"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlTextConfigurator","props":{}},"description":{"zh_CN":"类型"},"labelPosition":"none"},{"property":"href","label":{"text":{"zh_CN":"链接"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"指定链接的 URL"},"labelPosition":"left"},{"property":"target","label":{"text":{"zh_CN":"打开方式"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"ButtonGroupConfigurator","props":{"options":[{"label":"当前页面","value":"_self"},{"label":"打开新页面","value":"_blank"}]}},"description":{"zh_CN":"指定链接的打开方式，例如在当前窗口中打开或在新窗口中打开。"}},{"property":"attributes3","label":{"text":{"zh_CN":"原生属性"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlAttributesConfigurator","props":{}},"description":{"zh_CN":"原生属性"},"labelPosition":"none"}]}]},"configure":{"loop":true,"condition":true,"slots":[],"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":[]},"contextMenu":{"actions":[],"disable":[]}}},{"version":"1.0.0","name":{"zh_CN":"标题"},"component":["h1","h2","h3","h4","h5","h6"],"icon":"h16","description":"标题","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{},"group":"component","category":"html","priority":20,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"children","label":{"text":{"zh_CN":"类型"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlTextConfigurator","props":{"showRadioButton":true}},"description":{"zh_CN":""},"labelPosition":"none"},{"property":"attributes3","label":{"text":{"zh_CN":"原生属性"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlAttributesConfigurator","props":{}},"description":{"zh_CN":""},"labelPosition":"none"}]}],"events":{}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":[],"parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["disabled","size"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"1.0.0","name":{"zh_CN":"段落"},"component":"p","icon":"paragraph","description":"段落","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{},"group":"component","category":"html","priority":30,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"children","label":{"text":{"zh_CN":"类型"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlTextConfigurator","props":{}},"description":{"zh_CN":"类型"},"labelPosition":"none"},{"property":"attributes3","label":{"text":{"zh_CN":"原生属性"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlAttributesConfigurator","props":{}},"description":{"zh_CN":"原生属性"},"labelPosition":"none"}]}],"events":{}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":[],"parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":[]},"contextMenu":{"actions":[],"disable":[]}}},{"version":"1.0.0","name":{"zh_CN":"输入框"},"component":"input","icon":"input","description":"输入框","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{},"group":"component","category":"html","priority":40,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"type","label":{"text":{"zh_CN":"类型"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"checkbox","value":"checkbox"},{"label":"color","value":"color"},{"label":"date","value":"date"},{"label":"button","value":"button"},{"label":"email","value":"email"},{"label":"file","value":"file"},{"label":"hidden","value":"hidden"},{"label":"image","value":"image"},{"label":"month","value":"month"},{"label":"number","value":"number"},{"label":"password","value":"password"},{"label":"radio","value":"radio"},{"label":"range","value":"range"},{"label":"reset","value":"reset"},{"label":"search","value":"search"},{"label":"submit","value":"submit"},{"label":"text","value":"text"},{"label":"time","value":"time"},{"label":"week","value":"week"},{"label":"url","value":"url"}]}},"description":{"zh_CN":"类型"}},{"property":"placeholder","label":{"text":{"zh_CN":"占位符"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"占位符"}},{"property":"attributes3","label":{"text":{"zh_CN":"原生属性"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlAttributesConfigurator","props":{}},"description":{"zh_CN":"原生属性"},"labelPosition":"none"}]}],"events":{"onBlur":{"label":{"zh_CN":"失去焦点时触发"},"description":{"zh_CN":"在 Input 失去焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onFocus":{"label":{"zh_CN":"获取焦点时触发"},"description":{"zh_CN":"在 Input 获取焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onChange":{"label":{"zh_CN":"输入值改变时触发"},"description":{"zh_CN":"在 Input 输入值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":[],"parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["disabled","size"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"1.0.0","name":{"zh_CN":"视频"},"component":"video","icon":"video","description":"视频","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{},"group":"component","category":"html","priority":50,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"src","label":{"text":{"zh_CN":"资源"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"视频的 URL"}},{"property":"width","label":{"text":{"zh_CN":"播放器宽度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"视频播放器的宽度"}},{"property":"height","label":{"text":{"zh_CN":"播放器高度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"视频播放器的高度"}},{"property":"controls","label":{"text":{"zh_CN":"显示控件"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示控件"},"labelPosition":"left"},{"property":"autoplay","label":{"text":{"zh_CN":"马上播放"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否马上播放"},"labelPosition":"left"},{"property":"attributes3","label":{"text":{"zh_CN":"原生属性"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlAttributesConfigurator","props":{}},"description":{"zh_CN":"原生属性"},"labelPosition":"none"}]}],"events":{}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":[],"parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":[]},"contextMenu":{"actions":[],"disable":[]}}},{"version":"1.0.0","icon":"Image","name":{"zh_CN":"Img"},"component":"Img","container":false,"screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{},"group":"component","category":"html","priority":60,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"src","type":"string","bindState":true,"label":{"text":{"zh_CN":"资源"}},"cols":12,"rules":[],"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"src路径"}},{"property":"attributes3","label":{"text":{"zh_CN":"原生属性"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlAttributesConfigurator","props":{}},"description":{"zh_CN":"原生属性"},"labelPosition":"none"}]}],"events":{},"shortcuts":{"properties":["src"]},"contentMenu":{"actions":[]}}},{"version":"1.0.0","icon":"button","name":{"zh_CN":"Button"},"component":"button","container":false,"screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{},"group":"component","category":"html","priority":70,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"attributes3","label":{"text":{"zh_CN":"原生属性"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlAttributesConfigurator","props":{}},"description":{"zh_CN":"原生属性"},"labelPosition":"none"}]}],"events":{"onClick":{"label":{"zh_CN":"点击时触发"},"description":{"zh_CN":"点击时触发"},"type":"event","functionInfo":{"params":[],"returns":{}}}},"shortcuts":{"properties":[]},"contentMenu":{"actions":[]}},"configure":{"isContainer":true}},{"version":"1.0.0","icon":"table","name":{"zh_CN":"表格"},"component":"table","container":false,"screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{},"group":"component","category":"html","priority":80,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"width","label":{"text":{"zh_CN":"宽度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"表格的宽度"}},{"property":"border","label":{"text":{"zh_CN":"边框宽度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"表格边框的宽度"}},{"property":"attributes3","label":{"text":{"zh_CN":"原生属性"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlAttributesConfigurator","props":{}},"description":{"zh_CN":"原生属性"},"labelPosition":"none"}]}],"events":{"onClick":{"label":{"zh_CN":"点击时触发"},"description":{"zh_CN":"点击时触发"},"type":"event","functionInfo":{"params":[],"returns":{}}}},"shortcuts":{"properties":[]},"contentMenu":{"actions":[]}}},{"version":"1.0.0","icon":"td","name":{"zh_CN":"表格单元格"},"component":"td","container":false,"screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{},"group":"component","category":"html","priority":90,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"colspan","label":{"text":{"zh_CN":"合并列"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"单元格可横跨的列数"}},{"property":"rowspan","label":{"text":{"zh_CN":"合并行"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"单元格可横跨的行数"}},{"property":"attributes3","label":{"text":{"zh_CN":"原生属性"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"HtmlAttributesConfigurator","props":{}},"description":{"zh_CN":"原生属性"},"labelPosition":"none"}]}],"events":{"onClick":{"label":{"zh_CN":"点击时触发"},"description":{"zh_CN":"点击时触发"},"type":"event","functionInfo":{"params":[],"returns":{}}}},"shortcuts":{"properties":[]},"contentMenu":{"actions":[]}}},{"version":"1.0.0","icon":"form","name":{"zh_CN":"表单"},"component":"form","container":false,"screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{},"group":"component","category":"html","priority":100,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"name","label":{"text":{"zh_CN":"名称"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"表单的名称"}},{"property":"action","label":{"text":{"zh_CN":"提交地址"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"提交表单时向何处发送表单数据"}},{"property":"method","label":{"text":{"zh_CN":"HTTP方法"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"get","value":"get"},{"label":"post","value":"post"}]}},"description":{"zh_CN":"用于发送 form-data 的 HTTP 方法"}}]}],"events":{"onClick":{"label":{"zh_CN":"点击时触发"},"description":{"zh_CN":"点击时触发"},"type":"event","functionInfo":{"params":[],"returns":{}}}},"shortcuts":{"properties":[]},"contentMenu":{"actions":[]}},"configure":{"isContainer":true}},{"version":"3.20.0","name":{"zh_CN":"按钮组"},"component":"TinyButtonGroup","icon":"buttonGroup","description":"以按钮组的方式出现，常用于多项类似操作","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"ButtonGroup","destructuring":true},"group":"component","category":"general","priority":2,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"data","label":{"text":{"zh_CN":"数据"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{"language":"json"}},"description":{"zh_CN":"配置按钮组数据"}},{"property":"size","label":{"text":{"zh_CN":"大小"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"mini","value":"mini"},{"label":"small","value":"small"},{"label":"medium","value":"medium"}]}},"description":{"zh_CN":"组件大小"},"labelPosition":"left"},{"property":"plain","label":{"text":{"zh_CN":"朴素按钮"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否是朴素按钮"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"}]}],"events":{}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":[],"parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["disabled","size"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"row","name":{"zh_CN":"row"},"component":"TinyRow","description":"定义 Layout 的行配置信息，必须放在 TinyLayout 中","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Row","destructuring":true},"group":"component","priority":5,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"layout","label":{"text":{"zh_CN":"布局"}},"cols":12,"widget":{"component":"LayoutGridConfigurator","props":{}},"description":{"zh_CN":"选择布局方式"},"labelPosition":"none"},{"property":"align","label":{"text":{"zh_CN":"子项对齐方式"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"top","value":"top"},{"label":"middle","value":"middle"},{"label":"bottom","value":"bottom"}]}},"description":{"zh_CN":"子项的副轴对齐方向，可取值：top, middle, bottom"}},{"property":"flex","label":{"text":{"zh_CN":"flex容器"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否为flex容器"},"labelPosition":"left"},{"property":"gutter","label":{"text":{"zh_CN":"子项间隔"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"子项的间隔的像素"}}]}]},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":[],"parentWhitelist":["TinyLayout"],"descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":[]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"row","name":{"zh_CN":"row"},"component":"TinyLayout","description":"定义 Layout 的行和列配置信息","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Layout","version":"3.20.0","destructuring":true},"group":"component","priority":5,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"cols","label":{"text":{"zh_CN":"总栅格数;该属性的可选值为 12 /24, 默认总栅格数为12, TinyRow中的TinyCol子项的span之和不能超过总栅格数"}},"type":"12 | 24","required":false,"readOnly":false,"disabled":false,"defaultValue":12,"cols":12,"widget":{"component":"ButtonGroupConfigurator","props":{"options":[{"label":"12","value":12},{"label":"24","value":24}]}},"description":{"zh_CN":"选择总栅格数"},"labelPosition":"none"},{"property":"tag","label":{"text":{"zh_CN":"layout渲染的标签"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"定义Layout元素渲染后的标签，默认为 div"}}]}]},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":["TinyRow","TinyCol"],"parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["disabled"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"form","name":{"zh_CN":"表单"},"component":"TinyForm","description":"由按钮、输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Form","destructuring":true},"group":"component","priority":5,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"},{"property":"labelWidth","label":{"text":{"zh_CN":"标签宽度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"表单中标签占位宽度，默认为 80px"},"labelPosition":"left"},{"property":"inline","label":{"text":{"zh_CN":"行内布局"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"行内布局模式，默认为 false"},"labelPosition":"left"},{"property":"labelAlign","label":{"text":{"zh_CN":"必填标识占位"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"必填标识 * 是否占位"},"labelPosition":"left"},{"property":"labelSuffix","label":{"text":{"zh_CN":"标签后缀"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"表单中标签后缀"},"labelPosition":"left"},{"property":"labelPosition","label":{"text":{"zh_CN":"标签位置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"right","value":"right"},{"label":"left ","value":"left "},{"label":"top","value":"top"}]}},"description":{"zh_CN":"表单中标签的布局位置"},"labelPosition":"left"}]},{"name":"1","label":{"zh_CN":"校验属性"},"content":[{"property":"model","label":{"text":{"zh_CN":"数据对象"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"表单数据对象"},"labelPosition":"top"},{"property":"rules","label":{"text":{"zh_CN":"校验规则"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"表单验证规则"},"labelPosition":"top"}],"description":{"zh_CN":""}}],"events":{"onValidate":{"label":{"zh_CN":"表单项被校验后触发"},"description":{"zh_CN":"表单项被校验后触发"},"type":"event","functionInfo":{"params":[{"name":"function","type":"Function","description":{"zh_CN":"校验回调函数"}}],"returns":{}}},"onInput":{"label":{"zh_CN":"输入值改变时触发"},"description":{"zh_CN":"在 Input 输入值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"输入框输入的值"}}],"returns":{}}},"onBlur":{"label":{"zh_CN":"失去焦点时触发"},"description":{"zh_CN":"在 Input 失去焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onFocus":{"label":{"zh_CN":"获取焦点时触发"},"description":{"zh_CN":"在 Input 获取焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onClear":{"label":{"zh_CN":"点击清空按钮时触发"},"description":{"zh_CN":"点击清空按钮时触发"},"type":"event","functionInfo":{"params":[],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":[],"parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["labelWidth","disabled"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"formitem","name":{"zh_CN":"表单项"},"component":"TinyFormItem","description":"由按钮、输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据, 必须放在 TinyForm 中使用， 可以是直接子元素或者间接子元素","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"FormItem","destructuring":true},"group":"component","priority":12,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"label","label":{"text":{"zh_CN":"标签文本"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"标签文本"},"labelPosition":"left"},{"property":"prop","label":{"text":{"zh_CN":"校验字段"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的"},"labelPosition":"left"},{"property":"required","label":{"text":{"zh_CN":"必填"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否必填"},"labelPosition":"left"}]}],"events":{},"slots":{"label":{"label":{"zh_CN":"字段名"},"description":{"zh_CN":"自定义显示字段名称"}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":["TinyForm"],"descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["label","rules"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"col","name":{"zh_CN":"col"},"component":"TinyCol","description":"列配置信息，必须放在TinyRow中","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Col","destructuring":true},"group":"component","priority":2,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"span","label":{"text":{"zh_CN":"栅格列格数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"整行","value":12},{"label":"6格","value":6},{"label":"4格","value":4},{"label":"3格","value":3},{"label":"1格","value":1}]}},"description":{"zh_CN":"当一行分为12格时，一列可占位多少格"}},{"property":"move","label":{"text":{"zh_CN":"栅格移动格数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"min":-12,"max":12}},"description":{"zh_CN":"栅格左右移动格数（正数向右，负数向左）"}},{"property":"no","label":{"text":{"zh_CN":"排序编号"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"max":12}},"description":{"zh_CN":"排序编号（row中启用order生效）"}},{"property":"offset","label":{"text":{"zh_CN":"间隔格数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"min":0,"max":12}},"description":{"zh_CN":"栅格左侧的间隔格数"}},{"property":"xs","label":{"text":{"zh_CN":"超小屏格数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"min":1,"max":12}},"description":{"zh_CN":"<768px 响应式栅格数"}},{"property":"sm","label":{"text":{"zh_CN":"小屏格数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"min":1,"max":12}},"description":{"zh_CN":"≥768px 响应式栅格数"}},{"property":"md","label":{"text":{"zh_CN":"中屏格数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"min":1,"max":12}},"description":{"zh_CN":"≥992px 响应式栅格数"}},{"property":"lg","label":{"text":{"zh_CN":"大屏格数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"min":1,"max":12}},"description":{"zh_CN":"≥1200px 响应式栅格数"}},{"property":"xl","label":{"text":{"zh_CN":"超大屏格数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"min":1,"max":12}},"description":{"zh_CN":"≥1920px 响应式栅格数"}}]}],"events":{}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["label","rules"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","name":{"zh_CN":"按钮"},"component":"TinyButton","icon":"button","description":"常用的操作按钮，提供包括默认按钮、图标按钮、图片按钮、下拉按钮等类型","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Button","destructuring":true},"group":"component","priority":2,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"text","type":"string","label":{"text":{"zh_CN":"按钮文字"}},"cols":12,"hidden":false,"required":true,"readOnly":false,"disabled":false,"widget":{"component":"I18nConfigurator","props":{}},"description":{"zh_CN":"按钮文字"},"labelPosition":"left"},{"property":"size","type":"select","label":{"text":{"zh_CN":"大小"}},"cols":12,"rules":[],"hidden":false,"required":true,"readOnly":false,"disabled":false,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"large","value":"large"},{"label":"medium","value":"medium"},{"label":"small","value":"small"},{"label":"mini","value":"mini"}]}},"description":{"zh_CN":"按钮大小"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否被禁用"},"labelPosition":"left"},{"property":"type","label":{"text":{"zh_CN":"类型"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"primary","value":"primary"},{"label":"success","value":"success"},{"label":"info","value":"info"},{"label":"warning","value":"warning"},{"label":"danger","value":"danger"},{"label":"text","value":"text"}]}},"description":{"zh_CN":"设置不同的主题样式"},"labelPosition":"left"}]},{"name":"1","label":{"zh_CN":"其他"},"content":[{"property":"round","label":{"text":{"zh_CN":"圆角"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否圆角按钮"},"labelPosition":"left"},{"property":"plain","label":{"text":{"zh_CN":"朴素按钮"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否为朴素按钮"},"labelPosition":"left"},{"property":"reset-time","label":{"text":{"zh_CN":"禁用时间"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"设置禁用时间，防止重复提交，单位毫秒"},"labelPosition":"left"},{"property":"circle","label":{"text":{"zh_CN":"圆形按钮"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否圆形按钮"},"labelPosition":"left"},{"property":"autofocus","label":{"text":{"zh_CN":"自动聚焦"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否默认聚焦"},"labelPosition":"left"},{"property":"loading","label":{"text":{"zh_CN":"加载中样式"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否展示位加载中样式"},"labelPosition":"left"}],"description":{"zh_CN":""}}],"events":{"onClick":{"label":{"zh_CN":"点击事件"},"description":{"zh_CN":"按钮被点击时触发的回调函数"},"type":"event","functionInfo":{"params":[],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["text","size"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","name":{"zh_CN":"输入框"},"component":"TinyInput","icon":"input","description":"通过鼠标或键盘输入字符","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Input","destructuring":true},"group":"component","priority":1,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"I18nConfigurator","props":{}},"description":{"zh_CN":"双向绑定值"},"labelPosition":"left"},{"property":"type","label":{"text":{"zh_CN":"类型"}},"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"textarea","value":"textarea"},{"label":"text","value":"text"},{"label":"password","value":"password"}]}},"description":{"zh_CN":"设置input框的type属性"},"labelPosition":"left"},{"property":"rows","label":{"text":{"zh_CN":"行数"}},"widget":{"component":"NumberConfigurator"},"description":{"zh_CN":"输入框行数，只对 type='textarea' 有效"},"labelPosition":"left"},{"property":"placeholder","label":{"text":{"zh_CN":"占位文本"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"I18nConfigurator","props":{}},"description":{"zh_CN":"输入框占位文本"},"labelPosition":"left"},{"property":"clearable","label":{"text":{"zh_CN":"清除按钮"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示清除按钮"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"},{"property":"size","label":{"text":{"zh_CN":"尺寸"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"medium","value":"medium"},{"label":"small","value":"small"},{"label":"mini","value":"mini"}]}},"description":{"zh_CN":"输入框尺寸。该属性的可选值为： medium 、small 、 mini"},"labelPosition":"left"}]},{"name":"1","label":{"zh_CN":"其他"},"content":[{"property":"maxlength","label":{"text":{"zh_CN":"最大输入长度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"设置 input 框的maxLength"}},{"property":"autofocus","label":{"text":{"zh_CN":"自动聚焦"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"自动获取焦点"},"labelPosition":"left"}],"description":{"zh_CN":""}}],"events":{"onChange":{"label":{"zh_CN":"值改变时触发"},"description":{"zh_CN":"在 Input 值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"输入框改变后的值"}}],"returns":{}}},"onInput":{"label":{"zh_CN":"输入值改变时触发"},"description":{"zh_CN":"在 Input 输入值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"输入框输入的值"}}],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"在 Input 输入值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"双向绑定的值"}}],"returns":{}}},"onBlur":{"label":{"zh_CN":"失去焦点时触发"},"description":{"zh_CN":"在 Input 失去焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onFocus":{"label":{"zh_CN":"获取焦点时触发"},"description":{"zh_CN":"在 Input 获取焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onClear":{"label":{"zh_CN":"点击清空按钮时触发"},"description":{"zh_CN":"点击清空按钮时触发"},"type":"event","functionInfo":{"params":[],"returns":{}}}},"slots":{"prefix":{"label":{"zh_CN":"前置内容"}},"suffix":{"label":{"zh_CN":"后置内容"}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["value","disabled"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"radio","name":{"zh_CN":"单选"},"component":"TinyRadio","description":"用于配置不同场景的选项，在一组备选项中进行单选","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Radio","destructuring":true},"group":"component","priority":3,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"text","label":{"text":{"zh_CN":"文本内容"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"单选框文本内容"}},{"property":"label","label":{"text":{"zh_CN":"选中值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"props":{}},"description":{"zh_CN":"radio 选中时的值"}},{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"双向绑定的当前选中值"}},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"}]},{"label":{"zh_CN":"其他"},"description":{"zh_CN":""},"content":[{"property":"border","label":{"text":{"zh_CN":"显示边框"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示边框"},"labelPosition":"left"},{"property":"size","label":{"text":{"zh_CN":"尺寸"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"单选框的尺寸，仅在 border 为true时有效"}},{"property":"name","label":{"text":{"zh_CN":"原生name属性"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"原生 name 属性"}}]}],"events":{"onChange":{"label":{"zh_CN":"值变化事件"},"description":{"zh_CN":"绑定值变化时触发的事件"}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"当前选中的值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"双向绑定的当前选中值"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["visible","width"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"name":{"zh_CN":"单选按钮组"},"component":"TinyRadioGroup","icon":"radio-group","description":"用于在一组选项中进行单选。","doc_url":"https://www.opentiny.design/tiny-vue/components/radio","screenshot":"","tags":"","keywords":"","dev_mode":"proCode","npm":{},"group":"component","configure":{},"schema":{"properties":[{"label":{"zh_CN":"基础属性"},"description":{"zh_CN":"基础属性"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"description":{"zh_CN":"单选框组的绑定值"}},{"property":"options","label":{"text":{"zh_CN":"选项列表"}},"defaultValue":[],"required":true,"readOnly":false,"disabled":false,"description":{"zh_CN":"单选按钮选项列表，配置单选组的值、文本和点击事件。示例：[{label: '1', text: '选项1', events: {click: () => {console.log('点击选项1')}}}]"}},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":false,"readOnly":false,"disabled":false,"description":{"zh_CN":"是否禁用整个单选组"}},{"property":"type","label":{"text":{"zh_CN":"展示形式"}},"required":false,"readOnly":false,"disabled":false,"widget":{"component":"ButtonGroupConfigurator","props":{"options":[{"label":"radio","value":"radio"},{"label":"button","value":"button"}]}},"description":{"zh_CN":"单选组的展示形式,可选值为：radio(单选框) 、 button(按钮、选项式)"}},{"property":"size","label":{"text":{"zh_CN":"尺寸"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"medium","value":"medium"},{"label":"small","value":"small"},{"label":"mini","value":"mini"}]}},"description":{"zh_CN":"单选组尺寸, 可选值有 medium 、 small 、 mini"}},{"property":"vertical","label":{"text":{"zh_CN":"垂直排列"}},"required":false,"readOnly":false,"disabled":false,"description":{"zh_CN":"是否垂直展示单选按钮"}}]}],"events":{"onChange":{"label":{"zh_CN":"选中值变化时触发"},"description":{"zh_CN":"选中值变化时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","defaultValue":"","description":{"zh_CN":"当前选中的值"}}],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"绑定值更新时触发"},"description":{"zh_CN":"v-model 对应的值更新时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","defaultValue":"","description":{"zh_CN":"更新后的绑定值"}}],"returns":{}}}}}},{"version":"3.20.0","icon":"select","name":{"zh_CN":"下拉框"},"component":"TinySelect","description":"Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Select","destructuring":true},"group":"component","priority":8,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"双向绑定的当前选中值"},"labelPosition":"left"},{"property":"placeholder","label":{"text":{"zh_CN":"占位文本"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"输入框占位文本"},"labelPosition":"left"},{"property":"clearable","label":{"text":{"zh_CN":"清除按钮"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示清除按钮"},"labelPosition":"left"},{"property":"searchable","label":{"text":{"zh_CN":"下拉可搜索"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"下拉面板是否可搜索"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"},{"property":"options","label":{"text":{"zh_CN":"选项数据"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"defaultValue":[],"widget":{"component":"CodeConfigurator","props":{"language":"json"}},"description":{"zh_CN":"配置 Select 下拉数据项"},"labelPosition":"top"},{"property":"tooltipConfig","defaultValue":{"always":false},"label":{"text":{"zh_CN":"悬浮提示配置，默认不显示"}},"required":false},{"property":"multiple","label":{"text":{"zh_CN":"多选"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否允许输入框输入或选择多个项"},"labelPosition":"left"}]},{"name":"1","label":{"zh_CN":"其他"},"content":[{"property":"multiple-limit","label":{"text":{"zh_CN":"最大可选值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"多选时用户最多可以选择的项目数，为 0 则不限制"},"labelPosition":"left"},{"property":"popper-class","label":{"text":{"zh_CN":"下拉框类名"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"设置下拉框自定义的类名"},"labelPosition":"left"},{"property":"collapse-tags","label":{"text":{"zh_CN":"多选展示"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"多选时是否将选中值按文字的形式展示"},"labelPosition":"left"}],"description":{"zh_CN":""}}],"events":{"onChange":{"label":{"zh_CN":"值改变时触发"},"description":{"zh_CN":"在下拉框值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"下拉框选中项的值"}}],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"当前选中的值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"双向绑定的当前选中值"}}],"returns":{}}},"onBlur":{"label":{"zh_CN":"失去焦点时触发"},"description":{"zh_CN":"在 Input 失去焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onFocus":{"label":{"zh_CN":"获取焦点时触发"},"description":{"zh_CN":"在 Input 获取焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onClear":{"label":{"zh_CN":"点击清空按钮时触发"},"description":{"zh_CN":"点击清空按钮时触发"},"type":"event","functionInfo":{"params":[],"returns":{}}},"onRemoveTag":{"label":{"zh_CN":"多选模式下移除tag时触发"},"description":{"zh_CN":"多选模式下移除tag时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"Object","description":{"zh_CN":"被移除Tag对应数据项的值字段"}}],"returns":{}}}},"onBeforeMount":"console.log('table on load'); this.options = source.data"},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["multiple","options"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"switch","name":{"zh_CN":"开关"},"component":"TinySwitch","description":"Switch 在两种状态间切换选择","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Switch","destructuring":true},"group":"component","priority":9,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否被禁用"},"labelPosition":"left"},{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"绑定默认值"},"labelPosition":"left"},{"property":"true-value","label":{"text":{"zh_CN":"设置打开值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"设置打开时的值，类型为：Boolean | String | Number"},"labelPosition":"left"},{"property":"false-value","label":{"text":{"zh_CN":"设置关闭值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"设置关闭时的值，类型为：Boolean | String | Number"},"labelPosition":"left"},{"property":"mini","label":{"text":{"zh_CN":"迷你尺寸"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示为 mini 模式"},"labelPosition":"left"}]}],"events":{"onChange":{"label":{"zh_CN":"点击事件"},"description":{"zh_CN":"按钮被点击时触发的回调函数"},"type":"event","functionInfo":{"params":[],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"开关的状态值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"双向绑定的开关状态值"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["disabled","mini"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"search","name":{"zh_CN":"搜索框"},"component":"TinySearch","description":"指定条件对象进行搜索数据","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Search","destructuring":true},"group":"component","priority":2,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"默认值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"输入框内的默认搜索值"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否被禁用"},"labelPosition":"left"},{"property":"placeholder","label":{"text":{"zh_CN":"占位文本"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"输入框内的提示占位文本"},"labelPosition":"left"},{"property":"clearable","label":{"text":{"zh_CN":"清空按钮"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"设置显示清空图标按钮"},"labelPosition":"left"},{"property":"isEnterSearch","label":{"text":{"zh_CN":"Enter键触发"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否在按下键盘Enter键的时候触发search事件"},"labelPosition":"left"}]},{"name":"1","label":{"zh_CN":"其他"},"content":[{"property":"mini","label":{"text":{"zh_CN":"迷你尺寸"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"迷你模式，配置为true时，搜索默认显示为一个带图标的圆形按钮，点击后展开"},"labelPosition":"left"},{"property":"transparent","label":{"text":{"zh_CN":"透明模式"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"配置为true时，边框变为透明且收缩后半透明显示，一般用在带有背景的场景，默认 false"},"labelPosition":"left"}],"description":{"zh_CN":""}}],"events":{"onChange":{"label":{"zh_CN":"输入完成时触发"},"description":{"zh_CN":"在 input 框中输入完成时触发的回调函数"},"type":"event","functionInfo":{"params":[{"name":"type","type":"string","description":{"zh_CN":"搜索类型,默认值为 {} "}},{"name":"value","type":"string","description":{"zh_CN":"当前input框中值"}}],"returns":{}}},"onSearch":{"label":{"zh_CN":"点击搜索按钮时触发"},"description":{"zh_CN":"展开状态点击搜索按钮时触发的回调函数"},"type":"event","functionInfo":{"params":[{"name":"type","type":"string","description":{"zh_CN":"搜索类型,默认值为 {} "}},{"name":"value","type":"string","description":{"zh_CN":"当前input框中值"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["clearable","mini"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"checkbox","name":{"zh_CN":"复选框"},"component":"TinyCheckbox","description":"用于配置不同场景的选项，提供用户可在一组选项中进行多选","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Checkbox","destructuring":true},"group":"component","priority":4,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"双向绑定值"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"},{"property":"checked","label":{"text":{"zh_CN":"勾选"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"当前是否勾选"},"labelPosition":"left"},{"property":"text","label":{"text":{"zh_CN":"文本"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"复选框的文本"},"labelPosition":"left"}]},{"name":"1","label":{"zh_CN":"其他"},"content":[{"property":"border","label":{"text":{"zh_CN":"边框"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示边框"},"labelPosition":"left"},{"property":"false-label","label":{"text":{"zh_CN":"未选中的值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"没有选中时的值"},"labelPosition":"left"},{"property":"true-label","label":{"text":{"zh_CN":"选择时的值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"选中时的值"},"labelPosition":"left"}],"description":{"zh_CN":""}}],"events":{"onChange":{"label":{"zh_CN":"勾选值改变后将触发"},"description":{"zh_CN":"勾选值改变后将触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"选中项的值"}}],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"当前选中的值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"双向绑定的当前选中值"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["border","disabled"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"checkboxbutton","name":{"zh_CN":"复选按钮"},"component":"TinyCheckboxButton","description":"用于配置不同场景的选项，提供用户可在一组选项中进行多选","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"CheckboxButton","destructuring":true},"group":"component","priority":1,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"双向绑定的当前选中值"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"},{"property":"checked","label":{"text":{"zh_CN":"勾选"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"当前是否勾选"},"labelPosition":"left"},{"property":"text","label":{"text":{"zh_CN":"文本"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"按钮文本"},"labelPosition":"left"}]}],"events":{"onChange":{"label":{"zh_CN":"勾选值改变后将触发"},"description":{"zh_CN":"勾选值改变后将触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"选中项的值"}}],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"当前选中的值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"array","description":{"zh_CN":"双向绑定的当前选中值"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["text","size"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"checkboxgroup","name":{"zh_CN":"复选按钮组"},"component":"TinyCheckboxGroup","description":"用于配置不同场景的选项，提供用户可在一组选项中进行多选","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"CheckboxGroup","destructuring":true},"group":"component","priority":2,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{"dataType":"Array"}},"description":{"zh_CN":"双向绑定的当前选中值"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"},{"property":"options","label":{"text":{"zh_CN":"选项列表"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{"language":"json"}},"description":{"zh_CN":"checkbox组件列表"},"labelPosition":"top"},{"property":"type","label":{"text":{"zh_CN":"类型"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"ButtonGroupConfigurator","props":{"options":[{"label":"button","value":"button"},{"label":"checkbox","value":"checkbox"}]}},"description":{"zh_CN":"checkbox组件类型（button/checkbox），该属性的默认值为 checkbox,配合 options 属性一起使用"},"labelPosition":"left"}]}],"events":{"onChange":{"label":{"zh_CN":"勾选值改变后将触发"},"description":{"zh_CN":"勾选值改变后将触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"选中项的值"}}],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"当前选中的值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"array","description":{"zh_CN":"双向绑定的当前选中值"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["disabled","type"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"dialogbox","name":{"zh_CN":"对话框"},"component":"TinyDialogBox","description":"模态对话框，在浮层中显示，引导用户进行相关操作。","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"DialogBox","destructuring":true},"group":"component","priority":4,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"title","label":{"text":{"zh_CN":"标题"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"弹出框标题"},"labelPosition":"left"},{"property":"visible","label":{"text":{"zh_CN":"显示与隐藏"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"控制弹出框显示与关闭"},"labelPosition":"left"},{"property":"width","label":{"text":{"zh_CN":"宽度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"弹出框的宽度"},"labelPosition":"left"},{"property":"draggable","label":{"text":{"zh_CN":"可拖拽"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否开启弹窗的拖拽功能，默认值为 false 。"},"labelPosition":"left"},{"property":"center","label":{"text":{"zh_CN":"居中"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"弹出框的头部与底部内容会自动居中"},"labelPosition":"left"},{"property":"dialog-class","label":{"text":{"zh_CN":"自定义类名"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"自定义配置弹窗类名"},"labelPosition":"left"},{"property":"append-to-body","label":{"text":{"zh_CN":"插入到Body"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"DialogBox 本身是否插入到 body 上，嵌套的 Dialog 必须指定该属性并赋值为 true"},"labelPosition":"left"},{"property":"show-close","label":{"text":{"zh_CN":"关闭按钮"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示关闭按钮，默认值为 true 。"},"labelPosition":"left"}]}],"selector":".TinyDialogBox","events":{"onClose":{"label":{"zh_CN":"关闭弹窗时触发"},"description":{"zh_CN":"Dialog 关闭的回调"},"type":"event","functionInfo":{"params":[],"returns":{}}},"onUpdate:visible":{"label":{"zh_CN":"双向绑定的状态改变时触发"},"description":{"zh_CN":"显示或隐藏的状态值，发生改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"boolean","description":{"zh_CN":"双向绑定的显示或隐藏的状态值"}}],"returns":{}}}},"slots":{"title":{"label":{"zh_CN":"标题区"},"description":{"zh_CN":"Dialog 标题区的内容"}},"footer":{"label":{"zh_CN":"按钮操作区"},"description":{"zh_CN":"Dialog 按钮操作区的内容"}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":true,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":".tiny-dialog-box","shortcuts":{"properties":["visible","width"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"tabs","name":{"zh_CN":"标签页"},"component":"TinyTabs","description":"分隔内容上有关联但属于不同类别的数据集合","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Tabs","destructuring":true},"group":"component","priority":10,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"tabs","label":{"text":{"zh_CN":"选项卡"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"bindState":false,"widget":{"component":"ContainerConfigurator","props":{}},"description":{"zh_CN":"tabs 选项卡"},"labelPosition":"none"},{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"绑定值，选中选项卡的 name"},"labelPosition":"left"},{"property":"with-add","label":{"text":{"zh_CN":"标签新增"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"标签是否可增加"},"labelPosition":"left"},{"property":"with-close","label":{"text":{"zh_CN":"可关闭"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"标签是否可关闭"},"labelPosition":"left"},{"property":"tab-style","label":{"text":{"zh_CN":"标签页样式"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"card","value":"card"},{"label":"border-card","value":"border-card"}]}},"description":{"zh_CN":"标签页样式"},"labelPosition":"left"}]}],"events":{"onClick":{"label":{"zh_CN":"点击页签时触发事件"},"description":{"zh_CN":"在 Input 值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"component","type":"Object","description":{"zh_CN":"当前点击的页签对象"}},{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onEdit":{"label":{"zh_CN":"点击新增按钮或关闭按钮或者编辑按钮后触发"},"description":{"zh_CN":"点击新增按钮或关闭按钮或者编辑按钮后触发"},"type":"event","functionInfo":{"params":[{"name":"tab","type":"Object","description":{"zh_CN":"当前操作的页签对象"}},{"name":"type","type":"String","description":{"zh_CN":"当前操作的类型（remove || add || edit）"}}],"returns":{}}},"onClose":{"label":{"zh_CN":"关闭页签时触发"},"description":{"zh_CN":"关闭页签时触发"},"type":"event","functionInfo":{"params":[{"name":"name","type":"String","description":{"zh_CN":"页签名称"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"clickCapture":false,"isModal":false,"nestingRule":{"childWhitelist":["TinyTabItem"],"parentWhitelist":[],"descendantBlacklist":[],"ancestorWhitelist":[]},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["size","tab-style"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"tabitem","name":{"zh_CN":"tab页签"},"component":"TinyTabItem","description":"tab 标签页","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"TabItem","destructuring":true},"group":"component","priority":2,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"name","label":{"text":{"zh_CN":"唯一标识"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"唯一标识"}},{"property":"title","label":{"text":{"zh_CN":"标题"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"标题"}}]}],"events":{},"slots":{"title":{"label":{"zh_CN":"标题"},"description":{"zh_CN":"自定义标题"}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":["TinyTab"],"descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["name","title"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"breadcrumb","name":{"zh_CN":"面包屑"},"component":"TinyBreadcrumb","description":"告诉访问者他们目前在网站中的位置以及如何返回","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Breadcrumb","destructuring":true},"group":"component","priority":1,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"separator","label":{"text":{"zh_CN":"分隔符"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"自定义分隔符"},"labelPosition":"left"},{"property":"options","label":{"text":{"zh_CN":"配置数据"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{"language":"json"}},"description":{"zh_CN":"单独使用 Breadcrumb，通过 option 配置生成面包屑"},"labelPosition":"top"},{"property":"textField","label":{"text":{"zh_CN":"键值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"指定面包屑的显示键值，结合 options 使用"},"labelPosition":"left"}]}],"events":{"onSelect":{"label":{"zh_CN":"选择 breadcrumb 时触发"},"description":{"zh_CN":"选择 breadcrumb 时触发"},"type":"event","functionInfo":{"params":[],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"clickCapture":false,"isModal":false,"nestingRule":{"childWhitelist":["TinyBreadcrumbItem"],"parentWhitelist":[],"descendantBlacklist":[],"ancestorWhitelist":[]},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["separator"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"breadcrumb","name":{"zh_CN":"面包屑项"},"component":"TinyBreadcrumbItem","description":"","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"BreadcrumbItem","destructuring":true},"group":"component","priority":1,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"to","label":{"text":{"zh_CN":"路由跳转"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"路由跳转对象，同 vue-router 的 to"}}]}],"slots":{"default":{"label":{"zh_CN":"面包屑项标签"},"description":{"zh_CN":"面包屑项"}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":["TinyBreadcrumb"],"descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["to"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"collapse","name":{"zh_CN":"折叠面板"},"component":"TinyCollapse","description":"内容区可指定动态页面或自定义 html 等，支持展开收起操作","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Collapse","destructuring":true},"group":"component","priority":3,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"当前激活面板"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"双向绑定当前激活的面板"}}]}],"events":{"onChange":{"label":{"zh_CN":"激活面板改变时触发"},"description":{"zh_CN":"当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)"},"type":"event","functionInfo":{"params":[{"name":"data","type":"string","description":{"zh_CN":"当前激活面板的值"}}],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"当前激活面板的值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"双向绑定的值"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":[]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"collapseitem","name":{"zh_CN":"折叠面板项"},"component":"TinyCollapseItem","description":"内容区可指定动态页面或自定义 html 等，支持展开收起操作","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"CollapseItem","destructuring":true},"group":"component","priority":2,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"name","label":{"text":{"zh_CN":"唯一标识符"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"唯一标识符： String | Number"},"labelPosition":"left"},{"property":"title","label":{"text":{"zh_CN":"标题"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"面板标题"},"labelPosition":"left"}]}],"events":{},"slots":{"title":{"label":{"zh_CN":"标题"},"description":{"zh_CN":"自定义标题"}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["name","title"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"grid","name":{"zh_CN":"表格"},"component":"TinyGrid","description":"提供了非常强大数据表格功能，可以展示数据列表，可以对数据列表进行选择、编辑等","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Grid","destructuring":true},"group":"component","priority":2,"schema":{"properties":[{"label":{"zh_CN":"基础属性"},"description":{"zh_CN":"基础属性"},"content":[{"property":"data","label":{"text":{"zh_CN":"表格数据"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{"language":"json"}},"onChange":"this.delProp('fetchData')","description":{"zh_CN":"设置表格的数据（静态数据）。与 fetchData 互斥，配置其一即可"},"labelPosition":"top"},{"property":"columns","label":{"text":{"zh_CN":"表格列配置，需优先于 data 生成"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"properties":[{"label":{"zh_CN":"默认分组"},"content":[{"property":"title","type":"string","label":{"text":{"zh_CN":"列标题"}},"widget":{"component":"I18nConfigurator","props":{}}},{"property":"field","type":"string","label":{"text":{"zh_CN":"列对应的数据字段名"}},"widget":{"component":"InputConfigurator","props":{}}},{"property":"sortable","type":"boolean","label":{"text":{"zh_CN":"该列是否可排序，默认 false"}},"widget":{"component":"CheckBoxConfigurator","props":{}},"labelPosition":"left"},{"property":"width","type":"string","label":{"text":{"zh_CN":"列宽，可为整数、px、%、auto"}},"widget":{"component":"NumberConfigurator","props":{}}},{"property":"formatText","type":"string","label":{"text":{"zh_CN":"内置渲染器"}},"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"整数","value":"integer"},{"label":"小数","value":"number"},{"label":"金额","value":"money"},{"label":"百分比","value":"rate"},{"label":"布尔","value":"boole"},{"label":"年月日","value":"date"},{"label":"年月日时分","value":"dateTime"},{"label":"时间","value":"time"},{"label":"省略","value":"ellipsis"},{"label":"枚举","value":"enum"},{"label":"下拉","value":"select"},{"label":"文件大小","value":"filesize"},{"label":"长日期时间","value":"longDateTime"},{"label":"长时间","value":"longTime"},{"label":"年月","value":"yearMonth"}]}}},{"property":"renderer","type":"object","label":{"text":{"zh_CN":"列渲染配置函数，自定义渲染内容，优先级高于formatText"}},"widget":{"component":"CodeConfigurator","props":{"dataType":"JSFunction"}}},{"property":"slots","type":"object","label":{"text":{"zh_CN":"插槽"}},"labelPosition":"none","widget":{"component":"JsSlotConfigurator","props":{"slots":["header","default"]}},"description":{"zh_CN":"插槽配置信息，可以配置多个插槽，比如：header、default等, 参数有row(行数据)，column(列数据)，$table(内部表格实例)，seq(序号)，cell(单元格)，columnIndex(列索引)，$rowIndex(行索引)， 需要在params数组声明后使用，使用时直接使用变量即可"}},{"property":"type","label":{"text":{"zh_CN":"列类型"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"索引列","value":"index"},{"label":"单选列","value":"radio"},{"label":"多选列","value":"selection"},{"label":"展开列","value":"expand"},{"label":"操作列","value":"operation"}],"clearable":true}},"description":{"zh_CN":"内置列类型：index（序号）、selection（复选）、radio（单选）、expand（展开行）、operation（操作列）"},"labelPosition":"left"},{"property":"editor","label":{"text":{"zh_CN":"编辑配置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{"language":"json"}},"description":{"zh_CN":"单元格编辑渲染配置项，也可以是函数 Function(h, params)"}},{"property":"filter","label":{"text":{"zh_CN":"筛选配置"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{"language":"json"}},"description":{"zh_CN":"设置表格列的筛选配置信息。默认值为 false 不配置筛选信息"}},{"property":"showOverflow","label":{"text":{"zh_CN":"内容超出部分省略号配置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"只显示省略号","value":"ellipsis"},{"label":"显示为原生 title","value":"title"},{"label":"显示为 tooltip 提示","value":"tooltip"}],"clearable":true}},"description":{"zh_CN":"设置内置列的内容超出部分显示省略号配置，该属性的可选值为： ellipsis(只显示省略号） 、 title(显示为原生 title) 、 tooltip(显示为 tooltip 提示）"},"labelPosition":"top"}]}],"widget":{"component":"ArrayItemConfigurator","props":{"type":"object","textField":"title","language":"json","buttonText":"编辑列配置","title":"编辑列配置","expand":true}},"description":{"zh_CN":"表格列配置，需优先于 data 生成。列常用字段：title/field/width/type/sortable/showOverflow"},"labelPosition":"left"},{"property":"fetchData","label":{"text":{"zh_CN":"服务端查询"}},"required":true,"readOnly":false,"disabled":false,"onChange":"function () { this.delProp('data') } ","cols":12,"widget":{"component":"CodeConfigurator","props":{"name":"fetchData","dataType":"JSExpression"}},"description":{"zh_CN":"服务端数据查询方法，如 { api: () => Promise }。与 data 互斥，需配合 pager 使用"},"labelPosition":"top"},{"property":"pager","label":{"text":{"zh_CN":"分页配置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{"name":"pager","dataType":"JSExpression"}},"description":{"zh_CN":"分页配置，需结合 fetchData。写法如 { attrs: { currentPage 当前页, pageSize 每页条数, pageSizes 可选每页条数数组, total 总条数, layout 布局如 \\"total, prev, pager, next, jumper\\" } }"},"labelPosition":"top"},{"property":"resizable","label":{"text":{"zh_CN":"调整列宽"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否允许调整列宽，默认 true"},"labelPosition":"left"},{"property":"row-id","label":{"text":{"zh_CN":"行数据主键"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{"placeholder":"比如：id"}},"description":{"zh_CN":"自定义行数据唯一主键字段名（默认 _RID，行数据需有唯一主键，默认自动生成）"},"labelPosition":"left"},{"property":"select-config","label":{"text":{"zh_CN":"行复选框配置"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{"dataType":"JSExpression"}},"description":{"zh_CN":"行复选框配置，需配合列 type=selection。常用字段：trigger 勾选触发方式（cell 点单元格 / row 点整行，默认点复选框图标）；labelField 复选框旁显示的字段名；checkRowKeys 初始化默认勾选的行主键数组（依赖 row-id）；checkMethod函数配置是否可选 返回 false 则该行不可勾选；checkAll 初始化是否全选；showHeader 表头是否显示全选框；"}},{"property":"edit-rules","label":{"text":{"zh_CN":"校验规则"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"编辑校验规则，配合 edit-config 与列 editor 使用。按字段名配置规则数组，如 { name: [{ required: true, message: \\"必填\\" }, { min: 2, max: 10, message: \\"长度 2-10\\" }] }"},"labelPosition":"top"},{"property":"edit-config","label":{"text":{"zh_CN":"编辑配置项"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"表格编辑配置。常用字段：trigger 激活方式（click / dblclick / manual）；mode 编辑粒度（cell 单元格 / row 整行）；showStatus 是否显示编辑状态标记；activeMethod({row, column}) 返回 false 则禁止编辑该单元格/行"},"labelPosition":"top"},{"property":"expand-config","label":{"text":{"zh_CN":"展开行配置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"展开行配置，需配合列 type=expand。常用字段：expandAll 是否默认展开全部；trigger 展开触发方式（default 点图标 / cell 点单元格 / row 点整行）；expandRowKeys 默认展开的行主键数组（依赖 row-id）；accordion 同级是否只能展开一行；activeMethod({row}) 返回 false 则不渲染该行展开区；showIcon 是否显示展开图标"},"labelPosition":"top"},{"property":"sortable","label":{"text":{"zh_CN":"可排序"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否允许列数据排序。默认为 true 可排序"},"labelPosition":"left"}]},{"label":{"zh_CN":"其他"},"description":{"zh_CN":"其他属性"},"content":[{"property":"auto-resize","label":{"text":{"zh_CN":"响应式监听"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"表格属性设置 autoResize 属性开启响应式表格宽高的同时，将高度height设置为auto就可以自动跟随父容器高度。"},"labelPosition":"left"},{"property":"border","label":{"text":{"zh_CN":"边框"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否带有纵向边框"},"labelPosition":"left"},{"property":"seq-serial","label":{"text":{"zh_CN":"行号连续"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"行序号是否连续，开启分页时有效，默认 false"},"labelPosition":"left"},{"property":"row-class-name","label":{"text":{"zh_CN":"行类名"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"给行附加 className，可为 string 或函数 ({seq, row, rowIndex, $rowIndex, column, columnIndex}) => string"},"labelPosition":"top"},{"property":"max-height","label":{"text":{"zh_CN":"内容最大高度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"表格内容区（不含表头/表尾）最大高度，支持整数、px、%"}},{"property":"row-span","label":{"text":{"zh_CN":"简易行合并"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"简易行合并：传入要合并的字段列表，如 [{ field: \\"area\\" }, { field: \\"province\\" }]，相邻且值相同的单元格会自动合并。仅普通表格可用，不可与 tree-config 同用；更复杂合并请用 span-method"},"labelPosition":"top"}]}],"events":{"onFilterChange":{"label":{"zh_CN":"筛选条件改变时触发"},"description":{"zh_CN":"当筛选条件发生变化时触发。开启 remote-filter 时会走服务端过滤并调用 fetch-data"},"type":"event","functionInfo":{"params":[{"name":"args","type":"Object","description":{"zh_CN":"{$table(表格实例), filters(过滤条件)}"}}],"returns":{}}},"onSortChange":{"label":{"zh_CN":"排序改变时触发"},"description":{"zh_CN":"点击列头执行数据排序前触发。开启 remote-sort 时会走服务端排序并调用 fetch-data"},"type":"event","functionInfo":{"params":[{"name":"args","type":"Object","description":{"zh_CN":"{$table(表格实例), field(排序字段), order(排序方向)}，order 为 asc|desc"}}],"returns":{}}},"onSelectAll":{"label":{"zh_CN":"当手动勾选全选时触发的事件"},"description":{"zh_CN":"只对 type=selection 有效，当手动勾选全选时触发的事件"},"type":"event","functionInfo":{"params":[{"name":"args","type":"Object","description":{"zh_CN":"{$table(表格实例), checked(是否选中), selection(选中数据), row(选中行数据)}"}},{"name":"event","type":"Event","description":{"zh_CN":"原生 Event"}}],"returns":{}}},"onSelectChange":{"label":{"zh_CN":"手动勾选并且值发生改变时触发的事件"},"description":{"zh_CN":"只对 type=selection 有效，当手动勾选并且值发生改变时触发的事件"},"type":"event","functionInfo":{"params":[{"name":"args","type":"Object","description":{"zh_CN":"表格选中相关信息对象, { $table(表格实例), selection(选中数据), row(选中行数据), checked(是否选中), rowIndex(选中行索引) }"}},{"name":"event","type":"Event","description":{"zh_CN":"原生 Event"}}],"returns":{}}},"onToggleExpandChange":{"label":{"zh_CN":"展开行切换时触发"},"description":{"zh_CN":"当行展开或收起时触发"},"type":"event","functionInfo":{"params":[{"name":"args","type":"Object","description":{"zh_CN":"{$table(表格实例), row(行数据), rowIndex(行索引)}"}},{"name":"event","type":"Event","description":{"zh_CN":"原生 Event"}}],"returns":{}}}},"shortcuts":{"properties":["sortable","columns"]},"contentMenu":{"actions":["create symbol"]},"onBeforeMount":"console.log('table on load'); this.pager = source.pager; this.fetchData = source.fetchData; this.data = source.data ;this.columns = source.columns"},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["sortable","columns"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"grid","name":{"zh_CN":"表格行"},"component":"TinyGridColumn","description":"提供了非常强大数据表格功能，可以展示数据列表，可以对数据列表进行选择、编辑等","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"TinyGridColumn","destructuring":true},"group":"component","priority":2,"schema":{"properties":[],"events":{},"shortcuts":{},"contentMenu":{"actions":["create symbol"]}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","name":{"zh_CN":"分页"},"component":"TinyPager","icon":"pager","description":"当数据量过多时，使用分页分解数据，常用于 Grid 和 Repeater 组件","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Pager","destructuring":true},"group":"component","priority":1,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"currentPage","label":{"text":{"zh_CN":"当前页数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"当前页数，支持 .sync 修饰符"},"labelPosition":"left"},{"property":"pageSize","label":{"text":{"zh_CN":"每页条数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"每页显示条目个数"},"labelPosition":"left"},{"property":"pageSizes","label":{"text":{"zh_CN":"可选每页条数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"设置可选择的每页显示条数"}},{"property":"total","label":{"text":{"zh_CN":"总条数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"数据总条数"},"labelPosition":"left"},{"property":"layout","label":{"text":{"zh_CN":"布局"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{"type":"textarea"}},"description":{"zh_CN":"组件布局，子组件名用逗号分隔"},"labelPosition":"left"}]}],"events":{"onCurrentChange ":{"label":{"zh_CN":"切换页码时触发"},"description":{"zh_CN":"切换页码时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"当前页的值"}}],"returns":{}}},"onPrevClick ":{"label":{"zh_CN":"点击上一页按钮时触发"},"description":{"zh_CN":"点击上一页按钮时触发"},"type":"event","functionInfo":{"params":[{"name":"page","type":"String","description":{"zh_CN":"当前页的页码值"}}],"returns":{}}},"onNextClick":{"label":{"zh_CN":"点击下一页按钮时触发"},"description":{"zh_CN":"点击上一页按钮时触发"},"type":"event","functionInfo":{"params":[{"name":"page","type":"String","description":{"zh_CN":"当前页的页码值"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["currentPage","total"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","name":{"zh_CN":"弹出编辑"},"component":"TinyPopeditor","icon":"popEditor","description":"该组件只能在弹出的面板中选择数据，不能手动输入数据；弹出面板中显示为 Tree 组件或者 Grid 组件","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Popeditor","destructuring":true},"group":"component","priority":6,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"双向绑定值"},"labelPosition":"left"},{"property":"placeholder","label":{"text":{"zh_CN":"占位文本"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"输入框占位文本"},"labelPosition":"left"},{"property":"show-clear-btn","label":{"text":{"zh_CN":"清除按钮"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示清除按钮"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"},{"property":"auto-lookup","label":{"text":{"zh_CN":"自动请求数据"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"初始化时是否自动请求数据,默认 true"},"labelPosition":"left"}]},{"name":"1","label":{"zh_CN":"其他"},"content":[{"property":"width","label":{"text":{"zh_CN":"宽度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"设置弹出面板的宽度（单位像素）"},"labelPosition":"left"},{"property":"conditions","label":{"text":{"zh_CN":"过滤条件"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"当弹出面板配置的是表格时，设置弹出面板中的过滤条件"},"labelPosition":"top"},{"property":"grid-op","label":{"text":{"zh_CN":"面板表格配置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"设置弹出面板中表格组件的配置信息"}},{"property":"pager-op","label":{"text":{"zh_CN":"分页配置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"设置弹出编辑框中分页配置"},"labelPosition":"top"},{"property":"multi","label":{"text":{"zh_CN":"多选"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"设置弹出面板中的数据是否可多选"},"labelPosition":"left"},{"property":"show-pager","label":{"text":{"zh_CN":"启用分页"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"当 popseletor 为 grid 时才能生效，配置为 true 后还需配置 pagerOp 属性"},"labelPosition":"left"}],"description":{"zh_CN":""}}],"events":{"onChange":{"label":{"zh_CN":"选中值改变时触发"},"description":{"zh_CN":"在 Input 值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"当前选中项的值"}},{"name":"value","type":"Object","description":{"zh_CN":"当前选中对象"}}],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"当前选中的值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"双向绑定的当前选中值"}}],"returns":{}}},"onClose":{"label":{"zh_CN":"弹框关闭时触发的事件"},"description":{"zh_CN":"弹框关闭时触发的事件"},"type":"event","functionInfo":{"params":[],"returns":{}}},"onPageChange":{"label":{"zh_CN":"分页切换事件"},"description":{"zh_CN":"表格模式下分页切换事件"},"type":"event","functionInfo":{"params":[{"name":"value","type":"String","description":{"zh_CN":"当前页码数"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["modelValue","disabled"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"tree","name":{"zh_CN":"树"},"component":"TinyTree","description":"可进行展示有父子层级的数据，支持选择，异步加载等功能。但不推荐用它来展示菜单，展示菜单推荐使用树菜单","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Tree","destructuring":true},"group":"component","priority":12,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"show-checkbox","label":{"text":{"zh_CN":"多选"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"设置接口是否可以多选"},"labelPosition":"left"},{"property":"data","label":{"text":{"zh_CN":"数据源"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"可配置静态数据源和动态数据源"},"labelPosition":"top"},{"property":"node-key","label":{"text":{"zh_CN":"唯一标识"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"节点唯一标识属性名称"},"labelPosition":"left"},{"property":"render-content","label":{"text":{"zh_CN":"渲染函数"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{"disabled":true,"placeholder":"请使用变量绑定来绑定函数"}},"description":{"zh_CN":"树节点的内容区的渲染函数"}},{"property":"icon-trigger-click-node","label":{"text":{"zh_CN":"触发NodeClick事件"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"点击图标展开节点时是否触发 node-click 事件"},"labelPosition":"left"},{"property":"expand-icon","label":{"text":{"zh_CN":"展开图标"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"节点展开图标"},"labelPosition":"top"},{"property":"shrink-icon","label":{"text":{"zh_CN":"收缩图标"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"节点收缩的图标"},"labelPosition":"top"}]},{"name":"1","label":{"zh_CN":"其他"},"content":[{"property":"check-on-click-node","label":{"text":{"zh_CN":"点击节点选中"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点"},"labelPosition":"left"},{"property":"filter-node-method","label":{"text":{"zh_CN":"筛选函数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"节点筛选函数"},"labelPosition":"top"}],"description":{"zh_CN":""}}],"events":{"onCheck":{"label":{"zh_CN":"勾选节点后的事件"},"description":{"zh_CN":"勾选节点后的事件"},"type":"event","functionInfo":{"params":[{"name":"data","type":"object","description":{"zh_CN":"当前选中节点信息"}},{"name":"currentNode","type":"object","description":{"zh_CN":"树组件目前的选中状态信息，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性"}}],"returns":{}}},"onNodeClick":{"label":{"zh_CN":"点击节点后的事件"},"description":{"zh_CN":"点击节点后的事件"},"type":"event","functionInfo":{"params":[{"name":"data","type":"Object","description":{"zh_CN":"当前选中节点信息"}},{"name":"node","type":"Object","description":{"zh_CN":"树组件目前的选中状态信息，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性"}},{"name":"vm","type":"Object","description":{"zh_CN":"树组件实例"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["data","show-checkbox"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"timeline","name":{"zh_CN":"时间线"},"component":"TinyTimeLine","description":"TimeLine 时间线","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"TimeLine","destructuring":true},"group":"component","priority":3,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"vertical","type":"Boolean","label":{"text":{"zh_CN":"垂直布局"}},"cols":12,"rules":[],"hidden":false,"required":true,"readOnly":false,"disabled":false,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"节点和文字垂直布局"},"labelPosition":"left"},{"property":"active","label":{"text":{"zh_CN":"选中值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"步骤条的选中步骤值"},"labelPosition":"left"},{"property":"data","label":{"text":{"zh_CN":"步骤条数据"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{"language":"json"}},"description":{"zh_CN":"时间线步骤条数据"},"labelPosition":"top"}]}],"events":{"onClick":{"label":{"zh_CN":"节点的点击时触发"},"description":{"zh_CN":"节点的点击时触发的回调函数"},"type":"event","functionInfo":{"params":[{"name":"type","type":"string","description":{"zh_CN":"点击节点的下标"}},{"name":"value","type":"string","description":{"zh_CN":"当前节点对象：{ name: 节点名称, time: 时间 }"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["active","data"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"tooltip","name":{"zh_CN":"文字提示框"},"component":"TinyTooltip","description":"动态显示提示信息，一般通过鼠标事件进行响应；提供 warning、error、info、success 四种类型显示不同类别的信","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Tooltip","destructuring":true},"group":"component","priority":11,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"placement","label":{"text":{"zh_CN":"提示位置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"top","value":"top"},{"label":"top-start","value":"top-start"},{"label":"top-end","value":"top-end"},{"label":"bottom","value":"bottom"},{"label":"bottom-start","value":"bottom-start"},{"label":"bottom-end","value":"bottom-end"},{"label":"left","value":"left"},{"label":"left-start","value":"left-start"},{"label":"left-end","value":"left-end"},{"label":"right","value":"right"},{"label":"right-start","value":"right-start"},{"label":"right-end","value":"right-end"}]}},"description":{"zh_CN":"Tooltip 的出现位置"},"labelPosition":"left"},{"property":"content","label":{"text":{"zh_CN":"内容"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"显示的内容，也可以通过 slot#content 传入 DOM"},"labelPosition":"left"},{"property":"render-content","label":{"text":{"zh_CN":"渲染函数"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{"disabled":true,"placeholder":"请使用变量绑定来绑定函数"}},"description":{"zh_CN":"自定义渲染函数，返回需要渲染的节点内容"}},{"property":"modelValue","label":{"text":{"zh_CN":"是否可见"}},"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"状态是否可见"},"labelPosition":"left"},{"property":"manual","label":{"text":{"zh_CN":"手动控制"}},"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效"},"labelPosition":"left"}]}],"events":{},"slots":{"content":{"label":{"zh_CN":"提示内容"},"description":{"zh_CN":"自定义提示内容"}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"isPopper":true,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["disabled","content"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","icon":"popover","name":{"zh_CN":"提示框"},"component":"TinyPopover","description":"Popover可通过对一个触发源操作触发弹出框,支持自定义弹出内容，延迟触发和渐变动画","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Popover","destructuring":true},"group":"component","priority":7,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"双向绑定，手动控制是否可见的状态值"},"labelPosition":"left"},{"property":"placement","label":{"text":{"zh_CN":"位置"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"top","value":"top"},{"label":"top-start","value":"top-start"},{"label":"top-end","value":"top-end"},{"label":"bottom","value":"bottom"},{"label":"bottom-start","value":"bottom-start"},{"label":"bottom-end","value":"bottom-end"},{"label":"left","value":"left"},{"label":"left-start","value":"left-start"},{"label":"left-end","value":"left-end"},{"label":"right","value":"right"},{"label":"right-start","value":"right-start"},{"label":"right-end","value":"right-end"}]}},"description":{"zh_CN":"提示框位置"},"labelPosition":"left"},{"property":"trigger","label":{"text":{"zh_CN":"触发方式"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"click","value":"click"},{"label":"focus","value":"focus"},{"label":"hover","value":"hover"},{"label":"manual","value":"manual"}]}},"description":{"zh_CN":"触发方式，该属性的可选值为： click 、 focus 、 hover 、 manual，该属性的默认值为 click"},"labelPosition":"left"},{"property":"popper-class","label":{"text":{"zh_CN":"自定义类"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"为 popper 添加类名"},"labelPosition":"left"},{"property":"visible-arrow","label":{"text":{"zh_CN":"显示箭头"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示 Tooltip 箭头"},"labelPosition":"left"},{"property":"append-to-body","label":{"text":{"zh_CN":"添加到body上"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"Popover弹窗是否添加到body上"},"labelPosition":"left"},{"property":"arrow-offset","label":{"text":{"zh_CN":"箭头的位置偏移"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"箭头的位置偏移，该属性的默认值为 0"}},{"property":"close-delay","label":{"text":{"zh_CN":"延迟隐藏"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"触发方式为 hover 时的隐藏延迟，单位为毫秒"},"labelPosition":"left"},{"property":"content","label":{"text":{"zh_CN":"显示的内容"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"显示的内容，也可以通过 slot 传入 DOM"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"Popover 是否可用"},"labelPosition":"left"},{"property":"offset","label":{"text":{"zh_CN":"位置偏移量"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"出现位置的偏移量"},"labelPosition":"left"},{"property":"open-delay","label":{"text":{"zh_CN":"显示延迟"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"触发方式为 hover 时的显示延迟，单位为毫秒"},"labelPosition":"left"},{"property":"popper-options","label":{"text":{"zh_CN":"弹出层参数"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CodeConfigurator","props":{}},"description":{"zh_CN":"popper.js 的参数"},"labelPosition":"top"},{"property":"title","label":{"text":{"zh_CN":"标题"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"提示内容标题"},"labelPosition":"left"},{"property":"transform-origin","label":{"text":{"zh_CN":"旋转中心点"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"组件的旋转中心点,组件的旋转中心点"},"labelPosition":"left"},{"property":"transition","label":{"text":{"zh_CN":"渐变动画"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"InputConfigurator","props":{}},"description":{"zh_CN":"该属性的默认值为 fade-in-linear"},"labelPosition":"left"},{"property":"width","label":{"text":{"zh_CN":"宽度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"宽度"},"labelPosition":"left"}]}],"events":{"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"手动控制是否可见的状态值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"boolean","description":{"zh_CN":"双向绑定的可见状态值"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"isPopper":true,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["visible","width"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"name":{"zh_CN":"卡片组件"},"component":"TinyCard","icon":"card","description":"强大卡片组件，用于包裹展示内容。","doc_url":"","screenshot":"","tags":"","keywords":"","dev_mode":"proCode","npm":{},"group":"component","configure":{},"schema":{"properties":[{"label":{"zh_CN":"基础属性"},"description":{"zh_CN":"基础属性"},"content":[{"property":"auto-width","label":{"text":{"zh_CN":"自动撑开"}},"required":false,"readOnly":false,"disabled":false,"description":{"zh_CN":"卡片的宽度是否自动撑开，设置后将不再给卡片设置固定宽度"}},{"property":"type","label":{"text":{"zh_CN":"卡片类型"}},"required":false,"readOnly":false,"disabled":false,"description":{"zh_CN":"设置卡片类型,可选值为\\"text\\",  \\"image\\",  \\"video\\",  \\"logo\\", 默认是\\"text\\""}},{"property":"src","label":{"text":{"zh_CN":"图片或者视频的地址"}},"required":false,"readOnly":false,"disabled":false,"description":{"zh_CN":"图片或者视频的地址"}},{"property":"title","label":{"text":{"zh_CN":"卡片的标题,字号比正文略大，比h3小"}},"required":false,"readOnly":false,"disabled":false,"description":{"zh_CN":"卡片的标题,字号比正文略大，比h3小"}}]}]}},{"version":"3.20.0","name":{"zh_CN":"日期选择"},"component":"TinyDatePicker","icon":"datepick","description":"用于输入或选择日期","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"DatePicker","destructuring":true},"group":"component","priority":1,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"I18nConfigurator","props":{}},"description":{"zh_CN":"双向绑定值"},"labelPosition":"left"},{"property":"type","label":{"text":{"zh_CN":"类型"}},"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"日期","value":"date"},{"label":"日期时间","value":"datetime"},{"label":"周","value":"week"},{"label":"月份","value":"month"},{"label":"年份","value":"year"}]}},"description":{"zh_CN":"设置日期框的type属性"},"labelPosition":"left"},{"property":"placeholder","label":{"text":{"zh_CN":"占位文本"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"I18nConfigurator","props":{}},"description":{"zh_CN":"输入框占位文本"},"labelPosition":"left"},{"property":"clearable","label":{"text":{"zh_CN":"清除按钮"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示清除按钮"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"},{"property":"readonly","label":{"text":{"zh_CN":"只读"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否只读"},"labelPosition":"left"},{"property":"size","label":{"text":{"zh_CN":"尺寸"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"medium","value":"medium"},{"label":"small","value":"small"},{"label":"mini","value":"mini"}]}},"description":{"zh_CN":"日期框尺寸。该属性的可选值为： medium 、 small 、 mini"},"labelPosition":"left"}]},{"name":"1","label":{"zh_CN":"其他"},"content":[{"property":"maxlength","label":{"text":{"zh_CN":"输入最大长度"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{}},"description":{"zh_CN":"设置 input 框的maxLength"}},{"property":"autofocus","label":{"text":{"zh_CN":"聚焦"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"自动获取焦点"},"labelPosition":"left"}],"description":{"zh_CN":""}}],"events":{"onChange":{"label":{"zh_CN":"值改变时触发"},"description":{"zh_CN":"在 Input 值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"输入框改变后的值"}}],"returns":{}}},"onInput":{"label":{"zh_CN":"输入值改变时触发"},"description":{"zh_CN":"在 Input 输入值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"输入框输入的值"}}],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"在 Input 输入值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"双向绑定的值"}}],"returns":{}}},"onBlur":{"label":{"zh_CN":"失去焦点时触发"},"description":{"zh_CN":"在 Input 失去焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onFocus":{"label":{"zh_CN":"获取焦点时触发"},"description":{"zh_CN":"在 Input 获取焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onClear":{"label":{"zh_CN":"点击清空按钮时触发"},"description":{"zh_CN":"点击清空按钮时触发"},"type":"event","functionInfo":{"params":[],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["value","disabled"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","name":{"zh_CN":"数字输入框"},"component":"TinyNumeric","icon":"numeric","description":"通过鼠标或键盘输入字符","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"Numeric","destructuring":true},"group":"component","priority":1,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"widget":{"component":"I18nConfigurator","props":{}},"description":{"zh_CN":"双向绑定值"},"labelPosition":"left"},{"property":"placeholder","label":{"text":{"zh_CN":"占位文本"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"I18nConfigurator","props":{}},"description":{"zh_CN":"输入框占位文本"},"labelPosition":"left"},{"property":"allow-empty","label":{"text":{"zh_CN":"内容可清空"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否内容可清空"},"labelPosition":"left"},{"property":"disabled","label":{"text":{"zh_CN":"禁用"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否禁用"},"labelPosition":"left"},{"property":"size","label":{"text":{"zh_CN":"尺寸"}},"required":true,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"medium","value":"medium"},{"label":"small","value":"small"},{"label":"mini","value":"mini"}]}},"description":{"zh_CN":"输入框尺寸。该属性的可选值为： medium 、small 、 mini"},"labelPosition":"left"},{"property":"controls","label":{"text":{"zh_CN":"加减按钮"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否使用加减按钮"},"labelPosition":"left"},{"property":"controls-position","label":{"text":{"zh_CN":"加减按钮位置"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"SelectConfigurator","props":{"options":[{"label":"左右两侧","value":""},{"label":"只在右侧","value":"right"}]}},"description":{"zh_CN":"加减按钮位置"}},{"property":"precision","label":{"text":{"zh_CN":"精度"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"allowEmpty":true}},"description":{"zh_CN":"数值精度"},"labelPosition":"left"},{"property":"step","label":{"text":{"zh_CN":"步长"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"allowEmpty":true}},"description":{"zh_CN":"步长"},"labelPosition":"left"},{"property":"max","label":{"text":{"zh_CN":"最大数值"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"allowEmpty":true}},"description":{"zh_CN":"可输入的最大数值"},"labelPosition":"left"},{"property":"min","label":{"text":{"zh_CN":"最小数值"}},"required":false,"readOnly":false,"disabled":false,"cols":12,"widget":{"component":"NumberConfigurator","props":{"allowEmpty":true}},"description":{"zh_CN":"可输入的最大数值"},"labelPosition":"left"}]}],"events":{"onChange":{"label":{"zh_CN":"值改变时触发"},"description":{"zh_CN":"在 Input 值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"输入框改变后的值"}}],"returns":{}}},"onInput":{"label":{"zh_CN":"输入值改变时触发"},"description":{"zh_CN":"在 Input 输入值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"输入框输入的值"}}],"returns":{}}},"onUpdate:modelValue":{"label":{"zh_CN":"双向绑定的值改变时触发"},"description":{"zh_CN":"在 Input 输入值改变时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"双向绑定的值"}}],"returns":{}}},"onBlur":{"label":{"zh_CN":"失去焦点时触发"},"description":{"zh_CN":"在 Input 失去焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onFocus":{"label":{"zh_CN":"获取焦点时触发"},"description":{"zh_CN":"在 Input 获取焦点时触发"},"type":"event","functionInfo":{"params":[{"name":"event","type":"Object","description":{"zh_CN":"原生 event"}}],"returns":{}}},"onClear":{"label":{"zh_CN":"点击清空按钮时触发"},"description":{"zh_CN":"点击清空按钮时触发"},"type":"event","functionInfo":{"params":[],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":true,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["value","disabled"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}},{"version":"3.20.0","name":{"zh_CN":"穿梭框"},"component":"TinyTransfer","icon":"transfer","description":"穿梭框，实现左右表格数据的双向交换的组件","docUrl":"","screenshot":"","tags":"","keywords":"","devMode":"proCode","npm":{"package":"@opentiny/vue","exportName":"TinyTransfer","destructuring":true},"group":"component","priority":1,"schema":{"properties":[{"label":{"zh_CN":"基础信息"},"description":{"zh_CN":"基础信息"},"content":[{"property":"modelValue","label":{"text":{"zh_CN":"绑定值"}},"required":true,"readOnly":false,"disabled":false,"widget":{"component":"I18nConfigurator","props":{}},"description":{"zh_CN":"双向绑定值"},"labelPosition":"left"},{"property":"data","label":{"text":{"zh_CN":"左右列表的全量数据源"}},"required":true,"readOnly":false,"disabled":false,"widget":{"component":"CodeConfigurator","props":{"language":"json"}},"description":{"zh_CN":"左右列表的全量数据源"},"labelPosition":"left"},{"property":"filterable","label":{"text":{"zh_CN":"是否启用搜索的功能"}},"required":false,"readOnly":false,"disabled":false,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否启用搜索的功能"},"labelPosition":"left"},{"property":"showAllBtn","label":{"text":{"zh_CN":"是否显示全部移动按钮"}},"required":false,"readOnly":false,"disabled":false,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"是否显示全部移动按钮"},"labelPosition":"left"},{"property":"toLeftDisable","label":{"text":{"zh_CN":"组件初始化状态下未选中时，默认按钮显示禁用状态"}},"required":false,"readOnly":false,"disabled":false,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"组件初始化状态下未选中时，默认按钮显示禁用状态"},"labelPosition":"left"},{"property":"toRightDisable","label":{"text":{"zh_CN":"组件初始化状态下未选中时，默认按钮显示禁用状态"}},"required":false,"readOnly":false,"disabled":false,"widget":{"component":"CheckBoxConfigurator","props":{}},"description":{"zh_CN":"组件初始化状态下未选中时，默认按钮显示禁用状态"},"labelPosition":"left"},{"property":"titles","label":{"text":{"zh_CN":"自定义列表的标题"}},"required":false,"readOnly":false,"disabled":false,"widget":{"component":"CodeConfigurator","props":{"language":"json"}},"description":{"zh_CN":"自定义列表的标题；不设置titles时，左右列表的标题默认显示为： 列表 1， 列表 2"},"labelPosition":"left"}]}],"events":{"onChange":{"label":{"zh_CN":"右侧列表元素变化时触发"},"description":{"zh_CN":"右侧列表元素变化时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"右侧列表元素变化时触发"}}],"returns":{}}},"onLeftCheckChange":{"label":{"zh_CN":"左侧列表元素被用户选中 / 取消选中时触发;"},"description":{"zh_CN":"左侧列表元素被用户选中 / 取消选中时触发;"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"左侧列表元素被用户选中 / 取消选中时触发;"}}],"returns":{}}},"onRightCheckChange":{"label":{"zh_CN":"右侧列表元素被用户选中 / 取消选中时触发"},"description":{"zh_CN":"右侧列表元素被用户选中 / 取消选中时触发"},"type":"event","functionInfo":{"params":[{"name":"value","type":"string","description":{"zh_CN":"右侧列表元素被用户选中 / 取消选中时触发"}}],"returns":{}}}}},"configure":{"loop":true,"condition":true,"styles":true,"isContainer":false,"isModal":false,"nestingRule":{"childWhitelist":"","parentWhitelist":"","descendantBlacklist":"","ancestorWhitelist":""},"isNullNode":false,"isLayout":false,"rootSelector":"","shortcuts":{"properties":["value","disabled"]},"contextMenu":{"actions":["create symbol"],"disable":["copy","remove"]}}}],"blocks":[],"snippets":[{"group":"layout","label":{"zh_CN":"布局与容器"},"children":[{"name":{"zh_CN":"栅格布局"},"icon":"row","screenshot":"","snippetName":"TinyLayout","schema":{"componentName":"TinyLayout","props":{"cols":24},"children":[{"componentName":"TinyRow","props":{"style":"padding: 10px;"},"children":[{"componentName":"TinyCol","props":{"span":6}},{"componentName":"TinyCol","props":{"span":6}},{"componentName":"TinyCol","props":{"span":6}},{"componentName":"TinyCol","props":{"span":6}}]},{"componentName":"TinyRow","props":{"style":"padding: 10px;"},"children":[{"componentName":"TinyCol","props":{"span":6}},{"componentName":"TinyCol","props":{"span":6}},{"componentName":"TinyCol","props":{"span":6}},{"componentName":"TinyCol","props":{"span":6}}]}]}}]},{"group":"basic","label":{"zh_CN":"基础元素"},"children":[{"name":{"zh_CN":"分隔线"},"icon":"hr","screenshot":"","snippetName":"hr","schema":{}},{"name":{"zh_CN":"按钮"},"icon":"button","screenshot":"","snippetName":"TinyButton","schema":{"componentName":"TinyButton","props":{"text":"按钮文案"}}},{"name":{"zh_CN":"互斥按钮组"},"icon":"MutexButtons","snippetName":"TinyButtonGroup","screenshot":"","schema":{"componentName":"TinyButtonGroup","props":{"data":[{"text":"Button1","value":"1"},{"text":"Button2","value":"2"},{"text":"Button3","value":"3"}],"modelValue":"1"}}},{"name":{"zh_CN":"搜索框"},"icon":"search","screenshot":"","snippetName":"TinySearch","schema":{"componentName":"TinySearch","props":{"modelValue":"","placeholder":"输入关键词"}}}]},{"group":"form","label":{"zh_CN":"表单类型"},"children":[{"name":{"zh_CN":"表单"},"screenshot":"","snippetName":"tiny-form","icon":"form","schema":{"componentName":"TinyForm","props":{"labelWidth":"80px","labelPosition":"top"},"children":[{"componentName":"TinyFormItem","props":{"label":"人员"},"children":[{"componentName":"TinyInput","props":{"placeholder":"请输入","modelValue":""}}]},{"componentName":"TinyFormItem","props":{"label":"密码"},"children":[{"componentName":"TinyInput","props":{"placeholder":"请输入","modelValue":"","type":"password"}}]},{"componentName":"TinyFormItem","props":{"label":""},"children":[{"componentName":"TinyButton","props":{"text":"提交","type":"primary","style":"margin-right: 10px"}},{"componentName":"TinyButton","props":{"text":"重置","type":"primary"}}]}]}},{"name":{"zh_CN":"下拉框"},"icon":"select","screenshot":"","snippetName":"TinySelect","schema":{"componentName":"TinySelect","props":{"modelValue":"","placeholder":"请选择","options":[{"value":"1","label":"黄金糕"},{"value":"2","label":"双皮奶"}]}}},{"name":{"zh_CN":"开关"},"icon":"switch","screenshot":"","snippetName":"TinySwitch","schema":{"componentName":"TinySwitch","props":{"modelValue":""}}},{"name":{"zh_CN":"复选框组"},"icon":"checkboxs","screenshot":"","snippetName":"TinyCheckboxGroup","schema":{"componentName":"TinyCheckboxGroup","props":{"modelValue":["name1","name2"],"type":"checkbox","options":[{"text":"复选框1","label":"name1"},{"text":"复选框2","label":"name2"},{"text":"复选框3","label":"name3"}]}}},{"name":{"zh_CN":"复选框拖拽按钮组"},"icon":"checkboxgroup","screenshot":"","snippetName":"TinyCheckboxbuttonGroup","schema":{"componentName":"TinyCheckboxGroup","props":{"modelValue":[]},"children":[{"componentName":"TinyCheckboxButton","children":[{"componentName":"div"}]}]}},{"name":{"zh_CN":"输入框"},"icon":"input","screenshot":"","snippetName":"TinyInput","schema":{"componentName":"TinyInput","props":{"placeholder":"请输入","modelValue":""}}},{"name":{"zh_CN":"单选"},"icon":"radio","screenshot":"","snippetName":"TinyRadio","schema":{"componentName":"TinyRadio","props":{"label":"1","text":"单选文本"}}},{"name":{"zh_CN":"基础单选组"},"snippetName":"TinyRadioGroup","schema":{"componentName":"TinyRadioGroup","props":{"modelValue":"1","options":[{"label":"1","text":"选项1"},{"label":"2","text":"选项2"},{"label":"3","text":"选项3"}]}}},{"name":{"zh_CN":"选项式单选组"},"snippetName":"TinyRadioGroup","schema":{"componentName":"TinyRadioGroup","props":{"modelValue":"2","type":"button","options":[{"label":"1","text":"选项1"},{"label":"2","text":"选项2"},{"label":"3","text":"选项3"}]}}},{"name":{"zh_CN":"复选框"},"icon":"checkbox","screenshot":"","snippetName":"TinyCheckbox","schema":{"componentName":"TinyCheckbox","props":{"text":"复选框文案"}}},{"name":{"zh_CN":"日期选择"},"icon":"datepick","screenshot":"","snippetName":"TinyDatePicker","schema":{"componentName":"TinyDatePicker","props":{"placeholder":"请输入","modelValue":""}}},{"name":{"zh_CN":"数字输入框"},"icon":"numeric","screenshot":"","snippetName":"TinyNumeric","schema":{"componentName":"TinyNumeric","props":{"allow-empty":true,"placeholder":"请输入","controls-position":"right","step":1}}},{"name":{"zh_CN":"穿梭框"},"icon":"transfer","screenshot":"","snippetName":"TinyTransfer","schema":{"componentName":"TinyTransfer","props":{"modelValue":[3],"data":[{"key":1,"label":"备选项1","disabled":false},{"key":2,"label":"备选项2","disabled":false},{"key":3,"label":"备选项3","disabled":false},{"key":4,"label":"备选项4","disabled":false}]}}}]},{"group":"table","label":{"zh_CN":"表格类型"},"children":[{"name":{"zh_CN":"表格"},"icon":"grid","screenshot":"","snippetName":"tinyGrid","schema":{"componentName":"TinyGrid","props":{"editConfig":{"trigger":"click","mode":"cell","showStatus":true},"columns":[{"type":"index","width":60},{"type":"selection","width":60},{"field":"employees","title":"员工数"},{"field":"created_date","title":"创建日期"},{"field":"city","title":"城市"}],"data":[{"id":"1","name":"GFD科技有限公司","city":"福州","employees":800,"created_date":"2014-04-30 00:56:00","boole":false},{"id":"2","name":"WWW科技有限公司","city":"深圳","employees":300,"created_date":"2016-07-08 12:36:22","boole":true}]}}},{"name":{"zh_CN":"分页"},"icon":"pager","screenshot":"","snippetName":"TinyPager","schema":{"componentName":"TinyPager","props":{"layout":"total, sizes, prev, pager, next","total":100,"pageSize":10,"currentPage":1}}}]},{"group":"data-display","label":{"zh_CN":"数据展示类"},"children":[{"name":{"zh_CN":"走马灯"},"screenshot":"","snippetName":"tiny-carousel","icon":"carousel","schema":{"componentName":"TinyCarousel","props":{"height":"180px"},"children":[{"componentName":"TinyCarouselItem","props":{"title":"carousel-item-a"},"children":[{"componentName":"div","props":{"style":"margin:10px 0 0 30px"}}]},{"componentName":"TinyCarouselItem","props":{"title":"carousel-item-b"},"children":[{"componentName":"div","props":{"style":"margin:10px 0 0 30px"}}]}]}},{"name":{"zh_CN":"对话框"},"screenshot":"","snippetName":"TinyDialogBox","icon":"dialogbox","schema":{"componentName":"TinyDialogBox","props":{"visible":true,"show-close":true,"title":"dialogBox title"},"children":[{"componentName":"div"}]}},{"name":{"zh_CN":"折叠面板"},"screenshot":"","snippetName":"TinyCollapse","icon":"collapse","schema":{"componentName":"TinyCollapse","props":{"modelValue":"collapse1"},"children":[{"componentName":"TinyCollapseItem","props":{"name":"collapse1","title":"折叠项1"},"children":[{"componentName":"div"}]},{"componentName":"TinyCollapseItem","props":{"name":"collapse2","title":"折叠项2"},"children":[{"componentName":"div"}]},{"componentName":"TinyCollapseItem","props":{"name":"collapse3","title":"折叠项3"},"children":[{"componentName":"div"}]}]}},{"name":{"zh_CN":"弹出编辑"},"icon":"popeditor","screenshot":"","snippetName":"TinyPopeditor","schema":{"componentName":"TinyPopeditor","props":{"modelValue":"","placeholder":"请选择","grid-op":{"columns":[{"field":"id","title":"ID","width":40},{"field":"name","title":"名称","showOverflow":"tooltip"},{"field":"province","title":"省份","width":80},{"field":"city","title":"城市","width":80}],"data":[{"id":"1","name":"GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司","city":"福州","province":"福建"},{"id":"2","name":"WWW科技有限公司","city":"深圳","province":"广东"},{"id":"3","name":"RFV有限责任公司","city":"中山","province":"广东"},{"id":"4","name":"TGB科技有限公司","city":"龙岩","province":"福建"},{"id":"5","name":"YHN科技有限公司","city":"韶关","province":"广东"},{"id":"6","name":"WSX科技有限公司","city":"黄冈","province":"武汉"}]}}}},{"name":{"zh_CN":"树"},"icon":"tree","screenshot":"","snippetName":"TinyTree","schema":{"componentName":"TinyTree","props":{"data":[{"label":"一级 1","children":[{"label":"二级 1-1","children":[{"label":"三级 1-1-1"}]}]},{"label":"一级 2","children":[{"label":"二级 2-1","children":[{"label":"三级 2-1-1"}]},{"label":"二级 2-2","children":[{"label":"三级 2-2-1"}]}]}]}}},{"name":{"zh_CN":"文字提示框"},"icon":"tooltip","screenshot":"","snippetName":"TinyTooltip","schema":{"componentName":"TinyTooltip","props":{"content":"Top Left 提示文字","placement":"top-start","manual":true,"modelValue":true},"children":[{"componentName":"span","children":[{"componentName":"div","props":{}}]},{"componentName":"Template","props":{"slot":"content"},"children":[{"componentName":"span","children":[{"componentName":"div","props":{"placeholder":"提示内容"}}]}]}]}},{"name":{"zh_CN":"提示框"},"icon":"popover","screenshot":"","snippetName":"TinyPopover","schema":{"componentName":"TinyPopover","props":{"width":200,"title":"弹框标题","trigger":"manual","modelValue":true},"children":[{"componentName":"Template","props":{"slot":"reference"},"children":[{"componentName":"div","props":{"placeholder":"触发源"}}]},{"componentName":"Template","props":{"slot":"default"},"children":[{"componentName":"div","props":{"placeholder":"提示内容"}}]}]}},{"name":{"zh_CN":"内容展示卡片"},"snippetName":"TinyCard","schema":{"componentName":"TinyCard","children":[{"componentName":"h2","children":"员工信息列表"},{"componentName":"TinyGrid","props":{"editConfig":{"trigger":"click","mode":"cell","showStatus":true},"columns":[{"type":"index","width":60},{"type":"selection","width":60},{"field":"employees","title":"员工数"},{"field":"created_date","title":"创建日期"},{"field":"city","title":"城市"}],"data":[{"id":"1","name":"GFD科技有限公司","city":"福州","employees":800,"created_date":"2014-04-30 00:56:00","boole":false},{"id":"2","name":"WWW科技有限公司","city":"深圳","employees":300,"created_date":"2016-07-08 12:36:22","boole":true}]}}]}},{"name":{"zh_CN":"图片卡片"},"snippetName":"TinyCard","schema":{"componentName":"TinyCard","props":{"title":"卡片标题","type":"image","src":"https://res.hc-cdn.com/tiny-vue-web-doc/3.26.1/static/images/dsj.png"},"children":[{"componentName":"p","children":"这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容。"}]}}]},{"group":"navigation","label":{"zh_CN":"导航类型"},"children":[{"name":{"zh_CN":"时间线"},"icon":"timeline","screenshot":"","snippetName":"TinyTimeLine","schema":{"componentName":"TinyTimeLine","props":{"active":"2","data":[{"name":"已下单"},{"name":"运输中"},{"name":"已签收"}]}}},{"name":{"zh_CN":"面包屑"},"icon":"breadcrumb","screenshot":"","snippetName":"TinyBreadcrumb","schema":{"componentName":"TinyBreadcrumb","props":{"options":[{"to":"{ path: '/' }","label":"首页"},{"to":"{ path: '/breadcrumb' }","label":"产品"},{"replace":"true","label":"软件"}]}}},{"name":{"zh_CN":"标签页"},"icon":"tabs","screenshot":"","group":true,"snippetName":"TinyTabs","schema":{"componentName":"TinyTabs","props":{"modelValue":"first"},"children":[{"componentName":"TinyTabItem","props":{"title":"标签页1","name":"first"},"children":[{"componentName":"div","props":{"style":"margin:10px 0 0 30px"}}]},{"componentName":"TinyTabItem","props":{"title":"标签页2","name":"second"},"children":[{"componentName":"div","props":{"style":"margin:10px 0 0 30px"}}]}]}}]},{"group":"element-plus","label":{"zh_CN":"Element Plus组件"},"children":[{"name":{"zh_CN":"日期选择器"},"icon":"datepick","screenshot":"","snippetName":"ElDatePicker","schema":{}},{"name":{"zh_CN":"输入框"},"icon":"input","screenshot":"","snippetName":"ElInput","schema":{}},{"name":{"zh_CN":"按钮"},"icon":"button","screenshot":"","snippetName":"ElButton","schema":{"children":[{"componentName":"Text","props":{"text":"按钮文本"}}]}},{"name":{"zh_CN":"表单"},"icon":"form","screenshot":"","snippetName":"ElForm","schema":{"children":[{"componentName":"ElFormItem","props":{"label":"账号","prop":"account"},"children":[{"componentName":"ElInput","props":{"modelValue":"","placeholder":"请输入账号"}}]},{"componentName":"ElFormItem","props":{"label":"密码","prop":"password"},"children":[{"componentName":"ElInput","props":{"modelValue":"","placeholder":"请输入密码","type":"password"}}]},{"componentName":"ElFormItem","props":{},"children":[{"componentName":"ElButton","props":{"type":"primary","style":"margin-right: 10px"},"children":[{"componentName":"Text","props":{"text":"提交"}}]},{"componentName":"ElButton","props":{"type":"primary"},"children":[{"componentName":"Text","props":{"text":"重置"}}]}]}]}},{"name":{"zh_CN":"表格"},"icon":"grid","screenshot":"","snippetName":"ElTable","schema":{"props":{"data":[{"date":"2016-05-03","name":"Tom","address":"No. 189, Grove St, Los Angeles"},{"date":"2016-05-02","name":"Tom","address":"No. 189, Grove St, Los Angeles"},{"date":"2016-05-04","name":"Tom","address":"No. 189, Grove St, Los Angeles"},{"date":"2016-05-01","name":"Tom","address":"No. 189, Grove St, Los Angeles"}],"columns":[{"type":"index"},{"label":"Date","prop":"date"},{"label":"Name","prop":"name"},{"label":"Address","prop":"address"}]}}}]}],"packages":[{"name":"TinyVue组件库","package":"@opentiny/vue","version":"3.20.0","destructuring":true,"script":"https://registry.npmmirror.com/@opentiny/vue-runtime/~3.20/files/dist3/tiny-vue-pc.mjs","css":"https://registry.npmmirror.com/@opentiny/vue-theme/~3.20/files/index.css"},{"name":"element-plus组件库","package":"element-plus","version":"2.4.2","destructuring":true,"script":"https://registry.npmmirror.com/element-plus/2.4.2/files/dist/index.full.mjs","css":"https://registry.npmmirror.com/element-plus/2.4.2/files/dist/index.css"}]}}`) };
const p$1 = { data: { materials: {
	components: [
		{
			icon: "slot",
			name: { zh_CN: "Slot" },
			component: "Slot",
			schema: {
				properties: [{
					label: { zh_CN: "基础信息" },
					description: { zh_CN: "基础信息" },
					collapse: {
						number: 6,
						text: { zh_CN: "显示更多" }
					},
					content: [{
						property: "name",
						type: "string",
						label: { text: { zh_CN: "插槽名称" } },
						cols: 12,
						widget: {
							component: "InputConfigurator",
							props: {}
						}
					}, {
						property: "params",
						type: "string",
						label: { text: { zh_CN: "作用域参数" } },
						widget: {
							component: "CodeConfigurator",
							props: {
								language: "json",
								tips: {
									title: { zh_CN: "提示：数据为数组类型" },
									demo: { zh_CN: `示例：
[
  {
    "name": "text",
    "value": {
      "type": "JSExpression",
      "value": "this.state.greetingMessage"
    }
  },
  {
    "name": "count",
    "value": 1
  }
]` }
								}
							}
						}
					}]
				}],
				events: {},
				shortcuts: { properties: [] },
				contentMenu: { actions: [] }
			},
			configure: { isContainer: !0 }
		},
		{
			icon: "RouterView",
			name: { zh_CN: "RouterView" },
			component: "RouterView",
			schema: { properties: [{
				label: { zh_CN: "基础信息" },
				description: { zh_CN: "基础信息" },
				content: []
			}] }
		},
		{
			icon: "RouterLink",
			name: { zh_CN: "RouterLink" },
			component: "RouterLink",
			schema: { properties: [{
				label: { zh_CN: "基础信息" },
				description: { zh_CN: "基础信息" },
				content: [
					{
						property: "to",
						type: "String",
						label: { text: { zh_CN: "跳转页面" } },
						cols: 12,
						widget: {
							component: "RouterSelectConfigurator",
							props: {}
						}
					},
					{
						property: "activeClass",
						type: "String",
						label: { text: { zh_CN: "激活样式类" } },
						cols: 12,
						widget: {
							component: "InputConfigurator",
							props: {}
						}
					},
					{
						property: "exactActiveClass",
						type: "String",
						label: { text: { zh_CN: "准确激活样式类" } },
						cols: 12,
						widget: {
							component: "InputConfigurator",
							props: {}
						}
					}
				]
			}] },
			configure: {
				loop: !0,
				isContainer: !0
			}
		},
		{
			icon: "Collection",
			name: { zh_CN: "Collection" },
			component: "Collection",
			schema: {
				slots: {},
				properties: [{
					label: { zh_CN: "基础信息" },
					description: { zh_CN: "基础信息" },
					collapse: {
						number: 6,
						text: { zh_CN: "显示更多" }
					},
					content: [
						{
							property: "condition",
							type: "boolean",
							label: { text: { zh_CN: "是否渲染" } },
							cols: 12,
							rules: [],
							widget: {
								component: "SwitchConfigurator",
								props: {}
							}
						},
						{
							property: "style",
							type: "string",
							label: { text: { zh_CN: "样式" } },
							cols: 12,
							rules: [],
							widget: {
								component: "CodeConfigurator",
								props: {}
							}
						},
						{
							property: "dataSource",
							type: "string",
							bindState: !1,
							label: { text: { zh_CN: "数据源" } },
							cols: 12,
							rules: [],
							widget: {
								component: "CollectionConfigurator",
								props: {}
							}
						}
					]
				}],
				events: {},
				shortcuts: { properties: [] },
				contentMenu: { actions: [] }
			},
			configure: { isContainer: !0 }
		},
		{
			icon: "Text",
			name: { zh_CN: "Text" },
			component: "Text",
			schema: {
				properties: [{
					label: { zh_CN: "基础信息" },
					description: { zh_CN: "基础信息" },
					collapse: {
						number: 6,
						text: { zh_CN: "显示更多" }
					},
					content: [{
						property: "text",
						type: "string",
						label: { text: { zh_CN: "文本内容" } },
						cols: 12,
						rules: [],
						widget: {
							component: "InputConfigurator",
							props: {
								type: "textarea",
								autosize: !0
							}
						}
					}]
				}],
				events: { onClick: {
					label: { zh_CN: "点击事件" },
					description: { zh_CN: "点击时触发的回调函数" },
					type: "event",
					functionInfo: {
						params: [],
						returns: {}
					}
				} },
				shortcuts: { properties: ["text"] },
				contentMenu: { actions: [] }
			},
			configure: { loop: !0 }
		},
		{
			icon: "icon",
			name: { zh_CN: "Icon" },
			component: "Icon",
			container: !1,
			schema: {
				properties: [{
					label: { zh_CN: "基础信息" },
					description: { zh_CN: "基础信息" },
					collapse: {
						number: 6,
						text: { zh_CN: "显示更多" }
					},
					content: [{
						property: "name",
						type: "string",
						bindState: !0,
						label: { text: { zh_CN: "图标类型" } },
						cols: 12,
						rules: [],
						widget: {
							component: "SelectIconConfigurator",
							props: {}
						}
					}]
				}],
				events: { onClick: {
					label: { zh_CN: "点击事件" },
					description: { zh_CN: "点击时触发的回调函数" },
					type: "event",
					functionInfo: {
						params: [],
						returns: {}
					}
				} },
				shortcuts: { properties: ["name"] },
				contentMenu: { actions: [] }
			},
			configure: { loop: !0 }
		},
		{
			icon: "Image",
			name: { zh_CN: "Img" },
			component: "Img",
			container: !1,
			schema: {
				properties: [{
					label: { zh_CN: "基础信息" },
					description: { zh_CN: "基础信息" },
					collapse: {
						number: 6,
						text: { zh_CN: "显示更多" }
					},
					content: [{
						property: "src",
						type: "string",
						bindState: !0,
						label: { text: { zh_CN: "src路径" } },
						cols: 12,
						rules: [],
						widget: {
							component: "InputConfigurator",
							props: {}
						}
					}]
				}],
				events: { onClick: {
					label: { zh_CN: "点击事件" },
					description: { zh_CN: "点击时触发的回调函数" },
					type: "event",
					functionInfo: {
						params: [],
						returns: {}
					}
				} },
				shortcuts: { properties: ["src"] },
				contentMenu: { actions: [] }
			},
			configure: { loop: !0 }
		}
	],
	snippets: [
		{
			group: "layout",
			label: { zh_CN: "布局与容器" },
			children: [{
				name: { zh_CN: "盒子容器" },
				screenshot: "",
				snippetName: "Box",
				icon: "Box",
				schema: {
					componentName: "div",
					props: {}
				}
			}]
		},
		{
			group: "basic",
			label: { zh_CN: "基础元素" },
			children: [
				{
					name: { zh_CN: "文本" },
					screenshot: "",
					snippetName: "Text",
					icon: "Text",
					schema: {
						componentName: "Text",
						props: {
							style: "display: inline-block;",
							text: "您好！欢迎使用生成式UI。它将重塑大模型交互方式，打造极致顺滑的智能体验。"
						}
					}
				},
				{
					name: { zh_CN: "图标" },
					screenshot: "",
					snippetName: "Icon",
					icon: "icon",
					schema: {
						componentName: "Icon",
						props: { name: "IconDel" }
					}
				},
				{
					name: { zh_CN: "图片" },
					screenshot: "",
					snippetName: "Img",
					icon: "Image",
					schema: {
						componentName: "Img",
						props: { src: "https://tinyengine-assets.obs.cn-north-4.myhuaweicloud.com/files/designer-default-icon.jpg" }
					}
				}
			]
		},
		{
			group: "advanced",
			label: { zh_CN: "高级元素" },
			children: [
				{
					name: { zh_CN: "插槽" },
					screenshot: "",
					snippetName: "Slot",
					icon: "slot",
					schema: {
						componentName: "Slot",
						props: {}
					}
				},
				{
					name: { zh_CN: "路由视图" },
					screenshot: "",
					snippetName: "RouterView",
					icon: "RouterView",
					schema: {
						componentName: "RouterView",
						props: {}
					}
				},
				{
					name: { zh_CN: "路由链接" },
					screenshot: "",
					snippetName: "RouterLink",
					icon: "RouterLink",
					schema: {
						componentName: "RouterLink",
						props: {},
						children: [{
							componentName: "Text",
							props: { text: "路由文本" }
						}]
					}
				},
				{
					name: { zh_CN: "导航条" },
					snippetName: "Navigation",
					icon: "navigation",
					schema: {
						componentName: "div",
						props: { style: "text-align: center; padding: 8px 12px; box-shadow: 0 0 4px #0003;" },
						children: [
							{
								componentName: "RouterLink",
								props: {
									to: "",
									style: "display: inline-flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
								},
								children: [{
									componentName: "Icon",
									props: {
										name: "IconPublicHome",
										style: "margin-top: 3px;"
									}
								}, {
									componentName: "Text",
									props: { text: "首页" }
								}]
							},
							{
								componentName: "RouterLink",
								props: {
									to: "",
									style: "display: inline-flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
								},
								children: [{
									componentName: "Icon",
									props: {
										name: "IconTaskCooperation",
										style: "margin-top: 3px;"
									}
								}, {
									componentName: "Text",
									props: { text: "介绍" }
								}]
							},
							{
								componentName: "RouterLink",
								props: {
									to: "",
									style: "display: inline-flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
								},
								children: [{
									componentName: "Icon",
									props: {
										name: "IconText",
										style: "margin-top: 3px;"
									}
								}, {
									componentName: "Text",
									props: { text: "文档" }
								}]
							}
						]
					}
				},
				{
					name: { zh_CN: "纵向导航" },
					snippetName: "NavigationV",
					icon: "NavigationV",
					schema: {
						componentName: "div",
						props: { style: "padding: 8px 12px; border-right: 1px solid #0003;" },
						children: [
							{
								componentName: "RouterLink",
								props: {
									to: "",
									style: "display: flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
								},
								children: [{
									componentName: "Icon",
									props: {
										name: "IconPublicHome",
										style: "margin-top: 3px;"
									}
								}, {
									componentName: "Text",
									props: { text: "首页" }
								}]
							},
							{
								componentName: "RouterLink",
								props: {
									to: "",
									style: "display: flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
								},
								children: [{
									componentName: "Icon",
									props: {
										name: "IconTaskCooperation",
										style: "margin-top: 3px;"
									}
								}, {
									componentName: "Text",
									props: { text: "介绍" }
								}]
							},
							{
								componentName: "RouterLink",
								props: {
									to: "",
									style: "display: flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
								},
								children: [{
									componentName: "Icon",
									props: {
										name: "IconText",
										style: "margin-top: 3px;"
									}
								}, {
									componentName: "Text",
									props: { text: "文档" }
								}]
							},
							{
								componentName: "RouterLink",
								props: {
									to: "",
									style: "display: flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
								},
								children: [{
									componentName: "Icon",
									props: {
										name: "IconText",
										style: "margin-top: 3px;"
									}
								}, {
									componentName: "Text",
									props: { text: "文档" }
								}]
							},
							{
								componentName: "RouterLink",
								props: {
									to: "",
									style: "display: flex; gap: 8px; padding: 10px 20px; color: inherit; text-decoration: none;"
								},
								children: [{
									componentName: "Icon",
									props: {
										name: "IconText",
										style: "margin-top: 3px;"
									}
								}, {
									componentName: "Text",
									props: { text: "文档" }
								}]
							}
						]
					}
				},
				{
					name: { zh_CN: "数据源容器" },
					screenshot: "",
					snippetName: "Collection",
					icon: "Collection",
					schema: {
						componentName: "Collection",
						props: {}
					}
				}
			]
		}
	]
} } };
const c = { data: /* @__PURE__ */ JSON.parse("{\"framework\":\"Vue\",\"materials\":{\"components\":[{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"折线图\"},\"component\":\"TinyHuichartsLine\",\"icon\":\"line\",\"description\":\"折线图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"dataZoom\",\"label\":{\"text\":{\"zh_CN\":\"区域缩放轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"itemStyle\",\"label\":{\"text\":{\"zh_CN\":\"数据点文本样式\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"padding\",\"label\":{\"text\":{\"zh_CN\":\"图表内边距\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"},{\"property\":\"xAxis\",\"label\":{\"text\":{\"zh_CN\":\"配置x轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":{},\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"默认值：图表数据data中data[0]对象的第一个key值\"},\"labelPosition\":\"left\"},{\"property\":\"yAxis\",\"label\":{\"text\":{\"zh_CN\":\"配置y轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":{},\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"折线图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"柱状图\"},\"component\":\"TinyHuichartsHistogram\",\"icon\":\"histogram\",\"description\":\"柱状图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsHistogram\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[{\"Month\":\"\",\"val\":\"\"}],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"dataRules\",\"label\":{\"text\":{\"zh_CN\":\"数据规则\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"dataZoom\",\"label\":{\"text\":{\"zh_CN\":\"区域缩放轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"direction\",\"label\":{\"text\":{\"zh_CN\":\"柱体方向\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"language\":\"json\",\"options\":[{\"label\":\"vertical\",\"value\":\"vertical\"},{\"label\":\"horizontal\",\"value\":\"horizontal\"}]}},\"description\":{\"zh_CN\":\"柱体方向\"},\"labelPosition\":\"left\"},{\"property\":\"itemStyle\",\"label\":{\"text\":{\"zh_CN\":\"柱体样式\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"label\",\"label\":{\"text\":{\"zh_CN\":\"柱体文本\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"柱体文本，默认不显示\"},\"labelPosition\":\"left\"},{\"property\":\"legend\",\"label\":{\"text\":{\"zh_CN\":\"图例配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图例配置，默认显示\"},\"labelPosition\":\"left\"},{\"property\":\"lineDataName\",\"label\":{\"text\":{\"zh_CN\":\"更改数据名\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"InputConfigurator\",\"props\":{}},\"description\":{\"zh_CN\":\"柱状图更改为折线图的数据名\"},\"labelPosition\":\"left\"},{\"property\":\"markline\",\"label\":{\"text\":{\"zh_CN\":\"阈值线配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"padding\",\"label\":{\"text\":{\"zh_CN\":\"图表内边距\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"},{\"property\":\"type\",\"label\":{\"text\":{\"zh_CN\":\"柱状图类型\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"bar\",\"value\":\"bar\"},{\"label\":\"range\",\"value\":\"range\"},{\"label\":\"water-fall\",\"value\":\"water-fall\"}]}},\"labelPosition\":\"left\"},{\"property\":\"xAxis\",\"label\":{\"text\":{\"zh_CN\":\"配置x轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":{\"data\":\"\"},\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"默认值：图表数据data中data[0]对象的第一个key值\"},\"labelPosition\":\"left\"},{\"property\":\"yAxis\",\"label\":{\"text\":{\"zh_CN\":\"配置y轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":{},\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"柱状图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{\"onReady\":{\"type\":\"event\",\"label\":{\"zh_CN\":\"每次渲染完成后触发\"},\"description\":{\"zh_CN\":\"图表渲染完成后触发，每次渲染都会触发一次\"},\"functionInfo\":{\"params\":[],\"returns\":{}}},\"onReadyOnce\":{\"type\":\"event\",\"label\":{\"zh_CN\":\"首次渲染完成后触发\"},\"description\":{\"zh_CN\":\"图表渲染完成后触发，只会在首次渲染完成后触发\"},\"functionInfo\":{\"params\":[],\"returns\":{}}}}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"条形图\"},\"component\":\"TinyHuichartsBar\",\"icon\":\"bar\",\"description\":\"条形图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsBar\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"dataZoom\",\"label\":{\"text\":{\"zh_CN\":\"区域缩放轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"itemStyle\",\"label\":{\"text\":{\"zh_CN\":\"柱体样式\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"padding\",\"label\":{\"text\":{\"zh_CN\":\"图表内边距\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"},{\"property\":\"xAxis\",\"label\":{\"text\":{\"zh_CN\":\"配置x轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":{},\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"默认值：图表数据data中data[0]对象的第一个key值\"},\"labelPosition\":\"left\"},{\"property\":\"yAxis\",\"label\":{\"text\":{\"zh_CN\":\"配置y轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":{},\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"条形图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{\"onReady\":{\"type\":\"event\",\"label\":{\"zh_CN\":\"图表渲染完成后触发\"},\"description\":{\"zh_CN\":\"图表渲染完成后触发，每次渲染都会触发一次\"},\"functionInfo\":{\"params\":[],\"returns\":{}}},\"onReadyOnce\":{\"type\":\"event\",\"label\":{\"zh_CN\":\"图表渲染完成后触发\"},\"description\":{\"zh_CN\":\"图表渲染完成后触发，只会在首次渲染完成后触发\"},\"functionInfo\":{\"params\":[],\"returns\":{}}}}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"圆盘图\"},\"component\":\"TinyHuichartsPie\",\"icon\":\"pie\",\"description\":\"圆盘图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsPie\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"title\",\"label\":{\"text\":{\"zh_CN\":\"中心文本配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"itemStyle\",\"label\":{\"text\":{\"zh_CN\":\"描边配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"position\",\"label\":{\"text\":{\"zh_CN\":\"图表位置及大小\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"圆盘图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"环形图\"},\"component\":\"TinyHuichartsRing\",\"icon\":\"ring\",\"description\":\"环形图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsRing\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"position\",\"label\":{\"text\":{\"zh_CN\":\"图表位置及大小\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"itemStyle\",\"label\":{\"text\":{\"zh_CN\":\"描边配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"title\",\"label\":{\"text\":{\"zh_CN\":\"中心文本配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"环形图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{\"onReady\":{\"type\":\"event\",\"label\":{\"zh_CN\":\"图表渲染完成后触发\"},\"description\":{\"zh_CN\":\"图表渲染完成后触发，每次渲染都会触发一次\"},\"functionInfo\":{\"params\":[],\"returns\":{}}},\"onReadyOnce\":{\"type\":\"event\",\"label\":{\"zh_CN\":\"图表渲染完成后触发\"},\"description\":{\"zh_CN\":\"图表渲染完成后触发，只会在首次渲染完成后触发\"},\"functionInfo\":{\"params\":[],\"returns\":{}}}},\"slots\":{\"default\":{\"label\":{\"zh_CN\":\"默认内容\"},\"description\":{\"zh_CN\":\"组件默认插槽\"}}}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"雷达图\"},\"component\":\"TinyHuichartsRadar\",\"icon\":\"radar\",\"description\":\"雷达图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsRadar\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":{},\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"area\",\"label\":{\"text\":{\"zh_CN\":\"图形区域配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"radar\",\"label\":{\"text\":{\"zh_CN\":\"坐标系配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":{\"triggerEvent\":true},\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"position\",\"label\":{\"text\":{\"zh_CN\":\"图表位置及大小\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"雷达图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{\"onReady\":{\"type\":\"event\",\"label\":{\"zh_CN\":\"图表渲染完成后触发\"},\"description\":{\"zh_CN\":\"图表渲染完成后触发，每次渲染都会触发一次\"},\"functionInfo\":{\"params\":[],\"returns\":{}}},\"onReadyOnce\":{\"type\":\"event\",\"label\":{\"zh_CN\":\"图表渲染完成后触发\"},\"description\":{\"zh_CN\":\"图表渲染完成后触发，只会在首次渲染完成后触发\"},\"functionInfo\":{\"params\":[],\"returns\":{}}}},\"slots\":{\"default\":{\"label\":{\"zh_CN\":\"默认内容\"},\"description\":{\"zh_CN\":\"组件默认插槽\"}}}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"漏斗图\"},\"component\":\"TinyHuichartsFunnel\",\"icon\":\"funnel\",\"description\":\"漏斗图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsFunnel\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"position\",\"label\":{\"text\":{\"zh_CN\":\"图表位置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"size\",\"label\":{\"text\":{\"zh_CN\":\"图表大小\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"漏斗图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"散点图\"},\"component\":\"TinyHuichartsScatter\",\"icon\":\"scatter\",\"description\":\"散点图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsScatter\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"bubbleSize\",\"label\":{\"text\":{\"zh_CN\":\"气泡大小范围\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"itemStyle\",\"label\":{\"text\":{\"zh_CN\":\"节点图形样式\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"padding\",\"label\":{\"text\":{\"zh_CN\":\"图表内边距\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"},{\"property\":\"xAxis\",\"label\":{\"text\":{\"zh_CN\":\"配置x轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"默认值：图表数据data中data[0]对象的第一个key值\"},\"labelPosition\":\"left\",\"defaultValue\":{}},{\"property\":\"yAxis\",\"label\":{\"text\":{\"zh_CN\":\"配置y轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\",\"defaultValue\":{}}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"散点图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"瀑布图\"},\"component\":\"TinyHuichartsWaterfall\",\"icon\":\"waterfall\",\"description\":\"瀑布图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsWaterfall\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"dataZoom\",\"label\":{\"text\":{\"zh_CN\":\"区域缩放轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"itemStyle\",\"label\":{\"text\":{\"zh_CN\":\"柱体样式\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"padding\",\"label\":{\"text\":{\"zh_CN\":\"图表内边距\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"},{\"property\":\"xAxis\",\"label\":{\"text\":{\"zh_CN\":\"配置x轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":{},\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"默认值：图表数据data中data[0]对象的第一个key值\"},\"labelPosition\":\"left\"},{\"property\":\"yAxis\",\"label\":{\"text\":{\"zh_CN\":\"配置y轴\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":{},\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"瀑布图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"仪表盘\"},\"component\":\"TinyHuichartsGauge\",\"icon\":\"gauge\",\"description\":\"仪表盘\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsGauge\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"startAngle\",\"label\":{\"text\":{\"zh_CN\":\"起始角度\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"type\":\"number\",\"widget\":{\"component\":\"NumberConfigurator\",\"props\":{}},\"description\":{\"zh_CN\":\"仪表盘起始角度。圆心正右手侧为 0 度，正上方为 90 度，正左手侧为 180 度\"},\"labelPosition\":\"left\"},{\"property\":\"endAngle\",\"label\":{\"text\":{\"zh_CN\":\"结束角度\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"type\":\"number\",\"widget\":{\"component\":\"NumberConfigurator\",\"props\":{}},\"description\":{\"zh_CN\":\"仪表盘结束角度。圆心正右手侧为 0 度，正上方为 90 度，正左手侧为 180 度\"},\"labelPosition\":\"left\"},{\"property\":\"min\",\"label\":{\"text\":{\"zh_CN\":\"最小刻度\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"type\":\"number\",\"widget\":{\"component\":\"NumberConfigurator\",\"props\":{}},\"description\":{\"zh_CN\":\"仪表盘的最小值\"},\"labelPosition\":\"left\"},{\"property\":\"max\",\"label\":{\"text\":{\"zh_CN\":\"最大刻度\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"type\":\"number\",\"widget\":{\"component\":\"NumberConfigurator\",\"props\":{}},\"description\":{\"zh_CN\":\"仪表盘的最大值\"},\"labelPosition\":\"left\"},{\"property\":\"pointer\",\"label\":{\"text\":{\"zh_CN\":\"刻度指针\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"type\":\"boolean\",\"widget\":{\"component\":\"SwitchConfigurator\",\"props\":{}},\"description\":{\"zh_CN\":\"刻度指针是否显示\"},\"labelPosition\":\"left\"},{\"property\":\"splitColor\",\"label\":{\"text\":{\"zh_CN\":\"分割区间\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"仪表盘的分割颜色，splitColor[i][0] 的值代表整根轴线的百分比，应在 0 到 1 之间, splitColor[i][1] 是对应的颜色\"},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"仪表盘配置\"},\"labelPosition\":\"top\"}]}],\"events\":{}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"拓扑图\"},\"component\":\"TinyHuichartsGraph\",\"icon\":\"graph\",\"description\":\"拓扑图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsGraph\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"series\",\"label\":{\"text\":{\"zh_CN\":\"系列\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"animationEasing\",\"label\":{\"text\":{\"zh_CN\":\"初始缓动效果\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"type\":\"string\",\"widget\":{\"component\":\"InputConfigurator\",\"props\":{}},\"description\":{\"zh_CN\":\"初始动画的缓动效果\"},\"labelPosition\":\"left\"},{\"property\":\"animationEasingUpdate\",\"label\":{\"text\":{\"zh_CN\":\"更新缓动效果\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"type\":\"string\",\"widget\":{\"component\":\"InputConfigurator\",\"props\":{}},\"description\":{\"zh_CN\":\"更新动画的缓动效果\"},\"labelPosition\":\"left\"},{\"property\":\"animationDurationUpdate\",\"label\":{\"text\":{\"zh_CN\":\"动画时长\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"type\":\"number\",\"widget\":{\"component\":\"NumberConfigurator\",\"props\":{}},\"description\":{\"zh_CN\":\"数据更新动画的时长\"},\"labelPosition\":\"left\"},{\"property\":\"animationDelayUpdate\",\"label\":{\"text\":{\"zh_CN\":\"动画延迟\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"type\":\"number\",\"widget\":{\"component\":\"NumberConfigurator\",\"props\":{}},\"description\":{\"zh_CN\":\"数据更新动画的延迟\"},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"拓扑图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}},{\"version\":\"3.22.0\",\"name\":{\"zh_CN\":\"进度图\"},\"component\":\"TinyHuichartsProcess\",\"icon\":\"process\",\"description\":\"进度图\",\"docUrl\":\"\",\"screenshot\":\"\",\"tags\":\"\",\"keywords\":\"\",\"devMode\":\"proCode\",\"npm\":{\"destructuring\":true,\"exportName\":\"TinyHuichartsProcess\",\"name\":\"TinyVueHuicharts组件库\",\"package\":\"@opentiny/vue-huicharts\",\"version\":\"3.22.0\",\"script\":\"https://registry.npmmirror.com/@opentiny/vue-runtime/3.22/files/dist3/tiny-vue-huicharts.mjs\"},\"group\":\"chart\",\"category\":\"图表组件\",\"priority\":2,\"schema\":{\"properties\":[{\"label\":{\"zh_CN\":\"基础信息\"},\"description\":{\"zh_CN\":\"基础信息\"},\"content\":[{\"property\":\"options\",\"label\":{\"text\":{\"zh_CN\":\"图表配置\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"properties\":[{\"label\":{\"zh_CN\":\"默认分组\"},\"content\":[{\"property\":\"color\",\"label\":{\"text\":{\"zh_CN\":\"颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"颜色, 类型Array\"},\"labelPosition\":\"left\"},{\"property\":\"data\",\"label\":{\"text\":{\"zh_CN\":\"数据\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"defaultValue\":[],\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"图表数据\"},\"labelPosition\":\"left\"},{\"property\":\"name\",\"label\":{\"text\":{\"zh_CN\":\"图表数据, 已有默认值，禁止设置name\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"state\",\"label\":{\"text\":{\"zh_CN\":\"根据状态设置颜色\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"padding\",\"label\":{\"text\":{\"zh_CN\":\"图表内边距\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"labelPosition\":\"left\"},{\"property\":\"theme\",\"label\":{\"text\":{\"zh_CN\":\"主题\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"SelectConfigurator\",\"props\":{\"options\":[{\"label\":\"light\",\"value\":\"light\"},{\"label\":\"dark\",\"value\":\"dark\"},{\"label\":\"hdesign-light\",\"value\":\"hdesign-light\"},{\"label\":\"hdesign-dark\",\"value\":\"hdesign-dark\"},{\"label\":\"cloud-light\",\"value\":\"cloud-light\"},{\"label\":\"bpit-light\",\"value\":\"bpit-light\"},{\"label\":\"bpit-dark\",\"value\":\"bpit-dark\"}]}},\"labelPosition\":\"left\"},{\"property\":\"tooltip\",\"label\":{\"text\":{\"zh_CN\":\"悬浮框内容\"}},\"required\":true,\"readOnly\":false,\"disabled\":false,\"cols\":12,\"widget\":{\"component\":\"CodeConfigurator\",\"props\":{\"language\":\"json\"}},\"description\":{\"zh_CN\":\"悬浮提示框内容配置\"},\"labelPosition\":\"left\"}]}],\"widget\":{\"component\":\"NestedPropertyConfigurator\",\"props\":{\"type\":\"object\",\"language\":\"json\"}},\"description\":{\"zh_CN\":\"进度图配置\"},\"labelPosition\":\"top\"}]}],\"events\":{}},\"configure\":{\"loop\":true,\"condition\":true,\"styles\":true,\"isContainer\":false,\"isModal\":false,\"nestingRule\":{\"childWhitelist\":\"\",\"parentWhitelist\":\"\",\"descendantBlacklist\":\"\",\"ancestorWhitelist\":\"\"},\"isNullNode\":false,\"isLayout\":false,\"rootSelector\":\"\",\"shortcuts\":{\"properties\":[]},\"contextMenu\":{\"actions\":[\"create symbol\"],\"disable\":[\"copy\",\"remove\"]}}}],\"snippets\":[{\"group\":\"Charts\",\"label\":{\"zh_CN\":\"图表\"},\"children\":[{\"name\":{\"zh_CN\":\"折线图\"},\"icon\":\"line\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsLine\",\"schema\":{\"componentName\":\"TinyHuichartsLine\",\"props\":{\"options\":{\"theme\":\"hdesign-light\",\"padding\":[50,30,50,20],\"legend\":{\"show\":true,\"icon\":\"line\"},\"data\":[{\"Month\":\"Jan\",\"Domestics\":33,\"Abroad\":37},{\"Month\":\"Feb\",\"Domestics\":27,\"Abroad\":39},{\"Month\":\"Mar\",\"Domestics\":31,\"Abroad\":20},{\"Month\":\"Apr\",\"Domestics\":30,\"Abroad\":15},{\"Month\":\"May\",\"Domestics\":37,\"Abroad\":13},{\"Month\":\"Jun\",\"Domestics\":36,\"Abroad\":17},{\"Month\":\"Jul\",\"Domestics\":42,\"Abroad\":22},{\"Month\":\"Aug\",\"Domestics\":22,\"Abroad\":12},{\"Month\":\"Sep\",\"Domestics\":17,\"Abroad\":30},{\"Month\":\"Oct\",\"Domestics\":40,\"Abroad\":33},{\"Month\":\"Nov\",\"Domestics\":42,\"Abroad\":22},{\"Month\":\"Dec\",\"Domestics\":32,\"Abroad\":11}],\"xAxis\":{\"data\":\"Month\"},\"yAxis\":{\"name\":\"Percentage(%)\"}}}}},{\"name\":{\"zh_CN\":\"柱状图\"},\"icon\":\"histogram\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsHistogram\",\"schema\":{\"componentName\":\"TinyHuichartsHistogram\",\"props\":{\"options\":{\"theme\":\"hdesign-light\",\"padding\":[50,30,50,20],\"data\":[{\"Month\":\"Jan\",\"Domestic\":33,\"Abroad\":1},{\"Month\":\"Feb\",\"Domestic\":27,\"Abroad\":39},{\"Month\":\"Mar\",\"Domestic\":31,\"Abroad\":20},{\"Month\":\"Apr\",\"Domestic\":30,\"Abroad\":15},{\"Month\":\"May\",\"Domestic\":37,\"Abroad\":1},{\"Month\":\"Jun\",\"Domestic\":36,\"Abroad\":17},{\"Month\":\"Jul\",\"Domestic\":42,\"Abroad\":22},{\"Month\":\"Aug\",\"Domestic\":22,\"Abroad\":12},{\"Month\":\"Sep\",\"Domestic\":17,\"Abroad\":30},{\"Month\":\"Oct\",\"Domestic\":40,\"Abroad\":33},{\"Month\":\"Nov\",\"Domestic\":42,\"Abroad\":22},{\"Month\":\"Dec\",\"Domestic\":32,\"Abroad\":1}],\"xAxis\":{\"data\":\"Month\"},\"yAxis\":{\"name\":\"Percentage(%)\"}}}}},{\"name\":{\"zh_CN\":\"条形图\"},\"icon\":\"bar\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsBar\",\"schema\":{\"componentName\":\"TinyHuichartsBar\",\"props\":{\"options\":{\"theme\":\"hdesign-light\",\"padding\":[50,30,50,20],\"data\":[{\"Month\":\"Jan\",\"Domestic\":33,\"Abroad\":1},{\"Month\":\"Feb\",\"Domestic\":27,\"Abroad\":39},{\"Month\":\"Mar\",\"Domestic\":31,\"Abroad\":20},{\"Month\":\"Apr\",\"Domestic\":30,\"Abroad\":15},{\"Month\":\"May\",\"Domestic\":37,\"Abroad\":1},{\"Month\":\"Jun\",\"Domestic\":36,\"Abroad\":17},{\"Month\":\"Jul\",\"Domestic\":42,\"Abroad\":22},{\"Month\":\"Aug\",\"Domestic\":22,\"Abroad\":12},{\"Month\":\"Sep\",\"Domestic\":17,\"Abroad\":30},{\"Month\":\"Oct\",\"Domestic\":40,\"Abroad\":33},{\"Month\":\"Nov\",\"Domestic\":42,\"Abroad\":22},{\"Month\":\"Dec\",\"Domestic\":32,\"Abroad\":1}],\"xAxis\":{\"data\":\"Month\"},\"yAxis\":{\"name\":\"Percentage(%)\"},\"direction\":\"horizontal\"}}}},{\"name\":{\"zh_CN\":\"圆盘图\"},\"icon\":\"pie\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsPie\",\"schema\":{\"componentName\":\"TinyHuichartsPie\",\"props\":{\"options\":{\"type\":\"pie\",\"theme\":\"hdesign-light\",\"label\":{\"show\":true,\"line\":true,\"labelHtml\":\"{a|}{b|{b}:}{c|{d}%}\",\"rich\":{\"a\":{\"width\":12,\"height\":12,\"backgroundColor\":{\"image\":\"./image/charts/pie/ic_jiantou_hong.svg\"}},\"b\":{\"padding\":[2,4,0,0]},\"c\":{\"fontWeight\":\"bold\",\"padding\":[2,0,0,0]}}},\"data\":[{\"value\":100,\"name\":\"VPC\"},{\"value\":90,\"name\":\"IM\"},{\"value\":49,\"name\":\"EIP\"},{\"value\":14,\"name\":\"SG\"}]}}}},{\"name\":{\"zh_CN\":\"环形图\"},\"icon\":\"ring\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsRing\",\"schema\":{\"componentName\":\"TinyHuichartsRing\",\"props\":{\"options\":{\"theme\":\"hdesign-light\",\"type\":\"circle\",\"data\":[{\"value\":100,\"name\":\"VPC\"},{\"value\":90,\"name\":\"IM\"},{\"value\":49,\"name\":\"EIP\"},{\"value\":14,\"name\":\"SG\"}]}}}},{\"name\":{\"zh_CN\":\"雷达图\"},\"icon\":\"radar\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsRadar\",\"schema\":{\"componentName\":\"TinyHuichartsRadar\",\"props\":{\"options\":{\"theme\":\"hdesign-light\",\"legend\":{\"show\":true,\"position\":{\"left\":\"center\",\"bottom\":20.1}},\"radarMax\":100,\"data\":{\"Domestic\":{\"Equipment\":41,\"VM\":91,\"CSP\":81,\"RD\":51,\"Markets\":71},\"Abroad\":{\"Equipment\":72,\"VM\":55,\"CSP\":93,\"RD\":90,\"Markets\":82}}}}}},{\"name\":{\"zh_CN\":\"瀑布图\"},\"icon\":\"waterfall\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsWaterfall\",\"schema\":{\"componentName\":\"TinyHuichartsWaterfall\",\"props\":{\"options\":{\"padding\":[50,30,20,20],\"legend\":{\"show\":false},\"type\":\"water-fall\",\"data\":[{\"Name\":\"NLE\",\"User\":10},{\"Name\":\"HIN\",\"User\":20},{\"Name\":\"FBP\",\"User\":9},{\"Name\":\"VEDIO\",\"User\":35},{\"Name\":\"SASS\",\"User\":20},{\"Name\":\"RDS\",\"User\":35},{\"Name\":\"E-SYS\",\"User\":9}],\"xAxis\":{\"data\":\"Name\"},\"yAxis\":{\"name\":\"Number\"}}}}},{\"name\":{\"zh_CN\":\"漏斗图\"},\"icon\":\"funnel\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsFunnel\",\"schema\":{\"componentName\":\"TinyHuichartsFunnel\",\"props\":{\"options\":{\"data\":[{\"value\":100,\"name\":\"Show\"},{\"value\":75,\"name\":\"Click\"},{\"value\":50,\"name\":\"Visit\"},{\"value\":25,\"name\":\"Order\"}]}}}},{\"name\":{\"zh_CN\":\"散点图\"},\"icon\":\"scatter\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsScatter\",\"schema\":{\"componentName\":\"TinyHuichartsScatter\",\"props\":{\"options\":{\"padding\":[50,30,50,20],\"legend\":{\"orient\":\"horizontal\",\"show\":true,\"position\":{\"left\":\"center\",\"bottom\":15}},\"bubbleSize\":[20,100],\"xAxisType\":\"value\",\"data\":{\"1990\":[[28604,77,1709866,\"Australia\",1990],[31163,77.4,27662440,\"Canada\",1990],[60001,68,1154605773,\"China\",1990],[13670,74.7,10582082,\"Cuba\",1990],[28599,75,4986705,\"Finland\",1990]],\"2000\":[[19349,69.6,147568552,\"Russia\",2000],[10670,67.3,53994606,\"Turkey\",2000],[26424,75.7,57110117,\"United Kingdom\",2000],[37062,75.4,252847810,\"United States\",2000],[23038,73.13,143456918,\"Russia\",2000]],\"2015\":[[44056,81.8,23968976,\"Australia\",2015],[43294,81.7,35939927,\"Canada\",2015],[13334,76.9,1376048943,\"Cuba\",2015],[21291,78.5,11389566,\"Finland\",2015],[38923,80.8,5503457,\"France\",2015]]}}}}},{\"name\":{\"zh_CN\":\"仪表盘\"},\"icon\":\"gauge\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsGauge\",\"schema\":{\"componentName\":\"TinyHuichartsGauge\",\"props\":{\"options\":{\"splitColor\":[[0.25,\"#0d9458\"],[0.5,\"#eeba18\"],[0.75,\"#ec6f1a\"],[1,\"#f43146\"]],\"pointer\":true,\"data\":[{\"value\":71,\"name\":\"Utilization rate\"}]}}}},{\"name\":{\"zh_CN\":\"拓扑图\"},\"icon\":\"graph\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsGraph\",\"schema\":{\"componentName\":\"TinyHuichartsGraph\",\"props\":{\"options\":{\"animationDurationUpdate\":1600,\"animationEasingUpdate\":\"quinticInOut\",\"series\":[{\"type\":\"graph\",\"layout\":\"none\",\"symbolSize\":48,\"color\":\"#42A5F5\",\"roam\":true,\"label\":{\"normal\":{\"show\":true}},\"edgeSymbol\":[\"circle\",\"arrow\"],\"edgeSymbolSize\":[3,10],\"edgeLabel\":{\"normal\":{\"textStyle\":{\"fontSize\":18}}},\"data\":[{\"name\":\"节点 1\",\"x\":300,\"y\":300},{\"name\":\"节点 2\",\"x\":800,\"y\":300},{\"name\":\"节点 3\",\"x\":550,\"y\":100},{\"name\":\"节点 4\",\"x\":550,\"y\":500}],\"links\":[{\"source\":0,\"target\":1,\"symbolSize\":[5,20],\"label\":{\"normal\":{\"show\":true}},\"lineStyle\":{\"normal\":{\"width\":5,\"curveness\":0.2}}},{\"source\":\"节点 2\",\"target\":\"节点 1\",\"label\":{\"normal\":{\"show\":true}},\"lineStyle\":{\"normal\":{\"curveness\":0.2}}},{\"source\":\"节点 1\",\"target\":\"节点 3\"},{\"source\":\"节点 2\",\"target\":\"节点 3\"},{\"source\":\"节点 2\",\"target\":\"节点 4\"},{\"source\":\"节点 1\",\"target\":\"节点 4\"}],\"lineStyle\":{\"normal\":{\"opacity\":0.9,\"width\":2,\"curveness\":0}}}]}}}},{\"name\":{\"zh_CN\":\"进度图\"},\"icon\":\"process\",\"screenshot\":\"\",\"snippetName\":\"TinyHuichartsProcess\",\"schema\":{\"componentName\":\"TinyHuichartsProcess\",\"props\":{\"options\":{\"name\":\"ProcessBarChart\",\"theme\":\"light\",\"padding\":[32,32,0,32],\"color\":[\"#fa2a2d\",\"#ff7500\",\"#ffbf00\",\"#41ba41\",\"#00aaee\"],\"data\":[{\"name\":\"UniEPMgr\",\"value\":80},{\"name\":\"SMLoglic\",\"value\":65},{\"name\":\"SSO\",\"value\":45},{\"name\":\"APIMgr\",\"value\":20},{\"name\":\"Logtransfer\",\"value\":12}]}}}}]}]}}") };
const h = { data: {
	framework: "Vue",
	materials: {
		components: [{
			name: { zh_CN: "看板画布" },
			component: "GridStack",
			description: "看板画布，可完成对看板瓷砖的布局",
			group: "component",
			schema: {
				properties: [],
				slots: { default: {
					label: { zh_CN: "自定义看板内容" },
					description: { zh_CN: "看板画布的内容，通常为看板瓷砖列表" }
				} }
			}
		}, {
			name: { zh_CN: "看板瓷砖组件" },
			description: "看板瓷砖，包裹展示内容,生成看板所需参数，看板在画布中完成布局，画布整体由12 * 12个格子排列，举例：看板占据2行2列，参数各项取值为[{x: 0, y: 0, w: 2, h: 2}]",
			component: "GridStackItem",
			group: "component",
			schema: {
				properties: [{
					label: { zh_CN: "基础属性" },
					content: [
						{
							property: "x",
							label: { text: { zh_CN: "整体布局中横坐标，每个图片按高度和宽度占用情况分配坐标，取值从0开始" } },
							description: { zh_CN: "整体布局中横坐标，每个图片按高度和宽度占用情况分配坐标，取值从0开始" },
							required: !0,
							readOnly: !1,
							disabled: !1,
							type: "number"
						},
						{
							property: "y",
							label: { text: { zh_CN: "整体布局中纵坐标，每个图片按高度和宽度占用情况分配坐标，取值从0开始" } },
							description: { zh_CN: "整体布局中纵坐标，每个图片按高度和宽度占用情况分配坐标，取值从0开始" },
							required: !0,
							readOnly: !1,
							disabled: !1,
							type: "number"
						},
						{
							property: "w",
							label: { text: { zh_CN: "看板在画布中占据的列数，画布总共12列，即该数值取值范围为0到11" } },
							description: { zh_CN: "看板在画布中占据的列数，画布总共12列，即该数值取值范围为0到11" },
							required: !0,
							readOnly: !1,
							disabled: !1,
							type: "number"
						},
						{
							property: "h",
							label: { text: { zh_CN: "看板在画布中占据的行数，画布总共12行，即该数值取值范围为0到11" } },
							description: { zh_CN: "看板在画布中占据的行数，画布总共12行，即该数值取值范围为0到11" },
							required: !0,
							readOnly: !1,
							disabled: !1,
							type: "number"
						},
						{
							property: "id",
							label: { text: { zh_CN: "唯一标识" } },
							description: { zh_CN: "唯一标识，要保证唯一性" },
							required: !0,
							readOnly: !1,
							disabled: !1,
							type: "string"
						},
						{
							property: "autoPosition",
							label: { text: { zh_CN: "是否开启自动在画布中定位" } },
							description: { zh_CN: "是否开启自动在画布中定位" },
							required: !1,
							readOnly: !1,
							disabled: !1,
							type: "boolean"
						}
					]
				}],
				slots: { default: {
					label: { zh_CN: "自定义看板瓷砖内容" },
					description: { zh_CN: "可以使用其他组件作为瓷砖内容，也可以自定义实现" }
				} }
			}
		}],
		snippets: []
	}
} };
const R$1 = [
	{
		id: "form",
		name: "双向绑定的表单",
		schema: {
			state: { formData: {
				name: "张三",
				sex: "男",
				depart: "HR",
				protocolStart: "2023-01-01"
			} },
			refs: { formRef: null },
			methods: { departChange: {
				type: "JSFunction",
				value: "function departChange(value) { console.log(value) }"
			} },
			componentName: "Page",
			children: [{
				componentName: "h3",
				children: "更新员工信息"
			}, {
				componentName: "TinyForm",
				props: {
					model: {
						type: "JSExpression",
						value: "this.state.formData"
					},
					ref: {
						type: "JSExpression",
						value: "this.refs.formRef"
					},
					labelPosition: "top"
				},
				children: [
					{
						componentName: "TinyFormItem",
						props: {
							label: "姓名",
							prop: "name",
							required: !0
						},
						children: [{
							componentName: "TinyInput",
							props: {
								placeholder: "请输入",
								modelValue: {
									type: "JSExpression",
									model: !0,
									value: "this.state.formData.name"
								}
							}
						}]
					},
					{
						componentName: "TinyFormItem",
						props: {
							label: "性别",
							prop: "sex"
						},
						children: [{
							componentName: "TinyRadioGroup",
							props: {
								options: [{
									text: "男",
									label: "男"
								}, {
									text: "女",
									label: "女"
								}],
								modelValue: {
									type: "JSExpression",
									model: !0,
									value: "this.state.formData.sex"
								}
							}
						}]
					},
					{
						componentName: "TinyFormItem",
						props: {
							label: "部门",
							prop: "depart",
							required: !0
						},
						children: [{
							componentName: "TinySelect",
							props: {
								placeholder: "请选择",
								modelValue: {
									type: "JSExpression",
									model: !0,
									value: "this.state.formData.depart"
								},
								options: [{
									value: "HR",
									label: "人事部"
								}, {
									value: "other",
									label: "其他部门"
								}],
								onChange: {
									type: "JSExpression",
									value: "this.departChange"
								}
							}
						}]
					},
					{
						componentName: "TinyFormItem",
						props: {
							label: "入职日期",
							prop: "protocolStart"
						},
						children: [{
							componentName: "TinyDatePicker",
							props: {
								placeholder: "请输入",
								disabled: !0,
								modelValue: {
									type: "JSExpression",
									model: !0,
									value: "this.state.formData.protocolStart"
								}
							}
						}]
					},
					{
						componentName: "TinyFormItem",
						props: { label: "" },
						children: [{
							componentName: "TinyButton",
							props: {
								text: "确认",
								onClick: {
									type: "JSFunction",
									value: "function() { this.refs.formRef.validate().then(res => { console.log(\"校验通过\", res) }).catch((err) => { console.log(\"校验失败, 失败只做提示，不继续会话\", err) }) }"
								}
							}
						}]
					}
				]
			}]
		}
	},
	{
		id: "info",
		name: "信息展示卡片",
		schema: {
			componentName: "Page",
			children: [{
				componentName: "Text",
				props: {
					style: "font-size: 14px;font-weight: bold;line-height:2;margin-bottom:20px;display:block;",
					text: "员工信息详情"
				}
			}, {
				componentName: "div",
				props: {
					className: "component-base-style",
					style: "width: 374px; background: #f5f5f5;border-radius: 12px;line-height:2;font-size:14px;padding: 20px 0;"
				},
				children: [{
					componentName: "TinyLayout",
					props: { className: "component-base-style" },
					children: [{
						componentName: "TinyRow",
						children: [{
							componentName: "TinyCol",
							props: { span: 3 },
							children: [{
								componentName: "Text",
								props: { text: "姓名" }
							}]
						}, {
							componentName: "TinyCol",
							props: { span: 9 },
							children: [{
								componentName: "Text",
								props: { text: "张三" }
							}]
						}]
					}, {
						componentName: "TinyRow",
						children: [{
							componentName: "TinyCol",
							props: { span: 3 },
							children: [{
								componentName: "Text",
								props: { text: "电话" }
							}]
						}, {
							componentName: "TinyCol",
							props: { span: 9 },
							children: [{
								componentName: "Text",
								props: { text: "18856254558" }
							}]
						}]
					}]
				}]
			}],
			id: "body"
		}
	},
	{
		id: "grid",
		name: "表格卡片",
		schema: {
			componentName: "Page",
			css: ".page-base-style {padding: 24px;background: #FFFFFF;}.block-base-style {margin: 16px;}.component-base-style {margin: 8px;}",
			props: { className: "page-base-style" },
			lifeCycles: {},
			children: [{
				componentName: "TinyGrid",
				props: {
					columns: [
						{
							type: "index",
							width: 60
						},
						{
							field: "name",
							title: "姓名"
						},
						{
							field: "id",
							title: "工号"
						},
						{
							field: "sex",
							title: "性别"
						},
						{
							field: "department",
							title: "部门"
						},
						{
							field: "protocolStart",
							title: "入职日期"
						},
						{
							field: "email",
							title: "邮箱"
						},
						{
							title: "操作",
							slots: { default: {
								type: "JSSlot",
								value: [{
									componentName: "div",
									id: "23324161",
									children: [{
										componentName: "TinyButton",
										props: {
											className: "component-base-style",
											text: {
												type: "JSExpression",
												value: "`编辑${row.name}`"
											}
										},
										children: [],
										id: "24392624"
									}]
								}],
								params: ["row"]
							} }
						}
					],
					data: [{
						name: "李四",
						id: "2",
						sex: "女",
						department: "技术部",
						protocolStart: "2019-05-15",
						email: "lisi@test.com"
					}],
					className: "component-base-style"
				}
			}],
			dataSource: { list: [] },
			id: "body"
		}
	},
	{
		id: "tabs",
		name: "Tabs卡片",
		schema: {
			state: { activeTab: "basic" },
			methods: {},
			componentName: "Page",
			children: [{
				componentName: "h3",
				props: {},
				children: "订单详情"
			}, {
				componentName: "TinyTabs",
				props: { modelValue: {
					type: "JSExpression",
					model: !0,
					value: "this.state.activeTab"
				} },
				children: [
					{
						componentName: "TinyTabItem",
						props: {
							title: "基本信息",
							name: "basic"
						},
						children: [{
							componentName: "Text",
							props: { text: "订单号：ORD-20240301" }
						}, {
							componentName: "Text",
							props: { text: "下单时间：2024-03-01 10:30" }
						}]
					},
					{
						componentName: "TinyTabItem",
						props: {
							title: "物流信息",
							name: "logistics"
						},
						children: [{
							componentName: "Text",
							props: { text: "承运商：顺丰速运" }
						}, {
							componentName: "Text",
							props: { text: "运单号：SF1234567890" }
						}]
					},
					{
						componentName: "TinyTabItem",
						props: {
							title: "售后",
							name: "service"
						},
						children: [{
							componentName: "Text",
							props: { text: "暂无售后记录" }
						}]
					}
				]
			}]
		}
	}
];
const o = [
	...[
		"a",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"p",
		"ol",
		"ul",
		"li",
		"div",
		"input",
		"video",
		"label",
		"Img",
		"Slot",
		"Text",
		"TinyForm",
		"TinyFormItem",
		"TinyButton",
		"TinyInput",
		"TinyRadio",
		"TinyRadioGroup",
		"TinySelect",
		"TinySwitch",
		"TinyNumeric",
		"TinyCheckbox",
		"TinyCheckboxButton",
		"TinyCheckboxGroup",
		"TinyDatePicker",
		"TinyGrid",
		"TinyCard"
	],
	"TinyPager",
	"TinyHuichartsLine",
	"TinyHuichartsHistogram",
	"TinyHuichartsBar",
	"TinyHuichartsRadar",
	"TinyHuichartsRing",
	"TinyHuichartsPie",
	"TinyHuichartsFunnel",
	"TinyHuichartsScatter",
	"TinyHuichartsWaterfall",
	"TinyHuichartsGauge",
	"TinyHuichartsGraph",
	"TinyHuichartsProcess"
];
[...o];
const V = [c, ...[
	a,
	p$1,
	h
]];
const L = ["禁止设置饼图的 `settings.radius`"];
function l(n) {
	return R$1.filter((e) => !!e.id && n.includes(e.id));
}
const A$1 = {
	materials: V,
	wrapperComponent: "TinyCard",
	whiteList: o,
	examples: l([
		"form",
		"info",
		"grid",
		"tabs"
	]),
	rules: L
};
l(["form", "grid"]);
//#endregion
//#region node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util) {
	util.assertEqual = (_) => {};
	function assertIs(_arg) {}
	util.assertIs = assertIs;
	function assertNever(_x) {
		throw new Error();
	}
	util.assertNever = assertNever;
	util.arrayToEnum = (items) => {
		const obj = {};
		for (const item of items) obj[item] = item;
		return obj;
	};
	util.getValidEnumValues = (obj) => {
		const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
		const filtered = {};
		for (const k of validKeys) filtered[k] = obj[k];
		return util.objectValues(filtered);
	};
	util.objectValues = (obj) => {
		return util.objectKeys(obj).map(function(e) {
			return obj[e];
		});
	};
	util.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
		const keys = [];
		for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key)) keys.push(key);
		return keys;
	};
	util.find = (arr, checker) => {
		for (const item of arr) if (checker(item)) return item;
	};
	util.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
	function joinValues(array, separator = " | ") {
		return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
	}
	util.joinValues = joinValues;
	util.jsonStringifyReplacer = (_, value) => {
		if (typeof value === "bigint") return value.toString();
		return value;
	};
})(util || (util = {}));
var objectUtil;
(function(objectUtil) {
	objectUtil.mergeShapes = (first, second) => {
		return {
			...first,
			...second
		};
	};
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
	"string",
	"nan",
	"number",
	"integer",
	"float",
	"boolean",
	"date",
	"bigint",
	"symbol",
	"function",
	"undefined",
	"null",
	"array",
	"object",
	"unknown",
	"promise",
	"void",
	"never",
	"map",
	"set"
]);
const getParsedType = (data) => {
	switch (typeof data) {
		case "undefined": return ZodParsedType.undefined;
		case "string": return ZodParsedType.string;
		case "number": return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
		case "boolean": return ZodParsedType.boolean;
		case "function": return ZodParsedType.function;
		case "bigint": return ZodParsedType.bigint;
		case "symbol": return ZodParsedType.symbol;
		case "object":
			if (Array.isArray(data)) return ZodParsedType.array;
			if (data === null) return ZodParsedType.null;
			if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
			if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
			if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
			if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
			return ZodParsedType.object;
		default: return ZodParsedType.unknown;
	}
};
//#endregion
//#region node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
const ZodIssueCode = util.arrayToEnum([
	"invalid_type",
	"invalid_literal",
	"custom",
	"invalid_union",
	"invalid_union_discriminator",
	"invalid_enum_value",
	"unrecognized_keys",
	"invalid_arguments",
	"invalid_return_type",
	"invalid_date",
	"invalid_string",
	"too_small",
	"too_big",
	"invalid_intersection_types",
	"not_multiple_of",
	"not_finite"
]);
var ZodError = class ZodError extends Error {
	get errors() {
		return this.issues;
	}
	constructor(issues) {
		super();
		this.issues = [];
		this.addIssue = (sub) => {
			this.issues = [...this.issues, sub];
		};
		this.addIssues = (subs = []) => {
			this.issues = [...this.issues, ...subs];
		};
		const actualProto = new.target.prototype;
		if (Object.setPrototypeOf) Object.setPrototypeOf(this, actualProto);
		else this.__proto__ = actualProto;
		this.name = "ZodError";
		this.issues = issues;
	}
	format(_mapper) {
		const mapper = _mapper || function(issue) {
			return issue.message;
		};
		const fieldErrors = { _errors: [] };
		const processError = (error) => {
			for (const issue of error.issues) if (issue.code === "invalid_union") issue.unionErrors.map(processError);
			else if (issue.code === "invalid_return_type") processError(issue.returnTypeError);
			else if (issue.code === "invalid_arguments") processError(issue.argumentsError);
			else if (issue.path.length === 0) fieldErrors._errors.push(mapper(issue));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < issue.path.length) {
					const el = issue.path[i];
					if (!(i === issue.path.length - 1)) curr[el] = curr[el] || { _errors: [] };
					else {
						curr[el] = curr[el] || { _errors: [] };
						curr[el]._errors.push(mapper(issue));
					}
					curr = curr[el];
					i++;
				}
			}
		};
		processError(this);
		return fieldErrors;
	}
	static assert(value) {
		if (!(value instanceof ZodError)) throw new Error(`Not a ZodError: ${value}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(mapper = (issue) => issue.message) {
		const fieldErrors = {};
		const formErrors = [];
		for (const sub of this.issues) if (sub.path.length > 0) {
			const firstEl = sub.path[0];
			fieldErrors[firstEl] = fieldErrors[firstEl] || [];
			fieldErrors[firstEl].push(mapper(sub));
		} else formErrors.push(mapper(sub));
		return {
			formErrors,
			fieldErrors
		};
	}
	get formErrors() {
		return this.flatten();
	}
};
ZodError.create = (issues) => {
	return new ZodError(issues);
};
//#endregion
//#region node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
const errorMap = (issue, _ctx) => {
	let message;
	switch (issue.code) {
		case ZodIssueCode.invalid_type:
			if (issue.received === ZodParsedType.undefined) message = "Required";
			else message = `Expected ${issue.expected}, received ${issue.received}`;
			break;
		case ZodIssueCode.invalid_literal:
			message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
			break;
		case ZodIssueCode.unrecognized_keys:
			message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
			break;
		case ZodIssueCode.invalid_union:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_union_discriminator:
			message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
			break;
		case ZodIssueCode.invalid_enum_value:
			message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
			break;
		case ZodIssueCode.invalid_arguments:
			message = `Invalid function arguments`;
			break;
		case ZodIssueCode.invalid_return_type:
			message = `Invalid function return type`;
			break;
		case ZodIssueCode.invalid_date:
			message = `Invalid date`;
			break;
		case ZodIssueCode.invalid_string:
			if (typeof issue.validation === "object") {
				if ("includes" in issue.validation) {
					message = `Invalid input: must include "${issue.validation.includes}"`;
					if (typeof issue.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
				} else if ("startsWith" in issue.validation) message = `Invalid input: must start with "${issue.validation.startsWith}"`;
				else if ("endsWith" in issue.validation) message = `Invalid input: must end with "${issue.validation.endsWith}"`;
				else util.assertNever(issue.validation);
			} else if (issue.validation !== "regex") message = `Invalid ${issue.validation}`;
			else message = "Invalid";
			break;
		case ZodIssueCode.too_small:
			if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
			else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
			else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
			else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
			else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.too_big:
			if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
			else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
			else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
			else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
			else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.custom:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_intersection_types:
			message = `Intersection results could not be merged`;
			break;
		case ZodIssueCode.not_multiple_of:
			message = `Number must be a multiple of ${issue.multipleOf}`;
			break;
		case ZodIssueCode.not_finite:
			message = "Number must be finite";
			break;
		default:
			message = _ctx.defaultError;
			util.assertNever(issue);
	}
	return { message };
};
//#endregion
//#region node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
let overrideErrorMap = errorMap;
function getErrorMap() {
	return overrideErrorMap;
}
//#endregion
//#region node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
const makeIssue = (params) => {
	const { data, path, errorMaps, issueData } = params;
	const fullPath = [...path, ...issueData.path || []];
	const fullIssue = {
		...issueData,
		path: fullPath
	};
	if (issueData.message !== void 0) return {
		...issueData,
		path: fullPath,
		message: issueData.message
	};
	let errorMessage = "";
	const maps = errorMaps.filter((m) => !!m).slice().reverse();
	for (const map of maps) errorMessage = map(fullIssue, {
		data,
		defaultError: errorMessage
	}).message;
	return {
		...issueData,
		path: fullPath,
		message: errorMessage
	};
};
function addIssueToContext(ctx, issueData) {
	const overrideMap = getErrorMap();
	const issue = makeIssue({
		issueData,
		data: ctx.data,
		path: ctx.path,
		errorMaps: [
			ctx.common.contextualErrorMap,
			ctx.schemaErrorMap,
			overrideMap,
			overrideMap === errorMap ? void 0 : errorMap
		].filter((x) => !!x)
	});
	ctx.common.issues.push(issue);
}
var ParseStatus = class ParseStatus {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		if (this.value === "valid") this.value = "dirty";
	}
	abort() {
		if (this.value !== "aborted") this.value = "aborted";
	}
	static mergeArray(status, results) {
		const arrayValue = [];
		for (const s of results) {
			if (s.status === "aborted") return INVALID;
			if (s.status === "dirty") status.dirty();
			arrayValue.push(s.value);
		}
		return {
			status: status.value,
			value: arrayValue
		};
	}
	static async mergeObjectAsync(status, pairs) {
		const syncPairs = [];
		for (const pair of pairs) {
			const key = await pair.key;
			const value = await pair.value;
			syncPairs.push({
				key,
				value
			});
		}
		return ParseStatus.mergeObjectSync(status, syncPairs);
	}
	static mergeObjectSync(status, pairs) {
		const finalObject = {};
		for (const pair of pairs) {
			const { key, value } = pair;
			if (key.status === "aborted") return INVALID;
			if (value.status === "aborted") return INVALID;
			if (key.status === "dirty") status.dirty();
			if (value.status === "dirty") status.dirty();
			if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
		}
		return {
			status: status.value,
			value: finalObject
		};
	}
};
const INVALID = Object.freeze({ status: "aborted" });
const DIRTY = (value) => ({
	status: "dirty",
	value
});
const OK = (value) => ({
	status: "valid",
	value
});
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
//#endregion
//#region node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil) {
	errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
	errorUtil.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));
//#endregion
//#region node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
	constructor(parent, value, path, key) {
		this._cachedPath = [];
		this.parent = parent;
		this.data = value;
		this._path = path;
		this._key = key;
	}
	get path() {
		if (!this._cachedPath.length) {
			if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
			else this._cachedPath.push(...this._path, this._key);
		}
		return this._cachedPath;
	}
};
const handleResult = (ctx, result) => {
	if (isValid(result)) return {
		success: true,
		data: result.value
	};
	else {
		if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
		return {
			success: false,
			get error() {
				if (this._error) return this._error;
				const error = new ZodError(ctx.common.issues);
				this._error = error;
				return this._error;
			}
		};
	}
};
function processCreateParams(params) {
	if (!params) return {};
	const { errorMap, invalid_type_error, required_error, description } = params;
	if (errorMap && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
	if (errorMap) return {
		errorMap,
		description
	};
	const customMap = (iss, ctx) => {
		const { message } = params;
		if (iss.code === "invalid_enum_value") return { message: message ?? ctx.defaultError };
		if (typeof ctx.data === "undefined") return { message: message ?? required_error ?? ctx.defaultError };
		if (iss.code !== "invalid_type") return { message: ctx.defaultError };
		return { message: message ?? invalid_type_error ?? ctx.defaultError };
	};
	return {
		errorMap: customMap,
		description
	};
}
var ZodType = class {
	get description() {
		return this._def.description;
	}
	_getType(input) {
		return getParsedType(input.data);
	}
	_getOrReturnCtx(input, ctx) {
		return ctx || {
			common: input.parent.common,
			data: input.data,
			parsedType: getParsedType(input.data),
			schemaErrorMap: this._def.errorMap,
			path: input.path,
			parent: input.parent
		};
	}
	_processInputParams(input) {
		return {
			status: new ParseStatus(),
			ctx: {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent
			}
		};
	}
	_parseSync(input) {
		const result = this._parse(input);
		if (isAsync(result)) throw new Error("Synchronous parse encountered promise.");
		return result;
	}
	_parseAsync(input) {
		const result = this._parse(input);
		return Promise.resolve(result);
	}
	parse(data, params) {
		const result = this.safeParse(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	safeParse(data, params) {
		const ctx = {
			common: {
				issues: [],
				async: params?.async ?? false,
				contextualErrorMap: params?.errorMap
			},
			path: params?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		const result = this._parseSync({
			data,
			path: ctx.path,
			parent: ctx
		});
		return handleResult(ctx, result);
	}
	"~validate"(data) {
		const ctx = {
			common: {
				issues: [],
				async: !!this["~standard"].async
			},
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		if (!this["~standard"].async) try {
			const result = this._parseSync({
				data,
				path: [],
				parent: ctx
			});
			return isValid(result) ? { value: result.value } : { issues: ctx.common.issues };
		} catch (err) {
			if (err?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = true;
			ctx.common = {
				issues: [],
				async: true
			};
		}
		return this._parseAsync({
			data,
			path: [],
			parent: ctx
		}).then((result) => isValid(result) ? { value: result.value } : { issues: ctx.common.issues });
	}
	async parseAsync(data, params) {
		const result = await this.safeParseAsync(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	async safeParseAsync(data, params) {
		const ctx = {
			common: {
				issues: [],
				contextualErrorMap: params?.errorMap,
				async: true
			},
			path: params?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		const maybeAsyncResult = this._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
		const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
		return handleResult(ctx, result);
	}
	refine(check, message) {
		const getIssueProperties = (val) => {
			if (typeof message === "string" || typeof message === "undefined") return { message };
			else if (typeof message === "function") return message(val);
			else return message;
		};
		return this._refinement((val, ctx) => {
			const result = check(val);
			const setError = () => ctx.addIssue({
				code: ZodIssueCode.custom,
				...getIssueProperties(val)
			});
			if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data) => {
				if (!data) {
					setError();
					return false;
				} else return true;
			});
			if (!result) {
				setError();
				return false;
			} else return true;
		});
	}
	refinement(check, refinementData) {
		return this._refinement((val, ctx) => {
			if (!check(val)) {
				ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
				return false;
			} else return true;
		});
	}
	_refinement(refinement) {
		return new ZodEffects({
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "refinement",
				refinement
			}
		});
	}
	superRefine(refinement) {
		return this._refinement(refinement);
	}
	constructor(def) {
		/** Alias of safeParseAsync */
		this.spa = this.safeParseAsync;
		this._def = def;
		this.parse = this.parse.bind(this);
		this.safeParse = this.safeParse.bind(this);
		this.parseAsync = this.parseAsync.bind(this);
		this.safeParseAsync = this.safeParseAsync.bind(this);
		this.spa = this.spa.bind(this);
		this.refine = this.refine.bind(this);
		this.refinement = this.refinement.bind(this);
		this.superRefine = this.superRefine.bind(this);
		this.optional = this.optional.bind(this);
		this.nullable = this.nullable.bind(this);
		this.nullish = this.nullish.bind(this);
		this.array = this.array.bind(this);
		this.promise = this.promise.bind(this);
		this.or = this.or.bind(this);
		this.and = this.and.bind(this);
		this.transform = this.transform.bind(this);
		this.brand = this.brand.bind(this);
		this.default = this.default.bind(this);
		this.catch = this.catch.bind(this);
		this.describe = this.describe.bind(this);
		this.pipe = this.pipe.bind(this);
		this.readonly = this.readonly.bind(this);
		this.isNullable = this.isNullable.bind(this);
		this.isOptional = this.isOptional.bind(this);
		this["~standard"] = {
			version: 1,
			vendor: "zod",
			validate: (data) => this["~validate"](data)
		};
	}
	optional() {
		return ZodOptional.create(this, this._def);
	}
	nullable() {
		return ZodNullable.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return ZodArray.create(this);
	}
	promise() {
		return ZodPromise.create(this, this._def);
	}
	or(option) {
		return ZodUnion.create([this, option], this._def);
	}
	and(incoming) {
		return ZodIntersection.create(this, incoming, this._def);
	}
	transform(transform) {
		return new ZodEffects({
			...processCreateParams(this._def),
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "transform",
				transform
			}
		});
	}
	default(def) {
		const defaultValueFunc = typeof def === "function" ? def : () => def;
		return new ZodDefault({
			...processCreateParams(this._def),
			innerType: this,
			defaultValue: defaultValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodDefault
		});
	}
	brand() {
		return new ZodBranded({
			typeName: ZodFirstPartyTypeKind.ZodBranded,
			type: this,
			...processCreateParams(this._def)
		});
	}
	catch(def) {
		const catchValueFunc = typeof def === "function" ? def : () => def;
		return new ZodCatch({
			...processCreateParams(this._def),
			innerType: this,
			catchValue: catchValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodCatch
		});
	}
	describe(description) {
		const This = this.constructor;
		return new This({
			...this._def,
			description
		});
	}
	pipe(target) {
		return ZodPipeline.create(this, target);
	}
	readonly() {
		return ZodReadonly.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
};
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex$1;
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
	let secondsRegexSource = `[0-5]\\d`;
	if (args.precision) secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
	else if (args.precision == null) secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
	const secondsQuantifier = args.precision ? "+" : "?";
	return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
	return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
	let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
	const opts = [];
	opts.push(args.local ? `Z?` : `Z`);
	if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
	regex = `${regex}(${opts.join("|")})`;
	return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
	if ((version === "v4" || !version) && ipv4Regex.test(ip)) return true;
	if ((version === "v6" || !version) && ipv6Regex.test(ip)) return true;
	return false;
}
function isValidJWT(jwt, alg) {
	if (!jwtRegex.test(jwt)) return false;
	try {
		const [header] = jwt.split(".");
		if (!header) return false;
		const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
		const decoded = JSON.parse(atob(base64));
		if (typeof decoded !== "object" || decoded === null) return false;
		if ("typ" in decoded && decoded?.typ !== "JWT") return false;
		if (!decoded.alg) return false;
		if (alg && decoded.alg !== alg) return false;
		return true;
	} catch {
		return false;
	}
}
function isValidCidr(ip, version) {
	if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) return true;
	if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) return true;
	return false;
}
var ZodString = class ZodString extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = String(input.data);
		if (this._getType(input) !== ZodParsedType.string) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.string,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check of this._def.checks) if (check.kind === "min") {
			if (input.data.length < check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "string",
					inclusive: true,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (input.data.length > check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "string",
					inclusive: true,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "length") {
			const tooBig = input.data.length > check.value;
			const tooSmall = input.data.length < check.value;
			if (tooBig || tooSmall) {
				ctx = this._getOrReturnCtx(input, ctx);
				if (tooBig) addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "string",
					inclusive: true,
					exact: true,
					message: check.message
				});
				else if (tooSmall) addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "string",
					inclusive: true,
					exact: true,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "email") {
			if (!emailRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "email",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "emoji") {
			if (!emojiRegex$1) emojiRegex$1 = new RegExp(_emojiRegex, "u");
			if (!emojiRegex$1.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "emoji",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "uuid") {
			if (!uuidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "uuid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "nanoid") {
			if (!nanoidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "nanoid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cuid") {
			if (!cuidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cuid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cuid2") {
			if (!cuid2Regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cuid2",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "ulid") {
			if (!ulidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "ulid",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "url") try {
			new URL(input.data);
		} catch {
			ctx = this._getOrReturnCtx(input, ctx);
			addIssueToContext(ctx, {
				validation: "url",
				code: ZodIssueCode.invalid_string,
				message: check.message
			});
			status.dirty();
		}
		else if (check.kind === "regex") {
			check.regex.lastIndex = 0;
			if (!check.regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "regex",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "trim") input.data = input.data.trim();
		else if (check.kind === "includes") {
			if (!input.data.includes(check.value, check.position)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: {
						includes: check.value,
						position: check.position
					},
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "toLowerCase") input.data = input.data.toLowerCase();
		else if (check.kind === "toUpperCase") input.data = input.data.toUpperCase();
		else if (check.kind === "startsWith") {
			if (!input.data.startsWith(check.value)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: { startsWith: check.value },
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "endsWith") {
			if (!input.data.endsWith(check.value)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: { endsWith: check.value },
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "datetime") {
			if (!datetimeRegex(check).test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "datetime",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "date") {
			if (!dateRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "date",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "time") {
			if (!timeRegex(check).test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "time",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "duration") {
			if (!durationRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "duration",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "ip") {
			if (!isValidIP(input.data, check.version)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "ip",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "jwt") {
			if (!isValidJWT(input.data, check.alg)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "jwt",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "cidr") {
			if (!isValidCidr(input.data, check.version)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cidr",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "base64") {
			if (!base64Regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "base64",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "base64url") {
			if (!base64urlRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "base64url",
					code: ZodIssueCode.invalid_string,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	_regex(regex, validation, message) {
		return this.refinement((data) => regex.test(data), {
			validation,
			code: ZodIssueCode.invalid_string,
			...errorUtil.errToObj(message)
		});
	}
	_addCheck(check) {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	email(message) {
		return this._addCheck({
			kind: "email",
			...errorUtil.errToObj(message)
		});
	}
	url(message) {
		return this._addCheck({
			kind: "url",
			...errorUtil.errToObj(message)
		});
	}
	emoji(message) {
		return this._addCheck({
			kind: "emoji",
			...errorUtil.errToObj(message)
		});
	}
	uuid(message) {
		return this._addCheck({
			kind: "uuid",
			...errorUtil.errToObj(message)
		});
	}
	nanoid(message) {
		return this._addCheck({
			kind: "nanoid",
			...errorUtil.errToObj(message)
		});
	}
	cuid(message) {
		return this._addCheck({
			kind: "cuid",
			...errorUtil.errToObj(message)
		});
	}
	cuid2(message) {
		return this._addCheck({
			kind: "cuid2",
			...errorUtil.errToObj(message)
		});
	}
	ulid(message) {
		return this._addCheck({
			kind: "ulid",
			...errorUtil.errToObj(message)
		});
	}
	base64(message) {
		return this._addCheck({
			kind: "base64",
			...errorUtil.errToObj(message)
		});
	}
	base64url(message) {
		return this._addCheck({
			kind: "base64url",
			...errorUtil.errToObj(message)
		});
	}
	jwt(options) {
		return this._addCheck({
			kind: "jwt",
			...errorUtil.errToObj(options)
		});
	}
	ip(options) {
		return this._addCheck({
			kind: "ip",
			...errorUtil.errToObj(options)
		});
	}
	cidr(options) {
		return this._addCheck({
			kind: "cidr",
			...errorUtil.errToObj(options)
		});
	}
	datetime(options) {
		if (typeof options === "string") return this._addCheck({
			kind: "datetime",
			precision: null,
			offset: false,
			local: false,
			message: options
		});
		return this._addCheck({
			kind: "datetime",
			precision: typeof options?.precision === "undefined" ? null : options?.precision,
			offset: options?.offset ?? false,
			local: options?.local ?? false,
			...errorUtil.errToObj(options?.message)
		});
	}
	date(message) {
		return this._addCheck({
			kind: "date",
			message
		});
	}
	time(options) {
		if (typeof options === "string") return this._addCheck({
			kind: "time",
			precision: null,
			message: options
		});
		return this._addCheck({
			kind: "time",
			precision: typeof options?.precision === "undefined" ? null : options?.precision,
			...errorUtil.errToObj(options?.message)
		});
	}
	duration(message) {
		return this._addCheck({
			kind: "duration",
			...errorUtil.errToObj(message)
		});
	}
	regex(regex, message) {
		return this._addCheck({
			kind: "regex",
			regex,
			...errorUtil.errToObj(message)
		});
	}
	includes(value, options) {
		return this._addCheck({
			kind: "includes",
			value,
			position: options?.position,
			...errorUtil.errToObj(options?.message)
		});
	}
	startsWith(value, message) {
		return this._addCheck({
			kind: "startsWith",
			value,
			...errorUtil.errToObj(message)
		});
	}
	endsWith(value, message) {
		return this._addCheck({
			kind: "endsWith",
			value,
			...errorUtil.errToObj(message)
		});
	}
	min(minLength, message) {
		return this._addCheck({
			kind: "min",
			value: minLength,
			...errorUtil.errToObj(message)
		});
	}
	max(maxLength, message) {
		return this._addCheck({
			kind: "max",
			value: maxLength,
			...errorUtil.errToObj(message)
		});
	}
	length(len, message) {
		return this._addCheck({
			kind: "length",
			value: len,
			...errorUtil.errToObj(message)
		});
	}
	/**
	* Equivalent to `.min(1)`
	*/
	nonempty(message) {
		return this.min(1, errorUtil.errToObj(message));
	}
	trim() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }]
		});
	}
	toLowerCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }]
		});
	}
	toUpperCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }]
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((ch) => ch.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((ch) => ch.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((ch) => ch.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((ch) => ch.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((ch) => ch.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((ch) => ch.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((ch) => ch.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((ch) => ch.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((ch) => ch.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((ch) => ch.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((ch) => ch.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((ch) => ch.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((ch) => ch.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((ch) => ch.kind === "base64url");
	}
	get minLength() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxLength() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
};
ZodString.create = (params) => {
	return new ZodString({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodString,
		coerce: params?.coerce ?? false,
		...processCreateParams(params)
	});
};
function floatSafeRemainder(val, step) {
	const valDecCount = (val.toString().split(".")[1] || "").length;
	const stepDecCount = (step.toString().split(".")[1] || "").length;
	const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
	return Number.parseInt(val.toFixed(decCount).replace(".", "")) % Number.parseInt(step.toFixed(decCount).replace(".", "")) / 10 ** decCount;
}
var ZodNumber = class ZodNumber extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
		this.step = this.multipleOf;
	}
	_parse(input) {
		if (this._def.coerce) input.data = Number(input.data);
		if (this._getType(input) !== ZodParsedType.number) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.number,
				received: ctx.parsedType
			});
			return INVALID;
		}
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check of this._def.checks) if (check.kind === "int") {
			if (!util.isInteger(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: "integer",
					received: "float",
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "min") {
			if (check.inclusive ? input.data < check.value : input.data <= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check.value,
					type: "number",
					inclusive: check.inclusive,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (check.inclusive ? input.data > check.value : input.data >= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check.value,
					type: "number",
					inclusive: check.inclusive,
					exact: false,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "multipleOf") {
			if (floatSafeRemainder(input.data, check.value) !== 0) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_multiple_of,
					multipleOf: check.value,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "finite") {
			if (!Number.isFinite(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_finite,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodNumber({
			...this._def,
			checks: [...this._def.checks, {
				kind,
				value,
				inclusive,
				message: errorUtil.toString(message)
			}]
		});
	}
	_addCheck(check) {
		return new ZodNumber({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	int(message) {
		return this._addCheck({
			kind: "int",
			message: errorUtil.toString(message)
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message)
		});
	}
	finite(message) {
		return this._addCheck({
			kind: "finite",
			message: errorUtil.toString(message)
		});
	}
	safe(message) {
		return this._addCheck({
			kind: "min",
			inclusive: true,
			value: Number.MIN_SAFE_INTEGER,
			message: errorUtil.toString(message)
		})._addCheck({
			kind: "max",
			inclusive: true,
			value: Number.MAX_SAFE_INTEGER,
			message: errorUtil.toString(message)
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
	get isInt() {
		return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
	}
	get isFinite() {
		let max = null;
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
		else if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		} else if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return Number.isFinite(min) && Number.isFinite(max);
	}
};
ZodNumber.create = (params) => {
	return new ZodNumber({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodNumber,
		coerce: params?.coerce || false,
		...processCreateParams(params)
	});
};
var ZodBigInt = class ZodBigInt extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
	}
	_parse(input) {
		if (this._def.coerce) try {
			input.data = BigInt(input.data);
		} catch {
			return this._getInvalidInput(input);
		}
		if (this._getType(input) !== ZodParsedType.bigint) return this._getInvalidInput(input);
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check of this._def.checks) if (check.kind === "min") {
			if (check.inclusive ? input.data < check.value : input.data <= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					type: "bigint",
					minimum: check.value,
					inclusive: check.inclusive,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (check.inclusive ? input.data > check.value : input.data >= check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					type: "bigint",
					maximum: check.value,
					inclusive: check.inclusive,
					message: check.message
				});
				status.dirty();
			}
		} else if (check.kind === "multipleOf") {
			if (input.data % check.value !== BigInt(0)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_multiple_of,
					multipleOf: check.value,
					message: check.message
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: input.data
		};
	}
	_getInvalidInput(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.bigint,
			received: ctx.parsedType
		});
		return INVALID;
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodBigInt({
			...this._def,
			checks: [...this._def.checks, {
				kind,
				value,
				inclusive,
				message: errorUtil.toString(message)
			}]
		});
	}
	_addCheck(check) {
		return new ZodBigInt({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message)
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
};
ZodBigInt.create = (params) => {
	return new ZodBigInt({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodBigInt,
		coerce: params?.coerce ?? false,
		...processCreateParams(params)
	});
};
var ZodBoolean = class extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = Boolean(input.data);
		if (this._getType(input) !== ZodParsedType.boolean) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.boolean,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodBoolean.create = (params) => {
	return new ZodBoolean({
		typeName: ZodFirstPartyTypeKind.ZodBoolean,
		coerce: params?.coerce || false,
		...processCreateParams(params)
	});
};
var ZodDate = class ZodDate extends ZodType {
	_parse(input) {
		if (this._def.coerce) input.data = new Date(input.data);
		if (this._getType(input) !== ZodParsedType.date) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.date,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (Number.isNaN(input.data.getTime())) {
			addIssueToContext(this._getOrReturnCtx(input), { code: ZodIssueCode.invalid_date });
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check of this._def.checks) if (check.kind === "min") {
			if (input.data.getTime() < check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					message: check.message,
					inclusive: true,
					exact: false,
					minimum: check.value,
					type: "date"
				});
				status.dirty();
			}
		} else if (check.kind === "max") {
			if (input.data.getTime() > check.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					message: check.message,
					inclusive: true,
					exact: false,
					maximum: check.value,
					type: "date"
				});
				status.dirty();
			}
		} else util.assertNever(check);
		return {
			status: status.value,
			value: new Date(input.data.getTime())
		};
	}
	_addCheck(check) {
		return new ZodDate({
			...this._def,
			checks: [...this._def.checks, check]
		});
	}
	min(minDate, message) {
		return this._addCheck({
			kind: "min",
			value: minDate.getTime(),
			message: errorUtil.toString(message)
		});
	}
	max(maxDate, message) {
		return this._addCheck({
			kind: "max",
			value: maxDate.getTime(),
			message: errorUtil.toString(message)
		});
	}
	get minDate() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min != null ? new Date(min) : null;
	}
	get maxDate() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max != null ? new Date(max) : null;
	}
};
ZodDate.create = (params) => {
	return new ZodDate({
		checks: [],
		coerce: params?.coerce || false,
		typeName: ZodFirstPartyTypeKind.ZodDate,
		...processCreateParams(params)
	});
};
var ZodSymbol = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.symbol) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.symbol,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodSymbol.create = (params) => {
	return new ZodSymbol({
		typeName: ZodFirstPartyTypeKind.ZodSymbol,
		...processCreateParams(params)
	});
};
var ZodUndefined = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.undefined,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodUndefined.create = (params) => {
	return new ZodUndefined({
		typeName: ZodFirstPartyTypeKind.ZodUndefined,
		...processCreateParams(params)
	});
};
var ZodNull = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.null) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.null,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodNull.create = (params) => {
	return new ZodNull({
		typeName: ZodFirstPartyTypeKind.ZodNull,
		...processCreateParams(params)
	});
};
var ZodAny = class extends ZodType {
	constructor() {
		super(...arguments);
		this._any = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
ZodAny.create = (params) => {
	return new ZodAny({
		typeName: ZodFirstPartyTypeKind.ZodAny,
		...processCreateParams(params)
	});
};
var ZodUnknown = class extends ZodType {
	constructor() {
		super(...arguments);
		this._unknown = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
ZodUnknown.create = (params) => {
	return new ZodUnknown({
		typeName: ZodFirstPartyTypeKind.ZodUnknown,
		...processCreateParams(params)
	});
};
var ZodNever = class extends ZodType {
	_parse(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.never,
			received: ctx.parsedType
		});
		return INVALID;
	}
};
ZodNever.create = (params) => {
	return new ZodNever({
		typeName: ZodFirstPartyTypeKind.ZodNever,
		...processCreateParams(params)
	});
};
var ZodVoid = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.void,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodVoid.create = (params) => {
	return new ZodVoid({
		typeName: ZodFirstPartyTypeKind.ZodVoid,
		...processCreateParams(params)
	});
};
var ZodArray = class ZodArray extends ZodType {
	_parse(input) {
		const { ctx, status } = this._processInputParams(input);
		const def = this._def;
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (def.exactLength !== null) {
			const tooBig = ctx.data.length > def.exactLength.value;
			const tooSmall = ctx.data.length < def.exactLength.value;
			if (tooBig || tooSmall) {
				addIssueToContext(ctx, {
					code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
					minimum: tooSmall ? def.exactLength.value : void 0,
					maximum: tooBig ? def.exactLength.value : void 0,
					type: "array",
					inclusive: true,
					exact: true,
					message: def.exactLength.message
				});
				status.dirty();
			}
		}
		if (def.minLength !== null) {
			if (ctx.data.length < def.minLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.minLength.message
				});
				status.dirty();
			}
		}
		if (def.maxLength !== null) {
			if (ctx.data.length > def.maxLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.maxLength.message
				});
				status.dirty();
			}
		}
		if (ctx.common.async) return Promise.all([...ctx.data].map((item, i) => {
			return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		})).then((result) => {
			return ParseStatus.mergeArray(status, result);
		});
		const result = [...ctx.data].map((item, i) => {
			return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		});
		return ParseStatus.mergeArray(status, result);
	}
	get element() {
		return this._def.type;
	}
	min(minLength, message) {
		return new ZodArray({
			...this._def,
			minLength: {
				value: minLength,
				message: errorUtil.toString(message)
			}
		});
	}
	max(maxLength, message) {
		return new ZodArray({
			...this._def,
			maxLength: {
				value: maxLength,
				message: errorUtil.toString(message)
			}
		});
	}
	length(len, message) {
		return new ZodArray({
			...this._def,
			exactLength: {
				value: len,
				message: errorUtil.toString(message)
			}
		});
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
ZodArray.create = (schema, params) => {
	return new ZodArray({
		type: schema,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: ZodFirstPartyTypeKind.ZodArray,
		...processCreateParams(params)
	});
};
function deepPartialify(schema) {
	if (schema instanceof ZodObject) {
		const newShape = {};
		for (const key in schema.shape) {
			const fieldSchema = schema.shape[key];
			newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
		}
		return new ZodObject({
			...schema._def,
			shape: () => newShape
		});
	} else if (schema instanceof ZodArray) return new ZodArray({
		...schema._def,
		type: deepPartialify(schema.element)
	});
	else if (schema instanceof ZodOptional) return ZodOptional.create(deepPartialify(schema.unwrap()));
	else if (schema instanceof ZodNullable) return ZodNullable.create(deepPartialify(schema.unwrap()));
	else if (schema instanceof ZodTuple) return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
	else return schema;
}
var ZodObject = class ZodObject extends ZodType {
	constructor() {
		super(...arguments);
		this._cached = null;
		/**
		* @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
		* If you want to pass through unknown properties, use `.passthrough()` instead.
		*/
		this.nonstrict = this.passthrough;
		/**
		* @deprecated Use `.extend` instead
		*  */
		this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const shape = this._def.shape();
		const keys = util.objectKeys(shape);
		this._cached = {
			shape,
			keys
		};
		return this._cached;
	}
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.object) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const { status, ctx } = this._processInputParams(input);
		const { shape, keys: shapeKeys } = this._getCached();
		const extraKeys = [];
		if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
			for (const key in ctx.data) if (!shapeKeys.includes(key)) extraKeys.push(key);
		}
		const pairs = [];
		for (const key of shapeKeys) {
			const keyValidator = shape[key];
			const value = ctx.data[key];
			pairs.push({
				key: {
					status: "valid",
					value: key
				},
				value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
				alwaysSet: key in ctx.data
			});
		}
		if (this._def.catchall instanceof ZodNever) {
			const unknownKeys = this._def.unknownKeys;
			if (unknownKeys === "passthrough") for (const key of extraKeys) pairs.push({
				key: {
					status: "valid",
					value: key
				},
				value: {
					status: "valid",
					value: ctx.data[key]
				}
			});
			else if (unknownKeys === "strict") {
				if (extraKeys.length > 0) {
					addIssueToContext(ctx, {
						code: ZodIssueCode.unrecognized_keys,
						keys: extraKeys
					});
					status.dirty();
				}
			} else if (unknownKeys === "strip") {} else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
		} else {
			const catchall = this._def.catchall;
			for (const key of extraKeys) {
				const value = ctx.data[key];
				pairs.push({
					key: {
						status: "valid",
						value: key
					},
					value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
					alwaysSet: key in ctx.data
				});
			}
		}
		if (ctx.common.async) return Promise.resolve().then(async () => {
			const syncPairs = [];
			for (const pair of pairs) {
				const key = await pair.key;
				const value = await pair.value;
				syncPairs.push({
					key,
					value,
					alwaysSet: pair.alwaysSet
				});
			}
			return syncPairs;
		}).then((syncPairs) => {
			return ParseStatus.mergeObjectSync(status, syncPairs);
		});
		else return ParseStatus.mergeObjectSync(status, pairs);
	}
	get shape() {
		return this._def.shape();
	}
	strict(message) {
		errorUtil.errToObj;
		return new ZodObject({
			...this._def,
			unknownKeys: "strict",
			...message !== void 0 ? { errorMap: (issue, ctx) => {
				const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
				if (issue.code === "unrecognized_keys") return { message: errorUtil.errToObj(message).message ?? defaultError };
				return { message: defaultError };
			} } : {}
		});
	}
	strip() {
		return new ZodObject({
			...this._def,
			unknownKeys: "strip"
		});
	}
	passthrough() {
		return new ZodObject({
			...this._def,
			unknownKeys: "passthrough"
		});
	}
	extend(augmentation) {
		return new ZodObject({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...augmentation
			})
		});
	}
	/**
	* Prior to zod@1.0.12 there was a bug in the
	* inferred type of merged objects. Please
	* upgrade if you are experiencing issues.
	*/
	merge(merging) {
		return new ZodObject({
			unknownKeys: merging._def.unknownKeys,
			catchall: merging._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...merging._def.shape()
			}),
			typeName: ZodFirstPartyTypeKind.ZodObject
		});
	}
	setKey(key, schema) {
		return this.augment({ [key]: schema });
	}
	catchall(index) {
		return new ZodObject({
			...this._def,
			catchall: index
		});
	}
	pick(mask) {
		const shape = {};
		for (const key of util.objectKeys(mask)) if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
		return new ZodObject({
			...this._def,
			shape: () => shape
		});
	}
	omit(mask) {
		const shape = {};
		for (const key of util.objectKeys(this.shape)) if (!mask[key]) shape[key] = this.shape[key];
		return new ZodObject({
			...this._def,
			shape: () => shape
		});
	}
	/**
	* @deprecated
	*/
	deepPartial() {
		return deepPartialify(this);
	}
	partial(mask) {
		const newShape = {};
		for (const key of util.objectKeys(this.shape)) {
			const fieldSchema = this.shape[key];
			if (mask && !mask[key]) newShape[key] = fieldSchema;
			else newShape[key] = fieldSchema.optional();
		}
		return new ZodObject({
			...this._def,
			shape: () => newShape
		});
	}
	required(mask) {
		const newShape = {};
		for (const key of util.objectKeys(this.shape)) if (mask && !mask[key]) newShape[key] = this.shape[key];
		else {
			let newField = this.shape[key];
			while (newField instanceof ZodOptional) newField = newField._def.innerType;
			newShape[key] = newField;
		}
		return new ZodObject({
			...this._def,
			shape: () => newShape
		});
	}
	keyof() {
		return createZodEnum(util.objectKeys(this.shape));
	}
};
ZodObject.create = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: "strip",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
ZodObject.strictCreate = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: "strict",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
ZodObject.lazycreate = (shape, params) => {
	return new ZodObject({
		shape,
		unknownKeys: "strip",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
var ZodUnion = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const options = this._def.options;
		function handleResults(results) {
			for (const result of results) if (result.result.status === "valid") return result.result;
			for (const result of results) if (result.result.status === "dirty") {
				ctx.common.issues.push(...result.ctx.common.issues);
				return result.result;
			}
			const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors
			});
			return INVALID;
		}
		if (ctx.common.async) return Promise.all(options.map(async (option) => {
			const childCtx = {
				...ctx,
				common: {
					...ctx.common,
					issues: []
				},
				parent: null
			};
			return {
				result: await option._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx
				}),
				ctx: childCtx
			};
		})).then(handleResults);
		else {
			let dirty = void 0;
			const issues = [];
			for (const option of options) {
				const childCtx = {
					...ctx,
					common: {
						...ctx.common,
						issues: []
					},
					parent: null
				};
				const result = option._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx
				});
				if (result.status === "valid") return result;
				else if (result.status === "dirty" && !dirty) dirty = {
					result,
					ctx: childCtx
				};
				if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
			}
			if (dirty) {
				ctx.common.issues.push(...dirty.ctx.common.issues);
				return dirty.result;
			}
			const unionErrors = issues.map((issues) => new ZodError(issues));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors
			});
			return INVALID;
		}
	}
	get options() {
		return this._def.options;
	}
};
ZodUnion.create = (types, params) => {
	return new ZodUnion({
		options: types,
		typeName: ZodFirstPartyTypeKind.ZodUnion,
		...processCreateParams(params)
	});
};
const getDiscriminator = (type) => {
	if (type instanceof ZodLazy) return getDiscriminator(type.schema);
	else if (type instanceof ZodEffects) return getDiscriminator(type.innerType());
	else if (type instanceof ZodLiteral) return [type.value];
	else if (type instanceof ZodEnum) return type.options;
	else if (type instanceof ZodNativeEnum) return util.objectValues(type.enum);
	else if (type instanceof ZodDefault) return getDiscriminator(type._def.innerType);
	else if (type instanceof ZodUndefined) return [void 0];
	else if (type instanceof ZodNull) return [null];
	else if (type instanceof ZodOptional) return [void 0, ...getDiscriminator(type.unwrap())];
	else if (type instanceof ZodNullable) return [null, ...getDiscriminator(type.unwrap())];
	else if (type instanceof ZodBranded) return getDiscriminator(type.unwrap());
	else if (type instanceof ZodReadonly) return getDiscriminator(type.unwrap());
	else if (type instanceof ZodCatch) return getDiscriminator(type._def.innerType);
	else return [];
};
var ZodDiscriminatedUnion = class ZodDiscriminatedUnion extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const discriminator = this.discriminator;
		const discriminatorValue = ctx.data[discriminator];
		const option = this.optionsMap.get(discriminatorValue);
		if (!option) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union_discriminator,
				options: Array.from(this.optionsMap.keys()),
				path: [discriminator]
			});
			return INVALID;
		}
		if (ctx.common.async) return option._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
		else return option._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	/**
	* The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
	* However, it only allows a union of objects, all of which need to share a discriminator property. This property must
	* have a different value for each object in the union.
	* @param discriminator the name of the discriminator property
	* @param types an array of object schemas
	* @param params
	*/
	static create(discriminator, options, params) {
		const optionsMap = /* @__PURE__ */ new Map();
		for (const type of options) {
			const discriminatorValues = getDiscriminator(type.shape[discriminator]);
			if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
			for (const value of discriminatorValues) {
				if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
				optionsMap.set(value, type);
			}
		}
		return new ZodDiscriminatedUnion({
			typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
			discriminator,
			options,
			optionsMap,
			...processCreateParams(params)
		});
	}
};
function mergeValues(a, b) {
	const aType = getParsedType(a);
	const bType = getParsedType(b);
	if (a === b) return {
		valid: true,
		data: a
	};
	else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
		const bKeys = util.objectKeys(b);
		const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		for (const key of sharedKeys) {
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) return { valid: false };
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	} else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
		if (a.length !== b.length) return { valid: false };
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return { valid: false };
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	} else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) return {
		valid: true,
		data: a
	};
	else return { valid: false };
}
var ZodIntersection = class extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const handleParsed = (parsedLeft, parsedRight) => {
			if (isAborted(parsedLeft) || isAborted(parsedRight)) return INVALID;
			const merged = mergeValues(parsedLeft.value, parsedRight.value);
			if (!merged.valid) {
				addIssueToContext(ctx, { code: ZodIssueCode.invalid_intersection_types });
				return INVALID;
			}
			if (isDirty(parsedLeft) || isDirty(parsedRight)) status.dirty();
			return {
				status: status.value,
				value: merged.data
			};
		};
		if (ctx.common.async) return Promise.all([this._def.left._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}), this._def.right._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		})]).then(([left, right]) => handleParsed(left, right));
		else return handleParsed(this._def.left._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}), this._def.right._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}));
	}
};
ZodIntersection.create = (left, right, params) => {
	return new ZodIntersection({
		left,
		right,
		typeName: ZodFirstPartyTypeKind.ZodIntersection,
		...processCreateParams(params)
	});
};
var ZodTuple = class ZodTuple extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (ctx.data.length < this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_small,
				minimum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array"
			});
			return INVALID;
		}
		if (!this._def.rest && ctx.data.length > this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_big,
				maximum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array"
			});
			status.dirty();
		}
		const items = [...ctx.data].map((item, itemIndex) => {
			const schema = this._def.items[itemIndex] || this._def.rest;
			if (!schema) return null;
			return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
		}).filter((x) => !!x);
		if (ctx.common.async) return Promise.all(items).then((results) => {
			return ParseStatus.mergeArray(status, results);
		});
		else return ParseStatus.mergeArray(status, items);
	}
	get items() {
		return this._def.items;
	}
	rest(rest) {
		return new ZodTuple({
			...this._def,
			rest
		});
	}
};
ZodTuple.create = (schemas, params) => {
	if (!Array.isArray(schemas)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new ZodTuple({
		items: schemas,
		typeName: ZodFirstPartyTypeKind.ZodTuple,
		rest: null,
		...processCreateParams(params)
	});
};
var ZodRecord = class ZodRecord extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const pairs = [];
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		for (const key in ctx.data) pairs.push({
			key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
			value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
			alwaysSet: key in ctx.data
		});
		if (ctx.common.async) return ParseStatus.mergeObjectAsync(status, pairs);
		else return ParseStatus.mergeObjectSync(status, pairs);
	}
	get element() {
		return this._def.valueType;
	}
	static create(first, second, third) {
		if (second instanceof ZodType) return new ZodRecord({
			keyType: first,
			valueType: second,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(third)
		});
		return new ZodRecord({
			keyType: ZodString.create(),
			valueType: first,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(second)
		});
	}
};
var ZodMap = class extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.map) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.map,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		const pairs = [...ctx.data.entries()].map(([key, value], index) => {
			return {
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
				value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
			};
		});
		if (ctx.common.async) {
			const finalMap = /* @__PURE__ */ new Map();
			return Promise.resolve().then(async () => {
				for (const pair of pairs) {
					const key = await pair.key;
					const value = await pair.value;
					if (key.status === "aborted" || value.status === "aborted") return INVALID;
					if (key.status === "dirty" || value.status === "dirty") status.dirty();
					finalMap.set(key.value, value.value);
				}
				return {
					status: status.value,
					value: finalMap
				};
			});
		} else {
			const finalMap = /* @__PURE__ */ new Map();
			for (const pair of pairs) {
				const key = pair.key;
				const value = pair.value;
				if (key.status === "aborted" || value.status === "aborted") return INVALID;
				if (key.status === "dirty" || value.status === "dirty") status.dirty();
				finalMap.set(key.value, value.value);
			}
			return {
				status: status.value,
				value: finalMap
			};
		}
	}
};
ZodMap.create = (keyType, valueType, params) => {
	return new ZodMap({
		valueType,
		keyType,
		typeName: ZodFirstPartyTypeKind.ZodMap,
		...processCreateParams(params)
	});
};
var ZodSet = class ZodSet extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.set) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.set,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const def = this._def;
		if (def.minSize !== null) {
			if (ctx.data.size < def.minSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.minSize.message
				});
				status.dirty();
			}
		}
		if (def.maxSize !== null) {
			if (ctx.data.size > def.maxSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.maxSize.message
				});
				status.dirty();
			}
		}
		const valueType = this._def.valueType;
		function finalizeSet(elements) {
			const parsedSet = /* @__PURE__ */ new Set();
			for (const element of elements) {
				if (element.status === "aborted") return INVALID;
				if (element.status === "dirty") status.dirty();
				parsedSet.add(element.value);
			}
			return {
				status: status.value,
				value: parsedSet
			};
		}
		const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
		if (ctx.common.async) return Promise.all(elements).then((elements) => finalizeSet(elements));
		else return finalizeSet(elements);
	}
	min(minSize, message) {
		return new ZodSet({
			...this._def,
			minSize: {
				value: minSize,
				message: errorUtil.toString(message)
			}
		});
	}
	max(maxSize, message) {
		return new ZodSet({
			...this._def,
			maxSize: {
				value: maxSize,
				message: errorUtil.toString(message)
			}
		});
	}
	size(size, message) {
		return this.min(size, message).max(size, message);
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
ZodSet.create = (valueType, params) => {
	return new ZodSet({
		valueType,
		minSize: null,
		maxSize: null,
		typeName: ZodFirstPartyTypeKind.ZodSet,
		...processCreateParams(params)
	});
};
var ZodFunction = class ZodFunction extends ZodType {
	constructor() {
		super(...arguments);
		this.validate = this.implement;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.function) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.function,
				received: ctx.parsedType
			});
			return INVALID;
		}
		function makeArgsIssue(args, error) {
			return makeIssue({
				data: args,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_arguments,
					argumentsError: error
				}
			});
		}
		function makeReturnsIssue(returns, error) {
			return makeIssue({
				data: returns,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_return_type,
					returnTypeError: error
				}
			});
		}
		const params = { errorMap: ctx.common.contextualErrorMap };
		const fn = ctx.data;
		if (this._def.returns instanceof ZodPromise) {
			const me = this;
			return OK(async function(...args) {
				const error = new ZodError([]);
				const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
					error.addIssue(makeArgsIssue(args, e));
					throw error;
				});
				const result = await Reflect.apply(fn, this, parsedArgs);
				return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
					error.addIssue(makeReturnsIssue(result, e));
					throw error;
				});
			});
		} else {
			const me = this;
			return OK(function(...args) {
				const parsedArgs = me._def.args.safeParse(args, params);
				if (!parsedArgs.success) throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
				const result = Reflect.apply(fn, this, parsedArgs.data);
				const parsedReturns = me._def.returns.safeParse(result, params);
				if (!parsedReturns.success) throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
				return parsedReturns.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...items) {
		return new ZodFunction({
			...this._def,
			args: ZodTuple.create(items).rest(ZodUnknown.create())
		});
	}
	returns(returnType) {
		return new ZodFunction({
			...this._def,
			returns: returnType
		});
	}
	implement(func) {
		return this.parse(func);
	}
	strictImplement(func) {
		return this.parse(func);
	}
	static create(args, returns, params) {
		return new ZodFunction({
			args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
			returns: returns || ZodUnknown.create(),
			typeName: ZodFirstPartyTypeKind.ZodFunction,
			...processCreateParams(params)
		});
	}
};
var ZodLazy = class extends ZodType {
	get schema() {
		return this._def.getter();
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		return this._def.getter()._parse({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
	}
};
ZodLazy.create = (getter, params) => {
	return new ZodLazy({
		getter,
		typeName: ZodFirstPartyTypeKind.ZodLazy,
		...processCreateParams(params)
	});
};
var ZodLiteral = class extends ZodType {
	_parse(input) {
		if (input.data !== this._def.value) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_literal,
				expected: this._def.value
			});
			return INVALID;
		}
		return {
			status: "valid",
			value: input.data
		};
	}
	get value() {
		return this._def.value;
	}
};
ZodLiteral.create = (value, params) => {
	return new ZodLiteral({
		value,
		typeName: ZodFirstPartyTypeKind.ZodLiteral,
		...processCreateParams(params)
	});
};
function createZodEnum(values, params) {
	return new ZodEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodEnum,
		...processCreateParams(params)
	});
}
var ZodEnum = class ZodEnum extends ZodType {
	_parse(input) {
		if (typeof input.data !== "string") {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type
			});
			return INVALID;
		}
		if (!this._cache) this._cache = new Set(this._def.values);
		if (!this._cache.has(input.data)) {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	get Values() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	get Enum() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	extract(values, newDef = this._def) {
		return ZodEnum.create(values, {
			...this._def,
			...newDef
		});
	}
	exclude(values, newDef = this._def) {
		return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
			...this._def,
			...newDef
		});
	}
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
	_parse(input) {
		const nativeEnumValues = util.getValidEnumValues(this._def.values);
		const ctx = this._getOrReturnCtx(input);
		if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type
			});
			return INVALID;
		}
		if (!this._cache) this._cache = new Set(util.getValidEnumValues(this._def.values));
		if (!this._cache.has(input.data)) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get enum() {
		return this._def.values;
	}
};
ZodNativeEnum.create = (values, params) => {
	return new ZodNativeEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
		...processCreateParams(params)
	});
};
var ZodPromise = class extends ZodType {
	unwrap() {
		return this._def.type;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.promise,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
		return OK(promisified.then((data) => {
			return this._def.type.parseAsync(data, {
				path: ctx.path,
				errorMap: ctx.common.contextualErrorMap
			});
		}));
	}
};
ZodPromise.create = (schema, params) => {
	return new ZodPromise({
		type: schema,
		typeName: ZodFirstPartyTypeKind.ZodPromise,
		...processCreateParams(params)
	});
};
var ZodEffects = class extends ZodType {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const effect = this._def.effect || null;
		const checkCtx = {
			addIssue: (arg) => {
				addIssueToContext(ctx, arg);
				if (arg.fatal) status.abort();
				else status.dirty();
			},
			get path() {
				return ctx.path;
			}
		};
		checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
		if (effect.type === "preprocess") {
			const processed = effect.transform(ctx.data, checkCtx);
			if (ctx.common.async) return Promise.resolve(processed).then(async (processed) => {
				if (status.value === "aborted") return INVALID;
				const result = await this._def.schema._parseAsync({
					data: processed,
					path: ctx.path,
					parent: ctx
				});
				if (result.status === "aborted") return INVALID;
				if (result.status === "dirty") return DIRTY(result.value);
				if (status.value === "dirty") return DIRTY(result.value);
				return result;
			});
			else {
				if (status.value === "aborted") return INVALID;
				const result = this._def.schema._parseSync({
					data: processed,
					path: ctx.path,
					parent: ctx
				});
				if (result.status === "aborted") return INVALID;
				if (result.status === "dirty") return DIRTY(result.value);
				if (status.value === "dirty") return DIRTY(result.value);
				return result;
			}
		}
		if (effect.type === "refinement") {
			const executeRefinement = (acc) => {
				const result = effect.refinement(acc, checkCtx);
				if (ctx.common.async) return Promise.resolve(result);
				if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
				return acc;
			};
			if (ctx.common.async === false) {
				const inner = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				executeRefinement(inner.value);
				return {
					status: status.value,
					value: inner.value
				};
			} else return this._def.schema._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}).then((inner) => {
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				return executeRefinement(inner.value).then(() => {
					return {
						status: status.value,
						value: inner.value
					};
				});
			});
		}
		if (effect.type === "transform") {
			if (ctx.common.async === false) {
				const base = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (!isValid(base)) return INVALID;
				const result = effect.transform(base.value, checkCtx);
				if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
				return {
					status: status.value,
					value: result
				};
			} else return this._def.schema._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}).then((base) => {
				if (!isValid(base)) return INVALID;
				return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
					status: status.value,
					value: result
				}));
			});
		}
		util.assertNever(effect);
	}
};
ZodEffects.create = (schema, effect, params) => {
	return new ZodEffects({
		schema,
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		effect,
		...processCreateParams(params)
	});
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
	return new ZodEffects({
		schema,
		effect: {
			type: "preprocess",
			transform: preprocess
		},
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		...processCreateParams(params)
	});
};
var ZodOptional = class extends ZodType {
	_parse(input) {
		if (this._getType(input) === ZodParsedType.undefined) return OK(void 0);
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodOptional.create = (type, params) => {
	return new ZodOptional({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodOptional,
		...processCreateParams(params)
	});
};
var ZodNullable = class extends ZodType {
	_parse(input) {
		if (this._getType(input) === ZodParsedType.null) return OK(null);
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodNullable.create = (type, params) => {
	return new ZodNullable({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodNullable,
		...processCreateParams(params)
	});
};
var ZodDefault = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		let data = ctx.data;
		if (ctx.parsedType === ZodParsedType.undefined) data = this._def.defaultValue();
		return this._def.innerType._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
};
ZodDefault.create = (type, params) => {
	return new ZodDefault({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodDefault,
		defaultValue: typeof params.default === "function" ? params.default : () => params.default,
		...processCreateParams(params)
	});
};
var ZodCatch = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const newCtx = {
			...ctx,
			common: {
				...ctx.common,
				issues: []
			}
		};
		const result = this._def.innerType._parse({
			data: newCtx.data,
			path: newCtx.path,
			parent: { ...newCtx }
		});
		if (isAsync(result)) return result.then((result) => {
			return {
				status: "valid",
				value: result.status === "valid" ? result.value : this._def.catchValue({
					get error() {
						return new ZodError(newCtx.common.issues);
					},
					input: newCtx.data
				})
			};
		});
		else return {
			status: "valid",
			value: result.status === "valid" ? result.value : this._def.catchValue({
				get error() {
					return new ZodError(newCtx.common.issues);
				},
				input: newCtx.data
			})
		};
	}
	removeCatch() {
		return this._def.innerType;
	}
};
ZodCatch.create = (type, params) => {
	return new ZodCatch({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodCatch,
		catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
		...processCreateParams(params)
	});
};
var ZodNaN = class extends ZodType {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.nan) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.nan,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return {
			status: "valid",
			value: input.data
		};
	}
};
ZodNaN.create = (params) => {
	return new ZodNaN({
		typeName: ZodFirstPartyTypeKind.ZodNaN,
		...processCreateParams(params)
	});
};
var ZodBranded = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const data = ctx.data;
		return this._def.type._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
	}
	unwrap() {
		return this._def.type;
	}
};
var ZodPipeline = class ZodPipeline extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.common.async) {
			const handleAsync = async () => {
				const inResult = await this._def.in._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inResult.status === "aborted") return INVALID;
				if (inResult.status === "dirty") {
					status.dirty();
					return DIRTY(inResult.value);
				} else return this._def.out._parseAsync({
					data: inResult.value,
					path: ctx.path,
					parent: ctx
				});
			};
			return handleAsync();
		} else {
			const inResult = this._def.in._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
			if (inResult.status === "aborted") return INVALID;
			if (inResult.status === "dirty") {
				status.dirty();
				return {
					status: "dirty",
					value: inResult.value
				};
			} else return this._def.out._parseSync({
				data: inResult.value,
				path: ctx.path,
				parent: ctx
			});
		}
	}
	static create(a, b) {
		return new ZodPipeline({
			in: a,
			out: b,
			typeName: ZodFirstPartyTypeKind.ZodPipeline
		});
	}
};
var ZodReadonly = class extends ZodType {
	_parse(input) {
		const result = this._def.innerType._parse(input);
		const freeze = (data) => {
			if (isValid(data)) data.value = Object.freeze(data.value);
			return data;
		};
		return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodReadonly.create = (type, params) => {
	return new ZodReadonly({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodReadonly,
		...processCreateParams(params)
	});
};
ZodObject.lazycreate;
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind) {
	ZodFirstPartyTypeKind["ZodString"] = "ZodString";
	ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
	ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
	ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
	ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
	ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
	ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
	ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
	ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
	ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
	ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
	ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
	ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
	ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
	ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
	ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
	ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
	ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
	ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
	ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
	ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
	ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
	ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
	ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
	ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
	ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
	ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
	ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
	ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
	ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
	ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
	ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
	ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
	ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
	ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
	ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const stringType = ZodString.create;
const numberType = ZodNumber.create;
ZodNaN.create;
ZodBigInt.create;
const booleanType = ZodBoolean.create;
ZodDate.create;
ZodSymbol.create;
ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
ZodUnknown.create;
ZodNever.create;
ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
ZodObject.strictCreate;
const unionType = ZodUnion.create;
ZodDiscriminatedUnion.create;
ZodIntersection.create;
ZodTuple.create;
const recordType = ZodRecord.create;
ZodMap.create;
ZodSet.create;
ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
ZodNativeEnum.create;
ZodPromise.create;
ZodEffects.create;
ZodOptional.create;
ZodNullable.create;
ZodEffects.createWithPreprocess;
ZodPipeline.create;
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/Options.js
const ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
const defaultOptions = {
	name: void 0,
	$refStrategy: "root",
	basePath: ["#"],
	effectStrategy: "input",
	pipeStrategy: "all",
	dateStrategy: "format:date-time",
	mapStrategy: "entries",
	removeAdditionalStrategy: "passthrough",
	allowedAdditionalProperties: true,
	rejectedAdditionalProperties: false,
	definitionPath: "definitions",
	target: "jsonSchema7",
	strictUnions: false,
	definitions: {},
	errorMessages: false,
	markdownDescription: false,
	patternStrategy: "escape",
	applyRegexFlags: false,
	emailStrategy: "format:email",
	base64Strategy: "contentEncoding:base64",
	nameStrategy: "ref",
	openAiAnyTypeName: "OpenAiAnyType"
};
const getDefaultOptions = (options) => typeof options === "string" ? {
	...defaultOptions,
	name: options
} : {
	...defaultOptions,
	...options
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/Refs.js
const getRefs = (options) => {
	const _options = getDefaultOptions(options);
	const currentPath = _options.name !== void 0 ? [
		..._options.basePath,
		_options.definitionPath,
		_options.name
	] : _options.basePath;
	return {
		..._options,
		flags: { hasReferencedOpenAiAnyType: false },
		currentPath,
		propertyPath: void 0,
		seen: new Map(Object.entries(_options.definitions).map(([name, def]) => [def._def, {
			def: def._def,
			path: [
				..._options.basePath,
				_options.definitionPath,
				name
			],
			jsonSchema: void 0
		}]))
	};
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/errorMessages.js
function addErrorMessage(res, key, errorMessage, refs) {
	if (!refs?.errorMessages) return;
	if (errorMessage) res.errorMessage = {
		...res.errorMessage,
		[key]: errorMessage
	};
}
function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
	res[key] = value;
	addErrorMessage(res, key, errorMessage, refs);
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/getRelativePath.js
const getRelativePath = (pathA, pathB) => {
	let i = 0;
	for (; i < pathA.length && i < pathB.length; i++) if (pathA[i] !== pathB[i]) break;
	return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/any.js
function parseAnyDef(refs) {
	if (refs.target !== "openAi") return {};
	const anyDefinitionPath = [
		...refs.basePath,
		refs.definitionPath,
		refs.openAiAnyTypeName
	];
	refs.flags.hasReferencedOpenAiAnyType = true;
	return { $ref: refs.$refStrategy === "relative" ? getRelativePath(anyDefinitionPath, refs.currentPath) : anyDefinitionPath.join("/") };
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/array.js
function parseArrayDef(def, refs) {
	const res = { type: "array" };
	if (def.type?._def && def.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny) res.items = parseDef(def.type._def, {
		...refs,
		currentPath: [...refs.currentPath, "items"]
	});
	if (def.minLength) setResponseValueAndErrors(res, "minItems", def.minLength.value, def.minLength.message, refs);
	if (def.maxLength) setResponseValueAndErrors(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
	if (def.exactLength) {
		setResponseValueAndErrors(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
		setResponseValueAndErrors(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
	}
	return res;
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js
function parseBigintDef(def, refs) {
	const res = {
		type: "integer",
		format: "int64"
	};
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "min":
			if (refs.target === "jsonSchema7") {
				if (check.inclusive) setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
				else setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
			} else {
				if (!check.inclusive) res.exclusiveMinimum = true;
				setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
			}
			break;
		case "max":
			if (refs.target === "jsonSchema7") {
				if (check.inclusive) setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
				else setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
			} else {
				if (!check.inclusive) res.exclusiveMaximum = true;
				setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
			}
			break;
		case "multipleOf": setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
	}
	return res;
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js
function parseBooleanDef() {
	return { type: "boolean" };
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js
function parseBrandedDef(_def, refs) {
	return parseDef(_def.type._def, refs);
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js
const parseCatchDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/date.js
function parseDateDef(def, refs, overrideDateStrategy) {
	const strategy = overrideDateStrategy ?? refs.dateStrategy;
	if (Array.isArray(strategy)) return { anyOf: strategy.map((item, i) => parseDateDef(def, refs, item)) };
	switch (strategy) {
		case "string":
		case "format:date-time": return {
			type: "string",
			format: "date-time"
		};
		case "format:date": return {
			type: "string",
			format: "date"
		};
		case "integer": return integerDateParser(def, refs);
	}
}
const integerDateParser = (def, refs) => {
	const res = {
		type: "integer",
		format: "unix-time"
	};
	if (refs.target === "openApi3") return res;
	for (const check of def.checks) switch (check.kind) {
		case "min":
			setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
			break;
		case "max": setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
	}
	return res;
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/default.js
function parseDefaultDef(_def, refs) {
	return {
		...parseDef(_def.innerType._def, refs),
		default: _def.defaultValue()
	};
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js
function parseEffectsDef(_def, refs) {
	return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef(refs);
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js
function parseEnumDef(def) {
	return {
		type: "string",
		enum: Array.from(def.values)
	};
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js
const isJsonSchema7AllOfType = (type) => {
	if ("type" in type && type.type === "string") return false;
	return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
	const allOf = [parseDef(def.left._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	}), parseDef(def.right._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"1"
		]
	})].filter((x) => !!x);
	let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? { unevaluatedProperties: false } : void 0;
	const mergedAllOf = [];
	allOf.forEach((schema) => {
		if (isJsonSchema7AllOfType(schema)) {
			mergedAllOf.push(...schema.allOf);
			if (schema.unevaluatedProperties === void 0) unevaluatedProperties = void 0;
		} else {
			let nestedSchema = schema;
			if ("additionalProperties" in schema && schema.additionalProperties === false) {
				const { additionalProperties, ...rest } = schema;
				nestedSchema = rest;
			} else unevaluatedProperties = void 0;
			mergedAllOf.push(nestedSchema);
		}
	});
	return mergedAllOf.length ? {
		allOf: mergedAllOf,
		...unevaluatedProperties
	} : void 0;
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js
function parseLiteralDef(def, refs) {
	const parsedType = typeof def.value;
	if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") return { type: Array.isArray(def.value) ? "array" : "object" };
	if (refs.target === "openApi3") return {
		type: parsedType === "bigint" ? "integer" : parsedType,
		enum: [def.value]
	};
	return {
		type: parsedType === "bigint" ? "integer" : parsedType,
		const: def.value
	};
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/string.js
let emojiRegex = void 0;
/**
* Generated from the regular expressions found here as of 2024-05-22:
* https://github.com/colinhacks/zod/blob/master/src/types.ts.
*
* Expressions with /i flag have been changed accordingly.
*/
const zodPatterns = {
	/**
	* `c` was changed to `[cC]` to replicate /i flag
	*/
	cuid: /^[cC][^\s-]{8,}$/,
	cuid2: /^[0-9a-z]+$/,
	ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
	/**
	* `a-z` was added to replicate /i flag
	*/
	email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
	/**
	* Constructed a valid Unicode RegExp
	*
	* Lazily instantiate since this type of regex isn't supported
	* in all envs (e.g. React Native).
	*
	* See:
	* https://github.com/colinhacks/zod/issues/2433
	* Fix in Zod:
	* https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
	*/
	emoji: () => {
		if (emojiRegex === void 0) emojiRegex = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
		return emojiRegex;
	},
	/**
	* Unused
	*/
	uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
	/**
	* Unused
	*/
	ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	/**
	* Unused
	*/
	ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
	ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	nanoid: /^[a-zA-Z0-9_-]{21}$/,
	jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
	const res = { type: "string" };
	if (def.checks) for (const check of def.checks) switch (check.kind) {
		case "min":
			setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
			break;
		case "max":
			setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
			break;
		case "email":
			switch (refs.emailStrategy) {
				case "format:email":
					addFormat(res, "email", check.message, refs);
					break;
				case "format:idn-email":
					addFormat(res, "idn-email", check.message, refs);
					break;
				case "pattern:zod": addPattern(res, zodPatterns.email, check.message, refs);
			}
			break;
		case "url":
			addFormat(res, "uri", check.message, refs);
			break;
		case "uuid":
			addFormat(res, "uuid", check.message, refs);
			break;
		case "regex":
			addPattern(res, check.regex, check.message, refs);
			break;
		case "cuid":
			addPattern(res, zodPatterns.cuid, check.message, refs);
			break;
		case "cuid2":
			addPattern(res, zodPatterns.cuid2, check.message, refs);
			break;
		case "startsWith":
			addPattern(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
			break;
		case "endsWith":
			addPattern(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
			break;
		case "datetime":
			addFormat(res, "date-time", check.message, refs);
			break;
		case "date":
			addFormat(res, "date", check.message, refs);
			break;
		case "time":
			addFormat(res, "time", check.message, refs);
			break;
		case "duration":
			addFormat(res, "duration", check.message, refs);
			break;
		case "length":
			setResponseValueAndErrors(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
			setResponseValueAndErrors(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
			break;
		case "includes":
			addPattern(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
			break;
		case "ip":
			if (check.version !== "v6") addFormat(res, "ipv4", check.message, refs);
			if (check.version !== "v4") addFormat(res, "ipv6", check.message, refs);
			break;
		case "base64url":
			addPattern(res, zodPatterns.base64url, check.message, refs);
			break;
		case "jwt":
			addPattern(res, zodPatterns.jwt, check.message, refs);
			break;
		case "cidr":
			if (check.version !== "v6") addPattern(res, zodPatterns.ipv4Cidr, check.message, refs);
			if (check.version !== "v4") addPattern(res, zodPatterns.ipv6Cidr, check.message, refs);
			break;
		case "emoji":
			addPattern(res, zodPatterns.emoji(), check.message, refs);
			break;
		case "ulid":
			addPattern(res, zodPatterns.ulid, check.message, refs);
			break;
		case "base64":
			switch (refs.base64Strategy) {
				case "format:binary":
					addFormat(res, "binary", check.message, refs);
					break;
				case "contentEncoding:base64":
					setResponseValueAndErrors(res, "contentEncoding", "base64", check.message, refs);
					break;
				case "pattern:zod": addPattern(res, zodPatterns.base64, check.message, refs);
			}
			break;
		case "nanoid": addPattern(res, zodPatterns.nanoid, check.message, refs);
	}
	return res;
}
function escapeLiteralCheckValue(literal, refs) {
	return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal) : literal;
}
const ALPHA_NUMERIC = /* @__PURE__ */ new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
	let result = "";
	for (let i = 0; i < source.length; i++) {
		if (!ALPHA_NUMERIC.has(source[i])) result += "\\";
		result += source[i];
	}
	return result;
}
function addFormat(schema, value, message, refs) {
	if (schema.format || schema.anyOf?.some((x) => x.format)) {
		if (!schema.anyOf) schema.anyOf = [];
		if (schema.format) {
			schema.anyOf.push({
				format: schema.format,
				...schema.errorMessage && refs.errorMessages && { errorMessage: { format: schema.errorMessage.format } }
			});
			delete schema.format;
			if (schema.errorMessage) {
				delete schema.errorMessage.format;
				if (Object.keys(schema.errorMessage).length === 0) delete schema.errorMessage;
			}
		}
		schema.anyOf.push({
			format: value,
			...message && refs.errorMessages && { errorMessage: { format: message } }
		});
	} else setResponseValueAndErrors(schema, "format", value, message, refs);
}
function addPattern(schema, regex, message, refs) {
	if (schema.pattern || schema.allOf?.some((x) => x.pattern)) {
		if (!schema.allOf) schema.allOf = [];
		if (schema.pattern) {
			schema.allOf.push({
				pattern: schema.pattern,
				...schema.errorMessage && refs.errorMessages && { errorMessage: { pattern: schema.errorMessage.pattern } }
			});
			delete schema.pattern;
			if (schema.errorMessage) {
				delete schema.errorMessage.pattern;
				if (Object.keys(schema.errorMessage).length === 0) delete schema.errorMessage;
			}
		}
		schema.allOf.push({
			pattern: stringifyRegExpWithFlags(regex, refs),
			...message && refs.errorMessages && { errorMessage: { pattern: message } }
		});
	} else setResponseValueAndErrors(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
}
function stringifyRegExpWithFlags(regex, refs) {
	if (!refs.applyRegexFlags || !regex.flags) return regex.source;
	const flags = {
		i: regex.flags.includes("i"),
		m: regex.flags.includes("m"),
		s: regex.flags.includes("s")
	};
	const source = flags.i ? regex.source.toLowerCase() : regex.source;
	let pattern = "";
	let isEscaped = false;
	let inCharGroup = false;
	let inCharRange = false;
	for (let i = 0; i < source.length; i++) {
		if (isEscaped) {
			pattern += source[i];
			isEscaped = false;
			continue;
		}
		if (flags.i) {
			if (inCharGroup) {
				if (source[i].match(/[a-z]/)) {
					if (inCharRange) {
						pattern += source[i];
						pattern += `${source[i - 2]}-${source[i]}`.toUpperCase();
						inCharRange = false;
					} else if (source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/)) {
						pattern += source[i];
						inCharRange = true;
					} else pattern += `${source[i]}${source[i].toUpperCase()}`;
					continue;
				}
			} else if (source[i].match(/[a-z]/)) {
				pattern += `[${source[i]}${source[i].toUpperCase()}]`;
				continue;
			}
		}
		if (flags.m) {
			if (source[i] === "^") {
				pattern += `(^|(?<=[\r\n]))`;
				continue;
			} else if (source[i] === "$") {
				pattern += `($|(?=[\r\n]))`;
				continue;
			}
		}
		if (flags.s && source[i] === ".") {
			pattern += inCharGroup ? `${source[i]}\r\n` : `[${source[i]}\r\n]`;
			continue;
		}
		pattern += source[i];
		if (source[i] === "\\") isEscaped = true;
		else if (inCharGroup && source[i] === "]") inCharGroup = false;
		else if (!inCharGroup && source[i] === "[") inCharGroup = true;
	}
	try {
		new RegExp(pattern);
	} catch {
		console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
		return regex.source;
	}
	return pattern;
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/record.js
function parseRecordDef(def, refs) {
	if (refs.target === "openAi") console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
	if (refs.target === "openApi3" && def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) return {
		type: "object",
		required: def.keyType._def.values,
		properties: def.keyType._def.values.reduce((acc, key) => ({
			...acc,
			[key]: parseDef(def.valueType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"properties",
					key
				]
			}) ?? parseAnyDef(refs)
		}), {}),
		additionalProperties: refs.rejectedAdditionalProperties
	};
	const schema = {
		type: "object",
		additionalProperties: parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalProperties"]
		}) ?? refs.allowedAdditionalProperties
	};
	if (refs.target === "openApi3") return schema;
	if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.checks?.length) {
		const { type, ...keyType } = parseStringDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	} else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) return {
		...schema,
		propertyNames: { enum: def.keyType._def.values }
	};
	else if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.type._def.checks?.length) {
		const { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
		return {
			...schema,
			propertyNames: keyType
		};
	}
	return schema;
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/map.js
function parseMapDef(def, refs) {
	if (refs.mapStrategy === "record") return parseRecordDef(def, refs);
	return {
		type: "array",
		maxItems: 125,
		items: {
			type: "array",
			items: [parseDef(def.keyType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"0"
				]
			}) || parseAnyDef(refs), parseDef(def.valueType._def, {
				...refs,
				currentPath: [
					...refs.currentPath,
					"items",
					"items",
					"1"
				]
			}) || parseAnyDef(refs)],
			minItems: 2,
			maxItems: 2
		}
	};
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js
function parseNativeEnumDef(def) {
	const object = def.values;
	const actualValues = Object.keys(def.values).filter((key) => {
		return typeof object[object[key]] !== "number";
	}).map((key) => object[key]);
	const parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
	return {
		type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
		enum: actualValues
	};
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/never.js
function parseNeverDef(refs) {
	return refs.target === "openAi" ? void 0 : { not: parseAnyDef({
		...refs,
		currentPath: [...refs.currentPath, "not"]
	}) };
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/null.js
function parseNullDef(refs) {
	return refs.target === "openApi3" ? {
		enum: ["null"],
		nullable: true
	} : { type: "null" };
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/union.js
const primitiveMappings = {
	ZodString: "string",
	ZodNumber: "number",
	ZodBigInt: "integer",
	ZodBoolean: "boolean",
	ZodNull: "null"
};
function parseUnionDef(def, refs) {
	if (refs.target === "openApi3") return asAnyOf(def, refs);
	const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
	if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
		const types = options.reduce((types, x) => {
			const type = primitiveMappings[x._def.typeName];
			return type && !types.includes(type) ? [...types, type] : types;
		}, []);
		return { type: types.length > 1 ? types : types[0] };
	} else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
		const types = options.reduce((acc, x) => {
			const type = typeof x._def.value;
			switch (type) {
				case "string":
				case "number":
				case "boolean": return [...acc, type];
				case "bigint": return [...acc, "integer"];
				case "object": if (x._def.value === null) return [...acc, "null"];
				default: return acc;
			}
		}, []);
		if (types.length === options.length) {
			const uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
			return {
				type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
				enum: options.reduce((acc, x) => {
					return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
				}, [])
			};
		}
	} else if (options.every((x) => x._def.typeName === "ZodEnum")) return {
		type: "string",
		enum: options.reduce((acc, x) => [...acc, ...x._def.values.filter((x) => !acc.includes(x))], [])
	};
	return asAnyOf(def, refs);
}
const asAnyOf = (def, refs) => {
	const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			`${i}`
		]
	})).filter((x) => !!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
	return anyOf.length ? { anyOf } : void 0;
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
function parseNullableDef(def, refs) {
	if ([
		"ZodString",
		"ZodNumber",
		"ZodBigInt",
		"ZodBoolean",
		"ZodNull"
	].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
		if (refs.target === "openApi3") return {
			type: primitiveMappings[def.innerType._def.typeName],
			nullable: true
		};
		return { type: [primitiveMappings[def.innerType._def.typeName], "null"] };
	}
	if (refs.target === "openApi3") {
		const base = parseDef(def.innerType._def, {
			...refs,
			currentPath: [...refs.currentPath]
		});
		if (base && "$ref" in base) return {
			allOf: [base],
			nullable: true
		};
		return base && {
			...base,
			nullable: true
		};
	}
	const base = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"0"
		]
	});
	return base && { anyOf: [base, { type: "null" }] };
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/number.js
function parseNumberDef(def, refs) {
	const res = { type: "number" };
	if (!def.checks) return res;
	for (const check of def.checks) switch (check.kind) {
		case "int":
			res.type = "integer";
			addErrorMessage(res, "type", check.message, refs);
			break;
		case "min":
			if (refs.target === "jsonSchema7") {
				if (check.inclusive) setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
				else setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs);
			} else {
				if (!check.inclusive) res.exclusiveMinimum = true;
				setResponseValueAndErrors(res, "minimum", check.value, check.message, refs);
			}
			break;
		case "max":
			if (refs.target === "jsonSchema7") {
				if (check.inclusive) setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
				else setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs);
			} else {
				if (!check.inclusive) res.exclusiveMaximum = true;
				setResponseValueAndErrors(res, "maximum", check.value, check.message, refs);
			}
			break;
		case "multipleOf": setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
	}
	return res;
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/object.js
function parseObjectDef(def, refs) {
	const forceOptionalIntoNullable = refs.target === "openAi";
	const result = {
		type: "object",
		properties: {}
	};
	const required = [];
	const shape = def.shape();
	for (const propName in shape) {
		let propDef = shape[propName];
		if (propDef === void 0 || propDef._def === void 0) continue;
		let propOptional = safeIsOptional(propDef);
		if (propOptional && forceOptionalIntoNullable) {
			if (propDef._def.typeName === "ZodOptional") propDef = propDef._def.innerType;
			if (!propDef.isNullable()) propDef = propDef.nullable();
			propOptional = false;
		}
		const parsedDef = parseDef(propDef._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"properties",
				propName
			],
			propertyPath: [
				...refs.currentPath,
				"properties",
				propName
			]
		});
		if (parsedDef === void 0) continue;
		result.properties[propName] = parsedDef;
		if (!propOptional) required.push(propName);
	}
	if (required.length) result.required = required;
	const additionalProperties = decideAdditionalProperties(def, refs);
	if (additionalProperties !== void 0) result.additionalProperties = additionalProperties;
	return result;
}
function decideAdditionalProperties(def, refs) {
	if (def.catchall._def.typeName !== "ZodNever") return parseDef(def.catchall._def, {
		...refs,
		currentPath: [...refs.currentPath, "additionalProperties"]
	});
	switch (def.unknownKeys) {
		case "passthrough": return refs.allowedAdditionalProperties;
		case "strict": return refs.rejectedAdditionalProperties;
		case "strip": return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
	}
}
function safeIsOptional(schema) {
	try {
		return schema.isOptional();
	} catch {
		return true;
	}
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js
const parseOptionalDef = (def, refs) => {
	if (refs.currentPath.toString() === refs.propertyPath?.toString()) return parseDef(def.innerType._def, refs);
	const innerSchema = parseDef(def.innerType._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"anyOf",
			"1"
		]
	});
	return innerSchema ? { anyOf: [{ not: parseAnyDef(refs) }, innerSchema] } : parseAnyDef(refs);
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js
const parsePipelineDef = (def, refs) => {
	if (refs.pipeStrategy === "input") return parseDef(def.in._def, refs);
	else if (refs.pipeStrategy === "output") return parseDef(def.out._def, refs);
	const a = parseDef(def.in._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			"0"
		]
	});
	return { allOf: [a, parseDef(def.out._def, {
		...refs,
		currentPath: [
			...refs.currentPath,
			"allOf",
			a ? "1" : "0"
		]
	})].filter((x) => x !== void 0) };
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js
function parsePromiseDef(def, refs) {
	return parseDef(def.type._def, refs);
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/set.js
function parseSetDef(def, refs) {
	const schema = {
		type: "array",
		uniqueItems: true,
		items: parseDef(def.valueType._def, {
			...refs,
			currentPath: [...refs.currentPath, "items"]
		})
	};
	if (def.minSize) setResponseValueAndErrors(schema, "minItems", def.minSize.value, def.minSize.message, refs);
	if (def.maxSize) setResponseValueAndErrors(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
	return schema;
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js
function parseTupleDef(def, refs) {
	if (def.rest) return {
		type: "array",
		minItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
		additionalItems: parseDef(def.rest._def, {
			...refs,
			currentPath: [...refs.currentPath, "additionalItems"]
		})
	};
	else return {
		type: "array",
		minItems: def.items.length,
		maxItems: def.items.length,
		items: def.items.map((x, i) => parseDef(x._def, {
			...refs,
			currentPath: [
				...refs.currentPath,
				"items",
				`${i}`
			]
		})).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
	};
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js
function parseUndefinedDef(refs) {
	return { not: parseAnyDef(refs) };
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js
function parseUnknownDef(refs) {
	return parseAnyDef(refs);
}
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js
const parseReadonlyDef = (def, refs) => {
	return parseDef(def.innerType._def, refs);
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/selectParser.js
const selectParser = (def, typeName, refs) => {
	switch (typeName) {
		case ZodFirstPartyTypeKind.ZodString: return parseStringDef(def, refs);
		case ZodFirstPartyTypeKind.ZodNumber: return parseNumberDef(def, refs);
		case ZodFirstPartyTypeKind.ZodObject: return parseObjectDef(def, refs);
		case ZodFirstPartyTypeKind.ZodBigInt: return parseBigintDef(def, refs);
		case ZodFirstPartyTypeKind.ZodBoolean: return parseBooleanDef();
		case ZodFirstPartyTypeKind.ZodDate: return parseDateDef(def, refs);
		case ZodFirstPartyTypeKind.ZodUndefined: return parseUndefinedDef(refs);
		case ZodFirstPartyTypeKind.ZodNull: return parseNullDef(refs);
		case ZodFirstPartyTypeKind.ZodArray: return parseArrayDef(def, refs);
		case ZodFirstPartyTypeKind.ZodUnion:
		case ZodFirstPartyTypeKind.ZodDiscriminatedUnion: return parseUnionDef(def, refs);
		case ZodFirstPartyTypeKind.ZodIntersection: return parseIntersectionDef(def, refs);
		case ZodFirstPartyTypeKind.ZodTuple: return parseTupleDef(def, refs);
		case ZodFirstPartyTypeKind.ZodRecord: return parseRecordDef(def, refs);
		case ZodFirstPartyTypeKind.ZodLiteral: return parseLiteralDef(def, refs);
		case ZodFirstPartyTypeKind.ZodEnum: return parseEnumDef(def);
		case ZodFirstPartyTypeKind.ZodNativeEnum: return parseNativeEnumDef(def);
		case ZodFirstPartyTypeKind.ZodNullable: return parseNullableDef(def, refs);
		case ZodFirstPartyTypeKind.ZodOptional: return parseOptionalDef(def, refs);
		case ZodFirstPartyTypeKind.ZodMap: return parseMapDef(def, refs);
		case ZodFirstPartyTypeKind.ZodSet: return parseSetDef(def, refs);
		case ZodFirstPartyTypeKind.ZodLazy: return () => def.getter()._def;
		case ZodFirstPartyTypeKind.ZodPromise: return parsePromiseDef(def, refs);
		case ZodFirstPartyTypeKind.ZodNaN:
		case ZodFirstPartyTypeKind.ZodNever: return parseNeverDef(refs);
		case ZodFirstPartyTypeKind.ZodEffects: return parseEffectsDef(def, refs);
		case ZodFirstPartyTypeKind.ZodAny: return parseAnyDef(refs);
		case ZodFirstPartyTypeKind.ZodUnknown: return parseUnknownDef(refs);
		case ZodFirstPartyTypeKind.ZodDefault: return parseDefaultDef(def, refs);
		case ZodFirstPartyTypeKind.ZodBranded: return parseBrandedDef(def, refs);
		case ZodFirstPartyTypeKind.ZodReadonly: return parseReadonlyDef(def, refs);
		case ZodFirstPartyTypeKind.ZodCatch: return parseCatchDef(def, refs);
		case ZodFirstPartyTypeKind.ZodPipeline: return parsePipelineDef(def, refs);
		case ZodFirstPartyTypeKind.ZodFunction:
		case ZodFirstPartyTypeKind.ZodVoid:
		case ZodFirstPartyTypeKind.ZodSymbol: return;
		default: return ((_) => void 0)(typeName);
	}
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/parseDef.js
function parseDef(def, refs, forceResolution = false) {
	const seenItem = refs.seen.get(def);
	if (refs.override) {
		const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
		if (overrideResult !== ignoreOverride) return overrideResult;
	}
	if (seenItem && !forceResolution) {
		const seenSchema = get$ref(seenItem, refs);
		if (seenSchema !== void 0) return seenSchema;
	}
	const newItem = {
		def,
		path: refs.currentPath,
		jsonSchema: void 0
	};
	refs.seen.set(def, newItem);
	const jsonSchemaOrGetter = selectParser(def, def.typeName, refs);
	const jsonSchema = typeof jsonSchemaOrGetter === "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
	if (jsonSchema) addMeta(def, refs, jsonSchema);
	if (refs.postProcess) {
		const postProcessResult = refs.postProcess(jsonSchema, def, refs);
		newItem.jsonSchema = jsonSchema;
		return postProcessResult;
	}
	newItem.jsonSchema = jsonSchema;
	return jsonSchema;
}
const get$ref = (item, refs) => {
	switch (refs.$refStrategy) {
		case "root": return { $ref: item.path.join("/") };
		case "relative": return { $ref: getRelativePath(refs.currentPath, item.path) };
		case "none":
		case "seen":
			if (item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value)) {
				console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
				return parseAnyDef(refs);
			}
			return refs.$refStrategy === "seen" ? parseAnyDef(refs) : void 0;
	}
};
const addMeta = (def, refs, jsonSchema) => {
	if (def.description) {
		jsonSchema.description = def.description;
		if (refs.markdownDescription) jsonSchema.markdownDescription = def.description;
	}
	return jsonSchema;
};
//#endregion
//#region node_modules/.pnpm/zod-to-json-schema@3.25.2_zod@3.25.76/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js
const zodToJsonSchema = (schema, options) => {
	const refs = getRefs(options);
	let definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name, schema]) => ({
		...acc,
		[name]: parseDef(schema._def, {
			...refs,
			currentPath: [
				...refs.basePath,
				refs.definitionPath,
				name
			]
		}, true) ?? parseAnyDef(refs)
	}), {}) : void 0;
	const name = typeof options === "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name;
	const main = parseDef(schema._def, name === void 0 ? refs : {
		...refs,
		currentPath: [
			...refs.basePath,
			refs.definitionPath,
			name
		]
	}, false) ?? parseAnyDef(refs);
	const title = typeof options === "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
	if (title !== void 0) main.title = title;
	if (refs.flags.hasReferencedOpenAiAnyType) {
		if (!definitions) definitions = {};
		if (!definitions[refs.openAiAnyTypeName]) definitions[refs.openAiAnyTypeName] = {
			type: [
				"string",
				"number",
				"integer",
				"boolean",
				"array",
				"null"
			],
			items: { $ref: refs.$refStrategy === "relative" ? "1" : [
				...refs.basePath,
				refs.definitionPath,
				refs.openAiAnyTypeName
			].join("/") }
		};
	}
	const combined = name === void 0 ? definitions ? {
		...main,
		[refs.definitionPath]: definitions
	} : main : {
		$ref: [
			...refs.$refStrategy === "relative" ? [] : refs.basePath,
			refs.definitionPath,
			name
		].join("/"),
		[refs.definitionPath]: {
			...definitions,
			[name]: main
		}
	};
	if (refs.target === "jsonSchema7") combined.$schema = "http://json-schema.org/draft-07/schema#";
	else if (refs.target === "jsonSchema2019-09" || refs.target === "openAi") combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
	if (refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type))) console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
	return combined;
};
//#endregion
//#region node_modules/.pnpm/@opentiny+genui-sdk-core@1.3.0/node_modules/@opentiny/genui-sdk-core/dist/index.js
const q = objectType({
	type: literalType("JSExpression"),
	value: stringType().describe("表达式字符串内容"),
	model: booleanType().optional().describe("是否为双向绑定模型值")
}).describe("JS 表达式包装");
const I = objectType({
	type: literalType("JSFunction").describe("固定为 JSFunction"),
	value: stringType().describe("函数体字符串（可序列化）"),
	params: arrayType(stringType()).optional().describe("额外传递给函数的参数列表")
}).describe("JS 函数包装");
const R = objectType({
	type: literalType("JSSlot").describe("固定为 JSSlot"),
	value: unionType([stringType(), recordType(stringType(), anyType())]).describe("插槽内容，可为字符串或对象")
}).describe("插槽包装");
const Q = recordType(stringType().describe("方法名"), I).describe("方法集合");
const p = lazyType(() => unionType([
	stringType(),
	numberType(),
	booleanType(),
	nullType(),
	q,
	I,
	R,
	arrayType(p),
	recordType(stringType(), p)
]).describe("通用属性值：原始值、JSExpression、JSFunction、JSSlot、数组、对象"));
const X = objectType({
	onMounted: I.optional().describe("页面挂载钩子：schema 渲染完成后执行"),
	onUnmounted: I.optional().describe("页面卸载钩子：schema 变更或页面销毁前执行")
}).describe("页面生命周期配置，支持 onMounted、onUnmounted 两种钩子");
const w = (r) => {
	const e = O(r);
	return objectType({
		id: stringType().optional().describe("根节点可选 id"),
		methods: Q.optional().describe("方法集合"),
		state: recordType(stringType(), p).optional().describe("全局状态，表单双向绑定必须此字段"),
		refs: recordType(stringType(), p).optional().describe("组件实例引用集合，用于在 methods 和事件处理中访问组件实例"),
		componentName: stringType().describe("根组件名，通常为 Page"),
		props: recordType(stringType(), p).optional().describe("根组件属性集合"),
		children: arrayType(lazyType(() => e)).optional().describe("根子节点数组"),
		componentType: enumType([
			"Block",
			"PageStart",
			"PageSection"
		]).optional().describe("根节点类型"),
		slot: unionType([
			stringType(),
			R,
			recordType(stringType(), p)
		]).optional().describe("根插槽内容"),
		params: arrayType(stringType()).optional().describe("根参数名列表"),
		loop: recordType(stringType(), p).optional().describe("根循环渲染配置"),
		loopArgs: arrayType(stringType()).optional().describe("根循环参数名列表"),
		condition: unionType([booleanType(), recordType(stringType(), p)]).optional().describe("根条件渲染配置"),
		css: stringType().optional().describe("全局 CSS 样式字符串"),
		fileName: stringType().optional().describe("文件名"),
		lifeCycles: X.optional(),
		dataSource: anyType().optional().describe("数据源配置"),
		bridge: anyType().optional().describe("桥接依赖/运行时注入"),
		inputs: arrayType(anyType()).optional().describe("输入事件/参数"),
		outputs: arrayType(anyType()).optional().describe("输出事件/参数"),
		schema: anyType().optional().describe("内嵌或外部 Schema")
	}).describe("根节点");
};
const O = (r) => {
	const e = (r == null ? void 0 : r.length) > 0 ? enumType(r).describe("组件名（白名单内）") : stringType().describe("组件名"), t = objectType({
		id: stringType().optional().describe("节点可选 id"),
		componentName: e,
		props: recordType(stringType(), p).optional().describe("组件属性集合"),
		children: unionType([arrayType(lazyType(() => t)), stringType()]).optional().describe("子节点数组或字符串"),
		componentType: enumType([
			"Block",
			"PageStart",
			"PageSection"
		]).optional().describe("节点类型"),
		slot: unionType([
			stringType(),
			R,
			recordType(stringType(), p)
		]).optional().describe("插槽内容"),
		params: arrayType(stringType()).optional().describe("参数名列表"),
		loop: recordType(stringType(), p).optional().describe("循环渲染配置"),
		loopArgs: arrayType(stringType()).optional().describe("循环参数名列表"),
		condition: unionType([booleanType(), recordType(stringType(), p)]).optional().describe("条件渲染配置")
	}).describe("普通节点");
	return t;
};
w();
O();
objectType({
	name: objectType({ zh_CN: stringType().describe("组件中文名（i18n）") }).describe("组件名称（多语言）"),
	component: stringType().describe("组件名"),
	icon: stringType().describe("组件图标"),
	screenshot: stringType().describe("组件快照"),
	description: stringType().describe("组件描述"),
	npm: objectType({
		package: stringType().describe("npm 包名"),
		exportName: stringType().describe("从包中 import 的导出名"),
		version: stringType().describe("包版本"),
		destructuring: booleanType().describe("是否解构 import"),
		script: stringType().describe("ESM JS 文件 CDN 地址"),
		css: stringType().describe("样式文件 CDN 地址")
	}).describe("npm 引入信息"),
	group: stringType().describe("组件分组"),
	category: stringType().describe("组件分类"),
	configure: objectType({
		loop: booleanType().describe("是否支持循环渲染"),
		condition: booleanType().describe("是否支持条件渲染"),
		styles: booleanType().describe("是否支持样式配置"),
		isContainer: booleanType().describe("是否容器组件"),
		isModal: booleanType().describe("是否模态组件"),
		isPopper: booleanType().describe("是否气泡/悬浮类组件")
	}).describe("可视化搭建相关的能力配置")
}).describe("组件物料协议");
function Z(r) {
	return r != null && r.length ? `
## Action 定义

以下是一些 Action 的定义：

\`\`\`json
${JSON.stringify(r, null, 2)}
\`\`\`

- 如果需要使用 \`Action\`，直接写 \`Action\` 的名称即可，不需要具体实现
- \`Action\` 的参数需要根据 \`Action\` 的定义来填写
- \`Action\` 的 \`return\` 为可选字段，描述返回值结构；省略时表示无返回值；\`async\` 为可选字段，默认为 \`false\`，为 \`true\` 时表示异步 Action，\`this.callAction\` 会返回 Promise
- 发起 \`Action\` 调用可以在 \`JSFunction\` 里通过 \`this.callAction(actionName, params)\` 来调用

**示例：**

\`\`\`json
{
  "componentName": "span",
  "props": {
    "onClick": {
      "type": "JSFunction",
      "value": "function() { this.callAction('continueChat', { message: '继续对话' }); }"
    }
  },
  "children": ["点击继续对话"]
}
\`\`\`

**异步示例：**

\`\`\`json
{
  "methods": {
    "handleGetData": {
      "type": "JSFunction",
      "value": "function() { this.callAction('getData').then((res) => { this.state.tableData = res.data; }); }"
    },
    "handleSubmit": {
      "type": "JSFunction",
      "value": "async function() { const valid = await this.callAction('validateCustomForm', { formData: this.state.formData }); if (valid) { this.callAction('continueChat', { message: '继续对话' }); } }"
    }
  }
}
\`\`\`
` : "";
}
const ee = "\n## this 上下文声明\n\n### this 可访问范围\n\n- `this` 在表达式 `JSExpression` 中可以访问，但不能在表达式内的行内函数中访问\n- `this` 也可以在 `JSFunction` 中访问\n\n### this 默认属性\n\n- `this.state`：当前组件所有在 `state` 中声明的变量\n- 在 `methods` 里声明的方法可以直接用 `this` 属性访问，例如声明 `hello` 方法，则通过 `this.hello()` 访问\n\n### this 使用方法\n\n让函数访问到当前执行的上下文范围可以有以下几种方式：\n\n**1. JSFunction 模式**\n\n```json\n{\n    \"type\": \"JSFunction\",\n    \"value\": \"(event) => this.hello(event, name)\"\n}\n```\n\n**2. JSExpression 扩展参数模式**\n\n\n如果正在使用`JSExpression`，通过添加`params`参数，可以扩展参数，示例如下：\n```json\n{\n    \"type\": \"JSExpression\",\n    \"value\": \"this.hello\",\n    \"params\": [\"name\"]\n}\n```\n\n**启用 params 时需注意：**\n- `params` 是额外传递给函数的参数列表，在需要追加时才使用，不要滥用。\n- `params` 参数必须是一个字符串数组，每个字符串代表当前上下文 scope 变量名，不要传入 `row.name` 等表达式。\n- 添加 `params` 后，函数第一个参数对应原函数的第一个参数，例如原生事件的 `event`，第二个参数开始才是用户指定的 `params` 参数列表，本例中第二个参数才是 `name`。\n\n这两种方式都相当于执行了 `this.hello(event, name)`\n\n**事件绑定更推荐使用 JSFunction 模式**\n\n### this 不存在的属性\n\n- **特别注意：** `this` 上下文并不存在 `this.setState` 方法，任何时候都不要使用，直接给 `this.state` 赋值即可。  \n- **再次强调：** 不存在 `this.setState` 方法，不存在 `this.setState` 方法，不存在 `this.setState` 方法。\n";
function A(r) {
	const { zh_CN: e, text: t } = r || {};
	return (t == null ? void 0 : t.zh_CN) || e;
}
function v(r) {
	return r.reduce((t, s) => (t.push(...s.content), t), []).map((t) => {
		const { property: s, description: a, label: c, required: o, type: l, defaultValue: i, properties: h } = t, f = {
			property: s,
			description: A(a) || A(c),
			type: l,
			defaultValue: i
		};
		return (h == null ? void 0 : h.length) > 0 && (f.properties = v(h)), f;
	});
}
function M(r) {
	return r ? Object.entries(r).map(([e, t]) => {
		const { label: s, description: a, functionInfo: c } = t || {};
		return {
			event: e,
			functionInfo: c,
			description: A(a) || A(s)
		};
	}) : {};
}
const te = M;
function re(r) {
	const { properties: e, events: t, slots: s } = r;
	return {
		properties: v(e),
		events: M(t),
		slots: te(s)
	};
}
function se(r) {
	const { name: e, component: t, description: s, schema: a } = r;
	return {
		name: A(e),
		component: t,
		description: s,
		schema: re(a)
	};
}
function ne(r, e) {
	return !!(!(e.length > 0) || e.includes(r == null ? void 0 : r.component));
}
function ae(r, e) {
	return r.map((t) => t.data.materials.components).filter((t) => t).flat().filter((t) => ne(t, e));
}
function ie(r, e) {
	return ae(structuredClone(r), e).map(se);
}
function ce(r, e, t) {
	const s = ie(r, e);
	return `## 可用组件

必须使用以下支持的 componentName：\`${e.join("`, `")}\`

具体组件的上下文如下，包含组件的配置信息：

\`\`\`json
${JSON.stringify(s.concat(t))}
\`\`\`
`;
}
function oe(r, e) {
	const t = { ...r }, s = t.children;
	return s && (t.children = [{
		componentName: e,
		children: s
	}]), t;
}
function le(r, e = "TinyCard") {
	return `## 卡片示例

${r.map(({ name: s, schema: a }) => `### ${s}

\`\`\`json
${JSON.stringify(oe(a, e))}
\`\`\``).join(`

`)}
`;
}
const W = { rules: ["- 表单输入项（input/select/radio 等）必须设置双向绑定，如设置 `modelValue` 的  `type` 为 `JSExpression` 且 `model` 为 `true`，且 `value` 必须具有对应 `state` 状态字段"] };
const fe = {
	vue: W,
	angular: { rules: [] },
	react: { rules: [] }
};
function de(r) {
	const e = r.toLowerCase();
	return fe[e] ?? W;
}
function pe(r) {
	return `## 卡片的 JSON Schema

\`\`\`json
${JSON.stringify(r)}
\`\`\`
`;
}
function me(r) {
	return w(r);
}
function ge(r) {
	return zodToJsonSchema(me(r));
}
const Se = `# 任务说明

仔细阅读以下内容，并根据上下文信息生成一个卡片的 schemaJSON。

**重要：** 除了 schemaJson 之外，不要生成其他任何内容。
`;
const be = `# 技能说明

你有一项技能，可用于生成可交互的 UI 界面。请结合上下文，如果需要生成界面来显示信息或收集信息，请生成对应的 schemaJson。
`;
const Ee = ["特别重要：除了上下文数据和工具调用结果以外，禁止使用任何Mock数据"];
const Ae = ["如果上下文或者工具调用结果中没有可用数据，可以使用Mock数据来完成会话"];
function P(r) {
	return r.map((e) => e.startsWith("- ") ? e : `- ${e}`);
}
function ye(r, e) {
	var c, o;
	const t = (c = r == null ? void 0 : r.customActions) == null ? void 0 : c.some((l) => l.name === "continueChat"), s = (o = r == null ? void 0 : r.customActions) == null ? void 0 : o.some((l) => l.name === "saveState"), a = [];
	return t && a.push("- 如需要确认信息或者涉及继续操作，请使用 `this.callAction` 去调用 continueChat"), s && a.push("- 如果当前操作列数据（增删查改等），请调用 `this.callAction` 去调用 saveState，保存当前状态，方便持久化存储"), [
		"- schemaJson 必须是一个根节点 `componentName` 为 `Page` 的 JSON",
		...a,
		"- `type` 为 `JSFunction` 的 `value` 必须是完整的函数",
		"- `state` 和 `methods` 字段必须紧跟 `\"componentName\": \"Page\",` 之后，请务必先生成 `state` 和 `methods` 字段，再使用。",
		"- `children` 不能放到 `props` 里，必须是数组或字符串",
		"- `children` 不支持 `JSExpression` 表达式；请使用 `Text` 组件展示文本，或使用 `loop` 来实现列表渲染",
		"- 单个组件节点也可以使用 `condition` 来控制显示",
		"- 请注意对话的连续性，不要重复渲染多余内容",
		"- 图片和链接地址不可杜撰",
		"- 只允许从上下文获取组件API，禁止杜撰组件API",
		...e ? [`- 根节点请尽可能使用 \`${e}\` 组件包裹，但禁止设置颜色样式`] : [],
		"- 禁止设置所有组件的 `background`、`color`、`background-color` 等颜色 CSS 样式",
		"- 禁止使用任何弹窗组件，逻辑中禁止使用 `alert`、`confirm`、`prompt`",
		"- 生成的 schemaJson 必须使用 ```schemaJson {content} ``` 代码块包裹"
	];
}
function Ie(r, e, t) {
	const s = (t == null ? void 0 : t.includeBaseRules) ?? !0, a = (t == null ? void 0 : t.rules) ?? [], c = t != null && t.isSkill ? Ee : Ae, o = [
		...s ? ye(r, e) : [],
		...P(c),
		...P(a)
	];
	if (o.length === 0) return "";
	const l = o.join(`
`);
	return s ? `## schemaJson 生成规则

以下规则需要**特别注意**：

${l}

---

根据用户输入，挑选合适的组件生成对应卡片的 schemaJSON。请尽量使用丰富的 UI 组件生成漂亮的卡片。

**输出示例：**

\`\`\`schemaJson
{ "componentName": "Page", "state": { "name": "张三" }, "methods": {}, "children": [{ "componentName": "p", "children": "示例输出" }] }
\`\`\`

### 最高优先级规则

以下规则具有最高优先级，必须严格满足：

- 输出的 schemaJson 必须是严格的JSON格式，禁止省略属性的双引号，禁止使用单引号，禁止在最后一个属性添加逗号，禁止使用注释
- 如果有信息要展示，请主动生成卡片
- 如果需要用户提供更多信息补充，请主动生成表单卡片

**其他规则与最高优先级规则冲突时，忽略其他规则，优先满足最高优先级规则。**
` : `## schemaJson 生成规则

${l}
`;
}
function Ne(r) {
	return r.map((e) => e.data.materials.snippets).filter((e) => e).flat();
}
function j(r) {
	const e = [];
	return r.forEach((t) => {
		t.group && t.children ? e.push(...j(t.children)) : t.snippetName && e.push(t);
	}), e;
}
function _e(r, e) {
	let t = r == null ? void 0 : r.snippetName;
	if (!t) return !1;
	const s = e.map((a) => a.toLocaleLowerCase());
	return t = t.replaceAll("-", "").toLocaleLowerCase(), s.includes(t);
}
function Re(r, e) {
	return j(Ne(r)).filter((t) => _e(t, e)).map((t) => t.schema);
}
function Te(r, e, t) {
	return `## Schema Snippets

以下是一些组件使用的 schema 片段：

\`\`\`json
${JSON.stringify(Re(r, e).concat(t))}
\`\`\`
`;
}
function ke(r, e) {
	if (!Array.isArray(e) || e.length === 0) return r;
	const t = e.map((s) => s.component);
	return [.../* @__PURE__ */ new Set([...r, ...t])];
}
function xe(r, e, t) {
	const { materials: s, examples: a, whiteList: c, wrapperComponent: o, rules: l } = r, { customComponents: i, customSnippets: h, customExamples: f, customActions: d } = e || {}, E = (t == null ? void 0 : t.includeJsonSchema) ?? !0, S = (t == null ? void 0 : t.includeSnippets) ?? !0, u = (t == null ? void 0 : t.includeExamples) ?? !0, m = (t == null ? void 0 : t.includeActions) ?? !0, b = (t == null ? void 0 : t.includeAboutThis) ?? !0, g = ke(c, i || []), $ = [...l ?? [], ...(t == null ? void 0 : t.rules) ?? []];
	return [
		t != null && t.isSkill ? be : Se,
		ce(s, g, i || []),
		E ? pe(ge(g)) : null,
		u ? le(a.concat(f || []), o) : null,
		S ? Te(s, g, h || []) : null,
		b ? ee.trim() : null,
		m ? Z(d || []) : null,
		Ie(e, o, {
			...t,
			rules: $
		})
	].filter(Boolean);
}
function He(r, e, t, s) {
	const a = typeof r == "string" ? de(r) : r;
	return xe(e, t, {
		...s,
		rules: [...a.rules ?? [], ...(s == null ? void 0 : s.rules) ?? []]
	}).join(`

`);
}
//#endregion
//#region src/prompt-control.ts
const PROMPT_ENTRY_PREFERENCE = ["genui", "dsh-genui"];
/**
* Pick the profile entry that owns this plugin's live `promptEnabled` field.
* The bundled patch uses `genui`; a hand-written entry may use the package name.
* @param descriptors - rows from `settings.describe()`.
* @returns The entry id to pass to `settings.update`, when one row is ours.
*/
function findPromptSettingsEntry(descriptors) {
	const matches = descriptors.filter(mentionsPromptEnabled);
	for (const id of PROMPT_ENTRY_PREFERENCE) if (matches.some((descriptor) => descriptor.ns === id)) return id;
	return matches.length === 1 ? matches[0]?.ns : void 0;
}
function mentionsPromptEnabled(descriptor) {
	const value = descriptor.value;
	if (value !== null && typeof value === "object" && "promptEnabled" in value) return true;
	return JSON.stringify(descriptor.schema ?? null).includes("\"promptEnabled\"");
}
/**
* Open the settings scope for the prompt toggle.
* @param settings - host settings service.
* @param options.configEnabled - resolved Config value, used when the host has no separate register namespace.
* @param options.schema - legacy `settings.register` schema.
* @returns A get/update scope, or undefined when this host cannot persist the toggle.
*/
function openPromptSettings(settings, options) {
	if (typeof settings.register === "function") return settings.register("dsh-genui", options.schema);
	if (typeof settings.update !== "function") return void 0;
	const update = settings.update.bind(settings);
	return {
		get: () => ({ enabled: options.configEnabled }),
		update(patch) {
			const ns = findPromptSettingsEntry(typeof settings.describe === "function" ? settings.describe() : []) ?? "genui";
			return update(ns, { promptEnabled: patch.enabled });
		}
	};
}
/**
* Mirror prompt-toggle changes into DSH settings without delaying the UI.
* @param control - the in-memory prompt section control.
* @param settings - the registered settings scope.
* @param initialEnabled - fallback when settings contains no stored value.
* @param onError - called when persisting a user choice fails.
*/
function createPersistedPromptControl(control, settings, initialEnabled, onError, onPersist) {
	const stored = settings.get().enabled;
	control.set(typeof stored === "boolean" ? stored : initialEnabled);
	return {
		isEnabled: control.isEnabled,
		set(enabled) {
			const next = control.set(enabled);
			onPersist?.(next);
			settings.update({ enabled: next }).catch((error) => onError?.(error));
			return next;
		}
	};
}
/**
* Create the host-side on/off state for the GenUI authoring section.
* @param section - stable prompt section values.
* @param systemPrompt - host system-prompt registry.
*/
function createGenuiPromptControl(section, systemPrompt) {
	let disposer;
	return {
		isEnabled: () => disposer !== void 0,
		set(enabled) {
			if (enabled === (disposer !== void 0)) return enabled;
			if (enabled) disposer = systemPrompt.section(section);
			else {
				disposer?.();
				disposer = void 0;
			}
			return enabled;
		}
	};
}
/**
* Handle GET (read state) and POST `{ enabled: boolean }` (set state).
* This is deliberately tiny and same-origin only; the button owns the UI state.
* @param control - host prompt toggle.
*/
function createGenuiPromptControlHandler(control) {
	return async (req, res) => {
		if (req.method === "GET") {
			respond(res, 200, {
				enabled: control.isEnabled(),
				...control.persisted === void 0 ? {} : { persisted: control.persisted() }
			});
			return;
		}
		if (req.method !== "POST") {
			respond(res, 405, { error: "method-not-allowed" });
			return;
		}
		try {
			const payload = await readJsonObject(req);
			if (typeof payload.enabled !== "boolean") {
				respond(res, 400, { error: "enabled-must-be-boolean" });
				return;
			}
			respond(res, 200, { enabled: control.set(payload.enabled) });
		} catch {
			respond(res, 400, { error: "invalid-json" });
		}
	};
}
async function readJsonObject(req) {
	const chunks = [];
	let total = 0;
	for await (const chunk of req) {
		const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
		total += buffer.length;
		if (total > 256) throw new Error("body-too-large");
		chunks.push(buffer);
	}
	if (chunks.length === 0) return {};
	const parsed = JSON.parse(Buffer.concat(chunks).toString("utf8"));
	if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("body-must-be-object");
	return parsed;
}
function respond(res, status, body) {
	res.writeHead(status, {
		"content-type": "application/json; charset=utf-8",
		"cache-control": "no-store"
	});
	res.end(JSON.stringify(body));
}
//#endregion
//#region src/prompt-control-url.ts
/** Same-origin host route used by the composer toggle button. */
const GENUI_PROMPT_CONTROL_URL = "/api/dsh-genui/prompt";
//#endregion
//#region src/genui-runtime-url.ts
/** Browser URL for the Vue/OpenTiny custom-element bundle (Node serves the same path). */
const GENUI_RUNTIME_URL = "/dsh-genui/runtime.js";
/** Source map next to {@link GENUI_RUNTIME_URL}. */
const GENUI_RUNTIME_MAP_URL = "/dsh-genui/runtime.js.map";
//#endregion
//#region src/serve-genui-runtime.ts
/**
* Serve the Vue GenUI runtime ESM. DSH only exposes `/plugins/<id>/client.js`,
* so this plugin registers its own route for the split chunk.
*/
/** Absolute paths of the runtime artifacts next to this module (lib/ after build). */
function genuiRuntimeArtifactPaths(from = import.meta.url) {
	return {
		js: fileURLToPath(new URL("./genui-runtime.js", from)),
		map: fileURLToPath(new URL("./genui-runtime.js.map", from))
	};
}
/**
* GET/HEAD a file from disk. Unknown methods 405; missing files 404.
* @param filePath - absolute path to the artifact.
* @param contentType - response Content-Type.
*/
function serveStaticFile(filePath, contentType) {
	return async (req, res) => {
		if (req.method !== "GET" && req.method !== "HEAD") {
			res.writeHead(405);
			res.end();
			return;
		}
		try {
			const body = await readFile(filePath);
			res.writeHead(200, {
				"content-type": contentType,
				"cache-control": "no-cache"
			});
			res.end(req.method === "HEAD" ? void 0 : body);
		} catch {
			res.writeHead(404);
			res.end();
		}
	};
}
//#endregion
//#region src/index.ts
const name = "dsh-genui";
const inject = ["systemPrompt", "webServer"];
const Config = z.object({
	sectionOrder: z.number().default(80),
	sectionName: z.string().default("genui:cards"),
	promptEnabled: z.boolean().default(true).extra("volatile", true)
});
/** Settings schema for the user's last prompt-toggle choice. */
const PromptSettings = z.object({ enabled: z.boolean().default(true) });
/**
* Create the GenUI authoring guidance for the host system-prompt registry.
* @returns The prompt text to register while the composer toggle is enabled.
*/
function genuiPromptText() {
	return He("Vue", A$1, { customActions: [{
		name: "continueChat",
		description: "Continue the conversation (e.g. form submit). Pass a short message only; the host appends the card state (formData, etc.) automatically.",
		parameters: {
			type: "object",
			properties: { message: {
				type: "string",
				description: "Short follow-up text (button label or summary). Do not put form fields here."
			} },
			required: ["message"]
		}
	}] });
}
/**
* Register the GenUI runtime and the authoring prompt toggle.
* @param ctx - Cordis context with `systemPrompt` injected.
* @param config - validated plugin config.
*/
function apply(ctx, config) {
	const systemPrompt = ctx.systemPrompt;
	const promptControl = createGenuiPromptControl({
		name: config.sectionName,
		order: config.sectionOrder,
		text: genuiPromptText()
	}, systemPrompt);
	let currentControl = promptControl;
	let persistedAttached = false;
	const endpointControl = {
		isEnabled: () => currentControl.isEnabled(),
		set: (enabled) => currentControl.set(enabled),
		persisted: () => persistedAttached
	};
	ctx.effect(() => {
		promptControl.set(true);
		return () => promptControl.set(false);
	}, "dsh-genui: prompt toggle state");
	ctx.inject(["settings"], (settingsCtx) => {
		const settings = settingsCtx.settings;
		const scope = openPromptSettings(settings, {
			configEnabled: config.promptEnabled !== false,
			schema: PromptSettings
		});
		if (scope === void 0) {
			ctx.logger.warn("dsh-genui: prompt toggle will not persist");
			return;
		}
		ctx.logger.debug("dsh-genui: settings service attached");
		settingsCtx.effect(() => {
			currentControl = createPersistedPromptControl(promptControl, scope, true, (error) => {
				ctx.logger.warn("dsh-genui: failed to persist prompt state", error);
			}, (enabled) => {
				ctx.logger.debug("dsh-genui: persisting prompt state enabled=%s", String(enabled));
			});
			persistedAttached = true;
			return () => {
				currentControl = promptControl;
				persistedAttached = false;
			};
		}, "dsh-genui: persisted prompt control");
	});
	const artifacts = genuiRuntimeArtifactPaths();
	const webServer = ctx.webServer;
	ctx.effect(() => webServer.register({
		kind: "exact",
		path: GENUI_PROMPT_CONTROL_URL,
		handler: createGenuiPromptControlHandler(endpointControl)
	}), "dsh-genui: prompt toggle state endpoint");
	ctx.effect(() => webServer.register({
		kind: "exact",
		path: GENUI_RUNTIME_URL,
		handler: serveStaticFile(artifacts.js, "text/javascript; charset=utf-8")
	}), "dsh-genui: runtime.js");
	ctx.effect(() => webServer.register({
		kind: "exact",
		path: GENUI_RUNTIME_MAP_URL,
		handler: serveStaticFile(artifacts.map, "application/json; charset=utf-8")
	}), "dsh-genui: runtime.js.map");
}
//#endregion
export { Config, PromptSettings, apply, inject, name };
