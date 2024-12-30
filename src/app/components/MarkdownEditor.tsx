import { useRef } from "react";
import {
  BoldItalicUnderlineToggles,
  CodeToggle,
  DiffSourceToggleWrapper,
  InsertCodeBlock,
  InsertImage,
  MDXEditor,
  MDXEditorMethods,
  UndoRedo,
  diffSourcePlugin,
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { Button } from "./ui/button";
import { MessageSquareShare } from "lucide-react";

type MarkdownEditorProps = {
  markdown: string;
  postMessage: (content: string | undefined) => void;
};

const MarkdownEditor = ({ markdown, postMessage }: MarkdownEditorProps) => {
  const mdxEditorRef = useRef<MDXEditorMethods>(null);

  const handleGetMarkdown = () => {
    postMessage(mdxEditorRef.current?.getMarkdown());
  };

  return (
    <>
      {/* <div className="flex flex-col"> */}
      <div className="rounded-md border-2">
        <MDXEditor
          markdown={markdown}
          ref={mdxEditorRef}
          plugins={[
            headingsPlugin(),
            listsPlugin(),
            linkPlugin(),
            quotePlugin(),
            diffSourcePlugin(),
            markdownShortcutPlugin(),
            toolbarPlugin({
              toolbarContents: () => (
                <>
                  {" "}
                  <DiffSourceToggleWrapper>
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <InsertCodeBlock />
                    <CodeToggle />
                    <InsertImage />
                  </DiffSourceToggleWrapper>
                </>
              ),
            }),
          ]}
        />
      </div>
      <Button size="default" type="button" variant="default" className="mt-2" onClick={handleGetMarkdown}>
        <MessageSquareShare />
        Post Chat
      </Button>
    </>
  );
};

export default MarkdownEditor;
