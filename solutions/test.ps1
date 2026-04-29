
mkdir -p .github/workflows
touch ".github/workflows/whatif.yml"
touch ".github/workflows/deploy.yml"
mkdir -p bicep/dev
mkdir -p bicep/qa
mkdir -p bicep/uat
mkdir -p bicep/prod
Set-Content -Path "README.md" -Value "# Azure Image Builder Platform (AIBP) Application`n
`n
This repository contains the infrastructure and automation code for the Azure Image Builder Platform, which creates and manages custom virtual machine images for various use cases including Azure DevOps agents, GitHub runners, and specialized demo environments."
