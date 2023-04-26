import type { FC } from "react";
import { Button } from "src/components/ui/Button";
import { Modal } from "src/components/ui/Modal";

/**
 * @package
 */
export const ConfirmDialog: FC<{
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
