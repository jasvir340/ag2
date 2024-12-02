"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94837],{84509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(74848),s=t(28453);const r={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_sql_spider.ipynb",description:"Natural language text to SQL query using the Spider text-to-SQL benchmark.",source_notebook:"/notebook/agentchat_sql_spider.ipynb",tags:["SQL","tool/function"],title:"SQL Agent for Spider text-to-SQL benchmark"},a="SQL Agent for Spider text-to-SQL benchmark",i={id:"notebooks/agentchat_sql_spider",title:"SQL Agent for Spider text-to-SQL benchmark",description:"Natural language text to SQL query using the Spider text-to-SQL benchmark.",source:"@site/docs/notebooks/agentchat_sql_spider.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_sql_spider",permalink:"/ag2/docs/notebooks/agentchat_sql_spider",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_sql_spider.ipynb",tags:[{label:"SQL",permalink:"/ag2/docs/tags/sql"},{label:"tool/function",permalink:"/ag2/docs/tags/tool-function"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_sql_spider.ipynb",description:"Natural language text to SQL query using the Spider text-to-SQL benchmark.",source_notebook:"/notebook/agentchat_sql_spider.ipynb",tags:["SQL","tool/function"],title:"SQL Agent for Spider text-to-SQL benchmark"},sidebar:"notebooksSidebar",previous:{title:"SocietyOfMindAgent",permalink:"/ag2/docs/notebooks/agentchat_society_of_mind"},next:{title:"Interactive LLM Agent Dealing with Data Stream",permalink:"/ag2/docs/notebooks/agentchat_stream"}},l={},c=[{value:"Environment",id:"environment",level:2},{value:"Agent Implementation",id:"agent-implementation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"sql-agent-for-spider-text-to-sql-benchmark",children:"SQL Agent for Spider text-to-SQL benchmark"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/agentchat_sql_spider.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_sql_spider.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsx)(n.p,{children:"This notebook demonstrates a basic SQL agent that translates natural\nlanguage questions into SQL queries."}),"\n",(0,o.jsx)(n.h2,{id:"environment",children:"Environment"}),"\n",(0,o.jsxs)(n.p,{children:["For this demo, we use a SQLite database environment based on a standard\ntext-to-sql benchmark called\n",(0,o.jsx)(n.a,{href:"https://yale-lily.github.io/spider",children:"Spider"}),". The environment provides a\ngym-like interface and can be used as follows."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# %pip install spider-env\nimport json\nimport os\nfrom typing import Annotated, Dict\n\nfrom spider_env import SpiderEnv\n\nfrom autogen import ConversableAgent, UserProxyAgent, config_list_from_json\n\ngym = SpiderEnv()\n\n# Randomly select a question from Spider\nobservation, info = gym.reset()\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Loading cached Spider dataset from /home/wangdazhang/.cache/spider\nSchema file not found for /home/wangdazhang/.cache/spider/spider/database/flight_4\nSchema file not found for /home/wangdazhang/.cache/spider/spider/database/small_bank_1\nSchema file not found for /home/wangdazhang/.cache/spider/spider/database/icfp_1\nSchema file not found for /home/wangdazhang/.cache/spider/spider/database/twitter_1\nSchema file not found for /home/wangdazhang/.cache/spider/spider/database/epinions_1\nSchema file not found for /home/wangdazhang/.cache/spider/spider/database/chinook_1\nSchema file not found for /home/wangdazhang/.cache/spider/spider/database/company_1\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# The natural language question\nquestion = observation["instruction"]\nprint(question)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Find the famous titles of artists that do not have any volume.\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# The schema of the corresponding database\nschema = info["schema"]\nprint(schema)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'CREATE TABLE "artist" (\n"Artist_ID" int,\n"Artist" text,\n"Age" int,\n"Famous_Title" text,\n"Famous_Release_date" text,\nPRIMARY KEY ("Artist_ID")\n);\nCREATE TABLE "volume" (\n"Volume_ID" int,\n"Volume_Issue" text,\n"Issue_Date" text,\n"Weeks_on_Top" real,\n"Song" text,\n"Artist_ID" int,\nPRIMARY KEY ("Volume_ID"),\nFOREIGN KEY ("Artist_ID") REFERENCES "artist"("Artist_ID")\n);\nCREATE TABLE "music_festival" (\n"ID" int,\n"Music_Festival" text,\n"Date_of_ceremony" text,\n"Category" text,\n"Volume" int,\n"Result" text,\nPRIMARY KEY ("ID"),\nFOREIGN KEY ("Volume") REFERENCES "volume"("Volume_ID")\n);\n'})}),"\n",(0,o.jsx)(n.h2,{id:"agent-implementation",children:"Agent Implementation"}),"\n",(0,o.jsx)(n.p,{children:"Using AutoGen, a SQL agent can be implemented with a ConversableAgent.\nThe gym environment executes the generated SQL query and the agent can\ntake execution results as feedback to improve its generation in multiple\nrounds of conversations."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'os.environ["AUTOGEN_USE_DOCKER"] = "False"\nconfig_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST")\n\n\ndef check_termination(msg: Dict):\n    if "tool_responses" not in msg:\n        return False\n    json_str = msg["tool_responses"][0]["content"]\n    obj = json.loads(json_str)\n    return "error" not in obj or obj["error"] is None and obj["reward"] == 1\n\n\nsql_writer = ConversableAgent(\n    "sql_writer",\n    llm_config={"config_list": config_list},\n    system_message="You are good at writing SQL queries. Always respond with a function call to execute_sql().",\n    is_termination_msg=check_termination,\n)\nuser_proxy = UserProxyAgent("user_proxy", human_input_mode="NEVER", max_consecutive_auto_reply=5)\n\n\n@sql_writer.register_for_llm(description="Function for executing SQL query and returning a response")\n@user_proxy.register_for_execution()\ndef execute_sql(\n    reflection: Annotated[str, "Think about what to do"], sql: Annotated[str, "SQL query"]\n) -> Annotated[Dict[str, str], "Dictionary with keys \'result\' and \'error\'"]:\n    observation, reward, _, _, info = gym.step(sql)\n    error = observation["feedback"]["error"]\n    if not error and reward == 0:\n        error = "The SQL query returned an incorrect result"\n    if error:\n        return {\n            "error": error,\n            "wrong_result": observation["feedback"]["result"],\n            "correct_result": info["gold_result"],\n        }\n    else:\n        return {\n            "result": observation["feedback"]["result"],\n        }\n'})}),"\n",(0,o.jsx)(n.p,{children:"The agent can then take as input the schema and the text question, and\ngenerate the SQL query."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'message = f"""Below is the schema for a SQL database:\n{schema}\nGenerate a SQL query to answer the following question:\n{question}\n"""\n\nuser_proxy.initiate_chat(sql_writer, message=message)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'user_proxy (to sql_writer):\n\nBelow is the schema for a SQL database:\nCREATE TABLE "artist" (\n"Artist_ID" int,\n"Artist" text,\n"Age" int,\n"Famous_Title" text,\n"Famous_Release_date" text,\nPRIMARY KEY ("Artist_ID")\n);\nCREATE TABLE "volume" (\n"Volume_ID" int,\n"Volume_Issue" text,\n"Issue_Date" text,\n"Weeks_on_Top" real,\n"Song" text,\n"Artist_ID" int,\nPRIMARY KEY ("Volume_ID"),\nFOREIGN KEY ("Artist_ID") REFERENCES "artist"("Artist_ID")\n);\nCREATE TABLE "music_festival" (\n"ID" int,\n"Music_Festival" text,\n"Date_of_ceremony" text,\n"Category" text,\n"Volume" int,\n"Result" text,\nPRIMARY KEY ("ID"),\nFOREIGN KEY ("Volume") REFERENCES "volume"("Volume_ID")\n);\n\nGenerate a SQL query to answer the following question:\nFind the famous titles of artists that do not have any volume.\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nsql_writer (to user_proxy):\n\n***** Suggested tool Call (call_eAu0OEzS8l3QvN3jQSn4w0hJ): execute_sql *****\nArguments: \n{"reflection":"Generating SQL to find famous titles of artists without any volume","sql":"SELECT a.Artist, a.Famous_Title FROM artist a WHERE NOT EXISTS (SELECT 1 FROM volume v WHERE v.Artist_ID = a.Artist_ID)"}\n****************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION execute_sql...\nuser_proxy (to sql_writer):\n\nuser_proxy (to sql_writer):\n\n***** Response from calling tool "call_eAu0OEzS8l3QvN3jQSn4w0hJ" *****\n{"error": "The SQL query returned an incorrect result", "wrong_result": [["Ophiolatry", "Antievangelistical Process (re-release)"], ["Triumfall", "Antithesis of All Flesh"]], "correct_result": [["Antievangelistical Process (re-release)"], ["Antithesis of All Flesh"]]}\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nsql_writer (to user_proxy):\n\n***** Suggested tool Call (call_5LXoKqdZ17kPCOHJbbpSz2yk): execute_sql *****\nArguments: \n{"reflection":"Adjusting SQL to only select famous titles and exclude artist names for artists without any volume.","sql":"SELECT a.Famous_Title FROM artist a WHERE NOT EXISTS (SELECT 1 FROM volume v WHERE v.Artist_ID = a.Artist_ID)"}\n****************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION execute_sql...\nuser_proxy (to sql_writer):\n\nuser_proxy (to sql_writer):\n\n***** Response from calling tool "call_5LXoKqdZ17kPCOHJbbpSz2yk" *****\n{"result": [["Antievangelistical Process (re-release)"], ["Antithesis of All Flesh"]]}\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);