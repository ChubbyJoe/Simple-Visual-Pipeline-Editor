# Vector Shift Interview Project

A pipeline builder application with a modern React frontend and Python backend. This project allows users to create and visualize data processing pipelines using a drag-and-drop interface.

## Features

- **Drag-and-Drop Pipeline Builder**: Create complex data processing workflows visually
- **Multiple Node Types**: Input, LLM, Output, Text, Param, Image, Math, Delay, and Logger nodes
- **Real-time Validation**: Check if your pipeline is a valid DAG (Directed Acyclic Graph)
- **Modern UI**: Dark theme with smooth animations and user-friendly interactions
- **Modal Results**: Clean modal display for pipeline submission results instead of browser alerts

## Project Structure

```
Vector_shift_interview/
├── backend/
│   └── main.py              # FastAPI backend server
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── nodes/           # Core node components
│   │   ├── nodes_extras/    # Additional node types
│   │   ├── App.js           # Main application component
│   │   ├── ResultModal.js   # Modal for displaying results
│   │   ├── submit.js        # Submit functionality
│   │   ├── store.js         # Zustand state management
│   │   ├── ui.js            # Main pipeline UI
│   │   └── toolbar.js       # Node toolbar
│   └── package.json         # Frontend dependencies
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- pip (Python package manager)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install fastapi uvicorn
   ```

3. Start the backend server:
   ```bash
   python main.py
   ```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## Usage

1. **Create a Pipeline**: Drag nodes from the toolbar onto the canvas
2. **Connect Nodes**: Click and drag from one node's output to another node's input
3. **Configure Nodes**: Click on nodes to configure their parameters
4. **Submit Pipeline**: Click the "Submit" button to validate your pipeline
5. **View Results**: Results are displayed in a user-friendly modal

## Recent Updates

- **Modal Implementation**: Replaced browser alerts with a custom modal that follows the application's dark theme
- **Improved UX**: Better visual feedback and user interactions
- **Error Handling**: Enhanced error display in the modal

## Technologies Used

- **Frontend**: React, React Flow, Zustand
- **Backend**: FastAPI, Python
- **Styling**: CSS-in-JS with dark theme
- **State Management**: Zustand for global state

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of a technical interview for Vector Shift.
