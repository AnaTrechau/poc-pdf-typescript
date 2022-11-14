import type { NextPage } from "next";
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const file = 'sample.pdf'

const Home: NextPage = () => {
  return (
    <Document file={file}>
      <Page pageNumber={1}></Page>
    </Document>
  );
};

export default Home;
