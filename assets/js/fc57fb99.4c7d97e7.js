"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6828],{84628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(85893),a=t(11151);const i={title:"Retrieval-Augmented Generation (RAG) Applications with AutoGen",authors:"thinkall",tags:["LLM","RAG"]},o=void 0,r={permalink:"/ag2/blog/2023/10/18/RetrieveChat",source:"@site/blog/2023-10-18-RetrieveChat/index.mdx",title:"Retrieval-Augmented Generation (RAG) Applications with AutoGen",description:"Last update v0.2.35",date:"2023-10-18T00:00:00.000Z",formattedDate:"October 18, 2023",tags:[{label:"LLM",permalink:"/ag2/blog/tags/llm"},{label:"RAG",permalink:"/ag2/blog/tags/rag"}],readingTime:8.945,hasTruncateMarker:!1,authors:[{name:"Li Jiang",title:"Senior Software Engineer at Microsoft",url:"https://github.com/thinkall",imageURL:"https://github.com/thinkall.png",key:"thinkall"}],frontMatter:{title:"Retrieval-Augmented Generation (RAG) Applications with AutoGen",authors:"thinkall",tags:["LLM","RAG"]},unlisted:!1,prevItem:{title:"AutoGen's Teachable Agents",permalink:"/ag2/blog/2023/10/26/TeachableAgent"},nextItem:{title:"Use AutoGen for Local LLMs",permalink:"/ag2/blog/2023/07/14/Local-LLMs"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Usage of RAG Agents",id:"basic-usage-of-rag-agents",level:2},{value:"Customizing RAG Agents",id:"customizing-rag-agents",level:2},{value:"Customizing Embedding Function",id:"customizing-embedding-function",level:3},{value:"Customizing Text Split Function",id:"customizing-text-split-function",level:3},{value:"Customizing Vector Database",id:"customizing-vector-database",level:3},{value:"Advanced Usage of RAG Agents",id:"advanced-usage-of-rag-agents",level:2},{value:"Integrate with other agents in a group chat",id:"integrate-with-other-agents-in-a-group-chat",level:3},{value:"Build a Chat application with Gradio",id:"build-a-chat-application-with-gradio",level:3},{value:"Read More",id:"read-more",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Last update: August 14, 2024; AutoGen version: v0.2.35"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"RAG Architecture",src:t(48584).Z+"",width:"2292",height:"732"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TL;DR:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We introduce ",(0,s.jsx)(n.strong,{children:"RetrieveUserProxyAgent"}),", RAG agents of AutoGen that\nallows retrieval-augmented generation, and its basic usage."]}),"\n",(0,s.jsx)(n.li,{children:"We showcase customizations of RAG agents, such as customizing the embedding function, the text\nsplit function and vector database."}),"\n",(0,s.jsx)(n.li,{children:"We also showcase two advanced usage of RAG agents, integrating with group chat and building a Chat\napplication with Gradio."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Retrieval augmentation has emerged as a practical and effective approach for mitigating the intrinsic\nlimitations of LLMs by incorporating external documents. In this blog post, we introduce RAG agents of\nAutoGen that allows retrieval-augmented generation. The system consists of two agents: a\nRetrieval-augmented User Proxy agent, called ",(0,s.jsx)(n.code,{children:"RetrieveUserProxyAgent"}),", and an Assistant\nagent, called ",(0,s.jsx)(n.code,{children:"RetrieveAssistantAgent"}),"; ",(0,s.jsx)(n.code,{children:"RetrieveUserProxyAgent"})," is extended from built-in agents from AutoGen,\nwhile ",(0,s.jsx)(n.code,{children:"RetrieveAssistantAgent"})," can be any conversable agent with LLM configured.\nThe overall architecture of the RAG agents is shown in the figure above."]}),"\n",(0,s.jsx)(n.p,{children:"To use Retrieval-augmented Chat, one needs to initialize two agents including Retrieval-augmented\nUser Proxy and Retrieval-augmented Assistant. Initializing the Retrieval-Augmented User Proxy\nnecessitates specifying a path to the document collection. Subsequently, the Retrieval-Augmented\nUser Proxy can download the documents, segment them into chunks of a specific size, compute\nembeddings, and store them in a vector database. Once a chat is initiated, the agents collaboratively\nengage in code generation or question-answering adhering to the procedures outlined below:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The Retrieval-Augmented User Proxy retrieves document chunks based on the embedding similarity,\nand sends them along with the question to the Retrieval-Augmented Assistant."}),"\n",(0,s.jsx)(n.li,{children:"The Retrieval-Augmented Assistant employs an LLM to generate code or text as answers based\non the question and context provided. If the LLM is unable to produce a satisfactory response, it\nis instructed to reply with \u201cUpdate Context\u201d to the Retrieval-Augmented User Proxy."}),"\n",(0,s.jsx)(n.li,{children:"If a response includes code blocks, the Retrieval-Augmented User Proxy executes the code and\nsends the output as feedback. If there are no code blocks or instructions to update the context, it\nterminates the conversation. Otherwise, it updates the context and forwards the question along\nwith the new context to the Retrieval-Augmented Assistant. Note that if human input solicitation\nis enabled, individuals can proactively send any feedback, including Update Context\u201d, to the\nRetrieval-Augmented Assistant."}),"\n",(0,s.jsx)(n.li,{children:"If the Retrieval-Augmented Assistant receives \u201cUpdate Context\u201d, it requests the next most similar\nchunks of documents as new context from the Retrieval-Augmented User Proxy. Otherwise, it\ngenerates new code or text based on the feedback and chat history. If the LLM fails to generate\nan answer, it replies with \u201cUpdate Context\u201d again. This process can be repeated several times.\nThe conversation terminates if no more documents are available for the context."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage-of-rag-agents",children:"Basic Usage of RAG Agents"}),"\n",(0,s.jsxs)(n.ol,{start:"0",children:["\n",(0,s.jsx)(n.li,{children:"Install dependencies"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Please install autogen with the [retrievechat] option before using RAG agents."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[retrievechat]"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["RetrieveChat can handle various types of documents. By default, it can process\nplain text and PDF files, including formats such as 'txt', 'json', 'csv', 'tsv',\n'md', 'html', 'htm', 'rtf', 'rst', 'jsonl', 'log', 'xml', 'yaml', 'yml' and 'pdf'.\nIf you install ",(0,s.jsx)(n.a,{href:"https://unstructured-io.github.io/unstructured/installation/full_installation.html",children:"unstructured"}),",\nadditional document types such as 'docx',\n'doc', 'odt', 'pptx', 'ppt', 'xlsx', 'eml', 'msg', 'epub' will also be supported."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Install ",(0,s.jsx)(n.code,{children:"unstructured"})," in ubuntu"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install -y tesseract-ocr poppler-utils\npip install unstructured[all-docs]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can find a list of all supported document types by using ",(0,s.jsx)(n.code,{children:"autogen.retrieve_utils.TEXT_FORMATS"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Import Agents"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import autogen\nfrom autogen import AssistantAgent\nfrom autogen.agentchat.contrib.retrieve_user_proxy_agent import RetrieveUserProxyAgent\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Create an 'AssistantAgent' instance named \"assistant\" and an 'RetrieveUserProxyAgent' instance named \"ragproxyagent\""}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"https://ag2ai.github.io/autogen/docs/reference/agentchat/contrib/retrieve_user_proxy_agent",children:"doc"}),"\nfor more information on the detailed configurations."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'assistant = AssistantAgent(\n    name="assistant",\n    system_message="You are a helpful assistant.",\n    llm_config=llm_config,\n)\n\nragproxyagent = RetrieveUserProxyAgent(\n    name="ragproxyagent",\n    retrieve_config={\n        "task": "qa",\n        "docs_path": "https://raw.githubusercontent.com/microsoft/autogen/main/README.md",\n    },\n)\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Initialize Chat and ask a question"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'assistant.reset()\nragproxyagent.initiate_chat(assistant, message=ragproxyagent.message_generator, problem="What is autogen?")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output is like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--------------------------------------------------------------------------------\nassistant (to ragproxyagent):\n\nAutoGen is a framework that enables the development of large language model (LLM) applications using multiple agents that can converse with each other to solve tasks. The agents are customizable, conversable, and allow human participation. They can operate in various modes that employ combinations of LLMs, human inputs, and tools.\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Create a UserProxyAgent and ask the same question"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'assistant.reset()\nuserproxyagent = autogen.UserProxyAgent(name="userproxyagent")\nuserproxyagent.initiate_chat(assistant, message="What is autogen?")\n'})}),"\n",(0,s.jsx)(n.p,{children:"Output is like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--------------------------------------------------------------------------------\nassistant (to userproxyagent):\n\nIn computer software, autogen is a tool that generates program code automatically, without the need for manual coding. It is commonly used in fields such as software engineering, game development, and web development to speed up the development process and reduce errors. Autogen tools typically use pre-programmed rules, templates, and data to create code for repetitive tasks, such as generating user interfaces, database schemas, and data models. Some popular autogen tools include Visual Studio's Code Generator and Unity's Asset Store.\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can see that the output of ",(0,s.jsx)(n.code,{children:"UserProxyAgent"})," is not related to our ",(0,s.jsx)(n.code,{children:"autogen"})," since the latest info of\n",(0,s.jsx)(n.code,{children:"autogen"})," is not in ChatGPT's training data. The output of ",(0,s.jsx)(n.code,{children:"RetrieveUserProxyAgent"})," is correct as it can\nperform retrieval-augmented generation based on the given documentation file."]}),"\n",(0,s.jsx)(n.h2,{id:"customizing-rag-agents",children:"Customizing RAG Agents"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RetrieveUserProxyAgent"})," is customizable with ",(0,s.jsx)(n.code,{children:"retrieve_config"}),". There are several parameters to configure\nbased on different use cases. In this section, we'll show how to customize embedding function, text split\nfunction and vector database."]}),"\n",(0,s.jsx)(n.h3,{id:"customizing-embedding-function",children:"Customizing Embedding Function"}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.a,{href:"https://www.sbert.net",children:"Sentence Transformers"})," and its pretrained models will be used to\ncompute embeddings. It's possible that you want to use OpenAI, Cohere, HuggingFace or other embedding functions."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"OpenAI"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from chromadb.utils import embedding_functions\n\nopenai_ef = embedding_functions.OpenAIEmbeddingFunction(\n                api_key="YOUR_API_KEY",\n                model_name="text-embedding-ada-002"\n            )\n\nragproxyagent = RetrieveUserProxyAgent(\n    name="ragproxyagent",\n    retrieve_config={\n        "task": "qa",\n        "docs_path": "https://raw.githubusercontent.com/microsoft/autogen/main/README.md",\n        "embedding_function": openai_ef,\n    },\n)\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"HuggingFace"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'huggingface_ef = embedding_functions.HuggingFaceEmbeddingFunction(\n    api_key="YOUR_API_KEY",\n    model_name="sentence-transformers/all-MiniLM-L6-v2"\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["More examples can be found ",(0,s.jsx)(n.a,{href:"https://docs.trychroma.com/embeddings",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"customizing-text-split-function",children:"Customizing Text Split Function"}),"\n",(0,s.jsx)(n.p,{children:"Before we can store the documents into a vector database, we need to split the texts into chunks. Although\nwe have implemented a flexible text splitter in autogen, you may still want to use different text splitters.\nThere are also some existing text split tools which are good to reuse."}),"\n",(0,s.jsx)(n.p,{children:"For example, you can use all the text splitters in langchain."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from langchain.text_splitter import RecursiveCharacterTextSplitter\n\nrecur_spliter = RecursiveCharacterTextSplitter(separators=["\\n", "\\r", "\\t"])\n\nragproxyagent = RetrieveUserProxyAgent(\n    name="ragproxyagent",\n    retrieve_config={\n        "task": "qa",\n        "docs_path": "https://raw.githubusercontent.com/microsoft/autogen/main/README.md",\n        "custom_text_split_function": recur_spliter.split_text,\n    },\n)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"customizing-vector-database",children:"Customizing Vector Database"}),"\n",(0,s.jsxs)(n.p,{children:["We are using chromadb as the default vector database, you can also use mongodb, pgvectordb and qdrantdb\nby simply set ",(0,s.jsx)(n.code,{children:"vector_db"})," to ",(0,s.jsx)(n.code,{children:"mongodb"}),", ",(0,s.jsx)(n.code,{children:"pgvector"})," and ",(0,s.jsx)(n.code,{children:"qdrant"})," in ",(0,s.jsx)(n.code,{children:"retrieve_config"}),", respectively."]}),"\n",(0,s.jsxs)(n.p,{children:["To plugin any other dbs, you can also extend class ",(0,s.jsx)(n.code,{children:"agentchat.contrib.vectordb.base"}),",\ncheck out the code ",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/autogen/agentchat/contrib/vectordb/base.py",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"advanced-usage-of-rag-agents",children:"Advanced Usage of RAG Agents"}),"\n",(0,s.jsx)(n.h3,{id:"integrate-with-other-agents-in-a-group-chat",children:"Integrate with other agents in a group chat"}),"\n",(0,s.jsxs)(n.p,{children:["To use ",(0,s.jsx)(n.code,{children:"RetrieveUserProxyAgent"})," in a group chat is almost the same as you use it in a two agents chat. The only thing is that\nyou need to ",(0,s.jsxs)(n.strong,{children:["initialize the chat with ",(0,s.jsx)(n.code,{children:"RetrieveUserProxyAgent"})]}),". The ",(0,s.jsx)(n.code,{children:"RetrieveAssistantAgent"})," is not necessary in a group chat."]}),"\n",(0,s.jsxs)(n.p,{children:["However, you may want to initialize the chat with another agent in some cases. To leverage the best of ",(0,s.jsx)(n.code,{children:"RetrieveUserProxyAgent"}),",\nyou'll need to call it from a function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'boss = autogen.UserProxyAgent(\n    name="Boss",\n    is_termination_msg=termination_msg,\n    human_input_mode="TERMINATE",\n    system_message="The boss who ask questions and give tasks.",\n)\n\nboss_aid = RetrieveUserProxyAgent(\n    name="Boss_Assistant",\n    is_termination_msg=termination_msg,\n    system_message="Assistant who has extra content retrieval power for solving difficult problems.",\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=3,\n    retrieve_config={\n        "task": "qa",\n    },\n    code_execution_config=False,  # we don\'t want to execute code in this case.\n)\n\ncoder = autogen.AssistantAgent(\n    name="Senior_Python_Engineer",\n    is_termination_msg=termination_msg,\n    system_message="You are a senior python engineer. Reply `TERMINATE` in the end when everything is done.",\n    llm_config={"config_list": config_list, "timeout": 60, "temperature": 0},\n)\n\npm = autogen.AssistantAgent(\n    name="Product_Manager",\n    is_termination_msg=termination_msg,\n    system_message="You are a product manager. Reply `TERMINATE` in the end when everything is done.",\n    llm_config={"config_list": config_list, "timeout": 60, "temperature": 0},\n)\n\nreviewer = autogen.AssistantAgent(\n    name="Code_Reviewer",\n    is_termination_msg=termination_msg,\n    system_message="You are a code reviewer. Reply `TERMINATE` in the end when everything is done.",\n    llm_config={"config_list": config_list, "timeout": 60, "temperature": 0},\n)\n\ndef retrieve_content(\n    message: Annotated[\n        str,\n        "Refined message which keeps the original meaning and can be used to retrieve content for code generation and question answering.",\n    ],\n    n_results: Annotated[int, "number of results"] = 3,\n) -> str:\n    boss_aid.n_results = n_results  # Set the number of results to be retrieved.\n    _context = {"problem": message, "n_results": n_results}\n    ret_msg = boss_aid.message_generator(boss_aid, None, _context)\n    return ret_msg or message\n\nfor caller in [pm, coder, reviewer]:\n    d_retrieve_content = caller.register_for_llm(\n        description="retrieve content for code generation and question answering.", api_style="function"\n    )(retrieve_content)\n\nfor executor in [boss, pm]:\n    executor.register_for_execution()(d_retrieve_content)\n\ngroupchat = autogen.GroupChat(\n    agents=[boss, pm, coder, reviewer],\n    messages=[],\n    max_round=12,\n    speaker_selection_method="round_robin",\n    allow_repeat_speaker=False,\n)\n\nllm_config = {"config_list": config_list, "timeout": 60, "temperature": 0}\nmanager = autogen.GroupChatManager(groupchat=groupchat, llm_config=llm_config)\n\n# Start chatting with the boss as this is the user proxy agent.\nboss.initiate_chat(\n    manager,\n    message="How to use spark for parallel training in FLAML? Give me sample code.",\n)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"build-a-chat-application-with-gradio",children:"Build a Chat application with Gradio"}),"\n",(0,s.jsx)(n.p,{children:"Now, let's wrap it up and make a Chat application with AutoGen and Gradio."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"RAG ChatBot with AutoGen",src:t(47794).Z+"",width:"2140",height:"1838"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Initialize Agents\ndef initialize_agents(config_list, docs_path=None):\n    ...\n    return assistant, ragproxyagent\n\n# Initialize Chat\ndef initiate_chat(config_list, problem, queue, n_results=3):\n    ...\n    assistant.reset()\n    try:\n        ragproxyagent.a_initiate_chat(\n            assistant, problem=problem, silent=False, n_results=n_results\n        )\n        messages = ragproxyagent.chat_messages\n        messages = [messages[k] for k in messages.keys()][0]\n        messages = [m["content"] for m in messages if m["role"] == "user"]\n        print("messages: ", messages)\n    except Exception as e:\n        messages = [str(e)]\n    queue.put(messages)\n\n# Wrap AutoGen part into a function\ndef chatbot_reply(input_text):\n    """Chat with the agent through terminal."""\n    queue = mp.Queue()\n    process = mp.Process(\n        target=initiate_chat,\n        args=(config_list, input_text, queue),\n    )\n    process.start()\n    try:\n        messages = queue.get(timeout=TIMEOUT)\n    except Exception as e:\n        messages = [str(e) if len(str(e)) > 0 else "Invalid Request to OpenAI, please check your API keys."]\n    finally:\n        try:\n            process.terminate()\n        except:\n            pass\n    return messages\n\n...\n\n# Set up UI with Gradio\nwith gr.Blocks() as demo:\n    ...\n    assistant, ragproxyagent = initialize_agents(config_list)\n\n    chatbot = gr.Chatbot(\n        [],\n        elem_id="chatbot",\n        bubble_full_width=False,\n        avatar_images=(None, (os.path.join(os.path.dirname(__file__), "autogen.png"))),\n        # height=600,\n    )\n\n    txt_input = gr.Textbox(\n        scale=4,\n        show_label=False,\n        placeholder="Enter text and press enter",\n        container=False,\n    )\n\n    with gr.Row():\n        txt_model = gr.Dropdown(\n            label="Model",\n            choices=[\n                "gpt-4",\n                "gpt-35-turbo",\n                "gpt-3.5-turbo",\n            ],\n            allow_custom_value=True,\n            value="gpt-35-turbo",\n            container=True,\n        )\n        txt_oai_key = gr.Textbox(\n            label="OpenAI API Key",\n            placeholder="Enter key and press enter",\n            max_lines=1,\n            show_label=True,\n            value=os.environ.get("OPENAI_API_KEY", ""),\n            container=True,\n            type="password",\n        )\n        ...\n\n    clear = gr.ClearButton([txt_input, chatbot])\n\n...\n\nif __name__ == "__main__":\n    demo.launch(share=True)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The online app and the source code are hosted in ",(0,s.jsx)(n.a,{href:"https://huggingface.co/spaces/thinkall/autogen-demos",children:"HuggingFace"}),". Feel free to give it a try!"]}),"\n",(0,s.jsx)(n.h2,{id:"read-more",children:"Read More"}),"\n",(0,s.jsx)(n.p,{children:"You can check out more example notebooks for RAG use cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_RetrieveChat.ipynb",children:"Automated Code Generation and Question Answering with Retrieval Augmented Agents"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_groupchat_RAG.ipynb",children:"Group Chat with Retrieval Augmented Generation (with 5 group member agents and 1 manager agent)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_RetrieveChat_qdrant.ipynb",children:"Using RetrieveChat with Qdrant for Retrieve Augmented Code Generation and Question Answering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_RetrieveChat_pgvector.ipynb",children:"Using RetrieveChat Powered by PGVector for Retrieve Augmented Code Generation and Question Answering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_RetrieveChat_mongodb.ipynb",children:"Using RetrieveChat Powered by MongoDB Atlas for Retrieve Augmented Code Generation and Question Answering"})}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},47794:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/autogen-rag-ee3b1d222f3e10b1707527cdea69be50.gif"},48584:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/retrievechat-arch-959e180405c99ceb3da88a441c02f45e.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);