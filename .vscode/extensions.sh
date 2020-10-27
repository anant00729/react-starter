
# Declare variables for colors
green=`tput setaf 2`
yellow=`tput setaf 3`
reset=`tput sgr0`
bold=$(tput bold)

echo "${green}${bold}Installing extensions ... ${green}( Will be ignored if already installed ) ${reset}\n\n\n"

# Install extensions in VS Code
code --install-extension EditorConfig.EditorConfig &
code --install-extension dbaeumer.vscode-eslint &
code --install-extension eamodio.gitlens &
code --install-extension esbenp.prettier-vscode &
code --install-extension joelday.docthis &
code --install-extension sonarsource.sonarlint-vscode &
code --install-extension vscode-styled-components &
code --install-extension ryu1kn.annotator
