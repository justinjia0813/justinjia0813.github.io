# 《克制，是人工智能公司最大的商业野心》一手资料笔记

核验日期：2026-08-02

## 结论摘要

现有一手资料能够支持以下有限结论：

1. DeepSeek 已通过低价应用程序编程接口（Application Programming Interface，API）、开放权重、宽松许可和本地推理路径，降低调用、再开发与自主部署智能的门槛。
2. 科学智能产品已经出现“专业模型与工具—推理与部署—加速计算硬件”的全栈组合，也已有药企把优化后的科学模型分发给更广泛的内部科研人员。
3. 本地部署在科学智能中不是抽象设想：BioNeMo Framework 与多种 BioNeMo 推理微服务已经提供本地容器或本地工作站运行说明。但本次没有核验到 BioNeMo 科学模型完整的断网部署指南，因此只能写“本地、私有环境或数据中心部署”，不能直接写成“已经支持完全离线部署”。
4. 实验设备连接已有真实系统与标准接口案例，但成熟度低于计算与部署层。Argonne 的 Polybot 已连接机器人、合成与表征设备；其 MADSci 软件仍明确标注为测试版，适合证明技术路径，不适合证明成熟商业产品已普及。

本文中的“科学智能 Token”是作者提出的商业计量概念，指完成一次可用科学任务所消耗的智能成本；下列厂商并未使用同一定义，也没有提供可直接横向比较的统一指标。

## 状态口径

- **已提供**：官方文档已有可调用接口、可下载软件/权重或可执行部署说明。
- **已部署**：官方客户案例明确称能力已进入真实工作流；其中效果数字仍可能只是厂商或客户自报。
- **公司主张**：来自厂商新闻稿、客户故事或性能页面，未在本笔记中做独立复验。
- **预览/规划**：已经宣布，但仍带 Preview、beta、即将支持或未来扩展等限定。

## 一、DeepSeek：低价、开放与本地运行共同扩大分发

### 1. 当前 API 定价已经是“百万 Token 元级”【已提供】

截至核验日，DeepSeek 官方定价页列出的每百万 Token 价格如下：

| 价格（人民币）   | V4-Flash |   V4-Pro |
| ---------------- | -------: | -------: |
| 输入，缓存命中   |  0.02 元 | 0.025 元 |
| 输入，缓存未命中 |     1 元 |     3 元 |
| 输出             |     2 元 |     6 元 |

