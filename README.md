## Website!

This is the source code to my [website](https://kailarecio.github.io)

A little late to the party and this is my first website. For bugs, questions, or anything under the sun, open an issue or contact me through my details on the site above. Thanks for your interest in this silly project!

## Tech Stack

- **Static Site Generator**: Jekyll
- **Frontend**: HTML5, JavaScript (Vanilla)
- **Styling**: CSS3, Bootstrap
- **Data Management**: YAML files for content
- **Deployment**: GitHub Pages

## Features

- **Dark Mode Toggle**: Seamless light/dark theme switching with user preference persistence
- **Smooth Navigation**: Scroll to sections with pill navigation for easy content browsing
- **Dynamic Content**: All content generated from YAML data files for easy maintenance
- **Scroll-to-Top Button**: Convenient navigation aid for longer pages

##  Project Structure

```
├── _config.yml              # Jekyll configuration
├── _data/
│   ├── structure.yml        # Structure for the sections
│   ├── content.yml          # Content for the sections
├── _includes/       
│   └── layout.html          # Individual section template
├── assets/
│   ├── css/                 # CSS stylesheet
│   ├── files/               # Files
│   ├── js/                  # JavaScript files
│   └── icons/               # Icons
│   └── images/              # Images
├── index.html               # Homepage
└── README.md           
```

## Getting Started

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler gem
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kailarecio/kailarecio.github.io.git
   cd kailarecio.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```

4. **View in browser**  
   Open `http://localhost:4000` to see your site. (Or manually forward port 4000 to your host through "Ports" in the toolbar)

### Quick Setup for Your Own Site

1. Clone this repository
2. Rename the repository to `yourusername.github.io`
3. Update the content in `_data/` YAML files
4. Customize colors and styling in `assets/css/styles.css`
5. Replace images, files, etc in `assets/`

## Customization

### Content Updates

All content is stored in YAML files in the `_data/` directory:

**Site Structure** (`_data/structure.yml`)  
Rename the sections such that `name` is what the user will see, while `id` will have the content headers under `contents.yml`. There's no limit to the number of sections.
```yaml
sections:
  - name: "Section Name 1" 
    id: "section_name_1"
  - name: "Section Name 2"
    id: "section_name_2"
    ...
```

**Main Content** (`_data/contents.yml`)  
Fill in the values for the section contents with the format below. All content values are optional, and can either be omitted or set to an empty string `""`. If the subtitle is set to "Abstract", it will automatically be centralized. This can be amended in `_includes/layout.html`. Alternatively, any of the text entered in the yaml file will also be rendered as HTML.

```yaml
section_name_1:
  - title: "Appears with the `--accent-light` or `--accent-dark` color"
    subtitle: "Appears as bolded text in the `--text-light` or `--text-dark` color"
    description: "Brief summary with no custom styles applied"
    date: "Appears as the text in the pill on the right"
    url: "Links to the title text"
  
```

**Layout Template** (`_includes/layout.html`)  
The reusable template used across different sections for consistent styling and structure.

### Styling Customization

**Stylesheet** (`assets/css/styles.css`)  
- `page-style` properties are applied to the whole page
- `body` and `body.dark-mode` set light and dark mode implementation with CSS custom properties
- `pills` set all properties of the pills
- `section-*` have the section specifications
