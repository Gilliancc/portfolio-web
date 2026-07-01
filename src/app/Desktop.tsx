import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X } from "lucide-react";
import { TopBar } from "./components/TopBar";
import { DesktopIcon } from "./components/DesktopIcon";
import { Window } from "./components/Window";
import { Messenger } from "./components/Messenger";
import { DraggableElement } from "./components/DraggableElement";
import { GrassEasterEgg } from "./components/GrassEasterEgg";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { AIContent, AIProjectDetail } from "./components/AIProjectContent";
import type { AIProject } from "./components/AIProjectContent";

// Image imports from Figma
import imgImg16451 from "figma:asset/0506a47f97360662d97ea083e1d99b372468dd1a.png";
import imgImageMistyMornings from "figma:asset/daded0680e066bc6d4b36d9c581a411bdedb34f0.png";
import imgImageMe2024 from "figma:asset/41dea2e1e5e05141a8b889ffcc7ccd9dd02b19dc.png";
import imgImg16111 from "figma:asset/58ebce54940dc9125171c505994c00a660f00f2b.png";
import img06241 from "figma:asset/85115c66f559d15067a1d6b406b60b8537220a9c.png";
import imgImageMe2025 from "figma:asset/31e2b6b057445915c0c2d0c2eb790d9cc9be0a85.png";
import imgImage7 from "figma:asset/99cb29c465774b8a176ab3927e689adba485dd8e.png";
import imgImage8 from "figma:asset/81720f96878ce87d44551eb4fa78a2ff6007ff65.png";

// Project Covers
import imgProjectContract from "figma:asset/18135256c4843418dbb94f23dc134edf12c17e4a.png";
import imgProjectHR from "figma:asset/f0b19c68be58672530653e1b8feed207794f39bb.png";
import imgProjectBot from "figma:asset/6d28176298504deb3e1b30f5c0dba60c1f39d0e9.png";
import imgProjectExam from "figma:asset/528650967f7aaabba8a0123314d349650a39d4e6.png";
import imgProjectOthers from "figma:asset/7b4cb9361c7dd5d4d5154892010fac5b362e5dbb.png";
import imgSpring from "figma:asset/a76346d79e49c24a0c53b5b4695d5431e7019bb5.png";
import imgSunsetChongming from "figma:asset/adb859688e7f41ae68866b1c6dded46a14bf9d35.png";
import imgRandomSnap from "figma:asset/e2fe2d908b87c1ee2e6eff184911003252fc9b15.png";
import img4PM from "figma:asset/55a5d2b9c95469d4e1a927b8717000927d1789aa.png";
import imgNewGlasses from "figma:asset/8403dcb858d51fe6cff46515c161a938c1399e75.png";
import imgPattayaPier from "figma:asset/e7fc10b70cbde9cc7c12aa882e31572de69e3797.png";
import imgWinterWestBund from "figma:asset/4b250e48da2a13e42bc2f23a632cce776803aaa7.png";
import imgEastLake from "figma:asset/65841b4f6a802535b1fd6e15d426e5c780421ca5.png";
import imgFlowers from "figma:asset/4cf46ebeee60f96a879ea293e958b5471293da4b.png";

// Contract Project Specific Images
import imgContract1 from "figma:asset/a025282d831ec4f435c7f97befa2550f1a8d4b3b.png";
import imgContract2 from "figma:asset/1f2ebe93c6a1258d7787910a0c5e39c9efca0208.png";
import imgContract3 from "figma:asset/e880c3ef64ea5455e207f2a9b134b9820df848e8.png";
import imgContract4 from "figma:asset/395fa0b891cca08a4c3f1a953deb3e37520a1ff0.png";
import imgContract5 from "figma:asset/1bbb03aa0739a78b983cf0472147920786ca8d3d.png";
import imgContract6 from "figma:asset/b38d1b43a624905f2a6faa317ad4506f1b509fe1.png";
import imgContract7 from "figma:asset/f5bc0049ce7e948207ffd82c7b617979f55265fd.png";
import imgContract8 from "figma:asset/921062231783111625d14d4f122a63064f091703.png";
import imgContract9 from "figma:asset/9e4bffe081404ab45a53a2d4bbe92e882362fa60.png";
import imgContract10 from "figma:asset/57af60d3a080605f6970f9100e2165267ce4dab7.png";

