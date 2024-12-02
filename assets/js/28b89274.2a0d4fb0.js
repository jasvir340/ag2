"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95811],{28593:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var t=r(74848),o=r(28453);const i={sidebar_label:"docker_jupyter_server",title:"coding.jupyter.docker_jupyter_server"},c=void 0,s={id:"reference/coding/jupyter/docker_jupyter_server",title:"coding.jupyter.docker_jupyter_server",description:"DockerJupyterServer",source:"@site/docs/reference/coding/jupyter/docker_jupyter_server.md",sourceDirName:"reference/coding/jupyter",slug:"/reference/coding/jupyter/docker_jupyter_server",permalink:"/ag2/docs/reference/coding/jupyter/docker_jupyter_server",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/coding/jupyter/docker_jupyter_server.md",tags:[],version:"current",frontMatter:{sidebar_label:"docker_jupyter_server",title:"coding.jupyter.docker_jupyter_server"},sidebar:"referenceSideBar",previous:{title:"base",permalink:"/ag2/docs/reference/coding/jupyter/base"},next:{title:"embedded_ipython_code_executor",permalink:"/ag2/docs/reference/coding/jupyter/embedded_ipython_code_executor"}},d={},a=[{value:"DockerJupyterServer",id:"dockerjupyterserver",level:2},{value:"__init__",id:"__init__",level:3}];function l(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"dockerjupyterserver",children:"DockerJupyterServer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class DockerJupyterServer(JupyterConnectable)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def __init__(*,\n             custom_image_name: Optional[str] = None,\n             container_name: Optional[str] = None,\n             auto_remove: bool = True,\n             stop_container: bool = True,\n             docker_env: Dict[str, str] = {},\n             token: Union[str, GenerateToken] = GenerateToken())\n"})}),"\n",(0,t.jsx)(n.p,{children:"Start a Jupyter kernel gateway server in a Docker container."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"custom_image_name"})," ",(0,t.jsx)(n.em,{children:"Optional[str], optional"})," - Custom image to use. If this is None,\nthen the bundled image will be built and used. The default image is based on\nquay.io/jupyter/docker-stacks-foundation and extended to include jupyter_kernel_gateway"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"container_name"})," ",(0,t.jsx)(n.em,{children:"Optional[str], optional"})," - Name of the container to start.\nA name will be generated if None."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"auto_remove"})," ",(0,t.jsx)(n.em,{children:"bool, optional"})," - If true the Docker container will be deleted\nwhen it is stopped."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"stop_container"})," ",(0,t.jsx)(n.em,{children:"bool, optional"})," - If true the container will be stopped,\neither by program exit or using the context manager"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docker_env"})," ",(0,t.jsx)(n.em,{children:"Dict[str, str], optional"})," - Extra environment variables to pass\nto the running Docker container."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"token"})," ",(0,t.jsx)(n.em,{children:"Union[str, GenerateToken], optional"})," - Token to use for authentication.\nIf GenerateToken is used, a random token will be generated. Empty string\nwill be unauthenticated."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>s});var t=r(96540);const o={},i=t.createContext(o);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);