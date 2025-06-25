import React, { useState } from 'react';
import Button from '../Button';

function ResumeCard({ resume, onEdit, onDelete, onRename }) {
  const [isRenaming, setIsRenaming] = useState(false);
  const [newTitle, setNewTitle] = useState(resume.title);

  const handleRename = () => {
    if (newTitle.trim() !== '') {
      onRename(resume._id, newTitle.trim());
      setIsRenaming(false);
    }
  };

  return (
    <div className="border rounded-lg shadow p-4 bg-white dark:bg-gray-800">
      {isRenaming ? (
        <div className="mb-2">
          <input
            className="w-full px-2 py-1 rounded border"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <div className="flex gap-2 mt-2">
            <Button text="Save" onClick={handleRename} />
            <Button text="Cancel" onClick={() => setIsRenaming(false)} />
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2">{resume.title}</h2>
          <p className="text-sm text-gray-500 mb-4">Last updated: {new Date(resume.updatedAt).toLocaleString('en-IN')}</p>
        </>
      )}

      {!isRenaming && (
        <div className="flex gap-2">
          <Button text="Edit" onClick={onEdit} />
          <Button text="Rename" onClick={() => setIsRenaming(true)} />
          <Button text="Delete" onClick={() => onDelete(resume._id)} />
        </div>
      )}
    </div>
  );
}

export default ResumeCard;
