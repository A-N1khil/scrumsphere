import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownMessageProps = {
  message: string;
};

const MarkdownMessage = ({ message }: MarkdownMessageProps) => {
  return (
    <div
      style={{
        whiteSpace: "normal",
        wordWrap: "break-word",
        overflowWrap: "anywhere",
        maxWidth: "100%",
      }}
    >
      <Markdown skipHtml remarkPlugins={[remarkGfm]}>
        {message}
      </Markdown>
    </div>
  );
};

export default MarkdownMessage;
