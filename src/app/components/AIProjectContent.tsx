import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  ArrowLeft,
  Globe,
  Sparkles,
  Brain,
  Workflow,
  Eye,
  Play,
  Heart,
  Music,
  Star,
  CircuitBoard,
  Layers,
  Cpu,
  Dice1,
  Search,
  MapPin,
  Zap,
  Compass,
  Feather,
  CalendarDays,
  BookOpen,
  Disc3,
  Radio,
  Headphones,
  Check,
  Upload,
} from "lucide-react";

// ─── Image & Video Imports (Outspire) ────────────────────────────────────

import outspireCover from "../../content/ai-projects/outspire/images/cover.png";
import outspireHighlight01 from "../../content/ai-projects/outspire/images/highlight01.png";
import outspireHighlight02 from "../../content/ai-projects/outspire/images/highlight02.png";
import outspireHighlight03 from "../../content/ai-projects/outspire/images/highlight03.png";
// Vite will copy the .mov to dist/assets at build time
import outspireDemoMp4 from "../../content/ai-projects/outspire/videos/demo.mov";

import aliveCover from "../../content/ai-projects/alive/images/cover.png";
import aliveHighlight01 from "../../content/ai-projects/alive/images/highlight01.png";
import aliveHighlight02 from "../../content/ai-projects/alive/images/highlight02.png";
import aliveHighlight03 from "../../content/ai-projects/alive/images/highlight03.png";
import aliveHighlight04 from "../../content/ai-projects/alive/images/highlight04.png";
import aliveDemoMp4 from "../../content/ai-projects/alive/videos/demo.mov";

import claudioCover from "../../content/ai-projects/claudio/images/cover.png";
import claudioHighlight01 from "../../content/ai-projects/claudio/images/highlight01.png";
import claudioHighlight02 from "../../content/ai-projects/claudio/images/highlight02.png";
import claudioHighlight03 from "../../content/ai-projects/claudio/images/highlight03.png";
import claudioDemoMp4 from "../../content/ai-projects/claudio/videos/demo.mov";

import universeCover from "../../content/ai-projects/universe-fragment/images/cover.png";
import universeHighlight01 from "../../content/ai-projects/universe-fragment/images/highlight01.png";
import universeHighlight02 from "../../content/ai-projects/universe-fragment/images/highlight02.png";
import universeHighlight03 from "../../content/ai-projects/universe-fragment/images/highlight03.png";
import universeDemoMp4 from "../../content/ai-projects/universe-fragment/videos/Universe Fragment.mp4";

// ─── Project Asset Maps ──────────────────────────────────────────────────

const projectCovers: Record<string, string> = {
  outspire: outspireCover,
  alive: aliveCover,
  claudio: claudioCover,
  "universe-fragment": universeCover,
};

const projectVideos: Record<string, string> = {
  outspire: outspireDemoMp4,
  alive: aliveDemoMp4,
  claudio: claudioDemoMp4,
  "universe-fragment": universeDemoMp4,
};

// ─── Types ───────────────────────────────────────────────────────────────

export interface AIProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  accentColor: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

interface HighlightItem {
  title: string;
  desc: string;
  image?: string;
}

interface ProjectContent {
  overview: {
    paragraphs: string[];
  };
  whyThisProject: {
    leadIn: string;
    question: string;
    details: { label: string; value: string }[];
  };
  designExploration: {
    description?: string;
    modules: { title: string; subtitle: string; desc: string }[];
    moduleIcons?: React.ReactNode[];
  };
  workflow: {
    nodes: { label: string; optional?: boolean }[];
    icons?: React.ReactNode[];
  };
  highlights: HighlightItem[];
  highlightsIntro?: string;
  highlightsGridCols?: string;
  demoVideo: boolean;
  demoVideoWidth?: number;
  demoMuted?: boolean;
  hideDemoLinks?: boolean;
  demoLinks?: { label: string; url: string }[];
}

// ─── Project Data ────────────────────────────────────────────────────────

const projects: AIProject[] = [
  {
    id: "outspire",
    title: "Outspire",
    subtitle: "AI-powered urban discovery",
    category: "AI × Urban Experience",
    accentColor: "#00f3ff",
    icon: <Globe className="w-5 h-5" />,
    gradientFrom: "#00f3ff",
    gradientTo: "#00d8d6",
  },
  {
    id: "alive",
    title: "Alive",
    subtitle: "A calm space for everyday moments",
    category: "AI × Emotion Design",
    accentColor: "#00ffd8",
    icon: <Heart className="w-5 h-5" />,
    gradientFrom: "#00ffd8",
    gradientTo: "#0fb9b1",
  },
  {
    id: "claudio",
    title: "Claudio",
    subtitle: "AI DJ that understands your music taste",
    category: "AI × Audio",
    accentColor: "#0fb9b1",
    icon: <Music className="w-5 h-5" />,
    gradientFrom: "#0fb9b1",
    gradientTo: "#00d8d6",
  },
  {
    id: "universe-fragment",
    title: "Universe Fragment",
    subtitle: "AI-generated cosmic narratives",
    category: "AI × Storytelling",
    accentColor: "#2bcbba",
    icon: <Star className="w-5 h-5" />,
    gradientFrom: "#2bcbba",
    gradientTo: "#00f3ff",
  },
];

