import { Graph } from "@dep-spider/core";
export async function combineRes(graph: Graph, depth: number) {
  await graph.ensureGraph();
  return {
    root: await graph.getGraph(),
    codependency: await graph.getCodependency(),
    circularDependency: await graph.getCircularDependency(),
    depth,
    selectedNode: await graph.getGraph(),
    selectedCodependency: [],
    selectedCircularDependency: null,
    sizeRoot: await graph.getGraph(),
    selectedSizeNode: await graph.getGraph(),
  };
}
