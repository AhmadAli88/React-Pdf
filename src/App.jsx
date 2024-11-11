import './App.css';
import BasicPDFViewer from './components/Basic';
// import MultiplePagesPDFViewer from './components/Multiple Pages';
// import ZoomWithDownload from './components/Zooming In and Out';

function App() {
  return (
    <div>
      <BasicPDFViewer />
      {/* <MultiplePagesPDFViewer />
      <ZoomWithDownload/> */}
    </div>
  );
}

export default App;
