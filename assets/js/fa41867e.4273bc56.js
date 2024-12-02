"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25955],{86763:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(85893),c=t(11151);const i={sidebar_label:"transforms_util",title:"agentchat.contrib.capabilities.transforms_util"},r=void 0,a={id:"reference/agentchat/contrib/capabilities/transforms_util",title:"agentchat.contrib.capabilities.transforms_util",description:"cache\\_key",source:"@site/docs/reference/agentchat/contrib/capabilities/transforms_util.md",sourceDirName:"reference/agentchat/contrib/capabilities",slug:"/reference/agentchat/contrib/capabilities/transforms_util",permalink:"/ag2/docs/reference/agentchat/contrib/capabilities/transforms_util",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/agentchat/contrib/capabilities/transforms_util.md",tags:[],version:"current",frontMatter:{sidebar_label:"transforms_util",title:"agentchat.contrib.capabilities.transforms_util"},sidebar:"referenceSideBar",previous:{title:"transforms",permalink:"/ag2/docs/reference/agentchat/contrib/capabilities/transforms"},next:{title:"vision_capability",permalink:"/ag2/docs/reference/agentchat/contrib/capabilities/vision_capability"}},o={},l=[{value:"cache_key",id:"cache_key",level:3},{value:"cache_content_get",id:"cache_content_get",level:3},{value:"cache_content_set",id:"cache_content_set",level:3},{value:"min_tokens_reached",id:"min_tokens_reached",level:3},{value:"count_text_tokens",id:"count_text_tokens",level:3},{value:"is_content_right_type",id:"is_content_right_type",level:3},{value:"is_content_text_empty",id:"is_content_text_empty",level:3},{value:"should_transform_message",id:"should_transform_message",level:3}];function h(e){const n={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"cache_key",children:"cache_key"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def cache_key(content: MessageContentType, *args: Hashable) -> str\n"})}),"\n",(0,s.jsx)(n.p,{children:"Calculates the cache key for the given message content and any other hashable args."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"content"})," ",(0,s.jsx)(n.em,{children:"MessageContentType"})," - The message content to calculate the cache key for."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"*args"})," - Any additional hashable args to include in the cache key."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cache_content_get",children:"cache_content_get"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def cache_content_get(cache: Optional[AbstractCache],\n                      key: str) -> Optional[Tuple[MessageContentType, ...]]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Retrieves cachedd content from the cache."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cache"})," ",(0,s.jsx)(n.em,{children:"None or AbstractCache"})," - The cache to retrieve the content from. If None, the cache is ignored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," ",(0,s.jsx)(n.em,{children:"str"})," - The key to retrieve the content from."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cache_content_set",children:"cache_content_set"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def cache_content_set(cache: Optional[AbstractCache], key: str,\n                      content: MessageContentType, *extra_values)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sets content into the cache."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cache"})," ",(0,s.jsx)(n.em,{children:"None or AbstractCache"})," - The cache to set the content into. If None, the cache is ignored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"})," ",(0,s.jsx)(n.em,{children:"str"})," - The key to set the content into."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"content"})," ",(0,s.jsx)(n.em,{children:"MessageContentType"})," - The message content to set into the cache."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"*extra_values"})," - Additional values to be passed to the cache."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"min_tokens_reached",children:"min_tokens_reached"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def min_tokens_reached(messages: List[Dict],\n                       min_tokens: Optional[int]) -> bool\n"})}),"\n",(0,s.jsx)(n.p,{children:"Returns True if the total number of tokens in the messages is greater than or equal to the specified value."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"messages"})," ",(0,s.jsx)(n.em,{children:"List[Dict]"})," - A list of messages to check."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"count_text_tokens",children:"count_text_tokens"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def count_text_tokens(content: MessageContentType) -> int\n"})}),"\n",(0,s.jsx)(n.p,{children:"Calculates the number of text tokens in the given message content."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"content"})," ",(0,s.jsx)(n.em,{children:"MessageContentType"})," - The message content to calculate the number of text tokens for."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"is_content_right_type",children:"is_content_right_type"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def is_content_right_type(content: Any) -> bool\n"})}),"\n",(0,s.jsx)(n.p,{children:"A helper function to check if the passed in content is of the right type."}),"\n",(0,s.jsx)(n.h3,{id:"is_content_text_empty",children:"is_content_text_empty"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def is_content_text_empty(content: MessageContentType) -> bool\n"})}),"\n",(0,s.jsx)(n.p,{children:"Checks if the content of the message does not contain any text."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"content"})," ",(0,s.jsx)(n.em,{children:"MessageContentType"})," - The message content to check."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"should_transform_message",children:"should_transform_message"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def should_transform_message(message: Dict[str, Any],\n                             filter_dict: Optional[Dict[str, Any]],\n                             exclude: bool) -> bool\n"})}),"\n",(0,s.jsx)(n.p,{children:"Validates whether the transform should be applied according to the filter dictionary."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"message"})," ",(0,s.jsx)(n.em,{children:"Dict[str, Any]"})," - The message to validate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"filter_dict"})," ",(0,s.jsx)(n.em,{children:"None or Dict[str, Any]"})," - The filter dictionary to validate against. If None, the transform is always applied."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exclude"})," ",(0,s.jsx)(n.em,{children:"bool"})," - Whether to exclude messages that match the filter dictionary."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(67294);const c={},i=s.createContext(c);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);