// ─── Project Content Map ─────────────────────────────────────────────────

const contentMap: Record<string, ProjectContent> = {
  outspire: {
    overview: {
      paragraphs: [
        "希望借助 AI 降低探索的门槛，让人与日常生活的城市重新建立一种轻松而温柔的联结。",
        "Outspire 并不是一个旅行攻略 App，它更像一个：帮助人重新发现日常城市的 AI 探索伙伴，它不会规划一整天的行程，也不会告诉你「十大必打卡景点」。",
        "它只负责一件事：给你一个值得出门的理由。",
      ],
    },
    whyThisProject: {
      leadIn:
        "我们每天生活在同一座城市，却越来越少真正探索它。下班之后、周末的时候，我们常常会说：「不知道去哪。」",
      question:
        "如果城市探索不再是一场需要计划的任务，而是一种轻松发生的小冒险，会是什么样？",
      details: [
        { label: "Motivation", value: "探索人与城市、世界的连接方式" },
        { label: "Timeline", value: "2026/06" },
        { label: "Role", value: "产品设计&开发" },
        { label: "Tools", value: "ChatGPT, DeepSeek API, Figma Make, Claude Code" },
      ],
    },
    designExploration: {
      description:
        "Outspire 的设计围绕三个核心模块展开，每一个都致力于降低探索的心理门槛。",
      moduleIcons: [
        <Search className="w-3.5 h-3.5" />,
        <Dice1 className="w-3.5 h-3.5" />,
        <Zap className="w-3.5 h-3.5" />,
      ],
      modules: [
        {
          title: "Module 01",
          subtitle: "从「搜索」到「发现」",
          desc: "减少决策成本，让探索重新变得轻松。\n\n传统产品：搜索关键词 > 浏览攻略 > 筛选地点 > 决定去哪\nOutspire：打开 App > 抽取灵感 > 获得惊喜 > 立即出发",
        },
        {
          title: "Module 02",
          subtitle: "扭蛋式探索体验",
          desc: "借鉴了扭蛋抽卡的交互——城市探索本身就应该保留一点未知感。\n\n每一次抽卡，都是一次随机的小惊喜：\n卡片区分普通款、稀有款、限定款，不同抽取概率。",
        },
        {
          title: "Module 03",
          subtitle: "轻量交互",
          desc: "AI 应该帮助人回到现实，而不是停留在屏幕里。\n\n用户只需要获得灵感，就能立即出发：\nOpen → Discover → Go",
        },
      ],
    },
    workflow: {
      icons: [
        <MapPin className="w-4 h-4" />,
        <Layers className="w-4 h-4" />,
        <Cpu className="w-4 h-4" />,
        <Dice1 className="w-4 h-4" />,
        <Compass className="w-4 h-4" />,
        <Sparkles className="w-4 h-4" />,
      ],
      nodes: [
        { label: "用户当前状态\n（时间/天气/位置）" },
        { label: "筛选符合情境的事件" },
        { label: "生成探索卡片" },
        { label: "随机扭蛋抽取\n（普通款/稀有款/限定款）" },
        { label: "开始探索" },
        { label: "记录感受", optional: true },
      ],
    },
    highlights: [
      {
        title: "Capsule Discovery 扭蛋探索",
        desc: "将城市灵感设计成扭蛋抽取，降低选择焦虑，让探索拥有：仪式感、随机性、游戏感。",
        image: outspireHighlight01,
      },
      {
        title: "Exploration Cards 探索卡片",
        desc: "卡片区分普通款、稀有款、限定款，不同抽取概率，增加趣味性。",
        image: outspireHighlight02,
      },
      {
        title: "Delightful Micro-interactions 轻量交互体验",
        desc: "操作路径简单，营造一种轻松、温柔的探索氛围，让用户感受到：不是在完成任务，而是在等待一次小惊喜。",
        image: outspireHighlight03,
      },
    ],
    demoVideo: true,
    demoVideoWidth: 340,
    demoLinks: [{ label: "体验网址", url: "https://outspire.vercel.app/" }],
  },
  alive: {
    overview: {
      paragraphs: [
        "这是一个没有压力的记录空间，给当代社会的人找一个平静的栖息地。",
        "让记录生活变得更轻松，让平凡日常被看见。",
      ],
    },
    whyThisProject: {
      leadIn:
        "成年人越来越少记录生活。不是没有故事。而是觉得：没时间记录、不知道记录什么、觉得自己的生活不值得记录。",
      question:
        "但很多重要的记忆，恰恰藏在最普通的日常里。",
      details: [
        { label: "Motivation", value: "探索人与生活、自我的连接方式" },
        { label: "Timeline", value: "2026/04" },
        { label: "Role", value: "产品设计&开发" },
        { label: "Tools", value: "ChatGPT, DeepSeek API, Figma Make, Claude Code" },
      ],
    },
    designExploration: {
      description:
        "Alive 的设计围绕三个核心模块展开，每一个都致力于让记录变得更加轻松自然。",
      moduleIcons: [
        <Feather className="w-3.5 h-3.5" />,
        <CalendarDays className="w-3.5 h-3.5" />,
        <BookOpen className="w-3.5 h-3.5" />,
      ],
      modules: [
        {
          title: "Module 01",
          subtitle: "随手记录",
          desc: "如何降低记录门槛，让记录变得轻松、简单\n\nAlive：打开 App → 记录 → 完成",
        },
        {
          title: "Module 02",
          subtitle: "每日主题",
          desc: "减少表达压力，每日随机提供主题，可以围绕主题记录自己的生活，也可以随意记录",
        },
        {
          title: "Module 03",
          subtitle: "月度总结",
          desc: "帮助用户回顾生活，整理提取月度记录中有趣、多次出现的内容，用平和但有力量的文字表达，告诉用户你是被看见的，是在努力生活的。",
        },
      ],
    },
    workflow: {
      icons: [
        <Sparkles className="w-4 h-4" />,
        <Feather className="w-4 h-4" />,
        <Check className="w-4 h-4" />,
        <CalendarDays className="w-4 h-4" />,
        <BookOpen className="w-4 h-4" />,
      ],
      nodes: [
        { label: "随机展示当日主题" },
        { label: "用户记录当日生活\n（文字、图片、录音）" },
        { label: "记录完成" },
        { label: "通过日历回顾记录片段" },
        { label: "查看每月小结" },
      ],
    },
    highlights: [
      {
        title: "随手记录",
        desc: "记录路径最简化，最快只需3步，不强制，让记录变得轻松、简单。",
        image: aliveHighlight01,
      },
      {
        title: "每日主题",
        desc: "每日随机展示主题，增加趣味性与不确定性。",
        image: aliveHighlight02,
      },
      {
        title: "月度总结",
        desc: "文字温柔有力量，让用户被看到，被感受，被需要。",
        image: aliveHighlight03,
      },
      {
        title: "留白设计",
        desc: "画面大量留白，采用涟漪、手绘风格，视觉风格平静、温柔。",
        image: aliveHighlight04,
      },
    ],
    highlightsIntro: "Alive 的核心体验亮点，围绕「轻松记录」与「温柔陪伴」展开。",
    highlightsGridCols: "md:grid-cols-2",
    demoVideo: true,
    demoVideoWidth: 800,
    demoLinks: [{ label: "体验网址", url: "https://aliveapp-eight.vercel.app/" }],
  },
  claudio: {
    overview: {
      paragraphs: [
        "一个基于听歌记录与对话交互的 AI 音乐电台。",
        "这是一个理解你音乐品味的 AI DJ。通过分析用户的：听歌记录、收藏歌曲、高频艺人、听歌时间段、情绪偏好，构建个人音乐画像。",
      ],
    },
    whyThisProject: {
      leadIn:
        "Why Music? 音乐软件记录着我们最真实的情绪轨迹。一个人的歌单里往往隐藏着：情绪变化、生活阶段、兴趣偏好、价值取向。",
      question:
        "一个懂我们的音乐 DJ，往往能在最需要的时候、最合适的时间，播放我们最想听到的音乐。",
      details: [
        { label: "Motivation", value: "探索人与自我的连接方式" },
        { label: "Timeline", value: "2026/05" },
        { label: "Role", value: "产品设计&开发" },
        { label: "Tools", value: "ChatGPT, DeepSeek API, QQ音乐 API, Figma Make, Claude Code" },
      ],
    },
    designExploration: {
      description:
        "Claudio 的设计围绕三个核心模块展开，让音乐推荐从工具变为陪伴。",
      moduleIcons: [
        <Disc3 className="w-3.5 h-3.5" />,
        <Search className="w-3.5 h-3.5" />,
        <Radio className="w-3.5 h-3.5" />,
      ],
      modules: [
        {
          title: "Module 01",
          subtitle: "音乐画像",
          desc: "通过蒸馏用户音乐平台 API 历史记录，生成：\n最常听风格、最常听歌手、情绪偏好、时间偏好",
        },
        {
          title: "Module 02",
          subtitle: "自然语言找歌",
          desc: "让找歌从关键词搜索变成情境表达：\n推荐适合深夜骑车的音乐\n推荐像夏天傍晚一样的歌\n推荐适合一个人坐地铁发呆的歌……",
        },
        {
          title: "Module 03",
          subtitle: "语音电台体验",
          desc: "区别于聊天机器人，让推荐更具陪伴感。AI 拥有：声音、情绪、推荐理由。\n\n例如：「这首歌来自 Lamp。我发现你最近经常在晚上听 City Pop，所以想把它推荐给你。」",
        },
      ],
    },
    workflow: {
      icons: [
        <Music className="w-4 h-4" />,
        <Headphones className="w-4 h-4" />,
        <Brain className="w-4 h-4" />,
        <Disc3 className="w-4 h-4" />,
        <Search className="w-4 h-4" />,
        <Layers className="w-4 h-4" />,
        <Radio className="w-4 h-4" />,
        <Sparkles className="w-4 h-4" />,
      ],
      nodes: [
        { label: "QQ Music API" },
        { label: "用户听歌记录" },
        { label: "LLM 蒸馏分析" },
        { label: "音乐画像构建" },
        { label: "用户自然语言输入" },
        { label: "需求理解、歌曲检索" },
        { label: "AI 语音 DJ 输出" },
        { label: "根据对话内容\n丰富音乐画像" },
      ],
    },
    highlights: [
      {
        title: "Music Taste DNA 音乐品味画像",
        desc: "通过历史数据生成：风格分布、艺人偏好、情绪标签、听歌习惯。",
        image: claudioHighlight01,
      },
      {
        title: "Conversational Discovery 对话式发现音乐",
        desc: "用户无需知道歌曲名称，只需描述感受。",
        image: claudioHighlight02,
      },
      {
        title: "AI DJ Voice AI 私人电台主持人",
        desc: "讲述推荐理由，分享音乐背景，语音播报。",
        image: claudioHighlight03,
      },
    ],
    highlightsIntro: "Claudio 的核心体验围绕「音乐理解」与「情感陪伴」展开。",
    highlightsGridCols: "md:grid-cols-3",
    demoVideo: true,
    demoVideoWidth: 900,
    demoMuted: false,
    hideDemoLinks: true,
    demoLinks: [],
  },
  "universe-fragment": {
    overview: {
      paragraphs: [
        "An interactive experiment about memory, time and perception.",
        "一个关于记忆、时间与感知的交互实验。",
        "记忆从来不是完整保存的画面。它们在时间中漂浮、扩散、消散，又重新连接。Universe Fragment 试图通过 AI 与交互，让那些被遗忘的瞬间再次被感知。",
      ],
    },
    whyThisProject: {
      leadIn:
        "Why Fragment? 如果记忆本身是一种动态存在，它应该如何被呈现？",
      question:
        "照片只是记忆的载体，真正被记住的，是那些被赋予意义的瞬间。因此我希望创造一个体验：用户作为记忆的主体，感受那个瞬间的形状。",
      details: [
        { label: "Motivation", value: "探索人与情绪、自我的连接方式" },
        { label: "Timeline", value: "2026/06" },
        { label: "Role", value: "产品设计&开发" },
        { label: "Tools", value: "ChatGPT, Trae, Claude Code, MediaPipe, Canvas / Three.js" },
      ],
    },
    designExploration: {
      description:
        "Universe Fragment 的设计围绕三个核心模块展开，让记忆从静态照片变成动态体验。",
      moduleIcons: [
        <Layers className="w-3.5 h-3.5" />,
        <Sparkles className="w-3.5 h-3.5" />,
        <Eye className="w-3.5 h-3.5" />,
      ],
      modules: [
        {
          title: "Module 01",
          subtitle: "记忆的碎片化",
          desc: "照片不再是最终结果，而是记忆的原材料。\n\n照片 → 碎片化 → 重构 → 回忆",
        },
        {
          title: "Module 02",
          subtitle: "记忆的动态性",
          desc: "碎片会：漂浮、扩散、消失、聚合\n模拟记忆在时间中的状态变化。",
        },
        {
          title: "Module 03",
          subtitle: "手势交互",
          desc: "通过张开手掌、收拢手掌、拖拽、推动控制碎片运动。\n让回忆成为一种身体参与的过程，而非简单浏览。",
        },
      ],
    },
    workflow: {
      icons: [
        <Upload className="w-4 h-4" />,
        <Eye className="w-4 h-4" />,
        <Sparkles className="w-4 h-4" />,
        <Cpu className="w-4 h-4" />,
        <Play className="w-4 h-4" />,
        <Star className="w-4 h-4" />,
      ],
      nodes: [
        { label: "用户上传照片" },
        { label: "AI 视觉分析\n（提取人物、场景、色彩）" },
        { label: "生成碎片结构" },
        { label: "粒子系统重构" },
        { label: "用户手势交互" },
        { label: "动态记忆体验" },
      ],
    },
    highlights: [
      {
        title: "Fragment Generation 记忆碎片生成",
        desc: "上传照片后，画面自动解构为大量粒子，每张照片都会形成独特结构。",
        image: universeHighlight01,
      },
      {
        title: "Gesture Interaction 手势交互",
        desc: "用户通过身体动作，与记忆建立联系。",
        image: universeHighlight02,
      },
      {
        title: "Dynamic Memory 动态记忆系统",
        desc: "碎片不会静止，而会持续：呼吸、漂浮、聚散。",
        image: universeHighlight03,
      },
    ],
    highlightsIntro: "Universe Fragment 的核心体验围绕「记忆的可视化」与「身体的参与」展开。",
    highlightsGridCols: "md:grid-cols-3",
    demoVideo: true,
    demoVideoWidth: 900,
    demoMuted: false,
    hideDemoLinks: true,
    demoLinks: [],
  },
};