V4-Flash 当前服务版本为 `DeepSeek-V4-Flash-0731`。页面同时注明价格可能调整；已披露的高峰时段双倍定价尚未公布生效日期，不能算入现行价格。[DeepSeek《模型 & 价格》](https://api-docs.deepseek.com/zh-cn/quick_start/pricing/)

2025 年 9 月 29 日，DeepSeek 在 V3.2-Exp 上线时称 API 价格立即下调超过 50%，说明降价并非只有长期愿景，也有已经实施的动作。[DeepSeek《Introducing DeepSeek-V3.2-Exp》](https://api-docs.deepseek.com/news/news250929/)

2024 年 8 月 2 日，DeepSeek 已向所有 API 用户自动启用上下文硬盘缓存；官方称缓存命中最高可节省 90%、历史平均节省超过 50%。这是 DeepSeek 自己披露的测算，应写成“公司称”，不能当作独立评测结果。[DeepSeek《DeepSeek API introduces Context Caching on Disk, cutting prices by an order of magnitude》](https://api-docs.deepseek.com/news/news0802/)

**可支持的文章表述**：DeepSeek 的路线不只是给模型设定较低价格，也在通过缓存和工程优化持续压低实际调用成本。

### 2. 兼容接口降低接入成本【已提供】

V4-Flash 与 V4-Pro 已支持 OpenAI 和 Anthropic 兼容格式。既有软件可以通过更换服务地址与模型名接入，但具体功能仍需适配和验证。[DeepSeek《Your First API Call》](https://api-docs.deepseek.com/guides/function_calling/)

**边界**：该资料能证明迁移与集成门槛降低，不能证明所有应用都已无缝兼容。

### 3. 权重、许可与本地推理路径已经提供【已提供；V4 为预览版本】

DeepSeek 于 2026 年 4 月 24 日上线 V4 Preview API，并提供 V4-Flash、V4-Pro 及基础模型的可下载权重。[DeepSeek《DeepSeek V4 Preview Release》](https://api-docs.deepseek.com/news/news260424/)

V4-Flash 官方模型卡写明代码与模型权重采用麻省理工学院许可证（Massachusetts Institute of Technology License，MIT License），并提供权重转换、交互推理、批量推理和多机推理说明。[DeepSeek V4-Flash 官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)；[官方本地推理说明](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash/blob/main/inference/README.md)

V4-Flash 总参数为 2,840 亿，V4-Pro 为 1.6 万亿，官方示例采用模型并行并提供多机路径。因此，开放权重降低了控制权和许可门槛，不等于普通设备已经能够廉价运行完整模型。[DeepSeek V4-Flash 官方模型卡](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)

作为更成熟的历史版本，DeepSeek-R1 的官方仓库明确写明代码和模型权重采用 MIT License，支持商业使用、修改、衍生与蒸馏，并给出以 vLLM 或 SGLang 启动蒸馏模型本地服务的命令。[DeepSeek-R1 官方仓库](https://github.com/deepseek-ai/DeepSeek-R1)

**边界**：本地推理路径已提供；本次没有从 DeepSeek 官方资料中核验到针对 V4 的完整隔离网络部署手册。“可在自有环境运行”可以写，“普通设备低成本离线运行完整 V4”不能写。

### 4. DeepSeek 自己也把效率归因于全栈协同【公司技术主张】

DeepSeek-V3 官方仓库称，其训练效率来自算法、框架和硬件协同设计，并通过通信—计算重叠降低训练开销。这能支持“单位智能成本来自系统协同，而不只是模型结构”的机制判断，但相关成本与性能数字属于公司披露。[DeepSeek-V3 官方仓库](https://github.com/deepseek-ai/DeepSeek-V3)

## 二、科学智能：从模型到部署和硬件的全栈案例

### 1. BioNeMo 已把专业模型、训练工具和推理服务组织成软件栈【已提供】

NVIDIA 将 BioNeMo 定义为面向生命科学人工智能模型开发与部署的软件生态：BioNeMo Framework 提供优化的预训练生物分子模型、训练与微调工具；BioNeMo NIM（NVIDIA Inference Microservices，英伟达推理微服务）则提供带 API 端点、可自托管或云托管的推理微服务。[NVIDIA BioNeMo 官方概览](https://docs.nvidia.com/bionemo-framework/latest/main/about/overview/index.html)

BioNeMo Framework 免费使用，代码采用 Apache License 2.0（Apache License Version 2.0，Apache 2.0 许可证）。官方文档提供 Docker 容器，并明确兼容本地工作站、企业数据中心、主要云服务商和 NVIDIA DGX Cloud。[BioNeMo 官方常见问题](https://docs.nvidia.com/bionemo-framework/latest/main/references/FAQ/index.html)；[BioNeMo 本地与云端启动文档](https://docs.nvidia.com/bionemo-framework/latest/main/getting-started/access-startup/)

BioNeMo Recipes 把 TransformerEngine、8 位浮点计算、序列打包、单机到多节点扩展等优化与生物基础模型训练配套，并在支持矩阵中把“已支持”“开发中”和“不支持”分开标注。[BioNeMo Recipes 官方文档](https://docs.nvidia.com/bionemo-framework/latest/main/recipes/index.html)

**可支持的文章表述**：科学智能基础设施不只是一个模型接口，而是模型、数据处理、训练与推理软件、容器化部署和加速硬件共同组成的系统。

### 2. 科学模型已经能作为本地服务运行【已提供；不等于完全离线】

BioNeMo GenMol NIM 官方文档给出了在本地主机拉取并运行容器、绑定图形处理器（Graphics Processing Unit，GPU）、持久化模型缓存并通过本地 8000 端口提供服务的完整命令。[NVIDIA《Configure NIM — NIM for GenMol》](https://docs.nvidia.com/nim/bionemo/genmol/latest/configure-nim.html)

MolMIM 与 OpenFold3 的官方文档也分别提供本地容器启动和本地接口调用方式。[NVIDIA《NIM for MolMIM Quickstart》](https://docs.nvidia.com/nim/bionemo/molmim/latest/quickstart-guide.html)；[NVIDIA《NIM for OpenFold3 Getting Started》](https://docs.nvidia.com/nim/bionemo/openfold3/latest/getting-started.html)

NVIDIA 新闻稿称 BioNeMo NIM 可以部署在本地、任意数据中心或云端；新闻稿还称平台通过加速计算、优化微服务和工作流降低成本、扩大规模。这是产品方主张，不能替代具体部署与成本验证。[NVIDIA《NVIDIA Opens BioNeMo to Scale Digital Biology for Global Biopharma and Scientific Industry》](https://nvidianews.nvidia.com/news/nvidia-opens-bionemo-to-scale-digital-biology-for-global-biopharma-and-scientific-industry/)

**边界**：上述本地容器首次启动仍需要 NVIDIA NGC 凭证与模型资产下载。本次没有核验到这些 BioNeMo 科学 NIM 的正式隔离网络运行文档，因此不应把“本地运行”自动等同于“完全断网运行”。

### 3. 真实药企已经把科学模型与计算硬件结合进内部工作流【已部署；效果数字为客户/厂商披露】

NVIDIA 客户案例称，Astellas 使用 BioNeMo 的 ESM-1nv 与 NVIDIA DGX A100 训练自有抗体语言模型 `astABpLM`，并把模型纳入既有抗体属性预测流程；其计算环境还使用 Tokyo-1 的 DGX H100。案例中“分子构象筛选提速 50—60 倍”等数字来自客户与 NVIDIA，未做独立复验。[NVIDIA《Astellas Pharma Inc.》客户案例](https://www.nvidia.com/en-us/case-studies/astellas-antibody-language-model-with-bionemo/)

另一份 Astellas 客户案例称，Boltz-2 NIM 已被封装为内部应用并向全公司提供：上线四个月后有 50 多名经常使用者、累计用户超过 2,000 人；案例还称 TensorRT 优化版本约为开源 Python 版本的三倍速度。这些都是厂商/客户披露，但“应用已向全公司提供”可以作为科学能力从少数计算专家分发给更多实验科学家的真实案例。[NVIDIA《Astellas Deploys Structure Prediction AI “Boltz-2 NIM”》](https://www.nvidia.com/en-us/case-studies/astellas-pharma/)

**可支持的文章表述**：更好的科学智能分发，不只是把模型放到网上，还要把专业模型、推理优化、算力和易用应用组合起来，让原本依赖计算专家的能力进入更多科研人员的日常流程。

## 三、实验设备接口：行业扩展层已有真实路径

### 1. Polybot 已连接合成、转运和表征设备【已运行的实验平台】

美国阿贡国家实验室（Argonne National Laboratory）的 Polybot 页面显示，该平台把高性能计算、机器学习、机器人合成、样品转运、表征、测试和数据分析连成系统；设备包括移液与溶液处理、Chemspeed 合成平台、移动机器人，以及光谱、电学、力学和电化学表征设备，多类设备由 Python 软件控制。[Argonne Center for Nanoscale Materials《Polybot》](https://cnm.anl.gov/pages/polybot)

Argonne 进一步披露，Polybot 使用 MADSci 软件以表述性状态转移接口（Representational State Transfer，REST）协调 Chemspeed、UR5e、Tecan 等设备，覆盖配方、合成、纯化和表征工作流。[Argonne Rapid Prototyping Lab《A Self-driving Laboratory for Precise and Efficient Inverse Design of Functional Polymers》](https://rpl.cels.anl.gov/category/projects/)

### 2. MADSci 提供模块化设备接口，但仍处测试版【已提供；beta】

MADSci 官方仓库说明，设备厂商或开发者可以用任意语言实现设备专用节点，再通过统一接口接入系统；当前接口基于 REST 风格的超文本传输协议（Hypertext Transfer Protocol，HTTP）。框架同时覆盖工作流、闭环实验、资源、数据与可观测性管理。[AD-SDL《MADSci Framework》官方仓库](https://github.com/AD-SDL/MADSci)

同一仓库明确标注 MADSci 仍处 beta：核心功能多数可工作且经过测试，但仍可能有缺陷、稳定性问题与破坏性升级。[AD-SDL《MADSci Framework》稳定性说明](https://github.com/AD-SDL/MADSci#notes-on-stability)

**可支持的文章表述**：实验设备连接适合作为科学智能基础设施的行业扩展层；标准接口可以把模型决策、工作流和真实设备连接起来。但目前不能据此声称跨厂商实验室即插即用已经成熟普及。

## 四、三层产品体系与证据映射

| 文章中的产品层         | 可用一手案例                                                      | 可以写到什么程度                                                                       | 不能越过的边界                                       |
| ---------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 标准化科学智能引擎     | BioNeMo Framework、BioNeMo NIM、DeepSeek 开放权重                 | 模型、专业数据处理、训练/推理工具和接口已经可以组合为可复用能力                        | 单个案例不能证明所有科学任务都已可靠或可复验         |
| 计算与部署基础设施     | BioNeMo 本地容器、DGX Cloud/数据中心、GenMol/MolMIM/OpenFold3 NIM | 云端、本地工作站和数据中心可采用同一类容器化科学模型能力；软硬件优化会影响单位任务成本 | 本地不自动等于断网；厂商性能和成本数字需标为公司主张 |
| 实验设备与行业系统连接 | Polybot、MADSci                                                   | 统一接口、工作流和闭环实验已在真实自驱实验室中出现                                     | MADSci 仍为 beta，不能写成成熟通用商业标准           |

## 五、推荐进入正文的谨慎表述

> DeepSeek 给出的线索，不是它最终会亲自做出多少应用，而是它正在把模型能力变成更容易获得的生产资料。元级的百万 Token 定价、兼容主流生态的接口、采用宽松许可证发布的权重，以及官方提供的本地推理路径，共同降低了调用、再开发和自主部署智能的门槛。

> 这并不意味着所有人都能廉价运行完整模型。开放权重降低的是许可和控制门槛，真正的本地部署仍然受硬件、运维与模型规模约束。

> 科学智能的基础设施形态已经不再只是模型接口。BioNeMo 把专业模型、训练与推理软件、容器化部署和加速硬件组合成一套系统；Astellas 的案例进一步显示，优化后的科学模型可以从少数计算专家手中分发给更广泛的科研人员。

> 实验设备连接应当是标准系统之上的行业扩展，而不是每个项目从零开始的定制工程。Polybot 与 MADSci 已证明模型、工作流、机器人和表征设备可以通过模块化接口连接，但这一层仍比计算与部署层更早期。

## 六、不应写成既成事实的表述

- “DeepSeek 的最新完整模型能在普通设备上低成本离线运行。”
- “BioNeMo 已为所有科学模型提供完全断网、开箱即用的部署方案。”
- “科学智能的单位 Token 成本已经有统一行业口径。”
- “MADSci 已成为成熟、稳定、跨设备通用的商业标准。”
- “NVIDIA 或 Astellas 披露的提速和降本数据已经得到独立验证。”
- “这些案例已经证明基础设施模式必然比下游产品模式更赚钱。”

最后一条尤其重要：一手资料能证明产品能力、部署方式和真实使用，不能直接证明文章的商业战略结论。正文应把“不与客户竞争更有利于信任、分发和规模化”明确写成作者判断，而不是伪装成案例已经验证的产业定律。
