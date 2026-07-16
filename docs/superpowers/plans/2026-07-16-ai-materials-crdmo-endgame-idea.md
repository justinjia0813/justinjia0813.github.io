# 人工智能材料研发终局文章 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把现有研究备忘录重写成一篇面向一级市场投资人、围绕“人工智能材料研发的终局不是软件公司”展开的观点文章。

**Architecture:** 只修改现有 Markdown 草稿，保留头信息与未发布状态。正文采用一条连续论证链，从软件能力贬值推到中试能力稀缺，再推到专业研发平台的复利与投资判断。

**Tech Stack:** Markdown、Quartz 静态网站生成器、现有内容测试与构建命令。

---

### Task 1: 重写正文

**Files:**
- Modify: `content/blogs/ai-materials-investment-thesis.md`

- [ ] **Step 1: 保留草稿边界**

保留日期、别名和 `draft: true`。把标题改为《AI for Materials 的终局，不是软件公司》，描述改为“真正值得投资的，是能够把材料研发推到中试，并让交付经验持续复利的平台”。正文第一句写明 AI for Materials（Artificial Intelligence for Materials，人工智能赋能材料研发，指用人工智能连接材料数据、计算、实验与工艺开发）的完整含义。

- [ ] **Step 2: 用六段论证链替换备忘录正文**

正文控制在 1500—2000 字，并按以下顺序连续推进：

1. 用“通用模型公司加材料专家能否替代创业公司”的问题开场；明确如果创业公司只提供软件功能，答案是能。
2. 解释文献检索、知识问答和候选配方生成会成为基础能力，因此软件功能本身不能支撑长期壁垒。
3. 写清完整价值链：“模型生成候选方案 → 实验复验 → 工艺开发 → 中试放大 → 客户验证”，并指出真正稀缺的是把答案推到中试。
4. 解释设备利用、失败数据、工艺经验和跨项目工作流如何让专业平台产生复利。
5. 用宁德时代说明下游企业仍掌握核心数据、产品、客户、认证和量产；用药明康德类比材料 CRDMO（Contract Research, Development and Manufacturing Organization，合同研究、开发和生产组织，指承接材料研发、工艺开发、中试验证与部分生产放大的专业平台）的组织分工，同时说明材料行业不会完整复制医药行业。
6. 以投资判断收束：不要只问模型多强，要问公司能否把候选方案推到中试，以及每完成一个项目后，下一次交付是否更快、更便宜、更可靠。

- [ ] **Step 3: 做一次中文重写**

逐段删除研究备忘录式小标题、重复要点、机械连接词和宣传性表达。宁德时代与药明康德各只承担一个有限功能；全文不使用“词元造物”，不把方向判断写成确定预测。

### Task 2: 检查文章约束

**Files:**
- Verify: `content/blogs/ai-materials-investment-thesis.md`

- [ ] **Step 1: 检查草稿状态、术语和禁用内容**

Run:

```bash
rg -n 'draft: true|Artificial Intelligence for Materials|Contract Research, Development and Manufacturing Organization|宁德时代|药明康德' content/blogs/ai-materials-investment-thesis.md
! rg -n '词元造物|为什么是现在|我会看什么|反方问题' content/blogs/ai-materials-investment-thesis.md
```

Expected: 第一条命令找到所有必需内容；第二条命令无匹配并返回成功。

- [ ] **Step 2: 检查篇幅和格式**

Run:

```bash
python3 -c "from pathlib import Path; p=Path('content/blogs/ai-materials-investment-thesis.md'); s=p.read_text(); body=s.split('---', 2)[-1]; print(len(''.join(body.split())))"
git diff --check -- content/blogs/ai-materials-investment-thesis.md
```

Expected: 去除空白后的正文长度接近 1500—2000 个字符；格式检查无输出。

### Task 3: 验证网站并提交

**Files:**
- Verify: `content/blogs/ai-materials-investment-thesis.md`

- [ ] **Step 1: 运行内容测试**

Run: `npm test`

Expected: 71 项测试全部通过，失败数为 0。

- [ ] **Step 2: 构建网站**

Run: `npx quartz build`

Expected: 构建成功；文章因为 `draft: true` 被过滤，不进入公开输出。

- [ ] **Step 3: 检查草稿未被输出**

Run:

```bash
! rg -l 'AI for Materials 的终局，不是软件公司' public
```

Expected: 无匹配并返回成功。

- [ ] **Step 4: 只提交正文**

Run:

```bash
git add -- content/blogs/ai-materials-investment-thesis.md
git diff --cached --check
git commit -m "content: polish AI materials endgame article"
```

Expected: 新提交只包含目标文章，不包含工作区中的其他改动。
