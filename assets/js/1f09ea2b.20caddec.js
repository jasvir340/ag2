"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53181],{45447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(74848),s=n(28453);const o={},a="AutoGen Studio - Getting Started",r={id:"autogen-studio/getting-started",title:"AutoGen Studio - Getting Started",description:"PyPI version",source:"@site/docs/autogen-studio/getting-started.md",sourceDirName:"autogen-studio",slug:"/autogen-studio/getting-started",permalink:"/ag2/docs/autogen-studio/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/autogen-studio/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"AutoGen Studio",permalink:"/ag2/docs/autogen-studio"},next:{title:"Using AutoGen Studio",permalink:"/ag2/docs/autogen-studio/usage"}},d={},l=[{value:"Installation",id:"installation",level:3},{value:"Running the Application",id:"running-the-application",level:3},{value:"Capabilities / Roadmap",id:"capabilities--roadmap",level:3},{value:"Contribution Guide",id:"contribution-guide",level:2},{value:"A Note on Security",id:"a-note-on-security",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",user:"user",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"autogen-studio---getting-started",children:"AutoGen Studio - Getting Started"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://badge.fury.io/py/autogenstudio",children:(0,i.jsx)(t.img,{src:"https://badge.fury.io/py/autogenstudio.svg",alt:"PyPI version"})}),"\n",(0,i.jsx)(t.a,{href:"https://pepy.tech/project/autogenstudio",children:(0,i.jsx)(t.img,{src:"https://static.pepy.tech/badge/autogenstudio/week",alt:"Downloads"})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"ARA",src:n(93788).A+"",width:"1528",height:"917"})}),"\n",(0,i.jsxs)(t.p,{children:["AutoGen Studio is an low-code interface built to help you rapidly prototype AI agents, enhance them with skills, compose them into workflows and interact with them to accomplish tasks. It is built on top of the ",(0,i.jsx)(t.a,{href:"https://ag2ai.github.io/ag2",children:"AutoGen"})," framework, which is a toolkit for building AI agents."]}),"\n",(0,i.jsxs)(t.p,{children:["Code for AutoGen Studio is on GitHub at ",(0,i.jsx)(t.a,{href:"https://github.com/ag2ai/build-with-ag2/tree/main/samples/apps/autogen-studio",children:"build-with-ag2"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": AutoGen Studio is meant to help you rapidly prototype multi-agent workflows and demonstrate an example of end user interfaces built with AutoGen. It is not meant to be a production-ready app. Developers are encouraged to use the AutoGen framework to build their own applications, implementing authentication, security and other features required for deployed applications."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Updates"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["April 17: AutoGen Studio database layer is now rewritten to use ",(0,i.jsx)(t.a,{href:"https://sqlmodel.tiangolo.com/",children:"SQLModel"})," (Pydantic + SQLAlchemy). This provides entity linking (skills, models, agents and workflows are linked via association tables) and supports multiple ",(0,i.jsx)(t.a,{href:"https://docs.sqlalchemy.org/en/20/dialects/",children:"database backend dialects"})," supported in SQLAlchemy (SQLite, PostgreSQL, MySQL, Oracle, Microsoft SQL Server). The backend database can be specified with a ",(0,i.jsx)(t.code,{children:"--database-uri"})," argument when running the application. For example, ",(0,i.jsx)(t.code,{children:"autogenstudio ui --database-uri sqlite:///database.sqlite"})," for SQLite and ",(0,i.jsx)(t.code,{children:"autogenstudio ui --database-uri postgresql+psycopg://user:password@localhost/dbname"})," for PostgreSQL."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["March 12: Default directory for AutoGen Studio is now /home/",(0,i.jsxs)(t.user,{children:["/.autogenstudio. You can also specify this directory using the ",(0,i.jsx)(t.code,{children:"--appdir"})," argument when running the application. For example, ",(0,i.jsx)(t.code,{children:"autogenstudio ui --appdir /path/to/folder"}),". This will store the database and other files in the specified directory e.g. ",(0,i.jsx)(t.code,{children:"/path/to/folder/database.sqlite"}),". ",(0,i.jsx)(t.code,{children:".env"})," files in that directory will be used to set environment variables for the app."]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["There are two ways to install AutoGen Studio - from PyPi or from source. We ",(0,i.jsx)(t.strong,{children:"recommend installing from PyPi"})," unless you plan to modify the source code."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Install from PyPi"})}),"\n",(0,i.jsx)(t.p,{children:"We recommend using a virtual environment (e.g., conda) to avoid conflicts with existing Python packages. With Python 3.10 or newer active in your virtual environment, use pip to install AutoGen Studio:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pip install autogenstudio\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Install from Source"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Note: This approach requires some familiarity with building interfaces in React."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If you prefer to install from source, ensure you have Python 3.10+ and Node.js (version above 14.15.0) installed. Here's how you get started:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Clone the AutoGen Studio repository from the ",(0,i.jsx)(t.a,{href:"https://github.com/ag2ai/build-with-ag2",children:"build-with-ag2"})," repository and install its Python dependencies:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pip install -e .\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Navigate to the ",(0,i.jsx)(t.code,{children:"samples/apps/autogen-studio/frontend"})," directory, install dependencies, and build the UI:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install -g gatsby-cli\nnpm install --global yarn\ncd frontend\nyarn install\nyarn build\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For Windows users, to build the frontend, you may need alternative commands to build the frontend."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'\n  gatsby clean && rmdir /s /q ..\\\\autogenstudio\\\\web\\\\ui 2>nul & (set \\"PREFIX_PATH_VALUE=\\" || ver>nul) && gatsby build --prefix-paths && xcopy /E /I /Y public ..\\\\autogenstudio\\\\web\\\\ui\n\n'})}),"\n",(0,i.jsx)(t.h3,{id:"running-the-application",children:"Running the Application"}),"\n",(0,i.jsx)(t.p,{children:"Once installed, run the web UI by entering the following in your terminal:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"autogenstudio ui --port 8081\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This will start the application on the specified port. Open your web browser and go to ",(0,i.jsx)(t.code,{children:"http://localhost:8081/"})," to begin using AutoGen Studio."]}),"\n",(0,i.jsx)(t.p,{children:"AutoGen Studio also takes several parameters to customize the application:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--host <host>"})," argument to specify the host address. By default, it is set to ",(0,i.jsx)(t.code,{children:"localhost"}),". Y"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--appdir <appdir>"})," argument to specify the directory where the app files (e.g., database and generated user files) are stored. By default, it is set to the a ",(0,i.jsx)(t.code,{children:".autogenstudio"})," directory in the user's home directory."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--port <port>"})," argument to specify the port number. By default, it is set to ",(0,i.jsx)(t.code,{children:"8080"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--reload"})," argument to enable auto-reloading of the server when changes are made to the code. By default, it is set to ",(0,i.jsx)(t.code,{children:"False"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"--database-uri"})," argument to specify the database URI. Example values include ",(0,i.jsx)(t.code,{children:"sqlite:///database.sqlite"})," for SQLite and ",(0,i.jsx)(t.code,{children:"postgresql+psycopg://user:password@localhost/dbname"})," for PostgreSQL. If this is not specified, the database URI defaults to a ",(0,i.jsx)(t.code,{children:"database.sqlite"})," file in the ",(0,i.jsx)(t.code,{children:"--appdir"})," directory."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Now that you have AutoGen Studio installed and running, you are ready to explore its capabilities, including defining and modifying agent workflows, interacting with agents and sessions, and expanding agent skills."}),"\n",(0,i.jsx)(t.h3,{id:"capabilities--roadmap",children:"Capabilities / Roadmap"}),"\n",(0,i.jsx)(t.p,{children:"Some of the capabilities supported by the app frontend include the following:"}),"\n",(0,i.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," Build / Configure agents (currently supports two agent workflows based on ",(0,i.jsx)(t.code,{children:"UserProxyAgent"})," and ",(0,i.jsx)(t.code,{children:"AssistantAgent"}),"), modify their configuration (e.g. skills, temperature, model, agent system message, model etc) and compose them into workflows."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," Chat with agent workflows and specify tasks."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," View agent messages and output files in the UI from agent runs."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," Support for more complex agent workflows (e.g. ",(0,i.jsx)(t.code,{children:"GroupChat"})," and ",(0,i.jsx)(t.code,{children:"Sequential"})," workflows)."]}),"\n",(0,i.jsxs)(t.li,{className:"task-list-item",children:[(0,i.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," Improved user experience (e.g., streaming intermediate model output, better summarization of agent responses, etc)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Project Structure:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"autogenstudio/"})," code for the backend classes and web api (FastAPI)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:"frontend/"})," code for the webui, built with Gatsby and TailwindCSS"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"contribution-guide",children:"Contribution Guide"}),"\n",(0,i.jsx)(t.p,{children:"We welcome contributions to AutoGen Studio. We recommend the following general steps to contribute to the project:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["AutoGen Studio is in the ",(0,i.jsx)(t.a,{href:"https://github.com/ag2ai/build-with-ag2",children:"build-with-ag2"})," repository."]}),"\n",(0,i.jsx)(t.li,{children:"Please initiate a discussion on the roadmap issue or a new issue in that repository to discuss your proposed contribution."}),"\n",(0,i.jsxs)(t.li,{children:["Submit a pull request in the ",(0,i.jsx)(t.a,{href:"https://github.com/ag2ai/build-with-ag2",children:"build-with-ag2"})," repository with your contribution!"]}),"\n",(0,i.jsxs)(t.li,{children:["Please use the tag ",(0,i.jsx)(t.code,{children:"studio"})," for any issues, questions, and PRs related to Studio"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"a-note-on-security",children:"A Note on Security"}),"\n",(0,i.jsx)(t.p,{children:"AutoGen Studio is a research prototype and is not meant to be used in a production environment. Some baseline practices are encouraged e.g., using Docker code execution environment for your agents."}),"\n",(0,i.jsx)(t.p,{children:"However, other considerations such as rigorous tests related to jailbreaking, ensuring LLMs only have access to the right keys of data given the end user's permissions, and other security features are not implemented in AutoGen Studio."}),"\n",(0,i.jsx)(t.p,{children:"If you are building a production application, please use the AutoGen framework and implement the necessary security features."}),"\n",(0,i.jsx)(t.h2,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,i.jsxs)(t.p,{children:["AutoGen Studio is Based on the ",(0,i.jsx)(t.a,{href:"https://ag2ai.github.io/ag2",children:"AutoGen"})," project. It was adapted from a research prototype built in October 2023 (original credits: Gagan Bansal, Adam Fourney, Victor Dibia, Piali Choudhury, Saleema Amershi, Ahmed Awadallah, Chi Wang)."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},93788:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ara_stockprices-8a49b0ccb0ec0b452f8e963fa8999f59.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);