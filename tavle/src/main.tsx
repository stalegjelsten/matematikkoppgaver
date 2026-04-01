import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
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

const params = new URLSearchParams(location.search);
const initialDark = params.get("dark") === "1";
const persistKey = params.get("key") || "matematikkoppgaver-tavle";

function MatteToolbar() {
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
    </DefaultToolbar>
  );
}

const components: TLComponents = {
  HelpMenu: null,
  DebugMenu: null,
  DebugPanel: null,
  SharePanel: null,
  Toolbar: MatteToolbar,
};

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
    <Tldraw
      persistenceKey={persistKey}
      components={components}
      overrides={overrides}
      onMount={(editor) => {
        editorRef.current = editor;
        editor.setCurrentTool("draw");
        editor.setStyleForNextShapes(DefaultSizeStyle, "m");
        editor.user.updateUserPreferences({
          colorScheme: initialDark ? "dark" : "light",
          isSnapMode: true,
        });
        editor.updateInstanceState({ isGridMode: true });

        window.parent.postMessage({ type: "tavle-ready" }, "*");
      }}
    />
  );
}

createRoot(document.getElementById("root")!).render(<App />);
