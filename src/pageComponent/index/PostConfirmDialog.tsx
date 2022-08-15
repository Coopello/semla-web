import type { FC } from "react";
import { Button } from "src/component/Button";
import { Modal } from "src/component/Modal";

/**
 * @package
 */
export const PostConfirmDialog: FC<{
  isModalOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}> = ({ isModalOpen, onClose, onSubmit }) => (
  <Modal isModalOpen={isModalOpen} onClose={onClose} outsideClickClose={false}>
    <p className="text-lg font-bold text-gray-400">Qiitaに投稿しますか？</p>
    <div className="mt-8 flex items-center justify-end gap-4">
      <Button color="primaryOutLine" onClick={onClose}>
        いいえ
      </Button>
      <Button onClick={onSubmit}>はい</Button>
    </div>
  </Modal>
);
