# Octicons Push

The [Octicons Push](https://www.figma.com/community/plugin/825432045044458754/Octicons-Push) Figma plugin makes it easy to contribute to [Octicons](https://primer.style/octicons), GitHub's open-source icon set. With this plugin, you can commit and push icons to the [Octicons](https://github.com/primer/octicons) repo directly from Figma, without ever touching a terminal.

👉 [Install on Figma](https://www.figma.com/community/plugin/825432045044458754/Octicons-Push)

![demo](https://user-images.githubusercontent.com/4608155/77948730-b1a24600-727a-11ea-9c39-040be9a12963.gif)

Here's how it works:
1. Select the icon frames you want to commit.
2. Open the plugin.
3. Select the branch you want to commit to. You can choose an existing branch or create a new branch.
4. Press "Commit." The plugin will then export, commit, and push the selected icons to the branch you chose. If you chose to create a new branch, the plugin will give you a link to where you can start a new pull request with your branch.

## Local development

1. Clone the repository

   ```shell
   git clone https://github.com/primer/figma-octicons-push.git
   cd figma-octicons-push
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

1. Choose `figma-octicons-push/manifest.json`

1. Run the plugin by going to `Menu > Plugins > Development > Octicons Push`
