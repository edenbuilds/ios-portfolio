import { useEffect, useState } from "react";
import { locations } from "@constants";
import useLocationStore from "@store/location";
import useWindowsStore from "@store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import HomeFolder from "./HomeFolder";
import DesktopShortcut from "./DesktopShortcut";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const {
    openWindow,
    unminimizeWindow,
    focusWindow,
    windows,
    desktopShortcuts,
    addDesktopShortcut,
    removeDesktopShortcut,
    updateShortcutPosition,
  } = useWindowsStore();
  const [showTip, setShowTip] = useState(false);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
    setShowTip(false);
  };

  const handleOpenProjectsRoot = () => {
    setActiveLocation(locations.work);
    openWindow("finder");
    setShowTip(false);
  };

  const handleOpenApp = (appId) => {
    const window = windows[appId];
    if (window?.isOpen) {
      if (window.isMinimized) {
        unminimizeWindow(appId);
      } else {
        focusWindow(appId);
      }
    } else {
      openWindow(appId);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const source = e.dataTransfer.getData("drag-source");
    const appId = e.dataTransfer.getData("text/plain");

    if (source === "dock" && appId) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - 32;
      const y = e.clientY - rect.top - 40;
      addDesktopShortcut(appId, x, y);
    }
  };

  // Open Projects Finder once after login so work is obvious.
  useEffect(() => {
    const seen = sessionStorage.getItem("omkar-projects-tip-seen");
    const timer = setTimeout(() => {
      setActiveLocation(locations.work);
      openWindow("finder");
      if (!seen) {
        setShowTip(true);
        sessionStorage.setItem("omkar-projects-tip-seen", "1");
      }
    }, 900);
    return () => clearTimeout(timer);
  }, [openWindow, setActiveLocation]);

  useGSAP(() => {
    const instances = Draggable.create(".folder, .desktop-shortcut", {
      bounds: "#home",
      allowContextMenu: true,
      onDragEnd: function () {
        const el = this.target;
        if (el.classList.contains("desktop-shortcut")) {
          const id = el.dataset.id;
          const left = parseFloat(el.style.left || 0) + this.x;
          const top = parseFloat(el.style.top || 0) + this.y;

          updateShortcutPosition(id, left, top);
          gsap.set(el, { x: 0, y: 0 });
        }
      },
    });

    return () => {
      instances.forEach((instance) => instance.kill());
    };
  }, [desktopShortcuts]);

  return (
    <section id="home" onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="absolute top-4 left-4 z-[2] pointer-events-none select-none">
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/80 font-semibold drop-shadow">
          Projects
        </p>
        <p className="text-[12px] text-white/70 drop-shadow mt-0.5">Click a folder to open it</p>
      </div>

      <ul>
        {projects.map((project) => (
          <HomeFolder
            key={project.id}
            project={project}
            onClick={() => handleOpenProjectFinder(project)}
          />
        ))}

        {desktopShortcuts.map((shortcut) => (
          <DesktopShortcut
            key={shortcut.id}
            shortcut={shortcut}
            onDoubleClick={() => handleOpenApp(shortcut.appId)}
            onRemove={() => removeDesktopShortcut(shortcut.id)}
          />
        ))}
      </ul>

      {showTip && (
        <div className="absolute right-6 top-8 z-[5] w-[300px] rounded-2xl bg-[#f5e6a8] text-[#3b2f14] shadow-2xl border border-black/10 p-4 pointer-events-auto">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[13px] font-bold">How to view projects</p>
              <p className="text-[12px] leading-relaxed mt-1.5">
                The folders on the left are Omkar&apos;s work. Click any folder, or use{" "}
                <strong>Projects</strong> in the Dock. Inside each folder: read the .txt, open the
                live link, or jump to GitHub.
              </p>
            </div>
            <button
              type="button"
              className="text-[11px] font-semibold opacity-70 hover:opacity-100"
              onClick={() => setShowTip(false)}
            >
              Close
            </button>
          </div>
          <button
            type="button"
            onClick={handleOpenProjectsRoot}
            className="mt-3 w-full rounded-xl bg-[#3b2f14] text-[#f5e6a8] text-[12px] font-semibold py-2 hover:opacity-90"
          >
            Open Projects folder
          </button>
        </div>
      )}
    </section>
  );
};

export default Home;
