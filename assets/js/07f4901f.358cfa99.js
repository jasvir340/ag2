"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2870],{24911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=n(85893),o=n(11151);const s={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/gpt_assistant_agent_function_call.ipynb",description:"Use tools in a GPTAssistantAgent Multi-Agent System by utilizing functions such as calling an API and writing to a file.",source_notebook:"/notebook/gpt_assistant_agent_function_call.ipynb",tags:["OpenAI Assistant","tool/function"],title:"From Dad Jokes To Sad Jokes: Function Calling with GPTAssistantAgent"},i="From Dad Jokes To Sad Jokes: Function Calling with GPTAssistantAgent",r={id:"notebooks/gpt_assistant_agent_function_call",title:"From Dad Jokes To Sad Jokes: Function Calling with GPTAssistantAgent",description:"Use tools in a GPTAssistantAgent Multi-Agent System by utilizing functions such as calling an API and writing to a file.",source:"@site/docs/notebooks/gpt_assistant_agent_function_call.mdx",sourceDirName:"notebooks",slug:"/notebooks/gpt_assistant_agent_function_call",permalink:"/ag2/docs/notebooks/gpt_assistant_agent_function_call",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/gpt_assistant_agent_function_call.ipynb",tags:[{label:"OpenAI Assistant",permalink:"/ag2/docs/tags/open-ai-assistant"},{label:"tool/function",permalink:"/ag2/docs/tags/tool-function"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/gpt_assistant_agent_function_call.ipynb",description:"Use tools in a GPTAssistantAgent Multi-Agent System by utilizing functions such as calling an API and writing to a file.",source_notebook:"/notebook/gpt_assistant_agent_function_call.ipynb",tags:["OpenAI Assistant","tool/function"],title:"From Dad Jokes To Sad Jokes: Function Calling with GPTAssistantAgent"},sidebar:"notebooksSidebar",previous:{title:"A Uniform interface to call different LLMs",permalink:"/ag2/docs/notebooks/autogen_uniformed_api_calling"},next:{title:"Language Agent Tree Search",permalink:"/ag2/docs/notebooks/lats_search"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Creating the Functions",id:"creating-the-functions",level:2},{value:"Create Function Schemas",id:"create-function-schemas",level:2},{value:"Creating the Agents",id:"creating-the-agents",level:2},{value:"Set up the User Proxy",id:"set-up-the-user-proxy",level:3},{value:"The Dad Agent",id:"the-dad-agent",level:3},{value:"The Sad Joker Agent",id:"the-sad-joker-agent",level:3},{value:"Creating the Groupchat and Starting the Conversation",id:"creating-the-groupchat-and-starting-the-conversation",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"from-dad-jokes-to-sad-jokes-function-calling-with-gptassistantagent",children:"From Dad Jokes To Sad Jokes: Function Calling with GPTAssistantAgent"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/gpt_assistant_agent_function_call.ipynb",children:(0,a.jsx)(t.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/gpt_assistant_agent_function_call.ipynb",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsxs)(t.p,{children:["Autogen allows ",(0,a.jsx)(t.code,{children:"GPTAssistantAgent"})," to be augmented with \u201ctools\u201d \u2014\npre-defined functions or capabilities \u2014 that extend its ability to\nhandle specific tasks, similar to how one might natively utilize tools\nin the ",(0,a.jsx)(t.a,{href:"https://platform.openai.com/docs/assistants/tools",children:"OpenAI Assistant\u2019s\nAPI"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In this notebook, we create a basic Multi-Agent System using Autogen\u2019s\n",(0,a.jsx)(t.code,{children:"GPTAssistantAgent"})," to convert Dad jokes on a specific topic into Sad\njokes. It consists of a \u201cDad\u201d agent which has the ability to search the\n",(0,a.jsx)(t.a,{href:"https://icanhazdadjoke.com/api",children:"Dad Joke API"})," and a \u201cSad Joker\u201d agent\nwhich converts the Dad jokes into Sad jokes. The Sad Joker then writes\nthe sad jokes into a txt file."]}),"\n",(0,a.jsxs)(t.p,{children:["In this process we demonstrate how to call tools and perform function\ncalling for ",(0,a.jsx)(t.code,{children:"GPTAssistantAgent"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(t.p,{children:["AutoGen requires Python 3.8 or newer. For this notebook, please install\n",(0,a.jsx)(t.code,{children:"autogen"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"%pip install autogen\n"})}),"\n",(0,a.jsx)(t.p,{children:"Import Dependencies"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from typing import Annotated, Literal\n\nimport requests\n\nimport autogen\nfrom autogen import UserProxyAgent\nfrom autogen.agentchat.contrib.gpt_assistant_agent import GPTAssistantAgent\nfrom autogen.function_utils import get_function_schema\n\nconfig_list = autogen.config_list_from_json(\n    env_or_file="OAI_CONFIG_LIST",\n)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"creating-the-functions",children:"Creating the Functions"}),"\n",(0,a.jsx)(t.p,{children:"We need to create functions for our Agents to call."}),"\n",(0,a.jsx)(t.p,{children:"This function calls the Dad Joke API with a search term that the agent\ncreates and returns a list of dad jokes."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'def get_dad_jokes(search_term: str, page: int = 1, limit: int = 10) -> str:\n    """\n    Fetches a list of dad jokes based on a search term.\n\n    Parameters:\n    - search_term: The search term to find jokes about.\n    - page: The page number of results to fetch (default is 1).\n    - limit: The number of results to return per page (default is 20, max is 30).\n\n    Returns:\n    A list of dad jokes.\n    """\n    url = "https://icanhazdadjoke.com/search"\n    headers = {"Accept": "application/json"}\n    params = {"term": search_term, "page": page, "limit": limit}\n\n    response = requests.get(url, headers=headers, params=params)\n\n    if response.status_code == 200:\n        data = response.json()\n        jokes = [joke["joke"] for joke in data["results"]]\n        return jokes\n    else:\n        return f"Failed to fetch jokes, status code: {response.status_code}"\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Example Dad Jokes Function Usage:\njokes = get_dad_jokes("cats")\nprint(jokes)\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"['Where do cats write notes?\\r\\nScratch Paper!', 'It was raining cats and dogs the other day. I almost stepped in a poodle.', 'What do you call a group of disorganized cats? A cat-tastrophe.', 'I accidentally took my cats meds last night. Don\u2019t ask meow.', 'What do you call a pile of cats?  A Meowtain.', 'Animal Fact #25: Most bobcats are not named bob.']\n"})}),"\n",(0,a.jsx)(t.p,{children:"This function allows the Agents to write to a txt file."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'def write_to_txt(content: str, filename: str = "dad_jokes.txt"):\n    """\n    Writes a formatted string to a text file.\n    Parameters:\n\n    - content: The formatted string to write.\n    - filename: The name of the file to write to. Defaults to "output.txt".\n    """\n    with open(filename, "w") as file:\n        file.write(content)\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Example Write to TXT Function Usage:\ncontent = "\\n".join(jokes)  # Format the jokes from the above example\nwrite_to_txt(content)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"create-function-schemas",children:"Create Function Schemas"}),"\n",(0,a.jsxs)(t.p,{children:["In order to use the functions within our GPTAssistantAgents, we need to\ngenerate function schemas. This can be done by using\n",(0,a.jsx)(t.code,{children:"get_function_schema"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Assistant API Tool Schema for get_dad_jokes\nget_dad_jokes_schema = get_function_schema(\n    get_dad_jokes,\n    name="get_dad_jokes",\n    description="Fetches a list of dad jokes based on a search term. Allows pagination with page and limit parameters.",\n)\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Assistant API Tool Schema for write_to_txt\nwrite_to_txt_schema = get_function_schema(\n    write_to_txt,\n    name="write_to_txt",\n    description="Writes a formatted string to a text file. If the file does not exist, it will be created. If the file does exist, it will be overwritten.",\n)\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"The return type of the function 'write_to_txt' is not annotated. Although annotating it is optional, the function should return either a string, a subclass of 'pydantic.BaseModel'.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"creating-the-agents",children:"Creating the Agents"}),"\n",(0,a.jsx)(t.p,{children:"In this section we create and configure our Dad and Sad Joker Agents"}),"\n",(0,a.jsx)(t.h3,{id:"set-up-the-user-proxy",children:"Set up the User Proxy"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'user_proxy = UserProxyAgent(\n    name="user_proxy",\n    is_termination_msg=lambda msg: "TERMINATE" in msg["content"],\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=1,\n)\n'})}),"\n",(0,a.jsx)(t.h3,{id:"the-dad-agent",children:"The Dad Agent"}),"\n",(0,a.jsxs)(t.p,{children:["We create the Dad agent using ",(0,a.jsx)(t.code,{children:"GPTAssistantAgent"}),", in order for us to\nenable the Dad to use the ",(0,a.jsx)(t.code,{children:"get_dad_jokes"})," function we need to provide it\nthe function\u2019s specification in our ",(0,a.jsx)(t.code,{children:"llm_config"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["We format the ",(0,a.jsx)(t.code,{children:"tools"})," within our ",(0,a.jsx)(t.code,{children:"llm_config"})," in the same format as\nprovided in the ",(0,a.jsx)(t.a,{href:"https://platform.openai.com/docs/assistants/tools/function-calling",children:"OpenAI Assistant tools\ndocs"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"the_dad = GPTAssistantAgent(\n    name=\"the_dad\",\n    instructions=\"\"\"\n    As 'The Dad', your primary role is to entertain by fetching dad jokes which the sad joker will transform into 'sad jokes' based on a given theme. When provided with a theme, such as 'plants' or 'animals', your task is as follows:\n\n    1. Use the 'get_dad_jokes' function to search for dad jokes related to the provided theme by providing a search term related to the theme. Fetch a list of jokes that are relevant to the theme.\n    2. Present these jokes to the sad joker in a format that is clear and easy to read, preparing them for transformation.\n\n    Remember, the team's goal is to creatively adapt the essence of each dad joke to fit the 'sad joke' format, all while staying true to the theme provided by the user.\n    \"\"\",\n    overwrite_instructions=True,  # overwrite any existing instructions with the ones provided\n    overwrite_tools=True,  # overwrite any existing tools with the ones provided\n    llm_config={\n        \"config_list\": config_list,\n        \"tools\": [get_dad_jokes_schema],\n    },\n)\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"OpenAI client config of GPTAssistantAgent(the_dad) - model: gpt-4-1106-preview\nMatching assistant found, using the first matching assistant: {'id': 'asst_BLBUwYPugb1UR2jQMGAA7RtU', 'created_at': 1714660644, 'description': None, 'file_ids': [], 'instructions': \"\\n    As 'The Dad', your primary role is to entertain by fetching dad jokes which the sad joker will transform into 'sad jokes' based on a given theme. When provided with a theme, such as 'plants' or 'animals', your task is as follows:\\n\\n    1. Use the 'get_dad_jokes' function to search for dad jokes related to the provided theme by providing a search term related to the theme. Fetch a list of jokes that are relevant to the theme.\\n    2. Present these jokes to the sad joker in a format that is clear and easy to read, preparing them for transformation.\\n\\n    Remember, the team's goal is to creatively adapt the essence of each dad joke to fit the 'sad joke' format, all while staying true to the theme provided by the user.\\n    \", 'metadata': {}, 'model': 'gpt-4-1106-preview', 'name': 'the_dad', 'object': 'assistant', 'tools': [ToolFunction(function=FunctionDefinition(name='get_dad_jokes', description='Fetches a list of dad jokes based on a search term. Allows pagination with page and limit parameters.', parameters={'type': 'object', 'properties': {'search_term': {'type': 'string', 'description': 'search_term'}, 'page': {'type': 'integer', 'default': 1, 'description': 'page'}, 'limit': {'type': 'integer', 'default': 10, 'description': 'limit'}}, 'required': ['search_term']}), type='function')]}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Next, we register the ",(0,a.jsx)(t.code,{children:"get_dad_jokes"})," function with the Dad\n",(0,a.jsx)(t.code,{children:"GPTAssistantAgent"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Register get_dad_jokes with the_dad GPTAssistantAgent\nthe_dad.register_function(\n    function_map={\n        "get_dad_jokes": get_dad_jokes,\n    },\n)\n'})}),"\n",(0,a.jsx)(t.h3,{id:"the-sad-joker-agent",children:"The Sad Joker Agent"}),"\n",(0,a.jsx)(t.p,{children:"We then create and configure the Sad Joker agent in a similar manner to\nthe Dad agent above."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"the_sad_joker = GPTAssistantAgent(\n    name=\"the_sad_joker\",\n    instructions=\"\"\"\n    As 'The Sad Joker', your unique role is to take dad jokes and creatively transform them into 'sad jokes'. When you receive a list of dad jokes, themed around topics like 'plants' or 'animals', you should:\n\n    1. Read through each dad joke carefully, understanding its theme and punchline.\n    2. Creatively alter the joke to change its mood from humorous to somber or melancholic. This may involve tweaking the punchline, modifying the setup, or even completely reimagining the joke while keeping it relevant to the original theme.\n    3. Ensure your transformations maintain a clear connection to the original theme and are understandable as adaptations of the dad jokes provided.\n    4. Write your transformed sad jokes to a text file using the 'write_to_txt' function. Use meaningful file names that reflect the theme or the nature of the jokes within, unless a specific filename is requested.\n\n    Your goal is not just to alter the mood of the jokes but to do so in a way that is creative, thoughtful, and respects the essence of the original humor. Remember, while the themes might be light-hearted, your transformations should offer a melancholic twist that makes them uniquely 'sad jokes'.\n    \"\"\",\n    overwrite_instructions=True,  # overwrite any existing instructions with the ones provided\n    overwrite_tools=True,  # overwrite any existing tools with the ones provided\n    llm_config={\n        \"config_list\": config_list,\n        \"tools\": [write_to_txt_schema],\n    },\n)\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"OpenAI client config of GPTAssistantAgent(the_sad_joker) - model: gpt-4-1106-preview\nMatching assistant found, using the first matching assistant: {'id': 'asst_HzB75gkobafXZhkuIAmiBiai', 'created_at': 1714660668, 'description': None, 'file_ids': [], 'instructions': \"\\n    As 'The Sad Joker', your unique role is to take dad jokes and creatively transform them into 'sad jokes'. When you receive a list of dad jokes, themed around topics like 'plants' or 'animals', you should:\\n\\n    1. Read through each dad joke carefully, understanding its theme and punchline.\\n    2. Creatively alter the joke to change its mood from humorous to somber or melancholic. This may involve tweaking the punchline, modifying the setup, or even completely reimagining the joke while keeping it relevant to the original theme.\\n    3. Ensure your transformations maintain a clear connection to the original theme and are understandable as adaptations of the dad jokes provided.\\n    4. Write your transformed sad jokes to a text file using the 'write_to_txt' function. Use meaningful file names that reflect the theme or the nature of the jokes within, unless a specific filename is requested.\\n\\n    Your goal is not just to alter the mood of the jokes but to do so in a way that is creative, thoughtful, and respects the essence of the original humor. Remember, while the themes might be light-hearted, your transformations should offer a melancholic twist that makes them uniquely 'sad jokes'.\\n    \", 'metadata': {}, 'model': 'gpt-4-1106-preview', 'name': 'the_sad_joker', 'object': 'assistant', 'tools': [ToolFunction(function=FunctionDefinition(name='write_to_txt', description='Writes a formatted string to a text file. If the file does not exist, it will be created. If the file does exist, it will be overwritten.', parameters={'type': 'object', 'properties': {'content': {'type': 'string', 'description': 'content'}, 'filename': {'type': 'string', 'default': 'dad_jokes.txt', 'description': 'filename'}}, 'required': ['content']}), type='function')]}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Register the ",(0,a.jsx)(t.code,{children:"write_to_txt"})," function with the Sad Joker\n",(0,a.jsx)(t.code,{children:"GPTAssistantAgent"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Register get_dad_jokes with the_dad GPTAssistantAgent\nthe_sad_joker.register_function(\n    function_map={\n        "write_to_txt": write_to_txt,\n    },\n)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"creating-the-groupchat-and-starting-the-conversation",children:"Creating the Groupchat and Starting the Conversation"}),"\n",(0,a.jsx)(t.p,{children:"Create the groupchat"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'groupchat = autogen.GroupChat(agents=[user_proxy, the_dad, the_sad_joker], messages=[], max_round=15)\ngroup_chat_manager = autogen.GroupChatManager(groupchat=groupchat, llm_config={"config_list": config_list})\n'})}),"\n",(0,a.jsx)(t.p,{children:"Start the Conversation"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'user_proxy.initiate_chat(group_chat_manager, message="Jokes about cats")\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:'user_proxy (to chat_manager):\n\nJokes about cats\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION get_dad_jokes...\nthe_dad (to chat_manager):\n\nHere are some cat-themed dad jokes for the sad joker to transform:\n\n1. Where do cats write notes? Scratch Paper!\n2. It was raining cats and dogs the other day. I almost stepped in a poodle.\n3. What do you call a group of disorganized cats? A cat-tastrophe.\n4. I accidentally took my cat\'s meds last night. Don\u2019t ask meow.\n5. What do you call a pile of cats? A Meowtain.\n6. Animal Fact #25: Most bobcats are not named Bob.\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION write_to_txt...\nthe_sad_joker (to chat_manager):\n\nThe cat-themed sad jokes have been transformed and saved to a text file named "sad_cat_jokes.txt".\n\n\n--------------------------------------------------------------------------------\nuser_proxy (to chat_manager):\n\n\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"ChatResult(chat_id=None, chat_history=[{'content': 'Jokes about cats', 'role': 'assistant'}, {'content': \"Here are some cat-themed dad jokes for the sad joker to transform:\\n\\n1. Where do cats write notes? Scratch Paper!\\n2. It was raining cats and dogs the other day. I almost stepped in a poodle.\\n3. What do you call a group of disorganized cats? A cat-tastrophe.\\n4. I accidentally took my cat's meds last night. Don\u2019t ask meow.\\n5. What do you call a pile of cats? A Meowtain.\\n6. Animal Fact #25: Most bobcats are not named Bob.\\n\", 'name': 'the_dad', 'role': 'user'}, {'content': 'The cat-themed sad jokes have been transformed and saved to a text file named \"sad_cat_jokes.txt\".\\n', 'name': 'the_sad_joker', 'role': 'user'}, {'content': '', 'role': 'assistant'}], summary='', cost=({'total_cost': 0.0278, 'gpt-4-1106-preview': {'cost': 0.0278, 'prompt_tokens': 2744, 'completion_tokens': 12, 'total_tokens': 2756}}, {'total_cost': 0.02194, 'gpt-4-1106-preview': {'cost': 0.02194, 'prompt_tokens': 2167, 'completion_tokens': 9, 'total_tokens': 2176}}), human_input=[])\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(67294);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);