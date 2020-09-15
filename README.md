# Hosted Export Figma plugin

Hosted Export allows you to copy hosted image URLs for any frame inside Figma.

👉 [Install on Figma](https://www.figma.com/community/plugin/886688414738743606/Hosted-Export)

![](https://compai.pub/v1/png/e94f9532eaee3bc0f833d3016a59afadd8b795d0d04311e3b9c9b388e650256b)

Powered by Component AI's [JSX to PNG API]().

## Usage

1. Select frame(s) to export
1. Open "Hosted Export" plugin
1. Click link icon to copy image URL to clipboard
1. Paste anywhere you want!


## Local development

1. Clone the repository

   ```shell
   git clone https://github.com/primer/figma-hosted-export.git
   cd figma-hosted-export
   ```

1. Install the dependencies

   ```shell
   yarn
   ```

1. Start the development server

   ```
   yarn start
   ```

1. Open the [Figma desktop app](https://www.figma.com/downloads/)

1. Go to `Account > Plugins > In Development > Create new plugin`

1. Choose `figma-hosted-export/manifest.json`

1. Run the plugin by going to `Menu > Plugins > Development > Hosted Export`
