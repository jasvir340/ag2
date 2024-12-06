"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49616],{22778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=t(74848),i=t(28453);const a={title:"ReasoningAgent - Tree of Thoughts with Beam Search in AG2",authors:["Hk669","skzhang1","sonichi","BabyCNM","qingyunwu"],tags:["LLM","GPT","research"]},r=void 0,o={permalink:"/ag2/blog/2024/12/02/ReasoningAgent2",source:"@site/blog/2024-12-02-ReasoningAgent2/index.mdx",title:"ReasoningAgent - Tree of Thoughts with Beam Search in AG2",description:"Tree of Thoughts",date:"2024-12-02T00:00:00.000Z",formattedDate:"December 2, 2024",tags:[{label:"LLM",permalink:"/ag2/blog/tags/llm"},{label:"GPT",permalink:"/ag2/blog/tags/gpt"},{label:"research",permalink:"/ag2/blog/tags/research"}],readingTime:7.44,hasTruncateMarker:!1,authors:[{name:"Hrushikesh Dokala",title:"CS Undergraduate Based in India",url:"https://github.com/Hk669",imageURL:"https://github.com/Hk669.png",key:"Hk669"},{name:"Shaokun Zhang",title:"PhD student at the Pennsylvania State University",url:"https://github.com/skzhang1",imageURL:"https://github.com/skzhang1.png",key:"skzhang1"},{name:"Chi Wang",title:"Founder of AutoGen & FLAML",url:"https://www.linkedin.com/in/chi-wang-autogen/",imageURL:"https://github.com/sonichi.png",key:"sonichi"},{name:"BabyCNM",title:"AG2 Contributor",url:"https://github.com/BabyCNM",imageURL:"https://github.com/BabyCNM.png",key:"BabyCNM"},{name:"Qingyun Wu",title:"Co-Founder of AutoGen/AG2 & FLAML, Assistant Professor at Penn State University",url:"https://qingyun-wu.github.io/",imageURL:"https://github.com/qingyun-wu.png",key:"qingyunwu"}],frontMatter:{title:"ReasoningAgent - Tree of Thoughts with Beam Search in AG2",authors:["Hk669","skzhang1","sonichi","BabyCNM","qingyunwu"],tags:["LLM","GPT","research"]},unlisted:!1,prevItem:{title:"Knowledgeable Agents with FalkorDB Graph RAG",permalink:"/ag2/blog/2024/12/06/FalkorDB-Structured"},nextItem:{title:"Agentic testing for prompt leakage security",permalink:"/ag2/blog/2024/11/27/Prompt-Leakage-Probing"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0]},h=[{value:"Introduction",id:"introduction",level:2},{value:"How ReasoningAgent Works",id:"how-reasoningagent-works",level:2},{value:"O1-Style Reasoning with Beam Size 1",id:"o1-style-reasoning-with-beam-size-1",level:2},{value:"Larger Beam Size for Complex Problems",id:"larger-beam-size-for-complex-problems",level:2},{value:"Visualizing the Reasoning Process",id:"visualizing-the-reasoning-process",level:2},{value:"Save the Thought Tree as Training dataset",id:"save-the-thought-tree-as-training-dataset",level:2},{value:"Cleaning for SFT",id:"cleaning-for-sft",level:3},{value:"Cleaning for RLHF (DPO and PPO)",id:"cleaning-for-rlhf-dpo-and-ppo",level:3},{value:"Key Benefits",id:"key-benefits",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"For Further Reading",id:"for-further-reading",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Tree of Thoughts",src:t(3856).A+"",width:"2758",height:"1658"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TL;DR:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We introduce ",(0,s.jsx)(n.strong,{children:"ReasoningAgent"}),", an AG2 agent that implements tree-of-thought reasoning with beam search to solve complex problems."]}),"\n",(0,s.jsx)(n.li,{children:"ReasoningAgent explores multiple reasoning paths in parallel and uses a grader agent to evaluate and select the most promising paths."}),"\n",(0,s.jsx)(n.li,{children:"The exploration trajectory and thought tree can be saved locally for further analysis. These logs can even be saved as SFT dataset and preference dataset for DPO and PPO training."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Large language models (LLMs) have shown impressive capabilities in various tasks, but they can still struggle with complex reasoning problems that require exploring multiple solution paths. To address this limitation, we introduce ReasoningAgent, an AG2 agent that implements tree-of-thought reasoning with beam search."}),"\n",(0,s.jsx)(n.p,{children:"The key idea behind ReasoningAgent is to:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Generate multiple possible reasoning steps at each point"}),"\n",(0,s.jsx)(n.li,{children:"Evaluate these steps using a grader agent"}),"\n",(0,s.jsx)(n.li,{children:"Keep track of the most promising paths using beam search"}),"\n",(0,s.jsx)(n.li,{children:"Continue exploring those paths while pruning less promising ones"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This approach allows the agent to systematically explore different reasoning strategies while managing computational resources efficiently."}),"\n",(0,s.jsx)(n.h2,{id:"how-reasoningagent-works",children:"How ReasoningAgent Works"}),"\n",(0,s.jsx)(n.p,{children:"ReasoningAgent consists of three main components:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"A Thinker Agent"}),": Generates possible next steps in the reasoning process"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"A Grader Agent"}),": Evaluates the quality of different reasoning paths"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Beam Search"}),": Maintains a fixed number of most promising paths"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The process works as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The thinker agent generates multiple possible next steps from the current state"}),"\n",(0,s.jsx)(n.li,{children:"The grader agent evaluates each path and assigns a score"}),"\n",(0,s.jsx)(n.li,{children:"Beam search selects the top-k paths based on these scores"}),"\n",(0,s.jsx)(n.li,{children:"The process repeats until a solution is found or maximum depth is reached"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Beam Search",src:t(85611).A+"",width:"2876",height:"1640"})}),"\n",(0,s.jsx)(n.h2,{id:"o1-style-reasoning-with-beam-size-1",children:"O1-Style Reasoning with Beam Size 1"}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"beam_size=1"}),", ReasoningAgent behaves similarly to Chain-of-Thought (CoT) or O1-style reasoning, where only a single reasoning path is explored. This is useful for:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simple Problems"}),": When the problem is straightforward and multiple solution paths are unnecessary"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Resource Conservation"}),": When you want to minimize API calls and computational costs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Baseline Comparison"}),": To compare performance with and without beam search"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# Create a reasoning agent with beam size 1 (O1-style)\nreason_agent = ReasoningAgent(\n    name="reason_agent",\n    llm_config={"config_list": config_list},\n    verbose=False,\n    beam_size=1,  # Using beam size 1 for O1-style reasoning\n    max_depth=3,\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"This configuration means:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Only one path is explored at each step"}),"\n",(0,s.jsx)(n.li,{children:"The grader still evaluates the path, but no comparison between paths is needed"}),"\n",(0,s.jsx)(n.li,{children:"The process is more streamlined but may miss alternative solutions"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here's a simple example of using ReasoningAgent:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import os\nfrom autogen import AssistantAgent, UserProxyAgent\nfrom autogen.agentchat.contrib.reasoning_agent import ReasoningAgent, visualize_tree\n\n# Configure the model\nconfig_list = [{"model": "gpt-4", "api_key": os.environ.get("OPENAI_API_KEY")}]\n\n# Create a reasoning agent with beam search\nreasoning_agent = ReasoningAgent(\n    name="reason_agent",\n    llm_config={"config_list": config_list},\n    verbose=False,\n    beam_size=1,  # Using beam size 1 for O1-style reasoning\n    max_depth=3,\n)\n\n# Create a user proxy agent\nuser_proxy = UserProxyAgent(\n    name="user_proxy",\n    human_input_mode="NEVER",\n    code_execution_config={"use_docker": False},\n    max_consecutive_auto_reply=10,\n)\n\nquestion = "What is the expected maximum dice value if you can roll a 6-sided dice three times?"\n\nuser_proxy.initiate_chat(reasoning_agent, message=question)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"larger-beam-size-for-complex-problems",children:"Larger Beam Size for Complex Problems"}),"\n",(0,s.jsx)(n.p,{children:"For more complex problems, we can increase the beam size to explore multiple reasoning paths in parallel:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'\ndef last_meaningful_msg(sender, recipient, summary_args):\n    """\n    This can be modified based on your required summary method.\n    """\n    import warnings\n\n    if sender == recipient:\n        return "TERMINATE"\n\n    summary = ""\n    chat_messages = recipient.chat_messages[sender]\n\n    for msg in reversed(chat_messages):\n        try:\n            content = msg["content"]\n            if isinstance(content, str):\n                summary = content.replace("TERMINATE", "")\n            elif isinstance(content, list):\n                # Remove the `TERMINATE` word in the content list.\n                summary = "\\n".join(\n                    x["text"].replace("TERMINATE", "") for x in content if isinstance(x, dict) and "text" in x\n                )\n            if summary.strip().rstrip():\n                return summary\n        except (IndexError, AttributeError) as e:\n            warnings.warn(f"Cannot extract summary using last_msg: {e}. Using an empty str as summary.", UserWarning)\n    return summary\n\nreason_agent = ReasoningAgent(\n    name="reason_agent",\n    llm_config={"config_list": config_list},\n    verbose=False,\n    beam_size=3,  # Explore 3 paths in parallel\n    max_depth=3,\n)\n\n# Example complex problem\ntask = "Design a mixed integer linear program for a coffee roasting supply chain"\nresponse = user_proxy.initiate_chat(\n    reason_agent,\n    message=task,\n    summary_method=last_meaningful_msg # can be default i.e., "last_msg"\n)\n'})}),"\n",(0,s.jsx)(n.p,{children:"The agent will explore multiple approaches simultaneously:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Formulating the objective function"}),"\n",(0,s.jsx)(n.li,{children:"Defining decision variables"}),"\n",(0,s.jsx)(n.li,{children:"Establishing constraints"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"visualizing-the-reasoning-process",children:"Visualizing the Reasoning Process"}),"\n",(0,s.jsx)(n.p,{children:"ReasoningAgent includes built-in visualization support using graphviz:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# After running a query, visualize the reasoning tree\nvisualize_tree(reason_agent._root)\n"})}),"\n",(0,s.jsx)(n.p,{children:"This generates a tree diagram showing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Different reasoning paths explored"}),"\n",(0,s.jsx)(n.li,{children:"Evaluation scores for each path"}),"\n",(0,s.jsx)(n.li,{children:"Number of visits to each node"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"save-the-thought-tree-as-training-dataset",children:"Save the Thought Tree as Training dataset"}),"\n",(0,s.jsxs)(n.p,{children:["As you have played with the ",(0,s.jsx)(n.code,{children:"ReasoningAgent"}),", you may find the LLM's API expense is really high.\nOn the other hand, the thought tree is a good training dataset for SFT, DPO, and PPO."]}),"\n",(0,s.jsxs)(n.p,{children:["After asking a question to the ",(0,s.jsx)(n.code,{children:"ReasoningAgent"}),", you only need to simply call the ",(0,s.jsx)(n.code,{children:"to_dict"})," function to save the thought tree as a file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import json\ndata = reasoning_agent._root.to_dict()\nwith open("reasoning_tree.json", "w") as f:\n    json.dump(data, f)\n\n# recover the node\nnew_node = ThinkNode.from_dict(json.load(open("reasoning_tree.json", "r")))\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use ",(0,s.jsx)(n.code,{children:"pickle"})," directly to save the thought tree."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import pickle\npickle.dump(reasoning_agent._root, open("reasoning_tree.pkl", "wb"))\n\n# recover the node\nnew_node = pickle.load(open("reasoning_tree.pkl", "rb"))\n'})}),"\n",(0,s.jsx)(n.h3,{id:"cleaning-for-sft",children:"Cleaning for SFT"}),"\n",(0,s.jsx)(n.p,{children:"This step finds the best trajectory in the thought tree and converts it to a SFT dataset as a sequence of strings. The best trajectory is determined by following the highest-scoring path from root to leaf."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def extract_sft_dataset(root):\n    """\n    Extract the best trajectory or multiple equally good trajectories\n    for SFT training.\n\n    Args:\n        root: The root node of the tree.\n\n    Returns:\n        List of best trajectories, where each trajectory is a pair of instruction and response.\n    """\n    instruction = root.content\n    idx = len("# Question: ") + len(root.content) + 1\n\n    def find_leaf_nodes(node):\n        """Recursively find all leaf nodes."""\n        if not node.children:\n            return [node]\n        leafs = []\n        for child in node.children:\n            leafs.extend(find_leaf_nodes(child))\n        return leafs\n\n    # Step 1: Find all leaf nodes\n    leaf_nodes = find_leaf_nodes(root)\n\n    # Step 2: Determine the highest score among leaf nodes\n    max_value = max(leaf_nodes, key=lambda x: x.value).value\n\n    # Step 3: Collect all leaf nodes with the highest score\n    best_leafs = [leaf for leaf in leaf_nodes if leaf.value == max_value]\n\n    # Step 4: Collect trajectories for all the best leaf nodes\n    best_trajectories = [{"instruction": instruction, "response": leaf.trajectory[idx:]} for leaf in best_leafs]\n\n    return best_trajectories\n\n\n# Example usage\nsft_data = extract_sft_dataset(reason_agent._root)\njson.dump(sft_data, open("sft_data.json", "w"), indent=2)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"cleaning-for-rlhf-dpo-and-ppo",children:"Cleaning for RLHF (DPO and PPO)"}),"\n",(0,s.jsx)(n.p,{children:"This step generates preference pairs by comparing sibling nodes in the tree. For each parent node with multiple children, we create training pairs where the higher-scored response is marked as preferred over the lower-scored one."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def extract_rlhf_preference_dataset(root, contrastive_threshold=0.2):\n    """\n    Extract and generate preference pairs for RLHF training by comparing sibling nodes.\n\n    Args:\n        root: The root node of the tree.\n        contrastive_threshold (float): between (0, 1), a distance measure that we are confidence to call\n            one is positive and another is negative.\n\n    Returns:\n        A list of preference pairs, where each pair contains two responses and\n        indicates which one is preferred.\n    """\n    preference_pairs = []\n\n    assert contrastive_threshold > 0\n    assert contrastive_threshold < 1\n\n    def traverse_tree(node):\n        """Traverse the tree to compare sibling nodes and collect preferences."""\n        if not node.children:\n            return  # Leaf node, no comparisons needed\n\n        # Step 1: Compare all sibling nodes\n        for i in range(len(node.children)):\n            for j in range(len(node.children)):\n                if i == j:\n                    continue\n                child_a, child_b = node.children[i], node.children[j]\n                if child_a.value - child_b.value > contrastive_threshold:\n                    preference_pairs.append({\n                        "instruction": node.trajectory,\n                        "preferred_response": f"Step {child_a.depth}: {child_a.content}",\n                        "dispreferred_response": f"Step {child_b.depth}: {child_b.content}",\n                    })\n\n\n        # Step 2: Recurse into child nodes\n        for child in node.children:\n            traverse_tree(child)\n\n    # Start traversal from the root\n    traverse_tree(root)\n\n    return preference_pairs\n\n\n# Example usage\nrlhf_data = extract_rlhf_preference_dataset(reason_agent._root)\n\nprint(f"There are {len(rlhf_data)} pairs of data\\n\\n")\njson.dump(rlhf_data, open("rlhf_data.json", "w"), indent=2)\n'})}),"\n",(0,s.jsx)(n.p,{children:"The resulting datasets can be used to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fine-tune a base model using SFT with the best trajectories"}),"\n",(0,s.jsx)(n.li,{children:"Train reward models or directly optimize policies using the preference pairs"}),"\n",(0,s.jsx)(n.li,{children:"Analyze and improve the reasoning patterns of the agent"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"key-benefits",children:"Key Benefits"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Systematic Exploration"}),": Instead of committing to a single reasoning path, ReasoningAgent explores multiple possibilities systematically."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Quality Control"}),": The grader agent helps ensure that each step in the reasoning process is sound."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Transparency"}),": The visualization tools help understand how the agent arrives at its conclusions."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"ReasoningAgent demonstrates how combining tree-of-thought reasoning with beam search can enhance an LLM's problem-solving capabilities. By systematically exploring and evaluating multiple solution paths, it can tackle complex problems more effectively than traditional approaches."}),"\n",(0,s.jsx)(n.p,{children:"The implementation is flexible and can be customized for different types of problems by adjusting parameters like beam size and maximum depth. We encourage the community to experiment with ReasoningAgent and contribute to its development."}),"\n",(0,s.jsx)(n.h2,{id:"for-further-reading",children:"For Further Reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/reference/agentchat/contrib/reasoning_agent",children:"Documentation about ReasoningAgent"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_reasoning_agent.ipynb",children:"Example notebook"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/2305.10601",children:"The Original research paper about Tree of Thoughts"})," from Google DeepMind and Princeton University."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Do you have interesting use cases for ReasoningAgent? Would you like to see more features or improvements? Please join our ",(0,s.jsx)(n.a,{href:"https://discord.com/invite/pAbnFJrkgZ",children:"Discord"})," server for discussion."]})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3856:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/reasoningagent_1-fb64d6413218f552de11a54980b4bf95.png"},85611:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/reasoningagent_2-f550949b23619bca73bd10e0cc24e3dc.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);