// ResultModal.js
import React from 'react';

export const ResultModal = ({ isOpen, onClose, data, error }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={handleBackdropClick}
    >
      <div
        style={{
          background: '#0B1220',
          border: '1px solid #1E293B',
          borderRadius: '12px',
          padding: '24px',
          maxWidth: '400px',
          width: '90%',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ 
            margin: 0, 
            color: '#E2E8F0', 
            fontSize: '20px', 
            fontWeight: '600' 
          }}>
            {error ? 'Error' : 'Pipeline Results'}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#94A3B8',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#E2E8F0';
              e.target.style.backgroundColor = '#374151';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#94A3B8';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            ×
          </button>
        </div>

        {error ? (
          <div style={{ color: '#FCA5A5', marginBottom: '20px' }}>
            <p style={{ margin: 0, fontSize: '14px' }}>{error}</p>
          </div>
        ) : (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: '1px solid #374151'
            }}>
              <span style={{ color: '#94A3B8', fontSize: '14px' }}>Nodes:</span>
              <span style={{ color: '#E2E8F0', fontSize: '14px', fontWeight: '500' }}>{data.num_nodes}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: '1px solid #374151'
            }}>
              <span style={{ color: '#94A3B8', fontSize: '14px' }}>Edges:</span>
              <span style={{ color: '#E2E8F0', fontSize: '14px', fontWeight: '500' }}>{data.num_edges}</span>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '12px 0'
            }}>
              <span style={{ color: '#94A3B8', fontSize: '14px' }}>Is DAG:</span>
              <span style={{ 
                color: data.is_dag ? '#86EFAC' : '#FCA5A5', 
                fontSize: '14px', 
                fontWeight: '500' 
              }}>
                {data.is_dag ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          style={{
            background: '#2563EB',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            fontSize: '14px',
            fontWeight: '500',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#1D4ED8';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#2563EB';
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
