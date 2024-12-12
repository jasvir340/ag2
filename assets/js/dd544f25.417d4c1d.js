"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39333],{15332:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(74848),t=r(28453);const i={sidebar_label:"falkor_graph_query_engine",title:"agentchat.contrib.graph_rag.falkor_graph_query_engine"},l=void 0,s={id:"reference/agentchat/contrib/graph_rag/falkor_graph_query_engine",title:"agentchat.contrib.graph_rag.falkor_graph_query_engine",description:"FalkorGraphQueryEngine",source:"@site/docs/reference/agentchat/contrib/graph_rag/falkor_graph_query_engine.md",sourceDirName:"reference/agentchat/contrib/graph_rag",slug:"/reference/agentchat/contrib/graph_rag/falkor_graph_query_engine",permalink:"/ag2/docs/reference/agentchat/contrib/graph_rag/falkor_graph_query_engine",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/agentchat/contrib/graph_rag/falkor_graph_query_engine.md",tags:[],version:"current",frontMatter:{sidebar_label:"falkor_graph_query_engine",title:"agentchat.contrib.graph_rag.falkor_graph_query_engine"},sidebar:"referenceSideBar",previous:{title:"document",permalink:"/ag2/docs/reference/agentchat/contrib/graph_rag/document"},next:{title:"falkor_graph_rag_capability",permalink:"/ag2/docs/reference/agentchat/contrib/graph_rag/falkor_graph_rag_capability"}},o={},c=[{value:"FalkorGraphQueryEngine",id:"falkorgraphqueryengine",level:2},{value:"__init__",id:"__init__",level:3},{value:"connect_db",id:"connect_db",level:3},{value:"init_db",id:"init_db",level:3},{value:"query",id:"query",level:3},{value:"delete",id:"delete",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"falkorgraphqueryengine",children:"FalkorGraphQueryEngine"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class FalkorGraphQueryEngine()\n"})}),"\n",(0,a.jsx)(n.p,{children:"This is a wrapper for FalkorDB KnowledgeGraph."}),"\n",(0,a.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def __init__(name: str,\n             host: str = "127.0.0.1",\n             port: int = 6379,\n             username: str | None = None,\n             password: str | None = None,\n             model: GenerativeModel = OpenAiGenerativeModel("gpt-4o"),\n             ontology: Ontology | None = None)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Initialize a FalkorDB knowledge graph.\nPlease also refer to ",(0,a.jsx)(n.a,{href:"https://github.com/FalkorDB/GraphRAG-SDK/blob/main/graphrag_sdk/kg.py",children:"https://github.com/FalkorDB/GraphRAG-SDK/blob/main/graphrag_sdk/kg.py"})]}),"\n",(0,a.jsx)(n.p,{children:"TODO: Fix LLM API cost calculation for FalkorDB useages."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"})," ",(0,a.jsx)(n.em,{children:"str"})," - Knowledge graph name."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"host"})," ",(0,a.jsx)(n.em,{children:"str"})," - FalkorDB hostname."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"port"})," ",(0,a.jsx)(n.em,{children:"int"})," - FalkorDB port number."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"username"})," ",(0,a.jsx)(n.em,{children:"str|None"})," - FalkorDB username."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"password"})," ",(0,a.jsx)(n.em,{children:"str|None"})," - FalkorDB password."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"model"})," ",(0,a.jsx)(n.em,{children:"GenerativeModel"})," - LLM model to use for FalkorDB to build and retrieve from the graph, default to use OAI gpt-4o."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ontology"})," - FalkorDB knowledge graph schema/ontology, ",(0,a.jsx)(n.a,{href:"https://github.com/FalkorDB/GraphRAG-SDK/blob/main/graphrag_sdk/ontology.py",children:"https://github.com/FalkorDB/GraphRAG-SDK/blob/main/graphrag_sdk/ontology.py"}),"\nIf None, FalkorDB will auto generate an ontology from the input docs."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"connect_db",children:"connect_db"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def connect_db()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Connect to an existing knowledge graph."}),"\n",(0,a.jsx)(n.h3,{id:"init_db",children:"init_db"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def init_db(input_doc: List[Document])\n"})}),"\n",(0,a.jsx)(n.p,{children:"Build the knowledge graph with input documents."}),"\n",(0,a.jsx)(n.h3,{id:"query",children:"query"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def query(question: str,\n          n_results: int = 1,\n          **kwargs) -> GraphStoreQueryResult\n"})}),"\n",(0,a.jsx)(n.p,{children:"Query the knowledge graph with a question and optional message history."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"question"})," - a human input question."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"n_results"})," - number of returned results.\nkwargs:"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"messages"})," - a list of message history."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Returns"})," - FalkorGraphQueryResult"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"delete",children:"delete"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"def delete() -> bool\n"})}),"\n",(0,a.jsx)(n.p,{children:"Delete graph and its data from database."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var a=r(96540);const t={},i=a.createContext(t);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);