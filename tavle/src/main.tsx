import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { DefaultSizeStyle, Editor, Tldraw } from "tldraw";
import "tldraw/tldraw.css";

const initialDark = new URLSearchParams(location.search).get("dark") === "1";

function App() {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type === "theme" && editorRef.current) {
        editorRef.current.user.updateUserPreferences({
          colorScheme: e.data.dark ? "dark" : "light",
        });
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <Tldraw
      persistenceKey="matematikkoppgaver-tavle"
      onMount={(editor) => {
        editorRef.current = editor;
        editor.setCurrentTool("draw");
        editor.setStyleForNextShapes(DefaultSizeStyle, "m");
        editor.user.updateUserPreferences({
          colorScheme: initialDark ? "dark" : "light",
        });
      }}
    />
  );
}

createRoot(document.getElementById("root")!).render(<App />);
