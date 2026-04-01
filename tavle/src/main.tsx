import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Radical } from "lucide-react";
import {
  DefaultSizeStyle,
  DefaultToolbar,
  Editor,
  Tldraw,
  TLComponents,
  TLUiOverrides,
  SelectToolbarItem,
  HandToolbarItem,
  DrawToolbarItem,
  LineToolbarItem,
  EraserToolbarItem,
  TextToolbarItem,
  EllipseToolbarItem,
  ArrowToolbarItem,
  RectangleToolbarItem,
  HighlightToolbarItem,
  TriangleToolbarItem,
} from "tldraw";
import "tldraw/tldraw.css";

const KALKULATOR_BREDDE = 360;
const KALKULATOR_HOYDE = 520;

function Kalkulator({ onLukk }: { onLukk: () => void }) {
  const posRef = useRef({ x: window.innerWidth - KALKULATOR_BREDDE - 16, y: 60 });
  const [pos, setPos] = useState(posRef.current);
  const dragRef = useRef<{ startX: number; startY: number; ox: number; oy: number } | null>(null);

  function onMouseDown(e: React.MouseEvent) {
    dragRef.current = { startX: e.clientX, startY: e.clientY, ox: pos.x, oy: pos.y };
    e.preventDefault();
  }

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      const nx = Math.max(0, Math.min(window.innerWidth - KALKULATOR_BREDDE, dragRef.current.ox + dx));
      const ny = Math.max(0, Math.min(window.innerHeight - KALKULATOR_HOYDE, dragRef.current.oy + dy));
      posRef.current = { x: nx, y: ny };
      setPos({ x: nx, y: ny });
    }
    function onMouseUp() { dragRef.current = null; }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div style={{
      position: "fixed",
      left: pos.x,
      top: pos.y,
      width: KALKULATOR_BREDDE,
      height: KALKULATOR_HOYDE,
      zIndex: 9999,
      borderRadius: 8,
      boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      background: "#fff",
    }}>
      <div
        onMouseDown={onMouseDown}
        style={{
          background: "#3d6b9e",
          color: "#fff",
          padding: "6px 10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "grab",
          userSelect: "none",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        <span>GeoGebra kalkulator</span>
        <button
          onClick={onLukk}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 18,
            cursor: "pointer",
            lineHeight: 1,
            padding: "0 2px",
          }}
          title="Lukk"
        >×</button>
      </div>
      <iframe
        src="https://www.geogebra.org/scientific?lang=nb"
        style={{ flex: 1, border: "none", width: "100%" }}
        title="GeoGebra vitenskapelig kalkulator"
        allow="fullscreen"
      />
    </div>
  );
}

const params = new URLSearchParams(location.search);
const initialDark = params.get("dark") === "1";
const persistKey = params.get("key") || "matematikkoppgaver-tavle";

function KalkulatorKnapp({ visKalkulator, setVisKalkulator }: { visKalkulator: boolean; setVisKalkulator: (v: boolean) => void }) {
  return (
    <button
      onClick={() => setVisKalkulator(!visKalkulator)}
      title="Vitenskapelig kalkulator (GeoGebra)"
      style={{
        background: visKalkulator ? "#3d6b9e" : "none",
        border: "none",
        borderRadius: 6,
        padding: "4px 8px",
        cursor: "pointer",
        color: visKalkulator ? "#fff" : "inherit",
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Radical size={18} />
    </button>
  );
}

function MatteToolbar({ visKalkulator, setVisKalkulator }: { visKalkulator: boolean; setVisKalkulator: (v: boolean) => void }) {
  return (
    <DefaultToolbar>
      <SelectToolbarItem />
      <HandToolbarItem />
      <DrawToolbarItem />
      <LineToolbarItem />
      <EraserToolbarItem />
      <TextToolbarItem />
      <EllipseToolbarItem />
      <ArrowToolbarItem />
      <RectangleToolbarItem />
      <HighlightToolbarItem />
      <TriangleToolbarItem />
      <KalkulatorKnapp visKalkulator={visKalkulator} setVisKalkulator={setVisKalkulator} />
    </DefaultToolbar>
  );
}

function makeComponents(visKalkulator: boolean, setVisKalkulator: (v: boolean) => void): TLComponents {
  return {
    HelpMenu: null,
    DebugMenu: null,
    DebugPanel: null,
    SharePanel: null,
    Toolbar: () => <MatteToolbar visKalkulator={visKalkulator} setVisKalkulator={setVisKalkulator} />,
  };
}

const SKJULTE_VERKTOY = new Set(["note", "media", "embed", "frame", "laser"]);

const overrides: TLUiOverrides = {
  tools(editor, tools) {
    const filtrert: typeof tools = {};
    for (const [key, val] of Object.entries(tools)) {
      if (!SKJULTE_VERKTOY.has(key)) filtrert[key] = val;
    }
    return filtrert;
  },
};

function App() {
  const editorRef = useRef<Editor | null>(null);
  const [visKalkulator, setVisKalkulator] = useState(false);
  const components = makeComponents(visKalkulator, setVisKalkulator);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      const editor = editorRef.current;
      if (!editor || !e.data?.type) return;

      if (e.data.type === "theme") {
        editor.user.updateUserPreferences({
          colorScheme: e.data.dark ? "dark" : "light",
        });
      }

      if (e.data.type === "setPage" && e.data.name) {
        const pages = editor.getPages();
        let page = pages.find((p) => p.name === e.data.name);
        if (!page) {
          // Omdøp tom standardside i stedet for å opprette ny
          const tomStandard = pages.find(
            (p) =>
              p.name.match(/^Page \d+$/) &&
              editor.getPageShapeIds(p.id).size === 0
          );
          if (tomStandard) {
            editor.renamePage(tomStandard.id, e.data.name);
            page = editor.getPage(tomStandard.id)!;
          } else {
            const id = editor.createPage({ name: e.data.name });
            page = editor.getPage(id)!;
          }
        }
        editor.setCurrentPage(page.id);
      }

      if (e.data.type === "clearCanvas") {
        const ids = editor.getCurrentPageShapeIds();
        if (ids.size > 0) editor.deleteShapes([...ids]);
      }

      if (e.data.type === "clearAll") {
        const pages = editor.getPages();
        for (const page of pages) {
          editor.setCurrentPage(page.id);
          const ids = editor.getCurrentPageShapeIds();
          if (ids.size > 0) editor.deleteShapes([...ids]);
        }
        if (pages.length > 0) editor.setCurrentPage(pages[0].id);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
    {visKalkulator && <Kalkulator onLukk={() => setVisKalkulator(false)} />}
    <Tldraw
      persistenceKey={persistKey}
      components={components}
      overrides={overrides}
      onMount={(editor) => {
        editorRef.current = editor;
        editor.setCurrentTool("draw");
        editor.setStyleForNextShapes(DefaultSizeStyle, "s");
        editor.user.updateUserPreferences({
          colorScheme: initialDark ? "dark" : "light",
          isSnapMode: true,
        });
        editor.updateInstanceState({ isGridMode: true });

        window.parent.postMessage({ type: "tavle-ready" }, "*");
      }}
    />
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
