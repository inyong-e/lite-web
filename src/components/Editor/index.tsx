import dynamic from "next/dynamic";

const EditorBlock = dynamic(async () => import("remote/Editor"), {
  ssr: false,
});

const Editor = () => <EditorBlock />;

export default Editor;
