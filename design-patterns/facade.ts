// Neste exemplo de utização do Facade Pattern iremos "criar" um conversosr de HTML para PDF apenas como forma de exemplo.

class ParserHTML {
  private filePath: string;
  private htmlBuffer: string;

  constructor(filePath: string) {
    this.filePath = filePath;
    this.htmlBuffer = "";
  }

  public getHTMLFileFromPath() {
    console.log(`Getting HTML file from path: ${this.filePath}`);
    return this;
  }

  public parseHTMl() {
    console.log("Parsing HTML file...");
    return this.htmlBuffer;
  }
}

class HTMLToPDFConverter {
  private htmlBuffer: string;

  constructor(htmlBuffer: string) {
    this.htmlBuffer = htmlBuffer;
  }

  public convertHTMLToPDF() {
    console.log("Converting HTML to PDF...");
    return this.htmlBuffer;
  }
}

// Essas classes possuem uma ligação entre si, ou seja, o HTMLToPDFConverter precisa de um ParserHTML para funcionar devido ao fato de que ele precisa receber o htmlBuffer do ParserHTML.

class ConverterFacade {
  public convert(htmlPath: string) {
    const parserHTML = new ParserHTML(htmlPath);

    const htmlBuffer = parserHTML.getHTMLFileFromPath().parseHTMl();

    const htmlToPDFConverter = new HTMLToPDFConverter(htmlBuffer);

    return htmlToPDFConverter.convertHTMLToPDF();
  }
}

function clientCode() {
    const converter = new ConverterFacade();
    converter.convert("/path/to/html/file.html");
}

clientCode();