# Riso Lab

A browser-based tool that transforms your photos into risograph-style prints. Upload an image, split it into RGB channels, apply halftone patterns, and download separate color layers ready for risograph printing.

## Features

- **RGB Channel Separation** - Split any image into individual color channels
- **70+ Risograph Colors** - Choose from a full palette of authentic riso ink colors
- **Halftone Patterns** - Apply line, circle, square, cross, or ellipse patterns
- **Customizable Parameters** - Adjust frequency, angle, and intensity of each channel
- **Layer Export** - Download individual color layers as separate JPG files
- **Local Processing** - Everything runs in the browser, no server uploads needed

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/)

### Installation

```bash
git clone https://github.com/jhonboyy/riso-lab.git
cd riso-lab
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

```bash
pnpm deploy
```

## Usage

1. Click "Choose your picture" and upload a JPG or PNG image
2. Select colors for each RGB channel (Red, Green, Blue)
3. Choose halftone patterns for each channel
4. Adjust frequency, angle, and intensity values
5. Click "Layers" to download individual color layers
6. Click "Image" to download the combined result

## Credits

- [P5.RISO](https://github.com/nicholasgasior/p5-riso) - Original risograph processing concepts
- [Dinamo Typefaces](https://dinamofaces.com/) - ABC Favorit Mono font

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
