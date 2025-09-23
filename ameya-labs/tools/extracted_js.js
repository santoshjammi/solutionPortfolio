        // OS-specific provisioning scripts
        const provisioningScripts = {
            ubuntu: (apps) => `# Update package list and upgrade system
sudo apt-get update
sudo apt-get upgrade -y
# Install essential build tools and utilities
sudo apt-get install -y build-essential curl wget git unzip software-properties-common
# Install user-specified applications
${apps.length > 0 ? `sudo apt-get install -y ${apps.join(' ')}` : '# No additional applications specified'}
# Configure system settings
echo "Configuring system settings..."
sudo timedatectl set-timezone UTC
echo "Provisioning complete. Ubuntu environment ready for development."`,
            debian: (apps) => `# Update package list and upgrade system
sudo apt-get update
sudo apt-get upgrade -y
# Install essential build tools and utilities
sudo apt-get install -y build-essential curl wget git unzip apt-transport-https
# Install user-specified applications
${apps.length > 0 ? `sudo apt-get install -y ${apps.join(' ')}` : '# No additional applications specified'}
# Configure system settings
echo "Configuring system settings..."
sudo timedatectl set-timezone UTC
echo "Provisioning complete. Debian environment ready for development."`,
            centos: (apps) => `# Update package list and upgrade system
sudo yum update -y
# Install essential build tools and utilities
sudo yum install -y gcc gcc-c++ make curl wget git unzip yum-utils
# Install EPEL repository for additional packages
sudo yum install -y epel-release
# Install user-specified applications
${apps.length > 0 ? `sudo yum install -y ${apps.join(' ')}` : '# No additional applications specified'}
# Configure system settings
echo "Configuring system settings..."
sudo timedatectl set-timezone UTC
echo "Provisioning complete. CentOS environment ready for development."`,
            fedora: (apps) => `# Update package list and upgrade system
sudo dnf update -y
# Install essential build tools and utilities
sudo dnf install -y gcc gcc-c++ make curl wget git unzip
# Install user-specified applications
${apps.length > 0 ? `sudo dnf install -y ${apps.join(' ')}` : '# No additional applications specified'}
# Configure system settings
echo "Configuring system settings..."
sudo timedatectl set-timezone UTC
echo "Provisioning complete. Fedora environment ready for development."`,
            kali: (apps) => `# Update package list and upgrade system
sudo apt-get update
sudo apt-get upgrade -y
# Install essential build tools and utilities
sudo apt-get install -y build-essential curl wget git unzip kali-linux-default
# Install user-specified applications
${apps.length > 0 ? `sudo apt-get install -y ${apps.join(' ')}` : '# No additional applications specified'}
# Configure system settings
echo "Configuring system settings..."
sudo timedatectl set-timezone UTC
echo "Provisioning complete. Kali Linux environment ready for development and security testing."`,
            windows: (apps) => `# Install Chocolatey package manager
if (!(Get-Command choco -ErrorAction SilentlyContinue)) {
    Set-ExecutionPolicy Bypass -Scope Process -Force
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
}
# Install essential tools
choco install -y git curl wget
# Install user-specified applications
${apps.length > 0 ? `choco install -y ${apps.join(' ')}` : '# No additional applications specified'}
# Configure system settings
Write-Host "Configuring system settings..."
Set-TimeZone -Id "UTC"
Write-Host "Provisioning complete. Windows environment ready for development."`,
            opensuse: (apps) => `# Update package list and upgrade system
sudo zypper refresh
sudo zypper update -y
# Install essential build tools and utilities
sudo zypper install -y gcc gcc-c++ make curl wget git unzip
# Install user-specified applications
${apps.length > 0 ? `sudo zypper install -y ${apps.join(' ')}` : '# No additional applications specified'}
# Configure system settings
echo "Configuring system settings..."
sudo timedatectl set-timezone UTC
echo "Provisioning complete. openSUSE environment ready for development."`,
            alpine: (apps) => `# Update package list and upgrade system
sudo apk update
sudo apk upgrade
# Install essential build tools and utilities
sudo apk add build-base curl wget git unzip
# Install user-specified applications
${apps.length > 0 ? `sudo apk add ${apps.join(' ')}` : '# No additional applications specified'}
# Configure system settings
echo "Configuring system settings..."
sudo setup-timezone -z UTC
echo "Provisioning complete. Alpine Linux environment ready for development."`
        };
        // OS-specific box recommendations
        const osBoxes = {
            ubuntu: 'ubuntu/focal64',
            debian: 'debian/bullseye64',
            centos: 'centos/7',
            fedora: 'fedora/35-cloud-base',
            kali: 'kalilinux/rolling',
            windows: 'gusztavvargadr/windows-10',
            opensuse: 'opensuse/Leap-15.3.x86_64',
            alpine: 'generic/alpine38'
        // Auto-populate box field based on OS selection
        document.getElementById('os-select').addEventListener('change', (e) => {
            const selectedOS = e.target.value;
            const boxInput = document.getElementById('box');
            const recommendedBox = osBoxes[selectedOS];
            if (recommendedBox && boxInput.value === 'ubuntu/focal64, python3.9, openjdk-11-jdk') {
                // Only auto-populate if it's still the default Ubuntu value
                boxInput.value = `${recommendedBox}, python3.9, openjdk-11-jdk`;
            }
        });
        // AI Assistance Toggle
        document.getElementById('ai-assist').addEventListener('change', (e) => {
            const apiSection = document.getElementById('api-key-section');
            if (e.target.checked) {
                apiSection.classList.remove('hidden');
            } else {
                apiSection.classList.add('hidden');
            }
        });
        // OpenAI Package Resolution Function
        async function resolvePackagesWithAI(userPackages, targetOS, apiKey) {
            const prompt = `Convert these software package requests to the correct package names for ${targetOS}:
User requested packages: ${userPackages.join(', ')}
Please provide the exact package names that should be installed on ${targetOS}. Consider:
- Package naming conventions for ${targetOS}
- Development headers/libraries when applicable
- Common package groups or meta-packages
- Version-specific packages if needed
Return only a comma-separated list of package names, no explanations.`;
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [{
                            role: 'user',
                            content: prompt
                        }],
                        max_tokens: 200,
                        temperature: 0.1
                    })
                });
                if (!response.ok) {
                    throw new Error(`OpenAI API error: ${response.status}`);
                }
                const data = await response.json();
                const resolvedPackages = data.choices[0].message.content.trim().split(',').map(pkg => pkg.trim()).filter(pkg => pkg);
                return resolvedPackages;
            } catch (error) {
                console.error('OpenAI API error:', error);
                throw error;
            }
        }
        document.getElementById('generate-button').addEventListener('click', async () => {
            const boxesAndApps = document.getElementById('box').value.split(',').map(item => item.trim()).filter(item => item !== '');
            const box = boxesAndApps[0];
            let apps = boxesAndApps.slice(1);
            const cpus = document.getElementById('cpus').value;
            const memory = document.getElementById('memory').value;
            const hostname = document.getElementById('hostname').value;
            const selectedOS = document.getElementById('os-select').value;
            const useAI = document.getElementById('ai-assist').checked;
            const apiKey = document.getElementById('openai-key').value;
            if (!box) {
                document.getElementById('vagrantfile-output').textContent = '# Please enter a Vagrant box.';
                document.getElementById('output-container').classList.remove('hidden');
                return;
            }
            const provisionScript = provisioningScripts[selectedOS] ? provisioningScripts[selectedOS](apps) : provisioningScripts.ubuntu(apps);
# Configure system settings
echo "Configuring system settings..."
sudo timedatectl set-timezone UTC
# Create a development user if needed
# sudo useradd -m -s /bin/bash devuser
# sudo usermod -aG sudo devuser
echo "Provisioning complete. System ready for development."`;
            const vagrantfileContent = `# -*- mode: ruby -*-
# vi: set ft=ruby :
# Vagrantfile - Generated by Ameya Labs Vagrantfile Generator
# Generated on: ${new Date().toISOString().split('T')[0]}
# Following 21st.dev modern development practices
Vagrant.configure("2") do |config|
  # Base box configuration
  config.vm.box = "${box}"
  config.vm.hostname = "${hostname}"
  # VirtualBox provider configuration
  config.vm.provider "virtualbox" do |vb|
    # VM name in VirtualBox GUI
    vb.name = "${hostname}"
    # Hardware resources
    vb.memory = "${memory}"
    vb.cpus = "${cpus}"
    # Display settings
    vb.gui = false
    # Performance optimizations
    vb.customize ["modifyvm", :id, "--ioapic", "on"]
    vb.customize ["modifyvm", :id, "--largepages", "on"]
    vb.customize ["modifyvm", :id, "--pae", "on"]
  end
  # Network configuration
  # Forwarded ports for common development services
  config.vm.network "forwarded_port", guest: 80, host: 8080, auto_correct: true
  config.vm.network "forwarded_port", guest: 443, host: 8443, auto_correct: true
  config.vm.network "forwarded_port", guest: 3000, host: 3000, auto_correct: true  # Node.js/React
  config.vm.network "forwarded_port", guest: 5000, host: 5000, auto_correct: true  # Flask/Django
  config.vm.network "forwarded_port", guest: 5432, host: 5432, auto_correct: true  # PostgreSQL
  # Private network for inter-VM communication
  config.vm.network "private_network", type: "dhcp"
  # Public network (bridged) - uncomment if needed
  # config.vm.network "public_network"
  # Shared folders
  # Sync the project directory
  config.vm.synced_folder ".", "/vagrant", type: "virtualbox"
  # Additional shared folders (uncomment and modify as needed)
  # config.vm.synced_folder "../data", "/data", type: "virtualbox"
  # config.vm.synced_folder "../logs", "/logs", type: "virtualbox"
  # SSH configuration
  config.ssh.forward_agent = true
  config.ssh.forward_x11 = false
  # Provisioning
  config.vm.provision "shell", inline: <<-SHELL
${provisionScript}
  SHELL
  # Optional: Use Ansible for more complex provisioning
  # config.vm.provision "ansible" do |ansible|
  #   ansible.playbook = "playbook.yml"
  # end
  # VM customization
  config.vm.post_up_message = <<-MESSAGE
  ╔══════════════════════════════════════════════════════════════╗
  ║                      VM Provisioned Successfully!           ║
  ║                                                              ║
  ║  VM Hostname: ${hostname}
  ║  Memory: ${memory}MB
  ║  CPUs: ${cpus}
  ║                                                              ║
  ║  Access your VM:                                             ║
  ║    • SSH: vagrant ssh                                        ║
  ║    • Web: http://localhost:8080                             ║
  ║    • App: http://localhost:3000 (if running)                ║
  ║                                                              ║
  ║  Useful commands:                                           ║
  ║    • vagrant halt     - Stop the VM                         ║
  ║    • vagrant destroy  - Delete the VM                       ║
  ║    • vagrant suspend  - Pause the VM                        ║
  ║    • vagrant resume   - Resume the VM                       ║
  ║                                                              ║
  ╚══════════════════════════════════════════════════════════════╝
  MESSAGE
end`;            document.getElementById('vagrantfile-output').textContent = vagrantfileContent;
            document.getElementById('output-container').classList.remove('hidden');
            // Generate QR Code with URL to the tool
            const qrContainer = document.getElementById('qrcode');
            qrContainer.innerHTML = ''; // Clear previous QR code
            const currentUrl = window.location.href;
            new QRCode(qrContainer, {
                text: currentUrl,
                width: 128,
                height: 128,
                colorDark: "#071226",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            document.getElementById('qr-container').classList.remove('hidden');
            } finally {
                // Reset button state
                generateBtn.textContent = originalText;
                generateBtn.disabled = false;
            }
        });
        // Copy to clipboard functionality
        document.getElementById('copy-button').addEventListener('click', () => {
            const output = document.getElementById('vagrantfile-output');
            navigator.clipboard.writeText(output.textContent).then(() => {
                const button = document.getElementById('copy-button');
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.classList.add('bg-green-500', 'hover:bg-green-600');
                button.classList.remove('bg-ameya-electric', 'hover:bg-ameya-accent');
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('bg-green-500', 'hover:bg-green-600');
                    button.classList.add('bg-ameya-electric', 'hover:bg-ameya-accent');
                }, 2000);
            });
        });
