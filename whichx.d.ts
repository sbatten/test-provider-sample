declare module "whichx" {
  class WhichX {
    addLabels(labels: string[]): void;
    addData(label: string, data: string): void;
    classify(textToClassify: string): string;
  }
  
  export = WhichX
}


