interface Comment {
  name: string;
  comment: string;
}

export default function CommentList({ comments }: { comments: Comment[] }) {
  if (comments.length === 0) {
    return (
      <p className="text-gray-500 pt-4 text-center text-sm sm:text-base">
        No comments yet.
      </p>
    );
  }

  return (
    <ul className="space-y-4 mt-6">
      {comments.map((c, i) => (
        <li
          key={i}
          className="p-3 sm:p-4 rounded-2xl shadow-sm border border-gray-200 bg-white"
        >
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 font-bold">
              {c.name.charAt(0).toUpperCase()}
            </div>
            <p className="font-medium text-gray-800 text-sm sm:text-base">
              {c.name}
            </p>
          </div>
          <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
            {c.comment}
          </p>
        </li>
      ))}
    </ul>
  );
}
