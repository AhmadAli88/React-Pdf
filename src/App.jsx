import './App.css';
import { AnnotatedDocument } from './components/AnnotatedDocument';
import PDFViewer from './components/Basic';

function App() {
  return (
    <div>
      <AnnotatedDocument />
      <div style={{marginTop: '30px'}}>
        <PDFViewer />
      </div>
    </div>
  );
}

export default App;
