type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto max-w-2xl">
      <article className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
