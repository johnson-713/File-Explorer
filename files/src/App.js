import { useState } from 'react';
import './App.css';
import explorer from './Data/FolderData';
import Folder from './Component/Folder';
import useTraverseTree from './Hooks/use-traverse-tree';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder)
    setExplorerData(finalTree)
  }

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

export default App;
