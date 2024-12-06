"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77257],{36202:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=t(74848),r=t(28453);const s={sidebar_label:"text_analyzer_agent",title:"agentchat.contrib.text_analyzer_agent"},i=void 0,l={id:"reference/agentchat/contrib/text_analyzer_agent",title:"agentchat.contrib.text_analyzer_agent",description:"TextAnalyzerAgent",source:"@site/docs/reference/agentchat/contrib/text_analyzer_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/text_analyzer_agent",permalink:"/ag2/docs/reference/agentchat/contrib/text_analyzer_agent",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/agentchat/contrib/text_analyzer_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"text_analyzer_agent",title:"agentchat.contrib.text_analyzer_agent"},sidebar:"referenceSideBar",previous:{title:"swarm_agent",permalink:"/ag2/docs/reference/agentchat/contrib/swarm_agent"},next:{title:"tool_retriever",permalink:"/ag2/docs/reference/agentchat/contrib/tool_retriever"}},c={},o=[{value:"TextAnalyzerAgent",id:"textanalyzeragent",level:2},{value:"__init__",id:"__init__",level:3},{value:"analyze_text",id:"analyze_text",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"textanalyzeragent",children:"TextAnalyzerAgent"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class TextAnalyzerAgent(ConversableAgent)\n"})}),"\n",(0,a.jsx)(n.p,{children:"(Experimental) Text Analysis agent, a subclass of ConversableAgent designed to analyze text as instructed."}),"\n",(0,a.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def __init__(name="analyzer",\n             system_message: Optional[str] = system_message,\n             human_input_mode: Literal["ALWAYS", "NEVER",\n                                       "TERMINATE"] = "NEVER",\n             llm_config: Optional[Union[Dict, bool]] = None,\n             **kwargs)\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"})," ",(0,a.jsx)(n.em,{children:"str"})," - name of the agent."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"system_message"})," ",(0,a.jsx)(n.em,{children:"str"})," - system message for the ChatCompletion inference."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"human_input_mode"})," ",(0,a.jsx)(n.em,{children:"str"})," - This agent should NEVER prompt the human for input."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"llm_config"})," ",(0,a.jsx)(n.em,{children:"dict or False"})," - llm inference configuration.\nPlease refer to ",(0,a.jsx)(n.a,{href:"/docs/reference/oai/client#create",children:"OpenAIWrapper.create"}),"\nfor available options.\nTo disable llm-based auto reply, set to False."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"**kwargs"})," ",(0,a.jsx)(n.em,{children:"dict"})," - other kwargs in ",(0,a.jsx)(n.a,{href:"../conversable_agent#__init__",children:"ConversableAgent"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"analyze_text",children:"analyze_text"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def analyze_text(text_to_analyze, analysis_instructions)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Analyzes the given text as instructed, and returns the analysis."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);