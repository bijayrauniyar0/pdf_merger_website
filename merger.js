const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const pdfMerger = async (p1,p2, id) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2
  await merger.save(`public/${id}_merged.pdf`);
};
module.exports = {pdfMerger}