import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjAYRCsIJ5sSjyBP8zPa7cNCycaXd0Vjg&libraries=places&callback=initMap"
          ></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
