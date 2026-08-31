# 《调研之后：分析师如何找到自己的技术栈》产品能力核验

核验日期：2026-08-31

本文只用产品说明当前实现方式。产品不承担文章的核心论证，五层系统也不对应五款固定软件。

## Obsidian Properties 与 Bases

- 官方来源：[Properties](https://obsidian.md/help/properties)、[Introduction to Bases](https://obsidian.md/help/bases)
- 核验日期：2026-08-31
- 对应层级：数据层、反馈层
- 可以支持：Properties 可在笔记中保存文本、链接、日期、复选框和数字等结构化数据；Bases 可基于 Markdown 文件及其属性建立可编辑、排序和筛选的数据库式视图，底层数据仍保存在本地 Markdown 文件中。
- 不能支持：官方资料没有证明 Obsidian 会自动完成投资项目归档、人物实体识别、任务同步或投资复盘；这些字段、模板和连接仍需用户自行设计。
- 正文用途：用于说明公司、人物、假设和项目状态可以先沉淀为可关联、可导出的结构化记录，也可用同一批属性建立复盘视图。

## n8n Workflows

- 官方来源：[Create and run workflows](https://docs.n8n.io/build/understand-workflows/create-and-run-workflows/)、[Work with nodes](https://docs.n8n.io/build/understand-workflows/workflow-components/work-with-nodes/)
- 核验日期：2026-08-31
- 对应层级：自动化层
- 可以支持：n8n 工作流由连接的节点组成，可在触发条件发生时运行；节点可以启动流程、获取和发送数据，以及处理和转换数据。
- 不能支持：连接节点不等于流程已经可靠。用户仍需配置凭据、字段映射、异常处理和人工检查；官方资料也没有证明 n8n 能自行理解投资语义或承担投资判断。
- 正文用途：用于说明邮件、会议记录、资料库、模型和任务系统之间的重复搬运，可以由轻量工作流连接。

## OpenAI Responses API 的文件检索

- 官方来源：[Create a model response](https://developers.openai.com/api/reference/cli/resources/responses/methods/create)、[Vector store files](https://platform.openai.com/docs/api-reference/vector-stores-files)
- 核验日期：2026-08-31
- 对应层级：智能层
- 可以支持：Responses API 可接收文本、图像或文件输入，并调用文件检索等内置工具或用户定义的函数；文件检索可以使用向量库中的既有文件，为模型回答提供外部资料。
- 不能支持：文件检索只扩大模型对资料的访问，不自动保证来源正确、字段完整、结论成立或行动合适；证据等级、投资假设和最终决策仍需另行定义。
- 正文用途：用于说明智能层应在已有数据上完成检索、比较、总结和提出未知项，而不是在每次任务中重新从公开信息开始。

## Todoist Tasks

- 官方来源：[Schedule a date and time for your Todoist tasks](https://www.todoist.com/help/todoist/features/schedule-a-date-and-time-for-your-todoist-tasks-q7VobO)、[Tasks and planning](https://www.todoist.com/help/todoist/features/tasks-and-planning)
- 核验日期：2026-08-31
- 对应层级：行动层
- 可以支持：Todoist 可创建任务、设置日期和时间、使用重复日期，并提供任务描述、优先级、子任务、评论、附件和已完成任务等功能入口。
- 不能支持：任务管理器不会自动知道哪一个投资未知项最重要，也不会天然把任务结果回填到公司、人物、假设和决策记录中；这条连接仍需流程设计。
- 正文用途：用于说明待验证问题应离开笔记正文，转化为有负责人、时间和状态的明确行动。

## 采用边界

正文最多各用一句介绍上述产品，并紧邻其对应能力。反馈层不再新增产品名：反馈的关键不是购买复盘软件，而是把后续事实重新连接到原始假设、价格、风险和触发条件。若删除全部产品名称，文章的四类摩擦、五层系统与项目闭环仍应成立。
