"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97389],{6731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=t(74848),i=t(28453);const a={sidebar_label:"agent_eval",title:"agentchat.contrib.agent_eval.agent_eval"},s=void 0,c={id:"reference/agentchat/contrib/agent_eval/agent_eval",title:"agentchat.contrib.agent_eval.agent_eval",description:"generate\\_criteria",source:"@site/docs/reference/agentchat/contrib/agent_eval/agent_eval.md",sourceDirName:"reference/agentchat/contrib/agent_eval",slug:"/reference/agentchat/contrib/agent_eval/",permalink:"/ag2/docs/reference/agentchat/contrib/agent_eval/",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/agentchat/contrib/agent_eval/agent_eval.md",tags:[],version:"current",frontMatter:{sidebar_label:"agent_eval",title:"agentchat.contrib.agent_eval.agent_eval"},sidebar:"referenceSideBar",next:{title:"criterion",permalink:"/ag2/docs/reference/agentchat/contrib/agent_eval/criterion"}},l={},o=[{value:"generate_criteria",id:"generate_criteria",level:3},{value:"quantify_criteria",id:"quantify_criteria",level:3}];function d(e){const n={code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"generate_criteria",children:"generate_criteria"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def generate_criteria(llm_config: Optional[Union[Dict, Literal[False]]] = None,\n                      task: Task = None,\n                      additional_instructions: str = "",\n                      max_round=2,\n                      use_subcritic: bool = False)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Creates a list of criteria for evaluating the utility of a given task."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"llm_config"})," ",(0,r.jsx)(n.em,{children:"dict or bool"})," - llm inference configuration."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"task"})," ",(0,r.jsx)(n.em,{children:"Task"})," - The task to evaluate."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"additional_instructions"})," ",(0,r.jsx)(n.em,{children:"str"})," - Additional instructions for the criteria agent."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"max_round"})," ",(0,r.jsx)(n.em,{children:"int"})," - The maximum number of rounds to run the conversation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"use_subcritic"})," ",(0,r.jsx)(n.em,{children:"bool"})," - Whether to use the subcritic agent to generate subcriteria."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"list"})," - A list of Criterion objects for evaluating the utility of the given task."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"quantify_criteria",children:"quantify_criteria"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'def quantify_criteria(llm_config: Optional[Union[Dict, Literal[False]]] = None,\n                      criteria: List[Criterion] = None,\n                      task: Task = None,\n                      test_case: str = "",\n                      ground_truth: str = "")\n'})}),"\n",(0,r.jsx)(n.p,{children:"Quantifies the performance of a system using the provided criteria."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"llm_config"})," ",(0,r.jsx)(n.em,{children:"dict or bool"})," - llm inference configuration."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"criteria"})," ",(0,r.jsx)(n.em,{children:"[Criterion]"})," - A list of criteria for evaluating the utility of a given task."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"task"})," ",(0,r.jsx)(n.em,{children:"Task"})," - The task to evaluate."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"test_case"})," ",(0,r.jsx)(n.em,{children:"str"})," - The test case to evaluate."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ground_truth"})," ",(0,r.jsx)(n.em,{children:"str"})," - The ground truth for the test case."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dict"})," - A dictionary where the keys are the criteria and the values are the assessed performance based on accepted values for each criteria."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);