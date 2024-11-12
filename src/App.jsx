import './App.css';
import { AnnotatedDocument } from './components/AnnotatedDocument';
import PDFViewer from './components/Basic';
import MultipageDocument from './components/MultipageDocument';

function App() {
  return (
    <div>
      <AnnotatedDocument />
      <div style={{marginTop: '30px'}}>
        <PDFViewer />
      </div>
      <div style={{marginTop: '30px'}}>
        <MultipageDocument />
      </div>
    </div>
  );
}

export default App;
