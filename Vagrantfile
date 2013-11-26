# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.network :forwarded_port, guest: 9080, host: 9080
  config.vm.network :forwarded_port, guest: 9081, host: 9081
  config.vm.synced_folder "./", "/vagrant_data", :owner=> 'vagrant', :group=>'www-data', :mount_options => ['dmode=775','fmode=775']

  config.vm.provision :shell, :inline => <<-EOS
    sudo apt-get update
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y ruby
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y rubygems
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y npm
    sudo DEBIAN_FRONTEND=noninteractive apt-get install -y git


    cd /vagrant_data
    sudo npm install -g grunt-cli
    sudo npm install -g bower
    sudo npm install -g yo
    sudo npm install -g karma
    sudo gem install haml
    sudo npm install
    sudo grunt server

    echo 'please open http://localhost:8080/'
    
  EOS
end
