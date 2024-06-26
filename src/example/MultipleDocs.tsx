import DocViewer, { PDFRenderer, PNGRenderer, JPGRenderer, DocViewerRenderers } from '../DocViewer';

const MultipleDocs = () => {
  return (
		<div style={{height: '99vh'}}>
    <DocViewer
			documents={[
				// { uri: require("../_example-files_/pdf.pdf"), fileName: 'ABC' }, // Local File
				// { uri: require("../_example-files_/sample.pdf") }, // Local File
				// { uri: require("../_example-files_/sample.png") },
				// { uri: require("../_example-files_/sample.jpg") },
				// { uri: require("../_example-files_/sample.txt") },
				{ uri: require("../_example-files_/pdf.pdf").default, fileName: 'ABC' }, // Local File
				{ uri: require("../_example-files_/sample.pdf").default }, // Local File
				{ uri: require("../_example-files_/sample.png").default },
				{ uri: require("../_example-files_/sample.jpg").default },
				{ uri: require("../_example-files_/sample.txt").default },

				// { uri: require("../_example-files_/sample.doc").default }, // will work with online url not local path
				// { uri: require("../_example-files_/sample.ppt").default }, // will work with online url not local path
				// { uri: require("../_example-files_/sample.xls").default }, // will work with online url not local path
			]}
			pluginRenderers={DocViewerRenderers}
			config={{header: {
				// disableFileName: true,
				disableDocumentNav: true
			}}}
    />
		</div>
  );
}

export default MultipleDocs;
