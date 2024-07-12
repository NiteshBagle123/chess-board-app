const { chessProcessor } = require('./processor');

const app = () => {
  const chessProcessing = chessProcessor(process.argv);
  return chessProcessing;
};

app();
