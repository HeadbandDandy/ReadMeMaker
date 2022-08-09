//switch statement below shows different badges for license

const badge = publiceLicense => {
    switch (license[0]) {
        case "Apache License":
            return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-red.svg)](https://opensource.org/licenses/Apache-2.0)"
            case "MIT License":
                return "[![License: (https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)"
                case "GNU License":
                    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
}

// below contains the template for the user section
//license constant added to generate badges above

const generateMarkdown = projectData => {
    const {author, title, email, username} = projectData;
    const {description, installation, usage, license, contributor, test, questions} = project;
    const licenseBadge = badge(license);
// below contains template format
    return `
# ${author}
# Follow me on GitHub: [github.com/${username}](https://github.com/${username})
# ${title}
#  Contact me at: [${email}](mailto:${email})
## Description
${description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributor](#contributor)
- [Tests](#tests)
- [Questions](#questions)
##Installation
${installation}
## Usage 
${usage}
## License
Under the ${license}
## Contributors
${contributor}
## Tests
${tests}
## Questions
${questions}
If you have any questions email me at: [${email}](mailto:${email})`;
}

module.exports = {generateMarkdown}