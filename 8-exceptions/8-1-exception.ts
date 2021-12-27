// const array = new Array(100000000000000000000000000000000000000);
// Error handling : try => catch => finally

function readFile(fileName: string) {
  if (fileName === "not exist!") {
    throw new Error(`file not exists! ${fileName}`);
  }
  return "file contents";
}

function closeFile() {
  console.log("finally");
}

const fileName = "file";

try {
  console.log(readFile(fileName));
} catch {
  console.log("error");
} finally {
  closeFile();
}
