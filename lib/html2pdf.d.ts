interface HTML2PDFOptions {
  margin?: number | [number, number, number, number];
  filename?: string;
  image?: {
    type?: string;
    quality?: number;
  };
  html2canvas?: {
    scale?: number;
    useCORS?: boolean;
    scrollY?: number;
    backgroundColor?: string;
    [key: string]: any;
  };
  jsPDF?: {
    unit?: string;
    format?: string;
    orientation?: 'portrait' | 'landscape';
    [key: string]: any;
  };
  [key: string]: any;
}

interface HTML2PDFStatic {
  (): HTML2PDFObject;
  Worker?: any;
}

interface HTML2PDFObject {
  set(options: HTML2PDFOptions): HTML2PDFObject;
  from(element: HTMLElement | string): HTML2PDFObject;
  save(): Promise<void>;
  output(type: string, options?: any): Promise<any>;
  then(callback: Function): HTML2PDFObject;
  catch(callback: Function): HTML2PDFObject;
  [key: string]: any;
}

declare global {
  interface Window {
    html2pdf: HTML2PDFStatic;
  }
}

export {};
