// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab',
          minWidth: '90px',
          height: '40px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 10px',
          borderRadius: '8px',
          backgroundColor: '#1F2937',
          color: '#E5E7EB',
          border: '1px solid #374151',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        }} 
        draggable
      >
          <span>{label}</span>
      </div>
    );
  };
  