import { PostIcon } from "public/svg";
import type { FC } from "react";

/**
 * @package
 */
export const PostActionButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <span className="fixed bottom-6 right-4 cursor-pointer" onClick={onClick}>
    <PostIcon />
  </span>
);