// HR Project Specific Images
import imgHR1 from "figma:asset/68f52b782f7614664ddab154b362820e1f03a0d4.png";
import imgHR2 from "figma:asset/523ac84c39900c10cd0077766b8e4736b9dfb0f9.png";
import imgHR3 from "figma:asset/3ccf11c30a48e583af572940f597401a86bc0653.png";
import imgHR4 from "figma:asset/ad1c8211f7f6be3c8344ee5bcb80e6051522a4c5.png";
import imgHR5 from "figma:asset/d288f9f36b67ff1915d06001cd1fb2db4b6924f4.png";
import imgHR6 from "figma:asset/f195cfc26d50ea2ef829008b31062279771c848b.png";
import imgHR7 from "figma:asset/845792408564d7818f5f207292c7d1464f652d82.png";
import imgHR8 from "figma:asset/100ecab30f526168a449203240ba9a1b399a9ba9.png";

// Bot Project Specific Images
import imgBot1 from "figma:asset/14d15d7255e2307998e8caa8f4e9b619c9b0ffae.png";
import imgBot2 from "figma:asset/e803e90c0cac52facdb4e005f64bd505a7651b44.png";
import imgBot3 from "figma:asset/4b5037e21ef69f5eb4b53c6c73794ddb434191d2.png";
import imgBot4 from "figma:asset/63726e825a287a288302cbc9d02f33fc8018376d.png";
import imgBot5 from "figma:asset/651a59bc9e15243017133cfa2b6ce864c493d81d.png";
import imgBot6 from "figma:asset/b9fd83bfabaa86814c756e523a143336eb6b12d6.png";
import imgBot7 from "figma:asset/15c8dec13405c0ba702a68330a89d56cb814dbe5.png";
import imgBot8 from "figma:asset/7f588d94df548459def3d42323e11212f44fb968.png";

// Exam Project Specific Images
import imgExam1 from "figma:asset/1546f8df2abc178d99a8dcf7c8acebd5f0049fb8.png";
import imgExam2 from "figma:asset/157506ff16383b4d2ab2f1284584951f244947ec.png";
import imgExam3 from "figma:asset/2f6d36a184410bf11dcb32b97e5d578800381073.png";
import imgExam4 from "figma:asset/2212d8b5b87ec65fa312ab957b0a310d419fba47.png";
import imgExam5 from "figma:asset/96c2bba21065372e8bf045144559526c1244ca77.png";
import imgExam6 from "figma:asset/da007055075b1d7e8aeefee7dc6eb7cc5c828145.png";
import imgExam7 from "figma:asset/1afd0872bf8196566ad3fa7227588c28c85ab928.png";
import imgExam8 from "figma:asset/a2bdc83e0453471f4c068bad3fdd382fabbf7c2c.png";

// Resume Image
import imgResume from "../assets/cv-web.png";

// Others Project Specific Images
import imgOther1 from "figma:asset/2f5702db8747c30c6933dc513286f3dd29df0c4d.png";
import imgOther2 from "figma:asset/4f7a7435edcae0477f7475aa17b591b71a107b15.png";
import imgOther3 from "figma:asset/00cb5e50c38a2cb4a4798d943a1c5ef21bf2784b.png";
import imgOther4 from "figma:asset/49fdcf44984af670c7d81a4dc0cff7f6992e8c40.png";
import imgOther5 from "figma:asset/a4347b6932143d6b653cec01c10a33106fb5bcd0.png";
import imgOther6 from "figma:asset/db6f7f98bba9bfce8236a5ae04c72818ad428f0b.png";
import imgOther7 from "figma:asset/a53fb6462031b533cbf3e55fe01c8b321085acae.png";
import imgOther8 from "figma:asset/48d1f64a6bb2ce9b3cbfd69b8c17fcf356e0528c.png";

