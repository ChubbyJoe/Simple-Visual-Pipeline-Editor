// submit.js

import { useState } from 'react';
import { useStore } from './store';
import { ResultModal } from './ResultModal';

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);
  const [modalData, setModalData] = useState(null);
  const [modalError, setModalError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async () => {
    try {
      const resp = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });
      const data = await resp.json();
      setModalData(data);
      setModalError(null);
      setIsModalOpen(true);
    } catch (e) {
      setModalError('Failed to submit pipeline. Is the backend running?');
      setModalData(null);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
    setModalError(null);
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}>
        <button
          type="button"
          onClick={onSubmit}
          style={{
            background: '#2563EB',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
          }}
        >
          Submit
        </button>
      </div>
      <ResultModal
        isOpen={isModalOpen}
        onClose={closeModal}
        data={modalData}
        error={modalError}
      />
    </>
  );
};