// ─── Mouse Particle Effect ───────────────────────────────────────────────

function MouseParticles({ x, y }: { x: number; y: number }) {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; color: string; size: number; type: number }[]
  >([]);

  useEffect(() => {
    const id = Date.now();
    const newParticle = {
      id,
      x,
      y,
      color: ["#00f3ff", "#00ffd8", "#00d8d6"][Math.floor(Math.random() * 3)],
      size: Math.random() * 4 + 1,
      type: Math.floor(Math.random() * 2),
    };
    setParticles((prev) => [...prev.slice(-25), newParticle]);
  }, [x, y]);

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ scale: 1.5, opacity: 1, rotate: 0 }}
          animate={{ scale: 0, opacity: 0, rotate: 90 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute pointer-events-none z-20"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: p.type === 0 ? p.color : "transparent",
            width: p.size,
            height: p.size,
            boxShadow: p.type === 0 ? `0 0 8px ${p.color}` : "none",
            border: p.type === 1 ? `1px solid ${p.color}` : "none",
            clipPath:
              p.type === 1
                ? "polygon(0% 45%, 45% 45%, 45% 0%, 55% 0%, 55% 45%, 100% 45%, 100% 55%, 55% 55%, 55% 100%, 45% 100%, 45% 55%, 0% 55%)"
                : "none",
          }}
        />
      ))}
    </>
  );
}

