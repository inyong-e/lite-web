"use client";

import { createReactEditorJS } from "react-editor-js";
import CheckList from "@editorjs/checklist";
import { useState } from "react";

const ReactEditor = createReactEditorJS();

const Editor = () => {
  const [editorValue, setEditorValue] = useState({
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "Testing title",
          level: 2,
        },
      },
      {
        type: "paragraph",
        data: {
          text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
        },
      },
    ],
    version: "2.1.0",
  });
  return <ReactEditor tools={{ checkList: CheckList }} data={editorValue} />;
};

export default Editor;
