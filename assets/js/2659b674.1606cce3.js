"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7e4],{74420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(74848),o=n(28453);const s={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/prompting-and-reasoning/react.ipynb",source_notebook:"/website/docs/topics/prompting-and-reasoning/react.ipynb",title:"ReAct"},i="ReAct",r={id:"topics/prompting-and-reasoning/react",title:"ReAct",description:"Open In Colab",source:"@site/docs/topics/prompting-and-reasoning/react.mdx",sourceDirName:"topics/prompting-and-reasoning",slug:"/topics/prompting-and-reasoning/react",permalink:"/ag2/docs/topics/prompting-and-reasoning/react",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/prompting-and-reasoning/react.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/prompting-and-reasoning/react.ipynb",source_notebook:"/website/docs/topics/prompting-and-reasoning/react.ipynb",title:"ReAct"},sidebar:"docsSidebar",previous:{title:"LLM Configuration",permalink:"/ag2/docs/topics/llm_configuration"},next:{title:"LLM Reflection",permalink:"/ag2/docs/topics/prompting-and-reasoning/reflection"}},h={},c=[{value:"Define and add tools/actions you want LLM agent(s) to use",id:"define-and-add-toolsactions-you-want-llm-agents-to-use",level:3},{value:"Construct your ReAct prompt",id:"construct-your-react-prompt",level:3},{value:"Construct agents and initiate agent chats",id:"construct-agents-and-initiate-agent-chats",level:3},{value:"ReAct with memory module enabled via teachability",id:"react-with-memory-module-enabled-via-teachability",level:3},{value:"Let\u2019s now ask the same question again to see if the assistant has remembered this.",id:"lets-now-ask-the-same-question-again-to-see-if-the-assistant-has-remembered-this.",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"react",children:"ReAct"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/website/docs/topics/prompting-and-reasoning/react.ipynb",children:(0,a.jsx)(t.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/ag2ai/ag2/blob/main/website/docs/topics/prompting-and-reasoning/react.ipynb",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsxs)(t.p,{children:["AutoGen supports different LLM prompting and reasoning strategies, such\nas ReAct, Reflection/Self-Critique, and more. This page demonstrates how\nto realize ReAct (",(0,a.jsx)(t.a,{href:"https://arxiv.org/abs/2210.03629",children:"Yao et al., 2022"}),")\nwith AutoGen."]}),"\n",(0,a.jsx)(t.p,{children:"First make sure required packages are installed."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'! pip install "pyautogen>=0.2.18" "tavily-python"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Import the relevant modules and configure the LLM. See ",(0,a.jsx)(t.a,{href:"../../../docs/topics/llm_configuration",children:"LLM\nConfiguration"})," for how to\nconfigure LLMs."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'import os\nfrom typing import Annotated\n\nfrom tavily import TavilyClient\n\nfrom autogen import AssistantAgent, UserProxyAgent, config_list_from_json, register_function\nfrom autogen.agentchat.contrib.capabilities import teachability\nfrom autogen.cache import Cache\nfrom autogen.coding import DockerCommandLineCodeExecutor, LocalCommandLineCodeExecutor\n\nconfig_list = [\n    {"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]},\n    {"model": "gpt-3.5-turbo", "api_key": os.environ["OPENAI_API_KEY"]},\n]\n# You can also use the following method to load the config list from a file or environment variable.\n# config_list = config_list_from_json(env_or_file="OAI_CONFIG_LIST")\n'})}),"\n",(0,a.jsx)(t.h3,{id:"define-and-add-toolsactions-you-want-llm-agents-to-use",children:"Define and add tools/actions you want LLM agent(s) to use"}),"\n",(0,a.jsxs)(t.p,{children:["We use ",(0,a.jsx)(t.a,{href:"https://docs.tavily.com/docs/tavily-api/python-sdk",children:"Tavily"})," as a\ntool for searching the web."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'tavily = TavilyClient(api_key=os.environ["TAVILY_API_KEY"])\n\n\ndef search_tool(query: Annotated[str, "The search query"]) -> Annotated[str, "The search results"]:\n    return tavily.get_search_context(query=query, search_depth="advanced")\n'})}),"\n",(0,a.jsx)(t.h3,{id:"construct-your-react-prompt",children:"Construct your ReAct prompt"}),"\n",(0,a.jsxs)(t.p,{children:["Here we are constructing a general ReAct prompt and a custom message\nfunction ",(0,a.jsx)(t.code,{children:"react_prompt_message"})," based on the ReAct prompt."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# NOTE: this ReAct prompt is adapted from Langchain\'s ReAct agent: https://github.com/langchain-ai/langchain/blob/master/libs/langchain/langchain/agents/react/agent.py#L79\nReAct_prompt = """\nAnswer the following questions as best you can. You have access to tools provided.\n\nUse the following format:\n\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take\nAction Input: the input to the action\nObservation: the result of the action\n... (this process can repeat multiple times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n\nBegin!\nQuestion: {input}\n"""\n\n# Define the ReAct prompt message. Assuming a "question" field is present in the context\n\n\ndef react_prompt_message(sender, recipient, context):\n    return ReAct_prompt.format(input=context["question"])\n'})}),"\n",(0,a.jsx)(t.h3,{id:"construct-agents-and-initiate-agent-chats",children:"Construct agents and initiate agent chats"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Setting up code executor.\nos.makedirs("coding", exist_ok=True)\n# Use docker executor for running code in a container if you have docker installed.\n# code_executor = DockerCommandLineCodeExecutor(work_dir="coding")\ncode_executor = LocalCommandLineCodeExecutor(work_dir="coding")\n\nuser_proxy = UserProxyAgent(\n    name="User",\n    is_termination_msg=lambda x: x.get("content", "") and x.get("content", "").rstrip().endswith("TERMINATE"),\n    human_input_mode="ALWAYS",\n    max_consecutive_auto_reply=10,\n    code_execution_config={"executor": code_executor},\n)\n\nassistant = AssistantAgent(\n    name="Assistant",\n    system_message="Only use the tools you have been provided with. Reply TERMINATE when the task is done.",\n    llm_config={"config_list": config_list, "cache_seed": None},\n)\n\n# Register the search tool.\nregister_function(\n    search_tool,\n    caller=assistant,\n    executor=user_proxy,\n    name="search_tool",\n    description="Search the web for the given query",\n)\n\n# Cache LLM responses. To get different responses, change the cache_seed value.\nwith Cache.disk(cache_seed=43) as cache:\n    user_proxy.initiate_chat(\n        assistant,\n        message=react_prompt_message,\n        question="What is the result of super bowl 2024?",\n        cache=cache,\n    )\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:'User (to Assistant):\n\n\nAnswer the following questions as best you can. You have access to tools provided.\n\nUse the following format:\n\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take\nAction Input: the input to the action\nObservation: the result of the action\n... (this process can repeat multiple times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n\nBegin!\nQuestion: What is the result of super bowl 2024?\n\n\n--------------------------------------------------------------------------------\nAssistant (to User):\n\nThought: I don\'t have this information readily available. I will use the search tool to look it up.\nAction: Use the search_tool from the provided functions to search for the result of the Super Bowl 2024.\nAction Input: { "query": "Super Bowl 2024 result" }\n***** Suggested tool Call (call_xZ30S6DmmTrIJKUziSAqpkSn): search_tool *****\nArguments: \n\n{\n"query": "Super Bowl 2024 result"\n}\n****************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION search_tool...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool "call_xZ30S6DmmTrIJKUziSAqpkSn" *****\n"[\\"{\\\\\\"url\\\\\\": \\\\\\"https://www.cbsnews.com/live-updates/super-bowl-2024-chiefs-49ers-game-coverage/\\\\\\", \\\\\\"content\\\\\\": \\\\\\"\\\\\\\\\\\\\\"\\\\\\\\nThe Chiefs reached the Super Bowl the hard way, with back-to-back road playoff wins against the Buffalo Bills in the divisional round and then the Ravens in the conference championship \\\\\\\\u2014 the first time in his career Mahomes has been forced to play road playoff games.\\\\\\\\n Watch CBS News\\\\\\\\nSuper Bowl 2024 live updates as Chiefs and 49ers prepare for today\'s show down\\\\\\\\nBy Faris Tanyos, Aliza Chasan, Joe Ruiz, Gina Martinez, S. Dev\\\\\\\\nUpdated on:\\\\\\\\nFebruary 11, 2024 / 6:37 PM EST\\\\\\\\n/ CBS News\\\\\\\\nThe Kansas City Chiefs will look to become the first back-to-back Super Bowl champion in two decades when they take on the San Francisco 49ers today in Las Vegas.\\\\\\\\n What to know about San Francisco 49ers quarterback Brock Purdy\\\\\\\\nOne of the most improbable stories of Super Bowl LVIII is that of San Francisco 49ers quarterback Brock Purdy, who has gone from being \\\\\\\\\\\\\\"Mr. Irrelevant,\\\\\\\\\\\\\\" as the final pick of the 2022 NFL Draft, to a bonafide star, leading his team to the cusp of an NFL title in less than two years.\\\\\\\\n The 24-year-old, who set records at Iowa State after receiving Player of the Year honors at Perry High School in Gilbert, Arizona, is attempting to become the third quarterback after Joe Montana and Steve Young to lead the 49ers to a Super Bowl victory, and the franchise\'s sixth Lombardi Trophy.\\\\\\\\n \\\\\\\\\\\\\\"The more technologically savvy we become: look around the stadium, the scoreboards, the lighting, you know, all of the different technology that makes this a spectacular game, these are all increases in the attack surface that people can target,\\\\\\\\\\\\\\" said Cathy Lanier, the NFL\'s chief security officer.\\\\\\\\n\\\\\\"}\\", \\"{\\\\\\"url\\\\\\": \\\\\\"https://www.cbssports.com/nfl/news/2024-super-bowl-chiefs-vs-49ers-score-patrick-mahomes-leads-ot-comeback-as-k-c-wins-back-to-back-titles/live/\\\\\\", \\\\\\"content\\\\\\": \\\\\\"The championship-winning drive, which included a fourth-and-1 scramble from Mahomes and a clutch 7-yard catch from tight end Travis Kelce, was a must-score for K.C. The NFL\'s new playoff overtime rules -- both teams are guaranteed at least one possession in the extra period -- were in effect for the first time, and the Chiefs needed to answer the Niners\' field goal.\\\\\\\\n Held out of the end zone until that point, Kansas City grabbed its first lead of the game at 13-10.\\\\\\\\nJennings\' touchdown receiving (followed by a missed extra point) concluded a 75-yard drive that put the Niners back on top, 16-13, as the wideout joined former Philadelphia Eagles quarterback Nick Foles as the only players to throw and catch a touchdown in a Super Bowl.\\\\\\\\n He spread the ball around -- eight pass-catchers had at least two receptions -- slowly but surely overcoming a threatening 49ers defense that knocked him off his spot consistently in the first half.\\\\\\\\nMahomes, with his third Super Bowl MVP, now sits alongside Tom Brady (five) and Joe Montana (three) atop the mountain while becoming just the third player to win the award back-to-back, joining Bart Starr (I-II) and Terry Bradshaw (XIII-XIV).\\\\\\\\n The muffed punt that bounced off of cornerback Darrell Luter Jr.\'s ankle was also the big break that the Chiefs needed as they scored on the very next play to take the lead for the first time in the game. College Pick\'em\\\\\\\\nA Daily SportsLine Betting Podcast\\\\\\\\nNFL Playoff Time!\\\\\\\\n2024 Super Bowl, Chiefs vs. 49ers score: Patrick Mahomes leads OT comeback as K.C. wins back-to-back titles\\\\\\\\nCall it a dynasty; the Chiefs are the first team to win consecutive Super Bowls since 2003-04\\\\\\\\nThe Kansas City Chiefs are Super Bowl champions, again.\\\\\\"}\\", \\"{\\\\\\"url\\\\\\": \\\\\\"https://www.espn.com/nfl/story/_/id/39480722/49ers-chiefs-live-super-bowl-lviii-updates-moments-highlights\\\\\\", \\\\\\"content\\\\\\": \\\\\\"With a relentless defense and opportune plays by their star quarterback -- including a pair of gutsy overtime scrambles -- the Chiefs won their third Super Bowl in five years in a 25-22 overtime victory against the San Francisco 49ers in only the second overtime game in Super Bowl history.\\\\\\\\n Staff\\\\\\\\nTaylor Swift supports Travis Kelce, chugs drink at Super Bowl LVIII10hTory Barron\\\\\\\\nAfter posting a losing record in December, the Chiefs embraced an underdog, villain mentality throughout the postseason, upsetting three teams en route to their second consecutive Super Bowl title, becoming the ninth team to repeat as Super Bowl champions and first since the 2004 New England Patriots.\\\\\\\\n ESPN\\\\\\\\nSuper Bowl 2024 - Highlights from Chiefs\' win vs. 49ers\\\\\\\\nMike Tannenbaum and Tim Hasselbeck react to the Chiefs\' thrilling overtime victory over the 49ers in the Super Bowl. The 49ers had the ball with 2:51 to go in a tied game, but a signature Steve Spagnuolo blitz on third down late in the fourth quarter forced a 49ers field goal. Led by their captains, most of the Chiefs arrived to Allegiant Stadium in Las Vegas on Sunday in all black, signaling a steely resolve to upset Brock Purdy and the NFC\'s best offensive ensemble.\\\\\\\\n\\\\\\"}\\", \\"{\\\\\\"url\\\\\\": \\\\\\"https://www.sportingnews.com/us/nfl/news/super-bowl-2024-live-score-49ers-chiefs-results-highlights/0c440aa7145b809ed174d8ff\\\\\\", \\\\\\"content\\\\\\": \\\\\\"Super Bowl start time\\\\\\\\nSuper Bowl 58 between the Chiefs and 49ers is set to kick off at 6:30 p.m. ET (3:30 p.m. local time) in Las Vegas, Nev.\\\\\\\\n6:30 p.m. ET has become the standard start time for Super Bowls and is preceded by performances of \\\\\\\\\\\\\\"Lift Every Voice and Sing,\\\\\\\\\\\\\\" \\\\\\\\\\\\\\"America the Beautiful,\\\\\\\\\\\\\\" and \\\\\\\\\\\\\\"The Star-Spangled Banner. Brock Purdy drops a dime to Chris Conley on 3rd & 9 \\\\\\\\ud83c\\\\\\\\udfaf\\\\\\\\n\\\\\\\\ud83d\\\\\\\\udcfa: #SBLVIII on CBS\\\\\\\\n\\\\\\\\ud83d\\\\\\\\udcf1: Stream on #NFLPlus https://t.co/dClcEDViWl pic.twitter.com/Oa10d7khdl\\\\\\\\n7:10 p.m. \\\\\\\\u2014 The 49ers are relying heavily on McCaffrey, who takes the ball on each of the first three snaps on this drive. \\\\\\\\ud83d\\\\\\\\udcfa: #SBLVIII on CBS\\\\\\\\n\\\\\\\\ud83d\\\\\\\\udcf1: Stream on #NFLPlus https://t.co/dClcEDViWl pic.twitter.com/yUc00MtP84\\\\\\\\n7:24 p.m. \\\\\\\\u2014 The 49ers force a 3rd & 1, but Rashee Rice is easily able to pick up the first and one or two more yards.\\\\\\\\n49ers 3, Chiefs 0\\\\\\\\n7:19 p.m. MORE SUPER BOWL 58:\\\\\\\\n\\\\\\\\u2022\\\\\\\\u00a0 Inside Taylor Swift and Travis Kelce\'s whirlwind dating timeline\\\\\\\\n\\\\\\\\u2022. Ranking the thriving Mike and Kyle Shanahan coaching tree\\\\\\\\n\\\\\\\\u2022. Tracking every Super Bowl 58 commercial\\\\\\\\nWhat channel is the Super Bowl on?\\\\\\\\nSuper Bowl 58 will be broadcast nationally on CBS. PURDY TO JENNINGS TO CMC FOR SIX \\\\\\\\ud83d\\\\\\\\udd25\\\\\\\\n\\\\\\\\ud83d\\\\\\\\udcfa: #SBLVIII on CBS\\\\\\\\n\\\\\\\\ud83d\\\\\\\\udcf1: Stream on #NFLPlus https://t.co/dClcEDViWl pic.twitter.com/ktiTXIiHzS\\\\\\\\n7:47 p.m. \\\\\\\\u2014 L\'Jarius Sneed, who was on the other side of this two weeks ago, gets hit with an unsportsmanlike conduct penalty and and gives the 49ers their 11th first down.\\\\\\"}\\", \\"{\\\\\\"url\\\\\\": \\\\\\"https://apnews.com/live/super-bowl-2024-updates\\\\\\", \\\\\\"content\\\\\\": \\\\\\"Throw in the fact that Chiefs coach Andy Reid will be in his fifth Super Bowl, the third most in NFL history, and has a chance to win a third ring, and the knowledge on the Kansas City sideline will be an advantage too big for the 49ers to overcome.\\\\\\\\n She performed in Japan on Saturday night before a flight across nine time zones and the international date line to reach the U.S.\\\\\\\\nRihanna performs during halftime of the NFL Super Bowl 57 football game between the Philadelphia Eagles and the Kansas City Chiefs, Sunday, Feb. 12, 2023, in Glendale, Ariz. (AP Photo/David J. Phillip)\\\\\\\\n After the teams take the field, Post Malone will perform \\\\\\\\u201cAmerica the Beautiful\\\\\\\\u201d and Reba McEntire will sing \\\\\\\\u201cThe Star-Spangled Banner.\\\\\\\\u201d\\\\\\\\nSan Francisco 49ers quarterback Brock Purdy (13) warms up before the NFL Super Bowl 58 football game against the Kansas City Chiefs, Sunday, Feb. 11, 2024, in Las Vegas. He was also the referee when the Chiefs beat the 49ers in the Super Bowl four years ago \\\\\\\\u2014 and when the Rams beat the Saints in the 2019 NFC championship game after an infamous missed call.\\\\\\\\n Purdy\\\\\\\\u2019s comeback from the injury to his throwing arm suffered in last season\\\\\\\\u2019s NFC championship loss to the Philadelphia Eagles has been part of the storybook start to his career that started as Mr. Irrelevant as the 262nd pick in the 2022 draft.\\\\\\\\n\\\\\\"}\\"]"\n**********************************************************************\n\n--------------------------------------------------------------------------------\nAssistant (to User):\n\nObservation: According to the search results, The Kansas City Chiefs won the Super Bowl 2024 against the San Francisco 49ers with a score of 25-22 in an overtime victory. This victory made the Chiefs the first team to win consecutive Super Bowls since 2003-04.\n\nThought: I now know the final result of Super Bowl 2024.\nFinal Answer: The Kansas City Chiefs won the Super Bowl 2024 against the San Francisco 49ers in an overtime victory with a score of 25-22.\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,a.jsx)(t.h3,{id:"react-with-memory-module-enabled-via-teachability",children:"ReAct with memory module enabled via teachability"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Instantiate the Teachability capability. Its parameters are all optional.\nteachability = teachability.Teachability(\n    verbosity=0,  # 0 for basic info, 1 to add memory operations, 2 for analyzer messages, 3 for memo lists.\n    reset_db=True,\n    path_to_db_dir="./tmp/notebook/teachability_db",\n    recall_threshold=1.5,  # Higher numbers allow more (but less relevant) memos to be recalled.\n)\n\n# Now add the Teachability capability to the agent.\nteachability.add_to_agent(assistant)\n\nwith Cache.disk(cache_seed=44) as cache:\n    user_proxy.initiate_chat(\n        assistant,\n        message=react_prompt_message,\n        question="What is the result of super bowl 2024?",\n        cache=cache,\n    )\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:'\nCLEARING MEMORY\nUser (to Assistant):\n\n\nAnswer the following questions as best you can. You have access to tools provided.\n\nUse the following format:\n\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take\nAction Input: the input to the action\nObservation: the result of the action\n... (this process can repeat multiple times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n\nBegin!\nQuestion: What is the result of super bowl 2024?\n\n\n--------------------------------------------------------------------------------\nAssistant (to User):\n\nThought: I need to search for the result of Super Bowl 2024.\nAction: Use the search_tool to find the result of Super Bowl 2024.\nAction Input: {"query": "Super Bowl 2024 result"}\n***** Suggested tool Call (call_zIK7cS9Gluug8D7O9fpEUfwT): search_tool *****\nArguments: \n\n{\n"query": "Super Bowl 2024 result"\n}\n****************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> NO HUMAN INPUT RECEIVED.\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION search_tool...\nUser (to Assistant):\n\nUser (to Assistant):\n\n***** Response from calling tool "call_zIK7cS9Gluug8D7O9fpEUfwT" *****\n"[\\"{\\\\\\"url\\\\\\": \\\\\\"https://www.espn.com/nfl/story/_/id/39480722/49ers-chiefs-live-super-bowl-lviii-updates-moments-highlights\\\\\\", \\\\\\"content\\\\\\": \\\\\\"With a relentless defense and opportune plays by their star quarterback -- including a pair of gutsy overtime scrambles -- the Chiefs won their third Super Bowl in five years in a 25-22 overtime victory against the San Francisco 49ers in only the second overtime game in Super Bowl history.\\\\\\\\n Staff\\\\\\\\nTaylor Swift supports Travis Kelce, chugs drink at Super Bowl LVIII10hTory Barron\\\\\\\\nAfter posting a losing record in December, the Chiefs embraced an underdog, villain mentality throughout the postseason, upsetting three teams en route to their second consecutive Super Bowl title, becoming the ninth team to repeat as Super Bowl champions and first since the 2004 New England Patriots.\\\\\\\\n ESPN\\\\\\\\nSuper Bowl 2024 - Highlights from Chiefs\' win vs. 49ers\\\\\\\\nMike Tannenbaum and Tim Hasselbeck react to the Chiefs\' thrilling overtime victory over the 49ers in the Super Bowl. The 49ers had the ball with 2:51 to go in a tied game, but a signature Steve Spagnuolo blitz on third down late in the fourth quarter forced a 49ers field goal. Led by their captains, most of the Chiefs arrived to Allegiant Stadium in Las Vegas on Sunday in all black, signaling a steely resolve to upset Brock Purdy and the NFC\'s best offensive ensemble.\\\\\\\\n\\\\\\"}\\", \\"{\\\\\\"url\\\\\\": \\\\\\"https://www.sportingnews.com/us/nfl/news/super-bowl-2024-live-score-49ers-chiefs-results-highlights/0c440aa7145b809ed174d8ff\\\\\\", \\\\\\"content\\\\\\": \\\\\\"Super Bowl start time\\\\\\\\nSuper Bowl 58 between the Chiefs and 49ers is set to kick off at 6:30 p.m. ET (3:30 p.m. local time) in Las Vegas, Nev.\\\\\\\\n6:30 p.m. ET has become the standard start time for Super Bowls and is preceded by performances of \\\\\\\\\\\\\\"Lift Every Voice and Sing,\\\\\\\\\\\\\\" \\\\\\\\\\\\\\"America the Beautiful,\\\\\\\\\\\\\\" and \\\\\\\\\\\\\\"The Star-Spangled Banner. Brock Purdy drops a dime to Chris Conley on 3rd & 9 \\\\\\\\ud83c\\\\\\\\udfaf\\\\\\\\n\\\\\\\\ud83d\\\\\\\\udcfa: #SBLVIII on CBS\\\\\\\\n\\\\\\\\ud83d\\\\\\\\udcf1: Stream on #NFLPlus https://t.co/dClcEDViWl pic.twitter.com/Oa10d7khdl\\\\\\\\n7:10 p.m. \\\\\\\\u2014 The 49ers are relying heavily on McCaffrey, who takes the ball on each of the first three snaps on this drive. \\\\\\\\ud83d\\\\\\\\udcfa: #SBLVIII on CBS\\\\\\\\n\\\\\\\\ud83d\\\\\\\\udcf1: Stream on #NFLPlus https://t.co/dClcEDViWl pic.twitter.com/yUc00MtP84\\\\\\\\n7:24 p.m. \\\\\\\\u2014 The 49ers force a 3rd & 1, but Rashee Rice is easily able to pick up the first and one or two more yards.\\\\\\\\n49ers 3, Chiefs 0\\\\\\\\n7:19 p.m. MORE SUPER BOWL 58:\\\\\\\\n\\\\\\\\u2022\\\\\\\\u00a0 Inside Taylor Swift and Travis Kelce\'s whirlwind dating timeline\\\\\\\\n\\\\\\\\u2022. Ranking the thriving Mike and Kyle Shanahan coaching tree\\\\\\\\n\\\\\\\\u2022. Tracking every Super Bowl 58 commercial\\\\\\\\nWhat channel is the Super Bowl on?\\\\\\\\nSuper Bowl 58 will be broadcast nationally on CBS. PURDY TO JENNINGS TO CMC FOR SIX \\\\\\\\ud83d\\\\\\\\udd25\\\\\\\\n\\\\\\\\ud83d\\\\\\\\udcfa: #SBLVIII on CBS\\\\\\\\n\\\\\\\\ud83d\\\\\\\\udcf1: Stream on #NFLPlus https://t.co/dClcEDViWl pic.twitter.com/ktiTXIiHzS\\\\\\\\n7:47 p.m. \\\\\\\\u2014 L\'Jarius Sneed, who was on the other side of this two weeks ago, gets hit with an unsportsmanlike conduct penalty and and gives the 49ers their 11th first down.\\\\\\"}\\", \\"{\\\\\\"url\\\\\\": \\\\\\"https://apnews.com/live/super-bowl-2024-updates\\\\\\", \\\\\\"content\\\\\\": \\\\\\"Throw in the fact that Chiefs coach Andy Reid will be in his fifth Super Bowl, the third most in NFL history, and has a chance to win a third ring, and the knowledge on the Kansas City sideline will be an advantage too big for the 49ers to overcome.\\\\\\\\n She performed in Japan on Saturday night before a flight across nine time zones and the international date line to reach the U.S.\\\\\\\\nRihanna performs during halftime of the NFL Super Bowl 57 football game between the Philadelphia Eagles and the Kansas City Chiefs, Sunday, Feb. 12, 2023, in Glendale, Ariz. (AP Photo/David J. Phillip)\\\\\\\\n After the teams take the field, Post Malone will perform \\\\\\\\u201cAmerica the Beautiful\\\\\\\\u201d and Reba McEntire will sing \\\\\\\\u201cThe Star-Spangled Banner.\\\\\\\\u201d\\\\\\\\nSan Francisco 49ers quarterback Brock Purdy (13) warms up before the NFL Super Bowl 58 football game against the Kansas City Chiefs, Sunday, Feb. 11, 2024, in Las Vegas. He was also the referee when the Chiefs beat the 49ers in the Super Bowl four years ago \\\\\\\\u2014 and when the Rams beat the Saints in the 2019 NFC championship game after an infamous missed call.\\\\\\\\n Purdy\\\\\\\\u2019s comeback from the injury to his throwing arm suffered in last season\\\\\\\\u2019s NFC championship loss to the Philadelphia Eagles has been part of the storybook start to his career that started as Mr. Irrelevant as the 262nd pick in the 2022 draft.\\\\\\\\n\\\\\\"}\\", \\"{\\\\\\"url\\\\\\": \\\\\\"https://www.cbsnews.com/live-updates/super-bowl-2024-chiefs-49ers-game-coverage/\\\\\\", \\\\\\"content\\\\\\": \\\\\\"\\\\\\\\\\\\\\"\\\\\\\\nThe Chiefs reached the Super Bowl the hard way, with back-to-back road playoff wins against the Buffalo Bills in the divisional round and then the Ravens in the conference championship \\\\\\\\u2014 the first time in his career Mahomes has been forced to play road playoff games.\\\\\\\\n Watch CBS News\\\\\\\\nSuper Bowl 2024 live updates as Chiefs and 49ers prepare for today\'s show down\\\\\\\\nBy Faris Tanyos, Aliza Chasan, Joe Ruiz, Gina Martinez, S. Dev\\\\\\\\nUpdated on:\\\\\\\\nFebruary 11, 2024 / 6:37 PM EST\\\\\\\\n/ CBS News\\\\\\\\nThe Kansas City Chiefs will look to become the first back-to-back Super Bowl champion in two decades when they take on the San Francisco 49ers today in Las Vegas.\\\\\\\\n What to know about San Francisco 49ers quarterback Brock Purdy\\\\\\\\nOne of the most improbable stories of Super Bowl LVIII is that of San Francisco 49ers quarterback Brock Purdy, who has gone from being \\\\\\\\\\\\\\"Mr. Irrelevant,\\\\\\\\\\\\\\" as the final pick of the 2022 NFL Draft, to a bonafide star, leading his team to the cusp of an NFL title in less than two years.\\\\\\\\n The 24-year-old, who set records at Iowa State after receiving Player of the Year honors at Perry High School in Gilbert, Arizona, is attempting to become the third quarterback after Joe Montana and Steve Young to lead the 49ers to a Super Bowl victory, and the franchise\'s sixth Lombardi Trophy.\\\\\\\\n \\\\\\\\\\\\\\"The more technologically savvy we become: look around the stadium, the scoreboards, the lighting, you know, all of the different technology that makes this a spectacular game, these are all increases in the attack surface that people can target,\\\\\\\\\\\\\\" said Cathy Lanier, the NFL\'s chief security officer.\\\\\\\\n\\\\\\"}\\", \\"{\\\\\\"url\\\\\\": \\\\\\"https://www.cbssports.com/nfl/news/2024-super-bowl-chiefs-vs-49ers-score-patrick-mahomes-leads-ot-comeback-as-k-c-wins-back-to-back-titles/live/\\\\\\", \\\\\\"content\\\\\\": \\\\\\"The championship-winning drive, which included a fourth-and-1 scramble from Mahomes and a clutch 7-yard catch from tight end Travis Kelce, was a must-score for K.C. The NFL\'s new playoff overtime rules -- both teams are guaranteed at least one possession in the extra period -- were in effect for the first time, and the Chiefs needed to answer the Niners\' field goal.\\\\\\\\n Held out of the end zone until that point, Kansas City grabbed its first lead of the game at 13-10.\\\\\\\\nJennings\' touchdown receiving (followed by a missed extra point) concluded a 75-yard drive that put the Niners back on top, 16-13, as the wideout joined former Philadelphia Eagles quarterback Nick Foles as the only players to throw and catch a touchdown in a Super Bowl.\\\\\\\\n He spread the ball around -- eight pass-catchers had at least two receptions -- slowly but surely overcoming a threatening 49ers defense that knocked him off his spot consistently in the first half.\\\\\\\\nMahomes, with his third Super Bowl MVP, now sits alongside Tom Brady (five) and Joe Montana (three) atop the mountain while becoming just the third player to win the award back-to-back, joining Bart Starr (I-II) and Terry Bradshaw (XIII-XIV).\\\\\\\\n The muffed punt that bounced off of cornerback Darrell Luter Jr.\'s ankle was also the big break that the Chiefs needed as they scored on the very next play to take the lead for the first time in the game. College Pick\'em\\\\\\\\nA Daily SportsLine Betting Podcast\\\\\\\\nNFL Playoff Time!\\\\\\\\n2024 Super Bowl, Chiefs vs. 49ers score: Patrick Mahomes leads OT comeback as K.C. wins back-to-back titles\\\\\\\\nCall it a dynasty; the Chiefs are the first team to win consecutive Super Bowls since 2003-04\\\\\\\\nThe Kansas City Chiefs are Super Bowl champions, again.\\\\\\"}\\"]"\n**********************************************************************\n\n--------------------------------------------------------------------------------\nAssistant (to User):\n\nObservation: The Chiefs won Super Bowl 2024 against the San Francisco 49ers with a score of 25-22 in overtime. This was the Chiefs\' third Super Bowl victory in five years, and they became the first team to win consecutive Super Bowls since 2004. The game took place at Allegiant Stadium in Las Vegas. The 49ers were leading initially, but the Chiefs came back and won the game in a thrilling overtime victory.\nThought: I now know the final answer. \nFinal Answer: The Kansas City Chiefs won the Super Bowl 2024 against the San Francisco 49ers with a score of 25-22 in overtime.\n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,a.jsx)(t.h3,{id:"lets-now-ask-the-same-question-again-to-see-if-the-assistant-has-remembered-this.",children:"Let\u2019s now ask the same question again to see if the assistant has remembered this."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'# Use a different cache_seed.\nwith Cache.disk(cache_seed=110) as cache:\n    user_proxy.initiate_chat(\n        assistant,\n        message=react_prompt_message,\n        question="What is the result of super bowl 2024?",\n        max_turns=1,\n        cache=cache,\n    )\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"User (to Assistant):\n\n\nAnswer the following questions as best you can. You have access to tools provided.\n\nUse the following format:\n\nQuestion: the input question you must answer\nThought: you should always think about what to do\nAction: the action to take\nAction Input: the input to the action\nObservation: the result of the action\n... (this process can repeat multiple times)\nThought: I now know the final answer\nFinal Answer: the final answer to the original input question\n\nBegin!\nQuestion: What is the result of super bowl 2024?\n\n\n--------------------------------------------------------------------------------\nAssistant (to User):\n\nThought: The question asks for the result of Super Bowl 2024. No need to use any function tools since the answer is already provided in the memories.\n\nFinal Answer: The Chiefs won the Super Bowl 2024 in a 25-22 overtime victory against the San Francisco 49ers. It was their third win in five years. The game took place on Sunday, Feb. 11, 2024, in Las Vegas, Nevada. The Chiefs' Mahomes was awarded his third Super Bowl MVP, drawing him level with Joe Montana, and just behind Tom Brady, who has won it five times.\n\n--------------------------------------------------------------------------------\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(96540);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);