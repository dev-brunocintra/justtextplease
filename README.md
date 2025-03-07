# Just Text Please

Just Text Please is a browser extension designed to enhance your online reading experience by removing distracting images and videos, allowing you to focus solely on the content that matters.

## Features

* **Distraction-Free Reading:** Blocks images and videos to eliminate visual distractions.
* **Increased Productivity:** Focus on content and improve your workflow.
* **Reduced Eye Strain:** Minimize eye fatigue caused by excessive visual stimuli.
* **Bandwidth Savings:** Reduce data usage and improve page load times by blocking unnecessary media.
* **Customizable Settings:** Tailor the extension to your needs by choosing which media types to block.
* **Dynamic DOM Monitoring:** Adapts to changes in the webpage, ensuring consistent image removal.
* **URL Filtering:** Removes elements based on image URL extensions.
* **CSS Selector Filtering:** Removes elements based on CSS selectors containing "img" or "image".
* **Attribute Filtering:** Removes elements based on attributes with image file extensions.
* **Link Filtering:** Removes links that point to files with known extensions.
* **Src Attribute Removal:** Removes the `src` attribute from all `<img>` tags.

## Installation

1.  Download the extension's ZIP file from the repository.
2.  Unzip the file to a local directory.
3.  **Chrome/Edge/Opera:**
    * Open your browser and go to `chrome://extensions/` (or `edge://extensions/`, `opera://extensions/`).
    * Enable "Developer mode" in the top right corner.
    * Click "Load unpacked" and select the unzipped extension directory.
4.  **Firefox:**
    * Open Firefox and go to `about:debugging#/runtime/this-firefox`.
    * Click "Load Temporary Add-on" and select the `manifest.json` file from the unzipped extension directory.
5.  **Safari:**
    * Open Safari, go to "Develop" -> "Show Extension Builder".
    * Click the "+" button in the bottom left corner and select "Add Extension...".
    * Select the unzipped extension directory.
    * In the Extension Builder window, click the "Install" button.

## Usage

Once installed, the extension will automatically begin removing images and videos from the web pages you visit. You can customize the extension's behavior by adjusting its settings (if applicable, depending on how you build the settings).

## Contributing

Contributions are welcome! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request.

## License

MIT License