export type WindowData = {
  id: string;
  title: string;
  type: "folder" | "file";
  content: React.ReactNode;
  isOpen: boolean;
  zIndex: number;
  headerColor?: string;
  size?: '80%';
  isCentered?: boolean;
  onBack?: () => void;
  width?: number;
  fullScreen?: boolean;
};

export function Desktop() {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [maxZIndex, setMaxZIndex] = useState(10);
  const [showMessenger, setShowMessenger] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessenger(true), 3000);
    const hideTimer = setTimeout(() => setShowMessenger(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const openWindow = (params: {
    id: string;
    title: string;
    type: "folder" | "file";
    content: React.ReactNode;
    headerColor?: string;
    size?: '80%';
    isCentered?: boolean;
    onBack?: () => void;
    width?: number;
    fullScreen?: boolean;
  }) => {
    const { id, title, type, content, headerColor, size, isCentered, onBack, width, fullScreen } = params;

    setWindows(prev => {
      const highestZ = Math.max(...prev.map(w => w.zIndex), 10);
      const newZ = highestZ + 1;
      setMaxZIndex(newZ);

      const existing = prev.find((w) => w.id === id);
      if (existing) {
        return prev.map((w) =>
          w.id === id ? { ...w, isOpen: true, zIndex: newZ, content, headerColor, size, isCentered, onBack, width, fullScreen } : w
        );
      } else {
        return [...prev, { id, title, type, content, isOpen: true, zIndex: newZ, headerColor, size, isCentered, onBack, width, fullScreen }];
      }
    });
    
    const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");
    audio.volume = 0.05;
    audio.play().catch(() => {});
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w)));
  };

  const focusWindow = (id: string) => {
    setWindows(prev => {
      const highestZ = Math.max(...prev.map(w => w.zIndex), 10);
      const newZ = highestZ + 1;
      setMaxZIndex(newZ);
      return prev.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w));
    });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden font-sans select-none bg-[#f3f0eb]">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
        style={{ backgroundImage: `url(${imgImg16451})` }}
      />

      <TopBar name="Gillian CHEN" />

      {/* Desktop Area */}
      <div className="relative w-full h-full pt-12">
        
        {/* Left Functional Area (Adaptive to Left Margin) */}
        <div className="absolute left-[120px] top-0 w-[200px] h-full pointer-events-none">
          <div className="absolute left-[2px] top-[177px] pointer-events-auto">
            <DesktopIcon label="Work" color="blue" onDoubleClick={() => openWindow({ id: "work", title: "Work", type: "folder", content: <WorkContent onOpenProject={(p: any) => openWindow({ id: p.id, title: p.title, type: "file", content: <ProjectDetail project={p} />, fullScreen: true, onBack: () => { closeWindow(p.id); focusWindow("work"); } })} />, headerColor: "#51a2ff", size: "80%" })} />
          </div>
          <div className="absolute left-[117px] top-[257px] pointer-events-auto">
            <DesktopIcon label="Life🍃" color="pink" onDoubleClick={() => openWindow({ id: "life", title: "Life", type: "folder", content: <LifeFolderContent />, headerColor: "#fb64b6", size: "80%" })} />
          </div>
          <div className="absolute left-[-20px] top-[351px] pointer-events-auto">
            <DesktopIcon label="AI Project" color="green" onDoubleClick={() => openWindow({ id: "ai", title: "AI Project", type: "folder", content: <AIContent onOpenProject={(p: AIProject) => openWindow({ id: p.id, title: p.title, type: "file", content: <AIProjectDetail project={p} onBack={() => { closeWindow(p.id); focusWindow("ai"); }} />, fullScreen: true })} />, fullScreen: true, headerColor: "#00d492" })} />
          </div>
          <div className="absolute left-[133px] top-[402px] pointer-events-auto">
            <DesktopIcon label="About Me.txt" type="file" onDoubleClick={() => openWindow({ id: "about", title: "About Me.txt", type: "file", content: <AboutMeContent /> })} />
          </div>
          <div className="absolute left-[9px] top-[525px] pointer-events-auto">
            <DesktopIcon label="Resume.pdf" type="pdf" onDoubleClick={() => openWindow({ id: "resume", title: "Resume.pdf", type: "file", content: <ResumeContent />, size: "80%" })} />
          </div>
        </div>

        {/* Right Collage Area (Adaptive to Right Margin) */}
        <div className="absolute right-[120px] top-0 w-[600px] h-full pointer-events-none">
          <div className="pointer-events-auto">
            <DraggableElement initialX={646 - 560} initialY={141} rotation={1}>
              <div className="bg-[#fef9c3] h-[191px] w-[192px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] p-4 font-mono text-xs text-[#292524] relative overflow-hidden">
                <div className="absolute bg-[rgba(0,0,0,0.05)] blur-[8px] h-[191px] left-[4px] top-[4px] w-[192px] -z-1" />
                <div className="relative z-10 leading-loose">
                  <p className="font-bold mb-2 font-[Courier_Prime]">About Me ☕️</p>
                  <p className="font-[Courier_New]">- 3 years of work experience</p>
                  <p className="font-[Courier_New]">- UX&UI design(focus on toB)</p>
                  <p className="font-[Courier_New]">- Wuhan University, Tongji University</p>
                </div>
              </div>
            </DraggableElement>
          </div>

          <div className="pointer-events-auto">
            <DraggableElement initialX={625 - 560} initialY={390} rotation={-1}>
              <div className="bg-white p-3 shadow-lg w-[240px] flex flex-col gap-3">
                 <div className="h-[216px] w-full overflow-hidden bg-stone-100">
                    <img src={imgImageMistyMornings} alt="Misty Mornings" className="w-full h-full object-cover" />
                 </div>
                 <div className="font-mono text-[14px] text-[#57534d] text-center rotate-1">
                    <p className="font-[Courier_Prime]">📍Base in GuangZhou,</p>
                    <p className="font-[Courier_Prime]">FoShan</p>
                 </div>
              </div>
            </DraggableElement>
          </div>

          <div className="pointer-events-auto">
            <DraggableElement initialX={792 - 560} initialY={235} rotation={1}>
               <div className="bg-white p-3 shadow-lg w-[220px] flex flex-col gap-2">
                  <div className="h-[196px] w-full overflow-hidden bg-stone-100">
                     <img src={imgImageMe2024} alt="Me" className="w-full h-full object-cover" />
                  </div>
                  <div className="font-mono text-[14px] text-[#57534d] text-center rotate-1">
                     <p className="font-[Courier_Prime]">Me, ISFP 👩🏼‍🦰</p>
                  </div>
               </div>
            </DraggableElement>
          </div>

          <div className="pointer-events-auto">
            <DraggableElement initialX={976 - 560} initialY={502} rotation={-1}>
               <div className="bg-[#e0f2fe] h-[123px] w-[192px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] p-4 font-mono text-xs text-[#292524]">
                  <p className="font-[Courier_New]">“Work is not the whole life”</p>
                  <p className="font-[Courier_New]">try everything/...</p>
                  <p className="font-[Courier_New]">guitar,dance,language</p>
               </div>
            </DraggableElement>
          </div>

          <div className="pointer-events-auto">
            <DraggableElement initialX={865 - 560} initialY={196} rotation={2}>
               <div className="flex flex-col items-center gap-1">
                  <img src={imgImage7} alt="Name card" className="w-[255px] h-[74px] object-contain" />
               </div>
            </DraggableElement>
          </div>

          <div className="pointer-events-auto">
            <DraggableElement initialX={1002 - 560} initialY={314} rotation={-5}>
               <img src={img06241} alt="Cloud sticker" className="size-[74px] mix-blend-multiply opacity-80" />
            </DraggableElement>
          </div>

          <div className="pointer-events-auto">
            <DraggableElement initialX={1034 - 560} initialY={364} rotation={3}>
               <img src={imgImg16111} alt="Small collage" className="w-[96px] h-[118px] object-cover shadow-md" />
            </DraggableElement>
          </div>

          <div className="pointer-events-auto">
            <DraggableElement initialX={816 - 560} initialY={553} rotation={-2}>
               <div className="size-[144px] overflow-hidden shadow-md">
                  <img src={imgImageMe2025} alt="Me 2025" className="w-full h-full object-cover" />
               </div>
            </DraggableElement>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {windows.filter(w => w.isOpen).map((win) => (
          <Window 
            key={win.id}
            data={win}
            onClose={() => closeWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            onBack={win.onBack}
          />
        ))}
      </AnimatePresence>

      <Messenger show={showMessenger} onClose={() => setShowMessenger(false)} />
      
      <GrassEasterEgg />
    </div>
  );
}

