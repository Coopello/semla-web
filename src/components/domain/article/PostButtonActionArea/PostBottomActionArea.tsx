import { CoopemoIcon } from "public/svg";
import type { FC } from "react";
import { Button } from "src/components/ui/Button";

/**
 * @package
 */
export const PostBottomActionArea: FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <div className="fixed bottom-0 left-0 flex w-full items-center justify-between border-t border-gray-200 bg-white px-8 py-4">
    <CoopemoIcon />
    <Button onClick={onClick}>Post!</Button>
  </div>
);
