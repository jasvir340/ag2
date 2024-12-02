"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32641],{56849:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(74848),a=n(28453);const o={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/groupchat/transform_messages_speaker_selection.ipynb",description:"Custom Speaker Selection Function",source_notebook:"/website/docs/topics/groupchat/transform_messages_speaker_selection.ipynb",tags:["orchestration","long context handling","group chat"],title:"Using Transform Messages during Speaker Selection"},r="Using Transform Messages during Speaker Selection",i={id:"topics/groupchat/transform_messages_speaker_selection",title:"Using Transform Messages during Speaker Selection",description:"Custom Speaker Selection Function",source:"@site/docs/topics/groupchat/transform_messages_speaker_selection.mdx",sourceDirName:"topics/groupchat",slug:"/topics/groupchat/transform_messages_speaker_selection",permalink:"/ag2/docs/topics/groupchat/transform_messages_speaker_selection",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/groupchat/transform_messages_speaker_selection.ipynb",tags:[{label:"orchestration",permalink:"/ag2/docs/tags/orchestration"},{label:"long context handling",permalink:"/ag2/docs/tags/long-context-handling"},{label:"group chat",permalink:"/ag2/docs/tags/group-chat"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/website/docs/topics/groupchat/transform_messages_speaker_selection.ipynb",description:"Custom Speaker Selection Function",source_notebook:"/website/docs/topics/groupchat/transform_messages_speaker_selection.ipynb",tags:["orchestration","long context handling","group chat"],title:"Using Transform Messages during Speaker Selection"},sidebar:"docsSidebar",previous:{title:"Resuming a GroupChat",permalink:"/ag2/docs/topics/groupchat/resuming_groupchat"},next:{title:"Using Custom Model Client classes with Auto Speaker Selection",permalink:"/ag2/docs/topics/groupchat/using_custom_model_client_classes"}},c={},l=[{value:"How do I apply them",id:"how-do-i-apply-them",level:2},{value:"Creating transforms for speaker selection in a GroupChat",id:"creating-transforms-for-speaker-selection-in-a-groupchat",level:2}];function m(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"using-transform-messages-during-speaker-selection",children:"Using Transform Messages during Speaker Selection"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/website/docs/topics/groupchat/transform_messages_speaker_selection.ipynb",children:(0,t.jsx)(s.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/ag2ai/ag2/blob/main/website/docs/topics/groupchat/transform_messages_speaker_selection.ipynb",children:(0,t.jsx)(s.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,t.jsx)(s.p,{children:"When using \u201cauto\u201d mode for speaker selection in group chats, a\nnested-chat is used to determine the next speaker. This nested-chat\nincludes all of the group chat\u2019s messages and this can result in a lot\nof content which the LLM needs to process for determining the next\nspeaker. As conversations progress, it can be challenging to keep the\ncontext length within the workable window for the LLM. Furthermore,\nreducing the number of overall tokens will improve inference time and\nreduce token costs."}),"\n",(0,t.jsxs)(s.p,{children:["Using ",(0,t.jsx)(s.a,{href:"../../../docs/topics/handling_long_contexts/intro_to_transform_messages",children:"Transform\nMessages"}),"\nyou gain control over which messages are used for speaker selection and\nthe context length within each message as well as overall."]}),"\n",(0,t.jsxs)(s.p,{children:["All the transforms available for Transform Messages can be applied to\nthe speaker selection nested-chat, such as the ",(0,t.jsx)(s.code,{children:"MessageHistoryLimiter"}),",\n",(0,t.jsx)(s.code,{children:"MessageTokenLimiter"}),", and ",(0,t.jsx)(s.code,{children:"TextMessageCompressor"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"how-do-i-apply-them",children:"How do I apply them"}),"\n",(0,t.jsxs)(s.p,{children:["When instantiating your ",(0,t.jsx)(s.code,{children:"GroupChat"})," object, all you need to do is assign\na\n",(0,t.jsx)(s.a,{href:"../../../docs/reference/agentchat/contrib/capabilities/transform_messages#transformmessages",children:"TransformMessages"}),"\nobject to the ",(0,t.jsx)(s.code,{children:"select_speaker_transform_messages"})," parameter, and the\ntransforms within it will be applied to the nested speaker selection\nchats."]}),"\n",(0,t.jsxs)(s.p,{children:["And, as you\u2019re passing in a ",(0,t.jsx)(s.code,{children:"TransformMessages"})," object, multiple\ntransforms can be applied to that nested chat."]}),"\n",(0,t.jsx)(s.p,{children:"As part of the nested-chat, an agent called \u2018checking_agent\u2019 is used to\ndirect the LLM on selecting the next speaker. It is preferable to avoid\ncompressing or truncating the content from this agent. How this is done\nis shown in the second last example."}),"\n",(0,t.jsx)(s.h2,{id:"creating-transforms-for-speaker-selection-in-a-groupchat",children:"Creating transforms for speaker selection in a GroupChat"}),"\n",(0,t.jsxs)(s.p,{children:["We will progressively create a ",(0,t.jsx)(s.code,{children:"TransformMessage"})," object to show how you\ncan build up transforms for speaker selection."]}),"\n",(0,t.jsx)(s.p,{children:"Each iteration will replace the previous one, enabling you to use the\ncode in each cell as is."}),"\n",(0,t.jsx)(s.p,{children:"Importantly, transforms are applied in the order that they are in the\ntransforms list."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"# Start by importing the transform capabilities\n\nimport autogen\nfrom autogen.agentchat.contrib.capabilities import transform_messages, transforms\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"# Limit the number of messages\n\n# Let's start by limiting the number of messages to consider for speaker selection using a\n# MessageHistoryLimiter transform. This example will use the latest 10 messages.\n\nselect_speaker_transforms = transform_messages.TransformMessages(\n    transforms=[\n        transforms.MessageHistoryLimiter(max_messages=10),\n    ]\n)\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'# Compress messages through an LLM\n\n# An interesting and very powerful method of reducing tokens is by "compressing" the text of\n# a message by using an LLM that\'s specifically designed to do that. The default LLM used for\n# this purpose is LLMLingua (https://github.com/microsoft/LLMLingua) and it aims to reduce the\n# number of tokens without reducing the message\'s meaning. We use the TextMessageCompressor\n# transform to compress messages.\n\n# There are multiple LLMLingua models available and it defaults to the first version, LLMLingua.\n# This example will show how to use LongLLMLingua which is targeted towards long-context\n# information processing. LLMLingua-2 has been released and you could use that as well.\n\n# Create the compression arguments, which allow us to specify the model and other related\n# parameters, such as whether to use the CPU or GPU.\nselect_speaker_compression_args = dict(\n    model_name="microsoft/llmlingua-2-xlm-roberta-large-meetingbank", use_llmlingua2=True, device_map="cpu"\n)\n\n# Now we can add the TextMessageCompressor as the second step\n\n# Important notes on the parameters used:\n# min_tokens - will only apply text compression if the message has at least 1,000 tokens\n# cache - enables caching, if a message has previously been compressed it will use the\n#         cached version instead of recompressing it (making it much faster)\n# filter_dict - to minimise the chance of compressing key information, we can include or\n#         exclude messages based on role and name.\n#         Here, we are excluding any \'system\' messages as well as any messages from\n#         \'ceo\' (just for example) and the \'checking_agent\', which is an agent in the\n#         nested chat speaker selection chat. Change the \'ceo\' name or add additional\n#         agent names for any agents that have critical content.\n# exclude_filter - As we are setting this to True, the filter will be an exclusion filter.\n\n# Import the cache functionality\nfrom autogen.cache.in_memory_cache import InMemoryCache\n\nselect_speaker_transforms = transform_messages.TransformMessages(\n    transforms=[\n        transforms.MessageHistoryLimiter(max_messages=10),\n        transforms.TextMessageCompressor(\n            min_tokens=1000,\n            text_compressor=transforms.LLMLingua(select_speaker_compression_args, structured_compression=True),\n            cache=InMemoryCache(seed=43),\n            filter_dict={"role": ["system"], "name": ["ceo", "checking_agent"]},\n            exclude_filter=True,\n        ),\n    ]\n)\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'# Limit the total number of tokens and tokens per message\n\n# As a final example, we can manage the total tokens and individual message tokens. We have added a\n# MessageTokenLimiter transform that will limit the total number of tokens for the messages to\n# 3,000 with a maximum of 500 per individual message. Additionally, if a message is less than 300\n# tokens it will not be truncated.\n\nselect_speaker_compression_args = dict(\n    model_name="microsoft/llmlingua-2-xlm-roberta-large-meetingbank", use_llmlingua2=True, device_map="cpu"\n)\n\nselect_speaker_transforms = transform_messages.TransformMessages(\n    transforms=[\n        transforms.MessageHistoryLimiter(max_messages=10),\n        transforms.TextMessageCompressor(\n            min_tokens=1000,\n            text_compressor=transforms.LLMLingua(select_speaker_compression_args, structured_compression=True),\n            cache=InMemoryCache(seed=43),\n            filter_dict={"role": ["system"], "name": ["ceo", "checking_agent"]},\n            exclude_filter=True,\n        ),\n        transforms.MessageTokenLimiter(max_tokens=3000, max_tokens_per_message=500, min_tokens=300),\n    ]\n)\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'# Now, we apply the transforms to a group chat. We do this by assigning the message\n# transforms from above to the `select_speaker_transform_messages` parameter on the GroupChat.\n\nimport os\n\nllm_config = {\n    "config_list": [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}],\n}\n\n# Define your agents\nchief_executive_officer = autogen.ConversableAgent(\n    "ceo",\n    llm_config=llm_config,\n    max_consecutive_auto_reply=1,\n    system_message="You are leading this group chat, and the business, as the chief executive officer.",\n)\n\ngeneral_manager = autogen.ConversableAgent(\n    "gm",\n    llm_config=llm_config,\n    max_consecutive_auto_reply=1,\n    system_message="You are the general manager of the business, running the day-to-day operations.",\n)\n\nfinancial_controller = autogen.ConversableAgent(\n    "fin_controller",\n    llm_config=llm_config,\n    max_consecutive_auto_reply=1,\n    system_message="You are the financial controller, ensuring all financial matters are managed accordingly.",\n)\n\nyour_group_chat = autogen.GroupChat(\n    agents=[chief_executive_officer, general_manager, financial_controller],\n    select_speaker_transform_messages=select_speaker_transforms,\n)\n'})})]})}function g(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>i});var t=n(96540);const a={},o=t.createContext(a);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);