# Interactive D3.js Map from Folium For Telecommuinication Cell Towers Data - Tunisia
# Source: https://opencellid.org/

# Acces the app: 
https://gh-mounir.github.io/Fog_D3_js/map.html

This is a research project under the research unit InnoV'Com Lab - Sup'Com Tunisia, that demonstrates the conversion of a Folium-generated map to an interactive D3.js map. If you are facing issues with large Folium map file sizes, this approach may help optimize and provide more flexibility using D3.js.

## Overview

Informations about the interactive layers:
## Meaning of MNC values

| MNC Values | Description                                       | Source ITU                                    |
|------------|---------------------------------------------------|-------------------------------------------------|
| 1          | Orange                                            | [ITU Region 6xx](https://en.wikipedia.org/wiki/Mobile_network_codes_in_ITU_region_6xx_(Africa)#cite_note-gsa_lte-10)  |
| 2          | Tunisie Telecom                                   | [ITU Region 6xx](https://en.wikipedia.org/wiki/Mobile_network_codes_in_ITU_region_6xx_(Africa)#cite_note-gsa_lte-10)  |
| 3          | Ooredoo                                           | [ITU Region 6xx](https://en.wikipedia.org/wiki/Mobile_network_codes_in_ITU_region_6xx_(Africa)#cite_note-gsa_lte-10)  |
| 54         | Unknown                                           | Not applicable                                |

Feel free to contribute, report issues, or suggest improvements!

Feel free to contribute, report issues, or suggest improvements!


The project involves the following steps:

1. **Understand D3.js:** Familiarize yourself with D3.js and its documentation.
2. **Extract Data:** Extract necessary data from the Folium map for use in D3.js.
3. **Recreate Map in D3.js:** Use D3.js to recreate the map visualization with interactivity.
4. **Optimize Data and Resources:** Optimize data and resources to reduce the overall file size.
5. **Integrate with Existing Web Page:** Embed the D3.js map within your existing web page.

## File Structure

- `index.html`: The main HTML file containing the D3.js map.
- `script.js`: The JavaScript file where D3.js code is implemented.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository