# Hosted Export Figma plugin

Hosted Export allows you to copy hosted image URLs for any frame inside Figma.

👉 [Install on Figma](https://www.figma.com/community/plugin/886688414738743606/Hosted-Export)

![Demo gif](https://user-images.githubusercontent.com/4608155/93166049-83061380-f6d2-11ea-979a-11c6eac8b6e9.gif)
Powered by Component AI's [JSX to PNG API]().

## Usage

1. Select frame(s) to export
1. Open "Hosted Export" plugin
1. Click link icon to copy image URL to clipboard
1. Paste anywhere you want!


## Local development

1. Clone the repository

   ```shell
   git clone https://github.com/colebemis/figma-hosted-export.git
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
