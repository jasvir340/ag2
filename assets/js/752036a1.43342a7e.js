"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95704],{48538:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>h,toc:()=>s});var r=n(74848),t=n(28453);const i={sidebar_label:"graph_rag_capability",title:"agentchat.contrib.graph_rag.graph_rag_capability"},c=void 0,h={id:"reference/agentchat/contrib/graph_rag/graph_rag_capability",title:"agentchat.contrib.graph_rag.graph_rag_capability",description:"GraphRagCapability",source:"@site/docs/reference/agentchat/contrib/graph_rag/graph_rag_capability.md",sourceDirName:"reference/agentchat/contrib/graph_rag",slug:"/reference/agentchat/contrib/graph_rag/graph_rag_capability",permalink:"/ag2/docs/reference/agentchat/contrib/graph_rag/graph_rag_capability",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/agentchat/contrib/graph_rag/graph_rag_capability.md",tags:[],version:"current",frontMatter:{sidebar_label:"graph_rag_capability",title:"agentchat.contrib.graph_rag.graph_rag_capability"},sidebar:"referenceSideBar",previous:{title:"graph_query_engine",permalink:"/ag2/docs/reference/agentchat/contrib/graph_rag/graph_query_engine"},next:{title:"base",permalink:"/ag2/docs/reference/agentchat/contrib/vectordb/base"}},g={},s=[{value:"GraphRagCapability",id:"graphragcapability",level:2},{value:"__init__",id:"__init__",level:3},{value:"add_to_agent",id:"add_to_agent",level:3}];function o(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"graphragcapability",children:"GraphRagCapability"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"class GraphRagCapability(AgentCapability)\n"})}),"\n",(0,r.jsx)(a.p,{children:"A graph-based RAG capability uses a graph query engine to give a conversable agent the graph-based RAG ability."}),"\n",(0,r.jsx)(a.p,{children:"An agent class with graph-based RAG capability could"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"create a graph in the underlying database with input documents."}),"\n",(0,r.jsx)(a.li,{children:"retrieved relevant information based on messages received by the agent."}),"\n",(0,r.jsx)(a.li,{children:"generate answers from retrieved information and send messages back."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"For example,\ngraph_query_engine = GraphQueryEngine(...)\ngraph_query_engine.init_db([Document(doc1), Document(doc2), ...])"}),"\n",(0,r.jsx)(a.p,{children:'graph_rag_agent = ConversableAgent(\nname="graph_rag_agent",\nmax_consecutive_auto_reply=3,\n...\n)\ngraph_rag_capability = GraphRagCapbility(graph_query_engine)\ngraph_rag_capability.add_to_agent(graph_rag_agent)'}),"\n",(0,r.jsx)(a.p,{children:'user_proxy = UserProxyAgent(\nname="user_proxy",\ncode_execution_config=False,\nis_termination_msg=lambda msg: "TERMINATE" in msg["content"],\nhuman_input_mode="ALWAYS",\n)\nuser_proxy.initiate_chat(graph_rag_agent, message="Name a few actors who\'ve played in \'The Matrix\'")'}),"\n",(0,r.jsx)(a.h1,{id:"chatresult",children:"ChatResult("}),"\n",(0,r.jsx)(a.h1,{id:"chat_idnone",children:"chat_id=None,"}),"\n",(0,r.jsx)(a.h1,{id:"chat_history",children:"chat_history=["}),"\n",(0,r.jsx)(a.h1,{id:"content-name-a-few-actors-whove-played-in-the-matrix-role-graph_rag_agent",children:"{'content': 'Name a few actors who've played in 'The Matrix'', 'role': 'graph_rag_agent'},"}),"\n",(0,r.jsx)(a.h1,{id:"content-a-few-actors-who-have-played-in-the-matrix-are",children:"{'content': 'A few actors who have played in The Matrix are:"}),"\n",(0,r.jsx)(a.h1,{id:"--keanu-reeves",children:"- Keanu Reeves"}),"\n",(0,r.jsx)(a.h1,{id:"--laurence-fishburne",children:"- Laurence Fishburne"}),"\n",(0,r.jsx)(a.h1,{id:"--carrie-anne-moss",children:"- Carrie-Anne Moss"}),"\n",(0,r.jsx)(a.h1,{id:"--hugo-weaving",children:"- Hugo Weaving',"}),"\n",(0,r.jsx)(a.h1,{id:"role-user_proxy",children:"'role': 'user_proxy'},"}),"\n",(0,r.jsx)(a.h1,{id:"",children:"...)"}),"\n",(0,r.jsx)(a.h3,{id:"__init__",children:"__init__"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"def __init__(query_engine: GraphQueryEngine)\n"})}),"\n",(0,r.jsx)(a.p,{children:"Initialize graph-based RAG capability with a graph query engine"}),"\n",(0,r.jsx)(a.h3,{id:"add_to_agent",children:"add_to_agent"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-python",children:"def add_to_agent(agent: ConversableAgent)\n"})}),"\n",(0,r.jsx)(a.p,{children:"Add the capability to an agent"})]})}function l(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>c,x:()=>h});var r=n(96540);const t={},i=r.createContext(t);function c(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function h(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);