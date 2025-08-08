from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

class Edge(BaseModel):
    id: str | None = None
    source: str
    target: str
    sourceHandle: str | None = None
    targetHandle: str | None = None


class Node(BaseModel):
    id: str
    type: str
    data: Dict[str, Any] | None = None


class PipelinePayload(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.post('/pipelines/parse')
def parse_pipeline(payload: PipelinePayload):
    num_nodes = len(payload.nodes)
    num_edges = len(payload.edges)

    # Build adjacency list for DAG check
    adjacency: Dict[str, list[str]] = {}
    indegree: Dict[str, int] = {}
    for node in payload.nodes:
        adjacency[node.id] = []
        indegree[node.id] = 0

    for edge in payload.edges:
        if edge.source in adjacency and edge.target in indegree:
            adjacency[edge.source].append(edge.target)
            indegree[edge.target] += 1

    # Kahn's algorithm for DAG detection
    queue = [n for n, deg in indegree.items() if deg == 0]
    visited_count = 0
    while queue:
        current = queue.pop(0)
        visited_count += 1
        for neighbor in adjacency.get(current, []):
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited_count == num_nodes

    return {"num_nodes": num_nodes, "num_edges": num_edges, "is_dag": is_dag}