// ─── Typewriter Snippet ──────────────────────────────────────────────────

function TypewriterSnippet({ texts, colors }: { texts: string[]; colors: string[] }) {
  const [config, setConfig] = useState({
    text: "",
    color: "",
    top: "0%",
    left: "0%",
    size: "12px",
    visible: false,
  });
  const [display, setDisplay] = useState("");

  const resetSnippet = useCallback(() => {
    const text = texts[Math.floor(Math.random() * texts.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const top = `${Math.floor(Math.random() * 80) + 10}%`;
    const left = `${Math.floor(Math.random() * 70) + 5}%`;
    const size = `${Math.floor(Math.random() * 4) + 11}px`;

    setConfig({ text, color, top, left, size, visible: true });
    setDisplay("");
  }, [texts, colors]);

  useEffect(() => {
    resetSnippet();
    const interval = setInterval(resetSnippet, 6000 + Math.random() * 4000);
    return () => clearInterval(interval);
  }, [resetSnippet]);

  useEffect(() => {
    if (!config.visible) return;

    let i = 0;
    const typeInterval = setInterval(() => {
      setDisplay(config.text.substring(0, i));
      i++;
      if (i > config.text.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setConfig((prev) => ({ ...prev, visible: false }));
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [config.text, config.visible]);

  return (
    <AnimatePresence>
      {config.visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          exit={{ opacity: 0 }}
          className="absolute z-0 font-pixel whitespace-nowrap pointer-events-none"
          style={{
            top: config.top,
            left: config.left,
            color: config.color,
            fontSize: config.size,
            textShadow: `0 0 5px ${config.color}33`,
          }}
        >
          {display}
          <span className="animate-pulse ml-0.5" style={{ borderLeft: `2px solid ${config.color}` }}>
            &nbsp;
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Grid Background Layer ───────────────────────────────────────────────

function GridLayer({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(to right, rgba(0, 243, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 243, 255, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

// ─── Ambient Background Layer ────────────────────────────────────────────

function AmbientEffects({ accentColor }: { accentColor?: string }) {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: accentColor
            ? `radial-gradient(800px circle at 30% 20%, ${accentColor}08, transparent 60%)`
            : undefined,
        }}
      />
      <div className="absolute pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent h-[15%] w-full animate-scan" />
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 6s linear infinite;
        }
      `}</style>
    </>
  );
}

// ─── Project Card (Spotlight Border) ─────────────────────────────────────

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: AIProject;
  index: number;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
      onClick={onClick}
      className="group cursor-pointer relative"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative rounded-2xl overflow-hidden border transition-all duration-500"
        style={{
          borderColor: hovered ? `${project.accentColor}55` : `${project.accentColor}18`,
          background: `linear-gradient(145deg, rgba(10,10,10,1) 0%, rgba(8,8,8,1) 100%)`,
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: hovered
            ? `0 8px 32px ${project.accentColor}15, inset 0 1px 0 ${project.accentColor}22`
            : `0 1px 3px rgba(0,0,0,0.3)`,
        }}
      >
        {hovered && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-75"
            style={{
              background: `radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${project.accentColor}18, transparent 60%)`,
            }}
          />
        )}

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 30%, ${project.accentColor}08 50%, transparent 70%)`,
            backgroundSize: "200% 100%",
            animation: hovered ? "shimmer 2.5s ease-in-out infinite" : "none",
          }}
        />

        <div className="relative z-10 p-7">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
            style={{
              backgroundColor: `${project.accentColor}12`,
              border: `1px solid ${project.accentColor}22`,
              color: project.accentColor,
            }}
          >
            {project.icon}
          </div>

          <h3
            className="text-lg font-bold mb-1 tracking-tight transition-colors duration-300"
            style={{ color: project.accentColor }}
          >
            {project.title}
          </h3>

          <p className="text-stone-500 text-sm mb-5 leading-relaxed">{project.subtitle}</p>

          <div className="h-px mb-4" style={{ background: `linear-gradient(to right, ${project.accentColor}22, transparent)` }} />

          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-[0.15em] font-medium"
            style={{
              backgroundColor: `${project.accentColor}08`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}15`,
            }}
          >
            <CircuitBoard className="w-2.5 h-2.5" />
            {project.category}
          </div>
        </div>

        <div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
          <ExternalLink className="w-4 h-4" style={{ color: project.accentColor }} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Folder Content (AI VIBE LAB) ────────────────────────────────────────

export function AIContent({ onOpenProject }: { onOpenProject: (project: AIProject) => void }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const snippetTexts = [
    "const intent = new Intent('user_experience');",
    "await layout.generate({ sentient: true });",
    "process.env.CREATIVITY = 'infinite';",
    "import { Soul } from '@design/sentience';",
    "design.render(intent + logic);",
    "system.optimize('emotional_resonance');",
    "while(true) { design.evolve(); }",
    "interface UserGoal extends HumanEmotion {}",
    "git commit -m 'feat: neural design engine'",
    "npm install @ai/vibe-generator",
    "const palette = AI.extractHarmony(mood);",
    "layout.autoHeal('accessibility_gap');",
  ];
  const blueGreenColors = ["#00f3ff", "#00ffd8", "#00d8d6", "#0fb9b1", "#2bcbba"];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="p-0 bg-[#050505] text-stone-300 min-h-full font-mono selection:bg-cyan-500 selection:text-black relative overflow-hidden"
    >
      <GridLayer opacity={0.08} />
      <MouseParticles x={mousePos.x} y={mousePos.y} />
      {Array.from({ length: 6 }).map((_, i) => (
        <TypewriterSnippet key={i} texts={snippetTexts} colors={blueGreenColors} />
      ))}
      <AmbientEffects />

      <div className="relative z-10 p-8 pb-32 overflow-y-auto overflow-x-hidden" style={{ scrollbarGutter: "stable" }}>
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500">AI_VIBE_LAB v1.0 — Session Active</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
            <h2 className="text-3xl font-bold text-white tracking-wider italic">AI_VIBE_LAB.session</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl space-y-4 text-stone-400 text-sm leading-relaxed border-l-2 pl-5"
            style={{ borderColor: "#00f3ff44" }}
          >
            <p>AI has become a new design material.</p>
            <p>
              These projects are my experiments on how AI can reshape the way people perceive world, emotions, bodies and everyday
              life.
            </p>
            <p className="text-stone-500 italic text-xs">&ldquo;人如何感知世界&rdquo;</p>
          </motion.div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, #00f3ff22, transparent)" }} />
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Projects</span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, #00f3ff22, transparent)" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onClick={() => onOpenProject(project)} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-[10px] text-stone-600 flex items-center gap-2">
          <span className="text-stone-500">$</span>
          <span className="animate-pulse text-stone-500">_</span>
          <span className="tracking-wider text-stone-600">ls -la ./projects — 4 entries found</span>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

// ─── Project Detail Template ─────────────────────────────────────────────

export function AIProjectDetail({ project, onBack }: { project: AIProject; onBack: () => void }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const snippetTexts = [
    "const intent = new Intent('user_experience');",
    "await layout.generate({ sentient: true });",
    "process.env.CREATIVITY = 'infinite';",
    "import { Soul } from '@design/sentience';",
    "design.render(intent + logic);",
    "system.optimize('emotional_resonance');",
  ];
  const blueGreenColors = ["#00f3ff", "#00ffd8", "#00d8d6", "#0fb9b1", "#2bcbba"];

  // Look up project-specific content; fall back to generic placeholders
  const content: ProjectContent | undefined = contentMap[project.id];

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="bg-[#050505] min-h-full relative overflow-hidden">
      <GridLayer opacity={0.06} />
      <MouseParticles x={mousePos.x} y={mousePos.y} />
      {Array.from({ length: 4 }).map((_, i) => (
        <TypewriterSnippet key={i} texts={snippetTexts} colors={blueGreenColors} />
      ))}
      <AmbientEffects accentColor={project.accentColor} />

      <div className="relative z-10 min-h-full overflow-y-auto">
        {/* ── Sticky Header ── */}
        <div className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-md border-b border-stone-900/80">
          <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-stone-500 hover:text-white transition-colors text-xs uppercase tracking-wider group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              Back to Projects
            </button>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: project.accentColor }} />
              <span className="text-[10px] text-stone-600 uppercase tracking-widest">{project.category}</span>
            </div>
          </div>
        </div>

        {/* ── 01 Project Overview ── */}
        <Section number="01" title="Project Overview" accentColor={project.accentColor}>
          <div className="space-y-10">
            {/* Hero Image — project cover (2x, rendered at template width) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-2xl overflow-hidden border"
              style={{ borderColor: `${project.accentColor}22` }}
            >
              {content ? (
                <img
                  src={projectCovers[project.id] || outspireCover}
                  alt={`${project.title} Project Cover`}
                  className="w-full h-auto block"
                  style={{ maxWidth: "100%" }}
                />
              ) : (
                <div
                  className="w-full aspect-video flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${project.accentColor}12`, border: `1px solid ${project.accentColor}22`, color: project.accentColor }}
                    >
                      {project.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: project.accentColor }}>
                      [ Hero Image ]
                    </span>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Overview text */}
            <div className="space-y-5 max-w-3xl">
              <h3 className="text-xl font-bold tracking-tight" style={{ color: project.accentColor }}>
                {project.title}
              </h3>
              {content ? (
                content.overview.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={i === 0 ? "text-stone-300 leading-relaxed text-base" : "text-stone-400 leading-relaxed text-sm"}
                  >
                    {p}
                  </p>
                ))
              ) : (
                <>
                  <p className="text-stone-400 leading-relaxed">
                    {project.title} is an experimental project exploring how AI can transform the way we interact with everyday
                    experiences.
                  </p>
                  <p className="text-stone-500 text-sm leading-relaxed">Content coming soon.</p>
                </>
              )}
            </div>
          </div>
        </Section>

        {/* ── 02 Why This Project ── */}
        <Section number="02" title="Why This Project" accentColor={project.accentColor}>
          <div className="max-w-3xl space-y-6">
            {content ? (
              <>
                <div className="space-y-4">
                  <p className="text-stone-300 leading-relaxed">{content.whyThisProject.leadIn}</p>
                  <div className="border-l-2 pl-5" style={{ borderColor: `${project.accentColor}44` }}>
                    <p className="text-stone-400 leading-relaxed italic text-sm">{content.whyThisProject.question}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {content.whyThisProject.details.map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-xl border"
                      style={{ borderColor: `${project.accentColor}11`, backgroundColor: `${project.accentColor}05` }}
                    >
                      <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">{item.label}</p>
                      <p className="text-sm text-stone-300">{item.value}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="border-l-2 pl-5" style={{ borderColor: `${project.accentColor}44` }}>
                  <p className="text-stone-300 leading-relaxed italic">
                    &ldquo;Exploring the intersection of technology and human experience.&rdquo;
                  </p>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">Content coming soon.</p>
              </>
            )}
          </div>
        </Section>

        {/* ── 03 Design Exploration ── */}
        <Section number="03" title="Design Exploration" accentColor={project.accentColor}>
          <div className="space-y-8">
            {content ? (
              <>
                <p className="text-stone-400 text-sm max-w-3xl leading-relaxed">{content.designExploration.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {content.designExploration.modules.map((module, i) => (
                    <motion.div
                      key={module.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="p-5 rounded-xl border"
                      style={{ borderColor: `${project.accentColor}15`, backgroundColor: `${project.accentColor}05` }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${project.accentColor}22` }}
                        >
                          <span className="text-white" style={{ filter: `drop-shadow(0 0 3px ${project.accentColor}66)` }}>
                          {content.designExploration.moduleIcons?.[i] ?? (
                          <>
                            {i === 0 && <Search className="w-3.5 h-3.5" />}
                            {i === 1 && <Dice1 className="w-3.5 h-3.5" />}
                            {i === 2 && <Zap className="w-3.5 h-3.5" />}
                          </>
                        )}
                          </span>
                        </div>
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-stone-500">{module.title}</p>
                          <p className="text-sm font-semibold text-stone-200">{module.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-xs text-stone-400 leading-relaxed whitespace-pre-line">{module.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-stone-400 text-sm max-w-3xl leading-relaxed">Content coming soon.</p>
            )}
          </div>
        </Section>

        {/* ── 04 AI Workflow ── */}
        <Section number="04" title="AI Workflow" accentColor={project.accentColor}>
          <div className="space-y-6">
            {content ? (
              <>
                <p className="text-stone-400 text-sm max-w-3xl leading-relaxed">
                  {project.id === "outspire"
                    ? "Outspire 的 AI 工作流从理解用户状态出发，经过筛选、生成、随机抽取，最终引导探索。"
                    : project.id === "alive"
                    ? "Alive 的 AI 工作流围绕记录与回顾展开，让每一次记录都自然融入日常。"
                    : project.id === "claudio"
                    ? "Claudio 的 AI 工作流从音乐数据采集到用户交互反馈，形成完整的音乐推荐闭环。"
                    : project.id === "universe-fragment"
                    ? "Universe Fragment 的 AI 工作流从照片上传到粒子重构，通过手势交互让记忆可见、可触、可感。"
                    : "The AI workflow follows a structured pipeline from user input to generated output."}
                </p>

                <div
                  className="relative p-6 md:p-10 rounded-xl border overflow-hidden"
                  style={{ borderColor: `${project.accentColor}22`, backgroundColor: `${project.accentColor}05` }}
                >
                  {/* Flow nodes with uniform width and directional arrows */}
                  <div className="flex flex-col items-center gap-0 justify-center">
                    {content.workflow.nodes.map((node, i, arr) => (
                      <React.Fragment key={node.label}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-center gap-3 p-3 md:p-4 rounded-lg w-full max-w-xs mx-auto"
                          style={{
                            backgroundColor: node.optional ? "transparent" : `${project.accentColor}10`,
                            border: node.optional
                              ? `1px dashed ${project.accentColor}30`
                              : `1px solid ${project.accentColor}22`,
                            opacity: node.optional ? 0.6 : 1,
                          }}
                        >
                          {/* Node icon */}
                          <div className="shrink-0">
                            {content.workflow.icons?.[i] ? (
                              <span style={{ color: project.accentColor }}>{content.workflow.icons[i]}</span>
                            ) : (
                              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: `${project.accentColor}33` }} />
                            )}
                          </div>
                          <span className="text-[11px] text-stone-400 whitespace-pre-line leading-snug flex-1">{node.label}</span>
                          {node.optional && (
                            <span
                              className="text-[8px] uppercase tracking-widest px-1.5 py-0.5 rounded shrink-0"
                              style={{ backgroundColor: `${project.accentColor}10`, color: project.accentColor }}
                            >
                              Optional
                            </span>
                          )}
                        </motion.div>

                        {/* Directional arrow between nodes */}
                        {i < arr.length - 1 && (
                          <div className="flex flex-col items-center py-1.5">
                            {/* Arrow shaft */}
                            <div
                              className="w-px h-4"
                              style={{ background: `linear-gradient(to bottom, ${project.accentColor}44, ${project.accentColor}22)` }}
                            />
                            {/* Arrow head */}
                            <svg
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                              className="mt-0.5"
                              style={{ color: project.accentColor }}
                            >
                              <path d="M5 8L0 0H10L5 8Z" fill="currentColor" opacity="0.5" />
                            </svg>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-stone-400 text-sm max-w-3xl leading-relaxed">Workflow content coming soon.</p>
              </>
            )}
          </div>
        </Section>

        {/* ── 05 Key Experience Highlights ── */}
        <Section number="05" title="Key Experience Highlights" accentColor={project.accentColor}>
          <div className="space-y-6">
            <p className="text-stone-400 text-sm max-w-3xl leading-relaxed">
              {content?.highlightsIntro || "Key highlights from the project showcasing the core interactions and visual design."}
            </p>

            <div className={`grid grid-cols-1 ${content?.highlightsGridCols || "md:grid-cols-3"} gap-5`}>
              {content
                ? content.highlights.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-xl overflow-hidden border group"
                      style={{ borderColor: `${project.accentColor}15` }}
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden bg-stone-900">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-[10px] text-stone-600 uppercase tracking-widest">[ Image ]</span>
                          </div>
                        )}
                      </div>
                      {/* Caption */}
                      <div className="p-4">
                        <p className="text-xs font-semibold text-stone-200 leading-relaxed">{item.title}</p>
                        <p className="text-[10px] text-stone-500 mt-1.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))
                : (
                  <>
                    <div className="aspect-video rounded-xl border flex items-center justify-center" style={{ borderColor: `${project.accentColor}15` }}>
                      <span className="text-[10px] text-stone-600 uppercase tracking-widest">[ Screenshots coming soon ]</span>
                    </div>
                  </>
                )}
            </div>
          </div>
        </Section>

        {/* ── 06 Demo ── */}
        <Section
          number="06"
          title="Demo"
          accentColor={project.accentColor}
          last
          headerExtra={
            !content?.hideDemoLinks && (content?.demoLinks?.length ?? 0) > 0 ? (
              <div className="flex flex-wrap gap-3">
                {content!.demoLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.03]"
                    style={{
                      backgroundColor: `${project.accentColor}10`,
                      border: `1px solid ${project.accentColor}22`,
                      color: project.accentColor,
                    }}
                  >
                    <Compass className="w-3.5 h-3.5" />
                    {link.label}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            ) : null
          }
        >
          <div className="space-y-6">
            {content?.demoVideo ? (
              <div
                className="rounded-xl overflow-hidden border relative mx-auto"
                style={{ borderColor: `${project.accentColor}22`, width: content?.demoVideoWidth ? `${content.demoVideoWidth}px` : "340px" }}
              >
                <video
                  controls
                  playsInline
                  muted={content?.demoMuted !== false}
                  preload="metadata"
                  className="w-full h-auto block"
                  style={{ maxWidth: "100%" }}
                  key={project.id}
                >
                  <source
                    src={projectVideos[project.id] || outspireDemoMp4}
                    type="video/mp4"
                  />
                  <source
                    src={projectVideos[project.id] || outspireDemoMp4}
                    type="video/quicktime"
                  />
                  <p className="text-stone-400 text-xs p-4 text-center">
                    Your browser does not support this video format.
                    <br />Try downloading the file to view it.
                  </p>
                </video>
              </div>
            ) : (
              <div
                className="w-full aspect-video rounded-xl overflow-hidden relative flex items-center justify-center border group"
                style={{ borderColor: `${project.accentColor}22`, background: `linear-gradient(135deg, #0a0a0a 0%, #111111 100%)` }}
              >
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: `radial-gradient(600px circle at 50% 50%, ${project.accentColor}, transparent 70%)` }}
                />
                <motion.div whileHover={{ scale: 1.1 }} className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${project.accentColor}15`, border: `1px solid ${project.accentColor}33` }}
                  >
                    <Play className="w-6 h-6" style={{ color: project.accentColor }} />
                  </div>
                  <span className="text-xs text-stone-500 uppercase tracking-widest">[ Demo Video ]</span>
                </motion.div>
              </div>
            )}
          </div>
        </Section>

        {/* Footer */}
        <div className="border-t border-stone-900/80 py-6 text-center">
          <p className="text-[10px] text-stone-600 uppercase tracking-widest">
            {project.title} &mdash; AI_VIBE_LAB Project
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Section Wrapper ─────────────────────────────────────────────────────

function Section({
  number,
  title,
  accentColor,
  children,
  last,
  headerExtra,
}: {
  number: string;
  title: string;
  accentColor: string;
  children: React.ReactNode;
  last?: boolean;
  headerExtra?: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-4xl mx-auto px-6 py-14 ${!last ? "border-b" : ""}`}
      style={{ borderColor: `${accentColor}08` }}
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: accentColor }}>
          {number}
        </span>
        <div className="h-px flex-1" style={{ background: `linear-gradient(to right, ${accentColor}33, transparent)` }} />
      </div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
        {headerExtra && <div className="shrink-0">{headerExtra}</div>}
      </div>
      {children}
    </motion.section>
  );
}