function WorkContent({ onOpenProject }: { onOpenProject: (p: any) => void }) {
  const projects = [
    { 
      id: "project-contract", 
      title: "电子劳动合同项目", 
      category: "UX&UI Design • 2025", 
      cover: imgProjectContract, 
      imageCount: 10, 
      theme: "digital contract legal",
      customImages: [imgContract1, imgContract2, imgContract3, imgContract4, imgContract5, imgContract6, imgContract7, imgContract8, imgContract9, imgContract10]
    },
    { 
      id: "project-hr", 
      title: "人事系统应用", 
      category: "UX&UI Design • 2025", 
      cover: imgProjectHR, 
      imageCount: 8, 
      theme: "HR management system",
      customImages: [imgHR1, imgHR2, imgHR3, imgHR4, imgHR5, imgHR6, imgHR7, imgHR8]
    },
    { 
      id: "project-bot", 
      title: "聊天机器人情感化回应系统", 
      category: "Emotional Design • 2023-2025", 
      cover: imgProjectBot, 
      imageCount: 8, 
      theme: "AI chatbot interface",
      customImages: [imgBot1, imgBot2, imgBot3, imgBot4, imgBot5, imgBot6, imgBot7, imgBot8]
    },
    { 
      id: "project-exam", 
      title: "在线测评系统", 
      category: "UX&UI Design • 2024", 
      cover: imgProjectExam, 
      imageCount: 8, 
      theme: "online assessment exam",
      customImages: [imgExam1, imgExam2, imgExam3, imgExam4, imgExam5, imgExam6, imgExam7, imgExam8]
    },
    { 
      id: "project-others", 
      title: "其他作品", 
      category: "Others • 2023-2025", 
      cover: imgProjectOthers, 
      imageCount: 8, 
      theme: "design portfolio exploration",
      customImages: [imgOther1, imgOther2, imgOther3, imgOther4, imgOther5, imgOther6, imgOther7, imgOther8]
    },
  ];

  return (
    <div className="p-8 pb-32 bg-[#fafafa] min-h-full overflow-y-auto overflow-x-hidden" style={{ scrollbarGutter: 'stable' }}>
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-stone-900 mb-2">Design Work</h2>
        <div className="h-1 w-12 bg-blue-500 rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4">
        {projects.map((project, i) => (
          <div key={i} className="group cursor-pointer" onClick={() => onOpenProject(project)}>
            <div className="aspect-[16/10] rounded-xl border border-stone-200 overflow-hidden relative bg-white">
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                <ImageWithFallback src={project.cover} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-stone-900/5 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ExternalLink className="w-4 h-4 text-stone-700" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-bold text-stone-800 tracking-tight">{project.title}</p>
              <p className="text-[11px] font-medium text-stone-400 uppercase tracking-widest">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDetail({ project }: { project: any }) {
  // Unsplash images for the project theme
  const projectImages = [
    "https://images.unsplash.com/photo-1599408443565-829a8dfd7e9a",
    "https://images.unsplash.com/photo-1758518730327-98070967caab",
    "https://images.unsplash.com/photo-1761305135372-bc5c84c402d0",
    "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee",
    "https://images.unsplash.com/photo-1687211980289-ba127aa649e8"
  ];

  return (
    <div className="bg-[#f0f0f0] min-h-full flex flex-col gap-2">
      {Array.from({ length: project.imageCount }).map((_, i) => {
        let imgSrc = "";
        if (project.customImages && i < project.customImages.length) {
          imgSrc = project.customImages[i];
        } else {
          // Use unsplash placeholders for the rest
          const customLen = project.customImages ? project.customImages.length : 0;
          const placeholderIndex = i - customLen;
          imgSrc = `${projectImages[placeholderIndex % projectImages.length]}?auto=format&fit=crop&q=80&w=1600`;
        }

        return (
          <div key={i} className="w-full bg-white">
             <ImageWithFallback 
                src={imgSrc}
                alt={`${project.title} screenshot ${i+1}`}
                className="w-full h-auto block"
             />
          </div>
        );
      })}
    </div>
  );
}

function ResumeContent() {
  return (
    <div className="bg-[#f0f0f0] min-h-full p-20 flex flex-col items-center overflow-auto">
      <div className="w-full max-w-4xl bg-white shadow-md border border-stone-200">
        <ImageWithFallback 
          src={imgResume}
          alt="Resume"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}

function LifeFolderContent() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const lifeImages = [
    { 
      id: 9, 
      title: "鲜花", 
      date: "2026.02", 
      desc: "行花市 迎春花",
      tags: ["广州", "花市"],
      image: imgFlowers
    },
    { 
      id: 6, 
      title: "码头", 
      date: "2024.05", 
      desc: "落日余晖 海港船舶",
      tags: ["泰国", "芭提雅"],
      image: imgPattayaPier
    },
    { 
      id: 3, 
      title: "随拍", 
      date: "2023.12", 
      desc: "在小区楼里的随手记录",
      tags: ["香港", "圣诞"],
      image: imgRandomSnap
    },
    { 
      id: 1, 
      title: "春天", 
      date: "2023.03", 
      desc: "春风和煦 万物向阳 草长樱开 一年又始", 
      tags: ["上海", "同济"],
      image: imgSpring
    },
    { 
      id: 8, 
      title: "湖滨", 
      date: "2023.03", 
      desc: "永远有人年轻 永远有人欣赏那片风景",
      tags: ["武汉", "东湖"],
      image: imgEastLake
    },
    { 
      id: 4, 
      title: "下午4点", 
      date: "2022.10", 
      desc: "最喜爱落日前的斜阳 明媚而温柔",
      tags: ["上海", "公园"],
      image: img4PM
    },
    { 
      id: 5, 
      title: "随拍", 
      date: "2022.10", 
      desc: "换了新眼镜",
      tags: ["上海", "记录生活"],
      image: imgNewGlasses
    },
    { 
      id: 2, 
      title: "日落", 
      date: "2022.01", 
      desc: "追逐的不是落日 是一无所知却一往无前的友情",
      tags: ["上海", "崇明"],
      image: imgSunsetChongming
    },
    { 
      id: 7, 
      title: "冬日", 
      date: "2021.01", 
      desc: "冷冽的冬天漫步在黄浦江边 也不失为一种勇气",
      tags: ["上海", "西岸"],
      image: imgWinterWestBund
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      const currentIndex = lifeImages.findIndex(img => img.id === selectedImage);
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % lifeImages.length;
        setSelectedImage(lifeImages[nextIndex].id);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + lifeImages.length) % lifeImages.length;
        setSelectedImage(lifeImages[prevIndex].id);
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="p-8 bg-[#fafafa] min-h-full">
       <h2 className="text-xl font-bold text-stone-800 mb-6">Fragments of Life</h2>
       <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
         {lifeImages.map(img => (
            <div key={img.id} className="flex flex-col gap-2">
              <div 
                onClick={() => setSelectedImage(img.id)}
                className="aspect-square bg-stone-200 rounded-lg border border-stone-200 flex items-center justify-center text-stone-400 text-[10px] shadow-sm hover:shadow-md transition-all cursor-zoom-in overflow-hidden group relative"
              >
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform">
                   {img.image ? (
                     <ImageWithFallback src={img.image} alt={img.title} className="w-full h-full object-cover" />
                   ) : (
                     `IMG_${img.id+2020}.JPG`
                   )}
                </div>
              </div>
              <div className="space-y-0.5">
                <p className="text-[11px] font-bold text-stone-700">{img.title}</p>
                <p className="text-[10px] text-stone-400 italic">{img.date}</p>
              </div>
            </div>
         ))}
       </div>

       <AnimatePresence>
         {selectedImage && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[999] bg-stone-900/90 backdrop-blur-sm flex items-center justify-center p-8 md:p-20 cursor-zoom-out"
             onClick={() => setSelectedImage(null)}
           >
             <motion.div 
               initial={{ scale: 0.9 }}
               animate={{ scale: 1 }}
               className="max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center cursor-default"
               onClick={e => e.stopPropagation()}
             >
               <div className="aspect-[4/5] md:aspect-auto md:h-[70vh] w-full bg-stone-800 rounded-xl border border-white/10 flex items-center justify-center text-white/20 text-xl font-mono overflow-hidden">
                 {lifeImages.find(i => i.id === selectedImage)?.image ? (
                   <ImageWithFallback 
                     src={lifeImages.find(i => i.id === selectedImage)?.image} 
                     alt="Project" 
                     className="w-full h-full object-contain" 
                   />
                 ) : (
                   `[ HIGH_RES_PHOTO_${selectedImage+2020} ]`
                 )}
               </div>
               <div className="md:w-80 text-white space-y-4">
                 <div className="space-y-1">
                   <h3 className="text-2xl font-bold">{lifeImages.find(i => i.id === selectedImage)?.title}</h3>
                   <p className="text-white/40 font-mono text-sm">{lifeImages.find(i => i.id === selectedImage)?.date}</p>
                 </div>
                 <p className="text-white/70 leading-relaxed italic">
                   {lifeImages.find(i => i.id === selectedImage)?.desc}
                 </p>
                 <div className="pt-4 flex flex-wrap gap-2">
                    {lifeImages.find(i => i.id === selectedImage)?.tags ? (
                      lifeImages.find(i => i.id === selectedImage)?.tags?.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/10 rounded text-[10px] uppercase tracking-widest">{tag}</span>
                      ))
                    ) : (
                      <>
                        <span className="px-2 py-1 bg-white/10 rounded text-[10px] uppercase tracking-widest">Leica M11</span>
                        <span className="px-2 py-1 bg-white/10 rounded text-[10px] uppercase tracking-widest">35mm</span>
                      </>
                    )}
                 </div>
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
    </div>
  );
}

function AboutMeContent() {
  return (
    <div className="p-6 font-mono text-xs text-stone-700 leading-relaxed bg-[#fafafa] h-full overflow-auto whitespace-pre-wrap">
      {`📁Zheyan_v2.5.txt

版本信息：
- 当前版本：3 years in UX&UI
- 主运行模式：AI智能体验 + 情绪感知
- 偶发特性：过度思考

核心功能：
1. 把混乱变清晰
2. 把需求翻译成人话
3. 让系统更好用一点点

兼容性：
- B 端环境
- 多角色协作环境
- 品宣视觉表达
- 对文字敏感的人类

已知Bug：
- 对细节过度敏感
- 胡思乱想

更新日志：
v1.0 全局看问题，学会慢一点
v2.0 独当一面

未来版本规划：
v3.0 多元发展 多栖生存`}
    </div>
  );
}
