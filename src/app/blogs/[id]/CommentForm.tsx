"use client";

import { useState } from "react";
import axiosInstance from "@/utils/axiosConfig";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface Comment {
  name: string;
  comment: string;
}

export default function CommentForm({
  blogId,
  onAddComment,
}: {
  blogId: string;
  onAddComment: (comment: Comment) => void;
}) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!session?.user?.name) {
      router.push("/login");
      return;
    }

    try {
      const res = await axiosInstance.put(`/blogs/addComment/${blogId}`, {
        name: session.user.name!,
        comment: comment,
      });
      if (res.status === 200) {
        onAddComment({
          name: session.user.name!,
          comment: comment,
        });
        setComment("");
      }
    } catch (err) {
      console.error("Error adding comment", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your comment"
        className="w-full border rounded-lg p-2"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        {loading ? "Posting..." : "Add Comment"}
      </button>
    </form>
  );
}
